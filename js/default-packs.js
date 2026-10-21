// Fallback bundled question sets so the app works both on GitHub Pages (via fetch)
// and when opened directly from a local folder (file:// protocol).

export const SECTION_META = {
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
  }
};

export const BUILTIN_MANIFEST = {
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
    }
  ]
};

export const FALLBACK_PACKS = {
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
  }
};

export function generateLlmPrompt(section = 'interactive-reading', difficulty = 'B2', subtype = 'passage') {
  const difficultyGuides = {
    B1: 'CEFR B1 (Intermediate, DET ~80-100): Clear standard English, everyday situations, common idioms, foundational vocabulary.',
    B2: 'CEFR B2 (Upper-Intermediate, DET ~105-120): Semi-academic and general nonfiction topics, diverse vocabulary, nuanced collocations.',
    C1: 'CEFR C1 (Advanced, DET ~125-140): Scholarly and scientific texts, sophisticated abstract vocabulary, complex clause structures.',
    C2: 'CEFR C2 (Mastery, DET ~145-160): Highly erudite, dense academic prose, precise discipline-specific terminology, advanced rhetoric.'
  };

  const diffDesc = difficultyGuides[difficulty] || difficultyGuides['B2'];

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

export const LLM_PROMPT_TEMPLATE = generateLlmPrompt('interactive-reading', 'B2');
