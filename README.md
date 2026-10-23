# Badal Sherpa — Portfolio

Personal portfolio of **Badal Sherpa**, Lead Software Engineer (React.js · Next.js · TypeScript · Node.js).

[![Portfolio Website](https://img.shields.io/badge/Portfolio-badalsherpa.github.io-f07a4c)](https://badalsherpa.github.io/)

## Stack

- **Next.js 16** (App Router, static export) + **TypeScript**
- **Tailwind CSS v4** for styling
- **GSAP + ScrollTrigger** for scroll-driven animation (pinned horizontal work reel, scrubbed text, stacking cards)
- **Framer Motion** for UI micro-interactions (draggable/flippable dev pass, accordion, tilt cards, menu)
- **Lenis** for smooth scrolling

## Editing content

All content lives in [`lib/data.ts`](lib/data.ts) — profile, experience, projects, skills, certifications and links.
Update that file and the whole site follows. Static assets (photo, certificates, resume PDF) are in [`public/`](public/).

## Development

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # static export to ./out
```

## Deployment

- **Automatic:** every push to `master` builds the site and publishes `./out` to the `gh-pages` branch via GitHub Actions.
- **Manual:** `npm run deploy` builds and publishes with the `gh-pages` package.

GitHub Pages should be set to serve from the `gh-pages` branch (Settings → Pages).

## Coding profiles

[LeetCode](https://leetcode.com/u/Badal_Sherpa) · [StackOverflow](https://stackoverflow.com/users/13983584/badal-s) · [GeeksforGeeks](https://auth.geeksforgeeks.org/user/badalsherpa7/practice/) · [HackerRank](https://www.hackerrank.com/Badal_Sherpa) · [CodeChef](https://www.codechef.com/users/sanssangay)
