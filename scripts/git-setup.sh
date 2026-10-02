#!/usr/bin/env bash
# يعيد تهيئة مستودع git بعد فقدان ملفات التهيئة بين الجلسات
# (بيئة العمل تحذف .git/config و refs من اللقطات المحفوظة، لكن الكائنات تبقى)
# الاستخدام: bash scripts/git-setup.sh
set -e
cd "$(dirname "$0")/.."

REPO_URL="https://github.com/ahmedlasheenrespicare-png/selatone-website7.git"

git init >/dev/null 2>&1 || true
git config user.name "ahmedlasheenrespicare-png"
git config user.email "ahmedlasheenrespicare-png@users.noreply.github.com"
git remote remove origin 2>/dev/null || true
git remote add origin "$REPO_URL"

# إن لم يوجد أي commit (فُقدت المراجع) نعيد إنشاءه من الملفات الحالية
if ! git rev-parse --verify HEAD >/dev/null 2>&1; then
  git add -A
  git commit -m "الإصدار الأول: موقع صله تون لحلول السمع والمعينات السمعية (React + Vite + Tailwind)"
fi
git branch -M main
echo "✓ المستودع جاهز — للدفع: git push -u origin main"
