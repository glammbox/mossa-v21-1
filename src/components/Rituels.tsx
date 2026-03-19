import { motion } from "motion/react";
import type { Locale } from "@/lib/copy";
import { copy } from "@/lib/copy";

type RituelsProps = {
  locale: Locale;
};

export function Rituels({ locale }: RituelsProps) {
  const t = copy[locale].rituels;

  return (
    <section
      id="rituels"
      className="py-24 md:py-32"
      style={{ background: "var(--bg-elevated)" }}
    >
      <div className="mx-auto w-full max-w-6xl px-5 md:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mb-16 max-w-2xl"
        >
          <p
            className="mb-4 text-[10px] uppercase tracking-[0.35em]"
            style={{ color: "var(--accent)" }}
          >
            {t.eyebrow}
          </p>
          <h2
            className="font-serif text-4xl font-light leading-tight md:text-5xl"
            style={{ color: "var(--text-primary)" }}
          >
            {t.title}
          </h2>
          <p
            className="mt-5 text-base leading-relaxed"
            style={{ color: "var(--text-secondary)" }}
          >
            {t.subtitle}
          </p>
        </motion.div>

        {/* Two ritual cards */}
        <div className="grid gap-6 md:grid-cols-2">
          {/* Tapis d'Urne */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="group overflow-hidden"
            style={{
              background: "var(--surface)",
              border: "1px solid var(--border)",
            }}
          >
            <div className="overflow-hidden">
              <img
                src="/images/tapis/tapis-01-walnut-plants.jpg"
                alt={locale === "fr" ? "Tapis d'urne végétal Mossä" : "Mossä botanical urn carpet"}
                className="aspect-video w-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
            </div>
            <div className="p-7">
              <span
                className="text-[9px] uppercase tracking-[0.3em]"
                style={{ color: "var(--accent)" }}
              >
                {t.tapis.label}
              </span>
              <h3
                className="mt-3 font-serif text-2xl font-light leading-tight md:text-3xl"
                style={{ color: "var(--text-primary)" }}
              >
                {t.tapis.name}
              </h3>
              <p
                className="mt-4 text-sm leading-relaxed"
                style={{ color: "var(--text-secondary)" }}
              >
                {t.tapis.desc}
              </p>
              <button
                type="button"
                className="mt-6 inline-flex items-center gap-2 border-b pb-0.5 text-[10px] uppercase tracking-[0.22em] transition-all duration-200"
                style={{
                  borderColor: "var(--accent)",
                  color: "var(--accent)",
                }}
                onClick={() => {
                  const el = document.getElementById("engagement");
                  if (el) {
                    const y = el.getBoundingClientRect().top + window.scrollY - 88;
                    window.scrollTo({ top: y, behavior: "smooth" });
                  }
                }}
              >
                {t.tapis.cta} →
              </button>
            </div>
          </motion.div>

          {/* Bouquet de Naissance */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
            className="group overflow-hidden"
            style={{
              background: "var(--surface)",
              border: "1px solid var(--border)",
            }}
          >
            <div className="overflow-hidden">
              <img
                src="/images/tapis/tapis-08-walnut-cream-orchid.jpg"
                alt={locale === "fr" ? "Bouquet de naissance éternel Mossä" : "Mossä eternal birth bouquet"}
                className="aspect-video w-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
            </div>
            <div className="p-7">
              <span
                className="text-[9px] uppercase tracking-[0.3em]"
                style={{ color: "var(--accent)" }}
              >
                {t.bouquet.label}
              </span>
              <h3
                className="mt-3 font-serif text-2xl font-light leading-tight md:text-3xl"
                style={{ color: "var(--text-primary)" }}
              >
                {t.bouquet.name}
              </h3>
              <p
                className="mt-4 text-sm leading-relaxed"
                style={{ color: "var(--text-secondary)" }}
              >
                {t.bouquet.desc}
              </p>
              <button
                type="button"
                className="mt-6 inline-flex items-center gap-2 border-b pb-0.5 text-[10px] uppercase tracking-[0.22em] transition-all duration-200"
                style={{
                  borderColor: "var(--accent)",
                  color: "var(--accent)",
                }}
                onClick={() => {
                  const el = document.getElementById("engagement");
                  if (el) {
                    const y = el.getBoundingClientRect().top + window.scrollY - 88;
                    window.scrollTo({ top: y, behavior: "smooth" });
                  }
                }}
              >
                {t.bouquet.cta} →
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
