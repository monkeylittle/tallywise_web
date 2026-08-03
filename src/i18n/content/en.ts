// English content — the source of truth for the content SHAPE. Other languages
// (nl, fr, de) are typed against `typeof en` so a missing or mistyped key is a
// build error. Strings may contain inline HTML (<strong>, <em>, <a>); they are
// rendered with set:html. Internal links are written per-language to the
// localized path (e.g. fr.ts links to /fr/privacy/).

export const en = {
  meta: { skip: 'Skip to content' },

  nav: {
    howItWorks: 'How it works',
    coupons: 'Coupons',
    savings: 'Savings',
    about: 'About',
    getApp: 'Get the app',
    langMenuLabel: 'Change language',
  },

  footer: { privacy: 'Privacy', terms: 'Terms', support: 'Support' },

  buttons: {
    iphone: 'iPhone&nbsp;— App&nbsp;Store',
    android: 'Android&nbsp;— Google&nbsp;Play',
  },

  // Default sub-line for the shared call-to-action band.
  ctaSub: 'Tallywise is free on iPhone and Android.',

  // Shown as a banner atop translated legal pages (not used in English).
  legalNote: '',

  home: {
    title: 'Tallywise — compare your grocery basket across UK & Irish supermarkets',
    hero: {
      h1: 'Stop guessing where your basket is cheapest.',
      sub: "Scan a barcode or snap your receipt, build your basket, and Tallywise shows what it would cost at the major supermarkets across Ireland, the UK, Belgium and the Netherlands — and what you've saved.",
      ctaGet: 'Get the app',
      ctaHow: 'See how it works',
      note: 'Free on iPhone &amp; Android',
    },
    why: {
      h2: 'Why Tallywise, why now?',
      lead: 'Grocery bills have climbed hard these past few years, and a weekly shop can cost noticeably more or less depending only on where you buy it. Every euro and pound stretches less than it used to — so paying over the odds for the same items stings more than ever.',
      cards: [
        {
          h: 'Prices never sit still',
          p: "The same basket costs different amounts at different shops, and those prices move week to week. Whatever was cheapest last month might not be this month — and there's no way to eyeball that.",
        },
        {
          h: 'Shopping around is a chore',
          p: "Comparing by hand means juggling apps, leaflets and memory, or driving shop to shop. Most of us don't have the time, so we stick to one store and quietly overpay — week after week.",
        },
        {
          h: 'Tallywise does the legwork',
          p: 'Scan a barcode or snap a receipt and Tallywise compares <em>your</em> actual basket across the major supermarkets in seconds — from prices real shoppers share. No trekking, no guesswork: just where your shop is genuinely cheapest.',
        },
      ],
    },
    how: {
      h2: 'From a barcode — or a receipt — to the cheapest basket.',
      steps: [
        {
          h: 'Scan',
          p: 'Scan a product barcode, snap a shopping receipt, or photograph a shelf-edge price label. Tallywise reads it on your device and pulls out the items and prices.',
        },
        {
          h: 'Build your basket',
          p: "Keep the basket you'd actually buy. Adjust quantities, fix a line, or remove items.",
        },
        {
          h: 'Compare &amp; save',
          p: "See the running total at every supermarket you could shop at — and a tally of what you've saved. On a saved receipt, each item you've scanned gets a <em>good deal</em> or <em>pricey</em> tag versus other shops, so you know where you paid over the odds.",
        },
      ],
    },
    couponsSec: {
      h2: 'Never lose a money-off coupon again.',
      lead: "Those vouchers printed at the bottom of your receipt? Tallywise saves them to your phone and shows the barcode right at the till — so the coupon's in your pocket, not crumpled in a drawer past its date.",
      cards: [
        {
          h: 'Snap &amp; save',
          p: "Point Tallywise at a coupon — or it's picked up automatically when you snap a receipt. It reads the value, the spend it needs and the dates it's valid.",
        },
        {
          h: 'Scan at the till',
          p: "Open your wallet and Tallywise shows the coupon's barcode full-screen, ready for the checkout scanner — the printed voucher reproduced exactly.",
        },
        {
          h: 'Give one away, grab one you need',
          p: "Won't use a coupon before it expires? Pop it in the shared pool for someone else. Need one for your shop? Claim one a neighbour has given away — fair give-and-take, so it stays a community.",
        },
      ],
    },
    shots: {
      h2: 'See it in your hand.',
      items: [
        { alt: 'Tallywise scan screen — scan a barcode or snap a receipt.', caption: 'Scan a barcode, or snap a receipt.' },
        { alt: 'Tallywise receipt screen — parsed items and prices from a shopping receipt.', caption: 'Your receipt, read on-device into items.' },
        { alt: 'Tallywise spend screen — your weekly grocery spend over time, by category.', caption: 'See where your grocery spend goes.' },
      ],
    },
    stores: {
      h2: 'Wherever you shop.',
      pickLabel: 'Choose your country',
      countryNames: { IE: 'Ireland', UK: 'United Kingdom', BE: 'Belgium', NL: 'Netherlands' },
      note1: 'Own-brand items only show prices where they&rsquo;re stocked — we never silently drop a store, so the totals are always honest.',
      note3: 'Tallywise is in English, Dutch, French and German, so it speaks your shop wherever you are.',
    },
    faq: {
      h2: 'Common questions.',
      items: [
        { q: 'Is Tallywise free?', a: 'Yes — Tallywise is free to use.' },
        { q: 'Where do the prices come from?', a: 'From real shopping. Tallywise builds its price picture from the receipts and scans people share across the supermarkets — so the more the community scans, the sharper your comparison.' },
        { q: 'What happens to my receipts?', a: 'Receipts are read on your device. When you <strong>save</strong> a receipt to your history, its image and the parsed details are sent to your account — so you can see it later and so we can improve scanning. A scan you don&rsquo;t save stays on your phone unless you tap &ldquo;Report a problem&rdquo;. Either way, any card details printed on a receipt are stripped automatically before anything is sent.' },
        { q: 'What about own-brand items?', a: "Own-brand items usually have store-specific barcodes, so the same product won't always exist at another shop to compare against. You can still track its price history at the store that sells it — so you'll know when it goes up or drops, even when there's no like-for-like rival to line it up beside." },
        { q: 'Does Tallywise work offline?', a: "Yes. Scan a receipt or record a price with no signal and Tallywise saves it on your phone, then syncs it automatically the next time you're online — so a basement aisle or a dead spot at the till never loses your scan." },
        { q: 'Can I get my data out?', a: 'Yes. Export your receipts to a CSV from the receipts list, and export or delete your account and data from Settings at any time — no email required.' },
        { q: "A product's name or size looks wrong — can I fix it?", a: 'You can suggest a correction (name, brand or pack size) right from the product screen. Once another shopper confirms the same details, the shared product entry updates for everyone — the catalogue is built and kept honest by the community.' },
      ],
    },
    membership: {
      h2: 'Bronze &amp; Silver — free, earned by scanning.',
      intro: "Every shopper starts as <strong>Bronze</strong>. Scan your shops and tag the items as you go, and you'll climb to <strong>Silver</strong> — both free. (Gold, a paid tier, is on the way.)",
      bronzeH: 'Bronze — where you start',
      bronze: [
        'Compare your basket across supermarkets in Ireland, the UK, Belgium and the Netherlands',
        'Scan barcodes to check and record prices',
        '<strong>Help identify products</strong> — add a missing name, brand or size',
        '<strong>Save &amp; share money-off coupons</strong> to scan at the till',
        'Track your trips, prices compared and receipts',
        'Your last <strong>2 weeks</strong> of receipt history',
      ],
      silverH: 'Silver — for active members',
      silver: [
        "<strong>Price-drop alerts</strong> on items you've scanned — <em>now live</em>",
        '<strong>Your full receipt history</strong> (Bronze sees 2 weeks) — <em>now live</em>',
        '<strong>Your spend tracked over time</strong> — <em>now live</em>',
        'The cheapest shop for your basket <em>(coming soon)</em>',
        'Early access to new features <em>(coming soon)</em>',
      ],
      keepH: 'Reaching &amp; keeping Silver',
      keep: "Reach Silver by scanning <strong>4 receipts</strong> and tagging <strong>10 barcodes</strong> from their line items <strong>within two weeks</strong>. <strong>Helping identify products counts too</strong> — when you add or correct an item's name, brand or size and another shopper confirms it, it counts toward those 10 (up to 5 of them), so filling in the catalogue is rewarded. Silver reflects your last two weeks of activity, so <strong>keep scanning to keep it</strong> — let it lapse and you'll slip back to Bronze until you're active again.",
    },
    get: {
      h2: 'Get Tallywise.',
      sub: 'Tallywise is free on iPhone and Android, in Ireland, the UK, Belgium and the Netherlands. Tap your platform to install it and start comparing your shop.',
      hintLabel: 'Questions?',
    },
  },

  howItWorks: {
    title: 'How Tallywise works — scan, build your basket, compare prices',
    description: 'From scanning a receipt to seeing what your shop would cost at every supermarket you use. A walk-through in five steps, on-device and free.',
    hero: {
      h1: 'How Tallywise works.',
      sub: "From a barcode or a receipt to your basket's total at every supermarket you shop at — in five steps, with the scanning running right on your phone.",
    },
    steps: [
      {
        h: 'Snap a receipt',
        p: "Open Tallywise, point your camera at a shopping receipt, and tap. We read every line, the per-item price, the total and the savings <strong>on your device</strong>. When you save the receipt to your history, its image and parsed details are sent to your account; a scan you don't save stays on your phone.",
      },
      {
        h: "Scan each item's barcode",
        p: "The receipt knows the item's description and what you paid, but not its barcode — and the barcode is what lets Tallywise match the item against every other shop. Tap the barcode icon beside each line and scan the product. You can also record a price on the spot by photographing the <strong>shelf-edge price label</strong> — Tallywise reads the product, price and barcode straight off the label. Once an item's linked, Tallywise tags it a <strong>good deal</strong> or <strong>pricey</strong> — how the price you paid compares with other shops, with the cheaper shop and the difference a tap away.",
      },
      {
        h: 'Build your basket',
        p: "Keep the items you'd actually buy. Adjust a quantity, fix a misread line, drop an own-brand item that won't have a rival. The basket is yours — Tallywise never silently drops a missing item, so the totals stay honest.",
      },
      {
        h: 'See it priced at every shop',
        p: 'Tallywise lines your basket up against the major supermarkets in your country — and shows the running total at each, with the cheapest highlighted. Items that aren\'t stocked at a given shop show "not available here" rather than vanishing quietly.',
      },
      {
        h: 'Track your spend over time',
        p: 'Every saved receipt rolls into a spend history — by week, by store, by category. Tap any bar to see exactly which items made it up. Catch the leaks before they catch you.',
      },
    ],
    shots: {
      h2: 'What it looks like.',
      items: [
        { alt: 'Tallywise scan screen — start with a barcode or a receipt.', caption: 'Start with a barcode or a receipt.' },
        { alt: 'Tallywise receipt screen — items and prices read from a shopping receipt.', caption: 'Every line read on-device.' },
        { alt: 'Tallywise spend screen — weekly grocery spend over time, by category.', caption: 'Your spend over time, by category.' },
      ],
    },
    ctaHeading: 'Try it on your next shop.',
  },

  coupons: {
    title: 'Save & share money-off coupons — Tallywise',
    description: "Save Dunnes Stores and SuperValu money-off vouchers to your phone and scan them at the till. Give the ones you won't use away, and claim one when you need it.",
    hero: {
      h1: 'Never lose a money-off coupon again.',
      sub: "Those vouchers printed at the bottom of your Dunnes Stores or SuperValu receipt go straight into a drawer and expire there. Tallywise keeps yours in your pocket — and lets you give the ones you won't use to another shopper.",
    },
    how: {
      h2: 'How it works.',
      cards: [
        {
          h: '1. Snap or import the voucher',
          p: "Point Tallywise at a printed coupon — or paste a screenshot of an in-app voucher from the Dunnes Stores or SuperValu app. Tallywise reads the amount (€5 off, €10 off…), the spend it needs, the dates it's valid, and the barcode.",
        },
        {
          h: '2. Show it at the till',
          p: 'Open your wallet, tap the coupon, and Tallywise fills the screen with the same barcode the cashier would scan from the printed slip. No more "I had one, I think it\'s in the car…"',
        },
        {
          h: '3. Or give it away',
          p: "Got one you know you won't use? Tap the gift icon and it moves to <strong>Up for grabs</strong> — a shared pool any Tallywise shopper can browse. They tap Claim, it lands in their wallet. You can take it back any time before someone else does.",
        },
      ],
    },
    fair: {
      h2: 'Keeping the sharing fair.',
      ps: [
        "A shared pool only works if it doesn't get drained by a handful of people. Tallywise tracks the value of what you've given away versus what you've claimed; if you've taken much more than you've shared, claiming pauses until you give one back. The balance is private — nobody else sees it, and the limit is generous so casual use never bumps into it.",
        'We never link your name or email to a coupon in the pool — only the coupon\'s own details (value, conditions, dates, barcode) travel.',
      ],
    },
    faq: {
      h2: 'Common questions.',
      items: [
        { q: 'Which shops are supported?', a: 'Dunnes Stores and SuperValu money-off vouchers for now (the on-receipt and in-app variants). Other chains will follow as we get calibration data for their voucher formats.' },
        { q: 'Will a coupon someone gave me work at the till?', a: "Usually — but coupons are issued by the retailer, not by Tallywise. They're typically single-use and time-limited. We can't verify that a shared coupon hasn't already been used; if a coupon's been used or refused, claim a different one." },
        { q: 'What about my privacy?', a: 'Nothing about you is attached to a coupon you give away — only the coupon\'s own value, dates and barcode. See the <a href="%PRIVACY%">Privacy Policy</a> for the full picture.' },
        { q: 'Is the barcode an exact match for the original?', a: "Yes. Tallywise renders the same barcode the printed voucher carries, full-screen and high contrast, so the cashier's scanner reads it just like the slip." },
      ],
    },
    ctaHeading: 'Try it on your next Dunnes or SuperValu shop.',
  },

  savings: {
    title: 'Where shoppers really save on groceries — Tallywise',
    description: 'How Tallywise builds a transparent picture of grocery prices across Tesco, Dunnes, SuperValu, Aldi, Lidl, M&S, SPAR and Centra — and what that means for your weekly shop.',
    hero: {
      h1: 'Honest grocery price comparison, built by shoppers.',
      sub: "The cheapest supermarket isn't a single answer — it depends on what's actually in <em>your</em> basket. Here's how Tallywise works that out, and what it means for the shop you do every week.",
    },
    vary: {
      h2: 'Why grocery prices vary so much.',
      lead: 'A 2L bottle of milk, a six-pack of eggs, a loaf of sliced pan — the same items cost noticeably different amounts across supermarkets, and the gaps shift week to week. A few common reasons:',
      cards: [
        {
          h: "Promotions don't sit still",
          p: 'The "3 for €5" tonight is the "2 for €4" next week. Each chain runs its own cycle, so the cheapest shop for your regular basket flips around in ways nobody\'s tracking by hand.',
        },
        {
          h: 'Own-brand vs. branded',
          p: "Own-brand items at one shop can't be bought at another, so a basket heavy on one chain's own range simply isn't comparable like-for-like with another. Branded items <em>are</em> — and that's where the headline savings live.",
        },
        {
          h: 'Pack sizes and per-unit pricing',
          p: 'A 500g pack in one shop versus 400g in another isn\'t a straight comparison. Per-kg or per-litre is the only honest way to look at it — and shelf labels almost always have it, if you know to look.',
        },
      ],
    },
    build: {
      h2: 'How Tallywise builds the price picture.',
      ps: [
        'Tallywise is crowd-sourced. Every shopper who scans a barcode in front of a shelf or snaps a receipt adds one more data point. Those data points are tagged with the shop and the time, so the picture stays fresh — and the more people scan, the sharper the comparison for everyone.',
        "We don't scrape supermarket websites — their terms of service don't allow it, and the data wouldn't always match what's on the shelf anyway. Real receipts and real shelf-label scans are the source of truth.",
      ],
    },
    honest: {
      h2: 'The honest-comparison rule.',
      p: 'Tallywise never silently drops a missing item from a comparison. If you\'ve put a branded loaf in your basket and a shop doesn\'t stock it, that shop\'s column shows "not available here" — not a quietly-lower total that makes it look cheaper than it is. Same with own-brand items: they only price up at the store that sells them. The math at the till is what matters; we make sure Tallywise\'s math matches.',
    },
    covered: {
      h2: 'Which supermarkets are covered?',
      list: [
        '<strong>Tesco</strong> — calibrated receipt reader, full comparison (UK &amp; Ireland).',
        '<strong>Dunnes Stores</strong> — calibrated, plus coupon support.',
        '<strong>SuperValu</strong> — calibrated.',
        '<strong>Aldi</strong> and <strong>Lidl</strong> — calibrated (paper + Lidl Plus digital).',
        '<strong>M&amp;S</strong>, <strong>Centra</strong>, <strong>SPAR / EuroSpar</strong> — calibrated.',
        "<strong>UK chains</strong> — Sainsbury's, Asda, Morrisons and more.",
      ],
      p: 'Tallywise is live in Ireland, the UK, Belgium and the Netherlands — Delhaize, Carrefour and Jumbo in Belgium, and Albert Heijn, Jumbo and Plus in the Netherlands, alongside Aldi and Lidl across them all. New chains land as we get enough sample receipts to calibrate the reader. If a shop you use isn\'t here, snap a receipt anyway and tap "Report a problem" — that\'s how we add one.',
    },
    ctaHeading: 'Find your cheapest basket.',
  },

  about: {
    title: 'About Tallywise — built in Dublin, for shoppers',
    description: 'Who builds Tallywise, why it exists, how to get in touch, and how to get the app on iOS or Android.',
    hero: {
      h1: 'About Tallywise.',
      sub: 'A small, independent app built in Dublin to make grocery shopping across Ireland, the UK, Belgium and the Netherlands a fairer game for the people doing it.',
    },
    why: {
      h2: 'Why we built it.',
      ps: [
        'The price of a weekly shop climbed hard through 2022 and 2023, and the gaps between supermarkets widened with it. The same basket can cost noticeably more or less depending only on where you buy it — and nobody has the time to drive between three shops with a clipboard.',
        'Tallywise is the version of that clipboard that fits in your pocket. Scan what you already buy and the app does the compare-and-contrast work behind the scenes, using prices real shoppers have recorded — not screen-scraped supermarket sites, which are often out of date and against terms anyway.',
      ],
    },
    how: {
      h2: 'How we work.',
      list: [
        '<strong>On-device first.</strong> Scanning, OCR and parsing run on your phone. Receipt images only leave the phone if you save the receipt to your history; coupon barcodes never leave the device unless you choose to share them.',
        '<strong>Free, with paid coming later.</strong> The core comparison and coupon features are free and stay free. Membership tiers (Bronze, Silver, eventually Gold) earn you more — and a paid tier will fund the lights without holding the basics behind a paywall.',
        '<strong>Honest comparison.</strong> We never silently drop a missing item from a totals comparison to make a shop look cheaper. Own-brand items show "not available here" at every other shop, not a blank cell.',
        '<strong>No advertising SDKs.</strong> Tallywise doesn\'t sell your data and doesn\'t carry ad-network code. The only third-party analytics in the app is Google Analytics for product improvement — full detail in the <a href="%PRIVACY%">Privacy Policy</a>.',
      ],
    },
    who: {
      h2: "Who's behind it.",
      p: 'Tallywise is operated by <strong>MonkeyLittle</strong>, an independent software business based in Dublin. The product currently has one full-time builder, supported by a small group of beta testers across Ireland and the UK who keep us honest about what works and what doesn\'t.',
    },
    contact: {
      h2: 'Get in touch.',
      p: 'For anything at all — <a href="mailto:%EMAIL%">%EMAIL%</a>. Bug reports, feature requests, "your scanner missed this receipt", "your privacy policy doesn\'t cover X" — we read everything and reply within a few days. For scan misreads, tapping <strong>Report a problem</strong> inside the app attaches the receipt photo and parsed text — that\'s the fastest way to fix a parser.',
    },
    ctaHeading: 'Get Tallywise.',
  },

  support: {
    title: 'Tallywise — Support',
    description: 'Help with Tallywise — common questions, reporting a scan, account help, and how to contact us.',
    hero: {
      h1: 'Support',
      sub: "We're a small team. Email <a href=\"mailto:%EMAIL%\">%EMAIL%</a> and we'll get back to you, usually within a few days.",
    },
    faq: {
      h2: 'Common questions.',
      items: [
        { q: 'A receipt or barcode scanned incorrectly.', a: 'On the scan result screen, tap <strong>"Report a problem with this scan"</strong>. That sends us the receipt image, the recognised text, and the parsed result so we can fix the parser — it\'s the fastest way to get a scan corrected. You can also fix any line in the edit drawer before recording prices.' },
        { q: 'A price looks wrong or a store is missing.', a: 'Own-brand items often have store-specific barcodes and won\'t match across supermarkets — Tallywise shows "not available here" rather than hiding the gap. If a mainstream product looks mispriced, report the scan and we\'ll re-check it.' },
        { q: 'Sign-in or account help.', a: 'Tallywise uses email sign-in (plus Google and Apple). For password resets use the in-app "forgot password" flow. For anything else, email us.' },
        { q: 'Delete my account, or export my data.', a: 'You can do both in the app: <strong>Settings → Delete account</strong> removes your account and its data, and you can export your receipts to a CSV from the receipts list. You can also email <a href="mailto:%EMAIL%">%EMAIL%</a> from your account address and we\'ll remove your account and associated data. See the <a href="%PRIVACY%">Privacy Policy</a> for what we hold.' },
        { q: 'Permissions.', a: 'Scanning needs the camera; reading a saved receipt photo needs photo access; location is used to pick the right currency and the nearest store. Your GPS coordinates aren\'t sent to us, though the store and branch you\'re at may be saved with a price or receipt you record. You can change these in your device settings.' },
      ],
    },
  },

  privacy: {
    title: 'Tallywise — Privacy Policy',
    description: "How Tallywise handles your data — on-device scanning, what we collect, how it's used, and your choices.",
    h1: 'Privacy Policy',
    heroSub: 'Last updated 29 July 2026. Tallywise is operated by MonkeyLittle. Questions: <a href="mailto:%EMAIL%">%EMAIL%</a>.',
    blocks: [
      { h: 'The short version', ps: ['Scanning runs <strong>on your device</strong>. We collect the minimum needed to compare basket prices and keep your account. We don\'t sell your data and there are no advertising SDKs. We do use <strong>Google Analytics</strong> to understand how the app is used so we can improve it — never your receipt contents.'] },
      {
        h: 'What we collect',
        list: [
          '<strong>Account</strong> — your email address, via our sign-in provider (Amazon Cognito), including when you use Google or Apple sign-in.',
          "<strong>Shopping data</strong> — the baskets you build, barcodes you scan, line items parsed from receipts, the prices you record, and your savings totals. Prices you record are contributed to Tallywise's shared price data so the comparison works for everyone (see our Terms).",
          "<strong>Product details you suggest</strong> — if you add or correct a product's name, brand or pack size, your suggestion is stored against your account and, once another shopper submits matching details, used to update that product's entry in Tallywise's <strong>shared catalogue</strong>, which is visible to all users. We don't display your identity alongside it.",
          '<strong>Coupons</strong> — money-off vouchers you save (their barcode/number, value, conditions and validity dates, and the shop) are stored with your account so you can present them at the till. If you choose to <strong>give a coupon away</strong>, those coupon details are placed in a shared pool and become <strong>visible to and claimable by other Tallywise users</strong>; see "Sharing coupons" below. We also keep a per-account tally of the coupon value you\'ve given versus received, to keep sharing fair.',
          '<strong>Receipt &amp; coupon images and scan text</strong> — receipts, coupons and barcodes are read <strong>on your device</strong>. When you <strong>save a scanned receipt</strong> to your history, its image, the recognised text and the parsed result are sent to us — to build your receipt history and to improve scanning accuracy. Tapping <strong>"Report a problem"</strong> additionally sends a short note (and, for a scan you didn\'t save, the image) so we can investigate a specific misread. For a shop we don\'t yet support, you can optionally tap <strong>"Try a smart read"</strong>, which sends the receipt\'s recognised <em>text</em> (not the image) to our cloud to parse it — only when you choose to. Card data printed on receipts is removed first (see below).',
          "<strong>Approximate location</strong> — used on your device to pick the right country/currency and the nearest store. We don't send your GPS coordinates to our servers; but if you record a price or save a receipt, the resulting store name and branch may be stored with that submission.",
          '<strong>Push notifications</strong> — if you allow notifications, we store a device push token (via Firebase Cloud Messaging / Apple Push Notification service) so we can send price-drop alerts on items you\'ve scanned. We delete the token when you sign out, and you can turn notifications off in your device settings at any time.',
          '<strong>Usage analytics</strong> — via Google Analytics (Firebase), we collect app-usage events (screens viewed and actions such as scanning a receipt or recording a price) plus basic device/app info (device model, OS, app version, and a random install identifier). This is used to understand how Tallywise is used and improve it, and <strong>never includes your receipt contents, the prices you record, or your email</strong>.',
        ],
      },
      { h: 'Payment details on receipts', ps: ['Receipts can print a card scheme, masked card number, and payment identifiers. Tallywise <strong>automatically removes these before anything is stored or transmitted</strong> — card data is never retained, even in a problem report.'] },
      { h: 'How we use it', ps: ["To provide the price comparison and savings features, operate your account, investigate scans you report so the app gets more accurate, and analyse aggregate usage (via Google Analytics) to see which features are used and improve them. We don't use your data for advertising or profiling."] },
      { h: 'Sharing', ps: ['We don\'t sell your data. We use infrastructure providers to run and improve the service on our behalf: <strong>Amazon Web Services</strong> (hosting, EU/Ireland region) and <strong>Google</strong> (Google Analytics / Firebase, for usage analytics). We disclose data only if required by law.'] },
      { h: 'Sharing coupons', ps: ["If you choose to give a coupon away, the coupon's details (value, conditions, validity dates, the shop, and the barcode/number needed to redeem it) are added to a shared pool that other Tallywise users can browse and claim. This is something <strong>you opt into per coupon</strong> — coupons you simply save stay private to your account. We don't share your identity alongside a pooled coupon. A coupon you give away leaves your wallet and may be claimed by someone else; you can take it back while it's still in the pool."] },
      { h: 'Storage &amp; security', ps: ['Data is stored on AWS in the EU (Ireland), encrypted in transit (HTTPS/TLS) and at rest. Problem reports are kept only as long as needed to diagnose and improve scanning.'] },
      { h: 'Your choices', ps: ['You can <strong>export your data</strong> (your receipts, to a CSV) and <strong>delete your account and all its data</strong> directly in the app under <strong>Settings</strong> — no email needed. You can also request access, correction, or deletion, or object to your usage data being used for analytics, by emailing <a href="mailto:%EMAIL%">%EMAIL%</a>. You can revoke camera, photo, location, or notification permissions in your device settings at any time (scanning needs the camera to work).'] },
      { h: 'Children', ps: ['Tallywise is not directed at children and is intended for users aged 18 and over.'] },
      { h: 'Changes', ps: ["We'll update this page if our practices change and revise the date above."] },
    ],
  },

  terms: {
    title: 'Tallywise — Terms of Service',
    description: 'The terms governing your use of Tallywise — the price-comparison app for supermarkets in Ireland, the UK, Belgium and the Netherlands.',
    h1: 'Terms of Service',
    heroSub: 'Last updated 29 July 2026. Tallywise is operated by MonkeyLittle. Questions: <a href="mailto:%EMAIL%">%EMAIL%</a>.',
    blocks: [
      { h: 'The short version', ps: ["Tallywise is a free app that helps you compare what a basket of groceries would cost across supermarkets in Ireland, the UK, Belgium and the Netherlands. Prices are indicative and can be out of date — they're a guide, not an offer to sell, and the price at the till always wins. Use the app lawfully, keep your submissions honest, and don't try to break or abuse the service. The full agreement is below."] },
      { h: '1. Who we are &amp; accepting these terms', ps: ['Tallywise ("the app", "we", "us") is operated by MonkeyLittle. These Terms of Service govern your use of the Tallywise mobile app and related services. By creating an account or using Tallywise you agree to these terms and to our <a href="%PRIVACY%">Privacy Policy</a>. If you don\'t agree, please don\'t use the app.'] },
      { h: '2. Eligibility', ps: ['You must be at least 18 years old to use Tallywise. By using the app you confirm that you are.'] },
      { h: '3. What Tallywise does', ps: ['Tallywise lets you scan grocery receipts and product barcodes and shows how a basket\'s total compares across supermarkets in Ireland, the UK, Belgium and the Netherlands, with a tally of your savings. It also lets you save money-off coupons to present at the till and, if you choose, give them away to or claim them from other users (see "Coupons" below). Tallywise is an <strong>information service only</strong>: we are not a retailer, we don\'t sell groceries, and we don\'t process purchases or payments for any supermarket. We are not affiliated with, endorsed by, or acting on behalf of any supermarket.'] },
      { h: '4. Your account', ps: ["You sign in through our authentication provider (Amazon Cognito), including via Google or Apple. You're responsible for keeping your credentials secure and for activity under your account. Tell us at <a href=\"mailto:%EMAIL%\">%EMAIL%</a> if you believe your account has been used without your permission."] },
      {
        h: '5. Acceptable use',
        ps: ['When using Tallywise you agree not to:'],
        list: [
          'use the app for any unlawful purpose or in breach of these terms;',
          'submit false, misleading, or abusive content — including deliberately inaccurate prices;',
          "infringe anyone's intellectual property, privacy, or other rights;",
          'disrupt, overload, probe, reverse-engineer, scrape, or gain unauthorised access to the app or its systems;',
          'use automated means to access the service except as we expressly permit.',
        ],
      },
      { h: '6. Content you submit', ps: ["Tallywise relies in part on prices and product details that users record. When you submit a price, suggest product details (a name, brand or size), report a scan, or send feedback, you confirm you have the right to share it, and you grant MonkeyLittle a worldwide, royalty-free, non-exclusive licence to use, store, reproduce, and adapt that content to operate and improve the service — including combining it into anonymised, aggregated price data, and merging suggested product details into Tallywise's shared product catalogue once corroborated by another user; such data may be retained and shared even after your account is closed. You remain responsible for the content you submit. The same applies to a coupon you give away: by sharing it you confirm you're entitled to pass it on, and you make its details (including the barcode/number) available to other users to claim."] },
      { h: '7. Prices &amp; accuracy', ps: ['Prices shown in Tallywise come from a mix of crowd-sourced user submissions and publicly available information, and they change frequently. We make reasonable efforts to keep them useful but <strong>do not warrant that any price is current, accurate, or complete</strong>. Comparisons are provided for general information only and are <strong>not an offer, quotation, or guarantee</strong> of price or availability. Many own-brand and store-specific items can\'t be matched across supermarkets, so a comparison may be partial. Always check the actual price in store before you buy — the supermarket\'s till price governs.'] },
      { h: '8. Supermarket names &amp; trademarks', ps: ['Supermarket and product names, logos, and trademarks shown in Tallywise belong to their respective owners and are used only to identify the relevant retailer or product. Their use does not imply any affiliation with or endorsement by those owners.'] },
      { h: '9. Our intellectual property', ps: ["Tallywise — its name, branding, design, and software — is owned by MonkeyLittle and protected by intellectual-property laws. These terms grant you a personal, non-transferable, revocable licence to use the app for its intended purpose; they don't transfer any of our rights to you."] },
      { h: '10. Availability &amp; changes to the service', ps: ['Tallywise is provided on an "as is" and "as available" basis. We may add, change, suspend, or remove features, and the service may be unavailable from time to time for maintenance or for reasons outside our control. We don\'t guarantee uninterrupted or error-free operation.'] },
      { h: '11. Disclaimers', ps: ['To the fullest extent permitted by law, Tallywise is provided without warranties of any kind, whether express or implied — including any implied warranties of merchantability, fitness for a particular purpose, accuracy, or non-infringement. Nothing in these terms excludes or limits any warranty or right that cannot lawfully be excluded or limited.'] },
      { h: '12. Limitation of liability', ps: ['To the fullest extent permitted by law, MonkeyLittle will not be liable for any indirect, incidental, or consequential loss, or for any loss arising from your reliance on price comparisons or other information in the app. Nothing in these terms limits liability for death or personal injury caused by negligence, for fraud, or for any other liability that cannot be limited under applicable law. If you are a consumer, these terms do not affect your statutory rights.'] },
      { h: '13. Suspension &amp; termination', ps: ['You can stop using Tallywise at any time and delete your account from the app\'s Settings or by emailing us. We may suspend or end your access if you breach these terms or where reasonably necessary to protect the service or other users. On deletion, your account data is removed as described in our <a href="%PRIVACY%">Privacy Policy</a>; anonymised price data may be retained.'] },
      {
        h: '14. Coupons',
        ps: [
          'Tallywise lets you save money-off coupons and, optionally, give them away to or claim them from other users through a shared pool. Coupon details (value, conditions, validity dates and the barcode/number) are read by on-device scanning and <strong>may be misread</strong> — check them against the original coupon before relying on them.',
          'Coupons are issued by retailers, not by Tallywise. They are typically <strong>single-use, time-limited, and remain subject to the issuing retailer\'s own terms</strong>, including any restriction on transfer. You are responsible for using a coupon in line with those terms, and should only give away a coupon you are entitled to pass on.',
          'Coupons shared between users are provided <strong>"as is" and at your own risk</strong>. A coupon you claim may already have been used, may have expired, or may be refused at the till, and we <strong>cannot verify or guarantee that any coupon is valid, unused, or will be accepted</strong>. To the fullest extent permitted by law, MonkeyLittle is not liable for a coupon that does not work, for any coupon shared by another user, or for any dispute between users about a shared coupon.',
          'To keep sharing fair, claiming is subject to a <strong>give-and-take limit</strong> (you can claim a limited amount of coupon value beyond what you\'ve given away before you need to share one back). We may set, change, or enforce such limits, and remove coupons or restrict accounts, to prevent abuse of the pool.',
        ],
      },
      {
        h: '15. Privacy &amp; usage analytics',
        ps: [
          'Our <a href="%PRIVACY%">Privacy Policy</a> explains what data we collect and how we handle it — including that scanning runs on your device and that payment details printed on receipts are removed before anything is stored or sent.',
          'The app uses <strong>Google Analytics (Firebase)</strong> to collect anonymous usage data (screens viewed, in-app actions, and basic device/app information) so we can understand how Tallywise is used and improve it. This never includes your receipt contents, the prices you record, or your email. By using Tallywise you agree to this analytics collection as described in the Privacy Policy; you can ask us to stop using your usage data for analytics at any time by emailing <a href="mailto:%EMAIL%">%EMAIL%</a>.',
        ],
      },
      { h: '16. Changes to these terms', ps: ["We may update these terms from time to time. We'll revise the date above and, for significant changes, take reasonable steps to let you know. Continuing to use Tallywise after a change means you accept the updated terms."] },
      { h: '17. Governing law', ps: ['These terms are governed by the laws of Ireland, and the courts of Ireland have non-exclusive jurisdiction. If you are a consumer resident elsewhere, you keep the protection of any mandatory consumer-law rights of your country of residence.'] },
      { h: '18. Contact', ps: ['Questions about these terms: <a href="mailto:%EMAIL%">%EMAIL%</a>.'] },
    ],
  },
};
