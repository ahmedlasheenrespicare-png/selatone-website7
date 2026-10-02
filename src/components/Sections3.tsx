import { useState } from "react";
import Reveal from "./Reveal";
import { IconArrow, IconCheck, IconChat, IconMinus, IconPhone, IconPlus, IconSend, IconStar, IconShield } from "./Icons";
import { IMG, PHONE_DISPLAY, PHONE_TEL, inputCls, openWa, wa } from "../data";

/* -------------------------------------------------------------- articles */
const ARTICLES = [
  {
    cat: "صحة السمع",
    time: "4 دقائق قراءة",
    title: "7 علامات تشير إلى ضرورة فحص السمع",
    text: "قد يبدأ ضعف السمع بصورة تدريجية، لذلك تساعد ملاحظة العلامات المبكرة على طلب التقييم في الوقت المناسب.",
    paths: ["M46 65c0-10 13-12 13-30A19 19 0 0 0 21 35c0 9 5 13 10 17 3 3 3 8 3 13", "M32 35a8 8 0 0 1 16 0c0 6-5 8-8 11"],
  },
  {
    cat: "العناية بالسماعة",
    time: "3 دقائق قراءة",
    title: "كيف تحافظ على المعين السمعي؟",
    text: "التنظيف الصحيح والحماية من الرطوبة والحرارة يساعدان على الحفاظ على أداء السماعة وتقليل الأعطال.",
    paths: ["M28 17c18-8 34 5 31 23-2 10-8 14-10 23-2 6-6 8-11 6-5-3-4-9-2-14 3-8 8-12 7-21-1-8-6-11-13-10-8 1-13 8-12 16", "M31 61 19 68m3-14-10 1"],
  },
  {
    cat: "التقنية",
    time: "3 دقائق قراءة",
    title: "توصيل السماعة بالهاتف: ما الفائدة؟",
    text: "تتيح بعض الطرازات استقبال المكالمات والتحكم في الإعدادات والاستماع إلى المحتوى مباشرة.",
    paths: ["M21 12h38a8 8 0 0 1 8 8v40a8 8 0 0 1-8 8H21a8 8 0 0 1-8-8V20a8 8 0 0 1 8-8z", "M34 18h12M28 34c7-7 17-7 24 0M32 40c5-5 11-5 16 0M38 48h4"],
  },
  {
    cat: "الاستخدام اليومي",
    time: "4 دقائق قراءة",
    title: "نصائح للتأقلم مع السماعة الجديدة",
    text: "البدء التدريجي والمتابعة مع المتخصص يساعدان الدماغ على التأقلم مع الأصوات بصورة أكثر راحة.",
    paths: ["M18 38h44v28H18zM25 38V25a15 15 0 0 1 30 0v13", "M31 51h18M40 45v12"],
  },
];

export function Articles() {
  return (
    <section id="articles" className="mx-auto max-w-[1370px] px-4 py-16 lg:px-8 lg:py-24">
      <Reveal className="mx-auto max-w-[780px] text-center">
        <span className="label">دليل العناية بالسمع</span>
        <h2 className="sec-title mt-2">نصائح ومعلومات مفيدة</h2>
        <span className="sec-rule center" />
        <p className="mt-6 text-[16px] leading-[2]">محتوى مبسط يساعدك على فهم السمع والعناية بالمعينات السمعية بصورة أفضل.</p>
      </Reveal>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {ARTICLES.map((a, i) => (
          <Reveal key={a.title} delay={i * 90} as="article" className="group flex flex-col border border-rule bg-white transition-shadow hover:shadow-[0_18px_40px_rgba(31,45,61,0.12)]">
            <div className="art-panel relative flex h-[150px] items-center justify-center">
              <svg viewBox="0 0 80 80" width="84" height="84" fill="none" stroke="#fff" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="transition-transform duration-500 group-hover:scale-110">
                {a.paths.map((d) => (
                  <path key={d} d={d} />
                ))}
              </svg>
              <span className="absolute start-0 top-0 bg-brand px-3 py-1.5 text-[13px] font-bold text-ink">{a.cat}</span>
            </div>
            <div className="flex flex-1 flex-col p-6">
              <small className="text-[12.5px] font-semibold text-body">{a.time}</small>
              <h3 className="mt-1 text-[18.5px] font-bold leading-snug text-ink">{a.title}</h3>
              <p className="mt-2 text-[14.5px] leading-[1.9]">{a.text}</p>
            </div>
          </Reveal>
        ))}
      </div>
      <p className="mt-8 text-center text-[13.5px]">المحتوى للتوعية العامة ولا يغني عن التقييم أو الاستشارة المتخصصة.</p>
    </section>
  );
}

/* --------------------------------------------------- reviews + callback */
const ASSURANCES = [
  { t: "رأيك يصل مباشرة", s: "يُرسل إلى فريق صله تون عبر واتساب." },
  { t: "خصوصيتك محفوظة", s: "لن ننشر رأيك أو اسمك دون موافقتك." },
  { t: "تقييمات حقيقية فقط", s: "لا نستخدم أسماء أو تجارب غير موثقة." },
];

export function ReviewsCallback() {
  const [rating, setRating] = useState(5);
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");

  const [cbName, setCbName] = useState("");
  const [cbPhone, setCbPhone] = useState("");
  const [cbTime, setCbTime] = useState("صباحًا");

  return (
    <section id="reviews" className="bg-mist">
      <div className="mx-auto grid max-w-[1370px] gap-8 px-4 py-16 lg:grid-cols-2 lg:gap-12 lg:px-8 lg:py-24">
        {/* reviews */}
        <Reveal>
          <span className="label">صوت عملائنا يهمنا</span>
          <h2 className="sec-title mt-2">شاركنا تجربتك مع صله تون</h2>
          <span className="sec-rule" />
          <p className="mt-5 text-[16px] leading-[2]">
            ساعدنا على تطوير خدماتنا، وساعد الآخرين على اتخاذ قرارهم بثقة. يمكنك إرسال تقييمك في أقل من دقيقة.
          </p>
          <ul className="mt-5 space-y-3">
            {ASSURANCES.map((a) => (
              <li key={a.t} className="flex items-start gap-3">
                <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center bg-blue text-white">
                  <IconCheck width={14} height={14} strokeWidth={2.6} />
                </span>
                <span>
                  <strong className="block text-[15.5px] text-ink">{a.t}</strong>
                  <span className="text-[14px]">{a.s}</span>
                </span>
              </li>
            ))}
          </ul>

          <form
            className="mt-6 space-y-4 border border-rule bg-white p-6"
            onSubmit={(e) => {
              e.preventDefault();
              openWa(`مرحبًا صله تون، هذا تقييمي لتجربتي معكم.\nالاسم: ${name || "غير مذكور"}\nالتقييم: ${rating} من 5\nالتعليق: ${comment}`);
            }}
          >
            <div>
              <span className="mb-1.5 block text-[14px] font-bold text-ink">تقييمك</span>
              <div className="flex gap-1" role="radiogroup" aria-label="التقييم">
                {[1, 2, 3, 4, 5].map((n) => (
                  <button
                    type="button"
                    key={n}
                    role="radio"
                    aria-checked={rating === n}
                    aria-label={`${n} من 5`}
                    onClick={() => setRating(n)}
                    className={`p-1 transition ${n <= rating ? "text-[#e0a100]" : "text-[#c5cbd0]"} hover:scale-110`}
                  >
                    <IconStar filled={n <= rating} width={28} height={28} />
                  </button>
                ))}
              </div>
            </div>
            <input value={name} onChange={(e) => setName(e.target.value)} className={inputCls} placeholder="اسمك (اختياري)" aria-label="الاسم" />
            <textarea required value={comment} onChange={(e) => setComment(e.target.value)} rows={3} className={`${inputCls} h-auto py-3`} placeholder="اكتب رأيك هنا" aria-label="رأيك" />
            <button type="submit" className="btn btn-navy w-full">
              <IconSend width={17} height={17} /> أرسل تقييمك عبر واتساب
            </button>
          </form>
        </Reveal>

        {/* callback */}
        <Reveal delay={120}>
          <div id="callback" className="h-full bg-navy p-7 text-white sm:p-10">
            <p className="text-[14px] font-bold text-sky">ليس لديك وقت الآن؟</p>
            <h2 className="mt-2 text-[clamp(24px,2.6vw,34px)] font-extrabold leading-snug text-white">اطلب معاودة الاتصال</h2>
            <span className="sec-rule" />
            <p className="mt-5 text-[16px] leading-[2] text-white/85">
              اترك بياناتك والوقت المناسب، وأرسل الطلب مباشرة إلى فريق صله تون عبر واتساب.
            </p>
            <form
              className="mt-6 space-y-4"
              onSubmit={(e) => {
                e.preventDefault();
                openWa(`مرحبًا صله تون، أرجو معاودة الاتصال بي.\nالاسم: ${cbName}\nرقم الهاتف: ${cbPhone}\nالوقت المناسب: ${cbTime}`);
              }}
            >
              <input required value={cbName} onChange={(e) => setCbName(e.target.value)} className={inputCls} placeholder="الاسم" aria-label="الاسم" />
              <input required type="tel" inputMode="tel" value={cbPhone} onChange={(e) => setCbPhone(e.target.value)} className={inputCls} placeholder="رقم الهاتف" aria-label="رقم الهاتف" dir="rtl" />
              <select value={cbTime} onChange={(e) => setCbTime(e.target.value)} className={inputCls} aria-label="الوقت المناسب">
                <option>صباحًا</option>
                <option>ظهرًا</option>
                <option>مساءً</option>
              </select>
              <button type="submit" className="btn btn-brand w-full">
                <IconChat width={17} height={17} /> اطلب معاودة الاتصال
              </button>
            </form>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------- FAQ */
const FAQS = [
  { q: "متى أحتاج إلى فحص السمع؟", a: "إذا كنت تطلب تكرار الكلام، أو ترفع صوت التلفاز، أو تجد صعوبة في متابعة الحديث وسط الضوضاء، فمن الأفضل إجراء تقييم سمع متخصص." },
  { q: "ما الفرق بين BTE وITE وRIC؟", a: "توضع BTE خلف الأذن، بينما تُصنع ITE لتوضع داخل الأذن، أما RIC فيوجد مستقبلها داخل قناة الأذن. يعتمد الاختيار على نتيجة الفحص ودرجة فقدان السمع والراحة المطلوبة." },
  { q: "هل يمكنني اختيار المعين السمعي حسب الشكل فقط؟", a: "لا. يلزم تقييم السمع وحالة الأذن ونمط الحياة قبل الاختيار. الشكل عامل مهم، لكنه ليس العامل الوحيد في تحديد الحل المناسب." },
  { q: "كم تستغرق فترة التأقلم مع السماعة؟", a: "تختلف المدة من شخص لآخر. غالبًا يحتاج المستخدم إلى فترة تدريجية مع متابعة وضبط البرمجة للوصول إلى تجربة أكثر راحة ووضوحًا." },
  { q: "كيف أتابع حالة سماعتي وصيانتها؟", a: "يُنصح بالتنظيف الدوري والمتابعة وفق تعليمات المتخصص، والتواصل عند انخفاض الصوت أو ظهور صفير أو توقف السماعة عن العمل." },
  { q: "هل توجد سماعات قابلة للشحن وتتصل بالهاتف؟", a: "نعم، تتوفر فئات قابلة للشحن وتدعم الاتصال بالهواتف والتطبيقات، لكن توافر الميزة يعتمد على الطراز وتوافق الهاتف." },
  { q: "كيف أحمي سماعتي من التلف؟", a: "احفظها بعيدًا عن الماء والحرارة، ونظفها بالأدوات المخصصة، ولا تستخدم مواد كيميائية، واحفظها في علبتها عند عدم الاستخدام." },
  { q: "هل اختبار السمع على الموقع يغني عن الفحص؟", a: "لا، هو اختبار استرشادي فقط للمساعدة في ملاحظة بعض المؤشرات، ولا يغني عن فحص السمع والتقييم لدى متخصص." },
];

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="mx-auto max-w-[1370px] px-4 py-16 lg:px-8 lg:py-24">
      <div className="grid gap-10 lg:grid-cols-[1fr_1.6fr] lg:gap-16">
        <Reveal>
          <span className="label">معلومات تهمك</span>
          <h2 className="sec-title mt-2">الأسئلة الشائعة</h2>
          <span className="sec-rule" />
          <p className="mt-6 text-[16px] leading-[2]">إجابات مختصرة عن فحص السمع، اختيار المعين السمعي، الاستخدام والصيانة.</p>
          <a
            href={wa("مرحبًا صله تون، لدي سؤال عن حلول السمع")}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-navy mt-6"
          >
            <IconChat width={17} height={17} /> لدي سؤال آخر
          </a>
        </Reveal>

        <Reveal delay={100}>
          <ul className="border-t border-rule">
            {FAQS.map((f, i) => {
              const isOpen = open === i;
              return (
                <li key={f.q} className="border-b border-rule">
                  <h3>
                    <button
                      onClick={() => setOpen(isOpen ? null : i)}
                      aria-expanded={isOpen}
                      aria-controls={`faq-${i}`}
                      className="flex w-full items-center justify-between gap-4 py-5 text-start text-[17px] font-bold text-ink transition-colors hover:text-blue"
                    >
                      {f.q}
                      <span className={`flex h-8 w-8 shrink-0 items-center justify-center transition-colors ${isOpen ? "bg-blue text-white" : "bg-mist text-navy"}`}>
                        {isOpen ? <IconMinus width={16} height={16} /> : <IconPlus width={16} height={16} />}
                      </span>
                    </button>
                  </h3>
                  <div
                    id={`faq-${i}`}
                    role="region"
                    className={`grid transition-[grid-template-rows] duration-300 ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
                  >
                    <div className="overflow-hidden">
                      <p className="pb-5 pe-12 text-[15.5px] leading-[2]">{f.a}</p>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}

/* --------------------------------------------------------------- contact */
export function Contact() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [topic, setTopic] = useState("تقييم السمع");
  const [msg, setMsg] = useState("");

  return (
    <section id="contact" className="relative overflow-hidden bg-ink">
      <img src={IMG.cta} alt="" className="absolute inset-0 h-full w-full object-cover opacity-25" loading="lazy" />
      <div className="scrim-cta absolute inset-0" />

      <div className="relative mx-auto grid max-w-[1370px] items-center gap-10 px-4 py-16 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:py-24">
        <Reveal>
          <IconShield width={34} height={34} className="text-sky" />
          <h2 className="mt-4 text-[clamp(26px,3vw,40px)] font-extrabold leading-snug text-white">ابدأ رحلتك نحو سمع أفضل</h2>
          <span className="sec-rule" />
          <p className="mt-5 max-w-[520px] text-[16px] leading-[2] text-white/85">
            أرسل بياناتك وسيتواصل معك فريق صله تون لمساعدتك في اختيار الخدمة المناسبة وحجز موعد.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href={`tel:${PHONE_TEL}`} className="btn btn-ghost">
              <IconPhone width={17} height={17} />
              <span dir="ltr">{PHONE_DISPLAY}</span>
            </a>
            <a
              href={wa("مرحبًا صله تون، أريد التحدث إلى متخصص")}
              target="_blank"
              rel="noopener noreferrer"
              className="btn bg-white text-navy hover:bg-sky"
            >
              <IconChat width={17} height={17} /> واتساب
            </a>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <form
            className="space-y-4 bg-white p-6 sm:p-8"
            onSubmit={(e) => {
              e.preventDefault();
              openWa(`مرحبًا صله تون، أريد حجز موعد.\nالاسم: ${name}\nرقم الهاتف: ${phone}\nالخدمة المطلوبة: ${topic}\nرسالة: ${msg || "—"}`);
            }}
          >
            <h3 className="text-[22px] font-bold text-ink">احجز موعدك</h3>
            <div className="grid gap-4 sm:grid-cols-2">
              <input required value={name} onChange={(e) => setName(e.target.value)} className={inputCls} placeholder="الاسم" aria-label="الاسم" />
              <input required type="tel" inputMode="tel" value={phone} onChange={(e) => setPhone(e.target.value)} className={inputCls} placeholder="رقم الهاتف" aria-label="رقم الهاتف" />
            </div>
            <select value={topic} onChange={(e) => setTopic(e.target.value)} className={inputCls} aria-label="الخدمة المطلوبة">
              <option>تقييم السمع</option>
              <option>اختيار معين سمعي</option>
              <option>صيانة أو برمجة</option>
              <option>بطاريات وملحقات</option>
              <option>استفسار عن العروض</option>
            </select>
            <textarea value={msg} onChange={(e) => setMsg(e.target.value)} rows={3} className={`${inputCls} h-auto py-3`} placeholder="رسالتك (اختياري)" aria-label="رسالتك" />
            <button type="submit" className="btn btn-brand w-full">
              أرسل الطلب عبر واتساب <IconArrow width={16} height={16} />
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
