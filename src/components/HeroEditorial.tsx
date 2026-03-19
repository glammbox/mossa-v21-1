import { motion } from "motion/react";
import content from "@/lib/content.json";

type Locale = "fr" | "en";

type HeroEditorialProps = {
  locale?: Locale;
};

export function HeroEditorial({ locale = "fr" }: HeroEditorialProps) {
  const heading = locale === "fr" ? content.hero.headline : content.hero.headlineAlt[0];
  const primary = locale === "fr" ? content.hero.ctaPrimary : content.hero.ctaSecondary;

  return (
    <section className="relative isolate overflow-hidden bg-[#F6F1E8] pb-20 pt-20 md:pb-28 md:pt-28">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_12%_10%,rgba(94,111,92,0.12),transparent_38%)]" />
      <div className="mx-auto grid w-full max-w-6xl gap-12 px-5 md:grid-cols-[1.2fr_0.8fr] md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <p className="mb-4 text-[10px] uppercase tracking-[0.3em] text-[#5E6F5C]">{content.intro.eyebrow}</p>
          <h1 className="max-w-3xl font-serif text-4xl leading-[1.08] text-[#2E352E] md:text-6xl">{heading}</h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-[#4E584C] md:text-lg">{content.hero.subheadline}</p>
          <div className="mt-9 flex flex-wrap gap-3">
            <button type="button" className="border border-[#2E352E] px-5 py-3 text-[10px] uppercase tracking-[0.22em] text-[#2E352E] transition-colors hover:bg-[#2E352E] hover:text-[#F6F1E8]">
              {primary}
            </button>
            <button type="button" className="border border-[#B7AEA1] px-5 py-3 text-[10px] uppercase tracking-[0.22em] text-[#2E352E] transition-colors hover:border-[#2E352E]">
              {locale === "fr" ? "Voir la collection" : "View collection"}
            </button>
          </div>
        </motion.div>

        <motion.figure
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
          className="overflow-hidden rounded-sm border border-[#D9D0C4] bg-[#EFE7DA]"
        >
          <img src="/images/product-2.jpg" alt="Arrangement memorial botanique Mossa" className="aspect-[4/5] h-full w-full object-cover" loading="eager" />
        </motion.figure>
      </div>
    </section>
  );
}
