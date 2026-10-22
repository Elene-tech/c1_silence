/* Silence Lab: lesson data, part 1 (steps 1-4). Part 2 is in data2.js */
window.LESSON = {
  id: 'silence',
  title: 'Silence Lab',
  eyebrow: 'C1 Advanced · Lesson 01',
  sub: 'Two hours on silence: a short story, a talk about the sound of nothing, a conversation with a monk from Tibet, and a lot of speaking and writing.',
  media: {
    talk: { src: 'media/talk.mp3' },          // Audio 1, the talk
    dialogue: { src: 'media/dialogue.mp3' }  // Audio 2, the conversation
  },
  steps: [
    /* ---------------------------------------------------------------- 1 */
    {
      id: 'warm', short: 'Warm-up', t: [0, 8],
      title: 'Warm-up: how do you feel about silence?',
      goal: 'Get talking. Answer in full sentences and ask your partner a follow-up question each time.',
      blocks: [
        { t: 'photo', src: 'img/lake.jpg', alt: 'A man in a hooded jacket stands with his back to the camera, looking at a still lake and a pine forest.', cap: 'Look at the photo. What can he hear, and what can he not hear? What do you think he is thinking about?' },
        {
          t: 'speak', id: 'warmcards', title: 'Conversation cards', tag: 'S',
          instr: 'Take turns to draw a card. Speak for about 40 seconds, then your partner reacts and asks one follow-up question.',
          topics: ['Personal', 'Society', 'Mind'], timer: 40,
          cards: [
            { topic: 'Personal', q: 'When did you last spend a whole hour with no sound at all: no music, no podcast, no conversation? What was it like?', tip: 'Try: <b>It struck me that…</b> · <b>I found it surprisingly…</b>' },
            { topic: 'Personal', q: 'Is there a place where you go specifically to find quiet? Describe it and explain why it works for you.', tip: 'Try: <b>It’s the kind of place where…</b>' },
            { topic: 'Society', q: 'Silence is often called a luxury. Do you agree that only some people can afford it?', tip: 'Try: <b>To a certain extent…</b> · <b>It depends on whether…</b>' },
            { topic: 'Mind', q: 'Some people find silence uncomfortable, even frightening. Why do you think that is?', tip: 'Try: <b>I’d imagine it’s because…</b>' },
            { topic: 'Personal', q: 'Do you work, study or fall asleep with background sound? Does it genuinely help, or does it just fill a gap?', tip: 'Try: <b>Without it, I’d find it hard to…</b>' },
            { topic: 'Society', q: 'Is a quiet person more trustworthy than a talkative one? Why, or why not?', tip: 'Try: <b>There’s a tendency to assume…</b>' },
            { topic: 'Mind', q: 'Can you feel alone in a crowd? Can you feel noisy inside a silent room? What do these experiences have in common?', tip: 'Try: <b>It’s as if…</b> · <b>On the surface…, yet underneath…</b>' },
            { topic: 'Society', q: 'Should cities protect “quiet zones” in the same way they protect parks? Who should decide where they go?', tip: 'Try: <b>I’d argue that…</b> · <b>The authorities ought to…</b>' },
            { topic: 'Mind', q: 'Think about the most awkward silence you have experienced. What made it awkward, and how did it end?', tip: 'Try: <b>You could have cut the atmosphere with a knife.</b>' },
            { topic: 'Personal', q: 'Imagine you had to spend seven days without speaking. What would be the hardest part for you?', tip: 'Try: <b>I’d be dreading…</b> · <b>What would get to me most is…</b>' }
          ]
        }
      ]
    },

    /* ---------------------------------------------------------------- 2 */
    {
      id: 'vocab', short: 'Words', t: [8, 18],
      title: 'Vocabulary before reading',
      goal: 'Meet 16 useful words and phrases. Several appear in the story, and the rest come back later in the lesson.',
      blocks: [
        { t: 'photo', src: 'img/typewriter.jpg', alt: 'The word “silence” typed on a sheet of white paper in an old typewriter.', cap: 'One word on an empty page. Does the picture make silence feel peaceful, or a little uncomfortable? Why?' },
        {
          t: 'flash', id: 'flash1', title: 'Flashcards', tag: 'V',
          instr: 'Tap a card to see the meaning and an example. Say each example aloud, then make up a sentence of your own.',
          cards: [
            { term: 'enforced', pos: 'adjective', def: 'imposed by a rule or by an authority', ex: 'a week of enforced silence' },
            { term: 'dread', pos: 'noun', def: 'a strong fear about something that is going to happen', ex: 'She felt a sense of dread on the way to the dentist.' },
            { term: 'insistent', pos: 'adjective', def: 'repeated again and again, and impossible to ignore', ex: 'the insistent ringing of the phone' },
            { term: 'restlessness', pos: 'noun', def: 'an inability to keep still or to feel calm', ex: 'A strange restlessness kept him awake until dawn.' },
            { term: 'drift', pos: 'verb', def: 'to move slowly and without control; of attention, to wander', ex: 'Her attention began to drift during the lecture.' },
            { term: 'tread', pos: 'noun', def: 'the sound or manner of someone’s walking', ex: 'the heavy tread of the guards on the stairs' },
            { term: 'arise', pos: 'verb', def: 'to appear or begin to exist', ex: 'If any problems arise, call me at once.' },
            { term: 'brace (yourself)', pos: 'verb', def: 'to prepare yourself, physically or mentally, for something unpleasant', ex: 'He braced himself for the bad news.' },
            { term: 'unforced', pos: 'adjective', def: 'natural and relaxed, done without effort', ex: 'an unforced smile' },
            { term: 'obliged', pos: 'adjective', def: 'having no choice because of a duty or the circumstances', ex: 'She was obliged to stay behind and finish the report.' },
            { term: 'tranquillity', pos: 'noun', def: 'a state of calm and peace', ex: 'the tranquillity of a mountain lake' },
            { term: 'cultivate', pos: 'verb', def: 'to develop a quality or a skill with care and effort', ex: 'He cultivated a habit of daily reflection.' },
            { term: 'austere', pos: 'adjective', def: 'plain and simple, without comfort or decoration', ex: 'the austere life of a monastery' },
            { term: 'attune (to)', pos: 'verb', def: 'to make someone or something able to understand or respond to', ex: 'Years at sea had attuned him to the weather.' },
            { term: 'solitude', pos: 'noun', def: 'the state of being alone, especially by choice', ex: 'She sought solitude in the mountains.' },
            { term: 'relentless', pos: 'adjective', def: 'continuing without stopping or becoming weaker', ex: 'the relentless noise of the traffic' }
          ]
        },
        {
          t: 'match', id: 'match1', title: 'Match the word to its meaning', tag: 'V',
          instr: 'Tap a word on the left, then its meaning on the right. A wrong pair flashes red.',
          pairs: [
            { l: 'dread', r: 'a strong fear about something that is going to happen' },
            { l: 'insistent', r: 'repeated again and again, and impossible to ignore' },
            { l: 'drift', r: 'to move slowly without control; of thoughts, to wander' },
            { l: 'tread', r: 'the sound or manner of someone’s walking' },
            { l: 'brace', r: 'to prepare yourself for something unpleasant' },
            { l: 'unforced', r: 'natural and relaxed, done without effort' },
            { l: 'austere', r: 'plain and simple, without comfort or decoration' },
            { l: 'cultivate', r: 'to develop a quality or a skill with care and effort' }
          ],
          order: [4, 0, 6, 2, 7, 3, 5, 1]
        }
      ]
    },

    /* ---------------------------------------------------------------- 3 */
    {
      id: 'read', short: 'Reading', t: [18, 45],
      title: 'Part 1: Reading. “Dead Air”',
      goal: 'A short story set in a monastery in the Himalayas. Read once for the story, then answer the questions.',
      blocks: [
        { t: 'photo', src: 'img/monks.jpg', alt: 'A row of monks in orange robes sit with their palms pressed together in prayer.', cap: 'Before you read: what would it be like to sit in silence with these people for a whole week?' },
        { t: 'html', html: '<b>Before you read.</b> Iris is a podcast editor. Her job is to remove pauses from recordings. What problems might a week of silence cause her? Discuss for one minute, then read.' },
        {
          t: 'story', id: 'story', title: 'Dead Air', by: 'A short story',
          paras: [
            'Iris Calloway had spent eleven years removing silence from other people’s voices. As a podcast editor, she hunted pauses the way other people hunt typos: a half-second here, a hesitant breath there, snip, snip, until every sentence ran into the next without a gap. So when the jeep dropped her at the gate of a Ladakhi monastery, nearly four thousand metres above sea level, with a week of enforced quiet ahead of her, she felt something close to professional dread.',
            'That first evening the silence pressed against her eardrums like deep water. She lay on a narrow bed in a whitewashed cell and heard, to her astonishment, her own pulse, a soft, insistent knocking inside her skull. Her mind, accustomed to a conveyor belt of notifications, began to riot: unanswered emails, an argument with her sister, a deadline she had abandoned in order to be here. She had come to escape her restlessness and had brought it with her, like unclaimed luggage.',
            'On the second morning, Venerable Pema, a small man with a face as creased as a walnut, gave his only instructions, and he gave them in a whisper. “Breathe in, and count one. Breathe out, count two. When you reach ten, begin again. And when you notice you are thinking of something else,” he tapped his temple, “do not scold the mind. It is a puppy, not a criminal. Simply bring it home.”',
            'Iris reached four. Then she was composing a reply to her editor. Then she was nowhere at all, and then, somehow, at seven. For three days she measured her progress not by how high she could count but by how quickly she noticed that she had drifted, which, she gradually understood, was the entire exercise. The aim was not an empty mind but a mind that knew where it was.',
            'In the afternoons the retreatants practised walking meditation, circling the courtyard at the pace of a funeral procession, silently labelling each movement: lifting, moving, placing. For an hour Iris found it maddening. Then, absurdly, it became restful. Pema called the technique “noting”: you name whatever arises, thought, itch, worry, wind, and then you let it go. Each label was a small hook on which a thought could be hung up and left behind.',
            'On the fourth day something shifted, as though someone had turned a dial. The silence stopped feeling like a vacuum and began to fill with detail. She could separate the flutter of prayer flags from the rasp of wind across stone. She could hear a ladle touch the rim of a pot in the kitchen across the yard, and tell the quick steps of the novices from the unhurried tread of the elders. Her ears, which had been trained professionally for over a decade, had never been so sharp, and she had been obliged to switch everything off in order to find out.',
            'Her body had changed as well. Her breathing, which she would once have called normal, had lengthened into slow, unforced waves. Her shoulders, which she had carried close to her ears for years, had dropped. Her jaw no longer ached by the afternoon. For the first time in months she woke before the morning bell and did not feel hunted by the day.',
            'On the sixth evening she broke the rules with a sheet of paper. <em>Why do I feel so different?</em> she wrote, and handed it to Pema. He read it, smiled, and answered in a whisper. “Noise is a kind of conversation. The body answers it, even when you do not. Take the conversation away, and at last the body can stop bracing itself.”',
            'She thought about that all night. The silence had never been empty; it had been full of things she had been too busy to hear, herself among them.',
            'On the seventh morning the monks bowed, and she bowed back. Two days later, in the arrivals hall of Delhi airport, the noise struck her like a wall: announcements, trolleys, ringtones, a hundred conversations competing at once. Her hand went to her phone out of old habit. Then it stopped. She closed her eyes and took three slow breaths, and only then did she switch the phone on.',
            'It was a small thing. But it was the first pause she had ever kept instead of cutting.'
          ]
        },
        {
          t: 'mcq', id: 'readmcq', title: 'Multiple choice', tag: 'R',
          instr: 'For questions 1–6, choose the answer (A, B, C or D) which fits best according to the story. The explanation appears after you choose.',
          qs: [
            { q: 'How does Iris feel as she arrives at the monastery?', pos: 1,
              right: 'Anxious, because silence runs against her professional instincts.',
              wrong: ['Relieved to be escaping from her workload.', 'Resentful that her employer sent her there.', 'Doubtful that the retreat will be properly organised.'],
              why: 'She has spent eleven years removing silence, so a week of it brings “professional dread”.' },
            { q: 'What does the writer suggest by saying she had brought her restlessness “like unclaimed luggage”?', pos: 0,
              right: 'She could not leave her worries behind, although she had hoped to.',
              wrong: ['She had forgotten some of her belongings on the way.', 'She felt that the journey had been badly planned.', 'She had packed far too much for such a short stay.'],
              why: 'She came to escape restlessness, but it travelled with her.' },
            { q: 'What does Pema mean by calling the mind “a puppy, not a criminal”?', pos: 3,
              right: 'Wandering thoughts should be redirected kindly, not punished.',
              wrong: ['Beginners need strict rules to control their thoughts.', 'Some people are naturally better at concentrating.', 'The mind behaves better when it is given harder tasks.'],
              why: 'He says “do not scold the mind… simply bring it home”.' },
            { q: 'What does Iris eventually understand about the breathing exercise?', pos: 2,
              right: 'Progress depends on how quickly she notices that her attention has wandered.',
              wrong: ['The aim is to count as high as possible without a break.', 'Counting is useful only during the first days of practice.', 'Her professional training makes concentration easier.'],
              why: 'She measures progress by “how quickly she noticed that she had drifted… the entire exercise”.' },
            { q: 'How does Pema explain the changes in Iris’s body?', pos: 1,
              right: 'Without constant noise to answer, the body no longer needs to stay tense.',
              wrong: ['The thin mountain air slows down breathing and heartbeat.', 'Regular meals and early nights have restored her energy.', 'Silence dulls the senses and so reduces stress.'],
              why: '“Take the conversation away, and at last the body can stop bracing itself.”' },
            { q: 'What does the final paragraph suggest about Iris?', pos: 3,
              right: 'She has learned to leave a gap between a stimulus and her reaction.',
              wrong: ['She intends to leave her job as soon as she can.', 'She finds the airport more stressful than she expected.', 'She regrets that the retreat was so short.'],
              why: 'She pauses for three breaths before switching on her phone: a pause she keeps instead of cutting.' }
          ]
        },
        {
          t: 'cloze', id: 'summary', title: 'Summary completion', tag: 'R', mode: 'type',
          instr: 'Complete the summary with words or short phrases (one to three words) taken from the story. You may need to change the form of a word. Check the spelling.',
          text: [
            'Iris, a podcast editor, spends her working life {1} silence from other people’s voices. During her first evening at the monastery, the quiet presses against her ears like {2}. Venerable Pema teaches her to count her breaths and, when she loses count, simply to {3}. She comes to see that what matters is how quickly she {4} that her mind has drifted. In walking meditation she practises {5}: naming whatever arises and letting it go. By the fourth day she can {6} the flutter of prayer flags from the sound of the wind, and her shoulders have {7}. At Delhi airport, before switching on her phone, she takes {8}.'
          ],
          gaps: [
            { ans: ['removing'] },
            { ans: ['deep water'] },
            { ans: ['bring it home'] },
            { ans: ['noticed', 'notices', 'notice'] },
            { ans: ['noting'] },
            { ans: ['separate'] },
            { ans: ['dropped'] },
            { ans: ['three slow breaths', 'three breaths', '3 slow breaths'] }
          ]
        },
        {
          t: 'html', cls: 'note',
          html: '<b>Talk about it (3 min).</b> Would the methods in the story work for you: counting breaths, walking slowly, “noting”? Which would you find hardest, and why? Use at least two words from the flashcards.'
        }
      ]
    },

    /* ---------------------------------------------------------------- 4 */
    {
      id: 'vocab2', short: 'Language', t: [45, 60],
      title: 'Vocabulary in action',
      goal: 'Word formation, key word transformations and collocations, the same formats you meet in the Use of English paper.',
      blocks: [
        {
          t: 'cloze', id: 'wf', title: 'Word formation', tag: 'U', mode: 'type',
          instr: 'Use the word in capitals at the end of each gap to form a word that fits. Write one word only.',
          text: [
            'For most of us, silence feels {1} at first. We are so accustomed to constant {2} that an empty, quiet room can seem faintly {3}. Yet research suggests that regular meditation brings a {4} improvement in concentration, and many people find they suffer fewer {5} nights. Of course, the {6} to sit alone with one’s own thoughts has to be built up gradually. Teachers agree that the key to {7} is not the length of each session but its {8}.'
          ],
          gaps: [
            { ans: ['uncomfortable'], hint: 'COMFORT' },
            { ans: ['stimulation'], hint: 'STIMULATE' },
            { ans: ['threatening'], hint: 'THREAT' },
            { ans: ['noticeable'], hint: 'NOTICE' },
            { ans: ['sleepless'], hint: 'SLEEP' },
            { ans: ['willingness'], hint: 'WILL' },
            { ans: ['success'], hint: 'SUCCEED' },
            { ans: ['regularity'], hint: 'REGULAR' }
          ]
        },
        {
          t: 'kwt', id: 'kwt', title: 'Key word transformation', tag: 'U',
          instr: 'Complete the second sentence so that it has a similar meaning to the first. Use the word in capitals without changing it. Write between <b>two and five</b> words including the word given.',
          items: [
            { s: 'Iris regrets not taking the retreat more seriously.', key: 'WISHES', pre: 'Iris', post: 'the retreat more seriously.', ans: ['wishes she had taken', 'wishes she\'d taken'] },
            { s: 'It is impossible to find real silence in a big city.', key: 'SUCH', pre: 'There', post: 'real silence in a big city.', ans: ['is no such thing as'] },
            { s: 'Although he spoke very quietly, everyone could hear Pema.', key: 'DESPITE', pre: 'Everyone could hear Pema,', post: 'very quietly.', ans: ['despite speaking', 'despite his speaking', 'despite him speaking'] },
            { s: 'Getting up at dawn no longer felt strange to Iris.', key: 'USED', pre: 'Iris', post: 'up at dawn.', ans: ['had got used to getting', 'had become used to getting', 'had grown used to getting', 'got used to getting', 'became used to getting', 'was used to getting'] },
            { s: 'Most people don’t realise how valuable silence is.', key: 'UNAWARE', pre: 'Most people', post: 'valuable silence is.', ans: ['are unaware of how'] },
            { s: 'Perhaps the noise from the street kept her awake.', key: 'MAY', pre: 'The noise from the street', post: 'her awake.', ans: ['may have kept'] }
          ]
        },
        {
          t: 'cloze', id: 'colloc', title: 'Collocations with silence', tag: 'V', mode: 'select',
          instr: 'Choose the word that forms the most natural combination with <em>silence</em>.',
          lines: [
            'The monks {1} strict silence from dusk until dawn.',
            'A passing motorbike {2} the silence of the courtyard.',
            'A sudden silence {3} over the audience.',
            'They sat together in {4} silence, each reading a book.',
            'There was a {5} silence when he finished speaking.',
            'She answered my question with a {6} silence.'
          ],
          gaps: [
            { ans: ['observe'], opts: ['hold', 'make', 'give', 'observe'] },
            { ans: ['broke'], opts: ['broke', 'opened', 'made', 'left'] },
            { ans: ['fell'], opts: ['stood', 'opened', 'fell', 'lifted'] },
            { ans: ['companionable'], opts: ['friendly', 'companionable', 'sociable', 'polite'] },
            { ans: ['deafening'], opts: ['loud', 'strong', 'deafening', 'noisy'] },
            { ans: ['stony'], opts: ['rocky', 'metal', 'hard', 'stony'] }
          ]
        },
        {
          t: 'html', cls: 'note',
          html: '<b>Use it (2 min).</b> Partner A: tell a short story that includes <em>an awkward silence</em> and two words from the flashcards. Partner B: ask two questions about it.'
        }
      ]
    }
  ]
};
