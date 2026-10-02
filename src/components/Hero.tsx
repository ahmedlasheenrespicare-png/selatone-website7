import { useCallback, useEffect, useState } from "react";
import { IconArrow, IconArrowBack } from "./Icons";
import { IMG, PHONE_DISPLAY, PHONE_TEL, wa } from "../data";

const SLIDES = [
  {
    img: IMG.hero1,
    kicker: "ابدأ بالاطمئنان",
    title: "اختبر سمعك في دقيقتين",
    text: "أجب عن خمسة أسئلة قصيرة واحصل على نتيجة استرشادية تساعدك على معرفة الخطوة التالية.",
    cta: "ابدأ الاختبار",
    href: "#hearing-test",
  },
  {
    img: IMG.hero2,
    kicker: "اختيار أكثر وضوحًا",
    title: "اعثر على المعين الأقرب لاحتياجك",
    text: "استخدم مساعد الاختيار للتعرف على الفئة الأقرب لتفضيلاتك، ثم ناقش النتيجة مع متخصص.",
    cta: "افتح مساعد الاختيار",
    href: "#hearing-finder",
  },
  {
    img: IMG.hero3,
    kicker: "دعم ما بعد البيع",
    title: "صيانة وبرمجة بخطوات أسهل",
    text: "صف المشكلة ونوع الجهاز والعلامة التجارية، وأرسل طلب الصيانة مباشرة عبر واتساب.",
    cta: "اطلب صيانة",
    href: "#maintenance",
  },
  {
    img: IMG.hero4,
    kicker: "فرص وخدمات مميزة",
    title: "اسأل عن العروض الحالية",
    text: "تعرف على العروض المتاحة للتقييم والصيانة والبطاريات دون أسعار أو خصومات غير مؤكدة.",
    cta: "اعرف العروض",
    href: "#offers",
  },
];

const BOXES = [
  {
    title: "اختبر سمعك",
    text: "خمسة أسئلة قصيرة تعطيك نتيجة استرشادية في دقيقتين، دون أي التزام.",
    cta: "ابدأ الاختبار",
    href: "#hearing-test",
  },
  {
    title: "صيانة المعين السمعي",
    text: "صف العطل وأرسل الطلب مباشرة عبر واتساب ليساعدك الفريق بصورة أسرع.",
    cta: "اطلب الصيانة",
    href: "#maintenance",
  },
];

export default function Hero() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const go = useCallback((next: number) => setIndex((next + SLIDES.length) % SLIDES.length), []);

  useEffect(() => {
    if (paused) return;
    const id = window.setInterval(() => setIndex((i) => (i + 1) % SLIDES.length), 6500);
    return () => window.clearInterval(id);
  }, [paused]);

  return (
    <section
      className="grid bg-navy lg:grid-cols-[350px_1fr]"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      aria-label="أهم خدمات صله تون"
    >
      {/* info boxes */}
      <div className="order-2 flex flex-col justify-center gap-px bg-white/15 px-6 py-8 lg:order-1 lg:px-8 lg:py-10">
        {BOXES.map((b) => (
          <div key={b.title} className="bg-navy py-6">
            <div className="flex items-start gap-4">
              <span className="mt-4 hidden h-px w-8 shrink-0 bg-sky sm:block" />
              <div>
                <h2 className="text-[22px] font-bold leading-tight text-white">{b.title}</h2>
                <p className="pt-2 text-[14.5px] leading-[1.8] text-white/80">{b.text}</p>
                <a
                  href={b.href}
                  className="mt-3 inline-flex items-center gap-2 text-[14px] font-bold text-sky transition hover:gap-3.5 hover:text-white"
                >
                  {b.cta} <IconArrow width={16} height={16} />
                </a>
              </div>
            </div>
          </div>
        ))}
        <div className="bg-navy pt-6">
          <div className="border-t border-white/15 pt-6">
            <p className="text-[13px] font-bold text-white/60">للاستفسار والحجز</p>
            <a
              href={`tel:${PHONE_TEL}`}
              className="mt-1 block text-[28px] font-extrabold text-sky tabular-nums transition hover:text-white"
            >
              <span dir="ltr" className="inline-block">
                {PHONE_DISPLAY}
              </span>
            </a>
          </div>
        </div>
      </div>

      {/* slider */}
      <div className="relative order-1 h-[470px] overflow-hidden bg-ink sm:h-[520px] lg:order-2 lg:h-auto lg:min-h-[580px]">
        {SLIDES.map((s, i) => (
          <div key={s.img} className="absolute inset-0">
            <img
              src={s.img}
              alt=""
              className={`slide-media h-full w-full object-cover ${i === index ? "is-active" : ""}`}
              loading={i === 0 ? "eager" : "lazy"}
            />
          </div>
        ))}
        <div className="scrim-l absolute inset-0" />
        <div className="scrim-b absolute inset-0" />

        <div className="relative h-full">
          {SLIDES.map((s, i) => (
            <div
              key={s.title}
              className={`absolute inset-0 flex flex-col justify-center px-6 pb-24 pt-8 transition-all duration-700 sm:px-10 lg:px-14 ${
                i === index ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"
              }`}
              aria-hidden={i !== index}
            >
              <span className="label on-dark">{s.kicker}</span>
              <h1 className="mt-3 max-w-[620px] text-[clamp(30px,4.4vw,54px)] font-extrabold leading-[1.6] text-white">
                <span className="mark-title">{s.title}</span>
              </h1>
              <p className="mt-4 max-w-[520px] text-[16px] leading-[1.9] text-white/85">{s.text}</p>
              <div className="mt-7 flex flex-wrap gap-3">
                <a href={s.href} className="btn btn-brand" tabIndex={i === index ? 0 : -1}>
                  {s.cta}
                </a>
                <a
                  href={wa("مرحبًا صله تون، أريد الاستفسار عن حلول السمع")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-ghost"
                  tabIndex={i === index ? 0 : -1}
                >
                  تحدث عبر واتساب
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* controls */}
        <div className="absolute bottom-0 start-0 flex items-center gap-px">
          <button
            onClick={() => go(index - 1)}
            className="flex h-12 w-12 items-center justify-center bg-white/15 text-white backdrop-blur-sm transition hover:bg-blue"
            aria-label="الشريحة السابقة"
          >
            <IconArrowBack width={18} height={18} />
          </button>
          <button
            onClick={() => go(index + 1)}
            className="flex h-12 w-12 items-center justify-center bg-white/15 text-white backdrop-blur-sm transition hover:bg-blue"
            aria-label="الشريحة التالية"
          >
            <IconArrow width={18} height={18} />
          </button>
          <div className="flex h-12 items-center gap-3 bg-ink/70 px-5 text-[13px] font-bold text-white/80 tabular-nums" dir="ltr">
            <span className="text-sky">{String(index + 1).padStart(2, "0")}</span>
            <span className="h-px w-6 bg-white/40" />
            <span>{String(SLIDES.length).padStart(2, "0")}</span>
          </div>
        </div>

        <div className="absolute bottom-4 end-5 flex items-center gap-2.5">
          {SLIDES.map((s, i) => (
            <button
              key={s.img}
              onClick={() => go(i)}
              aria-label={`الانتقال إلى الشريحة ${i + 1}`}
              className={`h-2.5 w-2.5 rotate-45 transition-all ${i === index ? "scale-125 bg-sky" : "bg-white/55 hover:bg-white"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
