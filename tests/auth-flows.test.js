const { JSDOM, VirtualConsole } = require('jsdom');
const fs = require('fs');
const path = require('path');
const ROOT = path.join(__dirname, '..');
const html = fs.readFileSync(path.join(ROOT, 'index.html'), 'utf8');

let pass = 0, fail = 0;
function ok(cond, label) {
  if (cond) { pass++; console.log('  PASS  ' + label); }
  else { fail++; console.log('  FAIL  ' + label); }
}
const sleep = (ms) => new Promise(r => setTimeout(r, ms));

function boot({ hash = '', storage = {}, auth = {}, fetchImpl } = {}) {
  const calls = { signUp: [], signIn: [], otp: [], reset: [], resend: [], update: [], signOut: [], fetch: [], oauth: [] };
  let listener = null;
  const client = {
    auth: {
      onAuthStateChange(cb) { listener = cb; return { data: { subscription: { unsubscribe() {} } } }; },
      async signUp(a) { calls.signUp.push(a); return auth.signUp ? auth.signUp(a) : { data: { user: { identities: [{}] }, session: null }, error: null }; },
      async signInWithPassword(a) { calls.signIn.push(a); return auth.signIn ? auth.signIn(a) : { data: { session: null }, error: { message: 'Invalid login credentials' } }; },
      async signInWithOtp(a) { calls.otp.push(a); return auth.otp ? auth.otp(a) : { data: {}, error: null }; },
      async resetPasswordForEmail(e, o) { calls.reset.push([e, o]); return { data: {}, error: null }; },
      async resend(a) { calls.resend.push(a); return { data: {}, error: null }; },
      async updateUser(a) { calls.update.push(a); return auth.updateUser ? auth.updateUser(a) : { data: {}, error: null }; },
      async signOut(a) { calls.signOut.push(a); return { error: null }; },
      async signInWithOAuth(a) { calls.oauth.push(a); return { data: {}, error: null }; },
      async getSession() { return { data: { session: auth.currentSession || null } }; },
    },
    from() { const q = { select: () => q, eq: () => q, upsert: () => Promise.resolve({ error: null }), then: (r) => r({ data: [], error: null }) }; return q; },
  };

  const vc = new VirtualConsole();
  const errors = [];
  vc.on('jsdomError', (e) => { if (!/Not implemented/.test(e.message)) errors.push(e.message); });
  const dom = new JSDOM(html, {
    url: 'https://viatestprep.test/' + (hash ? '#' + hash : ''),
    runScripts: 'dangerously',
    pretendToBeVisual: true,
    virtualConsole: vc,
    beforeParse(w) {
      w.supabase = { createClient: () => client }; w.IELTS_TEST_DATA = {};
      Object.entries(storage).forEach(([k, v]) => w.localStorage.setItem(k, v));
      w.matchMedia = w.matchMedia || (() => ({ matches: false, addEventListener() {}, removeEventListener() {} }));
      w.IntersectionObserver = class { observe() {} unobserve() {} disconnect() {} };
      w.HTMLCanvasElement.prototype.getContext = () => null;
      w.scrollTo = () => {};
      w.alert = () => {};
      w.confirm = () => true;
      w.fetch = async (url, opts) => {
        calls.fetch.push([String(url), opts]);
        if (fetchImpl) return fetchImpl(String(url), opts);
        return { ok: true, status: 200, json: async () => ({ ok: true, id: 'stu-1', name: 'Test Student', accessLevel: 'full', accessExpiresAt: '' }) };
      };
    },
  });
  return { dom, w: dom.window, d: dom.window.document, calls, fire: (ev, s) => listener && listener(ev, s), errors };
}

const $ = (d, id) => d.getElementById(id);
const hidden = (d, id) => $(d, id).classList.contains('hidden');
const session = (extra = {}) => ({ access_token: 'tok-' + Math.random(), user: { id: 'u1', email: 'a@b.com', user_metadata: {}, ...extra } });

(async () => {
  console.log('1. Fresh load');
  {
    const t = boot();
    await sleep(150);
    ok(!hidden(t.d, 'view-landing'), 'landing visible when logged out');
    ok(t.w.getOwnerKey() === '', 'no hard-coded owner key fallback');
    ok(!/JW99DMjLLV9KDC4E/.test(html), 'owner key string absent from index.html');
    const blocks = [...t.d.querySelectorAll('.dev-bypass-block')];
    ok(blocks.length === 2 && blocks.every(b => b.classList.contains('hidden')), 'dev bypass buttons hidden for visitors');
    t.w.launchAdminBypass();
    ok(t.w.localStorage.getItem('viatestprep_unlocked') !== 'true', 'admin bypass refuses without owner key');
    t.w.launchStudentBypass();
    ok(t.w.localStorage.getItem('viatestprep_unlocked') !== 'true', 'student bypass refuses without owner key');
    ok(t.errors.length === 0, 'no script errors on load ' + (t.errors[0] || ''));
  }

  console.log('2. Owner device sees dev buttons');
  {
    const t = boot({ storage: { viatestprep_owner_key: 'k' } });
    await sleep(150);
    ok([...t.d.querySelectorAll('.dev-bypass-block')].every(b => !b.classList.contains('hidden')), 'dev buttons visible when owner key stored');
  }

  console.log('3. Student modal + signup needing email confirmation');
  {
    const t = boot();
    await sleep(150);
    t.w.openAccessModal();
    t.w.selectModalRole('student');
    ok(!hidden(t.d, 'm-step-student'), 'student step shown');
    ok($(t.d, 'm-student-auth-password').getAttribute('autocomplete') === 'new-password', 'signup: password autocomplete=new-password');
    t.w.setAuthMode('student', 'login');
    ok($(t.d, 'm-student-auth-password').getAttribute('autocomplete') === 'current-password', 'login: password autocomplete=current-password');
    ok(hidden(t.d, 'm-student-name'), 'login mode hides name field');
    t.w.setAuthMode('student', 'signup');

    $(t.d, 'm-student-auth-email').value = 'bad-email';
    $(t.d, 'm-student-auth-password').value = 'secret1';
    await t.w.handleStudentAuthSubmit();
    ok(/does not look right/.test($(t.d, 'm-student-auth-status').textContent), 'invalid email -> friendly message');
    $(t.d, 'm-student-auth-email').value = 'New@Student.com ';
    $(t.d, 'm-student-auth-password').value = '123';
    await t.w.handleStudentAuthSubmit();
    ok(/at least 6/.test($(t.d, 'm-student-auth-status').textContent), 'short password -> message before any network call');
    ok(t.calls.signUp.length === 0, 'validation errors never hit Supabase');
    ok(JSON.parse(t.w.localStorage.getItem('viatestprep_student_signup_attempts') || '[]').length === 0, 'validation failures do not burn signup allowance');

    $(t.d, 'm-student-auth-password').value = 'secret1';
    await t.w.handleStudentAuthSubmit();
    ok(t.calls.signUp.length === 1 && t.calls.signUp[0].email === 'new@student.com', 'email trimmed + lower-cased');
    ok(t.calls.signUp[0].options.emailRedirectTo === 'https://viatestprep.test/', 'confirmation redirect set');
    ok(!hidden(t.d, 'm-student-sent') && hidden(t.d, 'm-student-main'), '"check your inbox" panel visible (old code wiped this message)');
    ok(/new@student\.com/.test($(t.d, 'm-student-sent-body').textContent), 'panel names the address');
    ok($(t.d, 'm-student-sent-resend').disabled === true, 'resend is on cooldown');
    ok(JSON.parse(t.w.localStorage.getItem('viatestprep_student_signup_attempts')).length === 1, 'successful signup counted once');
    t.w.hideAuthSent('student');
    ok(!hidden(t.d, 'm-student-main'), 'can go back to change email');
  }

  console.log('4. Signup with already-registered email (Supabase hides it)');
  {
    const t = boot({ auth: { signUp: () => ({ data: { user: { identities: [] }, session: null }, error: null }) } });
    await sleep(150);
    t.w.openAccessModal(); t.w.selectModalRole('student');
    $(t.d, 'm-student-auth-email').value = 'old@student.com';
    $(t.d, 'm-student-auth-password').value = 'secret1';
    await t.w.handleStudentAuthSubmit();
    ok(/already registered/.test($(t.d, 'm-student-auth-status').textContent), 'tells them to log in instead');
    ok(hidden(t.d, 'm-student-sent'), 'does NOT claim an email was sent');
    ok($(t.d, 'm-student-tab-login').classList.contains('active-tab'), 'switches to Log In tab, message kept');
  }

  console.log('5. Password login success + dedupe');
  {
    const s = session({ user_metadata: { role: 'student' } });
    const t = boot({ auth: { signIn: () => ({ data: { session: s }, error: null }) } });
    await sleep(150);
    t.w.openAccessModal(); t.w.selectModalRole('student'); t.w.setAuthMode('student', 'login');
    $(t.d, 'm-student-auth-email').value = 'a@b.com';
    $(t.d, 'm-student-auth-password').value = 'secret1';
    const p = t.w.handleStudentAuthSubmit();
    t.fire('SIGNED_IN', s);           // listener fires too, like real supabase-js
    await p; await sleep(60);
    ok(t.w.localStorage.getItem('viatestprep_unlocked') === 'true' && t.w.localStorage.getItem('viatestprep_user_role') === 'student', 'student unlocked');
    ok(!hidden(t.d, 'view-student'), 'student portal visible');
    ok(t.calls.fetch.filter(c => c[0].includes('action=register')).length === 1, 'register called exactly once (no double-finish race)');
    ok(t.w.localStorage.getItem('viatestprep_active_student_id') === 'stu-1', 'student id stored');
    ok(t.w.localStorage.getItem('viatestprep_last_email') === 'a@b.com', 'email remembered for next time');
    // Tab refocus / token refresh => same user, new token: must NOT re-render portal
    const before = t.calls.fetch.length;
    t.fire('SIGNED_IN', { ...s, access_token: 'refreshed-token' });
    await sleep(60);
    ok(t.calls.fetch.length === before, 'repeat SIGNED_IN for same user ignored (no mid-test re-render)');
    t.w.document.getElementById('m-student-auth-btn');
  }

  console.log('6. Wrong password');
  {
    const t = boot();
    await sleep(150);
    t.w.openAccessModal(); t.w.selectModalRole('student'); t.w.setAuthMode('student', 'login');
    $(t.d, 'm-student-auth-email').value = 'a@b.com';
    $(t.d, 'm-student-auth-password').value = 'nope123';
    await t.w.handleStudentAuthSubmit();
    ok(/don't match/.test($(t.d, 'm-student-auth-status').textContent), 'friendly wrong-password message');
    ok(!$(t.d, 'm-student-auth-btn').disabled, 'button re-enabled');
    ok(!hidden(t.d, 'm-student-resend-row'), 'resend-confirmation link offered');
  }

  console.log('7. Magic link + forgot password');
  {
    const t = boot();
    await sleep(150);
    t.w.openAccessModal(); t.w.selectModalRole('student');
    await t.w.sendMagicLink('student');
    ok(t.calls.otp.length === 0 && /Enter your email/.test($(t.d, 'm-student-auth-status').textContent), 'asks for email first');
    $(t.d, 'm-student-auth-email').value = 'me@gmail.com';
    await t.w.sendMagicLink('student');
    ok(t.calls.otp.length === 1 && t.calls.otp[0].options.data.role === 'student', 'login link requested with role');
    ok(!hidden(t.d, 'm-student-sent') && !hidden(t.d, 'm-student-sent-mail'), 'inbox panel + Open Gmail shown');
    t.w.hideAuthSent('student');
    await t.w.sendMagicLink('student');
    ok(t.calls.otp.length === 1, 'second tap inside cooldown does not spam an email');
    t.w.hideAuthSent('student');
    await t.w.handleStudentForgotPassword();
    ok(t.calls.reset.length === 1 && t.calls.reset[0][1].redirectTo === 'https://viatestprep.test/', 'reset email has redirectTo back to the app');
    ok(/Reset link sent/.test($(t.d, 'm-student-sent-title').textContent), 'reset confirmation panel shown');
  }

  console.log('8. Password-reset link: must NOT auto-login, must ask for new password');
  {
    const s = session({ user_metadata: { role: 'student' } });
    const t = boot({ hash: 'access_token=abc&refresh_token=r&type=recovery', storage: { oauth_pending_role: 'student' }, auth: { currentSession: s } });
    await sleep(150);
    t.fire('SIGNED_IN', s);
    await sleep(60);
    ok(t.w.localStorage.getItem('viatestprep_unlocked') !== 'true', 'recovery SIGNED_IN does not log the person in');
    t.fire('PASSWORD_RECOVERY', s);
    await sleep(60);
    ok(!hidden(t.d, 'recoveryModal'), 'set-new-password screen opens');
    $(t.d, 'recovery-password').value = 'newpass1';
    $(t.d, 'recovery-confirm').value = 'different';
    await t.w.handleRecoverySubmit();
    ok(/do not match/.test($(t.d, 'recovery-status').textContent) && t.calls.update.length === 0, 'mismatch caught client-side');
    $(t.d, 'recovery-confirm').value = 'newpass1';
    await t.w.handleRecoverySubmit(); await sleep(80);
    ok(t.calls.update.length === 1 && t.calls.update[0].password === 'newpass1', 'password updated');
    ok(hidden(t.d, 'recoveryModal'), 'recovery screen closes');
    ok(t.w.localStorage.getItem('viatestprep_unlocked') === 'true' && !hidden(t.d, 'view-student'), 'signed straight into portal afterwards');
  }

  console.log('9. Signed in but role unknown (link opened on another device)');
  {
    const s = session();
    const t = boot();
    await sleep(150);
    t.fire('SIGNED_IN', s);
    await sleep(60);
    ok(!hidden(t.d, 'accessModal') && !hidden(t.d, 'm-step-role'), 'asks "who are you?" instead of guessing');
    ok(t.calls.fetch.filter(c => c[0].includes('register')).length === 0, 'nothing registered yet');
    t.w.selectModalRole('consultancy');
    await sleep(80);
    ok(t.calls.fetch.some(c => c[0].includes('/api/consultancy/account')), 'consultancy account loaded after choice');
    ok(t.calls.update.length === 1 && t.calls.update[0].data.role === 'consultancy', 'choice saved on the account');
  }

  console.log('10. Explicit role beats stored account role');
  {
    const s = session({ user_metadata: { role: 'consultancy' } });
    const t = boot({ auth: { signIn: () => ({ data: { session: s }, error: null }) } });
    await sleep(150);
    t.w.openAccessModal(); t.w.selectModalRole('student'); t.w.setAuthMode('student', 'login');
    $(t.d, 'm-student-auth-email').value = 'a@b.com'; $(t.d, 'm-student-auth-password').value = 'secret1';
    const p = t.w.handleStudentAuthSubmit(); t.fire('SIGNED_IN', s); await p; await sleep(60);
    ok(t.w.localStorage.getItem('viatestprep_user_role') === 'student', 'student tab login lands in student portal');
  }

  console.log('11. Google + in-app browser');
  {
    const t = boot();
    await sleep(150);
    t.w.openAccessModal(); t.w.selectModalRole('student');
    await t.w.signInWithGoogle('student');
    ok(t.calls.oauth.length === 1 && t.calls.oauth[0].options.queryParams.prompt === 'select_account', 'Google opens with account chooser');
    ok(t.w.localStorage.getItem('oauth_pending_role') === 'student', 'role remembered across the redirect');
    const g = t.d.querySelector('#m-step-student button[onclick^="signInWithGoogle"]');
    const form = $(t.d, 'm-student-form');
    ok(g.compareDocumentPosition(form) & 4, 'Google button comes before the email form');
  }

  console.log('12. Returning visitor opens on Log In');
  {
    const t = boot({ storage: { viatestprep_returning_student: '1', viatestprep_last_email: 'back@me.com' } });
    await sleep(150);
    t.w.openAccessModal(); t.w.selectModalRole('student');
    ok($(t.d, 'm-student-tab-login').classList.contains('active-tab'), 'defaults to Log In');
    ok($(t.d, 'm-student-auth-email').value === 'back@me.com', 'email prefilled');
  }

  console.log('13. Logout really signs out');
  {
    const s = session({ user_metadata: { role: 'student' } });
    const t = boot({ storage: { viatestprep_unlocked: 'true', viatestprep_user_role: 'student', viatestprep_student_access: 'mocks', userEmail: 'a@b.com', 'sb-xyz-auth-token': '{}' } });
    await sleep(150);
    await t.w.handleLogout();
    ok(t.calls.signOut.length === 1 && t.calls.signOut[0].scope === 'local', 'awaited local signOut before leaving page');
    ok(t.w.localStorage.getItem('sb-xyz-auth-token') === null, 'stored Supabase session removed');
    ok(['viatestprep_unlocked', 'viatestprep_user_role', 'viatestprep_student_access', 'userEmail'].every(k => t.w.localStorage.getItem(k) === null), 'all auth flags cleared');
  }

  console.log('14. Consultancy signup needs a name; profile load failure is retryable');
  {
    const t = boot();
    await sleep(150);
    t.w.openAccessModal(); t.w.selectModalRole('consultancy');
    $(t.d, 'm-consultancy-auth-email').value = 'c@agency.com'; $(t.d, 'm-consultancy-auth-password').value = 'secret1';
    await t.w.handleConsultancyAuthSubmit();
    ok(/consultancy name/.test($(t.d, 'm-consultancy-auth-status').textContent) && t.calls.signUp.length === 0, 'name required for consultancy signup');
    const s = session();
    const t2 = boot({ fetchImpl: async () => ({ ok: true, status: 500, json: async () => ({ ok: false, error: 'DB down' }) }) });
    await sleep(150);
    await t2.w.finishConsultancySession(s, 'X', true);
    ok(/DB down/.test(t2.d.getElementById('auth-notice-banner').textContent), 'error surfaced');
    ok(t2.w.localStorage.getItem('viatestprep_unlocked') !== 'true', 'not unlocked on failure');
  }


  console.log('15. Regression guards');
  {
    // The old owner key must never come back into any shipped file.
    const walk = (dir) => fs.readdirSync(dir, { withFileTypes: true }).flatMap(e => {
      if (['node_modules', '.git', 'tests', 'scratch'].includes(e.name)) return [];
      const p = path.join(dir, e.name);
      return e.isDirectory() ? walk(p) : (/\.(js|html|json|md)$/.test(e.name) ? [p] : []);
    });
    const leaked = walk(ROOT).filter(f => fs.readFileSync(f, 'utf8').includes('JW99DMjLLV9KDC4E'));
    ok(leaked.length === 0, 'old owner key not present in any file ' + leaked.join(','));

    // Every function the login screens call must exist (catches typos/renames).
    const t = boot();
    await sleep(150);
    const names = new Set();
    t.d.querySelectorAll('#accessModal [onclick], #accessModal [onsubmit], #recoveryModal [onclick], #recoveryModal [onsubmit]').forEach(el => {
      ['onclick', 'onsubmit'].forEach(a => {
        (el.getAttribute(a) || '').replace(/\b([A-Za-z_]\w*)\s*\(/g, (m, fn) => { if (!['event', 'if'].includes(fn) && !/^(preventDefault)$/.test(fn)) names.add(fn); return m; });
      });
    });
    const missing = [...names].filter(fn => typeof t.w[fn] !== 'function');
    ok(missing.length === 0, 'every login-screen handler exists (' + names.size + ' checked) ' + missing.join(','));

    // Server-side owner gate fails closed.
    delete process.env.OWNER_BYPASS_KEY;
    delete require.cache[require.resolve(path.join(ROOT, 'api/_lib/ownerAuth'))];
    let gate = require(path.join(ROOT, 'api/_lib/ownerAuth'));
    ok(gate.isOwner('anything') === false && gate.isOwner('') === false, 'owner gate refuses everyone when OWNER_BYPASS_KEY is unset');
    process.env.OWNER_BYPASS_KEY = 'unit-test-key';
    delete require.cache[require.resolve(path.join(ROOT, 'api/_lib/ownerAuth'))];
    gate = require(path.join(ROOT, 'api/_lib/ownerAuth'));
    ok(gate.isOwner('unit-test-key') === true && gate.isOwner('unit-test-kez') === false, 'owner gate accepts only the exact key');
  }

  console.log('\n' + pass + ' passed, ' + fail + ' failed');
  process.exit(fail ? 1 : 0);
})();
