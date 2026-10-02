export const BRAND = "صله تون";
export const WA_NUMBER = "201004960009";
export const PHONE_DISPLAY = "0100 496 0009";
export const PHONE_TEL = "+201004960009";

/** Build a wa.me link carrying a pre-filled Arabic message. */
export const wa = (text: string) => `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`;

/** Open WhatsApp in a new tab (used by forms). */
export const openWa = (text: string) => {
  window.open(wa(text), "_blank", "noopener,noreferrer");
};

/** Pexels stock photo helper (cropped to the requested box). */
export const px = (id: number, w = 1200, h = 800) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=${w}&h=${h}`;

export const IMG = {
  hero1: px(5206951, 1600, 900),
  hero2: px(8413387, 1600, 900),
  hero3: px(7285981, 1600, 900),
  hero4: px(30912080, 1600, 900),
  aboutA: px(7653322, 900, 1100),
  aboutB: px(5206942, 900, 1100),
  quiz: px(7545219, 1200, 900),
  cta: px(8413387, 1600, 700),
};

export const inputCls =
  "h-[50px] w-full border border-rule bg-white px-4 text-[14.5px] text-ink outline-none transition placeholder:text-body/60";
