# Forge AI Toolkit Docs

This public Docusaurus repository documents the private [Forge AI Toolkit app](https://forgeai.aoneahsan.com). The app includes browser-based utility tools and Google Gemini features that use a user-supplied key. Check the app source before updating a feature or privacy claim.

The current docs site is [forgeai-docs.aoneahsan.com](https://forgeai-docs.aoneahsan.com/). It is published from `main` by [the GitHub Pages workflow](.github/workflows/deploy-pages.yml). An obsolete Firebase preview script has been removed; GitHub Pages is the current deployment path.

## Work locally

Use Node 18 or newer and Yarn 4:

```bash
yarn install --immutable
yarn typecheck
yarn build
yarn serve
```

The pages live in `docs/`; `sidebars.ts` and `docusaurus.config.ts` control navigation and site metadata. Before a push, inspect the exact `build/` output in a controlled browser at desktop and mobile sizes. See [DEPLOY.md](DEPLOY.md) for the Pages release check and [AGENTS.md](AGENTS.md) for source and privacy rules.
