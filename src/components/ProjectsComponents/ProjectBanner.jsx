import React from "react";
import { motion } from "framer-motion";

const categories = [
  "RO Water Purifier",
  "Residential Elevator",
  "STP Plant",
  "Industrial RO",
  "HVAC Projects",
  "Water Softener",
  "Commercial RO",
  "Hospital Projects",
  "Manufacturing Units",
  "Educational Institutions",
  "Hospitality Projects",
  "Custom Installations",
];

export default function ProjectsBanner() {
  return (
    <section className="relative w-full bg-black text-white py-20 px-4 sm:px-6 lg:px-12 overflow-hidden">
      
      {/* Background Glow Effect */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,0,0,0.08)_0%,transparent_70%)] pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto text-center">

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 bg-red-600/20 text-red-400 border border-red-500/40 px-5 py-2 rounded-full text-sm font-medium mb-6"
        >
          ✨ Our Projects
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6"
        >
          Projects & Installations
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-gray-400 max-w-3xl mx-auto text-base sm:text-lg mb-12"
        >
          Delivering end-to-end solutions in HVAC, RO, STP, and industrial
          infrastructure across healthcare, education, hospitality, and
          manufacturing sectors.
        </motion.p>

        {/* Categories Grid */}
        <div className="flex flex-wrap justify-center gap-4">
          {categories.map((item, index) => (
            <motion.button
              key={index}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-5 py-2 text-sm sm:text-base rounded-lg border border-red-500/50 text-white bg-black hover:bg-red-600 hover:border-red-600 transition-all duration-300"
            >
              {item}
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
}