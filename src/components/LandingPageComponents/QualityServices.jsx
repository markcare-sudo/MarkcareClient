import React from "react";
import { motion } from "framer-motion";
import {
  Wind,
  Droplet,
  Factory,
  Recycle,
  Waves,
  ArrowUpDown,
  Zap,
  Sun,
  CheckCircle,
  ArrowUpRight,
} from "lucide-react";
import { BANNER_IMAGES } from "@/constants/branding";

/* ================================
   SERVICES DATA
================================ */

const services = [
  {
    title: "Residential Elevators",
    icon: ArrowUpDown,
    segment: "Domestic",
       image: BANNER_IMAGES.ELEVATOR_BANNER,
       path: "/services/elevators",
    description:
      "Safe and space-efficient home elevators for villas and residential buildings.",
    points: [
      "Home lift installation",
      "Modernization & upgrades",
      "Annual Maintenance Contracts",
    ],
  },
  {
    title: "RO Water Purifiers",
    icon: Droplet,
    segment: "Domestic",
       image: BANNER_IMAGES.RO_BANNER,
       path: "/services/ro-water-purifiers",
    description:
      "Advanced RO purification systems for clean and safe drinking water.",
    points: [
      "Filter & membrane replacement",
      "TDS optimization",
      "AMC support",
    ],
  },
  {
    title: "Solar Power Systems",
    icon: Sun,
    segment: "Domestic",
       image: BANNER_IMAGES.SOLAR_BANNER,
       path: "/services/solar-power-systems",
    description:
      "Rooftop solar solutions to reduce electricity bills and carbon footprint.",
    points: [
      "On-grid & hybrid systems",
      "Net metering support",
      "Performance monitoring",
    ],
  },
  {
    title: "AC Systems",
    icon: Wind,
    segment: "Domestic",
       image: BANNER_IMAGES.AC_BANNER,
       path: "/services/ac-systems",
    description:
      "Professional AC installation, repair, and preventive maintenance.",
    points: [
      "Deep cleaning service",
      "Gas charging & leak detection",
      "Annual service packages",
    ],
  },
  {
    title: "Water Treatment Plant",
    icon: Factory,
    segment: "Commercial",
       image: BANNER_IMAGES.WATERTREATMENT_BANNER,
       path: "/services/water-treatment-plant",
    description:
      "Complete WTP solutions for large facilities and industrial campuses.",
    points: [
      "Plant audits & revamps",
      "Utility water management",
      "Operations & maintenance",
    ],
  },
  {
    title: "Sewage Treatment Plant",
    icon: Waves,
    segment: "Commercial",
       image: BANNER_IMAGES.SEWAGEWATER_BANNER,
       path: "/services/sewage-treatment-plant",
    description:
      "Compliance-focused STP operation and optimization services.",
    points: [
      "Odour control solutions",
      "Performance monitoring",
      "PCB compliance support",
    ],
  },
  {
    title: "Effluent Treatment Plant",
    icon: Recycle,
    segment: "Commercial",
       image: BANNER_IMAGES.EFFLUENT_BANNER,
       path: "/services/effluent-treatment-plant",
    description:
      "Industrial effluent treatment design, upgrade, and AMC support.",
    points: [
      "Process optimization",
      "Automation upgrades",
      "Regulatory compliance",
    ],
  },
  {
    title: "Diesel Generators",
    icon: Zap,
    segment: "Commercial",
       image: BANNER_IMAGES.DEISELGENERATE_BANNER,
       path: "/services/diesel-generators",
    description:
      "Reliable DG installation, servicing, and preventive maintenance.",
    points: [
      "Load testing & audit",
      "Overhauling & repairs",
      "Emergency backup support",
    ],
  },
];

/* ================================
   ANIMATIONS
================================ */

const containerVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

/* ================================
   COMPONENT
================================ */

export default function OurServices() {
  return (
    <section className="relative text-white py-24 overflow-hidden min-h-screen">
      <div className="relative max-w-7xl mx-auto px-4">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-6">
            <ArrowUpRight size={30} className="text-gray-400" />
            <span className="text-2xl md:text-4xl tracking-widest uppercase text-gray-400 font-medium">
              Our Services
            </span>
          </div>

          <p className="text-gray-400 max-w-2xl text-lg">
            Comprehensive, standardized, and reliable — tailored for homes,
            businesses, and industrial environments.
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={index}
                variants={cardVariants}
                className="group [perspective:1200px]"
              >
                <div
                  onClick={(e) =>
                    e.currentTarget.classList.toggle("rotate-y-180")
                  }
                  className="relative w-full min-h-[420px] transition-transform duration-700 [transform-style:preserve-3d] md:group-hover:rotate-y-180 cursor-pointer"
                >
                  {/* FRONT */}
                  <div className="absolute inset-0 [backface-visibility:hidden]">
                    <div className="bg-gradient-to-br from-gray-900 to-gray-800 
                      border border-gray-800 rounded-2xl p-7 h-full
                      hover:border-red-500 hover:shadow-2xl hover:shadow-red-500/10
                      transition-all duration-300"
                    >
                      <div className="w-12 h-12 flex items-center justify-center 
                        bg-red-600/20 rounded-lg mb-6"
                      >
                        <Icon size={22} className="text-red-500" />
                      </div>

                      <h4 className="text-lg font-semibold mb-3">
                        {service.title}
                      </h4>

                      <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                        {service.description}
                      </p>

                      <ul className="space-y-3">
                        {service.points.map((point, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-2 text-sm text-gray-300"
                          >
                            <CheckCircle
                              size={14}
                              className="text-red-500 mt-1"
                            />
                            {point}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* BACK (IMAGE ONLY) */}
                  <div className="absolute inset-0 rotate-y-180 [backface-visibility:hidden] rounded-2xl overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}