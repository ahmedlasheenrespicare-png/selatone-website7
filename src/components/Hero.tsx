import { useCallback, useEffect, useState } from "react";
import {
  IconArrow,
  IconArrowBack,
  IconChat,
  IconPhone,
  IconEar,
  IconClock,
} from "./Icons";
import { IMG, PHONE_DISPLAY, PHONE_TEL, wa } from "../data";

/* =========================================================================
   1. النموذج الأصلي لموقع صله تون (Original Hero Model)
========================================================================= */
const ORIGINAL_SLIDES = [
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

const ORIGINAL_BOXES = [
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

function HeroOriginal() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const go = useCallback((next: number) => setIndex((next + ORIGINAL_SLIDES.length) % ORIGINAL_SLIDES.length), []);

  useEffect(() => {
    if (paused) return;
    const id = window.setInterval(() => setIndex((i) => (i + 1) % ORIGINAL_SLIDES.length), 6500);
    return () => window.clearInterval(id);
  }, [paused]);

  return (
    <section
      className="grid bg-navy lg:grid-cols-[350px_1fr]"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      aria-label="النموذج الأصلي — خدمات صله تون"
    >
      {/* Side Info Stack */}
      <div className="order-2 flex flex-col justify-center gap-px bg-white/15 px-6 py-8 lg:order-1 lg:px-8 lg:py-10">
        {ORIGINAL_BOXES.map((b) => (
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

      {/* Main Slider */}
      <div className="relative order-1 h-[470px] overflow-hidden bg-ink sm:h-[520px] lg:order-2 lg:h-auto lg:min-h-[580px]">
        {ORIGINAL_SLIDES.map((s, i) => (
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
          {ORIGINAL_SLIDES.map((s, i) => (
            <div
              key={s.title}
              className={`absolute inset-0 flex flex-col justify-center px-6 pb-24 pt-8 transition-all duration-700 sm:px-10 lg:px-14 ${
                i === index ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"
              }`}
              aria-hidden={i !== index}
            >
              <span className="label on-dark">{s.kicker}</span>
              <h1 className="mt-3 max-w-[620px] text-[clamp(28px,4.2vw,50px)] font-extrabold leading-[1.4] text-white">
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
                  <IconChat width={17} height={17} /> تحدث عبر واتساب
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Controls */}
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
            <span>{String(ORIGINAL_SLIDES.length).padStart(2, "0")}</span>
          </div>
        </div>

        <div className="absolute bottom-4 end-5 flex items-center gap-2.5">
          {ORIGINAL_SLIDES.map((s, i) => (
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

/* =========================================================================
   2. نموذج MediCenter الطبي الكلاسيكي (1:1 MediCenter Centered Boxes Replica)
   - Matches the total height of HeroOriginal (min-h-[580px])
   - Full-width hero background and slider
   - 3 Signature Home Boxes centered inside with margins on both sides (< Hero width)
   - Exact 3-color palette: Light Blue (#42B3E5) | Blue (#0384CE) | Dark Blue (#3156A3)
========================================================================= */
const MEDICENTER_SLIDES = [
  {
    titleLine1: "رعاية طبية متكاملة",
    titleLine2: "لصحة وسلامة سمعك",
    subtitle: "خبرة متخصصة منذ عام 2014 في فحص السمع، توفير أحدث المعينات السمعية الرقمية، والبرمجة الدقيقة في مصر.",
    img: IMG.hero1,
    ctaText: "احجز فحص سمع",
    ctaHref: wa("مرحبًا صله تون، أود حجز موعد تقييم سمع وفحص سريري"),
    cta2Text: "اختبر سمعك أونلاين",
    cta2Href: "#hearing-test",
  },
  {
    titleLine1: "أحدث تكنولوجيا",
    titleLine2: "المعينات السمعية الرقمية",
    subtitle: "نوفر أحدث أجيال السماعات المخفية وسماعات القناة والأذن مع دعم كامل للاتصال اللاسلكي والشحن السريع.",
    img: IMG.hero2,
    ctaText: "دليل ومساعد الاختيار",
    ctaHref: "#hearing-finder",
    cta2Text: "استشارة فورية",
    cta2Href: wa("مرحبًا صله تون، لدي استفسار حول أنواع وأسعار المعينات السمعية"),
  },
  {
    titleLine1: "صيانة معتمدة",
    titleLine2: "وقطع غيار وبطاريات أصلية",
    subtitle: "مركز صيانة مجهز بأحدث أجهزة قياس وضبط الصوت، مع توفير بطاريات أصلية وشحن لكافة المحافظات.",
    img: IMG.hero3,
    ctaText: "طلب صيانة وبطاريات",
    ctaHref: "#maintenance",
    cta2Text: "تواصل عبر واتساب",
    cta2Href: wa("مرحبًا صله تون، أود طلب صيانة أو شراء بطاريات أصلية"),
  },
];

function HeroModelMedicenter() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const go = useCallback((next: number) => {
    setIndex((next + MEDICENTER_SLIDES.length) % MEDICENTER_SLIDES.length);
  }, []);

  useEffect(() => {
    if (paused) return;
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % MEDICENTER_SLIDES.length);
    }, 6000);
    return () => window.clearInterval(id);
  }, [paused]);

  const current = MEDICENTER_SLIDES[index];

  return (
    <section
      className="relative w-full bg-[#1a2e51] font-sans selection:bg-[#42B3E5] selection:text-white lg:min-h-[580px] flex flex-col justify-between"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      aria-label="قسم الهيرو الطبي — نمط MediCenter الأصلي"
    >
      {/* 1. FULL-WIDTH SLIDER (Proportioned to match Original Hero total height) */}
      <div className="relative w-full h-[380px] sm:h-[400px] lg:h-[390px] overflow-hidden bg-[#13223f]">
        {/* Background Slide Images with Crossfade */}
        {MEDICENTER_SLIDES.map((s, i) => (
          <div
            key={s.img}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              i === index ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
            }`}
          >
            <img
              src={s.img}
              alt=""
              className="h-full w-full object-cover object-center"
              loading={i === 0 ? "eager" : "lazy"}
            />
            {/* MediCenter Signature Gradient Overlays */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#111e38]/95 via-[#1a2e51]/80 to-transparent lg:max-w-[65%]" />
            <div className="absolute inset-0 bg-black/25" />
          </div>
        ))}

        {/* Slide Content (Text Box aligned with website container) */}
        <div className="relative z-20 mx-auto flex h-full max-w-[1370px] flex-col justify-center px-4 sm:px-6 lg:px-8 pb-10">
          <div className="max-w-[700px]">
            {/* Tag Badge */}
            <div className="inline-block bg-[#42B3E5] px-3.5 py-1 text-[11.5px] font-black tracking-wider text-white shadow-sm uppercase">
              صله تون — حلول السمع الطبية منذ 2014
            </div>

            {/* Main Title (Medicenter 72px styled title) */}
            <h1
              className="mt-2.5 text-[26px] sm:text-[34px] lg:text-[40px] font-black leading-[1.2] text-white tracking-tight"
              style={{ textShadow: "0 2px 4px rgba(0,0,0,0.6)" }}
            >
              <span className="block">{current.titleLine1}</span>
              <span className="block text-[#42B3E5] drop-shadow">{current.titleLine2}</span>
            </h1>

            {/* Subtitle */}
            <p
              className="mt-2.5 max-w-[560px] text-[14px] sm:text-[15.5px] leading-[1.7] text-white/90 font-medium"
              style={{ textShadow: "0 1px 2px rgba(0,0,0,0.7)" }}
            >
              {current.subtitle}
            </p>

            {/* Action Buttons */}
            <div className="mt-5 flex flex-wrap items-center gap-3">
              <a
                href={current.ctaHref}
                target={current.ctaHref.startsWith("http") ? "_blank" : undefined}
                rel={current.ctaHref.startsWith("http") ? "noopener noreferrer" : undefined}
                className="inline-flex items-center gap-2 bg-[#42B3E5] px-5 py-2.5 text-[14px] font-extrabold text-white shadow-md transition-all hover:bg-white hover:text-[#3156A3]"
              >
                {current.ctaText} <IconArrow width={15} height={15} />
              </a>
              <a
                href={current.cta2Href}
                target={current.cta2Href.startsWith("http") ? "_blank" : undefined}
                rel={current.cta2Href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="inline-flex items-center gap-2 border-2 border-white/90 bg-black/25 backdrop-blur-xs px-5 py-2 text-[14px] font-extrabold text-white transition-all hover:bg-white hover:text-[#1a2e51]"
              >
                {current.cta2Text}
              </a>
            </div>
          </div>
        </div>

        {/* 1:1 MediCenter Numbered Navigation Bar (Attached to Slider Bottom) */}
        <div className="absolute bottom-0 inset-x-0 z-30">
          {/* Top Hairline Border */}
          <div className="h-[1px] w-full bg-white/25" />

          <div className="mx-auto flex max-w-[1370px] items-center justify-between px-4 sm:px-6 lg:px-8">
            {/* Number Tabs (01, 02, 03) */}
            <div className="flex items-center">
              {MEDICENTER_SLIDES.map((_, i) => (
                <button
                  key={i}
                  onClick={() => go(i)}
                  aria-label={`الشريحة ${i + 1}`}
                  className={`group relative flex h-9 w-12 items-center justify-center text-[13px] font-black transition-all ${
                    i === index
                      ? "text-white bg-white/20"
                      : "text-white/70 hover:text-white hover:bg-white/10"
                  }`}
                >
                  {/* Active highlight top bar */}
                  {i === index && (
                    <span className="absolute top-0 inset-x-0 h-[2.5px] bg-[#42B3E5]" />
                  )}
                  0{i + 1}
                </button>
              ))}
            </div>

            {/* Arrows */}
            <div className="flex items-center gap-1 py-1">
              <button
                onClick={() => go(index - 1)}
                className="flex h-7 w-7 items-center justify-center bg-black/35 text-white transition hover:bg-[#42B3E5]"
                aria-label="السابق"
              >
                <IconArrowBack width={14} height={14} />
              </button>
              <button
                onClick={() => go(index + 1)}
                className="flex h-7 w-7 items-center justify-center bg-black/35 text-white transition hover:bg-[#42B3E5]"
                aria-label="التالي"
              >
                <IconArrow width={14} height={14} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* 2. SIGNATURE 3 MEDICENTER HOME BOXES (Centered Container: Less than Hero full width, with margins on both sides) */}
      <div className="w-full relative z-30 px-3 sm:px-6 lg:px-12 py-3 lg:py-4">
        <div className="mx-auto max-w-[1180px] shadow-2xl rounded-t-sm overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-3">
            {/* BOX 1: Light Blue (#42B3E5) — Emergency Case */}
            <div className="flex flex-col justify-between bg-[#42B3E5] px-6 py-6 lg:px-7 lg:py-6 text-white transition-colors duration-300 hover:brightness-105">
              <div>
                <div className="flex items-center justify-between border-b border-white/25 pb-3">
                  <h2 className="text-[19px] lg:text-[20px] font-black text-white tracking-wide">
                    استشارة وحالات طارئة
                  </h2>
                  <span className="flex h-8 w-8 items-center justify-center rounded-sm bg-white/15 text-white">
                    <IconPhone width={16} height={16} />
                  </span>
                </div>
                <p className="mt-3 text-[13.5px] lg:text-[14px] leading-[1.7] text-white/95 font-medium">
                  إذا كنت تعاني من ضعف مفاجئ بالسمع أو عطل في سماعتك الطبية، اتصل بخط الطوارئ والاستشارات السريعة للحصول على مساعدة عاجلة.
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-white/20">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-[11.5px] text-white/80 font-bold block">هاتف الاستشارة السريعة:</span>
                    <a
                      href={`tel:${PHONE_TEL}`}
                      dir="ltr"
                      className="text-[18px] lg:text-[20px] font-black text-white hover:underline"
                    >
                      {PHONE_DISPLAY}
                    </a>
                  </div>
                  <a
                    href={wa("مرحبًا صله تون، أحتاج استشارة طبية عاجلة بخصوص السمع")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 border border-white bg-white/10 px-3 py-1 text-[12.5px] font-bold text-white transition hover:bg-white hover:text-[#42B3E5]"
                  >
                    <IconChat width={13} height={13} /> تواصل فوري
                  </a>
                </div>
              </div>
            </div>

            {/* BOX 2: Mid Blue (#0384CE) — Doctors Timetable & Services */}
            <div className="flex flex-col justify-between bg-[#0384CE] px-6 py-6 lg:px-7 lg:py-6 text-white transition-colors duration-300 hover:brightness-105">
              <div>
                <div className="flex items-center justify-between border-b border-white/25 pb-3">
                  <h2 className="text-[19px] lg:text-[20px] font-black text-white tracking-wide">
                    جدول وفحوصات السمع
                  </h2>
                  <span className="flex h-8 w-8 items-center justify-center rounded-sm bg-white/15 text-white">
                    <IconEar width={16} height={16} />
                  </span>
                </div>
                <p className="mt-3 text-[13.5px] lg:text-[14px] leading-[1.7] text-white/95 font-medium">
                  نوفر فحوصات سمعية شاملة، أخذ مقاسات قوالب الأذن، وبرمجة رقمية متطورة لكافة موديلات BTE وRIC وITE لتلائم احتياجاتك اليومية.
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-white/20">
                <div className="flex items-center justify-between">
                  <span className="text-[12.5px] text-white/90 font-bold">
                    فحص استرشادي في دقيقتين
                  </span>
                  <a
                    href="#hearing-test"
                    className="inline-flex items-center gap-1.5 border border-white bg-white px-3 py-1 text-[12.5px] font-extrabold text-[#0384CE] transition hover:bg-transparent hover:text-white"
                  >
                    ابدأ الفحص <IconArrow width={13} height={13} />
                  </a>
                </div>
              </div>
            </div>

            {/* BOX 3: Dark Blue (#3156A3) — Opening Hours */}
            <div className="flex flex-col justify-between bg-[#3156A3] px-6 py-6 lg:px-7 lg:py-6 text-white transition-colors duration-300 hover:brightness-105">
              <div>
                <div className="flex items-center justify-between border-b border-white/25 pb-3">
                  <h2 className="text-[19px] lg:text-[20px] font-black text-white tracking-wide">
                    مواعيد العمل الرسمية
                  </h2>
                  <span className="flex h-8 w-8 items-center justify-center rounded-sm bg-white/15 text-white">
                    <IconClock width={16} height={16} />
                  </span>
                </div>

                {/* Exact MediCenter Opening Hours Item List */}
                <ul className="mt-2 divide-y divide-white/15 text-[13px] lg:text-[13.5px]">
                  <li className="flex items-center justify-between py-1.5">
                    <span className="text-white/85 font-medium">السبت – الأربعاء</span>
                    <div className="font-bold text-white" dir="ltr">8:30 AM – 9:00 PM</div>
                  </li>
                  <li className="flex items-center justify-between py-1.5">
                    <span className="text-white/85 font-medium">الخميس</span>
                    <div className="font-bold text-white" dir="ltr">8:30 AM – 7:00 PM</div>
                  </li>
                  <li className="flex items-center justify-between py-1.5">
                    <span className="text-white/85 font-medium">الجمعة</span>
                    <div className="font-bold text-[#42B3E5]">استشارات وواتساب</div>
                  </li>
                </ul>
              </div>

              <div className="mt-3 pt-2.5 border-t border-white/20">
                <a
                  href={wa("مرحبًا صله تون، أود حجز موعد كشف أو فحص سمع")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex w-full items-center justify-center gap-2 bg-[#42B3E5] py-2 text-[13px] font-extrabold text-white transition hover:bg-white hover:text-[#3156A3]"
                >
                  <IconChat width={14} height={14} /> حجز موعد كشف عبر واتساب
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* =========================================================================
   MAIN HERO COMPONENT (MediCenter & Original Only)
========================================================================= */
export default function Hero() {
  const [model, setModel] = useState<"medicenter" | "original">("medicenter");

  return (
    <div>
      {/* Switcher Bar between MediCenter & Original */}
      <div className="border-b border-navy-dark bg-[#13223f] px-4 py-2.5 text-white">
        <div className="mx-auto flex max-w-[1370px] flex-wrap items-center justify-between gap-3 text-[13px] lg:px-4">
          <div className="flex items-center gap-2">
            <span className="flex h-2.5 w-2.5 rounded-full bg-brand animate-pulse" />
            <span className="font-bold text-sky">اختر تصميم الهيرو المفضل:</span>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setModel("medicenter")}
              className={`rounded-md px-3.5 py-1.5 text-[13px] font-bold transition-all ${
                model === "medicenter"
                  ? "bg-brand text-ink shadow-md ring-2 ring-white/50"
                  : "bg-white/10 text-white/80 hover:bg-white/20 hover:text-white"
              }`}
            >
              🏥 نموذج MediCenter الطبي
            </button>
            <button
              onClick={() => setModel("original")}
              className={`rounded-md px-3.5 py-1.5 text-[13px] font-bold transition-all ${
                model === "original"
                  ? "bg-brand text-ink shadow-md ring-2 ring-white/50"
                  : "bg-white/10 text-white/80 hover:bg-white/20 hover:text-white"
              }`}
            >
              ✨ النموذج الأصلي (صله تون)
            </button>
          </div>
        </div>
      </div>

      {/* Render the selected Model */}
      {model === "medicenter" ? <HeroModelMedicenter /> : <HeroOriginal />}
    </div>
  );
}
