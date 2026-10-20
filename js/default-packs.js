// Fallback bundled question sets so the app works both on GitHub Pages (via fetch)
// and when opened directly from a local folder (file:// protocol).

export const BUILTIN_MANIFEST = {
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

export const FALLBACK_PACKS = {
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

export const LLM_PROMPT_TEMPLATE = `You are an expert test-prep content creator for the Duolingo English Test (DET) "Interactive Reading" section.

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
4. **Answer Randomization**: In the \`options\` arrays, do NOT always place the correct answer as the first option. Distribute correct answers across varying positions (first, middle, last).

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
