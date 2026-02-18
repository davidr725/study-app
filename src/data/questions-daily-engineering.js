// ═══════════════════════════════════════════════════════
// DAILY ENGINEERING
// Concepts: dns, rest, graphql, oauth, cors, jwt, websockets, caching, cacheinvalidation, envvars, pagination, cicd, gitbranching, rollback
// ═══════════════════════════════════════════════════════

export const QUESTIONS_DAILY_ENGINEERING = [
  // ─── DNS ──────────────────────────────────────────────
  {
    id: "q_dns_t2d_1",
    conceptId: "dns",
    module: 1,
    type: "scenario",
    prompt:
      "You type google.com into your browser. Before any connection can be made, your browser needs to find the IP address of the server. What system handles this translation?",
    options: [
      "DNS",
      "CORS",
      "HTTP",
      "TLS",
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
    options: ["DNS","API Gateway","Load Balancer","API Endpoint"],
    correctIndex: 0,
    explanation:
      "This describes DNS — it translates human-friendly names into machine-readable addresses, just like looking up a street address from a name.",
  },
  {
    id: "q_dns_fib_1",
    conceptId: "dns",
    module: 1,
    type: "fill_in_blank",
    prompt:
      "Fill in the blank: ___ translates human-readable domain names like google.com into IP addresses like 142.250.80.46.",
    options: ["DNS","HTTP","TCP","CORS"],
    correctIndex: 0,
    explanation:
      "DNS (Domain Name System) is the internet's phone book — it converts domain names to IP addresses so computers can find each other.",
  },
  {
    id: "q_dns_d2t_1",
    conceptId: "dns",
    module: 1,
    type: "def_to_term",
    prompt:
      "A system that translates human-readable domain names into numeric IP addresses that computers use to locate servers. What is this?",
    options: ["DNS","HTTP","SSL/TLS","CDN"],
    correctIndex: 0,
    explanation:
      "This describes DNS — the Domain Name System that maps names to IP addresses.",
  },
  {
    id: "q_dns_tf_1",
    conceptId: "dns",
    module: 1,
    type: "true_false",
    prompt:
      "True or False: DNS lookups happen every single time you visit a website, even if you just visited it seconds ago.",
    options: [
      "False — DNS results are cached by the browser and OS, so repeat visits skip the lookup",
      "True — every page load requires a fresh DNS query to the root nameservers each time",
      "True — DNS caching is only performed by ISPs, so browsers always re-query locally",
      "False — DNS only resolves once per domain during the browser's entire install lifetime",
    ],
    correctIndex: 0,
    explanation:
      "DNS results are cached at multiple levels (browser, OS, router, ISP) with a TTL (time to live). Repeat visits within that window use the cached IP address.",
  },
  {
    id: "q_dns_scen_1",
    conceptId: "dns",
    module: 1,
    type: "scenario",
    prompt:
      "You type 'example.com' in your browser but get an 'ERR_NAME_NOT_RESOLVED' error. What failed?",
    options: [
      "DNS lookup — the domain name couldn't be translated to an IP address",
      "The web server is running but returned an HTTP 500 internal error",
      "The browser's network stack timed out waiting for a response",
      "The SSL/TLS certificate on the server has expired or is invalid",
    ],
    correctIndex: 0,
    explanation:
      "ERR_NAME_NOT_RESOLVED means DNS failed — the browser couldn't find an IP address for that domain name. This could mean the domain doesn't exist, DNS servers are down, or there's a typo.",
  },
  {
    id: "q_dns_win_1",
    conceptId: "dns",
    module: 1,
    type: "which_is_not",
    prompt:
      "Which of the following is NOT a role of DNS?",
    options: ["Encrypting data sent between client and server","Translating domain names to IP addresses","Caching IP address lookups for faster repeat visits","Directing traffic to the correct server"],
    correctIndex: 0,
    explanation:
      "DNS translates names to addresses and caches results, but it does NOT encrypt data. Encryption is handled by TLS/SSL.",
  },

  // ─── REST API ─────────────────────────────────────────
  {
    id: "q_rest_t2d_1",
    conceptId: "rest",
    module: 3,
    type: "scenario",
    prompt:
      "Your API uses standard HTTP methods at predictable URLs like GET /users and POST /orders, where each request is self-contained with no server-side session. What architectural style is this?",
    options: [
      "REST API",
      "GraphQL",
      "WebSocket",
      "gRPC",
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
    options: ["REST API","GraphQL","Webhook","CORS"],
    correctIndex: 0,
    explanation:
      "This describes a REST API — the most common pattern for web APIs, built on standard HTTP conventions.",
  },
  {
    id: "q_rest_a2t_1",
    conceptId: "rest",
    module: 3,
    type: "analogy_to_term",
    prompt:
      "\"A post office with strict rules: one window per service, you fill out a standard form every time, and they don't remember your last visit.\" What concept is this?",
    options: ["REST API","GraphQL","WebSockets","API Gateway"],
    correctIndex: 0,
    explanation:
      "The post office with standard forms describes REST — stateless, standardized, and resource-based.",
  },
  {
    id: "q_rest_fib_1",
    conceptId: "rest",
    module: 3,
    type: "fill_in_blank",
    prompt:
      "Fill in the blank: REST APIs are ___, meaning each request must contain all the information the server needs — the server doesn't remember previous requests.",
    options: ["stateless","encrypted","cached","asynchronous"],
    correctIndex: 0,
    explanation:
      "Statelessness is a core REST principle. Every request must include all context (auth, params, etc.) because the server treats each request independently.",
  },
  {
    id: "q_rest_tf_1",
    conceptId: "rest",
    module: 3,
    type: "true_false",
    prompt:
      "True or False: In REST, /users/5 typically represents a single user with ID 5, while /users represents all users.",
    options: [
      "True — REST uses predictable URL patterns where collections and individual items have consistent URLs",
      "False — REST has no URL conventions; endpoint paths are completely arbitrary and framework-dependent",
      "False — /users/5 returns 5 users from the collection, not one user identified by the number 5",
      "True — but this convention only applies when using GraphQL layered on top of a REST backend",
    ],
    correctIndex: 0,
    explanation:
      "REST uses predictable URL patterns: /resource for collections, /resource/:id for individual items. This convention makes APIs intuitive and discoverable.",
  },
  {
    id: "q_rest_scen_1",
    conceptId: "rest",
    module: 3,
    type: "scenario",
    prompt:
      "A mobile app needs a user's name, avatar, and their 3 most recent orders. With REST, this typically requires multiple API calls. Why?",
    options: [
      "REST endpoints return fixed resource shapes — you'd call /users/:id and /users/:id/orders separately",
      "REST requires each field to be requested through its own dedicated endpoint with a separate HTTP call",
      "REST uses XML instead of JSON for mobile, which requires extra parsing and additional request overhead",
      "REST servers enforce a one-resource-per-request limit to manage load, requiring sequential fetches",
    ],
    correctIndex: 0,
    explanation:
      "REST organizes data by resource. User profile and orders are different resources, so they're different endpoints. This 'over-fetching' problem is one reason GraphQL was created.",
  },
  {
    id: "q_rest_win_1",
    conceptId: "rest",
    module: 3,
    type: "which_is_not",
    prompt:
      "Which of the following is NOT a principle of REST?",
    options: ["The server maintains session state between requests","Resources are identified by URLs","Standard HTTP methods are used (GET, POST, PUT, DELETE)","Each request is self-contained (stateless)"],
    correctIndex: 0,
    explanation:
      "REST is stateless — the server does NOT maintain session state between requests. Each request must contain all the context the server needs.",
  },

  // ─── GraphQL ──────────────────────────────────────────
  {
    id: "q_graphql_t2d_1",
    conceptId: "graphql",
    module: 3,
    type: "scenario",
    prompt:
      "Your mobile app makes 6 separate API calls to load one screen because each endpoint returns fixed data shapes. An engineer suggests a query language that lets the client specify exactly which fields it needs in a single request. What technology are they recommending?",
    options: [
      "GraphQL",
      "REST API",
      "WebSockets",
      "gRPC",
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
      "\"Instead of getting a full catalog, you hand them a shopping list and they return exactly those items — nothing more, nothing less.\" What concept is this?",
    options: ["GraphQL","REST API","API Gateway","Webhook"],
    correctIndex: 0,
    explanation:
      "This shopping list analogy describes GraphQL — you specify exactly what data you need.",
  },
  {
    id: "q_graphql_d2t_1",
    conceptId: "graphql",
    module: 3,
    type: "def_to_term",
    prompt:
      "A query language for APIs that lets clients request exactly the fields they need in a single request, avoiding over-fetching. What is this?",
    options: ["GraphQL","REST","SQL","gRPC"],
    correctIndex: 0,
    explanation:
      "This describes GraphQL — a query language where the client controls what data comes back.",
  },
  {
    id: "q_graphql_fib_1",
    conceptId: "graphql",
    module: 3,
    type: "fill_in_blank",
    prompt:
      "Fill in the blank: GraphQL solves the ___ problem, where REST endpoints return more data than the client actually needs.",
    options: ["over-fetching","under-caching","rate-limiting","authentication"],
    correctIndex: 0,
    explanation:
      "Over-fetching is when an API returns more data than needed. GraphQL solves this by letting the client specify exactly which fields to return.",
  },
  {
    id: "q_graphql_tf_1",
    conceptId: "graphql",
    module: 3,
    type: "true_false",
    prompt:
      "True or False: GraphQL always uses a single endpoint (usually /graphql) for all queries.",
    options: [
      "True — unlike REST which has many endpoints, GraphQL routes all requests through one URL and uses the query body to determine what data to return",
      "False — GraphQL requires a separate endpoint for each resource type, following the same pattern as REST APIs",
      "False — GraphQL uses its own binary protocol instead of HTTP, so it doesn't have traditional endpoints",
      "True — but only for read queries; mutations and subscriptions each require their own dedicated endpoints",
    ],
    correctIndex: 0,
    explanation:
      "GraphQL typically uses a single endpoint (e.g., POST /graphql). The query in the request body determines what data is fetched or mutated — no need for multiple endpoints.",
  },
  {
    id: "q_graphql_scen_1",
    conceptId: "graphql",
    module: 3,
    type: "scenario",
    prompt:
      "Your mobile app makes 6 API calls to load one screen. An engineer suggests switching to GraphQL. Why?",
    options: [
      "GraphQL lets the client request all needed data in a single query, eliminating multiple round trips",
      "GraphQL uses a binary protocol instead of JSON, making each individual request significantly faster",
      "GraphQL automatically caches all responses at the CDN layer, reducing the need for multiple calls",
      "GraphQL batches requests internally on the server, so 6 calls merge into one behind the scenes",
    ],
    correctIndex: 0,
    explanation:
      "GraphQL's main advantage here is reducing 6 API calls to 1. The client specifies exactly what data it needs across all resources in a single request.",
    whySection:
      "On mobile, each network round trip is expensive (latency, battery, data usage). GraphQL's ability to fetch exactly what you need in one request is a significant win. The tradeoff: more complex server implementation and harder caching.",
  },
  {
    id: "q_graphql_win_1",
    conceptId: "graphql",
    module: 3,
    type: "which_is_not",
    prompt:
      "Which of the following is NOT an advantage of GraphQL over REST?",
    options: [
      "Simpler caching — GraphQL responses are easier to cache than REST",
      "No over-fetching — clients get exactly the fields they request",
      "Single endpoint — all queries go through one URL",
      "Fewer round trips — multiple resources can be fetched in one request",
    ],
    correctIndex: 0,
    explanation:
      "Caching is actually harder with GraphQL because REST can use HTTP caching (URLs as cache keys), while GraphQL sends all queries to one endpoint via POST, making traditional caching difficult.",
  },

  // ─── OAuth / SSO ──────────────────────────────────────
  {
    id: "q_oauth_t2d_1",
    conceptId: "oauth",
    module: 3,
    type: "scenario",
    prompt:
      "When you click 'Sign in with Google' on a third-party site, a protocol lets Google verify your identity and grant that site limited access to your profile — without sharing your password. What protocol is this?",
    options: [
      "OAuth / SSO",
      "JWT Auth",
      "API Key",
      "SAML",
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
      "\"Instead of giving your house key to the dog walker, you give them a special pass that only opens the back door, only on weekdays, and you can revoke it anytime.\" What concept is this?",
    options: ["OAuth / SSO","API Key / Auth Token","CORS","Middleware"],
    correctIndex: 0,
    explanation:
      "This limited-access pass analogy describes OAuth — granting specific, revocable permissions without sharing full credentials.",
  },
  {
    id: "q_oauth_d2t_1",
    conceptId: "oauth",
    module: 3,
    type: "def_to_term",
    prompt:
      "A protocol that lets users grant one application limited access to their data on another application without sharing their password. What is this?",
    options: ["OAuth","API Key","CORS","JWT"],
    correctIndex: 0,
    explanation:
      "This describes OAuth — delegated authorization. The user grants limited, revocable access to their data on one service to another.",
  },
  {
    id: "q_oauth_fib_1",
    conceptId: "oauth",
    module: 3,
    type: "fill_in_blank",
    prompt:
      "Fill in the blank: When you click \"Sign in with Google\" on a third-party website, you're using ___.",
    options: ["OAuth","CORS","DNS","WebSockets"],
    correctIndex: 0,
    explanation:
      "'Sign in with Google' is OAuth in action — Google authenticates you and grants the third-party site limited access to your profile data, without the site ever seeing your Google password.",
  },
  {
    id: "q_oauth_tf_1",
    conceptId: "oauth",
    module: 3,
    type: "true_false",
    prompt:
      "True or False: With OAuth, the third-party app receives and stores your password from the identity provider (Google, GitHub, etc.).",
    options: [
      "False — OAuth grants a limited-access token instead; the third-party app never sees your password",
      "True — OAuth encrypts and securely transmits your password to each authorized third-party app",
      "True — OAuth stores an encrypted copy of your password that only trusted services can decrypt",
      "False — OAuth doesn't handle passwords at all; it only manages API rate limits between services",
    ],
    correctIndex: 0,
    explanation:
      "OAuth's core innovation is that you authenticate directly with the identity provider (Google, GitHub), and the third-party app only receives a limited-permission token — never your password.",
  },
  {
    id: "q_oauth_scen_1",
    conceptId: "oauth",
    module: 3,
    type: "scenario",
    prompt:
      "A user revokes your app's access from their Google account settings. What happens to your app's stored OAuth token?",
    options: [
      "The token becomes invalid — your app can no longer access the user's data and must re-request authorization",
      "Nothing changes — OAuth tokens are permanent once issued and cannot be revoked by the end user",
      "Your app automatically receives a new token with the same permissions through the refresh token flow",
      "The token still works for read-only access but write permissions are downgraded to read-only mode",
    ],
    correctIndex: 0,
    explanation:
      "When a user revokes access, the OAuth token is invalidated immediately. Your app's API calls using that token will fail, and the user would need to re-authorize your app.",
  },
  {
    id: "q_oauth_win_1",
    conceptId: "oauth",
    module: 3,
    type: "which_is_not",
    prompt:
      "Which of the following is NOT a feature of OAuth?",
    options: ["Encrypting data sent between client and server","Granting limited, scoped access to user data","Allowing users to revoke access at any time","Authenticating without sharing passwords with third parties"],
    correctIndex: 0,
    explanation:
      "OAuth handles authorization (who can access what), not encryption. Encryption is handled by TLS/HTTPS. OAuth's features are: limited access, revocability, and no password sharing.",
  },

  // ─── CORS ─────────────────────────────────────────────
  {
    id: "q_cors_t2d_1",
    conceptId: "cors",
    module: 3,
    type: "scenario",
    prompt:
      "Your React app at localhost:3000 tries to fetch data from api.example.com, but the browser blocks the request because the server hasn't authorized that origin. What security mechanism caused the block?",
    options: [
      "CORS",
      "OAuth",
      "SSL/TLS",
      "Firewall",
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
    options: ["CORS","OAuth","API Gateway","Firewall"],
    correctIndex: 0,
    explanation:
      "This describes CORS — the browser enforcing that servers must explicitly allow cross-origin requests.",
  },
  {
    id: "q_cors_a2t_1",
    conceptId: "cors",
    module: 3,
    type: "analogy_to_term",
    prompt:
      "\"Your apartment building only accepts packages from pre-approved senders. A new delivery service shows up and the front desk rejects them until management adds them to the list.\" What concept is this?",
    options: ["CORS","Rate Limiting","API Gateway","OAuth"],
    correctIndex: 0,
    explanation:
      "This describes CORS — the browser (front desk) blocks requests from unapproved origins until the server (management) adds them to the allowed list.",
  },
  {
    id: "q_cors_fib_1",
    conceptId: "cors",
    module: 3,
    type: "fill_in_blank",
    prompt:
      "Fill in the blank: CORS errors are enforced by the ___, not the server. The server sets the rules, but the ___ enforces them.",
    options: ["browser","DNS server","load balancer","firewall"],
    correctIndex: 0,
    explanation:
      "CORS is a browser-side security mechanism. The server sets Access-Control-Allow-Origin headers, but it's the browser that reads these headers and blocks or allows the request.",
  },
  {
    id: "q_cors_tf_1",
    conceptId: "cors",
    module: 3,
    type: "true_false",
    prompt:
      "True or False: CORS only applies to requests made from web browsers; server-to-server requests are not affected.",
    options: [
      "True — CORS is a browser security policy; backend services calling other APIs directly are not subject to CORS",
      "False — CORS applies to all HTTP requests regardless of whether they come from browsers, servers, or scripts",
      "False — CORS also blocks requests from native mobile apps and server-side scripts, not just browsers",
      "True — but only for GET requests; POST, PUT, and DELETE bypass CORS restrictions entirely",
    ],
    correctIndex: 0,
    explanation:
      "CORS is purely a browser policy. Server-to-server communication, cURL, Postman — none of these are affected by CORS. That's why an API works in Postman but gets CORS errors in the browser.",
  },
  {
    id: "q_cors_scen_1",
    conceptId: "cors",
    module: 3,
    type: "scenario",
    prompt:
      "Frontend gets a CORS error when calling your API from localhost. Is this a bug?",
    options: [
      "No — CORS is the browser enforcing that your server hasn't allowed requests from that origin; fix it server-side",
      "Yes — CORS errors indicate a misconfigured fetch call in the frontend that needs different request headers",
      "Yes — localhost origins should be automatically allowed by all servers; this suggests a browser bug",
      "No — CORS errors only appear in development mode and will resolve automatically once deployed to production",
    ],
    correctIndex: 0,
    explanation:
      "CORS is a security feature, not a bug. The browser blocks the request because the server hasn't added localhost to its allowed origins. The fix is server-side: update the allowed origins list.",
    whySection:
      "CORS protects users by preventing malicious sites from making requests to APIs on their behalf. In development, you need to explicitly allow localhost. In production, you allow your actual domain.",
  },
  {
    id: "q_cors_scen_2",
    conceptId: "cors",
    module: 3,
    type: "scenario",
    prompt:
      "Your API works fine when called from Postman but gets CORS errors from your React app. Why?",
    options: [
      "Postman is not a browser, so CORS doesn't apply — browsers enforce CORS; tools like Postman and cURL don't",
      "Postman automatically injects the required Access-Control-Allow-Origin header into every outgoing request",
      "React's fetch implementation wraps requests in a proxy layer that triggers additional CORS preflight checks",
      "Postman connects over a raw TCP socket rather than HTTP, bypassing the CORS handshake entirely",
    ],
    correctIndex: 0,
    explanation:
      "CORS is enforced by browsers only. Postman makes direct HTTP requests without CORS restrictions. This is a very common source of confusion for developers.",
  },

  // ─── JWT (JSON Web Token) ─────────────────────────────
  {
    id: "q_jwt_t2d_1",
    conceptId: "jwt",
    module: 3,
    type: "scenario",
    prompt:
      "Your authentication system needs to verify users on every request without hitting the database. You choose a token format that carries the user's ID, role, and expiration, plus a cryptographic signature the server can check locally. What token format is this?",
    options: [
      "JWT",
      "Session ID",
      "API Key",
      "OAuth Token",
    ],
    correctIndex: 0,
    explanation:
      "A JWT is like a tamper-proof wristband at a concert — it contains your info (name, seat, VIP status) and a holographic seal. Staff can verify it by checking the seal without calling the box office.",
  },
  {
    id: "q_jwt_d2t_1",
    conceptId: "jwt",
    module: 3,
    type: "def_to_term",
    prompt:
      "A token format containing a header, payload of claims (user ID, roles, expiration), and a cryptographic signature that can be verified without a database lookup. What is this?",
    options: ["JWT","API Key","Session cookie","OAuth token"],
    correctIndex: 0,
    explanation:
      "This describes a JWT (JSON Web Token) — a self-contained token carrying its own verification.",
  },
  {
    id: "q_jwt_a2t_1",
    conceptId: "jwt",
    module: 3,
    type: "analogy_to_term",
    prompt:
      "\"A tamper-proof wristband at a concert — it contains your ticket info and a holographic seal. Any staff member can verify it by checking the seal without calling the box office.\" What concept is this?",
    options: ["JWT","API Key","OAuth","CORS"],
    correctIndex: 0,
    explanation:
      "This concert wristband analogy describes JWTs — self-contained tokens that can be verified without contacting a central authority.",
  },
  {
    id: "q_jwt_fib_1",
    conceptId: "jwt",
    module: 3,
    type: "fill_in_blank",
    prompt:
      "Fill in the blank: A JWT has three parts separated by dots: header, ___, and signature.",
    options: ["payload","cookie","token","key"],
    correctIndex: 0,
    explanation:
      "A JWT structure is: header.payload.signature. The header describes the algorithm, the payload carries claims (user data), and the signature verifies integrity.",
  },
  {
    id: "q_jwt_tf_1",
    conceptId: "jwt",
    module: 3,
    type: "true_false",
    prompt:
      "True or False: The payload of a JWT is encrypted, so nobody can read its contents.",
    options: [
      "False — JWT payloads are only Base64-encoded, not encrypted; anyone can decode and read the claims inside them",
      "True — JWTs use AES-256 encryption on the payload, so only the server with the key can read it",
      "True — only the server holding the signing key can decode and read the contents of the JWT payload",
      "False — JWT payloads are hashed with SHA-256, which makes the content unreadable but not technically encrypted",
    ],
    correctIndex: 0,
    explanation:
      "JWT payloads are Base64-encoded (easily decoded), NOT encrypted. Never put sensitive data like passwords in a JWT. The signature prevents tampering but doesn't hide the content.",
  },
  {
    id: "q_jwt_scen_1",
    conceptId: "jwt",
    module: 3,
    type: "scenario",
    prompt:
      "A user's JWT expires while they're using your app. What should happen?",
    options: [
      "The app should use a refresh token to get a new JWT without requiring the user to log in again",
      "The user must log in again immediately — there is no mechanism to renew an expired JWT automatically",
      "The app should decode the JWT and update its expiration field to extend the session client-side",
      "Nothing changes — expired JWTs continue to work normally until the server restarts and clears them",
    ],
    correctIndex: 0,
    explanation:
      "Refresh tokens solve this. Short-lived JWTs (15 min) limit damage if stolen. When they expire, a long-lived refresh token silently gets a new JWT. Users only re-login when the refresh token expires.",
  },
  {
    id: "q_jwt_win_1",
    conceptId: "jwt",
    module: 3,
    type: "which_is_not",
    prompt:
      "Which of the following is NOT stored in a typical JWT payload?",
    options: ["The user's password","The user's ID","Token expiration time","The user's roles/permissions"],
    correctIndex: 0,
    explanation:
      "Never store passwords in JWTs — the payload is easily readable (Base64-encoded, not encrypted). JWTs typically carry user ID, roles, and expiration.",
  },

  // ─── WebSockets ───────────────────────────────────────
  {
    id: "q_websockets_t2d_1",
    conceptId: "websockets",
    module: 3,
    type: "scenario",
    prompt:
      "You are building a multiplayer game where the server needs to push state updates to all players instantly, and players can send moves at any time without waiting for a response. What protocol provides this persistent, two-way communication?",
    options: [
      "WebSockets",
      "REST API",
      "Webhooks",
      "HTTP Polling",
    ],
    correctIndex: 0,
    explanation:
      "WebSockets are like a phone call — once connected, either person can talk at any time without hanging up and calling back. Unlike HTTP's letter-by-letter approach.",
  },
  {
    id: "q_websockets_d2t_1",
    conceptId: "websockets",
    module: 3,
    type: "def_to_term",
    prompt:
      "A protocol providing persistent, two-way communication between client and server where either side can send data at any time. What is this?",
    options: ["WebSockets","HTTP","Polling","Webhook"],
    correctIndex: 0,
    explanation:
      "This describes WebSockets — a persistent, bidirectional communication channel.",
  },
  {
    id: "q_websockets_a2t_1",
    conceptId: "websockets",
    module: 3,
    type: "analogy_to_term",
    prompt:
      "\"A phone call vs sending letters. HTTP is sending a letter and waiting for a reply. This is picking up the phone — once connected, either person can talk at any time.\" What concept is this?",
    options: ["WebSockets","Webhook","Polling","REST API"],
    correctIndex: 0,
    explanation:
      "The phone call analogy describes WebSockets — a persistent, real-time, two-way connection.",
  },
  {
    id: "q_websockets_fib_1",
    conceptId: "websockets",
    module: 3,
    type: "fill_in_blank",
    prompt:
      "Fill in the blank: ___ starts as an HTTP connection that gets 'upgraded' to a persistent two-way channel.",
    options: ["WebSocket","REST","GraphQL","OAuth"],
    correctIndex: 0,
    explanation:
      "WebSocket connections begin with an HTTP handshake that includes an 'Upgrade' header. Once the server agrees, the connection switches from HTTP to the WebSocket protocol.",
  },
  {
    id: "q_websockets_tf_1",
    conceptId: "websockets",
    module: 3,
    type: "true_false",
    prompt:
      "True or False: WebSockets should be used for all API communication because they're faster than HTTP.",
    options: [
      "False — WebSockets are ideal for real-time features like chat, but overkill for simple request-response APIs where HTTP is simpler",
      "True — WebSockets have lower latency and higher throughput, making them superior to HTTP for every use case",
      "True — WebSockets are the modern successor to REST and should be used for all new API development",
      "False — WebSockets are actually slower than HTTP because maintaining a persistent connection adds significant overhead",
    ],
    correctIndex: 0,
    explanation:
      "WebSockets excel at real-time, bidirectional communication (chat, gaming, live feeds). But for standard CRUD operations, HTTP/REST is simpler, more cacheable, and easier to debug.",
  },
  {
    id: "q_websockets_scen_1",
    conceptId: "websockets",
    module: 3,
    type: "scenario",
    prompt:
      "You're building a live chat feature. Should you use HTTP polling, webhooks, or WebSockets?",
    options: [
      "WebSockets — they provide a persistent, bidirectional connection ideal for real-time chat",
      "HTTP polling — send a request every second to check if new messages have arrived on the server",
      "Webhooks — configure the server to POST each new message to a callback URL on the client",
      "REST API — have the client make periodic GET requests to a /messages endpoint for updates",
    ],
    correctIndex: 0,
    explanation:
      "Chat needs instant, two-way communication. WebSockets keep a persistent connection open so messages flow both ways in real-time. Polling would add latency and waste bandwidth.",
  },
  {
    id: "q_websockets_win_1",
    conceptId: "websockets",
    module: 3,
    type: "which_is_not",
    prompt:
      "Which of the following is NOT a good use case for WebSockets?",
    options: ["Fetching a user's profile data on page load","Real-time multiplayer game state","Live stock price ticker","Collaborative document editing (like Google Docs)"],
    correctIndex: 0,
    explanation:
      "Fetching profile data is a simple, one-time request — perfect for regular HTTP. WebSockets are for scenarios needing persistent, real-time, bidirectional communication.",
  },

  // ─── Caching ──────────────────────────────────────────
  {
    id: "q_caching_t2d_1",
    conceptId: "caching",
    module: 4,
    type: "scenario",
    prompt:
      "Your homepage runs a database query that takes 2 seconds, but the result is the same for every user and rarely changes. Your team decides to store the result in Redis so subsequent requests return instantly. What technique is this?",
    options: [
      "Caching",
      "Indexing",
      "Pagination",
      "Load Balancing",
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
      "\"Keeping a photocopy of your most-requested document on your desk instead of walking to the filing cabinet every time.\" What concept is this?",
    options: ["Caching","Cache Invalidation","Database Index","State Management"],
    correctIndex: 0,
    explanation:
      "This photocopy analogy describes Caching — storing data in a faster location for quick access.",
  },
  {
    id: "q_caching_d2t_1",
    conceptId: "caching",
    module: 4,
    type: "def_to_term",
    prompt:
      "Storing frequently accessed data in a faster location (browser, CDN, memory) to avoid repeated expensive lookups. What is this?",
    options: ["Caching","Indexing","Pagination","Load Balancing"],
    correctIndex: 0,
    explanation:
      "This describes Caching — keeping data close to where it's needed for faster access.",
  },
  {
    id: "q_caching_fib_1",
    conceptId: "caching",
    module: 4,
    type: "fill_in_blank",
    prompt:
      "Fill in the blank: A ___ hit means the data was found in the cache. A ___ miss means the data wasn't cached and had to be fetched from the source.",
    options: ["cache","DNS","index","token"],
    correctIndex: 0,
    explanation:
      "A cache hit = data found in cache (fast). A cache miss = data not in cache, must fetch from origin (slow). High hit rates mean the cache is effective.",
  },
  {
    id: "q_caching_tf_1",
    conceptId: "caching",
    module: 4,
    type: "true_false",
    prompt:
      "True or False: Caching always improves performance with no downsides.",
    options: [
      "False — caching can serve stale data, uses extra memory, and adds the complexity of cache invalidation",
      "True — caching only improves speed and has no tradeoffs as long as you have sufficient server memory",
      "True — modern caching systems like Redis automatically handle staleness, so there are no downsides",
      "False — caching actually makes things slower because checking the cache adds an extra lookup step every time",
    ],
    correctIndex: 0,
    explanation:
      "Caching has tradeoffs: stale data, memory usage, and the complexity of knowing when to refresh (cache invalidation). It's a tradeoff between speed and freshness.",
  },
  {
    id: "q_caching_win_1",
    conceptId: "caching",
    module: 4,
    type: "which_is_not",
    prompt:
      "Which of the following is NOT a layer where caching typically happens?",
    options: ["The database schema definition","The browser","A CDN","The application server (Redis, Memcached)"],
    correctIndex: 0,
    explanation:
      "Caching happens at the browser, CDN, application server, and database query level — not in the schema definition. Each layer reduces load on the layer behind it.",
  },
  {
    id: "q_caching_scen_1",
    conceptId: "caching",
    module: 4,
    type: "scenario",
    prompt:
      "Your homepage makes a database query that takes 2 seconds. It's the same data for every user and only changes once a day. What's the fix?",
    options: [
      "Cache the query result — serve it from memory for 24 hours, then refresh from the database",
      "Add database indexes on the queried columns to reduce the 2-second query time directly",
      "Switch from SQL to a NoSQL database that is optimized for fast reads on large datasets",
      "Use WebSockets to stream the homepage data incrementally as rows are fetched from the DB",
    ],
    correctIndex: 0,
    explanation:
      "If the data rarely changes and is the same for everyone, caching is the perfect solution. Store the result in memory (Redis) or at the CDN level and refresh once a day.",
  },

  // ─── Cache Invalidation ───────────────────────────────
  {
    id: "q_cacheinvalidation_t2d_1",
    conceptId: "cacheinvalidation",
    module: 4,
    type: "scenario",
    prompt:
      "Users are seeing yesterday's product prices on your site even though the database was updated this morning. The old prices are stuck in your CDN and Redis layers. What problem does this illustrate?",
    options: [
      "Cache Invalidation",
      "Rate Limiting",
      "Load Balancing",
      "Database Indexing",
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
      "\"The photocopy on your desk is from last Tuesday. The original was updated yesterday. How do you know your copy is wrong?\" What concept is this?",
    options: ["Cache Invalidation","Caching","State Management","Sync vs Async"],
    correctIndex: 0,
    explanation:
      "This stale-photocopy problem describes Cache Invalidation — one of the hardest problems in computing.",
  },
  {
    id: "q_cacheinvalidation_d2t_1",
    conceptId: "cacheinvalidation",
    module: 4,
    type: "def_to_term",
    prompt:
      "Deciding when cached data is outdated and needs to be refreshed, often described as one of the two hardest problems in computer science. What is this?",
    options: ["Cache Invalidation","Caching","Database Indexing","Rate Limiting"],
    correctIndex: 0,
    explanation:
      "This describes Cache Invalidation — famously one of the two hardest problems in CS (along with naming things and off-by-one errors).",
  },
  {
    id: "q_cacheinvalidation_fib_1",
    conceptId: "cacheinvalidation",
    module: 4,
    type: "fill_in_blank",
    prompt:
      "Fill in the blank: A cache ___ (Time to Live) defines how long cached data is considered fresh before it must be refreshed.",
    options: ["TTL","API","DNS","JWT"],
    correctIndex: 0,
    explanation:
      "TTL (Time to Live) is a common cache invalidation strategy — the cached data automatically expires after a set duration.",
  },
  {
    id: "q_cacheinvalidation_tf_1",
    conceptId: "cacheinvalidation",
    module: 4,
    type: "true_false",
    prompt:
      "True or False: \"There are only two hard things in Computer Science: cache invalidation and naming things.\"",
    options: [
      "True — this is a famous quote by Phil Karlton highlighting how difficult it is to know when cached data is stale",
      "False — cache invalidation is straightforward with modern tools like Redis, so this quote is outdated",
      "False — this quote is actually about database schema design, not caching or naming conventions",
      "True — but this difficulty only applies to distributed systems; single-server caching is trivial to invalidate",
    ],
    correctIndex: 0,
    explanation:
      "This famous quote captures a real truth: knowing when your cached data is outdated is genuinely one of the hardest problems in software engineering.",
  },
  {
    id: "q_cacheinvalidation_scen_1",
    conceptId: "cacheinvalidation",
    module: 4,
    type: "scenario",
    prompt:
      "Users see stale prices on the product page even after a price update. What's likely happening?",
    options: [
      "Caching — the old price is cached somewhere (CDN, browser, app cache) and hasn't been invalidated yet",
      "The database transaction hasn't fully committed yet, causing reads to return the previous row version",
      "The frontend has a stale build deployed that still references the old price from its bundled data",
      "DNS is resolving to an old server replica that hasn't received the latest database migration",
    ],
    correctIndex: 0,
    explanation:
      "This is the classic cache invalidation problem. The price was updated at the source, but a cached copy of the old price is still being served. The cache needs to be invalidated.",
    whySection:
      "Caches exist at multiple layers: browser, CDN, application server, database query cache. The stale data could be stuck at any of these layers. This is why 'cache invalidation' is considered one of the two hardest problems in computer science.",
  },
  {
    id: "q_cacheinvalidation_scen_2",
    conceptId: "cacheinvalidation",
    module: 4,
    type: "scenario",
    prompt:
      "Your team debates between TTL-based and event-based cache invalidation. When is each approach better?",
    options: [
      "TTL for data that changes predictably (weather, every 5 min); event-based for unpredictable changes (user profile updates)",
      "TTL is always better because it's simpler to implement and requires no additional infrastructure or event system",
      "Event-based is always better because it guarantees freshness and eliminates any window of stale data entirely",
      "Neither approach is reliable — caches should use versioned keys instead, so old entries are never read again",
    ],
    correctIndex: 0,
    explanation:
      "TTL works well for data that changes on a schedule. Event-based invalidation is better for data that changes unpredictably — you purge the cache the moment the data changes.",
  },

  // ─── Environment Variables ────────────────────────────
  {
    id: "q_envvars_t2d_1",
    conceptId: "envvars",
    module: 4,
    type: "scenario",
    prompt:
      "Your app connects to a test database in development but a production database in production, and the switch happens without changing any code. The database URL is stored outside the codebase and read at runtime. What mechanism makes this possible?",
    options: [
      "Environment Variables",
      "Feature Flags",
      "API Versioning",
      "DNS Routing",
    ],
    correctIndex: 0,
    explanation:
      "Environment Variables are config values that live outside the code — like forwarding instructions that change depending on which building you're in.",
  },
  {
    id: "q_envvars_d2t_1",
    conceptId: "envvars",
    module: 4,
    type: "def_to_term",
    prompt:
      "Configuration values like API keys and database URLs that are stored outside the code and differ between development, staging, and production. What are these?",
    options: ["Environment Variables","HTTP Headers","Query Parameters","Cookies"],
    correctIndex: 0,
    explanation:
      "These are Environment Variables — external config that changes per environment without modifying code.",
  },
  {
    id: "q_envvars_a2t_1",
    conceptId: "envvars",
    module: 4,
    type: "analogy_to_term",
    prompt:
      "\"Forwarding instructions taped inside the mail room: 'if Building A, use locker 5; if Building B, use locker 12.' Same letters, different destinations.\" What concept is this?",
    options: ["Environment Variables","Caching","DNS","Middleware"],
    correctIndex: 0,
    explanation:
      "This analogy describes Environment Variables — the same code behaves differently based on which environment's config it reads.",
  },
  {
    id: "q_envvars_fib_1",
    conceptId: "envvars",
    module: 4,
    type: "fill_in_blank",
    prompt:
      "Fill in the blank: In most frameworks, environment variables are stored in a ___ file that should be added to .gitignore to avoid committing secrets.",
    options: [".env","config.json","secrets.yml","vars.xml"],
    correctIndex: 0,
    explanation:
      ".env files are the standard way to define environment variables locally. They're excluded from version control via .gitignore to protect secrets like API keys and database passwords.",
  },
  {
    id: "q_envvars_tf_1",
    conceptId: "envvars",
    module: 4,
    type: "true_false",
    prompt:
      "True or False: It's safe to commit .env files to your Git repository as long as the repo is private.",
    options: [
      "False — .env files contain secrets and should never be committed; repos can be made public, and secrets persist in history",
      "True — private repos have access controls that make them sufficiently secure for storing secrets in .env files",
      "True — Git automatically encrypts file contents at rest, so committed .env files are protected from exposure",
      "False — .env files use a non-standard format that Git cannot track properly, causing merge conflicts and corruption",
    ],
    correctIndex: 0,
    explanation:
      "Never commit .env files. Private repos can be made public, access can be compromised, and secrets in git history are nearly impossible to fully remove.",
  },
  {
    id: "q_envvars_scen_1",
    conceptId: "envvars",
    module: 4,
    type: "scenario",
    prompt:
      "QA reports that a feature works in staging but not production. What's the first thing to check?",
    options: [
      "Environment variables — different API keys, database URLs, or feature flags between the two environments",
      "The production server's CPU is under higher load, causing timeouts that don't occur in staging",
      "DNS configuration differences are routing production traffic to an older version of the server",
      "The production database has stricter permissions that reject queries the staging database allows",
    ],
    correctIndex: 0,
    explanation:
      "The most common cause of staging/prod discrepancies is different configuration: API keys, database URLs, feature flags. Always check env vars first.",
    whySection:
      "Environment variables are the most likely culprit because they're the thing most commonly different between environments. A feature that works in staging but not production almost always comes down to config.",
  },
  {
    id: "q_envvars_win_1",
    conceptId: "envvars",
    module: 4,
    type: "which_is_not",
    prompt:
      "Which of the following should NOT typically be stored in environment variables?",
    options: ["Application business logic","Database connection strings","API keys","Feature flags"],
    correctIndex: 0,
    explanation:
      "Business logic belongs in code, not environment variables. Env vars are for configuration that changes between environments — secrets, URLs, and feature flags.",
  },

  // ─── Pagination ───────────────────────────────────────
  {
    id: "q_pagination_t2d_1",
    conceptId: "pagination",
    module: 4,
    type: "scenario",
    prompt:
      "Your API has 50,000 products, but the mobile app only shows 20 at a time with a 'Load More' button. The API returns items in chunks using ?page=1&limit=20. What technique is this?",
    options: [
      "Pagination",
      "Caching",
      "Indexing",
      "Batching",
    ],
    correctIndex: 0,
    explanation:
      "Pagination loads data in pages — like Google showing 10 search results at a time instead of dumping 2 million results on one page.",
  },
  {
    id: "q_pagination_d2t_1",
    conceptId: "pagination",
    module: 4,
    type: "def_to_term",
    prompt:
      "A technique that splits large result sets into smaller chunks, typically using page numbers or cursors. What is this?",
    options: ["Pagination","Caching","Indexing","Batching"],
    correctIndex: 0,
    explanation:
      "This describes Pagination — breaking large datasets into manageable pages.",
  },
  {
    id: "q_pagination_a2t_1",
    conceptId: "pagination",
    module: 4,
    type: "analogy_to_term",
    prompt:
      "\"Google search showing 10 results at a time with Next and page numbers, instead of dumping all 2 million results on one page.\" What concept is this?",
    options: ["Pagination","Caching","Load Balancing","Indexing"],
    correctIndex: 0,
    explanation:
      "This describes Pagination — showing data in manageable chunks rather than all at once.",
  },
  {
    id: "q_pagination_fib_1",
    conceptId: "pagination",
    module: 4,
    type: "fill_in_blank",
    prompt:
      "Fill in the blank: In offset-based pagination, ?page=3&limit=20 means skip the first ___ items and return the next 20.",
    options: ["40","20","60","3"],
    correctIndex: 0,
    explanation:
      "Page 3 with a limit of 20 means skip pages 1 and 2 (40 items) and return items 41-60. The offset is (page - 1) × limit = 2 × 20 = 40.",
  },
  {
    id: "q_pagination_tf_1",
    conceptId: "pagination",
    module: 4,
    type: "true_false",
    prompt:
      "True or False: Cursor-based pagination is generally more reliable than offset-based for data that changes frequently.",
    options: [
      "True — cursors reference a specific item, so insertions and deletions don't cause skipped or duplicate results",
      "False — offset-based pagination is always more reliable because it uses simple numeric math for page boundaries",
      "True — but cursor-based pagination can only be used with NoSQL databases, not relational databases like Postgres",
      "False — both approaches handle frequently changing data equally well since they both re-query on each request",
    ],
    correctIndex: 0,
    explanation:
      "Offset-based pagination breaks when data changes — if a new item is inserted, offset shifts and you might see duplicates or skip items. Cursors point to a specific item, avoiding this.",
  },
  {
    id: "q_pagination_scen_1",
    conceptId: "pagination",
    module: 4,
    type: "scenario",
    prompt:
      "Your API returns a list of 50,000 products. The mobile app freezes when loading them. What's the fix?",
    options: [
      "Add pagination — return 20-50 products per page and let the app load more as the user scrolls",
      "Compress the JSON response with gzip to reduce the payload size sent over the network",
      "Add a database index on the product table to speed up the query that fetches all rows",
      "Switch to WebSockets so products stream to the client incrementally instead of all at once",
    ],
    correctIndex: 0,
    explanation:
      "50,000 records in one response is too much for any client. Pagination returns small chunks (20-50 items) that the app can render quickly, loading more as needed.",
  },
  {
    id: "q_pagination_win_1",
    conceptId: "pagination",
    module: 4,
    type: "which_is_not",
    prompt:
      "Which of the following is NOT a common pagination approach?",
    options: ["Cache-based pagination","Offset-based pagination (?page=2&limit=20)","Cursor-based pagination (using a pointer to the last item)","Keyset-based pagination (using the last item's sorted value)"],
    correctIndex: 0,
    explanation:
      "Cache-based pagination isn't a thing. The three common approaches are: offset-based (page numbers), cursor-based (pointer tokens), and keyset-based (sorted value boundaries).",
  },

  // ─── CI/CD ────────────────────────────────────────────
  {
    id: "q_cicd_t2d_1",
    conceptId: "cicd",
    module: 5,
    type: "scenario",
    prompt:
      "Every time a developer merges code to main, an automated pipeline runs the test suite, builds the application, and deploys it to production — no manual steps required. What practice is this?",
    options: [
      "CI/CD",
      "Git Hooks",
      "Code Review",
      "Monitoring",
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
      "\"A conveyor belt from the workshop to the storefront — every product gets automatically inspected, packaged, and placed on the shelf.\" What concept is this?",
    options: ["CI/CD","Message Queue","Load Balancer","Middleware"],
    correctIndex: 0,
    explanation:
      "The automated conveyor belt analogy describes CI/CD — continuous testing and deployment.",
  },
  {
    id: "q_cicd_d2t_1",
    conceptId: "cicd",
    module: 5,
    type: "def_to_term",
    prompt:
      "An automated pipeline that runs tests when code is merged and deploys it to production without manual intervention. What is this?",
    options: ["CI/CD","Load Balancer","API Gateway","Message Queue"],
    correctIndex: 0,
    explanation:
      "This describes CI/CD — automating the build, test, and deploy process.",
  },
  {
    id: "q_cicd_fib_1",
    conceptId: "cicd",
    module: 5,
    type: "fill_in_blank",
    prompt:
      "Fill in the blank: ___ Integration automatically tests code when it's merged, while ___ Deployment automatically pushes it to production.",
    options: ["Continuous, Continuous","Manual, Automatic","Automated, Scheduled","Unit, Integration"],
    correctIndex: 0,
    explanation:
      "CI = Continuous Integration (auto-test on merge). CD = Continuous Deployment (auto-deploy to production). Together they form an automated pipeline from code commit to live product.",
  },
  {
    id: "q_cicd_tf_1",
    conceptId: "cicd",
    module: 5,
    type: "true_false",
    prompt:
      "True or False: CI/CD eliminates the need for code reviews.",
    options: [
      "False — CI/CD automates testing and deployment, but human code reviews are still essential for catching logic and design issues",
      "True — automated tests in the CI pipeline are thorough enough to replace the need for any human code review",
      "True — modern CI/CD platforms include built-in AI-powered code review that replaces manual peer review",
      "False — CI/CD pipelines only handle deployment; they don't run tests, so code reviews fill that testing gap",
    ],
    correctIndex: 0,
    explanation:
      "CI/CD automates the mechanical parts (building, testing, deploying) but can't replace human judgment. Code reviews catch design issues, edge cases, and share team knowledge.",
  },
  {
    id: "q_cicd_scen_1",
    conceptId: "cicd",
    module: 5,
    type: "scenario",
    prompt:
      "A deploy broke production on Friday at 5pm. What process failure allowed this?",
    options: [
      "Missing CI/CD safeguards: no automated tests, no staged rollout, and possibly no deploy freeze policy",
      "A database migration ran during the deploy and locked tables, causing cascading timeouts across the app",
      "The production server's disk filled up because old deploy artifacts were never cleaned up automatically",
      "DNS propagation was slow, so some users hit the new server while others still reached the old one",
    ],
    correctIndex: 0,
    explanation:
      "A proper CI/CD pipeline should catch regressions with automated tests, use staged rollouts (canary/blue-green), and ideally have a deploy freeze policy for end-of-week.",
    whySection:
      "This is about process, not just technology. Good CI/CD includes: automated test suites, staged rollouts that catch issues before full deployment, easy rollback mechanisms, and cultural practices like not deploying before weekends.",
  },
  {
    id: "q_cicd_win_1",
    conceptId: "cicd",
    module: 5,
    type: "which_is_not",
    prompt:
      "Which of the following is NOT a typical step in a CI/CD pipeline?",
    options: ["Manually copying files to the server via FTP","Running automated tests","Building the application","Deploying to a staging environment"],
    correctIndex: 0,
    explanation:
      "Manual FTP deployment is exactly what CI/CD eliminates. A CI/CD pipeline automates building, testing, and deploying — no manual file copying needed.",
  },

  // ─── Git Branching ────────────────────────────────────
  {
    id: "q_gitbranching_t2d_1",
    conceptId: "gitbranching",
    module: 5,
    type: "scenario",
    prompt:
      "Three developers on your team each need to work on separate features simultaneously without interfering with each other's code or the stable main codebase. What Git workflow enables this isolation?",
    options: [
      "Git Branching",
      "Git Stashing",
      "Git Rebasing",
      "Git Tagging",
    ],
    correctIndex: 0,
    explanation:
      "Git branching is like making a photocopy of a document to edit. You mark up your copy, get it reviewed, and if approved, your edits get applied to the original.",
  },
  {
    id: "q_gitbranching_d2t_1",
    conceptId: "gitbranching",
    module: 5,
    type: "def_to_term",
    prompt:
      "Creating an isolated line of development where changes don't affect the main codebase until merged via a pull request. What is this?",
    options: ["Git Branching","Git Commit","Git Push","Git Clone"],
    correctIndex: 0,
    explanation:
      "This describes Git Branching — isolated development that gets merged after review.",
  },
  {
    id: "q_gitbranching_a2t_1",
    conceptId: "gitbranching",
    module: 5,
    type: "analogy_to_term",
    prompt:
      "\"Making a photocopy of a document to edit. You mark up your copy, someone reviews it, and if approved, your edits get applied to the original.\" What concept is this?",
    options: ["Git Branching","Caching","CI/CD","Docker"],
    correctIndex: 0,
    explanation:
      "The photocopy analogy describes Git Branching — you work on a copy (branch), get it reviewed (pull request), and merge the approved changes back to the original (main).",
  },
  {
    id: "q_gitbranching_fib_1",
    conceptId: "gitbranching",
    module: 5,
    type: "fill_in_blank",
    prompt:
      "Fill in the blank: A ___ request (or merge request) is how developers propose merging their branch changes back into the main codebase.",
    options: ["pull","push","fetch","clone"],
    correctIndex: 0,
    explanation:
      "A Pull Request (PR) proposes merging your branch into the main branch. It's the standard way to get code reviewed before it's merged.",
  },
  {
    id: "q_gitbranching_tf_1",
    conceptId: "gitbranching",
    module: 5,
    type: "true_false",
    prompt:
      "True or False: You should commit and push directly to the main branch when working on a team.",
    options: [
      "False — you should work on a feature branch and merge via pull request so changes can be reviewed before affecting main",
      "True — pushing directly to main is the fastest workflow and keeps the team aligned on the latest code at all times",
      "True — feature branches are only needed for large features; small changes should go directly to main for speed",
      "False — but only because main is a protected branch by default in Git, so direct pushes are technically impossible",
    ],
    correctIndex: 0,
    explanation:
      "Working directly on main is risky on teams. Feature branches + pull requests allow code review, CI testing, and safe rollback if something goes wrong.",
  },
  {
    id: "q_gitbranching_scen_1",
    conceptId: "gitbranching",
    module: 5,
    type: "scenario",
    prompt:
      "Two developers are working on different features. Developer A's changes break Developer B's code. How do branches prevent this?",
    options: [
      "Each developer works on their own branch — changes are isolated until individually reviewed and merged into main",
      "Branches automatically detect and resolve merge conflicts so that breaking changes never reach the codebase",
      "Branches lock individual files so only one developer can edit a given file at a time, preventing conflicts",
      "Branches create snapshot backups of every file, letting developers restore any version if something breaks",
    ],
    correctIndex: 0,
    explanation:
      "Branches isolate work. Developer A and B work in their own branches without affecting each other. Conflicts are resolved during the merge process, not during development.",
  },
  {
    id: "q_gitbranching_win_1",
    conceptId: "gitbranching",
    module: 5,
    type: "which_is_not",
    prompt:
      "Which of the following is NOT a common Git branching pattern?",
    options: ["Cache branch","Feature branch","Hotfix branch","Release branch"],
    correctIndex: 0,
    explanation:
      "Cache branch isn't a git concept. Common branching patterns include: feature branches (new features), hotfix branches (urgent fixes), and release branches (preparing a release).",
  },

  // ─── Rollback / Revert ────────────────────────────────
  {
    id: "q_rollback_t2d_1",
    conceptId: "rollback",
    module: 5,
    type: "scenario",
    prompt:
      "Your latest deployment is causing 500 errors for 20% of users and the team cannot quickly identify the bug. The decision is made to switch production back to yesterday's stable version while the team investigates. What is this action called?",
    options: [
      "Rollback / Revert",
      "Hot Reload",
      "Cache Purge",
      "Load Shedding",
    ],
    correctIndex: 0,
    explanation:
      "A rollback is an 'undo' button for your entire website — flip back to yesterday's version while you figure out what went wrong.",
  },
  {
    id: "q_rollback_d2t_1",
    conceptId: "rollback",
    module: 5,
    type: "def_to_term",
    prompt:
      "Switching a production deployment back to a previous known-good version when the current deployment causes issues. What is this?",
    options: ["Rollback","Rebase","Reset","Refactor"],
    correctIndex: 0,
    explanation:
      "This describes a Rollback — reverting to a stable version to restore service while you investigate the issue.",
  },
  {
    id: "q_rollback_a2t_1",
    conceptId: "rollback",
    module: 5,
    type: "analogy_to_term",
    prompt:
      "\"An undo button for your entire website. If the new version breaks things, flip the switch back to yesterday's version.\" What concept is this?",
    options: ["Rollback / Revert","Git Branching","CI/CD","Cache Invalidation"],
    correctIndex: 0,
    explanation:
      "The undo button analogy describes a Rollback — quickly reverting to a stable version.",
  },
  {
    id: "q_rollback_fib_1",
    conceptId: "rollback",
    module: 5,
    type: "fill_in_blank",
    prompt:
      "Fill in the blank: In a ___ deployment, you maintain two identical environments (old and new) and switch traffic between them, making rollback instant.",
    options: ["blue-green","red-yellow","hot-cold","dark-light"],
    correctIndex: 0,
    explanation:
      "Blue-green deployment maintains two environments. You deploy to 'green' while 'blue' serves traffic. Once verified, you switch. Rollback = switch back to blue. Instant.",
  },
  {
    id: "q_rollback_tf_1",
    conceptId: "rollback",
    module: 5,
    type: "true_false",
    prompt:
      "True or False: A canary release deploys new code to ALL users at once.",
    options: [
      "False — a canary release deploys to a small percentage of users first, monitors for issues, then gradually rolls out to everyone",
      "True — canary releases deploy new code to all users simultaneously, but with extra monitoring compared to a normal deploy",
      "True — a canary release is simply another term for a standard full production deployment with additional logging enabled",
      "False — canary releases only deploy to internal test environments and staging, never to actual production user traffic",
    ],
    correctIndex: 0,
    explanation:
      "Canary releases deploy to a small subset first (like the 'canary in the coal mine'). If something goes wrong, only 5% of users are affected, and you can roll back before it reaches everyone.",
  },
  {
    id: "q_rollback_scen_1",
    conceptId: "rollback",
    module: 5,
    type: "scenario",
    prompt:
      "A new deployment causes errors for 30% of users. Your team debates whether to fix forward or roll back. When should you roll back?",
    options: [
      "When the issue is actively impacting users and you can't identify the root cause quickly — restore service first",
      "Never roll back — always fix forward by pushing a new deploy, even under pressure, to maintain deploy momentum",
      "Only when 100% of users are affected — a 30% error rate suggests a partial issue that will self-resolve",
      "Only during business hours — rolling back outside hours risks making changes when fewer engineers are available",
    ],
    correctIndex: 0,
    explanation:
      "If users are suffering and the fix isn't obvious, roll back first to restore service. You can investigate and fix the issue calmly without users experiencing problems. Restore first, diagnose second.",
  },
  {
    id: "q_rollback_win_1",
    conceptId: "rollback",
    module: 5,
    type: "which_is_not",
    prompt:
      "Which of the following is NOT a deployment strategy that enables easy rollback?",
    options: ["Direct FTP upload to production","Blue-green deployment","Canary release","Rolling deployment"],
    correctIndex: 0,
    explanation:
      "Direct FTP upload has no rollback mechanism — you overwrote the old files. Blue-green, canary, and rolling deployments all have built-in rollback strategies.",
  },

  // ─── Feature Flags ─────────────────────────────────────

  {
    id: "q_featureflags_t2d_1",
    conceptId: "featureflags",
    module: 4,
    type: "scenario",
    prompt: "Your team deploys the new checkout code to production but keeps it invisible to users. When the team is ready, they flip a configuration switch in a dashboard to enable it — no new deploy needed. What technique makes this possible?",
    options: [
      "Feature Flags",
      "A/B Testing",
      "Blue-Green Deploy",
      "Git Branching",
    ],
    correctIndex: 0,
    explanation: "Feature flags decouple deployment from release. Code ships to production but the feature is off — you flip the flag when ready. This enables gradual rollouts, instant kill switches, and experimentation without new deployments.",
  },
  {
    id: "q_featureflags_scen_1",
    conceptId: "featureflags",
    module: 4,
    type: "scenario",
    prompt: "You're launching a redesigned checkout flow. You want to release it to 5% of users first, monitor for errors, then expand to 100% over a week. What technique enables this?",
    options: [
      "Feature flags with a percentage rollout — the flag controls which users see the new checkout without redeploying",
      "A/B testing — randomly assign users to the old or new checkout and measure which converts better statistically",
      "Blue-green deployment — run two identical production environments and split traffic at the load balancer level",
      "Canary release — deploy the new code to a small server cluster and route 5% of traffic to those servers",
    ],
    correctIndex: 0,
    explanation: "Feature flags let you control exactly which users see a feature, in real-time, without code changes. Blue-green is an infrastructure deployment pattern. A/B testing is for measuring outcomes. Git branches are for code isolation, not production rollouts.",
  },
  {
    id: "q_featureflags_code_1",
    conceptId: "featureflags",
    module: 4,
    type: "code_snippet",
    codeSnippet: `if (featureFlags.isEnabled('new_checkout', userId)) {
  return <NewCheckout />;
} else {
  return <OldCheckout />;
}`,
    prompt: "What is the primary operational advantage of this pattern over a standard code deploy?",
    options: [
      "You can instantly disable the new checkout for all users by toggling the flag — no new deployment needed",
      "The new checkout code is isolated to staging and is automatically excluded from the production build",
      "The feature is automatically restricted to admin users by checking their role before rendering the component",
      "It enables running two separate server versions simultaneously so each serves a different checkout flow",
    ],
    correctIndex: 0,
    explanation: "The power of feature flags is the instant kill switch. If new_checkout causes errors at 2am, you flip the flag off — immediate, no deployment, no rollback pipeline. Both code paths are already in production; only the flag changes.",
  },

  // ─── A/B Testing ───────────────────────────────────────

  {
    id: "q_abtesting_t2d_1",
    conceptId: "abtesting",
    module: 4,
    type: "scenario",
    prompt: "Your team wants to know if a green 'Buy Now' button converts better than the current blue one. They show the green button to 50% of users and the blue one to the other 50%, then compare purchase rates with statistical analysis. What is this technique called?",
    options: [
      "A/B Testing",
      "Feature Flags",
      "Canary Release",
      "Blue-Green Deploy",
    ],
    correctIndex: 0,
    explanation: "A/B testing is a randomized controlled experiment. Users split into groups — A sees the control, B sees the variant — and you measure a business metric (click rate, conversion, retention) to determine which performs better, with statistical rigor before declaring a winner.",
  },
  {
    id: "q_abtesting_scen_1",
    conceptId: "abtesting",
    module: 4,
    type: "scenario",
    prompt: "After 2 days, your A/B test shows the new button color converts 3% better (p=0.12). Should you ship it?",
    options: [
      "No — p=0.12 means the result isn't statistically significant; the observed difference could be random noise",
      "Yes — any positive conversion lift should be shipped immediately to capture the revenue improvement sooner",
      "Yes — 2 days is sufficient data collection time for any A/B test regardless of the traffic volume",
      "No — UI changes like button color are too subjective to be decided by quantitative A/B test data",
    ],
    correctIndex: 0,
    explanation: "Statistical significance (typically p < 0.05) means the result is unlikely to be chance. p=0.12 means a 12% probability this result is random — too high to act on. Shipping on insignificant results leads to false confidence. You need more traffic or more time.",
  },
  {
    id: "q_abtesting_win_1",
    conceptId: "abtesting",
    module: 4,
    type: "which_is_not",
    prompt: "Which of the following is NOT a requirement for a valid A/B test?",
    options: [
      "The test must run for exactly 7 days regardless of traffic volume",
      "Users should be randomly assigned to groups with no overlap",
      "Only one variable should change between A and B at a time",
      "You should define the success metric before starting the test",
    ],
    correctIndex: 0,
    explanation: "Test duration depends on traffic volume and effect size, not a fixed calendar rule. A high-traffic site might reach significance in hours; a low-traffic one may need weeks. The real requirements are: random assignment, single variable change, and pre-defined success metric.",
  },

  // ─── Technical Debt ────────────────────────────────────

  {
    id: "q_techdebt_t2d_1",
    conceptId: "techdebt",
    module: 5,
    type: "scenario",
    prompt: "Over the past year, your team shipped features quickly by skipping tests, copy-pasting code, and hardcoding values. Now every small change takes three times longer because the codebase is fragile and tangled. What concept describes this accumulated cost?",
    options: [
      "Technical Debt",
      "Scope Creep",
      "Feature Bloat",
      "Code Entropy",
    ],
    correctIndex: 0,
    explanation: "Technical debt is a metaphor: you borrow against future development speed by taking shortcuts now. Like financial debt, small amounts are manageable. Left unpaid, the 'interest' — slower velocity, harder bug fixes, fragile code — eventually costs more than the original loan was worth.",
  },
  {
    id: "q_techdebt_scen_1",
    conceptId: "techdebt",
    module: 5,
    type: "scenario",
    prompt: "Engineers estimate every new feature takes twice as long as it should because the codebase is tangled and untested. What is the root cause?",
    options: [
      "High technical debt — accumulated shortcuts are now slowing every change, compounding like interest on a loan",
      "The team is understaffed — hiring more engineers would directly cut feature development time in half",
      "The product requirements are inherently complex, making any implementation slow regardless of code quality",
      "The CI/CD pipeline is the bottleneck — slow builds and deploys are adding overhead to every feature cycle",
    ],
    correctIndex: 0,
    explanation: "When velocity consistently feels slower than the complexity warrants, accumulated technical debt is the leading culprit. This 'interest payment' — navigating messy, untested code — is the cost of not paying down debt earlier. A targeted refactoring investment is often the solution.",
  },
  {
    id: "q_techdebt_win_1",
    conceptId: "techdebt",
    module: 5,
    type: "which_is_not",
    prompt: "Which of the following is NOT an example of taking on technical debt?",
    options: [
      "Writing thorough unit tests before shipping a feature",
      "Hardcoding a value to meet a deadline with a plan to fix it later",
      "Copy-pasting code instead of extracting a reusable function",
      "Skipping code review to ship a fix faster",
    ],
    correctIndex: 0,
    explanation: "Writing tests is the opposite of debt — it's an investment that pays forward. Hardcoding values, copy-pasting instead of abstracting, and skipping review are classic debt: faster now, costlier later.",
  },

  // ─── API Versioning ────────────────────────────────────

  {
    id: "q_apiversioning_t2d_1",
    conceptId: "apiversioning",
    module: 3,
    type: "scenario",
    prompt: "You need to rename fields in your public API response, but 50 external clients depend on the current format. You create a /v2/ endpoint with the new structure while keeping /v1/ running for existing clients. What practice is this?",
    options: [
      "API Versioning",
      "API Gateway",
      "Feature Flags",
      "Blue-Green Deploy",
    ],
    correctIndex: 0,
    explanation: "API versioning (e.g., /v1/ vs /v2/) lets you evolve an API without breaking clients who depend on the old behavior. Without versioning, any breaking change instantly breaks all integrations.",
  },
  {
    id: "q_apiversioning_code_1",
    conceptId: "apiversioning",
    module: 3,
    type: "code_snippet",
    codeSnippet: `// v1 response
{ "name": "Alice Smith", "phone": "555-1234" }

// v2 response (field renamed — breaking change)
{ "first_name": "Alice", "last_name": "Smith", "phone_number": "555-1234" }`,
    prompt: "A client built against v1 reads response.name. What happens when the API migrates everyone to v2?",
    options: [
      "response.name returns undefined — the field was renamed, so the client silently breaks with blank data",
      "The client automatically adapts because JSON is self-describing and maps old field names to new ones",
      "The server returns a 400 error with a message telling the client which fields were renamed in v2",
      "Nothing changes — the server automatically includes both old and new field names for backward compatibility",
    ],
    correctIndex: 0,
    explanation: "Renaming a field is a breaking change. The client expects 'name' but v2 only sends 'first_name' and 'last_name' — so response.name is undefined and users see blank names. This is why /v1/ and /v2/ exist: clients on v1 keep getting the old format while new clients adopt v2.",
  },
  {
    id: "q_apiversioning_scen_1",
    conceptId: "apiversioning",
    module: 3,
    type: "scenario",
    prompt: "You need to rename a field in your public API response. You have 50 external customers integrated with the current version. What's the right approach?",
    options: [
      "Introduce /v2/ with the new field name, deprecate /v1/ with advance notice, and support both during a migration window",
      "Rename the field directly in /v1/ and notify all 50 customers via email to update their integrations immediately",
      "Use a feature flag per customer to toggle between the old and new field name within the same /v1/ endpoint",
      "Add the new field name alongside the old one in /v1/ permanently, returning both fields in every response",
    ],
    correctIndex: 0,
    explanation: "Industry standard: version the API, maintain backward compatibility during a migration window (often 6–18 months), give customers advance deprecation notice. Changing v1 in place breaks all 50 customers simultaneously — catastrophic for a public API.",
  },

  // ─── Code Snippets (existing concepts) ─────────────────

  {
    id: "q_cors_code_1",
    conceptId: "cors",
    module: 3,
    type: "code_snippet",
    codeSnippet: `// Browser console error:
// Access to fetch at 'https://api.example.com/data'
// from origin 'https://myapp.com' has been blocked
// by CORS policy: No 'Access-Control-Allow-Origin'
// header is present on the requested resource.`,
    prompt: "How do you fix this CORS error?",
    options: [
      "Configure the server at api.example.com to return the Access-Control-Allow-Origin response header",
      "Change the fetch() call to use XMLHttpRequest instead, which bypasses the browser's CORS checks",
      "Add a mode: 'no-cors' option to the fetch() call so the browser skips the CORS verification",
      "Set up a proxy on your own server to forward requests to api.example.com on the backend",
    ],
    correctIndex: 0,
    explanation: "CORS is enforced by the browser — the fix is always server-side. api.example.com must return 'Access-Control-Allow-Origin: https://myapp.com' (or *) in its response. No frontend change bypasses a missing CORS header.",
  },
  {
    id: "q_jwt_code_1",
    conceptId: "jwt",
    module: 3,
    type: "code_snippet",
    codeSnippet: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9
.eyJ1c2VySWQiOiIxMjM0NTYiLCJyb2xlIjoiYWRtaW4iLCJleHAiOjE3MDAwMDAwMDB9
.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c`,
    prompt: "This JWT has three dot-separated parts. The middle part decodes to: {\"userId\":\"123456\",\"role\":\"admin\",\"exp\":1700000000}. What is the middle section called?",
    options: [
      "Payload — it contains the claims such as user data, roles, and expiration time",
      "Header — it describes the signing algorithm and the type of token being used",
      "Signature — it is the cryptographic proof that the token hasn't been tampered with",
      "Claim block — it is a standalone data structure separate from the JWT token format",
    ],
    correctIndex: 0,
    explanation: "A JWT is Header.Payload.Signature. The payload (middle) holds the claims — userId, role, expiration. The header (first) declares the signing algorithm. The signature (last) is cryptographic proof that nothing was modified. Anyone can decode the payload — it's base64, not encrypted — so never store secrets in it.",
  },
  {
    id: "q_websockets_code_1",
    conceptId: "websockets",
    module: 3,
    type: "code_snippet",
    codeSnippet: `const ws = new WebSocket('wss://chat.example.com');

ws.onopen = () => ws.send('Hello server!');
ws.onmessage = (event) => console.log('Received:', event.data);
ws.onerror = (err) => console.error('Error:', err);`,
    prompt: "Compared to polling this endpoint every second with fetch(), what is the key advantage of WebSocket here?",
    options: [
      "The server can push messages instantly without the client asking — no wasted requests when nothing is new",
      "WebSocket uses UDP instead of TCP, cutting latency in half for real-time bidirectional communication",
      "WebSocket bypasses CORS entirely, so no server-side origin configuration is needed for cross-domain use",
      "fetch() cannot handle streaming data at all, so polling is fundamentally unable to receive live updates",
    ],
    correctIndex: 0,
    explanation: "WebSockets maintain a persistent connection — the server pushes data the instant something happens. Polling sends N requests per minute regardless of whether anything changed: wasted bandwidth, extra latency, unnecessary server load. WebSocket still uses TCP, not UDP.",
  },
  {
    id: "q_dns_code_1",
    conceptId: "dns",
    module: 1,
    type: "code_snippet",
    codeSnippet: `$ dig google.com

;; ANSWER SECTION:
google.com.    171    IN    A    142.250.80.46`,
    prompt: "What does the 'A' record in this DNS response represent?",
    options: [
      "An IPv4 address mapping for the domain (google.com resolves to 142.250.80.46)",
      "An authentication certificate proving this is the legitimate google.com server",
      "An alias record pointing google.com to a different canonical domain name",
      "A mail exchange record identifying the server that handles @google.com email",
    ],
    correctIndex: 0,
    explanation: "An 'A' record maps a domain to an IPv4 address — the core function of DNS. Other record types: CNAME (alias to another domain), MX (mail server), AAAA (IPv6), TXT (verification/SPF). The '171' is the TTL in seconds — how long resolvers can cache this mapping before re-querying.",
  },
];
