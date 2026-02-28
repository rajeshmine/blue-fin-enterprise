"use client";

import { motion } from "framer-motion";
import { Gem, Users, Truck } from "lucide-react";
import { FEATURES } from "@/lib/content";

const ICON_MAP = {
  gem: Gem,
  users: Users,
  truck: Truck,
} as const;

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

const Features = () => {
  return (
    <section className="relative overflow-hidden">
      {/* Dark header band with gradient */}
      <div className="relative bg-gradient-to-b from-[#00153D] via-[#001a4d] to-[#00153D] dark:from-primary dark:via-primary/95 dark:to-primary h-20 sm:h-24 md:h-28 w-full">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_0%,rgba(229,57,53,0.08),transparent)]" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent" />
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 -mt-10 sm:-mt-12 md:-mt-14">
        {/* Section label - sits over dark header */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-6 sm:mb-8 text-white"
        >
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            {FEATURES.eyebrow}
          </span>
          <h2 className="text-xl sm:text-2xl font-bold mt-1">
            {FEATURES.title}
          </h2>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-6 md:gap-8"
        >
          {FEATURES.items.map((feature, index) => {
            const IconComponent = ICON_MAP[feature.iconKey];
            return (
              <motion.article
                key={feature.id}
                variants={item}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
                className="group"
              >
                <div className="h-full bg-white dark:bg-gray-800 rounded-2xl p-6 sm:p-8 shadow-lg dark:shadow-gray-900/50 border border-gray-100 dark:border-gray-700/80 transition-all duration-300 hover:shadow-xl hover:border-accent/20 dark:hover:border-accent/30 hover:shadow-accent/5">
                  {/* Icon with gradient background */}
                  <div className="relative mb-5">
                    <div className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-gradient-to-br from-accent/15 to-accent/5 dark:from-accent/25 dark:to-accent/10 text-accent transition-all duration-300 group-hover:from-accent/25 group-hover:to-accent/15 dark:group-hover:from-accent/35 dark:group-hover:to-accent/20 group-hover:scale-110">
                      {IconComponent && (
                        <IconComponent size={28} strokeWidth={2} className="sm:w-8 sm:h-8" />
                      )}
                    </div>
                    <span className="absolute -top-1 -right-1 text-3xl font-bold text-accent/10 dark:text-accent/20 select-none">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <h3 className="text-[#00153D] dark:text-white font-bold text-lg sm:text-xl uppercase tracking-tight mb-2 group-hover:text-accent dark:group-hover:text-accent transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base leading-relaxed">
                    {feature.description}
                  </p>

                  {/* Bottom accent line */}
                  <div className="mt-5 h-1 w-12 rounded-full bg-accent/30 group-hover:w-20 group-hover:bg-accent transition-all duration-300" />
                </div>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
