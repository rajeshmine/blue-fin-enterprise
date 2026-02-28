"use client";

import { motion } from "framer-motion";
import { ABOUT } from "@/lib/content";

export default function About() {
  return (
    <section id="about" className="py-16 sm:py-20 md:py-24 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-center px-4 sm:px-6">

        <motion.img
          src={ABOUT.image.src}
          alt={ABOUT.image.alt}
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="rounded-2xl shadow-xl w-full max-w-md mx-auto md:max-w-none"
        />

        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center md:text-left"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 text-primary dark:text-primary">
            {ABOUT.title}
          </h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{ABOUT.paragraph1}</p>
          <br/>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{ABOUT.paragraph2}</p>

        </motion.div>
      </div>
    </section>
  );
}
