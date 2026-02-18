import React, { useEffect, useRef, useState } from "react";
import {
  motion,
  useInView,
  useMotionValue,
  useTransform,
  animate,
} from "framer-motion";
import { Sparkles } from "lucide-react";

/* ---------------- Animated Number ---------------- */

const AnimatedNumber = ({ value, trigger }) => {
  const numericValue = parseInt(value.replace(/[^0-9]/g, ""), 10);
  const isK = value.toLowerCase().includes("k");
  const hasPlus = value.includes("+");

  const motionValue = useMotionValue(0);
  const rounded = useTransform(motionValue, (latest) =>
    Math.floor(latest)
  );

  useEffect(() => {
    motionValue.set(0);

    const controls = animate(motionValue, numericValue, {
      duration: 1.8,
      ease: "easeOut",
    });

    return () => controls.stop();
  }, [trigger, numericValue, motionValue]);

  return (
    <span>
      <motion.span>{rounded}</motion.span>
      {isK && "k"}
      {hasPlus && "+"}
    </span>
  );
};

/* ---------------- Main Component ---------------- */

export default function AboutHero() {
  const statsRef = useRef(null);
  const isInView = useInView(statsRef, { amount: 0.4 });

  const [trigger, setTrigger] = useState(0);

  useEffect(() => {
    if (isInView) {
      setTrigger((prev) => prev + 1); // force re-trigger
    }
  }, [isInView]);

  return (
    <section className="relative text-white py-24 overflow-hidden">

      <div className="relative max-w-7xl mx-auto text-center">

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
          className="flex justify-center mb-8"
        >
          <div className="flex items-center gap-2 bg-red-500/20 text-red-400 px-6 py-2 rounded-full text-sm font-medium">
            <Sparkles size={16} />
            About us
          </div>
        </motion.div>

        {/* Heading */}
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
          className="text-2xl md:text-3xl font-medium mb-6"
        >
          About <span className="text-red-500">Mark Care</span>
        </motion.h3>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-semibold leading-tight max-w-4xl mx-auto"
        >
          Technology-powered services at home — trusted across cities
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.9 }}
          className="mt-6 text-gray-400 max-w-3xl mx-auto leading-relaxed"
        >
          MarkCare is a technology platform enabling reliable, standardised
          home and industrial services. From AC repair to RO plants, lifts,
          solar systems and wastewater treatment — we enable service partners
          with training, tools, and technology so customers receive a
          consistent experience every time.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 1 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10"
        >
          <button className="bg-red-600 hover:bg-red-700 px-8 py-3 rounded-lg font-medium transition">
            Contact us
          </button>

          <button className="border border-red-500 text-white hover:bg-red-600/10 px-8 py-3 rounded-lg font-medium transition">
            View all services
          </button>
        </motion.div>

        {/* Stats */}
        <motion.div
          ref={statsRef}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 1 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 text-left md:text-center"
        >
          {[
            { label: "Cities served", value: "15" },
            { label: "Years of experience", value: "15" },
            { label: "Service partners", value: "300+" },
            { label: "Happy customers", value: "50k+" },
          ].map((stat, i) => (
            <div
              key={i}
              className="relative md:border-l border-red-500/40 pl-4 md:pl-6"
            >
              <div className="text-gray-300 mb-2">
                {stat.label}
              </div>

              <div className="text-3xl md:text-4xl font-bold text-red-500">
                <AnimatedNumber
                  value={stat.value}
                  trigger={trigger}
                />
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Bottom Divider */}
      <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-transparent via-gray-800 to-transparent" />
    </section>
  );
}
