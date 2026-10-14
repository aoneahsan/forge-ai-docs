# Forge AI Toolkit public docs

| Context | Value |
|---|---|
| Last optimized | 2026-10-14 |
| Next routine optimization eligible | 2026-11-13 |
| Guide bytes | 1817 B |

This public Docusaurus 3 repository `aoneahsan/forge-ai-docs` uses `main` and GitHub Pages at `https://forgeai-docs.aoneahsan.com/` (verified against `static/CNAME` and live HTTPS). The private product source is `../forge-ai-toolkit/`; the parent is an unrelated private coordination repository. The workspace URL registry and fleet record are at `../../project-live-urls.json` and `../../../docs/tracking/fleet-maintenance-tracker.json`.

## Working rules

- Use Yarn 4 locally. Never copy the private app's tracked `.env`, keys, account data or any secret into this public repository. Check actual product code and the current docs content tracker before stating feature or API claims. The browser implementation uses BYOK Google Gemini; other provider availability and client-side file-processing claims need current verification before publication.
- `.github/workflows/deploy-pages.yml` auto-builds and deploys a push to `main`. `static/CNAME` pins the live domain. Do not run old Firebase Hosting deployment commands. Build the exact site and inspect home and a docs route in controlled desktop/mobile Chrome before a push; verify Pages CI and live site after.
- Internal docs links use the configured absolute route path and must pass Docusaurus broken-link checks. Keep `docs/tracking/forge-ai-docs-content-tracker.json` and `DEPLOY.md` aligned with actual release state. User-facing copy follows the approved story process if a story Bible is added.

## Verification

```bash
yarn install --immutable
yarn typecheck
yarn build
yarn serve
```

The next routine context pass is due 2026-11-13 unless structure or a material rule changes.
