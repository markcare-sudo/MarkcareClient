// WorkShowcase.jsx
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function WorkShowcase() {
  const images = [
    { src: "/assets/Images/Markcare16.jpg", alt: "ETP Plant Installation" },
    { src: "/assets/Images/Markcare18.jpg", alt: "Industrial RO System" },
    { src: "/assets/Images/Markcare20.jpg", alt: "Water Treatment Setup" },
    { src: "/assets/Images/Markcare21.jpg", alt: "Commercial Utility Install" },
    { src: "/assets/Images/Markcare22.jpg", alt: "Solar Integrated System" },
    { src: "/assets/Images/Markcare10.jpg", alt: "Factory Utility Project" },
  ];

  const duplicated = [...images, ...images]; // For infinite loop
  const [selected, setSelected] = useState(null);

  return (
    <section
      id="work"
      className="relative py-20 lg:py-28 bg-black text-white overflow-hidden"
    >
      {/* Background subtle dots */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,white_1px,transparent_1px)] [background-size:28px_28px]" />

      <div className="relative max-w-7xl mx-auto px-4">
        {/* ================= HEADER ================= */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.4 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            Work Showcase
          </h2>

          <p className="mt-4 text-gray-400 text-lg leading-relaxed">
            A curated glimpse of our on-site installs and industrial solutions
            delivered with precision and care.
          </p>

          <p className="mt-6 text-sm text-gray-500">
            — long-term support & reasonable pricing
          </p>
        </motion.div>
      </div>

      {/* ================= INFINITE SLIDER ================= */}
      <div className="relative mt-14 overflow-hidden">
        <motion.div
          className="flex gap-8"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            duration: 5,
            ease: "linear",
          }}
          whileHover={{ animationPlayState: "paused" }}
        >
          {duplicated.map((img, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -8 }}
              onClick={() => setSelected(i % images.length)}
              className="min-w-[280px] md:min-w-[420px] cursor-pointer 
                         rounded-2xl overflow-hidden border border-white/10 
                         bg-white/5 backdrop-blur-xl"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="h-48 md:h-64 w-full object-cover 
                           transition-transform duration-700 hover:scale-105"
                loading="lazy"
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Gradient fade edges */}
        <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-black to-transparent z-10" />
        <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-black to-transparent z-10" />
      </div>

      {/* ================= MODAL ================= */}
      <AnimatePresence>
        {selected !== null && (
          <motion.div
            className="fixed inset-0 z-50 grid place-items-center bg-black/80 p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="max-w-5xl w-full rounded-2xl bg-black border border-white/10 overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={images[selected].src}
                alt={images[selected].alt}
                className="w-full h-[60vh] object-contain bg-black"
              />

              <div className="p-6 border-t border-white/10">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold">
                    {images[selected].alt}
                  </h3>
                  <span className="text-sm text-gray-400">
                    {selected + 1} / {images.length}
                  </span>
                </div>

                <p className="mt-3 text-gray-400 text-sm">
                  Detailed project description can go here explaining the
                  technology, scale and impact delivered to the client.
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
