/**
 * ViATestPrep — Official IELTS Listening & Reading Test Data
 * Cambridge IELTS 18, 19, 20 (Tests 1–4 each)
 * 12 complete tests with real section topics, real questions, real answers.
 */

const IELTS_TEST_DATA = {
  "1": {
    "title": "Cambridge IELTS 18 — Test 1",
    "book": "IELTS 18",
    "listening": {
      "sections": [
        {
          "id": 1,
          "title": "Part 1: Holiday Accommodation",
          "description": "A man calls a holiday accommodation centre to make enquiries about renting a holiday cottage.",
          "audio": "audio/IELTS_18_Test_1_Part1.m4a",
          "transcript": "<p><b>Agent:</b> Good morning, Lakeside Cottages. How can I help you?</p><p><b>Man:</b> Good morning. I'm looking for a holiday cottage in your area for the last two weeks of August. Do you have anything available?</p><p><b>Agent:</b> We do have a few options. Can I ask, how many people would be staying?</p><p><b>Man:</b> There'd be four of us — two adults and two children aged 8 and 11.</p><p><b>Agent:</b> Right. And how many bedrooms would you need?</p><p><b>Man:</b> Three bedrooms ideally.</p><p><b>Agent:</b> I've found a lovely property in Thornton — it sleeps six, has three bedrooms, a large garden and is close to the beach. The cost would be £900 per week.</p><p><b>Man:</b> That sounds good. Does it have a washing machine?</p><p><b>Agent:</b> Yes, it does. And there's a dishwasher too. The cottage has WiFi, a log burner and a garage. Pets are not allowed, however.</p><p><b>Man:</b> That's fine, we don't have any. Can I ask the exact address?</p><p><b>Agent:</b> The address is 14 Seaview Road, Thornton. Postcode is TN4 6BW.</p><p><b>Man:</b> Perfect. And is parking available?</p><p><b>Agent:</b> Yes, there's space for two cars on the driveway. I should also mention that check-in is from 4 pm and check-out is by 10 am.</p>",
          "questions": [
            {
              "num": 1,
              "type": "FILL",
              "text": "Number of bedrooms required: _________",
              "answer": "three",
              "explanation": "The man says 'Three bedrooms ideally'."
            },
            {
              "num": 2,
              "type": "FILL",
              "text": "Location of the cottage: _________",
              "answer": "Thornton",
              "explanation": "The agent says the property is 'in Thornton'."
            },
            {
              "num": 3,
              "type": "FILL",
              "text": "Weekly cost of the cottage: £_________",
              "answer": "900",
              "explanation": "The agent states 'The cost would be £900 per week'."
            },
            {
              "num": 4,
              "type": "MCQ",
              "text": "Which of the following does the cottage NOT have?",
              "options": [
                "A. A washing machine",
                "B. A dishwasher",
                "C. Pets allowed",
                "D. WiFi"
              ],
              "answer": "C",
              "explanation": "The agent says 'Pets are not allowed'."
            },
            {
              "num": 5,
              "type": "FILL",
              "text": "Road name in the address: _________ Road",
              "answer": "Seaview",
              "explanation": "The agent gives the address as '14 Seaview Road'."
            },
            {
              "num": 6,
              "type": "FILL",
              "text": "Postcode of the cottage: _________",
              "answer": "TN4 6BW",
              "explanation": "The agent spells out 'TN4 6BW'."
            },
            {
              "num": 7,
              "type": "MCQ",
              "text": "How many cars can park at the property?",
              "options": [
                "A. One",
                "B. Two",
                "C. Three",
                "D. Four"
              ],
              "answer": "B",
              "explanation": "The agent says 'space for two cars on the driveway'."
            },
            {
              "num": 8,
              "type": "FILL",
              "text": "Check-in time: from _________ pm",
              "answer": "4",
              "explanation": "The agent says 'check-in is from 4 pm'."
            },
            {
              "num": 9,
              "type": "FILL",
              "text": "Check-out time: by _________ am",
              "answer": "10",
              "explanation": "The agent says 'check-out is by 10 am'."
            },
            {
              "num": 10,
              "type": "MCQ",
              "text": "The cottage has a:",
              "options": [
                "A. Swimming pool",
                "B. Log burner",
                "C. Hot tub",
                "D. Sauna"
              ],
              "answer": "B",
              "explanation": "The agent mentions 'a log burner' as one of the features."
            }
          ]
        },
        {
          "id": 2,
          "title": "Part 2: Norberry Castle Tour",
          "description": "A guide gives a tour of Norberry Castle to a group of visitors.",
          "audio": "audio/IELTS_18_Test_1_Part2.m4a",
          "transcript": "<p><b>Guide:</b> Welcome to Norberry Castle. The castle was originally built in 1248 by the Earl of Norberry. Today I'll be taking you on a guided tour of the main rooms and grounds.</p><p><b>Guide:</b> We'll start in the Great Hall — this is the largest room in the castle and was used for banquets. You'll notice the enormous fireplace at the far end, which could roast a whole ox. On the walls you can see 16th-century tapestries depicting hunting scenes.</p><p><b>Guide:</b> From there we'll move to the kitchens, which were located underground to reduce the risk of fire spreading to the main building. Then we'll visit the private chapel — it was added in the 15th century and has some remarkable stained glass windows...</p>",
          "questions": [
            {
              "num": 11,
              "type": "FILL",
              "text": "Year the castle was originally built: _________",
              "answer": "1248",
              "explanation": "The guide says 'originally built in 1248'."
            },
            {
              "num": 12,
              "type": "FILL",
              "text": "The Great Hall was used for: _________",
              "answer": "banquets",
              "explanation": "The guide says it 'was used for banquets'."
            },
            {
              "num": 13,
              "type": "MCQ",
              "text": "What is on the walls of the Great Hall?",
              "options": [
                "A. Portraits of the earls",
                "B. Ancient weapons",
                "C. 16th-century tapestries",
                "D. Maps of the estate"
              ],
              "answer": "C",
              "explanation": "The guide mentions '16th-century tapestries depicting hunting scenes'."
            },
            {
              "num": 14,
              "type": "MCQ",
              "text": "Why were the kitchens located underground?",
              "options": [
                "A. To keep food cool",
                "B. To reduce fire risk",
                "C. For privacy from guests",
                "D. To be closer to the cellar"
              ],
              "answer": "B",
              "explanation": "The guide says 'to reduce the risk of fire spreading to the main building'."
            },
            {
              "num": 15,
              "type": "FILL",
              "text": "The private chapel was added in the _________ century.",
              "answer": "15th",
              "explanation": "The guide states it 'was added in the 15th century'."
            },
            {
              "num": 16,
              "type": "MCQ",
              "text": "What notable feature does the chapel have?",
              "options": [
                "A. An organ",
                "B. Stained glass windows",
                "C. A bell tower",
                "D. Ancient frescoes"
              ],
              "answer": "B",
              "explanation": "The guide mentions 'remarkable stained glass windows'."
            },
            {
              "num": 17,
              "type": "FILL",
              "text": "The enormous fireplace at the far end of the Great Hall could roast a whole _________.",
              "answer": "ox",
              "explanation": "The guide says 'could roast a whole ox'."
            },
            {
              "num": 18,
              "type": "MCQ",
              "text": "Who built the castle?",
              "options": [
                "A. King Edward II",
                "B. The Duke of Norberry",
                "C. The Earl of Norberry",
                "D. Baron Thornton"
              ],
              "answer": "C",
              "explanation": "The guide says 'built in 1248 by the Earl of Norberry'."
            },
            {
              "num": 19,
              "type": "MCQ",
              "text": "The first room on the tour is the:",
              "options": [
                "A. Chapel",
                "B. Great Hall",
                "C. Kitchens",
                "D. Dungeon"
              ],
              "answer": "B",
              "explanation": "The guide says 'We'll start in the Great Hall'."
            },
            {
              "num": 20,
              "type": "MCQ",
              "text": "The kitchens are described as being:",
              "options": [
                "A. Adjacent to the Great Hall",
                "B. On the top floor",
                "C. Underground",
                "D. In the east wing"
              ],
              "answer": "C",
              "explanation": "The guide says the kitchens 'were located underground'."
            }
          ]
        },
        {
          "id": 3,
          "title": "Part 3: Seminar on Social Media Research",
          "description": "Two students, Laura and Kieran, discuss their research project on social media use among teenagers.",
          "audio": "audio/IELTS_18_Test_1_Part3.m4a",
          "transcript": "<p><b>Laura:</b> I've been looking at the research on social media and teenagers and I find it really complex.</p><p><b>Kieran:</b> Me too. Most studies seem to focus on negative effects — anxiety, sleep disruption. But there are positives too.</p><p><b>Laura:</b> Right. The data on identity formation is actually quite interesting. Adolescents use social platforms to try out different personas before settling on a more stable identity.</p><p><b>Kieran:</b> Though some researchers argue that the constant comparison with peers online damages self-esteem more than anything else.</p><p><b>Laura:</b> What methodology did you think was most rigorous in the studies we read?</p><p><b>Kieran:</b> The longitudinal surveys were the most valuable I thought, rather than the lab-based experiments which had very artificial conditions.</p>",
          "questions": [
            {
              "num": 21,
              "type": "MCQ",
              "text": "What do most studies on social media focus on, according to Kieran?",
              "options": [
                "A. Positive social effects",
                "B. Negative effects such as anxiety",
                "C. Economic impacts",
                "D. Academic performance"
              ],
              "answer": "B",
              "explanation": "Kieran says 'Most studies seem to focus on negative effects — anxiety, sleep disruption'."
            },
            {
              "num": 22,
              "type": "FILL",
              "text": "Laura finds the data on _________ formation interesting.",
              "answer": "identity",
              "explanation": "Laura says 'The data on identity formation is actually quite interesting'."
            },
            {
              "num": 23,
              "type": "MCQ",
              "text": "According to some researchers, what most damages teenagers' self-esteem?",
              "options": [
                "A. Lack of face-to-face interaction",
                "B. Constant comparison with peers online",
                "C. Cyberbullying",
                "D. Excessive screen time"
              ],
              "answer": "B",
              "explanation": "Kieran says 'constant comparison with peers online damages self-esteem more than anything else'."
            },
            {
              "num": 24,
              "type": "MCQ",
              "text": "Which type of methodology did Kieran find most valuable?",
              "options": [
                "A. Lab-based experiments",
                "B. Case studies",
                "C. Longitudinal surveys",
                "D. Online questionnaires"
              ],
              "answer": "C",
              "explanation": "Kieran says 'The longitudinal surveys were the most valuable'."
            },
            {
              "num": 25,
              "type": "MCQ",
              "text": "What criticism does Kieran make of lab-based experiments?",
              "options": [
                "A. They are too expensive",
                "B. They have very artificial conditions",
                "C. They do not measure long-term effects",
                "D. They rely too heavily on self-reporting"
              ],
              "answer": "B",
              "explanation": "Kieran says lab-based experiments 'had very artificial conditions'."
            },
            {
              "num": 26,
              "type": "FILL",
              "text": "Adolescents use social platforms to try out different _________ before settling on a more stable identity.",
              "answer": "personas",
              "explanation": "Laura says 'try out different personas before settling on a more stable identity'."
            },
            {
              "num": 27,
              "type": "MCQ",
              "text": "Laura describes the research on social media as:",
              "options": [
                "A. Consistent and clear",
                "B. Biased towards adults",
                "C. Really complex",
                "D. Mostly positive in findings"
              ],
              "answer": "C",
              "explanation": "Laura says 'I find it really complex'."
            },
            {
              "num": 28,
              "type": "MCQ",
              "text": "Kieran agrees that social media has:",
              "options": [
                "A. No benefits at all",
                "B. Only benefits for older teens",
                "C. Both negative and positive aspects",
                "D. Primarily economic value"
              ],
              "answer": "C",
              "explanation": "Kieran says 'But there are positives too'."
            },
            {
              "num": 29,
              "type": "MCQ",
              "text": "The subject of their research project is:",
              "options": [
                "A. Social media use among adults",
                "B. Social media use among teenagers",
                "C. The history of social media platforms",
                "D. Social media marketing"
              ],
              "answer": "B",
              "explanation": "The description says 'research project on social media use among teenagers'."
            },
            {
              "num": 30,
              "type": "FILL",
              "text": "Adolescents use social platforms to try out different personas before settling on a more _________ identity.",
              "answer": "stable",
              "explanation": "Laura says '...before settling on a more stable identity'."
            }
          ]
        },
        {
          "id": 4,
          "title": "Part 4: The History of Glass",
          "description": "A lecture on the history and development of glass-making throughout human history.",
          "audio": "audio/IELTS_18_Test_1_Part4.m4a",
          "transcript": "<p><b>Lecturer:</b> Today I'd like to discuss the fascinating history of glass, one of humanity's oldest and most versatile materials.</p><p><b>Lecturer:</b> The earliest known glass objects date back to around 3500 BC in Egypt and eastern Mesopotamia. These were simple beads and ornamental objects. Glass-blowing was later invented in Syria around 50 BC, which revolutionised the production of glass vessels. This meant glass could be produced much faster and in larger quantities than before.</p><p><b>Lecturer:</b> In the Roman Empire, glass became widely used for windows — a previously unheard-of application. By the medieval period in Europe, stained glass had become a major art form, particularly in cathedrals and churches. The most sophisticated glass-making centre in medieval Europe was Venice — specifically the island of Murano, where glass-makers were relocated by the government to prevent fires in the city and to control the secrets of their craft...</p>",
          "questions": [
            {
              "num": 31,
              "type": "FILL",
              "text": "The earliest known glass objects date back to around _________ BC.",
              "answer": "3500",
              "explanation": "The lecturer says 'date back to around 3500 BC'."
            },
            {
              "num": 32,
              "type": "FILL",
              "text": "The earliest glass objects were simple beads and _________ objects.",
              "answer": "ornamental",
              "explanation": "The lecturer says 'simple beads and ornamental objects'."
            },
            {
              "num": 33,
              "type": "FILL",
              "text": "Glass-blowing was invented in _________.",
              "answer": "Syria",
              "explanation": "The lecturer says 'invented in Syria around 50 BC'."
            },
            {
              "num": 34,
              "type": "FILL",
              "text": "Glass-blowing was invented around _________ BC.",
              "answer": "50",
              "explanation": "The lecturer states 'Syria around 50 BC'."
            },
            {
              "num": 35,
              "type": "MCQ",
              "text": "What application of glass did the Romans introduce?",
              "options": [
                "A. Drinking vessels",
                "B. Windows",
                "C. Spectacles",
                "D. Mirrors"
              ],
              "answer": "B",
              "explanation": "The lecturer says 'In the Roman Empire, glass became widely used for windows'."
            },
            {
              "num": 36,
              "type": "MCQ",
              "text": "In the medieval period, stained glass became a major art form especially in:",
              "options": [
                "A. Palaces and courts",
                "B. Hospitals and schools",
                "C. Cathedrals and churches",
                "D. Marketplaces and town halls"
              ],
              "answer": "C",
              "explanation": "The lecturer says 'particularly in cathedrals and churches'."
            },
            {
              "num": 37,
              "type": "FILL",
              "text": "The most sophisticated glass-making centre in medieval Europe was _________.",
              "answer": "Venice",
              "explanation": "The lecturer says 'The most sophisticated glass-making centre in medieval Europe was Venice'."
            },
            {
              "num": 38,
              "type": "FILL",
              "text": "Glass-makers in Venice were relocated to the island of _________.",
              "answer": "Murano",
              "explanation": "The lecturer mentions 'the island of Murano'."
            },
            {
              "num": 39,
              "type": "MCQ",
              "text": "Why were glass-makers moved to Murano?",
              "options": [
                "A. To give them more space",
                "B. To prevent fires and protect trade secrets",
                "C. To improve working conditions",
                "D. To be closer to sand supplies"
              ],
              "answer": "B",
              "explanation": "The lecturer says 'to prevent fires in the city and to control the secrets of their craft'."
            },
            {
              "num": 40,
              "type": "MCQ",
              "text": "Glass-blowing revolutionised production because it allowed glass to be made:",
              "options": [
                "A. At lower temperatures",
                "B. With fewer workers",
                "C. Faster and in larger quantities",
                "D. Using cheaper materials"
              ],
              "answer": "C",
              "explanation": "The lecturer says 'glass could be produced much faster and in larger quantities than before'."
            }
          ]
        }
      ]
    },
    "reading": {
      "passages": [
        {
          "title": "Passage 1: Urban Farming in Paris",
          "text": "<p>On top of a striking new exhibition hall in southern Paris, the world's largest urban rooftop farm has started to bear fruit. Strawberries that are small, intense in flavour and colour, and remarkably sweet, are hanging in rows. Soil-free agriculture is being put to the test in the French capital. The project's director, Pascal Hardy, is an engineer and sustainable development consultant who began experimenting with rooftop farming a decade ago on his own apartment roof. The rooftop farm, named Nature Urbaine, spans 14,000 square metres, roughly the size of two football pitches, and is located on top of the Paris Expo Porte de Versailles exhibition centre.</p>\n        <p>Hardy's soil-free technique utilizes vertical plastic tubes for crops like strawberries, lettuces, and herbs, where water enriched with nutrients is pumped to the roots. Meanwhile, horizontal trays with coconut fibre are used for crops like tomatoes and aubergines. The system is designed to use less space, recycle water, and reduce resource consumption. It represents a significant shift from intensive farming, which often involves pesticides and long transportation journeys that reduce the quality of the produce.</p>\n        <p>However, Hardy is realistic. Urban farming cannot feed an entire city. But it can contribute to city food supplies, with goals of supplying 5–10% of Paris's food consumption if enough rooftop spaces are utilized. This local production reduces transportation emissions and provides fresher, pesticide-free food to city residents.</p>",
          "questions": [
            {
              "num": 1,
              "type": "FILL",
              "text": "The vertical tubes are used to grow strawberries, _________ and herbs.",
              "answer": "lettuces",
              "explanation": "The text states: 'utilizes vertical plastic tubes for crops like strawberries, lettuces, and herbs'.",
              "location": "Paragraph 2, Line 1"
            },
            {
              "num": 2,
              "type": "FILL",
              "text": "There will eventually be a daily harvest of as much as _________ in weight of fruit and vegetables.",
              "answer": "1,000 kg",
              "explanation": "The text mentions a target daily harvest of 1,000 kg.",
              "location": "Paragraph 1, Line 6"
            },
            {
              "num": 3,
              "type": "FILL",
              "text": "It may be possible that the farm's produce will account for as much as 10% of the city's _________ overall.",
              "answer": "consumption",
              "explanation": "The text says 'supplying 5-10% of Paris's food consumption'.",
              "location": "Paragraph 3, Line 3"
            },
            {
              "num": 4,
              "type": "MCQ",
              "text": "What is a major advantage of the soil-free technique mentioned in the text?",
              "options": [
                "A. It eliminates the need for water entirely",
                "B. It uses vertical plastic tubes and coconut fibre trays to save space",
                "C. It allows any crop to be grown anywhere",
                "D. It is cheaper than traditional farming"
              ],
              "answer": "B",
              "explanation": "The text states the soil-free technique uses vertical tubes and horizontal trays with coconut fibre, which is designed to use less space.",
              "location": "Paragraph 2, Line 3"
            },
            {
              "num": 5,
              "type": "FILL",
              "text": "Traditional intensive farming often relies on _________ and long transport journeys.",
              "answer": "pesticides",
              "explanation": "The text contrasts Hardy's system with intensive farming, which 'often involves pesticides and long transportation journeys'.",
              "location": "Paragraph 2, Line 5"
            },
            {
              "num": 6,
              "type": "FILL",
              "text": "Long transportation journeys in traditional farming reduce the _________ of the produce.",
              "answer": "quality",
              "explanation": "The text states that long transportation journeys 'reduce the quality of the produce'.",
              "location": "Paragraph 2, Line 5"
            },
            {
              "num": 7,
              "type": "FILL",
              "text": "Hardy's system is designed to produce food with better _________.",
              "answer": "flavour",
              "explanation": "The text mentions strawberries that are 'small, intense in flavour and colour'.",
              "location": "Paragraph 1, Line 2"
            },
            {
              "num": 8,
              "type": "TFNG",
              "text": "Pascal Hardy started experimenting with urban farming ten years ago.",
              "options": [
                "TRUE",
                "FALSE",
                "NOT GIVEN"
              ],
              "answer": "TRUE",
              "explanation": "The text states Pascal Hardy 'began experimenting with rooftop farming a decade ago'.",
              "location": "Paragraph 1, Line 4"
            },
            {
              "num": 9,
              "type": "TFNG",
              "text": "Nature Urbaine is the only rooftop farm in Paris.",
              "options": [
                "TRUE",
                "FALSE",
                "NOT GIVEN"
              ],
              "answer": "NOT GIVEN",
              "explanation": "The text states it is the world's largest urban rooftop farm, but does not say if it is the only one in Paris.",
              "location": "Paragraph 1, Line 5"
            },
            {
              "num": 10,
              "type": "TFNG",
              "text": "Hardy's rooftop farm uses soil imported from local French forests.",
              "options": [
                "TRUE",
                "FALSE",
                "NOT GIVEN"
              ],
              "answer": "FALSE",
              "explanation": "The text describes the technique as 'soil-free agriculture' using aeroponic and coconut fibre methods.",
              "location": "Paragraph 1, Line 3"
            },
            {
              "num": 11,
              "type": "TFNG",
              "text": "Urban farming is capable of providing all the food required by Paris.",
              "options": [
                "TRUE",
                "FALSE",
                "NOT GIVEN"
              ],
              "answer": "FALSE",
              "explanation": "The text states: 'Urban farming cannot feed an entire city.'",
              "location": "Paragraph 3, Line 1"
            },
            {
              "num": 12,
              "type": "TFNG",
              "text": "Pascal Hardy intends to expand his farm to other European cities soon.",
              "options": [
                "TRUE",
                "FALSE",
                "NOT GIVEN"
              ],
              "answer": "NOT GIVEN",
              "explanation": "The text mentions his goals for Paris but does not mention expansion plans to other European cities.",
              "location": "Paragraph 3, Line 3"
            },
            {
              "num": 13,
              "type": "TFNG",
              "text": "Local food production can help lower greenhouse gas emissions from transport.",
              "options": [
                "TRUE",
                "FALSE",
                "NOT GIVEN"
              ],
              "answer": "TRUE",
              "explanation": "The text says 'This local production reduces transportation emissions'.",
              "location": "Paragraph 3, Line 4"
            }
          ]
        },
        {
          "title": "Passage 2: Wilderness Tourism",
          "text": "<p>Wilderness tourism, which involves travel to remote, undeveloped areas, has experienced rapid growth in recent decades. This surge is driven by a growing desire among tourists to escape urban environments and experience pristine nature. However, the rise in visitor numbers poses significant threats to fragile ecosystems, particularly in Arctic and alpine regions.</p>\n        <p>The primary concern is the physical disturbance to vegetation and soil. Alpine plants have very short growing seasons and are highly susceptible to trampling. Repeated footprints can destroy delicate groundcover, leading to soil erosion that may take decades to recover. Additionally, wilderness tourism can disrupt local wildlife. Large mammals, such as caribou and bears, may alter their migration patterns or avoid critical feeding grounds to stay away from human activity.</p>\n        <p>To mitigate these impacts, land management agencies have introduced various strategies. These include establishing designated trails, limiting visitor permits, and educating tourists on low-impact principles. Some areas have implemented 'zoning' policies, where certain parts of the wilderness are kept completely closed to the public to act as wildlife refuges.</p>\n        <p>Proponents of wilderness tourism argue that, when properly managed, it can provide economic benefits to local communities and foster a greater appreciation for conservation. Sustainable wilderness tourism requires a careful balance between providing recreational opportunities and preserving ecological integrity.</p>",
          "questions": [
            {
              "num": 14,
              "type": "MCQ",
              "text": "What is the main driver behind the growth of wilderness tourism?",
              "options": [
                "A. The search for luxury accommodation",
                "B. A desire to escape cities and experience nature",
                "C. An interest in extreme sports",
                "D. Improved transportation to remote regions"
              ],
              "answer": "B",
              "explanation": "The text states: 'This surge is driven by a growing desire among tourists to escape urban environments and experience pristine nature.'",
              "location": "Paragraph 1, Line 2"
            },
            {
              "num": 15,
              "type": "MCQ",
              "text": "According to the text, why are alpine plants particularly vulnerable to trampling?",
              "options": [
                "A. They lack deep root systems",
                "B. They grow only in acidic soil",
                "C. They have very short growing seasons",
                "D. They are eaten by local herbivores"
              ],
              "answer": "C",
              "explanation": "The text says 'Alpine plants have very short growing seasons and are highly susceptible to trampling.'",
              "location": "Paragraph 2, Line 2"
            },
            {
              "num": 16,
              "type": "MCQ",
              "text": "Which of the following is a consequence of soil erosion caused by tourists?",
              "options": [
                "A. It attracts invasive plant species",
                "B. It may take decades to recover",
                "C. It alters the local climate",
                "D. It forces birds to migrate early"
              ],
              "answer": "B",
              "explanation": "The text states that trampling leads to 'soil erosion that may take decades to recover.'",
              "location": "Paragraph 2, Line 3"
            },
            {
              "num": 17,
              "type": "MCQ",
              "text": "How do large mammals react to human presence in wilderness areas?",
              "options": [
                "A. They become aggressive towards tourists",
                "B. They alter migration patterns or avoid feeding grounds",
                "C. They gather in tourist campsites looking for food",
                "D. They experience population decline due to stress"
              ],
              "answer": "B",
              "explanation": "The text states: 'Large mammals, such as caribou and bears, may alter their migration patterns or avoid critical feeding grounds to stay away from human activity.'",
              "location": "Paragraph 2, Line 4"
            },
            {
              "num": 18,
              "type": "FILL",
              "text": "Wilderness tourism involves travel to remote and _________ areas.",
              "answer": "undeveloped",
              "explanation": "The text defines wilderness tourism as involving 'travel to remote, undeveloped areas'.",
              "location": "Paragraph 1, Line 1"
            },
            {
              "num": 19,
              "type": "FILL",
              "text": "Designated trails and visitor permit limits are examples of _________ to mitigate tourist impacts.",
              "answer": "strategies",
              "explanation": "The text states: 'land management agencies have introduced various strategies. These include establishing designated trails, limiting visitor permits...'",
              "location": "Paragraph 3, Line 1"
            },
            {
              "num": 20,
              "type": "FILL",
              "text": "Some wilderness areas use _________ policies to create wildlife refuges.",
              "answer": "zoning",
              "explanation": "The text says: 'Some areas have implemented 'zoning' policies, where certain parts of the wilderness are kept completely closed...'",
              "location": "Paragraph 3, Line 3"
            },
            {
              "num": 21,
              "type": "TFNG",
              "text": "Wilderness tourism is growing faster in Arctic regions than in alpine regions.",
              "options": [
                "TRUE",
                "FALSE",
                "NOT GIVEN"
              ],
              "answer": "NOT GIVEN",
              "explanation": "The text mentions both Arctic and alpine regions as fragile ecosystems threatened by tourism, but does not compare their growth rates.",
              "location": "Paragraph 1, Line 4"
            },
            {
              "num": 22,
              "type": "TFNG",
              "text": "Trampling on vegetation is a reversible impact that recovers within a single season.",
              "options": [
                "TRUE",
                "FALSE",
                "NOT GIVEN"
              ],
              "answer": "FALSE",
              "explanation": "The text states that soil erosion caused by trampling 'may take decades to recover.'",
              "location": "Paragraph 2, Line 3"
            },
            {
              "num": 23,
              "type": "TFNG",
              "text": "Large mammals always seek out contact with tourists in wilderness zones.",
              "options": [
                "TRUE",
                "FALSE",
                "NOT GIVEN"
              ],
              "answer": "FALSE",
              "explanation": "The text states they 'avoid critical feeding grounds to stay away from human activity.'",
              "location": "Paragraph 2, Line 4"
            },
            {
              "num": 24,
              "type": "TFNG",
              "text": "Zoning policies allow unlimited visitor access to all parts of the wilderness.",
              "options": [
                "TRUE",
                "FALSE",
                "NOT GIVEN"
              ],
              "answer": "FALSE",
              "explanation": "Zoning policies keep 'certain parts of the wilderness... completely closed to the public'.",
              "location": "Paragraph 3, Line 3"
            },
            {
              "num": 25,
              "type": "TFNG",
              "text": "Educating tourists on low-impact principles is one way to manage wilderness areas.",
              "options": [
                "TRUE",
                "FALSE",
                "NOT GIVEN"
              ],
              "answer": "TRUE",
              "explanation": "The text mentions 'educating tourists on low-impact principles' as one of the strategies.",
              "location": "Paragraph 3, Line 2"
            },
            {
              "num": 26,
              "type": "TFNG",
              "text": "Wilderness tourism never brings any economic benefits to local communities.",
              "options": [
                "TRUE",
                "FALSE",
                "NOT GIVEN"
              ],
              "answer": "FALSE",
              "explanation": "The text states it 'can provide economic benefits to local communities.'",
              "location": "Paragraph 4, Line 1"
            }
          ]
        },
        {
          "title": "Passage 3: Flawed Beauty: Toughened Glass",
          "text": "<p>Toughened glass, also known as tempered glass, is a type of safety glass processed by controlled thermal or chemical treatments to increase its strength compared with normal glass. Tempering puts the outer surfaces into compression and the interior into tension. Such stresses cause the glass, when broken, to crumble into small granular chunks instead of splintering into jagged shards. The granular chunks are less likely to cause injury.</p>\n        <p>However, toughened glass has a hidden vulnerability: spontaneous shattering. This occurs without any apparent impact or load, causing panels of glass to suddenly burst. The primary culprit behind this phenomenon is nickel sulphide (NiS) inclusion. During the glass manufacturing process, nickel contaminants can react with sulphur to form microscopic nickel sulphide stones. These stones are trapped inside the glass.</p>\n        <p>The problem arises because nickel sulphide can exist in two phases: a high-temperature alpha phase and a low-temperature beta phase. At high temperatures during manufacturing, NiS is in the alpha phase. When the glass is rapidly cooled (quenched) to create tempering, the NiS stone is locked in its high-temperature phase. Over time, at room temperature, the stone slowly converts back to its larger beta phase. This expansion creates localized tensile stresses that can overcome the glass's strength, causing a catastrophic failure.</p>\n        <p>To prevent spontaneous shattering, manufacturers use a process called heat soaking. Finished glass panels are placed in an oven and heated to around 290°C for several hours. This heat accelerates the phase transition of any nickel sulphide inclusions, causing panels containing them to shatter inside the oven rather than on a building facade. While heat soaking is effective, it increases manufacturing costs and is not 100% foolproof, as some defective panels may still survive the test.</p>",
          "questions": [
            {
              "num": 27,
              "type": "MCQ",
              "text": "What is toughened glass designed to do when it breaks?",
              "options": [
                "A. Remain completely intact in its frame",
                "B. Crumble into small granular chunks",
                "C. Splinter into long, sharp shards",
                "D. Dissolve into microscopic dust"
              ],
              "answer": "B",
              "explanation": "The text states: 'Such stresses cause the glass, when broken, to crumble into small granular chunks instead of splintering into jagged shards.'",
              "location": "Paragraph 1, Line 3"
            },
            {
              "num": 28,
              "type": "MCQ",
              "text": "What causes spontaneous shattering in toughened glass?",
              "options": [
                "A. Sudden changes in wind speed",
                "B. Microscopic nickel sulphide inclusions",
                "C. Excessive load placed on the glass",
                "D. Impurities in the silica sand"
              ],
              "answer": "B",
              "explanation": "The text says: 'The primary culprit behind this phenomenon is nickel sulphide (NiS) inclusion.'",
              "location": "Paragraph 2, Line 3"
            },
            {
              "num": 29,
              "type": "MCQ",
              "text": "Why do nickel sulphide stones expand at room temperature?",
              "options": [
                "A. They absorb moisture from the air",
                "B. They undergo a phase transition from alpha to beta phase",
                "C. They react with sunlight passing through the glass",
                "D. They dissolve due to internal tensile stress"
              ],
              "answer": "B",
              "explanation": "The text explains: 'Over time, at room temperature, the stone slowly converts back to its larger beta phase.'",
              "location": "Paragraph 3, Line 3"
            },
            {
              "num": 30,
              "type": "MCQ",
              "text": "What is the purpose of the heat soaking process?",
              "options": [
                "A. To double the strength of the glass",
                "B. To cause defective panels to shatter safely in the oven",
                "C. To remove all nickel contaminants from the glass",
                "D. To cool the glass slowly after tempering"
              ],
              "answer": "B",
              "explanation": "The text states: 'This heat accelerates the phase transition... causing panels containing them to shatter inside the oven rather than on a building facade.'",
              "location": "Paragraph 4, Line 3"
            },
            {
              "num": 31,
              "type": "FILL",
              "text": "Tempering puts the outer surfaces of glass into _________.",
              "answer": "compression",
              "explanation": "The text says 'Tempering puts the outer surfaces into compression'.",
              "location": "Paragraph 1, Line 2"
            },
            {
              "num": 32,
              "type": "FILL",
              "text": "The interior of tempered glass is kept in a state of _________.",
              "answer": "tension",
              "explanation": "The text says 'and the interior into tension'.",
              "location": "Paragraph 1, Line 2"
            },
            {
              "num": 33,
              "type": "FILL",
              "text": "Nickel contaminants react with _________ to form NiS stones.",
              "answer": "sulphur",
              "explanation": "The text states 'nickel contaminants can react with sulphur to form microscopic nickel sulphide stones.'",
              "location": "Paragraph 2, Line 4"
            },
            {
              "num": 34,
              "type": "FILL",
              "text": "The high-temperature form of NiS is known as the _________ phase.",
              "answer": "alpha",
              "explanation": "The text mentions 'a high-temperature alpha phase'.",
              "location": "Paragraph 3, Line 1"
            },
            {
              "num": 35,
              "type": "FILL",
              "text": "The low-temperature form of NiS is known as the _________ phase.",
              "answer": "beta",
              "explanation": "The text mentions 'a low-temperature beta phase'.",
              "location": "Paragraph 3, Line 1"
            },
            {
              "num": 36,
              "type": "TFNG",
              "text": "Spontaneous shattering is always triggered by a physical blow.",
              "options": [
                "TRUE",
                "FALSE",
                "NOT GIVEN"
              ],
              "answer": "FALSE",
              "explanation": "The text says spontaneous shattering 'occurs without any apparent impact or load'.",
              "location": "Paragraph 2, Line 2"
            },
            {
              "num": 37,
              "type": "TFNG",
              "text": "Nickel sulphide inclusions are visible to the naked eye.",
              "options": [
                "TRUE",
                "FALSE",
                "NOT GIVEN"
              ],
              "answer": "FALSE",
              "explanation": "The text describes them as 'microscopic nickel sulphide stones.'",
              "location": "Paragraph 2, Line 4"
            },
            {
              "num": 38,
              "type": "TFNG",
              "text": "Heat soaking requires heating glass panels to around 290°C.",
              "options": [
                "TRUE",
                "FALSE",
                "NOT GIVEN"
              ],
              "answer": "TRUE",
              "explanation": "The text states they are 'placed in an oven and heated to around 290°C'.",
              "location": "Paragraph 4, Line 2"
            },
            {
              "num": 39,
              "type": "TFNG",
              "text": "Heat soaking guarantees that a glass panel will never shatter spontaneously.",
              "options": [
                "TRUE",
                "FALSE",
                "NOT GIVEN"
              ],
              "answer": "FALSE",
              "explanation": "The text states it 'is not 100% foolproof, as some defective panels may still survive'.",
              "location": "Paragraph 4, Line 4"
            },
            {
              "num": 40,
              "type": "TFNG",
              "text": "Heat soaking increases the total cost of manufacturing toughened glass.",
              "options": [
                "TRUE",
                "FALSE",
                "NOT GIVEN"
              ],
              "answer": "TRUE",
              "explanation": "The text says 'it increases manufacturing costs'.",
              "location": "Paragraph 4, Line 4"
            }
          ]
        }
      ]
    },
    "writing": {
      "tasks": []
    }
  },
  "2": {
    "title": "Cambridge IELTS 18 — Test 2",
    "book": "IELTS 18",
    "listening": {
      "sections": [
        {
          "id": 1,
          "title": "Part 1: Sports Centre Membership",
          "description": "A woman enquires about joining a local sports centre.",
          "audio": "audio/IELTS_18_Test_2_Part1.m4a",
          "transcript": "<p><b>Receptionist:</b> Good afternoon, Riverside Sports Centre. How can I help?</p><p><b>Woman:</b> Hi, I'd like some information about membership. I moved to the area recently and I'm looking for a gym.</p><p><b>Receptionist:</b> Of course. We have three membership options. A basic membership is £28 per month and gives you access to the gym and swimming pool. A premium membership at £42 per month adds group fitness classes. And our family package is £75 per month for two adults and up to three children under 16.</p><p><b>Woman:</b> I'd probably just need the basic membership. Do you have any off-peak options?</p><p><b>Receptionist:</b> We do have an off-peak basic membership for £20 per month — that's access between 9 am and 4 pm on weekdays only.</p><p><b>Woman:</b> That could work. Is there a joining fee?</p><p><b>Receptionist:</b> Yes, there's a one-off joining fee of £15. But if you sign up online this month, we're waiving that.</p><p><b>Woman:</b> That's good to know. What equipment does the gym have?</p><p><b>Receptionist:</b> We have 40 treadmills, free weights up to 50kg, resistance machines, and a dedicated stretch area. We also have a sauna and steam room included in all memberships.</p>",
          "questions": [
            {
              "num": 1,
              "type": "FILL",
              "text": "Basic monthly membership fee: £_________",
              "answer": "28",
              "explanation": "The receptionist says 'A basic membership is £28 per month'."
            },
            {
              "num": 2,
              "type": "FILL",
              "text": "Premium membership monthly fee: £_________",
              "answer": "42",
              "explanation": "The receptionist says 'A premium membership at £42 per month'."
            },
            {
              "num": 3,
              "type": "FILL",
              "text": "Family package monthly fee: £_________",
              "answer": "75",
              "explanation": "The receptionist says 'our family package is £75 per month'."
            },
            {
              "num": 4,
              "type": "FILL",
              "text": "Off-peak membership monthly fee: £_________",
              "answer": "20",
              "explanation": "The receptionist says 'off-peak basic membership for £20 per month'."
            },
            {
              "num": 5,
              "type": "MCQ",
              "text": "The off-peak membership allows access:",
              "options": [
                "A. On weekends only",
                "B. Between 9am–4pm on weekdays",
                "C. After 6pm on weekdays",
                "D. All day on Saturdays"
              ],
              "answer": "B",
              "explanation": "The receptionist says 'access between 9 am and 4 pm on weekdays only'."
            },
            {
              "num": 6,
              "type": "FILL",
              "text": "One-off joining fee: £_________",
              "answer": "15",
              "explanation": "The receptionist says 'a one-off joining fee of £15'."
            },
            {
              "num": 7,
              "type": "MCQ",
              "text": "How can the joining fee be waived?",
              "options": [
                "A. By bringing a friend",
                "B. By signing up for 12 months",
                "C. By signing up online this month",
                "D. By coming in person"
              ],
              "answer": "C",
              "explanation": "The receptionist says 'if you sign up online this month, we're waiving that'."
            },
            {
              "num": 8,
              "type": "FILL",
              "text": "Number of treadmills in the gym: _________",
              "answer": "40",
              "explanation": "The receptionist says 'We have 40 treadmills'."
            },
            {
              "num": 9,
              "type": "FILL",
              "text": "Maximum weight of free weights available: _________ kg",
              "answer": "50",
              "explanation": "The receptionist says 'free weights up to 50kg'."
            },
            {
              "num": 10,
              "type": "MCQ",
              "text": "Which of these is included in ALL memberships?",
              "options": [
                "A. Group fitness classes",
                "B. Sauna and steam room",
                "C. Personal training sessions",
                "D. Tennis court access"
              ],
              "answer": "B",
              "explanation": "The receptionist says 'sauna and steam room included in all memberships'."
            }
          ]
        },
        {
          "id": 2,
          "title": "Part 2: Volunteering Opportunities at a Nature Reserve",
          "description": "A coordinator describes volunteering opportunities at Greenwater Nature Reserve.",
          "audio": "audio/IELTS_18_Test_2_Part2.m4a",
          "transcript": "<p><b>Coordinator:</b> Welcome, everyone, and thank you for coming to find out about volunteering at Greenwater Nature Reserve. We have a range of roles available, and I hope there's something here that will interest all of you.</p><p><b>Coordinator:</b> The most popular role is path maintenance — this involves clearing overgrown vegetation, repairing fences and maintaining walking trails so they're safe and accessible. You'd work in small teams of four to six people, and it's quite physically demanding.</p><p><b>Coordinator:</b> We also need people for our visitor centre — greeting visitors, answering questions, selling merchandise. This is better suited to those who prefer indoor work.</p><p><b>Coordinator:</b> Then there's wildlife monitoring — recording bird sightings, mammal tracks and plant surveys. This role requires some prior knowledge of local species, or we can arrange training.</p>",
          "questions": [
            {
              "num": 11,
              "type": "MCQ",
              "text": "What is the most popular volunteering role?",
              "options": [
                "A. Wildlife monitoring",
                "B. Visitor centre work",
                "C. Path maintenance",
                "D. Event organisation"
              ],
              "answer": "C",
              "explanation": "The coordinator says 'The most popular role is path maintenance'."
            },
            {
              "num": 12,
              "type": "MCQ",
              "text": "Path maintenance involves:",
              "options": [
                "A. Planting new trees",
                "B. Clearing vegetation and repairing fences",
                "C. Conducting ecological surveys",
                "D. Photographing wildlife"
              ],
              "answer": "B",
              "explanation": "The coordinator says 'clearing overgrown vegetation, repairing fences and maintaining walking trails'."
            },
            {
              "num": 13,
              "type": "FILL",
              "text": "Path maintenance teams consist of _________ to six people.",
              "answer": "four",
              "explanation": "The coordinator says 'small teams of four to six people'."
            },
            {
              "num": 14,
              "type": "MCQ",
              "text": "The visitor centre role is described as better suited to those who prefer:",
              "options": [
                "A. Outdoor work",
                "B. Working alone",
                "C. Indoor work",
                "D. Physical labour"
              ],
              "answer": "C",
              "explanation": "The coordinator says 'This is better suited to those who prefer indoor work'."
            },
            {
              "num": 15,
              "type": "MCQ",
              "text": "Which of these does the wildlife monitoring role involve?",
              "options": [
                "A. Recording bird sightings",
                "B. Guiding visitors on walks",
                "C. Maintaining equipment",
                "D. Fundraising"
              ],
              "answer": "A",
              "explanation": "The coordinator mentions 'recording bird sightings, mammal tracks and plant surveys'."
            },
            {
              "num": 16,
              "type": "MCQ",
              "text": "For the wildlife monitoring role, what does the reserve offer to those without prior knowledge?",
              "options": [
                "A. Extra pay",
                "B. A reduced workload",
                "C. Training",
                "D. Supervision by a ranger"
              ],
              "answer": "C",
              "explanation": "The coordinator says 'we can arrange training'."
            },
            {
              "num": 17,
              "type": "FILL",
              "text": "Path maintenance is described as quite physically _________.",
              "answer": "demanding",
              "explanation": "The coordinator says 'it's quite physically demanding'."
            },
            {
              "num": 18,
              "type": "MCQ",
              "text": "In the visitor centre, volunteers:",
              "options": [
                "A. Lead guided tours",
                "B. Conduct scientific research",
                "C. Answer questions and sell merchandise",
                "D. Manage social media accounts"
              ],
              "answer": "C",
              "explanation": "The coordinator says 'greeting visitors, answering questions, selling merchandise'."
            },
            {
              "num": 19,
              "type": "FILL",
              "text": "The nature reserve is called Greenwater Nature _________.",
              "answer": "Reserve",
              "explanation": "The coordinator introduces 'Greenwater Nature Reserve'."
            },
            {
              "num": 20,
              "type": "MCQ",
              "text": "What types of wildlife are recorded in the monitoring role?",
              "options": [
                "A. Birds only",
                "B. Insects and reptiles",
                "C. Birds, mammals and plants",
                "D. Marine life"
              ],
              "answer": "C",
              "explanation": "The coordinator says 'bird sightings, mammal tracks and plant surveys'."
            }
          ]
        },
        {
          "id": 3,
          "title": "Part 3: University Assignment on Packaging Waste",
          "description": "Two students discuss their assignment on reducing packaging waste in the food industry.",
          "audio": "audio/IELTS_18_Test_2_Part3.m4a",
          "transcript": "<p><b>Sam:</b> So I've been looking at the data on packaging waste and it's staggering. Supermarkets generate millions of tonnes annually.</p><p><b>Priya:</b> I know. But some companies are making real progress. Have you looked at the refill model where customers bring their own containers?</p><p><b>Sam:</b> Yes, it works well in smaller, independent stores but the logistics for large supermarket chains are very complex.</p><p><b>Priya:</b> One study found that the biggest obstacle was consumer behaviour rather than technology.</p><p><b>Sam:</b> That makes sense. There's also the issue of food safety regulations which limit what packaging materials can be replaced.</p><p><b>Priya:</b> For our assignment, I think we should focus on the policy angle — what governments can do to incentivise businesses to change.</p>",
          "questions": [
            {
              "num": 21,
              "type": "MCQ",
              "text": "What does Sam find staggering about the data?",
              "options": [
                "A. The cost of packaging",
                "B. The amount of packaging waste supermarkets generate",
                "C. The lack of recycling facilities",
                "D. Consumer spending on packaged goods"
              ],
              "answer": "B",
              "explanation": "Sam says 'Supermarkets generate millions of tonnes annually'."
            },
            {
              "num": 22,
              "type": "FILL",
              "text": "In the refill model, customers bring their own _________.",
              "answer": "containers",
              "explanation": "Priya mentions 'customers bring their own containers'."
            },
            {
              "num": 23,
              "type": "MCQ",
              "text": "Where does the refill model work well, according to Sam?",
              "options": [
                "A. In large supermarket chains",
                "B. In smaller, independent stores",
                "C. In online retail",
                "D. In hospital canteens"
              ],
              "answer": "B",
              "explanation": "Sam says 'it works well in smaller, independent stores'."
            },
            {
              "num": 24,
              "type": "MCQ",
              "text": "What did one study identify as the biggest obstacle to reducing packaging waste?",
              "options": [
                "A. Lack of technology",
                "B. High production costs",
                "C. Consumer behaviour",
                "D. Government regulations"
              ],
              "answer": "C",
              "explanation": "Priya says 'the biggest obstacle was consumer behaviour rather than technology'."
            },
            {
              "num": 25,
              "type": "FILL",
              "text": "Food safety _________ limit what packaging materials can be replaced.",
              "answer": "regulations",
              "explanation": "Sam says 'food safety regulations which limit what packaging materials can be replaced'."
            },
            {
              "num": 26,
              "type": "MCQ",
              "text": "For their assignment, Priya suggests focusing on:",
              "options": [
                "A. The technology of sustainable packaging",
                "B. Consumer psychology",
                "C. The policy angle and government incentives",
                "D. International comparisons"
              ],
              "answer": "C",
              "explanation": "Priya says 'focus on the policy angle — what governments can do to incentivise businesses'."
            },
            {
              "num": 27,
              "type": "MCQ",
              "text": "Why is the refill model complex for large supermarket chains?",
              "options": [
                "A. Customers refuse to participate",
                "B. The technology is too expensive",
                "C. The logistics are very complex",
                "D. It is banned in many areas"
              ],
              "answer": "C",
              "explanation": "Sam says 'the logistics for large supermarket chains are very complex'."
            },
            {
              "num": 28,
              "type": "FILL",
              "text": "Their assignment is about reducing packaging waste in the _________ industry.",
              "answer": "food",
              "explanation": "The description says 'reducing packaging waste in the food industry'."
            },
            {
              "num": 29,
              "type": "MCQ",
              "text": "Sam is looking at data relating to:",
              "options": [
                "A. Air pollution",
                "B. Packaging waste",
                "C. Energy consumption",
                "D. Water use"
              ],
              "answer": "B",
              "explanation": "Sam says 'I've been looking at the data on packaging waste'."
            },
            {
              "num": 30,
              "type": "MCQ",
              "text": "What is one issue Sam raises about replacing packaging materials?",
              "options": [
                "A. Consumer preference for plastic",
                "B. Food safety regulations",
                "C. High import costs",
                "D. Lack of supplier options"
              ],
              "answer": "B",
              "explanation": "Sam mentions 'food safety regulations which limit what packaging materials can be replaced'."
            }
          ]
        },
        {
          "id": 4,
          "title": "Part 4: The Psychology of Colour",
          "description": "A lecture on how colour influences human behaviour and perception.",
          "audio": "audio/IELTS_18_Test_2_Part4.m4a",
          "transcript": "<p><b>Lecturer:</b> Today I want to examine the psychology of colour — specifically, how different colours affect our mood, behaviour and decision-making.</p><p><b>Lecturer:</b> Let's begin with red. Studies have consistently shown that red raises blood pressure and increases heart rate. In competitive sports, athletes wearing red have been found to win more frequently. This led researchers to conclude that red signals dominance and aggression.</p><p><b>Lecturer:</b> Blue, by contrast, is associated with calm and trustworthiness. That's why you'll notice that most banks and financial institutions use blue in their branding. Studies have shown that people are more productive in blue-painted rooms.</p><p><b>Lecturer:</b> Yellow is a complex colour. While it's associated with happiness and optimism in Western cultures, it can also cause feelings of anxiety and frustration when overused. Interior designers advise against using yellow in rooms where people need to concentrate.</p><p><b>Lecturer:</b> Green is perceived as restful and is strongly linked to nature. Hospitals have increasingly used green in waiting rooms to help reduce patient anxiety. Research has also shown that people make faster and more accurate decisions in the presence of green.</p>",
          "questions": [
            {
              "num": 31,
              "type": "MCQ",
              "text": "What physiological effects does red have, according to studies?",
              "options": [
                "A. Lowers blood pressure and slows heart rate",
                "B. Raises blood pressure and increases heart rate",
                "C. Reduces stress and tension",
                "D. Improves focus and concentration"
              ],
              "answer": "B",
              "explanation": "The lecturer says 'red raises blood pressure and increases heart rate'."
            },
            {
              "num": 32,
              "type": "MCQ",
              "text": "In competitive sports, athletes wearing red:",
              "options": [
                "A. Were more likely to be injured",
                "B. Performed worse in team events",
                "C. Won more frequently",
                "D. Showed greater endurance"
              ],
              "answer": "C",
              "explanation": "The lecturer says 'athletes wearing red have been found to win more frequently'."
            },
            {
              "num": 33,
              "type": "FILL",
              "text": "Researchers concluded that red signals dominance and _________.",
              "answer": "aggression",
              "explanation": "The lecturer says 'red signals dominance and aggression'."
            },
            {
              "num": 34,
              "type": "MCQ",
              "text": "Blue is associated with:",
              "options": [
                "A. Excitement and energy",
                "B. Calm and trustworthiness",
                "C. Sadness and loss",
                "D. Danger and caution"
              ],
              "answer": "B",
              "explanation": "The lecturer says 'Blue...is associated with calm and trustworthiness'."
            },
            {
              "num": 35,
              "type": "MCQ",
              "text": "Why do banks and financial institutions use blue in their branding?",
              "options": [
                "A. It is the cheapest colour to print",
                "B. It is associated with calm and trust",
                "C. It is the most visible colour",
                "D. Regulations require it"
              ],
              "answer": "B",
              "explanation": "The lecturer connects blue's association with trust to bank branding."
            },
            {
              "num": 36,
              "type": "FILL",
              "text": "People are more _________ in blue-painted rooms.",
              "answer": "productive",
              "explanation": "The lecturer says 'people are more productive in blue-painted rooms'."
            },
            {
              "num": 37,
              "type": "MCQ",
              "text": "What feelings can yellow cause when overused?",
              "options": [
                "A. Sadness and depression",
                "B. Anxiety and frustration",
                "C. Calm and serenity",
                "D. Aggression and anger"
              ],
              "answer": "B",
              "explanation": "The lecturer says yellow 'can also cause feelings of anxiety and frustration when overused'."
            },
            {
              "num": 38,
              "type": "MCQ",
              "text": "Where do interior designers advise against using yellow?",
              "options": [
                "A. In bedrooms",
                "B. In children's nurseries",
                "C. In rooms where people need to concentrate",
                "D. In dining rooms"
              ],
              "answer": "C",
              "explanation": "The lecturer says 'Interior designers advise against using yellow in rooms where people need to concentrate'."
            },
            {
              "num": 39,
              "type": "FILL",
              "text": "Green is perceived as restful and is strongly linked to _________.",
              "answer": "nature",
              "explanation": "The lecturer says 'Green is perceived as restful and is strongly linked to nature'."
            },
            {
              "num": 40,
              "type": "MCQ",
              "text": "Research on green shows that people:",
              "options": [
                "A. Sleep longer in green rooms",
                "B. Eat less in green environments",
                "C. Make faster and more accurate decisions",
                "D. Feel warmer in green spaces"
              ],
              "answer": "C",
              "explanation": "The lecturer says 'people make faster and more accurate decisions in the presence of green'."
            }
          ]
        }
      ]
    },
    "reading": {
      "passages": [
        {
          "title": "Passage 1: Stonehenge Construction",
          "text": "<p>Stonehenge is one of the world's most famous prehistoric monuments, located on Salisbury Plain in Wiltshire, England. It consists of a ring of standing stones, each around 13 feet high, 7 feet wide, and weighing about 25 tons. Archaeologists believe it was constructed in several phases, starting around 3000 BC and continuing until 1500 BC.</p>\n       <p>The monument's purpose remains a subject of intense debate. Early theories suggested it was a druid temple, but modern research indicates it was built long before the druids existed. Today, many researchers agree that Stonehenge served as an astronomical observatory, aligned with the sunrises of the summer solstice and sunsets of the winter solstice.</p>\n       <p>The construction techniques used by the prehistoric builders are equally fascinating. The stones are of two main types: larger sarsens and smaller bluestones. The sarsens were transported from the Marlborough Downs, about 20 miles away. The bluestones, however, came from the Preseli Hills in Wales, over 140 miles away. How these massive stones were moved across such distances without modern technology remains a mystery, though theories suggest sledges, rollers, or water transport were used.</p>",
          "questions": [
            {
              "num": 1,
              "type": "FILL",
              "text": "_________ is one of the world's most famous prehistoric monuments, located on Salisbury Plain in Wiltshire, England",
              "answer": "stonehenge",
              "explanation": "The passage notes that the stonehenge is essential in this context.",
              "location": "Paragraph 1, Sentence 1"
            },
            {
              "num": 2,
              "type": "TFNG",
              "text": "The monument's purpose remains a subject of intense debate",
              "options": [
                "TRUE",
                "FALSE",
                "NOT GIVEN"
              ],
              "answer": "TRUE",
              "explanation": "The statement directly matches the text: \"The monument's purpose remains a subject of intense debate\".",
              "location": "Paragraph 2, Sentence 1"
            },
            {
              "num": 3,
              "type": "MCQ",
              "text": "According to paragraph 3, what is the main finding regarding Stonehenge?",
              "options": [
                "A. It has a significant negative impact on resources",
                "B. It represents a key advancement in the field",
                "C. It has been widely criticized by modern researchers",
                "D. It is no longer considered relevant"
              ],
              "answer": "B",
              "explanation": "The text confirms that this development is a major advancement: \"The construction techniques used by the prehistoric builders are equally fascinating\".",
              "location": "Paragraph 3, Sentence 1"
            },
            {
              "num": 4,
              "type": "FILL",
              "text": "_________ is one of the world's most famous prehistoric monuments, located on Salisbury Plain in Wiltshire, England",
              "answer": "stonehenge",
              "explanation": "The passage notes that the stonehenge is essential in this context.",
              "location": "Paragraph 1, Sentence 1"
            },
            {
              "num": 5,
              "type": "TFNG",
              "text": "The monument's purpose remains a subject of intense debate",
              "options": [
                "TRUE",
                "FALSE",
                "NOT GIVEN"
              ],
              "answer": "TRUE",
              "explanation": "The statement directly matches the text: \"The monument's purpose remains a subject of intense debate\".",
              "location": "Paragraph 2, Sentence 1"
            },
            {
              "num": 6,
              "type": "MCQ",
              "text": "According to paragraph 3, what is the main finding regarding Stonehenge?",
              "options": [
                "A. It has a significant negative impact on resources",
                "B. It represents a key advancement in the field",
                "C. It has been widely criticized by modern researchers",
                "D. It is no longer considered relevant"
              ],
              "answer": "B",
              "explanation": "The text confirms that this development is a major advancement: \"The construction techniques used by the prehistoric builders are equally fascinating\".",
              "location": "Paragraph 3, Sentence 1"
            },
            {
              "num": 7,
              "type": "FILL",
              "text": "_________ is one of the world's most famous prehistoric monuments, located on Salisbury Plain in Wiltshire, England",
              "answer": "stonehenge",
              "explanation": "The passage notes that the stonehenge is essential in this context.",
              "location": "Paragraph 1, Sentence 1"
            },
            {
              "num": 8,
              "type": "TFNG",
              "text": "The monument's purpose remains a subject of intense debate",
              "options": [
                "TRUE",
                "FALSE",
                "NOT GIVEN"
              ],
              "answer": "TRUE",
              "explanation": "The statement directly matches the text: \"The monument's purpose remains a subject of intense debate\".",
              "location": "Paragraph 2, Sentence 1"
            },
            {
              "num": 9,
              "type": "MCQ",
              "text": "According to paragraph 3, what is the main finding regarding Stonehenge?",
              "options": [
                "A. It has a significant negative impact on resources",
                "B. It represents a key advancement in the field",
                "C. It has been widely criticized by modern researchers",
                "D. It is no longer considered relevant"
              ],
              "answer": "B",
              "explanation": "The text confirms that this development is a major advancement: \"The construction techniques used by the prehistoric builders are equally fascinating\".",
              "location": "Paragraph 3, Sentence 1"
            },
            {
              "num": 10,
              "type": "FILL",
              "text": "_________ is one of the world's most famous prehistoric monuments, located on Salisbury Plain in Wiltshire, England",
              "answer": "stonehenge",
              "explanation": "The passage notes that the stonehenge is essential in this context.",
              "location": "Paragraph 1, Sentence 1"
            },
            {
              "num": 11,
              "type": "TFNG",
              "text": "The monument's purpose remains a subject of intense debate",
              "options": [
                "TRUE",
                "FALSE",
                "NOT GIVEN"
              ],
              "answer": "TRUE",
              "explanation": "The statement directly matches the text: \"The monument's purpose remains a subject of intense debate\".",
              "location": "Paragraph 2, Sentence 1"
            },
            {
              "num": 12,
              "type": "MCQ",
              "text": "According to paragraph 3, what is the main finding regarding Stonehenge?",
              "options": [
                "A. It has a significant negative impact on resources",
                "B. It represents a key advancement in the field",
                "C. It has been widely criticized by modern researchers",
                "D. It is no longer considered relevant"
              ],
              "answer": "B",
              "explanation": "The text confirms that this development is a major advancement: \"The construction techniques used by the prehistoric builders are equally fascinating\".",
              "location": "Paragraph 3, Sentence 1"
            },
            {
              "num": 13,
              "type": "FILL",
              "text": "_________ is one of the world's most famous prehistoric monuments, located on Salisbury Plain in Wiltshire, England",
              "answer": "stonehenge",
              "explanation": "The passage notes that the stonehenge is essential in this context.",
              "location": "Paragraph 1, Sentence 1"
            }
          ]
        },
        {
          "title": "Passage 2: Living with Artificial Intelligence",
          "text": "<p>Artificial Intelligence (AI) has integrated rapidly into daily life, transforming industries from healthcare to finance. While AI offers immense benefits, such as accelerated disease diagnosis and automated operations, it also presents significant ethical challenges. The primary concern is data privacy and the collection of vast amounts of personal student and worker information.</p>\n       <p>Another major challenge is bias. Machine learning models are trained on historical data, which often contains human prejudices. If left unchecked, AI algorithms can perpetuate and amplify these biases in hiring, lending, and law enforcement. Experts emphasize that human oversight remains essential to ensure algorithmic fairness.</p>",
          "questions": [
            {
              "num": 14,
              "type": "TFNG",
              "text": "Artificial Intelligence (AI) has integrated rapidly into daily life, transforming industries from healthcare to finance",
              "options": [
                "TRUE",
                "FALSE",
                "NOT GIVEN"
              ],
              "answer": "TRUE",
              "explanation": "The statement directly matches the text: \"Artificial Intelligence (AI) has integrated rapidly into daily life, transforming industries from healthcare to finance\".",
              "location": "Paragraph 1, Sentence 1"
            },
            {
              "num": 15,
              "type": "MCQ",
              "text": "According to paragraph 2, what is the main finding regarding  AI Ethics?",
              "options": [
                "A. It has a significant negative impact on resources",
                "B. It represents a key advancement in the field",
                "C. It has been widely criticized by modern researchers",
                "D. It is no longer considered relevant"
              ],
              "answer": "B",
              "explanation": "The text confirms that this development is a major advancement: \"Another major challenge is bias\".",
              "location": "Paragraph 2, Sentence 1"
            },
            {
              "num": 16,
              "type": "FILL",
              "text": "_________ Intelligence (AI) has integrated rapidly into daily life, transforming industries from healthcare to finance",
              "answer": "artificial",
              "explanation": "The passage notes that the artificial is essential in this context.",
              "location": "Paragraph 1, Sentence 1"
            },
            {
              "num": 17,
              "type": "TFNG",
              "text": "Another major challenge is bias",
              "options": [
                "TRUE",
                "FALSE",
                "NOT GIVEN"
              ],
              "answer": "TRUE",
              "explanation": "The statement directly matches the text: \"Another major challenge is bias\".",
              "location": "Paragraph 2, Sentence 1"
            },
            {
              "num": 18,
              "type": "MCQ",
              "text": "According to paragraph 1, what is the main finding regarding  AI Ethics?",
              "options": [
                "A. It has a significant negative impact on resources",
                "B. It represents a key advancement in the field",
                "C. It has been widely criticized by modern researchers",
                "D. It is no longer considered relevant"
              ],
              "answer": "B",
              "explanation": "The text confirms that this development is a major advancement: \"Artificial Intelligence (AI) has integrated rapidly into daily life, transforming industries from healthcare to finance\".",
              "location": "Paragraph 1, Sentence 1"
            },
            {
              "num": 19,
              "type": "FILL",
              "text": "_________ major challenge is bias",
              "answer": "another",
              "explanation": "The passage notes that the another is essential in this context.",
              "location": "Paragraph 2, Sentence 1"
            },
            {
              "num": 20,
              "type": "TFNG",
              "text": "Artificial Intelligence (AI) has integrated rapidly into daily life, transforming industries from healthcare to finance",
              "options": [
                "TRUE",
                "FALSE",
                "NOT GIVEN"
              ],
              "answer": "TRUE",
              "explanation": "The statement directly matches the text: \"Artificial Intelligence (AI) has integrated rapidly into daily life, transforming industries from healthcare to finance\".",
              "location": "Paragraph 1, Sentence 1"
            },
            {
              "num": 21,
              "type": "MCQ",
              "text": "According to paragraph 2, what is the main finding regarding  AI Ethics?",
              "options": [
                "A. It has a significant negative impact on resources",
                "B. It represents a key advancement in the field",
                "C. It has been widely criticized by modern researchers",
                "D. It is no longer considered relevant"
              ],
              "answer": "B",
              "explanation": "The text confirms that this development is a major advancement: \"Another major challenge is bias\".",
              "location": "Paragraph 2, Sentence 1"
            },
            {
              "num": 22,
              "type": "FILL",
              "text": "_________ Intelligence (AI) has integrated rapidly into daily life, transforming industries from healthcare to finance",
              "answer": "artificial",
              "explanation": "The passage notes that the artificial is essential in this context.",
              "location": "Paragraph 1, Sentence 1"
            },
            {
              "num": 23,
              "type": "TFNG",
              "text": "Another major challenge is bias",
              "options": [
                "TRUE",
                "FALSE",
                "NOT GIVEN"
              ],
              "answer": "TRUE",
              "explanation": "The statement directly matches the text: \"Another major challenge is bias\".",
              "location": "Paragraph 2, Sentence 1"
            },
            {
              "num": 24,
              "type": "MCQ",
              "text": "According to paragraph 1, what is the main finding regarding  AI Ethics?",
              "options": [
                "A. It has a significant negative impact on resources",
                "B. It represents a key advancement in the field",
                "C. It has been widely criticized by modern researchers",
                "D. It is no longer considered relevant"
              ],
              "answer": "B",
              "explanation": "The text confirms that this development is a major advancement: \"Artificial Intelligence (AI) has integrated rapidly into daily life, transforming industries from healthcare to finance\".",
              "location": "Paragraph 1, Sentence 1"
            },
            {
              "num": 25,
              "type": "FILL",
              "text": "_________ major challenge is bias",
              "answer": "another",
              "explanation": "The passage notes that the another is essential in this context.",
              "location": "Paragraph 2, Sentence 1"
            },
            {
              "num": 26,
              "type": "TFNG",
              "text": "Artificial Intelligence (AI) has integrated rapidly into daily life, transforming industries from healthcare to finance",
              "options": [
                "TRUE",
                "FALSE",
                "NOT GIVEN"
              ],
              "answer": "TRUE",
              "explanation": "The statement directly matches the text: \"Artificial Intelligence (AI) has integrated rapidly into daily life, transforming industries from healthcare to finance\".",
              "location": "Paragraph 1, Sentence 1"
            }
          ]
        },
        {
          "title": "Passage 3: The Value of Play in Childhood",
          "text": "<p>Play is a fundamental aspect of childhood, critical for physical, social, and cognitive development. Through play, children learn to interact with others, negotiate rules, and develop problem-solving skills. Recent research shows that unstructured play—where children direct their own activities—is particularly valuable for fostering creativity and emotional resilience.</p>\n       <p>However, modern childhood has seen a decline in unstructured play, replaced by structured activities and screen time. Educators warn that this shift could lead to higher levels of anxiety and a lack of independence in young children, urging parents to prioritize free play.</p>",
          "questions": [
            {
              "num": 27,
              "type": "MCQ",
              "text": "According to paragraph 1, what is the main finding regarding  Value of Play?",
              "options": [
                "A. It has a significant negative impact on resources",
                "B. It represents a key advancement in the field",
                "C. It has been widely criticized by modern researchers",
                "D. It is no longer considered relevant"
              ],
              "answer": "B",
              "explanation": "The text confirms that this development is a major advancement: \"Play is a fundamental aspect of childhood, critical for physical, social, and cognitive development\".",
              "location": "Paragraph 1, Sentence 1"
            },
            {
              "num": 28,
              "type": "FILL",
              "text": "_________ modern childhood has seen a decline in unstructured play, replaced by structured activities and screen time",
              "answer": "however",
              "explanation": "The passage notes that the however is essential in this context.",
              "location": "Paragraph 2, Sentence 1"
            },
            {
              "num": 29,
              "type": "TFNG",
              "text": "Play is a fundamental aspect of childhood, critical for physical, social, and cognitive development",
              "options": [
                "TRUE",
                "FALSE",
                "NOT GIVEN"
              ],
              "answer": "TRUE",
              "explanation": "The statement directly matches the text: \"Play is a fundamental aspect of childhood, critical for physical, social, and cognitive development\".",
              "location": "Paragraph 1, Sentence 1"
            },
            {
              "num": 30,
              "type": "MCQ",
              "text": "According to paragraph 2, what is the main finding regarding  Value of Play?",
              "options": [
                "A. It has a significant negative impact on resources",
                "B. It represents a key advancement in the field",
                "C. It has been widely criticized by modern researchers",
                "D. It is no longer considered relevant"
              ],
              "answer": "B",
              "explanation": "The text confirms that this development is a major advancement: \"However, modern childhood has seen a decline in unstructured play, replaced by structured activities and screen time\".",
              "location": "Paragraph 2, Sentence 1"
            },
            {
              "num": 31,
              "type": "FILL",
              "text": "Play is a _________ aspect of childhood, critical for physical, social, and cognitive development",
              "answer": "fundamental",
              "explanation": "The passage notes that the fundamental is essential in this context.",
              "location": "Paragraph 1, Sentence 1"
            },
            {
              "num": 32,
              "type": "TFNG",
              "text": "However, modern childhood has seen a decline in unstructured play, replaced by structured activities and screen time",
              "options": [
                "TRUE",
                "FALSE",
                "NOT GIVEN"
              ],
              "answer": "TRUE",
              "explanation": "The statement directly matches the text: \"However, modern childhood has seen a decline in unstructured play, replaced by structured activities and screen time\".",
              "location": "Paragraph 2, Sentence 1"
            },
            {
              "num": 33,
              "type": "MCQ",
              "text": "According to paragraph 1, what is the main finding regarding  Value of Play?",
              "options": [
                "A. It has a significant negative impact on resources",
                "B. It represents a key advancement in the field",
                "C. It has been widely criticized by modern researchers",
                "D. It is no longer considered relevant"
              ],
              "answer": "B",
              "explanation": "The text confirms that this development is a major advancement: \"Play is a fundamental aspect of childhood, critical for physical, social, and cognitive development\".",
              "location": "Paragraph 1, Sentence 1"
            },
            {
              "num": 34,
              "type": "FILL",
              "text": "_________ modern childhood has seen a decline in unstructured play, replaced by structured activities and screen time",
              "answer": "however",
              "explanation": "The passage notes that the however is essential in this context.",
              "location": "Paragraph 2, Sentence 1"
            },
            {
              "num": 35,
              "type": "TFNG",
              "text": "Play is a fundamental aspect of childhood, critical for physical, social, and cognitive development",
              "options": [
                "TRUE",
                "FALSE",
                "NOT GIVEN"
              ],
              "answer": "TRUE",
              "explanation": "The statement directly matches the text: \"Play is a fundamental aspect of childhood, critical for physical, social, and cognitive development\".",
              "location": "Paragraph 1, Sentence 1"
            },
            {
              "num": 36,
              "type": "MCQ",
              "text": "According to paragraph 2, what is the main finding regarding  Value of Play?",
              "options": [
                "A. It has a significant negative impact on resources",
                "B. It represents a key advancement in the field",
                "C. It has been widely criticized by modern researchers",
                "D. It is no longer considered relevant"
              ],
              "answer": "B",
              "explanation": "The text confirms that this development is a major advancement: \"However, modern childhood has seen a decline in unstructured play, replaced by structured activities and screen time\".",
              "location": "Paragraph 2, Sentence 1"
            },
            {
              "num": 37,
              "type": "FILL",
              "text": "Play is a _________ aspect of childhood, critical for physical, social, and cognitive development",
              "answer": "fundamental",
              "explanation": "The passage notes that the fundamental is essential in this context.",
              "location": "Paragraph 1, Sentence 1"
            },
            {
              "num": 38,
              "type": "TFNG",
              "text": "However, modern childhood has seen a decline in unstructured play, replaced by structured activities and screen time",
              "options": [
                "TRUE",
                "FALSE",
                "NOT GIVEN"
              ],
              "answer": "TRUE",
              "explanation": "The statement directly matches the text: \"However, modern childhood has seen a decline in unstructured play, replaced by structured activities and screen time\".",
              "location": "Paragraph 2, Sentence 1"
            },
            {
              "num": 39,
              "type": "MCQ",
              "text": "According to paragraph 1, what is the main finding regarding  Value of Play?",
              "options": [
                "A. It has a significant negative impact on resources",
                "B. It represents a key advancement in the field",
                "C. It has been widely criticized by modern researchers",
                "D. It is no longer considered relevant"
              ],
              "answer": "B",
              "explanation": "The text confirms that this development is a major advancement: \"Play is a fundamental aspect of childhood, critical for physical, social, and cognitive development\".",
              "location": "Paragraph 1, Sentence 1"
            },
            {
              "num": 40,
              "type": "FILL",
              "text": "_________ modern childhood has seen a decline in unstructured play, replaced by structured activities and screen time",
              "answer": "however",
              "explanation": "The passage notes that the however is essential in this context.",
              "location": "Paragraph 2, Sentence 1"
            }
          ]
        }
      ]
    },
    "writing": {
      "tasks": []
    }
  },
  "3": {
    "title": "Cambridge IELTS 18 — Test 3",
    "book": "IELTS 18",
    "listening": {
      "sections": [
        {
          "id": 1,
          "title": "Part 1: Garden Centre Enquiry",
          "description": "A woman phones a garden centre to ask about products and delivery options.",
          "audio": "audio/IELTS_18_Test_3_Part1.m4a",
          "transcript": "<p><b>Assistant:</b> Good morning, Green Thumb Garden Centre. How may I help you?</p><p><b>Woman:</b> Hi. I'm planning to redesign my back garden and I'd like some information about your products and services.</p><p><b>Assistant:</b> Of course. What are you looking for?</p><p><b>Woman:</b> I need some topsoil — probably about 20 bags — and some paving slabs. Do you deliver?</p><p><b>Assistant:</b> Yes, we deliver within a 15-mile radius. Delivery is free for orders over £200. Otherwise there's a charge of £12.50.</p><p><b>Woman:</b> Great. And what topsoil do you recommend for a vegetable patch?</p><p><b>Assistant:</b> Our Organic Pro Blend is excellent for vegetables. It's pH-neutral and enriched with composted bark. A 40-litre bag is £6.99.</p><p><b>Woman:</b> And how about the paving slabs?</p><p><b>Assistant:</b> We have three ranges. The Standard Buff range starts at £2.50 per slab. The Sandstone range is £4.80 per slab. And our Premium Granite starts at £8.20 per slab.</p>",
          "questions": [
            {
              "num": 1,
              "type": "FILL",
              "text": "Number of topsoil bags the woman needs: approximately _________",
              "answer": "20",
              "explanation": "The woman says 'probably about 20 bags'."
            },
            {
              "num": 2,
              "type": "FILL",
              "text": "Maximum distance for delivery: _________ miles",
              "answer": "15",
              "explanation": "The assistant says 'within a 15-mile radius'."
            },
            {
              "num": 3,
              "type": "FILL",
              "text": "Minimum order value for free delivery: £_________",
              "answer": "200",
              "explanation": "The assistant says 'Delivery is free for orders over £200'."
            },
            {
              "num": 4,
              "type": "FILL",
              "text": "Delivery charge for orders under the minimum: £_________",
              "answer": "12.50",
              "explanation": "The assistant says 'a charge of £12.50'."
            },
            {
              "num": 5,
              "type": "FILL",
              "text": "Recommended topsoil product: Organic Pro _________",
              "answer": "Blend",
              "explanation": "The assistant recommends 'Our Organic Pro Blend'."
            },
            {
              "num": 6,
              "type": "MCQ",
              "text": "The Organic Pro Blend topsoil is described as:",
              "options": [
                "A. Acidic and clay-based",
                "B. pH-neutral and enriched with composted bark",
                "C. Sandy and free-draining",
                "D. Alkaline and rich in limestone"
              ],
              "answer": "B",
              "explanation": "The assistant says 'It's pH-neutral and enriched with composted bark'."
            },
            {
              "num": 7,
              "type": "FILL",
              "text": "Price of a 40-litre bag of Organic Pro Blend: £_________",
              "answer": "6.99",
              "explanation": "The assistant says 'A 40-litre bag is £6.99'."
            },
            {
              "num": 8,
              "type": "FILL",
              "text": "Price per slab of Standard Buff range: £_________",
              "answer": "2.50",
              "explanation": "The assistant says 'Standard Buff range starts at £2.50 per slab'."
            },
            {
              "num": 9,
              "type": "FILL",
              "text": "Price per slab of Sandstone range: £_________",
              "answer": "4.80",
              "explanation": "The assistant says 'Sandstone range is £4.80 per slab'."
            },
            {
              "num": 10,
              "type": "FILL",
              "text": "Starting price per slab of Premium Granite: £_________",
              "answer": "8.20",
              "explanation": "The assistant says 'Premium Granite starts at £8.20 per slab'."
            }
          ]
        },
        {
          "id": 2,
          "title": "Part 2: Local History Walking Tour",
          "description": "A guide introduces a self-guided walking tour of the historic market town of Brentford.",
          "audio": "audio/IELTS_18_Test_3_Part2.m4a",
          "transcript": "<p><b>Guide:</b> Welcome to the Brentford Heritage Walk. This self-guided tour takes you through over 800 years of local history in approximately 90 minutes.</p><p><b>Guide:</b> You'll begin at the Market Cross in the town square, which dates from 1312. From there, you'll walk north along Church Street to St Mary's Church, which contains one of the finest examples of Norman architecture in the county.</p><p><b>Guide:</b> Continuing east, you'll pass the Old Guildhall — this building served as the town's administrative centre from the 14th century until 1965. It now houses a small museum open Tuesday to Sunday from 10am to 4pm.</p><p><b>Guide:</b> The final stop is the Victorian railway station, built in 1882, which has been beautifully restored. There's a tea room inside if you'd like to rest after the walk.</p>",
          "questions": [
            {
              "num": 11,
              "type": "FILL",
              "text": "The walking tour covers over _________ years of local history.",
              "answer": "800",
              "explanation": "The guide says 'over 800 years of local history'."
            },
            {
              "num": 12,
              "type": "FILL",
              "text": "Approximate duration of the tour: _________ minutes",
              "answer": "90",
              "explanation": "The guide says 'approximately 90 minutes'."
            },
            {
              "num": 13,
              "type": "FILL",
              "text": "The Market Cross dates from _________.",
              "answer": "1312",
              "explanation": "The guide says 'dates from 1312'."
            },
            {
              "num": 14,
              "type": "FILL",
              "text": "The first walk direction from the Market Cross is _________.",
              "answer": "north",
              "explanation": "The guide says 'you'll walk north along Church Street'."
            },
            {
              "num": 15,
              "type": "MCQ",
              "text": "St Mary's Church contains one of the finest examples of:",
              "options": [
                "A. Gothic architecture",
                "B. Tudor architecture",
                "C. Norman architecture",
                "D. Victorian architecture"
              ],
              "answer": "C",
              "explanation": "The guide says 'one of the finest examples of Norman architecture in the county'."
            },
            {
              "num": 16,
              "type": "FILL",
              "text": "The Old Guildhall served as the town's administrative centre until _________.",
              "answer": "1965",
              "explanation": "The guide says 'from the 14th century until 1965'."
            },
            {
              "num": 17,
              "type": "MCQ",
              "text": "The Old Guildhall now houses:",
              "options": [
                "A. A library",
                "B. A small museum",
                "C. A tourist information centre",
                "D. An art gallery"
              ],
              "answer": "B",
              "explanation": "The guide says 'It now houses a small museum'."
            },
            {
              "num": 18,
              "type": "MCQ",
              "text": "The museum at the Old Guildhall is open:",
              "options": [
                "A. Monday to Friday",
                "B. Weekends only",
                "C. Tuesday to Sunday",
                "D. Every day"
              ],
              "answer": "C",
              "explanation": "The guide says 'open Tuesday to Sunday from 10am to 4pm'."
            },
            {
              "num": 19,
              "type": "FILL",
              "text": "The Victorian railway station was built in _________.",
              "answer": "1882",
              "explanation": "The guide says 'built in 1882'."
            },
            {
              "num": 20,
              "type": "MCQ",
              "text": "What facility is available inside the railway station?",
              "options": [
                "A. A gift shop",
                "B. A cinema",
                "C. A tea room",
                "D. A pub"
              ],
              "answer": "C",
              "explanation": "The guide says 'There's a tea room inside'."
            }
          ]
        },
        {
          "id": 3,
          "title": "Part 3: Environmental Studies Project Discussion",
          "description": "Two students, James and Fatima, discuss their joint project on urban heat islands.",
          "audio": "audio/IELTS_18_Test_3_Part3.m4a",
          "transcript": "<p><b>James:</b> I've been reading about urban heat islands — it's more significant than I thought.</p><p><b>Fatima:</b> Same. Cities can be up to 12 degrees warmer than rural areas. The main cause is the replacement of natural vegetation with concrete and asphalt.</p><p><b>James:</b> And dark surfaces absorb so much more heat. There's research showing that painting rooftops white can significantly reduce temperatures.</p><p><b>Fatima:</b> I also found research on green roofs. They absorb heat and also improve air quality. Some cities are mandating them on new buildings.</p><p><b>James:</b> For our project I think we should compare two cities — one with urban greening policies and one without — and analyse the temperature data.</p><p><b>Fatima:</b> Good idea. I suggest we contact the meteorology department for help with data interpretation.</p>",
          "questions": [
            {
              "num": 21,
              "type": "FILL",
              "text": "Cities can be up to _________ degrees warmer than rural areas.",
              "answer": "12",
              "explanation": "Fatima says 'Cities can be up to 12 degrees warmer than rural areas'."
            },
            {
              "num": 22,
              "type": "MCQ",
              "text": "The main cause of urban heat islands is:",
              "options": [
                "A. Increased traffic emissions",
                "B. Replacement of vegetation with concrete and asphalt",
                "C. Higher population density",
                "D. Industrial waste heat"
              ],
              "answer": "B",
              "explanation": "Fatima says 'The main cause is the replacement of natural vegetation with concrete and asphalt'."
            },
            {
              "num": 23,
              "type": "MCQ",
              "text": "Research shows that painting rooftops white can:",
              "options": [
                "A. Improve air quality",
                "B. Reduce energy costs only",
                "C. Significantly reduce temperatures",
                "D. Lower rainfall levels"
              ],
              "answer": "C",
              "explanation": "James says 'painting rooftops white can significantly reduce temperatures'."
            },
            {
              "num": 24,
              "type": "MCQ",
              "text": "What are green roofs said to improve?",
              "options": [
                "A. Stormwater management",
                "B. Air quality",
                "C. Building insulation",
                "D. Property values"
              ],
              "answer": "B",
              "explanation": "Fatima says green roofs 'improve air quality'."
            },
            {
              "num": 25,
              "type": "MCQ",
              "text": "Some cities are making green roofs:",
              "options": [
                "A. Optional for new buildings",
                "B. Mandatory on new buildings",
                "C. Available only to commercial buildings",
                "D. Subsidised by the government"
              ],
              "answer": "B",
              "explanation": "Fatima says 'Some cities are mandating them on new buildings'."
            },
            {
              "num": 26,
              "type": "MCQ",
              "text": "For their project, James suggests comparing:",
              "options": [
                "A. Urban and rural temperatures",
                "B. Two cities with different greening policies",
                "C. Historical and current climate data",
                "D. Different types of green roofing materials"
              ],
              "answer": "B",
              "explanation": "James says 'compare two cities — one with urban greening policies and one without'."
            },
            {
              "num": 27,
              "type": "FILL",
              "text": "Fatima suggests contacting the _________ department for help with data interpretation.",
              "answer": "meteorology",
              "explanation": "Fatima says 'contact the meteorology department'."
            },
            {
              "num": 28,
              "type": "FILL",
              "text": "Their project topic is urban heat _________.",
              "answer": "islands",
              "explanation": "James says 'I've been reading about urban heat islands'."
            },
            {
              "num": 29,
              "type": "MCQ",
              "text": "Dark surfaces are significant in urban heat islands because they:",
              "options": [
                "A. Reflect sunlight",
                "B. Absorb more heat",
                "C. Create more wind",
                "D. Reduce evaporation"
              ],
              "answer": "B",
              "explanation": "James says 'dark surfaces absorb so much more heat'."
            },
            {
              "num": 30,
              "type": "MCQ",
              "text": "James finds the urban heat island effect:",
              "options": [
                "A. Less important than he thought",
                "B. More significant than he thought",
                "C. Mainly a problem in developing countries",
                "D. Mostly a winter phenomenon"
              ],
              "answer": "B",
              "explanation": "James says 'it's more significant than I thought'."
            }
          ]
        },
        {
          "id": 4,
          "title": "Part 4: The History of Cartography",
          "description": "A lecture on the development of map-making from ancient times to the modern era.",
          "audio": "audio/IELTS_18_Test_3_Part4.m4a",
          "transcript": "<p><b>Lecturer:</b> Today's lecture focuses on the history of cartography — the science and art of making maps.</p><p><b>Lecturer:</b> The oldest known map is a Babylonian clay tablet dating to approximately 600 BC. It depicts the world as a flat disc surrounded by ocean — a common belief at the time.</p><p><b>Lecturer:</b> Greek scholars made enormous contributions. Eratosthenes, in around 240 BC, calculated the circumference of the Earth with remarkable accuracy using the angles of shadows at different locations at the same time of year. His estimates were within 2% of modern measurements.</p><p><b>Lecturer:</b> Ptolemy, in the 2nd century AD, created a world map based on a grid system of latitude and longitude — a concept that remains fundamental to cartography today. However, Ptolemy's maps contained significant errors, particularly in the representation of Asia.</p><p><b>Lecturer:</b> European cartography stagnated somewhat during the Middle Ages when many scholars returned to depicting the Earth as flat. It was the Age of Exploration in the 15th and 16th centuries that reinvigorated cartographic development as navigators required ever more accurate charts...</p>",
          "questions": [
            {
              "num": 31,
              "type": "FILL",
              "text": "The oldest known map is a Babylonian clay tablet dating to approximately _________ BC.",
              "answer": "600",
              "explanation": "The lecturer says 'dating to approximately 600 BC'."
            },
            {
              "num": 32,
              "type": "MCQ",
              "text": "The Babylonian map depicted the world as:",
              "options": [
                "A. A globe",
                "B. A flat disc surrounded by ocean",
                "C. A cylinder",
                "D. A series of islands"
              ],
              "answer": "B",
              "explanation": "The lecturer says 'a flat disc surrounded by ocean'."
            },
            {
              "num": 33,
              "type": "FILL",
              "text": "Eratosthenes calculated the circumference of the Earth around _________ BC.",
              "answer": "240",
              "explanation": "The lecturer says 'in around 240 BC'."
            },
            {
              "num": 34,
              "type": "MCQ",
              "text": "Eratosthenes calculated the circumference of the Earth using:",
              "options": [
                "A. Astronomical observations of stars",
                "B. Angles of shadows at different locations",
                "C. Ocean depth measurements",
                "D. The positions of rivers"
              ],
              "answer": "B",
              "explanation": "The lecturer says 'using the angles of shadows at different locations at the same time of year'."
            },
            {
              "num": 35,
              "type": "FILL",
              "text": "Eratosthenes' estimates were within _________ % of modern measurements.",
              "answer": "2",
              "explanation": "The lecturer says 'within 2% of modern measurements'."
            },
            {
              "num": 36,
              "type": "FILL",
              "text": "Ptolemy created his world map in the _________ century AD.",
              "answer": "2nd",
              "explanation": "The lecturer says 'Ptolemy, in the 2nd century AD'."
            },
            {
              "num": 37,
              "type": "MCQ",
              "text": "Ptolemy's world map was based on:",
              "options": [
                "A. Sailors' verbal accounts",
                "B. A grid system of latitude and longitude",
                "C. Wind patterns",
                "D. Coastline observations"
              ],
              "answer": "B",
              "explanation": "The lecturer says 'a grid system of latitude and longitude'."
            },
            {
              "num": 38,
              "type": "MCQ",
              "text": "Ptolemy's maps contained significant errors especially in the representation of:",
              "options": [
                "A. Europe",
                "B. Africa",
                "C. Asia",
                "D. America"
              ],
              "answer": "C",
              "explanation": "The lecturer says 'particularly in the representation of Asia'."
            },
            {
              "num": 39,
              "type": "MCQ",
              "text": "European cartography during the Middle Ages:",
              "options": [
                "A. Advanced significantly",
                "B. Stagnated and returned to flat-earth depictions",
                "C. Was mainly led by Arab scholars",
                "D. Focused primarily on ocean mapping"
              ],
              "answer": "B",
              "explanation": "The lecturer says 'European cartography stagnated somewhat during the Middle Ages'."
            },
            {
              "num": 40,
              "type": "MCQ",
              "text": "What reinvigorated cartographic development in the 15th and 16th centuries?",
              "options": [
                "A. The invention of the printing press",
                "B. The Age of Exploration",
                "C. The Renaissance art movement",
                "D. The founding of universities"
              ],
              "answer": "B",
              "explanation": "The lecturer says 'the Age of Exploration in the 15th and 16th centuries that reinvigorated cartographic development'."
            }
          ]
        }
      ]
    },
    "reading": {
      "passages": [
        {
          "title": "Passage 1: Materials to take us beyond concrete",
          "text": "<p>Concrete is the most widely used man-made material on Earth, but its production is a massive source of carbon emissions. Scientists are researching sustainable alternatives, including timber, hempcrete, and geopolymers. Cross-laminated timber (CLT) is particularly promising as it stores carbon sequestered by trees, offering a renewable structural material.</p>",
          "questions": [
            {
              "num": 1,
              "type": "FILL",
              "text": "_________ is the most widely used man-made material on Earth, but its production is a massive source of carbon emissions",
              "answer": "concrete",
              "explanation": "The passage notes that the concrete is essential in this context.",
              "location": "Paragraph 1, Sentence 1"
            },
            {
              "num": 2,
              "type": "TFNG",
              "text": "Concrete is the most widely used man-made material on Earth, but its production is a massive source of carbon emissions",
              "options": [
                "TRUE",
                "FALSE",
                "NOT GIVEN"
              ],
              "answer": "TRUE",
              "explanation": "The statement directly matches the text: \"Concrete is the most widely used man-made material on Earth, but its production is a massive source of carbon emissions\".",
              "location": "Paragraph 1, Sentence 1"
            },
            {
              "num": 3,
              "type": "MCQ",
              "text": "According to paragraph 1, what is the main finding regarding Concrete Alternatives?",
              "options": [
                "A. It has a significant negative impact on resources",
                "B. It represents a key advancement in the field",
                "C. It has been widely criticized by modern researchers",
                "D. It is no longer considered relevant"
              ],
              "answer": "B",
              "explanation": "The text confirms that this development is a major advancement: \"Concrete is the most widely used man-made material on Earth, but its production is a massive source of carbon emissions\".",
              "location": "Paragraph 1, Sentence 1"
            },
            {
              "num": 4,
              "type": "FILL",
              "text": "_________ is the most widely used man-made material on Earth, but its production is a massive source of carbon emissions",
              "answer": "concrete",
              "explanation": "The passage notes that the concrete is essential in this context.",
              "location": "Paragraph 1, Sentence 1"
            },
            {
              "num": 5,
              "type": "TFNG",
              "text": "Concrete is the most widely used man-made material on Earth, but its production is a massive source of carbon emissions",
              "options": [
                "TRUE",
                "FALSE",
                "NOT GIVEN"
              ],
              "answer": "TRUE",
              "explanation": "The statement directly matches the text: \"Concrete is the most widely used man-made material on Earth, but its production is a massive source of carbon emissions\".",
              "location": "Paragraph 1, Sentence 1"
            },
            {
              "num": 6,
              "type": "MCQ",
              "text": "According to paragraph 1, what is the main finding regarding Concrete Alternatives?",
              "options": [
                "A. It has a significant negative impact on resources",
                "B. It represents a key advancement in the field",
                "C. It has been widely criticized by modern researchers",
                "D. It is no longer considered relevant"
              ],
              "answer": "B",
              "explanation": "The text confirms that this development is a major advancement: \"Concrete is the most widely used man-made material on Earth, but its production is a massive source of carbon emissions\".",
              "location": "Paragraph 1, Sentence 1"
            },
            {
              "num": 7,
              "type": "FILL",
              "text": "_________ is the most widely used man-made material on Earth, but its production is a massive source of carbon emissions",
              "answer": "concrete",
              "explanation": "The passage notes that the concrete is essential in this context.",
              "location": "Paragraph 1, Sentence 1"
            },
            {
              "num": 8,
              "type": "TFNG",
              "text": "Concrete is the most widely used man-made material on Earth, but its production is a massive source of carbon emissions",
              "options": [
                "TRUE",
                "FALSE",
                "NOT GIVEN"
              ],
              "answer": "TRUE",
              "explanation": "The statement directly matches the text: \"Concrete is the most widely used man-made material on Earth, but its production is a massive source of carbon emissions\".",
              "location": "Paragraph 1, Sentence 1"
            },
            {
              "num": 9,
              "type": "MCQ",
              "text": "According to paragraph 1, what is the main finding regarding Concrete Alternatives?",
              "options": [
                "A. It has a significant negative impact on resources",
                "B. It represents a key advancement in the field",
                "C. It has been widely criticized by modern researchers",
                "D. It is no longer considered relevant"
              ],
              "answer": "B",
              "explanation": "The text confirms that this development is a major advancement: \"Concrete is the most widely used man-made material on Earth, but its production is a massive source of carbon emissions\".",
              "location": "Paragraph 1, Sentence 1"
            },
            {
              "num": 10,
              "type": "FILL",
              "text": "_________ is the most widely used man-made material on Earth, but its production is a massive source of carbon emissions",
              "answer": "concrete",
              "explanation": "The passage notes that the concrete is essential in this context.",
              "location": "Paragraph 1, Sentence 1"
            },
            {
              "num": 11,
              "type": "TFNG",
              "text": "Concrete is the most widely used man-made material on Earth, but its production is a massive source of carbon emissions",
              "options": [
                "TRUE",
                "FALSE",
                "NOT GIVEN"
              ],
              "answer": "TRUE",
              "explanation": "The statement directly matches the text: \"Concrete is the most widely used man-made material on Earth, but its production is a massive source of carbon emissions\".",
              "location": "Paragraph 1, Sentence 1"
            },
            {
              "num": 12,
              "type": "MCQ",
              "text": "According to paragraph 1, what is the main finding regarding Concrete Alternatives?",
              "options": [
                "A. It has a significant negative impact on resources",
                "B. It represents a key advancement in the field",
                "C. It has been widely criticized by modern researchers",
                "D. It is no longer considered relevant"
              ],
              "answer": "B",
              "explanation": "The text confirms that this development is a major advancement: \"Concrete is the most widely used man-made material on Earth, but its production is a massive source of carbon emissions\".",
              "location": "Paragraph 1, Sentence 1"
            },
            {
              "num": 13,
              "type": "FILL",
              "text": "_________ is the most widely used man-made material on Earth, but its production is a massive source of carbon emissions",
              "answer": "concrete",
              "explanation": "The passage notes that the concrete is essential in this context.",
              "location": "Paragraph 1, Sentence 1"
            }
          ]
        },
        {
          "title": "Passage 2: The History of the Bicycle",
          "text": "<p>The bicycle has evolved significantly since its invention in the early 19th century. The earliest version, the 'dandy horse,' had no pedals and was propelled by the rider pushing their feet against the ground. The addition of pedals, chains, and pneumatic tires transformed the bicycle into a highly efficient mode of transport.</p>",
          "questions": [
            {
              "num": 14,
              "type": "TFNG",
              "text": "The bicycle has evolved significantly since its invention in the early 19th century",
              "options": [
                "TRUE",
                "FALSE",
                "NOT GIVEN"
              ],
              "answer": "TRUE",
              "explanation": "The statement directly matches the text: \"The bicycle has evolved significantly since its invention in the early 19th century\".",
              "location": "Paragraph 1, Sentence 1"
            },
            {
              "num": 15,
              "type": "MCQ",
              "text": "According to paragraph 1, what is the main finding regarding  History of Bicycle?",
              "options": [
                "A. It has a significant negative impact on resources",
                "B. It represents a key advancement in the field",
                "C. It has been widely criticized by modern researchers",
                "D. It is no longer considered relevant"
              ],
              "answer": "B",
              "explanation": "The text confirms that this development is a major advancement: \"The bicycle has evolved significantly since its invention in the early 19th century\".",
              "location": "Paragraph 1, Sentence 1"
            },
            {
              "num": 16,
              "type": "FILL",
              "text": "The _________ has evolved significantly since its invention in the early 19th century",
              "answer": "bicycle",
              "explanation": "The passage notes that the bicycle is essential in this context.",
              "location": "Paragraph 1, Sentence 1"
            },
            {
              "num": 17,
              "type": "TFNG",
              "text": "The bicycle has evolved significantly since its invention in the early 19th century",
              "options": [
                "TRUE",
                "FALSE",
                "NOT GIVEN"
              ],
              "answer": "TRUE",
              "explanation": "The statement directly matches the text: \"The bicycle has evolved significantly since its invention in the early 19th century\".",
              "location": "Paragraph 1, Sentence 1"
            },
            {
              "num": 18,
              "type": "MCQ",
              "text": "According to paragraph 1, what is the main finding regarding  History of Bicycle?",
              "options": [
                "A. It has a significant negative impact on resources",
                "B. It represents a key advancement in the field",
                "C. It has been widely criticized by modern researchers",
                "D. It is no longer considered relevant"
              ],
              "answer": "B",
              "explanation": "The text confirms that this development is a major advancement: \"The bicycle has evolved significantly since its invention in the early 19th century\".",
              "location": "Paragraph 1, Sentence 1"
            },
            {
              "num": 19,
              "type": "FILL",
              "text": "The _________ has evolved significantly since its invention in the early 19th century",
              "answer": "bicycle",
              "explanation": "The passage notes that the bicycle is essential in this context.",
              "location": "Paragraph 1, Sentence 1"
            },
            {
              "num": 20,
              "type": "TFNG",
              "text": "The bicycle has evolved significantly since its invention in the early 19th century",
              "options": [
                "TRUE",
                "FALSE",
                "NOT GIVEN"
              ],
              "answer": "TRUE",
              "explanation": "The statement directly matches the text: \"The bicycle has evolved significantly since its invention in the early 19th century\".",
              "location": "Paragraph 1, Sentence 1"
            },
            {
              "num": 21,
              "type": "MCQ",
              "text": "According to paragraph 1, what is the main finding regarding  History of Bicycle?",
              "options": [
                "A. It has a significant negative impact on resources",
                "B. It represents a key advancement in the field",
                "C. It has been widely criticized by modern researchers",
                "D. It is no longer considered relevant"
              ],
              "answer": "B",
              "explanation": "The text confirms that this development is a major advancement: \"The bicycle has evolved significantly since its invention in the early 19th century\".",
              "location": "Paragraph 1, Sentence 1"
            },
            {
              "num": 22,
              "type": "FILL",
              "text": "The _________ has evolved significantly since its invention in the early 19th century",
              "answer": "bicycle",
              "explanation": "The passage notes that the bicycle is essential in this context.",
              "location": "Paragraph 1, Sentence 1"
            },
            {
              "num": 23,
              "type": "TFNG",
              "text": "The bicycle has evolved significantly since its invention in the early 19th century",
              "options": [
                "TRUE",
                "FALSE",
                "NOT GIVEN"
              ],
              "answer": "TRUE",
              "explanation": "The statement directly matches the text: \"The bicycle has evolved significantly since its invention in the early 19th century\".",
              "location": "Paragraph 1, Sentence 1"
            },
            {
              "num": 24,
              "type": "MCQ",
              "text": "According to paragraph 1, what is the main finding regarding  History of Bicycle?",
              "options": [
                "A. It has a significant negative impact on resources",
                "B. It represents a key advancement in the field",
                "C. It has been widely criticized by modern researchers",
                "D. It is no longer considered relevant"
              ],
              "answer": "B",
              "explanation": "The text confirms that this development is a major advancement: \"The bicycle has evolved significantly since its invention in the early 19th century\".",
              "location": "Paragraph 1, Sentence 1"
            },
            {
              "num": 25,
              "type": "FILL",
              "text": "The _________ has evolved significantly since its invention in the early 19th century",
              "answer": "bicycle",
              "explanation": "The passage notes that the bicycle is essential in this context.",
              "location": "Paragraph 1, Sentence 1"
            },
            {
              "num": 26,
              "type": "TFNG",
              "text": "The bicycle has evolved significantly since its invention in the early 19th century",
              "options": [
                "TRUE",
                "FALSE",
                "NOT GIVEN"
              ],
              "answer": "TRUE",
              "explanation": "The statement directly matches the text: \"The bicycle has evolved significantly since its invention in the early 19th century\".",
              "location": "Paragraph 1, Sentence 1"
            }
          ]
        },
        {
          "title": "Passage 3: Cognitive Mapping in Animals",
          "text": "<p>Many animal species exhibit remarkable navigational abilities, suggesting they possess 'cognitive maps' of their environments. Honeybees, for instance, can navigate back to their hives using the angle of the sun and landmarks. Research shows that homing pigeons utilize magnetic fields and scent maps to navigate across hundreds of miles.</p>",
          "questions": [
            {
              "num": 27,
              "type": "MCQ",
              "text": "According to paragraph 1, what is the main finding regarding  Animal Mapping?",
              "options": [
                "A. It has a significant negative impact on resources",
                "B. It represents a key advancement in the field",
                "C. It has been widely criticized by modern researchers",
                "D. It is no longer considered relevant"
              ],
              "answer": "B",
              "explanation": "The text confirms that this development is a major advancement: \"Many animal species exhibit remarkable navigational abilities, suggesting they possess 'cognitive maps' of their environments\".",
              "location": "Paragraph 1, Sentence 1"
            },
            {
              "num": 28,
              "type": "FILL",
              "text": "Many _________ species exhibit remarkable navigational abilities, suggesting they possess 'cognitive maps' of their environments",
              "answer": "animal",
              "explanation": "The passage notes that the animal is essential in this context.",
              "location": "Paragraph 1, Sentence 1"
            },
            {
              "num": 29,
              "type": "TFNG",
              "text": "Many animal species exhibit remarkable navigational abilities, suggesting they possess 'cognitive maps' of their environments",
              "options": [
                "TRUE",
                "FALSE",
                "NOT GIVEN"
              ],
              "answer": "TRUE",
              "explanation": "The statement directly matches the text: \"Many animal species exhibit remarkable navigational abilities, suggesting they possess 'cognitive maps' of their environments\".",
              "location": "Paragraph 1, Sentence 1"
            },
            {
              "num": 30,
              "type": "MCQ",
              "text": "According to paragraph 1, what is the main finding regarding  Animal Mapping?",
              "options": [
                "A. It has a significant negative impact on resources",
                "B. It represents a key advancement in the field",
                "C. It has been widely criticized by modern researchers",
                "D. It is no longer considered relevant"
              ],
              "answer": "B",
              "explanation": "The text confirms that this development is a major advancement: \"Many animal species exhibit remarkable navigational abilities, suggesting they possess 'cognitive maps' of their environments\".",
              "location": "Paragraph 1, Sentence 1"
            },
            {
              "num": 31,
              "type": "FILL",
              "text": "Many _________ species exhibit remarkable navigational abilities, suggesting they possess 'cognitive maps' of their environments",
              "answer": "animal",
              "explanation": "The passage notes that the animal is essential in this context.",
              "location": "Paragraph 1, Sentence 1"
            },
            {
              "num": 32,
              "type": "TFNG",
              "text": "Many animal species exhibit remarkable navigational abilities, suggesting they possess 'cognitive maps' of their environments",
              "options": [
                "TRUE",
                "FALSE",
                "NOT GIVEN"
              ],
              "answer": "TRUE",
              "explanation": "The statement directly matches the text: \"Many animal species exhibit remarkable navigational abilities, suggesting they possess 'cognitive maps' of their environments\".",
              "location": "Paragraph 1, Sentence 1"
            },
            {
              "num": 33,
              "type": "MCQ",
              "text": "According to paragraph 1, what is the main finding regarding  Animal Mapping?",
              "options": [
                "A. It has a significant negative impact on resources",
                "B. It represents a key advancement in the field",
                "C. It has been widely criticized by modern researchers",
                "D. It is no longer considered relevant"
              ],
              "answer": "B",
              "explanation": "The text confirms that this development is a major advancement: \"Many animal species exhibit remarkable navigational abilities, suggesting they possess 'cognitive maps' of their environments\".",
              "location": "Paragraph 1, Sentence 1"
            },
            {
              "num": 34,
              "type": "FILL",
              "text": "Many _________ species exhibit remarkable navigational abilities, suggesting they possess 'cognitive maps' of their environments",
              "answer": "animal",
              "explanation": "The passage notes that the animal is essential in this context.",
              "location": "Paragraph 1, Sentence 1"
            },
            {
              "num": 35,
              "type": "TFNG",
              "text": "Many animal species exhibit remarkable navigational abilities, suggesting they possess 'cognitive maps' of their environments",
              "options": [
                "TRUE",
                "FALSE",
                "NOT GIVEN"
              ],
              "answer": "TRUE",
              "explanation": "The statement directly matches the text: \"Many animal species exhibit remarkable navigational abilities, suggesting they possess 'cognitive maps' of their environments\".",
              "location": "Paragraph 1, Sentence 1"
            },
            {
              "num": 36,
              "type": "MCQ",
              "text": "According to paragraph 1, what is the main finding regarding  Animal Mapping?",
              "options": [
                "A. It has a significant negative impact on resources",
                "B. It represents a key advancement in the field",
                "C. It has been widely criticized by modern researchers",
                "D. It is no longer considered relevant"
              ],
              "answer": "B",
              "explanation": "The text confirms that this development is a major advancement: \"Many animal species exhibit remarkable navigational abilities, suggesting they possess 'cognitive maps' of their environments\".",
              "location": "Paragraph 1, Sentence 1"
            },
            {
              "num": 37,
              "type": "FILL",
              "text": "Many _________ species exhibit remarkable navigational abilities, suggesting they possess 'cognitive maps' of their environments",
              "answer": "animal",
              "explanation": "The passage notes that the animal is essential in this context.",
              "location": "Paragraph 1, Sentence 1"
            },
            {
              "num": 38,
              "type": "TFNG",
              "text": "Many animal species exhibit remarkable navigational abilities, suggesting they possess 'cognitive maps' of their environments",
              "options": [
                "TRUE",
                "FALSE",
                "NOT GIVEN"
              ],
              "answer": "TRUE",
              "explanation": "The statement directly matches the text: \"Many animal species exhibit remarkable navigational abilities, suggesting they possess 'cognitive maps' of their environments\".",
              "location": "Paragraph 1, Sentence 1"
            },
            {
              "num": 39,
              "type": "MCQ",
              "text": "According to paragraph 1, what is the main finding regarding  Animal Mapping?",
              "options": [
                "A. It has a significant negative impact on resources",
                "B. It represents a key advancement in the field",
                "C. It has been widely criticized by modern researchers",
                "D. It is no longer considered relevant"
              ],
              "answer": "B",
              "explanation": "The text confirms that this development is a major advancement: \"Many animal species exhibit remarkable navigational abilities, suggesting they possess 'cognitive maps' of their environments\".",
              "location": "Paragraph 1, Sentence 1"
            },
            {
              "num": 40,
              "type": "FILL",
              "text": "Many _________ species exhibit remarkable navigational abilities, suggesting they possess 'cognitive maps' of their environments",
              "answer": "animal",
              "explanation": "The passage notes that the animal is essential in this context.",
              "location": "Paragraph 1, Sentence 1"
            }
          ]
        }
      ]
    },
    "writing": {
      "tasks": []
    }
  },
  "4": {
    "title": "Cambridge IELTS 18 — Test 4",
    "book": "IELTS 18",
    "listening": {
      "sections": [
        {
          "id": 1,
          "title": "Part 1: Childcare Centre Enquiry",
          "description": "A father phones a childcare centre to ask about places for his daughter.",
          "audio": "audio/IELTS_18_Test_4_Part1.m4a",
          "transcript": "<p><b>Receptionist:</b> Bright Stars Childcare, good morning.</p><p><b>Father:</b> Good morning. I'm looking for a place for my daughter. She's just turned three.</p><p><b>Receptionist:</b> We do have some places for the three-to-four age group. Can I ask a few questions?</p><p><b>Father:</b> Of course.</p><p><b>Receptionist:</b> Would you need full-time or part-time care?</p><p><b>Father:</b> Ideally four days a week, Monday to Thursday.</p><p><b>Receptionist:</b> Our opening hours are 7:30am to 6pm. The daily rate for the three-to-four group is £58 per day. You're also entitled to 15 hours of government-funded childcare per week, which reduces the cost significantly.</p><p><b>Father:</b> Good. Is there a waiting list?</p><p><b>Receptionist:</b> Yes, there's currently a waiting list of approximately six weeks for that age group. If you'd like to register, I'll need your daughter's full name, date of birth, and a deposit of £100 to secure her place.</p>",
          "questions": [
            {
              "num": 1,
              "type": "FILL",
              "text": "Age of the father's daughter: _________ years old",
              "answer": "three",
              "explanation": "The father says 'She's just turned three'."
            },
            {
              "num": 2,
              "type": "MCQ",
              "text": "How many days per week does the father need care?",
              "options": [
                "A. Three",
                "B. Four",
                "C. Five",
                "D. Two"
              ],
              "answer": "B",
              "explanation": "The father says 'four days a week, Monday to Thursday'."
            },
            {
              "num": 3,
              "type": "FILL",
              "text": "Opening time: _________am",
              "answer": "7:30",
              "explanation": "The receptionist says 'opening hours are 7:30am to 6pm'."
            },
            {
              "num": 4,
              "type": "FILL",
              "text": "Daily rate for the 3–4 age group: £_________",
              "answer": "58",
              "explanation": "The receptionist says 'daily rate for the three-to-four group is £58 per day'."
            },
            {
              "num": 5,
              "type": "FILL",
              "text": "Government-funded childcare hours per week: _________",
              "answer": "15",
              "explanation": "The receptionist mentions '15 hours of government-funded childcare per week'."
            },
            {
              "num": 6,
              "type": "FILL",
              "text": "Current waiting list duration: approximately _________ weeks",
              "answer": "six",
              "explanation": "The receptionist says 'approximately six weeks'."
            },
            {
              "num": 7,
              "type": "FILL",
              "text": "Amount required as deposit: £_________",
              "answer": "100",
              "explanation": "The receptionist says 'a deposit of £100 to secure her place'."
            },
            {
              "num": 8,
              "type": "MCQ",
              "text": "To register, the father needs to provide his daughter's:",
              "options": [
                "A. Medical records",
                "B. Full name and date of birth",
                "C. Previous childcare history",
                "D. School records"
              ],
              "answer": "B",
              "explanation": "The receptionist says 'your daughter's full name, date of birth'."
            },
            {
              "num": 9,
              "type": "FILL",
              "text": "Days the father requires care: Monday to _________",
              "answer": "Thursday",
              "explanation": "The father says 'Monday to Thursday'."
            },
            {
              "num": 10,
              "type": "FILL",
              "text": "Closing time of the centre: _________ pm",
              "answer": "6",
              "explanation": "The receptionist says 'opening hours are 7:30am to 6pm'."
            }
          ]
        },
        {
          "id": 2,
          "title": "Part 2: Arts Festival Announcement",
          "description": "A local radio presenter describes the upcoming Hartfield Arts Festival.",
          "audio": "audio/IELTS_18_Test_4_Part2.m4a",
          "transcript": "<p><b>Presenter:</b> Coming up this weekend is the Hartfield Arts Festival — three days of music, theatre, art exhibitions and family activities in the heart of our town.</p><p><b>Presenter:</b> The festival runs from Friday the 14th through to Sunday the 16th. Gates open at 10am each day and close at 10pm Friday and Saturday, and 8pm on Sunday. Entry is £12 for adults, £6 for children under 14, and free for under-fives.</p><p><b>Presenter:</b> Highlights include a photography exhibition in the Town Hall featuring work by local amateur photographers — that runs all three days. On Saturday evening there's a special outdoor concert at 7pm featuring the Hartfield Community Orchestra. And on Sunday afternoon there's a storytelling session for children aged 5 to 10 starting at 2pm in the Meadow Tent.</p>",
          "questions": [
            {
              "num": 11,
              "type": "FILL",
              "text": "Number of days the festival runs: _________",
              "answer": "three",
              "explanation": "The presenter says 'three days of music, theatre...'."
            },
            {
              "num": 12,
              "type": "FILL",
              "text": "Gates open each day at: _________am",
              "answer": "10",
              "explanation": "The presenter says 'Gates open at 10am each day'."
            },
            {
              "num": 13,
              "type": "FILL",
              "text": "Gate closing time on Friday and Saturday: _________ pm",
              "answer": "10",
              "explanation": "The presenter says 'close at 10pm Friday and Saturday'."
            },
            {
              "num": 14,
              "type": "FILL",
              "text": "Gate closing time on Sunday: _________ pm",
              "answer": "8",
              "explanation": "The presenter says '8pm on Sunday'."
            },
            {
              "num": 15,
              "type": "FILL",
              "text": "Adult entry price: £_________",
              "answer": "12",
              "explanation": "The presenter says 'Entry is £12 for adults'."
            },
            {
              "num": 16,
              "type": "FILL",
              "text": "Entry price for children under 14: £_________",
              "answer": "6",
              "explanation": "The presenter says '£6 for children under 14'."
            },
            {
              "num": 17,
              "type": "MCQ",
              "text": "The photography exhibition features work by:",
              "options": [
                "A. Professional international photographers",
                "B. Students from local schools",
                "C. Local amateur photographers",
                "D. Museum-curated artists"
              ],
              "answer": "C",
              "explanation": "The presenter says 'featuring work by local amateur photographers'."
            },
            {
              "num": 18,
              "type": "FILL",
              "text": "The outdoor concert on Saturday evening starts at: _________ pm",
              "answer": "7",
              "explanation": "The presenter says 'at 7pm'."
            },
            {
              "num": 19,
              "type": "FILL",
              "text": "The children's storytelling session on Sunday starts at: _________ pm",
              "answer": "2",
              "explanation": "The presenter says 'starting at 2pm'."
            },
            {
              "num": 20,
              "type": "FILL",
              "text": "The storytelling session is for children aged 5 to _________.",
              "answer": "10",
              "explanation": "The presenter says 'aged 5 to 10'."
            }
          ]
        },
        {
          "id": 3,
          "title": "Part 3: Research Methods Discussion",
          "description": "A student, Megan, discusses her dissertation research methods with her tutor.",
          "audio": "audio/IELTS_18_Test_4_Part3.m4a",
          "transcript": "<p><b>Tutor:</b> So Megan, how are you getting on with designing your methodology?</p><p><b>Megan:</b> I've decided to use a mixed methods approach — both quantitative and qualitative data.</p><p><b>Tutor:</b> Good. What's your rationale for that?</p><p><b>Megan:</b> The questionnaires will give me the broad patterns — participation rates, demographic data. But I also want to understand the 'why' behind the data, so I'll conduct six in-depth interviews.</p><p><b>Tutor:</b> That sounds well-reasoned. What's your sample size for the questionnaires?</p><p><b>Megan:</b> I'm aiming for 150 responses. My supervisor said anything below 100 wouldn't be statistically significant.</p><p><b>Tutor:</b> Have you considered the issue of bias in self-reporting?</p><p><b>Megan:</b> Yes — it's a significant limitation. People tend to give socially desirable answers. I'll acknowledge that in the limitations section.</p>",
          "questions": [
            {
              "num": 21,
              "type": "FILL",
              "text": "Megan's research uses a _________ methods approach.",
              "answer": "mixed",
              "explanation": "Megan says 'I've decided to use a mixed methods approach'."
            },
            {
              "num": 22,
              "type": "MCQ",
              "text": "Megan will use questionnaires to collect:",
              "options": [
                "A. Detailed personal narratives",
                "B. Broad patterns and demographic data",
                "C. Experimental results",
                "D. Expert opinions"
              ],
              "answer": "B",
              "explanation": "Megan says 'The questionnaires will give me the broad patterns — participation rates, demographic data'."
            },
            {
              "num": 23,
              "type": "FILL",
              "text": "Number of in-depth interviews Megan plans to conduct: _________",
              "answer": "six",
              "explanation": "Megan says 'I'll conduct six in-depth interviews'."
            },
            {
              "num": 24,
              "type": "FILL",
              "text": "Megan's target questionnaire sample size: _________",
              "answer": "150",
              "explanation": "Megan says 'I'm aiming for 150 responses'."
            },
            {
              "num": 25,
              "type": "FILL",
              "text": "Minimum statistically significant sample size, according to her supervisor: _________",
              "answer": "100",
              "explanation": "Megan says 'anything below 100 wouldn't be statistically significant'."
            },
            {
              "num": 26,
              "type": "MCQ",
              "text": "What significant limitation does Megan acknowledge?",
              "options": [
                "A. Small interview sample",
                "B. Bias in self-reporting",
                "C. Lack of secondary sources",
                "D. Time constraints"
              ],
              "answer": "B",
              "explanation": "Megan says 'The issue of bias in self-reporting...it's a significant limitation'."
            },
            {
              "num": 27,
              "type": "MCQ",
              "text": "Why do people give socially desirable answers in self-reporting?",
              "options": [
                "A. They misunderstand the questions",
                "B. They want to appear favourably",
                "C. The questionnaires are too long",
                "D. They lack relevant experience"
              ],
              "answer": "B",
              "explanation": "The concept of 'socially desirable answers' means people respond in a way that makes them look good."
            },
            {
              "num": 28,
              "type": "MCQ",
              "text": "The purpose of the in-depth interviews is to understand:",
              "options": [
                "A. How many people participate",
                "B. The 'why' behind the data",
                "C. Statistical significance",
                "D. Demographic breakdowns"
              ],
              "answer": "B",
              "explanation": "Megan says 'I also want to understand the \"why\" behind the data'."
            },
            {
              "num": 29,
              "type": "FILL",
              "text": "Megan will acknowledge the bias limitation in the _________ section.",
              "answer": "limitations",
              "explanation": "Megan says 'I'll acknowledge that in the limitations section'."
            },
            {
              "num": 30,
              "type": "MCQ",
              "text": "The tutor describes Megan's rationale as:",
              "options": [
                "A. Overly complicated",
                "B. Poorly justified",
                "C. Well-reasoned",
                "D. Too ambitious"
              ],
              "answer": "C",
              "explanation": "The tutor says 'That sounds well-reasoned'."
            }
          ]
        },
        {
          "id": 4,
          "title": "Part 4: Animal Migration Patterns",
          "description": "A lecture on the navigational abilities of migrating animals.",
          "audio": "audio/IELTS_18_Test_4_Part4.m4a",
          "transcript": "<p><b>Lecturer:</b> Today we turn to one of the most remarkable phenomena in the natural world: animal migration. Specifically, I want to focus on the extraordinary navigational abilities that allow animals to travel thousands of kilometres with astonishing precision.</p><p><b>Lecturer:</b> Let's start with birds. Many species migrate at night using the stars for orientation — a behaviour known as stellar navigation. Studies with European robins showed they can detect the Earth's magnetic field and use it as a compass. Interestingly, this magnetic sense appears to be located in a protein in the birds' eyes called cryptochrome.</p><p><b>Lecturer:</b> Sea turtles have an equally impressive system. Loggerhead turtles hatch on beaches in Florida and instinctively swim east into the Atlantic. They then complete a circular migration route, returning years later to the very beach where they were born to lay their own eggs — accurate to within metres.</p><p><b>Lecturer:</b> Monarch butterflies achieve an extraordinary migration from Canada to Mexico — over 4,000 kilometres — despite the fact that no individual butterfly makes the round trip. Each generation completes only part of the journey, yet somehow the population navigates to the same overwintering sites in the mountains of central Mexico year after year...</p>",
          "questions": [
            {
              "num": 31,
              "type": "MCQ",
              "text": "Many bird species migrate at night using:",
              "options": [
                "A. Sun position",
                "B. Memory of landscape",
                "C. The stars for orientation",
                "D. Wind direction"
              ],
              "answer": "C",
              "explanation": "The lecturer says 'migrate at night using the stars for orientation'."
            },
            {
              "num": 32,
              "type": "FILL",
              "text": "Navigation using stars is known as _________ navigation.",
              "answer": "stellar",
              "explanation": "The lecturer says 'a behaviour known as stellar navigation'."
            },
            {
              "num": 33,
              "type": "MCQ",
              "text": "Studies with European robins showed they can detect:",
              "options": [
                "A. Ultraviolet light",
                "B. Changes in air pressure",
                "C. The Earth's magnetic field",
                "D. Infrasound"
              ],
              "answer": "C",
              "explanation": "The lecturer says 'they can detect the Earth's magnetic field and use it as a compass'."
            },
            {
              "num": 34,
              "type": "FILL",
              "text": "The protein in birds' eyes associated with magnetic sensing is called _________.",
              "answer": "cryptochrome",
              "explanation": "The lecturer says 'a protein in the birds' eyes called cryptochrome'."
            },
            {
              "num": 35,
              "type": "FILL",
              "text": "Loggerhead turtles hatch on beaches in _________ and swim east.",
              "answer": "Florida",
              "explanation": "The lecturer says 'Loggerhead turtles hatch on beaches in Florida'."
            },
            {
              "num": 36,
              "type": "MCQ",
              "text": "What do loggerhead turtles return to when they reach adulthood?",
              "options": [
                "A. The warmest beach they can find",
                "B. The beach where they were born",
                "C. Any suitable nesting site",
                "D. The feeding grounds of their parents"
              ],
              "answer": "B",
              "explanation": "The lecturer says 'returning years later to the very beach where they were born'."
            },
            {
              "num": 37,
              "type": "FILL",
              "text": "Turtles return to their birth beach accurate to within _________.",
              "answer": "metres",
              "explanation": "The lecturer says 'accurate to within metres'."
            },
            {
              "num": 38,
              "type": "FILL",
              "text": "Monarch butterflies migrate from Canada to Mexico — over _________ kilometres.",
              "answer": "4,000",
              "explanation": "The lecturer says 'over 4,000 kilometres'."
            },
            {
              "num": 39,
              "type": "MCQ",
              "text": "Which individual monarch butterfly completes the full round trip migration?",
              "options": [
                "A. The eldest butterfly in the group",
                "B. Only female butterflies",
                "C. No individual butterfly does",
                "D. Only the largest and strongest"
              ],
              "answer": "C",
              "explanation": "The lecturer says 'no individual butterfly makes the round trip'."
            },
            {
              "num": 40,
              "type": "FILL",
              "text": "Monarchs overwinter in the mountains of central _________.",
              "answer": "Mexico",
              "explanation": "The lecturer says 'overwintering sites in the mountains of central Mexico'."
            }
          ]
        }
      ]
    },
    "reading": {
      "passages": [
        {
          "title": "Passage 1: Green Roofs",
          "text": "<p>Green roofs, which are covered with vegetation, offer numerous environmental benefits. They help reduce the urban heat island effect by cooling buildings and absorbing solar radiation. Additionally, green roofs manage stormwater runoff by absorbing rainfall, reducing the load on city drainage systems.</p>",
          "questions": [
            {
              "num": 1,
              "type": "FILL",
              "text": "Green _________ which are covered with vegetation, offer numerous environmental benefits",
              "answer": "roofs",
              "explanation": "The passage notes that the roofs is essential in this context.",
              "location": "Paragraph 1, Sentence 1"
            },
            {
              "num": 2,
              "type": "TFNG",
              "text": "Green roofs, which are covered with vegetation, offer numerous environmental benefits",
              "options": [
                "TRUE",
                "FALSE",
                "NOT GIVEN"
              ],
              "answer": "TRUE",
              "explanation": "The statement directly matches the text: \"Green roofs, which are covered with vegetation, offer numerous environmental benefits\".",
              "location": "Paragraph 1, Sentence 1"
            },
            {
              "num": 3,
              "type": "MCQ",
              "text": "According to paragraph 1, what is the main finding regarding Green Roofs?",
              "options": [
                "A. It has a significant negative impact on resources",
                "B. It represents a key advancement in the field",
                "C. It has been widely criticized by modern researchers",
                "D. It is no longer considered relevant"
              ],
              "answer": "B",
              "explanation": "The text confirms that this development is a major advancement: \"Green roofs, which are covered with vegetation, offer numerous environmental benefits\".",
              "location": "Paragraph 1, Sentence 1"
            },
            {
              "num": 4,
              "type": "FILL",
              "text": "Green _________ which are covered with vegetation, offer numerous environmental benefits",
              "answer": "roofs",
              "explanation": "The passage notes that the roofs is essential in this context.",
              "location": "Paragraph 1, Sentence 1"
            },
            {
              "num": 5,
              "type": "TFNG",
              "text": "Green roofs, which are covered with vegetation, offer numerous environmental benefits",
              "options": [
                "TRUE",
                "FALSE",
                "NOT GIVEN"
              ],
              "answer": "TRUE",
              "explanation": "The statement directly matches the text: \"Green roofs, which are covered with vegetation, offer numerous environmental benefits\".",
              "location": "Paragraph 1, Sentence 1"
            },
            {
              "num": 6,
              "type": "MCQ",
              "text": "According to paragraph 1, what is the main finding regarding Green Roofs?",
              "options": [
                "A. It has a significant negative impact on resources",
                "B. It represents a key advancement in the field",
                "C. It has been widely criticized by modern researchers",
                "D. It is no longer considered relevant"
              ],
              "answer": "B",
              "explanation": "The text confirms that this development is a major advancement: \"Green roofs, which are covered with vegetation, offer numerous environmental benefits\".",
              "location": "Paragraph 1, Sentence 1"
            },
            {
              "num": 7,
              "type": "FILL",
              "text": "Green _________ which are covered with vegetation, offer numerous environmental benefits",
              "answer": "roofs",
              "explanation": "The passage notes that the roofs is essential in this context.",
              "location": "Paragraph 1, Sentence 1"
            },
            {
              "num": 8,
              "type": "TFNG",
              "text": "Green roofs, which are covered with vegetation, offer numerous environmental benefits",
              "options": [
                "TRUE",
                "FALSE",
                "NOT GIVEN"
              ],
              "answer": "TRUE",
              "explanation": "The statement directly matches the text: \"Green roofs, which are covered with vegetation, offer numerous environmental benefits\".",
              "location": "Paragraph 1, Sentence 1"
            },
            {
              "num": 9,
              "type": "MCQ",
              "text": "According to paragraph 1, what is the main finding regarding Green Roofs?",
              "options": [
                "A. It has a significant negative impact on resources",
                "B. It represents a key advancement in the field",
                "C. It has been widely criticized by modern researchers",
                "D. It is no longer considered relevant"
              ],
              "answer": "B",
              "explanation": "The text confirms that this development is a major advancement: \"Green roofs, which are covered with vegetation, offer numerous environmental benefits\".",
              "location": "Paragraph 1, Sentence 1"
            },
            {
              "num": 10,
              "type": "FILL",
              "text": "Green _________ which are covered with vegetation, offer numerous environmental benefits",
              "answer": "roofs",
              "explanation": "The passage notes that the roofs is essential in this context.",
              "location": "Paragraph 1, Sentence 1"
            },
            {
              "num": 11,
              "type": "TFNG",
              "text": "Green roofs, which are covered with vegetation, offer numerous environmental benefits",
              "options": [
                "TRUE",
                "FALSE",
                "NOT GIVEN"
              ],
              "answer": "TRUE",
              "explanation": "The statement directly matches the text: \"Green roofs, which are covered with vegetation, offer numerous environmental benefits\".",
              "location": "Paragraph 1, Sentence 1"
            },
            {
              "num": 12,
              "type": "MCQ",
              "text": "According to paragraph 1, what is the main finding regarding Green Roofs?",
              "options": [
                "A. It has a significant negative impact on resources",
                "B. It represents a key advancement in the field",
                "C. It has been widely criticized by modern researchers",
                "D. It is no longer considered relevant"
              ],
              "answer": "B",
              "explanation": "The text confirms that this development is a major advancement: \"Green roofs, which are covered with vegetation, offer numerous environmental benefits\".",
              "location": "Paragraph 1, Sentence 1"
            },
            {
              "num": 13,
              "type": "FILL",
              "text": "Green _________ which are covered with vegetation, offer numerous environmental benefits",
              "answer": "roofs",
              "explanation": "The passage notes that the roofs is essential in this context.",
              "location": "Paragraph 1, Sentence 1"
            }
          ]
        },
        {
          "title": "Passage 2: The Growth Mindset in Education",
          "text": "<p>The 'growth mindset' theory, developed by psychologist Carol Dweck, argues that intelligence and abilities can be developed through dedication and hard work. In contrast, those with a 'fixed mindset' believe their talents are innate and cannot be changed. Educating students on growth mindset principles fosters resilience and academic success.</p>",
          "questions": [
            {
              "num": 14,
              "type": "TFNG",
              "text": "The 'growth mindset' theory, developed by psychologist Carol Dweck, argues that intelligence and abilities can be developed through dedication and hard work",
              "options": [
                "TRUE",
                "FALSE",
                "NOT GIVEN"
              ],
              "answer": "TRUE",
              "explanation": "The statement directly matches the text: \"The 'growth mindset' theory, developed by psychologist Carol Dweck, argues that intelligence and abilities can be developed through dedication and hard work\".",
              "location": "Paragraph 1, Sentence 1"
            },
            {
              "num": 15,
              "type": "MCQ",
              "text": "According to paragraph 1, what is the main finding regarding  Growth Mindset?",
              "options": [
                "A. It has a significant negative impact on resources",
                "B. It represents a key advancement in the field",
                "C. It has been widely criticized by modern researchers",
                "D. It is no longer considered relevant"
              ],
              "answer": "B",
              "explanation": "The text confirms that this development is a major advancement: \"The 'growth mindset' theory, developed by psychologist Carol Dweck, argues that intelligence and abilities can be developed through dedication and hard work\".",
              "location": "Paragraph 1, Sentence 1"
            },
            {
              "num": 16,
              "type": "FILL",
              "text": "The _________ mindset' theory, developed by psychologist Carol Dweck, argues that intelligence and abilities can be developed through dedication and hard work",
              "answer": "'growth",
              "explanation": "The passage notes that the 'growth is essential in this context.",
              "location": "Paragraph 1, Sentence 1"
            },
            {
              "num": 17,
              "type": "TFNG",
              "text": "The 'growth mindset' theory, developed by psychologist Carol Dweck, argues that intelligence and abilities can be developed through dedication and hard work",
              "options": [
                "TRUE",
                "FALSE",
                "NOT GIVEN"
              ],
              "answer": "TRUE",
              "explanation": "The statement directly matches the text: \"The 'growth mindset' theory, developed by psychologist Carol Dweck, argues that intelligence and abilities can be developed through dedication and hard work\".",
              "location": "Paragraph 1, Sentence 1"
            },
            {
              "num": 18,
              "type": "MCQ",
              "text": "According to paragraph 1, what is the main finding regarding  Growth Mindset?",
              "options": [
                "A. It has a significant negative impact on resources",
                "B. It represents a key advancement in the field",
                "C. It has been widely criticized by modern researchers",
                "D. It is no longer considered relevant"
              ],
              "answer": "B",
              "explanation": "The text confirms that this development is a major advancement: \"The 'growth mindset' theory, developed by psychologist Carol Dweck, argues that intelligence and abilities can be developed through dedication and hard work\".",
              "location": "Paragraph 1, Sentence 1"
            },
            {
              "num": 19,
              "type": "FILL",
              "text": "The _________ mindset' theory, developed by psychologist Carol Dweck, argues that intelligence and abilities can be developed through dedication and hard work",
              "answer": "'growth",
              "explanation": "The passage notes that the 'growth is essential in this context.",
              "location": "Paragraph 1, Sentence 1"
            },
            {
              "num": 20,
              "type": "TFNG",
              "text": "The 'growth mindset' theory, developed by psychologist Carol Dweck, argues that intelligence and abilities can be developed through dedication and hard work",
              "options": [
                "TRUE",
                "FALSE",
                "NOT GIVEN"
              ],
              "answer": "TRUE",
              "explanation": "The statement directly matches the text: \"The 'growth mindset' theory, developed by psychologist Carol Dweck, argues that intelligence and abilities can be developed through dedication and hard work\".",
              "location": "Paragraph 1, Sentence 1"
            },
            {
              "num": 21,
              "type": "MCQ",
              "text": "According to paragraph 1, what is the main finding regarding  Growth Mindset?",
              "options": [
                "A. It has a significant negative impact on resources",
                "B. It represents a key advancement in the field",
                "C. It has been widely criticized by modern researchers",
                "D. It is no longer considered relevant"
              ],
              "answer": "B",
              "explanation": "The text confirms that this development is a major advancement: \"The 'growth mindset' theory, developed by psychologist Carol Dweck, argues that intelligence and abilities can be developed through dedication and hard work\".",
              "location": "Paragraph 1, Sentence 1"
            },
            {
              "num": 22,
              "type": "FILL",
              "text": "The _________ mindset' theory, developed by psychologist Carol Dweck, argues that intelligence and abilities can be developed through dedication and hard work",
              "answer": "'growth",
              "explanation": "The passage notes that the 'growth is essential in this context.",
              "location": "Paragraph 1, Sentence 1"
            },
            {
              "num": 23,
              "type": "TFNG",
              "text": "The 'growth mindset' theory, developed by psychologist Carol Dweck, argues that intelligence and abilities can be developed through dedication and hard work",
              "options": [
                "TRUE",
                "FALSE",
                "NOT GIVEN"
              ],
              "answer": "TRUE",
              "explanation": "The statement directly matches the text: \"The 'growth mindset' theory, developed by psychologist Carol Dweck, argues that intelligence and abilities can be developed through dedication and hard work\".",
              "location": "Paragraph 1, Sentence 1"
            },
            {
              "num": 24,
              "type": "MCQ",
              "text": "According to paragraph 1, what is the main finding regarding  Growth Mindset?",
              "options": [
                "A. It has a significant negative impact on resources",
                "B. It represents a key advancement in the field",
                "C. It has been widely criticized by modern researchers",
                "D. It is no longer considered relevant"
              ],
              "answer": "B",
              "explanation": "The text confirms that this development is a major advancement: \"The 'growth mindset' theory, developed by psychologist Carol Dweck, argues that intelligence and abilities can be developed through dedication and hard work\".",
              "location": "Paragraph 1, Sentence 1"
            },
            {
              "num": 25,
              "type": "FILL",
              "text": "The _________ mindset' theory, developed by psychologist Carol Dweck, argues that intelligence and abilities can be developed through dedication and hard work",
              "answer": "'growth",
              "explanation": "The passage notes that the 'growth is essential in this context.",
              "location": "Paragraph 1, Sentence 1"
            },
            {
              "num": 26,
              "type": "TFNG",
              "text": "The 'growth mindset' theory, developed by psychologist Carol Dweck, argues that intelligence and abilities can be developed through dedication and hard work",
              "options": [
                "TRUE",
                "FALSE",
                "NOT GIVEN"
              ],
              "answer": "TRUE",
              "explanation": "The statement directly matches the text: \"The 'growth mindset' theory, developed by psychologist Carol Dweck, argues that intelligence and abilities can be developed through dedication and hard work\".",
              "location": "Paragraph 1, Sentence 1"
            }
          ]
        },
        {
          "title": "Passage 3: Alfred Wegener's Theory of Continental Drift",
          "text": "<p>In 1912, German meteorologist Alfred Wegener proposed the theory of continental drift, arguing that Earth's continents were once joined in a single supercontinent called Pangaea. Wegener cited geological and fossil similarities across oceans as evidence. Although initially rejected, his ideas laid the foundation for modern plate tectonics.</p>",
          "questions": [
            {
              "num": 27,
              "type": "MCQ",
              "text": "According to paragraph 1, what is the main finding regarding  Continental Drift?",
              "options": [
                "A. It has a significant negative impact on resources",
                "B. It represents a key advancement in the field",
                "C. It has been widely criticized by modern researchers",
                "D. It is no longer considered relevant"
              ],
              "answer": "B",
              "explanation": "The text confirms that this development is a major advancement: \"In 1912, German meteorologist Alfred Wegener proposed the theory of continental drift, arguing that Earth's continents were once joined in a single supercontinent called Pangaea\".",
              "location": "Paragraph 1, Sentence 1"
            },
            {
              "num": 28,
              "type": "FILL",
              "text": "In 1912, _________ meteorologist Alfred Wegener proposed the theory of continental drift, arguing that Earth's continents were once joined in a single supercontinent called Pangaea",
              "answer": "german",
              "explanation": "The passage notes that the german is essential in this context.",
              "location": "Paragraph 1, Sentence 1"
            },
            {
              "num": 29,
              "type": "TFNG",
              "text": "In 1912, German meteorologist Alfred Wegener proposed the theory of continental drift, arguing that Earth's continents were once joined in a single supercontinent called Pangaea",
              "options": [
                "TRUE",
                "FALSE",
                "NOT GIVEN"
              ],
              "answer": "TRUE",
              "explanation": "The statement directly matches the text: \"In 1912, German meteorologist Alfred Wegener proposed the theory of continental drift, arguing that Earth's continents were once joined in a single supercontinent called Pangaea\".",
              "location": "Paragraph 1, Sentence 1"
            },
            {
              "num": 30,
              "type": "MCQ",
              "text": "According to paragraph 1, what is the main finding regarding  Continental Drift?",
              "options": [
                "A. It has a significant negative impact on resources",
                "B. It represents a key advancement in the field",
                "C. It has been widely criticized by modern researchers",
                "D. It is no longer considered relevant"
              ],
              "answer": "B",
              "explanation": "The text confirms that this development is a major advancement: \"In 1912, German meteorologist Alfred Wegener proposed the theory of continental drift, arguing that Earth's continents were once joined in a single supercontinent called Pangaea\".",
              "location": "Paragraph 1, Sentence 1"
            },
            {
              "num": 31,
              "type": "FILL",
              "text": "In 1912, _________ meteorologist Alfred Wegener proposed the theory of continental drift, arguing that Earth's continents were once joined in a single supercontinent called Pangaea",
              "answer": "german",
              "explanation": "The passage notes that the german is essential in this context.",
              "location": "Paragraph 1, Sentence 1"
            },
            {
              "num": 32,
              "type": "TFNG",
              "text": "In 1912, German meteorologist Alfred Wegener proposed the theory of continental drift, arguing that Earth's continents were once joined in a single supercontinent called Pangaea",
              "options": [
                "TRUE",
                "FALSE",
                "NOT GIVEN"
              ],
              "answer": "TRUE",
              "explanation": "The statement directly matches the text: \"In 1912, German meteorologist Alfred Wegener proposed the theory of continental drift, arguing that Earth's continents were once joined in a single supercontinent called Pangaea\".",
              "location": "Paragraph 1, Sentence 1"
            },
            {
              "num": 33,
              "type": "MCQ",
              "text": "According to paragraph 1, what is the main finding regarding  Continental Drift?",
              "options": [
                "A. It has a significant negative impact on resources",
                "B. It represents a key advancement in the field",
                "C. It has been widely criticized by modern researchers",
                "D. It is no longer considered relevant"
              ],
              "answer": "B",
              "explanation": "The text confirms that this development is a major advancement: \"In 1912, German meteorologist Alfred Wegener proposed the theory of continental drift, arguing that Earth's continents were once joined in a single supercontinent called Pangaea\".",
              "location": "Paragraph 1, Sentence 1"
            },
            {
              "num": 34,
              "type": "FILL",
              "text": "In 1912, _________ meteorologist Alfred Wegener proposed the theory of continental drift, arguing that Earth's continents were once joined in a single supercontinent called Pangaea",
              "answer": "german",
              "explanation": "The passage notes that the german is essential in this context.",
              "location": "Paragraph 1, Sentence 1"
            },
            {
              "num": 35,
              "type": "TFNG",
              "text": "In 1912, German meteorologist Alfred Wegener proposed the theory of continental drift, arguing that Earth's continents were once joined in a single supercontinent called Pangaea",
              "options": [
                "TRUE",
                "FALSE",
                "NOT GIVEN"
              ],
              "answer": "TRUE",
              "explanation": "The statement directly matches the text: \"In 1912, German meteorologist Alfred Wegener proposed the theory of continental drift, arguing that Earth's continents were once joined in a single supercontinent called Pangaea\".",
              "location": "Paragraph 1, Sentence 1"
            },
            {
              "num": 36,
              "type": "MCQ",
              "text": "According to paragraph 1, what is the main finding regarding  Continental Drift?",
              "options": [
                "A. It has a significant negative impact on resources",
                "B. It represents a key advancement in the field",
                "C. It has been widely criticized by modern researchers",
                "D. It is no longer considered relevant"
              ],
              "answer": "B",
              "explanation": "The text confirms that this development is a major advancement: \"In 1912, German meteorologist Alfred Wegener proposed the theory of continental drift, arguing that Earth's continents were once joined in a single supercontinent called Pangaea\".",
              "location": "Paragraph 1, Sentence 1"
            },
            {
              "num": 37,
              "type": "FILL",
              "text": "In 1912, _________ meteorologist Alfred Wegener proposed the theory of continental drift, arguing that Earth's continents were once joined in a single supercontinent called Pangaea",
              "answer": "german",
              "explanation": "The passage notes that the german is essential in this context.",
              "location": "Paragraph 1, Sentence 1"
            },
            {
              "num": 38,
              "type": "TFNG",
              "text": "In 1912, German meteorologist Alfred Wegener proposed the theory of continental drift, arguing that Earth's continents were once joined in a single supercontinent called Pangaea",
              "options": [
                "TRUE",
                "FALSE",
                "NOT GIVEN"
              ],
              "answer": "TRUE",
              "explanation": "The statement directly matches the text: \"In 1912, German meteorologist Alfred Wegener proposed the theory of continental drift, arguing that Earth's continents were once joined in a single supercontinent called Pangaea\".",
              "location": "Paragraph 1, Sentence 1"
            },
            {
              "num": 39,
              "type": "MCQ",
              "text": "According to paragraph 1, what is the main finding regarding  Continental Drift?",
              "options": [
                "A. It has a significant negative impact on resources",
                "B. It represents a key advancement in the field",
                "C. It has been widely criticized by modern researchers",
                "D. It is no longer considered relevant"
              ],
              "answer": "B",
              "explanation": "The text confirms that this development is a major advancement: \"In 1912, German meteorologist Alfred Wegener proposed the theory of continental drift, arguing that Earth's continents were once joined in a single supercontinent called Pangaea\".",
              "location": "Paragraph 1, Sentence 1"
            },
            {
              "num": 40,
              "type": "FILL",
              "text": "In 1912, _________ meteorologist Alfred Wegener proposed the theory of continental drift, arguing that Earth's continents were once joined in a single supercontinent called Pangaea",
              "answer": "german",
              "explanation": "The passage notes that the german is essential in this context.",
              "location": "Paragraph 1, Sentence 1"
            }
          ]
        }
      ]
    },
    "writing": {
      "tasks": []
    }
  },
  "5": {
    "title": "Cambridge IELTS 19 — Test 1",
    "book": "IELTS 19",
    "listening": {
      "sections": [
        {
          "id": 1,
          "title": "Part 1: Bicycle Hire Enquiry",
          "description": "A tourist calls a bicycle hire company to ask about renting bikes.",
          "audio": "audio/IELTS_19_Test_1_Part1.m4a",
          "transcript": "<p><b>Clerk:</b> Pedal Point Bike Hire, good morning.</p><p><b>Tourist:</b> Hi. I'm visiting the area next weekend and would like to hire some bikes for the family. There are two adults and three children.</p><p><b>Clerk:</b> Of course. We have adult bikes, children's bikes in two sizes, and e-bikes. Adult bikes are £18 per day, children's bikes are £10 per day, and e-bikes are £25 per day.</p><p><b>Tourist:</b> We'd need two adult bikes and three children's bikes. What times are you open?</p><p><b>Clerk:</b> We're open 8am to 6pm, seven days a week. We do ask customers to return bikes by 5:30pm to allow time for checking the equipment.</p><p><b>Tourist:</b> Is there a helmet included?</p><p><b>Clerk:</b> Helmets are included for free for all children. Adults can hire a helmet for £2 per day. We also offer free maps of the local cycling routes.</p><p><b>Tourist:</b> Perfect. And is there a deposit?</p><p><b>Clerk:</b> We take a deposit of £50 per adult bike and £25 per children's bike, refundable on return.</p>",
          "questions": [
            {
              "num": 1,
              "type": "FILL",
              "text": "Daily hire cost of an adult bike: £_________",
              "answer": "18",
              "explanation": "The clerk says 'Adult bikes are £18 per day'."
            },
            {
              "num": 2,
              "type": "FILL",
              "text": "Daily hire cost of a children's bike: £_________",
              "answer": "10",
              "explanation": "The clerk says 'children's bikes are £10 per day'."
            },
            {
              "num": 3,
              "type": "FILL",
              "text": "Daily hire cost of an e-bike: £_________",
              "answer": "25",
              "explanation": "The clerk says 'e-bikes are £25 per day'."
            },
            {
              "num": 4,
              "type": "FILL",
              "text": "Opening time: _________am",
              "answer": "8",
              "explanation": "The clerk says 'open 8am to 6pm'."
            },
            {
              "num": 5,
              "type": "FILL",
              "text": "Latest return time for bikes: _________pm",
              "answer": "5:30",
              "explanation": "The clerk says 'return bikes by 5:30pm'."
            },
            {
              "num": 6,
              "type": "MCQ",
              "text": "Helmets for children are:",
              "options": [
                "A. Available for £2 per day",
                "B. Included free",
                "C. Not available",
                "D. Required to be brought by customers"
              ],
              "answer": "B",
              "explanation": "The clerk says 'Helmets are included for free for all children'."
            },
            {
              "num": 7,
              "type": "FILL",
              "text": "Helmet hire cost per adult per day: £_________",
              "answer": "2",
              "explanation": "The clerk says 'Adults can hire a helmet for £2 per day'."
            },
            {
              "num": 8,
              "type": "FILL",
              "text": "Deposit per adult bike: £_________",
              "answer": "50",
              "explanation": "The clerk says 'a deposit of £50 per adult bike'."
            },
            {
              "num": 9,
              "type": "FILL",
              "text": "Deposit per children's bike: £_________",
              "answer": "25",
              "explanation": "The clerk says '£25 per children's bike'."
            },
            {
              "num": 10,
              "type": "MCQ",
              "text": "What free item is offered to all customers?",
              "options": [
                "A. A water bottle",
                "B. Cycle maps of local routes",
                "C. A cycling jersey",
                "D. A lock"
              ],
              "answer": "B",
              "explanation": "The clerk says 'We also offer free maps of the local cycling routes'."
            }
          ]
        },
        {
          "id": 2,
          "title": "Part 2: Community Garden Project",
          "description": "The organiser of a new community garden project talks to local residents about the initiative.",
          "audio": "audio/IELTS_19_Test_1_Part2.m4a",
          "transcript": "<p><b>Organiser:</b> Thank you all for coming. I'm delighted to share information about our new community garden project, which we're calling 'Greenspace Together'.</p><p><b>Organiser:</b> The site was formerly used as a car park before being donated to the council in 2022. Work on transforming the site began last spring and we expect to be fully open by July this year.</p><p><b>Organiser:</b> The garden will have 35 individual allotment plots, each measuring 5 by 10 metres. Annual plot rental is £45, though we offer a reduced rate of £20 for residents over 65 and for those on low incomes.</p><p><b>Organiser:</b> There will also be communal areas — a wildflower meadow, a polytunnel for growing seedlings, and a composting station that all members can use. Water points will be located at three places around the site.</p>",
          "questions": [
            {
              "num": 11,
              "type": "FILL",
              "text": "The project name: Greenspace _________",
              "answer": "Together",
              "explanation": "The organiser says 'we're calling Greenspace Together'."
            },
            {
              "num": 12,
              "type": "FILL",
              "text": "The site was formerly used as a _________.",
              "answer": "car park",
              "explanation": "The organiser says 'formerly used as a car park'."
            },
            {
              "num": 13,
              "type": "FILL",
              "text": "Year the site was donated to the council: _________",
              "answer": "2022",
              "explanation": "The organiser says 'donated to the council in 2022'."
            },
            {
              "num": 14,
              "type": "FILL",
              "text": "Number of individual allotment plots: _________",
              "answer": "35",
              "explanation": "The organiser says 'The garden will have 35 individual allotment plots'."
            },
            {
              "num": 15,
              "type": "FILL",
              "text": "Plot dimensions: 5 by _________ metres",
              "answer": "10",
              "explanation": "The organiser says 'each measuring 5 by 10 metres'."
            },
            {
              "num": 16,
              "type": "FILL",
              "text": "Annual plot rental (standard): £_________",
              "answer": "45",
              "explanation": "The organiser says 'Annual plot rental is £45'."
            },
            {
              "num": 17,
              "type": "FILL",
              "text": "Reduced annual rental for over-65s or low-income residents: £_________",
              "answer": "20",
              "explanation": "The organiser says 'a reduced rate of £20'."
            },
            {
              "num": 18,
              "type": "MCQ",
              "text": "The communal polytunnel is used for:",
              "options": [
                "A. Storing tools",
                "B. Holding meetings",
                "C. Growing seedlings",
                "D. Composting waste"
              ],
              "answer": "C",
              "explanation": "The organiser says 'a polytunnel for growing seedlings'."
            },
            {
              "num": 19,
              "type": "FILL",
              "text": "Number of water points around the site: _________",
              "answer": "three",
              "explanation": "The organiser says 'Water points will be located at three places around the site'."
            },
            {
              "num": 20,
              "type": "MCQ",
              "text": "When is the garden expected to fully open?",
              "options": [
                "A. This spring",
                "B. This summer (July)",
                "C. Next January",
                "D. Next spring"
              ],
              "answer": "B",
              "explanation": "The organiser says 'fully open by July this year'."
            }
          ]
        },
        {
          "id": 3,
          "title": "Part 3: Presentation on Remote Work Research",
          "description": "Two students, Oliver and Yasmine, plan a presentation on the effects of remote work.",
          "audio": "audio/IELTS_19_Test_1_Part3.m4a",
          "transcript": "<p><b>Oliver:</b> I think we should start by giving the context — how remote work went from being a niche arrangement to mainstream almost overnight during the pandemic.</p><p><b>Yasmine:</b> Agreed. Then we can get into the research. I found a study showing that productivity actually increased for knowledge workers during remote work, but decreased for those in collaborative or creative roles.</p><p><b>Oliver:</b> That's an interesting distinction. The social aspect is really important — remote workers report higher levels of loneliness.</p><p><b>Yasmine:</b> Yes. But there are also benefits — reduced commuting time, greater work-life balance, and lower overhead costs for employers.</p><p><b>Oliver:</b> I think our recommendation section should focus on hybrid working as a solution — combining the best of both worlds.</p><p><b>Yasmine:</b> Good point. We should also mention the equity issue — not all workers have adequate home working environments, particularly in urban areas with small flats.</p>",
          "questions": [
            {
              "num": 21,
              "type": "MCQ",
              "text": "Oliver says remote work became mainstream:",
              "options": [
                "A. Gradually over a decade",
                "B. Due to government legislation",
                "C. Almost overnight during the pandemic",
                "D. Following major technological advances"
              ],
              "answer": "C",
              "explanation": "Oliver says 'almost overnight during the pandemic'."
            },
            {
              "num": 22,
              "type": "MCQ",
              "text": "Which workers showed increased productivity during remote work?",
              "options": [
                "A. Manual workers",
                "B. Knowledge workers",
                "C. Creative workers",
                "D. Collaborative workers"
              ],
              "answer": "B",
              "explanation": "Yasmine says 'productivity actually increased for knowledge workers'."
            },
            {
              "num": 23,
              "type": "MCQ",
              "text": "Productivity decreased for workers in which roles?",
              "options": [
                "A. Administrative roles",
                "B. Technical roles",
                "C. Collaborative or creative roles",
                "D. Service sector roles"
              ],
              "answer": "C",
              "explanation": "Yasmine says 'decreased for those in collaborative or creative roles'."
            },
            {
              "num": 24,
              "type": "MCQ",
              "text": "What social issue do remote workers report?",
              "options": [
                "A. More conflict with colleagues",
                "B. Higher levels of loneliness",
                "C. Difficulty managing meetings",
                "D. Lack of professional development"
              ],
              "answer": "B",
              "explanation": "Oliver says 'remote workers report higher levels of loneliness'."
            },
            {
              "num": 25,
              "type": "MCQ",
              "text": "What solution does Oliver recommend for their presentation?",
              "options": [
                "A. Fully remote working for all roles",
                "B. Return to office full-time",
                "C. Hybrid working",
                "D. Four-day working week"
              ],
              "answer": "C",
              "explanation": "Oliver says 'our recommendation section should focus on hybrid working'."
            },
            {
              "num": 26,
              "type": "FILL",
              "text": "One benefit of remote work for employers is lower _________ costs.",
              "answer": "overhead",
              "explanation": "Yasmine says 'lower overhead costs for employers'."
            },
            {
              "num": 27,
              "type": "MCQ",
              "text": "The equity issue Yasmine raises relates to:",
              "options": [
                "A. Pay inequality between remote and office workers",
                "B. Lack of adequate home working environments",
                "C. Access to fast internet connections",
                "D. Childcare responsibilities"
              ],
              "answer": "B",
              "explanation": "Yasmine says 'not all workers have adequate home working environments'."
            },
            {
              "num": 28,
              "type": "FILL",
              "text": "Remote work benefits include reduced _________ time.",
              "answer": "commuting",
              "explanation": "Yasmine mentions 'reduced commuting time'."
            },
            {
              "num": 29,
              "type": "MCQ",
              "text": "The equity issue is particularly relevant for workers in:",
              "options": [
                "A. Rural areas",
                "B. Developing countries",
                "C. Urban areas with small flats",
                "D. Large suburban houses"
              ],
              "answer": "C",
              "explanation": "Yasmine says 'particularly in urban areas with small flats'."
            },
            {
              "num": 30,
              "type": "MCQ",
              "text": "Yasmine describes remote work benefits as including:",
              "options": [
                "A. Only financial benefits",
                "B. Reduced commuting and better work-life balance",
                "C. Improved social connections",
                "D. Greater career advancement"
              ],
              "answer": "B",
              "explanation": "Yasmine says 'reduced commuting time, greater work-life balance'."
            }
          ]
        },
        {
          "id": 4,
          "title": "Part 4: The Origins of Writing",
          "description": "A lecture on the development of writing systems around the world.",
          "audio": "audio/IELTS_19_Test_1_Part4.m4a",
          "transcript": "<p><b>Lecturer:</b> Today I'll be talking about the origins of writing — one of the most transformative inventions in human history.</p><p><b>Lecturer:</b> The earliest writing system we know of is cuneiform, which emerged in Sumeria — modern-day Iraq — around 3400 BC. Initially it was used not for literature but for record-keeping: tracking grain, livestock and trade transactions.</p><p><b>Lecturer:</b> Egyptian hieroglyphics developed slightly later, around 3200 BC. These were initially carved on stone monuments, though papyrus later made writing more accessible. Hieroglyphics used a combination of phonetic and ideographic symbols.</p><p><b>Lecturer:</b> In China, oracle bone script appeared during the Shang Dynasty around 1200 BC, used to record divination rituals. This is the direct ancestor of modern Chinese characters.</p><p><b>Lecturer:</b> The Phoenician alphabet, developed around 1050 BC, was revolutionary because it was the first writing system to use a purely phonetic alphabet of just 22 letters. This formed the basis for Greek, Latin, and ultimately most modern alphabets...</p>",
          "questions": [
            {
              "num": 31,
              "type": "FILL",
              "text": "The earliest known writing system is _________.",
              "answer": "cuneiform",
              "explanation": "The lecturer says 'The earliest writing system we know of is cuneiform'."
            },
            {
              "num": 32,
              "type": "FILL",
              "text": "Cuneiform emerged in Sumeria around _________ BC.",
              "answer": "3400",
              "explanation": "The lecturer says 'around 3400 BC'."
            },
            {
              "num": 33,
              "type": "MCQ",
              "text": "Cuneiform was initially used for:",
              "options": [
                "A. Religious texts",
                "B. Poetry and literature",
                "C. Record-keeping of grain, livestock and trade",
                "D. Royal decrees"
              ],
              "answer": "C",
              "explanation": "The lecturer says 'used not for literature but for record-keeping: tracking grain, livestock and trade transactions'."
            },
            {
              "num": 34,
              "type": "FILL",
              "text": "Egyptian hieroglyphics developed around _________ BC.",
              "answer": "3200",
              "explanation": "The lecturer says 'Egyptian hieroglyphics developed slightly later, around 3200 BC'."
            },
            {
              "num": 35,
              "type": "MCQ",
              "text": "Hieroglyphics were initially carved on:",
              "options": [
                "A. Clay tablets",
                "B. Papyrus scrolls",
                "C. Stone monuments",
                "D. Wooden boards"
              ],
              "answer": "C",
              "explanation": "The lecturer says 'initially carved on stone monuments'."
            },
            {
              "num": 36,
              "type": "MCQ",
              "text": "Hieroglyphics used a combination of:",
              "options": [
                "A. Syllabic and alphabetic symbols",
                "B. Phonetic and ideographic symbols",
                "C. Numbers and pictograms",
                "D. Logograms and syllabaries"
              ],
              "answer": "B",
              "explanation": "The lecturer says 'Hieroglyphics used a combination of phonetic and ideographic symbols'."
            },
            {
              "num": 37,
              "type": "FILL",
              "text": "Oracle bone script appeared during the _________ Dynasty in China.",
              "answer": "Shang",
              "explanation": "The lecturer says 'during the Shang Dynasty'."
            },
            {
              "num": 38,
              "type": "MCQ",
              "text": "What was oracle bone script used to record?",
              "options": [
                "A. Historical events",
                "B. Trade accounts",
                "C. Divination rituals",
                "D. Legal codes"
              ],
              "answer": "C",
              "explanation": "The lecturer says 'used to record divination rituals'."
            },
            {
              "num": 39,
              "type": "FILL",
              "text": "The Phoenician alphabet developed around _________ BC.",
              "answer": "1050",
              "explanation": "The lecturer says 'The Phoenician alphabet, developed around 1050 BC'."
            },
            {
              "num": 40,
              "type": "FILL",
              "text": "The Phoenician alphabet contained just _________ letters.",
              "answer": "22",
              "explanation": "The lecturer says 'a purely phonetic alphabet of just 22 letters'."
            }
          ]
        }
      ]
    },
    "reading": {
      "passages": [
        {
          "title": "Passage 1: How Tennis Rackets Have Changed",
          "text": "<p>For over a century, tennis rackets were made primarily of wood, usually ash or maple, laminated together with glue. These wooden rackets were heavy, had a small sweet spot, and were prone to warping. In the 1960s, the first major change occurred when metal rackets, made of steel and later aluminium, were introduced. Steel rackets offered more power and durability but were still heavy and stiff.</p>\n        <p>The true revolution came in the late 1970s with the introduction of graphite and composite rackets. Graphite is a lightweight, incredibly strong material that can be moulded into complex aerodynamic shapes. This allowed manufacturers to create rackets with much larger head sizes, which expanded the sweet spot and allowed players to hit the ball with more speed and spin without sacrificing control.</p>\n        <p>Today, modern tennis rackets use advanced materials like carbon fibre, Kevlar, and titanium. These materials allow rackets to be lighter than ever—often weighing less than 300 grams—while remaining extremely stiff and strong. Racket design also incorporates computer-aided design (CAD) to optimize the distribution of weight, the string pattern, and the aerodynamics, transforming tennis into a faster and more aggressive game.</p>",
          "questions": [
            {
              "num": 1,
              "type": "FILL",
              "text": "For more than a century, tennis rackets were made of _________.",
              "answer": "wood",
              "explanation": "The text says 'tennis rackets were made primarily of wood'.",
              "location": "Paragraph 1, Line 1"
            },
            {
              "num": 2,
              "type": "FILL",
              "text": "Wooden rackets had a very small _________.",
              "answer": "sweet spot",
              "explanation": "The text mentions that wooden rackets 'had a small sweet spot'.",
              "location": "Paragraph 1, Line 2"
            },
            {
              "num": 3,
              "type": "FILL",
              "text": "In the 1960s, rackets made of _________ were introduced.",
              "answer": "metal",
              "explanation": "The text says 'metal rackets, made of steel and later aluminium, were introduced'.",
              "location": "Paragraph 1, Line 3"
            },
            {
              "num": 4,
              "type": "FILL",
              "text": "A major drawback of steel rackets was that they were heavy and _________.",
              "answer": "stiff",
              "explanation": "The text says steel rackets 'were still heavy and stiff'.",
              "location": "Paragraph 1, Line 4"
            },
            {
              "num": 5,
              "type": "FILL",
              "text": "The introduction of _________ in the 1970s revolutionized racket manufacturing.",
              "answer": "graphite",
              "explanation": "The text says 'The true revolution came in the late 1970s with the introduction of graphite...'.",
              "location": "Paragraph 2, Line 1"
            },
            {
              "num": 6,
              "type": "FILL",
              "text": "Modern tennis rackets can weigh less than _________ grams.",
              "answer": "300",
              "explanation": "The text states: 'often weighing less than 300 grams'.",
              "location": "Paragraph 3, Line 2"
            },
            {
              "num": 7,
              "type": "FILL",
              "text": "Racket designers use _________ to optimize weight distribution.",
              "answer": "computer-aided design",
              "explanation": "The text mentions the use of 'computer-aided design (CAD)' to optimize rackets.",
              "location": "Paragraph 3, Line 3"
            },
            {
              "num": 8,
              "type": "TFNG",
              "text": "Wooden rackets were highly resistant to warping.",
              "options": [
                "TRUE",
                "FALSE",
                "NOT GIVEN"
              ],
              "answer": "FALSE",
              "explanation": "The text states wooden rackets 'were prone to warping.'",
              "location": "Paragraph 1, Line 2"
            },
            {
              "num": 9,
              "type": "TFNG",
              "text": "Aluminium rackets were introduced before steel rackets.",
              "options": [
                "TRUE",
                "FALSE",
                "NOT GIVEN"
              ],
              "answer": "FALSE",
              "explanation": "The text says metal rackets were made of 'steel and later aluminium'.",
              "location": "Paragraph 1, Line 3"
            },
            {
              "num": 10,
              "type": "TFNG",
              "text": "Graphite allowed manufacturers to increase the size of the racket head.",
              "options": [
                "TRUE",
                "FALSE",
                "NOT GIVEN"
              ],
              "answer": "TRUE",
              "explanation": "The text states graphite 'allowed manufacturers to create rackets with much larger head sizes'.",
              "location": "Paragraph 2, Line 3"
            },
            {
              "num": 11,
              "type": "TFNG",
              "text": "A larger head size makes it harder to hit the ball with spin.",
              "options": [
                "TRUE",
                "FALSE",
                "NOT GIVEN"
              ],
              "answer": "FALSE",
              "explanation": "The text says the larger head size 'allowed players to hit the ball with more speed and spin'.",
              "location": "Paragraph 2, Line 3"
            },
            {
              "num": 12,
              "type": "TFNG",
              "text": "Titanium rackets are the most expensive rackets on the market today.",
              "options": [
                "TRUE",
                "FALSE",
                "NOT GIVEN"
              ],
              "answer": "NOT GIVEN",
              "explanation": "The text mentions titanium as a modern material but does not mention the cost or price of rackets.",
              "location": "Paragraph 3, Line 1"
            },
            {
              "num": 13,
              "type": "TFNG",
              "text": "Modern materials have made tennis a faster game.",
              "options": [
                "TRUE",
                "FALSE",
                "NOT GIVEN"
              ],
              "answer": "TRUE",
              "explanation": "The text concludes that modern rackets have 'transforming tennis into a faster and more aggressive game.'",
              "location": "Paragraph 3, Line 4"
            }
          ]
        },
        {
          "title": "Passage 2: Pirates of the Ancient Mediterranean",
          "text": "<p>Piracy has a long history in the Mediterranean Sea, dating back to the Bronze Age. The complex geography of the region, with thousands of islands, jagged coastlines, and narrow channels, provided ideal hiding spots for pirate fleets. In ancient times, pirates did not just rob merchant ships; they also raided coastal villages, kidnapped residents for ransom, and captured people to sell into the thriving slave trade.</p>\n        <p>For centuries, various Mediterranean states struggled to control piracy. The Phoenicians and early Greeks attempted to protect their trade routes, but their success was limited. The peak of ancient piracy occurred in the 1st century BC, when Cilician pirates from southern Asia Minor dominated the sea. They grew so powerful that they even kidnapped a young Julius Caesar and threatened Rome's grain supply, causing food shortages in the city.</p>\n        <p>In response to this crisis, the Roman Senate granted extraordinary powers to the general Pompey the Great in 67 BC. Pompey divided the Mediterranean into 13 districts, assigning a fleet and commander to each. In a brilliant campaign lasting just three months, Pompey cleared the entire sea of pirates, capturing their strongholds and resettling many of them in agricultural communities, effectively ending the threat of Cilician piracy.</p>",
          "questions": [
            {
              "num": 14,
              "type": "MCQ",
              "text": "Why was the Mediterranean geography ideal for pirates?",
              "options": [
                "A. It was easy to navigate without maps",
                "B. Its many islands and jagged coasts provided excellent hiding places",
                "C. It had very few major military powers",
                "D. The water was shallow enough to anchor anywhere"
              ],
              "answer": "B",
              "explanation": "The text states: 'with thousands of islands, jagged coastlines, and narrow channels, provided ideal hiding spots for pirate fleets.'",
              "location": "Paragraph 1, Line 2"
            },
            {
              "num": 15,
              "type": "MCQ",
              "text": "In addition to robbing ships, what else did ancient pirates do?",
              "options": [
                "A. They built massive trade ports",
                "B. They raided coastal villages and captured slaves",
                "C. They established their own independent empires",
                "D. They worked as mercenary soldiers for Rome"
              ],
              "answer": "B",
              "explanation": "The text says they 'raided coastal villages, kidnapped residents for ransom, and captured people to sell into the thriving slave trade.'",
              "location": "Paragraph 1, Line 3"
            },
            {
              "num": 16,
              "type": "MCQ",
              "text": "Who was kidnapped by Cilician pirates in the 1st century BC?",
              "options": [
                "A. Pompey the Great",
                "B. A young Julius Caesar",
                "C. The Roman Emperor",
                "D. A wealthy Phoenician merchant"
              ],
              "answer": "B",
              "explanation": "The text states: 'They grew so powerful that they even kidnapped a young Julius Caesar'.",
              "location": "Paragraph 2, Line 3"
            },
            {
              "num": 17,
              "type": "MCQ",
              "text": "What impact did Cilician piracy have on the city of Rome?",
              "options": [
                "A. It destroyed the Roman navy completely",
                "B. It threatened Rome's grain supply, causing food shortages",
                "C. It forced Rome to relocate its capital",
                "D. It increased the price of slaves dramatically"
              ],
              "answer": "B",
              "explanation": "The text notes: 'threatened Rome's grain supply, causing food shortages in the city.'",
              "location": "Paragraph 2, Line 3"
            },
            {
              "num": 18,
              "type": "FILL",
              "text": "Piracy in the Mediterranean dates back to the _________ Age.",
              "answer": "Bronze",
              "explanation": "The text states: 'dating back to the Bronze Age'.",
              "location": "Paragraph 1, Line 1"
            },
            {
              "num": 19,
              "type": "FILL",
              "text": "The Cilician pirates came from southern _________.",
              "answer": "Asia Minor",
              "explanation": "The text mentions 'Cilician pirates from southern Asia Minor'.",
              "location": "Paragraph 2, Line 3"
            },
            {
              "num": 20,
              "type": "FILL",
              "text": "The Roman general _________ cleared the sea of pirates in 67 BC.",
              "answer": "Pompey the Great",
              "explanation": "The text says the Roman Senate 'granted extraordinary powers to the general Pompey the Great in 67 BC'.",
              "location": "Paragraph 3, Line 1"
            },
            {
              "num": 21,
              "type": "FILL",
              "text": "Pompey divided the Mediterranean into _________ districts.",
              "answer": "13",
              "explanation": "The text states: 'Pompey divided the Mediterranean into 13 districts'.",
              "location": "Paragraph 3, Line 2"
            },
            {
              "num": 22,
              "type": "FILL",
              "text": "Pompey's campaign against the pirates lasted only _________ months.",
              "answer": "three",
              "explanation": "The text says: 'In a brilliant campaign lasting just three months'.",
              "location": "Paragraph 3, Line 3"
            },
            {
              "num": 23,
              "type": "FILL",
              "text": "Captured pirates were resettled in _________ communities.",
              "answer": "agricultural",
              "explanation": "The text states Pompey was 'resettling many of them in agricultural communities'.",
              "location": "Paragraph 3, Line 3"
            },
            {
              "num": 24,
              "type": "TFNG",
              "text": "Phoenicians and early Greeks successfully eliminated all pirates from the Mediterranean.",
              "options": [
                "TRUE",
                "FALSE",
                "NOT GIVEN"
              ],
              "answer": "FALSE",
              "explanation": "The text states that the Phoenicians and early Greeks had 'limited success' in controlling piracy.",
              "location": "Paragraph 2, Line 2"
            },
            {
              "num": 25,
              "type": "TFNG",
              "text": "Cilician pirates were the most powerful pirate group in the 1st century BC.",
              "options": [
                "TRUE",
                "FALSE",
                "NOT GIVEN"
              ],
              "answer": "TRUE",
              "explanation": "The text says 'Cilician pirates... dominated the sea' and 'grew so powerful'.",
              "location": "Paragraph 2, Line 3"
            },
            {
              "num": 26,
              "type": "TFNG",
              "text": "Julius Caesar paid a massive ransom to secure his release from the pirates.",
              "options": [
                "TRUE",
                "FALSE",
                "NOT GIVEN"
              ],
              "answer": "NOT GIVEN",
              "explanation": "The text mentions he was kidnapped for ransom, but does not mention the amount or if it was paid.",
              "location": "Paragraph 2, Line 3"
            }
          ]
        },
        {
          "title": "Passage 3: The Persistence & Peril of Misinformation",
          "text": "<p>Misinformation—false or inaccurate information spread regardless of intent to deceive—is not a modern phenomenon. However, the rise of digital communication has amplified its speed, reach, and impact. In the digital age, social media algorithms prioritize engagement over accuracy, causing sensationalist and misleading stories to spread much faster than factual corrections. Once misinformation is established, it can be extremely difficult to correct, leading to a phenomenon known as the 'continued influence effect.'</p>\n        <p>Cognitive psychologists have identified several reasons why misinformation persists. First, human brains are 'cognitive misers'—we tend to accept information that requires less mental effort to process. Sensationalized headlines are often easier to understand than complex scientific explanations. Second, confirmation bias plays a major role: individuals are far more likely to believe and share information that aligns with their pre-existing beliefs, while dismissing facts that contradict them.</p>\n        <p>To combat misinformation, researchers argue that fact-checking alone is insufficient. Fact-checking is a reactive measure that occurs after the information has already spread. Instead, some experts advocate for 'prebunking' or 'inoculation'—educating individuals on the common techniques used to spread misinformation before they encounter it. By building cognitive resistance, prebunking empowers people to critically evaluate online content, reducing the likelihood that they will fall victim to misleading claims.</p>",
          "questions": [
            {
              "num": 27,
              "type": "MCQ",
              "text": "What defines misinformation according to the passage?",
              "options": [
                "A. Information created with the explicit intent to deceive",
                "B. False or inaccurate information spread regardless of intent",
                "C. Information that is scientific but unproven",
                "D. Personal opinions shared on social media"
              ],
              "answer": "B",
              "explanation": "The text defines misinformation as 'false or inaccurate information spread regardless of intent to deceive'.",
              "location": "Paragraph 1, Line 1"
            },
            {
              "num": 28,
              "type": "MCQ",
              "text": "Why does misinformation spread faster than factual corrections on social media?",
              "options": [
                "A. Fact-checkers are too slow to react",
                "B. Social media algorithms prioritize engagement over accuracy",
                "C. Users prefer reading scientific journals",
                "D. Digital networks block corrections from being posted"
              ],
              "answer": "B",
              "explanation": "The text states: 'social media algorithms prioritize engagement over accuracy, causing sensationalist and misleading stories to spread much faster'.",
              "location": "Paragraph 1, Line 3"
            },
            {
              "num": 29,
              "type": "MCQ",
              "text": "What does the term 'continued influence effect' refer to?",
              "options": [
                "A. The way social media keeps users online for hours",
                "B. The difficulty in correcting misinformation once it is established",
                "C. The spread of correct facts through word of mouth",
                "D. The influence of political advertising on voter turnout"
              ],
              "answer": "B",
              "explanation": "The text says 'Once misinformation is established, it can be extremely difficult to correct, leading to... 'continued influence effect'.'",
              "location": "Paragraph 1, Line 4"
            },
            {
              "num": 30,
              "type": "MCQ",
              "text": "What does the term 'cognitive misers' mean in this context?",
              "options": [
                "A. People who are unwilling to share information",
                "B. The tendency to accept information requiring less mental effort",
                "C. The biological structure of the human brain",
                "D. A neurological condition affecting memory"
              ],
              "answer": "B",
              "explanation": "The text states: 'we tend to accept information that requires less mental effort to process.'",
              "location": "Paragraph 2, Line 2"
            },
            {
              "num": 31,
              "type": "FILL",
              "text": "Confirmation bias means people believe information that aligns with their _________ beliefs.",
              "answer": "pre-existing",
              "explanation": "The text states 'individuals are far more likely to believe and share information that aligns with their pre-existing beliefs'.",
              "location": "Paragraph 2, Line 4"
            },
            {
              "num": 32,
              "type": "FILL",
              "text": "Fact-checking is described as a _________ measure.",
              "answer": "reactive",
              "explanation": "The text says 'Fact-checking is a reactive measure that occurs after the information has already spread.'",
              "location": "Paragraph 3, Line 2"
            },
            {
              "num": 33,
              "type": "FILL",
              "text": "An alternative strategy to combat misinformation is _________ or inoculation.",
              "answer": "prebunking",
              "explanation": "The text mentions 'experts advocate for 'prebunking' or 'inoculation''.",
              "location": "Paragraph 3, Line 3"
            },
            {
              "num": 34,
              "type": "FILL",
              "text": "Prebunking seeks to build cognitive _________ in individuals.",
              "answer": "resistance",
              "explanation": "The text says 'By building cognitive resistance, prebunking empowers people'.",
              "location": "Paragraph 3, Line 4"
            },
            {
              "num": 35,
              "type": "TFNG",
              "text": "Misinformation did not exist before the invention of digital communication.",
              "options": [
                "TRUE",
                "FALSE",
                "NOT GIVEN"
              ],
              "answer": "FALSE",
              "explanation": "The text says misinformation 'is not a modern phenomenon.'",
              "location": "Paragraph 1, Line 2"
            },
            {
              "num": 36,
              "type": "TFNG",
              "text": "Sensationalized headlines are generally harder to process than scientific data.",
              "options": [
                "TRUE",
                "FALSE",
                "NOT GIVEN"
              ],
              "answer": "FALSE",
              "explanation": "The text says 'Sensationalized headlines are often easier to understand than complex scientific explanations.'",
              "location": "Paragraph 2, Line 3"
            },
            {
              "num": 37,
              "type": "TFNG",
              "text": "Confirmation bias leads people to dismiss facts that contradict their views.",
              "options": [
                "TRUE",
                "FALSE",
                "NOT GIVEN"
              ],
              "answer": "TRUE",
              "explanation": "The text states that confirmation bias leads to 'dismissing facts that contradict them.'",
              "location": "Paragraph 2, Line 4"
            },
            {
              "num": 38,
              "type": "TFNG",
              "text": "Fact-checking is the single most effective way to eliminate misinformation.",
              "options": [
                "TRUE",
                "FALSE",
                "NOT GIVEN"
              ],
              "answer": "FALSE",
              "explanation": "The text states 'fact-checking alone is insufficient.'",
              "location": "Paragraph 3, Line 1"
            },
            {
              "num": 39,
              "type": "TFNG",
              "text": "Prebunking teaches people common manipulation techniques in advance.",
              "options": [
                "TRUE",
                "FALSE",
                "NOT GIVEN"
              ],
              "answer": "TRUE",
              "explanation": "The text says prebunking is 'educating individuals on the common techniques used to spread misinformation before they encounter it.'",
              "location": "Paragraph 3, Line 3"
            },
            {
              "num": 40,
              "type": "TFNG",
              "text": "Most social media companies have banned prebunking content.",
              "options": [
                "TRUE",
                "FALSE",
                "NOT GIVEN"
              ],
              "answer": "NOT GIVEN",
              "explanation": "The passage discusses the concept of prebunking but does not mention any actions or bans by social media companies.",
              "location": "Paragraph 3, Line 4"
            }
          ]
        }
      ]
    },
    "writing": {
      "tasks": []
    }
  },
  "6": {
    "title": "Cambridge IELTS 19 — Test 2",
    "book": "IELTS 19",
    "listening": {
      "sections": [
        {
          "id": 1,
          "title": "Part 1: Dog Training Class Enquiry",
          "description": "A woman calls to enquire about puppy training classes.",
          "audio": "audio/IELTS_19_Test_2_Part1.m4a",
          "questions": [
            {
              "num": 1,
              "type": "FILL",
              "text": "Age of the woman's dog: _________ months",
              "answer": "five",
              "explanation": "The woman says her dog is five months old."
            },
            {
              "num": 2,
              "type": "FILL",
              "text": "Duration of each training session: _________ minutes",
              "answer": "45",
              "explanation": "Sessions run for 45 minutes each."
            },
            {
              "num": 3,
              "type": "FILL",
              "text": "Number of dogs per class: maximum _________",
              "answer": "eight",
              "explanation": "Maximum of eight dogs per class to maintain quality."
            },
            {
              "num": 4,
              "type": "FILL",
              "text": "Cost per session: £_________",
              "answer": "14",
              "explanation": "Each session costs £14."
            },
            {
              "num": 5,
              "type": "FILL",
              "text": "Cost if booking all 6 sessions upfront: £_________",
              "answer": "75",
              "explanation": "Block booking six sessions costs £75."
            },
            {
              "num": 6,
              "type": "MCQ",
              "text": "What must owners bring to each class?",
              "options": [
                "A. A crate",
                "B. Treats and a lead",
                "C. A water bowl",
                "D. Vaccination certificates"
              ],
              "answer": "B",
              "explanation": "Owners are asked to bring treats and a lead to each session."
            },
            {
              "num": 7,
              "type": "FILL",
              "text": "Day of the beginner class: _________",
              "answer": "Saturday",
              "explanation": "Beginner classes are held on Saturday mornings."
            },
            {
              "num": 8,
              "type": "FILL",
              "text": "Start time of the beginner class: _________am",
              "answer": "9",
              "explanation": "The class starts at 9am."
            },
            {
              "num": 9,
              "type": "MCQ",
              "text": "What is the cancellation policy?",
              "options": [
                "A. Full refund with 48 hours notice",
                "B. No refund after booking",
                "C. 24-hour notice required for a credit",
                "D. Transfers allowed but no refund"
              ],
              "answer": "C",
              "explanation": "24-hour notice is required to receive a credit for a missed session."
            },
            {
              "num": 10,
              "type": "FILL",
              "text": "Location of the training facility: Parkview _________ Centre",
              "answer": "Community",
              "explanation": "Classes are held at the Parkview Community Centre."
            }
          ],
          "transcript": ""
        },
        {
          "id": 2,
          "title": "Part 2: Coastal Erosion Management Scheme",
          "description": "A council officer explains a new scheme to manage coastal erosion.",
          "audio": "audio/IELTS_19_Test_2_Part2.m4a",
          "questions": [
            {
              "num": 11,
              "type": "FILL",
              "text": "Length of coastline managed under the scheme: _________ kilometres",
              "answer": "12",
              "explanation": "The scheme covers 12 kilometres of coastline."
            },
            {
              "num": 12,
              "type": "MCQ",
              "text": "The main cause of coastal erosion identified is:",
              "options": [
                "A. Rising sea temperatures",
                "B. Increased storm frequency and intensity",
                "C. Tourism activity",
                "D. Removal of sand dunes"
              ],
              "answer": "B",
              "explanation": "Increased storm frequency and intensity is the primary driver."
            },
            {
              "num": 13,
              "type": "FILL",
              "text": "Total budget allocated for the scheme: £_________ million",
              "answer": "4.2",
              "explanation": "The scheme has a budget of £4.2 million."
            },
            {
              "num": 14,
              "type": "FILL",
              "text": "Number of groynes to be constructed: _________",
              "answer": "six",
              "explanation": "Six new groynes will be built to trap sand."
            },
            {
              "num": 15,
              "type": "MCQ",
              "text": "The beach replenishment programme involves:",
              "options": [
                "A. Importing sand from abroad",
                "B. Pumping sand from offshore deposits",
                "C. Trucking sand from inland quarries",
                "D. Creating artificial reefs"
              ],
              "answer": "B",
              "explanation": "Sand will be pumped from offshore deposits onto the beach."
            },
            {
              "num": 16,
              "type": "FILL",
              "text": "The scheme is expected to protect the coastline for _________ years.",
              "answer": "25",
              "explanation": "Engineers estimate the scheme will provide protection for 25 years."
            },
            {
              "num": 17,
              "type": "MCQ",
              "text": "Residents will be consulted through:",
              "options": [
                "A. Online surveys only",
                "B. Public meetings and leaflets",
                "C. Local newspaper advertisements",
                "D. Door-to-door visits"
              ],
              "answer": "B",
              "explanation": "Public meetings and leaflets will be used for community consultation."
            },
            {
              "num": 18,
              "type": "FILL",
              "text": "Work is scheduled to begin in _________ next year.",
              "answer": "March",
              "explanation": "Construction will commence in March of the following year."
            },
            {
              "num": 19,
              "type": "MCQ",
              "text": "What environmental impact assessment found:",
              "options": [
                "A. No significant impact on wildlife",
                "B. Moderate disruption to nesting birds",
                "C. Significant damage to marine ecosystems",
                "D. Impact only on fishing industry"
              ],
              "answer": "B",
              "explanation": "The assessment found moderate disruption to nesting birds during construction."
            },
            {
              "num": 20,
              "type": "FILL",
              "text": "The area most at risk of flooding: _________ Street area",
              "answer": "Harbour",
              "explanation": "The Harbour Street area faces the greatest flood risk."
            }
          ],
          "transcript": ""
        },
        {
          "id": 3,
          "title": "Part 3: Discussion on Nudge Theory",
          "description": "Students discuss nudge theory and its applications in public policy.",
          "audio": "audio/IELTS_19_Test_2_Part3.m4a",
          "questions": [
            {
              "num": 21,
              "type": "FILL",
              "text": "Nudge theory was popularised by _________ and Sunstein.",
              "answer": "Thaler",
              "explanation": "Thaler and Sunstein are credited with popularising nudge theory."
            },
            {
              "num": 22,
              "type": "MCQ",
              "text": "What is a 'nudge' in the context of behavioural economics?",
              "options": [
                "A. A financial incentive",
                "B. A subtle change to the environment that guides behaviour",
                "C. A legal requirement to change behaviour",
                "D. An educational campaign"
              ],
              "answer": "B",
              "explanation": "A nudge is a subtle environmental change that guides behaviour without compulsion."
            },
            {
              "num": 23,
              "type": "MCQ",
              "text": "The default organ donation opt-out system is an example of:",
              "options": [
                "A. Financial nudging",
                "B. Regulatory coercion",
                "C. Framing effects",
                "D. Default setting nudging"
              ],
              "answer": "D",
              "explanation": "Changing the default to opt-out (rather than opt-in) is a classic default nudge."
            },
            {
              "num": 24,
              "type": "MCQ",
              "text": "One criticism of nudge theory is that it:",
              "options": [
                "A. Is too expensive to implement",
                "B. Is manipulative and undermines autonomy",
                "C. Only works in wealthy countries",
                "D. Requires extensive public education"
              ],
              "answer": "B",
              "explanation": "Critics argue nudges can be manipulative and undermine individual autonomy."
            },
            {
              "num": 25,
              "type": "FILL",
              "text": "Placing healthy food at _________ in cafeterias increases consumption.",
              "answer": "eye level",
              "explanation": "Positioning healthy food at eye level is a well-known nudge technique."
            },
            {
              "num": 26,
              "type": "MCQ",
              "text": "Thaler won the Nobel Prize in:",
              "options": [
                "A. Medicine",
                "B. Peace",
                "C. Economics",
                "D. Physics"
              ],
              "answer": "C",
              "explanation": "Thaler won the Nobel Prize in Economics in 2017."
            },
            {
              "num": 27,
              "type": "MCQ",
              "text": "The student argues that nudge theory is most effective when:",
              "options": [
                "A. Combined with financial penalties",
                "B. Used alongside education and awareness campaigns",
                "C. Mandated by law",
                "D. Applied only to food choices"
              ],
              "answer": "B",
              "explanation": "Nudges work best when combined with education and awareness."
            },
            {
              "num": 28,
              "type": "FILL",
              "text": "The idea that people make _________ choices in certain contexts is central to nudge theory.",
              "answer": "irrational",
              "explanation": "Nudge theory is based on the insight that people often make irrational choices."
            },
            {
              "num": 29,
              "type": "MCQ",
              "text": "The concept of 'choice architecture' refers to:",
              "options": [
                "A. Designing buildings to encourage activity",
                "B. How the presentation of choices affects decisions",
                "C. The legal framework for consumer choice",
                "D. Economic models of rational decision-making"
              ],
              "answer": "B",
              "explanation": "Choice architecture is how the way choices are presented influences which option people select."
            },
            {
              "num": 30,
              "type": "MCQ",
              "text": "The students plan to focus their presentation on:",
              "options": [
                "A. The history of behavioural economics",
                "B. Case studies of nudge theory in public health policy",
                "C. The economics of welfare policy",
                "D. Theories of rational behaviour"
              ],
              "answer": "B",
              "explanation": "They agree to use real public health policy case studies to illustrate the theory."
            }
          ],
          "transcript": ""
        },
        {
          "id": 4,
          "title": "Part 4: The Science of Memory",
          "description": "A lecture on how human memory works and current research into memory disorders.",
          "audio": "audio/IELTS_19_Test_2_Part4.m4a",
          "questions": [
            {
              "num": 31,
              "type": "MCQ",
              "text": "The hippocampus is primarily associated with:",
              "options": [
                "A. Motor control",
                "B. Language processing",
                "C. The formation of new memories",
                "D. Visual perception"
              ],
              "answer": "C",
              "explanation": "The hippocampus plays a key role in forming new long-term memories."
            },
            {
              "num": 32,
              "type": "FILL",
              "text": "The three stages of memory processing are encoding, storage, and _________.",
              "answer": "retrieval",
              "explanation": "Memory involves encoding, storage, and retrieval."
            },
            {
              "num": 33,
              "type": "MCQ",
              "text": "Working memory is described as:",
              "options": [
                "A. Long-term unconscious memory",
                "B. The ability to recall childhood events",
                "C. A temporary mental workspace for active thinking",
                "D. Emotional memory stored in the amygdala"
              ],
              "answer": "C",
              "explanation": "Working memory is the temporary mental space used for active cognitive tasks."
            },
            {
              "num": 34,
              "type": "FILL",
              "text": "Long-term potentiation strengthens connections between _________.",
              "answer": "neurons",
              "explanation": "Long-term potentiation (LTP) strengthens synaptic connections between neurons."
            },
            {
              "num": 35,
              "type": "MCQ",
              "text": "Sleep is important for memory because:",
              "options": [
                "A. It prevents memory decay",
                "B. It allows the brain to consolidate memories",
                "C. It increases dopamine production",
                "D. It activates the hippocampus for the first time"
              ],
              "answer": "B",
              "explanation": "During sleep, the brain consolidates and organises newly formed memories."
            },
            {
              "num": 36,
              "type": "MCQ",
              "text": "Alzheimer's disease primarily affects:",
              "options": [
                "A. Motor skills first",
                "B. Language comprehension",
                "C. Long-term memory before short-term",
                "D. Short-term memory and the ability to form new memories first"
              ],
              "answer": "D",
              "explanation": "Alzheimer's typically affects the formation of new memories and short-term recall first."
            },
            {
              "num": 37,
              "type": "FILL",
              "text": "The 'forgetting curve' was identified by Hermann _________.",
              "answer": "Ebbinghaus",
              "explanation": "Hermann Ebbinghaus documented the forgetting curve through memory experiments."
            },
            {
              "num": 38,
              "type": "MCQ",
              "text": "The method of loci memory technique involves:",
              "options": [
                "A. Repeating information out loud",
                "B. Writing information in different colours",
                "C. Associating information with locations in a familiar place",
                "D. Using music to aid recall"
              ],
              "answer": "C",
              "explanation": "The method of loci involves mentally placing information at locations along a familiar route."
            },
            {
              "num": 39,
              "type": "MCQ",
              "text": "Implicit memory refers to:",
              "options": [
                "A. Memories we can consciously recall",
                "B. Memories of specific personal events",
                "C. Unconscious memories that influence behaviour and skills",
                "D. Emotional memories formed in childhood"
              ],
              "answer": "C",
              "explanation": "Implicit memory includes unconscious skills and conditioned responses."
            },
            {
              "num": 40,
              "type": "FILL",
              "text": "Spaced repetition improves memory retention by revisiting information at increasing _________.",
              "answer": "intervals",
              "explanation": "Spaced repetition uses increasing time intervals between study sessions to strengthen retention."
            }
          ],
          "transcript": ""
        }
      ]
    },
    "reading": {
      "passages": [
        {
          "title": "Passage 1: The Industrial Revolution in Britain",
          "text": "<p>The Industrial Revolution, beginning in Britain in the late 18th century, transformed society from agrarian to industrial. The steam engine, powered by coal, revolutionized manufacturing and transport. This shift led to rapid urbanization as rural workers migrated to cities to find factory jobs, creating new social classes and economic structures.</p>",
          "questions": [
            {
              "num": 1,
              "type": "FILL",
              "text": "The _________ Revolution, beginning in Britain in the late 18th century, transformed society from agrarian to industrial",
              "answer": "industrial",
              "explanation": "The passage notes that the industrial is essential in this context.",
              "location": "Paragraph 1, Sentence 1"
            },
            {
              "num": 2,
              "type": "TFNG",
              "text": "The Industrial Revolution, beginning in Britain in the late 18th century, transformed society from agrarian to industrial",
              "options": [
                "TRUE",
                "FALSE",
                "NOT GIVEN"
              ],
              "answer": "TRUE",
              "explanation": "The statement directly matches the text: \"The Industrial Revolution, beginning in Britain in the late 18th century, transformed society from agrarian to industrial\".",
              "location": "Paragraph 1, Sentence 1"
            },
            {
              "num": 3,
              "type": "MCQ",
              "text": "According to paragraph 1, what is the main finding regarding Industrial Revolution?",
              "options": [
                "A. It has a significant negative impact on resources",
                "B. It represents a key advancement in the field",
                "C. It has been widely criticized by modern researchers",
                "D. It is no longer considered relevant"
              ],
              "answer": "B",
              "explanation": "The text confirms that this development is a major advancement: \"The Industrial Revolution, beginning in Britain in the late 18th century, transformed society from agrarian to industrial\".",
              "location": "Paragraph 1, Sentence 1"
            },
            {
              "num": 4,
              "type": "FILL",
              "text": "The _________ Revolution, beginning in Britain in the late 18th century, transformed society from agrarian to industrial",
              "answer": "industrial",
              "explanation": "The passage notes that the industrial is essential in this context.",
              "location": "Paragraph 1, Sentence 1"
            },
            {
              "num": 5,
              "type": "TFNG",
              "text": "The Industrial Revolution, beginning in Britain in the late 18th century, transformed society from agrarian to industrial",
              "options": [
                "TRUE",
                "FALSE",
                "NOT GIVEN"
              ],
              "answer": "TRUE",
              "explanation": "The statement directly matches the text: \"The Industrial Revolution, beginning in Britain in the late 18th century, transformed society from agrarian to industrial\".",
              "location": "Paragraph 1, Sentence 1"
            },
            {
              "num": 6,
              "type": "MCQ",
              "text": "According to paragraph 1, what is the main finding regarding Industrial Revolution?",
              "options": [
                "A. It has a significant negative impact on resources",
                "B. It represents a key advancement in the field",
                "C. It has been widely criticized by modern researchers",
                "D. It is no longer considered relevant"
              ],
              "answer": "B",
              "explanation": "The text confirms that this development is a major advancement: \"The Industrial Revolution, beginning in Britain in the late 18th century, transformed society from agrarian to industrial\".",
              "location": "Paragraph 1, Sentence 1"
            },
            {
              "num": 7,
              "type": "FILL",
              "text": "The _________ Revolution, beginning in Britain in the late 18th century, transformed society from agrarian to industrial",
              "answer": "industrial",
              "explanation": "The passage notes that the industrial is essential in this context.",
              "location": "Paragraph 1, Sentence 1"
            },
            {
              "num": 8,
              "type": "TFNG",
              "text": "The Industrial Revolution, beginning in Britain in the late 18th century, transformed society from agrarian to industrial",
              "options": [
                "TRUE",
                "FALSE",
                "NOT GIVEN"
              ],
              "answer": "TRUE",
              "explanation": "The statement directly matches the text: \"The Industrial Revolution, beginning in Britain in the late 18th century, transformed society from agrarian to industrial\".",
              "location": "Paragraph 1, Sentence 1"
            },
            {
              "num": 9,
              "type": "MCQ",
              "text": "According to paragraph 1, what is the main finding regarding Industrial Revolution?",
              "options": [
                "A. It has a significant negative impact on resources",
                "B. It represents a key advancement in the field",
                "C. It has been widely criticized by modern researchers",
                "D. It is no longer considered relevant"
              ],
              "answer": "B",
              "explanation": "The text confirms that this development is a major advancement: \"The Industrial Revolution, beginning in Britain in the late 18th century, transformed society from agrarian to industrial\".",
              "location": "Paragraph 1, Sentence 1"
            },
            {
              "num": 10,
              "type": "FILL",
              "text": "The _________ Revolution, beginning in Britain in the late 18th century, transformed society from agrarian to industrial",
              "answer": "industrial",
              "explanation": "The passage notes that the industrial is essential in this context.",
              "location": "Paragraph 1, Sentence 1"
            },
            {
              "num": 11,
              "type": "TFNG",
              "text": "The Industrial Revolution, beginning in Britain in the late 18th century, transformed society from agrarian to industrial",
              "options": [
                "TRUE",
                "FALSE",
                "NOT GIVEN"
              ],
              "answer": "TRUE",
              "explanation": "The statement directly matches the text: \"The Industrial Revolution, beginning in Britain in the late 18th century, transformed society from agrarian to industrial\".",
              "location": "Paragraph 1, Sentence 1"
            },
            {
              "num": 12,
              "type": "MCQ",
              "text": "According to paragraph 1, what is the main finding regarding Industrial Revolution?",
              "options": [
                "A. It has a significant negative impact on resources",
                "B. It represents a key advancement in the field",
                "C. It has been widely criticized by modern researchers",
                "D. It is no longer considered relevant"
              ],
              "answer": "B",
              "explanation": "The text confirms that this development is a major advancement: \"The Industrial Revolution, beginning in Britain in the late 18th century, transformed society from agrarian to industrial\".",
              "location": "Paragraph 1, Sentence 1"
            },
            {
              "num": 13,
              "type": "FILL",
              "text": "The _________ Revolution, beginning in Britain in the late 18th century, transformed society from agrarian to industrial",
              "answer": "industrial",
              "explanation": "The passage notes that the industrial is essential in this context.",
              "location": "Paragraph 1, Sentence 1"
            }
          ]
        },
        {
          "title": "Passage 2: Athletes and Stress",
          "text": "<p>Athletes face intense psychological pressure, which can cause significant stress and anxiety. While moderate stress can enhance focus, excessive anxiety often leads to performance decline or 'choking.' Sports psychologists teach athletes coping mechanisms, such as visualization and breathing exercises, to maintain optimal performance.</p>",
          "questions": [
            {
              "num": 14,
              "type": "TFNG",
              "text": "Athletes face intense psychological pressure, which can cause significant stress and anxiety",
              "options": [
                "TRUE",
                "FALSE",
                "NOT GIVEN"
              ],
              "answer": "TRUE",
              "explanation": "The statement directly matches the text: \"Athletes face intense psychological pressure, which can cause significant stress and anxiety\".",
              "location": "Paragraph 1, Sentence 1"
            },
            {
              "num": 15,
              "type": "MCQ",
              "text": "According to paragraph 1, what is the main finding regarding  Athletes and Stress?",
              "options": [
                "A. It has a significant negative impact on resources",
                "B. It represents a key advancement in the field",
                "C. It has been widely criticized by modern researchers",
                "D. It is no longer considered relevant"
              ],
              "answer": "B",
              "explanation": "The text confirms that this development is a major advancement: \"Athletes face intense psychological pressure, which can cause significant stress and anxiety\".",
              "location": "Paragraph 1, Sentence 1"
            },
            {
              "num": 16,
              "type": "FILL",
              "text": "_________ face intense psychological pressure, which can cause significant stress and anxiety",
              "answer": "athletes",
              "explanation": "The passage notes that the athletes is essential in this context.",
              "location": "Paragraph 1, Sentence 1"
            },
            {
              "num": 17,
              "type": "TFNG",
              "text": "Athletes face intense psychological pressure, which can cause significant stress and anxiety",
              "options": [
                "TRUE",
                "FALSE",
                "NOT GIVEN"
              ],
              "answer": "TRUE",
              "explanation": "The statement directly matches the text: \"Athletes face intense psychological pressure, which can cause significant stress and anxiety\".",
              "location": "Paragraph 1, Sentence 1"
            },
            {
              "num": 18,
              "type": "MCQ",
              "text": "According to paragraph 1, what is the main finding regarding  Athletes and Stress?",
              "options": [
                "A. It has a significant negative impact on resources",
                "B. It represents a key advancement in the field",
                "C. It has been widely criticized by modern researchers",
                "D. It is no longer considered relevant"
              ],
              "answer": "B",
              "explanation": "The text confirms that this development is a major advancement: \"Athletes face intense psychological pressure, which can cause significant stress and anxiety\".",
              "location": "Paragraph 1, Sentence 1"
            },
            {
              "num": 19,
              "type": "FILL",
              "text": "_________ face intense psychological pressure, which can cause significant stress and anxiety",
              "answer": "athletes",
              "explanation": "The passage notes that the athletes is essential in this context.",
              "location": "Paragraph 1, Sentence 1"
            },
            {
              "num": 20,
              "type": "TFNG",
              "text": "Athletes face intense psychological pressure, which can cause significant stress and anxiety",
              "options": [
                "TRUE",
                "FALSE",
                "NOT GIVEN"
              ],
              "answer": "TRUE",
              "explanation": "The statement directly matches the text: \"Athletes face intense psychological pressure, which can cause significant stress and anxiety\".",
              "location": "Paragraph 1, Sentence 1"
            },
            {
              "num": 21,
              "type": "MCQ",
              "text": "According to paragraph 1, what is the main finding regarding  Athletes and Stress?",
              "options": [
                "A. It has a significant negative impact on resources",
                "B. It represents a key advancement in the field",
                "C. It has been widely criticized by modern researchers",
                "D. It is no longer considered relevant"
              ],
              "answer": "B",
              "explanation": "The text confirms that this development is a major advancement: \"Athletes face intense psychological pressure, which can cause significant stress and anxiety\".",
              "location": "Paragraph 1, Sentence 1"
            },
            {
              "num": 22,
              "type": "FILL",
              "text": "_________ face intense psychological pressure, which can cause significant stress and anxiety",
              "answer": "athletes",
              "explanation": "The passage notes that the athletes is essential in this context.",
              "location": "Paragraph 1, Sentence 1"
            },
            {
              "num": 23,
              "type": "TFNG",
              "text": "Athletes face intense psychological pressure, which can cause significant stress and anxiety",
              "options": [
                "TRUE",
                "FALSE",
                "NOT GIVEN"
              ],
              "answer": "TRUE",
              "explanation": "The statement directly matches the text: \"Athletes face intense psychological pressure, which can cause significant stress and anxiety\".",
              "location": "Paragraph 1, Sentence 1"
            },
            {
              "num": 24,
              "type": "MCQ",
              "text": "According to paragraph 1, what is the main finding regarding  Athletes and Stress?",
              "options": [
                "A. It has a significant negative impact on resources",
                "B. It represents a key advancement in the field",
                "C. It has been widely criticized by modern researchers",
                "D. It is no longer considered relevant"
              ],
              "answer": "B",
              "explanation": "The text confirms that this development is a major advancement: \"Athletes face intense psychological pressure, which can cause significant stress and anxiety\".",
              "location": "Paragraph 1, Sentence 1"
            },
            {
              "num": 25,
              "type": "FILL",
              "text": "_________ face intense psychological pressure, which can cause significant stress and anxiety",
              "answer": "athletes",
              "explanation": "The passage notes that the athletes is essential in this context.",
              "location": "Paragraph 1, Sentence 1"
            },
            {
              "num": 26,
              "type": "TFNG",
              "text": "Athletes face intense psychological pressure, which can cause significant stress and anxiety",
              "options": [
                "TRUE",
                "FALSE",
                "NOT GIVEN"
              ],
              "answer": "TRUE",
              "explanation": "The statement directly matches the text: \"Athletes face intense psychological pressure, which can cause significant stress and anxiety\".",
              "location": "Paragraph 1, Sentence 1"
            }
          ]
        },
        {
          "title": "Passage 3: The Evolution of Language",
          "text": "<p>The origins of human language remain a subject of intense scientific study. Some linguists argue that language evolved from primitive gestures and vocalizations. Others propose that humans possess an innate 'universal grammar' that enabled the rapid development of complex speech. Research on animal communication provides clues to these evolutionary origins.</p>",
          "questions": [
            {
              "num": 27,
              "type": "MCQ",
              "text": "According to paragraph 1, what is the main finding regarding  Language Evolution?",
              "options": [
                "A. It has a significant negative impact on resources",
                "B. It represents a key advancement in the field",
                "C. It has been widely criticized by modern researchers",
                "D. It is no longer considered relevant"
              ],
              "answer": "B",
              "explanation": "The text confirms that this development is a major advancement: \"The origins of human language remain a subject of intense scientific study\".",
              "location": "Paragraph 1, Sentence 1"
            },
            {
              "num": 28,
              "type": "FILL",
              "text": "The _________ of human language remain a subject of intense scientific study",
              "answer": "origins",
              "explanation": "The passage notes that the origins is essential in this context.",
              "location": "Paragraph 1, Sentence 1"
            },
            {
              "num": 29,
              "type": "TFNG",
              "text": "The origins of human language remain a subject of intense scientific study",
              "options": [
                "TRUE",
                "FALSE",
                "NOT GIVEN"
              ],
              "answer": "TRUE",
              "explanation": "The statement directly matches the text: \"The origins of human language remain a subject of intense scientific study\".",
              "location": "Paragraph 1, Sentence 1"
            },
            {
              "num": 30,
              "type": "MCQ",
              "text": "According to paragraph 1, what is the main finding regarding  Language Evolution?",
              "options": [
                "A. It has a significant negative impact on resources",
                "B. It represents a key advancement in the field",
                "C. It has been widely criticized by modern researchers",
                "D. It is no longer considered relevant"
              ],
              "answer": "B",
              "explanation": "The text confirms that this development is a major advancement: \"The origins of human language remain a subject of intense scientific study\".",
              "location": "Paragraph 1, Sentence 1"
            },
            {
              "num": 31,
              "type": "FILL",
              "text": "The _________ of human language remain a subject of intense scientific study",
              "answer": "origins",
              "explanation": "The passage notes that the origins is essential in this context.",
              "location": "Paragraph 1, Sentence 1"
            },
            {
              "num": 32,
              "type": "TFNG",
              "text": "The origins of human language remain a subject of intense scientific study",
              "options": [
                "TRUE",
                "FALSE",
                "NOT GIVEN"
              ],
              "answer": "TRUE",
              "explanation": "The statement directly matches the text: \"The origins of human language remain a subject of intense scientific study\".",
              "location": "Paragraph 1, Sentence 1"
            },
            {
              "num": 33,
              "type": "MCQ",
              "text": "According to paragraph 1, what is the main finding regarding  Language Evolution?",
              "options": [
                "A. It has a significant negative impact on resources",
                "B. It represents a key advancement in the field",
                "C. It has been widely criticized by modern researchers",
                "D. It is no longer considered relevant"
              ],
              "answer": "B",
              "explanation": "The text confirms that this development is a major advancement: \"The origins of human language remain a subject of intense scientific study\".",
              "location": "Paragraph 1, Sentence 1"
            },
            {
              "num": 34,
              "type": "FILL",
              "text": "The _________ of human language remain a subject of intense scientific study",
              "answer": "origins",
              "explanation": "The passage notes that the origins is essential in this context.",
              "location": "Paragraph 1, Sentence 1"
            },
            {
              "num": 35,
              "type": "TFNG",
              "text": "The origins of human language remain a subject of intense scientific study",
              "options": [
                "TRUE",
                "FALSE",
                "NOT GIVEN"
              ],
              "answer": "TRUE",
              "explanation": "The statement directly matches the text: \"The origins of human language remain a subject of intense scientific study\".",
              "location": "Paragraph 1, Sentence 1"
            },
            {
              "num": 36,
              "type": "MCQ",
              "text": "According to paragraph 1, what is the main finding regarding  Language Evolution?",
              "options": [
                "A. It has a significant negative impact on resources",
                "B. It represents a key advancement in the field",
                "C. It has been widely criticized by modern researchers",
                "D. It is no longer considered relevant"
              ],
              "answer": "B",
              "explanation": "The text confirms that this development is a major advancement: \"The origins of human language remain a subject of intense scientific study\".",
              "location": "Paragraph 1, Sentence 1"
            },
            {
              "num": 37,
              "type": "FILL",
              "text": "The _________ of human language remain a subject of intense scientific study",
              "answer": "origins",
              "explanation": "The passage notes that the origins is essential in this context.",
              "location": "Paragraph 1, Sentence 1"
            },
            {
              "num": 38,
              "type": "TFNG",
              "text": "The origins of human language remain a subject of intense scientific study",
              "options": [
                "TRUE",
                "FALSE",
                "NOT GIVEN"
              ],
              "answer": "TRUE",
              "explanation": "The statement directly matches the text: \"The origins of human language remain a subject of intense scientific study\".",
              "location": "Paragraph 1, Sentence 1"
            },
            {
              "num": 39,
              "type": "MCQ",
              "text": "According to paragraph 1, what is the main finding regarding  Language Evolution?",
              "options": [
                "A. It has a significant negative impact on resources",
                "B. It represents a key advancement in the field",
                "C. It has been widely criticized by modern researchers",
                "D. It is no longer considered relevant"
              ],
              "answer": "B",
              "explanation": "The text confirms that this development is a major advancement: \"The origins of human language remain a subject of intense scientific study\".",
              "location": "Paragraph 1, Sentence 1"
            },
            {
              "num": 40,
              "type": "FILL",
              "text": "The _________ of human language remain a subject of intense scientific study",
              "answer": "origins",
              "explanation": "The passage notes that the origins is essential in this context.",
              "location": "Paragraph 1, Sentence 1"
            }
          ]
        }
      ]
    },
    "writing": {
      "tasks": []
    }
  },
  "7": {
    "title": "Cambridge IELTS 19 — Test 3",
    "book": "IELTS 19",
    "listening": {
      "sections": [
        {
          "id": 1,
          "title": "Part 1: Car Boot Sale Information",
          "description": "A man calls to get information about a local car boot sale.",
          "audio": "audio/IELTS_19_Test_3_Part1.m4a",
          "questions": [
            {
              "num": 1,
              "type": "FILL",
              "text": "Day of the car boot sale: _________",
              "answer": "Sunday",
              "explanation": "The car boot sale takes place every Sunday."
            },
            {
              "num": 2,
              "type": "FILL",
              "text": "Opening time for buyers: _________am",
              "answer": "8",
              "explanation": "Buyers can enter from 8am."
            },
            {
              "num": 3,
              "type": "FILL",
              "text": "Cost for sellers per pitch: £_________",
              "answer": "10",
              "explanation": "Each pitch costs sellers £10."
            },
            {
              "num": 4,
              "type": "MCQ",
              "text": "What time must sellers arrive to set up?",
              "options": [
                "A. 6am",
                "B. 7am",
                "C. 8am",
                "D. 9am"
              ],
              "answer": "A",
              "explanation": "Sellers must arrive at 6am to set up before buyers arrive."
            },
            {
              "num": 5,
              "type": "FILL",
              "text": "Maximum number of tables per pitch: _________",
              "answer": "two",
              "explanation": "Sellers are permitted up to two tables per pitch."
            },
            {
              "num": 6,
              "type": "MCQ",
              "text": "Food sellers require:",
              "options": [
                "A. A special premium pitch",
                "B. Council approval and a food hygiene certificate",
                "C. Only verbal permission on the day",
                "D. A separate licence from the event organiser"
              ],
              "answer": "B",
              "explanation": "Food sellers need council approval and must hold a valid food hygiene certificate."
            },
            {
              "num": 7,
              "type": "FILL",
              "text": "Location of the car boot sale: Riverside _________ Ground",
              "answer": "Sports",
              "explanation": "The event is held at the Riverside Sports Ground."
            },
            {
              "num": 8,
              "type": "FILL",
              "text": "Closing time of the sale: _________pm",
              "answer": "1",
              "explanation": "The sale closes at 1pm each week."
            },
            {
              "num": 9,
              "type": "MCQ",
              "text": "What is NOT permitted at the sale?",
              "options": [
                "A. Second-hand clothing",
                "B. Homemade food items",
                "C. New electrical items",
                "D. Children's toys"
              ],
              "answer": "B",
              "explanation": "Homemade food items are not permitted for sale without a food hygiene certificate."
            },
            {
              "num": 10,
              "type": "FILL",
              "text": "To book a pitch, sellers should call by the preceding _________.",
              "answer": "Thursday",
              "explanation": "Pitches must be booked by the Thursday before the sale."
            }
          ],
          "transcript": ""
        },
        {
          "id": 2,
          "title": "Part 2: Guided Tour of a Science Museum",
          "description": "A museum guide explains the layout and highlights of a science museum.",
          "audio": "audio/IELTS_19_Test_3_Part2.m4a",
          "questions": [
            {
              "num": 11,
              "type": "FILL",
              "text": "Year the museum was founded: _________",
              "answer": "1892",
              "explanation": "The museum was founded in 1892."
            },
            {
              "num": 12,
              "type": "FILL",
              "text": "Number of permanent exhibition galleries: _________",
              "answer": "14",
              "explanation": "The museum has 14 permanent galleries."
            },
            {
              "num": 13,
              "type": "MCQ",
              "text": "The most popular exhibit is:",
              "options": [
                "A. The space exploration gallery",
                "B. The interactive human body display",
                "C. The geological specimens collection",
                "D. The climate change timeline"
              ],
              "answer": "B",
              "explanation": "The interactive human body display draws the most visitors annually."
            },
            {
              "num": 14,
              "type": "FILL",
              "text": "The planetarium shows run every _________ minutes.",
              "answer": "30",
              "explanation": "Planetarium shows are scheduled every 30 minutes throughout the day."
            },
            {
              "num": 15,
              "type": "MCQ",
              "text": "The museum café is located:",
              "options": [
                "A. On the ground floor near the entrance",
                "B. On the rooftop terrace",
                "C. In the basement level",
                "D. On the second floor adjacent to the gift shop"
              ],
              "answer": "D",
              "explanation": "The café is on the second floor next to the gift shop."
            },
            {
              "num": 16,
              "type": "FILL",
              "text": "Schools can book group tours by calling the education department at least _________ weeks in advance.",
              "answer": "three",
              "explanation": "School groups must book at least three weeks in advance."
            },
            {
              "num": 17,
              "type": "MCQ",
              "text": "The newest gallery focuses on:",
              "options": [
                "A. Robotics and artificial intelligence",
                "B. Nanotechnology",
                "C. Space debris and satellite technology",
                "D. Genetic engineering"
              ],
              "answer": "A",
              "explanation": "The newest addition to the museum is the Robotics and AI gallery."
            },
            {
              "num": 18,
              "type": "FILL",
              "text": "Entry is free for children aged _________ and under.",
              "answer": "five",
              "explanation": "Children five and under enter free of charge."
            },
            {
              "num": 19,
              "type": "MCQ",
              "text": "The museum is closed on:",
              "options": [
                "A. Sundays",
                "B. Mondays",
                "C. Christmas Day only",
                "D. Public holidays and Mondays"
              ],
              "answer": "D",
              "explanation": "The museum closes on Mondays and all public holidays."
            },
            {
              "num": 20,
              "type": "FILL",
              "text": "The museum's accessibility service for visitors with disabilities includes audio guides in _________ languages.",
              "answer": "six",
              "explanation": "Audio guides are available in six languages for visitors with hearing or visual impairments."
            }
          ],
          "transcript": ""
        },
        {
          "id": 3,
          "title": "Part 3: Discussion on Food Security Research",
          "description": "Two postgraduate students discuss a seminar on food security.",
          "audio": "audio/IELTS_19_Test_3_Part3.m4a",
          "questions": [
            {
              "num": 21,
              "type": "MCQ",
              "text": "The four pillars of food security are availability, access, utilisation, and:",
              "options": [
                "A. Efficiency",
                "B. Stability",
                "C. Equity",
                "D. Sustainability"
              ],
              "answer": "B",
              "explanation": "The four pillars are: availability, access, utilisation, and stability."
            },
            {
              "num": 22,
              "type": "MCQ",
              "text": "Which region is identified as most at risk of food insecurity?",
              "options": [
                "A. South America",
                "B. Eastern Europe",
                "C. Sub-Saharan Africa",
                "D. South Asia"
              ],
              "answer": "C",
              "explanation": "Sub-Saharan Africa has the highest rates of food insecurity globally."
            },
            {
              "num": 23,
              "type": "FILL",
              "text": "The students agree that _________ farming is a key solution for water-scarce regions.",
              "answer": "drip",
              "explanation": "Drip irrigation farming reduces water usage significantly in arid regions."
            },
            {
              "num": 24,
              "type": "MCQ",
              "text": "One student argues that food waste is responsible for approximately:",
              "options": [
                "A. 10% of global food loss",
                "B. One third of all food produced being lost or wasted",
                "C. Half of all agricultural output",
                "D. 20% of greenhouse gas emissions alone"
              ],
              "answer": "B",
              "explanation": "Approximately one third of all food produced globally is lost or wasted."
            },
            {
              "num": 25,
              "type": "MCQ",
              "text": "The student criticises biofuel production because:",
              "options": [
                "A. It uses too much water",
                "B. It competes with food crops for land",
                "C. It emits more carbon than fossil fuels",
                "D. It is economically unviable"
              ],
              "answer": "B",
              "explanation": "Biofuels compete with food crops for agricultural land, threatening food security."
            },
            {
              "num": 26,
              "type": "FILL",
              "text": "Urban _________ is proposed as a way to produce food in cities.",
              "answer": "farming",
              "explanation": "Urban farming involves growing food within city environments."
            },
            {
              "num": 27,
              "type": "MCQ",
              "text": "The students agree their essay should focus on:",
              "options": [
                "A. The history of famine",
                "B. Policy recommendations for food security",
                "C. The role of multinational food corporations",
                "D. Traditional farming methods"
              ],
              "answer": "B",
              "explanation": "They decide their essay will centre on practical policy recommendations."
            },
            {
              "num": 28,
              "type": "FILL",
              "text": "Climate change threatens food security primarily through more frequent _________ and droughts.",
              "answer": "floods",
              "explanation": "Flooding and droughts caused by climate change severely impact crop yields."
            },
            {
              "num": 29,
              "type": "MCQ",
              "text": "The student describes vertical farming as:",
              "options": [
                "A. Proven and widely adopted",
                "B. Promising but expensive",
                "C. Inefficient and wasteful",
                "D. Only suitable for tropical climates"
              ],
              "answer": "B",
              "explanation": "Vertical farming shows promise but remains costly to scale."
            },
            {
              "num": 30,
              "type": "MCQ",
              "text": "Genetically modified crops are controversial because:",
              "options": [
                "A. They have been proven harmful to humans",
                "B. Of concerns about biodiversity and corporate control",
                "C. They cannot grow in tropical climates",
                "D. They require more water than conventional crops"
              ],
              "answer": "B",
              "explanation": "GM crop debates centre on biodiversity impacts and corporate monopolisation of seeds."
            }
          ],
          "transcript": ""
        },
        {
          "id": 4,
          "title": "Part 4: The Biology of Sleep",
          "description": "A lecture on the science of sleep and its importance for health.",
          "audio": "audio/IELTS_19_Test_3_Part4.m4a",
          "questions": [
            {
              "num": 31,
              "type": "FILL",
              "text": "The two main categories of sleep are REM sleep and _________ sleep.",
              "answer": "non-REM",
              "explanation": "Sleep is divided into REM (Rapid Eye Movement) and non-REM stages."
            },
            {
              "num": 32,
              "type": "MCQ",
              "text": "During REM sleep the brain is:",
              "options": [
                "A. Completely inactive",
                "B. Almost as active as when awake",
                "C. Solely focused on memory consolidation",
                "D. Repairing cellular damage"
              ],
              "answer": "B",
              "explanation": "Brain activity during REM sleep is remarkably similar to wakefulness."
            },
            {
              "num": 33,
              "type": "FILL",
              "text": "The internal body clock is regulated by the _________ nucleus in the hypothalamus.",
              "answer": "suprachiasmatic",
              "explanation": "The suprachiasmatic nucleus (SCN) in the hypothalamus controls circadian rhythms."
            },
            {
              "num": 34,
              "type": "MCQ",
              "text": "Melatonin is produced in response to:",
              "options": [
                "A. Physical activity",
                "B. Darkness",
                "C. Eating",
                "D. Stress"
              ],
              "answer": "B",
              "explanation": "Melatonin production is triggered by darkness and signals to the body that it is time to sleep."
            },
            {
              "num": 35,
              "type": "FILL",
              "text": "Chronic sleep deprivation is linked to increased risk of _________ and obesity.",
              "answer": "diabetes",
              "explanation": "Research links chronic sleep loss to higher rates of type 2 diabetes and obesity."
            },
            {
              "num": 36,
              "type": "MCQ",
              "text": "Growth hormone is primarily released during:",
              "options": [
                "A. REM sleep",
                "B. Wakefulness",
                "C. Deep non-REM sleep",
                "D. Light sleep"
              ],
              "answer": "C",
              "explanation": "Growth hormone is predominantly secreted during deep (slow-wave) non-REM sleep."
            },
            {
              "num": 37,
              "type": "FILL",
              "text": "Sleep spindles occur during stage _________ of non-REM sleep.",
              "answer": "two",
              "explanation": "Sleep spindles are characteristic of stage two non-REM sleep."
            },
            {
              "num": 38,
              "type": "MCQ",
              "text": "Blue light from screens disrupts sleep because:",
              "options": [
                "A. It directly stimulates the sleep centre",
                "B. It suppresses melatonin production",
                "C. It raises body temperature",
                "D. It activates the fight-or-flight response"
              ],
              "answer": "B",
              "explanation": "Blue light wavelengths suppress melatonin production, delaying the onset of sleep."
            },
            {
              "num": 39,
              "type": "FILL",
              "text": "Adults are generally recommended to sleep between 7 and _________ hours per night.",
              "answer": "nine",
              "explanation": "Sleep guidelines recommend 7–9 hours per night for adults."
            },
            {
              "num": 40,
              "type": "MCQ",
              "text": "Narcolepsy is a disorder characterised by:",
              "options": [
                "A. Inability to fall asleep",
                "B. Sudden uncontrollable sleep attacks during the day",
                "C. Extreme sleepiness only at night",
                "D. Sleepwalking episodes"
              ],
              "answer": "B",
              "explanation": "Narcolepsy causes sudden, uncontrollable episodes of falling asleep during the day."
            }
          ],
          "transcript": ""
        }
      ]
    },
    "reading": {
      "passages": [
        {
          "title": "Passage 1: Early Human Art in Caves",
          "text": "<p>Prehistoric cave paintings, dating back tens of thousands of years, offer a window into early human culture. These artworks, often depicting large mammals and hunting scenes, are found deep inside caves. Archaeologists debate their purpose, with theories suggesting they served shamanic rituals, historical records, or forms of communication.</p>",
          "questions": [
            {
              "num": 1,
              "type": "FILL",
              "text": "_________ cave paintings, dating back tens of thousands of years, offer a window into early human culture",
              "answer": "prehistoric",
              "explanation": "The passage notes that the prehistoric is essential in this context.",
              "location": "Paragraph 1, Sentence 1"
            },
            {
              "num": 2,
              "type": "TFNG",
              "text": "Prehistoric cave paintings, dating back tens of thousands of years, offer a window into early human culture",
              "options": [
                "TRUE",
                "FALSE",
                "NOT GIVEN"
              ],
              "answer": "TRUE",
              "explanation": "The statement directly matches the text: \"Prehistoric cave paintings, dating back tens of thousands of years, offer a window into early human culture\".",
              "location": "Paragraph 1, Sentence 1"
            },
            {
              "num": 3,
              "type": "MCQ",
              "text": "According to paragraph 1, what is the main finding regarding Cave Art?",
              "options": [
                "A. It has a significant negative impact on resources",
                "B. It represents a key advancement in the field",
                "C. It has been widely criticized by modern researchers",
                "D. It is no longer considered relevant"
              ],
              "answer": "B",
              "explanation": "The text confirms that this development is a major advancement: \"Prehistoric cave paintings, dating back tens of thousands of years, offer a window into early human culture\".",
              "location": "Paragraph 1, Sentence 1"
            },
            {
              "num": 4,
              "type": "FILL",
              "text": "_________ cave paintings, dating back tens of thousands of years, offer a window into early human culture",
              "answer": "prehistoric",
              "explanation": "The passage notes that the prehistoric is essential in this context.",
              "location": "Paragraph 1, Sentence 1"
            },
            {
              "num": 5,
              "type": "TFNG",
              "text": "Prehistoric cave paintings, dating back tens of thousands of years, offer a window into early human culture",
              "options": [
                "TRUE",
                "FALSE",
                "NOT GIVEN"
              ],
              "answer": "TRUE",
              "explanation": "The statement directly matches the text: \"Prehistoric cave paintings, dating back tens of thousands of years, offer a window into early human culture\".",
              "location": "Paragraph 1, Sentence 1"
            },
            {
              "num": 6,
              "type": "MCQ",
              "text": "According to paragraph 1, what is the main finding regarding Cave Art?",
              "options": [
                "A. It has a significant negative impact on resources",
                "B. It represents a key advancement in the field",
                "C. It has been widely criticized by modern researchers",
                "D. It is no longer considered relevant"
              ],
              "answer": "B",
              "explanation": "The text confirms that this development is a major advancement: \"Prehistoric cave paintings, dating back tens of thousands of years, offer a window into early human culture\".",
              "location": "Paragraph 1, Sentence 1"
            },
            {
              "num": 7,
              "type": "FILL",
              "text": "_________ cave paintings, dating back tens of thousands of years, offer a window into early human culture",
              "answer": "prehistoric",
              "explanation": "The passage notes that the prehistoric is essential in this context.",
              "location": "Paragraph 1, Sentence 1"
            },
            {
              "num": 8,
              "type": "TFNG",
              "text": "Prehistoric cave paintings, dating back tens of thousands of years, offer a window into early human culture",
              "options": [
                "TRUE",
                "FALSE",
                "NOT GIVEN"
              ],
              "answer": "TRUE",
              "explanation": "The statement directly matches the text: \"Prehistoric cave paintings, dating back tens of thousands of years, offer a window into early human culture\".",
              "location": "Paragraph 1, Sentence 1"
            },
            {
              "num": 9,
              "type": "MCQ",
              "text": "According to paragraph 1, what is the main finding regarding Cave Art?",
              "options": [
                "A. It has a significant negative impact on resources",
                "B. It represents a key advancement in the field",
                "C. It has been widely criticized by modern researchers",
                "D. It is no longer considered relevant"
              ],
              "answer": "B",
              "explanation": "The text confirms that this development is a major advancement: \"Prehistoric cave paintings, dating back tens of thousands of years, offer a window into early human culture\".",
              "location": "Paragraph 1, Sentence 1"
            },
            {
              "num": 10,
              "type": "FILL",
              "text": "_________ cave paintings, dating back tens of thousands of years, offer a window into early human culture",
              "answer": "prehistoric",
              "explanation": "The passage notes that the prehistoric is essential in this context.",
              "location": "Paragraph 1, Sentence 1"
            },
            {
              "num": 11,
              "type": "TFNG",
              "text": "Prehistoric cave paintings, dating back tens of thousands of years, offer a window into early human culture",
              "options": [
                "TRUE",
                "FALSE",
                "NOT GIVEN"
              ],
              "answer": "TRUE",
              "explanation": "The statement directly matches the text: \"Prehistoric cave paintings, dating back tens of thousands of years, offer a window into early human culture\".",
              "location": "Paragraph 1, Sentence 1"
            },
            {
              "num": 12,
              "type": "MCQ",
              "text": "According to paragraph 1, what is the main finding regarding Cave Art?",
              "options": [
                "A. It has a significant negative impact on resources",
                "B. It represents a key advancement in the field",
                "C. It has been widely criticized by modern researchers",
                "D. It is no longer considered relevant"
              ],
              "answer": "B",
              "explanation": "The text confirms that this development is a major advancement: \"Prehistoric cave paintings, dating back tens of thousands of years, offer a window into early human culture\".",
              "location": "Paragraph 1, Sentence 1"
            },
            {
              "num": 13,
              "type": "FILL",
              "text": "_________ cave paintings, dating back tens of thousands of years, offer a window into early human culture",
              "answer": "prehistoric",
              "explanation": "The passage notes that the prehistoric is essential in this context.",
              "location": "Paragraph 1, Sentence 1"
            }
          ]
        },
        {
          "title": "Passage 2: Is the Era of Artificial Speech Translation Upon Us?",
          "text": "<p>Recent advancements in machine learning have brought artificial speech translation close to human levels of accuracy. Real-time translation devices can translate spoken words across languages instantly. However, capturing cultural nuances, slang, and emotional tone remains a major challenge for AI translation engines.</p>",
          "questions": [
            {
              "num": 14,
              "type": "TFNG",
              "text": "Recent advancements in machine learning have brought artificial speech translation close to human levels of accuracy",
              "options": [
                "TRUE",
                "FALSE",
                "NOT GIVEN"
              ],
              "answer": "TRUE",
              "explanation": "The statement directly matches the text: \"Recent advancements in machine learning have brought artificial speech translation close to human levels of accuracy\".",
              "location": "Paragraph 1, Sentence 1"
            },
            {
              "num": 15,
              "type": "MCQ",
              "text": "According to paragraph 1, what is the main finding regarding  Speech Translation?",
              "options": [
                "A. It has a significant negative impact on resources",
                "B. It represents a key advancement in the field",
                "C. It has been widely criticized by modern researchers",
                "D. It is no longer considered relevant"
              ],
              "answer": "B",
              "explanation": "The text confirms that this development is a major advancement: \"Recent advancements in machine learning have brought artificial speech translation close to human levels of accuracy\".",
              "location": "Paragraph 1, Sentence 1"
            },
            {
              "num": 16,
              "type": "FILL",
              "text": "_________ advancements in machine learning have brought artificial speech translation close to human levels of accuracy",
              "answer": "recent",
              "explanation": "The passage notes that the recent is essential in this context.",
              "location": "Paragraph 1, Sentence 1"
            },
            {
              "num": 17,
              "type": "TFNG",
              "text": "Recent advancements in machine learning have brought artificial speech translation close to human levels of accuracy",
              "options": [
                "TRUE",
                "FALSE",
                "NOT GIVEN"
              ],
              "answer": "TRUE",
              "explanation": "The statement directly matches the text: \"Recent advancements in machine learning have brought artificial speech translation close to human levels of accuracy\".",
              "location": "Paragraph 1, Sentence 1"
            },
            {
              "num": 18,
              "type": "MCQ",
              "text": "According to paragraph 1, what is the main finding regarding  Speech Translation?",
              "options": [
                "A. It has a significant negative impact on resources",
                "B. It represents a key advancement in the field",
                "C. It has been widely criticized by modern researchers",
                "D. It is no longer considered relevant"
              ],
              "answer": "B",
              "explanation": "The text confirms that this development is a major advancement: \"Recent advancements in machine learning have brought artificial speech translation close to human levels of accuracy\".",
              "location": "Paragraph 1, Sentence 1"
            },
            {
              "num": 19,
              "type": "FILL",
              "text": "_________ advancements in machine learning have brought artificial speech translation close to human levels of accuracy",
              "answer": "recent",
              "explanation": "The passage notes that the recent is essential in this context.",
              "location": "Paragraph 1, Sentence 1"
            },
            {
              "num": 20,
              "type": "TFNG",
              "text": "Recent advancements in machine learning have brought artificial speech translation close to human levels of accuracy",
              "options": [
                "TRUE",
                "FALSE",
                "NOT GIVEN"
              ],
              "answer": "TRUE",
              "explanation": "The statement directly matches the text: \"Recent advancements in machine learning have brought artificial speech translation close to human levels of accuracy\".",
              "location": "Paragraph 1, Sentence 1"
            },
            {
              "num": 21,
              "type": "MCQ",
              "text": "According to paragraph 1, what is the main finding regarding  Speech Translation?",
              "options": [
                "A. It has a significant negative impact on resources",
                "B. It represents a key advancement in the field",
                "C. It has been widely criticized by modern researchers",
                "D. It is no longer considered relevant"
              ],
              "answer": "B",
              "explanation": "The text confirms that this development is a major advancement: \"Recent advancements in machine learning have brought artificial speech translation close to human levels of accuracy\".",
              "location": "Paragraph 1, Sentence 1"
            },
            {
              "num": 22,
              "type": "FILL",
              "text": "_________ advancements in machine learning have brought artificial speech translation close to human levels of accuracy",
              "answer": "recent",
              "explanation": "The passage notes that the recent is essential in this context.",
              "location": "Paragraph 1, Sentence 1"
            },
            {
              "num": 23,
              "type": "TFNG",
              "text": "Recent advancements in machine learning have brought artificial speech translation close to human levels of accuracy",
              "options": [
                "TRUE",
                "FALSE",
                "NOT GIVEN"
              ],
              "answer": "TRUE",
              "explanation": "The statement directly matches the text: \"Recent advancements in machine learning have brought artificial speech translation close to human levels of accuracy\".",
              "location": "Paragraph 1, Sentence 1"
            },
            {
              "num": 24,
              "type": "MCQ",
              "text": "According to paragraph 1, what is the main finding regarding  Speech Translation?",
              "options": [
                "A. It has a significant negative impact on resources",
                "B. It represents a key advancement in the field",
                "C. It has been widely criticized by modern researchers",
                "D. It is no longer considered relevant"
              ],
              "answer": "B",
              "explanation": "The text confirms that this development is a major advancement: \"Recent advancements in machine learning have brought artificial speech translation close to human levels of accuracy\".",
              "location": "Paragraph 1, Sentence 1"
            },
            {
              "num": 25,
              "type": "FILL",
              "text": "_________ advancements in machine learning have brought artificial speech translation close to human levels of accuracy",
              "answer": "recent",
              "explanation": "The passage notes that the recent is essential in this context.",
              "location": "Paragraph 1, Sentence 1"
            },
            {
              "num": 26,
              "type": "TFNG",
              "text": "Recent advancements in machine learning have brought artificial speech translation close to human levels of accuracy",
              "options": [
                "TRUE",
                "FALSE",
                "NOT GIVEN"
              ],
              "answer": "TRUE",
              "explanation": "The statement directly matches the text: \"Recent advancements in machine learning have brought artificial speech translation close to human levels of accuracy\".",
              "location": "Paragraph 1, Sentence 1"
            }
          ]
        },
        {
          "title": "Passage 3: The Psychology of Crowd Behavior",
          "text": "<p>Crowd psychology examines how individuals' behavior changes when they join a large group. In a crowd, people often experience deindividuation—a loss of self-awareness and personal responsibility, leading to impulsive actions. Researchers study crowd dynamics to design safer public events and manage emergency evacuations.</p>",
          "questions": [
            {
              "num": 27,
              "type": "MCQ",
              "text": "According to paragraph 1, what is the main finding regarding  Crowd Psychology?",
              "options": [
                "A. It has a significant negative impact on resources",
                "B. It represents a key advancement in the field",
                "C. It has been widely criticized by modern researchers",
                "D. It is no longer considered relevant"
              ],
              "answer": "B",
              "explanation": "The text confirms that this development is a major advancement: \"Crowd psychology examines how individuals' behavior changes when they join a large group\".",
              "location": "Paragraph 1, Sentence 1"
            },
            {
              "num": 28,
              "type": "FILL",
              "text": "Crowd _________ examines how individuals' behavior changes when they join a large group",
              "answer": "psychology",
              "explanation": "The passage notes that the psychology is essential in this context.",
              "location": "Paragraph 1, Sentence 1"
            },
            {
              "num": 29,
              "type": "TFNG",
              "text": "Crowd psychology examines how individuals' behavior changes when they join a large group",
              "options": [
                "TRUE",
                "FALSE",
                "NOT GIVEN"
              ],
              "answer": "TRUE",
              "explanation": "The statement directly matches the text: \"Crowd psychology examines how individuals' behavior changes when they join a large group\".",
              "location": "Paragraph 1, Sentence 1"
            },
            {
              "num": 30,
              "type": "MCQ",
              "text": "According to paragraph 1, what is the main finding regarding  Crowd Psychology?",
              "options": [
                "A. It has a significant negative impact on resources",
                "B. It represents a key advancement in the field",
                "C. It has been widely criticized by modern researchers",
                "D. It is no longer considered relevant"
              ],
              "answer": "B",
              "explanation": "The text confirms that this development is a major advancement: \"Crowd psychology examines how individuals' behavior changes when they join a large group\".",
              "location": "Paragraph 1, Sentence 1"
            },
            {
              "num": 31,
              "type": "FILL",
              "text": "Crowd _________ examines how individuals' behavior changes when they join a large group",
              "answer": "psychology",
              "explanation": "The passage notes that the psychology is essential in this context.",
              "location": "Paragraph 1, Sentence 1"
            },
            {
              "num": 32,
              "type": "TFNG",
              "text": "Crowd psychology examines how individuals' behavior changes when they join a large group",
              "options": [
                "TRUE",
                "FALSE",
                "NOT GIVEN"
              ],
              "answer": "TRUE",
              "explanation": "The statement directly matches the text: \"Crowd psychology examines how individuals' behavior changes when they join a large group\".",
              "location": "Paragraph 1, Sentence 1"
            },
            {
              "num": 33,
              "type": "MCQ",
              "text": "According to paragraph 1, what is the main finding regarding  Crowd Psychology?",
              "options": [
                "A. It has a significant negative impact on resources",
                "B. It represents a key advancement in the field",
                "C. It has been widely criticized by modern researchers",
                "D. It is no longer considered relevant"
              ],
              "answer": "B",
              "explanation": "The text confirms that this development is a major advancement: \"Crowd psychology examines how individuals' behavior changes when they join a large group\".",
              "location": "Paragraph 1, Sentence 1"
            },
            {
              "num": 34,
              "type": "FILL",
              "text": "Crowd _________ examines how individuals' behavior changes when they join a large group",
              "answer": "psychology",
              "explanation": "The passage notes that the psychology is essential in this context.",
              "location": "Paragraph 1, Sentence 1"
            },
            {
              "num": 35,
              "type": "TFNG",
              "text": "Crowd psychology examines how individuals' behavior changes when they join a large group",
              "options": [
                "TRUE",
                "FALSE",
                "NOT GIVEN"
              ],
              "answer": "TRUE",
              "explanation": "The statement directly matches the text: \"Crowd psychology examines how individuals' behavior changes when they join a large group\".",
              "location": "Paragraph 1, Sentence 1"
            },
            {
              "num": 36,
              "type": "MCQ",
              "text": "According to paragraph 1, what is the main finding regarding  Crowd Psychology?",
              "options": [
                "A. It has a significant negative impact on resources",
                "B. It represents a key advancement in the field",
                "C. It has been widely criticized by modern researchers",
                "D. It is no longer considered relevant"
              ],
              "answer": "B",
              "explanation": "The text confirms that this development is a major advancement: \"Crowd psychology examines how individuals' behavior changes when they join a large group\".",
              "location": "Paragraph 1, Sentence 1"
            },
            {
              "num": 37,
              "type": "FILL",
              "text": "Crowd _________ examines how individuals' behavior changes when they join a large group",
              "answer": "psychology",
              "explanation": "The passage notes that the psychology is essential in this context.",
              "location": "Paragraph 1, Sentence 1"
            },
            {
              "num": 38,
              "type": "TFNG",
              "text": "Crowd psychology examines how individuals' behavior changes when they join a large group",
              "options": [
                "TRUE",
                "FALSE",
                "NOT GIVEN"
              ],
              "answer": "TRUE",
              "explanation": "The statement directly matches the text: \"Crowd psychology examines how individuals' behavior changes when they join a large group\".",
              "location": "Paragraph 1, Sentence 1"
            },
            {
              "num": 39,
              "type": "MCQ",
              "text": "According to paragraph 1, what is the main finding regarding  Crowd Psychology?",
              "options": [
                "A. It has a significant negative impact on resources",
                "B. It represents a key advancement in the field",
                "C. It has been widely criticized by modern researchers",
                "D. It is no longer considered relevant"
              ],
              "answer": "B",
              "explanation": "The text confirms that this development is a major advancement: \"Crowd psychology examines how individuals' behavior changes when they join a large group\".",
              "location": "Paragraph 1, Sentence 1"
            },
            {
              "num": 40,
              "type": "FILL",
              "text": "Crowd _________ examines how individuals' behavior changes when they join a large group",
              "answer": "psychology",
              "explanation": "The passage notes that the psychology is essential in this context.",
              "location": "Paragraph 1, Sentence 1"
            }
          ]
        }
      ]
    },
    "writing": {
      "tasks": []
    }
  },
  "8": {
    "title": "Cambridge IELTS 19 — Test 4",
    "book": "IELTS 19",
    "listening": {
      "sections": [
        {
          "id": 1,
          "title": "Part 1: Tourist Information Centre Enquiry",
          "description": "A visitor calls the tourist information centre to ask about local attractions.",
          "audio": "audio/IELTS_19_Test_4_Part1.m4a",
          "questions": [
            {
              "num": 1,
              "type": "FILL",
              "text": "Name of the historic house: _________ Hall",
              "answer": "Ashworth",
              "explanation": "The visitor asks about Ashworth Hall."
            },
            {
              "num": 2,
              "type": "MCQ",
              "text": "When is Ashworth Hall open to visitors?",
              "options": [
                "A. Every day",
                "B. Wednesday to Sunday",
                "C. Weekends only",
                "D. Monday to Friday"
              ],
              "answer": "B",
              "explanation": "Ashworth Hall is open Wednesday through Sunday."
            },
            {
              "num": 3,
              "type": "FILL",
              "text": "Adult admission price: £_________",
              "answer": "11",
              "explanation": "Adult tickets are £11 each."
            },
            {
              "num": 4,
              "type": "FILL",
              "text": "Child admission price: £_________",
              "answer": "6",
              "explanation": "Child tickets cost £6."
            },
            {
              "num": 5,
              "type": "MCQ",
              "text": "What is included with admission?",
              "options": [
                "A. A guided tour only",
                "B. Access to house and grounds",
                "C. A free tea or coffee",
                "D. A guided tour and refreshments"
              ],
              "answer": "B",
              "explanation": "Admission includes access to both the historic house and its grounds."
            },
            {
              "num": 6,
              "type": "FILL",
              "text": "The nearest train station: _________ Junction",
              "answer": "Westfield",
              "explanation": "Westfield Junction is the nearest train station to the hall."
            },
            {
              "num": 7,
              "type": "FILL",
              "text": "Walking time from the train station: _________ minutes",
              "answer": "20",
              "explanation": "It is a 20-minute walk from the station to the hall."
            },
            {
              "num": 8,
              "type": "MCQ",
              "text": "What event is being held at the hall next month?",
              "options": [
                "A. A food festival",
                "B. A craft fair",
                "C. A classical music concert",
                "D. A living history re-enactment"
              ],
              "answer": "D",
              "explanation": "A living history re-enactment is planned for next month."
            },
            {
              "num": 9,
              "type": "FILL",
              "text": "The hall was built in the _________ century.",
              "answer": "17th",
              "explanation": "Ashworth Hall dates from the 17th century."
            },
            {
              "num": 10,
              "type": "FILL",
              "text": "The hall is surrounded by _________ acres of parkland.",
              "answer": "40",
              "explanation": "The hall sits within 40 acres of parkland."
            }
          ],
          "transcript": ""
        },
        {
          "id": 2,
          "title": "Part 2: Recycling Centre Information",
          "description": "A council worker explains the new recycling arrangements to local residents.",
          "audio": "audio/IELTS_19_Test_4_Part2.m4a",
          "questions": [
            {
              "num": 11,
              "type": "FILL",
              "text": "Number of new recycling banks installed: _________",
              "answer": "18",
              "explanation": "Eighteen new recycling banks have been installed across the district."
            },
            {
              "num": 12,
              "type": "FILL",
              "text": "New collection day for glass: _________",
              "answer": "Wednesday",
              "explanation": "Glass will now be collected on Wednesdays."
            },
            {
              "num": 13,
              "type": "MCQ",
              "text": "Electronic waste should be taken to:",
              "options": [
                "A. The main recycling centre only",
                "B. Any of the new recycling banks",
                "C. Designated electrical waste points at supermarkets",
                "D. The council offices"
              ],
              "answer": "A",
              "explanation": "Electronic waste must be taken to the main recycling centre."
            },
            {
              "num": 14,
              "type": "FILL",
              "text": "The recycling centre is open on weekdays from 8am to _________ pm.",
              "answer": "5",
              "explanation": "The centre operates from 8am to 5pm on weekdays."
            },
            {
              "num": 15,
              "type": "MCQ",
              "text": "What can residents do with large items of furniture?",
              "options": [
                "A. Leave them on the pavement",
                "B. Book a bulky waste collection online or by phone",
                "C. Take them to any recycling bank",
                "D. Use a private waste company"
              ],
              "answer": "B",
              "explanation": "Large furniture items can be collected via a bulky waste collection booking."
            },
            {
              "num": 16,
              "type": "FILL",
              "text": "Bulky waste collection costs: £_________ per item",
              "answer": "12",
              "explanation": "Each bulky item collection costs £12."
            },
            {
              "num": 17,
              "type": "MCQ",
              "text": "Which material cannot go in the blue recycling bin?",
              "options": [
                "A. Cardboard",
                "B. Plastic bottles",
                "C. Black plastic packaging",
                "D. Aluminium cans"
              ],
              "answer": "C",
              "explanation": "Black plastic packaging cannot be sorted by optical sorting machines and should not go in recycling bins."
            },
            {
              "num": 18,
              "type": "FILL",
              "text": "The council's recycling target for next year: _________% of household waste",
              "answer": "65",
              "explanation": "The council aims to recycle 65% of all household waste."
            },
            {
              "num": 19,
              "type": "MCQ",
              "text": "Residents who contaminate recycling bins with non-recyclable waste may:",
              "options": [
                "A. Be fined immediately",
                "B. Receive a warning letter",
                "C. Have their bin emptied anyway",
                "D. Have their bin collection suspended"
              ],
              "answer": "B",
              "explanation": "First-time contamination results in a warning letter from the council."
            },
            {
              "num": 20,
              "type": "FILL",
              "text": "The new recycling app can be downloaded from the council's _________.",
              "answer": "website",
              "explanation": "The recycling app is available for download from the council website."
            }
          ],
          "transcript": ""
        },
        {
          "id": 3,
          "title": "Part 3: Seminar on Artificial Intelligence in Education",
          "description": "Two students discuss the role of AI in education for their seminar.",
          "audio": "audio/IELTS_19_Test_4_Part3.m4a",
          "questions": [
            {
              "num": 21,
              "type": "MCQ",
              "text": "One student argues that AI tutoring systems are most effective for:",
              "options": [
                "A. Teaching creativity",
                "B. Providing immediate personalised feedback",
                "C. Encouraging peer collaboration",
                "D. Assessing complex problem-solving"
              ],
              "answer": "B",
              "explanation": "AI tutoring excels at providing instant, personalised feedback on student responses."
            },
            {
              "num": 22,
              "type": "MCQ",
              "text": "A key concern about AI in education is:",
              "options": [
                "A. The cost of hardware",
                "B. Data privacy and the collection of student information",
                "C. Teachers losing interest in their work",
                "D. Students preferring online learning"
              ],
              "answer": "B",
              "explanation": "Student data privacy is a central ethical concern with AI in educational settings."
            },
            {
              "num": 23,
              "type": "FILL",
              "text": "Adaptive learning systems adjust content based on each student's _________ and progress.",
              "answer": "performance",
              "explanation": "Adaptive systems tailor learning materials to individual student performance and pace."
            },
            {
              "num": 24,
              "type": "MCQ",
              "text": "The students agree that human teachers remain essential for:",
              "options": [
                "A. Grading assignments",
                "B. Delivering factual content",
                "C. Emotional support and mentorship",
                "D. Providing homework"
              ],
              "answer": "C",
              "explanation": "Human teachers are irreplaceable for emotional support and mentorship."
            },
            {
              "num": 25,
              "type": "MCQ",
              "text": "One student expresses concern that AI may:",
              "options": [
                "A. Replace all teachers within ten years",
                "B. Widen the educational achievement gap",
                "C. Make exams easier to cheat in",
                "D. Remove the need for textbooks"
              ],
              "answer": "B",
              "explanation": "If access to AI tools is unequal, the achievement gap between advantaged and disadvantaged students may widen."
            },
            {
              "num": 26,
              "type": "FILL",
              "text": "AI can help detect signs of learning _________ such as dyslexia early.",
              "answer": "difficulties",
              "explanation": "AI analysis of reading and writing patterns can flag potential learning difficulties early."
            },
            {
              "num": 27,
              "type": "MCQ",
              "text": "One student suggests that AI assessment tools are unreliable for:",
              "options": [
                "A. Multiple-choice tests",
                "B. Mathematics problems",
                "C. Creative and analytical writing",
                "D. Language vocabulary tests"
              ],
              "answer": "C",
              "explanation": "Assessing nuance, creativity, and analytical depth in writing remains beyond current AI capabilities."
            },
            {
              "num": 28,
              "type": "FILL",
              "text": "One example of AI in education is automated essay _________ software.",
              "answer": "marking",
              "explanation": "Automated essay marking (AEM) software is one of the most discussed AI tools in education."
            },
            {
              "num": 29,
              "type": "MCQ",
              "text": "The students' seminar topic focuses on:",
              "options": [
                "A. How to program educational AI",
                "B. The ethical dimensions of AI in schools",
                "C. AI in higher education only",
                "D. Government policy on educational technology"
              ],
              "answer": "B",
              "explanation": "Their seminar centres on the ethical implications of AI use in educational settings."
            },
            {
              "num": 30,
              "type": "MCQ",
              "text": "The students decide their conclusion will argue that:",
              "options": [
                "A. AI should be banned from classrooms",
                "B. AI should fully replace human teachers",
                "C. AI is a tool to support rather than replace teachers",
                "D. AI is not yet ready for use in schools"
              ],
              "answer": "C",
              "explanation": "They conclude that AI should be positioned as a supplement to, not a replacement for, teaching."
            }
          ],
          "transcript": ""
        },
        {
          "id": 4,
          "title": "Part 4: The Silk Road",
          "description": "A lecture on the historical significance of the Silk Road trade network.",
          "audio": "audio/IELTS_19_Test_4_Part4.m4a",
          "questions": [
            {
              "num": 31,
              "type": "FILL",
              "text": "The Silk Road connected China to the _________.",
              "answer": "Mediterranean",
              "explanation": "The Silk Road linked China to the Mediterranean world."
            },
            {
              "num": 32,
              "type": "FILL",
              "text": "The term 'Silk Road' was coined by geographer Ferdinand von _________ in 1877.",
              "answer": "Richthofen",
              "explanation": "Ferdinand von Richthofen coined the term in his geographical writings in 1877."
            },
            {
              "num": 33,
              "type": "MCQ",
              "text": "The Silk Road was most active during:",
              "options": [
                "A. The Roman Empire period",
                "B. The Tang Dynasty",
                "C. The Ming Dynasty",
                "D. The Mongol Empire under Genghis Khan"
              ],
              "answer": "B",
              "explanation": "The Silk Road reached its peak during China's Tang Dynasty (618–907 AD)."
            },
            {
              "num": 34,
              "type": "MCQ",
              "text": "Apart from silk, what major goods were traded on the Silk Road?",
              "options": [
                "A. Cotton and coal",
                "B. Spices, glassware and paper",
                "C. Rubber and tobacco",
                "D. Iron ore and timber"
              ],
              "answer": "B",
              "explanation": "Spices, glassware, paper, and many other luxury goods were traded alongside silk."
            },
            {
              "num": 35,
              "type": "MCQ",
              "text": "The spread of Buddhism along the Silk Road is an example of:",
              "options": [
                "A. Political expansion",
                "B. Cultural and religious diffusion",
                "C. Military conquest",
                "D. Economic colonisation"
              ],
              "answer": "B",
              "explanation": "The Silk Road facilitated the spread of religions, including Buddhism, from India to China."
            },
            {
              "num": 36,
              "type": "FILL",
              "text": "The bubonic plague spread westward along the Silk Road in the _________ century.",
              "answer": "14th",
              "explanation": "The Black Death spread from Central Asia to Europe via Silk Road trade routes in the 14th century."
            },
            {
              "num": 37,
              "type": "MCQ",
              "text": "Why did Silk Road trade decline from the 15th century?",
              "options": [
                "A. Overland routes became too dangerous due to bandits",
                "B. New sea routes made maritime trade cheaper and faster",
                "C. The Chinese government banned all trade with the West",
                "D. European demand for silk collapsed"
              ],
              "answer": "B",
              "explanation": "The opening of sea routes by European explorers made maritime trade more efficient than overland caravans."
            },
            {
              "num": 38,
              "type": "FILL",
              "text": "The Silk Road stretched approximately _________ kilometres.",
              "answer": "6,000",
              "explanation": "The Silk Road network stretched some 6,000 kilometres across Asia."
            },
            {
              "num": 39,
              "type": "MCQ",
              "text": "Marco Polo's account of his travels was significant because:",
              "options": [
                "A. It proved the Silk Road existed",
                "B. It introduced Europeans to detailed descriptions of Asia",
                "C. It led directly to the discovery of sea routes",
                "D. It described military campaigns along the route"
              ],
              "answer": "B",
              "explanation": "Marco Polo's writings gave Europeans their first detailed accounts of Asian civilisations and trade."
            },
            {
              "num": 40,
              "type": "FILL",
              "text": "China's modern Belt and Road Initiative has been compared to the ancient _________.",
              "answer": "Silk Road",
              "explanation": "The Belt and Road Initiative is widely described as a modern revival of the historic Silk Road."
            }
          ],
          "transcript": ""
        }
      ]
    },
    "reading": {
      "passages": [
        {
          "title": "Passage 1: Climate Change Impact on British Butterflies",
          "text": "<p>Climate change is shifting the geographic ranges of many butterfly species in Britain. Warming temperatures are forcing some species to migrate northward to find suitable habitats. However, habitat fragmentation and land-use changes restrict their movement, leading to population declines in traditional breeding areas.</p>",
          "questions": [
            {
              "num": 1,
              "type": "FILL",
              "text": "_________ change is shifting the geographic ranges of many butterfly species in Britain",
              "answer": "climate",
              "explanation": "The passage notes that the climate is essential in this context.",
              "location": "Paragraph 1, Sentence 1"
            },
            {
              "num": 2,
              "type": "TFNG",
              "text": "Climate change is shifting the geographic ranges of many butterfly species in Britain",
              "options": [
                "TRUE",
                "FALSE",
                "NOT GIVEN"
              ],
              "answer": "TRUE",
              "explanation": "The statement directly matches the text: \"Climate change is shifting the geographic ranges of many butterfly species in Britain\".",
              "location": "Paragraph 1, Sentence 1"
            },
            {
              "num": 3,
              "type": "MCQ",
              "text": "According to paragraph 1, what is the main finding regarding Butterflies?",
              "options": [
                "A. It has a significant negative impact on resources",
                "B. It represents a key advancement in the field",
                "C. It has been widely criticized by modern researchers",
                "D. It is no longer considered relevant"
              ],
              "answer": "B",
              "explanation": "The text confirms that this development is a major advancement: \"Climate change is shifting the geographic ranges of many butterfly species in Britain\".",
              "location": "Paragraph 1, Sentence 1"
            },
            {
              "num": 4,
              "type": "FILL",
              "text": "_________ change is shifting the geographic ranges of many butterfly species in Britain",
              "answer": "climate",
              "explanation": "The passage notes that the climate is essential in this context.",
              "location": "Paragraph 1, Sentence 1"
            },
            {
              "num": 5,
              "type": "TFNG",
              "text": "Climate change is shifting the geographic ranges of many butterfly species in Britain",
              "options": [
                "TRUE",
                "FALSE",
                "NOT GIVEN"
              ],
              "answer": "TRUE",
              "explanation": "The statement directly matches the text: \"Climate change is shifting the geographic ranges of many butterfly species in Britain\".",
              "location": "Paragraph 1, Sentence 1"
            },
            {
              "num": 6,
              "type": "MCQ",
              "text": "According to paragraph 1, what is the main finding regarding Butterflies?",
              "options": [
                "A. It has a significant negative impact on resources",
                "B. It represents a key advancement in the field",
                "C. It has been widely criticized by modern researchers",
                "D. It is no longer considered relevant"
              ],
              "answer": "B",
              "explanation": "The text confirms that this development is a major advancement: \"Climate change is shifting the geographic ranges of many butterfly species in Britain\".",
              "location": "Paragraph 1, Sentence 1"
            },
            {
              "num": 7,
              "type": "FILL",
              "text": "_________ change is shifting the geographic ranges of many butterfly species in Britain",
              "answer": "climate",
              "explanation": "The passage notes that the climate is essential in this context.",
              "location": "Paragraph 1, Sentence 1"
            },
            {
              "num": 8,
              "type": "TFNG",
              "text": "Climate change is shifting the geographic ranges of many butterfly species in Britain",
              "options": [
                "TRUE",
                "FALSE",
                "NOT GIVEN"
              ],
              "answer": "TRUE",
              "explanation": "The statement directly matches the text: \"Climate change is shifting the geographic ranges of many butterfly species in Britain\".",
              "location": "Paragraph 1, Sentence 1"
            },
            {
              "num": 9,
              "type": "MCQ",
              "text": "According to paragraph 1, what is the main finding regarding Butterflies?",
              "options": [
                "A. It has a significant negative impact on resources",
                "B. It represents a key advancement in the field",
                "C. It has been widely criticized by modern researchers",
                "D. It is no longer considered relevant"
              ],
              "answer": "B",
              "explanation": "The text confirms that this development is a major advancement: \"Climate change is shifting the geographic ranges of many butterfly species in Britain\".",
              "location": "Paragraph 1, Sentence 1"
            },
            {
              "num": 10,
              "type": "FILL",
              "text": "_________ change is shifting the geographic ranges of many butterfly species in Britain",
              "answer": "climate",
              "explanation": "The passage notes that the climate is essential in this context.",
              "location": "Paragraph 1, Sentence 1"
            },
            {
              "num": 11,
              "type": "TFNG",
              "text": "Climate change is shifting the geographic ranges of many butterfly species in Britain",
              "options": [
                "TRUE",
                "FALSE",
                "NOT GIVEN"
              ],
              "answer": "TRUE",
              "explanation": "The statement directly matches the text: \"Climate change is shifting the geographic ranges of many butterfly species in Britain\".",
              "location": "Paragraph 1, Sentence 1"
            },
            {
              "num": 12,
              "type": "MCQ",
              "text": "According to paragraph 1, what is the main finding regarding Butterflies?",
              "options": [
                "A. It has a significant negative impact on resources",
                "B. It represents a key advancement in the field",
                "C. It has been widely criticized by modern researchers",
                "D. It is no longer considered relevant"
              ],
              "answer": "B",
              "explanation": "The text confirms that this development is a major advancement: \"Climate change is shifting the geographic ranges of many butterfly species in Britain\".",
              "location": "Paragraph 1, Sentence 1"
            },
            {
              "num": 13,
              "type": "FILL",
              "text": "_________ change is shifting the geographic ranges of many butterfly species in Britain",
              "answer": "climate",
              "explanation": "The passage notes that the climate is essential in this context.",
              "location": "Paragraph 1, Sentence 1"
            }
          ]
        },
        {
          "title": "Passage 2: Deep-sea Mining",
          "text": "<p>Deep-sea mining involves extracting mineral deposits from the ocean floor, particularly around hydrothermal vents. While these vents contain valuable metals like copper and gold, mining them poses severe risks to unique marine ecosystems. Marine biologists warn that mining could destroy fragile habitats before they are fully studied.</p>",
          "questions": [
            {
              "num": 14,
              "type": "TFNG",
              "text": "Deep-sea mining involves extracting mineral deposits from the ocean floor, particularly around hydrothermal vents",
              "options": [
                "TRUE",
                "FALSE",
                "NOT GIVEN"
              ],
              "answer": "TRUE",
              "explanation": "The statement directly matches the text: \"Deep-sea mining involves extracting mineral deposits from the ocean floor, particularly around hydrothermal vents\".",
              "location": "Paragraph 1, Sentence 1"
            },
            {
              "num": 15,
              "type": "MCQ",
              "text": "According to paragraph 1, what is the main finding regarding  Deep-sea Mining?",
              "options": [
                "A. It has a significant negative impact on resources",
                "B. It represents a key advancement in the field",
                "C. It has been widely criticized by modern researchers",
                "D. It is no longer considered relevant"
              ],
              "answer": "B",
              "explanation": "The text confirms that this development is a major advancement: \"Deep-sea mining involves extracting mineral deposits from the ocean floor, particularly around hydrothermal vents\".",
              "location": "Paragraph 1, Sentence 1"
            },
            {
              "num": 16,
              "type": "FILL",
              "text": "_________ mining involves extracting mineral deposits from the ocean floor, particularly around hydrothermal vents",
              "answer": "deepsea",
              "explanation": "The passage notes that the deepsea is essential in this context.",
              "location": "Paragraph 1, Sentence 1"
            },
            {
              "num": 17,
              "type": "TFNG",
              "text": "Deep-sea mining involves extracting mineral deposits from the ocean floor, particularly around hydrothermal vents",
              "options": [
                "TRUE",
                "FALSE",
                "NOT GIVEN"
              ],
              "answer": "TRUE",
              "explanation": "The statement directly matches the text: \"Deep-sea mining involves extracting mineral deposits from the ocean floor, particularly around hydrothermal vents\".",
              "location": "Paragraph 1, Sentence 1"
            },
            {
              "num": 18,
              "type": "MCQ",
              "text": "According to paragraph 1, what is the main finding regarding  Deep-sea Mining?",
              "options": [
                "A. It has a significant negative impact on resources",
                "B. It represents a key advancement in the field",
                "C. It has been widely criticized by modern researchers",
                "D. It is no longer considered relevant"
              ],
              "answer": "B",
              "explanation": "The text confirms that this development is a major advancement: \"Deep-sea mining involves extracting mineral deposits from the ocean floor, particularly around hydrothermal vents\".",
              "location": "Paragraph 1, Sentence 1"
            },
            {
              "num": 19,
              "type": "FILL",
              "text": "_________ mining involves extracting mineral deposits from the ocean floor, particularly around hydrothermal vents",
              "answer": "deepsea",
              "explanation": "The passage notes that the deepsea is essential in this context.",
              "location": "Paragraph 1, Sentence 1"
            },
            {
              "num": 20,
              "type": "TFNG",
              "text": "Deep-sea mining involves extracting mineral deposits from the ocean floor, particularly around hydrothermal vents",
              "options": [
                "TRUE",
                "FALSE",
                "NOT GIVEN"
              ],
              "answer": "TRUE",
              "explanation": "The statement directly matches the text: \"Deep-sea mining involves extracting mineral deposits from the ocean floor, particularly around hydrothermal vents\".",
              "location": "Paragraph 1, Sentence 1"
            },
            {
              "num": 21,
              "type": "MCQ",
              "text": "According to paragraph 1, what is the main finding regarding  Deep-sea Mining?",
              "options": [
                "A. It has a significant negative impact on resources",
                "B. It represents a key advancement in the field",
                "C. It has been widely criticized by modern researchers",
                "D. It is no longer considered relevant"
              ],
              "answer": "B",
              "explanation": "The text confirms that this development is a major advancement: \"Deep-sea mining involves extracting mineral deposits from the ocean floor, particularly around hydrothermal vents\".",
              "location": "Paragraph 1, Sentence 1"
            },
            {
              "num": 22,
              "type": "FILL",
              "text": "_________ mining involves extracting mineral deposits from the ocean floor, particularly around hydrothermal vents",
              "answer": "deepsea",
              "explanation": "The passage notes that the deepsea is essential in this context.",
              "location": "Paragraph 1, Sentence 1"
            },
            {
              "num": 23,
              "type": "TFNG",
              "text": "Deep-sea mining involves extracting mineral deposits from the ocean floor, particularly around hydrothermal vents",
              "options": [
                "TRUE",
                "FALSE",
                "NOT GIVEN"
              ],
              "answer": "TRUE",
              "explanation": "The statement directly matches the text: \"Deep-sea mining involves extracting mineral deposits from the ocean floor, particularly around hydrothermal vents\".",
              "location": "Paragraph 1, Sentence 1"
            },
            {
              "num": 24,
              "type": "MCQ",
              "text": "According to paragraph 1, what is the main finding regarding  Deep-sea Mining?",
              "options": [
                "A. It has a significant negative impact on resources",
                "B. It represents a key advancement in the field",
                "C. It has been widely criticized by modern researchers",
                "D. It is no longer considered relevant"
              ],
              "answer": "B",
              "explanation": "The text confirms that this development is a major advancement: \"Deep-sea mining involves extracting mineral deposits from the ocean floor, particularly around hydrothermal vents\".",
              "location": "Paragraph 1, Sentence 1"
            },
            {
              "num": 25,
              "type": "FILL",
              "text": "_________ mining involves extracting mineral deposits from the ocean floor, particularly around hydrothermal vents",
              "answer": "deepsea",
              "explanation": "The passage notes that the deepsea is essential in this context.",
              "location": "Paragraph 1, Sentence 1"
            },
            {
              "num": 26,
              "type": "TFNG",
              "text": "Deep-sea mining involves extracting mineral deposits from the ocean floor, particularly around hydrothermal vents",
              "options": [
                "TRUE",
                "FALSE",
                "NOT GIVEN"
              ],
              "answer": "TRUE",
              "explanation": "The statement directly matches the text: \"Deep-sea mining involves extracting mineral deposits from the ocean floor, particularly around hydrothermal vents\".",
              "location": "Paragraph 1, Sentence 1"
            }
          ]
        },
        {
          "title": "Passage 3: The Unselfish Gene Theory",
          "text": "<p>Evolutionary biologists study the genetic basis of cooperative behavior. While selfish genes promote individual survival, group selection models argue that altruistic behaviors thrive because they benefit the group as a whole. This tension between individual and group interests is central to understanding the evolution of social species.</p>",
          "questions": [
            {
              "num": 27,
              "type": "MCQ",
              "text": "According to paragraph 1, what is the main finding regarding  Genetics?",
              "options": [
                "A. It has a significant negative impact on resources",
                "B. It represents a key advancement in the field",
                "C. It has been widely criticized by modern researchers",
                "D. It is no longer considered relevant"
              ],
              "answer": "B",
              "explanation": "The text confirms that this development is a major advancement: \"Evolutionary biologists study the genetic basis of cooperative behavior\".",
              "location": "Paragraph 1, Sentence 1"
            },
            {
              "num": 28,
              "type": "FILL",
              "text": "_________ biologists study the genetic basis of cooperative behavior",
              "answer": "evolutionary",
              "explanation": "The passage notes that the evolutionary is essential in this context.",
              "location": "Paragraph 1, Sentence 1"
            },
            {
              "num": 29,
              "type": "TFNG",
              "text": "Evolutionary biologists study the genetic basis of cooperative behavior",
              "options": [
                "TRUE",
                "FALSE",
                "NOT GIVEN"
              ],
              "answer": "TRUE",
              "explanation": "The statement directly matches the text: \"Evolutionary biologists study the genetic basis of cooperative behavior\".",
              "location": "Paragraph 1, Sentence 1"
            },
            {
              "num": 30,
              "type": "MCQ",
              "text": "According to paragraph 1, what is the main finding regarding  Genetics?",
              "options": [
                "A. It has a significant negative impact on resources",
                "B. It represents a key advancement in the field",
                "C. It has been widely criticized by modern researchers",
                "D. It is no longer considered relevant"
              ],
              "answer": "B",
              "explanation": "The text confirms that this development is a major advancement: \"Evolutionary biologists study the genetic basis of cooperative behavior\".",
              "location": "Paragraph 1, Sentence 1"
            },
            {
              "num": 31,
              "type": "FILL",
              "text": "_________ biologists study the genetic basis of cooperative behavior",
              "answer": "evolutionary",
              "explanation": "The passage notes that the evolutionary is essential in this context.",
              "location": "Paragraph 1, Sentence 1"
            },
            {
              "num": 32,
              "type": "TFNG",
              "text": "Evolutionary biologists study the genetic basis of cooperative behavior",
              "options": [
                "TRUE",
                "FALSE",
                "NOT GIVEN"
              ],
              "answer": "TRUE",
              "explanation": "The statement directly matches the text: \"Evolutionary biologists study the genetic basis of cooperative behavior\".",
              "location": "Paragraph 1, Sentence 1"
            },
            {
              "num": 33,
              "type": "MCQ",
              "text": "According to paragraph 1, what is the main finding regarding  Genetics?",
              "options": [
                "A. It has a significant negative impact on resources",
                "B. It represents a key advancement in the field",
                "C. It has been widely criticized by modern researchers",
                "D. It is no longer considered relevant"
              ],
              "answer": "B",
              "explanation": "The text confirms that this development is a major advancement: \"Evolutionary biologists study the genetic basis of cooperative behavior\".",
              "location": "Paragraph 1, Sentence 1"
            },
            {
              "num": 34,
              "type": "FILL",
              "text": "_________ biologists study the genetic basis of cooperative behavior",
              "answer": "evolutionary",
              "explanation": "The passage notes that the evolutionary is essential in this context.",
              "location": "Paragraph 1, Sentence 1"
            },
            {
              "num": 35,
              "type": "TFNG",
              "text": "Evolutionary biologists study the genetic basis of cooperative behavior",
              "options": [
                "TRUE",
                "FALSE",
                "NOT GIVEN"
              ],
              "answer": "TRUE",
              "explanation": "The statement directly matches the text: \"Evolutionary biologists study the genetic basis of cooperative behavior\".",
              "location": "Paragraph 1, Sentence 1"
            },
            {
              "num": 36,
              "type": "MCQ",
              "text": "According to paragraph 1, what is the main finding regarding  Genetics?",
              "options": [
                "A. It has a significant negative impact on resources",
                "B. It represents a key advancement in the field",
                "C. It has been widely criticized by modern researchers",
                "D. It is no longer considered relevant"
              ],
              "answer": "B",
              "explanation": "The text confirms that this development is a major advancement: \"Evolutionary biologists study the genetic basis of cooperative behavior\".",
              "location": "Paragraph 1, Sentence 1"
            },
            {
              "num": 37,
              "type": "FILL",
              "text": "_________ biologists study the genetic basis of cooperative behavior",
              "answer": "evolutionary",
              "explanation": "The passage notes that the evolutionary is essential in this context.",
              "location": "Paragraph 1, Sentence 1"
            },
            {
              "num": 38,
              "type": "TFNG",
              "text": "Evolutionary biologists study the genetic basis of cooperative behavior",
              "options": [
                "TRUE",
                "FALSE",
                "NOT GIVEN"
              ],
              "answer": "TRUE",
              "explanation": "The statement directly matches the text: \"Evolutionary biologists study the genetic basis of cooperative behavior\".",
              "location": "Paragraph 1, Sentence 1"
            },
            {
              "num": 39,
              "type": "MCQ",
              "text": "According to paragraph 1, what is the main finding regarding  Genetics?",
              "options": [
                "A. It has a significant negative impact on resources",
                "B. It represents a key advancement in the field",
                "C. It has been widely criticized by modern researchers",
                "D. It is no longer considered relevant"
              ],
              "answer": "B",
              "explanation": "The text confirms that this development is a major advancement: \"Evolutionary biologists study the genetic basis of cooperative behavior\".",
              "location": "Paragraph 1, Sentence 1"
            },
            {
              "num": 40,
              "type": "FILL",
              "text": "_________ biologists study the genetic basis of cooperative behavior",
              "answer": "evolutionary",
              "explanation": "The passage notes that the evolutionary is essential in this context.",
              "location": "Paragraph 1, Sentence 1"
            }
          ]
        }
      ]
    },
    "writing": {
      "tasks": []
    }
  },
  "9": {
    "title": "Cambridge IELTS 20 — Test 1",
    "book": "IELTS 20",
    "listening": {
      "sections": [
        {
          "id": 1,
          "title": "Part 1: Community Sports Hall Booking",
          "description": "A woman phones to enquire about booking the community sports hall.",
          "audio": "audio/IELTS_20_Test_1_Part1.m4a",
          "questions": [
            {
              "num": 1,
              "type": "FILL",
              "text": "Name of the sports hall: _________ Community Sports Hall",
              "answer": "Millbrook",
              "explanation": "The sports hall is called the Millbrook Community Sports Hall."
            },
            {
              "num": 2,
              "type": "FILL",
              "text": "Hourly hire rate on weekdays: £_________",
              "answer": "35",
              "explanation": "Weekday hire costs £35 per hour."
            },
            {
              "num": 3,
              "type": "FILL",
              "text": "Hourly hire rate on weekends: £_________",
              "answer": "50",
              "explanation": "Weekend hire is charged at £50 per hour."
            },
            {
              "num": 4,
              "type": "MCQ",
              "text": "What is included in the hire fee?",
              "options": [
                "A. Catering services",
                "B. Use of changing rooms and showers",
                "C. Sports equipment",
                "D. A security guard"
              ],
              "answer": "B",
              "explanation": "Changing rooms and showers are included in the standard hire fee."
            },
            {
              "num": 5,
              "type": "FILL",
              "text": "The hall can accommodate a maximum of _________ people.",
              "answer": "120",
              "explanation": "The maximum capacity of the hall is 120 people."
            },
            {
              "num": 6,
              "type": "FILL",
              "text": "Minimum booking duration: _________ hours",
              "answer": "two",
              "explanation": "Bookings must be for a minimum of two hours."
            },
            {
              "num": 7,
              "type": "MCQ",
              "text": "How far in advance can bookings be made?",
              "options": [
                "A. Up to 2 weeks",
                "B. Up to 4 weeks",
                "C. Up to 3 months",
                "D. Up to 6 months"
              ],
              "answer": "C",
              "explanation": "Bookings can be made up to three months in advance."
            },
            {
              "num": 8,
              "type": "FILL",
              "text": "Cancellation notice required for a full refund: _________ hours",
              "answer": "48",
              "explanation": "48 hours' notice is required to receive a full refund."
            },
            {
              "num": 9,
              "type": "MCQ",
              "text": "What equipment is available for hire at an extra cost?",
              "options": [
                "A. Badminton nets and rackets",
                "B. Basketball hoops",
                "C. A portable stage",
                "D. Trestle tables and chairs"
              ],
              "answer": "D",
              "explanation": "Trestle tables and chairs can be hired separately for events."
            },
            {
              "num": 10,
              "type": "FILL",
              "text": "Contact name for bookings: _________",
              "answer": "David",
              "explanation": "The woman is told to ask for David when making a booking."
            }
          ],
          "transcript": ""
        },
        {
          "id": 2,
          "title": "Part 2: Introduction to Volunteering at a Food Bank",
          "description": "A coordinator explains the volunteering programme at a local food bank.",
          "audio": "audio/IELTS_20_Test_1_Part2.m4a",
          "questions": [
            {
              "num": 11,
              "type": "FILL",
              "text": "Number of households the food bank supports each week: over _________",
              "answer": "500",
              "explanation": "The food bank serves over 500 households per week."
            },
            {
              "num": 12,
              "type": "MCQ",
              "text": "What is the minimum volunteer commitment required?",
              "options": [
                "A. One session per week",
                "B. Two sessions per month",
                "C. One full day per month",
                "D. Three hours per week"
              ],
              "answer": "B",
              "explanation": "Volunteers are asked to commit to at least two sessions per month."
            },
            {
              "num": 13,
              "type": "FILL",
              "text": "Duration of a standard volunteering session: _________ hours",
              "answer": "three",
              "explanation": "Each session lasts approximately three hours."
            },
            {
              "num": 14,
              "type": "MCQ",
              "text": "New volunteers are required to attend:",
              "options": [
                "A. A week-long training programme",
                "B. A two-hour induction session",
                "C. An online course before starting",
                "D. Monthly training updates"
              ],
              "answer": "B",
              "explanation": "All new volunteers must attend a two-hour induction session before their first shift."
            },
            {
              "num": 15,
              "type": "FILL",
              "text": "Volunteers must be aged _________ or over.",
              "answer": "18",
              "explanation": "The minimum age for volunteering is 18."
            },
            {
              "num": 16,
              "type": "MCQ",
              "text": "Which of these tasks do food bank volunteers perform?",
              "options": [
                "A. Delivering food parcels to clients' homes",
                "B. Sorting donations, packing parcels and talking to clients",
                "C. Fundraising in the town centre",
                "D. Driving the food bank van"
              ],
              "answer": "B",
              "explanation": "Volunteers sort donated food, pack parcels, and interact with clients at the food bank."
            },
            {
              "num": 17,
              "type": "FILL",
              "text": "The food bank is open _________ days per week.",
              "answer": "five",
              "explanation": "The food bank operates five days a week."
            },
            {
              "num": 18,
              "type": "MCQ",
              "text": "All volunteers must provide:",
              "options": [
                "A. A character reference only",
                "B. Two references and proof of identity",
                "C. A DBS check certificate",
                "D. Proof of relevant qualifications"
              ],
              "answer": "B",
              "explanation": "Two character references and proof of identity are required from all volunteers."
            },
            {
              "num": 19,
              "type": "FILL",
              "text": "The food bank is located near the _________ station.",
              "answer": "train",
              "explanation": "The food bank is situated close to the train station for easy access."
            },
            {
              "num": 20,
              "type": "MCQ",
              "text": "Donated food items must:",
              "options": [
                "A. Be frozen or refrigerated",
                "B. Be in their original packaging and within date",
                "C. Have been purchased from approved suppliers",
                "D. Be labelled with the donor's name"
              ],
              "answer": "B",
              "explanation": "All donated items must be in original sealed packaging and not past their use-by date."
            }
          ],
          "transcript": ""
        },
        {
          "id": 3,
          "title": "Part 3: Group Project on Urban Planning",
          "description": "Three students discuss their group project on sustainable urban planning.",
          "audio": "audio/IELTS_20_Test_1_Part3.m4a",
          "questions": [
            {
              "num": 21,
              "type": "MCQ",
              "text": "What does '15-minute city' concept mean?",
              "options": [
                "A. Cities that can be crossed in 15 minutes by car",
                "B. Urban design where daily needs are reachable within 15 minutes on foot or by bike",
                "C. Limiting car journeys to 15 minutes per day",
                "D. Reducing commute times to under 15 minutes via public transport"
              ],
              "answer": "B",
              "explanation": "The 15-minute city concept places all daily necessities within a 15-minute walk or cycle."
            },
            {
              "num": 22,
              "type": "MCQ",
              "text": "Which city is cited as the best example of 15-minute city planning?",
              "options": [
                "A. Amsterdam",
                "B. Copenhagen",
                "C. Paris",
                "D. Singapore"
              ],
              "answer": "C",
              "explanation": "Paris under Mayor Anne Hidalgo is the most widely cited example of 15-minute city planning."
            },
            {
              "num": 23,
              "type": "FILL",
              "text": "One student argues that green spaces should cover at least _________ % of any urban area.",
              "answer": "30",
              "explanation": "The student advocates for at minimum 30% green space coverage in cities."
            },
            {
              "num": 24,
              "type": "MCQ",
              "text": "Mixed-use zoning is beneficial because:",
              "options": [
                "A. It reduces property taxes",
                "B. It reduces car dependency by placing homes, offices and shops together",
                "C. It lowers the cost of construction",
                "D. It allows taller buildings to be constructed"
              ],
              "answer": "B",
              "explanation": "Mixed-use zoning combines residential, commercial, and office spaces to reduce travel demand."
            },
            {
              "num": 25,
              "type": "MCQ",
              "text": "One student criticises car-centric city planning because:",
              "options": [
                "A. It makes cities less attractive to tourists",
                "B. It leads to noise pollution only",
                "C. It contributes to obesity, pollution and social isolation",
                "D. It increases property prices"
              ],
              "answer": "C",
              "explanation": "Car-centric planning is linked to sedentary lifestyles, air pollution, and community fragmentation."
            },
            {
              "num": 26,
              "type": "FILL",
              "text": "The group decides to include a case study on _________ as a model for sustainable transit.",
              "answer": "Curitiba",
              "explanation": "Curitiba, Brazil, is selected as their sustainable public transit case study."
            },
            {
              "num": 27,
              "type": "MCQ",
              "text": "The group agrees that their project's main recommendation will be:",
              "options": [
                "A. Banning private cars in city centres",
                "B. Integrating public transport, cycling infrastructure and green space design",
                "C. Building more car parks",
                "D. Reducing city populations through incentives to move to rural areas"
              ],
              "answer": "B",
              "explanation": "Their recommendation focuses on integrated sustainable transport and green infrastructure."
            },
            {
              "num": 28,
              "type": "FILL",
              "text": "One student mentions that urban _________ is a major source of carbon emissions in cities.",
              "answer": "transport",
              "explanation": "Transport is identified as the primary contributor to carbon emissions in urban areas."
            },
            {
              "num": 29,
              "type": "MCQ",
              "text": "What challenge is raised about implementing 15-minute city design in existing cities?",
              "options": [
                "A. Residents opposing cycling lanes",
                "B. High cost of retrofitting existing infrastructure",
                "C. Legal restrictions on land use",
                "D. Shortage of architects"
              ],
              "answer": "B",
              "explanation": "Retrofitting existing cities is expensive and complex compared to new developments."
            },
            {
              "num": 30,
              "type": "MCQ",
              "text": "The students conclude that the most important element of sustainable cities is:",
              "options": [
                "A. Affordable housing",
                "B. Community involvement in planning decisions",
                "C. High-speed rail links",
                "D. Technology-driven smart city systems"
              ],
              "answer": "B",
              "explanation": "They agree that inclusive community participation in planning is the most critical factor."
            }
          ],
          "transcript": ""
        },
        {
          "id": 4,
          "title": "Part 4: Coral Reef Ecosystems",
          "description": "A lecture on the ecological importance of coral reefs and threats to their survival.",
          "audio": "audio/IELTS_20_Test_1_Part4.m4a",
          "questions": [
            {
              "num": 31,
              "type": "FILL",
              "text": "Coral reefs cover less than _________ % of the ocean floor.",
              "answer": "1",
              "explanation": "Despite their importance, coral reefs cover less than 1% of the ocean floor."
            },
            {
              "num": 32,
              "type": "FILL",
              "text": "Coral reefs support approximately _________ % of all marine species.",
              "answer": "25",
              "explanation": "Though tiny in area, coral reefs are home to approximately 25% of all marine species."
            },
            {
              "num": 33,
              "type": "MCQ",
              "text": "Coral bleaching occurs when:",
              "options": [
                "A. Algae overgrow the coral",
                "B. Corals expel the symbiotic algae due to heat stress",
                "C. Water becomes too cold for coral survival",
                "D. Pollution blocks sunlight from reaching the reef"
              ],
              "answer": "B",
              "explanation": "Bleaching happens when thermal stress causes corals to expel their symbiotic zooxanthellae algae."
            },
            {
              "num": 34,
              "type": "MCQ",
              "text": "Zooxanthellae algae are important for coral because:",
              "options": [
                "A. They provide camouflage from predators",
                "B. They give coral its skeleton structure",
                "C. They provide up to 90% of the coral's energy through photosynthesis",
                "D. They clean the water around the reef"
              ],
              "answer": "C",
              "explanation": "Zooxanthellae produce energy through photosynthesis, providing up to 90% of the coral's nutritional needs."
            },
            {
              "num": 35,
              "type": "FILL",
              "text": "The Great Barrier Reef is located in _________.",
              "answer": "Australia",
              "explanation": "The Great Barrier Reef is off the northeastern coast of Australia."
            },
            {
              "num": 36,
              "type": "MCQ",
              "text": "Ocean acidification threatens coral by:",
              "options": [
                "A. Raising water temperature",
                "B. Reducing the availability of carbonate ions needed to build coral skeletons",
                "C. Introducing invasive fish species",
                "D. Increasing water turbidity"
              ],
              "answer": "B",
              "explanation": "Acidification reduces carbonate ion availability, inhibiting the growth of coral skeletons."
            },
            {
              "num": 37,
              "type": "MCQ",
              "text": "What human activity contributes most to coral reef decline?",
              "options": [
                "A. Recreational diving",
                "B. Coastal development, pollution and climate change",
                "C. Scientific research and sampling",
                "D. Fish farming near reefs"
              ],
              "answer": "B",
              "explanation": "Coastal development, runoff pollution, and climate change are the primary anthropogenic threats."
            },
            {
              "num": 38,
              "type": "FILL",
              "text": "Coral can reproduce both sexually through spawning and _________ through fragmentation.",
              "answer": "asexually",
              "explanation": "Corals reproduce sexually via mass spawning events and asexually through fragmentation."
            },
            {
              "num": 39,
              "type": "MCQ",
              "text": "One promising reef restoration technique involves:",
              "options": [
                "A. Transplanting coral fragments grown in nurseries",
                "B. Introducing genetically engineered predators",
                "C. Using chemical treatments to reduce bleaching",
                "D. Covering reefs with shade cloth to reduce temperature"
              ],
              "answer": "A",
              "explanation": "Coral gardening — growing fragments in nurseries and transplanting them — is a leading restoration method."
            },
            {
              "num": 40,
              "type": "FILL",
              "text": "Limiting global warming to no more than _________ degrees Celsius is considered critical for coral survival.",
              "answer": "1.5",
              "explanation": "Scientists warn that global warming beyond 1.5°C will cause catastrophic, irreversible coral bleaching."
            }
          ],
          "transcript": ""
        }
      ]
    },
    "reading": {
      "passages": [
        {
          "title": "Passage 1: Kākāpō Conservation",
          "text": "<p>The kākāpō is a species of large, flightless, nocturnal parrot endemic to New Zealand. It is one of the world's most endangered birds, having been brought to the brink of extinction by habitat destruction and introduced mammalian predators such as stoats, cats, and rats. Unlike other parrots, the kākāpō is heavy—males can weigh up to 4 kg—and has a unique lek-breeding system where males gather in arenas to perform booming calls to attract females.</p>\n        <p>In the late 20th century, the New Zealand Department of Conservation established the Kākāpō Recovery Programme. The key strategy was to relocate the remaining population to predator-free offshore islands, such as Codfish Island (Whenua Hou) and Anchor Island. These islands are heavily monitored, and conservationists manage every aspect of the birds' lives, including providing supplementary food, monitoring nests with infrared cameras, and hand-rearing chicks when necessary.</p>\n        <p>Genetic diversity is a critical challenge, as the population descended from a very small pool of survivors. To manage this, scientists utilize genetic testing to plan breeding pairs and reduce inbreeding. The programme has seen significant success, with the kākāpō population growing from a historic low of just 51 individuals in 1995 to over 250 today, serving as a global model for endangered species conservation.</p>",
          "questions": [
            {
              "num": 1,
              "type": "FILL",
              "text": "The kākāpō is a flightless, nocturnal bird native to _________.",
              "answer": "New Zealand",
              "explanation": "The text describes the kākāpō as 'endemic to New Zealand'.",
              "location": "Paragraph 1, Line 1"
            },
            {
              "num": 2,
              "type": "FILL",
              "text": "Kākāpō were driven to the brink of extinction by habitat loss and _________ predators.",
              "answer": "mammalian",
              "explanation": "The text says they were brought to extinction by 'habitat destruction and introduced mammalian predators'.",
              "location": "Paragraph 1, Line 2"
            },
            {
              "num": 3,
              "type": "FILL",
              "text": "An adult male kākāpō can weigh as much as _________ kg.",
              "answer": "4",
              "explanation": "The text states 'males can weigh up to 4 kg'.",
              "location": "Paragraph 1, Line 3"
            },
            {
              "num": 4,
              "type": "FILL",
              "text": "To attract females, males perform _________ calls in breeding arenas.",
              "answer": "booming",
              "explanation": "The text mentions 'booming calls to attract females'.",
              "location": "Paragraph 1, Line 3"
            },
            {
              "num": 5,
              "type": "FILL",
              "text": "The recovery programme relocated the birds to offshore islands that are _________.",
              "answer": "predator-free",
              "explanation": "The text states: 'relocate the remaining population to predator-free offshore islands'.",
              "location": "Paragraph 2, Line 2"
            },
            {
              "num": 6,
              "type": "FILL",
              "text": "Infrared _________ are used to monitor the birds' nests.",
              "answer": "cameras",
              "explanation": "The text mentions 'monitoring nests with infrared cameras'.",
              "location": "Paragraph 2, Line 3"
            },
            {
              "num": 7,
              "type": "FILL",
              "text": "In 1995, the population of kākāpō reached a low of _________ individuals.",
              "answer": "51",
              "explanation": "The text states: 'growing from a historic low of just 51 individuals in 1995'.",
              "location": "Paragraph 3, Line 3"
            },
            {
              "num": 8,
              "type": "TFNG",
              "text": "Kākāpō can fly short distances when escaping predators.",
              "options": [
                "TRUE",
                "FALSE",
                "NOT GIVEN"
              ],
              "answer": "FALSE",
              "explanation": "The text describes the kākāpō as 'flightless'.",
              "location": "Paragraph 1, Line 1"
            },
            {
              "num": 9,
              "type": "TFNG",
              "text": "Stoats were native to New Zealand before humans arrived.",
              "options": [
                "TRUE",
                "FALSE",
                "NOT GIVEN"
              ],
              "answer": "FALSE",
              "explanation": "The text describes stoats as 'introduced mammalian predators'.",
              "location": "Paragraph 1, Line 2"
            },
            {
              "num": 10,
              "type": "TFNG",
              "text": "Codfish Island is one of the predator-free sanctuaries used by the programme.",
              "options": [
                "TRUE",
                "FALSE",
                "NOT GIVEN"
              ],
              "answer": "TRUE",
              "explanation": "The text lists 'Codfish Island (Whenua Hou)' as an offshore sanctuary.",
              "location": "Paragraph 2, Line 2"
            },
            {
              "num": 11,
              "type": "TFNG",
              "text": "Conservationists leave the birds entirely alone during the nesting season.",
              "options": [
                "TRUE",
                "FALSE",
                "NOT GIVEN"
              ],
              "answer": "FALSE",
              "explanation": "The text says conservationists 'manage every aspect of the birds' lives', including monitoring nests and providing food.",
              "location": "Paragraph 2, Line 3"
            },
            {
              "num": 12,
              "type": "TFNG",
              "text": "Genetic testing has been banned by the New Zealand government.",
              "options": [
                "TRUE",
                "FALSE",
                "NOT GIVEN"
              ],
              "answer": "FALSE",
              "explanation": "The text states that 'scientists utilize genetic testing to plan breeding pairs'.",
              "location": "Paragraph 3, Line 2"
            },
            {
              "num": 13,
              "type": "TFNG",
              "text": "The kākāpō population is now over 250.",
              "options": [
                "TRUE",
                "FALSE",
                "NOT GIVEN"
              ],
              "answer": "TRUE",
              "explanation": "The text says the population has grown 'to over 250 today'.",
              "location": "Paragraph 3, Line 3"
            }
          ]
        },
        {
          "title": "Passage 2: To Britain (Historic Immigration)",
          "text": "<p>The mid-20th century witnessed a major wave of migration to the United Kingdom, particularly from Caribbean nations, India, Pakistan, and Bangladesh. The arrival of the Empire Windrush in 1948 symbolized the start of this era, carrying hundreds of West Indian passengers who had been invited by the British government to help rebuild the post-war economy, which faced severe labour shortages in sectors like transport, manufacturing, and the newly established National Health Service (NHS).</p>\n        <p>However, the transition was far from easy. Many new arrivals faced systemic discrimination in housing and employment. Despite being British subjects with legal rights to settle in the UK, immigrants often found themselves shut out of private rentals and white-collar jobs. In response, they established tight-knit communities, formed their own social clubs, and founded advocacy groups to fight for civil rights and equal treatment.</p>\n        <p>Over the decades, these communities transformed British society, contributing to its cultural, economic, and political landscape. The introduction of the Race Relations Acts in the late 1960s was a direct result of their lobbying efforts, laying the groundwork for modern multicultural Britain. Today, the legacy of this immigration wave is recognized as a defining element of the UK's diverse identity.</p>",
          "questions": [
            {
              "num": 14,
              "type": "MCQ",
              "text": "Why did the British government invite immigrants in the post-war era?",
              "options": [
                "A. To establish new colony trade agreements",
                "B. To address severe labour shortages and rebuild the economy",
                "C. To increase tax revenue immediately",
                "D. To populate rural parts of the country"
              ],
              "answer": "B",
              "explanation": "The text says they were invited 'to help rebuild the post-war economy, which faced severe labour shortages'.",
              "location": "Paragraph 1, Line 2"
            },
            {
              "num": 15,
              "type": "MCQ",
              "text": "Which ship symbolized the start of this post-war migration wave in 1948?",
              "options": [
                "A. HMS Belfast",
                "B. The Empire Windrush",
                "C. Queen Mary",
                "D. The Mayflower"
              ],
              "answer": "B",
              "explanation": "The text states: 'The arrival of the Empire Windrush in 1948 symbolized the start of this era'.",
              "location": "Paragraph 1, Line 2"
            },
            {
              "num": 16,
              "type": "MCQ",
              "text": "What challenges did immigrants encounter upon arrival in the UK?",
              "options": [
                "A. Sudden changes in immigration laws that deported them",
                "B. Systemic discrimination in housing and employment",
                "C. A complete lack of public transport options",
                "D. Inability to access free medical treatment in the NHS"
              ],
              "answer": "B",
              "explanation": "The text states: 'Many new arrivals faced systemic discrimination in housing and employment.'",
              "location": "Paragraph 2, Line 1"
            },
            {
              "num": 17,
              "type": "MCQ",
              "text": "What legislative change was a direct result of immigrant advocacy in the 1960s?",
              "options": [
                "A. The British Nationality Act",
                "B. The Race Relations Acts",
                "C. The National Health Service Bill",
                "D. The Housing and Settlement Act"
              ],
              "answer": "B",
              "explanation": "The text states: 'The introduction of the Race Relations Acts in the late 1960s was a direct result of their lobbying efforts'.",
              "location": "Paragraph 3, Line 2"
            },
            {
              "num": 18,
              "type": "FILL",
              "text": "The Empire Windrush arrived in the year _________.",
              "answer": "1948",
              "explanation": "The text says 'arrival of the Empire Windrush in 1948'.",
              "location": "Paragraph 1, Line 2"
            },
            {
              "num": 19,
              "type": "FILL",
              "text": "The UK economy after the war faced severe _________ shortages.",
              "answer": "labour",
              "explanation": "The text mentions 'severe labour shortages'.",
              "location": "Paragraph 1, Line 2"
            },
            {
              "num": 20,
              "type": "FILL",
              "text": "Immigrants helped staff the NHS, transport, and _________ sectors.",
              "answer": "manufacturing",
              "explanation": "The text lists 'transport, manufacturing, and the newly established National Health Service'.",
              "location": "Paragraph 1, Line 2"
            },
            {
              "num": 21,
              "type": "FILL",
              "text": "Immigrants were legally British _________ with settlement rights.",
              "answer": "subjects",
              "explanation": "The text says 'Despite being British subjects with legal rights to settle'.",
              "location": "Paragraph 2, Line 2"
            },
            {
              "num": 22,
              "type": "FILL",
              "text": "Immigrants were often shut out of private _________.",
              "answer": "rentals",
              "explanation": "The text says they were 'shut out of private rentals'.",
              "location": "Paragraph 2, Line 2"
            },
            {
              "num": 23,
              "type": "FILL",
              "text": "Immigrants founded _________ groups to fight for equal treatment.",
              "answer": "advocacy",
              "explanation": "The text says they 'founded advocacy groups to fight for civil rights'.",
              "location": "Paragraph 2, Line 3"
            },
            {
              "num": 24,
              "type": "TFNG",
              "text": "Immigrants primarily took jobs as politicians in the British parliament.",
              "options": [
                "TRUE",
                "FALSE",
                "NOT GIVEN"
              ],
              "answer": "FALSE",
              "explanation": "The text says they worked in 'transport, manufacturing, and the National Health Service'.",
              "location": "Paragraph 1, Line 2"
            },
            {
              "num": 25,
              "type": "TFNG",
              "text": "White-collar jobs were easily available to the new arrivals.",
              "options": [
                "TRUE",
                "FALSE",
                "NOT GIVEN"
              ],
              "answer": "FALSE",
              "explanation": "The text states that they were 'shut out of private rentals and white-collar jobs.'",
              "location": "Paragraph 2, Line 2"
            },
            {
              "num": 26,
              "type": "TFNG",
              "text": "The first Race Relations Act was introduced in 1950.",
              "options": [
                "TRUE",
                "FALSE",
                "NOT GIVEN"
              ],
              "answer": "FALSE",
              "explanation": "The text states they were introduced 'in the late 1960s'.",
              "location": "Paragraph 3, Line 2"
            }
          ]
        },
        {
          "title": "Passage 3: The Unselfish Gene",
          "text": "<p>For decades, evolutionary biology was dominated by the 'selfish gene' theory, which argues that natural selection acts primarily at the level of individual genes rather than the organism or species. According to this view, altruistic behaviours in animals are merely genetic strategies to ensure the survival of shared genes in relatives. However, a growing body of research is challenging this perspective, advocating for 'group selection' or 'multilevel selection' models.</p>\n        <p>These newer models propose that natural selection can operate simultaneously at multiple levels, including the group. In social species, groups containing cooperative individuals who work together for the common good may outcompete groups of selfish individuals who prioritize their own survival. For instance, in social insects like ants and bees, sterile workers sacrifice their own reproduction to support the colony, a behavior that is highly successful at the group level.</p>\n        <p>Critics of group selection argue that cooperative groups are vulnerable to 'cheaters'—selfish individuals who benefit from the group's cooperation without contributing. Over time, these cheaters should reproduce more, causing cooperation to collapse. However, proponents suggest that social groups develop mechanisms to suppress cheating, such as policing behaviors and social ostracism, ensuring that the 'unselfish gene' can persist and flourish in evolutionary history.</p>",
          "questions": [
            {
              "num": 27,
              "type": "MCQ",
              "text": "What does the 'selfish gene' theory argue?",
              "options": [
                "A. Natural selection acts primarily at the group level",
                "B. Genes force organisms to behave selfishly towards relatives",
                "C. Natural selection acts primarily at the level of individual genes",
                "D. Altruism is a modern human invention"
              ],
              "answer": "C",
              "explanation": "The text says: 'natural selection acts primarily at the level of individual genes'.",
              "location": "Paragraph 1, Line 1"
            },
            {
              "num": 28,
              "type": "MCQ",
              "text": "What alternative evolutionary models are gaining support?",
              "options": [
                "A. Single-gene selection models",
                "B. Group selection and multilevel selection models",
                "C. Artificial selection and domestication models",
                "D. Non-genetic inheritance models"
              ],
              "answer": "B",
              "explanation": "The text mentions 'advocating for group selection or multilevel selection models.'",
              "location": "Paragraph 1, Line 3"
            },
            {
              "num": 29,
              "type": "MCQ",
              "text": "Why do sterile worker bees sacrifice reproduction, according to group selection?",
              "options": [
                "A. They are forced to by the queen's chemical signals",
                "B. The behavior supports the colony, making the group highly successful",
                "C. They lack the biological organs to reproduce",
                "D. They seek to migrate to other hives"
              ],
              "answer": "B",
              "explanation": "The text says: 'sterile workers sacrifice their own reproduction to support the colony, a behavior that is highly successful at the group level.'",
              "location": "Paragraph 2, Line 3"
            },
            {
              "num": 30,
              "type": "MCQ",
              "text": "What threat do 'cheaters' pose to cooperative groups?",
              "options": [
                "A. They introduce diseases from other groups",
                "B. They consume group resources without contributing, potentially causing collapse",
                "C. They cooperate too much, leading to resource depletion",
                "D. They attract predators to the group's territory"
              ],
              "answer": "B",
              "explanation": "The text says 'selfish individuals who benefit from the group's cooperation without contributing... causing cooperation to collapse.'",
              "location": "Paragraph 3, Line 1"
            },
            {
              "num": 31,
              "type": "FILL",
              "text": "Selfish gene theory explains altruism as a strategy to save genes in _________.",
              "answer": "relatives",
              "explanation": "The text states altruism is 'merely genetic strategies to ensure the survival of shared genes in relatives.'",
              "location": "Paragraph 1, Line 2"
            },
            {
              "num": 32,
              "type": "FILL",
              "text": "Multilevel selection argues natural selection operates _________ at different levels.",
              "answer": "simultaneously",
              "explanation": "The text states 'natural selection can operate simultaneously at multiple levels'.",
              "location": "Paragraph 2, Line 1"
            },
            {
              "num": 33,
              "type": "FILL",
              "text": "In social insects, sterile workers sacrifice their reproduction to support the _________.",
              "answer": "colony",
              "explanation": "The text says workers 'sacrifice their own reproduction to support the colony'.",
              "location": "Paragraph 2, Line 3"
            },
            {
              "num": 34,
              "type": "FILL",
              "text": "Cooperative groups suppress cheating using policing and social _________.",
              "answer": "ostracism",
              "explanation": "The text mentions 'policing behaviors and social ostracism'.",
              "location": "Paragraph 3, Line 3"
            },
            {
              "num": 35,
              "type": "TFNG",
              "text": "For decades, group selection was the dominant theory in evolutionary biology.",
              "options": [
                "TRUE",
                "FALSE",
                "NOT GIVEN"
              ],
              "answer": "FALSE",
              "explanation": "The text states 'evolutionary biology was dominated by the selfish gene theory'.",
              "location": "Paragraph 1, Line 1"
            },
            {
              "num": 36,
              "type": "TFNG",
              "text": "Altruistic behaviours are never observed in wild mammals.",
              "options": [
                "TRUE",
                "FALSE",
                "NOT GIVEN"
              ],
              "answer": "FALSE",
              "explanation": "The text mentions 'altruistic behaviours in animals' generally as a subject of evolutionary theories.",
              "location": "Paragraph 1, Line 2"
            },
            {
              "num": 37,
              "type": "TFNG",
              "text": "Cooperative groups are more successful than selfish groups in social species.",
              "options": [
                "TRUE",
                "FALSE",
                "NOT GIVEN"
              ],
              "answer": "TRUE",
              "explanation": "The text states: 'groups containing cooperative individuals... may outcompete groups of selfish individuals'.",
              "location": "Paragraph 2, Line 2"
            },
            {
              "num": 38,
              "type": "TFNG",
              "text": "Sterile workers in ant colonies are capable of flying.",
              "options": [
                "TRUE",
                "FALSE",
                "NOT GIVEN"
              ],
              "answer": "NOT GIVEN",
              "explanation": "The text mentions ants and bees but does not discuss the flying capabilities of sterile workers.",
              "location": "Paragraph 2, Line 3"
            },
            {
              "num": 39,
              "type": "TFNG",
              "text": "Cheaters reproduce less than cooperative individuals in the long run.",
              "options": [
                "TRUE",
                "FALSE",
                "NOT GIVEN"
              ],
              "answer": "FALSE",
              "explanation": "The text states that according to critics, 'these cheaters should reproduce more'.",
              "location": "Paragraph 3, Line 2"
            },
            {
              "num": 40,
              "type": "TFNG",
              "text": " policing behaviors help social groups survive in evolutionary history.",
              "options": [
                "TRUE",
                "FALSE",
                "NOT GIVEN"
              ],
              "answer": "TRUE",
              "explanation": "The text says 'groups develop mechanisms to suppress cheating, such as policing behaviors... ensuring that the unselfish gene can persist'.",
              "location": "Paragraph 3, Line 3"
            }
          ]
        }
      ]
    },
    "writing": {
      "tasks": []
    }
  },
  "10": {
    "title": "Cambridge IELTS 20 — Test 2",
    "book": "IELTS 20",
    "listening": {
      "sections": [
        {
          "id": 1,
          "title": "Part 1: Language School Enquiry",
          "audio": "audio/IELTS_20_Test_2_Part1.m4a",
          "description": "A student calls a language school to ask about English courses.",
          "questions": [
            {
              "num": 1,
              "type": "FILL",
              "text": "Duration of the intensive course: _________ weeks",
              "answer": "eight",
              "explanation": "The intensive English course runs for eight weeks."
            },
            {
              "num": 2,
              "type": "FILL",
              "text": "Number of hours of class per day: _________",
              "answer": "four",
              "explanation": "Students attend four hours of class each day."
            },
            {
              "num": 3,
              "type": "FILL",
              "text": "Maximum class size: _________ students",
              "answer": "12",
              "explanation": "Classes are capped at 12 students."
            },
            {
              "num": 4,
              "type": "FILL",
              "text": "Course fee: £_________",
              "answer": "1,800",
              "explanation": "The eight-week intensive course costs £1,800."
            },
            {
              "num": 5,
              "type": "MCQ",
              "text": "What is included in the course fee?",
              "options": [
                "A. Accommodation and meals",
                "B. Course materials and an exam fee",
                "C. Course materials only",
                "D. All meals but not accommodation"
              ],
              "answer": "B",
              "explanation": "The fee includes all course materials and the end-of-course examination fee."
            },
            {
              "num": 6,
              "type": "FILL",
              "text": "Homestay accommodation costs approximately £_________ per week.",
              "answer": "175",
              "explanation": "Homestay with a local family costs around £175 per week."
            },
            {
              "num": 7,
              "type": "MCQ",
              "text": "The school offers which types of accommodation?",
              "options": [
                "A. Homestay and student residence only",
                "B. Homestay, student residence and private studio flats",
                "C. Homestay only",
                "D. Hotel and hostel partnerships"
              ],
              "answer": "B",
              "explanation": "Three options are available: homestay, a student residence, or private studio flats."
            },
            {
              "num": 8,
              "type": "FILL",
              "text": "The school is located in the centre of _________.",
              "answer": "Bristol",
              "explanation": "The language school is centrally located in Bristol."
            },
            {
              "num": 9,
              "type": "MCQ",
              "text": "What level test do new students take before starting?",
              "options": [
                "A. IELTS practice test",
                "B. Online placement test",
                "C. In-person written exam",
                "D. Interview with a teacher"
              ],
              "answer": "B",
              "explanation": "New students complete an online placement test to determine their level."
            },
            {
              "num": 10,
              "type": "FILL",
              "text": "Application deadline for the next intake: _________ April",
              "answer": "30th",
              "explanation": "Applications must be received by the 30th of April for the next course."
            }
          ],
          "transcript": ""
        },
        {
          "id": 2,
          "title": "Part 2: Farm Open Day",
          "audio": "audio/IELTS_20_Test_2_Part2.m4a",
          "description": "A farmer describes the programme for an open day at Oakfield Farm.",
          "questions": [
            {
              "num": 11,
              "type": "FILL",
              "text": "Date of the open day: _________ June",
              "answer": "15th",
              "explanation": "The farm open day takes place on the 15th of June."
            },
            {
              "num": 12,
              "type": "FILL",
              "text": "Start time of the open day: _________am",
              "answer": "10",
              "explanation": "The event begins at 10am."
            },
            {
              "num": 13,
              "type": "FILL",
              "text": "Number of different farm animals visitors can see: over _________",
              "answer": "20",
              "explanation": "The farm has over 20 species of farm animals on display."
            },
            {
              "num": 14,
              "type": "MCQ",
              "text": "What activity is available for children?",
              "options": [
                "A. Tractor rides around the farm",
                "B. Feeding the lambs",
                "C. Milking the cows",
                "D. Both A and B"
              ],
              "answer": "D",
              "explanation": "Children can enjoy both tractor rides and feeding the lambs."
            },
            {
              "num": 15,
              "type": "FILL",
              "text": "Tractor ride duration: approximately _________ minutes",
              "answer": "25",
              "explanation": "Each tractor ride takes approximately 25 minutes."
            },
            {
              "num": 16,
              "type": "MCQ",
              "text": "The farm shop sells:",
              "options": [
                "A. Only farm-produced goods",
                "B. Goods from the farm and other local producers",
                "C. Imported organic produce",
                "D. Exclusively seasonal vegetables"
              ],
              "answer": "B",
              "explanation": "The farm shop stocks both farm-made products and items from other local suppliers."
            },
            {
              "num": 17,
              "type": "FILL",
              "text": "Cost of a cream tea in the farm café: £_________",
              "answer": "7.50",
              "explanation": "A traditional cream tea in the café costs £7.50."
            },
            {
              "num": 18,
              "type": "MCQ",
              "text": "Dogs are:",
              "options": [
                "A. Not permitted on the farm",
                "B. Welcome if kept on a lead",
                "C. Allowed only in the car park",
                "D. Permitted in the café"
              ],
              "answer": "B",
              "explanation": "Well-behaved dogs are welcome on leads, but not inside buildings."
            },
            {
              "num": 19,
              "type": "FILL",
              "text": "Nearest village to the farm: _________",
              "answer": "Thornley",
              "explanation": "The farm is located near the village of Thornley."
            },
            {
              "num": 20,
              "type": "MCQ",
              "text": "Admission for adults is:",
              "options": [
                "A. £5",
                "B. £8",
                "C. Free",
                "D. £10"
              ],
              "answer": "C",
              "explanation": "Entry to the farm open day is free for all visitors."
            }
          ],
          "transcript": ""
        },
        {
          "id": 3,
          "title": "Part 3: Study Group Discussion on Entrepreneurship",
          "audio": "audio/IELTS_20_Test_2_Part3.m4a",
          "description": "Business students discuss their assignment on entrepreneurship and innovation.",
          "questions": [
            {
              "num": 21,
              "type": "MCQ",
              "text": "What quality do the students agree is most important in entrepreneurs?",
              "options": [
                "A. Technical expertise",
                "B. Willingness to take calculated risks",
                "C. Access to start-up capital",
                "D. A large professional network"
              ],
              "answer": "B",
              "explanation": "The students agree that calculated risk-taking is the defining quality of successful entrepreneurs."
            },
            {
              "num": 22,
              "type": "FILL",
              "text": "The student argues that failure should be seen as a _________ experience.",
              "answer": "learning",
              "explanation": "Failure is reframed as a valuable learning experience in entrepreneurial culture."
            },
            {
              "num": 23,
              "type": "MCQ",
              "text": "What is a key criticism of the 'lean startup' model?",
              "options": [
                "A. It is too slow to market",
                "B. It underestimates the importance of detailed planning",
                "C. It works only for technology companies",
                "D. It requires too large an initial investment"
              ],
              "answer": "B",
              "explanation": "Critics argue the lean startup method's emphasis on iteration can undervalue thorough strategic planning."
            },
            {
              "num": 24,
              "type": "MCQ",
              "text": "The students agree that social entrepreneurship differs from traditional entrepreneurship because:",
              "options": [
                "A. It is less profitable",
                "B. It prioritises social or environmental impact over profit",
                "C. It only operates in developing countries",
                "D. It requires government funding"
              ],
              "answer": "B",
              "explanation": "Social enterprises prioritise positive social or environmental outcomes alongside or above financial return."
            },
            {
              "num": 25,
              "type": "FILL",
              "text": "One student cites _________ as an example of a successful social enterprise.",
              "answer": "TOMS",
              "explanation": "TOMS Shoes is cited as a widely known example of a buy-one-give-one social enterprise model."
            },
            {
              "num": 26,
              "type": "MCQ",
              "text": "The group discusses that access to _________ is the biggest barrier to entrepreneurship.",
              "options": [
                "A. Mentors",
                "B. Government grants",
                "C. Finance and capital",
                "D. Business education"
              ],
              "answer": "C",
              "explanation": "Access to funding is consistently identified as the single greatest obstacle for new entrepreneurs."
            },
            {
              "num": 27,
              "type": "FILL",
              "text": "The concept of _________ disruption refers to innovations that transform existing industries.",
              "answer": "disruptive",
              "explanation": "Disruptive innovation, as described by Clayton Christensen, transforms or replaces existing markets."
            },
            {
              "num": 28,
              "type": "MCQ",
              "text": "The students decide their assignment will use which case study?",
              "options": [
                "A. Amazon",
                "B. Uber",
                "C. Apple",
                "D. Airbnb"
              ],
              "answer": "D",
              "explanation": "They choose Airbnb as their central case study on disruptive innovation."
            },
            {
              "num": 29,
              "type": "MCQ",
              "text": "One student argues that government policy should:",
              "options": [
                "A. Regulate startups more strictly",
                "B. Provide tax incentives for startup investment",
                "C. Ban gig economy platforms",
                "D. Reduce university fees for business students"
              ],
              "answer": "B",
              "explanation": "The student advocates for tax incentives to encourage investment in new businesses."
            },
            {
              "num": 30,
              "type": "MCQ",
              "text": "The students conclude their assignment will argue that entrepreneurship:",
              "options": [
                "A. Is only possible in certain economic climates",
                "B. Can be taught and encouraged through education",
                "C. Is an innate talent that cannot be learned",
                "D. Is declining in developed economies"
              ],
              "answer": "B",
              "explanation": "They conclude that entrepreneurial mindsets and skills can be cultivated through education."
            }
          ],
          "transcript": ""
        },
        {
          "id": 4,
          "title": "Part 4: The Physics of Climate",
          "audio": "audio/IELTS_20_Test_2_Part4.m4a",
          "description": "A lecture on the physical mechanisms behind climate change.",
          "questions": [
            {
              "num": 31,
              "type": "FILL",
              "text": "The greenhouse effect was first described scientifically by _________ Fourier.",
              "answer": "Joseph",
              "explanation": "Joseph Fourier first described the Earth's natural greenhouse effect in the 1820s."
            },
            {
              "num": 32,
              "type": "MCQ",
              "text": "The main naturally occurring greenhouse gases include:",
              "options": [
                "A. Oxygen and nitrogen",
                "B. Water vapour, carbon dioxide and methane",
                "C. Ozone and helium",
                "D. Argon and neon"
              ],
              "answer": "B",
              "explanation": "The primary natural greenhouse gases are water vapour, CO2, and methane."
            },
            {
              "num": 33,
              "type": "FILL",
              "text": "The current concentration of CO2 in the atmosphere is approximately _________ parts per million.",
              "answer": "420",
              "explanation": "Atmospheric CO2 has exceeded 420 ppm — the highest level in human history."
            },
            {
              "num": 34,
              "type": "MCQ",
              "text": "The albedo effect refers to:",
              "options": [
                "A. The heat stored in the oceans",
                "B. The reflectivity of surfaces like ice and snow",
                "C. The absorption of heat by greenhouse gases",
                "D. The warming effect of urban areas"
              ],
              "answer": "B",
              "explanation": "Albedo is the proportion of solar radiation reflected by a surface — ice and snow have high albedo."
            },
            {
              "num": 35,
              "type": "MCQ",
              "text": "Melting Arctic ice causes warming to accelerate because:",
              "options": [
                "A. It releases methane from permafrost",
                "B. It reduces the Earth's albedo, causing more heat absorption",
                "C. It increases ocean salinity",
                "D. It disrupts ocean currents immediately"
              ],
              "answer": "B",
              "explanation": "Less ice means less reflected sunlight (lower albedo), causing more heat to be absorbed by the ocean."
            },
            {
              "num": 36,
              "type": "FILL",
              "text": "The IPCC was established in _________.",
              "answer": "1988",
              "explanation": "The Intergovernmental Panel on Climate Change (IPCC) was founded in 1988."
            },
            {
              "num": 37,
              "type": "MCQ",
              "text": "Positive feedback loops in climate science:",
              "options": [
                "A. Help stabilise the climate",
                "B. Amplify the initial warming effect",
                "C. Are only relevant to ocean temperatures",
                "D. Occur naturally and are not caused by humans"
              ],
              "answer": "B",
              "explanation": "Positive feedback loops amplify changes — for example, melting ice → lower albedo → more warming → more melting."
            },
            {
              "num": 38,
              "type": "FILL",
              "text": "The Paris Agreement aims to limit warming to well below _________ degrees Celsius above pre-industrial levels.",
              "answer": "2",
              "explanation": "The Paris Agreement's central goal is limiting global warming to well below 2°C, ideally 1.5°C."
            },
            {
              "num": 39,
              "type": "MCQ",
              "text": "Carbon capture and storage (CCS) technology works by:",
              "options": [
                "A. Converting CO2 into oxygen using algae",
                "B. Capturing CO2 at emission sources and storing it underground",
                "C. Planting trees to absorb atmospheric carbon",
                "D. Reflecting sunlight back into space"
              ],
              "answer": "B",
              "explanation": "CCS captures CO2 at industrial sources and stores it in deep geological formations."
            },
            {
              "num": 40,
              "type": "FILL",
              "text": "The ocean absorbs approximately _________ % of human-produced CO2 emissions.",
              "answer": "30",
              "explanation": "Oceans absorb around 30% of anthropogenic CO2, making them a critical carbon sink."
            }
          ],
          "transcript": ""
        }
      ]
    },
    "reading": {
      "passages": [
        {
          "title": "Passage 1: History of Language Schools",
          "text": "<p>Language schools arose in the 20th century to meet the global demand for English. Early schools focused on grammar translation, but modern institutions emphasize communicative methods. These schools provide intensive language courses, cultural immersion, and placement tests to assess students' levels.</p>",
          "questions": [
            {
              "num": 1,
              "type": "FILL",
              "text": "_________ schools arose in the 20th century to meet the global demand for English",
              "answer": "language",
              "explanation": "The passage notes that the language is essential in this context.",
              "location": "Paragraph 1, Sentence 1"
            },
            {
              "num": 2,
              "type": "TFNG",
              "text": "Language schools arose in the 20th century to meet the global demand for English",
              "options": [
                "TRUE",
                "FALSE",
                "NOT GIVEN"
              ],
              "answer": "TRUE",
              "explanation": "The statement directly matches the text: \"Language schools arose in the 20th century to meet the global demand for English\".",
              "location": "Paragraph 1, Sentence 1"
            },
            {
              "num": 3,
              "type": "MCQ",
              "text": "According to paragraph 1, what is the main finding regarding Language Schools?",
              "options": [
                "A. It has a significant negative impact on resources",
                "B. It represents a key advancement in the field",
                "C. It has been widely criticized by modern researchers",
                "D. It is no longer considered relevant"
              ],
              "answer": "B",
              "explanation": "The text confirms that this development is a major advancement: \"Language schools arose in the 20th century to meet the global demand for English\".",
              "location": "Paragraph 1, Sentence 1"
            },
            {
              "num": 4,
              "type": "FILL",
              "text": "_________ schools arose in the 20th century to meet the global demand for English",
              "answer": "language",
              "explanation": "The passage notes that the language is essential in this context.",
              "location": "Paragraph 1, Sentence 1"
            },
            {
              "num": 5,
              "type": "TFNG",
              "text": "Language schools arose in the 20th century to meet the global demand for English",
              "options": [
                "TRUE",
                "FALSE",
                "NOT GIVEN"
              ],
              "answer": "TRUE",
              "explanation": "The statement directly matches the text: \"Language schools arose in the 20th century to meet the global demand for English\".",
              "location": "Paragraph 1, Sentence 1"
            },
            {
              "num": 6,
              "type": "MCQ",
              "text": "According to paragraph 1, what is the main finding regarding Language Schools?",
              "options": [
                "A. It has a significant negative impact on resources",
                "B. It represents a key advancement in the field",
                "C. It has been widely criticized by modern researchers",
                "D. It is no longer considered relevant"
              ],
              "answer": "B",
              "explanation": "The text confirms that this development is a major advancement: \"Language schools arose in the 20th century to meet the global demand for English\".",
              "location": "Paragraph 1, Sentence 1"
            },
            {
              "num": 7,
              "type": "FILL",
              "text": "_________ schools arose in the 20th century to meet the global demand for English",
              "answer": "language",
              "explanation": "The passage notes that the language is essential in this context.",
              "location": "Paragraph 1, Sentence 1"
            },
            {
              "num": 8,
              "type": "TFNG",
              "text": "Language schools arose in the 20th century to meet the global demand for English",
              "options": [
                "TRUE",
                "FALSE",
                "NOT GIVEN"
              ],
              "answer": "TRUE",
              "explanation": "The statement directly matches the text: \"Language schools arose in the 20th century to meet the global demand for English\".",
              "location": "Paragraph 1, Sentence 1"
            },
            {
              "num": 9,
              "type": "MCQ",
              "text": "According to paragraph 1, what is the main finding regarding Language Schools?",
              "options": [
                "A. It has a significant negative impact on resources",
                "B. It represents a key advancement in the field",
                "C. It has been widely criticized by modern researchers",
                "D. It is no longer considered relevant"
              ],
              "answer": "B",
              "explanation": "The text confirms that this development is a major advancement: \"Language schools arose in the 20th century to meet the global demand for English\".",
              "location": "Paragraph 1, Sentence 1"
            },
            {
              "num": 10,
              "type": "FILL",
              "text": "_________ schools arose in the 20th century to meet the global demand for English",
              "answer": "language",
              "explanation": "The passage notes that the language is essential in this context.",
              "location": "Paragraph 1, Sentence 1"
            },
            {
              "num": 11,
              "type": "TFNG",
              "text": "Language schools arose in the 20th century to meet the global demand for English",
              "options": [
                "TRUE",
                "FALSE",
                "NOT GIVEN"
              ],
              "answer": "TRUE",
              "explanation": "The statement directly matches the text: \"Language schools arose in the 20th century to meet the global demand for English\".",
              "location": "Paragraph 1, Sentence 1"
            },
            {
              "num": 12,
              "type": "MCQ",
              "text": "According to paragraph 1, what is the main finding regarding Language Schools?",
              "options": [
                "A. It has a significant negative impact on resources",
                "B. It represents a key advancement in the field",
                "C. It has been widely criticized by modern researchers",
                "D. It is no longer considered relevant"
              ],
              "answer": "B",
              "explanation": "The text confirms that this development is a major advancement: \"Language schools arose in the 20th century to meet the global demand for English\".",
              "location": "Paragraph 1, Sentence 1"
            },
            {
              "num": 13,
              "type": "FILL",
              "text": "_________ schools arose in the 20th century to meet the global demand for English",
              "answer": "language",
              "explanation": "The passage notes that the language is essential in this context.",
              "location": "Paragraph 1, Sentence 1"
            }
          ]
        },
        {
          "title": "Passage 2: Farm Open Day Ecosystems",
          "text": "<p>Farm open days allow urban residents to visit working farms and learn about food production. Visitors can see farm animals, take tractor rides, and purchase local goods. These events promote sustainable agriculture and bridge the gap between rural producers and urban consumers.</p>",
          "questions": [
            {
              "num": 14,
              "type": "TFNG",
              "text": "Farm open days allow urban residents to visit working farms and learn about food production",
              "options": [
                "TRUE",
                "FALSE",
                "NOT GIVEN"
              ],
              "answer": "TRUE",
              "explanation": "The statement directly matches the text: \"Farm open days allow urban residents to visit working farms and learn about food production\".",
              "location": "Paragraph 1, Sentence 1"
            },
            {
              "num": 15,
              "type": "MCQ",
              "text": "According to paragraph 1, what is the main finding regarding  Farm Open Days?",
              "options": [
                "A. It has a significant negative impact on resources",
                "B. It represents a key advancement in the field",
                "C. It has been widely criticized by modern researchers",
                "D. It is no longer considered relevant"
              ],
              "answer": "B",
              "explanation": "The text confirms that this development is a major advancement: \"Farm open days allow urban residents to visit working farms and learn about food production\".",
              "location": "Paragraph 1, Sentence 1"
            },
            {
              "num": 16,
              "type": "FILL",
              "text": "Farm open days allow urban _________ to visit working farms and learn about food production",
              "answer": "residents",
              "explanation": "The passage notes that the residents is essential in this context.",
              "location": "Paragraph 1, Sentence 1"
            },
            {
              "num": 17,
              "type": "TFNG",
              "text": "Farm open days allow urban residents to visit working farms and learn about food production",
              "options": [
                "TRUE",
                "FALSE",
                "NOT GIVEN"
              ],
              "answer": "TRUE",
              "explanation": "The statement directly matches the text: \"Farm open days allow urban residents to visit working farms and learn about food production\".",
              "location": "Paragraph 1, Sentence 1"
            },
            {
              "num": 18,
              "type": "MCQ",
              "text": "According to paragraph 1, what is the main finding regarding  Farm Open Days?",
              "options": [
                "A. It has a significant negative impact on resources",
                "B. It represents a key advancement in the field",
                "C. It has been widely criticized by modern researchers",
                "D. It is no longer considered relevant"
              ],
              "answer": "B",
              "explanation": "The text confirms that this development is a major advancement: \"Farm open days allow urban residents to visit working farms and learn about food production\".",
              "location": "Paragraph 1, Sentence 1"
            },
            {
              "num": 19,
              "type": "FILL",
              "text": "Farm open days allow urban _________ to visit working farms and learn about food production",
              "answer": "residents",
              "explanation": "The passage notes that the residents is essential in this context.",
              "location": "Paragraph 1, Sentence 1"
            },
            {
              "num": 20,
              "type": "TFNG",
              "text": "Farm open days allow urban residents to visit working farms and learn about food production",
              "options": [
                "TRUE",
                "FALSE",
                "NOT GIVEN"
              ],
              "answer": "TRUE",
              "explanation": "The statement directly matches the text: \"Farm open days allow urban residents to visit working farms and learn about food production\".",
              "location": "Paragraph 1, Sentence 1"
            },
            {
              "num": 21,
              "type": "MCQ",
              "text": "According to paragraph 1, what is the main finding regarding  Farm Open Days?",
              "options": [
                "A. It has a significant negative impact on resources",
                "B. It represents a key advancement in the field",
                "C. It has been widely criticized by modern researchers",
                "D. It is no longer considered relevant"
              ],
              "answer": "B",
              "explanation": "The text confirms that this development is a major advancement: \"Farm open days allow urban residents to visit working farms and learn about food production\".",
              "location": "Paragraph 1, Sentence 1"
            },
            {
              "num": 22,
              "type": "FILL",
              "text": "Farm open days allow urban _________ to visit working farms and learn about food production",
              "answer": "residents",
              "explanation": "The passage notes that the residents is essential in this context.",
              "location": "Paragraph 1, Sentence 1"
            },
            {
              "num": 23,
              "type": "TFNG",
              "text": "Farm open days allow urban residents to visit working farms and learn about food production",
              "options": [
                "TRUE",
                "FALSE",
                "NOT GIVEN"
              ],
              "answer": "TRUE",
              "explanation": "The statement directly matches the text: \"Farm open days allow urban residents to visit working farms and learn about food production\".",
              "location": "Paragraph 1, Sentence 1"
            },
            {
              "num": 24,
              "type": "MCQ",
              "text": "According to paragraph 1, what is the main finding regarding  Farm Open Days?",
              "options": [
                "A. It has a significant negative impact on resources",
                "B. It represents a key advancement in the field",
                "C. It has been widely criticized by modern researchers",
                "D. It is no longer considered relevant"
              ],
              "answer": "B",
              "explanation": "The text confirms that this development is a major advancement: \"Farm open days allow urban residents to visit working farms and learn about food production\".",
              "location": "Paragraph 1, Sentence 1"
            },
            {
              "num": 25,
              "type": "FILL",
              "text": "Farm open days allow urban _________ to visit working farms and learn about food production",
              "answer": "residents",
              "explanation": "The passage notes that the residents is essential in this context.",
              "location": "Paragraph 1, Sentence 1"
            },
            {
              "num": 26,
              "type": "TFNG",
              "text": "Farm open days allow urban residents to visit working farms and learn about food production",
              "options": [
                "TRUE",
                "FALSE",
                "NOT GIVEN"
              ],
              "answer": "TRUE",
              "explanation": "The statement directly matches the text: \"Farm open days allow urban residents to visit working farms and learn about food production\".",
              "location": "Paragraph 1, Sentence 1"
            }
          ]
        },
        {
          "title": "Passage 3: Entrepreneurship and Innovation",
          "text": "<p>Successful entrepreneurship requires innovation, risk-taking, and strategic planning. While some believe entrepreneurs possess innate talents, business educators argue that entrepreneurial mindsets can be taught. Developing a startup involves iterative testing, market research, and securing capital.</p>",
          "questions": [
            {
              "num": 27,
              "type": "MCQ",
              "text": "According to paragraph 1, what is the main finding regarding  Entrepreneurship?",
              "options": [
                "A. It has a significant negative impact on resources",
                "B. It represents a key advancement in the field",
                "C. It has been widely criticized by modern researchers",
                "D. It is no longer considered relevant"
              ],
              "answer": "B",
              "explanation": "The text confirms that this development is a major advancement: \"Successful entrepreneurship requires innovation, risk-taking, and strategic planning\".",
              "location": "Paragraph 1, Sentence 1"
            },
            {
              "num": 28,
              "type": "FILL",
              "text": "_________ entrepreneurship requires innovation, risk-taking, and strategic planning",
              "answer": "successful",
              "explanation": "The passage notes that the successful is essential in this context.",
              "location": "Paragraph 1, Sentence 1"
            },
            {
              "num": 29,
              "type": "TFNG",
              "text": "Successful entrepreneurship requires innovation, risk-taking, and strategic planning",
              "options": [
                "TRUE",
                "FALSE",
                "NOT GIVEN"
              ],
              "answer": "TRUE",
              "explanation": "The statement directly matches the text: \"Successful entrepreneurship requires innovation, risk-taking, and strategic planning\".",
              "location": "Paragraph 1, Sentence 1"
            },
            {
              "num": 30,
              "type": "MCQ",
              "text": "According to paragraph 1, what is the main finding regarding  Entrepreneurship?",
              "options": [
                "A. It has a significant negative impact on resources",
                "B. It represents a key advancement in the field",
                "C. It has been widely criticized by modern researchers",
                "D. It is no longer considered relevant"
              ],
              "answer": "B",
              "explanation": "The text confirms that this development is a major advancement: \"Successful entrepreneurship requires innovation, risk-taking, and strategic planning\".",
              "location": "Paragraph 1, Sentence 1"
            },
            {
              "num": 31,
              "type": "FILL",
              "text": "_________ entrepreneurship requires innovation, risk-taking, and strategic planning",
              "answer": "successful",
              "explanation": "The passage notes that the successful is essential in this context.",
              "location": "Paragraph 1, Sentence 1"
            },
            {
              "num": 32,
              "type": "TFNG",
              "text": "Successful entrepreneurship requires innovation, risk-taking, and strategic planning",
              "options": [
                "TRUE",
                "FALSE",
                "NOT GIVEN"
              ],
              "answer": "TRUE",
              "explanation": "The statement directly matches the text: \"Successful entrepreneurship requires innovation, risk-taking, and strategic planning\".",
              "location": "Paragraph 1, Sentence 1"
            },
            {
              "num": 33,
              "type": "MCQ",
              "text": "According to paragraph 1, what is the main finding regarding  Entrepreneurship?",
              "options": [
                "A. It has a significant negative impact on resources",
                "B. It represents a key advancement in the field",
                "C. It has been widely criticized by modern researchers",
                "D. It is no longer considered relevant"
              ],
              "answer": "B",
              "explanation": "The text confirms that this development is a major advancement: \"Successful entrepreneurship requires innovation, risk-taking, and strategic planning\".",
              "location": "Paragraph 1, Sentence 1"
            },
            {
              "num": 34,
              "type": "FILL",
              "text": "_________ entrepreneurship requires innovation, risk-taking, and strategic planning",
              "answer": "successful",
              "explanation": "The passage notes that the successful is essential in this context.",
              "location": "Paragraph 1, Sentence 1"
            },
            {
              "num": 35,
              "type": "TFNG",
              "text": "Successful entrepreneurship requires innovation, risk-taking, and strategic planning",
              "options": [
                "TRUE",
                "FALSE",
                "NOT GIVEN"
              ],
              "answer": "TRUE",
              "explanation": "The statement directly matches the text: \"Successful entrepreneurship requires innovation, risk-taking, and strategic planning\".",
              "location": "Paragraph 1, Sentence 1"
            },
            {
              "num": 36,
              "type": "MCQ",
              "text": "According to paragraph 1, what is the main finding regarding  Entrepreneurship?",
              "options": [
                "A. It has a significant negative impact on resources",
                "B. It represents a key advancement in the field",
                "C. It has been widely criticized by modern researchers",
                "D. It is no longer considered relevant"
              ],
              "answer": "B",
              "explanation": "The text confirms that this development is a major advancement: \"Successful entrepreneurship requires innovation, risk-taking, and strategic planning\".",
              "location": "Paragraph 1, Sentence 1"
            },
            {
              "num": 37,
              "type": "FILL",
              "text": "_________ entrepreneurship requires innovation, risk-taking, and strategic planning",
              "answer": "successful",
              "explanation": "The passage notes that the successful is essential in this context.",
              "location": "Paragraph 1, Sentence 1"
            },
            {
              "num": 38,
              "type": "TFNG",
              "text": "Successful entrepreneurship requires innovation, risk-taking, and strategic planning",
              "options": [
                "TRUE",
                "FALSE",
                "NOT GIVEN"
              ],
              "answer": "TRUE",
              "explanation": "The statement directly matches the text: \"Successful entrepreneurship requires innovation, risk-taking, and strategic planning\".",
              "location": "Paragraph 1, Sentence 1"
            },
            {
              "num": 39,
              "type": "MCQ",
              "text": "According to paragraph 1, what is the main finding regarding  Entrepreneurship?",
              "options": [
                "A. It has a significant negative impact on resources",
                "B. It represents a key advancement in the field",
                "C. It has been widely criticized by modern researchers",
                "D. It is no longer considered relevant"
              ],
              "answer": "B",
              "explanation": "The text confirms that this development is a major advancement: \"Successful entrepreneurship requires innovation, risk-taking, and strategic planning\".",
              "location": "Paragraph 1, Sentence 1"
            },
            {
              "num": 40,
              "type": "FILL",
              "text": "_________ entrepreneurship requires innovation, risk-taking, and strategic planning",
              "answer": "successful",
              "explanation": "The passage notes that the successful is essential in this context.",
              "location": "Paragraph 1, Sentence 1"
            }
          ]
        }
      ]
    },
    "writing": {
      "tasks": []
    }
  },
  "11": {
    "title": "Cambridge IELTS 20 — Test 3",
    "book": "IELTS 20",
    "listening": {
      "sections": [
        {
          "id": 1,
          "title": "Part 1: Theatre Ticket Enquiry",
          "audio": "audio/IELTS_20_Test_3_Part1.m4a",
          "description": "A woman calls the theatre box office to ask about tickets.",
          "questions": [
            {
              "num": 1,
              "type": "FILL",
              "text": "Name of the show: The _________ Affair",
              "answer": "Midnight",
              "explanation": "The show is called 'The Midnight Affair'."
            },
            {
              "num": 2,
              "type": "FILL",
              "text": "Duration of the show including interval: _________ hours",
              "answer": "two and a half",
              "explanation": "The total running time including the interval is two and a half hours."
            },
            {
              "num": 3,
              "type": "FILL",
              "text": "Price of a standard adult ticket: £_________",
              "answer": "38",
              "explanation": "Standard adult tickets are priced at £38."
            },
            {
              "num": 4,
              "type": "FILL",
              "text": "Price of a concession ticket (students/over-65s): £_________",
              "answer": "22",
              "explanation": "Concession tickets for students and those over 65 cost £22."
            },
            {
              "num": 5,
              "type": "MCQ",
              "text": "What discount is available for groups of 10 or more?",
              "options": [
                "A. 10% off",
                "B. 15% off",
                "C. 20% off",
                "D. Free programme"
              ],
              "answer": "C",
              "explanation": "Groups of ten or more receive a 20% discount."
            },
            {
              "num": 6,
              "type": "FILL",
              "text": "The box office is open Monday to Saturday from 10am to _________ pm.",
              "answer": "6",
              "explanation": "Box office hours are 10am to 6pm, Monday to Saturday."
            },
            {
              "num": 7,
              "type": "MCQ",
              "text": "Where are the best seats for viewing the show?",
              "options": [
                "A. Front stalls",
                "B. Royal circle",
                "C. Upper circle",
                "D. Side balcony"
              ],
              "answer": "B",
              "explanation": "The royal circle is recommended for the best unobstructed view."
            },
            {
              "num": 8,
              "type": "FILL",
              "text": "The woman would like _________ tickets.",
              "answer": "four",
              "explanation": "The woman asks to purchase four tickets."
            },
            {
              "num": 9,
              "type": "MCQ",
              "text": "What is the booking fee per ticket when buying online?",
              "options": [
                "A. £1",
                "B. £1.50",
                "C. £2",
                "D. No booking fee"
              ],
              "answer": "B",
              "explanation": "Online purchases incur a £1.50 booking fee per ticket."
            },
            {
              "num": 10,
              "type": "FILL",
              "text": "The show ends its run on _________ August.",
              "answer": "31st",
              "explanation": "The final performance is on the 31st of August."
            }
          ],
          "transcript": ""
        },
        {
          "id": 2,
          "title": "Part 2: History of a Market Town",
          "audio": "audio/IELTS_20_Test_3_Part2.m4a",
          "description": "A local historian gives a talk about the history of Castleford market town.",
          "questions": [
            {
              "num": 11,
              "type": "FILL",
              "text": "Year Castleford received its market charter: _________",
              "answer": "1286",
              "explanation": "Castleford was granted its market charter in 1286."
            },
            {
              "num": 12,
              "type": "MCQ",
              "text": "What was the town's main industry in the 18th century?",
              "options": [
                "A. Coal mining",
                "B. Textile manufacturing",
                "C. Pottery production",
                "D. Shipbuilding"
              ],
              "answer": "C",
              "explanation": "Pottery manufacturing was Castleford's dominant industry in the 18th century."
            },
            {
              "num": 13,
              "type": "FILL",
              "text": "The town's population in 1901: approximately _________ thousand",
              "answer": "23",
              "explanation": "Census records show Castleford had approximately 23,000 residents in 1901."
            },
            {
              "num": 14,
              "type": "FILL",
              "text": "Year the town's railway station opened: _________",
              "answer": "1849",
              "explanation": "Castleford railway station opened in 1849."
            },
            {
              "num": 15,
              "type": "MCQ",
              "text": "The town hall was built using funds from:",
              "options": [
                "A. A national government grant",
                "B. Local wealthy merchants",
                "C. A charitable bequest from a local landowner",
                "D. Public subscription"
              ],
              "answer": "D",
              "explanation": "The town hall was funded by public subscription — contributions from local residents."
            },
            {
              "num": 16,
              "type": "FILL",
              "text": "Name of the famous Victorian-era architect who designed the town hall: _________",
              "answer": "Brodrick",
              "explanation": "Cuthbert Brodrick, the celebrated Victorian architect, designed the town hall."
            },
            {
              "num": 17,
              "type": "MCQ",
              "text": "The old corn exchange is now used as:",
              "options": [
                "A. A shopping centre",
                "B. A library",
                "C. A concert venue",
                "D. Office space"
              ],
              "answer": "C",
              "explanation": "The historic corn exchange has been converted into a concert and events venue."
            },
            {
              "num": 18,
              "type": "FILL",
              "text": "The annual Castleford Fair has taken place every _________ since the medieval period.",
              "answer": "September",
              "explanation": "The Castleford Fair has been held every September since its founding in the medieval era."
            },
            {
              "num": 19,
              "type": "MCQ",
              "text": "The town's most famous historical figure is:",
              "options": [
                "A. A political reformer",
                "B. A noted sculptor",
                "C. A military general",
                "D. A scientist"
              ],
              "answer": "B",
              "explanation": "Henry Moore, the internationally renowned sculptor, was born in Castleford."
            },
            {
              "num": 20,
              "type": "FILL",
              "text": "The oldest building still standing in Castleford dates from the _________ century.",
              "answer": "14th",
              "explanation": "A 14th-century church remains the oldest surviving structure in the town."
            }
          ],
          "transcript": ""
        },
        {
          "id": 3,
          "title": "Part 3: Documentary Film Project Discussion",
          "audio": "audio/IELTS_20_Test_3_Part3.m4a",
          "description": "Two film students discuss making a documentary on ocean pollution.",
          "questions": [
            {
              "num": 21,
              "type": "MCQ",
              "text": "What type of documentary style do they agree to use?",
              "options": [
                "A. Observational — fly-on-the-wall filming only",
                "B. Expository — interviews and narration with visual evidence",
                "C. Animated — using graphics to explain science",
                "D. Participatory — the filmmakers appear on screen throughout"
              ],
              "answer": "B",
              "explanation": "They agree on an expository approach combining expert interviews with visual evidence."
            },
            {
              "num": 22,
              "type": "FILL",
              "text": "Their documentary will focus specifically on _________ pollution in the North Sea.",
              "answer": "microplastic",
              "explanation": "The film narrows its focus to microplastic pollution in the North Sea."
            },
            {
              "num": 23,
              "type": "MCQ",
              "text": "One student argues the strongest section of the documentary will be:",
              "options": [
                "A. The historical overview of plastic manufacturing",
                "B. Interviews with fishing communities affected by pollution",
                "C. Scientific data on plastic degradation rates",
                "D. Footage of plastic production factories"
              ],
              "answer": "B",
              "explanation": "Personal testimonies from fishing communities will provide the most emotionally engaging content."
            },
            {
              "num": 24,
              "type": "FILL",
              "text": "They plan to interview a marine biologist from _________ University.",
              "answer": "Newcastle",
              "explanation": "They will seek an expert interview with a marine biologist at Newcastle University."
            },
            {
              "num": 25,
              "type": "MCQ",
              "text": "One student is concerned that the documentary might:",
              "options": [
                "A. Run over the 30-minute time limit",
                "B. Be too emotionally manipulative without factual balance",
                "C. Fail to secure broadcast rights",
                "D. Be too academic for a general audience"
              ],
              "answer": "B",
              "explanation": "She worries that emotive imagery could overshadow factual rigour and scientific accuracy."
            },
            {
              "num": 26,
              "type": "FILL",
              "text": "Their target audience is _________ people aged 18–35.",
              "answer": "environmentally conscious",
              "explanation": "They aim their film at environmentally aware young adults."
            },
            {
              "num": 27,
              "type": "MCQ",
              "text": "The documentary's proposed call to action is:",
              "options": [
                "A. Banning all single-use plastics",
                "B. Signing an online petition to government",
                "C. Encouraging viewers to reduce single-use plastic consumption",
                "D. Funding marine research organisations"
              ],
              "answer": "C",
              "explanation": "The film's primary call to action is encouraging individual behaviour change to reduce plastic use."
            },
            {
              "num": 28,
              "type": "FILL",
              "text": "Total planned running time for the documentary: _________ minutes",
              "answer": "25",
              "explanation": "They agree the documentary should run for 25 minutes."
            },
            {
              "num": 29,
              "type": "MCQ",
              "text": "The students plan to submit their documentary to:",
              "options": [
                "A. A national film festival",
                "B. YouTube only",
                "C. A student environmental film competition",
                "D. A streaming platform"
              ],
              "answer": "C",
              "explanation": "They intend to enter a student environmental film competition."
            },
            {
              "num": 30,
              "type": "FILL",
              "text": "Their filming budget is limited to £_________.",
              "answer": "500",
              "explanation": "Their total budget for the project is £500."
            }
          ],
          "transcript": ""
        },
        {
          "id": 4,
          "title": "Part 4: Sustainable Architecture",
          "audio": "audio/IELTS_20_Test_3_Part4.m4a",
          "description": "A lecture on the principles and practice of sustainable architecture.",
          "questions": [
            {
              "num": 31,
              "type": "FILL",
              "text": "Buildings account for approximately _________ % of global energy consumption.",
              "answer": "40",
              "explanation": "The built environment accounts for around 40% of global energy use."
            },
            {
              "num": 32,
              "type": "MCQ",
              "text": "Passive design uses:",
              "options": [
                "A. Solar panels and wind turbines",
                "B. Natural light, ventilation and thermal mass to reduce energy needs",
                "C. Automated climate control systems",
                "D. Geothermal heating systems"
              ],
              "answer": "B",
              "explanation": "Passive design exploits natural resources — daylight, airflow, thermal mass — to minimise energy consumption."
            },
            {
              "num": 33,
              "type": "FILL",
              "text": "The term _________ building refers to structures that generate as much energy as they consume.",
              "answer": "net-zero",
              "explanation": "Net-zero buildings produce as much energy as they use over the course of a year."
            },
            {
              "num": 34,
              "type": "MCQ",
              "text": "LEED certification is a:",
              "options": [
                "A. Government building regulation standard",
                "B. Voluntary green building rating system",
                "C. European Union environmental directive",
                "D. Professional qualification for architects"
              ],
              "answer": "B",
              "explanation": "LEED (Leadership in Energy and Environmental Design) is a widely used voluntary green building certification."
            },
            {
              "num": 35,
              "type": "FILL",
              "text": "Green roofs reduce urban _________ by providing insulation and absorbing rainfall.",
              "answer": "heat",
              "explanation": "Green roofs lower urban heat island effects and manage stormwater runoff."
            },
            {
              "num": 36,
              "type": "MCQ",
              "text": "The Passivhaus standard requires:",
              "options": [
                "A. All energy to come from renewable sources",
                "B. Buildings to meet strict energy efficiency criteria limiting heat demand to 15 kWh per square metre per year",
                "C. Buildings to achieve carbon neutrality within 10 years",
                "D. All materials to be locally sourced"
              ],
              "answer": "B",
              "explanation": "Passivhaus limits space heating demand to no more than 15 kWh/m²/year through superior insulation and airtightness."
            },
            {
              "num": 37,
              "type": "FILL",
              "text": "Cross-laminated timber (CLT) is considered sustainable because it _________ carbon during manufacture.",
              "answer": "stores",
              "explanation": "CLT stores carbon sequestered by trees, making it a carbon-storing building material."
            },
            {
              "num": 38,
              "type": "MCQ",
              "text": "The Singapore Jewel Changi Airport is notable for:",
              "options": [
                "A. Being the world's first net-zero airport building",
                "B. Integrating a large indoor waterfall and forest into its design",
                "C. Being built entirely from recycled materials",
                "D. Generating all its energy from solar panels on its roof"
              ],
              "answer": "B",
              "explanation": "Jewel Changi integrates a 40-metre indoor waterfall and terraced forest as its central design feature."
            },
            {
              "num": 39,
              "type": "MCQ",
              "text": "The main challenge facing sustainable architecture today is:",
              "options": [
                "A. Lack of suitable building materials",
                "B. Upfront cost premium compared to conventional construction",
                "C. Opposition from architects",
                "D. Insufficient government regulation"
              ],
              "answer": "B",
              "explanation": "Higher upfront costs remain the primary barrier to wider adoption of sustainable building practices."
            },
            {
              "num": 40,
              "type": "FILL",
              "text": "Biomimicry in architecture means designing buildings inspired by _________.",
              "answer": "nature",
              "explanation": "Biomimicry applies principles and processes found in nature to architectural and engineering design."
            }
          ],
          "transcript": ""
        }
      ]
    },
    "reading": {
      "passages": [
        {
          "title": "Passage 1: History of Theatre and Ticket Sales",
          "text": "<p>Historic theatres relied on subscription sales and box office bookings. The transition to digital ticketing has revolutionized how audiences buy seats, enabling dynamic pricing and mobile tickets. However, high booking fees and ticket scalping remain persistent concerns for theatregoers.</p>",
          "questions": [
            {
              "num": 1,
              "type": "FILL",
              "text": "_________ theatres relied on subscription sales and box office bookings",
              "answer": "historic",
              "explanation": "The passage notes that the historic is essential in this context.",
              "location": "Paragraph 1, Sentence 1"
            },
            {
              "num": 2,
              "type": "TFNG",
              "text": "Historic theatres relied on subscription sales and box office bookings",
              "options": [
                "TRUE",
                "FALSE",
                "NOT GIVEN"
              ],
              "answer": "TRUE",
              "explanation": "The statement directly matches the text: \"Historic theatres relied on subscription sales and box office bookings\".",
              "location": "Paragraph 1, Sentence 1"
            },
            {
              "num": 3,
              "type": "MCQ",
              "text": "According to paragraph 1, what is the main finding regarding Theatre Ticket History?",
              "options": [
                "A. It has a significant negative impact on resources",
                "B. It represents a key advancement in the field",
                "C. It has been widely criticized by modern researchers",
                "D. It is no longer considered relevant"
              ],
              "answer": "B",
              "explanation": "The text confirms that this development is a major advancement: \"Historic theatres relied on subscription sales and box office bookings\".",
              "location": "Paragraph 1, Sentence 1"
            },
            {
              "num": 4,
              "type": "FILL",
              "text": "_________ theatres relied on subscription sales and box office bookings",
              "answer": "historic",
              "explanation": "The passage notes that the historic is essential in this context.",
              "location": "Paragraph 1, Sentence 1"
            },
            {
              "num": 5,
              "type": "TFNG",
              "text": "Historic theatres relied on subscription sales and box office bookings",
              "options": [
                "TRUE",
                "FALSE",
                "NOT GIVEN"
              ],
              "answer": "TRUE",
              "explanation": "The statement directly matches the text: \"Historic theatres relied on subscription sales and box office bookings\".",
              "location": "Paragraph 1, Sentence 1"
            },
            {
              "num": 6,
              "type": "MCQ",
              "text": "According to paragraph 1, what is the main finding regarding Theatre Ticket History?",
              "options": [
                "A. It has a significant negative impact on resources",
                "B. It represents a key advancement in the field",
                "C. It has been widely criticized by modern researchers",
                "D. It is no longer considered relevant"
              ],
              "answer": "B",
              "explanation": "The text confirms that this development is a major advancement: \"Historic theatres relied on subscription sales and box office bookings\".",
              "location": "Paragraph 1, Sentence 1"
            },
            {
              "num": 7,
              "type": "FILL",
              "text": "_________ theatres relied on subscription sales and box office bookings",
              "answer": "historic",
              "explanation": "The passage notes that the historic is essential in this context.",
              "location": "Paragraph 1, Sentence 1"
            },
            {
              "num": 8,
              "type": "TFNG",
              "text": "Historic theatres relied on subscription sales and box office bookings",
              "options": [
                "TRUE",
                "FALSE",
                "NOT GIVEN"
              ],
              "answer": "TRUE",
              "explanation": "The statement directly matches the text: \"Historic theatres relied on subscription sales and box office bookings\".",
              "location": "Paragraph 1, Sentence 1"
            },
            {
              "num": 9,
              "type": "MCQ",
              "text": "According to paragraph 1, what is the main finding regarding Theatre Ticket History?",
              "options": [
                "A. It has a significant negative impact on resources",
                "B. It represents a key advancement in the field",
                "C. It has been widely criticized by modern researchers",
                "D. It is no longer considered relevant"
              ],
              "answer": "B",
              "explanation": "The text confirms that this development is a major advancement: \"Historic theatres relied on subscription sales and box office bookings\".",
              "location": "Paragraph 1, Sentence 1"
            },
            {
              "num": 10,
              "type": "FILL",
              "text": "_________ theatres relied on subscription sales and box office bookings",
              "answer": "historic",
              "explanation": "The passage notes that the historic is essential in this context.",
              "location": "Paragraph 1, Sentence 1"
            },
            {
              "num": 11,
              "type": "TFNG",
              "text": "Historic theatres relied on subscription sales and box office bookings",
              "options": [
                "TRUE",
                "FALSE",
                "NOT GIVEN"
              ],
              "answer": "TRUE",
              "explanation": "The statement directly matches the text: \"Historic theatres relied on subscription sales and box office bookings\".",
              "location": "Paragraph 1, Sentence 1"
            },
            {
              "num": 12,
              "type": "MCQ",
              "text": "According to paragraph 1, what is the main finding regarding Theatre Ticket History?",
              "options": [
                "A. It has a significant negative impact on resources",
                "B. It represents a key advancement in the field",
                "C. It has been widely criticized by modern researchers",
                "D. It is no longer considered relevant"
              ],
              "answer": "B",
              "explanation": "The text confirms that this development is a major advancement: \"Historic theatres relied on subscription sales and box office bookings\".",
              "location": "Paragraph 1, Sentence 1"
            },
            {
              "num": 13,
              "type": "FILL",
              "text": "_________ theatres relied on subscription sales and box office bookings",
              "answer": "historic",
              "explanation": "The passage notes that the historic is essential in this context.",
              "location": "Paragraph 1, Sentence 1"
            }
          ]
        },
        {
          "title": "Passage 2: Sustainable Architecture",
          "text": "<p>Sustainable architecture aims to minimize the environmental impact of buildings. Key principles include passive design, which utilizes natural light and ventilation, and net-zero goals, where buildings generate all the energy they consume. Using renewable materials like cross-laminated timber is crucial.</p>",
          "questions": [
            {
              "num": 14,
              "type": "TFNG",
              "text": "Sustainable architecture aims to minimize the environmental impact of buildings",
              "options": [
                "TRUE",
                "FALSE",
                "NOT GIVEN"
              ],
              "answer": "TRUE",
              "explanation": "The statement directly matches the text: \"Sustainable architecture aims to minimize the environmental impact of buildings\".",
              "location": "Paragraph 1, Sentence 1"
            },
            {
              "num": 15,
              "type": "MCQ",
              "text": "According to paragraph 1, what is the main finding regarding  Sustainable Architecture?",
              "options": [
                "A. It has a significant negative impact on resources",
                "B. It represents a key advancement in the field",
                "C. It has been widely criticized by modern researchers",
                "D. It is no longer considered relevant"
              ],
              "answer": "B",
              "explanation": "The text confirms that this development is a major advancement: \"Sustainable architecture aims to minimize the environmental impact of buildings\".",
              "location": "Paragraph 1, Sentence 1"
            },
            {
              "num": 16,
              "type": "FILL",
              "text": "_________ architecture aims to minimize the environmental impact of buildings",
              "answer": "sustainable",
              "explanation": "The passage notes that the sustainable is essential in this context.",
              "location": "Paragraph 1, Sentence 1"
            },
            {
              "num": 17,
              "type": "TFNG",
              "text": "Sustainable architecture aims to minimize the environmental impact of buildings",
              "options": [
                "TRUE",
                "FALSE",
                "NOT GIVEN"
              ],
              "answer": "TRUE",
              "explanation": "The statement directly matches the text: \"Sustainable architecture aims to minimize the environmental impact of buildings\".",
              "location": "Paragraph 1, Sentence 1"
            },
            {
              "num": 18,
              "type": "MCQ",
              "text": "According to paragraph 1, what is the main finding regarding  Sustainable Architecture?",
              "options": [
                "A. It has a significant negative impact on resources",
                "B. It represents a key advancement in the field",
                "C. It has been widely criticized by modern researchers",
                "D. It is no longer considered relevant"
              ],
              "answer": "B",
              "explanation": "The text confirms that this development is a major advancement: \"Sustainable architecture aims to minimize the environmental impact of buildings\".",
              "location": "Paragraph 1, Sentence 1"
            },
            {
              "num": 19,
              "type": "FILL",
              "text": "_________ architecture aims to minimize the environmental impact of buildings",
              "answer": "sustainable",
              "explanation": "The passage notes that the sustainable is essential in this context.",
              "location": "Paragraph 1, Sentence 1"
            },
            {
              "num": 20,
              "type": "TFNG",
              "text": "Sustainable architecture aims to minimize the environmental impact of buildings",
              "options": [
                "TRUE",
                "FALSE",
                "NOT GIVEN"
              ],
              "answer": "TRUE",
              "explanation": "The statement directly matches the text: \"Sustainable architecture aims to minimize the environmental impact of buildings\".",
              "location": "Paragraph 1, Sentence 1"
            },
            {
              "num": 21,
              "type": "MCQ",
              "text": "According to paragraph 1, what is the main finding regarding  Sustainable Architecture?",
              "options": [
                "A. It has a significant negative impact on resources",
                "B. It represents a key advancement in the field",
                "C. It has been widely criticized by modern researchers",
                "D. It is no longer considered relevant"
              ],
              "answer": "B",
              "explanation": "The text confirms that this development is a major advancement: \"Sustainable architecture aims to minimize the environmental impact of buildings\".",
              "location": "Paragraph 1, Sentence 1"
            },
            {
              "num": 22,
              "type": "FILL",
              "text": "_________ architecture aims to minimize the environmental impact of buildings",
              "answer": "sustainable",
              "explanation": "The passage notes that the sustainable is essential in this context.",
              "location": "Paragraph 1, Sentence 1"
            },
            {
              "num": 23,
              "type": "TFNG",
              "text": "Sustainable architecture aims to minimize the environmental impact of buildings",
              "options": [
                "TRUE",
                "FALSE",
                "NOT GIVEN"
              ],
              "answer": "TRUE",
              "explanation": "The statement directly matches the text: \"Sustainable architecture aims to minimize the environmental impact of buildings\".",
              "location": "Paragraph 1, Sentence 1"
            },
            {
              "num": 24,
              "type": "MCQ",
              "text": "According to paragraph 1, what is the main finding regarding  Sustainable Architecture?",
              "options": [
                "A. It has a significant negative impact on resources",
                "B. It represents a key advancement in the field",
                "C. It has been widely criticized by modern researchers",
                "D. It is no longer considered relevant"
              ],
              "answer": "B",
              "explanation": "The text confirms that this development is a major advancement: \"Sustainable architecture aims to minimize the environmental impact of buildings\".",
              "location": "Paragraph 1, Sentence 1"
            },
            {
              "num": 25,
              "type": "FILL",
              "text": "_________ architecture aims to minimize the environmental impact of buildings",
              "answer": "sustainable",
              "explanation": "The passage notes that the sustainable is essential in this context.",
              "location": "Paragraph 1, Sentence 1"
            },
            {
              "num": 26,
              "type": "TFNG",
              "text": "Sustainable architecture aims to minimize the environmental impact of buildings",
              "options": [
                "TRUE",
                "FALSE",
                "NOT GIVEN"
              ],
              "answer": "TRUE",
              "explanation": "The statement directly matches the text: \"Sustainable architecture aims to minimize the environmental impact of buildings\".",
              "location": "Paragraph 1, Sentence 1"
            }
          ]
        },
        {
          "title": "Passage 3: Ocean Pollution and Microplastics",
          "text": "<p>Microplastics represent a severe threat to marine life in the oceans. These tiny plastic particles, under 5mm in size, are ingested by fish and shellfish, entering the food chain. Mitigating plastic pollution requires global cooperation, single-use plastic bans, and improved recycling technologies.</p>",
          "questions": [
            {
              "num": 27,
              "type": "MCQ",
              "text": "According to paragraph 1, what is the main finding regarding  Ocean Pollution?",
              "options": [
                "A. It has a significant negative impact on resources",
                "B. It represents a key advancement in the field",
                "C. It has been widely criticized by modern researchers",
                "D. It is no longer considered relevant"
              ],
              "answer": "B",
              "explanation": "The text confirms that this development is a major advancement: \"Microplastics represent a severe threat to marine life in the oceans\".",
              "location": "Paragraph 1, Sentence 1"
            },
            {
              "num": 28,
              "type": "FILL",
              "text": "_________ represent a severe threat to marine life in the oceans",
              "answer": "microplastics",
              "explanation": "The passage notes that the microplastics is essential in this context.",
              "location": "Paragraph 1, Sentence 1"
            },
            {
              "num": 29,
              "type": "TFNG",
              "text": "Microplastics represent a severe threat to marine life in the oceans",
              "options": [
                "TRUE",
                "FALSE",
                "NOT GIVEN"
              ],
              "answer": "TRUE",
              "explanation": "The statement directly matches the text: \"Microplastics represent a severe threat to marine life in the oceans\".",
              "location": "Paragraph 1, Sentence 1"
            },
            {
              "num": 30,
              "type": "MCQ",
              "text": "According to paragraph 1, what is the main finding regarding  Ocean Pollution?",
              "options": [
                "A. It has a significant negative impact on resources",
                "B. It represents a key advancement in the field",
                "C. It has been widely criticized by modern researchers",
                "D. It is no longer considered relevant"
              ],
              "answer": "B",
              "explanation": "The text confirms that this development is a major advancement: \"Microplastics represent a severe threat to marine life in the oceans\".",
              "location": "Paragraph 1, Sentence 1"
            },
            {
              "num": 31,
              "type": "FILL",
              "text": "_________ represent a severe threat to marine life in the oceans",
              "answer": "microplastics",
              "explanation": "The passage notes that the microplastics is essential in this context.",
              "location": "Paragraph 1, Sentence 1"
            },
            {
              "num": 32,
              "type": "TFNG",
              "text": "Microplastics represent a severe threat to marine life in the oceans",
              "options": [
                "TRUE",
                "FALSE",
                "NOT GIVEN"
              ],
              "answer": "TRUE",
              "explanation": "The statement directly matches the text: \"Microplastics represent a severe threat to marine life in the oceans\".",
              "location": "Paragraph 1, Sentence 1"
            },
            {
              "num": 33,
              "type": "MCQ",
              "text": "According to paragraph 1, what is the main finding regarding  Ocean Pollution?",
              "options": [
                "A. It has a significant negative impact on resources",
                "B. It represents a key advancement in the field",
                "C. It has been widely criticized by modern researchers",
                "D. It is no longer considered relevant"
              ],
              "answer": "B",
              "explanation": "The text confirms that this development is a major advancement: \"Microplastics represent a severe threat to marine life in the oceans\".",
              "location": "Paragraph 1, Sentence 1"
            },
            {
              "num": 34,
              "type": "FILL",
              "text": "_________ represent a severe threat to marine life in the oceans",
              "answer": "microplastics",
              "explanation": "The passage notes that the microplastics is essential in this context.",
              "location": "Paragraph 1, Sentence 1"
            },
            {
              "num": 35,
              "type": "TFNG",
              "text": "Microplastics represent a severe threat to marine life in the oceans",
              "options": [
                "TRUE",
                "FALSE",
                "NOT GIVEN"
              ],
              "answer": "TRUE",
              "explanation": "The statement directly matches the text: \"Microplastics represent a severe threat to marine life in the oceans\".",
              "location": "Paragraph 1, Sentence 1"
            },
            {
              "num": 36,
              "type": "MCQ",
              "text": "According to paragraph 1, what is the main finding regarding  Ocean Pollution?",
              "options": [
                "A. It has a significant negative impact on resources",
                "B. It represents a key advancement in the field",
                "C. It has been widely criticized by modern researchers",
                "D. It is no longer considered relevant"
              ],
              "answer": "B",
              "explanation": "The text confirms that this development is a major advancement: \"Microplastics represent a severe threat to marine life in the oceans\".",
              "location": "Paragraph 1, Sentence 1"
            },
            {
              "num": 37,
              "type": "FILL",
              "text": "_________ represent a severe threat to marine life in the oceans",
              "answer": "microplastics",
              "explanation": "The passage notes that the microplastics is essential in this context.",
              "location": "Paragraph 1, Sentence 1"
            },
            {
              "num": 38,
              "type": "TFNG",
              "text": "Microplastics represent a severe threat to marine life in the oceans",
              "options": [
                "TRUE",
                "FALSE",
                "NOT GIVEN"
              ],
              "answer": "TRUE",
              "explanation": "The statement directly matches the text: \"Microplastics represent a severe threat to marine life in the oceans\".",
              "location": "Paragraph 1, Sentence 1"
            },
            {
              "num": 39,
              "type": "MCQ",
              "text": "According to paragraph 1, what is the main finding regarding  Ocean Pollution?",
              "options": [
                "A. It has a significant negative impact on resources",
                "B. It represents a key advancement in the field",
                "C. It has been widely criticized by modern researchers",
                "D. It is no longer considered relevant"
              ],
              "answer": "B",
              "explanation": "The text confirms that this development is a major advancement: \"Microplastics represent a severe threat to marine life in the oceans\".",
              "location": "Paragraph 1, Sentence 1"
            },
            {
              "num": 40,
              "type": "FILL",
              "text": "_________ represent a severe threat to marine life in the oceans",
              "answer": "microplastics",
              "explanation": "The passage notes that the microplastics is essential in this context.",
              "location": "Paragraph 1, Sentence 1"
            }
          ]
        }
      ]
    },
    "writing": {
      "tasks": []
    }
  },
  "12": {
    "title": "Cambridge IELTS 20 — Test 4",
    "book": "IELTS 20",
    "listening": {
      "sections": [
        {
          "id": 1,
          "title": "Part 1: Gym Personal Training Enquiry",
          "audio": "audio/IELTS_20_Test_4_Part1.m4a",
          "description": "A man calls a gym to enquire about personal training sessions.",
          "questions": [
            {
              "num": 1,
              "type": "FILL",
              "text": "Cost per personal training session: £_________",
              "answer": "55",
              "explanation": "Individual personal training sessions cost £55 each."
            },
            {
              "num": 2,
              "type": "FILL",
              "text": "Discounted cost if buying a block of 10 sessions: £_________ per session",
              "answer": "45",
              "explanation": "Buying a block of 10 sessions reduces the cost to £45 per session."
            },
            {
              "num": 3,
              "type": "FILL",
              "text": "Duration of each personal training session: _________ minutes",
              "answer": "60",
              "explanation": "Each PT session is one hour (60 minutes)."
            },
            {
              "num": 4,
              "type": "MCQ",
              "text": "Initial consultation includes:",
              "options": [
                "A. A fitness test and discussion of goals",
                "B. A trial training session",
                "C. A diet plan only",
                "D. A medical assessment"
              ],
              "answer": "A",
              "explanation": "The initial consultation involves a fitness assessment and goal-setting discussion."
            },
            {
              "num": 5,
              "type": "FILL",
              "text": "Cost of the initial consultation: _________",
              "answer": "free",
              "explanation": "The initial consultation is complimentary — there is no charge."
            },
            {
              "num": 6,
              "type": "MCQ",
              "text": "The man's main fitness goal is:",
              "options": [
                "A. Weight loss",
                "B. Marathon training",
                "C. Building muscle mass",
                "D. Injury rehabilitation"
              ],
              "answer": "C",
              "explanation": "The man states his primary goal is to build muscle mass."
            },
            {
              "num": 7,
              "type": "FILL",
              "text": "Name of the personal trainer recommended to him: _________",
              "answer": "Jordan",
              "explanation": "The receptionist suggests he work with trainer Jordan."
            },
            {
              "num": 8,
              "type": "FILL",
              "text": "Jordan is available on Tuesday and _________ mornings.",
              "answer": "Thursday",
              "explanation": "Jordan's available slots are Tuesday and Thursday mornings."
            },
            {
              "num": 9,
              "type": "MCQ",
              "text": "What will the man receive between sessions?",
              "options": [
                "A. Daily text reminders",
                "B. A written workout and nutrition plan",
                "C. Online video tutorials",
                "D. Weekly progress reports by email"
              ],
              "answer": "B",
              "explanation": "Clients receive a personalised written training and nutrition plan to follow between sessions."
            },
            {
              "num": 10,
              "type": "FILL",
              "text": "The gym's cancellation policy requires notice at least _________ hours before a session.",
              "answer": "24",
              "explanation": "Sessions must be cancelled with at least 24 hours' notice to avoid being charged."
            }
          ],
          "transcript": ""
        },
        {
          "id": 2,
          "title": "Part 2: Wildlife Trust Presentation",
          "audio": "audio/IELTS_20_Test_4_Part2.m4a",
          "description": "A Wildlife Trust officer presents information about the organisation's conservation work.",
          "questions": [
            {
              "num": 11,
              "type": "FILL",
              "text": "Year the Wildlife Trust was founded: _________",
              "answer": "1959",
              "explanation": "The trust was established in 1959."
            },
            {
              "num": 12,
              "type": "FILL",
              "text": "Number of nature reserves managed by the trust: over _________",
              "answer": "100",
              "explanation": "The trust manages over 100 nature reserves nationwide."
            },
            {
              "num": 13,
              "type": "MCQ",
              "text": "The trust's current priority species include:",
              "options": [
                "A. Red kite and osprey only",
                "B. Water vole, hedgehog and great crested newt",
                "C. All UK native mammals",
                "D. Migratory bird species only"
              ],
              "answer": "B",
              "explanation": "The trust's priority species programme focuses on water vole, hedgehog and great crested newt."
            },
            {
              "num": 14,
              "type": "FILL",
              "text": "Annual membership fee for an individual adult: £_________",
              "answer": "42",
              "explanation": "Individual adult membership costs £42 per year."
            },
            {
              "num": 15,
              "type": "MCQ",
              "text": "What does membership include?",
              "options": [
                "A. Free entry to all UK nature reserves",
                "B. A quarterly wildlife magazine and free guided walks",
                "C. Unlimited personal conservation volunteering credits",
                "D. Free seed and plant packs"
              ],
              "answer": "B",
              "explanation": "Members receive a quarterly magazine and invitations to free guided walks."
            },
            {
              "num": 16,
              "type": "FILL",
              "text": "The trust's 30 by _________ campaign aims to protect 30% of land for nature by 2030.",
              "answer": "30",
              "explanation": "The '30 by 30' campaign targets protecting 30% of UK land for nature by 2030."
            },
            {
              "num": 17,
              "type": "MCQ",
              "text": "How are hedgehog numbers described?",
              "options": [
                "A. Stable",
                "B. Increasing due to conservation efforts",
                "C. Declining rapidly",
                "D. Extinct in urban areas"
              ],
              "answer": "C",
              "explanation": "The officer reports that hedgehog populations are declining rapidly."
            },
            {
              "num": 18,
              "type": "FILL",
              "text": "Volunteers contributed over _________ hours last year.",
              "answer": "50,000",
              "explanation": "The trust benefited from over 50,000 volunteer hours in the previous year."
            },
            {
              "num": 19,
              "type": "MCQ",
              "text": "The trust's new urban wildlife project focuses on:",
              "options": [
                "A. Creating wildlife corridors through gardens",
                "B. Removing invasive species from rivers",
                "C. Reintroducing beavers to urban waterways",
                "D. Planting wildflower meadows in parks"
              ],
              "answer": "A",
              "explanation": "The urban project aims to link gardens and green spaces to create wildlife corridors."
            },
            {
              "num": 20,
              "type": "FILL",
              "text": "The trust's website address: www.wildlife_________local.org.uk",
              "answer": "trust",
              "explanation": "The website is www.wildlifetrustlocal.org.uk."
            }
          ],
          "transcript": ""
        },
        {
          "id": 3,
          "title": "Part 3: Sociology Students Discussing Research on Inequality",
          "audio": "audio/IELTS_20_Test_4_Part3.m4a",
          "description": "Two sociology students discuss their research on income inequality.",
          "questions": [
            {
              "num": 21,
              "type": "MCQ",
              "text": "Which measure of inequality do the students use as their primary indicator?",
              "options": [
                "A. GDP per capita",
                "B. The Gini coefficient",
                "C. The poverty line threshold",
                "D. The Human Development Index"
              ],
              "answer": "B",
              "explanation": "The Gini coefficient is selected as the primary measure of income inequality."
            },
            {
              "num": 22,
              "type": "MCQ",
              "text": "The student argues that inequality has increased globally primarily because of:",
              "options": [
                "A. Wars and political instability",
                "B. Technological change favouring skilled workers",
                "C. Declining birth rates in wealthy countries",
                "D. Reduced international trade"
              ],
              "answer": "B",
              "explanation": "Technology-driven economic change has increasingly rewarded high-skilled workers while displacing lower-skilled ones."
            },
            {
              "num": 23,
              "type": "FILL",
              "text": "The richest _________ % of people own more than half of global wealth.",
              "answer": "one",
              "explanation": "Studies show the wealthiest 1% hold over 50% of global wealth."
            },
            {
              "num": 24,
              "type": "MCQ",
              "text": "One student argues that universal basic income (UBI) would:",
              "options": [
                "A. Replace all welfare benefits",
                "B. Provide a foundation of economic security enabling risk-taking",
                "C. Reduce incentives to work",
                "D. Be unaffordable in any country"
              ],
              "answer": "B",
              "explanation": "The student argues UBI could provide economic security that empowers people to take risks such as starting businesses."
            },
            {
              "num": 25,
              "type": "MCQ",
              "text": "The other student's main criticism of UBI is:",
              "options": [
                "A. It would be too complex to administer",
                "B. The cost and potential work disincentive effects",
                "C. It has never been tested in any country",
                "D. It would not reach the poorest in society"
              ],
              "answer": "B",
              "explanation": "Cost concerns and the risk of reducing labour market participation are the main criticisms raised."
            },
            {
              "num": 26,
              "type": "FILL",
              "text": "Countries like the Nordics are cited as evidence that high _________ can coexist with economic growth.",
              "answer": "equality",
              "explanation": "Nordic countries demonstrate that greater equality does not necessarily hinder economic performance."
            },
            {
              "num": 27,
              "type": "MCQ",
              "text": "The students agree that intergenerational inequality is primarily perpetuated through:",
              "options": [
                "A. Differences in natural ability",
                "B. Unequal access to quality education",
                "C. Geographic factors",
                "D. Individual work ethic"
              ],
              "answer": "B",
              "explanation": "Educational inequality is identified as the primary mechanism through which inequality is passed between generations."
            },
            {
              "num": 28,
              "type": "FILL",
              "text": "Their research focuses on inequality in the _________ labour market.",
              "answer": "UK",
              "explanation": "The students are researching income inequality specifically within the UK labour market."
            },
            {
              "num": 29,
              "type": "MCQ",
              "text": "The students decide their essay's policy recommendation will focus on:",
              "options": [
                "A. Reducing corporation tax",
                "B. Progressive taxation and investment in public education",
                "C. Limiting immigration",
                "D. Privatising public services"
              ],
              "answer": "B",
              "explanation": "Their policy recommendations centre on progressive taxation combined with greater investment in public education."
            },
            {
              "num": 30,
              "type": "MCQ",
              "text": "What does Piketty's research show about wealth inequality?",
              "options": [
                "A. It naturally corrects itself over time",
                "B. It has been declining since the 1980s",
                "C. It tends to increase when the rate of return on capital exceeds economic growth",
                "D. It is primarily a developing-world problem"
              ],
              "answer": "C",
              "explanation": "Piketty argues wealth inequality grows when r > g: the rate of return on capital exceeds the rate of economic growth."
            }
          ],
          "transcript": ""
        },
        {
          "id": 4,
          "title": "Part 4: Neuroscience of Decision-Making",
          "audio": "audio/IELTS_20_Test_4_Part4.m4a",
          "description": "A lecture on what neuroscience reveals about how humans make decisions.",
          "questions": [
            {
              "num": 31,
              "type": "FILL",
              "text": "The prefrontal _________ is the brain region most associated with rational decision-making.",
              "answer": "cortex",
              "explanation": "The prefrontal cortex is responsible for complex planning, rational reasoning and decision-making."
            },
            {
              "num": 32,
              "type": "MCQ",
              "text": "Damasio's somatic marker hypothesis proposes that:",
              "options": [
                "A. All decisions are made rationally by the prefrontal cortex",
                "B. Emotions play a critical role in guiding decision-making",
                "C. Decisions made under stress are always inferior",
                "D. The body does not influence thought processes"
              ],
              "answer": "B",
              "explanation": "Damasio showed that emotional signals (somatic markers) are essential to effective decision-making."
            },
            {
              "num": 33,
              "type": "MCQ",
              "text": "What did studies of patients with damage to the prefrontal cortex show?",
              "options": [
                "A. They made better decisions by relying on logic alone",
                "B. They struggled to make even simple decisions effectively",
                "C. Their IQ scores dropped significantly",
                "D. They became more creative in problem-solving"
              ],
              "answer": "B",
              "explanation": "Patients with prefrontal damage were often unable to make effective decisions despite intact reasoning abilities."
            },
            {
              "num": 34,
              "type": "FILL",
              "text": "The _________ is the brain's primary reward and motivation centre.",
              "answer": "striatum",
              "explanation": "The striatum, part of the basal ganglia, plays a central role in reward processing and motivation."
            },
            {
              "num": 35,
              "type": "MCQ",
              "text": "Dopamine's role in decision-making is to:",
              "options": [
                "A. Signal punishment for poor choices",
                "B. Signal predicted reward and motivate approach behaviour",
                "C. Regulate emotional responses to loss",
                "D. Inhibit risky decision-making"
              ],
              "answer": "B",
              "explanation": "Dopamine signals anticipated reward, motivating behaviour directed toward achieving goals."
            },
            {
              "num": 36,
              "type": "FILL",
              "text": "Loss aversion means people feel losses approximately _________ times more strongly than equivalent gains.",
              "answer": "twice",
              "explanation": "Research by Kahneman and Tversky showed losses are felt approximately twice as powerfully as gains."
            },
            {
              "num": 37,
              "type": "MCQ",
              "text": "The anchoring bias refers to:",
              "options": [
                "A. Sticking with the first option presented regardless of alternatives",
                "B. Relying too heavily on the first piece of information encountered",
                "C. Favouring decisions that benefit close social groups",
                "D. Making decisions based on the most recent information"
              ],
              "answer": "B",
              "explanation": "Anchoring causes people to over-weight initial information when making subsequent judgements."
            },
            {
              "num": 38,
              "type": "MCQ",
              "text": "The amygdala's role in decision-making is to:",
              "options": [
                "A. Store long-term memories of decisions",
                "B. Process emotional responses — particularly fear — that influence decisions",
                "C. Calculate the mathematical probabilities of outcomes",
                "D. Inhibit impulsive behaviour"
              ],
              "answer": "B",
              "explanation": "The amygdala processes emotional responses, particularly fear and threat detection, influencing risk assessment."
            },
            {
              "num": 39,
              "type": "FILL",
              "text": "Kahneman described two systems of thinking: System 1 (fast, intuitive) and System _________ (slow, analytical).",
              "answer": "2",
              "explanation": "Kahneman's dual-process theory describes System 1 as fast and intuitive, System 2 as slow and deliberate."
            },
            {
              "num": 40,
              "type": "MCQ",
              "text": "Mindfulness-based training is shown to improve decision-making by:",
              "options": [
                "A. Increasing dopamine levels permanently",
                "B. Reducing activity in the amygdala and improving prefrontal regulation",
                "C. Eliminating the influence of emotion entirely",
                "D. Boosting IQ scores"
              ],
              "answer": "B",
              "explanation": "Mindfulness practice reduces amygdala reactivity and strengthens prefrontal cortical control over emotional responses."
            }
          ],
          "transcript": ""
        }
      ]
    },
    "reading": {
      "passages": [
        {
          "title": "Passage 1: Gym Personal Training History",
          "text": "<p>Personal training has grown from an elite luxury into a mainstream fitness service. Trainers design customized workout and nutrition plans, conduct fitness assessments, and motivate clients. Proper training techniques help build muscle mass, improve cardiovascular health, and prevent injuries.</p>",
          "questions": [
            {
              "num": 1,
              "type": "FILL",
              "text": "_________ training has grown from an elite luxury into a mainstream fitness service",
              "answer": "personal",
              "explanation": "The passage notes that the personal is essential in this context.",
              "location": "Paragraph 1, Sentence 1"
            },
            {
              "num": 2,
              "type": "TFNG",
              "text": "Personal training has grown from an elite luxury into a mainstream fitness service",
              "options": [
                "TRUE",
                "FALSE",
                "NOT GIVEN"
              ],
              "answer": "TRUE",
              "explanation": "The statement directly matches the text: \"Personal training has grown from an elite luxury into a mainstream fitness service\".",
              "location": "Paragraph 1, Sentence 1"
            },
            {
              "num": 3,
              "type": "MCQ",
              "text": "According to paragraph 1, what is the main finding regarding Gym Personal Training?",
              "options": [
                "A. It has a significant negative impact on resources",
                "B. It represents a key advancement in the field",
                "C. It has been widely criticized by modern researchers",
                "D. It is no longer considered relevant"
              ],
              "answer": "B",
              "explanation": "The text confirms that this development is a major advancement: \"Personal training has grown from an elite luxury into a mainstream fitness service\".",
              "location": "Paragraph 1, Sentence 1"
            },
            {
              "num": 4,
              "type": "FILL",
              "text": "_________ training has grown from an elite luxury into a mainstream fitness service",
              "answer": "personal",
              "explanation": "The passage notes that the personal is essential in this context.",
              "location": "Paragraph 1, Sentence 1"
            },
            {
              "num": 5,
              "type": "TFNG",
              "text": "Personal training has grown from an elite luxury into a mainstream fitness service",
              "options": [
                "TRUE",
                "FALSE",
                "NOT GIVEN"
              ],
              "answer": "TRUE",
              "explanation": "The statement directly matches the text: \"Personal training has grown from an elite luxury into a mainstream fitness service\".",
              "location": "Paragraph 1, Sentence 1"
            },
            {
              "num": 6,
              "type": "MCQ",
              "text": "According to paragraph 1, what is the main finding regarding Gym Personal Training?",
              "options": [
                "A. It has a significant negative impact on resources",
                "B. It represents a key advancement in the field",
                "C. It has been widely criticized by modern researchers",
                "D. It is no longer considered relevant"
              ],
              "answer": "B",
              "explanation": "The text confirms that this development is a major advancement: \"Personal training has grown from an elite luxury into a mainstream fitness service\".",
              "location": "Paragraph 1, Sentence 1"
            },
            {
              "num": 7,
              "type": "FILL",
              "text": "_________ training has grown from an elite luxury into a mainstream fitness service",
              "answer": "personal",
              "explanation": "The passage notes that the personal is essential in this context.",
              "location": "Paragraph 1, Sentence 1"
            },
            {
              "num": 8,
              "type": "TFNG",
              "text": "Personal training has grown from an elite luxury into a mainstream fitness service",
              "options": [
                "TRUE",
                "FALSE",
                "NOT GIVEN"
              ],
              "answer": "TRUE",
              "explanation": "The statement directly matches the text: \"Personal training has grown from an elite luxury into a mainstream fitness service\".",
              "location": "Paragraph 1, Sentence 1"
            },
            {
              "num": 9,
              "type": "MCQ",
              "text": "According to paragraph 1, what is the main finding regarding Gym Personal Training?",
              "options": [
                "A. It has a significant negative impact on resources",
                "B. It represents a key advancement in the field",
                "C. It has been widely criticized by modern researchers",
                "D. It is no longer considered relevant"
              ],
              "answer": "B",
              "explanation": "The text confirms that this development is a major advancement: \"Personal training has grown from an elite luxury into a mainstream fitness service\".",
              "location": "Paragraph 1, Sentence 1"
            },
            {
              "num": 10,
              "type": "FILL",
              "text": "_________ training has grown from an elite luxury into a mainstream fitness service",
              "answer": "personal",
              "explanation": "The passage notes that the personal is essential in this context.",
              "location": "Paragraph 1, Sentence 1"
            },
            {
              "num": 11,
              "type": "TFNG",
              "text": "Personal training has grown from an elite luxury into a mainstream fitness service",
              "options": [
                "TRUE",
                "FALSE",
                "NOT GIVEN"
              ],
              "answer": "TRUE",
              "explanation": "The statement directly matches the text: \"Personal training has grown from an elite luxury into a mainstream fitness service\".",
              "location": "Paragraph 1, Sentence 1"
            },
            {
              "num": 12,
              "type": "MCQ",
              "text": "According to paragraph 1, what is the main finding regarding Gym Personal Training?",
              "options": [
                "A. It has a significant negative impact on resources",
                "B. It represents a key advancement in the field",
                "C. It has been widely criticized by modern researchers",
                "D. It is no longer considered relevant"
              ],
              "answer": "B",
              "explanation": "The text confirms that this development is a major advancement: \"Personal training has grown from an elite luxury into a mainstream fitness service\".",
              "location": "Paragraph 1, Sentence 1"
            },
            {
              "num": 13,
              "type": "FILL",
              "text": "_________ training has grown from an elite luxury into a mainstream fitness service",
              "answer": "personal",
              "explanation": "The passage notes that the personal is essential in this context.",
              "location": "Paragraph 1, Sentence 1"
            }
          ]
        },
        {
          "title": "Passage 2: Wildlife Trust Presentation",
          "text": "<p>The Wildlife Trust manages nature reserves to protect priority species and restore habitats. Through conservation campaigns, the trust raises public awareness about declining wildlife populations, such as hedgehogs. Volunteers contribute thousands of hours to habitat restoration.</p>",
          "questions": [
            {
              "num": 14,
              "type": "TFNG",
              "text": "The Wildlife Trust manages nature reserves to protect priority species and restore habitats",
              "options": [
                "TRUE",
                "FALSE",
                "NOT GIVEN"
              ],
              "answer": "TRUE",
              "explanation": "The statement directly matches the text: \"The Wildlife Trust manages nature reserves to protect priority species and restore habitats\".",
              "location": "Paragraph 1, Sentence 1"
            },
            {
              "num": 15,
              "type": "MCQ",
              "text": "According to paragraph 1, what is the main finding regarding  Wildlife Trust?",
              "options": [
                "A. It has a significant negative impact on resources",
                "B. It represents a key advancement in the field",
                "C. It has been widely criticized by modern researchers",
                "D. It is no longer considered relevant"
              ],
              "answer": "B",
              "explanation": "The text confirms that this development is a major advancement: \"The Wildlife Trust manages nature reserves to protect priority species and restore habitats\".",
              "location": "Paragraph 1, Sentence 1"
            },
            {
              "num": 16,
              "type": "FILL",
              "text": "The _________ Trust manages nature reserves to protect priority species and restore habitats",
              "answer": "wildlife",
              "explanation": "The passage notes that the wildlife is essential in this context.",
              "location": "Paragraph 1, Sentence 1"
            },
            {
              "num": 17,
              "type": "TFNG",
              "text": "The Wildlife Trust manages nature reserves to protect priority species and restore habitats",
              "options": [
                "TRUE",
                "FALSE",
                "NOT GIVEN"
              ],
              "answer": "TRUE",
              "explanation": "The statement directly matches the text: \"The Wildlife Trust manages nature reserves to protect priority species and restore habitats\".",
              "location": "Paragraph 1, Sentence 1"
            },
            {
              "num": 18,
              "type": "MCQ",
              "text": "According to paragraph 1, what is the main finding regarding  Wildlife Trust?",
              "options": [
                "A. It has a significant negative impact on resources",
                "B. It represents a key advancement in the field",
                "C. It has been widely criticized by modern researchers",
                "D. It is no longer considered relevant"
              ],
              "answer": "B",
              "explanation": "The text confirms that this development is a major advancement: \"The Wildlife Trust manages nature reserves to protect priority species and restore habitats\".",
              "location": "Paragraph 1, Sentence 1"
            },
            {
              "num": 19,
              "type": "FILL",
              "text": "The _________ Trust manages nature reserves to protect priority species and restore habitats",
              "answer": "wildlife",
              "explanation": "The passage notes that the wildlife is essential in this context.",
              "location": "Paragraph 1, Sentence 1"
            },
            {
              "num": 20,
              "type": "TFNG",
              "text": "The Wildlife Trust manages nature reserves to protect priority species and restore habitats",
              "options": [
                "TRUE",
                "FALSE",
                "NOT GIVEN"
              ],
              "answer": "TRUE",
              "explanation": "The statement directly matches the text: \"The Wildlife Trust manages nature reserves to protect priority species and restore habitats\".",
              "location": "Paragraph 1, Sentence 1"
            },
            {
              "num": 21,
              "type": "MCQ",
              "text": "According to paragraph 1, what is the main finding regarding  Wildlife Trust?",
              "options": [
                "A. It has a significant negative impact on resources",
                "B. It represents a key advancement in the field",
                "C. It has been widely criticized by modern researchers",
                "D. It is no longer considered relevant"
              ],
              "answer": "B",
              "explanation": "The text confirms that this development is a major advancement: \"The Wildlife Trust manages nature reserves to protect priority species and restore habitats\".",
              "location": "Paragraph 1, Sentence 1"
            },
            {
              "num": 22,
              "type": "FILL",
              "text": "The _________ Trust manages nature reserves to protect priority species and restore habitats",
              "answer": "wildlife",
              "explanation": "The passage notes that the wildlife is essential in this context.",
              "location": "Paragraph 1, Sentence 1"
            },
            {
              "num": 23,
              "type": "TFNG",
              "text": "The Wildlife Trust manages nature reserves to protect priority species and restore habitats",
              "options": [
                "TRUE",
                "FALSE",
                "NOT GIVEN"
              ],
              "answer": "TRUE",
              "explanation": "The statement directly matches the text: \"The Wildlife Trust manages nature reserves to protect priority species and restore habitats\".",
              "location": "Paragraph 1, Sentence 1"
            },
            {
              "num": 24,
              "type": "MCQ",
              "text": "According to paragraph 1, what is the main finding regarding  Wildlife Trust?",
              "options": [
                "A. It has a significant negative impact on resources",
                "B. It represents a key advancement in the field",
                "C. It has been widely criticized by modern researchers",
                "D. It is no longer considered relevant"
              ],
              "answer": "B",
              "explanation": "The text confirms that this development is a major advancement: \"The Wildlife Trust manages nature reserves to protect priority species and restore habitats\".",
              "location": "Paragraph 1, Sentence 1"
            },
            {
              "num": 25,
              "type": "FILL",
              "text": "The _________ Trust manages nature reserves to protect priority species and restore habitats",
              "answer": "wildlife",
              "explanation": "The passage notes that the wildlife is essential in this context.",
              "location": "Paragraph 1, Sentence 1"
            },
            {
              "num": 26,
              "type": "TFNG",
              "text": "The Wildlife Trust manages nature reserves to protect priority species and restore habitats",
              "options": [
                "TRUE",
                "FALSE",
                "NOT GIVEN"
              ],
              "answer": "TRUE",
              "explanation": "The statement directly matches the text: \"The Wildlife Trust manages nature reserves to protect priority species and restore habitats\".",
              "location": "Paragraph 1, Sentence 1"
            }
          ]
        },
        {
          "title": "Passage 3: Neuroscience of Decision-Making",
          "text": "<p>The prefrontal cortex is the brain region most associated with rational decision-making and cognitive control. However, neuroscience shows that emotional signals processed by the amygdala are also critical for guiding effective choices, challenging the view that logic alone drives decision-making.</p>",
          "questions": [
            {
              "num": 27,
              "type": "MCQ",
              "text": "According to paragraph 1, what is the main finding regarding  Neuroscience of Decisions?",
              "options": [
                "A. It has a significant negative impact on resources",
                "B. It represents a key advancement in the field",
                "C. It has been widely criticized by modern researchers",
                "D. It is no longer considered relevant"
              ],
              "answer": "B",
              "explanation": "The text confirms that this development is a major advancement: \"The prefrontal cortex is the brain region most associated with rational decision-making and cognitive control\".",
              "location": "Paragraph 1, Sentence 1"
            },
            {
              "num": 28,
              "type": "FILL",
              "text": "The _________ cortex is the brain region most associated with rational decision-making and cognitive control",
              "answer": "prefrontal",
              "explanation": "The passage notes that the prefrontal is essential in this context.",
              "location": "Paragraph 1, Sentence 1"
            },
            {
              "num": 29,
              "type": "TFNG",
              "text": "The prefrontal cortex is the brain region most associated with rational decision-making and cognitive control",
              "options": [
                "TRUE",
                "FALSE",
                "NOT GIVEN"
              ],
              "answer": "TRUE",
              "explanation": "The statement directly matches the text: \"The prefrontal cortex is the brain region most associated with rational decision-making and cognitive control\".",
              "location": "Paragraph 1, Sentence 1"
            },
            {
              "num": 30,
              "type": "MCQ",
              "text": "According to paragraph 1, what is the main finding regarding  Neuroscience of Decisions?",
              "options": [
                "A. It has a significant negative impact on resources",
                "B. It represents a key advancement in the field",
                "C. It has been widely criticized by modern researchers",
                "D. It is no longer considered relevant"
              ],
              "answer": "B",
              "explanation": "The text confirms that this development is a major advancement: \"The prefrontal cortex is the brain region most associated with rational decision-making and cognitive control\".",
              "location": "Paragraph 1, Sentence 1"
            },
            {
              "num": 31,
              "type": "FILL",
              "text": "The _________ cortex is the brain region most associated with rational decision-making and cognitive control",
              "answer": "prefrontal",
              "explanation": "The passage notes that the prefrontal is essential in this context.",
              "location": "Paragraph 1, Sentence 1"
            },
            {
              "num": 32,
              "type": "TFNG",
              "text": "The prefrontal cortex is the brain region most associated with rational decision-making and cognitive control",
              "options": [
                "TRUE",
                "FALSE",
                "NOT GIVEN"
              ],
              "answer": "TRUE",
              "explanation": "The statement directly matches the text: \"The prefrontal cortex is the brain region most associated with rational decision-making and cognitive control\".",
              "location": "Paragraph 1, Sentence 1"
            },
            {
              "num": 33,
              "type": "MCQ",
              "text": "According to paragraph 1, what is the main finding regarding  Neuroscience of Decisions?",
              "options": [
                "A. It has a significant negative impact on resources",
                "B. It represents a key advancement in the field",
                "C. It has been widely criticized by modern researchers",
                "D. It is no longer considered relevant"
              ],
              "answer": "B",
              "explanation": "The text confirms that this development is a major advancement: \"The prefrontal cortex is the brain region most associated with rational decision-making and cognitive control\".",
              "location": "Paragraph 1, Sentence 1"
            },
            {
              "num": 34,
              "type": "FILL",
              "text": "The _________ cortex is the brain region most associated with rational decision-making and cognitive control",
              "answer": "prefrontal",
              "explanation": "The passage notes that the prefrontal is essential in this context.",
              "location": "Paragraph 1, Sentence 1"
            },
            {
              "num": 35,
              "type": "TFNG",
              "text": "The prefrontal cortex is the brain region most associated with rational decision-making and cognitive control",
              "options": [
                "TRUE",
                "FALSE",
                "NOT GIVEN"
              ],
              "answer": "TRUE",
              "explanation": "The statement directly matches the text: \"The prefrontal cortex is the brain region most associated with rational decision-making and cognitive control\".",
              "location": "Paragraph 1, Sentence 1"
            },
            {
              "num": 36,
              "type": "MCQ",
              "text": "According to paragraph 1, what is the main finding regarding  Neuroscience of Decisions?",
              "options": [
                "A. It has a significant negative impact on resources",
                "B. It represents a key advancement in the field",
                "C. It has been widely criticized by modern researchers",
                "D. It is no longer considered relevant"
              ],
              "answer": "B",
              "explanation": "The text confirms that this development is a major advancement: \"The prefrontal cortex is the brain region most associated with rational decision-making and cognitive control\".",
              "location": "Paragraph 1, Sentence 1"
            },
            {
              "num": 37,
              "type": "FILL",
              "text": "The _________ cortex is the brain region most associated with rational decision-making and cognitive control",
              "answer": "prefrontal",
              "explanation": "The passage notes that the prefrontal is essential in this context.",
              "location": "Paragraph 1, Sentence 1"
            },
            {
              "num": 38,
              "type": "TFNG",
              "text": "The prefrontal cortex is the brain region most associated with rational decision-making and cognitive control",
              "options": [
                "TRUE",
                "FALSE",
                "NOT GIVEN"
              ],
              "answer": "TRUE",
              "explanation": "The statement directly matches the text: \"The prefrontal cortex is the brain region most associated with rational decision-making and cognitive control\".",
              "location": "Paragraph 1, Sentence 1"
            },
            {
              "num": 39,
              "type": "MCQ",
              "text": "According to paragraph 1, what is the main finding regarding  Neuroscience of Decisions?",
              "options": [
                "A. It has a significant negative impact on resources",
                "B. It represents a key advancement in the field",
                "C. It has been widely criticized by modern researchers",
                "D. It is no longer considered relevant"
              ],
              "answer": "B",
              "explanation": "The text confirms that this development is a major advancement: \"The prefrontal cortex is the brain region most associated with rational decision-making and cognitive control\".",
              "location": "Paragraph 1, Sentence 1"
            },
            {
              "num": 40,
              "type": "FILL",
              "text": "The _________ cortex is the brain region most associated with rational decision-making and cognitive control",
              "answer": "prefrontal",
              "explanation": "The passage notes that the prefrontal is essential in this context.",
              "location": "Paragraph 1, Sentence 1"
            }
          ]
        }
      ]
    },
    "writing": {
      "tasks": []
    }
  }
};
