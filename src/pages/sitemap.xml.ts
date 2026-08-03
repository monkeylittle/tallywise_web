import type { APIRoute } from 'astro';
import { site } from '../site';
import { DEFAULT_LANG, LANG_CODES, PAGES, pathFor, htmlLang } from '../i18n/config';

// Multilingual sitemap generated from the i18n config so it can't drift from
// the routes. Each URL lists xhtml:link alternates for every language + an
// x-default (English). Replaces the previous hand-maintained public/sitemap.xml
// (the @astrojs/sitemap integration is avoided — see astro.config.mjs).
export const GET: APIRoute = () => {
  const abs = (page: (typeof PAGES)[number]['key'], lang: (typeof LANG_CODES)[number]) =>
    new URL(pathFor(page, lang), site.url).href;

  const urls = LANG_CODES.flatMap((lang) =>
    PAGES.map((page) => {
      const alts = LANG_CODES.map(
        (l) => `    <xhtml:link rel="alternate" hreflang="${htmlLang(l)}" href="${abs(page.key, l)}"/>`,
      ).join('\n');
      const xDefault = `    <xhtml:link rel="alternate" hreflang="x-default" href="${abs(page.key, DEFAULT_LANG)}"/>`;
      return `  <url>\n    <loc>${abs(page.key, lang)}</loc>\n${alts}\n${xDefault}\n  </url>`;
    }),
  );

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls.join('\n')}
</urlset>
`;
  return new Response(xml, { headers: { 'Content-Type': 'application/xml' } });
};
