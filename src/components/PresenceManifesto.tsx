import { motion } from "motion/react";
import content from "@/lib/content.json";

type Locale = "fr" | "en";

type PresenceManifestoProps = {
  locale?: Locale;
};

export function PresenceManifesto({ locale = "fr" }: PresenceManifestoProps) {
  return (
    <section className="bg-[#EFE7DA] py-20 md:py-28">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-5 md:grid-cols-2 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <p className="text-[10px] uppercase tracking-[0.3em] text-[#5E6F5C]">{content.about.eyebrow}</p>
          <h2 className="mt-4 max-w-md font-serif text-3xl leading-tight text-[#2E352E] md:text-5xl">{content.about.title}</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
          className="space-y-6"
        >
          <p className="text-base leading-relaxed text-[#4E584C]">{content.about.body}</p>
          <p className="border-l border-[#B7AEA1] pl-4 text-sm leading-relaxed text-[#5A6458]">
            {locale === "fr"
              ? "Présence discrète. Gestes justes. Chaque décision honorée avec clarté."
              : "Quiet presence. Clear choices. Every detail handled with dignity."}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
