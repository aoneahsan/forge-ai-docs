---
sidebar_position: 7
title: Business Tools
description: Forge AI Toolkit's AI business tools — Resume Matcher, Email Optimizer, Meeting Notes, Contract & Competitor Analyzer, SEO Meta Generator, Social Media Manager, plus Data Visualizer.
keywords: [resume matcher, email optimizer, meeting notes, contract analyzer, competitor analyzer, seo meta generator, social media manager, data visualizer, ai business tools]
last_update:
  date: 2026-06-23
  author: Ahsan Mahmood
---

# Business Tools

**The Business Tools category is a collection of AI-powered and client-side utilities that help you handle common professional tasks — resume tailoring, email drafting, meeting note cleanup, contract review, competitor research, SEO copy, social media planning, and data visualization — directly in your browser.** Most tools in this category are AI-powered and require a free Google Gemini API key to work; see [Bring Your Own Key](/docs/getting-started/bring-your-own-key) for a step-by-step setup guide. Your key is stored only on your device and is never sent to Forge AI's servers — see [Privacy and Zero Cost](/docs/getting-started/privacy-and-zero-cost) for details.

---

## Tools in this category

### Resume Matcher *(needs Gemini key)*

Resume Matcher compares your resume text against a job description you paste in, then uses Google Gemini to highlight gaps, suggest stronger phrasing, and surface keywords the job listing emphasizes. It works with plain text — paste your resume, paste the job description, and get a structured response. It does not upload files to any server; everything goes directly from your browser to the Gemini API using your own key.

### Email Optimizer *(needs Gemini key)*

Email Optimizer takes a draft email you provide and asks Gemini to improve its clarity, tone, and effectiveness for the goal you describe — whether that is a cold outreach, a follow-up, or an internal update. You supply the context (audience, goal), and the tool returns a polished version alongside a brief explanation of what changed and why.

### Meeting Notes *(needs Gemini key)*

Meeting Notes turns rough, unstructured notes or a transcript you paste in into organized meeting minutes. Gemini structures the output into sections such as attendees, decisions made, action items, and open questions. This is useful when you have a wall of text from a call and need a clean, shareable summary.

### Contract Analyzer *(needs Gemini key)*

Contract Analyzer accepts contract text you paste in and asks Gemini to summarize the key points, flag unusual or potentially unfavorable clauses, and highlight obligations on each party. This is a reading-aid tool — it is not legal advice and does not replace a qualified lawyer. Use it to orient yourself before a professional review, not instead of one.

### Competitor Analyzer *(needs Gemini key)*

Competitor Analyzer takes descriptive text about a competitor (copy from their website, a product description, press release, or your own notes) and uses Gemini to extract positioning, apparent strengths and weaknesses, and potential differentiators. Because the tool works on text you supply rather than browsing the web itself, the quality of the output depends on the quality and completeness of what you paste in.

### SEO Meta Generator *(needs Gemini key)*

SEO Meta Generator produces an SEO title and meta description for a page based on a topic, brief, or existing page content you paste in. Gemini drafts suggestions that aim for the character ranges search engines prefer (roughly 50–60 characters for titles, 140–160 for descriptions). You can iterate by adjusting the input and regenerating.

### Social Media Manager *(needs Gemini key)*

Social Media Manager helps you plan and draft content across platforms. Provide a topic, a target audience, and the platform (LinkedIn, X, Instagram, etc.), and Gemini drafts post copy appropriate for that context. It does not post on your behalf — it generates text you can copy, edit, and publish yourself.

### Data Visualizer *(no API key needed)*

Data Visualizer is a client-side charting utility. You paste or upload structured data (CSV or JSON), choose a chart type, and the tool renders a visualization in your browser. No AI model is involved and no API key is required — all processing happens locally. It is useful for quickly turning a dataset into a chart without installing spreadsheet software or writing code.

---

## How it works

For the AI-powered tools, the flow is straightforward:

1. You type or paste your content into the tool's input field.
2. The tool constructs a prompt using your text and sends it directly from your browser to the Google Gemini API, authenticated with your own API key.
3. Gemini processes the request and returns a response, which the tool displays.

**Your text goes directly from your browser to Google — it does not pass through Forge AI's servers.** Your API key is stored in your browser's local storage and is never transmitted to us.

One important limitation to be aware of: **only Google Gemini works in-browser today.** OpenAI and Anthropic APIs block direct browser requests due to CORS (Cross-Origin Resource Sharing) restrictions — their APIs require a server-side proxy to use from a web app. Because Forge AI is built to be fully client-side with no backend server, Google Gemini is the only supported AI provider at this time. This may change if OpenAI or Anthropic adjust their CORS policies, or if a zero-cost server-side option becomes available.

For Data Visualizer, there is no API call at all — the charting runs entirely in your browser using the data you provide.

---

## Use cases

- **Tailoring a resume:** Paste your resume and a job listing into Resume Matcher to identify which skills and keywords you should emphasize before applying.
- **Polishing a cold email:** Use Email Optimizer to sharpen an outreach message — describe your goal, paste your draft, and get a cleaner version with a brief explanation of the changes.
- **Structuring meeting notes:** After a call, paste your raw notes into Meeting Notes to get a formatted summary with decisions and action items you can share with attendees.
- **Reviewing a contract before a lawyer call:** Use Contract Analyzer to get a plain-English overview of what a contract says, so you arrive at a legal consultation with informed questions.
- **Planning a week of social posts:** Describe your product or topic and target audience in Social Media Manager, then generate and refine drafts for different platforms in one session.
- **Drafting an SEO meta description:** Paste your page content into SEO Meta Generator and iterate on the output until you have a title and description that fit your page honestly.
- **Visualizing a CSV export:** Drop a dataset into Data Visualizer to produce a quick bar or line chart without opening a spreadsheet application.

---

## Frequently asked questions

**Do the Business Tools require an API key?**
Most of them do. Resume Matcher, Email Optimizer, Meeting Notes, Contract Analyzer, Competitor Analyzer, SEO Meta Generator, and Social Media Manager all send requests to the Google Gemini API and require your free Gemini API key. Data Visualizer is the exception — it runs entirely in your browser and needs no key.

**Which AI provider is supported? Can I use OpenAI or Anthropic?**
Google Gemini is the only supported provider in Forge AI today. OpenAI and Anthropic block direct browser-to-API requests via CORS restrictions, which prevents their APIs from working in a fully client-side web app. Because Forge AI has no server backend, Gemini is the only option that works without one. If this changes in the future, support for additional providers may be added.

**Does Forge AI see or store the text I paste in?**
No. The AI-powered tools send your text directly from your browser to the Google Gemini API using your own key. That request never goes through Forge AI's servers. Forge AI does not log, store, or process the content you enter. See [Privacy and Zero Cost](/docs/getting-started/privacy-and-zero-cost) for a full explanation.

**Is Forge AI free to use?**
Yes — the app itself is free. You do need a Google Gemini API key, which has a free tier that covers a reasonable amount of usage for personal and light professional use. You are responsible for any charges Google applies if you exceed the free tier on your own account. See [Bring Your Own Key](/docs/getting-started/bring-your-own-key) for details on getting and setting up your key.

**Does Data Visualizer need an API key?**
No. Data Visualizer is a client-side tool that runs entirely in your browser. There is no AI call involved and no API key is required.

**Is Contract Analyzer legal advice?**
No. Contract Analyzer uses an AI model to summarize and flag points of interest in text you provide. The output is a reading aid, not legal counsel. Always consult a qualified legal professional for binding decisions about contracts.

---

## Related pages

- [Getting Started: Bring Your Own Key](/docs/getting-started/bring-your-own-key)
- [Getting Started: Privacy and Zero Cost](/docs/getting-started/privacy-and-zero-cost)
- [Writing Tools](/docs/tools/writing-tools)
- [Developer Tools](/docs/tools/developer-tools)
- [FAQ](/docs/faq)
- [Introduction](/docs/intro)

**Live app:** [forgeai.aoneahsan.com](https://forgeai.aoneahsan.com)

---

<div className="forge-author-card">
<strong>About the author</strong>

Forge AI Toolkit is built and maintained by <a href="https://aoneahsan.com">Ahsan Mahmood</a>. Reach me at <a href="mailto:aoneahsan@gmail.com">aoneahsan@gmail.com</a> · <a href="https://linkedin.com/in/aoneahsan">LinkedIn</a> · <a href="https://github.com/aoneahsan">GitHub</a>.
</div>
