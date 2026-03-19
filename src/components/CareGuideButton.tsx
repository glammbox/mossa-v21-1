import { motion } from "motion/react";
import type { Locale } from "@/lib/copy";

type CareGuideButtonProps = {
  locale: Locale;
  onOpen: () => void;
};

export function CareGuideButton({ locale, onOpen }: CareGuideButtonProps) {
  return (
    <section
      className="py-16 md:py-20"
      style={{ background: "var(--bg-elevated)", borderTop: "1px solid var(--border)" }}
    >
      <div className="mx-auto w-full max-w-6xl px-5 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col items-start gap-5 md:flex-row md:items-center md:justify-between"
        >
          <div>
            <p
              className="mb-2 text-[10px] uppercase tracking-[0.35em]"
              style={{ color: "var(--accent)" }}
            >
              {locale === "fr" ? "Fiche d'entretien" : "Care guide"}
            </p>
            <h3
              className="font-serif text-2xl font-light md:text-3xl"
              style={{ color: "var(--text-primary)" }}
            >
              {locale === "fr"
                ? "Mon Jardin Zen — Guide complet"
                : "My Zen Garden — Complete care guide"}
            </h3>
            <p
              className="mt-2 text-sm leading-relaxed"
              style={{ color: "var(--text-secondary)" }}
            >
              {locale === "fr"
                ? "Quelques gestes simples pour garder votre création Mossä vivante et épanouie."
                : "A few simple gestures to keep your Mossä creation alive and flourishing."}
            </p>
          </div>
          <button
            type="button"
            onClick={onOpen}
            className="shrink-0 border px-6 py-3.5 text-[10px] uppercase tracking-[0.25em] transition-all duration-200"
            style={{
              borderColor: "var(--accent)",
              color: "var(--accent)",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.background = "var(--accent)";
              (e.currentTarget as HTMLElement).style.color = "var(--bg)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.background = "transparent";
              (e.currentTarget as HTMLElement).style.color = "var(--accent)";
            }}
          >
            {locale === "fr" ? "Voir la fiche →" : "View guide →"}
          </button>
        </motion.div>
      </div>
    </section>
  );
}
