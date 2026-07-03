// Rule-based (non-AI) IELTS Writing scorer. No LLM/external API calls -
// every score is computed from measurable text statistics (word count,
// paragraph structure, cohesive-device usage, lexical diversity, sentence
// complexity) mapped against the actual IELTS Writing band descriptors'
// public criteria: Task Achievement/Response, Coherence & Cohesion, Lexical
// Resource, and Grammatical Range & Accuracy.
//
// HONEST LIMITATION: this cannot assess whether an argument is logically
// sound, whether ideas are relevant to the prompt, or catch subtle grammar
// errors the way a human examiner or a language model would - those require
// actual language understanding. What it CAN do reliably is measure the
// structural and lexical proxies IELTS examiners are themselves instructed
// to weigh heavily (length, organization, range of vocabulary and sentence
// structures, use of cohesive devices) and turn that into a transparent,
// consistent, immediately-available band estimate with specific feedback -
// instead of an essay sitting completely ungraded until a tutor gets to it.
// A tutor can still review/override every automated score in the CRM.

function tokenizeWords(text) {
  return (text.toLowerCase().match(/[a-z']+/g) || []).filter(w => w.length > 0);
}

function splitSentences(text) {
  return text
    .replace(/\s+/g, ' ')
    .split(/(?<=[.!?])\s+(?=[A-Z0-9])/)
    .map(s => s.trim())
    .filter(Boolean);
}

function splitParagraphs(text) {
  return text
    .split(/\n\s*\n|\r\n\s*\r\n/)
    .map(p => p.trim())
    .filter(p => p.length > 0);
}

function countPhraseOccurrences(lowerText, phrases) {
  const counts = {};
  let total = 0;
  phrases.forEach(p => {
    const re = new RegExp(`\\b${p.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\b`, 'g');
    const m = lowerText.match(re);
    if (m) { counts[p] = m.length; total += m.length; }
  });
  return { total, counts };
}

const LINKERS = {
  addition: ['moreover', 'furthermore', 'in addition', 'additionally', 'besides'],
  contrast: ['however', 'nevertheless', 'nonetheless', 'on the other hand', 'in contrast', 'whereas', 'although', 'despite', 'conversely'],
  cause_effect: ['therefore', 'thus', 'consequently', 'as a result', 'hence'],
  sequence: ['firstly', 'secondly', 'thirdly', 'finally', 'to begin with', 'subsequently', 'meanwhile'],
  example: ['for example', 'for instance', 'such as', 'namely'],
  summary: ['in conclusion', 'to conclude', 'overall', 'to summarize', 'to sum up', 'in summary'],
};
const ALL_LINKERS = Object.values(LINKERS).flat();

const OPINION_MARKERS = ['i believe', 'in my opinion', 'i think', 'i agree', 'i disagree', 'from my perspective', 'this essay will argue', 'this essay will discuss', 'it is my view'];
const CONCLUSION_MARKERS = ['in conclusion', 'to conclude', 'to summarize', 'to sum up', 'overall,'];
const OVERVIEW_MARKERS = ['overall', 'in general', 'to summarize the data', 'the most striking feature'];
const DATA_VOCAB = ['percent', '%', 'proportion', 'majority', 'minority', 'figure', 'chart', 'graph', 'table', 'diagram', 'compared to', 'in comparison', 'whereas', 'similarly', 'likewise', 'by contrast', 'increase', 'decrease', 'rise', 'fall', 'fluctuate', 'peak', 'decline', 'grow', 'drop', 'surge', 'plummet', 'remain stable', 'level off'];
const COMPLEX_MARKERS = ['although', 'because', 'since', 'while', 'if', 'unless', 'whereas', 'though', 'which', 'who', 'whom', 'that', 'whose', 'when', 'where', 'in order to', 'so that'];
const INFORMAL_WORDS = ["don't", "can't", "won't", "isn't", "aren't", "wasn't", "weren't", "shouldn't", "wouldn't", "couldn't", "it's", "that's", "there's", "i'm", "we're", "they're", 'gonna', 'wanna', 'kinda', 'a lot of', 'lots of', 'stuff', 'thing', 'things', 'guy', 'guys'];

const STOPWORDS = new Set(['the', 'a', 'an', 'and', 'or', 'but', 'is', 'are', 'was', 'were', 'be', 'been', 'to', 'of', 'in', 'on', 'at', 'for', 'with', 'as', 'by', 'that', 'this', 'it', 'its', 'i', 'we', 'they', 'he', 'she', 'you', 'their', 'his', 'her', 'my', 'our', 'your', 'not', 'no', 'do', 'does', 'did', 'has', 'have', 'had', 'will', 'would', 'can', 'could', 'should', 'may', 'might', 'from', 'into', 'than', 'so', 'if', 'because']);

function clampBand(x) {
  return Math.min(9, Math.max(4, Math.round(x * 2) / 2));
}

// IELTS's published rounding rule for combining 4 criteria into one task
// band: an average ending in .25 rounds UP to the next half band, .75 rounds
// UP to the next whole band. Averaging four values that are each already in
// 0.5 steps can also land on .125/.375/.625/.875, which the public rule
// doesn't cover - those round to the nearest half band as the closest
// reasonable interpretation.
function combineBands(bands) {
  const avg = bands.reduce((a, b) => a + b, 0) / bands.length;
  const rem = +(avg - Math.floor(avg)).toFixed(3);
  let combined;
  if (rem === 0 || rem === 0.5) combined = avg;
  else if (rem === 0.25) combined = Math.floor(avg) + 0.5;
  else if (rem === 0.75) combined = Math.floor(avg) + 1;
  else combined = Math.round(avg * 2) / 2;
  return clampBand(combined);
}

function analyzeText(text) {
  const words = tokenizeWords(text);
  const sentences = splitSentences(text);
  const paragraphs = splitParagraphs(text);
  const lower = text.toLowerCase();

  const sentenceLengths = sentences.map(s => tokenizeWords(s).length).filter(n => n > 0);
  const avgSentenceLength = sentenceLengths.length ? sentenceLengths.reduce((a, b) => a + b, 0) / sentenceLengths.length : 0;
  const sentenceLengthStdDev = sentenceLengths.length > 1
    ? Math.sqrt(sentenceLengths.reduce((a, b) => a + Math.pow(b - avgSentenceLength, 2), 0) / sentenceLengths.length)
    : 0;

  const uniqueWords = new Set(words);
  const sampleForTtr = words.slice(0, 300); // cap so longer essays aren't unfairly penalized for lower TTR
  const ttr = sampleForTtr.length ? new Set(sampleForTtr).size / sampleForTtr.length : 0;
  const avgWordLength = words.length ? words.reduce((a, w) => a + w.length, 0) / words.length : 0;

  const contentWordFreq = {};
  words.forEach(w => { if (!STOPWORDS.has(w) && w.length > 3) contentWordFreq[w] = (contentWordFreq[w] || 0) + 1; });
  const topWordFreq = Object.values(contentWordFreq).sort((a, b) => b - a)[0] || 0;
  const topWordFreqRatio = words.length ? topWordFreq / words.length : 0;

  const linkerCategories = Object.entries(LINKERS).filter(([, phrases]) => countPhraseOccurrences(lower, phrases).total > 0).map(([cat]) => cat);
  const linkerHits = countPhraseOccurrences(lower, ALL_LINKERS);
  const complexHits = countPhraseOccurrences(lower, COMPLEX_MARKERS);
  const informalHits = countPhraseOccurrences(lower, INFORMAL_WORDS);
  const opinionHits = countPhraseOccurrences(lower, OPINION_MARKERS);
  const conclusionHits = countPhraseOccurrences(lower, CONCLUSION_MARKERS);
  const overviewHits = countPhraseOccurrences(lower, OVERVIEW_MARKERS);
  const dataVocabHits = countPhraseOccurrences(lower, DATA_VOCAB);

  const overuseLinker = Object.entries(linkerHits.counts).sort((a, b) => b[1] - a[1])[0];
  const linkerOveruse = linkerHits.total >= 4 && overuseLinker && (overuseLinker[1] / linkerHits.total) > 0.4;

  return {
    wordCount: words.length, sentenceCount: sentences.length, paragraphCount: paragraphs.length,
    paragraphs, avgSentenceLength, sentenceLengthStdDev, ttr, avgWordLength, topWordFreqRatio,
    linkerCategoryCount: linkerCategories.length, linkerTotal: linkerHits.total, linkerOveruse,
    complexMarkerCount: complexHits.total, informalWordCount: informalHits.total,
    opinionMarkerCount: opinionHits.total, conclusionMarkerCount: conclusionHits.total,
    overviewMarkerCount: overviewHits.total, dataVocabCount: Object.keys(dataVocabHits.counts).length,
  };
}

function scoreTaskAchievement(a, isTask1) {
  let band = 6.0;
  const notes = [];
  const minWords = isTask1 ? 150 : 250;
  const lowWords = isTask1 ? 120 : 220;

  if (a.wordCount >= minWords + 30) band += 0.5;
  else if (a.wordCount >= minWords) { /* meets minimum, no change */ }
  else if (a.wordCount >= lowWords) { band -= 0.5; notes.push(`At ${a.wordCount} words, this is under the ${minWords}-word minimum - IELTS examiners mark down under-length responses regardless of quality.`); }
  else { band -= 1.5; notes.push(`At only ${a.wordCount} words, this is well under the ${minWords}-word minimum. Very short responses are capped on Task Achievement.`); }

  if (isTask1) {
    if (a.overviewMarkerCount > 0) band += 0.75;
    else { band -= 0.75; notes.push('No clear overview statement detected - Task 1 responses must summarize the main trends, not just list every data point.'); }
    if (a.dataVocabCount >= 4) band += 0.5;
    else if (a.dataVocabCount < 2) { band -= 0.5; notes.push('Very little trend/comparison vocabulary (e.g. "increased", "compared to", "the majority") was detected.'); }
    if (a.paragraphCount >= 3) band += 0.25;
    else notes.push('Consider organizing the report into an introduction, overview, and body paragraphs covering different parts of the data.');
  } else {
    if (a.opinionMarkerCount > 0) band += 0.5;
    else { band -= 0.5; notes.push('No clear thesis or position statement was detected in the introduction.'); }
    if (a.paragraphCount >= 4) band += 0.5;
    else if (a.paragraphCount < 3) { band -= 1.0; notes.push('The essay does not show a clear introduction/body/conclusion structure expected at Task 2.'); }
    if (a.conclusionMarkerCount > 0) band += 0.25;
    else notes.push('No concluding statement was detected - Task 2 essays should end by summarizing your position.');
  }

  return { band: clampBand(band), notes };
}

function scoreCoherenceCohesion(a, isTask1) {
  let band = 6.0;
  const notes = [];
  const minParagraphs = isTask1 ? 3 : 4;

  if (a.paragraphCount >= minParagraphs) band += 0.5;
  else { band -= 0.5; notes.push('Too few paragraphs for clear idea organization - each main idea should have its own paragraph.'); }

  if (a.linkerCategoryCount >= 4) band += 0.75;
  else if (a.linkerCategoryCount >= 2) band += 0.25;
  else { band -= 1.0; notes.push('Very few cohesive devices (linking words like "however", "in addition", "therefore") were used to connect ideas.'); }

  if (a.linkerOveruse) { band -= 0.5; notes.push('One linking word is used far more than any other - vary your cohesive devices rather than repeating the same one.'); }

  return { band: clampBand(band), notes };
}

function scoreLexicalResource(a) {
  let band = 6.0;
  const notes = [];

  if (a.ttr >= 0.55) band += 1.0;
  else if (a.ttr >= 0.45) band += 0.5;
  else if (a.ttr >= 0.35) { /* no change */ }
  else { band -= 1.0; notes.push('Vocabulary is quite repetitive - try to avoid reusing the same words and use synonyms where possible.'); }

  if (a.avgWordLength >= 4.8) band += 0.5;
  else if (a.avgWordLength < 4.0) { band -= 0.5; notes.push('Vocabulary skews toward short, everyday words - work in more precise/academic terms where natural.'); }

  if (a.informalWordCount === 0) band += 0.25;
  else if (a.informalWordCount <= 3) { band -= 0.25; notes.push('Some contractions or informal words were detected - avoid these in formal IELTS writing (e.g. "don\'t" -> "do not").'); }
  else { band -= 0.75; notes.push('Multiple contractions/informal words were detected - formal IELTS writing should avoid these throughout.'); }

  if (a.topWordFreqRatio > 0.06) { band -= 0.5; notes.push('One content word is repeated very frequently - consider varying your word choice.'); }

  return { band: clampBand(band), notes };
}

function scoreGrammar(a) {
  let band = 6.0;
  const notes = [];

  if (a.avgSentenceLength >= 12 && a.avgSentenceLength <= 25) band += 0.5;
  else if (a.avgSentenceLength < 8) { band -= 0.75; notes.push('Sentences are very short on average - try combining ideas using subordinate clauses ("although", "which", "because").'); }
  else if (a.avgSentenceLength > 32) { band -= 0.5; notes.push('Some sentences are extremely long, which increases the risk of run-on/comma-splice errors - consider breaking these up.'); }

  if (a.sentenceLengthStdDev >= 5) band += 0.5;
  else if (a.sentenceLengthStdDev < 2 && a.sentenceCount > 3) { band -= 0.5; notes.push('Little variation in sentence length or structure - mix short simple sentences with longer complex ones.'); }

  const complexRatio = a.sentenceCount ? a.complexMarkerCount / a.sentenceCount : 0;
  if (complexRatio >= 0.4) band += 0.75;
  else if (complexRatio >= 0.15) band += 0.25;
  else { band -= 0.75; notes.push('Few complex sentence structures were detected (e.g. clauses starting with "although", "which", "because") - a wider range of grammar improves this score.'); }

  return { band: clampBand(band), notes };
}

// Grades one task's essay text. Returns null if the text is empty/missing
// (nothing submitted for that task) rather than scoring an empty string.
function gradeTask(text, isTask1) {
  if (!text || !text.trim()) return null;
  const a = analyzeText(text);
  const taskAchievement = scoreTaskAchievement(a, isTask1);
  const coherenceCohesion = scoreCoherenceCohesion(a, isTask1);
  const lexicalResource = scoreLexicalResource(a);
  const grammaticalRange = scoreGrammar(a);
  const band = combineBands([taskAchievement.band, coherenceCohesion.band, lexicalResource.band, grammaticalRange.band]);

  return {
    band,
    wordCount: a.wordCount,
    criteria: {
      taskAchievement: taskAchievement.band,
      coherenceCohesion: coherenceCohesion.band,
      lexicalResource: lexicalResource.band,
      grammaticalRange: grammaticalRange.band,
    },
    notes: {
      taskAchievement: taskAchievement.notes,
      coherenceCohesion: coherenceCohesion.notes,
      lexicalResource: lexicalResource.notes,
      grammaticalRange: grammaticalRange.notes,
    },
  };
}

// Grades both tasks and combines into the overall Writing band using IELTS's
// real weighting: Task 2 counts for twice as much as Task 1.
function gradeWritingSubmission(writingTask1, writingTask2) {
  const task1 = gradeTask(writingTask1, true);
  const task2 = gradeTask(writingTask2, false);

  // Real IELTS weighting: Task 2 counts twice as much as Task 1 in the
  // combined Writing band.
  let overallBand = null;
  if (task1 && task2) overallBand = combineBands([task1.band, task2.band, task2.band]);
  else if (task2) overallBand = task2.band;
  else if (task1) overallBand = task1.band;

  return {
    task1, task2, overallBand,
    disclaimer: 'This is an automated, rule-based estimate (no AI/LLM involved) - it measures structure, vocabulary range, sentence complexity, and cohesive-device use against real IELTS Writing band descriptors. It cannot fully judge argument quality or catch every grammar error the way a human examiner can. A tutor can review and override this score at any time.',
  };
}

module.exports = { gradeWritingSubmission, analyzeText };
