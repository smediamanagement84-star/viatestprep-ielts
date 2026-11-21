// Runs the real page with the REAL supabase-js library (the same one the live
// site loads from the CDN), talking to a pretend Supabase auth server.
// This checks the things a hand-written stub can't: the real library's events,
// session saving, URL-hash handling for email links, and request formats.
const { JSDOM, VirtualConsole } = require('jsdom');
const fs = require('fs');
const path = require('path');
const ROOT = path.join(__dirname, '..');
const html = fs.readFileSync(path.join(ROOT, 'index.html'), 'utf8');
const SUPA_URL = html.match(/SUPABASE_URL\s*=\s*'([^']+)'/)[1];
const STORAGE_KEY = 'sb-' + new URL(SUPA_URL).hostname.split('.')[0] + '-auth-token';
const supabaseUmd = fs.readFileSync(require.resolve('@supabase/supabase-js/dist/umd/supabase.js'), 'utf8');

let pass = 0, fail = 0;
function ok(cond, label) {
  if (cond) { pass++; console.log('  PASS  ' + label); }
  else { fail++; console.log('  FAIL  ' + label); }
}
const sleep = (ms) => new Promise(r => setTimeout(r, ms));
const b64u = (o) => Buffer.from(JSON.stringify(o)).toString('base64url');

// ----------------------------------------------------- pretend Supabase auth
const users = new Map();   // email -> user record
const log = [];            // every auth request the page made
let uid = 0;

let settingsNow = { external: { email: true, google: false } };
const smsSent = [];
function userJson(u) {
  return {
    id: u.id, aud: 'authenticated', role: 'authenticated', email: u.email || '', phone: u.phone || '',
    email_confirmed_at: '2026-01-01T00:00:00Z', confirmed_at: '2026-01-01T00:00:00Z',
    app_metadata: { provider: 'email', providers: ['email'] }, user_metadata: u.user_metadata || {},
    identities: [{ id: u.id, user_id: u.id, identity_data: { email: u.email }, provider: 'email' }],
    created_at: '2026-01-01T00:00:00Z', updated_at: '2026-01-01T00:00:00Z',
  };
}
function jwtFor(u) {
  return [b64u({ alg: 'HS256', typ: 'JWT' }), b64u({ sub: u.id, email: u.email || '', role: 'authenticated', aud: 'authenticated', exp: Math.floor(Date.now() / 1000) + 3600 }), 'sig'].join('.');
}
function sessionJson(u) {
  return { access_token: jwtFor(u), token_type: 'bearer', expires_in: 3600, expires_at: Math.floor(Date.now() / 1000) + 3600, refresh_token: 'refresh-' + u.id, user: userJson(u) };
}
const userFromBearer = (auth) => {
  const t = (auth || '').replace(/^Bearer /, '');
  try { const p = JSON.parse(Buffer.from(t.split('.')[1], 'base64url').toString()); return [...users.values()].find(x => x.id === p.sub) || null; } catch (e) { return null; }
};
const json = (code, body) => new Response(code === 204 ? null : JSON.stringify(body), { status: code, headers: { 'Content-Type': 'application/json' } });

function addUser(email, password, meta, phone) {
  const u = { id: 'user-' + (++uid), email, phone, password, user_metadata: meta || {} };
  users.set(email || phone, u);
  return u;
}

async function fakeSupabase(urlStr, opts = {}) {
  const url = new URL(urlStr);
  const body = opts.body ? JSON.parse(opts.body) : {};
  const headers = {}; for (const [k, v] of Object.entries(opts.headers || {})) headers[k.toLowerCase()] = v;
  const p = url.pathname.replace('/auth/v1', '');
  log.push({ method: opts.method || 'GET', path: p, query: Object.fromEntries(url.searchParams), body });

  if (p === '/settings') return json(200, { ...settingsNow, mailer_autoconfirm: true, disable_signup: false });
  if (p === '/signup') {
    if (users.has(body.email)) return json(422, { code: 422, error_code: 'user_already_exists', msg: 'User already registered' });
    return json(200, sessionJson(addUser(body.email, body.password, body.data)));
  }
  if (p === '/token' && url.searchParams.get('grant_type') === 'password') {
    const u = users.get(body.email);
    return u && u.password === body.password ? json(200, sessionJson(u)) : json(400, { code: 400, error_code: 'invalid_credentials', msg: 'Invalid login credentials' });
  }
  if (p === '/token' && url.searchParams.get('grant_type') === 'refresh_token') {
    const u = [...users.values()].find(x => 'refresh-' + x.id === body.refresh_token);
    return u ? json(200, sessionJson(u)) : json(400, { code: 400, error_code: 'refresh_token_not_found', msg: 'Invalid Refresh Token' });
  }
  if (p === '/otp' && body.phone) { smsSent.push(body.phone); return json(200, { message_id: 'sms-1' }); }
  if (p === '/verify') {
    // pretend SMS: the code is always 123456; creating the account on first use
    if (body.type !== 'sms' || body.token !== '123456' || !smsSent.includes(body.phone)) return json(403, { code: 403, error_code: 'otp_expired', msg: 'Token has expired or is invalid' });
    const digits = body.phone.replace(/\D/g, '');
    const u = users.get(digits) || addUser('', 'unused', { role: 'student' }, digits);
    return json(200, sessionJson(u));
  }
  if (p === '/otp' || p === '/recover') return json(200, {});
  if (p === '/user' && (opts.method || 'GET') === 'GET') {
    const u = userFromBearer(headers.authorization);
    return u ? json(200, userJson(u)) : json(401, { code: 401, msg: 'invalid JWT' });
  }
  if (p === '/user' && opts.method === 'PUT') {
    const u = userFromBearer(headers.authorization);
    if (!u) return json(401, { code: 401, msg: 'invalid JWT' });
    if (body.password) u.password = body.password;
    if (body.data) u.user_metadata = { ...u.user_metadata, ...body.data };
    return json(200, userJson(u));
  }
  if (p === '/logout') return json(204);
  return json(404, { msg: 'not mocked: ' + p });
}

// ------------------------------------------------------------------ the page
const doms = [];
function boot({ hash = '', storage = {} } = {}) {
  const appCalls = [];
  const vc = new VirtualConsole();
  const errors = [];
  vc.on('jsdomError', (e) => { if (!/Not implemented/.test(e.message)) errors.push(e.message); });
  const dom = new JSDOM(html, {
    url: 'https://viatestprep.test/' + (hash ? '#' + hash : ''),
    runScripts: 'dangerously', pretendToBeVisual: true, virtualConsole: vc,
    beforeParse(w) {
      Object.entries(storage).forEach(([k, v]) => w.localStorage.setItem(k, v));
      w.Response = Response; w.Headers = Headers; w.Request = Request;
      w.IELTS_TEST_DATA = {};
      w.matchMedia = () => ({ matches: false, addEventListener() {}, removeEventListener() {} });
      w.IntersectionObserver = class { observe() {} unobserve() {} disconnect() {} };
      w.HTMLCanvasElement.prototype.getContext = () => null;
      w.scrollTo = () => {}; w.alert = () => {}; w.confirm = () => true;
      w.fetch = async (url, opts) => {
        const u = String(url);
        if (u.startsWith(SUPA_URL + '/auth/v1')) return fakeSupabase(u, opts);
        if (u.startsWith(SUPA_URL)) return json(200, []);
        appCalls.push(u);
        if (u.includes('action=register')) return json(200, { ok: true, id: 'stu-1', name: 'Test', accessLevel: 'full', accessExpiresAt: '', sessionToken: 'signed-student' });
        if (u.includes('/api/consultancy/account')) return json(200, { ok: true, id: 'C1', name: 'Agency', planName: 'Free', expiresAt: '2099-01-01', sessionToken: 'signed-consultancy' });
        return json(200, { ok: true });
      };
      w.eval(supabaseUmd); // the REAL library, exposed as window.supabase
    },
  });
  doms.push(dom);
  return { dom, w: dom.window, d: dom.window.document, appCalls, errors, ls: dom.window.localStorage };
}
const $ = (d, id) => d.getElementById(id);
const hidden = (d, id) => $(d, id).classList.contains('hidden');
const fill = (t, role, email, pw, name) => {
  $(t.d, 'm-' + role + '-auth-email').value = email;
  $(t.d, 'm-' + role + '-auth-password').value = pw;
  if (name) $(t.d, 'm-' + role + '-name').value = name;
};
const open = (t, role, mode) => { t.w.openAccessModal(); t.w.selectModalRole(role); t.w.setAuthMode(role, mode); };
const lastLog = (p) => [...log].reverse().find(l => l.path === p);

(async () => {
  console.log('1. Signup with the real library');
  let savedSession;
  {
    const t = boot();
    await sleep(200);
    ok(typeof t.w.supabase.createClient === 'function' && t.errors.length === 0, 'page loads with real supabase-js, no script errors ' + (t.errors[0] || ''));
    open(t, 'student', 'signup');
    fill(t, 'student', 'Anu@Example.com', 'secret123', 'Anu');
    await t.w.handleStudentAuthSubmit(); await sleep(250);
    const s = lastLog('/signup');
    ok(s && s.body.email === 'anu@example.com' && s.body.data.role === 'student' && s.body.data.name === 'Anu', 'signup request has lower-cased email, role and name');
    ok(s.query.redirect_to === 'https://viatestprep.test/', 'confirmation redirect points back to the site');
    ok(t.ls.getItem('viatestprep_unlocked') === 'true' && t.ls.getItem('viatestprep_user_role') === 'student', 'student is logged in straight away (email confirmation is off)');
    ok(!hidden(t.d, 'view-student'), 'student portal is visible');
    ok(t.appCalls.filter(u => u.includes('action=register')).length === 1, 'server profile registered exactly once (real events: no double run)');
    ok(t.ls.getItem('viatestprep_session_token') === 'signed-student', 'server session token saved');
    savedSession = t.ls.getItem(STORAGE_KEY);
    ok(!!savedSession && JSON.parse(savedSession).user.email === 'anu@example.com', 'the library saved the login in the browser');
  }

  console.log('2. Closing and reopening the site keeps you logged in');
  {
    const t = boot({ storage: { [STORAGE_KEY]: savedSession, viatestprep_unlocked: 'true', viatestprep_user_role: 'student', viatestprep_active_student_id: 'stu-1', viatestprep_student_access: 'full', viatestprep_session_token: 'signed-student' } });
    await sleep(400);
    ok(t.ls.getItem('viatestprep_unlocked') === 'true' && !hidden(t.d, 'view-student'), 'still logged in after reload');
    ok(hidden(t.d, 'accessModal'), 'no login pop-up shown');
    const old = boot({ storage: { [STORAGE_KEY]: savedSession, viatestprep_unlocked: 'true', viatestprep_user_role: 'student', viatestprep_active_student_id: 'stu-1' } });
    await sleep(500);
    ok(old.ls.getItem('viatestprep_session_token') === 'signed-student', 'a login from before the update quietly gets its token (real INITIAL_SESSION event)');
  }

  console.log('3. Login, wrong password, duplicate signup');
  {
    const t = boot();
    await sleep(200);
    open(t, 'student', 'login');
    fill(t, 'student', 'anu@example.com', 'WRONG');
    await t.w.handleStudentAuthSubmit(); await sleep(150);
    ok(/don't match/.test($(t.d, 'm-student-auth-status').textContent) && t.ls.getItem('viatestprep_unlocked') !== 'true', 'wrong password: friendly message, not logged in');
    fill(t, 'student', 'anu@example.com', 'secret123');
    await t.w.handleStudentAuthSubmit(); await sleep(250);
    ok(t.ls.getItem('viatestprep_unlocked') === 'true' && !hidden(t.d, 'view-student'), 'correct password logs in');
    ok(t.appCalls.filter(u => u.includes('action=register')).length === 1, 'registered once');

    const d = boot();
    await sleep(200);
    open(d, 'student', 'signup');
    fill(d, 'student', 'anu@example.com', 'secret123', 'Anu');
    await d.w.handleStudentAuthSubmit(); await sleep(200);
    ok(/already registered/.test($(d.d, 'm-student-auth-status').textContent) && $(d.d, 'm-student-auth-btn').textContent === 'Log in', 'signing up with an existing email says so and switches to Log In');
  }

  console.log('4. Login link and password reset emails');
  {
    const t = boot();
    await sleep(200);
    open(t, 'student', 'login');
    fill(t, 'student', 'anu@example.com', '');
    await t.w.sendMagicLink('student'); await sleep(150);
    const o = lastLog('/otp');
    ok(o && o.body.email === 'anu@example.com' && o.body.data.role === 'student' && o.query.redirect_to === 'https://viatestprep.test/', 'login link request: right email, role, and return address');
    ok(!hidden(t.d, 'm-student-sent'), '"check your inbox" screen shown');
    t.w.hideAuthSent('student');
    await t.w.handleStudentForgotPassword(); await sleep(150);
    const r = lastLog('/recover');
    ok(r && r.body.email === 'anu@example.com' && r.query.redirect_to === 'https://viatestprep.test/', 'password reset request: right email and return address');
  }

  console.log('5. Clicking the login link in the email');
  {
    const u = users.get('anu@example.com');
    const t = boot({ hash: 'access_token=' + jwtFor(u) + '&expires_in=3600&refresh_token=refresh-' + u.id + '&token_type=bearer&type=magiclink', storage: { oauth_pending_role: 'student' } });
    await sleep(500);
    ok(t.ls.getItem('viatestprep_unlocked') === 'true' && t.ls.getItem('viatestprep_user_role') === 'student' && !hidden(t.d, 'view-student'), 'login link signs the student in');
    ok(!t.w.location.hash.includes('access_token'), 'the secret is removed from the address bar');
    ok(!!t.ls.getItem(STORAGE_KEY), 'login saved by the library');
  }

  console.log('6. Clicking the password reset link in the email');
  {
    const u = users.get('anu@example.com');
    const t = boot({ hash: 'access_token=' + jwtFor(u) + '&expires_in=3600&refresh_token=refresh-' + u.id + '&token_type=bearer&type=recovery', storage: { oauth_pending_role: 'student' } });
    await sleep(500);
    ok(!hidden(t.d, 'recoveryModal'), 'the "set a new password" screen opens');
    ok(t.ls.getItem('viatestprep_unlocked') !== 'true', 'and the person is NOT logged in yet (real event order handled)');
    $(t.d, 'recovery-password').value = 'brand-new-pass';
    $(t.d, 'recovery-confirm').value = 'brand-new-pass';
    await t.w.handleRecoverySubmit(); await sleep(400);
    ok(users.get('anu@example.com').password === 'brand-new-pass', 'the new password was saved on the server');
    ok(hidden(t.d, 'recoveryModal') && t.ls.getItem('viatestprep_unlocked') === 'true' && !hidden(t.d, 'view-student'), 'then they land in the student portal');
    const again = boot();
    await sleep(200);
    open(again, 'student', 'login');
    fill(again, 'student', 'anu@example.com', 'brand-new-pass');
    await again.w.handleStudentAuthSubmit(); await sleep(250);
    ok(again.ls.getItem('viatestprep_unlocked') === 'true', 'and the new password works for a fresh login');
  }

  console.log('7. Expired or used email link');
  {
    const t = boot({ hash: 'error=access_denied&error_code=otp_expired&error_description=Email+link+is+invalid+or+has+expired' });
    await sleep(300);
    const banner = t.d.getElementById('auth-notice-banner');
    ok(banner && /expired or was already used/.test(banner.textContent), 'friendly "link expired, request a new one" message');
    ok(t.ls.getItem('viatestprep_unlocked') !== 'true', 'nobody logged in');
  }

  console.log('8. Link opened on a different device (no role remembered)');
  {
    const u = addUser('newbie@example.com', 'pw123456', {});
    const t = boot({ hash: 'access_token=' + jwtFor(u) + '&expires_in=3600&refresh_token=refresh-' + u.id + '&token_type=bearer&type=magiclink' });
    await sleep(500);
    ok(!hidden(t.d, 'accessModal') && !hidden(t.d, 'm-step-role'), 'asks "student or consultancy?" instead of guessing');
    t.w.selectModalRole('student'); await sleep(300);
    ok(t.ls.getItem('viatestprep_user_role') === 'student' && !hidden(t.d, 'view-student'), 'after choosing, they are in');
    ok(lastLog('/user') && users.get('newbie@example.com').user_metadata.role === 'student', 'the choice is saved on their account for next time');
  }

  console.log('9. Consultancy signup and login');
  {
    const t = boot();
    await sleep(200);
    open(t, 'consultancy', 'signup');
    fill(t, 'consultancy', 'agency@example.com', 'agency-pass', 'Himalaya Consultancy');
    await t.w.handleConsultancyAuthSubmit(); await sleep(300);
    ok(t.ls.getItem('viatestprep_user_role') === 'consultancy' && t.ls.getItem('viatestprep_consultancy_id') === 'C1', 'consultancy account is created and logged in');
    ok(t.ls.getItem('viatestprep_session_token') === 'signed-consultancy', 'consultancy session token saved');
    const l = boot();
    await sleep(200);
    open(l, 'consultancy', 'login');
    fill(l, 'consultancy', 'agency@example.com', 'agency-pass');
    await l.w.handleConsultancyAuthSubmit(); await sleep(300);
    ok(l.ls.getItem('viatestprep_user_role') === 'consultancy', 'consultancy can log in again');
  }

  console.log('10. Logging out really logs out');
  {
    const t = boot();
    await sleep(200);
    open(t, 'student', 'login');
    fill(t, 'student', 'anu@example.com', 'brand-new-pass');
    await t.w.handleStudentAuthSubmit(); await sleep(250);
    ok(!!t.ls.getItem(STORAGE_KEY), 'logged in first');
    await t.w.handleLogout();
    ok(t.ls.getItem(STORAGE_KEY) === null, "the library's saved login is gone");
    ok(['viatestprep_unlocked', 'viatestprep_user_role', 'viatestprep_session_token', 'viatestprep_active_student_id'].every(k => t.ls.getItem(k) === null), 'every app login flag is cleared');
  }


  console.log('11. Phone sign-up with an SMS code (real library)');
  {
    settingsNow = { external: { email: true, google: false, phone: true } };
    const t = boot();
    await sleep(400);
    ok(!t.d.querySelector('#m-step-student [data-provider="phone"]').classList.contains('hidden'), 'phone option shows because Supabase reports phone sign-in is on');
    ok(t.d.querySelector('#m-step-student [data-provider="google"]').classList.contains('hidden'), 'Google stays hidden because Supabase reports it is off');
    t.w.openAccessModal(); t.w.selectModalRole('student'); t.w.showPhonePanel('student');
    $(t.d, 'm-student-phone-name').value = 'Sita';
    $(t.d, 'm-student-phone-number').value = '9812345678';
    await t.w.sendPhoneCode('student'); await sleep(250);
    const o = [...log].reverse().find(l => l.path === '/otp' && l.body.phone);
    ok(o && o.body.phone === '+9779812345678' && o.body.channel === 'sms' && o.body.data.role === 'student' && o.body.data.name === 'Sita', 'real library asks Supabase to text +9779812345678');
    ok(!$(t.d, 'm-student-phone-step2').classList.contains('hidden'), 'code box is shown');

    $(t.d, 'm-student-phone-code').value = '999999';
    await t.w.verifyPhoneCode('student'); await sleep(250);
    ok(/wrong or has expired/.test($(t.d, 'm-student-phone-status').textContent) && t.ls.getItem('viatestprep_unlocked') !== 'true', 'a wrong code is refused with a friendly message');
    $(t.d, 'm-student-phone-code').value = '123456';
    await t.w.verifyPhoneCode('student'); await sleep(400);
    ok(t.ls.getItem('viatestprep_unlocked') === 'true' && t.ls.getItem('viatestprep_user_role') === 'student' && !hidden(t.d, 'view-student'), 'the right code creates the account and logs in');
    ok(t.appCalls.filter(u => u.includes('action=register')).length === 1, 'profile registered once');
    const saved = t.ls.getItem(STORAGE_KEY);
    ok(!!saved && JSON.parse(saved).user.phone === '9779812345678', 'the library saved the phone login in the browser');

    const again = boot({ storage: { [STORAGE_KEY]: saved, viatestprep_unlocked: 'true', viatestprep_user_role: 'student', viatestprep_active_student_id: 'stu-1', viatestprep_session_token: 'signed-student' } });
    await sleep(400);
    ok(again.ls.getItem('viatestprep_unlocked') === 'true' && !hidden(again.d, 'view-student'), 'reopening the site keeps the phone login');
    settingsNow = { external: { email: true, google: false } };
    const off = boot();
    await sleep(400);
    ok(off.d.querySelector('#m-step-student [data-provider="phone"]').classList.contains('hidden'), 'when Supabase turns phone sign-in off, the option disappears again');
  }

  console.log('\n' + pass + ' passed, ' + fail + ' failed');
  doms.forEach(d => { try { d.window.close(); } catch (e) {} });
  process.exit(fail ? 1 : 0);
})().catch(e => { console.log('CRASH', e); process.exit(2); });
