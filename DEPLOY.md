# Forge AI Toolkit docs deployment

The site is hosted on GitHub Pages at [forgeai-docs.aoneahsan.com](https://forgeai-docs.aoneahsan.com/). `static/CNAME` pins this domain. A push to `main` runs [deploy-pages.yml](.github/workflows/deploy-pages.yml), which builds the Docusaurus site and publishes `build/`.

## Release check

1. Run `yarn install --immutable`, `yarn typecheck` and `yarn build`.
2. Serve the exact `build/` output with `yarn serve`. Check the homepage and a docs route in controlled desktop and mobile browsers; inspect console errors.
3. Push the reviewed change to `main`, then verify the matching GitHub Pages workflow run succeeded.
4. Open the live homepage and changed route. If the deployment fails, use the GitHub Pages run history and a corrective commit; do not switch to the old Firebase Hosting target.

The public repository must contain no `.env`, API key, token or service-account file. The old Firebase Hosting preview command has been removed from `package.json`; GitHub Pages is the current host.
