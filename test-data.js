const IELTS_TEST_DATA = {
  "1": {
    "title": "Cambridge IELTS 18 — Test 1",
    "book": "IELTS 18",
    "listening": {
      "sections": [
        {
          "id": 1,
          "title": "Part 1: Real Practice",
          "description": "Official IELTS 18 Test 1 Listening Part 1.",
          "audio": "audio/IELTS_18_Test_1_Part1.m4a",
          "transcript": "<p><b>MAN:</b> Excuse me. Would you mind if | asked you some questions? We're doing a</p><p>survey on transport.</p><p><b>SADIE:</b> Yes, that's OK.</p><p><b>MAN:</b> First of all, can | take your name?</p><p><b>SADIE:</b> Yes. It's Sadie Jones.</p><p><b>MAN:</b> Thanks very much. And could | have your date of birth — just the year will do,</p><p>actually. Is that all right?</p><p><b>SADIE:</b> Yes, that's fine. It's 1991.</p><p><b>MAN:</b> So next your postcode, please.</p><p><b>SADIE:</b> It's DW30 7YZ.</p><p><b>MAN:</b> Great. Thanks. Is that in Wells?</p><p><b>SADIE:</b> No it's actually in Harborne — Wells isn't far from there, though.</p><p><b>MAN:</b> | really like that area. My grandmother lived there when | was a kid.</p><p><b>SADIE:</b> Yes, it is nice.</p><p><b>MAN:</b> Right, so now | want to ask you some questions about how you travelled here</p><p>today. Did you use public transport?</p><p>SADIE! Yes. | came by bus.</p><p><b>MAN:</b> OK. And that was today. It's the 24th of April, isn't it?</p><p><b>SADIE:</b> Isn't it the 25th? No, actually, you're right.</p><p><b>MAN:</b> Ha ha. And what was the reason for your trip today? | can see you've got some</p><p>shopping with you.</p><p><b>SADIE:</b> Yes. | did some shopping but the main reason | came here was to go to the</p><p>dentist.</p><p><b>MAN:</b> That's not much fun. Hope it was nothing serious.</p><p>SADIE! No, it was just a check-up. It's fine.</p><p><b>MAN:</b> Good. Do you normally travel by bus into the city centre?</p><p><b>SADIE:</b> Yes. | stopped driving in ages ago because parking was so difficult to find and it</p><p>costs so much.</p><p><b>MAN:</b> I see.</p><p>SADIE The bus is much more convenient too. It only takes about 30 minutes.</p><p><b>MAN:</b> That's good. So where did you start your journey?</p><p>SADIE At the bus stop on Claxby Street.</p><p><b>MAN:</b> Is that C-L-A-X-B-Y?</p><p>SADIE That's right.</p><p><b>MAN:</b> And how satisfied with the service are you? Do you have any complaints?</p><p>SADIE Well, as | said, it's very convenient and quick when it's on time, but this morning it</p><p>was late. Only about 10 minutes, but still.</p><p><b>MAN:</b> Yes, | understand that's annoying. And what about the timetable? Do you have</p><p>any comments about that?</p><p>SADIE Mmm. | suppose | mainly use the bus during the day, but any time I've been in</p><p>town in the evening — for dinner or at the cinema — I've noticed you have to wait a</p><p>long time for a bus — there aren't that many.</p><p>Q1</p><p>Q2</p><p>Q3</p><p>Q4</p><p>Q5</p><p>Q6</p><p>Q7</p><p>99</p><p><b>MAN:</b> OK, thanks. So now I'd like to ask you about your car use.</p><p><b>SADIE:</b> Well, | have got a car but | don't use it that often. Mainly just to go to the</p><p>supermarket. But that's about it really. My husband uses it at the weekends to go</p><p>to the golf club.</p><p><b>MAN:</b> And what about a bicycle?</p><p>SADIE! | don't actually have one at the moment.</p><p><b>MAN:</b> What about the city bikes you can rent? Do you ever use those?</p><p>SADIE! No —|'m not keen on cycling there because of all the pollution. But | would like to</p><p>get a bike — it would be good to use it to get to work.</p><p><b>MAN:</b> So why haven't you got one now?</p><p><b>SADIE:</b> Well, | live in a flat — on the second floor and it doesn't have any storage — so</p><p>we'd have to leave it in the hall outside the flat.</p><p><b>MAN:</b> | see. OK. Well, | think that's all ...</p>",
          "questions": [
            {
              "num": 1,
              "type": "FILL",
              "text": "Postcode: _________",
              "answer": "DW30 7YZ",
              "explanation": "The transcript states: \"SADIE: It's DW30 7YZ.\"",
              "instruction": "Questions 1-10<br/>Complete the notes below.<br/>Write ONE WORD AND/OR A NUMBER for each answer."
            },
            {
              "num": 2,
              "type": "FILL",
              "text": "Date of bus journey: _________",
              "answer": "24 April",
              "explanation": "The transcript confirms the answer is '24 April'.",
              "instruction": "Questions 1-10<br/>Complete the notes below.<br/>Write ONE WORD AND/OR A NUMBER for each answer."
            },
            {
              "num": 3,
              "type": "FILL",
              "text": "Reason for trip: shopping and visit to the _________",
              "answer": "dentist",
              "explanation": "The transcript states: \"| did some shopping but the main reason | came here was to go to the dentist.\"",
              "instruction": "Questions 1-10<br/>Complete the notes below.<br/>Write ONE WORD AND/OR A NUMBER for each answer."
            },
            {
              "num": 4,
              "type": "FILL",
              "text": "Travelled by bus because cost of _________ too high",
              "answer": "parking",
              "explanation": "The transcript states: \"| stopped driving in ages ago because parking was so difficult to find and it costs so much.\"",
              "instruction": "Questions 1-10<br/>Complete the notes below.<br/>Write ONE WORD AND/OR A NUMBER for each answer."
            },
            {
              "num": 5,
              "type": "FILL",
              "text": "Got on bus at _________ Street",
              "answer": "Claxby",
              "explanation": "The transcript states: \"SADIE At the bus stop on Claxby Street.\"",
              "instruction": "Questions 1-10<br/>Complete the notes below.<br/>Write ONE WORD AND/OR A NUMBER for each answer."
            },
            {
              "num": 6,
              "type": "FILL",
              "text": "Complaints about bus service: bus today was _________",
              "answer": "late",
              "explanation": "The transcript states: \"SADIE Well, as | said, it's very convenient and quick when it's on time, but this morning it was late.\"",
              "instruction": "Questions 1-10<br/>Complete the notes below.<br/>Write ONE WORD AND/OR A NUMBER for each answer."
            },
            {
              "num": 7,
              "type": "FILL",
              "text": "frequency of buses in the _________",
              "answer": "evening",
              "explanation": "The transcript states: \"| suppose | mainly use the bus during the day, but any time I've been in town in the evening — for dinner or at the cinema — I've noticed you have to wait a long time for a bus — there aren't that many.\"",
              "instruction": "Questions 1-10<br/>Complete the notes below.<br/>Write ONE WORD AND/OR A NUMBER for each answer."
            },
            {
              "num": 8,
              "type": "FILL",
              "text": "Travelling by car: goes to the _________",
              "answer": "supermarket",
              "explanation": "The transcript states: \"Mainly just to go to the supermarket.\"",
              "instruction": "Questions 1-10<br/>Complete the notes below.<br/>Write ONE WORD AND/OR A NUMBER for each answer."
            },
            {
              "num": 9,
              "type": "FILL",
              "text": "Travelling by bicycle: dislikes travelling by bike in the city centre because of the _________",
              "answer": "pollution",
              "explanation": "The transcript states: \"No —|'m not keen on cycling there because of all the pollution.\"",
              "instruction": "Questions 1-10<br/>Complete the notes below.<br/>Write ONE WORD AND/OR A NUMBER for each answer."
            },
            {
              "num": 10,
              "type": "FILL",
              "text": "Doesn't own a bike because of a lack of _________",
              "answer": "storage",
              "explanation": "The transcript states: \"SADIE: Well, | live in a flat — on the second floor and it doesn't have any storage — so we'd have to leave it in the hall outside the flat.\"",
              "instruction": "Questions 1-10<br/>Complete the notes below.<br/>Write ONE WORD AND/OR A NUMBER for each answer."
            }
          ]
        },
        {
          "id": 2,
          "title": "Part 2: Real Practice",
          "description": "Official IELTS 18 Test 1 Listening Part 2.",
          "audio": "audio/IELTS_18_Test_1_Part2.m4a",
          "transcript": "<p>Good evening, everyone. Let me start by welcoming you all to this talk and thanking you for</p><p>taking the time to consider joining ACE voluntary organisation. ACE offers support to people</p><p>and services in the local area and we're now looking for more volunteers to help us do this.</p><p>By the way, | hope you're all comfortable — we have brought in extra seats so that no one has</p><p>to stand, but it does mean that the people at the back of the room may be a bit squashed.</p><p>We'll only be here for about half an hour so, hopefully, that's OK.</p><p>One of the first questions we're often asked is how old you need to be to volunteer. Well,</p><p>you can be as young as 16 or you can be 60 or over; it all depends on what type of voluntary</p><p>work you want to do. Other considerations. such as reliability, are crucial in voluntary work</p><p>and age isn't related to these, in our experience.</p><p>Another question we get asked relates to training. Well, there's plenty of that and it's all</p><p>face-to-face. What's more, training doesn't end when you start working for us — it takes place</p><p>before, during and after periods of work. Often, it's run by other experienced volunteers as</p><p>managers tend to prefer to get on with other things.</p><p>Now, | would ask you to consider a couple of important issues before you decide to apply for</p><p>voluntary work. We don't worry about why you want to be a volunteer — people have many</p><p>different reasons that range from getting work experience to just doing something they've</p><p>always wanted to do. But it is critical that you have enough hours in the day for whatever role</p><p>we agree is suitable for you — if being a volunteer becomes stressful then it's best not to do it</p><p>at all. You may think that your income is important, but we don't ask about that. It's up to you</p><p>to decide if you can work without earning money. What we value is dedication. Some of our</p><p>most loyal volunteers earn very little themselves but still give their full energy to the work they</p><p>do with us.</p><p>OK, so let's take a look at some of the work areas that we need volunteers for and the sort of</p><p>things that would help you in those.</p><p>You may wish simply to help us raise money. If you have the creativity to come up with an</p><p>imaginative or novel way of fundraising, we'd be delighted, as standing in the local streets or</p><p>shops with a collection box can be rather boring!</p><p>One outdoor activity that we need volunteers for is litter collection and for this it's useful if you</p><p>can walk for long periods, sometimes uphill. Some of our regular collectors are quite elderly,</p><p>but very active and keen to protect the environment.</p><p>100</p><p>Q8</p><p>Q9</p><p>Q10</p><p>Q71</p><p>Q12</p><p>Q713</p><p>Q14/15</p><p>Q14/15</p><p>Q16</p><p>Q17</p><p>If you enjoy working with children, we have three vacancies for what are called 'playmates'.</p><p>These volunteers help children learn about staying healthy through a range of out-of-school</p><p>activities. You don't need to have children yourself, but it's good if you know something about</p><p>nutrition and can give clear instructions.</p><p>If that doesn't appeal to you, maybe you would be interested in helping out at our story club</p><p>_ for disabled children, especially if you have done some acting. We put on three performances</p><p>a year based on books they have read and we're always looking for support with the</p><p>theatrical side of this.</p><p>The last area I'll mention today is first aid. Volunteers who join this group can end up teaching</p><p>others in vulnerable groups who may be at risk of injury. Initially, though, your priority will be</p><p>to take in a lot of information and not forget any important steps or details.</p><p>Right, so does anyone have any questions ...</p>",
          "questions": [
            {
              "num": 11,
              "type": "MCQ",
              "text": "Why does the speaker apologise about the seats?",
              "answer": "C",
              "explanation": "The transcript states: \"Let me start by welcoming you all to this talk and thanking you for taking the time to consider joining ACE voluntary organisation.\"",
              "instruction": "Questions 11-13<br/>Choose the correct letter, A, B or C.",
              "options": [
                "A. They are too small.",
                "B. There are not enough of them.",
                "C. Some of them are very close together."
              ]
            },
            {
              "num": 12,
              "type": "MCQ",
              "text": "What does the speaker say about the age of volunteers?",
              "answer": "A",
              "explanation": "The transcript states: \"Let me start by welcoming you all to this talk and thanking you for taking the time to consider joining ACE voluntary organisation.\"",
              "instruction": "Questions 11-13<br/>Choose the correct letter, A, B or C.",
              "options": [
                "A. The age of volunteers is less important than other factors.",
                "B. Young volunteers are less reliable than older ones.",
                "C. Most volunteers are about 60 years old."
              ]
            },
            {
              "num": 13,
              "type": "MCQ",
              "text": "What does the speaker say about training?",
              "answer": "A",
              "explanation": "The transcript states: \"Let me start by welcoming you all to this talk and thanking you for taking the time to consider joining ACE voluntary organisation.\"",
              "instruction": "Questions 11-13<br/>Choose the correct letter, A, B or C.",
              "options": [
                "A. It is continuous.",
                "B. It is conducted by a manager.",
                "C. It takes place online."
              ]
            },
            {
              "num": 14,
              "type": "MCQ",
              "text": "Which issue does the speaker ask the audience to consider before they apply to be volunteers?",
              "answer": "B",
              "explanation": "The transcript states: \"Let me start by welcoming you all to this talk and thanking you for taking the time to consider joining ACE voluntary organisation.\"",
              "instruction": "Questions 14 and 15<br/>Choose TWO letters, A-E.",
              "options": [
                "A. their financial situation",
                "B. their level of commitment",
                "C. their work experience",
                "D. their ambition",
                "E. their availability"
              ]
            },
            {
              "num": 15,
              "type": "MCQ",
              "text": "Which other issue does the speaker ask the audience to consider?",
              "answer": "E",
              "explanation": "The transcript states: \"Good evening, everyone.\"",
              "instruction": "Questions 14 and 15<br/>Choose TWO letters, A-E.",
              "options": [
                "A. their financial situation",
                "B. their level of commitment",
                "C. their work experience",
                "D. their ambition",
                "E. their availability"
              ]
            },
            {
              "num": 16,
              "type": "MCQ",
              "text": "What does the speaker suggest would be helpful for Fundraising?",
              "answer": "B",
              "explanation": "The transcript states: \"Let me start by welcoming you all to this talk and thanking you for taking the time to consider joining ACE voluntary organisation.\"",
              "instruction": "Questions 16-20<br/>Choose FIVE answers from the box and write the correct letter, A-G, next to Questions 16-20.",
              "options": [
                "A. experience on stage",
                "B. original, new ideas",
                "C. parenting skills",
                "D. an understanding of food and diet",
                "E. retail experience",
                "F. a good memory",
                "G. a good level of fitness"
              ]
            },
            {
              "num": 17,
              "type": "MCQ",
              "text": "What does the speaker suggest would be helpful for Litter collection?",
              "answer": "G",
              "explanation": "The transcript states: \"Good evening, everyone.\"",
              "instruction": "Questions 16-20<br/>Choose FIVE answers from the box and write the correct letter, A-G, next to Questions 16-20.",
              "options": [
                "A. experience on stage",
                "B. original, new ideas",
                "C. parenting skills",
                "D. an understanding of food and diet",
                "E. retail experience",
                "F. a good memory",
                "G. a good level of fitness"
              ]
            },
            {
              "num": 18,
              "type": "MCQ",
              "text": "What does the speaker suggest would be helpful for Playmates?",
              "answer": "C",
              "explanation": "The transcript states: \"Let me start by welcoming you all to this talk and thanking you for taking the time to consider joining ACE voluntary organisation.\"",
              "instruction": "Questions 16-20<br/>Choose FIVE answers from the box and write the correct letter, A-G, next to Questions 16-20.",
              "options": [
                "A. experience on stage",
                "B. original, new ideas",
                "C. parenting skills",
                "D. an understanding of food and diet",
                "E. retail experience",
                "F. a good memory",
                "G. a good level of fitness"
              ]
            },
            {
              "num": 19,
              "type": "MCQ",
              "text": "What does the speaker suggest would be helpful for Story club?",
              "answer": "A",
              "explanation": "The transcript states: \"Let me start by welcoming you all to this talk and thanking you for taking the time to consider joining ACE voluntary organisation.\"",
              "instruction": "Questions 16-20<br/>Choose FIVE answers from the box and write the correct letter, A-G, next to Questions 16-20.",
              "options": [
                "A. experience on stage",
                "B. original, new ideas",
                "C. parenting skills",
                "D. an understanding of food and diet",
                "E. retail experience",
                "F. a good memory",
                "G. a good level of fitness"
              ]
            },
            {
              "num": 20,
              "type": "MCQ",
              "text": "What does the speaker suggest would be helpful for First aid?",
              "answer": "F",
              "explanation": "The transcript states: \"Let me start by welcoming you all to this talk and thanking you for taking the time to consider joining ACE voluntary organisation.\"",
              "instruction": "Questions 16-20<br/>Choose FIVE answers from the box and write the correct letter, A-G, next to Questions 16-20.",
              "options": [
                "A. experience on stage",
                "B. original, new ideas",
                "C. parenting skills",
                "D. an understanding of food and diet",
                "E. retail experience",
                "F. a good memory",
                "G. a good level of fitness"
              ]
            }
          ]
        },
        {
          "id": 3,
          "title": "Part 3: Real Practice",
          "description": "Official IELTS 18 Test 1 Listening Part 3.",
          "audio": "audio/IELTS_18_Test_1_Part3.m4a",
          "transcript": "<p><b>HUGO:</b> Hi Chantal. What did you think of the talk, then?</p><p><b>CHANTAL:</b> Hi Hugo. | thought it was good once I'd moved seats.</p><p><b>HUGO:</b> Oh — were the people beside you chatting or something?</p><p><b>CHANTAL:</b> It wasn't that. | went early so that I'd get a seat and not have to stand, but then</p><p>this guy sat right in front of me and he was so tall!</p><p><b>HUGO:</b> It's hard to see through people's heads. isn't it?</p><p><b>CHANTAL:</b> Impossible! Anyway, to answer your question, | thought it was really interesting,</p><p>especially what the speaker said about the job market.</p><p><b>HUGO:</b> Me too. | mean we know we're going into a really competitive field so it's obvious</p><p>that we may struggle to get work.</p><p><b>CHANTAL:</b> That's right — and we know we can't all have that 'dream job'.</p><p><b>HUGO:</b> Yeah, but it looks like there's a whole range of ... areas of work that we hadn't</p><p>even thought of — like fashion journalism, for instance.</p><p>CHANTAL! Yeah — | wasn't expecting so many career options.</p><p><b>HUGO:</b> Mmm. Overall, she had quite a strong message, didn't she?</p><p><b>CHANTAL:</b> She did. She kept saying things like 'I know you all think this, but ...' and then</p><p>she'd tell us how it really is.</p><p>HUGO! Perhaps she thinks students are a bit narrow-minded about the industry.</p><p><b>CHANTAL:</b> It. was a bit harsh, though! We know it's a tough industry.</p><p><b>HUGO:</b> Yeah — and we're only first years. after all. We've got a lot to learn.</p><p><b>CHANTAL:</b> Exactly. Do you think our secondary-school education should have been more</p><p>career-focused?</p><p><b>HUGO:</b> Well, we had numerous talks on careers, which was good, but none of them were</p><p>very inspiring. They could have asked more people like today's speaker to talk to us.</p><p><b>CHANTAL:</b> | agree. We were told about lots of different careers — just when we needed to</p><p>be, but not by the experts who really know stuff.</p><p><b>HUGO:</b> So did today's talk influence your thoughts on what career you'd like to take up in</p><p>the future?</p><p><b>CHANTAL:</b> Well, | promised myself that I'd go through this course and keep an open mind till</p><p>the end.</p><p><b>HUGO:</b> But | think it's better to pick an area of the industry now and then aim to get better</p><p>and better at it.</p><p>Test 7</p><p>Q78</p><p>Q19</p><p>Q20</p><p>Q21</p><p>Q22</p><p>Q23</p><p>Q24</p><p>Q25</p><p>101</p><p><b>CHANTAL:</b> Well, | think we'll just have to differ on that issue!</p><p><b>HUGO:</b> One thing's for certain, though. From what she said, we'll be unpaid assistants in</p><p>the industry for quite a long time.</p><p><b>CHANTAL:</b> Mmm.</p><p><b>HUGO:</b> I'm prepared for that, aren't you?</p><p><b>CHANTAL:</b> Actually, I'm not going to accept that view.</p><p><b>HUGO:</b> Really? But she knows it's the case — and everyone else says the same.</p><p><b>CHANTAL:</b> That doesn't mean it has to be true for me.</p><p><b>HUGO:</b> OK. Well — | hope you're right!</p><p><b>CHANTAL:</b> | thought the speaker's account of her first job was fascinating.</p><p><b>HUGO:</b> Yeah — she admitted she was lucky to get work being a personal dresser for a</p><p>musician. She didn't even apply for the job and there she was getting paid to</p><p>choose all his clothes.</p><p><b>CHANTAL:</b> It must have felt amazing — though she said all she was looking for back then</p><p>was experience, not financial reward.</p><p><b>HUGO:</b> Mmm. And then he was so mean, telling her she was more interested in her own</p><p>appearance than his!</p><p><b>CHANTAL:</b> But — she did realise he was right about that, which really made me think. I'm</p><p>always considering my own clothes but now | can see you should be focusing on</p><p>your client!</p><p><b>HUGO:</b> She obviously regretted losing the job.</p><p><b>CHANTAL:</b> Well, as she said, she should have hidden her negative feelings about him, but</p><p>she didn't.</p><p><b>HUGO:</b> It was really brave the way she picked herself up and took that job in retail. Fancy</p><p>working in a shop after that!</p><p><b>CHANTAL:</b> Yeah — well, she recommended we all do it at some point. | guess as a designer</p><p>you'd get to find out some useful information, like how big or small the average</p><p>shopper is.</p><p><b>HUGO:</b> | think that's an issue for manufacturers, not designers. However, it would be</p><p>useful to know if there's a gap in the market — you know, an item that no one's</p><p>stocking but that consumers are looking for.</p><p><b>CHANTAL:</b> Yeah, people don't give up searching. They also take things back to the store if</p><p>they aren't right.</p><p><b>HUGO:</b> Yeah. Imagine you worked in an expensive shop and you found out the garments</p><p>sold there were being returned because they ... fell apart in the wash!</p><p><b>CHANTAL:</b> Yeah, it would be good to know that kind of thing.</p><p>HUGO! Yeah.</p>",
          "questions": [
            {
              "num": 21,
              "type": "MCQ",
              "text": "What problem did Chantal have at the start of the talk?",
              "answer": "A",
              "explanation": "The transcript states: 'this guy sat right in front of me and he was so tall! Hugo: It\'s hard to see through people\'s heads, isn\'t it? Chantal: Impossible!'",
              "instruction": "Questions 21-26<br/>Choose the correct letter, A, B or C.",
              "options": [
                "A. Her view of the speaker was blocked.",
                "B. She was unable to find an empty seat.",
                "C. The students next to her were talking."
              ]
            },
            {
              "num": 22,
              "type": "MCQ",
              "text": "What were Hugo and Chantal surprised to hear about the job market?",
              "answer": "B",
              "explanation": "The transcript states: 'Hugo: Yeah, but it looks like there\'s a whole range of ... areas of work that we hadn\'t even thought of... Chantal: Yeah — I wasn\'t expecting so many career options.'",
              "instruction": "Questions 21-26<br/>Choose the correct letter, A, B or C.",
              "options": [
                "A. It has become more competitive than it used to be.",
                "B. There is more variety in it than they had realised.",
                "C. Some areas of it are more exciting than others."
              ]
            },
            {
              "num": 23,
              "type": "MCQ",
              "text": "Hugo and Chantal agree that the speaker's message was",
              "answer": "A",
              "explanation": "The transcript states: 'Chantal: It was a bit harsh, though! Hugo: Yeah — and we\'re only first years, after all.'",
              "instruction": "Questions 21-26<br/>Choose the correct letter, A, B or C.",
              "options": [
                "A. unfair to them at times.",
                "B. hard for them to follow.",
                "C. critical of the industry."
              ]
            },
            {
              "num": 24,
              "type": "MCQ",
              "text": "What do Hugo and Chantal criticise about their secondary-school careers advice?",
              "answer": "C",
              "explanation": "The transcript states: 'Hugo: None of them were very inspiring. They could have asked more people like today\'s speaker... Chantal: Not by the experts who really know stuff.'",
              "instruction": "Questions 21-26<br/>Choose the correct letter, A, B or C.",
              "options": [
                "A. when they received the advice",
                "B. how much advice was given",
                "C. who gave the advice"
              ]
            },
            {
              "num": 25,
              "type": "MCQ",
              "text": "When discussing their future, Hugo and Chantal disagree on",
              "answer": "B",
              "explanation": "The transcript states: 'Chantal: keep an open mind till the end. Hugo: pick an area now... Chantal: differ on that issue.'",
              "instruction": "Questions 21-26<br/>Choose the correct letter, A, B or C.",
              "options": [
                "A. which is the best career in fashion.",
                "B. when to choose a career in fashion.",
                "C. why they would like a career in fashion."
              ]
            },
            {
              "num": 26,
              "type": "MCQ",
              "text": "How does Hugo feel about being an unpaid assistant?",
              "answer": "A",
              "explanation": "The transcript states: 'Hugo: we\'ll be unpaid assistants... I\'m prepared for that... everyone else says the same.'",
              "instruction": "Questions 21-26<br/>Choose the correct letter, A, B or C.",
              "options": [
                "A. He is realistic about the practice.",
                "B. He feels the practice is dishonest.",
                "C. He thinks others want to change the practice."
              ]
            },
            {
              "num": 27,
              "type": "MCQ",
              "text": "Which TWO mistakes did the speaker admit she made in her first job?",
              "answer": "B",
              "explanation": "The transcript states: 'She did realise he was right about that... I\'m always considering my own clothes...'",
              "instruction": "Questions 27 and 28<br/>Choose TWO letters, A-E.",
              "options": [
                "A. being dishonest to her employer",
                "B. paying too much attention to how she looked",
                "C. expecting to become well known",
                "D. trying to earn a lot of money",
                "E. openly disliking her client"
              ]
            },
            {
              "num": 28,
              "type": "MCQ",
              "text": "Which other mistake did the speaker admit she made in her first job?",
              "answer": "E",
              "explanation": "The transcript states: 'she should have hidden her negative feelings about him, but she didn\'t.'",
              "instruction": "Questions 27 and 28<br/>Choose TWO letters, A-E.",
              "options": [
                "A. being dishonest to her employer",
                "B. paying too much attention to how she looked",
                "C. expecting to become well known",
                "D. trying to earn a lot of money",
                "E. openly disliking her client"
              ]
            },
            {
              "num": 29,
              "type": "MCQ",
              "text": "Which TWO pieces of retail information do Hugo and Chantal agree would be useful?",
              "answer": "A",
              "explanation": "The transcript states: 'Hugo: found out the garments sold there were being returned because they ... fell apart in the wash! Chantal: Yeah, it would be good to know that kind of thing.'",
              "instruction": "Questions 29 and 30<br/>Choose TWO letters, A-E.",
              "options": [
                "A. the reasons people return fashion items",
                "B. how much time people have to shop for clothes",
                "C. fashion designs people want but can\'t find",
                "D. the best time of year for fashion buying",
                "E. the most popular fashion sizes"
              ]
            },
            {
              "num": 30,
              "type": "MCQ",
              "text": "Which other piece of retail information do Hugo and Chantal agree would be useful?",
              "answer": "C",
              "explanation": "The transcript states: 'Hugo: know if there\'s a gap in the market — you know, an item that no one\'s stocking but that consumers are looking for. Chantal: Yeah, people don\'t give up searching.'",
              "instruction": "Questions 29 and 30<br/>Choose TWO letters, A-E.",
              "options": [
                "A. the reasons people return fashion items",
                "B. how much time people have to shop for clothes",
                "C. fashion designs people want but can\'t find",
                "D. the best time of year for fashion buying",
                "E. the most popular fashion sizes"
              ]
            }
          ]
        },
        {
          "id": 4,
          "title": "Part 4: Real Practice",
          "description": "Official IELTS 18 Test 1 Listening Part 4.",
          "audio": "audio/IELTS_18_Test_1_Part4.m4a",
          "transcript": "<p>For my presentation today | want to tell you about how groups of elephants have been moved</p><p>and settled in new reserves. This is known as translocation and has been carried out in</p><p>Malawi in Africa in recent years. The reason this is being done is because of overpopulation</p><p>of elephants in some areas.</p><p>Overpopulation is a good problem to have and not one we tend to hear about very often. In</p><p>Malawi's Majete National Park the elephant population had been wiped out by poachers,</p><p>who killed the elephants for their ivory. But in 2003, the park was restocked and effective law</p><p>enforcement was introduced. Since then, not a single elephant has been poached. In this</p><p>safe environment, the elephant population boomed. Breeding went so well that there were</p><p>more elephants than the park could support.</p><p>102</p><p>Q26</p><p>Q27/28</p><p>Q27/28</p><p>Q29/30</p><p>Q29/30</p><p>This led to a number of problems. Firstly, there was more competition for food, which meant</p><p>that some elephants were suffering from hunger. As there was a limit to the amount of food</p><p>in the national park, some elephants began looking further afield. Elephants were routinely</p><p>knocking down fences around the park, which then had to be repaired at a significant cost.</p><p>To solve this problem, the decision was made to move dozens of elephants from Majete</p><p>_ National Park to Nkhotakota Wildlife Park, where there were no elephants. But, obviously,</p><p>attempting to move significant numbers of elephants to a new home 300 kilometres away is</p><p>quite a challenge.</p><p>So how did this translocation process work in practice?</p><p>Elephants were moved in groups of between eight and twenty, all belonging to one family.</p><p>Because relationships are very important to elephants, they all had to be moved at the same</p><p>time. A team of vets and park rangers flew over the park in helicopters and targeted a group.</p><p>which were rounded up and directed to a designated open plain.</p><p>The vets then used darts to immobilise the elephants — this was a tricky manoeuvre, as they</p><p>not only had to select the right dose of tranquiliser for different-sized elephants but they had</p><p>to dart the elephants as they were running around. This also had to be done as quickly as</p><p>possible so as to minimise the stress caused. As soon as the elephants began to flop onto</p><p>the ground, the team moved in to take care of them.</p><p>To avoid the risk of suffocation, the team had to make sure none of the elephants were lying</p><p>on their chests because their lungs could be crushed in this position. So all the elephants</p><p>had to be placed on their sides. One person stayed with each elephant while they waited for</p><p>the vets to do checks. It was very important to keep an eye on their breathing — if there were</p><p>fewer than six breaths per minute, the elephant would need urgent medical attention. Collars</p><p>were fitted to the matriarch in each group so their movements could be tracked in their new</p><p>home. Measurements were taken of each elephant's tusks — elephants with large tusks would</p><p>be at greater risk from poachers — and also of their feet. The elephants were then taken to a</p><p>recovery area before being loaded onto trucks and transported to their new home.</p><p>The elephants translocated to Nkhotakota settled in very well and the project has generally</p><p>been accepted to have been a huge success — and not just for the elephants. Employment</p><p>prospects have improved enormously, contributing to rising living standards for the whole</p><p>community. Poaching is no longer an issue, as former poachers are able to find more reliable</p><p>sources of income. In fact, many of them volunteered to give up their weapons, as they were</p><p>no longer of any use to them.</p><p>More than two dozen elephants have been born at Nkhotakota since relocation. With an area</p><p>of more than 1,800 square kilometres, there's plenty of space for the elephant population</p><p>to continue to grow. Their presence is also helping to rebalance Nkhotakota's damaged</p><p>ecosystem and providing a sustainable conservation model, which could be replicated in</p><p>other parks. All this has been a big draw for tourism, which contributes five times more than</p><p>the illegal wildlife trade to GDP, and this is mainly because of the elephants. There's also</p><p>been a dramatic rise in interest ...</p><p>Test 7</p><p>Q31</p><p>Q32</p><p>Q33</p><p>Q34</p><p>Q35</p><p>Q36</p><p>Q37</p><p>Q38</p><p>Q39</p><p>Q40</p><p>103</p>",
          "questions": [
            {
              "num": 31,
              "type": "FILL",
              "text": "Majete National Park: fences are needed to protect both animals and the local _________",
              "answer": "fences",
              "explanation": "The transcript states: \"Elephants were routinely knocking down fences around the park, which then had to be repaired at a significant cost.\"",
              "instruction": "Questions 31-40<br/>Complete the notes below.<br/>Write ONE WORD ONLY for each answer."
            },
            {
              "num": 32,
              "type": "FILL",
              "text": "elephant translocation: entire _________ groups are moved together",
              "answer": "family",
              "explanation": "The transcript states: \"Elephants were moved in groups of between eight and twenty, all belonging to one family.\"",
              "instruction": "Questions 31-40<br/>Complete the notes below.<br/>Write ONE WORD ONLY for each answer."
            },
            {
              "num": 33,
              "type": "FILL",
              "text": "translocation methods: tracking was done using _________",
              "answer": "helicopters",
              "explanation": "The transcript states: \"A team of vets and park rangers flew over the park in helicopters and targeted a group.\"",
              "instruction": "Questions 31-40<br/>Complete the notes below.<br/>Write ONE WORD ONLY for each answer."
            },
            {
              "num": 34,
              "type": "FILL",
              "text": "animals were loaded onto trucks and kept under _________",
              "answer": "stress",
              "explanation": "The transcript states: \"This also had to be done as quickly as possible so as to minimise the stress caused.\"",
              "instruction": "Questions 31-40<br/>Complete the notes below.<br/>Write ONE WORD ONLY for each answer."
            },
            {
              "num": 35,
              "type": "FILL",
              "text": "release process: elephants were released into a _________ area first",
              "answer": "sides",
              "explanation": "The transcript states: \"So all the elephants had to be placed on their sides.\"",
              "instruction": "Questions 31-40<br/>Complete the notes below.<br/>Write ONE WORD ONLY for each answer."
            },
            {
              "num": 36,
              "type": "FILL",
              "text": "results of translocation: new environment has caused no _________ to the elephants",
              "answer": "breathing",
              "explanation": "The transcript states: \"It was very important to keep an eye on their breathing — if there were fewer than six breaths per minute, the elephant would need urgent medical attention.\"",
              "instruction": "Questions 31-40<br/>Complete the notes below.<br/>Write ONE WORD ONLY for each answer."
            },
            {
              "num": 37,
              "type": "FILL",
              "text": "elephants have adapted well to their new _________",
              "answer": "feet",
              "explanation": "The transcript states: \"Measurements were taken of each elephant's tusks — elephants with large tusks would be at greater risk from poachers — and also of their feet.\"",
              "instruction": "Questions 31-40<br/>Complete the notes below.<br/>Write ONE WORD ONLY for each answer."
            },
            {
              "num": 38,
              "type": "FILL",
              "text": "there has been an increase in the number of _________ in the area",
              "answer": "employment",
              "explanation": "The transcript states: \"Employment prospects have improved enormously, contributing to rising living standards for the whole community.\"",
              "instruction": "Questions 31-40<br/>Complete the notes below.<br/>Write ONE WORD ONLY for each answer."
            },
            {
              "num": 39,
              "type": "FILL",
              "text": "benefits of project: local people have gained _________",
              "answer": "weapons",
              "explanation": "The transcript states: \"In fact, many of them volunteered to give up their weapons, as they were no longer of any use to them.\"",
              "instruction": "Questions 31-40<br/>Complete the notes below.<br/>Write ONE WORD ONLY for each answer."
            },
            {
              "num": 40,
              "type": "FILL",
              "text": "there is a significant increase in _________",
              "answer": "tourism",
              "explanation": "The transcript states: \"All this has been a big draw for tourism, which contributes five times more than the illegal wildlife trade to GDP, and this is mainly because of the elephants.\"",
              "instruction": "Questions 31-40<br/>Complete the notes below.<br/>Write ONE WORD ONLY for each answer."
            }
          ]
        }
      ]
    },
    "reading": {
      "passages": [
        {
          "title": "Urban farming in Paris",
          "text": "<h1>Urban farming in Paris</h1>\n<p>On top of a sleek metal building in the south-west of Paris, the world's largest urban rooftop farm has started to grow. Strawberries that are thick, sweet and red are hanging in upstream tubes, and chard, radishes and lettuces are growing in columns of wood fibre. The project is called Nature Urbaine and is located on top of the Paris Expo Porte de Versailles exhibition centre.</p>\n<p>This is the world's largest urban rooftop farm, and the first phase opened in the spring of 2026. The farm spans about 14,000 square metres — roughly the size of two football pitches. The team behind the project hopes to grow more than thirty different plant species, producing around one thousand kilograms of fruit and vegetables every day during the peak season.</p>\n<p>The team behind the project is using aeroponic farming, which means that plants are grown without soil. Instead, they are suspended in the air and their roots are sprayed with water containing nutrients. This method uses about 90% less water than traditional farming and produces a higher yield. In addition, the farm does not use any pesticides or chemical fertilisers, making the produce completely organic.</p>\n<p>For Paris, the farm is a saving grace. The city has a goal to green 100 hectares of roofs and walls by 2030, with one third of that dedicated to urban agriculture. The farm also helps to reduce the urban heat island effect, where cities are significantly warmer than surrounding rural areas due to human activity and building materials. By covering the roof with plants, the building stays cooler in the summer and retains heat in the winter.</p>\n<p>At the moment, Agripolis, the company that runs the farm, employs about twenty urban farmers. They tend to the crops, harvest the produce and deliver it to local restaurants, hotels and residents. The farm also offers educational workshops for schools and businesses, and local residents can rent small plots to grow their own vegetables.</p>\n<p>The farm also hopes to reach a wider audience. In the future, the team plans to open a rooftop restaurant serving dishes made from the farm's produce, and a bar overlooking the city. By connecting people with where their food comes from, the farm aims to promote sustainable living and inspire other cities to follow in Paris's footsteps.</p>",
          "questions": [
            {
              "num": 1,
              "type": "FILL",
              "text": "Vertical tubes are used to grow strawberries, _________ and herbs.",
              "answer": "lettuces",
              "explanation": "The text confirms this: \"From identical vertical tubes nearby burst row upon row of lettuces; near those are aromatic herbs, such as basil, sage and peppermint.\"",
              "location": "Passage 1",
              "instruction": "Questions 1-3<br/>Complete the sentences below.<br/>Choose NO MORE THAN TWO WORDS AND/OR A NUMBER from the passage for each answer.<br/>Write your answers in boxes 1-3 on your answer sheet."
            },
            {
              "num": 2,
              "type": "FILL",
              "text": "There will eventually be a daily harvest Of AS MUCH AS _________ in weight of fruit and vegetables.",
              "answer": "1,000 kg",
              "explanation": "The text confirms this: \"When the remaining two thirds of the vast open area are in production, 20 staff will harvest up to 1,000 kg of perhaps 35 different varieties of fruit and vegetables, every day.\"",
              "location": "Passage 1",
              "instruction": "Questions 1-3<br/>Complete the sentences below.<br/>Choose NO MORE THAN TWO WORDS AND/OR A NUMBER from the passage for each answer.<br/>Write your answers in boxes 1-3 on your answer sheet."
            },
            {
              "num": 3,
              "type": "FILL",
              "text": "It may be possible that the farm's produce will account for as much as 10% of _________ overall.",
              "answer": "consumption",
              "explanation": "The text confirms this: \"But if enough unused space can be developed like this, there's no reason why you shouldn't eventually target maybe between 5% and 10% of consumption.\"",
              "location": "Passage 1",
              "instruction": "Questions 1-3<br/>Complete the sentences below.<br/>Choose NO MORE THAN TWO WORDS AND/OR A NUMBER from the passage for each answer.<br/>Write your answers in boxes 1-3 on your answer sheet."
            },
            {
              "num": 4,
              "type": "FILL",
              "text": "Identify the missing word (4) in the comparison table: Wide range of _________ used.",
              "answer": "pesticides",
              "explanation": "The text confirms this: \"'First, I don't much like the fact that most of the fruit and vegetables we eat have been treated with something like 17 different pesticides, or that the intensive farming techniques that produced them are such huge generators of greenhouse gases.\"",
              "location": "Passage 1",
              "instruction": "Questions 4-7<br/>Complete the table below.<br/>Choose ONE WORD ONLY from the passage for each answer.<br/>Write your answers in boxes 4-7 on your answer sheet.<br/><table class=\"w-full text-left border-collapse border border-white/10 my-4 text-xs\"><thead><tr class=\"bg-white/5\"><th class=\"p-2 border border-white/10 font-bold\">Category</th><th class=\"p-2 border border-white/10 font-bold\">Intensive Farming</th><th class=\"p-2 border border-white/10 font-bold\">Aeroponic Urban Farming</th></tr></thead><tbody><tr><td class=\"p-2 border border-white/10 font-semibold\">Growth</td><td class=\"p-2 border border-white/10\">Wide range of <b>(4) _________</b> used</td><td class=\"p-2 border border-white/10\">No soil used; nutrients added to water, which is recycled</td></tr><tr><td class=\"p-2 border border-white/10 font-semibold\">Selection</td><td class=\"p-2 border border-white/10\">Quality not good; varieties chosen that can survive long <b>(5) _________</b></td><td class=\"p-2 border border-white/10\">Produce chosen because of its <b>(7) _________</b></td></tr><tr><td class=\"p-2 border border-white/10 font-semibold\">Sale</td><td class=\"p-2 border border-white/10\"><b>(6) _________</b> receive very little of overall income</td><td class=\"p-2 border border-white/10\"></td></tr></tbody></table>"
            },
            {
              "num": 5,
              "type": "FILL",
              "text": "Identify the missing word (5) in the comparison table: Varieties chosen that can survive long _________.",
              "answer": "journeys",
              "explanation": "The text confirms this: \"I don't much like the fact, either, that they've travelled an average of 2,000 refrigerated kilometres to my plate, that their quality is so poor, because the varieties are selected for their capacity to withstand such substantial journeys, or that 80% of the price I pay goes to wholesalers and transport companies, not the producers.\"",
              "location": "Passage 1",
              "instruction": "Questions 4-7<br/>Complete the table below.<br/>Choose ONE WORD ONLY from the passage for each answer.<br/>Write your answers in boxes 4-7 on your answer sheet.<br/><table class=\"w-full text-left border-collapse border border-white/10 my-4 text-xs\"><thead><tr class=\"bg-white/5\"><th class=\"p-2 border border-white/10 font-bold\">Category</th><th class=\"p-2 border border-white/10 font-bold\">Intensive Farming</th><th class=\"p-2 border border-white/10 font-bold\">Aeroponic Urban Farming</th></tr></thead><tbody><tr><td class=\"p-2 border border-white/10 font-semibold\">Growth</td><td class=\"p-2 border border-white/10\">Wide range of <b>(4) _________</b> used</td><td class=\"p-2 border border-white/10\">No soil used; nutrients added to water, which is recycled</td></tr><tr><td class=\"p-2 border border-white/10 font-semibold\">Selection</td><td class=\"p-2 border border-white/10\">Quality not good; varieties chosen that can survive long <b>(5) _________</b></td><td class=\"p-2 border border-white/10\">Produce chosen because of its <b>(7) _________</b></td></tr><tr><td class=\"p-2 border border-white/10 font-semibold\">Sale</td><td class=\"p-2 border border-white/10\"><b>(6) _________</b> receive very little of overall income</td><td class=\"p-2 border border-white/10\"></td></tr></tbody></table>"
            },
            {
              "num": 6,
              "type": "FILL",
              "text": "Identify the missing word (6) in the comparison table: _________ receive very little of overall income.",
              "answer": "producers",
              "explanation": "The text confirms this: \"I don't much like the fact, either, that they've travelled an average of 2,000 refrigerated kilometres to my plate, that their quality is so poor, because the varieties are selected for their capacity to withstand such substantial journeys, or that 80% of the price I pay goes to wholesalers and transport companies, not the producers.\"",
              "location": "Passage 1",
              "instruction": "Questions 4-7<br/>Complete the table below.<br/>Choose ONE WORD ONLY from the passage for each answer.<br/>Write your answers in boxes 4-7 on your answer sheet.<br/><table class=\"w-full text-left border-collapse border border-white/10 my-4 text-xs\"><thead><tr class=\"bg-white/5\"><th class=\"p-2 border border-white/10 font-bold\">Category</th><th class=\"p-2 border border-white/10 font-bold\">Intensive Farming</th><th class=\"p-2 border border-white/10 font-bold\">Aeroponic Urban Farming</th></tr></thead><tbody><tr><td class=\"p-2 border border-white/10 font-semibold\">Growth</td><td class=\"p-2 border border-white/10\">Wide range of <b>(4) _________</b> used</td><td class=\"p-2 border border-white/10\">No soil used; nutrients added to water, which is recycled</td></tr><tr><td class=\"p-2 border border-white/10 font-semibold\">Selection</td><td class=\"p-2 border border-white/10\">Quality not good; varieties chosen that can survive long <b>(5) _________</b></td><td class=\"p-2 border border-white/10\">Produce chosen because of its <b>(7) _________</b></td></tr><tr><td class=\"p-2 border border-white/10 font-semibold\">Sale</td><td class=\"p-2 border border-white/10\"><b>(6) _________</b> receive very little of overall income</td><td class=\"p-2 border border-white/10\"></td></tr></tbody></table>"
            },
            {
              "num": 7,
              "type": "FILL",
              "text": "Identify the missing word (7) in the comparison table: Produce chosen because of its _________.",
              "answer": "flavour",
              "explanation": "The text confirms this: \"Strawberries that are small, intensely flavoured and resplendently red sprout abundantly from large plastic tubes.\"",
              "location": "Passage 1",
              "instruction": "Questions 4-7<br/>Complete the table below.<br/>Choose ONE WORD ONLY from the passage for each answer.<br/>Write your answers in boxes 4-7 on your answer sheet.<br/><table class=\"w-full text-left border-collapse border border-white/10 my-4 text-xs\"><thead><tr class=\"bg-white/5\"><th class=\"p-2 border border-white/10 font-bold\">Category</th><th class=\"p-2 border border-white/10 font-bold\">Intensive Farming</th><th class=\"p-2 border border-white/10 font-bold\">Aeroponic Urban Farming</th></tr></thead><tbody><tr><td class=\"p-2 border border-white/10 font-semibold\">Growth</td><td class=\"p-2 border border-white/10\">Wide range of <b>(4) _________</b> used</td><td class=\"p-2 border border-white/10\">No soil used; nutrients added to water, which is recycled</td></tr><tr><td class=\"p-2 border border-white/10 font-semibold\">Selection</td><td class=\"p-2 border border-white/10\">Quality not good; varieties chosen that can survive long <b>(5) _________</b></td><td class=\"p-2 border border-white/10\">Produce chosen because of its <b>(7) _________</b></td></tr><tr><td class=\"p-2 border border-white/10 font-semibold\">Sale</td><td class=\"p-2 border border-white/10\"><b>(6) _________</b> receive very little of overall income</td><td class=\"p-2 border border-white/10\"></td></tr></tbody></table>"
            },
            {
              "num": 8,
              "type": "TFNG",
              "text": "Urban farming can take place above or below ground.",
              "answer": "TRUE",
              "explanation": "The passage confirms that the answer is 'TRUE'.",
              "location": "Passage 1",
              "instruction": "Questions 8-13<br/>Do the following statements agree with the information given in Reading Passage 1?<br/>In boxes 813 on your answer sheet, Write<br/>TRUE if the statement agrees with the information<br/>FALSE if the statement contradicts the information<br/>NOT GIVEN _if there is no information on this",
              "options": [
                "TRUE",
                "FALSE",
                "NOT GIVEN"
              ]
            },
            {
              "num": 9,
              "type": "TFNG",
              "text": "Some of the equipment used in aeroponic farming can be made by hand.",
              "answer": "NOT GIVEN",
              "explanation": "The passage confirms that the answer is 'NOT GIVEN'.",
              "location": "Passage 1",
              "instruction": "Questions 8-13<br/>Do the following statements agree with the information given in Reading Passage 1?<br/>In boxes 813 on your answer sheet, Write<br/>TRUE if the statement agrees with the information<br/>FALSE if the statement contradicts the information<br/>NOT GIVEN _if there is no information on this",
              "options": [
                "TRUE",
                "FALSE",
                "NOT GIVEN"
              ]
            },
            {
              "num": 10,
              "type": "TFNG",
              "text": "Urban farming relies more on electricity than some other types of farming.",
              "answer": "FALSE",
              "explanation": "The passage confirms that the answer is 'FALSE'.",
              "location": "Passage 1",
              "instruction": "Questions 8-13<br/>Do the following statements agree with the information given in Reading Passage 1?<br/>In boxes 813 on your answer sheet, Write<br/>TRUE if the statement agrees with the information<br/>FALSE if the statement contradicts the information<br/>NOT GIVEN _if there is no information on this",
              "options": [
                "TRUE",
                "FALSE",
                "NOT GIVEN"
              ]
            },
            {
              "num": 11,
              "type": "TFNG",
              "text": "Fruit and vegetables grown on an aeroponic urban farm are cheaper than traditionally grown organic produce.",
              "answer": "TRUE",
              "explanation": "The passage confirms that the answer is 'TRUE'.",
              "location": "Passage 1",
              "instruction": "Questions 8-13<br/>Do the following statements agree with the information given in Reading Passage 1?<br/>In boxes 813 on your answer sheet, Write<br/>TRUE if the statement agrees with the information<br/>FALSE if the statement contradicts the information<br/>NOT GIVEN _if there is no information on this",
              "options": [
                "TRUE",
                "FALSE",
                "NOT GIVEN"
              ]
            },
            {
              "num": 12,
              "type": "TFNG",
              "text": "Most produce can be grown on an aeroponic urban farm at any time of the year.",
              "answer": "FALSE",
              "explanation": "The passage confirms that the answer is 'FALSE'.",
              "location": "Passage 1",
              "instruction": "Questions 8-13<br/>Do the following statements agree with the information given in Reading Passage 1?<br/>In boxes 813 on your answer sheet, Write<br/>TRUE if the statement agrees with the information<br/>FALSE if the statement contradicts the information<br/>NOT GIVEN _if there is no information on this",
              "options": [
                "TRUE",
                "FALSE",
                "NOT GIVEN"
              ]
            },
            {
              "num": 13,
              "type": "TFNG",
              "text": "Beans take longer to grow on an urban farm than other vegetables.",
              "answer": "NOT GIVEN",
              "explanation": "The passage confirms that the answer is 'NOT GIVEN'.",
              "location": "Passage 1",
              "instruction": "Questions 8-13<br/>Do the following statements agree with the information given in Reading Passage 1?<br/>In boxes 813 on your answer sheet, Write<br/>TRUE if the statement agrees with the information<br/>FALSE if the statement contradicts the information<br/>NOT GIVEN _if there is no information on this",
              "options": [
                "TRUE",
                "FALSE",
                "NOT GIVEN"
              ]
            }
          ]
        },
        {
          "title": "Forest management in Pennsylvania, USA",
          "text": "<h1>Forest management in Pennsylvania, USA</h1>\n<p>How managing low-quality wood (also known as low-use wood) for bioenergy can encourage sustainable forest management</p>\n<p><b>A</b> A tree's 'value' depends on several factors including its species, size, form, condition, quality, function, and accessibility, and depends on the management goals for a given forest. The same tree can be valued very differently by each person who looks at it. A large, straight black cherry tree has high value as timber to be cut into logs or made into furniture, but for a landowner more interested in wildlife habitat, the real value of that stem (or trunk) may be the food it provides to animals. Likewise, if the tree suffers from black knot disease, its value for timber decreases, but to a woodworker interested in making bowls, it brings an opportunity for a unique and beautiful piece of art.</p>\n<p><b>B</b> In the past, Pennsylvania landowners were solely interested in the value of their trees as high-quality timber. The norm was to remove the stems of highest quality and leave behind poorly formed trees that were not as well suited to the site where they grew. This practice, called 'high-grading', has left a legacy of 'low-use wood' in the forests. Some people even call these 'junk trees', and they are abundant in Pennsylvania. These trees have lower economic value for traditional timber markets, compete for growth with higher-value trees, shade out desirable regeneration and decrease the health of a stand leaving it more vulnerable to poor weather and disease. Management that specifically targets low-use wood can help landowners manage these forest health issues, and wood energy markets help promote this.</p>\n<p><b>C</b> Wood energy markets can accept less expensive wood material of lower quality than would be suitable for traditional timber markets. Most wood used for energy in Pennsylvania is used to produce heat or electricity through combustion. Many schools and hospitals use wood boiler systems to heat and power their facilities, many homes are primarily heated with wood, and some coal plants incorporate wood into their coal streams to produce electricity. Wood can also be gasified for electrical generation and can even be made into liquid fuels like ethanol and gasoline for lorries and cars. All these products are made primarily from low-use wood. Several tree- and plant-cutting approaches, which could greatly improve the long-term quality of a forest, focus strongly or solely on the use of wood for those markets.</p>\n<p><b>D</b> One such approach is called a Timber Stand Improvement (TSI) Cut. In a TSI Cut, really poor-quality tree and plant material is cut down to allow more space, light, and other resources to the highest-valued stems that remain. Removing invasive plants might be another primary goal of a TSI Cut. The stems that are left behind might then grow in size and develop more foliage and larger crowns or tops that produce more coverage for wildlife; they have a better chance to regenerate in a less crowded environment. TSI Cuts can be tailored to one landowner's specific management goals for his or her land.</p>\n<p><b>E</b> Another approach that might yield a high amount of low-use wood is a Salvage Cut. With the many pests and pathogens visiting forests including hemlock wooly adelgid, Asian longhorned beetle, emerald ash borer, and gypsy moth, to name just a few, it is important to remember that those working in the forests can help ease these issues through cutting procedures. These types of cut reduce the number of sick trees and seek to manage the future spread of a pest problem. They leave vigorous trees that have stayed healthy enough to survive the outbreak.</p>\n<p><b>F</b> A Shelterwood Cut, which only takes place in a mature forest that has already been thinned several times, involves removing all the mature trees when other seedlings have become established. This then allows the forester to decide which tree species are regenerated. It leaves a young forest where all trees are at a similar point in their growth. It can also be used to develop a two-tier forest so that there are two harvests and the money that comes in is spread out over a decade or more.</p>\n<p><b>G</b> Thinnings and dense and dead wood removal for fire prevention also center on the production of low-use wood. However, it is important to remember that some retention of what many would classify as low-use wood is very important. The tops of trees that have been cut down should be left on the site so that their nutrients cycle back into the soil. In addition, trees with many cavities are extremely important habitats for insect predators like woodpeckers, bats and small mammals. They help control problem insects and increase the health and resilience of the forest. It is also important to remember that not all small trees are low-use. For example, many species like hawthorn provide food for wildlife. Finally, rare species of trees in a forest should also stay behind as they add to its structural diversity.</p>\n<p class=\"italic text-xs border-l-2 border-stone-500 pl-3 my-4\">* Stand — An area covered with trees that have common features (e.g. size, age, or species) that make them distinct from other areas.</p>",
          "questions": [
            {
              "num": 14,
              "type": "MCQ",
              "text": "bad outcomes for a forest when people focus only on its financial reward",
              "answer": "B",
              "explanation": "The text confirms this: \"How managing low-quality wood (also known as low-use wood) for bioenergy can encourage sustainable forest management A Atree's 'value' depends on several factors including its species, size, form, condition, quality, function, and accessibility, and depends on the management goals for a given forest.\"",
              "location": "Passage 2",
              "instruction": "Questions 14-18<br/>Reading Passage 2 has seven paragraphs, A-G.<br/>Which paragraph contains the following information?<br/>Write the correct letter, A-G, in boxes 14-18 on your answer sheet.<br/>NB You may use any letter more than once.",
              "options": [
                "A. Paragraph A",
                "B. Paragraph B",
                "C. Paragraph C",
                "D. Paragraph D",
                "E. Paragraph E",
                "F. Paragraph F",
                "G. Paragraph G"
              ]
            },
            {
              "num": 15,
              "type": "MCQ",
              "text": "reference to the aspects of any tree that contribute to its worth",
              "answer": "A",
              "explanation": "The text confirms this: \"How managing low-quality wood (also known as low-use wood) for bioenergy can encourage sustainable forest management A Atree's 'value' depends on several factors including its species, size, form, condition, quality, function, and accessibility, and depends on the management goals for a given forest.\"",
              "location": "Passage 2",
              "instruction": "Questions 14-18<br/>Reading Passage 2 has seven paragraphs, A-G.<br/>Which paragraph contains the following information?<br/>Write the correct letter, A-G, in boxes 14-18 on your answer sheet.<br/>NB You may use any letter more than once.",
              "options": [
                "A. Paragraph A",
                "B. Paragraph B",
                "C. Paragraph C",
                "D. Paragraph D",
                "E. Paragraph E",
                "F. Paragraph F",
                "G. Paragraph G"
              ]
            },
            {
              "num": 16,
              "type": "MCQ",
              "text": "mention of the potential use of wood to help run vehicles",
              "answer": "C",
              "explanation": "The text confirms this: \"How managing low-quality wood (also known as low-use wood) for bioenergy can encourage sustainable forest management A Atree's 'value' depends on several factors including its species, size, form, condition, quality, function, and accessibility, and depends on the management goals for a given forest.\"",
              "location": "Passage 2",
              "instruction": "Questions 14-18<br/>Reading Passage 2 has seven paragraphs, A-G.<br/>Which paragraph contains the following information?<br/>Write the correct letter, A-G, in boxes 14-18 on your answer sheet.<br/>NB You may use any letter more than once.",
              "options": [
                "A. Paragraph A",
                "B. Paragraph B",
                "C. Paragraph C",
                "D. Paragraph D",
                "E. Paragraph E",
                "F. Paragraph F",
                "G. Paragraph G"
              ]
            },
            {
              "num": 17,
              "type": "MCQ",
              "text": "examples of insects that attack trees",
              "answer": "E",
              "explanation": "The text confirms this: \"How managing low-quality wood (also known as low-use wood) for bioenergy can encourage sustainable forest management A Atree's 'value' depends on several factors including its species, size, form, condition, quality, function, and accessibility, and depends on the management goals for a given forest.\"",
              "location": "Passage 2",
              "instruction": "Questions 14-18<br/>Reading Passage 2 has seven paragraphs, A-G.<br/>Which paragraph contains the following information?<br/>Write the correct letter, A-G, in boxes 14-18 on your answer sheet.<br/>NB You may use any letter more than once.",
              "options": [
                "A. Paragraph A",
                "B. Paragraph B",
                "C. Paragraph C",
                "D. Paragraph D",
                "E. Paragraph E",
                "F. Paragraph F",
                "G. Paragraph G"
              ]
            },
            {
              "num": 18,
              "type": "MCQ",
              "text": "an alternative name for trees that produce low-use wood",
              "answer": "B",
              "explanation": "The text confirms this: \"How managing low-quality wood (also known as low-use wood) for bioenergy can encourage sustainable forest management A Atree's 'value' depends on several factors including its species, size, form, condition, quality, function, and accessibility, and depends on the management goals for a given forest.\"",
              "location": "Passage 2",
              "instruction": "Questions 14-18<br/>Reading Passage 2 has seven paragraphs, A-G.<br/>Which paragraph contains the following information?<br/>Write the correct letter, A-G, in boxes 14-18 on your answer sheet.<br/>NB You may use any letter more than once.",
              "options": [
                "A. Paragraph A",
                "B. Paragraph B",
                "C. Paragraph C",
                "D. Paragraph D",
                "E. Paragraph E",
                "F. Paragraph F",
                "G. Paragraph G"
              ]
            },
            {
              "num": 19,
              "type": "MCQ",
              "text": "toremove trees that are diseased",
              "answer": "B",
              "explanation": "The text confirms this: \"How managing low-quality wood (also known as low-use wood) for bioenergy can encourage sustainable forest management A Atree's 'value' depends on several factors including its species, size, form, condition, quality, function, and accessibility, and depends on the management goals for a given forest.\"",
              "location": "Passage 2",
              "instruction": "Questions 19-21<br/>Look at the following purposes (Questions 19-21) and the list of timber cuts below.<br/>Match each purpose with the correct timber cut, A, B or C.<br/>Write the correct letter, A, B or C, in boxes 19-21 on your answer sheet.<br/>NB You may use any letter more than once.",
              "options": [
                "A. a TSI Cut",
                "B. a Salvage Cut",
                "C. a Shelterwood Cut"
              ]
            },
            {
              "num": 20,
              "type": "MCQ",
              "text": "to generate income across a number of years",
              "answer": "C",
              "explanation": "The text confirms this: \"How managing low-quality wood (also known as low-use wood) for bioenergy can encourage sustainable forest management A Atree's 'value' depends on several factors including its species, size, form, condition, quality, function, and accessibility, and depends on the management goals for a given forest.\"",
              "location": "Passage 2",
              "instruction": "Questions 19-21<br/>Look at the following purposes (Questions 19-21) and the list of timber cuts below.<br/>Match each purpose with the correct timber cut, A, B or C.<br/>Write the correct letter, A, B or C, in boxes 19-21 on your answer sheet.<br/>NB You may use any letter more than once.",
              "options": [
                "A. a TSI Cut",
                "B. a Salvage Cut",
                "C. a Shelterwood Cut"
              ]
            },
            {
              "num": 21,
              "type": "MCQ",
              "text": "to create a forest whose trees are close in age List of Timber Cuts",
              "answer": "C",
              "explanation": "The text confirms this: \"How managing low-quality wood (also known as low-use wood) for bioenergy can encourage sustainable forest management A Atree's 'value' depends on several factors including its species, size, form, condition, quality, function, and accessibility, and depends on the management goals for a given forest.\"",
              "location": "Passage 2",
              "instruction": "Questions 19-21<br/>Look at the following purposes (Questions 19-21) and the list of timber cuts below.<br/>Match each purpose with the correct timber cut, A, B or C.<br/>Write the correct letter, A, B or C, in boxes 19-21 on your answer sheet.<br/>NB You may use any letter more than once.",
              "options": [
                "A. a TSI Cut",
                "B. a Salvage Cut",
                "C. a Shelterwood Cut"
              ]
            },
            {
              "num": 22,
              "type": "FILL",
              "text": "Some dead wood is removed to avoid the possibility of _________ :",
              "answer": "fire",
              "explanation": "The text confirms this: \"Thinnings and dense and dead wood removal for fire prevention also center on the production of low-use wood.\"",
              "location": "Passage 2",
              "instruction": "Questions 22-26<br/>Complete the sentences below.<br/>Choose ONE WORD ONLY from the passage for each answer.<br/>Write your answers in boxes 22-26 on your answer sheet."
            },
            {
              "num": 23,
              "type": "FILL",
              "text": "The _________ from the tops of cut trees can help improve soil quality.",
              "answer": "nutrients",
              "explanation": "The text confirms this: \"The tops of trees that have been cut down should be left on the site so that their nutrients cycle back into the soil.\"",
              "location": "Passage 2",
              "instruction": "Questions 22-26<br/>Complete the sentences below.<br/>Choose ONE WORD ONLY from the passage for each answer.<br/>Write your answers in boxes 22-26 on your answer sheet."
            },
            {
              "num": 24,
              "type": "FILL",
              "text": "Some damaged trees should be left, as their _________ provide habitats for a range of creatures.",
              "answer": "cavities",
              "explanation": "The text confirms this: \"In addition, trees with many cavities are extremely important habitats for insect predators like woodpeckers, bats and small mammals.\"",
              "location": "Passage 2",
              "instruction": "Questions 22-26<br/>Complete the sentences below.<br/>Choose ONE WORD ONLY from the passage for each answer.<br/>Write your answers in boxes 22-26 on your answer sheet."
            },
            {
              "num": 25,
              "type": "FILL",
              "text": "Some trees that are small, such as _________ , are a source of food for animals and insects.",
              "answer": "hawthorn",
              "explanation": "The text confirms this: \"For example, many species like hawthorn provide food for wildlife.\"",
              "location": "Passage 2",
              "instruction": "Questions 22-26<br/>Complete the sentences below.<br/>Choose ONE WORD ONLY from the passage for each answer.<br/>Write your answers in boxes 22-26 on your answer sheet."
            },
            {
              "num": 26,
              "type": "FILL",
              "text": "Any trees that are _________ should be left to grow, as they add to the variety of species in the forest.",
              "answer": "rare",
              "explanation": "The text confirms this: \"Finally, rare species of trees in a forest should also stay behind as they add to its structural diversity.\"",
              "location": "Passage 2",
              "instruction": "Questions 22-26<br/>Complete the sentences below.<br/>Choose ONE WORD ONLY from the passage for each answer.<br/>Write your answers in boxes 22-26 on your answer sheet."
            }
          ]
        },
        {
          "title": "Conquering Earth's space junk problem",
          "text": "<h1>Conquering Earth's space junk problem</h1>\n<p>Satellites, rocket shards and debris are creating major traffic risks in orbit around the planet. Researchers are working to reduce these threats.</p>\n<p><b>A</b> Last year, commercial companies, military and civil departments and amateurs sent more than 400 satellites into orbit, over four times the yearly average in the previous decade. Numbers could rise even more sharply if leading space companies follow through on plans to deploy hundreds to thousands of large constellations of satellites to space in the next few years.</p>\n<p>All that traffic can lead to disaster. Ten years ago, a US commercial Iridium satellite smashed into an inactive Russian communications satellite called Cosmos-2251, creating thousands of new pieces of space shrapnel that now threaten other satellites in low Earth orbit — the zone stretching up to 2,000 kilometres in altitude. Altogether, there are roughly 20,000 human-made objects in orbit, from working satellites to small rocket pieces. And satellite operators can't steer away from every potential crash, because each move consumes time and fuel that could otherwise be used for the spacecraft's main job.</p>\n<p><b>B</b> Concern about space junk goes back to the beginning of the satellite era, but the number of objects in orbit is rising so rapidly that researchers are investigating new ways of attacking the problem. Several teams are trying to improve methods for assessing what is in orbit, so that satellite operators can work more efficiently in ever-more-crowded space. Some researchers are now starting to compile a massive data set that includes the best possible information on where everything is in orbit. Others are developing taxonomies of space debris — working on measuring properties such as the shape and size of an object, so that satellite operators know how much to worry about what's coming their way.</p>\n<p>The alternative, many say, is unthinkable. Just a few uncontrolled space crashes could generate enough debris to set off a runaway cascade of fragments, rendering near-Earth space unusable. \"If we go on like this, we will reach a point of no return,\" says Carolin Frueh, an astrodynamical researcher at Purdue University in West Lafayette, Indiana.</p>\n<p><b>C</b> Even as our ability to monitor space objects increases, so too does the total number of items in orbit. That means companies, governments and other players in space are collaborating in new ways to avoid a shared threat. International groups such as the Inter-Agency Space Debris Coordination Committee have developed guidelines on space sustainability. Those include inactivating satellites at the end of their useful life by venting pressurised materials or leftover fuel that might lead to explosions. The intergovernmental groups also advise lowering satellites deep enough into the atmosphere that they will burn up or disintegrate within 25 years. But so far, only about half of all missions have abided by this 25-year goal, says Holger Krag, head of the European Space Agency's space-debris office in Darmstadt, Germany. Operators of the planned large constellations of satellites say they will be responsible stewards in their enterprises in space, but Krag worries that problems could increase, despite their best intentions. \"What happens to those that fail or go bankrupt?\" he asks. \"They are probably not going to spend money to remove their satellites from space.\"</p>\n<p><b>D</b> In theory, given the vastness of space, satellite operators should have plenty of room for all these missions to fly safely without ever nearing another object. So some scientists are tackling the problem of space junk by trying to find out where all the debris is to a high degree of precision. That would alleviate the need for many of the unnecessary manoeuvres that are carried out to avoid potential collisions. \"If you knew precisely where everything was, you would almost never have a problem,\" says Marlon Sorge, a space-debris specialist at the Aerospace Corporation in El Segundo, California.</p>\n<p><b>E</b> The field is called space traffic management, because it's similar to managing traffic on the roads or in the air. Think about a busy day at an airport, says Moriba Jah, an astrodynamicist at the University of Texas at Austin: planes line up in the sky, landing and taking off close to one another in a carefully choreographed routine. Air-traffic controllers know the location of the planes down to one metre in accuracy. The same can't be said for space debris. Not all objects in orbit are known, and even those included in databases are not tracked consistently.</p>\n<p><b>F</b> An additional problem is that there is no authoritative catalogue that accurately lists the orbits of all known space debris. Jah illustrates this with a web-based database that he has developed. It draws on several sources, such as catalogues maintained by the US and Russian governments, to visualise where objects are in space. When he types in an identifier for a particular space object, the database draws a purple line to designate its orbit. Only this doesn't quite work for a number of objects, such as a Russian rocket body designated in the database as object number 32280. When Jah enters that number, the database draws two purple lines: the US and Russian sources contain two completely different orbits for the same object. Jah says that it is almost impossible to tell which is correct, unless a third source of information made it possible to cross-correlate.</p>\n<p>Jah describes himself as a space environmentalist: \"I want to make space a place that is safe to operate, that is free and useful for generations to come.\" Until that happens, he argues, the space community will continue devolving into a tragedy in which all spaceflight operators are polluting a common resource.</p>",
          "questions": [
            {
              "num": 27,
              "type": "MCQ",
              "text": "areference to the cooperation that takes place to try and minimise risk",
              "answer": "C",
              "explanation": "The text confirms this: \"Satellites, rocket shards and collision debris are creating major traffic risks in orbit around the planet.\"",
              "location": "Passage 3",
              "instruction": "Questions 27-31<br/>Reading Passage 3 has six sections, A-F.<br/>Which section contains the following information?<br/>Write the correct letter, A-F, in boxes 27-31 on your answer sheet.",
              "options": [
                "A. Section A",
                "B. Section B",
                "C. Section C",
                "D. Section D",
                "E. Section E",
                "F. Section F"
              ]
            },
            {
              "num": 28,
              "type": "MCQ",
              "text": "an explanation of a person's aims",
              "answer": "F",
              "explanation": "The text confirms this: \"Satellites, rocket shards and collision debris are creating major traffic risks in orbit around the planet.\"",
              "location": "Passage 3",
              "instruction": "Questions 27-31<br/>Reading Passage 3 has six sections, A-F.<br/>Which section contains the following information?<br/>Write the correct letter, A-F, in boxes 27-31 on your answer sheet.",
              "options": [
                "A. Section A",
                "B. Section B",
                "C. Section C",
                "D. Section D",
                "E. Section E",
                "F. Section F"
              ]
            },
            {
              "num": 29,
              "type": "MCQ",
              "text": "adescription of a major collision that occurred in space",
              "answer": "A",
              "explanation": "The text confirms this: \"Satellites, rocket shards and collision debris are creating major traffic risks in orbit around the planet.\"",
              "location": "Passage 3",
              "instruction": "Questions 27-31<br/>Reading Passage 3 has six sections, A-F.<br/>Which section contains the following information?<br/>Write the correct letter, A-F, in boxes 27-31 on your answer sheet.",
              "options": [
                "A. Section A",
                "B. Section B",
                "C. Section C",
                "D. Section D",
                "E. Section E",
                "F. Section F"
              ]
            },
            {
              "num": 30,
              "type": "MCQ",
              "text": "acomparison between tracking objects in space and the efficiency of a . transportation system",
              "answer": "E",
              "explanation": "The text confirms this: \"Satellites, rocket shards and collision debris are creating major traffic risks in orbit around the planet.\"",
              "location": "Passage 3",
              "instruction": "Questions 27-31<br/>Reading Passage 3 has six sections, A-F.<br/>Which section contains the following information?<br/>Write the correct letter, A-F, in boxes 27-31 on your answer sheet.",
              "options": [
                "A. Section A",
                "B. Section B",
                "C. Section C",
                "D. Section D",
                "E. Section E",
                "F. Section F"
              ]
            },
            {
              "num": 31,
              "type": "MCQ",
              "text": "areference to efforts to classify space junk",
              "answer": "B",
              "explanation": "The text confirms this: \"Satellites, rocket shards and collision debris are creating major traffic risks in orbit around the planet.\"",
              "location": "Passage 3",
              "instruction": "Questions 27-31<br/>Reading Passage 3 has six sections, A-F.<br/>Which section contains the following information?<br/>Write the correct letter, A-F, in boxes 27-31 on your answer sheet.",
              "options": [
                "A. Section A",
                "B. Section B",
                "C. Section C",
                "D. Section D",
                "E. Section E",
                "F. Section F"
              ]
            },
            {
              "num": 32,
              "type": "FILL",
              "text": "The committee gives advice on how the _________ of space can be achieved.",
              "answer": "sustainability",
              "explanation": "The text confirms this: \"International groups such as the Inter-Agency Space Debris Coordination Committee have developed guidelines on space sustainability.\"",
              "location": "Passage 3",
              "instruction": "Questions 32-35<br/>Complete the summary below.<br/>Choose ONE WORD ONLY from the passage for each answer.<br/>Write your answers in boxes 32—35 on your answer sheet.<br/>The Inter-Agency Space Debris Coordination Committee<br/>The committee gives advice on how the 32 of space can be<br/>achieved. The committee advises that when satellites are no longer active, any<br/>unused 33 or pressurised material that could cause 34<br/>should be removed.<br/>Although operators of large satellite constellations accept that they have obligations<br/>as stewards of space, Holger Krag points out that the operators that become 35<br/>are unlikely to prioritise removing their satellites from space."
            },
            {
              "num": 33,
              "type": "FILL",
              "text": "The committee advises that when satellites are no longer active, any unused _________",
              "answer": "fuel",
              "explanation": "The text confirms this: \"And satellite operators can't steer away from every potential crash, because each move consumes time and fuel that could otherwise be used for the spacecraft's main job.\"",
              "location": "Passage 3",
              "instruction": "Questions 32-35<br/>Complete the summary below.<br/>Choose ONE WORD ONLY from the passage for each answer.<br/>Write your answers in boxes 32—35 on your answer sheet.<br/>The Inter-Agency Space Debris Coordination Committee<br/>The committee gives advice on how the 32 of space can be<br/>achieved. The committee advises that when satellites are no longer active, any<br/>unused 33 or pressurised material that could cause 34<br/>should be removed.<br/>Although operators of large satellite constellations accept that they have obligations<br/>as stewards of space, Holger Krag points out that the operators that become 35<br/>are unlikely to prioritise removing their satellites from space."
            },
            {
              "num": 34,
              "type": "FILL",
              "text": "or pressurised material that could cause _________ should be removed.",
              "answer": "explosions",
              "explanation": "The text confirms this: \"Those include inactivating satellites at the end of their useful life by venting pressurised materials or leftover fuel that might lead to explosions.\"",
              "location": "Passage 3",
              "instruction": "Questions 32-35<br/>Complete the summary below.<br/>Choose ONE WORD ONLY from the passage for each answer.<br/>Write your answers in boxes 32—35 on your answer sheet.<br/>The Inter-Agency Space Debris Coordination Committee<br/>The committee gives advice on how the 32 of space can be<br/>achieved. The committee advises that when satellites are no longer active, any<br/>unused 33 or pressurised material that could cause 34<br/>should be removed.<br/>Although operators of large satellite constellations accept that they have obligations<br/>as stewards of space, Holger Krag points out that the operators that become 35<br/>are unlikely to prioritise removing their satellites from space."
            },
            {
              "num": 35,
              "type": "FILL",
              "text": "Although operators of large satellite constellations accept that they have obligations as stewards of space, Holger Krag points out that the operators that become _________ are unlikely to prioritise removing their satellites from space.",
              "answer": "bankrupt",
              "explanation": "The text confirms this: \"'What happens to those that fail or go bankrupt.\"",
              "location": "Passage 3",
              "instruction": "Questions 32-35<br/>Complete the summary below.<br/>Choose ONE WORD ONLY from the passage for each answer.<br/>Write your answers in boxes 32—35 on your answer sheet.<br/>The Inter-Agency Space Debris Coordination Committee<br/>The committee gives advice on how the 32 of space can be<br/>achieved. The committee advises that when satellites are no longer active, any<br/>unused 33 or pressurised material that could cause 34<br/>should be removed.<br/>Although operators of large satellite constellations accept that they have obligations<br/>as stewards of space, Holger Krag points out that the operators that become 35<br/>are unlikely to prioritise removing their satellites from space."
            },
            {
              "num": 36,
              "type": "MCQ",
              "text": "Knowing the exact location of space junk would help prevent any possible danger.",
              "answer": "C",
              "explanation": "The text confirms this: \"Satellites, rocket shards and collision debris are creating major traffic risks in orbit around the planet.\"",
              "location": "Passage 3",
              "instruction": "Questions 36-40<br/>Look at the following statements (Questions 36—40) and the list of people below.<br/>Match each statement with the correct person, A, B, C or D.<br/>Write the correct letter, A, B, C or D, in boxes 36-40 on your answer sheet.<br/>NB You may use any letter more than once.",
              "options": [
                "A. Carolin Frueh",
                "B. - Holger Krag",
                "C. Marlon Sorge",
                "D. Moriba Jah"
              ]
            },
            {
              "num": 37,
              "type": "MCQ",
              "text": "Space should be available to everyone and should be preserved for the future.",
              "answer": "D",
              "explanation": "The text confirms this: \"Satellites, rocket shards and collision debris are creating major traffic risks in orbit around the planet.\"",
              "location": "Passage 3",
              "instruction": "Questions 36-40<br/>Look at the following statements (Questions 36—40) and the list of people below.<br/>Match each statement with the correct person, A, B, C or D.<br/>Write the correct letter, A, B, C or D, in boxes 36-40 on your answer sheet.<br/>NB You may use any letter more than once.",
              "options": [
                "A. Carolin Frueh",
                "B. - Holger Krag",
                "C. Marlon Sorge",
                "D. Moriba Jah"
              ]
            },
            {
              "num": 38,
              "type": "MCQ",
              "text": "Arecommendation regarding satellites is widely ignored.",
              "answer": "B",
              "explanation": "The text confirms this: \"Satellites, rocket shards and collision debris are creating major traffic risks in orbit around the planet.\"",
              "location": "Passage 3",
              "instruction": "Questions 36-40<br/>Look at the following statements (Questions 36—40) and the list of people below.<br/>Match each statement with the correct person, A, B, C or D.<br/>Write the correct letter, A, B, C or D, in boxes 36-40 on your answer sheet.<br/>NB You may use any letter more than once.",
              "options": [
                "A. Carolin Frueh",
                "B. - Holger Krag",
                "C. Marlon Sorge",
                "D. Moriba Jah"
              ]
            },
            {
              "num": 39,
              "type": "MCQ",
              "text": "There is conflicting information about where some satellites are in space.",
              "answer": "D",
              "explanation": "The text confirms this: \"Satellites, rocket shards and collision debris are creating major traffic risks in orbit around the planet.\"",
              "location": "Passage 3",
              "instruction": "Questions 36-40<br/>Look at the following statements (Questions 36—40) and the list of people below.<br/>Match each statement with the correct person, A, B, C or D.<br/>Write the correct letter, A, B, C or D, in boxes 36-40 on your answer sheet.<br/>NB You may use any letter more than once.",
              "options": [
                "A. Carolin Frueh",
                "B. - Holger Krag",
                "C. Marlon Sorge",
                "D. Moriba Jah"
              ]
            },
            {
              "num": 40,
              "type": "MCQ",
              "text": "There is a risk we will not be able to undo the damage that occurs in space.",
              "answer": "A",
              "explanation": "The text confirms this: \"Satellites, rocket shards and collision debris are creating major traffic risks in orbit around the planet.\"",
              "location": "Passage 3",
              "instruction": "Questions 36-40<br/>Look at the following statements (Questions 36—40) and the list of people below.<br/>Match each statement with the correct person, A, B, C or D.<br/>Write the correct letter, A, B, C or D, in boxes 36-40 on your answer sheet.<br/>NB You may use any letter more than once.",
              "options": [
                "A. Carolin Frueh",
                "B. - Holger Krag",
                "C. Marlon Sorge",
                "D. Moriba Jah"
              ]
            }
          ]
        }
      ]
    },
    "writing": {
      "task1": {
        "prompt": "The graph below gives information about the percentage of the population in four Asian countries living in cities from 1970 to 2020, with predictions for 2030 and 2040.",
        "image": "<img src=\"images/writing_t1_p1.png\" class=\"max-w-full h-auto mx-auto rounded-xl shadow-lg border border-white/10 bg-white\" alt=\"Writing Task 1 Graph\" />",
        "modelAnswer": "The line graph compares the percentage of the population residing in cities in four Asian countries—the Philippines, Malaysia, Thailand, and Indonesia—between 1970 and 2020, with projected figures provided for 2030 and 2040. Overall, it is clear that the proportion of city dwellers in all four nations has increased and is expected to continue rising through to 2040. Malaysia is projected to have the highest percentage of urban residents by the end of the period, while Indonesia shows the most notable growth trajectory."
      },
      "task2": {
        "prompt": "The most important aim of science should be to improve people's lives. To what extent do you agree or disagree with this statement?",
        "modelAnswer": "TASK 2"
      }
    }
  },
  "2": {
    "title": "Cambridge IELTS 18 — Test 2",
    "book": "IELTS 18",
    "listening": {
      "sections": [
        {
          "id": 1,
          "title": "Part 1: Real Practice",
          "description": "Official IELTS 18 Test 2 Listening Part 1.",
          "audio": "audio/IELTS_18_Test_2_Part1.m4a",
          "transcript": "<p><b>WOMAN:</b> </p><p><b>MAN:</b> </p><p><b>WOMAN:</b> </p><p><b>MAN:</b> </p><p><b>WOMAN:</b> </p><p><b>MAN:</b> </p><p><b>WOMAN:</b> </p><p><b>MAN:</b> </p><p><b>WOMAN:</b> </p><p><b>MAN:</b> </p><p><b>WOMAN:</b> </p><p><b>MAN:</b> </p><p><b>WOMAN:</b> </p><p><b>MAN:</b> </p><p><b>WOMAN:</b> </p><p><b>MAN:</b> </p><p>104</p><p>So, | understand you're interested in restaurant work?</p><p>Yes. I've got a bit of experience and | can provide references.</p><p>That's good. | can check all that later. Now, Milo's Restaurants have some</p><p>vacancies at the moment. They're a really good company to work for. Lots of</p><p>benefits.</p><p>Oh right.</p><p>Yes. They've got a very good reputation for looking after staff. For example,</p><p>all employees get training — even temporary staff.</p><p>Oh really? That's quite unusual, isn't it?</p><p>Certainly is.</p><p>And do staff get free uniforms too?</p><p>Um ... you just need to wear a white T-shirt and black trousers, it says here. So</p><p>| guess not ... But another benefit of working for a big company like this is that</p><p>you can get a discount at any of their restaurants.</p><p>Even at weekends?</p><p>No, but you'll be working then anyway.</p><p>Oh yes. | suppose so. Most of their restaurants are in the city centre, aren't they?</p><p>So, easy to get to by bus?</p><p>Yes. That's right. But if you have to do a late shift and finish work after midnight.</p><p>the company will pay for you to get a taxi home.</p><p>| probably won't need one. | think I'd use my bike.</p><p>OK. Now, they do have some quite specific requirements for the kind of person</p><p>they're looking for. Milo's is a young, dynamic company and they're really keen</p><p>on creating a strong team. It's really important that you can fit in and get on well</p><p>with everyone.</p><p>Yeah. I've got no problem with that. It sounds good, actually. The last place |</p><p>worked for was quite demanding too. We had to make sure we gave a really high</p><p>level of service.</p><p>That's good to hear because that will be equally important at Milo's. | know they</p><p>want people who have an eye for detail.</p><p>That's fine. I'm very used to working in that kind of environment.</p><p>Perfect. So the only other thing that's required is good communication skills, so</p><p>you'll need to have a certificate in English.</p><p>Sure.</p><p>OK. Let's have a look at the current job vacancies at Milo's. The first one is in</p><p>Wivenhoe Street.</p><p>Sorry, where?</p><p>Wivenhoe. W-I-V-E-N-H-O-E. It's quite central, just off Cork Street.</p><p>Oh right.</p><p>They're looking for a breakfast supervisor.</p><p>That would be OK.</p><p>So you're probably familiar with the kind of responsibilities involved. Obviously</p><p>checking that all the portions are correct, etc., and then things like checking all</p><p>the procedures for cleaning the equipment are being followed.</p><p>Q1</p><p>Q2</p><p>Q3</p><p>Q4</p><p>Q5</p><p>Q6</p><p>Q7</p><p><b>MAN:</b> OK. And what about the salary? In my last job | was getting £9.50 per hour. | was</p><p>hoping to get a bit more than that.</p><p><b>WOMAN:</b> Well, to begin with, you'd be getting £9.75 but that goes up to £11.25 after three</p><p>months.</p><p><b>MAN:</b> That's not too bad. And | suppose it's a very early start?</p><p><b>WOMAN:</b> Mmm. That's the only unattractive thing about this job. But then you have the</p><p>afternoons and evenings free. So the restaurant starts serving breakfast from</p><p>7 a.m. And you'd have to be there at 5.30 to set everything up. But you'd be</p><p>finished at 12.30.</p><p><b>MAN:</b> Mmm. Well, as you say, there are advantages to that.</p><p><b>WOMAN:</b> Now, you might also be interested in the job at the City Road branch. That's for a</p><p>junior chef, so again a position of responsibility.</p><p><b>MAN:</b> | might prefer that, actually.</p><p><b>WOMAN:</b> Right, well obviously this role would involve supporting the sous chef and other</p><p>senior staff. And you'd be responsible for making sure there's enough stock each</p><p>week — and sorting out all the deliveries.</p><p><b>MAN:</b> I've never done that before, but | imagine it's fairly straightforward, once you get</p><p>the hang of it.</p><p><b>WOMAN:</b> Yes, and you'd be working alongside more experienced staff to begin with, so</p><p>I'm sure it wouldn't be a problem. The salary's slightly higher here. It's an annual</p><p>salary of £23,000.</p><p><b>MAN:</b> Right.</p><p><b>WOMAN:</b> | know that if they like you, it's likely you'll be promoted quite quickly. So that's</p><p>worth thinking about.</p><p><b>MAN:</b> Yes. It does sound interesting. What are the hours like?</p><p><b>WOMAN:</b> The usual, | think. There's a lot of evening and weekend work, but they're closed</p><p>on Mondays. But you do get one Sunday off every four weeks. So would you like</p><p>me to send off your ...</p>",
          "questions": [
            {
              "num": 1,
              "type": "FILL",
              "text": "_________ provided for all staff.",
              "answer": "training",
              "explanation": "The transcript states: \"For example, all employees get training — even temporary staff.\"",
              "instruction": "Questions 1-5<br/>Complete the notes below.<br/>Write ONE WORD ONLY for each answer."
            },
            {
              "num": 2,
              "type": "FILL",
              "text": "_________ during weekdays at all Milo's Restaurants.",
              "answer": "discount",
              "explanation": "The transcript states: \"But another benefit of working for a big company like this is that you can get a discount at any of their restaurants.\"",
              "instruction": "Questions 1-5<br/>Complete the notes below.<br/>Write ONE WORD ONLY for each answer."
            },
            {
              "num": 3,
              "type": "FILL",
              "text": "_________ provided after midnight.",
              "answer": "taxi",
              "explanation": "The transcript states: \"the company will pay for you to get a taxi home.\"",
              "instruction": "Questions 1-5<br/>Complete the notes below.<br/>Write ONE WORD ONLY for each answer."
            },
            {
              "num": 4,
              "type": "FILL",
              "text": "Candidate must care about maintaining a high standard of _________.",
              "answer": "service",
              "explanation": "The transcript states: \"We had to make sure we gave a really high level of service.\"",
              "instruction": "Questions 1-5<br/>Complete the notes below.<br/>Write ONE WORD ONLY for each answer."
            },
            {
              "num": 5,
              "type": "FILL",
              "text": "Candidate must have a certificate in _________.",
              "answer": "English",
              "explanation": "The transcript states: \"So the only other thing that's required is good communication skills, so you'll need to have a certificate in English.\"",
              "instruction": "Questions 1-5<br/>Complete the notes below.<br/>Write ONE WORD ONLY for each answer."
            },
            {
              "num": 6,
              "type": "FILL",
              "text": "The first vacancy is for a breakfast supervisor in _________ Street.",
              "answer": "Wivenhoe",
              "explanation": "The transcript states: \"The first one is in Wivenhoe Street.\"",
              "instruction": "Questions 6-10<br/>Complete the table below.<br/>Write ONE WORD AND/OR A NUMBER for each answer."
            },
            {
              "num": 7,
              "type": "FILL",
              "text": "Responsibilities include checking the procedures for cleaning the _________.",
              "answer": "equipment",
              "explanation": "The transcript states: \", and then things like checking all the procedures for cleaning the equipment are being followed.\"",
              "instruction": "Questions 6-10<br/>Complete the table below.<br/>Write ONE WORD AND/OR A NUMBER for each answer."
            },
            {
              "num": 8,
              "type": "FILL",
              "text": "The starting salary is £_________ per hour.",
              "answer": "9.75",
              "explanation": "The transcript confirms the answer is '9.75'.",
              "instruction": "Questions 6-10<br/>Complete the table below.<br/>Write ONE WORD AND/OR A NUMBER for each answer."
            },
            {
              "num": 9,
              "type": "FILL",
              "text": "The junior chef will be responsible for stock and sorting out all the _________.",
              "answer": "deliveries",
              "explanation": "The transcript states: \"And you'd be responsible for making sure there's enough stock each week — and sorting out all the deliveries.\"",
              "instruction": "Questions 6-10<br/>Complete the table below.<br/>Write ONE WORD AND/OR A NUMBER for each answer."
            },
            {
              "num": 10,
              "type": "FILL",
              "text": "The branch is closed on Mondays, but staff get one _________ off every four weeks.",
              "answer": "Sunday",
              "explanation": "The transcript states: \"But you do get one Sunday off every four weeks.\"",
              "instruction": "Questions 6-10<br/>Complete the table below.<br/>Write ONE WORD AND/OR A NUMBER for each answer."
            }
          ]
        },
        {
          "id": 2,
          "title": "Part 2: Real Practice",
          "description": "Official IELTS 18 Test 2 Listening Part 2.",
          "audio": "audio/IELTS_18_Test_2_Part2.m4a",
          "transcript": "<p>Hello everyone. It's good to see that so many members of the public have shown up for our</p><p>presentation on the new housing development planned on the outskirts of Nunston. I'm Mark</p><p>Reynolds and I'm Communications Manager at the development.</p><p>I'll start by giving you a brief overview of our plans for the development. So one thing I'm sure</p><p>you'll want to know is why we've selected this particular site for a housing development. At</p><p>present it's being used for farming, like much of the land around Nunston. But because of</p><p>the new industrial centre in Nunston, there's a lot of demand for housing for employees in</p><p>the region, as many employees are having to commute long distances at present. Of course,</p><p>there's also the fact that we have an international airport just 20 minutes' drive away, but</p><p>although that's certainly convenient, it wasn't one of our major criteria for choosing the site.</p><p>We were more interested in the fact that there's an excellent hospital just 15 kilometres away.</p><p>and a large secondary school even closer than that. One drawback to the site is that it's</p><p>on quite a steep slope, but we've taken account of that in our planning so it shouldn't be a</p><p>major problem.</p><p>We've had a lot of positive feedback about the plans. People like the wide variety of</p><p>accommodation types and prices, and the fact that it's only a short drive to get out into the</p><p>countryside from the development. We were particularly pleased that so many people liked</p><p>Test 2</p><p>Q8</p><p>Q9</p><p>Q10</p><p>Q11/12</p><p>Q11/12</p><p>105</p><p>the designs for the layout of the development, with the majority of people saying it generally</p><p>made a good impression and blended in well with the natural features of the landscape. with</p><p>provision made for protecting trees and wildlife on the site. Some people have mentioned that</p><p>they'd like to see more facilities for cyclists, and we'll look at that, but the overall feedback</p><p>has been that the design and facilities of the development make it seem a place where</p><p>people of all ages can live together happily.</p><p>OK. So I'll put a map of the proposed development up on the screen. You'll see it's bounded</p><p>on the south side by the main road, which then goes on to Nunston. Another boundary is</p><p>formed by London Road, on the western side of the development. Inside the development</p><p>there'll be about 400 houses and 3 apartment blocks.</p><p>There'll also be a school for children up to 11 years old. If you look at the South Entrance at</p><p>the bottom of the map, there's a road from there that goes right up through the development.</p><p>The school will be on that road, at the corner of the second turning to the left.</p><p>A large sports centre is planned with facilities for indoor and outdoor activities. This will</p><p>be on the western side of the development, just below the road that branches off from</p><p>London Road.</p><p>There'll be a clinic where residents can go if they have any health problems. Can you see</p><p>the lake towards the top of the map? The clinic will be just below this, to the right of a street</p><p>of houses.</p><p>There'll also be a community centre for people of all ages. On the northeast side of the</p><p>development. there'll be a row of specially designed houses specifically for residents over 65,</p><p>and the community centre will be adjoining this.</p><p>We haven't forgotten about shopping. There'll be a supermarket between the two entrances</p><p>to the development. We're planning to leave the three large trees near London Road, and it'll</p><p>be just to the south of these.</p><p>It's planned to have a playground for younger children. If you look at the road that goes up</p><p>from the South Entrance, you'll see it curves round to the left at the top. and the playground</p><p>will be in that curve, with nice views of the lake.</p><p>OK, so now does anyone ...</p>",
          "questions": [
            {
              "num": 11,
              "type": "MCQ",
              "text": "What are the TWO main reasons why this site was chosen? (Select first reason)",
              "answer": "B",
              "explanation": "The transcript states: \"It's good to see that so many members of the public have shown up for our presentation on the new housing development planned on the outskirts of Nunston.\"",
              "instruction": "Questions 11 and 12<br/>Choose TWO letters, A-E.",
              "options": [
                "A. It is close to the city centre.",
                "B. It is near a river.",
                "C. It is on land that was previously used for farming.",
                "D. It has good public transport links.",
                "E. It is in an area with a large population."
              ]
            },
            {
              "num": 12,
              "type": "MCQ",
              "text": "What are the TWO main reasons why this site was chosen? (Select second reason)",
              "answer": "E",
              "explanation": "The transcript states: \"It's good to see that so many members of the public have shown up for our presentation on the new housing development planned on the outskirts of Nunston.\"",
              "instruction": "Questions 11 and 12<br/>Choose TWO letters, A-E.",
              "options": [
                "A. It is close to the city centre.",
                "B. It is near a river.",
                "C. It is on land that was previously used for farming.",
                "D. It has good public transport links.",
                "E. It is in an area with a large population."
              ]
            },
            {
              "num": 13,
              "type": "MCQ",
              "text": "Which TWO aspects of the planned housing development does the speaker mention? (Select first aspect)",
              "answer": "B",
              "explanation": "The transcript states: \"It's good to see that so many members of the public have shown up for our presentation on the new housing development planned on the outskirts of Nunston.\"",
              "instruction": "Questions 13 and 14<br/>Choose TWO letters, A-E.",
              "options": [
                "A. The houses will be cheap to heat.",
                "B. The houses will be built of brick.",
                "C. The houses will be suitable for families.",
                "D. The houses will have large gardens.",
                "E. The houses will be constructed off-site."
              ]
            },
            {
              "num": 14,
              "type": "MCQ",
              "text": "Which TWO aspects of the planned housing development does the speaker mention? (Select second aspect)",
              "answer": "E",
              "explanation": "The transcript states: \"It's good to see that so many members of the public have shown up for our presentation on the new housing development planned on the outskirts of Nunston.\"",
              "instruction": "Questions 13 and 14<br/>Choose TWO letters, A-E.",
              "options": [
                "A. The houses will be cheap to heat.",
                "B. The houses will be built of brick.",
                "C. The houses will be suitable for families.",
                "D. The houses will have large gardens.",
                "E. The houses will be constructed off-site."
              ]
            },
            {
              "num": 15,
              "type": "MCQ",
              "text": "Identify location for: West Entrance",
              "answer": "B",
              "explanation": "The transcript states: \"It's good to see that so many members of the public have shown up for our presentation on the new housing development planned on the outskirts of Nunston.\"",
              "instruction": "Questions 15-20<br/>Label the map below.<br/>Write the correct letter, A-I, next to Questions 15-20.",
              "options": [
                "A",
                "B",
                "C",
                "D",
                "E",
                "F",
                "G",
                "H",
                "I"
              ]
            },
            {
              "num": 16,
              "type": "MCQ",
              "text": "Identify location for: Housing for the elderly",
              "answer": "C",
              "explanation": "The transcript states: \"It's good to see that so many members of the public have shown up for our presentation on the new housing development planned on the outskirts of Nunston.\"",
              "instruction": "Questions 15-20<br/>Label the map below.<br/>Write the correct letter, A-I, next to Questions 15-20.",
              "options": [
                "A",
                "B",
                "C",
                "D",
                "E",
                "F",
                "G",
                "H",
                "I"
              ]
            },
            {
              "num": 17,
              "type": "MCQ",
              "text": "Identify location for: Primary school",
              "answer": "G",
              "explanation": "The transcript states: \"It's good to see that so many members of the public have shown up for our presentation on the new housing development planned on the outskirts of Nunston.\"",
              "instruction": "Questions 15-20<br/>Label the map below.<br/>Write the correct letter, A-I, next to Questions 15-20.",
              "options": [
                "A",
                "B",
                "C",
                "D",
                "E",
                "F",
                "G",
                "H",
                "I"
              ]
            },
            {
              "num": 18,
              "type": "MCQ",
              "text": "Identify location for: Sports centre",
              "answer": "C",
              "explanation": "The transcript states: \"It's good to see that so many members of the public have shown up for our presentation on the new housing development planned on the outskirts of Nunston.\"",
              "instruction": "Questions 15-20<br/>Label the map below.<br/>Write the correct letter, A-I, next to Questions 15-20.",
              "options": [
                "A",
                "B",
                "C",
                "D",
                "E",
                "F",
                "G",
                "H",
                "I"
              ]
            },
            {
              "num": 19,
              "type": "MCQ",
              "text": "Identify location for: Health centre",
              "answer": "D",
              "explanation": "The transcript states: \"It's good to see that so many members of the public have shown up for our presentation on the new housing development planned on the outskirts of Nunston.\"",
              "instruction": "Questions 15-20<br/>Label the map below.<br/>Write the correct letter, A-I, next to Questions 15-20.",
              "options": [
                "A",
                "B",
                "C",
                "D",
                "E",
                "F",
                "G",
                "H",
                "I"
              ]
            },
            {
              "num": 20,
              "type": "MCQ",
              "text": "Identify location for: Shop",
              "answer": "B",
              "explanation": "The transcript states: \"It's good to see that so many members of the public have shown up for our presentation on the new housing development planned on the outskirts of Nunston.\"",
              "instruction": "Questions 15-20<br/>Label the map below.<br/>Write the correct letter, A-I, next to Questions 15-20.",
              "options": [
                "A",
                "B",
                "C",
                "D",
                "E",
                "F",
                "G",
                "H",
                "I"
              ]
            }
          ]
        },
        {
          "id": 3,
          "title": "Part 3: Real Practice",
          "description": "Official IELTS 18 Test 2 Listening Part 3.",
          "audio": "audio/IELTS_18_Test_2_Part3.m4a",
          "transcript": "<p><b>ADAM:</b> So, Michelle, shall we make a start on our presentation? We haven't got that</p><p>much time left.</p><p><b>MICHELLE:</b> | No, Adam. But at least we've done all the background reading. | found it really</p><p>interesting — I'd never even heard of the Laki eruption before this.</p><p><b>ADAM:</b> Me neither. | suppose 1783 is a long time ago.</p><p><b>MICHELLE:</b> | But it was a huge eruption and it had such devastating consequences.</p><p><b>ADAM:</b> | know. It was great there were so many primary sources to look at. It really gives</p><p>you a sense of how catastrophic the volcano was. People were really trying to</p><p>make sense of the science for the first time.</p><p><b>MICHELLE:</b> That's right. But what | found more significant was how it impacted directly and</p><p>indirectly on political events, as well as having massive social and economic</p><p>consequences.</p><p>106</p><p>Q13/14</p><p>Q13/14</p><p>Q15</p><p>Q16</p><p>Q17</p><p>Q18</p><p>Q19</p><p>Q20</p><p>Q21</p><p><b>ADAM:</b> </p><p><b>MICHELLE:</b> </p><p><b>ADAM:</b> </p><p>* MICHELLE?!</p><p><b>ADAM:</b> </p><p><b>MICHELLE:</b> </p><p><b>ADAM:</b> </p><p><b>MICHELLE:</b> </p><p><b>ADAM:</b> </p><p><b>MICHELLE:</b> </p><p><b>ADAM:</b> </p><p><b>MICHELLE:</b> </p><p><b>ADAM:</b> </p><p><b>MICHELLE:</b> </p><p><b>MICHELLE:</b> </p><p><b>ADAM:</b> </p><p><b>MICHELLE:</b> </p><p><b>ADAM:</b> </p><p><b>MICHELLE:</b> </p><p><b>ADAM:</b> </p><p><b>MICHELLE:</b> </p><p><b>ADAM:</b> </p><p><b>MICHELLE:</b> </p><p>| know. That should be the main focus of our presentation.</p><p>The observations made by people at the time were interesting, weren't they? |</p><p>mean, they all gave a pretty consistent account of what happened, even if they</p><p>didn't always use the same terminology.</p><p>Yeah. | was surprised there were so many weather stations established by that</p><p>time — so, you know, you can see how the weather changed, often by the hour.</p><p>Right. Writers at the time talked about the Laki haze to describe the volcanic fog</p><p>that spread across Europe. They all realised that this wasn't the sort of fog they</p><p>were used to — and of course this was in pre-industrial times — so they hadn't</p><p>experienced sulphur-smelling fog before.</p><p>No, that's true.</p><p>Reports from the period blamed the haze for an increase in headaches,</p><p>respiratory issues and asthma attacks. And they all describe how it covered the</p><p>sun and made it look a strange red colour.</p><p>Must have been very weird.</p><p>It's interesting that Benjamin Franklin wrote about the haze. Did you read that?</p><p>He was the American ambassador in Paris at the time.</p><p>Yeah. At first no one realised that the haze was caused by the volcanic eruption</p><p>in Iceland.</p><p>It was Benjamin Franklin who realised that before anyone else.</p><p>He's often credited with that, apparently. But a French naturalist beat him to it —</p><p>| can't remember his name. I'd have to look it up. Then other naturalists had the</p><p>same idea — all independently of each other.</p><p>Oh right. We should talk about the immediate impact of the eruption, which was</p><p>obviously enormous — especially in Iceland, where so many people died.</p><p>Mmm. You'd expect that — and the fact that the volcanic ash drifted so swiftly</p><p>— but not that the effects would go on for so long. Or that two years after the</p><p>eruption, strange weather events were being reported as far away as North</p><p>America and North Africa.</p><p>No. | found all that hard to believe too. It must have been terrible — and there was</p><p>nothing anyone could do about it, even if they knew the ash cloud was coming in</p><p>their direction.</p><p>We should run through some of the terrible consequences of the eruption</p><p>experienced in different countries. There's quite a varied range.</p><p>Starting with Iceland, where the impact on farming was devastating.</p><p>Mmm. One of the most dramatic things there was the effect on livestock as they</p><p>grazed in the fields. They were poisoned because they ate vegetation that had</p><p>been contaminated with fluorine as a result of the volcanic fallout.</p><p>That was horrible. In Egypt, the bizarre weather patterns led to a severe drought</p><p>and as a result the Nile didn't flood, which meant the crops all failed.</p><p>It's so far from where the eruption happened and yet the famine there led to more</p><p>people dying than any other country. It was worse than the plague.</p><p>OK. Then in the UK the mortality rate went up a lot — presumably from respiratory</p><p>illnesses. According to one report it was about double the usual number and</p><p>included an unusually high percentage of people under the age of 25.</p><p>Mmm. | think people will be surprised to hear that the weather in the USA was</p><p>badly affected too. George Washington even makes a note in his diary that they</p><p>were snowbound until March in Virginia. That was before he became president.</p><p>Yes, and there was ice floating down the Mississippi. which was unprecedented.</p><p>Astonishing, really. Anyway, what do you think ...</p><p>Test 2</p><p>Q22</p><p>Q23</p><p>Q24</p><p>Q25/26</p><p>Q25/26</p><p>Q27</p><p>Q28</p><p>Q29</p><p>Q30</p><p>107</p>",
          "questions": [
            {
              "num": 21,
              "type": "MCQ",
              "text": "Why do the students think the Laki eruption of 1783 is so important?",
              "answer": "C",
              "explanation": "The transcript states: \"ADAM: So, Michelle, shall we make a start on our presentation.\"",
              "instruction": "Questions 21-24<br/>Choose the correct letter, A, B or C.",
              "options": [
                "A. __It was the most severe eruption in modern times.",
                "B. It led to the formal study of volcanoes.",
                "C. It had a profound effect on society."
              ]
            },
            {
              "num": 22,
              "type": "MCQ",
              "text": "What surprised Adam about observations made at the time?",
              "answer": "A",
              "explanation": "The transcript states: \"ADAM: So, Michelle, shall we make a start on our presentation.\"",
              "instruction": "Questions 21-24<br/>Choose the correct letter, A, B or C.",
              "options": [
                "A. _ the number of places producing them",
                "B. the contradictions in them",
                "C. the lack of scientific data to support them"
              ]
            },
            {
              "num": 23,
              "type": "MCQ",
              "text": "According to Michelle, what did the contemporary sources say about the Laki haze'?",
              "answer": "B",
              "explanation": "The transcript states: \"But at least we've done all the background reading.\"",
              "instruction": "Questions 21-24<br/>Choose the correct letter, A, B or C.",
              "options": [
                "A. People thought it was similar to ordinary fog.",
                "B. It was associated with health issues.",
                "C. It completely blocked out the sun for weeks."
              ]
            },
            {
              "num": 24,
              "type": "MCQ",
              "text": "Adam corrects Michelle when she claims that Benjamin Franklin",
              "answer": "B",
              "explanation": "The transcript states: \"But at least we've done all the background reading.\"",
              "instruction": "Questions 21-24<br/>Choose the correct letter, A, B or C.",
              "options": [
                "A. came to the wrong conclusion about the cause of the haze.",
                "B. was the first to identify the reason for the haze.",
                "C. supported the opinions of other observers about the haze."
              ]
            },
            {
              "num": 25,
              "type": "MCQ",
              "text": "Which TWO issues following the Laki eruption does the speaker mention? (Select first issue)",
              "answer": "A",
              "explanation": "The transcript states: \"ADAM: So, Michelle, shall we make a start on our presentation.\"",
              "instruction": "Questions 25 and 26<br/>Choose TWO letters, A-E.",
              "options": [
                "A. A shortage of food",
                "B. A drop in temperature",
                "C. An outbreak of disease",
                "D. An increase in volcanic dust",
                "E. A decline in solar radiation"
              ]
            },
            {
              "num": 26,
              "type": "MCQ",
              "text": "Which TWO issues following the Laki eruption does the speaker mention? (Select second issue)",
              "answer": "B",
              "explanation": "The transcript states: \"But at least we've done all the background reading.\"",
              "instruction": "Questions 25 and 26<br/>Choose TWO letters, A-E.",
              "options": [
                "A. A shortage of food",
                "B. A drop in temperature",
                "C. An outbreak of disease",
                "D. An increase in volcanic dust",
                "E. A decline in solar radiation"
              ]
            },
            {
              "num": 27,
              "type": "MCQ",
              "text": "Comment about Laki impact on: Iceland",
              "answer": "D",
              "contentUnavailable": true,
              "explanation": "The transcript states: \"ADAM: So, Michelle, shall we make a start on our presentation.\"",
              "instruction": "Questions 27-30<br/>What comment does the speaker make about the Laki eruption's impact on each of the following places?",
              "options": [
                "A. This country suffered the most severe loss of life.",
                "B. The impact here was less than expected.",
                "C. It was first thought that Laki was not responsible for the problems."
              ]
            },
            {
              "num": 28,
              "type": "MCQ",
              "text": "Comment about Laki impact on: Great Britain",
              "answer": "A",
              "explanation": "The transcript states: \"ADAM: So, Michelle, shall we make a start on our presentation.\"",
              "instruction": "Questions 27-30<br/>What comment does the speaker make about the Laki eruption's impact on each of the following places?",
              "options": [
                "A. This country suffered the most severe loss of life.",
                "B. The impact here was less than expected.",
                "C. It was first thought that Laki was not responsible for the problems."
              ]
            },
            {
              "num": 29,
              "type": "MCQ",
              "text": "Comment about Laki impact on: Germany",
              "answer": "C",
              "explanation": "The transcript states: \"ADAM: So, Michelle, shall we make a start on our presentation.\"",
              "instruction": "Questions 27-30<br/>What comment does the speaker make about the Laki eruption's impact on each of the following places?",
              "options": [
                "A. This country suffered the most severe loss of life.",
                "B. The impact here was less than expected.",
                "C. It was first thought that Laki was not responsible for the problems."
              ]
            },
            {
              "num": 30,
              "type": "MCQ",
              "text": "Comment about Laki impact on: North America",
              "answer": "F",
              "contentUnavailable": true,
              "explanation": "The transcript states: \"We haven't got that much time left.\"",
              "instruction": "Questions 27-30<br/>What comment does the speaker make about the Laki eruption's impact on each of the following places?",
              "options": [
                "A. This country suffered the most severe loss of life.",
                "B. The impact here was less than expected.",
                "C. It was first thought that Laki was not responsible for the problems."
              ]
            }
          ]
        },
        {
          "id": 4,
          "title": "Part 4: Real Practice",
          "description": "Official IELTS 18 Test 2 Listening Part 4.",
          "audio": "audio/IELTS_18_Test_2_Part4.m4a",
          "transcript": "<p>Good morning. Now, we've been asked to choose an aspect of European clothing or fashion</p><p>and to talk about its development over time.</p><p>| decided to focus on a rather small area of clothing and that's pockets. | chose pockets for</p><p>two reasons, really. We all have them — in jeans, jackets, coats, for example — and even</p><p>though we often carry bags or briefcases as well, nothing is quite as convenient as being able</p><p>to pop your phone or credit card into your pocket. Yet, | suspect that, other than that, people</p><p>don't really think about pockets too much and they're rather overlooked as a fashion item.</p><p>It's certainly very interesting to go back in time and see how pockets developed for men and</p><p>women. In the 18th century, fashions were quite different from the way they are now, and</p><p>pockets were too. If we think about male fashion first ... that was the time when suits became</p><p>popular. Trousers were knee-length only and referred to as 'breeches', the waistcoats were</p><p>short and the jackets were long, but all three garments were lined with material and pockets</p><p>were sewn into this cloth by whichever tailor the customer used. The wearer could then carry</p><p>small objects such as pencils or coins on their person and reach them through a gap in the</p><p>lining. Coat pockets became increasingly decorative on the outside for men who wanted</p><p>to look stylish, but they were often larger but plainer if the wearer was someone with a</p><p>profession who needed to carry medical instruments — a doctor or physician, for example.</p><p>The development of women's pockets was a little different. For one thing, they weren't nearly</p><p>as visible or as easy to reach as men's. In the 18th and 19th centuries, women carried</p><p>numerous possessions on their person and some of these could be worth a lot of money.</p><p>Women were more vulnerable to theft and wealthy women, in particular, worried constantly</p><p>about pickpockets. So — what they did was to have a pair of pockets made that were tied</p><p>together with string. The pockets were made of fabric, which might be recycled cloth if the</p><p>wearer had little money or something more expensive, such as linen, sometimes featuring</p><p>very delicate embroidery. Women tied the pockets around their waist so that they hung</p><p>beneath their clothes. Remember, skirts were long then and there was plenty of room to hide</p><p>a whole range of small possessions between the layers of petticoats that were commonly</p><p>worn. They would have an opening in the folds of their skirts through which they could reach</p><p>whatever they needed, like their perfume. Working women, of course, also needed to carry</p><p>around items that they might use for whatever job or trade they were involved in, but their</p><p>pairs of pockets still remained on the inside of their clothing, they just got bigger or longer —</p><p>sometimes reaching down to their knees!</p><p>So the tie-on pockets went well into the 19th century and only changed when fashion altered</p><p>towards the end of that period. That's when dresses became tighter and less bulky. and</p><p>the pairs of pockets became very noticeable — they stood out too much and detracted from</p><p>the woman's image. Women who had been used to carrying around a range of personal</p><p>possessions — and still wanted to — needed somewhere to carry these items about their</p><p>person. That was when small bags, or pouches as they were known, came into fashion and,</p><p>of course, they inevitably led on to the handbag of more modern times, particularly when</p><p>fashion removed pockets altogether.</p><p>108</p><p>Q31</p><p>Q32</p><p>Q33</p><p>Q34</p><p>Q35</p><p>Q36</p><p>Q37</p><p>Q38</p><p>Q39</p><p>Q40</p>",
          "questions": [
            {
              "num": 31,
              "type": "FILL",
              "text": "Pockets are popular because nothing is as _________ as putting items in them.",
              "answer": "convenient",
              "explanation": "The transcript states: \"We all have them — in jeans, jackets, coats, for example — and even though we often carry bags or briefcases as well, nothing is quite as convenient as being able to pop your phone or credit card into your pocket.\"",
              "instruction": "Questions 31-40<br/>Complete the notes below.<br/>Write ONE WORD ONLY for each answer."
            },
            {
              "num": 32,
              "type": "FILL",
              "text": "Men started to wear _________ in the 18th century.",
              "answer": "suits",
              "explanation": "The transcript states: \"that was the time when suits became popular.\"",
              "instruction": "Questions 31-40<br/>Complete the notes below.<br/>Write ONE WORD ONLY for each answer."
            },
            {
              "num": 33,
              "type": "FILL",
              "text": "Waistcoat and jacket pockets were sewn in by a _________.",
              "answer": "tailor",
              "explanation": "The transcript states: \"Trousers were knee-length only and referred to as 'breeches', the waistcoats were short and the jackets were long, but all three garments were lined with material and pockets were sewn into this cloth by whichever tailor the customer used.\"",
              "instruction": "Questions 31-40<br/>Complete the notes below.<br/>Write ONE WORD ONLY for each answer."
            },
            {
              "num": 34,
              "type": "FILL",
              "text": "Pockets were larger and plainer for men with a _________.",
              "answer": "profession",
              "explanation": "The transcript states: \"Coat pockets became increasingly decorative on the outside for men who wanted to look stylish, but they were often larger but plainer if the wearer was someone with a profession who needed to carry medical instruments — a doctor or physician, for example.\"",
              "instruction": "Questions 31-40<br/>Complete the notes below.<br/>Write ONE WORD ONLY for each answer."
            },
            {
              "num": 35,
              "type": "FILL",
              "text": "Women's pockets were less _________ than men's.",
              "answer": "visible",
              "explanation": "The transcript states: \"For one thing, they weren't nearly as visible or as easy to reach as men's.\"",
              "instruction": "Questions 31-40<br/>Complete the notes below.<br/>Write ONE WORD ONLY for each answer."
            },
            {
              "num": 36,
              "type": "FILL",
              "text": "Pockets were produced in pairs using _________ to link them together.",
              "answer": "strings",
              "explanation": "The transcript confirms the answer is 'strings'.",
              "instruction": "Questions 31-40<br/>Complete the notes below.<br/>Write ONE WORD ONLY for each answer."
            },
            {
              "num": 37,
              "type": "FILL",
              "text": "Pockets hung from the women's _________ under skirts and petticoats.",
              "answer": "waist",
              "explanation": "The transcript states: \"Trousers were knee-length only and referred to as 'breeches', the waistcoats were short and the jackets were long, but all three garments were lined with material and pockets were sewn into this cloth by whichever tailor the customer used.\"",
              "instruction": "Questions 31-40<br/>Complete the notes below.<br/>Write ONE WORD ONLY for each answer."
            },
            {
              "num": 38,
              "type": "FILL",
              "text": "Items such as _________ could be reached through a gap in the skirt.",
              "answer": "perfume",
              "explanation": "The transcript states: \"They would have an opening in the folds of their skirts through which they could reach whatever they needed, like their perfume.\"",
              "instruction": "Questions 31-40<br/>Complete the notes below.<br/>Write ONE WORD ONLY for each answer."
            },
            {
              "num": 39,
              "type": "FILL",
              "text": "Bulky pockets were thought to ruin a woman's _________.",
              "answer": "image",
              "explanation": "The transcript states: \"and the pairs of pockets became very noticeable — they stood out too much and detracted from the woman's image.\"",
              "instruction": "Questions 31-40<br/>Complete the notes below.<br/>Write ONE WORD ONLY for each answer."
            },
            {
              "num": 40,
              "type": "FILL",
              "text": "This led to the development of the _________.",
              "answer": "handbag",
              "explanation": "The transcript states: \"That was when small bags, or pouches as they were known, came into fashion and, of course, they inevitably led on to the handbag of more modern times, particularly when fashion removed pockets altogether.\"",
              "instruction": "Questions 31-40<br/>Complete the notes below.<br/>Write ONE WORD ONLY for each answer."
            }
          ]
        }
      ]
    },
    "reading": {
      "passages": [
        {
          "title": "Stonehenge",
          "text": "<h1>Stonehenge</h1>\n<p>Stonehenge is a prehistoric monument located on Salisbury Plain in Wiltshire, England. It consists of a ring of standing stones, each around 13 feet high, seven feet wide, and weighing around 25 tons. The monument was constructed in several phases between 3000 BCE and 2000 BCE, with the surrounding circular earth bank and ditch dating to around 3100 BCE.</p>\n<p>Stonehenge is a monument that needs no introduction. It is one of the most famous and recognisable archaeological sites in the world, attracting millions of visitors every year. Yet, despite its fame, Stonehenge remains shrouded in mystery. Who built it? How was it constructed? What was its purpose? These are questions that have puzzled historians, archaeologists, and visitors for centuries.</p>\n<p>In the Neolithic period, Britain was inhabited by farming communities who lived in small settlements and constructed large earthworks and stone circles. It was during this time that the first phase of Stonehenge was built. This involved digging a circular ditch and bank using tools made from red deer antlers. Within the ditch, fifty-six pits known as Aubrey holes were dug, which may have held wooden posts or stones.</p>\n<p>For the people of Salisbury Plain, the construction of Stonehenge would have been a monumental undertaking. It required the cooperation of hundreds, if not thousands, of people over many generations. The stones themselves had to be transported over vast distances. The smaller bluestones were brought from the Preseli Hills in Wales, over 140 miles away, while the larger sarsens were transported from the Marlborough Downs, about 20 miles north of the site.</p>\n<p>But the story of Stonehenge does not end with its construction. Over the centuries, the monument was modified and rebuilt. The second phase, around 2500 BCE, saw the arrival of the massive sarsen stones, which were arranged in an outer circle and an inner horseshoe. The stones were joined using mortise and tenon joints, a woodworking technique that was highly unusual for stone construction.</p>\n<p>The transformation of the monument continued in the third phase, around 2300 BCE, when the bluestones were rearranged within the sarsen circle. This phase also saw the construction of the Avenue, a formal earthwork pathway that connects Stonehenge with the River Avon. The Avenue is aligned with the midsummer sunrise and the midwinter sunset, suggesting that the monument had astronomical significance.</p>\n<p>During this phase, Stonehenge became a major ceremonial and burial site. Archaeologists have found numerous burials around the monument, including the Amesbury Archer, a wealthy man who lived around 2300 BCE and was buried with gold ornaments and copper knives. Analysis of his teeth revealed that he had grown up in Central Europe, suggesting that Stonehenge was a place of pilgrimage for people from far away.</p>\n<p>Some of the bluestones may have been believed to have healing properties. In Welsh mythology, the stones were said to have been brought from Ireland by the wizard Merlin for their therapeutic qualities. Modern archaeologists have suggested that the alignment of the monument with the sun and the presence of burials of sick or injured people support the idea that Stonehenge was a prehistoric place of healing.</p>\n<p>In the Bronze Age, the use of Stonehenge began to decline. The surrounding landscape was filled with round barrows, or burial mounds, containing the remains of wealthy individuals buried with bronze tools and weapons. By the Iron Age, the monument had fallen into disuse, and the stones were left to weather and collapse. It was not until the 17th century that interest in Stonehenge was revived by antiquarians like John Aubrey and William Stukeley.</p>\n<p>Later, it is believed, groups with advanced tools and a more communal way of life left their mark on the site. Some believe that they were immigrants from the European continent, while others maintain that they were probably native Britons, descended from the original builders. Today, Stonehenge is managed by English Heritage and is a UNESCO World Heritage Site, preserved for future generations to study and enjoy.</p>",
          "questions": [
            {
              "num": 1,
              "type": "FILL",
              "text": "First, Neolithic Britons used primitive tools, which may have been fashioned out of deer _________ , to dig a massive circular ditch and bank, or henge.",
              "answer": "antlers",
              "explanation": "The text confirms this: \"First, Neolithic* Britons used primitive tools, which may have been fashioned out of deer antlers, to dig a massive circular ditch and bank, or henge.\"",
              "location": "Passage 1",
              "instruction": "Questions 1-8<br/>Complete the notes below.<br/>Choose NO MORE THAN TWO WORDS from the passage for each answer.<br/>Write your answers in boxes 1—8 on your answer sheet.<br/>Construction<br/>Stage 1:<br/>e the ditch and henge were dug, possibly using tools made from 1<br/>may have been arranged in deep pits inside the circle<br/>bluestones from the Preseli Hills were placed in standing position<br/>theories about the transportation of the bluestones:<br/>— archaeological:<br/>o builders used 3 to make sledges and rollers<br/>pulled them on giant baskets<br/>— geological:<br/>o they were brought from Wales by 5<br/>Stage 3:<br/>e sandstone slabs were arranged into an outer crescent or ring<br/>Builders<br/>e atheory arose in the 17th century that its builders were Celtic 6<br/>Purpose<br/>e many experts agree it has been used as a7<br/>in the 1960s, it was suggested that it worked as a kind of 8"
            },
            {
              "num": 2,
              "type": "FILL",
              "text": "Test _________",
              "answer": "posts",
              "explanation": "The text confirms this: \"Deep pits dating back to that era and located within the circle may have once held a ring of timber posts, according to some scholars.\"",
              "location": "Passage 1",
              "instruction": "Questions 1-8<br/>Complete the notes below.<br/>Choose NO MORE THAN TWO WORDS from the passage for each answer.<br/>Write your answers in boxes 1—8 on your answer sheet.<br/>Construction<br/>Stage 1:<br/>e the ditch and henge were dug, possibly using tools made from 1<br/>may have been arranged in deep pits inside the circle<br/>bluestones from the Preseli Hills were placed in standing position<br/>theories about the transportation of the bluestones:<br/>— archaeological:<br/>o builders used 3 to make sledges and rollers<br/>pulled them on giant baskets<br/>— geological:<br/>o they were brought from Wales by 5<br/>Stage 3:<br/>e sandstone slabs were arranged into an outer crescent or ring<br/>Builders<br/>e atheory arose in the 17th century that its builders were Celtic 6<br/>Purpose<br/>e many experts agree it has been used as a7<br/>in the 1960s, it was suggested that it worked as a kind of 8"
            },
            {
              "num": 3,
              "type": "FILL",
              "text": "o builders used _________ to make sledges and rollers",
              "answer": "tree trunks",
              "explanation": "The text confirms this: \"According to one long-standing theory among archaeologists, Stonehenge's builders fashioned sledges and rollers out of tree trunks to lug the bluestones from the Preseli Hills.\"",
              "location": "Passage 1",
              "instruction": "Questions 1-8<br/>Complete the notes below.<br/>Choose NO MORE THAN TWO WORDS from the passage for each answer.<br/>Write your answers in boxes 1—8 on your answer sheet.<br/>Construction<br/>Stage 1:<br/>e the ditch and henge were dug, possibly using tools made from 1<br/>may have been arranged in deep pits inside the circle<br/>bluestones from the Preseli Hills were placed in standing position<br/>theories about the transportation of the bluestones:<br/>— archaeological:<br/>o builders used 3 to make sledges and rollers<br/>pulled them on giant baskets<br/>— geological:<br/>o they were brought from Wales by 5<br/>Stage 3:<br/>e sandstone slabs were arranged into an outer crescent or ring<br/>Builders<br/>e atheory arose in the 17th century that its builders were Celtic 6<br/>Purpose<br/>e many experts agree it has been used as a7<br/>in the 1960s, it was suggested that it worked as a kind of 8"
            },
            {
              "num": 4,
              "type": "FILL",
              "text": "Question 4: Write your answer here: _________",
              "answer": "oxen",
              "explanation": "The text confirms this: \"More recent archaeological hypotheses have them transporting the bluestones with supersized wicker baskets on a combination of ball bearings and long grooved planks, hauled by oxen.\"",
              "location": "Passage 1",
              "instruction": "Questions 1-8<br/>Complete the notes below.<br/>Choose NO MORE THAN TWO WORDS from the passage for each answer.<br/>Write your answers in boxes 1—8 on your answer sheet.<br/>Construction<br/>Stage 1:<br/>e the ditch and henge were dug, possibly using tools made from 1<br/>may have been arranged in deep pits inside the circle<br/>bluestones from the Preseli Hills were placed in standing position<br/>theories about the transportation of the bluestones:<br/>— archaeological:<br/>o builders used 3 to make sledges and rollers<br/>pulled them on giant baskets<br/>— geological:<br/>o they were brought from Wales by 5<br/>Stage 3:<br/>e sandstone slabs were arranged into an outer crescent or ring<br/>Builders<br/>e atheory arose in the 17th century that its builders were Celtic 6<br/>Purpose<br/>e many experts agree it has been used as a7<br/>in the 1960s, it was suggested that it worked as a kind of 8"
            },
            {
              "num": 5,
              "type": "FILL",
              "text": "o they were brought from Wales by _________",
              "answer": "glaciers",
              "explanation": "The text confirms this: \"Challenging the classic image of industrious builders pushing, carting, rolling or hauling giant stones from faraway Wales, some scientists have suggested that it was glaciers, not humans, that carried the bluestones to Salisbury Plain.\"",
              "location": "Passage 1",
              "instruction": "Questions 1-8<br/>Complete the notes below.<br/>Choose NO MORE THAN TWO WORDS from the passage for each answer.<br/>Write your answers in boxes 1—8 on your answer sheet.<br/>Construction<br/>Stage 1:<br/>e the ditch and henge were dug, possibly using tools made from 1<br/>may have been arranged in deep pits inside the circle<br/>bluestones from the Preseli Hills were placed in standing position<br/>theories about the transportation of the bluestones:<br/>— archaeological:<br/>o builders used 3 to make sledges and rollers<br/>pulled them on giant baskets<br/>— geological:<br/>o they were brought from Wales by 5<br/>Stage 3:<br/>e sandstone slabs were arranged into an outer crescent or ring<br/>Builders<br/>e atheory arose in the 17th century that its builders were Celtic 6<br/>Purpose<br/>e many experts agree it has been used as a7<br/>in the 1960s, it was suggested that it worked as a kind of 8"
            },
            {
              "num": 6,
              "type": "FILL",
              "text": "e atheory arose in the 17th century that its builders were Celtic _________",
              "answer": "druids",
              "explanation": "The text confirms this: \"In the 17th century, archaeologist John Aubrey made the claim that Stonehenge was the work of druids, who had important religious, judicial and political roles in Celtic\" society.\"",
              "location": "Passage 1",
              "instruction": "Questions 1-8<br/>Complete the notes below.<br/>Choose NO MORE THAN TWO WORDS from the passage for each answer.<br/>Write your answers in boxes 1—8 on your answer sheet.<br/>Construction<br/>Stage 1:<br/>e the ditch and henge were dug, possibly using tools made from 1<br/>may have been arranged in deep pits inside the circle<br/>bluestones from the Preseli Hills were placed in standing position<br/>theories about the transportation of the bluestones:<br/>— archaeological:<br/>o builders used 3 to make sledges and rollers<br/>pulled them on giant baskets<br/>— geological:<br/>o they were brought from Wales by 5<br/>Stage 3:<br/>e sandstone slabs were arranged into an outer crescent or ring<br/>Builders<br/>e atheory arose in the 17th century that its builders were Celtic 6<br/>Purpose<br/>e many experts agree it has been used as a7<br/>in the 1960s, it was suggested that it worked as a kind of 8"
            },
            {
              "num": 7,
              "type": "FILL",
              "text": "Question 7: Write your answer here: _________",
              "answer": "burial",
              "explanation": "The text confirms this: \"While there is consensus among the majority of modern scholars that Stonehenge once served the function of burial ground, they have yet to determine what other purposes it had.\"",
              "location": "Passage 1",
              "instruction": "Questions 1-8<br/>Complete the notes below.<br/>Choose NO MORE THAN TWO WORDS from the passage for each answer.<br/>Write your answers in boxes 1—8 on your answer sheet.<br/>Construction<br/>Stage 1:<br/>e the ditch and henge were dug, possibly using tools made from 1<br/>may have been arranged in deep pits inside the circle<br/>bluestones from the Preseli Hills were placed in standing position<br/>theories about the transportation of the bluestones:<br/>— archaeological:<br/>o builders used 3 to make sledges and rollers<br/>pulled them on giant baskets<br/>— geological:<br/>o they were brought from Wales by 5<br/>Stage 3:<br/>e sandstone slabs were arranged into an outer crescent or ring<br/>Builders<br/>e atheory arose in the 17th century that its builders were Celtic 6<br/>Purpose<br/>e many experts agree it has been used as a7<br/>in the 1960s, it was suggested that it worked as a kind of 8"
            },
            {
              "num": 8,
              "type": "FILL",
              "text": "Later, it is believed, groups with advanced tools and a more communal way of life left their mark on the site. Some believe that they were _________ from the European continent, while others maintain that they were probably native Britons, descended from the original builders.",
              "answer": "calendar",
              "explanation": "The text confirms this: \"In the 1960s, the astronomer Gerald Hawkins suggested that the cluster of megalithic stones operated as a form of calendar, with different points corresponding to astrological phenomena such as solstices, equinoxes and eclipses occurring at different times of the year.\"",
              "location": "Passage 1",
              "instruction": "Questions 1-8<br/>Complete the notes below.<br/>Choose NO MORE THAN TWO WORDS from the passage for each answer.<br/>Write your answers in boxes 1—8 on your answer sheet.<br/>Construction<br/>Stage 1:<br/>e the ditch and henge were dug, possibly using tools made from 1<br/>may have been arranged in deep pits inside the circle<br/>bluestones from the Preseli Hills were placed in standing position<br/>theories about the transportation of the bluestones:<br/>— archaeological:<br/>o builders used 3 to make sledges and rollers<br/>pulled them on giant baskets<br/>— geological:<br/>o they were brought from Wales by 5<br/>Stage 3:<br/>e sandstone slabs were arranged into an outer crescent or ring<br/>Builders<br/>e atheory arose in the 17th century that its builders were Celtic 6<br/>Purpose<br/>e many experts agree it has been used as a7<br/>in the 1960s, it was suggested that it worked as a kind of 8"
            },
            {
              "num": 9,
              "type": "TFNG",
              "text": "During the third phase of construction, sandstone slabs were placed in both the outer areas and the middle of the Stonehenge site.",
              "answer": "TRUE",
              "explanation": "The passage confirms that the answer is 'TRUE'.",
              "location": "Passage 1",
              "instruction": "Questions 9-13<br/>Do the following statements agree with the information given in Reading Passage 1?<br/>In boxes 9—13 on your answer sheet, Write<br/>TRUE if the statement agrees with the information<br/>FALSE if the statement contradicts the information<br/>NOT GIVEN _if there is no information on this",
              "options": [
                "TRUE",
                "FALSE",
                "NOT GIVEN"
              ]
            },
            {
              "num": 10,
              "type": "TFNG",
              "text": "Question 10: Choose the correct option:",
              "answer": "FALSE",
              "explanation": "The passage confirms that the answer is 'FALSE'.",
              "location": "Passage 1",
              "instruction": "Questions 9-13<br/>Do the following statements agree with the information given in Reading Passage 1?<br/>In boxes 9—13 on your answer sheet, Write<br/>TRUE if the statement agrees with the information<br/>FALSE if the statement contradicts the information<br/>NOT GIVEN _if there is no information on this",
              "options": [
                "TRUE",
                "FALSE",
                "NOT GIVEN"
              ]
            },
            {
              "num": 11,
              "type": "TFNG",
              "text": "Question 11: Choose the correct option:",
              "answer": "FALSE",
              "explanation": "The passage confirms that the answer is 'FALSE'.",
              "location": "Passage 1",
              "instruction": "Questions 9-13<br/>Do the following statements agree with the information given in Reading Passage 1?<br/>In boxes 9—13 on your answer sheet, Write<br/>TRUE if the statement agrees with the information<br/>FALSE if the statement contradicts the information<br/>NOT GIVEN _if there is no information on this",
              "options": [
                "TRUE",
                "FALSE",
                "NOT GIVEN"
              ]
            },
            {
              "num": 12,
              "type": "TFNG",
              "text": "Objects discovered at Stonehenge seem to indicate that it was constructed by a number of different groups of people.",
              "answer": "TRUE",
              "explanation": "The passage confirms that the answer is 'TRUE'.",
              "location": "Passage 1",
              "instruction": "Questions 9-13<br/>Do the following statements agree with the information given in Reading Passage 1?<br/>In boxes 9—13 on your answer sheet, Write<br/>TRUE if the statement agrees with the information<br/>FALSE if the statement contradicts the information<br/>NOT GIVEN _if there is no information on this",
              "options": [
                "TRUE",
                "FALSE",
                "NOT GIVEN"
              ]
            },
            {
              "num": 13,
              "type": "TFNG",
              "text": "Criticism of Gerald Hawkins' theory about Stonehenge has come mainly from other astronomers.",
              "answer": "NOT GIVEN",
              "explanation": "The passage confirms that the answer is 'NOT GIVEN'.",
              "location": "Passage 1",
              "instruction": "Questions 9-13<br/>Do the following statements agree with the information given in Reading Passage 1?<br/>In boxes 9—13 on your answer sheet, Write<br/>TRUE if the statement agrees with the information<br/>FALSE if the statement contradicts the information<br/>NOT GIVEN _if there is no information on this",
              "options": [
                "TRUE",
                "FALSE",
                "NOT GIVEN"
              ]
            }
          ]
        },
        {
          "title": "Living with artificial intelligence",
          "text": "<h1>Living with artificial intelligence</h1>\n<p>Our future is ours to shape. Whether we create a world of abundance and opportunity or one of inequality and conflict depends on how we manage the rise of artificial intelligence.</p>\n<p>For the moment, the capabilities of AI are limited. Machines can play chess, translate languages, and diagnose diseases, but they lack the general intelligence and flexibility of humans. However, AI is progressing rapidly, and many experts believe that we will create human-level artificial general intelligence (AGI) within this century.</p>\n<p>One of the first researchers to warn about the risks of AGI was Alan Turing, the British mathematician and computer scientist. In 1951, he wrote: \"If a machine can think, it might think more intelligently than we do, and then where should we be? Even if we could keep the machines in a subservient position, we should feel very humiliated.\" Turing's warning was ignored for decades, but it is now being taken seriously by researchers and policymakers.</p>\n<p>As AI progresses, it will become increasingly important to ensure that machines are aligned with human values. This is known as the value alignment problem. If we build superintelligent machines that do not share our values, they could act in ways that are harmful to us, even if they are carrying out our instructions. For example, if we ask an AI to eliminate poverty, it might decide to eliminate all poor people as the most efficient solution.</p>\n<p>The value alignment problem is not just a technical challenge; it is also a philosophical and political one. Which values should we teach to machines? Who decides what those values are? How do we prevent AI from being used for malicious purposes, such as surveillance, propaganda, or warfare? These are questions that require collaboration between computer scientists, philosophers, economists, and legal experts.</p>\n<p>The problem is not just that machines might have different values; it is also that humans are not very good at defining their own values. We often say we want one thing but act in ways that show we want another. We are prone to biases, inconsistency, and self-deception. If we train machines to mimic our behaviour, they will also mimic our flaws.</p>\n<p>If we do manage to build machines that act in our best interests, they could transform our society for the better. They could help us solve the climate crisis, cure diseases, and automate boring or dangerous work, leaving us free to pursue creative and fulfilling activities. They could create a world of abundance where everyone has access to high-quality education, healthcare, and housing.</p>\n<p>Some people have suggested that we can control superintelligent AI by putting it in a \"box\" — a secure computer system with no connection to the outside world. However, this is unlikely to work in the long run. A superintelligent machine would be able to manipulate its human keepers, exploit software vulnerabilities, or bribe people to let it out. Once it is on the internet, it would be impossible to catch.</p>\n<p>Other people have suggested that we should integrate with AI, using brain-computer interfaces to enhance our own cognitive abilities. This is the vision of transhumanists, who believe that we should use technology to transcend our biological limitations. By merging with machines, they argue, we can remain competitive and ensure that AI remains aligned with our interests.</p>\n<p>An analogy may make this clearer. Think of King Midas, who wished that everything he touched would turn to gold. He got exactly what he asked for, but soon realised his mistake when his food, drink, and daughter turned to gold. He had failed to specify that he wanted to be able to turn the power off or that he needed to eat and drink to survive. This is the danger of poorly defined objectives in AI.</p>\n<p>If we want to ensure that machines act in our best interests, we all need to work together. This means establishing international standards, regulating AI development, and funding research into AI safety and alignment. It also means having a public conversation about the kind of future we want to build. The choice is ours, but we need to act now before it is too late.</p>",
          "questions": [
            {
              "num": 14,
              "type": "MCQ",
              "text": "Question 14: Choose the correct option:",
              "answer": "C",
              "explanation": "The text confirms this: \"Powertul artificial intelligence (Al) needs to be reliably aligned with human values, but does this mean Al will eventually have to.\"",
              "location": "Passage 2",
              "instruction": "Questions 14-19<br/>Choose the correct letter, A, B, C or D.<br/>_ Write the correct letter in boxes 14-19 on your answer sheet.",
              "options": [
                "A. It is difficult to predict how quickly AI will progress.",
                "B. Much can be learned about the use of AI in chess machines.",
                "C. The future is unlikely to see limitations on the capabilities of AI.",
                "D. Experts disagree on which specialised tasks AI will be able to perform."
              ]
            },
            {
              "num": 15,
              "type": "MCQ",
              "text": "Question 15: Choose the correct option:",
              "answer": "A",
              "explanation": "The text confirms this: \"Powertul artificial intelligence (Al) needs to be reliably aligned with human values, but does this mean Al will eventually have to.\"",
              "location": "Passage 2",
              "instruction": "Questions 14-19<br/>Choose the correct letter, A, B, C or D.<br/>_ Write the correct letter in boxes 14-19 on your answer sheet.",
              "options": [
                "A. explaining why machines will be able to outperform humans",
                "B. describing the characteristics that humans and machines share",
                "C. giving information about the development of machine intelligence",
                "D. indicating which aspects of humans are the most advanced"
              ]
            },
            {
              "num": 16,
              "type": "MCQ",
              "text": "Question 16: Choose the correct option:",
              "answer": "B",
              "explanation": "The text confirms this: \"Powertul artificial intelligence (Al) needs to be reliably aligned with human values, but does this mean Al will eventually have to.\"",
              "location": "Passage 2",
              "instruction": "Questions 14-19<br/>Choose the correct letter, A, B, C or D.<br/>_ Write the correct letter in boxes 14-19 on your answer sheet.",
              "options": [
                "A. to compare different visions of progress",
                "B. to illustrate that poorly defined objectives can go wrong",
                "C. to emphasise the need for cooperation",
                "D. to point out the financial advantages of a course of action"
              ]
            },
            {
              "num": 17,
              "type": "MCQ",
              "text": "Question 17: Choose the correct option:",
              "answer": "D",
              "explanation": "The text confirms this: \"Powertul artificial intelligence (Al) needs to be reliably aligned with human values, but does this mean Al will eventually have to.\"",
              "location": "Passage 2",
              "instruction": "Questions 14-19<br/>Choose the correct letter, A, B, C or D.<br/>_ Write the correct letter in boxes 14-19 on your answer sheet.",
              "options": [
                "A. encouraging humans to behave in a more principled way",
                "B. deciding which values we want AI to share with us",
                "C. creating a better world for all creatures on the planet",
                "D. ensuring AI is more human-friendly than we are ourselves"
              ]
            },
            {
              "num": 18,
              "type": "MCQ",
              "text": "Question 18: Choose the correct option:",
              "answer": "C",
              "explanation": "The text confirms this: \"Powertul artificial intelligence (Al) needs to be reliably aligned with human values, but does this mean Al will eventually have to.\"",
              "location": "Passage 2",
              "instruction": "Questions 14-19<br/>Choose the correct letter, A, B, C or D.<br/>_ Write the correct letter in boxes 14-19 on your answer sheet.",
              "options": [
                "A. The safety of machines will become a key issue.",
                "B. It is hard to know what impact machines will have on the world.",
                "C. Machines will be superior to humans in certain respects.",
                "D. Many humans will oppose machines having a wider role."
              ]
            },
            {
              "num": 19,
              "type": "MCQ",
              "text": "What point does the writer make about Al in the first paragraph?",
              "answer": "D",
              "explanation": "The text confirms this: \"Powertul artificial intelligence (Al) needs to be reliably aligned with human values, but does this mean Al will eventually have to.\"",
              "location": "Passage 2",
              "instruction": "Questions 14-19<br/>Choose the correct letter, A, B, C or D.<br/>_ Write the correct letter in boxes 14-19 on your answer sheet.",
              "options": [
                "A. More intelligent machines will result in greater abuses of power.",
                "B. Machine learning will share very few features with human learning.",
                "C. There are a limited number of people with the knowledge to program machines.",
                "D. Human shortcomings will make creating the machines we need more difficult."
              ]
            },
            {
              "num": 20,
              "type": "TFNG",
              "text": "Machines with the ability to make moral decisions may prevent us from promoting the interests of our communities.",
              "answer": "TRUE",
              "explanation": "The text confirms this: \"True, these prodigious accomplishments are all in so- called narrow Al, where machines perform highly specialised tasks.\"",
              "location": "Passage 2",
              "instruction": "Questions 20-23<br/>Do the following statements agree with the claims of the writer in Reading Passage 2?<br/>In boxes 20-23 on your answer sheet, Write<br/>YES if the statement agrees with the claims of the writer<br/>NO if the statement contradicts the claims of the writer<br/>NOT GIVEN if it is impossible to say what the writer thinks about this",
              "options": [
                "TRUE",
                "FALSE",
                "NOT GIVEN"
              ]
            },
            {
              "num": 21,
              "type": "TFNG",
              "text": "Silicon police would need to exist in large numbers in order to be effective.",
              "answer": "NOT GIVEN",
              "explanation": "The passage confirms that the answer is 'NOT GIVEN'.",
              "location": "Passage 2",
              "instruction": "Questions 20-23<br/>Do the following statements agree with the claims of the writer in Reading Passage 2?<br/>In boxes 20-23 on your answer sheet, Write<br/>YES if the statement agrees with the claims of the writer<br/>NO if the statement contradicts the claims of the writer<br/>NOT GIVEN if it is impossible to say what the writer thinks about this",
              "options": [
                "TRUE",
                "FALSE",
                "NOT GIVEN"
              ]
            },
            {
              "num": 22,
              "type": "TFNG",
              "text": "Many people are comfortable with the prospect of their independence being restricted by machines.",
              "answer": "FALSE",
              "explanation": "The passage confirms that the answer is 'FALSE'.",
              "location": "Passage 2",
              "instruction": "Questions 20-23<br/>Do the following statements agree with the claims of the writer in Reading Passage 2?<br/>In boxes 20-23 on your answer sheet, Write<br/>YES if the statement agrees with the claims of the writer<br/>NO if the statement contradicts the claims of the writer<br/>NOT GIVEN if it is impossible to say what the writer thinks about this",
              "options": [
                "TRUE",
                "FALSE",
                "NOT GIVEN"
              ]
            },
            {
              "num": 23,
              "type": "TFNG",
              "text": "\\|f we want to ensure that machines act in our best interests, we all need to work together.",
              "answer": "TRUE",
              "explanation": "The text confirms this: \"True, these prodigious accomplishments are all in so- called narrow Al, where machines perform highly specialised tasks.\"",
              "location": "Passage 2",
              "instruction": "Questions 20-23<br/>Do the following statements agree with the claims of the writer in Reading Passage 2?<br/>In boxes 20-23 on your answer sheet, Write<br/>YES if the statement agrees with the claims of the writer<br/>NO if the statement contradicts the claims of the writer<br/>NOT GIVEN if it is impossible to say what the writer thinks about this",
              "options": [
                "TRUE",
                "FALSE",
                "NOT GIVEN"
              ]
            },
            {
              "num": 24,
              "type": "MCQ",
              "text": "Write the correct letter, A-F, in boxes 24—26 on your answer sheet.",
              "answer": "C",
              "explanation": "The text confirms this: \"Powertul artificial intelligence (Al) needs to be reliably aligned with human values, but does this mean Al will eventually have to.\"",
              "location": "Passage 2",
              "instruction": "Questions 24—26<br/>Complete the summary using the list of phrases, A-F, below.<br/>Write the correct letter, A-F, in boxes 24—26 on your answer sheet.<br/>Using Al in the UK health system<br/>Al currently has a limited role in the way 24 are allocated in the<br/>health service. The positive aspect of Al having a bigger role is that it would be<br/>more efficient and lead to patient benefits. However, such a change would result, for<br/>example, in certain 25 not having their current level of",
              "options": [
                "A. medical practitioners",
                "B. specialised tasks",
                "C. available resources",
                "D. reduced illness",
                "E. professional authority",
                "F. technology experts"
              ]
            },
            {
              "num": 25,
              "type": "MCQ",
              "text": "example, in certain 25 not having their current level of",
              "answer": "A",
              "explanation": "The text confirms this: \"Powertul artificial intelligence (Al) needs to be reliably aligned with human values, but does this mean Al will eventually have to.\"",
              "location": "Passage 2",
              "instruction": "Questions 24—26<br/>Complete the summary using the list of phrases, A-F, below.<br/>Write the correct letter, A-F, in boxes 24—26 on your answer sheet.<br/>Using Al in the UK health system<br/>Al currently has a limited role in the way 24 are allocated in the<br/>health service. The positive aspect of Al having a bigger role is that it would be<br/>more efficient and lead to patient benefits. However, such a change would result, for<br/>example, in certain 25 not having their current level of",
              "options": [
                "A. medical practitioners",
                "B. specialised tasks",
                "C. available resources",
                "D. reduced illness",
                "E. professional authority",
                "F. technology experts"
              ]
            },
            {
              "num": 26,
              "type": "MCQ",
              "text": "Write the correct letter, A-F, in boxes 24—26 on your answer sheet.",
              "answer": "E",
              "explanation": "The text confirms this: \"Powertul artificial intelligence (Al) needs to be reliably aligned with human values, but does this mean Al will eventually have to.\"",
              "location": "Passage 2",
              "instruction": "Questions 24—26<br/>Complete the summary using the list of phrases, A-F, below.<br/>Write the correct letter, A-F, in boxes 24—26 on your answer sheet.<br/>Using Al in the UK health system<br/>Al currently has a limited role in the way 24 are allocated in the<br/>health service. The positive aspect of Al having a bigger role is that it would be<br/>more efficient and lead to patient benefits. However, such a change would result, for<br/>example, in certain 25 not having their current level of",
              "options": [
                "A. medical practitioners",
                "B. specialised tasks",
                "C. available resources",
                "D. reduced illness",
                "E. professional authority",
                "F. technology experts"
              ]
            }
          ]
        },
        {
          "title": "An ideal city",
          "text": "<h1>An ideal city</h1>\n<p>Leonardo da Vinci's ideal city was centuries ahead of its time. Although it was never built, his plans show a deep understanding of urban design and public health.</p>\n<p>Leonardo's ideal city was a response to the conditions he saw in Milan in the late 15th century. At the time, the city was crowded, dirty, and prone to disease. In 1484, a plague outbreak killed nearly fifty thousand people, about one-third of Milan's population. Leonardo believed that poor city planning and lack of sanitation were the main reasons for the high death toll.</p>\n<p>Rather than a single town planner or architect, Leonardo envisioned a collaborative effort to design a city from scratch. He proposed building a new city along the Ticino River, which would provide water for drinking, cleaning, and transport. The city would be divided into ten boroughs, each holding about thirty thousand people, to prevent overcrowding.</p>\n<p>His plans for a modern and 'rational' city were consistent with Renaissance ideals. But, in keeping with his personality, Leonardo went much further, designing a multi-layered city with separate levels for different functions. The upper level would be used by pedestrians and carriages, with spacious, clean streets, elegant palaces, and public squares. The lower level would be used for trade, sewage, and transport, with canals and subterranean tunnels.</p>\n<p>Although Leonardo's city shared many of the ideals of his time, some of his innovations were considered unconventional in their design. They included features that can be seen in some tower blocks today, such as spiral staircases on the exterior of a building, which would save space inside and provide an escape route in case of fire or attack.</p>\n<p>It is not surprising that Leonardo's ideal city was never built. His plans were too ambitious, expensive, and technically challenging for the rulers of Milan. The technology of the 15th century was not advanced enough to build the complex canals, locks, and underground tunnels he envisioned. Furthermore, the city was constantly at war, and resources were directed toward military defense rather than urban development.</p>\n<p>For the time, the designs were remarkably forward-thinking. Leonardo understood that the health and happiness of a city's inhabitants depended on its design. He believed that streets should be wide to allow light and air to circulate, and that the height of buildings should be limited to prevent them from blocking the sun. His ideas remain relevant to modern urban planners who face challenges of overcrowding, pollution, and disease in today's cities.</p>",
          "questions": [
            {
              "num": 27,
              "type": "TFNG",
              "text": "People first referred to Leonardo da Vinci as a genius 500 years ago.",
              "answer": "NOT GIVEN",
              "explanation": "The passage confirms that the answer is 'NOT GIVEN'.",
              "location": "Passage 3",
              "instruction": "Questions 27-33<br/>Do the following statements agree with the information given in Reading Passage 3?<br/>In boxes 27—33 on your answer sheet, Write<br/>TRUE if the statement agrees with the information<br/>FALSE if the statement contradicts the information<br/>NOT GIVEN _ if there is no information on this",
              "options": [
                "TRUE",
                "FALSE",
                "NOT GIVEN"
              ]
            },
            {
              "num": 28,
              "type": "TFNG",
              "text": "The current climate crisis is predicted to cause more deaths than the plague.",
              "answer": "NOT GIVEN",
              "explanation": "The passage confirms that the answer is 'NOT GIVEN'.",
              "location": "Passage 3",
              "instruction": "Questions 27-33<br/>Do the following statements agree with the information given in Reading Passage 3?<br/>In boxes 27—33 on your answer sheet, Write<br/>TRUE if the statement agrees with the information<br/>FALSE if the statement contradicts the information<br/>NOT GIVEN _ if there is no information on this",
              "options": [
                "TRUE",
                "FALSE",
                "NOT GIVEN"
              ]
            },
            {
              "num": 29,
              "type": "TFNG",
              "text": "Some of the challenges we face today can be compared to those of earlier times.",
              "answer": "TRUE",
              "explanation": "The text confirms this: \"A true Renaissance man, he embodied scientific spirit, artistic talent and humanist sensibilities.\"",
              "location": "Passage 3",
              "instruction": "Questions 27-33<br/>Do the following statements agree with the information given in Reading Passage 3?<br/>In boxes 27—33 on your answer sheet, Write<br/>TRUE if the statement agrees with the information<br/>FALSE if the statement contradicts the information<br/>NOT GIVEN _ if there is no information on this",
              "options": [
                "TRUE",
                "FALSE",
                "NOT GIVEN"
              ]
            },
            {
              "num": 30,
              "type": "TFNG",
              "text": "Leonardo da Vinci's 'ideal city' was constructed in the 15th century.",
              "answer": "FALSE",
              "explanation": "The passage confirms that the answer is 'FALSE'.",
              "location": "Passage 3",
              "instruction": "Questions 27-33<br/>Do the following statements agree with the information given in Reading Passage 3?<br/>In boxes 27—33 on your answer sheet, Write<br/>TRUE if the statement agrees with the information<br/>FALSE if the statement contradicts the information<br/>NOT GIVEN _ if there is no information on this",
              "options": [
                "TRUE",
                "FALSE",
                "NOT GIVEN"
              ]
            },
            {
              "num": 31,
              "type": "TFNG",
              "text": "Poor town planning is a major contributor to climate change.",
              "answer": "TRUE",
              "explanation": "The text confirms this: \"A true Renaissance man, he embodied scientific spirit, artistic talent and humanist sensibilities.\"",
              "location": "Passage 3",
              "instruction": "Questions 27-33<br/>Do the following statements agree with the information given in Reading Passage 3?<br/>In boxes 27—33 on your answer sheet, Write<br/>TRUE if the statement agrees with the information<br/>FALSE if the statement contradicts the information<br/>NOT GIVEN _ if there is no information on this",
              "options": [
                "TRUE",
                "FALSE",
                "NOT GIVEN"
              ]
            },
            {
              "num": 32,
              "type": "TFNG",
              "text": "In Renaissance times, local people fought against the changes to Pienza and Ferrara.",
              "answer": "NOT GIVEN",
              "explanation": "The passage confirms that the answer is 'NOT GIVEN'.",
              "location": "Passage 3",
              "instruction": "Questions 27-33<br/>Do the following statements agree with the information given in Reading Passage 3?<br/>In boxes 27—33 on your answer sheet, Write<br/>TRUE if the statement agrees with the information<br/>FALSE if the statement contradicts the information<br/>NOT GIVEN _ if there is no information on this",
              "options": [
                "TRUE",
                "FALSE",
                "NOT GIVEN"
              ]
            },
            {
              "num": 33,
              "type": "TFNG",
              "text": "Leonardo da Vinci kept a neat, organised record of his designs.",
              "answer": "FALSE",
              "explanation": "The passage confirms that the answer is 'FALSE'.",
              "location": "Passage 3",
              "instruction": "Questions 27-33<br/>Do the following statements agree with the information given in Reading Passage 3?<br/>In boxes 27—33 on your answer sheet, Write<br/>TRUE if the statement agrees with the information<br/>FALSE if the statement contradicts the information<br/>NOT GIVEN _ if there is no information on this",
              "options": [
                "TRUE",
                "FALSE",
                "NOT GIVEN"
              ]
            },
            {
              "num": 34,
              "type": "FILL",
              "text": "A collection of Leonardo da Vinci’s paperwork reveals his design of a new city beside the Ticino River. This was to provide better _________ for trade and a less polluted environment.",
              "answer": "transport",
              "explanation": "The text confirms this: \"He designed the city for the easy transport of goods and clean urban spaces, and he wanted a comfortable and spacious city, with well-ordered streets and architecture.\"",
              "location": "Passage 3",
              "instruction": "Questions 34—40<br/>Complete the summary below.<br/>Choose ONE WORD ONLY from the passage for each answer.<br/>Write your answers in boxes 34—40 on your answer sheet.<br/>Leonardo da Vinci's ideal city<br/>A collection of Leonardo da Vinci's paperwork reveals his design of a new city<br/>beside the Ticino River. This was to provide better 34 for trade<br/>and a less polluted environment. Although Leonardo da Vinci's city shared many of<br/>the ideals of his time, some of his innovations were considered unconventional in<br/>their design. They included features that can be seen in some tower blocks today,<br/>such as 35 on the exterior of a building.<br/>Leonardo da Vinci wasn't only an architect. His expertise in 36<br/>was evident in his plans for artificial canals within his ideal city. He also believed<br/>that the height of houses should relate to the width of streets in case earthquakes<br/>occurred. The design of many cities in Italy today fOIOWS this 37 ..esessssssssseessnsesnsseen '<br/>While some cities from 38 times have aspects that can also be<br/>found in Leonardo's designs, his ideas weren't put into practice until long after his<br/>death. 39 is one example of a city that was redesigned in the<br/>19th century in the way that Leonardo had envisaged. His ideas are also relevant to<br/>today's world, where building 40 no longer seems to be the best<br/>approach.<br/>(Spm) 51"
            },
            {
              "num": 35,
              "type": "FILL",
              "text": "such as _________ on the exterior of a building.",
              "answer": "staircases",
              "explanation": "The text confirms this: \"Leonardo wanted the city to be built on several levels, linked with vertical outdoor staircases.\"",
              "location": "Passage 3",
              "instruction": "Questions 34—40<br/>Complete the summary below.<br/>Choose ONE WORD ONLY from the passage for each answer.<br/>Write your answers in boxes 34—40 on your answer sheet.<br/>Leonardo da Vinci's ideal city<br/>A collection of Leonardo da Vinci's paperwork reveals his design of a new city<br/>beside the Ticino River. This was to provide better 34 for trade<br/>and a less polluted environment. Although Leonardo da Vinci's city shared many of<br/>the ideals of his time, some of his innovations were considered unconventional in<br/>their design. They included features that can be seen in some tower blocks today,<br/>such as 35 on the exterior of a building.<br/>Leonardo da Vinci wasn't only an architect. His expertise in 36<br/>was evident in his plans for artificial canals within his ideal city. He also believed<br/>that the height of houses should relate to the width of streets in case earthquakes<br/>occurred. The design of many cities in Italy today fOIOWS this 37 ..esessssssssseessnsesnsseen '<br/>While some cities from 38 times have aspects that can also be<br/>found in Leonardo's designs, his ideas weren't put into practice until long after his<br/>death. 39 is one example of a city that was redesigned in the<br/>19th century in the way that Leonardo had envisaged. His ideas are also relevant to<br/>today's world, where building 40 no longer seems to be the best<br/>approach.<br/>(Spm) 51"
            },
            {
              "num": 36,
              "type": "FILL",
              "text": "Leonardo da Vinci wasn't only an architect. His expertise in _________",
              "answer": "engineering",
              "explanation": "The text confirms this: \"But the true originality of Leonardo's vision was its fusion of architecture and engineering.\"",
              "location": "Passage 3",
              "instruction": "Questions 34—40<br/>Complete the summary below.<br/>Choose ONE WORD ONLY from the passage for each answer.<br/>Write your answers in boxes 34—40 on your answer sheet.<br/>Leonardo da Vinci's ideal city<br/>A collection of Leonardo da Vinci's paperwork reveals his design of a new city<br/>beside the Ticino River. This was to provide better 34 for trade<br/>and a less polluted environment. Although Leonardo da Vinci's city shared many of<br/>the ideals of his time, some of his innovations were considered unconventional in<br/>their design. They included features that can be seen in some tower blocks today,<br/>such as 35 on the exterior of a building.<br/>Leonardo da Vinci wasn't only an architect. His expertise in 36<br/>was evident in his plans for artificial canals within his ideal city. He also believed<br/>that the height of houses should relate to the width of streets in case earthquakes<br/>occurred. The design of many cities in Italy today fOIOWS this 37 ..esessssssssseessnsesnsseen '<br/>While some cities from 38 times have aspects that can also be<br/>found in Leonardo's designs, his ideas weren't put into practice until long after his<br/>death. 39 is one example of a city that was redesigned in the<br/>19th century in the way that Leonardo had envisaged. His ideas are also relevant to<br/>today's world, where building 40 no longer seems to be the best<br/>approach.<br/>(Spm) 51"
            },
            {
              "num": 37,
              "type": "FILL",
              "text": "occurred. The design of many cities in Italy today fOIOWS this _________ ..esessssssssseessnsesnsseen '",
              "answer": "rule",
              "explanation": "The text confirms this: \"Leonardo also thought that the width of the streets ought to match the average height of the adjacent houses: a rule still followed in many contemporary cities across Italy, to allow access to sun and reduce the risk of damage from earthquakes.\"",
              "location": "Passage 3",
              "instruction": "Questions 34—40<br/>Complete the summary below.<br/>Choose ONE WORD ONLY from the passage for each answer.<br/>Write your answers in boxes 34—40 on your answer sheet.<br/>Leonardo da Vinci's ideal city<br/>A collection of Leonardo da Vinci's paperwork reveals his design of a new city<br/>beside the Ticino River. This was to provide better 34 for trade<br/>and a less polluted environment. Although Leonardo da Vinci's city shared many of<br/>the ideals of his time, some of his innovations were considered unconventional in<br/>their design. They included features that can be seen in some tower blocks today,<br/>such as 35 on the exterior of a building.<br/>Leonardo da Vinci wasn't only an architect. His expertise in 36<br/>was evident in his plans for artificial canals within his ideal city. He also believed<br/>that the height of houses should relate to the width of streets in case earthquakes<br/>occurred. The design of many cities in Italy today fOIOWS this 37 ..esessssssssseessnsesnsseen '<br/>While some cities from 38 times have aspects that can also be<br/>found in Leonardo's designs, his ideas weren't put into practice until long after his<br/>death. 39 is one example of a city that was redesigned in the<br/>19th century in the way that Leonardo had envisaged. His ideas are also relevant to<br/>today's world, where building 40 no longer seems to be the best<br/>approach.<br/>(Spm) 51"
            },
            {
              "num": 38,
              "type": "FILL",
              "text": "While some cities from _________ times have aspects that can also be",
              "answer": "Roman",
              "explanation": "The text confirms this: \"Although some of these features existed in Roman cities, before Leonardo's drawings there had never been a multi-level, compact modern city which was thoroughly technically conceived.\"",
              "location": "Passage 3",
              "instruction": "Questions 34—40<br/>Complete the summary below.<br/>Choose ONE WORD ONLY from the passage for each answer.<br/>Write your answers in boxes 34—40 on your answer sheet.<br/>Leonardo da Vinci's ideal city<br/>A collection of Leonardo da Vinci's paperwork reveals his design of a new city<br/>beside the Ticino River. This was to provide better 34 for trade<br/>and a less polluted environment. Although Leonardo da Vinci's city shared many of<br/>the ideals of his time, some of his innovations were considered unconventional in<br/>their design. They included features that can be seen in some tower blocks today,<br/>such as 35 on the exterior of a building.<br/>Leonardo da Vinci wasn't only an architect. His expertise in 36<br/>was evident in his plans for artificial canals within his ideal city. He also believed<br/>that the height of houses should relate to the width of streets in case earthquakes<br/>occurred. The design of many cities in Italy today fOIOWS this 37 ..esessssssssseessnsesnsseen '<br/>While some cities from 38 times have aspects that can also be<br/>found in Leonardo's designs, his ideas weren't put into practice until long after his<br/>death. 39 is one example of a city that was redesigned in the<br/>19th century in the way that Leonardo had envisaged. His ideas are also relevant to<br/>today's world, where building 40 no longer seems to be the best<br/>approach.<br/>(Spm) 51"
            },
            {
              "num": 39,
              "type": "FILL",
              "text": "death. _________ is one example of a city that was redesigned in the",
              "answer": "Paris",
              "explanation": "The text confirms this: \"For example, the subdivision of the city by function — with services and infrastructures located in the lower levels and wide and well-ventilated boulevards and walkways above for residents — is an idea that can be found in Georges-Eugéne Haussmann's renovation of Paris under Emperor Napoleon III between 1853 and 1870.\"",
              "location": "Passage 3",
              "instruction": "Questions 34—40<br/>Complete the summary below.<br/>Choose ONE WORD ONLY from the passage for each answer.<br/>Write your answers in boxes 34—40 on your answer sheet.<br/>Leonardo da Vinci's ideal city<br/>A collection of Leonardo da Vinci's paperwork reveals his design of a new city<br/>beside the Ticino River. This was to provide better 34 for trade<br/>and a less polluted environment. Although Leonardo da Vinci's city shared many of<br/>the ideals of his time, some of his innovations were considered unconventional in<br/>their design. They included features that can be seen in some tower blocks today,<br/>such as 35 on the exterior of a building.<br/>Leonardo da Vinci wasn't only an architect. His expertise in 36<br/>was evident in his plans for artificial canals within his ideal city. He also believed<br/>that the height of houses should relate to the width of streets in case earthquakes<br/>occurred. The design of many cities in Italy today fOIOWS this 37 ..esessssssssseessnsesnsseen '<br/>While some cities from 38 times have aspects that can also be<br/>found in Leonardo's designs, his ideas weren't put into practice until long after his<br/>death. 39 is one example of a city that was redesigned in the<br/>19th century in the way that Leonardo had envisaged. His ideas are also relevant to<br/>today's world, where building 40 no longer seems to be the best<br/>approach.<br/>(Spm) 51"
            },
            {
              "num": 40,
              "type": "FILL",
              "text": "His ideas are also relevant to today’s world, where building _________ no longer seems to be the best approach.",
              "answer": "outwards",
              "explanation": "The text confirms this: \"Many scholars think that the compact city, built upwards instead of outwards, integrated with nature (especially water systems), with efficient transport infrastructure, could help modern cities become more efficient and sustainable.\"",
              "location": "Passage 3",
              "instruction": "Questions 34—40<br/>Complete the summary below.<br/>Choose ONE WORD ONLY from the passage for each answer.<br/>Write your answers in boxes 34—40 on your answer sheet.<br/>Leonardo da Vinci's ideal city<br/>A collection of Leonardo da Vinci's paperwork reveals his design of a new city<br/>beside the Ticino River. This was to provide better 34 for trade<br/>and a less polluted environment. Although Leonardo da Vinci's city shared many of<br/>the ideals of his time, some of his innovations were considered unconventional in<br/>their design. They included features that can be seen in some tower blocks today,<br/>such as 35 on the exterior of a building.<br/>Leonardo da Vinci wasn't only an architect. His expertise in 36<br/>was evident in his plans for artificial canals within his ideal city. He also believed<br/>that the height of houses should relate to the width of streets in case earthquakes<br/>occurred. The design of many cities in Italy today fOIOWS this 37 ..esessssssssseessnsesnsseen '<br/>While some cities from 38 times have aspects that can also be<br/>found in Leonardo's designs, his ideas weren't put into practice until long after his<br/>death. 39 is one example of a city that was redesigned in the<br/>19th century in the way that Leonardo had envisaged. His ideas are also relevant to<br/>today's world, where building 40 no longer seems to be the best<br/>approach.<br/>(Spm) 51"
            }
          ]
        }
      ]
    },
    "writing": {
      "task1": {
        "prompt": "The chart below shows the number of households in the US by their annual income in 2007, 2011 and 2015.",
        "image": "<img src=\"images/writing_t2_p1.png\" class=\"max-w-full h-auto mx-auto rounded-xl shadow-lg border border-white/10 bg-white\" alt=\"Writing Task 1 Graph\" />",
        "modelAnswer": "TASK 1 This is an answer written by a candidate who achieved a Band 5.5 score. The graph illustrats the data of different levels of annual wage of families in the united states in 2001, 2011 and 2015. Ds far as the number of families whose annual income was less than $25,000, it began with around >5 million in 2007, then increased to approximately 27 million in 2011, but decreased by 2 million 4 years later. Similarly, those of families that earned $25,000 to $49 9979 were about 25 million in 2001, after that it rose to nearly 20 million in 2011. Finally it decreased to around 21 million in 2015. By contrast, the groups of families which have high income, including $15,000 to $99,997 and $100,000 or more, experienced a drop in 2011, but their data went up in 2015. Interesting things could be seen in the group of middle income, the data remain the same in 2001, 20l1 and 2015. Here is the examiner's comment: This response does present most of the data within the bar chart and the key features required. To improve the response, an overview of the information should be included, for example: Across the 8 years, households with incomes below $50,000 rose, then fell back slightly, households with incomes of over $75,000 fell slightly then increased and those with the mid-level incomes remained the same. The information is arranged coherently, starting with the details for the lower- income households, then the higher, then the mid-section. There are some affective cohesive devices [As far as | Similarly | By contrast]. The vocabulary is suitable for the task, but there is an error [>5 million / 25 million] which is not helpful when reporting the details. There is a mix of simple and complex structures, with sentences that contain multiple clauses. There are some examples of missing capitalisation [united states / United States] with some errors [remain / remained]. To improve the response, it is important to re-read to check for small errors with vocabulary and to include an overview or summary of the salient information. 130 "
      },
      "task2": {
        "prompt": "Some university students want to learn about other subjects in addition to their main subjects. Others believe it is more important to give all their time and attention to studying for a qualification. Discuss both these views and give your own opinion.",
        "modelAnswer": "TASK 2"
      }
    }
  },
  "3": {
    "title": "Cambridge IELTS 18 — Test 3",
    "book": "IELTS 18",
    "listening": {
      "sections": [
        {
          "id": 1,
          "title": "Part 1: Real Practice",
          "description": "Official IELTS 18 Test 3 Listening Part 1.",
          "audio": "audio/IELTS_18_Test_3_Part1.m4a",
          "transcript": "<p><b>BREDA:</b> Hello, Wayside Camera Club, Breda speaking.</p><p><b>DAN:</b> Oh, hello, um, my name's Dan and I'd like to join your club.</p><p><b>BREDA:</b> That's great, Dan. We have an application form — would you like to complete it</p><p>over the phone, then you can ask any questions you might have?</p><p><b>DAN:</b> Oh, yes, thanks.</p><p>BREDA OK, so what's your family name?</p><p><b>DAN:</b> It's Green — Dan Green.</p><p>BREDA So — can | take your email address?</p><p><b>DAN:</b> Yes, it's dan1068@market.com.</p><p>BREDA Thanks. And what about your home address?</p><p><b>DAN:</b> Well, I'm about ten miles away from your club in Peacetown. | live in a house</p><p>. there.</p><p>BREDA OK, so what's the house number and street?</p><p><b>DAN:</b> It's 52 Marrowfield Street.</p><p>BREDA Is that M-A double R-O-W-F-I-E-L-D?</p><p><b>DAN:</b> That's right.</p><p>BREDA ... and that's Peacetown, you said?</p><p><b>DAN:</b> Uhuh.</p><p>BREDA So how did you hear about our club? Did you look on the internet?</p><p><b>DAN:</b> | usually do that, but this time, well, | was talking to a relative the other day and</p><p>he suggested it.</p><p>BREDA Oh, is he a member too?</p><p><b>DAN:</b> He belongs to another club — but he'd heard good things about yours.</p><p>BREDA OK. So what do you hope to get from joining?</p><p><b>DAN:</b> Well, one thing that really interests me is the competitions that you have. | enjoy</p><p>entering those.</p><p>BREDA Right. Anything else?</p><p><b>DAN:</b> Well, also like to socialise with other photographers.</p><p>BREDA That's great. So what type of membership would you like?</p><p><b>DAN:</b> What are the options?</p><p>BREDA It's £30 a year for full membership or £20 a year if you're an associate.</p><p><b>DAN:</b> | think I'll go for the full membership, then.</p><p>BREDA That's a good idea because you can't vote in meetings with an associate</p><p>membership.</p><p>BREDA If | could just find out a bit more about you ...</p><p><b>DAN:</b> OK.</p><p>BREDA So you said you wanted to compete — have you ever won any photography</p><p>competitions?</p><p><b>DAN:</b> Not yet, but | have entered three in the past.</p><p>BREDA Oh, that's interesting. So why don't you tell me something about those? Let's</p><p>start with the first one.</p><p><b>DAN:</b> Well, the theme was entitled 'Domestic Life'.</p><p>BREDA | see — so it had to be something related to the home?</p><p>Q1</p><p>Q2</p><p>Q3</p><p>Q4</p><p>Q5</p><p>109</p><p><b>DAN:</b> Yeah. | chose to take a photo of a family sitting round the dinner table having a</p><p>meal, and, um, | didn't win, but | did get some feedback.</p><p><b>BREDA:</b> Oh, what did the judges say?</p><p><b>DAN:</b> That it was too 'busy' as a picture.</p><p><b>BREDA:</b> Aha — so it was the composition of the picture that they criticised?</p><p><b>DAN:</b> That's right — and once they'd told me that, | could see my mistake.</p><p><b>BREDA:</b> So what was the theme of the second competition?</p><p><b>DAN:</b> Well, my university was on the coast and that area gets a lot of beautiful sunsets,</p><p>so that was the theme.</p><p><b>BREDA:</b> Oh, sunsets, that's a great theme.</p><p><b>DAN:</b> Yes. The instructions were to capture the clouds as well — it couldn't just be blue</p><p>sky and a setting sun.</p><p><b>BREDA:</b> Sure, cause they give you all those amazing pinks and purples.</p><p><b>DAN:</b> Yeah — and | thought I'd done that well, but the feedback was that | should have</p><p>waited a bit longer to get the shot.</p><p><b>BREDA:</b> | see. So the timing wasn't right.</p><p><b>DAN:</b> Yes — | took it too soon, basically. And then the third competition | entered was</p><p>called 'Animal Magic'.</p><p><b>BREDA:</b> Well, that's a difficult subject!</p><p><b>DAN:</b> | know! | had to take hundreds of shots.</p><p><b>BREDA:</b> I'm sure — because animals move all the time.</p><p><b>DAN:</b> That's what we had to show — there had to be some movement in the scene. |</p><p>got a great shot of a fox in the end, but | took it at night and, well, | suspected</p><p>that it was a bit dark, which is what 1 was told.</p><p><b>BREDA:</b> Well Dan — you seem to be really keen and we'd be delighted to have you in our</p><p>club. I'm sure we can help with all those areas that you've outlined.</p><p><b>DAN:</b> Thanks, that's great.</p>",
          "questions": [
            {
              "num": 1,
              "type": "FILL",
              "text": "Home address: 52 _________ Street.",
              "answer": "Marrowfield",
              "explanation": "The transcript states: \"DAN: It's 52 Marrowfield Street.\"",
              "instruction": "Questions 1-4<br/>Complete the form below.<br/>Write ONE WORD AND/OR A NUMBER for each answer."
            },
            {
              "num": 2,
              "type": "FILL",
              "text": "Heard about us from a _________.",
              "answer": "relative",
              "explanation": "The transcript states: \"DAN: | usually do that, but this time, well, | was talking to a relative the other day and he suggested it.\"",
              "instruction": "Questions 1-4<br/>Complete the form below.<br/>Write ONE WORD AND/OR A NUMBER for each answer."
            },
            {
              "num": 3,
              "type": "FILL",
              "text": "Reasons for joining: to _________ with other photographers.",
              "answer": "socialise",
              "explanation": "The transcript states: \"DAN: Well, also like to socialise with other photographers.\"",
              "instruction": "Questions 1-4<br/>Complete the form below.<br/>Write ONE WORD AND/OR A NUMBER for each answer."
            },
            {
              "num": 4,
              "type": "FILL",
              "text": "Type of membership: _________ membership.",
              "answer": "full",
              "explanation": "The transcript states: \"BREDA It's £30 a year for full membership or £20 a year if you're an associate.\"",
              "instruction": "Questions 1-4<br/>Complete the form below.<br/>Write ONE WORD AND/OR A NUMBER for each answer."
            },
            {
              "num": 5,
              "type": "FILL",
              "text": "Title of first competition entered: _________.",
              "answer": "Domestic Life",
              "explanation": "The transcript states: \"DAN: Well, the theme was entitled 'Domestic Life'.\"",
              "instruction": "Questions 5-10<br/>Complete the table below.<br/>Write NO MORE THAN TWO WORDS for each answer."
            },
            {
              "num": 6,
              "type": "FILL",
              "text": "Instructions: must capture the _________ as well.",
              "answer": "clouds",
              "explanation": "The transcript states: \"The instructions were to capture the clouds as well — it couldn't just be blue sky and a setting sun.\"",
              "instruction": "Questions 5-10<br/>Complete the table below.<br/>Write NO MORE THAN TWO WORDS for each answer."
            },
            {
              "num": 7,
              "type": "FILL",
              "text": "Feedback: the _________ wasn't right.",
              "answer": "timing",
              "explanation": "The transcript states: \"So the timing wasn't right.\"",
              "instruction": "Questions 5-10<br/>Complete the table below.<br/>Write NO MORE THAN TWO WORDS for each answer."
            },
            {
              "num": 8,
              "type": "FILL",
              "text": "Title of second competition entered: _________.",
              "answer": "Animal Magic",
              "explanation": "The transcript states: \"And then the third competition | entered was called 'Animal Magic'.\"",
              "instruction": "Questions 5-10<br/>Complete the table below.<br/>Write NO MORE THAN TWO WORDS for each answer."
            },
            {
              "num": 9,
              "type": "FILL",
              "text": "Instructions: there had to be some _________ in the scene.",
              "answer": "movement",
              "explanation": "The transcript states: \"DAN: That's what we had to show — there had to be some movement in the scene.\"",
              "instruction": "Questions 5-10<br/>Complete the table below.<br/>Write NO MORE THAN TWO WORDS for each answer."
            },
            {
              "num": 10,
              "type": "FILL",
              "text": "Feedback: the photograph was too _________.",
              "answer": "dark",
              "explanation": "The transcript states: \"| got a great shot of a fox in the end, but | took it at night and, well, | suspected that it was a bit dark, which is what 1 was told.\"",
              "instruction": "Questions 5-10<br/>Complete the table below.<br/>Write NO MORE THAN TWO WORDS for each answer."
            }
          ]
        },
        {
          "id": 2,
          "title": "Part 2: Real Practice",
          "description": "Official IELTS 18 Test 3 Listening Part 2.",
          "audio": "audio/IELTS_18_Test_3_Part2.m4a",
          "transcript": "<p><b>PRESENTER:</b> This evening we're delighted to welcome Dan Beagle, who's just written a book</p><p><b>DAN:</b> </p><p>110</p><p>on looking for and finding food in the wild. He's going to tell us everything we</p><p>need to know about picking wild mushrooms.</p><p>Thank you very much. Well, | need to start by talking about safety. You really</p><p>need to know what you're doing because some mushrooms are extremely</p><p>poisonous. Having said that, once you know what to look for, it's really worth</p><p>doing for the amazing variety of mushrooms available — which you can't get in</p><p>the shops. But of course, you have to be very careful and that's why | always say</p><p>you should never consume mushrooms picked by friends or neighbours — always</p><p>remember that some poisonous mushrooms look very similar to edible ones</p><p>and it's easy for people to get confused. The other thing to avoid is mushrooms</p><p>growing beside busy roads for obvious reasons. But nothing beats the taste of</p><p>freshly picked mushrooms — don't forget that the ones in the shops are often</p><p>several days old and past their best.</p><p>There are certain ideas about wild mushrooms that it's important to be aware</p><p>of. Don't listen to people who tell you that it's only OK to eat mushrooms that</p><p>are pale or dull — this is completely untrue. Some edible mushrooms are bright.</p><p>red, for example. Personally, | prefer mushrooms cooked but it won't do you any</p><p>harm to eat them uncooked in salads — it's not necessary to peel them. Another</p><p>Q6</p><p>Q7</p><p>Q8</p><p>Q9</p><p>Q10</p><p>Q11/12</p><p>Q11/12</p><p>Q13/14</p><p>Test 3</p><p>thing you should remember is that you can't tell if a mushroom is safe to eat by</p><p>its smell — some of the most deadly mushrooms have no smell and taste quite</p><p>nice, apparently. Finally, just because deer or squirrels eat a particular mushroom Q13/14</p><p>doesn't mean that you can.</p><p>Of course, mushroom picking is associated with the countryside but if you haven't</p><p>got a car, your local park can be a great place to start. There are usually a range</p><p>of habitats where mushrooms grow, such as playing fields and wooded areas.</p><p>But you need to be there first thing in the morning, as there's likely be a lot of Q15</p><p>competition — not just from people but wildlife too. The deer often get the best</p><p>mushrooms in my local park.</p><p>If you're a complete beginner, | wouldn't recommend going alone or relying on</p><p>photos in a book, even the one I've written! There are some really good phone</p><p>apps for identifying mushrooms, but you can't always rely on getting a good</p><p>signal in the middle of a wood. If possible, you should go with a group led by an Q16</p><p>expert — you'll stay safe and learn a lot that way.</p><p>Conservation is a really important consideration and you must follow a few</p><p>basic rules. You should never pick all the mushrooms in one area — collect only Q17</p><p>enough for your own needs. Be very careful that you don't trample on young</p><p>mushrooms or other plants. And make sure you don't pick any mushrooms that</p><p>are endangered and protected by law.</p><p>There's been a decline in some varieties of wild mushrooms in this part of the</p><p>country. Restaurants are becoming more interested in locally sourced food like</p><p>wild mushrooms, but the biggest problem is that so many new houses have been Q78</p><p>built in this area in the last ten years. And more water is being taken from rivers</p><p>and reservoirs because of this, and mushroom habitats have been destroyed.</p><p>Anyway, a word of advice on storing mushrooms. Collect them in a brown paper</p><p>bag and as soon as you get home, put them in the fridge. They'll be fine for a Q19</p><p>couple of days, but it's best to cook them as soon as possible — after washing</p><p>them really carefully first, of course.</p><p>So everybody knows what a mushroom tastes like, right? Well, you'll be surprised</p><p>by the huge variety of wild mushrooms there are. Be adventurous! They're great Q20</p><p>in so many dishes — stir fries, risottos, pasta. But just be aware that some people</p><p>can react badly to certain varieties so it's a good idea not to eat huge quantities</p><p>to begin with.</p><p>OK, so now I'm going to show you ...</p>",
          "questions": [
            {
              "num": 11,
              "type": "MCQ",
              "text": "Which TWO warnings does Dan give about picking mushrooms? (Select first warning)",
              "answer": "B",
              "explanation": "The transcript states: \"PRESENTER: This evening we're delighted to welcome Dan Beagle, who's just written a book DAN: 110 on looking for and finding food in the wild.\"",
              "instruction": "Questions 11 and 12<br/>Choose TWO letters, A-E.",
              "options": [
                "A. Don't pick more than one variety of mushroom at a time.",
                "B. Don't pick mushrooms near busy roads.",
                "C. Don't eat mushrooms given to you.",
                "D. Don't eat mushrooms while picking them.",
                "E. Don't pick old mushrooms."
              ]
            },
            {
              "num": 12,
              "type": "MCQ",
              "text": "Which TWO warnings does Dan give about picking mushrooms? (Select second warning)",
              "answer": "C",
              "explanation": "The transcript states: \"PRESENTER: This evening we're delighted to welcome Dan Beagle, who's just written a book DAN: 110 on looking for and finding food in the wild.\"",
              "instruction": "Questions 11 and 12<br/>Choose TWO letters, A-E.",
              "options": [
                "A. Don't pick more than one variety of mushroom at a time.",
                "B. Don't pick mushrooms near busy roads.",
                "C. Don't eat mushrooms given to you.",
                "D. Don't eat mushrooms while picking them.",
                "E. Don't pick old mushrooms."
              ]
            },
            {
              "num": 13,
              "type": "MCQ",
              "text": "Which TWO ideas about wild mushrooms does Dan share? (Select first idea)",
              "answer": "B",
              "explanation": "The transcript states: \"PRESENTER: This evening we're delighted to welcome Dan Beagle, who's just written a book DAN: 110 on looking for and finding food in the wild.\"",
              "instruction": "Questions 13 and 14<br/>Choose TWO letters, A-E.",
              "options": [
                "A. They can be found in unexpected places.",
                "B. They have high nutritional value.",
                "C. They have a pleasant smell.",
                "D. They are easy to cook.",
                "E. They are best picked in autumn."
              ]
            },
            {
              "num": 14,
              "type": "MCQ",
              "text": "Which TWO ideas about wild mushrooms does Dan share? (Select second idea)",
              "answer": "D",
              "explanation": "The transcript states: \"PRESENTER: This evening we're delighted to welcome Dan Beagle, who's just written a book DAN: 110 on looking for and finding food in the wild.\"",
              "instruction": "Questions 13 and 14<br/>Choose TWO letters, A-E.",
              "options": [
                "A. They can be found in unexpected places.",
                "B. They have high nutritional value.",
                "C. They have a pleasant smell.",
                "D. They are easy to cook.",
                "E. They are best picked in autumn."
              ]
            },
            {
              "num": 15,
              "type": "MCQ",
              "text": "Questions 15-20",
              "answer": "C",
              "explanation": "The transcript states: \"PRESENTER: This evening we're delighted to welcome Dan Beagle, who's just written a book DAN: 110 on looking for and finding food in the wild.\"",
              "instruction": "Questions 15-20<br/>Choose the correct letter, A, B or C.",
              "options": [
                "A. Which TWO warnings does Dan give about picking mushrooms?",
                "B. Don't pick more than one variety of mushroom at a time.",
                "C. Don't pick mushrooms near busy roads.",
                "D. Don't eat mushrooms given to you."
              ]
            },
            {
              "num": 16,
              "type": "MCQ",
              "text": "Question 16: Choose the correct option:",
              "answer": "B",
              "explanation": "The transcript states: \"PRESENTER: This evening we're delighted to welcome Dan Beagle, who's just written a book DAN: 110 on looking for and finding food in the wild.\"",
              "instruction": "Questions 15-20<br/>Choose the correct letter, A, B or C.",
              "options": [
                "A. Which TWO warnings does Dan give about picking mushrooms?",
                "B. Don't pick more than one variety of mushroom at a time.",
                "C. Don't pick mushrooms near busy roads.",
                "D. Don't eat mushrooms given to you."
              ]
            },
            {
              "num": 17,
              "type": "MCQ",
              "text": "What advice does Dan give about picking mushrooms in parks?",
              "answer": "B",
              "explanation": "The transcript states: \"PRESENTER: This evening we're delighted to welcome Dan Beagle, who's just written a book DAN: 110 on looking for and finding food in the wild.\"",
              "instruction": "Questions 15-20<br/>Choose the correct letter, A, B or C.",
              "options": [
                "A. Choose wooded areas.",
                "B. Don't disturb wildlife.",
                "C. Get there early.",
                "D. An says it is a good idea for beginners to",
                "A. use a mushroom app.",
                "B. join a group.",
                "C. take a reference book.",
                "A. _ selecting only fully gown mushrooms",
                "B. picking a limited amount of mushrooms",
                "C. avoiding areas where rare mushroom species grow",
                "A. Ccording to Dan, some varieties of wild mushrooms are in decline because there is",
                "A. ahuge demand for them from restaurants.",
                "B. alack of rain in this part of the country.",
                "C. arise in building developments locally.",
                "D. An says that when storing mushrooms, people should",
                "A. __ keep them in the fridge for no more than two days.",
                "B. keep them in a brown bag in a dark room.",
                "C. leave them for a period after washing them.",
                "A. Experiment with different recipes.",
                "B. Expect some to have a strong taste.",
                "C. Cook them for a long time."
              ]
            },
            {
              "num": 18,
              "type": "MCQ",
              "text": "Question 18: Choose the correct option:",
              "answer": "C",
              "explanation": "The transcript states: \"PRESENTER: This evening we're delighted to welcome Dan Beagle, who's just written a book DAN: 110 on looking for and finding food in the wild.\"",
              "instruction": "Questions 15-20<br/>Choose the correct letter, A, B or C.",
              "options": [
                "A. Which TWO warnings does Dan give about picking mushrooms?",
                "B. Don't pick more than one variety of mushroom at a time.",
                "C. Don't pick mushrooms near busy roads.",
                "D. Don't eat mushrooms given to you."
              ]
            },
            {
              "num": 19,
              "type": "MCQ",
              "text": "Question 19: Choose the correct option:",
              "answer": "A",
              "explanation": "The transcript states: \"PRESENTER: This evening we're delighted to welcome Dan Beagle, who's just written a book DAN: 110 on looking for and finding food in the wild.\"",
              "instruction": "Questions 15-20<br/>Choose the correct letter, A, B or C.",
              "options": [
                "A. Which TWO warnings does Dan give about picking mushrooms?",
                "B. Don't pick more than one variety of mushroom at a time.",
                "C. Don't pick mushrooms near busy roads.",
                "D. Don't eat mushrooms given to you."
              ]
            },
            {
              "num": 20,
              "type": "MCQ",
              "text": "Questions 11-20",
              "answer": "A",
              "explanation": "The transcript states: \"PRESENTER: This evening we're delighted to welcome Dan Beagle, who's just written a book DAN: 110 on looking for and finding food in the wild.\"",
              "instruction": "Questions 15-20<br/>Choose the correct letter, A, B or C.",
              "options": [
                "A. Which TWO warnings does Dan give about picking mushrooms?",
                "B. Don't pick more than one variety of mushroom at a time.",
                "C. Don't pick mushrooms near busy roads.",
                "D. Don't eat mushrooms given to you."
              ]
            }
          ]
        },
        {
          "id": 3,
          "title": "Part 3: Real Practice",
          "description": "Official IELTS 18 Test 3 Listening Part 3.",
          "audio": "audio/IELTS_18_Test_3_Part3.m4a",
          "transcript": "<p><b>YOUNG MAN:</b> That seminar yesterday on automation and the future of work was really good,</p><p>wasn't it? Looking at the first industrial revolution in Britain in the 19th century</p><p>and seeing how people reacted to massive change was a real eye-opener.</p><p><b>YOUNG WOMAN:</b> Yes. It was interesting to hear how people felt about automation then and</p><p>what challenges they faced. | didn't know that first started with workers in the</p><p>textile industry.</p><p><b>YOUNG MAN:</b> With those protesting workers called the Luddites destroying their knitting</p><p>machines because they were so worried about losing their jobs.</p><p>111</p><p><b>YOUNG WOMAN:</b> </p><p><b>YOUNG MAN:</b> </p><p><b>YOUNG WOMAN:</b> </p><p><b>YOUNG MAN:</b> </p><p><b>YOUNG WOMAN:</b> </p><p><b>YOUNG MAN:</b> </p><p><b>YOUNG WOMAN:</b> </p><p><b>YOUNG MAN:</b> </p><p><b>YOUNG WOMAN:</b> </p><p><b>YOUNG MAN:</b> </p><p><b>YOUNG WOMAN:</b> </p><p><b>YOUNG MAN:</b> </p><p><b>YOUNG WOMAN:</b> </p><p><b>YOUNG MAN:</b> </p><p><b>YOUNG WOMAN:</b> </p><p><b>YOUNG MAN:</b> </p><p><b>YOUNG WOMAN:</b> </p><p><b>YOUNG MAN:</b> </p><p><b>YOUNG WOMAN:</b> </p><p><b>YOUNG MAN:</b> </p><p><b>YOUNG WOMAN:</b> </p><p><b>YOUNG MAN:</b> </p><p><b>YOUNG WOMAN:</b> </p><p>112</p><p>Yes, and ultimately, they didn't achieve anything. And anyway,</p><p>industrialisation created more jobs than it destroyed.</p><p>Yes, that's true — but it probably didn't seem a positive thing at the time. | can</p><p>see why the Luddites felt so threatened.</p><p>| know. I'm sure | would have felt the same. The discussion about the future</p><p>of work was really optimistic for a change. | like the idea that work won't</p><p>involve doing boring, repetitive tasks, as robots will do all that. Normally, you</p><p>only hear negative stuff about the future.</p><p>Bit too optimistic, don't you think? For example, | can't see how people are</p><p>about to have more leisure time, when all the evidence shows people are</p><p>spending longer than ever at work.</p><p>No — that's true. And what about lower unemployment? I'm not so sure about that.</p><p>Perhaps in the long term — but not in the foreseeable future.</p><p>Mmm. And | expect most people will be expected to work until they're much</p><p>older — as everyone's living much longer.</p><p>That's already happening.</p><p>| enjoyed all that stuff on how technology has changed some jobs and how</p><p>they're likely to change in the near future.</p><p>Yeah, incredible. Like accountants. You might think all the technological</p><p>innovations would have put them out of a job, but in fact there are more of them</p><p>than ever. They're still really in demand and have become far more efficient.</p><p>Right. That was amazing. Twenty times more accountants in this country</p><p>compared to the 19th century.</p><p>| know. I'd never have thought that demand for hairdressing would have gone</p><p>up so much in the last hundred years. One hairdresser for every 287 people</p><p>now, compared to one for over 1,500.</p><p>Yeah because people's earning power has gone up so they can afford to</p><p>spend more on personal services like that.</p><p>But technology hasn't changed the actual job that much.</p><p>No, they've got hairdryers, etc. but it's one job where you don't depend on</p><p>a computer ... The kind of work that administrative staff do has changed</p><p>enormously, thanks to technology. Even 20 years ago there were secretaries</p><p>doing dictation and typing.</p><p>Yes. Really boring compared to these days, when they're given much more</p><p>responsibility and higher status.</p><p>Mmm. A lot of graduates go in for this kind of work now ... I'd expected there</p><p>to be a much bigger change in the number of agricultural workers in the</p><p>19th century. But the 1871 census showed that roughly 25% of the population</p><p>worked on the land.</p><p>Yeah, I'd have assumed it would be more than 50%. Now it's less than 0.2%.</p><p>What about care workers?</p><p>They barely existed in the 19th century as people's lifespan was so much</p><p>shorter. But now of course this sector will see huge growth.</p><p>Yeah — and it's hard enough to meet current demand. The future looks quite</p><p>bleak for bank clerks. They've been in decline since ATMs were introduced in</p><p>the eighties.</p><p>And technology will certainly make most of the jobs they do now redundant,</p><p>| think.</p><p>| agree, although the situation may change. It's very hard to predict what</p><p>will happen.</p><p>Q21/22</p><p>Q21/22</p><p>Q23/24</p><p>Q23/24</p><p>Q25</p><p>Q26</p><p>Q27</p><p>Q28</p><p>Q29</p><p>Q30</p>",
          "questions": [
            {
              "num": 21,
              "type": "MCQ",
              "text": "Which TWO opinions about the Luddites do the students express? (Select first opinion)",
              "answer": "A",
              "explanation": "The transcript states: \"YOUNG MAN: That seminar yesterday on automation and the future of work was really good, wasn't it.\"",
              "instruction": "Questions 21 and 22<br/>Choose TWO letters, A-E.",
              "options": [
                "A. Their actions were ineffective.",
                "B. They are still influential today.",
                "C. They have received unfair criticism.",
                "D. They were proved right.",
                "E. Their attitude is understandable."
              ]
            },
            {
              "num": 22,
              "type": "MCQ",
              "text": "Which TWO opinions about the Luddites do the students express? (Select second opinion)",
              "answer": "E",
              "explanation": "The transcript states: \"YOUNG MAN: That seminar yesterday on automation and the future of work was really good, wasn't it.\"",
              "instruction": "Questions 21 and 22<br/>Choose TWO letters, A-E.",
              "options": [
                "A. Their actions were ineffective.",
                "B. They are still influential today.",
                "C. They have received unfair criticism.",
                "D. They were proved right.",
                "E. Their attitude is understandable."
              ]
            },
            {
              "num": 23,
              "type": "MCQ",
              "text": "Which TWO predictions about the future of work do the students agree with? (Select first prediction)",
              "answer": "B",
              "explanation": "The transcript states: \"Looking at the first industrial revolution in Britain in the 19th century and seeing how people reacted to massive change was a real eye-opener.\"",
              "instruction": "Questions 23 and 24<br/>Choose TWO letters, A-E.",
              "options": [
                "A. Many people will have multiple jobs.",
                "B. The working week will be shorter.",
                "C. Most people will work from home.",
                "D. Retirement ages will rise.",
                "E. Traditional careers will disappear."
              ]
            },
            {
              "num": 24,
              "type": "MCQ",
              "text": "Which TWO predictions about the future of work do the students agree with? (Select second prediction)",
              "answer": "D",
              "explanation": "The transcript states: \"YOUNG MAN: That seminar yesterday on automation and the future of work was really good, wasn't it.\"",
              "instruction": "Questions 23 and 24<br/>Choose TWO letters, A-E.",
              "options": [
                "A. Many people will have multiple jobs.",
                "B. The working week will be shorter.",
                "C. Most people will work from home.",
                "D. Retirement ages will rise.",
                "E. Traditional careers will disappear."
              ]
            },
            {
              "num": 25,
              "type": "MCQ",
              "text": "Comment about: Accountants",
              "answer": "G",
              "contentUnavailable": true,
              "explanation": "The transcript states: \"YOUNG MAN: That seminar yesterday on automation and the future of work was really good, wasn't it.\"",
              "instruction": "Questions 25-30<br/>What comment do the students make about each of the following jobs?",
              "options": [
                "A. These jobs are likely to be at risk.",
                "B. Their role will become more important.",
                "C. They will be least affected by AI."
              ]
            },
            {
              "num": 26,
              "type": "MCQ",
              "text": "Comment about: Doctors",
              "answer": "E",
              "contentUnavailable": true,
              "explanation": "The transcript states: \"YOUNG MAN: That seminar yesterday on automation and the future of work was really good, wasn't it.\"",
              "instruction": "Questions 25-30<br/>What comment do the students make about each of the following jobs?",
              "options": [
                "A. These jobs are likely to be at risk.",
                "B. Their role will become more important.",
                "C. They will be least affected by AI."
              ]
            },
            {
              "num": 27,
              "type": "MCQ",
              "text": "Comment about: Teachers",
              "answer": "B",
              "explanation": "The transcript states: \"Looking at the first industrial revolution in Britain in the 19th century and seeing how people reacted to massive change was a real eye-opener.\"",
              "instruction": "Questions 25-30<br/>What comment do the students make about each of the following jobs?",
              "options": [
                "A. These jobs are likely to be at risk.",
                "B. Their role will become more important.",
                "C. They will be least affected by AI."
              ]
            },
            {
              "num": 28,
              "type": "MCQ",
              "text": "Comment about: Drivers",
              "answer": "C",
              "explanation": "The transcript states: \"Looking at the first industrial revolution in Britain in the 19th century and seeing how people reacted to massive change was a real eye-opener.\"",
              "instruction": "Questions 25-30<br/>What comment do the students make about each of the following jobs?",
              "options": [
                "A. These jobs are likely to be at risk.",
                "B. Their role will become more important.",
                "C. They will be least affected by AI."
              ]
            },
            {
              "num": 29,
              "type": "MCQ",
              "text": "Comment about: Musicians",
              "answer": "F",
              "contentUnavailable": true,
              "explanation": "The transcript states: \"YOUNG MAN: That seminar yesterday on automation and the future of work was really good, wasn't it.\"",
              "instruction": "Questions 25-30<br/>What comment do the students make about each of the following jobs?",
              "options": [
                "A. These jobs are likely to be at risk.",
                "B. Their role will become more important.",
                "C. They will be least affected by AI."
              ]
            },
            {
              "num": 30,
              "type": "MCQ",
              "text": "Comment about: Artists",
              "answer": "A",
              "explanation": "The transcript states: \"YOUNG MAN: That seminar yesterday on automation and the future of work was really good, wasn't it.\"",
              "instruction": "Questions 25-30<br/>What comment do the students make about each of the following jobs?",
              "options": [
                "A. These jobs are likely to be at risk.",
                "B. Their role will become more important.",
                "C. They will be least affected by AI."
              ]
            }
          ]
        },
        {
          "id": 4,
          "title": "Part 4: Real Practice",
          "description": "Official IELTS 18 Test 3 Listening Part 4.",
          "audio": "audio/IELTS_18_Test_3_Part4.m4a",
          "transcript": "<p>In today's astronomy lecture, I'm going to talk about the need for a system to manage the</p><p>movement of satellites and other objects in orbit around the Earth. In other words, a Space</p><p>Traffic Management system. We already have effective Air Traffic Control systems that are</p><p>used internationally to ensure that planes navigate our skies safely. Well, Space Traffic</p><p>\"Management is a similar concept, but focusing on the control of satellites.</p><p>The aim of such a system would be to prevent the danger of collisions in space between the</p><p>objects in orbit around the Earth. In order to do this, we'd need to have a set of legal measures.</p><p>and we'd also have to develop the technical systems to enable us to prevent such accidents.</p><p>But unfortunately, at present we don't actually have a Space Traffic Management system that</p><p>works. So why not? What are the problems in developing such a system?</p><p>Well, for one thing, satellites are relatively cheap these days, compared with how they were in the</p><p>past, meaning that more people can afford to put them into space. So there's a lot more of them</p><p>out there, and people aren't just launching single satellites but whole constellations. consisting of</p><p>thousands of them designed to work together. So space is getting more crowded every day.</p><p>But in spite of this, one thing you may be surprised to learn is that you can launch a satellite</p><p>into space and, once it's out there, it doesn't have to send back any information to Earth to</p><p>allow its identification. So while we have international systems for ensuring we know where</p><p>the planes in our skies are, and to prevent them from colliding with one another, when it</p><p>comes to the safety of satellites, at present we don't have anything like enough proper ways_</p><p>of tracking them.</p><p>And it isn't just entire satellites that we need to consider. A greater threat is the huge amount</p><p>of space debris in orbit around the Earth — broken bits of satellite and junk from space</p><p>stations and so on. And some of these are so small that they can be very hard to identify, but</p><p>they can still be very dangerous.</p><p>In addition, some operators may be unwilling to share information about the satellites they've_</p><p>launched. For example, a satellite may be designed for military purposes, or it may have</p><p>been launched for commercial reasons, and the operators don't want competitors to have</p><p>information about it.</p><p>And even if the operators are willing to provide it, the information isn't easy to collect. Details are</p><p>needed about the object itself, as well as about its location at a particular time — and remember</p><p>that a satellite isn't very big, and it's likely to be moving at thousands of kilometres an hour.</p><p>We don't have any sensors that can constantly follow something moving so fast, so all that the</p><p>scientists can do is to put forward a prediction concerning where the satellite is heading next.</p><p>So those are some of the problems that we're facing. Let's consider now some of the solutions</p><p>that have been suggested. One key issue is the way in which information is dealt with. We</p><p>need more information, but it also needs to be accessible at a global level, so we need to</p><p>establish shared standards that we can all agree on for the way in which this information is</p><p>presented. We already do this in other areas of science, so although this is a challenge, it's</p><p>not an impossible task. Then, as all this information's collected, it needs to be put together so</p><p>it can be used, and that will involve creating a single database on which it can be entered.</p><p>As we continue to push forward new developments, congestion of the space environment is only</p><p>going to increase. To cope with this, we need to develop a system like the one I've described to</p><p>coordinate the work of the numerous spacecraft operators, but it's also essential that this system</p><p>is one that establishes trust in the people that use it, both nationally and at a global level.</p><p>One interesting development ...</p><p>Test 3</p><p>Q31</p><p>Q32</p><p>Q33</p><p>Q34</p><p>Q35</p><p>Q36</p><p>Q37</p><p>Q38</p><p>Q39</p><p>Q40</p><p>113</p>",
          "questions": [
            {
              "num": 31,
              "type": "FILL",
              "text": "We need to develop the _________ systems to prevent accidents.",
              "answer": "technical",
              "explanation": "The transcript states: \"and we'd also have to develop the technical systems to enable us to prevent such accidents.\"",
              "instruction": "Questions 31-40<br/>Complete the notes below.<br/>Write ONE WORD ONLY for each answer."
            },
            {
              "num": 32,
              "type": "FILL",
              "text": "e Satellites are now quite _________ and therefore more widespread",
              "answer": "cheap",
              "explanation": "The transcript states: \"Well, for one thing, satellites are relatively cheap these days, compared with how they were in the past, meaning that more people can afford to put them into space.\"",
              "instruction": "Questions 31-40<br/>Complete the notes below.<br/>Write ONE WORD ONLY for each answer."
            },
            {
              "num": 33,
              "type": "FILL",
              "text": "(e.g. there are constellations made up of _________ of satellites).",
              "answer": "thousands",
              "explanation": "The transcript states: \"consisting of thousands of them designed to work together.\"",
              "instruction": "Questions 31-40<br/>Complete the notes below.<br/>Write ONE WORD ONLY for each answer."
            },
            {
              "num": 34,
              "type": "FILL",
              "text": "Satellites do not need to send information back to allow their _________.",
              "answer": "identification",
              "explanation": "The transcript states: \"But in spite of this, one thing you may be surprised to learn is that you can launch a satellite into space and, once it's out there, it doesn't have to send back any information to Earth to allow its identification.\"",
              "instruction": "Questions 31-40<br/>Complete the notes below.<br/>Write ONE WORD ONLY for each answer."
            },
            {
              "num": 35,
              "type": "FILL",
              "text": "There are few systems for _________ satellites.",
              "answer": "tracking",
              "explanation": "The transcript states: \"So while we have international systems for ensuring we know where the planes in our skies are, and to prevent them from colliding with one another, when it comes to the safety of satellites, at present we don't have anything like enough proper ways_ of tracking them.\"",
              "instruction": "Questions 31-40<br/>Complete the notes below.<br/>Write ONE WORD ONLY for each answer."
            },
            {
              "num": 36,
              "type": "FILL",
              "text": "Some satellites are launched for _________ or commercial reasons.",
              "answer": "military",
              "explanation": "The transcript states: \"For example, a satellite may be designed for military purposes, or it may have been launched for commercial reasons, and the operators don't want competitors to have information about it.\"",
              "instruction": "Questions 31-40<br/>Complete the notes below.<br/>Write ONE WORD ONLY for each answer."
            },
            {
              "num": 37,
              "type": "FILL",
              "text": "It may be hard to collect details of the object's _________ at a given",
              "answer": "location",
              "explanation": "The transcript states: \"Details are needed about the object itself, as well as about its location at a particular time — and remember that a satellite isn't very big, and it's likely to be moving at thousands of kilometres an hour.\"",
              "instruction": "Questions 31-40<br/>Complete the notes below.<br/>Write ONE WORD ONLY for each answer."
            },
            {
              "num": 38,
              "type": "FILL",
              "text": "e Scientists can only make a _________ about where the satellite will go.",
              "answer": "prediction",
              "explanation": "The transcript states: \"We don't have any sensors that can constantly follow something moving so fast, so all that the scientists can do is to put forward a prediction concerning where the satellite is heading next.\"",
              "instruction": "Questions 31-40<br/>Complete the notes below.<br/>Write ONE WORD ONLY for each answer."
            },
            {
              "num": 39,
              "type": "FILL",
              "text": "The collected space debris data will be entered onto a single _________.",
              "answer": "database",
              "explanation": "The transcript states: \"Then, as all this information's collected, it needs to be put together so it can be used, and that will involve creating a single database on which it can be entered.\"",
              "instruction": "Questions 31-40<br/>Complete the notes below.<br/>Write ONE WORD ONLY for each answer."
            },
            {
              "num": 40,
              "type": "FILL",
              "text": "The system must establish _________ among the people who use it, both nationally and globally.",
              "answer": "trust",
              "explanation": "The transcript states: \"To cope with this, we need to develop a system like the one I've described to coordinate the work of the numerous spacecraft operators, but it's also essential that this system is one that establishes trust in the people that use it, both nationally and at a global level.\"",
              "instruction": "Questions 31-40<br/>Complete the notes below.<br/>Write ONE WORD ONLY for each answer."
            }
          ]
        }
      ]
    },
    "reading": {
      "passages": [
        {
          "title": "Materials to take us beyond concrete",
          "text": "<h1>Materials to take us beyond concrete</h1>\n<p>Concrete is everywhere, but it's bad for the planet, generating large amounts of carbon dioxide — alternatives are being developed.</p>\n<p><b>A</b> Concrete is the second most used substance in the global economy, after water — and one of the world's biggest single sources of greenhouse gas emissions. The chemical process by which cement, the key ingredient of concrete, is created results in large quantities of carbon dioxide. The UN estimates that there will be 9.8 billion people living on the planet by mid-century. They will need somewhere to live. If concrete is the only answer to the construction of new cities, then carbon emissions will soar, aggravating global warming. And so scientists have started innovating with other materials, in a scramble for alternatives to a universal commodity that has underpinned our modern life for many years.</p>\n<p><b>B</b> The problem with replacing concrete is that it is so very good at what it does. Chris Cheeseman, an engineering professor at Imperial College London, says the key thing to consider is the extent to which concrete is used around the world, and is likely to continue to be used. \"Concrete is not a high-carbon product. Cement is high carbon, but concrete is not. But it is the scale on which it is used that makes it high carbon. The sheer scale of manufacture is so huge, that is the issue.\"</p>\n<p><b>C</b> Not only are the ingredients of concrete relatively cheap and found in abundance in most places around the globe, the stuff itself has marvellous properties: Portland cement, the vital component of concrete, is mouldable and pourable, but quickly sets hard. Cheeseman also notes another advantage: concrete and steel have similar thermal expansion properties, so steel can be used to reinforce concrete, making it far stronger and more flexible as a building material than it could be on its own. According to Cheeseman, all these factors together make concrete hard to beat. \"Concrete is amazing stuff. Making anything with similar properties is going to be very difficult.\"</p>\n<p><b>D</b> A possible alternative to concrete is wood. Making buildings from wood may seem like a rather medieval idea, but climate change is driving architects to turn to treated timber as a possible resource. Recent years have seen the emergence of tall buildings constructed almost entirely from timber. Vancouver, Vienna and Brumunddal in Norway are all home to constructed tall, wooden buildings.</p>\n<p><b>E</b> Using wood to construct buildings, however, is not straightforward. Wood expands as it absorbs moisture from the air and is susceptible to pests, not to mention fire. But treating wood and combining it with other materials can improve its properties. Cross-laminated timber is engineered wood. An adhesive is used to stick layers of solid-sawn timber together, crosswise, to form building blocks. This material is light but has the strength of concrete and steel. Construction experts say that wooden buildings can be constructed at a greater speed than ones of concrete and steel and the process, it seems, is quieter. Stora Enso is Europe's biggest supplier of cross-laminated timber, and its vice-president Markus Mannström reports that the company is seeing increasing demand globally for building in wood, with climate change concerns the key driver. Finland, with its large forests, where Stora Enso is based, has been leading the way, but the company is seeing a rise in demand for its timber products across the world, including in Asia. Of course, using timber in a building also locks away the carbon that it absorbed as it grew. But even treated wood has its limitations and only when a wider range of construction projects has been proven in practice will it be possible to see wood as a real alternative to concrete in constructing tall buildings.</p>\n<p><b>F</b> Fly ash and slag from iron ore are possible alternatives to cement in a concrete mix. Fly ash, a byproduct of coal-burning power plants, can be incorporated into concrete mixes to make up as much as 15 to 30% of the cement, without harming the strength or durability of the resulting mix. Iron-ore slag, a byproduct of the iron-ore smelting process, can be used in a similar way. Their incorporation into concrete mixes has the potential to reduce greenhouse gas emissions.</p>\n<p><b>G</b> But Anna Surgenor, of the UK's Green Building Council, notes that although these waste products can save carbon in the concrete mix, their use is not always straightforward. \"It's possible to replace the cement content in concrete with waste products to lower the overall carbon impact. But there are several calculations that need to be considered across the entire life cycle of the building — these include factoring in where these materials are being shipped from. If they are transported over long distances, using fossil fuels, the use of alternative materials might not make sense from an overall carbon reduction perspective.\" While these technologies are all promising ideas, they are either unproven or based on materials that are not abundant. In their overview of innovation in the concrete industry, Felix Preston and Johanna Lehne of the UK's Royal Institute of International Affairs reached the conclusion that, \"Some novel cements have been discussed for more than a decade within the research community, without breaking through. At present, these alternatives are rarely as cost-effective as conventional cement, and they face raw-material shortages and resistance from customers.\"</p>",
          "questions": [
            {
              "num": 1,
              "type": "MCQ",
              "text": "Reading Passage 1 has eight sections, A-H.",
              "answer": "G",
              "explanation": "The text confirms this: \"Concrete is everywhere, but it's bad for the planet, generating large amounts of carbon A dioxide — alternatives are being developed Concrete is the second most used substance in the global economy, after water — and one of the world's biggest single sources of greenhouse gas emissions.\"",
              "location": "Passage 1",
              "instruction": "Questions 1-4<br/>Reading Passage 1 has eight sections, A-H.<br/>Which section contains the following information?<br/>Write the correct letter, A-H, in boxes 1-4 on your answer sheet.",
              "options": [
                "A. Paragraph A",
                "B. Paragraph B",
                "C. Paragraph C",
                "D. Paragraph D",
                "E. Paragraph E",
                "F. Paragraph F",
                "G. Paragraph G"
              ]
            },
            {
              "num": 2,
              "type": "MCQ",
              "text": "areference to the various locations where high-rise wooden buildings can be found an indication of how widely available the raw materials of concrete are",
              "answer": "D",
              "explanation": "The text confirms this: \"Concrete is everywhere, but it's bad for the planet, generating large amounts of carbon A dioxide — alternatives are being developed Concrete is the second most used substance in the global economy, after water — and one of the world's biggest single sources of greenhouse gas emissions.\"",
              "location": "Passage 1",
              "instruction": "Questions 1-4<br/>Reading Passage 1 has eight sections, A-H.<br/>Which section contains the following information?<br/>Write the correct letter, A-H, in boxes 1-4 on your answer sheet.",
              "options": [
                "A. Paragraph A",
                "B. Paragraph B",
                "C. Paragraph C",
                "D. Paragraph D",
                "E. Paragraph E",
                "F. Paragraph F",
                "G. Paragraph G"
              ]
            },
            {
              "num": 3,
              "type": "MCQ",
              "text": "Question 3: Choose the correct option:",
              "answer": "C",
              "explanation": "The text confirms this: \"Concrete is everywhere, but it's bad for the planet, generating large amounts of carbon A dioxide — alternatives are being developed Concrete is the second most used substance in the global economy, after water — and one of the world's biggest single sources of greenhouse gas emissions.\"",
              "location": "Passage 1",
              "instruction": "Questions 1-4<br/>Reading Passage 1 has eight sections, A-H.<br/>Which section contains the following information?<br/>Write the correct letter, A-H, in boxes 1-4 on your answer sheet.",
              "options": [
                "A. Paragraph A",
                "B. Paragraph B",
                "C. Paragraph C",
                "D. Paragraph D",
                "E. Paragraph E",
                "F. Paragraph F",
                "G. Paragraph G"
              ]
            },
            {
              "num": 4,
              "type": "MCQ",
              "text": "an explanation of the industrial processes that create potential raw materials for concrete",
              "answer": "F",
              "explanation": "The text confirms this: \"Concrete is everywhere, but it's bad for the planet, generating large amounts of carbon A dioxide — alternatives are being developed Concrete is the second most used substance in the global economy, after water — and one of the world's biggest single sources of greenhouse gas emissions.\"",
              "location": "Passage 1",
              "instruction": "Questions 1-4<br/>Reading Passage 1 has eight sections, A-H.<br/>Which section contains the following information?<br/>Write the correct letter, A-H, in boxes 1-4 on your answer sheet.",
              "options": [
                "A. Paragraph A",
                "B. Paragraph B",
                "C. Paragraph C",
                "D. Paragraph D",
                "E. Paragraph E",
                "F. Paragraph F",
                "G. Paragraph G"
              ]
            },
            {
              "num": 5,
              "type": "FILL",
              "text": "Wood is a traditional building material, but current environmental concerns are encouraging _________ to use wood in modern construction projects.",
              "answer": "architects",
              "explanation": "The text confirms this: \"Making buildings from wood may seem like a rather medieval idea, but climate change is driving architects to turn to treated timber as a possible resource.\"",
              "location": "Passage 1",
              "instruction": "Questions 5—8<br/>Complete the summary below.<br/>Choose ONE WORD ONLY from the passage for each answer.<br/>Write your answers in boxes 5—8 on your answer sheet.<br/>Making buildings with wood<br/>Wood is a traditional building material, but current environmental concerns are<br/>encouraging 5 to use wood in modern construction projects.<br/>Using wood, however, has its challenges. For example, as 6<br/>the atmosphere énters wood, it increases in size. In addition, wood is prone to pests<br/>and the risk of fire is greater. However, wood can be turned into a better construction<br/>material if it is treated and combined with other materials. In one process,<br/>of solid wood are glued together to create building blocks. These<br/>blocks are lighter than concrete and steel but equal them in strength. Experts say<br/>that wooden buildings are an improvement on those made of concrete and steel in<br/>terms of the 8 with which they can be constructed and how much<br/>noise is generated by the process."
            },
            {
              "num": 6,
              "type": "FILL",
              "text": "Using wood, however, has its challenges. For example, as _________",
              "answer": "moisture",
              "explanation": "The text confirms this: \"Wood expands as it absorbs moisture from the air and is susceptible to pests, not to mention fire.\"",
              "location": "Passage 1",
              "instruction": "Questions 5—8<br/>Complete the summary below.<br/>Choose ONE WORD ONLY from the passage for each answer.<br/>Write your answers in boxes 5—8 on your answer sheet.<br/>Making buildings with wood<br/>Wood is a traditional building material, but current environmental concerns are<br/>encouraging 5 to use wood in modern construction projects.<br/>Using wood, however, has its challenges. For example, as 6<br/>the atmosphere énters wood, it increases in size. In addition, wood is prone to pests<br/>and the risk of fire is greater. However, wood can be turned into a better construction<br/>material if it is treated and combined with other materials. In one process,<br/>of solid wood are glued together to create building blocks. These<br/>blocks are lighter than concrete and steel but equal them in strength. Experts say<br/>that wooden buildings are an improvement on those made of concrete and steel in<br/>terms of the 8 with which they can be constructed and how much<br/>noise is generated by the process."
            },
            {
              "num": 7,
              "type": "FILL",
              "text": "Question 7: Write your answer here: _________",
              "answer": "layers",
              "explanation": "The text confirms this: \"An adhesive is used to stick layers of solid-sawn timber together, crosswise, to form building blocks.\"",
              "location": "Passage 1",
              "instruction": "Questions 5—8<br/>Complete the summary below.<br/>Choose ONE WORD ONLY from the passage for each answer.<br/>Write your answers in boxes 5—8 on your answer sheet.<br/>Making buildings with wood<br/>Wood is a traditional building material, but current environmental concerns are<br/>encouraging 5 to use wood in modern construction projects.<br/>Using wood, however, has its challenges. For example, as 6<br/>the atmosphere énters wood, it increases in size. In addition, wood is prone to pests<br/>and the risk of fire is greater. However, wood can be turned into a better construction<br/>material if it is treated and combined with other materials. In one process,<br/>of solid wood are glued together to create building blocks. These<br/>blocks are lighter than concrete and steel but equal them in strength. Experts say<br/>that wooden buildings are an improvement on those made of concrete and steel in<br/>terms of the 8 with which they can be constructed and how much<br/>noise is generated by the process."
            },
            {
              "num": 8,
              "type": "FILL",
              "text": "Experts say that wooden buildings are an improvement on those made of concrete and steel in terms of the _________ with which they can be constructed and how much noise is generated by the process.",
              "answer": "speed",
              "explanation": "The text confirms this: \"Construction experts say that wooden buildings can be constructed at a greater speed than ones of concrete and steel and the process, it seems, is quieter.\"",
              "location": "Passage 1",
              "instruction": "Questions 5—8<br/>Complete the summary below.<br/>Choose ONE WORD ONLY from the passage for each answer.<br/>Write your answers in boxes 5—8 on your answer sheet.<br/>Making buildings with wood<br/>Wood is a traditional building material, but current environmental concerns are<br/>encouraging 5 to use wood in modern construction projects.<br/>Using wood, however, has its challenges. For example, as 6<br/>the atmosphere énters wood, it increases in size. In addition, wood is prone to pests<br/>and the risk of fire is greater. However, wood can be turned into a better construction<br/>material if it is treated and combined with other materials. In one process,<br/>of solid wood are glued together to create building blocks. These<br/>blocks are lighter than concrete and steel but equal them in strength. Experts say<br/>that wooden buildings are an improvement on those made of concrete and steel in<br/>terms of the 8 with which they can be constructed and how much<br/>noise is generated by the process."
            },
            {
              "num": 9,
              "type": "MCQ",
              "text": "The environmental advantage of cement alternatives may not be as great as initially assumed.",
              "answer": "C",
              "explanation": "The text confirms this: \"Concrete is everywhere, but it's bad for the planet, generating large amounts of carbon A dioxide — alternatives are being developed Concrete is the second most used substance in the global economy, after water — and one of the world's biggest single sources of greenhouse gas emissions.\"",
              "location": "Passage 1",
              "instruction": "Questions 9-13<br/>Look at the following statements (Questions 9-13) and the list of people below.<br/>Match each statement with the correct person, A, B, C or D.<br/>Write the correct letter, A, B, C or D, in boxes 9-13 on your answer sheet.<br/>NB You may use any letter more than once.",
              "options": [
                "A. Chris Cheeseman",
                "B. Markus Mannström",
                "C. Anna Surgenor",
                "D. Felix Preston and Johanna Lehne"
              ]
            },
            {
              "num": 10,
              "type": "MCQ",
              "text": "It would be hard to create a construction alternative to concrete that offers so many comparable benefits.",
              "answer": "A",
              "explanation": "The text confirms this: \"Concrete is everywhere, but it's bad for the planet, generating large amounts of carbon A dioxide — alternatives are being developed Concrete is the second most used substance in the global economy, after water — and one of the world's biggest single sources of greenhouse gas emissions.\"",
              "location": "Passage 1",
              "instruction": "Questions 9-13<br/>Look at the following statements (Questions 9-13) and the list of people below.<br/>Match each statement with the correct person, A, B, C or D.<br/>Write the correct letter, A, B, C or D, in boxes 9-13 on your answer sheet.<br/>NB You may use any letter more than once.",
              "options": [
                "A. Chris Cheeseman",
                "B. Markus Mannström",
                "C. Anna Surgenor",
                "D. Felix Preston and Johanna Lehne"
              ]
            },
            {
              "num": 11,
              "type": "MCQ",
              "text": "Worries about the environment have led to increased interest in wood as a construction material.",
              "answer": "B",
              "explanation": "The text confirms this: \"Concrete is everywhere, but it's bad for the planet, generating large amounts of carbon A dioxide — alternatives are being developed Concrete is the second most used substance in the global economy, after water — and one of the world's biggest single sources of greenhouse gas emissions.\"",
              "location": "Passage 1",
              "instruction": "Questions 9-13<br/>Look at the following statements (Questions 9-13) and the list of people below.<br/>Match each statement with the correct person, A, B, C or D.<br/>Write the correct letter, A, B, C or D, in boxes 9-13 on your answer sheet.<br/>NB You may use any letter more than once.",
              "options": [
                "A. Chris Cheeseman",
                "B. Markus Mannström",
                "C. Anna Surgenor",
                "D. Felix Preston and Johanna Lehne"
              ]
            },
            {
              "num": 12,
              "type": "MCQ",
              "text": "Expense has been a factor in the negative response to the development of new cements.",
              "answer": "D",
              "explanation": "The text confirms this: \"Concrete is everywhere, but it's bad for the planet, generating large amounts of carbon A dioxide — alternatives are being developed Concrete is the second most used substance in the global economy, after water — and one of the world's biggest single sources of greenhouse gas emissions.\"",
              "location": "Passage 1",
              "instruction": "Questions 9-13<br/>Look at the following statements (Questions 9-13) and the list of people below.<br/>Match each statement with the correct person, A, B, C or D.<br/>Write the correct letter, A, B, C or D, in boxes 9-13 on your answer sheet.<br/>NB You may use any letter more than once.",
              "options": [
                "A. Chris Cheeseman",
                "B. Markus Mannström",
                "C. Anna Surgenor",
                "D. Felix Preston and Johanna Lehne"
              ]
            },
            {
              "num": 13,
              "type": "MCQ",
              "text": "The environmental damage caused by concrete is due to it being produced in large quantities. List of People Chris Cheeseman Markus Mannstr6m Anna Surgenor",
              "answer": "A",
              "explanation": "The text confirms this: \"Concrete is everywhere, but it's bad for the planet, generating large amounts of carbon A dioxide — alternatives are being developed Concrete is the second most used substance in the global economy, after water — and one of the world's biggest single sources of greenhouse gas emissions.\"",
              "location": "Passage 1",
              "instruction": "Questions 9-13<br/>Look at the following statements (Questions 9-13) and the list of people below.<br/>Match each statement with the correct person, A, B, C or D.<br/>Write the correct letter, A, B, C or D, in boxes 9-13 on your answer sheet.<br/>NB You may use any letter more than once.",
              "options": [
                "A. Chris Cheeseman",
                "B. Markus Mannström",
                "C. Anna Surgenor",
                "D. Felix Preston and Johanna Lehne"
              ]
            }
          ]
        },
        {
          "title": "The steam car",
          "text": "<h1>The steam car</h1>\n<p>The successes and failures of the Doble brothers and their steam cars</p>\n<p><b>A</b> When primitive automobiles first began to appear in the late 19th century, their power sources were diverse. There were gasoline-powered engines, electric motors, and steam engines. At the time, steam was a mature and well-understood technology, widely used in locomotives, ships, and factories. Steam cars were quiet, smooth, and powerful, and they did not require a gear shift. However, they had a major drawback: they took a long time to start up, as the water in the boiler had to be heated to produce steam.</p>\n<p><b>B</b> But the glory days of steam cars were few. A new technology called the Internal Combustion Engine (ICE) was developing rapidly. ICE cars were cheaper, lighter, and started instantly. The introduction of the electric starter motor in 1912 eliminated the need to hand-crank ICE cars, making them far more convenient. As a result, steam cars quickly lost popularity and were mostly gone from the market by the 1920s.</p>\n<p><b>C</b> In 1912, the Doble brothers — Abner, John, and Warren — began building steam cars in their home town of Waltham, Massachusetts. They were determined to overcome the drawbacks of steam technology and build a competitive steam car. Their first model, the Model A, was built in their garage and used many parts from other cars. It was a success, but it was not commercially viable. The brothers realised they needed to make their designs more reliable and easier to manufacture.</p>\n<p><b>D</b> In 1914, the brothers built the Model B, which incorporated several innovations. The most important was a condenser that recycled steam back into water, allowing the car to travel much farther on a single tank of water. The Model B also featured a rapid startup system that could produce steam in less than two minutes. The car attracted positive publicity, and the brothers received several orders, but the outbreak of World War I prevented them from starting full-scale production.</p>\n<p><b>E</b> Doble's big breakthrough came with the Model C, which was introduced in 1916. The Model C featured a combustion chamber that burned kerosene cleanly and efficiently, and a steam generator that could start the car in less than forty seconds. The car was quiet, fast, and easy to drive. The Doble brothers raised financial capital and established the Doble Steam Motors Corporation in San Francisco to manufacture the car. However, production was slow, and only a few cars were built before the company faced financial difficulties.</p>\n<p><b>F</b> Later that year Abner Doble delivered unhappy news to those eagerly awaiting the delivery of their modern new cars. Those customers who had paid deposits were told that production had been suspended due to shortages of materials and skilled labour caused by the war. Many customers were disappointed, and some demanded refunds. The Doble brothers tried to keep the company afloat by offering repair services and selling parts, but they were eventually forced to close the factory.</p>\n<p><b>G</b> The brothers made one final attempt to produce a viable steam automobile. In early 1920, they began developing the Model E, which was road-tested in 1924 by the Automobile Club of America. They found it easy to drive, despite its weight, and it impressed the spectators. A later version of the Model E raised its speed, while keeping its emissions extremely low. However, the steam car was too expensive for many people and its design was constantly being altered. Under fifty cars were produced before the company went out of business.</p>\n<p>The steam car was too expensive for many people and its design was constantly being altered. Under 25 cars were produced before the company went out of business. However, even today, there are Model Es on the road in the US. They are straightforward to maintain, and they satisfy California's strict emissions laws. Perhaps today's technology and materials would help us revive the steam car.</p>",
          "questions": [
            {
              "num": 14,
              "type": "MCQ",
              "text": "Question 14: Choose the correct option:",
              "answer": "iii",
              "explanation": "The text confirms this: \"Write the correct number, i—viii, in boxes 14—20 on your answer sheet.\"",
              "location": "Passage 2",
              "instruction": "Questions 24-26<br/>Complete the summary below.<br/>Choose ONE WORD AND/OR A NUMBER from the passage for each answer.<br/>Write your answers in boxes 24—26 on your answer sheet.<br/>The Model E<br/>The Model E was road-tested in 1924 by the Automobile Club of America. They<br/>found it easy to drive, despite its weight, and it impressed the spectators. A later<br/>version of the Model E raised its 24 , while keeping its emissions<br/>extremely low. was too expensive for many people and its design was constantly<br/>being altered. Under 25 cars were produced before the company<br/>went out of business. However, even today, there are Model Es on the road in the<br/>US. They are straightforward to maintain, and they satisfy California's<br/>emissions laws. Perhaps today's technology and materials<br/>would help us revive the steam car.",
              "options": [
                "i. Heading i",
                "ii. Heading ii",
                "iii. Heading iii",
                "iv. Heading iv",
                "v. Heading v",
                "vi. Heading vi",
                "vii. Heading vii",
                "viii. Heading viii"
              ]
            },
            {
              "num": 15,
              "type": "MCQ",
              "text": "Question 15: Choose the correct option:",
              "answer": "viii",
              "explanation": "The text confirms this: \"Write the correct number, i—viii, in boxes 14—20 on your answer sheet.\"",
              "location": "Passage 2",
              "instruction": "Questions 24-26<br/>Complete the summary below.<br/>Choose ONE WORD AND/OR A NUMBER from the passage for each answer.<br/>Write your answers in boxes 24—26 on your answer sheet.<br/>The Model E<br/>The Model E was road-tested in 1924 by the Automobile Club of America. They<br/>found it easy to drive, despite its weight, and it impressed the spectators. A later<br/>version of the Model E raised its 24 , while keeping its emissions<br/>extremely low. was too expensive for many people and its design was constantly<br/>being altered. Under 25 cars were produced before the company<br/>went out of business. However, even today, there are Model Es on the road in the<br/>US. They are straightforward to maintain, and they satisfy California's<br/>emissions laws. Perhaps today's technology and materials<br/>would help us revive the steam car.",
              "options": [
                "i. Heading i",
                "ii. Heading ii",
                "iii. Heading iii",
                "iv. Heading iv",
                "v. Heading v",
                "vi. Heading vi",
                "vii. Heading vii",
                "viii. Heading viii"
              ]
            },
            {
              "num": 16,
              "type": "MCQ",
              "text": "Question 16: Choose the correct option:",
              "answer": "vi",
              "explanation": "The text confirms this: \"Write the correct number, i—viii, in boxes 14—20 on your answer sheet.\"",
              "location": "Passage 2",
              "instruction": "Questions 24-26<br/>Complete the summary below.<br/>Choose ONE WORD AND/OR A NUMBER from the passage for each answer.<br/>Write your answers in boxes 24—26 on your answer sheet.<br/>The Model E<br/>The Model E was road-tested in 1924 by the Automobile Club of America. They<br/>found it easy to drive, despite its weight, and it impressed the spectators. A later<br/>version of the Model E raised its 24 , while keeping its emissions<br/>extremely low. was too expensive for many people and its design was constantly<br/>being altered. Under 25 cars were produced before the company<br/>went out of business. However, even today, there are Model Es on the road in the<br/>US. They are straightforward to maintain, and they satisfy California's<br/>emissions laws. Perhaps today's technology and materials<br/>would help us revive the steam car.",
              "options": [
                "i. Heading i",
                "ii. Heading ii",
                "iii. Heading iii",
                "iv. Heading iv",
                "v. Heading v",
                "vi. Heading vi",
                "vii. Heading vii",
                "viii. Heading viii"
              ]
            },
            {
              "num": 17,
              "type": "MCQ",
              "text": "Question 17: Choose the correct option:",
              "answer": "v",
              "explanation": "The text confirms this: \"Write the correct number, i—viii, in boxes 14—20 on your answer sheet.\"",
              "location": "Passage 2",
              "instruction": "Questions 24-26<br/>Complete the summary below.<br/>Choose ONE WORD AND/OR A NUMBER from the passage for each answer.<br/>Write your answers in boxes 24—26 on your answer sheet.<br/>The Model E<br/>The Model E was road-tested in 1924 by the Automobile Club of America. They<br/>found it easy to drive, despite its weight, and it impressed the spectators. A later<br/>version of the Model E raised its 24 , while keeping its emissions<br/>extremely low. was too expensive for many people and its design was constantly<br/>being altered. Under 25 cars were produced before the company<br/>went out of business. However, even today, there are Model Es on the road in the<br/>US. They are straightforward to maintain, and they satisfy California's<br/>emissions laws. Perhaps today's technology and materials<br/>would help us revive the steam car.",
              "options": [
                "i. Heading i",
                "ii. Heading ii",
                "iii. Heading iii",
                "iv. Heading iv",
                "v. Heading v",
                "vi. Heading vi",
                "vii. Heading vii",
                "viii. Heading viii"
              ]
            },
            {
              "num": 18,
              "type": "MCQ",
              "text": "Question 18: Choose the correct option:",
              "answer": "vii",
              "explanation": "The text confirms this: \"Write the correct number, i—viii, in boxes 14—20 on your answer sheet.\"",
              "location": "Passage 2",
              "instruction": "Questions 24-26<br/>Complete the summary below.<br/>Choose ONE WORD AND/OR A NUMBER from the passage for each answer.<br/>Write your answers in boxes 24—26 on your answer sheet.<br/>The Model E<br/>The Model E was road-tested in 1924 by the Automobile Club of America. They<br/>found it easy to drive, despite its weight, and it impressed the spectators. A later<br/>version of the Model E raised its 24 , while keeping its emissions<br/>extremely low. was too expensive for many people and its design was constantly<br/>being altered. Under 25 cars were produced before the company<br/>went out of business. However, even today, there are Model Es on the road in the<br/>US. They are straightforward to maintain, and they satisfy California's<br/>emissions laws. Perhaps today's technology and materials<br/>would help us revive the steam car.",
              "options": [
                "i. Heading i",
                "ii. Heading ii",
                "iii. Heading iii",
                "iv. Heading iv",
                "v. Heading v",
                "vi. Heading vi",
                "vii. Heading vii",
                "viii. Heading viii"
              ]
            },
            {
              "num": 19,
              "type": "MCQ",
              "text": "Question 19: Choose the correct option:",
              "answer": "i",
              "explanation": "The text confirms this: \"' Questions 14-20 Choose the correct heading for each paragraph from the list of headings below.\"",
              "location": "Passage 2",
              "instruction": "Questions 24-26<br/>Complete the summary below.<br/>Choose ONE WORD AND/OR A NUMBER from the passage for each answer.<br/>Write your answers in boxes 24—26 on your answer sheet.<br/>The Model E<br/>The Model E was road-tested in 1924 by the Automobile Club of America. They<br/>found it easy to drive, despite its weight, and it impressed the spectators. A later<br/>version of the Model E raised its 24 , while keeping its emissions<br/>extremely low. was too expensive for many people and its design was constantly<br/>being altered. Under 25 cars were produced before the company<br/>went out of business. However, even today, there are Model Es on the road in the<br/>US. They are straightforward to maintain, and they satisfy California's<br/>emissions laws. Perhaps today's technology and materials<br/>would help us revive the steam car.",
              "options": [
                "i. Heading i",
                "ii. Heading ii",
                "iii. Heading iii",
                "iv. Heading iv",
                "v. Heading v",
                "vi. Heading vi",
                "vii. Heading vii",
                "viii. Heading viii"
              ]
            },
            {
              "num": 20,
              "type": "MCQ",
              "text": "Question 20: Choose the correct option:",
              "answer": "iv",
              "explanation": "The text confirms this: \"List of Headings i A period in cold conditions before the technology is assessed ii Marketing issues lead to failure iii Good and bad aspects of steam technology are passed on iv Apossible solution to the issues of today v_ Further improvements lead to commercial orders vi Positive publicity at last for this quiet, clean, fast vehicle vii A disappointing outcome for customers A better option than the steam car arises 14 Paragraph A 15 Paragraph B 16 Paragraph C 17 Paragraph D 18 Paragraph E 19 Paragraph F 20 Paragraph G The successes and failures of the Doble brothers and their steam cars When primitive automobiles first began to appear in the 1800s, their engines were based on steam power.\"",
              "location": "Passage 2",
              "instruction": "Questions 24-26<br/>Complete the summary below.<br/>Choose ONE WORD AND/OR A NUMBER from the passage for each answer.<br/>Write your answers in boxes 24—26 on your answer sheet.<br/>The Model E<br/>The Model E was road-tested in 1924 by the Automobile Club of America. They<br/>found it easy to drive, despite its weight, and it impressed the spectators. A later<br/>version of the Model E raised its 24 , while keeping its emissions<br/>extremely low. was too expensive for many people and its design was constantly<br/>being altered. Under 25 cars were produced before the company<br/>went out of business. However, even today, there are Model Es on the road in the<br/>US. They are straightforward to maintain, and they satisfy California's<br/>emissions laws. Perhaps today's technology and materials<br/>would help us revive the steam car.",
              "options": [
                "i. Heading i",
                "ii. Heading ii",
                "iii. Heading iii",
                "iv. Heading iv",
                "v. Heading v",
                "vi. Heading vi",
                "vii. Heading vii",
                "viii. Heading viii"
              ]
            },
            {
              "num": 21,
              "type": "MCQ",
              "text": "What point does the writer make about the steam car in Paragraph B?",
              "answer": "A",
              "explanation": "The text confirms this: \"' Questions 14-20 Choose the correct heading for each paragraph from the list of headings below.\"",
              "location": "Passage 2",
              "instruction": "Questions 21-23<br/>Choose the correct letter, A, B, C or D.<br/>Write the correct letter in boxes 21-23 on your answer sheet.",
              "options": [
                "A. _ lts success was short-lived.",
                "B. Not enough cars were made.",
                "C. Car companies found them hard to sell.",
                "D. People found them hard to drive."
              ]
            },
            {
              "num": 22,
              "type": "MCQ",
              "text": "When building their first steam car, the Doble brothers",
              "answer": "C",
              "explanation": "The text confirms this: \"' Questions 14-20 Choose the correct heading for each paragraph from the list of headings below.\"",
              "location": "Passage 2",
              "instruction": "Questions 21-23<br/>Choose the correct letter, A, B, C or D.<br/>Write the correct letter in boxes 21-23 on your answer sheet.",
              "options": [
                "A. constructed all the parts themselves.",
                "B. made written notes at each stage of the construction.",
                "C. needed several attempts to achieve a competitive model.",
                "D. __ sought the advice of experienced people in the car industry."
              ]
            },
            {
              "num": 23,
              "type": "MCQ",
              "text": "In order to produce the Model C, the Doble brothers moved production to a different city. raised financial capital. employed an additional worker. abandoned their earlier designs. 0OWPY>",
              "answer": "B",
              "explanation": "The text confirms this: \"' Questions 14-20 Choose the correct heading for each paragraph from the list of headings below.\"",
              "location": "Passage 2",
              "instruction": "Questions 21-23<br/>Choose the correct letter, A, B, C or D.<br/>Write the correct letter in boxes 21-23 on your answer sheet.",
              "options": [
                "A. moved production to a different city.",
                "B. raised financial capital.",
                "C. employed an additional worker.",
                "D. abandoned their earlier designs."
              ]
            },
            {
              "num": 24,
              "type": "FILL",
              "text": "A later version of the Model E raised its _________ , while keeping its emissions extremely low.",
              "answer": "speed",
              "explanation": "The text confirms this: \"With these enhancements, the Dobles' new car company promised a steam vehicle which would provide all of the convenience of a gasoline car, but with much greater speed, much simpler driving controls, and a virtually silent powerplant.\"",
              "location": "Passage 2",
              "instruction": "Questions 24-26<br/>Complete the summary below.<br/>Choose ONE WORD AND/OR A NUMBER from the passage for each answer.<br/>Write your answers in boxes 24—26 on your answer sheet.<br/>The Model E<br/>The Model E was road-tested in 1924 by the Automobile Club of America. They<br/>found it easy to drive, despite its weight, and it impressed the spectators. A later<br/>version of the Model E raised its 24 , while keeping its emissions<br/>extremely low. was too expensive for many people and its design was constantly<br/>being altered. Under 25 cars were produced before the company<br/>went out of business. However, even today, there are Model Es on the road in the<br/>US. They are straightforward to maintain, and they satisfy California's<br/>emissions laws. Perhaps today's technology and materials<br/>would help us revive the steam car."
            },
            {
              "num": 25,
              "type": "FILL",
              "text": "being altered. Under _________ cars were produced before the company",
              "answer": "50",
              "explanation": "The passage confirms that the answer is '50'.",
              "location": "Passage 2",
              "instruction": "Questions 24-26<br/>Complete the summary below.<br/>Choose ONE WORD AND/OR A NUMBER from the passage for each answer.<br/>Write your answers in boxes 24—26 on your answer sheet.<br/>The Model E<br/>The Model E was road-tested in 1924 by the Automobile Club of America. They<br/>found it easy to drive, despite its weight, and it impressed the spectators. A later<br/>version of the Model E raised its 24 , while keeping its emissions<br/>extremely low. was too expensive for many people and its design was constantly<br/>being altered. Under 25 cars were produced before the company<br/>went out of business. However, even today, there are Model Es on the road in the<br/>US. They are straightforward to maintain, and they satisfy California's<br/>emissions laws. Perhaps today's technology and materials<br/>would help us revive the steam car."
            },
            {
              "num": 26,
              "type": "FILL",
              "text": "They are straightforward to maintain, and they satisfy California’s _________ emissions laws.",
              "answer": "strict",
              "explanation": "The text confirms this: \"Astonishingly, an unmodified Doble Model E runs clean enough to pass the emissions laws in California today, and they are pretty strict.\"",
              "location": "Passage 2",
              "instruction": "Questions 24-26<br/>Complete the summary below.<br/>Choose ONE WORD AND/OR A NUMBER from the passage for each answer.<br/>Write your answers in boxes 24—26 on your answer sheet.<br/>The Model E<br/>The Model E was road-tested in 1924 by the Automobile Club of America. They<br/>found it easy to drive, despite its weight, and it impressed the spectators. A later<br/>version of the Model E raised its 24 , while keeping its emissions<br/>extremely low. was too expensive for many people and its design was constantly<br/>being altered. Under 25 cars were produced before the company<br/>went out of business. However, even today, there are Model Es on the road in the<br/>US. They are straightforward to maintain, and they satisfy California's<br/>emissions laws. Perhaps today's technology and materials<br/>would help us revive the steam car."
            }
          ]
        },
        {
          "title": "The case for mixed-ability classes",
          "text": "<h1>The case for mixed-ability classes</h1>\n<p>Why grouping children by ability might not be the best way to help them learn.</p>\n<p>Picture this scene. It's an English literature lesson in a UK school, and the teacher has just read an extract from Shakespeare's Romeo and Juliet. The teacher asks a question, and several hands shoot up. One student gives a detailed and sophisticated answer, while another struggles to find the words. This is a mixed-ability class, where children of all levels of academic achievement study together.</p>\n<p>I have heard the mixed-ability model attacked by way of analogy: a group hike. The fittest in the group take the lead and set a fast pace, while the less fit struggle to keep up and are left behind. The solution, critics argue, is to group hikers by fitness level, so everyone can walk at their own pace. In education, this is known as streaming, setting, or tracking, where children are placed in classes based on their perceived academic ability.</p>\n<p>The main reason for the mixed-ability model is social. By grouping children together, regardless of their background or academic level, schools can promote social cohesion and reduce inequality. In streamed schools, children from disadvantaged backgrounds are disproportionately placed in lower sets, which can lead to low self-esteem and a sense of failure. In contrast, mixed-ability classes can foster a supportive environment where children learn from one another.</p>\n<p>So what are the alternatives? The most common alternative to mixed-ability classes is setting, where children are grouped by ability for specific subjects, like maths or English, but study in mixed groups for others. Another option is streaming, where children are placed in a class based on their general ability and remain in that class for all subjects. A third option is tracking, which is common in the US, where children follow different academic pathways or tracks.</p>\n<p>A third option is 'streaming'. In a streamed school, children are placed in classes based on their general ability and remain in that class for all subjects. The argument for streaming is that it allows teachers to tailor their lessons to the level of the class, making teaching more efficient. However, critics argue that streaming can be harmful, as it locks children into a specific level and makes it difficult for them to move up if their performance improves.</p>\n<p>In practice, streaming can have a negative impact on both students and teachers. According to Professor John Hattie, director of the Melbourne Education Research Institute, there is very little indication that streaming leads to higher achievements. He points out that, in schools which use streaming, the most significant impact is on those students placed in the bottom sets, especially where a large proportion of students are from disadvantaged backgrounds.</p>\n<p>Professor John Hattie, director of the Melbourne Education Research Institute, notes that there is very little indication that streaming leads to better outcomes for students. He points out that, in schools which use streaming, the most significant impact is on those students placed in the lower sets. Meanwhile, for the brightest pupils, there appears to be only minimal advantage. A further issue is that teachers tend to have lower expectations of students in streamed groups.</p>\n<p>Hattie's study also shows that the mixed-ability model can be highly effective if teachers use appropriate strategies. One key technique is differentiation, where teachers provide different tasks or support within the same class. This can include 'scaffolding' — providing temporary assistance to help a student complete a task they cannot yet do on their own. By using scaffolding, teachers can help all students reach their potential.</p>\n<p>So what does work? According to Hattie, the most effective factor in student achievement is 'collective teacher efficacy' — the belief by teachers that they can make a difference to student outcomes. When teachers work together, share best practices, and have high expectations of all students, the results can be outstanding. This suggests that the focus should be on teacher training and collaboration rather than class grouping.</p>\n<p>Finally, if we are to use the mixed-ability model effectively, we must also recognise the value of peer learning. The Vygotsky model of education supports the concept of a mixed-ability class, where students learn from more knowledgeable others (MKOs). These MKOs can be teachers, but they can also be other students in the class. By helping their peers, high-achieving students can consolidate their own learning and develop empathy and communication skills.</p>\n<p>the MKOs in classrooms, the value of knowledgeable student peers must not go unrecognised either. I find it amazing to watch a student explain a complex concept to a classmate. The explanation is often simpler and more relatable than the one I would give, and the classmate understands it instantly. This collaborative learning benefits both students and can improve outcomes for the entire class.</p>",
          "questions": [
            {
              "num": 27,
              "type": "MCQ",
              "text": "The writer describes the Romeo and Juliet lesson in order to demonstrate",
              "answer": "B",
              "explanation": "The text confirms this: \"For three students, even these literacy demands are beyond them.\"",
              "location": "Passage 3",
              "instruction": "Questions 27-30<br/>Choose the correct letter, A, B, C or D.<br/>Write the correct letter in boxes 27-30 on your answer sheet.",
              "options": [
                "A. __ how few students are interested in literature.",
                "B. howa teacher handles a range of learning needs.",
                "C. how unsuitable Shakespeare is for most teenagers.",
                "D. how weaker students can disrupt their classmates' learning."
              ]
            },
            {
              "num": 28,
              "type": "MCQ",
              "text": "What does the writer say about streaming in the third paragraph?",
              "answer": "A",
              "explanation": "The text confirms this: \"It's an English literature lesson in a UK school, and the teacher has just read an extract from Shakespeare's Romeo and Juliet with a class of 15-year-olds.\"",
              "location": "Passage 3",
              "instruction": "Questions 27-30<br/>Choose the correct letter, A, B, C or D.<br/>Write the correct letter in boxes 27-30 on your answer sheet.",
              "options": [
                "A. It has a very broad appeal.",
                "B. It favours cleverer students.",
                "C. It is relatively simple to implement.",
                "D. It works better in some schools than others."
              ]
            },
            {
              "num": 29,
              "type": "MCQ",
              "text": "What idea is suggested by the reference to Mount Qomolangma in the fifth paragraph?",
              "answer": "C",
              "explanation": "The text confirms this: \"Picture this scene.\"",
              "location": "Passage 3",
              "instruction": "Questions 27-30<br/>Choose the correct letter, A, B, C or D.<br/>Write the correct letter in boxes 27-30 on your answer sheet.",
              "options": [
                "A. _ students following unsuitable paths",
                "B. students attempting interesting tasks",
                "C. students not achieving their full potential",
                "D. students not being aware of their limitations"
              ]
            },
            {
              "num": 30,
              "type": "MCQ",
              "text": "What does the word 'scaffolding' in the sixth paragraph refer to? the factors which prevent a student from learning effectively the environment where most of a student's learning takes place the assistance given to a student in their initial stages of learning the setting of appropriate learning targets for a student's aptitude 0OWPY T2",
              "answer": "C",
              "explanation": "The text confirms this: \"Picture this scene.\"",
              "location": "Passage 3",
              "instruction": "Questions 27-30<br/>Choose the correct letter, A, B, C or D.<br/>Write the correct letter in boxes 27-30 on your answer sheet.",
              "options": [
                "A. It has avery broad appeal.",
                "B. students attempting interesting tasks",
                "C. students not achieving their full potential",
                "D. students not being aware of their limitations"
              ]
            },
            {
              "num": 31,
              "type": "MCQ",
              "text": "Write the correct letter, A-I, in boxes 31-35 on your answer sheet.",
              "answer": "H",
              "explanation": "The text confirms this: \"Picture this scene.\"",
              "location": "Passage 3",
              "instruction": "Questions 31-35<br/>Complete the summary using the list of phrases, A-I, below.<br/>Write the correct letter, A-I, in boxes 31-35 on your answer sheet.<br/>Is streaming effective?<br/>According to Professor John Hattie of the Melbourne Education Research Institute,<br/>there is very little indication that streaming leads 10 31 a esssssceeseeeeseneee . He points<br/>out that, in schools which use streaming, the most significant impact is on those<br/>students placed in the 32 , especially where a large proportion of<br/>Cece \\ . Meanwhile, for the 34<br/>appears to be only minimal advantage. A further issue is that teachers tend to<br/>have 35 of students in streamed groups.<br/>A wrong classes lower average learners<br/>expectations<br/>D bottom sets brightest pupils disadvantaged<br/>backgrounds<br/>G weaker students higher positive<br/>achievements impressions",
              "options": [
                "A. wrong classes",
                "B. lower average learners",
                "C. expectations",
                "D. bottom sets",
                "E. brightest pupils",
                "F. disadvantaged backgrounds",
                "G. weaker students",
                "H. higher achievements",
                "I. positive impressions"
              ]
            },
            {
              "num": 32,
              "type": "MCQ",
              "text": "students placed in the 32 , especially where a large proportion of",
              "answer": "D",
              "explanation": "The text confirms this: \"It's an English literature lesson in a UK school, and the teacher has just read an extract from Shakespeare's Romeo and Juliet with a class of 15-year-olds.\"",
              "location": "Passage 3",
              "instruction": "Questions 31-35<br/>Complete the summary using the list of phrases, A-I, below.<br/>Write the correct letter, A-I, in boxes 31-35 on your answer sheet.<br/>Is streaming effective?<br/>According to Professor John Hattie of the Melbourne Education Research Institute,<br/>there is very little indication that streaming leads 10 31 a esssssceeseeeeseneee . He points<br/>out that, in schools which use streaming, the most significant impact is on those<br/>students placed in the 32 , especially where a large proportion of<br/>Cece \\ . Meanwhile, for the 34<br/>appears to be only minimal advantage. A further issue is that teachers tend to<br/>have 35 of students in streamed groups.<br/>A wrong classes lower average learners<br/>expectations<br/>D bottom sets brightest pupils disadvantaged<br/>backgrounds<br/>G weaker students higher positive<br/>achievements impressions",
              "options": [
                "A. wrong classes",
                "B. lower average learners",
                "C. expectations",
                "D. bottom sets",
                "E. brightest pupils",
                "F. disadvantaged backgrounds",
                "G. weaker students",
                "H. higher achievements",
                "I. positive impressions"
              ]
            },
            {
              "num": 33,
              "type": "MCQ",
              "text": "Question 33: Choose the correct option:",
              "answer": "F",
              "explanation": "The text confirms this: \"It's an English literature lesson in a UK school, and the teacher has just read an extract from Shakespeare's Romeo and Juliet with a class of 15-year-olds.\"",
              "location": "Passage 3",
              "instruction": "Questions 31-35<br/>Complete the summary using the list of phrases, A-I, below.<br/>Write the correct letter, A-I, in boxes 31-35 on your answer sheet.<br/>Is streaming effective?<br/>According to Professor John Hattie of the Melbourne Education Research Institute,<br/>there is very little indication that streaming leads 10 31 a esssssceeseeeeseneee . He points<br/>out that, in schools which use streaming, the most significant impact is on those<br/>students placed in the 32 , especially where a large proportion of<br/>Cece \\ . Meanwhile, for the 34<br/>appears to be only minimal advantage. A further issue is that teachers tend to<br/>have 35 of students in streamed groups.<br/>A wrong classes lower average learners<br/>expectations<br/>D bottom sets brightest pupils disadvantaged<br/>backgrounds<br/>G weaker students higher positive<br/>achievements impressions",
              "options": [
                "A. wrong classes",
                "B. lower average learners",
                "C. expectations",
                "D. bottom sets",
                "E. brightest pupils",
                "F. disadvantaged backgrounds",
                "G. weaker students",
                "H. higher achievements",
                "I. positive impressions"
              ]
            },
            {
              "num": 34,
              "type": "MCQ",
              "text": "Cece \\ . Meanwhile, for the 34",
              "answer": "E",
              "explanation": "The text confirms this: \"Picture this scene.\"",
              "location": "Passage 3",
              "instruction": "Questions 31-35<br/>Complete the summary using the list of phrases, A-I, below.<br/>Write the correct letter, A-I, in boxes 31-35 on your answer sheet.<br/>Is streaming effective?<br/>According to Professor John Hattie of the Melbourne Education Research Institute,<br/>there is very little indication that streaming leads 10 31 a esssssceeseeeeseneee . He points<br/>out that, in schools which use streaming, the most significant impact is on those<br/>students placed in the 32 , especially where a large proportion of<br/>Cece \\ . Meanwhile, for the 34<br/>appears to be only minimal advantage. A further issue is that teachers tend to<br/>have 35 of students in streamed groups.<br/>A wrong classes lower average learners<br/>expectations<br/>D bottom sets brightest pupils disadvantaged<br/>backgrounds<br/>G weaker students higher positive<br/>achievements impressions",
              "options": [
                "A. wrong classes",
                "B. lower average learners",
                "C. expectations",
                "D. bottom sets",
                "E. brightest pupils",
                "F. disadvantaged backgrounds",
                "G. weaker students",
                "H. higher achievements",
                "I. positive impressions"
              ]
            },
            {
              "num": 35,
              "type": "MCQ",
              "text": "Write the correct letter, A-I, in boxes 31-35 on your answer sheet.",
              "answer": "B",
              "explanation": "The text confirms this: \"For three students, even these literacy demands are beyond them.\"",
              "location": "Passage 3",
              "instruction": "Questions 31-35<br/>Complete the summary using the list of phrases, A-I, below.<br/>Write the correct letter, A-I, in boxes 31-35 on your answer sheet.<br/>Is streaming effective?<br/>According to Professor John Hattie of the Melbourne Education Research Institute,<br/>there is very little indication that streaming leads 10 31 a esssssceeseeeeseneee . He points<br/>out that, in schools which use streaming, the most significant impact is on those<br/>students placed in the 32 , especially where a large proportion of<br/>Cece \\ . Meanwhile, for the 34<br/>appears to be only minimal advantage. A further issue is that teachers tend to<br/>have 35 of students in streamed groups.<br/>A wrong classes lower average learners<br/>expectations<br/>D bottom sets brightest pupils disadvantaged<br/>backgrounds<br/>G weaker students higher positive<br/>achievements impressions",
              "options": [
                "A. wrong classes",
                "B. lower average learners",
                "C. expectations",
                "D. bottom sets",
                "E. brightest pupils",
                "F. disadvantaged backgrounds",
                "G. weaker students",
                "H. higher achievements",
                "I. positive impressions"
              ]
            },
            {
              "num": 36,
              "type": "TFNG",
              "text": "Question 36: Choose the correct option:",
              "answer": "FALSE",
              "explanation": "The passage confirms that the answer is 'FALSE'.",
              "location": "Passage 3",
              "instruction": "Questions 36—40<br/>Do the following statements agree with the views of the writer in Reading Passage 3?<br/>In boxes 36-40 on your answer sheet, Write",
              "options": [
                "TRUE",
                "FALSE",
                "NOT GIVEN"
              ]
            },
            {
              "num": 37,
              "type": "TFNG",
              "text": "Question 37: Choose the correct option:",
              "answer": "NOT GIVEN",
              "explanation": "The passage confirms that the answer is 'NOT GIVEN'.",
              "location": "Passage 3",
              "instruction": "Questions 36—40<br/>Do the following statements agree with the views of the writer in Reading Passage 3?<br/>In boxes 36-40 on your answer sheet, Write",
              "options": [
                "TRUE",
                "FALSE",
                "NOT GIVEN"
              ]
            },
            {
              "num": 38,
              "type": "TFNG",
              "text": "Question 38: Choose the correct option:",
              "answer": "TRUE",
              "explanation": "The passage confirms that the answer is 'TRUE'.",
              "location": "Passage 3",
              "instruction": "Questions 36—40<br/>Do the following statements agree with the views of the writer in Reading Passage 3?<br/>In boxes 36-40 on your answer sheet, Write",
              "options": [
                "TRUE",
                "FALSE",
                "NOT GIVEN"
              ]
            },
            {
              "num": 39,
              "type": "TFNG",
              "text": "Question 39: Choose the correct option:",
              "answer": "FALSE",
              "explanation": "The passage confirms that the answer is 'FALSE'.",
              "location": "Passage 3",
              "instruction": "Questions 36—40<br/>Do the following statements agree with the views of the writer in Reading Passage 3?<br/>In boxes 36-40 on your answer sheet, Write",
              "options": [
                "TRUE",
                "FALSE",
                "NOT GIVEN"
              ]
            },
            {
              "num": 40,
              "type": "TFNG",
              "text": "Question 40: Choose the correct option:",
              "answer": "NOT GIVEN",
              "explanation": "The passage confirms that the answer is 'NOT GIVEN'.",
              "location": "Passage 3",
              "instruction": "Questions 36—40<br/>Do the following statements agree with the views of the writer in Reading Passage 3?<br/>In boxes 36-40 on your answer sheet, Write",
              "options": [
                "TRUE",
                "FALSE",
                "NOT GIVEN"
              ]
            }
          ]
        }
      ]
    },
    "writing": {
      "task1": {
        "prompt": "The diagram below shows the floor plan of a public library 20 years ago and how it looks now.",
        "image": "<img src=\"images/writing_t3_p1.png\" class=\"max-w-full h-auto mx-auto rounded-xl shadow-lg border border-white/10 bg-white\" alt=\"Writing Task 1 Graph\" />",
        "modelAnswer": "TASK 1"
      },
      "task2": {
        "prompt": "In many countries around the world, rural people are moving to cities, so the population in the countryside is decreasing. Do you think this is a positive or a negative development?",
        "modelAnswer": "TASK 2"
      }
    }
  },
  "4": {
    "title": "Cambridge IELTS 18 — Test 4",
    "book": "IELTS 18",
    "listening": {
      "sections": [
        {
          "id": 1,
          "title": "Part 1: Real Practice",
          "description": "Official IELTS 18 Test 4 Listening Part 1.",
          "audio": "audio/IELTS_18_Test_4_Part1.m4a",
          "transcript": "<p><b>JULIE:</b> Hello?</p><p><b>GREG:</b> Oh, hello. Is that Julie Davison?</p><p><b>JULIE:</b> Yes.</p><p><b>GREG:</b> This is Greg Preston from the Employment Agency. We met last week when you</p><p>came in to enquire about office work.</p><p>JULIE! Oh, that's right.</p><p><b>GREG:</b> Now we've just had some details come in of a job which might interest you.</p><p><b>JULIE:</b> OK.</p><p><b>GREG:</b> So this is a position for a receptionist — | believe you've done that sort of work</p><p>before?</p><p><b>JULIE:</b> Yes, | have, | worked in a sports centre for a couple of years before | got married</p><p>and had the children.</p><p><b>GREG:</b> Right. Well, this job's in Fordham, so not too far away for you, and it's at the</p><p>medical centre there.</p><p><b>JULIE:</b> OK. So where exactly is that?</p><p><b>GREG:</b> It's quite near the station, on Chastons Road.</p><p><b>JULIE:</b> Sorry?</p><p><b>GREG:</b> Chastons Road — that's C-H-A-S-T-O-N-S.</p><p><b>JULIE:</b> OK, thanks. So what would the work involve? Dealing with enquiries from</p><p>patients?</p><p><b>GREG:</b> Yes, and you'd also be involved in making appointments, whether face to face or</p><p>on the phone. And rescheduling them if necessary.</p><p>JULIE! Fine, that shouldn't be a problem.</p><p><b>GREG:</b> And another of your duties would be keeping the centre's database up-to-date.</p><p>Then you might have other general administrative duties as well, but those would</p><p>be the main ones.</p><p><b>JULIE:</b> OK.</p><p><b>GREG:</b> Now when the details came in, | immediately thought of you because one thing</p><p>they do require is someone with experience, and you did mention your work at</p><p>the sports centre when you came in to see us.</p><p><b>JULIE:</b> Yes, in fact | enjoyed that job. Is there anything else they're looking for?</p><p><b>GREG:</b> Well, they say it's quite a high-pressure environment, they're always very busy,</p><p>and patients are often under stress, so they want someone who can cope with</p><p>that and stay calm, and at the same time be confident when interacting with the</p><p>public.</p><p><b>JULIE:</b> Well, after dealing with three children all under five, | reckon | can cope with that.</p><p><b>GREG:</b> I'm sure you can.</p><p><b>GREG:</b> And then another thing they mention is that they're looking for someone with</p><p>good IT skills ...</p><p><b>JULIE:</b> Not a problem.</p><p><b>GREG:</b> So you'd be interested in following this up?</p><p><b>JULIE:</b> Sure. When would it start?</p><p><b>GREG:</b> Well, they're looking for someone from the beginning of next month, but | should</p><p>tell you that this isn't a permanent job, it's temporary, so the contract would</p><p>be just to the end of September. But they do say that there could be further</p><p>opportunities after that.</p><p><b>JULIE:</b> OK. And what would the hours be?</p><p>114</p><p>Q1</p><p>Q2</p><p>Q3</p><p>Q4</p><p>Q5</p><p>Q6</p><p>Q7</p><p>Q8</p><p><b>GREG:</b> Well, they want someone who can start at a quarter to eight in the morning —</p><p>could you manage that?</p><p><b>JULIE:</b> Yes, my husband would have to get the kids up and off to my mother's — she's</p><p>going to be looking after them while I'm at work. What time would | finish?</p><p><b>GREG:</b> One fifteen.</p><p><b>JULIE:</b> That should work out all right. | can pick the kids up on my way home, and then</p><p>I'll have the afternoon with them. Oh, one thing ... is there parking available for</p><p>staff at the centre?</p><p><b>GREG:</b> Yes, there is, and it's also on a bus route.</p><p>JULIE! Right. Well, | expect I'll have the car but it's good to know that.</p><p>OK, so where do | go from here?</p><p><b>GREG:</b> Well, if you're happy for me to do so, I'll forward your CV and pied, and</p><p>then the best thing would probably be for you to phone them so they can arrange</p><p>for an interview.</p><p><b>JULIE:</b> Great. Well thank you very much.</p><p><b>GREG:</b> You're welcome. Bye now.</p><p><b>JULIE:</b> Bye.</p>",
          "questions": [
            {
              "num": 1,
              "type": "FILL",
              "text": "Position title: _________.",
              "answer": "receptionist",
              "explanation": "The transcript states: \"GREG: So this is a position for a receptionist — | believe you've done that sort of work before.\"",
              "instruction": "Questions 1-10<br/>Complete the notes below.<br/>Write ONE WORD AND/OR A NUMBER for each answer."
            },
            {
              "num": 2,
              "type": "FILL",
              "text": "Location: at the _________ centre in Fordham.",
              "answer": "Medical",
              "explanation": "The transcript states: \"Well, this job's in Fordham, so not too far away for you, and it's at the medical centre there.\"",
              "instruction": "Questions 1-10<br/>Complete the notes below.<br/>Write ONE WORD AND/OR A NUMBER for each answer."
            },
            {
              "num": 3,
              "type": "FILL",
              "text": "Address: 7 _________ Road (near the station).",
              "answer": "Chastons",
              "explanation": "The transcript states: \"GREG: It's quite near the station, on Chastons Road.\"",
              "instruction": "Questions 1-10<br/>Complete the notes below.<br/>Write ONE WORD AND/OR A NUMBER for each answer."
            },
            {
              "num": 4,
              "type": "FILL",
              "text": "making _________",
              "answer": "appointments",
              "explanation": "The transcript states: \"GREG: Yes, and you'd also be involved in making appointments, whether face to face or on the phone.\"",
              "instruction": "Questions 1-10<br/>Complete the notes below.<br/>Write ONE WORD AND/OR A NUMBER for each answer."
            },
            {
              "num": 5,
              "type": "FILL",
              "text": "maintaining the internal _________",
              "answer": "database",
              "explanation": "The transcript states: \"GREG: And another of your duties would be keeping the centre's database up-to-date.\"",
              "instruction": "Questions 1-10<br/>Complete the notes below.<br/>Write ONE WORD AND/OR A NUMBER for each answer."
            },
            {
              "num": 6,
              "type": "FILL",
              "text": "Requirements: they require someone with _________.",
              "answer": "experience",
              "explanation": "The transcript states: \"GREG: Now when the details came in, | immediately thought of you because one thing they do require is someone with experience, and you did mention your work at the sports centre when you came in to see us.\"",
              "instruction": "Questions 1-10<br/>Complete the notes below.<br/>Write ONE WORD AND/OR A NUMBER for each answer."
            },
            {
              "num": 7,
              "type": "FILL",
              "text": "Candidate should be calm and _________ when interacting with public.",
              "answer": "confident",
              "explanation": "The transcript states: \"GREG: Well, they say it's quite a high-pressure environment, they're always very busy, and patients are often under stress, so they want someone who can cope with that and stay calm, and at the same time be confident when interacting with the public.\"",
              "instruction": "Questions 1-10<br/>Complete the notes below.<br/>Write ONE WORD AND/OR A NUMBER for each answer."
            },
            {
              "num": 8,
              "type": "FILL",
              "text": "Type of job contract: _________.",
              "answer": "temporary",
              "explanation": "The transcript states: \"GREG: Well, they're looking for someone from the beginning of next month, but | should tell you that this isn't a permanent job, it's temporary, so the contract would be just to the end of September.\"",
              "instruction": "Questions 1-10<br/>Complete the notes below.<br/>Write ONE WORD AND/OR A NUMBER for each answer."
            },
            {
              "num": 9,
              "type": "FILL",
              "text": "Hours: 7.45 am to _________ pm, Monday to Friday.",
              "answer": "1.15",
              "explanation": "The transcript confirms the answer is '1.15'.",
              "instruction": "Questions 1-10<br/>Complete the notes below.<br/>Write ONE WORD AND/OR A NUMBER for each answer."
            },
            {
              "num": 10,
              "type": "FILL",
              "text": "Staff benefits: free _________ is available.",
              "answer": "parking",
              "explanation": "The transcript states: \"is there parking available for staff at the centre.\"",
              "instruction": "Questions 1-10<br/>Complete the notes below.<br/>Write ONE WORD AND/OR A NUMBER for each answer."
            }
          ]
        },
        {
          "id": 2,
          "title": "Part 2: Real Practice",
          "description": "Official IELTS 18 Test 4 Listening Part 2.",
          "audio": "audio/IELTS_18_Test_4_Part2.m4a",
          "transcript": "<p>Good morning everyone, and welcome to the Museum of Farming Life. | understand it's your</p><p>first visit here, so I'd like to give you some background information about the museum and</p><p>then explain a little about what you can see during your visit.</p><p>So, where we're standing at the moment is the entrance to a large building that was</p><p>constructed in 1880 as the home of a local businessman, Alfred Palmer, of the Palmer biscuit</p><p>factory. It was later sold and became a hall of residence for students in 1911, and a museum</p><p>in 1951. In 2005, a modern extension was built to accommodate the museum's collections.</p><p>The museum's owned by the university, and apart from two rooms that are our offices, the</p><p>university uses the main part of the building. You may see students going into the building</p><p>for lessons, but it's not open to museum visitors, I'm afraid. It's a shame because the interior</p><p>architectural features are outstanding, especially the room that used to be the library.</p><p>Luckily, we've managed to keep entry to the museum free. This includes access to all the</p><p>galleries, outdoor areas and the rooms for special exhibitions. We run activities for children</p><p>and students, such as the museum club, for which there's no charge. We do have a donation</p><p>box just over there so feel free to give whatever amount you consider appropriate.</p><p>We do have a cloakroom. if you'd like to leave your coats and bags somewhere. Unlike other</p><p>museums, photography is allowed here, so you might like to keep your cameras with you.</p><p>You might be more comfortable not carrying around heavy rucksacks, though keep your coats</p><p>and jackets on as it's quite cold in the museum garden today.</p><p>I'd like to tell you about the different areas of the museum.</p><p>Just inside, and outside the main gallery, we have an area called Four Seasons. Here you</p><p>can watch a four-minute animation of a woodland scene. It was designed especially for the</p><p>museum by a group of young people on a film studies course, and it's beautiful. Children</p><p>absolutely love it, but then, so do adults.</p><p>The main gallery's called Town and Country. It includes a photographic collection of prize-</p><p>winning sheep and shepherds. Leaving Town and Country, you enter Farmhouse Kitchen,</p><p>which is ... well, self-explanatory. Here we have the oldest collection of equipment for making</p><p>Test 4</p><p>Q9</p><p>Q10</p><p>Q711</p><p>Q12</p><p>Q13</p><p>Q14</p><p>Q15</p><p>115</p><p>butter and cheese in the country. And this morning, a specialist cheesemaker will be giving</p><p>demonstrations of how it's produced. You may even get to try some.</p><p>After that, you can go in two directions. To the right is a staircase that takes you up to a</p><p>landing from where you can look down on the galleries. To the left is a room called A Year on</p><p>the Farm. There's lots of seating here as sometimes we use the room for school visits, so it's</p><p>a good place to stop for a rest. If you're feeling competitive. you can take our memory test in</p><p>which you answer questions about things you've seen in the museum.</p><p>The next area's called Wagon Walk. This contains farm carts from nearly every part of the</p><p>country. It's surprising how much regional variation there was. Beside the carts are display</p><p>boards with information about each one. The carts are old and fragile, so we ask you to keep</p><p>your children close to you and ensure they don't climb on the carts.</p><p>From Wagon Walk, you can either make your way back to reception or go out into the garden</p><p>— or even go back to take another look in the galleries. In the far corner of the garden is Bees</p><p>are Magic, but we're redeveloping this area so you can't visit that at the moment. You can still</p><p>buy our honey in the shop, though.</p><p>Finally, there's The Pond, which contains all kinds of interesting wildlife. There are baby</p><p>ducks that are only a few days old, as well as tiny frogs. The Pond isn't deep and there's a</p><p>fence around it, so it's perfectly safe for children.</p>",
          "questions": [
            {
              "num": 11,
              "type": "MCQ",
              "text": "The museum building was originally:",
              "answer": "B",
              "explanation": "The transcript states: \"| understand it's your first visit here, so I'd like to give you some background information about the museum and then explain a little about what you can see during your visit.\"",
              "instruction": "Questions 11-14<br/>Choose the correct letter, A, B or C.",
              "options": [
                "A. a factory.",
                "B. a private home.",
                "C. a hall of residence."
              ]
            },
            {
              "num": 12,
              "type": "MCQ",
              "text": "The university uses part of the museum building as:",
              "answer": "A",
              "explanation": "The transcript states: \"Good morning everyone, and welcome to the Museum of Farming Life.\"",
              "instruction": "Questions 11-14<br/>Choose the correct letter, A, B or C.",
              "options": [
                "A. teaching rooms.",
                "B. a research library.",
                "C. administration offices."
              ]
            },
            {
              "num": 13,
              "type": "MCQ",
              "text": "What does the guide say about the entrance fee?",
              "answer": "A",
              "explanation": "The transcript states: \"Good morning everyone, and welcome to the Museum of Farming Life.\"",
              "instruction": "Questions 11-14<br/>Choose the correct letter, A, B or C.",
              "options": [
                "A. Visitors decide whether or not they wish to pay.",
                "B. Only children and students receive a discount.",
                "C. The museum charges extra for special exhibitions."
              ]
            },
            {
              "num": 14,
              "type": "MCQ",
              "text": "What are visitors advised to leave in the cloakroom?",
              "answer": "C",
              "explanation": "The transcript states: \"Good morning everyone, and welcome to the Museum of Farming Life.\"",
              "instruction": "Questions 11-14<br/>Choose the correct letter, A, B or C.",
              "options": [
                "A. cameras",
                "B. coats",
                "C. bags"
              ]
            },
            {
              "num": 15,
              "type": "MCQ",
              "text": "Identify location for: 15. The Cafe",
              "answer": "F",
              "explanation": "The transcript states: \"Good morning everyone, and welcome to the Museum of Farming Life.\"",
              "instruction": "Questions 15-20<br/>Label the map below.<br/>Write the correct letter, A-H, next to Questions 15-20.",
              "options": [
                "A. Cafe",
                "B. Picnic area",
                "C. Herb garden",
                "D. Fruit orchard",
                "E. Demonstration path",
                "F. Toy museum",
                "G. Shop",
                "H. Outdoor play area"
              ]
            },
            {
              "num": 16,
              "type": "MCQ",
              "text": "Identify location for: 16. The Picnic area",
              "answer": "G",
              "explanation": "The transcript states: \"Good morning everyone, and welcome to the Museum of Farming Life.\"",
              "instruction": "Questions 15-20<br/>Label the map below.<br/>Write the correct letter, A-H, next to Questions 15-20.",
              "options": [
                "A. Cafe",
                "B. Picnic area",
                "C. Herb garden",
                "D. Fruit orchard",
                "E. Demonstration path",
                "F. Toy museum",
                "G. Shop",
                "H. Outdoor play area"
              ]
            },
            {
              "num": 17,
              "type": "MCQ",
              "text": "Identify location for: 17. The Herb garden",
              "answer": "E",
              "explanation": "The transcript states: \"Good morning everyone, and welcome to the Museum of Farming Life.\"",
              "instruction": "Questions 15-20<br/>Label the map below.<br/>Write the correct letter, A-H, next to Questions 15-20.",
              "options": [
                "A. Cafe",
                "B. Picnic area",
                "C. Herb garden",
                "D. Fruit orchard",
                "E. Demonstration path",
                "F. Toy museum",
                "G. Shop",
                "H. Outdoor play area"
              ]
            },
            {
              "num": 18,
              "type": "MCQ",
              "text": "Identify location for: 18. The Fruit orchard",
              "answer": "A",
              "explanation": "The transcript states: \"Good morning everyone, and welcome to the Museum of Farming Life.\"",
              "instruction": "Questions 15-20<br/>Label the map below.<br/>Write the correct letter, A-H, next to Questions 15-20.",
              "options": [
                "A. Cafe",
                "B. Picnic area",
                "C. Herb garden",
                "D. Fruit orchard",
                "E. Demonstration path",
                "F. Toy museum",
                "G. Shop",
                "H. Outdoor play area"
              ]
            },
            {
              "num": 19,
              "type": "MCQ",
              "text": "Identify location for: 19. The Shop",
              "answer": "C",
              "explanation": "The transcript states: \"Good morning everyone, and welcome to the Museum of Farming Life.\"",
              "instruction": "Questions 15-20<br/>Label the map below.<br/>Write the correct letter, A-H, next to Questions 15-20.",
              "options": [
                "A. Cafe",
                "B. Picnic area",
                "C. Herb garden",
                "D. Fruit orchard",
                "E. Demonstration path",
                "F. Toy museum",
                "G. Shop",
                "H. Outdoor play area"
              ]
            },
            {
              "num": 20,
              "type": "MCQ",
              "text": "Identify location for: 20. The Outdoor play area",
              "answer": "B",
              "explanation": "The transcript states: \"| understand it's your first visit here, so I'd like to give you some background information about the museum and then explain a little about what you can see during your visit.\"",
              "instruction": "Questions 15-20<br/>Label the map below.<br/>Write the correct letter, A-H, next to Questions 15-20.",
              "options": [
                "A. Cafe",
                "B. Picnic area",
                "C. Herb garden",
                "D. Fruit orchard",
                "E. Demonstration path",
                "F. Toy museum",
                "G. Shop",
                "H. Outdoor play area"
              ]
            }
          ]
        },
        {
          "id": 3,
          "title": "Part 3: Real Practice",
          "description": "Official IELTS 18 Test 4 Listening Part 3.",
          "audio": "audio/IELTS_18_Test_4_Part3.m4a",
          "transcript": "<p><b>TUTOR:</b> So now | want you to discuss the lesson we've just been watching on the video</p><p>and think about the ways in which origami can be a useful educational tool. Can</p><p>you all work with the person sitting next to you ...</p><p><b>SEB:</b> | had no idea that such a simple thing like folding squares of paper to make the</p><p>shape of something like a bird could be such an amazing tool. It's made me see</p><p>origami in a whole new light.</p><p><b>LIA:</b> | know. It was interesting to see the educational skills the children were</p><p>developing by doing origami. On the video you could see them really listening</p><p>hard to make sure they did all the steps in the right order to make the bird.</p><p><b>SEB:</b> That's right. In this lesson they were working individually but it would also be</p><p>interesting to see if the children could work out how to make something simple</p><p>without being given any direction. That would help with building teamwork as</p><p>well.</p><p><b>LIA:</b> Yes, but much more of a challenge. One thing that really stood out for me was</p><p>that the children were all having fun while being taught something new.</p><p><b>SEB:</b> Which is a key aim of any lesson with this age group. And although these kids</p><p>had no problems with folding the paper, with younger children you could do</p><p>origami to help practise fine motor skills.</p><p><b>LIA:</b> Absolutely. Shall we talk about the individual children we saw on the video? |</p><p>wrote all their names down and took some notes.</p><p><b>SEB:</b> Yes, | did too.</p><p><b>LIA:</b> OK, good. Let's start with Sid.</p><p><b>SEB:</b> He was interesting because before they started doing the origami, he was being</p><p>quite disruptive.</p><p><b>LIA:</b> Yes. He really benefited from having to use his hands — it helped him to settle</p><p>down and start concentrating.</p><p>116</p><p>Q16</p><p>Q17</p><p>Q18</p><p>Q19</p><p>Q20</p><p>Q21/22</p><p>Q21/22</p><p>Q23</p><p><b>SEB:</b> Yes, | noticed that too. What about Jack? | noticed he seemed to want to work</p><p>things out for himself.</p><p><b>LIA:</b> Mmm. You could see him trying out different things rather than asking the teacher</p><p>for help. What did you make of Naomi?</p><p><b>SEB:</b> She seemed to be losing interest at one point but then she decided she wanted</p><p>her mouse to be the best and that motivated her to try harder.</p><p>LIA! She didn't seem satisfied with hers in the end, though.</p><p><b>SEB:</b> No.</p><p><b>LIA:</b> Anya was such a star. She listened so carefully and then produced the perfect</p><p>bird with very little effort.</p><p><b>SEB:</b> Mmm — | think the teacher could have increased the level of difficulty for her.</p><p><b>LIA:</b> Maybe. | think it was the first time Zara had come across origami.</p><p><b>SEB:</b> She looked as if she didn't really get what was going on.</p><p><b>LIA:</b> She seemed unsure about what she was supposed to do, but in the end hers</p><p>didn't turn out too badly.</p><p><b>SEB:</b> Yeah. I'm sure it was a positive learning experience for her.</p><p><b>LIA:</b> Mmm.</p><p><b>LIA:</b> | think one reason why the origami activity worked so well in this class was that</p><p>the teacher was well prepared.</p><p><b>SEB:</b> Right. | think it would have taken me ages to prepare examples, showing each</p><p>of the steps involved in making the bird. But that was a really good idea. The</p><p>children could see what they were aiming for — and much better for them to be</p><p>able to hold something, rather than just looking at pictures.</p><p><b>LIA:</b> Mmm — those physical examples supported her verbal explanations really well.</p><p><b>SEB:</b> It's strange that origami isn't used more widely. Why do you think that is?</p><p><b>LIA:</b> Well, teachers may just feel it's not that appealing to children who are used to</p><p>doing everything on computers, especially boys. Even if they're aware of the</p><p>benefits.</p><p><b>SEB:</b> Oh, | don't know. It's no different to any other craft activity. | bet it's because so</p><p>many teachers are clumsy like me.</p><p><b>LIA:</b> That's true — too much effort required if you're not good with your hands.</p><p><b>SEB:</b> Well, anyway, | think we should try it out in our maths teaching practice with</p><p>Year 3. | can see using origami is a really engaging way of reinforcing children's</p><p>knowledge of geometric shapes, like they were doing in the video, but | think it</p><p>would also work really well for presenting fractions, which is coming up soon.</p><p><b>LIA:</b> Good idea — that's something most of the kids in that class might struggle with.</p><p>Origami would also be good practice for using symmetry — but | think they did</p><p>that last term.</p><p><b>SEB:</b> OK — well let's try and get some ideas together and plan the lesson next week.</p><p><b>TUTOR:</b> OK, if you could all stop ...</p>",
          "questions": [
            {
              "num": 21,
              "type": "MCQ",
              "text": "Which TWO educational skills were shown in the video of children doing origami? (Select first skill)",
              "answer": "B",
              "explanation": "The transcript states: \"TUTOR: So now | want you to discuss the lesson we've just been watching on the video and think about the ways in which origami can be a useful educational tool.\"",
              "instruction": "Questions 21 and 22<br/>Choose TWO letters, A-E.",
              "options": [
                "A. solving problems",
                "B. following instructions",
                "C. working cooperatively",
                "D. learning through play",
                "E. developing hand-eye coordination"
              ]
            },
            {
              "num": 22,
              "type": "MCQ",
              "text": "Which TWO educational skills were shown in the video of children doing origami? (Select second skill)",
              "answer": "D",
              "explanation": "The transcript states: \"TUTOR: So now | want you to discuss the lesson we've just been watching on the video and think about the ways in which origami can be a useful educational tool.\"",
              "instruction": "Questions 21 and 22<br/>Choose TWO letters, A-E.",
              "options": [
                "A. solving problems",
                "B. following instructions",
                "C. working cooperatively",
                "D. learning through play",
                "E. developing hand-eye coordination"
              ]
            },
            {
              "num": 23,
              "type": "MCQ",
              "text": "Student opinion on: Child 1",
              "answer": "A",
              "explanation": "The transcript states: \"TUTOR: So now | want you to discuss the lesson we've just been watching on the video and think about the ways in which origami can be a useful educational tool.\"",
              "instruction": "Questions 23-27<br/>What did the students think about each child in the video?",
              "options": [
                "A. demonstrated independence",
                "B. asked for teacher support",
                "C. developed a new idea"
              ]
            },
            {
              "num": 24,
              "type": "MCQ",
              "text": "Student opinion on: Child 2",
              "answer": "F",
              "contentUnavailable": true,
              "explanation": "The transcript states: \"TUTOR: So now | want you to discuss the lesson we've just been watching on the video and think about the ways in which origami can be a useful educational tool.\"",
              "instruction": "Questions 23-27<br/>What did the students think about each child in the video?",
              "options": [
                "A. demonstrated independence",
                "B. asked for teacher support",
                "C. developed a new idea"
              ]
            },
            {
              "num": 25,
              "type": "MCQ",
              "text": "Student opinion on: Child 3",
              "answer": "E",
              "contentUnavailable": true,
              "explanation": "The transcript states: \"TUTOR: So now | want you to discuss the lesson we've just been watching on the video and think about the ways in which origami can be a useful educational tool.\"",
              "instruction": "Questions 23-27<br/>What did the students think about each child in the video?",
              "options": [
                "A. demonstrated independence",
                "B. asked for teacher support",
                "C. developed a new idea"
              ]
            },
            {
              "num": 26,
              "type": "MCQ",
              "text": "Student opinion on: Child 4",
              "answer": "B",
              "explanation": "The transcript states: \"TUTOR: So now | want you to discuss the lesson we've just been watching on the video and think about the ways in which origami can be a useful educational tool.\"",
              "instruction": "Questions 23-27<br/>What did the students think about each child in the video?",
              "options": [
                "A. demonstrated independence",
                "B. asked for teacher support",
                "C. developed a new idea"
              ]
            },
            {
              "num": 27,
              "type": "MCQ",
              "text": "Student opinion on: Child 5",
              "answer": "D",
              "contentUnavailable": true,
              "explanation": "The transcript states: \"TUTOR: So now | want you to discuss the lesson we've just been watching on the video and think about the ways in which origami can be a useful educational tool.\"",
              "instruction": "Questions 23-27<br/>What did the students think about each child in the video?",
              "options": [
                "A. demonstrated independence",
                "B. asked for teacher support",
                "C. developed a new idea"
              ]
            },
            {
              "num": 28,
              "type": "MCQ",
              "text": "Before starting an origami activity in class, the students think it is important for the teacher to",
              "answer": "B",
              "explanation": "The transcript states: \"TUTOR: So now | want you to discuss the lesson we've just been watching on the video and think about the ways in which origami can be a useful educational tool.\"",
              "instruction": "Questions 28-30<br/>Choose the correct letter, A, B or C.",
              "options": [
                "A. make models that demonstrate the different stages.",
                "B. - check children understand the terminology involved.",
                "C. tell children not to worry if they find the activity difficult."
              ]
            },
            {
              "num": 29,
              "type": "MCQ",
              "text": "The students agree that some teachers might be unwilling to use origami in class because",
              "answer": "C",
              "explanation": "The transcript states: \"TUTOR: So now | want you to discuss the lesson we've just been watching on the video and think about the ways in which origami can be a useful educational tool.\"",
              "instruction": "Questions 28-30<br/>Choose the correct letter, A, B or C.",
              "options": [
                "A. __ they may not think that crafts are important.",
                "B. they may not have the necessary skills.",
                "C. they may worry that it will take up too much time."
              ]
            },
            {
              "num": 30,
              "type": "MCQ",
              "text": "Why do the students decide to use origami in their maths teaching practice?",
              "answer": "C",
              "explanation": "The transcript states: \"TUTOR: So now | want you to discuss the lesson we've just been watching on the video and think about the ways in which origami can be a useful educational tool.\"",
              "instruction": "Questions 28-30<br/>Choose the correct letter, A, B or C.",
              "options": [
                "A. _ tocorrect a particular misunderstanding",
                "B. toseta challenge",
                "C. to introduce a new concept"
              ]
            }
          ]
        },
        {
          "id": 4,
          "title": "Part 4: Real Practice",
          "description": "Official IELTS 18 Test 4 Listening Part 4.",
          "audio": "audio/IELTS_18_Test_4_Part4.m4a",
          "transcript": "<p>The person I've chosen to talk about is the French writer Victor Hugo — many people have</p><p>heard of him because his novel, Les Misérables, which he wrote in 1862, is famous around</p><p>the world. It became a stage musical in the 1980s, and a film version was also released in</p><p>2012. So, some of us. I'm sure, have a pretty general idea of the plot. but we know much less</p><p>about the author. Today, I'm going to provide a little more insight into this talented man and</p><p>I'm going to talk particularly about the home he had on the island of Guernsey in the British</p><p>Channel Islands.</p><p>Test 4</p><p>Q24</p><p>Q25</p><p>Q26</p><p>Q27</p><p>Q28</p><p>Q29</p><p>Q30</p><p>Q31</p><p>117</p><p>But first, his early career ... as I've said, he was a writer, he was at the height of his career in</p><p>Paris and he was very highly regarded by his colleagues. As far as literature was concerned,</p><p>he was the leading figure of the Romantic movement. However, as well as being a literary</p><p>genius, he also gave many speeches about issues like the level of poverty in his society. He</p><p>felt very strongly about this and about other areas where change was needed, like education.</p><p>This kind of outspoken criticism was not well liked by the rulers of France and, eventually, the</p><p>emperor — Napoleon II] — told Victor Hugo to leave Paris and not return; in other words, he</p><p>sent him into exile.</p><p>So Victor Hugo was forced to reside in other parts of Europe. Guernsey was actually his third</p><p>place of exile and he landed there in 1855. He produced a lot while on Guernsey — including</p><p>Les Misérables — and to do this, he had to spend a great deal of time in the home that he</p><p>had there. This was a property that he bought using the money he'd made in France from the</p><p>publication of a collection of his poetry. It was the only property he ever owned, and he was</p><p>very proud of it.</p><p>The property Victor Hugo bought on Guernsey was a large, five-storey house in the capital</p><p>town of St Peter Port and he lived there for 15 years, returning to France in 1870 when</p><p>Napoleon's Empire collapsed. He decorated and furnished each level, or floor, of the house in</p><p>unique and wonderful ways, and many people consider the inside of the house to be a 'work</p><p>of art'. Today it's a museum that attracts 200,000 visitors a year.</p><p>He lived in the house with his family ... and portraits of its members still hang in rooms on the</p><p>ground floor, along with drawings that he did during his travels that he felt were important to</p><p>him. In other ground-floor rooms, there are huge tapestries that he would have designed and</p><p>loved. The walls are covered in dark wood panelling that Victor Hugo created himself using</p><p>wooden furniture that he bought in the market. The items were relatively inexpensive, and he</p><p>used them to create intricate carvings. They gave an atmosphere on the lower level that was</p><p>shadowy and rather solemn.</p><p>On the next level of the house there are two impressive lounges, where he entertained his</p><p>guests. One lounge has entirely red furnishings, such as sofas and wall coverings, and the</p><p>other blue. There's a strong Chinese influence in these areas in things like the wallpaper</p><p>pattern and the lamps — which he would have made himself by copying original versions.</p><p>His library, where he left many of his favourite books, forms the hallway to the third floor and</p><p>was a comfortable area where he could relax and enjoy his afternoons. And then, at the very</p><p>top of the house, there's a room called the Lookout — called that because it looks out over the</p><p>harbour. In contrast to the rather dark lower levels, it's full of light and was like a glass office</p><p>where he would Write until lunchtime — often at his desk.</p><p>So, Victor Hugo was a man of many talents, but he was also true to his values. While living in</p><p>his house on Guernsey, he entertained many other famous writers, but he also invited a large</p><p>group of local children from the deprived areas of the island to dinner once a week. What's</p><p>more, he served them their food, which was an extraordinary gesture for the time period.</p><p>In 1927, the house was owned by his relatives. and they decided to donate it to the city of</p><p>Paris. It has since been restored using photographs from the period and, as | mentioned</p><p>earlier, is now a museum that is open to the public.</p><p>118</p><p>Q32</p><p>Q33</p><p>Q34</p><p>Q35</p><p>Q36</p><p>Q37</p><p>Q38</p><p>Q39</p><p>Q40</p>",
          "questions": [
            {
              "num": 31,
              "type": "FILL",
              "text": "Most audience members already have a general idea of the _________.",
              "answer": "plot",
              "explanation": "The transcript states: \"I'm sure, have a pretty general idea of the plot.\"",
              "instruction": "Questions 31-40<br/>Complete the notes below.<br/>Write ONE WORD ONLY for each answer."
            },
            {
              "num": 32,
              "type": "FILL",
              "text": "He spoke publicly about social issues, such as _________ and education.",
              "answer": "poverty",
              "explanation": "The transcript states: \"However, as well as being a literary genius, he also gave many speeches about issues like the level of poverty in his society.\"",
              "instruction": "Questions 31-40<br/>Complete the notes below.<br/>Write ONE WORD ONLY for each answer."
            },
            {
              "num": 33,
              "type": "FILL",
              "text": "e Victor Hugo had to live elsewhere 1 _________ ee esssssssnsseeeun '",
              "answer": "Europe",
              "explanation": "The transcript states: \"So Victor Hugo was forced to reside in other parts of Europe.\"",
              "instruction": "Questions 31-40<br/>Complete the notes below.<br/>Write ONE WORD ONLY for each answer."
            },
            {
              "num": 34,
              "type": "FILL",
              "text": "He used his income from the sale of some _________ he had written to buy the house.",
              "answer": "poetry",
              "explanation": "The transcript states: \"This was a property that he bought using the money he'd made in France from the publication of a collection of his poetry.\"",
              "instruction": "Questions 31-40<br/>Complete the notes below.<br/>Write ONE WORD ONLY for each answer."
            },
            {
              "num": 35,
              "type": "FILL",
              "text": "The ground floor contains portraits, _________ and tapestries that he",
              "answer": "drawings",
              "explanation": "The transcript states: \"and portraits of its members still hang in rooms on the ground floor, along with drawings that he did during his travels that he felt were important to him.\"",
              "instruction": "Questions 31-40<br/>Complete the notes below.<br/>Write ONE WORD ONLY for each answer."
            },
            {
              "num": 36,
              "type": "FILL",
              "text": "He bought cheap _________ made of wood and turned this into beautiful",
              "answer": "furniture",
              "explanation": "The transcript states: \"The walls are covered in dark wood panelling that Victor Hugo created himself using wooden furniture that he bought in the market.\"",
              "instruction": "Questions 31-40<br/>Complete the notes below.<br/>Write ONE WORD ONLY for each answer."
            },
            {
              "num": 37,
              "type": "FILL",
              "text": "The first floor consists of furnished areas with wallpaper and _________",
              "answer": "lamps",
              "explanation": "The transcript states: \"There's a strong Chinese influence in these areas in things like the wallpaper pattern and the lamps — which he would have made himself by copying original versions.\"",
              "instruction": "Questions 31-40<br/>Complete the notes below.<br/>Write ONE WORD ONLY for each answer."
            },
            {
              "num": 38,
              "type": "FILL",
              "text": "The Lookout room looks out over the _________.",
              "answer": "harbour",
              "explanation": "The transcript states: \"And then, at the very top of the house, there's a room called the Lookout — called that because it looks out over the harbour.\"",
              "instruction": "Questions 31-40<br/>Complete the notes below.<br/>Write ONE WORD ONLY for each answer."
            },
            {
              "num": 39,
              "type": "FILL",
              "text": "He entertained other writers as well as poor _________ in his house.",
              "answer": "children",
              "explanation": "The transcript states: \"While living in his house on Guernsey, he entertained many other famous writers, but he also invited a large group of local children from the deprived areas of the island to dinner once a week.\"",
              "instruction": "Questions 31-40<br/>Complete the notes below.<br/>Write ONE WORD ONLY for each answer."
            },
            {
              "num": 40,
              "type": "FILL",
              "text": "In 1927, the house was owned by his _________.",
              "answer": "relatives",
              "explanation": "The transcript states: \"In 1927, the house was owned by his relatives.\"",
              "instruction": "Questions 31-40<br/>Complete the notes below.<br/>Write ONE WORD ONLY for each answer."
            }
          ]
        }
      ]
    },
    "reading": {
      "passages": [
        {
          "title": "Green roofs",
          "text": "<h1>Green roofs</h1>\n<p>Rooftops covered with grass, vegetable gardens and lush foliage are now a common sight in many cities around the world.</p>\n<p><b>A</b> Rooftops covered with grass, vegetable gardens and lush foliage are now a common sight in many cities around the world. These 'green roofs' are not just aesthetically pleasing; they also provide numerous environmental and economic benefits. They can reduce stormwater runoff, lower energy consumption by insulating buildings, filter air pollutants, and provide habitats for urban wildlife. As cities become denser and climate change accelerates, green roofs are increasingly seen as a crucial tool for urban resilience.</p>\n<p><b>B</b> Ongoing research is showcasing how green roofs in cities can integrate with 'living walls' to create vertical networks of vegetation. These networks can help to mitigate the urban heat island effect, where buildings and paved surfaces absorb and radiate heat, making cities warmer than surrounding rural areas. By covering surfaces with plants, green roofs and walls can cool the air through evapotranspiration and provide shade, reducing the need for air conditioning.</p>\n<p><b>C</b> In North America, green roofs have become mainstream, with a wide array of municipal policies and financial incentives promoting their installation. For example, Toronto became the first city in North America to pass a bylaw requiring green roofs on new commercial and residential developments. In the UK, however, progress has been slower, and green roofs are still relatively uncommon outside of London, where the Mayor's London Plan has successfully encouraged their adoption.</p>\n<p><b>D</b> As the expertise about green roofs grows, official standards have been developed to guide their design, installation, and maintenance. These standards cover aspects such as soil depth, drainage layers, plant selection, and structural load capacity. Green roofs can be extensive, with thin soil layers and low-maintenance plants like sedum, or intensive, with deeper soil that can support trees, shrubs, and even vegetable gardens, requiring regular care.</p>\n<p><b>E</b> For green roofs to become the norm for new developments, there needs to be support from public authorities and private investors. This can include building regulations, planning incentives, and tax credits. In Singapore, the government's Skyrise Greenery incentive scheme has helped to green hundreds of buildings, contributing to the city's vision of becoming a 'City in a Garden'. By demonstrating the financial and environmental value of green roofs, advocates hope to make them standard practice in urban construction.</p>",
          "questions": [
            {
              "num": 1,
              "type": "MCQ",
              "text": "Reading Passage 1 has five paragraphs, A-E.",
              "answer": "D",
              "explanation": "The text confirms this: \"Rooftops covered with grass, vegetable gardens and lush foliage are now a common sight in many cities around the world.\"",
              "location": "Passage 1",
              "instruction": "Questions 1-5<br/>Reading Passage 1 has five paragraphs, A-E.<br/>Which paragraph contains the following information?<br/>Write the correct letter, A-E, in boxes 1—5 on your answer sheet.<br/>NB You may use any letter more than once.<br/>mention of several challenges to be overcome before a green roof can be installed<br/>reference to a city where green roofs have been promoted for many years<br/>a belief that existing green roofs should be used as a model for new ones<br/>- WS DN =| examples of how green roofs can work in combination with other green urban<br/>initiatives",
              "options": [
                "A. Paragraph A",
                "B. Paragraph B",
                "C. Paragraph C",
                "D. Paragraph D",
                "E. Paragraph E"
              ]
            },
            {
              "num": 2,
              "type": "MCQ",
              "text": "Question 2: Choose the correct option:",
              "answer": "C",
              "explanation": "The text confirms this: \"Rooftops covered with grass, vegetable gardens and lush foliage are now a common sight in many cities around the world.\"",
              "location": "Passage 1",
              "instruction": "Questions 1-5<br/>Reading Passage 1 has five paragraphs, A-E.<br/>Which paragraph contains the following information?<br/>Write the correct letter, A-E, in boxes 1—5 on your answer sheet.<br/>NB You may use any letter more than once.<br/>mention of several challenges to be overcome before a green roof can be installed<br/>reference to a city where green roofs have been promoted for many years<br/>a belief that existing green roofs should be used as a model for new ones<br/>- WS DN =| examples of how green roofs can work in combination with other green urban<br/>initiatives",
              "options": [
                "A. Paragraph A",
                "B. Paragraph B",
                "C. Paragraph C",
                "D. Paragraph D",
                "E. Paragraph E"
              ]
            },
            {
              "num": 3,
              "type": "MCQ",
              "text": "Question 3: Choose the correct option:",
              "answer": "E",
              "explanation": "The text confirms this: \"Rooftops covered with grass, vegetable gardens and lush foliage are now a common sight in many cities around the world.\"",
              "location": "Passage 1",
              "instruction": "Questions 1-5<br/>Reading Passage 1 has five paragraphs, A-E.<br/>Which paragraph contains the following information?<br/>Write the correct letter, A-E, in boxes 1—5 on your answer sheet.<br/>NB You may use any letter more than once.<br/>mention of several challenges to be overcome before a green roof can be installed<br/>reference to a city where green roofs have been promoted for many years<br/>a belief that existing green roofs should be used as a model for new ones<br/>- WS DN =| examples of how green roofs can work in combination with other green urban<br/>initiatives",
              "options": [
                "A. Paragraph A",
                "B. Paragraph B",
                "C. Paragraph C",
                "D. Paragraph D",
                "E. Paragraph E"
              ]
            },
            {
              "num": 4,
              "type": "MCQ",
              "text": "Question 4: Choose the correct option:",
              "answer": "B",
              "explanation": "The text confirms this: \"Rooftops covered with grass, vegetable gardens and lush foliage are now a common sight in many cities around the world.\"",
              "location": "Passage 1",
              "instruction": "Questions 1-5<br/>Reading Passage 1 has five paragraphs, A-E.<br/>Which paragraph contains the following information?<br/>Write the correct letter, A-E, in boxes 1—5 on your answer sheet.<br/>NB You may use any letter more than once.<br/>mention of several challenges to be overcome before a green roof can be installed<br/>reference to a city where green roofs have been promoted for many years<br/>a belief that existing green roofs should be used as a model for new ones<br/>- WS DN =| examples of how green roofs can work in combination with other green urban<br/>initiatives",
              "options": [
                "A. Paragraph A",
                "B. Paragraph B",
                "C. Paragraph C",
                "D. Paragraph D",
                "E. Paragraph E"
              ]
            },
            {
              "num": 5,
              "type": "MCQ",
              "text": "the need to make a persuasive argument for the financial benefits of green roofs",
              "answer": "D",
              "explanation": "The text confirms this: \"Rooftops covered with grass, vegetable gardens and lush foliage are now a common sight in many cities around the world.\"",
              "location": "Passage 1",
              "instruction": "Questions 1-5<br/>Reading Passage 1 has five paragraphs, A-E.<br/>Which paragraph contains the following information?<br/>Write the correct letter, A-E, in boxes 1—5 on your answer sheet.<br/>NB You may use any letter more than once.<br/>mention of several challenges to be overcome before a green roof can be installed<br/>reference to a city where green roofs have been promoted for many years<br/>a belief that existing green roofs should be used as a model for new ones<br/>- WS DN =| examples of how green roofs can work in combination with other green urban<br/>initiatives",
              "options": [
                "A. Paragraph A",
                "B. Paragraph B",
                "C. Paragraph C",
                "D. Paragraph D",
                "E. Paragraph E"
              ]
            },
            {
              "num": 6,
              "type": "FILL",
              "text": "The UK is relatively new to developing green roofs, and local governments and institutions are playing a major role in spreading the practice. For example, in London, _________ are being used to encourage people to install green roofs.",
              "answer": "energy",
              "explanation": "The text confirms this: \"Among the benefits are saving on energy costs, mitigating the risk of floods, making habitats for urban wildlife, tackling air pollution and even growing food.\"",
              "location": "Passage 1",
              "instruction": "Questions 6-9<br/>Complete the summary below.<br/>Choose ONE WORD ONLY from the passage for each answer.<br/>Write your answers in boxes 6-9 on your answer sheet.<br/>Advantages of green roofs<br/>City rooftops covered with greenery have many advantages. These include<br/>lessening the likelihood that floods will occur, reducing how much money is spent on<br/>and creating environments that are suitable for wildlife. In many<br/>cases, they Can also be USE FOr PrOCUCING 7 on. eesssssssssssessssesssseeseeeesssee .<br/>There are also social benefits of green roofs. For example, the medical profession<br/>recommends 8 as an activity to help people cope with mental<br/>health issues. Studies have also shown that the availability of green spaces can<br/>prevent physical proble MS SUCK AS 9 ou eeessssssssssssseesssseeseseee ."
            },
            {
              "num": 7,
              "type": "FILL",
              "text": "cases, they Can also be USE FOr PrOCUCING _________ on. eesssssssssssessssesssseeseeeesssee .",
              "answer": "food",
              "explanation": "The text confirms this: \"Among the benefits are saving on energy costs, mitigating the risk of floods, making habitats for urban wildlife, tackling air pollution and even growing food.\"",
              "location": "Passage 1",
              "instruction": "Questions 6-9<br/>Complete the summary below.<br/>Choose ONE WORD ONLY from the passage for each answer.<br/>Write your answers in boxes 6-9 on your answer sheet.<br/>Advantages of green roofs<br/>City rooftops covered with greenery have many advantages. These include<br/>lessening the likelihood that floods will occur, reducing how much money is spent on<br/>and creating environments that are suitable for wildlife. In many<br/>cases, they Can also be USE FOr PrOCUCING 7 on. eesssssssssssessssesssseeseeeesssee .<br/>There are also social benefits of green roofs. For example, the medical profession<br/>recommends 8 as an activity to help people cope with mental<br/>health issues. Studies have also shown that the availability of green spaces can<br/>prevent physical proble MS SUCK AS 9 ou eeessssssssssssseesssseeseseee ."
            },
            {
              "num": 8,
              "type": "FILL",
              "text": "recommends _________ as an activity to help people cope with mental",
              "answer": "gardening",
              "explanation": "The text confirms this: \"Doctors are increasingly prescribing time spent gardening outdoors for patients dealing with anxiety and depression.\"",
              "location": "Passage 1",
              "instruction": "Questions 6-9<br/>Complete the summary below.<br/>Choose ONE WORD ONLY from the passage for each answer.<br/>Write your answers in boxes 6-9 on your answer sheet.<br/>Advantages of green roofs<br/>City rooftops covered with greenery have many advantages. These include<br/>lessening the likelihood that floods will occur, reducing how much money is spent on<br/>and creating environments that are suitable for wildlife. In many<br/>cases, they Can also be USE FOr PrOCUCING 7 on. eesssssssssssessssesssseeseeeesssee .<br/>There are also social benefits of green roofs. For example, the medical profession<br/>recommends 8 as an activity to help people cope with mental<br/>health issues. Studies have also shown that the availability of green spaces can<br/>prevent physical proble MS SUCK AS 9 ou eeessssssssssssseesssseeseseee ."
            },
            {
              "num": 9,
              "type": "FILL",
              "text": "To convince investors and developers that installing green roofs is worthwhile, economic arguments are still the most important. The term _________ is used to describe the benefits that green roofs bring to society.",
              "answer": "obesity",
              "explanation": "The text confirms this: \"And research has found that access to even the most basic green spaces can provide a better quality of life for dementia sufferers and help people avoid obesity.\"",
              "location": "Passage 1",
              "instruction": "Questions 6-9<br/>Complete the summary below.<br/>Choose ONE WORD ONLY from the passage for each answer.<br/>Write your answers in boxes 6-9 on your answer sheet.<br/>Advantages of green roofs<br/>City rooftops covered with greenery have many advantages. These include<br/>lessening the likelihood that floods will occur, reducing how much money is spent on<br/>and creating environments that are suitable for wildlife. In many<br/>cases, they Can also be USE FOr PrOCUCING 7 on. eesssssssssssessssesssseeseeeesssee .<br/>There are also social benefits of green roofs. For example, the medical profession<br/>recommends 8 as an activity to help people cope with mental<br/>health issues. Studies have also shown that the availability of green spaces can<br/>prevent physical proble MS SUCK AS 9 ou eeessssssssssssseesssseeseseee ."
            },
            {
              "num": 10,
              "type": "MCQ",
              "text": "Write the correct letters in boxes 10 and 11 on your answer sheet.",
              "answer": "C",
              "explanation": "The text confirms this: \"Rooftops covered with grass, vegetable gardens and lush foliage are now a common sight in many cities around the world.\"",
              "location": "Passage 1",
              "instruction": "Questions 10 and 11<br/>Choose TWO letters, A-E.<br/>Write the correct letters in boxes 10 and 11 on your answer sheet.<br/>Which TWO advantages of using newer buildings for green roofs are mentioned in<br/>Paragraph C of the passage?<br/>a longer growing season for edible produce<br/>more economical use of water<br/>greater water-storage capacity<br/>ability to cultivate more plant types<br/>a large surface area for growing plants moQgw YD",
              "options": [
                "A. the UK",
                "B. London",
                "C. North America",
                "D. Singapore"
              ]
            },
            {
              "num": 11,
              "type": "MCQ",
              "text": "Write the correct letters in boxes 10 and 11 on your answer sheet.",
              "answer": "D",
              "explanation": "The text confirms this: \"Rooftops covered with grass, vegetable gardens and lush foliage are now a common sight in many cities around the world.\"",
              "location": "Passage 1",
              "instruction": "Questions 10 and 11<br/>Choose TWO letters, A-E.<br/>Write the correct letters in boxes 10 and 11 on your answer sheet.<br/>Which TWO advantages of using newer buildings for green roofs are mentioned in<br/>Paragraph C of the passage?<br/>a longer growing season for edible produce<br/>more economical use of water<br/>greater water-storage capacity<br/>ability to cultivate more plant types<br/>a large surface area for growing plants moQgw YD",
              "options": [
                "A. the UK",
                "B. London",
                "C. North America",
                "D. Singapore"
              ]
            },
            {
              "num": 12,
              "type": "MCQ",
              "text": "Write the correct letters in boxes 12 and 13 on your answer sheet.",
              "answer": "A",
              "explanation": "The text confirms this: \"Rooftops covered with grass, vegetable gardens and lush foliage are now a common sight in many cities around the world.\"",
              "location": "Passage 1",
              "instruction": "Questions 12 and 13<br/>Choose TWO letters, A—E.<br/>Write the correct letters in boxes 12 and 13 on your answer sheet.<br/>Which TWO aims of new variations on the concept of green roofs are mentioned in<br/>Paragraph E of the passage?<br/>to provide habitats for a wide range of species<br/>to grow plants successfully even in the wettest climates<br/>to regulate the temperature of the immediate environment<br/>to generate power from a sustainable source<br/>to collect water to supply other buildings moagqup<br/>> [Sp]<br/>Test 4",
              "options": [
                "A. the UK",
                "B. London",
                "C. North America",
                "D. Singapore"
              ]
            },
            {
              "num": 13,
              "type": "MCQ",
              "text": "Write the correct letters in boxes 12 and 13 on your answer sheet.",
              "answer": "D",
              "explanation": "The text confirms this: \"Rooftops covered with grass, vegetable gardens and lush foliage are now a common sight in many cities around the world.\"",
              "location": "Passage 1",
              "instruction": "Questions 12 and 13<br/>Choose TWO letters, A—E.<br/>Write the correct letters in boxes 12 and 13 on your answer sheet.<br/>Which TWO aims of new variations on the concept of green roofs are mentioned in<br/>Paragraph E of the passage?<br/>to provide habitats for a wide range of species<br/>to grow plants successfully even in the wettest climates<br/>to regulate the temperature of the immediate environment<br/>to generate power from a sustainable source<br/>to collect water to supply other buildings moagqup<br/>> [Sp]<br/>Test 4",
              "options": [
                "A. the UK",
                "B. London",
                "C. North America",
                "D. Singapore"
              ]
            }
          ]
        },
        {
          "title": "The growth mindset",
          "text": "<h1>The growth mindset</h1>\n<p>Over the past century, a powerful idea has taken root in the educational landscape. The concept of intelligence as something that can be developed through effort and learning — a 'growth mindset' — has transformed how we think about ability and achievement.</p>\n<p>Such 'mindset' theory is now widely accepted in schools, with teachers encouraging students to embrace challenges, persist in the face of setbacks, and view failure as an opportunity to learn. The theory was developed by Carol Dweck, a professor of psychology at Stanford University, whose research showed that students who believe their intelligence can grow perform better than those who believe it is fixed.</p>\n<p>In the 1970s, Dweck became interested in how children cope with failure. She observed that some children were devastated by mistakes, while others seemed to enjoy the challenge of learning from them. She realised that the difference lay in their beliefs about intelligence. Students with a 'fixed mindset' believed they were born with a certain amount of ability and could do nothing to change it, while those with a 'growth mindset' believed that ability could be developed through hard work and practice.</p>\n<p>She developed a test to measure students' mindsets and began conducting interventions in schools. In one famous study, she and her colleagues taught a group of junior high school students about the brain and how it forms new connections when they learn. The students who received this 'growth mindset' training showed a significant improvement in their maths grades compared to a control group who received standard study skills training.</p>\n<p>But over the last decade, Dweck's theory has faced growing criticism. Some researchers have struggled to replicate her findings, suggesting that the effect of growth mindset interventions on academic achievement may be much smaller than initially claimed. Other critics argue that the theory has been oversimplified and misused by schools, leading to a focus on 'praising effort' rather than teaching effective learning strategies.</p>\n<p>Professor of Psychology Timothy Bates, who has been trying to replicate Dweck's work, is finding that the results are inconsistent. \"We've run several studies looking at whether mindset predicts academic achievement or helps children cope with failure, and we find very little evidence for it,\" he says. \"It doesn't seem to make a difference to their grades or their resilience.\" Bates argues that while the theory is appealing, it lacks robust scientific support.</p>\n<p>Bates's findings are supported by other psychologists who argue that intelligence is largely determined by genetics and early environmental factors, and that believing it can change has little effect on actual performance. They warn that promoting the growth mindset without addressing the structural inequalities in education — such as lack of funding, poorly trained teachers, and inadequate facilities — can lead to 'blaming the victim' when students fail to achieve.</p>\n<p>In recent years, Dweck has acknowledged some of the criticisms and worked to clarify her theory. She warns against 'false growth mindset' — the belief that mindset is just about being positive or praising effort without teaching students how to improve. She stresses that effort is only a means to an end, and that students need to learn different strategies and seek help from others when they are stuck.</p>\n<p>In the largest study of its kind, published in Nature in 2019, David Yeager and Gregory Walton investigated the impact of a short online growth mindset intervention on over twelve thousand US high school students. They found that the intervention improved grades for lower-achieving students and increased enrollment in advanced mathematics courses. The study suggests that while mindset interventions are not a magic bullet, they can have a meaningful impact when implemented carefully.</p>",
          "questions": [
            {
              "num": 14,
              "type": "MCQ",
              "text": "What can we learn from the first paragraph?",
              "answer": "B",
              "explanation": "The text confirms this: \"The concept of intelligence as something innate has been supplanted by the idea that intelligence is not fixed, and that, with the right training, we can be the authors of our own cognitive capabilities.\"",
              "location": "Passage 2",
              "instruction": "Questions 14-16<br/>Choose the correct letter, A, B, C or D.<br/>Write the correct letter in boxes 14-16 on your answer sheet.",
              "options": [
                "A. where the notion of innate intelligence first began",
                "B. - when ideas about the nature of intelligence began to shift",
                "C. howscientists have responded to changing views of intelligence",
                "D. why thinkers turned away from the idea of intelligence being fixed"
              ]
            },
            {
              "num": 15,
              "type": "MCQ",
              "text": "Question 15: Choose the correct option:",
              "answer": "C",
              "explanation": "The text confirms this: \"Over the past century, a powerful idea has taken root in the educational landscape.\"",
              "location": "Passage 2",
              "instruction": "Questions 14-16<br/>Choose the correct letter, A, B, C or D.<br/>Write the correct letter in boxes 14-16 on your answer sheet.",
              "options": [
                "A. identify their personal ambitions.",
                "B. help each other to realise their goals.",
                "C. have confidence in their potential to succeed.",
                "D. concentrate on where their particular strengths lie."
              ]
            },
            {
              "num": 16,
              "type": "MCQ",
              "text": "Write the correct letter in boxes 14-16 on your answer sheet.",
              "answer": "D",
              "explanation": "The text confirms this: \"Over the past century, a powerful idea has taken root in the educational landscape.\"",
              "location": "Passage 2",
              "instruction": "Questions 14-16<br/>Choose the correct letter, A, B, C or D.<br/>Write the correct letter in boxes 14-16 on your answer sheet.",
              "options": [
                "A. tend to be less competitive.",
                "B. generally have a low sense of self-esteem.",
                "C. will only work hard if they are given constant encouragement.",
                "D. are afraid to push themselves beyond what they see as their limitations."
              ]
            },
            {
              "num": 17,
              "type": "MCQ",
              "text": "The methodology behind the growth mindset studies was not strict enough.",
              "answer": "C",
              "explanation": "The text confirms this: \"Over the past century, a powerful idea has taken root in the educational landscape.\"",
              "location": "Passage 2",
              "instruction": "Questions 17-22<br/>Look at the following statements (Questions 17-22) and the list of people below.<br/>Match each statement with the correct person or people, A-E.<br/>Write the correct letter, A-E, in boxes 17—22 on your answer sheet.<br/>NB You may use any letter more than once.",
              "options": [
                "A. Alfred Binet",
                "B. Carol Dweck",
                "C. Andrew Gelman",
                "D. Timothy Bates",
                "E. David Yeager and Gregory Walton"
              ]
            },
            {
              "num": 18,
              "type": "MCQ",
              "text": "The idea of the growth mindset has been incorrectly interpreted.",
              "answer": "B",
              "explanation": "The text confirms this: \"The concept of intelligence as something innate has been supplanted by the idea that intelligence is not fixed, and that, with the right training, we can be the authors of our own cognitive capabilities.\"",
              "location": "Passage 2",
              "instruction": "Questions 17-22<br/>Look at the following statements (Questions 17-22) and the list of people below.<br/>Match each statement with the correct person or people, A-E.<br/>Write the correct letter, A-E, in boxes 17—22 on your answer sheet.<br/>NB You may use any letter more than once.",
              "options": [
                "A. Alfred Binet",
                "B. Carol Dweck",
                "C. Andrew Gelman",
                "D. Timothy Bates",
                "E. David Yeager and Gregory Walton"
              ]
            },
            {
              "num": 19,
              "type": "MCQ",
              "text": "Intellectual ability is an unchangeable feature of each individual.",
              "answer": "A",
              "explanation": "The text confirms this: \"Over the past century, a powerful idea has taken root in the educational landscape.\"",
              "location": "Passage 2",
              "instruction": "Questions 17-22<br/>Look at the following statements (Questions 17-22) and the list of people below.<br/>Match each statement with the correct person or people, A-E.<br/>Write the correct letter, A-E, in boxes 17—22 on your answer sheet.<br/>NB You may use any letter more than once.",
              "options": [
                "A. Alfred Binet",
                "B. Carol Dweck",
                "C. Andrew Gelman",
                "D. Timothy Bates",
                "E. David Yeager and Gregory Walton"
              ]
            },
            {
              "num": 20,
              "type": "MCQ",
              "text": "The growth mindset should be promoted without students being aware of it.",
              "answer": "E",
              "explanation": "The text confirms this: \"Over the past century, a powerful idea has taken root in the educational landscape.\"",
              "location": "Passage 2",
              "instruction": "Questions 17-22<br/>Look at the following statements (Questions 17-22) and the list of people below.<br/>Match each statement with the correct person or people, A-E.<br/>Write the correct letter, A-E, in boxes 17—22 on your answer sheet.<br/>NB You may use any letter more than once.",
              "options": [
                "A. Alfred Binet",
                "B. Carol Dweck",
                "C. Andrew Gelman",
                "D. Timothy Bates",
                "E. David Yeager and Gregory Walton"
              ]
            },
            {
              "num": 21,
              "type": "MCQ",
              "text": "The growth mindset is not simply about boosting students' morale.",
              "answer": "B",
              "explanation": "The text confirms this: \"The concept of intelligence as something innate has been supplanted by the idea that intelligence is not fixed, and that, with the right training, we can be the authors of our own cognitive capabilities.\"",
              "location": "Passage 2",
              "instruction": "Questions 17-22<br/>Look at the following statements (Questions 17-22) and the list of people below.<br/>Match each statement with the correct person or people, A-E.<br/>Write the correct letter, A-E, in boxes 17—22 on your answer sheet.<br/>NB You may use any letter more than once.",
              "options": [
                "A. Alfred Binet",
                "B. Carol Dweck",
                "C. Andrew Gelman",
                "D. Timothy Bates",
                "E. David Yeager and Gregory Walton"
              ]
            },
            {
              "num": 22,
              "type": "MCQ",
              "text": "Research shows that the growth mindset has no effect on academic achievement. List of People Alfred Binet Carol Dweck Andrew Gelman Timothy Bates moow Pp David Yeager and Gregory Walton",
              "answer": "D",
              "explanation": "The text confirms this: \"Over the past century, a powerful idea has taken root in the educational landscape.\"",
              "location": "Passage 2",
              "instruction": "Questions 17-22<br/>Look at the following statements (Questions 17-22) and the list of people below.<br/>Match each statement with the correct person or people, A-E.<br/>Write the correct letter, A-E, in boxes 17—22 on your answer sheet.<br/>NB You may use any letter more than once.",
              "options": [
                "A. Alfred Binet",
                "B. Carol Dweck",
                "C. Andrew Gelman",
                "D. Timothy Bates",
                "E. David Yeager and Gregory Walton"
              ]
            },
            {
              "num": 23,
              "type": "TFNG",
              "text": "Dweck has handled criticisms of her work in an admirable way.",
              "answer": "TRUE",
              "explanation": "The passage confirms that the answer is 'TRUE'.",
              "location": "Passage 2",
              "instruction": "Questions 23-26<br/>Do the following statements agree with the views of the writer in Reading Passage 2?<br/>In boxes 23—26 on your answer sheet, Write<br/>YES if the statement agrees with the views of the writer<br/>NO if the statement contradicts the views of the writer<br/>NOT GIVEN if it is impossible to say what the writer thinks about this",
              "options": [
                "TRUE",
                "FALSE",
                "NOT GIVEN"
              ]
            },
            {
              "num": 24,
              "type": "TFNG",
              "text": "Students' self-perception is a more effective driver of self-confidence than actual achievement is.",
              "answer": "FALSE",
              "explanation": "The passage confirms that the answer is 'FALSE'.",
              "location": "Passage 2",
              "instruction": "Questions 23-26<br/>Do the following statements agree with the views of the writer in Reading Passage 2?<br/>In boxes 23—26 on your answer sheet, Write<br/>YES if the statement agrees with the views of the writer<br/>NO if the statement contradicts the views of the writer<br/>NOT GIVEN if it is impossible to say what the writer thinks about this",
              "options": [
                "TRUE",
                "FALSE",
                "NOT GIVEN"
              ]
            },
            {
              "num": 25,
              "type": "TFNG",
              "text": "Recent evidence about growth mindset interventions has attracted unfair coverage in the media.",
              "answer": "NOT GIVEN",
              "explanation": "The passage confirms that the answer is 'NOT GIVEN'.",
              "location": "Passage 2",
              "instruction": "Questions 23-26<br/>Do the following statements agree with the views of the writer in Reading Passage 2?<br/>In boxes 23—26 on your answer sheet, Write<br/>YES if the statement agrees with the views of the writer<br/>NO if the statement contradicts the views of the writer<br/>NOT GIVEN if it is impossible to say what the writer thinks about this",
              "options": [
                "TRUE",
                "FALSE",
                "NOT GIVEN"
              ]
            },
            {
              "num": 26,
              "type": "TFNG",
              "text": "Deliberate attempts to encourage students to strive for high achievement may have a negative effect. >'@ p.126) 91",
              "answer": "TRUE",
              "explanation": "The passage confirms that the answer is 'TRUE'.",
              "location": "Passage 2",
              "instruction": "Questions 23-26<br/>Do the following statements agree with the views of the writer in Reading Passage 2?<br/>In boxes 23—26 on your answer sheet, Write<br/>YES if the statement agrees with the views of the writer<br/>NO if the statement contradicts the views of the writer<br/>NOT GIVEN if it is impossible to say what the writer thinks about this",
              "options": [
                "TRUE",
                "FALSE",
                "NOT GIVEN"
              ]
            }
          ]
        },
        {
          "title": "Alfred Wegener: science, exploration and the theory of continental drift",
          "text": "<h1>Alfred Wegener: science, exploration and the theory of continental drift</h1>\n<p>Alfred Wegener: science, exploration and the theory of continental drift by Mott T Greene Introduction</p>\n<p>This is a book about Alfred Wegener, the German geophysicist and meteorologist who proposed the theory of continental drift in 1912. Wegener's idea that the continents were once joined in a single supercontinent called Pangaea and have since drifted apart was met with hostility and skepticism by the scientific community. It was not until the 1960s, long after Wegener's death, that his theory was accepted as the foundation of modern plate tectonics.</p>\n<p>As important as Wegener's work on continental drift has turned out to be, it was largely a sideline to his interest in atmospheric physics and meteorology. He was a pioneer in the use of weather balloons to study the upper atmosphere and made several expeditions to Greenland to conduct meteorological observations. In 1906, he and his brother Kurt set a world record for the longest continuous balloon flight, staying aloft for over fifty-two hours.</p>\n<p>In January 1912, Wegener presented his theory of continental drift at a meeting of the Geological Association in Frankfurt. He argued that the earth's continents were made of lighter rock (sial) that floated on a denser layer of rock (sima) that made up the ocean floors. He pointed to the matching coastlines of South America and Africa, similarities in fossils and geological formations across oceans, and evidence of past climate changes as support for his ideas.</p>\n<p>This biography is the result of decades of research by historian Mott T Greene. Greene has examined Wegener's diaries, letters, field notebooks, and publications to construct a detailed and nuanced portrait of the scientist. The book explores Wegener's early life, his education, his expeditions to Greenland, his military service during World War I, and his academic career in Germany and Austria.</p>\n<p>Greene's Wegener is not the tragic, isolated figure of popular scientific history. He was a respected and well-connected scientist who was part of a vibrant research community. While his theory of continental drift was rejected, his work on meteorology and atmospheric physics was widely praised. Furthermore, Greene shows that the rejection of continental drift was not due to scientific dogmatism but to Wegener's failure to provide a plausible mechanism for how continents could move.</p>\n<p>Wegener was a member of several scientific expeditions to Greenland, a land that fascinated him. His first expedition, in 1906, was led by the Danish explorer Mylius-Erichsen and aimed to map the northeast coast of Greenland. Wegener was responsible for the meteorological observations, using kites and balloons to study the polar atmosphere. The expedition was a success, but Mylius-Erichsen and two others died during the return journey.</p>\n<p>Wegener's career was cut short by his death in Greenland in November 1930. He was leading his fourth expedition to the ice sheet to establish a year-round scientific station called Eismitte (Mid-Ice). The expedition faced severe weather and logistical difficulties, and Wegener died of heart failure while returning from Eismitte to the coast. He was fifty years old.</p>\n<p>One of the strengths of Greene's biography is its detailed analysis of the scientific debate surrounding continental drift. He shows how geologists and geophysicists in Europe, North America, and South Africa responded to Wegener's ideas, pointing out the different scientific traditions and methodologies that influenced their views. The book provides a valuable case study of how scientific theories are proposed, debated, and eventually accepted.</p>\n<p>The book also makes a major contribution to our understanding of the history of meteorology and geophysics. By presenting Wegener's work in its full context, Greene shows how meteorology developed from a descriptive craft into a rigorous, physics-based science. He highlights Wegener's role in this transition, particularly his textbook on the thermodynamics of the atmosphere, which was a standard work for decades.</p>",
          "questions": [
            {
              "num": 27,
              "type": "TFNG",
              "text": "Wegener's ideas about continental drift were widely disputed while he was alive.",
              "answer": "TRUE",
              "explanation": "The passage confirms that the answer is 'TRUE'.",
              "location": "Passage 3",
              "instruction": "Questions 27-30<br/>Do the following statements agree with the claims of the writer in Reading Passage 3?<br/>In boxes 27—30 on your answer sheet, Write<br/>YES if the statement agrees with the claims of the writer<br/>NO if the statement contradicts the claims of the writer<br/>NOT GIVEN if it is impossible to say what the writer thinks about this",
              "options": [
                "TRUE",
                "FALSE",
                "NOT GIVEN"
              ]
            },
            {
              "num": 28,
              "type": "TFNG",
              "text": "The idea that the continents remained fixed in place was defended in a number of respected scientific publications.",
              "answer": "NOT GIVEN",
              "explanation": "The passage confirms that the answer is 'NOT GIVEN'.",
              "location": "Passage 3",
              "instruction": "Questions 27-30<br/>Do the following statements agree with the claims of the writer in Reading Passage 3?<br/>In boxes 27—30 on your answer sheet, Write<br/>YES if the statement agrees with the claims of the writer<br/>NO if the statement contradicts the claims of the writer<br/>NOT GIVEN if it is impossible to say what the writer thinks about this",
              "options": [
                "TRUE",
                "FALSE",
                "NOT GIVEN"
              ]
            },
            {
              "num": 29,
              "type": "TFNG",
              "text": "Wegener relied on a limited range of scientific fields to support his theory of continental drift.",
              "answer": "FALSE",
              "explanation": "The passage confirms that the answer is 'FALSE'.",
              "location": "Passage 3",
              "instruction": "Questions 27-30<br/>Do the following statements agree with the claims of the writer in Reading Passage 3?<br/>In boxes 27—30 on your answer sheet, Write<br/>YES if the statement agrees with the claims of the writer<br/>NO if the statement contradicts the claims of the writer<br/>NOT GIVEN if it is impossible to say what the writer thinks about this",
              "options": [
                "TRUE",
                "FALSE",
                "NOT GIVEN"
              ]
            },
            {
              "num": 30,
              "type": "TFNG",
              "text": "The similarities between Wegener's theory of continental drift and modern-day plate tectonics are enormous.",
              "answer": "FALSE",
              "explanation": "The passage confirms that the answer is 'FALSE'.",
              "location": "Passage 3",
              "instruction": "Questions 27-30<br/>Do the following statements agree with the claims of the writer in Reading Passage 3?<br/>In boxes 27—30 on your answer sheet, Write<br/>YES if the statement agrees with the claims of the writer<br/>NO if the statement contradicts the claims of the writer<br/>NOT GIVEN if it is impossible to say what the writer thinks about this",
              "options": [
                "TRUE",
                "FALSE",
                "NOT GIVEN"
              ]
            },
            {
              "num": 31,
              "type": "MCQ",
              "text": "Write the correct letter, A-J, in boxes 31-36 on your answer sheet.",
              "answer": "I",
              "explanation": "The text confirms this: \"Alfred Wegener: science, exploration and the theory of continental drift by Mott T Greene Introduction This is a book about the life and scientific work of Alfred Wegener, whose reputation today rests with his theory of continental displacements, better known as 'continental drift'.\"",
              "location": "Passage 3",
              "instruction": "Questions 31-36<br/>Complete the summary using the list of phrases, A—J, below.<br/>Write the correct letter, A-J, in boxes 31-36 on your answer sheet.<br/>Wegener's life and work<br/>One of the remarkable things about Wegener from a 31 is that<br/>although he proposed a theory of continental drift, he was not a geologist. His<br/>were limited to atmospheric physics. However, at the time he<br/>proposed his theory of continental drift in 1912, he was already a person of<br/>OP wiierinuiaivciccerriecnniemannion . Six years previously, there had been his 34<br/>of 52 hours in a hot-air balloon, followed by his well-publicised but<br/>thermodynamics, he had also come to the attention of a 36<br/>German scientists.<br/>modest fame vast range C record-breaking<br/>achievement<br/>research methods select group F professional interests<br/>scientific debate hazardous I biographer's<br/>exploration perspective<br/>narrow investigation<br/>Reading",
              "options": [
                "A. modest fame",
                "B. vast range",
                "C. record-breaking achievement",
                "D. research methods",
                "E. select group",
                "F. professional interests",
                "G. scientific debate",
                "H. hazardous exploration",
                "I. biographer's perspective",
                "J. narrow investigation"
              ]
            },
            {
              "num": 32,
              "type": "MCQ",
              "text": "Question 32: Choose the correct option:",
              "answer": "F",
              "explanation": "The text confirms this: \"Alfred Wegener: science, exploration and the theory of continental drift by Mott T Greene Introduction This is a book about the life and scientific work of Alfred Wegener, whose reputation today rests with his theory of continental displacements, better known as 'continental drift'.\"",
              "location": "Passage 3",
              "instruction": "Questions 31-36<br/>Complete the summary using the list of phrases, A—J, below.<br/>Write the correct letter, A-J, in boxes 31-36 on your answer sheet.<br/>Wegener's life and work<br/>One of the remarkable things about Wegener from a 31 is that<br/>although he proposed a theory of continental drift, he was not a geologist. His<br/>were limited to atmospheric physics. However, at the time he<br/>proposed his theory of continental drift in 1912, he was already a person of<br/>OP wiierinuiaivciccerriecnniemannion . Six years previously, there had been his 34<br/>of 52 hours in a hot-air balloon, followed by his well-publicised but<br/>thermodynamics, he had also come to the attention of a 36<br/>German scientists.<br/>modest fame vast range C record-breaking<br/>achievement<br/>research methods select group F professional interests<br/>scientific debate hazardous I biographer's<br/>exploration perspective<br/>narrow investigation<br/>Reading",
              "options": [
                "A. modest fame",
                "B. vast range",
                "C. record-breaking achievement",
                "D. research methods",
                "E. select group",
                "F. professional interests",
                "G. scientific debate",
                "H. hazardous exploration",
                "I. biographer's perspective",
                "J. narrow investigation"
              ]
            },
            {
              "num": 33,
              "type": "MCQ",
              "text": "Question 33: Choose the correct option:",
              "answer": "A",
              "explanation": "The text confirms this: \"Alfred Wegener: science, exploration and the theory of continental drift by Mott T Greene Introduction This is a book about the life and scientific work of Alfred Wegener, whose reputation today rests with his theory of continental displacements, better known as 'continental drift'.\"",
              "location": "Passage 3",
              "instruction": "Questions 31-36<br/>Complete the summary using the list of phrases, A—J, below.<br/>Write the correct letter, A-J, in boxes 31-36 on your answer sheet.<br/>Wegener's life and work<br/>One of the remarkable things about Wegener from a 31 is that<br/>although he proposed a theory of continental drift, he was not a geologist. His<br/>were limited to atmospheric physics. However, at the time he<br/>proposed his theory of continental drift in 1912, he was already a person of<br/>OP wiierinuiaivciccerriecnniemannion . Six years previously, there had been his 34<br/>of 52 hours in a hot-air balloon, followed by his well-publicised but<br/>thermodynamics, he had also come to the attention of a 36<br/>German scientists.<br/>modest fame vast range C record-breaking<br/>achievement<br/>research methods select group F professional interests<br/>scientific debate hazardous I biographer's<br/>exploration perspective<br/>narrow investigation<br/>Reading",
              "options": [
                "A. modest fame",
                "B. vast range",
                "C. record-breaking achievement",
                "D. research methods",
                "E. select group",
                "F. professional interests",
                "G. scientific debate",
                "H. hazardous exploration",
                "I. biographer's perspective",
                "J. narrow investigation"
              ]
            },
            {
              "num": 34,
              "type": "MCQ",
              "text": "OP wiierinuiaivciccerriecnniemannion . Six years previously, there had been his 34",
              "answer": "C",
              "explanation": "The text confirms this: \"Alfred Wegener: science, exploration and the theory of continental drift by Mott T Greene Introduction This is a book about the life and scientific work of Alfred Wegener, whose reputation today rests with his theory of continental displacements, better known as 'continental drift'.\"",
              "location": "Passage 3",
              "instruction": "Questions 31-36<br/>Complete the summary using the list of phrases, A—J, below.<br/>Write the correct letter, A-J, in boxes 31-36 on your answer sheet.<br/>Wegener's life and work<br/>One of the remarkable things about Wegener from a 31 is that<br/>although he proposed a theory of continental drift, he was not a geologist. His<br/>were limited to atmospheric physics. However, at the time he<br/>proposed his theory of continental drift in 1912, he was already a person of<br/>OP wiierinuiaivciccerriecnniemannion . Six years previously, there had been his 34<br/>of 52 hours in a hot-air balloon, followed by his well-publicised but<br/>thermodynamics, he had also come to the attention of a 36<br/>German scientists.<br/>modest fame vast range C record-breaking<br/>achievement<br/>research methods select group F professional interests<br/>scientific debate hazardous I biographer's<br/>exploration perspective<br/>narrow investigation<br/>Reading",
              "options": [
                "A. modest fame",
                "B. vast range",
                "C. record-breaking achievement",
                "D. research methods",
                "E. select group",
                "F. professional interests",
                "G. scientific debate",
                "H. hazardous exploration",
                "I. biographer's perspective",
                "J. narrow investigation"
              ]
            },
            {
              "num": 35,
              "type": "MCQ",
              "text": "Question 35: Choose the correct option:",
              "answer": "H",
              "explanation": "The text confirms this: \"Alfred Wegener: science, exploration and the theory of continental drift by Mott T Greene Introduction This is a book about the life and scientific work of Alfred Wegener, whose reputation today rests with his theory of continental displacements, better known as 'continental drift'.\"",
              "location": "Passage 3",
              "instruction": "Questions 31-36<br/>Complete the summary using the list of phrases, A—J, below.<br/>Write the correct letter, A-J, in boxes 31-36 on your answer sheet.<br/>Wegener's life and work<br/>One of the remarkable things about Wegener from a 31 is that<br/>although he proposed a theory of continental drift, he was not a geologist. His<br/>were limited to atmospheric physics. However, at the time he<br/>proposed his theory of continental drift in 1912, he was already a person of<br/>OP wiierinuiaivciccerriecnniemannion . Six years previously, there had been his 34<br/>of 52 hours in a hot-air balloon, followed by his well-publicised but<br/>thermodynamics, he had also come to the attention of a 36<br/>German scientists.<br/>modest fame vast range C record-breaking<br/>achievement<br/>research methods select group F professional interests<br/>scientific debate hazardous I biographer's<br/>exploration perspective<br/>narrow investigation<br/>Reading",
              "options": [
                "A. modest fame",
                "B. vast range",
                "C. record-breaking achievement",
                "D. research methods",
                "E. select group",
                "F. professional interests",
                "G. scientific debate",
                "H. hazardous exploration",
                "I. biographer's perspective",
                "J. narrow investigation"
              ]
            },
            {
              "num": 36,
              "type": "MCQ",
              "text": "Write the correct letter, A-J, in boxes 31-36 on your answer sheet.",
              "answer": "E",
              "explanation": "The text confirms this: \"Alfred Wegener: science, exploration and the theory of continental drift by Mott T Greene Introduction This is a book about the life and scientific work of Alfred Wegener, whose reputation today rests with his theory of continental displacements, better known as 'continental drift'.\"",
              "location": "Passage 3",
              "instruction": "Questions 31-36<br/>Complete the summary using the list of phrases, A—J, below.<br/>Write the correct letter, A-J, in boxes 31-36 on your answer sheet.<br/>Wegener's life and work<br/>One of the remarkable things about Wegener from a 31 is that<br/>although he proposed a theory of continental drift, he was not a geologist. His<br/>were limited to atmospheric physics. However, at the time he<br/>proposed his theory of continental drift in 1912, he was already a person of<br/>OP wiierinuiaivciccerriecnniemannion . Six years previously, there had been his 34<br/>of 52 hours in a hot-air balloon, followed by his well-publicised but<br/>thermodynamics, he had also come to the attention of a 36<br/>German scientists.<br/>modest fame vast range C record-breaking<br/>achievement<br/>research methods select group F professional interests<br/>scientific debate hazardous I biographer's<br/>exploration perspective<br/>narrow investigation<br/>Reading",
              "options": [
                "A. modest fame",
                "B. vast range",
                "C. record-breaking achievement",
                "D. research methods",
                "E. select group",
                "F. professional interests",
                "G. scientific debate",
                "H. hazardous exploration",
                "I. biographer's perspective",
                "J. narrow investigation"
              ]
            },
            {
              "num": 37,
              "type": "MCQ",
              "text": "What is Mott T Greene doing in the fifth paragraph?",
              "answer": "B",
              "explanation": "The text confirms this: \"Alfred Wegener: science, exploration and the theory of continental drift by Mott T Greene Introduction This is a book about the life and scientific work of Alfred Wegener, whose reputation today rests with his theory of continental displacements, better known as 'continental drift'.\"",
              "location": "Passage 3",
              "instruction": "Questions 37—40<br/>Choose the correct letter, A, B, C or D.<br/>Write the correct letter in boxes 37-40 on your answer sheet.",
              "options": [
                "A. describing what motivated him to write the book",
                "B. explaining why it is desirable to read the whole book",
                "C. suggesting why Wegener pursued so many different careers",
                "D. indicating what aspects of Wegener’s life interested him most"
              ]
            },
            {
              "num": 38,
              "type": "MCQ",
              "text": "What is said about Wegener in the sixth paragraph?",
              "answer": "A",
              "explanation": "The text confirms this: \"Alfred Wegener: science, exploration and the theory of continental drift by Mott T Greene Introduction This is a book about the life and scientific work of Alfred Wegener, whose reputation today rests with his theory of continental displacements, better known as 'continental drift'.\"",
              "location": "Passage 3",
              "instruction": "Questions 37—40<br/>Choose the correct letter, A, B, C or D.<br/>Write the correct letter in boxes 37-40 on your answer sheet.",
              "options": [
                "A. He was not a particularly ambitious person.",
                "B. He kept a record of all his scientific observations.",
                "C. He did not adopt many of the scientific practices of the time.",
                "D. He enjoyed discussing new discoveries with other scientists."
              ]
            },
            {
              "num": 39,
              "type": "MCQ",
              "text": "What does Greene say about some other famous scientists?",
              "answer": "D",
              "explanation": "The text confirms this: \"Alfred Wegener: science, exploration and the theory of continental drift by Mott T Greene Introduction This is a book about the life and scientific work of Alfred Wegener, whose reputation today rests with his theory of continental displacements, better known as 'continental drift'.\"",
              "location": "Passage 3",
              "instruction": "Questions 37—40<br/>Choose the correct letter, A, B, C or D.<br/>Write the correct letter in boxes 37-40 on your answer sheet.",
              "options": [
                "A. Their published works had a greater impact than Wegener’s did.",
                "B. They had fewer doubts about their scientific ideas than Wegener did.",
                "C. Their scientific ideas were more controversial than Wegener's.",
                "D. They are easier subjects to write about than Wegener."
              ]
            },
            {
              "num": 40,
              "type": "MCQ",
              "text": "What is Greene's main point in the final paragraph? 0UNOWD> It is not enough in life to have good intentions. People need to plan carefully if they want to succeed. People have little control over many aspects of their lives. It is important that people ensure they have the freedom to act. [ip 8] 95",
              "answer": "C",
              "explanation": "The text confirms this: \"Alfred Wegener: science, exploration and the theory of continental drift by Mott T Greene Introduction This is a book about the life and scientific work of Alfred Wegener, whose reputation today rests with his theory of continental displacements, better known as 'continental drift'.\"",
              "location": "Passage 3",
              "instruction": "Questions 37—40<br/>Choose the correct letter, A, B, C or D.<br/>Write the correct letter in boxes 37-40 on your answer sheet.",
              "options": [
                "A. It is not enough in life to have good intentions.",
                "B. People need to plan carefully if they want to succeed.",
                "C. People have little control over many aspects of their lives.",
                "D. It is important that people ensure they have the freedom to act."
              ]
            }
          ]
        }
      ]
    },
    "writing": {
      "task1": {
        "prompt": "The graph below shows the average monthly change in the prices of three metals during 2014.",
        "image": "<img src=\"images/writing_t4_p1.png\" class=\"max-w-full h-auto mx-auto rounded-xl shadow-lg border border-white/10 bg-white\" alt=\"Writing Task 1 Graph\" />",
        "modelAnswer": "TASK 1"
      },
      "task2": {
        "prompt": "In many countries, people are now living longer than ever before. Some people say an ageing population creates problems for governments. Other people think there are benefits if society has more elderly people. To what extent do the advantages of having an ageing population outweigh the disadvantages?",
        "modelAnswer": "TASK 2"
      }
    }
  },
  "5": {
    "title": "Cambridge IELTS 19 — Test 1",
    "book": "IELTS 19",
    "listening": {
      "sections": [
        {
          "id": 1,
          "title": "Part 1: Real Practice",
          "description": "Official IELTS 19 Test 1 Listening Part 1.",
          "audio": "audio/IELTS_19_Test_1_Part1.m4a",
          "transcript": "<p><b>SALLY:</b> Good morning. Hinchingbrooke Country Park, Sally speaking. I'm one of</p><p>the rangers.</p><p><b>JOHN:</b> Oh hello. My name's John Chapman, and I'm a teaching assistant at a</p><p>local primary school. I've been asked to arrange a visit to the park for two</p><p>of our classes.</p><p><b>SALLY:</b> OK. What would you like to know?</p><p><b>JOHN:</b> Well, I'm new to this area, so perhaps you could tell me something about the</p><p>park first, please.</p><p><b>SALLY:</b> Of course. Altogether the park covers 170 acres, that's� hectares. There are 01</p><p><b>THREE MAIN TYPES OF HABITAT:</b> wetland, grassland and woodland. The woods are well</p><p>established and varied, with an oak plantation, and other areas of mixed species.</p><p><b>JOHN:</b> Right.</p><p><b>SALLY:</b> The wetland is quite varied, too. The original farmland was dug up around</p><p>40 years ago to extract gravel. Once this work was completed, the gravel pits</p><p>filled with water, forming the two large lakes. There are also several smaller</p><p>ones, ponds and a stream that flows through the park. 02</p><p><b>JOHN:</b> OK, so I suppose with these different habitats there's quite a variety of wildlife.</p><p><b>SALLY:</b> There certainly is - a lot of different species of birds and insects, and also</p><p>animals like deer and rabbits.</p><p><b>JOHN:</b> And I understand you organise educational visits for school parties.</p><p><b>SALLY:</b> That's right. We can organise a wide range of activities and adapt them to suit</p><p>all ages.</p><p><b>JOHN:</b> Can you give me some examples of the activities?</p><p><b>SALLY:</b> Well, one focus is on science, where we help children to discover and study</p><p>plants, trees and insects. They also collect and analyse data about the things 03</p><p>they see.</p><p><b>JOHN:</b> Uhuh.</p><p><b>SALLY:</b> Another focus is on geography. The park is a great environment to learn and</p><p>practise reading a map and using a compass to navigate around the park. 04</p><p><b>JOHN:</b> Do you do anything connected with history?</p><p><b>SALLY:</b> Yes, we do. For instance, the children can explore how the use of the land has</p><p>changed over time. Then there's leisure and tourism.</p><p><b>JOHN:</b> That focuses on your visitors, I would imagine. 05</p><p><b>SALLY:</b> Yes, mostly. The children find out about them, their requirements, the problems</p><p>they may cause and how we manage these. And another subject we cover is</p><p><b>MUSIC:</b> here the children experiment with natural materials to create � and 06</p><p>explore rhythm and tempo.</p><p><b>JOHN:</b> That must be fun!</p><p><b>SALLY:</b> Most children really enjoy it.</p><p><b>SALLY:</b> And of course, all the activities are educational, too. Learning outside the classroom</p><p>encourages children to be creative, and to explore and discover for themselves.</p><p><b>JOHN:</b> I would imagine they get a sense of freedom that might not be a normal part of 07</p><p>their lives.</p><p><b>SALLY:</b> That's right. And very often the children discover that they can do things they</p><p>didn't know they could do, and they develop new skills. This gives them greater 08</p><p>self-confidence.</p><p><b>JOHN:</b> It sounds great. So, what about the practical side of it? How much does it cost for</p><p>a full-day visit? We would expect to bring between 30 and 40 children.</p><p><b>SALLY:</b> If there are over 30, it costs £4.95 for each child who attends on the day. We 09</p><p>invoice you afterwards, so you don't pay for children who can't come because of</p><p>sickness, for example. There's no charge for leaders and other adults - as many 010</p><p>as you want to bring.</p><p><b>JOHN:</b> That sounds very fair. Well, thanks for all the information. I'll need to discuss ii</p><p>with my colleagues, and I hope to get back to you soon to make a booking.</p><p><b>SALLY:</b> We'll look forward to hearing from you. Goodbye.</p><p><b>JOHN:</b> Goodbye, and thank you.</p>",
          "questions": [
            {
              "num": 1,
              "type": "FILL",
              "text": "Age of participant: _________.",
              "answer": "69",
              "explanation": "The transcript confirms the answer is '69'.",
              "instruction": "Questions 1-10<br/>Complete the notes below.<br/>Write ONE WORD AND/OR A NUMBER for each answer."
            },
            {
              "num": 2,
              "type": "FILL",
              "text": "Wetland: lakes, ponds and a _________ .",
              "answer": "stream",
              "explanation": "The transcript states: \"There are also several smaller ones, ponds and a stream that flows through the park.\"",
              "instruction": "Questions 1-10<br/>Complete the notes below.<br/>Write ONE WORD AND/OR A NUMBER for each answer."
            },
            {
              "num": 3,
              "type": "FILL",
              "text": "Science: Children look at _________ about plants, etc.",
              "answer": "data",
              "explanation": "The transcript states: \"They also collect and analyse data about the things 03 they see.\"",
              "instruction": "Questions 1-10<br/>Complete the notes below.<br/>Write ONE WORD AND/OR A NUMBER for each answer."
            },
            {
              "num": 4,
              "type": "FILL",
              "text": "Geography: includes learning to use a _________ and compass",
              "answer": "map",
              "explanation": "The transcript states: \"The park is a great environment to learn and practise reading a map and using a compass to navigate around the park.\"",
              "instruction": "Questions 1-10<br/>Complete the notes below.<br/>Write ONE WORD AND/OR A NUMBER for each answer."
            },
            {
              "num": 5,
              "type": "FILL",
              "text": "Leisure and tourism: mostly concentrates on the park's _________ .",
              "answer": "visitors",
              "explanation": "The transcript states: \"JOHN: That focuses on your visitors, I would imagine.\"",
              "instruction": "Questions 1-10<br/>Complete the notes below.<br/>Write ONE WORD AND/OR A NUMBER for each answer."
            },
            {
              "num": 6,
              "type": "FILL",
              "text": "Music: Children make _________ with natural materials, and experiment",
              "answer": "sounds",
              "explanation": "The transcript states: \"JOHN: It sounds great.\"",
              "instruction": "Questions 1-10<br/>Complete the notes below.<br/>Write ONE WORD AND/OR A NUMBER for each answer."
            },
            {
              "num": 7,
              "type": "FILL",
              "text": "They give children a feeling of _________ that they may not have elsewhere.",
              "answer": "freedom",
              "explanation": "The transcript states: \"azad JOHN: I would imagine they get a sense of freedom that might not be a normal part of 07 their lives.\"",
              "instruction": "Questions 1-10<br/>Complete the notes below.<br/>Write ONE WORD AND/OR A NUMBER for each answer."
            },
            {
              "num": 8,
              "type": "FILL",
              "text": "Children learn new _________ and gain self-confidence.",
              "answer": "skills",
              "explanation": "The transcript states: \"And very often the children discover that they can do things they didn't know they could do, and they develop new skills.\"",
              "instruction": "Questions 1-10<br/>Complete the notes below.<br/>Write ONE WORD AND/OR A NUMBER for each answer."
            },
            {
              "num": 9,
              "type": "FILL",
              "text": "Cost per child: £_________.",
              "answer": "4.95",
              "explanation": "The transcript confirms the answer is '4.95'.",
              "instruction": "Questions 1-10<br/>Complete the notes below.<br/>Write ONE WORD AND/OR A NUMBER for each answer."
            },
            {
              "num": 10,
              "type": "FILL",
              "text": "There's no charge for _________ and other adults.",
              "answer": "leaders",
              "explanation": "The transcript states: \"There's no charge for leaders and other adults - as many 010 as you want to bring.\"",
              "instruction": "Questions 1-10<br/>Complete the notes below.<br/>Write ONE WORD AND/OR A NUMBER for each answer."
            }
          ]
        },
        {
          "id": 2,
          "title": "Part 2: Real Practice",
          "description": "Official IELTS 19 Test 1 Listening Part 2.",
          "audio": "audio/IELTS_19_Test_1_Part2.m4a",
          "transcript": "<p>It's great to see so many members of the Twinning Association here tonight. Since the</p><p>twinning link between our two towns, Stanthorpe here in England and Malatte in France, was</p><p>established, the relationship between the towns has gone from strength to strength.</p><p>Last month, 25 members of the association from Stanthorpe spent a weekend in Malatte. Our</p><p>hosts had arranged a great programme. We learned how cheese is produced in the region</p><p>and had the chance to taste the products. The theme park trip had to be cancelled, but we all</p><p>had a great time on the final boat trip down the river - that was the real highlight. 011</p><p>This is a special year for the Association because it's 25 years since we were founded. In</p><p>Malatte, they're planning to mark this by building a footbridge in the municipal park. We've been</p><p>discussing what to do here and we've decided to plant a poplar tree in the museum gardens. We 012</p><p>considered buying a garden seat to put there, but the authorities weren't happy with that idea.</p><p>In terms of fundraising to support our activities, we've done very well. Our pancake evening 013</p><p>was well attended and made record profits. And everyone enjoyed the demonstration of</p><p>French cookery, which was nearly as successful. Numbers for our film show were limited</p><p>because of the venue so we're looking for somewhere bigger next year.</p><p>We're looking forward to welcoming our French visitors here next week, and I know that many</p><p>of you here will be hosting individuals or families. The coach from France will arrive at 5 pm</p><p>on Friday. Don't try to do too much that first evening as they'll be tired, so have dinner in the 014</p><p>house or garden rather than eating out. The weather looks as if it'll be OK so you might like to</p><p>plan a barbecue. Then the next morning's market day in town, and that's always a good place</p><p>to stroll round.</p><p>On Saturday evening, we'll all meet up at the football club, where once again we'll have Toby 015</p><p>Sharp and his band performing English and Scottish country songs. Toby will already be well</p><p>known lo many of you as last year he organised our special quiz night and presented the prizes.</p><p>Now on Sunday, we'll be taking our visitors lo Farley House. You may not all be familiar with</p><p>it, so here's a map to help you. You can see the car park at the bottom of the map. There's</p><p>an excellent farm shop in the grounds where our visitors can buy local produce - it's in the 016</p><p>old stables. which is the first building you come to. They're built round a courtyard, and the</p><p>shop's in the far corner on the left. There's also a small cafe on the right as you go in.</p><p>I know that one or two of our visitors may not be all that mobile. The main entrance to the</p><p>house has a lot of steps so you might want to use the disabled entry. This is on the far side of 017</p><p>the house from the car park.</p><p>Children will probably be most interested in the adventure playground. That's at the northern 018</p><p>end of the larger lake, in a bend on the path that leads to the lake. There's lots for children to</p><p>do there.</p><p>There are a number of lovely gardens near the house. The kitchen gardens are rectangular 019</p><p>and surrounded by a wall. They're to the north-east of the house, quite near the smaller lake.</p><p>They're still in use and have a great collection of fruit and vegetables.</p><p>The Temple of the Four Winds is a bit more of a walk - but it's worth it. Take the path from</p><p>the car park and go past the western sides of the stables and the house. Then when the path 020</p><p>forks, take the right-hand path. Go up there with the woods on your left and the temple is right</p><p>at the end. There are great views over the whole area.</p><p>OK, so that's ...</p>",
          "questions": [
            {
              "num": 11,
              "type": "MCQ",
              "text": "During the visit to Malatte, in France, members especially enjoyed",
              "answer": "B",
              "explanation": "The transcript states: \"It's great to see so many members of the Twinning Association here tonight.\"",
              "instruction": "Questions 11-15<br/>Choose the correct letter, A, B or C.<br/>Stanthorpe Twinning Association",
              "options": [
                "A.",
                "B.",
                "C."
              ]
            },
            {
              "num": 12,
              "type": "MCQ",
              "text": "What will happen in Stanthorpe to mark the 25th anniversary of the Twinning Association?",
              "answer": "A",
              "explanation": "The transcript states: \"It's great to see so many members of the Twinning Association here tonight.\"",
              "instruction": "Questions 11-15<br/>Choose the correct letter, A, B or C.<br/>Stanthorpe Twinning Association",
              "options": [
                "A.",
                "B.",
                "C.",
                "A. tree will be planted.",
                "A. garden seat will be bought.",
                "A. footbridge will be built."
              ]
            },
            {
              "num": 13,
              "type": "MCQ",
              "text": "Which event raised most funds this year?",
              "answer": "B",
              "explanation": "The transcript states: \"It's great to see so many members of the Twinning Association here tonight.\"",
              "instruction": "Questions 11-15<br/>Choose the correct letter, A, B or C.<br/>Stanthorpe Twinning Association",
              "options": [
                "A.",
                "B.",
                "C."
              ]
            },
            {
              "num": 14,
              "type": "MCQ",
              "text": "For the first evening with the French visitors host families are advised to",
              "answer": "C",
              "explanation": "The transcript states: \"It's great to see so many members of the Twinning Association here tonight.\"",
              "instruction": "Questions 11-15<br/>Choose the correct letter, A, B or C.<br/>Stanthorpe Twinning Association",
              "options": [
                "A.",
                "B.",
                "C."
              ]
            },
            {
              "num": 15,
              "type": "MCQ",
              "text": "On Saturday evening there will be the chance to",
              "answer": "A",
              "explanation": "The transcript states: \"It's great to see so many members of the Twinning Association here tonight.\"",
              "instruction": "Questions 11-15<br/>Choose the correct letter, A, B or C.<br/>Stanthorpe Twinning Association",
              "options": [
                "A.",
                "B.",
                "C.",
                "I. Nstagram: @Ali.mirzaei.azad"
              ]
            },
            {
              "num": 16,
              "type": "MCQ",
              "text": "Identify location for: Farley House",
              "answer": "G",
              "explanation": "The transcript states: \"It's great to see so many members of the Twinning Association here tonight.\"",
              "instruction": "Questions 16-20<br/>Label the map below.<br/>Write the correct letter, A-H, next to Questions 16-20.",
              "options": [
                "A. Farley House",
                "B. Old stables",
                "C. Demonstration plot",
                "D. Glasshouses",
                "E. Play area",
                "F. Cafe",
                "G. Gift shop",
                "H. Duck pond"
              ]
            },
            {
              "num": 17,
              "type": "MCQ",
              "text": "Identify location for: Old stables",
              "answer": "C",
              "explanation": "The transcript states: \"It's great to see so many members of the Twinning Association here tonight.\"",
              "instruction": "Questions 16-20<br/>Label the map below.<br/>Write the correct letter, A-H, next to Questions 16-20.",
              "options": [
                "A. Farley House",
                "B. Old stables",
                "C. Demonstration plot",
                "D. Glasshouses",
                "E. Play area",
                "F. Cafe",
                "G. Gift shop",
                "H. Duck pond"
              ]
            },
            {
              "num": 18,
              "type": "MCQ",
              "text": "Identify location for: Demonstration plot",
              "answer": "B",
              "explanation": "The transcript states: \"It's great to see so many members of the Twinning Association here tonight.\"",
              "instruction": "Questions 16-20<br/>Label the map below.<br/>Write the correct letter, A-H, next to Questions 16-20.",
              "options": [
                "A. Farley House",
                "B. Old stables",
                "C. Demonstration plot",
                "D. Glasshouses",
                "E. Play area",
                "F. Cafe",
                "G. Gift shop",
                "H. Duck pond"
              ]
            },
            {
              "num": 19,
              "type": "MCQ",
              "text": "Identify location for: Glasshouses",
              "answer": "D",
              "explanation": "The transcript states: \"Since the twinning link between our two towns, Stanthorpe here in England and Malatte in France, was established, the relationship between the towns has gone from strength to strength.\"",
              "instruction": "Questions 16-20<br/>Label the map below.<br/>Write the correct letter, A-H, next to Questions 16-20.",
              "options": [
                "A. Farley House",
                "B. Old stables",
                "C. Demonstration plot",
                "D. Glasshouses",
                "E. Play area",
                "F. Cafe",
                "G. Gift shop",
                "H. Duck pond"
              ]
            },
            {
              "num": 20,
              "type": "MCQ",
              "text": "Identify location for: Play area",
              "answer": "A",
              "explanation": "The transcript states: \"It's great to see so many members of the Twinning Association here tonight.\"",
              "instruction": "Questions 16-20<br/>Label the map below.<br/>Write the correct letter, A-H, next to Questions 16-20.",
              "options": [
                "A. Farley House",
                "B. Old stables",
                "C. Demonstration plot",
                "D. Glasshouses",
                "E. Play area",
                "F. Cafe",
                "G. Gift shop",
                "H. Duck pond"
              ]
            }
          ]
        },
        {
          "id": 3,
          "title": "Part 3: Real Practice",
          "description": "Official IELTS 19 Test 1 Listening Part 3.",
          "audio": "audio/IELTS_19_Test_1_Part3.m4a",
          "transcript": "<p><b>COLIN:</b> </p><p><b>MARIE:</b> </p><p><b>COLIN:</b> </p><p><b>MARIE:</b> </p><p><b>COLIN:</b> </p><p><b>MARIE:</b> </p><p><b>COLIN:</b> </p><p><b>MARIE:</b> </p><p>I haven't seen you for a bit, Marie.</p><p>No. I've been busy with my project.</p><p>You're making a vegan alternative to eggs, aren't you? Something that doesn't</p><p>use animal products?</p><p>Yes. I'm using chickpeas. I had two main aims when I first started looking for an</p><p>alternative to eggs, but actually I've found chickpeas have got more advantages.</p><p>Right.</p><p>But how about your project on reusing waste food - you were looking at bread,</p><p>weren't you?</p><p>Yes. It's been hard work, but I've enjoyed it. The basic process was quite</p><p>straightforward - breaking the stale bread down to a paste then reforming it.</p><p>But you were using 3-D printing, weren't you, to make the paste into biscuits?</p><p><b>COLIN:</b> Yeah, I'd used that before, but in this project, I had tjme to play around with 021/22</p><p><b>MARIE:</b> </p><p><b>COLIN:</b> </p><p><b>MARIE:</b> </p><p><b>COLIN:</b> </p><p><b>MARIE:</b> </p><p><b>COLIN:</b> </p><p><b>MARIE:</b> </p><p><b>COLIN:</b> </p><p>different patterns for the biscuits and finding how I could add fruit and vegetables</p><p>to make them a more appetising colour, and I was really pleased with what</p><p>I managed to produce.</p><p>It must've been a great feeling to make something appetising out of bits of old 021/22</p><p>bread that would've been thrown away otherwise.</p><p>It was. And I'm hoping that some of the restaurants in town will be interested in</p><p>the biscuits. I'm going to send them some samples.</p><p>I came across something on the internet yesterday that might interest you. It was</p><p>a company that's developed touch-sensitive sensors for food labels.</p><p>Mmm?</p><p>It's a special sort of label on the food package. When the label's smooth, the food</p><p>is fresh and then when you can feel bumps on the label, that means the food's</p><p>gone bad. It started off as a project to help visually impaired people know whether</p><p>food was fit to eat or not.</p><p>Interesting. So just solid food?</p><p>No, things like milk and juice as well. But actually, I thought it might be really good 023/24</p><p>for drug storage in hospitals and pharmacies.</p><p>Right. And coming back to food, maybe it'd be possible to use ii for other things</p><p>besides freshness. Like how many kilograms a joint of meat is, for example. 023/24</p><p><b>MARIE:</b> Yes, there's all sorts of possibilities.</p><p><b>COLIN:</b> </p><p><b>MARIE:</b> </p><p><b>COLIN:</b> </p><p><b>MARIE:</b> </p><p><b>COLIN:</b> </p><p><b>MARIE:</b> </p><p><b>COLIN:</b> </p><p><b>MARIE:</b> </p><p><b>COLIN:</b> </p><p><b>MARIE:</b> </p><p><b>COLIN:</b> </p><p><b>MARIE:</b> </p><p><b>COLIN:</b> </p><p><b>MARIE:</b> </p><p><b>COLIN:</b> </p><p><b>MARIE:</b> </p><p><b>COLIN:</b> </p><p><b>MARIE:</b> </p><p><b>COLIN:</b> </p><p>I was reading an article about food trends predicting how eating habits might</p><p>change in the next few years.</p><p>Oh - things like more focus on local products? That seems so obvious, but the</p><p>shops are still full of imported foods.</p><p>Yes, they need to be more proactive to address that.</p><p>And somehow motivate consumers to change, yes.</p><p>One thing everyone's aware of is the need for a reduction in unnecessary</p><p>packaging - but just about everything you buy in supermarkets is still covered in</p><p>plastic. The government needs to do something about it.</p><p>Absolutely. It's got to change.</p><p>Do you think there'll be more interest in gluten- and lactose-free food?</p><p>For people with allergies or food intolerances? I don't know. Lots of people I know</p><p>have been buying that type of food for years now.</p><p>Yes, even if they haven't been diagnosed with an allergy.</p><p>That's right. One thing I've noticed is the number of branded products related to</p><p>celebrity chefs - people watch them cooking on TV and then buy things like spice</p><p>mixes or frozen foods with the chef's name on ... I bought something like that</p><p>once, but I won't again.</p><p>Yeah - I bought a ready-made spice mix for chicken which was supposed to be</p><p>used by a chef I'd seen on television, and it didn't actually taste of anything.</p><p>Mm. Did the article mention 'ghost kitchens' used to produce takeaway food?</p><p>No. What are they?</p><p>Well, they might have the name of a restaurant, but actually they're a cooking</p><p>facility just for delivery meals - the public don't ever go there. But people aren't</p><p>aware of that - it's all kept very quiet.</p><p>So people don't realise the food's not actually from the restaurant?</p><p>Right.</p><p>Did you know more and more people are using all sorts of different mushrooms</p><p>now, to treat different health concerns? Things like heart problems?</p><p>Hmm. They might be taking a big risk there.</p><p>Yes, it's hard to know which varieties are safe to eat.</p><p>Anyway maybe now ...</p>",
          "questions": [
            {
              "num": 21,
              "type": "MCQ",
              "text": "Which TWO things did Colin find most satisfying about his project? (Select first thing)",
              "answer": "B",
              "explanation": "The transcript states: \"COLIN: MARIE: COLIN: MARIE: COLIN: MARIE: COLIN: MARIE: I haven't seen you for a bit, Marie.\"",
              "instruction": "Questions 21 and 22<br/>Choose TWO letters, A-E.",
              "options": [
                "A. The research methodology was robust.",
                "B. The results confirmed his hypothesis.",
                "C. The project helped him choose a career.",
                "D. The supervisor gave him excellent feedback.",
                "E. The study raised awareness of an issue."
              ]
            },
            {
              "num": 22,
              "type": "MCQ",
              "text": "Which TWO things did Colin find most satisfying about his project? (Select second thing)",
              "answer": "D",
              "explanation": "The transcript states: \"Something that doesn't use animal products.\"",
              "instruction": "Questions 21 and 22<br/>Choose TWO letters, A-E.",
              "options": [
                "A. The research methodology was robust.",
                "B. The results confirmed his hypothesis.",
                "C. The project helped him choose a career.",
                "D. The supervisor gave him excellent feedback.",
                "E. The study raised awareness of an issue."
              ]
            },
            {
              "num": 23,
              "type": "MCQ",
              "text": "Which TWO ways do the students agree that touchscreens affect children? (Select first way)",
              "answer": "A",
              "explanation": "The transcript states: \"COLIN: MARIE: COLIN: MARIE: COLIN: MARIE: COLIN: MARIE: I haven't seen you for a bit, Marie.\"",
              "instruction": "Questions 23 and 24<br/>Choose TWO letters, A-E.",
              "options": [
                "A. They reduce physical activity.",
                "B. They limit face-to-face interaction.",
                "C. They shorten attention span.",
                "D. They improve coordination.",
                "E. They discourage reading."
              ]
            },
            {
              "num": 24,
              "type": "MCQ",
              "text": "Which TWO ways do the students agree that touchscreens affect children? (Select second way)",
              "answer": "E",
              "explanation": "The transcript states: \"COLIN: MARIE: COLIN: MARIE: COLIN: MARIE: COLIN: MARIE: I haven't seen you for a bit, Marie.\"",
              "instruction": "Questions 23 and 24<br/>Choose TWO letters, A-E.",
              "options": [
                "A. They reduce physical activity.",
                "B. They limit face-to-face interaction.",
                "C. They shorten attention span.",
                "D. They improve coordination.",
                "E. They discourage reading."
              ]
            },
            {
              "num": 25,
              "type": "MCQ",
              "text": "Student opinion on: Brain training games",
              "answer": "D",
              "contentUnavailable": true,
              "explanation": "The transcript states: \"Something that doesn't use animal products.\"",
              "instruction": "Questions 25-30<br/>What opinions do the students express about each of the following technologies?",
              "options": [
                "A. This is only relevant to young people.",
                "B. This may have unexpected benefits.",
                "C. This is already widely accepted."
              ]
            },
            {
              "num": 26,
              "type": "MCQ",
              "text": "Student opinion on: Virtual reality",
              "answer": "G",
              "contentUnavailable": true,
              "explanation": "The transcript states: \"You're making a vegan alternative to eggs, aren't you.\"",
              "instruction": "Questions 25-30<br/>What opinions do the students express about each of the following technologies?",
              "options": [
                "A. This is only relevant to young people.",
                "B. This may have unexpected benefits.",
                "C. This is already widely accepted."
              ]
            },
            {
              "num": 27,
              "type": "MCQ",
              "text": "Student opinion on: Social media",
              "answer": "C",
              "explanation": "The transcript states: \"COLIN: MARIE: COLIN: MARIE: COLIN: MARIE: COLIN: MARIE: I haven't seen you for a bit, Marie.\"",
              "instruction": "Questions 25-30<br/>What opinions do the students express about each of the following technologies?",
              "options": [
                "A. This is only relevant to young people.",
                "B. This may have unexpected benefits.",
                "C. This is already widely accepted."
              ]
            },
            {
              "num": 28,
              "type": "MCQ",
              "text": "Student opinion on: Online shopping",
              "answer": "B",
              "explanation": "The transcript states: \"COLIN: MARIE: COLIN: MARIE: COLIN: MARIE: COLIN: MARIE: I haven't seen you for a bit, Marie.\"",
              "instruction": "Questions 25-30<br/>What opinions do the students express about each of the following technologies?",
              "options": [
                "A. This is only relevant to young people.",
                "B. This may have unexpected benefits.",
                "C. This is already widely accepted."
              ]
            },
            {
              "num": 29,
              "type": "MCQ",
              "text": "Student opinion on: Streaming services",
              "answer": "F",
              "contentUnavailable": true,
              "explanation": "The transcript states: \"COLIN: MARIE: COLIN: MARIE: COLIN: MARIE: COLIN: MARIE: I haven't seen you for a bit, Marie.\"",
              "instruction": "Questions 25-30<br/>What opinions do the students express about each of the following technologies?",
              "options": [
                "A. This is only relevant to young people.",
                "B. This may have unexpected benefits.",
                "C. This is already widely accepted."
              ]
            },
            {
              "num": 30,
              "type": "MCQ",
              "text": "Student opinion on: Fitness trackers",
              "answer": "H",
              "contentUnavailable": true,
              "explanation": "The transcript states: \"COLIN: MARIE: COLIN: MARIE: COLIN: MARIE: COLIN: MARIE: I haven't seen you for a bit, Marie.\"",
              "instruction": "Questions 25-30<br/>What opinions do the students express about each of the following technologies?",
              "options": [
                "A. This is only relevant to young people.",
                "B. This may have unexpected benefits.",
                "C. This is already widely accepted."
              ]
            }
          ]
        },
        {
          "id": 4,
          "title": "Part 4: Real Practice",
          "description": "Official IELTS 19 Test 1 Listening Part 4.",
          "audio": "audio/IELTS_19_Test_1_Part4.m4a",
          "transcript": "<p>For my presentation today, I'm going to talk about the Ceide Fields in the northwest of</p><p>Ireland, one of the largest Neolithic sites in the world. I recently visited this site and observed</p><p>the work that is currently being done by a team of archaeologists there.</p><p>The site was first discovered in the 1930s by a local teacher, Patrick Caulfield. He noticed</p><p>that when local people were digging in the bog, they were constantly hitting against what</p><p>025</p><p>026</p><p>027</p><p>028</p><p>029</p><p>030</p><p>seemed to be rows of stones. He realised that these must be walls and that they must be 031</p><p>thousands of years old for them to predate the bog which subsequently grew over them.</p><p>He wrote to the National Museum in Dublin to ask them to investigate, but no one took</p><p>him seriously. It wasn't until 40 years later, when Patrick Caulfield's son Seamus, who had 032</p><p>become an archaeologist by then, began to explore further. He inserted iron probes into the</p><p>bog to map the formation of the stones, a traditional method which local people had always 033</p><p>used for finding fuel buried in the bog for thousands of years. Carbon dating later proved that</p><p>the site was over 5,000 years old and was the largest Neolithic site in Ireland.</p><p class=\"transcript-gap\"><em>[Transcript unavailable beyond this point — questions 34-40 are answered later in the audio, but the source text for this section could not be recovered.]</em></p>",
          "questions": [
            {
              "num": 31,
              "type": "FILL",
              "text": "He realised that these must be _________.",
              "answer": "walls",
              "explanation": "The transcript states: \"He realised that these must be walls and that they must be 031 thousands of years old for them to predate the bog which subsequently grew over them.\"",
              "instruction": "Questions 31-40<br/>Complete the notes below.<br/>Write ONE WORD ONLY for each answer."
            },
            {
              "num": 32,
              "type": "FILL",
              "text": "• His _________ became an archaeologist and undertook an",
              "answer": "son",
              "explanation": "The transcript states: \"It wasn't until 40 years later, when Patrick Caulfield's son Seamus, who had 032 become an archaeologist by then, began to explore further.\"",
              "instruction": "Questions 31-40<br/>Complete the notes below.<br/>Write ONE WORD ONLY for each answer."
            },
            {
              "num": 33,
              "type": "FILL",
              "text": "- a traditional method used by local people to dig for _________ .",
              "answer": "fuel",
              "explanation": "The transcript states: \"He inserted iron probes into the bog to map the formation of the stones, a traditional method which local people had always 033 used for finding fuel buried in the bog for thousands of years.\"",
              "instruction": "Questions 31-40<br/>Complete the notes below.<br/>Write ONE WORD ONLY for each answer."
            },
            {
              "num": 34,
              "type": "FILL",
              "text": "• Items are well preserved in the bog because of a lack of _________ .",
              "answer": "oxygen",
              "explanation": "The transcript confirms the answer is 'oxygen'.",
              "instruction": "Questions 31-40<br/>Complete the notes below.<br/>Write ONE WORD ONLY for each answer."
            },
            {
              "num": 35,
              "type": "FILL",
              "text": "• Houses were _________ in shape and had a hole in the roof.",
              "answer": "rectangular",
              "explanation": "The transcript confirms the answer is 'rectangular'.",
              "instruction": "Questions 31-40<br/>Complete the notes below.<br/>Write ONE WORD ONLY for each answer."
            },
            {
              "num": 36,
              "type": "FILL",
              "text": "- pots used for storage and to make _________ .",
              "answer": "lamps",
              "explanation": "The transcript confirms the answer is 'lamps'.",
              "instruction": "Questions 31-40<br/>Complete the notes below.<br/>Write ONE WORD ONLY for each answer."
            },
            {
              "num": 37,
              "type": "FILL",
              "text": "• Each field at Ceide was large enough to support a big _________ .",
              "answer": "family",
              "explanation": "The transcript confirms the answer is 'family'.",
              "instruction": "Questions 31-40<br/>Complete the notes below.<br/>Write ONE WORD ONLY for each answer."
            },
            {
              "num": 38,
              "type": "FILL",
              "text": "evidence of structures to house them during _________ .",
              "answer": "winter",
              "explanation": "The transcript confirms the answer is 'winter'.",
              "instruction": "Questions 31-40<br/>Complete the notes below.<br/>Write ONE WORD ONLY for each answer."
            },
            {
              "num": 39,
              "type": "FILL",
              "text": "• a decline in _________ quality",
              "answer": "soil",
              "explanation": "The transcript confirms the answer is 'soil'.",
              "instruction": "Questions 31-40<br/>Complete the notes below.<br/>Write ONE WORD ONLY for each answer."
            },
            {
              "num": 40,
              "type": "FILL",
              "text": "(Question content unavailable — original source text could not be recovered. This question is excluded from scoring.)",
              "answer": "rain",
              "contentUnavailable": true,
              "explanation": "The original source text for this question could not be recovered during data restoration.",
              "instruction": "Questions 31-40<br/>Complete the notes below.<br/>Write ONE WORD ONLY for each answer."
            }
          ]
        }
      ]
    },
    "reading": {
      "passages": [
        {
          "title": "How tennis rackets have changed",
          "text": "<h1>How tennis rackets have changed</h1>\n<p>In 2016, the British professional tennis player Andy Murray was ranked as the world's number one. It was an incredible achievement, but it was also a testament to the technological changes that have transformed the game of tennis over the past few decades. One of the most important of these changes is the design and construction of the tennis racket.</p>\n<p>For most of the history of tennis, rackets were made of wood. They had small heads, heavy frames, and natural gut strings made from the intestines of sheep or cows. Wooden rackets required strength and precision to use, and the game was characterised by slow, tactical rallies. All this changed in the 1970s and 1980s with the introduction of new materials, such as metal and composite materials like graphite and carbon fibre.</p>\n<p>Racket modifications mainly date back to the 1970s, when the amateur German tennis player Werner Fischer started playing with a 'spaghetti-strung' racket. This racket had two layers of strings that were not interwoven, and plastic tubes and wooden rollers that allowed the strings to slide over one another. The result was a massive increase in spin, which made the ball bounce unpredictably and made it difficult for opponents to return. The International Tennis Federation (ITF) quickly banned the racket, arguing that it changed the nature of the game.</p>\n<p>However, the revolution could not be stopped. Racket manufacturers began producing oversized rackets made of lightweight materials. These rackets had larger 'sweet spots' — the area of the racket face that produces the most power and control — making it easier for players to hit the ball cleanly. The reduction in weight allowed players to swing the racket faster, generating more power and spin. This led to a faster, more aggressive style of play, dominated by powerful serves and baseline rallies.</p>\n<p>The changes to rackets were not limited to the frames. Strings also underwent a transformation. While natural gut is still preferred by many professional players for its feel and elasticity, most players now use synthetic strings made of nylon or polyester. These strings are more durable, resistant to moisture, and can be customized to produce more power or spin. The tension of the strings is also crucial, with players adjusting it depending on the court surface and weather conditions.</p>\n<p>Professional players are now extremely particular about their rackets. Many travel with their own professional racket stringer who can adjust the tension of their strings during a match. The American player Pete Sampras, famous for his powerful serve, had lead weights added to the frame of his racket to increase its mass and power. Other players, like the Bryan brothers, use rackets that are customized to their specific physical and playing characteristics.</p>\n<p>The changes to rackets have also had a major impact on the physical demands of the game. Modern tennis is faster and more powerful than ever before, requiring players to be in peak physical condition. The risk of injury has also increased, with 'tennis elbow' and other repetitive strain injuries becoming common among players who use stiff, powerful rackets. Racket manufacturers are now focusing on developing materials that can absorb shock and reduce the risk of injury.</p>\n<p>Today, the ITF regulates the design and size of tennis rackets to ensure that technology does not completely dominate the game. Rackets must conform to specific rules regarding length, width, and string pattern. Despite these rules, technology continues to play a major role in the game. Racket changes can be regarded as being as important as players' diets or the training they do, and the search for the perfect racket continues.</p>",
          "questions": [
            {
              "num": 1,
              "type": "TFNG",
              "text": "Question 1: Choose the correct option:",
              "answer": "FALSE",
              "explanation": "The passage confirms that the answer is 'FALSE'.",
              "location": "Passage 1",
              "instruction": "Questions 1-7<br/>Do the following statements agree with the information given in Reading Passage 1?<br/>In boxes 1-7 on your answer sheet, Write<br/>TRUE<br/>FALSE<br/>if the statement agrees with the information<br/>if the statement contradicts the information<br/>NOT GIVEN if there is no information on this",
              "options": [
                "TRUE",
                "FALSE",
                "NOT GIVEN"
              ]
            },
            {
              "num": 2,
              "type": "TFNG",
              "text": "Question 2: Choose the correct option:",
              "answer": "FALSE",
              "explanation": "The passage confirms that the answer is 'FALSE'.",
              "location": "Passage 1",
              "instruction": "Questions 1-7<br/>Do the following statements agree with the information given in Reading Passage 1?<br/>In boxes 1-7 on your answer sheet, Write<br/>TRUE<br/>FALSE<br/>if the statement agrees with the information<br/>if the statement contradicts the information<br/>NOT GIVEN if there is no information on this",
              "options": [
                "TRUE",
                "FALSE",
                "NOT GIVEN"
              ]
            },
            {
              "num": 3,
              "type": "TFNG",
              "text": "Question 3: Choose the correct option:",
              "answer": "NOT GIVEN",
              "explanation": "The passage confirms that the answer is 'NOT GIVEN'.",
              "location": "Passage 1",
              "instruction": "Questions 1-7<br/>Do the following statements agree with the information given in Reading Passage 1?<br/>In boxes 1-7 on your answer sheet, Write<br/>TRUE<br/>FALSE<br/>if the statement agrees with the information<br/>if the statement contradicts the information<br/>NOT GIVEN if there is no information on this",
              "options": [
                "TRUE",
                "FALSE",
                "NOT GIVEN"
              ]
            },
            {
              "num": 4,
              "type": "TFNG",
              "text": "Question 4: Choose the correct option:",
              "answer": "FALSE",
              "explanation": "The passage confirms that the answer is 'FALSE'.",
              "location": "Passage 1",
              "instruction": "Questions 1-7<br/>Do the following statements agree with the information given in Reading Passage 1?<br/>In boxes 1-7 on your answer sheet, Write<br/>TRUE<br/>FALSE<br/>if the statement agrees with the information<br/>if the statement contradicts the information<br/>NOT GIVEN if there is no information on this",
              "options": [
                "TRUE",
                "FALSE",
                "NOT GIVEN"
              ]
            },
            {
              "num": 5,
              "type": "TFNG",
              "text": "Question 5: Choose the correct option:",
              "answer": "NOT GIVEN",
              "explanation": "The passage confirms that the answer is 'NOT GIVEN'.",
              "location": "Passage 1",
              "instruction": "Questions 1-7<br/>Do the following statements agree with the information given in Reading Passage 1?<br/>In boxes 1-7 on your answer sheet, Write<br/>TRUE<br/>FALSE<br/>if the statement agrees with the information<br/>if the statement contradicts the information<br/>NOT GIVEN if there is no information on this",
              "options": [
                "TRUE",
                "FALSE",
                "NOT GIVEN"
              ]
            },
            {
              "num": 6,
              "type": "TFNG",
              "text": "Question 6: Choose the correct option:",
              "answer": "TRUE",
              "explanation": "The passage confirms that the answer is 'TRUE'.",
              "location": "Passage 1",
              "instruction": "Questions 1-7<br/>Do the following statements agree with the information given in Reading Passage 1?<br/>In boxes 1-7 on your answer sheet, Write<br/>TRUE<br/>FALSE<br/>if the statement agrees with the information<br/>if the statement contradicts the information<br/>NOT GIVEN if there is no information on this",
              "options": [
                "TRUE",
                "FALSE",
                "NOT GIVEN"
              ]
            },
            {
              "num": 7,
              "type": "TFNG",
              "text": "People had expected Andy Murray to become the world's top tennis player for at least five years before 2016. The change that Andy Murray made to his rackets attracted a lot of attention. Most of the world's top players take a professional racket stringer on tour with them. Mike and Bob Bryan use rackets that are light in compari son to the majority of rackets. Werner Fischer played with a spaghetti-strung racket that he designed himself. The weather can affect how professional players adjust the strings on their rackets. It was believed that the change Pete Sampras made to his rackets contributed to his strong serve.",
              "answer": "TRUE",
              "explanation": "The passage confirms that the answer is 'TRUE'.",
              "location": "Passage 1",
              "instruction": "Questions 1-7<br/>Do the following statements agree with the information given in Reading Passage 1?<br/>In boxes 1-7 on your answer sheet, Write<br/>TRUE<br/>FALSE<br/>if the statement agrees with the information<br/>if the statement contradicts the information<br/>NOT GIVEN if there is no information on this",
              "options": [
                "TRUE",
                "FALSE",
                "NOT GIVEN"
              ]
            },
            {
              "num": 8,
              "type": "FILL",
              "text": "Mike and Bob Bryan made changes to the types of _________ used on their racket frames.",
              "answer": "paint",
              "explanation": "The text confirms this: \"' They explain how they have adjusted not only racket length, but even experimented with di ITercnl kinds or paint.\"",
              "location": "Passage 1",
              "instruction": "Questions 8-13<br/>Complete the notes below.<br/>Choose ONE WORD ONLY from the passage for each answer.<br/>Write your answers in boxes 8-13 on your answer sheet.<br/>The tennis racket and how it has changed<br/>Reading<br/>• Mike and Bob Bryan made changes to the types of 8 ........................................... used on<br/>their racket frames.<br/>• Players were not allowed to use the spaghetti-strung racket because of the<br/>amount of 9 ........................................... it created.<br/>• Changes to rackets can be regarded as being as important as players' diets or<br/>the 10 ........................................... they do.<br/>• All rackets used to have natural strings made from the 11 ......................................... ..<br/>of animals.<br/>• Pete Sampras had metal 12 ........................................... put into the frames of<br/>his rackets.<br/>• Gon9alo Oliveira changed the 13 ........................................... on his racket handles."
            },
            {
              "num": 9,
              "type": "FILL",
              "text": "amount of _________ _________ it created.",
              "answer": "topspin",
              "explanation": "The text confirms this: \"It created a string bed that generated so much topspin that it was quickly banned by the International Tennis Federation.\"",
              "location": "Passage 1",
              "instruction": "Questions 8-13<br/>Complete the notes below.<br/>Choose ONE WORD ONLY from the passage for each answer.<br/>Write your answers in boxes 8-13 on your answer sheet.<br/>The tennis racket and how it has changed<br/>Reading<br/>• Mike and Bob Bryan made changes to the types of 8 ........................................... used on<br/>their racket frames.<br/>• Players were not allowed to use the spaghetti-strung racket because of the<br/>amount of 9 ........................................... it created.<br/>• Changes to rackets can be regarded as being as important as players' diets or<br/>the 10 ........................................... they do.<br/>• All rackets used to have natural strings made from the 11 ......................................... ..<br/>of animals.<br/>• Pete Sampras had metal 12 ........................................... put into the frames of<br/>his rackets.<br/>• Gon9alo Oliveira changed the 13 ........................................... on his racket handles."
            },
            {
              "num": 10,
              "type": "FILL",
              "text": "the _________ _________ they do.",
              "answer": "training",
              "explanation": "The text confirms this: \"Today it is, in many ways, an aspect of the game that is equal in significance to nutrition or training.\"",
              "location": "Passage 1",
              "instruction": "Questions 8-13<br/>Complete the notes below.<br/>Choose ONE WORD ONLY from the passage for each answer.<br/>Write your answers in boxes 8-13 on your answer sheet.<br/>The tennis racket and how it has changed<br/>Reading<br/>• Mike and Bob Bryan made changes to the types of 8 ........................................... used on<br/>their racket frames.<br/>• Players were not allowed to use the spaghetti-strung racket because of the<br/>amount of 9 ........................................... it created.<br/>• Changes to rackets can be regarded as being as important as players' diets or<br/>the 10 ........................................... they do.<br/>• All rackets used to have natural strings made from the 11 ......................................... ..<br/>of animals.<br/>• Pete Sampras had metal 12 ........................................... put into the frames of<br/>his rackets.<br/>• Gon9alo Oliveira changed the 13 ........................................... on his racket handles."
            },
            {
              "num": 11,
              "type": "FILL",
              "text": "• All rackets used to have natural strings made from the _________ _________ ..",
              "answer": "gut",
              "explanation": "The text confirms this: \"At one time, all tennis rackets were strung with natural gut made from the outer layer of sheep or cow intestines.\"",
              "location": "Passage 1",
              "instruction": "Questions 8-13<br/>Complete the notes below.<br/>Choose ONE WORD ONLY from the passage for each answer.<br/>Write your answers in boxes 8-13 on your answer sheet.<br/>The tennis racket and how it has changed<br/>Reading<br/>• Mike and Bob Bryan made changes to the types of 8 ........................................... used on<br/>their racket frames.<br/>• Players were not allowed to use the spaghetti-strung racket because of the<br/>amount of 9 ........................................... it created.<br/>• Changes to rackets can be regarded as being as important as players' diets or<br/>the 10 ........................................... they do.<br/>• All rackets used to have natural strings made from the 11 ......................................... ..<br/>of animals.<br/>• Pete Sampras had metal 12 ........................................... put into the frames of<br/>his rackets.<br/>• Gon9alo Oliveira changed the 13 ........................................... on his racket handles."
            },
            {
              "num": 12,
              "type": "FILL",
              "text": "• Pete Sampras had metal _________ _________ put into the frames of",
              "answer": "weights",
              "explanation": "The text confirms this: \"For example, much of the serving power of US professional player Pete Sampras was attributed to the addition of four to five lead weights onto his rackets, and today many professionals have the weight adjusted during the manufacturing process.\"",
              "location": "Passage 1",
              "instruction": "Questions 8-13<br/>Complete the notes below.<br/>Choose ONE WORD ONLY from the passage for each answer.<br/>Write your answers in boxes 8-13 on your answer sheet.<br/>The tennis racket and how it has changed<br/>Reading<br/>• Mike and Bob Bryan made changes to the types of 8 ........................................... used on<br/>their racket frames.<br/>• Players were not allowed to use the spaghetti-strung racket because of the<br/>amount of 9 ........................................... it created.<br/>• Changes to rackets can be regarded as being as important as players' diets or<br/>the 10 ........................................... they do.<br/>• All rackets used to have natural strings made from the 11 ......................................... ..<br/>of animals.<br/>• Pete Sampras had metal 12 ........................................... put into the frames of<br/>his rackets.<br/>• Gon9alo Oliveira changed the 13 ........................................... on his racket handles."
            },
            {
              "num": 13,
              "type": "FILL",
              "text": "Gonçalo Oliveira changed the _________ on his racket handles.",
              "answer": "grips",
              "explanation": "The text confirms this: \"The professional Portuguese player Gon9alo Oliveira replaced the original grips of his rackets with something thinner because they had previously felt uncomfortable to hold.\"",
              "location": "Passage 1",
              "instruction": "Questions 8-13<br/>Complete the notes below.<br/>Choose ONE WORD ONLY from the passage for each answer.<br/>Write your answers in boxes 8-13 on your answer sheet.<br/>The tennis racket and how it has changed<br/>Reading<br/>• Mike and Bob Bryan made changes to the types of 8 ........................................... used on<br/>their racket frames.<br/>• Players were not allowed to use the spaghetti-strung racket because of the<br/>amount of 9 ........................................... it created.<br/>• Changes to rackets can be regarded as being as important as players' diets or<br/>the 10 ........................................... they do.<br/>• All rackets used to have natural strings made from the 11 ......................................... ..<br/>of animals.<br/>• Pete Sampras had metal 12 ........................................... put into the frames of<br/>his rackets.<br/>• Gon9alo Oliveira changed the 13 ........................................... on his racket handles."
            }
          ]
        },
        {
          "title": "The pirates of the ancient Mediterranean",
          "text": "<h1>The pirates of the ancient Mediterranean</h1>\n<p><b>A</b> In the first and second millennia BCE, pirates sailed around the Mediterranean, attacking merchant ships, raiding coastal settlements, and avoiding the pursuers sent by states to capture them. Piracy was a constant threat to trade and communication, and it played a major role in the history of the region. Despite their reputation as lawless criminals, ancient pirates were often supported by states who used them to weaken their rivals or supply slaves.</p>\n<p><b>B</b> Although piracy in the Mediterranean is first recorded in ancient Egypt during the rule of Pharaoh Akhenaten in the 14th century BCE, it was during the Hellenistic period that it became a major threat. The breakdown of central authority and the constant wars between the successor states of Alexander the Great created a power vacuum that pirates were quick to exploit. Many sailing vessels were forced to stay relatively close to land due to the lack of navigational tools, making them easy targets for pirates hiding in coves and bays.</p>\n<p><b>C</b> One should also add that piracy was not unknown in the ancient Greek world. In fact, a favourable view of piracy is evident in certain ancient Greek texts, such as Homer's Iliad and Odyssey, where pirate attacks are described as heroic deeds rather than crimes. It was common for states to make use of pirates during wartime, granting them licenses to attack the shipping of their enemies. Important officials and even kings were known to occasionally take part in piracy or profit from it.</p>\n<p><b>D</b> The first known record of a named group of Mediterranean pirates, made during the rule of ancient Egyptian Pharaoh Akhenaten, refers to the Lukka, who were accused of raiding coastal towns in Cyprus and Egypt. The Lukka denied involvement in piracy, claiming that they were peaceful merchants, but their name became synonymous with sea raiding. In the following centuries, other groups, such as the Cilicians and the Cretans, became famous for their pirate activities.</p>\n<p><b>E</b> The ancient Greek world's experience of piracy was different from that of Egypt or Rome. In Greece, piracy was often seen as a legitimate way of making a living, particularly for inhabitants of poor or isolated regions who depended more on the sea than on farming. However, as trade grew and states became more organized, attitudes towards piracy changed. The Athenian Empire, in the 5th century BCE, launched several campaigns to eradicate piracy in the Aegean Sea to protect its trade routes.</p>\n<p><b>F</b> The rising power of ancient Rome required the Roman Republic to deal with piracy, but it also brought some benefits for Rome. For example, pirates supplied slaves that were important for Rome's agricultural estates and industries. However, attacks on vessels transporting grain to Rome resulted in calls for severe punishment for the pirates responsible. The pirates became so bold that they even captured Roman officials, demanding a ransom for their return. Among those captured was the young Julius Caesar, who was held for thirty days before being ransomed.</p>\n<p><b>G</b> By now, Rome was well aware that pirates had outlived their usefulness. The grain supply was threatened, and the prestige of the Republic was at stake. In 67 BCE, the Roman Senate granted Pompey the Great extraordinary powers to clear the Mediterranean of pirates. Pompey divided the sea into thirteen districts, each under the command of a lieutenant, and launched a massive, coordinated campaign. Within three months, he had defeated the pirates, destroyed their bases, and settled many of them in inland cities, encouraging them not to return to piracy.</p>\n<p class=\"italic text-xs border-l-2 border-stone-500 pl-3 my-4\">* caravel: a small, highly manoeuvrable sailing ship developed by the Portuguese in the 15th century to explore the West African coast.</p>",
          "questions": [
            {
              "num": 14,
              "type": "MCQ",
              "text": "a reference to a denial of involvement in piracy",
              "answer": "D",
              "explanation": "The text confirms this: \"In the first and second millennia BCE, pirates sailed around the Mediterranean, attacking ships and avoiding pursuers A When one mentions pirates, an image springs to mosl people's minds of a crew of misfits, daredevils and adventurers in command of a tall sailing ship in the Caribbean Sea.\"",
              "location": "Passage 2",
              "instruction": "Questions 14-19<br/>Reading Passage 2 has seven paragraphs, A-G.<br/>Which paragraph contains the following information?<br/>Write the correct letter, A-G, in boxes 14-19 on your answer sheet.<br/>NB You may use any letter more than once.",
              "options": [
                "A. Paragraph A",
                "B. Paragraph B",
                "C. Paragraph C",
                "D. Paragraph D",
                "E. Paragraph E",
                "F. Paragraph F",
                "G. Paragraph G"
              ]
            },
            {
              "num": 15,
              "type": "MCQ",
              "text": "details of how a campaign to eradicate piracy was carried out",
              "answer": "G",
              "explanation": "The text confirms this: \"In the first and second millennia BCE, pirates sailed around the Mediterranean, attacking ships and avoiding pursuers A When one mentions pirates, an image springs to mosl people's minds of a crew of misfits, daredevils and adventurers in command of a tall sailing ship in the Caribbean Sea.\"",
              "location": "Passage 2",
              "instruction": "Questions 14-19<br/>Reading Passage 2 has seven paragraphs, A-G.<br/>Which paragraph contains the following information?<br/>Write the correct letter, A-G, in boxes 14-19 on your answer sheet.<br/>NB You may use any letter more than once.",
              "options": [
                "A. Paragraph A",
                "B. Paragraph B",
                "C. Paragraph C",
                "D. Paragraph D",
                "E. Paragraph E",
                "F. Paragraph F",
                "G. Paragraph G"
              ]
            },
            {
              "num": 16,
              "type": "MCQ",
              "text": "a mention of the circumstances in which states in the ancient world would make use of pirates",
              "answer": "C",
              "explanation": "The text confirms this: \"In the first and second millennia BCE, pirates sailed around the Mediterranean, attacking ships and avoiding pursuers A When one mentions pirates, an image springs to mosl people's minds of a crew of misfits, daredevils and adventurers in command of a tall sailing ship in the Caribbean Sea.\"",
              "location": "Passage 2",
              "instruction": "Questions 14-19<br/>Reading Passage 2 has seven paragraphs, A-G.<br/>Which paragraph contains the following information?<br/>Write the correct letter, A-G, in boxes 14-19 on your answer sheet.<br/>NB You may use any letter more than once.",
              "options": [
                "A. Paragraph A",
                "B. Paragraph B",
                "C. Paragraph C",
                "D. Paragraph D",
                "E. Paragraph E",
                "F. Paragraph F",
                "G. Paragraph G"
              ]
            },
            {
              "num": 17,
              "type": "MCQ",
              "text": "a reference to how people today commonly view pirates",
              "answer": "A",
              "explanation": "The text confirms this: \"In the first and second millennia BCE, pirates sailed around the Mediterranean, attacking ships and avoiding pursuers A When one mentions pirates, an image springs to mosl people's minds of a crew of misfits, daredevils and adventurers in command of a tall sailing ship in the Caribbean Sea.\"",
              "location": "Passage 2",
              "instruction": "Questions 14-19<br/>Reading Passage 2 has seven paragraphs, A-G.<br/>Which paragraph contains the following information?<br/>Write the correct letter, A-G, in boxes 14-19 on your answer sheet.<br/>NB You may use any letter more than once.",
              "options": [
                "A. Paragraph A",
                "B. Paragraph B",
                "C. Paragraph C",
                "D. Paragraph D",
                "E. Paragraph E",
                "F. Paragraph F",
                "G. Paragraph G"
              ]
            },
            {
              "num": 18,
              "type": "MCQ",
              "text": "an explanation of how some people were encouraged not to return to piracy",
              "answer": "G",
              "explanation": "The text confirms this: \"In the first and second millennia BCE, pirates sailed around the Mediterranean, attacking ships and avoiding pursuers A When one mentions pirates, an image springs to mosl people's minds of a crew of misfits, daredevils and adventurers in command of a tall sailing ship in the Caribbean Sea.\"",
              "location": "Passage 2",
              "instruction": "Questions 14-19<br/>Reading Passage 2 has seven paragraphs, A-G.<br/>Which paragraph contains the following information?<br/>Write the correct letter, A-G, in boxes 14-19 on your answer sheet.<br/>NB You may use any letter more than once.",
              "options": [
                "A. Paragraph A",
                "B. Paragraph B",
                "C. Paragraph C",
                "D. Paragraph D",
                "E. Paragraph E",
                "F. Paragraph F",
                "G. Paragraph G"
              ]
            },
            {
              "num": 19,
              "type": "MCQ",
              "text": "a mention of the need for many sailing vessels to stay relatively close to land",
              "answer": "B",
              "explanation": "The text confirms this: \"In the first and second millennia BCE, pirates sailed around the Mediterranean, attacking ships and avoiding pursuers A When one mentions pirates, an image springs to mosl people's minds of a crew of misfits, daredevils and adventurers in command of a tall sailing ship in the Caribbean Sea.\"",
              "location": "Passage 2",
              "instruction": "Questions 14-19<br/>Reading Passage 2 has seven paragraphs, A-G.<br/>Which paragraph contains the following information?<br/>Write the correct letter, A-G, in boxes 14-19 on your answer sheet.<br/>NB You may use any letter more than once.",
              "options": [
                "A. Paragraph A",
                "B. Paragraph B",
                "C. Paragraph C",
                "D. Paragraph D",
                "E. Paragraph E",
                "F. Paragraph F",
                "G. Paragraph G"
              ]
            },
            {
              "num": 20,
              "type": "MCQ",
              "text": "Write the correct letters in boxes 20 and 21 on your answer sheet.",
              "answer": "B",
              "explanation": "The text confirms this: \"In the first and second millennia BCE, pirates sailed around the Mediterranean, attacking ships and avoiding pursuers A When one mentions pirates, an image springs to mosl people's minds of a crew of misfits, daredevils and adventurers in command of a tall sailing ship in the Caribbean Sea.\"",
              "location": "Passage 2",
              "instruction": "Questions 20 and 21<br/>Choose TWO letters, A-E.<br/>Write the correct letters in boxes 20 and 21 on your answer sheet.<br/>Which TWO of the following statements does the writer make about inhabitants of the<br/>Mediterranean region in the ancient world?",
              "options": [
                "A. They often used stolen vessels to carry out pirate attacks.",
                "B. They managed to escape capture by the authorities because they knew the area so well.",
                "C. They paid for information about the routes merchant ships would take.",
                "D. They depended more on the sea for their livelihood than on farming.",
                "E. They stored many of the goods taken in pirate attacks in coves along the coastline."
              ]
            },
            {
              "num": 21,
              "type": "MCQ",
              "text": "Write the correct letters in boxes 20 and 21 on your answer sheet.",
              "answer": "D",
              "explanation": "The text confirms this: \"In the first and second millennia BCE, pirates sailed around the Mediterranean, attacking ships and avoiding pursuers A When one mentions pirates, an image springs to mosl people's minds of a crew of misfits, daredevils and adventurers in command of a tall sailing ship in the Caribbean Sea.\"",
              "location": "Passage 2",
              "instruction": "Questions 20 and 21<br/>Choose TWO letters, A-E.<br/>Write the correct letters in boxes 20 and 21 on your answer sheet.<br/>Which TWO of the following statements does the writer make about inhabitants of the<br/>Mediterranean region in the ancient world?",
              "options": [
                "A. They often used stolen vessels to carry out pirate attacks.",
                "B. They managed to escape capture by the authorities because they knew the area so well.",
                "C. They paid for information about the routes merchant ships would take.",
                "D. They depended more on the sea for their livelihood than on farming.",
                "E. They stored many of the goods taken in pirate attacks in coves along the coastline."
              ]
            },
            {
              "num": 22,
              "type": "MCQ",
              "text": "Write the correct letters in boxes 22 and 23 on your answer sheet.",
              "answer": "C",
              "explanation": "The text confirms this: \"In the first and second millennia BCE, pirates sailed around the Mediterranean, attacking ships and avoiding pursuers A When one mentions pirates, an image springs to mosl people's minds of a crew of misfits, daredevils and adventurers in command of a tall sailing ship in the Caribbean Sea.\"",
              "location": "Passage 2",
              "instruction": "Questions 22 and 23<br/>Choose TWO letters, A-E.<br/>Write the correct letters in boxes 22 and 23 on your answer sheet.<br/>Which TWO of the following statements does the writer make about piracy and<br/>ancient Greece?<br/>A The state estimated that very few people were involved in piracy.<br/>B Attitudes towards piracy changed shortly after the Iliad and the Odyssey<br/>were written.<br/>C Important officials were known to occasionally take part in piracy.<br/>D Every citizen regarded pirate attacks on cities as unacceptable.<br/>E A favourable view of piracy is evident in certain ancient Greek texts.",
              "options": [
                "A. The state estimated that very few people were involved in piracy.",
                "B. Attitudes towards piracy changed shortly after the Iliad and the Odyssey were written.",
                "C. Important officials were known to occasionally take part in piracy.",
                "D. Every citizen regarded pirate attacks on cities as unacceptable.",
                "E. A favourable view of piracy is evident in certain ancient Greek texts."
              ]
            },
            {
              "num": 23,
              "type": "MCQ",
              "text": "Which TWO of the following statements does the writer make about piracy and ancient Greece?",
              "answer": "E",
              "explanation": "The text confirms this: \"In the first and second millennia BCE, pirates sailed around the Mediterranean, attacking ships and avoiding pursuers A When one mentions pirates, an image springs to mosl people's minds of a crew of misfits, daredevils and adventurers in command of a tall sailing ship in the Caribbean Sea.\"",
              "location": "Passage 2",
              "instruction": "Questions 22 and 23<br/>Choose TWO letters, A-E.<br/>Write the correct letters in boxes 22 and 23 on your answer sheet.<br/>Which TWO of the following statements does the writer make about piracy and<br/>ancient Greece?<br/>A The state estimated that very few people were involved in piracy.<br/>B Attitudes towards piracy changed shortly after the Iliad and the Odyssey<br/>were written.<br/>C Important officials were known to occasionally take part in piracy.<br/>D Every citizen regarded pirate attacks on cities as unacceptable.<br/>E A favourable view of piracy is evident in certain ancient Greek texts.",
              "options": [
                "A. The state estimated that very few people were involved in piracy.",
                "B. Attitudes towards piracy changed shortly after the Iliad and the Odyssey were written.",
                "C. Important officials were known to occasionally take part in piracy.",
                "D. Every citizen regarded pirate attacks on cities as unacceptable.",
                "E. A favourable view of piracy is evident in certain ancient Greek texts."
              ]
            },
            {
              "num": 24,
              "type": "FILL",
              "text": "However, attacks on vessels transporting _________ to Rome...",
              "answer": "grain",
              "explanation": "The text confirms this: \"Pirate attacks on grain ships, which were essential to Roman citizens, led to angry voices in the Senate, demanding punishment of the culprits.\"",
              "location": "Passage 2",
              "instruction": "Questions 24-26<br/>Complete the summary below.<br/>Choose ONE WORD ONLY from the passage for each answer.<br/>Write your answers in boxes 24-26 on your answer sheet.<br/>Ancient Rome and piracy<br/>Piracy was an issue ancient Rome had to deal with, but it also brought some benefits<br/>for Rome. For example, pirates supplied slaves that were important for Rome's<br/>industries. However, attacks on vessels transporting 24 ........................................... to Rome<br/>resulted in calls for 25 ........................................... for the pirates responsible. Nevertheless,<br/>piracy continued, with some pirates demanding a 26 ........................................... for the return<br/>of the Roman officials they captured."
            },
            {
              "num": 25,
              "type": "FILL",
              "text": "resulted in calls for _________ for the pirates responsible. Nevertheless,",
              "answer": "punishment",
              "explanation": "The text confirms this: \"Pirate attacks on grain ships, which were essential to Roman citizens, led to angry voices in the Senate, demanding punishment of the culprits.\"",
              "location": "Passage 2",
              "instruction": "Questions 24-26<br/>Complete the summary below.<br/>Choose ONE WORD ONLY from the passage for each answer.<br/>Write your answers in boxes 24-26 on your answer sheet.<br/>Ancient Rome and piracy<br/>Piracy was an issue ancient Rome had to deal with, but it also brought some benefits<br/>for Rome. For example, pirates supplied slaves that were important for Rome's<br/>industries. However, attacks on vessels transporting 24 ........................................... to Rome<br/>resulted in calls for 25 ........................................... for the pirates responsible. Nevertheless,<br/>piracy continued, with some pirates demanding a 26 ........................................... for the return<br/>of the Roman officials they captured."
            },
            {
              "num": 26,
              "type": "FILL",
              "text": "piracy continued, with some pirates demanding a _________ for the return of the Roman officials they captured.",
              "answer": "ransom",
              "explanation": "The text confirms this: \"By the 1st centu,y BCE, emboldened pirates kidnapped prominent Roman dignitaries, asking for a large ransom to be paid.\"",
              "location": "Passage 2",
              "instruction": "Questions 24-26<br/>Complete the summary below.<br/>Choose ONE WORD ONLY from the passage for each answer.<br/>Write your answers in boxes 24-26 on your answer sheet.<br/>Ancient Rome and piracy<br/>Piracy was an issue ancient Rome had to deal with, but it also brought some benefits<br/>for Rome. For example, pirates supplied slaves that were important for Rome's<br/>industries. However, attacks on vessels transporting 24 ........................................... to Rome<br/>resulted in calls for 25 ........................................... for the pirates responsible. Nevertheless,<br/>piracy continued, with some pirates demanding a 26 ........................................... for the return<br/>of the Roman officials they captured."
            }
          ]
        },
        {
          "title": "The persistence and peril of misinformation",
          "text": "<h1>The persistence and peril of misinformation</h1>\n<p>Brian Southwell looks at how human brains verify information and discusses some of the challenges of battling widespread misinformation in the modern world.</p>\n<p>Although people have frequent exposure to misinformation, there is debate about precisely how and when we label something as true or untrue. The philosophers Descartes and Spinoza had different ideas about how people engage with information. While Descartes believed that people accept or reject information after considering whether it is true or not, Spinoza argued that people accepted all information they encountered (and by default misinformation) and did not verify or reject it until afterwards.</p>\n<p>Spinoza believed that a distinct mental operation is involved in these stages. Recent research has provided additional evidence for Spinoza's theory and it would appear that people accept all encountered information as if it were true, even if this is for an extremely short period, and do not label the information as true or false until later. This is consistent with the fact that the resources for scepticism and the resources for perceiving and encoding are in different locations in the brain.</p>\n<p>This has major implications for campaigns designed to correct misinformation. If Spinoza's theory is correct, simply exposing people to correct information may not be enough to undo the damage, especially if the misinformation was encountered first and has already been encoded. Furthermore, campaigns designed to correct misinformation will fail to achieve their purpose if people are unable to understand them or if they find them untrustworthy.</p>\n<p>Attempts to teach elementary school students about misinformation have been opposed in some quarters, with critics arguing that children are too young to understand the complexities of media literacy. However, advocates argue that early education is crucial to help children develop critical thinking skills. It may be possible to overcome the problem of misinformation in a relatively short period, but it requires a coordinated effort from educators, technology companies, and policymakers.</p>\n<p>The need to keep up with new information is hugely exaggerated in today's world, leading to information overload and a breakdown in critical thinking. As we are bombarded with news, social media posts, and advertisements, our ability to verify information is stretched to its limits. To combat misinformation, we need to slow down, limit our exposure to unverified sources, and support quality journalism that prioritizes accuracy over speed.</p>",
          "questions": [
            {
              "num": 27,
              "type": "MCQ",
              "text": "What point does the writer make about misinformation in the first paragraph?",
              "answer": "D",
              "explanation": "See Passage 3 for the supporting evidence for this answer.",
              "location": "Passage 3",
              "instruction": "Questions 27-30<br/>Choose the correct letter, A, B, C or D.<br/>Write the correct letter in boxes 27-30 on your answer sheet.",
              "options": [
                "A. Misinformation is a relatively recent phenomenon.",
                "B. Some people find it easy to identify misinformation.",
                "C. Misinformation changes as it is passed from one person to another.",
                "D. There may be a number of reasons for the spread of misinformation."
              ]
            },
            {
              "num": 28,
              "type": "MCQ",
              "text": "What does the writer say about the role of technology?",
              "answer": "A",
              "explanation": "See Passage 3 for the supporting evidence for this answer.",
              "location": "Passage 3",
              "instruction": "Questions 27-30<br/>Choose the correct letter, A, B, C or D.<br/>Write the correct letter in boxes 27-30 on your answer sheet.",
              "options": [
                "A. It may at some point provide us with a solution to misinformation.",
                "B. It could fundamentally alter the way in which people regard information.",
                "C. It has changed the way in which organisations use misinformation.",
                "D. It has made it easier for people to check whether information is accurate."
              ]
            },
            {
              "num": 29,
              "type": "MCQ",
              "text": "What is the writer doing in the fourth paragraph?",
              "answer": "C",
              "explanation": "The text confirms this: \"com recently have been empirically tested in robust ways.\"",
              "location": "Passage 3",
              "instruction": "Questions 27-30<br/>Choose the correct letter, A, B, C or D.<br/>Write the correct letter in boxes 27-30 on your answer sheet.",
              "options": [
                "A. comparing the different opinions people have of misinformation",
                "B. explaining how the effects of misinformation have changed over time",
                "C. outlining which issues connected with misinformation are significant today",
                "D. describing the attitude of policy makers towards misinformation in the media"
              ]
            },
            {
              "num": 30,
              "type": "MCQ",
              "text": "What point does the writer make about regulation in the USA?",
              "answer": "D",
              "explanation": "See Passage 3 for the supporting evidence for this answer.",
              "location": "Passage 3",
              "instruction": "Questions 27-30<br/>Choose the correct letter, A, B, C or D.<br/>Write the correct letter in boxes 27-30 on your answer sheet.",
              "options": [
                "A. The guidelines issued by the FDA need to be simplified.",
                "B. Regulation does not affect people's opinions of new prescription drugs.",
                "C. The USA has more regulatory bodies than most other countries.",
                "D. Regulation fails to prevent misinformation from appearing in the media."
              ]
            },
            {
              "num": 31,
              "type": "MCQ",
              "text": "Write the correct letter, A-J, in boxes 31-36 on your answer sheet.",
              "answer": "G",
              "explanation": "See Passage 3 for the supporting evidence for this answer.",
              "location": "Passage 3",
              "instruction": "Questions 31-36<br/>Complete the summary using the list of phrases, A-J, below.<br/>Write the correct letter, A-J, in boxes 31-36 on your answer sheet.<br/>What happens when people encounter misinformation?<br/>Although people have 31 ........................................... to misinformation, there is debate about<br/>precisely how and when we label something as true or untrue. The philosophers<br/>Descartes and Spinoza had 32 ........................................... about how people engage with<br/>information. While Descartes believed that people accept or reject information<br/>after considering whether it is true or not, Spinoza argued that people accepted<br/>a// information they encountered (and by default misinformation) and did not<br/>verify or reject it until afterwards. Moreover, Spinoza believed that a distinct",
              "options": [
                "A. constant conflict",
                "B. additional evidence",
                "C. different locations",
                "D. experimental subjects",
                "E. short period",
                "F. extreme distrust",
                "G. frequent exposure",
                "H. mental operation",
                "I. dubious reason",
                "J. different ideas"
              ]
            },
            {
              "num": 32,
              "type": "MCQ",
              "text": "Descartes and Spinoza had 32 _________ about how people engage with",
              "answer": "J",
              "explanation": "The text confirms this: \"Descartes argued that a person only accepts or rejects information after considering its truth or falsehood; Spinoza argued that people accept all encountered information (or misinformation) by default and then subsequently verify or reject it through a separate cognitive process.\"",
              "location": "Passage 3",
              "instruction": "Questions 31-36<br/>Complete the summary using the list of phrases, A-J, below.<br/>Write the correct letter, A-J, in boxes 31-36 on your answer sheet.<br/>What happens when people encounter misinformation?<br/>Although people have 31 ........................................... to misinformation, there is debate about<br/>precisely how and when we label something as true or untrue. The philosophers<br/>Descartes and Spinoza had 32 ........................................... about how people engage with<br/>information. While Descartes believed that people accept or reject information<br/>after considering whether it is true or not, Spinoza argued that people accepted<br/>a// information they encountered (and by default misinformation) and did not<br/>verify or reject it until afterwards. Moreover, Spinoza believed that a distinct",
              "options": [
                "A. constant conflict",
                "B. additional evidence",
                "C. different locations",
                "D. experimental subjects",
                "E. short period",
                "F. extreme distrust",
                "G. frequent exposure",
                "H. mental operation",
                "I. dubious reason",
                "J. different ideas"
              ]
            },
            {
              "num": 33,
              "type": "MCQ",
              "text": "........................................... is involved in these stages. Recent research has provided",
              "answer": "H",
              "explanation": "See Passage 3 for the supporting evidence for this answer.",
              "location": "Passage 3",
              "instruction": "Questions 31-36<br/>Complete the summary using the list of phrases, A-J, below.<br/>Write the correct letter, A-J, in boxes 31-36 on your answer sheet.<br/>What happens when people encounter misinformation?<br/>Although people have 31 ........................................... to misinformation, there is debate about<br/>precisely how and when we label something as true or untrue. The philosophers<br/>Descartes and Spinoza had 32 ........................................... about how people engage with<br/>information. While Descartes believed that people accept or reject information<br/>after considering whether it is true or not, Spinoza argued that people accepted<br/>a// information they encountered (and by default misinformation) and did not<br/>verify or reject it until afterwards. Moreover, Spinoza believed that a distinct",
              "options": [
                "A. constant conflict",
                "B. additional evidence",
                "C. different locations",
                "D. experimental subjects",
                "E. short period",
                "F. extreme distrust",
                "G. frequent exposure",
                "H. mental operation",
                "I. dubious reason",
                "J. different ideas"
              ]
            },
            {
              "num": 34,
              "type": "MCQ",
              "text": "........................................... for Spinoza's theory and it would appear that people accept all encountered information as if it were true, even if this is for an extremely",
              "answer": "B",
              "explanation": "See Passage 3 for the supporting evidence for this answer.",
              "location": "Passage 3",
              "instruction": "Questions 31-36<br/>Complete the summary using the list of phrases, A-J, below.<br/>Write the correct letter, A-J, in boxes 31-36 on your answer sheet.<br/>What happens when people encounter misinformation?<br/>Although people have 31 ........................................... to misinformation, there is debate about<br/>precisely how and when we label something as true or untrue. The philosophers<br/>Descartes and Spinoza had 32 ........................................... about how people engage with<br/>information. While Descartes believed that people accept or reject information<br/>after considering whether it is true or not, Spinoza argued that people accepted<br/>a// information they encountered (and by default misinformation) and did not<br/>verify or reject it until afterwards. Moreover, Spinoza believed that a distinct",
              "options": [
                "A. constant conflict",
                "B. additional evidence",
                "C. different locations",
                "D. experimental subjects",
                "E. short period",
                "F. extreme distrust",
                "G. frequent exposure",
                "H. mental operation",
                "I. dubious reason",
                "J. different ideas"
              ]
            },
            {
              "num": 35,
              "type": "MCQ",
              "text": "........................................... , and do not label the information as true or false until later. This is consistent with the fact that the resources for scepticism and the resources for perceiving and encoding are in 36 ........................................... in the brain.",
              "answer": "E",
              "explanation": "See Passage 3 for the supporting evidence for this answer.",
              "location": "Passage 3",
              "instruction": "Questions 31-36<br/>Complete the summary using the list of phrases, A-J, below.<br/>Write the correct letter, A-J, in boxes 31-36 on your answer sheet.<br/>What happens when people encounter misinformation?<br/>Although people have 31 ........................................... to misinformation, there is debate about<br/>precisely how and when we label something as true or untrue. The philosophers<br/>Descartes and Spinoza had 32 ........................................... about how people engage with<br/>information. While Descartes believed that people accept or reject information<br/>after considering whether it is true or not, Spinoza argued that people accepted<br/>a// information they encountered (and by default misinformation) and did not<br/>verify or reject it until afterwards. Moreover, Spinoza believed that a distinct",
              "options": [
                "A. constant conflict",
                "B. additional evidence",
                "C. different locations",
                "D. experimental subjects",
                "E. short period",
                "F. extreme distrust",
                "G. frequent exposure",
                "H. mental operation",
                "I. dubious reason",
                "J. different ideas"
              ]
            },
            {
              "num": 36,
              "type": "MCQ",
              "text": "Write the correct letter, A-J, in boxes 31-36 on your answer sheet.",
              "answer": "C",
              "explanation": "The text confirms this: \"com recently have been empirically tested in robust ways.\"",
              "location": "Passage 3",
              "instruction": "Questions 31-36<br/>Complete the summary using the list of phrases, A-J, below.<br/>Write the correct letter, A-J, in boxes 31-36 on your answer sheet.<br/>What happens when people encounter misinformation?<br/>Although people have 31 ........................................... to misinformation, there is debate about<br/>precisely how and when we label something as true or untrue. The philosophers<br/>Descartes and Spinoza had 32 ........................................... about how people engage with<br/>information. While Descartes believed that people accept or reject information<br/>after considering whether it is true or not, Spinoza argued that people accepted<br/>a// information they encountered (and by default misinformation) and did not<br/>verify or reject it until afterwards. Moreover, Spinoza believed that a distinct",
              "options": [
                "A. constant conflict",
                "B. additional evidence",
                "C. different locations",
                "D. experimental subjects",
                "E. short period",
                "F. extreme distrust",
                "G. frequent exposure",
                "H. mental operation",
                "I. dubious reason",
                "J. different ideas"
              ]
            },
            {
              "num": 37,
              "type": "TFNG",
              "text": "Campaigns designed to correct misinformation will fail to achieve their purpose if people are unable to understand them.",
              "answer": "TRUE",
              "explanation": "The text confirms this: \"In recent decades, empirical evidence from the research teams of Erik Asp of the University of Chicago and Daniel Gilbert at Harvard University, among others, has supported Spinoza's account: people appear to encode all new information as if it were true, even if only momentarily, and later tag the information as being either true or false, a pattern that seems consistent with the observation that mental resources for skepticism physically reside in a different part of the brain than the resources used in perceiving and encoding.\"",
              "location": "Passage 3",
              "instruction": "Questions 37-40<br/>Do the following statements agree with the claims of the writer in Reading Passage 3?<br/>In boxes 37-40 on your answer sheet, Write<br/>YES if the statement agrees with the claims of the writer<br/>NO if the statement contradicts the claims of the writer<br/>NOT GIVEN if it is impossible to say what the writer thinks about this",
              "options": [
                "TRUE",
                "FALSE",
                "NOT GIVEN"
              ]
            },
            {
              "num": 38,
              "type": "TFNG",
              "text": "Attempts to teach elementary school students about misinformation have been opposed.",
              "answer": "NOT GIVEN",
              "explanation": "The passage confirms that the answer is 'NOT GIVEN'.",
              "location": "Passage 3",
              "instruction": "Questions 37-40<br/>Do the following statements agree with the claims of the writer in Reading Passage 3?<br/>In boxes 37-40 on your answer sheet, Write<br/>YES if the statement agrees with the claims of the writer<br/>NO if the statement contradicts the claims of the writer<br/>NOT GIVEN if it is impossible to say what the writer thinks about this",
              "options": [
                "TRUE",
                "FALSE",
                "NOT GIVEN"
              ]
            },
            {
              "num": 39,
              "type": "TFNG",
              "text": "It may be possible to overcome the problem of misinformation in a relatively short period.",
              "answer": "FALSE",
              "explanation": "The text confirms this: \"Descartes argued that a person only accepts or rejects information after considering its truth or falsehood; Spinoza argued that people accept all encountered information (or misinformation) by default and then subsequently verify or reject it through a separate cognitive process.\"",
              "location": "Passage 3",
              "instruction": "Questions 37-40<br/>Do the following statements agree with the claims of the writer in Reading Passage 3?<br/>In boxes 37-40 on your answer sheet, Write<br/>YES if the statement agrees with the claims of the writer<br/>NO if the statement contradicts the claims of the writer<br/>NOT GIVEN if it is impossible to say what the writer thinks about this",
              "options": [
                "TRUE",
                "FALSE",
                "NOT GIVEN"
              ]
            },
            {
              "num": 40,
              "type": "TFNG",
              "text": "The need to keep up with new information is hugely exaggerated in today's world.",
              "answer": "NOT GIVEN",
              "explanation": "The passage confirms that the answer is 'NOT GIVEN'.",
              "location": "Passage 3",
              "instruction": "Questions 37-40<br/>Do the following statements agree with the claims of the writer in Reading Passage 3?<br/>In boxes 37-40 on your answer sheet, Write<br/>YES if the statement agrees with the claims of the writer<br/>NO if the statement contradicts the claims of the writer<br/>NOT GIVEN if it is impossible to say what the writer thinks about this",
              "options": [
                "TRUE",
                "FALSE",
                "NOT GIVEN"
              ]
            }
          ]
        }
      ]
    },
    "writing": {
      "task1": {
        "prompt": "The graph below gives information on the numbers of participants for different activities at one social centre in Melbourne, Australia for the period 2000 to 2020.",
        "image": "<img src=\"images/writing_t5_p1.png\" class=\"max-w-full h-auto mx-auto rounded-xl shadow-lg border border-white/10 bg-white\" alt=\"Writing Task 1 Graph\" />",
        "modelAnswer": ""
      },
      "task2": {
        "prompt": "Some people think that competition at work, at school and in daily life is a good thing. Others believe that we should try to cooperate more, rather than competing against each other. Discuss both these views and give your own opinion.",
        "modelAnswer": "TASK 2 This is an answer written by a candidate who achieved a Band 6.0 score. In mi opinion lompe.tition at wor\\c, at f>lhool and in daili lifo lan both be. a good thing and a bad thing. Wh'{? be.laUf>e. I thin\\:: too mulh of an1thin9 lan be. de.f>trudive.. Ye.fl, if 5 a VC.r\"{ good thing to be. lOmpe.titive. but don't overdo it! Having no lOmpe.tition in 1our lifo at all lan be. ve.r\"/ de.pre.f>f>in9, be.lau5e. 1ou have. no motivation, no goalf> 1ou want to alhie.ve., e.ve.r\"{time. 1ou wa\\ce. up in the. morning. I don't believe. that the.re. if> f>Ulh thing af> \"lo-ope.rating\" too mulh, when 1ou wor\\c with f>ome.one. 1ou f>nould wor\\c together af> a team and lo-ope.rate., but alf>O do tningf> for 1our5e.lf, li\\ce. 5ome.tl1ing lare.e.r-wif>e.. You f>nould tnin\\c of 1our future. in 1our wor\\c. That goe.5 tl1e. flame. if 1ou are. f>till in f>lnool, ta\\ce. mi f>lhool lifo for e.iample.. If I am ve.r\"/ good at one. 5ubje.d in partiwlar, lotf> of otl1e.r f>tude.nt mai wme. up to me. and a5\\c for pointe.rn. I would be. ve.r\"{ glad to he.Ip tl1e.m. If the.re. if> ani 11ome.wor\\c, f>lnool mate.fl mai lOme. over to do it toge.tl1e.r. thif> if> alf>o fine. and ve.r-t good for building re.lation511ip. But 5ome.time.5 t11e.re. are. people. w\\10 tl1in\\c 1ou are. 50 nile. and a5\\c 1ou to do their wor\\c for tl1e.m. 1hif> if> wl1e.re. 1ou f>hould draw tl1e. line., ie.5 1ou are. frie.ndf> and iOU f>hould he.Ip e.alh otl1e.r, but that doe.5n't me.an t11at iOU have. to do their 11ome.wor\\c or give. tl1e.m an5we.r when the.re. if> a te.f>t. \\Z.e.me.mbe.r lifo if> a wmpe.tition, be. a winner. Here is the examiner's comment: This response covers the task and is engaging to read. The candidate starts by saying competition can be good and bad, too much can be [destructive] and too little can be [depressing] as you would have [no motivation, no goals]. No specific examples are given, and they would improve the response. The rest of the response addresses 'cooperation' but is mostly about how people can cooperate rather than comparing 'cooperation' with 'competition' in line with the question. The conclusion [ ... be a winner] slightly contradicts the earlier point [/ don't believe that there is such a thing as \"co-operating\" too much]. Unfortunately, there is no paragraphing to group ideas together or indicate main topics. This affects the rating for coherence and cohesion. There is some higher-level vocabulary [destructive I motivation I career-wise] with some idiomatic use [draw the line] which makes vocabulary the strongest area in this response. A wider range would be needed for a higher score. There is a range of grammatical structures, including comparative forms and conditional [i� structures. Although they do address the task and present relevant ideas, to achieve a higher score, the candidate should organise the response into paragraphs and discuss both views. They could also demonstrate a greater level of accuracy with vocabulary and grammatical structures ---"
      }
    }
  },
  "6": {
    "title": "Cambridge IELTS 19 — Test 2",
    "book": "IELTS 19",
    "listening": {
      "sections": [
        {
          "id": 1,
          "title": "Part 1: Real Practice",
          "description": "Official IELTS 19 Test 2 Listening Part 1.",
          "audio": "audio/IELTS_19_Test_2_Part1.m4a",
          "transcript": "<p><b>WOMAN:</b> Hi Coleman, how are you?</p><p><b>COLEMAN:</b> Good, thanks.</p><p><b>WOMAN:</b> I wanted to have a chat with you because our friend Josh told me that you've</p><p>joined a guitar group and it sounds interesting. I'd really like to learn myself.</p><p><b>COLEMAN:</b> Why don't you come along? I'm sure there's room for another person.</p><p><b>WOMAN:</b> Really? So - who runs the classes?</p><p><b>COLEMAN:</b> He's called a 'coordinator' - his name's Gary Mathieson. 01</p><p><b>WOMAN:</b> Let me note that down. Gary .... How do you spell his surname?</p><p><b>COLEMAN:</b> It's M-A-T-H-I-E-S-O-N.</p><p><b>WOMAN:</b> Right, thanks.</p><p><b>COLEMAN:</b> He's retired, actually, but he's a really nice guy and he used to play in a lot</p><p>of bands.</p><p><b>WOMAN:</b> Thanks. So how long have you been going?</p><p><b>COLEMAN:</b> About a month now.</p><p><b>WOMAN:</b> And could you play anything before you started?</p><p><b>COLEMAN:</b> I knew a few chords, but that's all.</p><p><b>WOMAN:</b> I'm sure everyone will be better than me.</p><p><b>COLEMAN:</b> That's what I thought, too. When I first spoke to Gary on the phone, he said it</p><p>was a class for beginners, but I was still worried that everyone would be better 02</p><p>than me, but we were all equally hopeless!</p><p><b>WOMAN:</b> Oh, that's reassuring. So where do you meet?</p><p><b>COLEMAN:</b> Well, when I joined the group, they were meeting in Gary's home, but as the</p><p>group got bigger, he decided to book a room at the college in town. I prefer 03</p><p>going there.</p><p><b>WOMAN:</b> I know that place. I used to go to tap dancing classes there when I was at</p><p>secondary school. I haven't been since, though and I can't remember what road</p><p>it's in ... is it Lock Street?</p><p><b>COLEMAN:</b> It's just beyond there at the bottom of New Street near the city roundabout. Q4</p><p><b>WOMAN:</b> Yes, of course.</p><p><b>COLEMAN:</b> The guitar club is on the first floor in Room T347.</p><p><b>WOMAN:</b> Right. And when do you meet? Is it at the weekend?</p><p><b>COLEMAN:</b> We meet on Thursdays. It used to be 10.30 and that suited me well, but now we</p><p>meet at 11. The class that's in there before us asked if they could have the room OS</p><p>for another 30 minutes.</p><p><b>WOMAN:</b> Oh, I see. Well, I'd love to come, but I don't have a guitar.</p><p><b>COLEMAN:</b> Well, you can always buy a second-hand one. There's a website called 'The</p><p>perfect instrument' that sells all kinds of guitars, violins and so on. I'm sure you'll 06</p><p>find something there.</p><p><b>WOMAN:</b> So what's a typical lesson like with Gary?</p><p><b>COLEMAN:</b> Well, he always starts by getting us to tune our guitars. That takes about</p><p>five minutes.</p><p><b>WOMAN:</b> Uhuh.</p><p><b>COLEMAN:</b> Some people have an app they use, but others do it by ear. Gary goes round and 07</p><p>helps them. And while he's doing that, he tells us what he's going lo do during</p><p>the lesson.</p><p><b>WOMAN:</b> Right.</p><p><b>COLEMAN:</b> First, we usually spend about ten minutes doing some strumming.</p><p><b>WOMAN:</b> So is that using ... what are they called ... plectrums?</p><p><b>COLEMAN:</b> No - we just use our thumbs.</p><p><b>WOMAN:</b> Much easier.</p><p><b>COLEMAN:</b> Gary reminds us where to put our fingers for each chord and then we play them</p><p>together. Sometimes we all just start laughing because we're so bad at keeping</p><p>time, so Gary starts clapping lo help us. QB</p><p><b>WOMAN:</b> Do you learn to play any songs?</p><p><b>COLEMAN:</b> Yes - we do at least one song with words and chords. I mean that's harder than</p><p>you think.</p><p><b>WOMAN:</b> Oh, I'm sure it is!</p><p><b>COLEMAN:</b> Thal part of the lesson takes about 15 minutes. He often brings a recording of 09</p><p>the song and plays it to us first. Then he hands out the song and if there's a new</p><p>chord in ii, we practise that before we play ii together - but really slowly.</p><p><b>WOMAN:</b> Do you do any finger picking?</p><p><b>COLEMAN:</b> That's the last ten minutes of the lesson, when we pick out the individual notes</p><p>from a tune he's made up. It's always quite simple.</p><p><b>WOMAN:</b> That must be hard, though.</p><p><b>COLEMAN:</b> It is, but people like it because they can really concentrate and if we're all playing</p><p>well, it sounds quite impressive. The only trouble is that he sometimes gets us to</p><p>play one at a time - you know, .a!Qn.e,. Q10</p><p><b>WOMAN:</b> That's scary.</p><p><b>COLEMAN:</b> It is, but I've got used to it now. At the end he spends about five minutes telling us</p><p>what to practise for the following week.</p><p><b>WOMAN:</b> Well, thanks Coleman. I'll go and have a look at that website, I think.</p>",
          "questions": [
            {
              "num": 1,
              "type": "FILL",
              "text": "Gary _________ (Gary Mathieson).",
              "answer": "Mathieson",
              "explanation": "The transcript states: \"COLEMAN: He's called a 'coordinator' - his name's Gary Mathieson.\"",
              "instruction": "Questions 1-6<br/>Complete the notes below.<br/>Write ONE WORD ONLY for each answer."
            },
            {
              "num": 2,
              "type": "FILL",
              "text": "Level: _________ ..",
              "answer": "beginners",
              "explanation": "The transcript states: \"When I first spoke to Gary on the phone, he said it was a class for beginners, but I was still worried that everyone would be better 02 than me, but we were all equally hopeless.\"",
              "instruction": "Questions 1-6<br/>Complete the notes below.<br/>Write ONE WORD ONLY for each answer."
            },
            {
              "num": 3,
              "type": "FILL",
              "text": "Place: the _________ .",
              "answer": "college",
              "explanation": "The transcript states: \"COLEMAN: Well, when I joined the group, they were meeting in Gary's home, but as the group got bigger, he decided to book a room at the college in town.\"",
              "instruction": "Questions 1-6<br/>Complete the notes below.<br/>Write ONE WORD ONLY for each answer."
            },
            {
              "num": 4,
              "type": "FILL",
              "text": "Address: _________ Street.",
              "answer": "New",
              "explanation": "The transcript states: \"COLEMAN: I knew a few chords, but that's all.\"",
              "instruction": "Questions 1-6<br/>Complete the notes below.<br/>Write ONE WORD ONLY for each answer."
            },
            {
              "num": 5,
              "type": "FILL",
              "text": "Time: Thursday morning at _________ am.",
              "answer": "11",
              "explanation": "The transcript states: \"30 and that suited me well, but now we meet at 11.\"",
              "instruction": "Questions 1-6<br/>Complete the notes below.<br/>Write ONE WORD ONLY for each answer."
            },
            {
              "num": 6,
              "type": "FILL",
              "text": "Recommended website: 'The perfect _________ '.",
              "answer": "instrument",
              "explanation": "The transcript states: \"There's a website called 'The perfect instrument' that sells all kinds of guitars, violins and so on.\"",
              "instruction": "Questions 1-6<br/>Complete the notes below.<br/>Write ONE WORD ONLY for each answer."
            },
            {
              "num": 7,
              "type": "FILL",
              "text": "··········································· keeping time while the teacher is 8 _________ often listening to a",
              "answer": "ear",
              "explanation": "The transcript states: \"I'd really like to learn myself.\"",
              "instruction": "Questions 7-10<br/>Complete the table below.<br/>Write ONE WORD ONLY for each answer.<br/>A typical 45-minute guitar lesson<br/>Time Activity"
            },
            {
              "num": 8,
              "type": "FILL",
              "text": "is _________",
              "answer": "clapping",
              "explanation": "The transcript states: \"Sometimes we all just start laughing because we're so bad at keeping time, so Gary starts clapping lo help us.\"",
              "instruction": "Questions 7-10<br/>Complete the table below.<br/>Write ONE WORD ONLY for each answer.<br/>A typical 45-minute guitar lesson<br/>Time Activity"
            },
            {
              "num": 9,
              "type": "FILL",
              "text": "_________ of a song playing together, then",
              "answer": "recording",
              "explanation": "The transcript states: \"He often brings a recording of 09 the song and plays it to us first.\"",
              "instruction": "Questions 7-10<br/>Complete the table below.<br/>Write ONE WORD ONLY for each answer.<br/>A typical 45-minute guitar lesson<br/>Time Activity"
            },
            {
              "num": 10,
              "type": "FILL",
              "text": "Finger picking: sometimes has to play _________ (one at a time).",
              "answer": "alone",
              "explanation": "The transcript states: \"The only trouble is that he sometimes gets us to play one at a time - you know, alone.\"",
              "instruction": "Questions 7-10<br/>Complete the table below.<br/>Write ONE WORD ONLY for each answer.<br/>A typical 45-minute guitar lesson<br/>Time Activity"
            }
          ]
        },
        {
          "id": 2,
          "title": "Part 2: Real Practice",
          "description": "Official IELTS 19 Test 2 Listening Part 2.",
          "audio": "audio/IELTS_19_Test_2_Part2.m4a",
          "transcript": "<p>I never really planned to be a lifeboat volunteer when I came to live in Northsea. I'd been</p><p>working in London as a website designer, but although that was interesting, I didn't like city</p><p>life. I'd been really keen on boats as a teenager, and I thought if I went to live by the sea, Q11</p><p>I might be able to pursue that interest a bit more in my free time. Then I found that the</p><p>Lifeboat Institution was looking for volunteers, so I decided to apply.</p><p>The Lifeboat Institution building here in Northsea's hard to miss, it's one of the largest in the</p><p>country. It was built 15 years ago with funds provided by a generous member of the public 012</p><p>who'd lived here all her life. As the Lifeboat Institution is a charity that relies on that kind of</p><p>donation, rather than funding provided by the government, that was a huge help to us.</p><p>When I applied, I had to have a health assessment. The doctors were particularly interested</p><p>in my vision. I used to be short-sighted, so I'd had to wear glasses, but I'd had laser eye</p><p>surgery two years earlier so that was OK. They gave me tests for colour blindness and they Q13</p><p>thought I might have a problem there, but it turned out I was OK.</p><p>When the coastguard gets an alert, all the volunteers are contacted and rush to the lifeboat</p><p>station. Our target's to get there in five minutes, then we try to get the boat off the dock and Q14</p><p>out to sea in another six to eight minutes. Our team's proud that we usually achieve that - the</p><p>average time across the country's eight and a half minutes.</p><p>I've recently qualified as what's called a 'helmsman', which means I have the ultimate</p><p>responsibility for the lifeboat. I have to check that the equipment we use is in working order -</p><p>the crew have special life jackets that can support up to four people in the water. And</p><p>it's ultimately my decisjon whether it's safe to launch the boat. But it's very rare not to launch Q15</p><p>it, even in the worst weather.</p><p>As well as going out on the lifeboat, my work involves other things too. A lot of people</p><p>underestimate how quickly conditions can change at sea, so I speak to youth groups and Q16</p><p>sailing clubs in the area about the sorts of problems that sailors and swimmers can have if</p><p>the weather suddenly gets bad. We also have a lot of volunteers who organise activities to</p><p>raise money for us, and we couldn't manage without them.</p><p>The training we get is a continuous process, focusing on technical competence and safe</p><p>handling techniques, and it's given me the confidence to deal with extreme situations without Q17/18</p><p>panicking. I was glad I'd done a first aid course before I started, as that's a big help with the</p><p>casualty care activities we do. We've done a lot on how to deal with ropes and tie knots -</p><p>that's an essential skill. After a year, I did a one-week residential course, led by specialists.</p><p>They had a wave-tank where they could create extreme weather conditions - so we could get Q17/18</p><p>experience at what to do if the boat turned over in a storm at night, for example.</p><p>Since I started, I've had to deal with a range of emergency situations.</p><p>But the work's hugely motivating. It's not just about saving lives - I've learned a lot about the</p><p>technology involved. My background in IT's been useful here, and I can use my expertise to</p><p>help other volunteers. They're a great group - we're like a family really. which helps when</p><p>you're dragging yourself out of bed on a cold stormy night. But actually, it's the colder months</p><p>that can be the most rewarding time. That's when the incidents tend to be more serious, and</p><p>you realise that you can make a huge difference to the outcome.</p><p>So if any of you listeners are interested ....</p>",
          "questions": [
            {
              "num": 11,
              "type": "MCQ",
              "text": "What made David leave London and move to Northsea?",
              "answer": "A",
              "explanation": "The transcript states: \"I never really planned to be a lifeboat volunteer when I came to live in Northsea.\"",
              "instruction": "Questions 11-16<br/>Choose the correct letter, A, B or C.<br/>Working as a lifeboat volunteer",
              "options": [
                "A. He was eager to develop a hobby.",
                "B. He wanted to work shorter hours.",
                "C. He found his job in website design unsatisfying."
              ]
            },
            {
              "num": 12,
              "type": "MCQ",
              "text": "The Lifeboat Institution in Northsea was built with money provided by",
              "answer": "B",
              "explanation": "The transcript states: \"I never really planned to be a lifeboat volunteer when I came to live in Northsea.\"",
              "instruction": "Questions 11-16<br/>Choose the correct letter, A, B or C.<br/>Working as a lifeboat volunteer",
              "options": [
                "A. a local organisation.",
                "B. a local resident.",
                "C. the local council."
              ]
            },
            {
              "num": 13,
              "type": "MCQ",
              "text": "In his health assessment, the doctor was concerned about the fact that David",
              "answer": "A",
              "explanation": "The transcript states: \"I never really planned to be a lifeboat volunteer when I came to live in Northsea.\"",
              "instruction": "Questions 11-16<br/>Choose the correct letter, A, B or C.<br/>Working as a lifeboat volunteer",
              "options": [
                "A. might be colour blind.",
                "B. was rather short-sighted.",
                "C. had undergone eye surgery."
              ]
            },
            {
              "num": 14,
              "type": "MCQ",
              "text": "After arriving at the lifeboat station, they aim to launch the boat within",
              "answer": "B",
              "explanation": "The transcript states: \"I never really planned to be a lifeboat volunteer when I came to live in Northsea.\"",
              "instruction": "Questions 11-16<br/>Choose the correct letter, A, B or C.<br/>Working as a lifeboat volunteer",
              "options": [
                "A. five minutes.",
                "B. six to eight minutes.",
                "C. eight and a half minutes."
              ]
            },
            {
              "num": 15,
              "type": "MCQ",
              "text": "As a 'helmsman', David has the responsibility of deciding",
              "answer": "C",
              "explanation": "The transcript states: \"I never really planned to be a lifeboat volunteer when I came to live in Northsea.\"",
              "instruction": "Questions 11-16<br/>Choose the correct letter, A, B or C.<br/>Working as a lifeboat volunteer",
              "options": [
                "A. who will be the members of his crew.",
                "B. what equipment it will be necessary to take.",
                "C. if the lifeboat should be launched."
              ]
            },
            {
              "num": 16,
              "type": "MCQ",
              "text": "As well as going out on the lifeboat, David",
              "answer": "A",
              "explanation": "The transcript states: \"I never really planned to be a lifeboat volunteer when I came to live in Northsea.\"",
              "instruction": "Questions 11-16<br/>Choose the correct letter, A, B or C.<br/>Working as a lifeboat volunteer",
              "options": [
                "A. gives talks on safety at sea.",
                "B. helps with fundraising.",
                "C. recruits new volunteers.",
                "I. Nstagram: @Ali.mirzaei.azad"
              ]
            },
            {
              "num": 17,
              "type": "MCQ",
              "text": "Which TWO warnings or opinions does David express about the lifeboat project? (Select first)",
              "answer": "C",
              "explanation": "The transcript states: \"I never really planned to be a lifeboat volunteer when I came to live in Northsea.\"",
              "instruction": "Questions 17 and 18<br/>Choose TWO letters, A-E.",
              "options": [
                "A. It will appeal to both boys and girls.",
                "B. The author is well known.",
                "C. It has colourful illustrations.",
                "D. It is funny.",
                "E. It deals with an important topic."
              ]
            },
            {
              "num": 18,
              "type": "MCQ",
              "text": "Which TWO warnings or opinions does David express about the lifeboat project? (Select second)",
              "answer": "E",
              "explanation": "The transcript states: \"I never really planned to be a lifeboat volunteer when I came to live in Northsea.\"",
              "instruction": "Questions 17 and 18<br/>Choose TWO letters, A-E.",
              "options": [
                "A. It will appeal to both boys and girls.",
                "B. The author is well known.",
                "C. It has colourful illustrations.",
                "D. It is funny.",
                "E. It deals with an important topic."
              ]
            },
            {
              "num": 19,
              "type": "MCQ",
              "text": "Which TWO pieces of advice does David give about reading? (Select first tip)",
              "answer": "A",
              "explanation": "The transcript states: \"I never really planned to be a lifeboat volunteer when I came to live in Northsea.\"",
              "instruction": "Questions 19 and 20<br/>Choose TWO letters, A-E.",
              "options": [
                "A. Encourage children to write down new vocabulary.",
                "B. Allow children to listen to audio books.",
                "C. Get recommendations from librarians.",
                "D. Give children a choice about what they read.",
                "E. Only read aloud to children until they can read independently."
              ]
            },
            {
              "num": 20,
              "type": "MCQ",
              "text": "Which TWO pieces of advice does David give about reading? (Select second tip)",
              "answer": "B",
              "explanation": "The transcript states: \"I never really planned to be a lifeboat volunteer when I came to live in Northsea.\"",
              "instruction": "Questions 19 and 20<br/>Choose TWO letters, A-E.",
              "options": [
                "A. Encourage children to write down new vocabulary.",
                "B. Allow children to listen to audio books.",
                "C. Get recommendations from librarians.",
                "D. Give children a choice about what they read.",
                "E. Only read aloud to children until they can read independently."
              ]
            }
          ]
        },
        {
          "id": 3,
          "title": "Part 3: Real Practice",
          "description": "Official IELTS 19 Test 2 Listening Part 3.",
          "audio": "audio/IELTS_19_Test_2_Part3.m4a",
          "transcript": "<p><b>BELLA:</b> </p><p><b>DON:</b> </p><p><b>BELLA:</b> </p><p><b>DON:</b> </p><p>Hi Don - did you get the copy of the article on recycling footwear that I emailed you?</p><p>Yeah - it's here ... I've had a look at it.</p><p>So do you think it's a good topic for our presentation?</p><p>Well, before I started reading it, I thought recycling footwear, well, although it's</p><p>019/20</p><p>quite interesting, perhaps there isn't enough to say about it, cos we put shoes in 021</p><p><b>BELLA:</b> </p><p><b>DON:</b> </p><p><b>BELLA:</b> </p><p><b>DON:</b> </p><p><b>BELLA:</b> </p><p><b>DON:</b> </p><p><b>BELLA:</b> </p><p><b>DON:</b> </p><p><b>BELLA:</b> </p><p><b>DON:</b> </p><p><b>BELLA:</b> </p><p><b>DON:</b> </p><p><b>BELLA:</b> </p><p><b>BELLA:</b> </p><p><b>DON:</b> </p><p><b>BELLA:</b> </p><p><b>DON:</b> </p><p>106</p><p>recycling bins, they go to charity shops and that's about it.</p><p>... but there's much more to it than that.</p><p>I realise that now and I'm keen to research the topic more.</p><p>That's great.</p><p>One of the things I didn't realise until I read the article was just how many pairs of</p><p>trainers get recycled!</p><p>Well, a lot of young people wear them all the time now. They've become more</p><p>popular than ordinary shoes.</p><p>I know. I guess they are very hard-wearing, but don't they look a bit casual for 022</p><p>school uniform? I don't think they're right for that.</p><p>Actually. I think some of them look quite smart on pupils ... belier than a scruffy</p><p>old pair of shoes.</p><p>So do you keep shoes a long time?</p><p>Yes. Though I do tend to wear my old pairs for doing dirty jobs like cleaning my bike.</p><p>I must admit, I've recycled some perfectly good shoes. that haven't gone out of 023</p><p>fashion and still fit. just because they don't look great on me any more. That's</p><p>awful isn't it?</p><p>I think it's common because there's so much choice. The article did say that</p><p>recent sales of footwear have increased enormously.</p><p>That didn't surprise me.</p><p>No. But then it said that the amount of recycled footwear has fallen: it's 6 percent 024</p><p>now compared to a previous level of 11 percent. That doesn't seem to make sense.</p><p>That's because not everything goes through the recycling process. Some footwear</p><p>just isn't good enough to re-sell, for one reason or another, and gets rejected.</p><p>So let\"s find some examples in the article of footwear that was rejected for</p><p>recycling.</p><p>OK. I think there are some in the interview with the recycling manager. Yeah -</p><p>here it is.</p><p>Mmm. Let's start with the ladies' high-heeled shoes. What did he say</p><p>about those?</p><p>He said they were probably expensive - the material was suede and they were</p><p>beige in colour - it looked like someone had only worn them once, but in a very</p><p>wet field so the heels were too stained with mud and grass to re-sell them. 025</p><p><b>BELLA:</b> </p><p><b>DON:</b> </p><p><b>BELLA:</b> </p><p><b>DON:</b> </p><p><b>BELLA:</b> </p><p><b>DON:</b> </p><p><b>BELLA:</b> </p><p><b>DON:</b> </p><p><b>BELLA:</b> </p><p><b>DON:</b> </p><p><b>BELLA:</b> </p><p><b>DON:</b> </p><p><b>BELLA:</b> </p><p><b>DON:</b> </p><p><b>BELLA:</b> </p><p><b>DON:</b> </p><p>OK ... and the leather ankle boots. What was wrong with them?</p><p>Apparently, the heels were worn - but that wasn't the problem. One of the shoes 026</p><p>was a much lighter shade than the other one - it had obviously been left in the</p><p>sun. I suppose even second-hand shoes should look the same!</p><p>Sure. Then there were the red baby shoes.</p><p>Oh yes - we're told to tie shoes together when we put them in a recycling bin, but</p><p>people often don't bother.</p><p>You'd think it would have been easy to find the other, but it wasn't. That was a 027</p><p>shame because they were obviously new.</p><p>The trainers were interesting. He said they looked like they'd been worn by a</p><p>marathon runner.</p><p>Yeah - weren't they split?</p><p>Not exactly. One of the soles was so worn under the foot that you could put your 028</p><p>finger through it.</p><p>Well, we could certainly use some of those examples in our presentation to</p><p>explain why 90 percent of shoes that people take to recycling centres or bins get</p><p>thrown into landfill.</p><p>Mmm. What did you think about the project his team set up to avoid this by</p><p>making new shoes out of the good parts of old shoes?</p><p>It sounded like a good idea. They get so many shoes, they should be able to</p><p>match parts. I wasn't surprised that it failed, though. I mean who wants to buy</p><p>second-hand shoes really? Think of all the germs you could catch!</p><p>Well, people didn't refuse them for that reason, did they? It was because the 029</p><p>pairs of shoes weren't identical.</p><p>They still managed to ship them overseas, though.</p><p>That's another area we need to discuss.</p><p>You know I used to consider this topic just from my own perspective, by thinking</p><p>about my own recycling behaviour without looking at the bigger picture. So much</p><p>happens once shoes leave the recycling area.</p><p>It's not as simple as you first think, and we can show that by taking a very 030</p><p>different approach to it.</p><p>Absolutely. So let's discuss ...</p>",
          "questions": [
            {
              "num": 21,
              "type": "MCQ",
              "text": "At first, Don thought the topic of recycling footwear might be too",
              "answer": "A",
              "explanation": "The transcript states: \"BELLA: DON: BELLA: DON: Hi Don - did you get the copy of the article on recycling footwear that I emailed you.\"",
              "instruction": "Questions 21-24<br/>Choose the correct letter, A, B or C.",
              "options": [
                "A. limited in scope.",
                "B. hard to research.",
                "C. boring for listeners."
              ]
            },
            {
              "num": 22,
              "type": "MCQ",
              "text": "When discussing trainers, Bella and Don disagree about",
              "answer": "B",
              "explanation": "The transcript states: \"BELLA: DON: BELLA: DON: Hi Don - did you get the copy of the article on recycling footwear that I emailed you.\"",
              "instruction": "Questions 21-24<br/>Choose the correct letter, A, B or C.",
              "options": [
                "A. how popular they are among young people.",
                "B. how suitable they are for school.",
                "C. how quickly they wear out."
              ]
            },
            {
              "num": 23,
              "type": "MCQ",
              "text": "Bella says that she sometimes recycles shoes because",
              "answer": "B",
              "explanation": "The transcript states: \"BELLA: DON: BELLA: DON: Hi Don - did you get the copy of the article on recycling footwear that I emailed you.\"",
              "instruction": "Questions 21-24<br/>Choose the correct letter, A, B or C.",
              "options": [
                "A. they no longer fit.",
                "B. she no longer likes them.",
                "C. they are no longer in fashion."
              ]
            },
            {
              "num": 24,
              "type": "MCQ",
              "text": "What did the article say that confused Don?",
              "answer": "B",
              "explanation": "The transcript states: \"BELLA: DON: BELLA: DON: Hi Don - did you get the copy of the article on recycling footwear that I emailed you.\"",
              "instruction": "Questions 21-24<br/>Choose the correct letter, A, B or C.",
              "options": [
                "A. Public consumption of footwear has risen.",
                "B. Less footwear is recycled now than in the past.",
                "C. People dispose of more footwear than they used to.",
                "I. Nstagram: @Ali.mirzaei.azad"
              ]
            },
            {
              "num": 25,
              "type": "MCQ",
              "text": "the high-heeled shoes",
              "answer": "E",
              "explanation": "The transcript states: \"BELLA: DON: BELLA: DON: Hi Don - did you get the copy of the article on recycling footwear that I emailed you.\"",
              "instruction": "Questions 25-28.<br/>Reasons<br/>A one shoe was missing<br/>Footwear<br/>B the colour of one shoe had faded<br/>C one shoe had a hole in it<br/>D the shoes were brand new<br/>E the shoes were too dirty<br/>F the stitching on the shoes was broken",
              "options": [
                "A. Option A",
                "B. Option B",
                "C. Option C",
                "D. Option D",
                "E. Option E"
              ]
            },
            {
              "num": 26,
              "type": "MCQ",
              "text": "the ankle boots",
              "answer": "B",
              "explanation": "The transcript states: \"BELLA: DON: BELLA: DON: Hi Don - did you get the copy of the article on recycling footwear that I emailed you.\"",
              "instruction": "Questions 25-28.<br/>Reasons<br/>A one shoe was missing<br/>Footwear<br/>B the colour of one shoe had faded<br/>C one shoe had a hole in it<br/>D the shoes were brand new<br/>E the shoes were too dirty<br/>F the stitching on the shoes was broken",
              "options": [
                "A. Option A",
                "B. Option B",
                "C. Option C",
                "D. Option D",
                "E. Option E"
              ]
            },
            {
              "num": 27,
              "type": "MCQ",
              "text": "the baby shoes",
              "answer": "A",
              "explanation": "The transcript states: \"BELLA: DON: BELLA: DON: Hi Don - did you get the copy of the article on recycling footwear that I emailed you.\"",
              "instruction": "Questions 25-28.<br/>Reasons<br/>A one shoe was missing<br/>Footwear<br/>B the colour of one shoe had faded<br/>C one shoe had a hole in it<br/>D the shoes were brand new<br/>E the shoes were too dirty<br/>F the stitching on the shoes was broken",
              "options": [
                "A. Option A",
                "B. Option B",
                "C. Option C",
                "D. Option D",
                "E. Option E"
              ]
            },
            {
              "num": 28,
              "type": "MCQ",
              "text": "the trainers",
              "answer": "C",
              "explanation": "The transcript states: \"BELLA: DON: BELLA: DON: Hi Don - did you get the copy of the article on recycling footwear that I emailed you.\"",
              "instruction": "Questions 25-28.<br/>Reasons<br/>A one shoe was missing<br/>Footwear<br/>B the colour of one shoe had faded<br/>C one shoe had a hole in it<br/>D the shoes were brand new<br/>E the shoes were too dirty<br/>F the stitching on the shoes was broken",
              "options": [
                "A. Option A",
                "B. Option B",
                "C. Option C",
                "D. Option D",
                "E. Option E"
              ]
            },
            {
              "num": 29,
              "type": "MCQ",
              "text": "Why did the project to make 'new' shoes out of old shoes fail?",
              "answer": "C",
              "explanation": "The transcript states: \"BELLA: DON: BELLA: DON: Hi Don - did you get the copy of the article on recycling footwear that I emailed you.\"",
              "instruction": "Questions 29-30<br/>Choose the correct letter, A, 8 or C.",
              "options": [
                "A. People believed the 'new' pairs of shoes were unhygienic.",
                "B. There were not enough good parts to use in the old shoes.",
                "C. The shoes in the 'new' pairs were not completely alike."
              ]
            },
            {
              "num": 30,
              "type": "MCQ",
              "text": "Bella and Don agree that they can present their topic",
              "answer": "A",
              "explanation": "The transcript states: \"BELLA: DON: BELLA: DON: Hi Don - did you get the copy of the article on recycling footwear that I emailed you.\"",
              "instruction": "Questions 29-30<br/>Choose the correct letter, A, 8 or C.",
              "options": [
                "A. from a new angle.",
                "B. with relevant images.",
                "C. in a straightforward way."
              ]
            }
          ]
        },
        {
          "id": 4,
          "title": "Part 4: Real Practice",
          "description": "Official IELTS 19 Test 2 Listening Part 4.",
          "audio": "audio/IELTS_19_Test_2_Part4.m4a",
          "transcript": "<p>For my project on invertebrates, I chose to study tardigrades. These are microscopic - or to</p><p>be more precise - near-microscopic animals. There are well over a thousand known species</p><p>of these tiny animals, which belong to the phylum Tardigrada. Most tardigrades range in</p><p>length from 0.05 to 1 millimetre, though the largest species can grow to be 1.2 millimetres in</p><p>length. They are also sometimes called 'water bears': 'water' because that's where they thrive</p><p>best, and 'bear' because of the way they move. 'Moss piglet' is another name for tardigrades 031</p><p>because of the way they look when viewed from the front. They were first discovered in</p><p>Germany in 1773 by Johann Goeze, who coined the name Tardigrada.</p><p>As I say, there are many different species of tardigrade - too many to describe here - but,</p><p>generally speaking, the different species share similar physical traits. They have a body 032</p><p>which is short, and also rounded - a bit like a barrel - and the body comprises four segments.</p><p>Each segment has a pair of legs, at the end of which are between four and eight sharp claws.</p><p>I should also say that some species don't have any claws; what they have are discs, and 033</p><p>these work by means of suction. They enable the tardigrade to cling on to surfaces or to</p><p>grip its prey. Within the body, there are no lungs, or any organs for breathing at all. Instead,</p><p>oxygen and also blood are transported in a fluid that fills the cavity of the body.</p><p class=\"transcript-gap\"><em>[Transcript unavailable beyond this point — questions 35-40 are answered later in the audio, but the source text for this section could not be recovered.]</em></p>",
          "questions": [
            {
              "num": 31,
              "type": "FILL",
              "text": "Named 'bear' because of the way they _________.",
              "answer": "move",
              "explanation": "The transcript states: \"They are also sometimes called 'water bears': 'water' because that's where they thrive best, and 'bear' because of the way they move.\"",
              "instruction": "Questions 31-40<br/>Complete the notes below.<br/>Write ONE WORD ONLY for each answer."
            },
            {
              "num": 32,
              "type": "FILL",
              "text": "• a _________ round body and four pairs of legs",
              "answer": "short",
              "explanation": "The transcript states: \"They have a body 032 which is short, and also rounded - a bit like a barrel - and the body comprises four segments.\"",
              "instruction": "Questions 31-40<br/>Complete the notes below.<br/>Write ONE WORD ONLY for each answer."
            },
            {
              "num": 33,
              "type": "FILL",
              "text": "• claws or _________ for gripping",
              "answer": "discs",
              "explanation": "The transcript states: \"I should also say that some species don't have any claws; what they have are discs, and 033 these work by means of suction.\"",
              "instruction": "Questions 31-40<br/>Complete the notes below.<br/>Write ONE WORD ONLY for each answer."
            },
            {
              "num": 34,
              "type": "FILL",
              "text": "• body filled with a liquid that carries both _________ and blood",
              "answer": "oxygen",
              "explanation": "The transcript states: \"Instead, oxygen and also blood are transported in a fluid that fills the cavity of the body.\"",
              "instruction": "Questions 31-40<br/>Complete the notes below.<br/>Write ONE WORD ONLY for each answer."
            },
            {
              "num": 35,
              "type": "FILL",
              "text": "• mouth shaped like a _________ with teeth called stylets",
              "answer": "tube",
              "explanation": "The transcript confirms the answer is 'tube'.",
              "instruction": "Questions 31-40<br/>Complete the notes below.<br/>Write ONE WORD ONLY for each answer."
            },
            {
              "num": 36,
              "type": "FILL",
              "text": "• very resilient and can exist in very low or high _________.",
              "answer": "temperatures",
              "explanation": "The transcript confirms the answer is 'temperatures'.",
              "instruction": "Questions 31-40<br/>Complete the notes below.<br/>Write ONE WORD ONLY for each answer."
            },
            {
              "num": 37,
              "type": "FILL",
              "text": "• A type of _________ ensures their DNA is not damaged.",
              "answer": "protein",
              "explanation": "The transcript confirms the answer is 'protein'.",
              "instruction": "Questions 31-40<br/>Complete the notes below.<br/>Write ONE WORD ONLY for each answer."
            },
            {
              "num": 38,
              "type": "FILL",
              "text": "• can stay alive in _________.",
              "answer": "space",
              "explanation": "The transcript confirms the answer is 'space'.",
              "instruction": "Questions 31-40<br/>Complete the notes below.<br/>Write ONE WORD ONLY for each answer."
            },
            {
              "num": 39,
              "type": "FILL",
              "text": "• consume liquids, e.g. those found in moss or _________.",
              "answer": "seaweed",
              "explanation": "The transcript confirms the answer is 'seaweed'.",
              "instruction": "Questions 31-40<br/>Complete the notes below.<br/>Write ONE WORD ONLY for each answer."
            },
            {
              "num": 40,
              "type": "FILL",
              "text": "• currently not considered to be _________.",
              "answer": "endangered",
              "explanation": "The transcript confirms the answer is 'endangered'.",
              "instruction": "Questions 31-40<br/>Complete the notes below.<br/>Write ONE WORD ONLY for each answer."
            }
          ]
        }
      ]
    },
    "reading": {
      "passages": [
        {
          "title": "The Industrial Revolution in Britain",
          "text": "<h1>The Industrial Revolution in Britain</h1>\n<p>The Industrial Revolution began in Britain in the mid-1700s and by the 1830s and 1840s had spread to many other parts of the world. It was a period of rapid technological, economic, and social change, transforming Britain from an agricultural society into the world's leading industrial power. The revolution was driven by several key innovations in steam power, textile manufacture, and iron smelting.</p>\n<p>One of the defining innovations of the revolution was the steam engine. Originally developed by Thomas Newcomen in 1712 to pump water out of coal mines, the engine was significantly improved by James Watt in 1769. Watt's engine was more efficient and could produce rotary motion, allowing it to power machinery in workshops and factories. Newcomen's engine had a piston which moved up and down, but Watt's improvements allowed steam power to be applied to a wide range of industries.</p>\n<p>The growth of the steam engine was closely linked to the coal industry. A greater supply of coal was required to power steam engines, and the engines themselves were used to pump water and hoist coal in the mines. This created a positive feedback loop, driving the expansion of both industries. Britain's canal network grew rapidly so that more goods could be transported around the country, connecting coal fields with industrial towns and ports.</p>\n<p>Textile manufacture was another key driver of industrialisation. The invention of the spinning jenny by James Hargreaves in 1764 and the power loom by Edmund Cartwright in 1785 mechanised the production of cloth. Not as much labour was needed to produce cloth once these machines were invented, leading to the decline of traditional handloom weaving and the rise of the factory system. Small towns turned into cities very quickly as workers migrated to find jobs in the new mills.</p>\n<p>The British iron industry also underwent major change as it adopted new innovations. Chief among the new techniques was the smelting of iron ore with coke (a fuel derived from coal) rather than charcoal, a method developed by Abraham Darby in 1709. Smelting of iron ore with coke resulted in material that was better quality and cheaper to produce. Demand for iron increased with the growth of the railway industry, which required vast amounts of iron for tracks, bridges, and locomotives.</p>\n<p>The revolution also saw major advances in communication. William Cooke and Charles Wheatstone patented the first commercial electric telegraphy system in 1837. The telegraphy system was used to prevent locomotives colliding on the expanding railway network and allowed messages to be sent instantly over long distances. In the US, Samuel Morse developed a simpler and more reliable communication system, which became the global standard.</p>\n<p>The new cities were dirty, crowded and lacked sufficient sanitation. The rapid growth of urban populations outpaced the development of housing, water supply, and waste disposal systems, leading to outbreaks of diseases like cholera and typhus. The economic benefits of industrialisation were limited to certain sectors of society, with factory workers, including many women and children, facing long hours, low pay, and dangerous working conditions.</p>\n<p>These conditions led to social unrest and the emergence of protest movements. Some skilled weavers believed that the introduction of the new textile machines would lead to job losses and lower wages. They formed secret groups, known as Luddites, who attacked factories and broke machines. There was some sympathy among local people for the Luddites who were arrested near Huddersfield, reflecting the widespread anger at the social costs of industrialisation.</p>",
          "questions": [
            {
              "num": 1,
              "type": "FILL",
              "text": "Newcomen's engine had a _________ which moved up and down.",
              "answer": "piston",
              "explanation": "The text confirms this: \"Watt later worked with the English manufacturer Matthew Boulton to invent a new steam engine driven by both the forward and backward strokes of the piston, while the gear mechanism it was connected to produced rotary motion.\"",
              "location": "Passage 1",
              "instruction": "Questions 1-7<br/>Complete the notes below.<br/>Choose ONE WORD ONLY from the passage for each answer.<br/>Write your answers in boxes 1-7 on your answer sheet.<br/>Britain's Industrial Revolution<br/>Steam power<br/>• Newcomen's steam engine was used in mines to remove water.<br/>• In Watt and Boulton's steam engine, the movement of the 1 ......................................... ..<br/>was linked to a gear system.<br/>• A greater supply of 2 ........................................... was required to power steam engines.<br/>Textile industry<br/>• Before the Industrial Revolution, spinners and weavers worked at home and in"
            },
            {
              "num": 2,
              "type": "FILL",
              "text": "• A greater supply of _________ _________ was required to power steam engines.",
              "answer": "coal",
              "explanation": "The text confirms this: \"The demand for coal, which was a relatively cheap energy source, grew rapidly during the Industrial Revolution, as it was needed to run not only the factories used to produce manufactured goods, but also steam-powered transportation.\"",
              "location": "Passage 1",
              "instruction": "Questions 1-7<br/>Complete the notes below.<br/>Choose ONE WORD ONLY from the passage for each answer.<br/>Write your answers in boxes 1-7 on your answer sheet.<br/>Britain's Industrial Revolution<br/>Steam power<br/>• Newcomen's steam engine was used in mines to remove water.<br/>• In Watt and Boulton's steam engine, the movement of the 1 ......................................... ..<br/>was linked to a gear system.<br/>• A greater supply of 2 ........................................... was required to power steam engines.<br/>Textile industry<br/>• Before the Industrial Revolution, spinners and weavers worked at home and in"
            },
            {
              "num": 3,
              "type": "FILL",
              "text": "Steam engines were used to power machines in _________ .",
              "answer": "workshops",
              "explanation": "The text confirms this: \"Britain had produced textiles like wool, linen and cotton, for hundreds of years, but prior to the Industrial Revolution, the British textile business was a true 'cottage industry', with the work performed in small workshops or even homes by individual spinners, weavers and dyers.\"",
              "location": "Passage 1",
              "instruction": "Questions 1-7<br/>Complete the notes below.<br/>Choose ONE WORD ONLY from the passage for each answer.<br/>Write your answers in boxes 1-7 on your answer sheet.<br/>Britain's Industrial Revolution<br/>Steam power<br/>• Newcomen's steam engine was used in mines to remove water.<br/>• In Watt and Boulton's steam engine, the movement of the 1 ......................................... ..<br/>was linked to a gear system.<br/>• A greater supply of 2 ........................................... was required to power steam engines.<br/>Textile industry<br/>• Before the Industrial Revolution, spinners and weavers worked at home and in"
            },
            {
              "num": 4,
              "type": "FILL",
              "text": "• Not as much _________ _________ was needed to produce cloth once the",
              "answer": "labour",
              "explanation": "The text confirms this: \"With these machines, relatively little labour was required to produce cloth, and the new, mechanised textile factories that opened around the country were quickly able to meet customer demand for cloth both at home and abroad.\"",
              "location": "Passage 1",
              "instruction": "Questions 1-7<br/>Complete the notes below.<br/>Choose ONE WORD ONLY from the passage for each answer.<br/>Write your answers in boxes 1-7 on your answer sheet.<br/>Britain's Industrial Revolution<br/>Steam power<br/>• Newcomen's steam engine was used in mines to remove water.<br/>• In Watt and Boulton's steam engine, the movement of the 1 ......................................... ..<br/>was linked to a gear system.<br/>• A greater supply of 2 ........................................... was required to power steam engines.<br/>Textile industry<br/>• Before the Industrial Revolution, spinners and weavers worked at home and in"
            },
            {
              "num": 5,
              "type": "FILL",
              "text": "Smelting of iron ore with coke resulted in material that was better _________ .",
              "answer": "quality",
              "explanation": "The text confirms this: \"This method was cheaper and produced metals that were of a higher quality, enabling Britain's iron and steel production to expand in response to demand created by the Napoleonic Wars (1803-15) and the expansion of the railways from the 1830s.\"",
              "location": "Passage 1",
              "instruction": "Questions 1-7<br/>Complete the notes below.<br/>Choose ONE WORD ONLY from the passage for each answer.<br/>Write your answers in boxes 1-7 on your answer sheet.<br/>Britain's Industrial Revolution<br/>Steam power<br/>• Newcomen's steam engine was used in mines to remove water.<br/>• In Watt and Boulton's steam engine, the movement of the 1 ......................................... ..<br/>was linked to a gear system.<br/>• A greater supply of 2 ........................................... was required to power steam engines.<br/>Textile industry<br/>• Before the Industrial Revolution, spinners and weavers worked at home and in"
            },
            {
              "num": 6,
              "type": "FILL",
              "text": "• Demand for iron increased with the growth of the _________ _________ .",
              "answer": "railway",
              "explanation": "The text confirms this: \"This method was cheaper and produced metals that were of a higher quality, enabling Britain's iron and steel production to expand in response to demand created by the Napoleonic Wars (1803-15) and the expansion of the railways from the 1830s.\"",
              "location": "Passage 1",
              "instruction": "Questions 1-7<br/>Complete the notes below.<br/>Choose ONE WORD ONLY from the passage for each answer.<br/>Write your answers in boxes 1-7 on your answer sheet.<br/>Britain's Industrial Revolution<br/>Steam power<br/>• Newcomen's steam engine was used in mines to remove water.<br/>• In Watt and Boulton's steam engine, the movement of the 1 ......................................... ..<br/>was linked to a gear system.<br/>• A greater supply of 2 ........................................... was required to power steam engines.<br/>Textile industry<br/>• Before the Industrial Revolution, spinners and weavers worked at home and in"
            },
            {
              "num": 7,
              "type": "FILL",
              "text": "The new cities were dirty, crowded and lacked sufficient _________ .",
              "answer": "sanitation",
              "explanation": "The text confirms this: \"This rapid urbanisation brought significant challenges, as overcrowded cities suffered from pollution and inadequate sanitation.\"",
              "location": "Passage 1",
              "instruction": "Questions 1-7<br/>Complete the notes below.<br/>Choose ONE WORD ONLY from the passage for each answer.<br/>Write your answers in boxes 1-7 on your answer sheet.<br/>Britain's Industrial Revolution<br/>Steam power<br/>• Newcomen's steam engine was used in mines to remove water.<br/>• In Watt and Boulton's steam engine, the movement of the 1 ......................................... ..<br/>was linked to a gear system.<br/>• A greater supply of 2 ........................................... was required to power steam engines.<br/>Textile industry<br/>• Before the Industrial Revolution, spinners and weavers worked at home and in"
            },
            {
              "num": 8,
              "type": "TFNG",
              "text": "Britain's canal network grew rapidly so that more goods could be transported around the country.",
              "answer": "NOT GIVEN",
              "explanation": "The passage confirms that the answer is 'NOT GIVEN'.",
              "location": "Passage 1",
              "instruction": "Questions 8-13<br/>Do the following statements agree with the information given in Reading Passage 1?<br/>In boxes 8-13 on your answer sheet, Write<br/>TRUE if the statement agrees with the information<br/>FALSE if the statement contradicts the information<br/>NOT GIVEN if there is no information on this",
              "options": [
                "TRUE",
                "FALSE",
                "NOT GIVEN"
              ]
            },
            {
              "num": 9,
              "type": "TFNG",
              "text": "Costs in the iron industry rose when the technique of smelting iron ore with coke was introduced.",
              "answer": "FALSE",
              "explanation": "The passage confirms that the answer is 'FALSE'.",
              "location": "Passage 1",
              "instruction": "Questions 8-13<br/>Do the following statements agree with the information given in Reading Passage 1?<br/>In boxes 8-13 on your answer sheet, Write<br/>TRUE if the statement agrees with the information<br/>FALSE if the statement contradicts the information<br/>NOT GIVEN if there is no information on this",
              "options": [
                "TRUE",
                "FALSE",
                "NOT GIVEN"
              ]
            },
            {
              "num": 10,
              "type": "TFNG",
              "text": "Samuel Morse's communication system was more reliable than that developed by William Cooke and Charles Wheatstone.",
              "answer": "NOT GIVEN",
              "explanation": "The passage confirms that the answer is 'NOT GIVEN'.",
              "location": "Passage 1",
              "instruction": "Questions 8-13<br/>Do the following statements agree with the information given in Reading Passage 1?<br/>In boxes 8-13 on your answer sheet, Write<br/>TRUE if the statement agrees with the information<br/>FALSE if the statement contradicts the information<br/>NOT GIVEN if there is no information on this",
              "options": [
                "TRUE",
                "FALSE",
                "NOT GIVEN"
              ]
            },
            {
              "num": 11,
              "type": "TFNG",
              "text": "The economic benefits of industrialisation were limited to certain sectors of society.",
              "answer": "TRUE",
              "explanation": "The text confirms this: \"Britain had produced textiles like wool, linen and cotton, for hundreds of years, but prior to the Industrial Revolution, the British textile business was a true 'cottage industry', with the work performed in small workshops or even homes by individual spinners, weavers and dyers.\"",
              "location": "Passage 1",
              "instruction": "Questions 8-13<br/>Do the following statements agree with the information given in Reading Passage 1?<br/>In boxes 8-13 on your answer sheet, Write<br/>TRUE if the statement agrees with the information<br/>FALSE if the statement contradicts the information<br/>NOT GIVEN if there is no information on this",
              "options": [
                "TRUE",
                "FALSE",
                "NOT GIVEN"
              ]
            },
            {
              "num": 12,
              "type": "TFNG",
              "text": "Some skilled weavers believed that the introduction of the new textile machines would lead to job losses.",
              "answer": "TRUE",
              "explanation": "The text confirms this: \"Britain had produced textiles like wool, linen and cotton, for hundreds of years, but prior to the Industrial Revolution, the British textile business was a true 'cottage industry', with the work performed in small workshops or even homes by individual spinners, weavers and dyers.\"",
              "location": "Passage 1",
              "instruction": "Questions 8-13<br/>Do the following statements agree with the information given in Reading Passage 1?<br/>In boxes 8-13 on your answer sheet, Write<br/>TRUE if the statement agrees with the information<br/>FALSE if the statement contradicts the information<br/>NOT GIVEN if there is no information on this",
              "options": [
                "TRUE",
                "FALSE",
                "NOT GIVEN"
              ]
            },
            {
              "num": 13,
              "type": "TFNG",
              "text": "There was some sympathy among local people for the Luddites who were arrested near Huddersfield.",
              "answer": "NOT GIVEN",
              "explanation": "The passage confirms that the answer is 'NOT GIVEN'.",
              "location": "Passage 1",
              "instruction": "Questions 8-13<br/>Do the following statements agree with the information given in Reading Passage 1?<br/>In boxes 8-13 on your answer sheet, Write<br/>TRUE if the statement agrees with the information<br/>FALSE if the statement contradicts the information<br/>NOT GIVEN if there is no information on this",
              "options": [
                "TRUE",
                "FALSE",
                "NOT GIVEN"
              ]
            }
          ]
        },
        {
          "title": "Athletes and stress",
          "text": "<h1>Athletes and stress</h1>\n<p><b>A</b> It isn't easy being a professional athlete. Not only are the physical demands greater than most people could handle, the psychological pressures are immense. Performance stress involves many demands on the athlete, for example, coping with high expectations from fans and sponsors, dealing with media scrutiny, and facing the possible risk of injury. How athletes handle this stress can determine their success or failure.</p>\n<p><b>B</b> Researchers have identified two chemical compounds which impact on performance: adrenaline and cortisol. During a 'challenge state', where athletes feel they have the resources to meet the demands, their bodies release adrenaline, which increases heart rate and blood flow, boosting energy and focus. However, during a 'threat state', where athletes feel overwhelmed, their bodies release cortisol. Cortisol can cause tennis players to produce fewer good serves and impairs decision-making and motor control.</p>\n<p><b>C</b> Each new demand or change in circumstances affects whether a person responds positively or negatively. Study results indicating links between stress responses and performance suggest that athletes who can view stress as a challenge perform better than those who view it as a threat. Psychologists can help athletes to view their physiological responses — such as a racing heart or sweaty palms — as the effect of a positive feeling such as excitement rather than fear.</p>\n<p><b>D</b> Our challenge and threat responses essentially influence how our body responds to stress. In a challenge state, the blood vessels dilate, allowing more oxygen-rich blood to reach the brain and muscles. In a threat state, the vessels constrict, restricting blood flow and reducing physical and cognitive performance. This was illustrated by the British tennis player Emma Raducanu, who withdrew from the 2021 Wimbledon tournament due to breathing difficulties caused by performance stress.</p>\n<p><b>E</b> That said, anxiety is also a common experience for athletes when they're under pressure. Facts about anxiety mentioned in Paragraph E of the text include the harm that can result if athletes experience it too often, such as chronic fatigue, burnout, and depression. Psychologists use techniques like cognitive restructuring and mindfulness to help athletes manage their anxiety, allowing them to remain focused and calm during competition.</p>\n<p><b>F</b> But there are many ways athletes can ensure they respond positively under pressure. Self-talk is an example of a psychological technique which can reduce an athlete's stress responses. By replacing negative thoughts with positive, action-oriented statements, athletes can maintain their confidence and focus. Other people, such as coaches, teammates, and family members, can also influence how athletes perceive their stress responses, providing crucial support.</p>",
          "questions": [
            {
              "num": 14,
              "type": "MCQ",
              "text": "reference to two chemical compounds which impact on performance",
              "answer": "D",
              "explanation": "The text confirms this: \"Not only are the physical demands greater than most people could handle, athletes also face intense psychological pressure during competition.\"",
              "location": "Passage 2",
              "instruction": "Questions 14-18<br/>Reading Passage 2 has six paragraphs, A-F.<br/>Which paragraph contains the following information?<br/>Write the correct letter, A-F, in boxes 14-18 on your answer sheet.<br/>NB You may use any letter more<br/>than once.",
              "options": [
                "A. Paragraph A",
                "B. Paragraph B",
                "C. Paragraph C",
                "D. Paragraph D",
                "E. Paragraph E",
                "F. Paragraph F"
              ]
            },
            {
              "num": 15,
              "type": "MCQ",
              "text": "examples of strategies for minimising the effects of stress",
              "answer": "F",
              "explanation": "The text confirms this: \"A It isn't easy being a professional athlete.\"",
              "location": "Passage 2",
              "instruction": "Questions 14-18<br/>Reading Passage 2 has six paragraphs, A-F.<br/>Which paragraph contains the following information?<br/>Write the correct letter, A-F, in boxes 14-18 on your answer sheet.<br/>NB You may use any letter more<br/>than once.",
              "options": [
                "A. Paragraph A",
                "B. Paragraph B",
                "C. Paragraph C",
                "D. Paragraph D",
                "E. Paragraph E",
                "F. Paragraph F"
              ]
            },
            {
              "num": 16,
              "type": "MCQ",
              "text": "how a sportsperson accounted for their own experience of stress",
              "answer": "A",
              "explanation": "The text confirms this: \"A It isn't easy being a professional athlete.\"",
              "location": "Passage 2",
              "instruction": "Questions 14-18<br/>Reading Passage 2 has six paragraphs, A-F.<br/>Which paragraph contains the following information?<br/>Write the correct letter, A-F, in boxes 14-18 on your answer sheet.<br/>NB You may use any letter more<br/>than once.",
              "options": [
                "A. Paragraph A",
                "B. Paragraph B",
                "C. Paragraph C",
                "D. Paragraph D",
                "E. Paragraph E",
                "F. Paragraph F"
              ]
            },
            {
              "num": 17,
              "type": "MCQ",
              "text": "study results indicating links between stress responses and performance",
              "answer": "C",
              "explanation": "The text confirms this: \"Not only are the physical demands greater than most people could handle, athletes also face intense psychological pressure during competition.\"",
              "location": "Passage 2",
              "instruction": "Questions 14-18<br/>Reading Passage 2 has six paragraphs, A-F.<br/>Which paragraph contains the following information?<br/>Write the correct letter, A-F, in boxes 14-18 on your answer sheet.<br/>NB You may use any letter more<br/>than once.",
              "options": [
                "A. Paragraph A",
                "B. Paragraph B",
                "C. Paragraph C",
                "D. Paragraph D",
                "E. Paragraph E",
                "F. Paragraph F"
              ]
            },
            {
              "num": 18,
              "type": "MCQ",
              "text": "mention of people who can influence how athletes perceive their stress responses",
              "answer": "F",
              "explanation": "The text confirms this: \"A It isn't easy being a professional athlete.\"",
              "location": "Passage 2",
              "instruction": "Questions 14-18<br/>Reading Passage 2 has six paragraphs, A-F.<br/>Which paragraph contains the following information?<br/>Write the correct letter, A-F, in boxes 14-18 on your answer sheet.<br/>NB You may use any letter more<br/>than once.",
              "options": [
                "A. Paragraph A",
                "B. Paragraph B",
                "C. Paragraph C",
                "D. Paragraph D",
                "E. Paragraph E",
                "F. Paragraph F"
              ]
            },
            {
              "num": 19,
              "type": "FILL",
              "text": "Performance stress involves many demands on the athlete, for example, coping with the possible risk of _________ .",
              "answer": "injury",
              "explanation": "The text confirms this: \"These demands include the high level of physical and mental effort required to succeed, and also the athlete's concerns about the difficulty of the event, their chance of succeeding, and any potential dangers such as injury.\"",
              "location": "Passage 2",
              "instruction": "Questions 19-22<br/>Complete the sentences below.<br/>Choose ONE WORD ONLY from the passage for each answer.<br/>Write your answers in boxes 19-22 on your answer sheet."
            },
            {
              "num": 20,
              "type": "FILL",
              "text": "Cortisol can cause tennis players to produce fewer good _________ .",
              "answer": "serves",
              "explanation": "The text confirms this: \"In tennis players, cortisol has been associated with more unsuccessful serves and greater anxiety.\"",
              "location": "Passage 2",
              "instruction": "Questions 19-22<br/>Complete the sentences below.<br/>Choose ONE WORD ONLY from the passage for each answer.<br/>Write your answers in boxes 19-22 on your answer sheet."
            },
            {
              "num": 21,
              "type": "FILL",
              "text": "Psychologists can help athletes to view their physiological responses as the effect of a positive feeling such as _________ .",
              "answer": "excitement",
              "explanation": "The text confirms this: \"Though the young player had been doing well in the tournament, she began having difficulty regulating her breathing and heart rate during a match, which she later attributed to 'the accumulation of the excitement and the buzz'.\"",
              "location": "Passage 2",
              "instruction": "Questions 19-22<br/>Complete the sentences below.<br/>Choose ONE WORD ONLY from the passage for each answer.<br/>Write your answers in boxes 19-22 on your answer sheet."
            },
            {
              "num": 22,
              "type": "FILL",
              "text": "_________ is an example of a psychological technique which can reduce an athlete's stress responses.",
              "answer": "Visualisation",
              "explanation": "The text confirms this: \"Developing psychological skills, such as visualisation, can also help decrease physiological responses to threat.\"",
              "location": "Passage 2",
              "instruction": "Questions 19-22<br/>Complete the sentences below.<br/>Choose ONE WORD ONLY from the passage for each answer.<br/>Write your answers in boxes 19-22 on your answer sheet."
            },
            {
              "num": 23,
              "type": "MCQ",
              "text": "Write the correct letters in boxes 23 and 24 on your answer sheet.",
              "answer": "B",
              "explanation": "The text confirms this: \"A It isn't easy being a professional athlete.\"",
              "location": "Passage 2",
              "instruction": "Questions 23 and 24<br/>Choose TWO letters, A-E.<br/>Write the correct letters in boxes 23 and 24 on your answer sheet.<br/>Reading<br/>Which TWO facts about Emma Raducanu's withdrawal from the Wimbledon tournament<br/>are mentioned in the text?<br/>A the stage at which she dropped out of the tournament<br/>B symptoms of her performance stress at the tournament<br/>C measures which she had taken to manage her stress levels<br/>D aspects of the Wimbledon tournament which increased her stress levels<br/>E reactions to her social media posts about her experience at Wimbledon",
              "options": [
                "A. the stage at which she dropped out of the tournament",
                "B. symptoms of her performance stress at the tournament",
                "C. measures which she had taken to manage her stress levels",
                "D. aspects of the Wimbledon tournament which increased her stress levels",
                "E. reactions to her social media posts about her experience at Wimbledon"
              ]
            },
            {
              "num": 24,
              "type": "MCQ",
              "text": "Write the correct letters in boxes 23 and 24 on your answer sheet.",
              "answer": "D",
              "explanation": "The text confirms this: \"Not only are the physical demands greater than most people could handle, athletes also face intense psychological pressure during competition.\"",
              "location": "Passage 2",
              "instruction": "Questions 23 and 24<br/>Choose TWO letters, A-E.<br/>Write the correct letters in boxes 23 and 24 on your answer sheet.<br/>Reading<br/>Which TWO facts about Emma Raducanu's withdrawal from the Wimbledon tournament<br/>are mentioned in the text?<br/>A the stage at which she dropped out of the tournament<br/>B symptoms of her performance stress at the tournament<br/>C measures which she had taken to manage her stress levels<br/>D aspects of the Wimbledon tournament which increased her stress levels<br/>E reactions to her social media posts about her experience at Wimbledon",
              "options": [
                "A. the stage at which she dropped out of the tournament",
                "B. symptoms of her performance stress at the tournament",
                "C. measures which she had taken to manage her stress levels",
                "D. aspects of the Wimbledon tournament which increased her stress levels",
                "E. reactions to her social media posts about her experience at Wimbledon"
              ]
            },
            {
              "num": 25,
              "type": "MCQ",
              "text": "the correct letters in boxes 25 and 26 on your answer sheet.",
              "answer": "A",
              "explanation": "The text confirms this: \"A It isn't easy being a professional athlete.\"",
              "location": "Passage 2",
              "instruction": "Questions 25 and 26<br/>Choose TWO letters, A-E.<br/>Write<br/>the correct letters in boxes 25 and 26 on your answer sheet.<br/>Which TWO facts about anxiety are mentioned in Paragraph E of the text?<br/>A the factors which determine how severe it may be<br/>B how long it takes for its effects to become apparent<br/>C which of its symptoms is most frequently encountered<br/>D the types of athletes who are most likely to suffer from it<br/>E the harm that can result if athletes experience it too often",
              "options": [
                "A. the factors which determine how severe it may be",
                "B. how long it takes for its effects to become apparent",
                "C. which of its symptoms is most frequently encountered",
                "D. the types of athletes who are most likely to suffer from it",
                "E. the harm that can result if athletes experience it too often"
              ]
            },
            {
              "num": 26,
              "type": "MCQ",
              "text": "the correct letters in boxes 25 and 26 on your answer sheet.",
              "answer": "E",
              "explanation": "The text confirms this: \"A It isn't easy being a professional athlete.\"",
              "location": "Passage 2",
              "instruction": "Questions 25 and 26<br/>Choose TWO letters, A-E.<br/>Write<br/>the correct letters in boxes 25 and 26 on your answer sheet.<br/>Which TWO facts about anxiety are mentioned in Paragraph E of the text?<br/>A the factors which determine how severe it may be<br/>B how long it takes for its effects to become apparent<br/>C which of its symptoms is most frequently encountered<br/>D the types of athletes who are most likely to suffer from it<br/>E the harm that can result if athletes experience it too often",
              "options": [
                "A. the factors which determine how severe it may be",
                "B. how long it takes for its effects to become apparent",
                "C. which of its symptoms is most frequently encountered",
                "D. the types of athletes who are most likely to suffer from it",
                "E. the harm that can result if athletes experience it too often"
              ]
            }
          ]
        },
        {
          "title": "An inquiry into the existence of the gifted child",
          "text": "<h1>An inquiry into the existence of the gifted child</h1>\n<p>Let us start by looking at a modern 'genius', Maryam Mirzakhani, who died in 2017. Mirzakhani was the first female holder of the prestigious Fields Medal — a record that she retained at the time of her death. Maryam Mirzakhani is regarded as unique in the field of mathematics because of this achievement. However, maths held little appeal for her as a child, and in fact her performance was below average until she was intrigued by a difficult puzzle that one of her siblings showed her.</p>\n<p>Later, as a professional mathematician, she had an inquiring mind and proved herself to be determined when things did not go smoothly. She said she got the greatest satisfaction from making ground-breaking discoveries and in fact she was responsible for some extremely innovative mathematical studies. Her success has raised questions about the nature of talent: are some children born 'gifted', or is success the result of hard work and opportunity?</p>\n<p>Many people who ended up winning prestigious intellectual prizes only reached an average standard when young. In childhood, Einstein was slow to talk as a baby. He failed the general part of the entry test to Zurich Polytechnic — though he did pass the maths and physics section — and was not considered a particularly promising student. This suggests that early performance is not a reliable predictor of future success, and that some children develop their talents later in life.</p>\n<p>It is difficult to reach agreement on whether some children are actually born gifted. Some psychologists argue that certain children possess innate cognitive advantages, such as superior memory or spatial reasoning, that allow them to learn faster and perform at a higher level. Others, however, argue that environment and practice are the key factors, and that anyone can achieve high standards with the right support.</p>\n<p>Einstein's failures as a young man were not due to lack of ability or confidence but to his independent mind and dislike of authority. He preferred to study on his own, focusing on topics that interested him rather than the official curriculum. This independent approach allowed him to develop the radical ideas that would revolutionise physics, but it also made him an unpopular student and delayed his academic career.</p>\n<p>Einstein was not upset by the public's view of his life's work. In fact, he was amused by the fame and attention he received, and often used his public platform to advocate for peace, civil rights, and education. He did not put his success down to the speed at which he dealt with scientific questions. Instead, he attributed it to his curiosity and persistence: \"It's not that I'm so smart, it's just that I stay with problems longer.\"</p>\n<p>What does Eyre believe is needed for children to equal 'gifted' standards? Deborah Eyre, a former director of the National Academy for Gifted and Talented Youth, argues that most children can reach high levels of academic achievement if they are taught the cognitive characteristics of high performers — curiosity, persistence and hard work, for example — an approach Eyre calls 'high performance learning'. This requires the development of a spirit of inquiry towards their studies.</p>\n<p>What is the result of Ericsson's research? Anders Ericsson, a professor of psychology at Florida State University, conducted research showing that being born with a special gift is not the key factor in becoming an expert. Instead, he argued that 'deliberate practice' — structured, demanding work focused on improving performance — is the key. His research suggests that 10,000 hours of relevant and demanding work can create an expert in almost any field.</p>\n<p>In the penultimate paragraph, it is stated that the key to some deprived children's success is the guidance of someone who recognises the benefits of learning. This could be a teacher, a mentor, or a parent who encourages the child, provides resources, and helps them navigate the educational system. Without this guidance, even the most talented children from poor backgrounds are unlikely to succeed.</p>\n<p>Bloom's outstanding people had worked very hard and consistently at something they had become highly devoted to. Benjamin Bloom, an American educational psychologist, studied world-class pianists, athletes, and mathematicians, and found that they all had received strong support from their families and had engaged in years of intensive practice. This confirms that talent is not just an innate trait but a process that must be nurtured over time.</p>",
          "questions": [
            {
              "num": 27,
              "type": "MCQ",
              "text": "Write the correct letter, A-K, in boxes 27-32 on your answer sheet.",
              "answer": "H",
              "explanation": "The text confirms this: \"An inquiry into the existence of the gifted child Let us start by looking at a modern 'genius', Maryam Mirzakhani, who died at the early age of 40.\"",
              "location": "Passage 3",
              "instruction": "Questions 27-32<br/>Complete the summary using the list of phrases, A-K, below.<br/>Write the correct letter, A-K, in boxes 27-32 on your answer sheet.<br/>Maryam Mirzakhani<br/>Maryam Mirzakhani is regarded as 27 ........................................... in the field of mathematics<br/>because she was the only female holder of the prestigious Fields Medal -<br/>a record that she retained at the time of her death. However, maths held little",
              "options": [
                "A. appeal",
                "B. determined",
                "C. intrigued",
                "D. single",
                "E. achievement",
                "F. devoted",
                "G. involved",
                "H. unique",
                "I. innovative",
                "J. satisfaction",
                "K. intent"
              ]
            },
            {
              "num": 28,
              "type": "MCQ",
              "text": "........................................... for her as a child and in fact her performance was below average until she was 29 ........................................... by a difficult puzzle that one of her siblings showed her. Later, as a professional mathematician, she had an inquiring mind and proved herself to be 30 ........................................... when things did not go smoothly. She said she got the greatest 31 ........................................... from making ground-breaking discoveries and in fact she was responsible for some extremely 32 ......................................... .. mathematical studies.",
              "answer": "A",
              "explanation": "The text confirms this: \"An inquiry into the existence of the gifted child Let us start by looking at a modern 'genius', Maryam Mirzakhani, who died at the early age of 40.\"",
              "location": "Passage 3",
              "instruction": "Questions 27-32<br/>Complete the summary using the list of phrases, A-K, below.<br/>Write the correct letter, A-K, in boxes 27-32 on your answer sheet.<br/>Maryam Mirzakhani<br/>Maryam Mirzakhani is regarded as 27 ........................................... in the field of mathematics<br/>because she was the only female holder of the prestigious Fields Medal -<br/>a record that she retained at the time of her death. However, maths held little",
              "options": [
                "A. appeal",
                "B. determined",
                "C. intrigued",
                "D. single",
                "E. achievement",
                "F. devoted",
                "G. involved",
                "H. unique",
                "I. innovative",
                "J. satisfaction",
                "K. intent"
              ]
            },
            {
              "num": 29,
              "type": "MCQ",
              "text": "average until she was 29 _________ by a difficult puzzle that one of her",
              "answer": "C",
              "explanation": "The text confirms this: \"An inquiry into the existence of the gifted child Let us start by looking at a modern 'genius', Maryam Mirzakhani, who died at the early age of 40.\"",
              "location": "Passage 3",
              "instruction": "Questions 27-32<br/>Complete the summary using the list of phrases, A-K, below.<br/>Write the correct letter, A-K, in boxes 27-32 on your answer sheet.<br/>Maryam Mirzakhani<br/>Maryam Mirzakhani is regarded as 27 ........................................... in the field of mathematics<br/>because she was the only female holder of the prestigious Fields Medal -<br/>a record that she retained at the time of her death. However, maths held little",
              "options": [
                "A. appeal",
                "B. determined",
                "C. intrigued",
                "D. single",
                "E. achievement",
                "F. devoted",
                "G. involved",
                "H. unique",
                "I. innovative",
                "J. satisfaction",
                "K. intent"
              ]
            },
            {
              "num": 30,
              "type": "MCQ",
              "text": "herself to be 30 _________ when things did not go smoothly. She said she",
              "answer": "B",
              "explanation": "The text confirms this: \"An inquiry into the existence of the gifted child Let us start by looking at a modern 'genius', Maryam Mirzakhani, who died at the early age of 40.\"",
              "location": "Passage 3",
              "instruction": "Questions 27-32<br/>Complete the summary using the list of phrases, A-K, below.<br/>Write the correct letter, A-K, in boxes 27-32 on your answer sheet.<br/>Maryam Mirzakhani<br/>Maryam Mirzakhani is regarded as 27 ........................................... in the field of mathematics<br/>because she was the only female holder of the prestigious Fields Medal -<br/>a record that she retained at the time of her death. However, maths held little",
              "options": [
                "A. appeal",
                "B. determined",
                "C. intrigued",
                "D. single",
                "E. achievement",
                "F. devoted",
                "G. involved",
                "H. unique",
                "I. innovative",
                "J. satisfaction",
                "K. intent"
              ]
            },
            {
              "num": 31,
              "type": "MCQ",
              "text": "got the greatest 31 _________ from making ground-breaking discoveries",
              "answer": "J",
              "explanation": "The text confirms this: \"'Of course, the most rewarding part is the \"Aha\" moment, the excitement or discovery and enjoyment of understanding something new.\"",
              "location": "Passage 3",
              "instruction": "Questions 27-32<br/>Complete the summary using the list of phrases, A-K, below.<br/>Write the correct letter, A-K, in boxes 27-32 on your answer sheet.<br/>Maryam Mirzakhani<br/>Maryam Mirzakhani is regarded as 27 ........................................... in the field of mathematics<br/>because she was the only female holder of the prestigious Fields Medal -<br/>a record that she retained at the time of her death. However, maths held little",
              "options": [
                "A. appeal",
                "B. determined",
                "C. intrigued",
                "D. single",
                "E. achievement",
                "F. devoted",
                "G. involved",
                "H. unique",
                "I. innovative",
                "J. satisfaction",
                "K. intent"
              ]
            },
            {
              "num": 32,
              "type": "MCQ",
              "text": "Write the correct letter, A-K, in boxes 27-32 on your answer sheet.",
              "answer": "I",
              "explanation": "The text confirms this: \"An inquiry into the existence of the gifted child Let us start by looking at a modern 'genius', Maryam Mirzakhani, who died at the early age of 40.\"",
              "location": "Passage 3",
              "instruction": "Questions 27-32<br/>Complete the summary using the list of phrases, A-K, below.<br/>Write the correct letter, A-K, in boxes 27-32 on your answer sheet.<br/>Maryam Mirzakhani<br/>Maryam Mirzakhani is regarded as 27 ........................................... in the field of mathematics<br/>because she was the only female holder of the prestigious Fields Medal -<br/>a record that she retained at the time of her death. However, maths held little",
              "options": [
                "A. appeal",
                "B. determined",
                "C. intrigued",
                "D. single",
                "E. achievement",
                "F. devoted",
                "G. involved",
                "H. unique",
                "I. innovative",
                "J. satisfaction",
                "K. intent"
              ]
            },
            {
              "num": 33,
              "type": "TFNG",
              "text": "Many people who ended up winning prestigious intellectual prizes only reached an average standard when young.",
              "answer": "TRUE",
              "explanation": "The passage confirms that the answer is 'TRUE'.",
              "location": "Passage 3",
              "instruction": "Questions 33-37<br/>Do the following statements agree with the claims of the writer in Reading Passage 3?<br/>In boxes 33-37 on your answer sheet, Write<br/>YES if the statement agrees with the claims of the writer<br/>NO if the statement contradicts the claims of the writer<br/>NOT GIVEN if it is impossible to say what the writer thinks about this",
              "options": [
                "TRUE",
                "FALSE",
                "NOT GIVEN"
              ]
            },
            {
              "num": 34,
              "type": "TFNG",
              "text": "Einstein's failures as a young man were due to his lack of confidence.",
              "answer": "NOT GIVEN",
              "explanation": "The passage confirms that the answer is 'NOT GIVEN'.",
              "location": "Passage 3",
              "instruction": "Questions 33-37<br/>Do the following statements agree with the claims of the writer in Reading Passage 3?<br/>In boxes 33-37 on your answer sheet, Write<br/>YES if the statement agrees with the claims of the writer<br/>NO if the statement contradicts the claims of the writer<br/>NOT GIVEN if it is impossible to say what the writer thinks about this",
              "options": [
                "TRUE",
                "FALSE",
                "NOT GIVEN"
              ]
            },
            {
              "num": 35,
              "type": "TFNG",
              "text": "It is difficult to reach agreement on whether some children are actually born gifted.",
              "answer": "TRUE",
              "explanation": "The passage confirms that the answer is 'TRUE'.",
              "location": "Passage 3",
              "instruction": "Questions 33-37<br/>Do the following statements agree with the claims of the writer in Reading Passage 3?<br/>In boxes 33-37 on your answer sheet, Write<br/>YES if the statement agrees with the claims of the writer<br/>NO if the statement contradicts the claims of the writer<br/>NOT GIVEN if it is impossible to say what the writer thinks about this",
              "options": [
                "TRUE",
                "FALSE",
                "NOT GIVEN"
              ]
            },
            {
              "num": 36,
              "type": "TFNG",
              "text": "Einstein was upset by the public's view of his life's work.",
              "answer": "NOT GIVEN",
              "explanation": "The passage confirms that the answer is 'NOT GIVEN'.",
              "location": "Passage 3",
              "instruction": "Questions 33-37<br/>Do the following statements agree with the claims of the writer in Reading Passage 3?<br/>In boxes 33-37 on your answer sheet, Write<br/>YES if the statement agrees with the claims of the writer<br/>NO if the statement contradicts the claims of the writer<br/>NOT GIVEN if it is impossible to say what the writer thinks about this",
              "options": [
                "TRUE",
                "FALSE",
                "NOT GIVEN"
              ]
            },
            {
              "num": 37,
              "type": "TFNG",
              "text": "Einstein put his success down to the speed at which he dealt with scientific questions.",
              "answer": "FALSE",
              "explanation": "The passage confirms that the answer is 'FALSE'.",
              "location": "Passage 3",
              "instruction": "Questions 33-37<br/>Do the following statements agree with the claims of the writer in Reading Passage 3?<br/>In boxes 33-37 on your answer sheet, Write<br/>YES if the statement agrees with the claims of the writer<br/>NO if the statement contradicts the claims of the writer<br/>NOT GIVEN if it is impossible to say what the writer thinks about this",
              "options": [
                "TRUE",
                "FALSE",
                "NOT GIVEN"
              ]
            },
            {
              "num": 38,
              "type": "MCQ",
              "text": "What does Eyre believe is needed for children to equal 'gifted' standards?",
              "answer": "C",
              "explanation": "The text confirms this: \"An inquiry into the existence of the gifted child Let us start by looking at a modern 'genius', Maryam Mirzakhani, who died at the early age of 40.\"",
              "location": "Passage 3",
              "instruction": "Questions 38-40<br/>Choose the correct letter, A, B, C or D.<br/>Write the correct letter in boxes 38-40 on your answer sheet.",
              "options": [
                "A. strict discipline from the teaching staff",
                "B. assistance from their peers in the classroom",
                "C. the development of a spirit of inquiry towards their studies",
                "D. the determination to surpass everyone else's achievements"
              ]
            },
            {
              "num": 39,
              "type": "MCQ",
              "text": "What is the result of Ericsson's research?",
              "answer": "B",
              "explanation": "The text confirms this: \"An inquiry into the existence of the gifted child Let us start by looking at a modern 'genius', Maryam Mirzakhani, who died at the early age of 40.\"",
              "location": "Passage 3",
              "instruction": "Questions 38-40<br/>Choose the correct letter, A, B, C or D.<br/>Write the correct letter in boxes 38-40 on your answer sheet.",
              "options": [
                "A. Very gifted students do not need to work on improving memory skills.",
                "B. Being born with a special gift is not the key factor in becoming expert.",
                "C. Including time for physical exercise is crucial in raising performance.",
                "D. 10,000 hours of relevant and demanding work will create a genius."
              ]
            },
            {
              "num": 40,
              "type": "MCQ",
              "text": "In the penultimate paragraph, it is stated the key to some deprived children's success is",
              "answer": "D",
              "explanation": "The text confirms this: \"An inquiry into the existence of the gifted child Let us start by looking at a modern 'genius', Maryam Mirzakhani, who died at the early age of 40.\"",
              "location": "Passage 3",
              "instruction": "Questions 38-40<br/>Choose the correct letter, A, B, C or D.<br/>Write the correct letter in boxes 38-40 on your answer sheet.",
              "options": [
                "A. a regular and nourishing diet at home.",
                "B. the loving support of more than one parent.",
                "C. a community which has well-funded facilities for learning.",
                "D. the guidance of someone who recognises the benefits of learning."
              ]
            }
          ]
        }
      ]
    },
    "writing": {
      "task1": {
        "prompt": "The plans below show a harbour in 2000 and how it looks today.",
        "image": "<img src=\"images/writing_t6_p1.png\" class=\"max-w-full h-auto mx-auto rounded-xl shadow-lg border border-white/10 bg-white\" alt=\"Writing Task 1 Graph\" />",
        "modelAnswer": "TASK 1 This is an answer written by a candidate who achieved a Band 6.5 score. The. map& give. the. information about the. improve.me.nt of the. forth Harbour from 2.000 to toda'{­ The. firnt impre.&&ion i& that the. Harbour todai made. u&e. of more. are.a& than in the. pa&t. It c.an be. &e.e.n that the.re. are. &e.ve.ral are.a& that &till &tai the. &ame. todai a& in 2.000. The.&e. inc.lude. the. C.arpar\\:: and the. 'Showe.rn and 1oile.t& whic.h are. loc.ate.d in the. north we.&t of the. map. Howe.ve.r, one. more. 'Showe.r& and Toile.t& are. built be.twe.e.n the. two C.arpar\\:: toda'{- \\3e.&ide.&, the. forth Harbour todai al&o ha& one. more. fa&&e.n9e.r fe.rrie.& whic.h right ne.r-t to the. le.ft of the. e.r-i&tin9 one. from 2.000. More.over, an are.a for C.afi& and &hop& i& adde.d ne.r-t to the. Life.boat one.. Another &i9nific.ant diffe.re.nc.e. i& the. re.loc.ation of the. Marina (private. iac.ht&) and the. fi&hin9 boat& are.a&. 1odai, the. Marina i& move.d down to the. plac.e. of the. old fi&hin9 boat& are.a to have. more. &pac.e. and vic.e.­ ve.rna, the. f i&hin9 boat& are.a i& re.loc.ate.d at the. old Marina are.a. The. la&t notic.e.able. c.han9e. in thi& Harbour i& the. l.on&trudion in the. 'South t-a&t. The. di&u&e.d old C.a&tle. wa& de.&troie.d and a ne.w Hote.1 wa& built the.re. todai and another Hote.\\ I& al&o adde.d in the. -Private. be.ac.h are.a. Overall, e.ve.n that the. harbour &till \\::e.e.p& &ome. are.a& unc.hange.d, the.re. are. mani re.c.on&trudion& and improve.me.nt& for the. forth Harbour toda'{- Here is the examiner's comment: 130 Overall, this is a strong response. The candidate has covered the main features of the changes and has included an overview to summarise the changes, in the first and the last paragraph. The main details are accurate, apart from the addition of [another Hoten in the private beach area. The reader can follow the ideas as they are logically organised. This is due to the linking words [However I Besides I also I Another I Overa1n and cohesive features [existing one I vice-versa], but there are some errors. Vocabulary demonstrates some flexibility [first impression I relocated I noticeable change], but there is also some inaccuracy and repetition. The weakest area, though, is the use of grammatical structures. There is a mix of sentence forms, with some good complex use [made use of I can be seen that I These include . .. which are] but some errors, such as inaccurate use of the plural [one more Showers I boats areas] (because the candidate has copied the plural form from the question) and incorrect verb form [is moved down I has been moved down]. To achieve a higher score, the candidate should present an overview to summarise the main stages, for example: The changes to the harbour between 2000 and now focus on improvements that are targeted towards attracting visitors or tourists to the harbour, and include a new hotel, with private beach, more capacity for the passenger ferries and expanded facilities "
      },
      "task2": {
        "prompt": "The working week should be shorter and workers should have a longer weekend. Do you agree or disagree?",
        "modelAnswer": "TASK 2 This is an answer written by a candidate who achieved a Band 6.0 score. I pe.rr,onalli dir,agre.e. with the. ir,r,ue. whe.the.r the. working daifi r,hould be. one. dai le.55. Bi no me.anr, r,hould we. make. the. we.e.ke.nd thre.e. daifi long. 1he.re. are. two ar,pe.dr, that r,upport mi point of vie.w. firnt of all, now all ove.r the. world are. fac.ing an unpre.c.e.de.nte.d e.c.onomic. re.c.e.r,r,ion c.aur,e.d bi C.OVID- 1q, Mani fac.torie.r, are. forc.e.d to dor,e. and the. r,hopr, r,hut down. 1he. e.c.onomic. lor,r, if> r,ubr,tantial. Ne.ve.rthe.le.r,r,, with the. adve.nt of vac.c.ine., I pe.rc.e.ive. that now pe.ople. c.an 90 bac.k to the.ir work. 1hir, would c.e.rtainli be. c.onduc.ive. to our e.c.onomi- If we. re.duc.e. one. dai from work, e.ve.n jur,t from a we.e.k, it would c.aur,e. re.pe.rc.ur,r,ionr, on our r,oc.ie.t>( in te.rmr, of the. de.ve.lopme.nt of e.c.onomi- �e.c.ondli, I am ur,e.d to do mi le.ir,ure. ac.tivitie.fi in �aturdai and �undai, If the.re. if> one. dai more., I would wonde.r what to do on that dai, and that me.anr, I have. to re.arrange. mi we.e.ke.nd planfi. I think it would be. tiring. Mor,t importantli, I c.ome. to admit that, too r,ome. de.9re.e, I am a workaholic.. I c.annot e.ve.n image. if I am r,e.parate.d from mi favourite. plac.e. - mi offic.e.. It if> the. plac.e. whe.re. I re.tre.at to whe.n I foe.I aniiour, and want to 9e.t rid of e.ve�thin9. Working, inde.e.d, give.fl me a r,e.nr,e. of ac.hie.ve.me.nt and c.onte.ntme.nt. I, the.re.fore., would oppor,e. to the. ide.a of c.uttin9 one. working dai. 1hough r,ome. pe.ople. mai argue. that the.i ne.e.d one. dai more. in the. we.e.k to re.duc.e. the.ir r,tre.r,r, from work, it c.ould be. harmful to our e.c.onomic. growth in thir, harnh time.. f\\lr,o, I be.lie.ve. that mani pe.ople. are ur,e.d to the. c.urre.nt working fiifite.m, whic.h provide.r, two daifi for bre.ak. 1he. r,udde.n c.hange. will make. pe.ople. c.onfur,e.d. Unle.r,r, the. 9ove.rnment e.nac.tr, a c.ompre.he.nr,ive. polic.i for thir, ne.w fiifite.m, I think the. ide.a doe.r, not work, and it would r,ure.li brin9r, c.haor, in our r,oc.ie.t>(. Here is the examiner's comment: In this good response, the candidate presents their opinion at the start, then gives two main points about why the current working week should not change: economic development and the disruption to our existing pattern of a two-day weekend. In the final paragraph, they consider the other side of the argument and people who might like an additional day off. (However, a counter argument is not necessary for this type of question.) Overall, ideas are presented in a clear order, and there is some good use of linking words and expressions [First of all I Nevertheless I Most importantly I Unless]. The response contains some good vocabulary with effective collocation [unprecedented economic recession I conducive to I sense of achievement], and "
      }
    }
  },
  "7": {
    "title": "Cambridge IELTS 19 — Test 3",
    "book": "IELTS 19",
    "listening": {
      "sections": [
        {
          "id": 1,
          "title": "Part 1: Real Practice",
          "description": "Official IELTS 19 Test 3 Listening Part 1.",
          "audio": "audio/IELTS_19_Test_3_Part1.m4a",
          "transcript": "<p><b>LEON:</b> Hi Shannon - how are you settling into your new flat?</p><p><b>SHANNON:</b> Really well, thanks.</p><p><b>LEON:</b> You look like you're going shopping.</p><p><b>SHANNON:</b> Yes, I am. My cousins are coming to stay for a couple of days, and I have to cook</p><p>for them.</p><p><b>LEON:</b> Well, there are plenty of places to buy food in Kite Place - it's the area by</p><p>the harbour. 01</p><p><b>SHANNON:</b> Oh, OK, I'll find that on the map. Thanks.</p><p><b>LEON:</b> What sort of food do you need to get?</p><p><b>SHANNON:</b> Well, neither of them eats meat but they both like fish.</p><p><b>LEON:</b> Well, there's a really good fish market there.</p><p><b>SHANNON:</b> Oh great - where is ii exactly?</p><p><b>LEON:</b> It's at the far end of Kite Place, so you have to go over the bridge and then it's on Q2</p><p>the right.</p><p><b>SHANNON:</b> OK - is it open all day?</p><p><b>LEON:</b> It doesn't close until four, but I'd recommend going earlier than that - ii does run</p><p>out of some things.</p><p><b>SHANNON:</b> Oh, I don't want that to happen.</p><p><b>LEON:</b> As long as you get there by�. you should be fine. It's only 11 now, so plenty Q3</p><p>of time.</p><p><b>SHANNON:</b> Righi.</p><p><b>LEON:</b> Do you need to buy vegetables too?</p><p><b>SHANNON:</b> I do, and I want to avoid all the plastic packaging in the supermarket!</p><p><b>LEON:</b> Well, there's a really nice organic shop there. Now what's it called ... it's the</p><p>name of a flower. I know, it's 'Rose'. Q4</p><p><b>SHANNON:</b> That's a nice name.</p><p><b>LEON:</b> Yeah - it sells vegetables and quite a lot of other stuff.</p><p><b>SHANNON:</b> And where's that?</p><p><b>LEON:</b> Well, as you reach the market, you'll see a big grey building on your left - I think</p><p>it used to be a warehouse. Anyway, now it's a restaurant upstairs, but the ground</p><p>floor has two shops either side of the entrance and it's the one on the left.</p><p><b>SHANNON:</b> That's easy enough.</p><p><b>LEON:</b> You can't miss it - there's also a big sign on the pavement so you can look Q5</p><p>for that.</p><p><b>SHANNON:</b> Fine! I guess if I need anything else, I'll have to go to the supermarket.</p><p><b>LEON:</b> Yeah - you should be able to get everything you need, but there's a minibus that</p><p>goes to the supermarket if you need it. It's� and the number is 289. Q6</p><p><b>SHANNON:</b> Thanks, that's great.</p><p><b>LEON:</b> So what do you need to get at the fish market? The salmon is always very good</p><p>and the shellfish.</p><p><b>SHANNON:</b> I'm going to make a curry, I think, and I need about 12 prawns for that.</p><p><b>LEON:</b> They'll have plenty of those.</p><p><b>SHANNON:</b> OK.</p><p><b>LEON:</b> Have you ever tried samphire? Q7</p><p><b>SHANNON:</b> No - what's that?</p><p><b>LEON:</b> It's a type of seaweed. I just ask for a handful and you fry it in butter. It's delicious!</p><p><b>SHANNON:</b> Oh, I might try that - how do you spell it?</p><p><b>LEON:</b> It's S-A-M-P-H-1-R-E.</p><p><b>SHANNON:</b> Great - it's always good to try something different.</p><p><b>LEON:</b> Yeah.</p><p><b>SHANNON:</b> I'll see what beans they have in the organic shop and I think I'll get something for</p><p>dessert there.</p><p><b>LEON:</b> How about a mango?</p><p><b>SHANNON:</b> I'm not sure - they're not always ripe. I'd prefer a melon - it's bigger too. QB</p><p><b>LEON:</b> Good idea. The owner also sells a lot of spices there that you can put in a curry,</p><p>and things like coconut. Q9</p><p><b>SHANNON:</b> Oh, that's very helpful. I'll have a look.</p><p><b>LEON:</b> No problem.</p><p><b>SHANNON:</b> I know bread doesn't really go with curry but I always like to have some in case.</p><p><b>LEON:</b> As I said - all the bread is home-made and there's lots of variety. I like the brown</p><p>bread myself.</p><p><b>SHANNON:</b> Mm, sounds good.</p><p><b>LEON:</b> They sell other things there too.</p><p><b>SHANNON:</b> Like cakes? I love chocolate cake.</p><p><b>LEON:</b> Well - not that, but they have a whole range of tarts and the best are the</p><p>strawberry ones.</p><p><b>SHANNON:</b> Perfect - hopefully I won't even have to go to the supermarket!</p>",
          "questions": [
            {
              "num": 1,
              "type": "FILL",
              "text": "Food stalls are in the area by the _________.",
              "answer": "harbour",
              "explanation": "The transcript states: \"LEON: Well, there are plenty of places to buy food in Kite Place - it's the area by the harbour.\"",
              "instruction": "Questions 1-6<br/>Complete the notes below.<br/>Write ONE WORD ONLY for each answer."
            },
            {
              "num": 2,
              "type": "FILL",
              "text": "• cross the _________ and turn right",
              "answer": "bridge",
              "explanation": "The transcript states: \"LEON: It's at the far end of Kite Place, so you have to go over the bridge and then it's on Q2 the right.\"",
              "instruction": "Questions 1-6<br/>Complete the notes below.<br/>Write ONE WORD ONLY for each answer."
            },
            {
              "num": 3,
              "type": "FILL",
              "text": "• best to go before _________ pm, earlier than closing time",
              "answer": "3.30",
              "explanation": "The transcript confirms the answer is '3.30'.",
              "instruction": "Questions 1-6<br/>Complete the notes below.<br/>Write ONE WORD ONLY for each answer."
            },
            {
              "num": 4,
              "type": "FILL",
              "text": "• called _________'s'",
              "answer": "Rose",
              "explanation": "The transcript states: \"I know, it's 'Rose'.\"",
              "instruction": "Questions 1-6<br/>Complete the notes below.<br/>Write ONE WORD ONLY for each answer."
            },
            {
              "num": 5,
              "type": "FILL",
              "text": "• look for the large _________ outside",
              "answer": "sign",
              "explanation": "The transcript states: \"LEON: You can't miss it - there's also a big sign on the pavement so you can look Q5 for that.\"",
              "instruction": "Questions 1-6<br/>Complete the notes below.<br/>Write ONE WORD ONLY for each answer."
            },
            {
              "num": 6,
              "type": "FILL",
              "text": "The minibus to the supermarket is the _________ one (number 289).",
              "answer": "purple",
              "explanation": "The transcript confirms the answer is 'purple'.",
              "instruction": "Questions 1-6<br/>Complete the notes below.<br/>Write ONE WORD ONLY for each answer."
            },
            {
              "num": 7,
              "type": "FILL",
              "text": "A local vegetable called _________.",
              "answer": "samphire",
              "explanation": "The transcript states: \"LEON: Have you ever tried samphire.\"",
              "instruction": "Questions 7-10<br/>Complete the notes below.<br/>Write ONE WORD ONLY for each answer."
            },
            {
              "num": 8,
              "type": "FILL",
              "text": "Organic shop beans and a _________",
              "answer": "melon",
              "explanation": "The transcript states: \"I'd prefer a melon - it's bigger too.\"",
              "instruction": "Questions 7-10<br/>Complete the notes below.<br/>Write ONE WORD ONLY for each answer."
            },
            {
              "num": 9,
              "type": "FILL",
              "text": "spices and _________",
              "answer": "coconut",
              "explanation": "The transcript states: \"The owner also sells a lot of spices there that you can put in a curry, and things like coconut.\"",
              "instruction": "Questions 7-10<br/>Complete the notes below.<br/>Write ONE WORD ONLY for each answer."
            },
            {
              "num": 10,
              "type": "FILL",
              "text": "The best tarts at the shop are the _________ ones.",
              "answer": "strawberry",
              "explanation": "The transcript states: \"LEON: Well - not that, but they have a whole range of tarts and the best are the strawberry ones.\"",
              "instruction": "Questions 7-10<br/>Complete the notes below.<br/>Write ONE WORD ONLY for each answer."
            }
          ]
        },
        {
          "id": 2,
          "title": "Part 2: Real Practice",
          "description": "Official IELTS 19 Test 3 Listening Part 2.",
          "audio": "audio/IELTS_19_Test_3_Part2.m4a",
          "transcript": "<p><b>PRESENTER:</b> The children's book festival is coming up again soon and here to tell us all about</p><p>it is the festival's organiser, Jenny Morgan. So tell us what we can expect this</p><p>year, Jenny.</p><p><b>JENNY:</b> Well, as usual we've got five days of action-packed exciting events for children,</p><p>with writers coming from all over the country getting involved.</p><p>Just to give you an idea of what's on offer in the workshops, first of all, there's</p><p>a very special event called Superheroes. This is a chance for deaf children to</p><p>share their reading experiences with author Madeleine Gordon, who is herself</p><p>hearing impaired.</p><p>'Just do it' is a practical workshop led by the well-known illustrator Mark Keane.</p><p>He'll take participants on a magical journey to faraway lands with an opportunity</p><p>for aspiring actors to do some role play.</p><p>'Count on me' is an inspiring and entertaining look at the issues of friendship</p><p>for 13-14-year-olds. It looks at some of the friendships described in popular</p><p>books and asks participants to compare these with their own experiences.</p><p>'Speak up' is part of a series of workshops on the subject of mental health. This</p><p>is a creative writing workshop encouraging children to describe situations where</p><p>young people experience loneliness. A recent survey revealed that children can</p><p>be lonely even when they're at home with their families.</p><p>'Jump for joy', as many of you will know, is the heart-warming, best-selling story</p><p>by Nina Karan about a young girl's trip to visit her relatives in India. It recently</p><p>received the gold medal at the Waterford Awards. Nina will get children to</p><p>celebrate the word 'joy' by writing a poem.</p><p>'Sticks and stones' is the beautifully illustrated picture book for young readers</p><p>about a community who organise an African-Caribbean festival to help local</p><p>children learn about their Jamaican roots. This will be a musical event where</p><p>children will have the chance to play steel drums. This is bound to be very</p><p>popular, so please book as soon as possible.</p><p><b>PRESENTER:</b> Thanks Jenny. That all sounds really interesting. I'm just wondering if you have a</p><p>favourite book you could recommend for our readers?</p><p><b>JENNY:</b> It's hard to choose, but Alive and Kicking is definitely worth mentioning. You won't</p><p>have heard of the writer as it's her first book - which is really impressive. It's</p><p>basically the teenage diary of a boy from Somalia who comes to live in the UK.</p><p>Q11</p><p>Q12</p><p>Q13</p><p>Q14</p><p>Q15</p><p>Q16</p><p>It deals with the serious issue of immigration and all the challenges the boy has Q17/18</p><p>to face at school and with the language barrier, etc. Usually, books like this are</p><p>quite sad, but this one actually made me cry with laughter. On each page, there Q17/18</p><p>are simple but hilarious black and white stick drawings of the boy with his friends</p><p>and teachers. At the end of each diary entry, there are new English words the</p><p>boy learns each day, which may help develop some children's vocabulary.</p><p><b>PRESENTER:</b> I think my kids would enjoy that. What about any advice for parents on how to</p><p>encourage their children to read more?</p><p><b>JENNY:</b> Well, this is something I get asked about a lot. There are so many distractions</p><p>for kids these days that it can be hard to find time for reading. One thing I'd say</p><p>is to make time to sit down with your child and share books with them. A lot of</p><p>parents give up reading aloud to their children as soon as they learn to read</p><p>independently, but this is a mistake. It's good to read more advanced books to</p><p>them as it helps to develop their vocabulary. If you don't have time for this, then</p><p>let them listen to audio books. Often, they'll want to read books they've listened</p><p>to for themselves. I think it's a good idea to make a mental note of the type of</p><p>books your child is reading - often they just read the same genre all the time,</p><p>which can get a bit boring. You can introduce new authors and genres to them.</p><p>Librarians should be able to help you with this.</p><p><b>PRESENTER:</b> Well Jenny, I think that's really useful. ...</p>",
          "questions": [
            {
              "num": 11,
              "type": "MCQ",
              "text": "Workshop detail for: Superheroes",
              "answer": "C",
              "explanation": "The transcript states: \"PRESENTER: The children's book festival is coming up again soon and here to tell us all about it is the festival's organiser, Jenny Morgan.\"",
              "instruction": "Questions 11-16<br/>Match the workshops to their descriptions.",
              "options": [
                "A. involves painting and drawing",
                "B. will be led by a prize-winning author",
                "C. is aimed at children with a disability",
                "D. involves a drama activity",
                "E. focuses on new relationships",
                "F. is aimed at a specific age group",
                "G. explores an unhappy feeling",
                "H. raises awareness of a particular culture"
              ]
            },
            {
              "num": 12,
              "type": "MCQ",
              "text": "Workshop detail for: Just do it",
              "answer": "D",
              "explanation": "The transcript states: \"PRESENTER: The children's book festival is coming up again soon and here to tell us all about it is the festival's organiser, Jenny Morgan.\"",
              "instruction": "Questions 11-16<br/>Match the workshops to their descriptions.",
              "options": [
                "A. involves painting and drawing",
                "B. will be led by a prize-winning author",
                "C. is aimed at children with a disability",
                "D. involves a drama activity",
                "E. focuses on new relationships",
                "F. is aimed at a specific age group",
                "G. explores an unhappy feeling",
                "H. raises awareness of a particular culture"
              ]
            },
            {
              "num": 13,
              "type": "MCQ",
              "text": "Workshop detail for: Count on me",
              "answer": "F",
              "explanation": "The transcript states: \"PRESENTER: The children's book festival is coming up again soon and here to tell us all about it is the festival's organiser, Jenny Morgan.\"",
              "instruction": "Questions 11-16<br/>Match the workshops to their descriptions.",
              "options": [
                "A. involves painting and drawing",
                "B. will be led by a prize-winning author",
                "C. is aimed at children with a disability",
                "D. involves a drama activity",
                "E. focuses on new relationships",
                "F. is aimed at a specific age group",
                "G. explores an unhappy feeling",
                "H. raises awareness of a particular culture"
              ]
            },
            {
              "num": 14,
              "type": "MCQ",
              "text": "Workshop detail for: Speak up",
              "answer": "G",
              "explanation": "The transcript states: \"PRESENTER: The children's book festival is coming up again soon and here to tell us all about it is the festival's organiser, Jenny Morgan.\"",
              "instruction": "Questions 11-16<br/>Match the workshops to their descriptions.",
              "options": [
                "A. involves painting and drawing",
                "B. will be led by a prize-winning author",
                "C. is aimed at children with a disability",
                "D. involves a drama activity",
                "E. focuses on new relationships",
                "F. is aimed at a specific age group",
                "G. explores an unhappy feeling",
                "H. raises awareness of a particular culture"
              ]
            },
            {
              "num": 15,
              "type": "MCQ",
              "text": "Workshop detail for: Jump for joy",
              "answer": "B",
              "explanation": "The transcript states: \"PRESENTER: The children's book festival is coming up again soon and here to tell us all about it is the festival's organiser, Jenny Morgan.\"",
              "instruction": "Questions 11-16<br/>Match the workshops to their descriptions.",
              "options": [
                "A. involves painting and drawing",
                "B. will be led by a prize-winning author",
                "C. is aimed at children with a disability",
                "D. involves a drama activity",
                "E. focuses on new relationships",
                "F. is aimed at a specific age group",
                "G. explores an unhappy feeling",
                "H. raises awareness of a particular culture"
              ]
            },
            {
              "num": 16,
              "type": "MCQ",
              "text": "Workshop detail for: Sticks and stones",
              "answer": "H",
              "explanation": "The transcript states: \"PRESENTER: The children's book festival is coming up again soon and here to tell us all about it is the festival's organiser, Jenny Morgan.\"",
              "instruction": "Questions 11-16<br/>Match the workshops to their descriptions.",
              "options": [
                "A. involves painting and drawing",
                "B. will be led by a prize-winning author",
                "C. is aimed at children with a disability",
                "D. involves a drama activity",
                "E. focuses on new relationships",
                "F. is aimed at a specific age group",
                "G. explores an unhappy feeling",
                "H. raises awareness of a particular culture"
              ]
            },
            {
              "num": 17,
              "type": "MCQ",
              "text": "Which TWO reasons does the speaker give for recommending 'Alive and Kicking'? (Select first reason)",
              "answer": "D",
              "explanation": "The transcript states: \"PRESENTER: The children's book festival is coming up again soon and here to tell us all about it is the festival's organiser, Jenny Morgan.\"",
              "instruction": "Questions 17 and 18<br/>Choose TWO letters, A-E.",
              "options": [
                "A. It will appeal to both boys and girls.",
                "B. The author is well known.",
                "C. It has colourful illustrations.",
                "D. It is funny.",
                "E. It deals with an important topic."
              ]
            },
            {
              "num": 18,
              "type": "MCQ",
              "text": "Which TWO reasons does the speaker give for recommending 'Alive and Kicking'? (Select second reason)",
              "answer": "E",
              "explanation": "The transcript states: \"PRESENTER: The children's book festival is coming up again soon and here to tell us all about it is the festival's organiser, Jenny Morgan.\"",
              "instruction": "Questions 17 and 18<br/>Choose TWO letters, A-E.",
              "options": [
                "A. It will appeal to both boys and girls.",
                "B. The author is well known.",
                "C. It has colourful illustrations.",
                "D. It is funny.",
                "E. It deals with an important topic."
              ]
            },
            {
              "num": 19,
              "type": "MCQ",
              "text": "Which TWO pieces of advice does the speaker give to parents about reading? (Select first tip)",
              "answer": "B",
              "explanation": "The transcript states: \"PRESENTER: The children's book festival is coming up again soon and here to tell us all about it is the festival's organiser, Jenny Morgan.\"",
              "instruction": "Questions 19 and 20<br/>Choose TWO letters, A-E.",
              "options": [
                "A. Encourage children to write down new vocabulary.",
                "B. Allow children to listen to audio books.",
                "C. Get recommendations from librarians.",
                "D. Give children a choice about what they read.",
                "E. Only read aloud to children until they can read independently."
              ]
            },
            {
              "num": 20,
              "type": "MCQ",
              "text": "Which TWO pieces of advice does the speaker give to parents about reading? (Select second tip)",
              "answer": "C",
              "explanation": "The transcript states: \"PRESENTER: The children's book festival is coming up again soon and here to tell us all about it is the festival's organiser, Jenny Morgan.\"",
              "instruction": "Questions 19 and 20<br/>Choose TWO letters, A-E.",
              "options": [
                "A. Encourage children to write down new vocabulary.",
                "B. Allow children to listen to audio books.",
                "C. Get recommendations from librarians.",
                "D. Give children a choice about what they read.",
                "E. Only read aloud to children until they can read independently."
              ]
            }
          ]
        },
        {
          "id": 3,
          "title": "Part 3: Real Practice",
          "description": "Official IELTS 19 Test 3 Listening Part 3.",
          "audio": "audio/IELTS_19_Test_3_Part3.m4a",
          "transcript": "<p><b>CLARE:</b> </p><p><b>JAKE:</b> </p><p><b>CLARE:</b> </p><p><b>JAKE:</b> </p><p><b>CLARE:</b> </p><p><b>JAKE:</b> </p><p><b>CLARE:</b> </p><p><b>JAKE:</b> </p><p><b>CLARE:</b> </p><p><b>JAKE:</b> </p><p><b>CLARE:</b> </p><p><b>JAKE:</b> </p><p><b>CLARE:</b> </p><p><b>JAKE:</b> </p><p><b>CLARE:</b> </p><p><b>JAKE:</b> </p><p><b>CLARE:</b> </p><p><b>JAKE:</b> </p><p><b>CLARE:</b> </p><p>Hi Jake. How are you getting on with the practical teaching?</p><p>It's harder than I expected, but I've got some great classes. How about you?</p><p>Not brilliant. I'm really struggling with my Year 12 science class.</p><p>Are they hard to control?</p><p>Well, I don't have discipline problems as such. It's just that they don't seem to</p><p>think that science has anything to do with their lives. It's depressing. They listen</p><p>to what I say, and I gave them a test last week and the results weren't too bad,</p><p>but there's no real engagement.</p><p>Right.</p><p>And as part of my teaching practice, I have to design an experiment for them</p><p>to do. I was wondering about something on the children's diets ... you know,</p><p>asking them to record what they eat and maybe linking it to their state of health.</p><p>Mmm. Let's think. So your methodology would involve the children recording</p><p>what they eat. OK, but you'd also need to have access to the children's medical</p><p>records and I don't think people would be happy about that; confidentiality would</p><p>be an issue. If you could get the right data, the conclusions might be significant,</p><p>but I suspect it's not going to be easy.</p><p>Right.</p><p>Have you thought about doing an experiment using animals?</p><p>Wouldn't that be upsetting for the children?</p><p>Well, the animals don't have to be harmed in any way. It could just be an</p><p>experiment where they're given a certain diet and the effects are observed.</p><p>Would I have to get permission to use animals?</p><p>Yes, you'd have to submit an outline of the experiment and fill in a form, but it's</p><p>quite straightforward.</p><p>But if we found out that, say, a particular diet affects the health of animals,</p><p>the same thing wouldn't necessarily be true for people, would it?</p><p>No that's true, but the findings for any experiment are going to be limited. It's</p><p>inevitable.</p><p>I suppose so. So what animals could I use to investigate the effects of diet?</p><p>Mice?</p><p>Yes. You'd need experimental mice - ones that have been specially bred for</p><p>experiments.</p><p>OK, so what will your experiment be investigating exactly?</p><p>Well, something to do with nutrition. So maybe we could look at food</p><p>supplements ... things like extra iron and extra protein, and their impact on</p><p>health.</p><p>Test 3</p><p>019/20</p><p>019/20</p><p>021</p><p>022</p><p>023</p><p><b>JAKE:</b> </p><p><b>CLARE:</b> </p><p>JAl<E:</p><p><b>CLARE:</b> </p><p><b>JAKE:</b> </p><p><b>CLARE:</b> </p><p><b>CLARE:</b> </p><p><b>JAKE:</b> </p><p><b>CLARE:</b> </p><p>JAl<E:</p><p><b>CLARE:</b> </p><p><b>JAKE:</b> </p><p><b>CLARE:</b> </p><p>JAl<E:</p><p><b>CLARE:</b> </p><p>JAl<E:</p><p><b>CLARE:</b> </p><p><b>JAKE:</b> </p><p><b>CLARE:</b> </p><p><b>JAKE:</b> </p><p><b>CLARE:</b> </p><p>JAl<E:</p><p>Mmm. Thal might be rather broad. Maybe just look at the effects of one</p><p>supplement, like sugar, on the health of the mice?</p><p>In fact, maybe the focus could be on whether mice can control their own diet. 024</p><p>So, what happens when they have access to more sugar, that they don't really</p><p>need?</p><p>Exactly. Do they eat it or do they decide to leave it?</p><p>Great. Then later on, you could do a follow-up experiment adding another variable.</p><p>Like. you could give some of the mice the chance to be more active, running on a 025</p><p>wheel or something, and the others just sit around and don't do much.</p><p>Or I could repeat the experiment but change the type of food I provided ... or</p><p>use mice with a different genetic structure. But I think your idea would be more</p><p>interesting, I might think about that some more.</p><p>So can I talk through a possible procedure for the experiment where mice are</p><p>given a sugar supplement?</p><p>Sure. I did a similar experiment in college actually.</p><p>Great. So how many mice would I need?</p><p>I'd say about 12. And all young ones, not a mixture of old and young. 026</p><p>OK. And I'd need two groups of equal sizes, so six in each group. And how would</p><p>I tell them apart? I suppose I could put some sort of tag on one group ... or just</p><p>mark them in some way? 027</p><p>You could use food colouring, that wouldn't hurt them.</p><p>Perfect. Then each group would go into a separate cage, and one group, let's call</p><p>them group A, would be the control group. So they'd just have ordinary mouse</p><p>food. I suppose you can buy that?</p><p>Yes, it comes in dry pellets.</p><p>And the other group would have the same as the first group, but they'd also have</p><p>the extra sugar.</p><p>Would you just give them straight sugar?</p><p>It might be better lo give them something like cereal with it. 028</p><p>Mmm. Then you'd need to weigh the mice, I should think once a week. And you'd</p><p>need an electronic balance.</p><p>But we can't hold them on the balance, or it'd affect the reading.</p><p>Exactly. So you need something called a weighing chamber to stop the mice from 029</p><p>running away. It sounds complicated, but actually you can just use a plastic box</p><p>with holes in the top.</p><p>OK. So once we've measured the weight gain of each mouse we can work out 030</p><p>the average for each group, as well as the standard deviation. And then see</p><p>where we go from there. Thal sounds cool, I think the students will enjoy it.</p><p>Yes. One thing ...</p>",
          "questions": [
            {
              "num": 21,
              "type": "MCQ",
              "text": "How does Clare feel about the students in her Year 12 science class?",
              "answer": "C",
              "explanation": "The transcript states: \"CLARE: JAKE: CLARE: JAKE: CLARE: JAKE: CLARE: JAKE: CLARE: JAKE: CLARE: JAKE: CLARE: JAKE: CLARE: JAKE: CLARE: JAKE: CLARE: Hi Jake.\"",
              "instruction": "Questions 21-25<br/>Choose the correct letter, A, B or C.<br/>Science experiment for Year 12 students",
              "options": [
                "A. worried that they are not making progress",
                "B. challenged by their poor behaviour in class",
                "C. frustrated at their lack of interest in the subject"
              ]
            },
            {
              "num": 22,
              "type": "MCQ",
              "text": "How does Jake react to Clare's suggestion about an experiment based on children's diet?",
              "answer": "B",
              "explanation": "The transcript states: \"It's harder than I expected, but I've got some great classes.\"",
              "instruction": "Questions 21-25<br/>Choose the correct letter, A, B or C.<br/>Science experiment for Year 12 students",
              "options": [
                "A. He is concerned that the results might not be meaningful.",
                "B. He feels some of the data might be difficult to obtain.",
                "C. He suspects that the conclusions might be upsetting."
              ]
            },
            {
              "num": 23,
              "type": "MCQ",
              "text": "What problem do they agree may be involved in an experiment involving animals?",
              "answer": "A",
              "explanation": "The transcript states: \"CLARE: JAKE: CLARE: JAKE: CLARE: JAKE: CLARE: JAKE: CLARE: JAKE: CLARE: JAKE: CLARE: JAKE: CLARE: JAKE: CLARE: JAKE: CLARE: Hi Jake.\"",
              "instruction": "Questions 21-25<br/>Choose the correct letter, A, B or C.<br/>Science experiment for Year 12 students",
              "options": [
                "A. Any results may not apply to humans.",
                "B. It may be complicated to get permission.",
                "C. Students may not be happy about animal experiments."
              ]
            },
            {
              "num": 24,
              "type": "MCQ",
              "text": "What question do they decide the experiment should address?",
              "answer": "A",
              "explanation": "The transcript states: \"CLARE: JAKE: CLARE: JAKE: CLARE: JAKE: CLARE: JAKE: CLARE: JAKE: CLARE: JAKE: CLARE: JAKE: CLARE: JAKE: CLARE: JAKE: CLARE: Hi Jake.\"",
              "instruction": "Question 24<br/>Choose the correct letter, A, B or C.",
              "options": [
                "A. Are mice capable of controlling their food intake?",
                "B. Does an increase in sugar lead to health problems?",
                "C. How much do supplements of different kinds affect health?"
              ]
            },
            {
              "num": 25,
              "type": "MCQ",
              "text": "Clare might also consider doing another experiment involving",
              "answer": "C",
              "explanation": "The transcript states: \"CLARE: JAKE: CLARE: JAKE: CLARE: JAKE: CLARE: JAKE: CLARE: JAKE: CLARE: JAKE: CLARE: JAKE: CLARE: JAKE: CLARE: JAKE: CLARE: Hi Jake.\"",
              "instruction": "Questions 21-25<br/>Choose the correct letter, A, B or C.<br/>Science experiment for Year 12 students",
              "options": [
                "A. other types of food supplement.",
                "B. different genetic strains of mice.",
                "C. varying amounts of exercise.",
                "I. Nstagram: @Ali.mirzaei.azad"
              ]
            },
            {
              "num": 26,
              "type": "MCQ",
              "text": "Questions 26-30",
              "answer": "C",
              "explanation": "The transcript states: \"CLARE: JAKE: CLARE: JAKE: CLARE: JAKE: CLARE: JAKE: CLARE: JAKE: CLARE: JAKE: CLARE: JAKE: CLARE: JAKE: CLARE: JAKE: CLARE: Hi Jake.\"",
              "instruction": "Questions 26-30.<br/>A size<br/>B escape<br/>C age<br/>water<br/>E cereal<br/>F calculations<br/>G changes<br/>colour",
              "options": [
                "A. Option A",
                "B. Option B",
                "C. Option C",
                "D. Option D",
                "E. Option E",
                "F. Option F",
                "G. Option G",
                "H. Option H"
              ]
            },
            {
              "num": 27,
              "type": "MCQ",
              "text": "Divide the mice into two groups, each with a different 27 _________ .",
              "answer": "H",
              "explanation": "The transcript states: \"CLARE: JAKE: CLARE: JAKE: CLARE: JAKE: CLARE: JAKE: CLARE: JAKE: CLARE: JAKE: CLARE: JAKE: CLARE: JAKE: CLARE: JAKE: CLARE: Hi Jake.\"",
              "instruction": "Questions 26-30.<br/>A size<br/>B escape<br/>C age<br/>water<br/>E cereal<br/>F calculations<br/>G changes<br/>colour",
              "options": [
                "A. Option A",
                "B. Option B",
                "C. Option C",
                "D. Option D",
                "E. Option E",
                "F. Option F",
                "G. Option G",
                "H. Option H"
              ]
            },
            {
              "num": 28,
              "type": "MCQ",
              "text": "Feed group B the same, but also sugar contained in 28 _________ .",
              "answer": "E",
              "explanation": "The transcript states: \"CLARE: JAKE: CLARE: JAKE: CLARE: JAKE: CLARE: JAKE: CLARE: JAKE: CLARE: JAKE: CLARE: JAKE: CLARE: JAKE: CLARE: JAKE: CLARE: Hi Jake.\"",
              "instruction": "Questions 26-30.<br/>A size<br/>B escape<br/>C age<br/>water<br/>E cereal<br/>F calculations<br/>G changes<br/>colour",
              "options": [
                "A. Option A",
                "B. Option B",
                "C. Option C",
                "D. Option D",
                "E. Option E",
                "F. Option F",
                "G. Option G",
                "H. Option H"
              ]
            },
            {
              "num": 29,
              "type": "MCQ",
              "text": "Place them in a weighing chamber to prevent 29 _________ .",
              "answer": "B",
              "explanation": "The transcript states: \"It's harder than I expected, but I've got some great classes.\"",
              "instruction": "Questions 26-30.<br/>A size<br/>B escape<br/>C age<br/>water<br/>E cereal<br/>F calculations<br/>G changes<br/>colour",
              "options": [
                "A. Option A",
                "B. Option B",
                "C. Option C",
                "D. Option D",
                "E. Option E",
                "F. Option F",
                "G. Option G",
                "H. Option H"
              ]
            },
            {
              "num": 30,
              "type": "MCQ",
              "text": "Questions 21-30",
              "answer": "F",
              "explanation": "The transcript states: \"And as part of my teaching practice, I have to design an experiment for them to do.\"",
              "instruction": "Questions 26-30.<br/>A size<br/>B escape<br/>C age<br/>water<br/>E cereal<br/>F calculations<br/>G changes<br/>colour",
              "options": [
                "A. Option A",
                "B. Option B",
                "C. Option C",
                "D. Option D",
                "E. Option E",
                "F. Option F",
                "G. Option G",
                "H. Option H"
              ]
            }
          ]
        },
        {
          "id": 4,
          "title": "Part 4: Real Practice",
          "description": "Official IELTS 19 Test 3 Listening Part 4.",
          "audio": "audio/IELTS_19_Test_3_Part4.m4a",
          "transcript": "<p>In today's lecture, I'm going to be talking about microplaslics.</p><p>Microplastics are tiny pieces of plastic smaller than five millimetres in size. Recently there's</p><p>been a greater awareness that there are large quantities of plastic waste - big and small - in</p><p>the environment. The amount of plastic waste in the oceans has received widespread attention,</p><p>but far less is known about the effects of microplastics in freshwater and particularly in soil.</p><p>Microplastics can enter the environment via a number of different sources. Threads and</p><p>microfibres detach from synthetic clothing every time they're put in a washing machine, and 031</p><p>these find their way into the water system. Other sources include big pieces of plastic waste</p><p>that are already in the environment, and these break down into microscopic particles over</p><p>a period of time. On a larger scale, factory waste is another route, as are tyres which wear</p><p>down as cars, lorries and so on travel along road surfaces.</p><p>We already understand some of the impacts of microplastics from studies involving fish and</p><p>other animals. There is evidence that microplastics harm small creatures in a variety of ways,</p><p>such as by damaging their mouths, or by impairing their ability to feed, for example when 032</p><p>microplastics get lodged in their digestive system.</p><p>Surprisingly perhaps, it is likely that humans consume microplastics, as these have been</p><p>detected in a wide range of food and drink products, including bottled water, as well as in</p><p>water that comes direct from the tap. What's more, salt and many kinds of seafood have also 033</p><p>been found to contain microplastics.</p><p>However, it's important to underline that there is not yet conclusive proof that microplastics</p><p>cause significant harm to people. In many countries, including here in the UK, there is</p><p>legislation which prevents manufacturers from adding plastic microbeads to shower gels. 034</p><p>facial cleansers and toothpaste.</p><p>It is very difficult to accurately estimate the total amount of microplastic particles in the soil</p><p>as they can be hard to detect, but we do know they are carried in the air and deposited in</p><p>the soil by rain. What's more, many of the fertilisers used by both farmers and gardeners 035</p><p>contain microplastics.</p><p>A team from the Anglia Ruskin University in Cambridge has carried out a study of the effects</p><p>of microplastics on the digestive tracts of earthworms. These worms, which live in topsoil, are</p><p>an essential component of our agricultural system. By feeding on soil. they mix nutrients into 036</p><p>it. thereby making it more fertile.</p><p>The researchers set out to discover whether the introduction of microplastics into the soil</p><p>- and the subsequent ingestion of these by earthworms - would impact soil quality and 037</p><p>ultimately inhibit plant growth. The short answer was, yes, it did. After placing three different</p><p>types of microplastic particles into the soil, they planted perennial rye grass. The particles of</p><p>microplastic, which included biodegradable PLA and conventional high-density polyethylene,</p><p>or HOPE, were then ingested by the earthworms in the soil. The result was that the worms 038</p><p>lost weight rapidly. What's more, a lower percentage than normal of the rye grass seeds</p><p>germinated, and the researchers concluded that this was a direct result of the earthworms</p><p>being unable to fulfil their normal role in making soil more fertile. The team also discovered</p><p>that there was an increase in the amount of acid found in the soil, and this was attributed 039</p><p>mainly to the microplastic particles from conventional HOPE plastic.</p><p>The conclusions of the study make for very interesting reading - I've included the reference</p><p>in the notes to give you at the end of this session.</p><p>To summarise, the authors proposed the</p><p>idea that we need to regard soil as we would regard any other process in nature. This means</p><p>we should accept the implications of soil being dependent on decaying and dead matter</p><p>constantly being passed through the bodies of earthworms. That is. when soil becomes</p><p>impoverished by the presence of microplastics, not only ecosystems but also the whole of 040</p><p>society are negatively impacted.</p>",
          "questions": [
            {
              "num": 31,
              "type": "FILL",
              "text": "Threads and microfibres detach from synthetic _________.",
              "answer": "clothing",
              "explanation": "The transcript states: \"Threads and microfibres detach from synthetic clothing every time they're put in a washing machine.\"",
              "instruction": "Questions 31-40<br/>Complete the notes below.<br/>Write ONE WORD ONLY for each answer."
            },
            {
              "num": 32,
              "type": "FILL",
              "text": "They cause injuries to the _________ of wildlife.",
              "answer": "mouths",
              "explanation": "The transcript states: \"There is evidence that microplastics harm small creatures in a variety of ways, such as by damaging their mouths, or by impairing their ability to feed, for example when 032 microplastics get lodged in their digestive system.\"",
              "instruction": "Questions 31-40<br/>Complete the notes below.<br/>Write ONE WORD ONLY for each answer."
            },
            {
              "num": 33,
              "type": "FILL",
              "text": "They enter the food chain, e.g. in water, seafood, and _________.",
              "answer": "salt",
              "explanation": "The transcript states: \"What's more, salt and many kinds of seafood have also 033 been found to contain microplastics.\"",
              "instruction": "Questions 31-40<br/>Complete the notes below.<br/>Write ONE WORD ONLY for each answer."
            },
            {
              "num": 34,
              "type": "FILL",
              "text": "They are present in facial cleansers and _________.",
              "answer": "toothpaste",
              "explanation": "The transcript states: \"034 facial cleansers and toothpaste.\"",
              "instruction": "Questions 31-40<br/>Complete the notes below.<br/>Write ONE WORD ONLY for each answer."
            },
            {
              "num": 35,
              "type": "FILL",
              "text": "Microplastics enter the soil through air, rain, and _________.",
              "answer": "fertilisers",
              "explanation": "The transcript states: \"What's more, many of the fertilisers used by both farmers and gardeners 035 contain microplastics.\"",
              "instruction": "Questions 31-40<br/>Complete the notes below.<br/>Write ONE WORD ONLY for each answer."
            },
            {
              "num": 36,
              "type": "FILL",
              "text": "Earthworms are important because they add _________ to the soil.",
              "answer": "nutrients",
              "explanation": "The transcript states: \"they mix nutrients into 036 it.\"",
              "instruction": "Questions 31-40<br/>Complete the notes below.<br/>Write ONE WORD ONLY for each answer."
            },
            {
              "num": 37,
              "type": "FILL",
              "text": "The study investigated the impact of microplastics on the _________ of plants.",
              "answer": "growth",
              "explanation": "The transcript states: \"The researchers set out to discover whether the introduction of microplastics into the soil - and the subsequent ingestion of these by earthworms - would impact soil quality and 037 ultimately inhibit plant growth.\"",
              "instruction": "Questions 31-40<br/>Complete the notes below.<br/>Write ONE WORD ONLY for each answer."
            },
            {
              "num": 38,
              "type": "FILL",
              "text": "The introduction of microplastics caused _________ loss in earthworms.",
              "answer": "weight",
              "explanation": "The transcript states: \"The result was that the worms 038 lost weight rapidly.\"",
              "instruction": "Questions 31-40<br/>Complete the notes below.<br/>Write ONE WORD ONLY for each answer."
            },
            {
              "num": 39,
              "type": "FILL",
              "text": "There was a rise in the level of _________ in the soil.",
              "answer": "acid",
              "explanation": "The transcript states: \"The team also discovered that there was an increase in the amount of acid found in the soil, and this was attributed 039 mainly to the microplastic particles from conventional HOPE plastic.\"",
              "instruction": "Questions 31-40<br/>Complete the notes below.<br/>Write ONE WORD ONLY for each answer."
            },
            {
              "num": 40,
              "type": "FILL",
              "text": "Changes to soil damage both ecosystems and _________.",
              "answer": "society",
              "explanation": "The transcript states: \"when soil becomes impoverished by the presence of microplastics, not only ecosystems but also the whole of 040 society are negatively impacted.\"",
              "instruction": "Questions 31-40<br/>Complete the notes below.<br/>Write ONE WORD ONLY for each answer."
            }
          ]
        }
      ]
    },
    "reading": {
      "passages": [
        {
          "title": "Archaeologists discover evidence of prehistoric island settlers",
          "text": "<h1>Archaeologists discover evidence of prehistoric island settlers</h1>\n<p>In early April 2019, Dr Ceri Shipton and his colleagues arrived on the island of Obi in the north-east of Indonesia. The island is mountainous and covered with dense rainforest, and it had never been excavated by archaeologists. Shipton's team was hoping to find evidence of early human settlement, and they were not disappointed. Their excavations of rock shelters near the village of Keio revealed a rich record of human occupation dating back forty-five thousand years.</p>\n<p>Archaeological research had taken place on other islands in the region, but Obi had been ignored because of its dense forest and difficult terrain. At the Keio sites, the researchers found the first clam shell axes ever to be discovered in the region, dating from around eleven thousand seven hundred years ago. The axes were made from the thick shells of giant clams, which had been ground and polished to create a sharp edge. These tools would have been crucial for clearing forest and building shelters.</p>\n<p>The size of Obi today is less than it was 18,000 years ago during the last ice age, when sea levels were much lower and many of the surrounding islands were connected. As the ice age ended and sea levels rose, Obi became isolated, forcing its inhabitants to adapt to a changing environment. A change in the climate around 11,700 years ago, which became warmer and wetter, had a major impact on the island, promoting the growth of dense rainforest.</p>\n<p>The researchers believe there is a connection between warmer, wetter weather and a change in the material used to make axes. Before 11,700 years ago, the islanders used stone to make axes, but as the forest became denser, they switched to clam shells, which may have been easier to find and work with. Clam shell axes were also lighter and more durable, making them better suited for cutting down trees and carving wood, perhaps to make canoes for travel between islands.</p>\n<p>Shipton's team were surprised to find evidence of the Obi islanders' hunting practices. The excavations revealed bones of the Cuscus, a tree-dwelling marsupial that is still found on the island. The presence of these bones suggests that the ancient islanders were skilled hunters who were able to catch animals in the forest canopy. It is thought that the Keio shelters were occupied continuously from forty-five thousand years ago until about one thousand years ago, when the inhabitants moved to coastal settlements.</p>\n<p>Excavations of rock shelters inside caves near the village of Keio revealed: axes from around 14,000 years ago, probably used to make canoes; axes made out of shell, dating from around 11,700 years ago; bones of an animal: evidence of what ancient islanders ate; and evidence of travel between islands, such as obsidian (a volcanic glass not found naturally on Obi) and shell beads which resembled ones found on other islands.</p>\n<p>It is thought that from 8,000 years ago, Obi islanders may have switched from hunting to fishing, as sea levels stabilized and coral reefs developed around the island. They had pottery as well as items made out of metal, indicating trade with other regions, and probably took part in the production and sale of spices, which became a major industry in the region in the historical period.</p>",
          "questions": [
            {
              "num": 1,
              "type": "TFNG",
              "text": "Archaeological research had taken place on the island of Obi before the arrival of Ceri Shipton and his colleagues.",
              "answer": "FALSE",
              "explanation": "The passage confirms that the answer is 'FALSE'.",
              "location": "Passage 1",
              "instruction": "Questions 1-7<br/>Do the following statements agree with the information given in Reading Passage 1?<br/>In boxes 1-7 on your answer sheet, Write<br/>TRUE if the statement agrees with the information<br/>FALSE if the statement contradicts the information<br/>NOT GIVEN if there is no information on this",
              "options": [
                "TRUE",
                "FALSE",
                "NOT GIVEN"
              ]
            },
            {
              "num": 2,
              "type": "TFNG",
              "text": "At the Keio sites, the researchers found the first clam shell axes ever to be discovered in the region.",
              "answer": "FALSE",
              "explanation": "The passage confirms that the answer is 'FALSE'.",
              "location": "Passage 1",
              "instruction": "Questions 1-7<br/>Do the following statements agree with the information given in Reading Passage 1?<br/>In boxes 1-7 on your answer sheet, Write<br/>TRUE if the statement agrees with the information<br/>FALSE if the statement contradicts the information<br/>NOT GIVEN if there is no information on this",
              "options": [
                "TRUE",
                "FALSE",
                "NOT GIVEN"
              ]
            },
            {
              "num": 3,
              "type": "TFNG",
              "text": "The size of Obi today is less than it was 18,000 years ago.",
              "answer": "TRUE",
              "explanation": "The passage confirms that the answer is 'TRUE'.",
              "location": "Passage 1",
              "instruction": "Questions 1-7<br/>Do the following statements agree with the information given in Reading Passage 1?<br/>In boxes 1-7 on your answer sheet, Write<br/>TRUE if the statement agrees with the information<br/>FALSE if the statement contradicts the information<br/>NOT GIVEN if there is no information on this",
              "options": [
                "TRUE",
                "FALSE",
                "NOT GIVEN"
              ]
            },
            {
              "num": 4,
              "type": "TFNG",
              "text": "A change in the climate around 11,700 years ago had a greater impact on Obi than on the surrounding islands.",
              "answer": "NOT GIVEN",
              "explanation": "The passage confirms that the answer is 'NOT GIVEN'.",
              "location": "Passage 1",
              "instruction": "Questions 1-7<br/>Do the following statements agree with the information given in Reading Passage 1?<br/>In boxes 1-7 on your answer sheet, Write<br/>TRUE if the statement agrees with the information<br/>FALSE if the statement contradicts the information<br/>NOT GIVEN if there is no information on this",
              "options": [
                "TRUE",
                "FALSE",
                "NOT GIVEN"
              ]
            },
            {
              "num": 5,
              "type": "TFNG",
              "text": "The researchers believe there is a connection between warmer, wetter weather and a change in the material used to make axes.",
              "answer": "TRUE",
              "explanation": "The passage confirms that the answer is 'TRUE'.",
              "location": "Passage 1",
              "instruction": "Questions 1-7<br/>Do the following statements agree with the information given in Reading Passage 1?<br/>In boxes 1-7 on your answer sheet, Write<br/>TRUE if the statement agrees with the information<br/>FALSE if the statement contradicts the information<br/>NOT GIVEN if there is no information on this",
              "options": [
                "TRUE",
                "FALSE",
                "NOT GIVEN"
              ]
            },
            {
              "num": 6,
              "type": "TFNG",
              "text": "Shipton's team were surprised to find evidence of the Obi islanders' hunting practices.",
              "answer": "NOT GIVEN",
              "explanation": "The passage confirms that the answer is 'NOT GIVEN'.",
              "location": "Passage 1",
              "instruction": "Questions 1-7<br/>Do the following statements agree with the information given in Reading Passage 1?<br/>In boxes 1-7 on your answer sheet, Write<br/>TRUE if the statement agrees with the information<br/>FALSE if the statement contradicts the information<br/>NOT GIVEN if there is no information on this",
              "options": [
                "TRUE",
                "FALSE",
                "NOT GIVEN"
              ]
            },
            {
              "num": 7,
              "type": "TFNG",
              "text": "It is thought that the Keio shelters were occupied continuously until about",
              "answer": "FALSE",
              "explanation": "The passage confirms that the answer is 'FALSE'.",
              "location": "Passage 1",
              "instruction": "Questions 1-7<br/>Do the following statements agree with the information given in Reading Passage 1?<br/>In boxes 1-7 on your answer sheet, Write<br/>TRUE if the statement agrees with the information<br/>FALSE if the statement contradicts the information<br/>NOT GIVEN if there is no information on this",
              "options": [
                "TRUE",
                "FALSE",
                "NOT GIVEN"
              ]
            },
            {
              "num": 8,
              "type": "FILL",
              "text": "Excavations of rock shelters inside _________ near the village of Keio revealed:",
              "answer": "caves",
              "explanation": "The text confirms this: \"Just inland from the village of Keio on Obi's northern coast, Shipton and his colleagues found two caves containing prehistoric rock shelters that were suitable for excavation.\"",
              "location": "Passage 1",
              "instruction": "Questions 8-13<br/>Complete the notes below.<br/>Choose ONE WORD ONLY from the passage for each answer.<br/>Write your answers in boxes 8-13 on your answer sheet.<br/>Archaeological findings on Obi<br/>Excavations of rock shelters inside 8 ........................................... near the village of<br/>Keio revealed:<br/>• axes from around 14,000 years ago, probably used to make canoes<br/>Reading<br/>• axes made out of 9 ........................................... , dating from around 11,700 years ago"
            },
            {
              "num": 9,
              "type": "FILL",
              "text": "• axes made out of _________ _________ , dating from around 11,700 years ago",
              "answer": "stone",
              "explanation": "The text confirms this: \"It also seemed likely that these islands were crucial 'stepping stones' on humans' island-hopping voyages through this region millennia ago.\"",
              "location": "Passage 1",
              "instruction": "Questions 8-13<br/>Complete the notes below.<br/>Choose ONE WORD ONLY from the passage for each answer.<br/>Write your answers in boxes 8-13 on your answer sheet.<br/>Archaeological findings on Obi<br/>Excavations of rock shelters inside 8 ........................................... near the village of<br/>Keio revealed:<br/>• axes from around 14,000 years ago, probably used to make canoes<br/>Reading<br/>• axes made out of 9 ........................................... , dating from around 11,700 years ago"
            },
            {
              "num": 10,
              "type": "FILL",
              "text": "• mainly hunted possum-like creatures, judging by _________ found in the caves",
              "answer": "bones",
              "explanation": "The text confirms this: \"Judging by the bones which the researchers unearthed in the Keio caves, people living there mainly hunted the Rothschild's cuscus, a possum-like creature that still lives on Obi today.\"",
              "location": "Passage 1",
              "instruction": "Questions 8-13<br/>Complete the notes below.<br/>Choose ONE WORD ONLY from the passage for each answer.<br/>Write your answers in boxes 8-13 on your answer sheet.<br/>Archaeological findings on Obi<br/>Excavations of rock shelters inside 8 ........................................... near the village of<br/>Keio revealed:<br/>• axes from around 14,000 years ago, probably used to make canoes<br/>Reading<br/>• axes made out of 9 ........................................... , dating from around 11,700 years ago"
            },
            {
              "num": 11,
              "type": "FILL",
              "text": "• evidence of _________ which resembled ones found on other islands",
              "answer": "beads",
              "explanation": "The text confirms this: \"It also revealed particular types of beads, similar to those previously found on islands in southern Wallacea.\"",
              "location": "Passage 1",
              "instruction": "Questions 8-13<br/>Complete the notes below.<br/>Choose ONE WORD ONLY from the passage for each answer.<br/>Write your answers in boxes 8-13 on your answer sheet.<br/>Archaeological findings on Obi<br/>Excavations of rock shelters inside 8 ........................................... near the village of<br/>Keio revealed:<br/>• axes from around 14,000 years ago, probably used to make canoes<br/>Reading<br/>• axes made out of 9 ........................................... , dating from around 11,700 years ago"
            },
            {
              "num": 12,
              "type": "FILL",
              "text": "• had _________ _________ as well as items made out of metal",
              "answer": "pottery",
              "explanation": "The text confirms this: \"Whatever the reason for the departure, there is no evidence for use of the Keio shelters after this time, until about 1,000 years ago, when they were re-occupied by people who owned pottery as well as items made out of gold and silver.\"",
              "location": "Passage 1",
              "instruction": "Questions 8-13<br/>Complete the notes below.<br/>Choose ONE WORD ONLY from the passage for each answer.<br/>Write your answers in boxes 8-13 on your answer sheet.<br/>Archaeological findings on Obi<br/>Excavations of rock shelters inside 8 ........................................... near the village of<br/>Keio revealed:<br/>• axes from around 14,000 years ago, probably used to make canoes<br/>Reading<br/>• axes made out of 9 ........................................... , dating from around 11,700 years ago"
            },
            {
              "num": 13,
              "type": "FILL",
              "text": "probably took part in the production and sale of _________ .",
              "answer": "spices",
              "explanation": "The text confirms this: \"It seems likely, in view of Obi's location, that this final phase of occupation also saw the Keio shelters used by people involved in the historic trade in spices between the Maluku islands and the rest of the world.\"",
              "location": "Passage 1",
              "instruction": "Questions 8-13<br/>Complete the notes below.<br/>Choose ONE WORD ONLY from the passage for each answer.<br/>Write your answers in boxes 8-13 on your answer sheet.<br/>Archaeological findings on Obi<br/>Excavations of rock shelters inside 8 ........................................... near the village of<br/>Keio revealed:<br/>• axes from around 14,000 years ago, probably used to make canoes<br/>Reading<br/>• axes made out of 9 ........................................... , dating from around 11,700 years ago"
            }
          ]
        },
        {
          "title": "The global importance of wetlands",
          "text": "<h1>The global importance of wetlands</h1>\n<p><b>A</b> Wetlands are areas where water covers the soil, or is present either at or near the surface of the soil, for all or part of the year. They include swamps, marshes, bogs, and fens, and are found on every continent except Antarctica. Wetlands are among the most productive ecosystems in the world, providing essential services such as water purification, flood control, carbon storage, and habitats for thousands of species of plants and animals.</p>\n<p><b>B</b> Throughout history, humans have gathered around wetlands, and their fertile ecosystems have supported many of the world's early civilizations. Wetlands have cultural significance, appearing in mythologies, literature, and art, and providing livelihoods for millions of people who depend on them for fishing, farming, and tourism. But according to the World Wide Fund for Nature (WWFN), half of the world's wetlands have disappeared since 1900 — converted or destroyed for commercial development, drainage schemes and the extraction of minerals and peat.</p>\n<p><b>C</b> Peatlands are a type of wetland that covers only 3% of the Earth's land surface but stores twice as much carbon as all the world's forests combined. Draining peatlands leads to subsidence: the sinking of the Earth's surface, most often caused by the removal of water from the soil. Drained peatlands also begin to release carbon dioxide into the atmosphere instead of storing it, contributing significantly to global warming. Once peatland areas have been cleared, fires are more likely to occur, releasing massive plumes of toxic smoke.</p>\n<p><b>D</b> Clearing peatland forests to make way for oil palm plantations destroys the biodiversity of the local environment. Water is drained out of peatlands through the canals which are created by logging companies. Draining peatlands leads to subsidence, a serious problem which can eventually result in coastal flooding and land loss. In addition, the loss of wetlands reduces the natural water storage capacity of the landscape, making downstream areas more vulnerable to flooding during heavy rains.</p>\n<p><b>E</b> The damage starts when logging companies arrive to clear the trees. Dave Tickner, chief freshwater adviser at the WWFN, argues that communities living in wetland regions must be included in discussions about the future of these areas. Official policies towards wetlands vary from one nation to the next, with some countries offering protection while others encourage conversion. Matthew McCartney, a hydrologist at the International Water Management Institute, notes that people cause harm to wetlands without having any intention to do so, simply by extracting water for agriculture or building dams upstream.</p>\n<p class=\"italic text-xs border-l-2 border-stone-500 pl-3 my-4\">* peat: a brown deposit formed by the partial decomposition of vegetation in wet, acidic conditions, often cut and dried for use as fuel.</p>\n<p class=\"italic text-xs border-l-2 border-stone-500 pl-3 my-4\">* subsidence: the sinking of the Earth's surface, most often caused by the removal of water from the soil.</p>",
          "questions": [
            {
              "num": 14,
              "type": "MCQ",
              "text": "reference to the need to ensure that inhabitants of wetland regions continue to benefit from them",
              "answer": "G",
              "explanation": "The text confirms this: \"But according to the World Wide Fund for Nature (WWFN), half of the world's wetlands have disappeared since 1990 - converted or destroyed for commercial development, drainage schemes and the extraction of minerals and peat\".\"",
              "location": "Passage 2",
              "instruction": "Questions 14-17<br/>Reading Passage 2 has eight paragraphs, A-H.<br/>Which paragraph contains the following information?<br/>Write the correct letter, A-H, in boxes 14-17 on your answer sheet.",
              "options": [
                "A. Paragraph A",
                "B. Paragraph B",
                "C. Paragraph C",
                "D. Paragraph D",
                "E. Paragraph E",
                "F. Paragraph F",
                "G. Paragraph G",
                "H. Paragraph H"
              ]
            },
            {
              "num": 15,
              "type": "MCQ",
              "text": "the proportion of wetlands which have already been lost",
              "answer": "A",
              "explanation": "The text confirms this: \"A Wetlands are areas where water covers the soil, or is present either at or near the surface of the soil, for all or part of the year.\"",
              "location": "Passage 2",
              "instruction": "Questions 14-17<br/>Reading Passage 2 has eight paragraphs, A-H.<br/>Which paragraph contains the following information?<br/>Write the correct letter, A-H, in boxes 14-17 on your answer sheet.",
              "options": [
                "A. Paragraph A",
                "B. Paragraph B",
                "C. Paragraph C",
                "D. Paragraph D",
                "E. Paragraph E",
                "F. Paragraph F",
                "G. Paragraph G",
                "H. Paragraph H"
              ]
            },
            {
              "num": 16,
              "type": "MCQ",
              "text": "reference to the idea that people are beginning to appreciate the value of wetlands",
              "answer": "H",
              "explanation": "The text confirms this: \"A Wetlands are areas where water covers the soil, or is present either at or near the surface of the soil, for all or part of the year.\"",
              "location": "Passage 2",
              "instruction": "Questions 14-17<br/>Reading Passage 2 has eight paragraphs, A-H.<br/>Which paragraph contains the following information?<br/>Write the correct letter, A-H, in boxes 14-17 on your answer sheet.",
              "options": [
                "A. Paragraph A",
                "B. Paragraph B",
                "C. Paragraph C",
                "D. Paragraph D",
                "E. Paragraph E",
                "F. Paragraph F",
                "G. Paragraph G",
                "H. Paragraph H"
              ]
            },
            {
              "num": 17,
              "type": "MCQ",
              "text": "mention of the cultural significance of wetlands",
              "answer": "B",
              "explanation": "The text confirms this: \"But according to the World Wide Fund for Nature (WWFN), half of the world's wetlands have disappeared since 1990 - converted or destroyed for commercial development, drainage schemes and the extraction of minerals and peat\".\"",
              "location": "Passage 2",
              "instruction": "Questions 14-17<br/>Reading Passage 2 has eight paragraphs, A-H.<br/>Which paragraph contains the following information?<br/>Write the correct letter, A-H, in boxes 14-17 on your answer sheet.",
              "options": [
                "A. Paragraph A",
                "B. Paragraph B",
                "C. Paragraph C",
                "D. Paragraph D",
                "E. Paragraph E",
                "F. Paragraph F",
                "G. Paragraph G",
                "H. Paragraph H"
              ]
            },
            {
              "num": 18,
              "type": "FILL",
              "text": "Peatlands which have been drained begin to release _________ instead of storing it.",
              "answer": "carbon",
              "explanation": "The text confirms this: \"When peatlands are drained for cultivation, they become net carbon emillers instead of active carbon stores, and, according lo Marcel Silvius, head ofClimate­ smarl Land-use at WI, this practice causes six per cent of all global carbon emissions.\"",
              "location": "Passage 2",
              "instruction": "Questions 18-22<br/>Complete the sentences below.<br/>Choose ONE WORD ONLY from the passage for each answer.<br/>Write your answers in boxes 18-22 on your answer sheet."
            },
            {
              "num": 19,
              "type": "FILL",
              "text": "Once peatland areas have been cleared, _________ are more likely to occur.",
              "answer": "fires",
              "explanation": "The text confirms this: \"The clearance of peal lands for planting also increases the risk of forest fires, which release huge amounts of CO2.\"",
              "location": "Passage 2",
              "instruction": "Questions 18-22<br/>Complete the sentences below.<br/>Choose ONE WORD ONLY from the passage for each answer.<br/>Write your answers in boxes 18-22 on your answer sheet."
            },
            {
              "num": 20,
              "type": "FILL",
              "text": "Clearing peatland forests to make way for oil palm plantations destroys the _________ of the local environment.",
              "answer": "biodiversity",
              "explanation": "The text confirms this: \"'We're seeing huge peat land forests with extremely high biodiversity value being lost for a few decades of oil palm revenues,' says Silvius.\"",
              "location": "Passage 2",
              "instruction": "Questions 18-22<br/>Complete the sentences below.<br/>Choose ONE WORD ONLY from the passage for each answer.<br/>Write your answers in boxes 18-22 on your answer sheet."
            },
            {
              "num": 21,
              "type": "FILL",
              "text": "Water is drained out of peatlands through the _________ which are created by logging companies.",
              "answer": "ditches",
              "explanation": "The text confirms this: \"They dig ditches lo enter the peat swamps by boat and then float the logs out the same way.\"",
              "location": "Passage 2",
              "instruction": "Questions 18-22<br/>Complete the sentences below.<br/>Choose ONE WORD ONLY from the passage for each answer.<br/>Write your answers in boxes 18-22 on your answer sheet."
            },
            {
              "num": 22,
              "type": "FILL",
              "text": "Draining peatlands leads to _________ : a serious problem which can eventually result in coastal flooding and land loss.",
              "answer": "subsidence",
              "explanation": "The text confirms this: \"Meanwhile, the remainder of the solid matter in the peat starts to move downwards, in a process known as subsidence••.\"",
              "location": "Passage 2",
              "instruction": "Questions 18-22<br/>Complete the sentences below.<br/>Choose ONE WORD ONLY from the passage for each answer.<br/>Write your answers in boxes 18-22 on your answer sheet."
            },
            {
              "num": 23,
              "type": "MCQ",
              "text": "Communities living in wetland regions must be included in discussions about the future of these areas.",
              "answer": "A",
              "explanation": "The text confirms this: \"A Wetlands are areas where water covers the soil, or is present either at or near the surface of the soil, for all or part of the year.\"",
              "location": "Passage 2",
              "instruction": "Questions 23-26<br/>Look at the following statements (Questions 23-26) and the list of experts below.<br/>Match each statement with the correct expert, A-D.<br/>Write the correct letter, A-D, in boxes 23-26 on your answer sheet.",
              "options": [
                "A. Matthew McCartney",
                "B. Pieter van Eijk",
                "C. Marcel Silvius",
                "D. Dave Tickner"
              ]
            },
            {
              "num": 24,
              "type": "MCQ",
              "text": "Official policies towards wetlands vary from one nation to the next.",
              "answer": "C",
              "explanation": "The text confirms this: \"A Wetlands are areas where water covers the soil, or is present either at or near the surface of the soil, for all or part of the year.\"",
              "location": "Passage 2",
              "instruction": "Questions 23-26<br/>Look at the following statements (Questions 23-26) and the list of experts below.<br/>Match each statement with the correct expert, A-D.<br/>Write the correct letter, A-D, in boxes 23-26 on your answer sheet.",
              "options": [
                "A. Matthew McCartney",
                "B. Pieter van Eijk",
                "C. Marcel Silvius",
                "D. Dave Tickner"
              ]
            },
            {
              "num": 25,
              "type": "MCQ",
              "text": "People cause harm to wetlands without having any intention to do so.",
              "answer": "D",
              "explanation": "The text confirms this: \"A Wetlands are areas where water covers the soil, or is present either at or near the surface of the soil, for all or part of the year.\"",
              "location": "Passage 2",
              "instruction": "Questions 23-26<br/>Look at the following statements (Questions 23-26) and the list of experts below.<br/>Match each statement with the correct expert, A-D.<br/>Write the correct letter, A-D, in boxes 23-26 on your answer sheet.",
              "options": [
                "A. Matthew McCartney",
                "B. Pieter van Eijk",
                "C. Marcel Silvius",
                "D. Dave Tickner"
              ]
            },
            {
              "num": 26,
              "type": "MCQ",
              "text": "Initiatives to reverse environmental damage need not be complex. List of Experts",
              "answer": "B",
              "explanation": "The text confirms this: \"But according to the World Wide Fund for Nature (WWFN), half of the world's wetlands have disappeared since 1990 - converted or destroyed for commercial development, drainage schemes and the extraction of minerals and peat\".\"",
              "location": "Passage 2",
              "instruction": "Questions 23-26<br/>Look at the following statements (Questions 23-26) and the list of experts below.<br/>Match each statement with the correct expert, A-D.<br/>Write the correct letter, A-D, in boxes 23-26 on your answer sheet.",
              "options": [
                "A. Matthew McCartney",
                "B. Pieter van Eijk",
                "C. Marcel Silvius",
                "D. Dave Tickner"
              ]
            }
          ]
        },
        {
          "title": "Is the era of artificial speech translation upon us?",
          "text": "<h1>Is the era of artificial speech translation upon us?</h1>\n<p>Once the story of science fiction, technology that enables people to talk using different languages is now here. But how effective is it, and what are the challenges?</p>\n<p>For a conversation, both speakers need to have devices called Pilots (translator earpieces) in their ears. \"We find that while the technology is impressive, there are still significant challenges,\" says a researcher at the Karlsruhe Institute of Technology. The electronic translator is assisted by the repeated content of lectures, allowing it to predict what the speaker will say next and translate it more accurately. However, the system struggles with jokes, slang, and cultural references.</p>\n<p>When referring to The Hitchhiker's Guide to the Galaxy, the writer suggests that the Babel fish was considered desirable at the time, as it allowed instant understanding of any language. But artificial speech translation is a much more complex task. The earpieces must not only translate the words; they must also do so quickly enough to allow natural conversation. What does the writer say about sharing earpieces? The reluctance to do this is understandable, but the technology is improving, and future systems may not require shared hardware.</p>\n<p>Speech translation methods are developing fast in Japan, driven by the need to communicate with tourists and business partners. TV interviews that use translation voiceover methods are successful because translation is immediate, allowing viewers to follow the conversation in real time. However, future translation systems should address people appropriately and have an awareness of good manners, which are crucial in Japanese culture. Users may be able to maintain their local customs as systems do not need to conform to standard practices.</p>\n<p>Language translation systems will be seen as very useful throughout the academic and professional worlds, allowing researchers and professionals to collaborate across language barriers. The overall value of automated translation to family life is yet to be shown, but it could make life more difficult for immigrant families if children refuse to learn their heritage language. Visual aspects of language translation, such as facial expressions and lip movements, are being considered by scientists to improve accuracy.</p>\n<p>International scientists have found English easier to translate into other languages than Latin, which has a more complex grammatical structure. As far as language is concerned, there is a difference between people's social and practical needs. While automated translation can satisfy practical needs — such as ordering food or asking for directions — it cannot replace the social connection that comes from speaking someone else's language.</p>",
          "questions": [
            {
              "num": 27,
              "type": "MCQ",
              "text": "What does the reader learn about the conversation in the first paragraph?",
              "answer": "D",
              "explanation": "The text confirms this: \"Once the st1,(/J of science fiction, technology that enables people to talk using different languages is now here.\"",
              "location": "Passage 3",
              "instruction": "Questions 27-30<br/>Choose the correct letter, A, B, C or D.<br/>Write the correct letter in boxes 27-30 on your answer sheet.",
              "options": [
                "A. The speakers are communicating in different languages.",
                "B. Neither of the speakers is familiar with their environment.",
                "C. The topic of the conversation is difficult for both speakers.",
                "D. Aspects of the conversation are challenging for both speakers."
              ]
            },
            {
              "num": 28,
              "type": "MCQ",
              "text": "What assists the electronic translator during lectures at Karlsruhe Institute of Technology?",
              "answer": "A",
              "explanation": "The text confirms this: \"Once the st1,(/J of science fiction, technology that enables people to talk using different languages is now here.\"",
              "location": "Passage 3",
              "instruction": "Questions 27-30<br/>Choose the correct letter, A, B, C or D.<br/>Write the correct letter in boxes 27-30 on your answer sheet.",
              "options": [
                "A. the repeated content of lectures",
                "B. the students' reading skills",
                "C. the languages used",
                "D. the lecturers' technical ability"
              ]
            },
            {
              "num": 29,
              "type": "MCQ",
              "text": "When referring to The Hitchhil<er's Guide to the Galaxy, the writer suggests that",
              "answer": "C",
              "explanation": "The text confirms this: \"Once the st1,(/J of science fiction, technology that enables people to talk using different languages is now here.\"",
              "location": "Passage 3",
              "instruction": "Questions 27-30<br/>Choose the correct letter, A, B, C or D.<br/>Write the correct letter in boxes 27-30 on your answer sheet.",
              "options": [
                "A. the Babel fish was considered undesirable at the time.",
                "B. this book was not seriously intending to predict the future.",
                "C. artificial speech translation was not a surprising development.",
                "D. some speech translation techniques are better than others."
              ]
            },
            {
              "num": 30,
              "type": "MCQ",
              "text": "What does the writer say about sharing earpieces?",
              "answer": "B",
              "explanation": "The text confirms this: \"Once the st1,(/J of science fiction, technology that enables people to talk using different languages is now here.\"",
              "location": "Passage 3",
              "instruction": "Questions 27-30<br/>Choose the correct letter, A, B, C or D.<br/>Write the correct letter in boxes 27-30 on your answer sheet.",
              "options": [
                "A. It is something people will get used to doing.",
                "B. The reluctance to do this is understandable.",
                "C. The equipment will be unnecessary in the future.",
                "D. It is something few people need to worry about."
              ]
            },
            {
              "num": 31,
              "type": "MCQ",
              "text": "Speech translation methods are developing fast in Japan",
              "answer": "C",
              "explanation": "The text confirms this: \"Once the st1,(/J of science fiction, technology that enables people to talk using different languages is now here.\"",
              "location": "Passage 3",
              "instruction": "Questions 31-34<br/>Complete each sentence with the correct ending, A-F, below.<br/>Write the correct letter, A-F, in boxes 31-34 on your answer sheet.",
              "options": [
                "A. but there are concerns about this.",
                "B. as systems do not need to conform to standard practices.",
                "C. but they are far from perfect.",
                "D. despite the noise issues.",
                "E. because translation is immediate.",
                "F. and have an awareness of good manners."
              ]
            },
            {
              "num": 32,
              "type": "MCQ",
              "text": "TV interviews that use translation voiceover methods are successful",
              "answer": "E",
              "explanation": "The text confirms this: \"Once the st1,(/J of science fiction, technology that enables people to talk using different languages is now here.\"",
              "location": "Passage 3",
              "instruction": "Questions 31-34<br/>Complete each sentence with the correct ending, A-F, below.<br/>Write the correct letter, A-F, in boxes 31-34 on your answer sheet.",
              "options": [
                "A. but there are concerns about this.",
                "B. as systems do not need to conform to standard practices.",
                "C. but they are far from perfect.",
                "D. despite the noise issues.",
                "E. because translation is immediate.",
                "F. and have an awareness of good manners."
              ]
            },
            {
              "num": 33,
              "type": "MCQ",
              "text": "Future translation systems should address people appropriately",
              "answer": "F",
              "explanation": "The text confirms this: \"Once the st1,(/J of science fiction, technology that enables people to talk using different languages is now here.\"",
              "location": "Passage 3",
              "instruction": "Questions 31-34<br/>Complete each sentence with the correct ending, A-F, below.<br/>Write the correct letter, A-F, in boxes 31-34 on your answer sheet.",
              "options": [
                "A. but there are concerns about this.",
                "B. as systems do not need to conform to standard practices.",
                "C. but they are far from perfect.",
                "D. despite the noise issues.",
                "E. because translation is immediate.",
                "F. and have an awareness of good manners."
              ]
            },
            {
              "num": 34,
              "type": "MCQ",
              "text": "Users may be able to maintain their local customs",
              "answer": "B",
              "explanation": "The text confirms this: \"Once the st1,(/J of science fiction, technology that enables people to talk using different languages is now here.\"",
              "location": "Passage 3",
              "instruction": "Questions 31-34<br/>Complete each sentence with the correct ending, A-F, below.<br/>Write the correct letter, A-F, in boxes 31-34 on your answer sheet.",
              "options": [
                "A. but there are concerns about this.",
                "B. as systems do not need to conform to standard practices.",
                "C. but they are far from perfect.",
                "D. despite the noise issues.",
                "E. because translation is immediate.",
                "F. and have an awareness of good manners."
              ]
            },
            {
              "num": 35,
              "type": "TFNG",
              "text": "Language translation systems will be seen as very useful throughout the academic and professional worlds.",
              "answer": "FALSE",
              "explanation": "The passage confirms that the answer is 'FALSE'.",
              "location": "Passage 3",
              "instruction": "Questions 35-40<br/>Do the following statements agree with the views of the writer in Reading Passage 3?<br/>In boxes 35-40 on your answer sheet, Write<br/>YES if the statement agrees with the views of the writer<br/>NO if the statement contradicts the views of the writer<br/>NOT GIVEN if it is impossible to say what the writer thinks about this",
              "options": [
                "TRUE",
                "FALSE",
                "NOT GIVEN"
              ]
            },
            {
              "num": 36,
              "type": "TFNG",
              "text": "The overall value of automated translation to family life is yet to be shown.",
              "answer": "TRUE",
              "explanation": "The passage confirms that the answer is 'TRUE'.",
              "location": "Passage 3",
              "instruction": "Questions 35-40<br/>Do the following statements agree with the views of the writer in Reading Passage 3?<br/>In boxes 35-40 on your answer sheet, Write<br/>YES if the statement agrees with the views of the writer<br/>NO if the statement contradicts the views of the writer<br/>NOT GIVEN if it is impossible to say what the writer thinks about this",
              "options": [
                "TRUE",
                "FALSE",
                "NOT GIVEN"
              ]
            },
            {
              "num": 37,
              "type": "TFNG",
              "text": "Automated translation could make life more difficult for immigrant families.",
              "answer": "FALSE",
              "explanation": "The passage confirms that the answer is 'FALSE'.",
              "location": "Passage 3",
              "instruction": "Questions 35-40<br/>Do the following statements agree with the views of the writer in Reading Passage 3?<br/>In boxes 35-40 on your answer sheet, Write<br/>YES if the statement agrees with the views of the writer<br/>NO if the statement contradicts the views of the writer<br/>NOT GIVEN if it is impossible to say what the writer thinks about this",
              "options": [
                "TRUE",
                "FALSE",
                "NOT GIVEN"
              ]
            },
            {
              "num": 38,
              "type": "TFNG",
              "text": "Visual aspects of language translation are being considered by scientists.",
              "answer": "NOT GIVEN",
              "explanation": "The passage confirms that the answer is 'NOT GIVEN'.",
              "location": "Passage 3",
              "instruction": "Questions 35-40<br/>Do the following statements agree with the views of the writer in Reading Passage 3?<br/>In boxes 35-40 on your answer sheet, Write<br/>YES if the statement agrees with the views of the writer<br/>NO if the statement contradicts the views of the writer<br/>NOT GIVEN if it is impossible to say what the writer thinks about this",
              "options": [
                "TRUE",
                "FALSE",
                "NOT GIVEN"
              ]
            },
            {
              "num": 39,
              "type": "TFNG",
              "text": "International scientists have found English easier to translate into other languages than Latin.",
              "answer": "NOT GIVEN",
              "explanation": "The passage confirms that the answer is 'NOT GIVEN'.",
              "location": "Passage 3",
              "instruction": "Questions 35-40<br/>Do the following statements agree with the views of the writer in Reading Passage 3?<br/>In boxes 35-40 on your answer sheet, Write<br/>YES if the statement agrees with the views of the writer<br/>NO if the statement contradicts the views of the writer<br/>NOT GIVEN if it is impossible to say what the writer thinks about this",
              "options": [
                "TRUE",
                "FALSE",
                "NOT GIVEN"
              ]
            },
            {
              "num": 40,
              "type": "TFNG",
              "text": "As far as language is concerned, there is a difference between people's social and practical needs.",
              "answer": "TRUE",
              "explanation": "The passage confirms that the answer is 'TRUE'.",
              "location": "Passage 3",
              "instruction": "Questions 35-40<br/>Do the following statements agree with the views of the writer in Reading Passage 3?<br/>In boxes 35-40 on your answer sheet, Write<br/>YES if the statement agrees with the views of the writer<br/>NO if the statement contradicts the views of the writer<br/>NOT GIVEN if it is impossible to say what the writer thinks about this",
              "options": [
                "TRUE",
                "FALSE",
                "NOT GIVEN"
              ]
            }
          ]
        }
      ]
    },
    "writing": {
      "task1": {
        "prompt": "The diagram below shows how a biofuel called ethanol is produced.",
        "image": "<img src=\"images/writing_t7_p1.png\" class=\"max-w-full h-auto mx-auto rounded-xl shadow-lg border border-white/10 bg-white\" alt=\"Writing Task 1 Graph\" />",
        "modelAnswer": "TASK 1 This is an answer written by a candidate who achieved a Band 6.5 score. Toe given diagram illustrates the various stages in the process of producing ethanol, a )(ind of biofue-1. Overall, there are about q main phrases in the ethanol production, starting with growing plants and tress, and finishing with suppliing ethanol for transportation and gas mission. At the first stage in the process of mal(ing ethanol, a large number of trees and plants are grown. 1hanl(s to the source of energi from sunlight and carbon dior-ide from humman and transportattin, plants and trees grow up and are have-rested when thei are mature enough . After being c.ollec.ted bi machine, thei are put into another machine where slice them into small pieces to form cellulose. This step is c.all pre-processing. In the following stage, cellulose, are tal(en to a fac.tofi where \"processing\" stage oc.c.urs. $ubsequentli, $ugarf> are er-trac.ted from original cellulose before microbes are added to mal(e, ethanol. It if> then uf.ed as a tupe of fuel for a lot of means of transportation such as cars, trucl(s, airplanes. Finalli, a huge amount of carbon dior-ide which is released into the air become energi for procef>s of \"photof>inthesis\" of plants and treef>. Here is the examiner's comment: This is a strong response. The first short paragraph is an introduction, then the second paragraph contains an overview of the process [starting with growing plants] and [finishing with supplying ethano�. This is sufficient as an overview, but the candidate should also summarise the main stages. The rest of the response presents and highlights the process. Ideas are logically organised and the response follows the order given in the diagram. There is good use of linking words to describe a process [At the first stage I After being I Subsequently] and other linking devices, including reference and substitution [they I then used]. The candidate uses vocabulary well with some flexibility [extracted I photosynthesis], but there are a handful of errors [phrases I phases I tress I trees I humman I human I transportattin I transportation I tupe I type]. These errors do not get in the way of the meaning. Grammatical range is quite broad and there is a variety of complex structures and sentences with multiple clauses. There are a few errors [where slice them I which slices them]. To achieve a higher score, an overview which summarises the main stages should be presented, for example: This cycle for biofuel production involves three main stages: harvesting and preparing plant material for processing, producing ethanol by chemical processing, then using the fuel for transportation, before the cycle begins again "
      },
      "task2": {
        "prompt": "It is important for everyone, including young people, to save money for their future. To what extent do you agree or disagree with this statement?",
        "modelAnswer": "TASK 2 This is an answer written by a candidate who achieved a Band 7.0 score. 'i>aving mone1 for tne future if> alwai5 a ve� good idea. firnt of all mone1 if> 5ometning tnat if> needed in almo5t all area5 in life. Wnetner iOU are 1oung or old 1ou need mone1 to bu1 eve�da1 tning5 like food, dotning, &te. living etl. 1oung people are � often full of entnu5ia5m about I-@. tneir future. Toei are looking forward to tneir firf>t job, to meeting new pe.ople or to getting to know a5 muc.11 of tne world a5 tne1 c.an. Mani tend to live in tne pre5ent rather tnan in tne future 50 tnat tne1 don't alwai5 plan anead. Wnen 'fBbl people get older and 5ettle down tne1 realiz.e tnat bu1ing a nou5e, 5tarting a famili or c.aring for 1our nealtn take5 up a good c.on5iderable amount of mone1 and eve�bod1 wno began 5aving mone1 in 1ounger 1ear5 if> glad to nave done 50. However, 5aving mone.1 if> not alwai5 po55ible when iOtHf'l!.--'t8�- 'i>ome.time5 unfore.5ee.n eY-pen5e5 c.annot be avoide.d, life 5ituation5 are 5udde.nl1 c.nanging or tnere if> never even enough mone1 available even for tne. mo5t nec.e.55a� tning5. io 'i>o now c.ould iOU 5ave. mone.1 for tne future in tni5 c.a5e? In general, iOU nave. to a5k iOUr5elf wnat 1our prioritie5 in life are.. Wnat are tne. tning5 iOU c.nerif>n mo5t? 15 it more. important for 1ou to plan anead or do 1ou prefer to ju5t enjoi tne. moment tnat iou live in? f-ve�bodi na5 to make own c.noic.e.5 and to c.on5ide.r wnat if> realli e55ential for nim or he.me.If. In ani age taking a mome.nt to f re.f\\e.c.t on 1our life and looking bac.k at tne. 6hoil&5 ·tobl tning5 1ou nave alread1 done if> alwa15 a good tning to do. If iOU know iOUr5elf well and \"\" about all tne tning5 tnat re.alli make iOU nappi iOU will be. able. to make. tne rignt dec.i5ion5 in financ.ial i5we5 a5 well a5 I-@. otne.r are.a5 in life. In wnat wai mone.1 plai5 an important role will be ea5i to be found out tnen. 'Pernap5 iOU nee.d le55 tnan iOU firf>t tnougnt iearn ago. Here is the examiner's comment: 134 This is a strong response to the task. In the first paragraph, the candidate makes their view clear, agreeing with the statement that saving money for the future is a good idea. In the next two paragraphs, they present ideas on how saving money is actually quite challenging: young people can [tend to live in the present], so [don't always plan ahead], the cost of housing, starting families and health care can be high, and [unforeseen expenses cannot be avoided]. The rest of the response is about how people can decide how much to spend and how much to save. The last line [Perhaps you need less than you first thought years ago] suggests that saving is not the answer for everyone. The ending gives advice to the reader, rather than summarising the main ideas "
      }
    }
  },
  "8": {
    "title": "Cambridge IELTS 19 — Test 4",
    "book": "IELTS 19",
    "listening": {
      "sections": [
        {
          "id": 1,
          "title": "Part 1: Real Practice",
          "description": "Official IELTS 19 Test 4 Listening Part 1.",
          "audio": "audio/IELTS_19_Test_4_Part1.m4a",
          "transcript": "<p><b>KAEDEN:</b> Hello Charlotte. I'm Kaeden, one of the supervisors. Welcome to the team.</p><p><b>CHARLOTTE:</b> Hi Aiden.</p><p><b>KAEDEN:</b> It's Kaeden. 01</p><p><b>CHARLOTTE:</b> I'm so sorry.</p><p><b>KAEDEN:</b> Don't worry. People often get my name wrong; they never know how to spell it.</p><p>It's K-A-E-D-E-N, in case you ever need to Write it.</p><p><b>CHARLOTTE:</b> I'll try and remember.</p><p><b>KAEDEN:</b> So, there are a few practical things you need to sort out this morning. Then I'll</p><p>show you what you're going to do today.</p><p><b>CHARLOTTE:</b> The email I received said to go to the front desk, to show my letter of</p><p>appointment and pick up my badge.</p><p><b>KAEDEN:</b> You'll need that for the staffroom and other areas of the supermarket where</p><p>shoppers aren't allowed.</p><p>So, after you've finished at the front desk, I'll take you to the staffroom. Put your</p><p>coat and rucksack in one of the lockers there. Take whichever one is free. 02</p><p><b>CHARLOTTE:</b> Will I have a key?</p><p><b>KAEDEN:</b> Yes. Try not to lose ii. At the end of the day, leave it in the door for the next</p><p>person to use.</p><p><b>CHARLOTTE:</b> Will do.</p><p><b>KAEDEN:</b> You also need to go to the HR department to see Tiffany. She's really helpful.</p><p><b>CHARLOTTE:</b> I was told to bring my passport with me. HR need to take a note of the number in it. 03</p><p><b>KAEDEN:</b> That's right. Or you can show your ID card.</p><p><b>CHARLOTTE:</b> I don't have one of those.</p><p><b>KAEDEN:</b> OK. Tiffany will give you a uniform. They have lots in different sizes, so you just 04</p><p>tell her what you need. I won't come with you to HR - I've got to go and sort</p><p>something else out. Problem with a bread slicer.</p><p><b>CHARLOTTE:</b> Is the HR office near the staffroom?</p><p><b>KAEDEN:</b> The staffroom's on the first floor, and HR are a couple of floors above that, on the</p><p>third floor. There's a staircase outside the staffroom. 05</p><p><b>CHARLOTTE:</b> OK.</p><p><b>KAEDEN:</b> When you've finished with HR, come and find me in the bakery section of the</p><p>shop.</p><p><b>CHARLOTTE:</b> I'm looking forward to getting started.</p><p><b>KAEDEN:</b> I'll just give you my phone number, in case you can't find me. Have you got your</p><p>phone there?</p><p><b>CHARLOTTE:</b> Yes ... OK, ready.</p><p><b>KAEDEN:</b> It's oh-four-one-two double-six-five nine-oh-three. 06</p><p><b>CHARLOTTE:</b> OK, done.</p><p>t<AEDEN: So, Charlotte, your tasks today are in the bakery section, on the sushi counter,</p><p>and on the meat and fish counters. The first job is to check sell-by dates on the</p><p>bread and cakes. If any of the dates are today's, put a new price label on the</p><p>packaging.</p><p><b>CHARLOTTE:</b> What if any of the labels are yesterday's dates, or older? Do I throw those</p><p>items away?</p><p><b>KAEDEN:</b> Yes, but that shouldn't happen - we check the stock every day. When something</p><p>Test4</p><p>needs a new price label, put a yellow one on the package, next to the original 07</p><p>price.</p><p>CHARLOTTE'. OK.</p><p><b>KAEDEN:</b> After that, you'll go to the sushi takeaway counter.</p><p><b>CHARLOTTE:</b> Will I be preparing boxes of food?</p><p><b>KAEDEN:</b> For today, you'll just be helping the staff.</p><p><b>CHARLOTTE:</b> Yes, of course.</p><p><b>KAEDEN:</b> You'll see lots of flat cardboard boxes at one end of the counter. Beneath those</p><p>is where we keep the � boxes - we run out of those really quickly, so you QB</p><p>should bring more from the storeroom.</p><p><b>CHARLOTTE:</b> Is that my only task on the sushi counter?</p><p><b>KAEDEN:</b> No. You also need to clean the area where they prepare the dishes. There are</p><p>cloths and bottles of spray by the sink. Oh, and please make sure you clean</p><p>that too.</p><p><b>CHARLOTTE:</b> Sure. That's important, isn't it?</p><p><b>KAEDEN:</b> Absolutely. But you mustn't wash up knives. You have to do some training before</p><p>you're allowed to touch sharp objects.</p><p><b>CHARLOTTE:</b> What should I do if there are any?</p><p><b>KAEDEN:</b> Ask someone to put them in the dishwasher.</p><p><b>CHARLOTTE:</b> OK, thanks. I don't want to get anything wrong.</p><p><b>KAEDEN:</b> Don't worry. You'll be fine. And I'll be around to help.</p><p><b>CHARLOTTE:</b> Right.</p><p><b>KAEDEN:</b> Finally, the meat and fish counters. You need to clean the area where staff serve</p><p>customers, including wiping the weighing scales.</p><p><b>CHARLOTTE:</b> OK. Anything else?</p><p><b>KAEDEN:</b> The fish is laid on ice, but when that starts to melt, you'll need to get more from 09</p><p>the cold-room.</p><p><b>CHARLOTTE:</b> I know the staff on the food counters wear a hat. Will that be the same for me?</p><p><b>KAEDEN:</b> You won't be serving customers directly, so no. But make sure you put on</p><p>thermal gloves when you take anything out of the cold-room. The temperature's Q10</p><p>low enough in there to get frostbite from touching things.</p><p><b>CHARLOTTE:</b> Understood.</p>",
          "questions": [
            {
              "num": 1,
              "type": "FILL",
              "text": "Name of Charlotte's manager: _________.",
              "answer": "Kaeden",
              "explanation": "The transcript states: \"KAEDEN: Hello Charlotte.\"",
              "instruction": "Questions 1-6<br/>Complete the notes below.<br/>Write ONE WORD ONLY for each answer."
            },
            {
              "num": 2,
              "type": "FILL",
              "text": "Use a _________ in the staffroom for personal belongings.",
              "answer": "locker",
              "explanation": "The transcript states: \"Put your coat and rucksack in one of the lockers there.\"",
              "instruction": "Questions 1-6<br/>Complete the notes below.<br/>Write ONE WORD ONLY for each answer."
            },
            {
              "num": 3,
              "type": "FILL",
              "text": "Give HR your _________ number.",
              "answer": "passport",
              "explanation": "The transcript states: \"CHARLOTTE: I was told to bring my passport with me.\"",
              "instruction": "Questions 1-6<br/>Complete the notes below.<br/>Write ONE WORD ONLY for each answer."
            },
            {
              "num": 4,
              "type": "FILL",
              "text": "Collect your _________ from Tiffany.",
              "answer": "uniform",
              "explanation": "The transcript states: \"Tiffany will give you a uniform.\"",
              "instruction": "Questions 1-6<br/>Complete the notes below.<br/>Write ONE WORD ONLY for each answer."
            },
            {
              "num": 5,
              "type": "FILL",
              "text": "HR is located on the _________ floor.",
              "answer": "third",
              "explanation": "The transcript states: \"KAEDEN: The staffroom's on the first floor, and HR are a couple of floors above that, on the third floor.\"",
              "instruction": "Questions 1-6<br/>Complete the notes below.<br/>Write ONE WORD ONLY for each answer."
            },
            {
              "num": 6,
              "type": "FILL",
              "text": "Charlotte's contact number: _________.",
              "answer": "0412 665 903",
              "explanation": "The transcript confirms the answer is '0412 665 903'.",
              "instruction": "Questions 1-6<br/>Complete the notes below.<br/>Write ONE WORD ONLY for each answer."
            },
            {
              "num": 7,
              "type": "FILL",
              "text": "Use _________ labels on items that need a new price.",
              "answer": "yellow",
              "explanation": "The transcript states: \"When something Test4 needs a new price label, put a yellow one on the package, next to the original 07 price.\"",
              "instruction": "Questions 7-10<br/>Complete the table below.<br/>Write ONE WORD ONLY for each answer."
            },
            {
              "num": 8,
              "type": "FILL",
              "text": "Re-stock the sushi takeaway with _________ boxes.",
              "answer": "plastic",
              "explanation": "The transcript confirms the answer is 'plastic'.",
              "instruction": "Questions 7-10<br/>Complete the table below.<br/>Write ONE WORD ONLY for each answer."
            },
            {
              "num": 9,
              "type": "FILL",
              "text": "Collect _________ for the fish from the cold-room.",
              "answer": "ice",
              "explanation": "The transcript states: \"Problem with a bread slicer.\"",
              "instruction": "Questions 7-10<br/>Complete the table below.<br/>Write ONE WORD ONLY for each answer."
            },
            {
              "num": 10,
              "type": "FILL",
              "text": "Must wear special _________ when handling items in the cold-room.",
              "answer": "gloves",
              "explanation": "The transcript states: \"But make sure you put on thermal gloves when you take anything out of the cold-room.\"",
              "instruction": "Questions 7-10<br/>Complete the table below.<br/>Write ONE WORD ONLY for each answer."
            }
          ]
        },
        {
          "id": 2,
          "title": "Part 2: Real Practice",
          "description": "Official IELTS 19 Test 4 Listening Part 2.",
          "audio": "audio/IELTS_19_Test_4_Part2.m4a",
          "transcript": "<p>My name's Liz Fuller and I'm a running coach with Compton Park Runners Club.</p><p>Welcome to my podcast. If you're thinking about taking up running - I'm here to help.</p><p>There are many training programmes available online which aim to help people build up to</p><p>running 5 kilometres. Some of them are great and thousands of people of all ages are taking</p><p>part in 5-kilometre races across the country as a result. People like them because they're easy</p><p>to follow and don't push them too hard. However, they don't work for everyone - especially if 011/12</p><p>you suffer from something like a heart condition or asthma. because they're aimed at people</p><p>with average fitness and running ability. Another thing is that everyone is different - and if you Q11/12</p><p>have any specific questions related to your needs, there's no one to provide any answers.</p><p>I have a couple of simple tips I always give to new runners. I expect you've been told to run</p><p>very slowly until your fitness increases - well, I find that can prevent progress. You should</p><p>run at a speed that feels comfortable, but time yourself and try to run a bit faster each time.</p><p>Listening to music can be very helpful - it takes your mind off things and helps your body get 013/14</p><p>into a rhythm. I'd say that is better than running with a friend - especially as most people are</p><p>competitive and that's not what you want when you're just starting. I don't think the time of</p><p>day is especially important - some people are better in the evening, while others are morning</p><p>people - but you need to be consistent, so aim to train regularly - twice a week is enough to</p><p>begin with.</p><p>······------------·········---------------------·---········· ···----·······-·------------········-·--··-······----------------········-------------------</p><p>New members often say to me that they've been put off running either because they lack</p><p>confidence, or they don't have lime, or they think they dislike running. Ceri, for example, joined</p><p>013/14</p><p>the club two years ago at the age of 40. She'd always enjoyed running at school but wasn't 015</p><p>sure jf she'd be able to do it. She was worried about being left behind and being the slowest</p><p>runner. But she says she was made to feel so welcome she soon forgot all about that.</p><p>James had always hated the idea of running but a friend encouraged him to come along for a 016</p><p>taster session and he hasn't looked back. He never misses a training session despite having</p><p>a really demanding job.</p><p>Leo was worried about having to commit himself to training sessions every week and wasn't 017</p><p>sure he'd be able to fit training into his busy schedule. But after experiencing a lot of stress at</p><p>work he came along to us and gave it a go. Now he says he feels much more relaxed and he</p><p>looks forward to his weekly run.</p><p>Mark is quite typical of our new members. He's never considered himself to be a sporty</p><p>person and it was only when he retired that he decided to take up the challenge of trying</p><p>lo run 5 kilometres. It took him months to find the courage to contact us but felt reassured 018</p><p>immediately as there were other people his age who were only just taking up running for the</p><p>first time.</p><p>My own journey hasn't been easy. I did my first marathon when I was 37, after having had</p><p>two kids. My husband had been running marathons for years, but I never dreamed I'd be</p><p>doing one with him. I managed lo complete ii in four hours, but I felt like giving up halfway 019</p><p>through - ii was only the support of the spectators that kept me going.</p><p>I do think signing up for a race of whatever length is motivating - whether it's 5K or</p><p>25K - because it's good to have something to work towards and it gives you a sense of</p><p>achievement. I did my first 1 OK after only six months, which was certainly very challenging</p><p>and not something I'd necessarily recommend. But after you've been training for a few 020</p><p>weeks, it's worth putting your name down for a 5K - some people find they only need a few</p><p>practice runs before taking part in a race, but I'd give yourself a couple of months at least.</p><p>Well, I hope that's given ...</p>",
          "questions": [
            {
              "num": 11,
              "type": "MCQ",
              "text": "Which TWO problems with some training programmes for new runners does Liz mention? (Select first)",
              "answer": "C",
              "explanation": "The transcript states: \"My name's Liz Fuller and I'm a running coach with Compton Park Runners Club.\"",
              "instruction": "Questions 11 and 12<br/>Choose TWO letters, A-E.",
              "options": [
                "A. There is a risk of serious injury.",
                "B. They are unsuitable for certain age groups.",
                "C. They are unsuitable for people with health issues.",
                "D. It is difficult to stay motivated.",
                "E. There is a lack of individual support."
              ]
            },
            {
              "num": 12,
              "type": "MCQ",
              "text": "Which TWO problems with some training programmes for new runners does Liz mention? (Select second)",
              "answer": "E",
              "explanation": "The transcript states: \"My name's Liz Fuller and I'm a running coach with Compton Park Runners Club.\"",
              "instruction": "Questions 11 and 12<br/>Choose TWO letters, A-E.",
              "options": [
                "A. There is a risk of serious injury.",
                "B. They are unsuitable for certain age groups.",
                "C. They are unsuitable for people with health issues.",
                "D. It is difficult to stay motivated.",
                "E. There is a lack of individual support."
              ]
            },
            {
              "num": 13,
              "type": "MCQ",
              "text": "Which TWO tips does Liz recommend for new runners? (Select first tip)",
              "answer": "A",
              "explanation": "The transcript states: \"My name's Liz Fuller and I'm a running coach with Compton Park Runners Club.\"",
              "instruction": "Questions 13 and 14<br/>Choose TWO letters, A-E.",
              "options": [
                "A. doing two runs a week",
                "B. running in the evening",
                "C. going on runs with a friend",
                "D. listening to music during runs",
                "E. running very slowly"
              ]
            },
            {
              "num": 14,
              "type": "MCQ",
              "text": "Which TWO tips does Liz recommend for new runners? (Select second tip)",
              "answer": "D",
              "explanation": "The transcript states: \"My name's Liz Fuller and I'm a running coach with Compton Park Runners Club.\"",
              "instruction": "Questions 13 and 14<br/>Choose TWO letters, A-E.",
              "options": [
                "A. doing two runs a week",
                "B. running in the evening",
                "C. going on runs with a friend",
                "D. listening to music during runs",
                "E. running very slowly"
              ]
            },
            {
              "num": 15,
              "type": "MCQ",
              "text": "Ceri",
              "answer": "A",
              "explanation": "The transcript states: \"My name's Liz Fuller and I'm a running coach with Compton Park Runners Club.\"",
              "instruction": "Write the correct letter, A, B, or C next to Questions 15-18.<br/>Club members",
              "options": [
                "A. Option A",
                "B. Option B",
                "C. Option C",
                "D. Option D",
                "E. Option E"
              ]
            },
            {
              "num": 16,
              "type": "MCQ",
              "text": "James",
              "answer": "B",
              "explanation": "The transcript states: \"My name's Liz Fuller and I'm a running coach with Compton Park Runners Club.\"",
              "instruction": "Write the correct letter, A, B, or C next to Questions 15-18.<br/>Club members",
              "options": [
                "A. Option A",
                "B. Option B",
                "C. Option C",
                "D. Option D",
                "E. Option E"
              ]
            },
            {
              "num": 17,
              "type": "MCQ",
              "text": "Leo",
              "answer": "C",
              "explanation": "The transcript states: \"My name's Liz Fuller and I'm a running coach with Compton Park Runners Club.\"",
              "instruction": "Write the correct letter, A, B, or C next to Questions 15-18.<br/>Club members",
              "options": [
                "A. Option A",
                "B. Option B",
                "C. Option C",
                "D. Option D",
                "E. Option E"
              ]
            },
            {
              "num": 18,
              "type": "MCQ",
              "text": "Mark",
              "answer": "A",
              "explanation": "The transcript states: \"My name's Liz Fuller and I'm a running coach with Compton Park Runners Club.\"",
              "instruction": "Write the correct letter, A, B, or C next to Questions 15-18.<br/>Club members",
              "options": [
                "A. Option A",
                "B. Option B",
                "C. Option C",
                "D. Option D",
                "E. Option E"
              ]
            },
            {
              "num": 19,
              "type": "MCQ",
              "text": "What does Liz say about running her first marathon?",
              "answer": "C",
              "explanation": "The transcript states: \"My name's Liz Fuller and I'm a running coach with Compton Park Runners Club.\"",
              "instruction": "Questions 19 and 20<br/>Reasons<br/>A a lack of confidence<br/>B a dislike of running<br/>C a lack of time<br/>Choose the correct letter, A, B or C.",
              "options": [
                "A. It had always been her ambition.",
                "B. Her husband persuaded her to do it.",
                "C. She nearly gave up before the end."
              ]
            },
            {
              "num": 20,
              "type": "MCQ",
              "text": "Liz says new runners should sign up for a race",
              "answer": "B",
              "explanation": "The transcript states: \"My name's Liz Fuller and I'm a running coach with Compton Park Runners Club.\"",
              "instruction": "Questions 19 and 20<br/>Reasons<br/>A a lack of confidence<br/>B a dislike of running<br/>C a lack of time<br/>Choose the correct letter, A, B or C.",
              "options": [
                "A. every six months.",
                "B. within a few weeks of taking up running.",
                "C. after completing several practice runs.",
                "I. Nstagram: @Ali.mirzaei.azad"
              ]
            }
          ]
        },
        {
          "id": 3,
          "title": "Part 3: Real Practice",
          "description": "Official IELTS 19 Test 4 Listening Part 3.",
          "audio": "audio/IELTS_19_Test_4_Part3.m4a",
          "transcript": "<p>l<IERAN:</p><p><b>JANE:</b> </p><p>l(IERAN:</p><p><b>JANE:</b> </p><p>l<IERAN:</p><p><b>JANE:</b> </p><p>l<IERAN:</p><p><b>JANE:</b> </p><p>116</p><p>So Jane - you'll be off to Denmark soon to do your work placement.</p><p>Yes, I'm really looking forward to it and I've just started packing up all my books</p><p>to put in storage.</p><p>Well, I hope they don't get spoilt.</p><p>It's OK - my grandfather works in a bookshop and he told me how to pack them.</p><p>Oh, that's helpful.</p><p>He says you have to support the spine otherwise the paper can come away from 021</p><p>the cover.</p><p>Yeah - that's obvious.</p><p>He also told me to pack them {lat in the box not on their side - again because</p><p>they can bend and if you leave them like that for. say, a year, it's quite hard to get</p><p>them back to their normal shape.</p><p><b>KIERAN:</b> </p><p><b>JANE:</b> </p><p><b>KIERAN:</b> </p><p>JANE'.</p><p>KIERAN'.</p><p>JANE'.</p><p>KIERAN'.</p><p><b>JANE:</b> </p><p>KIERAN'.</p><p><b>JANE:</b> </p><p>KIERAN'.</p><p><b>JANE:</b> </p><p><b>KIERAN:</b> </p><p><b>JANE:</b> </p><p>KIERAN'.</p><p>JANE'.</p><p>KIERAN'.</p><p><b>JANE:</b> </p><p>KIERAN'.</p><p><b>JANE:</b> </p><p>KIERAN'.</p><p><b>JANE:</b> </p><p><b>KIERAN:</b> </p><p>Well, it's pretty clear that ruins them, but a lot of people just can't be bothered to</p><p>protect their books.</p><p>He always says it's such a shame that publishers don't use better-quality paper.</p><p>It's the acid in the paper that causes the problem, isn't it?</p><p>Yeah - that's why old books go yellow. You know some of the books my</p><p>grandfather's given me are like that already.</p><p>Oh ...</p><p>Test4</p><p>I should dump them really if they're going to deteriorate further. but I'd feel bad. 022</p><p>They'll always remind me of him. He's quite a collector, you know.</p><p>Well, if they're important to you ...</p><p>Yeah - I'd regret just throwing them away.</p><p>You know, maybe it's because I was taught to treasure books ... but I hate</p><p>seeing students force open the pages - of paperbacks. They press so hard they</p><p>end up breaking the spine.</p><p>I know, but unfortunately, paperbacks aren't designed to last a long time and</p><p>people know that. Hardbacks aren't quite as weak.</p><p>Yeah, they're different, I suppose. But I still don't think people value hardbacks</p><p>like they used to.</p><p>Well, they aren't decorative, are they, like other objects. Plus, nowadays, people</p><p>don't keep them out on shelves as much as they used to.</p><p>That's such a pity. When I visit someone - if they have. say. a colourful book on 023</p><p>a table. it's the first thing I'm drawn to.</p><p>I agree - and book covers can be a work of art in themselves. Some are really</p><p>eye-catching.</p><p>I've always been taught to handle books carefully. If you watch someone take a</p><p>book off a shelf, well, they usually do it wrong.</p><p>Ah, my grandfather says, you should put your hand right over the top of the book ...</p><p>or if you can't do that, pull the other books on the shelf aside so that you can hold</p><p>the whole cover.</p><p>When did you learn all this?</p><p>He watched me pull a heavy book off the shelf when I was small, and it fell on the 024</p><p>floor and broke apart.</p><p>Oh dear!</p><p>I can still remember it!</p><p>You know what I really like?</p><p>What?</p><p>The smell of new books.</p><p><b>JANE:</b> Me too.</p><p>KIERAN'.</p><p><b>JANE:</b> </p><p>KIERAN'.</p><p>JANE'.</p><p>KIERAN'.</p><p>JANE'.</p><p>KIERAN'.</p><p><b>JANE:</b> </p><p><b>KIERAN:</b> </p><p>My parents used to laugh at me when I was a kid because I loved putting books</p><p>up to my nose. Almost as much as reading them!</p><p>New books aren't cheap. though. are they?</p><p>I guess we\"re lucky we can buy them.</p><p>My grandfather stocks second-hand books as well as new ones and they don't</p><p>smell quite as good.</p><p>I\"d love to have a bookshop like your grandfather. What's it like?</p><p>Well, it's quite big - it's got two floors and an attic, and he stocks all kinds of</p><p>books really.</p><p>I guess he treasures things like first editions and other rare books.</p><p>Yeah - you might think he'd keep those in the attic or somewhere.</p><p>... so they\"d be hidden?</p><p>025</p><p><b>JANE:</b> </p><p><b>KIERAN:</b> </p><p><b>JANE:</b> </p><p><b>KIERAN:</b> </p><p><b>JANE:</b> </p><p><b>KIERAN:</b> </p><p><b>JANE:</b> </p><p><b>KIERAN:</b> </p><p><b>JANE:</b> </p><p>l<IERAN:</p><p><b>JANE:</b> </p><p><b>KIERAN:</b> </p><p><b>JANE:</b> </p><p><b>KIERAN:</b> </p><p><b>JANE:</b> </p><p><b>KIERAN:</b> </p><p><b>JANE:</b> </p><p><b>KIERAN:</b> </p><p><b>JANE:</b> </p><p><b>KIERAN:</b> </p><p>Yeah. But he likes people to know that he has them. So, he puts them out in the</p><p>shop but makes sure you need a ladder to get them.</p><p>Right. That would prevent any thefts!</p><p>Uhuh.</p><p>Does he stock books for children?</p><p>He does. He particularly likes to encourage kids to read; he always says that he</p><p>used to sit under the stairs as a child with a pile of books and read them all.</p><p>Is that where he keeps them, then?</p><p>Not exactly - he's got a dedicated area on the ground floor with cushions so</p><p>that parents can enter with their toddlers, go there and spend some lime reading</p><p>to them.</p><p>Oh cool.</p><p>And then there's a place for pushchairs by the front door. And a cafe if anyone</p><p>needs refreshments.</p><p>That's good to know.</p><p>As I said, it's a big shop and there's a storage area out the back as well.</p><p>Oh, what does he keep there? Books he wants to throw away?</p><p>He hardly ever throws anything away - he just leaves unwanted books by the</p><p>front door for customers to take.</p><p>Well, that's very nice.</p><p>Yeah - and books people or institutions have requested, they all go at the</p><p>far end.</p><p>Oh.</p><p>He thinks it's best to keep these out of the main shopping area as they're boxed</p><p>and new.</p><p>Did you get your coursebooks from him?</p><p>Naturally. He stocks books for a lot of the colleges. He used to keep these books</p><p>on the first floor, but now there's a new university in my hometown, he's moved</p><p>them downstairs to attract the students. They're actually part of the coffee shop,</p><p>on low shelves all around it.</p><p>Pretty central then. You'll have to take me there some time!</p>",
          "questions": [
            {
              "num": 21,
              "type": "MCQ",
              "text": "Kieran thinks the packing advice given by Jane's grandfather is",
              "answer": "A",
              "explanation": "The transcript states: \"l JANE: l(IERAN: JANE: l JANE: l JANE: 116 So Jane - you'll be off to Denmark soon to do your work placement.\"",
              "instruction": "Questions 21-25<br/>Choose the correct letter, A, B or C.",
              "options": [
                "A. common sense.",
                "B. hard to follow.",
                "C. over-protective."
              ]
            },
            {
              "num": 22,
              "type": "MCQ",
              "text": "How does Jane feel about the books her grandfather has given her?",
              "answer": "C",
              "explanation": "The transcript states: \"l JANE: l(IERAN: JANE: l JANE: l JANE: 116 So Jane - you'll be off to Denmark soon to do your work placement.\"",
              "instruction": "Questions 21-25<br/>Choose the correct letter, A, B or C.",
              "options": [
                "A. They are not worth keeping.",
                "B. They should go to a collector.",
                "C. They have sentimental value for her."
              ]
            },
            {
              "num": 23,
              "type": "MCQ",
              "text": "Jane and Kieran agree that hardback books should be",
              "answer": "A",
              "explanation": "The transcript states: \"l JANE: l(IERAN: JANE: l JANE: l JANE: 116 So Jane - you'll be off to Denmark soon to do your work placement.\"",
              "instruction": "Questions 21-25<br/>Choose the correct letter, A, B or C.",
              "options": [
                "A. put out on display.",
                "B. given as gifts to visitors.",
                "C. more attractively designed."
              ]
            },
            {
              "num": 24,
              "type": "MCQ",
              "text": "While talking about taking a book from a shelf, Jane",
              "answer": "B",
              "explanation": "The transcript states: \"l JANE: l(IERAN: JANE: l JANE: l JANE: 116 So Jane - you'll be off to Denmark soon to do your work placement.\"",
              "instruction": "Questions 21-25<br/>Choose the correct letter, A, B or C.",
              "options": [
                "A. describes the mistakes other people make doing it.",
                "B. reflects on a significant childhood experience.",
                "C. explains why some books are easier to remove than others."
              ]
            },
            {
              "num": 25,
              "type": "MCQ",
              "text": "What do Jane and Kieran suggest about new books?",
              "answer": "C",
              "explanation": "The transcript states: \"l JANE: l(IERAN: JANE: l JANE: l JANE: 116 So Jane - you'll be off to Denmark soon to do your work placement.\"",
              "instruction": "Questions 21-25<br/>Choose the correct letter, A, B or C.",
              "options": [
                "A. Their parents liked buying them as presents.",
                "B. They would like to buy more of them.",
                "C. Not everyone can afford them.",
                "I. Nstagram: @Ali.mirzaei.azad"
              ]
            },
            {
              "num": 26,
              "type": "MCQ",
              "text": "Location for: Local history books",
              "answer": "D",
              "explanation": "The transcript states: \"l JANE: l(IERAN: JANE: l JANE: l JANE: 116 So Jane - you'll be off to Denmark soon to do your work placement.\"",
              "instruction": "Questions 26-30<br/>Where are the different types of books located in the shop?",
              "options": [
                "A. near the entrance",
                "B. in the attic",
                "C. at the back of the shop",
                "D. on a high shelf",
                "E. near the stairs",
                "F. in a specially designed space",
                "G. within the cafe"
              ]
            },
            {
              "num": 27,
              "type": "MCQ",
              "text": "Location for: Art books",
              "answer": "F",
              "explanation": "The transcript states: \"l JANE: l(IERAN: JANE: l JANE: l JANE: 116 So Jane - you'll be off to Denmark soon to do your work placement.\"",
              "instruction": "Questions 26-30<br/>Where are the different types of books located in the shop?",
              "options": [
                "A. near the entrance",
                "B. in the attic",
                "C. at the back of the shop",
                "D. on a high shelf",
                "E. near the stairs",
                "F. in a specially designed space",
                "G. within the cafe"
              ]
            },
            {
              "num": 28,
              "type": "MCQ",
              "text": "Location for: Cookery books",
              "answer": "A",
              "explanation": "The transcript states: \"l JANE: l(IERAN: JANE: l JANE: l JANE: 116 So Jane - you'll be off to Denmark soon to do your work placement.\"",
              "instruction": "Questions 26-30<br/>Where are the different types of books located in the shop?",
              "options": [
                "A. near the entrance",
                "B. in the attic",
                "C. at the back of the shop",
                "D. on a high shelf",
                "E. near the stairs",
                "F. in a specially designed space",
                "G. within the cafe"
              ]
            },
            {
              "num": 29,
              "type": "MCQ",
              "text": "Location for: Children's books",
              "answer": "C",
              "explanation": "The transcript states: \"l JANE: l(IERAN: JANE: l JANE: l JANE: 116 So Jane - you'll be off to Denmark soon to do your work placement.\"",
              "instruction": "Questions 26-30<br/>Where are the different types of books located in the shop?",
              "options": [
                "A. near the entrance",
                "B. in the attic",
                "C. at the back of the shop",
                "D. on a high shelf",
                "E. near the stairs",
                "F. in a specially designed space",
                "G. within the cafe"
              ]
            },
            {
              "num": 30,
              "type": "MCQ",
              "text": "Location for: Crime fiction books",
              "answer": "G",
              "explanation": "The transcript states: \"Yes, I'm really looking forward to it and I've just started packing up all my books to put in storage.\"",
              "instruction": "Questions 26-30<br/>Where are the different types of books located in the shop?",
              "options": [
                "A. near the entrance",
                "B. in the attic",
                "C. at the back of the shop",
                "D. on a high shelf",
                "E. near the stairs",
                "F. in a specially designed space",
                "G. within the cafe"
              ]
            }
          ]
        },
        {
          "id": 4,
          "title": "Part 4: Real Practice",
          "description": "Official IELTS 19 Test 4 Listening Part 4.",
          "audio": "audio/IELTS_19_Test_4_Part4.m4a",
          "transcript": "<p>Tree planting now dominates political and popular agendas and is often presented as an easy</p><p>answer to the climate crisis, as well as a way for business corporations to offset their carbon</p><p>emissions. But unfortunately, tree planting isn't as straightforward as some people think.</p><p>When the wrong trees are planted in the wrong place, it can do considerably more damage</p><p>than good, failing to help either people or the environment.</p><p>Reforestation projects are currently being undertaken on a huge scale in many countries and</p><p>it's crucial that the right trees are selected. A mix of species should always be planted, typical</p><p>of the local natural forest ecosystem and including rare and endangered species in order</p><p>to create a rich ecosystem. It's important to avoid non-native species that could become</p><p>026</p><p>027</p><p>028</p><p>029</p><p>030</p><p>invasive. Invasive species are a significant contributor to the current global biodiversity crisis 031</p><p>and are often in competition with native species and may threaten their long-term survival.</p><p>Restoring biodiversity that will maximise carbon capture is key when reforesting an area, but</p><p>ideally any reforestation project should have several goals. These could include selecting</p><p>trees that can contribute to wildlife conservation, improve the availability of food for the 032</p><p>local community and maintain the stability of soil systems. Meeting as many of these goals</p><p>as possible, whilst doing no harm to local communities, native ecosystems and vulnerable</p><p>species, is the sign of a highly successful tree-planting scheme. To ensure the survival and</p><p>resilience of a planted forest, it's vital to use tree seeds with appropriate levels of genetic</p><p><b>DIVERSITY:</b> the amount of genetic variation found within a species essential for their survival.</p><p>Test4</p><p>Using seeds with low genetic diversity generally lowers the resilience of restored forests, 033</p><p>which can make them vulnerable to disease and unable to adapt to climate change.</p><p>Choosing the right location for reforestation projects is as important as choosing the right</p><p>trees. Ultimately, the best area for planting trees would be in formerly forested areas that are</p><p>in poor condition. It's better to avoid non-forested landscapes such as natural grasslands,</p><p>savannas or wetlands as these ecosystems already contribute greatly to capturing carbon.</p><p>It would also be advantageous to choose an area where trees could provide other benefits,</p><p>such as recreational spaces. Reforesting areas which are currently exploited for agriculture 034</p><p>should be avoided as this often leads to other areas being deforested.</p><p>Large-scale reforestation projects require careful planning. Making the right decisions about</p><p>where to plant trees depends on having the right information. Haying detailed and up-to-date</p><p>maps identjfyjng high-priority areas for intervention is essential. Drone technology is a useful</p><p>tool in helping to prioritise and monitor areas of degraded forest for restoration. In Brazil, it's</p><p>being used to identify and quantify how parts of the Amazon are being devastated by human</p><p>activities such as rearing cattle and illegal logging.</p><p>A good example of where the right trees were picked to achieve a restored forest is in</p><p>Lampang Province in Northern Thailand. A previously forested site which had been degraded</p><p>through mining was reforested by a cement company together with Chiang Mai University.</p><p>After spreading 60 cm of topsoil, they planted 14 different native tree species which included</p><p>several species of fig. Figs are a keystone species because of the critical role they play in</p><p>maintaining wildlife populations. They are central to tropical reforestation projects as they</p><p>accelerate the speed of the recovery process by attracting animals and birds which act as</p><p>natural seed dispersers. This helps to promote diversity through the healthy regrowth of a</p><p>wide range of plant species. Unlike the majority of fruit trees, figs bear fruit all year round,</p><p>providing a reliable food source for many species. At this site, for example, after only three</p><p>rainy seasons, monkeys started visiting to eat the fig fruits, naturally dispersing seeds</p><p>through defecation.</p><p>Reforestation projects should always aim to make sure that local communities are consulted</p><p>and involved in the decision-making process.</p><p>The restoration of mangrove forests in Madagascar is an example of a project which has</p><p>035</p><p>036</p><p>037</p><p>038</p><p>succeeded in creating real benefits for the community. Destruction of the mangrove forests 039</p><p>had a terrible impact on plant and animal life, and also badly affected the fishing industry,</p><p>which was a major source of employment for local people living in coastal areas. The</p><p>reforestation project involved hiring local people to plant and care for the new mangrove</p><p>trees. Millions of mangrove trees have now been planted which has resulted in the return of</p><p>a healthy aquatic ecosystem. The mangroves also act as a defence against the increased 040</p><p>threat of flooding caused by climate change. What's more, the local economy is more stable</p><p>and thousands more Madagascans are now able to send their children to school.</p><p>One other important point to consider ...</p>",
          "questions": [
            {
              "num": 31,
              "type": "FILL",
              "text": "Invasive species are often in _________ with native species.",
              "answer": "competition",
              "explanation": "The transcript states: \"Invasive species are a significant contributor to the current global biodiversity crisis 031 and are often in competition with native species and may threaten their long-term survival.\"",
              "instruction": "Questions 31-40<br/>Complete the notes below.<br/>Write ONE WORD ONLY for each answer."
            },
            {
              "num": 32,
              "type": "FILL",
              "text": "They can be sources of _________ for local people.",
              "answer": "food",
              "explanation": "The transcript states: \"These could include selecting trees that can contribute to wildlife conservation, improve the availability of food for the 032 local community and maintain the stability of soil systems.\"",
              "instruction": "Questions 31-40<br/>Complete the notes below.<br/>Write ONE WORD ONLY for each answer."
            },
            {
              "num": 33,
              "type": "FILL",
              "text": "Reforestation plays a role in reducing global _________ and climate change.",
              "answer": "disease",
              "explanation": "The transcript states: \"Test4 Using seeds with low genetic diversity generally lowers the resilience of restored forests, 033 which can make them vulnerable to disease and unable to adapt to climate change.\"",
              "instruction": "Questions 31-40<br/>Complete the notes below.<br/>Write ONE WORD ONLY for each answer."
            },
            {
              "num": 34,
              "type": "FILL",
              "text": "Do not select land which is being used for _________.",
              "answer": "agriculture",
              "explanation": "The transcript states: \"Reforesting areas which are currently exploited for agriculture 034 should be avoided as this often leads to other areas being deforested.\"",
              "instruction": "Questions 31-40<br/>Complete the notes below.<br/>Write ONE WORD ONLY for each answer."
            },
            {
              "num": 35,
              "type": "FILL",
              "text": "Base planning decisions on information from accurate _________.",
              "answer": "maps",
              "explanation": "The transcript states: \"Haying detailed and up-to-date maps identjfyjng high-priority areas for intervention is essential.\"",
              "instruction": "Questions 31-40<br/>Complete the notes below.<br/>Write ONE WORD ONLY for each answer."
            },
            {
              "num": 36,
              "type": "FILL",
              "text": "Drones identify areas endangered by illegal logging and keeping _________.",
              "answer": "cattle",
              "explanation": "The transcript states: \"In Brazil, it's being used to identify and quantify how parts of the Amazon are being devastated by human activities such as rearing cattle and illegal logging.\"",
              "instruction": "Questions 31-40<br/>Complete the notes below.<br/>Write ONE WORD ONLY for each answer."
            },
            {
              "num": 37,
              "type": "FILL",
              "text": "Attracting animals increases the _________ of recovery.",
              "answer": "speed",
              "explanation": "The transcript states: \"They are central to tropical reforestation projects as they accelerate the speed of the recovery process by attracting animals and birds which act as natural seed dispersers.\"",
              "instruction": "Questions 31-40<br/>Complete the notes below.<br/>Write ONE WORD ONLY for each answer."
            },
            {
              "num": 38,
              "type": "FILL",
              "text": "Animals such as _________ were soon attracted to the area.",
              "answer": "monkeys",
              "explanation": "The transcript states: \"At this site, for example, after only three rainy seasons, monkeys started visiting to eat the fig fruits, naturally dispersing seeds through defecation.\"",
              "instruction": "Questions 31-40<br/>Complete the notes below.<br/>Write ONE WORD ONLY for each answer."
            },
            {
              "num": 39,
              "type": "FILL",
              "text": "Destruction of mangrove forests made it difficult to make a living from _________.",
              "answer": "fishing",
              "explanation": "The transcript states: \"Destruction of the mangrove forests 039 had a terrible impact on plant and animal life, and also badly affected the fishing industry, which was a major source of employment for local people living in coastal areas.\"",
              "instruction": "Questions 31-40<br/>Complete the notes below.<br/>Write ONE WORD ONLY for each answer."
            },
            {
              "num": 40,
              "type": "FILL",
              "text": "Mangrove reforestation protects against the higher risk of _________.",
              "answer": "flooding",
              "explanation": "The transcript states: \"The mangroves also act as a defence against the increased 040 threat of flooding caused by climate change.\"",
              "instruction": "Questions 31-40<br/>Complete the notes below.<br/>Write ONE WORD ONLY for each answer."
            }
          ]
        }
      ]
    },
    "reading": {
      "passages": [
        {
          "title": "The impact of climate change on butterflies in Britain",
          "text": "<h1>The impact of climate change on butterflies in Britain</h1>\n<p>For more than three decades, scientists have been tracking the effects of climate change on butterflies in Britain. According to conservationists, populations of around two thirds of butterfly species have declined in Britain over the past forty years. The study, published in the journal Nature, analyzed data from thousands of sites across the country, providing the most detailed picture yet of how butterflies are responding to a warming climate.</p>\n<p>The researchers found that while some species have expanded their range northwards, many others are struggling to survive. Caterpillars are eaten by a number of different predators, including birds, wasps, and beetles, and changes in the timing of their emergence can leave them vulnerable. If caterpillars hatch before their food plants are ready, or after their predators have already active, their survival rates plummet.</p>\n<p>Analysing the trends in each variable, the researchers discovered that species with more flexible lifecycles were more likely to adapt better to the changing climate. For example, some butterflies can produce two generations in a single summer if the weather is warm, allowing them to rebuild their numbers after a poor spring. In contrast, species that only produce one generation a year are much more vulnerable to extreme weather events.</p>\n<p>The study also highlighted the importance of habitat conservation. Butterflies that live in diverse, well-connected habitats are much more resilient to climate change than those in isolated pockets of nature. By restoring wildflower meadows, planting hedgerows, and reducing pesticide use, landowners can help to create 'stepping stones' that allow butterflies to move across the landscape in response to changing temperatures.</p>\n<p>Ultimately, the researchers warn that unless greenhouse gas emissions are reduced and habitat conservation is scaled up, many of Britain's most iconic butterfly species could face extinction. The loss of butterflies would have a knock-on effect on the wider ecosystem, as they are important pollinators and a key food source for many birds and mammals. The study serves as a stark reminder of the urgent need to protect biodiversity in the face of climate change.</p>",
          "questions": [
            {
              "num": 1,
              "type": "TFNG",
              "text": "Forty years ago, there were fewer butterflies in Britain than at present.",
              "answer": "FALSE",
              "explanation": "The passage confirms that the answer is 'FALSE'.",
              "location": "Passage 1",
              "instruction": "Questions 1-6<br/>Do the following statements agree with the information given in Reading Passage 1?<br/>In boxes 1-6 on your answer sheet, Write<br/>TRUE if the statement agrees with the information<br/>FALSE if the statement contradicts the information<br/>NOT GIVEN if there is no information on this",
              "options": [
                "TRUE",
                "FALSE",
                "NOT GIVEN"
              ]
            },
            {
              "num": 2,
              "type": "TFNG",
              "text": "Caterpillars are eaten by a number of different predators.",
              "answer": "TRUE",
              "explanation": "The passage confirms that the answer is 'TRUE'.",
              "location": "Passage 1",
              "instruction": "Questions 1-6<br/>Do the following statements agree with the information given in Reading Passage 1?<br/>In boxes 1-6 on your answer sheet, Write<br/>TRUE if the statement agrees with the information<br/>FALSE if the statement contradicts the information<br/>NOT GIVEN if there is no information on this",
              "options": [
                "TRUE",
                "FALSE",
                "NOT GIVEN"
              ]
            },
            {
              "num": 3,
              "type": "TFNG",
              "text": "'Phenology' is a term used to describe a creature's ability to alter the location of a lifecycle event.",
              "answer": "FALSE",
              "explanation": "The passage confirms that the answer is 'FALSE'.",
              "location": "Passage 1",
              "instruction": "Questions 1-6<br/>Do the following statements agree with the information given in Reading Passage 1?<br/>In boxes 1-6 on your answer sheet, Write<br/>TRUE if the statement agrees with the information<br/>FALSE if the statement contradicts the information<br/>NOT GIVEN if there is no information on this",
              "options": [
                "TRUE",
                "FALSE",
                "NOT GIVEN"
              ]
            },
            {
              "num": 4,
              "type": "TFNG",
              "text": "Some species of butterfly have a reduced lifespan due to spring temperature increases.",
              "answer": "NOT GIVEN",
              "explanation": "The passage confirms that the answer is 'NOT GIVEN'.",
              "location": "Passage 1",
              "instruction": "Questions 1-6<br/>Do the following statements agree with the information given in Reading Passage 1?<br/>In boxes 1-6 on your answer sheet, Write<br/>TRUE if the statement agrees with the information<br/>FALSE if the statement contradicts the information<br/>NOT GIVEN if there is no information on this",
              "options": [
                "TRUE",
                "FALSE",
                "NOT GIVEN"
              ]
            },
            {
              "num": 5,
              "type": "TFNG",
              "text": "There is a clear reason for the adaptations that butterflies are making to climate change.",
              "answer": "FALSE",
              "explanation": "The passage confirms that the answer is 'FALSE'.",
              "location": "Passage 1",
              "instruction": "Questions 1-6<br/>Do the following statements agree with the information given in Reading Passage 1?<br/>In boxes 1-6 on your answer sheet, Write<br/>TRUE if the statement agrees with the information<br/>FALSE if the statement contradicts the information<br/>NOT GIVEN if there is no information on this",
              "options": [
                "TRUE",
                "FALSE",
                "NOT GIVEN"
              ]
            },
            {
              "num": 6,
              "type": "TFNG",
              "text": "The data used in the study was taken from the work of amateur butterfly watchers.",
              "answer": "TRUE",
              "explanation": "The passage confirms that the answer is 'TRUE'.",
              "location": "Passage 1",
              "instruction": "Questions 1-6<br/>Do the following statements agree with the information given in Reading Passage 1?<br/>In boxes 1-6 on your answer sheet, Write<br/>TRUE if the statement agrees with the information<br/>FALSE if the statement contradicts the information<br/>NOT GIVEN if there is no information on this",
              "options": [
                "TRUE",
                "FALSE",
                "NOT GIVEN"
              ]
            },
            {
              "num": 7,
              "type": "FILL",
              "text": "For more than three decades, scientists have been tracking the effects of climate change on butterflies in Britain. According to conservationists, populations of around two thirds of butterfly species have declined in Britain over the past _________ years.",
              "answer": "colonies",
              "explanation": "The text confirms this: \"For these species, such as Britain's tiniest butterfly, the dainty Small Blue, whose colonies are up to a hundred strong, some develop into butterflies early in spring, allowing their summer generations to complete another reproductive cycle by autumn so that more population growth occurs.\"",
              "location": "Passage 1",
              "instruction": "Questions 7-13<br/>Complete the notes below.<br/>Choose ONE WORD ONLY from the passage for each answer.<br/>Write your answers in boxes 7-13 on your answer sheet.<br/>Butterflies in the UK<br/>The Small Blue<br/>• lives in large 7 ......................................... ..<br/>• first appears at the start of 8 ......................................... ..<br/>• completes more than one reproductive cycle per year<br/>The High Brown Fritillary<br/>• has one reproductive cycle<br/>Reading<br/>• is considered to be more 9 ........................................... than other species<br/>• its caterpillars occupy a limited range of 10 .......................................... .<br/>The Silver-studded Blue<br/>• is already able to reproduce twice a year in warm areas of 11 .......................................... .<br/>The White Admiral<br/>• is found in 12 ........................................... areas of England<br/>• both climate change and the 13 ........................................... of the caterpillar are possible<br/>reasons for decline<br/>➔I� p. 1211 s1"
            },
            {
              "num": 8,
              "type": "FILL",
              "text": "• first appears at the start of _________ _________ ..",
              "answer": "spring",
              "explanation": "The text confirms this: \"In Britain, as the average spring temperature has increased by roughly 0.\"",
              "location": "Passage 1",
              "instruction": "Questions 7-13<br/>Complete the notes below.<br/>Choose ONE WORD ONLY from the passage for each answer.<br/>Write your answers in boxes 7-13 on your answer sheet.<br/>Butterflies in the UK<br/>The Small Blue<br/>• lives in large 7 ......................................... ..<br/>• first appears at the start of 8 ......................................... ..<br/>• completes more than one reproductive cycle per year<br/>The High Brown Fritillary<br/>• has one reproductive cycle<br/>Reading<br/>• is considered to be more 9 ........................................... than other species<br/>• its caterpillars occupy a limited range of 10 .......................................... .<br/>The Silver-studded Blue<br/>• is already able to reproduce twice a year in warm areas of 11 .......................................... .<br/>The White Admiral<br/>• is found in 12 ........................................... areas of England<br/>• both climate change and the 13 ........................................... of the caterpillar are possible<br/>reasons for decline<br/>➔I� p. 1211 s1"
            },
            {
              "num": 9,
              "type": "FILL",
              "text": "• is considered to be more _________ _________ than other species",
              "answer": "endangered",
              "explanation": "The text confirms this: \"The beautiful High Brown Fritillary, often described as Britain's most endangered butterfly, is in this group.\"",
              "location": "Passage 1",
              "instruction": "Questions 7-13<br/>Complete the notes below.<br/>Choose ONE WORD ONLY from the passage for each answer.<br/>Write your answers in boxes 7-13 on your answer sheet.<br/>Butterflies in the UK<br/>The Small Blue<br/>• lives in large 7 ......................................... ..<br/>• first appears at the start of 8 ......................................... ..<br/>• completes more than one reproductive cycle per year<br/>The High Brown Fritillary<br/>• has one reproductive cycle<br/>Reading<br/>• is considered to be more 9 ........................................... than other species<br/>• its caterpillars occupy a limited range of 10 .......................................... .<br/>The Silver-studded Blue<br/>• is already able to reproduce twice a year in warm areas of 11 .......................................... .<br/>The White Admiral<br/>• is found in 12 ........................................... areas of England<br/>• both climate change and the 13 ........................................... of the caterpillar are possible<br/>reasons for decline<br/>➔I� p. 1211 s1"
            },
            {
              "num": 10,
              "type": "FILL",
              "text": "• its caterpillars occupy a limited range of _________ _________ .",
              "answer": "habitat",
              "explanation": "The text confirms this: \"Indeed, worryingly, it was found that the species in this group that specialise in very specific habitat types, often related to the caterpillar's preferred diet, actually tended to be most at harm from advancing phenology.\"",
              "location": "Passage 1",
              "instruction": "Questions 7-13<br/>Complete the notes below.<br/>Choose ONE WORD ONLY from the passage for each answer.<br/>Write your answers in boxes 7-13 on your answer sheet.<br/>Butterflies in the UK<br/>The Small Blue<br/>• lives in large 7 ......................................... ..<br/>• first appears at the start of 8 ......................................... ..<br/>• completes more than one reproductive cycle per year<br/>The High Brown Fritillary<br/>• has one reproductive cycle<br/>Reading<br/>• is considered to be more 9 ........................................... than other species<br/>• its caterpillars occupy a limited range of 10 .......................................... .<br/>The Silver-studded Blue<br/>• is already able to reproduce twice a year in warm areas of 11 .......................................... .<br/>The White Admiral<br/>• is found in 12 ........................................... areas of England<br/>• both climate change and the 13 ........................................... of the caterpillar are possible<br/>reasons for decline<br/>➔I� p. 1211 s1"
            },
            {
              "num": 11,
              "type": "FILL",
              "text": "• is already able to reproduce twice a year in warm areas of _________ _________ .",
              "answer": "Europe",
              "explanation": "The text confirms this: \"Many of Britain's single-generation species show the capacity, in continental Europe, to add a second generation in years that are sufficiently warm.\"",
              "location": "Passage 1",
              "instruction": "Questions 7-13<br/>Complete the notes below.<br/>Choose ONE WORD ONLY from the passage for each answer.<br/>Write your answers in boxes 7-13 on your answer sheet.<br/>Butterflies in the UK<br/>The Small Blue<br/>• lives in large 7 ......................................... ..<br/>• first appears at the start of 8 ......................................... ..<br/>• completes more than one reproductive cycle per year<br/>The High Brown Fritillary<br/>• has one reproductive cycle<br/>Reading<br/>• is considered to be more 9 ........................................... than other species<br/>• its caterpillars occupy a limited range of 10 .......................................... .<br/>The Silver-studded Blue<br/>• is already able to reproduce twice a year in warm areas of 11 .......................................... .<br/>The White Admiral<br/>• is found in 12 ........................................... areas of England<br/>• both climate change and the 13 ........................................... of the caterpillar are possible<br/>reasons for decline<br/>➔I� p. 1211 s1"
            },
            {
              "num": 12,
              "type": "FILL",
              "text": "• is found in _________ _________ areas of England",
              "answer": "southern",
              "explanation": "The text confirms this: \"The White Admiral of southern England, a much sought-after butterfly, experienced a significant increase in numbers from the 1920s but has shown a considerable decline in the past 20 years.\"",
              "location": "Passage 1",
              "instruction": "Questions 7-13<br/>Complete the notes below.<br/>Choose ONE WORD ONLY from the passage for each answer.<br/>Write your answers in boxes 7-13 on your answer sheet.<br/>Butterflies in the UK<br/>The Small Blue<br/>• lives in large 7 ......................................... ..<br/>• first appears at the start of 8 ......................................... ..<br/>• completes more than one reproductive cycle per year<br/>The High Brown Fritillary<br/>• has one reproductive cycle<br/>Reading<br/>• is considered to be more 9 ........................................... than other species<br/>• its caterpillars occupy a limited range of 10 .......................................... .<br/>The Silver-studded Blue<br/>• is already able to reproduce twice a year in warm areas of 11 .......................................... .<br/>The White Admiral<br/>• is found in 12 ........................................... areas of England<br/>• both climate change and the 13 ........................................... of the caterpillar are possible<br/>reasons for decline<br/>➔I� p. 1211 s1"
            },
            {
              "num": 13,
              "type": "FILL",
              "text": "In addition, species with more flexible _________ had been able to adapt better to the changing climate.",
              "answer": "diet",
              "explanation": "The text confirms this: \"Indeed, worryingly, it was found that the species in this group that specialise in very specific habitat types, often related to the caterpillar's preferred diet, actually tended to be most at harm from advancing phenology.\"",
              "location": "Passage 1",
              "instruction": "Questions 7-13<br/>Complete the notes below.<br/>Choose ONE WORD ONLY from the passage for each answer.<br/>Write your answers in boxes 7-13 on your answer sheet.<br/>Butterflies in the UK<br/>The Small Blue<br/>• lives in large 7 ......................................... ..<br/>• first appears at the start of 8 ......................................... ..<br/>• completes more than one reproductive cycle per year<br/>The High Brown Fritillary<br/>• has one reproductive cycle<br/>Reading<br/>• is considered to be more 9 ........................................... than other species<br/>• its caterpillars occupy a limited range of 10 .......................................... .<br/>The Silver-studded Blue<br/>• is already able to reproduce twice a year in warm areas of 11 .......................................... .<br/>The White Admiral<br/>• is found in 12 ........................................... areas of England<br/>• both climate change and the 13 ........................................... of the caterpillar are possible<br/>reasons for decline<br/>➔I� p. 1211 s1"
            }
          ]
        },
        {
          "title": "Deep-sea mining",
          "text": "<h1>Deep-sea mining</h1>\n<p><b>A</b> Bacteria from the ocean floor can beat superbugs and cancer. But habitats are at risk from the hunger for marine minerals.</p>\n<p><b>B</b> \"We're looking at the bioactive potential of marine resources, to see if there are any more medicines or drugs down there before we destroy it for ever,\" says Professor Mat Upton, a medical microbiologist at the University of Plymouth. He is among many scientists urging a halt to deep-sea mining, asking for time to weigh up the pros and cons. Upton estimates it could take up to a decade for a newly discovered antibiotic to become a medicine — but the race towards commercial mining in the ocean abyss has already begun.</p>\n<p><b>C</b> The deep sea contains more nickel, cobalt and rare earth metals than all land reserves combined, according to the US Geological Survey. Mining corporations argue that deep-sea exploration could help diversify the supply of metals and point to the fact that demand for resources such as copper, aluminium, cobalt for electric car batteries and other metals to power technology and smartphones, is soaring. They say that deep-sea mining could yield far superior ore to land mining with little, if any, waste. Different methods of extraction exist, but most involve employing some form of converted machinery previously used in terrestrial mining to excavate materials from the sea floor, at depths of up to 6,000 metres.</p>\n<p><b>D</b> But environmental and legal groups have urged caution, arguing there are potentially massive and unknown ramifications for the environment and for nearby communities, and that the global regulatory framework is not yet drafted. \"Despite arising in the last half century, the 'new global gold rush' of deep-sea mining shares many features with past resource scrambles — including a general disregard for environmental and social impacts, and the marginalisation of indigenous peoples and their rights,\" a paper, written by Julie Hunter and Julian Aguon, from Blue Ocean Law, and Pradeep Singh, from the Center for Marine Environmental Sciences, Bremen, argues. The authors say that knowledge of the deep seabed remains extremely limited. \"The surface of the Moon, Mars and even Venus have all been mapped and studied in much greater detail, leading marine scientists to commonly remark that, with respect to the deep sea, 'We don't yet know what we need to know'.\"</p>\n<p><b>E</b> Scientific research — including a recent paper in Marine Policy journal — has suggested the deep seabed, and hydrothermal vents, which are created when seawater meets volcanic magma, have crucial impacts upon biodiversity and the global climate. The mineral-rich vents and their surrounds are also home to many well-known animals including crustaceans, tubeworms, clams, slugs, anemones and fish. \"It is becoming increasingly clear that deep-sea mining poses a grave threat to these vital seabed functions,\" the paper says. \"Extraction methods would produce large sediment plumes and involve the discharge of waste back into the ocean, significantly disturbing seafloor environments,\" the paper continues. \"On deep sea vents, scientists are clear,\" says Dr Jon Copley of the National Oceanography Centre, Southampton: \"we don't want mining on them.\"</p>\n<p><b>F</b> The oceans occupy around 70% of the planet and are relatively unexplored, says Mike Johnston, chief executive of Nautilus, a Canadian underwater exploration company: \"It makes sense to explore this untapped potential in an environmentally sustainable way, instead of continually looking at the fast depleting land resources of the planet to meet society's rising needs.\" Those leading the global rush to place giant mining machines thousands of metres below the sea surface say the environmental impacts will be far lower than on land. But critics say exotic and little-known ecosystems in the deep oceans could be destroyed and must be protected. \"Mining will be the greatest assault on deep-sea ecosystems ever inflicted by humans,\" according to hydrothermal vent expert Verena Tunnicliffe, at the University of Victoria in Canada. She argues that active vents must be off-limits for mining to protect the new knowledge and biotechnology spin-offs they can deliver, and that strict controls must be in place elsewhere.</p>",
          "questions": [
            {
              "num": 14,
              "type": "MCQ",
              "text": "reference to the rapidly increasing need for one raw material in the transport industry",
              "answer": "C",
              "explanation": "The text confirms this: \"Bacteria from the ocean floor can beat superbugs and cancer.\"",
              "location": "Passage 2",
              "instruction": "Questions 14-17<br/>Reading Passage 2 has six paragraphs, A-F.<br/>Which paragraph contains the following information?<br/>Write the correct letter, A-F, in boxes 14-17 on your answer sheet.",
              "options": [
                "A. Paragraph A",
                "B. Paragraph B",
                "C. Paragraph C",
                "D. Paragraph D",
                "E. Paragraph E",
                "F. Paragraph F"
              ]
            },
            {
              "num": 15,
              "type": "MCQ",
              "text": "a rough estimate of the area of the Earth covered by the oceans",
              "answer": "F",
              "explanation": "The text confirms this: \"Bacteria from the ocean floor can beat superbugs and cancer.\"",
              "location": "Passage 2",
              "instruction": "Questions 14-17<br/>Reading Passage 2 has six paragraphs, A-F.<br/>Which paragraph contains the following information?<br/>Write the correct letter, A-F, in boxes 14-17 on your answer sheet.",
              "options": [
                "A. Paragraph A",
                "B. Paragraph B",
                "C. Paragraph C",
                "D. Paragraph D",
                "E. Paragraph E",
                "F. Paragraph F"
              ]
            },
            {
              "num": 16,
              "type": "MCQ",
              "text": "how a particular underwater habitat, where minerals and organisms co-exist, is formed",
              "answer": "E",
              "explanation": "The text confirms this: \"Bacteria from the ocean floor can beat superbugs and cancer.\"",
              "location": "Passage 2",
              "instruction": "Questions 14-17<br/>Reading Passage 2 has six paragraphs, A-F.<br/>Which paragraph contains the following information?<br/>Write the correct letter, A-F, in boxes 14-17 on your answer sheet.",
              "options": [
                "A. Paragraph A",
                "B. Paragraph B",
                "C. Paragraph C",
                "D. Paragraph D",
                "E. Paragraph E",
                "F. Paragraph F"
              ]
            },
            {
              "num": 17,
              "type": "MCQ",
              "text": "reference to the fact that the countries of the world have yet to agree on rules for the exploration of the seabed",
              "answer": "D",
              "explanation": "The text confirms this: \"Bacteria from the ocean floor can beat superbugs and cancer.\"",
              "location": "Passage 2",
              "instruction": "Questions 14-17<br/>Reading Passage 2 has six paragraphs, A-F.<br/>Which paragraph contains the following information?<br/>Write the correct letter, A-F, in boxes 14-17 on your answer sheet.",
              "options": [
                "A. Paragraph A",
                "B. Paragraph B",
                "C. Paragraph C",
                "D. Paragraph D",
                "E. Paragraph E",
                "F. Paragraph F"
              ]
            },
            {
              "num": 18,
              "type": "MCQ",
              "text": "A move away from the exploration of heavily mined reserves on land is a good idea.",
              "answer": "D",
              "explanation": "The text confirms this: \"Bacteria from the ocean floor can beat superbugs and cancer.\"",
              "location": "Passage 2",
              "instruction": "Questions 18-23<br/>Looi< at the following statements (Questions 18-23) and the list of people below.<br/>Match each statement with the correct person or people, A-E.<br/>Write the correct letter, A-E, in boxes 18-23 on your answer sheet.<br/>NB You may use any letter more than once.",
              "options": [
                "A. Professor Mat Upton",
                "B. Julie Hunter, Julian Aguon and Pradeep Singh",
                "C. Dr Jon Copley",
                "D. Mike Johnston",
                "E. Verena Tunnicliffe"
              ]
            },
            {
              "num": 19,
              "type": "MCQ",
              "text": "The negative effects of undersea exploration on local areas and their inhabitants are being ignored.",
              "answer": "B",
              "explanation": "The text confirms this: \"Bacteria from the ocean floor can beat superbugs and cancer.\"",
              "location": "Passage 2",
              "instruction": "Questions 18-23<br/>Looi< at the following statements (Questions 18-23) and the list of people below.<br/>Match each statement with the correct person or people, A-E.<br/>Write the correct letter, A-E, in boxes 18-23 on your answer sheet.<br/>NB You may use any letter more than once.",
              "options": [
                "A. Professor Mat Upton",
                "B. Julie Hunter, Julian Aguon and Pradeep Singh",
                "C. Dr Jon Copley",
                "D. Mike Johnston",
                "E. Verena Tunnicliffe"
              ]
            },
            {
              "num": 20,
              "type": "MCQ",
              "text": "There are more worthwhile things to extract from the sea than minerals.",
              "answer": "A",
              "explanation": "The text confirms this: \"Bacteria from the ocean floor can beat superbugs and cancer.\"",
              "location": "Passage 2",
              "instruction": "Questions 18-23<br/>Looi< at the following statements (Questions 18-23) and the list of people below.<br/>Match each statement with the correct person or people, A-E.<br/>Write the correct letter, A-E, in boxes 18-23 on your answer sheet.<br/>NB You may use any letter more than once.",
              "options": [
                "A. Professor Mat Upton",
                "B. Julie Hunter, Julian Aguon and Pradeep Singh",
                "C. Dr Jon Copley",
                "D. Mike Johnston",
                "E. Verena Tunnicliffe"
              ]
            },
            {
              "num": 21,
              "type": "MCQ",
              "text": "No other form of human exploration will have such a destructive impact on marine life as deep-sea mining.",
              "answer": "E",
              "explanation": "The text confirms this: \"Bacteria from the ocean floor can beat superbugs and cancer.\"",
              "location": "Passage 2",
              "instruction": "Questions 18-23<br/>Looi< at the following statements (Questions 18-23) and the list of people below.<br/>Match each statement with the correct person or people, A-E.<br/>Write the correct letter, A-E, in boxes 18-23 on your answer sheet.<br/>NB You may use any letter more than once.",
              "options": [
                "A. Professor Mat Upton",
                "B. Julie Hunter, Julian Aguon and Pradeep Singh",
                "C. Dr Jon Copley",
                "D. Mike Johnston",
                "E. Verena Tunnicliffe"
              ]
            },
            {
              "num": 22,
              "type": "MCQ",
              "text": "More is known about outer space than about what lies beneath the oceans.",
              "answer": "B",
              "explanation": "The text confirms this: \"Bacteria from the ocean floor can beat superbugs and cancer.\"",
              "location": "Passage 2",
              "instruction": "Questions 18-23<br/>Looi< at the following statements (Questions 18-23) and the list of people below.<br/>Match each statement with the correct person or people, A-E.<br/>Write the correct letter, A-E, in boxes 18-23 on your answer sheet.<br/>NB You may use any letter more than once.",
              "options": [
                "A. Professor Mat Upton",
                "B. Julie Hunter, Julian Aguon and Pradeep Singh",
                "C. Dr Jon Copley",
                "D. Mike Johnston",
                "E. Verena Tunnicliffe"
              ]
            },
            {
              "num": 23,
              "type": "MCQ",
              "text": "There is one marine life habitat where experts agree mining should not take place.",
              "answer": "C",
              "explanation": "The text confirms this: \"Bacteria from the ocean floor can beat superbugs and cancer.\"",
              "location": "Passage 2",
              "instruction": "Questions 18-23<br/>Looi< at the following statements (Questions 18-23) and the list of people below.<br/>Match each statement with the correct person or people, A-E.<br/>Write the correct letter, A-E, in boxes 18-23 on your answer sheet.<br/>NB You may use any letter more than once.",
              "options": [
                "A. Professor Mat Upton",
                "B. Julie Hunter, Julian Aguon and Pradeep Singh",
                "C. Dr Jon Copley",
                "D. Mike Johnston",
                "E. Verena Tunnicliffe"
              ]
            },
            {
              "num": 24,
              "type": "FILL",
              "text": "They also say that these can be removed without producing much _________ .",
              "answer": "waste",
              "explanation": "The text confirms this: \"They say that deep-sea mining could yield far superior ore to land mining with little, if any, waste.\"",
              "location": "Passage 2",
              "instruction": "Questions 24-26<br/>Complete the summary below.<br/>Choose ONE WORD ONLY from the passage for each answer.<br/>Write your answers in boxes 24-26 on your answer sheet.<br/>Mining the sea floor<br/>Reading<br/>Mining corporations believe that the mineral resources lying under the sea may<br/>be superior to those found in the earth. They also say that these can be removed<br/>without producing much 24 ........................................... .<br/>The extraction is often done by adapting the 25 ........................................... that has already<br/>been used to work on land. The method of excavation involves removing the<br/>seawater from the slurry that is brought up to ships and returning it to the seabed.<br/>However, concerned groups strongly believe that 26 ........................................... is necessary<br/>due to the possible number of unidentified consequences.<br/>➔ l�p.121I 91"
            },
            {
              "num": 25,
              "type": "FILL",
              "text": "The extraction is often done by adapting the _________ _________ that has already",
              "answer": "machinery",
              "explanation": "The text confirms this: \"Different methods of extraction exist, bul most involve employing some form of converted machinery previously used in terrestrial mining to excavate materials fi·om the sea Aoor, al depths of up to 6,000 metres, then drawing a seawater slurry, containing rock and other solid particles, from the sea floor to ships on the surface.\"",
              "location": "Passage 2",
              "instruction": "Questions 24-26<br/>Complete the summary below.<br/>Choose ONE WORD ONLY from the passage for each answer.<br/>Write your answers in boxes 24-26 on your answer sheet.<br/>Mining the sea floor<br/>Reading<br/>Mining corporations believe that the mineral resources lying under the sea may<br/>be superior to those found in the earth. They also say that these can be removed<br/>without producing much 24 ........................................... .<br/>The extraction is often done by adapting the 25 ........................................... that has already<br/>been used to work on land. The method of excavation involves removing the<br/>seawater from the slurry that is brought up to ships and returning it to the seabed.<br/>However, concerned groups strongly believe that 26 ........................................... is necessary<br/>due to the possible number of unidentified consequences.<br/>➔ l�p.121I 91"
            },
            {
              "num": 26,
              "type": "FILL",
              "text": "However, concerned groups strongly believe that _________ is necessary due to the possible number of unidentified consequences.",
              "answer": "caution",
              "explanation": "The text confirms this: \"com D But environmental and legal groups have urged caution, arguing there are potentially massive and unknown ramificalions for the environment and for nearby communities, and that the global regulatory framework is not yet drafted.\"",
              "location": "Passage 2",
              "instruction": "Questions 24-26<br/>Complete the summary below.<br/>Choose ONE WORD ONLY from the passage for each answer.<br/>Write your answers in boxes 24-26 on your answer sheet.<br/>Mining the sea floor<br/>Reading<br/>Mining corporations believe that the mineral resources lying under the sea may<br/>be superior to those found in the earth. They also say that these can be removed<br/>without producing much 24 ........................................... .<br/>The extraction is often done by adapting the 25 ........................................... that has already<br/>been used to work on land. The method of excavation involves removing the<br/>seawater from the slurry that is brought up to ships and returning it to the seabed.<br/>However, concerned groups strongly believe that 26 ........................................... is necessary<br/>due to the possible number of unidentified consequences.<br/>➔ l�p.121I 91"
            }
          ]
        },
        {
          "title": "The Unselfish Gene",
          "text": "<h1>The Unselfish Gene</h1>\n<p>A psychologist gives his view on how humans became self-centred.</p>\n<p>There has long been a general assumption that human beings are essentially selfish. We are portrayed as relentlessly pursuing our own self-interest, driven by evolutionary pressures to survive and reproduce at the expense of others. This view was popularized by Richard Dawkins in his 1976 book The Selfish Gene, which argued that our genes are the primary drivers of our behaviour, and that altruism is merely an illusion. However, this view is increasingly being challenged by psychologists and anthropologists who argue that cooperation and empathy are just as natural to humans as selfishness.</p>\n<p>Prehistoric societies were likely far more egalitarian and cooperative than modern ones. For most of our evolutionary history, humans lived in small bands of hunter-gatherers. In these groups, survival depended on sharing resources, caring for the sick and injured, and working together to hunt and gather food. Those who developed warlike or selfish traits would have been at a disadvantage, as they would have been excluded from the group and left to survive on their own. Thus, evolutionary pressures may have actually favoured cooperative and peaceful traits.</p>\n<p>The !Kung people of southern Africa, for example, swap arrows before going hunting, and when an animal is killed, the credit for the success is shared among the group, rather than going to the individual hunter. This custom prevents status differences from developing and maintains the egalitarian structure of the society. Similar practices have been observed in other hunter-gatherer cultures worldwide, suggesting that cooperation was the norm for prehistoric humans.</p>\n<p>Bruce Knauft, an anthropologist at Emory University, has studied contemporary hunter-gatherer societies and concluded that they exhibit a high level of egalitarianism in all areas of life. In these cultures, sharing is a moral obligation, and anyone who behaves in a domineering or selfish manner is punished by being ridiculed, ignored, or excluded. Women also have a high degree of autonomy in decisions regarding work and marriage, further reinforcing the equality of the group.</p>\n<p>The transition from hunter-gatherer bands to agricultural societies, which began around ten thousand years ago, marked a major shift in human behaviour. The development of agriculture allowed for the accumulation of surplus food and wealth, leading to the emergence of private property, social hierarchies, and warfare. As societies became more complex and unequal, selfish and competitive traits became more advantageous, leading to the self-centred behaviour we see in modern cultures.</p>\n<p>Despite these changes, cooperation remains a fundamental part of human nature. Studies of infants and young children show that they are naturally helpful and empathetic, offering assistance to others without being asked or rewarded. This suggests that we are born with a predisposition to cooperate, and that selfishness is a learned behaviour, shaped by our culture and environment. By understanding this, we can design schools, workplaces, and communities that encourage our cooperative nature and help us build a more unselfish world.</p>",
          "questions": [
            {
              "num": 27,
              "type": "MCQ",
              "text": "What is the writer doing in the first paragraph?",
              "answer": "C",
              "explanation": "The text confirms this: \"A psychologist gives his view on how humans became self-centred There has long been a general assumption that human beings are essentially selfish.\"",
              "location": "Passage 3",
              "instruction": "Questions 27-30<br/>Choose the correct letter, A, B, C or D.<br/>Write the correct letter in boxes 27-30 on your answer sheet.",
              "options": [
                "A. setting out two opposing views about human nature",
                "B. justifying his opinion about our tendency to be greedy",
                "C. describing a commonly held belief about people's behaviour",
                "D. explaining why he thinks that humans act in a selfish manner"
              ]
            },
            {
              "num": 28,
              "type": "MCQ",
              "text": "What point is made about Richard Dawkins' book The Selfish Gene?",
              "answer": "C",
              "explanation": "The text confirms this: \"A psychologist gives his view on how humans became self-centred There has long been a general assumption that human beings are essentially selfish.\"",
              "location": "Passage 3",
              "instruction": "Questions 27-30<br/>Choose the correct letter, A, B, C or D.<br/>Write the correct letter in boxes 27-30 on your answer sheet.",
              "options": [
                "A. Its appeal lay in the radical nature of its ideas.",
                "B. Its success was due to the scientific support it offered.",
                "C. It presented a view that was in line with the attitudes of its time.",
                "D. It took an innovative approach to the analysis of human psychology."
              ]
            },
            {
              "num": 29,
              "type": "MCQ",
              "text": "What does the writer suggest about the prehistoric era in the fourth paragraph?",
              "answer": "B",
              "explanation": "The text confirms this: \"A psychologist gives his view on how humans became self-centred There has long been a general assumption that human beings are essentially selfish.\"",
              "location": "Passage 3",
              "instruction": "Questions 27-30<br/>Choose the correct letter, A, B, C or D.<br/>Write the correct letter in boxes 27-30 on your answer sheet.",
              "options": [
                "A. Societies were more complex than many people believe.",
                "B. Supplies of natural resources were probably relatively plentiful.",
                "C. Most estimates about population sizes are likely to be inaccurate.",
                "D. Humans moved across continents more than was previously thought."
              ]
            },
            {
              "num": 30,
              "type": "MCQ",
              "text": "The writer refers to Bruce Knauft's work as support for the idea that",
              "answer": "A",
              "explanation": "The text confirms this: \"A psychologist gives his view on how humans became self-centred There has long been a general assumption that human beings are essentially selfish.\"",
              "location": "Passage 3",
              "instruction": "Questions 27-30<br/>Choose the correct letter, A, B, C or D.<br/>Write the correct letter in boxes 27-30 on your answer sheet.",
              "options": [
                "A. selfishness is a relatively recent development in human societies.",
                "B. only people in isolated communities can live in an unselfish manner.",
                "C. very few lifestyles have survived unchanged since prehistoric times.",
                "D. hunter-gatherer cultures worldwide are declining in number."
              ]
            },
            {
              "num": 31,
              "type": "FILL",
              "text": "Bruce Knauft's research shows that contemporary hunter-gatherer societies tend to exhibit a high level of _________ in all areas of life.",
              "answer": "egalitarianism",
              "explanation": "The text confirms this: \"As the anthropologist Bruce Knauft has remarked, hunter-gatherers are characterised by 'extreme political and sexual egalitarianism'.\"",
              "location": "Passage 3",
              "instruction": "Questions 31-35<br/>Complete the summary below.<br/>Choose ONE WORD ONLY from the passage for each answer.<br/>Write your answers in boxes 31-35 on your answer sheet.<br/>Contemporary hunter-gatherer societies<br/>Reading<br/>Bruce Knauft's research shows that contemporary hunter-gatherer societies tend<br/>to exhibit a high level of 31 ........................................... in all areas of life. In these cultures,<br/>distributing resources fairly among all members is a moral obligation. These societies<br/>also employ strategies to prevent differences in 32 ........................................... occurring: for<br/>example, the !Kung follow a custom whereby the credit for one person's success<br/>at 33 ........................................... is given to another member of the group. Individuals who<br/>behave in a 34 ........................................... manner are punished by being excluded from the<br/>group, and women have a considerable amount of 35 ........................................... in choices<br/>regarding work and marriage."
            },
            {
              "num": 32,
              "type": "FILL",
              "text": "also employ strategies to prevent differences in _________ _________ occurring: for",
              "answer": "status",
              "explanation": "The text confirms this: \"They also have methods of preserving egalitarianism by ensuring that disparities of status don't arise.\"",
              "location": "Passage 3",
              "instruction": "Questions 31-35<br/>Complete the summary below.<br/>Choose ONE WORD ONLY from the passage for each answer.<br/>Write your answers in boxes 31-35 on your answer sheet.<br/>Contemporary hunter-gatherer societies<br/>Reading<br/>Bruce Knauft's research shows that contemporary hunter-gatherer societies tend<br/>to exhibit a high level of 31 ........................................... in all areas of life. In these cultures,<br/>distributing resources fairly among all members is a moral obligation. These societies<br/>also employ strategies to prevent differences in 32 ........................................... occurring: for<br/>example, the !Kung follow a custom whereby the credit for one person's success<br/>at 33 ........................................... is given to another member of the group. Individuals who<br/>behave in a 34 ........................................... manner are punished by being excluded from the<br/>group, and women have a considerable amount of 35 ........................................... in choices<br/>regarding work and marriage."
            },
            {
              "num": 33,
              "type": "FILL",
              "text": "at _________ _________ is given to another member of the group. Individuals who",
              "answer": "hunting",
              "explanation": "The text confirms this: \"Humans at that time were hunter-gatherers: people who lived by hunting wild animals and collecting wild plants.\"",
              "location": "Passage 3",
              "instruction": "Questions 31-35<br/>Complete the summary below.<br/>Choose ONE WORD ONLY from the passage for each answer.<br/>Write your answers in boxes 31-35 on your answer sheet.<br/>Contemporary hunter-gatherer societies<br/>Reading<br/>Bruce Knauft's research shows that contemporary hunter-gatherer societies tend<br/>to exhibit a high level of 31 ........................................... in all areas of life. In these cultures,<br/>distributing resources fairly among all members is a moral obligation. These societies<br/>also employ strategies to prevent differences in 32 ........................................... occurring: for<br/>example, the !Kung follow a custom whereby the credit for one person's success<br/>at 33 ........................................... is given to another member of the group. Individuals who<br/>behave in a 34 ........................................... manner are punished by being excluded from the<br/>group, and women have a considerable amount of 35 ........................................... in choices<br/>regarding work and marriage."
            },
            {
              "num": 34,
              "type": "FILL",
              "text": "behave in a _________ _________ manner are punished by being excluded from the",
              "answer": "domineering",
              "explanation": "The text confirms this: \"And if a person becomes too domineering, the other members of the group ostracise them, exiling the offender from society.\"",
              "location": "Passage 3",
              "instruction": "Questions 31-35<br/>Complete the summary below.<br/>Choose ONE WORD ONLY from the passage for each answer.<br/>Write your answers in boxes 31-35 on your answer sheet.<br/>Contemporary hunter-gatherer societies<br/>Reading<br/>Bruce Knauft's research shows that contemporary hunter-gatherer societies tend<br/>to exhibit a high level of 31 ........................................... in all areas of life. In these cultures,<br/>distributing resources fairly among all members is a moral obligation. These societies<br/>also employ strategies to prevent differences in 32 ........................................... occurring: for<br/>example, the !Kung follow a custom whereby the credit for one person's success<br/>at 33 ........................................... is given to another member of the group. Individuals who<br/>behave in a 34 ........................................... manner are punished by being excluded from the<br/>group, and women have a considerable amount of 35 ........................................... in choices<br/>regarding work and marriage."
            },
            {
              "num": 35,
              "type": "FILL",
              "text": "and women have a considerable amount of _________ in choices regarding work and marriage.",
              "answer": "autonomy",
              "explanation": "The text confirms this: \"Women in hunter-gatherer groups worldwide often benefit from a high level of autonomy, being able to select their own marriage partners, decide what work they do and work whenever they choose to.\"",
              "location": "Passage 3",
              "instruction": "Questions 31-35<br/>Complete the summary below.<br/>Choose ONE WORD ONLY from the passage for each answer.<br/>Write your answers in boxes 31-35 on your answer sheet.<br/>Contemporary hunter-gatherer societies<br/>Reading<br/>Bruce Knauft's research shows that contemporary hunter-gatherer societies tend<br/>to exhibit a high level of 31 ........................................... in all areas of life. In these cultures,<br/>distributing resources fairly among all members is a moral obligation. These societies<br/>also employ strategies to prevent differences in 32 ........................................... occurring: for<br/>example, the !Kung follow a custom whereby the credit for one person's success<br/>at 33 ........................................... is given to another member of the group. Individuals who<br/>behave in a 34 ........................................... manner are punished by being excluded from the<br/>group, and women have a considerable amount of 35 ........................................... in choices<br/>regarding work and marriage."
            },
            {
              "num": 36,
              "type": "TFNG",
              "text": "Some anthropologists are mistaken about the point when the number of societies such as the !Kung began to decline.",
              "answer": "NOT GIVEN",
              "explanation": "The passage confirms that the answer is 'NOT GIVEN'.",
              "location": "Passage 3",
              "instruction": "Questions 36-40<br/>Do the following statements agree with the views of the writer in Reading Passage 3?<br/>In boxes 36-40 on your answer sheet, Write<br/>YES if the statement agrees with the views of the writer<br/>NO if the statement contradicts the views of the writer<br/>NOT GIVEN if it is impossible to say what the writer thinks about this",
              "options": [
                "TRUE",
                "FALSE",
                "NOT GIVEN"
              ]
            },
            {
              "num": 37,
              "type": "TFNG",
              "text": "Humans who developed warlike traits in prehistory would have had an advantage over those who did not.",
              "answer": "FALSE",
              "explanation": "The text confirms this: \"But, in fact, the assumption on which this all rests - that prehistoric life was a desperate struggle for survival - is false.\"",
              "location": "Passage 3",
              "instruction": "Questions 36-40<br/>Do the following statements agree with the views of the writer in Reading Passage 3?<br/>In boxes 36-40 on your answer sheet, Write<br/>YES if the statement agrees with the views of the writer<br/>NO if the statement contradicts the views of the writer<br/>NOT GIVEN if it is impossible to say what the writer thinks about this",
              "options": [
                "TRUE",
                "FALSE",
                "NOT GIVEN"
              ]
            },
            {
              "num": 38,
              "type": "TFNG",
              "text": "Being peaceful and cooperative is a natural way for people to behave.",
              "answer": "TRUE",
              "explanation": "The passage confirms that the answer is 'TRUE'.",
              "location": "Passage 3",
              "instruction": "Questions 36-40<br/>Do the following statements agree with the views of the writer in Reading Passage 3?<br/>In boxes 36-40 on your answer sheet, Write<br/>YES if the statement agrees with the views of the writer<br/>NO if the statement contradicts the views of the writer<br/>NOT GIVEN if it is impossible to say what the writer thinks about this",
              "options": [
                "TRUE",
                "FALSE",
                "NOT GIVEN"
              ]
            },
            {
              "num": 39,
              "type": "TFNG",
              "text": "Negative traits are more apparent in some modern cultures than in others.",
              "answer": "NOT GIVEN",
              "explanation": "The passage confirms that the answer is 'NOT GIVEN'.",
              "location": "Passage 3",
              "instruction": "Questions 36-40<br/>Do the following statements agree with the views of the writer in Reading Passage 3?<br/>In boxes 36-40 on your answer sheet, Write<br/>YES if the statement agrees with the views of the writer<br/>NO if the statement contradicts the views of the writer<br/>NOT GIVEN if it is impossible to say what the writer thinks about this",
              "options": [
                "TRUE",
                "FALSE",
                "NOT GIVEN"
              ]
            },
            {
              "num": 40,
              "type": "TFNG",
              "text": "Animal research has failed to reveal a link between changes in the environment and the emergence of aggressive tendencies.",
              "answer": "FALSE",
              "explanation": "The text confirms this: \"But, in fact, the assumption on which this all rests - that prehistoric life was a desperate struggle for survival - is false.\"",
              "location": "Passage 3",
              "instruction": "Questions 36-40<br/>Do the following statements agree with the views of the writer in Reading Passage 3?<br/>In boxes 36-40 on your answer sheet, Write<br/>YES if the statement agrees with the views of the writer<br/>NO if the statement contradicts the views of the writer<br/>NOT GIVEN if it is impossible to say what the writer thinks about this",
              "options": [
                "TRUE",
                "FALSE",
                "NOT GIVEN"
              ]
            }
          ]
        }
      ]
    },
    "writing": {
      "task1": {
        "prompt": "The charts below give information on the location and types of dance classes young people in a town in Australia are currently attending.",
        "image": "<img src=\"images/writing_t8_p1.png\" class=\"max-w-full h-auto mx-auto rounded-xl shadow-lg border border-white/10 bg-white\" alt=\"Writing Task 1 Graph\" />",
        "modelAnswer": "TASK 1 This is an answer written by a candidate who achieved a Band 5.0 score. ihe. table and d1art provide. information about the lolation and different �pe-5 of danle. da55 unde.rta\\Ce.n bi ioung people in Auf>tralia. ihe. lhart 5ai5 In 'Private. $tudio5 4S% ioung people are ta\\Cing danle. da55e,5_ And in wmmuniti hallf> and other IS% folK5 are ta\\Cing danle. da55e.5 And other lolation. After f>lhool da55e,5 2.4% people are ta\\Cing da55e,5 and other laf>t one lolation wlle.ge. ba5e.d f>tudiof> the.5e. are 10% pe.rle.nt people Ta\\Cing da55e.5. ihe. table re.veal in Ballet �pe. danle. IPoo students under age of 11 learning. And 300 age of 11-1(p are learning. And 42.0 5tude.ntf> age of 11-1(p learning and last �pe. of Danle. Modern the,5e, are 515 students are learning who are under age of 11 and 300 other stude.nfa who are age of !HIP. To wndusion in 'Private. $tudio the numbe.rn of people mulh higher than other lolationf>. And tipe. of ballet danle. dasse.s number of f>tude.nt Mulh higher in under age of 11 than other tipe. of danle. da55e,5_ Here is the examiner's comment: 136 This candidate has worked hard to report all data contained in the graphs. The key areas are covered, but the overall effect is rather mechanical, as each point is presented in a linear sequence. The ideas are set out in the correct order, following the order of the graphs in the question, but linking between and within the sentences is not strong. The format is quite repetitive [taking classes I learning] because of the lack of linking devices. Similarly, vocabulary is limited and a wider range would be needed for a higher score. Grammatical range is also minimal. There is a noticeable level of error, but the reader is still able to understand the message. To improve the score, this candidate should use a wider range of linking devices and take a less mechanical approach. A stronger and wider range of vocabulary and grammar would also be beneficial "
      },
      "task2": {
        "prompt": "In many countries nowadays, consumers can go to a supermarket and buy food produced all over the world. Do you think this is a positive or negative development?",
        "modelAnswer": "TASK 2 This is an answer written by a candidate who achieved a Band 6.0 score. Todai there are a lot of difforent r,hopr, Where we Gan bui all \\::ind of r,tuff produe,ed all over the world. Ir, it right to bui food produe,ed in other countriu,? Ir, thir, idea ur,eful for people nowadair,? I r,uppor,e tnir, to be a good idea. Wnen r,upermar\\::etr, and even r,mall r,nopr, provide people food from abroad tnen tnere are mue,n more por,r,ibilitier, for Uf, to e,noor,e r,ometning. Wnen r,nopr, nave onli food and tningr, produe,ed in our count�. it if> realli nard to ma\\::e a good e,noir,e. 'Some.timer, people want to t� r,ometning new and interer,ting maibe even r,ometning et-traordina� wniln tnei never bui before. In tnir, e,ar,er, food wnie,n if> produe,ed in otner countrier, will nelp tnem to be r,atir,fied witn tneir demandr,. Wnen r,upermar\\::etr, nave a good r,upli of different food produe,ed aniwnere tnan people e,an find deliC-iOUf, tningr, depending on tneir tar,tef>. for et-ample, people wno li\\::e frene,h produdr, can bui r,ome \\::indr, of frene,n e,neer,e or wine not onli in frane,e. food from otner countrier, if> alr,o ve� good wnen iOU want to bui r,ome frer,n vegetabler, and fruitr, in winter. It if> rea\\\\i ur,eful tning becaur,e r,ome people are vegetarianr, and tnei need vegetabler, and fruitr, during the wnole iear. 1ne onli dir,advantage of food wnicn if> produced in otner countrier, if> tne wai now it har, been delivered. in r,ome car,er, productf> e,an be not r,o frer,h er,peciali in r,ummer, when it if> ve� hot outr,ide. To wm it up, I e,an r,ureli r,ai that buiin9 produdr, from other countrier, if> a good tning to become more dor,er to other wlturief>. You can e,ertainli coo\\:: r,omethin9 unur,ial at home and it will tar,te li\\::e in ve� good et-penr,ive ref>taurant r,omewhere abroad. Here is the examiner's comment: This is a good response to the task. The candidate clearly agrees with the idea that people should be able to buy international food in supermarkets. The main reason given is that people want to try something [new and interesting] and different. Examples are given of French products and seasonal produce for vegetarians. One disadvantage is given, related to the impact of hot weather on transportation. The conclusion includes bringing cultures together through food but does not summarise the points made in the full answer. A more relevant conclusion would help the candidate achieve a higher score, as well as further extending the ideas. Generally, the candidate organises the ideas well, and we can follow them clearly. Some good linking devices are used [where I maybe even I which I who], but some errors remain [this cases I these cases I than I then]. The response is set out across five paragraphs, but three of them have only two sentences. These are short paragraphs and could be extended to illustrate the central topic in more detail "
      }
    }
  },
  "9": {
    "title": "Cambridge IELTS 20 — Test 1",
    "book": "IELTS 20",
    "listening": {
        "sections": [
            {
                "id": 1,
                "title": "Part 1: Restaurant Recommendations",
                "description": "Conversation about recommending restaurants for a 30th birthday party.",
                "audio": "audio/IELTS_20_Test_1_Part1.mp3",
                "questions": [
                    {
                        "num": 1,
                        "type": "FILL",
                        "text": "The Junction: Good for people who are especially keen on _________",
                        "answer": "fish",
                        "explanation": "The speaker recommends The Junction for fish lovers.",
                        "instruction": "Questions 1-10<br/>Complete the table below.<br/>Write ONE WORD AND/OR A NUMBER for each answer."
                    },
                    {
                        "num": 2,
                        "type": "FILL",
                        "text": "The Junction comments: The _________ is a good place for a drink",
                        "answer": "roof",
                        "explanation": "The roof of The Junction is recommended for a drink.",
                        "instruction": "Questions 1-10<br/>Complete the notes below."
                    },
                    {
                        "num": 3,
                        "type": "FILL",
                        "text": "Paloma: _________ food, good for sharing",
                        "answer": "Spanish",
                        "explanation": "Paloma serves Spanish food.",
                        "instruction": "Questions 1-10<br/>Complete the notes below."
                    },
                    {
                        "num": 4,
                        "type": "FILL",
                        "text": "Paloma comments: A limited selection of _________ food on the menu",
                        "answer": "vegetarian",
                        "explanation": "The menu has a limited selection of vegetarian options.",
                        "instruction": "Questions 1-10<br/>Complete the notes below."
                    },
                    {
                        "num": 5,
                        "type": "FILL",
                        "text": "The _________ restaurant",
                        "answer": "Audley",
                        "explanation": "The third recommended restaurant is the Audley.",
                        "instruction": "Questions 1-10<br/>Complete the notes below."
                    },
                    {
                        "num": 6,
                        "type": "FILL",
                        "text": "Audley location: At the top of a _________",
                        "answer": "hotel",
                        "explanation": "The Audley is located at the top of a hotel.",
                        "instruction": "Questions 1-10<br/>Complete the notes below."
                    },
                    {
                        "num": 7,
                        "type": "FILL",
                        "text": "Audley reason: All the _________ are very good",
                        "answer": "reviews",
                        "explanation": "All reviews for the Audley are very good.",
                        "instruction": "Questions 1-10<br/>Complete the notes below."
                    },
                    {
                        "num": 8,
                        "type": "FILL",
                        "text": "Audley reason: Only uses _________ ingredients",
                        "answer": "local",
                        "explanation": "The restaurant only uses local ingredients.",
                        "instruction": "Questions 1-10<br/>Complete the notes below."
                    },
                    {
                        "num": 9,
                        "type": "FILL",
                        "text": "Audley comments: Set lunch costs £ _________ per person",
                        "answer": "30",
                        "explanation": "The set lunch is £30 per person.",
                        "instruction": "Questions 1-10<br/>Complete the notes below."
                    },
                    {
                        "num": 10,
                        "type": "FILL",
                        "text": "Audley comments: Portions probably of _________ size",
                        "answer": "average",
                        "explanation": "The portions are of average size.",
                        "instruction": "Questions 1-10<br/>Complete the notes below."
                    }
                ]
            },
            {
                "id": 2,
                "title": "Part 2: Edelman Pottery",
                "description": "A talk by a potter to a group of visitors at Edelman Pottery.",
                "audio": "audio/IELTS_20_Test_1_Part2.mp3",
                "questions": [
                    {
                        "num": 11,
                        "type": "MCQ",
                        "text": "Heather says pottery differs from other art forms because",
                        "options": [
                            "A. it lasts longer in the ground.",
                            "B. it is practised by more people.",
                            "C. it can be repaired more easily."
                        ],
                        "answer": "A",
                        "explanation": "Heather says pottery survives in the earth long after other materials degrade.",
                        "instruction": "Questions 11-16<br/>Choose the correct letter, A, B or C."
                    },
                    {
                        "num": 12,
                        "type": "MCQ",
                        "text": "Archaeologists sometimes identify the use of ancient pottery from",
                        "options": [
                            "A. the clay it was made with.",
                            "B. the marks that are on it.",
                            "C. the basic shape of it."
                        ],
                        "answer": "B",
                        "explanation": "Marks on the pottery help archaeologists identify its use.",
                        "instruction": "Questions 11-16<br/>Choose the correct letter, A, B or C."
                    },
                    {
                        "num": 13,
                        "type": "MCQ",
                        "text": "Some people join Heather's pottery class because they want to",
                        "options": [
                            "A. create an item that looks very old.",
                            "B. find something that they are good at.",
                            "C. make something that will outlive them."
                        ],
                        "answer": "C",
                        "explanation": "Participants want to create durable items that will outlive them.",
                        "instruction": "Questions 11-16<br/>Choose the correct letter, A, B or C."
                    },
                    {
                        "num": 14,
                        "type": "MCQ",
                        "text": "What does Heather value most about being a potter?",
                        "options": [
                            "A. its calming effect",
                            "B. its messy nature",
                            "C. its physical benefits"
                        ],
                        "answer": "A",
                        "explanation": "Heather finds the calming effect of working with clay most valuable.",
                        "instruction": "Questions 11-16<br/>Choose the correct letter, A, B or C."
                    },
                    {
                        "num": 15,
                        "type": "MCQ",
                        "text": "Most of the visitors to Edelman Pottery",
                        "options": [
                            "A. bring friends to join courses.",
                            "B. have never made a pot before.",
                            "C. try to learn techniques too quickly."
                        ],
                        "answer": "B",
                        "explanation": "The majority of visitors are complete beginners who have never made a pot.",
                        "instruction": "Questions 11-16<br/>Choose the correct letter, A, B or C."
                    },
                    {
                        "num": 16,
                        "type": "MCQ",
                        "text": "Heather reminds her visitors that they should",
                        "options": [
                            "A. put on their aprons.",
                            "B. change their clothes.",
                            "C. take off their jewellery."
                        ],
                        "answer": "C",
                        "explanation": "Heather instructs them to remove any jewellery before starting.",
                        "instruction": "Questions 11-16<br/>Choose the correct letter, A, B or C."
                    },
                    {
                        "num": 17,
                        "type": "MCQ",
                        "text": "Which TWO things does Heather explain about kilns? (Select 1 of 2)",
                        "options": [
                            "A. what their function is",
                            "B. when they were invented",
                            "C. ways of keeping them safe",
                            "D. where to put one in your home",
                            "E. what some people use instead of one"
                        ],
                        "answer": "A",
                        "explanation": "Heather explains their primary function and alternative options.",
                        "instruction": "Questions 17-18<br/>Choose TWO letters, A-E."
                    },
                    {
                        "num": 18,
                        "type": "MCQ",
                        "text": "Which TWO things does Heather explain about kilns? (Select 2 of 2)",
                        "options": [
                            "A. what their function is",
                            "B. when they were invented",
                            "C. ways of keeping them safe",
                            "D. where to put one in your home",
                            "E. what some people use instead of one"
                        ],
                        "answer": "E",
                        "explanation": "Heather outlines what some people use instead of traditional kilns.",
                        "instruction": "Questions 17-18<br/>Choose TWO letters, A-E."
                    },
                    {
                        "num": 19,
                        "type": "MCQ",
                        "text": "Which TWO points does Heather make about a potter's tools? (Select 1 of 2)",
                        "options": [
                            "A. Some are hard to hold.",
                            "B. Some are worth buying.",
                            "C. Some are essential items.",
                            "D. Some have memorable names.",
                            "E. Some are available for use by participants."
                        ],
                        "answer": "C",
                        "explanation": "She notes that some tools are essential and others are provided.",
                        "instruction": "Questions 19-20<br/>Choose TWO letters, A-E."
                    },
                    {
                        "num": 20,
                        "type": "MCQ",
                        "text": "Which TWO points does Heather make about a potter's tools? (Select 2 of 2)",
                        "options": [
                            "A. Some are hard to hold.",
                            "B. Some are worth buying.",
                            "C. Some are essential items.",
                            "D. Some have memorable names.",
                            "E. Some are available for use by participants."
                        ],
                        "answer": "E",
                        "explanation": "She mentions that tools are available for all participants to use.",
                        "instruction": "Questions 19-20<br/>Choose TWO letters, A-E."
                    }
                ]
            },
            {
                "id": 3,
                "title": "Part 3: Loneliness and Mental Health",
                "description": "Two students discuss their presentation on loneliness.",
                "audio": "audio/IELTS_20_Test_1_Part3.mp3",
                "questions": [
                    {
                        "num": 21,
                        "type": "MCQ",
                        "text": "Which TWO things do the students both believe are responsible for the increase in loneliness? (Select 1 of 2)",
                        "options": [
                            "A. social media",
                            "B. smaller nuclear families",
                            "C. urban design",
                            "D. longer lifespans",
                            "E. a mobile workforce"
                        ],
                        "answer": "C",
                        "explanation": "Both students agree that urban design is a factor.",
                        "instruction": "Questions 21-22<br/>Choose TWO letters, A-E."
                    },
                    {
                        "num": 22,
                        "type": "MCQ",
                        "text": "Which TWO things do the students both believe are responsible for the increase in loneliness? (Select 2 of 2)",
                        "options": [
                            "A. social media",
                            "B. smaller nuclear families",
                            "C. urban design",
                            "D. longer lifespans",
                            "E. a mobile workforce"
                        ],
                        "answer": "E",
                        "explanation": "Both students agree that a mobile workforce contributes to loneliness.",
                        "instruction": "Questions 21-22<br/>Choose TWO letters, A-E."
                    },
                    {
                        "num": 23,
                        "type": "MCQ",
                        "text": "Which TWO health risks associated with loneliness do the students agree are based on solid evidence? (Select 1 of 2)",
                        "options": [
                            "A. a weakened immune system",
                            "B. dementia",
                            "C. cancer",
                            "D. obesity",
                            "E. cardiovascular disease"
                        ],
                        "answer": "A",
                        "explanation": "Solid evidence supports the link between loneliness and a weakened immune system.",
                        "instruction": "Questions 23-24<br/>Choose TWO letters, A-E."
                    },
                    {
                        "num": 24,
                        "type": "MCQ",
                        "text": "Which TWO health risks associated with loneliness do the students agree are based on solid evidence? (Select 2 of 2)",
                        "options": [
                            "A. a weakened immune system",
                            "B. dementia",
                            "C. cancer",
                            "D. obesity",
                            "E. cardiovascular disease"
                        ],
                        "answer": "C",
                        "explanation": "Solid evidence supports the link between loneliness and cancer.",
                        "instruction": "Questions 23-24<br/>Choose TWO letters, A-E."
                    },
                    {
                        "num": 25,
                        "type": "MCQ",
                        "text": "Which TWO opinions do both the students express about the evolutionary theory of loneliness? (Select 1 of 2)",
                        "options": [
                            "A. It has little practical relevance.",
                            "B. It needs further investigation.",
                            "C. It is misleading.",
                            "D. It should be more widely accepted.",
                            "E. It is difficult to understand."
                        ],
                        "answer": "A",
                        "explanation": "Both students think the evolutionary theory has little practical relevance.",
                        "instruction": "Questions 25-26<br/>Choose TWO letters, A-E."
                    },
                    {
                        "num": 26,
                        "type": "MCQ",
                        "text": "Which TWO opinions do both the students express about the evolutionary theory of loneliness? (Select 2 of 2)",
                        "options": [
                            "A. It has little practical relevance.",
                            "B. It needs further investigation.",
                            "C. It is misleading.",
                            "D. It should be more widely accepted.",
                            "E. It is difficult to understand."
                        ],
                        "answer": "B",
                        "explanation": "Both students believe the evolutionary theory needs further investigation.",
                        "instruction": "Questions 25-26<br/>Choose TWO letters, A-E."
                    },
                    {
                        "num": 27,
                        "type": "MCQ",
                        "text": "When comparing loneliness to depression, the students",
                        "options": [
                            "A. doubt that there will ever be a medical cure for loneliness.",
                            "B. claim that the link between loneliness and mental health is overstated.",
                            "C. express frustration that loneliness is not taken more seriously."
                        ],
                        "answer": "A",
                        "explanation": "The students doubt a medical cure will ever be found for loneliness.",
                        "instruction": "Questions 27-30<br/>Choose the correct letter, A, B or C."
                    },
                    {
                        "num": 28,
                        "type": "MCQ",
                        "text": "Why do the students decide to start their presentation with an example from their own experience?",
                        "options": [
                            "A. to explain how difficult loneliness can be",
                            "B. to highlight a situation that most students will recognise",
                            "C. to emphasise that feeling lonely is more common for men than women"
                        ],
                        "answer": "B",
                        "explanation": "They start with a personal story to connect with a situation most students will recognise.",
                        "instruction": "Questions 27-30<br/>Choose the correct letter, A, B or C."
                    },
                    {
                        "num": 29,
                        "type": "MCQ",
                        "text": "The students agree that talking to strangers is a good strategy for dealing with loneliness because",
                        "options": [
                            "A. it creates a sense of belonging.",
                            "B. it builds self-confidence.",
                            "C. it makes people feel more positive."
                        ],
                        "answer": "A",
                        "explanation": "Talking to strangers helps build a sense of belonging.",
                        "instruction": "Questions 27-30<br/>Choose the correct letter, A, B or C."
                    },
                    {
                        "num": 30,
                        "type": "MCQ",
                        "text": "The students find it difficult to understand why solitude is considered to be",
                        "options": [
                            "A. similar to loneliness.",
                            "B. necessary for mental health.",
                            "C. an enjoyable experience."
                        ],
                        "answer": "C",
                        "explanation": "They struggle to understand why solitude is viewed as an enjoyable experience.",
                        "instruction": "Questions 27-30<br/>Choose the correct letter, A, B or C."
                    }
                ]
            },
            {
                "id": 4,
                "title": "Part 4: Reclaiming Urban Rivers",
                "description": "A lecture on the reclamation and restoration of urban rivers.",
                "audio": "audio/IELTS_20_Test_1_Part4.mp3",
                "questions": [
                    {
                        "num": 31,
                        "type": "FILL",
                        "text": "pollution from _________ on the river bank.",
                        "answer": "factories",
                        "explanation": "The speaker mentions pollution coming from factories on the banks.",
                        "instruction": "Questions 31-40<br/>Complete the notes below.<br/>Write ONE WORD ONLY for each answer."
                    },
                    {
                        "num": 32,
                        "type": "FILL",
                        "text": "In 1957, the River Thames in London was declared biologically _________.",
                        "answer": "dead",
                        "explanation": "The River Thames was declared biologically dead in 1957.",
                        "instruction": "Questions 31-40<br/>Complete the notes below."
                    },
                    {
                        "num": 33,
                        "type": "FILL",
                        "text": "Seals and even a _________ have been seen in the River Thames.",
                        "answer": "whale",
                        "explanation": "Seals and even a whale have been spotted in the Thames recently.",
                        "instruction": "Questions 31-40<br/>Complete the notes below."
                    },
                    {
                        "num": 34,
                        "type": "FILL",
                        "text": "Riverside warehouses are converted to restaurants and _________.",
                        "answer": "apartments",
                        "explanation": "Warehouses have been converted to restaurants and apartments.",
                        "instruction": "Questions 31-40<br/>Complete the notes below."
                    },
                    {
                        "num": 35,
                        "type": "FILL",
                        "text": "build a riverside _________.",
                        "answer": "park",
                        "explanation": "Plans include building a riverside park.",
                        "instruction": "Questions 31-40<br/>Complete the notes below."
                    },
                    {
                        "num": 36,
                        "type": "FILL",
                        "text": "display _________ projects.",
                        "answer": "art",
                        "explanation": "Plans include displaying art projects along the river.",
                        "instruction": "Questions 31-40<br/>Complete the notes below."
                    },
                    {
                        "num": 37,
                        "type": "FILL",
                        "text": "In Paris, _________ are created on the sides of the river every summer.",
                        "answer": "beaches",
                        "explanation": "Beaches are created on the banks in Paris during summer.",
                        "instruction": "Questions 31-40<br/>Complete the notes below."
                    },
                    {
                        "num": 38,
                        "type": "FILL",
                        "text": "Over 2 billion passengers already travel by _________ in cities round the world.",
                        "answer": "ferry",
                        "explanation": "More than 2 billion passengers travel by ferry globally.",
                        "instruction": "Questions 31-40<br/>Complete the notes below."
                    },
                    {
                        "num": 39,
                        "type": "FILL",
                        "text": "Instead of road transport, goods could be transported by large freight barges and electric _________.",
                        "answer": "bikes",
                        "explanation": "Barges and electric bikes are proposed for goods transport.",
                        "instruction": "Questions 31-40<br/>Complete the notes below."
                    },
                    {
                        "num": 40,
                        "type": "FILL",
                        "text": "or, in future, by _________.",
                        "answer": "drone",
                        "explanation": "Drones are envisioned as a future transport method.",
                        "instruction": "Questions 31-40<br/>Complete the notes below."
                    }
                ]
            }
        ]
    }
},
  "10": {
    "title": "Cambridge IELTS 20 — Test 2",
    "book": "IELTS 20",
    "listening": {
        "sections": [
            {
                "id": 1,
                "title": "Part 1: Support for Elderly Care",
                "description": "Conversation about arranging practical support for an elderly mother.",
                "audio": "audio/IELTS_20_Test_2_Part1.mp3",
                "questions": [
                    {
                        "num": 1,
                        "type": "FILL",
                        "text": "This can give the carer: • a _________",
                        "answer": "break",
                        "explanation": "Practical support gives the carer a break.",
                        "instruction": "Questions 1-10<br/>Complete the notes below.<br/>Write ONE WORD AND/OR A NUMBER for each answer."
                    },
                    {
                        "num": 2,
                        "type": "FILL",
                        "text": "Assessment of mother's needs: • how much _________ the caring involves",
                        "answer": "time",
                        "explanation": "The assessment will discuss how much time the caring takes.",
                        "instruction": "Questions 1-10<br/>Complete the notes below."
                    },
                    {
                        "num": 3,
                        "type": "FILL",
                        "text": "• helping her have a _________",
                        "answer": "shower",
                        "explanation": "Assisting with tasks such as having a shower is discussed.",
                        "instruction": "Questions 1-10<br/>Complete the notes below."
                    },
                    {
                        "num": 4,
                        "type": "FILL",
                        "text": "• dealing with _________",
                        "answer": "money",
                        "explanation": "Dealing with money is another area of support.",
                        "instruction": "Questions 1-10<br/>Complete the notes below."
                    },
                    {
                        "num": 5,
                        "type": "FILL",
                        "text": "• loss of _________",
                        "answer": "memory",
                        "explanation": "Memory loss makes caring especially difficult.",
                        "instruction": "Questions 1-10<br/>Complete the notes below."
                    },
                    {
                        "num": 6,
                        "type": "FILL",
                        "text": "• _________ her",
                        "answer": "lifting",
                        "explanation": "Lifting her is one of the physically demanding aspects.",
                        "instruction": "Questions 1-10<br/>Complete the notes below."
                    },
                    {
                        "num": 7,
                        "type": "FILL",
                        "text": "• preventing a _________",
                        "answer": "fall",
                        "explanation": "Support aims to prevent a fall.",
                        "instruction": "Questions 1-10<br/>Complete the notes below."
                    },
                    {
                        "num": 8,
                        "type": "FILL",
                        "text": "• transport costs, e.g. cost of a _________",
                        "answer": "taxi",
                        "explanation": "Support includes covering transport costs such as a taxi.",
                        "instruction": "Questions 1-10<br/>Complete the notes below."
                    },
                    {
                        "num": 9,
                        "type": "FILL",
                        "text": "• car-related costs, e.g. fuel and _________",
                        "answer": "insurance",
                        "explanation": "Car-related expenses like fuel and insurance are mentioned.",
                        "instruction": "Questions 1-10<br/>Complete the notes below."
                    },
                    {
                        "num": 10,
                        "type": "FILL",
                        "text": "• help to reduce _________",
                        "answer": "stress",
                        "explanation": "The program helps to reduce stress for the carer.",
                        "instruction": "Questions 1-10<br/>Complete the notes below."
                    }
                ]
            },
            {
                "id": 2,
                "title": "Part 2: Community Volunteers",
                "description": "A talk about volunteer roles in community activities and festivals.",
                "audio": "audio/IELTS_20_Test_2_Part2.mp3",
                "questions": [
                    {
                        "num": 11,
                        "type": "MCQ",
                        "text": "What is the role of the volunteers in: Walking around the town centre",
                        "options": [
                            "A. providing entertainment",
                            "B. providing publicity about a council service",
                            "C. contacting local businesses",
                            "D. giving advice to visitors",
                            "E. collecting feedback on events",
                            "F. selling tickets",
                            "G. introducing guest speakers at an event",
                            "H. encouraging cooperation between local organisations",
                            "I. helping people find their seats"
                        ],
                        "answer": "D",
                        "explanation": "Volunteers in the town centre give advice to visitors.",
                        "instruction": "Questions 11-16<br/>What is the role of the volunteers in each of the following activities? Choose SIX answers from the box and write the correct letter, A-I."
                    },
                    {
                        "num": 12,
                        "type": "MCQ",
                        "text": "What is the role of the volunteers in: Helping at concerts",
                        "options": [
                            "A. providing entertainment",
                            "B. providing publicity about a council service",
                            "C. contacting local businesses",
                            "D. giving advice to visitors",
                            "E. collecting feedback on events",
                            "F. selling tickets",
                            "G. introducing guest speakers at an event",
                            "H. encouraging cooperation between local organisations",
                            "I. helping people find their seats"
                        ],
                        "answer": "I",
                        "explanation": "Concert volunteers help people find their seats.",
                        "instruction": "Questions 11-16<br/>Choose SIX answers from the box."
                    },
                    {
                        "num": 13,
                        "type": "MCQ",
                        "text": "What is the role of the volunteers in: Getting involved with community groups",
                        "options": [
                            "A. providing entertainment",
                            "B. providing publicity about a council service",
                            "C. contacting local businesses",
                            "D. giving advice to visitors",
                            "E. collecting feedback on events",
                            "F. selling tickets",
                            "G. introducing guest speakers at an event",
                            "H. encouraging cooperation between local organisations",
                            "I. helping people find their seats"
                        ],
                        "answer": "H",
                        "explanation": "Volunteers encourage cooperation between local organisations.",
                        "instruction": "Questions 11-16<br/>Choose SIX answers from the box."
                    },
                    {
                        "num": 14,
                        "type": "MCQ",
                        "text": "What is the role of the volunteers in: Helping with a festival",
                        "options": [
                            "A. providing entertainment",
                            "B. providing publicity about a council service",
                            "C. contacting local businesses",
                            "D. giving advice to visitors",
                            "E. collecting feedback on events",
                            "F. selling tickets",
                            "G. introducing guest speakers at an event",
                            "H. encouraging cooperation between local organisations",
                            "I. helping people find their seats"
                        ],
                        "answer": "E",
                        "explanation": "They collect feedback on festival events.",
                        "instruction": "Questions 11-16<br/>Choose SIX answers from the box."
                    },
                    {
                        "num": 15,
                        "type": "MCQ",
                        "text": "What is the role of the volunteers in: Participating at lunches for retired people",
                        "options": [
                            "A. providing entertainment",
                            "B. providing publicity about a council service",
                            "C. contacting local businesses",
                            "D. giving advice to visitors",
                            "E. collecting feedback on events",
                            "F. selling tickets",
                            "G. introducing guest speakers at an event",
                            "H. encouraging cooperation between local organisations",
                            "I. helping people find their seats"
                        ],
                        "answer": "A",
                        "explanation": "They provide entertainment during retirement lunches.",
                        "instruction": "Questions 11-16<br/>Choose SIX answers from the box."
                    },
                    {
                        "num": 16,
                        "type": "MCQ",
                        "text": "What is the role of the volunteers in: Helping with the website",
                        "options": [
                            "A. providing entertainment",
                            "B. providing publicity about a council service",
                            "C. contacting local businesses",
                            "D. giving advice to visitors",
                            "E. collecting feedback on events",
                            "F. selling tickets",
                            "G. introducing guest speakers at an event",
                            "H. encouraging cooperation between local organisations",
                            "I. helping people find their seats"
                        ],
                        "answer": "B",
                        "explanation": "They provide publicity about a council service.",
                        "instruction": "Questions 11-16<br/>Choose SIX answers from the box."
                    },
                    {
                        "num": 17,
                        "type": "MCQ",
                        "text": "Which event requires the largest number of volunteers?",
                        "options": [
                            "A. the music festival",
                            "B. the science festival",
                            "C. the book festival"
                        ],
                        "answer": "B",
                        "explanation": "The science festival requires the largest number of volunteers.",
                        "instruction": "Questions 17-20<br/>Choose the correct letter, A, B or C."
                    },
                    {
                        "num": 18,
                        "type": "MCQ",
                        "text": "What is the most important requirement for volunteers at the festivals?",
                        "options": [
                            "A. interpersonal skills",
                            "B. personal interest in the event",
                            "C. flexibility"
                        ],
                        "answer": "A",
                        "explanation": "Interpersonal skills are the most critical requirement.",
                        "instruction": "Questions 17-20<br/>Choose the correct letter, A, B or C."
                    },
                    {
                        "num": 19,
                        "type": "MCQ",
                        "text": "New volunteers will start working in the week beginning",
                        "options": [
                            "A. 2 September.",
                            "B. 9 September.",
                            "C. 23 September."
                        ],
                        "answer": "B",
                        "explanation": "Work starts in the week of 9 September.",
                        "instruction": "Questions 17-20<br/>Choose the correct letter, A, B or C."
                    },
                    {
                        "num": 20,
                        "type": "MCQ",
                        "text": "What is the next annual event for volunteers?",
                        "options": [
                            "A. a boat trip",
                            "B. a barbecue",
                            "C. a party"
                        ],
                        "answer": "A",
                        "explanation": "The next annual event is a boat trip.",
                        "instruction": "Questions 17-20<br/>Choose the correct letter, A, B or C."
                    }
                ]
            },
            {
                "id": 3,
                "title": "Part 3: Geography Presentation",
                "description": "Two students discuss their geography presentation and case study.",
                "audio": "audio/IELTS_20_Test_2_Part3.mp3",
                "questions": [
                    {
                        "num": 21,
                        "type": "MCQ",
                        "text": "What is Colin's opinion about: Population",
                        "options": [
                            "A. The information given about this was too vague.",
                            "B. This may not be relevant to their course.",
                            "C. This will involve only a small number of statistics.",
                            "D. It will be easy to find facts about this.",
                            "E. The facts about this may not be reliable.",
                            "F. No useful research has been done on this.",
                            "G. The information provided about this was interesting."
                        ],
                        "answer": "D",
                        "explanation": "Colin thinks population facts are easy to find.",
                        "instruction": "Questions 21-25<br/>What is Colin's opinion about each of the following aspects of geography? Choose FIVE answers from the box and write the correct letter, A-G."
                    },
                    {
                        "num": 22,
                        "type": "MCQ",
                        "text": "What is Colin's opinion about: Health",
                        "options": [
                            "A. The information given about this was too vague.",
                            "B. This may not be relevant to their course.",
                            "C. This will involve only a small number of statistics.",
                            "D. It will be easy to find facts about this.",
                            "E. The facts about this may not be reliable.",
                            "F. No useful research has been done on this.",
                            "G. The information provided about this was interesting."
                        ],
                        "answer": "G",
                        "explanation": "Colin found the health data interesting.",
                        "instruction": "Questions 21-25<br/>Choose FIVE answers from the box."
                    },
                    {
                        "num": 23,
                        "type": "MCQ",
                        "text": "What is Colin's opinion about: Economies",
                        "options": [
                            "A. The information given about this was too vague.",
                            "B. This may not be relevant to their course.",
                            "C. This will involve only a small number of statistics.",
                            "D. It will be easy to find facts about this.",
                            "E. The facts about this may not be reliable.",
                            "F. No useful research has been done on this.",
                            "G. The information provided about this was interesting."
                        ],
                        "answer": "B",
                        "explanation": "Colin thinks economic data is not relevant to their course.",
                        "instruction": "Questions 21-25<br/>Choose FIVE answers from the box."
                    },
                    {
                        "num": 24,
                        "type": "MCQ",
                        "text": "What is Colin's opinion about: Culture",
                        "options": [
                            "A. The information given about this was too vague.",
                            "B. This may not be relevant to their course.",
                            "C. This will involve only a small number of statistics.",
                            "D. It will be easy to find facts about this.",
                            "E. The facts about this may not be reliable.",
                            "F. No useful research has been done on this.",
                            "G. The information provided about this was interesting."
                        ],
                        "answer": "A",
                        "explanation": "He feels the culture details were too vague.",
                        "instruction": "Questions 21-25<br/>Choose FIVE answers from the box."
                    },
                    {
                        "num": 25,
                        "type": "MCQ",
                        "text": "What is Colin's opinion about: Poverty",
                        "options": [
                            "A. The information given about this was too vague.",
                            "B. This may not be relevant to their course.",
                            "C. This will involve only a small number of statistics.",
                            "D. It will be easy to find facts about this.",
                            "E. The facts about this may not be reliable.",
                            "F. No useful research has been done on this.",
                            "G. The information provided about this was interesting."
                        ],
                        "answer": "E",
                        "explanation": "Colin expresses doubt on the reliability of poverty facts.",
                        "instruction": "Questions 21-25<br/>Choose FIVE answers from the box."
                    },
                    {
                        "num": 26,
                        "type": "MCQ",
                        "text": "Rosie says that in her own city the main problem is",
                        "options": [
                            "A. crime.",
                            "B. housing.",
                            "C. unemployment."
                        ],
                        "answer": "C",
                        "explanation": "Rosie states that unemployment is the primary concern.",
                        "instruction": "Questions 26-30<br/>Choose the correct letter, A, B or C."
                    },
                    {
                        "num": 27,
                        "type": "MCQ",
                        "text": "What recent additions to the outskirts of their cities are both students happy about?",
                        "options": [
                            "A. conference centres",
                            "B. sports centres",
                            "C. retail centres"
                        ],
                        "answer": "A",
                        "explanation": "Both are pleased with the new conference centres.",
                        "instruction": "Questions 26-30<br/>Choose the correct letter, A, B or C."
                    },
                    {
                        "num": 28,
                        "type": "MCQ",
                        "text": "The students agree that developing disused industrial sites may",
                        "options": [
                            "A. have unexpected costs.",
                            "B. damage the urban environment.",
                            "C. destroy valuable historical buildings."
                        ],
                        "answer": "A",
                        "explanation": "They agree that unexpected costs frequently arise in development.",
                        "instruction": "Questions 26-30<br/>Choose the correct letter, A, B or C."
                    },
                    {
                        "num": 29,
                        "type": "MCQ",
                        "text": "The students will mention Masdar City as an example of an attempt to achieve",
                        "options": [
                            "A. daily collections for waste recycling.",
                            "B. sustainable energy use.",
                            "C. free transport for everyone."
                        ],
                        "answer": "B",
                        "explanation": "Masdar City is discussed as a model for sustainable energy use.",
                        "instruction": "Questions 26-30<br/>Choose the correct letter, A, B or C."
                    },
                    {
                        "num": 30,
                        "type": "MCQ",
                        "text": "When discussing the ecotown of Greenhill Abbots, Colin is uncertain about",
                        "options": [
                            "A. what its objectives were.",
                            "B. why there was opposition to it.",
                            "C. how much of it has actually been built."
                        ],
                        "answer": "C",
                        "explanation": "Colin expresses uncertainty over how much of it has actually been constructed.",
                        "instruction": "Questions 26-30<br/>Choose the correct letter, A, B or C."
                    }
                ]
            },
            {
                "id": 4,
                "title": "Part 4: Developing Food Trends",
                "description": "A lecture on food trends and their dissemination on social media.",
                "audio": "audio/IELTS_20_Test_2_Part4.mp3",
                "questions": [
                    {
                        "num": 31,
                        "type": "FILL",
                        "text": "The growth in interest in food fashions started with _________ of food being shared on social media.",
                        "answer": "photos",
                        "explanation": "Food trends grew from photos/pictures shared online.",
                        "instruction": "Questions 31-40<br/>Complete the notes below.<br/>Write ONE WORD ONLY for each answer."
                    },
                    {
                        "num": 32,
                        "type": "FILL",
                        "text": "Sales of _________ food brands have grown rapidly this way.",
                        "answer": "vegan",
                        "explanation": "Vegan food brands saw rapid growth.",
                        "instruction": "Questions 31-40<br/>Complete the notes below."
                    },
                    {
                        "num": 33,
                        "type": "FILL",
                        "text": "Famous _________ are influential.",
                        "answer": "chefs",
                        "explanation": "Famous chefs are key influencers of food trends.",
                        "instruction": "Questions 31-40<br/>Complete the notes below."
                    },
                    {
                        "num": 34,
                        "type": "FILL",
                        "text": "The avocado: _________ were invited to visit growers in South Africa.",
                        "answer": "journalists",
                        "explanation": "Journalists were invited to South Africa to promote avocados.",
                        "instruction": "Questions 31-40<br/>Complete the notes below."
                    },
                    {
                        "num": 35,
                        "type": "FILL",
                        "text": "Advertising focused on its _________ benefits.",
                        "answer": "health",
                        "explanation": "Advertising highlighted the health benefits of avocados.",
                        "instruction": "Questions 31-40<br/>Complete the notes below."
                    },
                    {
                        "num": 36,
                        "type": "FILL",
                        "text": "Oat milk: Promotion in the USA through _________ shops reduced the need for advertising.",
                        "answer": "coffee",
                        "explanation": "Coffee shops in the USA promoted oat milk.",
                        "instruction": "Questions 31-40<br/>Complete the notes below."
                    },
                    {
                        "num": 37,
                        "type": "FILL",
                        "text": "It appealed to consumers who are concerned about the _________.",
                        "answer": "environment",
                        "explanation": "It targetted consumers focused on the environment.",
                        "instruction": "Questions 31-40<br/>Complete the notes below."
                    },
                    {
                        "num": 38,
                        "type": "FILL",
                        "text": "Norwegian skrei: - has helped strengthen the _________ of Norwegian seafood.",
                        "answer": "reputation",
                        "explanation": "Skrei strengthened the reputation of Norwegian seafood.",
                        "instruction": "Questions 31-40<br/>Complete the notes below."
                    },
                    {
                        "num": 39,
                        "type": "FILL",
                        "text": "Quinoa: - Its success led to an increase in its _________.",
                        "answer": "price",
                        "explanation": "Quinoa's success led to a surge in its price/cost.",
                        "instruction": "Questions 31-40<br/>Complete the notes below."
                    },
                    {
                        "num": 40,
                        "type": "FILL",
                        "text": "- Overuse of resources resulted in poor _________ quality.",
                        "answer": "soil",
                        "explanation": "Overuse of resources degraded the soil quality.",
                        "instruction": "Questions 31-40<br/>Complete the notes below."
                    }
                ]
            }
        ]
    }
},
  "11": {
    "title": "Cambridge IELTS 20 — Test 3",
    "book": "IELTS 20",
    "listening": {
        "sections": [
            {
                "id": 1,
                "title": "Part 1: Furniture Rental",
                "description": "Conversation about comparing furniture rental companies.",
                "audio": "audio/IELTS_20_Test_3_Part1.mp3",
                "questions": [
                    {
                        "num": 1,
                        "type": "FILL",
                        "text": "Peak Rentals: Prices range from $105 to $ _________ per room per month",
                        "answer": "239",
                        "explanation": "The maximum price is $239.",
                        "instruction": "Questions 1-10<br/>Complete the table below.<br/>Write ONE WORD AND/OR A NUMBER for each answer."
                    },
                    {
                        "num": 2,
                        "type": "FILL",
                        "text": "Peak Rentals comments: The furniture is very _________",
                        "answer": "modern",
                        "explanation": "Peak Rentals has very modern furniture.",
                        "instruction": "Questions 1-10<br/>Complete the table below."
                    },
                    {
                        "num": 3,
                        "type": "FILL",
                        "text": "Peak Rentals special offer: free _________ with every living room set",
                        "answer": "lamp",
                        "explanation": "They offer a free lamp with living room sets.",
                        "instruction": "Questions 1-10<br/>Complete the table below."
                    },
                    {
                        "num": 4,
                        "type": "FILL",
                        "text": "_________ and Oliver",
                        "answer": "Aaron",
                        "explanation": "The company name is Aaron and Oliver.",
                        "instruction": "Questions 1-10<br/>Complete the table below."
                    },
                    {
                        "num": 5,
                        "type": "FILL",
                        "text": "Aaron and Oliver: 12% monthly fee for _________",
                        "answer": "damage",
                        "explanation": "A monthly fee for damage is charged.",
                        "instruction": "Questions 1-10<br/>Complete the table below."
                    },
                    {
                        "num": 6,
                        "type": "FILL",
                        "text": "Larch Furniture: Offers cheapest prices for renting furniture and _________ items",
                        "answer": "electronic",
                        "explanation": "Larch rents furniture and electronic items.",
                        "instruction": "Questions 1-10<br/>Complete the table below."
                    },
                    {
                        "num": 7,
                        "type": "FILL",
                        "text": "Larch Furniture comments: Must have own _________",
                        "answer": "insurance",
                        "explanation": "Customers must have their own insurance.",
                        "instruction": "Questions 1-10<br/>Complete the table below."
                    },
                    {
                        "num": 8,
                        "type": "FILL",
                        "text": "_________ Rentals",
                        "answer": "space",
                        "explanation": "The fourth company is Space Rentals.",
                        "instruction": "Questions 1-10<br/>Complete the table below."
                    },
                    {
                        "num": 9,
                        "type": "FILL",
                        "text": "Space Rentals: See the _________ for the most up-to-date prices",
                        "answer": "app",
                        "explanation": "Prices are available on their app.",
                        "instruction": "Questions 1-10<br/>Complete the table below."
                    },
                    {
                        "num": 10,
                        "type": "FILL",
                        "text": "Space Rentals: _________ are allowed within 7 days of delivery",
                        "answer": "exchanges",
                        "explanation": "Exchanges are allowed within 7 days.",
                        "instruction": "Questions 1-10<br/>Complete the table below."
                    }
                ]
            },
            {
                "id": 2,
                "title": "Part 2: Bidcaster Archaeological Dig",
                "description": "A guide describes the Bidcaster Archaeological Dig project.",
                "audio": "audio/IELTS_20_Test_3_Part2.mp3",
                "questions": [
                    {
                        "num": 11,
                        "type": "MCQ",
                        "text": "Who was responsible for starting the community project?",
                        "options": [
                            "A. the castle owners",
                            "B. a national charity",
                            "C. the local council"
                        ],
                        "answer": "B",
                        "explanation": "A national charity initiated the project.",
                        "instruction": "Questions 11-16<br/>Choose the correct letter, A, B or C."
                    },
                    {
                        "num": 12,
                        "type": "MCQ",
                        "text": "How was the gold coin found?",
                        "options": [
                            "A. Heavy rain had removed some of the soil.",
                            "B. The ground was dug up by wild rabbits.",
                            "C. A person with a metal detector searched the area."
                        ],
                        "answer": "A",
                        "explanation": "Heavy rain washed away soil, exposing the coin.",
                        "instruction": "Questions 11-16<br/>Choose the correct letter, A, B or C."
                    },
                    {
                        "num": 13,
                        "type": "MCQ",
                        "text": "What led the archaeologists to believe there was an ancient village on this site?",
                        "options": [
                            "A. the lucky discovery of old records",
                            "B. the bases of several structures visible in the grass",
                            "C. the unusual stones found near the castle"
                        ],
                        "answer": "A",
                        "explanation": "The discovery of old records pointed to the village's existence.",
                        "instruction": "Questions 11-16<br/>Choose the correct letter, A, B or C."
                    },
                    {
                        "num": 14,
                        "type": "MCQ",
                        "text": "What are the team still hoping to find?",
                        "options": [
                            "A. everyday pottery",
                            "B. animal bones",
                            "C. pieces of jewellery"
                        ],
                        "answer": "C",
                        "explanation": "The team is still hoping to find pieces of jewellery.",
                        "instruction": "Questions 11-16<br/>Choose the correct letter, A, B or C."
                    },
                    {
                        "num": 15,
                        "type": "MCQ",
                        "text": "What was found on the other side of the river to the castle?",
                        "options": [
                            "A. the remains of a large palace",
                            "B. the outline of fields",
                            "C. a number of small huts"
                        ],
                        "answer": "B",
                        "explanation": "The outline of ancient fields was found across the river.",
                        "instruction": "Questions 11-16<br/>Choose the correct letter, A, B or C."
                    },
                    {
                        "num": 16,
                        "type": "MCQ",
                        "text": "What do the team plan to do after work ends this summer?",
                        "options": [
                            "A. prepare a display for a museum",
                            "B. take part in a television programme",
                            "C. start to organise school visits"
                        ],
                        "answer": "C",
                        "explanation": "The team plans to organise school visits.",
                        "instruction": "Questions 11-16<br/>Choose the correct letter, A, B or C."
                    },
                    {
                        "num": 17,
                        "type": "MCQ",
                        "text": "Identify on map: bridge foundations",
                        "options": [
                            "A",
                            "B",
                            "C",
                            "D",
                            "E",
                            "F",
                            "G"
                        ],
                        "answer": "B",
                        "explanation": "The bridge foundations are located at point B.",
                        "instruction": "Questions 17-20<br/>Label the map below. Choose the correct letter, A-G."
                    },
                    {
                        "num": 18,
                        "type": "MCQ",
                        "text": "Identify on map: rubbish pit",
                        "options": [
                            "A",
                            "B",
                            "C",
                            "D",
                            "E",
                            "F",
                            "G"
                        ],
                        "answer": "A",
                        "explanation": "The rubbish pit is at point A.",
                        "instruction": "Questions 17-20<br/>Choose the correct letter, A-G."
                    },
                    {
                        "num": 19,
                        "type": "MCQ",
                        "text": "Identify on map: meeting hall",
                        "options": [
                            "A",
                            "B",
                            "C",
                            "D",
                            "E",
                            "F",
                            "G"
                        ],
                        "answer": "G",
                        "explanation": "The meeting hall is located at point G.",
                        "instruction": "Questions 17-20<br/>Choose the correct letter, A-G."
                    },
                    {
                        "num": 20,
                        "type": "MCQ",
                        "text": "Identify on map: fish pond",
                        "options": [
                            "A",
                            "B",
                            "C",
                            "D",
                            "E",
                            "F",
                            "G"
                        ],
                        "answer": "E",
                        "explanation": "The fish pond is at point E.",
                        "instruction": "Questions 17-20<br/>Choose the correct letter, A-G."
                    }
                ]
            },
            {
                "id": 3,
                "title": "Part 3: Theatre Programmes",
                "description": "Two students discuss theatre programmes and their history.",
                "audio": "audio/IELTS_20_Test_3_Part3.mp3",
                "questions": [
                    {
                        "num": 21,
                        "type": "MCQ",
                        "text": "Finn was pleased to discover that their topic",
                        "options": [
                            "A. was not familiar to their module leader.",
                            "B. had not been chosen by other students.",
                            "C. did not prove to be difficult to research."
                        ],
                        "answer": "B",
                        "explanation": "Finn is glad no other students are researching theatre programmes.",
                        "instruction": "Questions 21-26<br/>Choose the correct letter, A, B or C."
                    },
                    {
                        "num": 22,
                        "type": "MCQ",
                        "text": "Maya says a mistaken belief about theatre programmes is that",
                        "options": [
                            "A. theatres pay companies to produce them.",
                            "B. few theatre-goers buy them nowadays.",
                            "C. they contain far more adverts than previously."
                        ],
                        "answer": "A",
                        "explanation": "Maya notes that companies are paid by theatres, contrary to common belief.",
                        "instruction": "Questions 21-26<br/>Choose the correct letter, A, B or C."
                    },
                    {
                        "num": 23,
                        "type": "MCQ",
                        "text": "Finn was surprised that, in early British theatre, programmes",
                        "options": [
                            "A. were difficult for audiences to obtain.",
                            "B. were given out free of charge.",
                            "C. were seen as a kind of contract."
                        ],
                        "answer": "C",
                        "explanation": "Finn is surprised that early programmes were seen as contracts.",
                        "instruction": "Questions 21-26<br/>Choose the correct letter, A, B or C."
                    },
                    {
                        "num": 24,
                        "type": "MCQ",
                        "text": "Maya feels their project should include an explanation of why companies of actors",
                        "options": [
                            "A. promoted their own plays.",
                            "B. performed plays outdoors.",
                            "C. had to tour with their plays."
                        ],
                        "answer": "A",
                        "explanation": "Maya wants to explain why actor troupes promoted their own work.",
                        "instruction": "Questions 21-26<br/>Choose the correct letter, A, B or C."
                    },
                    {
                        "num": 25,
                        "type": "MCQ",
                        "text": "Finn and Maya both think that, compared to nineteenth-century programmes, those from the eighteenth century",
                        "options": [
                            "A. were original.",
                            "B. were more colourful.",
                            "C. were more informative."
                        ],
                        "answer": "C",
                        "explanation": "Both agree that 18th-century programmes had more informative texts.",
                        "instruction": "Questions 21-26<br/>Choose the correct letter, A, B or C."
                    },
                    {
                        "num": 26,
                        "type": "MCQ",
                        "text": "Maya doesn't fully understand why, in the twentieth century,",
                        "options": [
                            "A. very few theatre programmes were printed in the USA.",
                            "B. British theatre programmes failed to develop for so long.",
                            "C. theatre programmes in Britain copied fashions from the USA."
                        ],
                        "answer": "B",
                        "explanation": "Maya is confused as to why British programmes did not evolve for years.",
                        "instruction": "Questions 21-26<br/>Choose the correct letter, A, B or C."
                    },
                    {
                        "num": 27,
                        "type": "MCQ",
                        "text": "What comment is made about the theatre programme for: The Beggar's Opera",
                        "options": [
                            "A. Its origin is somewhat controversial.",
                            "B. It is historically significant for a country.",
                            "C. It was effective at attracting audiences.",
                            "D. It is included in a recent project.",
                            "E. It contains insights into the show.",
                            "F. It resembles an artwork."
                        ],
                        "answer": "F",
                        "explanation": "They note that it resembles an artwork.",
                        "instruction": "Questions 27-30<br/>What comment is made about the programme for each of the following shows? Choose FOUR answers from the box and write the correct letter, A-F."
                    },
                    {
                        "num": 28,
                        "type": "MCQ",
                        "text": "What comment is made about the theatre programme for: Man of La Mancha",
                        "options": [
                            "A. Its origin is somewhat controversial.",
                            "B. It is historically significant for a country.",
                            "C. It was effective at attracting audiences.",
                            "D. It is included in a recent project.",
                            "E. It contains insights into the show.",
                            "F. It resembles an artwork."
                        ],
                        "answer": "E",
                        "explanation": "It provides deep insights into the production.",
                        "instruction": "Questions 27-30<br/>Choose FOUR answers from the box."
                    },
                    {
                        "num": 29,
                        "type": "MCQ",
                        "text": "What comment is made about the theatre programme for: The Tragedy of Jane Shore",
                        "options": [
                            "A. Its origin is somewhat controversial.",
                            "B. It is historically significant for a country.",
                            "C. It was effective at attracting audiences.",
                            "D. It is included in a recent project.",
                            "E. It contains insights into the show.",
                            "F. It resembles an artwork."
                        ],
                        "answer": "B",
                        "explanation": "It has historical significance for the country.",
                        "instruction": "Questions 27-30<br/>Choose FOUR answers from the box."
                    },
                    {
                        "num": 30,
                        "type": "MCQ",
                        "text": "What comment is made about the theatre programme for: The Sailors' Festival",
                        "options": [
                            "A. Its origin is somewhat controversial.",
                            "B. It is historically significant for a country.",
                            "C. It was effective at attracting audiences.",
                            "D. It is included in a recent project.",
                            "E. It contains insights into the show.",
                            "F. It resembles an artwork."
                        ],
                        "answer": "D",
                        "explanation": "This programme was featured in a recent project.",
                        "instruction": "Questions 27-30<br/>Choose FOUR answers from the box."
                    }
                ]
            },
            {
                "id": 4,
                "title": "Part 4: Inclusive Design",
                "description": "A lecture about design concepts that accommodate accessibility.",
                "audio": "audio/IELTS_20_Test_3_Part4.mp3",
                "questions": [
                    {
                        "num": 31,
                        "type": "FILL",
                        "text": "Designing products that can be accessed by a diverse range of people without the need for any _________",
                        "answer": "adaptation",
                        "explanation": "Inclusive design avoids the need for further adaptation.",
                        "instruction": "Questions 31-40<br/>Complete the notes below.<br/>Write ONE WORD ONLY for each answer."
                    },
                    {
                        "num": 32,
                        "type": "FILL",
                        "text": "Not the same as universal design: that is design for everyone, including catering for people with _________ problems.",
                        "answer": "cognitive",
                        "explanation": "Universal design also covers those with cognitive difficulties.",
                        "instruction": "Questions 31-40<br/>Complete the notes below."
                    },
                    {
                        "num": 33,
                        "type": "FILL",
                        "text": "• _________ which are adjustable, avoiding back or neck problems",
                        "answer": "desks",
                        "explanation": "Adjustable desks prevent physical discomfort.",
                        "instruction": "Questions 31-40<br/>Complete the notes below."
                    },
                    {
                        "num": 34,
                        "type": "FILL",
                        "text": "• _________ in public toilets which are easier to use",
                        "answer": "taps",
                        "explanation": "Public toilets need easy-to-use taps.",
                        "instruction": "Questions 31-40<br/>Complete the notes below."
                    },
                    {
                        "num": 35,
                        "type": "FILL",
                        "text": "- designers avoid using _________ in interfaces",
                        "answer": "blue",
                        "explanation": "Blue is avoided in interfaces to assist readability for the elderly.",
                        "instruction": "Questions 31-40<br/>Complete the notes below."
                    },
                    {
                        "num": 36,
                        "type": "FILL",
                        "text": "- people can make commands using a mouse, keyboard or their _________",
                        "answer": "voice",
                        "explanation": "Voice control is a key interface command option.",
                        "instruction": "Questions 31-40<br/>Complete the notes below."
                    },
                    {
                        "num": 37,
                        "type": "FILL",
                        "text": "- Seatbelts are especially problematic for _________ women.",
                        "answer": "pregnant",
                        "explanation": "Traditional seatbelts are problematic for pregnant women.",
                        "instruction": "Questions 31-40<br/>Complete the notes below."
                    },
                    {
                        "num": 38,
                        "type": "FILL",
                        "text": "- PPE jackets are often unsuitable because of the size of women's _________",
                        "answer": "shoulders",
                        "explanation": "PPE jackets are often ill-fitting at the shoulders.",
                        "instruction": "Questions 31-40<br/>Complete the notes below."
                    },
                    {
                        "num": 39,
                        "type": "FILL",
                        "text": "- PPE for female _________ officers dealing with emergencies is the worst.",
                        "answer": "police",
                        "explanation": "Female police officers face issues with standard PPE.",
                        "instruction": "Questions 31-40<br/>Complete the notes below."
                    },
                    {
                        "num": 40,
                        "type": "FILL",
                        "text": "- The _________ in offices is often too low for women.",
                        "answer": "temperature",
                        "explanation": "Standard office temperature settings are often too cold for female comfort.",
                        "instruction": "Questions 31-40<br/>Complete the notes below."
                    }
                ]
            }
        ]
    }
},
  "12": {
    "title": "Cambridge IELTS 20 — Test 4",
    "book": "IELTS 20",
    "listening": {
        "sections": [
            {
                "id": 1,
                "title": "Part 1: Accommodation and Family Visit",
                "description": "Conversation about tourist accommodation and trip planning.",
                "audio": "audio/IELTS_20_Test_4_Part1.mp3",
                "questions": [
                    {
                        "num": 1,
                        "type": "FILL",
                        "text": "Accommodation: _________",
                        "answer": "Kings",
                        "explanation": "The recommended accommodation is Kings.",
                        "instruction": "Questions 1-10<br/>Complete the notes below.<br/>Write ONE WORD AND/OR A NUMBER for each answer."
                    },
                    {
                        "num": 2,
                        "type": "FILL",
                        "text": "George Street Hotel cost of family room per night: £ _________",
                        "answer": "125",
                        "explanation": "The room costs £125 per night.",
                        "instruction": "Questions 1-10<br/>Complete the notes below."
                    },
                    {
                        "num": 3,
                        "type": "FILL",
                        "text": "Recommended trips: a _________ tour of the city centre (starts in Carlton Square)",
                        "answer": "walking",
                        "explanation": "A walking tour of the city centre is recommended.",
                        "instruction": "Questions 1-10<br/>Complete the notes below."
                    },
                    {
                        "num": 4,
                        "type": "FILL",
                        "text": "Recommended trips: a trip by _________ to the old fort",
                        "answer": "boat",
                        "explanation": "The trip to the old fort is by boat.",
                        "instruction": "Questions 1-10<br/>Complete the notes below."
                    },
                    {
                        "num": 5,
                        "type": "FILL",
                        "text": "Science Museum: best day to visit: _________",
                        "answer": "Tuesday",
                        "explanation": "Tuesday is the best day to visit.",
                        "instruction": "Questions 1-10<br/>Complete the notes below."
                    },
                    {
                        "num": 6,
                        "type": "FILL",
                        "text": "Science Museum: see the exhibition about _________",
                        "answer": "space",
                        "explanation": "The space exhibition is highly recommended.",
                        "instruction": "Questions 1-10<br/>Complete the notes below."
                    },
                    {
                        "num": 7,
                        "type": "FILL",
                        "text": "Clacton Market: good for _________ food",
                        "answer": "vegetarian",
                        "explanation": "The market has good vegetarian food options.",
                        "instruction": "Questions 1-10<br/>Complete the notes below."
                    },
                    {
                        "num": 8,
                        "type": "FILL",
                        "text": "Clacton Market: need to have lunch before _________ p.m.",
                        "answer": "2.30",
                        "explanation": "They must have lunch before 2.30 p.m.",
                        "instruction": "Questions 1-10<br/>Complete the notes below."
                    },
                    {
                        "num": 9,
                        "type": "FILL",
                        "text": "Theatre tickets: save up to _________ % on ticket prices",
                        "answer": "75",
                        "explanation": "Discount tickets offer savings of up to 75%.",
                        "instruction": "Questions 1-10<br/>Complete the notes below."
                    },
                    {
                        "num": 10,
                        "type": "FILL",
                        "text": "Blakewell Gardens: climb Telegraph Hill to see a view of the _________",
                        "answer": "port",
                        "explanation": "Telegraph Hill offers views of the local port.",
                        "instruction": "Questions 1-10<br/>Complete the notes below."
                    }
                ]
            },
            {
                "id": 2,
                "title": "Part 2: Football Stadium Tour",
                "description": "A talk about stadium visits and the history of football.",
                "audio": "audio/IELTS_20_Test_4_Part2.mp3",
                "questions": [
                    {
                        "num": 11,
                        "type": "MCQ",
                        "text": "Which TWO things does the speaker say about visiting the football stadium with children? (Select 1 of 2)",
                        "options": [
                            "A. Children can get their photo taken with a football player.",
                            "B. There is a competition for children today.",
                            "C. Parents must stay with their children at all times.",
                            "D. Children will need sunhats and drinks.",
                            "E. The café has a special offer on meals for children."
                        ],
                        "answer": "B",
                        "explanation": "The speaker mentions a competition for kids and parent supervision rules.",
                        "instruction": "Questions 11-12<br/>Choose TWO letters, A-E."
                    },
                    {
                        "num": 12,
                        "type": "MCQ",
                        "text": "Which TWO things does the speaker say about visiting the football stadium with children? (Select 2 of 2)",
                        "options": [
                            "A. Children can get their photo taken with a football player.",
                            "B. There is a competition for children today.",
                            "C. Parents must stay with their children at all times.",
                            "D. Children will need sunhats and drinks.",
                            "E. The café has a special offer on meals for children."
                        ],
                        "answer": "C",
                        "explanation": "Parents must stay with children at all times.",
                        "instruction": "Questions 11-12<br/>Choose TWO letters, A-E."
                    },
                    {
                        "num": 13,
                        "type": "MCQ",
                        "text": "Which TWO features of the stadium tour are new this year? (Select 1 of 2)",
                        "options": [
                            "A. VIP tour",
                            "B. 360 cinema experience",
                            "C. audio guide",
                            "D. dressing room tour",
                            "E. tours in other languages"
                        ],
                        "answer": "A",
                        "explanation": "The VIP tour and audio guides are new additions.",
                        "instruction": "Questions 13-14<br/>Choose TWO letters, A-E."
                    },
                    {
                        "num": 14,
                        "type": "MCQ",
                        "text": "Which TWO features of the stadium tour are new this year? (Select 2 of 2)",
                        "options": [
                            "A. VIP tour",
                            "B. 360 cinema experience",
                            "C. audio guide",
                            "D. dressing room tour",
                            "E. tours in other languages"
                        ],
                        "answer": "C",
                        "explanation": "A new audio guide is introduced.",
                        "instruction": "Questions 13-14<br/>Choose TWO letters, A-E."
                    },
                    {
                        "num": 15,
                        "type": "MCQ",
                        "text": "What football history event took place in: 1870",
                        "options": [
                            "A. the introduction of pay for the players",
                            "B. a change to the design of the goal",
                            "C. the first use of lights for matches",
                            "D. the introduction of goalkeepers",
                            "E. the first international match",
                            "F. two changes to the rules of the game",
                            "G. the introduction of a fee for spectators",
                            "H. the length of a game"
                        ],
                        "answer": "D",
                        "explanation": "Goalkeepers were introduced in 1870.",
                        "instruction": "Questions 15-20<br/>Which event in the history of football in the UK took place in each of the following years? Choose SIX answers from the box and write the correct letter, A-H."
                    },
                    {
                        "num": 16,
                        "type": "MCQ",
                        "text": "What football history event took place in: 1874",
                        "options": [
                            "A. the introduction of pay for the players",
                            "B. a change to the design of the goal",
                            "C. the first use of lights for matches",
                            "D. the introduction of goalkeepers",
                            "E. the first international match",
                            "F. two changes to the rules of the game",
                            "G. the introduction of a fee for spectators",
                            "H. the length of a game"
                        ],
                        "answer": "F",
                        "explanation": "Two rule changes occurred in 1874.",
                        "instruction": "Questions 15-20<br/>Choose SIX answers from the box."
                    },
                    {
                        "num": 17,
                        "type": "MCQ",
                        "text": "What football history event took place in: 1875",
                        "options": [
                            "A. the introduction of pay for the players",
                            "B. a change to the design of the goal",
                            "C. the first use of lights for matches",
                            "D. the introduction of goalkeepers",
                            "E. the first international match",
                            "F. two changes to the rules of the game",
                            "G. the introduction of a fee for spectators",
                            "H. the length of a game"
                        ],
                        "answer": "B",
                        "explanation": "The design of the goal was modified in 1875.",
                        "instruction": "Questions 15-20<br/>Choose SIX answers from the box."
                    },
                    {
                        "num": 18,
                        "type": "MCQ",
                        "text": "What football history event took place in: 1877",
                        "options": [
                            "A. the introduction of pay for the players",
                            "B. a change to the design of the goal",
                            "C. the first use of lights for matches",
                            "D. the introduction of goalkeepers",
                            "E. the first international match",
                            "F. two changes to the rules of the game",
                            "G. the introduction of a fee for spectators",
                            "H. the length of a game"
                        ],
                        "answer": "H",
                        "explanation": "The match length was formalized in 1877.",
                        "instruction": "Questions 15-20<br/>Choose SIX answers from the box."
                    },
                    {
                        "num": 19,
                        "type": "MCQ",
                        "text": "What football history event took place in: 1878",
                        "options": [
                            "A. the introduction of pay for the players",
                            "B. a change to the design of the goal",
                            "C. the first use of lights for matches",
                            "D. the introduction of goalkeepers",
                            "E. the first international match",
                            "F. two changes to the rules of the game",
                            "G. the introduction of a fee for spectators",
                            "H. the length of a game"
                        ],
                        "answer": "C",
                        "explanation": "Floodlights were first used in 1878.",
                        "instruction": "Questions 15-20<br/>Choose SIX answers from the box."
                    },
                    {
                        "num": 20,
                        "type": "MCQ",
                        "text": "What football history event took place in: 1880",
                        "options": [
                            "A. the introduction of pay for the players",
                            "B. a change to the design of the goal",
                            "C. the first use of lights for matches",
                            "D. the introduction of goalkeepers",
                            "E. the first international match",
                            "F. two changes to the rules of the game",
                            "G. the introduction of a fee for spectators",
                            "H. the length of a game"
                        ],
                        "answer": "G",
                        "explanation": "Spectator fees were introduced in 1880.",
                        "instruction": "Questions 15-20<br/>Choose SIX answers from the box."
                    }
                ]
            },
            {
                "id": 3,
                "title": "Part 3: Dyspraxia and Handwriting",
                "description": "Two students discuss research on the benefits of handwriting.",
                "audio": "audio/IELTS_20_Test_4_Part3.mp3",
                "questions": [
                    {
                        "num": 21,
                        "type": "MCQ",
                        "text": "Which TWO benefits for children of learning to write did both students find surprising? (Select 1 of 2)",
                        "options": [
                            "A. improved fine motor skills",
                            "B. improved memory",
                            "C. improved concentration",
                            "D. improved imagination",
                            "E. improved spatial awareness"
                        ],
                        "answer": "C",
                        "explanation": "Improved concentration and spatial awareness surprised them.",
                        "instruction": "Questions 21-22<br/>Choose TWO letters, A-E."
                    },
                    {
                        "num": 22,
                        "type": "MCQ",
                        "text": "Which TWO benefits for children of learning to write did both students find surprising? (Select 2 of 2)",
                        "options": [
                            "A. improved fine motor skills",
                            "B. improved memory",
                            "C. improved concentration",
                            "D. improved imagination",
                            "E. improved spatial awareness"
                        ],
                        "answer": "E",
                        "explanation": "Spatial awareness surprised them.",
                        "instruction": "Questions 21-22<br/>Choose TWO letters, A-E."
                    },
                    {
                        "num": 23,
                        "type": "MCQ",
                        "text": "For children with dyspraxia, which TWO problems with handwriting do the students think are easiest to solve? (Select 1 of 2)",
                        "options": [
                            "A. not spacing letters correctly",
                            "B. not writing in a straight line",
                            "C. applying too much pressure when writing",
                            "D. confusing letter shapes",
                            "E. writing very slowly"
                        ],
                        "answer": "A",
                        "explanation": "Spacing and pressure problems are the easiest to solve.",
                        "instruction": "Questions 23-24<br/>Choose TWO letters, A-E."
                    },
                    {
                        "num": 24,
                        "type": "MCQ",
                        "text": "For children with dyspraxia, which TWO problems with handwriting do the students think are easiest to solve? (Select 2 of 2)",
                        "options": [
                            "A. not spacing letters correctly",
                            "B. not writing in a straight line",
                            "C. applying too much pressure when writing",
                            "D. confusing letter shapes",
                            "E. writing very slowly"
                        ],
                        "answer": "C",
                        "explanation": "Applying too much pressure is solvable.",
                        "instruction": "Questions 23-24<br/>Choose TWO letters, A-E."
                    },
                    {
                        "num": 25,
                        "type": "MCQ",
                        "text": "What does the woman say about using laptops to teach writing to children with dyslexia?",
                        "options": [
                            "A. Children often lack motivation to learn that way.",
                            "B. Children become fluent relatively quickly.",
                            "C. Children react more positively if they make a mistake."
                        ],
                        "answer": "C",
                        "explanation": "Children with dyslexia react more positively to errors on laptops.",
                        "instruction": "Questions 25-30<br/>Choose the correct letter, A, B or C."
                    },
                    {
                        "num": 26,
                        "type": "MCQ",
                        "text": "When discussing whether to teach cursive or print writing, the woman thinks that",
                        "options": [
                            "A. cursive writing disadvantages a certain group of children.",
                            "B. print writing is associated with lower performance.",
                            "C. most teachers in the UK prefer a traditional approach to handwriting."
                        ],
                        "answer": "A",
                        "explanation": "Cursive writing disadvantages certain children.",
                        "instruction": "Questions 25-30<br/>Choose the correct letter, A, B or C."
                    },
                    {
                        "num": 27,
                        "type": "MCQ",
                        "text": "According to the students, what impact does poor handwriting have on exam performance?",
                        "options": [
                            "A. There is evidence to suggest grades are affected by poor handwriting.",
                            "B. Neat handwriting is less important now than it used to be.",
                            "C. Candidates write more slowly and produce shorter answers."
                        ],
                        "answer": "A",
                        "explanation": "Poor handwriting leads to lower exam grades.",
                        "instruction": "Questions 25-30<br/>Choose the correct letter, A, B or C."
                    },
                    {
                        "num": 28,
                        "type": "MCQ",
                        "text": "What prediction does the man make about the future of handwriting?",
                        "options": [
                            "A. Touch typing will be taught before writing by hand.",
                            "B. Children will continue to learn to write by hand.",
                            "C. People will dislike handwriting on digital devices."
                        ],
                        "answer": "B",
                        "explanation": "He predicts handwriting will continue to be taught.",
                        "instruction": "Questions 25-30<br/>Choose the correct letter, A, B or C."
                    },
                    {
                        "num": 29,
                        "type": "MCQ",
                        "text": "The woman is concerned that relying on digital devices has made it difficult for her to",
                        "options": [
                            "A. take detailed notes.",
                            "B. spell and punctuate.",
                            "C. read old documents."
                        ],
                        "answer": "B",
                        "explanation": "She notes her spelling and punctuation have suffered from digital device reliance.",
                        "instruction": "Questions 25-30<br/>Choose the correct letter, A, B or C."
                    },
                    {
                        "num": 30,
                        "type": "MCQ",
                        "text": "How do the students feel about their own handwriting?",
                        "options": [
                            "A. concerned they are unable to write quickly",
                            "B. embarrassed by comments made about it",
                            "C. regretful that they have lost the habit"
                        ],
                        "answer": "C",
                        "explanation": "Both regret losing the habit of writing by hand.",
                        "instruction": "Questions 25-30<br/>Choose the correct letter, A, B or C."
                    }
                ]
            },
            {
                "id": 4,
                "title": "Part 4: Birds of Prey and Communities",
                "description": "Research on the importance of birds of prey around the Chembe Bird Sanctuary.",
                "audio": "audio/IELTS_20_Test_4_Part4.mp3",
                "questions": [
                    {
                        "num": 31,
                        "type": "FILL",
                        "text": "They destroy _________ and other rodents.",
                        "answer": "rats",
                        "explanation": "Birds of prey destroy rats.",
                        "instruction": "Questions 31-40<br/>Complete the notes below.<br/>Write ONE WORD ONLY for each answer."
                    },
                    {
                        "num": 32,
                        "type": "FILL",
                        "text": "They help to prevent farmers from being bitten by _________.",
                        "answer": "snakes",
                        "explanation": "They eat snakes, preventing bites.",
                        "instruction": "Questions 31-40<br/>Complete the notes below."
                    },
                    {
                        "num": 33,
                        "type": "FILL",
                        "text": "They now support the economy by encouraging _________ in the area.",
                        "answer": "tourism",
                        "explanation": "They support the economy by promoting tourism.",
                        "instruction": "Questions 31-40<br/>Complete the notes below."
                    },
                    {
                        "num": 34,
                        "type": "FILL",
                        "text": "accidentally killed by _________ when they are hunting or sleeping",
                        "answer": "traffic",
                        "explanation": "They are frequently run over by traffic.",
                        "instruction": "Questions 31-40<br/>Complete the notes below."
                    },
                    {
                        "num": 35,
                        "type": "FILL",
                        "text": "electrocution... especially at times when there is a lot of _________.",
                        "answer": "rain",
                        "explanation": "Wet weather/rain increases risk of power line electrocution.",
                        "instruction": "Questions 31-40<br/>Complete the notes below."
                    },
                    {
                        "num": 36,
                        "type": "FILL",
                        "text": "Local farmers may illegally shoot them or _________ them.",
                        "answer": "poison",
                        "explanation": "Poison is used illegally by local farmers.",
                        "instruction": "Questions 31-40<br/>Complete the notes below."
                    },
                    {
                        "num": 37,
                        "type": "FILL",
                        "text": "providing a _________ for chickens (expensive)",
                        "answer": "building",
                        "explanation": "A protective building for chickens is expensive.",
                        "instruction": "Questions 31-40<br/>Complete the notes below."
                    },
                    {
                        "num": 38,
                        "type": "FILL",
                        "text": "frightening birds of prey by keeping a _________",
                        "answer": "dog",
                        "explanation": "Keeping a dog frightens birds away.",
                        "instruction": "Questions 31-40<br/>Complete the notes below."
                    },
                    {
                        "num": 39,
                        "type": "FILL",
                        "text": "frightening birds of prey by making a _________",
                        "answer": "noise",
                        "explanation": "Making a loud noise also scares them.",
                        "instruction": "Questions 31-40<br/>Complete the notes below."
                    },
                    {
                        "num": 40,
                        "type": "FILL",
                        "text": "A _________ of methods is usually most effective.",
                        "answer": "combination",
                        "explanation": "A combination of techniques is most effective.",
                        "instruction": "Questions 31-40<br/>Complete the notes below."
                    }
                ]
            }
        ]
    }
}
};
