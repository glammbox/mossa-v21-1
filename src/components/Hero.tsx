import { useRef } from "react";
import { motion } from "motion/react";
import type { Locale } from "@/lib/copy";
import { copy } from "@/lib/copy";
import { HeroEditorial } from "./HeroEditorial";

type HeroProps = {
  locale: Locale;
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: [0.25, 0.1, 0.25, 1] as const, delay },
  }),
};

export function Hero({ locale }: HeroProps) {
  const t = copy[locale].hero;
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <section className="hero" id="hero">
      {/* Video background */}
      <video
        ref={videoRef}
        className="hero__video"
        autoPlay
        muted
        loop
        playsInline
        poster="/images/hero.jpg"
        aria-hidden="true"
      >
        <source src="/video/hero.mp4" type="video/mp4" />
        {/* Fallback image handled by poster */}
      </video>

      <div className="hero__overlay" />

      <div className="hero__content">
        <motion.span
          className="hero__eyebrow"
          initial="hidden"
          animate="visible"
          custom={0.2}
          variants={fadeUp}
        >
          {t.eyebrow}
        </motion.span>

        <motion.h1
          className="hero__headline"
          initial="hidden"
          animate="visible"
          custom={0.4}
          variants={fadeUp}
        >
          {t.headline}
        </motion.h1>

        <motion.p
          className="hero__sub"
          initial="hidden"
          animate="visible"
          custom={0.6}
          variants={fadeUp}
        >
          {t.subheadline}
        </motion.p>

        <motion.div
          className="hero__ctas"
          initial="hidden"
          animate="visible"
          custom={0.8}
          variants={fadeUp}
        >
          <button
            type="button"
            className="btn-primary"
            onClick={() => {
              const el = document.getElementById("collection");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
          >
            {t.ctaPrimary}
          </button>
          <button
            type="button"
            className="btn-ghost"
            onClick={() => {
              const el = document.getElementById("a-propos");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
          >
            {t.ctaSecondary}
          </button>
        </motion.div>
      </div>

      <div className="hero__scroll-indicator" aria-hidden="true">
        <div className="hero__scroll-line" />
      </div>

      {/* Hero Editorial trust bar rendered below video content */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: 2,
        }}
      >
        <HeroEditorial locale={locale} />
      </div>
    </section>
  );
}
