import { Link } from "react-router-dom";
import content from "@/lib/content.json";
import { LogoMark } from "@/components/LogoMark";

type Locale = "fr" | "en";

type ZenFooterProps = {
  locale?: Locale;
};

export function ZenFooter({ locale = "fr" }: ZenFooterProps) {
  return (
    <footer className="border-t border-[#D9D0C4] bg-[#EFE7DA] px-5 pb-28 pt-16 md:px-8 md:pb-16">
      <div className="mx-auto grid w-full max-w-6xl gap-10 md:grid-cols-[1.2fr_1fr_1fr]">
        <div>
          <LogoMark className="mb-4" />
          <p className="text-[10px] uppercase tracking-[0.26em] text-[#5E6F5C]">{content.footer.brandTagline}</p>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-[#4E584C]">{content.footer.contactLine}</p>
        </div>

        <nav className="flex flex-col gap-3">
          <p className="text-[10px] uppercase tracking-[0.24em] text-[#5E6F5C]">{locale === "fr" ? "Navigation" : "Navigation"}</p>
          <Link to="/" className="text-sm text-[#2E352E] hover:underline">Accueil</Link>
          <Link to="/collection" className="text-sm text-[#2E352E] hover:underline">Collection</Link>
          <Link to="/sur-mesure" className="text-sm text-[#2E352E] hover:underline">Sur mesure</Link>
          <Link to="/a-propos" className="text-sm text-[#2E352E] hover:underline">A propos</Link>
        </nav>

        <div className="space-y-3">
          <p className="text-[10px] uppercase tracking-[0.24em] text-[#5E6F5C]">{content.contact.eyebrow}</p>
          <p className="text-sm leading-relaxed text-[#4E584C]">{content.contact.body}</p>
          <a href="mailto:bonjour@mossa.ca" className="inline-flex border border-[#2E352E] px-4 py-2 text-[10px] uppercase tracking-[0.22em] text-[#2E352E] transition-colors hover:bg-[#2E352E] hover:text-[#F6F1E8]">
            {locale === "fr" ? content.contact.ctaPrimary : content.contact.ctaSecondary}
          </a>
        </div>
      </div>
    </footer>
  );
}
