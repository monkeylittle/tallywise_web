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
});
