# Web Concepts Drill — Product Spec

## What This Is

A flashcard/quiz drilling app designed for a PM learning web engineering concepts. The goal is memorization through aggressive repetition, not passive studying. The UX model is a DMV permit test app: quiz-first, no hand-holding, wrong answers show the correct answer immediately, and missed concepts resurface aggressively until mastered.

## Why This Works (Learning Model)

Most self-directed learning fails because there is no feedback loop. Watching a 19-hour coding tutorial activates recognition memory ("I've seen this") but not recall memory ("I can do this"). The learner gets a dopamine hit from consumption and mistakes familiarity for competence. It's the equivalent of watching someone exercise and believing you exercised.

School works — when it works — because feedback is forced. A teacher corrects you. An exam exposes what you don't know. Grad school case studies force you to make decisions and defend them before getting the "answer." The feedback is immediate, unavoidable, and often uncomfortable. That discomfort is the learning.

This app replicates that feedback loop without the teacher:

1. **Testing effect.** Retrieval practice (being quizzed) produces stronger memory encoding than passive review. The app never lets you passively read — every interaction is a test.

2. **Immediate corrective feedback.** When you're wrong, the app shows the correct answer with full context (term, definition, analogy, reasoning). The moment of failure is the moment of highest learning receptivity. The user must acknowledge the correction before advancing.

3. **Desirable difficulty via spaced repetition.** Concepts you miss resurface aggressively — soon enough to reinforce, but not so immediately that short-term memory handles it. The forgetting curve is the enemy; the repetition schedule is the countermeasure. V1 implements this within a session. Future versions should implement cross-session scheduling (Ebbinghaus-style intervals across days/weeks) for long-term retention.

4. **Progressive complexity.** The app teaches in two layers:
   - **Declarative knowledge** (Modules 1-3): What things are. Terms, definitions, how components work. Drilled via term/definition/analogy recall questions. This is the foundation.
   - **Applied judgment** (Modules 4-5 and scenario questions throughout): What to do and why. Scenario-based questions that present a situation and ask the learner to make a decision. These test whether the learner can *apply* concepts, not just name them. This bridges the gap between vocabulary and competence.

5. **The LLM as curriculum author.** This is the core unlock. The fundamental problem with self-directed learning isn't just missing feedback — it's that you can't test yourself on what you don't know exists. A beginner can't write a question about cache invalidation because they don't know cache invalidation is a problem, let alone what the decision framework is. Previously, creating a comprehensive test bank required a subject matter expert investing significant time. An LLM can generate hundreds of well-formed questions — with correct answers, plausible distractors, scenario contexts, and explanations — across any domain, on demand. The question authoring that previously required an expert is now essentially free. This means a self-directed learner can have a teacher-quality test bank without a teacher. The LLM doesn't replace the learning — it replaces the person who would have designed the curriculum.

6. **Variation prevents pattern matching.** Multiple question phrasings per concept ensure the learner understands the concept, not just the question. Because the question bank is LLM-generated, producing 5-10 variations per concept is trivial where it would have been expensive before. Different scenarios, different distractors, different framings — all generated at scale.

The ultimate skill being trained is **decision-making under ambiguity** — "given this situation, what should you do and why?" This is the core PM competency. The declarative knowledge modules exist to build the vocabulary and mental models needed to engage with the decision-making questions. You can't reason about whether to use microservices if you don't know what an API endpoint is.

Future versions can extend this further: diagram-based questions, multi-step scenario chains where one decision changes the next question, and free-text "explain why" responses evaluated by an LLM. The architecture should anticipate this.

---

## Core Philosophy

- **Quiz-first.** The app opens directly into a question. No landing page, no "start studying" button, no mode selection screen.
- **Assume nothing.** The app doesn't care if the user knows the material. It tests immediately and teaches through repeated failure and correction.
- **Show, don't tell.** When the user gets something wrong, the app shows the full correct answer with context (definition + analogy + reasoning). The learning happens in that moment.
- **Progressive difficulty.** Concepts are organized into modules that unlock sequentially. You can't be asked architectural tradeoff questions before you understand what an API is.
- **High volume.** Minimize transition time between questions. The goal is maximum reps per session. Fast animations, no unnecessary screens.

---

## Module System (Progressive Unlocking)

Concepts are grouped into modules. Each module unlocks when the previous module reaches 70% mastery (defined as: 70% of that module's concepts have been answered correctly 3+ times with <50% error rate on recent attempts).

### Module 1: How the Web Talks (Foundations)
Prerequisite: None

Concepts:
- API Endpoint
- HTTP Methods (GET, POST, PUT, PATCH, DELETE)
- Request/Response Format (JSON)
- HTTP Request Lifecycle (DNS → TCP → TLS → Request → Response → Render)
- DNS
- URL structure (protocol, domain, path, query params, fragment)

Scenario questions for this module:
- "A frontend dev says the API endpoint returns a 200 but the page is blank. Which part of the HTTP lifecycle likely failed?" → Render/parsing step. The request succeeded but the client isn't handling the response correctly.
- "Your team debates whether to use GET or POST for a search feature with complex filters. What's the tradeoff?" → GET puts params in the URL (bookmarkable, cacheable, length-limited). POST puts them in the body (no length limit, not cacheable, not bookmarkable).
- "An engineer says 'we need to change the API contract.' What does that mean in concrete terms?" → The request format, response format, endpoint URL, or expected behavior is changing — meaning every client consuming it needs to update.

### Module 2: Requests & Responses
Prerequisite: Module 1 at 70%

Concepts:
- HTTP Status Codes — 2xx: 200 OK, 201 Created, 204 No Content
- HTTP Status Codes — 3xx: 301 Moved Permanently, 302 Temporary Redirect, 304 Not Modified
- HTTP Status Codes — 4xx: 400 Bad Request, 401 Unauthorized, 403 Forbidden, 404 Not Found, 409 Conflict, 429 Too Many Requests
- HTTP Status Codes — 5xx: 500 Internal Server Error, 502 Bad Gateway, 503 Service Unavailable, 504 Gateway Timeout
- Request Headers & Response Headers
- API Key / Auth Token
- Rate Limiting
- Timeout

Scenario questions:
- "Users report the app is broken. Logs show a spike in 503s. Is this a bug in your code or an infrastructure problem?" → Infrastructure. 503 means the server is temporarily unable to handle requests — usually overloaded or in maintenance. Not a code bug.
- "You get a 401 from an API. Your teammate says 'we're not authorized.' What's technically wrong with that statement?" → 401 means unauthenticated (identity not verified), not unauthorized. 403 is unauthorized (identity verified but lacks permission). Common and important distinction.
- "An API returns 429. What should your app do?" → Back off and retry after a delay. The server is rate-limiting you. Check the Retry-After header if present.
- "A user says a page loads slowly but doesn't error. What's the first metric to check?" → Latency/response time of the API calls. Could be a timeout set too high, slow upstream dependency, or missing caching.

### Module 3: API Patterns & Auth
Prerequisite: Module 2 at 70%

Concepts:
- REST API
- GraphQL
- Webhook
- API Polling
- OAuth / SSO
- CORS
- API Gateway
- Middleware
- Idempotency

Scenario questions:
- "Your mobile app makes 6 API calls to load one screen. An engineer suggests switching to GraphQL. Why?" → GraphQL lets the client request exactly the data it needs in a single query, eliminating multiple round trips. Tradeoff: more complex server implementation, harder caching.
- "A payment webhook fires but your server was down. What happens to that payment notification?" → It's lost unless the webhook provider has a retry mechanism. This is why idempotency matters — when they retry, your system needs to handle receiving the same event twice without double-processing.
- "Frontend gets a CORS error when calling your API from localhost. Is this a bug?" → No. CORS is the browser enforcing that your API server hasn't explicitly allowed requests from that origin. The fix is server-side: add the origin to the allowed list. It's a security feature, not a bug.
- "Why would you use polling over a webhook?" → When the external service doesn't support webhooks. Or when you need data at predictable intervals rather than in response to events. Webhooks are preferred when available because they're more efficient.

### Module 4: Data & Performance
Prerequisite: Module 3 at 70%

Concepts:
- Caching
- Cache Invalidation
- Database Index
- Latency vs Throughput
- Sync vs Async operations
- Environment Variables
- State Management (frontend)
- DOM

Scenario questions:
- "Users see stale prices on the product page even after a price update. What's likely happening?" → Caching. The old price is cached somewhere (CDN, browser, application cache) and hasn't been invalidated yet. This is the classic cache invalidation problem.
- "An engineer says adding an index will speed up the search feature. What's the downside they might not mention?" → Write operations slow down because the index must be updated on every insert/update/delete. If the table has heavy writes, the tradeoff might not be worth it.
- "Your dashboard loads in 8 seconds. The engineer says 'the queries are synchronous.' What does that mean and what's the fix?" → Each database query waits for the previous one to finish before starting. The fix is to run independent queries in parallel (async). If 4 queries each take 2 seconds synchronously, they take 8s total. Async, they take ~2s.
- "QA reports that a feature works in staging but not production. What's the first thing to check?" → Environment variables. The most common cause of staging/prod discrepancies is different config: different API keys, different database URLs, different feature flags.

### Module 5: Infrastructure & Architecture
Prerequisite: Module 4 at 70%

Concepts:
- CI/CD
- Load Balancer
- Microservices vs Monolith
- Message Queue
- Promises / Async-Await (JavaScript)
- Event Loop (JavaScript)

Scenario questions:
- "A deploy broke production on Friday at 5pm. What process failure allowed this?" → Likely missing CI/CD safeguards: no automated tests catching the regression, no staged rollout (canary/blue-green), and possibly no deploy freeze policy for end-of-week.
- "The checkout service is down but the rest of the site works. Is this a monolith or microservices architecture?" → Microservices. In a monolith, if one part is down, everything is down. The fact that checkout failed independently suggests it's a separate service.
- "An engineer wants to add a message queue between the order service and the email service. Why not just call the email service directly?" → Decoupling. If the email service is slow or down, it shouldn't block order processing. The queue absorbs the work and the email service processes it when ready. Also handles traffic spikes gracefully.
- "Traffic spikes 10x during a sale. What infrastructure component handles this without rewriting code?" → Load balancer distributing traffic across multiple server instances. Combined with auto-scaling (spinning up more instances), this handles the spike. No code changes needed.

---

## Question Types

Each concept should have multiple question variations to prevent pattern memorization. Minimum 3 variations per concept.

### Type 1: Term → Definition (multiple choice)
"What is [term]?"
Four options, one correct definition, three plausible distractors from the same module.

### Type 2: Definition → Term (multiple choice)
"[Definition]. What concept is this describing?"
Four term options.

### Type 3: Analogy → Term (multiple choice)
"[Analogy]. What web concept does this represent?"
Four term options.

### Type 4: Term → Analogy (multiple choice)
"Which analogy best describes [term]?"
Four analogy options.

### Type 5: Scenario (multiple choice)
"[Scenario description]. [Question about what's happening or what to do]."
Four options. These are the most valuable — they test whether the user can apply the concept, not just recall it.

### Type 6: True/False with Explanation
"True or False: [Statement about a concept]."
After answering, show whether correct and display the explanation regardless.

### Type 7: "Which is NOT..." (elimination)
"Which of the following is NOT a [category/characteristic]?"
Tests boundary knowledge — what something ISN'T is as important as what it IS.

---

## Answer Feedback UX

When the user answers **correctly**:
- Brief green flash confirmation (0.5s)
- Show a one-line reinforcement (e.g., "Correct. 401 = unauthenticated, 403 = unauthorized.")
- Auto-advance to next question after 1.5s
- Option to tap to advance immediately

When the user answers **incorrectly**:
- Red flash on their selection, green highlight on the correct answer
- Expand a card below the question showing:
  - **Term** (bold)
  - **Definition** (the actual explanation)
  - **Analogy** (to anchor it in memory)
  - If it's a scenario question, a **"Why"** section explaining the reasoning
- User must tap "Got it" to advance (forced acknowledgment, not auto-advance)
- This concept gets flagged for aggressive re-drilling

---

## Spaced Repetition Algorithm

Each concept has a **weight** (default: 1.0) and a **queue position**.

On correct answer:
- weight = weight × 0.6 (min 0.2)
- Concept moves to the back of the queue

On incorrect answer:
- weight = weight × 2.0 (max 6.0)
- Concept is re-inserted 3-5 questions from now (not immediately, to avoid short-term memory gaming, but soon enough to reinforce)

Question selection: weighted random from the current module's unlocked concepts. Higher weight = higher probability of being selected. Concepts from earlier mastered modules are occasionally mixed in (10% of questions) to prevent forgetting.

---

## Progress & Stats

### Per-Module Progress Bar
- Shows at the top, compact
- Segments: Unseen | Learning | Mastered
- Mastered = answered correctly 3+ times with recent accuracy > 70%
- Module unlock threshold shown visually

### Session Stats (shown on demand, not blocking)
- Questions answered this session
- Accuracy this session
- Current streak
- Concepts mastered total / total concepts

### Concept Detail View (accessible from stats)
- Per-concept: times seen, times correct, current weight, last seen
- Sorted by: struggling (highest weight first)

---

## Tech Stack Recommendation

- **Next.js or Vite + React** — simple SPA, no backend needed initially
- **Local storage** for progress persistence (weights, mastery counts, module unlock state)
- **Tailwind CSS** — fast to style, consistent
- **Framer Motion** — for snappy transitions between questions (speed matters)
- All concept data lives in a JSON/TS file — easy to expand

---

## Content Data Structure

```typescript
interface Concept {
  id: string;
  term: string;
  definition: string;
  analogy: string;
  category: string; // for display grouping within a module
  module: number; // 1-5, determines unlock order
}

interface Question {
  id: string;
  conceptId: string; // primary concept being tested
  module: number;
  type: "term_to_def" | "def_to_term" | "analogy_to_term" | "term_to_analogy" | "scenario" | "true_false" | "which_is_not";
  prompt: string;
  options: string[]; // 2 for true/false, 4 for multiple choice
  correctIndex: number;
  explanation: string; // shown on correct and incorrect
  whySection?: string; // additional reasoning for scenario questions
}

interface ConceptProgress {
  conceptId: string;
  weight: number;
  timesSeen: number;
  timesCorrect: number;
  recentResults: boolean[]; // last 5 attempts
  lastSeen: number; // timestamp
}

interface ModuleProgress {
  module: number;
  unlocked: boolean;
  masteredCount: number;
  totalConcepts: number;
}
```

---

## Content Volume Target

- 37 concepts across 5 modules
- Minimum 3 question variations per concept = 111 base questions
- Plus ~30 scenario questions across modules = ~141 total questions
- Target: 200+ question variations for variety (add more term/def/analogy permutations)
- This gives enough variety that the user won't see the exact same question phrasing within a single session, even at 50+ questions per session

---

## Implementation Note: Question Bank

This spec contains ~30 hand-written questions (mostly scenarios). The remaining ~170 variations (term↔definition, term↔analogy, true/false, "which is NOT") should be generated programmatically or by the LLM during the build phase. The structure is mechanical — for each concept, produce at least 3 question permutations across the defined question types. Scenario questions require more care and should be reviewed for accuracy after generation. Build the engine and question data structure first, then bulk-generate the content to fill it.

---

## What NOT to Build

- No accounts/auth. Local storage only.
- No onboarding flow. Drop straight into Module 1 questions.
- No settings page. Sensible defaults only.
- No "study mode" or passive flashcard flipping. Every interaction is a quiz.
- No social features, leaderboards, or gamification beyond streak count.
- No spaced repetition scheduling across days (like Anki). This is session-based drilling. The user opens the app and grinds.

---

## Future Expansion (Out of Scope for V1)

- Diagram-based questions (e.g., "label this architecture diagram")
- User-submitted concepts
- Export progress
- Mobile-native version
- Daily streak tracking across sessions
- "Explain it back" mode where user types an explanation and AI evaluates it
