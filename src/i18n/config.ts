// Language + routing configuration for the multilingual site.
//
// URL scheme (decided): English at the root (/, /how-it-works/); the other
// languages under a prefix (/nl/, /fr/coupons/, /de/savings/). URL *slugs* stay
// English across all languages — only the prefix changes — so links are stable
// and the routing stays simple.

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

/** Build the URL path for a page in a given language (always trailing-slashed). */
export function pathFor(page: PageKey, lang: Lang): string {
  const slug = slugFor(page);
  const prefix = lang === DEFAULT_LANG ? '' : `/${lang}`;
  const tail = slug ? `/${slug}/` : '/';
  return `${prefix}${tail}` || '/';
}

/** Every language variant of a page — for hreflang alternates and the switcher. */
export function altsFor(page: PageKey): { lang: Lang; href: string }[] {
  return LANG_CODES.map((lang) => ({ lang, href: pathFor(page, lang) }));
}

// Supported markets and their store lists — mirrors the app's
// `storesForCountry` (lib/core/stores/store_directory.dart), the source of
// truth for what's actually supported. Store names are language-neutral; the
// country display names are translated (content.stores.countryNames).
export const COUNTRIES = [
  { code: 'IE', stores: ['Tesco', 'Dunnes Stores', 'SuperValu', 'Aldi', 'Lidl', 'M&S', 'Centra', 'Spar'] },
  { code: 'UK', stores: ['Tesco', "Sainsbury's", 'Asda', 'Morrisons', 'Aldi', 'Lidl', 'M&S', 'Waitrose', 'Co-op'] },
  { code: 'BE', stores: ['Delhaize', 'Carrefour', 'Jumbo', 'Aldi', 'Lidl'] },
  { code: 'NL', stores: ['Albert Heijn', 'Jumbo', 'Plus', 'Aldi', 'Lidl'] },
] as const;

export type CountryCode = (typeof COUNTRIES)[number]['code'];
export const COUNTRY_CODES = COUNTRIES.map((c) => c.code) as CountryCode[];

// Country pre-selected on first load per site language (English → Ireland, the
// continental languages → Belgium). The client script refines this from the
// browser region and remembers an explicit choice; this is only the fallback.
export const DEFAULT_COUNTRY: Record<Lang, CountryCode> = {
  en: 'IE',
  nl: 'BE',
  fr: 'BE',
  de: 'BE',
};
