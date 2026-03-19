import { useLocation, useNavigate } from "react-router-dom";

type Locale = "fr" | "en";

type BottomActionBarProps = {
  locale?: Locale;
};

const routePrimary: Record<string, { fr: string; en: string }> = {
  "/": { fr: "Planifier", en: "Plan" },
  "/collection": { fr: "Demander infos", en: "Request info" },
  "/sur-mesure": { fr: "Parler a une conseillere", en: "Talk to an advisor" },
  "/a-propos": { fr: "Nous joindre", en: "Contact us" },
};

export function BottomActionBar({ locale = "fr" }: BottomActionBarProps) {
  const location = useLocation();
  const navigate = useNavigate();
  const primary = routePrimary[location.pathname] ?? routePrimary["/"];

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-[#D9D0C4] bg-[#F6F1E8]/95 px-4 py-3 backdrop-blur-md">
      <div className="mx-auto flex w-full max-w-6xl gap-3">
        <button
          type="button"
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="flex-1 border border-[#2E352E] bg-[#2E352E] px-4 py-3 text-[10px] uppercase tracking-[0.22em] text-[#F6F1E8]"
        >
          {locale === "fr" ? primary.fr : primary.en}
        </button>
        <button
          type="button"
          onClick={() => {
            navigate("/collection");
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="flex-1 border border-[#B7AEA1] px-4 py-3 text-[10px] uppercase tracking-[0.22em] text-[#2E352E]"
        >
          {locale === "fr" ? "Voir collection" : "View collection"}
        </button>
      </div>
    </div>
  );
}
