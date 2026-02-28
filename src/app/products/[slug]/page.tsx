import { notFound } from "next/navigation";
import {
  getSubcategoryBySlug,
  productCategories,
  getProductImages,
} from "@/lib/products";
import ProductPageClient from "@/components/ProductPageClient";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const slugs = new Set<string>();
  for (const category of productCategories) {
    for (const sub of category.submenu) {
      slugs.add(sub.slug);
    }
  }
  return Array.from(slugs).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const result = getSubcategoryBySlug(slug);
  if (!result) return { title: "Product Not Found" };
  return {
    title: `${result.subcategory.label} | Blue Fin Engineering Enterprises`,
    description: `${result.subcategory.label} - ${result.category.label} by Blue Fin Engineering Enterprises. Material handling and assembly solutions.`,
  };
}

export default async function ProductSubcategoryPage({ params }: Props) {
  const { slug } = await params;
  const result = getSubcategoryBySlug(slug);

  if (!result) {
    notFound();
  }

  const { subcategory, category } = result;
  const { folder: imageFolder, images: productImages } = getProductImages(
    subcategory,
    category
  );

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <ProductPageClient
        slug={slug}
        subcategory={subcategory}
        category={category}
        imageFolder={imageFolder}
        productImages={productImages}
      />
    </div>
  );
}
