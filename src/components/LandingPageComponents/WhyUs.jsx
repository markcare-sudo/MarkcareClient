import React from "react";
import { ShieldCheck, CheckCircle2, BadgeCheck, Factory } from "lucide-react";

const WhyUs = ({ installs, citiesCount }) => {
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
            text: "From site survey to commissioning, AMC & retrofits.",
            icon: CheckCircle2,
        },
    ];

    return (
        <section id="why-us" className="py-20 lg:py-28 bg-gradient-to-b from-red-50 to-white">
            <div className="max-w-7xl mx-auto px-4">

                {/* Header */}
                <div className="max-w-2xl">
                    <h2 className="text-4xl font-extrabold tracking-tight text-slate-900">
                        Why Choose Us
                    </h2>
                    <p className="mt-3 text-slate-600 text-lg">
                        Built on trust, measurable quality standards, and reliability — backed by
                        transparent pricing, certified teams, and responsive support.
                    </p>
                </div>

                {/* Feature Cards */}
                <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {features.map((f, index) => (
                        <div
                            key={f.title}
                            className="group relative rounded-3xl p-6 bg-white/60 backdrop-blur-xl ring-1 ring-slate-200 shadow-sm
              hover:shadow-xl hover:bg-white transition-all duration-300"
                        >
                            <div
                                className="w-12 h-12 rounded-xl bg-red-100 grid place-items-center 
                group-hover:scale-110 transition"
                            >
                                <f.icon className="w-6 h-6 text-red-700" />
                            </div>

                            <div className="mt-4 text-xl font-semibold text-slate-900">{f.title}</div>
                            <p className="mt-2 text-slate-600 text-sm leading-relaxed">{f.text}</p>

                            {/* glow on hover */}
                            <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-10 bg-red-300 transition"></div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Stats */}
            <div className="max-w-7xl mx-auto px-4 mt-14">
                <div className="grid gap-6 sm:grid-cols-3">
                    {[
                        { value: `${installs}+`, label: "Successful Installs" },
                        { value: citiesCount, label: "Cities Covered" },
                        { value: "24x7", label: "Support" },
                    ].map((stat, i) => (
                        <div
                            key={i}
                            className="rounded-3xl bg-white/70 backdrop-blur-xl p-8 text-center ring-1 ring-slate-200 shadow-sm
              hover:shadow-xl hover:bg-white transition-all duration-300"
                        >
                            <div className="text-4xl font-extrabold text-red-700">{stat.value}</div>
                            <div className="text-sm text-slate-600 mt-1">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyUs;
