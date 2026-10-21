# DuoPrep — Duolingo English Test (DET) Prep Platform

A lightweight, zero-build web application modeled faithfully after the official **Duolingo English Test (DET)**, featuring **Interactive Reading**, **Read and Select**, and **Fill in the Blank (C-Test)**. Built with instantaneous Duolingo tactile feedback drawers, dynamic LLM prompt generator with difficulty selection, robust JSON importing with automatic section validation, and seamless GitHub Pages hosting.

---

## 🧭 Skills Practice Navigator

Modeled after the Duolingo English Test skills practice interface:

- **Skills Tabs**:
  - `全部題型` (All Skills)
  - `SPEAKING` *(Module in development)*
  - `WRITING` *(Module in development)*
  - `READING` (Active Skill Hub)
  - `LISTENING` *(Module in development)*
- **Reading Sub-Filters**:
  - `All Question Types`: View all available question packs across all reading sections.
  - `📖 Interactive Reading`: 6-question multi-part reading comprehension sets.
  - `✏️ Fill in the Blank`: C-Test letter completion for passages and single sentences.
  - `✓/✕ Read and Select`: Real vs. pseudo English vocabulary distinction.

---

## 🏛 Supported Test Sections

### 1. Interactive Reading (`"section": "interactive-reading"`)
Follows the official evolving 3-part / 6-question sequence on a single cohesive passage:

| Part | Task Type | Questions | Description |
|---|---|---|---|
| **Part 1** | **Complete the Sentences** | 1 Question (6~7 blanks) | Read Paragraph 1 and select the best word for each inline blank from a 5-option dropdown. |
| **Part 2** | **Complete the Passage** | 1 Question (Connecting sentence) | Paragraph 1 is shown with **all correct answers filled in**. Select the best sentence to connect Paragraph 1 and Paragraph 2. |
| **Part 3** | **Highlight the Answer (×2)** | 2 Questions | Full combined passage is shown. Click & drag to highlight answers to specific questions. |
| **Part 3** | **Identify the Idea** | 1 Question (MCQ) | Select the main idea synthesized across the whole passage. |
| **Part 3** | **Title the Passage** | 1 Question (MCQ) | Select the best overarching title for the passage. |

> [!IMPORTANT]
> **Cohesive Passage Evolution Rule**:  
> In Part 2, Paragraph 1 is always displayed with **100% correct answers filled in** even if the student answered blanks incorrectly in Part 1. Similarly, in Part 3, the entire passage incorporates the **100% correct connecting sentence** so test-takers always read a cohesive, grammatically sound text.

---

### 2. Read and Select (`"section": "read-and-select"`)
Matched to authentic Duolingo English Test vocabulary screening:
- **Prompt**: `"Is this a real English word?"`
- **Interface**: Centered 38px word with large tactile **Yes (✓)** and **No (✕)** square choice cards.
- **Pacing**: Rapid 5-second per word pacing with stopwatch clock.
- **Shortcuts**: Press `Y` or `1` for Yes; press `N` or `2` for No; press `Enter` to advance.
- **Scoring**: Instant feedback drawer showing word status, correct classification, and dictionary explanation.

---

### 3. Fill in the Blank / Read & Complete (`"section": "fill-in-the-blank"`)
Matched to Duolingo English Test C-Test letter-box format:
- **Passage C-Test** (`format: "passage"`): Academic or nonfiction passage with missing word halves. First sentence is intact; subsequent sentences omit the second half of key words.
- **Single Sentences** (`format: "sentences"`): Targeted single-sentence vocabulary and collocation drills.
- **Joined Letter-Box Cells**:
  - Given letters in fixed gray cells (`c-test-given-cell`).
  - Missing letters in interactive single-char input cells (`c-test-input-cell`).
- **Smart Keyboard Navigation**:
  - Auto-advances to the next input cell across words upon typing a letter.
  - Backspace clears and jumps back to the previous input cell.
  - Left / Right Arrow keys navigate between cells.
  - `Enter` submits when all cells are filled.

---

## 🛡 Mandatory `"section"` Header Indicator

To prevent question packs from being imported into the wrong practice section, every JSON pack **must** include a top-level `"section"` header:

```json
{
  "section": "interactive-reading"
}
```
*Valid section values*:
- `"interactive-reading"`
- `"fill-in-the-blank"`
- `"read-and-select"`

When loading JSON via the **📂 Load JSON** modal, the app automatically detects and validates this header in real time, displaying a color-coded badge.

---

## 🤖 Dynamic LLM Prompt Generator with Difficulty Selection

Click **🤖 AI Prompt Generator** in the header to open the interactive generator:

1. **Select Question Section**:
   - `📖 Interactive Reading`
   - `✏️ Fill in the Blank` (with `Passage C-Test` or `Single Sentences` toggle)
   - `✓/✕ Read and Select`
2. **Select Target Difficulty / DET Score Range**:
   - `B1` • Intermediate (DET 80–100)
   - `B2` • Upper-Intermediate (DET 105–120)
   - `C1` • Advanced (DET 125–140)
   - `C2` • Mastery (DET 145–160)
3. **Copy & Paste**: Click **Copy Prompt to Clipboard** and paste directly into ChatGPT, Claude, Gemini, or DeepSeek. The LLM will output valid JSON ready to import.

---

## 📋 JSON Schemas for LLM Generation

### 1. Read and Select Schema (`read-and-select`)

```json
{
  "section": "read-and-select",
  "id": "read-and-select-set-1",
  "title": "B2/C1 Academic Vocabulary",
  "difficulty": "B2–C1 • Upper-Intermediate",
  "timeLimitSeconds": 90,
  "timePerWordSeconds": 5,
  "prompt": "Is this a real English word?",
  "words": [
    {
      "id": "w1",
      "word": "conducted",
      "isReal": true,
      "explanation": "Past participle of 'conduct' — performed or organized an activity."
    },
    {
      "id": "w2",
      "word": "plorify",
      "isReal": false,
      "explanation": "Pseudo-word. Resembles Latinate verbs like 'clarify' or 'modify' but is not a real word."
    }
  ]
}
```

---

### 2. Fill in the Blank: Passage C-Test Schema (`fill-in-the-blank`)

Use `{{prefix|missing}}` notation to mark words to be completed:

```json
{
  "section": "fill-in-the-blank",
  "id": "fitb-passage-grit",
  "format": "passage",
  "title": "The Power of Determination",
  "difficulty": "B2 • Upper-Intermediate",
  "timeLimitSeconds": 180,
  "passageTitle": "The Power of Determination",
  "prompt": "Complete the text with the correct words",
  "text": "Success is not as important as determination. Even {{i|f}} you {{fa|il}}, {{y|ou}} should {{a|ct}} to {{wo|rk}} your {{har|d}} to {{so|lve}} a {{pro|blem}}.",
  "explanation": "Standard Duolingo C-Test: complete missing word halves from sentence context."
}
```

---

### 3. Fill in the Blank: Single Sentences Schema (`fill-in-the-blank`)

```json
{
  "section": "fill-in-the-blank",
  "id": "fitb-daily-expressions",
  "format": "sentences",
  "title": "Daily Expressions & Collocations",
  "difficulty": "B1 • Intermediate",
  "timeLimitSeconds": 120,
  "questions": [
    {
      "id": "fitb-s1",
      "prompt": "Complete the sentence with the correct word",
      "sentence": "I'm not in the {{mo|od}} to go out tonight.",
      "prefix": "mo",
      "missing": "od",
      "fullWord": "mood",
      "explanation": "'In the mood for/to do something' is a standard English idiom meaning inclined to."
    }
  ]
}
```

---

### 4. Interactive Reading Schema (`interactive-reading`)

```json
{
  "section": "interactive-reading",
  "id": "det-custom-reading-set",
  "title": "Urban Ecology: Wildlife Adaptation",
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
      "passage": "Sentence with a {{1}} word, followed by {{2}}...",
      "blanks": [
        {
          "id": 1,
          "options": ["correctWord", "distractor1", "distractor2", "distractor3", "distractor4"],
          "answer": "correctWord",
          "explanation": "Grammatical context."
        }
      ]
    },
    {
      "id": "q2-connecting",
      "part": 2,
      "type": "complete_the_passage",
      "prompt": "Select the best sentence to complete the passage",
      "passageTitle": "PASSAGE",
      "options": ["Distractor A", "Correct connecting sentence.", "Distractor C", "Distractor D", "Distractor E"],
      "answer": "Correct connecting sentence.",
      "explanation": "Bridges paragraphs 1 and 2."
    },
    {
      "id": "q3-highlight-1",
      "part": 3,
      "type": "highlight_the_answer",
      "prompt": "Highlight text in the passage to answer the question below",
      "question": "Specific question whose answer is an exact phrase in the passage?",
      "passageTitle": "PASSAGE",
      "answer": "exact phrase in the text",
      "acceptableSubstrings": ["exact phrase"],
      "explanation": "Found in paragraph 1."
    },
    {
      "id": "q4-highlight-2",
      "part": 3,
      "type": "highlight_the_answer",
      "prompt": "Highlight text in the passage to answer the question below",
      "question": "Second question whose answer is an exact phrase?",
      "passageTitle": "PASSAGE",
      "answer": "second exact phrase in the text",
      "acceptableSubstrings": ["second exact phrase"],
      "explanation": "Found in paragraph 2."
    },
    {
      "id": "q5-main-idea",
      "part": 3,
      "type": "identify_the_idea",
      "prompt": "Select the idea that is expressed in the passage",
      "passageTitle": "PASSAGE",
      "options": ["Synthesized correct main idea", "Distractor A", "Distractor B", "Distractor C"],
      "answer": "Synthesized correct main idea",
      "explanation": "Summarizes the overall message."
    },
    {
      "id": "q6-best-title",
      "part": 3,
      "type": "title_the_passage",
      "prompt": "Select the best title for the passage",
      "passageTitle": "PASSAGE",
      "options": ["Best Comprehensive Title", "Distractor title A", "Distractor title B", "Distractor title C"],
      "answer": "Best Comprehensive Title",
      "explanation": "Captures scope and topic."
    }
  ]
}
```

---

## 🚀 Hosting on GitHub Pages & Sharing with Friends

**DuoPrep** has zero compile steps (pure HTML5, CSS3, ES JavaScript) and runs seamlessly on GitHub Pages or directly offline (`file://`):

1. **Push to GitHub**:
   ```bash
   git add .
   git commit -m "Add Read and Select, Fill in the Blank, and Skills Navigator"
   git push origin main
   ```
2. In your repo on GitHub, go to **Settings → Pages**.
3. Under **Build and deployment**, select **Deploy from a branch**, choose branch **`main`** and folder **`/ (root)`**, then click **Save**.
4. Your site is live at `https://<your-username>.github.io/<your-repo>/`.

### Sharing Question Packs
- **🔗 Share Pack Link**: Generates a self-contained URL with the question pack encoded in the query string (`?data=...`) so friends can start practicing with 1 click without downloading anything.
- **📂 Load JSON Modal**: Drag-and-drop or paste any JSON file. The app validates the `"section"` header and saves custom packs to local storage.

---

## 🗂 Project Structure

```text
Duolingo-Prep/
├── index.html                          # Hub + DET Stage views (Interactive Reading, Read & Select, FITB)
├── css/
│   └── styles.css                      # Duolingo tactile design, Navigator tabs, C-test cells & drawers
├── js/
│   ├── app.js                          # Standalone bundled application logic (works file:// & web)
│   └── default-packs.js                # Built-in question packs, section metadata & prompt generators
├── questions/
│   ├── manifest.json                   # Index of bundled question packs
│   ├── firefighters-screenshot.json    # Authentic Interactive Reading matching screenshots
│   ├── full-interactive-reading.json   # Urban Ecology Interactive Reading
│   ├── science-technology-pack.json    # Sleep & Neuroscience Interactive Reading
│   ├── read-and-select-b2c1.json       # Read & Select B2/C1 vocabulary set
│   ├── read-and-select-c1c2.json       # Read & Select C1/C2 advanced vocabulary set
│   ├── fitb-power-of-determination.json# Passage C-test matching Fill in blank long screenshot
│   ├── fitb-daily-expressions.json     # Sentence C-test matching Fill in the blank screenshot
│   └── fitb-history-of-printing.json   # Advanced Academic C-test passage
└── README.md                           # Complete documentation, schemas & prompt instructions
```
