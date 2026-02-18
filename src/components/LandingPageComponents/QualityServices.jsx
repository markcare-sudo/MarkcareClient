import React from "react";
import { motion } from "framer-motion";
import {
    Wind,
    Building2,
    Droplet,
    Factory,
    Recycle,
    Waves,
    ArrowUpDown,
    Zap,
    Sun,
    FlaskConical,
    CheckCircle,
    ArrowUpRight,
} from "lucide-react";

const services = [
    {
        title: "AC Services",
        icon: Wind,
        description:
            "End-to-end AC repair, servicing & maintenance across India.",
        points: [
            "Evaporator & condenser cleaning",
            "Refrigerant checks",
            "AMC support",
        ],
    },
    {
        title: "Commercial AC Services",
        icon: Building2,
        description:
            "Design & maintain high-performance cooling systems.",
        points: [
            "VRF/VRV expertise",
            "Energy optimization",
            "Preventive care",
        ],
    },
    {
        title: "RO Plants",
        icon: Droplet,
        description:
            "Reverse Osmosis plants for drinking & process systems.",
        points: [
            "Membrane descaling",
            "Flow restoration",
            "Purity optimization",
        ],
    },
    {
        title: "Water Treatment Plants (WTP)",
        icon: Factory,
        description:
            "Convert contaminated water into usable water.",
        points: [
            "Utility reuse",
            "Compliance support",
            "Operations care",
        ],
    },
    {
        title: "Effluent Treatment Plants (ETP)",
        icon: Recycle,
        description:
            "Turnkey ETP projects from design to commissioning.",
        points: [
            "Process engineering",
            "AMC & troubleshooting",
            "Automation upgrades",
        ],
    },
    {
        title: "Sewage Treatment Plants (STP)",
        icon: Waves,
        description:
            "Complete STP solutions for residential & industrial needs.",
        points: [
            "Operator training",
            "Performance optimization",
            "SCADA integration",
        ],
    },
    {
        title: "Lift & Escalator",
        icon: ArrowUpDown,
        description:
            "Installation & maintenance tailored to buildings.",
        points: [
            "High-speed lifts",
            "Freight elevators",
            "Safety inspections",
        ],
    },
    {
        title: "Inverter & Generator",
        icon: Zap,
        description:
            "Installation, repair & AMC with electrical integration.",
        points: [
            "Load testing",
            "Overhauling",
            "Emergency support",
        ],
    },
    {
        title: "Solar Systems",
        icon: Sun,
        description:
            "End-to-end solar survey, design & monitoring.",
        points: [
            "Battery options",
            "Performance analytics",
            "Upgrades",
        ],
    },
    {
        title: "Chemical Washing",
        icon: FlaskConical,
        description:
            "Specialized cleaning for HVAC & industrial equipment.",
        points: [
            "Scale removal",
            "Bio control",
            "Energy optimization",
        ],
    },
];

const containerVariants = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.12,
        },
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


export default function OurServices() {
    return (
        <section className="relative text-white py-24 overflow-hidden min-h-screen">
            {/* Animated Background */}
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 0.05 }}
                viewport={{ amount: 0.2 }}
                transition={{ duration: 1 }}
                className="absolute inset-0 "
            />

            <div className="relative max-w-7xl mx-auto px-4">

                {/* Header (re-animates every time) */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.1 }}
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
                    viewport={{
                        once: false,
                        amount: 0.1,
                        margin: "-50px 0px -50px 0px",
                    }}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
                >

                    {services.map((service, index) => {
                        const Icon = service.icon;

                        return (
                            <motion.div
                                key={index}
                                variants={cardVariants}
                                whileHover={{ y: -10 }}
                                className="relative group bg-gradient-to-br from-gray-900 to-gray-800 
                border border-gray-800 rounded-2xl p-7
                hover:border-red-500 hover:shadow-2xl hover:shadow-red-500/10
                transition-all duration-300"
                            >
                                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-500 bg-red-600/5 blur-xl" />

                                <motion.div
                                    whileHover={{ rotate: 8, scale: 1.1 }}
                                    transition={{ type: "spring", stiffness: 250 }}
                                    className="relative w-12 h-12 flex items-center justify-center 
                  bg-red-600/20 rounded-lg mb-6"
                                >
                                    <Icon size={22} className="text-red-500" />
                                </motion.div>

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
                                            <CheckCircle size={14} className="text-red-500 mt-1" />
                                            {point}
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
}
