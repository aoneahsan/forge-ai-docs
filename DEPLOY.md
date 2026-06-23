# Deploy runbook — Forge AI Toolkit Docs

This site is a static Docusaurus build. `yarn build` produces `build/` plus all discovery files (`robots.txt`, `llms.txt`, `llms-full.txt`, `humans.txt`, `CNAME`, `.well-known/security.txt`, `sitemap.xml`). You can host it on **GitHub Pages** (free, already wired) or **Firebase Hosting**. All deploy steps below are **user-only** — the agent never runs them.

Target domain: **forge-ai-docs.aoneahsan.com** (set in `static/CNAME`).

## Prerequisites

```bash
node -v          # v18+ (v20 recommended)
corepack enable  # Yarn 4 via Corepack
yarn -v          # 4.x
gh auth status   # GitHub CLI logged in (for repo + Pages)
```

## Option A — GitHub Pages (automated via Actions)

A workflow at `.github/workflows/deploy.yml` builds and deploys to GitHub Pages on every push to `main`.

One-time setup in the GitHub repo:

1. Repo **Settings → Pages → Build and deployment → Source: GitHub Actions**.
2. Repo **Settings → Pages → Custom domain:** `forge-ai-docs.aoneahsan.com` (the `static/CNAME` file is also copied into `build/` automatically).
3. Add a DNS `CNAME` record at your domain host: `forge-ai-docs` → `aoneahsan.github.io`.
4. Push to `main` — the workflow builds with yarn and publishes `build/`.

## Option B — Firebase Hosting

`firebase.json` defines a hosting **target** named `forge-ai-docs`; `.firebaserc` maps it to a Firebase Hosting **site** called `forge-ai-docs`.

One-time setup:

```bash
# 1) Pick / confirm the Firebase project. .firebaserc currently uses
#    "native-update-docs" as the default project (reused per the build spec).
#    Change it to the project you actually want to deploy under, if different:
npx -y firebase-tools@latest login
npx -y firebase-tools@latest use --add        # choose your project, alias "default"

# 2) Create the Hosting SITE (one-time) — must match the target site name:
npx -y firebase-tools@latest hosting:sites:create forge-ai-docs

# 3) Link the target to the site (one-time):
npx -y firebase-tools@latest target:apply hosting forge-ai-docs forge-ai-docs

# 4) Build + deploy:
yarn build
npx -y firebase-tools@latest deploy --only hosting:forge-ai-docs
```

Then add the custom domain `forge-ai-docs.aoneahsan.com` in the Firebase Console (Hosting → Add custom domain) and follow its DNS instructions.

## Routine deploys

- **GitHub Pages:** just `git push origin main` — the Action redeploys.
- **Firebase:** `yarn firebase:deploy` (runs `yarn build` then deploys the `forge-ai-docs` target).

## Notes

- This repo is **PUBLIC** and contains **no secrets** — keep it that way. Never commit `.env`, service-account files, or API keys.
- Pick ONE host to point DNS at (Pages or Firebase). Both can build the same `build/`.
