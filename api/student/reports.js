// Returns one student's own full mock-test history - bands, writing feedback,
// and the per-question answer review for Reading/Listening attempts - so the
// student-facing "Grade Report" tab in index.html can show real synced data
// instead of only scanning that browser's own localStorage (which breaks the
// moment a student opens the app on a second device or clears storage).
//
// Looked up server-side with the service role key, same trust model as
// /api/mock/submit.js: the studentId comes from whatever the client already
// has in localStorage after either a token login (api/student/login.js) or a
// self-serve Supabase Auth login, and is trusted as-is once it resolves to a
// real row - this is not per-request signed-session auth. A self-serve
// student's own Supabase session could instead read mock_history directly via
// the anon key under security-rls.sql's "student reads own row" policy, but
// token-based (consultancy-managed) students have no auth.uid() at all, so
// this endpoint is what makes their own reports reachable in the app either
// way.
const { getStudentById, getMockHistoryByStudentId, getSpeakingGradesByStudentId, friendlyDbError } = require('../_lib/supabaseAdmin');

module.exports = async (req, res) => {
  if (req.method !== 'GET') {
    res.status(405).json({ ok: false, error: 'Method not allowed' });
    return;
  }

  try {
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
  } catch (err) {
    console.error('student/reports error:', err);
    res.status(500).json({ ok: false, error: friendlyDbError(err) || 'Could not load test reports. Please try again in a moment.' });
  }
};
