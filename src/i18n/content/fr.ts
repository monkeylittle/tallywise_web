// French (Français). Machine-assisted translation; native review recommended
// before treating the legal pages as authoritative (the English version
// prevails — see `legalNote`). Typed as SiteContent so any missing key fails
// `astro check`.
import type { SiteContent } from './index';

export const fr: SiteContent = {
  meta: { skip: 'Aller au contenu' },

  nav: {
    howItWorks: 'Comment ça marche',
    coupons: 'Bons de réduction',
    savings: 'Économies',
    about: 'À propos',
    getApp: 'Télécharger l’app',
    langMenuLabel: 'Changer de langue',
  },

  footer: { privacy: 'Confidentialité', terms: 'Conditions', support: 'Aide' },

  buttons: {
    iphone: 'iPhone&nbsp;— App&nbsp;Store',
    android: 'Android&nbsp;— Google&nbsp;Play',
  },

  ctaSub: 'Tallywise est gratuite sur iPhone et Android.',

  legalNote: 'Cette traduction est fournie à titre indicatif ; en cas de divergence, la version anglaise prévaut.',

  home: {
    title: 'Tallywise — comparez votre panier de courses entre supermarchés',
    hero: {
      h1: 'Arrêtez de deviner où votre panier est le moins cher.',
      sub: 'Scannez un code-barres ou photographiez votre ticket de caisse, composez votre panier, et Tallywise vous montre ce qu’il coûterait dans les grands supermarchés d’Irlande, du Royaume-Uni, de Belgique et des Pays-Bas — et ce que vous avez économisé.',
      ctaGet: 'Télécharger l’app',
      ctaHow: 'Voir comment ça marche',
      note: 'Gratuite sur iPhone &amp; Android',
    },
    why: {
      h2: 'Pourquoi Tallywise, et pourquoi maintenant ?',
      lead: 'Les prix des courses ont fortement grimpé ces dernières années, et un même panier hebdomadaire peut coûter sensiblement plus ou moins cher selon le seul endroit où vous l’achetez. Chaque euro et chaque livre vaut moins qu’avant — alors payer trop cher pour les mêmes produits fait plus mal que jamais.',
      cards: [
        {
          h: 'Les prix ne restent jamais figés',
          p: 'Le même panier coûte des montants différents selon les magasins, et ces prix bougent d’une semaine à l’autre. Ce qui était le moins cher le mois dernier ne l’est peut-être plus ce mois-ci — et impossible de le juger à l’œil.',
        },
        {
          h: 'Comparer est une corvée',
          p: 'Comparer à la main, c’est jongler entre applis, dépliants et mémoire, ou faire le tour des magasins en voiture. La plupart d’entre nous n’en ont pas le temps, alors on reste dans un seul magasin et on paie trop cher, discrètement — semaine après semaine.',
        },
        {
          h: 'Tallywise fait le travail',
          p: 'Scannez un code-barres ou photographiez un ticket de caisse et Tallywise compare <em>votre</em> vrai panier en quelques secondes entre les grands supermarchés — à partir de prix que de vrais clients partagent. Pas de trajets, pas de devinettes : simplement là où vos courses sont réellement les moins chères.',
        },
      ],
    },
    how: {
      h2: 'D’un code-barres — ou d’un ticket de caisse — au panier le moins cher.',
      steps: [
        {
          h: 'Scannez',
          p: 'Scannez le code-barres d’un produit, photographiez un ticket de caisse ou une étiquette de prix en rayon. Tallywise le lit sur votre appareil et en extrait les produits et les prix.',
        },
        {
          h: 'Composez votre panier',
          p: 'Gardez le panier que vous achèteriez vraiment. Ajustez les quantités, corrigez une ligne ou retirez des produits.',
        },
        {
          h: 'Comparez &amp; économisez',
          p: 'Voyez le total en cours dans chaque supermarché où vous pourriez faire vos courses — et le bilan de ce que vous avez économisé. Sur un ticket enregistré, chaque produit que vous avez scanné reçoit une étiquette <em>bonne affaire</em> ou <em>cher</em> par rapport aux autres magasins, pour savoir où vous avez payé trop cher.',
        },
      ],
    },
    couponsSec: {
      h2: 'Ne perdez plus jamais un bon de réduction.',
      lead: 'Ces bons imprimés au bas de votre ticket de caisse ? Tallywise les enregistre sur votre téléphone et affiche le code-barres directement en caisse — le bon est ainsi dans votre poche, pas froissé dans un tiroir et périmé.',
      cards: [
        {
          h: 'Scannez &amp; enregistrez',
          p: 'Pointez Tallywise vers un bon — ou il est récupéré automatiquement quand vous photographiez un ticket. L’app lit le montant, le seuil d’achat requis et les dates de validité.',
        },
        {
          h: 'Scannez en caisse',
          p: 'Ouvrez votre portefeuille et Tallywise affiche le code-barres du bon en plein écran, prêt pour le scanner de la caisse — le bon imprimé reproduit à l’identique.',
        },
        {
          h: 'Donnez-en un, prenez-en un dont vous avez besoin',
          p: 'Un bon que vous n’utiliserez pas avant sa péremption ? Déposez-le dans le pool partagé pour quelqu’un d’autre. Besoin d’un bon pour vos courses ? Réclamez-en un qu’un voisin a donné — un échange équitable, pour que cela reste une communauté.',
        },
      ],
    },
    shots: {
      h2: 'Voyez-la dans votre main.',
      items: [
        { alt: 'Écran de scan Tallywise — scannez un code-barres ou photographiez un ticket de caisse.', caption: 'Scannez un code-barres, ou photographiez un ticket.' },
        { alt: 'Écran ticket Tallywise — produits et prix analysés depuis un ticket de caisse.', caption: 'Votre ticket, lu sur l’appareil en produits.' },
        { alt: 'Écran dépenses Tallywise — vos dépenses de courses hebdomadaires dans le temps, par catégorie.', caption: 'Voyez où passe votre budget courses.' },
      ],
    },
    stores: {
      h2: 'Où que vous fassiez vos courses.',
      note1: 'Les produits de marque distributeur n’affichent un prix que là où ils sont vendus — nous ne retirons jamais discrètement un magasin, pour que les totaux restent toujours honnêtes.',
      note2: 'Vous faites vos courses au Royaume-Uni, en Belgique ou aux Pays-Bas ? Tallywise y compare aussi les grandes enseignes — Sainsbury’s, Asda et Morrisons au Royaume-Uni ; Delhaize, Carrefour et Jumbo en Belgique ; Albert Heijn, Jumbo et Plus aux Pays-Bas — avec Aldi et Lidl partout.',
      note3: 'Tallywise est disponible en anglais, néerlandais, français et allemand, pour parler la langue de votre magasin où que vous soyez.',
    },
    faq: {
      h2: 'Questions fréquentes.',
      items: [
        { q: 'Tallywise est-elle gratuite ?', a: 'Oui — Tallywise est gratuite à l’usage.' },
        { q: 'D’où viennent les prix ?', a: 'De vraies courses. Tallywise construit son image des prix à partir des tickets et des scans que les gens partagent dans les supermarchés — plus la communauté scanne, plus votre comparaison est précise.' },
        { q: 'Qu’advient-il de mes tickets de caisse ?', a: 'Les tickets sont lus sur votre appareil. Quand vous <strong>enregistrez</strong> un ticket dans votre historique, son image et les données analysées sont envoyées à votre compte — pour que vous puissiez le consulter plus tard et pour que nous améliorions la lecture. Un scan que vous n’enregistrez pas reste sur votre téléphone, sauf si vous touchez &ldquo;Signaler un problème&rdquo;. Dans tous les cas, les données de carte imprimées sur un ticket sont supprimées automatiquement avant tout envoi.' },
        { q: 'Et les produits de marque distributeur ?', a: 'Les produits de marque distributeur ont généralement des codes-barres propres au magasin, donc le même produit n’existe pas toujours ailleurs pour la comparaison. Vous pouvez tout de même suivre son historique de prix dans le magasin qui le vend — vous saurez ainsi quand il augmente ou baisse, même sans équivalent à mettre en regard.' },
        { q: 'Tallywise fonctionne-t-elle hors ligne ?', a: 'Oui. Scannez un ticket ou enregistrez un prix sans réseau et Tallywise le garde sur votre téléphone, puis le synchronise automatiquement dès que vous êtes en ligne — un rayon en sous-sol ou une zone morte en caisse ne vous fait jamais perdre votre scan.' },
        { q: 'Puis-je récupérer mes données ?', a: 'Oui. Exportez vos tickets en CSV depuis la liste des tickets, et exportez ou supprimez votre compte et vos données depuis les Réglages à tout moment — sans e-mail.' },
        { q: 'Le nom ou la taille d’un produit semble incorrect — puis-je le corriger ?', a: 'Vous pouvez proposer une correction (nom, marque ou format) directement depuis l’écran du produit. Dès qu’un autre client confirme les mêmes informations, la fiche produit partagée est mise à jour pour tout le monde — le catalogue est construit et tenu honnête par la communauté.' },
      ],
    },
    membership: {
      h2: 'Bronze &amp; Argent — gratuits, gagnés en scannant.',
      intro: 'Chaque client commence au niveau <strong>Bronze</strong>. Scannez vos courses et étiquetez les produits au fil de l’eau, et vous grimperez au niveau <strong>Argent</strong> — les deux gratuits. (Or, un niveau payant, arrive bientôt.)',
      bronzeH: 'Bronze — votre point de départ',
      bronze: [
        'Comparez votre panier entre les supermarchés d’Irlande, du Royaume-Uni, de Belgique et des Pays-Bas',
        'Scannez des codes-barres pour vérifier et enregistrer des prix',
        '<strong>Aidez à identifier les produits</strong> — ajoutez un nom, une marque ou un format manquant',
        '<strong>Enregistrez &amp; partagez des bons de réduction</strong> à scanner en caisse',
        'Suivez vos courses, les prix comparés et vos tickets',
        'Vos <strong>2 dernières semaines</strong> d’historique de tickets',
      ],
      silverH: 'Argent — pour les membres actifs',
      silver: [
        '<strong>Alertes de baisse de prix</strong> sur les produits que vous avez scannés — <em>disponible</em>',
        '<strong>Votre historique de tickets complet</strong> (Bronze en voit 2 semaines) — <em>disponible</em>',
        '<strong>Vos dépenses suivies dans le temps</strong> — <em>disponible</em>',
        'Le magasin le moins cher pour votre panier <em>(bientôt)</em>',
        'Accès anticipé aux nouvelles fonctionnalités <em>(bientôt)</em>',
      ],
      keepH: 'Atteindre &amp; garder le niveau Argent',
      keep: 'Atteignez le niveau Argent en scannant <strong>4 tickets</strong> et en étiquetant <strong>10 codes-barres</strong> à partir de leurs lignes <strong>en deux semaines</strong>. <strong>Aider à identifier les produits compte aussi</strong> — quand vous ajoutez ou corrigez le nom, la marque ou le format d’un produit et qu’un autre client le confirme, cela compte dans ces 10 (jusqu’à 5 d’entre eux), pour récompenser l’enrichissement du catalogue. Le niveau Argent reflète votre activité des deux dernières semaines, alors <strong>continuez à scanner pour le garder</strong> — laissez-le expirer et vous redescendez au niveau Bronze jusqu’à ce que vous soyez de nouveau actif.',
    },
    get: {
      h2: 'Obtenez Tallywise.',
      sub: 'Tallywise est gratuite sur iPhone et Android, en Irlande, au Royaume-Uni, en Belgique et aux Pays-Bas. Touchez votre plateforme pour l’installer et commencer à comparer vos courses.',
      hintLabel: 'Des questions ?',
    },
  },

  howItWorks: {
    title: 'Comment fonctionne Tallywise — scanner, composer votre panier, comparer les prix',
    description: 'Du scan d’un ticket de caisse à ce que vos courses coûteraient dans chaque supermarché que vous utilisez. Une visite guidée en cinq étapes, sur l’appareil et gratuite.',
    hero: {
      h1: 'Comment fonctionne Tallywise.',
      sub: 'D’un code-barres ou d’un ticket de caisse au total de votre panier dans chaque supermarché où vous faites vos courses — en cinq étapes, avec le scan directement sur votre téléphone.',
    },
    steps: [
      {
        h: 'Photographiez un ticket',
        p: 'Ouvrez Tallywise, pointez votre appareil photo sur un ticket de caisse et touchez. Nous lisons chaque ligne, le prix par produit, le total et les économies <strong>sur votre appareil</strong>. Quand vous enregistrez le ticket dans votre historique, son image et les données analysées sont envoyées à votre compte ; un scan que vous n’enregistrez pas reste sur votre téléphone.',
      },
      {
        h: 'Scannez le code-barres de chaque produit',
        p: 'Le ticket connaît la description du produit et ce que vous avez payé, mais pas son code-barres — et c’est ce code qui permet à Tallywise de comparer le produit à tous les autres magasins. Touchez l’icône code-barres à côté de chaque ligne et scannez le produit. Vous pouvez aussi enregistrer un prix sur-le-champ en photographiant l’<strong>étiquette de prix en rayon</strong> — Tallywise lit le produit, le prix et le code-barres directement sur l’étiquette. Une fois un produit associé, Tallywise lui attribue l’étiquette <strong>bonne affaire</strong> ou <strong>cher</strong> — comment le prix que vous avez payé se compare aux autres magasins, avec le magasin le moins cher et l’écart à portée de doigt.',
      },
      {
        h: 'Composez votre panier',
        p: 'Gardez les produits que vous achèteriez vraiment. Ajustez une quantité, corrigez une ligne mal lue, retirez un produit de marque distributeur sans équivalent. Le panier est le vôtre — Tallywise ne retire jamais discrètement un produit manquant, pour que les totaux restent honnêtes.',
      },
      {
        h: 'Voyez-le chiffré dans chaque magasin',
        p: 'Tallywise met votre panier en regard des grands supermarchés de votre pays — et affiche le total en cours dans chacun, le moins cher étant mis en évidence. Les produits qu’un magasin ne vend pas affichent « non disponible ici » au lieu de disparaître discrètement.',
      },
      {
        h: 'Suivez vos dépenses dans le temps',
        p: 'Chaque ticket enregistré alimente un historique de dépenses — par semaine, par magasin, par catégorie. Touchez une barre pour voir exactement quels produits la composent. Repérez les fuites avant qu’elles ne vous rattrapent.',
      },
    ],
    shots: {
      h2: 'À quoi ça ressemble.',
      items: [
        { alt: 'Écran de scan Tallywise — commencez par un code-barres ou un ticket de caisse.', caption: 'Commencez par un code-barres ou un ticket.' },
        { alt: 'Écran ticket Tallywise — produits et prix lus depuis un ticket de caisse.', caption: 'Chaque ligne lue sur l’appareil.' },
        { alt: 'Écran dépenses Tallywise — dépenses de courses hebdomadaires dans le temps, par catégorie.', caption: 'Vos dépenses dans le temps, par catégorie.' },
      ],
    },
    ctaHeading: 'Essayez-la lors de vos prochaines courses.',
  },

  coupons: {
    title: 'Enregistrer & partager des bons de réduction — Tallywise',
    description: 'Enregistrez des bons de réduction sur votre téléphone et scannez-les en caisse. Donnez ceux que vous n’utiliserez pas, et réclamez-en un quand vous en avez besoin.',
    hero: {
      h1: 'Ne perdez plus jamais un bon de réduction.',
      sub: 'Ces bons imprimés au bas de votre ticket de caisse filent droit dans un tiroir et y expirent. Tallywise garde les vôtres dans votre poche — et vous permet de donner ceux que vous n’utiliserez pas à un autre client.',
    },
    how: {
      h2: 'Comment ça marche.',
      cards: [
        {
          h: '1. Scannez ou importez le bon',
          p: 'Pointez Tallywise vers un bon imprimé — ou collez une capture d’écran d’un bon numérique issu d’une appli d’enseigne. Tallywise lit le montant (5 € de réduction, 10 € de réduction…), le seuil d’achat requis, les dates de validité et le code-barres.',
        },
        {
          h: '2. Présentez-le en caisse',
          p: 'Ouvrez votre portefeuille, touchez le bon, et Tallywise remplit l’écran avec le même code-barres que la caissière scannerait sur le bon imprimé. Fini le « j’en avais un, il est dans la voiture je crois… »',
        },
        {
          h: '3. Ou donnez-le',
          p: 'Un bon que vous n’utiliserez pas, c’est sûr ? Touchez l’icône cadeau et il passe dans <strong>À saisir</strong> — un pool partagé que tout client Tallywise peut parcourir. On touche Réclamer, et il arrive dans leur portefeuille. Vous pouvez le reprendre à tout moment tant que personne d’autre ne l’a pris.',
        },
      ],
    },
    fair: {
      h2: 'Garder le partage équitable.',
      ps: [
        'Un pool partagé ne fonctionne que s’il n’est pas vidé par une poignée de personnes. Tallywise suit la valeur de ce que vous avez donné par rapport à ce que vous avez réclamé ; si vous avez pris bien plus que vous n’avez partagé, la réclamation se met en pause jusqu’à ce que vous en redonniez un. Ce solde est privé — personne d’autre ne le voit, et la limite est généreuse pour qu’un usage normal n’y bute jamais.',
        'Nous n’associons jamais votre nom ou votre e-mail à un bon du pool — seules les informations propres au bon (valeur, conditions, dates, code-barres) circulent.',
      ],
    },
    faq: {
      h2: 'Questions fréquentes.',
      items: [
        { q: 'Quels magasins sont pris en charge ?', a: 'Pour l’instant, les bons de réduction Dunnes Stores et SuperValu (les variantes sur ticket et dans l’appli). D’autres enseignes suivront à mesure que nous obtenons des données de calibrage pour leurs formats de bons.' },
        { q: 'Un bon qu’on m’a donné fonctionnera-t-il en caisse ?', a: 'En général oui — mais les bons sont émis par l’enseigne, pas par Tallywise. Ils sont généralement à usage unique et limités dans le temps. Nous ne pouvons pas vérifier qu’un bon partagé n’a pas déjà été utilisé ; si un bon a été utilisé ou refusé, réclamez-en un autre.' },
        { q: 'Et ma vie privée ?', a: 'Rien de vous n’est attaché à un bon que vous donnez — seulement la valeur, les dates et le code-barres propres au bon. Voir la <a href="%PRIVACY%">politique de confidentialité</a> pour le tableau complet.' },
        { q: 'Le code-barres est-il identique à l’original ?', a: 'Oui. Tallywise affiche le même code-barres que celui du bon imprimé, en plein écran et en fort contraste, pour que le scanner de la caisse le lise comme le bon papier.' },
      ],
    },
    ctaHeading: 'Essayez-la lors de vos prochaines courses.',
  },

  savings: {
    title: 'Où les clients économisent vraiment sur les courses — Tallywise',
    description: 'Comment Tallywise construit une image transparente des prix des courses entre les grands supermarchés — et ce que cela signifie pour vos courses hebdomadaires.',
    hero: {
      h1: 'Une comparaison honnête des prix des courses, construite par les clients.',
      sub: 'Le supermarché le moins cher n’est pas une réponse unique — cela dépend de ce qu’il y a réellement dans <em>votre</em> panier. Voici comment Tallywise le calcule, et ce que cela signifie pour les courses que vous faites chaque semaine.',
    },
    vary: {
      h2: 'Pourquoi les prix des courses varient autant.',
      lead: 'Une bouteille de lait de 2 L, une boîte de six œufs, un pain de mie — les mêmes produits coûtent des montants sensiblement différents selon les supermarchés, et les écarts se déplacent d’une semaine à l’autre. Quelques raisons courantes :',
      cards: [
        {
          h: 'Les promotions ne restent pas figées',
          p: 'Le « 3 pour 5 € » de ce soir devient le « 2 pour 4 € » la semaine prochaine. Chaque enseigne suit son propre cycle, donc le magasin le moins cher pour votre panier habituel change sans cesse, d’une manière que personne ne suit à la main.',
        },
        {
          h: 'Marque distributeur vs. grande marque',
          p: 'Les produits de marque distributeur d’un magasin ne s’achètent pas dans un autre, donc un panier rempli de la gamme propre d’une enseigne n’est tout simplement pas comparable à l’identique avec une autre. Les produits de grande marque, <em>si</em> — et c’est là que se trouvent les principales économies.',
        },
        {
          h: 'Tailles de conditionnement et prix au litre/kilo',
          p: 'Un paquet de 500 g dans un magasin contre 400 g dans un autre n’est pas une comparaison directe. Le prix au kg ou au litre est la seule façon honnête d’y voir clair — et les étiquettes en rayon l’indiquent presque toujours, si l’on sait où regarder.',
        },
      ],
    },
    build: {
      h2: 'Comment Tallywise construit l’image des prix.',
      ps: [
        'Tallywise repose sur la foule. Chaque client qui scanne un code-barres devant un rayon ou photographie un ticket ajoute un point de données. Ces points sont marqués avec le magasin et l’heure, pour que l’image reste fraîche — et plus les gens scannent, plus la comparaison est précise pour tous.',
        'Nous ne récupérons pas (scraping) les sites des supermarchés — leurs conditions d’utilisation l’interdisent, et les données ne correspondraient de toute façon pas toujours à ce qui est en rayon. Les vrais tickets et les vrais scans d’étiquettes sont la source de vérité.',
      ],
    },
    honest: {
      h2: 'La règle de la comparaison honnête.',
      p: 'Tallywise ne retire jamais discrètement un produit manquant d’une comparaison. Si vous avez mis un pain de marque dans votre panier et qu’un magasin ne le vend pas, la colonne de ce magasin affiche « non disponible ici » — pas un total discrètement plus bas qui le ferait paraître moins cher qu’il ne l’est. Idem pour les produits de marque distributeur : ils ne sont chiffrés que dans le magasin qui les vend. C’est le calcul en caisse qui compte ; nous veillons à ce que celui de Tallywise y corresponde.',
    },
    covered: {
      h2: 'Quels supermarchés sont couverts ?',
      list: [
        '<strong>Tesco</strong> — lecteur de tickets calibré, comparaison complète (Royaume-Uni &amp; Irlande).',
        '<strong>Dunnes Stores</strong> — calibré, avec prise en charge des bons.',
        '<strong>SuperValu</strong> — calibré.',
        '<strong>Aldi</strong> et <strong>Lidl</strong> — calibrés (papier + Lidl Plus numérique).',
        '<strong>M&amp;S</strong>, <strong>Centra</strong>, <strong>SPAR / EuroSpar</strong> — calibrés.',
        '<strong>Enseignes britanniques</strong> — Sainsbury’s, Asda, Morrisons et d’autres.',
      ],
      p: 'Tallywise est disponible en Irlande, au Royaume-Uni, en Belgique et aux Pays-Bas — Delhaize, Carrefour et Jumbo en Belgique, et Albert Heijn, Jumbo et Plus aux Pays-Bas, aux côtés d’Aldi et Lidl partout. De nouvelles enseignes arrivent dès que nous avons assez de tickets d’exemple pour calibrer le lecteur. Si un magasin que vous utilisez n’y figure pas, photographiez tout de même un ticket et touchez « Signaler un problème » — c’est ainsi que nous en ajoutons un.',
    },
    ctaHeading: 'Trouvez votre panier le moins cher.',
  },

  about: {
    title: 'À propos de Tallywise — conçue à Dublin, pour les clients',
    description: 'Qui construit Tallywise, pourquoi elle existe, comment nous contacter, et comment obtenir l’app sur iOS ou Android.',
    hero: {
      h1: 'À propos de Tallywise.',
      sub: 'Une petite app indépendante, conçue à Dublin pour rendre les courses en Irlande, au Royaume-Uni, en Belgique et aux Pays-Bas plus équitables pour ceux qui les font.',
    },
    why: {
      h2: 'Pourquoi nous l’avons créée.',
      ps: [
        'Le prix des courses hebdomadaires a fortement grimpé en 2022 et 2023, et les écarts entre supermarchés se sont creusés d’autant. Le même panier peut coûter sensiblement plus ou moins cher selon le seul endroit où vous l’achetez — et personne n’a le temps de faire le tour de trois magasins avec un bloc-notes.',
        'Tallywise, c’est la version de ce bloc-notes qui tient dans votre poche. Scannez ce que vous achetez déjà et l’app fait le travail de comparaison en coulisses, à partir de prix que de vrais clients ont enregistrés — pas des sites de supermarchés récupérés par scraping, souvent périmés et contraires aux conditions de toute façon.',
      ],
    },
    how: {
      h2: 'Comment nous travaillons.',
      list: [
        '<strong>D’abord sur l’appareil.</strong> Le scan, l’OCR et l’analyse s’exécutent sur votre téléphone. Les images de tickets ne quittent le téléphone que si vous enregistrez le ticket dans votre historique ; les codes-barres des bons ne quittent jamais l’appareil, sauf si vous choisissez de les partager.',
        '<strong>Gratuite, avec du payant plus tard.</strong> Le cœur — comparaison et bons de réduction — est gratuit et le reste. Les niveaux d’adhésion (Bronze, Argent, puis Or) vous rapportent davantage — et un niveau payant financera les frais sans mettre l’essentiel derrière un péage.',
        '<strong>Comparaison honnête.</strong> Nous ne retirons jamais discrètement un produit manquant d’une comparaison de totaux pour faire paraître un magasin moins cher. Les produits de marque distributeur affichent « non disponible ici » dans chaque autre magasin, pas une case vide.',
        '<strong>Aucun SDK publicitaire.</strong> Tallywise ne vend pas vos données et n’embarque aucun code de régie publicitaire. La seule analyse tierce dans l’app est Google Analytics, pour l’amélioration du produit — tous les détails dans la <a href="%PRIVACY%">politique de confidentialité</a>.',
      ],
    },
    who: {
      h2: 'Qui est derrière.',
      p: 'Tallywise est exploitée par <strong>MonkeyLittle</strong>, une entreprise logicielle indépendante basée à Dublin. Le produit compte actuellement un seul développeur à temps plein, épaulé par un petit groupe de bêta-testeurs en Irlande et au Royaume-Uni qui nous tiennent honnêtes sur ce qui marche et ce qui ne marche pas.',
    },
    contact: {
      h2: 'Contactez-nous.',
      p: 'Pour absolument tout — <a href="mailto:%EMAIL%">%EMAIL%</a>. Rapports de bugs, demandes de fonctionnalités, « votre scanner a raté ce ticket », « votre politique de confidentialité ne couvre pas X » — nous lisons tout et répondons en quelques jours. Pour les scans mal lus, toucher <strong>Signaler un problème</strong> dans l’app joint la photo du ticket et le texte analysé — c’est le moyen le plus rapide de corriger un lecteur.',
    },
    ctaHeading: 'Obtenez Tallywise.',
  },

  support: {
    title: 'Tallywise — Aide',
    description: 'Aide pour Tallywise — questions fréquentes, signaler un scan, aide sur le compte, et comment nous contacter.',
    hero: {
      h1: 'Aide',
      sub: 'Nous sommes une petite équipe. Écrivez à <a href="mailto:%EMAIL%">%EMAIL%</a> et nous revenons vers vous, généralement en quelques jours.',
    },
    faq: {
      h2: 'Questions fréquentes.',
      items: [
        { q: 'Un ticket ou un code-barres a été mal scanné.', a: 'Sur l’écran de résultat du scan, touchez <strong>« Signaler un problème avec ce scan »</strong>. Cela nous envoie l’image du ticket, le texte reconnu et le résultat analysé pour que nous corrigions le lecteur — c’est le moyen le plus rapide de faire corriger un scan. Vous pouvez aussi corriger n’importe quelle ligne dans le tiroir d’édition avant d’enregistrer les prix.' },
        { q: 'Un prix semble incorrect ou un magasin manque.', a: 'Les produits de marque distributeur ont souvent des codes-barres propres au magasin et ne correspondent pas entre supermarchés — Tallywise affiche « non disponible ici » plutôt que de masquer l’écart. Si un produit courant semble mal chiffré, signalez le scan et nous le revérifions.' },
        { q: 'Aide pour la connexion ou le compte.', a: 'Tallywise utilise la connexion par e-mail (plus Google et Apple). Pour réinitialiser votre mot de passe, utilisez le parcours « mot de passe oublié » dans l’app. Pour le reste, écrivez-nous.' },
        { q: 'Supprimer mon compte, ou exporter mes données.', a: 'Vous pouvez faire les deux dans l’app : <strong>Réglages → Supprimer le compte</strong> supprime votre compte et ses données, et vous pouvez exporter vos tickets en CSV depuis la liste des tickets. Vous pouvez aussi écrire depuis l’adresse de votre compte à <a href="mailto:%EMAIL%">%EMAIL%</a> et nous supprimerons votre compte et les données associées. Voir la <a href="%PRIVACY%">politique de confidentialité</a> pour ce que nous conservons.' },
        { q: 'Autorisations.', a: 'Le scan nécessite l’appareil photo ; lire la photo d’un ticket enregistré nécessite l’accès aux photos ; la localisation sert à choisir la bonne devise et le magasin le plus proche. Vos coordonnées GPS ne nous sont pas envoyées, mais le magasin et l’enseigne où vous êtes peuvent être enregistrés avec un prix ou un ticket que vous saisissez. Vous pouvez modifier cela dans les réglages de votre appareil.' },
      ],
    },
  },

  privacy: {
    title: 'Tallywise — Politique de confidentialité',
    description: 'Comment Tallywise traite vos données — scan sur l’appareil, ce que nous collectons, comment c’est utilisé, et vos choix.',
    h1: 'Politique de confidentialité',
    heroSub: 'Dernière mise à jour le 29 juillet 2026. Tallywise est exploitée par MonkeyLittle. Questions : <a href="mailto:%EMAIL%">%EMAIL%</a>.',
    blocks: [
      { h: 'La version courte', ps: ['Le scan s’exécute <strong>sur votre appareil</strong>. Nous collectons le minimum nécessaire pour comparer les prix des paniers et gérer votre compte. Nous ne vendons pas vos données et il n’y a aucun SDK publicitaire. Nous utilisons en revanche <strong>Google Analytics</strong> pour comprendre comment l’app est utilisée afin de l’améliorer — jamais le contenu de vos tickets.'] },
      {
        h: 'Ce que nous collectons',
        list: [
          '<strong>Compte</strong> — votre adresse e-mail, via notre fournisseur de connexion (Amazon Cognito), y compris quand vous utilisez la connexion Google ou Apple.',
          '<strong>Données de courses</strong> — les paniers que vous composez, les codes-barres que vous scannez, les lignes analysées depuis les tickets, les prix que vous enregistrez et vos totaux d’économies. Les prix que vous enregistrez sont versés aux données de prix partagées de Tallywise pour que la comparaison fonctionne pour tous (voir nos Conditions).',
          '<strong>Détails de produits que vous proposez</strong> — si vous ajoutez ou corrigez le nom, la marque ou le format d’un produit, votre proposition est enregistrée sur votre compte et, dès qu’un autre client soumet des informations concordantes, utilisée pour mettre à jour la fiche de ce produit dans le <strong>catalogue partagé</strong> de Tallywise, visible par tous les utilisateurs. Nous n’affichons pas votre identité à côté.',
          '<strong>Bons de réduction</strong> — les bons que vous enregistrez (leur code-barres/numéro, valeur, conditions et dates de validité, et le magasin) sont enregistrés avec votre compte pour que vous puissiez les présenter en caisse. Si vous choisissez de <strong>donner un bon</strong>, ces informations sont placées dans un pool partagé et deviennent <strong>visibles et réclamables par d’autres utilisateurs Tallywise</strong> ; voir « Partage de bons » ci-dessous. Nous tenons aussi, par compte, un solde de la valeur des bons donnés par rapport à reçus, pour garder le partage équitable.',
          '<strong>Images et texte de scan des tickets &amp; bons</strong> — les tickets, bons et codes-barres sont lus <strong>sur votre appareil</strong>. Quand vous <strong>enregistrez un ticket scanné</strong> dans votre historique, son image, le texte reconnu et le résultat analysé nous sont envoyés — pour constituer votre historique de tickets et améliorer la précision de lecture. Toucher <strong>« Signaler un problème »</strong> envoie en plus une courte note (et, pour un scan non enregistré, l’image) afin que nous puissions enquêter sur une lecture erronée précise. Pour un magasin que nous ne prenons pas encore en charge, vous pouvez, en option, toucher <strong>« Essayer une lecture intelligente »</strong>, qui envoie le <em>texte</em> reconnu du ticket (pas l’image) à notre cloud pour l’analyser — uniquement si vous le choisissez. Les données de carte imprimées sur les tickets sont supprimées au préalable (voir ci-dessous).',
          '<strong>Localisation approximative</strong> — utilisée sur votre appareil pour choisir le bon pays/la bonne devise et le magasin le plus proche. Nous n’envoyons pas vos coordonnées GPS à nos serveurs ; mais si vous enregistrez un prix ou un ticket, le nom du magasin et l’enseigne qui en résultent peuvent être enregistrés avec cette soumission.',
          '<strong>Notifications push</strong> — si vous autorisez les notifications, nous conservons un jeton push de l’appareil (via Firebase Cloud Messaging / Apple Push Notification service) pour vous envoyer des alertes de baisse de prix sur les produits que vous avez scannés. Nous supprimons le jeton à votre déconnexion, et vous pouvez désactiver les notifications à tout moment dans les réglages de votre appareil.',
          '<strong>Analyse d’usage</strong> — via Google Analytics (Firebase), nous collectons des événements d’usage de l’app (écrans consultés et actions telles que scanner un ticket ou enregistrer un prix) plus des infos basiques appareil/app (modèle, système, version de l’app et un identifiant d’installation aléatoire). Cela sert à comprendre comment Tallywise est utilisée et à l’améliorer, et <strong>n’inclut jamais le contenu de vos tickets, les prix que vous enregistrez ni votre e-mail</strong>.',
        ],
      },
      { h: 'Données de paiement sur les tickets', ps: ['Les tickets peuvent imprimer un réseau de carte, un numéro de carte masqué et des identifiants de paiement. Tallywise <strong>les supprime automatiquement avant tout enregistrement ou transmission</strong> — les données de carte ne sont jamais conservées, pas même dans un signalement de problème.'] },
      { h: 'Comment nous les utilisons', ps: ['Pour fournir la comparaison de prix et les fonctions d’économies, gérer votre compte, enquêter sur les scans que vous signalez afin que l’app gagne en précision, et analyser l’usage agrégé (via Google Analytics) pour voir quelles fonctions sont utilisées et les améliorer. Nous n’utilisons pas vos données à des fins publicitaires ou de profilage.'] },
      { h: 'Partage', ps: ['Nous ne vendons pas vos données. Nous recourons à des prestataires d’infrastructure pour exploiter et améliorer le service en notre nom : <strong>Amazon Web Services</strong> (hébergement, région UE/Irlande) et <strong>Google</strong> (Google Analytics / Firebase, pour l’analyse d’usage). Nous ne divulguons des données que si la loi l’exige.'] },
      { h: 'Partage de bons', ps: ['Si vous choisissez de donner un bon, ses informations (valeur, conditions, dates de validité, le magasin et le code-barres/numéro nécessaire pour l’utiliser) sont ajoutées à un pool partagé que d’autres utilisateurs Tallywise peuvent parcourir et réclamer. C’est un choix que vous faites <strong>bon par bon</strong> — les bons que vous vous contentez d’enregistrer restent privés à votre compte. Nous ne partageons pas votre identité à côté d’un bon mis en pool. Un bon que vous donnez quitte votre portefeuille et peut être réclamé par quelqu’un d’autre ; vous pouvez le reprendre tant qu’il est dans le pool.'] },
      { h: 'Stockage &amp; sécurité', ps: ['Les données sont stockées sur AWS dans l’UE (Irlande), chiffrées en transit (HTTPS/TLS) et au repos. Les signalements de problèmes ne sont conservés que le temps nécessaire pour diagnostiquer et améliorer la lecture.'] },
      { h: 'Vos choix', ps: ['Vous pouvez <strong>exporter vos données</strong> (vos tickets, en CSV) et <strong>supprimer votre compte et toutes ses données</strong> directement dans l’app sous <strong>Réglages</strong> — sans e-mail. Vous pouvez aussi demander l’accès, la rectification ou la suppression, ou vous opposer à l’utilisation de vos données d’usage à des fins d’analyse, en écrivant à <a href="mailto:%EMAIL%">%EMAIL%</a>. Vous pouvez révoquer les autorisations appareil photo, photos, localisation ou notifications à tout moment dans les réglages de votre appareil (le scan a besoin de l’appareil photo pour fonctionner).'] },
      { h: 'Enfants', ps: ['Tallywise ne s’adresse pas aux enfants et est destinée aux utilisateurs de 18 ans et plus.'] },
      { h: 'Modifications', ps: ['Nous mettrons cette page à jour si nos pratiques changent et réviserons la date ci-dessus.'] },
    ],
  },

  terms: {
    title: 'Tallywise — Conditions d’utilisation',
    description: 'Les conditions régissant votre utilisation de Tallywise — l’app de comparaison de prix pour les supermarchés d’Irlande, du Royaume-Uni, de Belgique et des Pays-Bas.',
    h1: 'Conditions d’utilisation',
    heroSub: 'Dernière mise à jour le 29 juillet 2026. Tallywise est exploitée par MonkeyLittle. Questions : <a href="mailto:%EMAIL%">%EMAIL%</a>.',
    blocks: [
      { h: 'La version courte', ps: ['Tallywise est une app gratuite qui vous aide à comparer ce qu’un panier de courses coûterait entre les supermarchés d’Irlande, du Royaume-Uni, de Belgique et des Pays-Bas. Les prix sont indicatifs et peuvent être périmés — ce sont des repères, pas une offre de vente, et le prix en caisse l’emporte toujours. Utilisez l’app licitement, gardez vos contributions honnêtes, et n’essayez pas de casser ou d’abuser du service. L’accord complet est ci-dessous.'] },
      { h: '1. Qui nous sommes &amp; acceptation des présentes conditions', ps: ['Tallywise (« l’app », « nous ») est exploitée par MonkeyLittle. Les présentes Conditions d’utilisation régissent votre utilisation de l’app Tallywise et des services associés. En créant un compte ou en utilisant Tallywise, vous acceptez ces conditions et notre <a href="%PRIVACY%">politique de confidentialité</a>. Si vous n’êtes pas d’accord, n’utilisez pas l’app.'] },
      { h: '2. Admissibilité', ps: ['Vous devez avoir au moins 18 ans pour utiliser Tallywise. En utilisant l’app, vous confirmez que c’est le cas.'] },
      { h: '3. Ce que fait Tallywise', ps: ['Tallywise vous permet de scanner des tickets de caisse et des codes-barres de produits et montre comment le total d’un panier se compare entre les supermarchés d’Irlande, du Royaume-Uni, de Belgique et des Pays-Bas, avec un bilan de vos économies. Elle vous permet aussi d’enregistrer des bons de réduction à présenter en caisse et, si vous le souhaitez, de les donner à ou de les réclamer d’autres utilisateurs (voir « Bons de réduction » ci-dessous). Tallywise est <strong>un service d’information uniquement</strong> : nous ne sommes pas un détaillant, nous ne vendons pas de produits, et nous ne traitons aucun achat ni paiement pour un supermarché. Nous ne sommes ni affiliés à, ni approuvés par, ni agissant pour le compte d’un supermarché.'] },
      { h: '4. Votre compte', ps: ['Vous vous connectez via notre fournisseur d’authentification (Amazon Cognito), y compris via Google ou Apple. Vous êtes responsable de la sécurité de vos identifiants et de l’activité sous votre compte. Prévenez-nous à <a href="mailto:%EMAIL%">%EMAIL%</a> si vous pensez que votre compte a été utilisé sans votre autorisation.'] },
      {
        h: '5. Utilisation acceptable',
        ps: ['En utilisant Tallywise, vous acceptez de ne pas :'],
        list: [
          'utiliser l’app à des fins illicites ou en violation des présentes conditions ;',
          'soumettre du contenu faux, trompeur ou abusif — y compris des prix délibérément inexacts ;',
          'porter atteinte à la propriété intellectuelle, à la vie privée ou aux autres droits d’autrui ;',
          'perturber, surcharger, sonder, faire de l’ingénierie inverse, récupérer par scraping ou accéder sans autorisation à l’app ou à ses systèmes ;',
          'utiliser des moyens automatisés pour accéder au service, sauf autorisation expresse de notre part.',
        ],
      },
      { h: '6. Le contenu que vous soumettez', ps: ['Tallywise repose en partie sur des prix et des détails de produits enregistrés par les utilisateurs. Lorsque vous soumettez un prix, proposez des détails de produit (nom, marque ou format), signalez un scan ou envoyez un retour, vous confirmez avoir le droit de le partager, et vous accordez à MonkeyLittle une licence mondiale, gratuite et non exclusive d’utiliser, stocker, reproduire et adapter ce contenu pour exploiter et améliorer le service — y compris en le combinant dans des données de prix anonymisées et agrégées, et en fusionnant les détails de produit proposés dans le catalogue de produits partagé de Tallywise une fois corroborés par un autre utilisateur ; ces données peuvent être conservées et partagées même après la fermeture de votre compte. Vous restez responsable du contenu que vous soumettez. Il en va de même pour un bon que vous donnez : en le partageant, vous confirmez être en droit de le transmettre, et vous rendez ses informations (y compris le code-barres/numéro) disponibles pour que d’autres utilisateurs les réclament.'] },
      { h: '7. Prix &amp; exactitude', ps: ['Les prix affichés dans Tallywise proviennent d’un mélange de contributions d’utilisateurs (crowdsourcing) et d’informations accessibles au public, et changent fréquemment. Nous faisons des efforts raisonnables pour les garder utiles mais <strong>ne garantissons pas qu’un prix soit à jour, exact ou complet</strong>. Les comparaisons sont fournies à titre d’information générale uniquement et ne constituent <strong>ni une offre, ni un devis, ni une garantie</strong> de prix ou de disponibilité. De nombreux produits de marque distributeur ou propres à un magasin ne peuvent pas être mis en correspondance entre supermarchés, de sorte qu’une comparaison peut être partielle. Vérifiez toujours le prix réel en magasin avant d’acheter — le prix en caisse du supermarché fait foi.'] },
      { h: '8. Noms &amp; marques des supermarchés', ps: ['Les noms, logos et marques de supermarchés et de produits affichés dans Tallywise appartiennent à leurs propriétaires respectifs et ne sont utilisés que pour identifier le détaillant ou le produit concerné. Leur usage n’implique aucune affiliation avec, ni approbation par, ces propriétaires.'] },
      { h: '9. Notre propriété intellectuelle', ps: ['Tallywise — son nom, son image de marque, son design et son logiciel — appartient à MonkeyLittle et est protégée par les lois de propriété intellectuelle. Les présentes conditions vous accordent une licence personnelle, non transférable et révocable d’utiliser l’app pour son usage prévu ; elles ne vous transfèrent aucun de nos droits.'] },
      { h: '10. Disponibilité &amp; modifications du service', ps: ['Tallywise est fournie « en l’état » et « selon disponibilité ». Nous pouvons ajouter, modifier, suspendre ou supprimer des fonctionnalités, et le service peut être indisponible de temps à autre pour maintenance ou pour des raisons hors de notre contrôle. Nous ne garantissons pas un fonctionnement ininterrompu ou sans erreur.'] },
      { h: '11. Exclusions de garantie', ps: ['Dans toute la mesure permise par la loi, Tallywise est fournie sans garantie d’aucune sorte, expresse ou implicite — y compris toute garantie implicite de qualité marchande, d’adéquation à un usage particulier, d’exactitude ou d’absence de contrefaçon. Rien dans les présentes conditions n’exclut ni ne limite une garantie ou un droit qui ne peut légalement être exclu ou limité.'] },
      { h: '12. Limitation de responsabilité', ps: ['Dans toute la mesure permise par la loi, MonkeyLittle ne sera pas responsable des pertes indirectes, accessoires ou consécutives, ni d’aucune perte découlant de votre confiance dans les comparaisons de prix ou d’autres informations de l’app. Rien dans les présentes conditions ne limite la responsabilité en cas de décès ou de dommage corporel causé par négligence, de fraude, ou de toute autre responsabilité qui ne peut être limitée en vertu du droit applicable. Si vous êtes un consommateur, les présentes conditions n’affectent pas vos droits légaux.'] },
      { h: '13. Suspension &amp; résiliation', ps: ['Vous pouvez cesser d’utiliser Tallywise à tout moment et supprimer votre compte depuis les Réglages de l’app ou en nous écrivant. Nous pouvons suspendre ou mettre fin à votre accès si vous enfreignez les présentes conditions ou lorsque cela est raisonnablement nécessaire pour protéger le service ou les autres utilisateurs. En cas de suppression, les données de votre compte sont supprimées comme décrit dans notre <a href="%PRIVACY%">politique de confidentialité</a> ; les données de prix anonymisées peuvent être conservées.'] },
      {
        h: '14. Bons de réduction',
        ps: [
          'Tallywise vous permet d’enregistrer des bons de réduction et, en option, de les donner à ou de les réclamer d’autres utilisateurs via un pool partagé. Les informations des bons (valeur, conditions, dates de validité et code-barres/numéro) sont lues par un scan sur l’appareil et <strong>peuvent être mal lues</strong> — vérifiez-les par rapport au bon d’origine avant de vous y fier.',
          'Les bons sont émis par les détaillants, pas par Tallywise. Ils sont généralement <strong>à usage unique, limités dans le temps et restent soumis aux conditions propres au détaillant émetteur</strong>, y compris toute restriction de transfert. Vous êtes responsable de l’utilisation d’un bon conformément à ces conditions, et ne devez donner qu’un bon que vous êtes en droit de transmettre.',
          'Les bons partagés entre utilisateurs sont fournis <strong>« en l’état » et à vos risques</strong>. Un bon que vous réclamez peut avoir déjà été utilisé, avoir expiré ou être refusé en caisse, et nous <strong>ne pouvons ni vérifier ni garantir qu’un bon est valide, non utilisé ou accepté</strong>. Dans toute la mesure permise par la loi, MonkeyLittle n’est pas responsable d’un bon qui ne fonctionne pas, d’un bon partagé par un autre utilisateur, ni d’un litige entre utilisateurs au sujet d’un bon partagé.',
          'Pour garder le partage équitable, la réclamation est soumise à une <strong>limite d’échange</strong> (vous pouvez réclamer une valeur de bons limitée au-delà de ce que vous avez donné avant de devoir en repartager un). Nous pouvons fixer, modifier ou appliquer de telles limites, et retirer des bons ou restreindre des comptes, pour prévenir les abus du pool.',
        ],
      },
      {
        h: '15. Confidentialité &amp; analyse d’usage',
        ps: [
          'Notre <a href="%PRIVACY%">politique de confidentialité</a> explique quelles données nous collectons et comment nous les traitons — y compris que le scan s’exécute sur votre appareil et que les données de paiement imprimées sur les tickets sont supprimées avant tout enregistrement ou envoi.',
          'L’app utilise <strong>Google Analytics (Firebase)</strong> pour collecter des données d’usage anonymes (écrans consultés, actions dans l’app et informations basiques appareil/app) afin de comprendre comment Tallywise est utilisée et de l’améliorer. Cela n’inclut jamais le contenu de vos tickets, les prix que vous enregistrez ni votre e-mail. En utilisant Tallywise, vous acceptez cette collecte d’analyse telle que décrite dans la politique de confidentialité ; vous pouvez nous demander à tout moment de cesser d’utiliser vos données d’usage à des fins d’analyse en écrivant à <a href="mailto:%EMAIL%">%EMAIL%</a>.',
        ],
      },
      { h: '16. Modifications des présentes conditions', ps: ['Nous pouvons mettre à jour ces conditions de temps à autre. Nous réviserons la date ci-dessus et, pour les changements importants, prendrons des mesures raisonnables pour vous en informer. Continuer à utiliser Tallywise après une modification vaut acceptation des conditions mises à jour.'] },
      { h: '17. Droit applicable', ps: ['Les présentes conditions sont régies par le droit irlandais, et les tribunaux d’Irlande ont compétence non exclusive. Si vous êtes un consommateur résidant ailleurs, vous conservez la protection des droits impératifs en matière de consommation de votre pays de résidence.'] },
      { h: '18. Contact', ps: ['Questions sur ces conditions : <a href="mailto:%EMAIL%">%EMAIL%</a>.'] },
    ],
  },
};
