/* Unreal Time Lab: lesson data. Two 60-minute lessons in one page (minutes 0-60 and 60-120). */
(function () {
  function M(c, t) { return '<mark class="m' + c + '">' + t + '</mark>'; }
  /* mark colours: 1 = past simple / continuous (unreal now), 2 = past perfect (unreal past),
     3 = trigger words, 4 = would / could, 5 = wish words */

  var L = window.LESSON = {
    id: 'unreal',
    title: 'Unreal Time Lab',
    eyebrow: 'Lesson 02 · Grammar · 2 × 60 min',
    sub: 'Past tenses that talk about the present, the future and things that never happened. Five real-life situations, colour-coded rules in plain English, and lots of practice.',
    steps: [

/* ============================================================ LESSON 1 */
{
  id: 'warm', short: 'Warm-up', t: [0, 8],
  title: 'Warm-up: what if…?',
  goal: 'Answer in turn. Do not worry about grammar yet. Just notice the questions: the verbs look like past tense, but we are talking about imaginary things.',
  blocks: [
    { t: 'html', cls: 'note', html: '<b>Lesson 1 of 2.</b> Today: <b>if · imagine · suppose · what if · as if · polite questions · it’s high time</b>. Next lesson: <b>would rather · wish · if only</b>.' },
    {
      t: 'speak', id: 'warmcards', title: 'What if…? Speaking cards', tag: 'S',
      instr: 'Take turns. Answer for about a minute each. Your partner asks one follow-up question.',
      topics: ['Work', 'Home & money', 'Travel', 'Big ideas'], timer: 60, whoLabels: ['Student A', 'Student B'],
      cards: [
        { topic: 'Work', q: 'What if you were offered your dream job abroad tomorrow? Would you take it?', tip: 'Try: <b>If I were offered…, I’d…</b>' },
        { topic: 'Work', q: 'It’s high time many companies introduced a four-day working week. How far do you agree?', tip: 'Try: <b>It’s high time + past simple</b>' },
        { topic: 'Home & money', q: 'Suppose you won ten million euros tomorrow. What would you do first?', tip: 'Try: <b>I’d probably…, and then I’d…</b>' },
        { topic: 'Home & money', q: 'Would you rather rent a flat or buy one with a huge mortgage? Why?', tip: 'Try: <b>I’d rather… than…</b>' },
        { topic: 'Travel', q: 'Imagine you could live in any country for a year. Where would you go, and what would you do there?', tip: 'Try: <b>Imagine you could…</b>' },
        { topic: 'Travel', q: 'Do you ever wish you had travelled more when you were younger?', tip: 'Try: <b>I wish I had…</b>' },
        { topic: 'Big ideas', q: 'What if the internet stopped working for a whole week? How would your life change?', tip: 'Try: <b>I’d have to…</b>' },
        { topic: 'Big ideas', q: 'Some people talk about technology as if it were magic. Is that fair?', tip: 'Try: <b>as if it were…</b>' }
      ]
    }
  ]
},

{
  id: 'idea', short: 'Big idea', t: [8, 22],
  title: 'The big idea: unreal time',
  goal: 'Past tense does not always mean past time. Learn the two “unreal” time zones and the colour code we will use all lesson.',
  blocks: [
    { t: 'html', cls: 'bigidea', html:
      '<p class="kicker">The big idea</p>' +
      '<p class="huge">In unreal time the <span class="u">verb goes one step back</span>, but the meaning does not go back.</p>' +
      '<p>Look: <i>I wish I ' + M(1, 'was') + ' rich.</i> The verb is past, but the wish is about <b>now</b>. We use a past form to say <b>“this is not real”</b> or <b>“this is unlikely”</b>.</p>' },
    { t: 'html', cls: 'legend', html:
      '<span class="lg"><mark class="m1">now / future</mark> past simple, past continuous</span>' +
      '<span class="lg"><mark class="m2">past that did not happen</mark> past perfect</span>' +
      '<span class="lg"><mark class="m3">trigger words</mark> if, suppose, wish…</span>' +
      '<span class="lg"><mark class="m4">result</mark> would, could</span>' },
    { t: 'html', cls: 'tmap', html:
      '<div class="th">What we mean</div><div class="th">Verb form</div><div class="th">Example</div>' +
      '<div class="tc now">Not real <b>now</b>, or unlikely in the <b>future</b></div>' +
      '<div class="tc now"><b>past simple</b><br><b>past continuous</b></div>' +
      '<div class="tc now">' + M(3, 'If') + ' I ' + M(1, 'had') + ' more time, I ' + M(4, 'would learn') + ' Japanese.<br>' + M(3, 'I wish') + ' I ' + M(1, 'was earning') + ' more.</div>' +
      '<div class="tc past">Did <b>not happen</b> in the past</div>' +
      '<div class="tc past"><b>past perfect simple</b><br><b>past perfect continuous</b></div>' +
      '<div class="tc past">' + M(3, 'If') + ' I ' + M(2, 'had known') + ', I ' + M(4, 'would have called') + '.<br>' + M(3, 'If only') + ' I’d ' + M(2, 'been listening') + '!</div>' },
    { t: 'tips', items: [
      { k: 'Watch out 1', h: 'Was or were?', p: 'With <b>I / he / she / it</b> you can use <b>was</b> or <b>were</b>: <i>I wish I was rich. · I wish I were rich.</i> <b>Were</b> sounds more formal. In <b>If I were you…</b> we always use <b>were</b>.' },
      { k: 'Watch out 2', h: 'How likely is it?', p: '<i>Supposing you ' + 'became' + ' a millionaire…</i> = very unlikely. <i>Supposing you ' + 'become' + ' a millionaire…</i> = quite possible. A present tense makes the idea feel <b>more likely</b>.' },
      { k: 'Remember', h: 'Same words, different job', p: 'The past tense here does not say <b>when</b>. It says <b>how real</b> the situation is. Always ask: <i>is this real, unlikely, or impossible?</i>' }
    ] },
    {
      t: 'mcq', id: 'real', title: 'What does the verb really mean?', tag: 'G',
      instr: 'Choose the best answer. Think about the meaning, not the tense name.',
      qs: [
        { q: 'I wish I <em>was</em> rich. The wish is about…', pos: 1,
          right: 'now (it is not true now)', wrong: ['yesterday', 'last year only', 'any time in the past'],
          why: 'Past simple after <i>wish</i> = a wish about the present.' },
        { q: 'If I <em>had known</em> about the meeting, I would have come. What do we understand?', pos: 0,
          right: 'I did not know, and I did not come.', wrong: ['I knew, and I came.', 'I will know tomorrow.', 'I knew, but I did not come.'],
          why: 'Past perfect = a past situation that did not happen.' },
        { q: 'It’s high time we <em>left</em>. What does the speaker mean?', pos: 3,
          right: 'We should leave now.', wrong: ['We left a long time ago.', 'We never leave on time.', 'We are leaving in an hour, as planned.'],
          why: '<i>It’s high time</i> + past simple = it should happen now.' },
        { q: 'She talks as if she <em>owned</em> the company. What is probably true?', pos: 2,
          right: 'She does not own it.', wrong: ['She owned it last year.', 'She is going to buy it.', 'She owns it.'],
          why: 'Past tense after <i>as if</i> = the comparison is not true.' },
        { q: 'Which sentence talks about a past that did <b>not</b> happen?', pos: 1,
          right: 'If only I had taken that job!', wrong: ['I wish I had a better job.', 'It’s time I got a better job.', 'Imagine you got a better job.'],
          why: '<i>If only + past perfect</i> = regret about the past. The other three are about now or the future.' },
        { q: 'Suppose you <em>won</em> the lottery tomorrow. The verb <i>won</i> shows…', pos: 0,
          right: 'an unlikely future event', wrong: ['something that already happened', 'a habit in the past', 'a certain future'],
          why: 'Past form + <i>tomorrow</i>: a possible but unlikely future.' }
      ]
    }
  ]
},

{
  id: 'cond', short: 'Work & money', t: [22, 36],
  title: 'Situation 1 · Work and money: if, imagine, suppose, what if',
  goal: 'Talk about imaginary jobs, salaries and big decisions. Two time zones: unreal now / future, and unreal past.',
  blocks: [
    { t: 'html', cls: 'rules', html:
      '<div class="rule now"><div class="rh"><span class="pill">Now / future</span><h4>if · imagine · suppose · supposing · what if</h4></div>' +
      '<p class="fm">' + M(3, 'if / imagine / suppose / what if') + ' + ' + M(1, 'past simple / past continuous') + ', ' + M(4, 'would + verb') + '</p>' +
      '<p class="eg">If you ' + M(1, 'were travelling') + ' to Russia, ' + M(4, 'would') + ' you get into trouble?</p>' +
      '<p class="eg">I ' + M(4, 'wouldn’t accept') + ' a job ' + M(3, 'unless') + ' I ' + M(1, 'was') + ' absolutely sure what the salary was.</p>' +
      '<p class="eg">' + M(3, 'What if') + ' you ' + M(1, 'were walking') + ' down the street and suddenly found a wallet? ' + M(4, 'Would') + ' you hand it in?</p></div>' +
      '<div class="rule past"><div class="rh"><span class="pill">Past</span><h4>the same words, but about the past</h4></div>' +
      '<p class="fm">' + M(3, 'if / imagine / suppose / what if') + ' + ' + M(2, 'past perfect') + ', ' + M(4, 'would have + past participle') + '</p>' +
      '<p class="eg">If I ' + M(2, 'had known') + ', I ' + M(4, 'would have taken') + ' some dollars with me.</p>' +
      '<p class="eg">' + M(3, 'Suppose') + ' you ' + M(2, 'had won') + ' the lottery last night. What ' + M(4, 'would') + ' you ' + M(4, 'have done') + '?</p>' +
      '<p class="eg">' + M(3, 'Imagine') + ' you’d ' + M(2, 'been working') + ' there for 40 years. What kind of pension ' + M(4, 'would') + ' you ' + M(4, 'have got') + '?</p></div>' +
      '<div class="watch"><b>Watch out!</b> After <i>suppose / supposing / what if</i> you can use a present tense. It means the situation is <b>more likely</b>: <i>Supposing you ' + 'become' + ' a millionaire, how will it change your life?</i></div>' },
    {
      t: 'cloze', id: 'condsel', title: 'Choose the best form', tag: 'G', mode: 'select',
      instr: 'All these situations are imaginary or unlikely. Choose the best form.',
      lines: [
        'If our manager {1} us work from home, we would save hours every week.',
        'Supposing you {2} a pay rise tomorrow, what would you spend it on?',
        'I wouldn’t sign the contract unless I {3} exactly what the salary was.',
        'If I {4} the company, I would have given everyone a bonus last year.',
        'What if the whole team {5} the project tomorrow? Would you be surprised?',
        'If the manager {6} the email earlier, we wouldn’t have missed the deadline.',
        'Imagine you {7} in this job for forty years. What kind of pension would you have got?',
        'If I {8} the lottery, I wouldn’t tell anyone at work.'
      ],
      gaps: [
        { ans: ['let'], opts: ['would let', 'let', 'lets', 'had let'] },
        { ans: ['were given'], opts: ['are given', 'would be given', 'had given', 'were given'] },
        { ans: ['knew'], opts: ['knew', 'will know', 'would know', 'had known'] },
        { ans: ['had been running'], opts: ['ran', 'was running', 'would run', 'had been running'] },
        { ans: ['left'], opts: ['leave', 'would leave', 'left', 'had left'] },
        { ans: ['had sent'], opts: ['sent', 'would send', 'has sent', 'had sent'] },
        { ans: ['had been working'], opts: ['worked', 'were working', 'had been working', 'are working'] },
        { ans: ['won'], opts: ['win', 'had won', 'would win', 'won'] }
      ]
    },
    {
      t: 'cloze', id: 'jobstory', title: 'Story: The Job Offer', tag: 'G', mode: 'type',
      instr: 'Write the verb in brackets in the correct form. Use unreal tenses when the situation is imaginary or unlikely.',
      text: [
        'Last Friday Dana was offered a job in Lisbon. “It sounds fantastic,” she told her brother, “but what if I {1} and hated it? Supposing I {2} all my friends here, who would I talk to?” Her brother laughed. “If I {3} you, I’d say yes today.”',
        'Dana wasn’t convinced. “I wouldn’t go unless I {4} sure the salary was good,” she said. The email didn’t say anything about money. “If only they {5} me the number!” She thought about last year, when she turned down a similar offer. “If I {6} yes last year, I would have saved a lot of money.”',
        'In the end she phoned her new boss. “Excuse me, I {7} whether you could tell me about the salary.” Her brother said it was high time she {8} a decision. “It’s about time you {9} worrying!” Dana smiled. By the end of the call she was talking to her boss as if she {10} him for years.'
      ],
      gaps: [
        { ans: ['moved'], hint: '(move)' },
        { ans: ['left'], hint: '(leave)' },
        { ans: ['were'], hint: '(be)' },
        { ans: ['was', 'were'], hint: '(be)' },
        { ans: ['had told', "'d told", 'had told'], hint: '(tell)' },
        { ans: ['had said', "'d said"], hint: '(say)' },
        { ans: ['was wondering', 'wondered'], hint: '(wonder)' },
        { ans: ['made', 'was making'], hint: '(make)' },
        { ans: ['stopped'], hint: '(stop)' },
        { ans: ['had known', "'d known"], hint: '(know)' }
      ]
    }
  ]
},

{
  id: 'asif', short: 'People', t: [36, 48],
  title: 'Situation 2 · People and behaviour: as if / as though',
  goal: 'Describe how people act, look and sound. The tense after as if tells us if the comparison is true or not.',
  blocks: [
    { t: 'html', cls: 'rules', html:
      '<div class="rule now"><div class="rh"><span class="pill">Not true</span><h4>as if / as though + past tense</h4></div>' +
      '<p class="fm">' + M(3, 'as if / as though') + ' + ' + M(1, 'past simple / past continuous') + ' (now) or ' + M(2, 'past perfect') + ' (before)</p>' +
      '<p class="eg">She acts ' + M(3, 'as if') + ' she ' + M(1, 'was') + ' a millionaire. <small>(She is not.)</small></p>' +
      '<p class="eg">Colin acts ' + M(3, 'as though') + ' he ' + M(1, 'were making') + ' a million pounds a month.</p>' +
      '<p class="eg">Tony looks ' + M(3, 'as if') + ' someone ' + M(2, 'had just handed') + ' him a million euros.</p></div>' +
      '<div class="rule past"><div class="rh"><span class="pill">Maybe true</span><h4>as if + present tense</h4></div>' +
      '<p class="fm">' + M(3, 'as if') + ' + <b>present / present perfect</b> = the comparison is possible</p>' +
      '<p class="eg">She looks ' + M(3, 'as if') + ' she’s really wealthy. <small>(It is very possible that she is.)</small></p></div>' +
      '<div class="rule misc"><div class="rh"><span class="pill">Past before</span><h4>When the first verb is past</h4></div>' +
      '<p class="fm">first verb in the past → ' + M(1, 'past tense') + ' after <b>as if</b> (true or not true)</p>' +
      '<p class="eg">She looked ' + M(3, 'as if') + ' she ' + M(1, 'was') + ' really wealthy, but I knew she wasn’t. <small>(or: so maybe she was)</small></p></div>' +
      '<div class="watch"><b>Quick rule:</b> the first verb tells you <b>when</b>. The verb after <i>as if</i> tells you <b>how real</b> the comparison is.</div>' },
    {
      t: 'mcq', id: 'asifmcq', title: 'What is the truth?', tag: 'G',
      instr: 'Choose the answer that is probably true.',
      qs: [
        { q: 'Marta talks as if she <em>knew</em> everyone at the conference. What is probably true?', pos: 2,
          right: 'She does not know them.', wrong: ['She knows everyone.', 'She knew them last year.', 'She will meet them later.'],
          why: 'Past tense after <i>as if</i> in the present = the comparison is not true.' },
        { q: 'Jake looks as if he <em>has been</em> running. What do we think?', pos: 0,
          right: 'It is possible that he has been running.', wrong: ['He definitely has not been running.', 'He was running yesterday.', 'He is going to run.'],
          why: 'A present perfect after <i>looks as if</i> = a real possibility.' },
        { q: 'You look as if you <em>had seen</em> a ghost! What does the speaker mean?', pos: 3,
          right: 'You look shocked, but you did not see a ghost.', wrong: ['You really saw a ghost.', 'You will see a ghost.', 'You often see ghosts.'],
          why: 'A comparison that is not true (there was no ghost).' },
        { q: 'She looked as if she <em>was</em> ill, so I called a doctor. What can we say?', pos: 1,
          right: 'We do not know if she was really ill.', wrong: ['She was definitely healthy.', 'She was definitely ill.', 'The doctor was ill.'],
          why: 'After a past tense, the past tense after <i>as if</i> can be true or not true.' },
        { q: 'Tom behaves as if nothing <em>had happened</em>. What is the situation?', pos: 0,
          right: 'Something did happen, but Tom pretends it did not.', wrong: ['Nothing happened.', 'Tom does not know about it.', 'It will happen soon.'],
          why: 'Past perfect = a past that is not accepted. Tom is pretending.' },
        { q: 'It looks as if it <em>will</em> rain. What does the speaker think?', pos: 2,
          right: 'Rain is quite possible.', wrong: ['It cannot possibly rain.', 'It rained earlier.', 'It rains every day.'],
          why: 'Present / future tense after <i>as if</i> = a real possibility.' }
      ]
    },
    {
      t: 'cloze', id: 'asiftype', title: 'Write the correct form', tag: 'G', mode: 'type',
      instr: 'Write the verb in brackets in the correct form. Decide: is the comparison true or not true?',
      lines: [
        'My neighbour Rupert dresses as though he {1} a millionaire, but he is actually unemployed.',
        'Why are you looking at me as if I {2} your wallet? I haven’t touched it!',
        'When I got home, the kitchen looked as if a storm {3} it.',
        'You sound as though you {4} for days, but you were in bed at nine!',
        'He spends money as if it {5} on trees.',
        'She’s very quiet today. She looks as if she {6} upset about something. (It is possible.)',
        'Colin acts as if he {7} a million pounds a month, but he earns an average salary.',
        'It felt as if we {8} for hours, but it was only twenty minutes.'
      ],
      gaps: [
        { ans: ['were', 'was'], hint: '(be)' },
        { ans: ['had stolen', "'d stolen"], hint: '(steal)' },
        { ans: ['had hit', "'d hit"], hint: '(hit)' },
        { ans: ['had not slept', 'hadn\'t slept', "'d not slept"], hint: '(not sleep)' },
        { ans: ['grew', 'were growing'], hint: '(grow)' },
        { ans: ['is', '\'s'], hint: '(be)' },
        { ans: ['were making', 'was making', 'made'], hint: '(make)' },
        { ans: ['had been walking', 'had walked', "'d been walking", "'d walked"], hint: '(walk)' }
      ]
    }
  ]
},

{
  id: 'polite', short: 'Hotel & time', t: [48, 60],
  title: 'Situation 3 · Hotel and travel: polite questions and “it’s high time”',
  goal: 'Two more uses of unreal time: a soft, polite voice for guests and customers, and a gentle push to act now.',
  blocks: [
    { t: 'html', cls: 'rules', html:
      '<div class="rule misc"><div class="rh"><span class="pill">Polite</span><h4>questions and requests</h4></div>' +
      '<p class="fm">Use a <b>past tense</b> to sound softer and more polite. It is <b>not</b> about past time.</p>' +
      '<p class="eg">' + M(1, 'Did you want') + ' to check in, madam? <small>(instead of: Do you want…)</small></p>' +
      '<p class="eg">I ' + M(1, 'was wondering') + ' whether you ' + M(4, 'might') + ' be able to give me some advice.</p>' +
      '<p class="eg">' + M(1, 'Were you looking') + ' for anything in particular? · We ' + M(1, 'were hoping') + ' you could help.</p></div>' +
      '<div class="rule now"><div class="rh"><span class="pill">Time to act</span><h4>it’s time · it’s high time · it’s about time</h4></div>' +
      '<p class="fm">' + M(3, 'it’s (high / about) time') + ' + subject + ' + M(1, 'past simple') + ' = we should do it now</p>' +
      '<p class="eg">It’s high time I ' + M(1, 'got') + ' a mortgage.</p>' +
      '<p class="eg">It’s about time we ' + M(1, 'were leaving') + '. <small>(past simple or continuous: almost no difference)</small></p>' +
      '<p class="eg">It’s time ' + M(4, 'to think') + ' about getting a loan. <small>(✓ full infinitive after <b>it’s time</b>, but ✗ after <b>high / about time</b>)</small></p></div>' },
    {
      t: 'cloze', id: 'politetype', title: 'Make it polite (hotel reception)', tag: 'G', mode: 'type',
      instr: 'Write the words in brackets in a past form to make each question or sentence more polite.',
      lines: [
        'Good evening. {1} to check in, madam?',
        'I {2} whether you could recommend a good restaurant nearby.',
        '{3} to stay for the whole week, sir?',
        'We {4} you might help us with our bags.',
        '{5} for anything in particular?',
        'I {6} if you {7} change my room.',
        'How long {8} to stay with us?'
      ],
      gaps: [
        { ans: ['did you want', 'were you wanting'], hint: '(you / want)' },
        { ans: ['was wondering'], hint: '(wonder)' },
        { ans: ['were you planning', 'did you plan'], hint: '(you / plan)' },
        { ans: ['were hoping'], hint: '(hope)' },
        { ans: ['were you looking'], hint: '(you / look)' },
        { ans: ['was wondering'], hint: '(wonder)' },
        { ans: ['could'], hint: '(can)' },
        { ans: ['did you intend', 'were you intending'], hint: '(you / intend)' }
      ]
    },
    {
      t: 'cloze', id: 'timesel', title: 'It’s time…', tag: 'G', mode: 'select',
      instr: 'Choose the correct form. Remember the difference between <i>it’s time</i> and <i>it’s high / about time</i>.',
      lines: [
        'It’s high time the hotel {1} the old lift. It’s broken again.',
        'It’s time {2} for the airport. The taxi is waiting.',
        'It’s about time you {3} a holiday. You look exhausted.',
        'It’s {4} to start thinking about next year’s budget.',
        'Isn’t it about time you {5} a pay rise?',
        'It’s time for the guests {6} their rooms.'
      ],
      gaps: [
        { ans: ['replaced'], opts: ['replace', 'replacing', 'replaced', 'to replace'] },
        { ans: ['to leave'], opts: ['we leave', 'we are leaving', 'to leave', 'leaving'] },
        { ans: ['took'], opts: ['take', 'to take', 'taking', 'took'] },
        { ans: ['time'], opts: ['high time', 'about time', 'time', 'the time'] },
        { ans: ['asked for'], opts: ['ask for', 'to ask for', 'asking for', 'asked for'] },
        { ans: ['to leave'], opts: ['leaving', 'to leave', 'left', 'leave'] }
      ]
    },
    {
      t: 'reflect', id: 'own1', title: 'Your own sentences', tag: 'W',
      fields: [
        { id: 'a', label: 'If I were my boss (or teacher), I would…' },
        { id: 'b', label: 'Suppose you could change one thing about your city. What… ?' },
        { id: 'c', label: 'My neighbour / a colleague behaves as if…' },
        { id: 'd', label: 'It’s high time the government / my company…' }
      ]
    }
  ]
},

/* ============================================================ LESSON 2 */
{
  id: 'recap', short: 'Recap', t: [60, 66],
  title: 'Lesson 2 · Recap: structures and meanings',
  goal: 'Flip each card and say a new example aloud. Then match the situation with the structure.',
  blocks: [
    {
      t: 'flash', id: 'recapcards', title: 'Structure cards', tag: 'V',
      cards: [
        { pos: 'unreal now', term: 'If + past simple', def: 'An imaginary or unlikely situation now or in the future.', ex: 'If I had more time, I’d learn Japanese.' },
        { pos: 'unreal past', term: 'If + past perfect', def: 'A past situation that did not happen.', ex: 'If I had known, I would have called.' },
        { pos: 'starters', term: 'imagine · suppose · what if', def: 'Start a question about an imaginary situation.', ex: 'What if you won the lottery?' },
        { pos: 'not true', term: 'as if / as though + past', def: 'A comparison that is not true.', ex: 'He acts as if he owned the place.' },
        { pos: 'maybe true', term: 'as if + present', def: 'A comparison that may be true.', ex: 'She looks as if she’s tired.' },
        { pos: 'polite', term: 'I was wondering whether…', def: 'A softer, more polite request.', ex: 'I was wondering whether you could help.' },
        { pos: 'do it now', term: 'It’s (high / about) time + past', def: 'It should happen now. We are late.', ex: 'It’s high time we left.' },
        { pos: 'same person', term: 'would rather + infinitive', def: 'My own preference.', ex: 'I’d rather stay at home.' },
        { pos: 'other person', term: 'would rather + person + past', def: 'A preference about someone else.', ex: 'I’d rather you stayed.' },
        { pos: 'wish now', term: 'wish + past simple', def: 'A wish about the present.', ex: 'I wish I had a bigger flat.' },
        { pos: 'regret', term: 'wish + past perfect', def: 'A regret about the past.', ex: 'I wish I had studied law.' },
        { pos: 'complaint', term: 'wish + would', def: 'Someone else should change, or we complain.', ex: 'I wish he would stop talking.' }
      ]
    },
    {
      t: 'match', id: 'recapmatch', title: 'Match the situation with the sentence', tag: 'V',
      instr: 'Tap a situation on the left, then the sentence that fits on the right.',
      pairs: [
        { l: 'You are annoyed that a colleague keeps interrupting.', r: 'I wish he would stop interrupting.' },
        { l: 'You regret not taking a job offer last year.', r: 'If only I had taken that job!' },
        { l: 'You politely ask a stranger for the time.', r: 'I was wondering if you knew the time.' },
        { l: 'A friend pretends to be rich, but she is not.', r: 'She acts as if she were rich.' },
        { l: 'You say it is the right moment to start saving.', r: 'It’s high time we started saving.' },
        { l: 'You prefer that your friend does not come tonight.', r: 'I’d rather you didn’t come tonight.' },
        { l: 'You imagine an unlikely future event.', r: 'What if we won the lottery?' },
        { l: 'You formally wish someone good luck.', r: 'I wish you every success.' }
      ],
      order: [4, 0, 6, 2, 7, 3, 1, 5]
    }
  ]
},

{
  id: 'rather', short: 'Preferences', t: [66, 77],
  title: 'Situation 4 · Preferences: would rather / would sooner',
  goal: 'Say what you prefer, and what you prefer other people to do. The verb form depends on who does the action.',
  blocks: [
    { t: 'html', cls: 'rules', html:
      '<div class="rule now"><div class="rh"><span class="pill">Same person</span><h4>would rather + bare infinitive</h4></div>' +
      '<p class="fm">' + M(3, 'would rather / would sooner') + ' + <b>infinitive without to</b></p>' +
      '<p class="eg">I’d rather ' + M(4, 'stay') + ' at home tonight.</p>' +
      '<p class="eg">She’d rather ' + M(4, 'not borrow') + ' any money from you. <small>(= She’d prefer not to borrow…)</small></p></div>' +
      '<div class="rule now"><div class="rh"><span class="pill">Other person · now / future</span><h4>would rather + person + past simple</h4></div>' +
      '<p class="fm">' + M(3, 'would rather') + ' + <b>new person</b> + ' + M(1, 'past simple / past continuous') + '</p>' +
      '<p class="eg">Jan would rather we ' + M(1, 'bought') + ' a house than carried on renting.</p>' +
      '<p class="eg">Would you rather I ' + M(1, 'was begging') + ' in the streets?</p></div>' +
      '<div class="rule past"><div class="rh"><span class="pill">Other person · past</span><h4>would rather + person + past perfect</h4></div>' +
      '<p class="fm">' + M(3, 'would rather') + ' + <b>new person</b> + ' + M(2, 'past perfect') + '</p>' +
      '<p class="eg">We’d rather you ' + M(2, 'hadn’t lent') + ' Kurdip the money.</p></div>' +
      '<div class="watch"><b>Watch out!</b> Past tense after <i>would rather</i> is only for <b>someone else</b>. Same subject? Use the bare infinitive or <i>would prefer + to</i>: <i>She’d rather not borrow…</i> ✓ · <i>She’d prefer not to borrow…</i> ✓ · <i>She’d rather she borrowed…</i> ✗</div>' },
    {
      t: 'kwt', id: 'rathkwt', title: 'Finish the second sentence', tag: 'U',
      instr: 'Complete the second sentence so that it means the same as the first. Use the key word in your answer. Write only the missing words.',
      items: [
        { s: 'I’d prefer you to arrive before nine.', key: 'RATHER', pre: 'I’d rather you', post: 'before nine.', ans: ['arrived'] },
        { s: 'Would you prefer me to wait outside?', key: 'RATHER', pre: 'Would you rather', post: 'outside?', ans: ['I waited', 'I was waiting'] },
        { s: 'I’d prefer not to discuss this on the phone.', key: 'RATHER', pre: 'I’d rather', post: 'this on the phone.', ans: ['not discuss'] },
        { s: 'The manager would prefer us to be working in the office.', key: 'RATHER', pre: 'The manager would rather we', post: 'in the office.', ans: ['were working'] },
        { s: 'We would have preferred you to call us first.', key: 'RATHER', pre: 'We’d rather you', post: 'us first.', ans: ['had called', 'd called'] },
        { s: 'I’d prefer to take the train instead of driving.', key: 'SOONER', pre: 'I’d sooner', post: 'than drive.', ans: ['take the train'] },
        { s: 'She’d prefer him not to tell anyone.', key: 'RATHER', pre: 'She’d rather he', post: 'anyone.', ans: ['didn\'t tell', 'did not tell'] },
        { s: 'They would have preferred it if you hadn’t been so late.', key: 'SOONER', pre: 'They’d sooner you', post: 'so late.', ans: ['hadn\'t been', 'had not been'] }
      ]
    },
    {
      t: 'mcq', id: 'rathmcq', title: 'Same subject or different subject?', tag: 'G',
      instr: 'Choose the correct form.',
      qs: [
        { q: 'I’d rather ______ at home tonight. (I want to stay.)', pos: 2,
          right: 'stay', wrong: ['to stay', 'stayed', 'staying'],
          why: 'Same subject: <i>would rather</i> + bare infinitive.' },
        { q: 'Dad would rather we ______ the new flat than the old one.', pos: 0,
          right: 'bought', wrong: ['to buy', 'buying', 'would buy'],
          why: 'New subject (<i>we</i>): past simple for a present or future preference.' },
        { q: 'I’m sorry you told her. I’d rather you ______ anything.', pos: 3,
          right: 'hadn’t said', wrong: ['didn’t say', 'wouldn’t say', 'don’t say'],
          why: 'A past event: past perfect after <i>would rather</i> + new subject.' },
        { q: 'Which sentence is correct?', pos: 1,
          right: 'She’d rather not borrow any money from you.', wrong: ['She’d rather not to borrow any money from you.', 'She’d rather borrowing no money from you.', 'She’d rather didn’t borrow any money from you.'],
          why: 'Same subject: <i>would rather not</i> + bare infinitive.' },
        { q: '“Shall I open the window?” “I’d rather you ______.”', pos: 2,
          right: 'didn’t', wrong: ['don’t', 'won’t', 'hadn’t'],
          why: 'A present preference about another person: past simple.' }
      ]
    }
  ]
},

{
  id: 'wish', short: 'Regrets', t: [77, 93],
  title: 'Situation 5 · Regrets and dreams: wish and if only',
  goal: 'Express what you want to be different. This is the biggest family in unreal time: now, past, complaints, abilities and formal wishes.',
  blocks: [
    { t: 'html', cls: 'wtable', html:
      '<div class="th">What we mean</div><div class="th">Structure</div><div class="th">Example</div>' +
      '<div class="tc now">A wish about <b>now</b> or the <b>future</b></div><div class="tc now">' + M(5, 'wish / if only') + ' + ' + M(1, 'past simple / continuous') + '</div><div class="tc now">Do you wish you ' + M(1, 'had') + ' a bigger house?<br>If only I ' + M(1, 'was earning') + ' a reasonable salary.</div>' +
      '<div class="tc past">A <b>regret</b> about the <b>past</b></div><div class="tc past">' + M(5, 'wish / if only') + ' + ' + M(2, 'past perfect') + '</div><div class="tc past">If only I’d ' + M(2, 'bought') + ' a lottery ticket this morning.<br>Carla wished she’d ' + M(2, 'been keeping') + ' a closer eye on her investments.</div>' +
      '<div class="tc wish">A <b>complaint</b>, or wanting someone else to change</div><div class="tc wish">' + M(5, 'wish / if only') + ' + ' + M(4, 'would') + '</div><div class="tc wish">I wish they ' + M(4, 'would offer') + ' me a pay rise.</div>' +
      '<div class="tc mod">Ability or permission <b>now</b></div><div class="tc mod">' + M(5, 'wish / if only') + ' + ' + M(4, 'could') + '</div><div class="tc mod">I wish I ' + M(4, 'could find') + ' a job that pays well.</div>' +
      '<div class="tc mod">Ability or permission in the <b>past</b></div><div class="tc mod">' + M(5, 'wish / if only') + ' + ' + M(4, 'could have') + ' + past participle</div><div class="tc mod">I wish I ' + M(4, 'could have got') + ' a mortgage with a fixed interest rate.</div>' +
      '<div class="tc wish">A <b>very formal</b> desire</div><div class="tc wish">' + M(5, 'wish') + ' + full infinitive</div><div class="tc wish">I wish ' + M(4, 'to speak') + ' to the bank manager.</div>' +
      '<div class="tc wish">Wishing someone <b>luck, happiness, success</b></div><div class="tc wish">' + M(5, 'wish') + ' + noun</div><div class="tc wish">I wish him every ' + M(4, 'success') + '.</div>' },
    { t: 'html', cls: 'rules', html:
      '<div class="watch"><b>Watch out 1.</b> When <i>wish</i> itself is in the past, the next verb stays in the same “unreal” form: <i>Simon dearly wished he ' + 'had' + ' a bigger house.</i></div>' +
      '<div class="watch"><b>Watch out 2.</b> We do not usually use <i>would</i> when the subject of <i>wish</i> and <i>would</i> is the same person. <i>Pete wishes he would earn more.</i> ✗ · <i>Pete wishes he earned / could earn more.</i> ✓</div>' +
      '<div class="watch"><b>Watch out 3.</b> For a real, possible future, use <i>hope</i>, not <i>wish</i>. <i>I wish the cheque arrives tomorrow.</i> ✗ · <i>I hope the cheque arrives tomorrow.</i> ✓</div>' },
    {
      t: 'cloze', id: 'wishsel', title: 'Choose the correct form', tag: 'G', mode: 'select',
      instr: 'Choose the best word or phrase for each gap.',
      lines: [
        'All my colleagues have electric cars. I wish I {1} one too.',
        'I wish the neighbours {2} the music down. It’s midnight!',
        'If only I {3} bought that ticket this morning!',
        'I wish I {4} speak Italian. I’m going to Rome next week.',
        'My grandfather wishes he {5} gone to university, but his family could not afford it.',
        'Excuse me, I wish {6} to the manager.',
        'I don’t think it’s a good idea, but I wish you {7}.',
        'I {8} the cheque arrives tomorrow. I need the money.',
        'Why does Dan always wish he {9} taller? He’s perfectly tall.',
        'If only Peggy {10} sent off! We would have won the match.'
      ],
      gaps: [
        { ans: ['had'], opts: ['have', 'would have', 'had'] },
        { ans: ['would turn'], opts: ['to turn', 'are turning', 'would turn'] },
        { ans: ['had'], opts: ['had', 'have', 'would'] },
        { ans: ['could'], opts: ['would', 'can', 'could'] },
        { ans: ['could have'], opts: ['would have', 'could', 'could have'] },
        { ans: ['to speak'], opts: ['I speak', 'speaking', 'to speak', 'I spoke'] },
        { ans: ['luck'], opts: ['lucky', 'a luck', 'lucking', 'luck'] },
        { ans: ['hope'], opts: ['wish', 'hope', 'wished'] },
        { ans: ['were', 'was'], opts: ['is', 'were', 'will be'] },
        { ans: ['hadn\'t been'], opts: ['wasn\'t', 'wouldn\'t be', 'hadn\'t been'] }
      ]
    },
    {
      t: 'cloze', id: 'wishstory', title: 'Story: A Bad Monday', tag: 'G', mode: 'type',
      instr: 'Write the verb in brackets in the correct form. Think: is it a wish about now, a regret about the past, a complaint, or a real hope?',
      text: [
        'Monday morning was a disaster for Ola. Her alarm didn’t ring, and she missed the bus. “I wish I {1} a car,” she thought. “If only I {2} one last year when I had the money!”',
        'At the office a colleague was talking loudly on the phone again. “I wish he {3} shouting,” she muttered. “I wish I {4} work from home!” Her boss walked in. “I wish you {5} on time for once,” he said. Ola wished she {6} invisible.',
        'On the way home she phoned her sister. “I {7} tomorrow will be better. But honestly, I wish I {8} yes to this job two years ago.” Her sister smiled. “It’s about time you {9} for something new.” Ola agreed. “I’d rather you {10} me write my CV tonight than watch TV.”'
      ],
      gaps: [
        { ans: ['had'], hint: '(have)' },
        { ans: ['had bought', "'d bought"], hint: '(buy)' },
        { ans: ['would stop'], hint: '(stop)' },
        { ans: ['could'], hint: '(can)' },
        { ans: ['would arrive'], hint: '(arrive)' },
        { ans: ['were', 'was'], hint: '(be)' },
        { ans: ['hope'], hint: '(hope)' },
        { ans: ['hadn\'t said', 'had not said', "'d not said"], hint: '(not say)' },
        { ans: ['looked'], hint: '(look)' },
        { ans: ['helped'], hint: '(help)' }
      ]
    },
    {
      t: 'kwt', id: 'wishfix', title: 'Find the mistake and fix it', tag: 'G',
      instr: 'Each sentence has one mistake. Write only the correct word or words in the gap.',
      items: [
        { s: 'Pete wishes he would earn more.', key: 'FIX THE VERB', pre: 'Pete wishes he', post: 'more.', ans: ['earned', 'could earn'] },
        { s: 'I wish the cheque arrives tomorrow.', key: 'FIX THE FIRST VERB', pre: 'I', post: 'the cheque arrives tomorrow.', ans: ['hope'] },
        { s: 'If only I didn’t leave the map at home!', key: 'FIX THE VERB', pre: 'If only I', post: 'the map at home!', ans: ['hadn\'t left', 'had not left'] },
        { s: 'It’s high time to start looking for a new flat.', key: 'FIX THE VERB', pre: 'It’s high time we', post: 'looking for a new flat.', ans: ['started'] },
        { s: 'I’d rather not to go to the party.', key: 'FIX THE VERB', pre: 'I’d rather', post: 'to the party.', ans: ['not go'] },
        { s: 'He talks as if he knows everything, but he knows nothing.', key: 'FIX THE VERB', pre: 'He talks as if he', post: ', but he knows nothing.', ans: ['knew everything', 'knew it all'] }
      ]
    }
  ]
},

{
  id: 'mixed', short: 'Mixed', t: [93, 103],
  title: 'Mixed challenge: all five situations',
  goal: 'No more labels. Decide which structure the sentence needs.',
  blocks: [
    {
      t: 'mcq', id: 'mixmcq', title: 'Choose the correct answer', tag: 'U',
      instr: 'Choose the best option.',
      qs: [
        { q: 'Imagine ______ in the Stone Age. How would your day be different?', pos: 2,
          right: 'you lived', wrong: ['you live', 'you’re living', 'you’ve been living'],
          why: 'An imaginary situation: past simple after <i>imagine</i>.' },
        { q: 'What if your phone ______ working right now? Who would you call?', pos: 0,
          right: 'stopped', wrong: ['stops', 'has stopped', 'will stop'],
          why: 'The result clause has <i>would</i>, so the first verb is unreal: past simple.' },
        { q: 'Fleming might never have found penicillin if he ______ his lab tidier.', pos: 3,
          right: 'had kept', wrong: ['kept', 'would keep', 'has kept'],
          why: 'Unreal past: <i>if</i> + past perfect, <i>might have</i> + past participle.' },
        { q: 'It’s high time ______ some serious decisions about the project.', pos: 1,
          right: 'we made', wrong: ['for us make', 'making', 'to make'],
          why: '<i>High time</i> + subject + past simple. A full infinitive is not used after <i>high / about time</i>.' },
        { q: 'She behaves as though she ______ the only person in the room.', pos: 2,
          right: 'were', wrong: ['is', 'has been', 'would be'],
          why: 'Not true: past tense after <i>as though</i>. <i>Were</i> is the formal choice.' },
        { q: 'I’d rather you ______ my diary without asking.', pos: 0,
          right: 'didn’t read', wrong: ['don’t read', 'won’t read', 'not reading'],
          why: 'Another person, present preference: past simple.' },
        { q: 'My sister wishes she ______ a better memory. She forgets everything.', pos: 3,
          right: 'had', wrong: ['has', 'would have', 'having'],
          why: 'A wish about the present: past simple.' },
        { q: 'If only the guide ______ speak English! We can’t understand a word.', pos: 1,
          right: 'could', wrong: ['can', 'will', 'should'],
          why: '<i>If only</i> + <i>could</i> = a wish about ability.' }
      ]
    },
    {
      t: 'cloze', id: 'mixbank', title: 'Dialogue: at the office', tag: 'U', mode: 'bank',
      instr: 'Choose a word from the box for each gap. Each word is used once.',
      bank: ['could', 'had', 'if', 'rather', 'time', 'were', 'wondering', 'would'],
      text: [
        '<b>Anna:</b> Excuse me, Mr Kane, I was {1} whether you could look at my report.',
        '<b>Mr Kane:</b> Of course. It’s about {2} we reviewed these figures together, to be honest.',
        '<b>Anna:</b> I wish I {3} started earlier. The system keeps crashing, and I wish it {4} stop!',
        '<b>Mr Kane:</b> Honestly, {5} I were you, I’d send the report tonight and fix the charts tomorrow.',
        '<b>Anna:</b> I’d {6} stay late than miss the deadline, to be honest.',
        '<b>Mr Kane:</b> You work as if you {7} the only person in the team!',
        '<b>Anna:</b> I wish I {8} work from home on Fridays.'
      ],
      gaps: [
        { ans: ['wondering'] }, { ans: ['time'] }, { ans: ['had'] }, { ans: ['would'] },
        { ans: ['if'] }, { ans: ['rather'] }, { ans: ['were'] }, { ans: ['could'] }
      ]
    }
  ]
},

{
  id: 'speak', short: 'Speaking', t: [103, 113],
  title: 'Speaking: use the language',
  goal: 'Discuss with your partner and use at least four unreal structures. The language bank is there to help you.',
  blocks: [
    {
      t: 'chart', id: 'chart', title: 'Discussion task', tag: 'S',
      task: 'Here are some ideas for making working life better. Talk to each other about how each idea might change employees’ lives. Then decide which <b>two</b> would make the biggest difference.',
      center: 'How might each idea change the lives of employees?',
      centerSmall: '2 minutes + 1 minute to decide',
      opts: [
        { h: 'A four-day week', p: 'Three days off every week, same salary' },
        { h: 'Work from anywhere', p: 'No office, full remote contracts' },
        { h: 'Free courses', p: 'Paid time for learning new skills' },
        { h: 'Quiet rooms and nap pods', p: 'Short breaks during the day' },
        { h: 'Flexible hours', p: 'You choose when your day starts' }
      ],
      q2: '<b>Decision (1 min).</b> Which two ideas would make the biggest difference? Agree on a final answer together.',
      bank: [
        { g: 'Imagining', items: ['If companies introduced …, people would …', 'Suppose everyone worked from home …', 'What if there were no offices at all?'] },
        { g: 'Wishing and complaining', items: ['I wish employers would …', 'If only managers listened more …', 'It’s high time companies …'] },
        { g: 'Preferences', items: ['I’d rather work … than …', 'I’d sooner have … than …'] },
        { g: 'Comparing', items: ['Some bosses behave as if employees were …', 'It’s as though nobody had ever …'] },
        { g: 'Deciding', items: ['On balance, I’d go for … and …'] }
      ],
      check: [
        'I used at least four structures from this lesson.',
        'I used one wish or if only sentence.',
        'I used one as if / as though sentence.',
        'We reached a decision together.'
      ]
    },
    {
      t: 'speak', id: 'follow', title: 'Follow-up questions', tag: 'S',
      instr: 'Answer in turn for about a minute each. Try to use a structure from the lesson in every answer.',
      topics: ['Regrets', 'Dreams', 'Society'], timer: 60, whoLabels: ['Student A', 'Student B'],
      cards: [
        { topic: 'Regrets', q: 'What is one thing you wish you had done differently in the past five years?', tip: 'Try: <b>I wish I had… / If only I’d…</b>' },
        { topic: 'Regrets', q: 'Do you think people spend too much time wishing the past were different?', tip: 'Try: <b>It’s about time people stopped…</b>' },
        { topic: 'Dreams', q: 'If you could master any skill overnight, what would it be, and why?', tip: 'Try: <b>If I could…, I’d…</b>' },
        { topic: 'Dreams', q: 'Would you rather be famous or very rich? Why?', tip: 'Try: <b>I’d rather… than…</b>' },
        { topic: 'Society', q: 'What is the one thing you wish the government would change?', tip: 'Try: <b>I wish the government would…</b>' },
        { topic: 'Society', q: 'Some politicians speak as if they understood ordinary life. Do you agree?', tip: 'Try: <b>as if they were / hadn’t…</b>' }
      ]
    }
  ]
},

{
  id: 'write', short: 'Writing', t: [113, 120],
  title: 'Short writing and exit ticket',
  goal: 'Write a short text for a blog. The checklist ticks automatically when you use a structure from the lesson.',
  blocks: [
    {
      t: 'write', id: 'wr', title: 'Blog post: If I could change one thing…', tag: 'W',
      promptHtml:
        '<p style="margin:0 0 10px"><b>Task.</b> Write a short blog post (90–130 words) called <i>If I could change one thing about my life…</i></p>' +
        '<p style="margin:0">Use at least <b>four</b> different structures from this lesson. Watch the checklist on the right.</p>',
      ph: 'If I could change one thing about my life, I would…',
      min: 90, max: 130,
      checks: [
        { label: 'At least 90 words', min: 90 },
        { label: 'No more than 130 words', max: 130 },
        { label: 'wish or if only', re: '\\b(wish|if only)\\b' },
        { label: 'as if / as though', re: 'as (if|though)\\b' },
        { label: 'it’s (high / about) time', re: 'it[\'’]?s (high |about )?time' },
        { label: 'would rather / would sooner', re: '(would|[\'’]d) (rather|sooner)' },
        { label: 'imagine / suppose / what if', re: '\\b(imagine|suppose|supposing|what if)\\b' }
      ],
      exp: ['I wish', 'if only', 'as if', 'as though', 'it’s high time', 'I’d rather', 'what if', 'suppose', 'would have']
    },
    {
      t: 'reflect', id: 'exit', title: 'Exit ticket', tag: 'R',
      fields: [
        { id: 'a', label: 'The structure I will use again this week' },
        { id: 'b', label: 'One thing that is still confusing' },
        { id: 'c', label: 'A real wish or regret I can talk about in English' }
      ]
    }
  ]
}

    ]
  };

/* ============================================================ HOMEWORK */
  L.homework = {
    id: 'hw', short: 'Homework', t: [0, 0],
    title: 'Homework: four tasks',
    goal: 'Multiple choice, open cloze, a short article and your own sentences. Allow about 75 minutes in total.',
    blocks: [
      { t: 'html', cls: 'note', html: '<span class="hwtag">Task 1 of 4</span><br>Choose the best option for each sentence.' },
      {
        t: 'mcq', id: 'hwmcq', title: 'Multiple choice', tag: 'U',
        instr: 'Choose the correct answer.',
        qs: [
          { q: 'Supposing the lift ______ down between floors, how would we get out?', pos: 1,
            right: 'broke', wrong: ['breaks', 'has broken', 'is breaking'],
            why: 'The question has <i>would</i>, so the situation is unreal: past simple.' },
          { q: 'He’d rather his daughter ______ a doctor than a pilot.', pos: 3,
            right: 'became', wrong: ['becomes', 'will become', 'to become'],
            why: 'A preference about another person: past simple.' },
          { q: 'If the Romans ______ the number zero, would we have had computers earlier?', pos: 0,
            right: 'had invented', wrong: ['invented', 'would invent', 'have invented'],
            why: 'Unreal past: past perfect after <i>if</i>.' },
          { q: 'It’s about time the city council ______ the traffic problem.', pos: 2,
            right: 'solved', wrong: ['to solve', 'solves', 'will solve'],
            why: '<i>It’s about time</i> + subject + past simple.' },
          { q: 'I wish my boss ______ me work remotely. It would save me two hours a day.', pos: 1,
            right: 'would let', wrong: ['to let', 'letting', 'lets'],
            why: '<i>Wish</i> + <i>would</i> = we want someone else to change.' },
          { q: 'Tom spoke as if he ______ the answer, but he had no idea.', pos: 3,
            right: 'knew', wrong: ['knows', 'has known', 'would know'],
            why: 'A comparison that is not true: past tense after <i>as if</i>.' },
          { q: 'If only I ______ taking notes during the lecture. I can’t remember a thing!', pos: 0,
            right: 'had been', wrong: ['were', 'would be', 'was being'],
            why: 'A regret about the past: <i>had been taking</i>.' },
          { q: 'Would you rather I ______ the meeting to Friday?', pos: 2,
            right: 'moved', wrong: ['move', 'am moving', 'had moved'],
            why: 'Another person, present or future: past simple.' }
        ]
      },
      { t: 'html', cls: 'note', html: '<span class="hwtag">Task 2 of 4</span><br>Open cloze: write <b>one word</b> in each gap.' },
      {
        t: 'cloze', id: 'hwcloze', title: 'Open cloze: The Time Machine Problem', tag: 'U', mode: 'type',
        instr: 'Write one word in each gap.',
        text: [
          'Imagine {1} could travel back in time. Most people say they {2} visit the age of the dinosaurs, or perhaps ancient Rome. But scientists point out a problem. If you {3} back to the Roman Empire, even a tiny change could alter the future. {4} if you accidentally stepped on a butterfly? Everything that happened afterwards {5} be different.',
          'Some people wish time travel {6} possible, because they would like to put right their mistakes. “If only I {7} passed the exam!” they sigh. But perhaps it’s {8} time we accepted that the past is the past. I’d {9} look forward than back, and I think we all behave sometimes as {10} we could change what has already happened.'
        ],
        gaps: [
          { ans: ['you'] }, { ans: ['would'] }, { ans: ['went'] }, { ans: ['what'] }, { ans: ['would'] },
          { ans: ['were', 'was'] }, { ans: ['had'] }, { ans: ['high', 'about'] }, { ans: ['rather', 'sooner'] }, { ans: ['if', 'though'] }
        ]
      },
      { t: 'html', cls: 'note', html: '<span class="hwtag">Task 3 of 4</span><br>Writing: an article for an English-language magazine.' },
      {
        t: 'write', id: 'hwwrite', title: 'Article: If I could change one thing about modern life', tag: 'W',
        promptHtml:
          '<p style="margin:0 0 10px"><b>Task.</b> A magazine is running a series called <i>If I could change one thing about modern life…</i> Write an article (180–220 words) for it.</p>' +
          '<ul style="margin:0 0 10px"><li>say what you would change and why</li><li>imagine how life would be different</li><li>mention one regret or one thing you wish people did differently</li></ul>' +
          '<p style="margin:0">Use at least <b>five</b> different structures from the two lessons.</p>',
        ph: 'Title, introduction, two or three paragraphs, conclusion…',
        min: 180, max: 220,
        checks: [
          { label: 'At least 180 words', min: 180 },
          { label: 'No more than 220 words', max: 220 },
          { label: 'wish or if only', re: '\\b(wish|if only)\\b' },
          { label: 'as if / as though', re: 'as (if|though)\\b' },
          { label: 'it’s (high / about) time', re: 'it[\'’]?s (high |about )?time' },
          { label: 'would rather / would sooner', re: '(would|[\'’]d) (rather|sooner)' },
          { label: 'imagine / suppose / what if', re: '\\b(imagine|suppose|supposing|what if)\\b' },
          { label: 'a past-perfect regret (had + past participle)', re: '\\bhad (not |never )?(been|\\w+ed|\\w+en|done|made|said|gone|taken|known|seen|had|got|come|written|thought|told)\\b' }
        ],
        exp: ['I wish', 'if only', 'as if', 'as though', 'it’s high time', 'I’d rather', 'what if', 'suppose', 'would have', 'had been']
      },
      { t: 'html', cls: 'note', html: '<span class="hwtag">Task 4 of 4</span><br>Your own sentences: write one good sentence for each prompt.' },
      {
        t: 'reflect', id: 'hwown', title: 'Six sentences about you', tag: 'W',
        fields: [
          { id: 'a', label: '1. A wish about now: “I wish I…”' },
          { id: 'b', label: '2. A regret about the past: “If only I had…”' },
          { id: 'c', label: '3. A polite question you could ask at a hotel (use a past tense)' },
          { id: 'd', label: '4. “It’s high time…” about your city or country' },
          { id: 'e', label: '5. “I’d rather…” + another person’s name' },
          { id: 'f', label: '6. “…as if / as though…” about someone you know' }
        ]
      }
    ]
  };
})();
