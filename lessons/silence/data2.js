/* Silence Lab: lesson data, part 2 (steps 5-8 and homework) */
(function () {
  var L = window.LESSON;

  L.steps.push(
    /* ---------------------------------------------------------------- 5 */
    {
      id: 'talk', short: 'Talk', t: [60, 80],
      title: 'Part 2: Listening to a talk. “The Sound of Nothing”',
      goal: 'A short talk about silence seen from a different side. Listen twice: first for the main idea, then for the details.',
      blocks: [
        { t: 'photo', src: 'img/temple.jpg', alt: 'A monk in an orange robe sits with closed eyes in front of a temple at sunrise.', cap: 'What is the first thing that comes to mind when you see this picture? Is this the same kind of silence as in the story?' },
        { t: 'html', html: '<b>Before you listen.</b> Can silence be measured? Can it be good for the body? Predict two things the speaker might say. Then listen.' },
        {
          t: 'media', id: 'talk', kind: 'audio', title: 'Audio 1: the talk', tag: 'L',
          transcriptBtn: 'Show the script (after the tasks)',
          transcript:
            '<p>In 1951, the American composer John Cage walked into an anechoic chamber at Harvard University, a room built so that its walls swallow every echo. He expected to hear nothing at all. Instead, he heard two sounds: one high, one low. The engineer explained that the high sound was his nervous system, and the low one was his blood circulating. Cage drew a startling conclusion: true silence does not exist. A year later he wrote <em>4′33″</em>, a piece in which a pianist sits at the piano and plays nothing. What the audience hears instead is coughing, rain on the roof, their own breathing.</p>' +
            '<p>Cage was not the only one to discover that silence does things. In 2006, a team led by the Italian physician Luciano Bernardi at the University of Pavia measured the heart rate and blood pressure of volunteers as they listened to different kinds of music. The result surprised everyone. The two-minute pauses between pieces relaxed the body more deeply than the calming music itself, and more deeply than the state the volunteers had been in before the experiment began.</p>' +
            '<p>The Japanese have a word for this: <em>ma</em>, the interval. In Japanese art, the empty space in an ink painting, the pause on a Noh stage, the beat before a reply in conversation are not gaps in the work. They are the work. Take them away, and a melody turns into noise.</p>' +
            '<p>Science may be catching up with that idea. In a 2013 study, the German biologist Imke Kirste exposed mice to different sounds for two hours a day. The mice kept in silence were the only ones whose newly formed cells in the hippocampus, a region linked to memory, survived and developed into neurons. It is only one study, and it was on mice, so scientists urge caution. Still, it fits a wider picture: chronic noise, especially from traffic, has been linked by the World Health Organization to disturbed sleep and heart disease.</p>' +
            '<p>So how quiet can a place get? At Microsoft’s headquarters in Redmond, Washington, there is a chamber measured at minus 20.35 decibels, which earned it the Guinness World Record as the quietest place on Earth. Visitors don’t find it peaceful. In that silence they hear their own heartbeat, their lungs, even the blood moving through their bodies. Few can bear to stay for long.</p>' +
            '<p>Perhaps that is the real lesson. Silence is not simply what remains when the sound stops. It is something we have to make room for, on purpose, before the world makes it impossible.</p>'
        },
        {
          t: 'mcq', id: 'vgist', title: 'First listening: the main idea', tag: 'L',
          instr: 'Choose the best answer. Do not worry about details yet.',
          qs: [
            { q: 'What is the main idea of the talk?', pos: 2,
              right: 'Silence has surprising effects, and it is never completely empty.',
              wrong: ['Modern cities are becoming impossible to live in.', 'Music is more effective than silence at reducing stress.', 'Scientists have proved that silence improves human memory.'],
              why: 'Cage hears his own body, pauses calm the heart, and silence may even affect the brain. The talk ends by saying silence must be made room for.' },
            { q: 'What point does the speaker make about <em>ma</em>?', pos: 0,
              right: 'Gaps and pauses give shape to a work instead of interrupting it.',
              wrong: ['Japanese artists try to avoid silence in their work.', 'Empty space is a sign that a work is unfinished.', 'Pauses matter only in music.'],
              why: '“They are not gaps in the work. They are the work.”' }
          ]
        },
        {
          t: 'cloze', id: 'vnotes', title: 'Second listening: note completion', tag: 'L', mode: 'type',
          instr: 'Complete the notes with a word, a number or a short phrase (no more than three words).',
          lines: [
            'Cage heard two sounds in a chamber at {1} University.',
            'In <em>4′33″</em> the pianist plays {2}.',
            'Bernardi’s team measured heart rate and {3}.',
            'In Japanese art, the word <em>ma</em> means the {4}.',
            'In the mouse study, the animals spent {5} hours a day in each sound condition.',
            'The Microsoft chamber was measured at minus {6} decibels.'
          ],
          gaps: [
            { ans: ['Harvard'] },
            { ans: ['nothing'] },
            { ans: ['blood pressure'] },
            { ans: ['interval', 'the interval'] },
            { ans: ['two', '2'] },
            { ans: ['20.35', '-20.35', 'minus 20.35'] }
          ]
        },
        {
          t: 'tfng', id: 'vtfng', title: 'True, False or Not Given?', tag: 'L',
          instr: 'Decide whether each statement agrees with the talk (True), contradicts it (False), or the talk does not say (Not given).',
          items: [
            { s: 'The pauses in Bernardi’s experiment produced more relaxation than the calming music did.', a: 'T', why: 'The speaker says the two-minute pauses relaxed the body more deeply than the calming music itself.' },
            { s: 'Cage wrote 4′33″ in the same year that he visited the chamber.', a: 'F', why: '“A year later he wrote 4′33″”: he visited in 1951.' },
            { s: 'All of the volunteers in Bernardi’s experiment were trained musicians.', a: 'NG', why: 'The talk does not say who the volunteers were.' },
            { s: 'Kirste’s study proves that silence creates new brain cells in humans.', a: 'F', why: 'The study was on mice, it is only one study, and scientists “urge caution”.' },
            { s: 'The World Health Organization has linked long-term noise, especially from traffic, to disturbed sleep.', a: 'T', why: 'Stated directly near the end of the fourth paragraph.' },
            { s: 'Microsoft built the chamber in order to test its devices.', a: 'NG', why: 'The talk gives the record but never explains why the chamber was built.' }
          ]
        },
        {
          t: 'html', cls: 'note',
          html: '<b>Discuss (4 min).</b> Which fact surprised you most: Cage’s two sounds, the power of a two-minute pause, or the idea of <em>ma</em>? Would you try a two-minute pause between tasks at work or study? <b>Try:</b> <em>What struck me was… · It makes sense that… · I’m not convinced that…</em>'
        }
      ]
    },

    /* ---------------------------------------------------------------- 6 */
    {
      id: 'audio', short: 'Listening', t: [80, 97],
      title: 'Listening: a conversation with a monk from Tibet',
      goal: 'A journalist is a sceptic; Lama Tenzin is patient. Listen twice, then decide who convinced whom.',
      blocks: [
        { t: 'photo', src: 'img/wheels.jpg', alt: 'A monk in a red robe points at rows of metal prayer wheels beside a stupa.', cap: 'The conversation you will hear is with a monk from Tibet. What would you like to ask him about silence?' },
        { t: 'html', html: '<b>Before you listen.</b> The journalist says: “Silence is a luxury.” What would a monk say back? Predict one argument.' },
        {
          t: 'media', id: 'dialogue', kind: 'audio', title: 'Audio 2: the conversation', tag: 'L',
          transcriptBtn: 'Show the script (after the tasks)',
          transcript:
            '<p><span class="sp">HANNAH</span>Lama Tenzin, thank you for joining me. I should be honest: I come to this conversation as a sceptic. Everyone tells me silence is the answer to everything. Isn’t it a bit of a luxury? Most of us can’t exactly retire to a mountain.</p>' +
            '<p><span class="sp">TENZIN</span>Then we agree on one point. Silence is not a mountain. People imagine it is a place. I would say it is a skill, and like any skill it grows with small, regular practice, not with a dramatic escape.</p>' +
            '<p><span class="sp">HANNAH</span>But you’ve lived in a monastery for thirty years. Surely that helps.</p>' +
            '<p><span class="sp">TENZIN</span>It helps, but not in the way you would think. In my first month, I could not bear it. I counted the cracks in the ceiling. I invented arguments with people who were not even there. The silence outside was perfect, and the noise inside was deafening.</p>' +
            '<p><span class="sp">HANNAH</span>So silence doesn’t actually mean the absence of noise?</p>' +
            '<p><span class="sp">TENZIN</span>Precisely. We confuse silence with the absence of sound. A monastery is full of sound: bells, wind, the kitchen. What changes is that we stop fighting it. Silence, I would say, is the absence of struggle.</p>' +
            '<p><span class="sp">HANNAH</span>That sounds rather convenient. Isn’t it just a clever way of saying “ignore everything”?</p>' +
            '<p><span class="sp">TENZIN</span>No, the opposite. When you stop reacting, you hear more, not less. Ignoring is also a kind of noise. It takes effort. Listening takes none, once you have learned how.</p>' +
            '<p><span class="sp">HANNAH</span>Let’s be practical, then. I live in a flat above a bus route. I have two children and a phone that never stops buzzing. Where do I start?</p>' +
            '<p><span class="sp">TENZIN</span>Three things, and none of them needs a mountain. First, the first ten minutes after you wake: no screen. Let the day arrive before you let the world in. Second, before you answer a difficult message, take three slow breaths. Just three. You will be surprised how many replies never get sent. Third, once a week, eat one meal with nothing in your hands but a spoon.</p>' +
            '<p><span class="sp">HANNAH</span>Ten minutes, three breaths, one meal. That’s almost suspiciously modest.</p>' +
            '<p><span class="sp">TENZIN</span>Modest is how things last. People who begin with an hour a day usually stop within a fortnight. People who begin with ten minutes are still there a year later.</p>' +
            '<p><span class="sp">HANNAH</span>And what is it actually doing? Researchers say meditation lowers stress and improves sleep. Do you feel that?</p>' +
            '<p><span class="sp">TENZIN</span>I cannot speak for the laboratory. I can tell you that my body is calmer, I fall asleep quickly, and I am much harder to provoke. Although my younger monks would tell you I am still easily provoked by cold tea.</p>' +
            '<p><span class="sp">HANNAH</span>Last question, and it’s a tricky one. Isn’t there a danger that all this inwardness cuts us off from other people?</p>' +
            '<p><span class="sp">TENZIN</span>Only if it is done badly. Silence makes me a better listener. When you have learned to be quiet inside, you no longer wait for your turn to talk. You actually hear what the other person is saying, and sometimes what they are not saying.</p>' +
            '<p><span class="sp">HANNAH</span>Well, I’m still a sceptic. But I may try the three breaths. Lama Tenzin, thank you.</p>' +
            '<p><span class="sp">TENZIN</span>Three breaths. Start today.</p>'
        },
        {
          t: 'mcq', id: 'amcq', title: 'Multiple choice', tag: 'L',
          instr: 'For questions 1–6, choose the answer (A, B, C or D) which fits best according to what you hear.',
          qs: [
            { q: 'What is Tenzin’s view of silence?', pos: 2,
              right: 'It is a skill that grows through small, regular practice.',
              wrong: ['It is a state that can only be found in remote places.', 'It is a natural talent that few people possess.', 'It is a reward for many years of study.'],
              why: '“I would say it is a skill… not a dramatic escape.”' },
            { q: 'What does Tenzin say about his first month in the monastery?', pos: 0,
              right: 'His own thoughts disturbed him more than any outside noise.',
              wrong: ['The sounds from the kitchen made it hard to rest.', 'He found the daily rules difficult to follow.', 'He enjoyed the quiet from the very beginning.'],
              why: '“The silence outside was perfect, and the noise inside was deafening.”' },
            { q: 'What does Tenzin mean by “the absence of struggle”?', pos: 3,
              right: 'People stop resisting the sounds around them.',
              wrong: ['People stop trying to learn new skills.', 'All noise has been removed from their surroundings.', 'People avoid those who disturb them.'],
              why: '“What changes is that we stop fighting it.”' },
            { q: 'How does Tenzin respond when Hannah says his idea sounds like ignoring everything?', pos: 1,
              right: 'He says that ignoring takes effort, whereas listening does not.',
              wrong: ['He admits that this is partly true.', 'He says it depends on the person’s age.', 'He agrees but says it is still useful.'],
              why: '“Ignoring is also a kind of noise. It takes effort. Listening takes none.”' },
            { q: 'What does Tenzin say about people who begin with an hour a day?', pos: 3,
              right: 'Most of them give up within a couple of weeks.',
              wrong: ['They usually see results much faster.', 'They need a teacher to guide them.', 'They tend to keep going for a whole year.'],
              why: '“…usually stop within a fortnight.”' },
            { q: 'How has silence changed the way Tenzin relates to other people?', pos: 2,
              right: 'He pays closer attention to what they say.',
              wrong: ['He is less interested in conversation.', 'He avoids disagreements more easily.', 'He has learned when it is best to speak.'],
              why: '“You actually hear what the other person is saying, and sometimes what they are not saying.”' }
          ]
        },
        {
          t: 'cloze', id: 'asent', title: 'Sentence completion', tag: 'L', mode: 'type',
          instr: 'Complete the sentences with a word or short phrase (no more than three words).',
          lines: [
            'In his first month Tenzin counted the {1} in the ceiling.',
            'He says that silence is not the absence of sound but the absence of {2}.',
            'His first piece of advice is to avoid {3} for ten minutes after waking up.',
            'Before replying to a difficult message, you should take {4}.',
            'Tenzin jokes that he can still be easily provoked by {5}.'
          ],
          gaps: [
            { ans: ['cracks'] },
            { ans: ['struggle'] },
            { ans: ['screens', 'a screen', 'screen', 'any screen', 'your phone'] },
            { ans: ['three slow breaths', 'three breaths', '3 slow breaths', '3 breaths'] },
            { ans: ['cold tea'] }
          ]
        },
        {
          t: 'match', id: 'amatch', title: 'Language from the recording', tag: 'V',
          instr: 'Match each phrase from the conversation with its meaning. You can read the script after the tasks if you need to check.',
          pairs: [
            { l: 'I come to this conversation as a sceptic', r: 'I begin with a doubtful attitude' },
            { l: 'retire to a mountain', r: 'withdraw to a remote place' },
            { l: 'a clever way of saying…', r: 'a sophisticated excuse for…' },
            { l: 'almost suspiciously modest', r: 'so small that it is hard to believe it will work' },
            { l: 'easily provoked', r: 'quick to lose one’s temper' },
            { l: 'wait for your turn to talk', r: 'think mainly about what you will say next' }
          ],
          order: [3, 5, 0, 4, 1, 2]
        },
        {
          t: 'html', cls: 'note',
          html: '<b>Who convinced whom? (3 min).</b> Is Hannah still a sceptic at the end? Which of Tenzin’s three suggestions would be easiest for you, and which hardest? <b>Try:</b> <em>It would be a stretch for me to… · That’s a fair point, but…</em>'
        }
      ]
    },

    /* ---------------------------------------------------------------- 7 */
    {
      id: 'speak', short: 'Speaking', t: [97, 110],
      title: 'Speaking: discussion task and follow-up questions',
      goal: 'Practise the interactive part of the exam: discuss, weigh up the options and reach a decision together.',
      blocks: [
        {
          t: 'chart', id: 'chart', title: 'Discussion task', tag: 'S',
          task: 'Here are some ways people try to bring more silence into modern life. Talk to each other about how helpful each of these might be. Then decide which <b>two</b> would make the biggest difference.',
          center: 'How might each of these help people cope with the noise of modern life?',
          centerSmall: '2 minutes + 1 minute to decide',
          opts: [
            { h: 'Meditation retreats', p: 'A week away from phones and conversation' },
            { h: 'Quiet carriages and noise-free offices', p: 'Silent spaces in everyday places' },
            { h: 'Digital detox', p: 'Switching off notifications for a set time' },
            { h: 'Silent classrooms', p: 'A few minutes of quiet in every school day' },
            { h: 'Walks without headphones', p: 'Listening to the place you are in' }
          ],
          q2: '<b>Decision (1 min).</b> Which two would make the biggest difference to society as a whole? Agree on a final answer together.',
          bank: [
            { g: 'Weighing options', items: ['I’d argue that … is the most practical because …', 'On the one hand …, but on the other hand …', 'That would only work if …', 'It’s a question of … rather than …'] },
            { g: 'Speculating', items: ['It could well be that …', 'I’d imagine that …', 'That might help people to …'] },
            { g: 'Partial agreement', items: ['I see your point, but …', 'To a certain extent, yes, although …', 'That’s true up to a point.'] },
            { g: 'Interacting', items: ['What’s your take on …?', 'Would you go along with that?', 'Shall we move on to …?'] },
            { g: 'Deciding', items: ['So, shall we settle on …?', 'On balance, I think … and … would have the greatest impact.'] }
          ],
          check: [
            'I spoke for my share of the time without long pauses.',
            'I used at least three phrases from the language bank.',
            'I invited my partner to speak and responded to their ideas.',
            'We reached a decision together.'
          ]
        },
        {
          t: 'speak', id: 'follow', title: 'Follow-up questions', tag: 'S',
          instr: 'Answer in turn for about a minute each. Your partner may add a comment or disagree politely.',
          topics: ['Work & study', 'Society', 'Mind'], timer: 60, whoLabels: ['Examiner (A)', 'Examiner (B)'],
          cards: [
            { topic: 'Work & study', q: 'Do you think modern workplaces should provide quiet rooms? Why, or why not?', tip: 'Try: <b>It would certainly be a step in the right direction.</b>' },
            { topic: 'Mind', q: 'Why might some people find it so hard to be alone with their thoughts?', tip: 'Try: <b>I suspect it has a lot to do with…</b>' },
            { topic: 'Society', q: 'Is silence more important for children or for adults?', tip: 'Try: <b>If anything, I’d say…</b>' },
            { topic: 'Society', q: 'To what extent are individuals responsible for the noise they create?', tip: 'Try: <b>To a large extent… but the authorities also…</b>' },
            { topic: 'Work & study', q: 'Can technology help us to find quiet, or does it always add to the noise?', tip: 'Try: <b>It cuts both ways.</b>' },
            { topic: 'Mind', q: 'How might attitudes towards silence differ from one culture to another?', tip: 'Try: <b>Generally speaking… although I can’t speak for every culture.</b>' }
          ]
        }
      ]
    },

    /* ---------------------------------------------------------------- 8 */
    {
      id: 'write', short: 'Writing', t: [110, 120],
      title: 'Writing plan and exit ticket',
      goal: 'Plan the essay and write the opening paragraph now. The full essay is homework.',
      blocks: [
        {
          t: 'write', id: 'wr', title: 'Essay: plan and opening paragraph', tag: 'W',
          promptHtml:
            '<p style="margin:0 0 10px"><b>Task.</b> Your class has attended a panel discussion on whether schools should introduce a short period of silence every day. You have made the notes below.</p>' +
            '<p style="margin:0 0 10px"><b>Write an essay for your tutor discussing two of the points. You should explain which idea is more convincing, giving reasons in support of your answer.</b></p>' +
            '<ul style="margin:0 0 10px"><li>concentration in lessons</li><li>stress levels among students</li><li>(your own idea)</li></ul>' +
            '<p style="margin:0">Write <b>220–260 words</b> in total. Now: plan, then write the opening paragraph (60–80 words).</p>',
          plan: [
            { id: 'p1', label: 'Point 1 (which two will you discuss, and why?)', ph: 'Concentration in lessons: …' },
            { id: 'p2', label: 'Point 2', ph: 'Stress levels: …' },
            { id: 'p3', label: 'Your opinion: which is more convincing?', ph: 'I believe that … because …' }
          ],
          ph: 'Opening paragraph: introduce the issue and say which two points you will discuss.',
          min: 60, max: 80,
          checks: [
            { label: 'At least 60 words', min: 60 },
            { label: 'No more than 80 words', max: 80 },
            { label: 'Topic is clear (silence and schools)', re: 'silen[a-z]*[^.]*school|school[^.]*silen' },
            { label: 'Contrast linker (although, while, whereas, yet…)', re: '\\b(although|whereas|while|however|nevertheless|yet|despite)\\b' },
            { label: 'States what the essay will discuss', re: '(will|shall|aims? to|intends? to)\\s+(discuss|examine|consider|explore|focus)|this essay' }
          ],
          exp: ['it is widely believed that', 'a case can be made for', 'arguably', 'by contrast', 'to a certain extent', 'on balance', 'undeniable', 'whereas']
        },
        {
          t: 'reflect', id: 'exit', title: 'Exit ticket', tag: 'R',
          fields: [
            { id: 'a', label: 'One word or phrase from today that I will use again' },
            { id: 'b', label: 'One thing I found difficult' },
            { id: 'c', label: 'One silence habit I will try this week' }
          ]
        }
      ]
    }
  );

  /* ---------------------------------------------------------------- homework */
  L.homework = {
    id: 'hw', short: 'Homework', t: [0, 0],
    title: 'Homework: four tasks',
    goal: 'Reading, grammar, writing and a short experiment. Allow about 90 minutes in total.',
    blocks: [
      { t: 'html', cls: 'note', html: '<span class="hwtag">Task 1 of 4</span><br>Reading: choose the best answer for each question. Then do the open cloze, the essay and the silence diary.' },
      {
        t: 'story', id: 'hwtext', title: 'Can You Hear Yourself Think?', by: 'Magazine feature',
        paras: [
          'When the open-plan office first became fashionable in the 1990s, its champions made a bold promise: remove the walls, and ideas would flow more freely between colleagues. Three decades later, the evidence suggests that what flows most freely is noise.',
          'Studies by acoustic psychologists have repeatedly shown that the human brain is poor at ignoring speech. Unlike the steady hum of an air-conditioning unit, which we soon cease to notice, a half-heard phone call demands attention, because our brains are wired to follow the thread of a conversation. The result is what researchers call the “irrelevant speech effect”: even when we do not consciously listen, our ability to carry out tasks that depend on memory, such as writing or planning, deteriorates.',
          'Companies have responded in predictable ways. Some have introduced “quiet zones” and phone booths; others have simply handed employees noise-cancelling headphones. Yet the latter solution, critics argue, treats the symptom rather than the disease. Employees who spend the day wearing headphones are, after all, communicating one thing very clearly: that the office does not work as a place for thinking.',
          'Not everyone is convinced that silence is the answer. Some managers maintain that a certain amount of background chatter is the sound of a healthy organisation, and that younger employees in particular thrive on it. Dr Helen Marsh, an environmental psychologist, thinks the debate is badly framed. “The question is not whether noise is good or bad,” she says. “It is whether people have a choice. A company that provides both a lively space and a silent one is treating its staff as adults.”',
          'One architecture firm in Rotterdam has taken that idea further. Its new headquarters has no assigned desks at all. Staff arrive each morning and choose from a range of areas, from a bustling café-style hall to a windowless “library” in which even whispering is discouraged. After a year, the firm reported that the library was the most requested space, although, rather surprisingly, it was used mainly for ten- or fifteen-minute sessions between meetings.',
          'Perhaps that is the real lesson. Silence at work may not be a place to retreat to for the whole day but a resource to be rationed and protected, like a good coffee machine: something nobody notices until it breaks.'
        ]
      },
      {
        t: 'mcq', id: 'hwmcq', title: 'Multiple choice', tag: 'R',
        instr: 'For questions 1–6, choose the answer (A, B, C or D) which fits best according to the text.',
        qs: [
          { q: 'What does the writer imply about the open-plan office in the first paragraph?', pos: 2,
            right: 'It has failed to deliver what its supporters promised.',
            wrong: ['It was only a short-lived fashion of the 1990s.', 'It has improved communication between colleagues.', 'It was designed mainly to cut costs.'],
            why: 'The promise was that ideas would flow; what flows most freely now is noise.' },
          { q: 'What point is made about background speech?', pos: 0,
            right: 'The brain finds it harder to ignore than steady, constant noise.',
            wrong: ['It affects only people who choose to listen.', 'It is more tiring than the sound of machinery.', 'It matters only for tasks involving numbers.'],
            why: 'The hum of air conditioning fades from notice; a half-heard phone call “demands attention”.' },
          { q: 'What is the writer’s view of noise-cancelling headphones?', pos: 3,
            right: 'They avoid the real problem instead of solving it.',
            wrong: ['They are the most practical solution so far.', 'They are mainly popular with younger employees.', 'They help colleagues to communicate more clearly.'],
            why: 'The solution “treats the symptom rather than the disease”.' },
          { q: 'What is Dr Marsh’s opinion?', pos: 1,
            right: 'The key issue is whether employees can choose their environment.',
            wrong: ['Background chatter does more harm than good.', 'Younger employees work best in silence.', 'Managers are wrong to value a lively atmosphere.'],
            why: '“It is whether people have a choice.”' },
          { q: 'What was surprising about the Rotterdam firm’s experience?', pos: 2,
            right: 'The quiet area was the most popular, but people used it only briefly.',
            wrong: ['Nobody wanted to work in the café-style hall.', 'Staff objected to having no assigned desks.', 'Whispering was banned in the library.'],
            why: 'The library was the most requested space, “used mainly for ten- or fifteen-minute sessions”.' },
          { q: 'What does the phrase “a resource to be rationed and protected” suggest about silence?', pos: 3,
            right: 'It is valuable partly because there is a limited supply of it.',
            wrong: ['It should be available only to senior staff.', 'Offices should be silent for most of the day.', 'People soon grow tired of it.'],
            why: 'Like a good coffee machine, nobody notices its value until it is gone.' }
        ]
      },
      { t: 'html', cls: 'note', html: '<span class="hwtag">Task 2 of 4</span><br>Open cloze: write <b>one word</b> in each gap.' },
      {
        t: 'cloze', id: 'hwcloze', title: 'Open cloze: Quiet hour', tag: 'U', mode: 'type',
        instr: 'Think of the word which best fits each gap. Use only one word in each gap.',
        text: [
          'Many supermarkets now run a weekly “quiet hour”, {1} which the lights are dimmed, the music is switched off and the checkout beeps are turned down. The idea began as a way of helping shoppers on the autism spectrum, {2} often find bright lights and sudden noises overwhelming, but it has proved popular with a much wider group.',
          'One manager told us that customers {3} had never thought of themselves as sensitive to noise were now coming specially. “It is surprising {4} little it takes,” she said. “We have not changed what we sell, only the way {5} sounds.” Some shops have gone {6} step further and introduced a completely silent hour. Not everyone is delighted, {7}: a few regular shoppers complain that the empty aisles feel strange. Even so, most shops say they will continue, regardless {8} the extra cost.'
        ],
        gaps: [
          { ans: ['in', 'during'] },
          { ans: ['who'] },
          { ans: ['who', 'that'] },
          { ans: ['how'] },
          { ans: ['it'] },
          { ans: ['a', 'one'] },
          { ans: ['though', 'however'] },
          { ans: ['of'] }
        ]
      },
      { t: 'html', cls: 'note', html: '<span class="hwtag">Task 3 of 4</span><br>Writing: finish the essay you planned in class.' },
      {
        t: 'write', id: 'hwessay', title: 'Essay: silence in schools', tag: 'W',
        promptHtml:
          '<p style="margin:0 0 10px">Your class has attended a panel discussion on whether schools should introduce a short period of silence every day. Write an essay discussing <b>two</b> of the points below, explaining which idea is more convincing and giving reasons.</p>' +
          '<ul style="margin:0 0 10px"><li>concentration in lessons</li><li>stress levels among students</li><li>(your own idea)</li></ul><p style="margin:0">Write <b>220–260 words</b>. Keep your plan from the lesson open.</p>',
        ph: 'Introduction · two body paragraphs · conclusion with your opinion.', min: 220, max: 260,
        checks: [
          { label: 'At least 220 words', min: 220 },
          { label: 'No more than 260 words', max: 260 },
          { label: 'Contrast (however, whereas, although, by contrast…)', re: '\\b(however|whereas|although|by contrast|nevertheless|on the other hand)\\b' },
          { label: 'Addition or consequence (moreover, as a result, consequently…)', re: '\\b(moreover|furthermore|as a result|consequently|in addition|therefore)\\b' },
          { label: 'Clear conclusion (in conclusion, on balance, all things considered…)', re: '(in conclusion|on balance|all things considered|to sum up|overall)' },
          { label: 'Your opinion (I believe, in my view, I am convinced…)', re: '(i believe|in my view|in my opinion|i am convinced|i would argue)' }
        ],
        exp: ['it is widely believed', 'a case can be made', 'arguably', 'by contrast', 'to a certain extent', 'on balance', 'whereas', 'undeniable', 'cultivate', 'tranquillity', 'restlessness']
      },
      { t: 'html', cls: 'note', html: '<span class="hwtag">Task 4 of 4</span><br>Experiment: sit for <b>ten minutes</b> in silence (no phone, no music), then write your diary entry.' },
      {
        t: 'write', id: 'hwdiary', title: 'Silence diary', tag: 'W',
        promptHtml: '<p style="margin:0">After your ten minutes, write <b>five or six sentences</b> about what you noticed (sounds, thoughts, your body). Use <b>at least three</b> words from the flashcards, such as <em>restlessness, drift, brace, unforced, attune, tranquillity, insistent, relentless</em>.</p>',
        ph: 'For the first two minutes I…', min: 50, max: 120,
        checks: [
          { label: 'At least 50 words', min: 50 },
          { label: 'No more than 120 words', max: 120 },
          { label: 'Mentions a sound', re: 'sound|noise|hum|buzz|ticking|traffic|voice' },
          { label: 'Mentions a thought or feeling', re: 'thought|felt|feel|mind|worr|calm|restless' }
        ],
        exp: ['restlessness', 'drift', 'brace', 'unforced', 'attune', 'tranquillity', 'insistent', 'relentless', 'cultivate', 'solitude', 'austere']
      }
    ]
  };
})();
