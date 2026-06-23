---
sidebar_position: 5
title: Document Tools
description: Forge AI Toolkit's document tools — PDF Splitter, PDF to Images, Image to PDF, Word to PDF, Spreadsheet Converter, and Markdown/HTML tools. All run in your browser, no uploads.
keywords: [pdf splitter, pdf to images, image to pdf, word to pdf, spreadsheet converter, markdown to html, client-side document tools, pdf tools]
last_update:
  date: 2026-06-23
  author: Ahsan Mahmood
---

# Document Tools

**Document tools in Forge AI Toolkit are client-side utilities that convert, split, and transform document files directly inside your browser — no file is ever sent to a server.** Because everything runs locally, you can process confidential contracts, private reports, and sensitive records without worrying about data leaving your device. All tools are free to use, require no account, and need no API key — open the app and start converting.

See the [introduction](/docs/intro) for a broader overview of what Forge AI Toolkit offers, or head to [Privacy and Zero-Cost](/docs/getting-started/privacy-and-zero-cost) for a detailed explanation of why local processing matters.

---

## Tools in this category

### PDF Splitter

The PDF Splitter lets you extract a specific page range — or individual pages — from any PDF file and save the result as a new, standalone PDF. Load the file, choose the pages you want to keep, and download the trimmed document. No original content is modified; the tool always produces a new file while your source PDF stays intact on your device.

### PDF to Images

PDF to Images converts each page of a PDF into a separate image file (PNG or JPEG). This is useful when you need to share a specific page as an image, embed a PDF page in a presentation, or view a PDF on a device that lacks a proper reader. Each page is rendered in your browser and packaged for download — the source PDF never leaves your machine.

### Image to PDF

Image to PDF bundles one or more image files (JPEG, PNG, WebP, and similar common formats) into a single PDF document. You choose the order and the tool assembles the PDF locally. Common uses include combining scanned pages, packaging photos for submission, or creating a simple portfolio document without dedicated software.

### Word to PDF

Word to PDF converts `.docx` files to PDF format entirely in the browser. The conversion preserves headings, paragraphs, lists, and basic formatting. This is handy when you need a PDF copy of a document for sharing but do not have Word or a cloud converter — and when you need the conversion to stay private.

### Spreadsheet Converter

Spreadsheet Converter handles format conversions between common tabular data formats such as CSV, TSV, and XLSX (Excel). Load your spreadsheet, choose an output format, and download the result. The tool processes the data in memory — no row of your data touches any external server.

### Markdown / HTML Tools

The Markdown/HTML tools cover bidirectional conversion between Markdown and HTML. Paste or load a Markdown document and export clean HTML, or load an HTML snippet and get readable Markdown back. This is useful for writers moving content between a static-site generator and a CMS, or for developers reviewing rendered output without spinning up a build tool.

---

## How it works

All document tools in Forge AI Toolkit are built on WebAssembly libraries and JavaScript APIs that run natively in modern browsers. When you load a file, it is read from your local storage into browser memory. The conversion or transformation runs entirely in that in-memory context — no network request is made, no file is uploaded, and no third-party service is contacted.

Once the operation is complete, the browser generates the output file in memory and triggers a standard download to your device. The processed file lands in your downloads folder like any other browser download. After the page is closed or refreshed, nothing persists on the server side — because there is no server involved.

This approach does mean that very large files (typically above a few hundred megabytes) may be limited by the available memory on your device rather than by any server-side cap. See the FAQ below for guidance on size limits.

---

## Use cases

- **Extracting one chapter from a long PDF** — use the PDF Splitter to pull pages 12–28 from a 300-page technical manual and share only the relevant section with a colleague.
- **Turning a scanned PDF into images** — use PDF to Images to convert each page of a scanned contract into PNG files so you can annotate them in an image editor or embed them in a slide deck.
- **Combining photos into a single PDF** — use Image to PDF to merge a set of scanned receipts or signed forms into one submission-ready document.
- **Sending a Word document as a PDF** — use Word to PDF to produce a portable, non-editable version of a `.docx` report before emailing it to a client who may not have Word installed.
- **Converting a CSV to XLSX for a team member** — use Spreadsheet Converter to reformat a plain CSV export from a database tool into an Excel file a colleague can open directly in their spreadsheet app.
- **Previewing Markdown as HTML** — use the Markdown/HTML converter to instantly see how a documentation page will render without running a local build server.

---

## Frequently asked questions

**Are my documents uploaded to any server?**
No. Every tool in this category processes files in your browser using local JavaScript and WebAssembly libraries. Nothing is transmitted over the network. You can verify this by opening your browser's network inspector while using any tool — you will see zero file-upload requests.

**Is it safe to use these tools with confidential or sensitive documents?**
Yes, with the caveat that your device itself must be trusted. Because Forge AI Toolkit never sends your files anywhere, the privacy boundary is your own machine and browser. There is no cloud storage, no logging of file contents, and no third-party processing. Review our full [Privacy and Zero-Cost](/docs/getting-started/privacy-and-zero-cost) page for complete details.

**Do I need to create an account or provide an API key?**
No account or API key is required. Open [forgeai.aoneahsan.com](https://forgeai.aoneahsan.com), navigate to a document tool, and use it immediately. See [Getting Started / Installation](/docs/getting-started/installation) for tips on installing the app on Android or adding it to your home screen.

**What file formats are supported?**
The specific formats depend on the tool: PDF Splitter and PDF to Images accept `.pdf`; Image to PDF accepts common image formats (JPEG, PNG, WebP, and GIF); Word to PDF accepts `.docx`; Spreadsheet Converter handles CSV, TSV, and XLSX; Markdown/HTML tools work with plain text. Format support may expand over time — check the in-app tool description for the current accepted types.

**Are there file size limits?**
There are no server-enforced size limits because there is no server. Practical limits are set by the available memory on your device. Most laptops and modern Android phones handle PDFs and documents up to several hundred megabytes without issue. If a very large file causes the browser tab to slow down or run out of memory, try splitting it into smaller parts first using the PDF Splitter, then processing each part individually.

**How do these tools compare to the image tools?**
Document tools focus on file-format conversion and document manipulation (PDFs, Word files, spreadsheets, Markdown). Image tools focus on image-specific operations such as resizing, compression, and format conversion. See [Image Tools](/docs/tools/image-tools) for that category. For generative and creative work, visit [Design and Creative Tools](/docs/tools/design-creative-tools). The [FAQ](/docs/faq) page covers questions that apply across all categories.

---

<div className="forge-author-card">
<strong>About the author</strong>

Forge AI Toolkit is built and maintained by <a href="https://aoneahsan.com">Ahsan Mahmood</a>. Reach me at <a href="mailto:aoneahsan@gmail.com">aoneahsan@gmail.com</a> · <a href="https://linkedin.com/in/aoneahsan">LinkedIn</a> · <a href="https://github.com/aoneahsan">GitHub</a>.
</div>
