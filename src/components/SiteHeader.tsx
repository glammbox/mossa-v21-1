import { useEffect, useState } from "react";
import { Menu, Moon, Sun, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import type { Locale } from "@/lib/copy";
import { copy } from "@/lib/copy";
import type { Theme } from "@/hooks/useTheme";

type SiteHeaderProps = {
  locale: Locale;
  theme: Theme;
  onLocaleToggle: () => void;
  onThemeToggle: () => void;
};

export function SiteHeader({
  locale,
  theme,
  onLocaleToggle,
  onThemeToggle,
}: SiteHeaderProps) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const t = copy[locale].nav;

  const navItems = [
    { href: "#hero", label: t.home },
    { href: "#a-propos", label: t.aPropos },
    { href: "#services", label: t.rituels },
    { href: "#collection", label: t.collection },
    { href: "#livres", label: t.livres },
    { href: "#engagement", label: t.engagement },
  ];

  function handleNav(href: string) {
    setOpen(false);
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) {
      const headerOffset = 88;
      const y = el.getBoundingClientRect().top + window.scrollY - headerOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }

  return (
    <header
      className="sticky top-0 z-40 transition-all duration-300"
      style={{
        background: scrolled ? "var(--header-bg)" : "transparent",
        borderBottom: scrolled ? "1px solid var(--header-border)" : "1px solid transparent",
        backdropFilter: scrolled ? "blur(16px)" : "none",
      }}
    >
      <div className="mx-auto flex h-20 w-full max-w-6xl items-center justify-between px-5 md:px-8">
        {/* Logo */}
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex items-center gap-2 focus:outline-none"
          aria-label="Mossä — retour en haut"
        >
          <span
            className="font-serif text-2xl font-light tracking-widest"
            style={{ color: "var(--text-primary)" }}
          >
            Mossä
          </span>
        </button>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <button
              key={item.href}
              type="button"
              onClick={() => handleNav(item.href)}
              className="text-[11px] uppercase tracking-[0.24em] transition-colors duration-200"
              style={{ color: theme === "light" ? "var(--text-primary)" : "var(--text-muted)" }}
              onMouseEnter={(e) =>
                ((e.target as HTMLElement).style.color = "var(--text-primary)")
              }
              onMouseLeave={(e) =>
                ((e.target as HTMLElement).style.color = theme === "light" ? "var(--text-primary)" : "var(--text-muted)")
              }
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Controls */}
        <div className="flex items-center gap-2">
          {/* Theme Toggle */}
          <button
            type="button"
            onClick={onThemeToggle}
            aria-label={
              theme === "dark"
                ? locale === "fr"
                  ? "Passer en mode clair"
                  : "Switch to light mode"
                : locale === "fr"
                  ? "Passer en mode sombre"
                  : "Switch to dark mode"
            }
            className="hidden items-center justify-center rounded-sm border p-2 transition-all duration-200 hover:opacity-80 md:flex"
            style={{
              borderColor: "var(--border)",
              color: "var(--text-secondary)",
            }}
          >
            <motion.div
              key={theme}
              initial={{ opacity: 0, rotate: -30 }}
              animate={{ opacity: 1, rotate: 0 }}
              transition={{ duration: 0.25 }}
            >
              {theme === "dark" ? <Sun size={14} /> : <Moon size={14} />}
            </motion.div>
          </button>

          {/* Language Toggle */}
          <button
            type="button"
            onClick={onLocaleToggle}
            className="hidden border px-3 py-1.5 text-[10px] uppercase tracking-[0.2em] transition-all duration-200 hover:opacity-80 md:inline-flex"
            style={{
              borderColor: "var(--border)",
              color: "var(--text-secondary)",
            }}
          >
            {locale === "fr" ? "EN" : "FR"}
          </button>

          {/* Mobile menu toggle */}
          <button
            type="button"
            className="inline-flex items-center justify-center p-1 md:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            style={{ color: "var(--text-primary)" }}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden border-t md:hidden"
            style={{
              background: "var(--bg-elevated)",
              borderColor: "var(--border)",
            }}
          >
            <div className="flex flex-col gap-5 px-6 py-6">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  type="button"
                  onClick={() => handleNav(item.href)}
                  className="text-left text-[11px] uppercase tracking-[0.24em] transition-colors duration-200"
                  style={{ color: theme === "light" ? "var(--text-primary)" : "var(--text-secondary)" }}
                >
                  {item.label}
                </button>
              ))}
              <div className="mt-2 flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => { onThemeToggle(); setOpen(false); }}
                  className="flex items-center justify-center rounded-sm border p-2"
                  style={{ borderColor: "var(--border)", color: "var(--text-secondary)" }}
                  aria-label={theme === "dark" ? "Light mode" : "Dark mode"}
                >
                  {theme === "dark" ? <Sun size={14} /> : <Moon size={14} />}
                </button>
                <button
                  type="button"
                  className="border px-3 py-1.5 text-[10px] uppercase tracking-[0.2em]"
                  style={{ borderColor: "var(--border)", color: "var(--text-secondary)" }}
                  onClick={() => { onLocaleToggle(); setOpen(false); }}
                >
                  {locale === "fr" ? "EN" : "FR"}
                </button>
              </div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
