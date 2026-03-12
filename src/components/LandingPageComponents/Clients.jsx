import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { CLIENTS } from "@/utils/data";

const ClientCard = ({ logo, name, subtitle }) => (
  <div
    className="relative group w-[150px] md:w-[240px] shrink-0 
               rounded-xl p-5 md:p-8 text-center 
               bg-neutral-900/40 border border-neutral-800
               active:border-red-500 md:hover:border-red-500
               transition-all duration-300"
  >
    {/* Logo Container - Colorful by default, no grayscale */}
    <div className="h-10 md:h-14 flex items-center justify-center transition-transform duration-500 group-hover:scale-105">
      <img
        src={logo}
        alt={`${name} logo`}
        className="h-full w-full object-contain"
        loading="lazy"
      />
    </div>

    {/* Text Content */}
    <div className="mt-4">
      <h4 className="text-[11px] md:text-sm font-bold text-neutral-200 group-hover:text-white transition-colors">
        {name}
      </h4>
      <p className="text-[9px] md:text-[10px] uppercase tracking-widest text-neutral-500 mt-1 font-medium">
        {subtitle}
      </p>
    </div>

    {/* Bottom Accent Line - Triggers on mobile tap and desktop hover */}
    <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-red-600 group-hover:w-full transition-all duration-500" />
  </div>
);

export default function Clients() {
  const marqueeRef = useRef(null);
  const [contentWidth, setContentWidth] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const marqueeItems = [...CLIENTS, ...CLIENTS, ...CLIENTS];

  useEffect(() => {
    const calculateWidth = () => {
      if (marqueeRef.current) {
        setContentWidth(marqueeRef.current.scrollWidth / 3);
      }
    };
    calculateWidth();
    window.addEventListener("resize", calculateWidth);
    return () => window.removeEventListener("resize", calculateWidth);
  }, []);

  return (
    <section id="clients" className="relative py-16 md:py-24 bg-neutral-950 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12">
          <div className="text-center md:text-left">
            <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
              Powering <span className="text-red-600">Industries</span>
            </h2>
            <p className="mt-2 text-neutral-400 text-sm md:text-lg max-w-sm">
              Trusted by leading organizations and residential communities.
            </p>
          </div>

          <div className="flex gap-2">
            <div className="px-3 py-1.5 rounded-lg border border-neutral-800 text-[10px] font-bold uppercase text-neutral-400">
              50+ Corporates
            </div>
            <div className="px-3 py-1.5 rounded-lg border border-neutral-800 text-[10px] font-bold uppercase text-neutral-400">
              100+ Communities
            </div>
          </div>
        </div>

        <div
          className="relative group cursor-default"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setIsPaused(false)}
        >


          <motion.div
            ref={marqueeRef}
            className="flex gap-4 md:gap-6 w-max"
            animate={{ x: isPaused ? undefined : [0, -contentWidth] }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 45, // Slightly slower for easier reading
                ease: "linear",
              },
            }}
          >
            {marqueeItems.map((c, i) => (
              <ClientCard key={`${c.name}-${i}`} {...c} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}