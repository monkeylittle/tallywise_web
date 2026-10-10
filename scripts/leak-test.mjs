// Build-time leak test: after `npm run build`, every built page of a region must
// only name that region's supermarkets and use that region's currency. Run:
//   npm run build && node scripts/leak-test.mjs
// Exit 1 on any leak. (Legacy /de/ pages and redirect stubs are not checked.)
import { readdirSync, readFileSync, statSync } from 'node:fs';
import { join } from 'node:path';

const ALL = {
  Tesco: /\bTesco\b/i, SuperValu: /\bSuperValu\b/i, Dunnes: /\bDunnes\b/i,
  Aldi: /\bAldi\b/i, Lidl: /\bLidl\b/i, 'M&S': /\bM&amp;S\b|\bM&S\b|Marks (&amp;|&) Spencer/i,
  Centra: /\bCentra\b/i, Spar: /\b(Euro)?Spar\b/i, Asda: /\bAsda\b/i,
  Sainsbury: /\bSainsbury/i, Morrisons: /\bMorrisons\b/i, Iceland: /\bIceland\b/i,
  'Co-op': /\bCo-op\b/i, Waitrose: /\bWaitrose\b/i, Colruyt: /\bColruyt\b/i,
  Delhaize: /\bDelhaize\b/i, Carrefour: /\bCarrefour\b/i, Jumbo: /\bJumbo\b/i,
  'Albert Heijn': /\bAlbert Heijn\b/i, // 'plus' is also a normal word (nl/fr/en/de): only the uppercase brand, or a title-case
  // 'Plus' used as a store in a list (<strong>Plus<, ", Plus", "en Plus"), counts.
  PLUS: /\bPLUS\b|<strong>Plus<|(?:,|\b(?:en|and|et|und)\b) Plus(?![\w-])(?! ?(?:card|kaart|Retail))/,
};
// Allowed chains per region = the chains marked `included` for that country in
// scripts/data/priced-chains.json (the same file regions.ts derives its lists from),
// so a trimmed chain (Lidl/Aldi/Centra/... ) must not be named on any page of the region.
const KEY = { 'Dunnes Stores': 'Dunnes', "Sainsbury's": 'Sainsbury', 'Albert Heijn': 'Albert Heijn' };
const priced = JSON.parse(readFileSync('scripts/data/priced-chains.json', 'utf8'));
const ALLOWED = Object.fromEntries(['ie', 'uk', 'be', 'nl'].map((r) => [r,
  priced.chains.filter((c) => c.country === r.toUpperCase() && c.included).map((c) => KEY[c.chain] ?? c.chain)
    .filter((k) => k in ALL)]));
const CURRENCY = { ie: /£|\bGBP\b/, uk: /€|\bEUR\b/, be: /£|\bGBP\b/, nl: /£|\bGBP\b/ };

function* walk(d) {
  for (const f of readdirSync(d)) {
    const p = join(d, f);
    statSync(p).isDirectory() ? yield* walk(p) : p.endsWith('.html') && (yield p);
  }
}
const strip = (h) => h.replace(/<script[\s\S]*?<\/script>/g, '').replace(/<style[\s\S]*?<\/style>/g, '');

let bad = 0, n = 0;
for (const [region, allowed] of Object.entries(ALLOWED)) {
  for (const file of walk(join('dist', region))) {
    const html = strip(readFileSync(file, 'utf8'));
    if (/http-equiv="refresh"/.test(html)) continue;
    n++;
    // The coupons explainer outside IE legitimately names Irish chains.
    const explainer = region !== 'ie' && /\/coupons\/index\.html$/.test(file);
    const text = html.replace(/<(link|meta)[^>]*>/g, ''); // hreflang etc. carry no store names
    for (const [name, re] of Object.entries(ALL)) {
      if (allowed.includes(name) || explainer && ['SuperValu', 'Dunnes'].includes(name)) continue;
      const m = re.exec(text);
      if (m) { bad++; console.log(`LEAK ${file}: "${m[0]}" (${name}) not a ${region.toUpperCase()} store`); }
    }
    const cur = CURRENCY[region].exec(text);
    if (cur) { bad++; console.log(`LEAK ${file}: currency "${cur[0]}"`); }
  }
}
console.log(`${n} region pages checked, ${bad} leak(s)`);
process.exit(bad ? 1 : 0);
