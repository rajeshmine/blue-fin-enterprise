"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import ProductImageGrid from "./ProductImageGrid";
import type { ProductSubcategory, ProductCategory } from "@/lib/products";
import { getProductHref } from "@/lib/products";

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
      {/* Hero */}
      <section className="bg-blue-950 pt-28 pb-16 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.nav
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2 text-sm text-blue-200/90 mb-4 flex-wrap"
          >
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link href="/products" className="hover:text-white transition-colors">
              Products
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

      {/* Main content */}
    <section className="max-w-7xl mx-auto px-6 -mt-8 pb-24">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
        {/* Sidebar */}
        <aside className="lg:col-span-1 order-2 lg:order-1">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 sticky top-24"
          >
            <h3 className="font-bold text-primary mb-4 text-lg">
              More in {category.label}
            </h3>
            <ul className="space-y-1">
              {category.submenu.map((sub) => (
                <li key={sub.slug}>
                  <Link
                    href={getProductHref(sub.slug)}
                    className={`block px-4 py-3 rounded-lg transition-all duration-200 ${
                      sub.slug === slug
                        ? "bg-accent/10 text-accent font-medium border-l-4 border-accent -ml-1 pl-5"
                        : "text-gray-700 hover:bg-gray-50 hover:text-primary border-l-4 border-transparent -ml-1 pl-5"
                    }`}
                  >
                    {sub.label}
                  </Link>
                </li>
              ))}
            </ul>
            <Link
              href="/products"
              className="mt-6 block text-center py-3 px-4 rounded-xl border-2 border-primary text-primary font-semibold hover:bg-blue-950 hover:text-white transition-all duration-300"
            >
              View All Products
            </Link>
          </motion.div>
        </aside>

        {/* Product grid */}
        <div className="lg:col-span-2 order-1 lg:order-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 sm:p-8"
          >
            <p className="text-gray-600 mb-8 leading-relaxed">
              Explore our range of {subcategory.label.toLowerCase()} solutions
              designed for industrial automation and material handling
              excellence.
            </p>
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
            className="mt-8 bg-blue-950 rounded-2xl p-8 text-center"
          >
            <h3 className="text-xl font-bold text-white mb-2">
              Need a custom solution?
            </h3>
            <p className="text-blue-200/90 mb-6">
              Get in touch for quotes and tailored {subcategory.label}{" "}
              solutions.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-accent hover:bg-accent/90 text-white font-semibold px-8 py-3 rounded-xl transition-all duration-300 hover:shadow-lg hover:scale-105"
            >
              Request Quote
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
    </>
  );
}
