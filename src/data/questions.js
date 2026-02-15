// ─── QUESTION BANK ───
// Each question has: id, conceptId, module, type, prompt, options, correctIndex, explanation, whySection
// Types: "term_to_def", "def_to_term", "analogy_to_term", "term_to_analogy", "scenario", "true_false", "which_is_not"
//
// To add questions: just add objects to this array. No app code changes needed.
// Target: 450+ questions for DMV-app-level variety.

export const QUESTIONS = [
  // ═══════════════════════════════════════════════════════
  // MODULE 1: How the Web Talks (Foundations)
  // ═══════════════════════════════════════════════════════

  // --- API Endpoint ---
  {
    id: "q_endpoint_t2d_1",
    conceptId: "endpoint",
    module: 1,
    type: "term_to_def",
    prompt: "What is an API Endpoint?",
    options: [
      "A specific URL where an API can be accessed to perform an operation on a resource",
      "A protocol that encrypts data sent between client and server",
      "A numeric code returned by a server indicating the result of a request",
      "A restriction on how many requests a client can make within a time window",
    ],
    correctIndex: 0,
    explanation:
      "An API Endpoint is a specific URL where an API can be accessed to perform an operation on a resource — like a mailbox address where things get sent and picked up.",
  },
  {
    id: "q_endpoint_d2t_1",
    conceptId: "endpoint",
    module: 1,
    type: "def_to_term",
    prompt:
      "A specific URL where an API can be accessed to perform an operation on a resource. What concept is this?",
    options: ["API Endpoint", "API Gateway", "Webhook", "DNS"],
    correctIndex: 0,
    explanation:
      "This describes an API Endpoint — the specific address where you interact with an API.",
  },
  {
    id: "q_endpoint_a2t_1",
    conceptId: "endpoint",
    module: 1,
    type: "analogy_to_term",
    prompt:
      '"Your mailbox address — where things get sent and picked up." What web concept does this represent?',
    options: ["API Endpoint", "Webhook", "DNS", "API Gateway"],
    correctIndex: 0,
    explanation:
      "The mailbox address analogy represents an API Endpoint — the specific location where requests are sent to and responses come from.",
  },
  {
    id: "q_endpoint_t2a_1",
    conceptId: "endpoint",
    module: 1,
    type: "term_to_analogy",
    prompt: "Which analogy best describes an API Endpoint?",
    options: [
      "Your mailbox address — where things get sent and picked up",
      "A doorbell that rings when a package arrives",
      "The front gate of a gated community",
      "A phone book that translates names to addresses",
    ],
    correctIndex: 0,
    explanation:
      "An API Endpoint is like your mailbox address — the specific place where requests arrive and responses are sent from.",
  },

  // --- HTTP Methods ---
  {
    id: "q_methods_t2d_1",
    conceptId: "methods",
    module: 1,
    type: "term_to_def",
    prompt: "What are HTTP Methods?",
    options: [
      "Verbs (GET, POST, PUT, DELETE) that specify what operation to perform on the resource at an endpoint",
      "Standardized numeric codes returned by a server indicating the result of a request",
      "The data serialization standard that client and server agree to use",
      "The full sequence of steps when a browser requests a page",
    ],
    correctIndex: 0,
    explanation:
      "HTTP Methods are verbs like GET, POST, PUT, DELETE that tell the server what operation you want to perform — like telling a carrier to deliver, hand over, replace, or throw away.",
  },
  {
    id: "q_methods_d2t_1",
    conceptId: "methods",
    module: 1,
    type: "def_to_term",
    prompt:
      "Verbs like GET, POST, PUT, DELETE that specify what operation to perform on a resource. What concept is this?",
    options: [
      "HTTP Methods",
      "HTTP Status Codes",
      "Request/Response Format",
      "API Endpoint",
    ],
    correctIndex: 0,
    explanation:
      "These verbs are HTTP Methods — they define the action you want to take on a resource.",
  },
  {
    id: "q_methods_a2t_1",
    conceptId: "methods",
    module: 1,
    type: "analogy_to_term",
    prompt:
      '"What you ask the carrier to do — deliver (POST), hand over (GET), replace (PUT), or throw away (DELETE)." What concept is this?',
    options: [
      "HTTP Methods",
      "HTTP Status Codes",
      "Middleware",
      "API Endpoint",
    ],
    correctIndex: 0,
    explanation:
      "This carrier analogy describes HTTP Methods — the actions you instruct the server to perform.",
  },
  {
    id: "q_methods_t2a_1",
    conceptId: "methods",
    module: 1,
    type: "term_to_analogy",
    prompt: "Which analogy best describes HTTP Methods?",
    options: [
      "What you ask the carrier to do — deliver, hand over, replace, or throw away",
      "The carrier's response — thumbs up, 'nobody home', or 'mailbox is on fire'",
      "The agreed-upon language the letters are written in",
      "The lock on your mailbox that only the right key can open",
    ],
    correctIndex: 0,
    explanation:
      "HTTP Methods are like instructions to a carrier — each method tells the server what action to take.",
  },

  // --- Request/Response Format ---
  {
    id: "q_format_t2d_1",
    conceptId: "format",
    module: 1,
    type: "term_to_def",
    prompt: "What is a Request/Response Format?",
    options: [
      "The data serialization standard (JSON, XML, etc.) that both client and server agree to use for communication",
      "The specific URL where an API can be accessed",
      "Verbs that specify what operation to perform on a resource",
      "A maximum duration a client will wait for a response",
    ],
    correctIndex: 0,
    explanation:
      "Request/Response Format is the agreed-upon data standard (like JSON) that both sides use to communicate — like making sure both parties read the same language.",
  },
  {
    id: "q_format_d2t_1",
    conceptId: "format",
    module: 1,
    type: "def_to_term",
    prompt:
      "The data serialization standard (JSON, XML, etc.) that both client and server agree to use. What is this called?",
    options: [
      "Request/Response Format",
      "HTTP Methods",
      "API Endpoint",
      "CORS",
    ],
    correctIndex: 0,
    explanation:
      "This describes the Request/Response Format — the shared language for data exchange.",
  },

  // --- HTTP Request Lifecycle ---
  {
    id: "q_httpcycle_t2d_1",
    conceptId: "httpcycle",
    module: 1,
    type: "term_to_def",
    prompt: "What is the HTTP Request Lifecycle?",
    options: [
      "The full sequence: DNS lookup → TCP connection → TLS handshake → HTTP request → server processes → response → browser renders",
      "A restriction on how many requests a client can make within a time window",
      "The mechanism by which JavaScript handles async operations",
      "A protocol that lets users grant limited access to their data on one service to another",
    ],
    correctIndex: 0,
    explanation:
      "The HTTP Request Lifecycle is the complete journey of a web request, from looking up the address (DNS) all the way through to rendering the result in your browser.",
  },
  {
    id: "q_httpcycle_a2t_1",
    conceptId: "httpcycle",
    module: 1,
    type: "analogy_to_term",
    prompt:
      '"Ordering a package: look up the store\'s address → establish a delivery route → verify it\'s legit → place your order → warehouse packs it → package delivered → you unbox it." What concept is this?',
    options: [
      "HTTP Request Lifecycle",
      "CI/CD",
      "REST API",
      "Message Queue",
    ],
    correctIndex: 0,
    explanation:
      "This step-by-step package ordering analogy describes the HTTP Request Lifecycle — each step maps to DNS, TCP, TLS, request, processing, response, and rendering.",
  },

  // --- DNS ---
  {
    id: "q_dns_t2d_1",
    conceptId: "dns",
    module: 1,
    type: "term_to_def",
    prompt: "What is DNS?",
    options: [
      "The internet's phone book that translates domain names into IP addresses",
      "A browser security mechanism that blocks cross-origin requests",
      "An automated pipeline that tests and deploys code",
      "A query language where the client specifies exactly which fields it needs",
    ],
    correctIndex: 0,
    explanation:
      "DNS (Domain Name System) translates human-readable names like google.com into IP addresses that computers use — like a taxi driver looking up a street address from a restaurant name.",
  },
  {
    id: "q_dns_a2t_1",
    conceptId: "dns",
    module: 1,
    type: "analogy_to_term",
    prompt:
      "\"You tell the taxi driver 'take me to Joe's Pizza' and they look up the actual street address.\" What concept is this?",
    options: ["DNS", "API Gateway", "Load Balancer", "API Endpoint"],
    correctIndex: 0,
    explanation:
      "This describes DNS — it translates human-friendly names into machine-readable addresses, just like looking up a street address from a name.",
  },

  // ═══════════════════════════════════════════════════════
  // MODULE 2: Requests & Responses
  // ═══════════════════════════════════════════════════════

  // --- HTTP Status Codes ---
  {
    id: "q_status_t2d_1",
    conceptId: "status",
    module: 2,
    type: "term_to_def",
    prompt: "What are HTTP Status Codes?",
    options: [
      "Standardized numeric codes returned by a server indicating the result of a request (e.g., 200 OK, 404 Not Found)",
      "Verbs that specify what operation to perform on a resource",
      "Configuration values stored outside the codebase",
      "The data serialization standard that client and server agree to use",
    ],
    correctIndex: 0,
    explanation:
      "HTTP Status Codes are numeric responses from the server — 200 means success, 404 means not found, 500 means server error. Like the carrier giving a thumbs up or saying 'nobody home.'",
  },
  {
    id: "q_status_d2t_1",
    conceptId: "status",
    module: 2,
    type: "def_to_term",
    prompt:
      "Standardized numeric codes (like 200, 404, 500) returned by a server indicating the result of a request. What are these called?",
    options: [
      "HTTP Status Codes",
      "HTTP Methods",
      "Rate Limiting",
      "API Key / Auth Token",
    ],
    correctIndex: 0,
    explanation:
      "These are HTTP Status Codes — the server's way of telling you what happened with your request.",
  },

  // --- API Key / Auth Token ---
  {
    id: "q_auth_t2d_1",
    conceptId: "auth",
    module: 2,
    type: "term_to_def",
    prompt: "What is an API Key / Auth Token?",
    options: [
      "A credential included with requests to verify the identity and permissions of the caller",
      "A restriction on how many requests can be made within a time window",
      "A standardized numeric code indicating the result of a request",
      "A maximum duration a client will wait for a response",
    ],
    correctIndex: 0,
    explanation:
      "An API Key / Auth Token is a credential that proves who you are and what you're allowed to do — like the key to your mailbox.",
  },
  {
    id: "q_auth_a2t_1",
    conceptId: "auth",
    module: 2,
    type: "analogy_to_term",
    prompt:
      '"The lock on your mailbox — only people with the right key can use it." What concept is this?',
    options: [
      "API Key / Auth Token",
      "OAuth / SSO",
      "CORS",
      "Rate Limiting",
    ],
    correctIndex: 0,
    explanation:
      "The mailbox lock analogy describes an API Key / Auth Token — it controls who can access the resource.",
  },

  // --- Rate Limiting ---
  {
    id: "q_ratelimit_t2d_1",
    conceptId: "ratelimit",
    module: 2,
    type: "term_to_def",
    prompt: "What is Rate Limiting?",
    options: [
      "A restriction on how many requests a client can make to an API within a given time window",
      "A maximum duration a client will wait for a response",
      "A credential included with requests to verify identity",
      "The process of determining when cached data is stale",
    ],
    correctIndex: 0,
    explanation:
      "Rate Limiting restricts how many requests you can make in a period — like a sign saying 'max 10 deliveries per hour.'",
  },
  {
    id: "q_ratelimit_d2t_1",
    conceptId: "ratelimit",
    module: 2,
    type: "def_to_term",
    prompt:
      "A restriction on how many requests a client can make to an API within a given time window. What is this?",
    options: ["Rate Limiting", "Timeout", "Throttling", "Load Balancing"],
    correctIndex: 0,
    explanation:
      "This describes Rate Limiting — capping the number of requests to prevent abuse or overload.",
  },

  // --- Timeout ---
  {
    id: "q_timeout_t2d_1",
    conceptId: "timeout",
    module: 2,
    type: "term_to_def",
    prompt: "What is a Timeout?",
    options: [
      "A maximum duration a client will wait for a response before treating the request as failed",
      "A restriction on how many requests a client can make",
      "A credential included with requests to verify identity",
      "A standardized numeric code indicating the result of a request",
    ],
    correctIndex: 0,
    explanation:
      "A Timeout is the maximum time you'll wait for a response — like ringing a doorbell, waiting 30 seconds, and leaving if nobody answers.",
  },
  {
    id: "q_timeout_a2t_1",
    conceptId: "timeout",
    module: 2,
    type: "analogy_to_term",
    prompt:
      '"You rang the doorbell, waited 30 seconds, nobody answered. You leave." What concept is this?',
    options: [
      "Timeout",
      "Rate Limiting",
      "Polling",
      "Sync vs Async",
    ],
    correctIndex: 0,
    explanation:
      "This describes a Timeout — giving up after waiting too long for a response.",
  },

  // ═══════════════════════════════════════════════════════
  // MODULE 3: API Patterns & Auth
  // ═══════════════════════════════════════════════════════

  // --- REST API ---
  {
    id: "q_rest_t2d_1",
    conceptId: "rest",
    module: 3,
    type: "term_to_def",
    prompt: "What is a REST API?",
    options: [
      "An architectural style where resources are accessed via standard HTTP methods at predictable URLs, with each request containing all needed context",
      "A query language where the client specifies exactly which fields it needs",
      "A callback mechanism where a service sends an HTTP POST when an event occurs",
      "A single entry point that manages and routes all incoming API requests",
    ],
    correctIndex: 0,
    explanation:
      "REST is an architectural style using standard HTTP methods at predictable URLs — like a post office with strict rules where you fill out a standard form every time.",
  },
  {
    id: "q_rest_d2t_1",
    conceptId: "rest",
    module: 3,
    type: "def_to_term",
    prompt:
      "An architectural style where resources are accessed via HTTP methods at predictable URLs, with each request self-contained. What is this?",
    options: ["REST API", "GraphQL", "Webhook", "CORS"],
    correctIndex: 0,
    explanation:
      "This describes a REST API — the most common pattern for web APIs, built on standard HTTP conventions.",
  },

  // --- GraphQL ---
  {
    id: "q_graphql_t2d_1",
    conceptId: "graphql",
    module: 3,
    type: "term_to_def",
    prompt: "What is GraphQL?",
    options: [
      "A query language where the client specifies exactly which fields it needs and gets only that data",
      "An architectural style using standard HTTP methods at predictable URLs",
      "A buffer that holds tasks to be processed later",
      "A data structure that lets a database find rows quickly",
    ],
    correctIndex: 0,
    explanation:
      "GraphQL lets the client request exactly the data it needs — like handing a shopping list instead of receiving a full catalog.",
  },
  {
    id: "q_graphql_a2t_1",
    conceptId: "graphql",
    module: 3,
    type: "analogy_to_term",
    prompt:
      '"Instead of getting a full catalog, you hand them a shopping list and they return exactly those items — nothing more, nothing less." What concept is this?',
    options: ["GraphQL", "REST API", "API Gateway", "Webhook"],
    correctIndex: 0,
    explanation:
      "This shopping list analogy describes GraphQL — you specify exactly what data you need.",
  },

  // --- Webhook ---
  {
    id: "q_webhook_t2d_1",
    conceptId: "webhook",
    module: 3,
    type: "term_to_def",
    prompt: "What is a Webhook?",
    options: [
      "A callback mechanism where a service sends an HTTP POST to your URL when a specific event occurs",
      "Repeatedly sending requests at intervals to check for new data",
      "A query language where the client specifies which fields it needs",
      "An architectural style using HTTP methods at predictable URLs",
    ],
    correctIndex: 0,
    explanation:
      "A Webhook pushes data to you when something happens — like a doorbell that rings the moment a package arrives.",
  },
  {
    id: "q_webhook_d2t_1",
    conceptId: "webhook",
    module: 3,
    type: "def_to_term",
    prompt:
      "A callback mechanism where a service sends an HTTP POST to your registered URL when a specific event occurs. What is this?",
    options: ["Webhook", "API Polling", "REST API", "Middleware"],
    correctIndex: 0,
    explanation:
      "This describes a Webhook — the server notifies you instead of you having to ask repeatedly.",
  },

  // --- API Polling ---
  {
    id: "q_polling_t2d_1",
    conceptId: "polling",
    module: 3,
    type: "term_to_def",
    prompt: "What is API Polling?",
    options: [
      "Repeatedly sending requests at set intervals to check for new data or state changes",
      "A callback mechanism where a service sends data when an event occurs",
      "A restriction on how many requests can be made within a time window",
      "A credential included with requests to verify identity",
    ],
    correctIndex: 0,
    explanation:
      "API Polling means checking repeatedly at intervals — like walking to the mailbox every hour to see if new letters arrived.",
  },
  {
    id: "q_polling_a2t_1",
    conceptId: "polling",
    module: 3,
    type: "analogy_to_term",
    prompt:
      '"Walking to the mailbox every hour to check for letters." What concept does this describe?',
    options: [
      "API Polling",
      "Webhook",
      "Rate Limiting",
      "Caching",
    ],
    correctIndex: 0,
    explanation:
      "This describes API Polling — repeatedly checking for updates at regular intervals.",
  },

  // --- OAuth / SSO ---
  {
    id: "q_oauth_t2d_1",
    conceptId: "oauth",
    module: 3,
    type: "term_to_def",
    prompt: "What is OAuth / SSO?",
    options: [
      "OAuth lets users grant limited access to their data without sharing their password; SSO lets users log in once for multiple services",
      "A credential included with requests to verify identity",
      "A browser mechanism that blocks cross-origin requests",
      "Software that intercepts requests between client and handler",
    ],
    correctIndex: 0,
    explanation:
      "OAuth grants limited, revocable access without sharing passwords; SSO provides single sign-on across services.",
  },
  {
    id: "q_oauth_a2t_1",
    conceptId: "oauth",
    module: 3,
    type: "analogy_to_term",
    prompt:
      '"Instead of giving your house key to the dog walker, you give them a special pass that only opens the back door, only on weekdays, and you can revoke it anytime." What concept is this?',
    options: [
      "OAuth / SSO",
      "API Key / Auth Token",
      "CORS",
      "Middleware",
    ],
    correctIndex: 0,
    explanation:
      "This limited-access pass analogy describes OAuth — granting specific, revocable permissions without sharing full credentials.",
  },

  // --- CORS ---
  {
    id: "q_cors_t2d_1",
    conceptId: "cors",
    module: 3,
    type: "term_to_def",
    prompt: "What is CORS?",
    options: [
      "Cross-Origin Resource Sharing — a browser security mechanism that blocks requests to different domains unless explicitly allowed",
      "A protocol that lets users grant limited access to their data",
      "A single entry point that routes all API requests",
      "Software that intercepts requests between client and handler",
    ],
    correctIndex: 0,
    explanation:
      "CORS is a browser security feature that controls which domains can make requests to your server — like an apartment building that only accepts packages from approved senders.",
  },
  {
    id: "q_cors_d2t_1",
    conceptId: "cors",
    module: 3,
    type: "def_to_term",
    prompt:
      "A browser security mechanism that blocks web pages from making requests to a different domain unless the server allows it. What is this?",
    options: ["CORS", "OAuth", "API Gateway", "Firewall"],
    correctIndex: 0,
    explanation:
      "This describes CORS — the browser enforcing that servers must explicitly allow cross-origin requests.",
  },

  // --- API Gateway ---
  {
    id: "q_gateway_t2d_1",
    conceptId: "gateway",
    module: 3,
    type: "term_to_def",
    prompt: "What is an API Gateway?",
    options: [
      "A single entry point that manages, authenticates, and routes all incoming API requests to backend services",
      "Software that intercepts and processes requests between client and handler",
      "A callback mechanism triggered by specific events",
      "A data structure that speeds up database lookups",
    ],
    correctIndex: 0,
    explanation:
      "An API Gateway is the single front door for all API traffic — like the front gate of a gated community where every visitor checks in before being directed to the right house.",
  },

  // --- Middleware ---
  {
    id: "q_middleware_t2d_1",
    conceptId: "middleware",
    module: 3,
    type: "term_to_def",
    prompt: "What is Middleware?",
    options: [
      "Software that intercepts and processes requests/responses between client and handler, performing tasks like logging, auth, or transformation",
      "A single entry point that routes all incoming API requests",
      "A callback mechanism triggered by specific events",
      "A buffer that holds tasks to be processed later",
    ],
    correctIndex: 0,
    explanation:
      "Middleware sits between the client and the final handler — like a mail room that sorts, scans, and routes letters before they reach your desk.",
  },
  {
    id: "q_middleware_a2t_1",
    conceptId: "middleware",
    module: 3,
    type: "analogy_to_term",
    prompt:
      '"The mail room in your building — it sorts, scans, and routes letters before they reach your desk." What concept is this?',
    options: [
      "Middleware",
      "API Gateway",
      "Load Balancer",
      "Message Queue",
    ],
    correctIndex: 0,
    explanation:
      "The mail room analogy describes Middleware — processing requests before they reach their final destination.",
  },

  // --- Idempotency ---
  {
    id: "q_idempotency_t2d_1",
    conceptId: "idempotency",
    module: 3,
    type: "term_to_def",
    prompt: "What is Idempotency?",
    options: [
      "An operation that produces the same result whether performed once or multiple times",
      "The process of determining when cached data is stale",
      "A restriction on how many requests can be made within a time window",
      "A system that distributes traffic across multiple servers",
    ],
    correctIndex: 0,
    explanation:
      "An idempotent operation gives the same result no matter how many times you do it — like pressing an elevator button. Pressing it 15 times doesn't summon 15 elevators.",
  },
  {
    id: "q_idempotency_a2t_1",
    conceptId: "idempotency",
    module: 3,
    type: "analogy_to_term",
    prompt:
      '"Pressing an elevator button — pressing it once or 15 times produces the same result." What concept is this?',
    options: [
      "Idempotency",
      "Caching",
      "Rate Limiting",
      "Sync vs Async",
    ],
    correctIndex: 0,
    explanation:
      "The elevator button analogy describes Idempotency — the result is the same regardless of how many times the operation runs.",
  },

  // ═══════════════════════════════════════════════════════
  // MODULE 4: Data & Performance
  // ═══════════════════════════════════════════════════════

  // --- Caching ---
  {
    id: "q_caching_t2d_1",
    conceptId: "caching",
    module: 4,
    type: "term_to_def",
    prompt: "What is Caching?",
    options: [
      "Storing a copy of frequently accessed data in a faster location to avoid repeating expensive operations",
      "The process of determining when stored data is stale",
      "A data structure that speeds up database lookups",
      "A buffer between services that holds tasks for later processing",
    ],
    correctIndex: 0,
    explanation:
      "Caching keeps a copy of frequently-needed data close by — like keeping a photocopy on your desk instead of walking to the filing cabinet every time.",
  },
  {
    id: "q_caching_a2t_1",
    conceptId: "caching",
    module: 4,
    type: "analogy_to_term",
    prompt:
      '"Keeping a photocopy of your most-requested document on your desk instead of walking to the filing cabinet every time." What concept is this?',
    options: [
      "Caching",
      "Cache Invalidation",
      "Database Index",
      "State Management",
    ],
    correctIndex: 0,
    explanation:
      "This photocopy analogy describes Caching — storing data in a faster location for quick access.",
  },

  // --- Cache Invalidation ---
  {
    id: "q_cacheinvalidation_t2d_1",
    conceptId: "cacheinvalidation",
    module: 4,
    type: "term_to_def",
    prompt: "What is Cache Invalidation?",
    options: [
      "The process of determining when cached data is stale and needs to be refreshed from the source of truth",
      "Storing a copy of data in a faster location",
      "A restriction on how many requests can be made",
      "A system that distributes traffic across multiple servers",
    ],
    correctIndex: 0,
    explanation:
      "Cache Invalidation is knowing when your cached copy is outdated — like realizing the photocopy on your desk is from last Tuesday but the original was updated yesterday.",
  },
  {
    id: "q_cacheinvalidation_a2t_1",
    conceptId: "cacheinvalidation",
    module: 4,
    type: "analogy_to_term",
    prompt:
      '"The photocopy on your desk is from last Tuesday. The original was updated yesterday. How do you know your copy is wrong?" What concept is this?',
    options: [
      "Cache Invalidation",
      "Caching",
      "State Management",
      "Sync vs Async",
    ],
    correctIndex: 0,
    explanation:
      "This stale-photocopy problem describes Cache Invalidation — one of the hardest problems in computing.",
  },

  // --- Database Index ---
  {
    id: "q_dbindex_t2d_1",
    conceptId: "dbindex",
    module: 4,
    type: "term_to_def",
    prompt: "What is a Database Index?",
    options: [
      "A data structure that lets a database find rows quickly without scanning every row, but slows down writes",
      "A buffer between services that holds tasks for later processing",
      "The process of determining when cached data is stale",
      "Storing data in a faster location for quick access",
    ],
    correctIndex: 0,
    explanation:
      "A Database Index speeds up lookups — like the index at the back of a textbook. But it slows writes because the index must be updated too.",
  },
  {
    id: "q_dbindex_a2t_1",
    conceptId: "dbindex",
    module: 4,
    type: "analogy_to_term",
    prompt:
      '"The index at the back of a textbook — you go straight to page 247 instead of flipping through every page. But when the book is revised, the index must be updated too." What concept is this?',
    options: [
      "Database Index",
      "Caching",
      "DNS",
      "API Gateway",
    ],
    correctIndex: 0,
    explanation:
      "The textbook index analogy describes a Database Index — fast lookups at the cost of slower writes.",
  },

  // --- Latency vs Throughput ---
  {
    id: "q_latency_t2d_1",
    conceptId: "latency",
    module: 4,
    type: "term_to_def",
    prompt: "What is the difference between Latency and Throughput?",
    options: [
      "Latency is time for a single request (speed); Throughput is requests handled per period (volume). Optimizing one can hurt the other.",
      "Latency is synchronous; Throughput is asynchronous",
      "Latency is the request; Throughput is the response",
      "Latency is client-side; Throughput is server-side",
    ],
    correctIndex: 0,
    explanation:
      "Latency = speed of one request. Throughput = volume of requests. A sports car (low latency) vs a freight train (high throughput).",
  },
  {
    id: "q_latency_a2t_1",
    conceptId: "latency",
    module: 4,
    type: "analogy_to_term",
    prompt:
      '"A sports car (fast, carries one package) vs a freight train (slow, carries 10,000 packages)." What concept does this illustrate?',
    options: [
      "Latency vs Throughput",
      "Sync vs Async",
      "Microservices vs Monolith",
      "Caching vs Cache Invalidation",
    ],
    correctIndex: 0,
    explanation:
      "This speed-vs-volume tradeoff describes Latency vs Throughput.",
  },

  // --- Sync vs Async ---
  {
    id: "q_syncasync_t2d_1",
    conceptId: "syncasync",
    module: 4,
    type: "term_to_def",
    prompt: "What is the difference between Sync and Async operations?",
    options: [
      "Sync blocks execution until completion (caller waits); Async lets the caller continue and get notified when done",
      "Sync uses HTTP; Async uses WebSockets",
      "Sync is client-side; Async is server-side",
      "Sync is for reads; Async is for writes",
    ],
    correctIndex: 0,
    explanation:
      "Sync = stay on hold until they answer. Async = text them and they text back when ready.",
  },
  {
    id: "q_syncasync_a2t_1",
    conceptId: "syncasync",
    module: 4,
    type: "analogy_to_term",
    prompt:
      '"You call a restaurant and stay on hold until they confirm (sync). Or you text them and they text back when confirmed (async)." What concept is this?',
    options: [
      "Sync vs Async",
      "Latency vs Throughput",
      "Polling vs Webhook",
      "REST vs GraphQL",
    ],
    correctIndex: 0,
    explanation:
      "The phone-call-vs-text analogy describes Sync vs Async operations.",
  },

  // --- Environment Variables ---
  {
    id: "q_envvars_t2d_1",
    conceptId: "envvars",
    module: 4,
    type: "term_to_def",
    prompt: "What are Environment Variables?",
    options: [
      "Configuration values (database URLs, API keys, feature flags) stored outside the codebase that change between environments",
      "Standardized numeric codes returned by a server",
      "The practice of tracking and updating data that changes over time in an app",
      "A browser security mechanism that blocks cross-origin requests",
    ],
    correctIndex: 0,
    explanation:
      "Environment Variables are config values that live outside the code — like forwarding instructions that change depending on which building you're in.",
  },

  // --- State Management ---
  {
    id: "q_state_t2d_1",
    conceptId: "state",
    module: 4,
    type: "term_to_def",
    prompt: "What is State Management?",
    options: [
      "The practice of tracking, storing, and updating data that changes over time in an app, ensuring the UI reflects those changes",
      "Configuration values stored outside the codebase",
      "The process of determining when cached data is stale",
      "A data structure that speeds up database lookups",
    ],
    correctIndex: 0,
    explanation:
      "State Management tracks changing data and keeps the UI in sync — like a scoreboard system that updates the display every time a team scores.",
  },
  {
    id: "q_state_a2t_1",
    conceptId: "state",
    module: 4,
    type: "analogy_to_term",
    prompt:
      '"A scoreboard at a stadium — tracking the score and telling the crew to update the display when it changes." What concept is this?',
    options: [
      "State Management",
      "Cache Invalidation",
      "Event Loop",
      "DOM",
    ],
    correctIndex: 0,
    explanation:
      "The scoreboard analogy describes State Management — keeping data and UI in sync.",
  },

  // --- DOM ---
  {
    id: "q_dom_t2d_1",
    conceptId: "dom",
    module: 4,
    type: "term_to_def",
    prompt: "What is the DOM?",
    options: [
      "Document Object Model — the tree-structured representation of an HTML page that JavaScript interacts with",
      "The mechanism by which JavaScript handles async operations",
      "The practice of tracking data changes in an application",
      "An automated pipeline that tests and deploys code",
    ],
    correctIndex: 0,
    explanation:
      "The DOM is the browser's in-memory tree of your HTML page — JavaScript reads and changes what's displayed by modifying this tree.",
  },
  {
    id: "q_dom_a2t_1",
    conceptId: "dom",
    module: 4,
    type: "analogy_to_term",
    prompt:
      '"The blueprint of a house that the construction crew uses. JavaScript is the renovation team modifying the built house through the blueprint." What concept is this?',
    options: ["DOM", "State Management", "Event Loop", "CI/CD"],
    correctIndex: 0,
    explanation:
      "This blueprint analogy describes the DOM — the structured representation JavaScript uses to modify what's displayed.",
  },

  // ═══════════════════════════════════════════════════════
  // MODULE 5: Infrastructure & Architecture
  // ═══════════════════════════════════════════════════════

  // --- CI/CD ---
  {
    id: "q_cicd_t2d_1",
    conceptId: "cicd",
    module: 5,
    type: "term_to_def",
    prompt: "What is CI/CD?",
    options: [
      "Continuous Integration / Continuous Deployment — automated pipelines that test code on merge and deploy without manual steps",
      "A system that distributes incoming traffic across servers",
      "A protocol that lets users grant limited access to their data",
      "The tree-structured representation of an HTML page",
    ],
    correctIndex: 0,
    explanation:
      "CI/CD is an automated conveyor belt — code gets tested on merge (CI) and deployed to production automatically (CD), no manual carrying.",
  },
  {
    id: "q_cicd_a2t_1",
    conceptId: "cicd",
    module: 5,
    type: "analogy_to_term",
    prompt:
      '"A conveyor belt from the workshop to the storefront — every product gets automatically inspected, packaged, and placed on the shelf." What concept is this?',
    options: [
      "CI/CD",
      "Message Queue",
      "Load Balancer",
      "Middleware",
    ],
    correctIndex: 0,
    explanation:
      "The automated conveyor belt analogy describes CI/CD — continuous testing and deployment.",
  },

  // --- Load Balancer ---
  {
    id: "q_loadbalancer_t2d_1",
    conceptId: "loadbalancer",
    module: 5,
    type: "term_to_def",
    prompt: "What is a Load Balancer?",
    options: [
      "A system that distributes incoming traffic across multiple servers so no single server is overwhelmed",
      "An automated pipeline that tests and deploys code",
      "A buffer between services holding tasks for later",
      "A single entry point that routes all API requests",
    ],
    correctIndex: 0,
    explanation:
      "A Load Balancer distributes traffic — like a restaurant host seating customers at whichever table has the shortest wait.",
  },
  {
    id: "q_loadbalancer_a2t_1",
    conceptId: "loadbalancer",
    module: 5,
    type: "analogy_to_term",
    prompt:
      '"A host at a restaurant who seats customers at whichever table has the shortest wait." What concept is this?',
    options: [
      "Load Balancer",
      "API Gateway",
      "Middleware",
      "Message Queue",
    ],
    correctIndex: 0,
    explanation:
      "The restaurant host analogy describes a Load Balancer — distributing work evenly across servers.",
  },

  // --- Microservices vs Monolith ---
  {
    id: "q_microservices_t2d_1",
    conceptId: "microservices",
    module: 5,
    type: "term_to_def",
    prompt: "What is the difference between Microservices and a Monolith?",
    options: [
      "Monolith: one codebase does everything. Microservices: each function is its own independent service communicating over the network.",
      "Monolith: server-side only. Microservices: client-side and server-side.",
      "Monolith: uses REST. Microservices: uses GraphQL.",
      "Monolith: no database. Microservices: multiple databases.",
    ],
    correctIndex: 0,
    explanation:
      "Monolith = one restaurant doing everything. Microservices = a food court where each stall specializes. Monolith is simpler to start; microservices scale better.",
  },
  {
    id: "q_microservices_a2t_1",
    conceptId: "microservices",
    module: 5,
    type: "analogy_to_term",
    prompt:
      '"One restaurant where the same crew does everything vs a food court where each stall specializes." What concept is this?',
    options: [
      "Microservices vs Monolith",
      "Sync vs Async",
      "Latency vs Throughput",
      "REST vs GraphQL",
    ],
    correctIndex: 0,
    explanation:
      "The restaurant-vs-food-court analogy describes Microservices vs Monolith architectures.",
  },

  // --- Message Queue ---
  {
    id: "q_queue_t2d_1",
    conceptId: "queue",
    module: 5,
    type: "term_to_def",
    prompt: "What is a Message Queue?",
    options: [
      "A buffer between services that holds tasks to be processed later, decoupling producers and consumers",
      "A system that distributes traffic across multiple servers",
      "An automated pipeline that tests and deploys code",
      "The mechanism by which JavaScript handles async operations",
    ],
    correctIndex: 0,
    explanation:
      "A Message Queue is a take-a-number deli counter — customers drop off orders and the kitchen works through them at its own pace.",
  },
  {
    id: "q_queue_a2t_1",
    conceptId: "queue",
    module: 5,
    type: "analogy_to_term",
    prompt:
      '"A take-a-number deli counter — customers drop off orders and the kitchen works through them one by one." What concept is this?',
    options: [
      "Message Queue",
      "Load Balancer",
      "Middleware",
      "Event Loop",
    ],
    correctIndex: 0,
    explanation:
      "The deli counter analogy describes a Message Queue — buffering work between producers and consumers.",
  },

  // --- Promises / Async-Await ---
  {
    id: "q_promises_t2d_1",
    conceptId: "promises",
    module: 5,
    type: "term_to_def",
    prompt: "What are Promises / Async-Await?",
    options: [
      "A Promise represents a future value that will resolve or reject; async-await is syntactic sugar for writing async code that reads like sync code",
      "The mechanism by which JavaScript checks a queue of pending callbacks",
      "Synchronous operations that block until they complete",
      "A protocol that lets users grant limited access to their data",
    ],
    correctIndex: 0,
    explanation:
      "A Promise is like a dry cleaner claim ticket — you get it now, pick up the result later. Async-await lets you write that flow as if it were synchronous.",
  },
  {
    id: "q_promises_a2t_1",
    conceptId: "promises",
    module: 5,
    type: "analogy_to_term",
    prompt:
      '"A claim ticket at a dry cleaner — you hand in clothes, get a ticket, and come back later. It either gets you your clothes (resolved) or a sorry note (rejected)." What concept is this?',
    options: [
      "Promises / Async-Await",
      "Sync vs Async",
      "Event Loop",
      "Message Queue",
    ],
    correctIndex: 0,
    explanation:
      "The claim ticket analogy describes Promises — an object representing a value that will be available in the future.",
  },

  // --- Event Loop ---
  {
    id: "q_eventloop_t2d_1",
    conceptId: "eventloop",
    module: 5,
    type: "term_to_def",
    prompt: "What is the Event Loop?",
    options: [
      "The mechanism by which JavaScript (single-threaded) handles async operations by checking a queue of pending callbacks",
      "A Promise that represents a future value",
      "A buffer between services that holds tasks for later",
      "An automated pipeline that tests and deploys code",
    ],
    correctIndex: 0,
    explanation:
      "The Event Loop is like a single chef — when something's in the oven (async), the chef preps the next dish. When the timer dings (callback), they handle it next.",
  },
  {
    id: "q_eventloop_a2t_1",
    conceptId: "eventloop",
    module: 5,
    type: "analogy_to_term",
    prompt:
      '"A single chef working alone — when something is in the oven, they prep the next dish. When the timer dings, they handle it." What concept is this?',
    options: [
      "Event Loop",
      "Message Queue",
      "Promises / Async-Await",
      "Sync vs Async",
    ],
    correctIndex: 0,
    explanation:
      "The single chef analogy describes the Event Loop — JavaScript handling one thing at a time while async operations wait.",
  },

  // ═══════════════════════════════════════════════════════
  // SCENARIO QUESTIONS (from spec)
  // ═══════════════════════════════════════════════════════

  {
    id: "q_scenario_http_lifecycle_1",
    conceptId: "httpcycle",
    module: 1,
    type: "scenario",
    prompt:
      "A frontend dev says the API endpoint returns a 200 but the page is blank. Which part of the HTTP lifecycle likely failed?",
    options: [
      "The render/parsing step — the request succeeded but the client isn't handling the response correctly",
      "The DNS lookup — the browser couldn't find the server",
      "The TLS handshake — the connection wasn't secure",
      "The TCP connection — packets were lost in transit",
    ],
    correctIndex: 0,
    explanation:
      "A 200 means the server responded successfully. If the page is still blank, the problem is in how the client renders or parses the response — the last step in the lifecycle.",
    whySection:
      "The HTTP lifecycle ends with the browser rendering the response. A 200 status confirms everything before that point worked. The failure is in the client-side rendering or parsing of the returned data.",
  },
  {
    id: "q_scenario_methods_1",
    conceptId: "methods",
    module: 1,
    type: "scenario",
    prompt:
      "Your team debates whether to use GET or POST for a search feature with complex filters. What's the key tradeoff?",
    options: [
      "GET puts params in the URL (bookmarkable, cacheable, length-limited). POST puts them in the body (no length limit, not cacheable, not bookmarkable).",
      "GET is faster than POST because it uses less bandwidth",
      "POST is more secure because it encrypts the data",
      "GET can only return JSON while POST can return any format",
    ],
    correctIndex: 0,
    explanation:
      "GET parameters live in the URL — great for bookmarking and caching, but URL length is limited. POST parameters live in the request body — no length limit, but you lose bookmarkability and caching.",
    whySection:
      "For simple searches, GET is preferred because results can be bookmarked and cached. For complex searches with many filters, POST avoids URL length limits. Neither is inherently 'more secure' — both need HTTPS.",
  },
  {
    id: "q_scenario_status_503",
    conceptId: "status",
    module: 2,
    type: "scenario",
    prompt:
      "Users report the app is broken. Logs show a spike in 503s. Is this a bug in your code or an infrastructure problem?",
    options: [
      "Infrastructure — 503 means the server is temporarily unable to handle requests, usually overloaded or in maintenance",
      "Code bug — 503 means there's a syntax error in the server code",
      "Client-side issue — 503 means the browser sent a bad request",
      "Database problem — 503 specifically indicates a database connection failure",
    ],
    correctIndex: 0,
    explanation:
      "503 Service Unavailable is an infrastructure issue — the server is overloaded or in maintenance. It's not a code bug, it's a capacity or availability problem.",
    whySection:
      "503 is in the 5xx range (server errors) and specifically means 'temporarily unable to handle the request.' This typically points to infrastructure: too many requests, server maintenance, or upstream dependencies being down.",
  },
  {
    id: "q_scenario_status_401",
    conceptId: "auth",
    module: 2,
    type: "scenario",
    prompt:
      "You get a 401 from an API. Your teammate says 'we're not authorized.' What's technically wrong with that statement?",
    options: [
      "401 means unauthenticated (identity not verified), not unauthorized. 403 is unauthorized (identity verified but lacks permission).",
      "Nothing — 401 and 'unauthorized' mean the same thing",
      "401 means the server is down, not that there's an auth problem",
      "401 only applies to OAuth, not API keys",
    ],
    correctIndex: 0,
    explanation:
      "401 = unauthenticated (who are you?). 403 = unauthorized (I know who you are, but you can't do this). The teammate confused the two — a common and important distinction.",
    whySection:
      "This distinction matters in debugging. A 401 means you need to provide or fix your credentials. A 403 means your credentials work but you don't have permission — a different fix entirely.",
  },
  {
    id: "q_scenario_ratelimit_429",
    conceptId: "ratelimit",
    module: 2,
    type: "scenario",
    prompt: "An API returns 429. What should your app do?",
    options: [
      "Back off and retry after a delay. Check the Retry-After header if present.",
      "Immediately retry the request — 429 is a temporary glitch",
      "Switch to a different API endpoint",
      "Report it as a server bug to the API provider",
    ],
    correctIndex: 0,
    explanation:
      "429 means 'Too Many Requests' — the server is rate-limiting you. Back off, wait (check Retry-After header), then retry. Hammering the server with retries will make it worse.",
    whySection:
      "Rate limiting protects the server from abuse and overload. The Retry-After header tells you exactly how long to wait. Implementing exponential backoff is the standard approach.",
  },
  {
    id: "q_scenario_graphql_1",
    conceptId: "graphql",
    module: 3,
    type: "scenario",
    prompt:
      "Your mobile app makes 6 API calls to load one screen. An engineer suggests switching to GraphQL. Why?",
    options: [
      "GraphQL lets the client request all needed data in a single query, eliminating multiple round trips",
      "GraphQL is faster because it uses a binary protocol instead of JSON",
      "GraphQL automatically caches all responses",
      "GraphQL doesn't require authentication",
    ],
    correctIndex: 0,
    explanation:
      "GraphQL's main advantage here is reducing 6 API calls to 1. The client specifies exactly what data it needs across all resources in a single request.",
    whySection:
      "On mobile, each network round trip is expensive (latency, battery, data usage). GraphQL's ability to fetch exactly what you need in one request is a significant win. The tradeoff: more complex server implementation and harder caching.",
  },
  {
    id: "q_scenario_webhook_1",
    conceptId: "webhook",
    module: 3,
    type: "scenario",
    prompt:
      "A payment webhook fires but your server was down. What happens to that payment notification?",
    options: [
      "It's lost unless the webhook provider has a retry mechanism — which is why idempotency matters",
      "It's automatically queued and delivered when your server comes back up",
      "The payment is automatically reversed",
      "The browser caches it and delivers it later",
    ],
    correctIndex: 0,
    explanation:
      "Webhooks are push-based — if your server can't receive it, it's lost. Good webhook providers retry, but your system must handle receiving the same event twice (idempotency).",
    whySection:
      "This scenario connects webhooks and idempotency. When the provider retries, your system might receive the same payment notification multiple times. Without idempotent handling, you might process the payment twice.",
  },
  {
    id: "q_scenario_cors_1",
    conceptId: "cors",
    module: 3,
    type: "scenario",
    prompt:
      "Frontend gets a CORS error when calling your API from localhost. Is this a bug?",
    options: [
      "No — CORS is the browser enforcing that your server hasn't allowed requests from that origin. Fix it server-side.",
      "Yes — CORS errors always indicate a bug in the frontend code",
      "Yes — localhost should always be allowed by default",
      "No — CORS errors only happen in production, not development",
    ],
    correctIndex: 0,
    explanation:
      "CORS is a security feature, not a bug. The browser blocks the request because the server hasn't added localhost to its allowed origins. The fix is server-side: update the allowed origins list.",
    whySection:
      "CORS protects users by preventing malicious sites from making requests to APIs on their behalf. In development, you need to explicitly allow localhost. In production, you allow your actual domain.",
  },
  {
    id: "q_scenario_polling_vs_webhook",
    conceptId: "polling",
    module: 3,
    type: "scenario",
    prompt: "Why would you use polling over a webhook?",
    options: [
      "When the external service doesn't support webhooks, or when you need data at predictable intervals",
      "Polling is always more efficient than webhooks",
      "Webhooks don't work with REST APIs",
      "Polling is more secure because data never leaves the server",
    ],
    correctIndex: 0,
    explanation:
      "Polling is the fallback when webhooks aren't available. It's also useful when you need data on a schedule rather than in response to events. Webhooks are generally preferred when available.",
    whySection:
      "Webhooks are event-driven and more efficient. But not all services support them. Polling gives you control over timing and doesn't require your server to be publicly accessible to receive callbacks.",
  },
  {
    id: "q_scenario_caching_stale",
    conceptId: "cacheinvalidation",
    module: 4,
    type: "scenario",
    prompt:
      "Users see stale prices on the product page even after a price update. What's likely happening?",
    options: [
      "Caching — the old price is cached somewhere (CDN, browser, app cache) and hasn't been invalidated yet",
      "The database hasn't been updated",
      "The frontend has a hardcoded price",
      "DNS is resolving to the wrong server",
    ],
    correctIndex: 0,
    explanation:
      "This is the classic cache invalidation problem. The price was updated at the source, but a cached copy of the old price is still being served. The cache needs to be invalidated.",
    whySection:
      "Caches exist at multiple layers: browser, CDN, application server, database query cache. The stale data could be stuck at any of these layers. This is why 'cache invalidation' is considered one of the two hardest problems in computer science.",
  },
  {
    id: "q_scenario_dbindex_1",
    conceptId: "dbindex",
    module: 4,
    type: "scenario",
    prompt:
      "An engineer says adding an index will speed up the search feature. What's the downside they might not mention?",
    options: [
      "Write operations slow down because the index must be updated on every insert/update/delete",
      "Indexes use encryption which adds latency",
      "Indexes can only be used with SQL databases",
      "Indexes make the database read-only",
    ],
    correctIndex: 0,
    explanation:
      "Indexes speed up reads but slow down writes. Every insert, update, or delete requires updating the index too. For write-heavy tables, this tradeoff might not be worth it.",
    whySection:
      "The textbook analogy works here: an index makes finding things fast, but every revision requires updating the index. In a database, this means writes are more expensive. The decision depends on your read/write ratio.",
  },
  {
    id: "q_scenario_async_dashboard",
    conceptId: "syncasync",
    module: 4,
    type: "scenario",
    prompt:
      "Your dashboard loads in 8 seconds. The engineer says 'the queries are synchronous.' What does that mean and what's the fix?",
    options: [
      "Each query waits for the previous one to finish. Run independent queries in parallel (async) to reduce total time.",
      "The queries are running too fast and need to be slowed down",
      "Synchronous queries can't be cached",
      "The queries are using GET instead of POST",
    ],
    correctIndex: 0,
    explanation:
      "If 4 queries each take 2 seconds synchronously, they take 8s total. Running them in parallel (async), they take ~2s. Independent queries should never wait for each other.",
    whySection:
      "This is one of the most common performance wins. Identify queries that don't depend on each other and run them concurrently. The dashboard time drops from the sum of all queries to the time of the slowest single query.",
  },
  {
    id: "q_scenario_envvars_1",
    conceptId: "envvars",
    module: 4,
    type: "scenario",
    prompt:
      "QA reports that a feature works in staging but not production. What's the first thing to check?",
    options: [
      "Environment variables — different API keys, database URLs, or feature flags between environments",
      "The production server's CPU usage",
      "Whether the DNS is configured correctly",
      "The user's browser version",
    ],
    correctIndex: 0,
    explanation:
      "The most common cause of staging/prod discrepancies is different configuration: API keys, database URLs, feature flags. Always check env vars first.",
    whySection:
      "Environment variables are the most likely culprit because they're the thing most commonly different between environments. A feature that works in staging but not production almost always comes down to config.",
  },
  {
    id: "q_scenario_cicd_friday",
    conceptId: "cicd",
    module: 5,
    type: "scenario",
    prompt:
      "A deploy broke production on Friday at 5pm. What process failure allowed this?",
    options: [
      "Missing CI/CD safeguards: no automated tests, no staged rollout, possibly no deploy freeze policy",
      "The code was written in the wrong programming language",
      "The server ran out of disk space",
      "DNS propagation was slow",
    ],
    correctIndex: 0,
    explanation:
      "A proper CI/CD pipeline should catch regressions with automated tests, use staged rollouts (canary/blue-green), and ideally have a deploy freeze policy for end-of-week.",
    whySection:
      "This is about process, not just technology. Good CI/CD includes: automated test suites, staged rollouts that catch issues before full deployment, easy rollback mechanisms, and cultural practices like not deploying before weekends.",
  },
  {
    id: "q_scenario_microservices_checkout",
    conceptId: "microservices",
    module: 5,
    type: "scenario",
    prompt:
      "The checkout service is down but the rest of the site works. Is this a monolith or microservices architecture?",
    options: [
      "Microservices — in a monolith, if one part is down, everything is down",
      "Monolith — only monoliths can have partial failures",
      "Neither — this indicates a database problem",
      "Both architectures would behave this way",
    ],
    correctIndex: 0,
    explanation:
      "The fact that checkout failed independently while everything else works is a hallmark of microservices. In a monolith, a failure in one component typically brings down the entire application.",
    whySection:
      "This is both an advantage and a characteristic of microservices. Services are independently deployable and can fail independently. The tradeoff is more complex infrastructure to manage these independent services.",
  },
  {
    id: "q_scenario_queue_email",
    conceptId: "queue",
    module: 5,
    type: "scenario",
    prompt:
      "An engineer wants to add a message queue between the order service and the email service. Why not just call the email service directly?",
    options: [
      "Decoupling — if the email service is slow or down, it shouldn't block order processing. The queue absorbs the work.",
      "Message queues are faster than direct API calls",
      "Direct API calls can't send emails",
      "Message queues provide encryption that direct calls don't",
    ],
    correctIndex: 0,
    explanation:
      "A message queue decouples the services. If the email service is down, orders still process. The queue holds the email tasks until the email service is ready. It also handles traffic spikes gracefully.",
    whySection:
      "Without the queue, a slow email service makes order processing slow. A down email service makes orders fail. The queue absorbs the impact — the order completes immediately, and the email gets sent when the email service is available.",
  },
  {
    id: "q_scenario_loadbalancer_spike",
    conceptId: "loadbalancer",
    module: 5,
    type: "scenario",
    prompt:
      "Traffic spikes 10x during a sale. What infrastructure component handles this without rewriting code?",
    options: [
      "Load balancer distributing traffic across multiple server instances, combined with auto-scaling",
      "A bigger database index",
      "Switching from REST to GraphQL",
      "Adding more environment variables",
    ],
    correctIndex: 0,
    explanation:
      "A load balancer distributes traffic across multiple servers. Combined with auto-scaling (spinning up more instances), it handles traffic spikes without any code changes.",
    whySection:
      "This is the fundamental value of load balancers: horizontal scaling. Instead of making one server bigger (vertical scaling), you add more servers and distribute traffic. The load balancer makes this transparent to users.",
  },
];
