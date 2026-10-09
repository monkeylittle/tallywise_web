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


CSS = """
@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Fredoka:wght@500;600;700&display=swap');
*{box-sizing:border-box;margin:0;padding:0}
body{width:296px;height:640px;overflow:hidden;background:#f6f8fc;font-family:'DM Sans',system-ui;color:#1b2142;position:relative}
.sb{display:flex;justify-content:space-between;align-items:center;padding:14px 26px 0 30px;font-weight:600;font-size:11px;height:34px}
.card{overflow-wrap:anywhere}
.sb i{display:inline-block;width:19px;height:9px;border-radius:3px;background:#111;margin-left:6px}
h1,h2,h3,.f{font-family:'Fredoka',system-ui}
.card{background:#fff;border:1px solid #e2e7f3;border-radius:16px}
.mut{color:#7a82a3}
.nav{position:absolute;left:0;right:0;bottom:0;height:60px;background:#f6f8fc;display:flex;justify-content:space-around;align-items:center}
.nav b{width:18px;height:18px;border:2px solid #2a3158;border-radius:4px}
.fab{position:absolute;left:110px;bottom:20px;width:76px;height:76px;border-radius:50%;background:#4a9ff5;box-shadow:0 6px 14px #4a9ff566;color:#fff;font:300 40px/74px sans-serif;text-align:center}
.ill{position:absolute;top:11px;left:50%;transform:translateX(-50%);font:600 7.5px "DM Sans";letter-spacing:.06em;text-transform:uppercase;color:#6b7391;background:#fff;border:1px solid #d8def0;border-radius:9px;padding:2px 8px;z-index:9;white-space:nowrap}
"""


def shell(body):
    return f'<!doctype html><meta charset="utf-8"><style>{CSS}</style><body>' \
           f'<div class="sb"><span>9:41</span><span>●●●● <i></i></span></div>{body}</body>'



def stamp(lang):
    return f'<div class="ill">{e(STAMP[lang])}</div>'


def header():
    return (f'<div style="display:flex;align-items:center;padding:12px 16px 0"><img src="{(SITE/'public'/'app-icon.png').as_uri()}" '
            'style="width:26px;height:26px;margin-right:10px"><h1 style="font-size:23px;font-weight:500;flex:1">Tallywise</h1><span class="mut">⋮</span></div>')


def actions(t, top="14px"):
    return f'''<div style="display:flex;gap:10px;padding:{top} 16px 0">
 <div class="card" style="flex:1;padding:12px 11px;min-height:100px"><div style="color:#4a9ff5;font-size:18px">⛶</div><div class="f" style="font-weight:600;font-size:11.5px;margin-top:10px;line-height:1.2">{e(t("homeScanBarcode"))}</div><div class="mut" style="font-size:9.5px;margin-top:3px;line-height:1.25">{e(t("homeScanBarcodeSubtitle"))}</div></div>
 <div class="card" style="flex:1;padding:12px 11px;min-height:100px"><div style="color:#4a9ff5;font-size:18px">▤</div><div class="f" style="font-weight:600;font-size:11.5px;margin-top:10px;line-height:1.2">{e(t("homeSnapReceipt"))}</div><div class="mut" style="font-size:9.5px;margin-top:3px;line-height:1.25">{e(t("homeSnapReceiptSubtitle"))}</div></div></div>'''


def screen_scan(d, t, lang):
    s = d["scan"]
    return shell(header() + f'''
<div class="mut" style="padding:20px 16px 0;font-size:10.5px">{e(WEEKDAY[lang])} · {e(s["store"])}</div>
<h2 style="padding:3px 16px 0;font-size:19px;font-weight:600;line-height:1.15">{e(t("homeGreeting"))}</h2>
<div style="margin:16px;background:#4a9ff5;border-radius:24px;padding:18px 16px 16px">
 <div style="font-size:9.5px;letter-spacing:.08em;color:#1b3a6e;text-transform:uppercase">{e(t("basketTitle"))}</div>
 <div class="f" style="font-size:25px;font-weight:600;margin:10px 0 6px">{e(t("homeItemCount", count=s["items"]))}</div>
 <div style="font-size:10.5px;line-height:1.35;margin-bottom:12px">{e(t("homeGatheringPrices"))}</div>
 <span style="background:#1b2142;color:#fff;border-radius:20px;padding:8px 14px;font-size:11px;font-weight:600">{e(t("homeViewBasket"))} →</span></div>
''' + actions(t, "0") + f'''
<h2 style="padding:20px 16px 0;font-size:15px;font-weight:600">{e(t("dealsTitle"))}</h2>
<div class="nav"><b></b><b></b><span style="width:70px"></span><b></b><b></b></div><div class="fab">+</div>''' + stamp(lang))


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
<div style="display:flex;align-items:center;padding:12px 16px 0"><span style="font-size:18px">‹</span>
<h1 style="flex:1;text-align:center;font-size:15.5px;font-weight:600">{e(LIST_TITLE[lang])}</h1><span class="mut">⋯</span></div>
<div class="mut" style="padding:18px 13px 6px;font-size:10px">{e(t("listProgressTicked", done=0, total=len(L["items"])))}</div>
<div style="margin:0 13px 6px;height:5px;border-radius:3px;background:#eaeefa"></div>
{rows}
<div style="margin:12px 10px 0;background:#eaeffb;border:1px solid #dde3f3;border-radius:16px;padding:14px;display:flex;justify-content:space-between;align-items:center">
 <span style="font-size:11.5px;font-weight:500">{e(t("listEstimatedTotal"))}</span><span class="f" style="font-size:17px">{money(total,cur)}</span></div>
<div style="position:absolute;right:10px;bottom:14px;background:#4a9ff5;color:#fff;border-radius:16px;padding:12px 16px;font-weight:600;font-size:12px">+ &nbsp;{e(t("listAddItems"))}</div>''' + stamp(lang))


def screen_compare(d, t, lang):
    cur = d["cur"]
    C = d["compare"]
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
<div style="padding:0 16px"><span style="display:inline-block;background:#d5f0e0;color:#1c8a4c;border-radius:16px;padding:6px 12px;font-size:11px;font-weight:700">⚡ {e(t("productCheapestAt", chain=top["label"]))}</span>
<h1 style="font-size:19px;font-weight:600;margin-top:10px;line-height:1.15">{e(C["name"])}</h1>
<div class="mut" style="font-size:11px">{e(C["brand"])} · {e(C["size"])}</div>
<div class="f" style="font-size:31px;font-weight:600;margin:22px 0 8px">{money(best,cur)}</div>
<div style="color:#1f7ae0;font-weight:600;font-size:11px">{saving_line}</div>
<div class="mut" style="font-size:9.5px;letter-spacing:.08em;margin:22px 0 8px;text-transform:uppercase">{e(t("productPricesNearby"))}</div>
<div class="card" style="overflow:hidden">{lis}</div></div>
<div style="position:absolute;bottom:0;left:0;right:0;height:70px;background:#f6f8fc;border-top:1px solid #e2e7f3;display:flex;gap:10px;padding:8px 16px">
 <div style="flex:1;background:#4a9ff5;color:#fff;border-radius:26px;display:grid;place-items:center;font-weight:600;font-size:11.5px;text-align:center;padding:0 8px;line-height:1.15">{e(t("productAddToBasket"))}</div>
 <div style="flex:1;border:1.5px solid #4a9ff5;color:#2a7fd8;border-radius:26px;display:grid;place-items:center;font-weight:500;font-size:10.5px;text-align:center;padding:0 6px;line-height:1.15">{e(t("productAddToListBtn"))}&nbsp;⌄</div></div>''' + stamp(lang))


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
<div class="nav"><b></b><b></b><span style="width:70px"></span><b></b><b></b></div><div class="fab" style="font-size:26px">◉</div>''' + stamp(lang))


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
