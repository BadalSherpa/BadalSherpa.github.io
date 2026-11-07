# Resume

Drop your latest resume PDF in this folder (any filename).

- The newest PDF here is what the live site serves at
  https://badalsherpa.github.io/Badal_Sherpa_Resume.pdf — `scripts/sync-resume.mjs`
  copies it into `public/` on every `npm run dev` / `npm run build`.
- **Just deploy the PDF:** commit and push to `master`; GitHub Actions rebuilds and
  publishes the site.
- **Also update the site's text** (experience, skills, summary…): tell Claude
  "update my resume" — the `update-resume` skill diffs the new PDF against the previous
  one, updates `lib/data.ts`, and deploys.

Older PDFs can stay here or be deleted; only the newest one is used.
