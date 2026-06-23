---
sidebar_position: 2
title: Text & Writing Tools
description: Forge AI Toolkit's writing tools — AI Grammar Checker, Paraphraser, Summarizer, Content Writer, Translator, plus Case Converter, Word Counter & Lorem Ipsum. Private by design.
keywords: [grammar checker, paraphraser, summarizer, content writer, keyword extractor, case converter, word counter, language translator, lorem ipsum, ai writing tools]
last_update:
  date: 2026-06-23
  author: Ahsan Mahmood
---

# Text & Writing Tools

**Forge AI Toolkit's writing tools are a collection of browser-based utilities that help you write, edit, and transform text — without uploading your content to any external server.** The category covers two distinct groups: AI-powered tools that reason over your text using Google Gemini, and pure client-side tools that run entirely offline. Whether you are polishing a draft, summarizing a long article, or converting a string to title case, everything happens in your browser.

Visit the live app at [forgeai.aoneahsan.com](https://forgeai.aoneahsan.com) or read the [introduction](/docs/intro) for a broader overview.

---

## Tools in this category

### AI-powered tools (require a Google Gemini API key)

These tools send your text directly to the [Google Gemini API](https://ai.google.dev) using the key you provide. Your key is stored in your browser only — Forge AI's servers are never involved in the request. See [Bring Your Own Key](/docs/getting-started/bring-your-own-key) for setup instructions.

**Grammar Checker**
Analyzes your text for grammatical errors, punctuation issues, and awkward phrasing, then returns a corrected version with brief explanations. It is useful for polishing emails, reports, or any writing where correctness matters. The original text is never stored beyond the duration of your browser session.

**Paraphraser**
Rewrites a paragraph or passage in different words while preserving the original meaning. You can use it to reduce repetition in your writing, adapt content for a different audience, or simply explore alternative ways to express an idea.

**Summarizer**
Condenses a longer piece of text into a concise summary. Paste in an article, a meeting transcript, or a long document and receive a shorter version that captures the key points. The length and focus of the summary are guided by the prompt you send to Gemini.

**Content Writer**
Generates draft content based on a topic, outline, or set of instructions you provide. It is a starting point for blog posts, product descriptions, or any structured writing — not a finished product, but a useful first draft to build on.

**Keyword Extractor**
Identifies the main topics and significant terms in a piece of text. This is helpful when you want to understand what a document is about, prepare tags for a piece of content, or assess topical coverage.

**Language Translator**
Translates text between languages using Google Gemini's multilingual capabilities. Specify the target language in your prompt. Translation quality depends on the model's training and will vary by language pair; always review translations before using them in a professional context.

---

### Pure client-side tools (no API key, work offline)

These tools perform their work entirely in your browser using JavaScript. No text is sent anywhere, and they function without an internet connection once the page has loaded.

**Case Converter**
Converts text between common case formats: UPPER CASE, lower case, Title Case, Sentence case, and camelCase. Paste your text, choose the target format, and copy the result.

**Word / Character Counter**
Counts words, characters (with and without spaces), sentences, and paragraphs in real time as you type or paste text. It is handy when you are writing to a specific length limit, such as a social-media post, a bio field, or a submission form with a character cap.

**Lorem Ipsum Generator**
Generates placeholder text in configurable amounts — by words, sentences, or paragraphs. Use it to fill design mockups, test layout spacing, or populate form fields during development.

---

## How it works

**Client-side tools** (Case Converter, Word Counter, Lorem Ipsum) execute entirely within your browser. Nothing leaves your device. They work on any modern browser and will continue to work if you lose your internet connection after the page loads.

**AI-powered tools** work as follows:

1. You enter your text in the tool's input field.
2. Forge AI constructs a prompt and sends it directly from your browser to the [Google Gemini API](https://ai.google.dev) using your API key.
3. Gemini processes the request and returns the result to your browser.
4. Forge AI displays the result. Nothing is stored on our servers.

The key point: your text and your API key travel directly between your browser and Google's servers. Forge AI's own infrastructure does not see either. Read more on the [Privacy and Zero Cost](/docs/getting-started/privacy-and-zero-cost) page.

:::note Only Google Gemini is supported
Forge AI currently supports **only Google Gemini** for its in-browser AI tools. OpenAI (ChatGPT) and Anthropic (Claude) block browser-to-API requests due to CORS policy, so those providers cannot be used directly from a web app without a backend proxy — which would require your text to pass through our servers. We have chosen not to build that proxy in order to keep the tool genuinely private. If that changes in the future, we will document it clearly.
:::

---

## Use cases

**Proofreading a professional email.** Paste your draft into the Grammar Checker before sending. Gemini highlights issues and suggests corrections, giving you a second pass without sharing the email with a third-party service you haven't vetted.

**Summarizing a long article.** Paste the full text of a research paper or news article into the Summarizer. Receive a concise version you can read in under a minute, useful for triage when you have many articles to review.

**Rewording a paragraph for clarity.** Use the Paraphraser when a sentence is technically correct but harder to read than it should be. The reworded output gives you options to choose from or combine with your original.

**Counting words for a submission limit.** Many journals, grant applications, and platforms enforce strict word or character counts. Paste your text into the Word Counter to check your current count and plan cuts accordingly — no sign-in required.

**Generating placeholder copy for a design mockup.** Use the Lorem Ipsum Generator to fill text areas in a wireframe or prototype. Choose the amount you need, copy it, and paste it into your design tool.

---

## Frequently asked questions

**Do I need an API key to use these tools?**
Only for the AI-powered tools (Grammar Checker, Paraphraser, Summarizer, Content Writer, Keyword Extractor, Language Translator). The pure client-side tools — Case Converter, Word Counter, and Lorem Ipsum Generator — require no key and work offline. See [Bring Your Own Key](/docs/getting-started/bring-your-own-key) for instructions on obtaining a free Google Gemini API key.

**Which tools use AI and which do not?**
The six tools listed under "AI-powered tools" above send text to Google Gemini. The three listed under "Pure client-side tools" run entirely in your browser with no external requests.

**Is my text uploaded to Forge AI's servers?**
No. For the AI tools, your text goes directly from your browser to the Google Gemini API. For the client-side tools, your text never leaves your device at all. See the [Privacy and Zero Cost](/docs/getting-started/privacy-and-zero-cost) page for a detailed explanation.

**Which AI provider does Forge AI use — can I use OpenAI or Anthropic?**
Forge AI currently supports only **Google Gemini**. OpenAI and Anthropic enforce CORS restrictions that prevent direct browser-to-API calls, which means supporting them would require routing your text through a backend server — something we deliberately avoid in order to keep your data private. Google Gemini allows direct browser access, making it the only provider we can support while maintaining the zero-upload guarantee.

**Do the non-AI tools work if I am offline?**
Yes. Once the Forge AI page has loaded, the Case Converter, Word Counter, and Lorem Ipsum Generator function without an internet connection. The AI-powered tools require a live connection because they communicate with Google's servers.

**Is my API key shared with Forge AI?**
No. Your Gemini API key is stored in your browser's local storage and is included directly in the request your browser sends to Google. Forge AI's servers never receive or log your key. You can remove it from local storage at any time through your browser's developer tools or by using the key-management option in the app.

---

## Related pages

- [Developer Tools](/docs/tools/developer-tools) — utilities for encoding, hashing, formatting, and more
- [Business Tools](/docs/tools/business-tools) — invoice generators, QR codes, and productivity utilities
- [FAQ](/docs/faq) — common questions about the app

---

<div className="forge-author-card">
<strong>About the author</strong>

Forge AI Toolkit is built and maintained by <a href="https://aoneahsan.com">Ahsan Mahmood</a>. Reach me at <a href="mailto:aoneahsan@gmail.com">aoneahsan@gmail.com</a> · <a href="https://linkedin.com/in/aoneahsan">LinkedIn</a> · <a href="https://github.com/aoneahsan">GitHub</a>.
</div>
