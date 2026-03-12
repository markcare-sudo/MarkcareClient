import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { CLIENTS } from "@/utils/data";

const ClientCard = ({ logo, name, subtitle }) => (
  <motion.div
    whileHover={{ y: -5 }}
    className="relative group w-[200px] md:w-[260px] shrink-0 
               rounded-2xl p-6 md:p-8 text-center overflow-hidden
               bg-neutral-900/50 border border-neutral-800/50
               hover:border-red-500/50 hover:bg-neutral-900
               transition-all duration-500"
  >
    {/* Ambient Glow */}
    <div className="absolute -inset-px rounded-2xl opacity-0 
                    group-hover:opacity-100 transition duration-700 
                    bg-gradient-to-br from-red-500/10 via-transparent to-transparent blur-lg" />

    {/* Logo Container */}
    <div className="relative h-12 md:h-16 flex items-center justify-center grayscale group-hover:grayscale-0 transition-all duration-500">
      <img
        src={logo}
        alt={`${name} logo`}
        className="h-full w-full object-contain opacity-60 
                   group-hover:opacity-100 transition duration-500 scale-90 group-hover:scale-100"
        loading="lazy"
      />
    </div>

    {/* Text Content */}
    <div className="relative mt-6">
      <h4 className="text-sm font-bold text-neutral-200 group-hover:text-white transition-colors">
        {name}
      </h4>
      <p className="text-[11px] uppercase tracking-[0.15em] text-neutral-500 mt-1.5 font-medium">
        {subtitle}
      </p>
    </div>

    {/* Elegant Accent Line */}
    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[1px] w-0 
                    bg-gradient-to-r from-transparent via-red-500 to-transparent 
                    group-hover:w-full transition-all duration-700 ease-in-out" />
  </motion.div>
);

export default function Clients() {
  const marqueeRef = useRef(null);
  const [contentWidth, setContentWidth] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Triple the items to ensure no "white space" on massive monitors
  const marqueeItems = [...CLIENTS, ...CLIENTS, ...CLIENTS];

  useEffect(() => {
    const calculateWidth = () => {
      if (marqueeRef.current) {
        // Divide by 3 because we tripled the items
        setContentWidth(marqueeRef.current.scrollWidth / 3);
      }
    };

    calculateWidth();
    window.addEventListener("resize", calculateWidth);
    return () => window.removeEventListener("resize", calculateWidth);
  }, []);

  return (
    <section id="clients" className="relative py-24 bg-neutral-950 overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-neutral-800 to-transparent" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
              Powering <span className="text-red-500 text-glow">Industries</span>
            </h2>
            <p className="mt-3 text-neutral-500 text-lg max-w-md">
              Trusted by leading organizations and residential communities across the region.
            </p>
          </motion.div>

          <div className="hidden md:flex gap-4">
            <div className="px-4 py-2 rounded-full border border-neutral-800 text-xs font-bold uppercase tracking-widest text-neutral-400">
              50+ Corporates
            </div>
            <div className="px-4 py-2 rounded-full border border-neutral-800 text-xs font-bold uppercase tracking-widest text-neutral-400">
              100+ Communities
            </div>
          </div>
        </div>

        {/* Marquee Wrapper */}
        <div
          className="relative mt-10 group"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Edge Fades - Using theme colors for a cleaner blend */}
          <div className="absolute inset-y-0 left-0 w-20 md:w-40 bg-gradient-to-r from-neutral-950 to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-20 md:w-40 bg-gradient-to-l from-neutral-950 to-transparent z-10 pointer-events-none" />

          <motion.div
            ref={marqueeRef}
            className="flex gap-6 w-max"
            animate={{ x: isPaused ? undefined : [0, -contentWidth] }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 35, // Slower is usually more professional
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

      <style>{`
        .text-glow {
          text-shadow: 0 0 20px rgba(239, 68, 68, 0.2);
        }
      `}</style>
    </section>
  );
}