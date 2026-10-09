#!/usr/bin/env python3
"""Visual QA: serve dist/ and screenshot key pages. Usage: python3 scripts/shot-pages.py OUTDIR"""
import http.server, pathlib, socketserver, sys, threading, functools
import cloakbrowser
out = pathlib.Path(sys.argv[1]); out.mkdir(parents=True, exist_ok=True)
H = functools.partial(http.server.SimpleHTTPRequestHandler, directory=str(pathlib.Path(__file__).resolve().parent.parent / "dist"))
H.log_message = lambda *a, **k: None
srv = socketserver.TCPServer(("127.0.0.1", 0), H); port = srv.server_address[1]
threading.Thread(target=srv.serve_forever, daemon=True).start()
pages = {"chooser": "/?choose=1", "ie": "/ie/", "uk": "/uk/", "be": "/be/", "be-fr": "/be/fr/", "nl": "/nl/", "uk-coupons": "/uk/coupons/", "old-stub": "/how-it-works/", "de": "/de/"}
br = cloakbrowser.launch(headless=True)
for name, path in pages.items():
    pg = br.new_page(viewport={"width": 1280, "height": 900})
    pg.goto(f"http://127.0.0.1:{port}{path}", wait_until="load", timeout=30000)
    pg.wait_for_timeout(800)
    print(name, pg.url)
    pg.screenshot(path=str(out / f"{name}.png"), full_page=(name in ("nl",)))
    pg.close()
br.close()
