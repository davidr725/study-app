// ═══════════════════════════════════════════════════════
// ARCHITECTURE
// Concepts: idempotency, dbindex, latency, syncasync, cdn, loadbalancer, microservices, queue, containers
// ═══════════════════════════════════════════════════════

export const QUESTIONS_ARCHITECTURE = [
  // ─── Idempotency ──────────────────────────────────────
  {
    id: "q_idempotency_t2d_1",
    conceptId: "idempotency",
    module: 3,
    type: "term_to_def",
    prompt:
      "What is Idempotency?",
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
      "\"Pressing an elevator button — pressing it once or 15 times produces the same result.\" What concept is this?",
    options: ["Idempotency","Caching","Rate Limiting","Sync vs Async"],
    correctIndex: 0,
    explanation:
      "The elevator button analogy describes Idempotency — the result is the same regardless of how many times the operation runs.",
  },
  {
    id: "q_idempotency_d2t_1",
    conceptId: "idempotency",
    module: 3,
    type: "def_to_term",
    prompt:
      "A property where performing an operation multiple times has the same effect as performing it once. What is this called?",
    options: ["Idempotency","Immutability","Atomicity","Consistency"],
    correctIndex: 0,
    explanation:
      "This describes Idempotency — doing it once or many times yields the same result.",
  },
  {
    id: "q_idempotency_fib_1",
    conceptId: "idempotency",
    module: 3,
    type: "fill_in_blank",
    prompt:
      "Fill in the blank: GET, PUT, and DELETE are ___ HTTP methods, meaning repeating them has the same effect. POST is NOT.",
    options: ["idempotent","stateless","cacheable","synchronous"],
    correctIndex: 0,
    explanation:
      "GET (retrieving), PUT (replacing), and DELETE (removing) are idempotent — doing them twice gives the same result. POST creates a new resource each time, so it's not idempotent.",
  },
  {
    id: "q_idempotency_tf_1",
    conceptId: "idempotency",
    module: 3,
    type: "true_false",
    prompt:
      "True or False: POST is an idempotent HTTP method.",
    options: [
      "False — POST creates a new resource each time, so calling it twice creates two resources",
      "True — all HTTP methods are idempotent by default",
      "True — POST just sends data, so sending it again has no effect",
      "False — POST is idempotent only when used with REST",
    ],
    correctIndex: 0,
    explanation:
      "POST is NOT idempotent. Calling POST /orders twice typically creates two separate orders. That's why accidental double-clicks on 'Place Order' can be problematic without safeguards.",
  },
  {
    id: "q_idempotency_scen_1",
    conceptId: "idempotency",
    module: 3,
    type: "scenario",
    prompt:
      "A user's payment request times out. The client retries automatically. Without idempotency, what could happen?",
    options: [
      "The user gets charged twice — the first request may have succeeded before the timeout, and the retry creates a second charge",
      "The payment is automatically refunded",
      "The server rejects the retry because it remembers the first attempt",
      "Nothing — payment APIs are always idempotent by default",
    ],
    correctIndex: 0,
    explanation:
      "Without idempotency, a retry can create a duplicate charge. The fix is to include an idempotency key (a unique ID per transaction) so the server knows it's a retry, not a new payment.",
  },
  {
    id: "q_idempotency_win_1",
    conceptId: "idempotency",
    module: 3,
    type: "which_is_not",
    prompt:
      "Which of the following is NOT an idempotent operation?",
    options: ["POST /orders (creating a new order)","GET /users/5 (reading a user)","PUT /users/5 (replacing a user's data)","DELETE /users/5 (deleting a user)"],
    correctIndex: 0,
    explanation:
      "POST is not idempotent — each call creates a new order. GET, PUT, and DELETE all produce the same result when called multiple times.",
  },

  // ─── Database Index ───────────────────────────────────
  {
    id: "q_dbindex_t2d_1",
    conceptId: "dbindex",
    module: 4,
    type: "term_to_def",
    prompt:
      "What is a Database Index?",
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
      "\"The index at the back of a textbook — you go straight to page 247 instead of flipping through every page. But when the book is revised, the index must be updated too.\" What concept is this?",
    options: ["Database Index","Caching","DNS","API Gateway"],
    correctIndex: 0,
    explanation:
      "The textbook index analogy describes a Database Index — fast lookups at the cost of slower writes.",
  },
  {
    id: "q_dbindex_d2t_1",
    conceptId: "dbindex",
    module: 4,
    type: "def_to_term",
    prompt:
      "A data structure that speeds up database read operations by allowing quick row lookups, at the cost of slower write operations. What is this?",
    options: ["Database Index","Cache","CDN","Message Queue"],
    correctIndex: 0,
    explanation:
      "This describes a Database Index — the classic read-speed vs write-speed tradeoff.",
  },
  {
    id: "q_dbindex_fib_1",
    conceptId: "dbindex",
    module: 4,
    type: "fill_in_blank",
    prompt:
      "Fill in the blank: Without an index, a database must perform a full ___ — checking every single row in the table.",
    options: ["table scan","cache miss","DNS lookup","handshake"],
    correctIndex: 0,
    explanation:
      "A full table scan means reading every row to find what you need. Indexes prevent this by providing a shortcut, like a book index lets you jump to the right page.",
  },
  {
    id: "q_dbindex_tf_1",
    conceptId: "dbindex",
    module: 4,
    type: "true_false",
    prompt:
      "True or False: You should add indexes to every column in a database table for maximum performance.",
    options: [
      "False — every index slows down writes (INSERT, UPDATE, DELETE) and uses disk space; only index columns you frequently search or sort by",
      "True — more indexes always mean better performance",
      "True — indexes have no downsides",
      "False — databases only support one index per table",
    ],
    correctIndex: 0,
    explanation:
      "Indexes are a tradeoff. Each one speeds up reads on that column but slows down every write because the index must be updated. Only index columns you query frequently.",
  },
  {
    id: "q_dbindex_scen_1",
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
    id: "q_dbindex_win_1",
    conceptId: "dbindex",
    module: 4,
    type: "which_is_not",
    prompt:
      "Which of the following is NOT a benefit of database indexes?",
    options: ["Faster write operations (INSERT, UPDATE, DELETE)","Faster search queries","Faster sorting operations","Avoiding full table scans"],
    correctIndex: 0,
    explanation:
      "Indexes actually SLOW DOWN writes because each write must also update the index. The benefits are faster reads, faster sorts, and avoiding full table scans.",
  },

  // ─── Latency vs Throughput ────────────────────────────
  {
    id: "q_latency_t2d_1",
    conceptId: "latency",
    module: 4,
    type: "term_to_def",
    prompt:
      "What is the difference between Latency and Throughput?",
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
      "\"A sports car (fast, carries one package) vs a freight train (slow, carries 10,000 packages).\" What concept does this illustrate?",
    options: ["Latency vs Throughput","Sync vs Async","Microservices vs Monolith","Caching vs Cache Invalidation"],
    correctIndex: 0,
    explanation:
      "This speed-vs-volume tradeoff describes Latency vs Throughput.",
  },
  {
    id: "q_latency_d2t_1",
    conceptId: "latency",
    module: 4,
    type: "def_to_term",
    prompt:
      "The time it takes for a single request to travel from client to server and back. What metric is this?",
    options: ["Latency","Throughput","Bandwidth","TTL"],
    correctIndex: 0,
    explanation:
      "Latency is the time for a single round trip. It's measured in milliseconds and represents the 'speed' of a single operation.",
  },
  {
    id: "q_latency_fib_1",
    conceptId: "latency",
    module: 4,
    type: "fill_in_blank",
    prompt:
      "Fill in the blank: ___ measures how many requests a system can handle per second, while ___ measures how long one request takes.",
    options: ["Throughput, latency","Latency, throughput","Bandwidth, speed","Cache rate, response time"],
    correctIndex: 0,
    explanation:
      "Throughput = requests per second (volume). Latency = time per request (speed). They're related but different metrics.",
  },
  {
    id: "q_latency_tf_1",
    conceptId: "latency",
    module: 4,
    type: "true_false",
    prompt:
      "True or False: Reducing latency always increases throughput.",
    options: [
      "False — they can be inversely related. Batching increases throughput but adds latency; processing one-at-a-time reduces latency but limits throughput.",
      "True — faster requests always mean more requests per second",
      "True — latency and throughput are always proportional",
      "False — latency and throughput are completely unrelated",
    ],
    correctIndex: 0,
    explanation:
      "The freight train shows why: batching requests increases throughput (more items per trip) but adds latency (each item waits for the batch). Optimizing one metric can hurt the other.",
  },
  {
    id: "q_latency_scen_1",
    conceptId: "latency",
    module: 4,
    type: "scenario",
    prompt:
      "Users in Europe complain your US-hosted API is slow. Latency is 200ms per request. How do you reduce it?",
    options: [
      "Deploy servers or a CDN closer to European users to reduce the physical distance data must travel",
      "Add more database indexes",
      "Switch from REST to GraphQL",
      "Increase the server's CPU",
    ],
    correctIndex: 0,
    explanation:
      "High latency from geographic distance is solved by moving servers closer to users. A CDN or edge server in Europe would reduce the round-trip time dramatically.",
  },
  {
    id: "q_latency_win_1",
    conceptId: "latency",
    module: 4,
    type: "which_is_not",
    prompt:
      "Which of the following does NOT directly affect latency?",
    options: ["The number of users on the system","Physical distance between client and server","Network congestion","DNS lookup time"],
    correctIndex: 0,
    explanation:
      "User count affects throughput (how many requests the system handles), not individual request latency. Distance, congestion, and DNS all directly add to each request's latency.",
  },

  // ─── Sync vs Async ────────────────────────────────────
  {
    id: "q_syncasync_t2d_1",
    conceptId: "syncasync",
    module: 4,
    type: "term_to_def",
    prompt:
      "What is the difference between Sync and Async operations?",
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
      "\"You call a restaurant and stay on hold until they confirm (sync). Or you text them and they text back when confirmed (async).\" What concept is this?",
    options: ["Sync vs Async","Latency vs Throughput","Polling vs Webhook","REST vs GraphQL"],
    correctIndex: 0,
    explanation:
      "The phone-call-vs-text analogy describes Sync vs Async operations.",
  },
  {
    id: "q_syncasync_d2t_1",
    conceptId: "syncasync",
    module: 4,
    type: "def_to_term",
    prompt:
      "An operation that lets the caller continue working while the operation completes in the background, notifying when done. What type of operation is this?",
    options: ["Asynchronous","Synchronous","Idempotent","Stateless"],
    correctIndex: 0,
    explanation:
      "This describes asynchronous operations — the caller doesn't block and gets notified when the result is ready.",
  },
  {
    id: "q_syncasync_fib_1",
    conceptId: "syncasync",
    module: 4,
    type: "fill_in_blank",
    prompt:
      "Fill in the blank: In JavaScript, ___ functions return Promises and use the 'await' keyword to pause execution until the Promise resolves.",
    options: ["async","sync","static","callback"],
    correctIndex: 0,
    explanation:
      "async functions are JavaScript's way of writing asynchronous code that reads like synchronous code. The 'await' keyword pauses execution until the Promise resolves.",
  },
  {
    id: "q_syncasync_tf_1",
    conceptId: "syncasync",
    module: 4,
    type: "true_false",
    prompt:
      "True or False: Asynchronous code is always faster than synchronous code.",
    options: [
      "False — async isn't faster per operation; it's more efficient because it doesn't block while waiting, freeing resources for other work",
      "True — async operations always complete faster",
      "True — async uses multiple threads, making it faster",
      "False — synchronous code is always faster because it's simpler",
    ],
    correctIndex: 0,
    explanation:
      "Async doesn't make individual operations faster. It makes the SYSTEM more efficient by not blocking while waiting. The database query takes the same time either way.",
  },
  {
    id: "q_syncasync_scen_1",
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
    id: "q_syncasync_win_1",
    conceptId: "syncasync",
    module: 4,
    type: "which_is_not",
    prompt:
      "Which of the following is NOT a good candidate for asynchronous execution?",
    options: ["Adding 2 + 2 (a trivial calculation)","Fetching data from an API","Reading a large file from disk","Querying a database"],
    correctIndex: 0,
    explanation:
      "Trivial calculations are instant — making them async adds overhead for no benefit. Async shines for I/O operations (network, disk, database) where you'd otherwise be waiting.",
  },

  // ─── CDN ──────────────────────────────────────────────
  {
    id: "q_cdn_t2d_1",
    conceptId: "cdn",
    module: 4,
    type: "term_to_def",
    prompt:
      "What is a CDN?",
    options: [
      "A geographically distributed network of servers that caches and serves content from locations close to users",
      "A single server that handles all traffic for a website",
      "A database that stores user session data",
      "A protocol for encrypting web traffic",
    ],
    correctIndex: 0,
    explanation:
      "A CDN (Content Delivery Network) puts copies of your content in servers worldwide, so users get it from the nearest location instead of crossing the globe.",
  },
  {
    id: "q_cdn_d2t_1",
    conceptId: "cdn",
    module: 4,
    type: "def_to_term",
    prompt:
      "A network of geographically distributed servers that cache content close to end users, reducing latency and load on the origin server. What is this?",
    options: ["CDN","DNS","Load Balancer","API Gateway"],
    correctIndex: 0,
    explanation:
      "This describes a CDN (Content Delivery Network) — bringing content closer to users worldwide.",
  },
  {
    id: "q_cdn_a2t_1",
    conceptId: "cdn",
    module: 4,
    type: "analogy_to_term",
    prompt:
      "\"Instead of one central library everyone drives to, copies of popular books are placed in local branches in every city.\" What concept is this?",
    options: ["CDN","Caching","Load Balancer","DNS"],
    correctIndex: 0,
    explanation:
      "The local library branches analogy describes a CDN — distributing content geographically to serve users from the nearest location.",
  },
  {
    id: "q_cdn_fib_1",
    conceptId: "cdn",
    module: 4,
    type: "fill_in_blank",
    prompt:
      "Fill in the blank: A CDN reduces ___ by serving content from servers that are physically closer to the user.",
    options: ["latency","security","storage","authentication"],
    correctIndex: 0,
    explanation:
      "CDNs reduce latency (the time for data to travel) by shortening the physical distance between the user and the content. Less distance = faster delivery.",
  },
  {
    id: "q_cdn_tf_1",
    conceptId: "cdn",
    module: 4,
    type: "true_false",
    prompt:
      "True or False: CDNs are only useful for serving static files like images and CSS.",
    options: [
      "False — modern CDNs also cache API responses, run serverless functions at the edge, and accelerate dynamic content",
      "True — CDNs can only serve static files",
      "True — dynamic content can't be cached on CDNs",
      "False — CDNs don't serve static files; they only accelerate API calls",
    ],
    correctIndex: 0,
    explanation:
      "Modern CDNs (like Cloudflare, Vercel Edge) go far beyond static files. They cache API responses, run edge functions, and even handle dynamic content acceleration.",
  },
  {
    id: "q_cdn_scen_1",
    conceptId: "cdn",
    module: 4,
    type: "scenario",
    prompt:
      "Your website loads fast for users in New York (where your server is) but slowly for users in Tokyo. What infrastructure would fix this?",
    options: [
      "A CDN — it would serve cached content from a server in or near Tokyo, eliminating the cross-Pacific round trip",
      "A bigger server in New York",
      "A faster database",
      "More API endpoints",
    ],
    correctIndex: 0,
    explanation:
      "The issue is geographic distance. A CDN with edge servers in Asia would serve Tokyo users from a nearby location instead of requiring every request to cross the Pacific Ocean.",
  },
  {
    id: "q_cdn_win_1",
    conceptId: "cdn",
    module: 4,
    type: "which_is_not",
    prompt:
      "Which of the following is NOT a benefit of using a CDN?",
    options: ["Replacing your database","Reducing latency for geographically distant users","Reducing load on your origin server","Protecting against DDoS attacks by absorbing traffic"],
    correctIndex: 0,
    explanation:
      "CDNs don't replace databases — they cache and serve content. Their benefits are: reduced latency, lower origin server load, and DDoS protection.",
  },

  // ─── Load Balancer ────────────────────────────────────
  {
    id: "q_loadbalancer_t2d_1",
    conceptId: "loadbalancer",
    module: 5,
    type: "term_to_def",
    prompt:
      "What is a Load Balancer?",
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
      "\"A host at a restaurant who seats customers at whichever table has the shortest wait.\" What concept is this?",
    options: ["Load Balancer","API Gateway","Middleware","Message Queue"],
    correctIndex: 0,
    explanation:
      "The restaurant host analogy describes a Load Balancer — distributing work evenly across servers.",
  },
  {
    id: "q_loadbalancer_d2t_1",
    conceptId: "loadbalancer",
    module: 5,
    type: "def_to_term",
    prompt:
      "A system that distributes incoming network traffic across multiple server instances to ensure no single server becomes a bottleneck. What is this?",
    options: ["Load Balancer","API Gateway","CDN","DNS"],
    correctIndex: 0,
    explanation:
      "This describes a Load Balancer — distributing traffic for reliability and performance.",
  },
  {
    id: "q_loadbalancer_fib_1",
    conceptId: "loadbalancer",
    module: 5,
    type: "fill_in_blank",
    prompt:
      "Fill in the blank: ___ scaling adds more servers behind a load balancer, while ___ scaling makes a single server more powerful.",
    options: ["Horizontal, vertical","Vertical, horizontal","Linear, exponential","Auto, manual"],
    correctIndex: 0,
    explanation:
      "Horizontal scaling = more servers (scale out). Vertical scaling = bigger server (scale up). Load balancers enable horizontal scaling by distributing traffic across multiple machines.",
  },
  {
    id: "q_loadbalancer_tf_1",
    conceptId: "loadbalancer",
    module: 5,
    type: "true_false",
    prompt:
      "True or False: A load balancer routes requests to different services based on the URL path (e.g., /users goes to one service, /orders to another).",
    options: [
      "False — that's an API Gateway's job. A load balancer distributes traffic across copies of the SAME service for capacity.",
      "True — load balancers route to different services based on the URL",
      "True — load balancers and API gateways are the same thing",
      "False — load balancers don't look at URLs at all; they use IP addresses only",
    ],
    correctIndex: 0,
    explanation:
      "Load balancers distribute traffic across identical server copies. API Gateways route to different services based on the request. They solve different problems.",
  },
  {
    id: "q_loadbalancer_scen_1",
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
  {
    id: "q_loadbalancer_win_1",
    conceptId: "loadbalancer",
    module: 5,
    type: "which_is_not",
    prompt:
      "Which of the following is NOT a benefit of load balancing?",
    options: [
      "Encrypting data between client and server",
      "Preventing a single server from being overwhelmed",
      "Enabling horizontal scaling",
      "Improving reliability (if one server goes down, others handle traffic)",
    ],
    correctIndex: 0,
    explanation:
      "Encryption is handled by TLS/SSL, not load balancers. Load balancers provide traffic distribution, horizontal scaling, and fault tolerance.",
  },

  // ─── Microservices vs Monolith ────────────────────────
  {
    id: "q_microservices_t2d_1",
    conceptId: "microservices",
    module: 5,
    type: "term_to_def",
    prompt:
      "What is the difference between Microservices and a Monolith?",
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
      "\"One restaurant where the same crew does everything vs a food court where each stall specializes.\" What concept is this?",
    options: ["Microservices vs Monolith","Sync vs Async","Latency vs Throughput","REST vs GraphQL"],
    correctIndex: 0,
    explanation:
      "The restaurant-vs-food-court analogy describes Microservices vs Monolith architectures.",
  },
  {
    id: "q_microservices_d2t_1",
    conceptId: "microservices",
    module: 5,
    type: "def_to_term",
    prompt:
      "An architecture where each business function runs as its own independent service, communicating over the network. What is this?",
    options: ["Microservices","Monolith","Middleware","API Gateway"],
    correctIndex: 0,
    explanation:
      "This describes Microservices — independent, specialized services that communicate via APIs.",
  },
  {
    id: "q_microservices_fib_1",
    conceptId: "microservices",
    module: 5,
    type: "fill_in_blank",
    prompt:
      "Fill in the blank: A ___ is simpler to develop and deploy initially, but a ___ architecture scales better as the system grows.",
    options: ["monolith, microservices","microservices, monolith","CDN, API Gateway","database, cache"],
    correctIndex: 0,
    explanation:
      "Monoliths are simpler to start with — one codebase, one deployment. Microservices add complexity but allow independent scaling, deployment, and technology choices per service.",
  },
  {
    id: "q_microservices_tf_1",
    conceptId: "microservices",
    module: 5,
    type: "true_false",
    prompt:
      "True or False: Microservices are always better than monoliths.",
    options: [
      "False — microservices add significant complexity (networking, data consistency, deployment); monoliths are often the right choice for small-to-medium apps",
      "True — microservices are the modern standard and always preferable",
      "True — monoliths can't scale at all",
      "False — but only because microservices are more expensive",
    ],
    correctIndex: 0,
    explanation:
      "Microservices solve scaling problems but introduce new ones: network complexity, distributed data management, and operational overhead. Many successful products run on monoliths.",
  },
  {
    id: "q_microservices_scen_1",
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
    id: "q_microservices_win_1",
    conceptId: "microservices",
    module: 5,
    type: "which_is_not",
    prompt:
      "Which of the following is NOT an advantage of microservices over a monolith?",
    options: ["Simpler development and debugging","Independent scaling of individual services","Independent deployment of individual services","Technology flexibility (different languages per service)"],
    correctIndex: 0,
    explanation:
      "Monoliths are actually simpler to develop and debug — one codebase, no network calls between services, easier to trace issues. Microservices trade simplicity for scalability and independence.",
  },

  // ─── Message Queue ────────────────────────────────────
  {
    id: "q_queue_t2d_1",
    conceptId: "queue",
    module: 5,
    type: "term_to_def",
    prompt:
      "What is a Message Queue?",
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
      "\"A take-a-number deli counter — customers drop off orders and the kitchen works through them one by one.\" What concept is this?",
    options: ["Message Queue","Load Balancer","Middleware","Event Loop"],
    correctIndex: 0,
    explanation:
      "The deli counter analogy describes a Message Queue — buffering work between producers and consumers.",
  },
  {
    id: "q_queue_d2t_1",
    conceptId: "queue",
    module: 5,
    type: "def_to_term",
    prompt:
      "A buffer that sits between services, where producers add tasks and consumers process them at their own pace, decoupling the two. What is this?",
    options: ["Message Queue","Load Balancer","API Gateway","Cache"],
    correctIndex: 0,
    explanation:
      "This describes a Message Queue — decoupling producers from consumers so they can work at their own pace.",
  },
  {
    id: "q_queue_fib_1",
    conceptId: "queue",
    module: 5,
    type: "fill_in_blank",
    prompt:
      "Fill in the blank: A message queue ___ the producer and consumer, so if the consumer is slow or down, the producer isn't affected.",
    options: ["decouples","encrypts","indexes","caches"],
    correctIndex: 0,
    explanation:
      "Decoupling is the key benefit of message queues. The producer adds messages without caring about the consumer's speed or availability. The queue absorbs the difference.",
  },
  {
    id: "q_queue_tf_1",
    conceptId: "queue",
    module: 5,
    type: "true_false",
    prompt:
      "True or False: If the consumer service crashes, messages in the queue are lost.",
    options: [
      "False — durable message queues (like RabbitMQ, SQS) persist messages to disk, so they survive crashes and are processed when the consumer recovers",
      "True — messages only exist in memory and are lost on crash",
      "True — message queues don't have persistence",
      "False — but only if you use a database-backed queue",
    ],
    correctIndex: 0,
    explanation:
      "Production message queues persist messages to disk. If the consumer crashes, messages wait in the queue until the consumer recovers. This is a key reliability feature.",
  },
  {
    id: "q_queue_scen_1",
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
    id: "q_queue_win_1",
    conceptId: "queue",
    module: 5,
    type: "which_is_not",
    prompt:
      "Which of the following is NOT a benefit of message queues?",
    options: ["Reducing database query latency","Decoupling services so they can work independently","Handling traffic spikes by buffering requests","Enabling retry logic for failed tasks"],
    correctIndex: 0,
    explanation:
      "Message queues don't affect database latency — that's what indexes and caching do. Queues decouple services, absorb traffic spikes, and enable retries.",
  },

  // ─── Docker / Containers ──────────────────────────────
  {
    id: "q_containers_t2d_1",
    conceptId: "containers",
    module: 5,
    type: "term_to_def",
    prompt:
      "What are Docker / Containers?",
    options: [
      "A way to package an application with all its dependencies into a standardized unit that runs the same everywhere",
      "Virtual machines that simulate entire operating systems",
      "Cloud servers that automatically scale based on traffic",
      "A version control system for tracking code changes",
    ],
    correctIndex: 0,
    explanation:
      "Containers are like shipping containers — no matter what's inside, they fit on any ship, truck, or crane. The container standardizes the packaging so the transport system doesn't care what's inside.",
  },
  {
    id: "q_containers_d2t_1",
    conceptId: "containers",
    module: 5,
    type: "def_to_term",
    prompt:
      "A lightweight, portable package containing an application and all its dependencies that runs consistently across different environments. What is this?",
    options: ["Container","Virtual Machine","Server","Package Manager"],
    correctIndex: 0,
    explanation:
      "This describes a Container — a portable, self-contained unit that runs the same everywhere.",
  },
  {
    id: "q_containers_a2t_1",
    conceptId: "containers",
    module: 5,
    type: "analogy_to_term",
    prompt:
      "\"A shipping container — no matter what's inside (furniture, electronics, food), it fits on any ship, any truck, any crane.\" What concept is this?",
    options: ["Docker / Containers","Virtual Machines","Cloud Functions","Load Balancer"],
    correctIndex: 0,
    explanation:
      "The shipping container analogy describes Docker containers — standardized packaging that works on any infrastructure.",
  },
  {
    id: "q_containers_fib_1",
    conceptId: "containers",
    module: 5,
    type: "fill_in_blank",
    prompt:
      "Fill in the blank: A ___ is a text file containing instructions to build a container image, typically starting with \"FROM\" to specify the base image.",
    options: ["Dockerfile","package.json",".env","docker-compose.yml"],
    correctIndex: 0,
    explanation:
      "A Dockerfile contains step-by-step instructions for building a container image — specifying the base OS, installing dependencies, copying code, and setting the startup command.",
  },
  {
    id: "q_containers_tf_1",
    conceptId: "containers",
    module: 5,
    type: "true_false",
    prompt:
      "True or False: Containers and Virtual Machines are the same thing.",
    options: [
      "False — containers share the host OS kernel (lightweight, fast), while VMs include their own full OS (heavier, more isolated)",
      "True — they're different names for the same technology",
      "True — containers are just smaller virtual machines",
      "False — virtual machines are faster than containers",
    ],
    correctIndex: 0,
    explanation:
      "Containers share the host OS kernel, making them lightweight and fast to start (seconds). VMs include a full OS, making them heavier but more isolated. Containers are measured in MB, VMs in GB.",
  },
  {
    id: "q_containers_scen_1",
    conceptId: "containers",
    module: 5,
    type: "scenario",
    prompt:
      "A developer says 'it works on my machine' but the code fails in production. How do containers solve this?",
    options: [
      "Containers package the app with its exact dependencies and runtime, so the same container runs identically everywhere",
      "Containers make the developer's machine run the same OS as production",
      "Containers automatically fix dependency conflicts",
      "Containers eliminate the need for testing",
    ],
    correctIndex: 0,
    explanation:
      "'Works on my machine' happens because environments differ. Containers solve this by packaging everything together — the same container image runs identically on the developer's laptop, CI/CD, staging, and production.",
  },
  {
    id: "q_containers_win_1",
    conceptId: "containers",
    module: 5,
    type: "which_is_not",
    prompt:
      "Which of the following is NOT a benefit of using containers?",
    options: ["They eliminate the need for version control (Git)","They ensure consistency across environments","They start up much faster than virtual machines","They're portable across different infrastructure providers"],
    correctIndex: 0,
    explanation:
      "Containers don't replace version control — you still need Git for code history and collaboration. Containers handle environment consistency, fast startup, and portability.",
  },

  // ─── SLA / SLO / SLI ──────────────────────────────────

  {
    id: "q_slo_t2d_1",
    conceptId: "slo",
    module: 5,
    type: "term_to_def",
    prompt: "What is the difference between an SLI, SLO, and SLA?",
    options: [
      "SLI is the measured metric, SLO is the internal target, SLA is the customer-facing contract with consequences",
      "SLA is the measured metric, SLI is the internal target, SLO is the customer contract",
      "SLO and SLA are the same — both are customer contracts. SLI is just a metric",
      "SLI is a tool, SLO is a process, SLA is a document",
    ],
    correctIndex: 0,
    explanation: "Think in order: SLI (what you measure) → SLO (what you aim for internally) → SLA (what you promise externally with consequences). Your SLA is typically more lenient than your SLO — if your SLO is 99.9%, your SLA might be 99.5%, giving you buffer before a contract breach.",
  },
  {
    id: "q_slo_scen_1",
    conceptId: "slo",
    module: 5,
    type: "scenario",
    prompt: "Your team's SLO is 99.9% uptime per month. The service was down for 50 minutes this month. Did you breach your SLO?",
    options: [
      "Yes — 99.9% uptime allows only ~43 minutes of downtime per month; 50 minutes exceeds that",
      "No — 50 minutes is less than 1 hour, which is always within acceptable SLO bounds",
      "It depends on whether customers noticed the outage",
      "No — SLOs only apply to business-hours downtime",
    ],
    correctIndex: 0,
    explanation: "99.9% uptime = 0.1% downtime allowed. In a 30-day month (43,200 minutes), 0.1% = 43.2 minutes. 50 minutes exceeds that — SLO breached. 'Three nines' sounds reliable, but it's only 43 minutes of downtime per month. Four nines (99.99%) allows just 4 minutes.",
  },
  {
    id: "q_slo_fill_1",
    conceptId: "slo",
    module: 5,
    type: "fill_in_blank",
    prompt: "Fill in the blank: The amount of downtime or errors a team is 'allowed' before breaching their SLO is called their ___.",
    options: ["error budget", "uptime quota", "incident allowance", "reliability margin"],
    correctIndex: 0,
    explanation: "Error budget = 100% − SLO. If your SLO is 99.9%, your error budget is 0.1%. Teams track budget spent. When it's depleted, they freeze risky releases and focus on reliability improvements.",
  },
  {
    id: "q_slo_win_1",
    conceptId: "slo",
    module: 5,
    type: "which_is_not",
    prompt: "Which of the following is NOT an SLI (Service Level Indicator)?",
    options: [
      "The goal to achieve 99.9% uptime next quarter",
      "The percentage of requests that return a 2xx status code",
      "Average API response time in milliseconds",
      "Error rate over the past 24 hours",
    ],
    correctIndex: 0,
    explanation: "An SLI is a measurement — a number you observe. '99.9% uptime' is a goal, which makes it an SLO. Actual measured success rate, response time, and error rate are all SLIs — the raw data that tells you whether you're hitting your target.",
  },

  // ─── Observability ─────────────────────────────────────

  {
    id: "q_observability_t2d_1",
    conceptId: "observability",
    module: 5,
    type: "term_to_def",
    prompt: "What are the three pillars of Observability?",
    options: [
      "Logs (event records), Metrics (numeric measurements over time), and Traces (request path through services)",
      "Monitoring, Alerting, and Dashboards",
      "CPU usage, Memory usage, and Network I/O",
      "Unit tests, Integration tests, and End-to-end tests",
    ],
    correctIndex: 0,
    explanation: "Logs: timestamped event records (what happened). Metrics: numeric aggregates over time — CPU%, error rate, latency (how often/how much). Traces: the end-to-end journey of a single request through your microservices (where). Together they let you understand, measure, and debug a system without guessing.",
  },
  {
    id: "q_observability_scen_1",
    conceptId: "observability",
    module: 5,
    type: "scenario",
    prompt: "An API request takes 3 seconds instead of 100ms. You have 8 microservices. Which observability tool do you reach for first to find the bottleneck?",
    options: [
      "Distributed tracing — it shows the end-to-end path and how long each service took",
      "Logs — grep through all 8 services' log files for the slow request",
      "Metrics — check the CPU dashboard to see which service is overloaded",
      "Alerts — wait for the on-call system to page the responsible team",
    ],
    correctIndex: 0,
    explanation: "Distributed tracing (Jaeger, Datadog APM) shows the full span of a request across all services with timing per hop — you instantly see which service is the bottleneck. Logs work but require manually searching 8 systems. Metrics show aggregate trends, not individual request paths.",
  },
  {
    id: "q_observability_code_1",
    conceptId: "observability",
    module: 5,
    type: "code_snippet",
    codeSnippet: `// Tool A:
2024-01-15 14:23:01 ERROR user-service: DB query failed for userId=789

// Tool B:
api_error_rate{service="user"} 0.034  // 3.4% errors in last 5 min

// Tool C:
[frontend 12ms] → [api-gateway 8ms] → [user-service 2847ms] → [postgres 2801ms]`,
    prompt: "Match each output to the correct observability pillar.",
    options: [
      "A = Log, B = Metric, C = Trace",
      "A = Trace, B = Log, C = Metric",
      "A = Metric, B = Log, C = Trace",
      "A = Log, B = Trace, C = Metric",
    ],
    correctIndex: 0,
    explanation: "Logs are timestamped event records (Tool A — specific error with context). Metrics are numeric aggregates over time (Tool B — 3.4% error rate over 5 minutes). Traces show request flow across services with per-hop timing (Tool C — and it immediately reveals the culprit: postgres taking 2801ms).",
  },

  // ─── SQL vs NoSQL ──────────────────────────────────────

  {
    id: "q_sqlvsnosql_t2d_1",
    conceptId: "sqlvsnosql",
    module: 4,
    type: "term_to_def",
    prompt: "What is the core tradeoff between SQL and NoSQL databases?",
    options: [
      "SQL enforces strict schemas and supports complex joins; NoSQL trades structure for flexibility and horizontal scale",
      "SQL is faster than NoSQL for all use cases; NoSQL is only used for large file storage",
      "NoSQL requires a fixed schema like SQL but stores data in files instead of tables",
      "SQL is for backend services; NoSQL is specifically designed for frontend data",
    ],
    correctIndex: 0,
    explanation: "SQL (PostgreSQL, MySQL): rigid schema, powerful JOINs, ACID transactions, best for relational data with complex queries. NoSQL (MongoDB, DynamoDB, Redis): flexible schema, scales horizontally, best for high-volume simple-access patterns. Neither is universally better — the right choice depends on your data model.",
  },
  {
    id: "q_sqlvsnosql_scen_1",
    conceptId: "sqlvsnosql",
    module: 4,
    type: "scenario",
    prompt: "You're building a product catalog where each product has completely different attributes (shoes: size/color, electronics: voltage/wattage). Which database fits better?",
    options: [
      "NoSQL — flexible document store handles variable schemas well; each document can have different fields",
      "SQL — use separate tables per product type with proper foreign keys",
      "SQL — add a 'properties' TEXT column to store attributes as a JSON string",
      "Both are equally suited — database choice doesn't depend on schema flexibility",
    ],
    correctIndex: 0,
    explanation: "Variable schemas are a classic NoSQL fit. In MongoDB, each product document can have different fields naturally. In SQL, you'd fight the schema — dozens of nullable columns, or JSON in a text column (at which point you've lost SQL's query advantages anyway).",
  },
  {
    id: "q_sqlvsnosql_win_1",
    conceptId: "sqlvsnosql",
    module: 4,
    type: "which_is_not",
    prompt: "Which of the following is NOT typically a strength of SQL over NoSQL?",
    options: [
      "Easier to scale horizontally across thousands of servers",
      "Support for complex JOIN queries across multiple tables",
      "ACID transaction guarantees (all-or-nothing operations)",
      "Strict schema enforcement that prevents malformed data",
    ],
    correctIndex: 0,
    explanation: "Horizontal scaling (adding more servers) is NoSQL's strength — traditional SQL databases are hard to shard across many machines. SQL's advantages are: powerful JOINs, ACID transactions, and strict data integrity. NoSQL gives up some of these for flexibility and scale.",
  },

  // ─── Code Snippet: Caching ─────────────────────────────

  {
    id: "q_caching_code_1",
    conceptId: "caching",
    module: 4,
    type: "code_snippet",
    codeSnippet: `HTTP/1.1 200 OK
Cache-Control: max-age=3600, public
Content-Type: application/json
ETag: "abc123"`,
    prompt: "What does 'Cache-Control: max-age=3600, public' tell browsers and CDNs?",
    options: [
      "Cache this response for 1 hour; both browsers and CDN proxies are allowed to store it",
      "Cache for 3,600 milliseconds; only the user's browser — not CDNs — can cache it",
      "Never cache this response; always fetch fresh from the origin server",
      "Cache forever since 3600 is a maximum — actual duration is up to the client",
    ],
    correctIndex: 0,
    explanation: "max-age=3600 = cache for 3600 seconds (1 hour). 'public' means shared caches (CDNs, proxies) can store it too, not just the browser. 'private' would restrict it to the browser only. The ETag is a validator — when the cache expires, the client can send it back to ask if the content changed.",
  },
];
