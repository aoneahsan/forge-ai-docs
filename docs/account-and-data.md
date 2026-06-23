---
sidebar_position: 4
title: Account & Data
description: How accounts work in Forge AI Toolkit — Google and email sign-in, what's stored in Firestore, cross-device sync, and how to delete your account and data.
keywords: [forge ai toolkit account, sign in, google sign-in, firestore data, delete account, data deletion, privacy]
last_update:
  date: 2026-06-23
  author: Ahsan Mahmood
---

# Account & Data

**An account in Forge AI Toolkit is optional and exists only to sync your preferences across devices — it stores your sign-in identity and a small profile in Firestore, never the files you process.** This page explains the sign-in options, exactly what is stored, and how to delete your account and data.

## Do you need an account?

No. Every tool works while signed out. The only thing an account adds is **cross-device preference sync** — so the theme and settings you choose on your laptop show up on your phone too. If you only use one device or don't care about syncing, you can use the app entirely without signing in.

## Sign-in options

Forge AI Toolkit uses **Firebase Authentication** with two methods:

- **Google sign-in** — sign in with one tap using your Google account. This is the same secure Google OAuth flow used across the web; Forge AI Toolkit never sees your Google password.
- **Email & password** — register with any email address and a password. Firebase Authentication manages the credential securely.

Choose whichever you prefer. Both result in the same kind of account.

## What is stored

When you sign in, two things are stored:

1. **Authentication identity** — handled by Firebase Authentication. For Google sign-in this is your Google account identity; for email sign-in it's your email and a securely-hashed password credential (Firebase manages the hashing — Forge AI Toolkit never stores raw passwords).
2. **A user profile / preferences document** in Cloud Firestore. This holds non-sensitive settings such as your theme (dark mode, violet accent), UI preferences, and tool settings, keyed to your user ID.

What is **not** stored is just as important:

- The **contents of files you process** are never uploaded or stored — they're handled entirely in your browser (see [Privacy & Zero-Cost](/docs/getting-started/privacy-and-zero-cost)).
- Your **Google Gemini API key** is stored locally on your device, **not** in Firestore (see [Bring Your Own Key](/docs/getting-started/bring-your-own-key)).

## Cross-device sync

With an account, your preferences are written to Firestore and read back when you sign in on another device. This keeps the experience consistent — your dark/violet theme and settings travel with you. Sync is limited to preferences; it does not move files, history of processed content, or your API key.

## Deleting your account and data

You are in control of your data and can remove it at any time. Forge AI Toolkit provides a dedicated deletion flow:

> **[Delete your account & data →](https://forgeai.aoneahsan.com/delete-account)**

Deleting your account removes your authentication record and your Firestore profile/preferences document. Because no file contents were ever stored, there's nothing else to erase on the server side. Anything cached locally (such as your saved Gemini key and local preferences) can be cleared by removing the app's site data in your browser, or uninstalling the Android app.

## Legal & policy pages

For the formal details, see the live app's policy pages:

- **[Privacy Policy](https://forgeai.aoneahsan.com/privacy)** — what data is collected, used, and stored.
- **[Terms of Service](https://forgeai.aoneahsan.com/terms)** — the terms of use.
- **[Account & Data Deletion](https://forgeai.aoneahsan.com/delete-account)** — the deletion flow described above.

## Where to go next

- **[Privacy & Zero-Cost](/docs/getting-started/privacy-and-zero-cost)** — the full data-handling picture.
- **[Installation & Access](/docs/getting-started/installation)** — sign-in steps in context.
- **[FAQ](/docs/faq)** — quick answers.

---

## Frequently asked questions

### Do I need an account to use the tools?

No. Sign-in is optional and only syncs preferences across devices. All tools work signed out.

### What sign-in methods are supported?

Google sign-in and email/password, both via Firebase Authentication.

### What does my account actually store?

Your authentication identity and a small preferences profile in Firestore. Not your files, and not your Gemini API key (which stays local on your device).

### How do I delete my account and data?

Use the [delete-account page](https://forgeai.aoneahsan.com/delete-account). It removes your auth record and Firestore profile. Local data can be cleared by removing site data or uninstalling the app.
