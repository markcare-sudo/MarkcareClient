import React from "react";
import { motion } from "framer-motion";
import {
    Globe,
    Users,
    Shield,
    CheckCircle,
    Clock,
    Play,
} from "lucide-react";


export default function AboutUs() {

    const stats = [
        { label: "Cities served", value: "15", icon: Globe },
        { label: "Years of experience", value: "12+", icon: Clock },
        { label: "Service partners", value: "300+", icon: Users },
        { label: "Happy customers", value: "50k+", icon: CheckCircle },
    ];

    const services = [
        {
            title: "AC Services",
            desc:
                "Comprehensive residential & commercial AC repair, maintenance and installation with certified technicians and transparent pricing.",
            icon: Shield,
        },
        {
            title: "RO & Water Treatment",
            desc:
                "Design, installation and servicing of RO plants and full-spectrum water treatment & wastewater solutions (WTP/ETP/STP).",
            icon: Users,
        },
        {
            title: "Lifts & Escalators",
            desc:
                "End-to-end lift & escalator installation, modernization, preventive maintenance and AMC services for buildings and industries.",
            icon: Globe,
        },
        {
            title: "Solar & Power",
            desc:
                "Solar system design, installation, inverter & generator services, battery replacement and performance optimization.",
            icon: Globe,
        },
        {
            title: "ETP / STP Services",
            desc:
                "Turnkey effluent & sewage treatment plant projects, retrofits, compliance upgrades and operation support.",
            icon: Globe,
        },
        {
            title: "Chemical Washing",
            desc:
                "Specialized chemical cleaning for HVAC, RO membranes, cooling towers and industrial equipment to restore efficiency.",
            icon: Globe,
        },
    ];

    return (
        <section id="about" className="bg-white text-gray-900">
            <div className="mx-auto max-w-7xl px-4 py-16 sm:py-24">
                {/* Header / Hero */}
                <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
                    <div>
                        <span className="inline-flex items-center gap-2 rounded-full bg-[#FFF0F0] px-3 py-1 text-xs font-medium text-[#E53935]">
                            About MarkCare
                        </span>
                        <h2 className="mt-6 text-3xl font-semibold leading-tight sm:text-4xl">
                            Technology-powered services at home — trusted across cities
                        </h2>
                        <p className="mt-4 max-w-xl text-gray-600">
                            MarkCare is a technology platform enabling reliable, standardised home and industrial
                            services. From AC repair to RO plants, lifts, solar systems and wastewater treatment — we
                            enable service partners with training, tools, and technology so customers receive a
                            consistent experience every time.
                        </p>

                        <div className="mt-6 flex flex-wrap gap-3">
                            <a
                                href="#contact"
                                className="inline-flex items-center gap-2 rounded-full bg-[#E53935] px-4 py-2 text-sm font-semibold text-white shadow hover:bg-[#C62828]"
                            >
                                Get a Service
                            </a>
                            <a
                                href="/services"
                                className="inline-flex items-center gap-2 rounded-full border border-gray-200 px-4 py-2 text-sm font-semibold text-gray-800"
                            >
                                View All Services
                            </a>
                        </div>

                        {/* Stats */}
                        <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
                            {stats.map((s, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 8 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    className="rounded-lg border border-gray-100 bg-gray-50 p-4 text-center"
                                >
                                    <s.icon className="mx-auto h-6 w-6 text-[#E53935]" />
                                    <div className="mt-2 text-xl font-semibold">{s.value}</div>
                                    <div className="mt-1 text-sm text-gray-600">{s.label}</div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Media card: image + video */}
                    <div className="relative">
                        <div className="aspect-[16/11] w-full overflow-hidden rounded-2xl border border-gray-100 shadow">
                            {/* Background hero image (replace with local path or imported image) */}
                            <img
                                src="/assets/about-hero.jpg"
                                alt="MarkCare technicians at work"
                                className="h-full w-full object-cover"
                            />
                            {/* Play button overlay for video */}
                            <a
                                href="/assets/markcare-overview.mp4"
                                className="absolute inset-0 grid place-items-center bg-black/30 opacity-0 transition hover:opacity-100"
                            >
                                <div className="inline-flex items-center gap-3 rounded-full bg-white/90 px-4 py-2 shadow">
                                    <Play className="h-5 w-5 text-[#E53935]" />
                                    <span className="text-sm font-semibold text-gray-900">Watch Overview</span>
                                </div>
                            </a>
                        </div>

                        {/* small gallery */}
                        <div className="mt-4 grid grid-cols-3 gap-3">
                            <img src="/assets/service-ac.jpg" alt="AC service" className="h-20 w-full rounded-md object-cover" />
                            <img src="/assets/service-ro.jpg" alt="RO plant" className="h-20 w-full rounded-md object-cover" />
                            <img src="/assets/service-solar.jpg" alt="Solar install" className="h-20 w-full rounded-md object-cover" />
                        </div>
                    </div>
                </div>

                {/* Mission, Vision, Values */}
                <div className="mt-12 grid gap-8 md:grid-cols-3">
                    <motion.div initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} className="rounded-2xl border border-gray-100 p-6">
                        <h4 className="text-lg font-semibold">Our Vision</h4>
                        <p className="mt-2 text-sm text-gray-600">Empower millions of professionals worldwide to deliver services at home like never experienced before.</p>
                    </motion.div>

                    <motion.div initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} className="rounded-2xl border border-gray-100 p-6">
                        <h4 className="text-lg font-semibold">Our Mission</h4>
                        <p className="mt-2 text-sm text-gray-600">Deliver standardised, high-quality home and industrial services through technology, training, and trusted partnerships — ensuring on-time, reliable experiences for customers.</p>
                    </motion.div>

                    <motion.div initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} className="rounded-2xl border border-gray-100 p-6">
                        <h4 className="text-lg font-semibold">Core Values</h4>
                        <ul className="mt-2 space-y-2 text-sm text-gray-600">
                            <li>Customer-first — reliability & trust</li>
                            <li>Quality — certified partners & training</li>
                            <li>Safety — compliance & insurance-backed work</li>
                            <li>Sustainability — energy-efficient & green solutions</li>
                        </ul>
                    </motion.div>
                </div>

                {/* Services grid */}
                <div className="mt-12">
                    <h3 className="text-xl font-semibold">Key Services</h3>
                    <p className="mt-2 text-sm text-gray-600 max-w-2xl">A broad range of home and industrial services delivered by trained partners and in-house experts.</p>

                    <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {services.map((s, i) => (
                            <motion.div key={i} initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} className="rounded-2xl border border-gray-100 p-6">
                                <s.icon className="h-6 w-6 text-[#E53935]" />
                                <h4 className="mt-3 text-lg font-semibold">{s.title}</h4>
                                <p className="mt-2 text-sm text-gray-600">{s.desc}</p>
                                <div className="mt-4">
                                    <a href={`/services#${s.title.toLowerCase().replace(/\s+/g, '-')}`} className="text-sm font-semibold text-[#E53935]">Learn more →</a>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Media + Case Studies CTA */}
                <div className="mt-12 grid gap-8 lg:grid-cols-2 lg:items-center">
                    <div>
                        <h3 className="text-xl font-semibold">Case studies & media</h3>
                        <p className="mt-2 text-sm text-gray-600">See how we designed, delivered and maintained large-scale installations — from RO plants to STP/ETP and HVAC projects.</p>

                        <ul className="mt-4 space-y-3 text-sm text-gray-700">
                            <li>• Turnkey RO plant for industrial client — reduced TDS to safe levels and cut costs.</li>
                            <li>• STP retrofit for commercial complex — increased capacity and lowered energy use.</li>
                            <li>• Solar microgrid installation with battery backup for a manufacturing site.</li>
                        </ul>

                        <div className="mt-6 flex gap-3">
                            <a href="/case-studies" className="inline-flex items-center gap-2 rounded-full border border-gray-200 px-4 py-2 text-sm font-semibold">View Case Studies</a>
                            <a href="/media" className="inline-flex items-center gap-2 rounded-full bg-[#E53935] px-4 py-2 text-sm font-semibold text-white">Watch Videos</a>
                        </div>
                    </div>

                    <div className="space-y-3">
                        <div className="rounded-2xl border border-gray-100 p-4">
                            <h4 className="text-sm font-semibold">Project highlight — Lift modernization</h4>
                            <p className="mt-2 text-sm text-gray-600">Modernized 8 lifts across a residential complex, introduced new controllers and safety checks, and provided 24/7 AMC support.</p>
                        </div>

                        <div className="rounded-2xl border border-gray-100 p-4">
                            <h4 className="text-sm font-semibold">Project highlight — ETP upgrade</h4>
                            <p className="mt-2 text-sm text-gray-600">Upgraded an effluent treatment plant to improve discharge quality and reduced operating costs by 18%.</p>
                        </div>
                    </div>
                </div>

                {/* Team + Contact CTA */}
                <div className="mt-12 rounded-2xl border border-gray-100 bg-gray-50 p-6">
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                        <div>
                            <h3 className="text-lg font-semibold">Work with MarkCare</h3>
                            <p className="mt-1 text-sm text-gray-600">Interested in partnering, hiring, or requesting a case-study? We’d love to hear from you.</p>
                        </div>
                        <div className="flex gap-3">
                            <a href="/contact" className="inline-flex items-center gap-2 rounded-full bg-[#E53935] px-4 py-2 text-sm font-semibold text-white">Contact Us</a>
                            <a href="/careers" className="inline-flex items-center gap-2 rounded-full border border-gray-200 px-4 py-2 text-sm font-semibold">Join Our Team</a>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
