# HangarX GenAI Creator Kit

**Build cinematic GenAI films without the slop.**

A free production system for making continuity-controlled GenAI shorts and graphic novels — packaged from the actual workflow behind **HANGAR X: The Mirror Protocol**, a 10-minute psychological techno-thriller and its 41-page graphic novel companion.

| | |
|---|---|
| 🌐 **Live site** | https://genai-kit.hangarx.ai |
| ⬇ **Download the kit** | https://genai-kit.hangarx.ai/kit |
| 📖 **Read the graphic novel** | https://genai-kit.hangarx.ai/graphic-novel |
| 🎬 **Watch the film** | https://www.youtube.com/watch?v=WcTTLH53bV0 |

---

## What this repo is

Two things in one place:

1. **The microsite** — the static landing page (`index.html`), the kit landing page (`kit.html`), and the graphic novel reader (`graphic-novel.html`). Deployed to Vercel.
2. **The kit itself** — `downloads/hangarx-genai-creator-kit-v1.1.pdf` (356-page playbook) and `downloads/hangarx-genai-creator-kit-v1.1.zip` (53 markdown source files).

If you just want the kit, skip the rest of this file and grab the [PDF](downloads/hangarx-genai-creator-kit-v1.1.pdf) or [ZIP](downloads/hangarx-genai-creator-kit-v1.1.zip) directly.

---

## What's in the kit

```
HangarX-GenAI-Creator-Kit/
├── 00_Workflow_Overview.md          ← read this first
├── 01_Core_Principles.md
├── Part_I_Story_Foundations/        (5 files) logline, theme, runtime, arc, ending
├── Part_II_Worldbuilding_Continuity/(6 files) world rules, visual+audio language, character bibles, motif system
├── Part_III_Clip_Architecture/      (5 files) 15-sec rule, three-jobs principle, 40-clip grid, escalation curves
├── Part_IV_Prompting_System/        (5 files) image / video / voice / music prompt templates
├── Part_V_Audio_Performance/        (5 files) audio as structure, motif library, room tone, VO direction
├── Part_VI_Production_Assembly/     (4 files) folder structure, QA checklists, iteration loop, release packaging
├── Part_VII_Graphic_Novel_Companion/(4 files) page flow, lettering, cross-medium continuity
├── checklists/                      (5 files) story dev, prompt QC, continuity QC, pacing, final delivery
├── examples_HangarX/                (10 files) every template filled out for the HANGAR X production
└── hangarx-genai-creator-kit-v1.1.pdf  ← polished playbook of everything above
```

Every Part contains **blank templates** paired with the **filled HangarX example** in `examples_HangarX/`. You always have a "show me what good looks like" reference.

---

## How to use the kit

### Pick your format

| You are... | Use this |
|---|---|
| Reading on a couch / tablet | The **PDF** — 356 pages, end-to-end |
| Forking it for your own project | The **ZIP** — 53 markdown files, edit in your editor |
| Searching for a specific pattern | The ZIP — grep + read just what you need |
| Onboarding a collaborator | Send them the PDF, then the ZIP when they start filling in templates |

### The seven-phase workflow

The kit is structured around seven phases, run roughly in order. Every Part of the kit slots into one of them.

| Phase | Goal | Kit Part |
|---|---|---|
| **1. Define the film** | One paragraph that is true (logline, theme, runtime, ending) | Part I |
| **2. Build the world system** | Make the world legible to a machine (rules + visual + audio language) | Part II |
| **3. Lock continuity** | Make your characters the same person in clip 1 and clip 40 | Part II |
| **4. Design clip architecture** | Plot the film as a clip grid, not a script (15-sec rule, three jobs per clip) | Part III |
| **5. Write model-specific prompts** | Translate each clip into prompts your tools can execute (image / video / voice / music) | Part IV |
| **6. Add audio structure** | Treat sound as a load-bearing wall, not decoration | Part V |
| **7. Iterate, assemble, publish** | Find the weak clips, fix them, ship | Part VI |

(The graphic novel branch — Part VII — runs in parallel, sharing the world file and character bibles from Phases 2–3.)

### Recommended first session (≈ 90 minutes)

1. **Read `00_Workflow_Overview.md`** and `01_Core_Principles.md`. ~15 min.
2. **Skim `examples_HangarX/I_story_foundations_filled.md`** to see what a finished Phase 1 looks like.
3. **Copy the blank template** `Part_I_Story_Foundations/01_logline_and_premise.md` into your own working folder.
4. **Fill it for your project.** Don't generate anything yet. If you can't write Phase 1 in plain language, you don't have a film yet — keep working on the page.
5. **Move to Phase 2.** Build the world file. Paste it into your first test prompts.

### When to loop back

If you're stuck in Phase 7 (assembly), the kit tells you which earlier phase to revisit:

| Symptom | Phase to revisit |
|---|---|
| Characters look like different people across clips | 3 — continuity |
| Scenes are beautiful but boring | 4 — clip architecture (handoffs missing) |
| Film feels disjointed even though every clip is good | 6 — audio (no through-line) |
| Can't explain what the film is about in one sentence | 1 — story foundations |
| A specific tool keeps giving slop for this beat | 5 — wrong engine for this beat |
| The world feels generic | 2 — visual + audio language too thin |

### The worked example

`examples_HangarX/` is the entire HANGAR X production with every template filled in:

- `I_story_foundations_filled.md` — the logline, theme, and runtime strategy
- `II_continuity_pack_filled.md` + `II_character_bibles_filled.md` + `II_motif_system_filled.md` — the world file Marcus, Kira, ATLAS, and ECHO are built from
- `III_clip_grid_filled.md` — the full 40-clip × 15-sec spine
- `IV_prompt_pack_filled.md` — same beat, different engines, side by side
- `V_audio_strategy_filled.md` — motif placement, room tone, the synthesis tone
- `VI_release_pack_filled.md` — the actual delivery folder structure
- `VII_graphic_novel_filled.md` — how the 41-page novel branched from the same continuity bible
- `before_after_revisions.md` — four scenes that were broken and how they got fixed

Watch the [10-minute film](https://www.youtube.com/watch?v=WcTTLH53bV0) and [read the novel](https://genai-kit.hangarx.ai/graphic-novel) alongside the filled examples — every choice in the kit is traceable to a scene you can see.

### What the kit is *not*

- **Not** model-specific. The kit is tool-agnostic; bring your own image, video, voice, and music stack. Part IV gives you prompt-translation patterns.
- **Not** a prompt-dump. Single prompts don't make films. The kit is about the system around the prompts.
- **Not** a substitute for story. Phase 1 is the longest section for a reason.

---

## Microsite (for developers)

The site is a plain static HTML + CSS + JS deployment on Vercel, with a single serverless function for the email signup.

### Project structure

```
.
├── index.html              landing page
├── kit.html                download landing + share button (post-signup)
├── graphic-novel.html      paginated reader for the 41-page novel
├── api/subscribe.js        Vercel serverless function: validates email,
│                           adds to Resend audience, sends welcome email
├── assets/                 hero, cover, panel images, /gn/ novel pages
└── downloads/              the PDF + ZIP that subscribers actually receive
```

### Required environment variables (Vercel)

| Name | Purpose |
|---|---|
| `RESEND_API_KEY` | Resend full-access API key |
| `RESEND_AUDIENCE_ID` | UUID of the audience subscribers are added to |
| `SITE_URL` | Public base URL the welcome email links to (e.g. `https://genai-kit.hangarx.ai`) |

### Local preview

It's a static site — open `index.html` in a browser, or:

```bash
npx serve .
```

The `/api/subscribe` function only runs on Vercel. To exercise it locally, run `vercel dev` after `vercel link`.

### Analytics

Google Analytics 4 (`G-3J4P2M4KTL`) is wired on every page. Three custom events fire across the funnel:

- `sign_up` — email captured on `index.html`
- `file_download` — PDF or ZIP downloaded from `kit.html` (`file_extension` distinguishes)
- `share` — Share-the-kit button used on `kit.html` (`method` = `web_share` or `clipboard`)

---

## Credits

HangarX is a creator studio building cinematic GenAI films with the system documented here.

The kit, the film, and the graphic novel are all original work. Released free. No paywall, no email gate beyond what's needed to send you the file.

If you build something with it, we'd love to see it.

---

*v1.1 · © 2026 · A HangarX production*
