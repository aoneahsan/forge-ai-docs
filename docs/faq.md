---
sidebar_position: 5
title: FAQ
description: Frequently asked questions about Forge AI Toolkit — is it free, does it see your files, do you need an API key, which AI provider, offline use, mobile app, and accounts.
keywords: [forge ai toolkit faq, free, privacy, api key, gemini, offline, mobile app, account]
last_update:
  date: 2026-06-23
  author: Ahsan Mahmood
---

# Frequently Asked Questions

**This page answers the most common questions about Forge AI Toolkit — a free, client-first app with 58+ privacy-first tools with browser-based tools, where AI tools use your own free Google Gemini key.** For deeper detail, follow the links to the dedicated pages.

## Is Forge AI Toolkit free?

Yes. The utility tools (formatters, converters, compressors, generators, and so on) run on your own device, so there is no server cost and no usage meter — they're free to use without limits we impose. The AI tools are also free to use, but they run on *your* Google Gemini API key, which has its own free-tier limits set by Google. There is no subscription, paywall, or upsell. See [Privacy & Zero-Cost](/docs/getting-started/privacy-and-zero-cost).

## Do you see or store my files?

No. Utility tools read your file into memory **in your browser**, process it locally, and hand back the result as a download — there is no upload step, so your files never reach a server. The only data ever stored is your optional account profile (theme and preferences) if you sign in. See [Account & Data](/docs/account-and-data).

## Do I need an API key?

Only for the AI tools. The dozens of utility tools work with no key at all. The AI tools (grammar checker, paraphraser, summarizer, content writer, and the AI business and developer helpers) need a free Google Gemini API key that you supply. Setup takes about two minutes — see [Bring Your Own Key](/docs/getting-started/bring-your-own-key).

## Which AI provider does it use? Can I use OpenAI or Anthropic?

It uses **Google Gemini**, called directly from your browser with your own key. **OpenAI and Anthropic are not supported in-browser today.** The honest reason: those providers block direct browser-to-API requests (CORS), and Forge AI Toolkit runs in your browser with no server in the middle. Google's Gemini API allows the direct calls the app needs, so Gemini is what works. If you only have an OpenAI/Anthropic key, the AI tools won't run yet — but every utility tool still works.

## Where is my API key stored?

Locally on your device only — in browser local storage on the web, or secure app preferences on Android. It is never sent to a Forge AI Toolkit server; it's only sent to Google's official Gemini API when you run an AI tool. See [Bring Your Own Key](/docs/getting-started/bring-your-own-key).

## Does it work offline?

Pure utility tools work offline once the app has loaded. Two exceptions: the **video/audio tools** download a one-time ~25 MB engine (`ffmpeg.wasm`) on first use, and the **AI tools** need a connection to reach Google's API. Your media itself is never uploaded even by the video/audio tools.

## Is there a mobile app?

Yes — an Android app on [Google Play](https://play.google.com/store/apps/details?id=com.aoneahsan.forgeai). There is no iOS app yet; iPhone/iPad users can use the web app in Safari and add it to the Home Screen. See [Installation & Access](/docs/getting-started/installation).

## Do I need an account?

No. All tools work signed out. An account (Google or email sign-in) is optional and only syncs your preferences across devices. See [Account & Data](/docs/account-and-data).

## How many tools are there, and what kinds?

58+ tools across Code & Developer, Text & Writing, Image, Video/Audio, Document, Design & Creative, Data, and Business categories. Browse them on the category pages: [Developer](/docs/tools/developer-tools), [Writing](/docs/tools/writing-tools), [Image](/docs/tools/image-tools), [Video & Audio](/docs/tools/video-audio-tools), [Document](/docs/tools/document-tools), [Design & Creative](/docs/tools/design-creative-tools), [Business](/docs/tools/business-tools).

## What is it built with?

React 19, TypeScript, Vite, and Capacitor 8 (web + Android), with Firebase Authentication and Firestore on the free tier for optional accounts. The UI uses Radix UI Themes with a violet accent and dark-by-default appearance.

## Who makes it?

Forge AI Toolkit is built and maintained by [Ahsan Mahmood](https://aoneahsan.com), a full-stack engineer. Reach out at [aoneahsan@gmail.com](mailto:aoneahsan@gmail.com).

## How do I delete my data?

Use the [delete-account page](https://forgeai.aoneahsan.com/delete-account). It removes your auth record and Firestore profile. Local data (saved key, preferences) can be cleared by removing site data or uninstalling the app.

---

Still have a question? Email [aoneahsan@gmail.com](mailto:aoneahsan@gmail.com) or open the app at [forgeai.aoneahsan.com](https://forgeai.aoneahsan.com).
