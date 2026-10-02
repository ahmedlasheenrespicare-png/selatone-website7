import { useEffect, useRef, useState } from "react";
import { wa } from "../data";
import {
  IconArrow,
  IconBattery,
  IconCalendarCheck,
  IconClose,
  IconEar,
  IconFacebook,
  IconPhone,
  IconSliders,
  IconWhatsApp,
  IconWrench,
} from "./Icons";

export const FACEBOOK_URL = "https://www.facebook.com/share/1MzCLPPd7s/";

const SERVICES = [
  {
    Ico: IconCalendarCheck,
    title: "حجز تقييم سمع",
    desc: "تحديد موعد للتقييم والاستشارة",
    msg: "مرحبًا صله تون، أريد حجز تقييم سمع",
  },
  {
    Ico: IconEar,
    title: "الاستفسار عن سماعة",
    desc: "الأنواع والمميزات والاختيار المناسب",
    msg: "مرحبًا صله تون، أريد الاستفسار عن سماعة معين سمعي",
  },
  {
    Ico: IconWrench,
    title: "طلب صيانة",
    desc: "فحص عطل أو تنظيف أو متابعة",
    msg: "مرحبًا صله تون، أريد طلب صيانة لمعين سمعي",
  },
  {
    Ico: IconBattery,
    title: "بطاريات وملحقات",
    desc: "الاستفسار عن النوع والتوافر",
    msg: "مرحبًا صله تون، أريد الاستفسار عن البطاريات والملحقات",
  },
  {
    Ico: IconSliders,
    title: "برمجة وضبط",
    desc: "متابعة وتحسين إعدادات السماعة",
    msg: "مرحبًا صله تون، أريد متابعة برمجة وضبط سماعتي",
  },
  {
    Ico: IconPhone,
    title: "طلب معاودة الاتصال",
    desc: "اترك رقمك والوقت المناسب",
    msg: "مرحبًا صله تون، أرجو معاودة الاتصال بي. الوقت المناسب: ",
  },
];

/**
 * Floating action cluster:
 * - Facebook page link (secondary)
 * - WhatsApp quick-contact dialog trigger (primary)
 */
export default function FloatingActions() {
  const [open, setOpen] = useState(false);
  const btnRef = useRef<HTMLButtonElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  // While open: lock page scroll, focus the close button, handle Escape + focus trap.
  useEffect(() => {
    if (!open) return;
    closeRef.current?.focus();
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        return;
      }
      if (e.key !== "Tab" || !panelRef.current) return;
      const items = panelRef.current.querySelectorAll<HTMLElement>("a[href], button:not([disabled])");
      if (items.length === 0) return;
      const first = items[0];
      const last = items[items.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      document.removeEventListener("keydown", onKey);
      btnRef.current?.focus();
    };
  }, [open]);

  return (
    <>
      {/* floating cluster — stacked bottom corner */}
      <div className="fixed bottom-5 end-5 z-40 flex flex-col items-center gap-3">
        <a
          href={FACEBOOK_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="صفحة صله تون على فيسبوك"
          className="group relative flex h-12 w-12 items-center justify-center rounded-full bg-[#1877f2] text-white shadow-[0_10px_30px_rgba(24,119,242,0.40)] transition-[background-color,transform] duration-300 hover:scale-110 hover:bg-[#166fe0] active:scale-95"
        >
          <IconFacebook width={24} height={24} />
          <span
            aria-hidden="true"
            className="pointer-events-none absolute end-full top-1/2 me-3 -translate-y-1/2 whitespace-nowrap rounded-md bg-ink px-3 py-1.5 text-[13px] font-bold text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          >
            تابعنا على فيسبوك
          </span>
        </a>

        <button
          ref={btnRef}
          type="button"
          onClick={() => setOpen(true)}
          aria-haspopup="dialog"
          aria-expanded={open}
          aria-label="تواصل سريع عبر واتساب"
          className="group relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25d366] text-white shadow-[0_10px_30px_rgba(37,211,102,0.45)] transition-[background-color,transform] duration-300 hover:scale-110 hover:bg-[#1ebe5d] active:scale-95"
        >
          <span className="wa-pulse absolute inset-0 -z-10 rounded-full bg-[#25d366]" aria-hidden="true" />
          <IconWhatsApp width={30} height={30} />
          <span
            aria-hidden="true"
            className="pointer-events-none absolute end-full top-1/2 me-3 -translate-y-1/2 whitespace-nowrap rounded-md bg-ink px-3 py-1.5 text-[13px] font-bold text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          >
            راسلنا على واتساب
          </span>
        </button>
      </div>

      {/* quick-contact dialog */}
      {open && (
        <div className="fixed inset-0 z-[60]" role="dialog" aria-modal="true" aria-labelledby="waq-title" aria-describedby="waq-desc">
          <div
            className="wa-overlay absolute inset-0 bg-ink/60 backdrop-blur-[2px]"
            onMouseDown={(e) => {
              if (e.target === e.currentTarget) setOpen(false);
            }}
          />
          <div
            className="relative flex h-full items-end justify-center sm:items-center sm:p-6"
            onMouseDown={(e) => {
              if (e.target === e.currentTarget) setOpen(false);
            }}
          >
            <div
              ref={panelRef}
              className="wa-panel thin-scroll max-h-[92dvh] w-full overflow-y-auto border-t-4 border-[#25d366] bg-white shadow-[0_30px_80px_rgba(31,45,61,0.35)] sm:max-w-[440px]"
            >
              {/* header */}
              <div className="flex items-start gap-3 px-6 pb-4 pt-6">
                <span className="mt-0.5 flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#25d366]/15 text-[#1da851]">
                  <IconWhatsApp width={24} height={24} />
                </span>
                <div className="flex-1">
                  <h2 id="waq-title" className="text-[22px] font-extrabold leading-tight text-ink">
                    تواصل سريعًا
                  </h2>
                  <p className="mt-0.5 text-[14px] font-bold text-blue">كيف يمكننا مساعدتك؟</p>
                </div>
                <button
                  ref={closeRef}
                  type="button"
                  onClick={() => setOpen(false)}
                  aria-label="إغلاق النافذة"
                  className="flex h-9 w-9 shrink-0 items-center justify-center border border-rule text-body transition hover:border-blue hover:text-blue"
                >
                  <IconClose width={16} height={16} />
                </button>
              </div>

              <p id="waq-desc" className="px-6 pb-4 text-[13.5px] leading-[1.8] text-body">
                اختر الخدمة لفتح واتساب برسالة جاهزة إلى فريق صله تون.
              </p>

              {/* services */}
              <ul className="border-t border-rule">
                {SERVICES.map((s) => (
                  <li key={s.title}>
                    <a
                      href={wa(s.msg)}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setOpen(false)}
                      className="group/item flex items-center gap-4 border-b border-rule px-5 py-4 transition-colors last:border-0 hover:bg-mist"
                    >
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center bg-blue text-white transition-colors group-hover/item:bg-navy">
                        <s.Ico width={22} height={22} />
                      </span>
                      <span className="flex-1">
                        <span className="block text-[15.5px] font-bold text-ink transition-colors group-hover/item:text-blue">
                          {s.title}
                        </span>
                        <span className="block text-[13px] leading-relaxed text-body">{s.desc}</span>
                      </span>
                      <IconArrow
                        width={16}
                        height={16}
                        className="shrink-0 text-brand transition-transform duration-300 group-hover/item:-translate-x-1.5"
                      />
                    </a>
                  </li>
                ))}
              </ul>

              <p className="px-6 py-3.5 text-center text-[12px] text-body/80">
                ستُفتح محادثة واتساب مع فريق صله تون — 0100 496 0009
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
