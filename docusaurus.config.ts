import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// ---------------------------------------------------------------------------
// Forge AI Toolkit — Documentation site config
// Author: Ahsan Mahmood (https://aoneahsan.com)
// Live app: https://forgeai.aoneahsan.com
// Play Store: https://play.google.com/store/apps/details?id=com.aoneahsan.forgeai
// ---------------------------------------------------------------------------

const LIVE_APP = 'https://forgeai.aoneahsan.com';
const PLAY_STORE =
  'https://play.google.com/store/apps/details?id=com.aoneahsan.forgeai';
const DOCS_URL = 'https://forgeai-docs.aoneahsan.com';

const config: Config = {
  title: 'Forge AI Toolkit Docs',
  tagline:
    'Client-first AI & utility workspace with 65+ free, privacy-first tools.',
  favicon: 'img/favicon.svg',

  // Production URL — served from Firebase Hosting site `forge-ai-docs`
  // and/or GitHub Pages with a custom domain (static/CNAME).
  url: DOCS_URL,
  baseUrl: '/',

  // GitHub metadata (drives OG tags + edit-this-page links + Pages deploy)
  organizationName: 'aoneahsan',
  projectName: 'forge-ai-docs',

  onBrokenLinks: 'throw',
  onBrokenAnchors: 'warn',

  // SEO + AI-citability head tags. Injected into <head> of every page on top
  // of the per-page metadata Docusaurus already emits. The JSON-LD payloads
  // (WebSite, Organization, SoftwareApplication) help Google Rich Results,
  // Perplexity, ChatGPT, and Claude extract structured entity data.
  headTags: [
    {
      tagName: 'link',
      attributes: {
        rel: 'canonical',
        href: `${DOCS_URL}/`,
      },
    },
    {
      tagName: 'meta',
      attributes: {
        name: 'application-name',
        content: 'Forge AI Toolkit Docs',
      },
    },
    {
      tagName: 'meta',
      attributes: {
        name: 'apple-mobile-web-app-title',
        content: 'Forge AI Toolkit',
      },
    },
    {
      tagName: 'meta',
      attributes: {
        name: 'theme-color',
        content: '#7c3aed',
      },
    },
    {
      tagName: 'script',
      attributes: {
        type: 'application/ld+json',
      },
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: 'Forge AI Toolkit Documentation',
        url: DOCS_URL,
        description:
          'Documentation for Forge AI Toolkit — a client-first AI and utility workspace with 65+ free, privacy-first tools that run entirely in your browser. AI writing tools use your own free Google Gemini API key (BYOK). Author: Ahsan Mahmood.',
        inLanguage: 'en',
        publisher: {
          '@type': 'Person',
          name: 'Ahsan Mahmood',
          url: 'https://aoneahsan.com',
          email: 'aoneahsan@gmail.com',
          sameAs: [
            'https://linkedin.com/in/aoneahsan',
            'https://github.com/aoneahsan',
            'https://www.npmjs.com/~aoneahsan',
          ],
        },
      }),
    },
    {
      tagName: 'script',
      attributes: {
        type: 'application/ld+json',
      },
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'SoftwareApplication',
        name: 'Forge AI Toolkit',
        applicationCategory: 'UtilitiesApplication',
        applicationSubCategory: 'ProductivityApplication',
        operatingSystem: 'Web, Android',
        url: LIVE_APP,
        downloadUrl: PLAY_STORE,
        sameAs: [LIVE_APP, PLAY_STORE],
        offers: {
          '@type': 'Offer',
          price: '0',
          priceCurrency: 'USD',
        },
        author: {
          '@type': 'Person',
          name: 'Ahsan Mahmood',
          url: 'https://aoneahsan.com',
        },
        description:
          'A client-first AI and utility workspace with 65+ free tools across code, text, image, video/audio, document, and design categories. Every tool runs 100% in your browser — files never leave your device. AI writing tools use your own free Google Gemini API key (BYOK), stored locally only.',
      }),
    },
    {
      tagName: 'script',
      attributes: {
        type: 'application/ld+json',
      },
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'Ahsan Mahmood',
        alternateName: 'aoneahsan',
        url: 'https://aoneahsan.com',
        email: 'aoneahsan@gmail.com',
        sameAs: [
          'https://linkedin.com/in/aoneahsan',
          'https://github.com/aoneahsan',
          'https://www.npmjs.com/~aoneahsan',
          'https://aoneahsan.com',
        ],
        founder: {
          '@type': 'Person',
          name: 'Ahsan Mahmood',
        },
      }),
    },
  ],

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  trailingSlash: false,

  markdown: {
    mermaid: true,
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },
  themes: ['@docusaurus/theme-mermaid'],

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // `docs/` is BOTH the published content dir and the home of the
          // fixed-path internal file docs/MANUAL-TASKS.md. Keep the path (the
          // global rule fixes it) but never publish it — this repo is public.
          // NOTE: `exclude` REPLACES the plugin defaults, so they are restated.
          exclude: [
            '**/_*.{js,jsx,ts,tsx,md,mdx}',
            '**/_*/**',
            '**/*.test.{js,jsx,ts,tsx}',
            '**/__tests__/**',
            'MANUAL-TASKS.md',
          ],
          routeBasePath: 'docs',
          editUrl: 'https://github.com/aoneahsan/forge-ai-docs/edit/main/',
          showLastUpdateTime: true,
          showLastUpdateAuthor: true,
          breadcrumbs: true,
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
        sitemap: {
          changefreq: 'weekly',
          priority: 0.7,
          lastmod: 'date',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/social-card.svg',
    metadata: [
      {
        name: 'description',
        content:
          'Documentation for Forge AI Toolkit — a client-first AI and utility workspace with 65+ free, privacy-first tools that run entirely in your browser. AI tools use your own free Google Gemini API key (BYOK). Built by Ahsan Mahmood.',
      },
      {
        name: 'keywords',
        content:
          'forge ai toolkit, ai tools, free online tools, privacy-first tools, client-side tools, browser tools, BYOK, google gemini api, json formatter, regex tester, grammar checker, image compressor, video trimmer, pdf tools, qr code generator, password generator, capacitor app, react app',
      },
      { name: 'author', content: 'Ahsan Mahmood' },
      {
        name: 'robots',
        content:
          'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
      },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:creator', content: '@aoneahsan' },
      { name: 'twitter:site', content: '@aoneahsan' },
      { property: 'og:type', content: 'website' },
      { property: 'og:site_name', content: 'Forge AI Toolkit Docs' },
      { property: 'og:locale', content: 'en_US' },
      { property: 'og:image:width', content: '1200' },
      { property: 'og:image:height', content: '630' },
      { property: 'article:author', content: 'Ahsan Mahmood' },
    ],
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: false,
      respectPrefersColorScheme: false,
    },
    docs: {
      sidebar: {
        hideable: true,
        autoCollapseCategories: true,
      },
    },
    navbar: {
      title: 'Forge AI Toolkit',
      logo: {
        alt: 'Forge AI Toolkit logo',
        src: 'img/logo.svg',
        srcDark: 'img/logo.svg',
        width: 32,
        height: 32,
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'mainSidebar',
          position: 'left',
          label: 'Docs',
        },
        {
          to: '/docs/getting-started/installation',
          label: 'Get Started',
          position: 'left',
        },
        {
          to: '/docs/faq',
          label: 'FAQ',
          position: 'left',
        },
        {
          href: LIVE_APP,
          label: 'Open App',
          position: 'right',
        },
        {
          href: PLAY_STORE,
          label: 'Google Play',
          position: 'right',
        },
        {
          href: 'https://github.com/aoneahsan/forge-ai-docs',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Documentation',
          items: [
            { label: 'Introduction', to: '/docs/intro' },
            {
              label: 'Installation',
              to: '/docs/getting-started/installation',
            },
            {
              label: 'Bring Your Own Key',
              to: '/docs/getting-started/bring-your-own-key',
            },
            { label: 'FAQ', to: '/docs/faq' },
          ],
        },
        {
          title: 'Forge AI Toolkit',
          items: [
            { label: 'Open the app', href: LIVE_APP },
            { label: 'Get it on Google Play', href: PLAY_STORE },
            {
              label: 'Privacy Policy',
              href: `${LIVE_APP}/privacy`,
            },
            { label: 'Terms', href: `${LIVE_APP}/terms` },
          ],
        },
        {
          title: 'Built by Ahsan Mahmood',
          items: [
            { label: 'aoneahsan.com', href: 'https://aoneahsan.com' },
            { label: 'LinkedIn', href: 'https://linkedin.com/in/aoneahsan' },
            { label: 'GitHub', href: 'https://github.com/aoneahsan' },
            { label: 'npm packages', href: 'https://www.npmjs.com/~aoneahsan' },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Ahsan Mahmood. Built with Docusaurus. Forge AI Toolkit is free to use.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['bash', 'json', 'typescript', 'jsx', 'css', 'sql', 'diff'],
    },
    announcementBar: {
      id: 'forge-ai-live',
      content:
        '⚡ Forge AI Toolkit is live — 65+ free, privacy-first tools that run in your browser. <a target="_blank" rel="noopener noreferrer" href="https://forgeai.aoneahsan.com">Open the app →</a>',
      backgroundColor: '#7c3aed',
      textColor: '#ffffff',
      isCloseable: true,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
