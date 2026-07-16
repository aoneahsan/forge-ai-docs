# CLAUDE.md — forge-ai-docs

**PUBLIC** Docusaurus documentation site for **Forge AI Toolkit** — a client-first AI & utility workspace with 65+ free, privacy-first tools.

## Task Speed Over Docs (IRON-SOLID — BEHAVIORAL)

Finish the real task fast + correctly FIRST; docs/trackers/sync are a footnote (≤~20% of effort) — never let recording outpace the fix. HARD STOP when doc work outpaces the change → ship, then ONE line if anything. No new summary/status/completion files unless asked; edit/delete over add; delete stale docs. Full rule: `~/.claude/CLAUDE.md`.

## Identity

| Key | Value |
|---|---|
| Repo | `forge-ai-docs` (PUBLIC — GitHub Pages free hosting) |
| Type | Docusaurus 3 documentation site (classic preset + Mermaid) |
| Documented app | **Forge AI Toolkit** (private app repo — do NOT reference private code here) |
| Live app | https://forgeai.aoneahsan.com |
| Play Store | https://play.google.com/store/apps/details?id=com.aoneahsan.forgeai |
| Docs URL | https://forge-ai-docs.aoneahsan.com (Firebase Hosting target `forge-ai-docs` and/or GitHub Pages; `static/CNAME` set) |
| Package manager | yarn (NEVER npm/pnpm) · Node ≥18 |
| Author | Ahsan Mahmood ([aoneahsan@gmail.com](mailto:aoneahsan@gmail.com)) |
| Content tracker | `docs/tracking/forge-ai-docs-content-tracker.json` |
| Dev ports | start 5962 · serve 5963 |
| Build gates | `yarn typecheck` exit 0 · `yarn build` (→ `./build`) exit 0 |

## Brand

Violet/purple. Primary `#7c3aed` (Infima ramp in `src/css/custom.css`), violet→purple gradient, **dark appearance by default** (`colorMode.defaultMode: 'dark'`). Logo/favicon/social-card are violet-gradient SVGs in `static/img/`.

## CRITICAL rules for this repo

| Rule | Detail |
|---|---|
| **PUBLIC repo — NO secrets** | This repo is public. NEVER commit `.env`, service-account JSON, API keys, Firebase secrets, or anything from the private app repo. The docs describe behavior only. |
| **Honest framing** | 100% honest. Tools run client-side (files never uploaded). AI tools use the user's OWN free Google Gemini key (BYOK), stored locally only. ONLY Google Gemini works in-browser (OpenAI/Anthropic blocked by CORS) — say so plainly. Video/audio tools download ~25 MB FFmpeg.wasm engine on first use. No fabricated stats, no "best/#1/free download now" hype. |
| **Yarn only** | Never `npm install` / `pnpm add`. Only `yarn.lock` in the repo. |
| **No dev server in agent runs** | Per global rule, the agent does NOT run `yarn start`/`serve`. Verify with one-shot `yarn build` + `yarn typecheck`. |
| **Deploy = USER-ONLY** | Firebase deploy + GitHub Pages publish + DNS are user steps. See `DEPLOY.md`. The agent never runs `firebase deploy`. |
| **One commit per prompt** | Complete the whole task, then ONE commit. Auto-commit + auto-push allowed (repo under `01-code/projects/`). |
| **Cross-link** | Internal doc links use absolute `/docs/...` route paths. `onBrokenLinks: 'throw'`. |

## Layout

```
docs/                       ← all documentation pages (intro, getting-started/, tools/, faq, account-and-data)
docs/tracking/              ← content tracker JSON
src/css/custom.css          ← violet brand ramp
src/pages/index.tsx         ← landing hero (violet gradient)
static/                     ← robots.txt, llms.txt, llms-full.txt, humans.txt, CNAME, img/, .well-known/
docusaurus.config.ts        ← title/url/JSON-LD (WebSite + Organization + SoftwareApplication)/OG/navbar/footer
sidebars.ts                 ← sidebar
firebase.json + .firebaserc ← Firebase Hosting target `forge-ai-docs`
.github/workflows/deploy.yml← GitHub Pages deploy
```

## Verification commands

```bash
yarn install         # reconcile
yarn typecheck       # tsc --noEmit (exit 0)
yarn build           # docusaurus build → ./build (exit 0; emits sitemap.xml)
```

## Package Manager Hierarchy: nvm → npm (global) → yarn (local) (IRON-SOLID)

`nvm` installs/updates Node+npm; `npm` for ALL global installs (incl. yarn itself); `yarn` for ALL local work. NEVER npm/pnpm for local installs; NEVER pnpm at all. Only `yarn.lock` in the repo.

## Package Upgrades: Use `npm-check-updates`

`npx -y npm-check-updates -u && yarn install` (latest STABLE), then verify `yarn typecheck && yarn build`. Full rule in global `~/.claude/CLAUDE.md`.

## Gitignore Hygiene (IRON-SOLID)
`.gitignore` stays current with the project structure — ignore only recoverable artifacts (build/`dist`/`www`/`node_modules`/logs/caches/IDE), never lose source. Custom rules always present: `*.ignore.*`, `project-record-ignore/`. This is a **PUBLIC** repo -> secrets/`.env`/keystores are NEVER tracked.
Full rule + private/public protocol: `~/.claude/rules/project-config.md`.
Gitignore Last Verified: 2026-06-24

## Last Updated

2026-06-23


## Sub-agents & Skills — Main-Context-First (IRON-SOLID)
Default/built-in sub-agents (`general-purpose`, `Explore`, `Plan`, `claude`, `fork`, …) do NOT have
access to `/skills`, so delegating to them silently SKIPS the skills RULE #0 requires. Do all
skill-relevant work in the **MAIN context**; use a sub-agent ONLY when a **custom** agent exists in
`.claude/agents/` for that job; a default `Explore`/`Plan` agent is allowed ONLY for read-only,
no-skill search/exploration. When a relevant skill is missing, **install/enable it** rather than
proceeding skill-less. (Owner directive 2026-07-11; full text in `~/.claude/CLAUDE.md`.)

<!-- RULE:main-context-model-workflow v2026-07-16 -->
## Main-Context + Skills + Model Workflow (IRON-SOLID — CRITICAL)
1. **NO default/built-in sub-agents** (`general-purpose`, `Explore`, `Plan`, `claude`, `fork`, …) for ANY work in
   this project — they cannot invoke /skills, which RULE #0 makes mandatory. Do ALL work (planning, implementation,
   review, exploration) in the MAIN context. A sub-agent is allowed ONLY when a CUSTOM agent exists in
   `.claude/agents/` for that exact job.
2. **Skills always:** before any task, scan the available-skills list and invoke EVERY relevant skill; if a needed
   skill is missing, download/enable/install it (or use the nearest installed equivalent and say so) — never
   proceed skill-less.
3. **Model workflow:** PLAN and REVIEW on **Fable 5**; EXECUTE the approved plan on **Opus 4.8**. Plans in
   `~/.claude/plans/`; multi-phase features keep a resumable tracker (`docs/features/<slug>/00-tracker.json`),
   resumed rather than re-planned from zero.

Global records (rules, policy, audit reports) live in the `ahsan-notebook` repo at
`static/assets/claude-code/`; the `~/.claude/…` paths are symlinks into it. Full text: `~/.claude/CLAUDE.md`.
(Owner directives 2026-07-11 / 2026-07-14; fleet-rolled 2026-07-16.)
