export type ProductSubcategory = {
  label: string;
  slug: string;
  description?: string;
  image?: string;
  /** Image folder under public/images (overrides category) */
  imageFolder?: string;
  /** Image filenames when using subcategory imageFolder */
  images?: string[];
};

export type ProductCategory = {
  label: string;
  slug: string;
  submenu: ProductSubcategory[];
  /** Image folder under public/images (e.g. "ma" for /images/ma/) */
  imageFolder?: string;
};

export const productCategories: ProductCategory[] = [
  {
    label: "Automation Machinery",
    slug: "automation-machinery",
    submenu: [
      {
        label: "Aero Space Fixture",
        slug: "aero-space-fixture",
        imageFolder: "asf",
        images: [
          "fixture_Image_2023-05-19_at_17.11.21-removebg-preview-e1708685810266-300x113.png",
          "WhatsApp-Image-2023-05-19-at-17.11.21-removebg-preview-e1708757616571-150x150.png",
          "WhatsApp-Image-2023-05-19-at-17.11.20-removebg-preview.png",
        ],
      },
      { label: "Gear Box Rotating Fixtures", slug: "gear-box-rotating-fixture" },
    ],
  },
  {
    label: "Conveyors",
    slug: "conveyors",
    imageFolder: "conveyors",
    submenu: [{ label: "Conveyors", slug: "conveyors" }],
  },
  {
    label: "Fabrications",
    slug: "fabrications",
    submenu: [
      {
        label: "Assembly Work Station",
        slug: "assembly-work-station",
        imageFolder: "aws",
        images: [
          "Assembly-work-station.png",
          "inspection-station.png",
          "assembly-table.png",
          "machine-enclosure.png",
        ],
      },
      {
        label: "Machine Shop Work Stations",
        slug: "machine-shop-work-stations",
        imageFolder: "msw",
        images: ["machineshop.png", "machineshop1.png"],
      },
      {
        label: "Material Handling System",
        slug: "material-handling-system",
        imageFolder: "mhs",
        images: [
          "Gear-Storage.png",
          "material-handling-pallets-150x150.png",
          "Collapsable-Stillage.png",
        ],
      },
      {
        label: "Pipe Joints",
        slug: "pipe-joints",
        imageFolder: "pj",
        images: ["pj.png", "pj1.png", "pj2.png", "pj3.png"],
      },
    ],
  },
  {
    label: "Industrial Consumables",
    slug: "industrial-consumables",
    submenu: [
      {
        label: "Abrasives",
        slug: "abrasives",
        imageFolder: "abrasives",
        images: ["ab.png", "ab1.png", "ab2.png", "ab3.png", "ab4.png", "ab5.jpg"],
      },
      {
        label: "Assembly Pneumatic Tools & Special Sockets",
        slug: "assembly-pneumatic-tools",
        imageFolder: "ast",
        images: [
          "ast.png",
          "ast1.png",
          "ast2.png",
          "WhatsApp_Image_2021-04-28_at_3.32.44_PM__2_-removebg-preview-150x150.png",
          "air-pro.png",
        ],
      },
      {
        label: "Hand Tools & Hand Trucks",
        slug: "hand-tools",
        imageFolder: "ht",
        images: ["ht.png", "ht1.png", "ht2.png", "ht3.png", "ht4.png", "ht5.png", "ht6.png"],
      },
      {
        label: "Rubber Products",
        slug: "rubber-products",
        imageFolder: "rp",
        images: ["rp.png", "rp1.png", "rp2.png", "rp3.png", "rp4.png"],
      },
      {
        label: "Industrial Consumables",
        slug: "industrial-consumables",
        imageFolder: "ic",
        images: ["IC1.png", "Ic2.png", "ic6.png", "ic7.png", "ic8.png", "ic9.png"],
      },
      {
        label: "Safety Products",
        slug: "safety-products",
        imageFolder: "sp",
        images: [
          "IC.png",
          "IC3.png",
          "IC4.png",
          "IC5.png",
          "sp.png",
          "sp1.png",
          "sp2.png",
          "sp3.png",
          "sp4.png",
          "sp5.png",
        ],
      },
    ],
  },
  {
    label: "Machinery Accessories",
    slug: "machinery-accessories",
    imageFolder: "ma",
    submenu: [{ label: "Accessories", slug: "accessories" }],
  },
];

/** Get href for a subcategory */
export function getProductHref(slug: string): string {
  return `/products/${slug}`;
}

/** Find subcategory by slug across all categories */
export function getSubcategoryBySlug(slug: string): {
  subcategory: ProductSubcategory;
  category: ProductCategory;
} | null {
  for (const category of productCategories) {
    const subcategory = category.submenu.find((s) => s.slug === slug);
    if (subcategory) {
      return { subcategory, category };
    }
  }
  return null;
}

/** Default product images (products folder) */
export const defaultProductImages = [
  "product1.png", "product2.png", "product3.png", "product4.png",
  "product5.png", "product6.png", "product7.png", "product8.png",
  "product9.png", "product10.png", "product11.png", "product12.png",
];

/** Machinery Accessories images (ma folder) */
export const machineryAccessoriesImages = [
  "ma.png", "ma1.png", "ma2.png", "ma3.png", "ma4.png",
];

/** Conveyors images (conveyors folder) */
export const conveyorsImages = [
  "Assembly-Conveyors.png",
  "Material-Feeding-Conveyors.png",
  "Printing-Conveyors.png",
  "Packaging-Conveyors.png",
];

/** Get images for a category */
export function getCategoryImages(category: ProductCategory): string[] {
  if (category.imageFolder === "ma") {
    return machineryAccessoriesImages;
  }
  if (category.imageFolder === "conveyors") {
    return conveyorsImages;
  }
  return defaultProductImages;
}

/** Get image folder and images for a subcategory (subcategory overrides category) */
export function getProductImages(
  subcategory: ProductSubcategory,
  category: ProductCategory
): { folder: string; images: string[] } {
  if (subcategory.imageFolder && subcategory.images?.length) {
    return { folder: subcategory.imageFolder, images: subcategory.images };
  }
  return {
    folder: category.imageFolder || "products",
    images: getCategoryImages(category),
  };
}

/** Get all subcategories as flat list for dynamic routes */
export function getAllProductSlugs(): string[] {
  const slugs = new Set<string>();
  for (const category of productCategories) {
    for (const sub of category.submenu) {
      slugs.add(sub.slug);
    }
  }
  return Array.from(slugs);
}
