// Fallback bundled question sets so the app works both on GitHub Pages (via fetch)
// and when opened directly from a local folder (file:// protocol).

const BUILTIN_MANIFEST = {
  packs: [
    {
      id: 'firefighters-screenshot',
      title: 'Firefighters: Complete Interactive Reading Set',
      description:
        'Authentic Duolingo English Test set matching all reference screenshots: Part 1 cloze (9 blanks), Part 2 connecting sentence, and Part 3 (2 highlights, main idea, best title).',
      section: 'interactive-reading',
      difficulty: 'B2 • Intermediate',
      questionCount: 6,
      timeLimitSeconds: 458,
      file: 'questions/firefighters-screenshot.json',
    },
    {
      id: 'full-interactive-reading',
      title: 'Urban Ecology: Complete Interactive Reading Set',
      description:
        'Full 3-part DET Interactive Reading: Part 1 cloze (6 blanks), Part 2 connecting sentence, and Part 3 (2 highlights, main idea, best title).',
      section: 'interactive-reading',
      difficulty: 'B2–C1 • Upper-Intermediate',
      questionCount: 6,
      timeLimitSeconds: 480,
      file: 'questions/full-interactive-reading.json',
    },
    {
      id: 'science-technology-pack',
      title: 'Sleep & Memory: Complete Interactive Reading Set',
      description:
        'Advanced C1 academic practice set covering neuroscience with Part 1 cloze (6 blanks), Part 2 connecting sentence, and Part 3 (2 highlights, main idea, best title).',
      section: 'interactive-reading',
      difficulty: 'C1 • Advanced',
      questionCount: 6,
      timeLimitSeconds: 480,
      file: 'questions/science-technology-pack.json',
    },
  ],
};

const FALLBACK_PACKS = {
  'firefighters-screenshot': {
    id: 'firefighters-screenshot',
    title: 'Firefighters: Complete Interactive Reading Set',
    section: 'interactive-reading',
    difficulty: 'B2 • Intermediate',
    timeLimitSeconds: 458,
    paragraph1:
      'Firefighters are the people who put out fires on a nearly daily basis. They work for fire departments, which are organizations of trained professionals that keep the community safe from fires. When a fire breaks out, firefighters enter buildings to look for people and pets, rescue them, and put out the fire to prevent it from spreading. They also conduct fire drills and inspections to keep businesses and agencies safe.',
    paragraph2:
      'They must be physically fit and must be able to work in harsh conditions and difficult situations. In addition to responding to fires, firefighters often help in situations that require medical attention, such as automobile accidents and gas emergencies. In addition to physical skills and knowledge, firefighters have to have strong social skills, because they must often interact with people during stressful situations.',
    questions: [
      {
        id: 'part1-cloze',
        part: 1,
        type: 'complete_the_sentences',
        prompt: 'Select the best option for each missing word',
        passageTitle: 'PASSAGE',
        passage:
          'Firefighters are the people who put out fires on a {{1}} daily basis. They work for fire departments, which {{2}} organizations of trained professionals that keep the community {{3}} from fires. When a fire {{4}} out, firefighters enter buildings to look {{5}} people and pets, rescue them, and {{6}} out the fire to prevent {{7}} from spreading. They also conduct {{8}} drills and inspections to {{9}} businesses and agencies safe.',
        blanks: [
          {
            id: 1,
            options: ['nearly', 'roughly', 'practically', 'different', 'non'],
            answer: 'nearly',
            explanation:
              "'On a nearly daily basis' is the standard adverbial collocation modifying 'daily'.",
          },
          {
            id: 2,
            options: ['are', 'means', 'have', 'being', 'make'],
            answer: 'are',
            explanation:
              "The relative clause 'which are organizations...' requires the present tense plural verb 'are'.",
          },
          {
            id: 3,
            options: ['safe', 'far', 'clear', 'away', 'open'],
            answer: 'safe',
            explanation: "'Keep [someone] safe from fires' is the fixed collocation.",
          },
          {
            id: 4,
            options: ['breaks', 'fires', 'comes', 'turns', 'falls'],
            answer: 'breaks',
            explanation: "The phrasal verb 'break out' means to start suddenly.",
          },
          {
            id: 5,
            options: ['for', 'their', 'into', 'over', 'after'],
            answer: 'for',
            explanation: "'Look for' means to search for people and pets.",
          },
          {
            id: 6,
            options: ['put', 'fire', 'take', 'set', 'call'],
            answer: 'put',
            explanation: "'Put out the fire' is the phrasal verb meaning to extinguish.",
          },
          {
            id: 7,
            options: ['it', 'that', 'them', 'which', 'this'],
            answer: 'it',
            explanation: "The pronoun 'it' refers back to 'the fire'.",
          },
          {
            id: 8,
            options: ['fire', 'regular', 'sudden', 'casual', 'former'],
            answer: 'fire',
            explanation: "'Fire drills and inspections' is the compound noun phrase.",
          },
          {
            id: 9,
            options: ['keep', 'see', 'make', 'hold', 'stay'],
            answer: 'keep',
            explanation: "'Keep businesses and agencies safe' means maintaining safety.",
          },
        ],
      },
      {
        id: 'part2-connecting-sentence',
        part: 2,
        type: 'complete_the_passage',
        prompt: 'Select the best sentence to complete the passage',
        passageTitle: 'PASSAGE',
        options: [
          'Fire protection is the chief duty of a fire department.',
          'Life in a fire department is not always exciting, but it is rewarding.',
          'Firefighters must have a variety of skills and knowledge.',
          'A fire detection system monitors for smoke, heat, or movement.',
          'Firefighters need extensive training before they can find a job.',
        ],
        answer: 'Firefighters must have a variety of skills and knowledge.',
        explanation:
          'This sentence bridges Paragraph 1 (fire duties) and Paragraph 2 (physical, medical, and social skills).',
      },
      {
        id: 'part3-highlight-1',
        part: 3,
        type: 'highlight_the_answer',
        prompt: 'Highlight text in the passage to answer the question below',
        question:
          'In addition to knowledge and physical fitness, what other skills are important for firefighters?',
        passageTitle: 'PASSAGE',
        answer: 'strong social skills',
        acceptableSubstrings: ['strong social skills', 'social skills'],
        explanation:
          "Paragraph 2 states: 'firefighters have to have strong social skills, because they must often interact with people during stressful situations.'",
      },
      {
        id: 'part3-highlight-2',
        part: 3,
        type: 'highlight_the_answer',
        prompt: 'Highlight text in the passage to answer the question below',
        question: 'What non-fire emergencies do firefighters often respond to?',
        passageTitle: 'PASSAGE',
        answer: 'automobile accidents and gas emergencies',
        acceptableSubstrings: [
          'automobile accidents and gas emergencies',
          'situations that require medical attention, such as automobile accidents and gas emergencies',
          'medical attention, such as automobile accidents and gas emergencies',
        ],
        explanation:
          "Paragraph 2 states that firefighters help in 'situations that require medical attention, such as automobile accidents and gas emergencies.'",
      },
      {
        id: 'part3-main-idea',
        part: 3,
        type: 'identify_the_idea',
        prompt: 'Select the idea that is expressed in the passage',
        passageTitle: 'PASSAGE',
        options: [
          'Firefighting requires diverse emergency abilities spanning physical fitness, medical aid, and social communication.',
          'Fire departments focus solely on extinguishing structural blazes and do not assist in medical crises.',
          'Social skills are much more important for a firefighter than physical endurance during emergencies.',
          'Automobile accident response has completely replaced building fire prevention in modern cities.',
        ],
        answer:
          'Firefighting requires diverse emergency abilities spanning physical fitness, medical aid, and social communication.',
        explanation:
          'The passage describes the varied duties and wide range of skills required for modern firefighters.',
      },
      {
        id: 'part3-best-title',
        part: 3,
        type: 'title_the_passage',
        prompt: 'Select the best title for the passage',
        passageTitle: 'PASSAGE',
        options: [
          'The Multifaceted Roles and Skills of Modern Firefighters',
          'A Brief History of Municipal Fire Trucks and Hydrants',
          'Why Social Work Is the Most Dangerous Occupation in Cities',
          'How to Prevent Automobile Accidents and Gas Emergencies',
        ],
        answer: 'The Multifaceted Roles and Skills of Modern Firefighters',
        explanation:
          'This title best captures both the roles and the diverse skills highlighted throughout the text.',
      },
    ],
  },
  'full-interactive-reading': {
    id: 'full-interactive-reading',
    title: 'Urban Ecology: Complete Interactive Reading Set',
    section: 'interactive-reading',
    difficulty: 'B2–C1 • Upper-Intermediate',
    timeLimitSeconds: 480,
    paragraph1:
      'As metropolitan areas expand across the globe, concrete pavements and dark rooftops absorb significant amounts of solar radiation, creating what scientists call the urban heat island effect. Downtown neighborhoods often experience temperatures several degrees higher than surrounding rural landscapes, particularly after sunset. To counteract this phenomenon, urban planners have begun integrating green roofs and tree canopies into municipal building codes. Vegetated surfaces cool the surrounding air through evapotranspiration, a natural process in which plants release water vapor through their leaves. Besides lowering summer cooling costs for residents, these green corridors provide vital habitats for migratory birds and native pollinators.',
    paragraph2:
      'Researchers monitoring retrofitted commercial districts in Singapore and Toronto found that buildings with dense rooftop vegetation reduced peak roof membrane temperatures by up to twenty degrees Celsius. Furthermore, the soil layers atop these structures acted as natural sponges during heavy rainstorms, retaining up to seventy percent of stormwater runoff before it could overwhelm municipal drainage pipes.',
    questions: [
      {
        id: 'ir-step-1',
        part: 1,
        type: 'complete_the_sentences',
        prompt: 'Select the best option for each missing word',
        passageTitle: 'PASSAGE',
        passage:
          'As metropolitan areas expand across the globe, concrete pavements and dark rooftops {{1}} significant amounts of solar radiation, creating what scientists call the urban heat island effect. Downtown neighborhoods often experience temperatures several degrees higher {{2}} surrounding rural landscapes, particularly after sunset. To {{3}} this phenomenon, urban planners have begun integrating green roofs and tree canopies {{4}} municipal building codes. Vegetated surfaces cool the surrounding air {{5}} evapotranspiration, a natural process in which plants release water vapor through their leaves. {{6}} lowering summer cooling costs for residents, these green corridors provide vital habitats for migratory birds and native pollinators.',
        blanks: [
          {
            id: 1,
            options: ['absorb', 'reflect', 'dissolve', 'compile', 'exert'],
            answer: 'absorb',
            explanation:
              "Dark surfaces 'absorb' solar radiation, causing the urban heat island effect.",
          },
          {
            id: 2,
            options: ['than', 'from', 'over', 'as', 'to'],
            answer: 'than',
            explanation: "Comparative adjectives like 'higher' take 'than'.",
          },
          {
            id: 3,
            options: ['counteract', 'accelerate', 'endorse', 'provoke', 'imitate'],
            answer: 'counteract',
            explanation: "'Counteract' means to reduce harmful effects.",
          },
          {
            id: 4,
            options: ['into', 'onto', 'upon', 'with', 'under'],
            answer: 'into',
            explanation: "'Integrate into' is the standard prepositional collocation.",
          },
          {
            id: 5,
            options: ['through', 'despite', 'beneath', 'beyond', 'against'],
            answer: 'through',
            explanation: "'Through' indicates the mechanism of cooling.",
          },
          {
            id: 6,
            options: ['Besides', 'Instead', 'Whereas', 'Unless', 'Otherwise'],
            answer: 'Besides',
            explanation: "'Besides' + gerund means 'in addition to'.",
          },
        ],
      },
      {
        id: 'ir-step-2',
        part: 2,
        type: 'complete_the_passage',
        prompt: 'Select the best sentence to complete the passage',
        passageTitle: 'PASSAGE',
        options: [
          'Empirical field studies from major cities confirm that these botanical interventions yield measurable thermal and hydrological benefits.',
          'Nevertheless, most municipal governments have completely abandoned rooftop gardening projects due to structural collapses.',
          'Migratory birds typically prefer nesting on bare asphalt rooftops where predators cannot hide among shrubs.',
          'Solar radiation levels in rural agricultural valleys have risen faster than those in dense industrial centers.',
        ],
        answer:
          'Empirical field studies from major cities confirm that these botanical interventions yield measurable thermal and hydrological benefits.',
        explanation: 'Provides empirical transition between green roofs and city data.',
      },
      {
        id: 'ir-step-3',
        part: 3,
        type: 'highlight_the_answer',
        prompt: 'Highlight text in the passage to answer the question below',
        question: 'By what biological mechanism do plants cool the air around them?',
        passageTitle: 'PASSAGE',
        answer:
          'evapotranspiration, a natural process in which plants release water vapor through their leaves',
        acceptableSubstrings: ['evapotranspiration', 'release water vapor through their leaves'],
        explanation: "Defined explicitly in Paragraph 1 as 'evapotranspiration'.",
      },
      {
        id: 'ir-step-4',
        part: 3,
        type: 'highlight_the_answer',
        prompt: 'Highlight text in the passage to answer the question below',
        question: 'How do rooftop soil layers assist city infrastructure during severe rainfall?',
        passageTitle: 'PASSAGE',
        answer:
          'retaining up to seventy percent of stormwater runoff before it could overwhelm municipal drainage pipes',
        acceptableSubstrings: [
          'retaining up to seventy percent of stormwater runoff',
          'natural sponges during heavy rainstorms',
        ],
        explanation: 'Paragraph 2 notes soil layers retain up to seventy percent of runoff.',
      },
      {
        id: 'ir-step-5',
        part: 3,
        type: 'identify_the_idea',
        prompt: 'Select the idea that is expressed in the passage',
        passageTitle: 'PASSAGE',
        options: [
          'Incorporating vegetation into urban architecture helps mitigate excess heat, manage rainwater, and support local wildlife.',
          'Replacing all city streets with underground tunnels is the only effective way to eliminate the urban heat island effect.',
          'Rooftop gardens increase building cooling expenses during the summer because damp soil traps solar heat.',
          'Drainage pipes in Toronto and Singapore no longer require maintenance thanks to native pollinator habitats.',
        ],
        answer:
          'Incorporating vegetation into urban architecture helps mitigate excess heat, manage rainwater, and support local wildlife.',
        explanation: 'Accurately synthesizes heat mitigation, rainwater management, and ecology.',
      },
      {
        id: 'ir-step-6',
        part: 3,
        type: 'title_the_passage',
        prompt: 'Select the best title for the passage',
        passageTitle: 'PASSAGE',
        options: [
          'Cooling Concrete: How Green Architecture Combats Urban Heat and Runoff',
          'A History of Municipal Drainage Engineering in North America',
          'Why Migratory Birds Are Leaving Rural Forests for City Centers',
          'The Chemical Composition of Modern Asphalt and Roofing Materials',
        ],
        answer: 'Cooling Concrete: How Green Architecture Combats Urban Heat and Runoff',
        explanation: 'Captures both the core problem and the green solutions discussed.',
      },
    ],
  },
  'science-technology-pack': {
    id: 'science-technology-pack',
    title: 'Sleep & Memory: Complete Interactive Reading Set',
    section: 'interactive-reading',
    difficulty: 'C1 • Advanced',
    timeLimitSeconds: 480,
    paragraph1:
      'Neuroscientists have long recognized that sleep is not merely a passive state of physical rest. During slow-wave sleep, the brain actively transfers newly acquired experiences from the hippocampus to the neocortex for long-term storage. Participants who are deprived of adequate rest after learning a complex motor skill consistently perform worse than those who sleep uninterrupted for eight hours. Consequently, cramming throughout the night prior to an examination often undermines the very cognitive recall students hope to achieve.',
    paragraph2:
      'Subsequent neuroimaging investigations suggest that this memory stabilization operates in tandem with targeted synaptic pruning. While restful slumber consolidates critical pathways, non-essential neural associations formed during waking hours are systematically weakened, thereby restoring synaptic homeostasis and preserving cognitive capacity for subsequent learning.',
    questions: [
      {
        id: 'c1-sleep-cloze',
        part: 1,
        type: 'complete_the_sentences',
        prompt: 'Select the best option for each missing word',
        passageTitle: 'PASSAGE',
        passage:
          'Neuroscientists have long recognized that sleep is {{1}} merely a passive state of physical rest. During slow-wave sleep, the brain actively {{2}} newly acquired experiences from the hippocampus to the neocortex for long-term storage. Participants who are {{3}} of adequate rest after learning a complex motor skill consistently perform worse than {{4}} who sleep uninterrupted for eight hours. Consequently, cramming throughout the night {{5}} an examination often undermines the very cognitive recall students hope to {{6}}.',
        blanks: [
          {
            id: 1,
            options: ['not', 'none', 'never', 'neither', 'nothing'],
            answer: 'not',
            explanation: "'Not merely' is the correlative adverbial phrase.",
          },
          {
            id: 2,
            options: ['transfers', 'translates', 'transcends', 'transacts', 'transpires'],
            answer: 'transfers',
            explanation: "'Transfers' accurately describes relaying memory traces.",
          },
          {
            id: 3,
            options: ['deprived', 'denied', 'deducted', 'detached', 'depleted'],
            answer: 'deprived',
            explanation: "'Deprived of' means prevented from having necessary rest.",
          },
          {
            id: 4,
            options: ['those', 'them', 'these', 'whom', 'which'],
            answer: 'those',
            explanation: "'Those who sleep...' is the formal demonstrative pronoun.",
          },
          {
            id: 5,
            options: ['prior to', 'owing to', 'regardless of', 'in lieu of', 'by means of'],
            answer: 'prior to',
            explanation: "'Prior to' is formal for 'before'.",
          },
          {
            id: 6,
            options: ['achieve', 'acquire', 'appease', 'ascribe', 'allege'],
            answer: 'achieve',
            explanation: "'Achieve recall' is the appropriate academic collocation.",
          },
        ],
      },
      {
        id: 'c1-sleep-connecting',
        part: 2,
        type: 'complete_the_passage',
        prompt: 'Select the best sentence to complete the passage',
        passageTitle: 'PASSAGE',
        options: [
          'Subsequent neuroimaging investigations suggest that this memory stabilization operates in tandem with targeted synaptic pruning.',
          'Medical doctors therefore advise university students to ingest excessive caffeine before midnight.',
          'Hippocampal neurons completely cease electrical firing once slow-wave sleep commences.',
          'Motor skill acquisition is virtually impossible unless learned during childhood.',
        ],
        answer:
          'Subsequent neuroimaging investigations suggest that this memory stabilization operates in tandem with targeted synaptic pruning.',
        explanation: 'Connects memory consolidation to synaptic pruning.',
      },
      {
        id: 'c1-sleep-highlight-1',
        part: 3,
        type: 'highlight_the_answer',
        prompt: 'Highlight text in the passage to answer the question below',
        question: 'To which brain region are memory traces transferred for long-term storage?',
        passageTitle: 'PASSAGE',
        answer: 'neocortex',
        acceptableSubstrings: ['the neocortex', 'neocortex'],
        explanation: "Transfers memories 'from the hippocampus to the neocortex'.",
      },
      {
        id: 'c1-sleep-highlight-2',
        part: 3,
        type: 'highlight_the_answer',
        prompt: 'Highlight text in the passage to answer the question below',
        question: 'What happens to non-essential neural associations during restful slumber?',
        passageTitle: 'PASSAGE',
        answer: 'systematically weakened',
        acceptableSubstrings: ['are systematically weakened', 'systematically weakened'],
        explanation: 'Non-essential associations are systematically weakened.',
      },
      {
        id: 'c1-sleep-main-idea',
        part: 3,
        type: 'identify_the_idea',
        prompt: 'Select the idea that is expressed in the passage',
        passageTitle: 'PASSAGE',
        options: [
          'Sleep is an active neurological phase that both consolidates vital memories and eliminates superfluous connections.',
          'Cramming without sleep improves examination performance by keeping neural pathways perpetually active.',
          'Synaptic pruning only occurs when an individual is engaged in intense physical exercise.',
          'The hippocampus is the permanent repository for all human long-term memories.',
        ],
        answer:
          'Sleep is an active neurological phase that both consolidates vital memories and eliminates superfluous connections.',
        explanation: 'Details how sleep consolidates memories and prunes associations.',
      },
      {
        id: 'c1-sleep-title',
        part: 3,
        type: 'title_the_passage',
        prompt: 'Select the best title for the passage',
        passageTitle: 'PASSAGE',
        options: [
          'Beyond Rest: The Dual Neurological Work of Sleep in Memory and Pruning',
          'The Economic Costs of Nighttime Examinations in Universities',
          'Why the Human Hippocampus Does Not Require Oxygen During Slumber',
          'A Comprehensive Guide to Improving Athletic Performance Through Diet'
        ],
        answer: 'Beyond Rest: The Dual Neurological Work of Sleep in Memory and Pruning',
        explanation: 'Accurately reflects memory transfer and synaptic pruning.',
      },
    ],
  },
};

const LLM_PROMPT_TEMPLATE = `You are an expert test-prep content creator for the Duolingo English Test (DET) "Interactive Reading" section.

Generate a complete Interactive Reading practice set in valid JSON following the exact 3-part / 6-question structure specified below. Output ONLY valid JSON (no surrounding markdown comments outside the code fence).

### Section Structure
- **Part 1**: 6~7 MCQ selecting missing words (Complete the Sentences) in Paragraph 1.
- **Part 2**: 1 MCQ selecting connecting sentence (Complete the Passage) between Paragraph 1 and Paragraph 2.
- **Part 3**: 
  - 2 Highlight questions ("Highlight text in the passage to answer the question below")
  - 1 MCQ Main Idea ("Select the idea that is expressed in the passage")
  - 1 MCQ Best Title ("Select the best title for the passage")

### Text & Flow Rules
1. **Passage**: Nonfiction / academic topic (CEFR B2 or C1) with two coherent paragraphs:
   - \`paragraph1\`: 70–100 words with 6~7 numbered blanks ({{1}} through {{6}} or {{7}}).
   - \`paragraph2\`: 70–100 words continuing the topic.
2. In Part 2, the completed Paragraph 1 (with 100% correct answers filled in) is displayed, followed by a connecting sentence slot, followed by Paragraph 2.
3. In Part 3, the entire unified passage (Paragraph 1 + correct connecting sentence + Paragraph 2) is displayed for text highlighting and high-level comprehension questions.

### Required JSON Schema
{
  "id": "det-interactive-reading-1",
  "title": "Title of the Reading Set",
  "section": "interactive-reading",
  "difficulty": "B2–C1 • Upper-Intermediate",
  "timeLimitSeconds": 480,
  "paragraph1": "Full first paragraph text with all correct words filled in...",
  "paragraph2": "Full second paragraph text...",
  "questions": [
    {
      "id": "q1-cloze",
      "part": 1,
      "type": "complete_the_sentences",
      "prompt": "Select the best option for each missing word",
      "passageTitle": "PASSAGE",
      "passage": "Sentence with a {{1}} word, followed by {{2}} and {{3}}...",
      "blanks": [
        {
          "id": 1,
          "options": ["correctWord", "distractor1", "distractor2", "distractor3", "distractor4"],
          "answer": "correctWord",
          "explanation": "Why correctWord fits best grammatically or collocationally."
        }
      ]
    },
    {
      "id": "q2-connecting",
      "part": 2,
      "type": "complete_the_passage",
      "prompt": "Select the best sentence to complete the passage",
      "passageTitle": "PASSAGE",
      "options": [
        "Distractor sentence A.",
        "Correct connecting sentence bridging Paragraph 1 and Paragraph 2.",
        "Distractor sentence C.",
        "Distractor sentence D.",
        "Distractor sentence E."
      ],
      "answer": "Correct connecting sentence bridging Paragraph 1 and Paragraph 2.",
      "explanation": "Why this connecting sentence logically bridges the two paragraphs."
    },
    {
      "id": "q3-highlight-1",
      "part": 3,
      "type": "highlight_the_answer",
      "prompt": "Highlight text in the passage to answer the question below",
      "question": "Specific question whose answer is an exact phrase in the passage?",
      "passageTitle": "PASSAGE",
      "answer": "exact phrase in the text",
      "acceptableSubstrings": ["exact phrase", "shorter version"],
      "explanation": "Location and context of the answer in the text."
    },
    {
      "id": "q4-highlight-2",
      "part": 3,
      "type": "highlight_the_answer",
      "prompt": "Highlight text in the passage to answer the question below",
      "question": "Second question whose answer is an exact phrase in the text?",
      "passageTitle": "PASSAGE",
      "answer": "second exact phrase in the text",
      "acceptableSubstrings": ["second exact phrase"],
      "explanation": "Location and context of the answer in the text."
    },
    {
      "id": "q5-main-idea",
      "part": 3,
      "type": "identify_the_idea",
      "prompt": "Select the idea that is expressed in the passage",
      "passageTitle": "PASSAGE",
      "options": [
        "Correct main idea synthesized across the entire text.",
        "Distractor idea that is too narrow.",
        "Distractor idea that contradicts the passage.",
        "Distractor idea not mentioned in the passage."
      ],
      "answer": "Correct main idea synthesized across the entire text.",
      "explanation": "Why this option best represents the overall idea."
    },
    {
      "id": "q6-best-title",
      "part": 3,
      "type": "title_the_passage",
      "prompt": "Select the best title for the passage",
      "passageTitle": "PASSAGE",
      "options": [
        "Best Comprehensive Title for the Passage",
        "Overly narrow title",
        "Off-topic title",
        "Overly broad title"
      ],
      "answer": "Best Comprehensive Title for the Passage",
      "explanation": "Why this title captures both the topic and the scope of the passage."
    }
  ]
}`;


const STORAGE_KEY_CUSTOM_PACKS = 'det_prep_custom_packs_v1';

const state = {
  view: 'hub', // 'hub' | 'practice'
  packsMeta: [...BUILTIN_MANIFEST.packs],
  loadedPacks: { ...FALLBACK_PACKS },
  activePackId: 'firefighters-screenshot',
  activePack: null,

  // Practice session state
  currentQuestionIndex: 0,
  openBlankId: 1, // Default open blank #1 for Part 1
  focusedOptionIndex: 0,
  answers: {}, // { [questionId]: { [blankId]: word } or string }
  isGradedCurrentQuestion: false,
  feedbackState: null,
  showTryAgainColors: false, // Highlights correct/incorrect in passage after Try Again
  remainingSeconds: 458,
  timerInterval: null,
  showFinalResults: false,
};

/* ==========================================================================
   JSON NORMALIZER
   ========================================================================== */
function normalizeQuestionPack(rawInput, fallbackTitle = 'Custom Practice Pack') {
  let data = rawInput;
  if (typeof data === 'string') {
    const cleaned = data
      .trim()
      .replace(/^```(?:json)?\s*/i, '')
      .replace(/\s*```$/, '');
    data = JSON.parse(cleaned);
  }

  if (!data || typeof data !== 'object') {
    throw new Error('JSON root must be an object or an array.');
  }

  let rawQuestions = [];
  if (Array.isArray(data)) {
    rawQuestions = data;
    data = { title: fallbackTitle, questions: rawQuestions };
  } else if (Array.isArray(data.questions)) {
    rawQuestions = data.questions;
  } else if (typeof data.passage === 'string') {
    rawQuestions = [data];
    data = {
      id: data.id || `custom-${Date.now()}`,
      title: data.title || fallbackTitle,
      questions: rawQuestions,
    };
  } else {
    throw new Error('JSON must contain a "questions" array.');
  }

  const normalizedQuestions = rawQuestions.map((q, idx) => {
    const qId = String(q.id || `q${idx + 1}`);
    const qType = (q.type || 'complete_the_sentences').toLowerCase().trim();
    let passage = String(q.passage || q.text || '');

    // Normalize blank markers: [1], {1}, ___1___ -> {{1}}
    passage = passage
      .replace(/\[\[(\d+)\]\]/g, '{{$1}}')
      .replace(/\[(\d+)\]/g, '{{$1}}')
      .replace(/(?<!\{)\{(\d+)\}(?!\})/g, '{{$1}}')
      .replace(/_{2,}(\d+)_{2,}/g, '{{$1}}');

    if (qType === 'complete_the_sentences' || Array.isArray(q.blanks) || q.blanks) {
      let rawBlanks = q.blanks;
      if (!Array.isArray(rawBlanks) && rawBlanks && typeof rawBlanks === 'object') {
        rawBlanks = Object.entries(rawBlanks).map(([k, v]) => ({
          id: Number(k),
          ...v,
        }));
      }

      const blanks = (rawBlanks || []).map((b, bIdx) => {
        const blankNum = Number(b.id ?? b.number ?? bIdx + 1);
        const options = Array.isArray(b.options || b.choices)
          ? (b.options || b.choices).map(String)
          : [];
        let answer = b.answer ?? b.correctAnswer ?? b.correct;
        if (typeof answer === 'number' && options[answer] !== undefined) {
          answer = options[answer];
        }
        return {
          id: blankNum,
          options,
          answer: String(answer ?? options[0] ?? ''),
          explanation: b.explanation || b.reason || '',
        };
      });

      return {
        id: qId,
        part: q.part || 1,
        type: 'complete_the_sentences',
        prompt: q.prompt || 'Select the best option for each missing word',
        passageTitle: q.passageTitle || 'PASSAGE',
        passage,
        blanks,
      };
    }

    if (qType === 'highlight_the_answer') {
      return {
        id: qId,
        part: q.part || 3,
        type: 'highlight_the_answer',
        prompt: q.prompt || 'Highlight text in the passage to answer the question below',
        question: q.question || 'Select the relevant phrase in the passage.',
        passageTitle: q.passageTitle || 'PASSAGE',
        passage,
        answer: String(q.answer ?? q.correctAnswer ?? ''),
        acceptableSubstrings: Array.isArray(q.acceptableSubstrings) ? q.acceptableSubstrings : [],
        explanation: q.explanation || '',
      };
    }

    const options = Array.isArray(q.options || q.choices)
      ? (q.options || q.choices).map(String)
      : [];
    let answer = q.answer ?? q.correctAnswer ?? q.correct;
    if (typeof answer === 'number' && options[answer] !== undefined) {
      answer = options[answer];
    }

    const defaultPrompts = {
      complete_the_passage: 'Select the best sentence to complete the passage',
      identify_the_idea: 'Select the idea that is expressed in the passage',
      title_the_passage: 'Select the best title for the passage',
    };

    return {
      id: qId,
      part: q.part || (qType === 'complete_the_passage' ? 2 : 3),
      type: qType,
      prompt: q.prompt || defaultPrompts[qType] || 'Select the best option',
      passageTitle: q.passageTitle || 'PASSAGE',
      passage,
      options,
      answer: String(answer ?? options[0] ?? ''),
      explanation: q.explanation || '',
    };
  });

  let paragraph1 = data.paragraph1 || '';
  let paragraph2 = data.paragraph2 || '';

  const part1Q = normalizedQuestions.find((q) => q.type === 'complete_the_sentences');
  if (!paragraph1 && part1Q) {
    paragraph1 = part1Q.passage.replace(/\{\{(\d+)\}\}/g, (_, num) => {
      const b = part1Q.blanks.find((item) => item.id === Number(num));
      return b ? b.answer : '';
    });
  }

  return {
    id: String(data.id || `pack-${Date.now()}`),
    title: String(data.title || fallbackTitle),
    description: String(data.description || ''),
    section: String(data.section || 'interactive-reading'),
    difficulty: String(data.difficulty || 'B2–C1'),
    timeLimitSeconds: Number(data.timeLimitSeconds || 458),
    paragraph1,
    paragraph2,
    questions: normalizedQuestions,
  };
}

/* ==========================================================================
   INITIALIZATION
   ========================================================================== */
async function initApp() {
  loadCustomPacksFromStorage();
  bindGlobalEvents();
  renderHub();

  await handleUrlParameters();
  if (state.view === 'practice') {
    await startPracticeSession(state.activePackId);
  }
  fetchManifestIfAvailable();
}

function loadCustomPacksFromStorage() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY_CUSTOM_PACKS);
    if (!raw) return;
    const saved = JSON.parse(raw);
    if (Array.isArray(saved)) {
      saved.forEach((pack) => registerPackInMemory(pack, false));
    }
  } catch (err) {
    console.warn('Could not load custom packs from storage:', err);
  }
}

function saveCustomPackToStorage(pack) {
  try {
    const raw = localStorage.getItem(STORAGE_KEY_CUSTOM_PACKS);
    const saved = raw ? JSON.parse(raw) : [];
    const filtered = saved.filter((p) => p.id !== pack.id);
    filtered.unshift(pack);
    localStorage.setItem(STORAGE_KEY_CUSTOM_PACKS, JSON.stringify(filtered.slice(0, 20)));
  } catch (err) {
    console.warn('Could not persist custom pack:', err);
  }
}

function registerPackInMemory(pack, persist = true) {
  state.loadedPacks[pack.id] = pack;
  const metaEntry = {
    id: pack.id,
    title: pack.title,
    description: pack.description,
    section: pack.section || 'interactive-reading',
    difficulty: pack.difficulty || 'Custom JSON',
    questionCount: pack.questions.length,
    timeLimitSeconds: pack.timeLimitSeconds || 458,
    isCustom: true,
  };

  const existingIdx = state.packsMeta.findIndex((p) => p.id === pack.id);
  if (existingIdx >= 0) {
    state.packsMeta[existingIdx] = { ...state.packsMeta[existingIdx], ...metaEntry };
  } else {
    state.packsMeta.unshift(metaEntry);
  }

  if (persist) {
    saveCustomPackToStorage(pack);
  }
}

async function fetchManifestIfAvailable() {
  try {
    const res = await fetch('./questions/manifest.json', { cache: 'no-store' });
    if (!res.ok) return;
    const manifest = await res.json();
    if (Array.isArray(manifest.packs)) {
      manifest.packs.forEach((entry) => {
        if (!state.packsMeta.some((p) => p.id === entry.id)) {
          state.packsMeta.push(entry);
        }
      });
    }
  } catch {
    // Offline or file:// protocol
  }
}

async function ensurePackLoaded(packId) {
  if (state.loadedPacks[packId]) {
    return state.loadedPacks[packId];
  }
  const meta = state.packsMeta.find((p) => p.id === packId);
  if (meta && meta.file) {
    try {
      const res = await fetch(`./${meta.file.replace(/^\.?\//, '')}`);
      if (res.ok) {
        const raw = await res.json();
        const normalized = normalizeQuestionPack(raw, meta.title);
        state.loadedPacks[packId] = normalized;
        return normalized;
      }
    } catch (err) {
      console.warn(`Could not fetch ${meta.file}`, err);
    }
  }
  return state.loadedPacks['firefighters-screenshot'] || FALLBACK_PACKS['firefighters-screenshot'];
}

async function handleUrlParameters() {
  const params = new URLSearchParams(window.location.search);
  const packParam = params.get('pack');
  const jsonUrlParam = params.get('json');
  const base64DataParam = params.get('data');
  const viewParam = params.get('view');

  if (base64DataParam) {
    try {
      const jsonStr = decodeURIComponent(escape(atob(base64DataParam)));
      const normalized = normalizeQuestionPack(jsonStr, 'Shared Friend Pack');
      registerPackInMemory(normalized, true);
      state.activePackId = normalized.id;
      showToast(`Loaded shared pack: "${normalized.title}"`);
    } catch (err) {
      console.error('Invalid ?data= param:', err);
    }
  } else if (jsonUrlParam) {
    try {
      const res = await fetch(jsonUrlParam);
      if (res.ok) {
        const text = await res.text();
        const normalized = normalizeQuestionPack(text, 'External JSON Pack');
        registerPackInMemory(normalized, true);
        state.activePackId = normalized.id;
        showToast(`Loaded JSON: "${normalized.title}"`);
      }
    } catch (err) {
      console.error('Could not fetch ?json= URL:', err);
    }
  } else if (packParam) {
    state.activePackId = packParam;
  }

  if (viewParam === 'practice' || jsonUrlParam || base64DataParam) {
    state.view = 'practice';
  }
}

/* ==========================================================================
   HUB (LANDING PAGE)
   ========================================================================== */
function renderHub() {
  const packsContainer = document.getElementById('packs-grid');
  if (!packsContainer) return;

  packsContainer.innerHTML = state.packsMeta
    .map((meta) => {
      const isActive = meta.id === state.activePackId;
      const mins = Math.floor((meta.timeLimitSeconds || 458) / 60);
      const secs = String((meta.timeLimitSeconds || 458) % 60).padStart(2, '0');
      return `
        <article class="pack-card ${isActive ? 'active' : ''}" data-pack-id="${escapeHtml(meta.id)}">
          <div>
            <div class="pack-card-top">
              <span class="pack-badge">${escapeHtml(meta.difficulty || 'B2 • Intermediate')}</span>
              ${
                isActive
                  ? '<span class="pack-badge">Active</span>'
                  : meta.isCustom
                    ? '<span class="pack-badge">Custom</span>'
                    : ''
              }
            </div>
            <h3 class="pack-title">${escapeHtml(meta.title)}</h3>
            <p class="pack-desc">${escapeHtml(meta.description || '')}</p>
          </div>
          <div class="pack-meta">
            <span>📋 ${meta.questionCount || 6} Questions • ⏱ ${mins}:${secs}</span>
            <span style="color: var(--duo-blue); font-weight: 800;">Start Practice →</span>
          </div>
        </article>
      `;
    })
    .join('');

  packsContainer.querySelectorAll('.pack-card').forEach((card) => {
    card.addEventListener('click', () => {
      const packId = card.getAttribute('data-pack-id');
      state.activePackId = packId;
      startPracticeSession(packId);
    });
  });
}

/* ==========================================================================
   PRACTICE SESSION CONTROLLER
   ========================================================================== */
async function startPracticeSession(packId) {
  const pack = await ensurePackLoaded(packId);
  state.activePackId = pack.id;
  state.activePack = pack;
  state.currentQuestionIndex = 0;
  state.answers = {};
  state.isGradedCurrentQuestion = false;
  state.feedbackState = null;
  state.showTryAgainColors = false;
  state.showFinalResults = false;
  state.remainingSeconds = pack.timeLimitSeconds || 458;

  hideFinalResultsOverlay();

  // Open blank #1 for Part 1 to match reference screenshot
  const firstQ = pack.questions[0];
  if (firstQ?.type === 'complete_the_sentences' && firstQ.blanks?.length) {
    state.openBlankId = firstQ.blanks[0].id;
    state.focusedOptionIndex = 0;
  } else {
    state.openBlankId = null;
  }

  switchView('practice');
  startTimer();
  renderPracticeCard();
}

function switchView(targetView) {
  state.view = targetView;
  const hubEl = document.getElementById('hub-view');
  const practiceEl = document.getElementById('practice-view');

  if (targetView === 'practice') {
    if (hubEl) {
      hubEl.classList.add('hidden-view');
      hubEl.style.display = 'none';
      hubEl.hidden = true;
    }
    if (practiceEl) {
      practiceEl.classList.remove('hidden-view');
      practiceEl.style.display = 'flex';
      practiceEl.hidden = false;
      practiceEl.removeAttribute('hidden');
    }
  } else {
    stopTimer();
    hideFinalResultsOverlay();
    state.showFinalResults = false;
    state.isGradedCurrentQuestion = false;
    state.feedbackState = null;
    state.showTryAgainColors = false;

    if (practiceEl) {
      practiceEl.classList.add('hidden-view');
      practiceEl.style.display = 'none';
      practiceEl.hidden = true;
    }
    if (hubEl) {
      hubEl.classList.remove('hidden-view');
      hubEl.style.display = 'flex';
      hubEl.hidden = false;
      hubEl.removeAttribute('hidden');
    }
    renderHub();
  }
}

function startTimer() {
  stopTimer();
  updateTimerDisplay();
  state.timerInterval = setInterval(() => {
    if (state.showFinalResults) return;
    if (state.remainingSeconds > 0) {
      state.remainingSeconds -= 1;
      updateTimerDisplay();
    } else {
      stopTimer();
      showFinalResultsScreen();
    }
  }, 1000);
}

function stopTimer() {
  if (state.timerInterval) {
    clearInterval(state.timerInterval);
    state.timerInterval = null;
  }
}

function updateTimerDisplay() {
  const clockEl = document.getElementById('det-timer-clock');
  const subEl = document.getElementById('det-timer-sub');
  if (!clockEl || !state.activePack) return;

  const mins = Math.floor(state.remainingSeconds / 60);
  const secs = String(state.remainingSeconds % 60).padStart(2, '0');
  clockEl.textContent = `${mins}:${secs}`;
  clockEl.classList.toggle('low-time', state.remainingSeconds <= 60);

  const remainingQuestions = state.activePack.questions.length - state.currentQuestionIndex;
  if (subEl) {
    subEl.textContent = `for ${remainingQuestions} question${remainingQuestions === 1 ? '' : 's'}`;
  }
}

/* ==========================================================================
   RENDER PRACTICE CARD (PART 1, PART 2, PART 3)
   ========================================================================== */
function renderPracticeCard() {
  const pack = state.activePack;
  if (!pack) return;

  if (state.showFinalResults) {
    renderFinalResultsOverlay(pack);
    return;
  }

  hideFinalResultsOverlay();
  updateTimerDisplay();

  const q = pack.questions[state.currentQuestionIndex];
  if (!q) return;

  const partIndicator = document.getElementById('det-part-indicator');
  if (partIndicator) {
    partIndicator.textContent = `Part ${q.part || 1} • Question ${state.currentQuestionIndex + 1}/${pack.questions.length}`;
  }

  const passageTitleEl = document.getElementById('det-passage-header');
  const passageContentEl = document.getElementById('det-passage-content');
  const promptTitleEl = document.getElementById('det-prompt-title');
  const rightControlsEl = document.getElementById('det-right-controls');
  const submitBtn = document.getElementById('det-submit-btn');

  passageTitleEl.textContent = q.passageTitle || 'PASSAGE';
  promptTitleEl.textContent = q.prompt;

  if (q.part === 1 || q.type === 'complete_the_sentences') {
    renderPart1Cloze(q, passageContentEl, rightControlsEl);
  } else if (q.part === 2 || q.type === 'complete_the_passage') {
    renderPart2ConnectingSentence(q, pack, passageContentEl, rightControlsEl);
  } else if (q.type === 'highlight_the_answer') {
    renderPart3Highlight(q, pack, passageContentEl, rightControlsEl);
  } else {
    renderPart3MultipleChoice(q, pack, passageContentEl, rightControlsEl);
  }

  const feedbackDrawer = document.getElementById('det-feedback-drawer');
  const bottombar = document.getElementById('det-bottombar');

  if (state.isGradedCurrentQuestion && state.feedbackState) {
    feedbackDrawer.style.display = 'flex';
    feedbackDrawer.hidden = false;
    bottombar.style.display = 'none';
    bottombar.hidden = true;
    renderFeedbackDrawer(state.feedbackState);
  } else {
    feedbackDrawer.style.display = 'none';
    feedbackDrawer.hidden = true;
    bottombar.style.display = 'flex';
    bottombar.hidden = false;
    const isAnswered = checkIfQuestionAnswered(q);
    submitBtn.disabled = !isAnswered;
  }
}

/* ==========================================================================
   PART 1: CLOZE (SELECTING MISSING WORDS)
   ========================================================================== */
function renderPart1Cloze(q, passageContentEl, rightControlsEl) {
  const qAns = state.answers[q.id] || {};

  const tokenRegex = /\{\{(\d+)\}\}/g;
  let lastIdx = 0;
  let match;
  const frag = document.createDocumentFragment();

  while ((match = tokenRegex.exec(q.passage)) !== null) {
    if (match.index > lastIdx) {
      frag.appendChild(document.createTextNode(q.passage.slice(lastIdx, match.index)));
    }
    const blankId = Number(match[1]);
    const blankDef = q.blanks.find((b) => b.id === blankId);
    const chosenWord = qAns[blankId] || '';
    const isActive = state.openBlankId === blankId;

    const span = document.createElement('span');
    let cls = 'inline-blank';
    if (isActive) cls += ' active';
    if (chosenWord) cls += ' filled';

    // Show correct/incorrect highlights if Try Again was clicked
    if (state.showTryAgainColors && blankDef && chosenWord) {
      const isCorrect =
        chosenWord.trim().toLowerCase() === blankDef.answer.trim().toLowerCase();
      cls += isCorrect ? ' review-correct' : ' review-wrong';
    }

    span.className = cls;
    span.setAttribute('data-blank-id', String(blankId));

    span.innerHTML = `<span class="blank-num-badge">${blankId}</span><span class="inline-blank-word">${escapeHtml(
      chosenWord
    )}</span>`;

    span.addEventListener('click', () => {
      state.openBlankId = blankId;
      state.focusedOptionIndex = 0;
      renderPracticeCard();
      scrollToDropdownGroup(blankId);
    });

    frag.appendChild(span);
    lastIdx = tokenRegex.lastIndex;
  }

  if (lastIdx < q.passage.length) {
    frag.appendChild(document.createTextNode(q.passage.slice(lastIdx)));
  }

  passageContentEl.className = 'det-passage-content';
  passageContentEl.innerHTML = '';
  passageContentEl.appendChild(frag);

  const stack = document.createElement('div');
  stack.className = 'det-dropdown-stack';

  q.blanks.forEach((blank) => {
    const isOpen = state.openBlankId === blank.id;
    const chosenWord = qAns[blank.id] || '';

    const group = document.createElement('div');
    group.className = `det-dropdown-group ${isOpen ? 'open' : ''}`;
    group.id = `dropdown-group-${blank.id}`;

    const trigger = document.createElement('button');
    trigger.type = 'button';
    trigger.className = 'det-dropdown-trigger';
    trigger.setAttribute('aria-expanded', isOpen ? 'true' : 'false');

    const labelHtml = chosenWord
      ? `<span class="det-dropdown-selected-text">${escapeHtml(chosenWord)}</span>`
      : `<span class="det-dropdown-placeholder">Select a word</span>`;

    trigger.innerHTML = `
      <span class="det-dropdown-trigger-left">
        <span class="blank-num-badge">${blank.id}</span>
        ${labelHtml}
      </span>
      <svg class="det-dropdown-chevron" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    `;

    trigger.addEventListener('click', () => {
      state.openBlankId = isOpen ? null : blank.id;
      state.focusedOptionIndex = 0;
      renderPracticeCard();
    });

    group.appendChild(trigger);

    if (isOpen) {
      const menu = document.createElement('div');
      menu.className = 'det-dropdown-menu';
      menu.setAttribute('role', 'listbox');

      blank.options.forEach((optText, optIdx) => {
        const optBtn = document.createElement('button');
        optBtn.type = 'button';
        const isSelected =
          chosenWord === optText || (!chosenWord && optIdx === state.focusedOptionIndex);
        optBtn.className = `det-dropdown-option ${isSelected ? 'selected' : ''}`;
        optBtn.textContent = optText;

        optBtn.addEventListener('mouseenter', () => {
          menu.querySelectorAll('.det-dropdown-option').forEach((el) => {
            if (el.textContent !== chosenWord) el.classList.remove('selected');
          });
          optBtn.classList.add('selected');
        });

        optBtn.addEventListener('click', () => {
          if (!state.answers[q.id]) state.answers[q.id] = {};
          state.answers[q.id][blank.id] = optText;

          // Auto-advance to next unanswered blank
          const currentIdx = q.blanks.findIndex((b) => b.id === blank.id);
          const nextUnanswered =
            q.blanks.slice(currentIdx + 1).find((b) => !state.answers[q.id][b.id]) ||
            q.blanks.find((b) => !state.answers[q.id][b.id]);

          state.openBlankId = nextUnanswered ? nextUnanswered.id : null;
          state.focusedOptionIndex = 0;
          renderPracticeCard();

          if (state.openBlankId) {
            scrollToDropdownGroup(state.openBlankId);
          }
        });

        menu.appendChild(optBtn);
      });

      group.appendChild(menu);
    }

    stack.appendChild(group);
  });

  rightControlsEl.innerHTML = '';
  rightControlsEl.appendChild(stack);
}

function scrollToDropdownGroup(blankId) {
  requestAnimationFrame(() => {
    const el = document.getElementById(`dropdown-group-${blankId}`);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  });
}

/* ==========================================================================
   PART 2: CONNECTING SENTENCE
   ========================================================================== */
function renderPart2ConnectingSentence(q, pack, passageContentEl, rightControlsEl) {
  const chosenSentence = state.answers[q.id] || '';
  const paragraph1 = getCompletedParagraph1(pack);
  const paragraph2 = pack.paragraph2 || '';

  passageContentEl.className = 'det-passage-content';
  passageContentEl.innerHTML = '';

  const p1Node = document.createElement('p');
  p1Node.textContent = paragraph1;
  passageContentEl.appendChild(p1Node);

  const slot = document.createElement('div');
  slot.className = `passage-connecting-slot ${chosenSentence ? '' : 'empty'}`;
  slot.textContent = chosenSentence || 'Select a sentence from the options on the right...';
  passageContentEl.appendChild(slot);

  if (paragraph2) {
    const p2Node = document.createElement('p');
    p2Node.textContent = paragraph2;
    passageContentEl.appendChild(p2Node);
  }

  renderRadioOptionsList(q, rightControlsEl);
}

/* ==========================================================================
   PART 3: HIGHLIGHT QUESTIONS
   ========================================================================== */
function renderPart3Highlight(q, pack, passageContentEl, rightControlsEl) {
  const selectedHighlight = state.answers[q.id] || '';
  const fullPassage = getFullCohesivePassage(pack);

  passageContentEl.className = 'det-passage-content';

  if (selectedHighlight && fullPassage.includes(selectedHighlight)) {
    const idx = fullPassage.indexOf(selectedHighlight);
    const before = escapeHtml(fullPassage.slice(0, idx));
    const mid = escapeHtml(selectedHighlight);
    const after = escapeHtml(fullPassage.slice(idx + selectedHighlight.length));
    passageContentEl.innerHTML = `${before}<span class="passage-highlight-active">${mid}</span>${after}`;
  } else {
    passageContentEl.textContent = fullPassage;
  }

  passageContentEl.onmouseup = () => {
    const sel = window.getSelection();
    const text = sel ? sel.toString().trim() : '';
    if (text.length >= 3 && fullPassage.includes(text)) {
      state.answers[q.id] = text;
      sel.removeAllRanges();
      renderPracticeCard();
    }
  };

  rightControlsEl.innerHTML = `
    <div class="det-subquestion-text">${escapeHtml(q.question || '')}</div>
    <div class="det-highlight-preview ${selectedHighlight ? 'has-selection' : ''}">
      ${
        selectedHighlight
          ? escapeHtml(selectedHighlight)
          : 'Click and drag to highlight text'
      }
    </div>
  `;
}

/* ==========================================================================
   PART 3: MAIN IDEA & BEST TITLE MCQs
   ========================================================================== */
function renderPart3MultipleChoice(q, pack, passageContentEl, rightControlsEl) {
  const fullPassage = getFullCohesivePassage(pack);
  passageContentEl.className = 'det-passage-content';
  passageContentEl.textContent = fullPassage;

  renderRadioOptionsList(q, rightControlsEl);
}

function renderRadioOptionsList(q, rightControlsEl) {
  const chosen = state.answers[q.id] || '';
  const list = document.createElement('div');
  list.className = 'det-mc-list';

  (q.options || []).forEach((opt) => {
    const btn = document.createElement('button');
    btn.type = 'button';
    const isSelected = chosen === opt;
    btn.className = `det-mc-option ${isSelected ? 'selected' : ''}`;
    btn.innerHTML = `
      <span class="det-mc-radio"></span>
      <span>${escapeHtml(opt)}</span>
    `;

    btn.addEventListener('click', () => {
      state.answers[q.id] = opt;
      renderPracticeCard();
    });

    list.appendChild(btn);
  });

  rightControlsEl.innerHTML = '';
  rightControlsEl.appendChild(list);
}

/* ==========================================================================
   PASSAGE HELPERS
   ========================================================================== */
function getCompletedParagraph1(pack) {
  if (pack.paragraph1) return pack.paragraph1;
  const part1Q = pack.questions.find((q) => q.part === 1 || q.type === 'complete_the_sentences');
  if (!part1Q) return '';
  return part1Q.passage.replace(/\{\{(\d+)\}\}/g, (_, num) => {
    const b = part1Q.blanks.find((item) => item.id === Number(num));
    return b ? b.answer : '';
  });
}

function getCorrectConnectingSentence(pack) {
  const part2Q = pack.questions.find((q) => q.part === 2 || q.type === 'complete_the_passage');
  return part2Q ? part2Q.answer : '';
}

function getFullCohesivePassage(pack) {
  const p1 = getCompletedParagraph1(pack);
  const conn = getCorrectConnectingSentence(pack);
  const p2 = pack.paragraph2 || '';
  return [p1, conn, p2].filter(Boolean).join(' ');
}

/* ==========================================================================
   EVALUATION & DUOLINGO FEEDBACK DRAWER
   ========================================================================== */
function checkIfQuestionAnswered(q) {
  if (!q) return false;
  if (q.type === 'complete_the_sentences') {
    const qAns = state.answers[q.id] || {};
    return q.blanks.every((b) => Boolean(qAns[b.id]));
  }
  return Boolean(state.answers[q.id]);
}

function gradeCurrentQuestion() {
  const pack = state.activePack;
  const q = pack.questions[state.currentQuestionIndex];
  if (!q) return;

  state.isGradedCurrentQuestion = true;
  state.showTryAgainColors = false;

  if (q.type === 'complete_the_sentences') {
    const qAns = state.answers[q.id] || {};
    let correctCount = 0;
    const tokensHtml = q.blanks
      .map((b) => {
        const userWord = (qAns[b.id] || '').trim();
        const isMatch = userWord.toLowerCase() === b.answer.trim().toLowerCase();
        if (isMatch) correctCount += 1;
        return `<span class="answer-token ${isMatch ? '' : 'was-wrong'}">${b.id}. ${escapeHtml(
          b.answer
        )}</span>`;
      })
      .join('  ');

    if (correctCount === q.blanks.length) {
      state.feedbackState = {
        status: 'correct',
        title: 'Great job!',
        isPerfect: true,
        detailsHtml: '',
      };
    } else if (correctCount > 0) {
      state.feedbackState = {
        status: 'partially-correct',
        title: 'Partially correct',
        isPerfect: false,
        sublabel: 'Correct Answer:',
        detailsHtml: tokensHtml,
      };
    } else {
      state.feedbackState = {
        status: 'incorrect',
        title: 'Incorrect',
        isPerfect: false,
        sublabel: 'Correct Answer:',
        detailsHtml: tokensHtml,
      };
    }
  } else if (q.type === 'highlight_the_answer') {
    const userSel = (state.answers[q.id] || '').trim().toLowerCase();
    const target = q.answer.trim().toLowerCase();
    const isCorrect =
      userSel.includes(target) ||
      target.includes(userSel) ||
      (q.acceptableSubstrings || []).some((sub) => userSel.includes(sub.toLowerCase()));

    if (isCorrect) {
      state.feedbackState = {
        status: 'correct',
        title: 'Great job!',
        isPerfect: true,
        detailsHtml: '',
      };
    } else {
      state.feedbackState = {
        status: 'incorrect',
        title: 'Incorrect',
        isPerfect: false,
        sublabel: 'Correct Answer:',
        detailsHtml: `<span class="det-feedback-words">${escapeHtml(q.answer)}</span>`,
      };
    }
  } else {
    const userChoice = (state.answers[q.id] || '').trim().toLowerCase();
    const target = q.answer.trim().toLowerCase();
    const isCorrect = userChoice === target;

    if (isCorrect) {
      state.feedbackState = {
        status: 'correct',
        title: 'Great job!',
        isPerfect: true,
        detailsHtml: '',
      };
    } else {
      state.feedbackState = {
        status: 'incorrect',
        title: 'Incorrect',
        isPerfect: false,
        sublabel: 'Correct Answer:',
        detailsHtml: `<span class="det-feedback-words">${escapeHtml(q.answer)}</span>`,
      };
    }
  }

  renderPracticeCard();
}

function renderFeedbackDrawer(fb) {
  const drawer = document.getElementById('det-feedback-drawer');
  drawer.className = `det-feedback-drawer state-${fb.status}`;

  let iconSvg = '';
  if (fb.status === 'correct') {
    iconSvg = `
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="11" fill="var(--duo-green-text)"/>
        <path d="M7 12.5L10.5 16L17 8.5" stroke="#FFFFFF" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    `;
  } else if (fb.status === 'partially-correct') {
    iconSvg = `
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="11" fill="var(--duo-yellow-text)"/>
        <path d="M7 12.5L10.5 16L17 8.5" stroke="#FFFFFF" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    `;
  } else {
    iconSvg = `
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="11" fill="var(--duo-red-text)"/>
        <path d="M8 8L16 16M16 8L8 16" stroke="#FFFFFF" stroke-width="2.5" stroke-linecap="round"/>
      </svg>
    `;
  }

  // Buttons: If correct, show CONTINUE. If wrong, give TRY AGAIN and NEXT QUESTION options
  let buttonsHtml = '';
  if (fb.isPerfect) {
    buttonsHtml = `
      <button type="button" id="btn-feedback-continue" class="det-feedback-btn btn-feedback-green">
        CONTINUE
      </button>
    `;
  } else {
    const tryAgainClass =
      fb.status === 'partially-correct' ? 'btn-feedback-yellow' : 'btn-feedback-red';
    buttonsHtml = `
      <div class="det-feedback-buttons">
        <button type="button" id="btn-feedback-try-again" class="det-feedback-btn ${tryAgainClass}">
          TRY AGAIN
        </button>
        <button type="button" id="btn-feedback-continue" class="det-feedback-btn btn-feedback-outline">
          NEXT QUESTION →
        </button>
      </div>
    `;
  }

  drawer.innerHTML = `
    <div class="det-feedback-left">
      <div class="det-feedback-heading">
        ${iconSvg}
        <span>${escapeHtml(fb.title)}</span>
      </div>
      ${
        fb.sublabel
          ? `<div class="det-feedback-answers">
              <div class="det-feedback-sublabel">${escapeHtml(fb.sublabel)}</div>
              <div>${fb.detailsHtml}</div>
            </div>`
          : ''
      }
    </div>
    ${buttonsHtml}
  `;

  document.getElementById('btn-feedback-continue')?.addEventListener('click', () => {
    advanceToNextQuestion();
  });

  document.getElementById('btn-feedback-try-again')?.addEventListener('click', () => {
    // Dismiss drawer, reveal which blanks were right/wrong in passage, and let user fix them
    state.isGradedCurrentQuestion = false;
    state.feedbackState = null;
    state.showTryAgainColors = true;
    renderPracticeCard();
  });
}

function advanceToNextQuestion() {
  const pack = state.activePack;
  state.isGradedCurrentQuestion = false;
  state.feedbackState = null;
  state.showTryAgainColors = false;

  if (state.currentQuestionIndex < pack.questions.length - 1) {
    state.currentQuestionIndex += 1;
    const nextQ = pack.questions[state.currentQuestionIndex];
    if (nextQ.type === 'complete_the_sentences' && nextQ.blanks?.length) {
      state.openBlankId = nextQ.blanks[0].id;
      state.focusedOptionIndex = 0;
    } else {
      state.openBlankId = null;
    }
    renderPracticeCard();
  } else {
    showFinalResultsScreen();
  }
}

/* ==========================================================================
   FINAL RESULTS SUMMARY OVERLAY
   ========================================================================== */
function showFinalResultsScreen() {
  stopTimer();
  state.showFinalResults = true;
  renderPracticeCard();
}

function renderFinalResultsOverlay(pack) {
  let overlay = document.getElementById('det-final-results');
  if (!overlay) {
    overlay = document.createElement('div');
    overlay.id = 'det-final-results';
    overlay.className = 'det-final-results';
    document.querySelector('.det-card').appendChild(overlay);
  }

  overlay.style.display = 'flex';
  overlay.hidden = false;

  let totalQuestions = pack.questions.length;
  let correctQuestions = 0;

  const breakdownHtml = pack.questions
    .map((q, idx) => {
      let isCorrect = false;
      let userDisplay = '';

      if (q.type === 'complete_the_sentences') {
        const qAns = state.answers[q.id] || {};
        const allRight = q.blanks.every(
          (b) => (qAns[b.id] || '').trim().toLowerCase() === b.answer.trim().toLowerCase()
        );
        isCorrect = allRight;
        userDisplay = `${
          q.blanks.filter(
            (b) => (qAns[b.id] || '').trim().toLowerCase() === b.answer.trim().toLowerCase()
          ).length
        } / ${q.blanks.length} blanks correct`;
      } else if (q.type === 'highlight_the_answer') {
        const userSel = (state.answers[q.id] || '').trim().toLowerCase();
        const target = q.answer.trim().toLowerCase();
        isCorrect =
          userSel.includes(target) ||
          target.includes(userSel) ||
          (q.acceptableSubstrings || []).some((sub) => userSel.includes(sub.toLowerCase()));
        userDisplay = `Highlighted: "${escapeHtml(state.answers[q.id] || '(none)')}"`;
      } else {
        isCorrect =
          (state.answers[q.id] || '').trim().toLowerCase() === q.answer.trim().toLowerCase();
        userDisplay = `Selected: "${escapeHtml(state.answers[q.id] || '(none)')}"`;
      }

      if (isCorrect) correctQuestions += 1;

      return `
        <div class="breakdown-item">
          <div class="breakdown-item-top">
            <strong>Question ${idx + 1} (${q.type.replace(/_/g, ' ')})</strong>
            <span style="font-weight: 800; color: ${isCorrect ? 'var(--duo-green-text)' : 'var(--duo-red-text)'};">
              ${isCorrect ? '✓ Correct' : '✕ Incorrect'}
            </span>
          </div>
          <div style="font-size: 13.5px; color: var(--det-text-secondary); margin-bottom: 4px;">
            ${userDisplay}
          </div>
          ${
            q.explanation
              ? `<div style="font-size: 13px; color: #555555; background: #fafafa; padding: 8px 12px; border-radius: 8px; margin-top: 6px;">
                  💡 <strong>Explanation:</strong> ${escapeHtml(q.explanation)}
                </div>`
              : ''
          }
        </div>
      `;
    })
    .join('');

  const accuracy = Math.round((correctQuestions / totalQuestions) * 100);
  const estScore = Math.round(10 + (accuracy / 100) * 150);

  overlay.innerHTML = `
    <div class="results-hero-card">
      <div class="brand-badge" style="margin: 0 auto 16px; width: 48px; height: 48px; font-size: 26px;">🦉</div>
      <h2 class="results-hero-title">Practice Set Completed!</h2>
      <div class="results-stats-row">
        <div class="stat-box">
          <div class="stat-val">${accuracy}%</div>
          <div class="stat-label">Accuracy</div>
        </div>
        <div class="stat-box">
          <div class="stat-val">${correctQuestions}/${totalQuestions}</div>
          <div class="stat-label">Questions</div>
        </div>
        <div class="stat-box">
          <div class="stat-val">${estScore}</div>
          <div class="stat-label">Est. DET Score</div>
        </div>
      </div>
      <div style="display: flex; justify-content: center; gap: 12px; margin-top: 24px;">
        <button type="button" class="btn-duo btn-duo-outline" id="btn-results-retry">Retry This Set</button>
        <button type="button" class="btn-duo btn-duo-green" id="btn-results-hub">Return to Section Hub</button>
      </div>
    </div>
    <div class="results-breakdown-list">
      <h3 style="font-family: var(--font-display); font-size: 18px; font-weight: 800; margin-bottom: 8px;">Detailed Question Breakdown</h3>
      ${breakdownHtml}
    </div>
  `;

  document.getElementById('btn-results-retry')?.addEventListener('click', () => {
    hideFinalResultsOverlay();
    startPracticeSession(state.activePackId);
  });
  document.getElementById('btn-results-hub')?.addEventListener('click', () => {
    hideFinalResultsOverlay();
    switchView('hub');
  });
}

function hideFinalResultsOverlay() {
  state.showFinalResults = false;
  const overlay = document.getElementById('det-final-results');
  if (overlay) {
    overlay.style.display = 'none';
    overlay.hidden = true;
    overlay.remove();
  }
}

/* ==========================================================================
   EVENT HANDLERS & MODAL BINDINGS
   ========================================================================== */
function bindGlobalEvents() {
  document.getElementById('btn-header-start-first')?.addEventListener('click', () => {
    startPracticeSession(state.activePackId);
  });

  document.getElementById('det-close-btn')?.addEventListener('click', () => {
    switchView('hub');
  });

  document.getElementById('det-submit-btn')?.addEventListener('click', () => {
    gradeCurrentQuestion();
  });

  const openJsonModalBtns = [
    document.getElementById('btn-nav-load-json'),
    document.getElementById('btn-header-load-json'),
  ];
  openJsonModalBtns.forEach((btn) => {
    btn?.addEventListener('click', () => openModal('json-modal'));
  });

  const openPromptModalBtns = [
    document.getElementById('btn-nav-llm-prompt'),
    document.getElementById('btn-hero-llm-prompt'),
  ];
  openPromptModalBtns.forEach((btn) => {
    btn?.addEventListener('click', () => {
      const promptBox = document.getElementById('llm-prompt-textarea');
      if (promptBox) promptBox.value = LLM_PROMPT_TEMPLATE;
      openModal('prompt-modal');
    });
  });

  document.getElementById('btn-share-pack')?.addEventListener('click', () => {
    shareCurrentPack();
  });

  document.querySelectorAll('[data-close-modal]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const targetId = btn.getAttribute('data-close-modal');
      closeModal(targetId);
    });
  });

  const fileInput = document.getElementById('json-file-input');
  const dropzone = document.getElementById('json-dropzone');
  const jsonTextarea = document.getElementById('json-paste-textarea');

  dropzone?.addEventListener('click', () => fileInput?.click());
  dropzone?.addEventListener('dragover', (e) => {
    e.preventDefault();
    dropzone.classList.add('dragover');
  });
  dropzone?.addEventListener('dragleave', () => dropzone.classList.remove('dragover'));
  dropzone?.addEventListener('drop', (e) => {
    e.preventDefault();
    dropzone.classList.remove('dragover');
    const file = e.dataTransfer?.files?.[0];
    if (file) readUploadedJsonFile(file);
  });

  fileInput?.addEventListener('change', (e) => {
    const file = e.target.files?.[0];
    if (file) readUploadedJsonFile(file);
  });

  document.getElementById('btn-confirm-load-json')?.addEventListener('click', () => {
    const rawText = jsonTextarea?.value?.trim();
    if (!rawText) {
      showModalError('Please paste JSON content or upload a .json file first.');
      return;
    }
    try {
      const pack = normalizeQuestionPack(rawText);
      registerPackInMemory(pack, true);
      state.activePackId = pack.id;
      closeModal('json-modal');
      renderHub();
      startPracticeSession(pack.id);
      showToast(`Loaded "${pack.title}" (${pack.questions.length} questions)!`);
    } catch (err) {
      showModalError(`Invalid JSON format: ${err.message}`);
    }
  });

  document.getElementById('btn-copy-llm-prompt')?.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(LLM_PROMPT_TEMPLATE);
      showToast('Copied LLM Prompt to clipboard!');
    } catch {
      const box = document.getElementById('llm-prompt-textarea');
      box?.select();
      document.execCommand('copy');
      showToast('Copied LLM Prompt to clipboard!');
    }
  });
}

function readUploadedJsonFile(file) {
  const reader = new FileReader();
  reader.onload = (event) => {
    const content = String(event.target?.result || '');
    const textarea = document.getElementById('json-paste-textarea');
    if (textarea) textarea.value = content;
    try {
      const fallbackName = file.name.replace(/\.json$/i, '');
      const pack = normalizeQuestionPack(content, fallbackName);
      registerPackInMemory(pack, true);
      state.activePackId = pack.id;
      closeModal('json-modal');
      renderHub();
      startPracticeSession(pack.id);
      showToast(`Loaded "${pack.title}" from ${file.name}!`);
    } catch (err) {
      showModalError(`Error in ${file.name}: ${err.message}`);
    }
  };
  reader.readAsText(file);
}

function showModalError(msg) {
  const errEl = document.getElementById('json-modal-error');
  if (!errEl) return;
  errEl.hidden = false;
  errEl.textContent = msg;
}

function openModal(id) {
  const modal = document.getElementById(id);
  if (modal) {
    modal.style.display = 'flex';
    modal.hidden = false;
    const errEl = document.getElementById('json-modal-error');
    if (errEl) errEl.hidden = true;
  }
}

function closeModal(id) {
  const modal = document.getElementById(id);
  if (modal) {
    modal.style.display = 'none';
    modal.hidden = true;
  }
}

async function shareCurrentPack() {
  const pack = await ensurePackLoaded(state.activePackId);
  const url = new URL(window.location.href);
  url.search = '';

  const isBuiltin = BUILTIN_MANIFEST.packs.some((p) => p.id === pack.id);
  if (isBuiltin) {
    url.searchParams.set('pack', pack.id);
    url.searchParams.set('view', 'practice');
  } else {
    const encoded = btoa(unescape(encodeURIComponent(JSON.stringify(pack))));
    url.searchParams.set('data', encoded);
  }

  try {
    await navigator.clipboard.writeText(url.toString());
    showToast('Shareable link copied to clipboard! Send it to your friend.');
  } catch {
    showToast('Share URL: ' + url.toString());
  }
}

let toastTimeout = null;
function showToast(message) {
  const toast = document.getElementById('toast-notification');
  if (!toast) return;
  toast.textContent = message;
  toast.style.display = 'block';
  toast.hidden = false;
  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => {
    toast.style.display = 'none';
    toast.hidden = true;
  }, 3600);
}

function escapeHtml(str) {
  return String(str ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

if (typeof window !== 'undefined') {
  window.DuoPrep = {
    state,
    initApp,
    startPracticeSession,
    switchView,
    normalizeQuestionPack,
    stopTimer,
    gradeCurrentQuestion,
    advanceToNextQuestion,
    showFinalResultsScreen,
    hideFinalResultsOverlay,
    renderPracticeCard,
    renderHub,
  };
}

if (typeof document !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initApp);
  } else {
    initApp();
  }
}
