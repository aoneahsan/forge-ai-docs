# AGENTS.md — forge-ai-docs

Mirror of `CLAUDE.md` for non-Claude AI agents. See `CLAUDE.md` for the full canonical version. Both files MUST be kept in sync.

## Task Speed Over Docs (IRON-SOLID — BEHAVIORAL)

Finish the real task fast + correctly FIRST; docs/trackers/sync are a footnote (≤~20% of effort) — never let recording outpace the fix. HARD STOP when doc work outpaces the change → ship, then ONE line if anything. No new summary/status/completion files unless asked; edit/delete over add; delete stale docs. Full rule: `~/.claude/CLAUDE.md`.

## TL;DR

- **PUBLIC** Docusaurus 3 site documenting **Forge AI Toolkit** (a client-first AI & utility workspace with 65+ free, privacy-first tools).
- Live app: https://forgeai.aoneahsan.com · Play Store: https://play.google.com/store/apps/details?id=com.aoneahsan.forgeai
- Docs URL: https://forge-ai-docs.aoneahsan.com (Firebase Hosting target `forge-ai-docs` and/or GitHub Pages; `static/CNAME` set).
- yarn only · Node ≥18 · build → `./build`. Dev ports: start 5962 · serve 5963.
- Brand: violet `#7c3aed`, violet→purple gradient, dark appearance by default.
- Content tracker: `docs/tracking/forge-ai-docs-content-tracker.json`.
- ONE commit per prompt; auto-commit + auto-push allowed (repo under `01-code/projects/`).

## Hard checks before editing

1. **PUBLIC repo — NEVER commit secrets** (`.env`, service-account, API keys, Firebase secrets, anything from the private app repo). Docs describe behavior only.
2. **Honest framing**: tools run client-side (files never uploaded); AI tools use the user's OWN free Google Gemini key (BYOK), stored locally only; ONLY Gemini works in-browser (OpenAI/Anthropic blocked by CORS — say so); video/audio tools download ~25 MB FFmpeg.wasm on first use. No fabricated stats, no hype words.
3. **Deploy = USER-ONLY**: never run `firebase deploy` or publish to Pages yourself — see `DEPLOY.md`.
4. **Verify** with one-shot `yarn build` + `yarn typecheck` (NEVER `yarn start`/`serve`).
5. Internal doc links use absolute `/docs/...` route paths (`onBrokenLinks: 'throw'`).

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
