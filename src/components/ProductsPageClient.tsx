"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { productCategories, getProductHref } from "@/lib/products";

export default function ProductsPageClient() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 -mt-6 sm:-mt-8 pb-16 sm:pb-24">
      <div className="space-y-12">
        {productCategories.map((category, catIndex) => (
          <motion.div
            key={category.slug}
            id={category.slug}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: catIndex * 0.1 }}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg dark:shadow-gray-950/50 border border-gray-100 dark:border-gray-700 overflow-hidden scroll-mt-24"
          >
            <div className="bg-primary/5 dark:bg-primary/10 px-6 py-4 border-b border-gray-100 dark:border-gray-700">
              <h2 className="text-xl font-bold text-primary">
                {category.label}
              </h2>
            </div>
            <div className="p-4 sm:p-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {category.submenu.map((sub, subIndex) => (
                  <motion.div
                    key={sub.slug}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: subIndex * 0.03 }}
                  >
                    <Link
                      href={getProductHref(sub.slug)}
                      className="group flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl border border-gray-100 dark:border-gray-700 hover:border-accent/30 hover:bg-accent/5 dark:hover:bg-accent/10 transition-all duration-300 hover:shadow-md touch-manipulation"
                    >
                      <div className="shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-accent/10 transition-colors duration-300">
                        <svg
                          className="w-6 h-6 text-primary group-hover:text-accent transition-colors"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                          />
                        </svg>
                      </div>
                      <span className="font-medium text-primary dark:text-gray-200 group-hover:text-accent transition-colors flex-1 min-w-0">
                        {sub.label}
                      </span>
                      <svg
                        className="w-5 h-5 shrink-0 text-gray-400 group-hover:text-accent group-hover:translate-x-1 transition-all duration-300"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
