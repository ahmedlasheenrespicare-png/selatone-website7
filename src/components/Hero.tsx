import { useCallback, useEffect, useState } from "react";
import {
  IconArrow,
  IconArrowBack,
  IconCheck,
  IconChat,
  IconPhone,
  IconShield,
  IconEar,
  IconWrench,
  IconBattery,
  IconCalendarCheck,
  IconClock,
  IconStar,
} from "./Icons";
import { IMG, PHONE_DISPLAY, PHONE_TEL, wa, openWa, inputCls } from "../data";

/* =========================================================================
   MODEL MEDICENTER: Exact MediCenter Medical Theme Hero Architecture
   (نموذج ميدي سنتر: تصميم ثيم MediCenter الطبي الكلاسيكي الشهير)
========================================================================= */
const MEDICENTER_SLIDES = [
  {
    img: IMG.hero1,
    titleTop: "رعاية طبية متكاملة لسمعك",
    titleSub: "فحص وبرمجة معينات سمعية بأحدث المعايير العالمية",
    desc: "نضع خبرتنا الطبية منذ عام 2014 في خدمتك لتقديم أدق حلول السمع الرقمية في مصر.",
    cta: "احجز تقييم سمع",
    href: wa("مرحبًا صله تون، أود حجز موعد تقييم سمع واستشارة طبية"),
    cta2: "اختبر سمعك أونلاين",
    href2: "#hearing-test",
  },
  {
    img: IMG.hero2,
    titleTop: "اختبر سمعك في دقيقتين",
    titleSub: "تقييم استرشادي فوري يوضح لك الخطوة المناسبة",
    desc: "أجب عن 5 أسئلة قصيرة دون أي التزام لتحصل على نتيجة استرشادية واضحة تساعدك على اتخاذ القرار.",
    cta: "ابدأ اختبار السمع",
    href: "#hearing-test",
    cta2: "تحدث إلى متخصص",
    href2: wa("مرحبًا صله تون، لدي استفسار بخصوص فحص السمع"),
  },
  {
    img: IMG.hero3,
    titleTop: "صيانة معتمدة وبطاريات أصلية",
    titleSub: "دعم فني متخصص ومتابعة ما بعد البيع",
    desc: "فحص وصيانة أحدث الموديلات، ضبط وبرمجة متقدمة، وتوفير بطاريات أصلية لكافة المحافظات.",
    cta: "طلب صيانة أو بطاريات",
    href: "#maintenance",
    cta2: "استفسر عبر واتساب",
    href2: wa("مرحبًا صله تون، أود الاستفسار عن صيانة سماعة أو بطاريات"),
  },
];

function HeroModelMedicenter() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const go = useCallback((next: number) => setIndex((next + MEDICENTER_SLIDES.length) % MEDICENTER_SLIDES.length), []);

  useEffect(() => {
    if (paused) return;
    const id = window.setInterval(() => setIndex((i) => (i + 1) % MEDICENTER_SLIDES.length), 6500);
    return () => window.clearInterval(id);
  }, [paused]);

  const current = MEDICENTER_SLIDES[index];

  return (
    <section
      className="relative bg-[#1a2e51] font-sans"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      aria-label="قسم الهيرو الطبي على نمط MediCenter"
    >
      {/* 1. MAIN FULL-WIDTH SLIDER */}
      <div className="relative h-[460px] overflow-hidden bg-ink sm:h-[500px] lg:h-[540px]">
        {MEDICENTER_SLIDES.map((s, i) => (
          <div
            key={s.img}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
              i === index ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={s.img}
              alt=""
              className="h-full w-full object-cover"
              loading={i === 0 ? "eager" : "lazy"}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-navy-dark/95 via-navy/80 to-transparent lg:max-w-[65%]" />
            <div className="absolute inset-0 bg-black/25" />
          </div>
        ))}

        {/* Slide Content Overlay */}
        <div className="relative mx-auto flex h-full max-w-[1370px] flex-col justify-center px-4 sm:px-6 lg:px-8">
          <div className="max-w-[700px] text-white">
            <div className="inline-block bg-brand px-3.5 py-1 text-[13px] font-black uppercase tracking-wider text-ink">
              صله تون — حلول السمع منذ 2014
            </div>

            <h1 className="mt-4 text-[clamp(28px,4.2vw,48px)] font-black leading-[1.25] text-white drop-shadow-md">
              {current.titleTop}
            </h1>

            <div className="mt-3 inline-block bg-navy-dark/90 px-4 py-2 text-[clamp(15px,2vw,20px)] font-bold text-sky border-s-4 border-brand">
              {current.titleSub}
            </div>

            <p className="mt-4 max-w-[540px] text-[15.5px] leading-[1.85] text-white/90">
              {current.desc}
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-3">
              <a
                href={current.href}
                target={current.href.startsWith("http") ? "_blank" : undefined}
                rel={current.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="inline-flex items-center gap-2 bg-brand px-6 py-3.5 text-[15px] font-extrabold text-ink transition hover:bg-white hover:text-navy"
              >
                {current.cta} <IconArrow width={16} height={16} />
              </a>
              <a
                href={current.href2}
                target={current.href2.startsWith("http") ? "_blank" : undefined}
                rel={current.href2.startsWith("http") ? "noopener noreferrer" : undefined}
                className="inline-flex items-center gap-2 border-2 border-white bg-transparent px-6 py-3 text-[15px] font-extrabold text-white transition hover:bg-white hover:text-navy"
              >
                {current.cta2}
              </a>
            </div>
          </div>
        </div>

        {/* MediCenter Numbered Pagination */}
        <div className="absolute bottom-6 end-6 z-20 flex items-center gap-1.5 sm:end-12">
          {MEDICENTER_SLIDES.map((_, i) => (
            <button
              key={i}
              onClick={() => go(i)}
              aria-label={`انتقال للشريحة ${i + 1}`}
              className={`flex h-9 w-9 items-center justify-center text-[14px] font-black transition-all ${
                i === index
                  ? "bg-brand text-ink shadow-lg"
                  : "bg-navy-dark/80 text-white/80 hover:bg-navy hover:text-white"
              }`}
            >
              {i + 1}
            </button>
          ))}
          <div className="ms-2 flex items-center gap-1">
            <button
              onClick={() => go(index - 1)}
              className="flex h-9 w-9 items-center justify-center bg-navy-dark/80 text-white transition hover:bg-brand hover:text-ink"
              aria-label="السابق"
            >
              <IconArrowBack width={16} height={16} />
            </button>
            <button
              onClick={() => go(index + 1)}
              className="flex h-9 w-9 items-center justify-center bg-navy-dark/80 text-white transition hover:bg-brand hover:text-ink"
              aria-label="التالي"
            >
              <IconArrow width={16} height={16} />
            </button>
          </div>
        </div>
      </div>

      {/* 2. MEDICENTER SIGNATURE 3 ACTION BOXES */}
      <div className="grid grid-cols-1 md:grid-cols-3">
        {/* BOX 1: Emergency & Quick Contact */}
        <div className="group relative flex flex-col justify-between bg-[#27437f] p-8 text-white transition-colors hover:bg-[#203768] lg:p-10">
          <div>
            <div className="flex items-center justify-between border-b border-white/20 pb-4">
              <h2 className="text-[22px] font-black text-white">استشارة طبية سريعة</h2>
              <span className="flex h-10 w-10 items-center justify-center bg-white/10 text-sky">
                <IconPhone width={20} height={20} />
              </span>
            </div>
            <p className="mt-4 text-[14.5px] leading-[1.9] text-white/85">
              إذا كنت تلاحظ ضعفاً مفاجئاً في السمع أو تحتاج استشارة عاجلة، تواصل مباشرة مع فريقنا الطبي المعتمد للحصول على
              التوجيه السليم.
            </p>
          </div>

          <div className="mt-6 pt-4 border-t border-white/15">
            <p className="text-[12.5px] text-white/70">خط الاتصال السريع المباشر:</p>
            <a
              href={`tel:${PHONE_TEL}`}
              dir="ltr"
              className="mt-1 block text-[24px] font-black text-sky transition group-hover:text-white"
            >
              {PHONE_DISPLAY}
            </a>
            <a
              href={wa("مرحبًا صله تون، أريد استشارة طبية سريعة بخصوص السمع")}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 text-[14px] font-bold text-white underline underline-offset-4 transition hover:text-sky"
            >
              مراسلة عبر واتساب <IconArrow width={14} height={14} />
            </a>
          </div>
        </div>

        {/* BOX 2: Timetable & Guide */}
        <div className="group relative flex flex-col justify-between bg-[#0479be] p-8 text-white transition-colors hover:bg-[#0369a5] lg:p-10">
          <div>
            <div className="flex items-center justify-between border-b border-white/20 pb-4">
              <h2 className="text-[22px] font-black text-white">دليل المعينات والأنواع</h2>
              <span className="flex h-10 w-10 items-center justify-center bg-white/10 text-white">
                <IconEar width={20} height={20} />
              </span>
            </div>
            <p className="mt-4 text-[14.5px] leading-[1.9] text-white/90">
              تعرف على مختلف الفئات المتطورة (خلف الأذن BTE، داخل القناة RIC، وسماعات داخل الأذن ITE المخفية)، واستخدم
              مساعد الاختيار الذكي.
            </p>
          </div>

          <div className="mt-6 pt-4 border-t border-white/15">
            <ul className="space-y-1.5 text-[13.5px] text-white/90">
              <li className="flex items-center gap-2">
                <IconCheck width={14} height={14} className="text-sky" /> فئات تناسب جميع درجات فقدان السمع
              </li>
              <li className="flex items-center gap-2">
                <IconCheck width={14} height={14} className="text-sky" /> دعم الاتصال بالموبايل والشحن
              </li>
            </ul>
            <a
              href="#hearing-finder"
              className="mt-4 inline-flex items-center gap-2 bg-white px-5 py-2.5 text-[14px] font-bold text-navy transition hover:bg-sky hover:text-navy-dark"
            >
              افتح مساعد الاختيار <IconArrow width={14} height={14} />
            </a>
          </div>
        </div>

        {/* BOX 3: Opening Hours & Schedule */}
        <div className="group relative flex flex-col justify-between bg-[#3156a3] p-8 text-white transition-colors hover:bg-[#29488a] lg:p-10">
          <div>
            <div className="flex items-center justify-between border-b border-white/20 pb-4">
              <h2 className="text-[22px] font-black text-white">مواعيد العمل والحجز</h2>
              <span className="flex h-10 w-10 items-center justify-center bg-white/10 text-sky">
                <IconClock width={20} height={20} />
              </span>
            </div>

            <dl className="mt-4 divide-y divide-white/15 text-[14px]">
              <div className="flex items-center justify-between py-2">
                <dt className="text-white/80">السبت – الخميس</dt>
                <dd dir="ltr" className="font-bold text-sky">9:00 AM – 9:00 PM</dd>
              </div>
              <div className="flex items-center justify-between py-2">
                <dt className="text-white/80">يوم الجمعة</dt>
                <dd className="font-bold text-sky">طوارئ وواتساب فقط</dd>
              </div>
              <div className="flex items-center justify-between py-2">
                <dt className="text-white/80">خدمة المحافظات</dt>
                <dd className="font-bold text-white">شحن وصيانة سريعة</dd>
              </div>
            </dl>
          </div>

          <div className="mt-6 pt-4 border-t border-white/15">
            <a
              href={wa("مرحبًا صله تون، أود حجز موعد تقييم سمع")}
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full items-center justify-center gap-2 bg-brand py-3 text-[14.5px] font-extrabold text-ink transition hover:bg-white hover:text-navy"
            >
              <IconChat width={17} height={17} /> احجز موعدك عبر واتساب
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* =========================================================================
   MODEL 5: Hybrid Masterpiece - Full-Width Dynamic Slider + Smart Pathways
   (النموذج 5: الهجين المطور — سلايدر بصري تفاعلي + بطاقات المسارات الذكية الثلاثية)
========================================================================= */
const HYBRID_SLIDES = [
  {
    img: IMG.hero1,
    tag: "خبرة طبية متخصصة منذ 2014",
    title: "استعد وضوح الصوت ومتعة التواصل",
    highlight: "مع أحدث معينات السمع",
    text: "نقدم حلولاً سمعية متكاملة تبدأ من الفحص الدقيق وحتى البرمجة المتطورة والصيانة المعتمدة في مختلف محافظات مصر.",
    primaryCta: { text: "احجز استشارة عبر واتساب", href: wa("مرحبًا صله تون، أود حجز موعد استشارة وتقييم سمع"), isWa: true },
    secondaryCta: { text: "اختبر سمعك في دقيقتين", href: "#hearing-test" },
  },
  {
    img: IMG.hero2,
    tag: "فحص استرشادي فوري",
    title: "هل تلاحظ أي صعوبة في سماع",
    highlight: "الحديث أو التلفاز؟",
    text: "أجب عن 5 أسئلة قصيرة في دقيقتين لتحصل على تقييم فوري يوضح لك الخطوة المناسبة دون أي التزام.",
    primaryCta: { text: "ابدأ اختبار السمع الآن", href: "#hearing-test", isWa: false },
    secondaryCta: { text: "تحدث مع متخصص", href: wa("مرحبًا صله تون، لدي استفسار عن نتائج فحص السمع"), isWa: true },
  },
  {
    img: IMG.hero3,
    tag: "خدمة ما بعد البيع والصيانة",
    title: "صيانة معتمدة وبطاريات أصلية",
    highlight: "تصلك أينما كنت",
    text: "فحص دقيق للأعطال، ضبط وبرمجة بأحدث الأجهزة، وبطاريات أصلية لكافة المقاسات مع خدمة التوصيل السريع.",
    primaryCta: { text: "اطلب صيانة أو بطاريات", href: "#maintenance", isWa: false },
    secondaryCta: { text: "استفسار سريع عبر واتساب", href: wa("مرحبًا صله تون، أريد طلب صيانة/بطاريات"), isWa: true },
  },
  {
    img: IMG.hero4,
    tag: "أحدث التقنيات 2026",
    title: "سماعات مخفية وذكية تتصل",
    highlight: "بالموبايل والتلفاز مباشرة",
    text: "استكشف تشكيلة واسعة من أشهر العلامات التجارية العالمية (BTE, RIC, ITE) المصممة لتمنحك أقصى درجات الراحة.",
    primaryCta: { text: "افتح مساعد اختيار السماعة", href: "#hearing-finder", isWa: false },
    secondaryCta: { text: "اسأل عن العروض المتاحة", href: "#offers", isWa: false },
  },
];

const HYBRID_GATEWAYS = [
  {
    Ico: IconEar,
    badge: "فحص استرشادي في دقيقتين",
    title: "اختبار السمع الأونلاين",
    desc: "أجب عن 5 أسئلة سريعة لمعرفة مستوى السمع وتحديد ما إذا كنت بحاجة لتقييم متخصص.",
    cta: "ابدأ الاختبار الآن",
    href: "#hearing-test",
    popular: false,
  },
  {
    Ico: IconCalendarCheck,
    badge: "دليل الأنواع والمساعد الذكي",
    title: "مساعد اختيار السماعة",
    desc: "تعرف على الفئات (خلف الأذن BTE، داخل القناة RIC، المخفية ITE) واختر الأنسب لك.",
    cta: "استكشف السماعات المناسبة",
    href: "#hearing-finder",
    popular: true,
  },
  {
    Ico: IconWrench,
    badge: "خدمة سريعة في كل المحافظات",
    title: "الصيانة والبطاريات الأصلية",
    desc: "طلب فحص وبرمجة السماعات، أو طلب بطاريات مقاسات (10, 312, 13, 675) فوراً.",
    cta: "اطلب صيانة أو بطاريات",
    href: "#maintenance",
    popular: false,
  },
];

function HeroModel5() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const go = useCallback((next: number) => setIndex((next + HYBRID_SLIDES.length) % HYBRID_SLIDES.length), []);

  useEffect(() => {
    if (paused) return;
    const id = window.setInterval(() => setIndex((i) => (i + 1) % HYBRID_SLIDES.length), 6500);
    return () => window.clearInterval(id);
  }, [paused]);

  const current = HYBRID_SLIDES[index];

  return (
    <section
      className="relative overflow-hidden bg-navy text-white"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      aria-label="الواجهة الرئيسية لصوت وسماعات صله تون"
    >
      <div className="relative min-h-[480px] sm:min-h-[520px] lg:min-h-[560px]">
        {HYBRID_SLIDES.map((s, i) => (
          <div
            key={s.img}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              i === index ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={s.img}
              alt=""
              className="h-full w-full object-cover"
              loading={i === 0 ? "eager" : "lazy"}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/85 to-navy/60 lg:bg-gradient-to-r lg:from-navy/95 lg:via-navy/80 lg:to-transparent" />
            <div className="absolute inset-0 bg-navy/40" />
          </div>
        ))}

        <div className="relative mx-auto flex max-w-[1370px] flex-col justify-center px-4 pb-16 pt-12 sm:px-6 lg:px-8 lg:pb-20 lg:pt-16">
          <div className="max-w-[720px]">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-[13px] font-bold text-sky backdrop-blur-md">
              <IconShield width={15} height={15} /> {current.tag}
            </div>

            <h1 className="mt-4 text-[clamp(28px,4.3vw,50px)] font-black leading-[1.3] text-white">
              {current.title} <br className="hidden sm:inline" />
              <span className="text-sky">{current.highlight}</span>
            </h1>

            <p className="mt-4 max-w-[580px] text-[16px] leading-[1.9] text-white/90">
              {current.text}
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-3.5">
              <a
                href={current.primaryCta.href}
                target={current.primaryCta.isWa ? "_blank" : undefined}
                rel={current.primaryCta.isWa ? "noopener noreferrer" : undefined}
                className="btn btn-brand shadow-lg shadow-brand/30"
              >
                {current.primaryCta.isWa && <IconChat width={18} height={18} />}
                {current.primaryCta.text}
              </a>
              <a
                href={current.secondaryCta.href}
                target={current.secondaryCta.isWa ? "_blank" : undefined}
                rel={current.secondaryCta.isWa ? "noopener noreferrer" : undefined}
                className="btn btn-ghost"
              >
                {current.secondaryCta.isWa && <IconChat width={18} height={18} />}
                {current.secondaryCta.text}
              </a>
            </div>
          </div>

          <div className="mt-8 flex items-center justify-between border-t border-white/15 pt-5 sm:mt-10">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1">
                <button
                  onClick={() => go(index - 1)}
                  className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/20 bg-white/10 text-white backdrop-blur-sm transition hover:bg-brand hover:text-ink"
                  aria-label="الشريحة السابقة"
                >
                  <IconArrowBack width={17} height={17} />
                </button>
                <button
                  onClick={() => go(index + 1)}
                  className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/20 bg-white/10 text-white backdrop-blur-sm transition hover:bg-brand hover:text-ink"
                  aria-label="الشريحة التالية"
                >
                  <IconArrow width={17} height={17} />
                </button>
              </div>

              <div className="flex items-center gap-2 rounded-lg bg-navy-dark/80 px-3.5 py-2 text-[13px] font-bold tabular-nums" dir="ltr">
                <span className="text-sky">{String(index + 1).padStart(2, "0")}</span>
                <span className="h-px w-4 bg-white/40" />
                <span className="text-white/70">{String(HYBRID_SLIDES.length).padStart(2, "0")}</span>
              </div>
            </div>

            <div className="hidden items-center gap-3 md:flex">
              <span className="text-[13px] text-white/70">للحجز والاستفسار المباشر:</span>
              <a
                href={`tel:${PHONE_TEL}`}
                dir="ltr"
                className="flex items-center gap-2 rounded-lg bg-white/15 px-3.5 py-1.5 text-[15px] font-black text-sky transition hover:bg-white/25 hover:text-white"
              >
                <IconPhone width={15} height={15} /> {PHONE_DISPLAY}
              </a>
            </div>

            <div className="flex items-center gap-2">
              {HYBRID_SLIDES.map((_, i) => (
                <button
                  key={i}
                  onClick={() => go(i)}
                  aria-label={`انتقال للشريحة ${i + 1}`}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === index ? "w-8 bg-brand" : "w-2 bg-white/40 hover:bg-white/70"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="relative z-10 -mt-6 bg-gradient-to-b from-transparent via-[#1c3563] to-navy-dark px-4 pb-12 pt-6 sm:px-6 lg:px-8 lg:pb-16">
        <div className="mx-auto max-w-[1370px]">
          <div className="grid gap-5 md:grid-cols-3">
            {HYBRID_GATEWAYS.map((g) => (
              <div
                key={g.title}
                className={`group relative flex flex-col rounded-2xl border p-6 backdrop-blur-md transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl ${
                  g.popular
                    ? "border-brand bg-white text-ink shadow-[0_15px_40px_rgba(66,179,229,0.25)]"
                    : "border-white/15 bg-navy-dark/90 text-white hover:border-white/35 hover:bg-navy-dark"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span
                    className={`flex h-12 w-12 items-center justify-center rounded-xl ${
                      g.popular
                        ? "bg-navy text-sky"
                        : "bg-white/10 text-sky group-hover:bg-brand group-hover:text-ink"
                    }`}
                  >
                    <g.Ico width={24} height={24} />
                  </span>
                  <span
                    className={`rounded-full px-3 py-1 text-[11.5px] font-bold ${
                      g.popular ? "bg-brand/20 text-navy" : "bg-white/10 text-sky"
                    }`}
                  >
                    {g.badge}
                  </span>
                </div>

                <h3 className={`mt-4 text-[20px] font-extrabold ${g.popular ? "text-ink" : "text-white"}`}>
                  {g.title}
                </h3>

                <p className={`mt-2 text-[14px] leading-[1.8] ${g.popular ? "text-body" : "text-white/75"}`}>
                  {g.desc}
                </p>

                <div className="mt-auto pt-5">
                  <a
                    href={g.href}
                    className={`flex w-full items-center justify-center gap-2 rounded-lg py-3 text-[14.5px] font-bold transition-all ${
                      g.popular
                        ? "btn-brand shadow-sm"
                        : "border border-white/20 bg-white/10 text-white hover:bg-white hover:text-navy"
                    }`}
                  >
                    {g.cta} <IconArrow width={15} height={15} />
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-between gap-4 rounded-xl border border-white/10 bg-white/5 p-4 text-[13.5px]">
            <div className="flex items-center gap-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-brand/20 text-sky">
                <IconClock width={16} height={16} />
              </span>
              <span className="font-semibold text-white/90">
                فريق الدعم الفني والاستشارات الطبية متواجد يومياً لمساعدتك عبر واتساب والهاتف.
              </span>
            </div>
            <a
              href={wa("مرحبًا صله تون، أود استشارة أخصائي السمع الآن")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-bold text-sky transition hover:text-white"
            >
              <IconChat width={16} height={16} /> ابدأ محادثة مباشرة الآن &larr;
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* =========================================================================
   MAIN HERO EXPORT WITH VARIANT SELECTOR
========================================================================= */
const VARIANTS = [
  { id: 6, name: "نموذج MediCenter (المطابق تماماً للرابط)", desc: "سلايدر كامل مع 3 صناديق كلاسيكية للخدمات ومواعيد العمل" },
  { id: 5, name: "نموذج 5: الهجين المطور (سلايدر + مسارات)", desc: "سلايدر تفاعلي مع كروت المسارات" },
  { id: 1, name: "نموذج 1: السلايدر التفاعلي المطور", desc: "سلايدر حركي مع بطاقات سريعة" },
  { id: 2, name: "نموذج 2: الواجهة الطبية والتحويل المزدوج", desc: "تصميم طبي فخم مع بطاقة ثقة" },
  { id: 3, name: "نموذج 3: المسارات الذكية الثلاثية", desc: "3 بوابات تفاعلية لتوجيه الزائر" },
];

export default function Hero() {
  const [activeModel, setActiveModel] = useState(6); // MediCenter model is default!

  return (
    <div>
      <div className="border-b border-navy-dark bg-[#142442] px-4 py-2.5 text-white">
        <div className="mx-auto flex max-w-[1370px] flex-wrap items-center justify-between gap-3 text-[13px] lg:px-4">
          <div className="flex items-center gap-2">
            <span className="flex h-2.5 w-2.5 rounded-full bg-brand animate-pulse" />
            <span className="font-bold text-sky">معاينة نماذج قسم الهيرو (ميدي سنتر + النماذج الأخرى):</span>
          </div>
          <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
            {VARIANTS.map((v) => (
              <button
                key={v.id}
                onClick={() => setActiveModel(v.id)}
                className={`rounded-md px-3 py-1.5 text-[12.5px] font-bold transition-all ${
                  activeModel === v.id
                    ? "bg-brand text-ink shadow-sm ring-2 ring-white/40"
                    : "bg-white/10 text-white/80 hover:bg-white/20 hover:text-white"
                }`}
              >
                {v.name.split("(")[0].trim()}
              </button>
            ))}
          </div>
        </div>
      </div>

      {activeModel === 6 && <HeroModelMedicenter />}
      {activeModel === 5 && <HeroModel5 />}
      {activeModel === 1 && <HeroModel1 />}
      {activeModel === 2 && <HeroModel2 />}
      {activeModel === 3 && <HeroModel3 />}
    </div>
  );
}
