// Portfolio data — Shubhaan Kumar Mishra

export const personalInfo = {
  name: "Shubhaan Kumar Mishra",
  title: "Backend Engineer · Java & Node.js",
  roles: [
    "Java Backend Developer",
    "Backend Engineer",
    "Full-Stack Developer",
    "System Architect",
  ],
  roleSubtitles: [
    "Spring Boot · Node.js · MongoDB",
    "Building Scalable Systems",
    "React · Next.js · Node.js",
    "Distributed Systems · APIs",
  ],
  location: "India",
  email: "MishrashubhaanKumar@gmail.com",
  phone: "+91-XXXXXXXXXX",
  github: "https://github.com/Shubhaan-Kumar-Mishra",
  linkedin: "https://www.linkedin.com/in/shubhaan-kumar-mishra-243350293/",
  availability: "Open to Internship & Full-Time",
  bio: "I build production-grade backend systems — REST APIs, real-time pipelines, and full-stack apps that are secure, scalable, and maintainable. Currently pursuing B.Tech CS (2023–2027) with hands-on experience in Java, Node.js, and cloud-deployed architectures.",
  resumeUrl: "https://drive.google.com/file/d/1MP_IsZi_kvO5H55Do1ouiiKSjp7HSbAq/view", // Replace with actual resume URL
};

export const education = {
  degree: "Bachelor of Technology — Computer Science",
  institution: "B.Tech CS · Batch 2023–2027",
  cgpa: "6.95",
  year: "2023 – 2027",
  location: "India",
  coursework: ["Data Structures", "Algorithms", "Operating Systems", "DBMS", "Computer Networks", "Software Engineering"],
};

export const stats = [
  { label: "GitHub Repos",    value: "11",   suffix: "" },
  { label: "Projects Shipped", value: "4+",  suffix: "" },
  { label: "LeetCode Solved", value: "200+", suffix: "" },
  { label: "Technologies",    value: "20+",  suffix: "" },
];

export const skills = {
  Languages: [
    { name: "Java",       level: "Expert"       },
    { name: "JavaScript", level: "Expert"       },
    { name: "TypeScript", level: "Advanced"     },
    { name: "Python",     level: "Advanced"     },
    { name: "SQL",        level: "Advanced"     },
    { name: "C",          level: "Intermediate" },
  ],
  Backend: [
    { name: "Node.js",     level: "Expert"       },
    { name: "Express.js",  level: "Expert"       },
    { name: "REST APIs",   level: "Expert"       },
    { name: "Spring Boot", level: "Advanced"     },
    { name: "JWT Auth",    level: "Advanced"     },
    { name: "WebSockets",  level: "Intermediate" },
  ],
  Frontend: [
    { name: "React.js",    level: "Expert"       },
    { name: "Next.js",     level: "Advanced"     },
    { name: "Tailwind CSS",level: "Advanced"     },
    { name: "HTML/CSS",    level: "Expert"       },
  ],
  Database: [
    { name: "MongoDB",    level: "Expert"       },
    { name: "MySQL",      level: "Advanced"     },
    { name: "PostgreSQL", level: "Intermediate" },
    { name: "Supabase",   level: "Intermediate" },
  ],
  DevOps: [
    { name: "Git",    level: "Expert"       },
    { name: "Linux",  level: "Advanced"     },
    { name: "Docker", level: "Intermediate" },
    { name: "Azure",  level: "Intermediate" },
  ],
  Tools: [
    { name: "Postman",  level: "Expert"   },
    { name: "VS Code",  level: "Expert"   },
    { name: "GitHub",   level: "Expert"   },
    { name: "Figma",    level: "Intermediate" },
  ],
};

export const projects = [
  {
    id: 1,
    name: "PRO SPACE",
    tagline: "Real-Time Project Management Dashboard",
    description:
      "Enterprise-grade full-stack project management platform with live collaboration, WebSocket-powered task tracking, and a React dashboard with chart-driven analytics.",
    longDescription:
      "PRO SPACE is built for distributed teams — it delivers real-time task updates via Socket.io, granular RBAC, activity feeds, and a clean REST API secured with JWT and rate limiting. The MongoDB aggregation layer drives performance analytics.",
    tech: ["Node.js", "Express.js", "MongoDB", "React.js", "Socket.io", "JWT", "Tailwind CSS"],
    github: "https://github.com/Shubhaan-Kumar-Mishra/RTPM-Dashboard-Frontend",
    githubBackend: "https://github.com/Shubhaan-Kumar-Mishra/RTPM-Dashboard-backend",
    live: null,
    type: "Full Stack",
    status: "Completed",
    year: "2026",
    highlights: [
      "Real-time updates via Socket.io WebSocket integration",
      "Role-Based Access Control (RBAC) for team management",
      "JWT-secured REST API with rate limiting",
      "MongoDB aggregation pipelines for live analytics",
      "Responsive React dashboard with real-time charts",
    ],
    color: "#3b82f6",
  },
  {
    id: 2,
    name: "PRO FOLIO",
    tagline: "Stock Portfolio Management System",
    description:
      "Production-ready stock tracker with OTP-based password reset, real-time P&L calculation, bcrypt auth, and a clean Node.js + MongoDB backend with strict input validation.",
    longDescription:
      "PRO FOLIO is a secure full-stack portfolio system. It features bcrypt-hashed authentication, 6-digit OTP reset via Nodemailer, real-time portfolio valuation, complete CRUD for stock positions, and JWT session management with strict 35-char input validation.",
    tech: ["Node.js", "Express.js", "MongoDB", "React.js", "JWT", "Nodemailer", "bcrypt", "Tailwind CSS"],
    github: "https://github.com/Shubhaan-Kumar-Mishra/PRO-FOLIO-BACKEND",
    githubFrontend: "https://github.com/Shubhaan-Kumar-Mishra/PRO-SPACE-REPOSITORY",
    live: null,
    type: "Full Stack",
    status: "Completed",
    year: "2026",
    highlights: [
      "OTP password reset with Nodemailer & 6-digit tokens",
      "bcrypt password hashing & secure session management",
      "Real-time P&L portfolio calculation",
      "Complete CRUD with 35-character input validation",
      "JWT authentication with refresh token support",
    ],
    color: "#8b5cf6",
  },
  {
    id: 3,
    name: "Route Optimizer",
    tagline: "Dijkstra-Based Smart Navigation Engine",
    description:
      "DSA-heavy navigation engine using Dijkstra's algorithm on weighted directed graphs — with interactive graph construction, shortest-path visualization, and traversal animation.",
    longDescription:
      "A deep-dive DSA project implementing optimized Dijkstra's shortest path on weighted directed graphs. Features dynamic edge weighting, interactive graph construction, step-by-step traversal animation, and performance benchmarks across varying graph densities.",
    tech: ["Java", "Data Structures", "Algorithms", "Graph Theory", "Dijkstra's Algorithm"],
    github: "https://github.com/Shubhaan-Kumar-Mishra/Backend-Dev",
    live: null,
    type: "Algorithm",
    status: "Completed",
    year: "2025",
    highlights: [
      "O((V + E) log V) optimized Dijkstra implementation",
      "Interactive weighted graph construction UI",
      "Step-by-step visual traversal animation",
      "Handles disconnected, cyclic & dense graphs",
      "Performance benchmarked across graph densities",
    ],
    color: "#06b6d4",
  },
  {
    id: 4,
    name: "BridgeLabz SIPP",
    tagline: "Java & Backend Engineering Bootcamp",
    description:
      "Intensive backend engineering program covering Java OOP patterns, Spring Boot fundamentals, Data Structures, algorithms, MySQL integration, and professional software engineering practices.",
    tech: ["Java", "OOP", "DSA", "Spring Boot", "MySQL", "Design Patterns"],
    github: "https://github.com/Shubhaan-Kumar-Mishra/BridgeLabz-SIPP-Training-2026",
    live: null,
    type: "Training",
    status: "In Progress",
    year: "2026",
    highlights: [
      "Advanced Java OOP & SOLID principles",
      "Spring Boot backend fundamentals",
      "DSA with Java Collections & Generics",
      "MySQL + JPA/JDBC integration",
      "Production-grade code quality standards",
    ],
    color: "#6366f1",
  },
];

export const experience = [];

export const achievements = [
  {
    title: "Azure AI Fundamentals",
    issuer: "Microsoft",
    badge: "AI-900",
    description: "Microsoft-certified in core Azure AI concepts, ML fundamentals, computer vision, NLP, and cognitive services.",
    icon: "award",
    color: "#3b82f6",
    year: "2024",
    metric: "Microsoft Certified",
    credentialUrl: "https://drive.google.com/file/d/1OS-kuRO0ETL4ao7wtVWL9BxvbeJW7Rvs/view?usp=sharing",
  },
  {
    title: "BridgeLabz SIPP",
    issuer: "BridgeLabz",
    badge: "Backend",
    description: "Selected for intensive backend engineering program. Training in Java, Spring Boot, DSA, and production code practices.",
    icon: "terminal",
    color: "#8b5cf6",
    year: "2026",
    metric: "Ongoing",
  },
  {
    title: "200+ LeetCode Problems",
    issuer: "LeetCode",
    badge: "DSA",
    description: "Solved 200+ algorithmic problems covering arrays, trees, graphs, DP, and sliding window across Easy to Hard levels.",
    icon: "code",
    color: "#06b6d4",
    year: "2024–26",
    metric: "200+ Solved",
  },
  {
    title: "Spandan — Sports Coordinator",
    issuer: "College Cultural Fest",
    badge: "Leadership",
    description: "Led end-to-end sports event coordination for Spandan, managing scheduling, team logistics, and 500+ participants.",
    icon: "trophy",
    color: "#6366f1",
    year: "2025",
    metric: "500+ Participants",
  },
];

export const techStack = [
  { name: "React",      category: "Frontend",  color: "#61DAFB" },
  { name: "Node.js",   category: "Backend",   color: "#68a063" },
  { name: "MongoDB",   category: "Database",  color: "#47A248" },
  { name: "TypeScript",category: "Language",  color: "#3178C6" },
  { name: "Express",   category: "Backend",   color: "#aaaaaa" },
  { name: "Python",    category: "Language",  color: "#3776AB" },
  { name: "Java",      category: "Language",  color: "#ED8B00" },
  { name: "Docker",    category: "DevOps",    color: "#2496ED" },
  { name: "Git",       category: "Tools",     color: "#F05032" },
  { name: "MySQL",     category: "Database",  color: "#4479A1" },
  { name: "Linux",     category: "DevOps",    color: "#FCC624" },
  { name: "Azure",     category: "Cloud",     color: "#0078D4" },
];

export const timeline = [
  {
    year: "2023",
    title: "Started B.Tech — Computer Science",
    description: "Enrolled in B.Tech CS (Batch 2023–2027). Started with C fundamentals, then moved to Java and web development.",
    type: "education",
    icon: "graduation-cap",
  },
  {
    year: "2024",
    title: "Azure AI Certified + DSA Grind",
    description: "Earned Microsoft Azure AI Fundamentals (AI-900). Solved 200+ LeetCode problems. Completed Git and Linux workshops.",
    type: "achievement",
    icon: "award",
    credentialUrl: "https://drive.google.com/file/d/1OS-kuRO0ETL4ao7wtVWL9BxvbeJW7Rvs/view?usp=sharing",
  },
  {
    year: "2025",
    title: "Route Optimizer & Spandan",
    description: "Shipped Dijkstra-based navigation engine. Led sports coordination at Spandan college fest for 500+ participants.",
    type: "milestone",
    icon: "trophy",
  },
  {
    year: "2026",
    title: "PRO SPACE · PRO FOLIO · Internship",
    description: "Shipped two production apps — real-time dashboard and stock manager. Started backend internship. Enrolled in BridgeLabz SIPP.",
    type: "project",
    icon: "rocket",
  },
  {
    year: "2027",
    title: "Targeting Elite Engineering Roles",
    description: "Aiming for backend or full-stack engineering positions at product companies building world-class infrastructure.",
    type: "future",
    icon: "target",
  },
];

export const codingPlatforms = [
  { name: "GitHub",   handle: "@Shubhaan-Kumar-Mishra",   url: "https://github.com/Shubhaan-Kumar-Mishra",           color: "#ffffff" },
  { name: "LinkedIn", handle: "Shubhaan Kumar Mishra",     url: "https://www.linkedin.com/in/shubhaan-kumar-mishra-243350293/",      color: "#0A66C2" },
];
