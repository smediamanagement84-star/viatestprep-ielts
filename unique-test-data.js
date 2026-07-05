// Originally-authored practice test content - not sourced from Cambridge IELTS
// books or any other copyrighted test material. Written to match real IELTS
// format, structure, and difficulty, but every passage, question, and prompt
// here is new. Kept in its own file (merged into IELTS_TEST_DATA below,
// loaded after test-data.js) rather than mixed into test-data.js, so this
// content stays clearly separated from that file's Cambridge-sourced tests.
const UNIQUE_TEST_DATA = {
  "u1": {
    "title": "ViaTestPrep Original Practice Test 1",
    "book": "Unique Test",
    "reading": {
      "passages": [
        {
          "title": "Storing Sunshine: The Return of Gravity Batteries",
          "text": "<h1>Storing Sunshine: The Return of Gravity Batteries</h1>\n<p>As solar panels and wind turbines supply an ever-larger share of the world's electricity, engineers face a stubborn problem: the sun does not always shine and the wind does not always blow, yet demand for power rarely lets up. For decades, the favoured solution has been the lithium-ion battery, the same technology found in mobile phones and electric cars. Lithium batteries are compact and increasingly affordable, but they degrade after a few thousand charging cycles, typically lasting no more than fifteen years, and the mining of lithium and cobalt raises serious environmental and labour concerns. This has prompted renewed interest in an older, simpler idea: storing energy not in chemicals, but in gravity itself.</p>\n<p>The principle behind a gravity battery is disarmingly simple. When electricity is abundant and cheap, for instance on a sunny afternoon, surplus power is used to hoist an extremely heavy weight upward. When demand rises in the evening, the weight is released and allowed to descend slowly, its motion driving a generator that feeds electricity back into the grid. It is, in essence, the same principle used in pumped-hydro storage, where water is pumped uphill and later released through turbines, except that a solid mass takes the place of water. This means a gravity battery does not require a mountain lake or a river; it can, in theory, be built almost anywhere a sufficiently tall structure or deep shaft is available.</p>\n<p>One of the most promising variants of this technology makes use of disused mine shafts. Many old mining regions are dotted with vertical shafts that plunge hundreds of metres underground and are no longer of any economic use. Engineers have proposed lowering and raising enormous weights, built from compressed waste material such as crushed rock or ground-up composite from retired wind turbine blades, inside these shafts using cranes fitted with variable-speed electric motors. Because the shafts already exist, the cost of construction is dramatically lower than building a new tower from scratch, and a source of industrial waste is put to productive use rather than being sent to landfill.</p>\n<p>Compared with chemical batteries, gravity storage offers several notable advantages. The mechanical components involved, essentially motors, cables and weights, can be expected to last three to five decades with only routine maintenance, roughly double the working life of a typical lithium-ion installation. No toxic or flammable chemicals are involved, removing the fire risk associated with large battery farms, and the system can begin releasing power within a few seconds of being called upon, making it well suited to smoothing out sudden fluctuations in electricity demand.</p>\n<p>The technology is not without drawbacks, however. Gravity batteries store far less energy for their size and weight than chemical batteries do, so a very large mass or a very tall structure is needed to store even a modest amount of electricity. Constructing that structure, or adapting an existing mine shaft for the purpose, still requires a substantial upfront investment, and suitable sites, deep shafts or very tall towers, are not available everywhere. For these reasons, gravity storage remains largely at the pilot stage, with only a handful of demonstration projects operating worldwide rather than widespread commercial rollout.</p>\n<p>Even so, several companies in Europe and Africa are now constructing pilot plants, and researchers estimate that tens of thousands of abandoned mine shafts around the world could theoretically be converted for this purpose. Most experts do not see gravity batteries as a wholesale replacement for chemical storage, but rather as a complementary technology, one that could take on a meaningful share of the grid-stabilising role as the proportion of electricity generated from wind and solar continues to grow.</p>",
          "questions": [
            {
              "num": 1,
              "type": "FILL",
              "text": "When demand increases, the raised weight is allowed to _________ slowly, turning a generator.",
              "answer": "descend",
              "explanation": "The passage states: \"the weight is released and allowed to descend slowly, its motion driving a generator that feeds electricity back into the grid.\"",
              "location": "Passage 1",
              "instruction": "Questions 1-3<br/>Complete the notes below.<br/>Choose NO MORE THAN TWO WORDS from the passage for each answer."
            },
            {
              "num": 2,
              "type": "FILL",
              "text": "The gravity battery works on the same basic principle as _________ storage, but uses a solid mass instead of water.",
              "answer": "pumped-hydro",
              "explanation": "The passage states: \"It is, in essence, the same principle used in pumped-hydro storage, where water is pumped uphill and later released through turbines.\"",
              "location": "Passage 1",
              "instruction": "Questions 1-3<br/>Complete the notes below.<br/>Choose NO MORE THAN TWO WORDS from the passage for each answer."
            },
            {
              "num": 3,
              "type": "FILL",
              "text": "One promising design uses disused _________ found in old mining regions.",
              "answer": "mine shafts",
              "explanation": "The passage states: \"One of the most promising variants of this technology makes use of disused mine shafts.\"",
              "location": "Passage 1",
              "instruction": "Questions 1-3<br/>Complete the notes below.<br/>Choose NO MORE THAN TWO WORDS from the passage for each answer."
            },
            {
              "num": 4,
              "type": "TFNG",
              "text": "Lithium-ion batteries typically last longer than the mechanical components of a gravity battery.",
              "answer": "FALSE",
              "explanation": "The passage states the mechanical components \"can be expected to last three to five decades... roughly double the working life of a typical lithium-ion installation.\"",
              "location": "Passage 1",
              "instruction": "Questions 4-6<br/>Do the following statements agree with the information given in the passage?<br/>Write<br/>TRUE if the statement agrees with the information<br/>FALSE if the statement contradicts the information<br/>NOT GIVEN if there is no information on this",
              "options": ["TRUE", "FALSE", "NOT GIVEN"]
            },
            {
              "num": 5,
              "type": "TFNG",
              "text": "Gravity batteries pose a fire risk similar to large lithium battery installations.",
              "answer": "FALSE",
              "explanation": "The passage states: \"No toxic or flammable chemicals are involved, removing the fire risk associated with large battery farms.\"",
              "location": "Passage 1",
              "instruction": "Questions 4-6<br/>Do the following statements agree with the information given in the passage?<br/>Write<br/>TRUE if the statement agrees with the information<br/>FALSE if the statement contradicts the information<br/>NOT GIVEN if there is no information on this",
              "options": ["TRUE", "FALSE", "NOT GIVEN"]
            },
            {
              "num": 6,
              "type": "TFNG",
              "text": "Gravity battery technology is already used widely across the world in commercial power grids.",
              "answer": "FALSE",
              "explanation": "The passage states gravity storage \"remains largely at the pilot stage, with only a handful of demonstration projects operating worldwide rather than widespread commercial rollout.\"",
              "location": "Passage 1",
              "instruction": "Questions 4-6<br/>Do the following statements agree with the information given in the passage?<br/>Write<br/>TRUE if the statement agrees with the information<br/>FALSE if the statement contradicts the information<br/>NOT GIVEN if there is no information on this",
              "options": ["TRUE", "FALSE", "NOT GIVEN"]
            },
            {
              "num": 7,
              "type": "FILL",
              "text": "The heavy weights used in mine-shaft systems can be built from crushed rock or ground-up material from old wind turbine _________.",
              "answer": "blades",
              "explanation": "The passage states the weights are \"built from compressed waste material such as crushed rock or ground-up composite from retired wind turbine blades.\"",
              "location": "Passage 1",
              "instruction": "Questions 7-9<br/>Complete the sentences below.<br/>Choose NO MORE THAN TWO WORDS from the passage for each answer."
            },
            {
              "num": 8,
              "type": "FILL",
              "text": "Because the shafts already exist, using them lowers the _________ of building the system compared to constructing a brand new tower.",
              "answer": "cost",
              "explanation": "The passage states: \"the cost of construction is dramatically lower than building a new tower from scratch.\"",
              "location": "Passage 1",
              "instruction": "Questions 7-9<br/>Complete the sentences below.<br/>Choose NO MORE THAN TWO WORDS from the passage for each answer."
            },
            {
              "num": 9,
              "type": "FILL",
              "text": "A gravity battery can begin releasing power within a few _________ of being needed.",
              "answer": "seconds",
              "explanation": "The passage states the system \"can begin releasing power within a few seconds of being called upon.\"",
              "location": "Passage 1",
              "instruction": "Questions 7-9<br/>Complete the sentences below.<br/>Choose NO MORE THAN TWO WORDS from the passage for each answer."
            },
            {
              "num": 10,
              "type": "MCQ",
              "text": "According to the passage, why do gravity batteries need a large mass or tall structure?",
              "answer": "B",
              "explanation": "The passage states: \"Gravity batteries store far less energy for their size and weight than chemical batteries do, so a very large mass or a very tall structure is needed to store even a modest amount of electricity.\"",
              "location": "Passage 1",
              "instruction": "Questions 10-12<br/>Choose the correct letter, A, B, C or D.",
              "options": [
                "A. To reduce the cost of construction.",
                "B. Because they store less energy per unit of size than chemical batteries.",
                "C. Because tall structures are cheaper to build than mine shafts.",
                "D. To prevent fire risk."
              ]
            },
            {
              "num": 11,
              "type": "MCQ",
              "text": "What do most experts believe about the future role of gravity batteries?",
              "answer": "C",
              "explanation": "The passage states: \"Most experts do not see gravity batteries as a wholesale replacement for chemical storage, but rather as a complementary technology.\"",
              "location": "Passage 1",
              "instruction": "Questions 10-12<br/>Choose the correct letter, A, B, C or D.",
              "options": [
                "A. They will completely replace lithium-ion batteries.",
                "B. They will be used only in Europe and Africa.",
                "C. They will play a complementary role alongside chemical storage.",
                "D. They will be abandoned in favour of pumped-hydro storage."
              ]
            },
            {
              "num": 12,
              "type": "MCQ",
              "text": "What is described as a stubborn problem facing renewable energy in the passage?",
              "answer": "B",
              "explanation": "The passage states: \"the sun does not always shine and the wind does not always blow, yet demand for power rarely lets up.\"",
              "location": "Passage 1",
              "instruction": "Questions 10-12<br/>Choose the correct letter, A, B, C or D.",
              "options": [
                "A. The high cost of solar panels.",
                "B. The mismatch between when energy is generated and when it is needed.",
                "C. The scarcity of wind turbine components.",
                "D. The lack of skilled engineers."
              ]
            },
            {
              "num": 13,
              "type": "TFNG",
              "text": "Researchers believe only a small number of old mine shafts worldwide would be suitable for conversion into gravity batteries.",
              "answer": "FALSE",
              "explanation": "The passage states: \"researchers estimate that tens of thousands of abandoned mine shafts around the world could theoretically be converted for this purpose.\"",
              "location": "Passage 1",
              "instruction": "Question 13<br/>Do the following statement agree with the information given in the passage?<br/>Write<br/>TRUE if the statement agrees with the information<br/>FALSE if the statement contradicts the information<br/>NOT GIVEN if there is no information on this",
              "options": ["TRUE", "FALSE", "NOT GIVEN"]
            }
          ]
        }
      ]
    },
    "writing": {
      "task1": {
        "prompt": "The chart below shows the percentage of total electricity generated from renewable sources in three countries between 2000 and 2020. Summarise the information by selecting and reporting the main features, and make comparisons where relevant. Write at least 150 words.",
        "image": "<img src=\"images/writing_unique1_p1.png\" class=\"max-w-full h-auto mx-auto rounded-xl shadow-lg border border-white/10 bg-white\" alt=\"Writing Task 1 Chart\" />",
        "modelAnswer": "The line graph illustrates changes in the share of electricity produced from renewable sources in Germany, Brazil, and South Korea over a twenty-year period from 2000 to 2020.\n\nOverall, all three countries saw an increase in renewable electricity generation, although the extent and pattern of growth varied considerably. Brazil consistently generated the highest proportion of its electricity from renewable sources throughout the period, starting at 40% in 2000 and reaching 52% by 2020, a relatively steady and gradual rise.\n\nGermany, by contrast, began the period with a much lower share, at just 8% in 2000, but experienced the most dramatic growth of the three countries. Its renewable share more than doubled between 2010 and 2020, climbing from 20% to 45%, nearly matching Brazil's figure by the end of the period.\n\nSouth Korea started from the lowest base of all three countries, at only 2% in 2000, and its growth remained comparatively modest throughout, reaching just 12% by 2020, less than a quarter of Brazil's figure in the same year.\n\nIn summary, while Brazil maintained the highest overall share, Germany showed the fastest rate of improvement, and South Korea lagged behind both countries throughout the period."
      },
      "task2": {
        "prompt": "Some people believe that governments should invest heavily in developing new energy storage technologies, while others think this money would be better spent directly on expanding renewable power generation such as solar and wind farms. Discuss both views and give your own opinion.",
        "modelAnswer": "Governments around the world face difficult choices about how to allocate limited funds for tackling climate change. While some argue that priority should be given to developing storage technologies such as gravity batteries, others believe it makes more sense to expand renewable generation capacity directly. In my view, both approaches are necessary and should be pursued together.\n\nThose who favour investment in storage point out that solar and wind power are inherently intermittent, generating electricity only when the sun shines or the wind blows. Without adequate ways of storing surplus energy for later use, much of the electricity generated by renewable sources during periods of high output is simply wasted, and grids must fall back on fossil fuels when generation drops. From this perspective, storage technology is the missing piece that would allow existing and future renewable capacity to be used far more efficiently.\n\nOn the other hand, supporters of expanding generation argue that storage technologies remain expensive and, in many cases, still unproven at a large scale. They contend that every dollar spent on experimental storage solutions is a dollar not spent on solar panels or wind turbines that could begin displacing fossil fuels immediately. In their view, expanding proven generation capacity offers a faster and more certain return on investment.\n\nIn my opinion, framing this as an either-or choice is ultimately unhelpful. Without sufficient storage, an oversupply of renewable generation cannot be fully exploited, yet without sufficient generation capacity, even the most advanced storage system has little surplus energy to store. Governments would therefore be wise to pursue a balanced strategy, funding both the expansion of renewable generation and the development of complementary storage technologies, rather than treating the two as competing priorities."
      }
    }
  }
};

// Merge into the shared global lookup every practice page and the CRM read
// from (see test-data.js) - this script must load after that file.
if (typeof IELTS_TEST_DATA !== 'undefined') {
  Object.assign(IELTS_TEST_DATA, UNIQUE_TEST_DATA);
}
