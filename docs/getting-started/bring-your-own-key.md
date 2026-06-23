---
sidebar_position: 2
title: Bring Your Own Key (BYOK)
description: How to get a free Google Gemini API key, add it to Forge AI Toolkit, and use the AI tools. Keys are stored locally only. Honest note on OpenAI/Anthropic support.
keywords: [BYOK, bring your own key, google gemini api key, gemini free key, ai studio, forge ai toolkit ai tools, api key privacy]
last_update:
  date: 2026-06-23
  author: Ahsan Mahmood
---

# Bring Your Own Key (BYOK)

**Forge AI Toolkit's AI tools use a bring-your-own-key (BYOK) model: you create your own free Google Gemini API key, paste it into the app's Settings, and it is stored only on your device — never sent to our servers.** This page walks through getting a key, adding it, which tools use it, and the honest limits of what is supported today.

If you only want the utility tools (formatters, converters, compressors, generators), you can skip this entirely — they need no key.

## Why BYOK?

Running AI features normally costs money: every request to a large language model is billed to whoever holds the API key. A free "AI tool" website usually pays that bill itself and recovers the cost through ads, sign-up walls, data collection, or strict usage caps.

Forge AI Toolkit takes a different path. Instead of holding a key and metering you, it lets **you** hold your own key. Your requests go straight from your browser to Google's Gemini API using your key, and your usage counts against *your* free-tier allowance — not ours. The benefits:

- **Transparency.** You can see exactly what's billed (it's your own Google account).
- **Privacy.** Your key and your prompts never pass through a Forge AI Toolkit server.
- **No artificial caps.** We don't throttle you; only Google's own free-tier limits apply.

## Step 1 — Get a free Google Gemini API key

1. Go to **[Google AI Studio — Get API key](https://aistudio.google.com/app/apikey)**.
2. Sign in with any Google account.
3. Click **Create API key** (you can create it in a new or existing Google Cloud project; the default is fine).
4. Copy the key. It's a long string that starts with letters and numbers.

Google's Gemini API has a free tier that's generous for personal use. Keep your key private — treat it like a password, since anyone with it can use your quota.

## Step 2 — Add the key to Forge AI Toolkit

1. Open Forge AI Toolkit ([web](https://forgeai.aoneahsan.com) or Android).
2. Open **Settings** (usually the gear icon).
3. Find the **API key / AI** section.
4. Paste your Gemini key and save.

That's it. The key is written to your device's local storage (browser local storage on the web, secure preferences on Android). The AI tools now work.

## Step 3 — Use the AI tools

Once the key is saved, the AI-powered tools become active. When you run one, your input text is sent **directly from your device to Google's Gemini API** with your key, and the result comes back to your device. Nothing routes through a Forge AI Toolkit server.

Tools that use the key include the AI writing tools — Grammar Checker, Paraphraser, Summarizer, Content Writer, Keyword Extractor, Language Translator — and the AI business tools — Resume Matcher, Email Optimizer, Meeting Notes, Contract Analyzer, Competitor Analyzer, SEO Meta Generator, and Social Media Manager. The developer category also includes AI-assisted helpers (API Doc Generator, Bug Finder, Code Review Assistant, Test Case Generator) that use the key. See the [Writing Tools](/docs/tools/writing-tools), [Business Tools](/docs/tools/business-tools), and [Developer Tools](/docs/tools/developer-tools) pages for specifics.

Tools that **don't** use the key — every formatter, converter, compressor, resizer, encoder, and generator — keep working whether or not a key is set.

## Honest limitation: only Google Gemini is supported in-browser

This is important and we won't oversell it: **today the AI tools work with Google Gemini only.** OpenAI and Anthropic (Claude) keys are not yet usable inside Forge AI Toolkit.

The reason is technical, not a preference. Forge AI Toolkit runs entirely in your browser, and OpenAI's and Anthropic's APIs do not currently permit direct browser-to-API requests — they block cross-origin (CORS) calls from web pages, expecting requests to come from a backend server instead. Google's Gemini API does allow direct browser calls, which is why it works here without us running a server. Adding OpenAI/Anthropic would require a backend proxy, which would break the "no server in the middle" privacy model, so it isn't enabled.

Practical takeaway: **bring a Google Gemini key.** If you only have an OpenAI or Anthropic key, the AI tools won't run yet — but the dozens of utility tools still work fully.

## Privacy of your key

- The key is stored **locally on your device only** — in browser local storage on the web, or secure app preferences on Android.
- It is **never** transmitted to or stored on a Forge AI Toolkit server.
- It is sent **only** to Google's official Gemini API endpoint when you run an AI tool, over HTTPS.
- You can remove it any time by clearing it in Settings (or by clearing your browser's site data).

Because the key lives in your browser's local storage, it is tied to that browser on that device. If you sign in and use multiple devices, you may need to re-enter it per device, depending on how you've set things up.

## Troubleshooting

- **"AI tools aren't working."** Confirm a Gemini key is saved in Settings, and that it's a Google Gemini key (not OpenAI/Anthropic).
- **"It says my quota is exceeded."** That's Google's free-tier limit on your key, not a Forge AI Toolkit limit. Wait for the quota window to reset or upgrade your Google Cloud billing.
- **"My key stopped working."** Keys can be revoked or rotated in Google AI Studio. Generate a new one and paste it in.

## Where to go next

- **[Privacy & Zero-Cost](/docs/getting-started/privacy-and-zero-cost)** — the full data-handling picture.
- **[Writing Tools](/docs/tools/writing-tools)** — the AI writing tools that use your key.
- **[Business Tools](/docs/tools/business-tools)** — the AI business tools.

---

## Frequently asked questions

### Is the Google Gemini API key free?

Google offers a free tier for the Gemini API that's generous for personal use. You create the key for free at [Google AI Studio](https://aistudio.google.com/app/apikey). Heavy usage may eventually hit free-tier limits set by Google.

### Where is my API key stored?

Locally on your device only — never on a Forge AI Toolkit server. It's sent only to Google's Gemini API when you run an AI tool.

### Can I use my OpenAI or Anthropic key?

Not yet. Those providers block direct browser-to-API calls (CORS), and Forge AI Toolkit runs in your browser with no server in the middle. Only Google Gemini supports the direct in-browser calls the app needs.

### Do the utility tools need a key?

No. Formatters, converters, compressors, resizers, encoders, and generators all work with no key at all. Only the AI tools need one.

### Is it safe to paste my key into the app?

The key stays in your device's local storage and is only sent to Google's official API. As with any API key, keep it private and revoke it in Google AI Studio if you ever suspect it leaked.
