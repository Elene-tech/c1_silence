/* High Time Lab: C1 lesson, 120 minutes. Photos + vocabulary + reading + speaking + unreal-time grammar.
   Mark colours: 1 = past simple (unreal now), 2 = past perfect (unreal past), 3 = trigger words, 4 = would / could, 5 = wish words. */
(function () {
  function M(c, t) { return '<mark class="m' + c + '">' + t + '</mark>'; }

  var L = window.LESSON = {
    id: 'hightime',
    title: 'High Time Lab',
    eyebrow: 'C1 Advanced · Lesson 03',
    sub: 'Choices, change and consequences. Five photographs, three sets of words, a feature article, exam-style speaking, and unreal-time grammar: if we had acted sooner, it is high time we did.',
    steps: [

/* ====================================================================== 1 */
{
  id: 'warm', short: 'Warm-up', t: [0, 10],
  title: 'Warm-up: what is the story?',
  goal: 'Look at the photograph, guess what is happening, then practise the language of speculation.',
  blocks: [
    { t: 'photos', items: [
      { src: 'img/kids.jpg', alt: 'Five boys, some in yellow scout shirts with red scarves, stand and sit in a shady street. One boy points at another.', cap: 'Photo C' }
    ] },
    { t: 'html', cls: 'ptask warm', html:
      '<h4>Speculate (2 minutes)</h4>' +
      '<p>Tell your partner what you think is happening. Use at least three of these:</p>' +
      '<p><b>must have</b> · <b>might have</b> · <b>can’t have</b> · <b>looks as if</b> · <b>seems to be</b></p>' +
      '<span class="q">What might have happened just before this moment? What could the boys say next?</span>' },
    {
      t: 'cloze', id: 'warmsel', title: 'Speculating about the photos', tag: 'G', mode: 'select',
      instr: 'Choose the word that fits. The sentences describe the photographs in this lesson.',
      lines: [
        'The man in the grey top {1} be the instructor: he is showing the others what to do.',
        'The guests at the party look as {2} they have known each other for years.',
        'The scouts {3} be arguing, but they could just as easily be discussing a game.',
        'The boy in the red shirt {4} have heard the joke: nobody is laughing.',
        'The second photograph seems {5} show a fire in a dry, wooded area.',
        'The learners on the beach {6} be quite nervous: one of them is gripping the board very hard.'
      ],
      gaps: [
        { ans: ['must'], opts: ['shall', 'must', 'would', 'ought'] },
        { ans: ['if'], opts: ['than', 'so', 'well', 'if'] },
        { ans: ['might'], opts: ['must', 'might', 'will', 'shall'] },
        { ans: ['can’t'], opts: ['can’t', 'must', 'should', 'will'] },
        { ans: ['to'], opts: ['that', 'as', 'to', 'for'] },
        { ans: ['may'], opts: ['need', 'shall', 'would', 'may'] }
      ]
    },
    {
      t: 'speak', id: 'warmcards', title: 'What if…? Speaking cards', tag: 'S',
      instr: 'Take turns. Answer for about a minute each. Your partner asks one follow-up question.',
      topics: ['Choices', 'Together', 'Planet'], timer: 60, whoLabels: ['Student A', 'Student B'],
      cards: [
        { topic: 'Choices', q: 'What is the bravest thing you have ever done? What if you had said no?', tip: 'Try: <b>If I had said no, I would have…</b>' },
        { topic: 'Choices', q: 'Is there something you wish you had started earlier?', tip: 'Try: <b>I wish I had… / If only I had…</b>' },
        { topic: 'Together', q: 'Are you more of a party person or a small-group person? Why?', tip: 'Try: <b>I’d rather… than…</b>' },
        { topic: 'Together', q: 'When did you last learn a new skill with other people? How did the group help?', tip: 'Try: <b>It was daunting at first, but…</b>' },
        { topic: 'Planet', q: 'Which environmental problem worries you most, and why?', tip: 'Try: <b>What worries me most is…</b>' },
        { topic: 'Planet', q: 'What would you change in your own town tomorrow if you had the power?', tip: 'Try: <b>If I could change one thing, I’d…</b>' }
      ]
    }
  ]
},

/* ====================================================================== 2 */
{
  id: 'vocab', short: 'Vocabulary', t: [10, 30],
  title: 'Words for groups, challenges and change',
  goal: 'Eighteen useful words in three colour-coded sets. Flip the cards, say the examples aloud, then practise in context.',
  blocks: [
    {
      t: 'flash', id: 'fl1', title: 'Set 1 · People and groups', tag: 'V',
      instr: 'Tap a card to see the meaning and an example. Say the example aloud, then make up your own.',
      cards: [
        { term: 'mingle', pos: 'verb', def: 'to move around at a social event and talk to different people', ex: 'After dinner the guests mingled on the terrace.' },
        { term: 'rapport', pos: 'noun', def: 'a close, friendly understanding between people', ex: 'A good teacher builds rapport with every class.' },
        { term: 'camaraderie', pos: 'noun', def: 'friendship and trust between people who spend a lot of time together', ex: 'The camaraderie on the crew made the long nights bearable.' },
        { term: 'outgoing', pos: 'adjective', def: 'friendly, confident and happy to meet new people', ex: 'Her outgoing nature made her the natural choice for the job.' },
        { term: 'icebreaker', pos: 'noun', def: 'something you say or do to help strangers feel relaxed', ex: 'Each workshop starts with a silly icebreaker.' },
        { term: 'cliquey', pos: 'adjective', def: 'forming small groups that do not welcome outsiders (informal)', ex: 'The department felt cliquey, so I ate lunch alone.' }
      ]
    },
    {
      t: 'flash', id: 'fl2', title: 'Set 2 · Challenge and courage', tag: 'V',
      instr: 'Tap a card to see the meaning and an example.',
      cards: [
        { term: 'novice', pos: 'noun', def: 'a beginner; someone who is new to an activity', ex: 'The course is designed for complete novices.' },
        { term: 'daunting', pos: 'adjective', def: 'making you feel nervous or unsure that you can succeed', ex: 'Walking into a room of strangers can be daunting.' },
        { term: 'wipe out', pos: 'phrasal verb', def: 'to fall off a surfboard; also, to destroy completely', ex: 'I wiped out three times before I stood up.' },
        { term: 'take the plunge', pos: 'idiom', def: 'to decide to do something important or risky after hesitating', ex: 'After two years of planning, they finally took the plunge.' },
        { term: 'steep learning curve', pos: 'collocation', def: 'a situation in which you have to learn a lot very quickly', ex: 'Starting a business means a steep learning curve.' },
        { term: 'comfort zone', pos: 'noun', def: 'the situations in which you feel safe and at ease', ex: 'Real progress begins outside your comfort zone.' }
      ]
    },
    {
      t: 'flash', id: 'fl3', title: 'Set 3 · Planet and change', tag: 'V',
      instr: 'Tap a card to see the meaning and an example.',
      cards: [
        { term: 'blaze', pos: 'noun', def: 'a large, fierce fire', ex: 'Firefighters worked all night to control the blaze.' },
        { term: 'scorched', pos: 'adjective', def: 'burnt on the surface by heat or fire', ex: 'The scorched hillside will take years to recover.' },
        { term: 'shrink', pos: 'verb', def: 'to become smaller in size or amount', ex: 'The lake has shrunk to half its former size.' },
        { term: 'glacier', pos: 'noun', def: 'a very large mass of ice that moves slowly down a valley', ex: 'The glacier has retreated nearly a kilometre.' },
        { term: 'unprecedented', pos: 'adjective', def: 'never having happened or existed before', ex: 'The storm caused unprecedented damage along the coast.' },
        { term: 'tipping point', pos: 'noun', def: 'the moment when a small change causes a big, often permanent effect', ex: 'Scientists fear we are close to a tipping point.' },
        { term: 'mitigate', pos: 'verb', def: 'to make something less harmful or less serious', ex: 'Trees can help to mitigate the heat in cities.' },
        { term: 'irreversible', pos: 'adjective', def: 'impossible to change back to how it was', ex: 'Some of the damage may prove irreversible.' }
      ]
    },
    {
      t: 'match', id: 'match1', title: 'Match the word to its meaning', tag: 'V',
      instr: 'Tap a word on the left, then its meaning on the right. A wrong pair flashes red.',
      pairs: [
        { l: 'mingle', r: 'to move around a social event talking to different people' },
        { l: 'rapport', r: 'a close and friendly understanding between people' },
        { l: 'daunting', r: 'making you feel nervous about whether you can cope' },
        { l: 'wipe out', r: 'to fall off a surfboard' },
        { l: 'take the plunge', r: 'to commit to something risky after hesitating' },
        { l: 'unprecedented', r: 'never having happened before' },
        { l: 'tipping point', r: 'the moment when a small change has a big, lasting effect' },
        { l: 'mitigate', r: 'to make something less serious or less harmful' }
      ],
      order: [3, 6, 0, 7, 1, 4, 2, 5]
    },
    {
      t: 'cloze', id: 'vsel', title: 'Words in context', tag: 'V', mode: 'select',
      instr: 'Choose the word or phrase that fits each sentence.',
      lines: [
        'The host introduced a quick {1} so that strangers would start talking.',
        'After years of hesitating, she finally {2} the plunge and moved abroad.',
        'As a complete {3}, he found the first lesson exhausting.',
        'Summers have become hotter at an {4} rate: nothing like it has been recorded before.',
        'Planting trees along the river may help to {5} the effects of flooding.',
        'Years of drought had left the hillside {6} and lifeless.',
        'She quickly built a good {7} with her new students.',
        'The new job has a {8} learning curve, so I am working late every evening.'
      ],
      gaps: [
        { ans: ['icebreaker'], opts: ['rapport', 'camaraderie', 'icebreaker', 'plunge'] },
        { ans: ['took'], opts: ['took', 'made', 'jumped', 'dived'] },
        { ans: ['novice'], opts: ['tipping point', 'mitigate', 'outgoing', 'novice'] },
        { ans: ['unprecedented'], opts: ['irreversible', 'unprecedented', 'daunting', 'outgoing'] },
        { ans: ['mitigate'], opts: ['mingle', 'shrink', 'blaze', 'mitigate'] },
        { ans: ['scorched'], opts: ['scorched', 'irreversible', 'novice', 'cliquey'] },
        { ans: ['rapport'], opts: ['plunge', 'rapport', 'blaze', 'novice'] },
        { ans: ['steep'], opts: ['rapid', 'heavy', 'steep', 'tall'] }
      ]
    },
    {
      t: 'cloze', id: 'vwf', title: 'Word formation: learning to surf, learning to change', tag: 'V', mode: 'type',
      instr: 'Use the word in capitals at the end of each gap to form a word that fits. Write one word only.',
      text: [
        'Few things are as {1} as a first surfing lesson: you fall, swallow water and climb back on the board again. Yet beginners often say that the {2} of the instructors makes it easier, and a strong sense of {3} grows within a single afternoon.',
        'The same is true of larger challenges. Communities facing wildfires or rising seas need {4} leadership, not just sympathy. Some changes may prove {5}, and {6} is almost always cheaper than repair. Reducing emissions is not only an {7} question but a moral one, because our {8} today will shape the world that our children inherit.'
      ],
      gaps: [
        { ans: ['exhausting'], hint: 'EXHAUST' },
        { ans: ['friendliness'], hint: 'FRIEND' },
        { ans: ['belonging'], hint: 'BELONG' },
        { ans: ['effective'], hint: 'EFFECT' },
        { ans: ['irreversible'], hint: 'REVERSE' },
        { ans: ['prevention'], hint: 'PREVENT' },
        { ans: ['economic'], hint: 'ECONOMY' },
        { ans: ['decisions'], hint: 'DECIDE' }
      ]
    },
    { t: 'html', cls: 'note', html: '<b>Use it (2 min).</b> Partner A: describe a time you stepped out of your comfort zone, using at least two words from today. Partner B: ask two follow-up questions.' }
  ]
},

/* ====================================================================== 3 */
{
  id: 'read', short: 'Reading', t: [30, 52],
  title: 'Reading: “Later than we think”',
  goal: 'A feature article about why people wait until a problem becomes a crisis. Read once for the main idea, then answer.',
  blocks: [
    { t: 'html', cls: 'ptask', html:
      '<h4>Before you read (2 minutes)</h4>' +
      '<p>Why do people often wait until it is almost too late to deal with a risk? Think of one example from your own life, and one from the news.</p>' },
    {
      t: 'story', id: 'article', title: 'Later than we think', by: 'Feature article, written for this lesson. The people and the town are invented.',
      paras: [
        '<b>1</b> &nbsp;Every summer, the hill town of Valmora holds a fire drill that almost nobody attends. The siren sounds, the fire chief, Ana Moreira, stands in the empty square with her stopwatch, and the residents carry on with their coffee. “They are not careless,” she says. “They simply cannot imagine it. A fire is something that happens to other towns.”',
        '<b>2</b> &nbsp;Psychologists have long noticed that people tend to underestimate danger that has not yet reached them. We plan for next week’s weather but not for next decade’s climate; we buy insurance after the flood, not before. The problem is rarely a lack of information. It is that the future feels like a foreign country, and we seldom visit.',
        '<b>3</b> &nbsp;What changes behaviour, researchers suggest, is not frightening facts but familiar faces. In a coastal village, Dan Whitaker teaches beginners to surf, and he has noticed something odd. Newcomers who arrive alone rarely last beyond two lessons; those who arrive with a friend come back all summer. “Nobody wants to wipe out in front of strangers,” he laughs. “But a group changes the equation. Once you have rapport with the people next to you, a wave stops being daunting and becomes a shared problem.”',
        '<b>4</b> &nbsp;The same logic, Moreira argues, applies to danger. After a wildfire swept through the next valley, attendance at her drill rose from eleven people to more than two hundred. “We are not braver now,” she says. “We have just stopped being alone with the problem. People who talk about it make plans. People who don’t, hope.”',
        '<b>5</b> &nbsp;Scientists who study glaciers describe a similar pattern on a far larger scale. Ice that has shrunk slowly for decades can reach a tipping point, after which melting accelerates and cannot easily be reversed. By the time the change is obvious to everyone, they warn, the cheapest options have gone. It is high time, many argue, that we stopped treating prevention as pessimism.',
        '<b>6</b> &nbsp;None of this means that individuals are helpless. Moreira’s advice is modest: know your exits, talk to your neighbours, and take the first step before you feel ready. “If we had practised every year, the people in the next valley might have saved their homes,” she says. “I wish we had started sooner. But if we start now, we will be ready for the next one.”'
      ]
    },
    {
      t: 'mcq', id: 'readmcq', title: 'Multiple choice', tag: 'R',
      instr: 'For questions 1–6, choose the answer (A, B, C or D) which fits best according to the article. The explanation appears after you choose.',
      qs: [
        { q: 'According to Ana Moreira, why do residents ignore the fire drill?', pos: 3,
          right: 'They find it hard to picture a fire happening to them.',
          wrong: ['They believe the fire service is not well organised.', 'They are too busy with their work to attend.', 'They have already experienced a serious fire.'],
          why: '“They simply cannot imagine it. A fire is something that happens to other towns.”' },
        { q: 'What does the writer mean by saying the future “feels like a foreign country”?', pos: 1,
          right: 'It is hard to feel connected to something that has not happened yet.',
          wrong: ['Most people would like to move abroad in the future.', 'The future is too complicated for ordinary people to understand.', 'People refuse to talk about the future with strangers.'],
          why: 'A foreign country is distant and unfamiliar: “we seldom visit”.' },
        { q: 'What has Dan Whitaker noticed about his surfing students?', pos: 0,
          right: 'Those who begin with a friend are more likely to keep coming.',
          wrong: ['Newcomers who arrive alone learn much faster.', 'Most of them are afraid of the water for years.', 'Groups tend to give up earlier than individuals.'],
          why: 'Newcomers who arrive alone “rarely last beyond two lessons”; those with a friend “come back all summer”.' },
        { q: 'What does Moreira mean by “stopped being alone with the problem”?', pos: 2,
          right: 'People are now facing the danger and discussing it together.',
          wrong: ['The fire service has promised to protect them.', 'They now have more information than before.', 'They have moved away from the dangerous area.'],
          why: 'After the neighbouring fire, people began to talk and to attend: “People who talk about it make plans.”' },
        { q: 'What point do the glacier scientists make about a tipping point?', pos: 1,
          right: 'After it is reached, change speeds up and becomes hard to stop.',
          wrong: ['It always arrives without any warning signs.', 'Only governments can recognise it in time.', 'It has already been passed in every region.'],
          why: 'Melting “accelerates and cannot easily be reversed”.' },
        { q: 'What is the writer’s main message?', pos: 3,
          right: 'Facing a risk early and together is easier than reacting to a crisis.',
          wrong: ['Individuals can do very little to protect their communities.', 'People will only change if they are given frightening facts.', 'Scientists are too pessimistic about the future.'],
          why: 'The article moves from denial to shared action and ends with “if we start now, we will be ready”.' }
      ]
    },
    {
      t: 'cloze', id: 'readmatch', title: 'Which paragraph?', tag: 'R', mode: 'select',
      instr: 'Which paragraph (1–6)… ? One paragraph is not needed.',
      lines: [
        'describes a situation in which hardly anybody takes part in a safety activity?  {1}',
        'looks at a slow change that may suddenly become impossible to stop?  {2}',
        'gives an example of people who persist longer when they are not alone?  {3}',
        'ends with a personal regret and a plan for the future?  {4}',
        'introduces a general explanation of why people underestimate risks?  {5}'
      ],
      gaps: [
        { ans: ['1'], opts: ['1', '2', '3', '4', '5', '6'] },
        { ans: ['5'], opts: ['1', '2', '3', '4', '5', '6'] },
        { ans: ['3'], opts: ['1', '2', '3', '4', '5', '6'] },
        { ans: ['6'], opts: ['1', '2', '3', '4', '5', '6'] },
        { ans: ['2'], opts: ['1', '2', '3', '4', '5', '6'] }
      ]
    },
    {
      t: 'tfng', id: 'readtf', title: 'True, False or Not given?', tag: 'R',
      instr: 'Decide whether each statement agrees with the article (True), contradicts it (False), or the article does not say (Not given).',
      items: [
        { s: 'Newcomers who arrive at the surf school alone usually stay for the whole summer.', a: 'F', why: 'They “rarely last beyond two lessons”.' },
        { s: 'Very few people attended the fire drill before the fire in the next valley.', a: 'T', why: 'Attendance rose from eleven people to more than two hundred.' },
        { s: 'Buying insurance before a disaster is cheaper than buying it afterwards.', a: 'NG', why: 'The article says people buy it after the flood, but gives no information about the cost.' },
        { s: 'Researchers believe that frightening facts are the best way to change behaviour.', a: 'F', why: '“What changes behaviour… is not frightening facts but familiar faces.”' },
        { s: 'Dan Whitaker teaches surfing in a village by the sea.', a: 'T', why: '“In a coastal village, Dan Whitaker teaches beginners to surf.”' },
        { s: 'Ana Moreira has been a fire chief for more than twenty years.', a: 'NG', why: 'Her experience is never mentioned.' }
      ]
    },
    { t: 'html', cls: 'note', html: '<b>Discuss (3 min).</b> Do you agree that people act sooner when they are not alone with a problem? Give an example from your own life.' }
  ]
},

/* ====================================================================== 4 */
{
  id: 'photos', short: 'Photo speaking', t: [52, 75],
  title: 'Speaking: compare the photographs',
  goal: 'Exam-style photo tasks. Compare, speculate and react. Use the language bank, and keep to the time.',
  blocks: [
    { t: 'html', cls: 'ptask', html:
      '<h4>Task 1 · People together</h4>' +
      '<p>Student A: compare photographs A and B, and say <b>what the people might enjoy about being in these situations</b>, and <b>how easy it might be to make new friends</b>. You have 1 minute.</p>' +
      '<p>Student B: when your partner has finished, answer: <span class="q">Which of these two would you rather do on a Saturday? Why?</span></p>' },
    { t: 'photos', items: [
      { src: 'img/party.jpg', alt: 'Adults mingling at a bright café party with coffee, bunting on the ceiling and a menu board on the wall.', cap: 'Photo A' },
      { src: 'img/surf.jpg', alt: 'A group of beginners kneels on the beach, learning to stand on surfboards with an instructor.', cap: 'Photo B' }
    ] },
    { t: 'timer', times: [{ s: 60, label: 'Student A speaks' }, { s: 30, label: 'Student B answers' }] },
    { t: 'html', cls: 'ptask wish', html:
      '<h4>Task 2 · Our changing planet</h4>' +
      '<p>Student B: compare photographs A and B, and say <b>what problems the people living in these places might face</b>, and <b>how they might feel about them</b>. You have 1 minute.</p>' +
      '<p>Student A: when your partner has finished, answer: <span class="q">Which of these two problems do you think is more urgent? Why?</span></p>' },
    { t: 'photos', items: [
      { src: 'img/fire.jpg', alt: 'Flames and thick smoke rise from a burning bush on a dry hillside.', cap: 'Photo A' },
      { src: 'img/ice.jpg', alt: 'Broken icebergs float on dark blue-green water under a grey sky.', cap: 'Photo B' }
    ] },
    { t: 'timer', times: [{ s: 60, label: 'Student B speaks' }, { s: 30, label: 'Student A answers' }] },
    {
      t: 'tips', items: [
        { k: 'Compare', h: 'Whereas · while · unlike', p: '<b>Whereas</b> the people in A are indoors, those in B are outside.<br><b>Unlike</b> the party, the surf lesson needs some courage.' },
        { k: 'Speculate', h: 'Might · could · must · can’t', p: 'They <b>might</b> be strangers. He <b>must</b> be the instructor. She <b>can’t</b> have been there long.' },
        { k: 'React', h: 'Feelings and reasons', p: 'I’d imagine they feel <b>helpless</b>, because… It would be <b>terrifying</b> to…' },
        { k: 'Time', h: 'Do not describe too long', p: 'Spend 15 seconds on what you see. Spend the rest answering the question.' }
      ]
    },
    {
      t: 'cloze', id: 'cmpsel', title: 'Compare and contrast: choose the best word', tag: 'S', mode: 'select',
      instr: 'Choose the word or phrase that completes each sentence about the photographs.',
      lines: [
        '{1} the people in photo A are indoors, those in photo B are outside on a beach.',
        'The fire looks sudden and violent; {2}, the ice seems to be changing slowly.',
        '{3} the surf lesson, the party does not need any special skills.',
        'The guests seem relaxed, {4} the learners look slightly nervous.',
        '{5} different the two situations are, both depend on people helping each other.',
        'The man in the middle {6} be the instructor: he is showing the others what to do.',
        'The boy in the yellow shirt {7} be telling the others off: he is pointing and looks serious.',
        'The children can’t {8} been enjoying themselves, judging by their expressions.'
      ],
      gaps: [
        { ans: ['Whereas'], opts: ['Whereas', 'Despite', 'Unless', 'Since'] },
        { ans: ['in contrast'], opts: ['in addition', 'therefore', 'in contrast', 'for instance'] },
        { ans: ['Unlike'], opts: ['Because of', 'Instead', 'Although', 'Unlike'] },
        { ans: ['while'], opts: ['because', 'while', 'unless', 'so'] },
        { ans: ['However'], opts: ['Whatever', 'Whenever', 'However', 'Whoever'] },
        { ans: ['must'], opts: ['must', 'can', 'will', 'ought'] },
        { ans: ['could'], opts: ['shall', 'would', 'need', 'could'] },
        { ans: ['have'], opts: ['be', 'have', 'had', 'having'] }
      ]
    },
    { t: 'html', cls: 'ptask warm', html:
      '<h4>Task 3 · Tell the story (2 minutes)</h4>' +
      '<p>Go back to <b>Photo C</b> (the boys, in the warm-up). Student A tells the story: what happened before, what is happening now, and what happens next. Student B asks three questions at the end.</p>' +
      '<p><b>Narrative tenses:</b> past simple, past continuous, past perfect: <i>The boys had been playing when…</i></p>' },
    { t: 'timer', times: [{ s: 120, label: 'Story' }] },
    {
      t: 'reflect', id: 'spnotes', title: 'Self-check', tag: 'S',
      fields: [
        { id: 'a', label: 'One comparing phrase I used' },
        { id: 'b', label: 'One thing to do better next time' }
      ]
    }
  ]
},

/* ====================================================================== 5 */
{
  id: 'grammar', short: 'Grammar', t: [75, 100],
  title: 'Grammar: it’s high time (unreal time)',
  goal: 'Past tenses can talk about now, the future and things that never happened. Review the colour code, then practise it on the photographs.',
  blocks: [
    { t: 'html', cls: 'legend', html:
      '<span class="lg"><mark class="m1">now / future</mark> past simple</span>' +
      '<span class="lg"><mark class="m2">did not happen</mark> past perfect</span>' +
      '<span class="lg"><mark class="m3">trigger words</mark> if, wish, high time…</span>' +
      '<span class="lg"><mark class="m4">result</mark> would, could</span>' +
      '<span class="lg"><mark class="m5">regret</mark> wish, if only</span>' },
    { t: 'html', cls: 'rules', html:
      '<div class="rule past"><div class="rh"><span class="pill">Unreal past</span><h4>if + past perfect, would have + past participle</h4></div>' +
      '<p class="fm">' + M(3, 'If') + ' + ' + M(2, 'had + past participle') + ', ' + M(4, 'would have + past participle') + '</p>' +
      '<p class="eg">' + M(3, 'If') + ' the crews ' + M(2, 'had arrived') + ' sooner, the blaze ' + M(4, 'might not have spread') + '.</p>' +
      '<p class="eg">' + M(5, 'I wish') + ' I ' + M(2, 'had joined') + ' the surf class last summer.</p></div>' +
      '<div class="rule now"><div class="rh"><span class="pill">Mixed</span><h4>a past cause, a present result (and the other way round)</h4></div>' +
      '<p class="fm">' + M(3, 'If') + ' + ' + M(2, 'past perfect') + ', ' + M(4, 'would + verb') + ' &nbsp;·&nbsp; ' + M(3, 'If') + ' + ' + M(1, 'past simple') + ', ' + M(4, 'would have + past participle') + '</p>' +
      '<p class="eg">' + M(3, 'If') + ' the village ' + M(2, 'had listened') + ' ten years ago, it ' + M(4, 'would not be') + ' in danger now.</p>' +
      '<p class="eg">' + M(3, 'If') + ' she ' + M(1, 'were') + ' less shy, she ' + M(4, 'would have introduced') + ' herself at the party.</p></div>' +
      '<div class="rule misc"><div class="rh"><span class="pill">Useful set</span><h4>high time · would rather · as if · wish</h4></div>' +
      '<p class="eg">It’s ' + M(3, 'high time') + ' governments ' + M(1, 'took') + ' the problem seriously.</p>' +
      '<p class="eg">I’d ' + M(3, 'rather') + ' you ' + M(1, 'didn’t light') + ' fires in dry weather.</p>' +
      '<p class="eg">He talks ' + M(3, 'as if') + ' he ' + M(1, 'knew') + ' everything. &nbsp;·&nbsp; I ' + M(5, 'wish') + ' the neighbours ' + M(4, 'would stop') + ' the noise.</p></div>' },
    { t: 'html', cls: 'watch', html: '<b>Watch out!</b> <i>I wish you would…</i> is for things that annoy you and that someone could change. For your own situation use <i>I wish I had / I wish I were</i>.' },
    {
      t: 'speak', id: 'whatif', title: 'Photo what-ifs: speaking cards', tag: 'S',
      instr: 'Take turns. Answer in full sentences with unreal time. Your partner challenges one answer.',
      topics: ['People', 'Planet'], timer: 60, whoLabels: ['Student A', 'Student B'],
      cards: [
        { topic: 'People', q: 'Look at the surf photo. Imagine the learners had never signed up. What would they have missed?', tip: 'Try: <b>If they hadn’t signed up, they would have missed…</b>' },
        { topic: 'People', q: 'Look at the party. If you were one of the guests, who would you have talked to first, and why?', tip: 'Try: <b>If I were there, I’d have gone straight to…</b>' },
        { topic: 'People', q: 'Photo C: if you had been the boy in the yellow shirt, what would you have said?', tip: 'Try: <b>If I had been him, I would have said…</b>' },
        { topic: 'Planet', q: 'Look at the fire. If residents had cleared the dry bushes last year, would the blaze have spread so quickly?', tip: 'Try: <b>It might not have…</b>' },
        { topic: 'Planet', q: 'Look at the ice. I wish people had paid attention to glaciers fifty years ago. Do you agree?', tip: 'Try: <b>I agree / I wish they had…</b>' },
        { topic: 'Planet', q: 'It’s high time your country did something about one environmental problem. Which one, and what?', tip: 'Try: <b>It’s high time we…</b>' }
      ]
    },
    {
      t: 'cloze', id: 'gsel', title: 'Choose the correct form', tag: 'G', mode: 'select',
      instr: 'Choose the correct form for each gap. The sentences are about the photographs.',
      lines: [
        'If the fire crews {1} sooner, the blaze might not have spread so far.',
        'I wish I {2} to the surf class last summer; everyone says it was brilliant.',
        'It’s high time governments {3} the problem seriously.',
        'The teacher would rather the boys {4} their argument somewhere else.',
        'She talks about the glaciers as if she {5} them melt with her own eyes.',
        'If the village had listened ten years ago, it {6} in such a dangerous position now.',
        'If I {7} more confident, I would have introduced myself at the party.',
        'Supposing the ice {8} completely, what would happen to coastal cities?'
      ],
      gaps: [
        { ans: ['had arrived'], opts: ['arrived', 'would arrive', 'had arrived', 'would have arrived'] },
        { ans: ['had gone'], opts: ['went', 'had gone', 'would go', 'have gone'] },
        { ans: ['took'], opts: ['take', 'will take', 'have taken', 'took'] },
        { ans: ['settled'], opts: ['to settle', 'settling', 'settled', 'will settle'] },
        { ans: ['had seen'], opts: ['sees', 'was seeing', 'would see', 'had seen'] },
        { ans: ['would not be'], opts: ['would not have been', 'would not be', 'will not be', 'was not'] },
        { ans: ['were'], opts: ['were', 'am', 'had been', 'would be'] },
        { ans: ['melted'], opts: ['melts', 'will melt', 'would melt', 'melted'] }
      ]
    },
    {
      t: 'cloze', id: 'gtype', title: 'Wish, regret and unreal time: complete with the verb in brackets', tag: 'G', mode: 'type',
      instr: 'Write the correct form of the verb in brackets. Contractions are fine.',
      lines: [
        'I wish I {1} (not / eat) so much at the party; I feel awful.',
        'If only people {2} (listen) to the scientists earlier.',
        'I wish the neighbours {3} (stop) burning rubbish in their garden.',
        'It’s time we {4} (move) to a safer area.',
        'If she {5} (be) braver, she would have joined the surf class last year.',
        'He talks as if he {6} (know) everything about the weather.',
        'If we {7} (not / ignore) the warnings, we would be living in our old house now.',
        'I’d rather you {8} (not / light) fires in dry weather.'
      ],
      gaps: [
        { ans: ['had not eaten', 'hadn\'t eaten', 'hadn’t eaten'] },
        { ans: ['had listened'] },
        { ans: ['would stop'] },
        { ans: ['moved'] },
        { ans: ['were', 'was'] },
        { ans: ['knew'] },
        { ans: ['had not ignored', 'hadn\'t ignored', 'hadn’t ignored'] },
        { ans: ['did not light', 'didn\'t light', 'didn’t light'] }
      ]
    },
    {
      t: 'kwt', id: 'gkwt', title: 'Key word transformation', tag: 'G',
      instr: 'Complete the second sentence so that it has a similar meaning to the first. Use the word in capitals without changing it. Write between <b>two and five</b> words including the word given.',
      items: [
        { s: 'I regret not joining the surf club earlier.', key: 'WISH', pre: 'I', post: 'the surf club earlier.', ans: ['wish i had joined', 'wish i’d joined', 'wish i\'d joined'] },
        { s: 'It would be better if we started cutting emissions now.', key: 'TIME', pre: 'It is', post: 'started cutting emissions.', ans: ['high time we'] },
        { s: 'I would prefer you not to talk about the fire.', key: 'RATHER', pre: 'I', post: 'about the fire.', ans: ['would rather you did not talk', 'would rather you didn’t talk', 'would rather you didn\'t talk'] },
        { s: 'She is shy, so she did not speak to the others at the party.', key: 'WERE', pre: 'If she', post: 'shy, she would have spoken to the others at the party.', ans: ['were not', 'weren’t', 'weren\'t'] },
        { s: 'Please stop making that noise; it is annoying.', key: 'WOULD', pre: 'I wish you', post: 'making that noise.', ans: ['would stop'] },
        { s: 'The fire spread quickly because the bushes were dry.', key: 'HAD', pre: 'If the bushes', post: 'dry, the fire would not have spread so quickly.', ans: ['had not been', 'hadn’t been', 'hadn\'t been'] }
      ]
    },
    {
      t: 'mcq', id: 'gmcq', title: 'Which sentence is correct?', tag: 'G',
      instr: 'Choose the sentence (A, B, C or D) that is grammatically correct.',
      qs: [
        { q: 'Which sentence is correct?', pos: 2,
          right: 'If I had known about the fire, I would have called you.',
          wrong: ['If I would have known about the fire, I would have called you.', 'If I knew about the fire, I would have called you yesterday.', 'If I had known about the fire, I will call you.'],
          why: 'Unreal past: <b>if + past perfect, would have + past participle</b>. We do not use <i>would have</i> in the if-clause.' },
        { q: 'Which sentence is correct?', pos: 0,
          right: 'I wish I had trained harder before the competition.',
          wrong: ['I wish I trained harder before the competition.', 'I wish I would train harder before the competition.', 'I wish I have trained harder before the competition.'],
          why: 'A regret about the past needs <b>wish + past perfect</b>.' },
        { q: 'Which sentence is correct?', pos: 3,
          right: 'It’s high time the town prepared for the summer.',
          wrong: ['It’s high time the town prepares for the summer.', 'It’s high time the town will prepare for the summer.', 'It’s high time the town to prepare for the summer.'],
          why: '<b>It’s high time + past simple</b> talks about the present or future.' },
        { q: 'Which sentence is correct?', pos: 1,
          right: 'She’d rather we didn’t discuss the accident.',
          wrong: ['She’d rather we will not discuss the accident.', 'She’d rather we didn’t discussed the accident.', 'She’d rather we to not discuss the accident.'],
          why: '<b>would rather + another subject + past simple</b>; after <i>didn’t</i> the verb is the base form.' },
        { q: 'Which sentence is correct?', pos: 3,
          right: 'He behaves as if he owned the beach.',
          wrong: ['He behaves as if he would own the beach.', 'He behaves as if he has owned to the beach.', 'He behaves as if he is owning the beach.'],
          why: '<b>as if + past simple</b> shows that the comparison is not true.' },
        { q: 'Which sentence is correct?', pos: 0,
          right: 'If the glaciers hadn’t started to melt, the sea level wouldn’t be rising now.',
          wrong: ['If the glaciers wouldn’t have started to melt, the sea level wouldn’t be rising now.', 'If the glaciers hadn’t started to melt, the sea level won’t be rising now.', 'If the glaciers didn’t start to melt, the sea level wouldn’t have been risen now.'],
          why: 'Mixed conditional: a <b>past cause</b> (past perfect) with a <b>present result</b> (would + base form).' }
      ]
    }
  ]
},

/* ====================================================================== 6 */
{
  id: 'discuss', short: 'Discussion', t: [100, 108],
  title: 'Speaking: discuss and decide',
  goal: 'The interactive part of the exam. Discuss the options, weigh them up and agree on a decision together.',
  blocks: [
    {
      t: 'chart', id: 'chart', title: 'Discussion task', tag: 'S',
      task: 'Here are some ways a community can prepare for a problem before it becomes a crisis. Talk to each other about how helpful each of these might be. Then decide which <b>two</b> would work best.',
      center: 'How might each of these help a community to act before a problem becomes a crisis?',
      centerSmall: '2 minutes + 1 minute to decide',
      opts: [
        { h: 'Yearly drills and training', p: 'Practise what to do, every year' },
        { h: 'Neighbourhood groups', p: 'People who meet regularly and look out for each other' },
        { h: 'School projects', p: 'Children learn about local risks' },
        { h: 'Local news and social media', p: 'Regular, clear information' },
        { h: 'Volunteer clubs', p: 'Sport, clean-ups, rescue teams' }
      ],
      q2: '<b>Decision (1 min).</b> Which two would make the biggest difference? Agree on a final answer together.',
      bank: [
        { g: 'Weighing options', items: ['I’d argue that … is the most practical because …', 'On the one hand …, but on the other hand …', 'That would only work if …'] },
        { g: 'Unreal time', items: ['If people had … , they would have …', 'It’s high time we …', 'I wish more communities would …', 'If we started now, we could …'] },
        { g: 'Partial agreement', items: ['I see your point, but …', 'To a certain extent, yes, although …'] },
        { g: 'Interacting', items: ['What’s your take on …?', 'Would you go along with that?'] },
        { g: 'Deciding', items: ['Shall we settle on …?', 'On balance, I think … and … would make the biggest difference.'] }
      ],
      check: [
        'I spoke for my share of the time.',
        'I used at least one unreal structure (if had…, it’s high time, I wish…).',
        'I invited my partner to speak and responded to their ideas.',
        'We reached a decision together.'
      ]
    }
  ]
},

/* ====================================================================== 7 */
{
  id: 'write', short: 'Writing', t: [108, 120],
  title: 'Writing: a paragraph with unreal time',
  goal: 'Write a short paragraph now. The full essay is homework.',
  blocks: [
    {
      t: 'write', id: 'wr', title: 'If we had acted sooner…', tag: 'W',
      promptHtml:
        '<p style="margin:0 0 10px"><b>Task.</b> Look at the photograph of the icebergs (Photo B, Task 2). Write a paragraph for a school magazine, beginning with the words <b>“If we had acted sooner,”</b>.</p>' +
        '<p style="margin:0 0 10px">Use <b>at least three</b> of these: <i>wish / if only · if + past perfect · it’s high time · would rather · as if</i>.</p>' +
        '<p style="margin:0">Write <b>70–90 words</b>.</p>',
      ph: 'If we had acted sooner, …',
      min: 70, max: 90,
      checks: [
        { label: 'At least 70 words', min: 70 },
        { label: 'No more than 90 words', max: 90 },
        { label: 'Starts with “If we had acted sooner”', re: '^\\s*if we had acted sooner' },
        { label: 'Wish or if only', re: '\\b(i|we) wish\\b|\\bif only\\b' },
        { label: 'If + past perfect', re: '\\bif\\b[^.]*\\bhad\\b[^.]*\\b(been|done|known|seen|listened|started|cut|taken|acted)\\b' },
        { label: 'High time, would rather or as if', re: '\\bhigh time\\b|\\bwould rather\\b|\\bas if\\b|\\bas though\\b|\\bi’d rather\\b|\\bi\'d rather\\b' }
      ],
      exp: ['it’s high time', 'if only', 'i wish', 'would rather', 'as if', 'tipping point', 'irreversible', 'unprecedented', 'mitigate'],
      model:
        '<p>If we had acted sooner, the glaciers in this photograph might still be solid. I wish earlier generations had taken the warnings seriously, because the damage may now be irreversible. It is high time we stopped treating prevention as pessimism. We talk as if we had unlimited time, yet we are close to a tipping point. I would rather our leaders made difficult decisions today than explained tomorrow why they did nothing.</p>'
    },
    {
      t: 'reflect', id: 'exit', title: 'Exit ticket', tag: 'R',
      fields: [
        { id: 'a', label: 'One word or phrase from today that I will use again' },
        { id: 'b', label: 'One thing I found difficult' },
        { id: 'c', label: 'One thing I wish I had done earlier (use “I wish I had…”)' }
      ]
    }
  ]
}

    ]
  };
})();
