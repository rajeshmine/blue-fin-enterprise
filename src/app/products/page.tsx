import ProductsPageClient from "@/components/ProductsPageClient";
import { PRODUCTS_PAGE } from "@/lib/content";

export const metadata = {
  title: PRODUCTS_PAGE.metadata.title,
  description: PRODUCTS_PAGE.metadata.description,
};

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Gradient hero at top - content overlaps on top of it */}
      <section className="relative bg-gradient-to-br from-blue-950 via-blue-900 to-primary dark:from-primary dark:via-primary dark:to-primary pt-24 sm:pt-28 pb-20 sm:pb-24 px-4 sm:px-6 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-10 right-10 w-64 h-64 rounded-full bg-accent/5 blur-3xl" />
          <div className="absolute bottom-10 left-10 w-48 h-48 rounded-full bg-white/5 blur-2xl" />
          <svg className="absolute top-0 right-0 w-1/3 h-full opacity-10" viewBox="0 0 200 400" fill="none">
            <path d="M0 0 L200 100 L200 400 L0 400 Z" fill="currentColor" className="text-white" />
            <circle cx="160" cy="80" r="60" stroke="currentColor" strokeWidth="1" className="text-accent" fill="none" />
            <circle cx="180" cy="200" r="40" stroke="currentColor" strokeWidth="1" className="text-accent" fill="none" />
          </svg>
          <svg className="absolute bottom-0 left-0 w-1/4 h-1/2 opacity-10" viewBox="0 0 150 200" fill="none">
            <rect x="0" y="100" width="150" height="100" rx="20" fill="currentColor" className="text-white" />
            <path d="M20 50 Q75 0 130 50" stroke="currentColor" strokeWidth="2" className="text-accent" fill="none" />
          </svg>
        </div>
        <div className="max-w-7xl mx-auto relative">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <div className="h-1 w-14 bg-accent rounded-full shrink-0" />
            <div>
              <h1 className="text-3xl sm:text-4xl font-light text-white tracking-tight">
                {PRODUCTS_PAGE.hero.title} <span className="font-bold text-accent">{PRODUCTS_PAGE.hero.titleAccent}</span>
              </h1>
              <p className="text-blue-200/90 mt-2 text-sm sm:text-base max-w-xl">
                {PRODUCTS_PAGE.hero.subtitle}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Content overlaps gradient - sits on top */}
      <ProductsPageClient />
    </div>
  );
}
