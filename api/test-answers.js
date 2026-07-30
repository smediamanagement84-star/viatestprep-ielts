// Serves the real answer key for a Reading/Listening test - the ONE thing
// that must never sit in a publicly fetchable static file, since every
// other test-content field (passage text, question text, transcripts) is
// still shipped in test-data.js/unique-test-data.js for anyone to load
// directly. See api/_lib/testAnswers.js for how that split was made and why
// (index.html/test-data.js used to ship the full answer key to every
// visitor with no login at all - view-source, not screenshots, was the real
// piracy risk).
//
// GET /api/test-answers?testId=1&module=reading&studentId=<id>
//
// Same trust model as every other student-facing endpoint in this app
// (mock/submit.js, student/index.js): studentId is a plain client-supplied
// value, checked against a real row server-side rather than a signed
// session token. The explicit "🔑 Student Bypass" demo account is
// deliberately NOT special-cased here - that sentinel id is public
// knowledge sitting in client-side JS, so special-casing it would just be a
// permanent, well-known backdoor around the whole point of this endpoint.
const { getStudentById, friendlyDbError } = require('./_lib/supabaseAdmin');
const TEST_ANSWERS = require('./_lib/testAnswers');

const VALID_MODULES = ['reading', 'listening'];

module.exports = async (req, res) => {
  if (req.method !== 'GET') {
    res.status(405).json({ ok: false, error: 'Method not allowed' });
    return;
  }

  try {
    const testId = (req.query.testId || '').trim();
    const moduleName = (req.query.module || '').trim();
    const studentId = (req.query.studentId || '').trim();

    if (!testId || !VALID_MODULES.includes(moduleName)) {
      res.status(400).json({ ok: false, error: 'Missing or invalid testId/module' });
      return;
    }
    if (!studentId) {
      res.status(401).json({ ok: false, error: 'Log in to see your results.' });
      return;
    }

    const student = await getStudentById(studentId);
    if (!student) {
      res.status(401).json({ ok: false, error: 'Log in to see your results.' });
      return;
    }

    const expired = !!student.access_expires_at && new Date() > new Date(student.access_expires_at);
    if (expired) {
      res.status(403).json({ ok: false, error: 'Your access has expired. Renew to see full scoring and explanations.' });
      return;
    }

    const testAnswers = TEST_ANSWERS[testId] && TEST_ANSWERS[testId][moduleName];
    if (!testAnswers) {
      res.status(404).json({ ok: false, error: 'No answer key found for that test/module.' });
      return;
    }

    res.status(200).json({ ok: true, answers: testAnswers });
  } catch (err) {
    console.error('test-answers error:', err);
    res.status(500).json({ ok: false, error: friendlyDbError(err) || 'Could not load answers right now. Please try again in a moment.' });
  }
};
