import { useTheme } from "@/hooks/useTheme";
import { useLanguage } from "@/hooks/useLanguage";
import { SiteHeader } from "@/components/SiteHeader";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Collection } from "@/components/Collection";
import { Rituels } from "@/components/Rituels";
import { CareGuide } from "@/components/CareGuide";
import { Engagement } from "@/components/Engagement";
import { Footer } from "@/components/Footer";

export default function App() {
  const [theme, toggleTheme] = useTheme();
  const [locale, toggleLocale] = useLanguage("fr");

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
      <Collection locale={locale} />
      <Rituels locale={locale} />
      <CareGuide locale={locale} />
      <Engagement locale={locale} />
      <Footer locale={locale} />
    </div>
  );
}
