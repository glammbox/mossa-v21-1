import { motion } from "motion/react";
import type { Locale } from "@/lib/copy";
import { copy } from "@/lib/copy";

type HeroProps = {
  locale: Locale;
};

export function Hero({ locale }: HeroProps) {
  const t = copy[locale].hero;

  function scrollToCollection() {
    const el = document.getElementById("collection");
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 88;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  }

  function scrollToAbout() {
    const el = document.getElementById("a-propos");
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 88;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  }

  return (
    <section
      id="hero"
      className="relative isolate min-h-screen overflow-hidden"
      style={{ background: "var(--bg)" }}
    >
      {/* Full-bleed background image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/tapis/tapis-05-zen-japanese-orchid.jpg"
          alt="Tapis d'urne Mossä — ambiance zen japonaise"
          className="h-full w-full object-cover object-center"
          loading="eager"
        />
        {/* Dark overlay for text legibility */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, rgba(17,22,26,0.82) 0%, rgba(17,22,26,0.55) 60%, rgba(17,22,26,0.30) 100%)",
          }}
        />
        {/* Glow accent */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(circle at 15% 50%, var(--hero-glow), transparent 50%)",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-6xl flex-col justify-center px-5 py-32 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="max-w-2xl"
        >
          <p
            className="mb-6 text-[10px] uppercase tracking-[0.4em]"
            style={{ color: "rgba(167,183,155,0.9)" }}
          >
            {t.eyebrow}
          </p>
          <h1
            className="font-serif text-5xl font-light leading-[1.06] text-white md:text-7xl"
            style={{ whiteSpace: "pre-line" }}
          >
            {t.headline}
          </h1>
          <p
            className="mt-6 max-w-lg text-base leading-relaxed md:text-lg"
            style={{ color: "rgba(242,236,226,0.78)" }}
          >
            {t.subheadline}
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <button
              type="button"
              onClick={scrollToCollection}
              className="border px-6 py-3.5 text-[10px] uppercase tracking-[0.25em] text-white transition-all duration-200 hover:opacity-90"
              style={{
                borderColor: "rgba(167,183,155,0.7)",
                background: "rgba(167,183,155,0.12)",
                backdropFilter: "blur(8px)",
              }}
            >
              {t.ctaPrimary}
            </button>
            <button
              type="button"
              onClick={scrollToAbout}
              className="border px-6 py-3.5 text-[10px] uppercase tracking-[0.25em] transition-all duration-200 hover:opacity-90"
              style={{
                borderColor: "rgba(242,236,226,0.35)",
                color: "rgba(242,236,226,0.75)",
              }}
            >
              {t.ctaSecondary}
            </button>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
        >
          <div
            className="h-8 w-px animate-pulse"
            style={{ background: "rgba(242,236,226,0.3)" }}
          />
        </motion.div>
      </div>
    </section>
  );
}
