import { motion } from "motion/react";
import type { Locale } from "@/lib/copy";

type EntretiensProps = {
  locale: Locale;
  onCareGuideOpen: () => void;
};

const CARE_ITEMS = [
  {
    icon: "💧",
    titleFr: "Arrosage & Humidité",
    titleEn: "Watering & Humidity",
    descFr: "Un brumisateur léger deux fois par semaine suffit à maintenir la fraîcheur de la mousse et des végétaux stabilisés.",
    descEn: "A light mist twice a week is enough to keep moss and stabilized botanicals fresh.",
  },
  {
    icon: "☀️",
    titleFr: "Lumière Indirecte",
    titleEn: "Indirect Light",
    descFr: "Évitez l'exposition directe au soleil. Une lumière douce et diffuse préserve les couleurs et la texture naturelle.",
    descEn: "Avoid direct sunlight. Soft, diffused light preserves natural colours and texture.",
  },
  {
    icon: "🌿",
    titleFr: "Durabilité & Saisons",
    titleEn: "Longevity & Seasons",
    descFr: "Nos compositions stabilisées durent plusieurs années sans entretien intensif — simplement un environnement stable et sans poussière.",
    descEn: "Our stabilized compositions last for years with minimal care — just a stable, dust-free environment.",
  },
];

export function Entretiens({ locale, onCareGuideOpen }: EntretiensProps) {
  const isFr = locale === "fr";

  return (
    <section
      id="entretiens"
      className="py-20"
      style={{ background: "#E8E4DE" }}
    >
      <div className="mx-auto w-full max-w-6xl px-5 md:px-8">

        {/* ── Header ──────────────────────────────────────────────────────────── */}
        <div className="mb-14 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <p
              className="mb-5 text-[10px] uppercase tracking-[0.35em]"
              style={{ color: "#8A9E7A" }}
            >
              {isFr ? "Prendre soin" : "Care"}
            </p>
            <h2
              className="mb-4 font-serif text-5xl font-light tracking-widest md:text-6xl"
              style={{
                color: "#2A2A2A",
                fontFamily: "'Cormorant Garamond', serif",
                letterSpacing: "0.15em",
              }}
            >
              ENTRETIENS
            </h2>
            <p
              className="mb-3 font-serif text-xl font-light italic"
              style={{ color: "#4A4A4A" }}
            >
              {isFr
                ? "L'art de prendre soin de vos créations végétales"
                : "The art of caring for your botanical creations"}
            </p>
            <p
              className="mx-auto mt-5 max-w-2xl text-base leading-relaxed"
              style={{ color: "#5A5A5A" }}
            >
              {isFr
                ? "Chaque composition Mossä est accompagnée d'un guide d'entretien personnalisé. Nos ressources vous guident pour préserver la beauté de vos arrangements au fil des saisons."
                : "Each Mossä composition comes with a personalized care guide. Our resources guide you to preserve the beauty of your arrangements through the seasons."}
            </p>
          </motion.div>
        </div>

        {/* ── Care Cards ──────────────────────────────────────────────────────── */}
        <div className="mb-14 grid gap-6 sm:grid-cols-3">
          {CARE_ITEMS.map((item, i) => (
            <motion.div
              key={item.titleFr}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, ease: "easeOut", delay: i * 0.1 }}
              className="p-8 text-center"
              style={{
                background: "rgba(255, 255, 255, 0.55)",
                border: "1px solid rgba(42, 42, 42, 0.10)",
              }}
            >
              <div className="mb-4 text-3xl">{item.icon}</div>
              <h3
                className="mb-3 font-serif text-lg font-light"
                style={{ color: "#2A2A2A" }}
              >
                {isFr ? item.titleFr : item.titleEn}
              </h3>
              <p
                className="text-sm leading-relaxed"
                style={{ color: "#5A5A5A" }}
              >
                {isFr ? item.descFr : item.descEn}
              </p>
            </motion.div>
          ))}
        </div>

        {/* ── CTA Button ──────────────────────────────────────────────────────── */}
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
        >
          <button
            type="button"
            onClick={onCareGuideOpen}
            className="px-10 py-4 text-[11px] uppercase tracking-[0.3em] font-medium transition-all duration-300"
            style={{
              border: "1px solid #2A2A2A",
              color: "#2A2A2A",
              background: "transparent",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.background = "#2A2A2A";
              (e.currentTarget as HTMLElement).style.color = "#E8E4DE";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.background = "transparent";
              (e.currentTarget as HTMLElement).style.color = "#2A2A2A";
            }}
          >
            {isFr ? "Voir le guide d'entretien →" : "View the care guide →"}
          </button>
        </motion.div>

      </div>
    </section>
  );
}
