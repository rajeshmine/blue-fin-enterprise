"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-16 sm:py-20 md:py-24 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-center px-4 sm:px-6">

        <motion.img
          src="/images/about.png"
          alt="About"
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
            About Our Company
          </h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">Blue Fin is a South wide distribution company engaged in providing Material Handling , assembly solutions through its innovative products. We are regarded as highly responsive to our customer’s needs with strong supply chain system. Together it achieves complete customer satisfaction.</p>
          <br/>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">Founded in Year 2015 as South India representatives to One Roof Solution today our application Engineers are present in all major industrial regions in the South India &amp; we are strategically adding new technologies to our business.</p>

        </motion.div>
      </div>
    </section>
  );
}