// Records a finished Cambridge mock-test attempt (Listening / Reading /
// Writing) against a specific student's row, so it shows up automatically in
// that student's CRM profile - no staff re-entry required.
//
// Uses the service role key rather than a direct client-side anon insert so
// the studentId is checked against a real row before anything is written,
// and so this doesn't depend on `mock_history` having a public anon INSERT
// policy. Note this still isn't full authentication - a student's session
// here is identified by a Supabase UUID stored in their own browser's
// localStorage (set once by their private access-token login), not by a
// signed session token, so it inherits the same trust model as the rest of
// this app's client-side-secret design. Genuine per-request auth would need
// real Supabase Auth + RLS, which is a larger change than this pass covers.
const { getStudentById, insertMockResult, friendlyDbError } = require('../_lib/supabaseAdmin');
const { gradeWritingSubmission } = require('../_lib/writingGrader');

const VALID_MODULES = ['listening', 'reading', 'writing'];

module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    res.status(405).json({ ok: false, error: 'Method not allowed' });
    return;
  }

  try {
    const {
      studentId, testName, moduleType, listeningBand, readingBand, writingTask1, writingTask2,
      correctCount, totalQuestions, answerReview,
    } = req.body || {};

    if (!studentId || !testName || !VALID_MODULES.includes(moduleType)) {
      res.status(400).json({ ok: false, error: 'Missing or invalid studentId, testName, or moduleType' });
      return;
    }

    const student = await getStudentById(studentId);
    if (!student) {
      res.status(404).json({ ok: false, error: 'Unknown student' });
      return;
    }

    // Writing is graded here, server-side, so the score is consistent
    // regardless of which client submitted it and can't be spoofed by
    // editing client-side JS - see writingGrader.js for the (non-AI,
    // rule-based) scoring method.
    let graded = null;
    if (moduleType === 'writing') {
      graded = gradeWritingSubmission(writingTask1, writingTask2);
    }

    // Reading/Listening only: the per-question breakdown the practice page
    // already computed client-side for its own review mode. Shape-checked
    // (not re-graded - the practice page's own answer key already produced
    // it), and capped so a malformed/huge payload can't bloat the row.
    let reviewToStore = null;
    if ((moduleType === 'reading' || moduleType === 'listening') && Array.isArray(answerReview)) {
      reviewToStore = answerReview.slice(0, 100).map((item) => ({
        num: item && item.num,
        type: item && item.type ? String(item.type).slice(0, 40) : null,
        userAnswer: item && item.userAnswer != null ? String(item.userAnswer).slice(0, 200) : null,
        correctAnswer: item && item.correctAnswer != null ? String(item.correctAnswer).slice(0, 200) : null,
        isCorrect: !!(item && item.isCorrect),
      }));
    }

    const row = await insertMockResult({
      student_id: studentId,
      test_name: testName,
      module_type: moduleType,
      listening_band: moduleType === 'listening' ? listeningBand : null,
      reading_band: moduleType === 'reading' ? readingBand : null,
      writing_task1: moduleType === 'writing' ? (writingTask1 || null) : null,
      writing_task2: moduleType === 'writing' ? (writingTask2 || null) : null,
      writing_band: graded ? graded.overallBand : null,
      writing_task1_band: graded && graded.task1 ? graded.task1.band : null,
      writing_task2_band: graded && graded.task2 ? graded.task2.band : null,
      writing_feedback: graded ? JSON.stringify(graded) : null,
      writing_auto_graded: moduleType === 'writing' ? true : null,
      correct_count: Number.isFinite(correctCount) ? correctCount : null,
      total_questions: Number.isFinite(totalQuestions) ? totalQuestions : null,
      answer_review: reviewToStore,
    });

    res.status(200).json({ ok: true, id: row.id, graded });
  } catch (err) {
    console.error('mock/submit error:', err);
    res.status(500).json({ ok: false, error: friendlyDbError(err) || 'Could not save mock result. Please try again in a moment.' });
  }
};
