---
sidebar_position: 3
title: Image Tools
description: Forge AI Toolkit's image tools — Compressor, Converter, Resizer, Optimizer, Background Remover, Watermark, and OCR Scanner. All run in your browser; images never uploaded.
keywords: [image compressor, image converter, image resizer, image optimizer, background remover, watermark, ocr scanner, client-side image tools]
last_update:
  date: 2026-06-23
  author: Ahsan Mahmood
---

# Image Tools

**Forge AI Toolkit's image tools process your photos and graphics entirely inside your browser — your files are never sent to a server.** All seven tools in this category use browser-native APIs (File API, Canvas, and WebAssembly where needed) to read, transform, and return your images as a download, with no account required and no image ever leaving your device. You stay in control of your files from start to finish.

## Tools in this category

### Image Compressor

Reduces file size by lowering image quality and, optionally, resolution — without uploading your photo anywhere. You control the quality level and see an estimated output size before you download. Useful for shrinking images that are too large for email attachments or file-upload limits on forms and websites.

### Image Converter

Converts images between common web formats such as PNG, JPG, and WebP. The conversion happens in a browser Canvas element, so the result is available for download in seconds. No API key or external service is involved.

### Image Resizer

Lets you set a target width, height, or percentage scale and produces a resized copy of your image. Aspect ratio can be locked so the image does not distort. The original file is never modified; you receive a new download.

### Image Optimizer

Applies a combination of quality reduction and metadata stripping to produce a smaller file that still looks good on screen. The optimizer is a step beyond basic compression — it targets the overhead that accumulates in image files over time (EXIF data, color profiles, and unused metadata). Everything runs locally.

### Background Remover

Detects and removes the background from an image using a client-side model loaded into your browser via WebAssembly. The result is a PNG with a transparent background, ready for use in presentations, product listings, or further editing. Processing time depends on your device's speed; no image is uploaded.

### Watermark

Overlays custom text or a logo on your image before you download it. You choose font size, position, opacity, and color. The watermark is composited in a Canvas element in the browser, so you see a real-time preview and nothing leaves your device until you save the result.

### OCR Scanner

Extracts readable text from an image — useful for pulling content out of screenshots, scanned documents, or photos of printed material. The character recognition runs locally in the browser (powered by a WebAssembly OCR engine), so no image is sent to a cloud service. Output is plain text you can copy or save.

## How it works

When you open any image tool in Forge AI Toolkit, the browser reads your selected file using the [File API](https://developer.mozilla.org/en-US/docs/Web/API/File_API) — the file data goes into memory on your device, not onto a network. Straightforward transformations (resizing, conversion, compression, watermarking) use the browser's Canvas API to draw and re-encode the image. More computationally intensive tasks — background removal and OCR — load a compiled WebAssembly model the first time you use that tool; the model then runs locally on your CPU. Once processing is complete, the browser offers the result as a file download. There is no upload step, no server receives your image, and no API key is needed at any point. See [Privacy and Zero-Cost](/docs/getting-started/privacy-and-zero-cost) for a fuller explanation of how Forge AI Toolkit keeps your data local.

## Use cases

- **Shrinking a photo for an email or form.** Many email clients and web forms reject attachments over a few megabytes. Run the Image Compressor or Image Optimizer to bring the file size down to an acceptable range without switching to a dedicated desktop app.
- **Converting a PNG to WebP for a website.** WebP files are smaller than PNG or JPG at comparable quality and are supported by all modern browsers. Use the Image Converter to produce a WebP version of your asset in a single step.
- **Resizing an image for a social media post.** Different platforms expect different dimensions. Enter the target pixel dimensions in the Image Resizer, keep the aspect ratio locked if needed, and download a correctly sized copy.
- **Removing a background from a product photo.** If you are listing a product online or building a presentation and need a clean cutout, the Background Remover produces a transparent PNG directly in the browser — no subscription to a third-party service required.
- **Pulling text out of a screenshot.** When you receive information as an image (a screenshot of a table, a photo of a sign, a scanned form), the OCR Scanner extracts the text so you can copy, search, or edit it.

## Frequently asked questions

**Are my images uploaded to a server?**
No. Every image tool in Forge AI Toolkit processes files locally in your browser. Your images are read into browser memory, transformed, and offered as a download without any network request carrying your file data.

**Do I need an account or API key?**
No account, login, or API key is required for any image tool. Open the [live app](https://forgeai.aoneahsan.com), pick a tool, and use it. See the [Installation guide](/docs/getting-started/installation) if you want to run the app from a local build or install the Android version.

**What image formats are supported?**
The tools work with the common web image formats your browser can decode: PNG, JPG/JPEG, and WebP are reliably supported across all tools. GIF and BMP may work for some tools depending on your browser's Canvas support. The OCR Scanner can process any image format the browser can display.

**Does it work offline?**
The core tools (Compressor, Converter, Resizer, Optimizer, Watermark) work offline once the page has loaded, because they rely only on built-in browser APIs. Tools that use a WebAssembly model (Background Remover, OCR Scanner) require an initial download of that model; after the first load the model may be cached by the browser and work offline, though this depends on your browser's caching behaviour.

**Are there file size limits?**
There is no hard limit enforced by the app — processing happens in your browser's memory, so the practical limit is the RAM available on your device. Very large images (tens of megabytes or higher-resolution photos) may be slow to process or may cause the browser tab to run out of memory on lower-end devices. If you experience slowness, try reducing the image dimensions with the Resizer before running another tool.

**Is Forge AI Toolkit really free?**
Yes. The app is free to use with no paid tier, trial period, or hidden cost for the image tools. The [Privacy and Zero-Cost](/docs/getting-started/privacy-and-zero-cost) page explains the model in more detail.

---

Explore other tool categories: [Video & Audio Tools](/docs/tools/video-audio-tools) · [Document Tools](/docs/tools/document-tools)

For broader questions about the app, visit the [FAQ](/docs/faq) or the [Introduction](/docs/intro).

<div className="forge-author-card">
<strong>About the author</strong>

Forge AI Toolkit is built and maintained by <a href="https://aoneahsan.com">Ahsan Mahmood</a>. Reach me at <a href="mailto:aoneahsan@gmail.com">aoneahsan@gmail.com</a> · <a href="https://linkedin.com/in/aoneahsan">LinkedIn</a> · <a href="https://github.com/aoneahsan">GitHub</a>.
</div>
