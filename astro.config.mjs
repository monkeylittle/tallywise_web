// @ts-check
import { defineConfig } from 'astro/config';

// The canonical site URL powers absolute links and SEO tags.
// Keep in sync with src/site.ts.
//
// NOTE: @astrojs/sitemap was intentionally left out — it crashes on Node ≥23
// (Astro 4 targets Node ≤22). A hand-maintained public/sitemap.xml is used
// instead; re-add the integration once building on a supported Node.
export default defineConfig({
  site: 'https://tallywise.eu',

  // English stays at the root (/, /how-it-works/) so existing indexed URLs and
  // inbound links keep working; Dutch/French/German are served under a prefix
  // (/nl/, /fr/…, /de/…). See src/i18n/config.ts for the routing helpers and
  // BaseLayout.astro for the hreflang alternates.
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'nl', 'fr', 'de'],
    routing: { prefixDefaultLocale: false },
  },
});
