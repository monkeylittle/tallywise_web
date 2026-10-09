// Language + routing configuration for the multilingual, multi-region site.
//
// URL scheme: REGION first, language inside (see pathFor below):
//   /            region chooser (no marketing content depends on a market)
//   /ie/  /uk/   Ireland, United Kingdom (English)
//   /be/ /be/fr/ /be/en/   Belgium (Dutch default, French, English)
//   /nl/ /nl/en/           Netherlands (Dutch default, English)
//   /de/…        LEGACY German pages: language-only, outside the region selector
// URL *slugs* stay English across all languages and regions, so links are
// stable and the routing stays simple. Everything that varies by market lives
// in ./regions.ts.

export const DEFAULT_LANG = 'en' as const;

export const LANGUAGES = [
  { code: 'en', label: 'English', htmlLang: 'en' },
  // One Dutch locale, written to read naturally in Flanders as well as the
  // Netherlands (neutral vocabulary, no NL-only slang).
  { code: 'nl', label: 'Nederlands', htmlLang: 'nl' },
  { code: 'fr', label: 'Français', htmlLang: 'fr' },
  { code: 'de', label: 'Deutsch', htmlLang: 'de' },
] as const;

export type Lang = (typeof LANGUAGES)[number]['code'];

export const LANG_CODES = LANGUAGES.map((l) => l.code) as Lang[];

export function isLang(x: string): x is Lang {
  return (LANG_CODES as string[]).includes(x);
}

/** The BCP-47 lang attribute for <html lang>. */
export function htmlLang(lang: Lang): string {
  return LANGUAGES.find((l) => l.code === lang)!.htmlLang;
}

// The page registry. `key` is the logical page; `slug` is its English URL
// segment (empty for the home page). Order here is the nav/build order.
export const PAGES = [
  { key: 'home', slug: '' },
  { key: 'howItWorks', slug: 'how-it-works' },
  { key: 'coupons', slug: 'coupons' },
  { key: 'savings', slug: 'savings' },
  { key: 'about', slug: 'about' },
  { key: 'support', slug: 'support' },
  { key: 'privacy', slug: 'privacy' },
  { key: 'terms', slug: 'terms' },
] as const;

export type PageKey = (typeof PAGES)[number]['key'];

export function slugFor(page: PageKey): string {
  return PAGES.find((p) => p.key === page)!.slug;
}

import {
  REGIONS,
  REGION_CODES,
  defaultLangFor,
  regionSupportsLang,
  type Region,
  type RegionOrAll,
} from './regions';

/**
 * Build the URL path for a page. URLs are region-first, language inside:
 *
 *   /ie/  /ie/how-it-works/            Ireland (English)
 *   /be/  /be/fr/savings/  /be/en/     Belgium (Dutch default, French, English)
 *   /nl/  /nl/en/                      Netherlands (Dutch default, English)
 *
 * Slugs stay English everywhere. With no region (or 'ALL') this builds the
 * LEGACY language-only path used by the German pages (/de/…) and by the
 * redirect stubs for pre-region URLs (/how-it-works/, /fr/coupons/ …).
 */
export function pathFor(page: PageKey, lang: Lang, region?: RegionOrAll): string {
  const slug = slugFor(page);
  const tail = slug ? `/${slug}/` : '/';
  if (!region || region === 'ALL') {
    const prefix = lang === DEFAULT_LANG ? '' : `/${lang}`;
    return `${prefix}${tail}` || '/';
  }
  const r = REGIONS[region];
  const langPart = lang === defaultLangFor(region) ? '' : `/${lang}`;
  return `/${r.slug}${langPart}${tail}`;
}

/** Language variants of a page WITHIN a region — for the language switcher. */
export function altsFor(page: PageKey, region: Region): { lang: Lang; href: string }[] {
  return REGIONS[region].langs.map((lang) => ({ lang, href: pathFor(page, lang, region) }));
}

/** The same page in another region, keeping the language when that region offers it. */
export function regionHref(page: PageKey, lang: Lang, to: Region): string {
  const l = regionSupportsLang(to, lang) ? lang : defaultLangFor(to);
  return pathFor(page, l, to);
}

/** Every region × language variant of a page, with its hreflang code (en-IE, nl-BE …). */
export function allVariants(page: PageKey): { region: Region; lang: Lang; href: string; hreflang: string }[] {
  const out: { region: Region; lang: Lang; href: string; hreflang: string }[] = [];
  for (const region of REGION_CODES) {
    // Coupons only exist (as a real page) in Ireland; elsewhere it is a short
    // explainer that is not part of the hreflang cluster.
    if (page === 'coupons' && !REGIONS[region].coupons) continue;
    for (const lang of REGIONS[region].langs) {
      out.push({
        region,
        lang,
        href: pathFor(page, lang, region),
        hreflang: REGIONS[region].locale[lang] ?? lang,
      });
    }
  }
  return out;
}

export { REGIONS, REGION_CODES, defaultLangFor, regionSupportsLang };
export type { Region, RegionOrAll };

/**
 * Path of an app-screen image. IE uses the original real (English) captures in
 * /ie/; UK/BE/NL use the generated mock-ups, one set per language the region
 * offers (<slug>/<lang>/), falling back to the region's default language.
 * The legacy German pages use the root-level originals.
 */
export function shotPath(region: RegionOrAll | undefined, lang: Lang, name: string): string {
  if (!region || region === 'ALL') return `/assets/screenshots/${name}.png`;
  const r = REGIONS[region];
  if (!r.illustrativeScreens) return `/assets/screenshots/${r.slug}/${name}.png`;
  const l = r.langs.includes(lang) ? lang : r.langs[0];
  return `/assets/screenshots/${r.slug}/${l}/${name}.png`;
}
