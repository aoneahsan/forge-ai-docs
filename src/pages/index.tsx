import type { ReactNode } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import styles from './index.module.css';

const LIVE_APP = 'https://forgeai.aoneahsan.com';
const PLAY_STORE =
  'https://play.google.com/store/apps/details?id=com.aoneahsan.forgeai';

type Feature = {
  title: string;
  body: string;
};

const FEATURES: Feature[] = [
  {
    title: '100% client-side',
    body: 'Every tool runs in your browser. Your files, text, images, and videos are processed on your own device — nothing is uploaded to any server.',
  },
  {
    title: '65+ free tools',
    body: 'Formatters, converters, compressors, generators, and more across code, text, image, video/audio, document, and design categories. Free to use.',
  },
  {
    title: 'Bring your own key (BYOK)',
    body: 'AI writing tools use your own free Google Gemini API key, stored locally only. We never see your key, and it is never sent to our servers.',
  },
  {
    title: 'Web + Android',
    body: 'Use it instantly in any browser at forgeai.aoneahsan.com, or install the Android app from Google Play. Sign in to sync your preferences across devices.',
  },
];

function HomepageHeader(): ReactNode {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className="container">
        <h1 className={styles.heroTitle}>Forge AI Toolkit Documentation</h1>
        <p className={styles.heroTagline}>{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link className="button button--primary button--lg" to="/docs/intro">
            Read the Docs
          </Link>
          <Link
            className="button button--secondary button--lg"
            href={LIVE_APP}
          >
            Open the App
          </Link>
          <Link className="button button--outline button--lg" href={PLAY_STORE}>
            Get it on Google Play
          </Link>
        </div>
      </div>
    </header>
  );
}

function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.featuresWrap}>
      <div className="container">
        <div className="row">
          {FEATURES.map((f) => (
            <div
              key={f.title}
              className="col col--3"
              style={{ marginBottom: '1.5rem' }}
            >
              <div className={styles.featureCard}>
                <h3 className={styles.featureTitle}>{f.title}</h3>
                <p className={styles.featureBody}>{f.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AuthorStrip(): ReactNode {
  return (
    <section className={styles.authorStrip}>
      <div className="container">
        <p>
          Built and maintained by{' '}
          <Link href="https://aoneahsan.com">Ahsan Mahmood</Link> —{' '}
          <Link href="https://linkedin.com/in/aoneahsan">LinkedIn</Link> ·{' '}
          <Link href="https://github.com/aoneahsan">GitHub</Link> ·{' '}
          <Link href="https://www.npmjs.com/~aoneahsan">npm</Link>
        </p>
      </div>
    </section>
  );
}

export default function Home(): ReactNode {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title} — 65+ free, privacy-first tools`}
      description="Documentation for Forge AI Toolkit: a client-first AI and utility workspace with 65+ free tools that run entirely in your browser. AI tools use your own free Google Gemini API key (BYOK)."
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        <AuthorStrip />
      </main>
    </Layout>
  );
}
