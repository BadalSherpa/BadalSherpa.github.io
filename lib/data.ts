// Single source of truth for all portfolio content.
// Sourced from Badal Sherpa's latest 2026 resume and the previous portfolio.

export const profile = {
  name: "Badal Sherpa",
  firstName: "Badal",
  lastName: "Sherpa",
  role: "Lead Software Engineer",
  tagline: "React.js · Next.js · TypeScript · Node.js · Express",
  location: "Gurugram, India",
  hometown: "Sukhia Pokhri, Darjeeling",
  email: "badalsherpa7@gmail.com",
  resume: "/Badal_Sherpa_Resume.pdf",
  photo: "/images/badal-sherpa-2026.jpg",
  summary:
    "Lead Software Engineer with 6+ years of experience designing and building scalable web and mobile applications end to end — responsive front ends with React, Next.js and TypeScript, and backend services with Node.js and Express, including REST API design, data modeling and integrations backed by PostgreSQL and MongoDB.",
  about:
    "I build products end to end — from UI to API to database. I've delivered enterprise products, led an Angular-to-React migration, and was promoted from Senior to Lead for technical leadership, code-review quality and mentoring. I use AI-assisted tools like Claude Code, Copilot and Cursor to ship faster without compromising quality.",
  roles: [
    "Lead Software Engineer",
    "React & Next.js Specialist",
    "Full-stack with Node & Express",
    "Performance Optimizer",
    "Mentor & Code Reviewer",
  ],
};

export const stats = [
  { value: 6, suffix: "+", label: "Years building for the web" },
  { value: 3000, suffix: "+", label: "Agents onboarded on Paytm flows" },
  { value: 1000, suffix: "+", label: "HUB clients using my Sitecore components" },
  { value: 396, suffix: "K", label: "Developers reached on Stack Overflow" },
];

export const socials = [
  { label: "GitHub", href: "https://github.com/BadalSherpa", handle: "@BadalSherpa" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/badal-sherpa", handle: "in/badal-sherpa" },
  { label: "Stack Overflow", href: "https://stackoverflow.com/users/13983584/badal-s", handle: "396K+ reach" },
  { label: "LeetCode", href: "https://leetcode.com/u/Badal_Sherpa", handle: "u/Badal_Sherpa" },
];

export type Experience = {
  company: string;
  role: string;
  /** Title progression within the company, shown under the role. */
  progression?: string;
  period: string;
  location: string;
  current?: boolean;
  engagements: {
    client: string;
    product: string;
    period?: string;
    points: string[];
  }[];
  stack: string[];
};

export const experience: Experience[] = [
  {
    company: "Virtusa",
    role: "Lead Software Engineer",
    progression: "Lead (Jan 2026 – Oct 2026) · Senior (Jul 2022 – Dec 2025)",
    period: "Jul 2022 — Oct 2026",
    location: "Gurugram",
    engagements: [
      {
        client: "HUB International",
        product: "Enterprise web ecosystem",
        points: [
          "Led frontend development and maintenance for hubinternational.com and major subsidiary portals.",
          "Spearheaded the end-to-end migration of HUB's legacy Angular signature web app to React, significantly improving performance and maintainability.",
          "Built and shipped the complete live frontend for Western Growers, converting complex UI designs into scalable Sitecore SXA components.",
          "Developed Sitecore SXA components used by thousands of HUB International clients across Canada.",
          "Built high-performance enterprise UIs, working with backend teams on API contracts and data flow for reliable data hydration and fast page loads for a high-traffic international user base.",
          "Drove sprint goals and UI/UX consistency, partnering with QA and backend engineers to resolve complex cross-browser defects.",
          "Promoted from Senior to Lead Engineer; upskilled junior developers through rigorous code reviews and by unblocking technical roadblocks.",
          "Integrated AI coding tools (Claude Code, GitHub Copilot, Cursor, ChatGPT) into daily workflows to accelerate UI component delivery.",
          "Built reusable, well-tested UI components with consistent handling of API loading, error and validation states across modules.",
          "Improved page speed through code-splitting, lazy loading and fewer redundant API calls; wrote unit tests with Jest and React Testing Library to keep releases stable.",
        ],
      },
    ],
    stack: ["React", "Next.js", "TypeScript", "Sitecore SXA", "GraphQL", "Jest", "RTL"],
  },
  {
    company: "Techlious Network",
    role: "Software Engineer (Frontend)",
    period: "Jan 2020 — Jun 2022",
    location: "India",
    engagements: [
      {
        client: "Paytm",
        product: "Onboarding Engine Platform",
        period: "Sep 2021 – Jun 2022",
        points: [
          "Core contributor to a dynamic, multi-vertical dashboard for configuring workflows across Insurance, Finance, Learning and E-Commerce.",
          "Delivered the B2B and agent onboarding experience used by 3,000+ Key Asset Managers (KAM) and Quality Control (QC) agents.",
          "Built and tested REST APIs with Postman and integrated them across backend and frontend, including request validation and business logic.",
          "Integrated secure REST APIs via Axios with centralized error handling and clear loading states; passed SonarQube quality gates before Jenkins CI/CD deployments.",
          "Optimized JavaScript execution and debounced search inputs; led technical discussions, peer code reviews and end-to-end feature delivery.",
        ],
      },
      {
        client: "Invictus Survival Science",
        product: "Logistics Platform",
        period: "Dec 2020 – Aug 2021",
        points: [
          "Architected a logistics web dashboard from scratch and a companion React Native driver app tracking delivery fleets for Flipkart, Amazon and Coca-Cola.",
          "Integrated Google Maps APIs for live telemetry tracking in the mobile app.",
          "Built a dynamic JSON-driven Form Builder that lets enterprise clients generate customized inspection reports; Redux for state, Chakra UI for styling.",
        ],
      },
      {
        client: "Internal Product",
        product: "Tattoo Management CRM",
        points: [
          "Built a CRM with staff appointment calendars, client tracking and real-time revenue analytics dashboards using React.js, TypeScript and Ant Design.",
          "Integrated third-party calendar libraries for booking flows and backend APIs for live dashboard data.",
        ],
      },
    ],
    stack: ["React", "React Native", "Redux", "Node.js", "Jest", "Jenkins", "SonarQube"],
  },
];

export type Project = {
  title: string;
  kicker: string;
  description: string;
  tags: string[];
  href?: string;
  linkLabel?: string;
  year: string;
  gradient: string;
};

export const projects: Project[] = [
  {
    title: "Yatri Adventure",
    kicker: "Personal project · Travel platform",
    description:
      "A travel-agency platform built from scratch — Prisma schema on Neon serverless Postgres, slug-based package pages, separate public and admin route groups, REST endpoints and an admin dashboard.",
    tags: ["Next.js App Router", "TypeScript", "Neon Postgres", "Prisma", "Tailwind"],
    href: "https://yatriadventure.in",
    linkLabel: "yatriadventure.in",
    year: "2026",
    gradient: "from-[#ff9f43] via-[#ff6b4a] to-[#e11d74]",
  },
  {
    title: "Western Growers",
    kicker: "HUB International · Virtusa",
    description:
      "Built and shipped the complete live frontend — complex UI designs converted into scalable Sitecore SXA components.",
    tags: ["Sitecore SXA", "React", "Performance", "a11y"],
    href: "https://www.wghealthspecialty.com",
    linkLabel: "wghealthspecialty.com",
    year: "2022 — 26",
    gradient: "from-[#7c5cff] via-[#b14dff] to-[#ff4fd8]",
  },
  {
    title: "HUB Signature App",
    kicker: "Angular → React migration",
    description:
      "Spearheaded the end-to-end migration of HUB's legacy Angular signature web app to React, significantly improving performance and maintainability.",
    tags: ["React", "TypeScript", "Migration"],
    year: "2022 — 26",
    gradient: "from-[#ff4fd8] via-[#ff6b8b] to-[#ff9f43]",
  },
  {
    title: "hubinternational.com",
    kicker: "Flagship + subsidiary portals",
    description:
      "Led frontend development and maintenance for HUB's flagship site and major subsidiary portals, with Sitecore SXA components used by thousands of clients across Canada.",
    tags: ["Sitecore SXA", "Core Web Vitals", "Jest", "RTL"],
    href: "https://www.hubinternational.com",
    linkLabel: "hubinternational.com",
    year: "2022 — 26",
    gradient: "from-[#22d3ee] via-[#6d7cff] to-[#7c5cff]",
  },
  {
    title: "Paytm Onboarding Engine",
    kicker: "Techlious Network",
    description:
      "Multi-vertical dashboard configuring onboarding workflows for Insurance, Finance, Learning and E-Commerce — used by 3,000+ KAM and QC agents.",
    tags: ["React", "Axios", "REST", "Jest", "Jenkins"],
    year: "2021 — 22",
    gradient: "from-[#00baf2] via-[#2f6bff] to-[#1b2a7a]",
  },
  {
    title: "Fleet Logistics Suite",
    kicker: "Invictus Survival Science",
    description:
      "Web dashboard plus a React Native driver app tracking delivery fleets for Flipkart, Amazon and Coca-Cola with live Google Maps telemetry and a JSON-driven form builder.",
    tags: ["React Native", "Redux", "Google Maps", "Chakra UI"],
    year: "2020 — 21",
    gradient: "from-[#34d399] via-[#14b8a6] to-[#0e7490]",
  },
  {
    title: "Tattoo Studio CRM",
    kicker: "Internal product",
    description:
      "Appointment calendars, client tracking and real-time revenue analytics dashboards, with third-party calendar booking flows.",
    tags: ["React", "TypeScript", "Ant Design"],
    year: "2020",
    gradient: "from-[#f472b6] via-[#c026d3] to-[#581c87]",
  },
  {
    title: "Inmedic",
    kicker: "Freelance · Korean startup",
    description:
      "React Native app UI with multi-language support (react-i18next) and auth flows, plus the company website built from scratch in Next.js.",
    tags: ["React Native", "i18n", "Next.js"],
    href: "https://inmedic.co.kr",
    linkLabel: "inmedic.co.kr",
    year: "2021 — 22",
    gradient: "from-[#a78bfa] via-[#818cf8] to-[#38bdf8]",
  },
];

export const skillGroups = [
  {
    title: "Frontend",
    icon: "◆",
    items: ["React.js", "Next.js", "React Native", "TypeScript", "JavaScript (ES6+)", "HTML5", "CSS3 / SCSS", "Tailwind CSS", "Material UI", "Chakra UI", "Ant Design", "Bootstrap"],
  },
  {
    title: "Backend & Databases",
    icon: "◇",
    items: ["Node.js", "Express.js", "REST APIs", "GraphQL", "PostgreSQL", "Neon", "MongoDB", "MySQL", "Prisma ORM", "AWS DynamoDB"],
  },
  {
    title: "State & Architecture",
    icon: "❖",
    items: ["Redux Toolkit", "Zustand", "Context API", "Axios interceptors", "SPA / SSR", "Component design systems", "Sitecore SXA", "CMS-driven UI"],
  },
  {
    title: "Performance & Quality",
    icon: "✦",
    items: ["Code-splitting", "Lazy loading", "Debouncing / throttling", "Core Web Vitals", "Web Accessibility", "Jest", "React Testing Library", "SonarQube"],
  },
  {
    title: "DevOps & Tools",
    icon: "⬡",
    items: ["Git (GitHub / Bitbucket)", "Jenkins CI/CD", "AWS (Amplify, S3, EC2)", "Netlify", "Cloudinary", "Twilio", "JIRA", "Postman", "Figma", "Zeplin"],
  },
  {
    title: "AI-Assisted Development",
    icon: "✧",
    items: ["Claude Code", "GitHub Copilot", "Cursor", "ChatGPT", "Gemini", "Prompt engineering"],
  },
];

export const marquee = [
  "React.js", "Next.js", "TypeScript", "Node.js", "Express", "PostgreSQL", "MongoDB", "Prisma",
  "Zustand", "Redux Toolkit", "Tailwind CSS", "Sitecore SXA", "GraphQL", "AWS", "Claude Code",
];

export const process = [
  {
    step: "01",
    title: "Understand",
    body: "I start with the people and the problem — business goals, user flows and constraints — before a single component is written.",
    tags: ["Discovery", "Requirements", "UX alignment"],
  },
  {
    step: "02",
    title: "Architect",
    body: "Reusable components, clear API contracts and clean data flow from UI to database. I design for scale, accessibility and performance from day one.",
    tags: ["TypeScript", "Design systems", "API contracts"],
  },
  {
    step: "03",
    title: "Ship & Elevate",
    body: "Tested releases through CI/CD, tuned Core Web Vitals, rigorous code reviews — and mentoring the team to raise the bar together.",
    tags: ["CI/CD", "Code reviews", "Mentoring"],
  },
];

export const certifications = [
  {
    title: "Data Structures and Algorithms",
    issuer: "GeeksforGeeks",
    image: "/images/certs/Badal_DSA_GFG.png",
    href: "https://media.geeksforgeeks.org/courses/certificates/fb257011906f1edca465dadceb724169.pdf",
  },
  {
    title: "The Complete Web Development Bootcamp (React/Node/MERN)",
    issuer: "Udemy",
    image: "/images/certs/Badal_Web_Development.png",
    href: "https://www.udemy.com/certificate/UC-d9cbebc1-f98b-480f-9cb4-44fe3b14312d/",
  },
  {
    title: "Google Technical Support Fundamentals",
    issuer: "Google · Coursera",
    image: "/images/certs/Badal_Google_Technical_Support_Fundamentals.png",
    href: "https://www.coursera.org/account/accomplishments/verify/7KCGVSS7NLC3",
  },
  {
    title: "Java Programming",
    issuer: "upGrad",
    image: "/images/certs/Badal_Java_Programming.png",
    href: "https://www.credential.net/453af4db-8598-4427-a22e-3e4385455043",
  },
];

export const codingProfiles = [
  { name: "Stack Overflow", href: "https://stackoverflow.com/users/13983584/badal-s", note: "High-rep contributor · 396K+ reach" },
  { name: "GitHub", href: "https://github.com/BadalSherpa", note: "Projects & experiments" },
  { name: "LeetCode", href: "https://leetcode.com/u/Badal_Sherpa", note: "Problem solving" },
  { name: "GeeksforGeeks", href: "https://auth.geeksforgeeks.org/user/badalsherpa7/practice/", note: "DSA practice" },
  { name: "HackerRank", href: "https://www.hackerrank.com/Badal_Sherpa", note: "Challenges" },
  { name: "CodeChef", href: "https://www.codechef.com/users/sanssangay", note: "Contests" },
];

export const education = {
  degree: "B.Tech, Computer Science & Engineering",
  school: "Lovely Professional University, Punjab",
  period: "2018 — 2022",
  score: "CGPA 8.22 / 10",
};

export const offTheClock = [
  "Singing & music",
  "Anime",
  "Volleyball",
  "Football",
  "Gaming",
  "Tech blogs",
  "Mountains of Darjeeling",
];

export const nav = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];
