# Themenbrücken – Johann-Joseph-Gronewaldschule (Köln)

Stand: 2026-09-26. Diese Datei ist die Übergabe für neue Claude-Unterhaltungen zu diesem Projekt.

## Was das ist
Interaktive Website, die fächerübergreifende Unterrichtsverbindungen ("Themenbrücken") sichtbar macht.
Vorlage war das Tool des Carl-Fuhlrott-Gymnasiums Wuppertal – nur Design/Technik übernommen, alle Inhalte neu
für die JJG erstellt (LVR-Förderschule Hören und Kommunikation, Förderschwerpunkt Primarstufe).

## Dateien
- `index.html` – komplette App (Preact/htm, keine Build-Pipeline, ein `<script>`-Block)
- `daten.js` – `window.TB_DATEN.basis`: Lehrplan-Vorhaben je Fach/Stufe
- `bruecken.js` – `window.TB_BRUECKEN.liste`: von Jakob bestätigte Themenbrücken (Format s. Kommentar in der Datei)
- `projekte.js` – `window.TB_PROJEKTE`: ausgearbeitete Projektideen zu Brücken (bisher leer)
- `assets/logo.jpg` – Schullogo

Lokal ansehen: `cd .../website && python3 -m http.server 8934`, dann `http://localhost:8934`.

## Stufen
EP1, EP2, EP3 (Schuleingangsphase, 3 Jahre), 3, 4. In `index.html` als `STUFEN`/`EINGANGSPHASE`/`PRIMARSTUFE` definiert.
Mehrere Quell-Lehrpläne unterscheiden nur 2–4 Stufen; wo die Schule selbst zusammenfasst (z. B. Deutsch: "EP2 und EP3"),
steht das im Datensatz als `"stufe": "EP2/EP3"`. Nur Mathematik hat 5 eigenständige Jahresstufen (E-1→EP1, 1→EP2, 2→EP3, 3, 4).

## Fächer (10)
Deutsch, Mathematik, Sachunterricht, Englisch (nur 3–4), Kunst, Musik (inkl. Rhythmik – an der JJG ein Fach),
Sport, DGS, Religion (konfessionell neutral geführt, Quelle ist das evangelische Fach-Curriculum),
Medienunterricht (nur 3–4).

## Wie Brücken entstehen
Zwei Wege parallel:
1. **Automatisch vorgeschlagen** (gestrichelt): Vorhaben mit überlappenden `schlagworte` werden automatisch
   verknüpft (`wertung()`-Funktion in index.html, Schwelle `SCHWELLE = 5`). Methodische Begriffe
   ("Präsentieren", "Digitale Werkzeuge", "Kommunikation" …) sind in `QUER` als Querschnittsbegriffe hinterlegt
   und zählen nur 15 % – sonst verbindet sich alles über "wir nutzen alle ein Tablet". Ein einzelnes gemeinsames
   Schlagwort reicht meistens NICHT für die Schwelle; es braucht zwei Treffer oder ein sehr seltenes Schlagwort.
2. **Von Jakob bestätigt** (durchgezogen, `bruecken.js`): reale, im Unterricht gelebte Verzahnungen, die kein
   Algorithmus erraten kann. Bisher bestätigt: Medienunterricht×Sachunterricht (Tiere/Keynote),
   Medienunterricht×Kunst (Stop-Motion/Figuren).

**Wichtig für neue Brücken:** Wenn Jakob eine reale Verzahnung nennt, direkt in `bruecken.js` eintragen
(Format: `[idA, idB, Stärke 1|2, Thema, Idee-Satz]`) statt zu versuchen, sie über Schlagwörter zu erzwingen.

## Offene Punkte
- `projekte.js` ist leer – ausgearbeitete Projektideen zu den bestätigten Brücken fehlen noch.
- Weitere Brücken sollten gemeinsam mit Jakob durchgegangen werden (Toggle "Ungeprüfte Vorschläge zeigen" in der App).
- Kein Zugriffsschutz (bewusst so gewünscht, Hosting über internen Link/Logineo).
- Farbpalette: 10 Fächer auf Hue-Wheel verteilt, kontrastgeprüft (≥4.5:1 auf Weiß) – Werte in `FARBEN`/`TINTE` in index.html.
