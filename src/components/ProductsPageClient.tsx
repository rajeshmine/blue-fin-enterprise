"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Cog, MoveHorizontal, Boxes, Package, Wrench, ChevronRight } from "lucide-react";
import { productCategories, getProductHref } from "@/lib/products";

const CATEGORY_ICONS: Record<string, { Icon: typeof Cog; bg: string; color: string; ring: string }> = {
  "automation-machinery": { Icon: Cog, bg: "bg-violet-500/10", color: "text-violet-600 dark:text-violet-400", ring: "ring-violet-500/20" },
  conveyors: { Icon: MoveHorizontal, bg: "bg-blue-500/10", color: "text-blue-600 dark:text-blue-400", ring: "ring-blue-500/20" },
  fabrications: { Icon: Boxes, bg: "bg-amber-500/10", color: "text-amber-600 dark:text-amber-400", ring: "ring-amber-500/20" },
  "industrial-consumables": { Icon: Package, bg: "bg-emerald-500/10", color: "text-emerald-600 dark:text-emerald-400", ring: "ring-emerald-500/20" },
  "machinery-accessories": { Icon: Wrench, bg: "bg-red-500/10", color: "text-red-600 dark:text-red-400", ring: "ring-red-500/20" },
};

export default function ProductsPageClient() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 -mt-10 sm:-mt-12 pb-16 sm:pb-24 relative z-10">
      <div className="space-y-10 sm:space-y-12">
        {productCategories.map((category, catIndex) => {
          const style = CATEGORY_ICONS[category.slug] ?? { Icon: Package, bg: "bg-primary/10", color: "text-primary", ring: "ring-primary/20" };
          const IconComponent = style.Icon;
          return (
            <motion.div
              key={category.slug}
              id={category.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: catIndex * 0.08 }}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg dark:shadow-gray-950/50 border border-gray-100 dark:border-gray-700 overflow-hidden scroll-mt-24"
            >
              {/* Category header with icon */}
              <div className="flex items-center gap-4 px-6 py-5 border-b border-gray-100 dark:border-gray-700 bg-gradient-to-r from-gray-50 to-white dark:from-gray-800/50 dark:to-gray-800">
                <div className={`shrink-0 w-12 h-12 rounded-xl ${style.bg} ring-1 ${style.ring} flex items-center justify-center`}>
                  <IconComponent className={`w-6 h-6 ${style.color}`} strokeWidth={2} />
                </div>
                <h2 className="text-xl font-bold text-primary dark:text-white">
                  {category.label}
                </h2>
              </div>
              <div className="p-4 sm:p-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4">
                  {category.submenu.map((sub, subIndex) => (
                    <motion.div
                      key={sub.slug}
                      initial={{ opacity: 0, y: 12 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: subIndex * 0.04 }}
                    >
                      <Link
                        href={getProductHref(sub.slug)}
                        className="group flex items-center gap-3 sm:gap-4 p-4 sm:p-5 rounded-xl border border-gray-100 dark:border-gray-700 hover:border-accent/30 hover:bg-accent/5 dark:hover:bg-accent/10 transition-all duration-300 hover:shadow-lg touch-manipulation"
                      >
                        <div className={`shrink-0 w-11 h-11 rounded-lg ${style.bg} ring-1 ${style.ring} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                          <IconComponent className={`w-5 h-5 ${style.color}`} strokeWidth={2} />
                        </div>
                        <span className="font-medium text-primary dark:text-gray-200 group-hover:text-accent transition-colors flex-1 min-w-0">
                          {sub.label}
                        </span>
                        <ChevronRight className="w-5 h-5 shrink-0 text-gray-400 group-hover:text-accent group-hover:translate-x-0.5 transition-all duration-300" strokeWidth={2.5} />
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
