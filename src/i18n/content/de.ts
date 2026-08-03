// German (Deutsch). Machine-assisted translation; native review recommended
// before treating the legal pages as authoritative (the English version
// prevails — see `legalNote`). Typed as SiteContent so any missing key fails
// `astro check`.
import type { SiteContent } from './index';

export const de: SiteContent = {
  meta: { skip: 'Zum Inhalt springen' },

  nav: {
    howItWorks: 'So funktioniert’s',
    coupons: 'Gutscheine',
    savings: 'Sparen',
    about: 'Über uns',
    getApp: 'App herunterladen',
    langMenuLabel: 'Sprache ändern',
  },

  footer: { privacy: 'Datenschutz', terms: 'Nutzungsbedingungen', support: 'Hilfe' },

  buttons: {
    iphone: 'iPhone&nbsp;— App&nbsp;Store',
    android: 'Android&nbsp;— Google&nbsp;Play',
  },

  ctaSub: 'Tallywise ist kostenlos für iPhone und Android.',

  legalNote: 'Diese Übersetzung dient nur der Bequemlichkeit; bei Abweichungen ist die englische Fassung maßgeblich.',

  home: {
    title: 'Tallywise — vergleiche deinen Einkaufskorb zwischen Supermärkten',
    hero: {
      h1: 'Hör auf zu raten, wo dein Einkaufskorb am günstigsten ist.',
      sub: 'Scanne einen Barcode oder fotografiere deinen Kassenbon, stelle deinen Korb zusammen, und Tallywise zeigt dir, was er in den großen Supermärkten in Irland, dem Vereinigten Königreich, Belgien und den Niederlanden kosten würde — und was du gespart hast.',
      ctaGet: 'App herunterladen',
      ctaHow: 'So funktioniert’s',
      note: 'Kostenlos für iPhone &amp; Android',
    },
    why: {
      h2: 'Warum Tallywise, und warum jetzt?',
      lead: 'Die Preise für Lebensmittel sind in den letzten Jahren stark gestiegen, und derselbe Wocheneinkauf kann spürbar mehr oder weniger kosten — allein je nachdem, wo du ihn kaufst. Jeder Euro und jedes Pfund reicht weniger weit als früher — also tut es mehr weh denn je, für dieselben Produkte zu viel zu zahlen.',
      cards: [
        {
          h: 'Preise stehen nie still',
          p: 'Derselbe Korb kostet in verschiedenen Läden unterschiedliche Beträge, und diese Preise bewegen sich von Woche zu Woche. Was letzten Monat am günstigsten war, ist es diesen Monat vielleicht nicht mehr — und mit bloßem Auge lässt sich das nicht abschätzen.',
        },
        {
          h: 'Vergleichen ist eine Plackerei',
          p: 'Von Hand vergleichen heißt, mit Apps, Prospekten und Gedächtnis zu jonglieren oder von Laden zu Laden zu fahren. Die meisten von uns haben dafür keine Zeit, also bleiben wir bei einem Laden und zahlen still zu viel — Woche für Woche.',
        },
        {
          h: 'Tallywise übernimmt die Arbeit',
          p: 'Scanne einen Barcode oder fotografiere einen Kassenbon, und Tallywise vergleicht <em>deinen</em> echten Korb in Sekunden zwischen den großen Supermärkten — anhand von Preisen, die echte Kundinnen und Kunden teilen. Kein Herumfahren, kein Rätselraten: einfach, wo dein Einkauf wirklich am günstigsten ist.',
        },
      ],
    },
    how: {
      h2: 'Von einem Barcode — oder einem Kassenbon — zum günstigsten Korb.',
      steps: [
        {
          h: 'Scannen',
          p: 'Scanne den Barcode eines Produkts, fotografiere einen Kassenbon oder ein Preisschild am Regal. Tallywise liest es auf deinem Gerät und extrahiert die Artikel und Preise.',
        },
        {
          h: 'Stelle deinen Korb zusammen',
          p: 'Behalte den Korb, den du wirklich kaufen würdest. Passe Mengen an, korrigiere eine Zeile oder entferne Artikel.',
        },
        {
          h: 'Vergleichen &amp; sparen',
          p: 'Sieh die laufende Summe in jedem Supermarkt, in dem du einkaufen könntest — und eine Übersicht, was du gespart hast. Auf einem gespeicherten Kassenbon erhält jeder gescannte Artikel die Kennzeichnung <em>gutes Angebot</em> oder <em>teuer</em> im Vergleich zu anderen Läden, damit du weißt, wo du zu viel gezahlt hast.',
        },
      ],
    },
    couponsSec: {
      h2: 'Nie wieder einen Rabattgutschein verlieren.',
      lead: 'Diese Gutscheine, die unten auf deinem Kassenbon gedruckt sind? Tallywise speichert sie auf deinem Handy und zeigt den Barcode direkt an der Kasse — so steckt der Gutschein in deiner Tasche, nicht zerknüllt und abgelaufen in einer Schublade.',
      cards: [
        {
          h: 'Scannen &amp; speichern',
          p: 'Richte Tallywise auf einen Gutschein — oder er wird automatisch erfasst, wenn du einen Kassenbon fotografierst. Die App liest den Wert, den nötigen Einkaufsbetrag und die Gültigkeitsdaten.',
        },
        {
          h: 'An der Kasse scannen',
          p: 'Öffne deine Brieftasche, und Tallywise zeigt den Barcode des Gutscheins bildschirmfüllend an, bereit für den Scanner an der Kasse — der gedruckte Gutschein exakt nachgebildet.',
        },
        {
          h: 'Gib einen ab, hol dir einen, den du brauchst',
          p: 'Einen Gutschein, den du vor Ablauf nicht nutzt? Leg ihn in den geteilten Pool für jemand anderen. Selbst einen Gutschein für deinen Einkauf gebraucht? Beanspruche einen, den ein Nachbar abgegeben hat — faires Geben und Nehmen, damit es eine Gemeinschaft bleibt.',
        },
      ],
    },
    shots: {
      h2: 'Sieh sie in deiner Hand.',
      items: [
        { alt: 'Tallywise-Scan-Bildschirm — scanne einen Barcode oder fotografiere einen Kassenbon.', caption: 'Scanne einen Barcode oder fotografiere einen Kassenbon.' },
        { alt: 'Tallywise-Kassenbon-Bildschirm — erkannte Artikel und Preise von einem Kassenbon.', caption: 'Dein Kassenbon, auf dem Gerät in Artikel umgesetzt.' },
        { alt: 'Tallywise-Ausgaben-Bildschirm — deine wöchentlichen Lebensmittelausgaben über die Zeit, nach Kategorie.', caption: 'Sieh, wohin dein Einkaufsbudget fließt.' },
      ],
    },
    stores: {
      h2: 'Wo auch immer du einkaufst.',
      note1: 'Eigenmarkenprodukte zeigen nur dort Preise, wo sie geführt werden — wir lassen nie still einen Laden weg, damit die Summen immer ehrlich sind.',
      note2: 'Kaufst du im Vereinigten Königreich, in Belgien oder in den Niederlanden ein? Tallywise vergleicht dort auch die großen Ketten — Sainsbury’s, Asda und Morrisons im Vereinigten Königreich; Delhaize, Carrefour und Jumbo in Belgien; Albert Heijn, Jumbo und Plus in den Niederlanden — mit Aldi und Lidl überall.',
      note3: 'Tallywise gibt es auf Englisch, Niederländisch, Französisch und Deutsch, damit sie die Sprache deines Ladens spricht, wo du auch bist.',
    },
    faq: {
      h2: 'Häufige Fragen.',
      items: [
        { q: 'Ist Tallywise kostenlos?', a: 'Ja — Tallywise ist kostenlos nutzbar.' },
        { q: 'Woher kommen die Preise?', a: 'Aus echten Einkäufen. Tallywise baut sein Preisbild aus den Kassenbons und Scans auf, die Menschen in den Supermärkten teilen — je mehr die Gemeinschaft scannt, desto schärfer dein Vergleich.' },
        { q: 'Was passiert mit meinen Kassenbons?', a: 'Kassenbons werden auf deinem Gerät gelesen. Wenn du einen Kassenbon in deinem Verlauf <strong>speicherst</strong>, werden sein Bild und die erkannten Daten an dein Konto gesendet — damit du ihn später ansehen kannst und wir das Scannen verbessern können. Ein Scan, den du nicht speicherst, bleibt auf deinem Handy, es sei denn, du tippst auf &ldquo;Ein Problem melden&rdquo;. In jedem Fall werden etwaige auf einem Kassenbon gedruckte Kartendaten automatisch entfernt, bevor etwas gesendet wird.' },
        { q: 'Was ist mit Eigenmarkenprodukten?', a: 'Eigenmarkenprodukte haben meist ladeneigene Barcodes, sodass dasselbe Produkt nicht immer in einem anderen Laden zum Vergleich existiert. Du kannst dennoch seinen Preisverlauf in dem Laden verfolgen, der es verkauft — so weißt du, wann er steigt oder fällt, auch wenn es kein gleichwertiges Gegenstück zum Nebeneinanderlegen gibt.' },
        { q: 'Funktioniert Tallywise offline?', a: 'Ja. Scanne einen Kassenbon oder erfasse einen Preis ohne Empfang, und Tallywise speichert es auf deinem Handy und synchronisiert es automatisch, sobald du wieder online bist — ein Kellerregal oder ein Funkloch an der Kasse lässt dich nie einen Scan verlieren.' },
        { q: 'Kann ich meine Daten exportieren?', a: 'Ja. Exportiere deine Kassenbons als CSV aus der Bonliste, und exportiere oder lösche dein Konto und deine Daten jederzeit in den Einstellungen — ohne E-Mail.' },
        { q: 'Name oder Größe eines Produkts wirken falsch — kann ich das korrigieren?', a: 'Du kannst direkt vom Produktbildschirm eine Korrektur vorschlagen (Name, Marke oder Packungsgröße). Sobald ein anderer Kunde dieselben Angaben bestätigt, wird der geteilte Produkteintrag für alle aktualisiert — der Katalog wird von der Gemeinschaft aufgebaut und ehrlich gehalten.' },
      ],
    },
    membership: {
      h2: 'Bronze &amp; Silber — kostenlos, durch Scannen verdient.',
      intro: 'Jeder Kunde beginnt als <strong>Bronze</strong>. Scanne deine Einkäufe und kennzeichne die Artikel unterwegs, und du steigst zu <strong>Silber</strong> auf — beide kostenlos. (Gold, eine kostenpflichtige Stufe, ist in Arbeit.)',
      bronzeH: 'Bronze — dein Start',
      bronze: [
        'Vergleiche deinen Korb zwischen Supermärkten in Irland, dem Vereinigten Königreich, Belgien und den Niederlanden',
        'Scanne Barcodes, um Preise zu prüfen und zu erfassen',
        '<strong>Hilf, Produkte zu identifizieren</strong> — füge einen fehlenden Namen, eine Marke oder Größe hinzu',
        '<strong>Speichere &amp; teile Rabattgutscheine</strong> zum Scannen an der Kasse',
        'Verfolge deine Einkäufe, verglichene Preise und Kassenbons',
        'Deine letzten <strong>2 Wochen</strong> Bonverlauf',
      ],
      silverH: 'Silber — für aktive Mitglieder',
      silver: [
        '<strong>Preissenkungs-Benachrichtigungen</strong> für Artikel, die du gescannt hast — <em>jetzt verfügbar</em>',
        '<strong>Dein vollständiger Bonverlauf</strong> (Bronze sieht 2 Wochen) — <em>jetzt verfügbar</em>',
        '<strong>Deine Ausgaben über die Zeit verfolgt</strong> — <em>jetzt verfügbar</em>',
        'Der günstigste Laden für deinen Korb <em>(bald)</em>',
        'Früher Zugang zu neuen Funktionen <em>(bald)</em>',
      ],
      keepH: 'Silber erreichen &amp; behalten',
      keep: 'Erreiche Silber, indem du <strong>4 Kassenbons</strong> scannst und <strong>10 Barcodes</strong> aus ihren Positionen <strong>innerhalb von zwei Wochen</strong> kennzeichnest. <strong>Beim Identifizieren von Produkten zu helfen zählt ebenfalls</strong> — wenn du den Namen, die Marke oder die Größe eines Produkts hinzufügst oder korrigierst und ein anderer Kunde es bestätigt, zählt das zu diesen 10 (bis zu 5 davon), sodass das Ergänzen des Katalogs belohnt wird. Silber spiegelt deine Aktivität der letzten zwei Wochen wider, also <strong>scanne weiter, um es zu behalten</strong> — lässt du es verfallen, rutschst du auf Bronze zurück, bis du wieder aktiv bist.',
    },
    get: {
      h2: 'Hol dir Tallywise.',
      sub: 'Tallywise ist kostenlos für iPhone und Android, in Irland, dem Vereinigten Königreich, Belgien und den Niederlanden. Tippe auf deine Plattform, um sie zu installieren und deinen Einkauf zu vergleichen.',
      hintLabel: 'Fragen?',
    },
  },

  howItWorks: {
    title: 'So funktioniert Tallywise — scannen, Korb zusammenstellen, Preise vergleichen',
    description: 'Vom Scannen eines Kassenbons bis dahin, zu sehen, was dein Einkauf in jedem Supermarkt kosten würde, den du nutzt. Eine Anleitung in fünf Schritten, auf dem Gerät und kostenlos.',
    hero: {
      h1: 'So funktioniert Tallywise.',
      sub: 'Von einem Barcode oder einem Kassenbon zur Summe deines Korbs in jedem Supermarkt, in dem du einkaufst — in fünf Schritten, mit dem Scannen direkt auf deinem Handy.',
    },
    steps: [
      {
        h: 'Fotografiere einen Kassenbon',
        p: 'Öffne Tallywise, richte deine Kamera auf einen Kassenbon und tippe. Wir lesen jede Zeile, den Preis pro Artikel, die Summe und die Ersparnisse <strong>auf deinem Gerät</strong>. Wenn du den Kassenbon in deinem Verlauf speicherst, werden sein Bild und die erkannten Daten an dein Konto gesendet; ein Scan, den du nicht speicherst, bleibt auf deinem Handy.',
      },
      {
        h: 'Scanne den Barcode jedes Artikels',
        p: 'Der Kassenbon kennt die Beschreibung des Artikels und was du bezahlt hast, aber nicht seinen Barcode — und der Barcode ist es, der Tallywise erlaubt, den Artikel mit jedem anderen Laden abzugleichen. Tippe auf das Barcode-Symbol neben jeder Zeile und scanne das Produkt. Du kannst einen Preis auch sofort erfassen, indem du das <strong>Preisschild am Regal</strong> fotografierst — Tallywise liest Produkt, Preis und Barcode direkt vom Schild. Sobald ein Artikel verknüpft ist, kennzeichnet Tallywise ihn als <strong>gutes Angebot</strong> oder <strong>teuer</strong> — wie sich der von dir bezahlte Preis mit anderen Läden vergleicht, mit dem günstigeren Laden und der Differenz nur einen Tipp entfernt.',
      },
      {
        h: 'Stelle deinen Korb zusammen',
        p: 'Behalte die Artikel, die du wirklich kaufen würdest. Passe eine Menge an, korrigiere eine falsch gelesene Zeile, lass ein Eigenmarkenprodukt ohne Gegenstück weg. Der Korb gehört dir — Tallywise lässt nie still einen fehlenden Artikel weg, damit die Summen ehrlich bleiben.',
      },
      {
        h: 'Sieh ihn in jedem Laden beziffert',
        p: 'Tallywise stellt deinen Korb den großen Supermärkten deines Landes gegenüber — und zeigt die laufende Summe in jedem, wobei der günstigste hervorgehoben wird. Artikel, die ein bestimmter Laden nicht führt, zeigen „hier nicht verfügbar“ statt still zu verschwinden.',
      },
      {
        h: 'Verfolge deine Ausgaben über die Zeit',
        p: 'Jeder gespeicherte Kassenbon fließt in einen Ausgabenverlauf ein — nach Woche, nach Laden, nach Kategorie. Tippe auf einen Balken, um genau zu sehen, welche Artikel ihn ausmachten. Erwische die Lecks, bevor sie dich erwischen.',
      },
    ],
    shots: {
      h2: 'So sieht es aus.',
      items: [
        { alt: 'Tallywise-Scan-Bildschirm — beginne mit einem Barcode oder einem Kassenbon.', caption: 'Beginne mit einem Barcode oder einem Kassenbon.' },
        { alt: 'Tallywise-Kassenbon-Bildschirm — Artikel und Preise von einem Kassenbon gelesen.', caption: 'Jede Zeile auf dem Gerät gelesen.' },
        { alt: 'Tallywise-Ausgaben-Bildschirm — wöchentliche Lebensmittelausgaben über die Zeit, nach Kategorie.', caption: 'Deine Ausgaben über die Zeit, nach Kategorie.' },
      ],
    },
    ctaHeading: 'Probier sie bei deinem nächsten Einkauf.',
  },

  coupons: {
    title: 'Rabattgutscheine speichern & teilen — Tallywise',
    description: 'Speichere Rabattgutscheine auf deinem Handy und scanne sie an der Kasse. Gib die, die du nicht nutzt, ab, und beanspruche einen, wenn du ihn brauchst.',
    hero: {
      h1: 'Nie wieder einen Rabattgutschein verlieren.',
      sub: 'Diese Gutscheine, die unten auf deinem Kassenbon gedruckt sind, wandern direkt in eine Schublade und verfallen dort. Tallywise behält deine in deiner Tasche — und lässt dich die, die du nicht nutzt, an einen anderen Kunden abgeben.',
    },
    how: {
      h2: 'So funktioniert’s.',
      cards: [
        {
          h: '1. Gutschein scannen oder importieren',
          p: 'Richte Tallywise auf einen gedruckten Gutschein — oder füge einen Screenshot eines digitalen Gutscheins aus einer Händler-App ein. Tallywise liest den Betrag (5 € Rabatt, 10 € Rabatt…), den nötigen Einkaufsbetrag, die Gültigkeitsdaten und den Barcode.',
        },
        {
          h: '2. An der Kasse zeigen',
          p: 'Öffne deine Brieftasche, tippe auf den Gutschein, und Tallywise füllt den Bildschirm mit demselben Barcode, den die Kassiererin vom gedruckten Bon scannen würde. Kein „ich hatte einen, der liegt glaube ich im Auto…“ mehr.',
        },
        {
          h: '3. Oder gib ihn ab',
          p: 'Einen, den du sicher nicht nutzt? Tippe auf das Geschenk-Symbol, und er wandert in <strong>Zu haben</strong> — einen geteilten Pool, den jeder Tallywise-Kunde durchsehen kann. Man tippt auf Beanspruchen, und er landet in seiner Brieftasche. Du kannst ihn jederzeit zurücknehmen, bevor es jemand anderes tut.',
        },
      ],
    },
    fair: {
      h2: 'Das Teilen fair halten.',
      ps: [
        'Ein geteilter Pool funktioniert nur, wenn er nicht von einer Handvoll Leuten leergeräumt wird. Tallywise verfolgt den Wert dessen, was du abgegeben hast, gegenüber dem, was du beansprucht hast; hast du deutlich mehr genommen als geteilt, pausiert das Beanspruchen, bis du einen zurückgibst. Dieser Saldo ist privat — niemand sonst sieht ihn, und die Grenze ist großzügig, sodass normale Nutzung nie daran stößt.',
        'Wir verknüpfen nie deinen Namen oder deine E-Mail mit einem Gutschein im Pool — nur die eigenen Angaben des Gutscheins (Wert, Bedingungen, Daten, Barcode) reisen mit.',
      ],
    },
    faq: {
      h2: 'Häufige Fragen.',
      items: [
        { q: 'Welche Läden werden unterstützt?', a: 'Vorerst Rabattgutscheine von Dunnes Stores und SuperValu (die Varianten auf dem Bon und in der App). Weitere Ketten folgen, sobald wir Kalibrierungsdaten für ihre Gutscheinformate haben.' },
        { q: 'Funktioniert ein Gutschein, den mir jemand gegeben hat, an der Kasse?', a: 'Meistens ja — aber Gutscheine werden vom Händler ausgegeben, nicht von Tallywise. Sie sind in der Regel einmalig und zeitlich begrenzt. Wir können nicht überprüfen, ob ein geteilter Gutschein nicht bereits eingelöst wurde; wurde ein Gutschein verwendet oder abgelehnt, beanspruche einen anderen.' },
        { q: 'Was ist mit meiner Privatsphäre?', a: 'Nichts über dich wird an einen Gutschein geheftet, den du abgibst — nur der eigene Wert, die Daten und der Barcode des Gutscheins. Siehe die <a href="%PRIVACY%">Datenschutzerklärung</a> für das ganze Bild.' },
        { q: 'Ist der Barcode identisch mit dem Original?', a: 'Ja. Tallywise gibt denselben Barcode wie der gedruckte Gutschein wieder, bildschirmfüllend und kontrastreich, sodass der Scanner an der Kasse ihn wie den Bon liest.' },
      ],
    },
    ctaHeading: 'Probier sie bei deinem nächsten Einkauf.',
  },

  savings: {
    title: 'Wo Kunden wirklich bei Lebensmitteln sparen — Tallywise',
    description: 'Wie Tallywise ein transparentes Bild der Lebensmittelpreise zwischen den großen Supermärkten aufbaut — und was das für deinen Wocheneinkauf bedeutet.',
    hero: {
      h1: 'Ehrlicher Lebensmittel-Preisvergleich, von Kunden aufgebaut.',
      sub: 'Der günstigste Supermarkt ist keine einzelne Antwort — es hängt davon ab, was tatsächlich in <em>deinem</em> Korb liegt. So rechnet Tallywise das aus, und was es für den Einkauf bedeutet, den du jede Woche machst.',
    },
    vary: {
      h2: 'Warum Lebensmittelpreise so stark schwanken.',
      lead: 'Eine 2-l-Flasche Milch, ein Sechserpack Eier, ein Toastbrot — dieselben Produkte kosten in verschiedenen Supermärkten spürbar unterschiedliche Beträge, und die Abstände verschieben sich von Woche zu Woche. Ein paar häufige Gründe:',
      cards: [
        {
          h: 'Aktionen stehen nicht still',
          p: 'Das „3 für 5 €“ von heute Abend ist nächste Woche das „2 für 4 €“. Jede Kette fährt ihren eigenen Zyklus, also wechselt der günstigste Laden für deinen Standardkorb ständig — auf eine Weise, die niemand von Hand verfolgt.',
        },
        {
          h: 'Eigenmarke vs. Markenprodukt',
          p: 'Eigenmarkenprodukte eines Ladens lassen sich in einem anderen nicht kaufen, also ist ein Korb voll mit dem Eigensortiment einer Kette schlicht nicht gleichwertig mit einem anderen vergleichbar. Markenprodukte <em>schon</em> — und dort stecken die größten Ersparnisse.',
        },
        {
          h: 'Packungsgrößen und Grundpreis',
          p: 'Eine 500-g-Packung im einen Laden gegen 400 g im anderen ist kein direkter Vergleich. Der Preis pro kg oder Liter ist die einzige ehrliche Betrachtung — und auf Regaletiketten steht er fast immer, wenn man weiß, wo man hinsehen muss.',
        },
      ],
    },
    build: {
      h2: 'Wie Tallywise das Preisbild aufbaut.',
      ps: [
        'Tallywise ist crowdbasiert. Jeder Kunde, der einen Barcode vor einem Regal scannt oder einen Kassenbon fotografiert, fügt einen Datenpunkt hinzu. Diese Datenpunkte werden mit Laden und Zeitpunkt versehen, damit das Bild aktuell bleibt — und je mehr Menschen scannen, desto schärfer der Vergleich für alle.',
        'Wir scrapen keine Supermarkt-Websites — deren Nutzungsbedingungen erlauben das nicht, und die Daten würden ohnehin nicht immer mit dem übereinstimmen, was im Regal steht. Echte Kassenbons und echte Regaletiketten-Scans sind die verlässliche Quelle.',
      ],
    },
    honest: {
      h2: 'Die Regel des ehrlichen Vergleichs.',
      p: 'Tallywise lässt nie still einen fehlenden Artikel aus einem Vergleich weg. Hast du ein Markenbrot in deinen Korb gelegt und ein Laden führt es nicht, zeigt die Spalte dieses Ladens „hier nicht verfügbar“ — keine still niedrigere Summe, die ihn günstiger erscheinen lässt, als er ist. Genauso bei Eigenmarkenprodukten: Sie werden nur in dem Laden beziffert, der sie verkauft. Was zählt, ist die Rechnung an der Kasse; wir sorgen dafür, dass Tallywises Rechnung dazu passt.',
    },
    covered: {
      h2: 'Welche Supermärkte sind abgedeckt?',
      list: [
        '<strong>Tesco</strong> — kalibrierter Bon-Leser, vollständiger Vergleich (Vereinigtes Königreich &amp; Irland).',
        '<strong>Dunnes Stores</strong> — kalibriert, mit Gutschein-Unterstützung.',
        '<strong>SuperValu</strong> — kalibriert.',
        '<strong>Aldi</strong> und <strong>Lidl</strong> — kalibriert (Papier + Lidl Plus digital).',
        '<strong>M&amp;S</strong>, <strong>Centra</strong>, <strong>SPAR / EuroSpar</strong> — kalibriert.',
        '<strong>Britische Ketten</strong> — Sainsbury’s, Asda, Morrisons und mehr.',
      ],
      p: 'Tallywise ist in Irland, dem Vereinigten Königreich, Belgien und den Niederlanden verfügbar — Delhaize, Carrefour und Jumbo in Belgien, und Albert Heijn, Jumbo und Plus in den Niederlanden, neben Aldi und Lidl überall. Neue Ketten kommen hinzu, sobald wir genug Beispiel-Bons haben, um den Leser zu kalibrieren. Ist ein Laden, den du nutzt, nicht dabei, fotografiere trotzdem einen Kassenbon und tippe auf „Ein Problem melden“ — so fügen wir einen hinzu.',
    },
    ctaHeading: 'Finde deinen günstigsten Korb.',
  },

  about: {
    title: 'Über Tallywise — in Dublin entwickelt, für Kunden',
    description: 'Wer Tallywise entwickelt, warum es sie gibt, wie du Kontakt aufnimmst und wie du die App für iOS oder Android bekommst.',
    hero: {
      h1: 'Über Tallywise.',
      sub: 'Eine kleine, unabhängige App, in Dublin entwickelt, um den Lebensmitteleinkauf in Irland, dem Vereinigten Königreich, Belgien und den Niederlanden fairer zu machen — für die, die ihn erledigen.',
    },
    why: {
      h2: 'Warum wir sie entwickelt haben.',
      ps: [
        'Der Preis des Wocheneinkaufs ist 2022 und 2023 stark gestiegen, und die Abstände zwischen Supermärkten wuchsen mit. Derselbe Korb kann spürbar mehr oder weniger kosten — allein je nachdem, wo du ihn kaufst — und niemand hat die Zeit, mit einem Klemmbrett zwischen drei Läden zu fahren.',
        'Tallywise ist die Version dieses Klemmbretts, die in deine Tasche passt. Scanne, was du ohnehin kaufst, und die App erledigt die Vergleichsarbeit im Hintergrund — anhand von Preisen, die echte Kunden erfasst haben, nicht durch Scraping von Supermarkt-Seiten, die oft veraltet und ohnehin gegen die Bedingungen sind.',
      ],
    },
    how: {
      h2: 'Wie wir arbeiten.',
      list: [
        '<strong>Zuerst auf dem Gerät.</strong> Scannen, OCR und Auswertung laufen auf deinem Handy. Bilder von Kassenbons verlassen das Handy nur, wenn du den Bon in deinem Verlauf speicherst; Gutschein-Barcodes verlassen das Gerät nie, es sei denn, du entscheidest dich, sie zu teilen.',
        '<strong>Kostenlos, mit Bezahltem später.</strong> Der Kern — Vergleich und Gutscheine — ist kostenlos und bleibt es. Mitgliedsstufen (Bronze, Silber, später Gold) bringen dir mehr — und eine kostenpflichtige Stufe finanziert den Betrieb, ohne die Grundfunktionen hinter eine Bezahlschranke zu stellen.',
        '<strong>Ehrlicher Vergleich.</strong> Wir lassen nie still einen fehlenden Artikel aus einem Summenvergleich weg, um einen Laden günstiger erscheinen zu lassen. Eigenmarkenprodukte zeigen „hier nicht verfügbar“ in jedem anderen Laden, kein leeres Feld.',
        '<strong>Keine Werbe-SDKs.</strong> Tallywise verkauft deine Daten nicht und enthält keinen Code von Werbenetzwerken. Die einzige Drittanbieter-Analyse in der App ist Google Analytics zur Produktverbesserung — alle Details in der <a href="%PRIVACY%">Datenschutzerklärung</a>.',
      ],
    },
    who: {
      h2: 'Wer dahintersteckt.',
      p: 'Tallywise wird von <strong>MonkeyLittle</strong> betrieben, einem unabhängigen Softwareunternehmen mit Sitz in Dublin. Das Produkt hat derzeit einen Vollzeit-Entwickler, unterstützt von einer kleinen Gruppe Betatester in Irland und dem Vereinigten Königreich, die uns ehrlich halten, was funktioniert und was nicht.',
    },
    contact: {
      h2: 'Kontakt aufnehmen.',
      p: 'Für alles Mögliche — <a href="mailto:%EMAIL%">%EMAIL%</a>. Fehlermeldungen, Funktionswünsche, „dein Scanner hat diesen Bon verpasst“, „deine Datenschutzerklärung deckt X nicht ab“ — wir lesen alles und antworten innerhalb weniger Tage. Bei Fehllesungen fügt ein Tippen auf <strong>Ein Problem melden</strong> in der App das Bonfoto und den erkannten Text bei — der schnellste Weg, einen Leser zu verbessern.',
    },
    ctaHeading: 'Hol dir Tallywise.',
  },

  support: {
    title: 'Tallywise — Hilfe',
    description: 'Hilfe zu Tallywise — häufige Fragen, einen Scan melden, Konto-Hilfe und wie du uns erreichst.',
    hero: {
      h1: 'Hilfe',
      sub: 'Wir sind ein kleines Team. Schreib an <a href="mailto:%EMAIL%">%EMAIL%</a>, und wir melden uns zurück, meist innerhalb weniger Tage.',
    },
    faq: {
      h2: 'Häufige Fragen.',
      items: [
        { q: 'Ein Kassenbon oder Barcode wurde falsch gescannt.', a: 'Tippe auf dem Ergebnisbildschirm des Scans auf <strong>„Ein Problem mit diesem Scan melden“</strong>. Das sendet uns das Bild des Kassenbons, den erkannten Text und das ausgewertete Ergebnis, damit wir den Leser verbessern können — der schnellste Weg, einen Scan korrigieren zu lassen. Du kannst auch jede Zeile in der Bearbeitungsleiste anpassen, bevor du Preise erfasst.' },
        { q: 'Ein Preis wirkt falsch oder ein Laden fehlt.', a: 'Eigenmarkenprodukte haben oft ladeneigene Barcodes und lassen sich nicht zwischen Supermärkten abgleichen — Tallywise zeigt „hier nicht verfügbar“, statt die Lücke zu verbergen. Wirkt ein gängiges Produkt falsch bepreist, melde den Scan, und wir prüfen ihn erneut.' },
        { q: 'Hilfe bei Anmeldung oder Konto.', a: 'Tallywise nutzt die Anmeldung per E-Mail (plus Google und Apple). Zum Zurücksetzen des Passworts nutze den „Passwort vergessen“-Ablauf in der App. Für alles andere schreib uns.' },
        { q: 'Mein Konto löschen oder meine Daten exportieren.', a: 'Beides geht in der App: <strong>Einstellungen → Konto löschen</strong> entfernt dein Konto und seine Daten, und du kannst deine Kassenbons als CSV aus der Bonliste exportieren. Du kannst auch von deiner Kontoadresse an <a href="mailto:%EMAIL%">%EMAIL%</a> schreiben, und wir entfernen dein Konto und die zugehörigen Daten. Siehe die <a href="%PRIVACY%">Datenschutzerklärung</a> für das, was wir speichern.' },
        { q: 'Berechtigungen.', a: 'Scannen braucht die Kamera; das Lesen eines gespeicherten Bonfotos braucht Fotozugriff; der Standort dient dazu, die richtige Währung und den nächsten Laden zu wählen. Deine GPS-Koordinaten werden nicht an uns gesendet, doch der Laden und die Filiale, in der du bist, können mit einem Preis oder Kassenbon gespeichert werden, den du erfasst. Du kannst das in den Einstellungen deines Geräts ändern.' },
      ],
    },
  },

  privacy: {
    title: 'Tallywise — Datenschutzerklärung',
    description: 'Wie Tallywise mit deinen Daten umgeht — Scannen auf dem Gerät, was wir erheben, wie es genutzt wird, und deine Wahlmöglichkeiten.',
    h1: 'Datenschutzerklärung',
    heroSub: 'Zuletzt aktualisiert am 29. Juli 2026. Tallywise wird von MonkeyLittle betrieben. Fragen: <a href="mailto:%EMAIL%">%EMAIL%</a>.',
    blocks: [
      { h: 'Die Kurzfassung', ps: ['Das Scannen läuft <strong>auf deinem Gerät</strong>. Wir erheben das Minimum, das nötig ist, um Korbpreise zu vergleichen und dein Konto zu führen. Wir verkaufen deine Daten nicht, und es gibt keine Werbe-SDKs. Wir nutzen jedoch <strong>Google Analytics</strong>, um zu verstehen, wie die App genutzt wird, damit wir sie verbessern können — nie den Inhalt deiner Kassenbons.'] },
      {
        h: 'Was wir erheben',
        list: [
          '<strong>Konto</strong> — deine E-Mail-Adresse, über unseren Anmeldeanbieter (Amazon Cognito), auch wenn du die Google- oder Apple-Anmeldung nutzt.',
          '<strong>Einkaufsdaten</strong> — die Körbe, die du zusammenstellst, Barcodes, die du scannst, aus Kassenbons ausgewertete Positionen, die Preise, die du erfasst, und deine Sparsummen. Preise, die du erfasst, fließen in die geteilten Preisdaten von Tallywise ein, damit der Vergleich für alle funktioniert (siehe unsere Nutzungsbedingungen).',
          '<strong>Von dir vorgeschlagene Produktangaben</strong> — wenn du den Namen, die Marke oder die Packungsgröße eines Produkts hinzufügst oder korrigierst, wird dein Vorschlag deinem Konto zugeordnet gespeichert und, sobald ein anderer Kunde übereinstimmende Angaben einreicht, genutzt, um den Eintrag dieses Produkts im <strong>geteilten Katalog</strong> von Tallywise zu aktualisieren, der für alle Nutzer sichtbar ist. Wir zeigen deine Identität nicht daneben an.',
          '<strong>Gutscheine</strong> — Rabattgutscheine, die du speicherst (ihr Barcode/ihre Nummer, Wert, Bedingungen und Gültigkeitsdaten sowie der Laden), werden mit deinem Konto gespeichert, damit du sie an der Kasse vorzeigen kannst. Wenn du dich entscheidest, einen <strong>Gutschein abzugeben</strong>, werden diese Gutscheinangaben in einen geteilten Pool gelegt und werden <strong>für andere Tallywise-Nutzer sichtbar und beanspruchbar</strong>; siehe „Gutscheine teilen“ unten. Wir führen außerdem pro Konto einen Saldo des Gutscheinwerts, den du gegeben gegenüber erhalten hast, um das Teilen fair zu halten.',
          '<strong>Bilder und Scan-Text von Bons &amp; Gutscheinen</strong> — Kassenbons, Gutscheine und Barcodes werden <strong>auf deinem Gerät</strong> gelesen. Wenn du einen <strong>gescannten Kassenbon speicherst</strong> in deinem Verlauf, werden sein Bild, der erkannte Text und das ausgewertete Ergebnis an uns gesendet — um deinen Bonverlauf aufzubauen und die Scan-Genauigkeit zu verbessern. Ein Tippen auf <strong>„Ein Problem melden“</strong> sendet zusätzlich eine kurze Notiz (und, bei einem nicht gespeicherten Scan, das Bild), damit wir eine bestimmte Fehllesung untersuchen können. Für einen Laden, den wir noch nicht unterstützen, kannst du optional auf <strong>„Intelligente Lesung versuchen“</strong> tippen, wodurch der erkannte <em>Text</em> des Bons (nicht das Bild) zur Auswertung an unsere Cloud gesendet wird — nur wenn du dich dafür entscheidest. Auf Bons gedruckte Kartendaten werden zuvor entfernt (siehe unten).',
          '<strong>Ungefährer Standort</strong> — auf deinem Gerät genutzt, um das richtige Land/die richtige Währung und den nächsten Laden zu wählen. Wir senden deine GPS-Koordinaten nicht an unsere Server; erfasst du jedoch einen Preis oder speicherst einen Kassenbon, können der daraus resultierende Ladenname und die Filiale mit dieser Übermittlung gespeichert werden.',
          '<strong>Push-Benachrichtigungen</strong> — wenn du Benachrichtigungen zulässt, speichern wir ein Push-Token des Geräts (über Firebase Cloud Messaging / Apple Push Notification service), um dir Preissenkungs-Benachrichtigungen für Artikel zu senden, die du gescannt hast. Wir löschen das Token bei deiner Abmeldung, und du kannst Benachrichtigungen jederzeit in den Einstellungen deines Geräts ausschalten.',
          '<strong>Nutzungsanalyse</strong> — über Google Analytics (Firebase) erheben wir App-Nutzungsereignisse (angesehene Bildschirme und Aktionen wie das Scannen eines Bons oder das Erfassen eines Preises) sowie grundlegende Geräte-/App-Infos (Gerätemodell, Betriebssystem, App-Version und eine zufällige Installations-Kennung). Das dient dazu, zu verstehen, wie Tallywise genutzt wird, und sie zu verbessern, und <strong>umfasst nie den Inhalt deiner Kassenbons, die Preise, die du erfasst, oder deine E-Mail</strong>.',
        ],
      },
      { h: 'Zahlungsdaten auf Kassenbons', ps: ['Kassenbons können ein Kartenschema, eine maskierte Kartennummer und Zahlungskennungen drucken. Tallywise <strong>entfernt diese automatisch, bevor irgendetwas gespeichert oder übertragen wird</strong> — Kartendaten werden nie aufbewahrt, auch nicht in einem Problembericht.'] },
      { h: 'Wie wir sie nutzen', ps: ['Um den Preisvergleich und die Sparfunktionen bereitzustellen, dein Konto zu betreiben, von dir gemeldete Scans zu untersuchen, damit die App genauer wird, und die aggregierte Nutzung zu analysieren (über Google Analytics), um zu sehen, welche Funktionen genutzt werden, und sie zu verbessern. Wir nutzen deine Daten nicht für Werbung oder Profilbildung.'] },
      { h: 'Weitergabe', ps: ['Wir verkaufen deine Daten nicht. Wir nutzen Infrastruktur-Anbieter, um den Dienst in unserem Auftrag zu betreiben und zu verbessern: <strong>Amazon Web Services</strong> (Hosting, Region EU/Irland) und <strong>Google</strong> (Google Analytics / Firebase, für Nutzungsanalyse). Wir geben Daten nur weiter, wenn das Gesetz es verlangt.'] },
      { h: 'Gutscheine teilen', ps: ['Wenn du dich entscheidest, einen Gutschein abzugeben, werden seine Angaben (Wert, Bedingungen, Gültigkeitsdaten, der Laden und der Barcode/die Nummer zum Einlösen) einem geteilten Pool hinzugefügt, den andere Tallywise-Nutzer durchsehen und beanspruchen können. Das ist etwas, wofür du dich <strong>pro Gutschein entscheidest</strong> — Gutscheine, die du nur speicherst, bleiben privat in deinem Konto. Wir teilen deine Identität nicht neben einem gepoolten Gutschein. Ein Gutschein, den du abgibst, verlässt deine Brieftasche und kann von jemand anderem beansprucht werden; du kannst ihn zurücknehmen, solange er im Pool ist.'] },
      { h: 'Speicherung &amp; Sicherheit', ps: ['Die Daten werden auf AWS in der EU (Irland) gespeichert, verschlüsselt bei der Übertragung (HTTPS/TLS) und im Ruhezustand. Problemberichte werden nur so lange aufbewahrt, wie es nötig ist, um das Scannen zu diagnostizieren und zu verbessern.'] },
      { h: 'Deine Wahlmöglichkeiten', ps: ['Du kannst <strong>deine Daten exportieren</strong> (deine Kassenbons, als CSV) und <strong>dein Konto und alle seine Daten löschen</strong> direkt in der App unter <strong>Einstellungen</strong> — ohne E-Mail. Du kannst außerdem Auskunft, Berichtigung oder Löschung verlangen oder der Nutzung deiner Nutzungsdaten zur Analyse widersprechen, indem du an <a href="mailto:%EMAIL%">%EMAIL%</a> schreibst. Du kannst Kamera-, Foto-, Standort- oder Benachrichtigungsberechtigungen jederzeit in den Einstellungen deines Geräts widerrufen (das Scannen braucht die Kamera, um zu funktionieren).'] },
      { h: 'Kinder', ps: ['Tallywise richtet sich nicht an Kinder und ist für Nutzer ab 18 Jahren bestimmt.'] },
      { h: 'Änderungen', ps: ['Wir aktualisieren diese Seite, wenn sich unsere Praktiken ändern, und passen das Datum oben an.'] },
    ],
  },

  terms: {
    title: 'Tallywise — Nutzungsbedingungen',
    description: 'Die Bedingungen für deine Nutzung von Tallywise — der Preisvergleichs-App für Supermärkte in Irland, dem Vereinigten Königreich, Belgien und den Niederlanden.',
    h1: 'Nutzungsbedingungen',
    heroSub: 'Zuletzt aktualisiert am 29. Juli 2026. Tallywise wird von MonkeyLittle betrieben. Fragen: <a href="mailto:%EMAIL%">%EMAIL%</a>.',
    blocks: [
      { h: 'Die Kurzfassung', ps: ['Tallywise ist eine kostenlose App, die dir hilft zu vergleichen, was ein Korb an Lebensmitteln zwischen Supermärkten in Irland, dem Vereinigten Königreich, Belgien und den Niederlanden kosten würde. Preise sind Richtwerte und können veraltet sein — sie sind eine Orientierung, kein Verkaufsangebot, und der Preis an der Kasse gilt immer. Nutze die App rechtmäßig, halte deine Beiträge ehrlich, und versuche nicht, den Dienst zu beschädigen oder zu missbrauchen. Die vollständige Vereinbarung steht unten.'] },
      { h: '1. Wer wir sind &amp; Annahme dieser Bedingungen', ps: ['Tallywise („die App“, „wir“, „uns“) wird von MonkeyLittle betrieben. Diese Nutzungsbedingungen regeln deine Nutzung der Tallywise-App und der zugehörigen Dienste. Indem du ein Konto erstellst oder Tallywise nutzt, stimmst du diesen Bedingungen und unserer <a href="%PRIVACY%">Datenschutzerklärung</a> zu. Wenn du nicht einverstanden bist, nutze die App bitte nicht.'] },
      { h: '2. Voraussetzungen', ps: ['Du musst mindestens 18 Jahre alt sein, um Tallywise zu nutzen. Mit der Nutzung der App bestätigst du, dass dies der Fall ist.'] },
      { h: '3. Was Tallywise tut', ps: ['Mit Tallywise kannst du Kassenbons und Produkt-Barcodes scannen, und sie zeigt, wie sich die Summe eines Korbs zwischen Supermärkten in Irland, dem Vereinigten Königreich, Belgien und den Niederlanden vergleicht, mit einer Übersicht deiner Ersparnisse. Sie lässt dich außerdem Rabattgutscheine speichern, um sie an der Kasse vorzuzeigen, und, wenn du möchtest, sie an andere Nutzer abgeben oder von ihnen beanspruchen (siehe „Gutscheine“ unten). Tallywise ist <strong>ausschließlich ein Informationsdienst</strong>: Wir sind kein Einzelhändler, wir verkaufen keine Lebensmittel, und wir wickeln keine Käufe oder Zahlungen für einen Supermarkt ab. Wir sind mit keinem Supermarkt verbunden, von keinem unterstützt und handeln für keinen.'] },
      { h: '4. Dein Konto', ps: ['Du meldest dich über unseren Authentifizierungsanbieter (Amazon Cognito) an, auch über Google oder Apple. Du bist dafür verantwortlich, deine Zugangsdaten sicher zu halten, und für die Aktivität unter deinem Konto. Sag uns unter <a href="mailto:%EMAIL%">%EMAIL%</a> Bescheid, wenn du glaubst, dass dein Konto ohne deine Erlaubnis genutzt wurde.'] },
      {
        h: '5. Zulässige Nutzung',
        ps: ['Bei der Nutzung von Tallywise verpflichtest du dich, Folgendes nicht zu tun:'],
        list: [
          'die App für einen rechtswidrigen Zweck oder unter Verstoß gegen diese Bedingungen zu nutzen;',
          'falsche, irreführende oder missbräuchliche Inhalte einzureichen — einschließlich absichtlich unrichtiger Preise;',
          'die geistigen Eigentums-, Datenschutz- oder sonstigen Rechte anderer zu verletzen;',
          'die App oder ihre Systeme zu stören, zu überlasten, zu untersuchen, zurückzuentwickeln, per Scraping abzugreifen oder sich unbefugt Zugang zu verschaffen;',
          'automatisierte Mittel zu nutzen, um auf den Dienst zuzugreifen, außer soweit wir es ausdrücklich erlauben.',
        ],
      },
      { h: '6. Von dir eingereichte Inhalte', ps: ['Tallywise stützt sich teilweise auf Preise und Produktangaben, die Nutzer erfassen. Wenn du einen Preis einreichst, Produktangaben vorschlägst (Name, Marke oder Größe), einen Scan meldest oder Feedback sendest, bestätigst du, dass du das Recht hast, es zu teilen, und du gewährst MonkeyLittle eine weltweite, gebührenfreie, nicht-exklusive Lizenz, diesen Inhalt zu nutzen, zu speichern, zu vervielfältigen und anzupassen, um den Dienst zu betreiben und zu verbessern — einschließlich der Zusammenführung zu anonymisierten, aggregierten Preisdaten und der Einbindung vorgeschlagener Produktangaben in den geteilten Produktkatalog von Tallywise, sobald sie von einem anderen Nutzer bestätigt wurden; solche Daten können auch nach der Schließung deines Kontos aufbewahrt und geteilt werden. Du bleibst für die von dir eingereichten Inhalte verantwortlich. Dasselbe gilt für einen Gutschein, den du abgibst: Indem du ihn teilst, bestätigst du, dass du berechtigt bist, ihn weiterzugeben, und du machst seine Angaben (einschließlich Barcode/Nummer) für andere Nutzer zum Beanspruchen verfügbar.'] },
      { h: '7. Preise &amp; Genauigkeit', ps: ['Die in Tallywise angezeigten Preise stammen aus einer Mischung von crowdbasierten Nutzerbeiträgen und öffentlich verfügbaren Informationen und ändern sich häufig. Wir bemühen uns in angemessenem Umfang, sie nützlich zu halten, <strong>gewährleisten aber nicht, dass ein Preis aktuell, genau oder vollständig ist</strong>. Vergleiche werden nur zu allgemeinen Informationszwecken bereitgestellt und sind <strong>kein Angebot, kein Kostenvoranschlag und keine Garantie</strong> für Preis oder Verfügbarkeit. Viele Eigenmarken- und ladeneigene Produkte lassen sich nicht zwischen Supermärkten abgleichen, sodass ein Vergleich unvollständig sein kann. Prüfe vor dem Kauf immer den tatsächlichen Preis im Laden — der Kassenpreis des Supermarkts ist maßgeblich.'] },
      { h: '8. Namen &amp; Marken der Supermärkte', ps: ['Namen, Logos und Marken von Supermärkten und Produkten, die in Tallywise angezeigt werden, gehören ihren jeweiligen Inhabern und werden nur verwendet, um den betreffenden Händler oder das Produkt zu kennzeichnen. Ihre Verwendung impliziert keine Verbindung mit oder Billigung durch diese Inhaber.'] },
      { h: '9. Unser geistiges Eigentum', ps: ['Tallywise — ihr Name, ihre Markenidentität, ihr Design und ihre Software — gehört MonkeyLittle und ist durch Gesetze zum Schutz des geistigen Eigentums geschützt. Diese Bedingungen gewähren dir eine persönliche, nicht übertragbare, widerrufliche Lizenz, die App für ihren vorgesehenen Zweck zu nutzen; sie übertragen dir keine unserer Rechte.'] },
      { h: '10. Verfügbarkeit &amp; Änderungen des Dienstes', ps: ['Tallywise wird „wie besehen“ und „wie verfügbar“ bereitgestellt. Wir können Funktionen hinzufügen, ändern, aussetzen oder entfernen, und der Dienst kann von Zeit zu Zeit für Wartungen oder aus Gründen außerhalb unserer Kontrolle nicht verfügbar sein. Wir garantieren keinen ununterbrochenen oder fehlerfreien Betrieb.'] },
      { h: '11. Haftungsausschlüsse', ps: ['Soweit gesetzlich zulässig, wird Tallywise ohne jegliche Gewährleistung bereitgestellt, ausdrücklich oder stillschweigend — einschließlich jeglicher stillschweigender Gewährleistung der Marktgängigkeit, der Eignung für einen bestimmten Zweck, der Genauigkeit oder der Nichtverletzung von Rechten. Nichts in diesen Bedingungen schließt eine Gewährleistung oder ein Recht aus oder beschränkt sie, die/das gesetzlich nicht ausgeschlossen oder beschränkt werden kann.'] },
      { h: '12. Haftungsbeschränkung', ps: ['Soweit gesetzlich zulässig, haftet MonkeyLittle nicht für indirekte, zufällige oder Folgeschäden oder für Schäden, die sich aus deinem Vertrauen auf Preisvergleiche oder andere Informationen in der App ergeben. Nichts in diesen Bedingungen beschränkt die Haftung für Tod oder Personenschaden durch Fahrlässigkeit, für Betrug oder für sonstige Haftung, die nach geltendem Recht nicht beschränkt werden kann. Wenn du Verbraucher bist, berühren diese Bedingungen deine gesetzlichen Rechte nicht.'] },
      { h: '13. Aussetzung &amp; Beendigung', ps: ['Du kannst die Nutzung von Tallywise jederzeit einstellen und dein Konto in den Einstellungen der App oder per E-Mail an uns löschen. Wir können deinen Zugang aussetzen oder beenden, wenn du gegen diese Bedingungen verstößt oder wo es vernünftigerweise nötig ist, um den Dienst oder andere Nutzer zu schützen. Bei der Löschung werden deine Kontodaten wie in unserer <a href="%PRIVACY%">Datenschutzerklärung</a> beschrieben entfernt; anonymisierte Preisdaten können aufbewahrt werden.'] },
      {
        h: '14. Gutscheine',
        ps: [
          'Mit Tallywise kannst du Rabattgutscheine speichern und, optional, sie über einen geteilten Pool an andere Nutzer abgeben oder von ihnen beanspruchen. Gutscheinangaben (Wert, Bedingungen, Gültigkeitsdaten und Barcode/Nummer) werden durch Scannen auf dem Gerät gelesen und <strong>können falsch gelesen werden</strong> — prüfe sie anhand des Originalgutscheins, bevor du dich darauf verlässt.',
          'Gutscheine werden von Händlern ausgegeben, nicht von Tallywise. Sie sind in der Regel <strong>einmalig, zeitlich begrenzt und unterliegen weiterhin den eigenen Bedingungen des ausgebenden Händlers</strong>, einschließlich etwaiger Übertragungsbeschränkungen. Du bist dafür verantwortlich, einen Gutschein im Einklang mit diesen Bedingungen zu nutzen, und solltest nur einen Gutschein abgeben, zu dessen Weitergabe du berechtigt bist.',
          'Zwischen Nutzern geteilte Gutscheine werden <strong>„wie besehen“ und auf eigenes Risiko</strong> bereitgestellt. Ein Gutschein, den du beanspruchst, kann bereits verwendet worden sein, abgelaufen sein oder an der Kasse abgelehnt werden, und wir <strong>können nicht überprüfen oder garantieren, dass ein Gutschein gültig, unbenutzt oder akzeptiert wird</strong>. Soweit gesetzlich zulässig, haftet MonkeyLittle nicht für einen Gutschein, der nicht funktioniert, für einen von einem anderen Nutzer geteilten Gutschein oder für einen Streit zwischen Nutzern über einen geteilten Gutschein.',
          'Um das Teilen fair zu halten, unterliegt das Beanspruchen einer <strong>Geben-und-Nehmen-Grenze</strong> (du kannst einen begrenzten Gutscheinwert über das hinaus beanspruchen, was du abgegeben hast, bevor du wieder einen teilen musst). Wir können solche Grenzen festlegen, ändern oder durchsetzen sowie Gutscheine entfernen oder Konten einschränken, um Missbrauch des Pools zu verhindern.',
        ],
      },
      {
        h: '15. Datenschutz &amp; Nutzungsanalyse',
        ps: [
          'Unsere <a href="%PRIVACY%">Datenschutzerklärung</a> erklärt, welche Daten wir erheben und wie wir mit ihnen umgehen — einschließlich dessen, dass das Scannen auf deinem Gerät läuft und dass auf Kassenbons gedruckte Zahlungsdaten entfernt werden, bevor irgendetwas gespeichert oder gesendet wird.',
          'Die App nutzt <strong>Google Analytics (Firebase)</strong>, um anonyme Nutzungsdaten zu erheben (angesehene Bildschirme, In-App-Aktionen und grundlegende Geräte-/App-Informationen), damit wir verstehen, wie Tallywise genutzt wird, und sie verbessern können. Das umfasst nie den Inhalt deiner Kassenbons, die Preise, die du erfasst, oder deine E-Mail. Mit der Nutzung von Tallywise stimmst du dieser Analyseerhebung zu, wie in der Datenschutzerklärung beschrieben; du kannst uns jederzeit bitten, deine Nutzungsdaten nicht mehr zur Analyse zu verwenden, indem du an <a href="mailto:%EMAIL%">%EMAIL%</a> schreibst.',
        ],
      },
      { h: '16. Änderungen dieser Bedingungen', ps: ['Wir können diese Bedingungen von Zeit zu Zeit aktualisieren. Wir passen das Datum oben an und ergreifen bei wesentlichen Änderungen angemessene Maßnahmen, um dich zu informieren. Wenn du Tallywise nach einer Änderung weiter nutzt, akzeptierst du die aktualisierten Bedingungen.'] },
      { h: '17. Anwendbares Recht', ps: ['Diese Bedingungen unterliegen dem Recht Irlands, und die Gerichte Irlands sind nicht ausschließlich zuständig. Wenn du Verbraucher mit Wohnsitz anderswo bist, behältst du den Schutz etwaiger zwingender verbraucherrechtlicher Vorschriften deines Wohnsitzlandes.'] },
      { h: '18. Kontakt', ps: ['Fragen zu diesen Bedingungen: <a href="mailto:%EMAIL%">%EMAIL%</a>.'] },
    ],
  },
};
