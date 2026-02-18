import React, { useEffect, useRef, useState } from "react";
import {
  ShieldCheck,
  CheckCircle2,
  BadgeCheck,
  Factory,
} from "lucide-react";
import { motion, useInView } from "framer-motion";

/* ================= COUNT UP ================= */

const CountUp = ({ end, duration = 1500, suffix = "" }) => {
  const [value, setValue] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.4 });

  useEffect(() => {
    if (!isInView) {
      setValue(0); // reset when out of view
      return;
    }

    let startTime = null;

    const animate = (time) => {
      if (!startTime) startTime = time;
      const progress = Math.min((time - startTime) / duration, 1);
      setValue(Math.floor(progress * end));
      if (progress < 1) requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }, [isInView, end, duration]);

  return (
    <span ref={ref}>
      {value}
      {suffix}
    </span>
  );
};

/* ================= COMPONENT ================= */

const WhyUs = ({ installs = 5000, citiesCount = 15 }) => {
  const features = [
    {
      title: "Standardized SOPs",
      text: "Checklist-driven service delivery and QA at each step.",
      icon: ShieldCheck,
    },
    {
      title: "Certified Engineers",
      text: "Experienced technicians for critical systems and utilities.",
      icon: BadgeCheck,
    },
    {
      title: "Compliance-Ready",
      text: "Environmental & safety norms met for ETP/STP/RO projects.",
      icon: Factory,
    },
    {
      title: "End-to-End Execution",
      text: "From survey to commissioning, AMC & retrofits.",
      icon: CheckCircle2,
    },
  ];

  return (
    <section
      id="why-us"
      className="relative py-20 lg:py-28 text-white overflow-hidden"
    >

      <div className="relative max-w-7xl mx-auto px-4">
        {/* ================= HEADER ================= */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.4 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            Why Choose <span className="text-red-600">Us</span>
          </h2>

          <p className="mt-4 text-gray-400 text-lg leading-relaxed">
            Built on trust, measurable quality standards, and reliability —
            backed by certified teams and responsive support.
          </p>
        </motion.div>

        {/* ================= FEATURE CARDS ================= */}
        <motion.div
          className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.3 }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
        >
          {features.map((f, index) => {
            const isAlt = index % 2 === 0;

            return (
              <motion.div
                key={f.title}
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                whileHover={{
                  y: -12,
                  scale: 1.03,
                }}
                className={`relative group rounded-2xl p-7 overflow-hidden
        bg-gradient-to-br from-gray-900 to-gray-800
        border transition-all duration-500
        ${isAlt
                    ? "border-gray-800"
                    : "border-gray-800"
                  }
        hover:border-red-500 hover:shadow-2xl hover:shadow-red-500/10`}
              >
                {/* Soft Red Glow Background */}
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 
          group-hover:opacity-100 transition duration-500 
          bg-red-600/5 blur-xl"
                />

                {/* ICON */}
                <motion.div
                  whileHover={{ rotate: 8, scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 250 }}
                  className={`relative w-12 h-12 rounded-xl 
          flex items-center justify-center mb-6
          ${isAlt
                      ? "bg-red-600/20"
                      : "bg-red-600/10"
                    }`}
                >
                  <f.icon className="w-6 h-6 text-red-500" />
                </motion.div>

                {/* TITLE */}
                <h3 className="relative text-lg font-semibold 
                       group-hover:text-red-500 transition">
                  {f.title}
                </h3>

                {/* TEXT */}
                <p className="relative mt-3 text-sm text-gray-400 leading-relaxed">
                  {f.text}
                </p>

                {/* Bottom Accent Line */}
                <div
                  className="absolute bottom-0 left-0 h-[2px] w-0 
          bg-red-500 group-hover:w-full 
          transition-all duration-500"
                />
              </motion.div>
            );
          })}
        </motion.div>


        {/* ================= STATS ================= */}
        <motion.div
          className="mt-20 grid gap-8 sm:grid-cols-3 text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          {/* Successful Installs */}
          <div className="space-y-2 ">
            <div className="text-4xl md:text-5xl font-extrabold text-red-600">
              <CountUp end={installs} suffix="+" />
            </div>
            <div className="text-gray-400 text-sm tracking-wide">
              Successful Installs
            </div>
          </div>

          {/* Cities Covered */}
          <div className="space-y-2 ">
            <div className="text-4xl md:text-5xl font-extrabold text-red-600">
              <CountUp end={citiesCount} />
            </div>
            <div className="text-gray-400 text-sm tracking-wide">
              Cities Covered
            </div>
          </div>

          {/* Support */}
          <div className="space-y-2">
            <div className="text-4xl md:text-5xl font-extrabold text-red-600">
              24×7
            </div>
            <div className="text-gray-400 text-sm tracking-wide">
              Support
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyUs;
