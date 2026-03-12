import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
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
    description: "Advanced water purification solutions.",
    path: "/services/water-treatment-plant",
    image: BANNER_IMAGES.WATERTREATMENT_BANNER,
  },
  {
    name: "Water Softening Plant",
    description: "Remove hardness and improve water quality.",
    path: "/services/water-softening-plant",
    image: BANNER_IMAGES.WATERSOFTENING_BANNER,
  },
  {
    name: "RO Water Purifiers",
    description: "Clean drinking water with modern filtration.",
    path: "/services/ro-water-purifiers",
    image: BANNER_IMAGES.RO_BANNER,
  },
];

export default function IndustriesSlider() {
  const [active, setActive] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 4000);

    return () => clearInterval(interval);
  }, [active]);

  const handleNext = () => {
    setActive((prev) => (prev + 1) % items.length);
  };

  const handlePrev = () => {
    setActive((prev) => (prev === 0 ? items.length - 1 : prev - 1));
  };

  return (
    <section className="relative bg-black py-24 overflow-hidden text-white">

      <div className="text-center mb-16">
        <h2 className="text-4xl font-semibold">Our Top Products</h2>
        <p className="text-gray-400 mt-2">
          Delivering excellence across industries
        </p>
      </div>

      <div className="relative flex justify-center items-center h-[500px]">

        <button
          onClick={handlePrev}
          className="absolute left-10 z-40 bg-white text-black p-3 rounded-full"
        >
          <ChevronLeft />
        </button>

        <button
          onClick={handleNext}
          className="absolute right-10 z-40 bg-white text-black p-3 rounded-full"
        >
          <ChevronRight />
        </button>

        {items.map((item, index) => {
          const offset = index - active;

          return (
            <motion.div
              key={index}
              animate={{
                x:
                  offset === 0
                    ? 0
                    : offset === -1
                    ? -180
                    : offset === 1
                    ? 180
                    : offset === -2
                    ? -320
                    : 320,
                scale: offset === 0 ? 1 : 0.8,
                opacity: offset === 0 ? 1 : 0.4,
                zIndex: offset === 0 ? 30 : 10,
              }}
              transition={{
                type: "spring",
                stiffness: 120,
                damping: 20,
              }}
              className={`absolute h-[440px] w-[360px] rounded-2xl overflow-hidden shadow-2xl ${
                offset === 0
                  ? "bg-red-600 text-white"
                  : "bg-gray-900 text-white"
              }`}
            >
              {/* IMAGE */}
              <div className="flex justify-center pt-6">
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-[200px] object-contain"
                />
              </div>

              {/* CONTENT */}
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold mb-2">
                  {item.name}
                </h3>

                <p className="text-sm opacity-80 mb-4">
                  {item.description}
                </p>

                <Link
                  to={item.path}
                  className="px-5 py-2 bg-black text-white rounded-md text-sm"
                >
                  Know More
                </Link>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* DOTS */}
      <div className="flex justify-center mt-10 gap-3">
        {items.map((_, index) => (
          <div
            key={index}
            onClick={() => setActive(index)}
            className={`h-2 w-2 rounded-full cursor-pointer ${
              active === index ? "bg-orange-400" : "bg-gray-600"
            }`}
          />
        ))}
      </div>
    </section>
  );
}