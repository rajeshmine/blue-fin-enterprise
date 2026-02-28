"use client";

import { motion } from "framer-motion";

const products = ["product1.png", "product2.png", "product4.png", "product5.png",  "product9.png",  "product11.png",  ];

export default function Products() {
  return (
    <section id="products" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">
          Our Range Of Products
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          {products.map((img, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="shadow-premium p-6 rounded-xl"
            >
              <img src={`/images/products/${img}`} alt="" className="rounded-lg" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}