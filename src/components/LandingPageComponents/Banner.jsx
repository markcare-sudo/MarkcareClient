import React, { useEffect, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { BANNER_IMAGES } from "@/constants/branding";
import { ChevronRight } from "lucide-react";

const serviceItems = [
  { name: "Residential Elevators", path: "/services/elevators-lifts", image: BANNER_IMAGES.ELEVATOR_BANNER },
  { name: "Water Treatment Plant", path: "/services/water-treatment-plant", image: BANNER_IMAGES.WATERTREATMENT_BANNER },
  { name: "Water Softening Plant", path: "/services/water-softening-plant", image: BANNER_IMAGES.WATERSOFTENING_BANNER },
  { name: "Sewage Treatment Plant", path: "/services/sewage-treatment-plant", image: BANNER_IMAGES.SEWAGEWATER_BANNER },
  { name: "Reverse Osmosis Plant", path: "/services/reverse-osmosis-plant", image: BANNER_IMAGES.REVERSEOSMOSIS_BANNER },
  { name: "RO Water Purifiers", path: "/services/ro-water-purifiers", image: BANNER_IMAGES.RO_BANNER },
  { name: "Diesel Generators", path: "/services/diesel-generators", image: BANNER_IMAGES.DEISELGENERATE_BANNER },
];

export default function ServiceCarousel() {
  const [current, setCurrent] = useState(0);
  const navigate = useNavigate();

  const nextSlide = useCallback(() => {
    setCurrent((prev) => (prev + 1) % serviceItems.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <div className="relative w-full h-[70vh] md:h-[85vh] lg:h-[90vh] overflow-hidden bg-black">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          {/* Cinematic Background Image */}
          <motion.img
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 5, ease: "easeOut" }}
            src={serviceItems[current].image}
            alt={serviceItems[current].name}
            className="w-full h-full object-cover"
          />

          {/* Premium Gradient Overlays */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/40 to-transparent hidden md:block" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent md:hidden" />

          {/* Content Wrapper */}
          <div className="absolute inset-0 flex items-end md:items-center px-6 md:px-20 lg:px-32 pb-20 md:pb-0">
            <div className="max-w-3xl">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                <span className="inline-block px-3 py-1 mb-4 text-xs font-bold tracking-widest text-red-500 uppercase bg-red-500/10 border border-red-500/20 rounded-full">
                  Our Specialization
                </span>
                
                <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-6">
                  {/* Smooth reveal instead of heavy typing effect */}
                  {serviceItems[current].name}
                </h2>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => navigate(serviceItems[current].path)}
                  className="group flex items-center gap-3 px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-bold rounded-full transition-all shadow-xl shadow-red-600/20"
                >
                  Explore Service
                  <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Indicators */}
      <div className="absolute bottom-8 left-0 right-0 z-30 flex justify-center gap-4">
        {serviceItems.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className="relative h-1.5 transition-all duration-300 overflow-hidden rounded-full bg-white/20"
            style={{ width: index === current ? "3rem" : "1rem" }}
          >
            {index === current && (
              <motion.div
                layoutId="activeIndicator"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 5, ease: "linear" }}
                className="absolute inset-0 bg-red-500"
              />
            )}
          </button>
        ))}
      </div>
    </div>
  );
}