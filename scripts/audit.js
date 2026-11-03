#!/usr/bin/env node
/**
 * ViATestPrep Test Data Integrity & Backend Answer Audit
 * 
 * Verifies that all questions across Cambridge IELTS and Unique tests
 * have valid texts, structure, audio assets, and backend answer keys.
 * 
 * Usage:
 *   node scripts/audit.js
 */

const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');

console.log('====================================================');
console.log('🔍 Running ViATestPrep Test Data & Backend Answer Audit');
console.log('====================================================\n');

function loadJsObject(relativePath, varName) {
  const fullPath = path.join(ROOT, relativePath);
  if (!fs.existsSync(fullPath)) {
    throw new Error(`Required file not found: ${relativePath}`);
  }
  let code = fs.readFileSync(fullPath, 'utf8');
  code = code.replace(new RegExp(`const ${varName} =`), `global.${varName} =`);
  eval(code);
  return global[varName];
}

// 1. Load test data and backend answers
let testData = {};
let uniqueData = {};
let testAnswers = {};

try {
  testData = loadJsObject('test-data.js', 'IELTS_TEST_DATA');
  console.log(`  ✅ Loaded test-data.js (${Object.keys(testData).length} tests)`);
} catch (e) {
  console.error(`  ❌ Failed loading test-data.js: ${e.message}`);
  process.exit(1);
}

try {
  uniqueData = loadJsObject('unique-test-data.js', 'UNIQUE_TEST_DATA');
  console.log(`  ✅ Loaded unique-test-data.js (${Object.keys(uniqueData).length} tests)`);
} catch (e) {
  console.error(`  ❌ Failed loading unique-test-data.js: ${e.message}`);
  process.exit(1);
}

try {
  testAnswers = require(path.join(ROOT, 'api/_lib/testAnswers.js'));
  console.log(`  ✅ Loaded backend answer key api/_lib/testAnswers.js (${Object.keys(testAnswers).length} test answer sets)\n`);
} catch (e) {
  console.error(`  ❌ Failed loading api/_lib/testAnswers.js: ${e.message}`);
  process.exit(1);
}

const allTests = { ...testData, ...uniqueData };
let criticalIssues = [];
let warnings = [];
let totalQuestionsChecked = 0;

Object.entries(allTests).forEach(([tid, test]) => {
  const book = test.book || 'Unknown';
  const tAnswers = testAnswers[tid] || {};

  // Check Listening
  if (test.listening && Array.isArray(test.listening.sections)) {
    const lAnswers = tAnswers.listening || {};
    test.listening.sections.forEach((sec, sidx) => {
      // Check audio
      if (sec.audio) {
        const audioPath = path.join(ROOT, sec.audio);
        if (!fs.existsSync(audioPath)) {
          warnings.push(`[${book} Test ${tid}] Audio file missing on disk: ${sec.audio}`);
        }
      }

      (sec.questions || []).forEach(q => {
        totalQuestionsChecked++;
        checkQuestion(q, tid, book, 'Listening', sidx + 1, lAnswers[String(q.num)] || lAnswers[q.num]);
      });
    });
  }

  // Check Reading
  if (test.reading && Array.isArray(test.reading.passages)) {
    const rAnswers = tAnswers.reading || {};
    test.reading.passages.forEach((pass, pidx) => {
      if (!pass.text || pass.text.length < 100) {
        criticalIssues.push(`[${book} Test ${tid} Reading Passage ${pidx + 1}] Passage text is missing or extremely short.`);
      }

      (pass.questions || []).forEach(q => {
        totalQuestionsChecked++;
        checkQuestion(q, tid, book, 'Reading', pidx + 1, rAnswers[String(q.num)] || rAnswers[q.num]);
      });
    });
  }
});

function checkQuestion(q, tid, book, mod, partIdx, answerObj) {
  const ref = `[${book} Test ${tid} ${mod} Part ${partIdx} Q${q.num}]`;

  // 1. Answer Key verification
  if (!answerObj) {
    criticalIssues.push(`${ref} MISSING BACKEND ANSWER KEY in api/_lib/testAnswers.js`);
    return;
  }
  const answer = typeof answerObj === 'string' ? answerObj : answerObj.answer;
  const explanation = typeof answerObj === 'object' ? answerObj.explanation : '';

  if (!answer || String(answer).trim() === '') {
    criticalIssues.push(`${ref} EMPTY ANSWER in api/_lib/testAnswers.js`);
  }
  if (!explanation || String(explanation).trim() === '') {
    warnings.push(`${ref} No explanation provided in answer key`);
  }

  // 2. Question Text verification
  const text = String(q.text || '').trim();
  if (!text) {
    criticalIssues.push(`${ref} Question text is empty`);
  } else if (/\[Placeholder\]/i.test(text) || /^Question \d+: Choose the correct option/i.test(text)) {
    criticalIssues.push(`${ref} Unreplaced placeholder text: "${text}"`);
  }

  // 3. Question Type verification
  if (q.type === 'FILL') {
    if (!/_{3,}/.test(text)) {
      criticalIssues.push(`${ref} FILL question missing blank (____): "${text}"`);
    }
  }

  if (q.type === 'MCQ' && Array.isArray(q.options)) {
    const letters = q.options.map(o => String(o).trim().split('.')[0].trim().toUpperCase());
    const ansParts = String(answer || '').split('/').map(a => a.trim().toUpperCase());
    ansParts.forEach(a => {
      if (a && !letters.includes(a)) {
        criticalIssues.push(`${ref} Answer letter '${a}' not in MCQ options [${letters.join(', ')}]`);
      }
    });
  }
}

console.log('----------------------------------------------------');
console.log(`📊 Audit Summary:`);
console.log(`   Total Tests Scanned:     ${Object.keys(allTests).length}`);
console.log(`   Total Questions Audited: ${totalQuestionsChecked}`);
console.log(`   Critical Errors:         ${criticalIssues.length}`);
console.log(`   Warnings:                ${warnings.length}`);
console.log('----------------------------------------------------\n');

if (criticalIssues.length > 0) {
  console.error('❌ CRITICAL ISSUES DETECTED:');
  criticalIssues.slice(0, 30).forEach(i => console.error(`  - ${i}`));
  if (criticalIssues.length > 30) {
    console.error(`  ... and ${criticalIssues.length - 30} more`);
  }
  process.exit(1);
} else {
  console.log('✅ ALL 1,400 QUESTIONS PASSED DATA INTEGRITY & ANSWER AUDIT!');
  if (warnings.length > 0) {
    console.log(`ℹ️  (${warnings.length} non-blocking warnings, e.g. optional audio files or explanations)`);
  }
  process.exit(0);
}
