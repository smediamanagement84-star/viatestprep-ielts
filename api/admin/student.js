// Owner-only create/update/delete for a single student row - the write-side
// counterpart to admin/roster.js, needed for the same reason (see that file's
// comment): the CRM's "?ownerkey=" bypass has no real Supabase Auth session
// for the RLS policies in security-rls.sql to match.
const { isOwner } = require('../_lib/ownerAuth');
const { insertStudentAdmin, updateStudentAdmin, deleteStudentAdmin } = require('../_lib/supabaseAdmin');

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

    const { action, id, fields } = req.body || {};

    if (action === 'create') {
      const row = await insertStudentAdmin(fields || {});
      res.status(200).json({ ok: true, row });
      return;
    }
    if (action === 'update') {
      if (!id) { res.status(400).json({ ok: false, error: 'Missing id' }); return; }
      const row = await updateStudentAdmin(id, fields || {});
      res.status(200).json({ ok: true, row });
      return;
    }
    if (action === 'delete') {
      if (!id) { res.status(400).json({ ok: false, error: 'Missing id' }); return; }
      await deleteStudentAdmin(id);
      res.status(200).json({ ok: true });
      return;
    }
    res.status(400).json({ ok: false, error: 'Invalid action' });
  } catch (err) {
    console.error('admin/student error:', err);
    res.status(500).json({ ok: false, error: 'Could not save student. Please try again in a moment.' });
  }
};
