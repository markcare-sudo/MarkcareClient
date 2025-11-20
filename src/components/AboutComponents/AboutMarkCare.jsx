import { motion } from "framer-motion";
import { Play } from "lucide-react";

export const AboutMarkCare = ({stats}) => {
    return (
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
    );
}