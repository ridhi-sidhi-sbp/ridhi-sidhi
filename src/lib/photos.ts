import dimensions from "@/assets/photos/dimensions.json";
import { labelFor } from "./catalogue";

export type Shot = {
  key: string;
  thumb: string;
  fullPath: string;
  category: string;
  label: string;
  alt: string;
  width: number;
  height: number;
};

const DIMENSIONS = dimensions as Record<string, number[]>;

const thumbModules = import.meta.glob<string>("@/assets/photos/thumb/**/*.webp", {
  eager: true,
  import: "default",
});

export const fullModules = import.meta.glob<string>("@/assets/photos/full/**/*.webp", {
  import: "default",
});

const allShots: Shot[] = Object.entries(thumbModules)
  .map(([path, thumb]) => {
    const parts = path.split("/");
    const category = parts[parts.length - 2] ?? "";
    const fileName = (parts[parts.length - 1] ?? "").replace(".webp", "");
    const label = labelFor(category);
    const dims = DIMENSIONS[path];
    return {
      key: path,
      thumb,
      fullPath: path.replace("/thumb/", "/full/"),
      category,
      label,
      alt: `${label} — ${fileName}`,
      width: dims?.[0] ?? 500,
      height: dims?.[1] ?? 333,
    };
  })
  .sort((a, b) => a.key.localeCompare(b.key, undefined, { numeric: true }));

/** Every photo in one photo folder, in filename order. */
export function shotsFor(category: string): Shot[] {
  return allShots.filter((s) => s.category === category);
}

/** Every photo in the given folders, in the order the folders are listed. */
export function shotsForAll(categories: readonly string[]): Shot[] {
  return categories.flatMap((c) => shotsFor(c));
}
