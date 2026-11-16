/* Dream City Lab: C1 lesson, 120 minutes. Built on the TED talk "How would you design your dream city?" by James Rojas.
   Video + listening + vocabulary from the talk + Use of English + paraphrase + reading + speaking + writing.
   Steps 1-5 are in this file, steps 6-9 in data1b.js, the Practice Lab and homework in data2.js.
   Quotations from the talk are kept short; all other texts are new. */
(function () {
  function M(c, t) { return '<mark class="m' + c + '">' + t + '</mark>'; }

  var L = window.LESSON = {
    id: 'dreamcity',
    title: 'Dream City Lab',
    eyebrow: 'C1 Advanced · Lesson 04',
    sub: 'How would you design your dream city? Watch a TED talk about play, memory and the places we live in, then work on the words, the grammar and the ideas.',
    media: {
      ted: {
        embed: 'https://embed.ted.com/talks/james_rojas_how_would_you_design_your_dream_city',
        page: 'https://www.ted.com/talks/james_rojas_how_would_you_design_your_dream_city'
      }
    },
    steps: [

/* ====================================================================== 1 */
{
  id: 'warm', short: 'Warm-up', t: [0, 8],
  title: 'Warm-up: places and play',
  goal: 'Look at the two photographs, speak about memory and cities, and guess what today’s talk is about.',
  blocks: [
    { t: 'photos', items: [
      { slot: 'A children’s playground, a courtyard or a street where children are playing together outdoors.', cap: 'Photo A' },
      { src: 'img/planner.jpg', alt: 'A woman works at a desk with a wooden model of a town in front of her and a 3D building design on a touchscreen.', cap: 'Photo B' }
    ] },
    { t: 'html', cls: 'ptask warm', html:
      '<h4>Guess the topic (2 minutes)</h4>' +
      '<p>Look at both photographs. What do they have in common? Use at least three of these:</p>' +
      '<p><b>might</b> · <b>could be</b> · <b>looks as if</b> · <b>must be</b> · <b>seems to</b></p>' +
      '<span class="q">What might a talk with this title be about: “How would you design your dream city?”</span>' },
    {
      t: 'speak', id: 'warmcards', title: 'Speaking cards', tag: 'S',
      instr: 'Take turns. Answer for about a minute each. Your partner asks one follow-up question.',
      topics: ['Memory', 'City', 'Play'], timer: 60, whoLabels: ['Student A', 'Student B'],
      cards: [
        { topic: 'Memory', q: 'Describe a place from your childhood that you can still picture clearly. What could you see, hear and smell there?', tip: 'Try: <b>I can still picture…</b>' },
        { topic: 'Memory', q: 'What did you play with as a child? Was there a toy you wished you had owned?', tip: 'Try: <b>I wish I had had…</b>' },
        { topic: 'City', q: 'Think of your favourite street or square. What makes it feel alive?', tip: 'Try: <b>What I love about it is…</b>' },
        { topic: 'City', q: 'Have you ever been to a public meeting about your area? What was it like?', tip: 'Try: <b>It was either… or…</b>' },
        { topic: 'Play', q: 'Do adults play enough? Why do so many of us stop?', tip: 'Try: <b>It’s high time we…</b>' },
        { topic: 'Play', q: 'Could play help people solve a serious problem at work or in a town? Give an example.', tip: 'Try: <b>It might not only… but also…</b>' }
      ]
    },
    {
      t: 'reflect', id: 'predict', title: 'Predict', tag: 'L',
      fields: [
        { id: 'a', label: 'Three things I expect the speaker to say' }
      ]
    }
  ]
},

/* ====================================================================== 2 */
{
  id: 'vocab', short: 'Vocabulary', t: [8, 20],
  title: 'Words for cities, people and ideas',
  goal: 'Twenty-four useful words and phrases in three colour-coded sets. Most of them appear in the talk. Flip the cards, then practise in context.',
  blocks: [
    {
      t: 'flash', id: 'fl1', title: 'Set 1 · People and process', tag: 'V',
      instr: 'Tap a card to see the meaning and an example. Say the example aloud, then make up your own.',
      cards: [
        { term: 'facilitate', pos: 'verb', def: 'to lead a meeting or workshop so that everyone can take part', ex: 'A trained mediator facilitated the talks between the two neighbours.' },
        { term: 'hesitant', pos: 'adjective', def: 'slow to act because you are not sure', ex: 'Investors were hesitant to back such an unusual project.' },
        { term: 'embrace', pos: 'verb', def: 'to accept an idea or a change with enthusiasm', ex: 'Within a year the school had embraced online teaching.' },
        { term: 'dominate the conversation', pos: 'collocation', def: 'to talk so much that other people cannot', ex: 'One loud voice dominated the conversation at dinner.' },
        { term: 'collaborate', pos: 'verb', def: 'to work together with others to produce something', ex: 'Architects and residents collaborated on the new square.' },
        { term: 'negotiate', pos: 'verb', def: 'to discuss something in order to reach an agreement', ex: 'The tenants negotiated a lower rent.' },
        { term: 'compromise', pos: 'noun / verb', def: 'an agreement in which each side accepts less than it wanted', ex: 'After hours of talking, both sides settled for a compromise.' },
        { term: 'empathy', pos: 'noun', def: 'the ability to understand how another person feels', ex: 'Good teachers listen with empathy.' }
      ]
    },
    {
      t: 'flash', id: 'fl2', title: 'Set 2 · Cities and places', tag: 'V',
      instr: 'Tap a card to see the meaning and an example.',
      cards: [
        { term: 'infrastructure', pos: 'noun', def: 'the basic systems a place needs: roads, water, electricity, transport', ex: 'The village still lacks basic infrastructure.' },
        { term: 'grassroots', pos: 'adjective', def: 'started by ordinary people, not by leaders or officials', ex: 'A grassroots campaign saved the local library.' },
        { term: 'informal settlement', pos: 'noun', def: 'an area where people build homes quickly, without official permission or services', ex: 'Many informal settlements grow on the edge of big cities.' },
        { term: 'public space', pos: 'noun', def: 'a place open to everyone, such as a park or a square', ex: 'A good public space needs shade and somewhere to sit.' },
        { term: 'walkable', pos: 'adjective', def: 'safe and pleasant to move around on foot', ex: 'I chose the flat because the area is so walkable.' },
        { term: 'transactional', pos: 'adjective', def: 'treating a place or a relationship only as a way of getting or paying for something', ex: 'A shopping mall is a transactional place: you come, buy and leave.' },
        { term: 'gated community', pos: 'noun', def: 'a group of homes inside a fence or wall, with controlled entry', ex: 'They moved to a gated community with its own security guards.' },
        { term: 'infill', pos: 'adjective', def: 'built on empty land between buildings that already exist', ex: 'The council approved an infill project behind the market.' }
      ]
    },
    {
      t: 'flash', id: 'fl3', title: 'Set 3 · Ideas and feelings', tag: 'V',
      instr: 'Tap a card to see the meaning and an example.',
      cards: [
        { term: 'intangible', pos: 'adjective', def: 'real, but impossible to touch or to measure', ex: 'The intangible charm of the old market is hard to put in a report.' },
        { term: 'multisensory', pos: 'adjective', def: 'using several of the senses at the same time', ex: 'A walk through a forest is a multisensory experience.' },
        { term: 'hands-on', pos: 'adjective', def: 'based on doing things yourself, not on theory', ex: 'The course is very hands-on: you build, you do not just listen.' },
        { term: 'agenda', pos: 'noun', def: 'a hidden plan or purpose; also, a list of things to discuss at a meeting', ex: 'She joined the club without any hidden agenda.' },
        { term: 'passive', pos: 'adjective', def: 'accepting what happens without taking action', ex: 'A passive audience just sits and listens.' },
        { term: 'advocate', pos: 'verb / noun', def: 'to support a cause in public; a person who does this', ex: 'Residents advocated for a new bus stop for years.' },
        { term: 'a sense of belonging', pos: 'collocation', def: 'the feeling of being accepted as part of a group', ex: 'A sense of belonging keeps people in a neighbourhood.' },
        { term: 'brick and mortar', pos: 'noun / adjective', def: 'the physical structures of buildings, as opposed to ideas or online services', ex: 'Many brands now sell online as well as in brick-and-mortar shops.' }
      ]
    },
    {
      t: 'match', id: 'match1', title: 'Match the word to its meaning', tag: 'V',
      instr: 'Tap a word on the left, then its meaning on the right. A wrong pair flashes red.',
      pairs: [
        { l: 'facilitate', r: 'to guide a group so that all of its members can contribute' },
        { l: 'hesitant', r: 'unwilling to act quickly because you doubt it is wise' },
        { l: 'grassroots', r: 'organised by local people, not by those in power' },
        { l: 'infrastructure', r: 'the roads, pipes and power lines a town depends on' },
        { l: 'transactional', r: 'concerned only with buying, selling or getting something done' },
        { l: 'intangible', r: 'a quality that cannot be touched or counted' },
        { l: 'hands-on', r: 'learned by actually doing the work' },
        { l: 'advocate', r: 'to speak up publicly in favour of a cause' }
      ],
      order: [3, 6, 0, 7, 1, 4, 2, 5]
    },
    {
      t: 'cloze', id: 'vsel', title: 'Words in context', tag: 'V', mode: 'select',
      instr: 'Choose the word or phrase that fits each sentence.',
      lines: [
        'Marta was {1} about speaking at the meeting, so she waited until the very end.',
        'The campaign began as a {2} movement: a few neighbours with a petition.',
        'Without proper {3}, such as drains and electricity, the new district could not open.',
        'It felt like a {4} visit: we arrived, paid and left without speaking to anyone.',
        'The workshop was very {5}: everyone spent the afternoon making models.',
        'He tried to {6} the debate, so nobody else could say a word.',
        'Only through {7} could the neighbours agree on a design that both groups accepted.',
        'She has been a tireless {8} for tenants’ rights.'
      ],
      gaps: [
        { ans: ['hesitant'], opts: ['generous', 'hesitant', 'confident', 'furious'] },
        { ans: ['grassroots'], opts: ['grassroots', 'corporate', 'official', 'seasonal'] },
        { ans: ['infrastructure'], opts: ['ceremony', 'architecture', 'infrastructure', 'landscape'] },
        { ans: ['transactional'], opts: ['hands-on', 'intangible', 'walkable', 'transactional'] },
        { ans: ['hands-on'], opts: ['theoretical', 'hands-on', 'transactional', 'intangible'] },
        { ans: ['dominate'], opts: ['facilitate', 'negotiate', 'embrace', 'dominate'] },
        { ans: ['compromise'], opts: ['compromise', 'agenda', 'belonging', 'infill'] },
        { ans: ['advocate'], opts: ['facilitator', 'agenda', 'advocate', 'settlement'] }
      ]
    },
    {
      t: 'cloze', id: 'vwf', title: 'Word formation', tag: 'V', mode: 'type',
      instr: 'Use the word in capitals to form a word that fits the gap. Write one word.',
      lines: [
        'Public {1} in planning meetings is often low because the language is too technical.',
        'The new library is {2} to people in wheelchairs, thanks to a ramp and wide doors.',
        'The playground gives children a place for {3}, free from adult rules.',
        'Many residents felt {4} when their ideas were ignored again.',
        'The mayor praised the {5} of the volunteers who cleaned the riverbank.',
        'The council voted to {6} the playground in the spring.',
        'Walking is the most {7} way to travel in a compact town.',
        'A good planner must show {8}, listening before drawing a single line.'
      ],
      gaps: [
        { ans: ['participation'], hint: 'PARTICIPATE' },
        { ans: ['accessible'], hint: 'ACCESS' },
        { ans: ['creativity'], hint: 'CREATE' },
        { ans: ['disappointed'], hint: 'DISAPPOINT' },
        { ans: ['generosity'], hint: 'GENEROUS' },
        { ans: ['enlarge'], hint: 'LARGE' },
        { ans: ['sustainable'], hint: 'SUSTAIN' },
        { ans: ['sensitivity'], hint: 'SENSITIVE' }
      ]
    }
  ]
},

/* ====================================================================== 3 */
{
  id: 'video', short: 'Video', t: [20, 40],
  title: 'Watch and listen: the TED talk',
  goal: 'Watch the talk (8 min 38 s) three times. First for the main idea, then for details, then to check your answers.',
  blocks: [
    { t: 'html', cls: 'note', html:
      '<b>Watching plan.</b> <b>1st time:</b> only the main-idea questions (Part A). <b>2nd time:</b> pause when you need to; do Parts B and C. <b>3rd time:</b> check your answers and do Parts D and E.<br>' +
      '<small>Talk by James Rojas, Play@TED 2026. Used here for teaching; the video belongs to TED (CC BY-NC-ND 4.0).</small>' },
    {
      t: 'media', kind: 'video', id: 'ted', title: 'James Rojas · How would you design your dream city?', tag: 'L',
      instr: 'Press play. You can turn on English subtitles in the player if you need them on the third viewing.'
    },
    {
      t: 'mcq', id: 'gist', title: 'Part A · Main idea (first viewing)', tag: 'L',
      instr: 'For questions 1–3, choose the answer (A, B, C or D) which fits best.',
      qs: [
        { q: 'What is the speaker’s main message?', pos: 2,
          right: 'Play can help ordinary people imagine and shape better places to live.',
          wrong: ['Public meetings should be replaced by online surveys.', 'Children should have more say than adults in city decisions.', 'Cities should ban cars from their centres.'],
          why: 'The talk ends with: “the most powerful tool we have to do this is to play”.' },
        { q: 'According to the speaker, why do traditional community meetings often fail?', pos: 0,
          right: 'Either nobody comes, or a few strong voices take over.',
          wrong: ['They are always held too early in the day.', 'Planners do not understand the law.', 'The city refuses to pay for them.'],
          why: 'He describes “an empty room” or “a combat zone”.' },
        { q: 'What does the speaker ask people to do at the start of his workshops?', pos: 1,
          right: 'Build a favourite childhood memory without talking about it.',
          wrong: ['Draw a map of their street from memory.', 'Write a list of problems in the city.', 'Vote on the best idea in the room.'],
          why: '“Build your favorite childhood memory in five minutes using objects. Don’t talk about it, build it.”' }
      ]
    },
    {
      t: 'cloze', id: 'vnotes', title: 'Part B · Note completion (second viewing)', tag: 'L', mode: 'type',
      instr: 'Complete the notes. Write ONE or TWO words from the talk in each gap.',
      lines: [
        'As a child, the speaker could not afford building blocks, so he collected {1} and kept them in a shoebox.',
        'He says planners use words, maps, numbers and {2} that people do not understand or complete.',
        'At a bad meeting, a few people with strong opinions turn the room into a {3}.',
        'He believes planners get the land use right but the {4} wrong.',
        'Children use their senses and imagination because their {5} is not fully developed.',
        'In the workshop, people first have {6} minutes to build a memory.',
        'An orange {7} reminds people from New England of autumn.',
        'The one thing nobody ever builds is arriving at {8} on time.'
      ],
      gaps: [
        { ans: ['popsicle sticks', 'popsicle stick'] },
        { ans: ['surveys'] },
        { ans: ['combat zone'] },
        { ans: ['feeling'] },
        { ans: ['prefrontal cortex'] },
        { ans: ['five', '5'] },
        { ans: ['maple leaf'] },
        { ans: ['school'] }
      ]
    },
    {
      t: 'tfng', id: 'vtf', title: 'Part C · True, False or Not given? (second viewing)', tag: 'L',
      instr: 'Decide whether each statement agrees with the talk (True), contradicts it (False), or the speaker does not say (Not given).',
      items: [
        { s: 'Rojas’s parents bought him a dollhouse when he was a boy.', a: 'F', why: 'In those days boys did not play with dolls, and his parents could not afford blocks.' },
        { s: 'Many planners were uneasy about using objects instead of data.', a: 'T', why: '“A lot of them were hesitant because it wasn’t based on a measurement or data.”' },
        { s: 'Rojas has written several books about his method.', a: 'NG', why: 'He says he cowrote a book, but nothing about other books.' },
        { s: 'His first workshops took place in an art gallery.', a: 'T', why: 'He and his friends opened a gallery to put the method into practice.' },
        { s: 'Participants usually build skyscrapers in the middle of their cities.', a: 'F', why: 'They build public spaces, plazas, transport and gardens, “not skyscrapers”.' },
        { s: 'In Tijuana, the process led to a community centre and a library-style public space.', a: 'T', why: 'Camino Verde got a community centre and Casa de las Ideas.' },
        { s: 'Everyone at the Phoenix workshop had the same disability.', a: 'NG', why: 'He says only that people designed stations based on their own disability.' }
      ]
    },
    {
      t: 'mcq', id: 'vdet', title: 'Part D · Details (third viewing)', tag: 'L',
      instr: 'For questions 1–4, choose the answer (A, B, C or D) which fits best.',
      qs: [
        { q: 'Why does Rojas ask the audience to raise their hands if they are under 26?', pos: 3,
          right: 'To make a point about how young brains think creatively.',
          wrong: ['To find volunteers for a workshop.', 'To check how many young people attend meetings.', 'To show that young people dislike public speaking.'],
          why: 'He says that under 26 the brain is not fully formed, so there is more capacity to think big.' },
        { q: 'What do the childhood memories that people build usually have in common?', pos: 0,
          right: 'They involve other people and often take place outdoors.',
          wrong: ['They are mostly about school achievements.', 'They centre on expensive toys and screens.', 'They take place in quiet, private rooms.'],
          why: 'Most are social, multisensory and outdoors; none are about screen time or owning things.' },
        { q: 'What happens when teams build their ideal communities together?', pos: 2,
          right: 'Individual ideas merge into shared ones through negotiation.',
          wrong: ['The strongest personality decides the final design.', 'Each person works alone on a separate model.', 'The planners correct their mistakes.'],
          why: '“Individual ideas become collective with the help of others.”' },
        { q: 'What did the people with disabilities in Phoenix do after their workshop?', pos: 1,
          right: 'They campaigned for years until a station was built.',
          wrong: ['They designed the building work themselves.', 'They asked the city to move the recreation centre.', 'They collected money to pay for the station.'],
          why: 'They made calls and sent letters and emails to the mayor until a station opened in 2019.' }
      ]
    },
    {
      t: 'cloze', id: 'vnum', title: 'Part E · Numbers and facts (third viewing)', tag: 'L', mode: 'type',
      instr: 'Write the number or the word that is missing. You may write numbers as figures.',
      lines: [
        'Rojas asks how many people in the room are under the age of {1}.',
        'In the first task, participants build a childhood memory in {2} minutes.',
        'In the second task, teams have {3} minutes to build their ideal community.',
        'The city of Phoenix helped to fund the Ability360 centre in {4}.',
        'The light rail station was finally built in {5}.',
        'Before that, the nearest stations were {6} apart in either direction.'
      ],
      gaps: [
        { ans: ['26', 'twenty-six', 'twenty six'] },
        { ans: ['5', 'five'] },
        { ans: ['10', 'ten'] },
        { ans: ['2008'] },
        { ans: ['2019'] },
        { ans: ['a mile', 'one mile', '1 mile'] }
      ]
    },
    {
      t: 'reflect', id: 'vref', title: 'Your reaction', tag: 'S',
      fields: [
        { id: 'a', label: 'The moment in the talk that stayed with me, and why' },
        { id: 'b', label: 'One thing I disagree with or doubt' }
      ]
    }
  ]
},

/* ====================================================================== 4 */
{
  id: 'lang', short: 'Language', t: [40, 48],
  title: 'Language from the talk',
  goal: 'Four patterns to borrow, then phrasal verbs and collocations in new contexts.',
  blocks: [
    {
      t: 'tips', items: [
        { k: 'Contrast', h: 'get X right, but Y wrong', p: 'Use it to criticise a plan: <b>We got the roads right but the neighbourhood wrong.</b>' },
        { k: 'Generalising', h: 'no matter who / where / how…', p: '<b>No matter</b> who they are, people want similar things. Also: <i>no matter how hard we try, no matter what it costs.</i>' },
        { k: 'Change', h: 'stop being … and start being …', p: 'People <b>stop being</b> passive and <b>start being</b> active. Use it for any change of role.' },
        { k: 'Sequence', h: 'once …, it becomes …', p: '<b>Once</b> residents see a model, the idea <b>becomes</b> real. <b>Once</b> + present simple for a future result.' }
      ]
    },
    {
      t: 'cloze', id: 'lang1', title: 'Phrasal verbs and collocations', tag: 'V', mode: 'select',
      instr: 'Choose the word that completes each sentence. All of the expressions are used in the talk or its topic.',
      lines: [
        'We need to {1} through hundreds of old photographs to find the right one.',
        'It is hard to {2} go of the idea that cities must be built for cars.',
        'At last the council took {3} of the residents’ petition.',
        'The children {4} out the toys across the carpet in neat rows.',
        'Local residents {5} up with their own solution when the city did nothing.',
        'Teenagers like to {6} out in the square after school.',
        'The shy pupils let the louder ones {7} the conversation.',
        'Memory {8} a surprising role in how we plan cities.'
      ],
      gaps: [
        { ans: ['sort'], opts: ['sort', 'wipe', 'hold', 'bring'] },
        { ans: ['let'], opts: ['put', 'take', 'let', 'make'] },
        { ans: ['notice'], opts: ['view', 'look', 'sight', 'notice'] },
        { ans: ['laid'], opts: ['hung', 'laid', 'kept', 'held'] },
        { ans: ['came'], opts: ['put', 'ran', 'took', 'came'] },
        { ans: ['hang'], opts: ['give', 'hang', 'pull', 'turn'] },
        { ans: ['dominate'], opts: ['dominate', 'follow', 'decline', 'respect'] },
        { ans: ['plays'], opts: ['makes', 'does', 'plays', 'takes'] }
      ]
    },
    {
      t: 'match', id: 'langm', title: 'Phrases and their meanings', tag: 'V',
      instr: 'Tap a phrase, then its meaning.',
      pairs: [
        { l: 'a combat zone', r: 'a place where people argue aggressively' },
        { l: 'survival mode', r: 'thinking only about basic needs and immediate problems' },
        { l: 'flow state', r: 'complete, happy concentration on what you are doing' },
        { l: 'brick and mortar', r: 'the physical building work of a project' },
        { l: 'think big', r: 'to be ambitious and imaginative in your plans' },
        { l: 'a hit', r: 'something that is a great success' }
      ],
      order: [2, 4, 0, 5, 1, 3]
    },
    {
      t: 'speak', id: 'langspeak', title: 'Use the patterns', tag: 'S',
      instr: 'Answer each card in about 45 seconds. Use the pattern in the hint.',
      topics: ['Patterns'], timer: 45, whoLabels: ['Student A', 'Student B'],
      cards: [
        { topic: 'Patterns', q: 'Describe a building or street in your town that is well designed but unpleasant to use.', tip: 'Use: <b>get … right, but … wrong</b>' },
        { topic: 'Patterns', q: 'What do people from very different backgrounds still share?', tip: 'Use: <b>no matter who/where…</b>' },
        { topic: 'Patterns', q: 'Think of a time when you changed from a passive observer to an active participant.', tip: 'Use: <b>stop being … and start being…</b>' },
        { topic: 'Patterns', q: 'How can a small neighbourhood project grow into something bigger?', tip: 'Use: <b>once … it becomes…</b>' }
      ]
    }
  ]
},

/* ====================================================================== 5 */
{
  id: 'uoe', short: 'Use of English', t: [48, 70],
  title: 'Use of English and paraphrase',
  goal: 'Exam-style tasks on the topic of play and cities, then four activities that train you to say the same thing in a different way.',
  blocks: [
    {
      t: 'cloze', id: 'uoe1', title: 'Part 1 · Multiple-choice cloze: the street that plays', tag: 'U', mode: 'select',
      instr: 'For questions 1–8, choose the correct answer for each gap.',
      text: [
        'Every Saturday morning, a quiet road in the east of the city is {1} off to traffic and turns into a playground. Children {2} part in chalk races, neighbours set up tables, and older residents bring chairs to watch. The scheme began as a small experiment, but it has become {3} popular that six other streets have asked to join it.',
        'Organisers say the main benefit is the way strangers {4} to know one another. “People who once walked past each other in silence now {5} the time to chat,” says one volunteer. Some shopkeepers {6} against the idea at first, fearing a loss of business, yet most now report that takings have {7} slightly. The council has agreed to {8} the project for a further year.'
      ],
      gaps: [
        { ans: ['closed'], opts: ['locked', 'ended', 'closed', 'stopped'] },
        { ans: ['take'], opts: ['make', 'take', 'join', 'play'] },
        { ans: ['so'], opts: ['such', 'very', 'too', 'so'] },
        { ans: ['get'], opts: ['get', 'become', 'turn', 'make'] },
        { ans: ['take'], opts: ['spend', 'use', 'take', 'pass'] },
        { ans: ['spoke'], opts: ['talked', 'spoke', 'said', 'told'] },
        { ans: ['risen'], opts: ['raised', 'arisen', 'lifted', 'risen'] },
        { ans: ['extend'], opts: ['extend', 'expand', 'expose', 'enlarge'] }
      ]
    },
    {
      t: 'cloze', id: 'uoe2', title: 'Part 2 · Open cloze: why we stop playing', tag: 'U', mode: 'type',
      instr: 'For questions 1–8, think of the word which best fits each gap. Use only one word in each gap.',
      text: [
        'Most adults would {1} not be seen playing in public. Yet researchers argue that play is just as important for grown-ups {2} it is for children. People who make time for play tend to cope {3} stress better, and they are more likely to come {4} with creative solutions at work.',
        '{5} their busy schedules, some companies now run workshops {6} employees build things from simple objects. “It is not a waste of time,” says one manager. “It is high {7} we took imagination seriously. If we had started sooner, we {8} have saved ourselves many dull meetings.”'
      ],
      gaps: [
        { ans: ['rather', 'sooner'] },
        { ans: ['as'] },
        { ans: ['with'] },
        { ans: ['up'] },
        { ans: ['despite'] },
        { ans: ['where'] },
        { ans: ['time'] },
        { ans: ['could', 'would', 'might'] }
      ]
    },
    {
      t: 'cloze', id: 'uoe3', title: 'Part 3 · Word formation: why cities need play', tag: 'U', mode: 'type',
      instr: 'For questions 1–8, use the word in capitals to form a word that fits the gap.',
      text: [
        'Urban {1} have long argued about how much open space a city needs. In recent years, however, the {2} of public squares has become a major concern as land grows more {3}. A growing number of designers believe that {4} should be involved in planning, not just asked to approve finished drawings.',
        'Their {5} is that people understand their own streets better than any outsider. Early {6} suggests that projects which include residents are more {7} in the long run. Critics warn that the process can be {8}, however, and slow decisions down.'
      ],
      gaps: [
        { ans: ['planners'], hint: 'PLAN' },
        { ans: ['disappearance'], hint: 'DISAPPEAR' },
        { ans: ['expensive'], hint: 'EXPENSE' },
        { ans: ['residents'], hint: 'RESIDE' },
        { ans: ['argument'], hint: 'ARGUE' },
        { ans: ['evidence'], hint: 'EVIDENT' },
        { ans: ['successful'], hint: 'SUCCESS' },
        { ans: ['frustrating'], hint: 'FRUSTRATE' }
      ]
    },
    {
      t: 'kwt', id: 'uoe4', title: 'Part 4 · Key word transformation', tag: 'U',
      instr: 'Complete the second sentence so that it has a similar meaning to the first. Use the word in capitals without changing it. Write between <b>two and five</b> words including the word given.',
      items: [
        { s: 'Although he dislikes public speaking, he agreed to give the talk.', key: 'DESPITE', pre: 'He agreed to give the talk', post: 'public speaking.', ans: ['despite disliking', 'despite hating', 'despite his dislike of', 'despite not liking'] },
        { s: 'People will not take part unless they feel their opinion counts.', key: 'ONLY', pre: 'People will', post: 'if they feel their opinion counts.', ans: ['only take part'] },
        { s: 'The meetings were so dull that hardly anyone wanted to attend.', key: 'SUCH', pre: 'They were', post: 'that hardly anyone wanted to attend.', ans: ['such dull meetings'] },
        { s: 'He asked them to build their memories, not to talk about them.', key: 'INSTEAD', pre: 'He asked them to build their memories', post: 'about them.', ans: ['instead of talking'] },
        { s: 'The residents only realised how much they had in common after the workshop.', key: 'UNTIL', pre: 'The residents did not realise how much they had in common', post: 'the workshop.', ans: ['until after'] },
        { s: 'The city did not listen earlier, so the station was built late.', key: 'HAD', pre: 'Had the city', post: ', the station would have been built sooner.', ans: ['listened earlier', 'listened sooner', 'listened earlier on'] },
        { s: 'She regrets not joining the workshop.', key: 'WISH', pre: 'She', post: 'the workshop.', ans: ['wishes she had joined', 'wishes she’d joined', 'wishes she\'d joined'] },
        { s: 'They only built the station in 2019.', key: 'NOT', pre: 'It was', post: '2019 that they built the station.', ans: ['not until'] }
      ]
    },
    { t: 'html', cls: 'note', html: '<b>Paraphrase tasks.</b> In the exam you must say the same thing in different words. Change the <b>structure</b>, not just the vocabulary. The three activities below train exactly that.' },
    {
      t: 'match', id: 'para1', title: 'Paraphrase 1 · Match the quotation to its paraphrase', tag: 'P',
      instr: 'Left: a short phrase from the talk. Right: the same idea in other words. Tap one, then the other.',
      pairs: [
        { l: '“the land use right, but the feeling wrong”', r: 'Planners get the physical layout correct but overlook how a place feels.' },
        { l: '“community meetings are dreaded”', r: 'Hardly anyone looks forward to public consultation sessions.' },
        { l: '“either an empty room … or a combat zone”', r: 'Either nobody turns up, or a few forceful people take control.' },
        { l: '“a launching pad to the moon”', r: 'an unrealistic idea that no city could ever deliver' },
        { l: '“individual ideas become collective”', r: 'Separate opinions turn into shared ones when people work together.' },
        { l: '“no one builds ownership or wealth”', r: 'None of the places people imagine are about money or possessions.' }
      ],
      order: [2, 4, 0, 5, 1, 3]
    },
    {
      t: 'mcq', id: 'para2', title: 'Paraphrase 2 · Which sentence means the same?', tag: 'P',
      instr: 'Choose the sentence (A, B, C or D) with the closest meaning to the original.',
      qs: [
        { q: '“Planners have very few tools to capture these intangible qualities.”', pos: 1,
          right: 'Planners lack practical ways of recording things that cannot be measured.',
          wrong: ['Planners refuse to measure qualities that are hard to see.', 'Planners use many tools, but they are too expensive.', 'Qualities that cannot be seen are of little interest to planners.'],
          why: '<i>Very few tools</i> = <i>lack practical ways</i>; <i>intangible qualities</i> = <i>things that cannot be measured</i>.' },
        { q: '“Once you build that memory again, it becomes real.”', pos: 3,
          right: 'Making a model of a memory makes it feel present and meaningful.',
          wrong: ['A memory is only true if other people remember it too.', 'People build models because they do not trust their memory.', 'Memories become more accurate when they are written down.'],
          why: 'Rebuilding = making a model; <i>becomes real</i> = <i>feels present and meaningful</i>.' },
        { q: '“Individual ideas become collective with the help of others.”', pos: 0,
          right: 'Other people’s input turns personal ideas into shared ones.',
          wrong: ['Groups usually reject ideas that belong to one person.', 'Collective ideas are weaker than individual ones.', 'People prefer to keep their ideas to themselves.'],
          why: '<i>With the help of others</i> = <i>other people’s input</i>.' },
        { q: '“I took a different path.”', pos: 2,
          right: 'I chose another way of working.',
          wrong: ['I changed the route of the walking tour.', 'I gave up my job as a planner.', 'I walked away from the project.'],
          why: 'Here <i>path</i> is figurative: a method, not a road.' }
      ]
    },
    {
      t: 'write', id: 'para3', title: 'Paraphrase 3 · Say it in your own words', tag: 'P',
      promptHtml:
        '<p style="margin:0 0 10px"><b>Task.</b> Paraphrase each of these three sentences from the talk. Do not copy more than two words in a row. Change the structure as well as the words.</p>' +
        '<ol style="margin:0 0 10px"><li>“We can design streets for cars, but not for humans.”</li><li>“People don’t just describe it – they show it, they feel it, and they own it.”</li><li>“The room transforms from a place of individual opinions into one of listening, empathy and shared values.”</li></ol>' +
        '<p style="margin:0">Write <b>40–80 words</b> in total.</p>',
      ph: '1. …  2. …  3. …',
      min: 40, max: 80,
      checks: [
        { label: 'At least 40 words', min: 40 },
        { label: 'No more than 80 words', max: 80 },
        { label: 'Three numbered sentences', re: '1[.)][\\s\\S]*2[.)][\\s\\S]*3[.)]' }
      ],
      exp: ['rather than', 'whereas', 'not only … but also', 'instead of', 'as a result', 'turns into', 'moves from … to …'],
      model:
        '<p>1. We know how to plan roads for traffic, yet we rarely plan them for the people who walk along them. 2. Instead of merely explaining their ideas, participants build them, experience them and take ownership of them. 3. A meeting that began with separate views becomes a place where people listen, understand each other and share the same priorities.</p>'
    }
  ]
}

    ]
  };
})();
