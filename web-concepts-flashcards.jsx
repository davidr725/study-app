import { useState, useCallback, useEffect, useRef } from "react";

const CONCEPTS = [
  // ─── Original API concepts ───
  {
    id: "endpoint",
    term: "API Endpoint",
    definition: "A specific URL where an API can be accessed to perform an operation on a resource.",
    analogy: "Your mailbox address — where things get sent and picked up.",
    category: "API Basics",
  },
  {
    id: "polling",
    term: "API Polling",
    definition: "Repeatedly sending requests to an endpoint at a set interval to check for new data or state changes.",
    analogy: "Walking to the mailbox every hour to check for letters.",
    category: "API Basics",
  },
  {
    id: "webhook",
    term: "Webhook",
    definition: "A callback mechanism where a service sends an HTTP POST to your registered URL when a specific event occurs.",
    analogy: "A doorbell — the carrier rings it the moment they drop something off.",
    category: "API Basics",
  },
  {
    id: "auth",
    term: "API Key / Auth Token",
    definition: "A credential included with requests to verify the identity and permissions of the caller.",
    analogy: "The lock on your mailbox — only people with the right key can use it.",
    category: "API Basics",
  },
  {
    id: "ratelimit",
    term: "Rate Limiting",
    definition: "A restriction on how many requests a client can make to an API within a given time window.",
    analogy: "A sign saying 'max 10 deliveries per hour.' The 11th carrier gets turned away.",
    category: "API Basics",
  },
  {
    id: "format",
    term: "Request/Response Format",
    definition: "The data serialization standard (JSON, XML, etc.) that both client and server agree to use for communication.",
    analogy: "The agreed-upon language the letters are written in. Both sides need to read the same language.",
    category: "API Basics",
  },
  {
    id: "methods",
    term: "HTTP Methods",
    definition: "Verbs (GET, POST, PUT, DELETE) that specify what operation to perform on the resource at an endpoint.",
    analogy: "What you ask the carrier to do — deliver (POST), hand over (GET), replace (PUT), or throw away (DELETE).",
    category: "API Basics",
  },
  {
    id: "status",
    term: "HTTP Status Codes",
    definition: "Standardized numeric codes returned by a server indicating the result of a request (e.g., 200 OK, 404 Not Found, 500 Server Error).",
    analogy: "The carrier's response — thumbs up (200), 'nobody home' (404), 'mailbox is on fire' (500).",
    category: "API Basics",
  },
  {
    id: "middleware",
    term: "Middleware",
    definition: "Software that intercepts and processes requests/responses between the client and the final handler, performing tasks like logging, auth, or transformation.",
    analogy: "The mail room in your building — it sorts, scans, and routes letters before they reach your desk.",
    category: "API Basics",
  },
  {
    id: "gateway",
    term: "API Gateway",
    definition: "A single entry point that manages, authenticates, and routes all incoming API requests to the appropriate backend services.",
    analogy: "The front gate of a gated community — every carrier checks in, gets verified, then directed to the right house.",
    category: "API Basics",
  },
  {
    id: "timeout",
    term: "Timeout",
    definition: "A maximum duration a client will wait for a response before abandoning the request and treating it as failed.",
    analogy: "You rang the doorbell, waited 30 seconds, nobody answered. You leave.",
    category: "API Basics",
  },

  // ─── Daily sprint concepts ───
  {
    id: "rest",
    term: "REST API",
    definition: "An architectural style where resources are accessed via standard HTTP methods at predictable URLs, with each request containing all needed context.",
    analogy: "A post office with strict rules: one window per service, you fill out a standard form every time, and they don't remember your last visit.",
    category: "Daily Engineering",
  },
  {
    id: "graphql",
    term: "GraphQL",
    definition: "A query language for APIs where the client specifies exactly which fields it needs, and the server returns only that data in a single response.",
    analogy: "Instead of the post office handing you a full catalog, you hand them a shopping list and they return exactly those items — nothing more, nothing less.",
    category: "Daily Engineering",
  },
  {
    id: "cors",
    term: "CORS",
    definition: "Cross-Origin Resource Sharing — a browser security mechanism that blocks web pages from making requests to a different domain unless the server explicitly allows it.",
    analogy: "Your apartment building only accepts packages from pre-approved senders. A new delivery service shows up and the front desk rejects them until management adds them to the list.",
    category: "Daily Engineering",
  },
  {
    id: "envvars",
    term: "Environment Variables",
    definition: "Configuration values (database URLs, API keys, feature flags) stored outside the codebase that change between development, staging, and production environments.",
    analogy: "The forwarding instructions taped inside the mail room that say 'if we're in Building A, use locker 5; if Building B, use locker 12.' The letters are the same, but where they go depends on which building you're in.",
    category: "Daily Engineering",
  },
  {
    id: "cicd",
    term: "CI/CD",
    definition: "Continuous Integration / Continuous Deployment — automated pipelines that test code when it's merged (CI) and deploy it to production without manual steps (CD).",
    analogy: "A conveyor belt from the workshop to the storefront. Every time someone finishes a product, it gets automatically inspected, packaged, and placed on the shelf — no one carries it by hand.",
    category: "Daily Engineering",
  },
  {
    id: "dns",
    term: "DNS",
    definition: "Domain Name System — the internet's phone book that translates human-readable domain names (google.com) into IP addresses (142.250.80.46) that computers use to find each other.",
    analogy: "You tell the taxi driver 'take me to Joe's Pizza' and they look up the actual street address in their directory. You never need to know the address yourself.",
    category: "Daily Engineering",
  },
  {
    id: "caching",
    term: "Caching",
    definition: "Storing a copy of frequently accessed data in a faster location so future requests can be served without repeating the original expensive computation or fetch.",
    analogy: "Keeping a photocopy of your most-requested document on your desk instead of walking to the filing cabinet every time someone asks for it.",
    category: "Daily Engineering",
  },
  {
    id: "cacheinvalidation",
    term: "Cache Invalidation",
    definition: "The process of determining when cached data is stale and needs to be refreshed from the source of truth. Widely considered one of the hardest problems in computing.",
    analogy: "The photocopy on your desk is from last Tuesday. The original in the filing cabinet was updated yesterday. How do you know your copy is wrong? And when do you check?",
    category: "Daily Engineering",
  },
  {
    id: "oauth",
    term: "OAuth / SSO",
    definition: "OAuth is a protocol that lets users grant limited access to their data on one service to another service, without sharing their password. SSO lets users log in once to access multiple services.",
    analogy: "Instead of giving your house key to the dog walker, you give them a special pass that only opens the back door, only on weekdays, and you can revoke it anytime.",
    category: "Daily Engineering",
  },

  // ─── Architecture & planning concepts ───
  {
    id: "latency",
    term: "Latency vs Throughput",
    definition: "Latency is the time for a single request to complete (speed). Throughput is how many requests can be handled in a given period (volume). Optimizing one can hurt the other.",
    analogy: "A sports car (low latency, low throughput) vs a freight train (high latency, high throughput). The car gets one package there fast. The train is slow but carries 10,000 packages.",
    category: "Architecture",
  },
  {
    id: "syncasync",
    term: "Sync vs Async",
    definition: "Synchronous operations block execution until they complete — the caller waits. Asynchronous operations let the caller continue working and get notified when the result is ready.",
    analogy: "Sync: you call a restaurant and stay on hold until they confirm your reservation. Async: you text them, hang up, and they text back when it's confirmed.",
    category: "Architecture",
  },
  {
    id: "queue",
    term: "Message Queue",
    definition: "A buffer that sits between services, holding tasks to be processed later. Producers add messages, consumers pull and process them at their own pace, decoupling the two.",
    analogy: "A take-a-number deli counter. Customers drop off orders (producers) and the kitchen works through them one by one (consumers). The counter absorbs the rush so the kitchen isn't overwhelmed.",
    category: "Architecture",
  },
  {
    id: "microservices",
    term: "Microservices vs Monolith",
    definition: "A monolith is one codebase doing everything. Microservices split each function into its own independent service that communicates over the network. Simpler to start with a monolith, harder to scale. Harder to start with microservices, easier to scale.",
    analogy: "Monolith: one restaurant where the same crew does cooking, cleaning, and serving. Microservices: a food court where each stall specializes but they share the seating area. The food court scales better but coordinating across stalls is its own headache.",
    category: "Architecture",
  },
  {
    id: "dbindex",
    term: "Database Index",
    definition: "A data structure that lets a database find rows quickly without scanning every row in the table. Speeds up reads dramatically but slows down writes, because the index must be updated too.",
    analogy: "The index at the back of a textbook. Without it, you'd flip through every page to find 'photosynthesis.' With it, you go straight to page 247. But every time the book is revised, someone has to update the index too.",
    category: "Architecture",
  },
  {
    id: "loadbalancer",
    term: "Load Balancer",
    definition: "A system that distributes incoming network traffic across multiple servers so no single server is overwhelmed, improving reliability and capacity.",
    analogy: "A host at a restaurant who seats new customers at whichever table has the shortest wait, instead of sending everyone to the same waiter.",
    category: "Architecture",
  },
  {
    id: "idempotency",
    term: "Idempotency",
    definition: "An operation is idempotent if performing it multiple times produces the same result as performing it once. Critical for safe retries — e.g., charging a credit card should only happen once even if the request is sent twice.",
    analogy: "Pressing an elevator button. Pressing it once calls the elevator. Pressing it 15 more times doesn't summon 15 elevators — the result is the same. But a vending machine is NOT idempotent: insert a dollar twice, get two sodas.",
    category: "Architecture",
  },

  // ─── Web fundamentals (Odin accelerators) ───
  {
    id: "dom",
    term: "DOM",
    definition: "Document Object Model — the tree-structured representation of an HTML page that the browser builds in memory. JavaScript interacts with this tree to read and change what's displayed.",
    analogy: "The blueprint of a house that the construction crew (browser) uses. JavaScript is the renovation team — they don't change the architect's original drawing, they modify the built house through the blueprint.",
    category: "Web Fundamentals",
  },
  {
    id: "eventloop",
    term: "Event Loop",
    definition: "The mechanism by which JavaScript (single-threaded) handles async operations. It continuously checks a queue of pending callbacks and executes them one at a time when the main thread is free.",
    analogy: "A single chef working alone. When something is in the oven (async), the chef doesn't stand and stare — they prep the next dish. When the oven timer dings (callback), they finish that dish next. But they can only do one thing at a time.",
    category: "Web Fundamentals",
  },
  {
    id: "promises",
    term: "Promises / Async-Await",
    definition: "A Promise is an object representing a value that doesn't exist yet but will resolve (success) or reject (failure) in the future. Async-await is syntactic sugar that lets you write async code that reads like synchronous code.",
    analogy: "A claim ticket at a dry cleaner. You hand in your clothes (start the operation), get a ticket (the Promise), and come back later. The ticket either gets you your clothes (resolved) or a 'sorry we lost them' (rejected). Async-await is calling the shop and staying on the line instead of taking the ticket.",
    category: "Web Fundamentals",
  },
  {
    id: "state",
    term: "State Management",
    definition: "The practice of tracking, storing, and updating data that changes over time in an application, and ensuring the UI reflects those changes. Becomes complex as apps grow.",
    analogy: "A scoreboard at a stadium. Every time a team scores, the scoreboard (UI) needs to update. State management is the system that tracks the score (data), decides when it changed, and tells the scoreboard crew to flip the numbers.",
    category: "Web Fundamentals",
  },
  {
    id: "httpcycle",
    term: "HTTP Request Lifecycle",
    definition: "The full sequence when a browser requests a page: DNS lookup → TCP connection → TLS handshake (if HTTPS) → HTTP request sent → server processes → response returned → browser renders.",
    analogy: "Ordering a package: look up the store's address (DNS) → establish a delivery route (TCP) → verify it's the real store, not a scam (TLS) → place your order (request) → warehouse picks and packs (server) → package delivered (response) → you unbox it (render).",
    category: "Web Fundamentals",
  },
];

const CATEGORIES = [...new Set(CONCEPTS.map((c) => c.category))];
const CATEGORY_COLORS = {
  "API Basics": "#f0c674",
  "Daily Engineering": "#81a2be",
  Architecture: "#b294bb",
  "Web Fundamentals": "#8abeb7",
};

const FACES = ["term", "definition", "analogy"];
const FACE_LABELS = { term: "Term", definition: "Definition", analogy: "Analogy" };

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function pickRandom(arr, n) {
  return shuffle(arr).slice(0, n);
}

function getWeightedRandom(concepts, weights) {
  const totalWeight = concepts.reduce((sum, c) => sum + (weights[c.id] || 1), 0);
  let r = Math.random() * totalWeight;
  for (const c of concepts) {
    r -= weights[c.id] || 1;
    if (r <= 0) return c;
  }
  return concepts[concepts.length - 1];
}

function getFiltered(concepts, activeCategories) {
  if (activeCategories.length === 0) return concepts;
  return concepts.filter((c) => activeCategories.includes(c.category));
}

// ─── CATEGORY FILTER ───

function CategoryFilter({ active, setActive }) {
  const toggle = (cat) => {
    if (active.includes(cat)) {
      setActive(active.filter((c) => c !== cat));
    } else {
      setActive([...active, cat]);
    }
  };

  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 20 }}>
      {CATEGORIES.map((cat) => {
        const isActive = active.length === 0 || active.includes(cat);
        const color = CATEGORY_COLORS[cat] || "#888";
        const count = CONCEPTS.filter((c) => c.category === cat).length;
        return (
          <button
            key={cat}
            onClick={() => toggle(cat)}
            style={{
              padding: "5px 12px",
              borderRadius: 6,
              border: `1px solid ${isActive ? color : "rgba(255,255,255,0.08)"}`,
              background: isActive ? `${color}15` : "transparent",
              color: isActive ? color : "#555",
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: 10,
              fontWeight: 600,
              cursor: "pointer",
              transition: "all 0.15s",
              letterSpacing: "0.03em",
            }}
          >
            {cat}
            <span style={{ opacity: 0.5, marginLeft: 4 }}>{count}</span>
          </button>
        );
      })}
    </div>
  );
}

// ─── PROGRESS BAR ───

function ProgressBar({ weights, filtered }) {
  const mastered = filtered.filter((c) => (weights[c.id] || 1) < 0.6).length;
  const learning = filtered.filter((c) => {
    const w = weights[c.id] || 1;
    return w >= 0.6 && w <= 1.2;
  }).length;
  const struggling = filtered.filter((c) => (weights[c.id] || 1) > 1.2).length;
  const total = filtered.length;

  return (
    <div style={{ marginBottom: 20 }}>
      <div style={{ display: "flex", height: 4, borderRadius: 2, overflow: "hidden", background: "rgba(255,255,255,0.04)" }}>
        {mastered > 0 && (
          <div style={{ width: `${(mastered / total) * 100}%`, background: "#27ae60", transition: "width 0.4s" }} />
        )}
        {learning > 0 && (
          <div style={{ width: `${(learning / total) * 100}%`, background: "#f0c674", transition: "width 0.4s" }} />
        )}
        {struggling > 0 && (
          <div style={{ width: `${(struggling / total) * 100}%`, background: "#c0392b", transition: "width 0.4s" }} />
        )}
      </div>
      <div style={{ display: "flex", gap: 16, marginTop: 8 }}>
        {[
          { label: "Mastered", count: mastered, color: "#27ae60" },
          { label: "Learning", count: learning, color: "#f0c674" },
          { label: "Needs work", count: struggling, color: "#c0392b" },
        ].map((s) => (
          <span
            key={s.label}
            style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10, color: s.color, opacity: s.count > 0 ? 1 : 0.3 }}
          >
            {s.count} {s.label}
          </span>
        ))}
      </div>
    </div>
  );
}

// ─── FLASHCARD MODE ───

function FlashcardMode({ weights, setWeights, filtered }) {
  const [current, setCurrent] = useState(() => getWeightedRandom(filtered, weights));
  const [faceIndex, setFaceIndex] = useState(0);
  const [flipping, setFlipping] = useState(false);
  const [selfScore, setSelfScore] = useState(null);

  useEffect(() => {
    setCurrent(getWeightedRandom(filtered, weights));
    setFaceIndex(0);
  }, [filtered.length]);

  const cycleFace = () => {
    if (flipping) return;
    setFlipping(true);
    setTimeout(() => {
      setFaceIndex((prev) => (prev + 1) % 3);
      setFlipping(false);
    }, 250);
  };

  const handleScore = (knew) => {
    setSelfScore(knew);
    setWeights((prev) => {
      const w = { ...prev };
      if (knew) {
        w[current.id] = Math.max(0.3, (w[current.id] || 1) * 0.6);
      } else {
        w[current.id] = Math.min(5, (w[current.id] || 1) * 1.8);
      }
      return w;
    });
    setTimeout(() => {
      setSelfScore(null);
      setFaceIndex(0);
      setFlipping(true);
      setTimeout(() => {
        setCurrent(getWeightedRandom(filtered, weights));
        setFlipping(false);
      }, 250);
    }, 400);
  };

  const face = FACES[faceIndex];
  const content = current[face];
  const catColor = CATEGORY_COLORS[current.category] || "#888";

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 24, padding: "8px 0" }}>
      <div style={{ display: "flex", gap: 8 }}>
        {FACES.map((f, i) => (
          <span
            key={f}
            style={{
              fontSize: 11,
              fontFamily: "'JetBrains Mono', monospace",
              textTransform: "uppercase",
              letterSpacing: "0.08em",
              padding: "4px 10px",
              borderRadius: 4,
              background: i === faceIndex ? "#1a1a2e" : "transparent",
              color: i === faceIndex ? "#e0d6c8" : "#666",
              fontWeight: i === faceIndex ? 700 : 400,
              transition: "all 0.2s",
            }}
          >
            {FACE_LABELS[f]}
          </span>
        ))}
      </div>

      <div
        onClick={cycleFace}
        style={{
          width: "100%",
          maxWidth: 480,
          minHeight: 220,
          background: "linear-gradient(145deg, #1a1a2e 0%, #16213e 100%)",
          borderRadius: 16,
          padding: "40px 32px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          cursor: "pointer",
          userSelect: "none",
          transform: flipping ? "rotateY(90deg)" : "rotateY(0deg)",
          transition: "transform 0.25s ease-in-out",
          boxShadow: "0 8px 32px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.05)",
          position: "relative",
          borderTop: `2px solid ${catColor}30`,
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 14,
            left: 18,
            fontSize: 10,
            fontFamily: "'JetBrains Mono', monospace",
            color: "#5a5a7a",
            textTransform: "uppercase",
            letterSpacing: "0.12em",
          }}
        >
          {FACE_LABELS[face]}
        </div>
        <div
          style={{
            position: "absolute",
            top: 14,
            right: 18,
            fontSize: 9,
            fontFamily: "'JetBrains Mono', monospace",
            color: catColor,
            opacity: 0.6,
            letterSpacing: "0.06em",
          }}
        >
          {current.category}
        </div>
        <p
          style={{
            color: face === "term" ? catColor : "#e0d6c8",
            fontSize: face === "term" ? 24 : 16,
            fontFamily: face === "term" ? "'Space Mono', monospace" : "'IBM Plex Sans', sans-serif",
            fontWeight: face === "term" ? 700 : 400,
            textAlign: "center",
            lineHeight: 1.6,
            margin: 0,
          }}
        >
          {content}
        </p>
        <div
          style={{
            position: "absolute",
            bottom: 14,
            fontSize: 10,
            color: "#4a4a6a",
            fontFamily: "'JetBrains Mono', monospace",
          }}
        >
          tap to flip → {FACE_LABELS[FACES[(faceIndex + 1) % 3]]}
        </div>
      </div>

      <div style={{ display: "flex", gap: 12 }}>
        <button
          onClick={() => handleScore(false)}
          style={{
            padding: "10px 28px",
            borderRadius: 8,
            border: "2px solid #c0392b",
            background: selfScore === false ? "#c0392b" : "transparent",
            color: selfScore === false ? "#fff" : "#c0392b",
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: 13,
            fontWeight: 600,
            cursor: "pointer",
            transition: "all 0.15s",
          }}
        >
          Didn't know
        </button>
        <button
          onClick={() => handleScore(true)}
          style={{
            padding: "10px 28px",
            borderRadius: 8,
            border: "2px solid #27ae60",
            background: selfScore === true ? "#27ae60" : "transparent",
            color: selfScore === true ? "#fff" : "#27ae60",
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: 13,
            fontWeight: 600,
            cursor: "pointer",
            transition: "all 0.15s",
          }}
        >
          Knew it
        </button>
      </div>
    </div>
  );
}

// ─── QUIZ MODE ───

function QuizMode({ weights, setWeights, filtered }) {
  const [question, setQuestion] = useState(null);
  const [selected, setSelected] = useState(null);
  const [streak, setStreak] = useState(0);
  const [total, setTotal] = useState(0);
  const [correct, setCorrect] = useState(0);

  const generateQuestion = useCallback(() => {
    if (filtered.length < 4) return;
    const concept = getWeightedRandom(filtered, weights);
    const askFace = FACES[Math.floor(Math.random() * 3)];
    const answerFaces = FACES.filter((f) => f !== askFace);
    const answerFace = answerFaces[Math.floor(Math.random() * answerFaces.length)];

    const wrongOptions = pickRandom(
      filtered.filter((c) => c.id !== concept.id),
      3
    ).map((c) => ({ id: c.id, text: c[answerFace] }));

    const options = shuffle([...wrongOptions, { id: concept.id, text: concept[answerFace] }]);
    setQuestion({ concept, askFace, answerFace, options, correctId: concept.id });
    setSelected(null);
  }, [weights, filtered]);

  useEffect(() => {
    generateQuestion();
  }, [filtered.length]);

  if (!question) return <div style={{ color: "#666", fontFamily: "'JetBrains Mono', monospace", fontSize: 12, padding: 40, textAlign: "center" }}>Need at least 4 cards in selected categories for quiz mode.</div>;

  const handleSelect = (optId) => {
    if (selected) return;
    setSelected(optId);
    const isCorrect = optId === question.correctId;
    setTotal((p) => p + 1);
    if (isCorrect) {
      setCorrect((p) => p + 1);
      setStreak((p) => p + 1);
    } else {
      setStreak(0);
    }
    setWeights((prev) => {
      const w = { ...prev };
      if (isCorrect) {
        w[question.concept.id] = Math.max(0.3, (w[question.concept.id] || 1) * 0.6);
      } else {
        w[question.concept.id] = Math.min(5, (w[question.concept.id] || 1) * 1.8);
      }
      return w;
    });
    setTimeout(generateQuestion, 1200);
  };

  const catColor = CATEGORY_COLORS[question.concept.category] || "#888";

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 20, padding: "8px 0" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 12, color: "#888" }}>
          {correct}/{total} correct
        </span>
        {streak >= 3 && (
          <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 12, color: "#f0c674" }}>
            {streak} streak
          </span>
        )}
      </div>

      <div
        style={{
          background: "linear-gradient(145deg, #1a1a2e 0%, #16213e 100%)",
          borderRadius: 14,
          padding: "28px 24px",
          boxShadow: "0 6px 24px rgba(0,0,0,0.25)",
          borderTop: `2px solid ${catColor}30`,
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 12 }}>
          <span
            style={{
              fontSize: 10,
              fontFamily: "'JetBrains Mono', monospace",
              textTransform: "uppercase",
              letterSpacing: "0.12em",
              color: "#5a5a7a",
            }}
          >
            Given the {FACE_LABELS[question.askFace]}:
          </span>
          <span style={{ fontSize: 9, fontFamily: "'JetBrains Mono', monospace", color: catColor, opacity: 0.6 }}>
            {question.concept.category}
          </span>
        </div>
        <p
          style={{
            color: question.askFace === "term" ? catColor : "#e0d6c8",
            fontSize: question.askFace === "term" ? 22 : 15,
            fontFamily: question.askFace === "term" ? "'Space Mono', monospace" : "'IBM Plex Sans', sans-serif",
            fontWeight: question.askFace === "term" ? 700 : 400,
            lineHeight: 1.5,
            margin: 0,
          }}
        >
          {question.concept[question.askFace]}
        </p>
      </div>

      <div
        style={{
          fontSize: 12,
          fontFamily: "'JetBrains Mono', monospace",
          color: "#888",
          textTransform: "uppercase",
          letterSpacing: "0.08em",
        }}
      >
        Select the matching {FACE_LABELS[question.answerFace]}:
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
        {question.options.map((opt) => {
          const isCorrectOpt = opt.id === question.correctId;
          const isSelected = selected === opt.id;
          let bg = "rgba(26,26,46,0.5)";
          let border = "1px solid rgba(255,255,255,0.06)";
          if (selected) {
            if (isCorrectOpt) {
              bg = "rgba(39,174,96,0.15)";
              border = "1px solid #27ae60";
            } else if (isSelected && !isCorrectOpt) {
              bg = "rgba(192,57,43,0.15)";
              border = "1px solid #c0392b";
            }
          }
          return (
            <div
              key={opt.id}
              onClick={() => handleSelect(opt.id)}
              style={{
                padding: "14px 18px",
                borderRadius: 10,
                background: bg,
                border,
                cursor: selected ? "default" : "pointer",
                transition: "all 0.2s",
                color: "#d0c8bc",
                fontSize: 14,
                fontFamily: "'IBM Plex Sans', sans-serif",
                lineHeight: 1.5,
              }}
            >
              {opt.text}
            </div>
          );
        })}
      </div>
    </div>
  );
}

// ─── MATCH MODE ───

function MatchMode({ weights, setWeights, filtered }) {
  const [round, setRound] = useState(null);
  const [selectedLeft, setSelectedLeft] = useState(null);
  const [matched, setMatched] = useState({});
  const [wrong, setWrong] = useState(null);
  const [score, setScore] = useState({ correct: 0, total: 0 });

  const startRound = useCallback(() => {
    if (filtered.length < 4) return;
    const count = Math.min(5, filtered.length);
    const subset = pickRandom(filtered, count);
    const leftFace = FACES[Math.floor(Math.random() * 3)];
    const rightFaces = FACES.filter((f) => f !== leftFace);
    const rightFace = rightFaces[Math.floor(Math.random() * rightFaces.length)];

    setRound({
      items: subset,
      leftFace,
      rightFace,
      leftOrder: shuffle(subset),
      rightOrder: shuffle(subset),
    });
    setSelectedLeft(null);
    setMatched({});
    setWrong(null);
  }, [filtered]);

  useEffect(() => {
    startRound();
  }, [filtered.length]);

  if (!round) return <div style={{ color: "#666", fontFamily: "'JetBrains Mono', monospace", fontSize: 12, padding: 40, textAlign: "center" }}>Need at least 4 cards in selected categories for match mode.</div>;

  const handleLeftClick = (id) => {
    if (matched[id]) return;
    setSelectedLeft(id);
    setWrong(null);
  };

  const handleRightClick = (id) => {
    if (!selectedLeft || matched[selectedLeft]) return;
    if (id === selectedLeft) {
      const newMatched = { ...matched, [id]: true };
      setMatched(newMatched);
      setSelectedLeft(null);
      setScore((p) => ({ correct: p.correct + 1, total: p.total + 1 }));
      setWeights((prev) => {
        const w = { ...prev };
        w[id] = Math.max(0.3, (w[id] || 1) * 0.6);
        return w;
      });
      if (Object.keys(newMatched).length === round.items.length) {
        setTimeout(startRound, 800);
      }
    } else {
      setWrong({ left: selectedLeft, right: id });
      setScore((p) => ({ ...p, total: p.total + 1 }));
      setWeights((prev) => {
        const w = { ...prev };
        w[selectedLeft] = Math.min(5, (w[selectedLeft] || 1) * 1.8);
        return w;
      });
      setTimeout(() => {
        setWrong(null);
        setSelectedLeft(null);
      }, 600);
    }
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 16, padding: "8px 0" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 12, color: "#888" }}>
          {score.correct}/{score.total} matched
        </span>
        <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10, color: "#5a5a7a", textTransform: "uppercase", letterSpacing: "0.08em" }}>
          {FACE_LABELS[round.leftFace]} → {FACE_LABELS[round.rightFace]}
        </span>
      </div>

      <div style={{ display: "flex", gap: 10 }}>
        <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 8 }}>
          {round.leftOrder.map((item) => {
            const isMatched = matched[item.id];
            const isSelected = selectedLeft === item.id;
            const isWrongLeft = wrong?.left === item.id;
            const catColor = CATEGORY_COLORS[item.category] || "#888";
            let bg = "rgba(26,26,46,0.6)";
            let border = "1px solid rgba(255,255,255,0.06)";
            if (isMatched) {
              bg = "rgba(39,174,96,0.12)";
              border = "1px solid rgba(39,174,96,0.3)";
            } else if (isWrongLeft) {
              bg = "rgba(192,57,43,0.15)";
              border = "1px solid #c0392b";
            } else if (isSelected) {
              bg = "rgba(240,198,116,0.1)";
              border = "1px solid #f0c674";
            }
            return (
              <div
                key={item.id}
                onClick={() => handleLeftClick(item.id)}
                style={{
                  padding: "10px 12px",
                  borderRadius: 8,
                  background: bg,
                  border,
                  cursor: isMatched ? "default" : "pointer",
                  opacity: isMatched ? 0.4 : 1,
                  transition: "all 0.2s",
                  color: round.leftFace === "term" ? catColor : "#d0c8bc",
                  fontSize: round.leftFace === "term" ? 13 : 11,
                  fontFamily: round.leftFace === "term" ? "'Space Mono', monospace" : "'IBM Plex Sans', sans-serif",
                  fontWeight: round.leftFace === "term" ? 600 : 400,
                  lineHeight: 1.4,
                  minHeight: 44,
                  display: "flex",
                  alignItems: "center",
                }}
              >
                {item[round.leftFace]}
              </div>
            );
          })}
        </div>

        <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 8 }}>
          {round.rightOrder.map((item) => {
            const isMatched = matched[item.id];
            const isWrongRight = wrong?.right === item.id;
            const catColor = CATEGORY_COLORS[item.category] || "#888";
            let bg = "rgba(26,26,46,0.6)";
            let border = "1px solid rgba(255,255,255,0.06)";
            if (isMatched) {
              bg = "rgba(39,174,96,0.12)";
              border = "1px solid rgba(39,174,96,0.3)";
            } else if (isWrongRight) {
              bg = "rgba(192,57,43,0.15)";
              border = "1px solid #c0392b";
            }
            return (
              <div
                key={item.id}
                onClick={() => handleRightClick(item.id)}
                style={{
                  padding: "10px 12px",
                  borderRadius: 8,
                  background: bg,
                  border,
                  cursor: isMatched || !selectedLeft ? "default" : "pointer",
                  opacity: isMatched ? 0.4 : 1,
                  transition: "all 0.2s",
                  color: round.rightFace === "term" ? catColor : "#d0c8bc",
                  fontSize: round.rightFace === "term" ? 13 : 11,
                  fontFamily: round.rightFace === "term" ? "'Space Mono', monospace" : "'IBM Plex Sans', sans-serif",
                  fontWeight: round.rightFace === "term" ? 600 : 400,
                  lineHeight: 1.4,
                  minHeight: 44,
                  display: "flex",
                  alignItems: "center",
                }}
              >
                {item[round.rightFace]}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

// ─── MAIN APP ───

export default function App() {
  const [mode, setMode] = useState("flashcard");
  const [activeCategories, setActiveCategories] = useState([]);
  const [weights, setWeights] = useState(() => {
    const w = {};
    CONCEPTS.forEach((c) => (w[c.id] = 1));
    return w;
  });

  const filtered = getFiltered(CONCEPTS, activeCategories);

  const modes = [
    { key: "flashcard", label: "Flashcards" },
    { key: "quiz", label: "Quiz" },
    { key: "match", label: "Match" },
  ];

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#0d0d1a",
        color: "#e0d6c8",
        fontFamily: "'IBM Plex Sans', sans-serif",
        padding: "28px 16px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <link
        href="https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&family=IBM+Plex+Sans:wght@400;500;600&family=JetBrains+Mono:wght@400;500;600;700&display=swap"
        rel="stylesheet"
      />

      <div style={{ width: "100%", maxWidth: 560 }}>
        <h1
          style={{
            fontFamily: "'Space Mono', monospace",
            fontSize: 20,
            fontWeight: 700,
            color: "#f0c674",
            margin: "0 0 4px 0",
            letterSpacing: "-0.02em",
          }}
        >
          Web Concepts
        </h1>
        <p
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: 10,
            color: "#5a5a7a",
            margin: "0 0 20px 0",
            textTransform: "uppercase",
            letterSpacing: "0.1em",
          }}
        >
          {CONCEPTS.length} concepts · {CATEGORIES.length} categories · Spaced Repetition
        </p>

        <CategoryFilter active={activeCategories} setActive={setActiveCategories} />
        <ProgressBar weights={weights} filtered={filtered} />

        <div
          style={{
            display: "flex",
            gap: 0,
            background: "rgba(26,26,46,0.5)",
            borderRadius: 10,
            padding: 3,
            marginBottom: 20,
          }}
        >
          {modes.map((m) => (
            <button
              key={m.key}
              onClick={() => setMode(m.key)}
              style={{
                flex: 1,
                padding: "10px 0",
                border: "none",
                borderRadius: 8,
                background: mode === m.key ? "#1a1a2e" : "transparent",
                color: mode === m.key ? "#f0c674" : "#666",
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: 12,
                fontWeight: mode === m.key ? 700 : 400,
                cursor: "pointer",
                transition: "all 0.2s",
                boxShadow: mode === m.key ? "0 2px 8px rgba(0,0,0,0.3)" : "none",
              }}
            >
              {m.label}
            </button>
          ))}
        </div>

        {mode === "flashcard" && <FlashcardMode weights={weights} setWeights={setWeights} filtered={filtered} />}
        {mode === "quiz" && <QuizMode weights={weights} setWeights={setWeights} filtered={filtered} />}
        {mode === "match" && <MatchMode weights={weights} setWeights={setWeights} filtered={filtered} />}
      </div>
    </div>
  );
}
