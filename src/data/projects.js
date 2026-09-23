export const projects = [
  {
    id: "dispatchai",
    title: "DispatchAI",
    tagline: "Real-time delivery & dispatch platform",
    preview: "Event-driven logistics platform with real-time tracking, ML-based ETA prediction, and a RAG support assistant.",
    tags: ["Next.js", "Express", "Socket.io", "Kafka", "PostGIS", "FastAPI"],
    details: `A full-stack, event-driven delivery platform built with Next.js, Express, Socket.io, Kafka, Redis, and PostGIS — featuring real-time order/location tracking, agent matching, role-based dashboards, and live chat. Includes XGBoost/Prophet-based ETA prediction and surge pricing microservices, a RAG-based support assistant (FastAPI, LangChain, pgvector, Gemini), Razorpay/PayPal payment integration, with all 7 services containerized via Docker Compose.`,
    links: { github: "https://github.com/Varun8086/dispatchai" },
  },
  {
    id: "recommendation-system",
    title: "Social Network Recommendation System",
    tagline: "Recommendation engine, Python + Jupyter",
    preview: "Recommendation algorithms for 'People You May Know' and 'Pages You May Like' from social network data.",
    tags: ["Python", "Pandas", "Jupyter"],
    details: `Cleaned and processed JSON-based social network data by removing empty, duplicate, and isolated user records. Developed recommendation algorithms for "People You May Know" using mutual connections, and "Pages You May Like" based on shared user interests.`,
    links: { github: "#" },
  },
  {
    id: "placement-assistant",
    title: "Placement Assistant Portal",
    tagline: "Placement prep web portal",
    preview: "A web portal for placement prep with secure login, quizzes, and admin-controlled content.",
    tags: ["React", "Node.js", "PostgreSQL"],
    details: `Built a web portal for placement preparation featuring secure authentication, quizzes, and admin-controlled content, backed by a PostgreSQL database.`,
    links: { github: "https://github.com/Varun8086/QuizApp" },
  },
  {
    id: "eco-shop",
    title: "Sustainable E-Commerce Website",
    tagline: "MERN-stack platform for local vendors",
    preview: "A MERN-stack e-commerce platform supporting local vendors across India, focused on sustainability.",
    tags: ["React.js", "MongoDB", "Node.js", "Express"],
    details: `Built a MERN-stack platform supporting local vendors across India, with a focus on sustainability and local employment — connecting shoppers directly with regional sellers.`,
    links: { github: "https://github.com/Varun8086/EcoShop" },
  },
  
//   {
//     id: "instagram-analytics",
//     title: "Instagram Profile Analytics",
//     tagline: "Social media data analysis",
//     preview: "Python/Jupyter notebook analyzing Instagram profile metrics and engagement patterns.",
//     tags: ["Python", "Pandas", "Jupyter"],
//     details: `Exploratory data analysis on Instagram profile metrics — engagement trends, posting patterns, and follower growth signals — built as a hands-on data science project using Pandas and visualization libraries.`,
//     links: { github: "#" },
//   }
];