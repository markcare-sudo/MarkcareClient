import { motion } from 'framer-motion';
import { Shield } from 'lucide-react';
import { Link } from 'react-router-dom';    

export const DeepDive = ({ title, description, imageUrl, reverse }) => {
    return (
        <div className="mt-14 grid gap-8 lg:grid-cols-2">
            <motion.div
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                className="relative overflow-hidden rounded-2xl border border-slate-100 bg-white/90 p-6 shadow-sm backdrop-blur-sm"
            >
                <div className="pointer-events-none absolute -right-8 -top-8 h-40 w-40 rounded-full bg-[#FFE7E6]" />
                <div className="relative">
                    <h3 className="text-lg font-semibold text-slate-900">
                        Our Process
                    </h3>
                    <p className="mt-2 text-sm text-slate-600">
                        A structured, transparent workflow from first call to final
                        handover.
                    </p>

                    <ol className="mt-4 list-decimal space-y-3 pl-5 text-sm text-slate-700">
                        <li>
                            <strong>Site survey &amp; diagnostics:</strong> Detailed
                            assessment with photos, baseline readings and risk checks.
                        </li>
                        <li>
                            <strong>Design &amp; proposal:</strong> Clear scope, BOQ,
                            drawings, timeline and commercial terms.
                        </li>
                        <li>
                            <strong>Execution &amp; commissioning:</strong> Certified
                            technicians, safety supervision and performance validation.
                        </li>
                        <li>
                            <strong>Handover &amp; training:</strong> Operation manuals,
                            staff training and digital documentation.
                        </li>
                        <li>
                            <strong>Ongoing support:</strong> AMC, remote monitoring,
                            spares and SLA-backed service.
                        </li>
                    </ol>

                    <div className="mt-6 flex flex-wrap gap-3">
                        <Link
                            to="/contact-us"
                            className="inline-flex items-center gap-2 rounded-full bg-[#E53935] px-4 py-2 text-sm font-semibold text-white shadow-md shadow-[#E53935]/30 transition hover:bg-[#c92f2b]"
                        >
                            Request a site survey
                        </Link>
                    </div>
                </div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                className="rounded-2xl border border-slate-100 bg-white/90 p-6 shadow-sm backdrop-blur-sm"
            >
                <h3 className="text-lg font-semibold text-slate-900">
                    Safety, Warranties &amp; Quality
                </h3>
                <p className="mt-3 text-sm text-slate-700">
                    We follow strict safety protocols, use OEM-approved spares and
                    provide written warranties for installations as per manufacturer
                    terms. For chemical and large-scale projects, our teams adhere to
                    hazardous-material handling and disposal regulations.
                </p>

                <div className="mt-4 grid grid-cols-2 gap-3">
                    <div className="rounded-lg border border-slate-100 bg-slate-50/80 p-3 text-sm">
                        <div className="flex items-center gap-2">
                            <Shield className="h-4 w-4 text-[#E53935]" />
                            <strong className="text-slate-900">
                                Insurance-backed work
                            </strong>
                        </div>
                        <div className="mt-2 text-xs text-slate-600">
                            Liability coverage for on-site work and workforce safety.
                        </div>
                    </div>

                    <div className="rounded-lg border border-slate-100 bg-slate-50/80 p-3 text-sm">
                        <div className="flex items-center gap-2">
                            <Shield className="h-4 w-4 text-[#E53935]" />
                            <strong className="text-slate-900">Guaranteed SLAs</strong>
                        </div>
                        <div className="mt-2 text-xs text-slate-600">
                            Defined response and resolution times for AMC clients.
                        </div>
                    </div>
                </div>

                <div className="mt-6">
                    <h4 className="text-sm font-semibold text-slate-900">
                        Typical project budgets
                    </h4>
                    <p className="mt-2 text-sm text-slate-700">
                        Budgets vary by scope; indicative ranges:
                    </p>
                    <ul className="mt-2 list-disc pl-5 text-sm text-slate-700">
                        <li>Residential AC servicing: ₹500 – ₹2,500 (per service)</li>
                        <li>Rooftop solar (3–10 kW): ₹1.5L – ₹6L</li>
                        <li>Small RO system (5–20 m³/day): ₹1L – ₹5L</li>
                        <li>STP/ETP (per MLD): quoted after site assessment</li>
                    </ul>
                </div>
            </motion.div>
        </div>
    );
}