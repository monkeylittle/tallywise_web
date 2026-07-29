// Single source of truth for brand + links across the site. Change these,
// not the markup. Mirrors the pattern of the old Jekyll _config.yml.

export const site = {
  name: 'Tallywise',
  url: 'https://tallywise.eu',
  lang: 'en',
  tagline: 'Stop guessing where your basket is cheapest.',
  description:
    'Scan barcodes and receipts, build a basket, and see what it costs across ' +
    'the major supermarkets in the UK & Ireland. Save money-off coupons and ' +
    'scan them at the till.',

  // Contact. NOTE: the tallywise.eu mailbox/MX still needs setting up — until
  // then this address will bounce. Swap to feedback@zavvyapp.com if you want a
  // working inbox before the domain migration completes.
  email: 'feedback@tallywise.eu',

  // Store links. iOS is LIVE on the App Store (UK + IE); Android is still in
  // closed testing on Google Play.
  appStoreId: '6769136808',
  appStoreUrl: 'https://apps.apple.com/app/id6769136808',
  playTestingUrl:
    'https://play.google.com/apps/testing/com.monkeylittle.zavvy',
  bundleId: 'com.monkeylittle.zavvy',

  // JSON-LD sameAs / social. Empty until real accounts exist.
  social: [] as string[],
} as const;

export const nav = [
  { href: '/how-it-works/', label: 'How it works' },
  { href: '/coupons/', label: 'Coupons' },
  { href: '/savings/', label: 'Savings' },
  { href: '/about/', label: 'About' },
  { href: '/#get', label: 'Get the app' },
];
