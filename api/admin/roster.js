// Owner-only, cross-tenant roster read for the CRM's "?ownerkey=" bypass
// (index.html's syncRosterFromCloud, consultancyId === '__owner__'). That
// bypass mode has no real Supabase Auth session, so now that Row Level
// Security is enabled on students/mock_history/speaking_grades (see
// security-rls.sql), its anon-key requests would just come back empty -
// this goes through the service role key instead, same gate as every other
// /api/admin/* endpoint.
const { isOwner } = require('../_lib/ownerAuth');
const { listAllStudents, listAllMockHistory, listAllSpeakingGrades } = require('../_lib/supabaseAdmin');

module.exports = async (req, res) => {
  try {
    const ownerKey = req.headers['x-owner-key'];
    if (!isOwner(ownerKey)) {
      res.status(401).json({ ok: false, error: 'Not authorized' });
      return;
    }

    const [students, mockHistory, speakingGrades] = await Promise.all([
      listAllStudents(),
      listAllMockHistory(),
      listAllSpeakingGrades(),
    ]);

    res.status(200).json({ ok: true, students, mockHistory, speakingGrades });
  } catch (err) {
    console.error('admin/roster error:', err);
    res.status(500).json({ ok: false, error: 'Could not load roster. Please try again in a moment.' });
  }
};
