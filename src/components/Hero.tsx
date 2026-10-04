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
   2. نموذج MediCenter: شريط الأرقام الشفاف تماماً فوق الكروت الثلاثة العائمة
   - Section A: Spacious High-Aspect Hero Slider (min-h-[580px] to min-h-[740px])
   - Section B: Completely Transparent Interactive Numbers Bar + 3 Cards Directly Below
   - Maximum Elevated Floating Overlap (-mt-36 sm:-mt-52 lg:-mt-68)
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
    <div className="w-full font-sans selection:bg-[#42B3E5] selection:text-white bg-white">
      {/* =========================================================================
         SECTION A: HERO SLIDER STAGE (Extra spacious upper area for content)
      ========================================================================= */}
      <section
        className="relative w-full overflow-hidden bg-[#0c1628] min-h-[580px] sm:min-h-[660px] lg:min-h-[740px] flex items-start pt-10 sm:pt-14 lg:pt-16"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        aria-label="سلايدر صله تون الطبي"
      >
        {/* Full-bleed background images */}
        {MEDICENTER_SLIDES.map((s, i) => (
          <div
            key={s.img}
            className={`absolute inset-0 h-full w-full transition-opacity duration-1000 ease-in-out ${
              i === index ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
          >
            <img
              src={s.img}
              alt=""
              className="h-full w-full object-cover object-center"
              loading={i === 0 ? "eager" : "lazy"}
            />
            {/* Scrim overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#0c1628]/95 via-[#0c1628]/70 to-[#0c1628]/35" />
            <div className="absolute inset-0 bg-[#0c1628]/25" />
          </div>
        ))}

        {/* Foreground Slider Content (Padded high so floating block never collides) */}
        <div className="relative z-10 mx-auto flex w-full max-w-[1370px] flex-col justify-start px-6 sm:px-10 lg:px-14 pb-48 sm:pb-60 lg:pb-72">
          <div className="max-w-[720px]">
            {/* Tag Badge */}
            <span className="inline-block bg-[#42B3E5] px-3.5 py-1 text-[11px] sm:text-[12px] font-black tracking-wider text-white shadow-md uppercase">
              صله تون — حلول السمع الطبية منذ 2014
            </span>

            {/* Main Title */}
            <h1 className="mt-3.5 text-[clamp(28px,4.5vw,56px)] font-black leading-[1.25] text-white tracking-tight drop-shadow-md">
              <span className="block">{current.titleLine1}</span>
              <span className="block text-[#42B3E5] drop-shadow-md">
                {current.titleLine2}
              </span>
            </h1>

            {/* Subtitle */}
            <p className="mt-3.5 max-w-[560px] text-[15px] sm:text-[17px] leading-[1.8] text-white/95 font-medium drop-shadow-md">
              {current.subtitle}
            </p>

            {/* Action Buttons */}
            <div className="mt-6 sm:mt-7 flex flex-wrap items-center gap-3.5">
              <a
                href={current.ctaHref}
                target={current.ctaHref.startsWith("http") ? "_blank" : undefined}
                rel={current.ctaHref.startsWith("http") ? "noopener noreferrer" : undefined}
                className="inline-flex items-center gap-2 bg-[#42B3E5] px-6 py-3 text-[14px] sm:text-[15px] font-extrabold text-white shadow-xl transition-all hover:bg-white hover:text-[#3156A3]"
              >
                {current.ctaText} <IconArrow width={16} height={16} />
              </a>
              <a
                href={current.cta2Href}
                target={current.cta2Href.startsWith("http") ? "_blank" : undefined}
                rel={current.cta2Href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="inline-flex items-center gap-2 border-2 border-white bg-black/35 backdrop-blur-xs px-5 sm:px-6 py-2.5 sm:py-3 text-[13.5px] sm:text-[14.5px] font-bold text-white shadow-lg transition-all hover:bg-white hover:text-[#1a2e51]"
              >
                {current.cta2Text}
              </a>
            </div>
          </div>
        </div>

        {/* Prev / Next Slider Arrows */}
        <div className="absolute top-8 end-4 sm:end-8 z-10 flex items-center gap-1.5">
          <button
            onClick={() => go(index - 1)}
            className="flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center bg-black/40 text-white backdrop-blur-sm border border-white/20 transition hover:bg-[#42B3E5]"
            aria-label="الشريحة السابقة"
          >
            <IconArrowBack width={16} height={16} />
          </button>
          <button
            onClick={() => go(index + 1)}
            className="flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center bg-black/40 text-white backdrop-blur-sm border border-white/20 transition hover:bg-[#42B3E5]"
            aria-label="الشريحة التالية"
          >
            <IconArrow width={16} height={16} />
          </button>
        </div>
      </section>

      {/* =========================================================================
         SECTION B: UNIFIED FLOATING UNIT (Completely Transparent Numbers Bar + 3 Cards)
         Elevated to the maximum possible extent (-mt-36 sm:-mt-52 lg:-mt-68)
      ========================================================================= */}
      <section className="relative z-30 -mt-36 sm:-mt-52 lg:-mt-68 px-3 sm:px-6 lg:px-12 pb-10 sm:pb-14 bg-transparent">
        <div className="mx-auto max-w-[1240px]">
          {/* Top Interactive Numbers Tabs (COMPLETELY TRANSPARENT) */}
          <div className="grid grid-cols-3 w-full bg-transparent border-b border-white/25">
            {MEDICENTER_SLIDES.map((s, i) => (
              <button
                key={i}
                onClick={() => go(i)}
                aria-label={`الانتقال إلى الشريحة ${i + 1}`}
                className={`group relative flex items-center justify-center sm:justify-start gap-2.5 px-2 sm:px-6 py-3 sm:py-4 text-right transition-all border-e border-white/20 last:border-e-0 ${
                  i === index
                    ? "bg-white/15 text-white backdrop-blur-xs font-black shadow-inner"
                    : "bg-transparent text-white/80 hover:text-white hover:bg-white/10"
                }`}
              >
                {/* Active indicator bar */}
                {i === index && (
                  <span className="absolute top-0 inset-x-0 h-[3.5px] bg-[#42B3E5] shadow-[0_0_12px_#42B3E5]" />
                )}
                <span className={`font-mono text-[13px] sm:text-[16px] font-black tracking-tighter drop-shadow-md ${
                  i === index ? "text-[#42B3E5]" : "text-white/90 group-hover:text-[#42B3E5]"
                }`}>
                  0{i + 1}
                </span>
                <span className="hidden sm:inline-block text-[12px] sm:text-[14px] font-extrabold truncate tracking-tight text-white drop-shadow-md">
                  {s.titleLine1}
                </span>
              </button>
            ))}
          </div>

          {/* The 3 Connected Home Boxes (Directly below the Transparent Numbers Bar) */}
          <div className="grid grid-cols-1 md:grid-cols-3 shadow-[0_30px_90px_rgba(0,0,0,0.38),0_10px_30px_rgba(0,0,0,0.22)] rounded-b-md md:rounded-b-md overflow-hidden ring-1 ring-black/10">
            {/* BOX 1: Light Blue (#42B3E5) — Emergency Case */}
            <div className="flex flex-col justify-between bg-[#42B3E5] px-6 sm:px-7 lg:px-8 py-7 sm:py-8 text-white transition-colors duration-300 hover:brightness-105">
              <div>
                <div className="flex items-center justify-between border-b border-white/25 pb-3.5">
                  <h2 className="text-[20px] sm:text-[21px] font-black text-white tracking-wide">
                    استشارة وحالات طارئة
                  </h2>
                  <span className="flex h-9 w-9 items-center justify-center rounded-sm bg-white/15 text-white">
                    <IconPhone width={18} height={18} />
                  </span>
                </div>
                <p className="mt-3.5 text-[14px] sm:text-[14.5px] leading-[1.75] text-white/95 font-medium">
                  إذا كنت تعاني من ضعف مفاجئ بالسمع أو عطل في سماعتك الطبية، اتصل بخط الطوارئ والاستشارات السريعة للحصول على مساعدة عاجلة.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/20">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-[12px] text-white/85 font-bold block">هاتف الاستشارة السريعة:</span>
                    <a
                      href={`tel:${PHONE_TEL}`}
                      dir="ltr"
                      className="text-[18px] sm:text-[20px] font-black text-white hover:underline"
                    >
                      {PHONE_DISPLAY}
                    </a>
                  </div>
                  <a
                    href={wa("مرحبًا صله تون، أحتاج استشارة طبية عاجلة بخصوص السمع")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 border border-white bg-white/15 px-3.5 py-1.5 text-[13px] font-bold text-white transition hover:bg-white hover:text-[#42B3E5]"
                  >
                    <IconChat width={14} height={14} /> تواصل فوري
                  </a>
                </div>
              </div>
            </div>

            {/* BOX 2: Mid Blue (#0384CE) — Doctors Timetable & Services */}
            <div className="flex flex-col justify-between bg-[#0384CE] px-6 sm:px-7 lg:px-8 py-7 sm:py-8 text-white transition-colors duration-300 hover:brightness-105">
              <div>
                <div className="flex items-center justify-between border-b border-white/25 pb-3.5">
                  <h2 className="text-[20px] sm:text-[21px] font-black text-white tracking-wide">
                    جدول وفحوصات السمع
                  </h2>
                  <span className="flex h-9 w-9 items-center justify-center rounded-sm bg-white/15 text-white">
                    <IconEar width={18} height={18} />
                  </span>
                </div>
                <p className="mt-3.5 text-[14px] sm:text-[14.5px] leading-[1.75] text-white/95 font-medium">
                  نوفر فحوصات سمعية شاملة، أخذ مقاسات قوالب الأذن، وبرمجة رقمية متطورة لكافة موديلات BTE وRIC وITE لتلائم احتياجاتك اليومية.
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-white/20">
                <div className="flex items-center justify-between">
                  <span className="text-[13px] text-white/95 font-bold">
                    فحص استرشادي في دقيقتين
                  </span>
                  <a
                    href="#hearing-test"
                    className="inline-flex items-center gap-1.5 border border-white bg-white px-3.5 py-1.5 text-[13px] font-extrabold text-[#0384CE] transition hover:bg-transparent hover:text-white"
                  >
                    ابدأ الفحص <IconArrow width={14} height={14} />
                  </a>
                </div>
              </div>
            </div>

            {/* BOX 3: Dark Blue (#3156A3) — Opening Hours */}
            <div className="flex flex-col justify-between bg-[#3156A3] px-6 sm:px-7 lg:px-8 py-7 sm:py-8 text-white transition-colors duration-300 hover:brightness-105">
              <div>
                <div className="flex items-center justify-between border-b border-white/25 pb-3.5">
                  <h2 className="text-[20px] sm:text-[21px] font-black text-white tracking-wide">
                    مواعيد العمل الرسمية
                  </h2>
                  <span className="flex h-9 w-9 items-center justify-center rounded-sm bg-white/15 text-white">
                    <IconClock width={18} height={18} />
                  </span>
                </div>

                {/* Opening Hours Table */}
                <ul className="mt-2.5 divide-y divide-white/15 text-[13.5px]">
                  <li className="flex items-center justify-between py-2">
                    <span className="text-white/85 font-medium">السبت – الأربعاء</span>
                    <div className="font-bold text-white" dir="ltr">8:30 AM – 9:00 PM</div>
                  </li>
                  <li className="flex items-center justify-between py-2">
                    <span className="text-white/85 font-medium">الخميس</span>
                    <div className="font-bold text-white" dir="ltr">8:30 AM – 7:00 PM</div>
                  </li>
                  <li className="flex items-center justify-between py-2">
                    <span className="text-white/85 font-medium">الجمعة</span>
                    <div className="font-bold text-[#42B3E5]">استشارات وواتساب</div>
                  </li>
                </ul>
              </div>

              <div className="mt-4 pt-3.5 border-t border-white/20">
                <a
                  href={wa("مرحبًا صله تون، أود حجز موعد كشف أو فحص سمع")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex w-full items-center justify-center gap-2 bg-[#42B3E5] py-2.5 text-[13.5px] font-extrabold text-white transition hover:bg-white hover:text-[#3156A3]"
                >
                  <IconChat width={15} height={15} /> حجز موعد كشف عبر واتساب
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
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
