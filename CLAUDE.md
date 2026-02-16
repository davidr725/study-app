# Web Concepts Drill — Project Context

## What This Is
A mobile-first spaced repetition study app for web engineering concepts, deployed as a PWA on GitHub Pages. Modeled after the DMV Genie permit test app — structured practice tests, not passive flashcards.

**Live URL:** https://davidr725.github.io/study-app/
**Repo:** https://github.com/davidr725/study-app

## Tech Stack
- Vite + React (no TypeScript, no Tailwind)
- Inline CSS styles, dark theme (#0d0d1a background)
- PWA via vite-plugin-pwa (offline support, installable on phone)
- GitHub Pages deployment via GitHub Actions (push to main → auto-deploys)
- All data client-side, localStorage for persistence

## Architecture
All app logic lives in `src/App.jsx` (~850 lines). Data lives in `src/data/`.

```
src/
├── main.jsx               # React mount point
├── App.jsx                # All screens + components (single file)
└── data/
    ├── concepts.js        # Concept bank (32 concepts, 5 modules, 4 categories)
    └── questions.js       # Question bank (83 questions, expandable)
```

### App Flow (DMV Genie style)
```
Home Screen → Module cards (Foundations / Intermediate / Advanced)
  → Module Detail → Practice Test (structured "5/20" format) or Flashcards
    → Practice Test → answer → explanation ALWAYS shows → Next → Results
  → Flagged Questions (bookmarked hard questions)
  → Marathon (all questions shuffled)
```

### Key Components in App.jsx
- `HomeScreen` — module cards, flagged count, marathon button
- `ModuleDetail` — practice test + flashcards for one module, concept list
- `PracticeTest` — the core quiz experience (progress counter, flag icon, explanation on every answer, next button)
- `TestResults` — score circle, missed questions list, retry missed button
- `FlashcardMode` — flip cards with self-scoring, scoped to a module
- `ProgressBar` / `TestProgressBar` — mastery and test progress visuals

### Data Model
**Concept** (in concepts.js):
```js
{ id, term, definition, analogy, category, module }
```
- module: 1-5 (mapped to 3 groups via MODULE_GROUPS)
- category: "API Basics" | "Daily Engineering" | "Architecture" | "Web Fundamentals"

**Question** (in questions.js):
```js
{ id, conceptId, module, type, prompt, options, correctIndex, explanation, whySection? }
```
- types: "term_to_def", "def_to_term", "analogy_to_term", "term_to_analogy", "scenario"
- All render as multiple choice (4 options) regardless of type

**MODULE_GROUPS** (in concepts.js):
```js
[
  { id: 1, name: "Foundations", modules: [1, 2], color: "#f0c674" },
  { id: 2, name: "Intermediate", modules: [3], color: "#81a2be" },
  { id: 3, name: "Advanced", modules: [4, 5], color: "#b294bb" },
]
```

### localStorage Keys
- `study-weights` — per-concept spaced repetition weights (default 1.0, min 0.3, max 5.0)
- `study-flagged` — array of flagged question IDs
- `study-best-scores` — `{ moduleGroupId: { score, total } }`

### Spaced Repetition Algorithm
- Each concept has a weight (default 1.0)
- Correct: weight × 0.6 (min 0.3) — see it less
- Incorrect: weight × 1.8 (max 5.0) — see it much more
- Selection: weighted random (weight 5.0 = ~17x more likely than 0.3)

## Next Steps: Expand Question Bank to ~300

### Current: 32 concepts, 83 questions
### Target: ~44 concepts, ~300 questions

### New Concepts to Add (~12):
- HTTP status code specifics: 401 vs 403, 301 vs 302, 204, 429 (Module 2)
- URL structure: protocol, domain, path, query params, fragment (Module 1)
- JWT tokens (Module 3)
- WebSockets (Module 3)
- CDN (Module 4)
- Docker/Containers basics (Module 5)
- Git branching (Module 5)

### New Question Types to Add:
- **fill_in_blank**: "The _____ translates domain names into IP addresses." → 4 options
- **true_false**: "True or False: A 401 status code means unauthorized." → True/False + explanation
- **which_is_not**: "Which is NOT an HTTP method?" → 4 options, one is wrong
- **all_of_above / none_of_above**: options include "All of the above" or "None of the above"
- All still render as multiple choice — no app code changes needed, just different type strings and prompt styles

### Expansion Strategy:
1. Bump existing 32 concepts from ~2-3 questions each to 6-8 each (~120 new)
2. Add new question types (fill_in_blank, true_false, which_is_not) (~60 new)
3. Add more scenario questions with "why" explanations (~40 new)
4. Add the ~12 new concepts with 4-6 questions each (~60 new)
5. Total: ~83 existing + ~280 new ≈ ~360 questions

### Reference: DMV Genie App Structure
- ~493 questions total across 3 difficulty tiers
- Easy (140 questions, split into 40-question practice tests)
- Hard and Hardest have their own splits
- Fill-in-the-blank, image-based, multiple choice
- Explanation shows on EVERY answer (correct or incorrect)
- Users can flag/bookmark difficult questions

## Deployment
Push to main → GitHub Actions builds → deploys to GitHub Pages automatically.
No manual steps needed.

## Spec Document
Full product spec is in `WEB-CONCEPTS-DRILL-SPEC.md` — covers learning model, module system, question types, answer feedback UX, and spaced repetition algorithm in detail.
