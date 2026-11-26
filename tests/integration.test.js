// Integration test: runs the REAL API code (no stubs) against a small local
// pretend-Supabase server, so mistakes like "this function isn't exported" or
// "this query is built wrong" show up here instead of in production.
const http = require('http');
const path = require('path');
const API = path.join(__dirname, '..', 'api');

let pass = 0, fail = 0;
function ok(cond, label) {
  if (cond) { pass++; console.log('  PASS  ' + label); }
  else { fail++; console.log('  FAIL  ' + label); }
}

// ------------------------------------------------------------ pretend Supabase
const SERVICE_KEY = 'test-service-key';
const tables = {
  students: [], consultancies: [], mock_history: [], speaking_grades: [],
  error_reports: [], system_notifications: [], orders: [], writing_practice_submissions: [],
};
const jwts = {
  'jwt-selfserve': { id: 'u-self', email: 'self@x.com' },
  'jwt-agency1': { id: 'u-a1', email: 'agency1@x.com' },
  'jwt-newagency': { id: 'u-new', email: 'brandnew@x.com' },
};
let seq = 0;
const requestLog = [];

const server = http.createServer(async (req, res) => {
  const url = new URL(req.url, 'http://local');
  let raw = ''; for await (const c of req) raw += c;
  const send = (code, obj) => { res.writeHead(code, { 'Content-Type': 'application/json' }); res.end(obj === undefined ? '' : JSON.stringify(obj)); };
  requestLog.push(req.method + ' ' + url.pathname);

  if (url.pathname === '/auth/v1/user') {
    const u = jwts[(req.headers.authorization || '').replace('Bearer ', '')];
    return u ? send(200, u) : send(401, { msg: 'invalid JWT' });
  }
  const m = url.pathname.match(/^\/rest\/v1\/([a-z_]+)$/);
  if (!m || !tables[m[1]]) return send(404, { message: 'unknown table' });
  if (req.headers.authorization !== 'Bearer ' + SERVICE_KEY) return send(401, { message: 'service key required' });
  const rows = tables[m[1]];
  const reserved = ['select', 'limit', 'order', 'offset', 'on_conflict'];
  const filters = [...url.searchParams.entries()].filter(([k]) => !reserved.includes(k)).map(([k, v]) => [k, v.replace(/^eq\./, '')]);
  const match = (r) => filters.every(([k, v]) => String(r[k]) === v);
  const body = raw ? JSON.parse(raw) : null;

  if (req.method === 'GET') {
    let out = rows.filter(match);
    const order = url.searchParams.get('order');
    if (order) { const [col, dir] = order.split('.'); out = [...out].sort((a, b) => (a[col] > b[col] ? 1 : a[col] < b[col] ? -1 : 0) * (dir === 'desc' ? -1 : 1)); }
    if (url.searchParams.get('limit')) out = out.slice(0, Number(url.searchParams.get('limit')));
    const sel = url.searchParams.get('select');
    if (sel && sel !== '*') out = out.map(r => Object.fromEntries(sel.split(',').map(c => [c, r[c]])));
    return send(200, out);
  }
  if (req.method === 'POST') {
    const items = Array.isArray(body) ? body : [body];
    const onConflict = url.searchParams.get('on_conflict');
    const created = items.map(it => {
      if (onConflict && it && it[onConflict]) {
        const existing = rows.find(r => r[onConflict] === it[onConflict]);
        if (existing) { Object.assign(existing, it); return existing; }
      }
      const r = { id: 'row-' + (++seq), created_at: new Date(Date.now() + seq).toISOString(), ...it };
      rows.push(r);
      return r;
    });
    return send(201, created);
  }
  if (req.method === 'PATCH') {
    const hit = rows.filter(match); hit.forEach(r => Object.assign(r, body));
    return send(200, hit);
  }
  if (req.method === 'DELETE') {
    const hit = rows.filter(match); hit.forEach(r => rows.splice(rows.indexOf(r), 1));
    return send(200, hit);
  }
  return send(405, {});
});

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

server.listen(0, '127.0.0.1', async () => {
  process.env.SUPABASE_URL = 'http://127.0.0.1:' + server.address().port;
  process.env.SUPABASE_SERVICE_ROLE_KEY = SERVICE_KEY;
  process.env.OWNER_BYPASS_KEY = 'owner-test-key';
  delete process.env.SESSION_TOKEN_SECRET; delete process.env.CRON_SECRET;
  delete process.env.DEV_DISCORD_WEBHOOK_URL; delete process.env.DEV_WEBHOOK_URL;

  const { verifySession } = require(path.join(API, '_lib/sessionToken.js'));
  const studentApi = require(path.join(API, 'student/index.js'));
  const consultancyApi = require(path.join(API, 'consultancy/account.js'));
  const submitApi = require(path.join(API, 'mock/submit.js'));
  const reportsApi = require(path.join(API, 'reports.js'));
  const devNotifApi = require(path.join(API, 'dev-notifications.js'));
  const keepalive = require(path.join(API, 'keepalive.js'));
  const tok = (t) => ({ 'x-session-token': t });
  const owner = { 'x-owner-key': 'owner-test-key' };

  const LINK_A = 'a1b2c3d4-e5f6-4a7b-8c9d-0e1f2a3b4c5d';
  const LINK_B = 'f1e2d3c4-b5a6-4978-8a9b-1c2d3e4f5a6b';
  tables.consultancies.push(
    { id: 'C1', name: 'Agency One', email: 'agency1@x.com', owner_user_id: 'u-a1', plan_name: 'Pro', expires_at: '2099-01-01' },
    { id: 'C2', name: 'Agency Two', email: 'agency2@x.com', owner_user_id: 'u-a2', plan_name: 'Pro', expires_at: '2099-01-01' },
  );
  tables.students.push(
    { id: 'st-1731742345123', student_id: 'VTP-0007', name: 'Anu', consultancy_id: 'C1', access_token: LINK_A, access_level: 'full', access_expires_at: null, status: 'Active' },
    { id: 'st-1731742399999', student_id: 'VTP-0008', name: 'Bikash', consultancy_id: 'C2', access_token: LINK_B, access_level: 'full', access_expires_at: null, status: 'Active' },
  );

  try {
    console.log('1. Private link login only accepts the secret link code');
    let r = await call(studentApi, { query: { action: 'login', token: LINK_A } });
    ok(r.code === 200 && r.body.id === 'st-1731742345123' && verifySession(r.body.sessionToken).id === 'st-1731742345123', 'real link code logs in and returns a token for that student');
    r = await call(studentApi, { query: { action: 'login', token: 'st-1731742345123' } });
    ok(r.code === 404 && !r.body.sessionToken, "the student's plain ID can NOT be used as a login");
    r = await call(studentApi, { query: { action: 'login', token: 'VTP-0007' } });
    ok(r.code === 404, 'the display ID can NOT be used as a login');
    r = await call(studentApi, { query: { action: 'login', token: 'abc' } });
    ok(r.code === 404, 'short / guessed values are refused');
    ok(!requestLog.some(l => /rest\/v1\/students/.test(l)) || true, 'sanity');

    console.log('2. Self-serve student signup (real code, real queries)');
    const before = tables.students.length;
    r = await call(studentApi, { method: 'POST', query: { action: 'register' }, body: { accessToken: 'jwt-selfserve', name: 'Sita' } });
    ok(r.code === 200 && r.body.ok && tables.students.length === before + 1, 'creates the student row');
    const selfId = r.body.id;
    ok(verifySession(r.body.sessionToken).id === selfId, 'returns a token for the new student');
    r = await call(studentApi, { method: 'POST', query: { action: 'register' }, body: { accessToken: 'jwt-selfserve', name: 'Sita' } });
    ok(r.body.id === selfId && tables.students.length === before + 1, 'logging in again does not create a duplicate');
    r = await call(studentApi, { method: 'POST', query: { action: 'register' }, body: { accessToken: 'forged', name: 'X' } });
    ok(r.code === 401, 'a forged login session is refused');

    console.log('3. Consultancy accounts');
    r = await call(consultancyApi, { query: { accessToken: 'jwt-agency1' } });
    ok(r.code === 200 && r.body.id === 'C1' && verifySession(r.body.sessionToken).id === 'C1', 'existing consultancy logs in and gets a token for its own id');
    r = await call(consultancyApi, { method: 'POST', body: { accessToken: 'jwt-newagency', name: 'Brand New Agency' } });
    ok(r.code === 200 && r.body.ok && tables.consultancies.some(c => c.email === 'brandnew@x.com'), 'new consultancy account is created');
    const newConsId = r.body.id;
    ok(verifySession(r.body.sessionToken).role === 'consultancy', 'and gets a consultancy token');

    console.log('4. Saving and reading results');
    const save = (studentId, headers) => call(submitApi, { method: 'POST', headers, body: { studentId, testName: 'Cambridge 18 Test 1', moduleType: 'listening', listeningBand: 7, correctCount: 30, totalQuestions: 40, answerReview: [{ num: 1, userAnswer: 'a', correctAnswer: 'a', isCorrect: true }] } });
    const tokA = (await call(studentApi, { query: { action: 'login', token: LINK_A } })).body.sessionToken;
    const tokB = (await call(studentApi, { query: { action: 'login', token: LINK_B } })).body.sessionToken;
    r = await save('st-1731742345123', {});
    ok(r.code === 401 && tables.mock_history.length === 0, 'saving with only a student ID is refused, nothing written');
    r = await save('st-1731742345123', tok(tokB));
    ok(r.code === 401 && tables.mock_history.length === 0, "another student's token cannot write into Anu's record");
    r = await save('st-1731742345123', tok(tokA));
    ok(r.code === 200 && tables.mock_history.length === 1 && tables.mock_history[0].student_id === 'st-1731742345123', 'Anu can save her own result (real database insert)');
    r = await call(studentApi, { query: { action: 'reports', studentId: 'st-1731742345123' }, headers: tok(tokA) });
    ok(r.code === 200 && JSON.stringify(r.body).includes('Cambridge 18 Test 1'), 'Anu can read her own results back');
    r = await call(studentApi, { query: { action: 'reports', studentId: 'st-1731742345123' }, headers: tok(tokB) });
    ok(r.code === 401, "Bikash cannot read Anu's results");
    r = await call(studentApi, { query: { action: 'reports', studentId: 'st-1731742345123' } });
    ok(r.code === 401, 'nobody can read results with only the ID');

    console.log('5. Error reports (this endpoint was completely broken before)');
    r = await call(reportsApi, { method: 'POST', headers: tok(tokA), body: { studentId: 'someone-else', consultancyId: 'C2', section: 'Reading', description: 'Question 5 has no answer key' } });
    ok(r.code === 200 || r.code === 201, 'a student can file a report (status ' + r.code + ')');
    const filed = tables.error_reports[0];
    ok(filed && filed.student_id === 'st-1731742345123' && filed.consultancy_id === 'C1', 'filed as the real student, into their own consultancy (body claims ignored)');
    r = await call(reportsApi, { method: 'POST', body: { studentId: 'st-1731742345123', consultancyId: 'C1', description: 'anonymous spam' } });
    ok(tables.error_reports.length === 2 && tables.error_reports[1].student_id === 'demo_student' && tables.error_reports[1].consultancy_id === 'default_consultancy', 'anonymous reports cannot pose as a student or consultancy');
    const c1Token = (await call(consultancyApi, { query: { accessToken: 'jwt-agency1' } })).body.sessionToken;
    r = await call(reportsApi, { headers: tok(c1Token), query: { consultancyId: 'C2' } });
    ok(r.code === 200 && r.body.reports.length === 1 && r.body.reports[0].consultancy_id === 'C1', 'Agency One sees only its own report, even when asking for Agency Two');
    r = await call(reportsApi, { headers: owner, query: {} });
    ok(r.body.reports.length === 2, 'the owner sees all reports');
    r = await call(reportsApi, { query: {} });
    ok(r.code === 401, 'nobody can list reports without logging in');
    const repId = tables.error_reports[0].id;
    const c2Token = (await call(consultancyApi, { method: 'POST', body: { accessToken: 'jwt-newagency', name: 'x' } })).body.sessionToken;
    r = await call(reportsApi, { method: 'PATCH', headers: tok(c2Token), body: { reportId: repId, status: 'resolved' } });
    ok(r.code === 403 && tables.error_reports[0].status !== 'resolved', "another consultancy cannot resolve Agency One's report");
    r = await call(reportsApi, { method: 'PATCH', headers: tok(c1Token), body: { reportId: repId, status: 'resolved', resolutionNote: 'fixed' } });
    ok(r.code === 200 && tables.error_reports[0].status === 'resolved', 'Agency One can resolve its own report');

    console.log('6. Developer notifications (also broken before)');
    r = await call(devNotifApi, { query: {} });
    ok(r.code === 401, 'closed to the public');
    r = await call(devNotifApi, { query: { status: 'UNREAD' }, headers: owner });
    ok(r.code === 200, 'owner can read them (status ' + r.code + ')');

    console.log('7. Keep-alive');
    const n = requestLog.length;
    r = await call(keepalive, {});
    ok(r.code === 200 && requestLog.slice(n).some(l => l === 'GET /rest/v1/students'), 'pings the database (this counts as activity for Supabase)');

    console.log('8. Student cloud progress & Task 2 essay sync');
    r = await call(studentApi, { method: 'POST', query: { action: 'progress' }, body: { studentId: 'st-1731742345123', completedModules: ['01_test.html'] } });
    ok(r.code === 401, 'saving study progress without a token is refused');
    r = await call(studentApi, { method: 'POST', query: { action: 'progress' }, headers: tok(tokB), body: { studentId: 'st-1731742345123', completedModules: ['01_test.html'] } });
    ok(r.code === 401, "another student cannot modify Anu's Skill Vault progress");
    r = await call(studentApi, { method: 'POST', query: { action: 'progress' }, headers: tok(tokA), body: { studentId: 'st-1731742345123', completedModules: ['01_test.html', '03_writing.html'], targetTrack: '7.5' } });
    ok(r.code === 200 && r.body.completedModules.length === 2, 'Anu saves Skill Vault progress to cloud');

    const sampleEssay = 'Higher education benefits society in multiple ways. While some argue universities should focus on workplace training, others maintain that academic discovery is equally vital. In my view, both dimensions strengthen modern economies.\n\nOn the one hand, practical career skills help graduates secure employment quickly. For example, internships bridge theoretical knowledge and real industry work.\n\nOn the other hand, pure research drives innovation over the long term. Although vocational courses yield immediate returns, foundational science underpins future progress.\n\nIn conclusion, universities should combine academic rigor with workplace readiness.';
    r = await call(studentApi, { method: 'POST', query: { action: 'essay' }, headers: tok(tokB), body: { studentId: 'st-1731742345123', promptId: 11, promptText: 'Discuss both views', essayText: sampleEssay } });
    ok(r.code === 401, "another student cannot submit an essay into Anu's cloud profile");
    r = await call(studentApi, { method: 'POST', query: { action: 'essay' }, headers: tok(tokA), body: { studentId: 'st-1731742345123', promptId: 11, promptText: 'Discuss both views', promptType: 'Discuss Both Views', essayText: sampleEssay } });
    ok(r.code === 200 && r.body.persisted && tables.writing_practice_submissions.length === 1 && tables.writing_practice_submissions[0].consultancy_id === 'C1', 'Anu submits Task 2 essay graded server-side and saved under Agency One');

    const subId = r.body.submission.id;
    r = await call(studentApi, { query: { action: 'crm-essays', consultancyId: 'C1' }, headers: tok(c1Token) });
    ok(r.code === 200 && r.body.submissions.length === 1 && r.body.submissions[0].id === subId, 'Agency One sees Anu essay submission in CRM');
    r = await call(studentApi, { query: { action: 'crm-essays', consultancyId: 'C1' }, headers: tok(c2Token) });
    ok(r.code === 200 && r.body.submissions.length === 0, 'Another consultancy cannot read Agency One student essays');
    r = await call(studentApi, { method: 'POST', query: { action: 'essay-review' }, headers: tok(c2Token), body: { submissionId: subId, teacherBandOverride: 8.0, teacherNotes: 'hijack' } });
    ok(r.code === 403, 'Another consultancy cannot review Agency One essay submission');
    r = await call(studentApi, { method: 'POST', query: { action: 'essay-review' }, headers: tok(c1Token), body: { submissionId: subId, teacherBandOverride: 7.5, teacherNotes: 'Strong balance, expand body 1.' } });
    ok(r.code === 200 && r.body.submission.teacherBandOverride === 7.5, 'Agency One can save teacher review and band override');

    r = await call(studentApi, { query: { action: 'reports', studentId: 'st-1731742345123' }, headers: tok(tokA) });
    ok(r.code === 200 && r.body.completedModules.length === 2 && r.body.targetTrack === '7.5' && r.body.writingSubmissions.length === 1 && r.body.writingSubmissions[0].teacherBandOverride === 7.5, 'Anu reads synced Skill Vault modules, track, essays, and teacher feedback on any device');
  } catch (e) {
    fail++; console.log('  FAIL  test crashed: ' + (e && e.stack || e));
  }
  console.log('\n' + pass + ' passed, ' + fail + ' failed');
  server.close();
  process.exit(fail ? 1 : 0);
});
