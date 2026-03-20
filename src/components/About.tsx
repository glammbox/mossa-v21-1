import { motion } from "motion/react";
import type { Locale } from "@/lib/copy";
import { copy } from "@/lib/copy";

type AboutProps = {
  locale: Locale;
};

export function About({ locale }: AboutProps) {
  const t = copy[locale].about;

  return (
    <section
      id="a-propos"
      className="py-24 md:py-32"
      style={{ background: "var(--bg-elevated)" }}
    >
      <div className="mx-auto w-full max-w-6xl px-5 md:px-8">
        <div className="grid gap-12 md:grid-cols-2 md:gap-20">
          {/* Left: Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative order-2 md:order-1"
          >
            <div
              className="overflow-hidden"
              style={{ border: "1px solid var(--border)" }}
            >
              <img
                src="/images/product-7.jpg"
                alt={locale === "fr" ? "Création végétale Mossä" : "Mossä botanical creation"}
                className="aspect-[3/4] w-full object-cover transition-transform duration-700 hover:scale-105"
                loading="lazy"
              />
            </div>
            {/* Decorative quote overlay */}
            <div
              className="absolute -bottom-6 -right-4 max-w-xs p-5 md:-right-8"
              style={{
                background: "var(--surface)",
                border: "1px solid var(--border)",
              }}
            >
              <p
                className="font-serif text-lg font-light leading-snug italic"
                style={{ color: "var(--accent-strong)" }}
              >
                &ldquo;{t.quote}&rdquo;
              </p>
            </div>
          </motion.div>

          {/* Right: Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.12 }}
            className="order-1 flex flex-col justify-center md:order-2"
          >
            <p
              className="mb-4 text-[10px] uppercase tracking-[0.35em]"
              style={{ color: "var(--accent)" }}
            >
              {t.eyebrow}
            </p>
            <h2
              className="mb-8 font-serif text-4xl font-light leading-tight md:text-5xl"
              style={{ color: "var(--text-primary)", whiteSpace: "pre-line" }}
            >
              {t.title}
            </h2>
            <div className="space-y-5">
              <p
                className="text-base leading-relaxed"
                style={{ color: "var(--text-secondary)" }}
              >
                {t.body1}
              </p>
              <p
                className="text-base leading-relaxed"
                style={{ color: "var(--text-secondary)" }}
              >
                {t.body2}
              </p>
            </div>


          </motion.div>
        </div>
      </div>
    </section>
  );
}
