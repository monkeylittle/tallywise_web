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

## Screenshots

`public/assets/screenshots/<region>/{scan,list,compare,deals}.png` are
**illustrative mock-ups**, not device screenshots: HTML recreations of the four
app screens filled with real recent prices, rendered by
`scripts/screenshots/render.py` from `scripts/screenshots/data/<region>.json`
(produced from a read-only pull of the pricing table). Each region page says so.
The root-level `scan/list/compare/deals.png` are the original real Irish app
screenshots and still serve the legacy German pages.

## Checks

```bash
npm run build && npm run check && node scripts/leak-test.mjs
```

`leak-test.mjs` fails if a built region page names another region's supermarket
or uses the wrong currency symbol.
