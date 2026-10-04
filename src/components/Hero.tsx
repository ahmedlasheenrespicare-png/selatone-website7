import { useCallback, useEffect, useState } from "react";
import {
  IconArrow,
  IconArrowBack,
  IconCheck,
  IconChat,
  IconPhone,
  IconShield,
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
   2. نموذج MediCenter الطبي الكلاسيكي (MediCenter Hero Model)
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

function HeroMedicenter() {
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
      aria-label="قسم الهيرو الطبي — نمط MediCenter"
    >
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

      <div className="grid grid-cols-1 md:grid-cols-3">
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
   MAIN HERO COMPONENT (MediCenter & Original Only)
========================================================================= */
export default function Hero() {
  const [model, setModel] = useState<"medicenter" | "original">("medicenter");

  return (
    <div>
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

      {model === "medicenter" ? <HeroModelMedicenter /> : <HeroOriginal />}
    </div>
  );
}
