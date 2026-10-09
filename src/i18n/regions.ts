// Region system: the ONE source of truth for everything that varies by market.
//
// A *region* (IE, UK, BE, NL) is a market the app is published in. Each region
// has its own URL space (/ie/, /uk/, /be/, /nl/), its own supermarkets and
// currency, its own example basket and app screens, and one or more languages
// (Belgium has Dutch + French). Everything region-specific on the site reads
// from here, so the markup never hard-codes a store or a currency.
//
// 'ALL' is a pseudo-region used only by the legacy German pages (/de/…), which
// sit outside the region selector and keep the original multi-country wording.
//
// Store lists mirror the app's `storesForCountry`
// (zavvy_app/lib/core/stores/store_directory.dart) — the source of truth for
// what Tallywise actually supports. Loyalty schemes mirror
// zavvy_app/lib/core/stores/market_copy.dart. France is deliberately absent
// (the apps are not published there).

import type { Lang } from './config';

export const REGION_CODES = ['IE', 'UK', 'BE', 'NL'] as const;
export type Region = (typeof REGION_CODES)[number];
export type RegionOrAll = Region | 'ALL';

export function isRegion(x: string): x is Region {
  return (REGION_CODES as readonly string[]).includes(x);
}

export interface CompareShop {
  code: string;
  name: string;
  price: number;
  color: string;
  /** Text colour on the chip (dark ink for light brand colours). */
  ink?: string;
}

import priced from '../../scripts/data/priced-chains.json';

/**
 * Every region lists only chains we actually hold recent prices for: the ones the
 * refresh script (scripts/refresh-priced-chains.py) marked `included` for that
 * country in scripts/data/priced-chains.json (>= threshold products priced in
 * the last 45 days, loyalty-only and outlier rows excluded, keyed by chain AND
 * country). Candidates keep their display order; unlisted chains are dropped.
 */
function pricedIn(country: Region, candidates: string[]): string[] {
  const ok = new Set(priced.chains.filter((c) => c.country === country && c.included).map((c) => c.chain));
  return candidates.filter((c) => ok.has(c));
}

/** Loyalty schemes, only for chains that made the priced list: [chain, scheme]. */
function loyaltyFor(country: Region, schemes: [string, string][]): string[] {
  const kept = new Set(pricedIn(country, schemes.map(([c]) => c)));
  return schemes.filter(([c]) => kept.has(c)).map(([, s]) => s);
}

export interface RegionDef {
  code: Region;
  /** URL segment: /ie/, /uk/, … */
  slug: string;
  /** Languages offered in this region; the first is the default. */
  langs: Lang[];
  /** hreflang / locale per language: en-IE, nl-BE, … */
  locale: Partial<Record<Lang, string>>;
  currency: { code: 'EUR' | 'GBP'; symbol: '€' | '£' };
  /** Country name per site language (used by the selector and region cards). */
  names: Record<Lang, string>;
  /** The app's real supported stores here. */
  stores: string[];
  /** Loyalty schemes the app knows about for this region, as "Chain Scheme". */
  loyalty: string[];
  /** Coupons (Dunnes Stores / SuperValu vouchers) exist in Ireland only. */
  coupons: boolean;
  /** The (English-only) blog is linked from the nav/footer of English-language regions only. */
  blog: boolean;
  /** Hero card: totals of a real 5-item basket (see scripts/screenshots/data/<region>.json), labelled as an example. IE: same recipe, computed 2026-10-09. */
  compare: CompareShop[];
  /** Units in the example basket (the "N items" in the hero card). */
  basketItems: number;
  /** Stores named in the app-screen alt texts (the stores visible in the screens). */
  shotStores: string[];
  /** Screens: true = generated illustrative renders from real data. */
  illustrativeScreens: boolean;
  /** Timezones that suggest this region (first-visit suggestion only). */
  timezones: string[];
}

export const REGIONS: Record<Region, RegionDef> = {
  IE: {
    code: 'IE',
    slug: 'ie',
    langs: ['en'],
    locale: { en: 'en-IE' },
    currency: { code: 'EUR', symbol: '€' },
    names: { en: 'Ireland', nl: 'Ierland', fr: 'Irlande', de: 'Irland' },
    stores: pricedIn('IE', ['Tesco', 'SuperValu', 'Dunnes Stores', 'Aldi', 'Lidl', 'M&S', 'Centra', 'Spar']),
    loyalty: loyaltyFor('IE', [['Tesco', 'Tesco Clubcard'], ['SuperValu', 'SuperValu Real Rewards'], ['Dunnes Stores', 'Dunnes Rewards'], ['Lidl', 'Lidl Plus']]),
    coupons: true,
    blog: true,
    basketItems: 8,
    compare: [
      { code: 'SV', name: 'SuperValu', price: 19.95, color: '#D4122A' },
      { code: 'DN', name: 'Dunnes', price: 19.19, color: '#1A1A1A' },
      { code: 'TE', name: 'Tesco', price: 19.19, color: '#00539F' },
    ],
    shotStores: ['SuperValu', 'Dunnes Stores', 'Tesco'],
    illustrativeScreens: true,
    timezones: ['Europe/Dublin'],
  },
  UK: {
    code: 'UK',
    slug: 'uk',
    langs: ['en'],
    locale: { en: 'en-GB' },
    currency: { code: 'GBP', symbol: '£' },
    names: { en: 'United Kingdom', nl: 'Verenigd Koninkrijk', fr: 'Royaume-Uni', de: 'Vereinigtes Königreich' },
    stores: pricedIn('UK', ['Tesco', "Sainsbury's", 'Asda', 'Morrisons', 'Aldi', 'Lidl', 'M&S', 'Waitrose', 'Co-op', 'EuroSpar', 'Iceland']),
    loyalty: loyaltyFor('UK', [['Tesco', 'Tesco Clubcard'], ['Sainsbury\'s', "Sainsbury's Nectar"], ['Asda', 'Asda Rewards'], ['Morrisons', 'Morrisons More Card'], ['Lidl', 'Lidl Plus']]),
    coupons: false,
    blog: true,
    basketItems: 8,
    compare: [
      { code: 'AS', name: 'Asda', price: 13.38, color: '#68A51C' },
      { code: 'TE', name: 'Tesco', price: 13.7, color: '#00539F' },
      { code: 'SA', name: "Sainsbury's", price: 13.8, color: '#ED8B00', ink: '#1B2140' },
    ],
    shotStores: ['Tesco', "Sainsbury's", 'Asda'],
    illustrativeScreens: true,
    timezones: ['Europe/London'],
  },
  BE: {
    code: 'BE',
    slug: 'be',
    langs: ['nl', 'fr', 'en'],
    locale: { nl: 'nl-BE', fr: 'fr-BE', en: 'en-BE' },
    currency: { code: 'EUR', symbol: '€' },
    names: { en: 'Belgium', nl: 'België', fr: 'Belgique', de: 'Belgien' },
    stores: pricedIn('BE', ['Colruyt', 'Delhaize', 'Carrefour', 'Jumbo', 'Aldi', 'Lidl']),
    loyalty: loyaltyFor('BE', [['Lidl', 'Lidl Plus']]), // none of the listed BE chains has a loyalty scheme we record
    coupons: false,
    blog: false,
    basketItems: 6,
    compare: [
      { code: 'CO', name: 'Colruyt', price: 18.5, color: '#E20613' },
      { code: 'DE', name: 'Delhaize', price: 18.68, color: '#B01E2E' },
      { code: 'JU', name: 'Jumbo', price: 19.44, color: '#EEB717', ink: '#1B2140' },
    ],
    shotStores: ['Colruyt', 'Delhaize', 'Jumbo'],
    illustrativeScreens: true,
    timezones: ['Europe/Brussels'],
  },
  NL: {
    code: 'NL',
    slug: 'nl',
    langs: ['nl', 'en'],
    locale: { nl: 'nl-NL', en: 'en-NL' },
    currency: { code: 'EUR', symbol: '€' },
    names: { en: 'Netherlands', nl: 'Nederland', fr: 'Pays-Bas', de: 'Niederlande' },
    stores: pricedIn('NL', ['Albert Heijn', 'Jumbo', 'Plus', 'Aldi', 'Lidl']),
    loyalty: loyaltyFor('NL', [['Albert Heijn', 'Albert Heijn Bonuskaart'], ['Lidl', 'Lidl Plus']]),
    coupons: false,
    blog: false,
    basketItems: 7,
    compare: [
      { code: 'JU', name: 'Jumbo', price: 21.13, color: '#EEB717', ink: '#1B2140' },
      { code: 'AH', name: 'Albert Heijn', price: 22.13, color: '#1791D0' },
    ],
    shotStores: ['Albert Heijn', 'Jumbo'],
    illustrativeScreens: true,
    timezones: ['Europe/Amsterdam'],
  },
};

/** Default language per region (the first listed). */
export function defaultLangFor(region: Region): Lang {
  return REGIONS[region].langs[0];
}

export function regionSupportsLang(region: Region, lang: Lang): boolean {
  return REGIONS[region].langs.includes(lang);
}

// ── formatting ───────────────────────────────────────────────────────────

/** "€4.20" (en), "€4,20" (nl), "4,20 €" (fr/de); "£3.30" for the UK. */
export function money(amount: number, region: RegionOrAll, lang: Lang): string {
  const sym = region === 'UK' ? '£' : '€';
  const n = amount.toFixed(2);
  if (lang === 'fr' || lang === 'de') return `${n.replace('.', ',')} ${sym}`;
  if (lang === 'nl') return `${sym}${n.replace('.', ',')}`;
  return `${sym}${n}`;
}

/** Whole-unit price for copy like "3 for €5": "€5" / "5 €" / "£5". */
export function moneyWhole(amount: number, region: RegionOrAll, lang: Lang): string {
  const sym = region === 'UK' ? '£' : '€';
  return lang === 'fr' || lang === 'de' ? `${amount} ${sym}` : `${sym}${amount}`;
}

const AND: Record<Lang, string> = { en: 'and', nl: 'en', fr: 'et', de: 'und' };

/** "A, B and C" in the page language. */
export function listJoin(items: string[], lang: Lang): string {
  if (items.length <= 1) return items.join('');
  return `${items.slice(0, -1).join(', ')} ${AND[lang]} ${items[items.length - 1]}`;
}

const escapeAmp = (s: string) => s.replaceAll('&', '&amp;');

// ── copy tokens ──────────────────────────────────────────────────────────
//
// Copy in src/i18n/content/*.ts contains %TOKENS% for the few places where the
// market shows through. tokensFor() gives their value for a region + language.
//
//   %MKT%        the market as a noun phrase after the copy's own preposition
//                (en "across Ireland", nl "in Ierland"); the full four-country
//                list for the legacy German pages
//   %MKT_IN%     French "en Irlande" / "au Royaume-Uni" (with its preposition)
//   %MKT_OF%     French "d’Irlande" / "du Royaume-Uni"
//   %CUR%        the currency noun ("euro", "pound"; both for the legacy pages)
//   %P5% %P4%    whole-unit example prices ("€5", "£5", "5 €")
//   %ITEMS%      units in the example basket
//   %SAVED%      the example basket's saving, formatted
//   %STORE_LIST% / %STORE_LIST_RAW%   the region's real stores ("A, B and C"),
//                HTML-escaped / raw (for <title>/<meta description>)
//   %SHOT_STORES% the stores visible in the region's app screens (alt texts)
//   %LOYALTY%    the region's loyalty schemes ("Tesco Clubcard, Nectar and …")

type Tokens = Record<string, string>;

const MKT: Record<RegionOrAll, Record<Lang, string>> = {
  IE: { en: 'Ireland', nl: 'Ierland', fr: 'Irlande', de: 'Irland' },
  UK: { en: 'the UK', nl: 'het VK', fr: 'le Royaume-Uni', de: 'dem Vereinigten Königreich' },
  BE: { en: 'Belgium', nl: 'België', fr: 'Belgique', de: 'Belgien' },
  NL: { en: 'the Netherlands', nl: 'Nederland', fr: 'les Pays-Bas', de: 'den Niederlanden' },
  ALL: {
    en: 'Ireland, the UK, Belgium and the Netherlands',
    nl: 'Ierland, het VK, België en Nederland',
    fr: 'Irlande, Royaume-Uni, Belgique et Pays-Bas',
    de: 'Irland, dem Vereinigten Königreich, Belgien und den Niederlanden',
  },
};

const MKT_IN_FR: Record<RegionOrAll, string> = {
  IE: 'en Irlande',
  UK: 'au Royaume-Uni',
  BE: 'en Belgique',
  NL: 'aux Pays-Bas',
  ALL: 'en Irlande, au Royaume-Uni, en Belgique et aux Pays-Bas',
};
const MKT_OF_FR: Record<RegionOrAll, string> = {
  IE: 'd’Irlande',
  UK: 'du Royaume-Uni',
  BE: 'de Belgique',
  NL: 'des Pays-Bas',
  ALL: 'd’Irlande, du Royaume-Uni, de Belgique et des Pays-Bas',
};

const CUR: Record<RegionOrAll, Record<Lang, string>> = {
  IE: { en: 'euro', nl: 'euro', fr: 'euro', de: 'Euro' },
  UK: { en: 'pound', nl: 'pond', fr: 'livre', de: 'Pfund' },
  BE: { en: 'euro', nl: 'euro', fr: 'euro', de: 'Euro' },
  NL: { en: 'euro', nl: 'euro', fr: 'euro', de: 'Euro' },
  ALL: {
    en: 'euro and pound',
    nl: 'euro en pond',
    fr: 'euro et chaque livre',
    de: 'Euro und jedes Pfund',
  },
};

/** The legacy pages fall back to the Irish example basket and store list. */
function dataRegion(region: RegionOrAll): Region {
  return region === 'ALL' ? 'IE' : region;
}

export function savedAmount(region: RegionOrAll): number {
  const prices = REGIONS[dataRegion(region)].compare.map((s) => s.price);
  return Math.round((Math.max(...prices) - Math.min(...prices)) * 100) / 100;
}

/** A region's store list; the legacy German pages (ALL) get the de-duplicated union of all four. */
export function storesFor(region: RegionOrAll): string[] {
  return region === 'ALL' ? [...new Set(REGION_CODES.flatMap((r) => REGIONS[r].stores))] : REGIONS[region].stores;
}
export function loyaltyOf(region: RegionOrAll): string[] {
  return region === 'ALL' ? [...new Set(REGION_CODES.flatMap((r) => REGIONS[r].loyalty))] : REGIONS[region].loyalty;
}

export function tokensFor(region: RegionOrAll, lang: Lang): Tokens {
  const r = REGIONS[dataRegion(region)];
  const stores = storesFor(region);
  const loyalty = loyaltyOf(region);
  return {
    '%MKT%': MKT[region][lang],
    '%MKT_IN%': lang === 'fr' ? MKT_IN_FR[region] : MKT[region][lang],
    '%MKT_OF%': lang === 'fr' ? MKT_OF_FR[region] : MKT[region][lang],
    '%CUR%': CUR[region][lang],
    '%P5%': moneyWhole(5, region, lang),
    '%P4%': moneyWhole(4, region, lang),
    '%ITEMS%': String(r.basketItems),
    '%SAVED%': money(savedAmount(region), region, lang),
    '%STORE_LIST%': escapeAmp(listJoin(stores, lang)),
    '%STORE_LIST_RAW%': listJoin(stores, lang),
    '%SHOT_STORES%': escapeAmp(listJoin(r.shotStores, lang)),
    '%LOYALTY%': listJoin(loyalty, lang),
  };
}

/** Replace every %TOKEN% in a string. */
export function applyTokens(s: string, tokens: Tokens): string {
  let out = s;
  for (const [k, v] of Object.entries(tokens)) out = out.replaceAll(k, v);
  return out;
}
