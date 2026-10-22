"""Prepare a phone photo for the site: fix rotation, center-crop to a square,
shrink, and strip all metadata (including GPS location).

Usage: python3 _tools/add_photo.py <photo.jpg> <recipe-slug>
Writes assets/photos/<slug>.jpg (1200px) and assets/photos/<slug>-thumb.jpg (600px).
Then add `photo: <slug>.jpg` to the recipe's front matter.
"""
import sys
from pathlib import Path
from PIL import Image, ImageOps

src, slug = sys.argv[1], sys.argv[2]
out = Path(__file__).resolve().parent.parent / "assets" / "photos"
out.mkdir(parents=True, exist_ok=True)

im = ImageOps.exif_transpose(Image.open(src)).convert("RGB")
side = min(im.size)
left, top = (im.width - side) // 2, (im.height - side) // 2
im = im.crop((left, top, left + side, top + side))

for name, size, quality in ((f"{slug}.jpg", 1200, 82), (f"{slug}-thumb.jpg", 600, 78)):
    # A fresh image carries no EXIF, so location and camera data are dropped.
    clean = Image.new("RGB", (size, size))
    clean.paste(im.resize((size, size), Image.LANCZOS))
    clean.save(out / name, "JPEG", quality=quality, optimize=True, progressive=True)
    print(out / name, (out / name).stat().st_size // 1024, "KB")
