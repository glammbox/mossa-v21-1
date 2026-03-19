import { motion } from "motion/react";
import { CATEGORY_LABELS, type AssetCategory } from "@/lib/asset-manifest";

type Locale = "fr" | "en";

interface CategoryFilterBarProps {
  categories: AssetCategory[];
  activeCategory: AssetCategory;
  onSelect: (category: AssetCategory) => void;
  locale?: Locale;
  className?: string;
}

export function CategoryFilterBar({
  categories,
  activeCategory,
  onSelect,
  locale = "fr",
  className = "",
}: CategoryFilterBarProps) {
  return (
    <div
      role="group"
      aria-label={locale === "fr" ? "Filtrer par catégorie" : "Filter by category"}
      className={["flex flex-wrap items-center gap-2", className].join(" ").trim()}
    >
      {categories.map((cat) => {
        const isActive = cat === activeCategory;
        const label = locale === "fr" ? CATEGORY_LABELS[cat].fr : CATEGORY_LABELS[cat].en;

        return (
          <motion.button
            key={cat}
            type="button"
            onClick={() => onSelect(cat)}
            whileTap={{ scale: 0.97 }}
            className={[
              "relative px-4 py-2 text-[10px] uppercase tracking-[0.22em] transition-colors duration-200",
              isActive
                ? "border border-[#2E352E] bg-[#2E352E] text-[#F6F1E8]"
                : "border border-[#B7AEA1] bg-transparent text-[#2E352E] hover:border-[#2E352E]",
            ]
              .join(" ")
              .trim()}
            aria-pressed={isActive}
          >
            {label}
            {isActive && (
              <motion.span
                layoutId="category-underline"
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#5E6F5C]"
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
              />
            )}
          </motion.button>
        );
      })}
    </div>
  );
}
