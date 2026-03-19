import type { Locale } from "@/lib/copy";
import { copy } from "@/lib/copy";

type FooterProps = {
  locale: Locale;
};

export function Footer({ locale }: FooterProps) {
  const t = copy[locale].footer;

  const navLinks = [
    { id: "hero", label: t.links.home },
    { id: "collection", label: t.links.collection },
    { id: "rituels", label: t.links.rituels },
    { id: "a-propos", label: t.links.aPropos },
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
        background: "var(--surface)",
        borderColor: "var(--border)",
      }}
    >
      <div className="mx-auto w-full max-w-6xl px-5 md:px-8">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          {/* Brand column */}
          <div>
            {/* Animated logo video */}
            <div className="mb-5 overflow-hidden" style={{ width: "96px" }}>
              <video
                src="/media/mossa-logo-animated.mp4"
                autoPlay
                muted
                loop
                playsInline
                aria-hidden="true"
                style={{
                  width: "96px",
                  opacity: 0.8,
                  display: "block",
                }}
              />
            </div>
            <p
              className="font-serif text-2xl font-light tracking-widest mb-3"
              style={{ color: "var(--text-primary)" }}
            >
              Mossä
            </p>
            <p
              className="text-[10px] uppercase tracking-[0.28em] mb-4"
              style={{ color: "var(--accent)" }}
            >
              {t.tagline}
            </p>
            <p className="text-sm" style={{ color: "var(--text-muted)" }}>
              Montréal, Québec
            </p>
            <a
              href="mailto:bonjour@mossa.ca"
              className="mt-1 block text-sm transition-opacity hover:opacity-70"
              style={{ color: "var(--text-muted)" }}
            >
              bonjour@mossa.ca
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
              href="mailto:bonjour@mossa.ca"
              className="inline-flex border px-5 py-3 text-[10px] uppercase tracking-[0.22em] transition-all duration-200 hover:opacity-80"
              style={{
                borderColor: "var(--accent)",
                color: "var(--accent)",
              }}
            >
              bonjour@mossa.ca
            </a>
            {/* Social links */}
            <div className="mt-6 flex gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[10px] uppercase tracking-[0.2em] transition-opacity hover:opacity-70"
                style={{ color: "var(--text-muted)" }}
                aria-label="Instagram"
              >
                Instagram
              </a>
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
    </footer>
  );
}
