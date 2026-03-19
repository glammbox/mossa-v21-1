import { useMemo, useState } from "react";
import { ASSET_MANIFEST, ASSET_CATEGORIES, type Asset, type AssetCategory } from "@/lib/asset-manifest";

export interface UseAssetCategoriesResult {
  activeCategory: AssetCategory;
  setCategory: (category: AssetCategory) => void;
  categories: AssetCategory[];
  filteredAssets: Asset[];
}

export function useAssetCategories(initial: AssetCategory = "all"): UseAssetCategoriesResult {
  const [activeCategory, setCategory] = useState<AssetCategory>(initial);

  const filteredAssets = useMemo(() => {
    if (activeCategory === "all") return ASSET_MANIFEST;
    return ASSET_MANIFEST.filter((a) => a.category === activeCategory);
  }, [activeCategory]);

  return {
    activeCategory,
    setCategory,
    categories: ASSET_CATEGORIES,
    filteredAssets,
  };
}
