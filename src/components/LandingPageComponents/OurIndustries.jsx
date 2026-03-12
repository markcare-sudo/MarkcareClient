import React, { useEffect, useState, useCallback, useMemo } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { BANNER_IMAGES } from "@/constants/branding";

const SERVICES_DATA = {
  domestic: [
    {
      name: "Residential Elevators",
      slug: "elevators-lifts",
      description: "Smooth and reliable elevators designed for modern homes and villas.",
      path: "/services/elevators-lifts",
      image: BANNER_IMAGES.ELEVATOR_BANNER,
    },
    {
      name: "RO Water Purifiers",
      slug: "ro-water-purifiers",
      description: "Clean drinking water with modern multi-stage filtration for your family.",
      path: "/services/ro-water-purifiers",
      image: BANNER_IMAGES.RO_BANNER,
    },
    {
      name: "Solar Power Systems",
      slug: "solar-power-systems",
      description: "Harness the sun's energy with high-efficiency residential solar panels.",
      path: "/services/solar-power-systems",
      image: BANNER_IMAGES.SOLAR_BANNER,
    },
    {
      name: "AC Systems & HVAC",
      slug: "ac-systems",
      description: "Energy-efficient cooling solutions and climate control for your home.",
      path: "/services/ac-systems",
      image: BANNER_IMAGES.AC_BANNER,
    },
  ],
  commercial: [
    {
      name: "WTP / ETP / STP Plants",
      slug: "water-treatment-plant",
      description: "Advanced water purification and waste treatment solutions for industries.",
      path: "/services/water-treatment-plant",
      image: BANNER_IMAGES.WATERTREATMENT_BANNER,
    },
    {
      name: "Water Softening",
      slug: "water-softening-plant",
      description: "Industrial-grade softening to remove hardness and protect your equipment.",
      path: "/services/water-softening-plant",
      image: BANNER_IMAGES.WATERSOFTENING_BANNER,
    },
    {
      name: "Industrial RO Plants",
      slug: "industrial-ro-systems",
      description: "High-capacity multi-stage filtration for large-scale industrial use.",
      path: "/services/industrial-ro-systems",
      image: BANNER_IMAGES.INDUSTRIAL_RO_BANNER,
    },
    {
      name: "Diesel Generators",
      slug: "diesel-generators",
      description: "Robust backup power solutions for factories, hospitals, and offices.",
      path: "/services/diesel-generators",
      image: BANNER_IMAGES.GENERATOR_BANNER,
    },
  ],
};

export default function IndustriesSlider() {
  // ✅ Create a flat list of featured items for the slider
  const items = useMemo(() => [
    ...SERVICES_DATA.domestic.slice(0, 3), 
    ...SERVICES_DATA.commercial.slice(0, 3)
  ], []);

  const [active, setActive] = useState(0);

  const handleNext = useCallback(() => {
    setActive((prev) => (prev + 1) % items.length);
  }, [items.length]);

  const handlePrev = useCallback(() => {
    setActive((prev) => (prev === 0 ? items.length - 1 : prev - 1));
  }, [items.length]);

  useEffect(() => {
    const interval = setInterval(handleNext, 5000);
    return () => clearInterval(interval);
  }, [handleNext]);

  return (
    <section className="relative py-12 md:py-20 px-4 overflow-hidden text-white">
      {/* Header */}
      <div className="max-w-4xl mx-auto text-center mb-10 md:mb-20">
        <motion.span 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-red-500 font-medium tracking-widest uppercase text-xs md:text-sm"
        >
          Premium Solutions
        </motion.span>
        <h2 className="text-3xl md:text-5xl font-bold mt-3 tracking-tight">Our Top Products</h2>
        <p className="text-neutral-400 mt-4 text-sm md:text-base max-w-lg mx-auto px-4">
          Delivering engineering excellence across diverse residential and industrial sectors.
        </p>
      </div>

      {/* Slider Container */}
      <div className="relative max-w-7xl mx-auto h-[450px] md:h-[500px] flex items-center justify-center">
        
        {/* Navigation Controls */}
        <div className="absolute inset-x-0 flex items-center justify-between z-40 pointer-events-none px-2 md:px-10">
          <button
            onClick={handlePrev}
            className="pointer-events-auto bg-white/10 hover:bg-red-600 transition-colors p-3 md:p-4 rounded-full backdrop-blur-md border border-white/20 group"
          >
            <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 group-active:scale-90 transition-transform" />
          </button>
          <button
            onClick={handleNext}
            className="pointer-events-auto bg-white/10 hover:bg-red-600 transition-colors p-3 md:p-4 rounded-full backdrop-blur-md border border-white/20 group"
          >
            <ChevronRight className="w-5 h-5 md:w-6 md:h-6 group-active:scale-90 transition-transform" />
          </button>
        </div>

        {/* Cards Stack */}
        <div className="relative w-full h-full flex items-center justify-center">
          {items.map((item, index) => {
            let position = index - active;
            if (position < -1) position = position + items.length;
            if (position > items.length - 2) position = position - items.length;

            const isActive = position === 0;
            const isVisible = Math.abs(position) <= 1;

            return (
              <motion.div
                key={`${item.slug}-${index}`}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                onDragEnd={(e, { offset }) => {
                  if (offset.x > 100) handlePrev();
                  else if (offset.x < -100) handleNext();
                }}
                initial={false}
                animate={{
                  x: isActive ? 0 : position > 0 ? "100%" : "-100%", 
                  scale: isActive ? 1 : 0.8,
                  opacity: isVisible ? 1 : 0,
                  zIndex: isActive ? 30 : 10,
                }}
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 25,
                }}
                className={`absolute w-[280px] md:w-[400px] h-[400px] md:h-[480px] rounded-3xl p-1 overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] cursor-grab active:cursor-grabbing ${
                  isActive ? "bg-gradient-to-b from-red-600 to-red-700" : "bg-neutral-900 border border-neutral-800"
                }`}
              >
                <div className="relative h-full w-full bg-neutral-900/40 rounded-[22px] overflow-hidden flex flex-col">
                  {/* Image Section */}
                  <div className="h-[45%] md:h-1/2 flex items-center justify-center p-6 md:p-8 bg-white/5">
                    <motion.img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-contain drop-shadow-2xl"
                    />
                  </div>

                  {/* Content Section */}
                  <div className="flex-1 p-6 md:p-8 flex flex-col justify-between text-center">
                    <div>
                      <h3 className={`text-xl md:text-2xl font-bold mb-2 md:mb-3 ${isActive ? "text-white" : "text-neutral-200"}`}>
                        {item.name}
                      </h3>
                      <p className="text-neutral-400 text-xs md:text-sm leading-relaxed line-clamp-2">
                        {item.description}
                      </p>
                    </div>

                    <Link
                      to={item.path}
                      className={`inline-flex items-center justify-center gap-2 mt-4 px-5 py-2.5 md:px-6 md:py-3 rounded-xl font-medium text-sm md:text-base transition-all ${
                        isActive 
                        ? "bg-white text-black hover:bg-red-50" 
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
      <div className="flex justify-center mt-8 md:mt-12 gap-3">
        {items.map((_, index) => (
          <button
            key={index}
            onClick={() => setActive(index)}
            className={`transition-all duration-300 rounded-full h-2 ${
              active === index ? "w-6 md:w-8 bg-red-500" : "w-2 bg-neutral-700 hover:bg-neutral-500"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}