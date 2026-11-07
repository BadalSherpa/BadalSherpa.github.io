// Single source of truth for all portfolio content.
// Sourced from Badal Sherpa's latest 2026 resume and the previous portfolio.

export const profile = {
  name: "Badal Sherpa",
  firstName: "Badal",
  lastName: "Sherpa",
  role: "Lead Software Engineer",
  tagline: "Frontend · React.js · Next.js · TypeScript · Node.js",
  location: "Gurugram, India",
  hometown: "Sukhia Pokhri, Darjeeling",
  email: "badalsherpa7@gmail.com",
  resume: "/Badal_Sherpa_Resume.pdf",
  photo: "/images/badal-sherpa-2026.jpg",
  summary:
    "Frontend-focused Lead Software Engineer with 6+ years building React and Next.js products for enterprise insurance (HUB International) and fintech (Paytm) — strong in TypeScript, SSR, component libraries, Core Web Vitals, accessibility and testing, and comfortable with Node.js/Express and GraphQL APIs.",
  about:
    "I lead frontend delivery for enterprise products. I led the migration of a legacy Angular app to React, built Next.js / Sitecore SXA experiences used by 2,000+ clients across Canada, and was promoted from Senior to Lead in Jan 2026, leading a team of 3 engineers through code reviews, sprint planning and delivery. I use AI-assisted tools like Claude Code, Copilot and Cursor to ship faster without compromising quality.",
  roles: [
    "Lead Software Engineer",
    "React & Next.js Specialist",
    "Frontend Architecture & SSR",
    "Performance Optimizer",
    "Mentor & Code Reviewer",
  ],
};

export const stats = [
  { value: 6, suffix: "+", label: "Years building for the web" },
  { value: 3000, suffix: "+", label: "Agents onboarded on Paytm flows" },
  { value: 2000, suffix: "+", label: "HUB clients using my Sitecore components" },
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
          "Led frontend delivery for hubinternational.com and 3 subsidiary portals serving 10K+ monthly visitors; owned sprint goals for a team of 3 engineers alongside QA and backend developers.",
          "Led the migration of HUB's legacy Angular signature web app to React, cutting page load time by 80% and reducing build time.",
          "Built the complete live frontend for Western Growers, turning complex designs into 10 reusable Sitecore SXA + React components.",
          "Raised Lighthouse performance scores from 79 to 95+ through code-splitting, lazy loading and removing redundant API calls.",
          "Built a reusable component set with consistent loading, error and validation states, reused across 5 modules with 80%+ Jest + React Testing Library coverage.",
          "Mentored 3 junior developers through code reviews and pairing; defined API contracts with backend teams for reliable data hydration.",
          "Introduced AI coding tools (Copilot, Cursor, Claude Code) into the team workflow to speed up component delivery and reduce boilerplate.",
          "Owned features end to end, from development and testing through deployment and post-release support.",
        ],
      },
    ],
    stack: ["React", "Next.js", "TypeScript", "Sitecore SXA", "GraphQL", "Jest", "RTL"],
  },
  {
    company: "Techlious Network",
    role: "Software Engineer · Frontend",
    progression: "Remote, alongside B.Tech",
    period: "Jan 2020 — Jun 2022",
    location: "Remote",
    engagements: [
      {
        client: "Paytm",
        product: "Onboarding Engine Platform",
        period: "Sep 2021 – Jun 2022",
        points: [
          "Core contributor to the Onboarding Engine, a multi-vertical dashboard (Insurance, Finance, Learning, E-commerce) for configuring onboarding workflows.",
          "Delivered B2B and agent onboarding flows used by 3,000+ Key Asset Managers and Quality Control agents.",
          "Centralised API error handling and loading states; integrated secure REST APIs via Axios and passed SonarQube gates before Jenkins CI/CD deployments.",
          "Led technical discussions and peer code reviews; owned end-to-end feature delivery.",
        ],
      },
      {
        client: "Invictus Survival Science",
        product: "Logistics Platform",
        period: "Dec 2020 – Aug 2021",
        points: [
          "Built a logistics web dashboard and a React Native driver app tracking delivery fleets for clients including Flipkart, Amazon and Coca-Cola, with Google Maps live tracking.",
          "Built a JSON-driven form builder letting enterprise clients generate custom inspection reports (Redux, Chakra UI).",
        ],
      },
      {
        client: "Internal Product",
        product: "Tattoo Management CRM",
        points: [
          "Built a CRM with booking calendars, client tracking and live revenue dashboards using React.js, TypeScript and Ant Design.",
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
};

export const projects: Project[] = [
  {
    title: "Yatri Adventure",
    kicker: "Freelance client project · Sole developer",
    description:
      "A travel-agency platform delivered single-handedly for the client, from requirements to deployment — Prisma/PostgreSQL schema for dynamic travel packages, SEO-friendly slug pages, REST endpoints and an admin dashboard.",
    tags: ["Next.js App Router", "TypeScript", "Neon Postgres", "Prisma", "Tailwind"],
    href: "https://yatriadventure.in",
    linkLabel: "yatriadventure.in",
    year: "2026",
  },
  {
    title: "Western Growers",
    kicker: "HUB International · Virtusa",
    description:
      "Built the complete live frontend, turning complex designs into 10 reusable Sitecore SXA + React components.",
    tags: ["Sitecore SXA", "React", "Performance", "a11y"],
    href: "https://www.wghealthspecialty.com",
    linkLabel: "wghealthspecialty.com",
    year: "2022 — 26",
  },
  {
    title: "HUB Signature App",
    kicker: "Angular → React migration",
    description:
      "Led the migration of HUB's legacy Angular signature web app to React, cutting page load time by 80% and reducing build time.",
    tags: ["React", "TypeScript", "Migration"],
    year: "2022 — 26",
  },
  {
    title: "hubinternational.com",
    kicker: "Flagship + subsidiary portals",
    description:
      "Led frontend delivery for HUB's flagship site and 3 subsidiary portals serving 10K+ monthly visitors — Sitecore SXA components used by 2,000+ clients across Canada, with Lighthouse scores raised from 79 to 95+.",
    tags: ["Sitecore SXA", "Core Web Vitals", "Jest", "RTL"],
    href: "https://www.hubinternational.com",
    linkLabel: "hubinternational.com",
    year: "2022 — 26",
  },
  {
    title: "Paytm Onboarding Engine",
    kicker: "Techlious Network",
    description:
      "Multi-vertical dashboard configuring onboarding workflows for Insurance, Finance, Learning and E-Commerce — used by 3,000+ KAM and QC agents.",
    tags: ["React", "Axios", "REST", "Jest", "Jenkins"],
    year: "2021 — 22",
  },
  {
    title: "Fleet Logistics Suite",
    kicker: "Invictus Survival Science",
    description:
      "Web dashboard plus a React Native driver app tracking delivery fleets for Flipkart, Amazon and Coca-Cola with live Google Maps telemetry and a JSON-driven form builder.",
    tags: ["React Native", "Redux", "Google Maps", "Chakra UI"],
    year: "2020 — 21",
  },
  {
    title: "Tattoo Studio CRM",
    kicker: "Internal product",
    description:
      "Appointment calendars, client tracking and real-time revenue analytics dashboards, with third-party calendar booking flows.",
    tags: ["React", "TypeScript", "Ant Design"],
    year: "2020",
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
  },
];

export const skillGroups = [
  {
    title: "Frontend",
    icon: "◆",
    items: ["React.js", "Next.js (App Router)", "React Native", "TypeScript", "JavaScript (ES6+)", "HTML5", "CSS3 / SCSS", "Tailwind CSS", "Material UI", "Chakra UI", "Ant Design", "Bootstrap"],
  },
  {
    title: "Backend & Data",
    icon: "◇",
    items: ["Node.js", "Express.js", "REST APIs", "GraphQL", "PostgreSQL", "Prisma ORM", "MongoDB"],
  },
  {
    title: "State & Architecture",
    icon: "❖",
    items: ["Redux Toolkit", "Zustand", "Context API", "Axios interceptors", "SPA / SSR", "Component design systems", "Frontend system design", "Sitecore SXA (headless)", "CMS-driven UI"],
  },
  {
    title: "Performance & Quality",
    icon: "✦",
    items: ["Core Web Vitals", "Code-splitting", "Lazy loading", "Debouncing / throttling", "WCAG accessibility", "Jest", "React Testing Library", "SonarQube"],
  },
  {
    title: "DevOps & Tools",
    icon: "⬡",
    items: ["Git (GitHub / Bitbucket)", "Jenkins CI/CD", "AWS S3 / Amplify", "JIRA", "Postman", "Figma"],
  },
  {
    title: "AI-Assisted Development",
    icon: "✧",
    items: ["Claude Code", "GitHub Copilot", "Cursor", "ChatGPT"],
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
