// Resolves a student's private access token into a session. This is how a
// consultancy hands one specific roster student a link that logs them
// straight into the practice portal as themselves, instead of the old
// anonymous "Access the free student portal" flow that gave every visitor
// an identical, untracked session.
//
// Looked up server-side with the service role key so we never need a public
// RLS SELECT policy on the whole `students` table (which would let anyone
// holding the anon key page through every consultancy's entire roster just
// to support this one lookup).
const { getStudentByAccessToken } = require('../_lib/supabaseAdmin');

module.exports = async (req, res) => {
  try {
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
  } catch (err) {
    console.error('student/login error:', err);
    res.status(500).json({ ok: false, error: 'Could not verify access link. Please try again in a moment.' });
  }
};
