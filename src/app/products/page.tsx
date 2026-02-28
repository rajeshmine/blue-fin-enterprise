import ProductsPageClient from "@/components/ProductsPageClient";
import { PRODUCTS_PAGE } from "@/lib/content";

export const metadata = {
  title: PRODUCTS_PAGE.metadata.title,
  description: PRODUCTS_PAGE.metadata.description,
};

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <section className="bg-blue-950 dark:bg-primary pt-24 sm:pt-28 pb-12 sm:pb-16 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <div className="h-1 w-14 bg-accent rounded-full shrink-0" />
            <div>
              <h1 className="text-3xl sm:text-4xl font-light text-white tracking-tight">
                {PRODUCTS_PAGE.hero.title} <span className="font-bold text-accent">{PRODUCTS_PAGE.hero.titleAccent}</span>
              </h1>
              <p className="text-blue-200/90 mt-2 text-sm sm:text-base">
                {PRODUCTS_PAGE.hero.subtitle}
              </p>
            </div>
          </div>
        </div>
      </section>

      <ProductsPageClient />
    </div>
  );
}
