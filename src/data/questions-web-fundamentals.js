// ═══════════════════════════════════════════════════════
// WEB FUNDAMENTALS
// Concepts: httpcycle, urlstructure, state, dom, promises, eventloop, tls, cookies, responsive, accessibility
// ═══════════════════════════════════════════════════════

export const QUESTIONS_WEB_FUNDAMENTALS = [
  // ─── HTTP Request Lifecycle ───────────────────────────
  {
    id: "q_httpcycle_t2d_1",
    conceptId: "httpcycle",
    module: 1,
    type: "scenario",
    prompt:
      "When you type a URL and press Enter, your browser performs a specific sequence: resolving the domain, establishing a connection, negotiating encryption, sending the request, and rendering the response. What is this complete sequence called?",
    options: [
      "HTTP Request Lifecycle",
      "DNS Resolution",
      "TCP Handshake",
      "TLS Negotiation",
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
      "False — TCP must be established first to create a reliable channel, then TLS negotiates encryption on top of it",
      "True — TLS sets up the encryption layer before any TCP connection is established between client and server",
      "True — TLS and TCP run simultaneously as parallel handshakes to save time during the connection setup",
      "False — TLS is not part of the HTTP lifecycle; encryption is handled entirely by the browser's rendering engine",
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
      "The render/parsing step — the request succeeded but the client isn't handling the response data correctly",
      "The DNS lookup — the browser couldn't resolve the domain name to find the server's IP address",
      "The TLS handshake — the encrypted connection wasn't established so the browser rejected the response",
      "The TCP connection — packets were dropped in transit so the response arrived incomplete or corrupted",
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
      "DNS lookup and TCP/TLS handshake — the browser caches the DNS result and reuses the existing connection",
      "The server processing step — the server caches the user's session and skips re-computing the response",
      "The HTTP request itself — the browser serves the page from memory without contacting the server again",
      "The rendering and parsing step — the browser reuses the previously constructed DOM tree on repeat visits",
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
    type: "scenario",
    prompt:
      "A junior developer asks you to explain the different parts of 'https://shop.com/products?sort=price#reviews'. You explain that it contains a protocol, domain, path, query parameter, and fragment. What web concept are you describing?",
    options: [
      "URL Structure",
      "HTTP Request Lifecycle",
      "DNS Resolution",
      "REST API Design",
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
      "It's a fragment identifier — it tells the browser to scroll to the 'reviews' section on the page",
      "It's a server-side filter — it tells the backend to only return review-related product data",
      "It's a query parameter — it sends 'reviews' to the server as an additional key-value pair",
      "It's a route redirect — it navigates the browser to a separate page dedicated to reviews",
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
      "False — fragments are client-side only; the browser strips them before sending the request to the server",
      "True — the server needs the fragment identifier to determine which section of content to return",
      "True — fragments are included in the HTTP request headers so the server can log which section was viewed",
      "False — fragments are not valid URL syntax; they are only used inside HTML anchor tags within a page",
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
    type: "scenario",
    prompt:
      "Your e-commerce app needs to track the logged-in user, their cart contents, and which filters are active — and the UI must update instantly when any of these change. What category of problem is this?",
    options: [
      "State Management",
      "Cache Invalidation",
      "Session Handling",
      "DOM Manipulation",
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
      "False — even small apps have state like form inputs, toggles, and API data; it just gets harder to manage as apps grow",
      "True — small apps can rely on direct DOM manipulation alone, so they have no need for any state management patterns",
      "True — state management libraries like Redux were designed for enterprise-scale apps and add unnecessary overhead to small projects",
      "False — state management only applies to server-side databases and backend services, not to frontend user interface components",
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
      "State management — the cart count state wasn't updated or the component didn't re-render after the change",
      "DNS caching — the browser is serving a stale cached version of the page from a previous session",
      "API timeout — the server took too long to respond so the cart update request was silently dropped",
      "CORS error — the browser blocked the cart update request because the API is on a different origin",
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
    type: "scenario",
    prompt:
      "When your browser loads an HTML page, it creates a live, tree-structured representation in memory that JavaScript can read and modify to change what's displayed. What is this in-memory structure called?",
    options: [
      "DOM",
      "Virtual DOM",
      "Shadow DOM",
      "HTML Source",
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
      "False — direct DOM manipulation is expensive at scale; frameworks batch updates via a Virtual DOM for better performance",
      "True — direct DOM access is the fastest approach since it avoids the overhead of a Virtual DOM abstraction layer",
      "True — frameworks add unnecessary abstraction that makes DOM operations slower than direct JavaScript manipulation",
      "False — JavaScript cannot manipulate the DOM directly; all changes must go through a rendering engine API first",
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
      "Only update the elements that actually changed instead of rebuilding the entire list — this is what Virtual DOM diffing does",
      "Wrap the DOM updates in a Web Worker so they run on a background thread without blocking the main thread",
      "Use requestAnimationFrame to batch all 1000 element removals and additions into a single repaint cycle",
      "Move the list rendering to the server side so the browser only receives the final HTML without any DOM operations",
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
    type: "scenario",
    prompt:
      "You need to fetch data from an API and process it when it arrives, but you don't want to freeze the UI while waiting. JavaScript provides an object representing a future value that will either succeed or fail. What is this mechanism?",
    options: [
      "Promises / Async-Await",
      "Event Loop",
      "Web Workers",
      "Callbacks",
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
      "False — async-await IS Promises under the hood; it's syntactic sugar that makes Promise-based code look synchronous",
      "True — async-await is a completely separate concurrency system that replaced the older Promise-based approach",
      "True — async-await uses callbacks internally rather than Promises, which is why it performs better in benchmarks",
      "False — async-await actually predates Promises and was available in JavaScript before the Promise API was introduced",
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
      "The Promise rejects and throws an unhandled error, potentially crashing the function or surfacing an uncaught exception",
      "The await expression silently resolves to undefined, and the rest of the function continues executing normally",
      "The browser detects the unhandled rejection and automatically retries the request up to three times before failing",
      "Nothing happens — await has built-in error handling that catches rejections and returns null by default",
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
    type: "scenario",
    prompt:
      "JavaScript is single-threaded but can handle timers, API calls, and user clicks without freezing. A mechanism continuously checks a queue of pending callbacks and runs them when the main thread is free. What is this mechanism?",
    options: [
      "Event Loop",
      "Promises",
      "Thread Pool",
      "Web Workers",
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
      "False — JavaScript is single-threaded; the Event Loop manages the order of execution, creating the illusion of parallelism",
      "True — the Event Loop dispatches callbacks to multiple threads so several operations can run at the same time",
      "True — modern JavaScript engines use multi-threading by default, and the Event Loop coordinates work across threads",
      "False — JavaScript doesn't have an Event Loop; async behavior is handled entirely by the operating system's scheduler",
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
      "They execute in parallel on a background thread, since setTimeout callbacks run outside the main thread",
      "They execute inside the while loop at the next iteration, since the engine interleaves callbacks with loop cycles",
      "They execute immediately by interrupting the loop, because timer callbacks have higher priority than running code",
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
    type: "scenario",
    prompt: "When your browser connects to a bank's website, it first verifies the server's certificate is legitimate, then negotiates encryption keys so all data sent between you and the server is unreadable to anyone else on the network. What protocol handles this?",
    options: [
      "TLS",
      "TCP",
      "DNS",
      "SSH",
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
      "Anyone on the same WiFi network can intercept and read all data you send — passwords, tokens, everything — in plaintext",
      "The website will load significantly slower because HTTP lacks the connection optimizations that HTTPS provides",
      "Your browser will block the site entirely because HTTP is a deprecated protocol that modern browsers no longer support",
      "The server cannot verify your identity without HTTPS, so it will reject your login attempts and form submissions",
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
      "The request uses HTTP instead of HTTPS — credit card data is sent in plaintext and can be intercepted by anyone on the network",
      "The Content-Type header should be text/plain instead of application/json when transmitting sensitive payment information",
      "POST requests cannot carry JSON bodies to payment endpoints — payment data must be sent as URL-encoded form fields",
      "The card number should be tokenized by the client before transmission so the raw number never leaves the browser",
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
      "The .then() chain still executes — fetch() only rejects on network failures, not on HTTP error status codes like 500",
      "fetch() rejects the Promise and the .then() callbacks are skipped, falling through to any .catch() handler",
      "res.json() detects the 500 status code internally and throws an error before the second .then() can run",
      "fetch() resolves with null when the server responds with a 5xx status, so data logs as null in the console",
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
      "The same thing — async/await is syntactic sugar over Promises that makes async code read like synchronous code",
      "async/await is faster because it bypasses the Promise queue and executes fetch calls with less runtime overhead",
      "async/await runs fetch() and res.json() in parallel, while .then() chaining forces them to run sequentially",
      "async/await automatically retries failed requests with exponential backoff, while .then() chaining does not",
    ],
    correctIndex: 0,
    explanation: "async/await is purely syntactic sugar over Promises — same execution model, same behavior, same performance. The advantage is readability: code reads top-to-bottom like synchronous code instead of nested .then() callbacks. Both versions have the same fetch() gotcha: you still need to check res.ok to catch HTTP errors.",
  },

  // ─── Cookies & Sessions ─────────────────────────────
  {
    id: "q_cookies_scen_1",
    conceptId: "cookies",
    module: 3,
    type: "scenario",
    prompt:
      "A user logs into your site, closes the tab, and reopens it 10 minutes later. They're still logged in without re-entering credentials. What browser mechanism is keeping them authenticated?",
    options: [
      "A cookie storing a session identifier that the browser sends with every request so the server recognizes the user",
      "The browser's localStorage caching the user's password and automatically replaying it when the page reloads",
      "The server remembers the user's IP address and skips authentication for repeat connections from the same IP",
      "The DNS cache retains the user's login token so subsequent requests to the same domain are pre-authenticated",
    ],
    correctIndex: 0,
    explanation:
      "Cookies persist between browser sessions (unless they're session-only). When the user logs in, the server sets a cookie with a session ID. On every subsequent request, the browser sends that cookie back so the server can look up the user's session.",
    whySection:
      "Without cookies, HTTP would be stateless — every request would be from a stranger. Cookies bridge that gap by attaching a small identifier to each request.",
  },
  {
    id: "q_cookies_scen_2",
    conceptId: "cookies",
    module: 3,
    type: "scenario",
    prompt:
      "Your team notices that after deploying a new server instance, all users are suddenly logged out even though their browsers still have valid cookies. What is the most likely cause?",
    options: [
      "The new server instance has a fresh session store, so the session IDs in existing cookies no longer map to any stored sessions",
      "The deployment changed the site's domain name, so browsers treat the existing cookies as belonging to a different website",
      "The cookies expired at the exact moment the deployment completed, which is a coincidence caused by default timeout values",
      "The new server uses a newer version of HTTP that is incompatible with cookies that were created by the previous server",
    ],
    correctIndex: 0,
    explanation:
      "Sessions are stored server-side (in memory, a database, or a cache like Redis). When a new server spins up with an empty session store, existing session IDs from cookies can't be found, so users appear logged out. This is why production apps use shared session stores.",
  },
  {
    id: "q_cookies_tf_1",
    conceptId: "cookies",
    module: 3,
    type: "true_false",
    prompt:
      "True or False: Cookies are sent with every HTTP request to the domain that set them, including requests for images and stylesheets.",
    options: [
      "True — the browser automatically attaches matching cookies to every request to that domain, regardless of the resource type",
      "False — cookies are only sent with API requests made via fetch or XMLHttpRequest, not with standard page resource requests",
      "False — the browser only sends cookies when the user explicitly navigates to a page, not for background asset requests",
      "True — but only if the developer specifically configures each resource request to include cookies using a special header",
    ],
    correctIndex: 0,
    explanation:
      "Browsers attach cookies to every request matching the cookie's domain and path — HTML pages, images, CSS files, API calls, all of them. This is why cookies add overhead and why you should keep them small.",
  },
  {
    id: "q_cookies_d2t_1",
    conceptId: "cookies",
    module: 3,
    type: "def_to_term",
    prompt:
      "Small pieces of data a website stores in the browser to remember information between visits, such as login state and user preferences. What is this?",
    options: ["Cookies","Local Storage","Session Storage","Cache Headers"],
    correctIndex: 0,
    explanation:
      "Cookies are small key-value pairs stored in the browser and automatically sent with every request to the matching domain. They're the original mechanism for maintaining state in stateless HTTP.",
  },
  {
    id: "q_cookies_fib_1",
    conceptId: "cookies",
    module: 3,
    type: "fill_in_blank",
    prompt:
      "Fill in the blank: A cookie with the ___ flag cannot be accessed by JavaScript, which helps prevent cross-site scripting attacks from stealing session tokens.",
    options: ["HttpOnly","Secure","SameSite","Domain"],
    correctIndex: 0,
    explanation:
      "The HttpOnly flag tells the browser to block JavaScript (document.cookie) from reading the cookie. This prevents XSS attacks from stealing session tokens, since the cookie is only sent via HTTP headers.",
  },

  // ─── Responsive Design ──────────────────────────────
  {
    id: "q_responsive_scen_1",
    conceptId: "responsive",
    module: 4,
    type: "scenario",
    prompt:
      "A client complains that their website looks great on desktop but the text is unreadably tiny and buttons are impossible to tap on mobile. What fundamental approach is the site missing?",
    options: [
      "Responsive design — using flexible grids, media queries, and fluid sizing so the layout adapts to any screen size",
      "Server-side rendering — generating the HTML on the server so the browser doesn't have to compute the layout itself",
      "Content delivery network — serving assets from a closer location so the page loads quickly on mobile connections",
      "Progressive enhancement — building the JavaScript features incrementally so older mobile browsers can render them",
    ],
    correctIndex: 0,
    explanation:
      "Responsive design ensures a single codebase works across all screen sizes. Without it, a desktop layout is simply shrunk to fit a phone screen, making text tiny and interactive elements unusable.",
  },
  {
    id: "q_responsive_scen_2",
    conceptId: "responsive",
    module: 4,
    type: "scenario",
    prompt:
      "Your site's three-column layout works perfectly on desktop but overlaps into an unreadable mess on tablets. A teammate suggests adding breakpoints. What will breakpoints accomplish?",
    options: [
      "They define screen-width thresholds where the CSS switches layouts — like collapsing three columns to two on tablets and one on phones",
      "They set maximum file sizes for images at each resolution so the browser loads smaller assets on slower network connections",
      "They add JavaScript event listeners that detect the device type and redirect the user to a mobile-specific version of the site",
      "They insert performance checkpoints into the CSS parser so the browser prioritizes rendering above-the-fold content first",
    ],
    correctIndex: 0,
    explanation:
      "CSS breakpoints (via media queries) let you define different layouts at different screen widths. For example, @media (max-width: 768px) could switch from a three-column grid to a single column stack.",
  },
  {
    id: "q_responsive_tf_1",
    conceptId: "responsive",
    module: 4,
    type: "true_false",
    prompt:
      "True or False: Responsive design requires building a completely separate codebase for mobile and desktop versions of a website.",
    options: [
      "False — responsive design uses one codebase with CSS media queries and flexible layouts that adapt to different screen sizes",
      "True — responsive design means maintaining two separate HTML files, one for mobile users and one for desktop browser users",
      "True — responsive design requires a mobile-specific server that detects the device and serves a completely different website",
      "False — responsive design only works for text content; images and videos require separate mobile codebases to display properly",
    ],
    correctIndex: 0,
    explanation:
      "The whole point of responsive design is one codebase for all devices. CSS media queries, flexible grids, and relative units let the same HTML adapt fluidly from phone to desktop without separate builds.",
  },
  {
    id: "q_responsive_a2t_1",
    conceptId: "responsive",
    module: 4,
    type: "analogy_to_term",
    prompt:
      "\"Water taking the shape of whatever container you pour it into — a narrow glass, a wide bowl, a tall vase — the same water adapts its form to fit.\" What web concept is this?",
    options: ["Responsive Design","State Management","Progressive Enhancement","Server-Side Rendering"],
    correctIndex: 0,
    explanation:
      "The water analogy describes responsive design — one set of content that fluidly adapts its layout to whatever screen size or container it's displayed in.",
  },
  {
    id: "q_responsive_win_1",
    conceptId: "responsive",
    module: 4,
    type: "which_is_not",
    prompt:
      "Which of the following is NOT a technique used in responsive web design?",
    options: [
      "Server-side database sharding to handle more mobile traffic",
      "CSS media queries to apply styles based on screen width",
      "Flexible grid layouts that use percentages instead of fixed pixels",
      "Fluid images that scale down to fit their container width",
    ],
    correctIndex: 0,
    explanation:
      "Database sharding is a backend scaling technique that splits data across multiple servers. It has nothing to do with how a page adapts its visual layout to different screen sizes.",
  },

  // ─── Accessibility (a11y) ───────────────────────────
  {
    id: "q_accessibility_scen_1",
    conceptId: "accessibility",
    module: 4,
    type: "scenario",
    prompt:
      "A visually impaired user reports that your form is impossible to complete because their screen reader announces every input field as just 'edit text' with no context. What is the most likely fix?",
    options: [
      "Add proper label elements and ARIA attributes so the screen reader can announce the purpose of each input field",
      "Increase the font size of all placeholder text to at least 18 pixels so the screen reader can detect it more easily",
      "Change the form inputs from text fields to dropdown menus because screen readers handle select elements more reliably",
      "Move all form instructions into a separate help page that the user can read before they navigate to the form itself",
    ],
    correctIndex: 0,
    explanation:
      "Screen readers rely on HTML semantics — label elements, ARIA attributes, and proper heading structure — to describe the interface. Without labels, inputs are announced generically as 'edit text' with no indication of what information to enter.",
  },
  {
    id: "q_accessibility_scen_2",
    conceptId: "accessibility",
    module: 4,
    type: "scenario",
    prompt:
      "During a code review, you notice a teammate built the entire navigation menu using styled div elements with onClick handlers instead of native HTML elements. Why is this an accessibility problem?",
    options: [
      "Divs lack built-in keyboard focus, roles, and semantics — screen readers and keyboard users cannot navigate or activate them",
      "Divs render slower than native elements because the browser has to apply additional styling calculations to each one",
      "Divs are not supported on mobile browsers, so the navigation menu will be completely invisible on phones and tablets",
      "Divs cannot have event listeners attached in modern JavaScript, so the click handlers will silently fail in production",
    ],
    correctIndex: 0,
    explanation:
      "Native elements like <button> and <a> come with keyboard focus, screen reader roles, and activation behavior built in. A div has none of that — keyboard users can't tab to it, and screen readers don't announce it as interactive.",
  },
  {
    id: "q_accessibility_tf_1",
    conceptId: "accessibility",
    module: 4,
    type: "true_false",
    prompt:
      "True or False: Accessibility only benefits users who are blind and use screen readers.",
    options: [
      "False — accessibility helps many groups: motor-impaired users need keyboard navigation, deaf users need captions, low-vision users need contrast",
      "True — accessibility standards like WCAG were designed specifically for screen reader users and do not address other types of disability",
      "True — sighted users and users with hearing impairments already have full access to web content without any accessibility features",
      "False — accessibility is primarily a search engine optimization technique that helps web crawlers index the content of your website",
    ],
    correctIndex: 0,
    explanation:
      "Accessibility (a11y) serves a wide spectrum: blind users need screen readers, motor-impaired users need keyboard navigation, deaf users need captions, low-vision users need color contrast, and cognitive disabilities need clear layouts.",
  },
  {
    id: "q_accessibility_d2t_1",
    conceptId: "accessibility",
    module: 4,
    type: "def_to_term",
    prompt:
      "Designing software so people with disabilities can use it — through screen readers, keyboard navigation, color contrast, and captions. What is this practice called?",
    options: ["Accessibility (a11y)","Responsive Design","Progressive Enhancement","User Experience (UX)"],
    correctIndex: 0,
    explanation:
      "Accessibility (abbreviated a11y — 'a' + 11 letters + 'y') is the practice of making software usable by everyone, including people with visual, motor, auditory, and cognitive disabilities.",
  },
  {
    id: "q_accessibility_win_1",
    conceptId: "accessibility",
    module: 4,
    type: "which_is_not",
    prompt:
      "Which of the following is NOT an accessibility best practice?",
    options: [
      "Using only color to indicate error states without any text or icon alternatives for colorblind users",
      "Providing alt text on images so screen readers can describe the visual content to blind users",
      "Ensuring all interactive elements are reachable and operable using only a keyboard without a mouse",
      "Using sufficient color contrast between text and background so low-vision users can read the content",
    ],
    correctIndex: 0,
    explanation:
      "Relying on color alone violates accessibility guidelines. About 8% of men are colorblind. Errors must also use text labels, icons, or other non-color indicators so all users can perceive them.",
  },
];
