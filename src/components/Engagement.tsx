import { motion } from "motion/react";
import type { Locale } from "@/lib/copy";
import { copy } from "@/lib/copy";

type EngagementProps = {
  locale: Locale;
};

export function Engagement({ locale }: EngagementProps) {
  const t = copy[locale].engagement;

  return (
    <section
      id="engagement"
      className="relative overflow-hidden py-24 md:py-32"
      style={{ background: "var(--bg-elevated)" }}
    >
      {/* Background texture */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 80% 50%, var(--hero-glow), transparent 60%)",
        }}
      />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-5 md:px-8">
        <div className="grid gap-12 md:grid-cols-2 md:gap-20 md:items-center">
          {/* Left: Image stack */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            <div
              className="overflow-hidden"
              style={{ border: "1px solid var(--border)" }}
            >
              <img
                src="/images/tapis/tapis-06-marble-gold-ornate.jpg"
                alt={locale === "fr" ? "Tapis d'urne sur commande Mossä" : "Custom Mossä urn carpet"}
                className="aspect-[4/3] w-full object-cover object-center"
                loading="lazy"
              />
            </div>
            {/* Small inset image */}
            <div
              className="absolute -bottom-5 -left-5 w-32 overflow-hidden md:-left-8 md:w-44"
              style={{
                border: "2px solid var(--bg-elevated)",
                boxShadow: "var(--shadow-soft)",
              }}
            >
              <img
                src="/images/tapis/tapis-04-walnut-crystal-calla.jpg"
                alt=""
                className="aspect-square w-full object-cover"
                loading="lazy"
              />
            </div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.12 }}
          >
            <p
              className="mb-4 text-[10px] uppercase tracking-[0.35em]"
              style={{ color: "var(--accent)" }}
            >
              {t.eyebrow}
            </p>
            <h2
              className="mb-6 font-serif text-4xl font-light leading-tight md:text-5xl"
              style={{ color: "var(--text-primary)", whiteSpace: "pre-line" }}
            >
              {t.title}
            </h2>
            <p
              className="mb-8 text-base leading-relaxed"
              style={{ color: "var(--text-secondary)" }}
            >
              {t.body}
            </p>
            <blockquote
              className="mb-10 border-l-2 pl-5 font-serif text-xl font-light italic leading-snug"
              style={{
                borderColor: "var(--accent)",
                color: "var(--accent-strong)",
              }}
            >
              &ldquo;{t.quote}&rdquo;
            </blockquote>

            <div className="flex flex-wrap gap-4">
              <a
                href="mailto:bonjour@mossa.ca"
                className="inline-flex items-center border px-6 py-3.5 text-[10px] uppercase tracking-[0.25em] transition-all duration-200"
                style={{
                  background: "var(--accent)",
                  borderColor: "var(--accent)",
                  color: "var(--bg)",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.opacity = "0.85";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.opacity = "1";
                }}
              >
                {t.ctaPrimary}
              </a>
              <button
                type="button"
                className="inline-flex items-center border px-6 py-3.5 text-[10px] uppercase tracking-[0.25em] transition-all duration-200 hover:opacity-80"
                style={{
                  borderColor: "var(--border)",
                  color: "var(--text-secondary)",
                }}
                onClick={() => {
                  const el = document.getElementById("collection");
                  if (el) {
                    const y = el.getBoundingClientRect().top + window.scrollY - 88;
                    window.scrollTo({ top: y, behavior: "smooth" });
                  }
                }}
              >
                {t.ctaSecondary}
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
