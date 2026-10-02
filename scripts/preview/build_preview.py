#!/usr/bin/env python3
"""
يبني نسخة معاينة مكتفية ذاتيًا من الموقع في /home/user/معاينة-الموقع.html
- يدمج صور Pexels كـ WebP data URIs (من assets.json)
- يدمج خط Cairo المتغير (woff2 base64)
- يرقّع src/data.ts مؤقتًا ثم يعيده كما كان

الاستخدام:  python3 scripts/preview/build_preview.py
"""
import base64
import re
import shutil
import subprocess
from pathlib import Path

HERE = Path(__file__).resolve().parent          # scripts/preview/
ROOT = HERE.parents[1]                          # جذر المشروع
SRC = ROOT / "src"
OUT = Path("/home/user/معاينة-الموقع.html")

OLD_PX = '''/** Pexels stock photo helper (cropped to the requested box). */
export const px = (id: number, w = 1200, h = 800) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=${w}&h=${h}`;'''

NEW_PX = '''/** PREVIEW BUILD ONLY — images embedded as data URIs. */
export const px = (id: number, w = 1200, h = 800) =>
  (PREVIEW_ASSETS as Record<string, string>)[`${id}_${w}x${h}`] ?? "";'''


def sh(cmd: str) -> str:
    r = subprocess.run(cmd, cwd=ROOT, shell=True, capture_output=True, text=True)
    if r.returncode != 0:
        print(r.stdout[-2000:])
        print(r.stderr[-2000:])
        raise SystemExit(f"فشل الأمر: {cmd}")
    return r.stdout


def b64(p: Path) -> str:
    return base64.b64encode(p.read_bytes()).decode()


def main() -> None:
    # 0) الاعتماديات
    if not (ROOT / "node_modules/vite").exists():
        print("تثبيت الاعتماديات...")
        sh("npm ci --no-audit --no-fund")

    # 1) ترقيع data.ts مؤقتًا
    data_ts = SRC / "data.ts"
    backup = SRC / "data.ts.orig"
    shutil.copy(data_ts, backup)
    orig = data_ts.read_text(encoding="utf-8")
    assert OLD_PX in orig, "تعريف px في data.ts غير مطابق — حدّث السكربت"
    data_ts.write_text(
        'import PREVIEW_ASSETS from "./preview-assets.json";\n' + orig.replace(OLD_PX, NEW_PX),
        encoding="utf-8",
    )
    shutil.copy(HERE / "assets.json", SRC / "preview-assets.json")

    try:
        # 2) فحص الأنواع أولًا — Vite لا يفحصها وقد يبني ملفًا مكسورًا بصمت
        print(sh("npx tsc --noEmit")[-300:] or "tsc ✓")
        # 3) البناء
        print(sh("npm run build")[-400:])
        html = (ROOT / "dist/index.html").read_text(encoding="utf-8")

        # 3) دمج الخطوط وإزالة روابط Google Fonts
        font_css = f"""<style>
/* Cairo variable 400-900 — embedded for offline preview */
@font-face {{font-family:'Cairo';font-style:normal;font-weight:400 900;font-display:swap;
src:url(data:font/woff2;base64,{b64(HERE / 'cairo-arabic.woff2')}) format('woff2');
unicode-range:U+0600-06FF,U+0750-077F,U+0870-088E,U+0890-0891,U+0897-08E1,U+08E3-08FF,U+200C-200E,U+2010-2011,U+204F,U+2E41,U+FB50-FDFF,U+FE70-FE74,U+FE76-FEFC;}}
@font-face {{font-family:'Cairo';font-style:normal;font-weight:400 900;font-display:swap;
src:url(data:font/woff2;base64,{b64(HERE / 'cairo-latin.woff2')}) format('woff2');
unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+2000-206F,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD;}}
</style>"""
        html = re.sub(r"<link[^>]*fonts\.googleapis\.com[^>]*>", "", html)
        html = re.sub(r"<link[^>]*fonts\.gstatic\.com[^>]*>", "", html)
        html = html.replace("</head>", font_css + "\n</head>")

        OUT.write_text(html, encoding="utf-8")
        leftover = [m for m in ("images.pexels.com", "fonts.googleapis", "fonts.gstatic") if m in html]
        print(f"الملف النهائي: {OUT} — {OUT.stat().st_size // 1024} KB")
        print(f"روابط خارجية متبقية: {leftover if leftover else 'لا شيء ✓'}")
        print(f"صور مدمجة: {html.count('data:image/webp')}")
    finally:
        # 4) استعادة الأصل دائمًا
        shutil.move(backup, data_ts)
        (SRC / "preview-assets.json").unlink(missing_ok=True)


if __name__ == "__main__":
    main()
