// ─── CONCEPT BANK ───
// Each concept has: id, term, definition, analogy, category, module
// Module 1-5 maps to progressive difficulty (per spec)
// To add concepts: just add objects to this array

export const CONCEPTS = [
  // ═══ Module 1: How the Web Talks (Foundations) ═══
  {
    id: "endpoint",
    term: "API Endpoint",
    definition:
      "A specific URL where an API can be accessed to perform an operation on a resource.",
    analogy: "Your mailbox address — where things get sent and picked up.",
    category: "API Basics",
    module: 1,
  },
  {
    id: "methods",
    term: "HTTP Methods",
    definition:
      "Verbs (GET, POST, PUT, DELETE) that specify what operation to perform on the resource at an endpoint.",
    analogy:
      "What you ask the carrier to do — deliver (POST), hand over (GET), replace (PUT), or throw away (DELETE).",
    category: "API Basics",
    module: 1,
  },
  {
    id: "format",
    term: "Request/Response Format",
    definition:
      "The data serialization standard (JSON, XML, etc.) that both client and server agree to use for communication.",
    analogy:
      "The agreed-upon language the letters are written in. Both sides need to read the same language.",
    category: "API Basics",
    module: 1,
  },
  {
    id: "httpcycle",
    term: "HTTP Request Lifecycle",
    definition:
      "The full sequence when a browser requests a page: DNS lookup → TCP connection → TLS handshake (if HTTPS) → HTTP request sent → server processes → response returned → browser renders.",
    analogy:
      "Ordering a package: look up the store's address (DNS) → establish a delivery route (TCP) → verify it's the real store, not a scam (TLS) → place your order (request) → warehouse picks and packs (server) → package delivered (response) → you unbox it (render).",
    category: "Web Fundamentals",
    module: 1,
  },
  {
    id: "dns",
    term: "DNS",
    definition:
      "Domain Name System — the internet's phone book that translates human-readable domain names (google.com) into IP addresses (142.250.80.46) that computers use to find each other.",
    analogy:
      "You tell the taxi driver 'take me to Joe's Pizza' and they look up the actual street address in their directory. You never need to know the address yourself.",
    category: "Daily Engineering",
    module: 1,
  },

  // ═══ Module 2: Requests & Responses ═══
  {
    id: "status",
    term: "HTTP Status Codes",
    definition:
      "Standardized numeric codes returned by a server indicating the result of a request (e.g., 200 OK, 404 Not Found, 500 Server Error).",
    analogy:
      "The carrier's response — thumbs up (200), 'nobody home' (404), 'mailbox is on fire' (500).",
    category: "API Basics",
    module: 2,
  },
  {
    id: "auth",
    term: "API Key / Auth Token",
    definition:
      "A credential included with requests to verify the identity and permissions of the caller.",
    analogy:
      "The lock on your mailbox — only people with the right key can use it.",
    category: "API Basics",
    module: 2,
  },
  {
    id: "ratelimit",
    term: "Rate Limiting",
    definition:
      "A restriction on how many requests a client can make to an API within a given time window.",
    analogy:
      "A sign saying 'max 10 deliveries per hour.' The 11th carrier gets turned away.",
    category: "API Basics",
    module: 2,
  },
  {
    id: "timeout",
    term: "Timeout",
    definition:
      "A maximum duration a client will wait for a response before abandoning the request and treating it as failed.",
    analogy:
      "You rang the doorbell, waited 30 seconds, nobody answered. You leave.",
    category: "API Basics",
    module: 2,
  },

  // ═══ Module 3: API Patterns & Auth ═══
  {
    id: "rest",
    term: "REST API",
    definition:
      "An architectural style where resources are accessed via standard HTTP methods at predictable URLs, with each request containing all needed context.",
    analogy:
      "A post office with strict rules: one window per service, you fill out a standard form every time, and they don't remember your last visit.",
    category: "Daily Engineering",
    module: 3,
  },
  {
    id: "graphql",
    term: "GraphQL",
    definition:
      "A query language for APIs where the client specifies exactly which fields it needs, and the server returns only that data in a single response.",
    analogy:
      "Instead of the post office handing you a full catalog, you hand them a shopping list and they return exactly those items — nothing more, nothing less.",
    category: "Daily Engineering",
    module: 3,
  },
  {
    id: "webhook",
    term: "Webhook",
    definition:
      "A callback mechanism where a service sends an HTTP POST to your registered URL when a specific event occurs.",
    analogy:
      "A doorbell — the carrier rings it the moment they drop something off.",
    category: "API Basics",
    module: 3,
  },
  {
    id: "polling",
    term: "API Polling",
    definition:
      "Repeatedly sending requests to an endpoint at a set interval to check for new data or state changes.",
    analogy:
      "Walking to the mailbox every hour to check for letters.",
    category: "API Basics",
    module: 3,
  },
  {
    id: "oauth",
    term: "OAuth / SSO",
    definition:
      "OAuth is a protocol that lets users grant limited access to their data on one service to another service, without sharing their password. SSO lets users log in once to access multiple services.",
    analogy:
      "Instead of giving your house key to the dog walker, you give them a special pass that only opens the back door, only on weekdays, and you can revoke it anytime.",
    category: "Daily Engineering",
    module: 3,
  },
  {
    id: "cors",
    term: "CORS",
    definition:
      "Cross-Origin Resource Sharing — a browser security mechanism that blocks web pages from making requests to a different domain unless the server explicitly allows it.",
    analogy:
      "Your apartment building only accepts packages from pre-approved senders. A new delivery service shows up and the front desk rejects them until management adds them to the list.",
    category: "Daily Engineering",
    module: 3,
  },
  {
    id: "gateway",
    term: "API Gateway",
    definition:
      "A single entry point that manages, authenticates, and routes all incoming API requests to the appropriate backend services.",
    analogy:
      "The front gate of a gated community — every carrier checks in, gets verified, then directed to the right house.",
    category: "API Basics",
    module: 3,
  },
  {
    id: "middleware",
    term: "Middleware",
    definition:
      "Software that intercepts and processes requests/responses between the client and the final handler, performing tasks like logging, auth, or transformation.",
    analogy:
      "The mail room in your building — it sorts, scans, and routes letters before they reach your desk.",
    category: "API Basics",
    module: 3,
  },
  {
    id: "idempotency",
    term: "Idempotency",
    definition:
      "An operation is idempotent if performing it multiple times produces the same result as performing it once. Critical for safe retries — e.g., charging a credit card should only happen once even if the request is sent twice.",
    analogy:
      "Pressing an elevator button. Pressing it once calls the elevator. Pressing it 15 more times doesn't summon 15 elevators — the result is the same. But a vending machine is NOT idempotent: insert a dollar twice, get two sodas.",
    category: "Architecture",
    module: 3,
  },

  // ═══ Module 4: Data & Performance ═══
  {
    id: "caching",
    term: "Caching",
    definition:
      "Storing a copy of frequently accessed data in a faster location so future requests can be served without repeating the original expensive computation or fetch.",
    analogy:
      "Keeping a photocopy of your most-requested document on your desk instead of walking to the filing cabinet every time someone asks for it.",
    category: "Daily Engineering",
    module: 4,
  },
  {
    id: "cacheinvalidation",
    term: "Cache Invalidation",
    definition:
      "The process of determining when cached data is stale and needs to be refreshed from the source of truth. Widely considered one of the hardest problems in computing.",
    analogy:
      "The photocopy on your desk is from last Tuesday. The original in the filing cabinet was updated yesterday. How do you know your copy is wrong? And when do you check?",
    category: "Daily Engineering",
    module: 4,
  },
  {
    id: "dbindex",
    term: "Database Index",
    definition:
      "A data structure that lets a database find rows quickly without scanning every row in the table. Speeds up reads dramatically but slows down writes, because the index must be updated too.",
    analogy:
      "The index at the back of a textbook. Without it, you'd flip through every page to find 'photosynthesis.' With it, you go straight to page 247. But every time the book is revised, someone has to update the index too.",
    category: "Architecture",
    module: 4,
  },
  {
    id: "latency",
    term: "Latency vs Throughput",
    definition:
      "Latency is the time for a single request to complete (speed). Throughput is how many requests can be handled in a given period (volume). Optimizing one can hurt the other.",
    analogy:
      "A sports car (low latency, low throughput) vs a freight train (high latency, high throughput). The car gets one package there fast. The train is slow but carries 10,000 packages.",
    category: "Architecture",
    module: 4,
  },
  {
    id: "syncasync",
    term: "Sync vs Async",
    definition:
      "Synchronous operations block execution until they complete — the caller waits. Asynchronous operations let the caller continue working and get notified when the result is ready.",
    analogy:
      "Sync: you call a restaurant and stay on hold until they confirm your reservation. Async: you text them, hang up, and they text back when it's confirmed.",
    category: "Architecture",
    module: 4,
  },
  {
    id: "envvars",
    term: "Environment Variables",
    definition:
      "Configuration values (database URLs, API keys, feature flags) stored outside the codebase that change between development, staging, and production environments.",
    analogy:
      "The forwarding instructions taped inside the mail room that say 'if we're in Building A, use locker 5; if Building B, use locker 12.' The letters are the same, but where they go depends on which building you're in.",
    category: "Daily Engineering",
    module: 4,
  },
  {
    id: "state",
    term: "State Management",
    definition:
      "The practice of tracking, storing, and updating data that changes over time in an application, and ensuring the UI reflects those changes. Becomes complex as apps grow.",
    analogy:
      "A scoreboard at a stadium. Every time a team scores, the scoreboard (UI) needs to update. State management is the system that tracks the score (data), decides when it changed, and tells the scoreboard crew to flip the numbers.",
    category: "Web Fundamentals",
    module: 4,
  },
  {
    id: "dom",
    term: "DOM",
    definition:
      "Document Object Model — the tree-structured representation of an HTML page that the browser builds in memory. JavaScript interacts with this tree to read and change what's displayed.",
    analogy:
      "The blueprint of a house that the construction crew (browser) uses. JavaScript is the renovation team — they don't change the architect's original drawing, they modify the built house through the blueprint.",
    category: "Web Fundamentals",
    module: 4,
  },

  // ═══ Module 5: Infrastructure & Architecture ═══
  {
    id: "cicd",
    term: "CI/CD",
    definition:
      "Continuous Integration / Continuous Deployment — automated pipelines that test code when it's merged (CI) and deploy it to production without manual steps (CD).",
    analogy:
      "A conveyor belt from the workshop to the storefront. Every time someone finishes a product, it gets automatically inspected, packaged, and placed on the shelf — no one carries it by hand.",
    category: "Daily Engineering",
    module: 5,
  },
  {
    id: "loadbalancer",
    term: "Load Balancer",
    definition:
      "A system that distributes incoming network traffic across multiple servers so no single server is overwhelmed, improving reliability and capacity.",
    analogy:
      "A host at a restaurant who seats new customers at whichever table has the shortest wait, instead of sending everyone to the same waiter.",
    category: "Architecture",
    module: 5,
  },
  {
    id: "microservices",
    term: "Microservices vs Monolith",
    definition:
      "A monolith is one codebase doing everything. Microservices split each function into its own independent service that communicates over the network. Simpler to start with a monolith, harder to scale. Harder to start with microservices, easier to scale.",
    analogy:
      "Monolith: one restaurant where the same crew does cooking, cleaning, and serving. Microservices: a food court where each stall specializes but they share the seating area. The food court scales better but coordinating across stalls is its own headache.",
    category: "Architecture",
    module: 5,
  },
  {
    id: "queue",
    term: "Message Queue",
    definition:
      "A buffer that sits between services, holding tasks to be processed later. Producers add messages, consumers pull and process them at their own pace, decoupling the two.",
    analogy:
      "A take-a-number deli counter. Customers drop off orders (producers) and the kitchen works through them one by one (consumers). The counter absorbs the rush so the kitchen isn't overwhelmed.",
    category: "Architecture",
    module: 5,
  },
  {
    id: "promises",
    term: "Promises / Async-Await",
    definition:
      "A Promise is an object representing a value that doesn't exist yet but will resolve (success) or reject (failure) in the future. Async-await is syntactic sugar that lets you write async code that reads like synchronous code.",
    analogy:
      "A claim ticket at a dry cleaner. You hand in your clothes (start the operation), get a ticket (the Promise), and come back later. The ticket either gets you your clothes (resolved) or a 'sorry we lost them' (rejected). Async-await is calling the shop and staying on the line instead of taking the ticket.",
    category: "Web Fundamentals",
    module: 5,
  },
  {
    id: "eventloop",
    term: "Event Loop",
    definition:
      "The mechanism by which JavaScript (single-threaded) handles async operations. It continuously checks a queue of pending callbacks and executes them one at a time when the main thread is free.",
    analogy:
      "A single chef working alone. When something is in the oven (async), the chef doesn't stand and stare — they prep the next dish. When the oven timer dings (callback), they finish that dish next. But they can only do one thing at a time.",
    category: "Web Fundamentals",
    module: 5,
  },
];

export const CATEGORIES = [...new Set(CONCEPTS.map((c) => c.category))];

export const CATEGORY_COLORS = {
  "API Basics": "#f0c674",
  "Daily Engineering": "#81a2be",
  Architecture: "#b294bb",
  "Web Fundamentals": "#8abeb7",
};
