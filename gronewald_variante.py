#!/usr/bin/env python3
"""
Baut aus themenbruecken-einzeldatei.html die Fassung fuer die Gronewald-App (Schul-Hub).

Unterschiede zur Einzeldatei:
- window.TB_HUB ist gesetzt: Kopfleiste zeigt „← Alle Apps“, Fusszeile „Übersicht aller Schul-Apps“
  (beide Links auf ../../index.html).
- Favicon aus ../../assets/img/ der Gronewald-App.

Aufruf:  python3 build_einzeldatei.py   (zuerst, falls sich index.html oder Daten geaendert haben)
         python3 gronewald_variante.py <Gronewald-App-Ordner>/apps/themenbruecken/index.html
"""
import io, os, sys

HIER = os.path.dirname(os.path.abspath(__file__))
if len(sys.argv) != 2:
    sys.exit(__doc__)
s = io.open(os.path.join(HIER, "themenbruecken-einzeldatei.html"), encoding="utf-8").read()

KOPF = ('<link rel="icon" href="../../assets/img/favicon.ico" sizes="any">\n'
        '<link rel="icon" href="../../assets/img/favicon.png" type="image/png">\n'
        '<link rel="apple-touch-icon" href="../../assets/img/apple-touch-icon.png">\n')
HUB = '<script>window.TB_HUB = { href: "../../index.html", text: "← Alle Apps" };</script>\n'

assert s.count("</head>") == 1 and s.count("<body>") == 1, "Einzeldatei hat unerwarteten Aufbau"
s = s.replace("</head>", KOPF + "</head>").replace("<body>", "<body>\n" + HUB)
io.open(sys.argv[1], "w", encoding="utf-8").write(s)
print("geschrieben:", sys.argv[1])
