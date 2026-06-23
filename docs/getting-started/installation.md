---
sidebar_position: 1
title: Installation & Access
description: How to start using Forge AI Toolkit — open it in any browser, install the Android app from Google Play, and optionally create an account to sync preferences.
keywords: [forge ai toolkit install, android app, google play, web app, sign in, google sign-in]
last_update:
  date: 2026-06-23
  author: Ahsan Mahmood
---

# Installation & Access

**Getting started with Forge AI Toolkit takes no installation on the web — you open [forgeai.aoneahsan.com](https://forgeai.aoneahsan.com) in any modern browser and start using the tools immediately.** If you prefer a native app on your phone, you can install it from Google Play. An account is optional; it only exists to sync your preferences across devices.

This page covers the three ways to access the app and how to set up an account if you want one.

## Option 1: Use it on the web (no install)

The fastest path. Open **[forgeai.aoneahsan.com](https://forgeai.aoneahsan.com)** in Chrome, Edge, Firefox, or Safari on desktop or mobile. There is nothing to download — the app loads as a normal website and all tools run in the browser.

Recommended setup:

1. Open [forgeai.aoneahsan.com](https://forgeai.aoneahsan.com).
2. Browse tools by category, or search for the one you need.
3. (Optional) Bookmark it, or "Add to Home Screen" on mobile for an app-like icon.

Because the tools run client-side, the first load fetches the app once and then most utility tools work even if your connection drops. The video/audio tools fetch a one-time engine on first use, and the AI tools need a connection — see [Privacy & Zero-Cost](/docs/getting-started/privacy-and-zero-cost) for the details.

## Option 2: Install the Android app

For a native experience on Android, install from Google Play:

> **[Forge AI Toolkit on Google Play →](https://play.google.com/store/apps/details?id=com.aoneahsan.forgeai)**

The Android app is the same toolkit wrapped with Capacitor 8, so you get the same tools with a native launcher icon, full-screen experience, and offline-capable utility tools. Tap **Install**, open the app, and you are ready.

There is currently no iOS app. On iPhone or iPad you can use the web app in Safari and add it to your Home Screen.

## Option 3: Create an account (optional)

You do **not** need an account to use the tools. An account exists for one reason: to sync your preferences (such as the dark/violet theme and tool settings) across your devices. Forge AI Toolkit uses Firebase Authentication with two sign-in methods:

- **Google sign-in** — one tap with your Google account.
- **Email & password** — create an account with any email address.

To sign in:

1. Open the app (web or Android).
2. Choose **Sign in** and pick Google or email/password.
3. Your profile and preferences are saved to your account in Cloud Firestore and restored automatically on your other devices.

What's stored is limited to your authentication identity and a small preferences document. The **contents of files you process are never uploaded or stored** — see [Account & Data](/docs/account-and-data) for exactly what is kept and how to delete it.

## Setting up the AI tools (one extra step)

The utility tools work the moment you open the app. The AI tools (grammar checker, paraphraser, summarizer, content writer, and the AI business tools) need a free Google Gemini API key that you supply yourself.

This is a one-time, 2-minute setup: create a free key, paste it into Settings, and the AI tools light up. The full walkthrough is on the **[Bring Your Own Key](/docs/getting-started/bring-your-own-key)** page.

## System requirements

- A modern browser (released within roughly the last two years): Chrome, Edge, Firefox, or Safari.
- For Android: a device running a current Android version, installed from Google Play.
- For video/audio tools: enough free memory to hold your media file, plus a network connection for the first-use engine download (~25 MB).
- For AI tools: a network connection and your own free Google Gemini API key.

## Where to go next

- **[Bring Your Own Key](/docs/getting-started/bring-your-own-key)** — unlock the AI tools with a free Gemini key.
- **[Privacy & Zero-Cost](/docs/getting-started/privacy-and-zero-cost)** — how your data is handled and why it's free.
- **[Tools by category](/docs/intro)** — browse what's available.

---

## Frequently asked questions

### Do I have to install anything to use Forge AI Toolkit?

No. On the web, just open [forgeai.aoneahsan.com](https://forgeai.aoneahsan.com). Installation is only for the optional Android app.

### Is there an iOS app?

Not currently. iPhone and iPad users can use the web app in Safari and add it to the Home Screen for an app-like experience.

### Do I need to sign in?

No. Sign-in is optional and only syncs your preferences across devices. All tools work signed out.

### Is the Android app free?

Yes, it's a free download on Google Play, with no purchase required to use the tools.
