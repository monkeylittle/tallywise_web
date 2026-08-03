import { en } from './en';
import { nl } from './nl';
import { fr } from './fr';
import { de } from './de';
import type { Lang } from '../config';
import { pathFor } from '../config';
import { site } from '../../site';

// English is the source of truth for the content shape; nl/fr/de are annotated
// `: SiteContent` in their own files, so any missing/mistyped key fails the build.
export type SiteContent = typeof en;

const RAW: Record<Lang, SiteContent> = { en, nl, fr, de };

export function getContent(lang: Lang): SiteContent {
  return RAW[lang];
}

/**
 * Resolve placeholders in a content HTML string for a language:
 *   %EMAIL%   → the contact address (from site.ts)
 *   %PRIVACY% → the localized Privacy Policy path
 *   %TERMS%   → the localized Terms path
 * Harmless on strings without placeholders, so it can wrap every set:html value.
 */
export function resolve(s: string, lang: Lang): string {
  return s
    .replaceAll('%EMAIL%', site.email)
    .replaceAll('%PRIVACY%', pathFor('privacy', lang))
    .replaceAll('%TERMS%', pathFor('terms', lang));
}
