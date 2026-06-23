import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

/**
 * Sidebar layout for the Forge AI Toolkit documentation.
 *
 * Item ids are relative to the docs/ root. Routes are served under /docs/
 * (see `routeBasePath: 'docs'` in docusaurus.config.ts).
 */
const sidebars: SidebarsConfig = {
  mainSidebar: [
    'intro',
    {
      type: 'category',
      label: 'Getting Started',
      collapsed: false,
      items: [
        'getting-started/installation',
        'getting-started/bring-your-own-key',
        'getting-started/privacy-and-zero-cost',
      ],
    },
    {
      type: 'category',
      label: 'Tools by Category',
      collapsed: false,
      items: [
        'tools/developer-tools',
        'tools/writing-tools',
        'tools/image-tools',
        'tools/video-audio-tools',
        'tools/document-tools',
        'tools/design-creative-tools',
        'tools/business-tools',
      ],
    },
    'account-and-data',
    'faq',
  ],
};

export default sidebars;
