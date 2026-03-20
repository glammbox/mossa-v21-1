import { motion } from "motion/react";
import { useState } from "react";
import type { Locale } from "@/lib/copy";
import { copy } from "@/lib/copy";

type CollectionProps = {
  locale: Locale;
};

const collectionItems = [
  {
    src: "/images/product-1.jpg",
    nameFr: "Jardin Zen Noir",
    nameEn: "Black Zen Garden",
    descFr: "Composition minimaliste sur socle ardoise, mousse et plantes épurées.",
    descEn: "Minimalist composition on slate base, moss and refined plants.",
  },
  {
    src: "/images/product-2.jpg",
    nameFr: "Jardin de Céramique",
    nameEn: "Ceramic Garden",
    descFr: "Plantes vivantes en coupe céramique, galets et mousse verte.",
    descEn: "Living plants in ceramic cup, pebbles and green moss.",
  },
  {
    src: "/images/product-3.jpg",
    nameFr: "Trio Botanical",
    nameEn: "Botanical Trio",
    descFr: "Trois plantes complémentaires dans un caisson de bois naturel.",
    descEn: "Three complementary plants in a natural wood case.",
  },
  {
    src: "/images/product-4.jpg",
    nameFr: "Zen Suspendu",
    nameEn: "Suspended Zen",
    descFr: "Arrangement aérien, mousse et plantes grasses en suspension.",
    descEn: "Aerial arrangement, moss and succulents in suspension.",
  },
  {
    src: "/images/product-5.jpg",
    nameFr: "Collection Naturelle",
    nameEn: "Natural Collection",
    descFr: "Mélange organique de textures végétales sur plateau de bois.",
    descEn: "Organic blend of botanical textures on a wooden tray.",
  },
  {
    src: "/images/product-6.jpg",
    nameFr: "Paysage de Mousse",
    nameEn: "Moss Landscape",
    descFr: "Paysage végétal miniature, plantes indigènes et pierres naturelles.",
    descEn: "Miniature botanical landscape, native plants and natural stones.",
  },
  {
    src: "/images/product-7.jpg",
    nameFr: "Composition Vivante",
    nameEn: "Living Composition",
    descFr: "Plantes vivaces et mousse fraîche dans un contenant design.",
    descEn: "Perennial plants and fresh moss in a designer container.",
  },
  {
    src: "/images/product-8.jpg",
    nameFr: "Kusamono Contemporain",
    nameEn: "Contemporary Kusamono",
    descFr: "Inspiration japonaise, plantes fines et galets polis à la main.",
    descEn: "Japanese inspiration, fine plants and hand-polished pebbles.",
  },
];

export function Collection({ locale }: CollectionProps) {
  const t = copy[locale].gallery;
  const [hovered, setHovered] = useState<string | null>(null);

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

        {/* Product grid — ALL cards with identical bottom overlay */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {collectionItems.map((item, index) => {
            const isHovered = hovered === item.src;
            return (
              <motion.article
                key={item.src}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, ease: "easeOut", delay: (index % 4) * 0.07 }}
                className="cursor-pointer relative overflow-hidden"
                style={{ border: "1px solid var(--border)" }}
                onMouseEnter={() => setHovered(item.src)}
                onMouseLeave={() => setHovered(null)}
              >
                <figure className="relative overflow-hidden">
                  <img
                    src={item.src}
                    alt={locale === "fr" ? item.nameFr : item.nameEn}
                    className="aspect-[3/4] w-full object-cover object-center"
                    style={{
                      transform: isHovered ? "scale(1.07)" : "scale(1)",
                      transition: "transform 0.3s ease",
                    }}
                    loading="lazy"
                  />
                  {/* Dark gradient overlay — ALWAYS visible at bottom */}
                  <div
                    className="absolute inset-0 flex items-end p-4"
                    style={{
                      background:
                        "linear-gradient(to top, rgba(17,22,26,0.85) 0%, rgba(17,22,26,0.35) 40%, transparent 70%)",
                    }}
                  >
                    <div>
                      <h3
                        className="font-serif text-base font-light leading-snug text-white"
                      >
                        {locale === "fr" ? item.nameFr : item.nameEn}
                      </h3>
                      <p
                        className="mt-1 text-[10px] leading-relaxed"
                        style={{ color: "rgba(242,236,226,0.72)" }}
                      >
                        {locale === "fr" ? item.descFr : item.descEn}
                      </p>
                    </div>
                  </div>
                </figure>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
