---
sidebar_position: 3
title: Privacy & Zero-Cost Model
description: How Forge AI Toolkit protects your data — files are processed in your browser and never uploaded, AI keys stay local, and Firebase stores only account info. Why it's free.
keywords: [forge ai toolkit privacy, client-side processing, no upload, zero cost, free tools, firebase data, byok privacy]
last_update:
  date: 2026-06-23
  author: Ahsan Mahmood
---

# Privacy & Zero-Cost Model

**Forge AI Toolkit is private and free by design: utility tools process your files entirely inside your browser with no upload, AI tools use your own locally-stored key, and the only data ever stored is your optional account profile.** This page explains exactly how your data is handled, what (little) is stored, and why the app costs nothing to use — including the honest caveats.

## How processing works: on your device, not a server

For the utility tools — formatters, converters, compressors, resizers, encoders, generators, PDF and image tools, and the video/audio tools — there is **no upload step**. When you pick a file:

1. The file is read into memory **in your browser** using the standard File and Canvas APIs and, for media, WebAssembly (`ffmpeg.wasm`).
2. The transformation runs locally on your device's CPU.
3. The result is handed back to you as a download — generated locally.

At no point does the file's content travel to a Forge AI Toolkit server, because there is no server-side processing for these tools. This is the single most important privacy property of the app: **your documents, photos, audio, and video stay on your machine.**

## How the AI tools handle data

The AI tools are the one place text leaves your device — and only to one destination you control. When you run an AI tool:

- Your input text is sent **directly from your browser to Google's Gemini API**, over HTTPS, using **your own** API key.
- The request does **not** pass through any Forge AI Toolkit server.
- Your API key is stored **locally on your device only** and is never uploaded to us.

So even for AI tools, Forge AI Toolkit is not in the data path between you and Google. Google's handling of the data you send is governed by Google's own API terms. For the full key setup and limits, see [Bring Your Own Key](/docs/getting-started/bring-your-own-key).

## What Firebase stores (account data only)

Forge AI Toolkit uses Firebase Authentication and Cloud Firestore on the **free tier** for one optional feature: accounts and cross-device preference sync. If you choose to sign in, the following is stored:

- **Your authentication identity** — managed by Firebase Auth (your Google sign-in identity, or your email/password credential).
- **A small user profile / preferences document** in Firestore — things like your theme choice (dark, violet accent) and tool settings.

That's it. Firebase does **not** store the contents of the files you process, because those files never leave your browser in the first place. If you never sign in, there is no profile to store. See [Account & Data](/docs/account-and-data) for the exact fields and how to delete them.

## Why it's free (and what "free" honestly means)

The zero-cost model is a direct consequence of the architecture:

- **No server compute to pay for.** Utility tools run on your device, so there's no cloud bill to recover. They're free with no usage meter.
- **Free-tier backend.** Accounts and preferences use Firebase's free tier (Authentication, Firestore), which comfortably covers normal usage.
- **You hold the AI key.** AI usage is billed to *your* Google account on *your* free Gemini tier — so we don't pay for it and don't need to charge or cap you. The only limits are the ones Google sets on your key.

Honest framing of "free": the app and its utility tools are free to use without limits we impose. The AI tools are free to *use*, but they consume your own Google Gemini free-tier quota, which Google can limit. There is no Forge AI Toolkit subscription, no paywall, and no "download now" upsell.

## Honest limits and caveats

Privacy-first and client-side doesn't mean magic. The honest caveats:

- **First-use network for media tools.** The video/audio tools run on `ffmpeg.wasm`. The first time you use one, the browser downloads the FFmpeg engine — about **25 MB** — from a CDN. After that it's cached. So those tools need a network connection on first use, even though your media itself is never uploaded.
- **AI tools need a connection.** They reach Google's API over the network, so they don't work offline.
- **Large files use your device's resources.** Since processing is local, very large videos or images are bounded by your device's memory and CPU, not by a powerful server.
- **Your browser's local storage holds your settings and key.** Clearing site data removes your saved Gemini key and local preferences.

## Quick reference

| Data | Where it's processed | Where it's stored | Uploaded to our servers? |
|---|---|---|---|
| Files (images, video, audio, PDFs, text) | Your browser | Nowhere (download only) | No |
| AI tool prompts | Sent to Google Gemini directly | Not stored by us | No |
| Gemini API key | Used in your browser | Your device (local) | No |
| Account identity | Firebase Auth | Firebase (if signed in) | Auth only |
| Preferences (theme, settings) | Your browser | Firestore (if signed in) | Profile only |

## Where to go next

- **[Bring Your Own Key](/docs/getting-started/bring-your-own-key)** — set up the AI tools.
- **[Account & Data](/docs/account-and-data)** — what's in your profile and how to delete it.
- **[FAQ](/docs/faq)** — quick answers.

---

## Frequently asked questions

### Are my files uploaded anywhere?

No. Utility tools process files entirely in your browser and offer the result as a download. There is no upload step.

### What does Firebase actually store about me?

Only your authentication identity and a small preferences profile, and only if you sign in. Not your files.

### Why is it free?

Utility tools run on your device (no server cost), the backend uses Firebase's free tier, and AI usage runs on your own free Gemini key. There's no subscription or paywall.

### Do I need to be online?

Pure utility tools work offline after the first page load. Video/audio tools need a one-time ~25 MB engine download, and AI tools need a connection to reach Google's API.
