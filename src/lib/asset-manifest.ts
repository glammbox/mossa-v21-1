export type AssetCategory = "all" | "arrangements" | "ceremonies" | "spaces" | "brand";

export interface Asset {
  id: string;
  src: string;
  alt: string;
  category: Exclude<AssetCategory, "all">;
  width?: number;
  height?: number;
}

export const ASSET_MANIFEST: Asset[] = [
  { id: "product-1", src: "/images/product-1.jpg", alt: "Arrangement floral Mossa 1", category: "arrangements" },
  { id: "product-2", src: "/images/product-2.jpg", alt: "Arrangement floral Mossa 2", category: "arrangements" },
  { id: "product-3", src: "/images/product-3.jpg", alt: "Arrangement floral Mossa 3", category: "arrangements" },
  { id: "product-4", src: "/images/product-4.jpg", alt: "Arrangement floral Mossa 4", category: "arrangements" },
  { id: "product-5", src: "/images/product-5.jpg", alt: "Arrangement floral Mossa 5", category: "arrangements" },
  { id: "product-6", src: "/images/product-6.jpg", alt: "Arrangement floral Mossa 6", category: "arrangements" },
  { id: "product-7", src: "/images/product-7.jpg", alt: "Arrangement floral Mossa 7", category: "arrangements" },
  { id: "product-8", src: "/images/product-8.jpg", alt: "Arrangement floral Mossa 8", category: "arrangements" },
  { id: "product-9", src: "/images/product-9.jpg", alt: "Cérémonie Mossa 9", category: "ceremonies" },
  { id: "product-10", src: "/images/product-10.jpg", alt: "Cérémonie Mossa 10", category: "ceremonies" },
  { id: "product-11", src: "/images/product-11.jpg", alt: "Cérémonie Mossa 11", category: "ceremonies" },
  { id: "product-12", src: "/images/product-12.jpg", alt: "Cérémonie Mossa 12", category: "ceremonies" },
  { id: "product-13", src: "/images/product-13.jpg", alt: "Espace Mossa 13", category: "spaces" },
  { id: "product-14", src: "/images/product-14.jpg", alt: "Espace Mossa 14", category: "spaces" },
  { id: "product-15", src: "/images/product-15.jpg", alt: "Espace Mossa 15", category: "spaces" },
  { id: "product-16", src: "/images/product-16.jpg", alt: "Espace Mossa 16", category: "spaces" },
  { id: "product-17", src: "/images/product-17.jpg", alt: "Arrangement sur mesure 17", category: "arrangements" },
  { id: "product-18", src: "/images/product-18.jpg", alt: "Arrangement sur mesure 18", category: "arrangements" },
  { id: "product-19", src: "/images/product-19.jpg", alt: "Cérémonie 19", category: "ceremonies" },
  { id: "product-20", src: "/images/product-20.jpg", alt: "Cérémonie 20", category: "ceremonies" },
  { id: "product-21", src: "/images/product-21.jpg", alt: "Espace 21", category: "spaces" },
  { id: "product-22", src: "/images/product-22.jpg", alt: "Espace 22", category: "spaces" },
  { id: "product-23", src: "/images/product-23.jpg", alt: "Arrangement 23", category: "arrangements" },
  { id: "product-24", src: "/images/product-24.jpg", alt: "Arrangement 24", category: "arrangements" },
  { id: "brand-notes-1", src: "/images/brand-notes-1.jpg", alt: "Mossa brand notes 1", category: "brand" },
  { id: "brand-notes-2", src: "/images/brand-notes-2.jpg", alt: "Mossa brand notes 2", category: "brand" },
  { id: "brand-notes-3", src: "/images/brand-notes-3.jpg", alt: "Mossa brand notes 3", category: "brand" },
  { id: "brand-notes-4", src: "/images/brand-notes-4.jpg", alt: "Mossa brand notes 4", category: "brand" },
];

export const CATEGORY_LABELS: Record<AssetCategory, { fr: string; en: string }> = {
  all: { fr: "Tout", en: "All" },
  arrangements: { fr: "Arrangements", en: "Arrangements" },
  ceremonies: { fr: "Cérémonies", en: "Ceremonies" },
  spaces: { fr: "Espaces", en: "Spaces" },
  brand: { fr: "Marque", en: "Brand" },
};

export const ASSET_CATEGORIES: AssetCategory[] = ["all", "arrangements", "ceremonies", "spaces", "brand"];
