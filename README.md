# DuoPrep — Duolingo English Test (DET) Interactive Reading System

A lightweight, zero-build web application modeled after the official **Duolingo English Test (DET)** Interactive Reading section, featuring the exact 3-part test progression, instantaneous Duolingo feedback drawers, complete JSON question-bank loading, and seamless GitHub Pages hosting.

---

## 🏛 Section Structure

Interactive Reading on the Duolingo English Test follows an evolving 3-part / 6-question sequence on a single cohesive passage:

| Part | Task Type | Questions | Description |
|---|---|---|---|
| **Part 1** | **Complete the Sentences** | 1 Question (6~7 missing words, or 5~9) | Read Paragraph 1 and select the best word for each numbered inline blank from a 5-option dropdown. |
| **Part 2** | **Complete the Passage** | 1 Question (Connecting sentence) | Paragraph 1 is shown with **all correct answers filled in**. Select the best sentence to connect Paragraph 1 and Paragraph 2. |
| **Part 3** | **Highlight the Answer (×2)** | 2 Questions | The entire combined passage (Paragraph 1 + correct connecting sentence + Paragraph 2) is shown. Click & drag in the text to highlight answers to specific comprehension questions. |
| **Part 3** | **Identify the Idea** | 1 Question (MCQ) | Select the main idea expressed across the whole passage from 4 choices. |
| **Part 3** | **Title the Passage** | 1 Question (MCQ) | Select the best overarching title for the passage from 4 choices. |

> [!IMPORTANT]
> **Cohesive Passage Evolution Rule**:  
> In Part 2, the completed Paragraph 1 with **100% correct answers** is always displayed even if the test-taker answered blanks incorrectly in Part 1. Similarly, in Part 3, the entire passage incorporates the **100% correct connecting sentence** so the test-taker reads a fully cohesive, grammatically sound passage for text highlighting and high-level synthesis questions.

---

## 🎨 Faithful Duolingo UI & Visual Feedback Drawers

- **Part 1 (Cloze)**: Split-pane workspace with passage on left and collapsible dropdown cards on right. Clicking any inline blank opens and scrolls to its dropdown. Focus outline on active options matches the DET blue highlight.
- **Part 2 (Connecting Sentence)**: The chosen sentence fills the inline connecting slot in real-time inside the left pane.
- **Part 3 (Text Highlighting)**: Dragging text in the passage highlights it with the signature yellow marker (`#FFF176`) and synchronizes with the right-hand answer preview box.
- **Immediate Feedback Drawers**:
  - **All Correct**: Lime green banner (`Great job!`) with green 3D tactile `CONTINUE` button.
  - **Partially Correct**: Warm yellow banner (`Partially correct`) showing the full correct answer key with missed blanks underlined, and yellow `GOT IT` button.
  - **Incorrect**: Coral red banner (`Incorrect`) displaying the expected answer and red `GOT IT` button.
- **Timer & Countdown**: Running stopwatch timer displaying remaining questions (`for 6 questions` → `for 5 questions` → ... → `for 1 question`).
- **Comprehensive Score Review**: Post-test breakdown showing percentage accuracy, question-by-question explanations, and estimated DET score (10–160 scale).

---

## 🚀 Hosting on GitHub Pages & Sharing with Friends

Because **DuoPrep** is built with zero compile/build steps (pure standard HTML5, CSS3, and ES Modules), hosting is effortless:

1. Push this folder to a GitHub repository:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: DuoPrep DET system"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<your-repo>.git
   git push -u origin main
   ```
2. In your repo on GitHub, navigate to **Settings → Pages**.
3. Under **Build and deployment**, select **Deploy from a branch**, choose branch **`main`** and folder **`/ (root)`**, then click **Save**.
4. Your test prep app is live at `https://<your-username>.github.io/<your-repo>/`.

### 3 Ways to Share Question Sets with Friends

1. **Instant Share Link (No Git Push Needed)**  
   Load any JSON in the app, then click **🔗 Share Pack**. It generates a self-contained shareable URL with embedded data (`?data=...`) that you can send directly to friends.
2. **Send `.json` Files**  
   Send any `.json` file to your friend. They open your site, click **📂 Load JSON**, and drag-and-drop the file (or paste raw text). Loaded packs are saved locally in `localStorage`.
3. **Commit to `questions/` in the Repo**  
   Drop new files into [`questions/`](./questions/) and register them in [`questions/manifest.json`](./questions/manifest.json).

---

## 🤖 LLM Prompt & JSON Generation Guidelines

To generate new practice sets using ChatGPT, Claude, Gemini, or DeepSeek, copy the prompt below:

````markdown
You are an expert test-prep content creator for the Duolingo English Test (DET) "Interactive Reading" section.

Generate a complete Interactive Reading practice set in valid JSON following the exact 3-part / 6-question structure below. Output ONLY valid JSON (no markdown commentary outside the JSON block).

### Content & Difficulty Rules
- **Topic**: Academic or general nonfiction (e.g. natural sciences, psychology, public infrastructure, archaeology, economics).
- **Target Difficulty**: CEFR B2 to C1.
- **Text Structure**: Two cohesive paragraphs:
  - `paragraph1`: 70–100 words with 6~7 numbered blanks (written as {{1}}, {{2}}, etc.).
  - `paragraph2`: 70–100 words continuing the topic.
- **Part 1 (Complete the Sentences)**: 6~7 blanks in Paragraph 1. Each blank has exactly 5 options (1 correct + 4 plausible same-part-of-speech distractors) and a 1-sentence explanation.
- **Part 2 (Complete the Passage)**: 1 connecting sentence bridging Paragraph 1 and Paragraph 2. Exactly 5 options (1 correct + 4 distractors).
- **Part 3 (High-Level Comprehension)**:
  - 2 Highlight questions (`highlight_the_answer`) asking for specific phrases in the full text.
  - 1 Main Idea question (`identify_the_idea`) with 4 options.
  - 1 Best Title question (`title_the_passage`) with 4 options.

### JSON Schema
{
  "id": "det-custom-reading-set",
  "title": "Descriptive Title of the Set",
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
        "Distractor A",
        "Correct connecting sentence bridging Paragraph 1 and Paragraph 2.",
        "Distractor C",
        "Distractor D",
        "Distractor E"
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
      "explanation": "Location and context in the passage."
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
      "explanation": "Location and context in the passage."
    },
    {
      "id": "q5-main-idea",
      "part": 3,
      "type": "identify_the_idea",
      "prompt": "Select the idea that is expressed in the passage",
      "passageTitle": "PASSAGE",
      "options": [
        "Correct main idea synthesized across the entire text.",
        "Distractor idea A",
        "Distractor idea B",
        "Distractor idea C"
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
        "Distractor title A",
        "Distractor title B",
        "Distractor title C"
      ],
      "answer": "Best Comprehensive Title for the Passage",
      "explanation": "Why this title captures both the topic and the scope of the passage."
    }
  ]
}
````

---

## 🗂 Project Structure

```text
Duolingo-Prep/
├── index.html                          # Minimalistic Landing Hub + DET Interactive Reading Exam View
├── css/
│   └── styles.css                      # Duolingo tactile styles, feedback drawers & exam layout
├── js/
│   ├── app.js                          # Section flow, timer, passage sync, grading drawers & sharing
│   └── default-packs.js                # Built-in fallback packs & LLM prompt template
├── questions/
│   ├── manifest.json                   # Index of bundled question packs
│   ├── firefighters-screenshot.json    # Authentic reference set matching all screenshots
│   ├── full-interactive-reading.json   # Urban Ecology 3-part set
│   └── science-technology-pack.json    # Sleep & Neuroscience C1 set
└── README.md                           # Documentation, GitHub Pages guide & LLM generator rules
```
