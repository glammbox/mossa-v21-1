import { motion } from "motion/react";
import type { Locale } from "@/lib/copy";
import { copy } from "@/lib/copy";

type CollectionProps = {
  locale: Locale;
};

const tapisImages = [
  { src: "/images/tapis/tapis-01-walnut-plants.jpg", altFr: "Tapis d'urne en noyer avec végétaux", altEn: "Walnut urn carpet with botanicals" },
  { src: "/images/tapis/tapis-02-black-rose-gold.jpg", altFr: "Tapis d'urne noir laqué rose gold", altEn: "Black lacquer urn carpet rose gold" },
  { src: "/images/tapis/tapis-03-pine-flowers-colorful.jpg", altFr: "Tapis d'urne pin fleurs colorées", altEn: "Pine urn carpet colourful flowers" },
  { src: "/images/tapis/tapis-04-walnut-crystal-calla.jpg", altFr: "Tapis d'urne noyer crystal arums", altEn: "Walnut crystal calla urn carpet" },
  { src: "/images/tapis/tapis-05-zen-japanese-orchid.jpg", altFr: "Tapis d'urne zen japonais orchidée", altEn: "Japanese zen orchid urn carpet" },
  { src: "/images/tapis/tapis-06-marble-gold-ornate.jpg", altFr: "Tapis d'urne marbre or orné", altEn: "Marble ornate gold urn carpet" },
  { src: "/images/tapis/tapis-07-pine-navy-orchid.jpg", altFr: "Tapis d'urne pin marine orchidées", altEn: "Pine navy orchid urn carpet" },
  { src: "/images/tapis/tapis-08-walnut-cream-orchid.jpg", altFr: "Tapis d'urne noyer crème orchidées", altEn: "Walnut cream orchid urn carpet" },
];

export function Collection({ locale }: CollectionProps) {
  const t = copy[locale].collection;

  return (
    <section
      id="collection"
      className="py-24 md:py-32"
      style={{ background: "var(--bg)" }}
    >
      <div className="mx-auto w-full max-w-6xl px-5 md:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mb-16"
        >
          <p
            className="mb-4 text-[10px] uppercase tracking-[0.35em]"
            style={{ color: "var(--accent)" }}
          >
            {t.eyebrow}
          </p>
          <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <h2
              className="font-serif text-4xl font-light leading-tight md:text-6xl"
              style={{ color: "var(--text-primary)" }}
            >
              {t.title}
            </h2>
            <p
              className="max-w-sm text-sm leading-relaxed md:text-right"
              style={{ color: "var(--text-muted)" }}
            >
              {t.subtitle}
            </p>
          </div>
        </motion.div>

        {/* Product grid */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {tapisImages.map((img, index) => {
            const item = t.items[index];
            return (
              <motion.article
                key={img.src}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, ease: "easeOut", delay: (index % 4) * 0.07 }}
                className="group cursor-pointer"
                style={{ border: "1px solid var(--border)" }}
              >
                <figure className="overflow-hidden">
                  <img
                    src={img.src}
                    alt={locale === "fr" ? img.altFr : img.altEn}
                    className="aspect-[3/4] w-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                </figure>
                <div
                  className="p-4"
                  style={{ background: "var(--surface)" }}
                >
                  <h3
                    className="font-serif text-xl font-light leading-snug"
                    style={{ color: "var(--text-primary)" }}
                  >
                    {item?.name}
                  </h3>
                  <p
                    className="mt-1.5 text-xs leading-relaxed"
                    style={{ color: "var(--text-muted)" }}
                  >
                    {item?.desc}
                  </p>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
