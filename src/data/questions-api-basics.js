// ═══════════════════════════════════════════════════════
// API BASICS
// Concepts: endpoint, methods, format, status, auth, ratelimit, timeout, status2xx, status4xx, status5xx, headers, webhook, polling, gateway, middleware
// ═══════════════════════════════════════════════════════

export const QUESTIONS_API_BASICS = [
  // ─── API Endpoint ─────────────────────────────────────
  {
    id: "q_endpoint_t2d_1",
    conceptId: "endpoint",
    module: 1,
    type: "scenario",
    prompt:
      "A developer asks 'Where do I send the request to get user data?' They need a specific URL for the user resource. What concept are they asking about?",
    options: [
      "API Endpoint",
      "HTTP Header",
      "API Gateway",
      "DNS Record",
    ],
    correctIndex: 0,
    explanation:
      "An API Endpoint is the specific URL where you send requests to interact with a resource — like a mailbox address where things get sent and picked up.",
  },
  {
    id: "q_endpoint_d2t_1",
    conceptId: "endpoint",
    module: 1,
    type: "def_to_term",
    prompt:
      "A specific URL where an API can be accessed to perform an operation on a resource. What concept is this?",
    options: ["API Endpoint","API Gateway","Webhook","DNS"],
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
      "\"Your mailbox address — where things get sent and picked up.\" What web concept does this represent?",
    options: ["API Endpoint","Webhook","DNS","API Gateway"],
    correctIndex: 0,
    explanation:
      "The mailbox address analogy represents an API Endpoint — the specific location where requests are sent to and responses come from.",
  },
  {
    id: "q_endpoint_t2a_1",
    conceptId: "endpoint",
    module: 1,
    type: "term_to_analogy",
    prompt:
      "Which analogy best describes an API Endpoint?",
    options: ["Your mailbox address — where things get sent and picked up","A doorbell that rings when a package arrives","The front gate of a gated community","A phone book that translates names to addresses"],
    correctIndex: 0,
    explanation:
      "An API Endpoint is like your mailbox address — the specific place where requests arrive and responses are sent from.",
  },
  {
    id: "q_endpoint_fib_1",
    conceptId: "endpoint",
    module: 1,
    type: "fill_in_blank",
    prompt:
      "Fill in the blank: GET /api/users/42 is an example of calling an ___ to retrieve a specific user.",
    options: ["API Endpoint","API Gateway","Webhook","HTTP Header"],
    correctIndex: 0,
    explanation:
      "/api/users/42 is an API Endpoint — a specific URL that targets a particular resource (user #42).",
  },
  {
    id: "q_endpoint_win_1",
    conceptId: "endpoint",
    module: 1,
    type: "which_is_not",
    prompt:
      "Which of the following is NOT an example of an API endpoint?",
    options: ["200 OK","GET /api/products","POST /api/orders","DELETE /api/users/5"],
    correctIndex: 0,
    explanation:
      "200 OK is an HTTP status code, not an endpoint. The others are all examples of API endpoints with HTTP methods.",
  },
  {
    id: "q_endpoint_scen_1",
    conceptId: "endpoint",
    module: 1,
    type: "scenario",
    prompt:
      "A teammate asks: 'What endpoint do I hit to get a list of all products?' What are they asking for?",
    options: [
      "The specific URL to send a GET request to, like /api/products",
      "The HTTP status code that the products API returns",
      "The JSON format of the product data",
      "The API key needed to access the products",
    ],
    correctIndex: 0,
    explanation:
      "When someone asks 'what endpoint do I hit,' they're asking for the specific URL path to make their request to.",
  },

  // ─── HTTP Methods ─────────────────────────────────────
  {
    id: "q_methods_t2d_1",
    conceptId: "methods",
    module: 1,
    type: "scenario",
    prompt:
      "When building a CRUD API, you need verbs to distinguish between creating, reading, updating, and deleting resources. What concept provides these verbs?",
    options: [
      "HTTP Methods",
      "HTTP Status Codes",
      "API Endpoints",
      "Request Headers",
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
    options: ["HTTP Methods","HTTP Status Codes","Request/Response Format","API Endpoint"],
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
      "\"What you ask the carrier to do — deliver (POST), hand over (GET), replace (PUT), or throw away (DELETE).\" What concept is this?",
    options: ["HTTP Methods","HTTP Status Codes","Middleware","API Endpoint"],
    correctIndex: 0,
    explanation:
      "This carrier analogy describes HTTP Methods — the actions you instruct the server to perform.",
  },
  {
    id: "q_methods_t2a_1",
    conceptId: "methods",
    module: 1,
    type: "term_to_analogy",
    prompt:
      "Which analogy best describes HTTP Methods?",
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
  {
    id: "q_methods_fib_1",
    conceptId: "methods",
    module: 1,
    type: "fill_in_blank",
    prompt:
      "Fill in the blank: To create a new resource on the server, you would use the ___ HTTP method.",
    options: ["POST","GET","DELETE","OPTIONS"],
    correctIndex: 0,
    explanation:
      "POST is the HTTP method used to create new resources. GET retrieves, PUT replaces, DELETE removes.",
  },
  {
    id: "q_methods_win_1",
    conceptId: "methods",
    module: 1,
    type: "which_is_not",
    prompt:
      "Which of the following is NOT a standard HTTP method?",
    options: ["SEND","GET","PUT","PATCH"],
    correctIndex: 0,
    explanation:
      "SEND is not a standard HTTP method. The standard methods include GET, POST, PUT, PATCH, DELETE, HEAD, OPTIONS.",
  },
  {
    id: "q_methods_tf_1",
    conceptId: "methods",
    module: 1,
    type: "true_false",
    prompt:
      "True or False: A PUT request replaces the entire resource, while PATCH only updates specific fields.",
    options: [
      "True — PUT replaces the full resource; PATCH modifies only specified fields",
      "False — PUT and PATCH both perform partial updates; the difference is in encoding format",
      "False — PATCH replaces the full resource; PUT modifies only specified fields",
      "False — PUT and PATCH are interchangeable aliases defined in the HTTP/2 spec",
    ],
    correctIndex: 0,
    explanation:
      "PUT replaces the entire resource with the new data. PATCH applies a partial update, changing only the fields you specify.",
  },
  {
    id: "q_methods_scen_1",
    conceptId: "methods",
    module: 1,
    type: "scenario",
    prompt:
      "Your team debates whether to use GET or POST for a search feature with complex filters. What's the key tradeoff?",
    options: [
      "GET puts params in the URL (bookmarkable, cacheable, length-limited); POST puts them in the body (no length limit, not cacheable)",
      "GET is faster than POST because it skips the request body parsing step on the server side",
      "POST is more secure because it encrypts the request data, while GET sends data in plaintext",
      "GET requests are always idempotent while POST requests always modify the server's state",
    ],
    correctIndex: 0,
    explanation:
      "GET parameters live in the URL — great for bookmarking and caching, but URL length is limited. POST parameters live in the request body — no length limit, but you lose bookmarkability and caching.",
    whySection:
      "For simple searches, GET is preferred because results can be bookmarked and cached. For complex searches with many filters, POST avoids URL length limits. Neither is inherently 'more secure' — both need HTTPS.",
  },

  // ─── Request/Response Format ──────────────────────────
  {
    id: "q_format_t2d_1",
    conceptId: "format",
    module: 1,
    type: "scenario",
    prompt:
      "A frontend and backend team need to agree on how data will be structured in API calls — whether to use JSON, XML, or something else. What concept are they deciding on?",
    options: [
      "Request/Response Format",
      "HTTP Methods",
      "API Endpoint",
      "Content Encoding",
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
    options: ["Request/Response Format","HTTP Methods","API Endpoint","CORS"],
    correctIndex: 0,
    explanation:
      "This describes the Request/Response Format — the shared language for data exchange.",
  },
  {
    id: "q_format_a2t_1",
    conceptId: "format",
    module: 1,
    type: "analogy_to_term",
    prompt:
      "\"The agreed-upon language the letters are written in. Both sides need to read the same language.\" What concept is this?",
    options: ["Request/Response Format","HTTP Methods","API Endpoint","DNS"],
    correctIndex: 0,
    explanation:
      "This analogy describes the Request/Response Format — both client and server must agree on the data language (usually JSON).",
  },
  {
    id: "q_format_fib_1",
    conceptId: "format",
    module: 1,
    type: "fill_in_blank",
    prompt:
      "Fill in the blank: The most common request/response format used in modern web APIs is ___.",
    options: ["JSON","CSV","Plain text","YAML"],
    correctIndex: 0,
    explanation:
      "JSON (JavaScript Object Notation) is the dominant format for modern web APIs. It's lightweight, human-readable, and natively supported by JavaScript.",
  },
  {
    id: "q_format_tf_1",
    conceptId: "format",
    module: 1,
    type: "true_false",
    prompt:
      "True or False: JSON is more verbose than XML, which is why XML is preferred for modern APIs.",
    options: [
      "False — JSON is less verbose than XML, using simpler key-value syntax instead of tags",
      "True — XML uses compact closing tags while JSON requires extra braces and quotes",
      "True — JSON needs more characters to express the same data structures as XML",
      "False — JSON and XML produce identical payload sizes for the same data content",
    ],
    correctIndex: 0,
    explanation:
      "JSON is less verbose than XML. XML requires opening and closing tags for every element, while JSON uses simpler key-value syntax. That's one reason JSON became the standard for web APIs.",
  },
  {
    id: "q_format_scen_1",
    conceptId: "format",
    module: 1,
    type: "scenario",
    prompt:
      "Your API returns data but the frontend shows 'undefined' for every field. The API works fine in Postman. What's likely wrong?",
    options: [
      "The response format doesn't match what the frontend expects — check Content-Type header and parsing logic",
      "The API endpoint is incorrect and returning a different resource's data entirely",
      "The server is rate-limiting the frontend and returning empty placeholder data",
      "The CORS policy is stripping response fields before they reach the browser",
    ],
    correctIndex: 0,
    explanation:
      "When data arrives but fields are undefined, it's usually a format mismatch. The server might be sending XML while the frontend expects JSON, or the JSON structure doesn't match what the code expects.",
  },
  {
    id: "q_format_win_1",
    conceptId: "format",
    module: 1,
    type: "which_is_not",
    prompt:
      "Which of the following is NOT a common request/response data format?",
    options: ["TCP","JSON","XML","Protocol Buffers"],
    correctIndex: 0,
    explanation:
      "TCP is a transport protocol, not a data format. JSON, XML, and Protocol Buffers are all data serialization formats used in API communication.",
  },

  // ─── HTTP Status Codes ────────────────────────────────
  {
    id: "q_status_t2d_1",
    conceptId: "status",
    module: 2,
    type: "scenario",
    prompt:
      "After your server processes a request, it needs a standardized way to tell the client whether it succeeded, failed due to a client error, or failed due to a server problem. What provides this?",
    options: [
      "HTTP Status Codes",
      "HTTP Methods",
      "HTTP Headers",
      "Request Body",
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
    options: ["HTTP Status Codes","HTTP Methods","Rate Limiting","API Key / Auth Token"],
    correctIndex: 0,
    explanation:
      "These are HTTP Status Codes — the server's way of telling you what happened with your request.",
  },
  {
    id: "q_status_a2t_1",
    conceptId: "status",
    module: 2,
    type: "analogy_to_term",
    prompt:
      "\"The carrier's response — thumbs up (200), 'nobody home' (404), 'mailbox is on fire' (500).\" What concept is this?",
    options: ["HTTP Status Codes","HTTP Methods","API Endpoint","Webhook"],
    correctIndex: 0,
    explanation:
      "This analogy describes HTTP Status Codes — numeric indicators of what happened with the request.",
  },
  {
    id: "q_status_fib_1",
    conceptId: "status",
    module: 2,
    type: "fill_in_blank",
    prompt:
      "Fill in the blank: Status codes starting with 2xx mean ___, 4xx mean ___, and 5xx mean ___.",
    options: ["success, client error, server error","client error, server error, success","redirect, success, client error","server error, redirect, success"],
    correctIndex: 0,
    explanation:
      "2xx = success (the request worked). 4xx = client error (you did something wrong). 5xx = server error (the server broke).",
  },
  {
    id: "q_status_win_1",
    conceptId: "status",
    module: 2,
    type: "which_is_not",
    prompt:
      "Which of the following is NOT a real HTTP status code?",
    options: ["499 Client Timeout","200 OK","404 Not Found","503 Service Unavailable"],
    correctIndex: 0,
    explanation:
      "499 is not a standard HTTP status code (though some servers like nginx use it internally). 200, 404, and 503 are all standard HTTP status codes.",
  },
  {
    id: "q_status_tf_1",
    conceptId: "status",
    module: 2,
    type: "true_false",
    prompt:
      "True or False: A 3xx status code means the resource has moved and the client should follow a redirect.",
    options: [
      "True — 3xx codes indicate redirection; the client should follow the new URL",
      "False — 3xx codes indicate a server error that requires the client to retry",
      "False — 3xx codes mean the request was successful and no further action needed",
      "True — but only 301 is a redirect; 302 and 304 indicate client-side errors",
    ],
    correctIndex: 0,
    explanation:
      "3xx codes mean redirection. 301 = permanently moved, 302 = temporarily moved, 304 = not modified (use your cache). They tell the client to look elsewhere.",
  },
  {
    id: "q_status_scen_1",
    conceptId: "status",
    module: 2,
    type: "scenario",
    prompt:
      "Users report the app is broken. Logs show a spike in 503s. Is this a bug in your code or an infrastructure problem?",
    options: [
      "Infrastructure — 503 means the server is temporarily unable to handle requests, usually overloaded or in maintenance",
      "Code bug — 503 means an unhandled exception crashed the request handler",
      "Client-side issue — users are sending malformed requests that the server rejects",
      "Database problem — 503 specifically indicates a failed database query or connection",
    ],
    correctIndex: 0,
    explanation:
      "503 Service Unavailable is an infrastructure issue — the server is overloaded or in maintenance. It's not a code bug, it's a capacity or availability problem.",
    whySection:
      "503 is in the 5xx range (server errors) and specifically means 'temporarily unable to handle the request.' This typically points to infrastructure: too many requests, server maintenance, or upstream dependencies being down.",
  },

  // ─── API Key / Auth Token ─────────────────────────────
  {
    id: "q_auth_t2d_1",
    conceptId: "auth",
    module: 2,
    type: "scenario",
    prompt:
      "A third-party service requires you to include a secret string in every request header so it can verify your identity before returning data. What concept is this?",
    options: [
      "API Key / Auth Token",
      "Rate Limiting",
      "HTTP Status Code",
      "Request Timeout",
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
      "\"The lock on your mailbox — only people with the right key can use it.\" What concept is this?",
    options: ["API Key / Auth Token","OAuth / SSO","CORS","Rate Limiting"],
    correctIndex: 0,
    explanation:
      "The mailbox lock analogy describes an API Key / Auth Token — it controls who can access the resource.",
  },
  {
    id: "q_auth_fib_1",
    conceptId: "auth",
    module: 2,
    type: "fill_in_blank",
    prompt:
      "Fill in the blank: API keys are typically sent in the request ___ to authenticate the caller.",
    options: ["header","URL path","response body","status code"],
    correctIndex: 0,
    explanation:
      "API keys are typically sent in request headers (e.g., Authorization: Bearer <token>). This keeps credentials out of URLs, which can be logged or cached.",
  },
  {
    id: "q_auth_tf_1",
    conceptId: "auth",
    module: 2,
    type: "true_false",
    prompt:
      "True or False: An API key and an auth token serve the same basic purpose — verifying who is making the request.",
    options: [
      "True — both are credentials that identify and authenticate the caller making requests",
      "False — API keys identify the application, but auth tokens handle data encryption only",
      "False — API keys enforce rate limits per client; they don't verify caller identity",
      "True — but API keys are significantly more secure than auth tokens in all cases",
    ],
    correctIndex: 0,
    explanation:
      "Both API keys and auth tokens serve as credentials. API keys typically identify the application, while auth tokens (like JWTs) identify the user. Both verify the caller.",
  },
  {
    id: "q_auth_scen_1",
    conceptId: "auth",
    module: 2,
    type: "scenario",
    prompt:
      "You get a 401 from an API. Your teammate says 'we're not authorized.' What's technically wrong with that statement?",
    options: [
      "401 means unauthenticated (identity not verified), not unauthorized — 403 means unauthorized",
      "Nothing is wrong — 401 and 'unauthorized' mean the same thing in HTTP terminology",
      "401 means the request was malformed or had invalid syntax, not an authentication problem",
      "401 only applies to OAuth-based flows and doesn't apply to API key authentication",
    ],
    correctIndex: 0,
    explanation:
      "401 = unauthenticated (who are you?). 403 = unauthorized (I know who you are, but you can't do this). The teammate confused the two — a common and important distinction.",
    whySection:
      "This distinction matters in debugging. A 401 means you need to provide or fix your credentials. A 403 means your credentials work but you don't have permission — a different fix entirely.",
  },
  {
    id: "q_auth_d2t_1",
    conceptId: "auth",
    module: 2,
    type: "def_to_term",
    prompt:
      "A secret string included in request headers that proves the caller's identity and permissions. What is this?",
    options: ["API Key / Auth Token","CORS header","Query parameter","Cookie"],
    correctIndex: 0,
    explanation:
      "This describes an API Key / Auth Token — a credential that authenticates the requester.",
  },
  {
    id: "q_auth_scen_2",
    conceptId: "auth",
    module: 2,
    type: "scenario",
    prompt:
      "Your teammate accidentally commits an API key to a public GitHub repo. What should they do?",
    options: [
      "Immediately revoke the key and generate a new one — the old key is compromised",
      "Delete the commit — removing it from the branch erases it from git history",
      "Rotate the key's permissions to read-only so it can't be misused by others",
      "Change the repo to private — that prevents anyone from seeing the key",
    ],
    correctIndex: 0,
    explanation:
      "Once a secret is pushed to a public repo, it's compromised forever (even if deleted, it's in git history). The only safe action is to revoke the key and issue a new one.",
  },

  // ─── Rate Limiting ────────────────────────────────────
  {
    id: "q_ratelimit_t2d_1",
    conceptId: "ratelimit",
    module: 2,
    type: "scenario",
    prompt:
      "An API needs to prevent any single client from overwhelming the server with too many requests per minute. What mechanism handles this?",
    options: [
      "Rate Limiting",
      "Load Balancing",
      "Request Timeout",
      "Authentication",
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
    options: ["Rate Limiting","Timeout","Throttling","Load Balancing"],
    correctIndex: 0,
    explanation:
      "This describes Rate Limiting — capping the number of requests to prevent abuse or overload.",
  },
  {
    id: "q_ratelimit_a2t_1",
    conceptId: "ratelimit",
    module: 2,
    type: "analogy_to_term",
    prompt:
      "\"A sign saying 'max 10 deliveries per hour.' The 11th carrier gets turned away.\" What concept is this?",
    options: ["Rate Limiting","Timeout","Load Balancing","Caching"],
    correctIndex: 0,
    explanation:
      "This describes Rate Limiting — putting a cap on how many requests are allowed in a time window.",
  },
  {
    id: "q_ratelimit_fib_1",
    conceptId: "ratelimit",
    module: 2,
    type: "fill_in_blank",
    prompt:
      "Fill in the blank: When you exceed a rate limit, the server returns a ___ status code.",
    options: ["429","404","500","301"],
    correctIndex: 0,
    explanation:
      "429 Too Many Requests is the specific status code for rate limiting. It tells the client to slow down.",
  },
  {
    id: "q_ratelimit_tf_1",
    conceptId: "ratelimit",
    module: 2,
    type: "true_false",
    prompt:
      "True or False: Rate limiting only protects against malicious attackers.",
    options: [
      "False — it also protects against bugs, traffic spikes, and accidental loops from legitimate clients",
      "True — legitimate users are whitelisted and never hit rate limits set by the server",
      "True — rate limiting is purely a security feature designed to block malicious traffic",
      "False — rate limiting only improves performance; it has no effect on security threats",
    ],
    correctIndex: 0,
    explanation:
      "Rate limiting protects against both malicious abuse AND accidental overload. A bug causing infinite API calls from your own app would be caught by rate limiting too.",
  },
  {
    id: "q_ratelimit_scen_1",
    conceptId: "ratelimit",
    module: 2,
    type: "scenario",
    prompt:
      "An API returns 429. What should your app do?",
    options: [
      "Back off and retry after a delay. Check the Retry-After header if present.",
      "Immediately retry the request — 429 is a temporary server glitch that resolves on its own",
      "Switch to a different API endpoint to route around the rate-limited one",
      "Cache the failed request on the client and skip it entirely to avoid future 429s",
    ],
    correctIndex: 0,
    explanation:
      "429 means 'Too Many Requests' — the server is rate-limiting you. Back off, wait (check Retry-After header), then retry. Hammering the server with retries will make it worse.",
    whySection:
      "Rate limiting protects the server from abuse and overload. The Retry-After header tells you exactly how long to wait. Implementing exponential backoff is the standard approach.",
  },

  // ─── Timeout ──────────────────────────────────────────
  {
    id: "q_timeout_t2d_1",
    conceptId: "timeout",
    module: 2,
    type: "scenario",
    prompt:
      "Your HTTP client waits 30 seconds for a server response and then gives up, treating the request as failed. What concept defines this maximum wait duration?",
    options: [
      "Timeout",
      "Rate Limit",
      "TTL (Time to Live)",
      "Retry Policy",
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
      "\"You rang the doorbell, waited 30 seconds, nobody answered. You leave.\" What concept is this?",
    options: ["Timeout","Rate Limiting","Polling","Sync vs Async"],
    correctIndex: 0,
    explanation:
      "This describes a Timeout — giving up after waiting too long for a response.",
  },
  {
    id: "q_timeout_d2t_1",
    conceptId: "timeout",
    module: 2,
    type: "def_to_term",
    prompt:
      "The maximum duration a client will wait for a server response before abandoning the request. What is this called?",
    options: ["Timeout","Rate Limit","Latency","TTL"],
    correctIndex: 0,
    explanation:
      "This describes a Timeout — the point at which the client gives up waiting.",
  },
  {
    id: "q_timeout_fib_1",
    conceptId: "timeout",
    module: 2,
    type: "fill_in_blank",
    prompt:
      "Fill in the blank: If a server doesn't respond within the configured ___, the client treats the request as failed.",
    options: ["timeout","rate limit","cache TTL","retry count"],
    correctIndex: 0,
    explanation:
      "The timeout is the maximum wait time. If exceeded, the client abandons the request and typically shows an error.",
  },
  {
    id: "q_timeout_tf_1",
    conceptId: "timeout",
    module: 2,
    type: "true_false",
    prompt:
      "True or False: Setting a very long timeout (like 5 minutes) is always better because it gives the server more time to respond.",
    options: [
      "False — long timeouts tie up client resources and frustrate users; it's better to fail fast and retry",
      "True — longer timeouts always improve reliability by giving the server enough time to respond",
      "True — the server needs as much time as possible, and users will wait if the data matters",
      "False — timeouts should always be set to exactly 30 seconds regardless of the use case",
    ],
    correctIndex: 0,
    explanation:
      "Long timeouts block the client and frustrate users. It's better to fail fast, show an error, and let the user retry. Most APIs use timeouts between 5-30 seconds.",
  },
  {
    id: "q_timeout_scen_1",
    conceptId: "timeout",
    module: 2,
    type: "scenario",
    prompt:
      "Your app hangs for 60 seconds before showing an error. Users think it's frozen. What's the fix?",
    options: [
      "Reduce the timeout to a shorter value (e.g., 10s) and show a loading indicator with a clear error on failure",
      "Remove the timeout entirely so the request always waits as long as needed for a server response",
      "Increase the timeout to 120 seconds to give the server more time to process the request fully",
      "Add a retry loop that automatically resends the request every 5 seconds until the server responds",
    ],
    correctIndex: 0,
    explanation:
      "A 60-second hang is a terrible user experience. Set a shorter timeout, show a spinner so users know something's happening, and display a clear error when it fails.",
  },
  {
    id: "q_timeout_win_1",
    conceptId: "timeout",
    module: 2,
    type: "which_is_not",
    prompt:
      "Which of the following is NOT a reason to configure timeouts?",
    options: ["To make the server process requests faster","To prevent the client from hanging indefinitely","To free up client resources when the server is unresponsive","To improve user experience by failing fast"],
    correctIndex: 0,
    explanation:
      "Timeouts don't make the server faster — they're a client-side mechanism. The server processes at its own speed. Timeouts just control how long the client is willing to wait.",
  },

  // ─── 2xx Status Codes ─────────────────────────────────
  {
    id: "q_status2xx_t2d_1",
    conceptId: "status2xx",
    module: 2,
    type: "scenario",
    prompt:
      "Your API successfully creates a user and returns a 201 code. Your GET request returns 200, and a successful DELETE returns 204. What category do all these codes belong to?",
    options: [
      "2xx Success Codes",
      "3xx Redirect Codes",
      "4xx Client Error Codes",
      "1xx Informational Codes",
    ],
    correctIndex: 0,
    explanation:
      "2xx codes mean success. 200 = OK, 201 = Created, 204 = No Content (success but nothing to return).",
  },
  {
    id: "q_status2xx_fib_1",
    conceptId: "status2xx",
    module: 2,
    type: "fill_in_blank",
    prompt:
      "Fill in the blank: After successfully creating a new resource (like a new user account), the server should return a ___ status code.",
    options: ["201 Created","200 OK","204 No Content","301 Moved"],
    correctIndex: 0,
    explanation:
      "201 Created specifically indicates that a new resource was successfully created. 200 is for general success, 204 means success with no response body.",
  },
  {
    id: "q_status2xx_scen_1",
    conceptId: "status2xx",
    module: 2,
    type: "scenario",
    prompt:
      "Your DELETE endpoint returns 200 with an empty body. A teammate suggests 204 instead. Why?",
    options: [
      "204 explicitly communicates 'success, nothing to return' — more semantically correct for deletions",
      "204 is faster because the server skips serializing and sending an empty response body",
      "200 is reserved for GET requests only and should not be used for DELETE operations",
      "204 is required by REST standards for all DELETE operations that remove a resource",
    ],
    correctIndex: 0,
    explanation:
      "204 No Content means 'I did it, but there's nothing to send back.' It's the most semantically appropriate response for a successful deletion.",
  },
  {
    id: "q_status2xx_tf_1",
    conceptId: "status2xx",
    module: 2,
    type: "true_false",
    prompt:
      "True or False: A 200 OK response always includes data in the response body.",
    options: [
      "False — a 200 can have an empty body; 204 is more appropriate when there's no content",
      "True — the HTTP spec requires every 200 response to include a non-empty response body",
      "True — if there's no body to return, the server must return a 404 Not Found instead",
      "False — 200 responses never include a body; the data is always sent via headers only",
    ],
    correctIndex: 0,
    explanation:
      "A 200 response may or may not have a body. However, when you intentionally return no body, 204 No Content is the more precise status code to use.",
  },
  {
    id: "q_status2xx_a2t_1",
    conceptId: "status2xx",
    module: 2,
    type: "analogy_to_term",
    prompt:
      "\"200 is a thumbs up. 201 is 'your new mailbox has been installed.' 204 is 'done, but I have nothing to hand you back.'\" What category of status codes is this?",
    options: ["2xx Success codes","3xx Redirect codes","4xx Client error codes","1xx Informational codes"],
    correctIndex: 0,
    explanation:
      "These are all 2xx success codes — each indicates success but with different nuances about what happened.",
  },
  {
    id: "q_status2xx_win_1",
    conceptId: "status2xx",
    module: 2,
    type: "which_is_not",
    prompt:
      "Which of the following is NOT a 2xx success status code?",
    options: ["301 Moved Permanently","200 OK","201 Created","204 No Content"],
    correctIndex: 0,
    explanation:
      "301 is a 3xx redirect code, not a success code. 200, 201, and 204 are all 2xx success codes.",
  },

  // ─── 4xx Status Codes ─────────────────────────────────
  {
    id: "q_status4xx_t2d_1",
    conceptId: "status4xx",
    module: 2,
    type: "scenario",
    prompt:
      "A user sends a malformed request and gets a 400, tries accessing a page without logging in and gets a 401, then requests a resource that doesn't exist and gets a 404. What category are these codes?",
    options: [
      "4xx Client Error Codes",
      "5xx Server Error Codes",
      "3xx Redirect Codes",
      "2xx Success Codes",
    ],
    correctIndex: 0,
    explanation:
      "4xx codes mean the client did something wrong. 400 = bad request, 401 = not authenticated, 403 = not authorized, 404 = not found, 429 = too many requests.",
  },
  {
    id: "q_status4xx_fib_1",
    conceptId: "status4xx",
    module: 2,
    type: "fill_in_blank",
    prompt:
      "Fill in the blank: A ___ status code means the server understood the request but refuses to authorize it — you're authenticated but don't have permission.",
    options: ["403 Forbidden","401 Unauthorized","404 Not Found","400 Bad Request"],
    correctIndex: 0,
    explanation:
      "403 Forbidden means 'I know who you are, but you can't do this.' 401 means 'I don't know who you are.' This is a critical distinction.",
  },
  {
    id: "q_status4xx_scen_1",
    conceptId: "status4xx",
    module: 2,
    type: "scenario",
    prompt:
      "A regular user tries to access the admin panel and gets a 403. They then log out and try again, getting a 401. What changed?",
    options: [
      "Logged in: 403 (known user, insufficient permissions). Logged out: 401 (unknown identity, must authenticate).",
      "403 and 401 both mean access denied — the server is returning inconsistent error codes for the same problem",
      "The admin panel was taken offline between the two requests, causing different errors each time",
      "403 means the page doesn't exist for that user; 401 means the session token format was invalid",
    ],
    correctIndex: 0,
    explanation:
      "When logged in, the server knew who they were but denied access (403). After logging out, the server didn't know who they were at all (401). Two different problems, two different status codes.",
  },
  {
    id: "q_status4xx_tf_1",
    conceptId: "status4xx",
    module: 2,
    type: "true_false",
    prompt:
      "True or False: A 404 Not Found always means the page or resource doesn't exist.",
    options: [
      "False — servers sometimes return 404 to hide that a resource exists, for security reasons",
      "True — 404 always means the resource genuinely does not exist on the server anywhere",
      "True — if the resource existed but was restricted, the server would return 200 instead",
      "False — 404 actually indicates the server is temporarily down and cannot serve content",
    ],
    correctIndex: 0,
    explanation:
      "Servers sometimes return 404 for security reasons — to avoid revealing that a resource exists to unauthorized users. For example, GitHub returns 404 for private repos you can't access, not 403.",
  },
  {
    id: "q_status4xx_a2t_1",
    conceptId: "status4xx",
    module: 2,
    type: "analogy_to_term",
    prompt:
      "\"400: 'Your letter is unreadable.' 401: 'Who are you?' 403: 'I know who you are, but no.' 404: 'That address doesn't exist.'\" What category of status codes is this?",
    options: ["4xx Client error codes","5xx Server error codes","2xx Success codes","3xx Redirect codes"],
    correctIndex: 0,
    explanation:
      "These are all 4xx client error codes — the problem is on the client's side, whether it's a bad request, missing credentials, or wrong URL.",
  },
  {
    id: "q_status4xx_d2t_1",
    conceptId: "status4xx",
    module: 2,
    type: "def_to_term",
    prompt:
      "Status codes where the error is on the client's side — bad request, not authenticated, forbidden, or not found. What category is this?",
    options: ["4xx Client Errors","5xx Server Errors","3xx Redirects","2xx Success"],
    correctIndex: 0,
    explanation:
      "4xx codes indicate client errors — the request was somehow wrong, and the client needs to fix it before retrying.",
  },
  {
    id: "q_status4xx_scen_2",
    conceptId: "status4xx",
    module: 2,
    type: "scenario",
    prompt:
      "Your API receives a POST request with malformed JSON (missing a closing brace). What status code should it return?",
    options: ["400 Bad Request — the request body is syntactically invalid","404 Not Found — the endpoint couldn't parse the data","500 Internal Server Error — the server couldn't process it","422 Unprocessable Entity — the JSON is wrong"],
    correctIndex: 0,
    explanation:
      "400 Bad Request is for malformed syntax — the request is unreadable. 422 would be for valid syntax but invalid semantics (e.g., email field contains a number).",
  },

  // ─── 5xx Status Codes ─────────────────────────────────
  {
    id: "q_status5xx_t2d_1",
    conceptId: "status5xx",
    module: 2,
    type: "scenario",
    prompt:
      "Your request was valid, but the server returns a 500 because of an unhandled exception in its code. A different request gets a 503 because the server is overloaded. What category are these codes?",
    options: [
      "5xx Server Error Codes",
      "4xx Client Error Codes",
      "3xx Redirect Codes",
      "2xx Success Codes",
    ],
    correctIndex: 0,
    explanation:
      "5xx codes mean the server broke. 500 = generic failure, 502 = bad upstream response, 503 = overloaded/maintenance, 504 = upstream timeout.",
  },
  {
    id: "q_status5xx_a2t_1",
    conceptId: "status5xx",
    module: 2,
    type: "analogy_to_term",
    prompt:
      "\"500: 'The post office caught fire.' 502: 'The warehouse sent back gibberish.' 503: 'We're closed for the day.' 504: 'The warehouse took too long to respond.'\" What category is this?",
    options: ["5xx Server error codes","4xx Client error codes","3xx Redirect codes","2xx Success codes"],
    correctIndex: 0,
    explanation:
      "These are 5xx server errors — the client's request was valid, but the server couldn't handle it.",
  },
  {
    id: "q_status5xx_fib_1",
    conceptId: "status5xx",
    module: 2,
    type: "fill_in_blank",
    prompt:
      "Fill in the blank: A ___ error means a server acting as a gateway received an invalid response from an upstream server.",
    options: ["502 Bad Gateway","500 Internal Server Error","503 Service Unavailable","504 Gateway Timeout"],
    correctIndex: 0,
    explanation:
      "502 Bad Gateway specifically means the gateway/proxy server got an invalid response from the upstream server it was forwarding to.",
  },
  {
    id: "q_status5xx_scen_1",
    conceptId: "status5xx",
    module: 2,
    type: "scenario",
    prompt:
      "Your app returns 500 errors intermittently. Sometimes it works, sometimes it doesn't. What's the most likely cause?",
    options: [
      "An unhandled exception in your code that only triggers under certain conditions (specific data, race condition, or resource exhaustion)",
      "The client is randomly sending malformed requests that the server cannot parse correctly",
      "The load balancer is routing some requests to a server running an older version",
      "The SSL certificate is intermittently expiring and causing connection resets",
    ],
    correctIndex: 0,
    explanation:
      "Intermittent 500 errors typically point to unhandled edge cases — null values, race conditions, database connection pool exhaustion, or memory issues that only surface under certain conditions.",
  },
  {
    id: "q_status5xx_tf_1",
    conceptId: "status5xx",
    module: 2,
    type: "true_false",
    prompt:
      "True or False: If you get a 5xx error, it's always the server team's fault, never the client's.",
    options: [
      "True — 5xx means the server failed to handle a valid request; the client did nothing wrong",
      "False — 5xx errors can be triggered by the client sending payloads that are too large",
      "False — 5xx codes are sometimes returned when the client sends syntactically invalid data",
      "True — but only for 500 Internal Server Error, not for 502 Bad Gateway or 503 codes",
    ],
    correctIndex: 0,
    explanation:
      "By definition, 5xx errors mean the server failed. Even if the root cause is upstream, the server that returned the 5xx is responsible for handling the situation gracefully.",
  },
  {
    id: "q_status5xx_d2t_1",
    conceptId: "status5xx",
    module: 2,
    type: "def_to_term",
    prompt:
      "A 503 status code meaning the server is temporarily unable to handle the request, usually due to overload or maintenance. What is this called?",
    options: ["Service Unavailable","Bad Gateway","Internal Server Error","Gateway Timeout"],
    correctIndex: 0,
    explanation:
      "503 Service Unavailable means the server is temporarily down — usually overloaded or in maintenance. It implies the problem is temporary.",
  },

  // ─── HTTP Headers ─────────────────────────────────────
  {
    id: "q_headers_t2d_1",
    conceptId: "headers",
    module: 2,
    type: "scenario",
    prompt:
      "You need to attach metadata to your API request — specifying the data format, including auth credentials, and setting cache directives — without putting any of it in the URL or body. What carries this metadata?",
    options: [
      "HTTP Headers",
      "Query Parameters",
      "HTTP Methods",
      "Status Codes",
    ],
    correctIndex: 0,
    explanation:
      "HTTP Headers are key-value metadata attached to requests and responses. They carry info like what format the data is in, authentication credentials, and caching instructions.",
  },
  {
    id: "q_headers_d2t_1",
    conceptId: "headers",
    module: 2,
    type: "def_to_term",
    prompt:
      "Key-value metadata sent alongside HTTP requests and responses, including info like content type, authorization, and cache directives. What are these?",
    options: ["HTTP Headers","Query Parameters","HTTP Methods","Status Codes"],
    correctIndex: 0,
    explanation:
      "These are HTTP Headers — the metadata that accompanies every HTTP request and response.",
  },
  {
    id: "q_headers_a2t_1",
    conceptId: "headers",
    module: 2,
    type: "analogy_to_term",
    prompt:
      "\"The label on a package — it tells the carrier what's inside, how to handle it, and where it came from, without opening the box.\" What concept is this?",
    options: ["HTTP Headers","HTTP Methods","Query Parameters","API Endpoint"],
    correctIndex: 0,
    explanation:
      "Headers are like package labels — metadata about the content without being the content itself.",
  },
  {
    id: "q_headers_fib_1",
    conceptId: "headers",
    module: 2,
    type: "fill_in_blank",
    prompt:
      "Fill in the blank: The ___ header tells the server what data format the client wants to receive (e.g., application/json).",
    options: ["Accept","Content-Type","Authorization","Cache-Control"],
    correctIndex: 0,
    explanation:
      "The Accept header tells the server what format the client wants back. Content-Type tells the server what format the client is sending. They're complementary.",
  },
  {
    id: "q_headers_scen_1",
    conceptId: "headers",
    module: 2,
    type: "scenario",
    prompt:
      "Your API request sends JSON in the body but the server returns '415 Unsupported Media Type.' What did you forget?",
    options: [
      "The Content-Type header — set it to 'application/json' so the server knows the body format",
      "The Accept header — the server doesn't know what response format the client expects",
      "The Authorization header — without valid credentials the server rejects the request",
      "The request body encoding — the JSON needs to be base64 encoded before sending it",
    ],
    correctIndex: 0,
    explanation:
      "415 means the server doesn't understand the format you sent. Setting Content-Type: application/json tells the server 'the body I'm sending is JSON' so it can parse it correctly.",
  },
  {
    id: "q_headers_win_1",
    conceptId: "headers",
    module: 2,
    type: "which_is_not",
    prompt:
      "Which of the following is NOT a standard HTTP header?",
    options: ["Method-Type","Content-Type","Authorization","Cache-Control"],
    correctIndex: 0,
    explanation:
      "Method-Type is not a real header. The HTTP method (GET, POST, etc.) is specified in the request line, not as a header. Content-Type, Authorization, and Cache-Control are all standard headers.",
  },
  {
    id: "q_headers_tf_1",
    conceptId: "headers",
    module: 2,
    type: "true_false",
    prompt:
      "True or False: Content-Type and Accept headers serve the same purpose.",
    options: [
      "False — Content-Type describes the format being sent; Accept describes the format wanted back",
      "True — both headers specify the data format and are interchangeable in HTTP requests",
      "True — they are aliases for the same header, standardized under different HTTP versions",
      "False — Accept is a deprecated header that was removed from the HTTP/2 specification",
    ],
    correctIndex: 0,
    explanation:
      "Content-Type says 'I'm sending you JSON.' Accept says 'I want JSON back.' They're complementary but different — one describes the request body, the other describes the desired response.",
  },

  // ─── Webhook ──────────────────────────────────────────
  {
    id: "q_webhook_t2d_1",
    conceptId: "webhook",
    module: 3,
    type: "scenario",
    prompt:
      "Stripe needs to notify your server the instant a payment succeeds, so it sends an HTTP POST to a URL you registered. What is this push-based notification mechanism called?",
    options: [
      "Webhook",
      "API Polling",
      "WebSocket",
      "Server-Sent Events",
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
    options: ["Webhook","API Polling","REST API","Middleware"],
    correctIndex: 0,
    explanation:
      "This describes a Webhook — the server notifies you instead of you having to ask repeatedly.",
  },
  {
    id: "q_webhook_a2t_1",
    conceptId: "webhook",
    module: 3,
    type: "analogy_to_term",
    prompt:
      "\"A doorbell — the carrier rings it the moment they drop something off, instead of you checking the porch every 10 minutes.\" What concept is this?",
    options: ["Webhook","API Polling","Rate Limiting","Caching"],
    correctIndex: 0,
    explanation:
      "The doorbell analogy describes a Webhook — instant notification when an event occurs.",
  },
  {
    id: "q_webhook_fib_1",
    conceptId: "webhook",
    module: 3,
    type: "fill_in_blank",
    prompt:
      "Fill in the blank: Webhooks are ___-based, meaning the server pushes data to the client when events occur, rather than the client requesting it.",
    options: ["push","pull","poll","cache"],
    correctIndex: 0,
    explanation:
      "Webhooks are push-based — the server initiates the communication when an event happens. This is the opposite of polling, which is pull-based.",
  },
  {
    id: "q_webhook_tf_1",
    conceptId: "webhook",
    module: 3,
    type: "true_false",
    prompt:
      "True or False: If your server is down when a webhook fires, the notification is permanently lost.",
    options: [
      "False — most providers retry failed deliveries, but your server must handle duplicates (idempotency)",
      "True — webhooks are strictly fire-and-forget; the provider never retries a failed delivery",
      "False — missed webhooks are queued in the browser cache and delivered when the server recovers",
      "True — webhook delivery requires both the sender and receiver to be online at the same time",
    ],
    correctIndex: 0,
    explanation:
      "Most webhook providers retry failed deliveries. But this means you might receive the same event multiple times, so your handler must be idempotent.",
  },
  {
    id: "q_webhook_scen_1",
    conceptId: "webhook",
    module: 3,
    type: "scenario",
    prompt:
      "A payment webhook fires but your server was down. What happens to that payment notification?",
    options: [
      "It's lost unless the webhook provider has a retry mechanism — which is why idempotency matters",
      "It's automatically queued by the provider and guaranteed to be delivered when your server recovers",
      "The payment processor holds the transaction in a pending state until your webhook endpoint responds",
      "The notification is stored in a dead-letter queue that your server automatically polls on startup",
    ],
    correctIndex: 0,
    explanation:
      "Webhooks are push-based — if your server can't receive it, it's lost. Good webhook providers retry, but your system must handle receiving the same event twice (idempotency).",
    whySection:
      "This scenario connects webhooks and idempotency. When the provider retries, your system might receive the same payment notification multiple times. Without idempotent handling, you might process the payment twice.",
  },
  {
    id: "q_webhook_scen_2",
    conceptId: "webhook",
    module: 3,
    type: "scenario",
    prompt:
      "You're building a Slack bot that responds when someone mentions your app. Should you use polling or webhooks?",
    options: [
      "Webhooks — Slack sends an HTTP POST to your server instantly when someone mentions your app",
      "Polling — check Slack's API every second for new mentions and respond when found",
      "Neither — you need WebSockets for real-time chat features like mention notifications",
      "Polling — webhooks can't work with chat applications that have high message volume",
    ],
    correctIndex: 0,
    explanation:
      "Webhooks are ideal here — Slack pushes events to your server in real-time. Polling every second would be wasteful, slow, and likely hit rate limits.",
  },

  // ─── API Polling ──────────────────────────────────────
  {
    id: "q_polling_t2d_1",
    conceptId: "polling",
    module: 3,
    type: "scenario",
    prompt:
      "Your app checks an external API every 30 seconds to see if new data is available, even though most checks return nothing new. What is this pattern called?",
    options: [
      "API Polling",
      "Webhook",
      "WebSocket",
      "Event Streaming",
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
      "\"Walking to the mailbox every hour to check for letters.\" What concept does this describe?",
    options: ["API Polling","Webhook","Rate Limiting","Caching"],
    correctIndex: 0,
    explanation:
      "This describes API Polling — repeatedly checking for updates at regular intervals.",
  },
  {
    id: "q_polling_d2t_1",
    conceptId: "polling",
    module: 3,
    type: "def_to_term",
    prompt:
      "Repeatedly requesting data from a server at fixed intervals to check for changes. What is this called?",
    options: ["Polling","Webhook","Streaming","Caching"],
    correctIndex: 0,
    explanation:
      "This describes Polling — the client-driven approach of periodically asking 'anything new?'",
  },
  {
    id: "q_polling_fib_1",
    conceptId: "polling",
    module: 3,
    type: "fill_in_blank",
    prompt:
      "Fill in the blank: Polling is ___-based, meaning the client repeatedly asks the server for updates.",
    options: ["pull","push","event","stream"],
    correctIndex: 0,
    explanation:
      "Polling is pull-based — the client initiates every request. The opposite of push-based webhooks where the server initiates.",
  },
  {
    id: "q_polling_tf_1",
    conceptId: "polling",
    module: 3,
    type: "true_false",
    prompt:
      "True or False: Polling is always less efficient than webhooks.",
    options: [
      "False — polling is simpler and useful when webhooks aren't available or you need predictable intervals",
      "True — polling always wastes server resources compared to webhooks, regardless of the use case",
      "True — polling was fully replaced by webhooks in modern architectures and is never used today",
      "False — polling is actually more efficient than webhooks because it uses less total bandwidth",
    ],
    correctIndex: 0,
    explanation:
      "Polling has valid use cases: when webhooks aren't supported, when your server isn't publicly accessible, or when you need data on a predictable schedule. It's simpler to implement too.",
  },
  {
    id: "q_polling_scen_1",
    conceptId: "polling",
    module: 3,
    type: "scenario",
    prompt:
      "Why would you use polling over a webhook?",
    options: [
      "When the external service doesn't support webhooks, or when you need data at predictable intervals",
      "Polling is always more efficient than webhooks because it reduces total network requests",
      "Webhooks require WebSocket support, which most REST APIs don't provide natively",
      "Polling is more secure because your server never needs a publicly accessible endpoint",
    ],
    correctIndex: 0,
    explanation:
      "Polling is the fallback when webhooks aren't available. It's also useful when you need data on a schedule rather than in response to events. Webhooks are generally preferred when available.",
    whySection:
      "Webhooks are event-driven and more efficient. But not all services support them. Polling gives you control over timing and doesn't require your server to be publicly accessible to receive callbacks.",
  },

  // ─── API Gateway ──────────────────────────────────────
  {
    id: "q_gateway_t2d_1",
    conceptId: "gateway",
    module: 3,
    type: "scenario",
    prompt:
      "Your microservices architecture needs a single entry point that handles authentication, rate limiting, and routing requests to the correct backend service. What component provides this?",
    options: [
      "API Gateway",
      "Load Balancer",
      "Reverse Proxy",
      "DNS Server",
    ],
    correctIndex: 0,
    explanation:
      "An API Gateway is the single front door for all API traffic — like the front gate of a gated community where every visitor checks in before being directed to the right house.",
  },
  {
    id: "q_gateway_d2t_1",
    conceptId: "gateway",
    module: 3,
    type: "def_to_term",
    prompt:
      "A single entry point for all API traffic that handles authentication, rate limiting, and routing to the appropriate backend service. What is this?",
    options: ["API Gateway","Load Balancer","Middleware","CDN"],
    correctIndex: 0,
    explanation:
      "This describes an API Gateway — the centralized front door for all API requests.",
  },
  {
    id: "q_gateway_a2t_1",
    conceptId: "gateway",
    module: 3,
    type: "analogy_to_term",
    prompt:
      "\"The front gate of a gated community — every carrier checks in, gets verified, then directed to the right house.\" What concept is this?",
    options: ["API Gateway","Load Balancer","Middleware","DNS"],
    correctIndex: 0,
    explanation:
      "The gated community front gate describes an API Gateway — centralized entry with authentication and routing.",
  },
  {
    id: "q_gateway_fib_1",
    conceptId: "gateway",
    module: 3,
    type: "fill_in_blank",
    prompt:
      "Fill in the blank: In a microservices architecture, an ___ provides a single entry point so clients don't need to know about individual service URLs.",
    options: ["API Gateway","Load Balancer","CDN","DNS server"],
    correctIndex: 0,
    explanation:
      "An API Gateway abstracts the microservices behind a single URL. Clients call the gateway, which routes to the right service internally.",
  },
  {
    id: "q_gateway_tf_1",
    conceptId: "gateway",
    module: 3,
    type: "true_false",
    prompt:
      "True or False: An API Gateway and a Load Balancer do the same thing.",
    options: [
      "False — a gateway handles auth, routing, and rate limiting; a load balancer distributes traffic evenly",
      "True — both components route traffic to backend servers and are functionally interchangeable",
      "True — the terms refer to the same component but evolved from different vendor naming conventions",
      "False — load balancers are always physical hardware; gateways are always cloud-based software",
    ],
    correctIndex: 0,
    explanation:
      "An API Gateway is smarter — it routes to different services, handles auth, rate limiting, and transformations. A Load Balancer just distributes identical traffic across copies of the same service.",
  },
  {
    id: "q_gateway_scen_1",
    conceptId: "gateway",
    module: 3,
    type: "scenario",
    prompt:
      "Your company has 15 microservices. Mobile developers complain about needing to know 15 different URLs. What's the solution?",
    options: [
      "An API Gateway — one URL that routes requests to the correct microservice internally",
      "A load balancer — distribute traffic evenly across all 15 microservices",
      "A service registry — let each client discover service URLs dynamically at runtime",
      "A reverse proxy — cache responses from all 15 services to reduce direct connections",
    ],
    correctIndex: 0,
    explanation:
      "An API Gateway provides a single entry point. Mobile developers call one URL, and the gateway handles routing to the correct microservice based on the request path.",
  },
  {
    id: "q_gateway_win_1",
    conceptId: "gateway",
    module: 3,
    type: "which_is_not",
    prompt:
      "Which of the following is NOT a typical responsibility of an API Gateway?",
    options: ["Storing application data in a database","Routing requests to the correct backend service","Authenticating incoming requests","Rate limiting API traffic"],
    correctIndex: 0,
    explanation:
      "API Gateways don't store data — that's the database's job. Gateways handle routing, authentication, rate limiting, and request transformation.",
  },

  // ─── Middleware ───────────────────────────────────────
  {
    id: "q_middleware_t2d_1",
    conceptId: "middleware",
    module: 3,
    type: "scenario",
    prompt:
      "In your Express app, every request needs to be logged, checked for authentication, and have its body parsed — all before reaching the route handler. What layer handles these cross-cutting concerns?",
    options: [
      "Middleware",
      "API Gateway",
      "Load Balancer",
      "Service Worker",
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
      "\"The mail room in your building — it sorts, scans, and routes letters before they reach your desk.\" What concept is this?",
    options: ["Middleware","API Gateway","Load Balancer","Message Queue"],
    correctIndex: 0,
    explanation:
      "The mail room analogy describes Middleware — processing requests before they reach their final destination.",
  },
  {
    id: "q_middleware_d2t_1",
    conceptId: "middleware",
    module: 3,
    type: "def_to_term",
    prompt:
      "Code that runs between receiving a request and sending a response, performing cross-cutting tasks like logging, authentication, and error handling. What is this?",
    options: ["Middleware","API Gateway","Webhook","Load Balancer"],
    correctIndex: 0,
    explanation:
      "This describes Middleware — the intermediary layer that processes requests on their way to the handler.",
  },
  {
    id: "q_middleware_fib_1",
    conceptId: "middleware",
    module: 3,
    type: "fill_in_blank",
    prompt:
      "Fill in the blank: In Express.js, ___ functions have access to the request, response, and next() function, and run before the route handler.",
    options: ["middleware","webhook","gateway","controller"],
    correctIndex: 0,
    explanation:
      "Express middleware functions sit in the request pipeline. They can modify req/res, end the request, or call next() to pass control to the next middleware.",
  },
  {
    id: "q_middleware_tf_1",
    conceptId: "middleware",
    module: 3,
    type: "true_false",
    prompt:
      "True or False: Middleware can stop a request from reaching the route handler (e.g., by rejecting unauthenticated users).",
    options: [
      "True — auth middleware can check credentials and return a 401 before the handler runs",
      "False — middleware can only attach data to the request; it cannot block or reject it",
      "False — only API gateways have the ability to block requests from reaching handlers",
      "True — but only by throwing an unhandled error, which crashes the entire server process",
    ],
    correctIndex: 0,
    explanation:
      "Middleware absolutely can halt the request pipeline. Auth middleware commonly checks for valid credentials and returns 401/403 without ever reaching the route handler.",
  },
  {
    id: "q_middleware_scen_1",
    conceptId: "middleware",
    module: 3,
    type: "scenario",
    prompt:
      "You need to log every API request, check authentication, and validate the request body — all before processing. Where does this logic go?",
    options: [
      "Middleware — each concern becomes a separate middleware that runs in sequence before the route handler",
      "The route handler — logging, auth, and validation should all be handled inside each route function",
      "The API gateway — these concerns should be centralized at the infrastructure level, not in app code",
      "A separate microservice for each concern — one for logging, one for auth, one for validation",
    ],
    correctIndex: 0,
    explanation:
      "Middleware is perfect for cross-cutting concerns like logging, auth, and validation. Each becomes its own middleware function, running in order before the actual route handler.",
  },
  {
    id: "q_middleware_win_1",
    conceptId: "middleware",
    module: 3,
    type: "which_is_not",
    prompt:
      "Which of the following is NOT a common use of middleware?",
    options: ["Rendering HTML templates to the browser","Logging incoming requests","Checking authentication tokens","Parsing request bodies (JSON, form data)"],
    correctIndex: 0,
    explanation:
      "Rendering templates is the route handler's job, not middleware. Common middleware tasks are: logging, auth checks, body parsing, CORS headers, and error handling.",
  },

  // ─── Code Snippet Questions ────────────────────────────

  {
    id: "q_ratelimit_code_1",
    conceptId: "ratelimit",
    module: 2,
    type: "code_snippet",
    codeSnippet: `HTTP/1.1 429 Too Many Requests
Retry-After: 60
X-RateLimit-Limit: 100
X-RateLimit-Remaining: 0
X-RateLimit-Reset: 1700000060`,
    prompt: "Your API integration is receiving this response. What should your code do next?",
    options: [
      "Wait 60 seconds (per Retry-After header) before retrying the request",
      "Immediately retry the request with a different API key to reset the rate counter",
      "Switch to a batch endpoint that combines multiple requests into a single call",
      "Reduce the request payload size so the server processes it below the rate threshold",
    ],
    correctIndex: 0,
    explanation: "429 Too Many Requests means you've hit the rate limit. Retry-After tells you exactly how long to wait. Well-behaved API clients respect this and implement exponential backoff — retrying immediately or hammering with more requests will get you banned or blocked longer.",
  },
  {
    id: "q_status4xx_code_1",
    conceptId: "status4xx",
    module: 2,
    type: "code_snippet",
    codeSnippet: `HTTP/1.1 403 Forbidden
Content-Type: application/json

{
  "error": "Insufficient permissions",
  "required_role": "admin"
}`,
    prompt: "A logged-in user gets this response when accessing /admin/settings. Which statement best explains it?",
    options: [
      "The server knows who the user is, but they lack the 'admin' role needed for this resource",
      "The user's session has expired and they need to re-authenticate by logging in again",
      "The /admin/settings endpoint doesn't exist on this server and needs to be created",
      "The server is temporarily unavailable due to high load and the user should retry later",
    ],
    correctIndex: 0,
    explanation: "403 Forbidden = authenticated but not authorized. The server knows who you are but won't let you in. This differs from 401 Unauthorized, which means the server doesn't know who you are yet. 401 = 'who are you?', 403 = 'I know who you are, but no.'",
  },
  {
    id: "q_headers_code_1",
    conceptId: "headers",
    module: 2,
    type: "code_snippet",
    codeSnippet: `GET /api/products HTTP/1.1
Host: api.example.com
Authorization: Bearer eyJhbGci...
Accept: application/json
Content-Type: application/json`,
    prompt: "What is the purpose of the 'Accept: application/json' header in this request?",
    options: [
      "It tells the server what format the client wants the response in",
      "It specifies the format of the data the client is sending in the request body",
      "It verifies the client's identity with the server",
      "It enables CORS by telling the server to accept cross-origin requests",
    ],
    correctIndex: 0,
    explanation: "Accept tells the server what format you want back — 'please respond in JSON.' Content-Type describes what you're sending in the request body. Authorization handles identity. These are three separate headers doing three separate jobs.",
  },
];
