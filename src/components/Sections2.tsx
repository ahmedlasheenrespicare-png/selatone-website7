import { useState } from "react";
import Reveal from "./Reveal";
import {
  IconArrow,
  IconAlert,
  IconBattery,
  IconChat,
  IconCheck,
  IconGift,
  IconMusic,
  IconSmartphone,
  IconTv,
  IconSend,
} from "./Icons";
import { inputCls, openWa, wa } from "../data";

/* ------------------------------------------------------------ comparison */
const ROWS: { label: string; bte: string; ric: string; ite: string; strong?: [boolean, boolean, boolean] }[] = [
  { label: "مكان الارتداء", bte: "الجهاز خلف الأذن", ric: "الجهاز خلف الأذن والمستقبل داخل القناة", ite: "الجهاز داخل الأذن" },
  { label: "الشكل والحجم", bte: "متوسط وواضح", ric: "خفيف وأنيق", ite: "صغير ومخصص" },
  { label: "سهولة الاستخدام", bte: "ممتازة", ric: "جيدة جدًا", ite: "تختلف حسب الحجم", strong: [true, true, false] },
  { label: "خيارات الشحن", bte: "متوفرة في طرازات", ric: "متوفرة في طرازات", ite: "حسب الطراز", strong: [true, true, false] },
  { label: "الاتصال بالموبايل", bte: "حسب الطراز", ric: "شائع في الطرازات الحديثة", ite: "حسب الطراز والحجم", strong: [false, true, false] },
  { label: "مناسبة للأطفال", bte: "خيار شائع", ric: "يحدده المتخصص", ite: "يحدده المتخصص", strong: [true, false, false] },
  { label: "الصيانة والتنظيف", bte: "سهلة نسبيًا", ric: "تحتاج عناية بالمستقبل", ite: "تحتاج تنظيفًا منتظمًا" },
];

export function Comparison() {
  return (
    <section id="comparison" className="bg-mist">
      <div className="mx-auto max-w-[1370px] px-4 py-16 lg:px-8 lg:py-24">
        <Reveal className="mx-auto max-w-[780px] text-center">
          <span className="label">مقارنة سريعة</span>
          <h2 className="sec-title mt-2">الفرق بين أشهر أنواع المعينات السمعية</h2>
          <span className="sec-rule center" />
          <p className="mt-6 text-[16px] leading-[2]">مقارنة مبسطة تساعدك على فهم الفئات قبل إجراء التقييم المتخصص.</p>
        </Reveal>

        <Reveal className="thin-scroll mt-10 overflow-x-auto bg-white">
          <table className="w-full min-w-[720px] border-collapse text-[15px]">
            <thead>
              <tr className="bg-navy text-white">
                <th scope="col" className="px-5 py-4 text-start font-bold">
                  وجه المقارنة
                </th>
                {[
                  { code: "BTE", name: "خلف الأذن" },
                  { code: "RIC", name: "مستقبل داخل القناة", tag: "اختيار شائع" },
                  { code: "ITE", name: "داخل الأذن" },
                ].map((c) => (
                  <th key={c.code} scope="col" className={`px-5 py-4 text-start align-top ${c.tag ? "bg-blue" : ""}`}>
                    {c.tag && <em className="mb-1 block text-[12px] font-bold not-italic text-sky">{c.tag}</em>}
                    <span dir="ltr" className="block text-[20px] font-black tracking-[0.1em]">
                      {c.code}
                    </span>
                    <span className="text-[13px] font-semibold text-white/85">{c.name}</span>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {ROWS.map((r, i) => (
                <tr key={r.label} className={i % 2 === 0 ? "bg-white" : "bg-mist/70"}>
                  <th scope="row" className="px-5 py-4 text-start font-bold text-ink">
                    {r.label}
                  </th>
                  {[r.bte, r.ric, r.ite].map((v, k) => (
                    <td
                      key={k}
                      className={`px-5 py-4 ${k === 1 ? "bg-brand/10" : ""} ${r.strong?.[k] ? "font-bold text-navy" : ""}`}
                    >
                      {r.strong?.[k] && <IconCheck width={15} height={15} className="me-2 inline text-blue" strokeWidth={2.6} />}
                      {v}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------ technology */
const TECH = [
  { Ico: IconSmartphone, title: "اتصال بالهاتف", text: "استقبل المكالمات واستمع إليها بوضوح." },
  { Ico: IconTv, title: "تجربة تلفاز أفضل", text: "صوت مباشر ومريح دون رفع مستوى التلفاز." },
  { Ico: IconMusic, title: "الموسيقى والصوت", text: "استمتع بالمحتوى الصوتي بسهولة وجودة." },
];

export function Technology() {
  return (
    <section id="technology" className="bg-navy">
      <div className="mx-auto max-w-[1370px] px-4 py-16 lg:px-8 lg:py-24">
        <Reveal className="mx-auto max-w-[780px] text-center">
          <span className="label on-dark">تقنية عصرية</span>
          <h2 className="sec-title light mt-2">اتصال لاسلكي يجعل يومك أسهل</h2>
          <span className="sec-rule center" />
          <p className="mt-6 text-[16px] leading-[2] text-white/85">
            تتصل المعينات السمعية الحديثة بالهاتف والتلفاز والأجهزة الصوتية، لتستمتع بمكالمات وموسيقى وصوت أوضح مباشرة
            عبر سماعتك.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {TECH.map(({ Ico, title, text }, i) => (
            <Reveal key={title} delay={i * 110} as="article" className="group flex gap-5 border border-white/20 p-7 transition-colors hover:border-brand hover:bg-white/5">
              <span className="flex h-14 w-14 shrink-0 items-center justify-center border border-white/40 text-sky transition-colors group-hover:border-brand group-hover:bg-brand group-hover:text-ink">
                <Ico width={26} height={26} />
              </span>
              <div>
                <h3 className="text-[20px] font-bold text-white">{title}</h3>
                <p className="mt-1.5 text-[15px] leading-[1.9] text-white/80">{text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------- batteries */
const BATTERIES = [
  { n: "10", name: "البطارية الصفراء", color: "#f2c200", ink: "#2b2f33", color_ar: "أصفر", pr: "PR70", text: "حجم صغير يُستخدم عادةً في بعض السماعات الصغيرة داخل الأذن.", msg: "بطارية سماعة رقم 10 الصفراء" },
  { n: "312", name: "البطارية البنية", color: "#7a4a22", ink: "#ffffff", color_ar: "بني", pr: "PR41", text: "مقاس شائع في بعض سماعات RIC والسماعات داخل الأذن.", msg: "بطارية سماعة رقم 312 البنية" },
  { n: "13", name: "البطارية البرتقالية", color: "#f07f12", ink: "#2b2f33", color_ar: "برتقالي", pr: "PR48", text: "تُستخدم عادةً في بعض السماعات خلف الأذن وداخل الأذن.", msg: "بطارية سماعة رقم 13 البرتقالية" },
  { n: "675", name: "البطارية الزرقاء", color: "#2563c9", ink: "#ffffff", color_ar: "أزرق", pr: "PR44", text: "مقاس أكبر يُستخدم عادةً مع الأجهزة التي تحتاج إلى طاقة أعلى.", msg: "بطارية سماعة رقم 675 الزرقاء" },
];

const TIPS = [
  "انزع الملصق قبل الاستخدام وانتظر قليلًا قبل تركيب البطارية.",
  "لا تخزن البطاريات في الثلاجة أو بجوار المعادن.",
  "احفظها بعيدًا عن الأطفال؛ ابتلاع البطارية حالة طارئة.",
];

export function Batteries() {
  return (
    <section id="batteries" className="mx-auto max-w-[1370px] px-4 py-16 lg:px-8 lg:py-24">
      <Reveal className="mx-auto max-w-[800px] text-center">
        <span className="label">الطاقة والملحقات</span>
        <h2 className="sec-title mt-2">دليل بطاريات المعينات السمعية</h2>
        <span className="sec-rule center" />
        <p className="mt-6 text-[16px] leading-[2]">
          تُعرّف بطاريات الزنك الهوائية غالبًا برقم ولون قياسي. طابق الرقم المكتوب على عبوتك قبل الطلب.
        </p>
      </Reveal>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {BATTERIES.map((b, i) => (
          <Reveal key={b.n} delay={i * 90} as="article" className="group flex flex-col border border-rule bg-white p-6 transition-shadow hover:shadow-[0_18px_40px_rgba(31,45,61,0.12)]">
            <div className="flex items-center gap-4">
              <span
                dir="ltr"
                className="flex h-[72px] w-[72px] shrink-0 items-center justify-center rounded-full text-[26px] font-black shadow-inner transition-transform duration-500 group-hover:scale-105"
                style={{ background: b.color, color: b.ink }}
              >
                {b.n}
              </span>
              <h3 className="text-[19px] font-bold leading-snug text-ink">{b.name}</h3>
            </div>
            <p className="mt-4 text-[14.5px] leading-[1.9]">{b.text}</p>
            <dl className="mt-4 divide-y divide-rule border-y border-rule text-[14px]">
              <div className="flex justify-between py-2">
                <dt>الرمز اللوني</dt>
                <dd className="font-bold text-ink">{b.color_ar}</dd>
              </div>
              <div className="flex justify-between py-2">
                <dt>الاسم الشائع</dt>
                <dd dir="ltr" className="font-bold text-ink">
                  {b.pr}
                </dd>
              </div>
            </dl>
            <a
              href={wa(`مرحبًا صله تون، أريد الاستفسار عن ${b.msg}`)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-line mt-5"
            >
              <IconChat width={16} height={16} /> اطلب عبر واتساب
            </a>
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-10 bg-mist p-6">
        <p className="mb-3 flex items-center gap-2 text-[16px] font-bold text-ink">
          <IconBattery width={20} height={20} className="text-blue" /> نصائح الاستخدام
        </p>
        <ul className="grid gap-3 md:grid-cols-3">
          {TIPS.map((t) => (
            <li key={t} className="flex items-start gap-3 text-[14.5px] leading-[1.8]">
              <IconCheck width={16} height={16} className="mt-1.5 shrink-0 text-blue" strokeWidth={2.4} />
              {t}
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  );
}

/* ----------------------------------------------------------- maintenance */
const STEPS = [
  { t: "صف المشكلة", s: "حدد نوع الجهاز والعطل الظاهر." },
  { t: "أرسل الطلب", s: "تُفتح رسالة منظمة على واتساب." },
  { t: "أرفق صورة إن أمكن", s: "أرسل صورة الجهاز داخل المحادثة بعد فتحها." },
];

export function Maintenance() {
  const [type, setType] = useState("لا أعرف النوع");
  const [brand, setBrand] = useState("");
  const [problem, setProblem] = useState("");

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    openWa(
      `مرحبًا صله تون، أريد طلب صيانة/فحص لمعين سمعي.\nنوع الجهاز: ${type}\nالعلامة التجارية: ${brand || "غير محددة"}\nوصف المشكلة: ${problem}`
    );
  };

  return (
    <section id="maintenance" className="bg-mist">
      <div className="mx-auto grid max-w-[1370px] gap-10 px-4 py-16 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:py-24">
        <Reveal>
          <span className="label">خدمة ما بعد البيع</span>
          <h2 className="sec-title mt-2">اطلب فحص أو صيانة سماعتك</h2>
          <span className="sec-rule" />
          <p className="mt-6 text-[16px] leading-[2]">
            أرسل تفاصيل الجهاز والعطل قبل الزيارة، ليساعدك الفريق بصورة أسرع.
          </p>

          <ol className="mt-6 space-y-4">
            {STEPS.map((s, i) => (
              <li key={s.t} className="flex items-start gap-4 bg-white p-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center bg-navy text-[18px] font-extrabold text-white">{i + 1}</span>
                <span>
                  <strong className="block text-[16px] text-ink">{s.t}</strong>
                  <span className="text-[14.5px]">{s.s}</span>
                </span>
              </li>
            ))}
          </ol>

          <p className="mt-6 flex items-start gap-3 border-s-4 border-amber bg-white p-4 text-[14.5px] leading-[1.9]">
            <IconAlert width={20} height={20} className="mt-1 shrink-0 text-amber" />
            <span>
              <strong className="text-ink">تنبيه:</strong> لا تحاول فتح الجهاز أو إصلاحه بأدوات منزلية؛ قد يؤدي ذلك إلى
              تلف إضافي.
            </span>
          </p>
        </Reveal>

        <Reveal delay={120}>
          <form onSubmit={submit} className="border border-rule bg-white p-6 sm:p-8">
            <h3 className="text-[22px] font-bold text-ink">نموذج طلب الصيانة</h3>
            <p className="mt-1 text-[14px]">عند الإرسال تُفتح رسالة جاهزة على واتساب.</p>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              <label className="block">
                <span className="mb-1.5 block text-[14px] font-bold text-ink">نوع المعين</span>
                <select value={type} onChange={(e) => setType(e.target.value)} className={inputCls}>
                  <option>لا أعرف النوع</option>
                  <option>خلف الأذن BTE</option>
                  <option>مستقبل داخل القناة RIC</option>
                  <option>داخل الأذن ITE</option>
                </select>
              </label>
              <label className="block">
                <span className="mb-1.5 block text-[14px] font-bold text-ink">العلامة التجارية</span>
                <input value={brand} onChange={(e) => setBrand(e.target.value)} className={inputCls} placeholder="مثال: Signia" />
              </label>
              <label className="block sm:col-span-2">
                <span className="mb-1.5 block text-[14px] font-bold text-ink">وصف المشكلة</span>
                <textarea
                  required
                  value={problem}
                  onChange={(e) => setProblem(e.target.value)}
                  rows={4}
                  placeholder="مثال: الصوت منخفض أو يوجد صفير…"
                  className={`${inputCls} h-auto py-3`}
                />
              </label>
            </div>
            <button type="submit" className="btn btn-brand mt-5 w-full">
              <IconSend width={17} height={17} /> أرسل الطلب عبر واتساب
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------------- brands */
const BRANDS = ["REXTON", "Signia", "ReSound", "Beltone", "SONIC", "Audifon", "Audibel", "AudioService", "earnet", "A&M"];

export function Brands() {
  return (
    <section id="brands" className="border-y border-rule bg-white">
      <div className="mx-auto max-w-[1370px] px-4 py-14 lg:px-8">
        <Reveal className="mx-auto max-w-[700px] text-center">
          <span className="label">شركاء الجودة</span>
          <h2 className="sec-title mt-2">علامات تجارية موثوقة</h2>
          <span className="sec-rule center" />
          <p className="mt-5 text-[15.5px] leading-[1.9]">خبرة في التعامل مع مجموعة من أبرز العلامات المتخصصة في تقنيات السمع.</p>
        </Reveal>
        <ul dir="ltr" className="mt-9 grid grid-cols-2 items-center gap-x-6 gap-y-6 sm:grid-cols-3 lg:grid-cols-5">
          {BRANDS.map((b, i) => (
            <li key={b} className="flex justify-center">
              <Reveal delay={i * 50}>
                <span className="font-head text-[20px] font-extrabold tracking-[0.06em] text-[#aab1b7] transition-colors hover:text-navy">{b}</span>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------------- offers */
const OFFERS = [
  {
    tag: "تقييم السمع",
    title: "عرض التقييم والاستشارة",
    text: "اسأل عن العروض المتاحة على تقييم السمع والاستشارة واختيار الفئة المناسبة.",
    pts: ["استفسار سريع عبر واتساب", "تأكيد التفاصيل قبل الحجز"],
    msg: "تقييم السمع والاستشارة",
    Ico: IconCheck,
  },
  {
    tag: "خدمة وصيانة",
    title: "عروض العناية بالسماعة",
    text: "اسأل عن باقات التنظيف والفحص والصيانة الدورية المتاحة لمعينك السمعي.",
    pts: ["تحديد نوع الجهاز والعطل", "تأكيد تكلفة الخدمة قبل التنفيذ"],
    msg: "الصيانة والتنظيف",
    Ico: IconAlert,
  },
  {
    tag: "بطاريات وملحقات",
    title: "باقات البطاريات",
    text: "أرسل رقم البطارية أو صورة العبوة واسأل عن الباقات المتوفرة حاليًا.",
    pts: ["مقاسات 10 و312 و13 و675", "تأكيد النوع والتوافر قبل الطلب"],
    msg: "البطاريات والملحقات",
    Ico: IconBattery,
  },
];

export function Offers() {
  const [code, setCode] = useState("");
  const suffix = code.trim() ? ` (كود العرض: ${code.trim()})` : "";

  return (
    <section id="offers" className="bg-mist">
      <div className="mx-auto max-w-[1370px] px-4 py-16 lg:px-8 lg:py-24">
        <Reveal className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div className="max-w-[720px]">
            <span className="label">فرص وخدمات مميزة</span>
            <h2 className="sec-title mt-2">اسأل عن العروض الحالية</h2>
            <span className="sec-rule" />
            <p className="mt-5 text-[16px] leading-[2]">
              تتغير العروض حسب المنتجات والتوافر. اختر الخدمة وسنخبرك بالتفاصيل المتاحة دون وضع أسعار أو خصومات غير
              مؤكدة.
            </p>
          </div>
          <span className="inline-flex items-center gap-2 self-start bg-white px-4 py-2 text-[14px] font-bold text-ink md:self-auto">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-60" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-600" />
            </span>
            الاستفسار متاح الآن
          </span>
        </Reveal>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {OFFERS.map((o, i) => (
            <Reveal key={o.title} delay={i * 100} as="article" className="flex flex-col border-t-4 border-brand bg-white p-7">
              <span className="text-[13px] font-bold text-blue">{o.tag}</span>
              <h3 className="mt-1 text-[21px] font-bold text-ink">{o.title}</h3>
              <p className="mt-2 text-[14.5px] leading-[1.9]">{o.text}</p>
              <ul className="mt-4 space-y-2">
                {o.pts.map((p) => (
                  <li key={p} className="flex items-center gap-3 text-[14.5px]">
                    <IconCheck width={15} height={15} className="shrink-0 text-blue" strokeWidth={2.6} />
                    {p}
                  </li>
                ))}
              </ul>
              <a
                href={wa(`مرحبًا صله تون، أريد معرفة العروض الحالية على ${o.msg}${suffix}`)}
                target="_blank"
                rel="noopener noreferrer"
                className="link-arrow mt-auto pt-6"
              >
                اعرف العرض المتاح <IconArrow width={16} height={16} />
              </a>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-8 flex flex-col gap-4 bg-navy p-6 text-white sm:flex-row sm:items-center">
          <span className="flex h-12 w-12 shrink-0 items-center justify-center bg-white/15 text-sky">
            <IconGift width={24} height={24} />
          </span>
          <div className="flex-1">
            <p className="text-[17px] font-bold">هل لديك كود عرض من صله تون؟</p>
            <p className="text-[14px] text-white/80">اكتبه هنا وسنرسله مع طلبك للتحقق منه.</p>
          </div>
          <input
            value={code}
            onChange={(e) => setCode(e.target.value)}
            placeholder="كود العرض"
            aria-label="كود العرض"
            className={`${inputCls} sm:max-w-[240px]`}
          />
        </Reveal>

        <p className="mt-5 text-[13.5px] leading-[1.9]">
          تخضع العروض للتوافر والمدة والشروط التي يؤكدها فريق صله تون وقت التواصل.
        </p>
      </div>
    </section>
  );
}
