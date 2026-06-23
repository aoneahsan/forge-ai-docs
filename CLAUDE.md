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

## Last Updated

2026-06-23
