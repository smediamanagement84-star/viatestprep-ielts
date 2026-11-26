// Combines student-facing auth, progress sync, reports, and Task 2 writing
// practice endpoints into one serverless function, dispatched by ?action= to
// stay within Vercel Hobby's 12-serverless-function cap:
//
// GET  /api/student?action=login&token=...
// POST /api/student?action=register       { accessToken, name }
// GET  /api/student?action=reports&studentId=...
// POST /api/student?action=progress       { studentId, completedModules, targetTrack }
// POST /api/student?action=essay          { studentId, promptId, promptText, promptType, essayText }
// GET  /api/student?action=crm-essays&consultancyId=...
// POST /api/student?action=essay-review   { submissionId, teacherBandOverride, teacherNotes }
const { verifyAuthUser } = require('../_lib/authUser');
const { signSession } = require('../_lib/sessionToken');
const { getCaller, canActAsStudent, canActAsConsultancy } = require('../_lib/callerAuth');
const { gradeWritingSubmission } = require('../_lib/writingGrader');
const {
  getStudentByAccessToken,
  getStudentByAuthUserId,
  insertSelfServeStudent,
  getStudentById,
  getMockHistoryByStudentId,
  getSpeakingGradesByStudentId,
  updateStudentAdmin,
  getWritingPracticeByStudentId,
  listWritingPracticeByConsultancy,
  listAllWritingPractice,
  getWritingPracticeById,
  upsertWritingPracticeSubmission,
  updateWritingPracticeReview,
  friendlyDbError,
  hasServiceRoleKey,
  isMissingTableError,
  restRequestAsUser,
} = require('../_lib/supabaseAdmin');

function isAdminConfigured() {
  return typeof hasServiceRoleKey === 'function'
    ? hasServiceRoleKey()
    : Boolean(process.env.SUPABASE_SERVICE_ROLE_KEY);
}

function sanitizeCompletedModules(input) {
  if (!Array.isArray(input)) return [];
  const seen = new Set();
  const out = [];
  for (const item of input) {
    const clean = String(item || '').trim().slice(0, 140);
    if (clean && !seen.has(clean)) {
      seen.add(clean);
      out.push(clean);
      if (out.length >= 120) break;
    }
  }
  return out;
}

function sanitizeTargetTrack(track) {
  const allowed = ['6.5', '7.0', '7.5', '8.0'];
  const val = String(track || '').trim();
  return allowed.includes(val) ? val : null;
}

function mapWritingPracticeRow(r) {
  if (!r) return null;
  return {
    id: r.id,
    studentId: r.student_id,
    studentName: r.student_name || 'Student',
    consultancyId: r.consultancy_id || 'default_consultancy',
    promptId: Number(r.prompt_id),
    promptText: r.prompt_text || '',
    essayText: r.essay_text || '',
    evaluation: r.evaluation || {},
    teacherNotes: r.teacher_notes || '',
    teacherBandOverride: r.teacher_band_override != null ? Number(r.teacher_band_override) : null,
    submittedAt: r.submitted_at || r.updated_at || new Date().toISOString(),
  };
}

async function handleLogin(req, res) {
  const token = (req.query.token || '').trim();
  if (!token) {
    res.status(400).json({ ok: false, error: 'Missing token' });
    return;
  }

  if (!isAdminConfigured()) {
    res.status(503).json({ ok: false, error: 'Access link login requires SUPABASE_SERVICE_ROLE_KEY on the server.' });
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
    targetTrack: student.target_track || null,
    completedModules: sanitizeCompletedModules(student.completed_modules),
    status: student.status,
    accessExpiresAt: student.access_expires_at,
    accessLevel: student.access_level || 'full',
    consultancyId: student.consultancy_id,
    expired,
    sessionToken: expired ? null : signSession('student', student.id),
  });
}

async function handleRegister(req, res) {
  const { accessToken, name } = req.body || {};
  const user = await verifyAuthUser(accessToken);
  if (!user) {
    res.status(401).json({ ok: false, error: 'Could not verify your login session. Please log in again.' });
    return;
  }

  const cleanName = (name || '').trim() || user.email;
  let row = null;

  if (isAdminConfigured()) {
    const existing = await getStudentByAuthUserId(user.id);
    row = existing || await insertSelfServeStudent({
      name: cleanName,
      email: user.email,
      auth_user_id: user.id,
    });
  } else {
    if (typeof restRequestAsUser === 'function') {
      try {
        const rows = await restRequestAsUser('students', accessToken, {
          method: 'GET',
          query: `?auth_user_id=eq.${encodeURIComponent(user.id)}&limit=1`,
        });
        if (rows && rows[0]) row = rows[0];
      } catch (e) { /* RLS or schema may block until service role key is set */ }
    }
    if (!row) {
      row = {
        id: user.id,
        name: cleanName,
        target_band: 7.0,
        status: 'Active',
        access_expires_at: null,
        access_level: 'full',
        consultancy_id: null,
      };
    }
  }

  const expired = !!row.access_expires_at && new Date() > new Date(row.access_expires_at);
  res.status(200).json({
    ok: true,
    id: row.id,
    name: row.name,
    targetBand: row.target_band,
    targetTrack: row.target_track || null,
    completedModules: sanitizeCompletedModules(row.completed_modules),
    status: row.status,
    accessExpiresAt: row.access_expires_at,
    accessLevel: row.access_level || 'full',
    consultancyId: row.consultancy_id,
    expired,
    sessionToken: expired ? null : signSession('student', row.id),
  });
}

async function handleReports(req, res) {
  const studentId = (req.query.studentId || '').trim();
  if (!studentId) {
    res.status(400).json({ ok: false, error: 'Missing studentId' });
    return;
  }

  if (!canActAsStudent(getCaller(req), studentId)) {
    res.status(401).json({ ok: false, error: 'Please log in again to view your results.' });
    return;
  }

  if (!isAdminConfigured()) {
    res.status(200).json({
      ok: true,
      results: [],
      speaking: [],
      completedModules: [],
      targetTrack: null,
      writingSubmissions: [],
      previewMode: true,
    });
    return;
  }

  const student = await getStudentById(studentId);
  if (!student) {
    res.status(404).json({ ok: false, error: 'Unknown student' });
    return;
  }

  const [history, speaking, writingRows] = await Promise.all([
    getMockHistoryByStudentId(studentId),
    getSpeakingGradesByStudentId(studentId),
    typeof getWritingPracticeByStudentId === 'function'
      ? getWritingPracticeByStudentId(studentId)
      : Promise.resolve([]),
  ]);

  res.status(200).json({
    ok: true,
    results: history,
    speaking,
    completedModules: sanitizeCompletedModules(student.completed_modules),
    targetTrack: student.target_track || null,
    writingSubmissions: (writingRows || []).map(mapWritingPracticeRow),
  });
}

async function handleProgress(req, res) {
  const { studentId, completedModules, targetTrack } = req.body || {};
  if (!studentId) {
    res.status(400).json({ ok: false, error: 'Missing studentId' });
    return;
  }

  if (!canActAsStudent(getCaller(req), studentId)) {
    res.status(401).json({ ok: false, error: 'Please log in again to save your study progress.' });
    return;
  }

  const cleanModules = sanitizeCompletedModules(completedModules);
  const cleanTrack = sanitizeTargetTrack(targetTrack);

  if (!isAdminConfigured()) {
    res.status(200).json({
      ok: true,
      completedModules: cleanModules,
      targetTrack: cleanTrack,
      previewMode: true,
    });
    return;
  }

  const student = await getStudentById(studentId);
  if (!student) {
    res.status(404).json({ ok: false, error: 'Unknown student' });
    return;
  }

  const patch = { completed_modules: cleanModules };
  if (cleanTrack) patch.target_track = cleanTrack;

  if (typeof updateStudentAdmin === 'function') {
    await updateStudentAdmin(studentId, patch);
  }

  res.status(200).json({
    ok: true,
    completedModules: cleanModules,
    targetTrack: cleanTrack || student.target_track || null,
  });
}

async function handleEssaySubmit(req, res) {
  const { studentId, promptId, promptText, promptType, essayText } = req.body || {};
  const cleanText = String(essayText || '').trim();
  const numPromptId = Number(promptId);

  if (!cleanText || !Number.isFinite(numPromptId) || numPromptId <= 0) {
    res.status(400).json({ ok: false, error: 'Missing promptId or essayText' });
    return;
  }

  const words = cleanText.split(/\s+/).filter(Boolean);
  if (words.length < 10) {
    res.status(400).json({ ok: false, error: 'Essay is too short to evaluate. Please write at least 250 words for a proper Task 2 response.' });
    return;
  }

  // Always grade server-side using the unified grader (no client score spoofing)
  const graded = gradeWritingSubmission('', cleanText.slice(0, 25000), {
    task2Prompt: String(promptText || '').slice(0, 2000),
    task2Type: String(promptType || '').slice(0, 100),
  });
  const t2 = graded && graded.task2;
  if (!t2) {
    res.status(400).json({ ok: false, error: 'Could not evaluate this essay text.' });
    return;
  }

  const allNotes = Object.values(t2.notes || {}).flat();
  const suggestions = Array.isArray(t2.suggestions) ? t2.suggestions : [];
  const strengths = Array.isArray(t2.strengths) ? t2.strengths : [];
  const mergedTips = [...allNotes];
  suggestions.forEach(s => { if (!mergedTips.includes(s)) mergedTips.push(s); });

  const evaluation = {
    isValid: true,
    overallBand: t2.band,
    scores: {
      tr: t2.criteria.taskAchievement,
      cc: t2.criteria.coherenceCohesion,
      lr: t2.criteria.lexicalResource,
      gra: t2.criteria.grammaticalRange,
    },
    strengths,
    feedback: mergedTips,
    stats: t2.stats || null,
  };

  // Allow anonymous/demo visitors to get the server grade without DB persistence,
  // while authenticated students require a matching session token to persist.
  const isTrackedStudent = Boolean(studentId && studentId !== 'demo_student' && studentId !== 'demo-bypass-student-id');
  if (!isTrackedStudent) {
    res.status(200).json({
      ok: true,
      graded,
      submission: {
        id: 'sub_' + Date.now(),
        studentId: studentId || 'demo_student',
        studentName: 'Guest Student',
        consultancyId: 'default_consultancy',
        promptId: numPromptId,
        promptText: String(promptText || ''),
        essayText: cleanText,
        evaluation,
        teacherNotes: '',
        teacherBandOverride: null,
        submittedAt: new Date().toISOString(),
      },
      persisted: false,
    });
    return;
  }

  if (!canActAsStudent(getCaller(req), studentId)) {
    res.status(401).json({ ok: false, error: 'Please log in again to save your essay to the cloud.' });
    return;
  }

  if (!isAdminConfigured()) {
    res.status(200).json({
      ok: true,
      graded,
      submission: {
        id: `wp_${studentId}_${numPromptId}`,
        studentId,
        studentName: 'Student',
        consultancyId: 'default_consultancy',
        promptId: numPromptId,
        promptText: String(promptText || ''),
        essayText: cleanText,
        evaluation,
        teacherNotes: '',
        teacherBandOverride: null,
        submittedAt: new Date().toISOString(),
      },
      previewMode: true,
    });
    return;
  }

  const student = await getStudentById(studentId);
  if (!student) {
    res.status(404).json({ ok: false, error: 'Unknown student' });
    return;
  }

  const dbRow = {
    id: `wp_${student.id}_${numPromptId}`,
    student_id: student.id,
    student_name: student.name || 'Student',
    consultancy_id: student.consultancy_id || null,
    prompt_id: numPromptId,
    prompt_text: String(promptText || '').slice(0, 2000),
    essay_text: cleanText.slice(0, 25000),
    evaluation,
    submitted_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  };

  try {
    const saved = await upsertWritingPracticeSubmission(dbRow);
    res.status(200).json({ ok: true, graded, submission: mapWritingPracticeRow(saved), persisted: true });
  } catch (err) {
    if (typeof isMissingTableError === 'function' && isMissingTableError(err)) {
      res.status(200).json({
        ok: true,
        graded,
        submission: mapWritingPracticeRow(dbRow),
        persisted: false,
        migrationPending: true,
      });
      return;
    }
    throw err;
  }
}

async function handleCrmEssays(req, res) {
  const caller = getCaller(req);
  if (!caller || (caller.role !== 'owner' && caller.role !== 'consultancy')) {
    res.status(401).json({ ok: false, error: 'Not authorized' });
    return;
  }

  if (!isAdminConfigured()) {
    res.status(200).json({ ok: true, submissions: [], previewMode: true });
    return;
  }

  const requestedCons = (req.query.consultancyId || '').trim();
  let rows;
  if (caller.role === 'owner') {
    rows = (requestedCons && requestedCons !== '__owner__')
      ? await listWritingPracticeByConsultancy(requestedCons)
      : await listAllWritingPractice();
  } else {
    rows = await listWritingPracticeByConsultancy(caller.id);
  }

  res.status(200).json({ ok: true, submissions: (rows || []).map(mapWritingPracticeRow) });
}

async function handleEssayReview(req, res) {
  const caller = getCaller(req);
  if (!caller || (caller.role !== 'owner' && caller.role !== 'consultancy')) {
    res.status(401).json({ ok: false, error: 'Not authorized' });
    return;
  }

  const { submissionId, teacherBandOverride, teacherNotes } = req.body || {};
  if (!submissionId) {
    res.status(400).json({ ok: false, error: 'Missing submissionId' });
    return;
  }

  let parsedBand = null;
  if (teacherBandOverride !== null && teacherBandOverride !== undefined && teacherBandOverride !== '') {
    const n = Number(teacherBandOverride);
    if (!Number.isFinite(n) || n < 0 || n > 9) {
      res.status(400).json({ ok: false, error: 'Invalid teacherBandOverride' });
      return;
    }
    parsedBand = Math.round(n * 2) / 2;
  }
  const cleanNotes = String(teacherNotes || '').slice(0, 4000);

  if (!isAdminConfigured()) {
    res.status(200).json({
      ok: true,
      submission: { id: submissionId, teacherBandOverride: parsedBand, teacherNotes: cleanNotes },
      previewMode: true,
    });
    return;
  }

  const existing = await getWritingPracticeById(submissionId);
  if (!existing) {
    res.status(404).json({ ok: false, error: 'Submission not found' });
    return;
  }

  if (caller.role !== 'owner' && !canActAsConsultancy(caller, existing.consultancy_id)) {
    res.status(403).json({ ok: false, error: 'You do not have permission to review this submission.' });
    return;
  }

  const updated = await updateWritingPracticeReview(submissionId, {
    teacher_band_override: parsedBand,
    teacher_notes: cleanNotes,
  });

  res.status(200).json({ ok: true, submission: mapWritingPracticeRow(updated) });
}

module.exports = async (req, res) => {
  const action = req.query.action;

  try {
    if (action === 'login' && req.method === 'GET') return await handleLogin(req, res);
    if (action === 'register' && req.method === 'POST') return await handleRegister(req, res);
    if (action === 'reports' && req.method === 'GET') return await handleReports(req, res);
    if (action === 'progress' && req.method === 'POST') return await handleProgress(req, res);
    if (action === 'essay' && req.method === 'POST') return await handleEssaySubmit(req, res);
    if (action === 'crm-essays' && req.method === 'GET') return await handleCrmEssays(req, res);
    if (action === 'essay-review' && req.method === 'POST') return await handleEssayReview(req, res);

    res.status(400).json({ ok: false, error: 'Unknown or missing ?action, or wrong HTTP method for that action' });
  } catch (err) {
    console.error(`student/index (action=${action}) error:`, err);
    res.status(500).json({ ok: false, error: friendlyDbError(err) || 'Something went wrong. Please try again in a moment.' });
  }
};
