# Forge AI Toolkit — Documentation

Public documentation site for **[Forge AI Toolkit](https://forgeai.aoneahsan.com)** — a client-first AI & utility workspace with **65+ free, privacy-first tools** that run entirely in your browser.

- **Live app:** https://forgeai.aoneahsan.com
- **Android:** [Google Play](https://play.google.com/store/apps/details?id=com.aoneahsan.forgeai)
- **Docs:** https://forge-ai-docs.aoneahsan.com

Built with [Docusaurus 3](https://docusaurus.io/). Every tool in Forge AI Toolkit runs 100% on your device — files are never uploaded. AI writing tools use your **own free Google Gemini API key** (BYOK), stored locally only.

## Local development

This repo uses **yarn** (Node ≥18). Do not use npm or pnpm.

```bash
yarn install        # install dependencies
yarn start          # local dev server on http://localhost:5962
yarn build          # production build into ./build
yarn serve          # preview the production build on http://localhost:5963
yarn typecheck      # tsc --noEmit
```

## Project structure

```
docs/                  Documentation pages (intro, getting-started, tools, faq, account)
src/                   Landing page + custom CSS (violet brand, dark default)
static/                robots.txt, llms.txt, llms-full.txt, humans.txt, CNAME, images
docusaurus.config.ts   Site config (title, URL, JSON-LD, navbar, footer)
sidebars.ts            Sidebar layout
firebase.json          Firebase Hosting config (target: forge-ai-docs)
.github/workflows/     GitHub Pages deploy workflow
DEPLOY.md              Deployment runbook (Firebase + GitHub Pages)
```

## Deployment

See **[DEPLOY.md](./DEPLOY.md)**. Deployment is a manual/user step — the project builds to `build/` and can be hosted on Firebase Hosting or GitHub Pages.

## Author

Built and maintained by **[Ahsan Mahmood](https://aoneahsan.com)** — [aoneahsan@gmail.com](mailto:aoneahsan@gmail.com) · [LinkedIn](https://linkedin.com/in/aoneahsan) · [GitHub](https://github.com/aoneahsan).
