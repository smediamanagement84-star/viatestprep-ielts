// Combines the student-facing login/register/reports endpoints into one
// serverless function, dispatched by ?action=. This project is on Vercel's
// Hobby plan, which caps a deployment at 12 Serverless Functions - splitting
// every route into its own file (the previous login.js/register.js/
// reports.js) pushed the count over that limit and made the whole deployment
// fail with exceeded_serverless_functions_per_deployment the moment
// reports.js was added. Consolidating these three (all small, all
// student-identity-related) buys headroom back without removing any
// endpoint - just moving them behind ?action= on the same file.
//
// GET  /api/student?action=login&token=...              (was /api/student/login)
// POST /api/student?action=register  { accessToken, name } (was /api/student/register)
// GET  /api/student?action=reports&studentId=...          (was /api/student/reports)
const { verifyAuthUser } = require('../_lib/authUser');
const {
  getStudentByAccessToken,
  getStudentByAuthUserId,
  insertSelfServeStudent,
  getStudentById,
  getMockHistoryByStudentId,
  getSpeakingGradesByStudentId,
  friendlyDbError,
} = require('../_lib/supabaseAdmin');

async function handleLogin(req, res) {
  const token = (req.query.token || '').trim();
  if (!token) {
    res.status(400).json({ ok: false, error: 'Missing token' });
    return;
  }

  const student = await getStudentByAccessToken(token);
  if (!student) {
    res.status(404).json({ ok: false, error: 'Invalid or unknown access link' });
    return;
  }

  const expired = !!student.access_expires_at && new Date() > new Date(student.access_expires_at);

  res.status(200).json({
    ok: true,
    id: student.id,
    name: student.name,
    targetBand: student.target_band,
    status: student.status,
    accessExpiresAt: student.access_expires_at,
    accessLevel: student.access_level || 'full',
    consultancyId: student.consultancy_id,
    expired,
  });
}

async function handleRegister(req, res) {
  const { accessToken, name } = req.body || {};
  const user = await verifyAuthUser(accessToken);
  if (!user) {
    res.status(401).json({ ok: false, error: 'Could not verify your login session. Please log in again.' });
    return;
  }

  // Idempotent - signUp's confirmation-email redirect (or a retried request)
  // can call this more than once for the same account.
  const existing = await getStudentByAuthUserId(user.id);
  if (existing) {
    res.status(200).json({ ok: true, id: existing.id, name: existing.name });
    return;
  }

  const row = await insertSelfServeStudent({
    name: (name || '').trim() || user.email,
    email: user.email,
    auth_user_id: user.id,
  });

  res.status(200).json({ ok: true, id: row.id, name: row.name });
}

async function handleReports(req, res) {
  const studentId = (req.query.studentId || '').trim();
  if (!studentId) {
    res.status(400).json({ ok: false, error: 'Missing studentId' });
    return;
  }

  const student = await getStudentById(studentId);
  if (!student) {
    res.status(404).json({ ok: false, error: 'Unknown student' });
    return;
  }

  const [history, speaking] = await Promise.all([
    getMockHistoryByStudentId(studentId),
    getSpeakingGradesByStudentId(studentId),
  ]);
  res.status(200).json({ ok: true, results: history, speaking });
}

module.exports = async (req, res) => {
  const action = req.query.action;

  try {
    if (action === 'login' && req.method === 'GET') return await handleLogin(req, res);
    if (action === 'register' && req.method === 'POST') return await handleRegister(req, res);
    if (action === 'reports' && req.method === 'GET') return await handleReports(req, res);

    res.status(400).json({ ok: false, error: 'Unknown or missing ?action, or wrong HTTP method for that action' });
  } catch (err) {
    console.error(`student/index (action=${action}) error:`, err);
    res.status(500).json({ ok: false, error: friendlyDbError(err) || 'Something went wrong. Please try again in a moment.' });
  }
};
