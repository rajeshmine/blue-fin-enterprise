"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { X, ZoomIn, ChevronRight } from "lucide-react";
import { PRODUCTS, NAV } from "@/lib/content";

export default function Products() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const openLightbox = (index: number) => {
    setSelectedIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => setLightboxOpen(false);

  const images = PRODUCTS.images;
  const basePath = PRODUCTS.imagesBasePath;

  return (
    <section id="products" className="py-14 sm:py-16 md:py-20 bg-white dark:bg-gray-900 overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 min-w-0">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12 text-primary dark:text-gray-100">
          {PRODUCTS.title}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
          {images.map((img, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.03 }}
              className="group relative shadow-premium dark:shadow-gray-950/50 p-4 sm:p-6 rounded-xl bg-white dark:bg-gray-800 dark:border dark:border-gray-700 overflow-hidden"
            >
              <button
                type="button"
                onClick={() => openLightbox(i)}
                className="relative block w-full focus:outline-none focus:ring-2 focus:ring-accent focus:ring-inset rounded-lg overflow-hidden"
                aria-label={`View product image ${i + 1}`}
              >
                <img
                  src={`${basePath}/${img}`}
                  alt={`Product ${i + 1}`}
                  className="rounded-lg w-full max-w-full h-auto object-contain transition-transform duration-500 ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center rounded-lg">
                  <motion.span
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileHover={{ scale: 1.1 }}
                    className="bg-white/95 dark:bg-gray-800/95 rounded-full p-3 shadow-xl ring-2 ring-accent/30"
                  >
                    <ZoomIn className="w-5 h-5 text-accent" strokeWidth={2.5} />
                  </motion.span>
                </div>
              </button>
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center mt-10 sm:mt-12">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 bg-blue-900 hover:bg-accent/90 text-white font-semibold px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200"
          >
            {NAV.viewAllProducts}
            <ChevronRight className="w-5 h-5" strokeWidth={2.5} />
          </Link>
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <button
              type="button"
              onClick={closeLightbox}
              aria-label="Close"
              className="absolute top-4 right-4 z-50 p-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-colors ring-1 ring-white/20"
            >
              <X className="w-6 h-6" strokeWidth={2} />
            </button>

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="relative max-w-4xl max-h-[90vh] w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={`${basePath}/${images[selectedIndex]}`}
                alt={`Product ${selectedIndex + 1}`}
                className="w-full h-auto max-h-[85vh] object-contain rounded-lg shadow-2xl"
                draggable={false}
              />
              <p className="text-white/80 text-center mt-3 text-sm">
                {selectedIndex + 1} / {images.length}
              </p>
            </motion.div>

            {images.length > 1 && (
              <>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedIndex((prev) =>
                      prev === 0 ? images.length - 1 : prev - 1
                    );
                  }}
                  className="absolute left-4 top-1/2 -translate-y-1/2 p-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-colors ring-1 ring-white/20"
                  aria-label="Previous image"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedIndex((prev) =>
                      prev === images.length - 1 ? 0 : prev + 1
                    );
                  }}
                  className="absolute right-4 top-1/2 -translate-y-1/2 p-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-colors ring-1 ring-white/20"
                  aria-label="Next image"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}