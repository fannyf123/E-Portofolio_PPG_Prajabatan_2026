"""Unduh 74 thumbnail Drive (w320) -> webp lokal + buat map file id -> path.

Strategi: thumbnail disimpan di assets/img/seminar/thumbs/ dan dipetakan
via js/seminar-thumbs.js. File seminar-ppg-data.js TIDAK disentuh, jadi
seluruh test yang mengikat struktur deck tetap berlaku.
"""
import os, re, urllib.request
from PIL import Image
import io

BASE = 'assets/img/seminar/thumbs'
os.makedirs(BASE, exist_ok=True)

path = 'js/seminar-ppg-data.js'
src = open(path, encoding='utf-8').read()

pattern = re.compile(r'"src": "https://drive\.google\.com/thumbnail\?id=([\w-]+)(?:&sz=w1920)(?:&v=([\w-]+))?"')
matches = list(pattern.finditer(src))
print(f'Ditemukan {len(matches)} slide dengan src Drive')

# Posisi deck tiap slide untuk penamaan file
deck_starts = [(m.start(), m.group(1)) for m in re.finditer(r'"id": "(meeting-\d+)"', src)]
def deck_for(pos):
    cur = None
    for start, did in deck_starts:
        if start <= pos:
            cur = did
        else:
            break
    return cur

downloaded = {}   # file_id -> bytes (sekali unduh, banyak slide? tidak, 1:1 di sini)
thumb_map = {}
for i, m in enumerate(matches, 1):
    pos = m.start()
    fid = m.group(1)
    did = deck_for(pos)
    num_m = re.search(r'"number": (\d+)', src[max(0, pos - 200):pos])
    num = num_m.group(1) if num_m else str(i)
    fname = f'{did}-{num}.webp'
    fpath = os.path.join(BASE, fname)

    if fid not in downloaded:
        url = f'https://drive.google.com/thumbnail?id={fid}&sz=w320'
        try:
            req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
            raw = urllib.request.urlopen(req, timeout=30).read()
            downloaded[fid] = raw
        except Exception as e:
            print(f'  GAGAL {fid[:10]}... {e}')
            downloaded[fid] = None

    raw = downloaded[fid]
    if raw is None:
        continue
    # Konversi ke webp 320px
    im = Image.open(io.BytesIO(raw)).convert('RGB')
    im.save(fpath, 'WEBP', quality=72, method=6)
    thumb_map[fid] = f'assets/img/seminar/thumbs/{fname}'
    print(f'  {i:2d}/74 {did} slide {num}: {os.path.getsize(fpath)//1024}KB')

print(f'Berhasil: {len(thumb_map)}/{len(matches)}')

# Tulis map file terpisah
with open('js/seminar-thumbs.js', 'w', encoding='utf-8') as f:
    f.write('/* Dipetakan otomatis oleh scripts/download-seminar-thumbs.py — jangan edit manual */\n')
    f.write('export const seminarThumbMap = {\n')
    for fid, thumb in sorted(thumb_map.items()):
        f.write(f'  "{fid}": "{thumb}",\n')
    f.write('};\n')
print('js/seminar-thumbs.js ditulis.')
