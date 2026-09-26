// Ausgearbeitete Projektideen zu den bestätigten Themenbrücken.
//
// ACHTUNG – Status: Diese Ideen sind ENTWÜRFE (erstellt 09/2026), noch nicht im Unterricht erprobt
// und noch nicht von der Fachkonferenz beschlossen. Sie sind aus den schulinternen Lehrplänen
// abgeleitet und auf den Förderschwerpunkt Hören und Kommunikation zugeschnitten, brauchen aber
// vor dem Einsatz eine fachliche Prüfung. Was sich bewährt, bekommt das Feld
//   erprobt: "In Klasse X im Schuljahr Y/Z erprobt"
// und wird auf der Seite als erprobt markiert.
//
// Format: { id, titel, vorhaben: [ids aus daten.js], leitfrage, produkt, umfang,
//           schritte: [[Vorhaben-ids (leer = gemeinsam), Text], ...], tipp }
window.TB_PROJEKTE = [

  {
    id: "tiere-praesentieren",
    titel: "Unser Tier – vom Beobachten zum Präsentieren",
    vorhaben: ["su-34-2", "me-3-2"],
    leitfrage: "Was braucht unser Tier zum Leben – und wie zeigen wir das jemandem, der es nicht kennt?",
    produkt: "Digitale Tier-Präsentation (Keynote) mit eigenen Fotos, Zeichnungen und Fachgebärden-Videos",
    umfang: "ca. 6 Doppelstunden Medienunterricht plus begleitende Sachunterrichtsstunden",
    schritte: [
      ["su-34-2", "Jede Gruppe wählt ein Tier und erkundet seinen Lebensraum – auf dem Schulgelände, im Wald oder im Tierpark. Beobachtungen werden mit Becherlupe und Kamera festgehalten."],
      ["su-34-2", "Lebensbedingungen klären: Was frisst das Tier, wo wohnt es, wie entwickelt es sich? Fachbegriffe und die passenden Fachgebärden werden gemeinsam erarbeitet und gesammelt."],
      ["su-34-2", "Beobachtungen auf verschiedene Weisen dokumentieren: Zeichnung, Foto, kurzer Steckbrief – jede Gruppe verteilt die Aufgaben selbst."],
      ["me-3-2", "Am iPad: Fotos sichten, sortieren und benennen. Grundlagen von Keynote kennenlernen – Folie, Bild einfügen, Reihenfolge festlegen."],
      ["me-3-2", "Die Präsentation bauen: pro Folie ein Bild und wenig Text. Zu jedem Fachbegriff wird ein kurzes Gebärden-Video aufgenommen und eingebettet."],
      ["", "Premiere: Die Präsentationen werden der Parallelklasse gezeigt. Das Publikum darf raten, welches Tier zu welchem Lebensraum gehört."]
    ],
    tipp: "Das Sachunterrichts-Curriculum weist ausdrücklich darauf hin, Wahrnehmungen auf unterschiedliche Weise zu dokumentieren – Zeichnung und Foto stehen hier gleichberechtigt neben dem Text. Die eingebetteten Gebärden-Videos machen die Präsentation für beide Sprachgruppen zugänglich und sichern die Fachgebärden langfristig."
  },

  {
    id: "stopmotion-figuren",
    titel: "Drahtfiguren erwachen zum Leben",
    vorhaben: ["ku-34-6", "me-4-2"],
    leitfrage: "Wie erzählen wir eine ganze Geschichte – ohne ein einziges Wort?",
    produkt: "Stop-Motion-Film mit selbst gebauten Figuren und Kulisse",
    umfang: "ca. 10 Wochen im Quartal 2, Kunststunden plus 1 Wochenstunde Medienunterricht",
    schritte: [
      ["ku-34-6", "Geschichte in Bildern planen: Ein Storyboard entsteht – was passiert zuerst, was danach? Die Handlung muss allein durch Bewegung und Mimik verständlich sein."],
      ["ku-34-6", "Figuren bauen: Aus Draht und formbaren Materialien entstehen Figuren, die sich in Gelenken bewegen und in Position bleiben."],
      ["ku-34-6", "Kulisse und Requisiten gestalten – passend zum Schauplatz der Geschichte."],
      ["me-4-2", "Stop-Motion-Technik erproben: Warum muss das iPad fest stehen? Was passiert bei wechselndem Licht? Erste Testaufnahme mit wenigen Bildern."],
      ["me-4-2", "Dreh: Figur bewegen, Bild aufnehmen, Figur bewegen, Bild aufnehmen. Arbeitsteilung in der Gruppe – Animation, Kamera, Regie."],
      ["me-4-2", "Schnitt: Tempo festlegen, Zwischentitel ergänzen, bei Bedarf Musik oder Geräusche unterlegen."],
      ["", "Filmpremiere für die Parallelklasse oder beim Schulfest."]
    ],
    tipp: "Visuelles Erzählen ist der Kern dieses Projekts – es spielt die Stärke der Bibi-Klassen aus und braucht keinen Ton, um zu funktionieren. Der Stoffverteilungsplan sieht für die Lautsprachklassen parallel das Hörspielprojekt vor; beide Gruppen können ihre Ergebnisse am selben Termin zeigen."
  }

];
