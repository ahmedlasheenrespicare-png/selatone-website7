import { useEffect, useState } from "react";
import { IconPhone, IconChat, IconChevronDown, IconClock } from "./Icons";
import { PHONE_DISPLAY, PHONE_TEL, wa } from "../data";

type NavItem = { label: string; href: string; children?: { label: string; href: string }[] };

const NAV: NavItem[] = [
  { label: "الرئيسية", href: "#top" },
  { label: "من نحن", href: "#about" },
  {
    label: "المعينات السمعية",
    href: "#products",
    children: [
      { label: "دليل المعينات السمعية", href: "#products" },
      { label: "مساعد الاختيار", href: "#hearing-finder" },
      { label: "مقارنة الأنواع", href: "#comparison" },
      { label: "اختبر سمعك", href: "#hearing-test" },
    ],
  },
  { label: "البطاريات", href: "#batteries" },
  { label: "الصيانة", href: "#maintenance" },
  {
    label: "المعرفة",
    href: "#articles",
    children: [
      { label: "نصائح ومعلومات", href: "#articles" },
      { label: "الأسئلة الشائعة", href: "#faq" },
      { label: "العروض الحالية", href: "#offers" },
    ],
  },
  { label: "تواصل معنا", href: "#contact" },
];

export function Logo({ compact = false, light = false }: { compact?: boolean; light?: boolean }) {
  const size = compact ? 38 : 46;
  return (
    <a href="#top" className="flex items-center gap-3" aria-label="صله تون — الرئيسية">
      <svg width={size} height={size} viewBox="0 0 46 46" aria-hidden="true">
        <rect width="46" height="46" rx="7" fill="#3156A3" />
        <path d="M14 29c0-9 4-15 10-15 4 0 7 3 7 7 0 6-6 6-6 11a3.5 3.5 0 0 1-7 0" fill="none" stroke="#fff" strokeWidth="2.6" strokeLinecap="round" />
        <path d="M33 14c3 3 4.5 7 3.5 11M37 10c4.5 4.5 6 10.5 4.5 16" fill="none" stroke="#42B3E5" strokeWidth="2.4" strokeLinecap="round" />
        <circle cx="24" cy="23" r="2.2" fill="#42B3E5" />
      </svg>
      <span className="leading-none">
        <span className={`block font-black ${compact ? "text-[24px]" : "text-[28px]"} ${light ? "text-white" : "text-ink"}`}>
          صله <span className={light ? "text-sky" : "text-navy"}>تون</span>
        </span>
        <span
          dir="ltr"
          className={`mt-1 block text-start text-[10px] font-semibold uppercase tracking-[0.3em] ${
            light ? "text-sky" : "text-blue"
          }`}
        >
          Selatone Hearing
        </span>
      </span>
    </a>
  );
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header id="top" className="sticky top-0 z-50">
      {/* utility strip — collapses on scroll */}
      <div
        className={`overflow-hidden bg-navy-dark text-white/90 transition-[max-height,opacity] duration-300 ease-out ${
          scrolled ? "max-h-0 opacity-0" : "max-h-20 opacity-100"
        }`}
      >
        <div className="mx-auto flex max-w-[1370px] flex-wrap items-center justify-between gap-x-6 gap-y-1 px-4 py-2 text-[13px] lg:px-8">
          <div className="flex items-center gap-6">
            <a href={`tel:${PHONE_TEL}`} className="flex items-center gap-2 transition hover:text-sky">
              <IconPhone width={15} height={15} />
              <span dir="ltr">{PHONE_DISPLAY}</span>
            </a>
            <a
              href={wa("مرحبًا صله تون، أريد التحدث إلى متخصص")}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 transition hover:text-sky"
            >
              <IconChat width={15} height={15} /> واتساب
            </a>
          </div>
          <span className="hidden items-center gap-2 sm:flex">
            <IconClock width={15} height={15} /> شركة طبية متخصصة في حلول السمع منذ 2014
          </span>
        </div>
      </div>

      {/* main bar */}
      <div className={`border-b border-rule bg-white transition-shadow duration-300 ${scrolled ? "shadow-[0_6px_24px_rgba(31,45,61,0.12)]" : ""}`}>
        <div
          className={`mx-auto flex max-w-[1370px] items-center justify-between gap-6 px-4 transition-all duration-300 lg:px-8 ${
            scrolled ? "h-[70px]" : "h-[92px]"
          }`}
        >
          <Logo compact={scrolled} />

          <nav className="hidden items-center xl:flex" aria-label="التنقل الرئيسي">
            <ul className="flex items-center">
              {NAV.map((item) => (
                <li key={item.label} className="group relative">
                  <a
                    href={item.href}
                    className="flex items-center gap-1.5 px-3.5 py-8 text-[15px] font-bold text-ink transition-colors group-hover:text-blue"
                  >
                    {item.label}
                    {item.children && <IconChevronDown width={13} height={13} className="mt-0.5 opacity-60" />}
                  </a>
                  {item.children && (
                    <ul className="invisible absolute start-0 top-full w-[230px] translate-y-2 border-t-2 border-brand bg-white py-2 opacity-0 shadow-[0_18px_40px_rgba(31,45,61,0.16)] transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
                      {item.children.map((c) => (
                        <li key={c.label}>
                          <a
                            href={c.href}
                            className="block border-s-2 border-transparent px-5 py-2.5 text-[14px] text-body transition hover:border-brand hover:bg-mist hover:ps-6 hover:text-navy"
                          >
                            {c.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={wa("مرحبًا صله تون، أريد التحدث إلى متخصص")}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-brand hidden lg:inline-flex"
            >
              <IconChat width={17} height={17} /> تحدث إلى متخصص
            </a>
            <button
              onClick={() => setOpen((v) => !v)}
              className={`flex h-10 w-10 flex-col items-center justify-center gap-[5px] border border-rule text-ink transition hover:border-brand xl:hidden ${
                open ? "bg-mist" : ""
              }`}
              aria-label="فتح القائمة"
              aria-expanded={open}
            >
              <span className={`h-[2px] w-5 bg-current transition ${open ? "translate-y-[7px] rotate-45" : ""}`} />
              <span className={`h-[2px] w-5 bg-current transition ${open ? "opacity-0" : ""}`} />
              <span className={`h-[2px] w-5 bg-current transition ${open ? "-translate-y-[7px] -rotate-45" : ""}`} />
            </button>
          </div>
        </div>

        {/* mobile drawer */}
        <div
          className={`thin-scroll overflow-hidden border-t border-rule bg-white transition-[max-height] duration-300 xl:hidden ${
            open ? "max-h-[72vh] overflow-y-auto" : "max-h-0"
          }`}
        >
          <ul className="px-4 py-2">
            {NAV.map((item) => (
              <li key={item.label} className="border-b border-rule/70 last:border-0">
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-between py-3.5 text-[15px] font-bold text-ink hover:text-blue"
                >
                  {item.label}
                  {item.children && <IconChevronDown width={14} height={14} />}
                </a>
                {item.children && (
                  <ul className="mb-2 me-1 border-s-2 border-brand/40 ps-4">
                    {item.children.map((c) => (
                      <li key={c.label}>
                        <a href={c.href} onClick={() => setOpen(false)} className="block py-1.5 text-[14px] text-body hover:text-navy">
                          {c.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
          <div className="px-4 pb-5">
            <a
              href={wa("مرحبًا صله تون، أريد التحدث إلى متخصص")}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-brand w-full"
            >
              <IconChat width={17} height={17} /> تحدث إلى متخصص
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
