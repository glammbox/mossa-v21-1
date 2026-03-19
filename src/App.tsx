import { useState } from "react";
import { useTheme } from "@/hooks/useTheme";
import { useLanguage } from "@/hooks/useLanguage";
import { SiteHeader } from "@/components/SiteHeader";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { Collection } from "@/components/Collection";
import { CareGuideButton } from "@/components/CareGuideButton";
import { CareGuide } from "@/components/CareGuide";
import { Engagement } from "@/components/Engagement";
import { Footer } from "@/components/Footer";

export default function App() {
  const [theme, toggleTheme] = useTheme();
  const [locale, toggleLocale] = useLanguage("fr");
  const [careOpen, setCareOpen] = useState(false);

  return (
    <div style={{ background: "var(--bg)", color: "var(--text-primary)" }}>
      <SiteHeader
        locale={locale}
        theme={theme}
        onLocaleToggle={toggleLocale}
        onThemeToggle={toggleTheme}
      />
      <Hero locale={locale} />
      <About locale={locale} />
      <Services locale={locale} />
      <Collection locale={locale} />
      <CareGuideButton locale={locale} onOpen={() => setCareOpen(true)} />
      <Engagement locale={locale} />
      <Footer locale={locale} />

      {/* CareGuide modal overlay */}
      {careOpen && (
        <div
          className="fixed inset-0 z-50 overflow-y-auto"
          style={{ background: "rgba(17,22,26,0.85)", backdropFilter: "blur(6px)" }}
          onClick={(e) => {
            if (e.target === e.currentTarget) setCareOpen(false);
          }}
        >
          <div
            className="relative mx-auto my-8 max-w-3xl"
            style={{ background: "var(--bg)", border: "1px solid var(--border)" }}
          >
            <button
              type="button"
              onClick={() => setCareOpen(false)}
              className="absolute right-5 top-5 z-10 p-2 text-[10px] uppercase tracking-[0.2em]"
              style={{ color: "var(--text-muted)" }}
            >
              ✕ {locale === "fr" ? "Fermer" : "Close"}
            </button>
            <CareGuide locale={locale} />
          </div>
        </div>
      )}
    </div>
  );
}
