// WorkShowcase.jsx
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function WorkShowcase() {
    const images = [
        { src: "/assets/Images/Markcare16.jpg", alt: "MarkCare project 1" },
        { src: "/assets/Images/Markcare18.jpg", alt: "MarkCare project 2" },
        { src: "/assets/Images/Markcare20.jpg", alt: "MarkCare project 3" },
        { src: "/assets/Images/Markcare21.jpg", alt: "MarkCare project 4" },
        { src: "/assets/Images/Markcare22.jpg", alt: "MarkCare project 5" },
        { src: "/assets/Images/Markcare10.jpg", alt: "MarkCare project 6" },
    ];

    const [selected, setSelected] = useState(null);

    const open = (index) => setSelected(index);
    const close = () => setSelected(null);
    const prev = () =>
        setSelected((s) =>
            s === null ? images.length - 1 : (s - 1 + images.length) % images.length
        );
    const next = () =>
        setSelected((s) => (s === null ? 0 : (s + 1) % images.length));

    return (
        <section id="gallery" className="py-16 lg:py-28 bg-gradient-to-b from-white to-slate-50">
            <div className="max-w-7xl mx-auto px-4">
                <div className="max-w-3xl">
                    <motion.h2
                        initial={{ opacity: 0, y: -8 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900"
                    >
                        Work Showcase
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.15, duration: 0.6 }}
                        className="mt-4 text-lg text-slate-600"
                    >
                        A curated glimpse of our on site installs, product handovers and digital projects designed,
                        developed and delivered with care. Click any image to view details.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.25, duration: 0.6 }}
                        className="mt-6 flex items-center gap-3"
                    >
                      <span className="text-sm text-slate-500">— long-term support & reasonable pricing</span>
                    </motion.div>
                </div>

                <div className="mt-10 grid grid-cols-2 md:grid-cols-3 gap-4">
                    {images.map((img, i) => (
                        <motion.button
                            key={img.src}
                            onClick={() => open(i)}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            initial={{ opacity: 0, y: 12 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.45, delay: i * 0.05 }}
                            className="group relative overflow-hidden rounded-2xl ring-1 ring-slate-200 focus:outline-none focus:ring-4 focus:ring-slate-100"
                            aria-label={`Open ${img.alt}`}
                        >
                            <img
                                src={img.src}
                                alt={img.alt}
                                className="h-44 md:h-56 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                                loading="lazy"
                            />

                            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                            <div className="absolute left-3 bottom-3 text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 drop-shadow">
                                View Project
                            </div>
                        </motion.button>
                    ))}
                </div>
            </div>

            <AnimatePresence>
                {selected !== null && (
                    <motion.div
                        key="backdrop"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="fixed inset-0 z-50 grid place-items-center bg-black/60 p-6"
                        onClick={close}
                        aria-modal="true"
                        role="dialog"
                    >
                        <motion.div
                            initial={{ scale: 0.95, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.95, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="max-w-4xl w-full rounded-2xl bg-white overflow-hidden shadow-2xl"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="relative">
                                <img
                                    src={images[selected].src}
                                    alt={images[selected].alt}
                                    className="w-full h-[60vh] md:h-[70vh] object-contain bg-slate-50"
                                />

                                <button
                                    onClick={close}
                                    className="absolute top-4 right-4 z-20 rounded-full bg-white/90 p-2 shadow focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-300"
                                    aria-label="Close"
                                >
                                    ✕
                                </button>

                                <button
                                    onClick={prev}
                                    className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-white/90 p-2 shadow focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-300"
                                    aria-label="Previous"
                                >
                                    ‹
                                </button>

                                <button
                                    onClick={next}
                                    className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-white/90 p-2 shadow focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-300"
                                    aria-label="Next"
                                >
                                    ›
                                </button>
                            </div>

                            <div className="p-4 border-t">
                                <div className="flex items-center justify-between">
                                    <div className="text-sm text-slate-700 font-medium">{images[selected].alt}</div>
                                    <div className="text-sm text-slate-500">{selected + 1} / {images.length}</div>
                                </div>

                                <p className="mt-2 text-sm text-slate-600">Detailed notes about the install, technologies used and outcome can go here. Add a short description for each project to help visitors understand impact.</p>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
