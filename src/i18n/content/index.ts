import { en } from './en';
import { nl } from './nl';
import { fr } from './fr';
import { de } from './de';
import type { Lang } from '../config';
import { pathFor } from '../config';
import { REGIONS, applyTokens, tokensFor, type RegionOrAll } from '../regions';
import { site } from '../../site';

// English is the source of truth for the content shape; nl/fr/de are annotated
// `: SiteContent` in their own files, so any missing/mistyped key fails the build.
export type SiteContent = typeof en;

const RAW: Record<Lang, SiteContent> = { en, nl, fr, de };

/** Raw, region-agnostic content (tokens such as %MKT% are NOT resolved). */
export function getContent(lang: Lang): SiteContent {
  return RAW[lang];
}

function mapStrings<T>(value: T, fn: (s: string) => string): T {
  if (typeof value === 'string') return fn(value) as unknown as T;
  if (Array.isArray(value)) return value.map((v) => mapStrings(v, fn)) as unknown as T;
  if (value && typeof value === 'object') {
    const out: Record<string, unknown> = {};
    for (const [k, v] of Object.entries(value as Record<string, unknown>)) out[k] = mapStrings(v, fn);
    return out as T;
  }
  return value;
}

/**
 * The page content for a region + language: every %TOKEN% resolved for that
 * market (see tokensFor in ../regions.ts), plus the few structural differences:
 *
 *   - the coupon bullet in the Bronze list is dropped where coupons don't exist
 *   - the "which supermarkets are covered" list is the region's real store list
 *
 * 'ALL' is the legacy German-pages pseudo-region: original multi-country wording.
 */
export function getRegionContent(region: RegionOrAll, lang: Lang): SiteContent {
  const tokens = tokensFor(region, lang);
  const c = mapStrings(RAW[lang], (s) => applyTokens(s, tokens));

  if (region !== 'ALL') {
    const def = REGIONS[region];
    if (!def.coupons) {
      // Bronze bullet #4 is "Save & share money-off coupons" in every language.
      c.home.membership.bronze = c.home.membership.bronze.filter((_, i) => i !== 3);
    }
    const original = c.savings.covered.list;
    c.savings.covered.list =
      region === 'IE'
        ? original.slice(0, -1) // drop the "UK chains" bullet — Irish region lists Irish stores
        : def.stores.map((s) => `<strong>${s.replaceAll('&', '&amp;')}</strong>`);
    c.savings.covered.p = c.savings.covered.pRegion;
  }
  return c;
}

/**
 * Resolve placeholders in a content HTML string for a language:
 *   %EMAIL%   → the contact address (from site.ts)
 *   %PRIVACY% → the localized Privacy Policy path
 *   %TERMS%   → the localized Terms path
 * Harmless on strings without placeholders, so it can wrap every set:html value.
 */
export function resolve(s: string, lang: Lang, region?: RegionOrAll): string {
  return s
    .replaceAll('%EMAIL%', site.email)
    .replaceAll('%PRIVACY%', pathFor('privacy', lang, region))
    .replaceAll('%TERMS%', pathFor('terms', lang, region));
}
