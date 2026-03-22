import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import type { Locale } from "@/lib/copy";

type CareBooksProps = {
  locale: Locale;
};

// ── Category types ─────────────────────────────────────────────────────────────
type CategoryId = "outils" | "roches" | "contenants" | "kusamono" | "guides";

type Category = {
  id: CategoryId;
  labelFr: string;
  labelEn: string;
  image: string;
};

const CATEGORIES: Category[] = [
  {
    id: "outils",
    labelFr: "Outils & Accessoires",
    labelEn: "Tools & Accessories",
    image: "/images/shop/shop-tools.jpg",
  },
  {
    id: "roches",
    labelFr: "Roches & Sables",
    labelEn: "Rocks & Sands",
    image: "/images/shop/shop-rocks.jpg",
  },
  {
    id: "contenants",
    labelFr: "Contenants & Plateaux",
    labelEn: "Pots & Trays",
    image: "/images/shop/shop-dish.jpg",
  },
  {
    id: "kusamono",
    labelFr: "Kusamono & Kokedama",
    labelEn: "Kusamono & Kokedama",
    image: "/images/shop/shop-moss.jpg",
  },
  {
    id: "guides",
    labelFr: "Guides",
    labelEn: "Guides",
    image: "/images/inbound/inbound-01.jpg",
  },
];

// ── Book type ──────────────────────────────────────────────────────────────────
type Book = {
  id: string;
  titleFr: string;
  titleEn: string;
  descFr: string;
  descEn: string;
  price: number;
  image: string;
};

const BOOKS: Book[] = [
  {
    id: "orchidees",
    titleFr: "Guide Orchidées",
    titleEn: "Orchid Guide",
    descFr: "Maîtrisez les secrets des orchidées.\nArrosage, floraison, rempotage.",
    descEn: "Master the secrets of orchids.\nWatering, blooming, repotting.",
    price: 5,
    image: "/images/inbound/inbound-01.jpg",
  },
  {
    id: "zen",
    titleFr: "Guide Jardin Zen",
    titleEn: "Zen Garden Guide",
    descFr: "Créez et entretenez votre jardin zen.\nEquilibre, mousse et pierres.",
    descEn: "Create and maintain your zen garden.\nBalance, moss, and stones.",
    price: 5,
    image: "/images/inbound/inbound-02.jpg",
  },
  {
    id: "terrarium",
    titleFr: "Guide Terrarium de Mousse",
    titleEn: "Moss Terrarium Guide",
    descFr: "Construisez un écosystème de mousse vivant.\nTechniques et entretien saisonnier.",
    descEn: "Build a living moss ecosystem.\nTechniques and seasonal care.",
    price: 5,
    image: "/images/inbound/inbound-03.jpg",
  },
  {
    id: "succulentes",
    titleFr: "Guide Succulentes",
    titleEn: "Succulent Guide",
    descFr: "Tout sur les succulentes et cactées.\nRésistance, style et multiplication.",
    descEn: "Everything on succulents and cacti.\nResilience, style, and propagation.",
    price: 5,
    image: "/images/inbound/inbound-04.jpg",
  },
];

// ── Product type ───────────────────────────────────────────────────────────────
type Product = {
  id: string;
  titleFr: string;
  titleEn: string;
  descFr: string;
  descEn: string;
  price: string;
  image: string;
  asin?: string;
  amazonQuery: string;
};

// Outils — images rotate: tools, wire, mister, tools, wire, mister
const OUTILS: Product[] = [
  {
    id: "bonsai-set-13",
    titleFr: "Coffret 13 Outils Bonsaï",
    titleEn: "13-Piece Bonsai Tools Set",
    descFr: "Kit complet pour tailler, former et entretenir vos bonsaïs.",
    descEn: "Complete kit to prune, shape, and care for your bonsai trees.",
    price: "~35–45 CAD",
    image: "/images/shop/shop-tools.jpg",
    asin: "B0868BSJ2Y",
    amazonQuery: "MOSFiATA+13+Piece+Bonsai+Tools+Set",
  },
  {
    id: "wazakura-4pc",
    titleFr: "Kit Essentiel Wazakura 4 pcs",
    titleEn: "Wazakura Essential Tool Kit 4PCS",
    descFr: "Outils japonais de qualité professionnelle pour le bonsaï.",
    descEn: "Professional-grade Japanese bonsai tools.",
    price: "~70–95 CAD",
    image: "/images/shop/shop-wire.jpg",
    asin: "B09J4W5V1J",
    amazonQuery: "Wazakura+Essential+Tool+Kit+4PCS+Bonsai",
  },
  {
    id: "scissors-hanafubuki",
    titleFr: "Ciseaux Bonsaï Hanafubuki 7\"",
    titleEn: "Hanafubuki Twig Bonsai Scissors 7\"",
    descFr: "Ciseaux japonais précis pour les petites branches.",
    descEn: "Precise Japanese scissors for fine branches.",
    price: "~35–50 CAD",
    image: "/images/shop/shop-mister.jpg",
    asin: "B08C9QTJV5",
    amazonQuery: "Hanafubuki+Wazakura+Twig+Bonsai+Scissors",
  },
  {
    id: "tweezers-kakuri",
    titleFr: "Pinces Bonsaï KaKUrI 8.8\"",
    titleEn: "KaKUrI Bonsai Tweezers 8.8\"",
    descFr: "Pinces inoxydables professionnelles pour un travail délicat.",
    descEn: "Professional stainless steel tweezers for delicate work.",
    price: "~25–40 CAD",
    image: "/images/shop/shop-tools.jpg",
    asin: "B08JKBQ5BT",
    amazonQuery: "KaKUrI+Bonsai+Tweezers+Professional+Stainless",
  },
  {
    id: "wire-zelarman",
    titleFr: "Fils Aluminium Bonsaï 4 Rouleaux",
    titleEn: "ZELARMAN 4 Rolls Aluminum Bonsai Wire",
    descFr: "Fil aluminium souple pour façonner branches et troncs.",
    descEn: "Soft aluminum wire for shaping branches and trunks.",
    price: "~12–20 CAD",
    image: "/images/shop/shop-wire.jpg",
    asin: "B07S7PPJ22",
    amazonQuery: "ZELARMAN+4+Rolls+Aluminum+Bonsai+Wire+Set",
  },
  {
    id: "mister-loopseed",
    titleFr: "Vaporisateur Inox LOOPSEED",
    titleEn: "LOOPSEED Stainless Steel Plant Mister",
    descFr: "Vaporisateur élégant en acier inoxydable pour humidifier vos plantes.",
    descEn: "Elegant stainless steel mister to keep plants hydrated.",
    price: "~20–30 CAD",
    image: "/images/shop/shop-mister.jpg",
    asin: "B09KLMFHF9",
    amazonQuery: "LOOPSEED+Stainless+Steel+Plant+Mister",
  },
];

// Roches — images rotate: rocks, sand, rocks, sand, rocks, sand
const ROCHES: Product[] = [
  {
    id: "jade-pebbles",
    titleFr: "Galets Jade 6lb",
    titleEn: "ZENFUN Jade Bean Pebbles 6LB",
    descFr: "Galets décoratifs teintés jade pour jardins zen et bonsaïs.",
    descEn: "Jade-tinted decorative pebbles for zen gardens and bonsai.",
    price: "~22–35 CAD",
    image: "/images/shop/shop-rocks.jpg",
    asin: "",
    amazonQuery: "ZENFUN+Jade+Bean+Pebbles+decorative+rocks",
  },
  {
    id: "maifanitum",
    titleFr: "Roches Décoratives Maifanitum 3lb",
    titleEn: "Maifanitum Decorative Rocks 3lb",
    descFr: "Pierres naturelles poreuses idéales pour le drainage bonsaï.",
    descEn: "Natural porous stones ideal for bonsai drainage.",
    price: "~15–22 CAD",
    image: "/images/shop/shop-sand.jpg",
    asin: "B0BKS2K322",
    amazonQuery: "Maifanitum+Decorative+Rocks+bonsai",
  },
  {
    id: "tumbled-chips",
    titleFr: "Graviers Tumbled T4U 1lb",
    titleEn: "T4U Tumbled Chips Stones Gravel 1lb",
    descFr: "Graviers polis assortis pour compositions et terrariums.",
    descEn: "Assorted polished gravel for arrangements and terrariums.",
    price: "~12–18 CAD",
    image: "/images/shop/shop-rocks.jpg",
    asin: "B08Y886N7H",
    amazonQuery: "T4U+Tumbled+Chips+Stones+Gravel+bonsai",
  },
  {
    id: "river-pebbles",
    titleFr: "Galets de Rivière Naturels",
    titleEn: "Natural Mixed River Pebbles Decorative Gravel",
    descFr: "Galets de rivière mélangés pour décor de jardins et terrariums.",
    descEn: "Mixed river pebbles for garden and terrarium décor.",
    price: "~15–25 CAD",
    image: "/images/shop/shop-sand.jpg",
    asin: "B08HS4BN11",
    amazonQuery: "Natural+Mixed+River+Pebbles+Decorative+Gravel",
  },
  {
    id: "bonsai-rocks-mini",
    titleFr: "Pierres Mini Bonsaï/Cactus 2.65lb",
    titleEn: "Mini Bonsai Cactus Succulent Rocks 2.65lb",
    descFr: "Pierres fines pour succulentes, cactées et bonsaïs miniatures.",
    descEn: "Fine stones for succulents, cacti, and miniature bonsai.",
    price: "~14–22 CAD",
    image: "/images/shop/shop-rocks.jpg",
    asin: "B0DNFDBWLT",
    amazonQuery: "Mini+Bonsai+Cactus+Succulent+Rocks",
  },
  {
    id: "lava-pebbles",
    titleFr: "Lave Noire / Silice Grossière Bonsaï",
    titleEn: "Coarse Silica / Black Lava Pebbles for Bonsai",
    descFr: "Substrat volcanique aéré pour un drainage optimal.",
    descEn: "Volcanic aerated substrate for optimal drainage.",
    price: "~18–28 CAD",
    image: "/images/shop/shop-sand.jpg",
    asin: "B07W8C9CLJ",
    amazonQuery: "Coarse+Silica+Black+Lava+Pebbles+Bonsai",
  },
];

// Contenants — images rotate: dish, vessel, dish, vessel, dish, vessel
const CONTENANTS: Product[] = [
  {
    id: "artketty-ceramic",
    titleFr: "Pots Céramique Bonsaï 7.3\" (lot de 2)",
    titleEn: "ARTKETTY 7.3\" Ceramic Bonsai Pots (Set of 2)",
    descFr: "Pots céramique avec soucoupes, style japonais élégant.",
    descEn: "Ceramic pots with trays, elegant Japanese style.",
    price: "~35–50 CAD",
    image: "/images/shop/shop-dish.jpg",
    asin: "B0D1C7S18H",
    amazonQuery: "ARTKETTY+Ceramic+Bonsai+Pots+with+Trays",
  },
  {
    id: "shallow-ceramic-bonsai",
    titleFr: "Grand Pot Céramique Bonsaï Peu Profond",
    titleEn: "Large Shallow Ceramic Bonsai Pot with Stand",
    descFr: "Pot céramique plat sur support, idéal pour les compositions bonsaïs.",
    descEn: "Flat ceramic pot on stand, ideal for bonsai arrangements.",
    price: "~30–45 CAD",
    image: "/images/shop/shop-vessel.jpg",
    asin: "B09N8RDXD8",
    amazonQuery: "Large+Shallow+Ceramic+Bonsai+Pot+with+Stand",
  },
  {
    id: "homoyoyo-stand",
    titleFr: "Support Bonsaï en Bois Homoyoyo",
    titleEn: "Homoyoyo Wooden Bonsai Display Stand",
    descFr: "Socle en bois pour mettre en valeur votre bonsaï.",
    descEn: "Wooden pedestal to showcase your bonsai beautifully.",
    price: "~18–28 CAD",
    image: "/images/shop/shop-dish.jpg",
    asin: "B0C7LKS6FF",
    amazonQuery: "Homoyoyo+Wooden+Bonsai+Display+Stand",
  },
  {
    id: "zerodeko-pedestal",
    titleFr: "Socle Rectangulaire Zerodeko",
    titleEn: "Zerodeko Rectangular Wooden Display Pedestal",
    descFr: "Piédestal en bois rectangulaire pour compositions zen.",
    descEn: "Rectangular wooden pedestal for zen arrangements.",
    price: "~18–30 CAD",
    image: "/images/shop/shop-vessel.jpg",
    asin: "B0BW3F8WHK",
    amazonQuery: "Zerodeko+Rectangular+Wooden+Display+Pedestal",
  },
  {
    id: "orchid-pots-9pack",
    titleFr: "Pots à Orchidées Clairs Fendus (lot 9)",
    titleEn: "9-Pack Clear Slotted Orchid Pots",
    descFr: "Pots transparents aérés pour surveiller les racines d'orchidées.",
    descEn: "Slotted clear pots to monitor orchid roots easily.",
    price: "~18–30 CAD",
    image: "/images/shop/shop-dish.jpg",
    asin: "B09N91C4GG",
    amazonQuery: "Clear+Slotted+Orchid+Pots+9+Pack",
  },
  {
    id: "yikush-orchid-pots",
    titleFr: "Pots à Orchidées Clairs YIKUSH 10 pcs 7\"",
    titleEn: "YIKUSH 10-Pack 7\" Clear Orchid Pots",
    descFr: "Pots translucides de qualité pour orchidées épiphytes.",
    descEn: "Quality translucent pots for epiphytic orchids.",
    price: "~22–35 CAD",
    image: "/images/shop/shop-vessel.jpg",
    asin: "B08DXN5PHM",
    amazonQuery: "YIKUSH+10+Pack+7+Inch+Clear+Orchid+Pots",
  },
];

// Kusamono — moss products are visually similar, all shop-moss.jpg is OK
const KUSAMONO: Product[] = [
  {
    id: "supermoss-preserved",
    titleFr: "Mousse en Feuille Préservée 2oz",
    titleEn: "SuperMoss Sheet Moss Preserved Fresh Green 2oz",
    descFr: "Mousse naturelle préservée, prête à utiliser en décoration.",
    descEn: "Preserved natural moss, ready to use for decoration.",
    price: "~12–18 CAD",
    image: "/images/shop/shop-moss.jpg",
    asin: "B001E5U1UY",
    amazonQuery: "SuperMoss+Sheet+Moss+Preserved+Fresh+Green",
  },
  {
    id: "supermoss-dried",
    titleFr: "Mousse en Feuille Séchée 8oz",
    titleEn: "SuperMoss Sheet Moss Dried Natural 8oz",
    descFr: "Mousse séchée naturelle pour kokedama et terrarium.",
    descEn: "Natural dried moss for kokedama and terrarium.",
    price: "~18–28 CAD",
    image: "/images/shop/shop-moss.jpg",
    asin: "B004BFZY7O",
    amazonQuery: "SuperMoss+Sheet+Moss+Dried+Natural",
  },
  {
    id: "kokedama-kit",
    titleFr: "Kit DIY Kokedama Gift Republic",
    titleEn: "Gift Republic Art of Kokedama DIY Kit",
    descFr: "Tout le nécessaire pour créer vos premières boules de mousse.",
    descEn: "Everything you need to create your first moss ball art.",
    price: "~25–40 CAD",
    image: "/images/shop/shop-moss.jpg",
    asin: "B0CJ5JJ3N8",
    amazonQuery: "Gift+Republic+Art+of+Kokedama+DIY+Kit",
  },
  {
    id: "kokedama-ball",
    titleFr: "Boule Kokedama Mousse Arcadia",
    titleEn: "Arcadia Kokedama Moss Ball",
    descFr: "Boule de mousse prête à planter — style japonais authentique.",
    descEn: "Ready-to-plant moss ball — authentic Japanese style.",
    price: "~18–28 CAD",
    image: "/images/shop/shop-moss.jpg",
    asin: "B0927ZCXJ9",
    amazonQuery: "Arcadia+Garden+Products+Kokedama+Moss+Ball",
  },
  {
    id: "coconut-husk",
    titleFr: "Fibre de Coco Naturelle pour Orchidées",
    titleEn: "Natural Coconut Husk Fiber for Orchids",
    descFr: "Substrat fibre de coco idéal pour orchidées et kokedama.",
    descEn: "Coco fiber substrate ideal for orchids and kokedama.",
    price: "~15–25 CAD",
    image: "/images/shop/shop-moss.jpg",
    asin: "B00WS40JX4",
    amazonQuery: "Natural+Coconut+Husk+Fiber+Orchids",
  },
  {
    id: "orchiata-bark",
    titleFr: "Écorce d'Orchidée Orchiata",
    titleEn: "Absolute Unlimited Orchiata Orchid Bark",
    descFr: "Écorce de pin de qualité supérieure pour substrat d'orchidées.",
    descEn: "Premium pine bark substrate for orchid growing.",
    price: "~20–35 CAD",
    image: "/images/shop/shop-moss.jpg",
    asin: "B09L7FGVZQ",
    amazonQuery: "Absolute+Unlimited+Orchiata+Orchid+Bark",
  },
];

// ── Cart types ─────────────────────────────────────────────────────────────────
type CartItem =
  | { kind: "book"; item: Book; qty: number }
  | { kind: "product"; item: Product; qty: number };

function cartItemId(c: CartItem) {
  return `${c.kind}:${c.item.id}`;
}

// ── Cart helpers ───────────────────────────────────────────────────────────────
function addItem(prev: CartItem[], newItem: CartItem): CartItem[] {
  const key = cartItemId(newItem);
  const existing = prev.find((c) => cartItemId(c) === key);
  if (existing) {
    return prev.map((c) =>
      cartItemId(c) === key ? { ...c, qty: c.qty + 1 } : c
    );
  }
  return [...prev, newItem];
}

function removeItem(prev: CartItem[], key: string): CartItem[] {
  return prev.filter((c) => cartItemId(c) !== key);
}

function itemName(c: CartItem, isFr: boolean): string {
  return isFr ? c.item.titleFr : c.item.titleEn;
}

function itemPrice(c: CartItem): string {
  if (c.kind === "book") return `${c.item.price} CAD`;
  return c.item.price;
}

function bookTotal(cart: CartItem[]): number {
  return cart.reduce((sum, c) => {
    if (c.kind === "book") return sum + c.item.price * c.qty;
    return sum;
  }, 0);
}

// ── ProductCard ────────────────────────────────────────────────────────────────
function ProductCard({
  product,
  isFr,
  onAddToCart,
  inCartQty,
}: {
  product: Product;
  isFr: boolean;
  onAddToCart: () => void;
  inCartQty: number;
}) {
  return (
    <div
      className="flex flex-col overflow-hidden"
      style={{ border: "1px solid var(--border)", background: "var(--surface)" }}
    >
      {/* Landscape 4:3 image */}
      <div className="overflow-hidden" style={{ aspectRatio: "4/3" }}>
        <img
          src={product.image}
          alt={isFr ? product.titleFr : product.titleEn}
          className="h-full w-full"
          style={{ objectFit: "cover", objectPosition: "center" }}
          loading="lazy"
        />
      </div>
      <div className="flex flex-1 flex-col p-5 text-center">
        <h3
          className="font-serif text-lg font-light mb-2"
          style={{ color: "var(--text-primary)" }}
        >
          {isFr ? product.titleFr : product.titleEn}
        </h3>
        <p
          className="text-sm leading-relaxed mb-4 flex-1"
          style={{ color: "var(--text-muted)" }}
        >
          {isFr ? product.descFr : product.descEn}
        </p>
        <p
          className="font-serif text-base font-light mb-4"
          style={{ color: "var(--text-muted)", letterSpacing: "0.08em" }}
        >
          {product.price}
        </p>
        <button
          type="button"
          onClick={onAddToCart}
          className="w-full py-2.5 text-[10px] uppercase tracking-[0.2em] transition-all duration-200 hover:opacity-80 mb-2"
          style={{
            border: "1px solid var(--accent)",
            color: "var(--accent)",
            background: inCartQty > 0 ? "rgba(167,183,155,0.12)" : "transparent",
          }}
        >
          {inCartQty > 0
            ? isFr ? `Ajouté (${inCartQty})` : `Added (${inCartQty})`
            : isFr ? "Ajouter au panier" : "Add to Cart"}
        </button>
      </div>
    </div>
  );
}

// ── BookCard ───────────────────────────────────────────────────────────────────
function BookCard({
  book,
  isFr,
  onAddToCart,
  inCartQty,
}: {
  book: Book;
  isFr: boolean;
  onAddToCart: () => void;
  inCartQty: number;
}) {
  return (
    <div
      className="flex flex-col overflow-hidden"
      style={{ border: "1px solid var(--border)", background: "var(--surface)" }}
    >
      {/* Landscape 4:3 image */}
      <div className="overflow-hidden" style={{ aspectRatio: "4/3" }}>
        <img
          src={book.image}
          alt={isFr ? book.titleFr : book.titleEn}
          className="h-full w-full"
          style={{ objectFit: "cover", objectPosition: "center" }}
          loading="lazy"
        />
      </div>
      <div className="flex flex-1 flex-col p-5 text-center">
        <p
          className="text-[9px] uppercase tracking-[0.3em] mb-2"
          style={{ color: "var(--accent)" }}
        >
          Made by Mossä
        </p>
        <h3
          className="font-serif text-xl font-light mb-2"
          style={{ color: "var(--text-primary)" }}
        >
          {isFr ? book.titleFr : book.titleEn}
        </h3>
        <p
          className="text-sm leading-relaxed mb-4 flex-1"
          style={{ color: "var(--text-muted)", whiteSpace: "pre-line" }}
        >
          {isFr ? book.descFr : book.descEn}
        </p>
        <p
          className="font-serif text-lg font-light mb-4"
          style={{ color: "var(--text-muted)", letterSpacing: "0.1em" }}
        >
          {book.price} <span style={{ fontSize: "11px" }}>CAD</span>
        </p>
        <button
          type="button"
          onClick={onAddToCart}
          className="w-full py-2.5 text-[10px] uppercase tracking-[0.2em] transition-all duration-200 hover:opacity-80"
          style={{
            border: "1px solid var(--accent)",
            color: "var(--accent)",
            background: inCartQty > 0 ? "rgba(167,183,155,0.12)" : "transparent",
          }}
        >
          {inCartQty > 0
            ? isFr ? `Ajouté (${inCartQty})` : `Added (${inCartQty})`
            : isFr ? "Ajouter au panier" : "Add to Cart"}
        </button>
      </div>
    </div>
  );
}

// ── Main component ─────────────────────────────────────────────────────────────
export function CareBooks({ locale }: CareBooksProps) {
  const [openCategory, setOpenCategory] = useState<CategoryId | null>(null);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [showCart, setShowCart] = useState(false);
  const [checkoutSent, setCheckoutSent] = useState(false);

  const isFr = locale === "fr";

  // ── Cart actions ─────────────────────────────────────────────────────────────
  function addBook(book: Book) {
    setCart((prev) => addItem(prev, { kind: "book", item: book, qty: 1 }));
  }

  function addProduct(product: Product) {
    setCart((prev) => addItem(prev, { kind: "product", item: product, qty: 1 }));
  }

  function removeFromCart(key: string) {
    setCart((prev) => removeItem(prev, key));
  }

  const totalItems = cart.reduce((sum, c) => sum + c.qty, 0);

  // ── Category toggle ──────────────────────────────────────────────────────────
  function handleCategoryClick(id: CategoryId) {
    setOpenCategory((prev) => (prev === id ? null : id));
  }

  // ── Checkout ─────────────────────────────────────────────────────────────────
  function handleCheckout() {
    if (cart.length === 0) return;
    const lines = cart.map((c) => `${itemName(c, isFr)} x${c.qty} — ${itemPrice(c)}`).join("%0A");
    const booksTotal = bookTotal(cart);
    const mailSubject = encodeURIComponent(isFr ? "Commande Boutique Mossä" : "Mossä Shop Order");
    const body = isFr
      ? `Bonjour,%0A%0AVoici ma commande:%0A%0A${lines}%0A%0A${booksTotal > 0 ? `Sous-total guides numériques: ${booksTotal} CAD%0A%0A` : ""}Merci de me contacter pour confirmer la commande et le paiement.%0A%0AMerci!`
      : `Hello,%0A%0AHere is my order:%0A%0A${lines}%0A%0A${booksTotal > 0 ? `Digital guides subtotal: ${booksTotal} CAD%0A%0A` : ""}Please contact me to confirm the order and payment.%0A%0AThank you!`;
    window.location.href = `mailto:mossa@hotmail.com?subject=${mailSubject}&body=${body}`;
    setCheckoutSent(true);
  }

  // ── Render category products ─────────────────────────────────────────────────
  function renderCategoryContent(id: CategoryId) {
    if (id === "guides") {
      return (
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {BOOKS.map((book) => {
            const key = `book:${book.id}`;
            const inCart = cart.find((c) => cartItemId(c) === key);
            return (
              <BookCard
                key={book.id}
                book={book}
                isFr={isFr}
                onAddToCart={() => addBook(book)}
                inCartQty={inCart?.qty ?? 0}
              />
            );
          })}
        </div>
      );
    }

    const productMap: Record<Exclude<CategoryId, "guides">, Product[]> = {
      outils: OUTILS,
      roches: ROCHES,
      contenants: CONTENANTS,
      kusamono: KUSAMONO,
    };

    const products = productMap[id as Exclude<CategoryId, "guides">];

    return (
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => {
          const key = `product:${product.id}`;
          const inCart = cart.find((c) => cartItemId(c) === key);
          return (
            <ProductCard
              key={product.id}
              product={product}
              isFr={isFr}
              onAddToCart={() => addProduct(product)}
              inCartQty={inCart?.qty ?? 0}
            />
          );
        })}
      </div>
    );
  }

  return (
    <section
      id="livres"
      className="py-24 md:py-32"
      style={{ background: "var(--bg-elevated)" }}
    >
      <div className="mx-auto w-full max-w-6xl px-5 md:px-8">

        {/* ── Header ─────────────────────────────────────────────────────────── */}
        <div className="mb-12 flex flex-col items-start gap-4 md:flex-row md:items-end md:justify-between">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <p
              className="mb-3 text-[10px] uppercase tracking-[0.35em]"
              style={{ color: "var(--accent)" }}
            >
              {isFr ? "Boutique" : "Boutique"}
            </p>
            <h2
              className="font-serif text-4xl font-light leading-tight md:text-5xl"
              style={{ color: "var(--text-primary)" }}
            >
              {isFr ? "La Boutique Mossä" : "Mossä Shop"}
            </h2>
            <p
              className="mt-3 max-w-lg text-base leading-relaxed"
              style={{ color: "var(--text-secondary)" }}
            >
              {isFr
                ? "Guides, outils et accessoires sélectionnés par Mossä pour cultiver la beauté au quotidien."
                : "Guides, tools, and accessories curated by Mossä to grow beauty every day."}
            </p>
          </motion.div>

          {/* Cart icon */}
          <button
            type="button"
            onClick={() => setShowCart((v) => !v)}
            className="relative flex items-center gap-2 px-5 py-2.5 text-[10px] uppercase tracking-[0.2em] transition-opacity hover:opacity-70 flex-shrink-0"
            style={{
              border: "1px solid var(--border)",
              color: "var(--text-secondary)",
              background: "var(--surface)",
            }}
          >
            <span style={{ fontSize: "18px" }}>🛒</span>
            {isFr ? "Panier" : "Cart"}
            {totalItems > 0 && (
              <span
                className="flex h-5 w-5 items-center justify-center rounded-full text-[10px] font-semibold"
                style={{ background: "var(--accent)", color: "var(--bg)" }}
              >
                {totalItems}
              </span>
            )}
          </button>
        </div>

        {/* ── Cart Drawer ─────────────────────────────────────────────────────── */}
        <AnimatePresence>
          {showCart && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="overflow-hidden mb-10"
            >
              <div
                className="p-6"
                style={{ border: "1px solid var(--border)", background: "var(--surface)" }}
              >
                <div className="mb-4 flex items-center justify-between">
                  <h3 className="font-serif text-xl font-light" style={{ color: "var(--text-primary)" }}>
                    {isFr ? "Votre panier" : "Your cart"}
                  </h3>
                  <button
                    type="button"
                    onClick={() => setShowCart(false)}
                    className="text-[10px] uppercase tracking-[0.2em] hover:opacity-70"
                    style={{ color: "var(--text-muted)", background: "transparent", border: "none" }}
                  >
                    ✕
                  </button>
                </div>

                {cart.length === 0 ? (
                  <p className="text-sm" style={{ color: "var(--text-muted)" }}>
                    {isFr ? "Votre panier est vide." : "Your cart is empty."}
                  </p>
                ) : (
                  <>
                    <div className="mb-4 flex flex-col gap-3">
                      {cart.map((c) => {
                        const key = cartItemId(c);
                        return (
                          <div key={key} className="flex items-center justify-between gap-4">
                            <div className="flex-1">
                              <span className="text-sm" style={{ color: "var(--text-secondary)" }}>
                                {itemName(c, isFr)}
                              </span>
                              <span className="ml-2 text-[11px]" style={{ color: "var(--text-muted)" }}>
                                ×{c.qty} — {itemPrice(c)}
                              </span>
                            </div>
                            <button
                              type="button"
                              onClick={() => removeFromCart(key)}
                              className="text-[10px] uppercase tracking-[0.15em] hover:opacity-70"
                              style={{ color: "var(--text-muted)", background: "transparent", border: "none" }}
                            >
                              {isFr ? "Retirer" : "Remove"}
                            </button>
                          </div>
                        );
                      })}
                    </div>

                    <div className="mb-4 border-t pt-4" style={{ borderColor: "var(--border)" }}>
                      {bookTotal(cart) > 0 && (
                        <p className="text-sm mb-1" style={{ color: "var(--text-muted)" }}>
                          {isFr
                            ? `Guides numériques: ${bookTotal(cart)} CAD`
                            : `Digital guides: ${bookTotal(cart)} CAD`}
                        </p>
                      )}
                      <p className="text-xs" style={{ color: "var(--text-muted)" }}>
                        {isFr
                          ? "* Les prix des articles physiques sont indicatifs — Stéphanie vous contactera pour confirmer."
                          : "* Physical item prices are indicative — Stéphanie will contact you to confirm."}
                      </p>
                    </div>

                    <div className="flex flex-wrap items-center gap-3">
                      <button
                        type="button"
                        onClick={handleCheckout}
                        className="px-8 py-3 text-[11px] uppercase tracking-[0.2em] font-medium transition-opacity hover:opacity-80"
                        style={{ background: "var(--accent)", color: "var(--bg)", border: "none" }}
                      >
                        {isFr ? "Procéder au paiement" : "Checkout"}
                      </button>
                      <button
                        type="button"
                        onClick={() => { setCart([]); setCheckoutSent(false); }}
                        className="px-4 py-3 text-[10px] uppercase tracking-[0.2em] transition-opacity hover:opacity-70"
                        style={{
                          border: "1px solid var(--border)",
                          color: "var(--text-muted)",
                          background: "transparent",
                        }}
                      >
                        {isFr ? "Vider le panier" : "Clear cart"}
                      </button>
                    </div>

                    {checkoutSent && (
                      <p className="mt-3 text-xs" style={{ color: "var(--accent)" }}>
                        {isFr
                          ? "✓ Votre commande a été envoyée à Mossä. Stéphanie vous contactera sous peu."
                          : "✓ Your order was sent to Mossä. Stéphanie will contact you shortly."}
                      </p>
                    )}
                  </>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* ── 5 Big Category Buttons ──────────────────────────────────────────── */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {CATEGORIES.map((cat, i) => {
            const isOpen = openCategory === cat.id;
            return (
              <motion.button
                key={cat.id}
                type="button"
                onClick={() => handleCategoryClick(cat.id)}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7, ease: "easeOut", delay: i * 0.07 }}
                className="group relative overflow-hidden text-left"
                style={{
                  height: "220px",
                  border: isOpen
                    ? "2px solid var(--accent)"
                    : "1px solid var(--border)",
                  outline: "none",
                  background: "var(--surface)",
                }}
              >
                {/* Background image */}
                <img
                  src={cat.image}
                  alt={isFr ? cat.labelFr : cat.labelEn}
                  className="absolute inset-0 h-full w-full object-cover"
                  style={{ objectFit: "cover", objectPosition: "center" }}
                  loading="lazy"
                />

                {/* Overlay gradient */}
                <div
                  className="absolute inset-0"
                  style={{
                    background: isOpen
                      ? "linear-gradient(to top, rgba(10,13,16,0.85) 0%, rgba(10,13,16,0.35) 100%)"
                      : "linear-gradient(to top, rgba(10,13,16,0.75) 0%, rgba(10,13,16,0.15) 100%)",
                    transition: "background 0.3s ease",
                  }}
                />

                {/* Label */}
                <div className="absolute inset-0 flex flex-col items-center justify-end p-5 text-center">
                  <span
                    className="font-serif text-base font-light leading-tight text-white"
                    style={{ textShadow: "0 1px 4px rgba(0,0,0,0.6)" }}
                  >
                    {isFr ? cat.labelFr : cat.labelEn}
                  </span>
                  {isOpen && (
                    <span
                      className="mt-2 text-[9px] uppercase tracking-[0.25em] transition-all duration-200"
                      style={{ color: "var(--accent)" }}
                    >
                      {isFr ? "Ouvert ↑" : "Open ↑"}
                    </span>
                  )}
                </div>
              </motion.button>
            );
          })}
        </div>

        {/* ── Open Category Panel ─────────────────────────────────────────────── */}
        <AnimatePresence>
          {openCategory && (
            <motion.div
              key={openCategory}
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="mt-6"
            >
              {/* Panel header */}
              <div
                className="mb-6 flex items-center justify-between border-b pb-4"
                style={{ borderColor: "var(--border)" }}
              >
                <h3
                  className="font-serif text-2xl font-light"
                  style={{ color: "var(--text-primary)" }}
                >
                  {isFr
                    ? CATEGORIES.find((c) => c.id === openCategory)?.labelFr
                    : CATEGORIES.find((c) => c.id === openCategory)?.labelEn}
                </h3>
                <button
                  type="button"
                  onClick={() => setOpenCategory(null)}
                  className="flex items-center gap-2 text-[10px] uppercase tracking-[0.25em] transition-opacity hover:opacity-70"
                  style={{ color: "var(--text-muted)", background: "transparent", border: "none" }}
                >
                  {isFr ? "Fermer" : "Close"} ✕
                </button>
              </div>

              {/* Products / Books grid */}
              {renderCategoryContent(openCategory)}
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
