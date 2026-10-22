// Fallback bundled question sets so the app works both on GitHub Pages (via fetch)
// and when opened directly from a local folder (file:// protocol).

const SECTION_META = {
  'interactive-reading': {
    name: 'Interactive Reading',
    icon: '',
    skill: 'reading',
    badge: 'Interactive Reading',
    description: 'Multi-part reading comprehension matching the 6-question DET format.'
  },
  'fill-in-the-blank': {
    name: 'Fill in the Blank',
    icon: '',
    skill: 'reading',
    badge: 'Read & Complete',
    description: 'C-Test letter-box completion for passages and single sentences.'
  },
  'read-and-select': {
    name: 'Read and Select',
    icon: '',
    skill: 'reading',
    badge: 'Read & Select',
    description: 'Distinguish real English vocabulary from plausible pseudo-words.'
  },
  'listen-and-type': {
    name: 'Listen and Type',
    icon: '',
    skill: 'listening',
    badge: 'Listen & Type',
    description: 'Listen to spoken statements with male & female voices and type what you hear.'
  }
};

const BUILTIN_MANIFEST = {
  "packs": [
    {
      "id": "firefighters-screenshot",
      "title": "Firefighters: Complete Interactive Reading Set",
      "description": "Authentic Duolingo English Test set matching reference screenshots: Part 1 cloze (9 blanks), Part 2 connecting sentence, and Part 3 (2 highlights, main idea, best title).",
      "section": "interactive-reading",
      "difficulty": "B2 • Intermediate",
      "questionCount": 6,
      "timeLimitSeconds": 458,
      "file": "questions/firefighters-screenshot.json"
    },
    {
      "id": "full-interactive-reading",
      "title": "Urban Ecology: Complete Interactive Reading Set",
      "description": "Full 3-part DET Interactive Reading: Part 1 cloze (6 blanks), Part 2 connecting sentence, and Part 3 (2 highlights, main idea, best title).",
      "section": "interactive-reading",
      "difficulty": "B2–C1 • Upper-Intermediate",
      "questionCount": 6,
      "timeLimitSeconds": 480,
      "file": "questions/full-interactive-reading.json"
    },
    {
      "id": "science-technology-pack",
      "title": "Sleep & Memory: Complete Interactive Reading Set",
      "description": "Advanced C1 academic practice set covering neuroscience with Part 1 cloze (6 blanks), Part 2 connecting sentence, and Part 3 (2 highlights, main idea, best title).",
      "section": "interactive-reading",
      "difficulty": "C1 • Advanced",
      "questionCount": 6,
      "timeLimitSeconds": 480,
      "file": "questions/science-technology-pack.json"
    },
    {
      "id": "fitb-power-of-determination",
      "title": "The Power of Determination (Passage C-Test)",
      "description": "Complete the missing half of words in this passage about grit and persistence (matched to Fill in blank long screenshot).",
      "section": "fill-in-the-blank",
      "difficulty": "B2 • Upper-Intermediate",
      "questionCount": 15,
      "timeLimitSeconds": 180,
      "file": "questions/fitb-power-of-determination.json"
    },
    {
      "id": "fitb-daily-expressions",
      "title": "Daily Expressions & Collocations (Sentence Set)",
      "description": "Complete each sentence with the correct missing word (matched to Fill in the blank screenshot).",
      "section": "fill-in-the-blank",
      "difficulty": "B1 • Intermediate",
      "questionCount": 6,
      "timeLimitSeconds": 120,
      "file": "questions/fitb-daily-expressions.json"
    },
    {
      "id": "fitb-history-of-printing",
      "title": "The Printing Revolution (Academic C-Test)",
      "description": "Scholarly C-Test text exploring how Gutenberg's movable-type press democratized knowledge across Europe.",
      "section": "fill-in-the-blank",
      "difficulty": "C1 • Advanced",
      "questionCount": 14,
      "timeLimitSeconds": 180,
      "file": "questions/fitb-history-of-printing.json"
    },
    {
      "id": "read-and-select-b2c1",
      "title": "Academic Vocabulary: Real vs Pseudo Words",
      "description": "Evaluate 18 words to determine which are genuine English words and which are invented pseudo-words (matched to Read and Select screenshot).",
      "section": "read-and-select",
      "difficulty": "B2–C1 • Upper-Intermediate",
      "questionCount": 18,
      "timeLimitSeconds": 90,
      "file": "questions/read-and-select-b2c1.json"
    },
    {
      "id": "read-and-select-c1c2",
      "title": "Advanced Scientific & Humanities Lexicon",
      "description": "High-level CEFR C1/C2 vocabulary distinguishing legitimate scholarly terms from deceptive morphological inventions.",
      "section": "read-and-select",
      "difficulty": "C1–C2 • Advanced",
      "questionCount": 18,
      "timeLimitSeconds": 90,
      "file": "questions/read-and-select-c1c2.json"
    },
    {
      "id": "listen-and-type-b1b2",
      "title": "Campus Life & Daily Conversations (Listen and Type)",
      "description": "Listen to spoken English statements spoken by male and female voices and transcribe what you hear with up to 2 replays.",
      "section": "listen-and-type",
      "difficulty": "B1–B2 • Intermediate",
      "questionCount": 5,
      "timeLimitSeconds": 300,
      "file": "questions/listen-and-type-b1b2.json"
    },
    {
      "id": "listen-and-type-c1c2",
      "title": "Academic Lectures & Scientific Concepts (Listen and Type)",
      "description": "High-level scholarly statements spoken by alternating male and female voices covering science, history, and economics.",
      "section": "listen-and-type",
      "difficulty": "C1–C2 • Advanced",
      "questionCount": 5,
      "timeLimitSeconds": 300,
      "file": "questions/listen-and-type-c1c2.json"
    }
  ]
};

const FALLBACK_PACKS = {
  "firefighters-screenshot": {
    "id": "firefighters-screenshot",
    "title": "Firefighters: Complete Interactive Reading Set",
    "section": "interactive-reading",
    "difficulty": "B2 • Intermediate",
    "timeLimitSeconds": 458,
    "paragraph1": "Firefighters are the people who put out fires on a nearly daily basis. They work for fire departments, which are organizations of trained professionals that keep the community safe from fires. When a fire breaks out, firefighters enter buildings to look for people and pets, rescue them, and put out the fire to prevent it from spreading. They also conduct fire drills and inspections to keep businesses and agencies safe.",
    "paragraph2": "They must be physically fit and must be able to work in harsh conditions and difficult situations. In addition to responding to fires, firefighters often help in situations that require medical attention, such as automobile accidents and gas emergencies. In addition to physical skills and knowledge, firefighters have to have strong social skills, because they must often interact with people during stressful situations.",
    "questions": [
      {
        "id": "part1-cloze",
        "part": 1,
        "type": "complete_the_sentences",
        "prompt": "Select the best option for each missing word",
        "passageTitle": "PASSAGE",
        "passage": "Firefighters are the people who put out fires on a {{1}} daily basis. They work for fire departments, which {{2}} organizations of trained professionals that keep the community {{3}} from fires. When a fire {{4}} out, firefighters enter buildings to look {{5}} people and pets, rescue them, and {{6}} out the fire to prevent {{7}} from spreading. They also conduct {{8}} drills and inspections to {{9}} businesses and agencies safe.",
        "blanks": [
          {
            "id": 1,
            "options": [
              "nearly",
              "roughly",
              "practically",
              "different",
              "non"
            ],
            "answer": "nearly",
            "explanation": "'On a nearly daily basis' is the standard adverbial collocation modifying 'daily'."
          },
          {
            "id": 2,
            "options": [
              "are",
              "means",
              "have",
              "being",
              "make"
            ],
            "answer": "are",
            "explanation": "The relative clause 'which are organizations...' requires the present tense plural verb 'are' agreeing with 'fire departments'."
          },
          {
            "id": 3,
            "options": [
              "safe",
              "far",
              "clear",
              "away",
              "open"
            ],
            "answer": "safe",
            "explanation": "'Keep [someone] safe from fires' is the fixed collocation meaning to protect from danger."
          },
          {
            "id": 4,
            "options": [
              "breaks",
              "fires",
              "comes",
              "turns",
              "falls"
            ],
            "answer": "breaks",
            "explanation": "The phrasal verb 'break out' means to start suddenly (especially for fires or crises)."
          },
          {
            "id": 5,
            "options": [
              "for",
              "their",
              "into",
              "over",
              "after"
            ],
            "answer": "for",
            "explanation": "'Look for' means to search for people and pets inside burning buildings."
          },
          {
            "id": 6,
            "options": [
              "put",
              "fire",
              "take",
              "set",
              "call"
            ],
            "answer": "put",
            "explanation": "'Put out the fire' is the phrasal verb meaning to extinguish."
          },
          {
            "id": 7,
            "options": [
              "it",
              "that",
              "them",
              "which",
              "this"
            ],
            "answer": "it",
            "explanation": "The pronoun 'it' refers back to the singular noun 'the fire'."
          },
          {
            "id": 8,
            "options": [
              "fire",
              "regular",
              "sudden",
              "casual",
              "former"
            ],
            "answer": "fire",
            "explanation": "'Fire drills and inspections' is the specific compound noun phrase for routine emergency drills."
          },
          {
            "id": 9,
            "options": [
              "keep",
              "see",
              "make",
              "hold",
              "stay"
            ],
            "answer": "keep",
            "explanation": "'Keep businesses and agencies safe' means maintaining safety."
          }
        ]
      },
      {
        "id": "part2-connecting-sentence",
        "part": 2,
        "type": "complete_the_passage",
        "prompt": "Select the best sentence to complete the passage",
        "passageTitle": "PASSAGE",
        "options": [
          "Fire protection is the chief duty of a fire department.",
          "Life in a fire department is not always exciting, but it is rewarding.",
          "Firefighters must have a variety of skills and knowledge.",
          "A fire detection system monitors for smoke, heat, or movement.",
          "Firefighters need extensive training before they can find a job."
        ],
        "answer": "Firefighters must have a variety of skills and knowledge.",
        "explanation": "This sentence perfectly bridges Paragraph 1 (duties of putting out fires and inspections) and Paragraph 2 (physical fitness, medical assistance, and social skills)."
      },
      {
        "id": "part3-highlight-1",
        "part": 3,
        "type": "highlight_the_answer",
        "prompt": "Highlight text in the passage to answer the question below",
        "question": "In addition to knowledge and physical fitness, what other skills are important for firefighters?",
        "passageTitle": "PASSAGE",
        "answer": "strong social skills",
        "acceptableSubstrings": [
          "strong social skills",
          "social skills"
        ],
        "explanation": "The last sentence explicitly states: 'firefighters have to have strong social skills, because they must often interact with people during stressful situations.'"
      },
      {
        "id": "part3-highlight-2",
        "part": 3,
        "type": "highlight_the_answer",
        "prompt": "Highlight text in the passage to answer the question below",
        "question": "What non-fire emergencies do firefighters often respond to?",
        "passageTitle": "PASSAGE",
        "answer": "automobile accidents and gas emergencies",
        "acceptableSubstrings": [
          "automobile accidents and gas emergencies",
          "situations that require medical attention, such as automobile accidents and gas emergencies",
          "medical attention, such as automobile accidents and gas emergencies"
        ],
        "explanation": "Paragraph 2 states that firefighters help in 'situations that require medical attention, such as automobile accidents and gas emergencies.'"
      },
      {
        "id": "part3-main-idea",
        "part": 3,
        "type": "identify_the_idea",
        "prompt": "Select the idea that is expressed in the passage",
        "passageTitle": "PASSAGE",
        "options": [
          "Firefighting requires diverse emergency abilities spanning physical fitness, medical aid, and social communication.",
          "Fire departments focus solely on extinguishing structural blazes and do not assist in medical crises.",
          "Social skills are much more important for a firefighter than physical endurance during emergencies.",
          "Automobile accident response has completely replaced building fire prevention in modern cities."
        ],
        "answer": "Firefighting requires diverse emergency abilities spanning physical fitness, medical aid, and social communication.",
        "explanation": "The entire passage describes how firefighters extinguish blazes, conduct inspections, provide medical emergency aid, and require physical fitness and social communication skills."
      },
      {
        "id": "part3-best-title",
        "part": 3,
        "type": "title_the_passage",
        "prompt": "Select the best title for the passage",
        "passageTitle": "PASSAGE",
        "options": [
          "The Multifaceted Roles and Skills of Modern Firefighters",
          "A Brief History of Municipal Fire Trucks and Hydrants",
          "Why Social Work Is the Most Dangerous Occupation in Cities",
          "How to Prevent Automobile Accidents and Gas Emergencies"
        ],
        "answer": "The Multifaceted Roles and Skills of Modern Firefighters",
        "explanation": "This title encompasses both the various duties (fires, inspections, medical calls) and the varied skills (physical, technical, social) discussed in the text."
      }
    ]
  },
  "full-interactive-reading": {
    "id": "full-interactive-reading",
    "title": "Urban Ecology: Complete Interactive Reading Set",
    "section": "interactive-reading",
    "difficulty": "B2–C1 • Upper-Intermediate",
    "timeLimitSeconds": 480,
    "paragraph1": "As metropolitan areas expand across the globe, concrete pavements and dark rooftops absorb significant amounts of solar radiation, creating what scientists call the urban heat island effect. Downtown neighborhoods often experience temperatures several degrees higher than surrounding rural landscapes, particularly after sunset. To counteract this phenomenon, urban planners have begun integrating green roofs and tree canopies into municipal building codes. Vegetated surfaces cool the surrounding air through evapotranspiration, a natural process in which plants release water vapor through their leaves. Besides lowering summer cooling costs for residents, these green corridors provide vital habitats for migratory birds and native pollinators.",
    "paragraph2": "Researchers monitoring retrofitted commercial districts in Singapore and Toronto found that buildings with dense rooftop vegetation reduced peak roof membrane temperatures by up to twenty degrees Celsius. Furthermore, the soil layers atop these structures acted as natural sponges during heavy rainstorms, retaining up to seventy percent of stormwater runoff before it could overwhelm municipal drainage pipes.",
    "questions": [
      {
        "id": "ir-step-1",
        "part": 1,
        "type": "complete_the_sentences",
        "prompt": "Select the best option for each missing word",
        "passageTitle": "PASSAGE",
        "passage": "As metropolitan areas expand across the globe, concrete pavements and dark rooftops {{1}} significant amounts of solar radiation, creating what scientists call the urban heat island effect. Downtown neighborhoods often experience temperatures several degrees higher {{2}} surrounding rural landscapes, particularly after sunset. To {{3}} this phenomenon, urban planners have begun integrating green roofs and tree canopies {{4}} municipal building codes. Vegetated surfaces cool the surrounding air {{5}} evapotranspiration, a natural process in which plants release water vapor through their leaves. {{6}} lowering summer cooling costs for residents, these green corridors provide vital habitats for migratory birds and native pollinators.",
        "blanks": [
          {
            "id": 1,
            "options": [
              "absorb",
              "reflect",
              "dissolve",
              "compile",
              "exert"
            ],
            "answer": "absorb",
            "explanation": "Dark surfaces and concrete 'absorb' solar radiation, trapping heat and causing the urban heat island effect."
          },
          {
            "id": 2,
            "options": [
              "than",
              "from",
              "over",
              "as",
              "to"
            ],
            "answer": "than",
            "explanation": "Comparative adjectives like 'higher' take the conjunction/preposition 'than'."
          },
          {
            "id": 3,
            "options": [
              "counteract",
              "accelerate",
              "endorse",
              "provoke",
              "imitate"
            ],
            "answer": "counteract",
            "explanation": "'Counteract' means to act against something in order to reduce its harmful effects."
          },
          {
            "id": 4,
            "options": [
              "into",
              "onto",
              "upon",
              "with",
              "under"
            ],
            "answer": "into",
            "explanation": "'Integrate [something] into [a system/code]' is the standard prepositional collocation."
          },
          {
            "id": 5,
            "options": [
              "through",
              "despite",
              "beneath",
              "beyond",
              "against"
            ],
            "answer": "through",
            "explanation": "'Through' indicates the mechanism or process ('through evapotranspiration') by which cooling occurs."
          },
          {
            "id": 6,
            "options": [
              "Besides",
              "Instead",
              "Whereas",
              "Unless",
              "Otherwise"
            ],
            "answer": "Besides",
            "explanation": "'Besides' + gerund ('lowering') means 'in addition to', linking energy savings with ecological benefits."
          }
        ]
      },
      {
        "id": "ir-step-2",
        "part": 2,
        "type": "complete_the_passage",
        "prompt": "Select the best sentence to complete the passage",
        "passageTitle": "PASSAGE",
        "options": [
          "Empirical field studies from major cities confirm that these botanical interventions yield measurable thermal and hydrological benefits.",
          "Nevertheless, most municipal governments have completely abandoned rooftop gardening projects due to structural collapses.",
          "Migratory birds typically prefer nesting on bare asphalt rooftops where predators cannot hide among shrubs.",
          "Solar radiation levels in rural agricultural valleys have risen faster than those in dense industrial centers."
        ],
        "answer": "Empirical field studies from major cities confirm that these botanical interventions yield measurable thermal and hydrological benefits.",
        "explanation": "The first paragraph introduces green roofs, and the second paragraph provides empirical data on temperature and stormwater reduction."
      },
      {
        "id": "ir-step-3",
        "part": 3,
        "type": "highlight_the_answer",
        "prompt": "Highlight text in the passage to answer the question below",
        "question": "By what biological mechanism do plants cool the air around them?",
        "passageTitle": "PASSAGE",
        "answer": "evapotranspiration, a natural process in which plants release water vapor through their leaves",
        "acceptableSubstrings": [
          "evapotranspiration",
          "release water vapor through their leaves"
        ],
        "explanation": "The first paragraph explicitly defines the cooling mechanism as 'evapotranspiration, a natural process in which plants release water vapor through their leaves'."
      },
      {
        "id": "ir-step-4",
        "part": 3,
        "type": "highlight_the_answer",
        "prompt": "Highlight text in the passage to answer the question below",
        "question": "How do rooftop soil layers assist city infrastructure during severe rainfall?",
        "passageTitle": "PASSAGE",
        "answer": "retaining up to seventy percent of stormwater runoff before it could overwhelm municipal drainage pipes",
        "acceptableSubstrings": [
          "retaining up to seventy percent of stormwater runoff",
          "acted as natural sponges during heavy rainstorms"
        ],
        "explanation": "The final sentence explains that soil layers act as sponges, 'retaining up to seventy percent of stormwater runoff before it could overwhelm municipal drainage pipes'."
      },
      {
        "id": "ir-step-5",
        "part": 3,
        "type": "identify_the_idea",
        "prompt": "Select the idea that is expressed in the passage",
        "passageTitle": "PASSAGE",
        "options": [
          "Incorporating vegetation into urban architecture helps mitigate excess heat, manage rainwater, and support local wildlife.",
          "Replacing all city streets with underground tunnels is the only effective way to eliminate the urban heat island effect.",
          "Rooftop gardens increase building cooling expenses during the summer because damp soil traps solar heat.",
          "Drainage pipes in Toronto and Singapore no longer require maintenance thanks to native pollinator habitats."
        ],
        "answer": "Incorporating vegetation into urban architecture helps mitigate excess heat, manage rainwater, and support local wildlife.",
        "explanation": "The passage synthesizes cooling via evapotranspiration/shade, absorbing stormwater runoff, and creating habitats for wildlife."
      },
      {
        "id": "ir-step-6",
        "part": 3,
        "type": "title_the_passage",
        "prompt": "Select the best title for the passage",
        "passageTitle": "PASSAGE",
        "options": [
          "Cooling Concrete: How Green Architecture Combats Urban Heat and Runoff",
          "A History of Municipal Drainage Engineering in North America",
          "Why Migratory Birds Are Leaving Rural Forests for City Centers",
          "The Chemical Composition of Modern Asphalt and Roofing Materials"
        ],
        "answer": "Cooling Concrete: How Green Architecture Combats Urban Heat and Runoff",
        "explanation": "This title captures the core environmental challenges (heat and runoff) and the architectural solutions analyzed."
      }
    ]
  },
  "science-technology-pack": {
    "id": "science-technology-pack",
    "title": "Sleep & Memory: Complete Interactive Reading Set",
    "section": "interactive-reading",
    "difficulty": "C1 • Advanced",
    "timeLimitSeconds": 480,
    "paragraph1": "Neuroscientists have long recognized that sleep is not merely a passive state of physical rest. During slow-wave sleep, the brain actively transfers newly acquired experiences from the hippocampus to the neocortex for long-term storage. Participants who are deprived of adequate rest after learning a complex motor skill consistently perform worse than those who sleep uninterrupted for eight hours. Consequently, cramming throughout the night prior to an examination often undermines the very cognitive recall students hope to achieve.",
    "paragraph2": "Subsequent neuroimaging investigations suggest that this memory stabilization operates in tandem with targeted synaptic pruning. While restful slumber consolidates critical pathways, non-essential neural associations formed during waking hours are systematically weakened, thereby restoring synaptic homeostasis and preserving cognitive capacity for subsequent learning.",
    "questions": [
      {
        "id": "c1-sleep-cloze",
        "part": 1,
        "type": "complete_the_sentences",
        "prompt": "Select the best option for each missing word",
        "passageTitle": "PASSAGE",
        "passage": "Neuroscientists have long recognized that sleep is {{1}} merely a passive state of physical rest. During slow-wave sleep, the brain actively {{2}} newly acquired experiences from the hippocampus to the neocortex for long-term storage. Participants who are {{3}} of adequate rest after learning a complex motor skill consistently perform worse than {{4}} who sleep uninterrupted for eight hours. Consequently, cramming throughout the night {{5}} an examination often undermines the very cognitive recall students hope to {{6}}.",
        "blanks": [
          {
            "id": 1,
            "options": [
              "not",
              "none",
              "never",
              "neither",
              "nothing"
            ],
            "answer": "not",
            "explanation": "'Not merely' is the correlative adverbial phrase indicating that sleep is more than just passive rest."
          },
          {
            "id": 2,
            "options": [
              "transfers",
              "translates",
              "transcends",
              "transacts",
              "transpires"
            ],
            "answer": "transfers",
            "explanation": "'Transfers [something] from X to Y' accurately describes relaying memory traces between brain regions."
          },
          {
            "id": 3,
            "options": [
              "deprived",
              "denied",
              "deducted",
              "detached",
              "depleted"
            ],
            "answer": "deprived",
            "explanation": "'Deprived of' means prevented from having necessary rest."
          },
          {
            "id": 4,
            "options": [
              "those",
              "them",
              "these",
              "whom",
              "which"
            ],
            "answer": "those",
            "explanation": "'Those who sleep...' is the standard formal demonstrative pronoun referring back to participants."
          },
          {
            "id": 5,
            "options": [
              "prior to",
              "owing to",
              "regardless of",
              "in lieu of",
              "by means of"
            ],
            "answer": "prior to",
            "explanation": "'Prior to' is formal for 'before'."
          },
          {
            "id": 6,
            "options": [
              "achieve",
              "acquire",
              "appease",
              "ascribe",
              "allege"
            ],
            "answer": "achieve",
            "explanation": "'Achieve recall' is the appropriate academic collocation."
          }
        ]
      },
      {
        "id": "c1-sleep-connecting",
        "part": 2,
        "type": "complete_the_passage",
        "prompt": "Select the best sentence to complete the passage",
        "passageTitle": "PASSAGE",
        "options": [
          "Subsequent neuroimaging investigations suggest that this memory stabilization operates in tandem with targeted synaptic pruning.",
          "Medical doctors therefore advise university students to ingest excessive caffeine before midnight.",
          "Hippocampal neurons completely cease electrical firing once slow-wave sleep commences.",
          "Motor skill acquisition is virtually impossible unless learned during childhood."
        ],
        "answer": "Subsequent neuroimaging investigations suggest that this memory stabilization operates in tandem with targeted synaptic pruning.",
        "explanation": "This sentence connects the memory consolidation discussed in Paragraph 1 to the synaptic pruning mechanisms explained in Paragraph 2."
      },
      {
        "id": "c1-sleep-highlight-1",
        "part": 3,
        "type": "highlight_the_answer",
        "prompt": "Highlight text in the passage to answer the question below",
        "question": "To which brain region are memory traces transferred for long-term storage?",
        "passageTitle": "PASSAGE",
        "answer": "neocortex",
        "acceptableSubstrings": [
          "the neocortex",
          "neocortex"
        ],
        "explanation": "Paragraph 1 states that the brain transfers memories 'from the hippocampus to the neocortex for long-term storage.'"
      },
      {
        "id": "c1-sleep-highlight-2",
        "part": 3,
        "type": "highlight_the_answer",
        "prompt": "Highlight text in the passage to answer the question below",
        "question": "What happens to non-essential neural associations during restful slumber?",
        "passageTitle": "PASSAGE",
        "answer": "systematically weakened",
        "acceptableSubstrings": [
          "are systematically weakened",
          "systematically weakened"
        ],
        "explanation": "Paragraph 2 notes that 'non-essential neural associations formed during waking hours are systematically weakened.'"
      },
      {
        "id": "c1-sleep-main-idea",
        "part": 3,
        "type": "identify_the_idea",
        "prompt": "Select the idea that is expressed in the passage",
        "passageTitle": "PASSAGE",
        "options": [
          "Sleep is an active neurological phase that both consolidates vital memories and eliminates superfluous connections.",
          "Cramming without sleep improves examination performance by keeping neural pathways perpetually active.",
          "Synaptic pruning only occurs when an individual is engaged in intense physical exercise.",
          "The hippocampus is the permanent repository for all human long-term memories."
        ],
        "answer": "Sleep is an active neurological phase that both consolidates vital memories and eliminates superfluous connections.",
        "explanation": "The passage details how sleep actively transfers memories to long-term storage while pruning non-essential associations."
      },
      {
        "id": "c1-sleep-title",
        "part": 3,
        "type": "title_the_passage",
        "prompt": "Select the best title for the passage",
        "passageTitle": "PASSAGE",
        "options": [
          "Beyond Rest: The Dual Neurological Work of Sleep in Memory and Pruning",
          "The Economic Costs of Nighttime Examinations in Universities",
          "Why the Human Hippocampus Does Not Require Oxygen During Slumber",
          "A Comprehensive Guide to Improving Athletic Performance Through Diet"
        ],
        "answer": "Beyond Rest: The Dual Neurological Work of Sleep in Memory and Pruning",
        "explanation": "This title accurately reflects the dual active roles of sleep analyzed: memory transfer and synaptic pruning."
      }
    ]
  },
  "fitb-power-of-determination": {
    "id": "fitb-power-of-determination",
    "section": "fill-in-the-blank",
    "title": "The Power of Determination (Passage C-Test)",
    "description": "Complete the missing half of words in this passage about grit and persistence (matched to Fill in blank long screenshot).",
    "difficulty": "B2 • Upper-Intermediate",
    "timeLimitSeconds": 180,
    "passageTitle": "The Power of Determination",
    "prompt": "Complete the text with the correct words",
    "format": "passage",
    "text": "Success is not as important as determination. Even {{i|f}} you {{fa|il}}, {{y|ou}} should {{a|ct}} to {{wo|rk}} your {{har|d}} to {{so|lve}} a {{pro|blem}}. In {{t|he}} end, that {{sk|ill}} will {{ta|ke}} you {{far|ther}} than {{succe|ss}} at {{every|thing}} you {{fa|ce}}. Success often requires some luck, but determination and hard work are within your control.",
    "explanation": "Standard Duolingo C-Test rules: starting from sentence two, missing letters must be supplied based on contextual and grammatical clues."
  },
  "fitb-daily-expressions": {
    "id": "fitb-daily-expressions",
    "section": "fill-in-the-blank",
    "title": "Daily Expressions & Collocations (Sentence Set)",
    "description": "Complete each sentence with the correct missing word (matched to Fill in the blank screenshot).",
    "difficulty": "B1 • Intermediate",
    "timeLimitSeconds": 120,
    "format": "sentences",
    "questions": [
      {
        "id": "fitb-s1",
        "prompt": "Complete the sentence with the correct word",
        "timeLimitSeconds": 20,
        "sentence": "Waking up to the sound of birds outside my window puts me in a good {{mo|od}}.",
        "prefix": "mo",
        "missing": "od",
        "fullWord": "mood",
        "explanation": "'in a good mood' is an English idiom meaning feeling cheerful, happy, and optimistic."
      },
      {
        "id": "fitb-s2",
        "prompt": "Complete the sentence with the correct word",
        "timeLimitSeconds": 20,
        "sentence": "The local festival is a great opportunity to {{cele|brate}} community traditions.",
        "prefix": "cele",
        "missing": "brate",
        "fullWord": "celebrate",
        "explanation": "'celebrate' means to acknowledge a significant day or event with a social gathering."
      },
      {
        "id": "fitb-s3",
        "prompt": "Complete the sentence with the correct word",
        "timeLimitSeconds": 20,
        "sentence": "She decided to {{pur|sue}} a career in biomedical engineering.",
        "prefix": "pur",
        "missing": "sue",
        "fullWord": "pursue",
        "explanation": "'pursue' means to follow or try to achieve something over a period of time."
      },
      {
        "id": "fitb-s4",
        "prompt": "Complete the sentence with the correct word",
        "timeLimitSeconds": 20,
        "sentence": "The severe winter weather caused a long {{de|lay}} in train service.",
        "prefix": "de",
        "missing": "lay",
        "fullWord": "delay",
        "explanation": "'delay' refers to a period of time by which something is late or postponed."
      },
      {
        "id": "fitb-s5",
        "prompt": "Complete the sentence with the correct word",
        "timeLimitSeconds": 20,
        "sentence": "Eating balanced meals and exercising can {{re|duce}} feelings of fatigue.",
        "prefix": "re",
        "missing": "duce",
        "fullWord": "reduce",
        "explanation": "'reduce' means to make smaller or less in amount, degree, or size."
      },
      {
        "id": "fitb-s6",
        "prompt": "Complete the sentence with the correct word",
        "timeLimitSeconds": 20,
        "sentence": "He showed tremendous {{cour|age}} by speaking honestly about his struggles.",
        "prefix": "cour",
        "missing": "age",
        "fullWord": "courage",
        "explanation": "'courage' is the ability to do something that frightens one; bravery."
      }
    ]
  },
  "fitb-history-of-printing": {
    "id": "fitb-history-of-printing",
    "section": "fill-in-the-blank",
    "title": "The Printing Revolution (Academic C-Test)",
    "description": "Scholarly C-Test text exploring how Gutenberg's movable-type press democratized knowledge across Europe.",
    "difficulty": "C1 • Advanced",
    "timeLimitSeconds": 180,
    "passageTitle": "The Printing Revolution",
    "prompt": "Complete the text with the correct words",
    "format": "passage",
    "text": "The invention of the movable-type printing press by Johannes Gutenberg in the fifteenth century transformed human communication. Before {{th|is}} innovation, {{boo|ks}} had {{t|o}} be {{cop|ied}} by {{ha|nd}}, a {{proc|ess}} that {{wa|s}} exceedingly {{sl|ow}} and {{cost|ly}}. As {{a}} result, {{know|ledge}} was {{restri|cted}} to {{a}} small {{eli|te}}. The {{spr|ead}} of {{prin|ting}} allowed {{ide|as}} to {{circu|late}} widely, {{foste|ring}} the {{scien|tific}} revolution across Europe.",
    "explanation": "Advanced academic C-Test: supply the missing letters by analyzing grammatical structure, collocations, and contextual cohesion."
  },
  "read-and-select-b2c1": {
    "id": "read-and-select-b2c1",
    "section": "read-and-select",
    "title": "Academic Vocabulary: Real vs Pseudo Words",
    "description": "Evaluate 18 words to determine which are genuine English words and which are invented pseudo-words (matched to Read and Select screenshot).",
    "difficulty": "B2–C1 • Upper-Intermediate",
    "timeLimitSeconds": 90,
    "timePerWordSeconds": 5,
    "words": [
      {
        "id": "w1",
        "word": "conducted",
        "isReal": true,
        "explanation": "'conducted' is a real English verb meaning organized and carried out (e.g., 'conducted research')."
      },
      {
        "id": "w2",
        "word": "plorify",
        "isReal": false,
        "explanation": "'plorify' is a pseudo-word with no meaning in standard English."
      },
      {
        "id": "w3",
        "word": "scrutinize",
        "isReal": true,
        "explanation": "'scrutinize' is a real English verb meaning to examine or inspect closely and thoroughly."
      },
      {
        "id": "w4",
        "word": "interruptionist",
        "isReal": false,
        "explanation": "'interruptionist' is an invented pseudo-word; standard English uses 'interrupter'."
      },
      {
        "id": "w5",
        "word": "indispensable",
        "isReal": true,
        "explanation": "'indispensable' is a real English adjective meaning absolutely necessary or essential."
      },
      {
        "id": "w6",
        "word": "preponderous",
        "isReal": false,
        "explanation": "'preponderous' is a pseudo-word blending 'ponderous' and 'preponderant'."
      },
      {
        "id": "w7",
        "word": "phenomenon",
        "isReal": true,
        "explanation": "'phenomenon' is a real English noun meaning a remarkable occurrence or observed fact."
      },
      {
        "id": "w8",
        "word": "reflact",
        "isReal": false,
        "explanation": "'reflact' is an incorrect pseudo-word; the genuine word is 'reflect'."
      },
      {
        "id": "w9",
        "word": "ambivalent",
        "isReal": true,
        "explanation": "'ambivalent' is a real English adjective meaning having mixed feelings or contradictory ideas."
      },
      {
        "id": "w10",
        "word": "reconsiliate",
        "isReal": false,
        "explanation": "'reconsiliate' is a pseudo-word; standard English uses 'reconcile'."
      },
      {
        "id": "w11",
        "word": "substantiate",
        "isReal": true,
        "explanation": "'substantiate' is a real English verb meaning to provide evidence to support or prove the truth of something."
      },
      {
        "id": "w12",
        "word": "glimpsy",
        "isReal": false,
        "explanation": "'glimpsy' is an invented pseudo-word; standard English uses 'glimpse' (noun/verb)."
      },
      {
        "id": "w13",
        "word": "deteriorate",
        "isReal": true,
        "explanation": "'deteriorate' is a real English verb meaning to become progressively worse."
      },
      {
        "id": "w14",
        "word": "transcendantalism",
        "isReal": false,
        "explanation": "'transcendantalism' is a misspelling/pseudo-form; the correct word is 'transcendentalism'."
      },
      {
        "id": "w15",
        "word": "ubiquitous",
        "isReal": true,
        "explanation": "'ubiquitous' is a real English adjective meaning present, appearing, or found everywhere."
      },
      {
        "id": "w16",
        "word": "compulsation",
        "isReal": false,
        "explanation": "'compulsation' is an invented pseudo-word; standard English uses 'compulsion'."
      },
      {
        "id": "w17",
        "word": "preliminary",
        "isReal": true,
        "explanation": "'preliminary' is a real English adjective denoting an action or event preceding or preparing for something fuller."
      },
      {
        "id": "w18",
        "word": "perplexion",
        "isReal": false,
        "explanation": "'perplexion' is a pseudo-word; standard English uses 'perplexity'."
      }
    ]
  },
  "read-and-select-c1c2": {
    "id": "read-and-select-c1c2",
    "section": "read-and-select",
    "title": "Advanced Scientific & Humanities Lexicon",
    "description": "High-level CEFR C1/C2 vocabulary distinguishing legitimate scholarly terms from deceptive morphological inventions.",
    "difficulty": "C1–C2 • Advanced",
    "timeLimitSeconds": 90,
    "timePerWordSeconds": 5,
    "words": [
      {
        "id": "w1",
        "word": "anachronistic",
        "isReal": true,
        "explanation": "'anachronistic' is a real adjective meaning belonging or appropriate to a period other than that in which it exists."
      },
      {
        "id": "w2",
        "word": "obfuscatory",
        "isReal": true,
        "explanation": "'obfuscatory' is a real adjective meaning intended to render obscure, unclear, or unintelligible."
      },
      {
        "id": "w3",
        "word": "epistemology",
        "isReal": true,
        "explanation": "'epistemology' is the philosophical study of the nature, origin, and limits of human knowledge."
      },
      {
        "id": "w4",
        "word": "perfunctation",
        "isReal": false,
        "explanation": "'perfunctation' is an invented pseudo-word; standard English uses 'perfunctoriness'."
      },
      {
        "id": "w5",
        "word": "vicissitude",
        "isReal": true,
        "explanation": "'vicissitude' is a real noun referring to a change of circumstances or fortune, typically one that is unwelcome."
      },
      {
        "id": "w6",
        "word": "superfinitude",
        "isReal": false,
        "explanation": "'superfinitude' is an invented pseudo-philosophical term combining 'super' and 'finitude'."
      },
      {
        "id": "w7",
        "word": "pusillanimous",
        "isReal": true,
        "explanation": "'pusillanimous' is a real adjective meaning showing a lack of courage or determination; timid."
      },
      {
        "id": "w8",
        "word": "circumspection",
        "isReal": true,
        "explanation": "'circumspection' is a real noun meaning the quality of being wary and unwilling to take risks; prudence."
      },
      {
        "id": "w9",
        "word": "ineffability",
        "isReal": true,
        "explanation": "'ineffability' is a real noun meaning the quality of being too great or extreme to be expressed in words."
      },
      {
        "id": "w10",
        "word": "bellicosement",
        "isReal": false,
        "explanation": "'bellicosement' is an invented pseudo-noun; standard English uses 'bellicosity'."
      },
      {
        "id": "w11",
        "word": "sesquipedalian",
        "isReal": true,
        "explanation": "'sesquipedalian' is a real adjective describing words containing many syllables or using long words."
      },
      {
        "id": "w12",
        "word": "taciturnity",
        "isReal": true,
        "explanation": "'taciturnity' is a real noun meaning the state or quality of being reserved or uncommunicative in speech."
      },
      {
        "id": "w13",
        "word": "quintessial",
        "isReal": false,
        "explanation": "'quintessial' is an invalid pseudo-word; the genuine word is 'quintessential'."
      },
      {
        "id": "w14",
        "word": "idiosyncrasy",
        "isReal": true,
        "explanation": "'idiosyncrasy' is a real noun meaning a mode of behavior or way of thought peculiar to an individual."
      },
      {
        "id": "w15",
        "word": "malleability",
        "isReal": true,
        "explanation": "'malleability' is a real noun meaning the ability of a substance to be molded, hammered, or adapted."
      },
      {
        "id": "w16",
        "word": "inadvisability",
        "isReal": true,
        "explanation": "'inadvisability' is a real noun meaning the state of being unwisely chosen or not recommended."
      },
      {
        "id": "w17",
        "word": "concurrencehood",
        "isReal": false,
        "explanation": "'concurrencehood' is an invented pseudo-word; standard English uses 'concurrence'."
      },
      {
        "id": "w18",
        "word": "propitiousness",
        "isReal": true,
        "explanation": "'propitiousness' is a real noun indicating a favorable, auspicious, or advantageous disposition."
      }
    ]
  },
  "listen-and-type-b1b2": {
    "id": "listen-and-type-b1b2",
    "section": "listen-and-type",
    "title": "Campus Life & Daily Conversations (Listen and Type)",
    "description": "Listen to spoken English statements spoken by male and female voices and transcribe what you hear with up to 2 replays.",
    "difficulty": "B1–B2 • Intermediate",
    "timeLimitSeconds": 300,
    "timePerQuestionSeconds": 60,
    "prompt": "Type what you hear",
    "questions": [
      {
        "id": "lt-b1-1",
        "voice": "female",
        "text": "The library will be open late during the week of final exams.",
        "explanation": "Key phrases: 'will be open late' and 'during the week of final exams'."
      },
      {
        "id": "lt-b1-2",
        "voice": "male",
        "text": "Please remember to bring your student ID card to the campus center tomorrow.",
        "explanation": "Imperative instruction featuring 'remember to bring' and 'student ID card'."
      },
      {
        "id": "lt-b1-3",
        "voice": "female",
        "text": "She completed her undergraduate degree in psychology before moving to New York.",
        "explanation": "Past tense sentence with academic term 'undergraduate degree'."
      },
      {
        "id": "lt-b1-4",
        "voice": "male",
        "text": "You can submit your assignment online through the student portal before midnight.",
        "explanation": "Notice the modal verb phrase 'can submit' and prepositional phrase 'through the student portal'."
      },
      {
        "id": "lt-b1-5",
        "voice": "female",
        "text": "Many students find it helpful to form study groups before midterm presentations.",
        "explanation": "Syntactic structure: 'find it helpful to form study groups'."
      }
    ]
  },
  "listen-and-type-c1c2": {
    "id": "listen-and-type-c1c2",
    "section": "listen-and-type",
    "title": "Academic Lectures & Scientific Concepts (Listen and Type)",
    "description": "High-level scholarly statements spoken by alternating male and female voices covering science, history, and economics.",
    "difficulty": "C1–C2 • Advanced",
    "timeLimitSeconds": 300,
    "timePerQuestionSeconds": 60,
    "prompt": "Type what you hear",
    "questions": [
      {
        "id": "lt-c1-1",
        "voice": "male",
        "text": "Recent archaeological findings provide compelling evidence that human migration occurred much earlier than previously assumed.",
        "explanation": "Advanced phraseology: 'compelling evidence', 'human migration', and adverbial modifier 'previously assumed'."
      },
      {
        "id": "lt-c1-2",
        "voice": "female",
        "text": "The researchers observed significant discrepancies between the theoretical models and the empirical observations.",
        "explanation": "Key terms: 'significant discrepancies', 'theoretical models', and 'empirical observations'."
      },
      {
        "id": "lt-c1-3",
        "voice": "male",
        "text": "Renewable energy infrastructure requires substantial financial investment alongside sustained political commitment.",
        "explanation": "Advanced academic collocation: 'substantial financial investment alongside sustained political commitment'."
      },
      {
        "id": "lt-c1-4",
        "voice": "female",
        "text": "Cognitive psychology demonstrates that working memory capacity is closely correlated with problem-solving proficiency.",
        "explanation": "Passive technical collocation: 'is closely correlated with problem-solving proficiency'."
      },
      {
        "id": "lt-c1-5",
        "voice": "male",
        "text": "Economic globalization has fundamentally transformed international supply chains and modern market dynamics.",
        "explanation": "Complex lecture statement: 'fundamentally transformed international supply chains'."
      }
    ]
  }
};

function generateLlmPrompt(section = 'interactive-reading', difficulty = 'B2', subtype = 'passage') {
  const difficultyGuides = {
    B1: 'CEFR B1 (Intermediate, DET ~80-100): Clear standard English, everyday situations, common idioms, foundational vocabulary.',
    B2: 'CEFR B2 (Upper-Intermediate, DET ~105-120): Semi-academic and general nonfiction topics, diverse vocabulary, nuanced collocations.',
    C1: 'CEFR C1 (Advanced, DET ~125-140): Scholarly and scientific texts, sophisticated abstract vocabulary, complex clause structures.',
    C2: 'CEFR C2 (Mastery, DET ~145-160): Highly erudite, dense academic prose, precise discipline-specific terminology, advanced rhetoric.'
  };

  const diffDesc = difficultyGuides[difficulty] || difficultyGuides['B2'];

  if (section === 'listen-and-type') {
    return [
      'You are an expert test-prep content creator for the Duolingo English Test (DET) "Listen and Type" (Listening) section.',
      '',
      'Generate a complete "Listen and Type" practice set of 5 questions in valid JSON following the specification below. Output ONLY valid JSON (no surrounding markdown comments outside the code fence).',
      '',
      '### Target Level',
      '- ' + diffDesc,
      '',
      '### Section Structure & Rules',
      '- **Header Requirement**: The root JSON object MUST have "section": "listen-and-type" to ensure DuoPrep loads it into the correct practice interface.',
      '- **Question Count**: Exactly 5 questions (standard DET set size).',
      '- **Voice Allocation**: Include both a male voice and a female voice. Alternate voices across questions (e.g. Q1: female, Q2: male, Q3: female, Q4: male, Q5: female).',
      '- **Sentence Length & Complexity**: Natural spoken English sentences corresponding to CEFR ' + difficulty + ' level.',
      '  - B1: 8–12 words, everyday campus/social scenarios.',
      '  - B2: 12–16 words, semi-academic and practical scenarios.',
      '  - C1: 15–20 words, academic lectures and scientific research.',
      '  - C2: 18–25 words, dense scholarly and professional discourse.',
      '- **Pacing & Timing**: 60 seconds per question (300 seconds total).',
      '- **Replays Rule**: Each question has 1 initial auto-play and up to 2 replays.',
      '',
      '### Required JSON Schema',
      '{',
      '  "id": "listen-and-type-custom",',
      '  "section": "listen-and-type",',
      '  "title": "' + difficulty + ' Spoken Statements (Listen and Type)",',
      '  "description": "Listen to spoken English statements by alternating male and female speakers and transcribe what you hear.",',
      '  "difficulty": "' + difficulty + ' • Practice Set",',
      '  "timeLimitSeconds": 300,',
      '  "timePerQuestionSeconds": 60,',
      '  "prompt": "Type what you hear",',
      '  "questions": [',
      '    {',
      '      "id": "lt-1",',
      '      "voice": "female",',
      '      "text": "The university library is open twenty-four hours during final exams.",',
      '      "explanation": "Key vocabulary: \'university library\', \'twenty-four hours\', and \'final exams\'."',
      '    },',
      '    {',
      '      "id": "lt-2",',
      '      "voice": "male",',
      '      "text": "Please submit your laboratory report through the student portal by Friday.",',
      '      "explanation": "Imperative sentence featuring academic phrase \'laboratory report\'."',
      '    }',
      '  ]',
      '}'
    ].join('\n');
  }

  if (section === 'read-and-select') {
    return [
      'You are an expert test-prep content creator for the Duolingo English Test (DET) "Read and Select" section.',
      '',
      'Generate a complete "Read and Select" practice set in valid JSON following the specification below. Output ONLY valid JSON (no surrounding markdown comments outside the code fence).',
      '',
      '### Target Level',
      '- ' + diffDesc,
      '',
      '### Section Structure & Rules',
      '- **Header Requirement**: The root JSON object MUST have "section": "read-and-select" to ensure DuoPrep loads it into the correct practice interface.',
      '- **Word Count**: Exactly 18 words (standard DET set size).',
      '- **Ratio**: Exactly 10 genuine English words and 8 phonologically plausible pseudo-words (fake words constructed with standard English phonemes, roots, and affixes that look like English but do not exist, e.g. \'plorify\', \'interruptionist\', \'preponderous\').',
      '- **Explanation**: Provide a concise 1-sentence definition and example for real words, or an explanation of why it is pseudo for fake words.',
      '',
      '### Required JSON Schema',
      '{',
      '  "id": "read-and-select-custom",',
      '  "section": "read-and-select",',
      '  "title": "' + difficulty + ' Vocabulary: Real vs Pseudo Words",',
      '  "difficulty": "' + difficulty + ' • Practice Set",',
      '  "timeLimitSeconds": 90,',
      '  "timePerWordSeconds": 5,',
      '  "words": [',
      '    {',
      '      "id": "w1",',
      '      "word": "conducted",',
      '      "isReal": true,',
      '      "explanation": "\'conducted\' is a real English verb meaning carried out or organized (e.g. \'conducted research\')."',
      '    },',
      '    {',
      '      "id": "w2",',
      '      "word": "plorify",',
      '      "isReal": false,',
      '      "explanation": "\'plorify\' is an invented pseudo-word; it does not exist in English dictionaries."',
      '    }',
      '  ]',
      '}'
    ].join('\n');
  }

  if (section === 'fill-in-the-blank') {
    if (subtype === 'sentence') {
      return [
        'You are an expert test-prep content creator for the Duolingo English Test (DET) "Fill in the Blank" (Read & Complete - Sentences) section.',
        '',
        'Generate a practice set of 6 individual sentence questions in valid JSON. Output ONLY valid JSON (no surrounding markdown comments outside the code fence).',
        '',
        '### Target Level',
        '- ' + diffDesc,
        '',
        '### Section Structure & Rules',
        '- **Header Requirement**: The root JSON object MUST have "section": "fill-in-the-blank" to ensure DuoPrep routes it into the letter-box interface.',
        '- **Word Notation**: In each sentence, mark the blank word with {{givenPrefix|missingSuffix}} notation (e.g. {{mo|od}} for \'mood\', {{cele|brate}} for \'celebrate\').',
        '- **C-Test Proportions**: Give the first half of the word as non-editable prefix and leave the remaining letters for the candidate to fill in box cells.',
        '- **Question Count**: Exactly 6 sentences.',
        '',
        '### Required JSON Schema',
        '{',
        '  "id": "fitb-sentences-custom",',
        '  "section": "fill-in-the-blank",',
        '  "title": "' + difficulty + ' Daily Sentences: Fill in the Blank",',
        '  "difficulty": "' + difficulty + ' • Practice Set",',
        '  "timeLimitSeconds": 120,',
        '  "format": "sentences",',
        '  "questions": [',
        '    {',
        '      "id": "fitb-s1",',
        '      "prompt": "Complete the sentence with the correct word",',
        '      "timeLimitSeconds": 20,',
        '      "sentence": "Waking up to the sound of birds outside my window puts me in a good {{mo|od}}.",',
        '      "prefix": "mo",',
        '      "missing": "od",',
        '      "fullWord": "mood",',
        '      "explanation": "\'in a good mood\' is an English idiom meaning feeling cheerful and pleased."',
        '    }',
        '  ]',
        '}'
      ].join('\n');
    }

    return [
      'You are an expert test-prep content creator for the Duolingo English Test (DET) "Fill in the Blank" (Read & Complete - Passage C-Test) section.',
      '',
      'Generate a complete C-Test passage practice set in valid JSON. Output ONLY valid JSON (no surrounding markdown comments outside the code fence).',
      '',
      '### Target Level',
      '- ' + diffDesc,
      '',
      '### Section Structure & Rules',
      '- **Header Requirement**: The root JSON object MUST have "section": "fill-in-the-blank" to ensure DuoPrep routes it into the letter-box interface.',
      '- **Passage Length**: 80–120 words with a descriptive title (passageTitle).',
      '- **C-Test Rule**:',
      '  - The first sentence must be completely intact (no blanks) to establish semantic context.',
      '  - Starting from sentence 2, every second or third content word has its second half deleted using {{givenPrefix|missingSuffix}} notation (e.g. {{fa|il}}, {{har|d}}, {{so|lve}}).',
      '  - Target 12–16 blank words across the passage.',
      '- **Time Limit**: 180 seconds (3 minutes).',
      '',
      '### Required JSON Schema',
      '{',
      '  "id": "fitb-passage-custom",',
      '  "section": "fill-in-the-blank",',
      '  "title": "Title of Passage (Passage C-Test)",',
      '  "difficulty": "' + difficulty + ' • Practice Set",',
      '  "timeLimitSeconds": 180,',
      '  "passageTitle": "Title of Passage",',
      '  "prompt": "Complete the text with the correct words",',
      '  "format": "passage",',
      '  "text": "Success is not as important as determination. Even {{i|f}} you {{fa|il}}, {{y|ou}} should {{a|ct}} to {{wo|rk}} your {{har|d}} to {{so|lve}} a {{pro|blem}}. In {{t|he}} end, that {{sk|ill}} will {{ta|ke}} you {{far|ther}} than {{succe|ss}} at {{every|thing}} you {{fa|ce}}.",',
      '  "explanation": "Standard Duolingo C-Test: supply the missing half of words based on grammar and context."',
      '}'
    ].join('\n');
  }

  // Default: Interactive Reading
  return [
    'You are an expert test-prep content creator for the Duolingo English Test (DET) "Interactive Reading" section.',
    '',
    'Generate a complete Interactive Reading practice set in valid JSON following the 3-part / 6-question structure specified below. Output ONLY valid JSON (no surrounding markdown comments outside the code fence).',
    '',
    '### Target Level',
    '- ' + diffDesc,
    '',
    '### Section Structure & Rules',
    '- **Header Requirement**: The root JSON object MUST have "section": "interactive-reading" to ensure DuoPrep loads it into the split-pane exam interface.',
    '- **Part 1**: 6~7 MCQ selecting missing words (Complete the Sentences) in Paragraph 1.',
    '- **Part 2**: 1 MCQ selecting connecting sentence (Complete the Passage) between Paragraph 1 and Paragraph 2.',
    '- **Part 3**:',
    '  - 2 Highlight questions ("Highlight text in the passage to answer the question below")',
    '  - 1 MCQ Main Idea ("Select the idea that is expressed in the passage")',
    '  - 1 MCQ Best Title ("Select the best title for the passage")',
    '- **Passage**: Two cohesive paragraphs:',
    '  - paragraph1: 70–100 words with 6~7 numbered blanks ({{1}} through {{6}} or {{7}}).',
    '  - paragraph2: 70–100 words continuing the topic.',
    '- **Option Randomization**: In the options arrays, distribute correct answers randomly across varying positions (do NOT always place the correct answer as option 1).',
    '',
    '### Required JSON Schema',
    '{',
    '  "id": "det-reading-custom",',
    '  "section": "interactive-reading",',
    '  "title": "Title of the Reading Set",',
    '  "difficulty": "' + difficulty + ' • Practice Set",',
    '  "timeLimitSeconds": 480,',
    '  "paragraph1": "Full first paragraph text with all correct words filled in...",',
    '  "paragraph2": "Full second paragraph text...",',
    '  "questions": [',
    '    {',
    '      "id": "q1-cloze",',
    '      "part": 1,',
    '      "type": "complete_the_sentences",',
    '      "prompt": "Select the best option for each missing word",',
    '      "passageTitle": "PASSAGE",',
    '      "passage": "Sentence with a {{1}} word, followed by {{2}} and {{3}}...",',
    '      "blanks": [',
    '        {',
    '          "id": 1,',
    '          "options": ["distractor1", "correctWord", "distractor2", "distractor3", "distractor4"],',
    '          "answer": "correctWord",',
    '          "explanation": "Why correctWord fits best." ',
    '        }',
    '      ]',
    '    },',
    '    {',
    '      "id": "q2-connecting",',
    '      "part": 2,',
    '      "type": "complete_the_passage",',
    '      "prompt": "Select the best sentence to complete the passage",',
    '      "passageTitle": "PASSAGE",',
    '      "options": [',
    '        "Distractor A.",',
    '        "Correct connecting sentence bridging paragraph 1 and 2.",',
    '        "Distractor B.",',
    '        "Distractor C."',
    '      ],',
    '      "answer": "Correct connecting sentence bridging paragraph 1 and 2.",',
    '      "explanation": "Why this sentence bridges the paragraphs smoothly."',
    '    },',
    '    {',
    '      "id": "q3-highlight-1",',
    '      "part": 3,',
    '      "type": "highlight_the_answer",',
    '      "prompt": "Highlight text in the passage to answer the question below",',
    '      "question": "Which phrase indicates the primary cause of the event?",',
    '      "passageTitle": "PASSAGE",',
    '      "answer": "target phrase in passage",',
    '      "acceptableSubstrings": ["target phrase", "the target phrase"],',
    '      "explanation": "Where the phrase appears in the text."',
    '    },',
    '    {',
    '      "id": "q4-highlight-2",',
    '      "part": 3,',
    '      "type": "highlight_the_answer",',
    '      "prompt": "Highlight text in the passage to answer the question below",',
    '      "question": "What is the secondary consequence mentioned in paragraph 2?",',
    '      "passageTitle": "PASSAGE",',
    '      "answer": "secondary consequence phrase",',
    '      "acceptableSubstrings": ["secondary consequence phrase"],',
    '      "explanation": "Found in paragraph 2."',
    '    },',
    '    {',
    '      "id": "q5-main-idea",',
    '      "part": 3,',
    '      "type": "identify_the_idea",',
    '      "prompt": "Select the idea that is expressed in the passage",',
    '      "passageTitle": "PASSAGE",',
    '      "options": [',
    '        "Distractor idea.",',
    '        "Accurate synthesized main idea of the text.",',
    '        "Overly narrow idea.",',
    '        "Irrelevant idea."',
    '      ],',
    '      "answer": "Accurate synthesized main idea of the text.",',
    '      "explanation": "Summarizes the overall message."',
    '    },',
    '    {',
    '      "id": "q6-best-title",',
    '      "part": 3,',
    '      "type": "title_the_passage",',
    '      "prompt": "Select the best title for the passage",',
    '      "passageTitle": "PASSAGE",',
    '      "options": [',
    '        "Overly broad title",',
    '        "Best Comprehensive Title for the Passage",',
    '        "Overly narrow title",',
    '        "Off-topic title"',
    '      ],',
    '      "answer": "Best Comprehensive Title for the Passage",',
    '      "explanation": "Accurately represents both topic and scope."',
    '    }',
    '  ]',
    '}'
  ].join('\n');
}

const LLM_PROMPT_TEMPLATE = generateLlmPrompt('interactive-reading', 'B2');


/* ==========================================================================
   TEXT-TO-SPEECH (TTS) MANAGER FOR LISTENING PRACTICE
   - Uses Web Speech API (window.speechSynthesis) with zero external dependencies
   - Discovers distinct male and female voices across macOS, Windows, iOS & Android
   - Fallback pitch calibration guarantees audibly distinct male/female timbres
   ========================================================================== */
const TTSManager = {
  synth: typeof window !== 'undefined' ? window.speechSynthesis : null,
  voices: [],
  femaleVoice: null,
  maleVoice: null,
  isInitialized: false,

  init() {
    if (!this.synth) return;
    this.loadVoices();
    if (typeof this.synth.onvoiceschanged !== 'undefined') {
      this.synth.onvoiceschanged = () => this.loadVoices();
    }
  },

  loadVoices() {
    if (!this.synth) return;
    const allVoices = this.synth.getVoices() || [];
    if (!allVoices.length) return;
    this.voices = allVoices;

    // Filter English voices
    const enVoices = allVoices.filter(v => v.lang && v.lang.toLowerCase().startsWith('en'));
    const candidateVoices = enVoices.length ? enVoices : allVoices;

    const femaleRegex = /samantha|victoria|karen|zira|jenny|moira|fiona|tessa|veena|allison|susan|catherine|zoe|stephanie|ava|serena|female/i;
    const maleRegex = /alex|daniel|fred|eddy|reed|david|george|arthur|oliver|tom|guy|brian|male/i;

    // Try finding specific female voice
    this.femaleVoice = candidateVoices.find(v => femaleRegex.test(v.name)) ||
      candidateVoices.find(v => !maleRegex.test(v.name)) ||
      candidateVoices[0];

    // Try finding specific male voice (must be distinct from femaleVoice if possible)
    this.maleVoice = candidateVoices.find(v => maleRegex.test(v.name) && v.name !== this.femaleVoice?.name) ||
      candidateVoices.find(v => v.name !== this.femaleVoice?.name) ||
      candidateVoices[0];

    this.isInitialized = true;
  },

  speak(text, gender = 'female', onStart, onEnd) {
    if (!this.synth) {
      console.warn('SpeechSynthesis is not supported on this browser.');
      if (onStart) onStart();
      if (onEnd) setTimeout(onEnd, 1500);
      return;
    }

    this.stop();

    if (!this.isInitialized || !this.voices.length) {
      this.loadVoices();
    }

    const utterance = new SpeechSynthesisUtterance(text);
    const isMale = String(gender).toLowerCase() === 'male';

    if (isMale) {
      if (this.maleVoice) utterance.voice = this.maleVoice;
      utterance.pitch = 0.88; // Lower pitch for realistic male timbre
      utterance.rate = 0.94;  // Authentic testing speed
    } else {
      if (this.femaleVoice) utterance.voice = this.femaleVoice;
      utterance.pitch = 1.15; // Natural clear female pitch
      utterance.rate = 0.94;
    }

    utterance.onstart = () => {
      state.isSpeaking = true;
      if (typeof onStart === 'function') onStart();
    };

    utterance.onend = () => {
      state.isSpeaking = false;
      if (typeof onEnd === 'function') onEnd();
    };

    utterance.onerror = (err) => {
      console.warn('SpeechSynthesis error:', err);
      state.isSpeaking = false;
      if (typeof onEnd === 'function') onEnd();
    };

    this.synth.speak(utterance);
  },

  stop() {
    if (this.synth) {
      this.synth.cancel();
      state.isSpeaking = false;
    }
  }
};

const STORAGE_KEY_CUSTOM_PACKS = 'det_prep_custom_packs_v2';

const state = {
  view: 'hub', // 'hub' | 'practice'
  selectedSkillGroup: 'all', // 'all' | 'reading' | 'listening'
  selectedSkillTab: 'all', // legacy alias
  selectedSectionFilter: 'all', // 'all' | 'reading-all' | 'listening-all' | 'interactive-reading' | 'fill-in-the-blank' | 'read-and-select' | 'listen-and-type'
  promptConfig: {
    section: 'interactive-reading',
    difficulty: 'B2',
    subtype: 'passage',
  },

  packsMeta: [...BUILTIN_MANIFEST.packs],
  loadedPacks: { ...FALLBACK_PACKS },
  activePackId: 'firefighters-screenshot',
  activePack: null,

  // Practice session state
  currentQuestionIndex: 0,
  openBlankId: 1, // Default open blank #1 for Part 1 Interactive Reading
  focusedOptionIndex: 0,
  answers: {}, // Question answers
  isGradedCurrentQuestion: false,
  feedbackState: null,
  showTryAgainColors: false,
  remainingSeconds: 458,
  timerInterval: null,
  showFinalResults: false,

  // Listening practice state
  replaysLeft: 2,
  hasPlayedAtStart: false,
  isSpeaking: false,
};

/* ==========================================================================
   RANDOMIZATION / SHUFFLE UTILITIES
   ========================================================================== */
function shuffleArray(arr) {
  if (!Array.isArray(arr)) return [];
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function shufflePackOptions(pack) {
  if (!pack) return;

  // 1. Interactive reading options
  if (Array.isArray(pack.questions)) {
    pack.questions.forEach((q) => {
      if (Array.isArray(q.blanks)) {
        q.blanks.forEach((b) => {
          if (Array.isArray(b.options) && b.options.length > 1) {
            if (
              b.answer &&
              !b.options.some((opt) => opt.trim().toLowerCase() === b.answer.trim().toLowerCase())
            ) {
              b.options.push(b.answer);
            }
            b.options = shuffleArray(b.options);
          }
        });
      }

      if (Array.isArray(q.options) && q.options.length > 1) {
        if (
          q.answer &&
          !q.options.some((opt) => opt.trim().toLowerCase() === q.answer.trim().toLowerCase())
        ) {
          q.options.push(q.answer);
        }
        q.options = shuffleArray(q.options);
      }
    });
  }

  // 2. Read and Select words: shuffle order of words
  if (pack.section === 'read-and-select' && Array.isArray(pack.words)) {
    pack.words = shuffleArray(pack.words);
  }
}

/* ==========================================================================
   JSON NORMALIZER & SECTION VALIDATION
   ========================================================================== */
function normalizeQuestionPack(rawInput, fallbackTitle = 'Custom Practice Pack') {
  let data = rawInput;
  if (typeof data === 'string') {
    const cleaned = data
      .trim()
      .replace(/^`{3}(?:json)?\s*/i, '')
      .replace(/\s*`{3}$/, '');
    data = JSON.parse(cleaned);
  }

  if (!data || typeof data !== 'object') {
    throw new Error('JSON root must be an object or an array.');
  }

  if (Array.isArray(data)) {
    data = { title: fallbackTitle, questions: data };
  }

  // Detect and validate section header
  let section = (data.section || '').toLowerCase().trim();
  if (section === 'read-and-complete' || section === 'c-test') {
    section = 'fill-in-the-blank';
  } else if (section === 'vocabulary' || section === 'real-words') {
    section = 'read-and-select';
  } else if (section === 'listening' || section === 'listen-and-type') {
    section = 'listen-and-type';
  }

  if (!section) {
    if (Array.isArray(data.words) || (data.questions && data.questions[0]?.isReal !== undefined)) {
      section = 'read-and-select';
    } else if (data.text?.includes('{{') || (data.questions && (data.questions[0]?.prefix || data.questions[0]?.missing))) {
      section = 'fill-in-the-blank';
    } else if (data.questions && (data.questions[0]?.voice || data.questions[0]?.audioText)) {
      section = 'listen-and-type';
    } else {
      section = 'interactive-reading';
    }
  }

  const packId = String(data.id || `pack-${Date.now()}`);
  const title = String(data.title || fallbackTitle);
  const difficulty = String(data.difficulty || 'B2 • Intermediate');
  const description = String(data.description || '');

  // 1. SECTION: Listen and Type
  if (section === 'listen-and-type') {
    let rawQuestions = data.questions || [];
    if (!Array.isArray(rawQuestions)) rawQuestions = [];

    const questions = rawQuestions.map((q, idx) => {
      const text = String(q.text || q.sentence || q.audioText || '').trim();
      const voice = String(q.voice || (idx % 2 === 0 ? 'female' : 'male')).toLowerCase();
      return {
        id: String(q.id || `lt-q${idx + 1}`),
        prompt: q.prompt || 'Type what you hear',
        text,
        voice,
        explanation: String(q.explanation || ''),
        timeLimitSeconds: Number(q.timeLimitSeconds || 60),
      };
    });

    return {
      id: packId,
      section: 'listen-and-type',
      title,
      description,
      difficulty,
      timeLimitSeconds: Number(data.timeLimitSeconds || (questions.length * 60)),
      timePerQuestionSeconds: 60,
      prompt: data.prompt || 'Type what you hear',
      questions,
    };
  }

  // 2. SECTION: Read and Select
  if (section === 'read-and-select') {
    let rawWords = data.words || data.questions || [];
    if (!Array.isArray(rawWords)) rawWords = [];

    const words = rawWords.map((w, idx) => ({
      id: String(w.id || `w${idx + 1}`),
      word: String(w.word || w.text || '').trim(),
      isReal: Boolean(w.isReal ?? w.isRealWord ?? w.answer ?? false),
      explanation: String(w.explanation || ''),
    })).filter(w => Boolean(w.word));

    return {
      id: packId,
      section: 'read-and-select',
      title,
      description,
      difficulty,
      timeLimitSeconds: Number(data.timeLimitSeconds || (words.length * 5)),
      timePerWordSeconds: Number(data.timePerWordSeconds || 5),
      prompt: data.prompt || 'Is this a real English word?',
      words: shuffleArray(words),
      questions: words, // alias for uniform question iteration
    };
  }

  // 2. SECTION: Fill in the Blank
  if (section === 'fill-in-the-blank') {
    const format = (data.format || (Array.isArray(data.questions) ? 'sentences' : 'passage')).toLowerCase();

    if (format === 'sentences' && Array.isArray(data.questions)) {
      const questions = data.questions.map((q, idx) => {
        let sentence = String(q.sentence || q.text || '');
        let prefix = String(q.prefix || '');
        let missing = String(q.missing || '');
        let fullWord = String(q.fullWord || q.word || q.answer || '');

        // If sentence has {{prefix|missing}} notation
        const match = /\{\{([a-zA-Z]*)\|([a-zA-Z]+)\}\}/.exec(sentence);
        if (match) {
          prefix = match[1];
          missing = match[2];
          fullWord = prefix + missing;
        } else if (!missing && fullWord) {
          const mid = Math.ceil(fullWord.length / 2);
          prefix = fullWord.slice(0, mid);
          missing = fullWord.slice(mid);
          sentence = sentence.replace(fullWord, `{{${prefix}|${missing}}}`);
        }

        return {
          id: String(q.id || `fitb-s${idx + 1}`),
          prompt: q.prompt || 'Complete the sentence with the correct word',
          timeLimitSeconds: Number(q.timeLimitSeconds || 20),
          sentence,
          prefix,
          missing,
          fullWord,
          explanation: q.explanation || '',
        };
      });

      return {
        id: packId,
        section: 'fill-in-the-blank',
        format: 'sentences',
        title,
        description,
        difficulty,
        timeLimitSeconds: Number(data.timeLimitSeconds || (questions.length * 20)),
        questions,
      };
    }

    // Passage C-Test
    const text = String(data.text || data.passage || '');
    return {
      id: packId,
      section: 'fill-in-the-blank',
      format: 'passage',
      title,
      description,
      difficulty,
      passageTitle: String(data.passageTitle || title),
      prompt: data.prompt || 'Complete the text with the correct words',
      timeLimitSeconds: Number(data.timeLimitSeconds || 180),
      text,
      explanation: String(data.explanation || ''),
      questions: [{ id: 'q1-c-test-passage', prompt: data.prompt || 'Complete the text with the correct words', text, explanation: data.explanation || '' }],
    };
  }

  // 3. SECTION: Interactive Reading (Default)
  let rawQuestions = [];
  if (Array.isArray(data.questions)) {
    rawQuestions = data.questions;
  } else if (typeof data.passage === 'string') {
    rawQuestions = [data];
  } else {
    rawQuestions = [];
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
        const answerStr = String(answer ?? options[0] ?? '');
        if (
          answerStr &&
          !options.some((opt) => opt.trim().toLowerCase() === answerStr.trim().toLowerCase())
        ) {
          options.push(answerStr);
        }
        return {
          id: blankNum,
          options: shuffleArray(options),
          answer: answerStr,
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
    const answerStr = String(answer ?? options[0] ?? '');
    if (
      answerStr &&
      !options.some((opt) => opt.trim().toLowerCase() === answerStr.trim().toLowerCase())
    ) {
      options.push(answerStr);
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
      options: shuffleArray(options),
      answer: answerStr,
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
    id: packId,
    section: 'interactive-reading',
    title,
    description,
    difficulty,
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
  TTSManager.init();
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
    localStorage.setItem(STORAGE_KEY_CUSTOM_PACKS, JSON.stringify(filtered.slice(0, 30)));
  } catch (err) {
    console.warn('Could not persist custom pack:', err);
  }
}

function registerPackInMemory(pack, persist = true) {
  pack.isImported = true;
  state.loadedPacks[pack.id] = pack;
  const count = pack.section === 'read-and-select'
    ? (pack.words || []).length
    : (pack.questions || []).length;

  const metaEntry = {
    id: pack.id,
    title: pack.title,
    description: pack.description || '',
    section: pack.section || 'interactive-reading',
    difficulty: pack.difficulty || 'Custom JSON',
    questionCount: count,
    timeLimitSeconds: pack.timeLimitSeconds || 300,
    isCustom: true,
    isImported: true,
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

function deleteImportedPack(packId) {
  state.packsMeta = state.packsMeta.filter((p) => p.id !== packId);
  delete state.loadedPacks[packId];

  try {
    const raw = localStorage.getItem(STORAGE_KEY_CUSTOM_PACKS);
    if (raw) {
      const saved = JSON.parse(raw);
      const filtered = saved.filter((p) => p.id !== packId);
      localStorage.setItem(STORAGE_KEY_CUSTOM_PACKS, JSON.stringify(filtered));
    }
  } catch (err) {
    console.warn('Could not update custom storage after delete:', err);
  }

  renderHub();
  showToast('Removed imported practice set.');
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
      renderHub();
    }
  } catch {
    // Offline or file:// protocol
  }
}

async function ensurePackLoaded(packId) {
  let pack = state.loadedPacks[packId];
  if (pack && pack._isNormalized) {
    return pack;
  }
  if (!pack) {
    const meta = state.packsMeta.find((p) => p.id === packId);
    if (meta && meta.file) {
      try {
        const res = await fetch(`./${meta.file.replace(/^(\.\/|\/)/, '')}`);
        if (res.ok) {
          pack = await res.json();
        }
      } catch (err) {
        console.warn(`Could not fetch ${meta.file}`, err);
      }
    }
  }
  if (!pack && FALLBACK_PACKS[packId]) {
    pack = FALLBACK_PACKS[packId];
  }
  if (!pack) {
    pack = state.loadedPacks['firefighters-screenshot'] || FALLBACK_PACKS['firefighters-screenshot'];
  }
  const normalized = normalizeQuestionPack(pack, pack?.title);
  normalized._isNormalized = true;
  state.loadedPacks[packId] = normalized;
  return normalized;
}

async function handleUrlParameters() {
  const params = new URLSearchParams(window.location.search);
  const packParam = params.get('pack');
  const sectionParam = params.get('section');
  const base64DataParam = params.get('data');
  const viewParam = params.get('view');

  if (sectionParam) {
    state.selectedSectionFilter = sectionParam;
  }

  if (base64DataParam) {
    try {
      const jsonStr = decodeURIComponent(escape(atob(base64DataParam)));
      const normalized = normalizeQuestionPack(jsonStr, 'Shared Friend Pack');
      registerPackInMemory(normalized, true);
      state.activePackId = normalized.id;
      state.selectedSectionFilter = normalized.section;
      showToast(`Loaded shared pack: "${normalized.title}"`);
    } catch (err) {
      console.error('Invalid ?data= param:', err);
    }
  } else if (packParam) {
    state.activePackId = packParam;
    const found = state.packsMeta.find((p) => p.id === packParam);
    if (found && found.section) {
      state.selectedSectionFilter = found.section;
    }
  }

  if (viewParam === 'practice') {
    state.view = 'practice';
  }
}

/* ==========================================================================
   HUB VIEW CONTROLLER & NAVIGATOR
   ========================================================================== */
function renderHub() {
  renderNavigator();
  renderPacksGrid();
}

function renderNavigator() {
  const currentGroup = state.selectedSkillGroup || 'all';
  const currentFilter = state.selectedSectionFilter || 'all';

  // 1. All Tab
  const allTab = document.querySelector('.skills-tab[data-skill-group="all"]');
  if (allTab) {
    const isAll = currentGroup === 'all' && currentFilter === 'all';
    allTab.classList.toggle('active', isAll);
    allTab.setAttribute('aria-selected', isAll ? 'true' : 'false');
  }

  // 2. Reading Dropdown Trigger & Items
  const readingTrigger = document.querySelector('.skills-dropdown-trigger[data-skill-group="reading"]');
  const isReading = currentGroup === 'reading';
  if (readingTrigger) {
    readingTrigger.classList.toggle('active', isReading);
    readingTrigger.setAttribute('aria-selected', isReading ? 'true' : 'false');
    const badge = document.getElementById('reading-active-badge');
    if (badge) {
      if (isReading && currentFilter !== 'reading-all' && currentFilter !== 'all') {
        const secInfo = SECTION_META[currentFilter];
        badge.textContent = secInfo ? secInfo.badge : currentFilter;
        badge.style.display = 'inline-block';
      } else {
        badge.style.display = 'none';
      }
    }
  }

  document.querySelectorAll('#dropdown-menu-reading .skills-dropdown-item').forEach((item) => {
    const f = item.getAttribute('data-section-filter');
    const isActive = isReading && (f === currentFilter || (f === 'reading-all' && currentFilter === 'all'));
    item.classList.toggle('active', isActive);
  });

  // 3. Listening Dropdown Trigger & Items
  const listeningTrigger = document.querySelector('.skills-dropdown-trigger[data-skill-group="listening"]');
  const isListening = currentGroup === 'listening';
  if (listeningTrigger) {
    listeningTrigger.classList.toggle('active', isListening);
    listeningTrigger.setAttribute('aria-selected', isListening ? 'true' : 'false');
    const badge = document.getElementById('listening-active-badge');
    if (badge) {
      if (isListening && currentFilter !== 'listening-all' && currentFilter !== 'all') {
        const secInfo = SECTION_META[currentFilter];
        badge.textContent = secInfo ? secInfo.badge : currentFilter;
        badge.style.display = 'inline-block';
      } else {
        badge.style.display = 'none';
      }
    }
  }

  document.querySelectorAll('#dropdown-menu-listening .skills-dropdown-item').forEach((item) => {
    const f = item.getAttribute('data-section-filter');
    const isActive = isListening && (f === currentFilter || (f === 'listening-all' && currentFilter === 'all'));
    item.classList.toggle('active', isActive);
  });

  // 4. Update dropdown pack count numbers
  const readingPacks = state.packsMeta.filter((p) => SECTION_META[p.section]?.skill === 'reading');
  const listeningPacks = state.packsMeta.filter((p) => SECTION_META[p.section]?.skill === 'listening');

  const setElText = (id, txt) => {
    const el = document.getElementById(id);
    if (el) el.textContent = String(txt);
  };

  setElText('count-reading-all', readingPacks.length);
  setElText('count-interactive-reading', readingPacks.filter((p) => p.section === 'interactive-reading').length);
  setElText('count-fill-in-the-blank', readingPacks.filter((p) => p.section === 'fill-in-the-blank').length);
  setElText('count-read-and-select', readingPacks.filter((p) => p.section === 'read-and-select').length);

  setElText('count-listening-all', listeningPacks.length);
  setElText('count-listen-and-type', listeningPacks.filter((p) => p.section === 'listen-and-type').length);

  // 5. Render Collapsible Sub-nav Pills
  renderSubNavPills();
}

function renderSubNavPills() {
  const container = document.getElementById('skills-subnav-pills');
  if (!container) return;

  const currentGroup = state.selectedSkillGroup || 'all';
  const currentFilter = state.selectedSectionFilter || 'all';

  let pills = [];

  if (currentGroup === 'reading') {
    const readingPacks = state.packsMeta.filter((p) => SECTION_META[p.section]?.skill === 'reading');
    pills = [
      {
        id: 'reading-all',
        label: 'All Reading',
        group: 'reading',
        count: readingPacks.length,
      },
      {
        id: 'interactive-reading',
        label: 'Interactive Reading',
        group: 'reading',
        count: readingPacks.filter((p) => p.section === 'interactive-reading').length,
      },
      {
        id: 'fill-in-the-blank',
        label: 'Fill in the Blank',
        group: 'reading',
        count: readingPacks.filter((p) => p.section === 'fill-in-the-blank').length,
      },
      {
        id: 'read-and-select',
        label: 'Read and Select',
        group: 'reading',
        count: readingPacks.filter((p) => p.section === 'read-and-select').length,
      },
    ];
  } else if (currentGroup === 'listening') {
    const listeningPacks = state.packsMeta.filter((p) => SECTION_META[p.section]?.skill === 'listening');
    pills = [
      {
        id: 'listening-all',
        label: 'All Listening',
        group: 'listening',
        count: listeningPacks.length,
      },
      {
        id: 'listen-and-type',
        label: 'Listen and Type',
        group: 'listening',
        count: listeningPacks.filter((p) => p.section === 'listen-and-type').length,
      },
    ];
  } else {
    // Overview mode
    const readingCount = state.packsMeta.filter((p) => SECTION_META[p.section]?.skill === 'reading').length;
    const listeningCount = state.packsMeta.filter((p) => SECTION_META[p.section]?.skill === 'listening').length;
    pills = [
      {
        id: 'all',
        label: '全部題型 (All Types)',
        group: 'all',
        count: state.packsMeta.length,
      },
      {
        id: 'reading-all',
        label: 'Reading Comprehension',
        group: 'reading',
        count: readingCount,
      },
      {
        id: 'listening-all',
        label: 'Listening Comprehension',
        group: 'listening',
        count: listeningCount,
      },
    ];
  }

  container.innerHTML = pills.map((p) => {
    const isActive = (currentGroup === p.group && (currentFilter === p.id || (p.id === 'reading-all' && currentFilter === 'reading-all') || (p.id === 'listening-all' && currentFilter === 'listening-all'))) ||
      (currentGroup === 'all' && p.id === 'all');
    return `
      <button
        type="button"
        class="skills-subnav-pill ${isActive ? 'active' : ''}"
        data-pill-group="${p.group}"
        data-pill-filter="${p.id}"
      >
        <span>${escapeHtml(p.label)}</span>
        <span class="subnav-pill-count">${p.count}</span>
      </button>
    `;
  }).join('');

  container.querySelectorAll('.skills-subnav-pill').forEach((pill) => {
    pill.addEventListener('click', () => {
      const g = pill.getAttribute('data-pill-group');
      const f = pill.getAttribute('data-pill-filter');
      state.selectedSkillGroup = g;
      state.selectedSectionFilter = f;
      renderHub();
    });
  });
}

function renderPacksGrid() {
  const packsContainer = document.getElementById('packs-grid');
  if (!packsContainer) return;

  const filteredPacks = state.packsMeta.filter((meta) => {
    if (state.selectedSkillGroup === 'reading') {
      const isReading = SECTION_META[meta.section]?.skill === 'reading';
      if (!isReading) return false;
      if (state.selectedSectionFilter === 'reading-all' || state.selectedSectionFilter === 'all') return true;
      return meta.section === state.selectedSectionFilter;
    }

    if (state.selectedSkillGroup === 'listening') {
      const isListening = SECTION_META[meta.section]?.skill === 'listening';
      if (!isListening) return false;
      if (state.selectedSectionFilter === 'listening-all' || state.selectedSectionFilter === 'all') return true;
      return meta.section === state.selectedSectionFilter;
    }

    // All skills selected
    if (state.selectedSectionFilter === 'all') return true;
    if (state.selectedSectionFilter === 'reading-all') return SECTION_META[meta.section]?.skill === 'reading';
    if (state.selectedSectionFilter === 'listening-all') return SECTION_META[meta.section]?.skill === 'listening';
    return meta.section === state.selectedSectionFilter;
  });

  if (filteredPacks.length === 0) {
    packsContainer.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 48px 20px; background: #ffffff; border-radius: 16px; border: 2px dashed #e0e0e0;">
        <h3 style="font-family: var(--font-display); font-size: 18px; font-weight: 800; color: var(--det-text-main); margin-bottom: 6px;">No question sets found for this filter</h3>
        <p style="font-size: 14px; color: var(--det-text-secondary); margin-bottom: 16px;">Click below to generate or load custom question banks in JSON.</p>
        <button type="button" class="btn-duo btn-duo-green" onclick="openModal('json-modal')">Load JSON</button>
      </div>
    `;
    return;
  }

  packsContainer.innerHTML = filteredPacks
    .map((meta) => {
      const isActive = meta.id === state.activePackId;
      const mins = Math.floor((meta.timeLimitSeconds || 300) / 60);
      const secs = String((meta.timeLimitSeconds || 300) % 60).padStart(2, '0');
      const secInfo = SECTION_META[meta.section] || { icon: '', badge: meta.section };
      const isImported = Boolean(meta.isCustom || meta.isImported);

      return `
        <article class="pack-card ${isActive ? 'active' : ''} ${isImported ? 'pack-card-imported' : ''}" data-pack-id="${escapeHtml(meta.id)}">
          <div>
            <div class="pack-card-top">
              <span class="pack-badge-section pack-badge-${escapeHtml(meta.section)}">
                ${escapeHtml(secInfo.badge)}
              </span>
              <span class="pack-badge">${escapeHtml(meta.difficulty || 'B2 • Intermediate')}</span>
              ${isImported ? `
                <span class="pack-badge-imported" title="Custom Imported Practice Set">
                  <svg class="imported-icon" width="11" height="11" viewBox="0 0 16 16" fill="none">
                    <path d="M8 2V10M8 10L4.5 6.5M8 10L11.5 6.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M2.5 12.5H13.5" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                  </svg>
                  Imported
                </span>
              ` : ''}
            </div>
            <h3 class="pack-title">${escapeHtml(meta.title)}</h3>
            <p class="pack-desc">${escapeHtml(meta.description || '')}</p>
          </div>
          <div class="pack-meta">
            <span>${meta.questionCount || 6} Questions • ${mins}:${secs}</span>
            <div style="display: flex; align-items: center; gap: 8px;">
              ${isImported ? `
                <button type="button" class="btn-remove-imported" data-delete-pack-id="${escapeHtml(meta.id)}" title="Delete imported practice set">
                  Delete
                </button>
              ` : ''}
              <span style="color: var(--duo-blue); font-weight: 800;">Start Practice →</span>
            </div>
          </div>
        </article>
      `;
    })
    .join('');

  packsContainer.querySelectorAll('.pack-card').forEach((card) => {
    card.addEventListener('click', (e) => {
      if (e.target.closest('.btn-remove-imported')) return;
      const packId = card.getAttribute('data-pack-id');
      state.activePackId = packId;
      startPracticeSession(packId);
    });
  });

  packsContainer.querySelectorAll('.btn-remove-imported').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const packId = btn.getAttribute('data-delete-pack-id');
      if (confirm('Are you sure you want to delete this imported practice set?')) {
        deleteImportedPack(packId);
      }
    });
  });
}

/* ==========================================================================
   PRACTICE SESSION CONTROLLER
   ========================================================================== */
async function startPracticeSession(packId) {
  TTSManager.stop();
  const pack = await ensurePackLoaded(packId);
  shufflePackOptions(pack);
  state.activePackId = pack.id;
  state.activePack = pack;
  state.currentQuestionIndex = 0;
  state.answers = {};
  state.isGradedCurrentQuestion = false;
  state.feedbackState = null;
  state.showTryAgainColors = false;
  state.showFinalResults = false;
  state.replaysLeft = 2;
  state.hasPlayedAtStart = false;
  state.remainingSeconds = pack.section === 'listen-and-type'
    ? (pack.timePerQuestionSeconds || 60)
    : (pack.timeLimitSeconds || 300);

  hideFinalResultsOverlay();

  // Reset blank selection for interactive reading
  if (pack.section === 'interactive-reading') {
    const firstQ = pack.questions[0];
    if (firstQ?.type === 'complete_the_sentences' && firstQ.blanks?.length) {
      state.openBlankId = firstQ.blanks[0].id;
      state.focusedOptionIndex = 0;
    } else {
      state.openBlankId = null;
    }
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
    TTSManager.stop();
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
      if (state.activePack?.section === 'listen-and-type') {
        if (!state.isGradedCurrentQuestion) {
          gradeCurrentQuestion();
        } else {
          advanceToNextQuestion();
        }
      } else {
        stopTimer();
        showFinalResultsScreen();
      }
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
  if (!clockEl) return;

  const mins = Math.floor(state.remainingSeconds / 60);
  const secs = String(state.remainingSeconds % 60).padStart(2, '0');
  clockEl.textContent = `${mins}:${secs}`;
  clockEl.classList.toggle('low-time', state.remainingSeconds <= 30);

  if (subEl) {
    const pack = state.activePack;
    if (pack?.section === 'listen-and-type') {
      subEl.textContent = 'for this question';
    } else if (pack?.section === 'read-and-select') {
      subEl.textContent = 'for this question';
    } else if (pack?.section === 'fill-in-the-blank' && pack.format === 'sentences') {
      subEl.textContent = 'for this question';
    } else if (pack?.section === 'fill-in-the-blank') {
      subEl.textContent = 'for this passage';
    } else {
      subEl.textContent = `for ${pack?.questions?.length || 6} questions`;
    }
  }
}

/* ==========================================================================
   PRACTICE CARD ROUTER
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

  const stageInteractive = document.getElementById('det-interactive-reading-stage');
  const stageReadSelect = document.getElementById('det-read-select-stage');
  const stageFitb = document.getElementById('det-fitb-stage');
  const stageListening = document.getElementById('det-listening-stage');
  const partIndicator = document.getElementById('det-part-indicator');
  const submitBtn = document.getElementById('det-submit-btn');
  const feedbackDrawer = document.getElementById('det-feedback-drawer');
  const bottombar = document.getElementById('det-bottombar');

  // Route to the appropriate section interface
  if (pack.section === 'listen-and-type') {
    if (stageInteractive) stageInteractive.style.display = 'none';
    if (stageFitb) stageFitb.style.display = 'none';
    if (stageReadSelect) stageReadSelect.style.display = 'none';
    if (stageListening) {
      stageListening.style.display = 'flex';
      stageListening.hidden = false;
    }
    const questions = pack.questions || [];
    const q = questions[state.currentQuestionIndex];
    if (partIndicator) {
      partIndicator.textContent = `Question ${state.currentQuestionIndex + 1} of ${questions.length}`;
    }
    renderListeningStage(q, pack);
  } else if (pack.section === 'read-and-select') {
    if (stageListening) stageListening.style.display = 'none';
    if (stageInteractive) stageInteractive.style.display = 'none';
    if (stageFitb) stageFitb.style.display = 'none';
    if (stageReadSelect) {
      stageReadSelect.style.display = 'flex';
      stageReadSelect.hidden = false;
    }
    const words = pack.words || [];
    const currentWord = words[state.currentQuestionIndex];
    if (partIndicator) {
      partIndicator.textContent = `Word ${state.currentQuestionIndex + 1} of ${words.length}`;
    }
    renderReadAndSelectStage(currentWord, pack);
  } else if (pack.section === 'fill-in-the-blank') {
    if (stageInteractive) stageInteractive.style.display = 'none';
    if (stageReadSelect) stageReadSelect.style.display = 'none';
    if (stageListening) stageListening.style.display = 'none';
    if (stageFitb) {
      stageFitb.style.display = 'flex';
      stageFitb.hidden = false;
    }
    const q = (pack.questions && pack.questions[state.currentQuestionIndex]) || {
      id: 'q1-c-test-passage',
      prompt: pack.prompt || 'Complete the text with the correct words',
      text: pack.text || '',
      sentence: pack.text || '',
    };
    if (partIndicator) {
      partIndicator.textContent = pack.format === 'sentences'
        ? `Sentence ${state.currentQuestionIndex + 1} of ${(pack.questions || []).length}`
        : 'Read & Complete';
    }
    renderFillInTheBlankStage(q, pack);
  } else {
    // Interactive Reading
    if (stageReadSelect) stageReadSelect.style.display = 'none';
    if (stageFitb) stageFitb.style.display = 'none';
    if (stageListening) stageListening.style.display = 'none';
    if (stageInteractive) {
      stageInteractive.style.display = 'grid';
      stageInteractive.hidden = false;
    }
    const q = pack.questions[state.currentQuestionIndex];
    if (partIndicator) {
      partIndicator.textContent = `Part ${q?.part || 1} • Question ${state.currentQuestionIndex + 1}/${pack.questions.length}`;
    }
    renderInteractiveReadingStage(q, pack);
  }

  // Manage feedback drawer vs bottom bar
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
    const isAnswered = checkIfCurrentQuestionAnswered(pack);
    submitBtn.disabled = !isAnswered;
  }
}

function checkIfCurrentQuestionAnswered(pack) {
  if (!pack) return false;
  const idx = state.currentQuestionIndex;

  if (pack.section === 'listen-and-type') {
    const q = (pack.questions || [])[idx];
    if (!q) return false;
    const userText = (state.answers[q.id] || '').trim();
    return userText.length > 0;
  }

  TTSManager.stop();
  if (pack.section === 'listen-and-type') {
    const questions = pack.questions || [];
    totalQuestions = questions.length;
    breakdownHtml = questions.map((q, idx) => {
      const userText = state.answers[q.id] || '';
      const evalResult = evaluateTranscription(userText, q.text);
      if (evalResult.isCorrect) correctQuestions += 1;
      return `
        <div class="breakdown-item">
          <div class="breakdown-item-top">
            <strong>Question ${idx + 1} (${q.voice === 'male' ? 'Male Voice' : 'Female Voice'})</strong>
            <span style="font-weight: 800; color: ${evalResult.isCorrect ? 'var(--duo-green-text)' : 'var(--duo-red-text)'};">
              ${evalResult.isCorrect ? '✓ Correct' : '✕ Incorrect'}
            </span>
          </div>
          <div style="font-size: 13.5px; margin-bottom: 4px;">
            <strong>Target:</strong> "${escapeHtml(q.text)}"
          </div>
          <div style="font-size: 13.5px; color: var(--det-text-secondary); margin-bottom: 4px;">
            <strong>Your transcription:</strong> "${escapeHtml(userText || '(No response)')}"
          </div>
          ${q.explanation ? `<div style="font-size: 13px; color: #555555; background: #fafafa; padding: 8px 12px; border-radius: 8px; margin-top: 6px;"><strong style="color: #333;">Explanation:</strong> ${escapeHtml(q.explanation)}</div>` : ''}
        </div>
      `;
    }).join('');
  } else if (pack.section === 'read-and-select') {
    const word = (pack.words || [])[idx];
    return Boolean(word && state.answers[word.id]);
  }

  if (pack.section === 'fill-in-the-blank') {
    const q = (pack.questions && pack.questions[idx]) || { id: 'q1-c-test-passage' };
    if (!q) return false;
    const inputs = document.querySelectorAll('.c-test-input-cell');
    if (!inputs.length) return false;
    // Check if all letter cells have input
    return Array.from(inputs).every((input) => input.value.trim().length > 0);
  }

  const q = pack.questions[idx];
  if (!q) return false;
  if (q.type === 'complete_the_sentences') {
    const qAns = state.answers[q.id] || {};
    return q.blanks.every((b) => Boolean(qAns[b.id]));
  }
  return Boolean(state.answers[q.id]);
}

/* ==========================================================================
   SECTION: LISTEN AND TYPE (MATCHED TO DET Listening.png)
   ========================================================================== */
function renderListeningStage(q, pack) {
  if (!q) return;

  const promptEl = document.getElementById('det-listening-prompt');
  const playBtn = document.getElementById('det-audio-play-btn');
  const replaysBadge = document.getElementById('det-replays-badge');
  const voiceIndicator = document.getElementById('det-voice-indicator');
  const textarea = document.getElementById('det-listening-textarea');
  const submitBtn = document.getElementById('det-submit-btn');

  if (promptEl) {
    promptEl.textContent = q.prompt || 'Type what you hear';
  }

  if (voiceIndicator) {
    const isMale = String(q.voice).toLowerCase() === 'male';
    voiceIndicator.textContent = `Speaker: ${isMale ? 'Male Voice' : 'Female Voice'}`;
  }

  if (replaysBadge) {
    replaysBadge.textContent = `REPLAYS LEFT: ${state.replaysLeft}`;
    replaysBadge.classList.toggle('exhausted', state.replaysLeft === 0);
  }

  if (playBtn) {
    playBtn.classList.toggle('replays-exhausted', state.replaysLeft === 0);
    playBtn.disabled = state.replaysLeft === 0 && !state.isSpeaking;
  }

  if (textarea) {
    textarea.value = state.answers[q.id] || '';
    textarea.disabled = state.isGradedCurrentQuestion;
    if (!state.isGradedCurrentQuestion) {
      setTimeout(() => textarea.focus(), 80);
    }
  }

  if (submitBtn) {
    submitBtn.disabled = !(state.answers[q.id] || '').trim().length;
  }

  // 1 initial auto-play at start of question (does not consume replays)
  if (!state.hasPlayedAtStart && !state.isGradedCurrentQuestion) {
    state.hasPlayedAtStart = true;
    playListeningAudio(q, false);
  }
}

function playListeningAudio(q, isReplay = false) {
  if (!q) return;

  if (isReplay) {
    if (state.replaysLeft <= 0) return;
    state.replaysLeft -= 1;
    const replaysBadge = document.getElementById('det-replays-badge');
    const playBtn = document.getElementById('det-audio-play-btn');
    if (replaysBadge) {
      replaysBadge.textContent = `REPLAYS LEFT: ${state.replaysLeft}`;
      if (state.replaysLeft === 0) replaysBadge.classList.add('exhausted');
    }
    if (playBtn && state.replaysLeft === 0) {
      playBtn.classList.add('replays-exhausted');
    }
  }

  const playBtn = document.getElementById('det-audio-play-btn');

  TTSManager.speak(
    q.text,
    q.voice,
    () => {
      if (playBtn) playBtn.classList.add('is-playing');
    },
    () => {
      if (playBtn) {
        playBtn.classList.remove('is-playing');
        if (state.replaysLeft === 0) {
          playBtn.disabled = true;
        }
      }
    }
  );
}

function evaluateTranscription(userText, targetText) {
  const clean = (str) =>
    (str || '')
      .toLowerCase()
      .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()?"'’]/g, '')
      .replace(/\s+/g, ' ')
      .trim();

  const userClean = clean(userText);
  const targetClean = clean(targetText);

  if (userClean === targetClean) {
    return {
      isCorrect: true,
      isPartiallyCorrect: false,
      accuracy: 1,
      diffTokens: (targetText || '').trim().split(/\s+/).map((word) => ({ word, status: 'correct' })),
    };
  }

  const userTokens = userClean.split(' ').filter(Boolean);
  const targetTokens = targetClean.split(' ').filter(Boolean);

  let matchCount = 0;
  const originalWords = (targetText || '').trim().split(/\s+/);
  const diffTokens = originalWords.map((word, idx) => {
    const stripped = clean(word);
    const userHasWord = userTokens.includes(stripped) || (userTokens[idx] && isCloseMatch(userTokens[idx], stripped));
    if (userHasWord) {
      matchCount += 1;
      return { word, status: 'correct' };
    } else {
      return { word, status: 'wrong' };
    }
  });

  const accuracy = targetTokens.length > 0 ? matchCount / targetTokens.length : 0;
  const isCorrect = accuracy >= 0.95;
  const isPartiallyCorrect = !isCorrect && accuracy >= 0.50;

  return { isCorrect, isPartiallyCorrect, accuracy, diffTokens };
}

function isCloseMatch(a, b) {
  if (a === b) return true;
  if (Math.abs(a.length - b.length) > 2) return false;
  let diffs = 0;
  let i = 0, j = 0;
  while (i < a.length && j < b.length) {
    if (a[i] !== b[j]) {
      diffs += 1;
      if (diffs > 1) return false;
      if (a.length > b.length) i++;
      else if (b.length > a.length) j++;
      else { i++; j++; }
    } else {
      i++; j++;
    }
  }
  return true;
}

/* ==========================================================================
   SECTION: READ AND SELECT (MATCHED TO Read and Select.png)
   ========================================================================== */
function renderReadAndSelectStage(word, pack) {
  if (!word) return;

  const promptEl = document.getElementById('det-read-select-prompt');
  const wordEl = document.getElementById('det-read-select-word');
  const yesBtn = document.getElementById('btn-choice-yes');
  const noBtn = document.getElementById('btn-choice-no');

  promptEl.textContent = pack.prompt || 'Is this a real English word?';
  wordEl.textContent = word.word;

  const userChoice = state.answers[word.id]; // 'yes' | 'no' | undefined
  yesBtn.classList.toggle('selected', userChoice === 'yes');
  noBtn.classList.toggle('selected', userChoice === 'no');

  yesBtn.onclick = () => {
    state.answers[word.id] = 'yes';
    yesBtn.classList.add('selected');
    noBtn.classList.remove('selected');
    gradeCurrentQuestion();
  };

  noBtn.onclick = () => {
    state.answers[word.id] = 'no';
    noBtn.classList.add('selected');
    yesBtn.classList.remove('selected');
    gradeCurrentQuestion();
  };
}

/* ==========================================================================
   SECTION: FILL IN THE BLANK (MATCHED TO Fill in blank.png / blank long.png)
   ========================================================================== */
function renderFillInTheBlankStage(q, pack) {
  const container = document.getElementById('det-fitb-stage');
  const promptEl = document.getElementById('det-fitb-prompt');
  const titleEl = document.getElementById('det-fitb-title');
  const passageEl = document.getElementById('det-fitb-passage');
  if (!container || !promptEl || !passageEl) return;

  const isSentence = pack.format === 'sentences';
  container.classList.toggle('single-sentence', isSentence);

  promptEl.textContent = q?.prompt || pack.prompt || (isSentence ? 'Complete the sentence with the correct word' : 'Complete the text with the correct words');

  if (pack.passageTitle && !isSentence) {
    titleEl.textContent = pack.passageTitle;
    titleEl.style.display = 'block';
  } else {
    titleEl.style.display = 'none';
  }

  const rawText = isSentence ? (q.sentence || '') : (pack.text || q.text || '');
  renderFitbCells(rawText, q, passageEl);
}

function renderFitbCells(rawText, q, containerEl) {
  if (!state.answers[q.id]) {
    state.answers[q.id] = {};
  }
  const qAns = state.answers[q.id];

  containerEl.innerHTML = '';
  const tokenRegex = /\{\{([a-zA-Z]*)\|?([a-zA-Z]+)?\}\}/g;
  let lastIdx = 0;
  let match;
  let wordCounter = 0;

  const frag = document.createDocumentFragment();

  while ((match = tokenRegex.exec(rawText)) !== null) {
    if (match.index > lastIdx) {
      frag.appendChild(document.createTextNode(rawText.slice(lastIdx, match.index)));
    }

    const wIdx = wordCounter++;
    let prefix = match[1] || '';
    let missing = match[2] || '';

    // If only one part provided in {{word}}, calculate C-test midpoint
    if (!missing && prefix) {
      const mid = Math.ceil(prefix.length / 2);
      missing = prefix.slice(mid);
      prefix = prefix.slice(0, mid);
    }

    const wordGroup = document.createElement('span');
    wordGroup.className = 'c-test-word-group';
    wordGroup.setAttribute('data-word-idx', String(wIdx));
    wordGroup.setAttribute('data-expected-prefix', prefix.toLowerCase());
    wordGroup.setAttribute('data-expected-missing', missing.toLowerCase());
    wordGroup.setAttribute('data-full-word', (prefix + missing).toLowerCase());

    // Given prefix cells
    for (let i = 0; i < prefix.length; i++) {
      const cell = document.createElement('span');
      cell.className = 'c-test-cell c-test-given-cell';
      cell.textContent = prefix[i];
      wordGroup.appendChild(cell);
    }

    // Missing input cells
    if (!qAns[wIdx]) qAns[wIdx] = {};
    for (let j = 0; j < missing.length; j++) {
      const input = document.createElement('input');
      input.type = 'text';
      input.className = 'c-test-cell c-test-input-cell';
      input.maxLength = 1;
      input.setAttribute('data-word-idx', String(wIdx));
      input.setAttribute('data-char-idx', String(j));
      input.setAttribute('autocomplete', 'off');
      input.setAttribute('autocapitalize', 'off');
      input.setAttribute('spellcheck', 'false');
      input.value = qAns[wIdx][j] || '';

      // Review color styling
      if (state.showTryAgainColors) {
        const expectedChar = missing[j].toLowerCase();
        const typedChar = (qAns[wIdx][j] || '').toLowerCase();
        if (typedChar === expectedChar) {
          input.classList.add('cell-correct');
        } else if (typedChar) {
          input.classList.add('cell-wrong');
        }
      }

      // Input event handler: auto-advance
      input.addEventListener('input', (e) => {
        const val = e.target.value.toLowerCase().replace(/[^a-z]/i, '');
        e.target.value = val;
        qAns[wIdx][j] = val;

        const allInputs = Array.from(containerEl.querySelectorAll('.c-test-input-cell'));
        const curIdx = allInputs.indexOf(input);

        if (val && curIdx < allInputs.length - 1) {
          allInputs[curIdx + 1].focus();
        }

        const submitBtn = document.getElementById('det-submit-btn');
        submitBtn.disabled = !checkIfCurrentQuestionAnswered(state.activePack);
      });

      // Keydown handler: Backspace & Arrow keys
      input.addEventListener('keydown', (e) => {
        const allInputs = Array.from(containerEl.querySelectorAll('.c-test-input-cell'));
        const curIdx = allInputs.indexOf(input);

        if (e.key === 'Backspace') {
          if (!input.value && curIdx > 0) {
            e.preventDefault();
            const prev = allInputs[curIdx - 1];
            prev.value = '';
            const pWIdx = prev.getAttribute('data-word-idx');
            const pCIdx = prev.getAttribute('data-char-idx');
            if (qAns[pWIdx]) delete qAns[pWIdx][pCIdx];
            prev.focus();
          } else {
            delete qAns[wIdx][j];
          }
          const submitBtn = document.getElementById('det-submit-btn');
          submitBtn.disabled = !checkIfCurrentQuestionAnswered(state.activePack);
        } else if (e.key === 'ArrowLeft' && curIdx > 0) {
          e.preventDefault();
          allInputs[curIdx - 1].focus();
        } else if (e.key === 'ArrowRight' && curIdx < allInputs.length - 1) {
          e.preventDefault();
          allInputs[curIdx + 1].focus();
        } else if (e.key === 'Enter') {
          const submitBtn = document.getElementById('det-submit-btn');
          if (!submitBtn.disabled) {
            gradeCurrentQuestion();
          }
        }
      });

      wordGroup.appendChild(input);
    }

    frag.appendChild(wordGroup);
    lastIdx = tokenRegex.lastIndex;
  }

  if (lastIdx < rawText.length) {
    frag.appendChild(document.createTextNode(rawText.slice(lastIdx)));
  }

  containerEl.appendChild(frag);

  // Auto-focus first empty input cell
  requestAnimationFrame(() => {
    const firstEmpty = containerEl.querySelector('.c-test-input-cell:not([disabled])');
    if (firstEmpty) firstEmpty.focus();
  });
}

/* ==========================================================================
   SECTION: INTERACTIVE READING STAGE
   ========================================================================== */
function renderInteractiveReadingStage(q, pack) {
  const passageTitleEl = document.getElementById('det-passage-header');
  const passageContentEl = document.getElementById('det-passage-content');
  const promptTitleEl = document.getElementById('det-prompt-title');
  const rightControlsEl = document.getElementById('det-right-controls');

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
}

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

    if (state.showTryAgainColors && blankDef && chosenWord) {
      const isCorrect = chosenWord.trim().toLowerCase() === blankDef.answer.trim().toLowerCase();
      cls += isCorrect ? ' review-correct' : ' review-wrong';
    }

    span.className = cls;
    span.setAttribute('data-blank-id', String(blankId));
    span.innerHTML = `<span class="blank-num-badge">${blankId}</span><span class="inline-blank-word">${escapeHtml(chosenWord)}</span>`;

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
        const isSelected = chosenWord === optText || (!chosenWord && optIdx === state.focusedOptionIndex);
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
      ${selectedHighlight ? escapeHtml(selectedHighlight) : 'Click and drag to highlight text'}
    </div>
  `;
}

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

function getCompletedParagraph1(pack) {
  if (pack.paragraph1) return pack.paragraph1;
  const part1Q = (pack.questions || []).find((q) => q.part === 1 || q.type === 'complete_the_sentences');
  if (!part1Q) return '';
  return part1Q.passage.replace(/\{\{(\d+)\}\}/g, (_, num) => {
    const b = part1Q.blanks.find((item) => item.id === Number(num));
    return b ? b.answer : '';
  });
}

function getCorrectConnectingSentence(pack) {
  const part2Q = (pack.questions || []).find((q) => q.part === 2 || q.type === 'complete_the_passage');
  return part2Q ? part2Q.answer : '';
}

function getFullCohesivePassage(pack) {
  const p1 = getCompletedParagraph1(pack);
  const conn = getCorrectConnectingSentence(pack);
  const p2 = pack.paragraph2 || '';
  return [p1, conn, p2].filter(Boolean).join(' ');
}

/* ==========================================================================
   GRADING & DUOLINGO FEEDBACK DRAWER
   ========================================================================== */
function gradeCurrentQuestion() {
  const pack = state.activePack;
  if (!pack) return;
  const idx = state.currentQuestionIndex;

  state.isGradedCurrentQuestion = true;
  state.showTryAgainColors = false;

  // 0. GRADE LISTEN AND TYPE
  if (pack.section === 'listen-and-type') {
    const q = (pack.questions || [])[idx];
    const userText = (state.answers[q.id] || '').trim();
    const evalResult = evaluateTranscription(userText, q.text);

    const detailsTokens = evalResult.diffTokens.map((tok) => {
      const cls = tok.status === 'correct' ? 'listening-diff-word-correct' : 'listening-diff-word-wrong';
      return `<span class="${cls}">${escapeHtml(tok.word)}</span>`;
    }).join(' ');

    state.feedbackState = {
      status: evalResult.isCorrect ? 'correct' : evalResult.isPartiallyCorrect ? 'partially-correct' : 'incorrect',
      title: evalResult.isCorrect ? 'Great job!' : evalResult.isPartiallyCorrect ? 'Partially correct' : 'Incorrect',
      isPerfect: evalResult.isCorrect,
      sublabel: evalResult.isCorrect ? '' : 'Expected Transcription:',
      detailsHtml: `
        <div class="listening-diff-box">${detailsTokens}</div>
        <div style="margin-top: 6px; font-size: 13.5px; color: var(--det-text-secondary);">Your response: "${escapeHtml(userText || '(No response)')}"</div>
        ${q.explanation ? `<div style="font-size: 12.5px; color: #555555; margin-top: 4px;"><strong>Note:</strong> ${escapeHtml(q.explanation)}</div>` : ''}
      `,
    };
    renderPracticeCard();
    return;
  }

  // 1. GRADE READ AND SELECT
  if (pack.section === 'read-and-select') {
    const words = pack.words || [];
    const word = words[idx];
    const userChoice = state.answers[word.id]; // 'yes' | 'no'
    const isCorrect = (userChoice === 'yes') === Boolean(word.isReal);

    state.feedbackState = {
      status: isCorrect ? 'correct' : 'incorrect',
      title: isCorrect ? 'Great job!' : 'Incorrect',
      isPerfect: isCorrect,
      sublabel: word.isReal ? 'Real English Word' : 'Invented Pseudo-Word',
      detailsHtml: `<span class="det-feedback-words">${escapeHtml(word.explanation || '')}</span>`,
    };
    renderPracticeCard();
    return;
  }

  // 2. GRADE FILL IN THE BLANK
  if (pack.section === 'fill-in-the-blank') {
    const q = (pack.questions && pack.questions[idx]) || { id: 'q1-c-test-passage' };
    const qAns = state.answers[q.id] || {};
    const wordGroups = document.querySelectorAll('.c-test-word-group');
    let totalWords = wordGroups.length;
    let correctWords = 0;
    const summaryTokens = [];

    wordGroups.forEach((wg, wIdx) => {
      const prefix = wg.getAttribute('data-expected-prefix') || '';
      const missing = wg.getAttribute('data-expected-missing') || '';
      const fullWord = wg.getAttribute('data-full-word') || '';

      const typedMissing = Object.keys(qAns[wIdx] || {})
        .sort((a, b) => Number(a) - Number(b))
        .map((k) => (qAns[wIdx][k] || '').toLowerCase())
        .join('');

      const isMatch = typedMissing === missing;
      if (isMatch) correctWords += 1;

      // Color code cells
      const cells = wg.querySelectorAll('.c-test-input-cell');
      cells.forEach((cell, cIdx) => {
        const typedC = (cell.value || '').toLowerCase();
        const expC = (missing[cIdx] || '').toLowerCase();
        cell.classList.remove('cell-correct', 'cell-wrong');
        cell.classList.add(typedC === expC ? 'cell-correct' : 'cell-wrong');
      });

      summaryTokens.push(
        `<span class="answer-token ${isMatch ? '' : 'was-wrong'}">${escapeHtml(fullWord)}</span>`
      );
    });

    const isAllCorrect = correctWords === totalWords;
    state.feedbackState = {
      status: isAllCorrect ? 'correct' : correctWords > 0 ? 'partially-correct' : 'incorrect',
      title: isAllCorrect ? 'Great job!' : correctWords > 0 ? 'Partially correct' : 'Incorrect',
      isPerfect: isAllCorrect,
      sublabel: isAllCorrect ? '' : 'Expected Words:',
      detailsHtml: summaryTokens.join('  '),
    };
    renderPracticeCard();
    return;
  }

  // 3. GRADE INTERACTIVE READING
  const q = pack.questions[idx];
  if (q.type === 'complete_the_sentences') {
    const qAns = state.answers[q.id] || {};
    let correctCount = 0;
    const tokensHtml = q.blanks
      .map((b) => {
        const userWord = (qAns[b.id] || '').trim();
        const isMatch = userWord.toLowerCase() === b.answer.trim().toLowerCase();
        if (isMatch) correctCount += 1;
        return `<span class="answer-token ${isMatch ? '' : 'was-wrong'}">${b.id}. ${escapeHtml(b.answer)}</span>`;
      })
      .join('  ');

    const isAllRight = correctCount === q.blanks.length;
    state.feedbackState = {
      status: isAllRight ? 'correct' : correctCount > 0 ? 'partially-correct' : 'incorrect',
      title: isAllRight ? 'Great job!' : correctCount > 0 ? 'Partially correct' : 'Incorrect',
      isPerfect: isAllRight,
      sublabel: isAllRight ? '' : 'Correct Answers:',
      detailsHtml: tokensHtml,
    };
  } else if (q.type === 'highlight_the_answer') {
    const userSel = (state.answers[q.id] || '').trim().toLowerCase();
    const target = q.answer.trim().toLowerCase();
    const isCorrect =
      userSel.includes(target) ||
      target.includes(userSel) ||
      (q.acceptableSubstrings || []).some((sub) => userSel.includes(sub.toLowerCase()));

    state.feedbackState = {
      status: isCorrect ? 'correct' : 'incorrect',
      title: isCorrect ? 'Great job!' : 'Incorrect',
      isPerfect: isCorrect,
      sublabel: isCorrect ? '' : 'Correct Answer in Passage:',
      detailsHtml: `<span class="det-feedback-words">${escapeHtml(q.answer)}</span>`,
    };
  } else {
    const userChoice = (state.answers[q.id] || '').trim().toLowerCase();
    const target = q.answer.trim().toLowerCase();
    const isCorrect = userChoice === target;

    state.feedbackState = {
      status: isCorrect ? 'correct' : 'incorrect',
      title: isCorrect ? 'Great job!' : 'Incorrect',
      isPerfect: isCorrect,
      sublabel: isCorrect ? '' : 'Correct Answer:',
      detailsHtml: `<span class="det-feedback-words">${escapeHtml(q.answer)}</span>`,
    };
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

  let buttonsHtml = '';
  if (fb.isPerfect) {
    buttonsHtml = `
      <button type="button" id="btn-feedback-continue" class="det-feedback-btn btn-feedback-green">
        <span class="btn-feedback-text">CONTINUE</span>
      </button>
    `;
  } else {
    const tryAgainClass = fb.status === 'partially-correct' ? 'btn-feedback-yellow' : 'btn-feedback-red';
    buttonsHtml = `
      <div class="det-feedback-buttons">
        <button type="button" id="btn-feedback-try-again" class="det-feedback-btn ${tryAgainClass}">
          <span class="btn-feedback-text">TRY AGAIN</span>
        </button>
        <button type="button" id="btn-feedback-continue" class="det-feedback-btn btn-feedback-outline">
          <span class="btn-feedback-text">NEXT QUESTION →</span>
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
      ${fb.sublabel ? `<div class="det-feedback-answers">
          <div class="det-feedback-sublabel">${escapeHtml(fb.sublabel)}</div>
          <div>${fb.detailsHtml}</div>
        </div>` : ''}
    </div>
    ${buttonsHtml}
  `;

  document.getElementById('btn-feedback-continue')?.addEventListener('click', () => {
    advanceToNextQuestion();
  });

  document.getElementById('btn-feedback-try-again')?.addEventListener('click', () => {
    state.isGradedCurrentQuestion = false;
    state.feedbackState = null;
    state.showTryAgainColors = true;
    renderPracticeCard();
    const textarea = document.getElementById('det-listening-textarea');
    if (textarea && state.activePack?.section === 'listen-and-type') {
      textarea.focus();
    }
  });
}

function advanceToNextQuestion() {
  TTSManager.stop();
  const pack = state.activePack;
  state.isGradedCurrentQuestion = false;
  state.feedbackState = null;
  state.showTryAgainColors = false;

  const total = pack.section === 'read-and-select'
    ? (pack.words || []).length
    : (pack.questions || []).length;

  if (state.currentQuestionIndex < total - 1) {
    state.currentQuestionIndex += 1;
    if (pack.section === 'listen-and-type') {
      state.replaysLeft = 2;
      state.hasPlayedAtStart = false;
      state.remainingSeconds = pack.timePerQuestionSeconds || 60;
    } else if (pack.section === 'interactive-reading') {
      const nextQ = pack.questions[state.currentQuestionIndex];
      if (nextQ?.type === 'complete_the_sentences' && nextQ.blanks?.length) {
        state.openBlankId = nextQ.blanks[0].id;
        state.focusedOptionIndex = 0;
      } else {
        state.openBlankId = null;
      }
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

  let totalQuestions = 0;
  let correctQuestions = 0;
  let breakdownHtml = '';

  if (pack.section === 'read-and-select') {
    const words = pack.words || [];
    totalQuestions = words.length;
    breakdownHtml = words.map((w, idx) => {
      const userChoice = state.answers[w.id];
      const isCorrect = (userChoice === 'yes') === Boolean(w.isReal);
      if (isCorrect) correctQuestions += 1;
      return `
        <div class="breakdown-item">
          <div class="breakdown-item-top">
            <strong>${w.word} (${w.isReal ? 'Real Word' : 'Pseudo-Word'})</strong>
            <span style="font-weight: 800; color: ${isCorrect ? 'var(--duo-green-text)' : 'var(--duo-red-text)'};">
              ${isCorrect ? '✓ Correct' : '✕ Incorrect'}
            </span>
          </div>
          <div style="font-size: 13.5px; color: var(--det-text-secondary); margin-bottom: 4px;">
            Your Answer: "${escapeHtml(userChoice || 'None')}" • Real Word: ${w.isReal ? 'Yes' : 'No'}
          </div>
          ${w.explanation ? `<div style="font-size: 13px; color: #555555; background: #fafafa; padding: 8px 12px; border-radius: 8px;"><strong style="color: #333;">Explanation:</strong> ${escapeHtml(w.explanation)}</div>` : ''}
        </div>
      `;
    }).join('');
  } else if (pack.section === 'fill-in-the-blank') {
    totalQuestions = pack.questions.length;
    breakdownHtml = pack.questions.map((q, idx) => {
      const qAns = state.answers[q.id] || {};
      return `
        <div class="breakdown-item">
          <div class="breakdown-item-top">
            <strong>Question ${idx + 1} (${escapeHtml(q.prompt || 'Fill in the Blank')})</strong>
          </div>
          ${q.explanation ? `<div style="font-size: 13px; color: #555555; background: #fafafa; padding: 8px 12px; border-radius: 8px; margin-top: 6px;"><strong style="color: #333;">Explanation:</strong> ${escapeHtml(q.explanation)}</div>` : ''}
        </div>
      `;
    }).join('');
    correctQuestions = totalQuestions; // simplified summary
  } else {
    // Interactive Reading
    totalQuestions = pack.questions.length;
    breakdownHtml = pack.questions.map((q, idx) => {
      let isCorrect = false;
      let userDisplay = '';
      if (q.type === 'complete_the_sentences') {
        const qAns = state.answers[q.id] || {};
        const allRight = q.blanks.every(
          (b) => (qAns[b.id] || '').trim().toLowerCase() === b.answer.trim().toLowerCase()
        );
        isCorrect = allRight;
        userDisplay = `${q.blanks.filter((b) => (qAns[b.id] || '').trim().toLowerCase() === b.answer.trim().toLowerCase()).length} / ${q.blanks.length} blanks correct`;
      } else if (q.type === 'highlight_the_answer') {
        const userSel = (state.answers[q.id] || '').trim().toLowerCase();
        const target = q.answer.trim().toLowerCase();
        isCorrect = userSel.includes(target) || target.includes(userSel) || (q.acceptableSubstrings || []).some((sub) => userSel.includes(sub.toLowerCase()));
        userDisplay = `Highlighted: "${escapeHtml(state.answers[q.id] || '(none)')}"`;
      } else {
        isCorrect = (state.answers[q.id] || '').trim().toLowerCase() === q.answer.trim().toLowerCase();
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
          ${q.explanation ? `<div style="font-size: 13px; color: #555555; background: #fafafa; padding: 8px 12px; border-radius: 8px; margin-top: 6px;"><strong style="color: #333;">Explanation:</strong> ${escapeHtml(q.explanation)}</div>` : ''}
        </div>
      `;
    }).join('');
  }

  const accuracy = totalQuestions > 0 ? Math.round((correctQuestions / totalQuestions) * 100) : 100;
  const estScore = Math.round(10 + (accuracy / 100) * 150);

  overlay.innerHTML = `
    <div class="results-hero-card">
      <div class="brand-badge" style="margin: 0 auto 16px; width: 48px; height: 48px; font-size: 18px; font-weight: 800; display: flex; align-items: center; justify-content: center;">DET</div>
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
  TTSManager.stop();
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
  // Navigator Category Dropdowns & All Tab
  const allTabBtn = document.querySelector('.skills-tab[data-skill-group="all"]');
  allTabBtn?.addEventListener('click', () => {
    state.selectedSkillGroup = 'all';
    state.selectedSectionFilter = 'all';
    document.querySelectorAll('.skills-dropdown-container.open').forEach((c) => {
      c.classList.remove('open');
      c.querySelector('.skills-dropdown-trigger')?.setAttribute('aria-expanded', 'false');
    });
    renderHub();
  });

  document.querySelectorAll('.skills-dropdown-trigger').forEach((trigger) => {
    trigger.addEventListener('click', (e) => {
      e.stopPropagation();
      const container = trigger.closest('.skills-dropdown-container');
      const isOpen = container?.classList.contains('open');

      document.querySelectorAll('.skills-dropdown-container.open').forEach((c) => {
        if (c !== container) {
          c.classList.remove('open');
          c.querySelector('.skills-dropdown-trigger')?.setAttribute('aria-expanded', 'false');
        }
      });

      container?.classList.toggle('open', !isOpen);
      trigger.setAttribute('aria-expanded', String(!isOpen));

      const group = trigger.getAttribute('data-skill-group');
      if (group && state.selectedSkillGroup !== group) {
        state.selectedSkillGroup = group;
        state.selectedSectionFilter = group === 'reading' ? 'reading-all' : 'listening-all';
        renderHub();
      }
    });
  });

  document.querySelectorAll('.skills-dropdown-item').forEach((item) => {
    item.addEventListener('click', (e) => {
      e.stopPropagation();
      const group = item.getAttribute('data-skill-group');
      const filter = item.getAttribute('data-section-filter');
      state.selectedSkillGroup = group;
      state.selectedSectionFilter = filter;

      const container = item.closest('.skills-dropdown-container');
      container?.classList.remove('open');
      container?.querySelector('.skills-dropdown-trigger')?.setAttribute('aria-expanded', 'false');

      renderHub();
    });
  });

  // Close dropdowns on click outside
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.skills-dropdown-container')) {
      document.querySelectorAll('.skills-dropdown-container.open').forEach((c) => {
        c.classList.remove('open');
        c.querySelector('.skills-dropdown-trigger')?.setAttribute('aria-expanded', 'false');
      });
    }
  });

  // Close dropdowns on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      document.querySelectorAll('.skills-dropdown-container.open').forEach((c) => {
        c.classList.remove('open');
        c.querySelector('.skills-dropdown-trigger')?.setAttribute('aria-expanded', 'false');
      });
    }
  });

  // Start first pack button in hub
  document.getElementById('btn-header-start-first')?.addEventListener('click', () => {
    const available = state.packsMeta.filter((p) => {
      if (state.selectedSkillGroup === 'reading') {
        const isReading = SECTION_META[p.section]?.skill === 'reading';
        if (!isReading) return false;
        if (state.selectedSectionFilter === 'reading-all' || state.selectedSectionFilter === 'all') return true;
        return p.section === state.selectedSectionFilter;
      }
      if (state.selectedSkillGroup === 'listening') {
        const isListening = SECTION_META[p.section]?.skill === 'listening';
        if (!isListening) return false;
        if (state.selectedSectionFilter === 'listening-all' || state.selectedSectionFilter === 'all') return true;
        return p.section === state.selectedSectionFilter;
      }
      if (state.selectedSectionFilter === 'all') return true;
      return p.section === state.selectedSectionFilter;
    });
    const targetId = available[0]?.id || state.activePackId;
    startPracticeSession(targetId);
  });

  // Close test stage button
  document.getElementById('det-close-btn')?.addEventListener('click', () => {
    switchView('hub');
  });

  // Submit button
  document.getElementById('det-submit-btn')?.addEventListener('click', () => {
    gradeCurrentQuestion();
  });

  // Listening Stage Audio Replay Button
  document.getElementById('det-audio-play-btn')?.addEventListener('click', () => {
    const pack = state.activePack;
    if (!pack || pack.section !== 'listen-and-type') return;
    const q = (pack.questions || [])[state.currentQuestionIndex];
    if (!q) return;
    if (state.replaysLeft <= 0) return;
    playListeningAudio(q, true);
  });

  // Listening Stage Textarea Input & Enter Key Handling
  const listeningTextarea = document.getElementById('det-listening-textarea');
  listeningTextarea?.addEventListener('input', (e) => {
    const pack = state.activePack;
    if (!pack || pack.section !== 'listen-and-type') return;
    const q = (pack.questions || [])[state.currentQuestionIndex];
    if (!q) return;
    state.answers[q.id] = e.target.value;
    const submitBtn = document.getElementById('det-submit-btn');
    if (submitBtn) {
      submitBtn.disabled = !e.target.value.trim().length;
    }
  });

  listeningTextarea?.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      const submitBtn = document.getElementById('det-submit-btn');
      if (submitBtn && !submitBtn.disabled) {
        gradeCurrentQuestion();
      }
    }
  });

  // Keyboard shortcut listeners for Read & Select (Yes/No)
  window.addEventListener('keydown', (e) => {
    if (state.view !== 'practice' || !state.activePack) return;
    if (state.activePack.section === 'read-and-select' && !state.isGradedCurrentQuestion) {
      if (e.key === 'y' || e.key === 'Y' || e.key === '1' || e.key === 'ArrowLeft') {
        e.preventDefault();
        document.getElementById('btn-choice-yes')?.click();
      } else if (e.key === 'n' || e.key === 'N' || e.key === '2' || e.key === 'ArrowRight') {
        e.preventDefault();
        document.getElementById('btn-choice-no')?.click();
      }
    }
  });

  // Load JSON Modals
  const openJsonModalBtns = [
    document.getElementById('btn-nav-load-json'),
    document.getElementById('btn-header-load-json'),
    document.getElementById('btn-placeholder-load-json'),
  ];
  openJsonModalBtns.forEach((btn) => {
    btn?.addEventListener('click', () => openModal('json-modal'));
  });

  // Prompt Generator Modals
  const openPromptModalBtns = [
    document.getElementById('btn-nav-llm-prompt'),
    document.getElementById('btn-hero-llm-prompt'),
  ];
  openPromptModalBtns.forEach((btn) => {
    btn?.addEventListener('click', () => {
      syncPromptModalUI();
      openModal('prompt-modal');
    });
  });

  // Share Pack Button
  document.getElementById('btn-share-pack')?.addEventListener('click', () => {
    shareCurrentPack();
  });

  // Modal dismiss buttons
  document.querySelectorAll('[data-close-modal]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const targetId = btn.getAttribute('data-close-modal');
      closeModal(targetId);
    });
  });

  // Setup Prompt Modal Selectors (Section, Difficulty, Subtype)
  setupPromptModalInteractions();

  // Setup JSON upload & paste handlers with real-time section detection
  setupJsonModalInteractions();
}

function setupPromptModalInteractions() {
  const sectionPills = document.querySelectorAll('#prompt-section-pills .prompt-pill');
  const diffPills = document.querySelectorAll('#prompt-difficulty-pills .prompt-pill');
  const subtypePills = document.querySelectorAll('#prompt-subtype-pills .prompt-pill');
  const subtypeGroup = document.getElementById('prompt-subtype-group');

  sectionPills.forEach((btn) => {
    btn.addEventListener('click', () => {
      sectionPills.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');
      state.promptConfig.section = btn.getAttribute('data-prompt-section');
      if (subtypeGroup) {
        subtypeGroup.style.display = state.promptConfig.section === 'fill-in-the-blank' ? 'flex' : 'none';
      }
      syncPromptModalUI();
    });
  });

  diffPills.forEach((btn) => {
    btn.addEventListener('click', () => {
      diffPills.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');
      state.promptConfig.difficulty = btn.getAttribute('data-prompt-diff');
      syncPromptModalUI();
    });
  });

  subtypePills.forEach((btn) => {
    btn.addEventListener('click', () => {
      subtypePills.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');
      state.promptConfig.subtype = btn.getAttribute('data-prompt-subtype');
      syncPromptModalUI();
    });
  });

  document.getElementById('btn-copy-llm-prompt')?.addEventListener('click', async () => {
    const promptText = generateLlmPrompt(
      state.promptConfig.section,
      state.promptConfig.difficulty,
      state.promptConfig.subtype
    );
    try {
      await navigator.clipboard.writeText(promptText);
      showToast('Copied Prompt to clipboard!');
    } catch {
      const box = document.getElementById('llm-prompt-textarea');
      box?.select();
      document.execCommand('copy');
      showToast('Copied Prompt to clipboard!');
    }
  });
}

function syncPromptModalUI() {
  const promptBox = document.getElementById('llm-prompt-textarea');
  const headerBadge = document.getElementById('prompt-header-badge');
  const subtypeGroup = document.getElementById('prompt-subtype-group');

  if (subtypeGroup) {
    subtypeGroup.style.display = state.promptConfig.section === 'fill-in-the-blank' ? 'flex' : 'none';
  }

  if (headerBadge) {
    headerBadge.textContent = `"section": "${state.promptConfig.section}"`;
  }

  const promptText = generateLlmPrompt(
    state.promptConfig.section,
    state.promptConfig.difficulty,
    state.promptConfig.subtype
  );

  if (promptBox) {
    promptBox.value = promptText;
  }
}

function setupJsonModalInteractions() {
  const fileInput = document.getElementById('json-file-input');
  const dropzone = document.getElementById('json-dropzone');
  const jsonTextarea = document.getElementById('json-paste-textarea');
  const banner = document.getElementById('json-detected-section-banner');
  const badge = document.getElementById('json-detected-section-badge');

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

  jsonTextarea?.addEventListener('input', () => {
    const text = jsonTextarea.value.trim();
    if (!text) {
      if (banner) banner.style.display = 'none';
      return;
    }
    try {
      const parsed = JSON.parse(text);
      let detectedSec = parsed.section;
      if (!detectedSec) {
        if (Array.isArray(parsed.words)) detectedSec = 'read-and-select';
        else if (parsed.text?.includes('{{')) detectedSec = 'fill-in-the-blank';
        else if (parsed.questions && (parsed.questions[0]?.voice || parsed.questions[0]?.audioText)) detectedSec = 'listen-and-type';
        else detectedSec = 'interactive-reading';
      }
      if (banner && badge) {
        banner.style.display = 'flex';
        badge.textContent = `"section": "${detectedSec}"`;
      }
    } catch {
      if (banner) banner.style.display = 'none';
    }
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
      state.selectedSkillGroup = SECTION_META[pack.section]?.skill || 'all';
      state.selectedSectionFilter = pack.section;
      closeModal('json-modal');
      renderHub();
      startPracticeSession(pack.id);
      showToast(`Loaded "${pack.title}" (${pack.section})!`);
    } catch (err) {
      showModalError(`Invalid JSON format: ${err.message}`);
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
      state.selectedSkillGroup = SECTION_META[pack.section]?.skill || 'all';
      state.selectedSectionFilter = pack.section;
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
    url.searchParams.set('section', pack.section);
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
    generateLlmPrompt,
  };
}

if (typeof document !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initApp);
  } else {
    initApp();
  }
}