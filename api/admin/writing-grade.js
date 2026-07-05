// Owner-only writing grade override - see admin/roster.js for why this
// exists (the CRM's "?ownerkey=" bypass has no real Supabase Auth session
// for the RLS policies in security-rls.sql to match).
const { isOwner } = require('../_lib/ownerAuth');
const { updateWritingGradeAdmin } = require('../_lib/supabaseAdmin');

module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    res.status(405).json({ ok: false, error: 'Method not allowed' });
    return;
  }

  try {
    const ownerKey = req.headers['x-owner-key'];
    if (!isOwner(ownerKey)) {
      res.status(401).json({ ok: false, error: 'Not authorized' });
      return;
    }

    const { studentId, testName, fields } = req.body || {};
    if (!studentId || !testName) {
      res.status(400).json({ ok: false, error: 'Missing studentId or testName' });
      return;
    }

    const row = await updateWritingGradeAdmin(studentId, testName, fields || {});
    res.status(200).json({ ok: true, row });
  } catch (err) {
    console.error('admin/writing-grade error:', err);
    res.status(500).json({ ok: false, error: 'Could not save grade. Please try again in a moment.' });
  }
};
