// Dutch (Nederlands) — written to read naturally in Flanders as well as the
// Netherlands. Machine-assisted translation; native review recommended before
// treating the legal pages as authoritative (the English version prevails —
// see `legalNote`). Typed as SiteContent so any missing key fails `astro check`.
import type { SiteContent } from './index';

export const nl: SiteContent = {
  meta: { skip: 'Naar de inhoud' },

  nav: {
    howItWorks: 'Hoe het werkt',
    coupons: 'Kortingsbonnen',
    savings: 'Besparen',
    about: 'Over ons',
    getApp: 'Download de app',
    langMenuLabel: 'Taal wijzigen',
  },

  footer: { privacy: 'Privacy', terms: 'Voorwaarden', support: 'Hulp' },

  buttons: {
    iphone: 'iPhone&nbsp;— App&nbsp;Store',
    android: 'Android&nbsp;— Google&nbsp;Play',
  },

  ctaSub: 'Tallywise is gratis op iPhone en Android.',

  legalNote: 'Deze vertaling wordt enkel ter informatie aangeboden; bij verschillen is de Engelse versie doorslaggevend.',

  home: {
    title: 'Tallywise — vergelijk je boodschappenmandje tussen supermarkten',
    hero: {
      h1: 'Stop met gokken waar je mandje het goedkoopst is.',
      sub: 'Scan een streepjescode of maak een foto van je kassabon, stel je mandje samen, en Tallywise laat zien wat het zou kosten bij de grote supermarkten in Ierland, het VK, België en Nederland — en wat je hebt bespaard.',
      ctaGet: 'Download de app',
      ctaHow: 'Bekijk hoe het werkt',
      note: 'Gratis op iPhone &amp; Android',
    },
    why: {
      h2: 'Waarom Tallywise, en waarom nu?',
      lead: 'De boodschappen zijn de afgelopen jaren fors duurder geworden, en eenzelfde weekmandje kan merkbaar meer of minder kosten, alleen afhankelijk van waar je het koopt. Elke euro en pond levert minder op dan vroeger — dus te veel betalen voor dezelfde producten doet meer pijn dan ooit.',
      cards: [
        {
          h: 'Prijzen staan nooit stil',
          p: 'Hetzelfde mandje kost verschillende bedragen in verschillende winkels, en die prijzen bewegen week na week. Wat vorige maand het goedkoopst was, is dat deze maand misschien niet — en dat zie je met het blote oog niet.',
        },
        {
          h: 'Vergelijken is een karwei',
          p: 'Met de hand vergelijken betekent goochelen met apps, folders en je geheugen, of van winkel naar winkel rijden. De meesten van ons hebben die tijd niet, dus blijven we bij één winkel en betalen we stilletjes te veel — week na week.',
        },
        {
          h: 'Tallywise doet het werk',
          p: 'Scan een streepjescode of maak een foto van een kassabon en Tallywise vergelijkt <em>jouw</em> échte mandje in enkele seconden tussen de grote supermarkten — op basis van prijzen die echte shoppers delen. Geen gesleur, geen giswerk: gewoon waar jouw boodschappen echt het goedkoopst zijn.',
        },
      ],
    },
    how: {
      h2: 'Van een streepjescode — of een kassabon — naar het goedkoopste mandje.',
      steps: [
        {
          h: 'Scannen',
          p: 'Scan een streepjescode van een product, maak een foto van een kassabon, of fotografeer een schaplabel met de prijs. Tallywise leest het op je toestel en haalt de producten en prijzen eruit.',
        },
        {
          h: 'Stel je mandje samen',
          p: 'Houd het mandje over dat je echt zou kopen. Pas aantallen aan, verbeter een regel of verwijder producten.',
        },
        {
          h: 'Vergelijk &amp; bespaar',
          p: 'Bekijk het lopende totaal bij elke supermarkt waar je zou kunnen winkelen — en een overzicht van wat je hebt bespaard. Op een bewaarde kassabon krijgt elk product dat je hebt gescand een label <em>goede deal</em> of <em>duur</em> ten opzichte van andere winkels, zodat je weet waar je te veel betaalde.',
        },
      ],
    },
    couponsSec: {
      h2: 'Nooit meer een kortingsbon kwijt.',
      lead: 'Die bonnetjes die onderaan je kassabon worden afgedrukt? Tallywise bewaart ze op je telefoon en toont de streepjescode gewoon aan de kassa — zo zit de bon in je zak, niet verfrommeld in een lade en over datum.',
      cards: [
        {
          h: 'Scannen &amp; bewaren',
          p: 'Richt Tallywise op een kortingsbon — of hij wordt automatisch opgepikt wanneer je een kassabon fotografeert. De app leest de waarde, het benodigde bedrag en de geldigheidsdata.',
        },
        {
          h: 'Scannen aan de kassa',
          p: 'Open je portefeuille en Tallywise toont de streepjescode van de bon schermvullend, klaar voor de scanner aan de kassa — de gedrukte bon exact nagemaakt.',
        },
        {
          h: 'Geef er een weg, pak er een die je nodig hebt',
          p: 'Gebruik je een bon toch niet voor de vervaldatum? Leg hem in de gedeelde pool voor iemand anders. Zelf een bon nodig voor je boodschappen? Claim er een die een buur heeft weggegeven — eerlijk geven en nemen, zodat het een gemeenschap blijft.',
        },
      ],
    },
    shots: {
      h2: 'Zie het in je hand.',
      items: [
        { alt: 'Tallywise-scanscherm — scan een streepjescode of maak een foto van een kassabon.', caption: 'Scan een streepjescode, of fotografeer een kassabon.' },
        { alt: 'Tallywise-kassabonscherm — verwerkte producten en prijzen van een kassabon.', caption: 'Je kassabon, op het toestel omgezet in producten.' },
        { alt: 'Tallywise-uitgavenscherm — je wekelijkse boodschappenuitgaven over tijd, per categorie.', caption: 'Zie waar je boodschappengeld naartoe gaat.' },
      ],
    },
    stores: {
      h2: 'Waar je ook winkelt.',
      pickLabel: 'Kies je land',
      countryNames: { IE: 'Ierland', UK: 'Verenigd Koninkrijk', BE: 'België', NL: 'Nederland' },
      note1: 'Huismerkproducten tonen alleen prijzen waar ze in de rekken liggen — we laten nooit stilletjes een winkel weg, zodat de totalen altijd eerlijk zijn.',
      note3: 'Tallywise is beschikbaar in het Engels, Nederlands, Frans en Duits, zodat het jouw winkel spreekt waar je ook bent.',
    },
    faq: {
      h2: 'Veelgestelde vragen.',
      items: [
        { q: 'Is Tallywise gratis?', a: 'Ja — Tallywise is gratis te gebruiken.' },
        { q: 'Waar komen de prijzen vandaan?', a: 'Van echte boodschappen. Tallywise bouwt zijn prijsbeeld op uit de kassabonnen en scans die mensen delen bij de supermarkten — dus hoe meer de gemeenschap scant, hoe scherper jouw vergelijking.' },
        { q: 'Wat gebeurt er met mijn kassabonnen?', a: 'Kassabonnen worden op je toestel gelezen. Wanneer je een kassabon <strong>bewaart</strong> in je geschiedenis, worden de afbeelding en de verwerkte gegevens naar je account gestuurd — zodat je hem later kunt bekijken en zodat wij het scannen kunnen verbeteren. Een scan die je niet bewaart, blijft op je telefoon, tenzij je op &ldquo;Een probleem melden&rdquo; tikt. Hoe dan ook worden eventuele kaartgegevens op een kassabon automatisch verwijderd voordat er iets wordt verzonden.' },
        { q: 'Hoe zit het met huismerkproducten?', a: 'Huismerkproducten hebben doorgaans winkelspecifieke streepjescodes, dus hetzelfde product bestaat niet altijd bij een andere winkel om mee te vergelijken. Je kunt de prijsgeschiedenis nog steeds volgen bij de winkel die het verkoopt — zo weet je wanneer de prijs stijgt of daalt, zelfs als er geen gelijkwaardig alternatief is om ernaast te leggen.' },
        { q: 'Werkt Tallywise offline?', a: 'Ja. Scan een kassabon of registreer een prijs zonder verbinding en Tallywise bewaart het op je telefoon, en synchroniseert het automatisch de volgende keer dat je online bent — zo verlies je nooit een scan door een kelderafdeling of een dode zone aan de kassa.' },
        { q: 'Kan ik mijn gegevens exporteren?', a: 'Ja. Exporteer je kassabonnen naar een CSV vanuit de bonnenlijst, en exporteer of verwijder je account en gegevens op elk moment via Instellingen — zonder e-mail.' },
        { q: 'De naam of het formaat van een product klopt niet — kan ik dat verbeteren?', a: 'Je kunt een correctie voorstellen (naam, merk of verpakkingsgrootte) rechtstreeks vanaf het productscherm. Zodra een andere shopper dezelfde gegevens bevestigt, wordt het gedeelde productitem voor iedereen bijgewerkt — de catalogus wordt door de gemeenschap opgebouwd en eerlijk gehouden.' },
      ],
    },
    membership: {
      h2: 'Brons &amp; Zilver — gratis, verdiend door te scannen.',
      intro: 'Elke shopper begint als <strong>Brons</strong>. Scan je boodschappen en label de producten onderweg, en je klimt naar <strong>Zilver</strong> — beide gratis. (Goud, een betaalde rang, is in de maak.)',
      bronzeH: 'Brons — waar je begint',
      bronze: [
        'Vergelijk je mandje tussen supermarkten in Ierland, het VK, België en Nederland',
        'Scan streepjescodes om prijzen te controleren en te registreren',
        '<strong>Help producten te identificeren</strong> — voeg een ontbrekende naam, merk of formaat toe',
        '<strong>Bewaar &amp; deel kortingsbonnen</strong> om aan de kassa te scannen',
        'Volg je winkelbezoeken, vergeleken prijzen en kassabonnen',
        'Je laatste <strong>2 weken</strong> aan bonnengeschiedenis',
      ],
      silverH: 'Zilver — voor actieve leden',
      silver: [
        '<strong>Prijsdalingsmeldingen</strong> voor producten die je hebt gescand — <em>nu beschikbaar</em>',
        '<strong>Je volledige bonnengeschiedenis</strong> (Brons ziet 2 weken) — <em>nu beschikbaar</em>',
        '<strong>Je uitgaven gevolgd over tijd</strong> — <em>nu beschikbaar</em>',
        'De goedkoopste winkel voor jouw mandje <em>(binnenkort)</em>',
        'Vroege toegang tot nieuwe functies <em>(binnenkort)</em>',
      ],
      keepH: 'Zilver bereiken &amp; behouden',
      keep: 'Bereik Zilver door <strong>4 kassabonnen</strong> te scannen en <strong>10 streepjescodes</strong> van hun regels te labelen <strong>binnen twee weken</strong>. <strong>Producten helpen identificeren telt ook mee</strong> — wanneer je de naam, het merk of het formaat van een product toevoegt of verbetert en een andere shopper het bevestigt, telt dat mee voor die 10 (tot 5 ervan), zodat het aanvullen van de catalogus wordt beloond. Zilver weerspiegelt je activiteit van de laatste twee weken, dus <strong>blijf scannen om het te behouden</strong> — laat je het verlopen, dan zak je terug naar Brons tot je weer actief bent.',
    },
    get: {
      h2: 'Download Tallywise.',
      sub: 'Tallywise is gratis op iPhone en Android, in Ierland, het VK, België en Nederland. Tik op je platform om het te installeren en je boodschappen te vergelijken.',
      hintLabel: 'Vragen?',
    },
  },

  howItWorks: {
    title: 'Hoe Tallywise werkt — scannen, je mandje samenstellen, prijzen vergelijken',
    description: 'Van het scannen van een kassabon tot zien wat je boodschappen zouden kosten bij elke supermarkt die je gebruikt. Een doorloop in vijf stappen, op je toestel en gratis.',
    hero: {
      h1: 'Hoe Tallywise werkt.',
      sub: 'Van een streepjescode of een kassabon naar het totaal van je mandje bij elke supermarkt waar je winkelt — in vijf stappen, met het scannen gewoon op je telefoon.',
    },
    steps: [
      {
        h: 'Fotografeer een kassabon',
        p: 'Open Tallywise, richt je camera op een kassabon en tik. We lezen elke regel, de prijs per product, het totaal en de besparingen <strong>op je toestel</strong>. Wanneer je de kassabon in je geschiedenis bewaart, worden de afbeelding en de verwerkte gegevens naar je account gestuurd; een scan die je niet bewaart, blijft op je telefoon.',
      },
      {
        h: 'Scan de streepjescode van elk product',
        p: 'De kassabon kent de omschrijving van het product en wat je betaalde, maar niet de streepjescode — en die code is wat Tallywise toelaat om het product met elke andere winkel te vergelijken. Tik op het streepjescode-icoon naast elke regel en scan het product. Je kunt ook meteen een prijs registreren door het <strong>schaplabel</strong> te fotograferen — Tallywise leest het product, de prijs en de streepjescode rechtstreeks van het label. Zodra een product gekoppeld is, geeft Tallywise het het label <strong>goede deal</strong> of <strong>duur</strong> — hoe de prijs die je betaalde zich verhoudt tot andere winkels, met de goedkopere winkel en het verschil één tik verderop.',
      },
      {
        h: 'Stel je mandje samen',
        p: 'Houd de producten over die je echt zou kopen. Pas een aantal aan, verbeter een verkeerd gelezen regel, laat een huismerkproduct vallen dat geen tegenhanger heeft. Het mandje is van jou — Tallywise laat nooit stilletjes een ontbrekend product weg, zodat de totalen eerlijk blijven.',
      },
      {
        h: 'Zie het geprijsd bij elke winkel',
        p: 'Tallywise legt je mandje naast de grote supermarkten in jouw land — en toont het lopende totaal bij elk, met de goedkoopste gemarkeerd. Producten die een bepaalde winkel niet in de rekken heeft, tonen "hier niet beschikbaar" in plaats van geruisloos te verdwijnen.',
      },
      {
        h: 'Volg je uitgaven over tijd',
        p: 'Elke bewaarde kassabon telt mee in een uitgavengeschiedenis — per week, per winkel, per categorie. Tik op een balk om precies te zien welke producten die vormden. Vang de lekken voor ze jou te pakken hebben.',
      },
    ],
    shots: {
      h2: 'Hoe het eruitziet.',
      items: [
        { alt: 'Tallywise-scanscherm — begin met een streepjescode of een kassabon.', caption: 'Begin met een streepjescode of een kassabon.' },
        { alt: 'Tallywise-kassabonscherm — producten en prijzen gelezen van een kassabon.', caption: 'Elke regel op het toestel gelezen.' },
        { alt: 'Tallywise-uitgavenscherm — wekelijkse boodschappenuitgaven over tijd, per categorie.', caption: 'Je uitgaven over tijd, per categorie.' },
      ],
    },
    ctaHeading: 'Probeer het bij je volgende boodschappen.',
  },

  coupons: {
    title: 'Kortingsbonnen bewaren & delen — Tallywise',
    description: 'Bewaar kortingsbonnen op je telefoon en scan ze aan de kassa. Geef de bonnen die je niet gebruikt weg, en claim er een wanneer je er een nodig hebt.',
    hero: {
      h1: 'Nooit meer een kortingsbon kwijt.',
      sub: 'Die bonnetjes die onderaan je kassabon worden afgedrukt, belanden meteen in een lade en vervallen daar. Tallywise houdt die van jou in je zak — en laat je de bonnen die je niet gebruikt aan een andere shopper geven.',
    },
    how: {
      h2: 'Hoe het werkt.',
      cards: [
        {
          h: '1. Scan of importeer de bon',
          p: 'Richt Tallywise op een gedrukte bon — of plak een schermafbeelding van een digitale bon uit een winkel-app. Tallywise leest het bedrag (€5 korting, €10 korting…), het benodigde bedrag, de geldigheidsdata en de streepjescode.',
        },
        {
          h: '2. Toon hem aan de kassa',
          p: 'Open je portefeuille, tik op de bon, en Tallywise vult het scherm met dezelfde streepjescode die de kassamedewerker van het gedrukte bonnetje zou scannen. Geen "ik had er een, hij ligt volgens mij in de auto…" meer.',
        },
        {
          h: '3. Of geef hem weg',
          p: 'Heb je er een die je zeker niet gebruikt? Tik op het cadeau-icoon en hij verhuist naar <strong>Beschikbaar</strong> — een gedeelde pool die elke Tallywise-shopper kan doorbladeren. Zij tikken op Claimen en hij belandt in hun portefeuille. Je kunt hem altijd terugnemen voordat iemand anders dat doet.',
        },
      ],
    },
    fair: {
      h2: 'Het delen eerlijk houden.',
      ps: [
        'Een gedeelde pool werkt alleen als hij niet door een handvol mensen wordt leeggehaald. Tallywise houdt bij hoeveel waarde je hebt weggegeven tegenover hoeveel je hebt geclaimd; als je veel meer hebt genomen dan gedeeld, pauzeert het claimen tot je er een teruggeeft. Dat saldo is privé — niemand anders ziet het, en de limiet is ruim, zodat gewoon gebruik er nooit tegenaan botst.',
        'We koppelen nooit je naam of e-mail aan een bon in de pool — enkel de eigen gegevens van de bon (waarde, voorwaarden, data, streepjescode) reizen mee.',
      ],
    },
    faq: {
      h2: 'Veelgestelde vragen.',
      items: [
        { q: 'Welke winkels worden ondersteund?', a: 'Voorlopig kortingsbonnen van Dunnes Stores en SuperValu (de varianten op de kassabon en in de app). Andere ketens volgen zodra we kalibratiegegevens hebben voor hun bonformaten.' },
        { q: 'Werkt een bon die iemand mij gaf aan de kassa?', a: 'Meestal wel — maar bonnen worden uitgegeven door de winkelketen, niet door Tallywise. Ze zijn doorgaans eenmalig en tijdsgebonden. We kunnen niet controleren of een gedeelde bon nog niet gebruikt is; is een bon gebruikt of geweigerd, claim dan een andere.' },
        { q: 'Hoe zit het met mijn privacy?', a: 'Er wordt niets over jou aan een bon gekoppeld die je weggeeft — enkel de eigen waarde, data en streepjescode van de bon. Zie het <a href="%PRIVACY%">privacybeleid</a> voor het volledige plaatje.' },
        { q: 'Is de streepjescode exact dezelfde als het origineel?', a: 'Ja. Tallywise geeft dezelfde streepjescode weer als die op de gedrukte bon staat, schermvullend en met veel contrast, zodat de scanner van de kassa hem net als het bonnetje leest.' },
      ],
    },
    ctaHeading: 'Probeer het bij je volgende boodschappen.',
  },

  savings: {
    title: 'Waar shoppers echt besparen op boodschappen — Tallywise',
    description: 'Hoe Tallywise een transparant beeld opbouwt van boodschappenprijzen tussen de grote supermarkten — en wat dat betekent voor je wekelijkse boodschappen.',
    hero: {
      h1: 'Eerlijke prijsvergelijking van boodschappen, opgebouwd door shoppers.',
      sub: 'De goedkoopste supermarkt is geen vast antwoord — het hangt af van wat er echt in <em>jouw</em> mandje zit. Zo rekent Tallywise dat uit, en wat het betekent voor de boodschappen die je elke week doet.',
    },
    vary: {
      h2: 'Waarom boodschappenprijzen zo verschillen.',
      lead: 'Een fles melk van 2 l, een doosje van zes eieren, een brood in sneetjes — dezelfde producten kosten merkbaar verschillende bedragen tussen supermarkten, en de kloven verschuiven week na week. Een paar veelvoorkomende redenen:',
      cards: [
        {
          h: 'Promoties staan niet stil',
          p: 'De "3 voor €5" van vanavond is volgende week de "2 voor €4". Elke keten draait zijn eigen cyclus, dus de goedkoopste winkel voor je vaste mandje wisselt op manieren die niemand met de hand bijhoudt.',
        },
        {
          h: 'Huismerk vs. merkproduct',
          p: 'Huismerkproducten van de ene winkel kun je niet bij de andere kopen, dus een mandje vol met het eigen gamma van één keten is simpelweg niet gelijkwaardig te vergelijken met een andere. Merkproducten <em>wel</em> — en daar zitten de grootste besparingen.',
        },
        {
          h: 'Verpakkingsgroottes en prijs per eenheid',
          p: 'Een pak van 500 g in de ene winkel tegenover 400 g in de andere is geen rechtstreekse vergelijking. Per kg of per liter is de enige eerlijke manier om ernaar te kijken — en op schaplabels staat het bijna altijd, als je weet waar je moet kijken.',
        },
      ],
    },
    build: {
      h2: 'Hoe Tallywise het prijsbeeld opbouwt.',
      ps: [
        'Tallywise is crowdsourced. Elke shopper die een streepjescode voor een rek scant of een kassabon fotografeert, voegt één datapunt toe. Die datapunten worden getagd met de winkel en het tijdstip, zodat het beeld actueel blijft — en hoe meer mensen scannen, hoe scherper de vergelijking voor iedereen.',
        'We schrapen geen supermarktwebsites — hun gebruiksvoorwaarden staan dat niet toe, en de gegevens zouden sowieso niet altijd overeenkomen met wat in het rek ligt. Echte kassabonnen en echte scans van schaplabels zijn de bron van waarheid.',
      ],
    },
    honest: {
      h2: 'De regel van de eerlijke vergelijking.',
      p: 'Tallywise laat nooit stilletjes een ontbrekend product weg uit een vergelijking. Heb je een merkbrood in je mandje gelegd en een winkel heeft het niet, dan toont de kolom van die winkel "hier niet beschikbaar" — geen stilletjes lager totaal dat de winkel goedkoper doet lijken dan hij is. Hetzelfde geldt voor huismerkproducten: ze krijgen alleen een prijs bij de winkel die ze verkoopt. Het is de rekening aan de kassa die telt; wij zorgen dat de rekening van Tallywise daarmee klopt.',
    },
    covered: {
      h2: 'Welke supermarkten zijn gedekt?',
      list: [
        '<strong>Tesco</strong> — gekalibreerde bonnenlezer, volledige vergelijking (VK &amp; Ierland).',
        '<strong>Dunnes Stores</strong> — gekalibreerd, plus ondersteuning voor bonnen.',
        '<strong>SuperValu</strong> — gekalibreerd.',
        '<strong>Aldi</strong> en <strong>Lidl</strong> — gekalibreerd (papier + Lidl Plus digitaal).',
        '<strong>M&amp;S</strong>, <strong>Centra</strong>, <strong>SPAR / EuroSpar</strong> — gekalibreerd.',
        "<strong>Britse ketens</strong> — Sainsbury's, Asda, Morrisons en meer.",
      ],
      p: 'Tallywise is beschikbaar in Ierland, het VK, België en Nederland — Delhaize, Carrefour en Jumbo in België, en Albert Heijn, Jumbo en Plus in Nederland, naast Aldi en Lidl overal. Nieuwe ketens komen erbij zodra we genoeg voorbeeldbonnen hebben om de lezer te kalibreren. Staat een winkel die je gebruikt er niet bij, fotografeer dan toch een kassabon en tik op "Een probleem melden" — zo voegen we er een toe.',
    },
    ctaHeading: 'Vind je goedkoopste mandje.',
  },

  about: {
    title: 'Over Tallywise — gebouwd in Dublin, voor shoppers',
    description: 'Wie Tallywise bouwt, waarom het bestaat, hoe je contact opneemt, en hoe je de app op iOS of Android krijgt.',
    hero: {
      h1: 'Over Tallywise.',
      sub: 'Een kleine, onafhankelijke app, gebouwd in Dublin om boodschappen doen in Ierland, het VK, België en Nederland een eerlijker spel te maken voor wie het doet.',
    },
    why: {
      h2: 'Waarom we het bouwden.',
      ps: [
        'De prijs van de wekelijkse boodschappen steeg fors in 2022 en 2023, en de kloven tussen supermarkten groeiden mee. Hetzelfde mandje kan merkbaar meer of minder kosten, alleen afhankelijk van waar je het koopt — en niemand heeft de tijd om met een klembord tussen drie winkels te rijden.',
        'Tallywise is de versie van dat klembord die in je zak past. Scan wat je toch al koopt en de app doet het vergelijkingswerk achter de schermen, met prijzen die echte shoppers hebben geregistreerd — geen supermarktsites die worden geschraapt, want die zijn vaak verouderd en sowieso in strijd met de voorwaarden.',
      ],
    },
    how: {
      h2: 'Hoe we werken.',
      list: [
        '<strong>Eerst op het toestel.</strong> Scannen, OCR en verwerking gebeuren op je telefoon. Afbeeldingen van kassabonnen verlaten de telefoon alleen als je de bon in je geschiedenis bewaart; streepjescodes van bonnen verlaten het toestel nooit tenzij je ze wilt delen.',
        '<strong>Gratis, met betaald later.</strong> De kern — vergelijken en kortingsbonnen — is gratis en blijft gratis. Lidmaatschapsrangen (Brons, Zilver, later Goud) leveren je meer op — en een betaalde rang houdt de lichten aan zonder de basis achter een betaalmuur te zetten.',
        '<strong>Eerlijke vergelijking.</strong> We laten nooit stilletjes een ontbrekend product weg uit een totaalvergelijking om een winkel goedkoper te doen lijken. Huismerkproducten tonen "hier niet beschikbaar" bij elke andere winkel, geen leeg vakje.',
        '<strong>Geen advertentie-SDK\'s.</strong> Tallywise verkoopt je gegevens niet en bevat geen code van advertentienetwerken. De enige externe analyse in de app is Google Analytics voor productverbetering — alle details in het <a href="%PRIVACY%">privacybeleid</a>.',
      ],
    },
    who: {
      h2: 'Wie erachter zit.',
      p: 'Tallywise wordt beheerd door <strong>MonkeyLittle</strong>, een onafhankelijk softwarebedrijf gevestigd in Dublin. Het product heeft momenteel één voltijdse bouwer, ondersteund door een kleine groep bètatesters in Ierland en het VK die ons eerlijk houden over wat werkt en wat niet.',
    },
    contact: {
      h2: 'Neem contact op.',
      p: 'Voor om het even wat — <a href="mailto:%EMAIL%">%EMAIL%</a>. Bugmeldingen, functieverzoeken, "je scanner miste deze kassabon", "je privacybeleid dekt X niet" — we lezen alles en antwoorden binnen enkele dagen. Voor verkeerd gelezen scans voegt een tik op <strong>Een probleem melden</strong> in de app de foto van de kassabon en de verwerkte tekst toe — dat is de snelste manier om een lezer te verbeteren.',
    },
    ctaHeading: 'Download Tallywise.',
  },

  support: {
    title: 'Tallywise — Hulp',
    description: 'Hulp bij Tallywise — veelgestelde vragen, een scan melden, hulp bij je account, en hoe je ons bereikt.',
    hero: {
      h1: 'Hulp',
      sub: 'We zijn een klein team. Mail <a href="mailto:%EMAIL%">%EMAIL%</a> en we komen bij je terug, meestal binnen enkele dagen.',
    },
    faq: {
      h2: 'Veelgestelde vragen.',
      items: [
        { q: 'Een kassabon of streepjescode werd verkeerd gescand.', a: 'Tik op het scanresultaatscherm op <strong>"Een probleem met deze scan melden"</strong>. Dat stuurt ons de afbeelding van de kassabon, de herkende tekst en het verwerkte resultaat, zodat we de lezer kunnen verbeteren — het is de snelste manier om een scan te laten corrigeren. Je kunt ook elke regel in de bewerkingslade aanpassen voordat je prijzen registreert.' },
        { q: 'Een prijs lijkt verkeerd of een winkel ontbreekt.', a: 'Huismerkproducten hebben vaak winkelspecifieke streepjescodes en matchen niet tussen supermarkten — Tallywise toont "hier niet beschikbaar" in plaats van het gat te verbergen. Lijkt een gangbaar product verkeerd geprijsd, meld dan de scan en we controleren het opnieuw.' },
        { q: 'Hulp bij aanmelden of je account.', a: 'Tallywise gebruikt aanmelden met e-mail (plus Google en Apple). Voor het opnieuw instellen van je wachtwoord gebruik je de "wachtwoord vergeten"-flow in de app. Voor al het andere, mail ons.' },
        { q: 'Mijn account verwijderen of mijn gegevens exporteren.', a: 'Beide kan in de app: <strong>Instellingen → Account verwijderen</strong> verwijdert je account en de bijbehorende gegevens, en je kunt je kassabonnen naar een CSV exporteren vanuit de bonnenlijst. Je kunt ook vanaf je accountadres mailen naar <a href="mailto:%EMAIL%">%EMAIL%</a> en we verwijderen je account en de bijbehorende gegevens. Zie het <a href="%PRIVACY%">privacybeleid</a> voor wat we bewaren.' },
        { q: 'Machtigingen.', a: 'Scannen heeft de camera nodig; het lezen van een bewaarde bonfoto heeft toegang tot foto\'s nodig; locatie wordt gebruikt om de juiste munt en de dichtstbijzijnde winkel te kiezen. Je gps-coördinaten worden niet naar ons gestuurd, al kan de winkel en het filiaal waar je bent, bewaard worden bij een prijs of kassabon die je registreert. Je kunt dit wijzigen in de instellingen van je toestel.' },
      ],
    },
  },

  privacy: {
    title: 'Tallywise — Privacybeleid',
    description: 'Hoe Tallywise met je gegevens omgaat — scannen op het toestel, wat we verzamelen, hoe het wordt gebruikt, en je keuzes.',
    h1: 'Privacybeleid',
    heroSub: 'Laatst bijgewerkt op 29 juli 2026. Tallywise wordt beheerd door MonkeyLittle. Vragen: <a href="mailto:%EMAIL%">%EMAIL%</a>.',
    blocks: [
      { h: 'De korte versie', ps: ['Scannen gebeurt <strong>op je toestel</strong>. We verzamelen het minimum dat nodig is om mandjesprijzen te vergelijken en je account te beheren. We verkopen je gegevens niet en er zijn geen advertentie-SDK\'s. We gebruiken wel <strong>Google Analytics</strong> om te begrijpen hoe de app wordt gebruikt zodat we die kunnen verbeteren — nooit de inhoud van je kassabonnen.'] },
      {
        h: 'Wat we verzamelen',
        list: [
          '<strong>Account</strong> — je e-mailadres, via onze aanmeldprovider (Amazon Cognito), ook wanneer je met Google of Apple aanmeldt.',
          '<strong>Boodschappengegevens</strong> — de mandjes die je samenstelt, streepjescodes die je scant, regels die uit kassabonnen worden gehaald, de prijzen die je registreert, en je bespaartotalen. Prijzen die je registreert, worden bijgedragen aan de gedeelde prijsgegevens van Tallywise zodat de vergelijking voor iedereen werkt (zie onze Voorwaarden).',
          '<strong>Productgegevens die je voorstelt</strong> — als je de naam, het merk of de verpakkingsgrootte van een product toevoegt of verbetert, wordt je voorstel bij je account bewaard en, zodra een andere shopper overeenkomende gegevens indient, gebruikt om het item van dat product in de <strong>gedeelde catalogus</strong> van Tallywise bij te werken, die voor alle gebruikers zichtbaar is. We tonen je identiteit er niet bij.',
          '<strong>Kortingsbonnen</strong> — kortingsbonnen die je bewaart (hun streepjescode/nummer, waarde, voorwaarden en geldigheidsdata, en de winkel) worden bij je account bewaard zodat je ze aan de kassa kunt tonen. Als je ervoor kiest een <strong>bon weg te geven</strong>, worden die bongegevens in een gedeelde pool geplaatst en worden ze <strong>zichtbaar voor en claimbaar door andere Tallywise-gebruikers</strong>; zie "Bonnen delen" hieronder. We houden ook per account een saldo bij van de bonwaarde die je hebt gegeven tegenover ontvangen, om het delen eerlijk te houden.',
          '<strong>Afbeeldingen en scantekst van bonnen &amp; kassabonnen</strong> — kassabonnen, bonnen en streepjescodes worden <strong>op je toestel</strong> gelezen. Wanneer je een <strong>gescande kassabon bewaart</strong> in je geschiedenis, worden de afbeelding, de herkende tekst en het verwerkte resultaat naar ons gestuurd — om je bonnengeschiedenis op te bouwen en de scannauwkeurigheid te verbeteren. Een tik op <strong>"Een probleem melden"</strong> stuurt daarnaast een korte notitie (en, voor een scan die je niet bewaarde, de afbeelding) zodat we een specifieke leesfout kunnen onderzoeken. Voor een winkel die we nog niet ondersteunen, kun je optioneel op <strong>"Probeer een slimme lezing"</strong> tikken, wat de herkende <em>tekst</em> van de kassabon (niet de afbeelding) naar onze cloud stuurt om die te verwerken — alleen wanneer je dat kiest. Kaartgegevens die op kassabonnen staan afgedrukt, worden eerst verwijderd (zie hieronder).',
          '<strong>Bij benadering je locatie</strong> — op je toestel gebruikt om het juiste land/de juiste munt en de dichtstbijzijnde winkel te kiezen. We sturen je gps-coördinaten niet naar onze servers; maar als je een prijs registreert of een kassabon bewaart, kunnen de resulterende winkelnaam en het filiaal bij die inzending worden bewaard.',
          '<strong>Pushmeldingen</strong> — als je meldingen toestaat, bewaren we een push-token van je toestel (via Firebase Cloud Messaging / Apple Push Notification service) zodat we prijsdalingsmeldingen kunnen sturen voor producten die je hebt gescand. We verwijderen het token wanneer je je afmeldt, en je kunt meldingen op elk moment uitschakelen in de instellingen van je toestel.',
          '<strong>Gebruiksanalyse</strong> — via Google Analytics (Firebase) verzamelen we gebeurtenissen van app-gebruik (bekeken schermen en acties zoals het scannen van een kassabon of het registreren van een prijs) plus basale toestel-/app-info (toestelmodel, besturingssysteem, app-versie en een willekeurige installatie-identificator). Dit wordt gebruikt om te begrijpen hoe Tallywise wordt gebruikt en het te verbeteren, en <strong>bevat nooit de inhoud van je kassabonnen, de prijzen die je registreert of je e-mail</strong>.',
        ],
      },
      { h: 'Betaalgegevens op kassabonnen', ps: ['Kassabonnen kunnen een kaartschema, een gemaskeerd kaartnummer en betaalidentificatoren afdrukken. Tallywise <strong>verwijdert deze automatisch voordat er iets wordt bewaard of verzonden</strong> — kaartgegevens worden nooit bewaard, zelfs niet in een probleemmelding.'] },
      { h: 'Hoe we het gebruiken', ps: ['Om de prijsvergelijking en bespaarfuncties te bieden, je account te beheren, scans die je meldt te onderzoeken zodat de app nauwkeuriger wordt, en geaggregeerd gebruik te analyseren (via Google Analytics) om te zien welke functies worden gebruikt en die te verbeteren. We gebruiken je gegevens niet voor reclame of profilering.'] },
      { h: 'Delen', ps: ['We verkopen je gegevens niet. We gebruiken infrastructuuraanbieders om de dienst namens ons uit te voeren en te verbeteren: <strong>Amazon Web Services</strong> (hosting, EU/Ierland-regio) en <strong>Google</strong> (Google Analytics / Firebase, voor gebruiksanalyse). We geven gegevens alleen vrij als de wet dat vereist.'] },
      { h: 'Bonnen delen', ps: ['Als je ervoor kiest een bon weg te geven, worden de gegevens van de bon (waarde, voorwaarden, geldigheidsdata, de winkel en de streepjescode/het nummer om hem in te wisselen) toegevoegd aan een gedeelde pool die andere Tallywise-gebruikers kunnen doorbladeren en claimen. Dit is iets waar je <strong>per bon voor kiest</strong> — bonnen die je gewoon bewaart, blijven privé voor je account. We delen je identiteit niet bij een gepoolde bon. Een bon die je weggeeft, verlaat je portefeuille en kan door iemand anders geclaimd worden; je kunt hem terugnemen zolang hij in de pool zit.'] },
      { h: 'Opslag &amp; beveiliging', ps: ['Gegevens worden opgeslagen op AWS in de EU (Ierland), versleuteld tijdens overdracht (HTTPS/TLS) en in rust. Probleemmeldingen worden slechts zo lang bewaard als nodig om het scannen te diagnosticeren en te verbeteren.'] },
      { h: 'Je keuzes', ps: ['Je kunt <strong>je gegevens exporteren</strong> (je kassabonnen, naar een CSV) en <strong>je account en alle bijbehorende gegevens verwijderen</strong> rechtstreeks in de app onder <strong>Instellingen</strong> — zonder e-mail. Je kunt ook toegang, correctie of verwijdering vragen, of bezwaar maken tegen het gebruik van je gebruiksgegevens voor analyse, door te mailen naar <a href="mailto:%EMAIL%">%EMAIL%</a>. Je kunt camera-, foto-, locatie- of meldingsmachtigingen op elk moment intrekken in de instellingen van je toestel (scannen heeft de camera nodig om te werken).'] },
      { h: 'Kinderen', ps: ['Tallywise is niet gericht op kinderen en is bedoeld voor gebruikers van 18 jaar en ouder.'] },
      { h: 'Wijzigingen', ps: ['We werken deze pagina bij als onze praktijken veranderen en passen de datum hierboven aan.'] },
    ],
  },

  terms: {
    title: 'Tallywise — Gebruiksvoorwaarden',
    description: 'De voorwaarden voor je gebruik van Tallywise — de prijsvergelijkingsapp voor supermarkten in Ierland, het VK, België en Nederland.',
    h1: 'Gebruiksvoorwaarden',
    heroSub: 'Laatst bijgewerkt op 29 juli 2026. Tallywise wordt beheerd door MonkeyLittle. Vragen: <a href="mailto:%EMAIL%">%EMAIL%</a>.',
    blocks: [
      { h: 'De korte versie', ps: ['Tallywise is een gratis app die je helpt vergelijken wat een mandje boodschappen zou kosten tussen supermarkten in Ierland, het VK, België en Nederland. Prijzen zijn indicatief en kunnen verouderd zijn — ze zijn een richtlijn, geen aanbod tot verkoop, en de prijs aan de kassa wint altijd. Gebruik de app rechtmatig, houd je inzendingen eerlijk, en probeer de dienst niet te breken of te misbruiken. De volledige overeenkomst staat hieronder.'] },
      { h: '1. Wie we zijn &amp; deze voorwaarden aanvaarden', ps: ['Tallywise ("de app", "wij", "ons") wordt beheerd door MonkeyLittle. Deze Gebruiksvoorwaarden regelen je gebruik van de Tallywise-app en aanverwante diensten. Door een account aan te maken of Tallywise te gebruiken, ga je akkoord met deze voorwaarden en met ons <a href="%PRIVACY%">privacybeleid</a>. Ga je niet akkoord, gebruik de app dan niet.'] },
      { h: '2. Geschiktheid', ps: ['Je moet minstens 18 jaar oud zijn om Tallywise te gebruiken. Door de app te gebruiken bevestig je dat je dat bent.'] },
      { h: '3. Wat Tallywise doet', ps: ['Met Tallywise kun je kassabonnen en productstreepjescodes scannen en zie je hoe het totaal van een mandje zich verhoudt tussen supermarkten in Ierland, het VK, België en Nederland, met een overzicht van je besparingen. Je kunt er ook kortingsbonnen mee bewaren om aan de kassa te tonen en, als je wilt, ze weggeven aan of claimen van andere gebruikers (zie "Kortingsbonnen" hieronder). Tallywise is <strong>uitsluitend een informatiedienst</strong>: we zijn geen winkelketen, we verkopen geen boodschappen, en we verwerken geen aankopen of betalingen voor een supermarkt. We zijn niet verbonden met, gesteund door of handelend namens een supermarkt.'] },
      { h: '4. Je account', ps: ['Je meldt je aan via onze authenticatieprovider (Amazon Cognito), ook via Google of Apple. Je bent verantwoordelijk voor het veilig houden van je inloggegevens en voor de activiteit onder je account. Laat het ons weten via <a href="mailto:%EMAIL%">%EMAIL%</a> als je denkt dat je account zonder je toestemming is gebruikt.'] },
      {
        h: '5. Aanvaardbaar gebruik',
        ps: ['Bij het gebruik van Tallywise ga je ermee akkoord om niet:'],
        list: [
          'de app te gebruiken voor een onwettig doel of in strijd met deze voorwaarden;',
          'valse, misleidende of beledigende inhoud in te dienen — waaronder opzettelijk onjuiste prijzen;',
          'de intellectuele eigendom, privacy of andere rechten van wie dan ook te schenden;',
          'de app of haar systemen te verstoren, te overbelasten, te onderzoeken, te reverse-engineeren, te schrapen of er onbevoegd toegang toe te krijgen;',
          'geautomatiseerde middelen te gebruiken om de dienst te benaderen, behalve zoals wij dat uitdrukkelijk toestaan.',
        ],
      },
      { h: '6. Inhoud die je indient', ps: ['Tallywise steunt deels op prijzen en productgegevens die gebruikers registreren. Wanneer je een prijs indient, productgegevens voorstelt (een naam, merk of formaat), een scan meldt of feedback stuurt, bevestig je dat je het recht hebt om het te delen, en verleen je MonkeyLittle een wereldwijde, royaltyvrije, niet-exclusieve licentie om die inhoud te gebruiken, op te slaan, te reproduceren en aan te passen om de dienst uit te voeren en te verbeteren — waaronder het combineren ervan tot geanonimiseerde, geaggregeerde prijsgegevens, en het samenvoegen van voorgestelde productgegevens in de gedeelde productcatalogus van Tallywise zodra een andere gebruiker ze bevestigt; die gegevens kunnen bewaard en gedeeld worden, ook nadat je account is gesloten. Je blijft verantwoordelijk voor de inhoud die je indient. Hetzelfde geldt voor een bon die je weggeeft: door hem te delen bevestig je dat je hem mag doorgeven, en maak je de gegevens ervan (waaronder de streepjescode/het nummer) beschikbaar voor andere gebruikers om te claimen.'] },
      { h: '7. Prijzen &amp; nauwkeurigheid', ps: ['Prijzen in Tallywise komen uit een mix van crowdsourced gebruikersinzendingen en openbaar beschikbare informatie, en ze veranderen vaak. We doen redelijke inspanningen om ze bruikbaar te houden, maar <strong>garanderen niet dat een prijs actueel, nauwkeurig of volledig is</strong>. Vergelijkingen worden uitsluitend ter algemene informatie geboden en zijn <strong>geen aanbod, offerte of garantie</strong> van prijs of beschikbaarheid. Veel huismerk- en winkelspecifieke producten kunnen niet tussen supermarkten worden gematcht, dus een vergelijking kan onvolledig zijn. Controleer altijd de werkelijke prijs in de winkel voordat je koopt — de kassaprijs van de supermarkt is doorslaggevend.'] },
      { h: '8. Namen &amp; handelsmerken van supermarkten', ps: ['Namen, logo\'s en handelsmerken van supermarkten en producten in Tallywise behoren toe aan hun respectieve eigenaars en worden alleen gebruikt om de betreffende winkel of het product te identificeren. Het gebruik ervan impliceert geen enkele band met of goedkeuring door die eigenaars.'] },
      { h: '9. Onze intellectuele eigendom', ps: ['Tallywise — de naam, branding, het ontwerp en de software — is eigendom van MonkeyLittle en beschermd door wetten op intellectuele eigendom. Deze voorwaarden verlenen je een persoonlijke, niet-overdraagbare, herroepbare licentie om de app te gebruiken voor het beoogde doel; ze dragen geen van onze rechten aan je over.'] },
      { h: '10. Beschikbaarheid &amp; wijzigingen aan de dienst', ps: ['Tallywise wordt geleverd "zoals ze is" en "zoals beschikbaar". We kunnen functies toevoegen, wijzigen, opschorten of verwijderen, en de dienst kan van tijd tot tijd onbeschikbaar zijn wegens onderhoud of om redenen buiten onze controle. We garanderen geen ononderbroken of foutloze werking.'] },
      { h: '11. Afwijzingen', ps: ['Voor zover wettelijk toegestaan wordt Tallywise geleverd zonder enige garantie, uitdrukkelijk of impliciet — waaronder impliciete garanties van verkoopbaarheid, geschiktheid voor een bepaald doel, nauwkeurigheid of niet-inbreuk. Niets in deze voorwaarden sluit een garantie of recht uit dat wettelijk niet kan worden uitgesloten of beperkt, of beperkt dit.'] },
      { h: '12. Beperking van aansprakelijkheid', ps: ['Voor zover wettelijk toegestaan is MonkeyLittle niet aansprakelijk voor enige indirecte, incidentele of gevolgschade, of voor enig verlies dat voortvloeit uit je vertrouwen op prijsvergelijkingen of andere informatie in de app. Niets in deze voorwaarden beperkt de aansprakelijkheid voor overlijden of persoonlijk letsel door nalatigheid, voor fraude, of voor enige andere aansprakelijkheid die onder het toepasselijke recht niet kan worden beperkt. Als je een consument bent, doen deze voorwaarden geen afbreuk aan je wettelijke rechten.'] },
      { h: '13. Opschorting &amp; beëindiging', ps: ['Je kunt op elk moment stoppen met het gebruik van Tallywise en je account verwijderen via de Instellingen van de app of door ons te mailen. We kunnen je toegang opschorten of beëindigen als je deze voorwaarden schendt of waar dat redelijkerwijs nodig is om de dienst of andere gebruikers te beschermen. Bij verwijdering worden je accountgegevens verwijderd zoals beschreven in ons <a href="%PRIVACY%">privacybeleid</a>; geanonimiseerde prijsgegevens kunnen bewaard blijven.'] },
      {
        h: '14. Kortingsbonnen',
        ps: [
          'Met Tallywise kun je kortingsbonnen bewaren en, optioneel, ze weggeven aan of claimen van andere gebruikers via een gedeelde pool. Bongegevens (waarde, voorwaarden, geldigheidsdata en de streepjescode/het nummer) worden door scannen op het toestel gelezen en <strong>kunnen verkeerd gelezen worden</strong> — controleer ze aan de hand van de originele bon voordat je erop vertrouwt.',
          'Bonnen worden uitgegeven door winkelketens, niet door Tallywise. Ze zijn doorgaans <strong>eenmalig, tijdsgebonden en blijven onderworpen aan de eigen voorwaarden van de uitgevende keten</strong>, waaronder eventuele beperkingen op overdracht. Je bent verantwoordelijk voor het gebruik van een bon in lijn met die voorwaarden, en mag alleen een bon weggeven die je mag doorgeven.',
          'Bonnen die tussen gebruikers worden gedeeld, worden geleverd <strong>"zoals ze zijn" en op eigen risico</strong>. Een bon die je claimt, kan al gebruikt zijn, kan vervallen zijn of kan aan de kassa geweigerd worden, en we <strong>kunnen niet controleren of garanderen dat een bon geldig, ongebruikt of aanvaard is</strong>. Voor zover wettelijk toegestaan is MonkeyLittle niet aansprakelijk voor een bon die niet werkt, voor een bon die door een andere gebruiker is gedeeld, of voor een geschil tussen gebruikers over een gedeelde bon.',
          'Om het delen eerlijk te houden, is claimen onderworpen aan een <strong>geven-en-nemenlimiet</strong> (je kunt een beperkte hoeveelheid bonwaarde claimen bovenop wat je hebt weggegeven, voordat je er een moet teruggeven). We kunnen zulke limieten instellen, wijzigen of afdwingen, en bonnen verwijderen of accounts beperken, om misbruik van de pool te voorkomen.',
        ],
      },
      {
        h: '15. Privacy &amp; gebruiksanalyse',
        ps: [
          'Ons <a href="%PRIVACY%">privacybeleid</a> legt uit welke gegevens we verzamelen en hoe we ermee omgaan — waaronder dat scannen op je toestel gebeurt en dat betaalgegevens die op kassabonnen staan afgedrukt, worden verwijderd voordat er iets wordt bewaard of verzonden.',
          'De app gebruikt <strong>Google Analytics (Firebase)</strong> om anonieme gebruiksgegevens te verzamelen (bekeken schermen, acties in de app en basale toestel-/app-informatie) zodat we kunnen begrijpen hoe Tallywise wordt gebruikt en het kunnen verbeteren. Dit bevat nooit de inhoud van je kassabonnen, de prijzen die je registreert of je e-mail. Door Tallywise te gebruiken ga je akkoord met deze analyseverzameling zoals beschreven in het privacybeleid; je kunt ons op elk moment vragen te stoppen met het gebruik van je gebruiksgegevens voor analyse door te mailen naar <a href="mailto:%EMAIL%">%EMAIL%</a>.',
        ],
      },
      { h: '16. Wijzigingen aan deze voorwaarden', ps: ['We kunnen deze voorwaarden van tijd tot tijd bijwerken. We passen de datum hierboven aan en nemen, voor belangrijke wijzigingen, redelijke stappen om je op de hoogte te brengen. Als je Tallywise blijft gebruiken na een wijziging, aanvaard je de bijgewerkte voorwaarden.'] },
      { h: '17. Toepasselijk recht', ps: ['Deze voorwaarden worden beheerst door het recht van Ierland, en de rechtbanken van Ierland hebben niet-exclusieve bevoegdheid. Als je een consument bent die elders woont, behoud je de bescherming van eventuele dwingende consumentenrechten van je woonland.'] },
      { h: '18. Contact', ps: ['Vragen over deze voorwaarden: <a href="mailto:%EMAIL%">%EMAIL%</a>.'] },
    ],
  },
};
