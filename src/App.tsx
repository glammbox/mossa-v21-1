import { useState } from "react";
import { useTheme } from "@/hooks/useTheme";
import { useLanguage } from "@/hooks/useLanguage";
import { SiteHeader } from "@/components/SiteHeader";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { Collection } from "@/components/Collection";
import { Entretiens } from "@/components/Entretiens";
import { Engagement } from "@/components/Engagement";
import { Footer } from "@/components/Footer";
import { QuoteFormModal } from "@/components/QuoteFormModal";
import { CareBooks } from "@/components/CareBooks";
import { CareGuideModal } from "@/components/CareGuideModal";

export default function App() {
  const [theme, toggleTheme] = useTheme();
  const [locale, toggleLocale] = useLanguage("fr");
  const [quoteFormOpen, setQuoteFormOpen] = useState(false);
  const [careGuideOpen, setCareGuideOpen] = useState(false);

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
      <Services locale={locale} onQuoteFormOpen={() => setQuoteFormOpen(true)} />
      <Collection locale={locale} />
      <Entretiens locale={locale} onCareGuideOpen={() => setCareGuideOpen(true)} />
      <CareBooks locale={locale} />
      <Engagement locale={locale} onQuoteFormOpen={() => setQuoteFormOpen(true)} />
      <Footer locale={locale} onQuoteFormOpen={() => setQuoteFormOpen(true)} />

      {/* QuoteFormModal */}
      <QuoteFormModal
        isOpen={quoteFormOpen}
        onClose={() => setQuoteFormOpen(false)}
        locale={locale}
      />

      {/* CareGuideModal */}
      <CareGuideModal
        isOpen={careGuideOpen}
        onClose={() => setCareGuideOpen(false)}
        locale={locale}
      />
    </div>
  );
}
