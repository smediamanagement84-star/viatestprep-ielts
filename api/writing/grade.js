// Grades a Writing Task 1 + Task 2 submission and returns the result - no
// persistence, no student/login required. This is what lets ielts-writing-
// practice.html show every test-taker (including anonymous ones) their band
// + feedback immediately after submitting, not just students with a tracked
// CRM profile (see /api/mock/submit.js, which grades AND persists for those).
// Pure text-statistics scoring, no AI/LLM call - see _lib/writingGrader.js.
const { gradeWritingSubmission } = require('../_lib/writingGrader');

module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    res.status(405).json({ ok: false, error: 'Method not allowed' });
    return;
  }

  try {
    const { writingTask1, writingTask2 } = req.body || {};
    if (!writingTask1 && !writingTask2) {
      res.status(400).json({ ok: false, error: 'Nothing to grade - both tasks are empty' });
      return;
    }

    const graded = gradeWritingSubmission(writingTask1, writingTask2);
    res.status(200).json({ ok: true, graded });
  } catch (err) {
    console.error('writing/grade error:', err);
    res.status(500).json({ ok: false, error: 'Could not grade this submission. Please try again in a moment.' });
  }
};
