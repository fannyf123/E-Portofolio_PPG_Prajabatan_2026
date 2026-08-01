"""Konversi gambar berat ke WebP berukuran wajar (2x ukuran tampilan)."""
from PIL import Image
import os

BASE = 'assets/img'
targets = [
    # (sumber, target, lebar target, kualitas)
    ('ust-logo.png',         'ust-logo.webp',         120, 85),
    ('smk2klaten-logo.png',  'smk2klaten-logo.webp',  120, 85),
    ('uny-logo.png',         'uny-logo.webp',         120, 85),
    ('ppg-logo-clean.png',   'ppg-logo-clean.webp',   180, 85),
    ('profile.jpeg',         'profile.webp',          600, 82),
    ('profile-wisuda.webp',  'profile-wisuda.webp',   900, 82),
    ('hero-bg-ai-light.webp','hero-bg-ai-light.webp', 1280, 80),
    ('hero-bg-ai-dark.webp', 'hero-bg-ai-dark.webp',  1280, 80),
]

for src, dst, max_w, quality in targets:
    src_path = os.path.join(BASE, src)
    dst_path = os.path.join(BASE, dst)
    if not os.path.exists(src_path):
        print(f'SKIP  {src} (tidak ada)')
        continue

    im = Image.open(src_path)
    w, h = im.size
    if w > max_w:
        im = im.resize((max_w, int(h * max_w / w)), Image.LANCZOS)

    # Konversi mode: RGBA/P -> RGBA; RGB -> RGB
    if im.mode in ('RGBA', 'LA', 'P'):
        im = im.convert('RGBA')
    else:
        im = im.convert('RGB')

    before = os.path.getsize(src_path)
    im.save(dst_path, 'WEBP', quality=quality, method=6)
    after = os.path.getsize(dst_path)
    print(f'OK    {src:28s} {w:4d}x{h:<4d} {before//1024:4d}KB -> {dst:28s} {im.size[0]:4d}x{im.size[1]:<4d} {after//1024:3d}KB  (hemat {100 - after*100//before}%)')

# Hapus file sumber lama yang sudah punya pengganti webp
for src in ['ust-logo.png', 'smk2klaten-logo.png', 'uny-logo.png', 'ppg-logo-clean.png', 'profile.jpeg']:
    p = os.path.join(BASE, src)
    if os.path.exists(p):
        os.remove(p)
        print(f'RM    {src}')
