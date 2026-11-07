// Copies the latest PDF in resume/ to public/Badal_Sherpa_Resume.pdf so the
// site's "Resume" links always serve the newest upload. Runs before dev/build.
//
// "Latest" = newest git commit time for committed, unmodified files; for new or
// locally modified files it's the file's modified time (so a freshly dropped PDF wins).
import { execFileSync } from "node:child_process";
import { copyFileSync, readdirSync, statSync } from "node:fs";
import { join } from "node:path";

const SRC_DIR = "resume";
const DEST = join("public", "Badal_Sherpa_Resume.pdf");

function git(args) {
  try {
    return execFileSync("git", args, { encoding: "utf8", stdio: ["ignore", "pipe", "ignore"] }).trim();
  } catch {
    return "";
  }
}

const pdfs = readdirSync(SRC_DIR).filter((f) => f.toLowerCase().endsWith(".pdf"));
if (pdfs.length === 0) {
  console.error(`sync-resume: no PDF found in ${SRC_DIR}/ — add your resume there.`);
  process.exit(1);
}

const scored = pdfs.map((name) => {
  const path = join(SRC_DIR, name);
  const dirty = git(["status", "--porcelain", "--", path]) !== "";
  const committed = Number(git(["log", "-1", "--format=%ct", "--", path])) * 1000;
  const time = !dirty && committed ? committed : statSync(path).mtimeMs;
  return { name, path, time };
});
scored.sort((a, b) => b.time - a.time);

const latest = scored[0];
copyFileSync(latest.path, DEST);
console.log(`sync-resume: ${latest.path} -> ${DEST}`);
