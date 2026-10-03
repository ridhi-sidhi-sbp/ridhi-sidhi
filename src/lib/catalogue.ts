// Single source of truth for the product categories shown on the home page
// and the collections page. Only categories that have photographs in
// src/assets/photos/ are listed here, so the site never promises a category
// the showroom cannot show.

import shirtsCover from "@/assets/photos/card/shirts/shirts-04.webp";
import tshirtsCover from "@/assets/photos/card/tshirts/tshirts-02.webp";
import blazersCover from "@/assets/photos/card/blazers/blazers-02.webp";
import jeansCover from "@/assets/photos/card/jeans/jeans-06.webp";
import formalPantsCover from "@/assets/photos/card/formal-pants/formal-pants-02.webp";
import cargoPantsCover from "@/assets/photos/card/cargo-pants/cargo-pants-06.webp";
import halfPantsCover from "@/assets/photos/card/half-pants/half-pants-01.webp";
import trackPantsCover from "@/assets/photos/card/track-pants/track-pants-01.webp";
import innerWearCover from "@/assets/photos/card/inner-wear/inner-wear-01.webp";
import walletsBeltsCover from "@/assets/photos/card/wallets-belts/wallets-belts-02.webp";
import accessoriesCover from "@/assets/photos/card/accessories/accessories-09.webp";

export type ProductCategory = {
  /** Folder name under src/assets/photos/ and the `?category=` URL value. */
  slug: string;
  name: string;
  /** Short line shown next to the category name on the home page. */
  note: string;
  /** Longer description shown on the collections page. */
  copy: string;
  cover: string;
  w: number;
  h: number;
};

export const productCategories: ProductCategory[] = [
  {
    slug: "shirts",
    name: "Shirts",
    note: "Cotton, linen & easy-iron twills",
    copy: "Egyptian cotton, linen blends and easy-iron twills in classic and slim fits.",
    cover: shirtsCover,
    w: 900,
    h: 822,
  },
  {
    slug: "tshirts",
    name: "T-Shirts",
    note: "Polos, crews & everyday knits",
    copy: "Combed cotton crews, polos and long-sleeve knits in seasonal tones.",
    cover: tshirtsCover,
    w: 900,
    h: 822,
  },
  {
    slug: "blazers",
    name: "Blazers",
    note: "Half-canvas tailoring, ready to wear",
    copy: "Half-canvas tailoring in wool, wool-blend and unstructured summer weights.",
    cover: blazersCover,
    w: 745,
    h: 900,
  },
  {
    slug: "jeans",
    name: "Jeans",
    note: "Straight, slim & relaxed denim",
    copy: "Straight, slim and relaxed denim from raw indigo to stone-washed light.",
    cover: jeansCover,
    w: 900,
    h: 822,
  },
  {
    slug: "formal-pants",
    name: "Formal Pants",
    note: "Flat-front trousers, crease-hold finish",
    copy: "Flat-front and single-pleat trousers with crease-hold finishing.",
    cover: formalPantsCover,
    w: 600,
    h: 900,
  },
  {
    slug: "cargo-pants",
    name: "Cargo Pants",
    note: "Utility pockets & tapered legs",
    copy: "Utility pockets, tapered legs and washed cotton for everyday wear.",
    cover: cargoPantsCover,
    w: 900,
    h: 600,
  },
  {
    slug: "half-pants",
    name: "Half Pants",
    note: "Chino, printed & drawstring shorts",
    copy: "Chino shorts, printed shorts and drawstring styles for warm months.",
    cover: halfPantsCover,
    w: 600,
    h: 900,
  },
  {
    slug: "track-pants",
    name: "Track Pants",
    note: "Lightweight, zip-pocket track pants",
    copy: "Lightweight, breathable track pants with a drawstring waist, zip pocket and tapered fit.",
    cover: trackPantsCover,
    w: 900,
    h: 822,
  },
  {
    slug: "inner-wear",
    name: "Inner Wear",
    note: "Breathable cotton & thermal layers",
    copy: "Breathable cotton vests, briefs, trunks and thermal layers.",
    cover: innerWearCover,
    w: 900,
    h: 600,
  },
  {
    slug: "wallets-belts",
    name: "Wallets & Belts",
    note: "Full-grain leather essentials",
    copy: "Full-grain leather in tan, oxblood and black with brushed hardware.",
    cover: walletsBeltsCover,
    w: 900,
    h: 600,
  },
  {
    slug: "accessories",
    name: "Accessories",
    note: "Socks, ties & travel-ready leather",
    copy: "Handkerchief sets, socks, ties and travel-ready leather goods.",
    cover: accessoriesCover,
    w: 600,
    h: 900,
  },
];

/** Non-product photo folders, used by the gallery. */
export const showroomLabels: Record<string, string> = {
  store: "In Store",
  storefront: "Storefront",
  customers: "Customers",
  owner: "Owner",
};

const productNames: Record<string, string> = Object.fromEntries(
  productCategories.map((c) => [c.slug, c.name]),
);

export function labelFor(slug: string): string {
  return productNames[slug] ?? showroomLabels[slug] ?? slug;
}

export function getProductCategory(slug: string | undefined): ProductCategory | undefined {
  return productCategories.find((c) => c.slug === slug);
}
