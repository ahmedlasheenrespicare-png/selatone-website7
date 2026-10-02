import { Logo } from "./Header";
import { IconPhone, IconChat, IconArrow } from "./Icons";
import { PHONE_DISPLAY, PHONE_TEL, wa } from "../data";

const LINKS = [
  { label: "من نحن", href: "#about" },
  { label: "اختبر سمعك", href: "#hearing-test" },
  { label: "دليل المعينات السمعية", href: "#products" },
  { label: "مساعد الاختيار", href: "#hearing-finder" },
  { label: "مقارنة الأنواع", href: "#comparison" },
];
const LINKS2 = [
  { label: "دليل البطاريات", href: "#batteries" },
  { label: "طلب صيانة", href: "#maintenance" },
  { label: "العروض الحالية", href: "#offers" },
  { label: "نصائح ومعلومات", href: "#articles" },
  { label: "الأسئلة الشائعة", href: "#faq" },
];

export default function Footer() {
  return (
    <footer className="bg-mist">
      <div className="mx-auto grid max-w-[1370px] gap-10 px-4 py-14 md:grid-cols-2 lg:grid-cols-4 lg:px-8 lg:py-20">
        <div>
          <Logo />
          <p className="mt-5 text-[14.5px] leading-[1.95]">
            صله تون شركة طبية تأسست عام 2014 ومتخصصة في حلول السمع، نقدم خدماتنا لمختلف محافظات مصر بمعايير جودة مرتفعة.
          </p>
        </div>

        {[
          { title: "روابط سريعة", items: LINKS },
          { title: "خدماتنا", items: LINKS2 },
        ].map((col) => (
          <div key={col.title}>
            <h3 className="text-[16px] font-extrabold text-ink">{col.title}</h3>
            <span className="mb-5 mt-2 block h-[2px] w-10 bg-brand" />
            <ul className="space-y-2.5">
              {col.items.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="inline-flex items-center gap-2 text-[14.5px] transition hover:text-blue">
                    <IconArrow width={13} height={13} className="text-brand" /> {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div>
          <h3 className="text-[16px] font-extrabold text-ink">تواصل معنا</h3>
          <span className="mb-5 mt-2 block h-[2px] w-10 bg-brand" />
          <ul className="space-y-3 text-[14.5px]">
            <li className="flex items-center gap-3">
              <IconPhone width={18} height={18} className="shrink-0 text-blue" />
              <a href={`tel:${PHONE_TEL}`} dir="ltr" className="font-bold text-navy transition hover:text-blue">
                {PHONE_DISPLAY}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <IconChat width={18} height={18} className="shrink-0 text-blue" />
              <a
                href={wa("مرحبًا صله تون، أريد التحدث إلى متخصص")}
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-navy transition hover:text-blue"
              >
                راسلنا على واتساب
              </a>
            </li>
          </ul>
          <p className="mt-5 text-[13px] leading-[1.9] text-body">
            المحتوى للتوعية العامة ولا يغني عن التقييم أو الاستشارة المتخصصة.
          </p>
        </div>
      </div>

      <div className="bg-navy text-white/80">
        <div className="mx-auto flex max-w-[1370px] flex-col items-center justify-between gap-3 px-4 py-5 text-[13.5px] sm:flex-row lg:px-8">
          <p>© 2026 صله تون — حلول السمع والمعينات السمعية. جميع الحقوق محفوظة.</p>
          <a href="#top" className="transition hover:text-sky">
            العودة للأعلى ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
