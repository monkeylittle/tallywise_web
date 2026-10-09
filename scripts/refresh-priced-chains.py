#!/usr/bin/env python3
"""Count distinct products priced per (country, chain) in the last 45 days and write
scripts/data/priced-chains.json, which src/i18n/regions.ts derives its BE/NL store lists from.
Read-only scan of zavvy-prod-pricing (eu-west-1, default AWS profile). Excludes loyalty_only
rows and outliers (price < 0.10 or > 500.00 in major units). Keyed by chain AND country
(Jumbo trades in both BE and NL). Usage: python3 scripts/refresh-priced-chains.py"""
import collections, datetime, json, pathlib
import boto3

THRESHOLD = 500          # products priced in the window for a chain to be listed
WINDOW_DAYS = 45
OUT = pathlib.Path(__file__).resolve().parent / "data" / "priced-chains.json"

t = boto3.resource("dynamodb", region_name="eu-west-1").Table("zavvy-prod-pricing")
now = datetime.datetime.now(datetime.timezone.utc)
cutoff = (now - datetime.timedelta(days=WINDOW_DAYS)).isoformat()
seen = collections.defaultdict(set)
kw = dict(ProjectionExpression="ean, chain, country, observed_at, price_minor, loyalty_only")
while True:
    r = t.scan(**kw)
    for i in r["Items"]:
        if i["observed_at"] < cutoff or i.get("loyalty_only"):
            continue
        p = int(i["price_minor"])
        if p < 10 or p > 50000:
            continue
        seen[(i.get("country") or "?", i["chain"])].add(i["ean"])
    if "LastEvaluatedKey" not in r:
        break
    kw["ExclusiveStartKey"] = r["LastEvaluatedKey"]
rows = sorted(({"country": c, "chain": ch, "products": len(e), "included": len(e) >= THRESHOLD}
               for (c, ch), e in seen.items()), key=lambda x: (x["country"], -x["products"]))
OUT.write_text(json.dumps({"computed": now.date().isoformat(), "window_days": WINDOW_DAYS,
                           "threshold": THRESHOLD, "source": "zavvy-prod-pricing",
                           "chains": rows}, indent=1))
for r in rows:
    if r["country"] in ("IE", "UK", "BE", "NL"):
        print(r)
