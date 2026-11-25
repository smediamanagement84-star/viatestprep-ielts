// Rule-based (non-AI) IELTS Writing scorer. No LLM/external API calls —
// every score and remark is computed from measurable text & prompt signals
// (word count, paragraph balance, cohesive-device variety/overuse, lexical
// repetition & upgrades, sentence complexity, grammar/punctuation hits, and
// prompt coverage/question-type alignment) mapped against the public IELTS
// Writing band descriptors: Task Achievement/Response, Coherence & Cohesion,
// Lexical Resource, and Grammatical Range & Accuracy.

function cleanText(text) {
  if (!text) return '';
  let cleaned = String(text)
    .replace(/<p\b[^>]*>/gi, '')
    .replace(/<\/p>/gi, '\n\n')
    .replace(/<br\s*\/?>/gi, '\n')
    .replace(/<[^>]+>/g, ' ');

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
    .split(/(?<=[.!?])\s+(?=[A-Z0-9"'(a-z])/)
    .map(s => s.trim())
    .filter(Boolean);
}

function splitParagraphs(text) {
  const byBlank = text
    .split(/\n\s*\n|\r\n\s*\r\n/)
    .map(p => p.trim())
    .filter(p => p.length > 0);
  if (byBlank.length >= 2) return byBlank;

  const bySingle = text
    .split(/\r?\n/)
    .map(p => p.trim())
    .filter(p => p.length > 0);
  return bySingle.length >= 2 ? bySingle : byBlank;
}

function countPhraseOccurrences(lowerText, phrases) {
  const counts = {};
  let total = 0;
  phrases.forEach(p => {
    const re = new RegExp(`\\b${p.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\b`, 'g');
    const m = lowerText.match(re);
    if (m) {
      counts[p] = m.length;
      total += m.length;
    }
  });
  return { total, counts };
}

const LINKERS = {
  addition: ['moreover', 'furthermore', 'in addition', 'additionally', 'besides', 'coupled with', 'as well as', 'not only', 'but also', 'what is more'],
  contrast: ['however', 'nevertheless', 'nonetheless', 'on the other hand', 'in contrast', 'whereas', 'although', 'despite', 'conversely', 'by contrast', 'alternatively', 'on the contrary', 'in spite of', 'even though'],
  cause_effect: ['therefore', 'thus', 'consequently', 'as a result', 'hence', 'as a consequence', 'owing to', 'due to', 'on account of', 'results in', 'leads to'],
  sequence: ['firstly', 'secondly', 'thirdly', 'finally', 'to begin with', 'subsequently', 'meanwhile', 'first of all', 'lastly'],
  example: ['for example', 'for instance', 'such as', 'namely', 'to illustrate', 'particularly', 'specifically'],
  summary: ['in conclusion', 'to conclude', 'overall', 'to summarize', 'to sum up', 'in summary'],
};
const ALL_LINKERS = Object.values(LINKERS).flat();

const LINKER_ALTERNATIVES = {
  moreover: 'in addition, furthermore, what is more',
  furthermore: 'in addition, moreover, equally importantly',
  however: 'nevertheless, conversely, on the other hand',
  therefore: 'consequently, thus, as a result',
  also: 'additionally, furthermore, as well',
  besides: 'in addition, furthermore, moreover',
  'for example': 'for instance, to illustrate, such as',
  'on the other hand': 'conversely, in contrast, nevertheless',
  'as a result': 'consequently, therefore, hence',
  firstly: 'to begin with, in the first place',
  secondly: 'furthermore, in addition to this',
};

const OPINION_MARKERS = [
  'i believe', 'in my opinion', 'i think', 'i agree', 'i disagree',
  'from my perspective', 'this essay will argue', 'this essay will discuss',
  'it is my view', 'in my view', 'i would argue', 'from my point of view',
  'i contend', 'i strongly believe', 'in my judgment'
];
const CONCLUSION_MARKERS = ['in conclusion', 'to conclude', 'to summarize', 'to sum up', 'overall,', 'in summary'];
const OVERVIEW_MARKERS = ['overall', 'in general', 'to summarize the data', 'the most striking feature', 'it is clear that', 'it is apparent that', 'manifestly', 'clearly', 'at a glance'];
const DATA_VOCAB = [
  'percent', '%', 'proportion', 'majority', 'minority', 'figure', 'chart', 'graph', 'table', 'diagram',
  'compared to', 'in comparison', 'whereas', 'similarly', 'likewise', 'by contrast', 'respectively',
  'increase', 'decrease', 'rise', 'fall', 'fluctuate', 'peak', 'decline', 'grow', 'drop', 'surge',
  'plummet', 'remain stable', 'level off', 'higher than', 'lower than', 'twice as', 'overtake'
];
const COMPARISON_VOCAB = [
  'compared to', 'in comparison', 'whereas', 'while', 'by contrast', 'conversely',
  'higher than', 'lower than', 'more than', 'less than', 'greater than',
  'twice as', 'respectively', 'outnumbered', 'exceeded', 'similarly', 'likewise'
];
const EVIDENCE_MARKERS = [
  'for example', 'for instance', 'such as', 'to illustrate', 'research', 'studies',
  'evidence', 'statistics', 'survey', 'according to', 'this means', 'consequently', 'as a result'
];

const INFORMAL_REPLACEMENTS = {
  "don't": 'do not', "can't": 'cannot', "won't": 'will not', "isn't": 'is not',
  "aren't": 'are not', "wasn't": 'was not', "weren't": 'were not',
  "shouldn't": 'should not', "wouldn't": 'would not', "couldn't": 'could not',
  "it's": 'it is', "that's": 'that is', "there's": 'there is',
  "i'm": 'I am', "we're": 'we are', "they're": 'they are',
  gonna: 'going to', wanna: 'want to', kinda: 'somewhat',
  'a lot of': 'numerous / a considerable number of',
  'lots of': 'a substantial amount of',
  stuff: 'items / aspects',
  thing: 'factor / issue',
  things: 'factors / aspects',
  guy: 'person / individual',
  guys: 'individuals',
  'every coin has two sides': 'this issue has both merits and drawbacks',
  'in a nutshell': 'in summary',
};
const INFORMAL_WORDS = Object.keys(INFORMAL_REPLACEMENTS);

const WEAK_PHRASE_UPGRADES = {
  'nowadays': 'in contemporary society / in recent decades',
  'now a days': 'in contemporary society',
  'more and more': 'an increasing number of / increasingly',
  'pros and cons': 'advantages and drawbacks / merits and limitations',
  'last but not least': 'finally / an equally significant point is',
  'very good': 'highly beneficial / advantageous / effective',
  'very bad': 'severely detrimental / harmful / counterproductive',
  'very important': 'crucial / paramount / indispensable',
  'big problem': 'pressing issue / major challenge',
  'in my opinion i think': 'I believe / in my view (avoid doubling both)',
  'all in all': 'in conclusion / on balance',
};

const WORD_UPGRADES = {
  important: ['crucial', 'paramount', 'vital', 'essential'],
  good: ['beneficial', 'advantageous', 'effective', 'positive'],
  bad: ['detrimental', 'harmful', 'adverse', 'counterproductive'],
  big: ['substantial', 'significant', 'considerable', 'major'],
  small: ['minimal', 'marginal', 'modest', 'limited'],
  people: ['individuals', 'citizens', 'members of society', 'the public'],
  problem: ['issue', 'challenge', 'obstacle', 'concern'],
  problems: ['issues', 'challenges', 'difficulties', 'drawbacks'],
  help: ['facilitate', 'assist', 'support', 'enable'],
  helps: ['facilitates', 'supports', 'enables', 'fosters'],
  use: ['utilize', 'adopt', 'employ', 'apply'],
  many: ['numerous', 'a wide range of', 'countless'],
  very: ['highly', 'remarkably', 'considerably', 'exceptionally'],
  think: ['argue', 'contend', 'maintain', 'believe'],
  get: ['obtain', 'acquire', 'gain', 'achieve'],
  make: ['generate', 'create', 'foster', 'produce'],
  show: ['demonstrate', 'illustrate', 'indicate', 'reveal'],
  shows: ['demonstrates', 'illustrates', 'indicates', 'highlights'],
  change: ['transform', 'shift', 'alter', 'modify'],
  improve: ['enhance', 'strengthen', 'elevate', 'advance'],
  increase: ['escalate', 'surge', 'expand', 'rise'],
  decrease: ['decline', 'diminish', 'curb', 'reduce'],
  society: ['the community', 'the general public', 'modern society'],
  government: ['authorities', 'policymakers', 'the state'],
  governments: ['authorities', 'policymakers', 'national leaders'],
  children: ['youths', 'adolescents', 'young learners'],
  students: ['learners', 'undergraduates', 'pupils'],
  money: ['financial resources', 'funding', 'capital'],
  job: ['employment', 'career', 'occupation'],
  jobs: ['employment opportunities', 'careers', 'occupations'],
  technology: ['digital innovation', 'automation', 'modern tools'],
  country: ['nation', 'state', 'region'],
  countries: ['nations', 'states', 'economies'],
  work: ['employment', 'labour', 'professional duties'],
  learn: ['acquire', 'master', 'develop'],
  world: ['globe', 'international community', 'modern era'],
};

const STOPWORDS = new Set([
  'the', 'a', 'an', 'and', 'or', 'but', 'is', 'are', 'was', 'were', 'be', 'been', 'being',
  'to', 'of', 'in', 'on', 'at', 'for', 'with', 'as', 'by', 'that', 'this', 'these', 'those',
  'it', 'its', 'i', 'we', 'they', 'he', 'she', 'you', 'their', 'his', 'her', 'my', 'our', 'your',
  'not', 'no', 'do', 'does', 'did', 'has', 'have', 'had', 'will', 'would', 'can', 'could',
  'should', 'may', 'might', 'must', 'from', 'into', 'than', 'so', 'if', 'because', 'which',
  'who', 'whom', 'what', 'when', 'where', 'while', 'also', 'more', 'most', 'some', 'many',
  'such', 'only', 'very', 'there', 'here', 'about', 'other', 'each', 'them', 'then', 'over',
]);

const PROMPT_STOPWORDS = new Set([
  ...STOPWORDS,
  'people', 'believe', 'think', 'argue', 'agree', 'disagree', 'extent', 'discuss',
  'both', 'views', 'give', 'opinion', 'advantages', 'disadvantages', 'outweigh',
  'causes', 'problems', 'solutions', 'reasons', 'measures', 'nowadays', 'modern',
  'society', 'write', 'topic', 'essay', 'following', 'whether', 'better', 'best',
  'make', 'made', 'take', 'become', 'often', 'every', 'always', 'never', 'chart',
  'graph', 'table', 'diagram', 'shows', 'information', 'summarise', 'summarize',
  'main', 'features', 'comparisons', 'relevant', 'below', 'given', 'percent', 'percentage',
]);

function clampBand(x) {
  return Math.min(9.0, Math.max(4.0, Math.round(x * 2) / 2));
}

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
  'technical', 'technique', 'technology', 'valid', 'validity', 'volume', 'substantial', 'inevitable', 'fundamental',
  'paramount', 'mitigate', 'exacerbate', 'advocate', 'indispensable', 'profound', 'allocation', 'phenomenon', 'imperative',
  'detrimental', 'prevalent', 'implementation', 'predominantly', 'subsequently', 'conducive', 'unprecedented', 'facilitate',
  'undermine', 'alleviate', 'perpetuate', 'contentious', 'viable', 'socioeconomic', 'crucial', 'beneficial', 'essential'
]);

const COMMON_TYPOS = {
  accomodate: 'accommodate', arguement: 'argument', beleive: 'believe', bussiness: 'business',
  catagory: 'category', definately: 'definitely', enviroment: 'environment', existance: 'existence',
  goverment: 'government', independant: 'independent', neccessary: 'necessary', recieve: 'receive',
  seperate: 'separate', truely: 'truly', untill: 'until', wierd: 'weird', writting: 'writing',
  writen: 'written', alot: 'a lot', begining: 'beginning', disapoint: 'disappoint',
  embarass: 'embarrass', sucessfull: 'successful', publically: 'publicly', foward: 'forward',
  occured: 'occurred', teh: 'the', becuase: 'because', thier: 'their', wich: 'which',
  pepole: 'people', studnet: 'student', knowlege: 'knowledge', develope: 'develop'
};

function detectPromptType(promptText, explicitType) {
  const hint = String(explicitType || '').toLowerCase();
  const lower = String(promptText || '').toLowerCase();
  if (hint.includes('discuss') || hint.includes('both') || /discuss both|both views/.test(lower)) return 'discussion';
  if (hint.includes('advantage') || hint.includes('outweigh') || /advantages.*disadvantages|outweigh/.test(lower)) return 'advantage';
  if (hint.includes('problem') || hint.includes('solution') || hint.includes('cause') || /causes.*solutions|problems.*solutions|measures.*taken|solve this/.test(lower)) return 'problem_solution';
  if (hint.includes('two') || hint.includes('direct') || (lower.match(/\?/g) || []).length >= 2) return 'two_part';
  if (hint.includes('opinion') || hint.includes('agree') || /agree or disagree|to what extent/.test(lower)) return 'opinion';
  return 'general';
}

function extractPromptKeywords(promptText) {
  if (!promptText) return [];
  const words = tokenizeWords(String(promptText)).filter(w => w.length >= 4 && !PROMPT_STOPWORDS.has(w));
  return [...new Set(words)].slice(0, 14);
}

function analyzePromptAlignment(lowerText, words, promptText, isTask1, promptTypeHint) {
  if (!promptText || !String(promptText).trim()) return null;

  const keywords = extractPromptKeywords(promptText);
  const wordSet = new Set(words);
  const matchedKeywords = [];
  const missedKeywords = [];

  keywords.forEach(kw => {
    const stem = kw.length >= 6 ? kw.slice(0, kw.length - 2) : kw.slice(0, Math.max(4, kw.length - 1));
    const hit = wordSet.has(kw) || words.some(w => w.startsWith(stem));
    if (hit) matchedKeywords.push(kw);
    else missedKeywords.push(kw);
  });

  const coverageRatio = keywords.length ? matchedKeywords.length / keywords.length : 1;
  const detectedType = isTask1 ? 'task1' : detectPromptType(promptText, promptTypeHint);

  let typeFeedback = null;
  if (!isTask1) {
    if (detectedType === 'discussion') {
      const hasBothSides = /\b(on the other hand|conversely|in contrast|whereas|while|others argue|other people|supporters|opponents)\b/i.test(lowerText);
      const hasOpinion = OPINION_MARKERS.some(m => lowerText.includes(m));
      if (!hasBothSides) {
        typeFeedback = 'This is a "Discuss Both Views" prompt, yet only one viewpoint is clearly signaled. Use contrast markers (e.g., "On the other hand...", "Others contend that...") to present the opposing view.';
      } else if (!hasOpinion) {
        typeFeedback = 'You discussed differing views, but the prompt also asks for YOUR opinion — state your stance explicitly in the introduction and conclusion.';
      }
    } else if (detectedType === 'advantage') {
      const hasPros = /\b(advantage|advantages|benefit|benefits|merit|merits|positive|beneficial)\b/i.test(lowerText);
      const hasCons = /\b(disadvantage|disadvantages|drawback|drawbacks|risk|risks|negative|limitation|downside)\b/i.test(lowerText);
      if (!hasPros || !hasCons) {
        typeFeedback = !hasPros && !hasCons
          ? 'This Advantages/Disadvantages prompt requires explicitly weighing both benefits and drawbacks.'
          : !hasCons
            ? 'You covered positive points, but missed clear discussion of disadvantages/drawbacks as asked by the prompt.'
            : 'You covered drawbacks, but missed clear discussion of advantages/benefits as asked by the prompt.';
      }
    } else if (detectedType === 'problem_solution') {
      const hasCausesOrProblems = /\b(cause|causes|reason|reasons|problem|problems|issue|factor|leads to|result of|due to)\b/i.test(lowerText);
      const hasSolutions = /\b(solution|solutions|measure|measures|solve|tackle|address|policy|policies|government should|authorities should|step|steps)\b/i.test(lowerText);
      if (!hasCausesOrProblems || !hasSolutions) {
        typeFeedback = !hasSolutions
          ? 'This Problem/Solution prompt asks for solutions or measures, which are not clearly signaled — dedicate a body paragraph to concrete actions.'
          : 'This Problem/Solution prompt asks you to explain the causes/problems clearly before presenting solutions.';
      }
    }
  } else {
    // Task 1 timeframe / unit check from prompt
    const promptYears = (String(promptText).match(/\b(?:19|20)\d{2}\b/g) || []);
    const uniqueYears = [...new Set(promptYears)];
    const missedYears = uniqueYears.filter(y => !lowerText.includes(y));
    if (uniqueYears.length > 0 && missedYears.length === uniqueYears.length) {
      typeFeedback = `The Task 1 prompt specifies timeframe (${uniqueYears.join(', ')}), which was not referenced in your report.`;
    }
  }

  return {
    keywords,
    matchedKeywords,
    missedKeywords,
    coverageRatio,
    detectedType,
    typeFeedback,
  };
}

function analyzeText(text, isTask1, promptText = '', promptTypeHint = '') {
  const words = tokenizeWords(text);
  const sentences = splitSentences(text);
  const paragraphs = splitParagraphs(text);
  const lower = text.toLowerCase();

  const paragraphWordCounts = paragraphs.map(p => tokenizeWords(p).length);
  const sentenceLengths = sentences.map(s => tokenizeWords(s).length).filter(n => n > 0);
  const avgSentenceLength = sentenceLengths.length ? sentenceLengths.reduce((a, b) => a + b, 0) / sentenceLengths.length : 0;
  const sentenceLengthStdDev = sentenceLengths.length > 1
    ? Math.sqrt(sentenceLengths.reduce((a, b) => a + Math.pow(b - avgSentenceLength, 2), 0) / sentenceLengths.length)
    : 0;

  const uniqueWords = new Set(words);
  const sampleForTtr = words.slice(0, 300);
  const ttr = sampleForTtr.length ? new Set(sampleForTtr).size / sampleForTtr.length : 0;
  const avgWordLength = words.length ? words.reduce((a, w) => a + w.length, 0) / words.length : 0;

  // Content word repetition with exact top repeated words
  const contentWordFreq = {};
  words.forEach(w => {
    if (!STOPWORDS.has(w) && w.length > 3) contentWordFreq[w] = (contentWordFreq[w] || 0) + 1;
  });
  const sortedRepeats = Object.entries(contentWordFreq).sort((a, b) => b[1] - a[1]);
  const topWordFreq = sortedRepeats[0] ? sortedRepeats[0][1] : 0;
  const topWordFreqRatio = words.length ? topWordFreq / words.length : 0;

  const minRepeatCount = isTask1 ? 4 : 4;
  const repeatedWords = sortedRepeats
    .filter(([w, cnt]) => cnt >= minRepeatCount && (cnt / Math.max(words.length, 1)) >= 0.015)
    .slice(0, 3)
    .map(([word, count]) => ({
      word,
      count,
      suggestions: WORD_UPGRADES[word] || null,
    }));

  // Linkers + missing categories
  const linkerCategoriesPresent = [];
  const missingLinkerCategories = [];
  Object.entries(LINKERS).forEach(([cat, phrases]) => {
    if (cat === 'summary') return;
    if (countPhraseOccurrences(lower, phrases).total > 0) linkerCategoriesPresent.push(cat);
    else missingLinkerCategories.push(cat);
  });

  const linkerHits = countPhraseOccurrences(lower, ALL_LINKERS);
  const informalHits = countPhraseOccurrences(lower, INFORMAL_WORDS);
  const weakPhraseHits = countPhraseOccurrences(lower, Object.keys(WEAK_PHRASE_UPGRADES));
  const opinionHits = countPhraseOccurrences(lower, OPINION_MARKERS);
  const conclusionHits = countPhraseOccurrences(lower, CONCLUSION_MARKERS);
  const overviewHits = countPhraseOccurrences(lower, OVERVIEW_MARKERS);
  const dataVocabHits = countPhraseOccurrences(lower, DATA_VOCAB);
  const comparisonHits = countPhraseOccurrences(lower, COMPARISON_VOCAB);
  const evidenceHits = countPhraseOccurrences(lower, EVIDENCE_MARKERS);

  const overuseLinker = Object.entries(linkerHits.counts).sort((a, b) => b[1] - a[1])[0];
  const linkerOveruse = Boolean(
    overuseLinker &&
    ((linkerHits.total >= 4 && (overuseLinker[1] / linkerHits.total) > 0.35) || overuseLinker[1] >= 4)
  );

  // Body paragraph development check
  const shortBodyParagraphs = [];
  if (paragraphs.length >= 3) {
    const bodyEnd = paragraphs.length >= 4 ? paragraphs.length - 1 : paragraphs.length;
    for (let i = 1; i < bodyEnd; i++) {
      if (paragraphWordCounts[i] < (isTask1 ? 35 : 45)) {
        shortBodyParagraphs.push({ index: i + 1, words: paragraphWordCounts[i] });
      }
    }
  }

  // Numerical references count (for Task 1)
  const numericHits = (text.match(/\b\d+(?:[\.,%]\d+)?\b/g) || []).length;

  // Academic words count + exact list found
  const academicWordsFound = [];
  uniqueWords.forEach(w => {
    if (ACADEMIC_WORDS.has(w)) academicWordsFound.push(w);
  });
  const academicCount = academicWordsFound.length;

  // Typo/Spelling checking
  const detectedTypos = [];
  words.forEach(w => {
    if (COMMON_TYPOS[w]) {
      detectedTypos.push(`"${w}" → "${COMMON_TYPOS[w]}"`);
    }
  });

  // Grammar range checks
  const complexHits = countPhraseOccurrences(lower, ['although', 'because', 'since', 'while', 'if', 'unless', 'whereas', 'though', 'even though', 'as long as']);
  const passiveRegex = /\b(is|are|was|were|be|been|being)\b\s+(\w+ed|done|seen|made|taken|given|shown|written|chosen|eaten|kept|lost|built|held|spent|understood|found|brought|bought|taught|caught|drawn|grown)\b/gi;
  const passiveMatches = text.match(passiveRegex) || [];
  const relativeRegex = /\b(which|who|whom|whose)\b\s+(\w+)/gi;
  const relativeMatches = text.match(relativeRegex) || [];
  const conditionalHits = (text.match(/\b(if|unless|provided that)\b/gi) || []).length;
  const modalHits = (text.match(/\b(would|could|should|might|may|must)\b/gi) || []).length;
  const gerundSubjectHits = (text.match(/^[A-Z]\w+ing\b\s+(is|was|has|provides|shows|helps|enables)/m) || []).length;

  // Specific grammar & punctuation errors
  const lowercaseIHits = (text.match(/\bi\b/g) || []).length;
  const missingCapsHits = [];
  sentences.forEach(s => {
    const firstChar = s.replace(/[^a-zA-Z]/, '')[0];
    if (firstChar && firstChar === firstChar.toLowerCase()) {
      missingCapsHits.push(s.split(/\s+/).slice(0, 4).join(' '));
    }
  });

  const doubleNegativeHits = (text.match(/\b(don't|doesn't|didn't|cannot|can't|won't)\b\s+(have|do|see|want)?\s+\b(no|nothing|nowhere|nobody)\b/gi) || []).length;

  const doubleWordHits = [];
  const doubleWordsRegex = /\b(the|a|an|and|or|but|so|in|on|at|to|of|for|with|is|are|was|were|be|been)\b\s+\1\b/gi;
  let match;
  while ((match = doubleWordsRegex.exec(lower)) !== null) {
    doubleWordHits.push(match[0]);
  }

  // Comma splices before conjunctive adverbs (", however,", ", therefore,", ", moreover,", ", furthermore,")
  const commaSpliceRegex = /[a-z0-9]\s*,\s*(however|therefore|moreover|furthermore|consequently|nevertheless)\s*,/gi;
  const commaSpliceDetails = [];
  while ((match = commaSpliceRegex.exec(text)) !== null) {
    commaSpliceDetails.push(match[1].toLowerCase());
  }

  // Overly long run-on sentences (> 38 words)
  const longRunOnSentences = sentences
    .filter(s => tokenizeWords(s).length > 38)
    .slice(0, 2)
    .map(s => ({
      words: tokenizeWords(s).length,
      preview: s.split(/\s+/).slice(0, 6).join(' ') + '...',
    }));

  // Subject-Verb Agreement obvious errors
  const agreementErrors = [];
  const heSheItErrors = /\b(he|she|it)\b\s+\b(have|do|go|want|like|seem|think|know)\b/gi;
  let sMatch;
  while ((sMatch = heSheItErrors.exec(lower)) !== null) agreementErrors.push(sMatch[0]);
  const pluralErrors = /\b(they|we|you)\b\s+\b(has|does|goes|wants|likes|seems|thinks|knows)\b/gi;
  while ((sMatch = pluralErrors.exec(lower)) !== null) agreementErrors.push(sMatch[0]);
  const peopleIsErrors = /\bpeople\b\s+\b(is|was|has)\b/gi;
  while ((sMatch = peopleIsErrors.exec(lower)) !== null) agreementErrors.push(sMatch[0]);

  const promptAlignment = analyzePromptAlignment(lower, words, promptText, isTask1, promptTypeHint);

  return {
    wordCount: words.length,
    sentenceCount: sentences.length,
    paragraphCount: paragraphs.length,
    paragraphs,
    paragraphWordCounts,
    shortBodyParagraphs,
    avgSentenceLength,
    sentenceLengthStdDev,
    ttr,
    avgWordLength,
    topWordFreqRatio,
    repeatedWords,
    linkerCategoryCount: linkerCategoriesPresent.length,
    linkerCategoriesPresent,
    missingLinkerCategories,
    linkerTotal: linkerHits.total,
    linkerOveruse,
    overuseLinker,
    informalWordCount: informalHits.total,
    informalWordsFound: Object.keys(informalHits.counts),
    weakPhrasesFound: Object.keys(weakPhraseHits.counts),
    opinionMarkerCount: opinionHits.total,
    conclusionMarkerCount: conclusionHits.total,
    overviewMarkerCount: overviewHits.total,
    dataVocabCount: Object.keys(dataVocabHits.counts).length,
    comparisonVocabCount: Object.keys(comparisonHits.counts).length,
    evidenceMarkerCount: evidenceHits.total,
    numericHits,
    academicCount,
    academicWordsFound,
    detectedTypos,
    promptAlignment,
    grammarRange: {
      complexCount: complexHits.total,
      complexWordsFound: Object.keys(complexHits.counts),
      passiveCount: passiveMatches.length,
      passiveExamples: passiveMatches.slice(0, 2),
      relativeCount: relativeMatches.length,
      conditionalCount: conditionalHits,
      modalCount: modalHits,
      gerundSubjectCount: gerundSubjectHits,
    },
    grammarErrors: {
      lowercaseI: lowercaseIHits,
      missingCaps: missingCapsHits.length,
      missingCapsDetails: missingCapsHits.slice(0, 2),
      doubleNegatives: doubleNegativeHits,
      doubleWords: doubleWordHits.length,
      doubleWordDetails: [...new Set(doubleWordHits)].slice(0, 3),
      commaSplices: commaSpliceDetails.length,
      commaSpliceDetails: [...new Set(commaSpliceDetails)].slice(0, 3),
      longRunOnSentences,
      agreement: agreementErrors.length,
      agreementDetails: [...new Set(agreementErrors)].slice(0, 3),
    },
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
    const shortBy = minWords - a.wordCount;
    notes.push(`Under length: at ${a.wordCount} words, you are ${shortBy} word${shortBy === 1 ? '' : 's'} short of the ${minWords}-word minimum.`);
  } else {
    band -= 1.5;
    notes.push(`Severely under length: at ${a.wordCount} words (minimum ${minWords}), your ideas are too brief to reach Band 6.0+ in ${isTask1 ? 'Task Achievement' : 'Task Response'}.`);
  }

  if (isTask1) {
    if (a.overviewMarkerCount > 0) band += 1.0;
    else {
      band -= 1.0;
      notes.push('No clear overview statement detected — add a short paragraph starting with "Overall," summarizing the main trend or key differences without listing every figure.');
    }

    if (a.numericHits >= 3) band += 0.5;
    else if (a.numericHits === 0) {
      band -= 1.5;
      notes.push('No specific figures, percentages, or numbers were cited — back up your main trends with exact data from the prompt.');
    } else {
      band -= 0.5;
      notes.push(`Only ${a.numericHits} numerical reference${a.numericHits === 1 ? '' : 's'} detected — include at least 3–5 key figures to support comparisons.`);
    }

    if (a.comparisonVocabCount === 0 && a.wordCount >= 80) {
      band -= 0.25;
      notes.push('Missing comparison language — use terms like "compared to", "whereas", "higher than", or "respectively" to contrast categories.');
    }
  } else {
    if (a.opinionMarkerCount > 0) band += 0.5;
    else {
      band -= 0.5;
      notes.push('Your position is not explicitly stated — add a clear thesis in the introduction (e.g., "I strongly agree that..." or "This essay will argue that...").');
    }

    if (a.paragraphCount >= 4) band += 0.5;
    else if (a.paragraphCount < 3) {
      band -= 1.0;
      notes.push(`Only ${a.paragraphCount} paragraph${a.paragraphCount === 1 ? '' : 's'} detected — divide your essay into 4 clear paragraphs (Introduction, Body 1, Body 2, Conclusion).`);
    }

    if (a.conclusionMarkerCount > 0) band += 0.5;
    else {
      band -= 0.5;
      notes.push('No clear conclusion signal detected — finish with a dedicated closing paragraph starting with "In conclusion," or "To summarize," that restates your position.');
    }

    if (a.evidenceMarkerCount === 0 && a.wordCount >= 140) {
      band -= 0.25;
      notes.push('No explicit supporting examples detected — illustrate each body point using "for example", "for instance", or "such as".');
    }
  }

  if (a.shortBodyParagraphs.length > 0) {
    const first = a.shortBodyParagraphs[0];
    notes.push(`Paragraph ${first.index} is underdeveloped (${first.words} words) — expand it with an explanation and a concrete example.`);
  }

  if (a.promptAlignment) {
    const pa = a.promptAlignment;
    if (pa.keywords.length >= 3) {
      if (pa.coverageRatio >= 0.45) band += 0.25;
      else if (pa.coverageRatio < 0.2) {
        band -= 0.75;
        notes.push(`Low overlap with the prompt topic — key prompt concepts (${pa.missedKeywords.slice(0, 4).join(', ')}) were not clearly addressed.`);
      } else if (pa.missedKeywords.length >= 2) {
        notes.push(`Prompt concepts like "${pa.missedKeywords.slice(0, 3).join('", "')}" were barely mentioned — make sure every part of the question is directly answered.`);
      }
    }
    if (pa.typeFeedback) {
      band -= 0.25;
      notes.push(pa.typeFeedback);
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
    notes.push(`Paragraphing needs improvement (${a.paragraphCount} detected, ${minParagraphs}+ recommended) — separate each main idea into its own paragraph.`);
  }

  if (a.paragraphWordCounts.length >= 4) {
    const bodyCounts = a.paragraphWordCounts.slice(1, -1);
    const maxB = Math.max(...bodyCounts);
    const minB = Math.min(...bodyCounts);
    if (maxB >= minB * 2.2 && minB < 50 && a.wordCount >= 180) {
      notes.push(`Uneven body paragraph balance (${a.paragraphWordCounts.join(' / ')} words) — aim for balanced body paragraphs of ~80–110 words each.`);
    }
  } else if (a.paragraphWordCounts.length === 3) {
    const maxP = Math.max(...a.paragraphWordCounts);
    const minP = Math.min(...a.paragraphWordCounts);
    if (maxP > minP * 3 && minP < 35 && a.wordCount >= 180) {
      notes.push(`Uneven paragraph balance (${a.paragraphWordCounts.join(' / ')} words) — aim for balanced body paragraphs of ~80–110 words each.`);
    }
  }

  if (a.linkerCategoryCount >= 3 && a.linkerTotal >= 4) band += 0.5;
  else if (a.linkerTotal < 2) {
    band -= 1.0;
    notes.push(`Only ${a.linkerTotal} linking phrase${a.linkerTotal === 1 ? '' : 's'} detected — connect ideas smoothly using contrast ("however"), addition ("moreover"), and result ("consequently") markers.`);
  } else if (a.missingLinkerCategories.length >= 3) {
    const catNames = { addition: 'addition ("furthermore")', contrast: 'contrast ("however")', cause_effect: 'cause/effect ("consequently")', example: 'examples ("for instance")' };
    const missing = a.missingLinkerCategories.slice(0, 2).map(c => catNames[c]).filter(Boolean);
    if (missing.length) {
      notes.push(`Limited variety of transitions — try adding ${missing.join(' and ')} links between sentences.`);
    }
  }

  if (a.linkerOveruse && a.overuseLinker) {
    band -= 0.5;
    const [word, count] = a.overuseLinker;
    const alts = LINKER_ALTERNATIVES[word] || 'varied synonyms like "nevertheless", "moreover", or "consequently"';
    notes.push(`You used "${word}" ${count} times (${Math.round((count / Math.max(a.linkerTotal, 1)) * 100)}% of your transitions) — swap some instances for ${alts}.`);
  }

  return { band: clampBand(band), notes };
}

function scoreLexicalResource(a, isTask1) {
  let band = 6.0;
  const notes = [];
  const enoughLengthForTtr = a.wordCount >= (isTask1 ? 100 : 150);

  if (enoughLengthForTtr && a.ttr >= 0.45) band += 1.0;
  else if (enoughLengthForTtr && a.ttr >= 0.35) band += 0.5;
  else if (a.ttr < 0.28) {
    band -= 0.5;
    notes.push(`Vocabulary variety is low (${Math.round(a.ttr * 100)}% unique words) — paraphrase key nouns and verbs instead of repeating them.`);
  }

  if (a.repeatedWords.length > 0) {
    band -= Math.min(0.75, a.repeatedWords.length * 0.5);
    const firstRep = a.repeatedWords[0];
    const swapTip = firstRep.suggestions
      ? ` — try alternatives like ${firstRep.suggestions.slice(0, 3).map(s => `"${s}"`).join(', ')}`
      : ' — replace repeated occurrences with synonyms or pronouns';
    notes.push(`Word repetition: you used "${firstRep.word}" ${firstRep.count} times${swapTip}.`);
  }

  const academicDensity = a.wordCount ? (a.academicCount / a.wordCount) * 100 : 0;
  if (academicDensity >= 4.0) band += 1.0;
  else if (academicDensity >= 2.0) band += 0.5;
  else {
    band -= 0.5;
    notes.push(`Only ${a.academicCount} academic vocabulary word${a.academicCount === 1 ? '' : 's'} detected (${academicDensity.toFixed(1)}% density) — aim to upgrade everyday words into precise academic collocations.`);
  }

  if (enoughLengthForTtr && a.avgWordLength >= 4.3) band += 0.5;
  else if (a.avgWordLength < 3.8) {
    band -= 0.5;
    notes.push(`Average word length is short (${a.avgWordLength.toFixed(1)} letters) — replace basic adjectives/verbs with more precise terminology.`);
  }

  if (a.informalWordCount === 0) {
    if (enoughLengthForTtr) band += 0.25;
  } else {
    const sampleInformal = a.informalWordsFound.slice(0, 3).map(w => `"${w}" → "${INFORMAL_REPLACEMENTS[w] || 'formal equivalent'}"`);
    if (a.informalWordCount <= 2) {
      band -= 0.25;
      notes.push(`Informal phrasing detected (${sampleInformal.join(', ')}) — use full formal expressions in IELTS Writing.`);
    } else {
      band -= 0.75;
      notes.push(`Frequent informal vocabulary/contractions (${sampleInformal.join(', ')}) — academic IELTS requires an objective, formal register.`);
    }
  }

  if (a.weakPhrasesFound.length > 0) {
    band -= Math.min(0.5, a.weakPhrasesFound.length * 0.25);
    const sampleWeak = a.weakPhrasesFound.slice(0, 2).map(p => `"${p}" → "${WEAK_PHRASE_UPGRADES[p]}"`);
    notes.push(`Overused / low-band phrase${a.weakPhrasesFound.length > 1 ? 's' : ''} spotted: ${sampleWeak.join('; ')}.`);
  }

  const typoRate = a.wordCount ? (a.detectedTypos.length / a.wordCount) * 100 : 0;
  if (typoRate > 0) {
    let penalty = 0;
    if (typoRate > 4.0) penalty = 1.5;
    else if (typoRate > 2.0) penalty = 1.0;
    else if (typoRate > 0.5) penalty = 0.5;
    band -= penalty;
    const uniqueTypos = [...new Set(a.detectedTypos)];
    notes.push(`Spelling fix${uniqueTypos.length > 1 ? 'es' : ''}: ${uniqueTypos.slice(0, 5).join(', ')}.`);
  } else if (enoughLengthForTtr) {
    band += 0.25;
  }

  return { band: clampBand(band), notes };
}

function scoreGrammar(a) {
  let band = 6.0;
  const notes = [];

  if (a.avgSentenceLength >= 10 && a.avgSentenceLength <= 28) band += 0.5;
  else if (a.avgSentenceLength < 8) {
    band -= 0.5;
    notes.push(`Sentences average only ${a.avgSentenceLength.toFixed(1)} words — combine short choppy sentences using relative clauses ("which", "who") or subordinators ("although", "because").`);
  } else if (a.avgSentenceLength > 30) {
    notes.push(`Sentences average ${a.avgSentenceLength.toFixed(1)} words — break long multi-clause chains into crisp 15–25 word sentences to avoid losing clarity.`);
  }

  if (a.sentenceLengthStdDev >= 3.5) band += 0.5;

  const missingStructures = [];
  let rangeScore = 0;
  if (a.grammarRange.complexCount > 0) rangeScore++; else missingStructures.push('subordinating clauses ("although", "whereas", "because")');
  if (a.grammarRange.passiveCount > 0) rangeScore++; else missingStructures.push('passive voice ("is considered", "can be reduced")');
  if (a.grammarRange.relativeCount > 0) rangeScore++; else missingStructures.push('relative clauses ("which...", "who...")');
  if (a.grammarRange.conditionalCount > 0) rangeScore++; else missingStructures.push('conditionals ("if...", "unless...")');
  if (a.grammarRange.modalCount > 0) rangeScore++;

  if (rangeScore >= 3) band += 0.75;
  else if (rangeScore === 2) band += 0.25;
  else {
    band -= 0.5;
    notes.push(`Limited grammatical range (${rangeScore}/5 structure types used) — weave in ${missingStructures.slice(0, 2).join(' and ')}.`);
  }

  if (a.grammarErrors.longRunOnSentences.length > 0) {
    const runOn = a.grammarErrors.longRunOnSentences[0];
    notes.push(`Very long sentence (${runOn.words} words starting with "${runOn.preview}") — split into two clear sentences to prevent grammatical drift.`);
  }

  if (a.grammarErrors.commaSplices > 0) {
    const word = a.grammarErrors.commaSpliceDetails[0];
    notes.push(`Punctuation check: found ", ${word}," joining clauses — use a semicolon or new sentence (e.g., "...; ${word}, ...").`);
  }

  const specificErrorNotes = [];
  if (a.grammarErrors.agreementDetails.length > 0) {
    specificErrorNotes.push(`subject-verb agreement (${a.grammarErrors.agreementDetails.map(x => `"${x}"`).join(', ')})`);
  }
  if (a.grammarErrors.doubleWordDetails.length > 0) {
    specificErrorNotes.push(`repeated words (${a.grammarErrors.doubleWordDetails.map(x => `"${x}"`).join(', ')})`);
  }
  if (a.grammarErrors.lowercaseI > 0) {
    specificErrorNotes.push(`lowercase "i" (${a.grammarErrors.lowercaseI}× — always capitalize "I")`);
  }
  if (a.grammarErrors.missingCaps > 0) {
    specificErrorNotes.push(`uncapitalized sentence start (${a.grammarErrors.missingCapsDetails.map(x => `"${x}..."`).join(', ')})`);
  }

  let errorCount = 0;
  errorCount += a.grammarErrors.lowercaseI;
  errorCount += a.grammarErrors.missingCaps;
  errorCount += a.grammarErrors.doubleNegatives;
  errorCount += a.grammarErrors.doubleWords;
  errorCount += a.grammarErrors.agreement;
  errorCount += a.grammarErrors.commaSplices;

  const errorRate = a.wordCount ? (errorCount / a.wordCount) * 100 : 0;
  if (errorRate > 0) {
    let penalty = 0;
    if (errorRate > 4.0) penalty = 1.5;
    else if (errorRate > 2.0) penalty = 1.0;
    else if (errorRate > 0.5) penalty = 0.5;
    band -= penalty;
    notes.push(
      specificErrorNotes.length
        ? `Grammar & mechanics issues spotted: ${specificErrorNotes.join('; ')}.`
        : 'Grammar errors detected — proofread carefully for frequent error-free sentences (required for Band 7+).'
    );
  } else if (a.sentenceCount >= 4) {
    band += 0.5;
  }

  return { band: clampBand(band), notes };
}

function buildStrengths(a, isTask1, criteria) {
  const strengths = [];
  const minWords = isTask1 ? 150 : 250;

  if (a.wordCount >= minWords) {
    strengths.push(`Length target met: ${a.wordCount} words across ${a.paragraphCount} paragraph${a.paragraphCount === 1 ? '' : 's'} (${a.paragraphWordCounts.join(' / ')} words).`);
  }
  if (a.academicWordsFound.length >= 3) {
    strengths.push(`Academic vocabulary spotted: ${a.academicWordsFound.slice(0, 5).map(w => `"${w}"`).join(', ')}.`);
  }
  const grammarUsed = [];
  if (a.grammarRange.complexCount > 0) grammarUsed.push(`complex subordinators (${a.grammarRange.complexWordsFound.slice(0, 3).join(', ')})`);
  if (a.grammarRange.passiveCount > 0) grammarUsed.push(`passive voice (${a.grammarRange.passiveCount}×)`);
  if (a.grammarRange.relativeCount > 0) grammarUsed.push(`relative clauses (${a.grammarRange.relativeCount}×)`);
  if (a.grammarRange.conditionalCount > 0) grammarUsed.push(`conditionals (${a.grammarRange.conditionalCount}×)`);
  if (grammarUsed.length >= 2) {
    strengths.push(`Sentence variety: good use of ${grammarUsed.join(', ')}.`);
  }
  if (a.detectedTypos.length === 0 && a.grammarErrors.agreement === 0 && a.grammarErrors.doubleWords === 0 && a.wordCount >= 80) {
    strengths.push('Clean mechanics: zero obvious typos, repeated words, or basic subject-verb slips detected.');
  }
  if (isTask1 && a.overviewMarkerCount > 0 && a.numericHits >= 3) {
    strengths.push(`Clear Task 1 data handling: overview present with ${a.numericHits} specific data points cited.`);
  }
  if (!isTask1 && a.promptAlignment && a.promptAlignment.matchedKeywords.length >= 3) {
    strengths.push(`On-topic coverage: directly addressed key prompt themes (${a.promptAlignment.matchedKeywords.slice(0, 4).join(', ')}).`);
  }
  if (strengths.length === 0 && criteria) {
    strengths.push(`Completed ${a.wordCount} words with ${a.sentenceCount} sentences — build on this draft using the specific targeted edits below.`);
  }
  return strengths;
}

function buildSuggestions(a, isTask1, criteria, notesObj, overallTaskBand) {
  const suggestions = [];
  const allNotes = [
    ...notesObj.taskAchievement,
    ...notesObj.coherenceCohesion,
    ...notesObj.lexicalResource,
    ...notesObj.grammaticalRange,
  ];

  // Prioritize the specific quoted notes from the essay itself
  allNotes.forEach(n => {
    if (!suggestions.includes(n)) suggestions.push(n);
  });

  // Add a band-calibrated coaching target when notes are sparse (higher-band essays)
  if (suggestions.length < 3) {
    const entries = [
      ['Task Response', criteria.taskAchievement],
      ['Coherence & Cohesion', criteria.coherenceCohesion],
      ['Lexical Resource', criteria.lexicalResource],
      ['Grammatical Range', criteria.grammaticalRange],
    ].sort((x, y) => x[1] - y[1]);
    const [weakestName, weakestBand] = entries[0];

    if (overallTaskBand >= 7.5) {
      suggestions.push(`To push past Band ${overallTaskBand.toFixed(1)} toward Band 8.5+, focus on ${weakestName} (currently ${weakestBand.toFixed(1)}): refine subtle idiomatic collocations and vary sentence openings so no two consecutive sentences start the same way.`);
    } else if (weakestName === 'Lexical Resource') {
      suggestions.push(`To lift Lexical Resource from ${weakestBand.toFixed(1)} to ${(weakestBand + 0.5).toFixed(1)}, replace common verbs/nouns with topic-specific collocations (academic density is currently ${(a.wordCount ? (a.academicCount / a.wordCount) * 100 : 0).toFixed(1)}%).`);
    } else if (weakestName === 'Grammatical Range') {
      suggestions.push(`To lift Grammatical Range from ${weakestBand.toFixed(1)} to ${(weakestBand + 0.5).toFixed(1)}, combine short ideas with non-defining relative clauses (", which...") and conditional hypotheticals ("Were governments to...").`);
    } else if (weakestName === 'Coherence & Cohesion') {
      suggestions.push(`To lift Coherence & Cohesion from ${weakestBand.toFixed(1)} to ${(weakestBand + 0.5).toFixed(1)}, start every body paragraph with a clear topic sentence and link sentences with referencing ("this trend", "such measures") rather than mechanical linkers at the start of every sentence.`);
    } else {
      suggestions.push(
        isTask1
          ? `To lift Task Achievement from ${weakestBand.toFixed(1)} to ${(weakestBand + 0.5).toFixed(1)}, group similar figures together instead of listing points chronologically and contrast extremes directly.`
          : `To lift Task Response from ${weakestBand.toFixed(1)} to ${(weakestBand + 0.5).toFixed(1)}, make sure every body paragraph states a clear central reason, explains *why*, and proves it with a specific real-world example.`
      );
    }
  }

  return suggestions.slice(0, 6);
}

function gradeTask(text, isTask1, promptText = '', promptTypeHint = '') {
  if (!text || !text.trim()) return null;
  const cleaned = cleanText(text);
  const a = analyzeText(cleaned, isTask1, promptText, promptTypeHint);
  const taskAchievement = scoreTaskAchievement(a, isTask1);
  const coherenceCohesion = scoreCoherenceCohesion(a, isTask1);
  const lexicalResource = scoreLexicalResource(a, isTask1);
  const grammaticalRange = scoreGrammar(a);
  let band = combineBands([taskAchievement.band, coherenceCohesion.band, lexicalResource.band, grammaticalRange.band]);

  if (a.wordCount < (isTask1 ? 75 : 120)) {
    band = Math.min(band, 4.5);
  } else if (a.wordCount < (isTask1 ? 120 : 200)) {
    band = Math.min(band, 6.5);
  } else if (a.wordCount < (isTask1 ? 150 : 250)) {
    band = Math.min(band, 7.0);
  }

  const criteria = {
    taskAchievement: taskAchievement.band,
    coherenceCohesion: coherenceCohesion.band,
    lexicalResource: lexicalResource.band,
    grammaticalRange: grammaticalRange.band,
  };
  const notes = {
    taskAchievement: taskAchievement.notes,
    coherenceCohesion: coherenceCohesion.notes,
    lexicalResource: lexicalResource.notes,
    grammaticalRange: grammaticalRange.notes,
  };

  return {
    band,
    wordCount: a.wordCount,
    criteria,
    notes,
    strengths: buildStrengths(a, isTask1, criteria),
    suggestions: buildSuggestions(a, isTask1, criteria, notes, band),
    stats: {
      paragraphWordCounts: a.paragraphWordCounts,
      avgSentenceLength: Number(a.avgSentenceLength.toFixed(1)),
      academicWordsFound: a.academicWordsFound.slice(0, 10),
      repeatedWords: a.repeatedWords,
      weakPhrasesFound: a.weakPhrasesFound,
      promptCoverage: a.promptAlignment ? {
        detectedType: a.promptAlignment.detectedType,
        matchedKeywords: a.promptAlignment.matchedKeywords,
        missedKeywords: a.promptAlignment.missedKeywords,
      } : null,
    },
  };
}

// Grades both tasks and combines into the overall Writing band using IELTS's
// real weighting: Task 2 counts for twice as much as Task 1.
function gradeWritingSubmission(writingTask1, writingTask2, options = {}) {
  const { task1Prompt = '', task2Prompt = '', task2Type = '' } = options || {};
  const task1 = gradeTask(writingTask1, true, task1Prompt, 'task1');
  const task2 = gradeTask(writingTask2, false, task2Prompt, task2Type);

  let overallBand = null;
  if (task1 && task2) overallBand = combineBands([task1.band, task2.band, task2.band]);
  else if (task2) overallBand = task2.band;
  else if (task1) overallBand = task1.band;

  return {
    task1,
    task2,
    overallBand,
    disclaimer: 'This is an automated, rule-based evaluation (no AI/LLM involved) tailored to your essay text and prompt — it inspects word repetition, academic vocabulary, grammar patterns, paragraph balance, and prompt coverage against IELTS descriptors. A tutor can review and override this score at any time.',
  };
}

module.exports = { gradeWritingSubmission, analyzeText };
