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
};

export const UPCOMING_SECTIONS = [
  {
    id: 'interactive-reading',
    name: 'Interactive Reading',
    status: 'live',
    badgeText: 'Ready to Practice',
    icon: '📖',
    iconBg: '#d7ffb8',
    summary:
      'Part 1: 6~7 cloze words. Part 2: 1 connecting sentence. Part 3: 2 highlights, main idea & best title.',
    footerText: 'Launch Practice →',
  },
  {
    id: 'read-and-complete',
    name: 'Read and Complete',
    status: 'soon',
    badgeText: 'Planned Module',
    icon: '🔤',
    iconBg: '#ddf4ff',
    summary:
      'Type the missing letters to complete damaged words within a short academic paragraph (3:00 timer).',
    footerText: 'JSON Schema Planned',
  },
  {
    id: 'read-and-select',
    name: 'Read and Select',
    status: 'soon',
    badgeText: 'Planned Module',
    icon: '✅',
    iconBg: '#fff5d6',
    summary:
      'Decide whether each displayed English word is a real dictionary word or a pseudoword within 5 seconds.',
    footerText: 'JSON Schema Planned',
  },
  {
    id: 'listen-and-type',
    name: 'Listen and Type',
    status: 'soon',
    badgeText: 'Planned Module',
    icon: '🎧',
    iconBg: '#f3e5ff',
    summary:
      'Listen to a spoken statement (up to 3 replays) and transcribe the exact sentence within 60 seconds.',
    footerText: 'JSON Schema Planned',
  },
  {
    id: 'interactive-listening',
    name: 'Interactive Listening',
    status: 'soon',
    badgeText: 'Planned Module',
    icon: '💬',
    iconBg: '#ddf4ff',
    summary:
      'Participate in an academic conversation with a professor or peer, then write a 75-second summary.',
    footerText: 'JSON Schema Planned',
  },
  {
    id: 'write-about-the-photo',
    name: 'Write About the Photo',
    status: 'soon',
    badgeText: 'Planned Module',
    icon: '🖼️',
    iconBg: '#ffdfe0',
    summary:
      'Write a descriptive paragraph about an image in 60 seconds with word-count and rubric feedback.',
    footerText: 'JSON Schema Planned',
  },
  {
    id: 'interactive-writing',
    name: 'Interactive Writing',
    status: 'soon',
    badgeText: 'Planned Module',
    icon: '✍️',
    iconBg: '#fff5d6',
    summary:
      'Respond to a prompt for 5 minutes, then write a follow-up response for 3 minutes addressing a new angle.',
    footerText: 'JSON Schema Planned',
  },
  {
    id: 'speaking-tasks',
    name: 'Read / Listen, Then Speak',
    status: 'soon',
    badgeText: 'Planned Module',
    icon: '🎙️',
    iconBg: '#f3e5ff',
    summary:
      'Record 90-second spoken responses to written or audio prompts with local audio playback and self-grading.',
    footerText: 'JSON Schema Planned',
  },
];

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
