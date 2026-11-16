/* Dream City Lab: Practice Lab (extra exam-style practice) and homework. All texts are new. */
(function () {
  var L = window.LESSON;

  L.practice = [

    /* ------------------------------------------------------------ P1 */
    {
      id: 'p1', short: 'Use of English 1', n: 1,
      title: 'Use of English, Part 1: multiple-choice cloze',
      goal: 'Look at the words around each gap: many test a phrasal verb or a fixed phrase.',
      blocks: [
        {
          t: 'cloze', id: 'p1a', title: 'Green roofs', tag: 'U', mode: 'select',
          instr: 'For questions 1–8, choose the correct answer for each gap.',
          text: [
            'More and more cities are {1} to green roofs as a way of coping with rising summer temperatures. A layer of plants helps {2} the building cool, absorbs rainwater and gives insects somewhere to live. The idea is hardly new, but it has only recently {3} on in large numbers.',
            'Some owners were at first {4} to pay for the extra work. Experts {5} out that the savings on cooling bills soon {6} up to a considerable sum. They caution, however, that a green roof is no {7} for planting trees at street level, but {8} an addition to it.'
          ],
          gaps: [
            { ans: ['turning'], opts: ['turning', 'heading', 'adding', 'running'] },
            { ans: ['keep'], opts: ['hold', 'stay', 'remain', 'keep'] },
            { ans: ['caught'], opts: ['set', 'come', 'caught', 'got'] },
            { ans: ['reluctant'], opts: ['keen', 'reluctant', 'delighted', 'careless'] },
            { ans: ['point'], opts: ['show', 'tell', 'say', 'point'] },
            { ans: ['add'], opts: ['add', 'come', 'work', 'take'] },
            { ans: ['substitute'], opts: ['alternative', 'change', 'substitute', 'swap'] },
            { ans: ['rather'], opts: ['instead', 'rather', 'better', 'merely'] }
          ]
        }
      ]
    },

    /* ------------------------------------------------------------ P2 */
    {
      id: 'p2', short: 'Use of English 2', n: 2,
      title: 'Use of English, Part 2: open cloze',
      goal: 'Write ONE word in each gap. Prepositions, linking words and inversion are all tested here.',
      blocks: [
        {
          t: 'cloze', id: 'p2a', title: 'Learning by building', tag: 'U', mode: 'type',
          instr: 'Think of the word which best fits each gap. Use only one word in each gap.',
          text: [
            'Children who build things {1} their hands tend to remember what they learn for longer. Teachers have known this {2} years, yet schools still spend most of the day asking pupils to sit still. One head teacher has now decided to put an {3} to this.',
            'She has replaced two hours of lectures a week with workshops {4} pupils design and make useful objects. “If I {5} known how well it would work, I would have started a decade ago,” she says. Parents, {6} had been sceptical, now say they would {7} their children learned this way. Not only {8} pupils enjoy the workshops, but their grades have improved too.'
          ],
          gaps: [
            { ans: ['with'] },
            { ans: ['for'] },
            { ans: ['end'] },
            { ans: ['where'] },
            { ans: ['had'] },
            { ans: ['who'] },
            { ans: ['rather', 'sooner'] },
            { ans: ['do'] }
          ]
        }
      ]
    },

    /* ------------------------------------------------------------ P3 */
    {
      id: 'p3', short: 'Use of English 3', n: 3,
      title: 'Use of English, Part 3: word formation',
      goal: 'Decide first: noun, adjective, adverb or verb? Then check for a negative prefix or a plural.',
      blocks: [
        {
          t: 'cloze', id: 'p3a', title: 'The forgotten square', tag: 'U', mode: 'type',
          instr: 'Use the word in capitals at the end of each gap to form a word that fits. Write one word only.',
          text: [
            'The old square had been {1} for years before residents took action. Their {2} spread quickly on social media, and within weeks hundreds of {3} had signed up to help. The council was {4} to give permission at first, as officials worried about the {5} of an event with no professional supervision.',
            'The result, however, was a {6} improvement in the neighbourhood. Local shops have reported a steady {7} in sales, and the square is now one of the most {8} places in the city.'
          ],
          gaps: [
            { ans: ['unused', 'disused'], hint: 'USE' },
            { ans: ['enthusiasm'], hint: 'ENTHUSIASTIC' },
            { ans: ['volunteers'], hint: 'VOLUNTARY' },
            { ans: ['unwilling'], hint: 'WILLING' },
            { ans: ['safety'], hint: 'SAFE' },
            { ans: ['remarkable'], hint: 'REMARK' },
            { ans: ['growth'], hint: 'GROW' },
            { ans: ['attractive'], hint: 'ATTRACT' }
          ]
        }
      ]
    },

    /* ------------------------------------------------------------ P4 */
    {
      id: 'p4', short: 'Use of English 4', n: 4,
      title: 'Use of English, Part 4: key word transformation',
      goal: 'Keep the meaning, change the structure. Do not change the key word.',
      blocks: [
        {
          t: 'kwt', id: 'p4a', title: 'Key word transformation', tag: 'U',
          instr: 'Complete the second sentence so that it has a similar meaning to the first. Use the word in capitals without changing it. Write between <b>two and five</b> words including the word given.',
          items: [
            { s: 'Cities have rarely asked citizens for their opinions.', key: 'SELDOM', pre: 'Cities have', post: 'citizens for their opinions.', ans: ['seldom asked'] },
            { s: 'I am sure the organisers were disappointed with the turnout.', key: 'MUST', pre: 'The organisers', post: 'disappointed with the turnout.', ans: ['must have been'] },
            { s: 'It was not necessary for us to book a place.', key: 'NEED', pre: 'We', post: 'a place.', ans: ['did not need to book', 'didn’t need to book', 'didn\'t need to book'] },
            { s: '“Why don’t we close the road?” she said.', key: 'SUGGESTED', pre: 'She', post: 'the road.', ans: ['suggested closing'] },
            { s: 'The plan failed because the mayor did not listen.', key: 'HAD', pre: 'If the mayor', post: ', the plan would not have failed.', ans: ['had listened'] },
            { s: 'I would prefer not to discuss money at this meeting.', key: 'RATHER', pre: 'I', post: 'money at this meeting.', ans: ['would rather not discuss', 'would rather not talk about', '’d rather not discuss', '\'d rather not discuss'] },
            { s: 'It is a pity that the council did not consult us earlier.', key: 'WISH', pre: 'I', post: 'consulted us earlier.', ans: ['wish the council had'] },
            { s: 'Despite the rain, the event was a success.', key: 'ALTHOUGH', pre: 'The event was a success', post: '.', ans: ['although it rained', 'although it was raining', 'although it rained heavily', 'although it was raining heavily'] }
          ]
        }
      ]
    },

    /* ------------------------------------------------------------ P5 */
    {
      id: 'p5', short: 'Paraphrase', n: 5,
      title: 'Paraphrase workshop',
      goal: 'Say the same thing with different words and a different structure. This skill helps in Writing, Speaking and Use of English.',
      blocks: [
        {
          t: 'match', id: 'p5m', title: 'Match the sentence to its paraphrase', tag: 'P',
          instr: 'Tap a sentence on the left, then the paraphrase on the right.',
          pairs: [
            { l: 'Few people attend these meetings.', r: 'Turnout at these meetings is usually low.' },
            { l: 'The plan was dropped because of public opposition.', r: 'Strong objections from residents led to the plan being abandoned.' },
            { l: 'She did not expect the project to be so popular.', r: 'The popularity of the project came as a surprise to her.' },
            { l: 'Nobody could have predicted the outcome.', r: 'The outcome was impossible to foresee.' },
            { l: 'The council is reluctant to spend money on parks.', r: 'The council does not want to invest in green spaces.' },
            { l: 'People who live there love it.', r: 'It is highly valued by local residents.' },
            { l: 'It takes years to change a city.', r: 'Changing a city is a slow process.' },
            { l: 'He was the only person to speak against it.', r: 'Nobody except him voiced any objection.' }
          ],
          order: [3, 6, 0, 7, 1, 4, 2, 5]
        },
        {
          t: 'mcq', id: 'p5q', title: 'Which sentence means the same?', tag: 'P',
          instr: 'Choose the sentence (A, B, C or D) with the closest meaning to the original.',
          qs: [
            { q: 'Despite its size, the project cost very little.', pos: 2,
              right: 'Although the project was large, it was cheap.',
              wrong: ['Because the project was large, it cost very little.', 'The project was cheap because it was small.', 'The size of the project made it very expensive.'],
              why: '<i>Despite</i> signals contrast: large but cheap.' },
            { q: 'The more residents joined in, the better the plan became.', pos: 0,
              right: 'As more residents took part, the plan improved.',
              wrong: ['The plan improved although few residents joined in.', 'Residents joined in only after the plan was better.', 'The better plan stopped residents from joining in.'],
              why: '<i>The more… the better</i> = parallel increase.' },
            { q: 'I would have joined if I had known about it.', pos: 3,
              right: 'I did not join because I was not aware of it.',
              wrong: ['I joined although I knew nothing about it.', 'I knew about it, so I joined.', 'I will join if I find out about it.'],
              why: 'Third conditional = unreal past: the opposite is true.' },
            { q: 'Not until the road closed did traffic improve.', pos: 1,
              right: 'Traffic only got better after the road had been closed.',
              wrong: ['The road closed because traffic had improved.', 'Traffic improved before the road was closed.', 'Closing the road made traffic worse.'],
              why: '<i>Not until… did</i> = only after.' },
            { q: 'She is said to have designed the square.', pos: 3,
              right: 'People say that she designed the square.',
              wrong: ['She says she will design the square.', 'The square is said to be designed by nobody.', 'She refused to design the square.'],
              why: '<i>is said to have + past participle</i> = people say that she did it.' }
          ]
        },
        {
          t: 'write', id: 'p5w', title: 'Write your own paraphrase', tag: 'P',
          promptHtml:
            '<p style="margin:0 0 10px"><b>Task.</b> Paraphrase each sentence. Change the structure as well as the words.</p>' +
            '<ol style="margin:0 0 10px"><li>Fewer than one resident in ten has ever attended a planning meeting.</li><li>The more people take part in a design, the more likely they are to look after it.</li><li>Had the council consulted children, the playground would have been far better.</li></ol>' +
            '<p style="margin:0">Write <b>40–80 words</b> in total.</p>',
          ph: '1. …  2. …  3. …',
          min: 40, max: 80,
          checks: [
            { label: 'At least 40 words', min: 40 },
            { label: 'No more than 80 words', max: 80 },
            { label: 'Three numbered sentences', re: '1[.)][\\s\\S]*2[.)][\\s\\S]*3[.)]' }
          ],
          exp: ['hardly any', 'as … increases', 'people are likely to… if…', 'if only the council had…', 'would have been improved'],
          model:
            '<p>1. Hardly any residents have ever been to a planning meeting. 2. When people help to create a design, they tend to take better care of it afterwards. 3. If only the council had asked the children, the playground would have turned out much better.</p>'
        }
      ]
    },

    /* ------------------------------------------------------------ P6 */
    {
      id: 'p6', short: 'City vocabulary', n: 6,
      title: 'Vocabulary: cities and community',
      goal: 'Eight phrases for talking about where people live, then eight sentences to complete.',
      blocks: [
        {
          t: 'match', id: 'p6m', title: 'Match the phrase to its meaning', tag: 'V',
          instr: 'Tap a phrase on the left, then its meaning on the right.',
          pairs: [
            { l: 'a ghost town', r: 'a place that is almost empty because people have left' },
            { l: 'rush hour', r: 'the time of day when roads are busiest' },
            { l: 'urban sprawl', r: 'the uncontrolled spread of a city into the countryside' },
            { l: 'a concrete jungle', r: 'a built-up area with very little greenery' },
            { l: 'within walking distance', r: 'near enough to reach on foot' },
            { l: 'gridlock', r: 'a situation in which traffic cannot move at all' },
            { l: 'gentrification', r: 'richer people moving in and pushing prices up' },
            { l: 'a bustling market', r: 'a busy, noisy and lively place to shop' }
          ],
          order: [3, 6, 0, 7, 1, 4, 2, 5]
        },
        {
          t: 'cloze', id: 'p6s', title: 'Choose the word', tag: 'V', mode: 'select',
          instr: 'Choose the word that completes each sentence.',
          lines: [
            'The shop closed because it was not {1} walking distance of the station.',
            'Urban {2} has swallowed fields that were once farms.',
            'After the factory closed, the town became a {3} town.',
            'Traffic was in complete {4}, and nobody moved for an hour.',
            'Rents have risen sharply since the area became {5}.',
            'The old town was {6} with life on market day.',
            'Local people have launched a {7} to protect the park.',
            'There is a strong sense of {8} on this estate: people look out for each other.'
          ],
          gaps: [
            { ans: ['within'], opts: ['within', 'inside', 'around', 'along'] },
            { ans: ['sprawl'], opts: ['crowd', 'sprawl', 'traffic', 'mess'] },
            { ans: ['ghost'], opts: ['phantom', 'dark', 'ghost', 'spirit'] },
            { ans: ['gridlock'], opts: ['gridlock', 'crash', 'hurry', 'stand'] },
            { ans: ['gentrified'], opts: ['expanded', 'gentrified', 'demolished', 'abandoned'] },
            { ans: ['bursting'], opts: ['pouring', 'filling', 'hanging', 'bursting'] },
            { ans: ['campaign'], opts: ['march', 'strike', 'campaign', 'claim'] },
            { ans: ['community'], opts: ['crowd', 'fashion', 'society', 'community'] }
          ]
        }
      ]
    },

    /* ------------------------------------------------------------ P7 */
    {
      id: 'p7', short: 'Reading 2', n: 7,
      title: 'Reading: a city in a game',
      goal: 'A second article on the same theme. Read it once, then answer the questions without looking back at the first article.',
      blocks: [
        {
          t: 'story', id: 'p7art', title: 'A city in a game', by: 'Feature article, written for this lesson. The town and the people are invented.',
          paras: [
            'When the council of Marlow Heights asked residents to comment on plans for its derelict riverside park, it received eleven replies, all from people over sixty. So this autumn it tried something different: it invited teenagers to rebuild the park inside a free building game, and to present the results at the town hall.',
            'Within a month, more than two hundred young people had submitted designs. Most of them left out the car park entirely and added a skate area, shaded seating, a swimming spot and a stage. The designs were not always practical: one included a waterfall forty metres tall. But the planners say that was not the point. “We were not looking for blueprints,” says project leader Sofia Brandt. “We were looking for priorities, and the teenagers made theirs very clear.”',
            'Some adults remain doubtful. Councillor Jonas Pike worries that a game rewards spectacle over substance. “Anyone can place a fountain on a screen,” he says. “Few have to think about who will clean it.” Brandt does not dismiss the criticism. She admits that the process has so far reached only young people with computers at home, and the council is now lending laptops and running sessions at the library.',
            'Whatever the final park looks like, the experiment has already changed something. At the town hall presentation the room was full, the youngest speaker was twelve, and several councillors reported, with some surprise, that they had enjoyed the evening. “I came expecting to be bored,” Pike admitted, “and I left with a list of questions I had never thought to ask.”'
          ]
        },
        {
          t: 'mcq', id: 'p7q', title: 'Multiple choice', tag: 'R',
          instr: 'For questions 1–4, choose the answer (A, B, C or D) which fits best.',
          qs: [
            { q: 'Why did the council try the building game?', pos: 1,
              right: 'Its earlier consultation had reached very few people, and none of them young.',
              wrong: ['The park had become too dangerous to visit.', 'Residents had asked for a video-game area.', 'Teenagers had complained about the town hall.'],
              why: 'Only eleven replies came, “all from people over sixty”.' },
            { q: 'What does Brandt mean by “We were looking for priorities”?', pos: 3,
              right: 'The council wanted to learn what young people value most.',
              wrong: ['Planners wanted to copy the designs exactly.', 'The game was meant to teach planning skills.', 'The project was meant to produce a budget.'],
              why: 'She says the designs were not blueprints; the point was what mattered to the teenagers.' },
            { q: 'What is Councillor Pike’s concern?', pos: 0,
              right: 'A game may produce impressive ideas without practical thought.',
              wrong: ['Teenagers will not take the project seriously.', 'The game is too expensive for the council.', 'Older residents will refuse to use the park.'],
              why: '“Anyone can place a fountain on a screen… Few have to think about who will clean it.”' },
            { q: 'How did Pike react to the presentation evening?', pos: 2,
              right: 'He was surprised to find it useful and enjoyable.',
              wrong: ['He felt it confirmed his doubts.', 'He left early because he was bored.', 'He decided to cancel the project.'],
              why: '“I came expecting to be bored, and I left with a list of questions I had never thought to ask.”' }
          ]
        },
        {
          t: 'tfng', id: 'p7tf', title: 'True, False or Not given?', tag: 'R',
          instr: 'Decide whether each statement agrees with the article (True), contradicts it (False), or the article does not say (Not given).',
          items: [
            { s: 'Eleven residents replied to the council’s first consultation.', a: 'T', why: '“it received eleven replies”.' },
            { s: 'Every design submitted by the teenagers included a car park.', a: 'F', why: 'Most “left out the car park entirely”.' },
            { s: 'The council has bought laptops for the project.', a: 'NG', why: 'It is “lending laptops”, but nothing is said about buying them.' },
            { s: 'Brandt rejects Pike’s criticism completely.', a: 'F', why: '“Brandt does not dismiss the criticism.”' }
          ]
        }
      ]
    },

    /* ------------------------------------------------------------ P8 */
    {
      id: 'p8', short: 'Video recap', n: 8,
      title: 'Listening: the talk once more',
      goal: 'Watch the video again, or just the parts you are unsure of. These questions check details you may have missed.',
      blocks: [
        { t: 'media', kind: 'video', id: 'ted', title: 'James Rojas · How would you design your dream city?', tag: 'L', instr: 'Watch again before you answer.' },
        {
          t: 'tfng', id: 'p8tf', title: 'True, False or Not given?', tag: 'L',
          instr: 'Decide whether each statement agrees with the talk (True), contradicts it (False), or the speaker does not say (Not given).',
          items: [
            { s: 'Rojas says that he enjoys public speaking.', a: 'F', why: '“Like most people, I hate public speaking.”' },
            { s: 'He thinks cities are often treated as problems to be solved with a polished presentation.', a: 'T', why: 'He says planners treat the city “as a problem to be solved by a really fancy presentation”.' },
            { s: 'In the workshops, people build a childhood memory before they plan a city.', a: 'T', why: 'The memory comes first; it “inspires you to build cities of the future”.' },
            { s: 'Most of the objects on the table are brand new.', a: 'F', why: 'He uses “small recycled objects”.' },
            { s: 'The Tijuana workshop lasted a whole week.', a: 'NG', why: 'He gives no information about how long it lasted.' },
            { s: 'The Phoenix group campaigned for several years before the station was built.', a: 'T', why: 'They wrote, called and emailed for many years until 2019.' }
          ]
        },
        {
          t: 'mcq', id: 'p8q', title: 'Multiple choice', tag: 'L',
          instr: 'For questions 1–4, choose the answer (A, B, C or D) which fits best.',
          qs: [
            { q: 'Which of these do people never build in the workshops?', pos: 2,
              right: 'A huge house in the suburbs.',
              wrong: ['Parks and gardens.', 'Places to meet friends.', 'Walkable neighbourhoods.'],
              why: '“No one builds a giant house in the suburbs.”' },
            { q: 'Why were some planners worried about his method?', pos: 0,
              right: 'People might design things the city could not provide.',
              wrong: ['The method took too long.', 'Children would be bored by it.', 'The objects were too expensive.'],
              why: 'They feared a “launching pad to the moon”.' },
            { q: 'What happens to people’s thinking as they sort through the objects?', pos: 3,
              right: 'They stop analysing and move into a creative state.',
              wrong: ['They become competitive and ambitious.', 'They start to criticise the planners.', 'They forget their own memories.'],
              why: 'They “let go of analytical thinking and enter a creative flow state”.' },
            { q: 'What did the Phoenix participants’ designs include?', pos: 1,
              right: 'Shade, low kerbs and painted crosswalks.',
              wrong: ['A new hospital and a car park.', 'A bridge across the river.', 'Bus stops with advertising.'],
              why: 'He lists painted crosswalks, low sidewalks, artwork, shade and landscape buffers.' }
          ]
        },
        {
          t: 'cloze', id: 'p8c', title: 'Summary of the talk', tag: 'L', mode: 'select',
          instr: 'Choose the word that completes each gap in the summary.',
          text: [
            'Rojas argues that planners often {1} the feeling of a place, because their tools cannot measure it. His workshops {2} people to build memories from small objects, which leads them to {3} analytical thinking. In teams, participants {4} and compromise until individual ideas become shared. The cities they design are {5}, green and social, not {6} places built around cars.'
          ],
          gaps: [
            { ans: ['miss'], opts: ['build', 'measure', 'miss', 'repeat'] },
            { ans: ['invite'], opts: ['prevent', 'invite', 'refuse', 'warn'] },
            { ans: ['abandon'], opts: ['strengthen', 'defend', 'measure', 'abandon'] },
            { ans: ['negotiate'], opts: ['negotiate', 'facilitate', 'advocate', 'dominate'] },
            { ans: ['walkable'], opts: ['expensive', 'crowded', 'walkable', 'transactional'] },
            { ans: ['transactional'], opts: ['intangible', 'multisensory', 'transactional', 'passive'] }
          ]
        }
      ]
    }
  ];

  /* ---------------------------------------------------------------- homework */
  L.homework = {
    id: 'hw', short: 'Homework', t: [0, 0],
    title: 'Homework: a city for everyone',
    goal: 'About 70 minutes in total: an open cloze, an essay and a summary of the talk.',
    blocks: [
      { t: 'html', cls: 'note', html: '<span class="hwtag">Task 1 of 4</span><br>Open cloze: write <b>one word</b> in each gap.' },
      {
        t: 'cloze', id: 'hwcloze', title: 'Open cloze: a city for everyone', tag: 'U', mode: 'type',
        instr: 'Think of the word which best fits each gap. Use only one word in each gap.',
        text: [
          'When the city of Westmere announced plans for a new tram line, hardly anyone paid attention {1} the first meeting took place. Only {2} the plans were published did residents realise how much would change. “If they {3} asked us earlier, we would have helped to design it,” complained one shop owner. By the second meeting the hall was so crowded {4} people had to stand in the corridor.',
          'The council has promised to listen from now on, and many say it is high {5} it did. Whether the promise is kept remains to be {6}, but several residents say they would {7} have a smaller tram line they helped to plan than a larger one they did not. Had the council consulted people earlier, much of the anger {8} have been avoided.'
        ],
        gaps: [
          { ans: ['until', 'till'] },
          { ans: ['after', 'when'] },
          { ans: ['had'] },
          { ans: ['that'] },
          { ans: ['time'] },
          { ans: ['seen'] },
          { ans: ['rather', 'sooner'] },
          { ans: ['would', 'could', 'might'] }
        ]
      },
      { t: 'html', cls: 'note', html: '<span class="hwtag">Task 2 of 4</span><br>Essay: <b>220–260 words</b>.' },
      {
        t: 'write', id: 'hwessay', title: 'Essay: who should decide how our cities look?', tag: 'W',
        promptHtml:
          '<p style="margin:0 0 10px"><b>Task.</b> Your class has attended a panel discussion on who should decide how a town or city is designed. You have made the notes below.</p>' +
          '<p style="margin:0 0 10px"><b>Write an essay for your tutor discussing two of the points. You should explain which idea is more convincing, giving reasons in support of your answer.</b></p>' +
          '<ul style="margin:0 0 10px"><li>professional planners and architects</li><li>ordinary residents</li><li>(your own idea)</li></ul>' +
          '<p style="margin:0">Use <b>at least three</b> patterns from the lesson: <i>get … right, but … wrong · no matter who/how · stop being … and start being · once … it becomes · it’s high time · if + past perfect</i>.</p>',
        ph: 'Write your essay here…',
        min: 220, max: 260,
        checks: [
          { label: 'At least 220 words', min: 220 },
          { label: 'No more than 260 words', max: 260 },
          { label: 'Introduction and conclusion (use “In conclusion”, “To sum up” or “Overall”)', re: '\\b(in conclusion|to sum up|overall|all things considered|on balance)\\b' },
          { label: 'No matter, once or stop being', re: '\\bno matter\\b|\\bonce\\b|\\bstop being\\b|\\bstopped being\\b' },
          { label: 'High time, wish or would rather', re: '\\bhigh time\\b|\\bi wish\\b|\\bwould rather\\b|\\bi’d rather\\b|\\bi\'d rather\\b' },
          { label: 'If + past perfect', re: '\\bif\\b[^.]*\\bhad\\b[^.]*\\b(been|done|known|seen|listened|asked|started|consulted|taken)\\b' },
          { label: 'A word from the lesson', re: 'transactional|belonging|walkable|public space|infrastructure|hands-on|multisensory|intangible|grassroots|empathy|facilitate|embrace|advocate|compromise' }
        ],
        exp: ['it is widely believed', 'arguably', 'on the other hand', 'it’s high time', 'get the … right', 'a sense of belonging', 'public space', 'grassroots', 'compromise']
      },
      { t: 'html', cls: 'note', html: '<span class="hwtag">Task 3 of 4</span><br>Summary: <b>100–130 words</b>. Watch the talk again, then write without copying.' },
      {
        t: 'write', id: 'hwsum', title: 'Summary of the talk', tag: 'W',
        promptHtml:
          '<p style="margin:0 0 10px"><b>Task.</b> Summarise the talk by James Rojas for a friend who has not seen it. Say what problem he identifies, what his method is, what people usually build, and what happened in one of his projects.</p>' +
          '<p style="margin:0">Use your own words. Include <b>whereas / while / although</b> at least once.</p>',
        ph: 'In his talk, James Rojas explains…',
        min: 100, max: 130,
        checks: [
          { label: 'At least 100 words', min: 100 },
          { label: 'No more than 130 words', max: 130 },
          { label: 'The problem with traditional meetings is mentioned', re: 'meeting' },
          { label: 'Play, objects or building is mentioned', re: '\\bplay|objects|build|model' },
          { label: 'One project is named (Tijuana or Phoenix)', re: 'tijuana|phoenix|camino verde|casa de las ideas|light rail' },
          { label: 'Whereas, while or although', re: '\\bwhereas\\b|\\bwhile\\b|\\balthough\\b' }
        ],
        exp: ['argues that', 'according to', 'rather than', 'as a result', 'whereas', 'in his view', 'participants']
      },
      {
        t: 'reflect', id: 'hwdiary', title: 'Task 4 of 4 · Vocabulary diary', tag: 'V',
        fields: [
          { id: 'a', label: 'Three words from the lesson, each in a new sentence of your own' },
          { id: 'b', label: 'One pattern from the talk (get … right but … wrong, no matter…, stop being… and start being…), used in a sentence about your own town' }
        ]
      }
    ]
  };
})();
