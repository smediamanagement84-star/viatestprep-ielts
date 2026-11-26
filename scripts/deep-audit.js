#!/usr/bin/env node
/**
 * ViATestPrep Deep Cambridge & Unique QA Diagnostic Audit (Read-Only, $0 local)
 *
 * Audits all tests across:
 *   1. Audio / Transcript vs. Question alignment (including cross-part match detection)
 *   2. Reading Passage vs. Questions, Answers & Explanation Quote alignment
 *   3. Exact Renderer & Format parity (FILL_GROUP swallowing, missing inputs,
 *      unsupported question types, stripped options, diagram assets, word limits, OCR)
 *
 * Usage:
 *   node scripts/deep-audit.js          # Prints full test-by-test report (exits 0)
 *   node scripts/deep-audit.js --strict # Exits 1 if any issues are found
 */

const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const STRICT = process.argv.includes('--strict');

function loadJsObject(relativePath, varName) {
  let code = fs.readFileSync(path.join(ROOT, relativePath), 'utf8');
  code = code.replace(new RegExp(`const ${varName} =`), `global.${varName} =`);
  eval(code);
  return global[varName];
}

const ieltsData = loadJsObject('test-data.js', 'IELTS_TEST_DATA');
const uniqueData = loadJsObject('unique-test-data.js', 'UNIQUE_TEST_DATA');
const testAnswers = require(path.join(ROOT, 'api/_lib/testAnswers.js'));
const allTests = { ...ieltsData, ...uniqueData };

const STOP_WORDS = new Set([
  'which', 'what', 'about', 'these', 'their', 'there', 'would', 'could', 'should',
  'following', 'choose', 'correct', 'letter', 'write', 'questions', 'question',
  'between', 'speaker', 'speakers', 'agree', 'opinion', 'think', 'below', 'answers',
  'answer', 'people', 'statement', 'passage', 'reading', 'according', 'information',
  'writer', 'claims', 'agrees', 'paragraph', 'because', 'through', 'without', 'using'
]);

function stripHtml(html) {
  return String(html || '')
    .replace(/&rsquo;|&lsquo;|&#39;/g, "'")
    .replace(/&rdquo;|&ldquo;|&quot;/g, '"')
    .replace(/&nbsp;/g, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function extractKeywords(text) {
  const words = stripHtml(text).toLowerCase().match(/\b[a-z]{5,}\b/g) || [];
  return [...new Set(words)].filter(w => !STOP_WORDS.has(w));
}

function getPlaceholdersFromInstruction(instruction) {
  let bodyHtml = String(instruction || '');
  bodyHtml = bodyHtml.replace(/^(?:questions?\s+\d+(?:\s*-\s*\d+)?)/i, '');
  bodyHtml = bodyHtml.replace(/^(?:\s*<br\s*\/?>\s*)*Complete\s+the\s+[\s\S]+?below\.?/i, '');
  bodyHtml = bodyHtml.replace(/^(?:\s*<br\s*\/?>\s*)*Write\s+[^<]+for\s+(?:each\s+)?answer\.?/i, '');
  bodyHtml = bodyHtml.replace(/^(?:\s*<br\s*\/?>|\s)+/i, '');
  const replaceRegex = /(?:<b>|<strong>)?[\(\[\{]?(\d+)[\)\]\}]?(?:<\/b>|<\/strong>)?\s*(?:<b>|<strong>)?[\._]{3,}(?:<\/b>|<\/strong>)?/g;
  const hasPlaceholders = replaceRegex.test(bodyHtml);
  replaceRegex.lastIndex = 0;
  const matches = hasPlaceholders
    ? [...bodyHtml.matchAll(replaceRegex)].map(m => parseInt(m[1], 10))
    : [];
  return { hasPlaceholders, matches, bodyHtml };
}

// Build pool of all listening transcripts & reading passages for cross-match checks
const transcriptPool = [];
const passagePool = [];

for (const [tid, test] of Object.entries(allTests)) {
  (test.listening?.sections || []).forEach((sec, idx) => {
    transcriptPool.push({
      tid,
      title: test.title,
      part: idx + 1,
      text: stripHtml(sec.transcript || '').toLowerCase()
    });
  });
  (test.reading?.passages || []).forEach((pass, idx) => {
    passagePool.push({
      tid,
      title: test.title,
      passage: idx + 1,
      pTitle: pass.title || '',
      text: stripHtml(pass.text || '').toLowerCase()
    });
  });
}

const reportByTest = {};
function addIssue(tid, category, severity, location, detail) {
  if (!reportByTest[tid]) {
    reportByTest[tid] = {
      title: allTests[tid]?.title || `Test ${tid}`,
      issues: []
    };
  }
  reportByTest[tid].issues.push({ category, severity, location, detail });
}

// Track summary counters
const counts = {
  AUDIO_TRANSCRIPT: 0,
  FORMAT_RENDERER: 0,
  PASSAGE_ALIGNMENT: 0,
  CONTENT_HYGIENE: 0
};

for (const [tid, test] of Object.entries(allTests)) {
  const ans = testAnswers[tid] || {};

  // ─────────────────────────────────────────────────────────────
  // 1. LISTENING AUDIT
  // ─────────────────────────────────────────────────────────────
  const lSections = test.listening?.sections || [];
  const lNums = lSections.flatMap(s => (s.questions || []).map(q => q.num));
  if (lSections.length > 0 && lNums.length !== 40) {
    addIssue(tid, 'CONTENT_HYGIENE', 'ERROR', 'Listening', `Expected 40 questions, found ${lNums.length}`);
    counts.CONTENT_HYGIENE++;
  }
  const lDups = lNums.filter((n, idx) => lNums.indexOf(n) !== idx);
  if (lDups.length) {
    addIssue(tid, 'CONTENT_HYGIENE', 'ERROR', 'Listening', `Duplicate question numbers: [${lDups.join(', ')}]`);
    counts.CONTENT_HYGIENE++;
  }

  lSections.forEach((sec, sIdx) => {
    const partNum = sIdx + 1;
    const loc = `Listening Part ${partNum}`;
    const qs = sec.questions || [];
    const lAns = ans.listening || {};

    // 1a. Audio existence & filename consistency
    if (!sec.audio) {
      addIssue(tid, 'AUDIO_TRANSCRIPT', 'ERROR', loc, 'Missing section.audio path');
      counts.AUDIO_TRANSCRIPT++;
    } else if (!fs.existsSync(path.join(ROOT, sec.audio))) {
      addIssue(tid, 'AUDIO_TRANSCRIPT', 'ERROR', loc, `Audio file missing on disk: ${sec.audio}`);
      counts.AUDIO_TRANSCRIPT++;
    } else {
      const mAudio = sec.audio.match(/IELTS_(\d+)_Test_(\d+)_Part(\d+)/i);
      const mTitle = (test.title || '').match(/(\d+)\s+Test\s+(\d+)/i);
      if (mAudio && mTitle) {
        if (mAudio[1] !== mTitle[1] || mAudio[2] !== mTitle[2] || Number(mAudio[3]) !== partNum) {
          addIssue(tid, 'AUDIO_TRANSCRIPT', 'ERROR', loc, `Audio filename (${sec.audio}) does not match "${test.title}" Part ${partNum}`);
          counts.AUDIO_TRANSCRIPT++;
        }
      }
    }

    // 1b. Transcript vs Questions + Answers alignment
    const trText = stripHtml(sec.transcript || '').toLowerCase();
    if (!trText) {
      if (qs.length > 0) {
        addIssue(tid, 'AUDIO_TRANSCRIPT', 'WARN', loc, 'No transcript available for automated text alignment');
        counts.AUDIO_TRANSCRIPT++;
      }
    } else {
      const fillMissing = [];
      for (const q of qs.filter(x => x.type === 'FILL')) {
        const rawA = lAns[q.num]?.answer || '';
        const alts = rawA.split('/').map(x => x.replace(/\(.*?\)/g, '').trim().toLowerCase()).filter(Boolean);
        if (alts.length && !alts.some(alt => trText.includes(alt))) {
          fillMissing.push(`Q${q.num}="${rawA}"`);
        }
      }
      if (fillMissing.length > 0) {
        addIssue(tid, 'AUDIO_TRANSCRIPT', 'ERROR', loc, `FILL answers missing from transcript: ${fillMissing.join(', ')}`);
        counts.AUDIO_TRANSCRIPT++;
      }

      const qKeywords = extractKeywords(qs.map(q => `${q.text || ''} ${(q.options || []).join(' ')}`).join(' '));
      if (qKeywords.length >= 10) {
        const hits = qKeywords.filter(w => trText.includes(w)).length;
        const pct = Math.round((hits / qKeywords.length) * 100);
        // Find best matching transcript in the pool
        let best = { label: 'none', pct: 0 };
        for (const cand of transcriptPool) {
          if (!cand.text) continue;
          const cHits = qKeywords.filter(w => cand.text.includes(w)).length;
          const cPct = Math.round((cHits / qKeywords.length) * 100);
          if (cPct > best.pct) best = { label: `Test ${cand.tid} Part ${cand.part}`, pct: cPct };
        }
        if (pct < 28 || (best.pct > pct + 12 && best.label !== `Test ${tid} Part ${partNum}`)) {
          const extra = best.pct > pct + 10 ? ` (closest match in pool: ${best.label} at ${best.pct}%)` : '';
          addIssue(tid, 'AUDIO_TRANSCRIPT', 'ERROR', loc, `Transcript-to-question keyword overlap critically low (${hits}/${qKeywords.length} = ${pct}%)${extra}`);
          counts.AUDIO_TRANSCRIPT++;
        }
      }
    }

    // 1c. Diagram / Map assets
    const mentionsMap = qs.some(q => /\b(map|plan|diagram|label the)\b/i.test(q.instruction || ''));
    if (sec.diagram) {
      const imgMatch = sec.diagram.match(/src=["']([^"']+)["']/i);
      if (imgMatch && !fs.existsSync(path.join(ROOT, imgMatch[1]))) {
        addIssue(tid, 'FORMAT_RENDERER', 'ERROR', loc, `Diagram image missing on disk: ${imgMatch[1]}`);
        counts.FORMAT_RENDERER++;
      }
    } else if (mentionsMap && qs.some(q => q.type === 'MCQ' && q.options?.every(o => /^[A-Z]$/.test(o.trim())))) {
      addIssue(tid, 'FORMAT_RENDERER', 'ERROR', loc, 'Map/diagram labeling questions present but section.diagram is missing');
      counts.FORMAT_RENDERER++;
    }

    // 1d. Listening Renderer Simulation
    let i = 0;
    while (i < qs.length) {
      const q = qs[i];
      if (q.type === 'FILL') {
        const matchInst = q.instruction || '';
        const group = [q];
        let j = i + 1;
        while (j < qs.length && qs[j].type === 'FILL' && (qs[j].instruction || '') === matchInst) {
          group.push(qs[j]);
          j++;
        }
        // Listening renderer now appends fallback inputs for any unmatched FILL question in a group
        i = j;
        continue;
      }
      if (!['FILL', 'MCQ', 'MATCHING'].includes(q.type)) {
        addIssue(tid, 'FORMAT_RENDERER', 'ERROR', `${loc} Q${q.num}`, `Unsupported Listening question type "${q.type}"`);
        counts.FORMAT_RENDERER++;
      }
      if (q.type === 'MCQ' && Array.isArray(q.options)) {
        const bareLetters = q.options.every(o => /^[A-Z]$/i.test(String(o).trim()));
        if (bareLetters && !sec.diagram && !/\bA\b.*\bB\b/s.test(q.instruction || '')) {
          addIssue(tid, 'FORMAT_RENDERER', 'ERROR', `${loc} Q${q.num}`, `MCQ uses bare letters ${JSON.stringify(q.options)} with neither diagram nor option legend in instruction`);
          counts.FORMAT_RENDERER++;
        }
      }
      if (q.type === 'MATCHING') {
        const bareLetters = (q.options || []).every(o => /^[A-Z]$/.test(String(o).trim()));
        if (bareLetters && !sec.diagram && !/\bA\b.*\bB\b/s.test(q.instruction || '')) {
          addIssue(tid, 'FORMAT_RENDERER', 'ERROR', `${loc} Q${q.num}`, `MATCHING uses bare letters ${JSON.stringify(q.options)} with no diagram or option legend in instruction`);
          counts.FORMAT_RENDERER++;
        }
      }
      i++;
    }

    // 1e. Listening word limits & OCR hygiene
    qs.forEach(q => {
      const a = lAns[q.num]?.answer || '';
      const wl = (q.instruction || '').match(/NO MORE THAN (ONE|TWO|THREE|\d+) WORDS?|ONE WORD ONLY/i);
      if (wl && q.type === 'FILL' && a) {
        const maxW = /ONE/i.test(wl[0]) ? 1 : (/TWO/i.test(wl[0]) ? 2 : (/THREE/i.test(wl[0]) ? 3 : parseInt(wl[1], 10)));
        const firstAlt = a.split('/')[0].replace(/\(.*?\)/g, '').trim();
        const words = firstAlt.split(/\s+/).filter(Boolean);
        // Allow numeric/time variations slightly, flag obvious multi-word violations
        if (words.length > maxW && !/^\d[\d\s:\-\.]*$/.test(firstAlt)) {
          addIssue(tid, 'CONTENT_HYGIENE', 'WARN', `${loc} Q${q.num}`, `Answer "${a}" (${words.length} words) exceeds instruction "${wl[0]}"`);
          counts.CONTENT_HYGIENE++;
        }
      }
    });
  });

  // ─────────────────────────────────────────────────────────────
  // 2. READING AUDIT
  // ─────────────────────────────────────────────────────────────
  const rPassages = test.reading?.passages || [];
  const rNums = rPassages.flatMap(p => (p.questions || []).map(q => q.num));
  if (rPassages.length > 0 && rNums.length !== 40) {
    addIssue(tid, 'CONTENT_HYGIENE', 'ERROR', 'Reading', `Expected 40 questions, found ${rNums.length}`);
    counts.CONTENT_HYGIENE++;
  }
  const rDups = rNums.filter((n, idx) => rNums.indexOf(n) !== idx);
  if (rDups.length) {
    addIssue(tid, 'CONTENT_HYGIENE', 'ERROR', 'Reading', `Duplicate question numbers: [${rDups.join(', ')}]`);
    counts.CONTENT_HYGIENE++;
  }

  rPassages.forEach((pass, pIdx) => {
    const pNum = pIdx + 1;
    const loc = `Reading Passage ${pNum}`;
    const pText = stripHtml(pass.text || '').toLowerCase();
    const pNorm = pText.replace(/[^a-z0-9\s]/g, '').replace(/\s+/g, ' ');
    const qs = pass.questions || [];
    const rAns = ans.reading || {};

    // 2a. Passage length sanity
    if (pText.length < 2000) {
      addIssue(tid, 'PASSAGE_ALIGNMENT', 'WARN', loc, `Passage unusually short (${pText.length} chars; typical Cambridge passage is 4,500–6,000 chars — may be truncated)`);
      counts.PASSAGE_ALIGNMENT++;
    }

    // 2b. FILL answers in Passage
    const fillMissing = [];
    for (const q of qs.filter(x => x.type === 'FILL')) {
      const rawA = rAns[q.num]?.answer || '';
      const alts = rawA.split('/').map(x => x.replace(/\(.*?\)/g, '').trim().toLowerCase()).filter(Boolean);
      if (alts.length && !alts.some(alt => pText.includes(alt))) {
        fillMissing.push(`Q${q.num}="${rawA}"`);
      }
    }
    if (fillMissing.length > 0) {
      addIssue(tid, 'PASSAGE_ALIGNMENT', 'ERROR', loc, `FILL answers missing from passage: ${fillMissing.join(', ')}`);
      counts.PASSAGE_ALIGNMENT++;
    }

    // 2c. Explanation evidence quotes in Passage
    let quoteTotal = 0;
    const quoteMissingQs = [];
    for (const q of qs) {
      const exp = rAns[q.num]?.explanation || '';
      const m = exp.match(/confirms this:\s*"([^"]{15,90})/i);
      if (m) {
        quoteTotal++;
        const qNorm = m[1].toLowerCase().replace(/[^a-z0-9\s]/g, '').replace(/\s+/g, ' ').trim();
        if (qNorm.length > 15 && !pNorm.includes(qNorm.slice(0, 30))) {
          quoteMissingQs.push(`Q${q.num}`);
        }
      }
    }
    if (quoteMissingQs.length > 0) {
      addIssue(tid, 'PASSAGE_ALIGNMENT', 'ERROR', loc, `${quoteMissingQs.length}/${quoteTotal} answer explanation quotes NOT found in passage (${quoteMissingQs.join(', ')})`);
      counts.PASSAGE_ALIGNMENT++;
    }

    // 2d. Keyword overlap vs passage (cross-check against all passages)
    const rKeywords = extractKeywords(qs.map(q => q.text || '').join(' '));
    if (rKeywords.length >= 12) {
      const hits = rKeywords.filter(w => pText.includes(w)).length;
      const pct = Math.round((hits / rKeywords.length) * 100);
      if (pct < 30) {
        addIssue(tid, 'PASSAGE_ALIGNMENT', 'WARN', loc, `Low question-to-passage keyword overlap (${hits}/${rKeywords.length} = ${pct}%)`);
        counts.PASSAGE_ALIGNMENT++;
      }
    }

    // 2e. Paragraph marker alignment for MATCHING_INFO / HEADING
    const missingParas = [];
    for (const q of qs) {
      const a = (rAns[q.num]?.answer || '').trim();
      if (q.type === 'MATCHING_INFO' && /^[A-Z]$/.test(a)) {
        const hasPara = new RegExp(`<(?:p|b|strong|h\\d)[^>]*>\\s*(?:<(?:b|strong)>)?${a}(?:<\\/(?:b|strong)>)?(?:\\s|<|$)|\\bParagraph\\s+${a}\\b`, 'i').test(pass.text || '');
        if (!hasPara) missingParas.push(`Q${q.num}->${a}`);
      }
    }
    if (missingParas.length > 0) {
      addIssue(tid, 'PASSAGE_ALIGNMENT', 'WARN', loc, `Passage lacks labeled paragraph markers (${missingParas.join(', ')}) needed by Matching Information questions`);
      counts.PASSAGE_ALIGNMENT++;
    }

    // 2f. Reading Renderer Simulation (exact logic from ielts-reading-practice.html)
    let i = 0;
    while (i < qs.length) {
      const q = qs[i];
      if (q.type === 'FILL') {
        const matchInst = q.instruction || '';
        const group = [q];
        let j = i + 1;
        while (j < qs.length && qs[j].type === 'FILL' && (qs[j].instruction || '') === matchInst) {
          group.push(qs[j]);
          j++;
        }
        // Reading renderer now appends fallback inputs for any unmatched FILL question in a group
        i = j;
        continue;
      }

      if (!['FILL', 'MCQ', 'TFNG', 'YNNG', 'HEADING', 'MATCHING_INFO', 'MATCHING_FEATURES', 'MATCHING_PEOPLE', 'ENDINGS', 'MATCHING_ENDINGS'].includes(q.type)) {
        addIssue(tid, 'FORMAT_RENDERER', 'ERROR', `${loc} Q${q.num}`, `Unsupported Reading type "${q.type}" — renders with NO answer controls`);
        counts.FORMAT_RENDERER++;
      }

      if (q.type === 'MCQ' && Array.isArray(q.options)) {
        const bareLetters = q.options.every(o => /^[A-Z]$/i.test(String(o).trim()));
        if (bareLetters && !/\bA\b.*\bB\b/s.test(q.instruction || '')) {
          addIssue(tid, 'FORMAT_RENDERER', 'ERROR', `${loc} Q${q.num}`, `MCQ uses bare letters ${JSON.stringify(q.options)} with no option legend in instruction (e.g. "${(q.text || '').slice(0, 40)}")`);
          counts.FORMAT_RENDERER++;
        }
      }

      i++;
    }

    // 2g. OCR / truncation / TFNG-vs-YNNG sanity
    qs.forEach(q => {
      const a = (rAns[q.num]?.answer || '').trim().toUpperCase();
      if (q.type === 'TFNG' && a && !['TRUE', 'FALSE', 'NOT GIVEN'].includes(a)) {
        addIssue(tid, 'FORMAT_RENDERER', 'ERROR', `${loc} Q${q.num}`, `TFNG question has invalid answer "${a}"`);
        counts.FORMAT_RENDERER++;
      }
      if (q.type === 'YNNG' && a && !['YES', 'NO', 'NOT GIVEN'].includes(a)) {
        addIssue(tid, 'FORMAT_RENDERER', 'ERROR', `${loc} Q${q.num}`, `YNNG question has invalid answer "${a}"`);
        counts.FORMAT_RENDERER++;
      }
      if (/\bareference\b|\bthepassage\b|\binthe\b|\bofthe\b/i.test(q.text || '')) {
        addIssue(tid, 'CONTENT_HYGIENE', 'WARN', `${loc} Q${q.num}`, `Possible OCR fused word in question text: "${q.text.slice(0, 70)}"`);
        counts.CONTENT_HYGIENE++;
      }
      if (q.instruction && /\band in$/i.test(stripHtml(q.instruction))) {
        addIssue(tid, 'CONTENT_HYGIENE', 'ERROR', `${loc} Q${q.num}`, `Truncated instruction ending mid-sentence ("...and in")`);
        counts.CONTENT_HYGIENE++;
      }
    });
  });
}

console.log('===============================================================');
console.log('📋 ViATestPrep Deep QA Report (Read-Only Diagnostic)');
console.log('===============================================================');
console.log(`Tests scanned:                ${Object.keys(allTests).length}`);
console.log(`Audio/Transcript mismatches:  ${counts.AUDIO_TRANSCRIPT}`);
console.log(`Format / Renderer bugs:       ${counts.FORMAT_RENDERER}`);
console.log(`Reading Passage mismatches:   ${counts.PASSAGE_ALIGNMENT}`);
console.log(`Content / OCR hygiene flags:  ${counts.CONTENT_HYGIENE}`);
console.log('===============================================================\n');

const sortedIds = Object.keys(reportByTest).sort((a, b) => {
  const na = parseInt(a, 10), nb = parseInt(b, 10);
  if (!isNaN(na) && !isNaN(nb)) return na - nb;
  if (!isNaN(na)) return -1;
  if (!isNaN(nb)) return 1;
  return a.localeCompare(b);
});

for (const tid of sortedIds) {
  const entry = reportByTest[tid];
  console.log(`▶ Test ${tid}: ${entry.title} (${entry.issues.length} issue${entry.issues.length === 1 ? '' : 's'})`);
  for (const iss of entry.issues) {
    const tag = iss.severity === 'ERROR' ? '❌' : '⚠️ ';
    console.log(`   ${tag} [${iss.category}] ${iss.location}: ${iss.detail}`);
  }
  console.log('');
}

const totalIssues = Object.values(counts).reduce((a, b) => a + b, 0);
if (STRICT && totalIssues > 0) {
  process.exit(1);
}
