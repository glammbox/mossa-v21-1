import { motion } from "motion/react";
import { Link } from "react-router-dom";
import content from "@/lib/content.json";

const featuredImages = ["/images/product-2.jpg", "/images/product-3.jpg", "/images/product-4.jpg"];

export function CollectionPreview() {
  return (
    <section className="bg-[#F6F1E8] py-20 md:py-28">
      <div className="mx-auto w-full max-w-6xl px-5 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mb-12 md:mb-16"
        >
          <p className="text-[10px] uppercase tracking-[0.3em] text-[#5E6F5C]">{content.sections[0].eyebrow}</p>
          <h3 className="mt-4 max-w-2xl font-serif text-3xl leading-tight text-[#2E352E] md:text-5xl">{content.sections[0].title}</h3>
        </motion.div>

        <div className="grid gap-7 md:grid-cols-3">
          {content.featuredCards.map((card, index) => (
            <motion.article
              key={card.name}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-90px" }}
              transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.08 }}
              className="group border border-[#D9D0C4] bg-[#EFE7DA]"
            >
              <figure className="overflow-hidden">
                <img
                  src={featuredImages[index] ?? featuredImages[0]}
                  alt={card.name}
                  className="aspect-[4/5] h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
              </figure>
              <div className="space-y-3 p-5">
                <p className="text-[10px] uppercase tracking-[0.22em] text-[#5E6F5C]">{card.tagline}</p>
                <h4 className="font-serif text-2xl leading-tight text-[#2E352E]">{card.name}</h4>
                <p className="text-sm leading-relaxed text-[#4E584C]">{card.description}</p>
                <Link to="/collection" className="inline-flex pt-1 text-[10px] uppercase tracking-[0.22em] text-[#2E352E] underline-offset-4 hover:underline">
                  {card.cta}
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
