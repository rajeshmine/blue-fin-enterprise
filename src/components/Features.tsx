"use client";

import { motion } from "framer-motion";
import { Gem, Users, Truck } from "lucide-react";
import { FEATURES } from "@/lib/content";

const ICON_STYLES = [
  { Icon: Gem, bg: "bg-violet-500/10", iconColor: "text-violet-600 dark:text-violet-400", ring: "ring-violet-500/20", hoverBg: "group-hover:bg-violet-500/20" },
  { Icon: Users, bg: "bg-emerald-500/10", iconColor: "text-emerald-600 dark:text-emerald-400", ring: "ring-emerald-500/20", hoverBg: "group-hover:bg-emerald-500/20" },
  { Icon: Truck, bg: "bg-amber-500/10", iconColor: "text-amber-600 dark:text-amber-400", ring: "ring-amber-500/20", hoverBg: "group-hover:bg-amber-500/20" },
] as const;

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
    <section className="relative py-14 sm:py-16 md:py-20 bg-gray-50 dark:bg-gray-900/50 overflow-x-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 min-w-0">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          className="text-center mb-8 sm:mb-10 md:mb-12"
        >
          <span className="inline-block text-xs sm:text-sm font-semibold text-accent uppercase tracking-[0.15em] sm:tracking-[0.2em] mb-2 sm:mb-3">
            {FEATURES.eyebrow}
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary dark:text-gray-100 tracking-tight">
            {FEATURES.title}
          </h2>
          <div className="flex justify-center mt-4">
            <div className="h-1 w-16 bg-accent rounded-full" />
          </div>
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
            const style = ICON_STYLES[index];
            const IconComponent = style.Icon;
            return (
              <motion.article
                key={feature.id}
                variants={item}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
                className="group"
              >
                <div className="h-full bg-white dark:bg-gray-800 rounded-2xl p-6 sm:p-8 shadow-lg dark:shadow-gray-900/50 border border-gray-100 dark:border-gray-700/80 transition-all duration-300 hover:shadow-xl hover:border-accent/20 dark:hover:border-accent/30 hover:shadow-accent/5">
                  {/* Icon with colored background */}
                  <div className="relative mb-5">
                    <div className={`inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-xl ${style.bg} ${style.ring} ring-1 ${style.hoverBg} transition-all duration-300 group-hover:scale-110`}>
                      <IconComponent size={28} strokeWidth={2} className={`sm:w-8 sm:h-8 ${style.iconColor}`} />
                    </div>
                    <span className="absolute -top-1 -right-1 text-3xl font-bold text-gray-300 dark:text-gray-600 select-none">
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
