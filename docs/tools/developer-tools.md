---
sidebar_position: 1
title: Developer Tools
description: Forge AI Toolkit's developer tools — JSON, SQL & CSS formatters, Regex Tester, Diff Checker, Base64, Hash, Code Minifier, plus AI code helpers. All run in your browser.
keywords: [json formatter, sql formatter, css formatter, regex tester, diff checker, base64 encoder, hash generator, code minifier, ai code review, developer tools]
last_update:
  date: 2026-06-23
  author: Ahsan Mahmood
---

# Developer Tools

**Forge AI Toolkit's developer tools are a set of around 12 client-side utilities for everyday coding tasks — plus a handful of AI-powered helpers that send your code directly to Google Gemini using your own API key.** All tools open in your browser at [forgeai.aoneahsan.com](https://forgeai.aoneahsan.com); no file is ever uploaded to a Forge server. The pure client-side tools work entirely offline once the page has loaded, while the AI helpers require an active internet connection and a free [Google Gemini API key](/docs/getting-started/bring-your-own-key) that you supply and that stays stored locally on your device.

See the [privacy and zero-cost overview](/docs/getting-started/privacy-and-zero-cost) for more on how Forge handles (or rather, does not handle) your data.

---

## Tools in this category

### Pure client-side tools — no API key required

These tools run entirely inside your browser. Your code, text, or input is never sent anywhere.

**JSON Formatter**
Paste raw or minified JSON and the tool pretty-prints it with configurable indentation. It also validates the input and highlights the line where a syntax error occurs, which is useful when debugging an API response that refuses to parse.

**SQL Formatter**
Formats SQL queries into a readable, consistently indented layout. Useful before committing a query to version control or sharing it with a teammate — no database connection is required and no query is sent to any server.

**CSS Formatter**
Takes compressed or hand-written CSS and reformats it with consistent spacing and property ordering. Works on plain CSS and on CSS-like syntax such as SCSS snippets, though full pre-processor support is not guaranteed.

**Regex Tester**
Lets you write a regular expression and test it against one or more sample strings directly in the browser. Matches are highlighted in real time, and you can toggle flags (global, case-insensitive, multiline) without leaving the page.

**Diff Checker**
Accepts two blocks of text — code, config files, prose — and shows a side-by-side or inline diff of what changed between them. Useful for comparing two versions of a config file or spotting what a colleague's patch actually modifies.

**Base64 Encoder / Decoder**
Converts plain text or binary-safe strings to Base64 and back. Handy when constructing Authorization headers, working with data URIs, or debugging encoded payloads — all processing happens in JavaScript in your tab.

**Hash Generator**
Produces cryptographic hash values (MD5, SHA-1, SHA-256, SHA-512, and others depending on build) for any text you enter. This is useful for verifying file integrity values or generating test checksums; it is not a substitute for server-side hashing of sensitive data.

**Code Minifier**
Strips whitespace, comments, and other non-essential characters from JavaScript or CSS to produce a smaller output. Intended for quick manual minification or for learning what a minifier does — for production builds, your bundler's minification is more appropriate.

---

### AI-powered tools — Google Gemini API key required

These tools send your input directly from your browser to the Google Gemini API using the API key you store locally. No key is ever saved on a Forge server. See [Bring Your Own Key](/docs/getting-started/bring-your-own-key) for setup instructions.

> **Note on AI provider support:** Only Google Gemini is currently supported for in-browser AI features. OpenAI and Anthropic APIs do not allow direct browser-to-API calls from third-party origins (CORS restrictions), so they cannot be used here without a backend proxy — which Forge intentionally does not operate.

**API Documentation Generator**
Accepts a function, class, or module and asks Gemini to produce documentation in a format such as JSDoc, docstring, or plain markdown. The quality of the output depends on how well-structured the input code is; always review and edit the result before committing it.

**Bug Finder**
Sends a code snippet to Gemini with a prompt asking it to identify potential bugs, off-by-one errors, null reference risks, or logic issues. This is a review aid — it does not execute your code and cannot catch runtime issues that depend on live data.

**Code Review Assistant**
Asks Gemini to review a snippet for readability, maintainability, and common best-practice violations. Useful as a first-pass review before opening a pull request, especially when working alone.

**Test Case Generator**
Takes a function or a short description of behavior and asks Gemini to suggest unit test cases, including edge cases and expected outputs. The generated cases are starting points; they still need to be adapted to your test framework and actual data shapes.

---

## How it works

**Client-side tools** read your input through the browser's DOM, process it entirely in JavaScript running in your tab, and render the result back to the page. There is no network request; the data never leaves your machine.

**AI-powered tools** work differently: when you submit your code, the tool constructs a prompt in your browser and makes a direct HTTPS call to the Google Gemini API using the API key you entered. The key is read from your browser's local storage for that request and is never forwarded to any Forge server. The response comes back from Google and is displayed in the tool. Because the request goes to Google's infrastructure, Google's own [API usage policies](https://ai.google.dev/gemini-api/terms) apply to the content you send.

---

## Use cases

- **Cleaning up an API response.** Copy a minified JSON payload from a network inspector, paste it into the JSON Formatter, and get a readable, indented view in seconds — without switching to an external website.
- **Validating a regex before shipping.** Write a validation pattern in the Regex Tester, paste in several sample values, and confirm match behavior across edge cases before wiring the pattern into your codebase.
- **Diffing two config files.** Paste the current and proposed versions of a configuration file into the Diff Checker to see exactly which lines changed, without needing a local `diff` command or a Git working tree.
- **Generating a first-pass docblock.** Paste a utility function into the API Documentation Generator, let Gemini draft a JSDoc block, then edit it to match your project's conventions — saving the boilerplate typing.
- **Getting a second opinion on a tricky block.** Drop a function you are unsure about into the Bug Finder or Code Review Assistant before code review, so you can address the obvious issues before a teammate spends time on them.

---

## Frequently asked questions

**Do these tools upload my code to Forge's servers?**
No. The client-side tools process everything locally in your browser. The AI tools send your input directly to Google's Gemini API — not to any Forge server. See [Privacy and Zero Cost](/docs/getting-started/privacy-and-zero-cost).

**Do I need an API key to use the developer tools?**
Only for the four AI-powered tools (API Documentation Generator, Bug Finder, Code Review Assistant, Test Case Generator). The other eight tools — formatters, Regex Tester, Diff Checker, Base64, Hash Generator, Code Minifier — work without any key. See [Bring Your Own Key](/docs/getting-started/bring-your-own-key).

**Which AI provider is supported?**
Google Gemini only. OpenAI and Anthropic do not permit direct browser-to-API requests from third-party web apps due to CORS policy, so those providers cannot be used without a server-side proxy. Forge does not run a proxy.

**Does the Gemini API key cost anything?**
Google offers a free tier for the Gemini API. At the time of writing, the free tier allows a meaningful number of requests per day for personal use — check [Google's current pricing](https://ai.google.dev/pricing) for the latest limits, as they can change. Forge itself charges nothing.

**Do the tools work offline?**
The client-side tools work offline once the Forge AI Toolkit page has been loaded and cached by your browser. The AI tools require an active internet connection because they call the Gemini API.

**Is my code stored anywhere after I close the tool?**
No. Input is held in the tool's in-page state for the current session. It is not persisted to local storage, a database, or any remote system. Closing the tab discards everything.

---

## Related pages

- [Introduction to Forge AI Toolkit](/docs/intro)
- [Bring Your Own Key — Gemini API setup](/docs/getting-started/bring-your-own-key)
- [Privacy and Zero Cost](/docs/getting-started/privacy-and-zero-cost)
- [Writing Tools](/docs/tools/writing-tools)
- [Business Tools](/docs/tools/business-tools)
- [FAQ](/docs/faq)

---

<div className="forge-author-card">
<strong>About the author</strong>

Forge AI Toolkit is built and maintained by <a href="https://aoneahsan.com">Ahsan Mahmood</a>. Reach me at <a href="mailto:aoneahsan@gmail.com">aoneahsan@gmail.com</a> · <a href="https://linkedin.com/in/aoneahsan">LinkedIn</a> · <a href="https://github.com/aoneahsan">GitHub</a>.
</div>
