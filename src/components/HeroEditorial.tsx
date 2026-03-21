import type { Locale } from "@/lib/copy";

type HeroEditorialProps = {
  locale: Locale;
};

const trustItems = {
  fr: [
    { icon: "◆", label: "Sur commande" },
    { icon: "◆", label: "Artisanal" },
    { icon: "◆", label: "Livraison Québec" },
  ],
  en: [
    { icon: "◆", label: "Made to order" },
    { icon: "◆", label: "Artisan crafted" },
    { icon: "◆", label: "Québec delivery" },
  ],
};

export function HeroEditorial({ locale }: HeroEditorialProps) {
  const items = trustItems[locale];
  return (
    <div className="hero-editorial">
      {items.map((item) => (
        <div key={item.label} className="hero-editorial__item">
          <span style={{ color: "var(--gold)", fontSize: "0.45rem" }}>{item.icon}</span>
          <span>{item.label}</span>
        </div>
      ))}
    </div>
  );
}
