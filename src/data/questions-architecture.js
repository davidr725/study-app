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
    type: "scenario",
    prompt:
      "You need an API where retrying a failed payment request doesn't accidentally charge the customer twice. Making the operation produce the same result whether called once or multiple times describes which property?",
    options: [
      "Idempotency",
      "Atomicity",
      "Statelessness",
      "Immutability",
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
      "False — POST creates a new resource each time, so calling it twice creates two separate resources",
      "True — all standard HTTP methods are idempotent by default, including POST which just sends data",
      "True — POST simply transmits data to the server, so resending the same data has no extra effect",
      "False — POST is only idempotent when paired with REST conventions and a unique request identifier",
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
      "The retry is rejected with a 409 Conflict because the server detects the duplicate transaction ID automatically",
      "The server's built-in deduplication layer catches the retry and returns the original response without reprocessing",
      "The payment gateway queues the retry and merges it with the original request, so only one charge goes through",
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
    type: "scenario",
    prompt:
      "Your search query scans every row in a 10-million-row table, taking 8 seconds. A colleague suggests adding a data structure that lets the database jump directly to matching rows — at the cost of slower writes. What are they recommending?",
    options: [
      "Database Index",
      "Cache Layer",
      "Query Optimizer",
      "Table Partition",
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
    options: ["table scan","index rebuild","row lock","query parse"],
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
      "False — each index slows down writes (INSERT, UPDATE, DELETE) and uses disk space, so only index columns you query often",
      "True — indexes speed up all operations including writes, so adding more always improves overall database performance",
      "True — modern databases optimize indexes automatically, so more indexes means faster reads with no meaningful overhead",
      "False — databases can only maintain one index per table, so you must choose the single most important column to index",
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
      "Indexes consume additional disk space that grows with the size of the table",
      "Indexes require periodic manual rebuilds to stay accurate and performant",
      "Indexed columns become immutable and cannot be updated after creation",
    ],
    correctIndex: 0,
    explanation:
      "The main downside is slower writes. While indexes do use disk space and occasionally need maintenance, the primary cost is that every insert, update, or delete must also update the index. For write-heavy tables, this tradeoff might not be worth it.",
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
    type: "scenario",
    prompt:
      "Your team is debating two metrics: how fast a single API request completes vs. how many total requests the system handles per second. Which pair of concepts are they comparing?",
    options: [
      "Latency vs Throughput",
      "Sync vs Async",
      "Bandwidth vs Bitrate",
      "Caching vs Indexing",
    ],
    correctIndex: 0,
    explanation:
      "Latency = speed of one request. Throughput = volume of requests. A sports car (low latency) vs a freight train (high throughput). Optimizing one can hurt the other.",
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
      "False — they can be inversely related; batching requests increases throughput but adds latency to each individual item",
      "True — faster individual requests always translate directly into more total requests handled per second by the system",
      "True — latency and throughput are always proportional, so halving response time will always double your throughput",
      "False — latency and throughput measure completely different things and never influence each other in any situation",
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
      "Add database connection pooling to handle more concurrent European requests efficiently",
      "Compress API response payloads with gzip to reduce the amount of data transferred",
      "Increase the server's RAM and CPU to process European requests more quickly on arrival",
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
    type: "scenario",
    prompt:
      "Your app makes four independent database queries one after another, each waiting for the previous to finish before starting. A colleague says you could run them all at once and cut load time from 8 seconds to 2 seconds. What programming model shift are they suggesting?",
    options: [
      "Sync to Async",
      "Polling to Webhooks",
      "REST to GraphQL",
      "Monolith to Microservices",
    ],
    correctIndex: 0,
    explanation:
      "Sync = stay on hold until they answer. Async = text them and they text back when ready. Running independent operations in parallel (async) instead of sequentially (sync) is one of the most common performance wins.",
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
      "False — async doesn't speed up individual operations; it improves efficiency by not blocking while waiting, freeing resources",
      "True — async operations complete faster because the runtime optimizes them with dedicated background processing threads",
      "True — async uses multiple CPU threads in parallel, so each individual operation finishes in significantly less time",
      "False — synchronous code is always faster because it avoids the overhead of managing callbacks, promises, and event loops",
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
      "The queries lack proper indexes, so adding indexes to the queried columns would fix the slow dashboard",
      "Synchronous queries bypass the cache layer, so switching to async enables caching and speeds things up",
      "The queries are fetching too much data; paginating the results would reduce the total load time",
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
    type: "scenario",
    prompt:
      "Your website loads fast for US users but takes 4 seconds in Asia. You need geographically distributed servers to serve cached content from locations close to each user. What infrastructure solves this?",
    options: [
      "CDN",
      "Load Balancer",
      "API Gateway",
      "DNS",
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
    options: ["latency","bandwidth","throughput","downtime"],
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
      "True — CDNs are designed to serve static assets only, since dynamic content changes too often to benefit from caching",
      "True — dynamic content requires server-side processing on every request, which makes it incompatible with CDN caching",
      "False — CDNs actually focus on accelerating API calls and database queries, not on serving static files like images",
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
      "A load balancer — distributing Tokyo requests across multiple New York servers to handle them faster",
      "A caching layer like Redis — storing frequent responses in memory so the server responds more quickly",
      "Response compression — reducing payload size so data transfers faster over the long-distance connection",
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
    options: ["Encrypting data stored in your database","Reducing latency for geographically distant users","Reducing load on your origin server","Protecting against DDoS attacks by absorbing traffic"],
    correctIndex: 0,
    explanation:
      "CDNs don't handle database encryption — that's done by the database itself or disk-level encryption. CDN benefits are: reduced latency, lower origin server load, and DDoS protection.",
  },

  // ─── Load Balancer ────────────────────────────────────
  {
    id: "q_loadbalancer_t2d_1",
    conceptId: "loadbalancer",
    module: 5,
    type: "scenario",
    prompt:
      "Your single server can handle 1,000 requests per second but you're getting 5,000. You need to distribute traffic across multiple identical servers. What infrastructure component does this?",
    options: [
      "Load Balancer",
      "API Gateway",
      "CDN",
      "Message Queue",
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
      "False — that's an API Gateway's job; a load balancer distributes traffic across copies of the SAME service for capacity",
      "True — load balancers inspect the URL path and route each request to the appropriate backend service accordingly",
      "True — load balancers and API gateways perform the same function, just with different configuration options",
      "False — load balancers work only at the TCP/IP layer and cannot inspect any part of the HTTP request at all",
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
      "A CDN caching static assets so the origin server handles fewer requests during the spike",
      "Vertical scaling — upgrading the single server to one with more CPU, RAM, and faster storage",
      "A message queue buffering incoming requests so the server processes them at a steady pace",
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
    type: "scenario",
    prompt:
      "Your company's single codebase has grown to 2 million lines. Deploying a small change requires rebuilding and redeploying the entire application, and a bug in checkout crashes the whole site. The team wants to split it into independent, separately deployable services. What architecture are they moving to?",
    options: [
      "Microservices",
      "Serverless",
      "Event-Driven",
      "Service Mesh",
    ],
    correctIndex: 0,
    explanation:
      "Monolith = one restaurant doing everything. Microservices = a food court where each stall specializes. Monolith is simpler to start; microservices scale better but add complexity.",
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
      "False — microservices add significant complexity in networking, data consistency, and deployment; monoliths are often better for small apps",
      "True — microservices are the modern industry standard, and every new project should use them regardless of team size or scope",
      "True — monoliths cannot scale beyond a single server, so any app expecting growth must start with microservices instead",
      "False — microservices and monoliths are technically equivalent, but microservices cost more to run due to network overhead",
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
      "Microservices — each service runs independently, so one can fail while others stay up",
      "Monolith — a monolith isolates failures per module, keeping unrelated features running",
      "Neither — partial failures like this are caused by database connection issues, not architecture",
      "Both — any architecture can have partial failures depending on how error handling is configured",
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
    type: "scenario",
    prompt:
      "Your order service calls the email service directly, but when the email service is slow, orders back up. You need a buffer between them so orders complete immediately and emails get sent when the service is ready. What component solves this?",
    options: [
      "Message Queue",
      "Load Balancer",
      "API Gateway",
      "Cache",
    ],
    correctIndex: 0,
    explanation:
      "A Message Queue is a take-a-number deli counter — customers drop off orders and the kitchen works through them at its own pace. It decouples producers from consumers.",
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
      "False — durable queues like RabbitMQ and SQS persist messages to disk, so they survive crashes and get processed on recovery",
      "True — message queues store messages in memory only, so a consumer crash causes all unprocessed messages to be permanently lost",
      "True — message queues are designed for speed over durability, so they deliberately skip writing messages to persistent storage",
      "False — messages survive only if you configure the queue to use a relational database as its backing store instead of memory",
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
      "Throughput — message queues batch email requests together, which sends them faster than individual API calls",
      "Reliability — direct HTTP calls between services can't be retried, but queued messages retry automatically",
      "Security — message queues encrypt data in transit between services, which direct internal API calls skip",
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
    type: "scenario",
    prompt:
      "A developer's app works perfectly on their laptop but crashes in production due to different OS versions and missing libraries. They need a way to package the app with its exact dependencies so it runs identically everywhere. What technology solves this?",
    options: [
      "Docker / Containers",
      "Virtual Machines",
      "Package Managers",
      "Environment Variables",
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
      "False — containers share the host OS kernel and are lightweight, while VMs include their own full OS and are heavier but more isolated",
      "True — containers and VMs are different names for the same virtualization technology, just from different vendors and eras",
      "True — containers are simply smaller virtual machines that run a stripped-down OS, trading some isolation for less disk usage",
      "False — virtual machines start faster and use fewer resources than containers, which is why VMs are preferred for microservices",
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
      "Containers enforce strict version pinning in package.json, preventing accidental dependency upgrades in production",
      "Containers snapshot the developer's entire machine state and replicate it exactly on the production server",
      "Containers run each dependency in its own isolated sandbox, automatically resolving version conflicts at runtime",
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
    type: "scenario",
    prompt:
      "Your team tracks actual uptime percentage (a measurement), aims for 99.9% internally (a target), and the contract with customers guarantees 99.5% with refund penalties if breached (a promise). What are these three things called, in that order?",
    options: [
      "SLI, SLO, SLA",
      "SLA, SLI, SLO",
      "SLO, SLA, SLI",
      "SLA, SLO, SLI",
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
      "Yes — 99.9% uptime allows only ~43 minutes of downtime per month, and 50 minutes exceeds that",
      "No — 99.9% uptime allows ~72 minutes of downtime per month, so 50 minutes is still within budget",
      "It depends — SLOs only count unplanned downtime, and scheduled maintenance windows are excluded",
      "No — SLOs measure availability over a rolling quarter, not a single month, so one bad month is fine",
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
    type: "scenario",
    prompt:
      "Your production system is acting strangely. You need timestamped event records to see what happened, numeric measurements over time to spot trends, and end-to-end request paths to find bottlenecks across services. These three data types are known as the three pillars of which practice?",
    options: [
      "Observability",
      "Monitoring",
      "Incident Response",
      "Continuous Integration",
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
      "Distributed tracing — it shows the request's path through all services with per-hop timing",
      "Logs — search each service's log files for the request ID to find error messages or delays",
      "Metrics — check CPU and memory dashboards for each service to find the overloaded one",
      "Alerts — set up latency thresholds on each service so the monitoring system identifies it",
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
    type: "scenario",
    prompt:
      "Your team is choosing a database. One option enforces strict schemas with powerful JOIN queries and ACID transactions. The other offers flexible schemas and easy horizontal scaling but limited query power. What two database categories are they comparing?",
    options: [
      "SQL vs NoSQL",
      "OLTP vs OLAP",
      "Graph vs Document",
      "Cache vs Persistent Store",
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
