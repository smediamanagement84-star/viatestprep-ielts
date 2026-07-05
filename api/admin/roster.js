// Owner-only, cross-tenant roster access for the CRM's "?ownerkey=" bypass
// (index.html's syncRosterFromCloud/handleCRMStudentSubmit/deleteCRMStudent/
// handleCRMGraderSubmit/submitWritingGrade/importCRMFromCSV, all branching on
// consultancyId === '__owner__'). That bypass mode has no real Supabase Auth
// session, so now that Row Level Security is enabled on students/
// mock_history/speaking_grades (see security-rls.sql), its anon-key requests
// would come back empty/rejected - everything here goes through the service
// role key instead, same gate as every other /api/admin/* endpoint.
//
// GET reads everything; POST handles every write action (student create/
// update/delete, speaking grade entry, writing grade override) via an
// `action` field, all merged into this one file - rather than one file per
// action - to stay under Vercel Hobby's 12-serverless-function-per-
// deployment cap.
const { isOwner } = require('../_lib/ownerAuth');
const {
  listAllStudents, listAllMockHistory, listAllSpeakingGrades,
  insertStudentAdmin, updateStudentAdmin, deleteStudentAdmin,
  insertSpeakingGradeAdmin, updateWritingGradeAdmin,
} = require('../_lib/supabaseAdmin');

module.exports = async (req, res) => {
  const ownerKey = req.headers['x-owner-key'];
  if (!isOwner(ownerKey)) {
    res.status(401).json({ ok: false, error: 'Not authorized' });
    return;
  }

  if (req.method === 'GET') {
    try {
      const [students, mockHistory, speakingGrades] = await Promise.all([
        listAllStudents(),
        listAllMockHistory(),
        listAllSpeakingGrades(),
      ]);
      res.status(200).json({ ok: true, students, mockHistory, speakingGrades });
    } catch (err) {
      console.error('admin/roster GET error:', err);
      res.status(500).json({ ok: false, error: 'Could not load roster. Please try again in a moment.' });
    }
    return;
  }

  if (req.method === 'POST') {
    try {
      const { action, id, fields, studentId, testName } = req.body || {};

      if (action === 'create_student') {
        const row = await insertStudentAdmin(fields || {});
        res.status(200).json({ ok: true, row });
        return;
      }
      if (action === 'update_student') {
        if (!id) { res.status(400).json({ ok: false, error: 'Missing id' }); return; }
        const row = await updateStudentAdmin(id, fields || {});
        res.status(200).json({ ok: true, row });
        return;
      }
      if (action === 'delete_student') {
        if (!id) { res.status(400).json({ ok: false, error: 'Missing id' }); return; }
        await deleteStudentAdmin(id);
        res.status(200).json({ ok: true });
        return;
      }
      if (action === 'speaking_grade') {
        const row = await insertSpeakingGradeAdmin(fields || {});
        res.status(200).json({ ok: true, row });
        return;
      }
      if (action === 'writing_grade') {
        if (!studentId || !testName) {
          res.status(400).json({ ok: false, error: 'Missing studentId or testName' });
          return;
        }
        const row = await updateWritingGradeAdmin(studentId, testName, fields || {});
        res.status(200).json({ ok: true, row });
        return;
      }
      res.status(400).json({ ok: false, error: 'Invalid action' });
    } catch (err) {
      console.error('admin/roster POST error:', err);
      res.status(500).json({ ok: false, error: 'Could not save. Please try again in a moment.' });
    }
    return;
  }

  res.status(405).json({ ok: false, error: 'Method not allowed' });
};
