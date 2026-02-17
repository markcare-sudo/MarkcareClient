import { BANNER_IMAGES } from "@/constants/branding";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const serviceItems = [
  {
    name: " Residential Elevators",
    path: "/product-&-services/elevators",
    image: BANNER_IMAGES.ELEVATOR_BANNER,
  },
  {
    name: " Water Treatment Plant",
    path: "/product-&-services/water-treatment-plant",
    image: BANNER_IMAGES.WATERTREATMENT_BANNER,
  },
  {
    name: " Water Softening Plant",
    path: "/product-&-services/water-softening-plant",
    image: BANNER_IMAGES.WATERSOFTENING_BANNER,
  },
  {
    name: " Sewage Treatment Plant",
    path: "/product-&-services/sewage-treatment-plant",
    image: BANNER_IMAGES.SEWAGEWATER_BANNER,
  },
  {
    name: " Reverse Osmosis Plant",
    path: "/product-&-services/reverse-osmosis-plant",
    image: BANNER_IMAGES.REVERSEOSMOSIS_BANNER,
  },
  {
    name: " RO Water Purifiers",
    path: "/product-&-services/ro-water-purifiers",
    image: BANNER_IMAGES.RO_BANNER,
  },
  {
    name: " Diesel Generators",
    path: "/product-&-services/diesel-generators",
    image: BANNER_IMAGES.DEISELGENERATE_BANNER,
  },
];

export default function ServiceCarousel() {
  const [current, setCurrent] = useState(0);
  const [typedText, setTypedText] = useState("");
  const navigate = useNavigate();

  // Auto Slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % serviceItems.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // Typing Effect
  useEffect(() => {
    const fullText = serviceItems[current].name;
    let index = 0;
    setTypedText("");

    const typing = setInterval(() => {
      setTypedText((prev) => prev + fullText.charAt(index));
      index++;
      if (index === fullText.length) clearInterval(typing);
    }, 80);

    return () => clearInterval(typing);
  }, [current]);

  return (
    <div className="relative w-full overflow-hidden">
      {serviceItems.map((item, index) => (
        <div
          key={index}
          className={`transition-opacity duration-1000 ${index === current ? "opacity-100" : "opacity-0 absolute inset-0"
            }`}
        >
          {/* MOBILE LAYOUT (Image Top, Text Bottom) */}
          <div className="md:hidden relative w-full bg-black">
            {/* Image */}
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-auto object-contain"
            />

            {/* Bottom Gradient Shadow */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

            {/* Text Content */}
            <div className="absolute bottom-0 w-full px-6 pb-6">
              <h2 className="text-2xl font-bold text-white leading-tight">
                {typedText}
                <span className="border-r-2 border-yellow-400 animate-pulse ml-2"></span>
              </h2>

              <button
                onClick={() => navigate(item.path)}
                className="mt-4 px-6 py-3 bg-red-500 hover:bg-red-600 text-white font-semibold rounded-md transition-all duration-300"
              >
                Explore Service
              </button>
            </div>
          </div>

          {/* DESKTOP LAYOUT */}
          <div className="hidden md:block relative h-[80vh] lg:h-[90vh]">
            {/* Background Image */}
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-full object-cover"
            />

            {/* Left Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent"></div>

            {/* Content */}
            <div className="absolute inset-0 flex items-center">
              <div className="w-1/2 px-16 text-left">
                <h2 className="text-5xl lg:text-6xl font-bold text-white leading-tight">
                  {typedText}
                  <span className="border-r-2 border-yellow-400 animate-pulse ml-2"></span>
                </h2>

                <button
                  onClick={() => navigate(item.path)}
                  className="mt-6 px-6 py-3 bg-red-500 hover:bg-red-600 text-white font-semibold rounded-md transition-all duration-300"
                >
                  Explore Service
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Indicators */}
      <div className="flex justify-center gap-3 py-4 bg-black md:absolute md:bottom-6 md:left-0 md:right-0 md:bg-transparent z-20">
        {serviceItems.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-6 h-2 md:w-4 md:h-4 rounded-full cursor-pointer transition-all ${index === current ? "bg-yellow-500 scale-110" : "bg-white/70"
              }`}
          ></div>
        ))}
      </div>
    </div>
  );


}