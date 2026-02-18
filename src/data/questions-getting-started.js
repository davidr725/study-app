// ─── GETTING STARTED QUESTIONS ───
// Beginner-level questions for non-technical learners
// Covers: internet basics, networking, programming fundamentals

export const QUESTIONS_GETTING_STARTED = [
  // ─── How the Internet Works ──────────────────────────
  {
    id: "q_internet_scen_1",
    conceptId: "internet",
    module: 0,
    type: "scenario",
    prompt:
      "You send an email from New York to a friend in Tokyo. The email arrives in about 2 seconds. What best describes the system that made this possible?",
    options: [
      "A global network of interconnected computers that route data packets through cables and wireless signals across the world",
      "A single direct cable connection between your computer in New York and your friend's computer in Tokyo that transmits instantly",
      "A satellite that stores all emails in space and beams them down to the recipient's nearest cell tower when requested",
      "A centralized supercomputer that receives all messages, translates them, and forwards them to the correct country's network",
    ],
    correctIndex: 0,
    explanation:
      "The internet is a global network of interconnected computers. Your email gets broken into packets that hop through multiple routers and cables to reach Tokyo — there's no single direct wire or central computer.",
  },
  {
    id: "q_internet_scen_2",
    conceptId: "internet",
    module: 0,
    type: "scenario",
    prompt:
      "You're watching a video and your roommate is on a video call — both at the same time on the same Wi-Fi. How is data for both activities delivered simultaneously?",
    options: [
      "The data is split into small packets, and packets for both activities are sent and received independently across the network",
      "The router picks one activity to prioritize and pauses the other until the first one finishes completely",
      "Each activity is assigned its own dedicated cable that runs from your home to the content provider's building",
      "Your internet provider creates a temporary copy of the entire video on your router so it doesn't need the network",
    ],
    correctIndex: 0,
    explanation:
      "The internet breaks all data into small packets. Packets for your video and your roommate's call travel independently, so multiple activities can share the same connection at the same time.",
  },
  {
    id: "q_internet_tf_1",
    conceptId: "internet",
    module: 0,
    type: "true_false",
    prompt:
      "True or False: The internet is a single computer that all devices connect to in order to access websites and send messages.",
    options: [
      "False — the internet is a global network of many interconnected computers, not one central machine",
      "True — the internet is one powerful central computer that handles all the world's web traffic at once",
      "False — the internet is a single cable that physically connects every device on the planet in a loop",
      "True — the internet is a supercomputer owned by the government that routes all data through one hub",
    ],
    correctIndex: 0,
    explanation:
      "The internet is not one computer. It's a massive network of millions of interconnected computers and devices around the world that pass data between each other.",
  },
  {
    id: "q_internet_d2t_1",
    conceptId: "internet",
    module: 0,
    type: "def_to_term",
    prompt:
      "A global network of interconnected computers that communicate by sending data in small packets through cables, wireless signals, and satellites. What is this?",
    options: [
      "The Internet",
      "A Web Browser",
      "A Domain Name",
      "A Web Server",
    ],
    correctIndex: 0,
    explanation:
      "This is the definition of the internet — a worldwide network of connected computers that exchange data in small packets using cables, wireless signals, and satellites.",
  },
  {
    id: "q_internet_fib_1",
    conceptId: "internet",
    module: 0,
    type: "fill_in_blank",
    prompt:
      "Fill in the blank: When you load a web page, the data travels across the _____ — a global network of connected computers — to reach your device.",
    options: [
      "internet",
      "hard drive",
      "web browser",
      "power grid",
    ],
    correctIndex: 0,
    explanation:
      "Data travels across the internet to reach your device. The internet is the global network that connects computers and allows them to exchange information.",
  },

  // ─── IP Addresses & Ports ────────────────────────────
  {
    id: "q_ipaddress_scen_1",
    conceptId: "ipaddress",
    module: 0,
    type: "scenario",
    prompt:
      "A technician says your computer's address on the network is 192.168.1.5, and your web browser is receiving data on port 443. What concept does this number-and-port combination represent?",
    options: [
      "An IP address with a port number — the numeric label identifying your device and which application receives the data",
      "A domain name with a file extension — the readable name of a website followed by the type of page being loaded",
      "A protocol with an encryption key — the set of rules for communication paired with a secret code for security",
      "A browser version with a plugin number — the software edition of your browser paired with an add-on identifier",
    ],
    correctIndex: 0,
    explanation:
      "192.168.1.5 is an IP address (identifying the device) and 443 is a port number (identifying which application, in this case HTTPS/web browsing, should receive the data).",
  },
  {
    id: "q_ipaddress_scen_2",
    conceptId: "ipaddress",
    module: 0,
    type: "scenario",
    prompt:
      "Two different apps on your phone — a music app and a messaging app — are both using the internet at once. How does your phone know which incoming data goes to which app?",
    options: [
      "Each app is assigned a different port number, so incoming data is directed to the correct app based on that number",
      "Each app has its own separate Wi-Fi connection, so the data stays on completely independent network channels",
      "The phone opens each app one at a time in rapid succession, so only one receives data at any given millisecond",
      "Each app has its own unique IP address, and the router sends data to the matching address for each application",
    ],
    correctIndex: 0,
    explanation:
      "Port numbers tell the device which application should receive each piece of data. Your phone has one IP address, but different apps use different ports so data gets routed to the right place.",
  },
  {
    id: "q_ipaddress_tf_1",
    conceptId: "ipaddress",
    module: 0,
    type: "true_false",
    prompt:
      "True or False: Every device connected to a network is assigned a unique IP address so that data can be sent to the correct destination.",
    options: [
      "True — each device gets a unique IP address on the network so data knows exactly where to go",
      "False — devices share a single address and use timing to figure out which data belongs to whom",
      "True — but only desktop computers receive IP addresses, while phones and tablets use device names",
      "False — IP addresses are only used by websites, not by personal devices like laptops or phones",
    ],
    correctIndex: 0,
    explanation:
      "Every device on a network is assigned an IP address. This unique numerical label ensures that data packets are delivered to the correct device, just like a mailing address ensures a letter reaches the right house.",
  },
  {
    id: "q_ipaddress_d2t_1",
    conceptId: "ipaddress",
    module: 0,
    type: "def_to_term",
    prompt:
      "A unique numerical label assigned to every device on a network, used to identify where data should be sent. What concept is this?",
    options: [
      "IP Address",
      "Domain Name",
      "Web Protocol",
      "Browser Cookie",
    ],
    correctIndex: 0,
    explanation:
      "This describes an IP address — the unique number (like 192.168.1.1) that identifies a specific device on a network so data can be routed to it.",
  },
  {
    id: "q_ipaddress_win_1",
    conceptId: "ipaddress",
    module: 0,
    type: "which_is_not",
    prompt:
      "Which of the following is NOT a valid example of an IP address?",
    options: [
      "www.google.com",
      "192.168.1.1",
      "10.0.0.1",
      "172.16.254.1",
    ],
    correctIndex: 0,
    explanation:
      "www.google.com is a domain name, not an IP address. IP addresses are numerical labels like 192.168.1.1. Domain names are human-readable names that map to IP addresses.",
  },

  // ─── Protocols (HTTP/HTTPS) ──────────────────────────
  {
    id: "q_protocols_scen_1",
    conceptId: "protocols",
    module: 0,
    type: "scenario",
    prompt:
      "You notice a padlock icon in your browser's address bar when visiting your bank's website. The URL starts with 'https://'. What does this indicate about how your data is being transmitted?",
    options: [
      "The website is using HTTPS, a protocol that encrypts data between your browser and the server to keep it private",
      "The website has been verified as a financial institution by your browser and is stored locally on your device",
      "The website is loading faster because padlock mode compresses all images and text before sending them to you",
      "The website is using a private network connection that bypasses the public internet for added data security",
    ],
    correctIndex: 0,
    explanation:
      "The padlock and 'https://' indicate the site uses HTTPS — a protocol that encrypts the data traveling between your browser and the web server, keeping sensitive information like passwords and banking details private.",
  },
  {
    id: "q_protocols_scen_2",
    conceptId: "protocols",
    module: 0,
    type: "scenario",
    prompt:
      "Your browser sends a request for a web page, and the server sends back HTML, CSS, and JavaScript files. Both the request and response follow the same set of formatting rules. What are these standardized rules called?",
    options: [
      "A protocol — an agreed-upon set of rules that define how data is formatted and transmitted between computers",
      "A firewall — a security system that scans and approves each file before it is allowed to enter your computer",
      "A compiler — a program that translates the server's response into a language your browser can understand",
      "A database — a storage system that organizes all web page files and delivers them when your browser asks",
    ],
    correctIndex: 0,
    explanation:
      "Protocols like HTTP and HTTPS are standardized rules for how data is formatted and sent between computers. They ensure your browser and the server 'speak the same language' when exchanging web pages.",
  },
  {
    id: "q_protocols_tf_1",
    conceptId: "protocols",
    module: 0,
    type: "true_false",
    prompt:
      "True or False: HTTP and HTTPS do the same thing, but HTTPS adds a layer of encryption to protect data during transmission.",
    options: [
      "True — HTTPS is HTTP with added encryption, which protects data as it travels between your browser and the server",
      "False — HTTP and HTTPS use completely different systems and have nothing in common with each other technically",
      "True — but HTTPS only encrypts images and videos, while text and passwords are transmitted the same as HTTP",
      "False — HTTPS is actually slower and less secure than HTTP because encryption introduces more vulnerabilities",
    ],
    correctIndex: 0,
    explanation:
      "HTTPS is indeed HTTP with encryption added on top. Both protocols transfer web data, but HTTPS wraps that data in encryption so it can't be read by anyone intercepting the traffic between you and the server.",
  },
  {
    id: "q_protocols_d2t_1",
    conceptId: "protocols",
    module: 0,
    type: "def_to_term",
    prompt:
      "Standardized rules that define how data is formatted and transmitted between computers on the web. What concept does this describe?",
    options: [
      "Protocol (HTTP/HTTPS)",
      "IP Address System",
      "Domain Name Service",
      "Browser Rendering Engine",
    ],
    correctIndex: 0,
    explanation:
      "This describes a protocol. HTTP and HTTPS are protocols — standardized rules that both the browser and server follow so they can communicate and exchange data successfully.",
  },
  {
    id: "q_protocols_fib_1",
    conceptId: "protocols",
    module: 0,
    type: "fill_in_blank",
    prompt:
      "Fill in the blank: When you visit a website, your browser and the server communicate using a _____ — a set of rules for how data is formatted and sent.",
    options: [
      "protocol",
      "database",
      "compiler",
      "bookmark",
    ],
    correctIndex: 0,
    explanation:
      "Browsers and servers communicate using protocols. HTTP and HTTPS are the protocols used for web traffic — they define the rules for how requests and responses are structured.",
  },

  // ─── Domain Names ────────────────────────────────────
  {
    id: "q_domainnames_scen_1",
    conceptId: "domainnames",
    module: 0,
    type: "scenario",
    prompt:
      "Instead of typing '142.250.80.46' into your browser, you type 'google.com' and reach the same website. What makes this possible?",
    options: [
      "A domain name — a human-readable name that maps to the numerical IP address of the server hosting the website",
      "A web browser — software that automatically generates a random IP address and connects you to the nearest server",
      "A search engine — a tool that finds the website you want and redirects your browser to it from its own database",
      "An internet protocol — a rule set that converts any word you type into the address bar into a working connection",
    ],
    correctIndex: 0,
    explanation:
      "Domain names like 'google.com' are human-readable labels that map to IP addresses. They exist so you don't have to memorize numbers like 142.250.80.46 to visit websites.",
  },
  {
    id: "q_domainnames_scen_2",
    conceptId: "domainnames",
    module: 0,
    type: "scenario",
    prompt:
      "A friend tells you to visit 'amazon.com' to buy something. Your browser needs to find which server to contact. What happens first behind the scenes?",
    options: [
      "The domain name 'amazon.com' is translated into an IP address so your browser knows which server to connect to",
      "Your browser downloads the entire Amazon website to your device and then opens it locally without using a server",
      "The domain name 'amazon.com' is sent to a satellite which physically routes your connection to Amazon's building",
      "Your browser searches through every server on the internet one by one until it finds the one named 'amazon.com'",
    ],
    correctIndex: 0,
    explanation:
      "When you type a domain name, it gets translated (via DNS) into an IP address. This tells your browser exactly which server to connect to — your browser doesn't search randomly or download the whole site.",
  },
  {
    id: "q_domainnames_tf_1",
    conceptId: "domainnames",
    module: 0,
    type: "true_false",
    prompt:
      "True or False: Domain names exist so that people can visit websites using memorable words instead of long numerical IP addresses.",
    options: [
      "True — domain names are human-readable labels that map to IP addresses, making websites easier to find and remember",
      "False — domain names are used by servers to communicate with each other, but humans never actually see or use them",
      "True — but domain names only work for websites with fewer than 1000 visitors per day due to technical limitations",
      "False — domain names and IP addresses are two completely unrelated systems that serve entirely different purposes",
    ],
    correctIndex: 0,
    explanation:
      "Domain names were created so humans don't need to memorize IP addresses. 'google.com' is much easier to remember than '142.250.80.46', and both take you to the same place.",
  },
  {
    id: "q_domainnames_d2t_1",
    conceptId: "domainnames",
    module: 0,
    type: "def_to_term",
    prompt:
      "Human-readable names that map to IP addresses, so people don't have to memorize numbers to visit websites. What concept is this?",
    options: [
      "Domain Names",
      "Web Protocols",
      "Port Numbers",
      "Browser Bookmarks",
    ],
    correctIndex: 0,
    explanation:
      "This describes domain names. Names like 'google.com' or 'wikipedia.org' are domain names — they map to numerical IP addresses so we can use words instead of numbers.",
  },
  {
    id: "q_domainnames_win_1",
    conceptId: "domainnames",
    module: 0,
    type: "which_is_not",
    prompt:
      "Which of the following is NOT an example of a domain name?",
    options: [
      "192.168.1.1",
      "google.com",
      "wikipedia.org",
      "amazon.com",
    ],
    correctIndex: 0,
    explanation:
      "192.168.1.1 is an IP address, not a domain name. Domain names are human-readable labels like google.com, wikipedia.org, and amazon.com that map to numerical IP addresses.",
  },

  // ─── What Browsers Do ───────────────────────────────
  {
    id: "q_browsers_scen_1",
    conceptId: "browsers",
    module: 0,
    type: "scenario",
    prompt:
      "You type a web address and press Enter. Moments later you see a fully styled page with text, images, and buttons you can click. What software performed all these steps — sending a request, receiving code, and displaying the visual page?",
    options: [
      "A web browser — it sends a request to the server, receives HTML/CSS/JavaScript, and renders the visual page you see",
      "A search engine — it finds the page on the internet, creates a copy of it, and displays that copy on your screen",
      "An operating system — it builds every web page from scratch using templates stored inside your computer's memory",
      "A web server — it creates the visual page on its end and sends a finished screenshot image to your device to view",
    ],
    correctIndex: 0,
    explanation:
      "A web browser (like Chrome, Firefox, or Safari) does all of this: it sends an HTTP request to the server, receives the code (HTML, CSS, JavaScript) back, and renders it into the visual, interactive page you see.",
  },
  {
    id: "q_browsers_scen_2",
    conceptId: "browsers",
    module: 0,
    type: "scenario",
    prompt:
      "You right-click on a web page and see an option called 'View Page Source,' which reveals lines of code. Where did this code come from, and what turned it into the page you were just looking at?",
    options: [
      "The code was sent by a web server, and your browser interpreted it to render the visual page you see on screen",
      "The code was written by your computer's operating system to describe what was on screen at that exact moment",
      "The code was generated by your internet provider and injected into the page before it reached your device",
      "The code was downloaded from a search engine's database and assembled by your Wi-Fi router into the page",
    ],
    correctIndex: 0,
    explanation:
      "Web servers send code (HTML, CSS, JavaScript) to your browser. The browser then interprets and renders that code into the visual page you interact with. 'View Page Source' shows you the raw code before rendering.",
  },
  {
    id: "q_browsers_tf_1",
    conceptId: "browsers",
    module: 0,
    type: "true_false",
    prompt:
      "True or False: A web browser's main job is to send requests to servers, receive code in response, and render that code into visual web pages.",
    options: [
      "True — browsers request web page code from servers, then interpret and display it as the visual pages users interact with",
      "False — browsers only display images and videos, while a separate system on your computer handles text and layout",
      "True — but browsers can only display simple text pages and require additional software for images or interactivity",
      "False — browsers store all websites locally on your hard drive and never actually communicate with remote servers",
    ],
    correctIndex: 0,
    explanation:
      "A browser's core job is exactly this: send HTTP requests to web servers, receive HTML/CSS/JavaScript back, and render those files into the visual, interactive pages you use every day.",
  },
  {
    id: "q_browsers_d2t_1",
    conceptId: "browsers",
    module: 0,
    type: "analogy_to_term",
    prompt:
      "Think of a translator who takes written instructions in a foreign language and turns them into something you can see and understand. What piece of software works this way with web page code?",
    options: [
      "A Web Browser",
      "A Web Server",
      "A Domain Name",
      "An IP Address",
    ],
    correctIndex: 0,
    explanation:
      "A web browser is like a translator — it takes code (HTML, CSS, JavaScript) that humans can't easily read and turns it into the visual, interactive web pages you see and use.",
  },
  {
    id: "q_browsers_fib_1",
    conceptId: "browsers",
    module: 0,
    type: "fill_in_blank",
    prompt:
      "Fill in the blank: Chrome, Firefox, and Safari are all examples of _____ — software that displays web pages by interpreting code received from servers.",
    options: [
      "web browsers",
      "web servers",
      "search engines",
      "operating systems",
    ],
    correctIndex: 0,
    explanation:
      "Chrome, Firefox, and Safari are all web browsers. A browser's job is to send requests to servers, receive code (HTML, CSS, JavaScript), and render it into the visual web pages you see.",
  },

  // ─── Client vs Server ───────────────────────────────
  {
    id: "q_clientserver_scen_1",
    conceptId: "clientserver",
    module: 0,
    type: "scenario",
    prompt:
      "You open an app on your phone and tap 'Refresh' to see new posts. Your phone sends a request, a remote computer processes it and sends back the latest posts. What model describes these two roles?",
    options: [
      "Client-server model — your phone (client) makes a request and a remote computer (server) processes it and responds",
      "Peer-to-peer model — your phone and the remote computer are equals that take turns sending posts to each other",
      "Broadcast model — the remote computer sends every post to every device on the internet at the same time constantly",
      "Offline model — your phone generates the new posts locally using stored data without contacting any other computer",
    ],
    correctIndex: 0,
    explanation:
      "This is the client-server model. Your phone acts as the client (making requests), and the remote computer acts as the server (processing requests and sending back responses). Most of the internet works this way.",
  },
  {
    id: "q_clientserver_scen_2",
    conceptId: "clientserver",
    module: 0,
    type: "scenario",
    prompt:
      "You type a search query on your laptop and press Enter. A remote computer finds the results and sends them back to your screen. In this interaction, which device is the client?",
    options: [
      "Your laptop — because it initiated the request and is waiting to receive and display the response from the server",
      "The remote computer — because it is the more powerful machine and therefore takes the role of the primary client",
      "Both devices equally — because the laptop and the remote computer share the client role during every interaction",
      "Neither device — because the search query is handled entirely within the internet's cables, not by any device",
    ],
    correctIndex: 0,
    explanation:
      "Your laptop is the client because it initiated the request. The client is always the device that makes the request. The remote computer that processes the request and sends back results is the server.",
  },
  {
    id: "q_clientserver_tf_1",
    conceptId: "clientserver",
    module: 0,
    type: "true_false",
    prompt:
      "True or False: In the client-server model, the client makes requests and the server processes those requests and sends back responses.",
    options: [
      "True — the client initiates requests and the server responds, which is the core of the client-server pattern",
      "False — the server initiates all communication, and the client simply waits passively to receive whatever is sent",
      "True — but only for text-based websites, since video and image sites use a different model called peer-to-peer",
      "False — clients and servers constantly switch roles, so either one can be the requester at any given moment",
    ],
    correctIndex: 0,
    explanation:
      "This is exactly how the client-server model works. The client (your browser or app) initiates a request, and the server (a remote computer) processes it and sends a response back. Most internet communication follows this pattern.",
  },
  {
    id: "q_clientserver_d2t_1",
    conceptId: "clientserver",
    module: 0,
    type: "def_to_term",
    prompt:
      "A model where one device makes requests and another device processes them and sends back responses. Most internet communication follows this pattern. What is this called?",
    options: [
      "Client-Server Model",
      "Domain Name System",
      "Packet Switching",
      "Network Encryption",
    ],
    correctIndex: 0,
    explanation:
      "This describes the client-server model — the fundamental pattern of internet communication where clients make requests and servers respond to them.",
  },
  {
    id: "q_clientserver_fib_1",
    conceptId: "clientserver",
    module: 0,
    type: "fill_in_blank",
    prompt:
      "Fill in the blank: Your web browser is an example of a _____ because it sends requests to remote computers and displays the responses it receives.",
    options: [
      "client",
      "server",
      "router",
      "protocol",
    ],
    correctIndex: 0,
    explanation:
      "Your browser is a client. It sends requests (like asking for a web page) to servers and then displays the responses. The client is always the side that initiates the request.",
  },

  // ─── What is Code ───────────────────────────────────
  {
    id: "q_whatscode_scen_1",
    conceptId: "whatscode",
    module: 0,
    type: "scenario",
    prompt:
      "A developer opens a text file, types precise instructions in a programming language, saves the file, and runs it. The computer follows those instructions exactly and produces a result. What did the developer write?",
    options: [
      "Code — a set of precise text instructions in a programming language that tells a computer exactly what to do",
      "A search query — a set of keywords that asks the internet to find relevant pages matching the developer's request",
      "An email — a message composed in a text editor that is sent through the internet to another person's computer",
      "A spreadsheet — a grid of numbers and formulas that organizes data into rows and columns for business analysis",
    ],
    correctIndex: 0,
    explanation:
      "The developer wrote code. Code is a set of precise text instructions written in a programming language that tells a computer exactly what to do, step by step.",
  },
  {
    id: "q_whatscode_scen_2",
    conceptId: "whatscode",
    module: 0,
    type: "scenario",
    prompt:
      "A friend shows you lines of text like 'if temperature > 100: turn_on_fan()' and explains it makes a smart thermostat work. What is this text an example of?",
    options: [
      "Code — text instructions in a programming language that tell the thermostat's computer when to turn on the fan",
      "A protocol — a standardized network rule that allows the thermostat to connect to the internet and download updates",
      "A domain name — a human-readable label that identifies the thermostat on the network so other devices can find it",
      "An IP address — a unique numerical identifier assigned to the thermostat so data can be routed to it correctly",
    ],
    correctIndex: 0,
    explanation:
      "This is code. The text 'if temperature > 100: turn_on_fan()' is a set of precise instructions written in a programming language. The computer reads these instructions and follows them exactly.",
  },
  {
    id: "q_whatscode_tf_1",
    conceptId: "whatscode",
    module: 0,
    type: "true_false",
    prompt:
      "True or False: Code is a set of precise text instructions written in a programming language that a computer can execute step by step.",
    options: [
      "True — code is text-based instructions in a programming language that computers read and execute in order",
      "False — code is a visual diagram that developers draw on screen, which the computer interprets as instructions",
      "True — but code can only perform math calculations and cannot be used to build websites or apps of any kind",
      "False — code is actually hardware circuitry inside a computer's processor, not something written as text at all",
    ],
    correctIndex: 0,
    explanation:
      "Code is indeed a set of precise text instructions written in a programming language. Developers write these instructions, and computers execute them step by step to perform tasks — from running websites to controlling robots.",
  },
  {
    id: "q_whatscode_d2t_1",
    conceptId: "whatscode",
    module: 0,
    type: "def_to_term",
    prompt:
      "A set of precise text instructions written in a programming language that tells a computer exactly what to do, step by step. What is this called?",
    options: [
      "Code (Programming)",
      "A Network Protocol",
      "An IP Address",
      "A Web Browser",
    ],
    correctIndex: 0,
    explanation:
      "This is the definition of code — precise text instructions in a programming language that a computer reads and executes. Code is written by humans and run by machines.",
  },
  {
    id: "q_whatscode_win_1",
    conceptId: "whatscode",
    module: 0,
    type: "which_is_not",
    prompt:
      "Which of the following is NOT an example of code that a computer executes?",
    options: [
      "A grocery list written on paper for a trip to the store this weekend",
      "A script that checks if a user's password is correct during login",
      "Instructions that tell a robot to move forward and then turn left",
      "A program that calculates the total price of items in a shopping cart",
    ],
    correctIndex: 0,
    explanation:
      "A grocery list on paper is not code — it's not written in a programming language and isn't executed by a computer. The other options are all examples of code: instructions that a computer reads and follows.",
  },
  // ─── Data Types ─────────────────────────────────────
  {
    id: "q_datatypes_scen_1",
    conceptId: "datatypes",
    module: 0,
    type: "scenario",
    prompt:
      "A program stores a user's name as \"Alice\", their age as 30, and whether they're logged in as true. What programming concept categorizes these different kinds of values?",
    options: [
      "Data types — text strings, integers, and booleans are distinct categories that determine which operations are valid on each value",
      "Variables — named storage locations in the program's memory that hold different kinds of information like names, ages, and statuses",
      "Functions — reusable blocks of instructions that process inputs like names and ages and produce output values for the program",
      "Objects — structured containers that group related properties together so a program can manage data about a single entity",
    ],
    correctIndex: 0,
    explanation:
      "Data types classify values into categories like strings (text), integers (whole numbers), and booleans (true/false). Each type supports different operations — you can do math on integers but not on strings.",
  },
  {
    id: "q_datatypes_scen_2",
    conceptId: "datatypes",
    module: 0,
    type: "scenario",
    prompt:
      "A beginner tries to add the number 5 to the word \"hello\" and gets an unexpected result. What concept explains why mixing these values causes problems?",
    options: [
      "Data types — numbers and text are different categories of data, and mixing them produces unexpected results because different rules apply",
      "Variables — the named containers holding these values have conflicting names, causing the program to confuse which value is which",
      "Syntax — the programming language's grammar rules require specific punctuation around numbers and text to avoid confusion",
      "Debugging — the process of finding and fixing errors requires checking every line of code to identify where the mistake is",
    ],
    correctIndex: 0,
    explanation:
      "Data types define what kind of value something is. Numbers and text (strings) are different types, so operations that work on one may not work on the other — like trying to do math with words.",
  },
  {
    id: "q_datatypes_tf_1",
    conceptId: "datatypes",
    module: 0,
    type: "true_false",
    prompt:
      "True or False: A boolean is a data type that can only hold one of two values — true or false.",
    options: [
      "True — booleans represent exactly two states (true or false), which makes them useful for yes/no decisions in code",
      "False — booleans can hold any number of values, including true, false, maybe, and unknown in most languages",
      "True — booleans are text values that happen to spell out the words \"true\" and \"false\" as regular strings",
      "False — booleans are actually a type of number, where zero means false and any other number means true only",
    ],
    correctIndex: 0,
    explanation:
      "Booleans are indeed a data type with exactly two possible values: true or false. They're used for decisions in code, like checking if a user is logged in or if a password is correct.",
  },
  {
    id: "q_datatypes_d2t_1",
    conceptId: "datatypes",
    module: 0,
    type: "def_to_term",
    prompt:
      "Categories that define what kind of value a piece of data is — such as text, whole numbers, decimal numbers, or true/false values. What concept is this?",
    options: [
      "Data types — they classify values so the program knows what operations are allowed on each piece of data",
      "Variables — they are named containers that store values in a program's memory for later reuse throughout code",
      "Databases — they are organized storage systems that keep data saved permanently even after a program closes",
      "Functions — they are reusable blocks of code that take in values, process them, and return a new result",
    ],
    correctIndex: 0,
    explanation:
      "Data types are the categories that classify values. Knowing a value's type tells the program what you can do with it — add numbers together, combine text strings, or use true/false for decisions.",
  },
  {
    id: "q_datatypes_fib_1",
    conceptId: "datatypes",
    module: 0,
    type: "fill_in_blank",
    prompt:
      "Fill in the blank: The value 3.14 is a _____, which is a data type used to represent numbers that have a decimal point.",
    options: [
      "Float — a data type for decimal numbers like 3.14, 0.5, and 99.9 that need precision beyond whole numbers",
      "String — a data type for sequences of characters like letters, words, and sentences stored as readable text",
      "Boolean — a data type that represents a logical condition, holding only the value of true or the value false",
      "Integer — a data type for counting numbers like 1, 2, and 100 that have no fractional or decimal portion",
    ],
    correctIndex: 0,
    explanation:
      "A float (or floating-point number) is the data type for decimal numbers. It's called 'float' because the decimal point can 'float' to different positions, like 3.14 or 0.001.",
  },

  // ─── Variables ─────────────────────────────────────
  {
    id: "q_variables_scen_1",
    conceptId: "variables",
    module: 0,
    type: "scenario",
    prompt:
      "A programmer writes username = \"Maria\" and later uses username throughout the program instead of retyping \"Maria\" each time. What concept lets them do this?",
    options: [
      "Variables — named containers that store a value so you can reference and reuse it by name throughout your code",
      "Data types — categories that classify whether a value is text, a number, or true/false to determine valid operations",
      "Functions — reusable blocks of instructions that perform a specific task and can be called from anywhere in code",
      "Constants — fixed labels assigned to values that the programming language has built in and cannot be changed",
    ],
    correctIndex: 0,
    explanation:
      "Variables are named containers that store values. By writing username = \"Maria\", the programmer creates a variable called 'username' that holds the text \"Maria\" and can be used anywhere in the code.",
  },
  {
    id: "q_variables_scen_2",
    conceptId: "variables",
    module: 0,
    type: "scenario",
    prompt:
      "A shopping app keeps track of how many items are in the cart. Each time you add an item, the count goes up by one. What concept lets the app update this count?",
    options: [
      "A variable — a named container whose stored value can be updated, like increasing a cart count from 3 to 4",
      "A data type — a classification system that defines whether the cart count is stored as text or as a number",
      "A database — a permanent storage system that saves the cart count to a server so it survives restarts",
      "An API — a communication interface that sends the cart count between the shopping app and the server",
    ],
    correctIndex: 0,
    explanation:
      "Variables can be updated as the program runs. A variable like cartCount can start at 0 and increase each time you add an item — that's why they're called 'variables,' because the value can vary.",
  },
  {
    id: "q_variables_tf_1",
    conceptId: "variables",
    module: 0,
    type: "true_false",
    prompt:
      "True or False: A variable can have its stored value changed to something new while the program is running.",
    options: [
      "True — variables are designed to hold values that can be updated or replaced as the program executes over time",
      "False — once a variable is assigned a value, that value is permanently locked in and can never be changed again",
      "True — but only if the variable holds a number, because text variables are always fixed once they are created",
      "False — variables hold fixed values that are set when the program starts and remain the same until it closes",
    ],
    correctIndex: 0,
    explanation:
      "Variables can absolutely be changed while a program runs — that's one of their main purposes. For example, a score variable might start at 0 and increase as the player earns points.",
  },
  {
    id: "q_variables_d2t_1",
    conceptId: "variables",
    module: 0,
    type: "def_to_term",
    prompt:
      "Named containers that store a value in a program's memory, letting you reuse and update that value throughout your code instead of retyping it. What is this?",
    options: [
      "Variables — they give a name to stored data so you can reference it and change it anywhere in your program",
      "Data types — they categorize stored values into groups like text, numbers, and booleans for valid operations",
      "Functions — they wrap reusable instructions into a named block that can be called from anywhere in a program",
      "Databases — they organize stored records into structured tables or documents for long-term data persistence",
    ],
    correctIndex: 0,
    explanation:
      "Variables are named containers in memory. They let you store a value once, give it a meaningful name, and then use or update that value anywhere in your code.",
  },
  {
    id: "q_variables_win_1",
    conceptId: "variables",
    module: 0,
    type: "which_is_not",
    prompt:
      "Which of the following is NOT a valid reason to use a variable in your code?",
    options: [
      "To permanently save data to a file on the computer's hard drive so it lasts after the program is closed",
      "To store a user's name so you can display it in multiple places throughout the application's interface",
      "To keep a running total that updates each time a new purchase is added to a customer's shopping cart",
      "To hold a temporary result from a calculation so you can use that result in a later step of the program",
    ],
    correctIndex: 0,
    explanation:
      "Variables exist only in the program's memory while it's running — they don't permanently save data to files. For permanent storage, you'd need a database or file system.",
  },

  // ─── Databases ─────────────────────────────────────
  {
    id: "q_databases_scen_1",
    conceptId: "databases",
    module: 0,
    type: "scenario",
    prompt:
      "An online store needs to save all customer orders so they can be looked up weeks later, even if the server restarts. What system would store this data permanently?",
    options: [
      "A database — an organized storage system that saves data permanently so it survives program restarts and shutdowns",
      "A variable — a named container in memory that holds data temporarily while the current program session is running",
      "An API — a communication interface that lets the store's app send and receive order data between two systems",
      "A function — a reusable block of code that processes order information and returns the result to the program",
    ],
    correctIndex: 0,
    explanation:
      "Databases provide persistent storage — data saved to a database survives program restarts, server crashes, and shutdowns. Variables, by contrast, disappear when the program stops.",
  },
  {
    id: "q_databases_scen_2",
    conceptId: "databases",
    module: 0,
    type: "scenario",
    prompt:
      "A social media app lets users search for other users by name and instantly see matching profiles. What system organizes the user data so it can be searched quickly?",
    options: [
      "A database — it structures data in organized tables or documents so specific records can be found and retrieved fast",
      "A variable — it stores a single user's name in temporary memory so the program can display it on the current page",
      "JSON — it formats data as key-value pairs in a text file so that servers and apps can exchange information easily",
      "The cloud — it provides remote server hardware so the social media company doesn't have to buy its own computers",
    ],
    correctIndex: 0,
    explanation:
      "Databases are designed for efficient retrieval. They organize data in structured ways (tables, indexes) so that searching millions of records for a specific name happens in milliseconds.",
  },
  {
    id: "q_databases_tf_1",
    conceptId: "databases",
    module: 0,
    type: "true_false",
    prompt:
      "True or False: Data stored in a database is lost every time the application is closed or the server restarts.",
    options: [
      "False — databases are specifically designed to persist data permanently, surviving application restarts and shutdowns",
      "True — databases store data in temporary memory just like variables do, so everything is erased on each restart",
      "False — but only if the database is stored in the cloud, because local databases always lose data on shutdown",
      "True — databases must be manually backed up before each shutdown or all of the stored records will be deleted",
    ],
    correctIndex: 0,
    explanation:
      "This is false. The whole point of a database is persistent storage — data survives restarts, crashes, and shutdowns. That's what makes databases different from temporary storage like variables.",
  },
  {
    id: "q_databases_d2t_1",
    conceptId: "databases",
    module: 0,
    type: "analogy_to_term",
    prompt:
      "\"A filing cabinet that keeps your documents organized and safe, even when you leave the office and come back the next day.\" What concept does this describe?",
    options: [
      "A database — like a filing cabinet, it stores information in an organized way so you can find and retrieve it later",
      "A variable — like a sticky note, it temporarily holds one piece of information while you're working on a task",
      "An API — like a receptionist, it takes your request and brings back the information you asked for from another room",
      "JSON — like a standardized form, it arranges information into a consistent format that anyone can understand",
    ],
    correctIndex: 0,
    explanation:
      "A database is like a filing cabinet — it keeps data organized in a structured way and preserves it long-term. You can find specific records quickly, just like finding a specific folder in a cabinet.",
  },
  {
    id: "q_databases_fib_1",
    conceptId: "databases",
    module: 0,
    type: "fill_in_blank",
    prompt:
      "Fill in the blank: A _____ database organizes data into rows and columns in structured tables, using a language called SQL to query the data.",
    options: [
      "Relational — it stores data in tables with rows and columns, and uses SQL to search, filter, and join records",
      "Document — it stores data as flexible individual files similar to JSON, grouped into collections rather than tables",
      "Variable — it stores data in temporary named containers in memory that are erased when the program stops running",
      "Frontend — it stores data in the user's web browser so the application can display information without a server",
    ],
    correctIndex: 0,
    explanation:
      "Relational databases (like MySQL or PostgreSQL) organize data into tables with rows and columns. SQL (Structured Query Language) is the language used to create, read, update, and delete that data.",
  },

  // ─── What is an API ─────────────────────────────────
  {
    id: "q_whatisanapi_scen_1",
    conceptId: "whatisanapi",
    module: 0,
    type: "scenario",
    prompt:
      "A weather app on your phone shows today's forecast, but the weather data actually comes from a separate service. What allows the app to request data from that outside service?",
    options: [
      "An API — a defined interface that lets two pieces of software communicate, specifying what requests and responses look like",
      "A database — a permanent storage system that holds all the weather data on your phone so it's available even offline",
      "A variable — a named container in the app's memory that stores the current temperature value while the app is open",
      "The cloud — a collection of remote servers that physically store and process the weather data for all users worldwide",
    ],
    correctIndex: 0,
    explanation:
      "An API (Application Programming Interface) lets two pieces of software talk to each other. The weather app sends a request through the weather service's API and gets back forecast data in response.",
  },
  {
    id: "q_whatisanapi_scen_2",
    conceptId: "whatisanapi",
    module: 0,
    type: "scenario",
    prompt:
      "A website lets you sign in with your Google account instead of creating a new username and password. What concept makes it possible for the website to communicate with Google?",
    options: [
      "An API — it provides a standard way for the website to send a login request to Google and receive your account info back",
      "A database — it stores your Google password locally on the website's server so the site can verify your identity itself",
      "JSON — it is a text format for organizing data into key-value pairs that both the website and Google can understand",
      "The frontend — it is the part of the website you interact with in your browser, including the 'Sign in with Google' button",
    ],
    correctIndex: 0,
    explanation:
      "When a website offers 'Sign in with Google,' it's using Google's API to communicate. The website sends a request to Google's API, Google verifies your identity, and sends back your account info.",
  },
  {
    id: "q_whatisanapi_tf_1",
    conceptId: "whatisanapi",
    module: 0,
    type: "true_false",
    prompt:
      "True or False: An API is a visual interface that users click on and interact with directly, like buttons and menus on a website.",
    options: [
      "False — an API is a software-to-software interface that works behind the scenes, not a visual interface for human users",
      "True — an API is the collection of buttons, forms, and menus that users see and click on when they visit a website",
      "False — but only because APIs are limited to mobile apps, while websites use a different system called HTTP instead",
      "True — an API includes all the visual design elements that make a website look professional and easy to navigate",
    ],
    correctIndex: 0,
    explanation:
      "This is false. An API is a software-to-software interface — it lets programs communicate with each other behind the scenes. The visual interface users see (buttons, menus) is called a user interface (UI).",
  },
  {
    id: "q_whatisanapi_d2t_1",
    conceptId: "whatisanapi",
    module: 0,
    type: "analogy_to_term",
    prompt:
      "\"A waiter in a restaurant — you tell them what you want, they bring your request to the kitchen, and they come back with your food.\" What concept does this describe?",
    options: [
      "An API — like a waiter, it takes your request, delivers it to another system, and brings the response back to you",
      "A database — like a kitchen pantry, it stores all the ingredients so the kitchen can prepare any dish when ordered",
      "A variable — like a plate, it temporarily holds one serving of food until it's delivered to the customer's table",
      "The cloud — like a catering company, it provides kitchen space and cooks so the restaurant doesn't need its own",
    ],
    correctIndex: 0,
    explanation:
      "An API is like a waiter — it acts as a go-between. You (the app) make a request, the API delivers it to the system that has the data, and it brings back the response. You never go to the kitchen yourself.",
  },
  {
    id: "q_whatisanapi_fib_1",
    conceptId: "whatisanapi",
    module: 0,
    type: "fill_in_blank",
    prompt:
      "Fill in the blank: An _____ defines the rules for how two pieces of software can communicate, including what requests are allowed and what responses to expect.",
    options: [
      "API — Application Programming Interface, the defined rules that allow two software systems to exchange data",
      "URL — Uniform Resource Locator, the web address that specifies where a particular resource can be found online",
      "CSS — Cascading Style Sheet, the language that controls how visual elements like colors and fonts are displayed",
      "SQL — Structured Query Language, the language that lets you create, read, update, and delete database records",
    ],
    correctIndex: 0,
    explanation:
      "API stands for Application Programming Interface. It defines the rules and structure for how two pieces of software can communicate — what you can ask for and what you'll get back.",
  },

  // ─── Frontend vs Backend ───────────────────────────
  {
    id: "q_frontendbackend_scen_1",
    conceptId: "frontendbackend",
    module: 0,
    type: "scenario",
    prompt:
      "When you browse an online store, you see product images and a search bar in your browser. Meanwhile, a server is checking inventory and calculating prices. Which concept describes these two layers?",
    options: [
      "Frontend vs backend — the browser displays the visual interface while the server handles data processing and logic behind the scenes",
      "Database vs API — the database stores product images while the API calculates prices and checks the inventory records",
      "Cloud vs local — the cloud hosts the product images remotely while your local computer calculates the prices on its own",
      "Data types vs variables — data types classify the product information while variables store the search bar's current text input",
    ],
    correctIndex: 0,
    explanation:
      "The frontend is what you see in your browser (images, search bar, buttons). The backend is the server-side logic you don't see (checking inventory, calculating prices, querying the database).",
  },
  {
    id: "q_frontendbackend_scen_2",
    conceptId: "frontendbackend",
    module: 0,
    type: "scenario",
    prompt:
      "A developer is fixing a bug where a button's color is wrong on the website. Another developer is fixing a bug where user passwords aren't being saved correctly. Which layer is each working on?",
    options: [
      "The button color is a frontend issue in the browser, while password saving is a backend issue on the server side",
      "The button color is a backend issue on the server, while password saving is a frontend issue in the user's browser",
      "Both are frontend issues because any bug that a user notices or experiences is by definition part of the frontend",
      "Both are backend issues because all code, whether for buttons or passwords, ultimately runs on the server first",
    ],
    correctIndex: 0,
    explanation:
      "Button styling is frontend — it's visual code running in the browser (HTML/CSS). Password storage is backend — it happens on the server where sensitive data is securely processed and saved.",
  },
  {
    id: "q_frontendbackend_tf_1",
    conceptId: "frontendbackend",
    module: 0,
    type: "true_false",
    prompt:
      "True or False: The frontend is the part of an application that runs in the user's web browser and handles what they see and interact with.",
    options: [
      "True — the frontend includes HTML, CSS, and JavaScript that run in the browser to create the visual user experience",
      "False — the frontend actually runs on the server and sends pre-built images of the page to the user's web browser",
      "True — but only for mobile apps, because websites actually run all of their code on the server instead of the browser",
      "False — the frontend is just the design mockup that designers create, while the real code all runs on the backend",
    ],
    correctIndex: 0,
    explanation:
      "This is true. The frontend is the client-side code (HTML, CSS, JavaScript) that runs in the user's browser. It's responsible for everything the user sees, clicks, and interacts with.",
  },
  {
    id: "q_frontendbackend_d2t_1",
    conceptId: "frontendbackend",
    module: 0,
    type: "def_to_term",
    prompt:
      "The server-side logic, databases, and processing that happen behind the scenes, invisible to the user. What part of an application is this describing?",
    options: [
      "The backend — server-side code that handles data processing, storage, and business logic out of the user's view",
      "The frontend — client-side code that runs in the browser and creates the visual interface the user interacts with",
      "The database — an organized storage system that permanently saves structured data like user accounts and orders",
      "The cloud — remote servers owned by other companies that provide computing power you can rent over the internet",
    ],
    correctIndex: 0,
    explanation:
      "The backend is the server-side layer that users never see directly. It handles data processing, database operations, authentication, and business logic — all happening behind the scenes.",
  },
  {
    id: "q_frontendbackend_win_1",
    conceptId: "frontendbackend",
    module: 0,
    type: "which_is_not",
    prompt:
      "Which of the following is NOT typically a frontend technology that runs in the user's browser?",
    options: [
      "SQL — a language for querying databases, which runs on the server to retrieve and manipulate stored data records",
      "HTML — a markup language that structures the content of web pages, defining headings, paragraphs, and sections",
      "CSS — a styling language that controls the visual appearance of web pages, including colors, fonts, and layouts",
      "JavaScript — a programming language that adds interactivity to web pages, like responding to button clicks",
    ],
    correctIndex: 0,
    explanation:
      "SQL (Structured Query Language) is a backend technology used to interact with databases on the server. HTML, CSS, and JavaScript are the core frontend technologies that run in the browser.",
  },

  // ─── JSON ──────────────────────────────────────────
  {
    id: "q_json_scen_1",
    conceptId: "json",
    module: 0,
    type: "scenario",
    prompt:
      "A server needs to send a user's profile information (name, email, age) to a mobile app. The data is structured as {\"name\": \"Alex\", \"email\": \"alex@mail.com\", \"age\": 25}. What format is this?",
    options: [
      "JSON — a lightweight text format that organizes data as key-value pairs, commonly used to send data between servers and apps",
      "SQL — a query language used to retrieve and manipulate records that are stored in a relational database's structured tables",
      "HTML — a markup language used to structure content on web pages using elements like headings, paragraphs, and links",
      "CSS — a styling language used to control the visual appearance of a web page, including fonts, colors, and page layouts",
    ],
    correctIndex: 0,
    explanation:
      "JSON (JavaScript Object Notation) structures data as key-value pairs in a human-readable text format. It's the most common format for sending data between servers and apps because it's simple and universal.",
  },
  {
    id: "q_json_scen_2",
    conceptId: "json",
    module: 0,
    type: "scenario",
    prompt:
      "Two different apps — one written in Python and one in JavaScript — need to exchange data with each other. They need a common format both languages can read. What format do they most likely use?",
    options: [
      "JSON — a universal text format for structuring data that virtually every programming language can read and write easily",
      "A database — a permanent storage system where both apps can save and retrieve shared data in organized tables",
      "Variables — named containers in each program's memory that temporarily store values while the program is running",
      "An API — a defined interface that specifies what requests one app can make to another and what responses come back",
    ],
    correctIndex: 0,
    explanation:
      "JSON is language-independent — Python, JavaScript, Java, and virtually every other language can read and write JSON. That's why it became the standard format for data exchange between different systems.",
  },
  {
    id: "q_json_tf_1",
    conceptId: "json",
    module: 0,
    type: "true_false",
    prompt:
      "True or False: JSON can only be used with JavaScript and is not compatible with other programming languages like Python or Java.",
    options: [
      "False — despite having 'JavaScript' in the name, JSON is a universal format that works with virtually every language",
      "True — JSON stands for JavaScript Object Notation and can only be parsed and generated by JavaScript-based programs",
      "False — but JSON works differently in each language, requiring special conversion tools to translate between formats",
      "True — other languages have their own data formats, such as XML for Java and dictionaries for Python applications",
    ],
    correctIndex: 0,
    explanation:
      "This is false. Although JSON stands for JavaScript Object Notation, it's a universal text format. Python, Java, Go, Ruby — virtually every language has built-in support for reading and writing JSON.",
  },
  {
    id: "q_json_d2t_1",
    conceptId: "json",
    module: 0,
    type: "def_to_term",
    prompt:
      "A lightweight text format that structures data as key-value pairs, used universally for sending data between servers and apps because it's both human-readable and machine-parseable. What is this?",
    options: [
      "JSON — JavaScript Object Notation, the standard text format for exchanging structured data between software systems",
      "HTML — HyperText Markup Language, the standard language for creating the structure and content of web page documents",
      "SQL — Structured Query Language, the standard language for creating, reading, updating, and deleting database records",
      "CSV — Comma Separated Values, a simple text format that stores tabular data with commas separating each data field",
    ],
    correctIndex: 0,
    explanation:
      "JSON (JavaScript Object Notation) is a lightweight text format that uses key-value pairs like {\"name\": \"Alex\", \"age\": 25}. It's human-readable and the most popular format for data exchange between systems.",
  },
  {
    id: "q_json_fib_1",
    conceptId: "json",
    module: 0,
    type: "fill_in_blank",
    prompt:
      "Fill in the blank: In JSON, data is organized as _____ pairs, like {\"color\": \"blue\"}, where each label is matched with its corresponding value.",
    options: [
      "Key-value — each piece of data has a named label (key) paired with its corresponding data (value) in the format",
      "Row-column — each piece of data sits at the intersection of a horizontal row and a vertical column in a table",
      "Parent-child — each piece of data is nested inside another piece, forming a tree-like hierarchy of related items",
      "Input-output — each piece of data enters the system as input and is transformed into a different output by code",
    ],
    correctIndex: 0,
    explanation:
      "JSON organizes data as key-value pairs. In {\"color\": \"blue\"}, \"color\" is the key (label) and \"blue\" is the value. This pairing makes it easy to look up data by name.",
  },

  // ─── Cloud Basics ──────────────────────────────────
  {
    id: "q_cloudbasics_scen_1",
    conceptId: "cloudbasics",
    module: 0,
    type: "scenario",
    prompt:
      "A small startup launches a new app but doesn't want to buy and maintain expensive physical servers. Instead, they rent computing power from Amazon's servers over the internet. What concept is this?",
    options: [
      "Cloud computing — renting remote servers from a provider like Amazon (AWS) instead of buying and maintaining your own hardware",
      "A database — storing the startup's application data in organized tables on their own local computer's hard drive permanently",
      "An API — setting up a defined interface that lets the startup's app communicate with Amazon's online shopping catalog",
      "The backend — writing the server-side code and logic that processes user requests and interacts with stored data records",
    ],
    correctIndex: 0,
    explanation:
      "Cloud computing means renting servers, storage, and computing power from companies like AWS (Amazon), Google Cloud, or Azure (Microsoft) instead of buying your own physical hardware.",
  },
  {
    id: "q_cloudbasics_scen_2",
    conceptId: "cloudbasics",
    module: 0,
    type: "scenario",
    prompt:
      "A company's app suddenly gets ten times more users than expected. They need more server power immediately but can't wait weeks to buy new hardware. What solution lets them scale up instantly?",
    options: [
      "Cloud computing — you can instantly add more server resources from a cloud provider without buying any physical hardware",
      "A stronger database — upgrading the database software to a faster version lets the existing server handle all the new users",
      "Better frontend code — optimizing the HTML and CSS that run in users' browsers would reduce the load on the company servers",
      "JSON formatting — switching to a more efficient data format would make each request smaller and faster for every user",
    ],
    correctIndex: 0,
    explanation:
      "One of the biggest advantages of cloud computing is instant scalability. Need more power? Click a button (or set up auto-scaling) and you have more servers in minutes, not weeks.",
  },
  {
    id: "q_cloudbasics_tf_1",
    conceptId: "cloudbasics",
    module: 0,
    type: "true_false",
    prompt:
      "True or False: 'The cloud' is just a term for remote servers owned by other companies that you access and rent over the internet.",
    options: [
      "True — the cloud simply means using someone else's servers and computing resources that you access over the internet",
      "False — the cloud is a special type of technology that floats data wirelessly through the air between devices directly",
      "True — but only for storage, because cloud servers cannot actually run application code or process user login requests",
      "False — the cloud refers to a specific physical location where all the world's internet data is stored in one building",
    ],
    correctIndex: 0,
    explanation:
      "This is true. 'The cloud' simply means remote servers owned by companies like Amazon, Google, or Microsoft that you rent over the internet. There's no magic — it's just someone else's computer.",
  },
  {
    id: "q_cloudbasics_d2t_1",
    conceptId: "cloudbasics",
    module: 0,
    type: "analogy_to_term",
    prompt:
      "\"Renting an apartment instead of buying a house — you use the space you need without owning or maintaining the building yourself.\" What concept does this describe?",
    options: [
      "Cloud computing — you rent server resources from a provider instead of buying and maintaining your own physical hardware",
      "A database — you organize data into structured tables instead of scattering information across many unrelated text files",
      "An API — you communicate with another service through a defined interface instead of accessing its internal code directly",
      "The frontend — you interact with the visual interface in a browser instead of working with the server's raw code directly",
    ],
    correctIndex: 0,
    explanation:
      "Cloud computing is like renting an apartment — you pay for what you use without worrying about maintaining the building (hardware). The cloud provider handles repairs, upgrades, and security.",
  },
  {
    id: "q_cloudbasics_win_1",
    conceptId: "cloudbasics",
    module: 0,
    type: "which_is_not",
    prompt:
      "Which of the following is NOT a benefit of using cloud computing instead of owning your own servers?",
    options: [
      "Your application code will automatically have zero bugs because cloud providers review and fix all code you upload to them",
      "You can scale up or down quickly by renting more or fewer server resources based on how much traffic your app gets",
      "You avoid the upfront cost of buying expensive physical server hardware and paying for a place to keep all the machines",
      "The cloud provider handles hardware maintenance, security patches, and replacing broken equipment on your behalf",
    ],
    correctIndex: 0,
    explanation:
      "Cloud providers manage hardware, not your code. They handle servers, networking, and physical security, but your application's bugs are still your responsibility to find and fix.",
  },
];
