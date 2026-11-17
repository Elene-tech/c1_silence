/* Dream City Lab, steps 6-9: photo speaking, reading, discussion, writing. */
(function () {
  var L = window.LESSON;

  L.steps.push(

/* ====================================================================== 6 */
{
  id: 'photos', short: 'Speaking', t: [70, 80],
  title: 'Speaking: compare the photographs',
  goal: 'Exam-style photo tasks on places and people. Compare, speculate and react. Keep to the time.',
  blocks: [
    { t: 'html', cls: 'ptask warm', html:
      '<h4>Task 1 · Streets for people or for cars?</h4>' +
      '<p>Student A: compare photographs A and B, and say <b>what the people might enjoy about spending time in these places</b>, and <b>how these places might affect people’s daily lives</b>. You have 1 minute.</p>' +
      '<p>Student B: when your partner has finished, answer:</p>' +
      '<span class="q">Which of these two places would you rather live near? Why?</span>' },
    { t: 'photos', items: [
      { src: 'img/street.jpg', alt: 'A wide pedestrian street with rows of benches, trees and a few people walking; cars and a bus are parked or waiting behind a low fence.', cap: 'Photo A' },
      { src: 'img/carpark.jpg', alt: 'A huge car park seen from above: rows of parked cars, white lines and arrows, a grey sky and almost no people.', cap: 'Photo B' }
    ] },
    { t: 'timer', times: [{ s: 60, label: 'Student A speaks' }, { s: 30, label: 'Student B answers' }] },
    { t: 'html', cls: 'ptask wish', html:
      '<h4>Task 2 · Having your say</h4>' +
      '<p>Student B: compare photographs C and D, and say <b>what planners might learn about a city from these two views</b>, and <b>what they might miss</b>. You have 1 minute.</p>' +
      '<p>Student A: when your partner has finished, answer:</p>' +
      '<span class="q">Which view would tell a planner more about how people feel in a place? Why?</span>' },
    { t: 'photos', items: [
      { src: 'img/city-data.jpg', alt: 'A man in a suit stands with his back to us above a huge city at dusk; glowing lines connect points across the buildings like a network.', cap: 'Photo C' },
      { src: 'img/city-model.jpg', alt: 'A 3D computer model of a town: white blocks for buildings on green hills, with a dark blue river.', cap: 'Photo D' }
    ] },
    { t: 'timer', times: [{ s: 60, label: 'Student B speaks' }, { s: 30, label: 'Student A answers' }] },
    {
      t: 'tips', items: [
        { k: 'Compare', h: 'Whereas · while · by contrast', p: '<b>Whereas</b> Photo A is made for people on foot, B is made for vehicles. <b>By contrast</b>, …' },
        { k: 'Speculate', h: 'Might · could · must · can’t', p: 'They <b>might</b> be neighbours. She <b>must</b> be the organiser. He <b>can’t</b> be enjoying this.' },
        { k: 'React', h: 'Feelings and reasons', p: 'I’d imagine they feel… because… It would probably be… to…' },
        { k: 'Time', h: 'Do not describe for too long', p: 'Spend 15 seconds on what you see. Use the rest to answer the question.' }
      ]
    },
    {
      t: 'cloze', id: 'cmpsel', title: 'Compare and speculate: choose the best word', tag: 'S', mode: 'select',
      instr: 'Choose the word or phrase that completes each sentence about the photographs.',
      lines: [
        '{1} the street in Photo A is shaded and lined with benches, the car park in Photo B feels grey and empty.',
        'The street looks inviting. {2}, the car park seems lifeless.',
        'The city in Photo C looks {3} alive than the model in Photo D, which has no people in it.',
        'The man in Photo C {4} be a planner: he is looking at the whole city.',
        '{5} different the two places are, both could be improved with more trees.',
        'I’d rather {6} near the first place, as I enjoy being around people.',
        'If the car park {7} turned into a garden, the whole area would look different.',
        'It is high time we {8} streets for people, not just for cars.'
      ],
      gaps: [
        { ans: ['Whereas'], opts: ['Whereas', 'Despite', 'Unless', 'Provided'] },
        { ans: ['In contrast'], opts: ['Moreover', 'Therefore', 'Instead', 'In contrast'] },
        { ans: ['more'], opts: ['most', 'more', 'much', 'very'] },
        { ans: ['might'], opts: ['shall', 'ought', 'might', 'need'] },
        { ans: ['However'], opts: ['Whatever', 'Whenever', 'Whoever', 'However'] },
        { ans: ['live'], opts: ['live', 'to live', 'living', 'lived'] },
        { ans: ['were'], opts: ['would be', 'were', 'had been', 'is'] },
        { ans: ['designed'], opts: ['design', 'will design', 'designed', 'are designing'] }
      ]
    },
    { t: 'html', cls: 'ptask warm', html:
      '<h4>Task 3 · Mini-talk: my dream street (2 minutes)</h4>' +
      '<p>Student A speaks for two minutes, then Student B asks three questions. Use at least three of these:</p>' +
      '<p><b>get … right, but … wrong</b> · <b>no matter who/where/how</b> · <b>stop being … and start being …</b> · <b>once … it becomes …</b> · <b>it’s high time</b></p>' +
      '<span class="q">Describe the street you would build if you could design it from nothing. Who would use it, and what would they feel there?</span>' },
    { t: 'timer', times: [{ s: 120, label: 'Mini-talk' }] },
    { t: 'html', cls: 'ptask warm', html:
      '<h4>Extra pair (if you finish early, or for homework speaking)</h4>' +
      '<p>Compare photographs F and G, and say <b>what it might be like to spend an hour in each place</b>, and <b>who might prefer which</b>. Then answer: <b>Which place feels more like a city built for people? Why?</b></p>' },
    { t: 'photos', items: [
      { src: 'img/market.jpg', alt: 'A crowded street market: stalls with fruit under orange awnings, many people walking, a white mosque with domes in the background.', cap: 'Photo F' },
      { src: 'img/motorway.jpg', alt: 'A multi-lane road seen from above, full of cars driving in both directions, with a pavement and low wall at the side.', cap: 'Photo G' }
    ] },
    {
      t: 'reflect', id: 'spnotes', title: 'Self-check', tag: 'S',
      fields: [
        { id: 'a', label: 'One comparing phrase I used' },
        { id: 'b', label: 'One thing to do better next time' }
      ]
    }
  ]
},

/* ====================================================================== 6b */
{
  id: 'build', short: 'Build a city', t: [80, 92],
  title: 'Build your dream city',
  goal: 'Do what the people in the talk do: build a memory, then a city. Pick an object, tap a square to place it, tap again to remove it.',
  blocks: [
    { t: 'photos', items: [
      { src: 'img/friends.jpg', alt: 'Two boys on a playground: one in a blue shirt holds the hand of the other, who sits on a spinning seat and smiles.', cap: 'A memory to start from: playing with a friend' }
    ] },
    { t: 'html', cls: 'ptask warm', html:
      '<h4>Round 1 · Build a memory (3 minutes, no talking)</h4>' +
      '<p>In the talk, people build a favourite childhood memory from small objects. Do the same on the screen: choose objects, place them, and build <b>one real memory</b>.</p>' },
    {
      t: 'citybuilder', id: 'cb1', title: 'Round 1 · My childhood memory', tag: 'S',
      instr: 'Choose an object below, then tap squares to place it. Tap an object again to remove it, or use the hand.',
      cols: 8, rows: 5, timer: 180,
      cats: [{ k: 'green', label: 'Nature' }, { k: 'social', label: 'People and places' }, { k: 'move', label: 'Active play' }, { k: 'car', label: 'Screens and things' }],
      palette: [
        { e: '🌳', n: 'Tree', c: 'green' }, { e: '🌊', n: 'Water', c: 'green' }, { e: '🌻', n: 'Flowers', c: 'green' },
        { e: '👵', n: 'Family', c: 'social' }, { e: '🧑‍🤝‍🧑', n: 'Friends', c: 'social' }, { e: '🏠', n: 'House', c: 'social' }, { e: '🍦', n: 'Ice cream', c: 'social' },
        { e: '🚲', n: 'Bike', c: 'move' }, { e: '⚽', n: 'Ball', c: 'move' }, { e: '🪁', n: 'Kite', c: 'move' }, { e: '🏕️', n: 'Camp', c: 'move' },
        { e: '📺', n: 'Screen', c: 'car' }, { e: '🧸', n: 'Toys', c: 'car' }, { e: '💰', n: 'Money', c: 'car' }
      ],
      verdict: function (c, total) {
        if (total < 5) return 'Place at least five objects to build a real memory.';
        if (c.car === 0) return 'Your memory has no screens, toys or money in it. In the talk, Rojas says that is typical: <b>no one builds screen time or wealth</b>.';
        return 'Look at your memory again. What matters more in it: the people and places, or the things? What does Rojas say people <i>never</i> build?';
      }
    },
    { t: 'html', cls: 'ptask warm', html:
      '<h4>Show and tell (3 minutes)</h4>' +
      '<p>Show your picture to your partner <b>without speaking</b>. They guess the story. Then tell it in 45 seconds. Your partner asks: <b>“What do our memories have in common?”</b></p>' +
      '<p>Use: <b>Most of them are…</b> · <b>None of them…</b> · <b>No matter who…</b></p>' },
    { t: 'html', cls: 'ptask wish', html:
      '<h4>Round 2 · Build your dream city (6 minutes)</h4>' +
      '<p>Work as a pair, on one screen. Build the city you would both like to live in. <b>Negotiate and compromise</b>: you may only place an object when your partner agrees.</p>' +
      '<p>Use: <b>What if we put … next to …?</b> · <b>I’d rather we …</b> · <b>Let’s compromise: …</b> · <b>It’s high time we added …</b></p>' },
    {
      t: 'citybuilder', id: 'cb2', title: 'Round 2 · Our dream city', tag: 'S',
      instr: 'Choose an object, then tap squares to place it. The coloured counters show what kind of city you are building.',
      cols: 10, rows: 7, timer: 360,
      cats: [{ k: 'green', label: 'Nature' }, { k: 'social', label: 'People and places' }, { k: 'move', label: 'Walk · bike · tram' }, { k: 'car', label: 'Cars and offices' }],
      palette: [
        { e: '🌳', n: 'Tree', c: 'green' }, { e: '🌷', n: 'Garden', c: 'green' }, { e: '💧', n: 'Fountain', c: 'green' }, { e: '🏞️', n: 'Park', c: 'green' },
        { e: '🏠', n: 'Homes', c: 'social' }, { e: '🪑', n: 'Bench', c: 'social' }, { e: '🎠', n: 'Playground', c: 'social' }, { e: '☕', n: 'Café', c: 'social' },
        { e: '🏪', n: 'Market', c: 'social' }, { e: '📚', n: 'Library', c: 'social' }, { e: '🏫', n: 'School', c: 'social' }, { e: '🎭', n: 'Stage', c: 'social' },
        { e: '🚲', n: 'Bike lane', c: 'move' }, { e: '🚋', n: 'Tram stop', c: 'move' }, { e: '🚶', n: 'Footpath', c: 'move' },
        { e: '🅿️', n: 'Car park', c: 'car' }, { e: '🛣️', n: 'Motorway', c: 'car' }, { e: '🏢', n: 'Office tower', c: 'car' }, { e: '🔒', n: 'Gated estate', c: 'car' }
      ],
      verdict: function (c, total) {
        if (total < 10) return 'Place at least ten objects to see the profile of your city.';
        if (c.car === 0) return 'Your city has no car parks, motorways, offices or gates. Rojas says that is what teams usually build: <b>a city of relationships with nature and other people</b>.';
        if (c.car * 3 <= total) return 'Mostly people, nature and ways to walk, with a few cars. How did you decide where the cars should go?';
        return 'A lot of your city is for cars and offices. Which objects would you swap to make people happier?';
      }
    },
    {
      t: 'reflect', id: 'cbref', title: 'Share your values', tag: 'S',
      fields: [
        { id: 'a', label: 'Three values our city shows (for example: belonging, nature, independence)' },
        { id: 'b', label: 'One compromise we made (use: We wanted …, but in the end we …)' }
      ]
    },
    { t: 'html', cls: 'ptask warm', html:
      '<h4>Present your city (1 minute each pair)</h4>' +
      '<p>Show your picture to another pair. Use at least two patterns from the talk:</p>' +
      '<p><b>In our city nobody has to …</b> · <b>No matter who you are, …</b> · <b>Once you …, it becomes …</b> · <b>We got the … right, but …</b></p>' }
  ]
},

/* ====================================================================== 7 */
{
  id: 'read', short: 'Reading', t: [92, 106],
  title: 'Reading: borrowing the street back',
  goal: 'A feature article about a modern idea in town planning. Read once for the story, then answer the questions.',
  blocks: [
    {
      t: 'story', id: 'article', title: 'Borrowing the street back', by: 'Feature article, written for this lesson. The town and the people are invented.',
      paras: [
        'On the first Saturday of every month, the main road through Hallin Bridge, a market town of about nine thousand people, is closed to traffic from ten until four. Within an hour, the tarmac is covered in chalk drawings, a brass band is setting up outside the bakery, and the car park behind the library has turned into a swap shop for second-hand books and bicycles. Visitors who arrive by car are asked to leave it at the edge of town, which, according to the organisers, is the whole point.',
        'The idea was not born in the council chamber. Two years ago, the planning department invited residents to a workshop on the future of the high street, expecting the usual dozen retired committee members. More than a hundred people came. The organiser, a former primary-school teacher called Ines Calder, had put cardboard, bottle tops and coloured string on the tables and asked everyone to build the street they wished they had. “Nobody wanted to talk about parking,” she recalls. “They built benches, trees, a place for the market and somewhere for teenagers to go.”',
        'Not everyone was convinced. Several shopkeepers feared that closing the road would drive customers away, and a local taxi firm complained that nobody had consulted it. The council responded by agreeing to a six-month trial, with traders helping to design the arrangements and a clear promise that the road would reopen if takings fell. “I was one of the sceptics,” admits the baker, Tomas Weld. “But on closure days I sell nearly a third more than on a normal Saturday, and people stay longer.”',
        'Researchers who have studied similar schemes urge caution, however. Dr Hana Lindqvist, an urban sociologist, points out that temporary closures can push traffic onto neighbouring streets, and that the residents who come to workshops are rarely a perfect cross-section of the community. “Play is a wonderful way of getting people involved,” she says, “but it does not remove the need to check who is missing from the room.” In Hallin Bridge, the council has responded by taking models and materials to the care home, the youth club and the sports centre, so that people who would never attend an evening meeting can still have their say.',
        'The project is far from finished. A permanent pedestrian zone would require new bus routes and a rethink of deliveries, and nobody pretends this will be quick or cheap. Yet the monthly closure has already done something that years of consultation failed to do: it has made residents feel that the street belongs to them. “We used to ask people what they thought of the plan,” says Calder. “Now we ask them to show us.”'
      ]
    },
    {
      t: 'mcq', id: 'readmcq', title: 'Multiple choice', tag: 'R',
      instr: 'For questions 1–5, choose the answer (A, B, C or D) which fits best according to the article.',
      qs: [
        { q: 'What is the organisers’ attitude to visitors who drive to Hallin Bridge?', pos: 2,
          right: 'They want drivers to leave their cars outside the centre.',
          wrong: ['They offer free parking behind the library.', 'They hope drivers will join the brass band.', 'They are unhappy that visitors come at all.'],
          why: 'Visitors are asked to leave the car “at the edge of town”, which is “the whole point”.' },
        { q: 'What surprised the planning department about the workshop?', pos: 0,
          right: 'Far more residents came than the officials had expected.',
          wrong: ['The organiser ignored the planners’ instructions.', 'The residents complained about the materials.', 'The council had not agreed to hold it.'],
          why: 'They expected a dozen people; “More than a hundred people came.”' },
        { q: 'How did the council respond to the shopkeepers’ worries?', pos: 3,
          right: 'It promised to reopen the road if takings fell.',
          wrong: ['It cancelled the project at once.', 'It paid the traders for lost sales.', 'It asked the taxi firm to run the trial.'],
          why: '“a clear promise that the road would reopen if takings fell”.' },
        { q: 'What is Dr Lindqvist’s view of play as a method?', pos: 1,
          right: 'It helps, but planners must still check who is not taking part.',
          wrong: ['It is too childish to be taken seriously.', 'It works best with younger participants.', 'It should replace formal consultation completely.'],
          why: '“Play is a wonderful way… but it does not remove the need to check who is missing.”' },
        { q: 'What does Calder mean by “Now we ask them to show us”?', pos: 2,
          right: 'Residents now express their ideas through action, not only words.',
          wrong: ['Residents must draw plans before they attend meetings.', 'Planners now visit residents’ homes to see problems.', 'The council has asked a firm to prepare a presentation.'],
          why: 'The change is from asking opinions to letting people build and demonstrate ideas.' }
      ]
    },
    {
      t: 'tfng', id: 'readtf', title: 'True, False or Not given?', tag: 'R',
      instr: 'Decide whether each statement agrees with the article (True), contradicts it (False), or the article does not say (Not given).',
      items: [
        { s: 'Hallin Bridge has a population of around nine thousand.', a: 'T', why: '“a market town of about nine thousand people”.' },
        { s: 'All of the shopkeepers supported the closure from the beginning.', a: 'F', why: '“Several shopkeepers feared that closing the road would drive customers away.”' },
        { s: 'The brass band is paid for by the council.', a: 'NG', why: 'The band is mentioned, but not who pays.' },
        { s: 'The baker no longer has doubts about the closures.', a: 'T', why: 'He admits he was a sceptic and now sells nearly a third more.' },
        { s: 'A permanent pedestrian zone could be created quickly and cheaply.', a: 'F', why: '“nobody pretends this will be quick or cheap”.' },
        { s: 'Residents of the care home asked the council for a new bus route.', a: 'NG', why: 'The care home is visited with models, but nothing is said about bus routes.' }
      ]
    },
    {
      t: 'match', id: 'readvoc', title: 'Words from the article', tag: 'V',
      instr: 'Tap a word from the article, then its meaning.',
      pairs: [
        { l: 'turnout', r: 'the number of people who come to an event' },
        { l: 'sceptic', r: 'a person who doubts that something will work' },
        { l: 'takings', r: 'the money a shop receives from customers' },
        { l: 'cross-section', r: 'a sample that fairly represents the whole group' },
        { l: 'consult', r: 'to ask someone for their opinion before deciding' }
      ],
      order: [2, 4, 0, 1, 3]
    },
    {
      t: 'speak', id: 'readspeak', title: 'Talk about the article', tag: 'S',
      instr: 'Discuss each question for about a minute with your partner.',
      topics: ['Article'], timer: 60, whoLabels: ['Student A', 'Student B'],
      cards: [
        { topic: 'Article', q: 'Would a monthly street closure work in your town? Who would support it and who would object?', tip: 'Try: <b>It would work as long as…</b>' },
        { topic: 'Article', q: 'Dr Lindqvist says we must check “who is missing from the room”. Who is often missing from decisions in your community?', tip: 'Try: <b>I’d say … are rarely heard because…</b>' },
        { topic: 'Article', q: 'Is it fair to make visitors leave their cars at the edge of a town?', tip: 'Try: <b>On balance, I’d argue…</b>' }
      ]
    }
  ]
},

/* ====================================================================== 8 */
{
  id: 'discuss', short: 'Discussion', t: [106, 111],
  title: 'Speaking: discuss and decide',
  goal: 'Start with a picture of the future, then do the interactive part of the exam: discuss the options, weigh them up, and agree on a decision.',
  blocks: [
    { t: 'photos', items: [
      { src: 'img/future.jpg', alt: 'A futuristic city at sunset: tall glass towers, flying cars, a high-speed train on a raised track, a river and green terraces.', cap: 'Photo E · A city of the future' }
    ] },
    { t: 'html', cls: 'ptask wish', html:
      '<h4>Before you discuss (2 minutes)</h4>' +
      '<p>This is one artist’s idea of a dream city. Compare it with the cities that people build in James Rojas’s workshops.</p>' +
      '<span class="q">What does this city have that people in the workshops never built? What is missing that they say they want?</span>' +
      '<p>Use: <b>whereas</b> · <b>no matter how</b> · <b>It looks as if</b> · <b>I wish it had…</b></p>' },
    {
      t: 'chart', id: 'chart', title: 'Discussion task', tag: 'S',
      task: 'Here are some things that could make a city a better place to live. Talk to each other about how much difference each of these would make. Then decide which <b>two</b> are the most important.',
      center: 'How much difference would each of these make to life in a city?',
      centerSmall: '2 minutes + 1 minute to decide',
      opts: [
        { h: 'More green space', p: 'Parks, trees and gardens' },
        { h: 'Better public transport', p: 'Frequent, cheap and reliable' },
        { h: 'Safe walking and cycling routes', p: 'Wide pavements and bike lanes' },
        { h: 'Affordable housing', p: 'Homes that ordinary people can pay for' },
        { h: 'Places for young people', p: 'Sport, music and meeting spaces' }
      ],
      q2: '<b>Decision (1 min).</b> Which two would improve life in a city the most? Agree on a final answer together.',
      bank: [
        { g: 'Weighing options', items: ['I’d argue that … would make the biggest difference because …', 'On the one hand …, but on the other hand …', 'That would only work if …'] },
        { g: 'Patterns from the talk', items: ['They get the … right, but the … wrong.', 'No matter who they are, people need …', 'Once people have …, the city becomes …'] },
        { g: 'Partial agreement', items: ['I see your point, but …', 'To a certain extent, yes, although …'] },
        { g: 'Interacting', items: ['What’s your take on …?', 'Would you go along with that?'] },
        { g: 'Deciding', items: ['Shall we settle on …?', 'On balance, I think … and … matter the most.'] }
      ],
      check: [
        'I spoke for my share of the time.',
        'I used at least one pattern from the talk.',
        'I invited my partner to speak and responded to their ideas.',
        'We reached a decision together.'
      ]
    }
  ]
},

/* ====================================================================== 9 */
{
  id: 'write', short: 'Writing', t: [111, 120],
  title: 'Writing: a paragraph about your street',
  goal: 'Write a short paragraph now. The full essay is homework.',
  blocks: [
    {
      t: 'write', id: 'wr', title: 'If I could redesign one street…', tag: 'W',
      promptHtml:
        '<p style="margin:0 0 10px"><b>Task.</b> Write a paragraph for a school magazine, beginning with the words <b>“If I could redesign one street in my town,”</b>.</p>' +
        '<p style="margin:0 0 10px">Use <b>at least two</b> of these: <i>it’s high time · I wish · no matter · once … it becomes · stop being … and start being · transactional · a sense of belonging</i>.</p>' +
        '<p style="margin:0">Write <b>70–90 words</b>.</p>',
      ph: 'If I could redesign one street in my town, …',
      min: 70, max: 90,
      checks: [
        { label: 'At least 70 words', min: 70 },
        { label: 'No more than 90 words', max: 90 },
        { label: 'Starts with “If I could redesign one street in my town”', re: '^\\s*if i could redesign one street in my town' },
        { label: 'High time, wish or would rather', re: '\\bhigh time\\b|\\bi wish\\b|\\bwould rather\\b|\\bi’d rather\\b|\\bi\'d rather\\b' },
        { label: 'No matter, once or stop being', re: '\\bno matter\\b|\\bonce\\b|\\bstop being\\b|\\bstopped being\\b' },
        { label: 'A word from the lesson', re: 'transactional|belonging|walkable|public space|infrastructure|hands-on|multisensory|intangible|grassroots|empathy|facilitate|embrace|advocate' }
      ],
      exp: ['it’s high time', 'a sense of belonging', 'public space', 'walkable', 'transactional', 'no matter', 'once', 'stop being … and start being'],
      model:
        '<p>If I could redesign one street in my town, I would start with the road outside my old primary school. At the moment it is a transactional place: cars rush through, and children wait on a narrow pavement. I would close it to traffic, plant trees and add benches, so that neighbours could meet. It is high time we stopped planning streets only for cars. Once people feel that a place belongs to them, they look after it, no matter how small it is.</p>'
    },
    {
      t: 'reflect', id: 'exit', title: 'Exit ticket', tag: 'R',
      fields: [
        { id: 'a', label: 'One word or phrase from today that I will use again' },
        { id: 'b', label: 'One thing I found difficult' },
        { id: 'c', label: 'One place I would like to change, and why' }
      ]
    }
  ]
}

  );
})();
