// Server-side access rules, tested with the database stubbed out.
// Proves: tokens can't be forged, and nobody can read or change someone
// else's data just by knowing / guessing an ID.
const path = require('path');
const API = path.join(__dirname, '..', 'api');

process.env.SUPABASE_SERVICE_ROLE_KEY = 'test-service-key';
process.env.OWNER_BYPASS_KEY = 'owner-test-key';
delete process.env.SESSION_TOKEN_SECRET;
delete process.env.CRON_SECRET;
delete process.env.DEV_DISCORD_WEBHOOK_URL;
delete process.env.DEV_WEBHOOK_URL;

let pass = 0, fail = 0;
function ok(cond, label) {
  if (cond) { pass++; console.log('  PASS  ' + label); }
  else { fail++; console.log('  FAIL  ' + label); }
}

// ---- stubs (must be installed before the endpoints are required) --------
const dbCalls = [];
const fetchCalls = [];
global.fetch = async (url) => { fetchCalls.push(String(url)); return { ok: true, json: async () => ({}) }; };

let dbDown = false;
const fakeAdmin = {
  restRequest: async (table, opts = {}) => {
    if (dbDown) throw new Error('paused');
    dbCalls.push({ table, method: opts.method || 'GET', query: opts.query || '', body: opts.body });
    if (table === 'error_reports' && (opts.method || 'GET') === 'GET' && /id=eq\.rep_mine/.test(opts.query || '')) return [{ consultancy_id: 'C1' }];
    if (table === 'error_reports' && (opts.method || 'GET') === 'GET' && /id=eq\.rep_other/.test(opts.query || '')) return [{ consultancy_id: 'C2' }];
    if ((opts.method || 'GET') === 'GET') return [{ id: 'row1' }];
    return [opts.body || {}];
  },
  getStudentById: async (id) => (id === 'S1' ? { id: 'S1', name: 'Sara', consultancy_id: 'C1' } : null),
  getStudentByAccessToken: async (t) => (t === 'link-ok' ? { id: 'S1', name: 'Sara', consultancy_id: 'C1', access_level: 'full' }
    : t === 'link-expired' ? { id: 'S1', name: 'Sara', access_expires_at: '2020-01-01T00:00:00Z' } : null),
  getStudentByAuthUserId: async (uid) => (uid === 'u1' ? { id: 'S1', name: 'Sara', consultancy_id: 'C1', access_level: 'full' }
    : uid === 'u-exp' ? { id: 'S9', name: 'Old', access_expires_at: '2020-01-01T00:00:00Z' } : null),
  insertSelfServeStudent: async (r) => { inserted.push(r); return { id: 'S-new', name: r.name }; },
  getMockHistoryByStudentId: async () => [],
  getSpeakingGradesByStudentId: async () => [],
  insertMockResult: async (r) => r,
  getConsultancyByEmail: async (e) => (e === 'agency@x.com' ? { id: 'C1', name: 'Agency', plan_name: 'pro', expires_at: '2099-01-01', owner_user_id: 'u9' } : null),
  insertConsultancyShell: async () => ({ id: 'C-new', name: 'New' }),
  claimConsultancyOwner: async (id) => ({ id, name: 'Agency' }),
  friendlyDbError: () => null,
};
const inserted = [];
const fakeAuthUser = {
  verifyAuthIdentity: async (t) => (t === 'jwt-student' ? { id: 'u1', email: 's@x.com', phone: null }
    : t === 'jwt-phone' ? { id: 'u-ph', email: null, phone: '+9779812345678' }
    : t === 'jwt-expired' ? { id: 'u-exp', email: 'o@x.com', phone: null } : null),
  verifyAuthUser: async (t) => (t === 'jwt-student' ? { id: 'u1', email: 's@x.com' }
    : t === 'jwt-expired' ? { id: 'u-exp', email: 'o@x.com' }
    : t === 'jwt-agency' ? { id: 'u9', email: 'agency@x.com' } : null),
};
function stub(rel, exports) {
  const p = require.resolve(path.join(API, rel));
  require.cache[p] = { id: p, filename: p, loaded: true, exports };
}
stub('_lib/supabaseAdmin.js', fakeAdmin);
stub('_lib/authUser.js', fakeAuthUser);

const { signSession, verifySession } = require(path.join(API, '_lib/sessionToken.js'));
const { getCaller, canActAsStudent, canActAsConsultancy } = require(path.join(API, '_lib/callerAuth.js'));
const studentApi = require(path.join(API, 'student/index.js'));
const consultancyApi = require(path.join(API, 'consultancy/account.js'));
const submitApi = require(path.join(API, 'mock/submit.js'));
const reportsApi = require(path.join(API, 'reports.js'));
const devNotifApi = require(path.join(API, 'dev-notifications.js'));
const keepalive = require(path.join(API, 'keepalive.js'));

function mockRes() {
  const r = { code: 200, body: undefined, headers: {} };
  r.status = (c) => { r.code = c; return r; };
  r.json = (b) => { r.body = b; return r; };
  r.send = (b) => { r.body = b; return r; };
  r.setHeader = (k, v) => { r.headers[k] = v; return r; };
  r.end = () => r;
  return r;
}
async function call(handler, { method = 'GET', headers = {}, query = {}, body } = {}) {
  const res = mockRes();
  await handler({ method, headers, query, body }, res);
  return res;
}
const tok = (role, id) => ({ 'x-session-token': signSession(role, id) });
const owner = { 'x-owner-key': 'owner-test-key' };

(async () => {
  console.log('A. Session tokens cannot be forged');
  {
    const t = signSession('student', 'S1');
    const v = verifySession(t);
    ok(v && v.role === 'student' && v.id === 'S1', 'valid token verifies');
    const [p, s] = t.split('.');
    const forgedPayload = Buffer.from(JSON.stringify({ r: 'student', i: 'S2', e: 9999999999 })).toString('base64url');
    ok(verifySession(forgedPayload + '.' + s) === null, 'changed payload (other student id) is rejected');
    ok(verifySession(p + '.' + s.slice(0, -2) + 'AA') === null, 'changed signature is rejected');
    ok(verifySession(signSession('student', 'S1', -10)) === null, 'expired token is rejected');
    ok(verifySession('garbage') === null && verifySession('a.b.c') === null && verifySession('') === null && verifySession(undefined) === null, 'garbage is rejected');
    ok(verifySession('x'.repeat(5000)) === null, 'oversized token is rejected');
    process.env.SESSION_TOKEN_SECRET = 'a-different-secret';
    ok(verifySession(t) === null, 'token from a different secret is rejected');
    delete process.env.SESSION_TOKEN_SECRET;
    ok(verifySession(t) !== null, 'and valid again with the right secret');
    const saved = process.env.SUPABASE_SERVICE_ROLE_KEY;
    delete process.env.SUPABASE_SERVICE_ROLE_KEY;
    ok(signSession('student', 'S1') === null && verifySession(t) === null, 'with no secret configured it fails closed');
    process.env.SUPABASE_SERVICE_ROLE_KEY = saved;
  }

  console.log('B. Who is calling');
  {
    ok(getCaller({ headers: owner }).role === 'owner', 'owner key recognised');
    ok(getCaller({ headers: { 'x-owner-key': 'nope' } }) === null, 'wrong owner key -> nobody');
    const c = getCaller({ headers: tok('consultancy', 'C1') });
    ok(c.role === 'consultancy' && c.id === 'C1', 'consultancy token recognised');
    ok(getCaller({ headers: {} }) === null && getCaller({}) === null, 'no credentials -> nobody');
    ok(canActAsStudent({ role: 'student', id: 'S1' }, 'S1') && !canActAsStudent({ role: 'student', id: 'S1' }, 'S2'), 'student can act only as themselves');
    ok(!canActAsStudent({ role: 'consultancy', id: 'S1' }, 'S1'), 'a consultancy token is not a student token');
    ok(canActAsConsultancy({ role: 'owner' }, 'C9') && !canActAsConsultancy({ role: 'consultancy', id: 'C1' }, 'C2'), 'consultancy can act only as itself');
  }

  console.log('C. Login endpoints hand out tokens');
  {
    let r = await call(studentApi, { method: 'POST', query: { action: 'register' }, body: { accessToken: 'jwt-student', name: 'Sara' } });
    ok(r.code === 200 && verifySession(r.body.sessionToken) && verifySession(r.body.sessionToken).id === 'S1', 'student register returns a token for their own id');
    r = await call(studentApi, { method: 'POST', query: { action: 'register' }, body: { accessToken: 'bad-jwt', name: 'x' } });
    ok(r.code === 401 && !r.body.sessionToken, 'bad login session -> 401, no token');
    r = await call(studentApi, { method: 'POST', query: { action: 'register' }, body: { accessToken: 'jwt-expired' } });
    ok(r.code === 200 && r.body.sessionToken === null, 'expired student gets no token');
    r = await call(studentApi, { method: 'GET', query: { action: 'login', token: 'link-ok' } });
    ok(r.code === 200 && verifySession(r.body.sessionToken).role === 'student', 'private access link returns a token');
    r = await call(studentApi, { method: 'GET', query: { action: 'login', token: 'link-expired' } });
    ok(r.body.sessionToken === null, 'expired access link gets no token');
    r = await call(studentApi, { method: 'GET', query: { action: 'login', token: 'wrong' } });
    ok(r.code === 404 && !r.body.sessionToken, 'unknown access link -> 404');
    r = await call(consultancyApi, { method: 'GET', query: { accessToken: 'jwt-agency' } });
    ok(r.code === 200 && verifySession(r.body.sessionToken).role === 'consultancy' && verifySession(r.body.sessionToken).id === 'C1', 'consultancy login returns a token for its own id');
    r = await call(consultancyApi, { method: 'GET', query: { accessToken: 'nope' } });
    ok(r.code === 401, 'consultancy lookup with bad session -> 401');
  }

  console.log('D. Student results are private');
  {
    let r = await call(studentApi, { query: { action: 'reports', studentId: 'S1' } });
    ok(r.code === 401, 'reading results with just an ID -> 401');
    r = await call(studentApi, { query: { action: 'reports', studentId: 'S1' }, headers: tok('student', 'S2') });
    ok(r.code === 401, "another student's token cannot read S1's results");
    r = await call(studentApi, { query: { action: 'reports', studentId: 'S1' }, headers: tok('consultancy', 'S1') });
    ok(r.code === 401, 'a consultancy token cannot read student results');
    r = await call(studentApi, { query: { action: 'reports', studentId: 'S1' }, headers: tok('student', 'S1') });
    ok(r.code === 200 && r.body.ok, 'the student themselves can');
    r = await call(studentApi, { query: { action: 'reports', studentId: 'S1' }, headers: owner });
    ok(r.code === 200, 'the owner can');
  }

  console.log('E. Saving mock results');
  {
    const body = { studentId: 'S1', testName: 'Test 1', moduleType: 'listening', listeningBand: 6.5, correctCount: 20, totalQuestions: 40, answerReview: [] };
    let r = await call(submitApi, { method: 'POST', body });
    ok(r.code === 401, 'saving with just an ID -> 401');
    r = await call(submitApi, { method: 'POST', body, headers: tok('student', 'S2') });
    ok(r.code === 401, "cannot save into another student's record");
    r = await call(submitApi, { method: 'POST', body, headers: tok('student', 'S1') });
    ok(r.code === 200 && r.body.ok, 'the student themselves can save');
    r = await call(submitApi, { method: 'POST', body, headers: owner });
    ok(r.code === 200, 'the owner can');
  }

  console.log('F. Error reports');
  {
    dbCalls.length = 0;
    let r = await call(reportsApi, { query: {} });
    ok(r.code === 401, 'listing reports with no login -> 401');
    r = await call(reportsApi, { query: {}, headers: tok('student', 'S1') });
    ok(r.code === 403, 'a student cannot list reports');

    dbCalls.length = 0;
    r = await call(reportsApi, { query: { consultancyId: 'C2' }, headers: tok('consultancy', 'C1') });
    const q = dbCalls.find(c => c.table === 'error_reports');
    ok(r.code === 200 && q && /consultancy_id=eq\.C1/.test(q.query) && !/C2/.test(q.query), 'a consultancy asking for C2 still only gets its own (C1)');
    dbCalls.length = 0;
    r = await call(reportsApi, { query: {}, headers: owner });
    ok(r.code === 200 && !/consultancy_id=eq/.test(dbCalls.find(c => c.table === 'error_reports').query), 'only the owner can list all');

    dbCalls.length = 0;
    r = await call(reportsApi, { method: 'PATCH', body: { reportId: 'rep_mine' } });
    ok(r.code === 401, 'resolving with no login -> 401');
    r = await call(reportsApi, { method: 'PATCH', body: { reportId: 'rep_mine' }, headers: tok('student', 'S1') });
    ok(r.code === 403, 'a student cannot resolve');
    dbCalls.length = 0;
    r = await call(reportsApi, { method: 'PATCH', body: { reportId: 'rep_other' }, headers: tok('consultancy', 'C1') });
    ok(r.code === 403 && !dbCalls.some(c => c.method === 'PATCH'), "cannot resolve another consultancy's report (and nothing was written)");
    r = await call(reportsApi, { method: 'PATCH', body: { reportId: 'rep_mine' }, headers: tok('consultancy', 'C1') });
    ok(r.code === 200 && dbCalls.some(c => c.method === 'PATCH'), 'can resolve its own report');
    r = await call(reportsApi, { method: 'PATCH', body: { reportId: 'rep_other' }, headers: owner });
    ok(r.code === 200, 'the owner can resolve any');

    dbCalls.length = 0; fetchCalls.length = 0;
    r = await call(reportsApi, { method: 'POST', body: { studentId: 'S1', consultancyId: 'C2', studentName: 'Fake', description: 'x'.repeat(5000), devWebhookUrl: 'https://evil.example/hook' } });
    const posted = dbCalls.find(c => c.table === 'error_reports' && c.method === 'POST').body;
    ok(posted.student_id === 'demo_student' && posted.consultancy_id === 'default_consultancy', 'anonymous reports cannot pretend to be a student / consultancy');
    ok(posted.description.length === 2000, 'oversized text is cut down');
    ok(fetchCalls.length === 0, "a stranger's webhook URL is never contacted");

    dbCalls.length = 0;
    r = await call(reportsApi, { method: 'POST', body: { studentId: 'S2', consultancyId: 'C2', description: 'broken' }, headers: tok('student', 'S1') });
    const own = dbCalls.find(c => c.table === 'error_reports' && c.method === 'POST').body;
    ok(own.student_id === 'S1' && own.consultancy_id === 'C1' && own.student_name === 'Sara', "a student's report is filed as themselves, to their own consultancy");

    fetchCalls.length = 0;
    r = await call(reportsApi, { method: 'POST', body: { studentId: 'dev_test', consultancyId: 'dev_suite', description: 'ping', devWebhookUrl: 'https://hooks.example/owner' }, headers: owner });
    ok(fetchCalls.includes('https://hooks.example/owner'), "the owner's own test webhook still works");
  }

  console.log('G. Developer notifications are owner-only');
  {
    let r = await call(devNotifApi, { query: {} });
    ok(r.code === 401, 'no key -> 401');
    r = await call(devNotifApi, { query: {}, headers: { 'x-owner-key': 'wrong' } });
    ok(r.code === 401, 'wrong key -> 401');
    r = await call(devNotifApi, { query: {}, headers: tok('consultancy', 'C1') });
    ok(r.code === 401, 'a consultancy login is not enough');
    r = await call(devNotifApi, { query: {}, headers: owner });
    ok(r.code === 200, 'owner key works');
    r = await call(devNotifApi, { method: 'PATCH', body: { id: 'n1' } });
    ok(r.code === 401, 'marking as read also needs the owner key');
  }

  console.log('H. Keep-alive');
  {
    let r = await call(keepalive, {});
    ok(r.code === 200 && r.body.ok, 'works with no CRON_SECRET set');
    process.env.CRON_SECRET = 'cron-secret';
    r = await call(keepalive, { headers: {} });
    ok(r.code === 401, 'refuses strangers once CRON_SECRET is set');
    r = await call(keepalive, { headers: { authorization: 'Bearer cron-secret' } });
    ok(r.code === 200, "accepts Vercel's scheduler");
    delete process.env.CRON_SECRET;
    dbDown = true;
    r = await call(keepalive, {});
    ok(r.code === 500, 'reports failure if Supabase is unreachable');
    dbDown = false;
  }


  console.log('I. Phone-only students');
  {
    let r = await call(studentApi, { method: 'POST', query: { action: 'register' }, body: { accessToken: 'jwt-phone' } });
    ok(r.code === 200 && r.body.ok && verifySession(r.body.sessionToken).id === 'S-new', 'a phone-only student can register and gets a token');
    const row = inserted[inserted.length - 1];
    ok(row.name === '+9779812345678' && row.email === '9779812345678@phone.viatestprep.invalid' && row.auth_user_id === 'u-ph', 'stored with their number as the name and a placeholder email (the table requires one)');
    r = await call(studentApi, { method: 'POST', query: { action: 'register' }, body: { accessToken: 'jwt-phone', name: '  Sita  ' } });
    ok(inserted[inserted.length - 1].name === 'Sita', 'a typed name is used (trimmed)');
  }

  console.log('\n' + pass + ' passed, ' + fail + ' failed');
  process.exit(fail ? 1 : 0);
})();
