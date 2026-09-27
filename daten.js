// Lehrplandaten der Johann-Joseph-Gronewaldschule (LVR-Förderschule Hören und Kommunikation, Köln).
// Schema tb-lehrplan-v1: pro Fach eine Liste von Unterrichtsvorhaben je Stufe.
// Stufen: EP1, EP2, EP3 (Schuleingangsphase, 3 Jahre), 3, 4.
//
// Zuordnungs-Hinweis: Mehrere Quell-Lehrpläne unterscheiden nur zwei bis vier Kompetenzstufen
// (z. B. "Schuleingangsphase" / "Klasse 4", oder "Eingangsklasse 1/2"). Wo die Schule selbst
// EP2 und EP3 zusammenfasst (siehe Deutsch-Curriculum: "Klasse 2 / Schuleingangsphase EP 2 und EP3"),
// wird das hier ebenso abgebildet (stufe: "EP2/EP3"). Nur bei Mathematik liegen fünf eigenständige
// Jahreslehrpläne vor (E-1, 1, 2, 3, 4), die 1:1 auf EP1–EP3, 3, 4 abgebildet werden.
// Musik und Rhythmik werden an der JJG als ein Fach "Musik" geführt (zwei Quell-Lehrpläne für
// die zwei Sprachgruppen LS/LUG und DGS/LBG, gemeinsam als ein Fach zusammengefasst).
window.TB_DATEN = { basis: [

{
  "schema": "tb-lehrplan-v1", "fach": "Mathematik", "schulstufe": "Primarstufe",
  "beschluss": "Förderschwerpunktbezogener Lehrplan Hören und Kommunikation",
  "quelle": "Mathematik E-1, 1, 2, 3, 4 (Landesvorgabe FP H+K)",
  "vorhaben": [
    { "id": "ma-ep1-1", "stufe": "EP1", "titel": "Zahlen bis 20 entdecken – Wie viele sind das?", "inhaltsfelder": ["Zahlen und Operationen"], "schlagworte": ["Zahlvorstellung", "Anzahlen erfassen"], "kompetenzen_kurz": ["Zahlen bis 20 auf verschiedene Weise darstellen", "Zahlen der Größe nach ordnen, Vorgänger und Nachfolger bestimmen"],
      "fundstelle": "Klasse E–1 · Zahlen und Operationen · Zahlvorstellungen",
      "auszug": ["Zahlen bis 10 (20) erfassen und auf verschiedene Weise darstellen", "Mengenkonstanz einüben", "den Aufbau des dezimalen Stellenwertsystems verstehen", "Zahlen der Größe nach ordnen; Zahlen vergleichen und zueinander in Beziehung setzen", "Inhalte: Anzahlen erfassen · Groß und klein · Größer, kleiner, gleich · Vorgänger, Nachfolger · Ordnungszahlen · Reihenfolgen · gerade und ungerade Zahlen · Verdoppeln und Halbieren · Zehnerzahlen bis Hundert"],
      "hinweis_fp": ["Erklärungen über visuelle Darstellungen, vermehrte enaktive Tätigkeiten", "Vermehrter Zeitaufwand: Zählen üben (vermehrt mit Bewegung)", "Zahlen sprechen, Zahlen gebärden; Nachlegen, Nachbauen, Spielen", "Fachbegriffe und Gebärden erarbeiten, anwenden und verinnerlichen"] },
    { "id": "ma-ep1-2", "stufe": "EP1", "titel": "Plus und Minus im Zahlenraum bis 20", "inhaltsfelder": ["Zahlen und Operationen"], "schlagworte": ["Addition & Subtraktion", "Rechenstrategien"], "kompetenzen_kurz": ["Gleichheit herstellen und begründen", "Tausch- und Umkehraufgaben nutzen"],
      "fundstelle": "Klasse E–1 · Zahlen und Operationen · Operationsvorstellungen, Kopfrechnen, Zahlenrechnen",
      "auszug": ["Gleichheit herstellen und begründen", "Rechenverfahren der Addition und Subtraktion verstehen und beherrschen", "Rechenstrategien verstehen und für das zehnerüberschreitende Rechnen systematisch nutzen", "die Aufgaben des Kleinen Einspluseins gedächtnismäßig beherrschen und deren Umkehrungen sicher ableiten", "Inhalte: Gleichheitszeichen · geschicktes Legen · gegensinniges Verändern · Nachbaraufgaben am Zahlenstrahl · Analogie-, Ergänzungs-, Umkehr- und Tauschaufgaben · Zehnerüberschreitung · Zahlzerlegungen · Schüttelboxen"],
      "hinweis_fp": ["Kopfrechenaufgaben schriftlich anbieten, auditive Gedächtnisleistungen reichen oft nicht aus", "Fachbegriffe und Gebärden; vermehrte enaktive Tätigkeiten", "visuelle Darstellungen nutzen"] },
    { "id": "ma-ep1-3", "stufe": "EP1", "titel": "Formen und Muster um uns herum", "inhaltsfelder": ["Raum und Form"], "schlagworte": ["Ebene Figuren", "Muster"], "kompetenzen_kurz": ["Grundformen (Dreieck, Kreis, Viereck) erkennen und benennen", "Muster und Farbfolgen fortsetzen"],
      "fundstelle": "Klasse E–1 · Raum und Form · Raumorientierung, Ebene Figuren, Symmetrie, Zeichnen",
      "auszug": ["Räumliche Beziehungen erkennen, beschreiben und nutzen", "Grundformen und Muster in der Umwelt erkennen und benennen; Figuren nach ihren Eigenschaften sortieren", "geometrische Figuren erkennen, benennen und herstellen (spannen, zeichnen)", "Symmetrien erkennen, symmetrische Muster erkennen", "Inhalte: Wahrnehmungskonstanz · Figur-Hintergrund · Auge-Hand-Koordination · links, rechts, oben, unten · Muster, Formen, Farbfolgen · Geobrett · Spiegelbilder erzeugen · Zeichnen im Gitternetz"],
      "hinweis_fp": ["Fachgebärden; Lösungswege zeigen und ggf. benennen", "Präpositionen im Deutschunterricht vertiefen", "Fachbegriffe: Dreieck, Kreis, Viereck; symmetrisch = spiegelgleich", "aus der Hand zeichnen, Punkte verbinden"] },
    { "id": "ma-ep1-4", "stufe": "EP1", "titel": "Geld, Uhr und Kalender im Alltag", "inhaltsfelder": ["Größen und Messen"], "schlagworte": ["Größenvorstellungen", "Alltag & Lebenswelt"], "kompetenzen_kurz": ["mit Geldeinheiten (ct, €) umgehen", "sich am Tagesablauf und Kalender orientieren"],
      "fundstelle": "Klasse E–1 · Größen und Messen · Größenvorstellungen und Umgang mit Größen",
      "auszug": ["Verwendung der Geldeinheiten (ct, €)", "Orientierung im Tagesablauf; Wochentage und Monate kennen lernen", "Umgang mit der Uhr", "Inhalte: Geld · Tagesablauf · Kalender, Wochentage · Uhrzeit, volle Stunden"],
      "hinweis_fp": ["Tägliche Rituale; Rollenspiele und lebenspraktische Anwendung", "Vertiefung im Sachunterricht"] },
    { "id": "ma-ep2-1", "stufe": "EP2", "titel": "Zahlen bis 20 sicher ordnen und vergleichen", "inhaltsfelder": ["Zahlen und Operationen"], "schlagworte": ["Zahlvorstellung", "Stellenwertsystem"], "kompetenzen_kurz": ["Zahlen unter verschiedenen Aspekten vergleichen", "verdoppeln und halbieren"],
      "fundstelle": "Klasse 1 · Zahlen und Operationen · Zahlvorstellungen",
      "auszug": ["Zahlen bis 20 erfassen und auf verschiedene Weise darstellen", "Zahlen unter verschiedenen Aspekten auffassen, vergleichen, in Beziehung setzen", "strukturierte Zahlvorstellungen verstehen und nutzen", "sich im Zahlenraum bis 100 orientieren", "Inhalte: Zahlen bis 20 · Vorgänger, Nachfolger · Ordnungszahlen · gerade und ungerade Zahlen · Verdoppeln und Halbieren · Zehnerzahlen bis Hundert"],
      "hinweis_fp": ["Erklärungen über visuelle Darstellungen, vermehrte enaktive Tätigkeiten", "Zählen üben (vermehrt mit Bewegung); Zahlen sprechen, Zahlen gebärden", "Fachbegriffe und Gebärden erarbeiten, anwenden und verinnerlichen"] },
    { "id": "ma-ep2-2", "stufe": "EP2", "titel": "Das kleine Einspluseins wird sicher", "inhaltsfelder": ["Zahlen und Operationen"], "schlagworte": ["Automatisieren", "Rechenstrategien"], "kompetenzen_kurz": ["Aufgaben des kleinen Einspluseins automatisieren", "Rechenstrategien für zehnerüberschreitendes Rechnen nutzen"],
      "fundstelle": "Klasse 1 · Zahlen und Operationen · Schnelles Kopfrechnen, Automatisieren",
      "auszug": ["die Aufgaben des Kleinen Einspluseins gedächtnismäßig beherrschen und deren Umkehrungen sicher ableiten", "Rechenstrategien verstehen und für das zehnerüberschreitende Rechnen systematisch nutzen", "Inhalte: Kopfrechenaufgaben im Zahlenraum bis 20 · Analogieaufgaben · Verdopplungs- und Halbierungsaufgaben als Hilfe nutzen"],
      "hinweis_fp": ["Kopfrechenaufgaben schriftlich anbieten, auditive Gedächtnisleistungen reichen oft nicht aus", "visuelle Darstellungen nutzen"] },
    { "id": "ma-ep2-3", "stufe": "EP2", "titel": "Spiegelbilder und Symmetrie", "inhaltsfelder": ["Raum und Form"], "schlagworte": ["Symmetrie", "Ebene Figuren"], "kompetenzen_kurz": ["symmetrische Muster erkennen", "Figuren im Gitternetz des Geobretts abbilden"],
      "fundstelle": "Klasse 1 · Raum und Form · Symmetrie, Zeichnen",
      "auszug": ["Symmetrien erkennen, symmetrische Muster erkennen", "über räumliches Vorstellungsvermögen verfügen; räumliche Beziehungen erkennen, beschreiben und nutzen", "Figuren in das Gitternetz des Geobretts abbilden", "Inhalte: Erzeugen von Spiegelbildern · Zeichnen im Gitternetz"],
      "hinweis_fp": ["Gebärden und Fachbegriffe; symmetrisch = spiegelgleich", "aus der Hand zeichnen, Punkte verbinden"] },
    { "id": "ma-ep2-4", "stufe": "EP2", "titel": "Größen messen und vergleichen", "inhaltsfelder": ["Größen und Messen"], "schlagworte": ["Größenvorstellungen", "Alltag & Lebenswelt"], "kompetenzen_kurz": ["Längen vergleichen und ordnen", "mit Geldbeträgen rechnen"],
      "fundstelle": "Klasse 1 · Größen und Messen · Größenvorstellungen und Sachsituationen",
      "auszug": ["Verwendung der Geldeinheiten (ct, €)", "Orientierung im Tagesablauf; Umgang mit der Uhr", "aus Darstellungen die relevanten Informationen entnehmen", "Inhalte: Geld · Tagesablauf · Kalender, Wochentage · Uhrzeit, volle Stunden"],
      "hinweis_fp": ["Tägliche Rituale; Rollenspiele und lebenspraktische Anwendung", "Vertiefung im Sachunterricht"] },
    { "id": "ma-ep3-1", "stufe": "EP3", "titel": "Der Zahlenraum wächst auf 100", "inhaltsfelder": ["Zahlen und Operationen"], "schlagworte": ["Zahlvorstellung", "Stellenwertsystem"], "kompetenzen_kurz": ["Zahlen bis 100 erfassen, bündeln und schätzen", "sich am Hunderterfeld orientieren"],
      "fundstelle": "Klasse 2 · Zahlen und Operationen · Zahlvorstellungen",
      "auszug": ["Zahlen bis 100 erfassen", "Zahlen unter verschiedenen Aspekten auffassen, darstellen, strukturieren, abschätzen und begründen", "den Aufbau des dezimalen Stellenwertsystems verstehen", "Arithmetik und Geometrie verbinden (Spiegelungen)", "Inhalte: schätzen und bündeln · Geschickt Zählen · Zehner und Einer · Hunderterfeld · Hundertertafel · Springen auf der Hundertertafel · Zahlenstrahl und Hunderterkette · Verdoppeln und Halbieren"],
      "hinweis_fp": ["Erklärungen über visuelle Darstellungen, vermehrte enaktive Tätigkeiten", "Vermehrter Zeitaufwand: Zählen üben (vermehrt mit Bewegung)", "Zahlen sprechen, Zahlen gebärden, Nachlegen, Nachbauen, Spielen"] },
    { "id": "ma-ep3-2", "stufe": "EP3", "titel": "Vom Verdoppeln zum Malnehmen", "inhaltsfelder": ["Zahlen und Operationen"], "schlagworte": ["Multiplikation", "Rechenstrategien"], "kompetenzen_kurz": ["die Malaufgabe als verkürzte Plusaufgabe verstehen", "Kernaufgaben des kleinen Einmaleins nutzen"],
      "fundstelle": "Klasse 2 · Zahlen und Operationen · Operationsvorstellungen",
      "auszug": ["Grundvorstellung der Multiplikation; Malaufgabe als verkürzte Plusaufgabe", "Tauschaufgaben und Kernaufgaben (Fünfer-, Zehner- und Zweierzahlen)", "Zahlensätze des Einmaleins aus den Kernaufgaben ableiten", "in Verteilsituationen dividieren; Umkehrungen sicher ableiten; Zusammenhänge zwischen den Reihen erkennen", "Inhalte: Rechengeschichten · Malaufgaben hören, sehen, fühlen · Multiplizieren am Hunderterfeld · Einmaleinsreihen · Dividieren (Aufteilen/Verteilen) · Aufgaben mit Rest"],
      "hinweis_fp": ["Anbieten von Darstellungsformen; konkretes Anschauungsmaterial", "Fachbegriffe und Gebärden; vermehrte enaktive Tätigkeiten"] },
    { "id": "ma-ep3-3", "stufe": "EP3", "titel": "Körper bauen und untersuchen", "inhaltsfelder": ["Raum und Form"], "schlagworte": ["Körper", "Ebene Figuren"], "kompetenzen_kurz": ["geometrische Körper (Würfel, Quader, Kugel) erkennen und benennen", "einfache Würfelgebäude herstellen"],
      "fundstelle": "Klasse 2 · Raum und Form · Körper",
      "auszug": ["geometrische Körper erkennen und benennen (Würfel, Quader, Kugel)", "sortieren nach Eigenschaften", "Herstellen einfacher Würfelgebäude", "Inhalte: Körper ordnen, untersuchen, vergleichen, experimentieren · Körper bauen, legen"],
      "hinweis_fp": ["Fachbegriffe: Würfel, Quader, Kugel, Ecke, Seite, Kante"] },
    { "id": "ma-ep3-4", "stufe": "EP3", "titel": "Daten sammeln und darstellen", "inhaltsfelder": ["Daten, Häufigkeiten und Wahrscheinlichkeiten"], "schlagworte": ["Daten & Häufigkeiten", "Alltag & Lebenswelt"], "kompetenzen_kurz": ["Daten aus der Lebenswirklichkeit sammeln", "Daten in Diagrammen und Tabellen darstellen"],
      "fundstelle": "Klasse 2 · Daten, Häufigkeiten und Wahrscheinlichkeiten · Daten und Häufigkeiten",
      "auszug": ["Sammeln von Daten aus der unmittelbaren Lebenswirklichkeit", "Darstellen von Daten in Diagrammen und Tabellen", "Entnehmen von Daten aus Diagrammen und Tabellen", "Inhalte: Rechnen in Projekten (z. B. Wachstumsversuche mit Bohnen)"],
      "hinweis_fp": ["Sprachliche Reduzierung; verstärkte visuelle Unterstützung; Lebensweltbezug", "Wahrscheinlichkeiten werden laut Lehrplan aufgrund der eingeschränkten sprachlichen Fähigkeiten auf folgende Schuljahre verschoben."] },
    { "id": "ma-3-1", "stufe": "3", "titel": "Der Zahlenraum bis 1000", "inhaltsfelder": ["Zahlen und Operationen"], "schlagworte": ["Zahlvorstellung", "Stellenwertsystem"], "kompetenzen_kurz": ["den Zahlenraum bis 1.000 erschließen", "Zahlen bündeln, zerlegen und in Beziehung setzen"],
      "fundstelle": "Klasse 3 · Zahlen und Operationen · Zahlvorstellungen und Zahlbeziehungen",
      "auszug": ["den Aufbau des dezimalen Stellenwertsystems verstehen und vertiefen", "Zahldarstellungen strukturieren; sich im Zahlenraum bis 100 sicher orientieren", "Erweiterung des Zahlenraums bis 1.000", "Inhalte: Stellenwertschreibweise · Bündelung · Zerlegen · verschiedene Darstellungsweisen der Zahlen (Zahlenstrahl, Hunderterfeld …) · Zahlen zueinander in Beziehung setzen"],
      "hinweis_fp": ["Zahlen sprechen und gebärden üben"] },
    { "id": "ma-3-2", "stufe": "3", "titel": "Halbschriftlich und schriftlich rechnen", "inhaltsfelder": ["Zahlen und Operationen"], "schlagworte": ["Rechenverfahren"], "kompetenzen_kurz": ["halbschriftlich addieren, subtrahieren, multiplizieren, dividieren", "schriftliche Addition und Subtraktion sicher ausführen"],
      "fundstelle": "Klasse 3 · Zahlen und Operationen · Zahlenrechnen, Ziffernrechnen, Überschlagendes Rechnen",
      "auszug": ["Zahlbeziehungen und Rechengesetze bei allen vier Rechenarten für vorteilhaftes Rechnen nutzen", "halbschriftlich rechnen im Zahlenraum bis 1000 in den vier Grundrechenarten", "die schriftlichen Verfahren der Addition und Subtraktion verstehen, sicher ausführen und situationsangemessen anwenden", "Überschlagendes Rechnen und Runden kennen lernen", "Inhalte: halbschriftliche Addition, Subtraktion, Multiplikation, Division · schriftliche Addition und Subtraktion · Schätzen, Überschlagen, Runden"],
      "hinweis_fp": ["visuelle Hilfen und Darstellungen nutzen", "Gebärden und Fachbegriffe", "lebenspraktische Anwendung (einkaufen)"] },
    { "id": "ma-3-3", "stufe": "3", "titel": "Flächen, Körper und Symmetrie", "inhaltsfelder": ["Raum und Form"], "schlagworte": ["Körper", "Symmetrie"], "kompetenzen_kurz": ["Flächeninhalte von Figuren vergleichen", "Würfelnetze zuordnen und untersuchen"],
      "fundstelle": "Klasse 3 · Raum und Form · Ebene Figuren, Körper, Symmetrie",
      "auszug": ["Ebene Figuren legen und auslegen, umstrukturieren und zeichnen, dabei Grundvorstellungen zu Flächeninhalten entwickeln", "Geometrische Körper in der Umwelt erkennen und benennen können; Modelle von Körpern und Würfelgebäuden herstellen", "Würfelnetze zuordnen und untersuchen", "Symmetrische Figuren erzeugen und dabei die Eigenschaften der Achsensymmetrie nutzen", "Inhalte: Figuren mit Grundformen auslegen · ausmessen und experimentieren mit Flächen · Arbeit mit dem Geobrett · Schwerpunkt Würfel · Experimentieren mit dem Spiegel · Symmetrieachsen entdecken"],
      "hinweis_fp": ["Fachbegriff und Gebärde: Figur, Fläche", "Visuelle Darstellung der Fachbegriffe (z. B. Würfelnetze, Symmetrie)"] },
    { "id": "ma-3-4", "stufe": "3", "titel": "Messen im Alltag – Gewicht, Zeit und Geld", "inhaltsfelder": ["Größen und Messen"], "schlagworte": ["Größenvorstellungen", "Alltag & Lebenswelt"], "kompetenzen_kurz": ["mit Gewichten, Rauminhalten und Längen umgehen", "Sachaufgaben aus dem Schulalltag lösen"],
      "fundstelle": "Klasse 3 · Größen und Messen · Größenvorstellungen und Sachsituationen",
      "auszug": ["Grundvorstellungen zu Gewichten und Rauminhalten entwickeln", "Grundvorstellungen zu Geldwerten, Zeitspannen und Längen auf den erweiterten Zahlenraum übertragen", "mit Messgeräten und passenden Hilfsmitteln messen und passende Einheiten wählen", "Grundeinheiten der Größenbereiche kennen lernen und erste Erfahrungen mit ihrer Umwandlung", "Inhalte: Gewichte (kg, g) · Rauminhalte (Liter, Milliliter) · Längen (km, m, cm, mm) · Zeit (Stunde, Minute, Tag, Monat, Jahr) · Geld (Cent, Euro) · Tabellen und Diagramme"],
      "hinweis_fp": ["Schwerpunkt auf lebenspraktischem Bezug", "Fachbegriffe und Gebärden"] },
    { "id": "ma-3-5", "stufe": "3", "titel": "Wie wahrscheinlich ist das?", "inhaltsfelder": ["Daten, Häufigkeiten und Wahrscheinlichkeiten"], "schlagworte": ["Daten & Häufigkeiten", "Alltag & Lebenswelt"], "kompetenzen_kurz": ["Daten in Tabellen und Diagrammen darstellen", "die Wahrscheinlichkeit einfacher Ereignisse beschreiben (oft, manchmal, sicher)"],
      "fundstelle": "Klasse 3 · Daten, Häufigkeiten und Wahrscheinlichkeiten",
      "auszug": ["Daten aus der Lebenswirklichkeit sammeln und in Tabellen/Diagrammen darstellen", "Diagrammen und Tabellen Daten entnehmen und zur Beantwortung von Fragen heranziehen", "Die Wahrscheinlichkeit von einfachen Ereignissen beschreiben", "Inhalte: Informationen sammeln und darstellen · konkreter Umgang mit einem Ereignis (z. B. Gewinnspiel, Würfelspiel)"],
      "hinweis_fp": ["Der Begriff Wahrscheinlichkeit ist für hörgeschädigte Schüler noch nicht inhaltlich zu erfassen. Es müssen andere Begriffe genutzt werden: oft, häufig, manchmal, sicher, unmöglich.", "Lebensweltbezug"] },
    { "id": "ma-4-1", "stufe": "4", "titel": "Große Zahlen bis eine Million", "inhaltsfelder": ["Zahlen und Operationen"], "schlagworte": ["Zahlvorstellung", "Stellenwertsystem"], "kompetenzen_kurz": ["den Zahlenraum bis 1.000.000 erschließen", "unterschiedliche Zahldarstellungen untersuchen"],
      "fundstelle": "Klasse 4 · Zahlen und Operationen · Zahlvorstellungen und Zahlbeziehungen",
      "auszug": ["den Aufbau des dezimalen Stellenwertsystems verstehen und vertiefen", "sich im Zahlenraum bis 1000 sicher orientieren; Erweiterung des Zahlenraums bis 1.000.000", "unterschiedliche Zahldarstellungen untersuchen, erläutern und erkennen", "Inhalte: Stellenwertschreibweise · Bündelung · Zerlegen · Zahlenstrahl, Tausenderfeld, Tausenderwürfel · römische Zahlen"],
      "hinweis_fp": ["Sprechen und Gebärden der Zahlen üben", "Fachbegriffe reduziert auf: Addition – addieren, Subtraktion – subtrahieren, Multiplikation – multiplizieren, Division – dividieren"] },
    { "id": "ma-4-2", "stufe": "4", "titel": "Schriftlich multiplizieren und dividieren", "inhaltsfelder": ["Zahlen und Operationen"], "schlagworte": ["Rechenverfahren"], "kompetenzen_kurz": ["die schriftlichen Verfahren aller vier Grundrechenarten sicher ausführen", "eigene Rechenwege erklären"],
      "fundstelle": "Klasse 4 · Zahlen und Operationen · Ziffernrechnen, Flexibles Rechnen, Sachaufgaben",
      "auszug": ["die schriftlichen Verfahren der Addition und Subtraktion sowie der Multiplikation und Division verstehen, sicher ausführen und situationsangemessen anwenden", "eigene Rechenwege finden und erklären", "Sachaufgaben lösen und dabei die Beziehungen zwischen der Sache und den einzelnen Lösungsschritten mit Hilfe beschreiben; das Ergebnis auf Plausibilität prüfen", "Inhalte: schriftliche Addition, Subtraktion, Multiplikation, Division · Rechenkniffe · Sachaufgaben · einfache kombinatorische Aufgaben (Knobelaufgaben)"],
      "hinweis_fp": ["Gebärden und Fachbegriffe", "Textoptimierung; visuelle Unterstützung"] },
    { "id": "ma-4-3", "stufe": "4", "titel": "Winkel, Flächen und Bauwerke", "inhaltsfelder": ["Raum und Form"], "schlagworte": ["Ebene Figuren", "Raumvorstellung"], "kompetenzen_kurz": ["Umfang und Flächeninhalt ebener Figuren bestimmen", "mit Geodreieck und Zirkel zeichnen"],
      "fundstelle": "Klasse 4 · Raum und Form · Raumvorstellung, Ebene Figuren, Körper, Symmetrie, Zeichnen",
      "auszug": ["zwei- und dreidimensionale Darstellungen von Bauwerken zueinander in Beziehung setzen", "Bestimmen und Vergleichen des Flächeninhalts und Umfangs von ebenen Figuren", "Netze zuordnen und untersuchen (Würfel, Quader, Pyramide, Zylinder, Kugel)", "Ebene Figuren in Gitternetzen abbilden, verkleinern und vergrößern; parallele und senkrechte Linien, Kreise und Bögen zeichnen", "Inhalte: nach Vorlage bauen · Baupläne erstellen · Drehsymmetrie · Experimentieren mit Geodreieck und Zirkel"],
      "hinweis_fp": ["Fachbegriffe und Gebärden: Bauplan, Umfang, Rechteck, Quadrat, rechter Winkel, senkrecht, parallel, waagerecht", "Fachbegriffe und Gebärden: Geodreieck, Zirkel, verkleinern, vergrößern, Maßstab, Würfelnetz, Ecke, Kante, Pyramide, Zylinder"] },
    { "id": "ma-4-4", "stufe": "4", "titel": "Größen im Alltag sicher nutzen", "inhaltsfelder": ["Größen und Messen"], "schlagworte": ["Größenvorstellungen", "Alltag & Lebenswelt"], "kompetenzen_kurz": ["mit Größen aus Geld, Zeit, Länge, Gewicht und Rauminhalt umgehen", "Größenangaben in unterschiedlichen Schreibweisen darstellen"],
      "fundstelle": "Klasse 4 · Größen und Messen · Größenvorstellungen und Sachsituationen",
      "auszug": ["Standardeinheiten aus den Bereichen Geldwerte, Zeitspannen, Längen, Rauminhalte und Gewichte kennen", "Größen vergleichen, ordnen, messen und schätzen", "Größenangaben in unterschiedlichen Schreibweisen darstellen", "wichtige Bezugsgrößen aus der Erfahrungswelt heranziehen; mit Größen in Sachsituationen umgehen", "Inhalte: Gewichte (t, kg, g) · Rauminhalte (l, ml) · Längen (km, m, cm, mm) · Zeit (Stunde, Minute, Sekunde, Tag, Monat, Jahr) · Geld (Cent, Euro) · Tabellen und Diagramme"],
      "hinweis_fp": ["Fachbegriffe und Gebärden: Gewicht, Tonne, Kilogramm, Gramm, Liter, Milliliter, Kilometer, Meter", "Lebenspraktischer Bezug; Hinführung zu selbstständigen Bearbeitungshilfen"] },
    { "id": "ma-4-5", "stufe": "4", "titel": "Daten auswerten und Ereignisse einschätzen", "inhaltsfelder": ["Daten, Häufigkeiten und Wahrscheinlichkeiten"], "schlagworte": ["Daten & Häufigkeiten", "Alltag & Lebenswelt"], "kompetenzen_kurz": ["durch Beobachtungen und Experimente Daten sammeln", "die Wahrscheinlichkeit einfacher Ereignisse beschreiben"],
      "fundstelle": "Klasse 4 · Daten, Häufigkeiten und Wahrscheinlichkeiten",
      "auszug": ["durch Beobachtungen, Untersuchungen und einfache Experimente Daten sammeln", "Informationen strukturieren und in Tabellen, Schaubildern oder Diagrammen darstellen", "Die Wahrscheinlichkeit von einfachen Ereignissen beschreiben", "Inhalte: Informationen sammeln und darstellen · konkreter Umgang mit einem Ereignis (z. B. Gewinnspiel, Würfelspiel)"],
      "hinweis_fp": ["Die Begriffe „wahrscheinlich / unwahrscheinlich“ sind für Hörgeschädigte in dieser Altersstufe noch nicht zu verstehen. Mögliche Begriffe: unmöglich, häufig, oft, manchmal, sicher.", "Vermehrt praktisches Handeln"] },
  ]
},

{
  "schema": "tb-lehrplan-v1", "fach": "Englisch", "schulstufe": "Primarstufe",
  "beschluss": "Schulinternes Curriculum 2025 (Masterplan Grundschule)",
  "quelle": "Schulinternes Curriculum Englisch, LVR-Johann-Joseph-Gronewaldschule Köln",
  "vorhaben": [
    { "id": "en-3-1", "stufe": "3", "titel": "Saying Hello", "inhaltsfelder": ["Persönliche Lebenswelt"], "schlagworte": ["Begrüßung", "Alltag & Lebenswelt"], "kompetenzen_kurz": ["sich und andere auf Englisch begrüßen und vorstellen"] },
    { "id": "en-3-2", "stufe": "3", "titel": "Colours", "inhaltsfelder": ["Persönliche Lebenswelt"], "schlagworte": ["Farben"], "kompetenzen_kurz": ["Farben benennen und Gegenständen zuordnen"] },
    { "id": "en-3-3", "stufe": "3", "titel": "Numbers 1–20", "inhaltsfelder": ["Persönliche Lebenswelt"], "schlagworte": ["Zahlvorstellung"], "kompetenzen_kurz": ["Zahlen bis 20 auf Englisch benennen und nutzen"] },
    { "id": "en-3-4", "stufe": "3", "titel": "School", "inhaltsfelder": ["Persönliche Lebenswelt"], "schlagworte": ["Alltag & Lebenswelt"], "kompetenzen_kurz": ["Schulgegenstände benennen", "über die eigene Schule sprechen"] },
    { "id": "en-3-5", "stufe": "3", "titel": "Pets", "inhaltsfelder": ["Persönliche Lebenswelt"], "schlagworte": ["Tiere", "Alltag & Lebenswelt"], "kompetenzen_kurz": ["Haustiere benennen und beschreiben"] },
    { "id": "en-3-6", "stufe": "3", "titel": "Farm", "inhaltsfelder": ["Persönliche Lebenswelt"], "schlagworte": ["Tiere"], "kompetenzen_kurz": ["Tiere auf dem Bauernhof benennen"] },
    { "id": "en-3-7", "stufe": "3", "titel": "Summer clothes", "inhaltsfelder": ["Persönliche Lebenswelt"], "schlagworte": ["Kleidung", "Jahreszeiten"], "kompetenzen_kurz": ["Sommerkleidung benennen"] },
    { "id": "en-3-8", "stufe": "3", "titel": "Fruits", "inhaltsfelder": ["Persönliche Lebenswelt"], "schlagworte": ["Ernährung", "Alltag & Lebenswelt"], "kompetenzen_kurz": ["Obstsorten benennen und Vorlieben äußern"] },
    { "id": "en-3-9", "stufe": "3", "titel": "Feelings", "inhaltsfelder": ["Persönliche Lebenswelt"], "schlagworte": ["Gefühle"], "kompetenzen_kurz": ["Gefühle benennen und erfragen"] },
    { "id": "en-3-10", "stufe": "3", "titel": "Body", "inhaltsfelder": ["Persönliche Lebenswelt"], "schlagworte": ["Körper"], "kompetenzen_kurz": ["Körperteile benennen"] },
    { "id": "en-3-11", "stufe": "3", "titel": "Transport", "inhaltsfelder": ["Persönliche Lebenswelt"], "schlagworte": ["Alltag & Lebenswelt"], "kompetenzen_kurz": ["Verkehrsmittel benennen"] },
    { "id": "en-3-12", "stufe": "3", "titel": "Christmas", "inhaltsfelder": ["Persönliche Lebenswelt"], "schlagworte": ["Feste im Jahreskreis"], "kompetenzen_kurz": ["englische Weihnachtstraditionen kennenlernen"] },
    { "id": "en-3-13", "stufe": "3", "titel": "Easter", "inhaltsfelder": ["Persönliche Lebenswelt"], "schlagworte": ["Feste im Jahreskreis"], "kompetenzen_kurz": ["englische Ostertraditionen kennenlernen"] },
    { "id": "en-3-14", "stufe": "3", "titel": "Landeskunde: United Kingdom", "inhaltsfelder": ["Interkulturelles Lernen"], "schlagworte": ["Landeskunde"], "kompetenzen_kurz": ["Länder, Hauptstädte und Flaggen von UK/GB kennen"] },

    { "id": "en-4-1", "stufe": "4", "titel": "Saying Hello (Wiederholung)", "inhaltsfelder": ["Persönliche Lebenswelt"], "schlagworte": ["Begrüßung", "Alltag & Lebenswelt"], "kompetenzen_kurz": ["Begrüßungsformeln sicher anwenden"] },
    { "id": "en-4-2", "stufe": "4", "titel": "Numbers (erweitert)", "inhaltsfelder": ["Persönliche Lebenswelt"], "schlagworte": ["Zahlvorstellung"], "kompetenzen_kurz": ["größere Zahlen auf Englisch benennen und nutzen"] },
    { "id": "en-4-3", "stufe": "4", "titel": "Calendar / Seasons", "inhaltsfelder": ["Persönliche Lebenswelt"], "schlagworte": ["Jahreszeiten", "Kalender"], "kompetenzen_kurz": ["Monate und Jahreszeiten benennen"] },
    { "id": "en-4-4", "stufe": "4", "titel": "Weather", "inhaltsfelder": ["Persönliche Lebenswelt"], "schlagworte": ["Wetter", "Jahreszeiten"], "kompetenzen_kurz": ["über das Wetter sprechen"] },
    { "id": "en-4-5", "stufe": "4", "titel": "Zoo / Wild animals", "inhaltsfelder": ["Persönliche Lebenswelt"], "schlagworte": ["Tiere"], "kompetenzen_kurz": ["Wildtiere benennen und beschreiben"] },
    { "id": "en-4-6", "stufe": "4", "titel": "Winter clothes", "inhaltsfelder": ["Persönliche Lebenswelt"], "schlagworte": ["Kleidung", "Jahreszeiten"], "kompetenzen_kurz": ["Winterkleidung benennen"] },
    { "id": "en-4-7", "stufe": "4", "titel": "Breakfast", "inhaltsfelder": ["Persönliche Lebenswelt"], "schlagworte": ["Ernährung", "Alltag & Lebenswelt"], "kompetenzen_kurz": ["Frühstücksnahrungsmittel benennen"] },
    { "id": "en-4-8", "stufe": "4", "titel": "Pizza", "inhaltsfelder": ["Persönliche Lebenswelt"], "schlagworte": ["Ernährung"], "kompetenzen_kurz": ["Zutaten benennen, eine eigene Pizza beschreiben"] },
    { "id": "en-4-9", "stufe": "4", "titel": "Family", "inhaltsfelder": ["Persönliche Lebenswelt"], "schlagworte": ["Familie", "Alltag & Lebenswelt"], "kompetenzen_kurz": ["Familienmitglieder benennen und vorstellen"] },
    { "id": "en-4-10", "stufe": "4", "titel": "Halloween", "inhaltsfelder": ["Persönliche Lebenswelt"], "schlagworte": ["Feste im Jahreskreis"], "kompetenzen_kurz": ["englischsprachige Halloween-Bräuche kennenlernen"] },
    { "id": "en-4-11", "stufe": "4", "titel": "Hobbies", "inhaltsfelder": ["Persönliche Lebenswelt"], "schlagworte": ["Alltag & Lebenswelt"], "kompetenzen_kurz": ["über eigene Hobbys sprechen"] },
    { "id": "en-4-12", "stufe": "4", "titel": "House", "inhaltsfelder": ["Persönliche Lebenswelt"], "schlagworte": ["Wohnen", "Alltag & Lebenswelt"], "kompetenzen_kurz": ["Räume und Möbel benennen"] },
    { "id": "en-4-13", "stufe": "4", "titel": "Daily routines", "inhaltsfelder": ["Persönliche Lebenswelt"], "schlagworte": ["Tagesablauf", "Alltag & Lebenswelt"], "kompetenzen_kurz": ["den eigenen Tagesablauf auf Englisch beschreiben", "Uhrzeiten benennen"] },
    { "id": "en-4-14", "stufe": "4", "titel": "Landeskunde: London", "inhaltsfelder": ["Interkulturelles Lernen"], "schlagworte": ["Landeskunde"], "kompetenzen_kurz": ["Sehenswürdigkeiten Londons kennenlernen"] }
  ]
},

{
  "schema": "tb-lehrplan-v1", "fach": "Deutsch", "schulstufe": "Primarstufe",
  "beschluss": "Fachcurriculum Deutsch, Stand 5.11.2018",
  "quelle": "Deutsch Klasse 1–4 (JJG), Kap. 3.1–3.4",
  "vorhaben": [
    { "id": "de-ep1-1", "stufe": "EP1", "titel": "Miteinander sprechen und zuhören", "inhaltsfelder": ["Sprechen und Zuhören"], "schlagworte": ["Gespräche führen", "Gefühle"], "kompetenzen_kurz": ["Gesprächsregeln entwickeln und einhalten", "eigene Ideen vorstellen und begründen"] },
    { "id": "de-ep1-2", "stufe": "EP1", "titel": "Erlebnisse erzählen und szenisch spielen", "inhaltsfelder": ["Sprechen und Zuhören"], "schlagworte": ["Erzählen", "Gefühle"], "kompetenzen_kurz": ["Erlebnisse und Geschichten erzählen", "Geschichten in einfachen Spielszenen umsetzen"] },
    { "id": "de-ep1-3", "stufe": "EP1", "titel": "Erste Schritte im Lesen", "inhaltsfelder": ["Lesen – mit Texten und Medien umgehen"], "schlagworte": ["Lesen"], "kompetenzen_kurz": ["Buchstaben und erste Wörter erlesen", "einfachen Texten Informationen entnehmen"] },
    { "id": "de-ep1-4", "stufe": "EP1", "titel": "Erste Wörter und Sätze schreiben", "inhaltsfelder": ["Schreiben"], "schlagworte": ["Schreiben"], "kompetenzen_kurz": ["lautgetreu Wörter verschriften", "einfache Sätze aufschreiben"] },

    { "id": "de-ep23-1", "stufe": "EP2/EP3", "titel": "Gespräche führen und Meinungen äußern", "inhaltsfelder": ["Sprechen und Zuhören"], "schlagworte": ["Gespräche führen", "Gefühle"], "kompetenzen_kurz": ["sich länger und aktiv an Gesprächen beteiligen", "die eigene Meinung äußern und begründen"] },
    { "id": "de-ep23-2", "stufe": "EP2/EP3", "titel": "Geschichten lesen und verstehen", "inhaltsfelder": ["Lesen – mit Texten und Medien umgehen"], "schlagworte": ["Lesen", "Erzählen"], "kompetenzen_kurz": ["Lesestrategien nutzen", "Texten gezielt Informationen entnehmen"] },
    { "id": "de-ep23-3", "stufe": "EP2/EP3", "titel": "Richtig schreiben – erste Regeln", "inhaltsfelder": ["Schreiben"], "schlagworte": ["Schreiben", "Rechtschreibung"], "kompetenzen_kurz": ["einfache Rechtschreibregeln anwenden", "Sätze und kurze Texte verfassen"] },
    { "id": "de-ep23-4", "stufe": "EP2/EP3", "titel": "Sprache untersuchen: Wörter und Sätze", "inhaltsfelder": ["Sprache und Sprachgebrauch untersuchen"], "schlagworte": ["Sprache & Grammatik"], "kompetenzen_kurz": ["Wortarten unterscheiden", "Satzstrukturen erkennen"] },

    { "id": "de-3-1", "stufe": "3", "titel": "Zuhören, sprechen und präsentieren", "inhaltsfelder": ["Sprechen und Zuhören"], "schlagworte": ["Präsentieren", "Gespräche führen"], "kompetenzen_kurz": ["durch Rückfragen das Verstehen sichern", "kurze Texte vortragen"] },
    { "id": "de-3-2", "stufe": "3", "titel": "Texte lesen und präsentieren", "inhaltsfelder": ["Lesen – mit Texten und Medien umgehen"], "schlagworte": ["Lesen", "Präsentieren"], "kompetenzen_kurz": ["Lesestrategien selbstständig nutzen", "Texte zusammenfassend wiedergeben"] },
    { "id": "de-3-3", "stufe": "3", "titel": "Rechtschreibung vertiefen", "inhaltsfelder": ["Schreiben"], "schlagworte": ["Schreiben", "Rechtschreibung"], "kompetenzen_kurz": ["Rechtschreibregeln vertiefend üben", "Sätze und Texte mit bekannten und unbekannten Wörtern schreiben"] },
    { "id": "de-3-4", "stufe": "3", "titel": "Texte am PC verfassen", "inhaltsfelder": ["Schreiben"], "schlagworte": ["Schreiben", "Digitale Werkzeuge"], "kompetenzen_kurz": ["Sätze und kurze Texte am PC schreiben"] },

    { "id": "de-4-1", "stufe": "4", "titel": "Verstehendes Zuhören vertiefen", "inhaltsfelder": ["Sprechen und Zuhören"], "schlagworte": ["Gespräche führen"], "kompetenzen_kurz": ["Verstehen durch gezielte Rückfragen intensivieren"] },
    { "id": "de-4-2", "stufe": "4", "titel": "Texte präsentieren", "inhaltsfelder": ["Lesen – mit Texten und Medien umgehen"], "schlagworte": ["Präsentieren", "Lesen"], "kompetenzen_kurz": ["kurze Texte mit einfachen Sätzen auswendig vortragen"] },
    { "id": "de-4-3", "stufe": "4", "titel": "Rechtschreibung sicher anwenden", "inhaltsfelder": ["Schreiben"], "schlagworte": ["Schreiben", "Rechtschreibung"], "kompetenzen_kurz": ["Rechtschreibregeln der Klasse 3 vertiefen und festigen"] },
    { "id": "de-4-4", "stufe": "4", "titel": "Rollenspiele frei gestalten", "inhaltsfelder": ["Sprechen und Zuhören"], "schlagworte": ["Erzählen", "Gefühle"], "kompetenzen_kurz": ["Rollenspiele frei anwenden"] }
  ]
},

{
  "schema": "tb-lehrplan-v1", "fach": "Religion", "schulstufe": "Primarstufe",
  "beschluss": "Schulinternes Curriculum (Stand Schuljahr 2020/2021)",
  "quelle": "Curriculum JJG Religion, EP 1-3 und Klasse 3/4 (evangelisch, an dieser Schule fachübergreifend unterrichtet)",
  "vorhaben": [
    { "id": "re-ep-1", "stufe": "EP1/EP2/EP3", "titel": "Miteinander leben – Ich bin viel wert", "inhaltsfelder": ["Miteinander Leben"], "schlagworte": ["Gemeinschaft", "Gefühle"], "kompetenzen_kurz": ["die eigene Persönlichkeit bewusst wahrnehmen", "ein verantwortliches Miteinander begründen (barmherziger Samariter)"] },
    { "id": "re-ep-2", "stufe": "EP1/EP2/EP3", "titel": "Wir leben in Gottes Schöpfung", "inhaltsfelder": ["Schöpfung"], "schlagworte": ["Natur & Nachhaltigkeit", "Jahreszeiten"], "kompetenzen_kurz": ["die Schöpfung als Geschenk Gottes wahrnehmen", "Verantwortung für die Bewahrung der Schöpfung übernehmen (Erntedank)"] },
    { "id": "re-ep-3", "stufe": "EP1/EP2/EP3", "titel": "Gott begleitet auf dem Lebensweg", "inhaltsfelder": ["Biblische Geschichten"], "schlagworte": ["Vertrauen", "Erzählen"], "kompetenzen_kurz": ["die Geschichte von Abraham und Sara erzählen", "erklären, warum man Gott vertrauen kann"] },
    { "id": "re-ep-4", "stufe": "EP1/EP2/EP3", "titel": "Gott sucht den Menschen – Weihnachten", "inhaltsfelder": ["Biblische Geschichten", "Feste im Jahreskreis"], "schlagworte": ["Feste im Jahreskreis", "Gefühle"], "kompetenzen_kurz": ["Gebete als Ausdruck von Vertrauen deuten", "die Weihnachtsgeschichte als Menschwerdung Gottes deuten"] },
    { "id": "re-ep-5", "stufe": "EP1/EP2/EP3", "titel": "Jesus lebt und verkündet das Gottesreich", "inhaltsfelder": ["Biblische Geschichten"], "schlagworte": ["Vorbilder", "Gemeinschaft"], "kompetenzen_kurz": ["Jesus als geschichtliche Person kennenlernen", "Jesu Handeln für Benachteiligte deuten (Zachäus, Speisung der 5000)"] },
    { "id": "re-ep-6", "stufe": "EP1/EP2/EP3", "titel": "Ostern – Jesus Christus begegnen", "inhaltsfelder": ["Biblische Geschichten", "Feste im Jahreskreis"], "schlagworte": ["Feste im Jahreskreis"], "kompetenzen_kurz": ["Ereignisse der Passionsgeschichte wiedergeben", "Ostern als Weg von Trauer zu neuem Leben deuten"] },

    { "id": "re-34-1", "stufe": "3/4", "titel": "Gemeinschaft ist möglich", "inhaltsfelder": ["Miteinander Leben"], "schlagworte": ["Gemeinschaft", "Regeln"], "kompetenzen_kurz": ["Handlungsmöglichkeiten zur Konfliktlösung kennen und anwenden", "die Zehn Gebote als Regeln für das Zusammenleben kennenlernen"] },
    { "id": "re-34-2", "stufe": "3/4", "titel": "Feste, Kirche und die Bibel entdecken", "inhaltsfelder": ["Feste im Jahreskreis", "Die Bibel"], "schlagworte": ["Feste im Jahreskreis", "Kultur"], "kompetenzen_kurz": ["Unterschiede und Gemeinsamkeiten der Konfessionen benennen", "die Entstehung der Bibel erklären"] },
    { "id": "re-34-3", "stufe": "3/4", "titel": "Wir leben in Gottes Schöpfung", "inhaltsfelder": ["Schöpfung"], "schlagworte": ["Natur & Nachhaltigkeit", "Wissenschaft & Erkenntnis"], "kompetenzen_kurz": ["die Schöpfungsgeschichte kennenlernen", "naturwissenschaftliche und biblische Deutungen unterscheiden"] },
    { "id": "re-34-4", "stufe": "3/4", "titel": "Gott begleitet auf dem Lebensweg", "inhaltsfelder": ["Biblische Geschichten"], "schlagworte": ["Vertrauen", "Erzählen"], "kompetenzen_kurz": ["Gott als Retter und Befreier beschreiben (Exodus)", "Erfahrungen des Volkes Israel auf die eigene Gegenwart beziehen"] },
    { "id": "re-34-5", "stufe": "3/4", "titel": "Weihnachten – Licht in der Dunkelheit", "inhaltsfelder": ["Feste im Jahreskreis"], "schlagworte": ["Feste im Jahreskreis", "Gefühle"], "kompetenzen_kurz": ["das Vater Unser als christliches Grundgebet kennen", "die Weihnachtsgeschichte im Kontext von Licht und Hoffnung deuten"] },
    { "id": "re-34-6", "stufe": "3/4", "titel": "Jesus – Wer bist du?", "inhaltsfelder": ["Biblische Geschichten"], "schlagworte": ["Vorbilder", "Gemeinschaft"], "kompetenzen_kurz": ["Gleichnisse Jesu als Veranschaulichung des Gottesreiches deuten", "aus Vorbildern Impulse für eigenes Handeln ableiten"] }
  ]
},

{
  "schema": "tb-lehrplan-v1", "fach": "Musik", "schulstufe": "Primarstufe",
  "beschluss": "Fachcurriculum Musik/Rhythmik, Stand ab Schuljahr 2014/2015",
  "quelle": "Curriculum Musik LS/LUG und Curriculum Rhythmik DGS/LBG, Schuleingangsphase und Klasse 3/4 (an der JJG ein gemeinsames Fach)",
  "vorhaben": [
    { "id": "mu-ep-1", "stufe": "EP1/EP2/EP3", "titel": "Stimme, Klang und erste Instrumente entdecken", "inhaltsfelder": ["Musik machen"], "schlagworte": ["Singen", "Instrumente"], "kompetenzen_kurz": ["Lieder auswendig singen und gebärden", "Klangerzeuger und Instrumente erproben"] },
    { "id": "mu-ep-2", "stufe": "EP1/EP2/EP3", "titel": "Herbst- und Winterlieder feiern", "inhaltsfelder": ["Musik machen", "Musik hören"], "schlagworte": ["Feste im Jahreskreis", "Jahreszeiten"], "kompetenzen_kurz": ["Lieder zu Sankt Martin, Advent und Weihnachten singen", "Geräusche der Jahreszeit erkennen und zuordnen"] },
    { "id": "mu-ep-3", "stufe": "EP1/EP2/EP3", "titel": "Winterklänge hören und tanzen", "inhaltsfelder": ["Musik hören", "Musik umsetzen"], "schlagworte": ["Tänze & Bewegung", "Jahreszeiten"], "kompetenzen_kurz": ["Wirkung von Musik durch Bewegung ausdrücken", "vorgegebene Tanzformen erarbeiten"] },
    { "id": "mu-ep-4", "stufe": "EP1/EP2/EP3", "titel": "Frühling und Tiere in der Musik", "inhaltsfelder": ["Musik hören", "Musik umsetzen"], "schlagworte": ["Tiere", "Jahreszeiten"], "kompetenzen_kurz": ["Tiergeräusche und -bewegungen musikalisch darstellen", "Musik in Bildern und Farben umsetzen"] },
    { "id": "rh-ep-1", "stufe": "EP1/EP2/EP3", "titel": "Lieder gebärden, singen und sich bewegen", "inhaltsfelder": ["Musik machen"], "schlagworte": ["Singen", "Gebärden"], "kompetenzen_kurz": ["Lieder gebärden und singen, Gebärdenabfolgen nachahmen", "mit Stimme und Gebärde spielerisch umgehen"] },
    { "id": "rh-ep-2", "stufe": "EP1/EP2/EP3", "titel": "Trommeln, Rasseln und Klangerzeuger erproben", "inhaltsfelder": ["Musik machen"], "schlagworte": ["Instrumente"], "kompetenzen_kurz": ["Rhythmusinstrumente erproben und nach Regeln improvisieren", "im Drum-Circle auf visuelle Zeichen reagieren"] },
    { "id": "rh-ep-3", "stufe": "EP1/EP2/EP3", "titel": "Herbst- und Winterklänge in Bewegung", "inhaltsfelder": ["Musik umsetzen"], "schlagworte": ["Jahreszeiten", "Tänze & Bewegung"], "kompetenzen_kurz": ["eigene Bewegungsformen zu Liedern erfinden", "Geräusche grafisch notieren und danach spielen"] },
    { "id": "rh-ep-4", "stufe": "EP1/EP2/EP3", "titel": "Musik in Bewegung und Bildern ausdrücken", "inhaltsfelder": ["Musik umsetzen"], "schlagworte": ["Tänze & Bewegung", "Gefühle"], "kompetenzen_kurz": ["Ausdrucksmöglichkeiten von Musik durch Bewegung erfahren", "hervorgerufene Empfindungen malerisch darstellen"] },

    { "id": "mu-34-1", "stufe": "3/4", "titel": "Musik erforschen: Instrumente und Komponisten", "inhaltsfelder": ["Musik machen", "Musik hören"], "schlagworte": ["Instrumente", "Wissenschaft & Erkenntnis"], "kompetenzen_kurz": ["Instrumentengruppen unterscheiden und benennen", "Informationen zu einem Komponisten sammeln"] },
    { "id": "mu-34-2", "stufe": "3/4", "titel": "Winterliche Klanggeschichten", "inhaltsfelder": ["Musik machen", "Musik umsetzen"], "schlagworte": ["Feste im Jahreskreis", "Erzählen"], "kompetenzen_kurz": ["eine Klanggeschichte instrumental begleiten", "eigene Spielszenen zur Musik entwickeln"] },
    { "id": "mu-34-3", "stufe": "3/4", "titel": "Regen, Wind und Wetter in der Musik", "inhaltsfelder": ["Musik hören", "Musik umsetzen"], "schlagworte": ["Wetter", "Jahreszeiten"], "kompetenzen_kurz": ["Stimmungsbilder in der Musik erkennen", "Regen- und Wettergeräusche mit Instrumenten darstellen"] },
    { "id": "mu-34-4", "stufe": "3/4", "titel": "Konzerte, Tänze und eigene Klangprojekte", "inhaltsfelder": ["Musik umsetzen"], "schlagworte": ["Tänze & Bewegung", "Projektarbeit"], "kompetenzen_kurz": ["eigene Bewegungs- und Klangchoreografien erfinden", "eine öffentliche Probe oder ein Konzert besuchen"] },
    { "id": "rh-34-1", "stufe": "3/4", "titel": "Rhythmische Ausdrucksweise entwickeln", "inhaltsfelder": ["Musik machen"], "schlagworte": ["Gebärden", "Singen"], "kompetenzen_kurz": ["eigene poetische Gebärden zu einem Lied entwickeln", "Zwerchfell- und Stimmübungen nutzen"] },
    { "id": "rh-34-2", "stufe": "3/4", "titel": "Instrumente, Rasseln und Klanggeschichten bauen", "inhaltsfelder": ["Musik machen"], "schlagworte": ["Instrumente", "Erzählen"], "kompetenzen_kurz": ["Rhythmusinstrumente bauen und Klanggeschichten begleiten", "eine Spiel-mit-Partitur umsetzen"] },
    { "id": "rh-34-3", "stufe": "3/4", "titel": "Musik hören, benennen und erklären", "inhaltsfelder": ["Musik hören"], "schlagworte": ["Instrumente", "Wissenschaft & Erkenntnis"], "kompetenzen_kurz": ["Instrumentengruppen erkennen und benennen", "über Live-Musik-Erlebnisse sprechen"] },
    { "id": "rh-34-4", "stufe": "3/4", "titel": "Eigene Tänze und Klangprojekte gestalten", "inhaltsfelder": ["Musik umsetzen"], "schlagworte": ["Tänze & Bewegung", "Projektarbeit"], "kompetenzen_kurz": ["Bewegungsformen zu Musik erfinden und erarbeiten", "eine musikalische Szene choreografisch gestalten"] }
  ]
},

{
  "schema": "tb-lehrplan-v1", "fach": "Kunst", "schulstufe": "Primarstufe",
  "beschluss": "Lehrplan Kunst Grundschule (angepasst FP Hören und Kommunikation)",
  "quelle": "Kunst-Curriculum Primarstufe, Kap. 3.1–3.7",
  "vorhaben": [
    { "id": "ku-ep-1", "stufe": "EP1/EP2/EP3", "titel": "Räumliches Gestalten: Bauen und Konstruieren", "inhaltsfelder": ["Räumliches Gestalten"], "schlagworte": ["Material & Werkzeug"], "kompetenzen_kurz": ["Materialeigenschaften untersuchen und beschreiben (Ton, Holz, Stein)", "mit Alltagsmaterialien Figuren und Häuser bauen"] },
    { "id": "ku-ep-2", "stufe": "EP1/EP2/EP3", "titel": "Farbiges Gestalten: Die Welt der Farben", "inhaltsfelder": ["Farbiges Gestalten"], "schlagworte": ["Farben"], "kompetenzen_kurz": ["mit unterschiedlichen Farben und Farbmaterialien experimentieren", "aus Grundfarben neue Farbtöne mischen"] },
    { "id": "ku-ep-3", "stufe": "EP1/EP2/EP3", "titel": "Grafisches Gestalten: Muster, Zeichen und Bilder", "inhaltsfelder": ["Grafisches Gestalten"], "schlagworte": ["Muster"], "kompetenzen_kurz": ["grafische Mittel (Punkt, Linie, Fleck) erproben", "Erlebtes und Fantastisches in Bildergeschichten umsetzen"] },
    { "id": "ku-ep-4", "stufe": "EP1/EP2/EP3", "titel": "Textiles Gestalten", "inhaltsfelder": ["Textiles Gestalten"], "schlagworte": ["Material & Werkzeug"], "kompetenzen_kurz": ["textile Materialien und Techniken erproben"] },
    { "id": "ku-ep-5", "stufe": "EP1/EP2/EP3", "titel": "Gestalten mit Medien", "inhaltsfelder": ["Gestalten mit technisch-visuellen Medien"], "schlagworte": ["Digitale Werkzeuge"], "kompetenzen_kurz": ["mit einfachen technisch-visuellen Medien gestalten"] },
    { "id": "ku-ep-6", "stufe": "EP1/EP2/EP3", "titel": "Szenisches Gestalten: Masken, Figuren, Kulissen", "inhaltsfelder": ["Szenisches Gestalten"], "schlagworte": ["Erzählen", "Gefühle"], "kompetenzen_kurz": ["Figuren und Spielobjekte für Spielanlässe herstellen (z. B. Masken, Fingerfiguren)"] },
    { "id": "ku-ep-7", "stufe": "EP1/EP2/EP3", "titel": "Bilder und Objekte betrachten", "inhaltsfelder": ["Auseinandersetzung mit Bildern und Objekten"], "schlagworte": ["Kultur"], "kompetenzen_kurz": ["Bilder und Objekte wahrnehmen und beschreiben"] },

    { "id": "ku-34-1", "stufe": "3/4", "titel": "Räumliches Gestalten: Modelle und Raumideen", "inhaltsfelder": ["Räumliches Gestalten"], "schlagworte": ["Material & Werkzeug"], "kompetenzen_kurz": ["Materialien im Hinblick auf räumliche Wirkung nutzen", "Häuser und Brücken im Umfeld als Modelle nachbilden"] },
    { "id": "ku-34-2", "stufe": "3/4", "titel": "Farbiges Gestalten: Kontraste und Nuancen", "inhaltsfelder": ["Farbiges Gestalten"], "schlagworte": ["Farben"], "kompetenzen_kurz": ["Farbkontraste gestalten, beschreiben und reflektieren", "erste Mischgesetze erkennen"] },
    { "id": "ku-34-3", "stufe": "3/4", "titel": "Grafisches Gestalten: Drucken und Schrift", "inhaltsfelder": ["Grafisches Gestalten"], "schlagworte": ["Muster"], "kompetenzen_kurz": ["Druckverfahren zielgerichtet einsetzen", "Schriftzeichen und -bilder nach eigenen Vorstellungen gestalten"] },
    { "id": "ku-34-4", "stufe": "3/4", "titel": "Textiles Gestalten: Weiterführende Techniken", "inhaltsfelder": ["Textiles Gestalten"], "schlagworte": ["Material & Werkzeug"], "kompetenzen_kurz": ["textile Techniken zielgerichtet anwenden"] },
    { "id": "ku-34-5", "stufe": "3/4", "titel": "Gestalten mit Medien: eigene Projekte", "inhaltsfelder": ["Gestalten mit technisch-visuellen Medien"], "schlagworte": ["Digitale Werkzeuge", "Projektarbeit"], "kompetenzen_kurz": ["technisch-visuelle Medien projektbezogen einsetzen"] },
    { "id": "ku-34-6", "stufe": "3/4", "titel": "Szenisches Gestalten: Figuren, Bühnenbild und Aufführung", "inhaltsfelder": ["Szenisches Gestalten"], "schlagworte": ["Erzählen", "Figuren bauen"], "kompetenzen_kurz": ["differenzierte Gestaltungen zu Szenen entwerfen und präsentieren", "mit formbaren Materialien komplexere (Spiel-)Figuren herstellen (z. B. Skulpturen, Drahtfiguren)"] },
    { "id": "ku-34-7", "stufe": "3/4", "titel": "Bilder und Objekte untersuchen und beurteilen", "inhaltsfelder": ["Auseinandersetzung mit Bildern und Objekten"], "schlagworte": ["Kultur"], "kompetenzen_kurz": ["Bilder und Objekte deuten und dazu Stellung nehmen"] }
  ]
},

{
  "schema": "tb-lehrplan-v1", "fach": "Sport", "schulstufe": "Primarstufe",
  "beschluss": "Lehrplan Sport Grundschule (angepasst FP Hören und Kommunikation)",
  "quelle": "Sport-Curriculum, Bewegungsfelder 1–9",
  "vorhaben": [
    { "id": "sp-ep-1", "stufe": "EP1/EP2/EP3", "titel": "Den eigenen Körper wahrnehmen", "inhaltsfelder": ["Körperwahrnehmung"], "schlagworte": ["Körper", "Gefühle"], "kompetenzen_kurz": ["grundlegende Bewegungsfähigkeiten ausprägen", "den eigenen Körper und seine Signale wahrnehmen"] },
    { "id": "sp-ep-2", "stufe": "EP1/EP2/EP3", "titel": "Spielen und Spielräume nutzen", "inhaltsfelder": ["Spielen"], "schlagworte": ["Gemeinschaft", "Regeln"], "kompetenzen_kurz": ["einfache Spiele mit- und gegeneinander spielen", "Spielräume und -geräte entdecken"] },
    { "id": "sp-ep-3", "stufe": "EP1/EP2/EP3", "titel": "Laufen, Springen, Werfen", "inhaltsfelder": ["Leichtathletik"], "schlagworte": ["Bewegung"], "kompetenzen_kurz": ["grundlegende leichtathletische Bewegungsformen üben"] },
    { "id": "sp-ep-4", "stufe": "EP1/EP2/EP3", "titel": "Bewegen im Wasser", "inhaltsfelder": ["Schwimmen"], "schlagworte": ["Bewegung", "Sicherheit & Risiko"], "kompetenzen_kurz": ["sich im Wasser sicher bewegen"] },
    { "id": "sp-ep-5", "stufe": "EP1/EP2/EP3", "titel": "Bewegen an Geräten", "inhaltsfelder": ["Turnen"], "schlagworte": ["Bewegung", "Sicherheit & Risiko"], "kompetenzen_kurz": ["an Turngeräten balancieren, klettern und rollen"] },
    { "id": "sp-ep-6", "stufe": "EP1/EP2/EP3", "titel": "Gestalten, Tanzen, Darstellen", "inhaltsfelder": ["Gymnastik/Tanz"], "schlagworte": ["Tänze & Bewegung", "Gefühle"], "kompetenzen_kurz": ["Bewegungen zu Musik gestalten und darstellen"] },

    { "id": "sp-34-1", "stufe": "3/4", "titel": "Den eigenen Körper gezielt einsetzen", "inhaltsfelder": ["Körperwahrnehmung"], "schlagworte": ["Körper"], "kompetenzen_kurz": ["Bewegungsfähigkeiten gezielt einsetzen und verbessern"] },
    { "id": "sp-34-2", "stufe": "3/4", "titel": "In Regelstrukturen spielen", "inhaltsfelder": ["Sportspiele"], "schlagworte": ["Gemeinschaft", "Regeln"], "kompetenzen_kurz": ["mit- und gegeneinander nach vereinbarten Regeln spielen"] },
    { "id": "sp-34-3", "stufe": "3/4", "titel": "Leichtathletische Disziplinen vertiefen", "inhaltsfelder": ["Leichtathletik"], "schlagworte": ["Bewegung", "Leistung & Training"], "kompetenzen_kurz": ["Lauf-, Sprung- und Wurftechniken vertiefen"] },
    { "id": "sp-34-4", "stufe": "3/4", "titel": "Sicher schwimmen", "inhaltsfelder": ["Schwimmen"], "schlagworte": ["Bewegung", "Sicherheit & Risiko"], "kompetenzen_kurz": ["verschiedene Schwimmtechniken anwenden"] },
    { "id": "sp-34-5", "stufe": "3/4", "titel": "Turnen an Gerätekombinationen", "inhaltsfelder": ["Turnen"], "schlagworte": ["Bewegung", "Sicherheit & Risiko"], "kompetenzen_kurz": ["Bewegungsfolgen an Gerätekombinationen turnen"] },
    { "id": "sp-34-6", "stufe": "3/4", "titel": "Rollen, Fahren, Gleiten", "inhaltsfelder": ["Rollsport/Bootssport/Wintersport"], "schlagworte": ["Bewegung", "Sicherheit & Risiko"], "kompetenzen_kurz": ["sich rollend oder gleitend fortbewegen"] },
    { "id": "sp-34-7", "stufe": "3/4", "titel": "Ringen und Kämpfen nach Regeln", "inhaltsfelder": ["Zweikampfsport"], "schlagworte": ["Regeln", "Körper"], "kompetenzen_kurz": ["fair nach vereinbarten Regeln ringen und kämpfen"] }
  ]
},

{
  "schema": "tb-lehrplan-v1", "fach": "DGS", "schulstufe": "Primarstufe",
  "beschluss": "Curriculum DGS, Stand 5.11.2018",
  "quelle": "DGS-Curriculum Primarstufe, Lernbereiche 1–6",
  "vorhaben": [
    { "id": "dgs-ep1-1", "stufe": "EP1", "titel": "Gebärdensprache als Mittel der Kommunikation", "inhaltsfelder": ["Kommunikation"], "schlagworte": ["Gebärden", "Gemeinschaft"], "kompetenzen_kurz": ["Blickkontakt als Voraussetzung für Kommunikation nutzen", "erste Kommunikations- und Gesprächsregeln anwenden"] },
    { "id": "dgs-ep1-2", "stufe": "EP1", "titel": "DGS verstehen und sich mitteilen", "inhaltsfelder": ["Rezeption und Produktion"], "schlagworte": ["Gebärden"], "kompetenzen_kurz": ["Mimik wahrnehmen und angemessen antworten", "Gefühle und Wünsche äußern"] },
    { "id": "dgs-ep1-3", "stufe": "EP1", "titel": "Von Erlebnissen erzählen", "inhaltsfelder": ["Narration"], "schlagworte": ["Erzählen", "Gebärden"], "kompetenzen_kurz": ["mit Hilfe einzelne Inhalte von Ereignissen erzählen (z. B. Klassenfahrt)"] },

    { "id": "dgs-ep23-1", "stufe": "EP2/EP3", "titel": "Dialoge führen und Mengen ausdrücken", "inhaltsfelder": ["Rezeption und Produktion", "Sprachliche Formen und Strukturen"], "schlagworte": ["Gebärden", "Zahlvorstellung"], "kompetenzen_kurz": ["Dialoge verstehen und gestalten (Befehl, Frage, Bitte)", "Mengenangaben in DGS korrekt bilden"] },
    { "id": "dgs-ep23-2", "stufe": "EP2/EP3", "titel": "Bildergeschichten erzählen", "inhaltsfelder": ["Narration"], "schlagworte": ["Erzählen"], "kompetenzen_kurz": ["Bildergeschichten folgerichtig und kohärent erzählen"] },
    { "id": "dgs-ep23-3", "stufe": "EP2/EP3", "titel": "Gebärdensprachpoesie entdecken", "inhaltsfelder": ["Poesie und Prosa"], "schlagworte": ["Kultur", "Gebärden"], "kompetenzen_kurz": ["Gebärdenlieder und gebärdete Kinderliteratur kennenlernen (ab Klasse 2)"] },

    { "id": "dgs-3-1", "stufe": "3", "titel": "Sachverhalte beschreiben und erklären", "inhaltsfelder": ["Rezeption und Produktion", "Narration"], "schlagworte": ["Gebärden", "Erzählen"], "kompetenzen_kurz": ["Sachverhalte in DGS beschreiben und erklären", "Gegenstände im Alltag benennen (Klasse, Bus, Einkaufen)"] },
    { "id": "dgs-3-2", "stufe": "3", "titel": "Gebärdete Kinderliteratur nacherzählen", "inhaltsfelder": ["Narration", "Poesie und Prosa"], "schlagworte": ["Erzählen", "Kultur"], "kompetenzen_kurz": ["gebärdete Kinderliteratur nacherzählen"] },
    { "id": "dgs-3-3", "stufe": "3", "titel": "Gebärdensprache und Medien", "inhaltsfelder": ["Gebärdensprache und Medien"], "schlagworte": ["Digitale Werkzeuge"], "kompetenzen_kurz": ["Medien zur Verständigung in DGS nutzen"] },

    { "id": "dgs-4-1", "stufe": "4", "titel": "Vom Urlaub und Ausflügen erzählen", "inhaltsfelder": ["Narration"], "schlagworte": ["Erzählen", "Alltag & Lebenswelt"], "kompetenzen_kurz": ["zusammenhängend von Urlaub und Klassenfahrten erzählen"] },
    { "id": "dgs-4-2", "stufe": "4", "titel": "Sprachliche Formen sicher nutzen", "inhaltsfelder": ["Sprachliche Formen und Strukturen"], "schlagworte": ["Gebärden", "Sprache & Grammatik"], "kompetenzen_kurz": ["komplexere sprachliche Strukturen in DGS anwenden"] },
    { "id": "dgs-4-3", "stufe": "4", "titel": "Präsentieren und informieren", "inhaltsfelder": ["Rezeption und Produktion"], "schlagworte": ["Präsentieren", "Digitale Werkzeuge"], "kompetenzen_kurz": ["andere informieren und etwas präsentieren"] }
  ]
},

{
  "schema": "tb-lehrplan-v1", "fach": "Sachunterricht", "schulstufe": "Primarstufe",
  "beschluss": "Schulinternes Curriculum Sachunterricht",
  "quelle": "SU JJG Neu.pdf, Lernbereiche 1–5 (Natur und Leben, Technik und Arbeitswelt, Raum/Umwelt/Mobilität, Mensch und Gemeinschaft, Zeit und Kultur)",
  "vorhaben": [
    { "id": "su-ep-1", "stufe": "EP1/EP2/EP3", "titel": "Stoffe sammeln und untersuchen", "inhaltsfelder": ["Natur und Leben"], "schlagworte": ["Material & Werkzeug", "Wissenschaft & Erkenntnis"], "kompetenzen_kurz": ["Materialien aus der Natur sammeln und nach Ordnungskriterien sortieren", "Materialeigenschaften vergleichen und beschreiben"] },
    { "id": "su-ep-2", "stufe": "EP1/EP2/EP3", "titel": "Wasser, Luft, Wärme und Licht erforschen", "inhaltsfelder": ["Natur und Leben"], "schlagworte": ["Wissenschaft & Erkenntnis"], "kompetenzen_kurz": ["Eigenschaften von Wasser und Luft in Experimenten entdecken", "die Bedeutung von Wasser, Wärme und Licht für Lebewesen untersuchen"] },
    { "id": "su-ep-3", "stufe": "EP1/EP2/EP3", "titel": "Werkzeuge sicher nutzen", "inhaltsfelder": ["Technik und Arbeitswelt"], "schlagworte": ["Material & Werkzeug", "Sicherheit & Risiko"], "kompetenzen_kurz": ["Werkzeuge und Werkstoffe sachgerecht benutzen (Schere, Hammer, Zange)", "einfache mechanische Alltagsgegenstände untersuchen"] },
    { "id": "su-ep-4", "stufe": "EP1/EP2/EP3", "titel": "Fahrzeuge und Bauwerke bauen", "inhaltsfelder": ["Technik und Arbeitswelt"], "schlagworte": ["Konstruktion"], "kompetenzen_kurz": ["Fahrzeuge und Maschinen mit Bastelmaterial bauen und ihre Funktion erproben", "einfache Modelle von Bauwerken herstellen"] },
    { "id": "su-ep-5", "stufe": "EP1/EP2/EP3", "titel": "Unsere Schule und ihre Umgebung erkunden", "inhaltsfelder": ["Raum, Umwelt und Mobilität"], "schlagworte": ["Orientierung", "Alltag & Lebenswelt"], "kompetenzen_kurz": ["Schulwege und Schulumgebung erkunden", "sich mit Wege- und Lageskizzen orientieren"] },
    { "id": "su-ep-6", "stufe": "EP1/EP2/EP3", "titel": "Sicher im Straßenverkehr unterwegs", "inhaltsfelder": ["Raum, Umwelt und Mobilität"], "schlagworte": ["Sicherheit & Risiko"], "kompetenzen_kurz": ["den eigenen Schulweg zeichnen und beschreiben", "Verkehrszeichen kennenlernen und beachten"] },
    { "id": "su-ep-7", "stufe": "EP1/EP2/EP3", "titel": "Zusammenleben in der Klasse", "inhaltsfelder": ["Mensch und Gemeinschaft"], "schlagworte": ["Gemeinschaft", "Gefühle"], "kompetenzen_kurz": ["eigene Bedürfnisse, Gefühle und Interessen formulieren", "gemeinsame Regeln für das Zusammenleben erarbeiten"] },
    { "id": "su-ep-8", "stufe": "EP1/EP2/EP3", "titel": "Meine Familie und ich", "inhaltsfelder": ["Mensch und Gemeinschaft"], "schlagworte": ["Familie", "Gemeinschaft"], "kompetenzen_kurz": ["Aufgaben in der Klasse verantwortungsvoll übernehmen", "über die eigene Familie sprechen"] },
    { "id": "su-ep-9", "stufe": "EP1/EP2/EP3", "titel": "Zeit, Jahreskreis und Feste", "inhaltsfelder": ["Zeit und Kultur"], "schlagworte": ["Jahreszeiten", "Feste im Jahreskreis", "Kalender"], "kompetenzen_kurz": ["Zeiteinteilungen sachgerecht verwenden (Uhrzeit, Kalender, Jahreszeiten)", "Feste und Feiern dem Jahreskreis zuordnen"] },
    { "id": "su-ep-10", "stufe": "EP1/EP2/EP3", "titel": "Kulturen und Feste der Welt", "inhaltsfelder": ["Zeit und Kultur"], "schlagworte": ["Kultur", "Feste im Jahreskreis"], "kompetenzen_kurz": ["Gebräuche und Feste anderer Kulturen kennenlernen", "Feste anderer Kulturen mit eigenen vergleichen"] },

    { "id": "su-34-1", "stufe": "3/4", "titel": "Stoffe und ihre Veränderung", "inhaltsfelder": ["Natur und Leben"], "schlagworte": ["Wissenschaft & Erkenntnis"], "kompetenzen_kurz": ["stoffliche Veränderungen untersuchen (Aggregatzustände des Wassers)", "Versuche zu Wasser, Feuer und Luft planen, durchführen und auswerten"] },
    { "id": "su-34-2", "stufe": "3/4", "titel": "Tiere, Pflanzen und ihre Lebensräume", "inhaltsfelder": ["Natur und Leben"], "schlagworte": ["Tiere", "Natur & Nachhaltigkeit"], "kompetenzen_kurz": ["die Entwicklung von Tieren und Pflanzen beschreiben", "Zusammenhänge zwischen Lebensräumen und Lebensbedingungen erklären"] },
    { "id": "su-34-3", "stufe": "3/4", "titel": "Berufe, Arbeit und Produktion", "inhaltsfelder": ["Technik und Arbeitswelt"], "schlagworte": ["Alltag & Lebenswelt"], "kompetenzen_kurz": ["Zusammenhänge zwischen Arbeit und Lebensstandard erkunden", "verschiedene Formen der Arbeit vergleichen"] },
    { "id": "su-34-4", "stufe": "3/4", "titel": "Maschinen, Energie und Konstruktion", "inhaltsfelder": ["Technik und Arbeitswelt"], "schlagworte": ["Konstruktion", "Natur & Nachhaltigkeit"], "kompetenzen_kurz": ["Aufbau und Funktion einfacher Maschinen untersuchen (Hebel, Getriebe)", "Formen der Energieumwandlung sammeln und dokumentieren"] },
    { "id": "su-34-5", "stufe": "3/4", "titel": "Karten lesen und sich orientieren", "inhaltsfelder": ["Raum, Umwelt und Mobilität"], "schlagworte": ["Orientierung"], "kompetenzen_kurz": ["Karten und Hilfsmittel als Orientierungshilfen nutzen (Kompass, Stadtplan)", "Strukturen des eigenen Lebensraums und der Region beschreiben"] },
    { "id": "su-34-6", "stufe": "3/4", "titel": "Sicher mit dem Fahrrad unterwegs", "inhaltsfelder": ["Raum, Umwelt und Mobilität"], "schlagworte": ["Sicherheit & Risiko"], "kompetenzen_kurz": ["Verkehrsregeln sicher anwenden", "an der Radfahrausbildung teilnehmen und sich verkehrsgerecht verhalten"] },
    { "id": "su-34-7", "stufe": "3/4", "titel": "Konflikte lösen und mitbestimmen", "inhaltsfelder": ["Mensch und Gemeinschaft"], "schlagworte": ["Gemeinschaft", "Regeln"], "kompetenzen_kurz": ["sich in Bedürfnisse und Gefühle anderer hineinversetzen", "Strukturen wie Klassenrat und Abstimmungen nutzen"] },
    { "id": "su-34-8", "stufe": "3/4", "titel": "Aufgaben der Gemeinde kennenlernen", "inhaltsfelder": ["Mensch und Gemeinschaft"], "schlagworte": ["Alltag & Lebenswelt"], "kompetenzen_kurz": ["Aufgabenbereiche im Gemeinwesen erkunden (Polizei, Feuerwehr, Rettungswesen)", "Möglichkeiten der Mitbestimmung von Kindern erkunden"] },
    { "id": "su-34-9", "stufe": "3/4", "titel": "Früher und heute", "inhaltsfelder": ["Zeit und Kultur"], "schlagworte": ["Kultur", "Wissenschaft & Erkenntnis"], "kompetenzen_kurz": ["Lebensbedingungen von Menschen anderer Zeiträume darstellen und vergleichen (z. B. Steinzeit, Mittelalter)"] },
    { "id": "su-34-10", "stufe": "3/4", "titel": "Medien recherchieren und präsentieren", "inhaltsfelder": ["Zeit und Kultur"], "schlagworte": ["Digitale Werkzeuge", "Präsentieren"], "kompetenzen_kurz": ["mit verschiedenen Medien recherchieren und Ergebnisse präsentieren", "alte und neue Medien miteinander vergleichen"] }
  ]
},

{
  "schema": "tb-lehrplan-v1", "fach": "Medienunterricht", "schulstufe": "Klasse 3/4",
  "beschluss": "Stoffverteilungsplan Medienunterricht Jg. 3 und Jg. 4",
  "quelle": "Stoffverteilungsplan_Medienunterricht_Jg3.docx, Stoffverteilungsplan_Medienunterricht_Jg4.docx",
  "vorhaben": [
    { "id": "me-3-1", "stufe": "3", "titel": "Digitale Werkzeuge & Foto-Kunst", "inhaltsfelder": ["Bedienen & Anwenden", "Produzieren & Präsentieren"], "schlagworte": ["Digitale Werkzeuge", "Fotografie"], "kompetenzen_kurz": ["iPad-Grundbedienung und Dateimanagement anwenden", "ein Fotografie-Projekt zu Perspektiven und Schnitttechnik umsetzen"] },
    { "id": "me-3-2", "stufe": "3", "titel": "Präsentieren & Dokumentieren", "inhaltsfelder": ["Produzieren & Präsentieren", "Informieren & Recherchieren"], "schlagworte": ["Digitale Werkzeuge", "Erzählen", "Feste im Jahreskreis"], "kompetenzen_kurz": ["ein E-Book mit Book Creator erstellen (z. B. Weihnachtsbuch, Ausflugsbericht)", "erste interaktive Präsentationen mit Keynote gestalten"] },
    { "id": "me-3-3", "stufe": "3", "titel": "Algorithmen & Programmierung", "inhaltsfelder": ["Problemlösen & Modellieren"], "schlagworte": ["Digitale Werkzeuge", "Konstruktion"], "kompetenzen_kurz": ["analoges Coding und Scratch Junior nutzen, um Geschichten zu programmieren", "mit LEGO Spike Roboter bauen und programmieren"] },
    { "id": "me-3-4", "stufe": "3", "titel": "Medienkritik & Kommunikation", "inhaltsfelder": ["Analysieren & Reflektieren", "Kommunizieren & Kooperieren"], "schlagworte": ["Medienkritik", "Sicherheit & Risiko", "Regeln"], "kompetenzen_kurz": ["KI-Bilder erkennen und mit der Rückwärtssuche prüfen", "Regeln für den Klassenchat und sicheres Verhalten im Netz kennenlernen"] },

    { "id": "me-4-1", "stufe": "4", "titel": "Mein digitales Ich & Verantwortung", "inhaltsfelder": ["Analysieren & Reflektieren", "Kommunizieren & Kooperieren"], "schlagworte": ["Medienkritik", "Gefühle", "Sicherheit & Risiko"], "kompetenzen_kurz": ["Cybermobbing erkennen, vorbeugen und Hilfe holen", "Social-Media-Filter und ihre Wirkung auf das Selbstbild reflektieren"] },
    { "id": "me-4-2", "stufe": "4", "titel": "Kreativ-Produktion: Hörspiel und Stop-Motion", "inhaltsfelder": ["Produzieren & Präsentieren", "Kommunizieren & Kooperieren"], "schlagworte": ["Digitale Werkzeuge", "Erzählen"], "kompetenzen_kurz": ["ein Hörspiel mit Sounddesign produzieren (Lautsprachklassen)", "einen Stop-Motion-Film als visuelles Erzählen gestalten (Bibi-Klassen)"] },
    { "id": "me-4-3", "stufe": "4", "titel": "Grafikdesign & Print: Weihnachtskarten", "inhaltsfelder": ["Bedienen & Anwenden", "Produzieren & Präsentieren"], "schlagworte": ["Digitale Werkzeuge", "Feste im Jahreskreis"], "kompetenzen_kurz": ["digital auf dem iPad zeichnen und mit Pages layouten", "vom digitalen Entwurf zum gedruckten Produkt gelangen"] }
  ]
}

] };
