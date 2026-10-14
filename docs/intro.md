---
sidebar_position: 1
title: What is Forge AI Toolkit?
description: Forge AI Toolkit is a free, client-first web and Android app with 58+ privacy-first tools with local utility processing. AI tools use your own free Google Gemini key (BYOK).
keywords: [forge ai toolkit, free online tools, client-side tools, privacy-first tools, BYOK, google gemini, browser tools, capacitor app]
last_update:
  date: 2026-06-23
  author: Ahsan Mahmood
---

# What is Forge AI Toolkit?

**Forge AI Toolkit is a free, client-first web and Android app that bundles 58+ utility and AI tools into a single privacy-first workspace, with many utility tools running inside your browser. Account features use Firebase and AI requests go to Google Gemini.** When you compress an image, trim a video, format JSON, or generate a QR code, the work happens on your device — your files are never uploaded anywhere. The AI-powered writing tools use a bring-your-own-key model: you paste your own free Google Gemini API key, and it stays on your device.

You can use it right now in any browser at **[forgeai.aoneahsan.com](https://forgeai.aoneahsan.com)**, or install the Android app from **[Google Play](https://play.google.com/store/apps/details?id=com.aoneahsan.forgeai)**. It is built and maintained by [Ahsan Mahmood](https://aoneahsan.com).

## The core idea: your device does the work

Most "online tools" upload your file to a server, process it there, and send the result back. That means your data leaves your control, you wait on a network round-trip, and the service owner pays for compute (which usually turns into ads, sign-up walls, or paid limits).

Forge AI Toolkit flips that model. It uses modern browser capabilities — WebAssembly, the Canvas and File APIs, Web Workers, and `ffmpeg.wasm` — to do the processing locally. The practical results:

- **Privacy by default.** For utility tools there is no upload step at all. Your PDF, photo, spreadsheet, or video is read into memory in your browser, transformed, and offered back as a download — without ever touching a server.
- **Speed.** No upload, no queue, no download of the result from a server. The only limit is your own device.
- **Zero cost.** Because there is no server-side compute to pay for, the utility tools are genuinely free, with no usage meter.

## Two kinds of tools

It helps to split the catalogue into two groups, because they behave differently:

1. **Utility tools** (the majority). Formatters, converters, compressors, resizers, encoders, and generators. These are pure local computation — no account, no API key, and most of them keep working offline once the page has loaded.

2. **AI tools.** Grammar checking, paraphrasing, summarizing, content writing, resume matching, and similar. These send the text you give them to a large language model, so they need an API key. Forge AI Toolkit uses a **bring-your-own-key (BYOK)** model for these — see below.

## Bring your own key (BYOK), honestly framed

The AI tools call **Google Gemini** directly from your browser using a key you supply. You create a free key at [Google AI Studio](https://aistudio.google.com/app/apikey), paste it into Settings, and it is stored locally on your device only — it is never sent to Forge AI Toolkit's servers.

One honest limitation deserves to be stated up front: **only Google Gemini works directly in the browser today.** OpenAI and Anthropic keys are not yet usable here, because those providers do not currently allow direct browser-to-API requests (their endpoints block cross-origin browser calls). If you only have an OpenAI or Anthropic key, the AI tools will not work until Gemini support is set up — but every utility tool still works without any key. Full details are on the [Bring Your Own Key](/docs/getting-started/bring-your-own-key) page.

## The 58+ tools at a glance

The tools are grouped into categories. Each category has its own page with the full list, how each tool works, and use cases:

| Category | What's inside | Page |
|---|---|---|
| **Code & Developer** | JSON/SQL/CSS formatters, Regex Tester, Diff Checker, Base64, Hash, Minifier, plus AI code helpers | [Developer Tools](/docs/tools/developer-tools) |
| **Text & Writing** | Grammar Checker, Paraphraser, Summarizer, Content Writer, Case Converter, Counter, Translator | [Writing Tools](/docs/tools/writing-tools) |
| **Image** | Compressor, Converter, Resizer, Optimizer, Background Remover, Watermark, OCR Scanner | [Image Tools](/docs/tools/image-tools) |
| **Video & Audio** | Trimmer, Compressor, Audio Converter/Extractor, GIF Maker, Subtitle Editor (FFmpeg.wasm) | [Video & Audio Tools](/docs/tools/video-audio-tools) |
| **Document** | PDF Splitter, PDF→Images, Image→PDF, Word→PDF, Spreadsheet & Markdown converters | [Document Tools](/docs/tools/document-tools) |
| **Design & Creative** | Color Palette/Picker, Favicon Generator, QR Code, Password Generator | [Design & Creative Tools](/docs/tools/design-creative-tools) |
| **Business** | Resume Matcher, Email Optimizer, Meeting Notes, Contract & Competitor Analyzer, SEO Meta | [Business Tools](/docs/tools/business-tools) |

## What it is built with

Forge AI Toolkit is a React 19 + TypeScript app bundled with Vite and wrapped with Capacitor 8 so the same code runs as a website and as a native Android app. It uses Firebase Authentication and Cloud Firestore — strictly on the free tier — for optional accounts and cross-device preference sync. The interface uses Radix UI Themes with a violet accent and a dark-by-default appearance.

## What it is not

Honesty matters more than marketing, so here are the explicit non-claims:

- **Not a cloud service that stores your files.** Utility tools never upload your content; there is nothing to store.
- **Not a multi-provider AI hub (yet).** Today the AI tools work with Google Gemini only, for the browser/CORS reason above.
- **Not unlimited for AI usage.** AI tool usage is bounded by *your* Google Gemini key's own free-tier limits, not by us.
- **Not fully offline for every tool.** Video/audio tools download the ~25 MB FFmpeg engine on first use, and AI tools obviously need a connection. Pure utility tools work offline after the first load.

## Where to go next

- New here? Start with **[Installation & Access](/docs/getting-started/installation)**.
- Want the AI tools? Read **[Bring Your Own Key](/docs/getting-started/bring-your-own-key)**.
- Care about privacy and cost? See **[Privacy & Zero-Cost](/docs/getting-started/privacy-and-zero-cost)**.
- Just have a question? Jump to the **[FAQ](/docs/faq)**.

---

## Frequently asked questions

### Is Forge AI Toolkit really free?

Yes. The utility tools run on your device, so there is no server cost and no usage meter. The AI tools are free to *use*, but they run on your own Google Gemini key, which has its own free-tier limits set by Google.

### Do you see or store my files?

No. Utility tools process your files entirely in your browser — there is no upload. The only data Forge AI Toolkit stores is your account and a small preferences profile in Firestore, and only if you choose to sign in.

### Do I need an account to use it?

No. Most tools work without signing in. An account is optional and exists to sync your preferences (like theme) across devices.

### Which AI provider does it use?

Google Gemini, called directly from your browser with your own key. OpenAI and Anthropic are not supported client-side yet because they block direct browser API calls.

### Does it work offline?

Pure utility tools work offline once the page has loaded. Video/audio tools need a one-time ~25 MB engine download, and AI tools need a network connection to reach Google's API.

### Is there a mobile app?

Yes — an Android app on [Google Play](https://play.google.com/store/apps/details?id=com.aoneahsan.forgeai). The web app also works in mobile browsers.

---

<div className="forge-author-card">
<strong>About the author</strong>

Forge AI Toolkit and this documentation are built and maintained by <a href="https://aoneahsan.com">Ahsan Mahmood</a> — a full-stack engineer specializing in React, Capacitor, Firebase, and Laravel, and the author of <a href="https://www.npmjs.com/~aoneahsan">many open-source npm packages</a>.

Reach me at <a href="mailto:aoneahsan@gmail.com">aoneahsan@gmail.com</a> · <a href="https://linkedin.com/in/aoneahsan">LinkedIn</a> · <a href="https://github.com/aoneahsan">GitHub</a>.
</div>
