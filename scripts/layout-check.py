#!/usr/bin/env python3
"""Headless layout check on dist/: for every region/language page and several phone widths the
header must stay one row (<=72px), keep all its children inside its box, the page must not
scroll horizontally, and the suggestion banner (if shown) must start below the header.
Usage: npm run build && python3 scripts/layout-check.py [--shots DIR]"""
import functools, http.server, pathlib, socketserver, sys, threading
import cloakbrowser
ROOT = pathlib.Path(__file__).resolve().parent.parent / "dist"
PATHS = ["/?choose=1", "/ie/", "/uk/", "/be/", "/be/fr/", "/be/en/", "/nl/", "/nl/en/", "/de/",
         "/be/savings/", "/nl/how-it-works/", "/uk/coupons/"]
WIDTHS = [320, 360, 390, 430, 768]
shots = pathlib.Path(sys.argv[sys.argv.index("--shots") + 1]) if "--shots" in sys.argv else None
H = functools.partial(http.server.SimpleHTTPRequestHandler, directory=str(ROOT)); H.log_message = lambda *a, **k: None
srv = socketserver.TCPServer(("127.0.0.1", 0), H); port = srv.server_address[1]
threading.Thread(target=srv.serve_forever, daemon=True).start()
JS = """() => {
  const h = document.querySelector('header.nav').getBoundingClientRect();
  const bad = [];
  document.querySelectorAll('header.nav .nav__inner *').forEach(e => {
    if (e.closest('.menu__panel') && !e.closest('details[open]')) return;
    const r = e.getBoundingClientRect(); if (!r.width || !r.height) return;
    if (r.left < -0.5 || r.right > innerWidth + 0.5 || r.top < h.top - 0.5 || r.bottom > h.bottom + 0.5) bad.push(e.className || e.tagName);
  });
  const small = [...document.querySelectorAll('header.nav a:not(.menu__panel a), header.nav summary, #tw-region-suggest a, #tw-region-suggest button')]
    .filter(e => { const r = e.getBoundingClientRect(); return r.width && r.height && r.height < 43.5; }).map(e => e.textContent.trim().slice(0, 20));
  const q = n => document.querySelector(n).getBoundingClientRect();
  const a1 = q('.nav__brand'), a2 = q('.nav__mobile'), vis = getComputedStyle(document.querySelector('.nav__mobile')).display !== 'none';
  const brandText = document.querySelector('.nav__brand span').getBoundingClientRect();
  const overlap = vis && (Math.min(a1.right, brandText.width > 2 ? brandText.right : a1.right) > a2.left + 0.5);
  const b = document.getElementById('tw-region-suggest');
  const br = b && !b.hidden ? b.getBoundingClientRect() : null;
  return { overlap, hh: h.height, bad, small, scroll: document.documentElement.scrollWidth - innerWidth,
           bannerOverlap: br ? br.top < h.bottom - 0.5 : false, banner: !!br };
}"""
br = cloakbrowser.launch(headless=True); fails = 0; n = 0
for w in WIDTHS:
    for path in PATHS:
        pg = br.new_page(viewport={"width": w, "height": 900})
        pg.goto(f"http://127.0.0.1:{port}{path}", wait_until="load", timeout=30000); pg.wait_for_timeout(300)
        r = pg.evaluate(JS); n += 1
        if r["hh"] > 72 or r["bad"] or r["overlap"] or r["scroll"] > 0 or r["bannerOverlap"] or (w <= 860 and r["small"]):
            fails += 1; print("FAIL", w, path, r)
        if shots:
            shots.mkdir(parents=True, exist_ok=True)
            pg.screenshot(path=str(shots / f"{w}{path.strip('/').replace('/', '_').replace('?choose=1','chooser') or 'root'}.png"), clip={"x": 0, "y": 0, "width": w, "height": 900})
        pg.close()
br.close(); print(f"{n} checks, {fails} failure(s)"); sys.exit(1 if fails else 0)
