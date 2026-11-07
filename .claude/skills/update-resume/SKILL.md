---
name: update-resume
description: Replace the resume PDF on badalsherpa.github.io with a new one, sync the site's content (lib/data.ts and a few hardcoded strings) to match it, then build, commit, push and confirm the live site updated. Use whenever Badal says "update my resume", attaches/points to a new resume PDF, or asks to push resume changes to the live portfolio.
---

# Update resume on the live portfolio

The site is a Next.js 16 static export deployed to GitHub Pages. Pushing to `master`
runs `.github/workflows/deploy.yml`, which builds `./out` and publishes it to the
`gh-pages` branch → https://badalsherpa.github.io. Invoking this skill **is** the
user's go-ahead to commit and push to `master` — that is how changes go live.

## 1. Locate the new resume

- Use the path the user gave or the file they attached in chat.
- If they only said "attached" and no path is visible, look for the newest PDF in
  `C:/Users/BADAL/Downloads` (`ls -t ~/Downloads/*.pdf | head -5`) and confirm which one
  with the user before continuing.
- If they gave a `.docx`, ask them to export a PDF (the site links a PDF).
- If they gave **no file but described changes** ("add X to my resume"), the PDF can't be
  regenerated here: update the site content only and tell them the PDF still needs updating.

## 2. Replace the PDF

Always overwrite the same filename so every existing link keeps working:

```bash
cp "<new resume path>" public/Badal_Sherpa_Resume.pdf
```

Do not rename it; `profile.resume` in `lib/data.ts` points to `/Badal_Sherpa_Resume.pdf`.

## 3. Diff old vs new resume text

Extract both and compare so you only change what actually changed:

```bash
SCRATCH="<scratchpad dir>"
git show HEAD:public/Badal_Sherpa_Resume.pdf > "$SCRATCH/old.pdf"
pdftotext -layout "$SCRATCH/old.pdf" "$SCRATCH/old.txt"
pdftotext -layout public/Badal_Sherpa_Resume.pdf "$SCRATCH/new.txt"
diff "$SCRATCH/old.txt" "$SCRATCH/new.txt"
```

(`pdftotext` is available in Git Bash at `/mingw64/bin/pdftotext`. If extraction is empty,
the PDF is probably image-only — read it with the Read tool's PDF support instead.)

## 4. Sync site content to the new resume

Single source of truth is `lib/data.ts`. Map resume changes like this:

| Resume change | Where on the site |
|---|---|
| Title / headline, summary | `profile.role`, `profile.tagline`, `profile.summary`, `profile.about`, `profile.roles` |
| Location | `profile.location` |
| Years of experience, headline metrics | `stats` in `lib/data.ts` **and** hardcoded `6+ years` in `components/sections/Hero.tsx` (~line 139) |
| New/changed job, dates, promotion, bullets | `experience[]` (company, role, progression, period, current, engagements[].points, stack) |
| Current role/company | also hardcoded in `components/sections/About.tsx` (~lines 160–161) |
| Projects | `projects[]` (newest first) |
| Skills | `skillGroups[]`, and `marquee` for headline tech |
| Certifications | `certifications[]` (needs an image in `public/images/certs/` — ask the user for one if new) |
| Education | `education` |
| Title / role for SEO | `metadata` in `app/layout.tsx` (title, description, keywords, openGraph) |

Rules:
- Grep for any old value you replace (`grep -rn "<old text>" app components lib`) so no
  stale copy survives in a component.
- Keep the site's existing tone and length: site bullets are condensed versions of resume
  bullets, not copy-pasted walls of text. Match the shape of neighbouring entries.
- Never add the phone number or other private details from the resume to the site unless
  the user explicitly asks — the site shows email only.
- Don't invent facts; if the resume is ambiguous (e.g. an end date vs "Present"), ask.
- If a role ended / a new one started, update `current`, `period`, and the About card.

## 5. Build locally

```bash
npm run build
```

Fix any type or build errors before committing. Optionally `npm run lint`.
(Per `AGENTS.md`, this Next.js version differs from older ones — check
`node_modules/next/dist/docs/` before touching anything beyond content data.)

## 6. Commit and push (this deploys)

```bash
git add public/Badal_Sherpa_Resume.pdf lib/data.ts app components
git commit -m "Update resume: <one-line summary of what changed>"
git push origin master
```

Stage only the files you changed. End the commit message with the attribution line from
the session's system reminder, if one is present.

## 7. Confirm it's live

```bash
gh run list --workflow=deploy.yml --limit 1
gh run watch <run-id> --exit-status
```

Then verify the live PDF matches the new file (GitHub Pages can lag a minute or two
after the workflow finishes):

```bash
curl -sL https://badalsherpa.github.io/Badal_Sherpa_Resume.pdf -o "$SCRATCH/live.pdf"
sha1sum "$SCRATCH/live.pdf" public/Badal_Sherpa_Resume.pdf
```

If hashes match and the workflow succeeded, tell the user it's live and list what changed
on the site. If the workflow failed, show the failing step from `gh run view <id> --log-failed`
and fix it.
