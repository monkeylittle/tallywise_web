import type { APIRoute } from 'astro';
import { site } from '../site';
import { getCollection } from 'astro:content';
import { PAGES, allVariants, pathFor } from '../i18n/config';

// Sitemap generated from the i18n/region config so it can't drift from the
// routes. Every URL lists xhtml:link alternates for its whole region × language
// cluster plus x-default ("/", the chooser). Excluded: redirect stubs, the
// noindex coupons explainer outside Ireland. German (legacy, language-only) is
// a one-URL cluster of its own.
const abs = (path: string) => new URL(path, site.url).href;

export const GET: APIRoute = async () => {
  const entries: string[] = [];

  entries.push(`  <url>\n    <loc>${abs('/')}</loc>\n  </url>`);

  for (const page of PAGES) {
    const variants = allVariants(page.key);
    const alts = variants
      .map((v) => `    <xhtml:link rel="alternate" hreflang="${v.hreflang}" href="${abs(v.href)}"/>`)
      .join('\n');
    const xDefault = `    <xhtml:link rel="alternate" hreflang="x-default" href="${abs('/')}"/>`;
    for (const v of variants) {
      entries.push(`  <url>\n    <loc>${abs(v.href)}</loc>\n${alts}\n${xDefault}\n  </url>`);
    }
    entries.push(`  <url>\n    <loc>${abs(pathFor(page.key, 'de'))}</loc>\n  </url>`);
  }

  // Blog: region-neutral, English only, so no hreflang cluster.
  entries.push(`  <url>\n    <loc>${abs('/blog/')}</loc>\n  </url>`);
  for (const post of await getCollection('blog')) {
    const lastmod = (post.data.updated ?? post.data.date).toISOString().slice(0, 10);
    entries.push(`  <url>\n    <loc>${abs(`/blog/${post.slug}/`)}</loc>\n    <lastmod>${lastmod}</lastmod>\n  </url>`);
  }

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${entries.join('\n')}
</urlset>
`;
  return new Response(xml, { headers: { 'Content-Type': 'application/xml' } });
};
