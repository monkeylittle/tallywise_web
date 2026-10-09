# Regions

The site has a region selector (Ireland, UK, Belgium, Netherlands). The region is
in the URL; language lives inside the region.

| URL | Region | Languages |
|---|---|---|
| `/` | chooser (`x-default`) | en |
| `/ie/…` | Ireland | en |
| `/uk/…` | United Kingdom | en |
| `/be/…`, `/be/fr/…`, `/be/en/…` | Belgium | nl (default), fr, en |
| `/nl/…`, `/nl/en/…` | Netherlands | nl (default), en |
| `/de/…` | legacy German, language-only (no region) | de |

Slugs stay English (`how-it-works`, `coupons`, `savings`, `about`, `support`, `privacy`, `terms`).

## Where things live

- `src/i18n/regions.ts` — the single source of truth per region: stores, loyalty
  schemes, currency, languages, hreflang locale, example-basket card, which
  store names appear on the mock-up screenshots, whether coupons exist.
- `src/i18n/content/{en,nl,fr,de}.ts` — copy with `%TOKENS%` (`%MKT%`, `%CUR%`,
  `%P5%`, `%SAVED%`, `%STORE_LIST%`, `%LOYALTY%`, `%SHOT_STORES%` …) resolved per
  region + language by `getRegionContent(region, lang)`.
- `src/i18n/config.ts` — `pathFor(page, lang, region)`, `regionHref`, `altsFor`,
  `allVariants` (hreflang cluster), `shotPath`.
- `src/pages/[...path].astro` — builds the chooser, every region page, the
  legacy `/de/` pages and the redirect stubs for pre-region URLs.

## Behaviour

- First visit to `/`: chooser; the timezone/browser language only *suggests* a
  region (banner), it never redirects. A stored choice (`localStorage.tw_region`)
  redirects `/` to that region; `/?choose=1` always shows the chooser.
- Coupons exist in Ireland only. Elsewhere `/<region>/coupons/` is a short
  `noindex` explainer, left out of hreflang and the sitemap, and the nav hides the link.
- Old URLs (`/how-it-works/`, `/fr/…`) are static meta-refresh + canonical stubs
  into `/ie/…` and `/be/fr/…`. `/nl/…` is now the Netherlands region.

## Store lists (BE, NL)

BE and NL list only chains we hold recent prices for. `scripts/refresh-priced-chains.py`
(read-only scan of `zavvy-prod-pricing`) counts distinct products priced in the last 45
days per **country + chain** (loyalty-only and outlier rows excluded) and writes
`scripts/data/priced-chains.json`; a chain is `included` at >= 500 products. `regions.ts`
derives the BE/NL store lists from that file (`pricedIn`). Re-run the script, rebuild, done.
IE and UK lists are hand-maintained and unchanged.

## Screenshots

`public/assets/screenshots/<region>/<lang>/{scan,list,compare,deals}.png` for UK (en),
BE (nl, fr, en), NL (nl, en) are **illustrative mock-ups**: HTML recreations of the four app
screens with real recent prices (`scripts/screenshots/data/<region>.json`), rendered by
`scripts/screenshots/render.py`. UI strings come from the app's own ARBs
(`zavvy_app/lib/l10n/app_{en,nl,fr}.arb`); money is formatted like the app (`€3.69`, dot, in
every language). The only non-ARB string is the user-named list title. Each image carries a
localised "Illustrative" pill. IE uses the original real English captures in
`public/assets/screenshots/ie/`; the legacy German pages use the root-level originals.
`shotPath(region, lang, name)` picks the file (falls back to the region's default language).

## Checks

```bash
npm run build && npm run check && node scripts/leak-test.mjs && python3 scripts/layout-check.py
```

`leak-test.mjs` fails if a built region page names another region's supermarket
or uses the wrong currency symbol. BE/NL may only name chains in `priced-chains.json` (so no
Aldi/Lidl/Carrefour/PLUS there); `layout-check.py` checks the phone header at 320-768px.
