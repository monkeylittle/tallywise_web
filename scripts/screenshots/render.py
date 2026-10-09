#!/usr/bin/env python3
"""Render the illustrative app mock-ups for each region.

HTML/CSS recreations of four app screens (scan = home, list, compare, deals) at
592x1280, filled from data/<region>.json (a read-only pull of real recent prices
- see data/README.md). Output: public/assets/screenshots/<region>/<name>.png.
Chromium via cloakbrowser (file:// goto; set_content hangs under its wrapper).

UI strings are the app's REAL translations, read from zavvy_app/lib/l10n/app_{en,nl,fr}.arb
(keys listed in STRINGS), so the mock-ups use the app's own wording. Money is formatted the way
the app does it (symbol + toStringAsFixed(2): "EUR 3.69" style with a dot, in every language).
Output: public/assets/screenshots/<region>/<lang>/<screen>.png for UK (en), BE (nl, fr, en), NL (nl, en).
IE keeps the original real captures (public/assets/screenshots/ie/).

Usage: python3 scripts/screenshots/render.py [uk be nl]
"""
import html, json, pathlib, re, sys
import cloakbrowser

HERE = pathlib.Path(__file__).resolve().parent
SITE = HERE.parent.parent
LOGOS = SITE.parent / "zavvy_app" / "assets" / "logos"
OUT = SITE / "public" / "assets" / "screenshots"
TMP = HERE / ".tmp"

LOGO_FILES = {
    "tesco": "tesco.svg", "sainsburys": "sainsburys.svg", "morrisons": "morrisons.svg",
    "aldi": "aldi.png", "lidl": "lidl.svg", "dunnes": "dunnes.png", "supervalu": "supervalu.jpg",
    "centra": "centra.jpg", "spar": "spar.png", "ms": "ms.svg", "coop": "coop.svg",
    "delhaize": "delhaize.svg", "carrefour": "carrefour.svg", "jumbo": "jumbo.svg",
}
# No bundled logo in the app: a lettered chip, like the site's compare card.
CHIPS = {"asda": ("#78BE20", "#fff", "A"), "iceland": ("#E0001B", "#fff", "I"),
         "colruyt": ("#F58220", "#fff", "C"), "albertheijn": ("#00A0E2", "#fff", "AH"),
         "plus": ("#E30613", "#fff", "P")}

e = html.escape
ARB = SITE.parent / "zavvy_app" / "lib" / "l10n"
LANGS = {"uk": ["en"], "be": ["nl", "fr", "en"], "nl": ["nl", "en"]}
STRINGS = ["homeGreeting", "homeScanBarcode", "homeScanBarcodeSubtitle", "homeSnapReceipt",
           "homeSnapReceiptSubtitle", "homeViewBasket", "homeGatheringPrices", "dealsTitle",
           "productPricesNearby", "productCheapestAt", "productSavingVs", "productCheapest",
           "productAddToBasket", "productAddToListBtn", "listProgressTicked", "listPriceEach",
           "listEstimatedTotal", "listAddItems", "dealsLoyaltyCard", "basketTitle", "homeItemCount"]
# Weekday names as intl renders them in the app (DateFormat.EEEE), fixed day: Friday.
WEEKDAY = {"en": "Friday", "nl": "vrijdag", "fr": "vendredi"}
STAMP = {"en": "Illustrative", "nl": "Illustratief", "fr": "Illustratif"}
# User data (a list the user named), not UI: the one string not taken from the ARBs.
LIST_TITLE = {"en": "Weekly shop", "nl": "Weekboodschappen", "fr": "Courses de la semaine"}


class T:
    """ARB lookups for one language with {placeholder} and simple ICU plural handling."""
    def __init__(self, lang):
        self.d = json.loads((ARB / f"app_{lang}.arb").read_text())
        for k in STRINGS:
            assert k in self.d, (lang, k)

    def __call__(self, key, **kw):
        s = self.d[key]
        m = re.fullmatch(r"\{count, plural, =1\{(.*?)\}\s*other\{(.*)\}\}", s)
        if m:
            s = m.group(1) if kw["count"] == 1 else m.group(2)
        for k, v in kw.items():
            s = s.replace("{" + k + "}", str(v))
        return s


def money(v, cur, _dec=None):
    return f"{cur}{v:.2f}"      # the app: '$symbol${(minor / 100).toStringAsFixed(2)}' in every language


def logo(chain, size=27):
    if chain in LOGO_FILES:
        return (f'<img src="{(LOGOS / LOGO_FILES[chain]).as_uri()}" '
                f'style="width:{size}px;height:{size}px;border-radius:50%;object-fit:contain;background:#fff">')
    bg, fg, t = CHIPS[chain]
    return (f'<span style="width:{size}px;height:{size}px;border-radius:50%;background:{bg};color:{fg};'
            f'display:grid;place-items:center;font:600 {size*0.4:.0f}px Fredoka">{e(t)}</span>')


# Lucide icon paths (the app uses Lucide), drawn inline.
ICONS = {
    "receipt": '<path d="M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z"/><path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"/><path d="M12 17.5v-11"/>',
    "ticket": '<path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"/><path d="M13 5v2"/><path d="M13 17v2"/><path d="M13 11v2"/>',
    "grid": '<rect width="7" height="7" x="3" y="3" rx="1"/><rect width="7" height="7" x="14" y="3" rx="1"/><rect width="7" height="7" x="14" y="14" rx="1"/><rect width="7" height="7" x="3" y="14" rx="1"/>',
    "checks": '<path d="m3 17 2 2 4-4"/><path d="m3 7 2 2 4-4"/><path d="M13 6h8"/><path d="M13 12h8"/><path d="M13 18h8"/>',
    "camera": '<path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"/><circle cx="12" cy="13" r="3"/>',
    "bag": '<path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/>',
    "bell": '<path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/>',
    "kebab": '<circle cx="12" cy="5" r="1.3"/><circle cx="12" cy="12" r="1.3"/><circle cx="12" cy="19" r="1.3"/>',
    "dots": '<circle cx="5" cy="12" r="1.3"/><circle cx="12" cy="12" r="1.3"/><circle cx="19" cy="12" r="1.3"/>',
    "scan": '<path d="M3 7V5a2 2 0 0 1 2-2h2"/><path d="M17 3h2a2 2 0 0 1 2 2v2"/><path d="M21 17v2a2 2 0 0 1-2 2h-2"/><path d="M7 21H5a2 2 0 0 1-2-2v-2"/><path d="M7 12h10"/>',
    "zap": '<path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"/>',
    "plus": '<path d="M5 12h14"/><path d="M12 5v14"/>',
    "back": '<path d="m15 18-6-6 6-6"/>',
    "down": '<path d="m6 9 6 6 6-6"/>',
    "arrow": '<path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>',
    "userplus": '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M19 8v6"/><path d="M22 11h-6"/>',
    "listplus": '<path d="M11 12H3"/><path d="M16 6H3"/><path d="M16 18H3"/><path d="M18 9v6"/><path d="M21 12h-6"/>',
}


def ic(name, size=18, color="currentColor", sw=2):
    return (f'<svg width="{size}" height="{size}" viewBox="0 0 24 24" fill="none" stroke="{color}" stroke-width="{sw}" '
            f'stroke-linecap="round" stroke-linejoin="round" style="flex:none;display:block">{ICONS[name]}</svg>')


def badge(n):
    return (f'<span style="position:absolute;top:-6px;right:-7px;min-width:13px;height:13px;border-radius:7px;background:#4a9ff5;'
            f'color:#fff;font:600 7.5px/13px \'DM Sans\';text-align:center;padding:0 3px">{n}</span>')


STATUS = ('<span style="display:flex;align-items:center;gap:5px">'
          '<svg width="17" height="11" viewBox="0 0 17 11"><rect x="0" y="7" width="3" height="4" rx=".8" fill="#111"/><rect x="4.7" y="5" width="3" height="6" rx=".8" fill="#111"/>'
          '<rect x="9.4" y="2.5" width="3" height="8.5" rx=".8" fill="#111"/><rect x="14" y="0" width="3" height="11" rx=".8" fill="#111"/></svg>'
          '<svg width="16" height="11" viewBox="0 0 16 11" fill="none" stroke="#111" stroke-width="1.7" stroke-linecap="round"><path d="M1.2 4a9.5 9.5 0 0 1 13.6 0"/><path d="M3.6 6.5a6 6 0 0 1 8.8 0"/><circle cx="8" cy="9.4" r="1" fill="#111" stroke="none"/></svg>'
          '<span style="display:inline-block;width:22px;height:11px;border-radius:3.5px;background:#111;color:#fff;font:700 7.5px/11px \'DM Sans\';text-align:center">86</span></span>')

CSS = """
@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Fredoka:wght@500;600;700&display=swap');
*{box-sizing:border-box;margin:0;padding:0}
body{width:296px;height:640px;overflow:hidden;background:#f6f8fc;font-family:'DM Sans',system-ui;color:#1b2142;position:relative}
.sb{display:flex;justify-content:space-between;align-items:center;padding:14px 26px 0 30px;font-weight:600;font-size:11px;height:34px}
.card{overflow-wrap:anywhere}

h1,h2,h3,.f{font-family:'Fredoka',system-ui}
.card{background:#fff;border:1px solid #e2e7f3;border-radius:16px}
.mut{color:#7a82a3}
.nav{position:absolute;left:0;right:0;bottom:0;height:60px;background:#f6f8fc;display:flex;justify-content:space-around;align-items:center}
.nav svg{color:#2a3158}
.fab{position:absolute;left:110px;bottom:20px;width:76px;height:76px;border-radius:50%;background:#4a9ff5;box-shadow:0 6px 14px #4a9ff566;color:#fff;display:grid;place-items:center;}
.ill{position:absolute;top:11px;left:50%;transform:translateX(-50%);font:600 7.5px "DM Sans";letter-spacing:.06em;text-transform:uppercase;color:#6b7391;background:#fff;border:1px solid #d8def0;border-radius:9px;padding:2px 8px;z-index:9;white-space:nowrap}
"""


def shell(body):
    return f'<!doctype html><meta charset="utf-8"><style>{CSS}</style><body>' \
           f'<div class="sb"><span>9:41</span>{STATUS}</div>{body}</body>'



def stamp(lang):
    return f'<div class="ill">{e(STAMP[lang])}</div>'


def header():
    return (f'<div style="display:flex;align-items:center;padding:12px 16px 0"><img src="{(SITE/'public'/'app-icon.png').as_uri()}" '
            'style="width:26px;height:26px;margin-right:10px"><h1 style="font-size:23px;font-weight:500;flex:1">Tallywise</h1>'
            f'<span style="position:relative;margin-right:14px;color:#1b2142">{ic("bag",19)}{badge(12)}</span>'
            f'<span style="position:relative;margin-right:10px;color:#1b2142">{ic("bell",19)}{badge(1)}</span><span style="color:#1b2142">{ic("kebab",17)}</span></div>')


def actions(t, top="14px"):
    return f'''<div style="display:flex;gap:10px;padding:{top} 16px 0">
 <div class="card" style="flex:1;padding:12px 11px;min-height:100px"><div style="color:#4a9ff5">{ic("scan",20)}</div><div class="f" style="font-weight:600;font-size:11.5px;margin-top:10px;line-height:1.2">{e(t("homeScanBarcode"))}</div><div class="mut" style="font-size:9.5px;margin-top:3px;line-height:1.25">{e(t("homeScanBarcodeSubtitle"))}</div></div>
 <div class="card" style="flex:1;padding:12px 11px;min-height:100px"><div style="color:#4a9ff5">{ic("receipt",20)}</div><div class="f" style="font-weight:600;font-size:11.5px;margin-top:10px;line-height:1.2">{e(t("homeSnapReceipt"))}</div><div class="mut" style="font-size:9.5px;margin-top:3px;line-height:1.25">{e(t("homeSnapReceiptSubtitle"))}</div></div></div>'''


def screen_scan(d, t, lang):
    s = d["scan"]
    return shell(header() + f'''
<div class="mut" style="padding:20px 16px 0;font-size:10.5px">{e(WEEKDAY[lang])} · {e(s["store"])}</div>
<h2 style="padding:3px 16px 0;font-size:19px;font-weight:600;line-height:1.15">{e(t("homeGreeting"))}</h2>
<div style="margin:16px;background:#4a9ff5;border-radius:24px;padding:18px 16px 16px">
 <div style="font-size:9.5px;letter-spacing:.08em;color:#1b3a6e;text-transform:uppercase">{e(t("basketTitle"))}</div>
 <div class="f" style="font-size:25px;font-weight:600;margin:10px 0 6px">{e(t("homeItemCount", count=s["items"]))}</div>
 <div style="font-size:10.5px;line-height:1.35;margin-bottom:12px">{e(t("homeGatheringPrices"))}</div>
 <span style="display:inline-flex;align-items:center;gap:6px;background:#1b2142;color:#fff;border-radius:20px;padding:8px 14px;font-size:11px;font-weight:600">{e(t("homeViewBasket"))} {ic("arrow",12,"#fff",2.5)}</span></div>
''' + actions(t, "0") + f'''
<h2 style="padding:20px 16px 0;font-size:15px;font-weight:600">{e(t("dealsTitle"))}</h2>
<div class="nav">{ic("receipt",22)}{ic("ticket",22)}<span style="width:70px"></span>{ic("grid",22)}{ic("checks",22)}</div><div class="fab">{ic("plus",34,"#fff",2)}</div>''' + stamp(lang))


def screen_list(d, t, lang):
    cur = d["cur"]
    L = d["list"]
    rows = "".join(f'''<div style="display:flex;align-items:center;padding:9px 12px 9px 24px;gap:14px">
 <span style="width:15px;height:15px;border:2px solid #7a82a3;border-radius:3px;flex:none"></span>
 <div style="flex:1;min-width:0"><div style="font-size:12.5px;line-height:1.3">{e(i["name"])}</div>
 <div class="mut" style="font-size:10px">{e(i["brand"])} · {e(i["size"])}</div>
 <div style="font-size:10px;font-weight:600">{money(i["qty"]*i["price"],cur)}{f' <span style="color:#b6bbd0;font-weight:400">· {e(t("listPriceEach", price=money(i["price"],cur)))}</span>' if i["qty"]>1 else ""}</div></div>
 <div class="mut" style="font-size:11px;white-space:nowrap">− &nbsp;{i["qty"]}&nbsp; +</div></div>''' for i in L["items"])
    total = sum(i["qty"] * i["price"] for i in L["items"])
    return shell(f'''
<div style="display:flex;align-items:center;padding:12px 16px 0"><span style="color:#1b2142">{ic("back",20)}</span>
<h1 style="flex:1;text-align:center;font-size:15.5px;font-weight:600">{e(LIST_TITLE[lang])}</h1><span style="display:flex;gap:10px;color:#1b2142">{ic("userplus",19)}{ic("dots",19)}</span></div>
<div class="mut" style="padding:18px 13px 6px;font-size:10px">{e(t("listProgressTicked", done=0, total=len(L["items"])))}</div>
<div style="margin:0 13px 6px;height:5px;border-radius:3px;background:#eaeefa"></div>
{rows}
<div style="margin:12px 10px 0;background:#eaeffb;border:1px solid #dde3f3;border-radius:16px;padding:14px;display:flex;justify-content:space-between;align-items:center">
 <span style="font-size:11.5px;font-weight:500">{e(t("listEstimatedTotal"))}</span><span class="f" style="font-size:17px">{money(total,cur)}</span></div>
<div style="position:absolute;right:10px;bottom:14px;background:#4a9ff5;color:#fff;border-radius:16px;padding:12px 16px;font-weight:600;font-size:12px">+ &nbsp;{e(t("listAddItems"))}</div>''' + stamp(lang))


def screen_compare(d, t, lang):
    cur = d["cur"]
    C = d["compare_fr"] if lang == "fr" and "compare_fr" in d else d["compare"]  # fr: a product whose Belgian name is neutral, not Dutch
    rows = C["rows"]
    best = min(r["price"] for r in rows)
    top = [r for r in rows if r["price"] == best][0]
    other = [r for r in rows if r["price"] > best]
    nxt = min(other, key=lambda o: o["price"]) if other else None
    saving_line = e(t("productSavingVs", amount=money(nxt["price"] - best, cur), chain=nxt["label"])) if nxt else ""
    lis = "".join(f'''<div style="display:flex;align-items:center;gap:10px;padding:9px 12px;border-bottom:1px solid #eef0f8">{logo(r["chain"])}
 <div style="flex:1;min-width:0"><div style="font-weight:600;font-size:12px">{e(r["label"])}</div><div class="mut" style="font-size:9.5px">{r["km"]} km</div></div>
 {f'<span style="background:#d5f0e0;color:#1c8a4c;border-radius:12px;padding:3px 8px;font-size:9px;font-weight:600;margin-right:6px;white-space:nowrap">{e(t("productCheapest"))}</span>' if r["price"]==best else ""}
 <span class="f" style="font-size:14px;font-weight:600">{money(r["price"],cur)}</span></div>''' for r in rows)
    return shell(f'''
<div style="background:#eaeffb;height:30px"></div>
<div style="padding:0 16px"><span style="display:inline-block;background:#d5f0e0;color:#1c8a4c;border-radius:16px;padding:6px 12px;font-size:11px;font-weight:700"><span style="display:inline-flex;align-items:center;gap:5px">{ic("zap",13,"#1c8a4c",2.2)}{e(t("productCheapestAt", chain=top["label"]))}</span></span>
<h1 style="font-size:19px;font-weight:600;margin-top:10px;line-height:1.15">{e(C["name"])}</h1>
<div class="mut" style="font-size:11px">{e(C["brand"])} · {e(C["size"])}</div>
<div class="f" style="font-size:31px;font-weight:600;margin:22px 0 8px">{money(best,cur)}</div>
<div style="color:#1f7ae0;font-weight:600;font-size:11px">{saving_line}</div>
<div class="mut" style="font-size:9.5px;letter-spacing:.08em;margin:22px 0 8px;text-transform:uppercase">{e(t("productPricesNearby"))}</div>
<div class="card" style="overflow:hidden">{lis}</div></div>
<div style="position:absolute;bottom:0;left:0;right:0;height:70px;background:#f6f8fc;border-top:1px solid #e2e7f3;display:flex;gap:10px;padding:8px 16px">
 <div style="flex:1;background:#4a9ff5;color:#fff;border-radius:26px;display:flex;align-items:center;justify-content:center;gap:6px;font-weight:600;font-size:11px;text-align:center;padding:0 10px;line-height:1.15">{ic("bag",15)}<span>{e(t("productAddToBasket"))}</span></div>
 <div style="flex:1;border:1.5px solid #4a9ff5;color:#2a7fd8;border-radius:26px;display:flex;align-items:center;justify-content:center;gap:6px;font-weight:500;font-size:10.5px;text-align:center;padding:0 8px;line-height:1.15">{ic("listplus",15)}<span>{e(t("productAddToListBtn"))}</span>{ic("down",12)}</div></div>''' + stamp(lang))


def screen_deals(d, t, lang):
    cur = d["cur"]
    cards = "".join(f'''<div class="card" style="flex:none;width:135px;overflow:hidden;min-height:200px">
 <div style="background:#eaeffb;height:68px;position:relative;display:grid;place-items:center;font:400 22px Fredoka;color:#aab">{e(x["name"][0])}
 <span style="position:absolute;top:8px;right:8px;background:#4a9ff5;color:#fff;border-radius:12px;padding:3px 8px;font:600 9.5px 'DM Sans'">−{x["pct"]}%</span></div>
 <div style="padding:10px 10px"><div class="mut" style="font-size:9px">{e(x["label"])} · {x["km"]} km</div>
 {f'<div style="color:#1f7ae0;font-weight:600;font-size:9.5px;margin-top:5px">{e(x["brand"])}</div>' if x.get("brand") else ""}
 <div style="font-weight:600;font-size:11.5px;line-height:1.25;margin-top:3px">{e(x["name"])}</div>
 {f'<div class="mut" style="font-size:9.5px;margin-top:3px">{e(x["size"])}</div>' if x.get("size") else ""}
 <div style="margin-top:8px"><span class="f" style="font-size:14px;font-weight:600">{money(x["price"],cur)}</span> <s class="mut" style="font-size:9.5px">{money(x["was"],cur)}</s></div>
 {f'<div style="color:#1f7ae0;font-size:9.5px;font-weight:600;margin-top:5px">{e(t("dealsLoyaltyCard"))}</div>' if x.get("loyalty") else ""}</div></div>''' for x in d["deals"])
    return shell(header() + actions(t) + f'''
<h2 style="padding:22px 16px 10px;font-size:15px;font-weight:600">{e(t("dealsTitle"))}</h2>
<div style="display:flex;gap:10px;padding:0 0 0 16px;overflow:hidden">{cards}</div>
<div class="nav">{ic("receipt",22)}{ic("ticket",22)}<span style="width:70px"></span>{ic("grid",22)}{ic("checks",22)}</div><div class="fab">{ic("camera",32,"#fff",2)}</div>''' + stamp(lang))


SCREENS = {"scan": screen_scan, "list": screen_list, "compare": screen_compare, "deals": screen_deals}


def main(regions):
    TMP.mkdir(exist_ok=True)
    br = cloakbrowser.launch(headless=True)
    for region in regions:
        d = json.loads((HERE / "data" / f"{region}.json").read_text())
        for lang in LANGS[region]:
            t = T(lang)
            out = OUT / region / lang
            out.mkdir(parents=True, exist_ok=True)
            for name, fn in SCREENS.items():
                f = TMP / f"{region}-{lang}-{name}.html"
                f.write_text(fn(d, t, lang))
                pg = br.new_page(viewport={"width": 296, "height": 640}, device_scale_factor=2)
                pg.goto(f.as_uri(), wait_until="load", timeout=30000)
                pg.wait_for_timeout(1200)
                pg.screenshot(path=str(out / f"{name}.png"))
                pg.close()
                print("wrote", out / f"{name}.png")
    br.close()


if __name__ == "__main__":
    main(sys.argv[1:] or ["uk", "be", "nl"])
