"use client";

import { motion } from "framer-motion";
import { PRODUCTS } from "@/lib/content";

export default function Products() {
  return (
    <section id="products" className="py-14 sm:py-16 md:py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12 text-primary dark:text-gray-100">
          {PRODUCTS.title}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
          {PRODUCTS.images.map((img, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="shadow-premium dark:shadow-gray-950/50 p-4 sm:p-6 rounded-xl bg-white dark:bg-gray-800 dark:border dark:border-gray-700"
            >
              <img src={`${PRODUCTS.imagesBasePath}/${img}`} alt="" className="rounded-lg" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}