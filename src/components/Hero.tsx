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
   MODEL 1: Classic Split Slider & Info Stack (النموذج 1: السلايدر التفاعلي المطور)
========================================================================= */
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

function HeroModel1() {
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

/* =========================================================================
   MODEL 2: Medical Authority & Dual CTA Hero (النموذج 2: الواجهة الطبية الموثوقة والتحويل المزدوج)
========================================================================= */
function HeroModel2() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-bl from-navy-dark via-navy to-[#1a2f58] text-white">
      <div className="pointer-events-none absolute inset-0 opacity-10">
        <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path d="M0 0 L100 100 M20 0 L100 80 M0 20 L80 100" stroke="#fff" strokeWidth="0.5" />
        </svg>
      </div>

      <div className="relative mx-auto grid max-w-[1370px] items-center gap-12 px-4 py-14 lg:grid-cols-12 lg:gap-16 lg:py-20 lg:px-8">
        <div className="lg:col-span-7">
          <div className="inline-flex items-center gap-2.5 rounded-full bg-white/10 px-4 py-1.5 text-[13.5px] font-bold text-sky backdrop-blur-md">
            <IconShield width={16} height={16} /> شركة طبية متخصصة في حلول السمع منذ 2014
          </div>

          <h1 className="mt-5 text-[clamp(30px,4.5vw,52px)] font-black leading-[1.35] text-white">
            استعد متعة الحياة <br className="hidden sm:inline" />
            <span className="text-sky">بنقاء ووضوح الصوت</span> من حولك
          </h1>

          <p className="mt-5 max-w-[620px] text-[16.5px] leading-[2] text-white/85">
            نساعدك في <strong className="text-white">صله تون</strong> على اختيار وبرمجة أحدث المعينات السمعية العالمية، مع
            فحص استرشادي دقيق وخدمات صيانة وبطاريات متكاملة في مختلف محافظات مصر.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href={wa("مرحبًا صله تون، أريد حجز موعد تقييم سمع واستشارة")}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-brand shadow-lg shadow-brand/25"
            >
              <IconChat width={18} height={18} /> احجز استشارة عبر واتساب
            </a>
            <a href="#hearing-test" className="btn btn-ghost">
              <IconEar width={18} height={18} /> اختبر سمعك في دقيقتين
            </a>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-4 border-t border-white/15 pt-8 sm:grid-cols-3">
            {[
              { t: "فحص استرشادي فوري", s: "في دقيقتين أونلاين" },
              { t: "10 علامات عالمية", s: "ضمان وبرمجة معتمدة" },
              { t: "دعم فني وصيانة", s: "متابعة مستمرة بعد البيع" },
            ].map((item) => (
              <div key={item.t} className="flex items-start gap-2.5">
                <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-sky/20 text-sky">
                  <IconCheck width={12} height={12} strokeWidth={3} />
                </span>
                <div>
                  <h4 className="text-[14.5px] font-bold text-white">{item.t}</h4>
                  <p className="text-[12.5px] text-white/70">{item.s}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative lg:col-span-5">
          <div className="relative mx-auto max-w-[480px]">
            <div className="relative overflow-hidden rounded-2xl border-2 border-white/20 bg-ink shadow-2xl">
              <img
                src={IMG.hero1}
                alt="جلسة استشارة وفحص سمع طبية متخصصة في صله تون"
                className="aspect-[4/4.5] w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-transparent to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                <p className="text-[13px] font-bold text-sky">رعاية شخصية موثوقة</p>
                <h3 className="mt-1 text-[20px] font-bold">جلسات ضبط وبرمجة دقيقة بأحدث المعايير</h3>
              </div>
            </div>

            <div className="absolute -bottom-5 start-4 flex items-center gap-3.5 rounded-xl bg-white p-4 text-ink shadow-[0_15px_35px_rgba(0,0,0,0.25)] sm:-start-6">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-navy text-[22px] font-black text-white tabular-nums">
                +12
              </div>
              <div>
                <p className="text-[15px] font-extrabold text-navy">عامًا من الخبرة</p>
                <p className="text-[12px] font-medium text-body">منذ تأسيس الشركة في 2014</p>
              </div>
            </div>

            <a
              href={`tel:${PHONE_TEL}`}
              className="absolute -top-4 end-4 flex items-center gap-3 rounded-xl bg-navy-dark/95 px-4 py-2.5 text-white shadow-xl backdrop-blur-md transition hover:bg-blue sm:-end-4"
            >
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-brand text-ink">
                <IconPhone width={16} height={16} />
              </div>
              <div className="text-end">
                <span className="block text-[11px] font-bold text-white/70">اتصال سريع</span>
                <span dir="ltr" className="block text-[15px] font-extrabold text-sky">
                  {PHONE_DISPLAY}
                </span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* =========================================================================
   MODEL 3: Smart Pathways Hero - 3 Gateway Cards (النموذج 3: نمط المسارات الذكية الثلاثية)
========================================================================= */
function HeroModel3() {
  const GATEWAYS = [
    {
      Ico: IconEar,
      badge: "دقيقتين فقط",
      title: "أشعر بصعوبة في السمع",
      desc: "أجب عن 5 أسئلة استرشادية لتقييم سمعك ومعرفة ما إذا كنت تحتاج لزيارة الطبيب.",
      cta: "ابدأ اختبار السمع",
      href: "#hearing-test",
      highlight: true,
    },
    {
      Ico: IconCalendarCheck,
      badge: "دليل تفاعلي",
      title: "أبحث عن سماعة جديدة",
      desc: "استكشف الفئات BTE و RIC و ITE مع مساعد الاختيار الذكي لتحديد المناسب لك.",
      cta: "مساعد اختيار السماعة",
      href: "#hearing-finder",
      highlight: false,
    },
    {
      Ico: IconWrench,
      badge: "خدمة سريعة",
      title: "صيانة أو بطاريات لسماعتي",
      desc: "اطلب فحص عطل، برمجة وضبط، أو احصل على بطاريات أصلية تصلك أينما كنت.",
      cta: "اطلب صيانة أو بطاريات",
      href: "#maintenance",
      highlight: false,
    },
  ];

  return (
    <section className="relative bg-navy pb-16 pt-12 text-white lg:pb-24 lg:pt-16">
      <div className="mx-auto max-w-[1370px] px-4 lg:px-8">
        <div className="mx-auto max-w-[840px] text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1 text-[13.5px] font-bold text-sky">
            <IconShield width={15} height={15} /> صله تون — حلول السمع الطبية المتكاملة منذ 2014
          </span>
          <h1 className="mt-4 text-[clamp(30px,4vw,48px)] font-black leading-[1.35] text-white">
            كيف يمكننا مساعدتك اليوم في <span className="text-sky">حماية وتحسين سمعك؟</span>
          </h1>
          <p className="mt-4 text-[16px] leading-[1.9] text-white/80">
            اختر ما تبحث عنه للوصول إلى الخدمة الأنسب لك بضغطة زر مع متابعة مباشرة من خبرائنا.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {GATEWAYS.map((g) => (
            <div
              key={g.title}
              className={`group relative flex flex-col rounded-2xl border p-8 transition-all duration-300 hover:-translate-y-1.5 ${
                g.highlight
                  ? "border-brand bg-white text-ink shadow-[0_20px_50px_rgba(66,179,229,0.25)]"
                  : "border-white/15 bg-white/5 text-white backdrop-blur-sm hover:border-white/40 hover:bg-white/10"
              }`}
            >
              <div className="flex items-center justify-between">
                <span
                  className={`flex h-14 w-14 items-center justify-center rounded-xl ${
                    g.highlight ? "bg-navy text-sky" : "bg-white/15 text-sky group-hover:bg-brand group-hover:text-ink"
                  }`}
                >
                  <g.Ico width={26} height={26} />
                </span>
                <span
                  className={`rounded-full px-3 py-1 text-[12px] font-bold ${
                    g.highlight ? "bg-brand/20 text-navy" : "bg-white/10 text-white/80"
                  }`}
                >
                  {g.badge}
                </span>
              </div>

              <h2 className={`mt-6 text-[22px] font-black ${g.highlight ? "text-ink" : "text-white"}`}>
                {g.title}
              </h2>

              <p className={`mt-3 text-[14.5px] leading-[1.85] ${g.highlight ? "text-body" : "text-white/75"}`}>
                {g.desc}
              </p>

              <div className="mt-auto pt-7">
                <a
                  href={g.href}
                  className={`flex w-full items-center justify-center gap-2 rounded-lg py-3.5 text-[15px] font-bold transition-all ${
                    g.highlight
                      ? "btn-brand shadow-md"
                      : "bg-white/15 text-white hover:bg-white hover:text-navy"
                  }`}
                >
                  {g.cta} <IconArrow width={16} height={16} />
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-between gap-4 rounded-xl border border-white/10 bg-navy-dark/70 p-5 backdrop-blur-md">
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand/20 text-sky">
              <IconPhone width={20} height={20} />
            </span>
            <div>
              <p className="text-[14px] font-bold text-white">تفضل التحدث مباشرة إلى متخصص الآن؟</p>
              <p className="text-[12.5px] text-white/70">فريقنا الطبي جاهز للإجابة على جميع استفساراتك</p>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <a
              href={`tel:${PHONE_TEL}`}
              className="inline-flex items-center gap-2 rounded-lg bg-white/10 px-4 py-2.5 text-[14px] font-bold text-sky transition hover:bg-white/20"
            >
              <span dir="ltr">{PHONE_DISPLAY}</span>
            </a>
            <a
              href={wa("مرحبًا صله تون، أريد استشارة فورية مع متخصص")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-[#25D366] px-4 py-2.5 text-[14px] font-bold text-white transition hover:bg-[#20b859]"
            >
              <IconChat width={16} height={16} /> محادثة واتساب
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* =========================================================================
   MODEL 4: Direct Consultation & Quick Request Hero (النموذج 4: استمارة الاستشارة السريعة المباشرة)
========================================================================= */
function HeroModel4() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState("حجز فحص واستشارة سمع");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    openWa(
      `مرحبًا صله تون، أود طلب استشارة سريعة من الموقع.\nالاسم: ${name}\nرقم الهاتف: ${phone}\nالخدمة المطلوبة: ${service}`
    );
  };

  return (
    <section className="relative overflow-hidden bg-navy py-14 text-white lg:py-20">
      <img
        src={IMG.hero2}
        alt=""
        className="absolute inset-0 h-full w-full object-cover opacity-20"
        loading="eager"
      />
      <div className="scrim-l absolute inset-0" />

      <div className="relative mx-auto grid max-w-[1370px] items-center gap-12 px-4 lg:grid-cols-12 lg:gap-16 lg:px-8">
        <div className="lg:col-span-7">
          <span className="label on-dark">خبراء السمع منذ 2014</span>
          <h1 className="mt-3 text-[clamp(30px,4.3vw,50px)] font-black leading-[1.35] text-white">
            حلول طبية متطورة <br />
            تمنحك <span className="text-sky">أوضح تجربة سمع</span> بكل راحة
          </h1>

          <p className="mt-5 max-w-[600px] text-[16px] leading-[2] text-white/85">
            في صله تون نوفر لك منظومة متكاملة: أحدث أجهزة السمع العالمية، أجهزة متناهية الصغر، صيانة معتمدة، وبطاريات أصلية
            مع إمكانية المتابعة الدورية.
          </p>

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {[
              "فحص سمعي استرشادي مجاني",
              "برمجة رقمية مخصصة للأذن",
              "ضمان حقيقي وخدمة ما بعد البيع",
              "توصيل البطاريات والصيانة لكافة المحافظات",
            ].map((item) => (
              <div key={item} className="flex items-center gap-2.5">
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand text-ink">
                  <IconCheck width={12} height={12} strokeWidth={3} />
                </span>
                <span className="text-[14.5px] font-semibold text-white/90">{item}</span>
              </div>
            ))}
          </div>

          <div className="mt-8 flex items-center gap-4 border-t border-white/15 pt-6">
            <span className="text-[14px] text-white/70">أو اتصل بنا فوراً:</span>
            <a
              href={`tel:${PHONE_TEL}`}
              dir="ltr"
              className="text-[22px] font-black text-sky transition hover:text-white"
            >
              {PHONE_DISPLAY}
            </a>
          </div>
        </div>

        <div className="lg:col-span-5">
          <div className="rounded-2xl border border-rule bg-white p-6 shadow-2xl text-ink sm:p-8">
            <div className="border-b border-rule pb-4">
              <span className="text-[12.5px] font-bold text-blue">تواصل سريع مع المتخصصين</span>
              <h2 className="mt-1 text-[22px] font-black text-ink">طلب استشارة أو فحص سمع</h2>
              <p className="mt-1 text-[13.5px] text-body">
                أدخل بياناتك وسيتم توجيه طلبك فوراً لمحادثة واتساب الرسمية
              </p>
            </div>

            <form onSubmit={handleSubmit} className="mt-5 space-y-4">
              <div>
                <label className="mb-1.5 block text-[13.5px] font-bold text-ink">الخدمة المطلوبة</label>
                <select
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className={inputCls}
                >
                  <option>حجز فحص واستشارة سمع</option>
                  <option>استفسار عن أسعار وأنواع السماعات</option>
                  <option>طلب صيانة أو فحص عطل</option>
                  <option>طلب بطاريات وملحقات</option>
                  <option>برمجة وضبط سماعة حالية</option>
                </select>
              </div>

              <div>
                <label className="mb-1.5 block text-[13.5px] font-bold text-ink">الاسم الكريم</label>
                <input
                  required
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="مثال: أحمد محمد"
                  className={inputCls}
                />
              </div>

              <div>
                <label className="mb-1.5 block text-[13.5px] font-bold text-ink">رقم الموبايل / واتساب</label>
                <input
                  required
                  type="tel"
                  inputMode="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="010XXXXXXXX"
                  className={inputCls}
                  dir="ltr"
                />
              </div>

              <button type="submit" className="btn btn-brand w-full py-4 text-[16px] shadow-md">
                <IconChat width={18} height={18} /> إرسال الطلب عبر واتساب
              </button>

              <p className="text-center text-[12px] text-body">
                🔒 خصوصيتك محفوظة بالكامل ولا نشارك بياناتك مع أي طرف آخر.
              </p>
            </form>
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
  { id: 1, name: "نموذج 1: السلايدر التفاعلي المطور", desc: "سلايدر حركي مع بطاقات سريعة" },
  { id: 2, name: "نموذج 2: الواجهة الطبية والتحويل المزدوج", desc: "تصميم طبي فخم مع بطاقة ثقة" },
  { id: 3, name: "نموذج 3: المسارات الذكية الثلاثية", desc: "3 بوابات تفاعلية لتوجيه الزائر" },
  { id: 4, name: "نموذج 4: استمارة الاستشارة السريعة", desc: "نموذج تحويل مباشر عالي الاستجابة" },
];

export default function Hero() {
  const [activeModel, setActiveModel] = useState(2); // Model 2 as the default modern medical flagship

  return (
    <div>
      <div className="border-b border-navy-dark bg-[#1d3360] px-4 py-2.5 text-white">
        <div className="mx-auto flex max-w-[1370px] flex-wrap items-center justify-between gap-3 text-[13px] lg:px-4">
          <div className="flex items-center gap-2">
            <span className="flex h-2 w-2 rounded-full bg-brand animate-pulse" />
            <span className="font-bold text-sky">معاينة نماذج تصميم قسم الهيرو:</span>
          </div>
          <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
            {VARIANTS.map((v) => (
              <button
                key={v.id}
                onClick={() => setActiveModel(v.id)}
                className={`rounded-md px-3 py-1.5 text-[12.5px] font-bold transition-all ${
                  activeModel === v.id
                    ? "bg-brand text-ink shadow-sm"
                    : "bg-white/10 text-white/80 hover:bg-white/20 hover:text-white"
                }`}
              >
                {v.name.split(":")[0]}
              </button>
            ))}
          </div>
        </div>
      </div>

      {activeModel === 1 && <HeroModel1 />}
      {activeModel === 2 && <HeroModel2 />}
      {activeModel === 3 && <HeroModel3 />}
      {activeModel === 4 && <HeroModel4 />}
    </div>
  );
}
