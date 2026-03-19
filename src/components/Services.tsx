import { motion } from "motion/react";
import type { Locale } from "@/lib/copy";

type ServicesProps = {
  locale: Locale;
};

const services = [
  {
    id: "arrangements",
    image: "/images/product-1.jpg",
    labelFr: "Art végétal",
    labelEn: "Botanical Art",
    nameFr: "Arrangements Végétaux",
    nameEn: "Botanical Arrangements",
    descFr: "Compositions vivantes sur mesure pour embellir votre intérieur, terrasse ou espace de vie. Chaque pièce est unique, réalisée à la main.",
    descEn: "Bespoke living compositions to beautify your home, terrace, or living space. Each piece is unique, handcrafted to order.",
    ctaFr: "Découvrir",
    ctaEn: "Discover",
    anchor: "collection",
  },
  {
    id: "hotels",
    image: "/images/product-3.jpg",
    labelFr: "Espaces professionnels",
    labelEn: "Professional spaces",
    nameFr: "Hôtels & Lobbies",
    nameEn: "Hotels & Lobbies",
    descFr: "Des créations végétales monumentales qui transforment vos espaces de réception en expériences mémorables. Design botanique sur mesure.",
    descEn: "Monumental botanical creations that transform your reception spaces into memorable experiences. Custom botanical design.",
    ctaFr: "Nous contacter",
    ctaEn: "Contact us",
    anchor: "engagement",
  },
  {
    id: "architecture",
    image: "/images/product-4.jpg",
    labelFr: "Architecture végétale",
    labelEn: "Botanical architecture",
    nameFr: "Architecture Végétale",
    nameEn: "Botanical Architecture",
    descFr: "Murs végétaux, jardins intérieurs, installations botaniques. L'art de structurer l'espace avec le vivant.",
    descEn: "Living walls, indoor gardens, botanical installations. The art of structuring space with living plants.",
    ctaFr: "Nous contacter",
    ctaEn: "Contact us",
    anchor: "engagement",
  },
  {
    id: "tapis",
    image: "/images/tapis/tapis-01-walnut-plants.jpg",
    labelFr: "Rituel funéraire",
    labelEn: "Memorial ritual",
    nameFr: "Tapis d'Urne Végétal",
    nameEn: "Botanical Urn Carpet",
    descFr: "Une alternative vivante pour les rituels funéraires. La nature entoure le départ — chaque proche repart avec une plante, symbole de continuité.",
    descEn: "A living alternative for memorial rituals. Nature surrounds the farewell — each loved one takes home a plant as a symbol of continuity.",
    ctaFr: "Voir la collection",
    ctaEn: "View collection",
    anchor: "collection",
  },
];

export function Services({ locale }: ServicesProps) {
  function scrollTo(anchor: string) {
    const el = document.getElementById(anchor);
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 88;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  }

  return (
    <section
      id="services"
      className="py-24 md:py-32"
      style={{ background: "var(--bg)" }}
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
            {locale === "fr" ? "Ce que nous créons" : "What we create"}
          </p>
          <h2
            className="font-serif text-4xl font-light leading-tight md:text-5xl"
            style={{ color: "var(--text-primary)" }}
          >
            {locale === "fr"
              ? "L'art végétal pour\nchaque moment de vie."
              : "Botanical art for\nevery life moment."}
          </h2>
        </motion.div>

        {/* 4-card grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((svc, i) => (
            <motion.div
              key={svc.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, ease: "easeOut", delay: i * 0.08 }}
              className="group flex flex-col overflow-hidden"
              style={{
                background: "var(--surface)",
                border: "1px solid var(--border)",
              }}
            >
              <div className="overflow-hidden">
                <img
                  src={svc.image}
                  alt={locale === "fr" ? svc.nameFr : svc.nameEn}
                  className="aspect-[4/3] w-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <span
                  className="mb-2 text-[9px] uppercase tracking-[0.3em]"
                  style={{ color: "var(--accent)" }}
                >
                  {locale === "fr" ? svc.labelFr : svc.labelEn}
                </span>
                <h3
                  className="font-serif text-xl font-light leading-tight"
                  style={{ color: "var(--text-primary)" }}
                >
                  {locale === "fr" ? svc.nameFr : svc.nameEn}
                </h3>
                <p
                  className="mt-3 flex-1 text-sm leading-relaxed"
                  style={{ color: "var(--text-secondary)" }}
                >
                  {locale === "fr" ? svc.descFr : svc.descEn}
                </p>
                <button
                  type="button"
                  onClick={() => scrollTo(svc.anchor)}
                  className="mt-5 inline-flex items-center gap-2 border-b pb-0.5 text-[10px] uppercase tracking-[0.22em] transition-all duration-200 self-start"
                  style={{
                    borderColor: "var(--accent)",
                    color: "var(--accent)",
                  }}
                >
                  {locale === "fr" ? svc.ctaFr : svc.ctaEn} →
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
