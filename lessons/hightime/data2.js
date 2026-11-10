/* High Time Lab: Practice Lab (extra exam-style practice) and homework. All texts are new. */
(function () {
  var L = window.LESSON;

  L.practice = [

    /* ------------------------------------------------------------ P1 */
    {
      id: 'p1', short: 'Use of English 1', n: 1,
      title: 'Use of English, Part 1: multiple-choice cloze',
      goal: 'Look at the words around each gap: many test a fixed phrase or a phrasal verb.',
      blocks: [
        {
          t: 'cloze', id: 'p1a', title: 'Last-chance tourism', tag: 'U', mode: 'select',
          instr: 'For questions 1–8, choose the correct answer for each gap.',
          text: [
            'A growing number of travellers are {1} their holidays around places that may soon disappear. This so-called “last-chance tourism” has {2} up in recent years, with visitors keen to see glaciers before they {3} away altogether. Critics point {4} that the flights needed to reach these places add to the very problem the tourists regret.',
            'Defenders are {5} the view that the experience can {6} home to people how much is at stake, {7} reading statistics never will. Whatever the {8}, one thing is clear: these places will not wait for us.'
          ],
          gaps: [
            { ans: ['planning'], opts: ['dreaming', 'taking', 'planning', 'wishing'] },
            { ans: ['sprung'], opts: ['sprung', 'grown', 'risen', 'built'] },
            { ans: ['melt'], opts: ['tear', 'sink', 'jump', 'melt'] },
            { ans: ['out'], opts: ['up', 'out', 'on', 'at'] },
            { ans: ['of'], opts: ['for', 'in', 'by', 'of'] },
            { ans: ['bring'], opts: ['bring', 'take', 'carry', 'hold'] },
            { ans: ['whereas'], opts: ['unless', 'whereas', 'provided', 'so that'] },
            { ans: ['case'], opts: ['matter', 'point', 'thing', 'case'] }
          ]
        }
      ]
    },

    /* ------------------------------------------------------------ P2 */
    {
      id: 'p2', short: 'Use of English 2', n: 2,
      title: 'Use of English, Part 2: open cloze',
      goal: 'Write ONE word in each gap. Most of these test unreal time and linking words.',
      blocks: [
        {
          t: 'cloze', id: 'p2a', title: 'A quiet street', tag: 'U', mode: 'type',
          instr: 'Think of the word which best fits each gap. Use only one word in each gap.',
          text: [
            'If I {1} choose where to live, I would pick a small town beside the sea. I often wish I {2} left the city years ago, when prices were lower. My sister, who moved last year, behaves {3} if she had never lived anywhere else.',
            'It is high {4} I made up my mind, because I would {5} not spend another winter in a flat with no garden. Had it not {6} for my fear of change, I {7} be sitting on a quiet beach now, {8} of reading about it.'
          ],
          gaps: [
            { ans: ['could'] },
            { ans: ['had'] },
            { ans: ['as'] },
            { ans: ['time'] },
            { ans: ['rather'] },
            { ans: ['been'] },
            { ans: ['would', 'could', 'might'] },
            { ans: ['instead'] }
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
          t: 'cloze', id: 'p3a', title: 'After the fire', tag: 'U', mode: 'type',
          instr: 'Use the word in capitals at the end of each gap to form a word that fits. Write one word only.',
          text: [
            'The {1} with which the fire spread surprised even experienced crews. Dry weather and strong winds made it almost {2} to control, and hundreds of residents were {3} to leave their homes. Local volunteers showed remarkable {4}, delivering food and blankets all night.',
            'A report published afterwards blamed years of {5} to clear dead wood, and experts say that {6} measures could have reduced the damage. The community now faces the {7} task of rebuilding, and many are determined to make the town more {8} to future disasters.'
          ],
          gaps: [
            { ans: ['rapidity'], hint: 'RAPID' },
            { ans: ['impossible'], hint: 'POSSIBLE' },
            { ans: ['forced'], hint: 'FORCE' },
            { ans: ['generosity'], hint: 'GENEROUS' },
            { ans: ['failure'], hint: 'FAIL' },
            { ans: ['preventive', 'preventative'], hint: 'PREVENT' },
            { ans: ['daunting'], hint: 'DAUNT' },
            { ans: ['resistant'], hint: 'RESIST' }
          ]
        }
      ]
    },

    /* ------------------------------------------------------------ P4 */
    {
      id: 'p4', short: 'Idioms', n: 4,
      title: 'Vocabulary: idioms about risk and change',
      goal: 'Eight idioms you can use in speaking and in writing. Match them, then use them in context.',
      blocks: [
        {
          t: 'match', id: 'p4idioms', title: 'Match the idiom to its meaning', tag: 'V',
          instr: 'Tap an idiom on the left, then its meaning on the right.',
          pairs: [
            { l: 'a wake-up call', r: 'an event that makes you realise there is a serious problem' },
            { l: 'the tip of the iceberg', r: 'a small visible part of a much larger problem' },
            { l: 'bury your head in the sand', r: 'to refuse to face an unpleasant fact' },
            { l: 'add fuel to the fire', r: 'to make a bad situation worse' },
            { l: 'play with fire', r: 'to take a dangerous risk' },
            { l: 'a drop in the ocean', r: 'a very small amount compared with what is needed' },
            { l: 'see the writing on the wall', r: 'to realise that something bad is going to happen' },
            { l: 'jump on the bandwagon', r: 'to join an activity because it has become popular' }
          ],
          order: [3, 5, 0, 7, 1, 6, 2, 4]
        },
        {
          t: 'cloze', id: 'p4sel', title: 'Idioms in context', tag: 'V', mode: 'select',
          instr: 'Choose the word that completes each idiom.',
          lines: [
            'We are told to save water, but my one short shower is just a {1} in the ocean.',
            'The small fire was only the {2} of the iceberg; the real damage was underground.',
            'After the flood, many residents saw the disaster as a {3} call.',
            'You cannot keep burying your head in the {4} and hoping that it will pass.',
            'Ignoring the safety rules is just {5} with fire.',
            'Blaming others will only add {6} to the fire.'
          ],
          gaps: [
            { ans: ['drop'], opts: ['drop', 'pinch', 'slice', 'spoon'] },
            { ans: ['tip'], opts: ['edge', 'top', 'tip', 'corner'] },
            { ans: ['wake-up'], opts: ['wake-up', 'warning', 'early', 'loud'] },
            { ans: ['sand'], opts: ['snow', 'sand', 'mud', 'water'] },
            { ans: ['playing'], opts: ['joking', 'fighting', 'testing', 'playing'] },
            { ans: ['fuel'], opts: ['oil', 'petrol', 'fuel', 'wood'] }
          ]
        }
      ]
    }
  ];

  /* ---------------------------------------------------------------- homework */
  L.homework = {
    id: 'hw', short: 'Homework', t: [0, 0],
    title: 'Homework: unreal time and an essay',
    goal: 'About 60 minutes in total: an open cloze, an essay and a photo story.',
    blocks: [
      { t: 'html', cls: 'note', html: '<span class="hwtag">Task 1 of 3</span><br>Open cloze: write <b>one word</b> in each gap.' },
      {
        t: 'cloze', id: 'hwcloze', title: 'Open cloze: the village that said yes', tag: 'U', mode: 'type',
        instr: 'Think of the word which best fits each gap. Use only one word in each gap.',
        text: [
          'If the villagers {1} paid attention to the warnings last spring, many of their homes {2} have been saved. Instead, most of them carried on as {3} nothing was wrong. It is high {4} that the council took the risk seriously.',
          'Several residents now say they {5} they had acted sooner, and a growing number would {6} the town built a proper flood wall than spend another winter hoping for the best. Had the work {7} started a year ago, the river would not be {8} near the main square now.'
        ],
        gaps: [
          { ans: ['had'] },
          { ans: ['would', 'could', 'might'] },
          { ans: ['if', 'though'] },
          { ans: ['time'] },
          { ans: ['wish'] },
          { ans: ['rather'] },
          { ans: ['been'] },
          { ans: ['so', 'this', 'that'] }
        ]
      },
      { t: 'html', cls: 'note', html: '<span class="hwtag">Task 2 of 3</span><br>Essay: <b>220–260 words</b>.' },
      {
        t: 'write', id: 'hwessay', title: 'Essay: who should act first?', tag: 'W',
        promptHtml:
          '<p style="margin:0 0 10px"><b>Task.</b> Your class has attended a panel discussion on what should be done about climate change. You have made the notes below.</p>' +
          '<p style="margin:0 0 10px"><b>Write an essay for your tutor discussing two of the points. You should explain which idea is more convincing, giving reasons in support of your answer.</b></p>' +
          '<ul style="margin:0 0 10px"><li>action by governments</li><li>changes to personal lifestyles</li><li>(your own idea)</li></ul>' +
          '<p style="margin:0">Use <b>at least three</b> unreal structures from the lesson (<i>if + past perfect, wish, it’s high time, would rather, as if</i>).</p>',
        ph: 'Write your essay here…',
        min: 220, max: 260,
        checks: [
          { label: 'At least 220 words', min: 220 },
          { label: 'No more than 260 words', max: 260 },
          { label: 'Introduction and conclusion (use “In conclusion”, “To sum up” or “Overall”)', re: '\\b(in conclusion|to sum up|overall|all things considered|on balance)\\b' },
          { label: 'Wish or if only', re: '\\b(i|we) wish\\b|\\bif only\\b' },
          { label: 'If + past perfect', re: '\\bif\\b[^.]*\\bhad\\b[^.]*\\b(been|done|known|seen|listened|started|cut|taken|acted)\\b' },
          { label: 'High time, would rather or as if', re: '\\bhigh time\\b|\\bwould rather\\b|\\bas if\\b|\\bas though\\b|\\bi’d rather\\b|\\bi\'d rather\\b' }
        ],
        exp: ['it is widely believed', 'arguably', 'on the other hand', 'it’s high time', 'if only', 'tipping point', 'unprecedented', 'mitigate', 'irreversible']
      },
      { t: 'html', cls: 'note', html: '<span class="hwtag">Task 3 of 3</span><br>Photo story: <b>100–140 words</b>.' },
      {
        t: 'write', id: 'hwstory', title: 'Photo story: the boys in the street', tag: 'W',
        promptHtml:
          '<p style="margin:0 0 10px"><b>Task.</b> Look again at Photo C from the warm-up (five boys in a shady street, one pointing). Write the short story of what happened. Begin with: <b>“Nobody had expected the afternoon to end like this.”</b></p>' +
          '<p style="margin:0">Use narrative tenses (past simple, past continuous, past perfect) and at least <b>two</b> words from the vocabulary lesson.</p>',
        ph: 'Nobody had expected the afternoon to end like this. …',
        min: 100, max: 140,
        checks: [
          { label: 'At least 100 words', min: 100 },
          { label: 'No more than 140 words', max: 140 },
          { label: 'Starts with the given sentence', re: '^\\s*nobody had expected the afternoon to end like this' },
          { label: 'Past perfect (had + past participle)', re: '\\bhad\\s+\\w+(ed|en|ne|wn|ought|aught|ent|ept|ft|ld)\\b' },
          { label: 'At least one word from the lesson', re: '\\b(mingle|mingled|rapport|camaraderie|outgoing|icebreaker|novice|daunting|plunge|comfort zone|tipping point|mitigate)\\b' }
        ],
        exp: ['had been', 'had never', 'by the time', 'as soon as', 'daunting', 'rapport']
      },
      {
        t: 'reflect', id: 'hwdiary', title: 'Vocabulary diary', tag: 'V',
        fields: [
          { id: 'a', label: 'Three words from the lesson, each in a new sentence of your own' },
          { id: 'b', label: 'One idiom from the Practice Lab, in a sentence about your own life' }
        ]
      }
    ]
  };
})();
