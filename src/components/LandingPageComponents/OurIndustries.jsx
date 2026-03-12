import React, { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { BANNER_IMAGES } from "@/constants/branding";

const items = [
  {
    name: "Residential Elevators",
    description: "Smooth and reliable elevators designed for modern homes.",
    path: "/services/elevators",
    image: BANNER_IMAGES.ELEVATOR_BANNER,
  },
  {
    name: "Water Treatment Plant",
    description: "Advanced water purification solutions for industrial use.",
    path: "/services/water-treatment-plant",
    image: BANNER_IMAGES.WATERTREATMENT_BANNER,
  },
  {
    name: "Water Softening Plant",
    description: "Remove hardness and improve water quality effectively.",
    path: "/services/water-softening-plant",
    image: BANNER_IMAGES.WATERSOFTENING_BANNER,
  },
  {
    name: "RO Water Purifiers",
    description: "Clean drinking water with modern multi-stage filtration.",
    path: "/services/ro-water-purifiers",
    image: BANNER_IMAGES.RO_BANNER,
  },
];

export default function IndustriesSlider() {
  const [active, setActive] = useState(0);

  const handleNext = useCallback(() => {
    setActive((prev) => (prev + 1) % items.length);
  }, []);

  const handlePrev = useCallback(() => {
    setActive((prev) => (prev === 0 ? items.length - 1 : prev - 1));
  }, []);

  useEffect(() => {
    const interval = setInterval(handleNext, 5000);
    return () => clearInterval(interval);
  }, [handleNext]);

  return (
    <section className="relative bg-neutral-950 py-20 px-4 overflow-hidden text-white">
      {/* Header */}
      <div className="max-w-4xl mx-auto text-center mb-12 lg:mb-20">
        <motion.span 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-orange-500 font-medium tracking-widest uppercase text-sm"
        >
          Premium Solutions
        </motion.span>
        <h2 className="text-4xl md:text-5xl font-bold mt-3 tracking-tight">Our Top Products</h2>
        <p className="text-neutral-400 mt-4 max-w-lg mx-auto">
          Delivering engineering excellence across diverse residential and industrial sectors.
        </p>
      </div>

      {/* Slider Container */}
      <div className="relative max-w-7xl mx-auto h-[500px] flex items-center justify-center">
        
        {/* Navigation Controls - Hidden on small mobile for better UX */}
        <div className="absolute inset-0 flex items-center justify-between z-40 pointer-events-none px-4 md:px-10">
          <button
            onClick={handlePrev}
            className="pointer-events-auto bg-white/10 hover:bg-orange-600 transition-colors p-4 rounded-full backdrop-blur-md border border-white/20 group"
          >
            <ChevronLeft className="w-6 h-6 group-active:scale-90 transition-transform" />
          </button>
          <button
            onClick={handleNext}
            className="pointer-events-auto bg-white/10 hover:bg-orange-600 transition-colors p-4 rounded-full backdrop-blur-md border border-white/20 group"
          >
            <ChevronRight className="w-6 h-6 group-active:scale-90 transition-transform" />
          </button>
        </div>

        {/* Cards Stack */}
        <div className="relative w-full h-full flex items-center justify-center">
          {items.map((item, index) => {
            // Logic for "Infinite" circular positioning
            let position = index - active;
            if (position < -1) position = position + items.length;
            if (position > items.length - 2) position = position - items.length;

            const isActive = position === 0;
            const isVisible = Math.abs(position) <= 1; // Only show center, left, and right

            return (
              <motion.div
                key={index}
                initial={false}
                animate={{
                  x: `${position * 85}%`, // Responsive offset
                  scale: isActive ? 1 : 0.8,
                  opacity: isVisible ? 1 : 0,
                  zIndex: isActive ? 30 : 10,
                }}
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 25,
                }}
                className={`absolute w-[300px] md:w-[400px] aspect-[3/4] md:h-[480px] rounded-3xl p-1 overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] ${
                  isActive ? "bg-gradient-to-b from-orange-600 to-red-700" : "bg-neutral-900 border border-neutral-800"
                }`}
              >
                <div className="relative h-full w-full bg-neutral-900/40 rounded-[22px] overflow-hidden flex flex-col">
                  {/* Image Section */}
                  <div className="h-1/2 flex items-center justify-center p-8 bg-white/5">
                    <motion.img
                      layoutId={`img-${index}`}
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-contain drop-shadow-2xl"
                    />
                  </div>

                  {/* Content Section */}
                  <div className="flex-1 p-8 flex flex-col justify-between text-center">
                    <div>
                      <h3 className={`text-2xl font-bold mb-3 ${isActive ? "text-white" : "text-neutral-200"}`}>
                        {item.name}
                      </h3>
                      <p className="text-neutral-400 text-sm leading-relaxed line-clamp-2">
                        {item.description}
                      </p>
                    </div>

                    <Link
                      to={item.path}
                      className={`inline-flex items-center justify-center gap-2 mt-4 px-6 py-3 rounded-xl font-medium transition-all ${
                        isActive 
                        ? "bg-white text-black hover:bg-orange-50" 
                        : "bg-neutral-800 text-white hover:bg-neutral-700"
                      }`}
                    >
                      View Details
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Pagination Dots */}
      <div className="flex justify-center mt-12 gap-3">
        {items.map((_, index) => (
          <button
            key={index}
            onClick={() => setActive(index)}
            className={`transition-all duration-300 rounded-full ${
              active === index ? "w-8 bg-orange-500" : "w-2 bg-neutral-700 hover:bg-neutral-500"
            } h-2`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}