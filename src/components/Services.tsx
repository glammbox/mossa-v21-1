import { useState } from "react";
import { motion } from "motion/react";
import type { Locale } from "@/lib/copy";
import { copy } from "@/lib/copy";
import { Lightbox } from "@/components/Lightbox";
import type { LightboxImage } from "@/components/Lightbox";

type ServicesProps = {
  locale: Locale;
};

// ── Lightbox image sets ──────────────────────────────────────────────────────

const BOTANICAL_IMAGES: LightboxImage[] = [
  { src: "/images/inbound/inbound-01.jpg", altFr: "Arrangement végétal Mossä", altEn: "Mossä botanical arrangement", captionFr: "Arrangement Végétal", captionEn: "Botanical Arrangement" },
  { src: "/images/inbound/inbound-02.jpg", altFr: "Composition végétale sur mesure", altEn: "Custom botanical composition", captionFr: "Composition sur Mesure", captionEn: "Custom Composition" },
  { src: "/images/inbound/inbound-03.jpg", altFr: "Art végétal Mossä", altEn: "Mossä botanical art", captionFr: "Art Végétal", captionEn: "Botanical Art" },
  { src: "/images/inbound/inbound-04.jpg", altFr: "Jardin miniature Mossä", altEn: "Mossä miniature garden", captionFr: "Jardin Miniature", captionEn: "Miniature Garden" },
  { src: "/images/product-1.jpg", altFr: "Jardin Zen Noir", altEn: "Black Zen Garden", captionFr: "Jardin Zen Noir", captionEn: "Black Zen Garden" },
  { src: "/images/product-2.jpg", altFr: "Jardin de Céramique", altEn: "Ceramic Garden", captionFr: "Jardin de Céramique", captionEn: "Ceramic Garden" },
  { src: "/images/product-3.jpg", altFr: "Trio Botanical", altEn: "Botanical Trio", captionFr: "Trio Botanical", captionEn: "Botanical Trio" },
  { src: "/images/product-5.jpg", altFr: "Collection Naturelle", altEn: "Natural Collection", captionFr: "Collection Naturelle", captionEn: "Natural Collection" },
];

const HOTEL_IMAGES: LightboxImage[] = [
  { src: "/images/inbound/inbound-05.jpg", altFr: "Installation hôtel Mossä", altEn: "Mossä hotel installation", captionFr: "Hôtel & Lobby", captionEn: "Hotel & Lobby" },
  { src: "/images/inbound/inbound-06.jpg", altFr: "Espace professionnel Mossä", altEn: "Mossä professional space", captionFr: "Espace Professionnel", captionEn: "Professional Space" },
  { src: "/images/inbound/inbound-07.jpg", altFr: "Design botanique professionnel", altEn: "Professional botanical design", captionFr: "Design Botanique", captionEn: "Botanical Design" },
  { src: "/images/product-4.jpg", altFr: "Zen Suspendu", altEn: "Suspended Zen", captionFr: "Zen Suspendu", captionEn: "Suspended Zen" },
  { src: "/images/product-6.jpg", altFr: "Paysage de Mousse", altEn: "Moss Landscape", captionFr: "Paysage de Mousse", captionEn: "Moss Landscape" },
];

const ARCHITECTURE_IMAGES: LightboxImage[] = [
  { src: "/images/inbound/inbound-08.jpg", altFr: "Architecture végétale Mossä", altEn: "Mossä botanical architecture", captionFr: "Architecture Végétale", captionEn: "Botanical Architecture" },
  { src: "/images/inbound/inbound-10.jpg", altFr: "Mur végétal Mossä", altEn: "Mossä living wall", captionFr: "Mur Végétal", captionEn: "Living Wall" },
  { src: "/images/inbound/inbound-11.jpg", altFr: "Jardin intérieur Mossä", altEn: "Mossä indoor garden", captionFr: "Jardin Intérieur", captionEn: "Indoor Garden" },
  { src: "/images/product-7.jpg", altFr: "Composition Vivante", altEn: "Living Composition", captionFr: "Composition Vivante", captionEn: "Living Composition" },
  { src: "/images/product-8.jpg", altFr: "Kusamono Contemporain", altEn: "Contemporary Kusamono", captionFr: "Kusamono Contemporain", captionEn: "Contemporary Kusamono" },
];

const TAPIS_IMAGES: LightboxImage[] = [
  { src: "/images/tapis-01-walnut-plants.jpg", altFr: "Noyer & Végétaux", altEn: "Walnut & Plants", captionFr: "Noyer & Végétaux", captionEn: "Walnut & Plants" },
  { src: "/images/tapis-02-black-rose-gold.jpg", altFr: "Noir & Rose Gold", altEn: "Black & Rose Gold", captionFr: "Noir & Rose Gold", captionEn: "Black & Rose Gold" },
  { src: "/images/tapis-03-pine-flowers-colorful.jpg", altFr: "Pin & Fleurs de Chapelle", altEn: "Pine & Chapel Flowers", captionFr: "Pin & Fleurs de Chapelle", captionEn: "Pine & Chapel Flowers" },
  { src: "/images/tapis-04-walnut-crystal-calla.jpg", altFr: "Noyer & Calla Crystal", altEn: "Walnut & Crystal Calla", captionFr: "Noyer & Calla Crystal", captionEn: "Walnut & Crystal Calla" },
  { src: "/images/tapis-05-zen-japanese-orchid.jpg", altFr: "Zen Japonais & Orchidée", altEn: "Japanese Zen & Orchid", captionFr: "Zen Japonais & Orchidée", captionEn: "Japanese Zen & Orchid" },
  { src: "/images/tapis-06-marble-gold-ornate.jpg", altFr: "Marbre & Or Orné", altEn: "Marble & Ornate Gold", captionFr: "Marbre & Or Orné", captionEn: "Marble & Ornate Gold" },
];

const NEWBORN_IMAGES: LightboxImage[] = [
  { src: "/images/inbound/inbound-12.jpg", altFr: "Composition naissance Mossä", altEn: "Mossä newborn composition", captionFr: "Composition Naissance", captionEn: "Newborn Composition" },
  { src: "/images/product-2.jpg", altFr: "Cadeau naissance végétal", altEn: "Botanical newborn gift", captionFr: "Cadeau Naissance", captionEn: "Newborn Gift" },
  { src: "/images/product-5.jpg", altFr: "Jardin de naissance", altEn: "Birth garden", captionFr: "Jardin de Naissance", captionEn: "Birth Garden" },
];

// ── Service card definitions ─────────────────────────────────────────────────

type ServiceCardId = "botanical" | "hotels" | "architecture" | "tapis" | "careGuide" | "newborns";

// ── Memorial Ritual lightbox content ────────────────────────────────────────

function MemorialContent({ locale, tapisUrne }: { locale: Locale; tapisUrne: { eyebrow: string; title: string; subtitle: string; cta: string } }) {
  return (
    <div>
      {/* Header */}
      <div className="mb-10 text-center md:text-left">
        <p className="mb-4 text-[10px] uppercase tracking-[0.4em]" style={{ color: "var(--accent)" }}>
          {tapisUrne.eyebrow}
        </p>
        <h3
          className="mb-5 font-serif text-4xl font-light leading-tight text-white md:text-5xl"
          style={{ whiteSpace: "pre-line" }}
        >
          {tapisUrne.title}
        </h3>
        <p className="max-w-xl text-base leading-relaxed" style={{ color: "rgba(242,236,226,0.72)" }}>
          {tapisUrne.subtitle}
        </p>
      </div>

      {/* Image grid */}
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 mb-10">
        {TAPIS_IMAGES.map((img) => (
          <div key={img.src} className="relative overflow-hidden" style={{ border: "1px solid rgba(255,255,255,0.08)" }}>
            <img
              src={img.src}
              alt={locale === "fr" ? img.altFr : img.altEn}
              className="aspect-[3/4] w-full object-cover transition-transform duration-500 hover:scale-105"
              loading="lazy"
            />
            <div
              className="absolute inset-0 flex items-end p-3"
              style={{ background: "linear-gradient(to top, rgba(10,13,16,0.80) 0%, transparent 60%)" }}
            >
              <p className="text-[10px] uppercase tracking-[0.25em] text-white">
                {locale === "fr" ? img.captionFr : img.captionEn}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="text-center md:text-left">
        <a
          href="mailto:bonjour@mossa.ca"
          className="inline-flex items-center border px-7 py-4 text-[10px] uppercase tracking-[0.3em] transition-all duration-200 hover:opacity-85"
          style={{
            background: "var(--accent)",
            borderColor: "var(--accent)",
            color: "var(--bg)",
          }}
        >
          {tapisUrne.cta}
        </a>
      </div>
    </div>
  );
}

// ── Component ────────────────────────────────────────────────────────────────

export function Services({ locale, onCareGuideOpen }: ServicesProps & { onCareGuideOpen: () => void }) {
  const t = copy[locale].rituels;
  const tapisUrne = copy[locale].tapisUrne;

  const [openLightbox, setOpenLightbox] = useState<ServiceCardId | null>(null);

  const cards: { id: ServiceCardId; image: string; label: string; name: string; desc: string; cta: string }[] = [
    {
      id: "botanical",
      image: "/images/inbound/inbound-01.jpg",
      label: t.botanical.label,
      name: t.botanical.name,
      desc: t.botanical.desc,
      cta: t.botanical.cta,
    },
    {
      id: "hotels",
      image: "/images/inbound/inbound-05.jpg",
      label: t.hotels.label,
      name: t.hotels.name,
      desc: t.hotels.desc,
      cta: t.hotels.cta,
    },
    {
      id: "architecture",
      image: "/images/inbound/inbound-08.jpg",
      label: t.architecture.label,
      name: t.architecture.name,
      desc: t.architecture.desc,
      cta: t.architecture.cta,
    },
    {
      id: "tapis",
      image: "/images/tapis-01-walnut-plants.jpg",
      label: t.tapis.label,
      name: t.tapis.name,
      desc: t.tapis.desc,
      cta: t.tapis.cta,
    },
    {
      id: "careGuide",
      image: "/images/care-sheet.jpg",
      label: t.careGuide.label,
      name: t.careGuide.name,
      desc: t.careGuide.desc,
      cta: t.careGuide.cta,
    },
    {
      id: "newborns",
      image: "/images/inbound/inbound-12.jpg",
      label: t.newborns.label,
      name: t.newborns.name,
      desc: t.newborns.desc,
      cta: t.newborns.cta,
    },
  ];

  function handleCardClick(id: ServiceCardId) {
    if (id === "careGuide") {
      onCareGuideOpen();
    } else {
      setOpenLightbox(id);
    }
  }

  // Lightbox title resolver
  function getLightboxTitle(id: ServiceCardId): string {
    const card = cards.find((c) => c.id === id);
    return card?.name ?? "";
  }

  // Lightbox images resolver
  function getLightboxImages(id: ServiceCardId): LightboxImage[] {
    switch (id) {
      case "botanical": return BOTANICAL_IMAGES;
      case "hotels": return HOTEL_IMAGES;
      case "architecture": return ARCHITECTURE_IMAGES;
      case "tapis": return [];
      case "newborns": return NEWBORN_IMAGES;
      default: return [];
    }
  }

  return (
    <>
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
              {t.eyebrow}
            </p>
            <h2
              className="font-serif text-4xl font-light leading-tight md:text-5xl"
              style={{ color: "var(--text-primary)", whiteSpace: "pre-line" }}
            >
              {t.title}
            </h2>
          </motion.div>

          {/* 6-card grid */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {cards.map((card, i) => (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7, ease: "easeOut", delay: i * 0.07 }}
                className="group flex flex-col overflow-hidden"
                style={{
                  background: "var(--surface)",
                  border: "1px solid var(--border)",
                }}
              >
                {/* Card image */}
                <div className="overflow-hidden" style={{ height: "200px" }}>
                  <img
                    src={card.image}
                    alt={card.name}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>

                {/* Card body */}
                <div className="flex flex-1 flex-col p-6">
                  <span
                    className="mb-2 text-[9px] uppercase tracking-[0.3em]"
                    style={{ color: "var(--accent)" }}
                  >
                    {card.label}
                  </span>
                  <h3
                    className="font-serif text-xl font-light leading-tight"
                    style={{ color: "var(--text-primary)" }}
                  >
                    {card.name}
                  </h3>
                  <p
                    className="mt-3 flex-1 text-sm leading-relaxed"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    {card.desc}
                  </p>
                  <button
                    type="button"
                    onClick={() => handleCardClick(card.id)}
                    className="mt-5 inline-flex items-center gap-2 border-b pb-0.5 text-[10px] uppercase tracking-[0.22em] transition-all duration-200 self-start hover:gap-3"
                    style={{
                      borderColor: "var(--accent)",
                      color: "var(--accent)",
                    }}
                  >
                    {card.cta} →
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightboxes */}
      {(["botanical", "hotels", "architecture", "newborns"] as ServiceCardId[]).map((id) => (
        <Lightbox
          key={id}
          isOpen={openLightbox === id}
          onClose={() => setOpenLightbox(null)}
          title={getLightboxTitle(id)}
          locale={locale}
          images={getLightboxImages(id)}
        />
      ))}

      {/* Memorial Ritual lightbox (special content) */}
      <Lightbox
        isOpen={openLightbox === "tapis"}
        onClose={() => setOpenLightbox(null)}
        title={getLightboxTitle("tapis")}
        locale={locale}
        content={<MemorialContent locale={locale} tapisUrne={tapisUrne} />}
      />
    </>
  );
}
