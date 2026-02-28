"use client";

import Link from "next/link";
import { MessageCircle, ChevronRight, Package, FileText } from "lucide-react";
import { motion } from "framer-motion";
import ProductImageGrid from "./ProductImageGrid";
import type { ProductSubcategory, ProductCategory } from "@/lib/products";
import { getProductHref } from "@/lib/products";
import { PRODUCT_DETAIL, CONTACT } from "@/lib/content";

type ProductPageClientProps = {
  slug: string;
  subcategory: ProductSubcategory;
  category: ProductCategory;
  imageFolder: string;
  productImages: string[];
};

export default function ProductPageClient({
  slug,
  subcategory,
  category,
  imageFolder,
  productImages,
}: ProductPageClientProps) {
  return (
    <>
      {/* Gradient hero at top - content overlaps on top of it */}
      <section className="relative bg-gradient-to-br from-blue-950 via-blue-900 to-primary dark:from-primary dark:via-primary dark:to-primary pt-24 sm:pt-28 pb-20 sm:pb-24 px-4 sm:px-6 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 right-20 w-48 h-48 rounded-full bg-accent/10 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-white/5 blur-2xl" />
          <svg className="absolute top-0 right-0 w-1/4 h-full opacity-10" viewBox="0 0 120 400" fill="none">
            <path d="M0 0 L120 80 L120 400 L0 400 Z" fill="currentColor" className="text-white" />
            <circle cx="90" cy="60" r="40" stroke="currentColor" strokeWidth="1" className="text-accent" fill="none" />
          </svg>
        </div>
        <div className="max-w-7xl mx-auto relative">
          <motion.nav
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-blue-200/90 mb-4 flex-wrap overflow-x-auto"
          >
            <Link href="/" className="hover:text-white transition-colors">
              {PRODUCT_DETAIL.breadcrumb.home}
            </Link>
            <span>/</span>
            <Link href="/products" className="hover:text-white transition-colors">
              {PRODUCT_DETAIL.breadcrumb.products}
            </Link>
            <span>/</span>
            <Link
              href={`/products#${category.slug}`}
              className="hover:text-white transition-colors"
            >
              {category.label}
            </Link>
            <span>/</span>
            <span className="text-white font-medium">{subcategory.label}</span>
          </motion.nav>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="h-1 w-14 bg-accent rounded-full shrink-0 origin-left"
            />
            <div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-3xl sm:text-4xl font-light text-white tracking-tight"
              >
                {subcategory.label}
              </motion.h1>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="text-white/90 mt-2 text-sm sm:text-base"
              >
                {category.label}
              </motion.p>
            </div>
          </div>
        </div>
      </section>

      {/* Main content - overlaps gradient, sits on top (left sidebar + right product grid) */}
    <section className="max-w-7xl mx-auto px-4 sm:px-6 -mt-10 sm:-mt-12 pb-16 sm:pb-24 relative z-10">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
        {/* Sidebar */}
        <aside className="lg:col-span-1 order-2 lg:order-1">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg dark:shadow-gray-950/50 border border-gray-100 dark:border-gray-700 p-4 sm:p-6 lg:sticky lg:top-24"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="shrink-0 w-10 h-10 rounded-xl bg-primary/10 ring-1 ring-primary/20 flex items-center justify-center">
                <Package className="w-5 h-5 text-primary" strokeWidth={2} />
              </div>
              <h3 className="font-bold text-primary dark:text-white text-lg">
                {PRODUCT_DETAIL.sidebar.moreIn} {category.label}
              </h3>
            </div>
            <ul className="space-y-1">
              {category.submenu.map((sub) => (
                <li key={sub.slug}>
                  <Link
                    href={getProductHref(sub.slug)}
                    className={`flex items-center gap-2 px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg transition-all duration-200 touch-manipulation ${
                      sub.slug === slug
                        ? "bg-accent/10 text-accent font-medium border-l-4 border-accent -ml-1 pl-5"
                        : "text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-primary border-l-4 border-transparent -ml-1 pl-5"
                    }`}
                  >
                    <span className="flex-1">{sub.label}</span>
                    {sub.slug !== slug && <ChevronRight className="w-4 h-4 shrink-0 opacity-60" strokeWidth={2} />}
                  </Link>
                </li>
              ))}
            </ul>
            <Link
              href="/products"
              className="mt-6 flex items-center justify-center gap-2 py-3 px-4 rounded-xl border-2 border-primary text-primary font-semibold hover:bg-blue-950 dark:hover:bg-primary hover:text-white transition-all duration-300"
            >
              <FileText className="w-5 h-5" strokeWidth={2} />
              {PRODUCT_DETAIL.sidebar.viewAllProducts}
            </Link>
          </motion.div>
        </aside>

        {/* Product grid */}
        <div className="lg:col-span-2 order-1 lg:order-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg dark:shadow-gray-950/50 border border-gray-100 dark:border-gray-700 p-6 sm:p-8"
          >
            <div className="flex items-start gap-3 mb-6">
              <div className="shrink-0 w-10 h-10 rounded-xl bg-primary/10 ring-1 ring-primary/20 flex items-center justify-center">
                <FileText className="w-5 h-5 text-primary" strokeWidth={2} />
              </div>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed pt-1">
              {PRODUCT_DETAIL.intro(subcategory.label)}
              </p>
            </div>
            <ProductImageGrid
              images={productImages}
              imageFolder={imageFolder}
              subcategoryLabel={subcategory.label}
            />
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative mt-6 sm:mt-8 bg-gradient-to-br from-blue-950 via-blue-900 to-primary dark:from-primary dark:via-primary dark:to-primary rounded-2xl p-5 sm:p-6 md:p-8 text-center overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-1/3 h-full opacity-10">
              <svg viewBox="0 0 100 200" fill="none" className="w-full h-full">
                <circle cx="80" cy="40" r="50" stroke="currentColor" strokeWidth="1" className="text-accent" />
                <circle cx="60" cy="120" r="30" stroke="currentColor" strokeWidth="1" className="text-accent" />
              </svg>
            </div>
            <div className="relative">
            <h3 className="text-xl font-bold text-white mb-2">
              {PRODUCT_DETAIL.cta.title}
            </h3>
            <p className="text-blue-200/90 mb-6">
              {PRODUCT_DETAIL.cta.description(subcategory.label)}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center bg-accent hover:bg-accent/90 text-white font-semibold px-8 py-3 rounded-xl transition-all duration-300 hover:shadow-lg hover:scale-105 w-full sm:w-auto"
              >
                {PRODUCT_DETAIL.cta.buttonText}
              </Link>
              <a
                href={`https://wa.me/${CONTACT.whatsapp.number}?text=${encodeURIComponent(`Hi, I need a quote for ${subcategory.label}. ${CONTACT.whatsapp.defaultMessage}`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white font-semibold px-8 py-3 rounded-xl transition-all duration-300 hover:shadow-lg hover:scale-105 w-full sm:w-auto"
              >
                <MessageCircle className="h-5 w-5" strokeWidth={2} />
                {PRODUCT_DETAIL.cta.whatsappText}
              </a>
            </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
    </>
  );
}
