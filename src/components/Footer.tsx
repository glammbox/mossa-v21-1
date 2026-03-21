import type { Locale } from "@/lib/copy";
import { copy } from "@/lib/copy";

type FooterProps = {
  locale: Locale;
  onQuoteFormOpen?: () => void;
};

export function Footer({ locale, onQuoteFormOpen }: FooterProps) {
  const t = copy[locale].footer;

  const navLinks = [
    { id: "hero", label: t.links.home },
    { id: "a-propos", label: t.links.aPropos },
    { id: "services", label: t.links.rituels },
    { id: "collection", label: t.links.collection },
    { id: "livres", label: locale === "fr" ? "Boutique" : "Boutique" },
    { id: "engagement", label: t.links.contact },
  ];

  function scrollTo(id: string) {
    const el = document.getElementById(id);
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 88;
      window.scrollTo({ top: y, behavior: "smooth" });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }

  return (
    <footer
      className="border-t py-16 md:py-20"
      style={{
        background: "var(--bg)",
        borderColor: "var(--border)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Video background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        src="/video/hero.mp4"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: 0,
        }}
      />
      {/* Overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "rgba(10,11,9,0.75)",
          zIndex: 1,
        }}
      />
      {/* Footer content */}
      <div style={{ position: "relative", zIndex: 2 }}>
        <div className="mx-auto w-full max-w-6xl px-5 md:px-8">
          <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
            {/* Brand column */}
            <div>
              <p
                className="font-serif text-2xl font-light tracking-widest mb-1"
                style={{ color: "var(--text-primary)" }}
              >
                Mossä
              </p>
              <p
                className="text-[10px] uppercase tracking-[0.28em] mb-2"
                style={{ color: "var(--accent)" }}
              >
                {t.tagline}
              </p>
              <p
                className="text-sm italic mb-4"
                style={{ color: "var(--text-muted)" }}
              >
                Stéphanie De Cesare
              </p>
              <p className="text-sm" style={{ color: "var(--text-muted)" }}>
                Centre du Québec
              </p>
              <a
                href="mailto:contact@mossä.com"
                className="mt-1 block text-sm transition-opacity hover:opacity-70"
                style={{ color: "var(--text-muted)" }}
              >
                contact@mossä.com
              </a>
              <a
                href="tel:8198162816"
                className="mt-1 block text-sm transition-opacity hover:opacity-70"
                style={{ color: "var(--text-muted)" }}
              >
                819-816-2816
              </a>
            </div>

            {/* Navigation */}
            <nav>
              <p
                className="mb-4 text-[10px] uppercase tracking-[0.28em]"
                style={{ color: "var(--text-muted)" }}
              >
                {t.nav}
              </p>
              <div className="flex flex-col gap-2.5">
                {navLinks.map((link) => (
                  <button
                    key={link.id}
                    type="button"
                    onClick={() => scrollTo(link.id)}
                    className="text-left text-sm transition-opacity hover:opacity-70"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    {link.label}
                  </button>
                ))}
              </div>
            </nav>

            {/* Contact */}
            <div>
              <p
                className="mb-4 text-[10px] uppercase tracking-[0.28em]"
                style={{ color: "var(--text-muted)" }}
              >
                {t.contact}
              </p>
              <a
                href="mailto:contact@mossä.com"
                className="inline-flex border px-5 py-3 text-[10px] uppercase tracking-[0.22em] transition-all duration-200 hover:opacity-80"
                style={{
                  background: "var(--accent)",
                  borderColor: "var(--accent)",
                  color: "#0A0B09",
                }}
              >
                contact@mossä.com
              </a>
              <button
                type="button"
                onClick={() => onQuoteFormOpen?.()}
                className="mt-3 inline-flex border px-5 py-3 text-[10px] uppercase tracking-[0.22em] transition-all duration-200 hover:opacity-80"
                style={{
                  background: "var(--accent)",
                  borderColor: "var(--accent)",
                  color: "#0A0B09",
                }}
              >
                {locale === "fr" ? "Demander un devis" : "Request a Quote"}
              </button>
              {/* Social links */}
              <div className="mt-6 flex flex-col gap-3">
                {[
                  { label: "Instagram", href: "#" },
                  { label: "TikTok", href: "#" },
                  { label: "Facebook", href: "#" },
                ].map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    className="inline-flex border px-5 py-2.5 text-[10px] uppercase tracking-[0.22em] transition-all duration-200 hover:opacity-80"
                    style={{
                      background: "var(--accent)",
                      borderColor: "var(--accent)",
                      color: "#0A0B09",
                    }}
                  >
                    {s.label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div
            className="mt-14 flex flex-col items-start justify-between gap-4 border-t pt-6 md:flex-row md:items-center"
            style={{ borderColor: "var(--border)" }}
          >
            <p className="text-xs" style={{ color: "var(--text-muted)" }}>
              {t.rights}
            </p>
            <p className="text-xs" style={{ color: "var(--text-muted)" }}>
              Créations végétales · Sur commande
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
