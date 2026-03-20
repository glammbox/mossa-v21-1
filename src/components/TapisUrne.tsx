import { motion } from "motion/react";
import type { Locale } from "@/lib/copy";

type TapisUrneProps = {
  locale: Locale;
};

const TAPIS_IMAGES = [
  { src: "/images/tapis-01-walnut-plants.jpg", fr: "Noyer & Végétaux", en: "Walnut & Plants" },
  { src: "/images/tapis-02-black-rose-gold.jpg", fr: "Noir & Rose Gold", en: "Black & Rose Gold" },
  { src: "/images/tapis-03-pine-flowers-colorful.jpg", fr: "Pin & Fleurs de Chapelle", en: "Pine & Chapel Flowers" },
  { src: "/images/tapis-04-walnut-crystal-calla.jpg", fr: "Noyer & Calla Crystal", en: "Walnut & Crystal Calla" },
  { src: "/images/tapis-05-zen-japanese-orchid.jpg", fr: "Zen Japonais & Orchidée", en: "Japanese Zen & Orchid" },
  { src: "/images/tapis-06-marble-gold-ornate.jpg", fr: "Marbre & Or Orné", en: "Marble & Ornate Gold" },
  { src: "/images/tapis-07-pine-navy-orchid.jpg", fr: "Pin Marine & Orchidées", en: "Pine Navy & Orchids" },
];

const COPY = {
  fr: {
    eyebrow: "Tapis d'Urne · Fait au Québec",
    title: "Entourer le départ\nd'une beauté vivante.",
    subtitle:
      "Chaque tapis d'urne est une pièce unique, réalisée à la main. Une alternative vivante et solidaire — chaque proche repart avec une petite plante, symbole de mémoire et de continuité.",
    cta: "Demander un devis",
    aria: "Tapis d'urne végétal Mossä —",
  },
  en: {
    eyebrow: "Urn Rugs · Made in Québec",
    title: "Surrounding farewell\nwith living beauty.",
    subtitle:
      "Each urn rug is a unique, handcrafted piece. A living, caring alternative — each loved one leaves with a small plant, a symbol of memory and continuity.",
    cta: "Request a quote",
    aria: "Mossä botanical urn rug —",
  },
};

export function TapisUrne({ locale }: TapisUrneProps) {
  const t = COPY[locale];

  return (
    <section
      id="tapis-urne"
      className="py-24 md:py-32"
      style={{ background: "var(--bg)" }}
    >
      <div className="mx-auto w-full max-w-6xl px-5 md:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-14 text-center md:text-left"
        >
          <p
            className="mb-4 text-[10px] uppercase tracking-[0.4em]"
            style={{ color: "var(--accent)" }}
          >
            {t.eyebrow}
          </p>
          <h2
            className="mb-5 font-serif text-4xl font-light leading-tight md:text-5xl"
            style={{ color: "var(--text-primary)", whiteSpace: "pre-line" }}
          >
            {t.title}
          </h2>
          <p
            className="mx-auto max-w-xl text-base leading-relaxed md:mx-0"
            style={{ color: "var(--text-secondary)" }}
          >
            {t.subtitle}
          </p>
        </motion.div>

        {/* 7-image grid: 4 top, 3 bottom */}
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4 mb-10">
          {TAPIS_IMAGES.slice(0, 4).map((img, i) => (
            <motion.div
              key={img.src}
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, ease: "easeOut", delay: i * 0.08 }}
              className="group relative overflow-hidden"
              style={{ border: "1px solid var(--border)" }}
            >
              <img
                src={img.src}
                alt={`${t.aria} ${locale === "fr" ? img.fr : img.en}`}
                className="aspect-[3/4] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div
                className="absolute inset-0 flex items-end p-3 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                style={{
                  background:
                    "linear-gradient(to top, rgba(17,22,26,0.80) 0%, transparent 60%)",
                }}
              >
                <p
                  className="text-[10px] uppercase tracking-[0.25em] text-white"
                >
                  {locale === "fr" ? img.fr : img.en}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-3 mb-12">
          {TAPIS_IMAGES.slice(4).map((img, i) => (
            <motion.div
              key={img.src}
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, ease: "easeOut", delay: (i + 4) * 0.08 }}
              className="group relative overflow-hidden"
              style={{ border: "1px solid var(--border)" }}
            >
              <img
                src={img.src}
                alt={`${t.aria} ${locale === "fr" ? img.fr : img.en}`}
                className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div
                className="absolute inset-0 flex items-end p-3 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                style={{
                  background:
                    "linear-gradient(to top, rgba(17,22,26,0.80) 0%, transparent 60%)",
                }}
              >
                <p className="text-[10px] uppercase tracking-[0.25em] text-white">
                  {locale === "fr" ? img.fr : img.en}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center md:text-left"
        >
          <a
            href="mailto:bonjour@mossa.ca"
            className="inline-flex items-center border px-7 py-4 text-[10px] uppercase tracking-[0.3em] transition-all duration-200 hover:opacity-85"
            style={{
              background: "var(--accent)",
              borderColor: "var(--accent)",
              color: "var(--bg)",
            }}
          >
            {t.cta}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
