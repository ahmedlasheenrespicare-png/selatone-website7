import { useMemo, useState } from "react";
import Reveal, { Counter } from "./Reveal";
import { IconArrow, IconCheck, IconChat, IconRefresh, IconAlert } from "./Icons";
import { IMG, wa, inputCls } from "../data";

/* ---------------------------------------------------------------- about */
const ABOUT_POINTS = ["جودة المنتجات", "خدمة موثوقة", "فريق متخصص", "اهتمام ومتابعة"];

export function About() {
  return (
    <section id="about" className="mx-auto max-w-[1370px] px-4 py-16 lg:px-8 lg:py-24">
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <Reveal className="relative">
          <div className="grid grid-cols-2 gap-4">
            <img src={IMG.aboutA} alt="استشارة سمعية لطفلة مع والدتها" className="aspect-[4/5] w-full object-cover" loading="lazy" />
            <img
              src={IMG.aboutB}
              alt="فحص الأذن بالمنظار الطبي"
              className="aspect-[4/5] w-full object-cover lg:translate-y-8"
              loading="lazy"
            />
          </div>
          <div className="absolute -bottom-6 start-4 hidden bg-brand px-6 py-4 text-ink sm:block lg:-start-6 lg:bottom-8">
            <p className="text-[36px] font-black leading-none tabular-nums" dir="ltr">
              2014
            </p>
            <p className="mt-1 text-[13px] font-bold text-ink/80">عام التأسيس</p>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <span className="label">من نحن</span>
          <h2 className="sec-title mt-2">خبرة نضعها في خدمة سمعك</h2>
          <span className="sec-rule" />
          <p className="mt-6 text-[16px] leading-[2]">
            صله تون شركة طبية تأسست عام 2014 ومتخصصة في حلول السمع. نسعى للوصول بخدماتنا إلى مختلف محافظات مصر وتقديم
            حلول فعالة بمعايير جودة مرتفعة.
          </p>
          <ul className="mt-5 grid gap-3 sm:grid-cols-2">
            {ABOUT_POINTS.map((p) => (
              <li key={p} className="flex items-center gap-3.5 border border-rule bg-mist px-4 py-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center bg-blue text-white">
                  <IconCheck width={14} height={14} strokeWidth={2.6} />
                </span>
                <span className="text-[15px] font-bold text-ink">{p}</span>
              </li>
            ))}
          </ul>
          <p className="mt-5 text-[15px]">
            <strong className="text-ink">قيمنا:</strong> الوضوح، الثقة، الولاء، الاعتزاز والاحترام.
          </p>
          <div className="mt-7">
            <a
              href={wa("مرحبًا صله تون، أريد التحدث إلى متخصص")}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-navy"
            >
              <IconChat width={17} height={17} /> تحدث إلى متخصص
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------------- stats */
const STATS = [
  { label: "عامًا من الخبرة", value: 12, prefix: "+" },
  { label: "عام التأسيس", value: 2014, prefix: "" },
  { label: "علامات تجارية موثوقة", value: 10, prefix: "" },
  { label: "مقاسات بطاريات متاحة", value: 4, prefix: "" },
];

export function Stats() {
  return (
    <section className="bg-navy">
      <div className="mx-auto grid max-w-[1370px] grid-cols-2 gap-y-10 px-4 py-14 lg:grid-cols-4 lg:px-8 lg:py-16">
        {STATS.map((s, i) => (
          <Reveal key={s.label} delay={i * 90} className="flex flex-col items-center text-center">
            <div className="relative">
              <svg viewBox="0 -2 122 142" width="112" height="130" aria-hidden="true">
                <path d="M 0,103.5 0,34.5 60,0 120,34.5 120,103.5 60,138Z" fill="none" stroke="rgba(255,255,255,0.45)" strokeWidth="2" />
              </svg>
              <span className="absolute inset-0 flex items-center justify-center pb-3 text-[30px] font-extrabold text-white tabular-nums">
                <Counter to={s.value} prefix={s.prefix} />
              </span>
            </div>
            <p className="mt-4 text-[14.5px] font-bold text-sky">{s.label}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* ----------------------------------------------------------------- quiz */
const QUESTIONS = [
  "هل تطلب من المتحدث تكرار كلامه أكثر من مرة؟",
  "هل ترفع صوت التلفاز أكثر مما يرفعه الآخرون؟",
  "هل تجد صعوبة في فهم الحديث وسط الضوضاء أو الأماكن المزدحمة؟",
  "هل يصعب عليك سماع المكالمات الهاتفية بوضوح؟",
  "هل يلاحظ المقربون منك أنك لا تسمع بوضوح؟",
];
const OPTIONS = [
  { label: "غالبًا", score: 2 },
  { label: "أحيانًا", score: 1 },
  { label: "نادرًا", score: 0 },
];

function tier(score: number) {
  if (score <= 3)
    return {
      title: "مؤشرات منخفضة",
      text: "إجاباتك لا تُظهر مؤشرات واضحة حاليًا. إذا لاحظت أي تغيّر في سمعك مستقبلًا فاطلب تقييمًا متخصصًا.",
    };
  if (score <= 6)
    return {
      title: "مؤشرات متوسطة",
      text: "ظهرت بعض المؤشرات التي تستحق الانتباه. من الأفضل حجز تقييم سمع متخصص لمعرفة السبب والخطوة المناسبة.",
    };
  return {
    title: "مؤشرات مرتفعة",
    text: "إجاباتك تشير إلى صعوبات متكررة في السمع. ننصحك بإجراء تقييم متخصص في أقرب وقت لتحديد الحل الأنسب.",
  };
}

export function HearingTest() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const done = step >= QUESTIONS.length;
  const score = answers.reduce((a, b) => a + b, 0);
  const result = tier(score);

  const answer = (s: number) => {
    setAnswers((a) => [...a, s]);
    setStep((n) => n + 1);
  };
  const reset = () => {
    setStep(0);
    setAnswers([]);
  };

  return (
    <section id="hearing-test" className="mx-auto max-w-[1370px] px-4 pb-16 lg:px-8 lg:pb-24">
      <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <span className="label">اختبار استرشادي</span>
          <h2 className="sec-title mt-2">اختبر سمعك في دقيقتين</h2>
          <span className="sec-rule" />
          <p className="mt-6 text-[16px] leading-[2]">
            أجب عن خمسة أسئلة قصيرة واحصل على نتيجة استرشادية تساعدك على معرفة الخطوة التالية.
          </p>

          <div className="mt-6 border border-rule bg-white">
            <div className="h-[6px] w-full bg-mist" role="progressbar" aria-valuemin={0} aria-valuemax={QUESTIONS.length} aria-valuenow={Math.min(step, QUESTIONS.length)}>
              <div className="h-full bg-blue transition-[width] duration-500" style={{ width: `${(Math.min(step, QUESTIONS.length) / QUESTIONS.length) * 100}%` }} />
            </div>
            <div className="p-6 sm:p-8">
              {!done ? (
                <>
                  <p className="text-[13px] font-bold text-blue">
                    السؤال {step + 1} من {QUESTIONS.length}
                  </p>
                  <h3 className="mt-2 min-h-[64px] text-[20px] font-bold leading-snug text-ink">{QUESTIONS[step]}</h3>
                  <div className="mt-5 grid gap-3 sm:grid-cols-3">
                    {OPTIONS.map((o) => (
                      <button
                        key={o.label}
                        onClick={() => answer(o.score)}
                        className="border border-rule bg-white px-4 py-3 text-[15px] font-bold text-ink transition hover:border-blue hover:bg-blue hover:text-white"
                      >
                        {o.label}
                      </button>
                    ))}
                  </div>
                </>
              ) : (
                <div aria-live="polite">
                  <p className="text-[13px] font-bold text-blue">النتيجة الاسترشادية</p>
                  <h3 className="mt-2 text-[24px] font-extrabold text-ink">{result.title}</h3>
                  <p className="mt-2 text-[15px] leading-[1.9]">{result.text}</p>
                  <p className="mt-3 flex items-start gap-2 bg-mist p-3 text-[13.5px] leading-[1.8]">
                    <IconAlert width={18} height={18} className="mt-1 shrink-0 text-amber" />
                    هذا اختبار استرشادي فقط ولا يغني عن فحص السمع والتقييم لدى متخصص.
                  </p>
                  <div className="mt-5 flex flex-wrap gap-3">
                    <a
                      href={wa(`مرحبًا صله تون، أجريت اختبار السمع الاسترشادي وكانت النتيجة: ${result.title}. أريد حجز تقييم متخصص`)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-brand"
                    >
                      <IconChat width={17} height={17} /> احجز تقييمًا عبر واتساب
                    </a>
                    <button onClick={reset} className="btn btn-line">
                      <IconRefresh width={16} height={16} /> أعد الاختبار
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </Reveal>

        <Reveal delay={120} className="relative">
          <img src={IMG.quiz} alt="زوجان مسنّان يتحدثان بارتياح في المنزل" className="aspect-[4/3] h-full w-full object-cover" loading="lazy" />
          <div className="scrim-card absolute inset-x-0 bottom-0 p-7">
            <p className="text-[14px] font-bold text-sky">ابدأ بالاطمئنان</p>
            <p className="mt-1 text-[20px] font-bold leading-snug text-white">السمع الواضح يعيد لك متعة الحديث مع من تحب.</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------- products */
const PRODUCTS = [
  {
    code: "BTE",
    title: "سماعات خلف الأذن",
    text: "قوية وعملية، تناسب درجات متعددة من فقدان السمع، وتتميز بسهولة الاستخدام والصيانة.",
    points: ["خيارات قابلة للشحن", "ملائمة للأطفال والكبار", "إمكانية الاتصال اللاسلكي"],
    msg: "سماعات خلف الأذن BTE",
  },
  {
    code: "RIC",
    badge: "الأكثر طلبًا",
    title: "مستقبل داخل قناة الأذن",
    text: "تصميم أنيق وخفيف يمنح صوتًا طبيعيًا وراحة عالية مع تقنيات اتصال حديثة.",
    points: ["حجم صغير ومريح", "صوت واضح وطبيعي", "تطبيقات للتحكم"],
    msg: "سماعات RIC",
  },
  {
    code: "ITE",
    title: "سماعات داخل الأذن",
    text: "تُصنع لتناسب شكل الأذن، وتوفر سهولة في الارتداء ومظهرًا أكثر خصوصية.",
    points: ["تصميم مخصص للأذن", "خيارات صغيرة وغير ظاهرة", "تحكم سهل ومباشر"],
    msg: "سماعات داخل الأذن ITE",
  },
];

export function Products() {
  return (
    <section id="products" className="bg-mist">
      <div className="mx-auto max-w-[1370px] px-4 py-16 lg:px-8 lg:py-24">
        <Reveal className="mx-auto max-w-[780px] text-center">
          <span className="label">حلول تناسب كل احتياج</span>
          <h2 className="sec-title mt-2">دليل المعينات السمعية</h2>
          <span className="sec-rule center" />
          <p className="mt-6 text-[16px] leading-[2]">
            تعرّف على أشهر فئات المعينات السمعية. يحدد المتخصص الخيار الأنسب بعد تقييم السمع ونمط الاستخدام.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {PRODUCTS.map((p, i) => (
            <Reveal key={p.code} delay={i * 120} as="article" className="group flex flex-col bg-white">
              <div className="art-panel relative flex h-[190px] items-center justify-center overflow-hidden">
                <svg className="absolute inset-0 h-full w-full opacity-25" viewBox="0 0 300 190" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
                  {[40, 70, 100, 130, 160].map((r) => (
                    <circle key={r} cx="150" cy="95" r={r} fill="none" stroke="#fff" strokeWidth="1" />
                  ))}
                </svg>
                <span dir="ltr" className="relative text-[64px] font-black tracking-[0.12em] text-white transition-transform duration-500 group-hover:scale-110">
                  {p.code}
                </span>
                {p.badge && (
                  <span className="absolute end-0 top-0 bg-amber px-3 py-1.5 text-[13px] font-bold text-white">{p.badge}</span>
                )}
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-[21px] font-bold text-ink">{p.title}</h3>
                <p className="mt-2 text-[15px] leading-[1.9]">{p.text}</p>
                <ul className="mt-4 space-y-2.5">
                  {p.points.map((pt) => (
                    <li key={pt} className="flex items-center gap-3 border-b border-rule pb-2.5 text-[14.5px]">
                      <IconCheck width={16} height={16} className="shrink-0 text-blue" strokeWidth={2.4} />
                      {pt}
                    </li>
                  ))}
                </ul>
                <a
                  href={wa(`مرحبًا صله تون، أريد الاستفسار عن ${p.msg}`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-arrow mt-auto pt-5"
                >
                  استفسر عبر واتساب <IconArrow width={16} height={16} />
                </a>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-10 border-s-4 border-brand bg-white p-5 text-[15px] leading-[1.9]">
          <strong className="text-ink">ملاحظة مهمة:</strong> لا يمكن اختيار المعين السمعي اعتمادًا على الشكل فقط. يلزم
          إجراء تقييم متخصص لتحديد النوع والبرمجة المناسبين.
        </Reveal>
      </div>
    </section>
  );
}

/* --------------------------------------------------------------- finder */
type Age = "child" | "adult" | "senior";
type Priority = "discreet" | "easy" | "natural";
type Power = "battery" | "rechargeable";

const AGE_LABEL: Record<Age, string> = { child: "طفل أو مراهق", adult: "بالغ", senior: "كبير سن" };
const PRIORITY_LABEL: Record<Priority, string> = {
  discreet: "مظهر أقل ظهورًا",
  easy: "سهولة الاستخدام والصيانة",
  natural: "صوت طبيعي وتقنيات حديثة",
};
const POWER_LABEL: Record<Power, string> = { battery: "بطاريات عادية", rechargeable: "قابلة للشحن" };

function recommend(age: Age, priority: Priority, power: Power, mobile: boolean) {
  let code: "BTE" | "RIC" | "ITE" = "RIC";
  let reason = "تصميم خفيف وأنيق مع صوت طبيعي، ويُعد شائعًا في الطرازات الحديثة التي تدعم الاتصال.";

  if (age === "child") {
    code = "BTE";
    reason = "تُعد خلف الأذن خيارًا شائعًا للأطفال لسهولة الاستخدام والصيانة وإمكانية تعديلها مع النمو.";
  } else if (priority === "easy") {
    code = "BTE";
    reason = "تتميز بسهولة الاستخدام والصيانة، وهي مناسبة للكبار الذين يفضلون جهازًا عمليًا وواضح التحكم.";
  } else if (priority === "discreet" && !mobile) {
    code = "ITE";
    reason = "تُصنع لتناسب شكل الأذن وتمنح مظهرًا أكثر خصوصية، وتناسب من لا يحتاج الاتصال الدائم بالهاتف.";
  } else if (priority === "discreet" && mobile) {
    code = "RIC";
    reason = "تجمع بين مظهر خفيف وإمكانية الاتصال بالموبايل المتوفرة في كثير من الطرازات الحديثة.";
  }

  const notes: string[] = [];
  if (power === "rechargeable") {
    notes.push(
      code === "ITE"
        ? "توفر الشحن في السماعات داخل الأذن يختلف حسب الطراز، وسيؤكده المتخصص."
        : "تتوفر طرازات قابلة للشحن في هذه الفئة."
    );
  }
  if (mobile && code === "ITE") notes.push("الاتصال بالموبايل في ITE يعتمد على الطراز والحجم.");
  if (mobile && code !== "ITE") notes.push("الاتصال بالهاتف متاح في طرازات محددة، ويلزم التأكد من توافق هاتفك.");
  return { code, reason, notes };
}

function Select<T extends string>({
  label,
  value,
  onChange,
  options,
}: {
  label: string;
  value: T;
  onChange: (v: T) => void;
  options: { value: T; label: string }[];
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-[14px] font-bold text-ink">{label}</span>
      <select value={value} onChange={(e) => onChange(e.target.value as T)} className={inputCls}>
        {options.map((o) => (
          <option key={o.value} value={o.value}>
            {o.label}
          </option>
        ))}
      </select>
    </label>
  );
}

export function HearingFinder() {
  const [age, setAge] = useState<Age>("adult");
  const [priority, setPriority] = useState<Priority>("natural");
  const [power, setPower] = useState<Power>("rechargeable");
  const [mobile, setMobile] = useState<"yes" | "no">("yes");

  const rec = useMemo(() => recommend(age, priority, power, mobile === "yes"), [age, priority, power, mobile]);
  const info = PRODUCTS.find((p) => p.code === rec.code)!;

  const message = `مرحبًا صله تون، استخدمت مساعد الاختيار وكانت النتيجة المبدئية: ${rec.code} (${info.title}). الفئة العمرية: ${AGE_LABEL[age]}، الأولوية: ${PRIORITY_LABEL[priority]}، الطاقة: ${POWER_LABEL[power]}، الاتصال بالموبايل: ${mobile === "yes" ? "مهم" : "غير مهم"}. أريد مناقشة النتيجة مع متخصص.`;

  return (
    <section id="hearing-finder" className="mx-auto max-w-[1370px] px-4 py-16 lg:px-8 lg:py-24">
      <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <span className="label">مساعد الاختيار</span>
          <h2 className="sec-title mt-2">ما الفئة الأقرب لاحتياجاتك؟</h2>
          <span className="sec-rule" />
          <p className="mt-6 text-[16px] leading-[2]">
            حدد تفضيلاتك لتحصل على اقتراح مبدئي يساعدك قبل التحدث إلى المتخصص.
          </p>
          <p className="mt-2 text-[14.5px] leading-[1.9]">
            النتيجة استرشادية ولا تعتمد على درجة السمع؛ القرار النهائي يكون بعد التقييم المتخصص.
          </p>

          <form className="mt-7 grid gap-4 sm:grid-cols-2" onSubmit={(e) => e.preventDefault()}>
            <Select<Age>
              label="الفئة العمرية"
              value={age}
              onChange={setAge}
              options={[
                { value: "child", label: AGE_LABEL.child },
                { value: "adult", label: AGE_LABEL.adult },
                { value: "senior", label: AGE_LABEL.senior },
              ]}
            />
            <Select<Priority>
              label="الأولوية الأساسية"
              value={priority}
              onChange={setPriority}
              options={[
                { value: "discreet", label: PRIORITY_LABEL.discreet },
                { value: "easy", label: PRIORITY_LABEL.easy },
                { value: "natural", label: PRIORITY_LABEL.natural },
              ]}
            />
            <Select<Power>
              label="طريقة الطاقة المفضلة"
              value={power}
              onChange={setPower}
              options={[
                { value: "rechargeable", label: POWER_LABEL.rechargeable },
                { value: "battery", label: POWER_LABEL.battery },
              ]}
            />
            <Select<"yes" | "no">
              label="الاتصال بالموبايل"
              value={mobile}
              onChange={setMobile}
              options={[
                { value: "yes", label: "مهم بالنسبة لي" },
                { value: "no", label: "غير مهم" },
              ]}
            />
          </form>
        </Reveal>

        <Reveal delay={120}>
          <div id="finderResult" aria-live="polite" className="relative h-full overflow-hidden bg-navy p-8 text-white sm:p-10">
            <svg className="pointer-events-none absolute -bottom-16 -start-16 h-[320px] w-[320px] opacity-15" viewBox="0 0 300 300" aria-hidden="true">
              {[50, 85, 120, 155].map((r) => (
                <circle key={r} cx="150" cy="150" r={r} fill="none" stroke="#fff" strokeWidth="1.5" />
              ))}
            </svg>
            <p className="relative text-[14px] font-bold text-sky">الاقتراح المبدئي</p>
            <div className="relative mt-3 flex items-end gap-4">
              <span dir="ltr" className="text-[64px] font-black leading-none tracking-[0.1em] text-white">
                {rec.code}
              </span>
              <span className="pb-2 text-[22px] font-bold text-white/90">{info.title}</span>
            </div>
            <p className="relative mt-5 text-[16px] leading-[1.95] text-white/90">{rec.reason}</p>
            {rec.notes.length > 0 && (
              <ul className="relative mt-4 space-y-2">
                {rec.notes.map((n) => (
                  <li key={n} className="flex items-start gap-3 text-[14.5px] leading-[1.8] text-white/85">
                    <IconCheck width={16} height={16} className="mt-1.5 shrink-0 text-sky" strokeWidth={2.4} />
                    {n}
                  </li>
                ))}
              </ul>
            )}
            <a href={wa(message)} target="_blank" rel="noopener noreferrer" className="btn btn-ghost relative mt-7">
              <IconChat width={17} height={17} /> ناقش النتيجة مع متخصص
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
