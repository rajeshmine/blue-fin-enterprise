"use client";

import { motion } from "framer-motion";
import { HardHat, Banknote, UserCheck, Timer } from 'lucide-react';
export default function WhyChoose() {
  const items = [
    {
      title: "Expert Team",
      desc: "We have the most experienced team of experts in the industry.",
      icon: <HardHat className="text-white" size={42} strokeWidth={1.5} />
    },
    {
      title: "Competitive Price",
      desc: "We offer competitive pricing in the market.",
      icon: <Banknote className="text-white" size={42} strokeWidth={1.5} />
    },
    {
      title: "Trusted Supplier",
      desc: "We are well known in the market for our Quality Products.",
      icon: <UserCheck className="text-white" size={42} strokeWidth={1.5} />
    },
    {
      title: "Fast Feature Delivery",
      desc: "We have a strong supply chain to deliver across Globe.",
      icon: <Timer className="text-white" size={42} strokeWidth={1.5} />
    }
  ];

  return (
    <section className="py-16 sm:py-20 md:py-24 bg-[#1e2a5e] dark:bg-primary/90 text-white text-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-10 sm:mb-14 md:mb-16">
          Why Choose Us
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-10">
          {items.map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="p-6 sm:p-8 rounded-xl shadow-lg"
            >

              <div className="mt-1 mb-4 flex justify-center">{item.icon}</div>
              <div>
                <h4 className="text-white font-bold text-lg">{item.title}</h4>
                <p className="text-gray-300 text-sm leading-relaxed">{item.desc}</p>


              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}