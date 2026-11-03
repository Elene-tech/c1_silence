/* Silence Lab: Practice Lab (extra exam-style practice).
   All sentences and texts here are new: nothing is repeated from the flashcards or the lesson tasks. */
window.LESSON.practice = [

  /* -------------------------------------------------------------- P1 */
  {
    id: 'p1', short: 'Use of English 1', n: 1,
    title: 'Use of English, Part 1: multiple-choice cloze',
    goal: 'Two short texts, eight gaps each. Choose the word or phrase that fits best. Look at the words around each gap: many of them test a fixed phrase or a phrasal verb.',
    blocks: [
      {
        t: 'cloze', id: 'p1a', title: 'Text 1: The quiet carriage', tag: 'U', mode: 'select',
        instr: 'For questions 1–8, choose the correct answer for each gap.',
        text: [
          'Ten years ago, the “quiet carriage” on British trains was {1} as a curiosity. Today it is usually the first to {2} up, and passengers who once {3} at the rules now enforce them with a stern look. Rail companies say that complaints about noise have {4} sharply, so several have introduced silent zones in stations as well.',
          'The trend is part of a wider {5} against constant notifications and the wish to {6} out the flow of information. “I spend all day staring at screens,” one commuter told me. “On the train I just want to switch {7}.” Whether the habit will last, however, remains to be {8}.'
        ],
        gaps: [
          { ans: ['regarded'], opts: ['believed', 'regarded', 'considered', 'judged'] },
          { ans: ['fill'], opts: ['pack', 'fall', 'load', 'fill'] },
          { ans: ['scoffed'], opts: ['scorned', 'mocked', 'scoffed', 'despised'] },
          { ans: ['risen'], opts: ['raised', 'lifted', 'ascended', 'risen'] },
          { ans: ['backlash'], opts: ['backlash', 'rebound', 'reflex', 'setback'] },
          { ans: ['tune'], opts: ['tune', 'turn', 'tone', 'tap'] },
          { ans: ['off'], opts: ['away', 'off', 'out', 'down'] },
          { ans: ['seen'], opts: ['said', 'known', 'seen', 'shown'] }
        ]
      },
      {
        t: 'cloze', id: 'p1b', title: 'Text 2: A sound that makes people angry', tag: 'U', mode: 'select',
        instr: 'For questions 1–8, choose the correct answer for each gap.',
        text: [
          'Some people {1} certain everyday sounds, such as chewing, sniffing or a pen being clicked, unbearable. Scientists call the condition misophonia, and those who {2} from it describe a sudden surge of rage that is {3} of proportion to the noise itself.',
          'Research is still in its early days, but brain scans suggest that the reaction has {4} to do with hearing as such. It seems to be triggered {5} the brain’s alarm system. Sufferers often {6} to extreme lengths to avoid the sounds, wearing headphones at meals or insisting {7} eating alone. Experts {8} out that sympathy, not irritation, is the right response.'
        ],
        gaps: [
          { ans: ['find'], opts: ['find', 'take', 'hold', 'make'] },
          { ans: ['suffer'], opts: ['endure', 'suffer', 'tolerate', 'undergo'] },
          { ans: ['out'], opts: ['off', 'over', 'away', 'out'] },
          { ans: ['little'], opts: ['few', 'small', 'little', 'lack'] },
          { ans: ['by'], opts: ['by', 'from', 'with', 'on'] },
          { ans: ['go'], opts: ['run', 'take', 'go', 'come'] },
          { ans: ['on'], opts: ['for', 'on', 'at', 'in'] },
          { ans: ['point'], opts: ['pick', 'bring', 'set', 'point'] }
        ]
      }
    ]
  },

  /* -------------------------------------------------------------- P2 */
  {
    id: 'p2', short: 'Use of English 2', n: 2,
    title: 'Use of English, Part 2: open cloze',
    goal: 'Two texts, eight gaps each. Write ONE word in each gap. Think about grammar words: articles, prepositions, auxiliaries, pronouns and linkers.',
    blocks: [
      {
        t: 'cloze', id: 'p2a', title: 'Text 1: A noisy planet', tag: 'U', mode: 'type',
        instr: 'Think of the word which best fits each gap. Use only one word in each gap.',
        text: [
          'It is easy to forget {1} noisy the modern world has become. A century ago, the loudest sound most people heard in a day was probably a church bell or a passing cart. Today, {2} we live in a city or in the countryside, we are rarely out of earshot of an engine.',
          'Few of us would {3} aware of this, {4} it not for the occasional power cut, when a strange stillness falls over the neighbourhood. Only then {5} we realise how much we have grown used to. Some architects now argue that quiet should be treated {6} an essential part of public health, rather {7} a luxury for those who can afford a house in the hills. If they are right, the cities of the future will be designed {8} the ear as much as for the eye.'
        ],
        gaps: [
          { ans: ['how'] },
          { ans: ['whether'] },
          { ans: ['be'] },
          { ans: ['were'] },
          { ans: ['do'] },
          { ans: ['as'] },
          { ans: ['than'] },
          { ans: ['for'] }
        ]
      },
      {
        t: 'cloze', id: 'p2b', title: 'Text 2: Learning to listen', tag: 'U', mode: 'type',
        instr: 'Think of the word which best fits each gap. Use only one word in each gap.',
        text: [
          'Listening is a skill {1} is rarely taught, yet it is the one we use most. Most conversations are far {2} balanced than we imagine: the average speaker {3} up talking for about two-thirds of the time, often without realising it.',
          'Good listeners tend {4} resist the urge to fill every pause, {5} the result that others feel genuinely heard. There is, {6} course, a limit: a silence that lasts too long can feel like a rebuke. Even so, many professionals, from nurses to negotiators, are now trained to leave a gap of a few seconds before replying, {7} doing so makes people say more than they had planned. It {8} no coincidence that the best interviewers are often the quietest.'
        ],
        gaps: [
          { ans: ['that', 'which'] },
          { ans: ['less'] },
          { ans: ['ends'] },
          { ans: ['to'] },
          { ans: ['with'] },
          { ans: ['of'] },
          { ans: ['since', 'because', 'as'] },
          { ans: ['is'] }
        ]
      }
    ]
  },

  /* -------------------------------------------------------------- P3 */
  {
    id: 'p3', short: 'Use of English 3', n: 3,
    title: 'Use of English, Part 3: word formation',
    goal: 'Two texts, eight gaps each. Use the word in capitals at the end of each gap to form a word that fits. Decide first: noun, adjective, adverb or verb? Then check for a negative prefix or a plural.',
    blocks: [
      {
        t: 'cloze', id: 'p3a', title: 'Text 1: A noisy city', tag: 'U', mode: 'type',
        instr: 'Use the word in capitals at the end of each gap to form a word that fits. Write one word only.',
        text: [
          'Visitors to the city are often struck by its sheer {1}. Ambulance sirens, {2} building work and the roar of buses seem to follow you from morning to night, yet residents rarely complain. Psychologists explain this {3} as a form of {4}: over time the brain learns to filter out sounds that carry no {5}.',
          'But the filtering is never {6} successful, and studies show that long {7} to noise, even when we have ceased to notice it, still raises blood pressure. That is a {8} reason to protect the few quiet corners that remain.'
        ],
        gaps: [
          { ans: ['loudness'], hint: 'LOUD' },
          { ans: ['endless'], hint: 'END' },
          { ans: ['tolerance'], hint: 'TOLERATE' },
          { ans: ['adaptation', 'adaption'], hint: 'ADAPT' },
          { ans: ['significance'], hint: 'SIGNIFY' },
          { ans: ['completely'], hint: 'COMPLETE' },
          { ans: ['exposure'], hint: 'EXPOSE' },
          { ans: ['persuasive'], hint: 'PERSUADE' }
        ]
      },
      {
        t: 'cloze', id: 'p3b', title: 'Text 2: The library', tag: 'U', mode: 'type',
        instr: 'Use the word in capitals at the end of each gap to form a word that fits. Write one word only.',
        text: [
          'Libraries were not always {1} places. Medieval scholars habitually read aloud, so a monastery library must have been a surprisingly {2} room. Silent reading became normal only gradually. The spread of printing, which made books {3} for ordinary families, encouraged readers to withdraw into private {4}.',
          'By the nineteenth century, {5} had become part of library etiquette, and notices reminded visitors, {6}, to keep their voices down. Today the rules are being {7} relaxed, as librarians accept that learning is often a {8} activity.'
        ],
        gaps: [
          { ans: ['peaceful'], hint: 'PEACE' },
          { ans: ['noisy'], hint: 'NOISE' },
          { ans: ['affordable'], hint: 'AFFORD' },
          { ans: ['reflection'], hint: 'REFLECT' },
          { ans: ['silence'], hint: 'SILENT' },
          { ans: ['firmly'], hint: 'FIRM' },
          { ans: ['gradually'], hint: 'GRADUAL' },
          { ans: ['social', 'societal'], hint: 'SOCIETY' }
        ]
      }
    ]
  },

  /* -------------------------------------------------------------- P4 */
  {
    id: 'p4', short: 'Use of English 4', n: 4,
    title: 'Use of English, Part 4: key word transformations',
    goal: 'Eight more transformations. Use the word in capitals without changing it. Write between two and five words, including the word given.',
    blocks: [
      {
        t: 'kwt', id: 'p4kwt', title: 'Key word transformation', tag: 'U',
        instr: 'Complete the second sentence so that it has a similar meaning to the first. Use the word in capitals without changing it. Write between <b>two and five</b> words including the word given.',
        items: [
          { s: 'She only noticed the fridge’s hum when the power cut began.', key: 'UNTIL', pre: 'It', post: 'the power cut began that she noticed the fridge’s hum.', ans: ['was not until', 'wasn’t until'] },
          { s: 'I am sure that the monks were not disturbed by the bells.', key: 'CANNOT', pre: 'The monks', post: 'disturbed by the bells.', ans: ['cannot have been'] },
          { s: 'Eating alone no longer feels strange to him.', key: 'ACCUSTOMED', pre: 'He', post: 'alone.', ans: ['is accustomed to eating', 'has become accustomed to eating', 'has grown accustomed to eating', 'has got accustomed to eating', 'became accustomed to eating', 'grew accustomed to eating'] },
          { s: 'The noise was so loud that nobody could think.', key: 'SUCH', pre: 'It', post: 'that nobody could think.', ans: ['was such a loud noise', 'was such a loud sound'] },
          { s: 'People say that the old library is haunted.', key: 'SAID', pre: 'The old library', post: 'haunted.', ans: ['is said to be'] },
          { s: 'If you hadn’t phoned, I wouldn’t have woken up.', key: 'BUT', pre: 'I would not have woken up', post: 'your phone call.', ans: ['but for'] },
          { s: 'The talk was much shorter than we had expected.', key: 'NEARLY', pre: 'The talk was not', post: 'as we had expected.', ans: ['nearly as long'] },
          { s: 'Tenzin is the best listener I have ever met.', key: 'BETTER', pre: 'I have never', post: 'listener than Tenzin.', ans: ['met a better'] }
        ]
      }
    ]
  },

  /* -------------------------------------------------------------- P5 */
  {
    id: 'p5', short: 'Reading 7 and 8', n: 5,
    title: 'Reading: gapped text and multiple matching',
    goal: 'Part 7: read the article, then decide which paragraph fits each gap. Part 8: match the statements to the four speakers. Both texts were written for this lesson.',
    blocks: [
      {
        t: 'html', cls: 'note',
        html: '<span class="hwtag">Part 7</span><br><b>Gapped text.</b> Six paragraphs have been removed from the article. Choose from paragraphs <b>A–G</b> the one which fits each gap (1–6). There is <b>one extra</b> paragraph which you do not need to use.'
      },
      {
        t: 'html', cls: 'note',
        html:
          '<p style="margin:0 0 10px"><b>A</b> &nbsp;The desert was different again. In the Namib, she recorded for an entire night and found that the quietest hour was just before dawn, when the sand had stopped cooling and the insects had gone to sleep. “Everything was waiting,” she says. For the first time she stopped thinking of silence as the absence of noise.</p>' +
          '<p style="margin:0 0 10px"><b>B</b> &nbsp;The recordings are used in ways she never expected. Hospitals play them to patients before surgery, and one school in Leeds uses a ten-minute recording of a snow-covered field to calm children after break. “I thought I was collecting evidence,” she says. “It turns out I was collecting medicine.”</p>' +
          '<p style="margin:0 0 10px"><b>C</b> &nbsp;Her search began in a disused railway tunnel in Wales. The tunnel was dark and dry, and the walls were thick, but within minutes she could hear a distant motorway and, closer still, the electrical hum of her own equipment. “Silence,” she says, “turned out to be a matter of degree.”</p>' +
          '<p style="margin:0 0 10px"><b>D</b> &nbsp;Her fifth attempt, in a sealed laboratory at a Dutch university, ended in much the same way: the quieter the room became, the more she heard of herself.</p>' +
          '<p style="margin:0 0 10px"><b>E</b> &nbsp;What she has learned to value instead is what she calls “room tone”, the faint sound that every place makes when nobody is doing anything in it. Sound engineers record it to hide edits in films, and it is different for every location. Hers now fills a library of more than four thousand recordings.</p>' +
          '<p style="margin:0 0 10px"><b>F</b> &nbsp;The Arctic offered more. On a frozen lake in northern Finland, with the temperature at minus twenty-five, even the wind seemed to hold its breath. Yet the cold brought its own noises: the ice cracked and groaned beneath her boots, and her breath froze on the microphone cover with a faint, crackling hiss.</p>' +
          '<p style="margin:0"><b>G</b> &nbsp;She has no plans to stop. Next spring she hopes to reach a cave system in Slovenia that is said to be among the quietest in Europe. She will, she admits, probably find that it is not quiet at all. “That is the point,” she says. “The search is the listening.”</p>'
      },
      {
        t: 'cloze', id: 'p7', title: 'Part 7: The woman who collects silence', tag: 'R', mode: 'select',
        instr: 'Choose the paragraph (A–G) that fits each gap.',
        text: [
          'Nora Whitlock has spent twenty years carrying microphones to places where almost nothing happens. A sound recordist by training, she began by capturing dawn choruses and mountain streams for television documentaries. Then, one winter, a producer asked her for a recording of “complete silence”. She laughed, and then realised she had no idea where to find it.',
          'Gap 1: {1}',
          'Gap 2: {2}',
          'Whitlock insists that none of these trips was wasted. “Each place taught me to listen in a new way,” she says. “Even the failures.”',
          'Gap 3: {3}',
          'Gap 4: {4}',
          'Gap 5: {5}',
          'Gap 6: {6}'
        ],
        numbered: false,
        gaps: [
          { ans: ['C'], opts: ['A', 'B', 'C', 'D', 'E', 'F', 'G'] },
          { ans: ['F'], opts: ['A', 'B', 'C', 'D', 'E', 'F', 'G'] },
          { ans: ['A'], opts: ['A', 'B', 'C', 'D', 'E', 'F', 'G'] },
          { ans: ['E'], opts: ['A', 'B', 'C', 'D', 'E', 'F', 'G'] },
          { ans: ['B'], opts: ['A', 'B', 'C', 'D', 'E', 'F', 'G'] },
          { ans: ['G'], opts: ['A', 'B', 'C', 'D', 'E', 'F', 'G'] }
        ]
      },
      {
        t: 'html', cls: 'note',
        html: '<span class="hwtag">Part 8</span><br><b>Multiple matching.</b> You are going to read four short texts in which people talk about quiet. For questions 1–10, choose from the people <b>A–D</b>. Each person may be chosen more than once.'
      },
      {
        t: 'html', cls: 'note',
        html:
          '<p style="margin:0 0 12px"><b>A &nbsp;Ruth, a night nurse.</b> On my ward, the worst enemy of recovery is not pain but noise. Monitors beep, trolleys rattle, and somebody always seems to be laughing at the nurses’ station. We introduced a two-hour “protected sleep” period in the afternoon, and the change surprised even the doctors: patients needed fewer painkillers, and several went home a day earlier. What I did not expect was how much it changed us. When we stopped talking in the corridors, we began to notice small things: a patient who had stopped eating, or a breathing pattern that was slightly off. Some colleagues were reluctant at first, since it felt unfriendly not to chat, but within a month nobody wanted to go back.</p>' +
          '<p style="margin:0 0 12px"><b>B &nbsp;Sam, an architect.</b> Clients rarely ask me for a quiet building. They ask for light, for space, for “a feeling”. It is only after they move in that they notice the sound. Hard floors, glass walls and open ceilings look wonderful in photographs, but they turn a room into a drum. I now insist on a quiet corner in every project, even when the budget is tight and the client thinks I am being precious. It need not be large: a window seat with a thick curtain will do. The surprising thing is that these corners are never empty. People who say they love noise and bustle are often the first to be found hiding in them.</p>' +
          '<p style="margin:0 0 12px"><b>C &nbsp;Dana, a teacher.</b> Every lesson at my school begins with a minute of silence. I introduced it as an experiment, expecting the pupils to giggle. They did, for about three days. Now they ask for it if I forget. I don’t ask them to meditate or to close their eyes; they simply sit and let the room settle. The head teacher was doubtful at first and warned me that parents might think I was wasting time. In fact, one parent wrote to say that her son had begun doing the same thing at home before his homework. I cannot prove that results have improved, but the arguments in the corridor certainly have decreased.</p>' +
          '<p style="margin:0"><b>D &nbsp;Leo, a drummer.</b> People assume that a drummer would hate quiet. The opposite is true. In my first band I played as loudly as possible, because I thought that was what the music needed. It was a producer who taught me otherwise. He made me record a whole song using only brushes, and I discovered that the gaps between the beats were what gave the rhythm its life. Now I rehearse in a room I have lined with foam, and I often start practising by sitting for five minutes without touching an instrument. My bandmates found this absurd at first, but they now do it too, and they say we have never played better together.</p>'
      },
      {
        t: 'cloze', id: 'p8', title: 'Part 8: Which person…?', tag: 'R', mode: 'select',
        instr: 'Choose A, B, C or D.',
        lines: [
          'says that people tend to appreciate the importance of sound only after the event?  {1}',
          'was helped to value quiet by someone with more experience?  {2}',
          'reports measurable benefits for the health of the people involved?  {3}',
          'found that people’s initial amusement at a new routine disappeared quickly?  {4}',
          'noticed that quiet helped colleagues to pay closer attention to the people they look after?  {5}',
          'believes that the quality of the work depends on what happens in the pauses?  {6}',
          'insists on providing quiet space even when money is short?  {7}',
          'met with scepticism from someone in authority?  {8}',
          'says that people who claim to enjoy noise sometimes look for quiet?  {9}',
          'reports that a habit has been adopted outside the place where it began?  {10}'
        ],
        gaps: [
          { ans: ['B'], opts: ['A', 'B', 'C', 'D'] },
          { ans: ['D'], opts: ['A', 'B', 'C', 'D'] },
          { ans: ['A'], opts: ['A', 'B', 'C', 'D'] },
          { ans: ['C'], opts: ['A', 'B', 'C', 'D'] },
          { ans: ['A'], opts: ['A', 'B', 'C', 'D'] },
          { ans: ['D'], opts: ['A', 'B', 'C', 'D'] },
          { ans: ['B'], opts: ['A', 'B', 'C', 'D'] },
          { ans: ['C'], opts: ['A', 'B', 'C', 'D'] },
          { ans: ['B'], opts: ['A', 'B', 'C', 'D'] },
          { ans: ['C'], opts: ['A', 'B', 'C', 'D'] }
        ]
      }
    ]
  },

  /* -------------------------------------------------------------- P6 */
  {
    id: 'p6', short: 'Vocabulary', n: 6,
    title: 'Vocabulary practice',
    goal: 'Five short tasks: idioms, sound words, the lesson words in new sentences, phrasal verbs, and collocations. Every sentence is new.',
    blocks: [
      {
        t: 'match', id: 'p6idioms', title: 'Idioms about talking and keeping quiet', tag: 'V',
        instr: 'Tap an idiom on the left, then its meaning on the right.',
        pairs: [
          { l: 'the calm before the storm', r: 'a quiet period just before something unpleasant happens' },
          { l: 'make a racket', r: 'to make a loud, annoying noise' },
          { l: 'you could hear a pin drop', r: 'the room was so quiet that the smallest sound would be noticed' },
          { l: 'hold your tongue', r: 'to stop yourself from saying what you want to say' },
          { l: 'speak volumes', r: 'to say a great deal without using many words' },
          { l: 'mum’s the word', r: 'an instruction to keep a secret' },
          { l: 'tongue-tied', r: 'unable to speak because of nerves or embarrassment' },
          { l: 'fall on deaf ears', r: 'to be ignored by the people who hear it' }
        ],
        order: [3, 5, 0, 7, 1, 6, 2, 4]
      },
      {
        t: 'mcq', id: 'p6sound', title: 'Sound words', tag: 'V',
        instr: 'Choose the word (A, B, C or D) which fits the description best.',
        qs: [
          { q: 'Which word describes the dull, heavy sound of a book falling on a carpet?', pos: 2,
            right: 'thud', wrong: ['jingle', 'twang', 'hiss'],
            why: 'A <em>thud</em> is a low, heavy, dull sound. A jingle is light and metallic; a hiss is long and sharp.' },
          { q: 'Which word describes a low, continuous sound, like that of a fridge?', pos: 0,
            right: 'hum', wrong: ['clatter', 'thump', 'screech'],
            why: 'A <em>hum</em> is steady and low. A clatter is made of hard, separate noises.' },
          { q: 'Which verb means “to speak quietly and unclearly, often because you are annoyed”?', pos: 3,
            right: 'mutter', wrong: ['whisper', 'chant', 'stammer'],
            why: 'To <em>mutter</em> is to speak in a low voice that is hard to hear, usually in complaint. To stammer is to repeat sounds because of nerves.' },
          { q: 'Which word describes the harsh, high sound of tyres braking suddenly?', pos: 1,
            right: 'screech', wrong: ['rumble', 'murmur', 'thud'],
            why: 'A <em>screech</em> is high and unpleasant. A rumble is deep and a murmur is soft.' },
          { q: 'Which word describes the soft, dry sound of leaves or paper moving?', pos: 2,
            right: 'rustle', wrong: ['clank', 'roar', 'crash'],
            why: 'A <em>rustle</em> is light and dry. A clank is metal; a roar and a crash are loud.' },
          { q: 'Which noun describes a sudden silence in which everybody stops talking?', pos: 0,
            right: 'hush', wrong: ['bustle', 'chatter', 'hum'],
            why: 'A <em>hush</em> falls when people stop speaking. A bustle is busy activity; chatter is talk.' }
        ]
      },
      {
        t: 'cloze', id: 'p6words', title: 'Words from the lesson in new sentences', tag: 'V', mode: 'select',
        instr: 'Choose the word that fits each sentence. These words appeared in the lesson, but the sentences are new.',
        lines: [
          'The {1} ringing of the alarm finally forced him out of bed.',
          'After the accident she felt {2} to apologise, although she was not to blame.',
          'The retreat’s {3} rooms had bare walls and a single narrow bed.',
          'He had always {4} a sense of humour, even in the hardest times.',
          'As the speaker droned on, my thoughts began to {5} towards the weekend.',
          'She {6} herself for the cold as she opened the door.',
          'A feeling of {7} came over him as the exam results drew near.',
          'Many writers need {8} in order to concentrate.'
        ],
        gaps: [
          { ans: ['insistent'], opts: ['tranquil', 'insistent', 'austere', 'obliged'] },
          { ans: ['obliged'], opts: ['unforced', 'relentless', 'austere', 'obliged'] },
          { ans: ['austere'], opts: ['austere', 'tranquil', 'insistent', 'relentless'] },
          { ans: ['cultivated'], opts: ['arisen', 'attuned', 'cultivated', 'braced'] },
          { ans: ['drift'], opts: ['drift', 'tread', 'arise', 'brace'] },
          { ans: ['braced'], opts: ['attuned', 'arose', 'braced', 'cultivated'] },
          { ans: ['dread'], opts: ['solitude', 'dread', 'tranquillity', 'tread'] },
          { ans: ['solitude'], opts: ['dread', 'solitude', 'restlessness', 'tread'] }
        ]
      },
      {
        t: 'cloze', id: 'p6phr', title: 'Phrasal verbs and noise', tag: 'V', mode: 'select',
        instr: 'Choose the word that completes each phrasal verb.',
        lines: [
          'Could you turn the music {1} a little? I’m trying to concentrate.',
          'The sound of the waves {2} out the voices of the swimmers.',
          'I find it hard to {3} off after a day of meetings.',
          'She {4} out during the lecture and missed the key point.',
          'He tends to {5} up and say nothing when people ask him personal questions.',
          'At the back of the room, a small voice {6} up: “Can I ask something?”',
          'The villagers decided to {7} up the scandal rather than risk their reputation.',
          'The sound of the drums gradually {8} away until only the wind could be heard.'
        ],
        gaps: [
          { ans: ['down'], opts: ['off', 'on', 'down', 'away'] },
          { ans: ['drowned'], opts: ['washed', 'drowned', 'covered', 'sunk'] },
          { ans: ['switch'], opts: ['switch', 'wind', 'turn', 'cut'] },
          { ans: ['zoned'], opts: ['drifted', 'zoned', 'dropped', 'nodded'] },
          { ans: ['clam'], opts: ['dry', 'pipe', 'hush', 'clam'] },
          { ans: ['piped'], opts: ['went', 'rose', 'piped', 'broke'] },
          { ans: ['hush'], opts: ['clam', 'pipe', 'dry', 'hush'] },
          { ans: ['died'], opts: ['died', 'broke', 'ran', 'left'] }
        ]
      },
      {
        t: 'cloze', id: 'p6col', title: 'Collocations: the first letter helps you', tag: 'V', mode: 'type',
        instr: 'Write one word in each gap. The first letter is given.',
        lines: [
          'A {1} silence followed her announcement; nobody dared to speak.',
          'He spoke in a {2} voice so that nobody would overhear.',
          'They listened with {3} attention to every word.',
          'Thick carpet {4} the sound of footsteps in the corridor.',
          'We could hear the constant {5} of traffic on the motorway.',
          'A faint {6} of laughter came from the next room.',
          'The sudden {7} of the door made her jump.',
          'A {8} fell over the crowd as the speaker stood up.'
        ],
        gaps: [
          { ans: ['stunned', 'shocked'], hint: 's…' },
          { ans: ['hushed'], hint: 'h…' },
          { ans: ['rapt'], hint: 'r…' },
          { ans: ['muffled', 'muted', 'masked'], hint: 'm…' },
          { ans: ['roar', 'rumble', 'racket'], hint: 'r…' },
          { ans: ['murmur'], hint: 'm…' },
          { ans: ['slam', 'slamming'], hint: 's…' },
          { ans: ['hush'], hint: 'h…' }
        ]
      }
    ]
  },

  /* -------------------------------------------------------------- P7 */
  {
    id: 'p7', short: 'Listening', n: 7,
    title: 'Listening: third time, more detail',
    goal: 'Replay the audio from the lesson, or read the script after you have answered. These tasks check details you may have missed the first time.',
    blocks: [
      {
        t: 'html', cls: 'note',
        html: '<b>Audio 1 (the talk).</b> Play the talk again from the <b>Talk</b> step in the Lesson tab, then answer.'
      },
      {
        t: 'mcq', id: 'p7a', title: 'Audio 1: detail questions', tag: 'L',
        instr: 'Choose the best answer (A, B, C or D).',
        qs: [
          { q: 'According to the engineer, what was the low sound that Cage heard in the chamber?', pos: 3,
            right: 'The blood moving round his body.',
            wrong: ['The hum of the building’s electricity.', 'The echo of his own footsteps.', 'The sound of the air in the walls.'],
            why: 'The engineer explained that the high sound was his nervous system and the low one was his blood circulating.' },
          { q: 'What happened to the mice kept in silence in Kirste’s study?', pos: 1,
            right: 'Some newly formed brain cells survived and became neurons.',
            wrong: ['They learned to find their way through a maze faster.', 'Their heart rate dropped more than that of the other mice.', 'They slept longer than the mice kept with music.'],
            why: 'Only in the silent group did newly formed cells in the hippocampus survive and develop into neurons.' },
          { q: 'How do most visitors react to the very quiet Microsoft chamber?', pos: 0,
            right: 'They find it uncomfortable and cannot stay long.',
            wrong: ['They fall asleep within a few minutes.', 'They ask to return as often as possible.', 'They find that it improves their concentration.'],
            why: '“Visitors don’t find it peaceful… Few can bear to stay for long.”' },
          { q: 'How does the speaker describe the empty spaces in Japanese art?', pos: 2,
            right: 'As an essential part of the work.',
            wrong: ['As a sign that the artist ran out of ideas.', 'As a space reserved for the viewer to add something.', 'As a feature borrowed from European painting.'],
            why: '“They are not gaps in the work. They are the work.”' }
        ]
      },
      {
        t: 'html', cls: 'note',
        html: '<b>Audio 2 (the conversation).</b> Play it again from the <b>Listening</b> step. Decide whether each statement is true, false or not given.'
      },
      {
        t: 'tfng', id: 'p7b', title: 'Audio 2: True, False or Not given?', tag: 'L',
        instr: 'Decide whether each statement agrees with the conversation (True), contradicts it (False), or the conversation does not say (Not given).',
        items: [
          { s: 'Tenzin found his first month in the monastery easy.', a: 'F', why: 'He says he “could not bear it” and invented arguments with people who were not there.' },
          { s: 'Hannah lives close to a busy road.', a: 'T', why: 'She says she lives in a flat above a bus route.' },
          { s: 'Tenzin’s monastery is in Nepal.', a: 'NG', why: 'He says he has lived in a monastery for thirty years, but the country is never mentioned.' },
          { s: 'Tenzin recommends that beginners start with an hour of practice a day.', a: 'F', why: 'He says people who begin with an hour usually stop within a fortnight.' },
          { s: 'Tenzin admits that he is still easily annoyed by small things.', a: 'T', why: 'He jokes that his younger monks would say he is still easily provoked by cold tea.' },
          { s: 'Hannah has already tried meditation before the interview.', a: 'NG', why: 'She says she “may try the three breaths”, but never says whether she has meditated before.' }
        ]
      }
    ]
  },

  /* -------------------------------------------------------------- P8 */
  {
    id: 'p8', short: 'Grammar', n: 8,
    title: 'Grammar: inversion, wishes and conditionals',
    goal: 'Advanced structures that are often tested in Use of English and that make writing sound more formal.',
    blocks: [
      {
        t: 'cloze', id: 'p8g', title: 'Choose the correct form', tag: 'U', mode: 'select',
        instr: 'Choose the correct form for each gap.',
        lines: [
          'Not only {1} the silence, but she also began to enjoy it.',
          'Rarely {2} a place so quiet.',
          'Had we known about the noise, we {3} a different hotel.',
          'I wish the neighbours {4} playing music at night.',
          'It’s high time the council {5} something about the traffic.',
          'No sooner {6} sat down than the alarm rang.',
          'She’d rather he {7} the radio on while she works.',
          'Little {8} he know that the recording would change his life.'
        ],
        gaps: [
          { ans: ['did she accept'], opts: ['she accepted', 'did she accept', 'she did accept', 'accepted she'] },
          { ans: ['have I seen'], opts: ['I have seen', 'did I have seen', 'I seen', 'have I seen'] },
          { ans: ['would have booked'], opts: ['would book', 'will have booked', 'would have booked', 'had booked'] },
          { ans: ['would stop'], opts: ['would stop', 'will stop', 'stopped', 'had stopped'] },
          { ans: ['did'], opts: ['does', 'will do', 'would do', 'did'] },
          { ans: ['had she'], opts: ['she had', 'had she', 'did she', 'she has'] },
          { ans: ['didn’t put'], opts: ['doesn’t put', 'hadn’t put', 'won’t put', 'didn’t put'] },
          { ans: ['did'], opts: ['did', 'does', 'had', 'was'] }
        ]
      }
    ]
  }
];
