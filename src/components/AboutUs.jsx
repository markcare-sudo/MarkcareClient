import React from "react";
import { motion } from "framer-motion";
import { Sparkles, MapPin } from "lucide-react";

/* Parent stagger animation */
const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

/* Reusable fade up animation */
const fadeUp = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

export default function AboutSection() {
  return (
    <section className="relative bg-black text-white py-10 overflow-hidden">
      {/* Grid Background */}
      <div className="absolute inset-0 opacity-5 bg-[radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] bg-[size:24px_24px]" />

      <div className="relative max-w-7xl mx-auto px-4">

        {/* Top Badge */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.2 }}
          className="flex justify-center mb-8"
        >
          <div className="flex items-center gap-2 bg-red-500/20 text-red-400 px-6 py-2 rounded-full text-xl">
            <Sparkles size={30} />
            About us
          </div>
        </motion.div>

        {/* Heading */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.2 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-5xl font-semibold mb-4">
            About <span className="text-red-500">Mark</span> Care
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Mark Care delivers reliable technical solutions for homes and enterprises.
          </p>
        </motion.div>

        {/* Content Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.15 }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
        >
          {/* LEFT COLUMN */}
          <div className="lg:col-span-2 space-y-8">

            {/* What We Do */}
            <motion.div
              variants={fadeUp}
              className="border border-red-500 rounded-2xl p-8 bg-gradient-to-br from-gray-900 to-gray-800"
            >
              <h3 className="text-xl font-semibold mb-4">What we do</h3>
              <p className="text-gray-400 leading-relaxed">
                We provide installation, AMC and emergency support for AC,
                RO, water treatment, sewage treatment, lifts, generators,
                solar systems and industrial cleaning.
              </p>
            </motion.div>

            {/* Vision */}
            <motion.div
              variants={fadeUp}
              className="rounded-2xl p-8 bg-gradient-to-r from-red-600 to-red-500 shadow-xl shadow-red-600/20"
            >
              <div className="flex items-center gap-2 mb-4">
                <Sparkles size={18} />
                <h3 className="text-xl font-semibold">Our Vision</h3>
              </div>
              <p className="text-white/90">
                Deliver dependable technical services with speed, safety and consistency.
              </p>
            </motion.div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="space-y-8">
            {[
              {
                title: "Certified Experts",
                desc: "Skilled & verified technicians.",
              },
              {
                title: "Quality Assured",
                desc: "Standardized process & checks.",
              },
              {
                title: "Fast Response",
                desc: "Quick support across cities.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                className="bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 rounded-2xl p-6 hover:border-red-500 transition-all duration-300"
              >
                <h4 className="text-lg font-semibold mb-2">{item.title}</h4>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Cities Section */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.2 }}
          className="mt-16 bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 rounded-2xl p-8"
        >
          <motion.p variants={fadeUp} className="text-gray-400 mb-4">
            We operate in
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="flex items-center gap-2 mb-6"
          >
            <MapPin className="text-gray-400" size={18} />
            <h4 className="text-xl font-semibold">
              Major cities across India
            </h4>
          </motion.div>

          <div className="flex flex-wrap gap-4">
            {["Chennai", "Bangalore", "Delhi", "Hyderabad", "Mumbai"].map(
              (city, index) => (
                <motion.div
                  key={index}
                  variants={fadeUp}
                  className="px-6 py-2 border border-gray-600 rounded-full text-sm hover:border-red-500 transition"
                >
                  {city}
                </motion.div>
              )
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
