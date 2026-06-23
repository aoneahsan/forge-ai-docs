---
sidebar_position: 4
title: Video & Audio Tools
description: Forge AI Toolkit's video & audio tools — Trimmer, Compressor, Audio Converter, Audio Extractor, GIF Maker, Subtitle Editor — all running on FFmpeg.wasm in your browser, no uploads.
keywords: [video trimmer, video compressor, audio converter, audio extractor, gif maker, subtitle editor, ffmpeg wasm, client-side video tools]
last_update:
  date: 2026-06-23
  author: Ahsan Mahmood
---

# Video & Audio Tools

**Forge AI Toolkit's video and audio tools are a set of browser-based media utilities powered by FFmpeg compiled to WebAssembly (FFmpeg.wasm).** They let you trim, compress, convert, extract audio, generate GIFs, and edit subtitles without sending your media to any server. Every byte of your video or audio file stays on your device — see [Privacy and Zero-Cost](/docs/getting-started/privacy-and-zero-cost) for the full story. The tools are available on the [Forge AI web app](https://forgeai.aoneahsan.com) and in the Android app — no account or API key required.

## Tools in this category

### Video Trimmer

Cut a video down to the exact segment you want. Load your file, set the start and end timestamps, and export the trimmed clip. The tool processes the cut locally using FFmpeg.wasm, so no portion of the original file leaves your device. Output is written back to your browser for download. Supported input formats include MP4, MKV, MOV, WebM, and AVI.

### Video Compressor

Reduce a video's file size by lowering its bitrate, resolution, or both. This is useful when a platform imposes an upload size limit — for example, bringing a 200 MB recording down to under 50 MB before sharing. You control the quality trade-off; the tool gives you a slider or preset rather than hiding the setting. Processing happens entirely in your browser; large files will take proportionally longer because your CPU is doing the work.

### Audio Converter

Convert an audio file from one format to another — for example, WAV to MP3, FLAC to OGG, or M4A to AAC. Choose the output format and, where applicable, the bitrate, then let FFmpeg.wasm handle the re-encode in your browser. No cloud transcoding service is involved, so there is no per-minute usage charge and no file-size cap imposed by an API.

### Audio Extractor

Pull the audio track out of a video file and save it as a standalone audio file. Load an MP4 (or MKV, MOV, WebM, etc.), choose an output format such as MP3 or WAV, and the tool demuxes the audio stream using FFmpeg.wasm without re-encoding from scratch where possible. This is useful for extracting a podcast recording, pulling a soundtrack from a screen capture, or archiving a lecture's audio separately from its video.

### GIF Maker

Convert a short video clip into an animated GIF. Set the start time, duration (keep it short — GIFs grow large quickly), frame rate, and width. FFmpeg.wasm generates the GIF palette and frames locally. Because GIF files are inherently large relative to modern video formats, the tool is best suited to clips of a few seconds; longer clips will produce very large files and may push against your device's available memory.

### Subtitle Editor

Load an SRT subtitle file alongside a video and make timing or text edits before re-exporting the subtitle file. You can shift subtitle timecodes, correct spelling, or split/merge cue entries. The editor works with plain SRT format; the video itself is used for preview reference only and is never uploaded.

## How it works (FFmpeg.wasm)

These tools rely on [FFmpeg](https://ffmpeg.org/) — the widely used open-source media processing library — compiled to [WebAssembly](https://webassembly.org/) so it can run directly inside a browser tab.

**First-time use requires a network connection.** The FFmpeg.wasm engine is approximately 25 MB. On your first visit to any video or audio tool, the browser downloads this engine from a CDN and caches it. Subsequent uses of the same browser load the cached engine without an additional download, so repeated use is fast to start.

**Your media file is never uploaded.** Only the FFmpeg engine binary is fetched from the network. Your actual video or audio file is read from local storage (via the browser's File API) and passed entirely to the in-browser FFmpeg process. No part of your media is transmitted to any external server at any point during processing.

**Processing speed and file-size limits depend on your device.** Because encoding and decoding happen on your CPU inside the browser, a high-resolution video or a long clip will take real time — sometimes several minutes. There is no hard file-size cap enforced by the tool itself, but very large files (several gigabytes) may exhaust your browser's available memory. If that happens, the browser tab may crash or become unresponsive; splitting a large file into smaller segments first is a practical workaround.

For background on how all Forge AI tools handle your data, see [Privacy and Zero-Cost](/docs/getting-started/privacy-and-zero-cost).

## Use cases

- **Trimming a clip before sharing.** You recorded a 40-minute screen capture but only the first 8 minutes are relevant. Use the Video Trimmer to export just that segment.
- **Shrinking a video to fit a platform upload limit.** A project presentation is 180 MB but the submission portal caps uploads at 50 MB. Use the Video Compressor to reduce the bitrate while keeping the resolution acceptable.
- **Converting a podcast WAV to MP3.** Your recording software outputs WAV files. Use the Audio Converter to produce a smaller MP3 for distribution without sending the audio to a cloud transcoding service.
- **Extracting background music from a video.** You have an MP4 of a live event and want the audio as a standalone file. Use the Audio Extractor to pull it as an MP3 in one step.
- **Making a short reaction GIF.** You have a 3-second clip you want to share as an animated GIF. Use the GIF Maker to set the frame rate and width, then download the result.
- **Fixing subtitle timing on a downloaded SRT file.** The subtitles are off by 1.5 seconds throughout. Use the Subtitle Editor to shift all cue timecodes and re-export the corrected SRT.

## Frequently asked questions

**Is my video or audio file uploaded to a server?**

No. The FFmpeg.wasm engine runs inside your browser tab. Your media file is read from your local device and processed in memory — it is never sent to any external server. The only network request these tools make is the one-time download of the FFmpeg engine binary on first use.

**Why does it download about 25 MB the first time?**

FFmpeg is a large, full-featured media processing library. Compiling it to WebAssembly produces a binary of roughly 25 MB. This is a one-time cost per browser; once downloaded, the browser caches the engine so subsequent uses start immediately without re-downloading.

**Do the tools work offline after the first use?**

The FFmpeg engine is cached by the browser after the first download, so the engine itself does not need to be re-fetched. However, like any web app, Forge AI requires a network connection to load the page itself unless you have the Android app installed and the app has been opened at least once with a connection. If you need fully offline operation, install the Android app and open a video/audio tool at least once while online to seed the cache.

**Which file formats are supported?**

FFmpeg.wasm supports the same codecs and containers as desktop FFmpeg, which covers most common formats: MP4, MKV, MOV, WebM, AVI, MP3, WAV, FLAC, OGG, M4A, AAC, and more. Obscure or proprietary formats (for example, some camera-specific container variants) may not decode correctly; in those cases, re-wrapping the file with a desktop tool first is a reliable workaround.

**Are there file-size limits?**

The tools do not enforce a hard limit, but processing happens in your browser using your device's memory and CPU. Very large files — typically several gigabytes — may exhaust the browser's available memory and cause the tab to slow down significantly or crash. As a practical guide, files under 500 MB process reliably on most modern devices; files between 500 MB and 2 GB may work but will be slow; files above 2 GB are risky without a high-memory device. Splitting large files into smaller segments before processing is the safest approach.

**Why is processing slow for large or high-resolution files?**

FFmpeg.wasm runs on your CPU inside a browser environment. It does not use hardware-accelerated GPU encoding (H.264/HEVC GPU paths are not available in WebAssembly today). A 4K video that a desktop GPU encoder would finish in seconds may take several minutes in the browser. This is a known limitation of client-side WebAssembly media processing, not a bug in the tool.

---

For a full list of available tools across all categories, visit [Image Tools](/docs/tools/image-tools), [Document Tools](/docs/tools/document-tools), or the [FAQ](/docs/faq). To get started with Forge AI Toolkit, see [Getting Started](/docs/getting-started/installation) or open the [live app](https://forgeai.aoneahsan.com) directly.

<div className="forge-author-card">
<strong>About the author</strong>

Forge AI Toolkit is built and maintained by <a href="https://aoneahsan.com">Ahsan Mahmood</a>. Reach me at <a href="mailto:aoneahsan@gmail.com">aoneahsan@gmail.com</a> · <a href="https://linkedin.com/in/aoneahsan">LinkedIn</a> · <a href="https://github.com/aoneahsan">GitHub</a>.
</div>
