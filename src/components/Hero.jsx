import React from 'react'
import Button from './Button'
import { motion } from "framer-motion";
import { Phone, ShieldCheck, Wrench } from 'lucide-react'

const Hero = ({ services, classNames, }) => {
    return (
        <section className="relative overflow-hidden">
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(80%_80%_at_50%_0%,rgba(15,23,42,0.08),rgba(255,255,255,0))]" />
            <div className="max-w-7xl mx-auto px-4 py-16 lg:py-24 grid lg:grid-cols-2 gap-10 items-center">
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                    <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900">
                        High‑Quality Services at Home & Industrial Solutions
                    </h1>
                    <p className="mt-4 text-lg text-slate-600 max-w-2xl">
                        Book reliable, standardized services — AC, RO & Water Treatment, Lifts, Solar, Power Systems and more —
                        delivered by certified professionals at your convenience.
                    </p>
                    <div className="mt-6 flex flex-wrap gap-3">
                        <a href="tel:+919884927676"><Button className="rounded-2xl">Call Now</Button></a>
                        <a href="#services"><Button variant="outline" className="rounded-2xl">Explore Services</Button></a>
                    </div>
                    <div className="mt-6 flex items-center gap-4 text-sm text-slate-600">
                        <div className="flex items-center gap-2"><ShieldCheck className="w-4 h-4" /> Trained & Insured</div>
                        <div className="flex items-center gap-2"><Wrench className="w-4 h-4" /> Standardized SOPs</div>
                        <div className="flex items-center gap-2"><Phone className="w-4 h-4" /> Quick Support</div>
                    </div>
                </motion.div>
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>
                    <div className="relative bg-white rounded-3xl p-4 md:p-6 shadow-xl ring-1 ring-slate-200">
                        <div className="grid grid-cols-2 gap-4">
                            {services.slice(0, 6).map((s, idx) => (
                                <div key={s.title} className={classNames("rounded-2xl p-4 ring-1 ring-slate-200", idx % 2 === 0 ? "bg-red-50" : "bg-white")}>
                                    <s.icon className="w-6 h-6" />
                                    <div className="mt-2 font-semibold text-slate-900 text-sm">{s.title}</div>
                                    <div className="text-xs text-slate-600 line-clamp-3">{s.short}</div>
                                </div>
                            ))}
                        </div>
                        <div className="mt-4 text-xs text-slate-500">and more…</div>
                    </div>
                </motion.div>
            </div>
        </section>

    )
}

export default Hero
