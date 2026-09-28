#!/usr/bin/env python3
"""
Baut aus index.html + den Datendateien EINE einzelne, in sich geschlossene HTML-Datei.

Warum: Dateiablagen (Logineo-Cloud, LMS, Datensafe) liefern Dateien einzeln aus und
behalten die Ordnerstruktur nicht bei. Ein <script src="daten.js"> findet dort nichts.
Eine Einzeldatei laeuft dagegen ueberall - auch per Doppelklick aus dem Download-Ordner,
ohne Server und ohne Internet.

Aufruf:  python3 build_einzeldatei.py
Ergebnis: themenbruecken-einzeldatei.html
"""
import base64, io, os, re, sys, urllib.request

HIER = os.path.dirname(os.path.abspath(__file__))
UA = {"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 "
                    "(KHTML, like Gecko) Chrome/120.0 Safari/537.36"}

def hole(url, binaer=False):
    with urllib.request.urlopen(urllib.request.Request(url, headers=UA), timeout=60) as r:
        d = r.read()
    return d if binaer else d.decode("utf-8")

def lies(name):
    return io.open(os.path.join(HIER, name), encoding="utf-8").read()

s = lies("index.html")

# --- 1. Schriften: CSS holen, jede woff2-Datei als data:-URI einbetten -------------
m = re.search(r'<link href="(https://fonts\.googleapis\.com/css2[^"]+)" rel="stylesheet">', s)
if m:
    css = hole(m.group(1).replace("&amp;", "&"))
    # Nur lateinische Schriftschnitte behalten - Baloo 2 liefert sonst auch
    # Devanagari und Vietnamesisch mit, die die Datei unnoetig aufblaehen.
    bloecke = re.findall(r'(/\* ([a-z-]+) \*/\s*@font-face \{[^}]*\})', css)
    if bloecke:
        behalten = [b for b, name in bloecke if name in ("latin", "latin-ext")]
        print(f"  Schriftschnitte: {len(behalten)} von {len(bloecke)} behalten (nur latein)")
        css = "\n".join(behalten)
    urls = sorted(set(re.findall(r'url\((https://fonts\.gstatic\.com/[^)]+\.woff2)\)', css)))
    print(f"  Schriften: {len(urls)} Dateien werden eingebettet …")
    for u in urls:
        b64 = base64.b64encode(hole(u, binaer=True)).decode("ascii")
        css = css.replace(u, f"data:font/woff2;base64,{b64}")
    s = s.replace(m.group(0), "<style>\n/* Schriften eingebettet */\n" + css + "\n</style>")
    s = re.sub(r'<link rel="preconnect"[^>]*>\n?', "", s)

# --- 2. Bibliotheken (Preact, htm) direkt einsetzen --------------------------------
for u in re.findall(r'<script src="(https://cdnjs\.cloudflare\.com/[^"]+)"></script>', s):
    print(f"  Bibliothek: {u.rsplit('/', 1)[-1]}")
    s = s.replace(f'<script src="{u}"></script>',
                  "<script>\n/* " + u + " */\n" + hole(u) + "\n</script>")

# --- 3. Logo als data:-URI ---------------------------------------------------------
logo = base64.b64encode(open(os.path.join(HIER, "assets/logo.jpg"), "rb").read()).decode("ascii")
s = s.replace('src="./assets/logo.jpg"', f'src="data:image/jpeg;base64,{logo}"')

# --- 4. Datendateien direkt einsetzen ----------------------------------------------
for f in ("daten.js", "bruecken.js", "projekte.js"):
    print(f"  Daten: {f}")
    s = s.replace(f'<script src="./{f}"></script>', f"<script>\n/* {f} */\n{lies(f)}\n</script>")

# --- 5. Kontrolle: nichts Externes darf uebrig bleiben ------------------------------
rest = [u for u in re.findall(r'(?:src|href)="(https?://[^"]+)"', s)]
if rest:
    print("ABBRUCH - noch externe Verweise enthalten:", *rest, sep="\n  ")
    sys.exit(1)

ziel = os.path.join(HIER, "themenbruecken-einzeldatei.html")
io.open(ziel, "w", encoding="utf-8").write(s)
print(f"\nFertig: {os.path.basename(ziel)}  ({os.path.getsize(ziel)/1024:.0f} KB)")
