import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { BANNER_IMAGES } from "@/constants/branding";
import { Link } from "react-router-dom";

const topProducts = [
  {
    name: "  Residential Elevators",
    path: "/services/elevators",
    image: BANNER_IMAGES.ELEVATOR_BANNER,
  },
  {
    name: "  Water Treatment Plant",
    path: "/services/water-treatment-plant",
    image: BANNER_IMAGES.WATERTREATMENT_BANNER,
  },
  {
    name: "  Water Softening Plant",
    path: "/services/water-softening-plant",
    image: BANNER_IMAGES.WATERSOFTENING_BANNER,
  },
  {
    name: "  Sewage Treatment Plant",
    path: "/services/sewage-treatment-plant",
    image: BANNER_IMAGES.SEWAGEWATER_BANNER,
  },
  {
    name: "  Reverse Osmosis Plant",
    path: "/services/reverse-osmosis-plant",
    image: BANNER_IMAGES.REVERSEOSMOSIS_BANNER,
  },
  {
    name: "  RO Water Purifiers",
    path: "/services/ro-water-purifiers",
    image: BANNER_IMAGES.RO_BANNER,
  },
  {
    name: "  Diesel Generators",
    path: "/services/diesel-generators",
    image: BANNER_IMAGES.DEISELGENERATE_BANNER,
  },
];


export default function IndustriesSlider() {
  const [active, setActive] = useState(0);

  // ✅ AUTO SLIDE
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 3500);

    return () => clearInterval(interval);
  }, [active]);

  const handleNext = () => {
    setActive((prev) =>
      prev === topProducts.length - 1 ? 0 : prev + 1
    );
  };

  const handlePrev = () => {
    setActive((prev) =>
      prev === 0 ? topProducts.length - 1 : prev - 1
    );
  };

  return (
    <section className="relative bg-black py-24 text-white overflow-hidden">
      
      <div className="text-center mb-16">
        <h2 className="text-4xl font-semibold">Our Top Products</h2>
        <p className="text-gray-400 mt-3">
          Delivering excellence across multiple sectors
        </p>
      </div>

      <div className="relative flex items-center justify-center h-[450px]">

        {/* LEFT ARROW */}
        <button
          onClick={handlePrev}
          className="absolute left-8 z-30 bg-white text-black p-3 rounded-full"
        >
          <ChevronLeft />
        </button>

        {/* RIGHT ARROW */}
        <button
          onClick={handleNext}
          className="absolute right-8 z-30 bg-white text-black p-3 rounded-full"
        >
          <ChevronRight />
        </button>

        {topProducts.map((item, index) => {
          const position = index - active;

          if (position < -2 || position > 2) return null;

          return (
            <motion.div
              key={index}
              initial={false}
              animate={{
                x:
                  position === 0
                    ? 0
                    : position === -1
                    ? -180
                    : position === 1
                    ? 180
                    : position === -2
                    ? -300
                    : 300,
                scale:
                  position === 0
                    ? 1
                    : position === -1 || position === 1
                    ? 0.85
                    : 0.7,
                opacity:
                  position === 0
                    ? 1
                    : position === -1 || position === 1
                    ? 0.7
                    : 0.4,
                zIndex: 10 - Math.abs(position),
              }}
              transition={{ duration: 0.6 }}
              className="absolute border w-[280px] md:w-[360px] h-[400px] rounded-xl overflow-hidden shadow-2xl"
            >
              <div className="relative w-full h-full">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover"
                />

                <div
                  className={`absolute inset-0 flex items-end p-4 ${
                    position === 0
                      ? "bg-black/40"
                      : "bg-black/60"
                  }`}
                >
                  <h3 className="text-lg font-semibold">
                    {item.name}
                  </h3>
                  <Link to={item.path} className="ml-auto px-3 py-2 bg-red-600 text-white rounded-md text-sm">
                    Explore
                  </Link>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}