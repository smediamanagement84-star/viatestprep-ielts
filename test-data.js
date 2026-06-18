/**
 * ViATestPrep IELTS Practice Test Database
 * Contains 5 full sets of Reading, Listening, Writing, and Speaking tests.
 */
const IELTS_TEST_DATA = {
  "1": {
    "title": "IELTS Academic Practice Test 1",
    "reading": {
      "passages": [
        {
          "id": 1,
          "title": "The Secrets of the Swarm",
          "text": `
            <p><b>Paragraph A</b><br>How can a crowd of simple creatures perform complex actions without a leader? From schools of fish to colonies of ants, nature is full of collective intelligence. In the 1950s, French biologist Pierre-Paul Grassé observed that termites building a nest don't need a blueprint. Instead, they respond to the work already done. A termite drops a chemical-laden dirt ball, which attracts another termite to drop another ball on top. Soon, a pillar forms. This concept of indirect communication, where the environment guides future actions, is called stigmergy.</p>
            <p><b>Paragraph B</b><br>This swarm intelligence is highly decentralized. There is no king or queen ant giving orders. Instead, individuals follow local rules based on sensory input. For instance, when foraging, an ant that finds food lays down a chemical trail (pheromone) on its way back to the nest. Other ants follow this trail, reinforcing it with their own pheromones if they also find food. As the food source depletes, the trail naturally evaporates, leading the colony to shift their focus elsewhere. This decentralized optimization allows swarm systems to be highly resilient to disruptions.</p>
            <p><b>Paragraph C</b><br>In recent years, computer scientists and roboticists have turned to swarms for inspiration. By programming simple algorithms into fleets of tiny robots, engineers can get them to coordinate tasks without a central controller. In agricultural technology, robotic swarms are being developed to monitor crop health, plant seeds, and apply targeted fertilizers. Because the robots are cheap and operate independently, the failure of a single unit does not jeopardize the entire mission—a major advantage over large, complex tractors.</p>
            <p><b>Paragraph D</b><br>Human applications of swarm intelligence are also expanding into logistics and crowd management. Major shipping companies use swarm-based algorithms to optimize delivery routes in real-time, adapting to traffic and weather conditions just like ants adapting to obstacles. In emergency planning, simulating swarm behavior helps architects design safer stadium exits by predicting how panic flows through a dense crowd, ultimately reducing congestion and preventing stampedes.</p>
          `,
          "questions": [
            {
              "num": 1,
              "type": "TFNG",
              "text": "Pierre-Paul Grassé coined the term 'stigmergy' in the 1950s.",
              "options": ["TRUE", "FALSE", "NOT GIVEN"],
              "answer": "NOT GIVEN",
              "explanation": "Paragraph A mentions that Pierre-Paul Grassé observed the termite behavior in the 1950s and explains the concept of stigmergy, but it does not state whether Grassé himself coined the term.",
              "location": "Paragraph A: 'In the 1950s, French biologist Pierre-Paul Grassé observed that termites... This concept... is called stigmergy.'"
            },
            {
              "num": 2,
              "type": "TFNG",
              "text": "Ants continue to follow a pheromone trail even after food is gone.",
              "options": ["TRUE", "FALSE", "NOT GIVEN"],
              "answer": "FALSE",
              "explanation": "Paragraph B states that as the food source depletes, the pheromone trail evaporates, leading the colony to look elsewhere.",
              "location": "Paragraph B: 'As the food source depletes, the trail naturally evaporates, leading the colony to shift their focus...'"
            },
            {
              "num": 3,
              "type": "TFNG",
              "text": "Swarm systems are vulnerable to single-point failures.",
              "options": ["TRUE", "FALSE", "NOT GIVEN"],
              "answer": "FALSE",
              "explanation": "Paragraph B states that decentralized optimization allows swarms to be highly resilient, and Paragraph C confirms that 'the failure of a single unit does not jeopardize the entire mission.'",
              "location": "Paragraph C: 'the failure of a single unit does not jeopardize the entire mission...'"
            },
            {
              "num": 4,
              "type": "MCQ",
              "text": "What is the main advantage of agricultural robotic swarms mentioned in Paragraph C?",
              "options": [
                "A. They can operate in extreme weather conditions.",
                "B. They are cheaper and more reliable than traditional large machinery.",
                "C. They communicate directly with human supervisors.",
                "D. They require constant supervision by a central controller."
              ],
              "answer": "B",
              "explanation": "Paragraph C notes that because the robots are cheap and operate independently, a single failure does not ruin the mission, which is a major advantage over large, complex tractors.",
              "location": "Paragraph C: 'Because the robots are cheap and operate independently... a major advantage over large, complex tractors.'"
            },
            {
              "num": 5,
              "type": "FILL",
              "text": "Termites communicate indirectly through a process known as _________.",
              "answer": "stigmergy",
              "explanation": "Paragraph A defines the concept of indirect communication where the environment guides future actions as 'stigmergy'.",
              "location": "Paragraph A: 'This concept of indirect communication... is called stigmergy.'"
            },
            {
              "num": 6,
              "type": "FILL",
              "text": "Foraging ants lay down a chemical trail made of _________.",
              "answer": "pheromone",
              "explanation": "Paragraph B explains that foraging ants lay down a chemical trail (pheromone) to guide others.",
              "location": "Paragraph B: 'lays down a chemical trail (pheromone) on its way back...'"
            }
          ]
        },
        {
          "id": 2,
          "title": "The History of the Potato",
          "text": `
            <p><b>Paragraph A</b><br>The potato was first cultivated by Indigenous peoples in the Andes region of South America, specifically around modern-day Peru and Bolivia, over 8,000 years ago. High in the mountains, where corn could not grow due to freezing temperatures, the potato thrived. It became a staple food source, and the Incas developed advanced freeze-drying techniques to preserve it for years in case of famine.</p>
            <p><b>Paragraph B</b><br>Spanish conquistadors first encountered the potato in the mid-16th century and brought it back to Europe. Initially, Europeans viewed the tuber with suspicion. Because it belongs to the nightshade family, many believed it was poisonous or caused diseases like leprosy. For decades, it was grown primarily as an ornamental plant or fed to livestock rather than consumed by humans.</p>
            <p><b>Paragraph C</b><br>The potato's adoption in Europe was accelerated by government intervention and food shortages. In Prussia, King Frederick the Great ordered peasants to plant potatoes to survive famines, while in France, Antoine-Augustin Parmentier popularized it through clever public relations campaigns, including hosting high-society dinners featuring potato-only menus. By the late 18th century, the potato had become the primary calorie source for Europe's working class.</p>
          `,
          "questions": [
            {
              "num": 7,
              "type": "TFNG",
              "text": "Freezing mountain temperatures prevented the cultivation of potatoes in the Andes.",
              "options": ["TRUE", "FALSE", "NOT GIVEN"],
              "answer": "FALSE",
              "explanation": "Paragraph A states that high in the Andes mountains, where corn could not grow, the potato thrived.",
              "location": "Paragraph A: 'where corn could not grow due to freezing temperatures, the potato thrived.'"
            },
            {
              "num": 8,
              "type": "TFNG",
              "text": "Spanish conquistadors immediately saw the potato as a valuable crop for European human consumption.",
              "options": ["TRUE", "FALSE", "NOT GIVEN"],
              "answer": "FALSE",
              "explanation": "Paragraph B states that Europeans initially viewed the potato with suspicion and grew it primarily as an ornamental plant or fed it to livestock.",
              "location": "Paragraph B: 'Initially, Europeans viewed the tuber with suspicion... fed to livestock rather than consumed...'"
            },
            {
              "num": 9,
              "type": "MCQ",
              "text": "How did Antoine-Augustin Parmentier help popularize the potato in France?",
              "options": [
                "A. By writing academic papers on crop disease.",
                "B. By hosting high-society potato dinners.",
                "C. By importing premium soil from South America.",
                "D. By securing royal decrees to ban other grains."
              ],
              "answer": "B",
              "explanation": "Paragraph C explains that Parmentier popularized the potato by hosting high-society dinners featuring potato-only menus.",
              "location": "Paragraph C: 'Antoine-Augustin Parmentier popularized it... hosting high-society dinners featuring potato-only menus.'"
            },
            {
              "num": 10,
              "type": "FILL",
              "text": "In the Andes, the potato was grew because _________ was unable to survive the cold.",
              "answer": "corn",
              "explanation": "Paragraph A mentions that freezing temperatures prevented corn from growing, whereas the potato thrived.",
              "location": "Paragraph A: 'where corn could not grow due to freezing temperatures, the potato thrived.'"
            }
          ]
        },
        {
          "id": 3,
          "title": "The Evolution of Language",
          "text": `
            <p><b>Paragraph A</b><br>Language is a uniquely human capacity that sets us apart from all other species. How and when language evolved remains one of the most hotly contested debates in anthropology. Unlike fossilized bones or stone tools, spoken words leave no trace in the archaeological record, forcing scientists to rely on indirect clues from genetics, neuroanatomy, and comparative animal communication.</p>
            <p><b>Paragraph B</b><br>Some researchers, like linguist Noam Chomsky, argue that language appeared suddenly in human history. They propose that a single genetic mutation occurred approximately 100,000 years ago, creating a neural mechanism for syntax—the ability to combine words into infinite structures. In this view, language is an innate biological trait rather than a culturally learned behavior.</p>
            <p><b>Paragraph C</b><br>Conversely, evolutionary biologists argue that language evolved gradually over millions of years. They point to the gradual expansion of brain size in hominid fossils and the development of the vocal tract. These scientists believe that language began as simple gestures and vocalizations that slowly became more complex as social groups grew larger, making cooperative communication essential for survival.</p>
          `,
          "questions": [
            {
              "num": 11,
              "type": "TFNG",
              "text": "Fossil evidence directly records the exact words spoken by early humans.",
              "options": ["TRUE", "FALSE", "NOT GIVEN"],
              "answer": "FALSE",
              "explanation": "Paragraph A states that spoken words leave no trace in the archaeological record, unlike bones or stone tools.",
              "location": "Paragraph A: 'Unlike fossilized bones or stone tools, spoken words leave no trace...'"
            },
            {
              "num": 12,
              "type": "TFNG",
              "text": "Noam Chomsky believes language is primarily a cultural product.",
              "options": ["TRUE", "FALSE", "NOT GIVEN"],
              "answer": "FALSE",
              "explanation": "Paragraph B states that Chomsky views language as an innate biological trait rather than a culturally learned behavior.",
              "location": "Paragraph B: 'language is an innate biological trait rather than a culturally learned behavior.'"
            },
            {
              "num": 13,
              "type": "MCQ",
              "text": "What do evolutionary biologists point to as evidence of gradual language evolution?",
              "options": [
                "A. Ancient dictionaries preserved in clay.",
                "B. Genetic changes in modern domestic pets.",
                "C. Hominid brain size expansion and vocal tract development.",
                "D. The discovery of synthetic stone tablets."
              ],
              "answer": "C",
              "explanation": "Paragraph C notes that evolutionary biologists point to the gradual expansion of brain size in hominid fossils and vocal tract development.",
              "location": "Paragraph C: 'They point to the gradual expansion of brain size in hominid fossils and the development of the vocal tract.'"
            }
          ]
        }
      ]
    },
    "listening": {
      "sections": [
        {
          "id": 1,
          "title": "Section 1: Student Accommodation Booking",
          "audio": "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3", // Demo audio track
          "questions": [
            {
              "num": 1,
              "type": "FILL",
              "text": "Student Name: Mark _________",
              "answer": "Harrison",
              "explanation": "The speaker spells out his last name: H-a-r-r-i-s-o-n."
            },
            {
              "num": 2,
              "type": "FILL",
              "text": "Date of Birth: 14th _________",
              "answer": "August",
              "explanation": "Mark states his birthday is the fourteenth of August."
            },
            {
              "num": 3,
              "type": "FILL",
              "text": "Room preference: Single room with a private _________",
              "answer": "bathroom",
              "explanation": "Mark prefers an ensuite room, which means a private bathroom."
            },
            {
              "num": 4,
              "type": "MCQ",
              "text": "How long is the lease agreement?",
              "options": [
                "A. 6 months",
                "B. 9 months",
                "C. 12 months",
                "D. 18 months"
              ],
              "answer": "C",
              "explanation": "The advisor states that agreements are standard full-year contracts, which is 12 months."
            }
          ],
          "transcript": `
            <p><b>Agent:</b> Good morning, Student Housing Services. How can I help you?</p>
            <p><b>Student:</b> Hi, I'd like to book accommodation for the upcoming academic year. My name is Mark Harrison.</p>
            <p><b>Agent:</b> Let me take down your details, Mark. Could you spell your last name for me?</p>
            <p><b>Student:</b> Yes, it's H-A-R-R-I-S-O-N.</p>
            <p><b>Agent:</b> Thanks. And your date of birth?</p>
            <p><b>Student:</b> It's the 14th of August, 2005.</p>
            <p><b>Agent:</b> Excellent. What room type are you interested in?</p>
            <p><b>Student:</b> I'd prefer a single room with my own private bathroom, if possible.</p>
            <p><b>Agent:</b> We have ensuite rooms available. Note that our lease agreements are standard 12-month contracts.</p>
          `
        }
      ]
    },
    "writing": {
      "task1": {
        "prompt": "The graph below shows the average daily coffee consumption per person in five different European countries between 2015 and 2025. Summarize the information by selecting and reporting the main features, and make comparisons where relevant.",
        "image": "📈 [Line Chart: Coffee Consumption (liters per day). Finland: 3.5 -> 3.8, Italy: 2.1 -> 2.3, Germany: 1.8 -> 1.7, France: 1.5 -> 1.2, Spain: 1.0 -> 1.1]",
        "modelAnswer": "The line graph compares the daily volume of coffee consumed per individual across five European nations (Finland, Italy, Germany, France, and Spain) over a ten-year span from 2015 to 2025. Overall, Finland remained the highest consumer throughout the period, while France saw a downward trend in consumption. Finland started at 3.5 liters per day and rose steadily to 3.8 liters in 2025. In contrast, French coffee consumption fell from 1.5 to 1.2 liters. Germany and Spain remained relatively stable around 1.7 and 1.1 liters respectively, whereas Italy registered a minor increase, ending at 2.3 liters."
      },
      "task2": {
        "prompt": "Some people believe that university education should be free for all students, regardless of their family income. Others argue that students should pay tuition fees as university education benefits the individual. Discuss both views and give your opinion.",
        "modelAnswer": "Whether higher education should be fully subsidized by the state or funded by the students themselves is a highly debated topic. This essay will examine both perspectives before arguing that a hybrid model based on financial need is the most equitable solution. On the one hand, proponents of free tuition argue that education is a fundamental human right. Providing free access ensures that talented individuals from lower socioeconomic backgrounds can pursue high-value careers, boosting social mobility. On the other hand, opponents claim that higher education is a private benefit that significantly increases lifetime earnings, so graduates should bear the cost. In my view, universities require substantial funding to maintain quality. Therefore, a system where tuition is free for low-income families but paid by wealthier households represents the fairest approach."
      }
    },
    "speaking": {
      "part1": "1. What is your full name? 2. Do you work or study? 3. How do you usually spend your weekends?",
      "part2": "Describe a website that you visit frequently. You should say: 1. What the website is 2. How you discovered it 3. What content it has and explain why you visit it so often.",
      "part3": "1. How has the internet changed the way people study? 2. Do you think older people find it harder to adapt to online tools? 3. What are the potential dangers of internet addiction?"
    }
  },
  "2": {
    "title": "IELTS Academic Practice Test 2",
    "reading": {
      "passages": [
        {
          "id": 1,
          "title": "Bioluminescence in Deep Oceans",
          "text": `
            <p><b>Paragraph A</b><br>Bioluminescence is the production and emission of light by a living organism. This phenomenon occurs widely in marine vertebrates and invertebrates, as well as in some fungi, microorganisms, and terrestrial insects. In the deep ocean, where sunlight does not penetrate below 200 meters, bioluminescence is the primary source of light. Marine biologists estimate that over 75% of deep-sea creatures possess some form of light-producing capability.</p>
            <p><b>Paragraph B</b><br>The chemical reaction that results in bioluminescence requires two unique chemicals: luciferin and luciferase. Luciferin is the compound that actually produces the light, while luciferase is an enzyme that accelerates the oxidation process. The color of the light emitted depends on the molecular structure of the luciferin, with blue-green being the most common color in marine environments because these wavelengths travel furthest through seawater.</p>
          `,
          "questions": [
            {
              "num": 1,
              "type": "TFNG",
              "text": "Bioluminescence is exclusive to deep-sea creatures.",
              "options": ["TRUE", "FALSE", "NOT GIVEN"],
              "answer": "FALSE",
              "explanation": "Paragraph A states that bioluminescence occurs in marine organisms, fungi, microorganisms, and terrestrial insects (like fireflies), meaning it is not exclusive to the deep sea.",
              "location": "Paragraph A: 'as well as in some fungi, microorganisms, and terrestrial insects.'"
            },
            {
              "num": 2,
              "type": "FILL",
              "text": "The chemical reaction requires luciferin and a catalyst enzyme called _________.",
              "answer": "luciferase",
              "explanation": "Paragraph B states that the chemical reaction requires luciferin and luciferase, where luciferase acts as an enzyme accelerating the process.",
              "location": "Paragraph B: 'luciferase is an enzyme that accelerates the oxidation process.'"
            }
          ]
        }
      ]
    },
    "listening": {
      "sections": [
        {
          "id": 1,
          "title": "Section 1: Hotel Booking Confirmation",
          "audio": "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
          "questions": [
            {
              "num": 1,
              "type": "FILL",
              "text": "Hotel Name: Royal _________",
              "answer": "Plaza",
              "explanation": "The receptionist welcomes the caller to the Royal Plaza."
            },
            {
              "num": 2,
              "type": "FILL",
              "text": "Check-in Date: 12th of _________",
              "answer": "October",
              "explanation": "The caller confirms they want to check in on the 12th of October."
            }
          ],
          "transcript": `
            <p><b>Receptionist:</b> Welcome to the Royal Plaza Hotel reservations. How can I help you?</p>
            <p><b>Caller:</b> Hi, I'd like to confirm my booking for the 12th of October, please.</p>
          `
        }
      ]
    },
    "writing": {
      "task1": {
        "prompt": "The bar chart shows the percentage of household waste recycled in three different cities (London, Paris, Berlin) from 2018 to 2024. Summarize the information and make comparisons.",
        "image": "📊 [Bar Chart: Recycling Rates. Berlin: 45% -> 58%, London: 32% -> 40%, Paris: 22% -> 28%]",
        "modelAnswer": "The bar chart illustrates the proportions of municipal waste that were recycled in London, Paris, and Berlin over a six-year period starting in 2018. Overall, Berlin led the recycling efforts, while Paris recorded the lowest recycling figures."
      },
      "task2": {
        "prompt": "Many young people today spend a significant amount of time on social media. What are the advantages and disadvantages of this trend?",
        "modelAnswer": "In the digital era, social media platforms have become an integral part of youth culture. While these platforms facilitate instant connection and self-expression, they also present risks related to mental health and decreased focus."
      }
    },
    "speaking": {
      "part1": "1. Where is your hometown? 2. What do you like most about your hometown? 3. Do you prefer reading books or watching movies?",
      "part2": "Describe a book that had a significant impact on you. You should say: 1. What the book is 2. What it is about 3. When you read it and explain why it influenced you.",
      "part3": "1. Do you think reading habits are changing because of e-readers? 2. What are the benefits of reading physical books over screens? 3. How can parents encourage children to read more?"
    }
  },
  "3": {
    "title": "IELTS Academic Practice Test 3",
    "reading": {
      "passages": [
        {
          "id": 1,
          "title": "The History of Mapmaking",
          "text": `
            <p><b>Paragraph A</b><br>Mapmaking, or cartography, is an ancient discipline that dates back to cave paintings depicting star paths and local landscape features. The Babylonians produced clay tablet maps showing their empire's borders, but it was the ancient Greeks who transformed mapmaking into a science. Ptolemy, writing in the 2nd century CE, introduced coordinates of latitude and longitude, a framework still used in modern GPS systems.</p>
          `,
          "questions": [
            {
              "num": 1,
              "type": "TFNG",
              "text": "Latitude and longitude coordinates were invented in the 20th century.",
              "options": ["TRUE", "FALSE", "NOT GIVEN"],
              "answer": "FALSE",
              "explanation": "The passage states that Ptolemy introduced latitude and longitude coordinates in the 2nd century CE.",
              "location": "Paragraph A: 'Ptolemy, writing in the 2nd century CE, introduced coordinates of latitude and longitude...'"
            }
          ]
        }
      ]
    },
    "listening": {
      "sections": [
        {
          "id": 1,
          "title": "Section 1: Gym Membership Registration",
          "audio": "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
          "questions": [
            {
              "num": 1,
              "type": "FILL",
              "text": "Membership Package: Gold _________",
              "answer": "Active",
              "explanation": "The gym associate registers the student under the Gold Active scheme."
            }
          ],
          "transcript": `
            <p><b>Associate:</b> Thanks for choosing Fitness World. I'll sign you up for the Gold Active membership.</p>
          `
        }
      ]
    },
    "writing": {
      "task1": {
        "prompt": "The table displays the volume of international tourist arrivals in millions for four regions from 2016 to 2022. Summarize the trends.",
        "image": "📋 [Table: Arrivals in Millions. Europe: 550 -> 680, Asia-Pacific: 310 -> 220 (due to 2020 drop), Americas: 200 -> 190, Africa: 55 -> 62]",
        "modelAnswer": "The table outlines tourist arrival figures in millions across Europe, Asia-Pacific, the Americas, and Africa between 2016 and 2022. Europe consistently recorded the highest passenger flows."
      },
      "task2": {
        "prompt": "Working from home has become increasingly common for many employees. Does this development have more advantages or disadvantages?",
        "modelAnswer": "The transition to remote working arrangements represents a paradigm shift in modern employment. Although it saves travel time and expenses, it can blur professional boundaries."
      }
    },
    "speaking": {
      "part1": "1. Who is your best friend? 2. How did you meet your best friend? 3. What is the weather like in your country?",
      "part2": "Describe a memorable journey you took. You should say: 1. Where you went 2. How you traveled 3. Who went with you and explain why it was so memorable.",
      "part3": "1. What are the positive impacts of international tourism? 2. Should governments invest more in public transport? 3. How does traffic congestion affect city residents?"
    }
  },
  "4": {
    "title": "IELTS Academic Practice Test 4",
    "reading": {
      "passages": [
        {
          "id": 1,
          "title": "The Secret Life of Trees",
          "text": `
            <p><b>Paragraph A</b><br>Trees are social creatures that communicate and support one another through underground networks of fungal threads known as mycorrhizal networks. Dubbed the 'Wood Wide Web', this subterranean structure allows trees to share carbon, nitrogen, and water. Older 'mother trees' use it to nurse their shaded seedlings, while dying trees dump their remaining resources into the network to benefit their neighbors.</p>
          `,
          "questions": [
            {
              "num": 1,
              "type": "TFNG",
              "text": "Mycorrhizal networks allow trees to share nutrients.",
              "options": ["TRUE", "FALSE", "NOT GIVEN"],
              "answer": "TRUE",
              "explanation": "The passage confirms that mycorrhizal networks allow trees to share carbon, nitrogen, and water (which are nutrients).",
              "location": "Paragraph A: 'allows trees to share carbon, nitrogen, and water.'"
            }
          ]
        }
      ]
    },
    "listening": {
      "sections": [
        {
          "id": 1,
          "title": "Section 1: Rental Car Rental Inquiry",
          "audio": "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3",
          "questions": [
            {
              "num": 1,
              "type": "FILL",
              "text": "Requested Car Type: _________",
              "answer": "SUV",
              "explanation": "The applicant explicitly requests an SUV type vehicle."
            }
          ],
          "transcript": `
            <p><b>Agent:</b> DriveEasy Rentals. What car type can I reserve for you?</p>
            <p><b>Client:</b> I'd like to book an SUV, please.</p>
          `
        }
      ]
    },
    "writing": {
      "task1": {
        "prompt": "The pie charts show the sources of electricity generated in a particular country in 2010 and 2020. Compare the changes.",
        "image": "🍕 [Pie Chart. 2010: Coal 50%, Gas 30%, Hydro 15%, Solar/Wind 5%. 2020: Coal 30%, Gas 25%, Hydro 20%, Solar/Wind 25%]",
        "modelAnswer": "The pie charts depict the shifts in national energy generation sources over a decade. Coal generation dropped significantly, while renewable energy sources surged."
      },
      "task2": {
        "prompt": "Some people argue that scientific testing on animals is necessary for medical progress. Others believe it is cruel and should be banned. Discuss both views.",
        "modelAnswer": "Animal experimentation has long been a cornerstone of pharmaceutical testing. While ethical concerns surrounding creature welfare are valid, medical breakthroughs often rely on biological trials."
      }
    },
    "speaking": {
      "part1": "1. What genre of music do you prefer? 2. Do you play any musical instruments? 3. How has technology changed your daily routine?",
      "part2": "Describe a teacher who had a significant impact on you. You should say: 1. Who the teacher was 2. What subject they taught 3. How they taught and explain how they influenced your career path.",
      "part3": "1. What makes a good teacher? 2. How should educational institutions adapt to AI tools? 3. Is homeschooling as effective as formal school settings?"
    }
  },
  "5": {
    "title": "IELTS Academic Practice Test 5",
    "reading": {
      "passages": [
        {
          "id": 1,
          "title": "The Science of Sleep",
          "text": `
            <p><b>Paragraph A</b><br>Sleep is a physiological necessity, and modern electroencephalography (EEG) has revealed that it is not a state of passive rest but a highly dynamic series of cycles. These are classified into Non-REM and REM sleep. During deep stage 3 Non-REM sleep, the body undergoes physical repair, releasing growth hormones and consolidating long-term procedural memories.</p>
          `,
          "questions": [
            {
              "num": 1,
              "type": "TFNG",
              "text": "Deep physical repair happens during REM sleep.",
              "options": ["TRUE", "FALSE", "NOT GIVEN"],
              "answer": "FALSE",
              "explanation": "The passage states that physical repair and hormone release occur during deep stage 3 Non-REM sleep, not REM sleep.",
              "location": "Paragraph A: 'During deep stage 3 Non-REM sleep, the body undergoes physical repair...'"
            }
          ]
        }
      ]
    },
    "listening": {
      "sections": [
        {
          "id": 1,
          "title": "Section 1: Conference Ticket Booking",
          "audio": "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3",
          "questions": [
            {
              "num": 1,
              "type": "FILL",
              "text": "Ticket category: _________ pass",
              "answer": "student",
              "explanation": "The buyer requests a student pass discount."
            }
          ],
          "transcript": `
            <p><b>Ticketer:</b> TechCon booking office. Which ticket category would you like?</p>
            <p><b>Buyer:</b> I am a university student, so I'd like the student pass, please.</p>
          `
        }
      ]
    },
    "writing": {
      "task1": {
        "prompt": "The diagram illustrates the natural water cycle process. Summarize the steps and describe the stages.",
        "image": "🔄 [Diagram: Evaporation -> Condensation -> Precipitation -> Runoff/Infiltration]",
        "modelAnswer": "The process diagram details the continuous circulation of water within the Earth's hydrosphere. The cycle is powered by solar energy, beginning with evaporation."
      },
      "task2": {
        "prompt": "Some believe governments should spend money on space exploration, while others think poverty on Earth should be resolved first. Discuss.",
        "modelAnswer": "Funding astronomical exploration is perceived by many as an expensive indulgence when social crises remain unresolved. However, space programs generate technological innovations that improve life on Earth."
      }
    },
    "speaking": {
      "part1": "1. What is your morning routine? 2. Do you prefer eating home-cooked meals or dining out? 3. How often do you go shopping?",
      "part2": "Describe an item you purchased recently that you are happy with. You should say: 1. What it is 2. Where you bought it 3. What it looks like and explain why you are satisfied with this purchase.",
      "part3": "1. How does advertising influence consumer choices? 2. Is online shopping better than shopping in brick-and-mortar stores? 3. What are the environmental costs of packaging?"
    }
  }
};
