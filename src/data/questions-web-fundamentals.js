// ═══════════════════════════════════════════════════════
// WEB FUNDAMENTALS
// Concepts: httpcycle, urlstructure, state, dom, promises, eventloop
// ═══════════════════════════════════════════════════════

export const QUESTIONS_WEB_FUNDAMENTALS = [
  // ─── HTTP Request Lifecycle ───────────────────────────
  {
    id: "q_httpcycle_t2d_1",
    conceptId: "httpcycle",
    module: 1,
    type: "term_to_def",
    prompt:
      "What is the HTTP Request Lifecycle?",
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
      "\"Ordering a package: look up the store's address → establish a delivery route → verify it's legit → place your order → warehouse packs it → package delivered → you unbox it.\" What concept is this?",
    options: ["HTTP Request Lifecycle","CI/CD","REST API","Message Queue"],
    correctIndex: 0,
    explanation:
      "This step-by-step package ordering analogy describes the HTTP Request Lifecycle — each step maps to DNS, TCP, TLS, request, processing, response, and rendering.",
  },
  {
    id: "q_httpcycle_fib_1",
    conceptId: "httpcycle",
    module: 1,
    type: "fill_in_blank",
    prompt:
      "Fill in the blank: The first step in the HTTP request lifecycle is a ___ lookup to translate the domain name into an IP address.",
    options: ["DNS","TCP","TLS","HTTP"],
    correctIndex: 0,
    explanation:
      "DNS lookup is the first step — the browser needs to find the server's IP address before it can connect to it.",
  },
  {
    id: "q_httpcycle_win_1",
    conceptId: "httpcycle",
    module: 1,
    type: "which_is_not",
    prompt:
      "Which of the following is NOT a step in the HTTP request lifecycle?",
    options: ["Database migration","DNS lookup","TCP connection","TLS handshake"],
    correctIndex: 0,
    explanation:
      "Database migration is a development task, not part of the HTTP request lifecycle. The lifecycle is: DNS → TCP → TLS → request → server processing → response → render.",
  },
  {
    id: "q_httpcycle_tf_1",
    conceptId: "httpcycle",
    module: 1,
    type: "true_false",
    prompt:
      "True or False: The TLS handshake happens before the TCP connection is established.",
    options: [
      "False — TCP must be established first, then TLS encrypts that connection",
      "True — TLS sets up encryption before any connection is made",
      "True — TLS and TCP happen simultaneously",
      "False — TLS is not part of the HTTP lifecycle",
    ],
    correctIndex: 0,
    explanation:
      "TCP establishes the connection first (the 3-way handshake). Only then does TLS negotiate encryption on top of that connection. You need the pipe before you can secure it.",
  },
  {
    id: "q_httpcycle_scen_1",
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
    id: "q_httpcycle_scen_2",
    conceptId: "httpcycle",
    module: 1,
    type: "scenario",
    prompt:
      "A user reports that a website loads slowly on the first visit but fast on subsequent visits. Which lifecycle steps are likely being skipped?",
    options: [
      "DNS lookup and TCP/TLS handshake — the browser caches the DNS result and reuses the connection",
      "The server processing — the server remembers the user",
      "The HTTP request — the browser doesn't send a request the second time",
      "The rendering — the browser skips rendering on repeat visits",
    ],
    correctIndex: 0,
    explanation:
      "Browsers cache DNS results and keep TCP connections alive (HTTP keep-alive). On subsequent visits, these expensive setup steps are skipped, making the page load faster.",
  },

  // ─── URL Structure ────────────────────────────────────
  {
    id: "q_urlstructure_t2d_1",
    conceptId: "urlstructure",
    module: 1,
    type: "term_to_def",
    prompt:
      "What are the main parts of a URL?",
    options: [
      "Protocol (https://), domain (example.com), path (/page), query parameters (?key=value), and fragment (#section)",
      "Header, body, footer, and signature",
      "Method, endpoint, status code, and response",
      "DNS, TCP, TLS, and HTTP",
    ],
    correctIndex: 0,
    explanation:
      "A URL has 5 key parts: protocol (how to connect), domain (where to connect), path (what resource), query params (extra instructions), and fragment (where on the page).",
  },
  {
    id: "q_urlstructure_d2t_1",
    conceptId: "urlstructure",
    module: 1,
    type: "def_to_term",
    prompt:
      "Protocol, domain, path, query parameters, and fragment — these are the components of what?",
    options: ["A URL","An HTTP header","A JSON object","A DNS record"],
    correctIndex: 0,
    explanation:
      "These are the components of a URL (Uniform Resource Locator) — the full address used to locate a resource on the web.",
  },
  {
    id: "q_urlstructure_a2t_1",
    conceptId: "urlstructure",
    module: 1,
    type: "analogy_to_term",
    prompt:
      "\"A full mailing address: the delivery service (protocol), the city (domain), the street address (path), special delivery instructions (query params), and Attention: Room 2B (fragment).\" What concept is this?",
    options: ["URL Structure","HTTP Request Lifecycle","DNS","API Gateway"],
    correctIndex: 0,
    explanation:
      "This mailing address analogy describes URL Structure — each part of the URL serves a different purpose in locating the resource.",
  },
  {
    id: "q_urlstructure_fib_1",
    conceptId: "urlstructure",
    module: 1,
    type: "fill_in_blank",
    prompt:
      "Fill in the blank: In the URL https://example.com/search?q=hello, the '?q=hello' part is called a ___.",
    options: ["query parameter","fragment","path","protocol"],
    correctIndex: 0,
    explanation:
      "The ?key=value portion of a URL is a query parameter. It passes extra data to the server, like search terms or filters.",
  },
  {
    id: "q_urlstructure_scen_1",
    conceptId: "urlstructure",
    module: 1,
    type: "scenario",
    prompt:
      "You see this URL: https://shop.com/products?category=shoes&sort=price#reviews. What does '#reviews' do?",
    options: [
      "It's a fragment — it tells the browser to scroll to the 'reviews' section of the page",
      "It filters products to only show reviews",
      "It sends 'reviews' as a query parameter to the server",
      "It redirects to a different page called 'reviews'",
    ],
    correctIndex: 0,
    explanation:
      "The fragment (#reviews) is client-side only — it tells the browser to jump to an element with id='reviews' on the page. It's never sent to the server.",
  },
  {
    id: "q_urlstructure_tf_1",
    conceptId: "urlstructure",
    module: 1,
    type: "true_false",
    prompt:
      "True or False: The fragment (#section) part of a URL is sent to the server with the request.",
    options: [
      "False — fragments are client-side only; the browser uses them but never sends them to the server",
      "True — the server needs the fragment to know which section to return",
      "True — fragments are included in the HTTP request headers",
      "False — fragments don't exist in URLs; they're only used in HTML",
    ],
    correctIndex: 0,
    explanation:
      "Fragments are purely client-side. The browser strips the # and everything after it before sending the request to the server. They're used for in-page navigation only.",
  },
  {
    id: "q_urlstructure_win_1",
    conceptId: "urlstructure",
    module: 1,
    type: "which_is_not",
    prompt:
      "Which of the following is NOT a part of a URL?",
    options: ["Status code","Protocol","Domain","Query parameters"],
    correctIndex: 0,
    explanation:
      "Status codes are part of the HTTP response, not the URL. The URL contains: protocol, domain, path, query parameters, and fragment.",
  },

  // ─── State Management ─────────────────────────────────
  {
    id: "q_state_t2d_1",
    conceptId: "state",
    module: 4,
    type: "term_to_def",
    prompt:
      "What is State Management?",
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
      "\"A scoreboard at a stadium — tracking the score and telling the crew to update the display when it changes.\" What concept is this?",
    options: ["State Management","Cache Invalidation","Event Loop","DOM"],
    correctIndex: 0,
    explanation:
      "The scoreboard analogy describes State Management — keeping data and UI in sync.",
  },
  {
    id: "q_state_d2t_1",
    conceptId: "state",
    module: 4,
    type: "def_to_term",
    prompt:
      "Tracking data that changes over time in an application and ensuring the UI updates to reflect those changes. What is this?",
    options: ["State Management","Cache Invalidation","Middleware","CORS"],
    correctIndex: 0,
    explanation:
      "This describes State Management — the system that keeps your app's data and UI in sync.",
  },
  {
    id: "q_state_fib_1",
    conceptId: "state",
    module: 4,
    type: "fill_in_blank",
    prompt:
      "Fill in the blank: In React, ___ is used to declare state variables in functional components.",
    options: ["useState","setState","createState","initState"],
    correctIndex: 0,
    explanation:
      "React's useState hook is the primary way to manage state in functional components. It returns the current value and a setter function.",
  },
  {
    id: "q_state_tf_1",
    conceptId: "state",
    module: 4,
    type: "true_false",
    prompt:
      "True or False: State management is only needed for large, complex applications.",
    options: [
      "False — even small apps have state (form inputs, toggles, API data); it just gets harder to manage as apps grow",
      "True — small apps don't need state management",
      "True — state management libraries are only for enterprise apps",
      "False — state management is only needed for databases, not frontend apps",
    ],
    correctIndex: 0,
    explanation:
      "Every interactive app has state — a button's disabled status, a form's input values, fetched data. State management becomes complex as apps grow, but it exists in every app.",
  },
  {
    id: "q_state_scen_1",
    conceptId: "state",
    module: 4,
    type: "scenario",
    prompt:
      "A user adds an item to their cart but the cart icon still shows '0'. What category of bug is this?",
    options: [
      "State management — the cart count state wasn't updated or the UI wasn't re-rendered after the state change",
      "DNS issue — the browser is looking at a cached version",
      "API timeout — the server didn't respond",
      "CORS error — the cart update was blocked",
    ],
    correctIndex: 0,
    explanation:
      "When the UI doesn't reflect user actions, it's almost always a state management bug. Either the state wasn't updated, or the component didn't re-render when the state changed.",
  },
  {
    id: "q_state_win_1",
    conceptId: "state",
    module: 4,
    type: "which_is_not",
    prompt:
      "Which of the following is NOT an example of application state?",
    options: ["The server's IP address","Whether a dropdown menu is open or closed","The currently logged-in user's info","Items in a shopping cart"],
    correctIndex: 0,
    explanation:
      "A server's IP address is infrastructure configuration, not application state. State is data that changes during user interaction — UI toggles, user data, cart contents.",
  },

  // ─── DOM ──────────────────────────────────────────────
  {
    id: "q_dom_t2d_1",
    conceptId: "dom",
    module: 4,
    type: "term_to_def",
    prompt:
      "What is the DOM?",
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
      "\"The blueprint of a house that the construction crew uses. JavaScript is the renovation team modifying the built house through the blueprint.\" What concept is this?",
    options: ["DOM","State Management","Event Loop","CI/CD"],
    correctIndex: 0,
    explanation:
      "This blueprint analogy describes the DOM — the structured representation JavaScript uses to modify what's displayed.",
  },
  {
    id: "q_dom_d2t_1",
    conceptId: "dom",
    module: 4,
    type: "def_to_term",
    prompt:
      "A tree-structured, in-memory representation of an HTML page that the browser creates and JavaScript can manipulate to change what's displayed. What is this?",
    options: ["DOM","Virtual DOM","HTML","CSS"],
    correctIndex: 0,
    explanation:
      "This describes the DOM (Document Object Model) — the live, interactive representation of your HTML page.",
  },
  {
    id: "q_dom_fib_1",
    conceptId: "dom",
    module: 4,
    type: "fill_in_blank",
    prompt:
      "Fill in the blank: React uses a ___ DOM — a lightweight copy of the real DOM — to minimize expensive direct DOM manipulations.",
    options: ["Virtual","Shadow","Cached","Proxy"],
    correctIndex: 0,
    explanation:
      "React's Virtual DOM is a lightweight JavaScript representation of the real DOM. React compares the virtual and real DOM (diffing) and only updates what actually changed.",
  },
  {
    id: "q_dom_tf_1",
    conceptId: "dom",
    module: 4,
    type: "true_false",
    prompt:
      "True or False: Directly manipulating the DOM with JavaScript (e.g., document.getElementById) is always the best approach.",
    options: [
      "False — direct DOM manipulation is expensive and error-prone at scale; frameworks like React abstract this with a Virtual DOM for better performance",
      "True — direct DOM manipulation is the fastest approach",
      "True — frameworks like React are slower because they add overhead",
      "False — JavaScript can't manipulate the DOM directly",
    ],
    correctIndex: 0,
    explanation:
      "Direct DOM manipulation works for simple cases but becomes slow and hard to maintain at scale. Frameworks like React batch updates and minimize actual DOM changes for better performance.",
  },
  {
    id: "q_dom_scen_1",
    conceptId: "dom",
    module: 4,
    type: "scenario",
    prompt:
      "Your JavaScript updates a list of 1000 items by removing and re-adding every DOM element. The page freezes briefly. What's the fix?",
    options: [
      "Only update the elements that actually changed instead of rebuilding the entire list — this is what React's Virtual DOM does automatically",
      "Use a faster computer",
      "Switch from JavaScript to a different language",
      "Add more CSS animations to distract users during the freeze",
    ],
    correctIndex: 0,
    explanation:
      "Rebuilding 1000 DOM elements is expensive. Updating only what changed (diffing) is much faster. This is the core problem that Virtual DOM frameworks like React solve.",
  },
  {
    id: "q_dom_win_1",
    conceptId: "dom",
    module: 4,
    type: "which_is_not",
    prompt:
      "Which of the following is NOT true about the DOM?",
    options: ["The DOM is the same thing as the HTML source code","The DOM is a tree structure","JavaScript can modify the DOM to change the page","The browser creates the DOM from the HTML"],
    correctIndex: 0,
    explanation:
      "The DOM is NOT the same as HTML source code. The browser parses HTML to create the DOM, but the DOM can be modified by JavaScript after creation — they diverge.",
  },

  // ─── Promises / Async-Await ───────────────────────────
  {
    id: "q_promises_t2d_1",
    conceptId: "promises",
    module: 5,
    type: "term_to_def",
    prompt:
      "What are Promises / Async-Await?",
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
      "\"A claim ticket at a dry cleaner — you hand in clothes, get a ticket, and come back later. It either gets you your clothes (resolved) or a sorry note (rejected).\" What concept is this?",
    options: ["Promises / Async-Await","Sync vs Async","Event Loop","Message Queue"],
    correctIndex: 0,
    explanation:
      "The claim ticket analogy describes Promises — an object representing a value that will be available in the future.",
  },
  {
    id: "q_promises_d2t_1",
    conceptId: "promises",
    module: 5,
    type: "def_to_term",
    prompt:
      "An object representing a value that doesn't exist yet but will eventually resolve (success) or reject (failure). What is this?",
    options: ["Promise","Callback","Observable","Generator"],
    correctIndex: 0,
    explanation:
      "This describes a Promise — a placeholder for a future value, with success and failure paths.",
  },
  {
    id: "q_promises_fib_1",
    conceptId: "promises",
    module: 5,
    type: "fill_in_blank",
    prompt:
      "Fill in the blank: A Promise has three states: ___, fulfilled (resolved), and rejected.",
    options: ["pending","waiting","queued","initialized"],
    correctIndex: 0,
    explanation:
      "A Promise starts as 'pending' — the operation is in progress. It then transitions to either 'fulfilled' (success) or 'rejected' (failure). Once settled, it can't change.",
  },
  {
    id: "q_promises_tf_1",
    conceptId: "promises",
    module: 5,
    type: "true_false",
    prompt:
      "True or False: async-await replaces Promises — they're a different mechanism.",
    options: [
      "False — async-await IS Promises; it's syntactic sugar that makes Promise-based code look synchronous and easier to read",
      "True — async-await is a completely separate system from Promises",
      "True — async-await uses callbacks, not Promises",
      "False — async-await predates Promises and was available first",
    ],
    correctIndex: 0,
    explanation:
      "async-await is built ON TOP of Promises. An async function returns a Promise. await pauses until a Promise resolves. It's the same mechanism with nicer syntax.",
  },
  {
    id: "q_promises_scen_1",
    conceptId: "promises",
    module: 5,
    type: "scenario",
    prompt:
      "Your code uses await but doesn't have a try/catch block. What happens if the API call fails?",
    options: [
      "The Promise rejects and throws an unhandled error, potentially crashing the function or showing an uncaught error",
      "The code silently continues with undefined",
      "The browser automatically retries the request",
      "Nothing — await handles errors automatically",
    ],
    correctIndex: 0,
    explanation:
      "Without try/catch, a rejected await throws an unhandled error. Always wrap await calls in try/catch to handle failures gracefully.",
  },
  {
    id: "q_promises_win_1",
    conceptId: "promises",
    module: 5,
    type: "which_is_not",
    prompt:
      "Which of the following is NOT a valid state of a Promise?",
    options: ["Cancelled","Pending","Fulfilled","Rejected"],
    correctIndex: 0,
    explanation:
      "Promises can't be cancelled (this is actually a known limitation). The three states are: pending (in progress), fulfilled (success), and rejected (failure).",
  },

  // ─── Event Loop ───────────────────────────────────────
  {
    id: "q_eventloop_t2d_1",
    conceptId: "eventloop",
    module: 5,
    type: "term_to_def",
    prompt:
      "What is the Event Loop?",
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
      "\"A single chef working alone — when something is in the oven, they prep the next dish. When the timer dings, they handle it.\" What concept is this?",
    options: ["Event Loop","Message Queue","Promises / Async-Await","Sync vs Async"],
    correctIndex: 0,
    explanation:
      "The single chef analogy describes the Event Loop — JavaScript handling one thing at a time while async operations wait.",
  },
  {
    id: "q_eventloop_d2t_1",
    conceptId: "eventloop",
    module: 5,
    type: "def_to_term",
    prompt:
      "The mechanism that continuously checks the callback queue and executes pending callbacks when the main thread is free, enabling single-threaded JavaScript to handle async work. What is this?",
    options: ["Event Loop","Promise","Thread Pool","Web Worker"],
    correctIndex: 0,
    explanation:
      "This describes the Event Loop — the engine that powers JavaScript's asynchronous behavior despite being single-threaded.",
  },
  {
    id: "q_eventloop_fib_1",
    conceptId: "eventloop",
    module: 5,
    type: "fill_in_blank",
    prompt:
      "Fill in the blank: JavaScript is ___ -threaded, meaning it can only execute one piece of code at a time. The Event Loop makes it appear to handle multiple things by queuing callbacks.",
    options: ["single","multi","dual","zero"],
    correctIndex: 0,
    explanation:
      "JavaScript runs on a single thread. The Event Loop creates the illusion of parallelism by efficiently switching between tasks — executing code, checking the callback queue, repeat.",
  },
  {
    id: "q_eventloop_tf_1",
    conceptId: "eventloop",
    module: 5,
    type: "true_false",
    prompt:
      "True or False: The Event Loop allows JavaScript to execute multiple pieces of code simultaneously (in parallel).",
    options: [
      "False — JavaScript is single-threaded; the Event Loop just efficiently manages the ORDER of execution, creating the ILLUSION of parallelism",
      "True — the Event Loop uses multiple threads under the hood",
      "True — modern JavaScript engines are multi-threaded",
      "False — JavaScript doesn't have an Event Loop",
    ],
    correctIndex: 0,
    explanation:
      "The Event Loop doesn't create parallelism — it manages the execution order. While async operations (I/O, timers) run elsewhere, JavaScript code itself runs one piece at a time.",
  },
  {
    id: "q_eventloop_scen_1",
    conceptId: "eventloop",
    module: 5,
    type: "scenario",
    prompt:
      "You run a while(true) loop in JavaScript. What happens to setTimeout callbacks queued during the loop?",
    options: [
      "They never execute — the infinite loop blocks the main thread, so the Event Loop can never process the callback queue",
      "They execute in parallel on a separate thread",
      "They execute inside the while loop",
      "They execute immediately, interrupting the loop",
    ],
    correctIndex: 0,
    explanation:
      "A blocking while(true) loop hogs the single thread forever. The Event Loop can never reach the callback queue, so setTimeout callbacks, click handlers, and everything else freezes. This is why you never block the main thread.",
  },
  {
    id: "q_eventloop_win_1",
    conceptId: "eventloop",
    module: 5,
    type: "which_is_not",
    prompt:
      "Which of the following is NOT handled by the JavaScript Event Loop?",
    options: ["Compiling JavaScript into machine code","Processing setTimeout callbacks","Handling Promise resolutions","Executing queued DOM event handlers (click, input)"],
    correctIndex: 0,
    explanation:
      "The JavaScript engine (V8, SpiderMonkey) compiles code, not the Event Loop. The Event Loop manages the execution order of callbacks, promises, and event handlers.",
  },

  // ─── HTTPS / TLS ───────────────────────────────────────

  {
    id: "q_tls_t2d_1",
    conceptId: "tls",
    module: 2,
    type: "term_to_def",
    prompt: "What does TLS do in an HTTPS connection?",
    options: [
      "Encrypts the connection and authenticates the server's identity so data can't be read or tampered with in transit",
      "Compresses HTTP requests and responses to reduce bandwidth usage",
      "Authenticates the user's identity so the server knows who is making the request",
      "Speeds up the connection by caching the TCP handshake for future requests",
    ],
    correctIndex: 0,
    explanation: "TLS (Transport Layer Security) does two things: authenticates the server (via certificate signed by a trusted CA) and encrypts all data in transit. TLS authenticates the SERVER, not the user — user authentication is still handled by the application layer (passwords, tokens). Without it, HTTP traffic is readable by anyone on the same network.",
  },
  {
    id: "q_tls_scen_1",
    conceptId: "tls",
    module: 2,
    type: "scenario",
    prompt: "You're on public WiFi and notice the site is http:// (not https://). What is the specific risk?",
    options: [
      "Anyone on the same WiFi network can read all data you send — passwords, session tokens, everything — in plaintext",
      "The website will load slower because HTTP is not optimized for public networks",
      "Your browser will block the site because HTTP is a deprecated protocol",
      "The server cannot verify your identity without HTTPS",
    ],
    correctIndex: 0,
    explanation: "HTTP sends data in plaintext. On public WiFi, a malicious actor running a packet sniffer can read every byte you send — login credentials, session cookies, personal data. With HTTPS, all traffic is encrypted so even if intercepted, it's unreadable without the session key.",
  },
  {
    id: "q_tls_code_1",
    conceptId: "tls",
    module: 2,
    type: "code_snippet",
    codeSnippet: `// Browser address bar:
Not Secure | http://checkout.example.com/payment

// The request being sent:
POST /payment HTTP/1.1
Content-Type: application/json

{ "card_number": "4111111111111111", "cvv": "123" }`,
    prompt: "What is the critical security problem with this payment form?",
    options: [
      "The request uses HTTP — credit card data is sent in plaintext and can be intercepted by anyone on the network",
      "The Content-Type header should be text/plain for payment forms",
      "POST requests don't support JSON bodies on payment endpoints",
      "The card number should be stored server-side, not transmitted in requests",
    ],
    correctIndex: 0,
    explanation: "Sending payment data over HTTP is catastrophic — the card number and CVV are visible in plaintext to anyone sniffing network traffic. All sensitive data requires HTTPS (TLS). This is also a PCI-DSS compliance violation. Production payment flows additionally use tokenization so raw card numbers never touch your own server.",
  },
  {
    id: "q_tls_win_1",
    conceptId: "tls",
    module: 2,
    type: "which_is_not",
    prompt: "Which of the following does TLS NOT protect against?",
    options: [
      "SQL injection attacks on the server's database",
      "Eavesdropping (reading data in transit)",
      "Man-in-the-middle attacks (intercepting and modifying data)",
      "Connecting to a fake server impersonating the real one",
    ],
    correctIndex: 0,
    explanation: "TLS operates at the transport layer — it protects data in transit between client and server. SQL injection is a server-side vulnerability in how the application processes input. Once data reaches the server, TLS's job is done. SQL injection protection requires parameterized queries and input validation.",
  },

  // ─── Promises — Code Snippets ──────────────────────────

  {
    id: "q_promises_code_1",
    conceptId: "promises",
    module: 5,
    type: "code_snippet",
    codeSnippet: `fetch('/api/users')
  .then(res => res.json())
  .then(data => console.log(data))`,
    prompt: "If the server returns a 500 error, what happens with this code?",
    options: [
      "The .then() chain still executes — fetch() only rejects on network failure, not HTTP error status codes",
      "fetch() throws an error and the .then() callbacks are skipped automatically",
      "res.json() detects the 500 status and throws before the second .then() runs",
      "fetch() returns null when the server responds with 5xx",
    ],
    correctIndex: 0,
    explanation: "fetch() only rejects on network-level failures (no internet, DNS failure, server unreachable). A 500 response is a 'successful' network response from fetch()'s perspective — the .then() chain runs with the error response object. You must check res.ok or res.status to detect HTTP errors and handle them explicitly.",
  },
  {
    id: "q_promises_code_2",
    conceptId: "promises",
    module: 5,
    type: "code_snippet",
    codeSnippet: `async function getUser(id) {
  const res = await fetch(\`/api/users/\${id}\`);
  const data = await res.json();
  return data;
}`,
    prompt: "What is the async/await version doing compared to .then() chaining?",
    options: [
      "The same thing — async/await is syntactic sugar that makes async code read like synchronous code",
      "async/await is faster because it skips the Promise overhead entirely",
      "async/await runs fetch and json() in parallel; .then() runs them sequentially",
      "async/await automatically retries failed requests; .then() does not",
    ],
    correctIndex: 0,
    explanation: "async/await is purely syntactic sugar over Promises — same execution model, same behavior, same performance. The advantage is readability: code reads top-to-bottom like synchronous code instead of nested .then() callbacks. Both versions have the same fetch() gotcha: you still need to check res.ok to catch HTTP errors.",
  },
];
