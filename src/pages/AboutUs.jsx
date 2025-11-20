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
import { AboutMarkCare } from "@/components/AboutComponents/AboutMarkCare";
import { VisionAndMission } from "@/components/AboutComponents/VisionAndMission";
import { CTA } from "@/components/AboutComponents/CTA";


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
            <div className="mx-auto max-w-7xl px-4 py-10">
                {/* Header / Hero */}
                <AboutMarkCare stats={stats} />

                <VisionAndMission />

                {/* Services grid */}
                {/* <div className="mt-12">
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
                </div> */}

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
                {/* <div className="mt-12 rounded-2xl border border-gray-100 bg-gray-50 p-6">
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
                </div> */}

                <CTA />

            </div>
        </section>
    );
}







