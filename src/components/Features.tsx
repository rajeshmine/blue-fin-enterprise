// "use client";

// import { motion } from "framer-motion";

// export default function Features() {
//   const features = [
//     "Innovative Products",
//     "Team of Experts",
//     "Strong Supply Chain"
//   ];

//   return (
//     <section className="py-24 bg-gray-100">
//       <div className="max-w-7xl mx-auto px-6">
//         <div className="grid md:grid-cols-3 gap-10">
//           {features.map((feature, i) => (
//             <motion.div
//               key={i}
//               whileHover={{ y: -10 }}
//               className="bg-white p-10 rounded-2xl shadow-xl text-center"
//             >
//               <h3 className="text-xl font-semibold text-primary">
//                 {feature}
//               </h3>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
"use client";

import { motion } from "framer-motion";
import React from 'react';
// You can use icons from lucide-react or react-icons
import { Gem, Users, Truck } from 'lucide-react';

const Features = () => {
  const features = [
    {
      id: 1,
      title: "Innovative Products",
      icon: <Gem size={40} className="text-red-600 dark:text-accent" />,
    },
    {
      id: 2,
      title: "Team Of Experts",
      icon: <Users size={40} className="text-red-600 dark:text-accent" />,
    },
    {
      id: 3,
      title: "Strong Supply Chain",
      icon: <Truck size={40} className="text-red-600 dark:text-accent" />,
    },
  ];

  return (
    <div className="w-full">
      {/* Dark Navy Background Header */}
      <div className="bg-[#00153D] dark:bg-primary h-16 sm:h-20 md:h-24 w-full"></div>

      {/* Cards Container */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 -mt-8 sm:-mt-10 md:-mt-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
          {features.map((feature) => (
            <motion.div
              key={feature.id}
              whileHover={{ y: -10 }}
             
            >
              <div
                key={feature.id}
                className="bg-white dark:bg-gray-800 p-6 sm:p-8 flex flex-col items-center justify-center transition-transform hover:-translate-y-1 shadow-sm dark:shadow-gray-900/50"
              >
                <div className="mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-[#00153D] dark:text-gray-100 font-bold text-base sm:text-lg text-center uppercase tracking-tight">
                  {feature.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;