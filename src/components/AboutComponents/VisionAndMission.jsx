import React from "react";
import { motion } from "framer-motion";

export default function VisionMission() {
  return (
    <section className="relative bg-black text-white py-24 overflow-hidden">

      {/* Star Background */}
      <div
        className="absolute inset-0 opacity-10 
        bg-[radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] 
        bg-[size:24px_24px]"
      />

      <div className="relative max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

        {/* LEFT CONTENT */}
        <div className="space-y-14">

          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <h4 className="text-red-500 font-semibold tracking-wider mb-4">
              OUR VISION
            </h4>
            <p className="text-gray-300 text-lg leading-relaxed max-w-xl">
              Empower millions of professionals worldwide to deliver services
              at home like never experienced before.
            </p>
          </motion.div>

          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ amount: 0.3 }}
            transition={{ duration: 0.7 }}
          >
            <h4 className="text-red-500 font-semibold tracking-wider mb-4">
              OUR MISSION
            </h4>
            <p className="text-gray-300 text-lg leading-relaxed max-w-xl">
              Deliver standardised, high-quality home and industrial services
              through technology, training, and trusted partnerships —
              ensuring on-time, reliable experiences for customers.
            </p>
          </motion.div>

          {/* Values */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <h4 className="text-red-500 font-semibold tracking-wider mb-4">
              OUR VALUES
            </h4>

            <ul className="space-y-3 text-gray-300 text-lg">
              <li>Customer-first — reliability & trust</li>
              <li>Quality — certified partners & training</li>
              <li>Safety — compliance & insurance-backed work</li>
              <li>Sustainability — energy-efficient & green solutions</li>
            </ul>
          </motion.div>
        </div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ amount: 0.3 }}
          transition={{ duration: 0.9 }}
          className="flex justify-center"
        >
          <div className="relative">

            {/* Illustration Container */}
            <div className="bg-white/5 backdrop-blur-lg 
                            rounded-3xl p-8 
                            border border-white/10 
                            shadow-2xl">

              {/* Replace this image path with yours */}
              <img
                src="/images/vision-illustration.png"
                alt="Vision Illustration"
                className="max-w-md w-full object-contain"
              />
            </div>

            {/* Glow Effect */}
            <div className="absolute -inset-6 bg-red-600/10 blur-3xl -z-10" />
          </div>
        </motion.div>

      </div>
    </section>
  );
}
