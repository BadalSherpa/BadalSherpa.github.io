// Single source of truth for all portfolio content.
// Sourced from Badal Sherpa's 2026 resume and the previous portfolio.

export const profile = {
  name: "Badal Sherpa",
  firstName: "Badal",
  lastName: "Sherpa",
  role: "Lead Software Engineer",
  tagline: "React.js · Next.js · TypeScript · Node.js · MERN",
  location: "Gurugram, India",
  hometown: "Sukhia Pokhri, Darjeeling",
  email: "badalsherpa7@gmail.com",
  resume: "/Badal_Sherpa_Resume.pdf",
  photo: "/images/badal.jpg",
  experienceStart: "2020-01-01",
  availability: "Open to new opportunities",
  summary:
    "Lead Software Engineer with nearly seven years of experience building high-performance, scalable web and mobile applications with React.js, Next.js, TypeScript, Redux and React Native, plus hands-on Node.js/Express API development.",
  about:
    "I turn complex enterprise requirements into fast, accessible and beautifully crafted interfaces. I've shipped products for HUB International and Paytm, obsess over Core Web Vitals and clean component architecture, and was promoted to Lead for code-review rigor, mentoring and owning delivery end to end.",
  roles: [
    "Lead Software Engineer",
    "React & Next.js Specialist",
    "TypeScript Enthusiast",
    "Performance Optimizer",
    "Mentor & Code Reviewer",
  ],
};

export const stats = [
  { value: 6, suffix: "+", label: "Years building for the web" },
  { value: 3000, suffix: "+", label: "Agents onboarded on Paytm flows" },
  { value: 5, suffix: "", label: "Enterprise HUB portals maintained" },
  { value: 396, suffix: "K", label: "Developers reached on StackOverflow" },
];

export const socials = [
  { label: "GitHub", href: "https://github.com/BadalSherpa", handle: "@BadalSherpa" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/badal-sherpa", handle: "in/badal-sherpa" },
  { label: "StackOverflow", href: "https://stackoverflow.com/users/13983584/badal-s", handle: "600+ reputation" },
  { label: "LeetCode", href: "https://leetcode.com/u/Badal_Sherpa", handle: "u/Badal_Sherpa" },
];

export type Experience = {
  company: string;
  role: string;
  period: string;
  location: string;
  current?: boolean;
  engagements: {
    client: string;
    product: string;
    points: string[];
  }[];
  stack: string[];
};

export const experience: Experience[] = [
  {
    company: "Virtusa",
    role: "Lead Software Engineer",
    period: "Jun 2022 — Present",
    location: "Gurugram",
    current: true,
    engagements: [
      {
        client: "HUB International",
        product: "Enterprise web ecosystem",
        points: [
          "Lead frontend development and UI maintenance for the flagship hubinternational.com and subsidiary portals — hubfinancial.com, fnainsurance.com, programbrokerage.com and wghealthspecialty.com.",
          "Architected and shipped the complete live frontend for Western Growers (wghealthspecialty.com), turning complex designs into reusable, scalable Sitecore SXA components.",
          "Built signature.hubinternational.com, an internal portal used by thousands of HUB staff to generate customized, multi-variant corporate email signatures.",
          "Integrated UI with Sitecore CMS and GraphQL APIs alongside backend engineers for clean data hydration, component reuse and fast page loads.",
          "Improved performance through SSR, code splitting and Core Web Vitals tuning while ensuring cross-browser and accessibility compliance.",
          "Promoted to Lead — driving code reviews, unblocking technical issues, mentoring junior developers and coordinating sprint delivery with QA and backend teams.",
        ],
      },
    ],
    stack: ["Next.js", "React", "TypeScript", "GraphQL", "Sitecore SXA", "Core Web Vitals"],
  },
  {
    company: "Techlious Network",
    role: "Software Engineer",
    period: "Jan 2020 — Jun 2022",
    location: "India",
    engagements: [
      {
        client: "Paytm",
        product: "Onboarding Engine Platform",
        points: [
          "Core contributor to a multi-vertical dashboard configuring onboarding workflows across Insurance, Finance, Learning and E-Commerce.",
          "Delivered B2B and agent onboarding flows used by 3,000+ Key Asset Managers and Quality Control agents.",
          "Built and tested REST APIs (Node.js, Postman) with request validation and business logic; integrated them via Axios with centralized error handling and loading states.",
          "Improved responsiveness by optimizing JS execution and debouncing search inputs; kept high unit-test coverage and passed SonarQube gates before Jenkins CI/CD releases.",
        ],
      },
      {
        client: "Invictus Survival Science",
        product: "Logistics Platform",
        points: [
          "Architected a logistics web dashboard from scratch and a companion React Native driver app tracking delivery fleets for clients such as Flipkart, Amazon and Coca-Cola.",
          "Integrated Google Maps APIs for live tracking and built a JSON-driven Form Builder for custom inspection reports with Redux and Chakra UI.",
        ],
      },
      {
        client: "Internal Product",
        product: "Tattoo Management CRM",
        points: [
          "Built a CRM with staff appointment calendars, client tracking and real-time revenue dashboards using React.js, TypeScript and Ant Design.",
        ],
      },
    ],
    stack: ["React", "React Native", "Node.js", "Redux", "Jest", "Jenkins"],
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
    title: "Western Growers",
    kicker: "HUB International · Virtusa",
    description:
      "Architected and shipped the complete live frontend — complex designs translated into reusable, scalable Sitecore SXA components.",
    tags: ["Sitecore SXA", "GraphQL", "SSR", "a11y"],
    href: "https://www.wghealthspecialty.com",
    linkLabel: "wghealthspecialty.com",
    year: "2022 — now",
    gradient: "from-[#7c5cff] via-[#b14dff] to-[#ff4fd8]",
  },
  {
    title: "HUB Signature Portal",
    kicker: "Internal enterprise tool",
    description:
      "A portal used by thousands of HUB staff to generate customized, multi-variant corporate email signatures in seconds.",
    tags: ["React", "TypeScript", "Design systems"],
    year: "2022 — now",
    gradient: "from-[#ff4fd8] via-[#ff6b8b] to-[#ff9f43]",
  },
  {
    title: "hubinternational.com",
    kicker: "Flagship + 4 subsidiary portals",
    description:
      "Leading frontend development and UI maintenance across HUB's flagship site, hubfinancial.com, fnainsurance.com and programbrokerage.com.",
    tags: ["Next.js", "Core Web Vitals", "Sitecore CMS"],
    href: "https://www.hubinternational.com",
    linkLabel: "hubinternational.com",
    year: "2022 — now",
    gradient: "from-[#22d3ee] via-[#6d7cff] to-[#7c5cff]",
  },
  {
    title: "Paytm Onboarding Engine",
    kicker: "Techlious Network",
    description:
      "Multi-vertical dashboard configuring onboarding workflows for Insurance, Finance, Learning and E-Commerce — used by 3,000+ agents.",
    tags: ["React", "Node.js", "REST", "Jest"],
    year: "2020 — 22",
    gradient: "from-[#00baf2] via-[#2f6bff] to-[#1b2a7a]",
  },
  {
    title: "Fleet Logistics Suite",
    kicker: "Invictus Survival Science",
    description:
      "Web dashboard plus a React Native driver app tracking delivery fleets for Flipkart, Amazon and Coca-Cola with live Google Maps tracking.",
    tags: ["React Native", "Redux", "Google Maps", "Chakra UI"],
    year: "2020 — 22",
    gradient: "from-[#34d399] via-[#14b8a6] to-[#0e7490]",
  },
  {
    title: "Yatri Adventure",
    kicker: "Travel agency platform",
    description:
      "Built end to end — dynamic travel packages with slug-based pages, separate public and admin route groups, and REST endpoints.",
    tags: ["Next.js", "Prisma", "PostgreSQL"],
    href: "https://yatriadventure.in",
    linkLabel: "yatriadventure.in",
    year: "2026",
    gradient: "from-[#ff9f43] via-[#ff6b4a] to-[#e11d74]",
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
  {
    title: "Tattoo Studio CRM",
    kicker: "Internal product",
    description:
      "Appointment calendars, client tracking and real-time revenue dashboards for studio staff.",
    tags: ["React", "TypeScript", "Ant Design"],
    year: "2020 — 22",
    gradient: "from-[#f472b6] via-[#c026d3] to-[#581c87]",
  },
];

export const skillGroups = [
  {
    title: "Frontend",
    icon: "◆",
    items: ["React.js", "Next.js (SSR/SSG)", "TypeScript", "JavaScript (ES6+)", "Redux", "React Native", "HTML5", "CSS3", "Chakra UI", "Ant Design"],
  },
  {
    title: "APIs & Backend",
    icon: "◇",
    items: ["GraphQL (3 yrs)", "REST APIs", "Axios", "Node.js", "Express", "Prisma", "PostgreSQL"],
  },
  {
    title: "Performance",
    icon: "✦",
    items: ["Core Web Vitals", "Code Splitting", "Lazy Loading", "Debouncing", "Web Accessibility (a11y)"],
  },
  {
    title: "CMS",
    icon: "❖",
    items: ["Sitecore SXA", "Sitecore CMS integration", "GraphQL content APIs"],
  },
  {
    title: "Testing & Quality",
    icon: "✧",
    items: ["Jest", "React Testing Library", "SonarQube", "Postman"],
  },
  {
    title: "DevOps & Tools",
    icon: "⬡",
    items: ["Jenkins CI/CD", "AWS", "Vercel", "Git", "AI-assisted development", "Agile / Scrum"],
  },
];

export const marquee = [
  "React.js", "Next.js", "TypeScript", "GraphQL", "Node.js", "React Native", "Redux",
  "Sitecore SXA", "Prisma", "PostgreSQL", "Jest", "Core Web Vitals", "AWS", "Vercel",
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
    body: "Reusable components, typed contracts and clean data hydration. I design for scale, accessibility and performance from day one.",
    tags: ["TypeScript", "Design systems", "GraphQL"],
  },
  {
    step: "03",
    title: "Ship & Elevate",
    body: "Measured releases through CI/CD, tuned Core Web Vitals, rigorous code reviews — and mentoring the team to raise the bar together.",
    tags: ["CI/CD", "Code reviews", "Mentoring"],
  },
];

export const certifications = [
  {
    title: "Data Structures & Algorithms",
    issuer: "GeeksforGeeks",
    image: "/images/certs/Badal_DSA_GFG.png",
    href: "https://media.geeksforgeeks.org/courses/certificates/fb257011906f1edca465dadceb724169.pdf",
  },
  {
    title: "Google Technical Support Fundamentals",
    issuer: "Google · Coursera",
    image: "/images/certs/Badal_Google_Technical_Support_Fundamentals.png",
    href: "https://www.coursera.org/account/accomplishments/verify/7KCGVSS7NLC3",
  },
  {
    title: "Full Stack Web Development",
    issuer: "Udemy",
    image: "/images/certs/Badal_Web_Development.png",
    href: "https://www.udemy.com/certificate/UC-d9cbebc1-f98b-480f-9cb4-44fe3b14312d/",
  },
  {
    title: "Java Programming",
    issuer: "upGrad",
    image: "/images/certs/Badal_Java_Programming.png",
    href: "https://www.credential.net/453af4db-8598-4427-a22e-3e4385455043",
  },
];

export const codingProfiles = [
  { name: "LeetCode", href: "https://leetcode.com/u/Badal_Sherpa", note: "Problem solving" },
  { name: "StackOverflow", href: "https://stackoverflow.com/users/13983584/badal-s", note: "600+ rep · 396K reach" },
  { name: "GitHub", href: "https://github.com/BadalSherpa", note: "Open source & experiments" },
  { name: "GeeksforGeeks", href: "https://auth.geeksforgeeks.org/user/badalsherpa7/practice/", note: "DSA practice" },
  { name: "HackerRank", href: "https://www.hackerrank.com/Badal_Sherpa", note: "Challenges" },
  { name: "CodeChef", href: "https://www.codechef.com/users/sanssangay", note: "Contests" },
];

export const education = {
  degree: "B.Tech, Computer Science & Engineering",
  school: "Lovely Professional University, Jalandhar",
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
