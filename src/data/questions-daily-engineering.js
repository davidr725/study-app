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
    type: "term_to_def",
    prompt:
      "What is DNS?",
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
      "True — every page load requires a fresh DNS lookup",
      "True — DNS caching is only done by ISPs, not browsers",
      "False — DNS only happens once when you first install your browser",
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
      "The web server is down",
      "Your internet connection is too slow",
      "The SSL certificate expired",
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
    type: "term_to_def",
    prompt:
      "What is a REST API?",
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
      "True — REST uses predictable URL patterns where resource collections and individual items have consistent URLs",
      "False — REST doesn't have URL conventions",
      "False — /users/5 would return 5 users",
      "True — but only if using GraphQL on top of REST",
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
      "REST endpoints return fixed resource shapes — you'd call /users/:id for profile data and /users/:id/orders for orders separately",
      "REST can only return one field at a time",
      "REST doesn't support mobile apps",
      "REST requires a new endpoint for every combination of data",
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
    type: "term_to_def",
    prompt:
      "What is GraphQL?",
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
      "True — unlike REST which has many endpoints, GraphQL routes all requests through one endpoint and uses the query to determine what data to return",
      "False — GraphQL requires a separate endpoint for each resource, like REST",
      "False — GraphQL doesn't use HTTP endpoints at all",
      "True — but only for read operations; writes use separate endpoints",
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
    type: "term_to_def",
    prompt:
      "What is OAuth / SSO?",
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
      "False — the whole point of OAuth is that the third-party app NEVER sees your password; it receives a token instead",
      "True — OAuth securely shares your password with trusted apps",
      "True — OAuth encrypts your password before sharing it",
      "False — OAuth doesn't involve passwords at all",
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
      "Nothing — tokens are permanent once issued",
      "Your app automatically gets a new token",
      "The token still works but with reduced permissions",
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
    type: "term_to_def",
    prompt:
      "What is CORS?",
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
      "False — CORS applies to all HTTP requests regardless of origin",
      "False — CORS also blocks requests from mobile apps",
      "True — but only for GET requests, not POST",
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
    id: "q_cors_scen_2",
    conceptId: "cors",
    module: 3,
    type: "scenario",
    prompt:
      "Your API works fine when called from Postman but gets CORS errors from your React app. Why?",
    options: [
      "Postman is not a browser, so CORS doesn't apply. Browsers enforce CORS; tools like Postman, cURL, and backend services don't.",
      "Postman automatically adds CORS headers",
      "React has a built-in CORS bug",
      "Postman uses a different protocol than browsers",
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
    type: "term_to_def",
    prompt:
      "What is a JWT (JSON Web Token)?",
    options: [
      "A compact, self-contained token that carries user info (claims) and a cryptographic signature, so the server can verify it without a database lookup",
      "A cookie that stores the user's password in encrypted form",
      "A session ID that the server looks up in a database",
      "An API key that identifies the application, not the user",
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
      "False — JWT payloads are only Base64-encoded, not encrypted. Anyone can decode and read them. The signature only verifies they haven't been tampered with.",
      "True — JWTs use strong encryption to hide the payload",
      "True — only the server can decode the JWT payload",
      "False — JWTs don't have a payload section",
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
      "The user must log in again — there's no way around an expired JWT",
      "The app should modify the JWT's expiration date",
      "Nothing — expired JWTs continue to work",
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
    type: "term_to_def",
    prompt:
      "What are WebSockets?",
    options: [
      "A protocol for full-duplex (two-way) communication over a single persistent connection, where either side can send messages at any time",
      "A standard HTTP request-response cycle",
      "A callback mechanism where a service sends data when an event occurs",
      "Repeatedly sending requests at intervals to check for new data",
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
      "False — WebSockets are ideal for real-time features (chat, live updates) but overkill for simple request-response APIs where HTTP is simpler and more cacheable",
      "True — WebSockets are always faster and should replace HTTP",
      "True — WebSockets are the modern replacement for REST",
      "False — WebSockets are slower than HTTP",
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
      "WebSockets — they provide real-time, bidirectional communication ideal for chat",
      "HTTP polling — check for new messages every second",
      "Webhooks — have the server push each new message",
      "REST API — make a GET request for each new message",
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
    type: "term_to_def",
    prompt:
      "What is Caching?",
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
      "False — caching can serve stale data, uses memory, and adds the complexity of cache invalidation",
      "True — caching only has benefits with no tradeoffs",
      "True — modern caching systems have no downsides",
      "False — caching always makes things slower",
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
    options: ["The user's keyboard","The browser","A CDN","The application server (Redis, Memcached)"],
    correctIndex: 0,
    explanation:
      "Caching happens at the browser, CDN, application server, and database query level — not at the keyboard. Each layer reduces load on the layer behind it.",
  },
  {
    id: "q_caching_scen_1",
    conceptId: "caching",
    module: 4,
    type: "scenario",
    prompt:
      "Your homepage makes a database query that takes 2 seconds. It's the same data for every user and only changes once a day. What's the fix?",
    options: [
      "Cache the query result — serve it from cache for 24 hours, then refresh",
      "Add more database indexes",
      "Switch from SQL to NoSQL",
      "Use WebSockets to stream the data",
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
    type: "term_to_def",
    prompt:
      "What is Cache Invalidation?",
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
      "False — cache invalidation is simple with modern tools",
      "False — this quote is about database design, not caching",
      "True — but it only applies to distributed systems",
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
    id: "q_cacheinvalidation_scen_2",
    conceptId: "cacheinvalidation",
    module: 4,
    type: "scenario",
    prompt:
      "Your team debates between TTL-based and event-based cache invalidation. When is each approach better?",
    options: [
      "TTL for data that changes predictably (weather, every 5 min). Event-based for data that changes unpredictably (user profile updates).",
      "TTL is always better because it's simpler",
      "Event-based is always better because it's more accurate",
      "Neither — caches should never expire",
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
    type: "term_to_def",
    prompt:
      "What are Environment Variables?",
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
      "False — .env files contain secrets and should NEVER be committed; repos can be made public accidentally, and secrets persist in git history",
      "True — private repos are secure enough for secrets",
      "True — git encrypts committed files automatically",
      "False — but only because .env files are too large for git",
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
    type: "term_to_def",
    prompt:
      "What is Pagination?",
    options: [
      "Splitting large data sets into smaller chunks (pages) returned one at a time, instead of loading everything at once",
      "Storing frequently accessed data in a faster location",
      "A data structure that speeds up database lookups",
      "The process of determining when cached data is stale",
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
      "True — cursors reference a specific item, so insertions/deletions don't cause skipped or duplicate results like offset-based can",
      "False — offset-based is always more reliable",
      "True — but cursor-based can only be used with NoSQL databases",
      "False — both approaches handle changing data equally well",
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
      "Compress the JSON response",
      "Switch from JSON to XML",
      "Use a faster phone",
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
    type: "term_to_def",
    prompt:
      "What is CI/CD?",
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
      "False — CI/CD automates testing and deployment, but code reviews by humans are still essential for catching logic errors, design issues, and knowledge sharing",
      "True — automated tests replace the need for human review",
      "True — CI/CD includes AI-powered code review",
      "False — but only because CI/CD doesn't run tests",
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
    type: "term_to_def",
    prompt:
      "What is Git Branching?",
    options: [
      "Creating a separate line of development from the main codebase so you can work on features or fixes without affecting the main code",
      "Deleting old code that's no longer needed",
      "Uploading code to a remote server",
      "A system for distributing traffic across multiple servers",
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
      "False — you should work on a feature branch and merge via a pull request so changes can be reviewed before affecting the main codebase",
      "True — pushing to main is the fastest workflow",
      "True — branches are only needed for large features",
      "False — but only because main is a protected branch by default",
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
      "Each developer works on their own branch — changes are isolated until they're individually reviewed and merged into main",
      "Branches automatically merge code so conflicts never happen",
      "Branches lock files so only one developer can edit at a time",
      "Branches create backup copies of every file",
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
    type: "term_to_def",
    prompt:
      "What is a Rollback / Revert?",
    options: [
      "Reverting a deployed application to a previous known-good version when a new deployment causes problems",
      "Deleting a Git branch after it's been merged",
      "Restarting the server to clear its memory",
      "Removing a database index to speed up writes",
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
      "False — a canary release deploys to a small percentage of users first (e.g., 5%), monitors for issues, then gradually rolls out to everyone",
      "True — canary releases deploy to all users simultaneously",
      "True — canary is another word for a full deployment",
      "False — canary releases only deploy to test environments, never production",
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
      "When the issue is actively impacting users and you can't identify/fix the root cause quickly — restore service first, investigate second",
      "Never — always fix forward",
      "Only when 100% of users are affected",
      "Only during business hours",
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
    type: "term_to_def",
    prompt: "What are Feature Flags?",
    options: [
      "Configuration switches that enable or disable features in production without deploying new code",
      "Git branches used to isolate new feature development from the main codebase",
      "A type of A/B test that changes the UI layout for different user segments",
      "Security rules that restrict which users can access certain API endpoints",
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
      "Feature flags with a percentage rollout — the flag is on for 5% of users, controllable without new deployments",
      "A/B testing — show the new checkout to group A, old to group B, pick the winner",
      "Blue-green deployment — run two production environments and split traffic at the load balancer",
      "Git branching — maintain a separate branch for each rollout tier",
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
      "The new checkout code only runs in staging and never reaches production",
      "The feature is automatically enabled for admin users only",
      "It lets you run two different server versions simultaneously",
    ],
    correctIndex: 0,
    explanation: "The power of feature flags is the instant kill switch. If new_checkout causes errors at 2am, you flip the flag off — immediate, no deployment, no rollback pipeline. Both code paths are already in production; only the flag changes.",
  },

  // ─── A/B Testing ───────────────────────────────────────

  {
    id: "q_abtesting_t2d_1",
    conceptId: "abtesting",
    module: 4,
    type: "term_to_def",
    prompt: "What is A/B Testing?",
    options: [
      "A controlled experiment showing two feature versions to different user segments to measure which performs better",
      "Testing a feature in two environments — staging (A) and production (B) — before full launch",
      "A deployment strategy that runs two server versions simultaneously to compare performance",
      "A QA method where two engineers review the same code independently",
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
      "No — p=0.12 means the result isn't statistically significant; the difference could be random noise",
      "Yes — any positive conversion lift is worth shipping immediately",
      "Yes — 2 days is enough time to make a decision on any A/B test",
      "No — UI changes should never be decided by A/B test data alone",
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
    type: "term_to_def",
    prompt: "What is Technical Debt?",
    options: [
      "The accumulated cost of shortcuts and deferred maintenance in a codebase that slows future development",
      "The dollar cost of cloud infrastructure that builds up over time",
      "Outstanding bug tickets the team hasn't addressed yet",
      "Code written by a previous team that isn't documented",
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
      "High technical debt — accumulated shortcuts are now slowing every change, compounding like interest",
      "The team is understaffed and needs more engineers",
      "The product requirements are too complex to implement efficiently",
      "The CI/CD pipeline is too slow, adding time to every deployment",
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
    type: "term_to_def",
    prompt: "What is API Versioning?",
    options: [
      "Managing breaking changes by maintaining multiple API versions simultaneously so existing clients keep working",
      "Incrementing a build number every time code is deployed to production",
      "A Git strategy for managing multiple feature branches in parallel",
      "Logging every API request with a timestamp and software version",
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
      "response.name returns undefined — the field was renamed, silently breaking the client",
      "The client automatically adapts because JSON is self-describing",
      "The server returns a 400 error to warn the client about the breaking change",
      "Nothing changes — both field names work simultaneously in the same JSON response",
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
      "Introduce /v2/ with the new field name, deprecate /v1/ with advance notice, support both during a migration window",
      "Change the field name immediately in /v1/ and send an email to customers",
      "Use a feature flag to toggle between field names in the same endpoint",
      "Only update the documentation — don't change the actual API response",
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
      "Change the fetch() call to use XMLHttpRequest instead",
      "Switch the request from HTTPS to HTTP",
      "Add a Content-Type header to the frontend request",
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
      "Payload — it contains the claims (user data, roles, expiration time)",
      "Header — it describes the signing algorithm and token type",
      "Signature — it proves the token hasn't been tampered with",
      "Claim block — it's a standalone structure separate from the token format",
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
      "WebSocket uses UDP instead of TCP, making it faster for real-time data",
      "WebSocket bypasses CORS, so no server configuration is needed",
      "fetch() fundamentally cannot handle streaming data",
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
      "An IPv4 address mapping for the domain (google.com → 142.250.80.46)",
      "An authentication certificate proving this is the real google.com",
      "An alias pointing google.com to another domain name",
      "The mail server responsible for handling @google.com emails",
    ],
    correctIndex: 0,
    explanation: "An 'A' record maps a domain to an IPv4 address — the core function of DNS. Other record types: CNAME (alias to another domain), MX (mail server), AAAA (IPv6), TXT (verification/SPF). The '171' is the TTL in seconds — how long resolvers can cache this mapping before re-querying.",
  },
];
