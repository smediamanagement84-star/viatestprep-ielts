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

function cleanText(text) {
  if (!text) return '';
  let cleaned = text
    .replace(/<p\b[^>]*>/gi, '')
    .replace(/<\/p>/gi, '\n\n')
    .replace(/<br\s*\/?>/gi, '\n')
    .replace(/<[^>]+>/g, ' '); // Strip all other HTML tags
  
  // Replace HTML entities
  cleaned = cleaned
    .replace(/&nbsp;/gi, ' ')
    .replace(/&amp;/gi, '&')
    .replace(/&lt;/gi, '<')
    .replace(/&gt;/gi, '>')
    .replace(/&quot;/gi, '"');
    
  return cleaned;
}

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
  addition: ['moreover', 'furthermore', 'in addition', 'additionally', 'besides', 'coupled with', 'as well as', 'not only', 'but also'],
  contrast: ['however', 'nevertheless', 'nonetheless', 'on the other hand', 'in contrast', 'whereas', 'although', 'despite', 'conversely', 'by contrast', 'alternatively', 'on the contrary', 'in spite of'],
  cause_effect: ['therefore', 'thus', 'consequently', 'as a result', 'hence', 'as a consequence', 'owing to', 'due to', 'on account of', 'results in', 'leads to'],
  sequence: ['firstly', 'secondly', 'thirdly', 'finally', 'to begin with', 'subsequently', 'meanwhile', 'first of all', 'lastly'],
  example: ['for example', 'for instance', 'such as', 'namely', 'to illustrate', 'particularly', 'specifically'],
  summary: ['in conclusion', 'to conclude', 'overall', 'to summarize', 'to sum up', 'in summary'],
};
const ALL_LINKERS = Object.values(LINKERS).flat();

const OPINION_MARKERS = ['i believe', 'in my opinion', 'i think', 'i agree', 'i disagree', 'from my perspective', 'this essay will argue', 'this essay will discuss', 'it is my view', 'in my view', 'i would argue', 'from my point of view'];
const CONCLUSION_MARKERS = ['in conclusion', 'to conclude', 'to summarize', 'to sum up', 'overall,', 'in summary'];
const OVERVIEW_MARKERS = ['overall', 'in general', 'to summarize the data', 'the most striking feature', 'it is clear that', 'it is apparent that', 'manifestly', 'clearly'];
const DATA_VOCAB = ['percent', '%', 'proportion', 'majority', 'minority', 'figure', 'chart', 'graph', 'table', 'diagram', 'compared to', 'in comparison', 'whereas', 'similarly', 'likewise', 'by contrast', 'increase', 'decrease', 'rise', 'fall', 'fluctuate', 'peak', 'decline', 'grow', 'drop', 'surge', 'plummet', 'remain stable', 'level off'];
const INFORMAL_WORDS = ["don't", "can't", "won't", "isn't", "aren't", "wasn't", "weren't", "shouldn't", "wouldn't", "couldn't", "it's", "that's", "there's", "i'm", "we're", "they're", 'gonna', 'wanna', 'kinda', 'a lot of', 'lots of', 'stuff', 'thing', 'things', 'guy', 'guys', 'cliche', 'every coin has two sides', 'in a nutshell'];
const STOPWORDS = new Set(['the', 'a', 'an', 'and', 'or', 'but', 'is', 'are', 'was', 'were', 'be', 'been', 'to', 'of', 'in', 'on', 'at', 'for', 'with', 'as', 'by', 'that', 'this', 'it', 'its', 'i', 'we', 'they', 'he', 'she', 'you', 'their', 'his', 'her', 'my', 'our', 'your', 'not', 'no', 'do', 'does', 'did', 'has', 'have', 'had', 'will', 'would', 'can', 'could', 'should', 'may', 'might', 'from', 'into', 'than', 'so', 'if', 'because']);

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

// IELTS Academic Word List subset (AWL)
const ACADEMIC_WORDS = new Set([
  'analyse', 'analysis', 'approach', 'assess', 'assessment', 'assume', 'assumption', 'authority', 'benefit', 'concept', 
  'consistent', 'context', 'create', 'creation', 'data', 'definition', 'derive', 'distribute', 'distribution', 'economic', 
  'environment', 'establish', 'estimate', 'evident', 'evidence', 'factor', 'financial', 'formula', 'function', 'identify', 
  'income', 'indicate', 'indication', 'individual', 'interpret', 'interpretation', 'involve', 'issue', 'method', 'occur', 
  'occurrence', 'percent', 'percentage', 'period', 'policy', 'principle', 'procedure', 'process', 'require', 'requirement', 
  'research', 'respond', 'response', 'role', 'section', 'sector', 'significant', 'significance', 'similar', 'similarity', 
  'source', 'specific', 'structure', 'theory', 'variable', 'achieve', 'achievement', 'acquire', 'acquisition', 'administer', 
  'administration', 'affect', 'alternative', 'aspect', 'assist', 'assistance', 'category', 'chapter', 'commission', 'community', 
  'complex', 'complexity', 'compromise', 'conclude', 'conclusion', 'conduct', 'consequence', 'construct', 'construction', 
  'consumer', 'credit', 'culture', 'cultural', 'design', 'distinct', 'distinction', 'element', 'evaluate', 'evaluation', 
  'feature', 'final', 'focus', 'impact', 'invest', 'investment', 'maintenance', 'normal', 'obtain', 'participate', 
  'participation', 'perceive', 'perception', 'positive', 'potential', 'previous', 'primary', 'purchase', 'range', 'region', 
  'regulate', 'regulation', 'relevant', 'relevance', 'resource', 'restrict', 'restriction', 'secure', 'security', 'select', 
  'site', 'strategy', 'strategic', 'survey', 'text', 'tradition', 'traditional', 'transfer', 'circumstance', 'compensate', 
  'compensation', 'component', 'consent', 'considerable', 'constant', 'constrain', 'constraint', 'contribute', 'contribution', 
  'convene', 'convention', 'coordinate', 'coordination', 'core', 'corporate', 'correspond', 'corresponding', 'criteria', 
  'deduce', 'deduction', 'demonstrate', 'demonstration', 'document', 'dominate', 'emphasis', 'emphasise', 'ensure', 'exclude', 
  'framework', 'fund', 'illustrate', 'illustration', 'immigrate', 'immigration', 'imply', 'implication', 'initial', 'instance', 
  'integrate', 'integration', 'justify', 'justification', 'layer', 'link', 'locate', 'location', 'maximize', 'maximum', 
  'minority', 'negative', 'outcome', 'partner', 'partnership', 'philosophy', 'physical', 'proportion', 'publish', 'react', 
  'reaction', 'register', 'rely', 'reliance', 'remove', 'scheme', 'sequence', 'shift', 'specify', 'sufficient', 'task', 
  'technical', 'technique', 'technology', 'valid', 'validity', 'volume'
]);

// Common spelling errors in student essays
const COMMON_TYPOS = {
  'accomodate': 'accommodate', 'arguement': 'argument', 'beleive': 'believe', 'bussiness': 'business',
  'catagory': 'category', 'definately': 'definitely', 'enviroment': 'environment', 'existance': 'existence',
  'goverment': 'government', 'independant': 'independent', 'neccessary': 'necessary', 'recieve': 'receive',
  'seperate': 'separate', 'truely': 'truly', 'untill': 'until', 'wierd': 'weird', 'writting': 'writing',
  'writen': 'written', 'alot': 'a lot', 'begining': 'beginning', 'disapoint': 'disappoint',
  'embarass': 'embarrass', 'sucessfull': 'successful', 'publically': 'publicly', 'foward': 'forward'
};

function clampBand(x) {
  return Math.min(9.0, Math.max(4.0, Math.round(x * 2) / 2));
}

function analyzeText(text, isTask1) {
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
  const sampleForTtr = words.slice(0, 300);
  const ttr = sampleForTtr.length ? new Set(sampleForTtr).size / sampleForTtr.length : 0;
  const avgWordLength = words.length ? words.reduce((a, w) => a + w.length, 0) / words.length : 0;

  const contentWordFreq = {};
  words.forEach(w => { if (!STOPWORDS.has(w) && w.length > 3) contentWordFreq[w] = (contentWordFreq[w] || 0) + 1; });
  const topWordFreq = Object.values(contentWordFreq).sort((a, b) => b - a)[0] || 0;
  const topWordFreqRatio = words.length ? topWordFreq / words.length : 0;

  const linkerCategories = Object.entries(LINKERS).filter(([, phrases]) => countPhraseOccurrences(lower, phrases).total > 0).map(([cat]) => cat);
  const linkerHits = countPhraseOccurrences(lower, ALL_LINKERS);
  const informalHits = countPhraseOccurrences(lower, INFORMAL_WORDS);
  const opinionHits = countPhraseOccurrences(lower, OPINION_MARKERS);
  const conclusionHits = countPhraseOccurrences(lower, CONCLUSION_MARKERS);
  const overviewHits = countPhraseOccurrences(lower, OVERVIEW_MARKERS);
  const dataVocabHits = countPhraseOccurrences(lower, DATA_VOCAB);

  const overuseLinker = Object.entries(linkerHits.counts).sort((a, b) => b[1] - a[1])[0];
  const linkerOveruse = linkerHits.total >= 4 && overuseLinker && (overuseLinker[1] / linkerHits.total) > 0.35;

  // 1. Numerical references count (for Task 1)
  const numericHits = (text.match(/\b\d+(?:[\.,%]\d+)?\b/g) || []).length;

  // 2. Academic words count
  let academicCount = 0;
  uniqueWords.forEach(w => {
    if (ACADEMIC_WORDS.has(w)) {
      academicCount++;
    }
  });

  // 3. Typo/Spelling checking
  const detectedTypos = [];
  words.forEach(w => {
    if (COMMON_TYPOS[w]) {
      detectedTypos.push(`${w} -> should be ${COMMON_TYPOS[w]}`);
    }
  });

  // 4. Grammar checks
  const complexHits = countPhraseOccurrences(lower, ['although', 'because', 'since', 'while', 'if', 'unless', 'whereas', 'though', 'even though', 'as long as']);
  
  const passiveRegex = /\b(is|are|was|were|be|been|being)\b\s+(\w+ed|done|seen|made|taken|given|shown|written|chosen|eaten|kept|lost|built|held|spent|understood|found|brought|bought|taught|caught|drawn|grown)\b/gi;
  const passiveHits = (text.match(passiveRegex) || []).length;

  const relativeRegex = /\b(which|who|whom|whose|that)\b\s+(\w+)/gi;
  const relativeHits = (text.match(relativeRegex) || []).length;

  const conditionalHits = (text.match(/\b(if|unless|provided that)\b/gi) || []).length;

  const modalHits = (text.match(/\b(would|could|should|might|may|must)\b/gi) || []).length;

  const gerundSubjectHits = (text.match(/^[A-Z]\w+ing\b\s+(is|was|has|provides|shows|helps|enables)/m) || []).length;

  const lowercaseIHits = (text.match(/\bi\b/g) || []).length;
  
  const missingCapsHits = [];
  sentences.forEach(s => {
    const firstChar = s.replace(/[^a-zA-Z]/, '')[0];
    if (firstChar && firstChar === firstChar.toLowerCase()) {
      missingCapsHits.push(s);
    }
  });

  const doubleNegativeHits = (text.match(/\b(don't|doesn't|didn't|cannot|can't|won't)\b\s+(have|do|see|want)?\s+\b(no|nothing|nowhere|nobody)\b/gi) || []).length;
  
  const doubleWordHits = [];
  const doubleWordsRegex = /\b(the|a|an|and|or|but|so|in|on|at|to|of|for|with|is|are|was|were|be|been)\b\s+\1\b/gi;
  let match;
  while ((match = doubleWordsRegex.exec(lower)) !== null) {
    doubleWordHits.push(match[0]);
  }

  // Subject-Verb Agreement obvious errors
  const agreementErrors = [];
  const heSheItErrors = /\b(he|she|it)\b\s+\b(have|do|go|want|like|seem|think|know)\b/gi;
  let sMatch;
  while ((sMatch = heSheItErrors.exec(lower)) !== null) {
    agreementErrors.push(sMatch[0]);
  }
  const pluralErrors = /\b(they|we|you)\b\s+\b(has|does|goes|wants|likes|seems|thinks|knows)\b/gi;
  while ((sMatch = pluralErrors.exec(lower)) !== null) {
    agreementErrors.push(sMatch[0]);
  }
  const peopleIsErrors = /\bpeople\b\s+\b(is|was|has)\b/gi;
  while ((sMatch = peopleIsErrors.exec(lower)) !== null) {
    agreementErrors.push(sMatch[0]);
  }

  return {
    wordCount: words.length, sentenceCount: sentences.length, paragraphCount: paragraphs.length,
    paragraphs, avgSentenceLength, sentenceLengthStdDev, ttr, avgWordLength, topWordFreqRatio,
    linkerCategoryCount: linkerCategories.length, linkerTotal: linkerHits.total, linkerOveruse,
    informalWordCount: informalHits.total, opinionMarkerCount: opinionHits.total, 
    conclusionMarkerCount: conclusionHits.total, overviewMarkerCount: overviewHits.total, 
    dataVocabCount: Object.keys(dataVocabHits.counts).length,
    numericHits, academicCount, detectedTypos,
    grammarRange: {
      complexCount: complexHits.total,
      passiveCount: passiveHits,
      relativeCount: relativeHits,
      conditionalCount: conditionalHits,
      modalCount: modalHits,
      gerundSubjectCount: gerundSubjectHits
    },
    grammarErrors: {
      lowercaseI: lowercaseIHits,
      missingCaps: missingCapsHits.length,
      doubleNegatives: doubleNegativeHits,
      doubleWords: doubleWordHits.length,
      agreement: agreementErrors.length,
      agreementDetails: agreementErrors,
      doubleWordDetails: doubleWordHits
    }
  };
}

function scoreTaskAchievement(a, isTask1) {
  let band = 6.0;
  const notes = [];
  const minWords = isTask1 ? 150 : 250;
  const lowWords = isTask1 ? 120 : 220;

  if (a.wordCount >= minWords + 30) band += 1.0;
  else if (a.wordCount >= minWords) band += 0.5;
  else if (a.wordCount >= lowWords) { 
    band -= 0.5; 
    notes.push(`Under length: At ${a.wordCount} words, this response is below the required ${minWords} words.`); 
  } else { 
    band -= 1.5; 
    notes.push(`Severely under length: At ${a.wordCount} words, this is extremely short, which significantly limits your score.`); 
  }

  if (isTask1) {
    if (a.overviewMarkerCount > 0) band += 1.0;
    else { 
      band -= 1.0; 
      notes.push('No clear overview statement detected. A Task 1 response must present a summary of main trends, differences, or stages.'); 
    }
    if (a.numericHits >= 3) band += 0.5;
    else if (a.numericHits === 0) {
      band -= 1.5;
      notes.push('No specific data points (figures, percentages, numbers) were cited. You must support key descriptions with specific data.');
    } else {
      band -= 0.5;
      notes.push('Very few data points or numbers were cited to support your description.');
    }
  } else {
    // Task 2
    if (a.opinionMarkerCount > 0) band += 0.5;
    else {
      band -= 0.5;
      notes.push('No clear statement of opinion or position was detected in the introduction.');
    }
    if (a.paragraphCount >= 4) band += 0.5;
    else if (a.paragraphCount < 3) {
      band -= 1.0;
      notes.push('Lacks a standard essay paragraph structure (Introduction, 2 Body paragraphs, Conclusion).');
    }
    if (a.conclusionMarkerCount > 0) band += 0.5;
    else {
      band -= 0.5;
      notes.push('No clear concluding phrase was detected. A Task 2 essay must end with a clear summary conclusion.');
    }
  }

  return { band: clampBand(band), notes };
}

function scoreCoherenceCohesion(a, isTask1) {
  let band = 6.0;
  const notes = [];
  const minParagraphs = isTask1 ? 3 : 4;

  if (a.paragraphCount >= minParagraphs) band += 1.0;
  else { 
    band -= 0.5; 
    notes.push(`Poor paragraphing: Organising your ideas into distinct paragraphs (minimum ${minParagraphs}) is required for high Coherence & Cohesion.`); 
  }

  if (a.linkerCategoryCount >= 3 && a.linkerTotal >= 4) band += 0.5;
  else if (a.linkerTotal < 2) { 
    band -= 1.0; 
    notes.push('Very few cohesive devices or linking phrases were detected. Connect sentences using transitional words.'); 
  }

  if (a.linkerOveruse) { 
    band -= 0.5; 
    notes.push('Overuse of specific linking words. Ensure you vary cohesive devices.'); 
  }

  return { band: clampBand(band), notes };
}

function scoreLexicalResource(a) {
  let band = 6.0;
  const notes = [];

  if (a.ttr >= 0.45) band += 1.0;
  else if (a.ttr >= 0.35) band += 0.5;
  else if (a.ttr < 0.28) { 
    band -= 0.5; 
    notes.push('High repetition of vocabulary. Try to use synonyms and vary your word choice.'); 
  }

  const academicDensity = a.wordCount ? (a.academicCount / a.wordCount) * 100 : 0;
  if (academicDensity >= 4.0) band += 1.0;
  else if (academicDensity >= 2.0) band += 0.5;
  else {
    band -= 0.5;
    notes.push('Lacks formal or academic language. Try to use more advanced vocabulary.');
  }

  if (a.avgWordLength >= 4.3) band += 0.5;
  else if (a.avgWordLength < 3.8) { 
    band -= 0.5; 
    notes.push('Mainly simple, short vocabulary is used. Work in more precise or formal collocations.'); 
  }

  if (a.informalWordCount === 0) band += 0.25;
  else if (a.informalWordCount <= 2) { 
    band -= 0.25; 
    notes.push('A few informal words or contractions (e.g. "don\'t", "a lot of") were detected. Use full forms in formal writing.'); 
  } else { 
    band -= 0.75; 
    notes.push('Frequent informal vocabulary or contractions. IELTS writing demands an academic register.'); 
  }

  // Spelling penalty based on density (per 100 words)
  const typoRate = a.wordCount ? (a.detectedTypos.length / a.wordCount) * 100 : 0;
  if (typoRate > 0) {
    let penalty = 0;
    if (typoRate > 4.0) penalty = 1.5;
    else if (typoRate > 2.0) penalty = 1.0;
    else if (typoRate > 0.5) penalty = 0.5;
    band -= penalty;
    const uniqueTypos = [...new Set(a.detectedTypos)];
    notes.push(`Spelling errors detected: ${uniqueTypos.slice(0, 5).join(', ')}.`);
  } else {
    band += 0.25; // reward error-free spelling
  }

  return { band: clampBand(band), notes };
}

function scoreGrammar(a) {
  let band = 6.0;
  const notes = [];

  if (a.avgSentenceLength >= 10 && a.avgSentenceLength <= 28) band += 0.5;
  else if (a.avgSentenceLength < 8) { 
    band -= 0.5; 
    notes.push('Sentences are overly brief. Practice building compound and complex sentences.'); 
  }

  if (a.sentenceLengthStdDev >= 3.5) band += 0.5;

  let rangeScore = 0;
  if (a.grammarRange.complexCount > 0) rangeScore++;
  if (a.grammarRange.passiveCount > 0) rangeScore++;
  if (a.grammarRange.relativeCount > 0) rangeScore++;
  if (a.grammarRange.conditionalCount > 0) rangeScore++;
  if (a.grammarRange.modalCount > 0) rangeScore++;

  if (rangeScore >= 3) band += 0.75;
  else if (rangeScore === 2) band += 0.25;
  else {
    band -= 0.5;
    notes.push('Limited grammatical range. Try to incorporate a mix of relative clauses, conditional sentences, and passive constructions.');
  }

  let errorCount = 0;
  if (a.grammarErrors.lowercaseI > 0) errorCount += a.grammarErrors.lowercaseI;
  if (a.grammarErrors.missingCaps > 0) errorCount += a.grammarErrors.missingCaps;
  if (a.grammarErrors.doubleNegatives > 0) errorCount += a.grammarErrors.doubleNegatives;
  if (a.grammarErrors.doubleWords > 0) errorCount += a.grammarErrors.doubleWords;
  if (a.grammarErrors.agreement > 0) errorCount += a.grammarErrors.agreement;

  // Grammar accuracy penalty based on density (per 100 words)
  const errorRate = a.wordCount ? (errorCount / a.wordCount) * 100 : 0;
  if (errorRate > 0) {
    let penalty = 0;
    if (errorRate > 4.0) penalty = 1.5;
    else if (errorRate > 2.0) penalty = 1.0;
    else if (errorRate > 0.5) penalty = 0.5;
    band -= penalty;
    notes.push('Grammar errors detected. IELTS Band 7+ requires frequent error-free sentences.');
  } else if (a.sentenceCount >= 4) {
    band += 0.5; // reward high accuracy
  }

  return { band: clampBand(band), notes };
}

function gradeTask(text, isTask1) {
  if (!text || !text.trim()) return null;
  const cleaned = cleanText(text);
  const a = analyzeText(cleaned, isTask1);
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
