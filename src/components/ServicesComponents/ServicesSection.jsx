import { motion } from "framer-motion";
import { Shield } from "lucide-react";
import { Link } from "react-router-dom";

export const ServicesSection = ({services, cardVariants}) => {
    return (
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s, index) => (
                <motion.article
                    key={s.key}
                    custom={index}
                    variants={cardVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-80px' }}
                    className="group relative flex h-full flex-col rounded-2xl border border-slate-100 bg-white/90 p-6 shadow-sm backdrop-blur-sm transition-all hover:-translate-y-1.5 hover:border-[#E53935]/60 hover:shadow-xl"
                >
                    {/* Accent gradient border on hover */}
                    <div className="pointer-events-none absolute inset-x-0 top-0 h-1 rounded-t-2xl bg-gradient-to-r from-[#E53935] via-[#FF7043] to-[#E53935] opacity-0 transition-opacity group-hover:opacity-100" />

                    {/* Icon / badge row */}
                    <div className="flex items-start gap-4">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#FFF0EE] text-[#E53935] shadow-sm">
                            <Shield className="h-5 w-5" />
                        </div>

                        <div>
                            <h3 className="text-base font-semibold text-slate-900 sm:text-lg">
                                {s.name}
                            </h3>
                            <p className="mt-0.5 text-xs font-medium uppercase tracking-wide text-slate-500">
                                {s.category}
                            </p>
                            {s.badge && (
                                <p className="mt-1 inline-flex rounded-full bg-slate-50 px-2.5 py-1 text-[11px] font-medium text-slate-600 ring-1 ring-slate-100">
                                    {s.badge}
                                </p>
                            )}
                        </div>
                    </div>

                    {/* Short description */}
                    <p className="mt-4 flex-1 text-sm text-slate-600">
                        {s.shortDescription}
                    </p>

                    {/* Card footer / CTA pinned to bottom */}
                    <div className="mt-5 flex items-center justify-between">
                        <Link
                            to={`/services/${s.slug}`}
                            className="inline-flex items-center text-sm font-semibold text-[#E53935] transition-colors hover:text-[#b82a28]"
                        >
                            View service details
                            <span className="ml-1 transition-transform group-hover:translate-x-0.5">
                                →
                            </span>
                        </Link>
                    </div>
                </motion.article>
            ))}
        </div>
    );
}