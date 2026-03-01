"use client";

import { motion } from "framer-motion";
import { HardHat, Banknote, UserCheck, Timer } from "lucide-react";
import { WHY_CHOOSE_US } from "@/lib/content";

const ICON_STYLES = [
  { Icon: HardHat, bg: "bg-amber-400/20", iconColor: "text-amber-300", ring: "ring-amber-400/30" },
  { Icon: Banknote, bg: "bg-emerald-400/20", iconColor: "text-emerald-300", ring: "ring-emerald-400/30" },
  { Icon: UserCheck, bg: "bg-blue-400/20", iconColor: "text-blue-300", ring: "ring-blue-400/30" },
  { Icon: Timer, bg: "bg-violet-400/20", iconColor: "text-violet-300", ring: "ring-violet-400/30" },
] as const;

export default function WhyChoose() {
  return (
    <section className="py-16 sm:py-20 md:py-24 bg-[#1e2a5e] dark:bg-primary/90 text-white text-center overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 min-w-0">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-10 sm:mb-14 md:mb-16">
          {WHY_CHOOSE_US.title}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-10">
          {WHY_CHOOSE_US.items.map((item, i) => {
            const style = ICON_STYLES[i];
            const IconComponent = style.Icon;
            return (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="group p-6 sm:p-8 rounded-xl shadow-lg bg-white/5 hover:bg-white/10 backdrop-blur-sm border border-white/10 transition-all duration-300"
            >
              <div className="mt-1 mb-4 flex justify-center">
                <div className={`inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-xl ${style.bg} ring-1 ${style.ring} transition-all duration-300 group-hover:scale-110`}>
                  <IconComponent className={style.iconColor} size={28} strokeWidth={2} />
                </div>
              </div>
              <div>
                <h4 className="text-white font-bold text-lg">{item.title}</h4>
                <p className="text-gray-300 text-sm leading-relaxed">{item.description}</p>
              </div>
            </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}