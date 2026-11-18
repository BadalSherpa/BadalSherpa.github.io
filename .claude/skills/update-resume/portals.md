# Job portals to refresh with the new resume

Start URL is where the resume upload control lives (or the closest page to it).
Update the "Notes" column whenever a run learns something (button text, gotchas)
so the next run is faster. Add/remove rows to change which portals are updated.

| Portal | Start URL | Notes (last run 2026-11-18) |
|---|---|---|
| Naukri | https://www.naukri.com/mnjuser/profile | ✅ Hidden `file-input "Upload resume"` is on the page. Upload to it directly; it saves instantly ("Success – Resume has been successfully uploaded", "Uploaded on <date>"). |
| LinkedIn | https://www.linkedin.com/jobs/application-settings/ | ✅ Hidden `file-input "Upload resume"`. Upload adds it to the top of the saved-resumes list ("Uploaded on <date>"). Old resumes stay. There's no "default" toggle; the newest one is picked first in Easy Apply. |
| Indeed | https://profile.indeed.com/ | ❌ Doesn't work via automation. "⋯ → Replace file → Replace resume" opens a native file picker; the file input it creates gets the file (change fires) but Indeed never uploads it. **Badal replaces it manually.** Don't retry unless the flow changes. |
| Hirist | https://www.hirist.tech/registration/addPersonalDetails | ✅ Reached via avatar (user-icon) menu from /myprofile. `file-input "Upload new resume"` under "Attach Resume*". Saves instantly (renamed to badal-sherpa.pdf, shows "Uploaded On: <date>" and size). No need to click Save & Next. |
| foundit | https://www.foundit.in/seeker/profile | ✅ Hidden `input[name=resume]` in the Resume card. Saves instantly; "Profile last updated on" changes to today. |
| Instahyre | https://www.instahyre.com/candidate/profile/ | ✅ `#resume-input` (label "Upload a different file"). Saves instantly; Resume card shows "Last updated on <date>". The file is renamed Badal_Sherpa.pdf. |
| Wellfound | https://wellfound.com/profile/edit/resume | ✅ Resume / CV tab. Hidden file input under "Upload new file". Saves instantly ("Your resume has been updated!"). |
