// src/components/InActionVideos.jsx
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { VIDEO_CLIPS } from "@/constants/branding";

const INTERVAL_MS = 3500;

const clips = [
    { id: "v1", title: "Bottle Production – Clip 1", caption: "Live walk-through of the bottle unit.", type: "file", src: VIDEO_CLIPS.Bottle, poster: "/images/fallback-bottle.jpg" },
    { id: "v2", title: "Bottle Production – Clip 2", caption: "Process and maintenance flow.", type: "file", src: VIDEO_CLIPS.Bottle1, poster: "/images/fallback-bottle2.jpg" },
    { id: "v3", title: "RO Plant – Clip 1", caption: "Daily operational process.", type: "file", src: VIDEO_CLIPS.Ro_Plant, poster: "/images/fallback-ro1.jpg" },
    { id: "v4", title: "RO Plant – Clip 2", caption: "Inside the working chamber.", type: "file", src: VIDEO_CLIPS.Ro_Plant1, poster: "/images/fallback-ro2.jpg" },
    { id: "v5", title: "RO Plant – Clip 3", caption: "Full plant overview.", type: "file", src: VIDEO_CLIPS.Ro_Plant2, poster: "/images/fallback-ro3.jpg" },
];

export default function InActionVideos() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const [openClip, setOpenClip] = useState(null);
    const [isTouchDevice, setIsTouchDevice] = useState(false);
    const containerRef = useRef(null);
    const itemRefs = useRef([]);

    // keep refs fresh
    itemRefs.current = [];
    const pushRef = (el) => { if (el) itemRefs.current.push(el); };

    // detect touch devices to disable autoplay previews
    useEffect(() => {
        const touch = typeof window !== "undefined" && (("ontouchstart" in window) || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0);
        setIsTouchDevice(!!touch);
    }, []);

    // auto-advance
    useEffect(() => {
        if (isPaused || clips.length === 0) return;
        const id = setInterval(() => setActiveIndex((p) => (p + 1) % clips.length), INTERVAL_MS);
        return () => clearInterval(id);
    }, [isPaused]);

    // smooth center scrolling when active index changes
    useEffect(() => {
        const el = itemRefs.current[activeIndex];
        if (!el || !containerRef.current) return;
        const containerRect = containerRef.current.getBoundingClientRect();
        const elRect = el.getBoundingClientRect();
        const currentScroll = containerRef.current.scrollLeft;
        const target = currentScroll + (elRect.left - containerRect.left) - (containerRect.width - elRect.width) / 2;
        containerRef.current.scrollTo({ left: target, behavior: "smooth" });
    }, [activeIndex]);

    // pause on hover (desktop)
    const handleMouseEnter = () => setIsPaused(true);
    const handleMouseLeave = () => setIsPaused(false);

    // open / close modal
    const handleOpen = (clip) => { setOpenClip(clip); setIsPaused(true); };
    const handleClose = () => { setOpenClip(null); setIsPaused(false); };

    // escape to close
    useEffect(() => {
        const onKey = (e) => { if (e.key === "Escape") handleClose(); };
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, []);

    // small helper to render preview (video on desktop, poster on touch devices)
    const Preview = ({ clip }) => {
        if (clip.type === "file") {
            if (isTouchDevice) {
                // show poster image on touch devices (economy)
                return (
                    <img
                        src={clip.poster || "/images/fallback-video.jpg"}
                        alt={clip.title}
                        className="w-full h-full object-cover rounded-lg"
                        loading="lazy"
                    />
                );
            }

            // desktop: autoplay muted preview, but preload metadata only
            return (
                <video
                    className="w-full h-full object-cover"
                    muted
                    autoPlay
                    playsInline
                    loop
                    preload="metadata"
                    poster={clip.poster}
                    onError={(e) => {
                        console.error("Video failed to load:", clip.src, e);
                        // gracefully hide video if it fails (poster fallback will be visible)
                        e.currentTarget.style.display = "none";
                    }}
                >
                    <source src={clip.src} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            );
        }

        // youtube or external
        return (
            <iframe
                className="w-full h-full"
                src={clip.src}
                title={clip.title}
                allow="autoplay; encrypted-media; picture-in-picture"
            />
        );
    };

    return (
        <section id="videos" className="py-12 lg:py-20 bg-gradient-to-b from-red-50 to-white">
            <div className="max-w-7xl mx-auto px-4">
                <div className="max-w-3xl mx-auto text-center">
                    <motion.h2 initial={{ opacity: 0, y: -10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900">
                        In Action
                    </motion.h2>
                    <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="mt-3 text-lg text-slate-600">
                        Short walkthroughs & live footage hover to pause, click to watch.
                    </motion.p>
                </div>

                {/* Container */}
                <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="mt-10">
                    {/* horizontal snapped row on md+, stacked cards (centered) on small screens */}
                    <div
                        ref={containerRef}
                        className="flex gap-6 overflow-x-auto no-scrollbar py-6 px-2 snap-x snap-mandatory scroll-smooth md:flex-row sm:flex-row"
                        style={{ WebkitOverflowScrolling: "touch" }}
                    >
                        {clips.map((clip, idx) => (
                            <article
                                key={clip.id}
                                ref={pushRef}
                                className="snap-center flex-none w-[88%] sm:w-[72%] md:w-[420px] lg:w-[520px] relative rounded-2xl overflow-hidden bg-white ring-1 ring-slate-200 shadow-md hover:shadow-2xl transition-transform duration-300 transform-gpu hover:-translate-y-1"
                                aria-labelledby={`clip-${clip.id}-title`}
                            >
                                {/* clickable preview */}
                                <button
                                    onClick={() => handleOpen(clip)}
                                    className="block w-full h-56 sm:h-64 md:h-72 lg:h-80 focus:outline-none"
                                    aria-label={`Play ${clip.title}`}
                                >
                                    <div className="w-full h-full bg-slate-50 relative">
                                        <Preview clip={clip} />

                                        {/* centralized translucent play button */}
                                        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                            <div className="pointer-events-none bg-white/85 dark:bg-black/50 rounded-full p-3 drop-shadow-md">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-slate-900" viewBox="0 0 24 24" fill="currentColor">
                                                    <path d="M8 5v14l11-7z" />
                                                </svg>
                                            </div>
                                        </div>

                                        {/* subtle top-right miniature play affordance */}
                                        <div className="absolute top-3 right-3">
                                            <div className="bg-white/90 text-slate-900 rounded-full p-2 shadow">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                                                    <path d="M6.5 5.5v9l7-4.5-7-4.5z" />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                </button>

                                {/* caption area (glass look) */}
                                <div className="absolute left-4 right-4 bottom-4">
                                    <div className="bg-white/70 backdrop-blur rounded-md px-3 py-2 shadow-sm">
                                        <h3 id={`clip-${clip.id}-title`} className="text-sm md:text-base font-semibold text-slate-900 truncate">{clip.title}</h3>
                                        {clip.caption && <p className="text-xs md:text-sm text-slate-700 mt-1 truncate">{clip.caption}</p>}
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>

                    {/* pager */}
                    <div className="mt-6 flex items-center justify-center gap-3">
                        {clips.map((c, i) => (
                            <button
                                key={c.id}
                                onClick={() => { setActiveIndex(i); setIsPaused(false); }}
                                className={`w-2.5 h-2.5 rounded-full transition-transform ${i === activeIndex ? "bg-slate-900 scale-125" : "bg-slate-300"}`}
                                aria-label={`Go to clip ${i + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>

            {/* Modal */}
            {openClip && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4" role="dialog" aria-modal="true" onClick={handleClose}>
                    <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" aria-hidden="true" />
                    <div className="relative z-10 w-full max-w-5xl mx-auto rounded-xl overflow-hidden shadow-2xl bg-black" onClick={(e) => e.stopPropagation()}>
                        <button onClick={handleClose} aria-label="Close" className="absolute top-4 right-4 z-20 bg-white/90 rounded-full p-2 shadow">
                            ✕
                        </button>

                        <div className="w-full aspect-video bg-black">
                            {openClip.type === "file" ? (
                                <video src={openClip.src} controls autoPlay className="w-full h-full object-contain bg-black" />
                            ) : (
                                <iframe className="w-full h-full" src={openClip.src} title={openClip.title} allow="autoplay; encrypted-media; picture-in-picture" allowFullScreen />
                            )}
                        </div>

                        <div className="p-4 bg-white">
                            <h3 className="text-lg font-semibold text-slate-900">{openClip.title}</h3>
                            {openClip.caption && <p className="text-sm text-slate-600 mt-1">{openClip.caption}</p>}
                        </div>
                    </div>
                </div>
            )}

            {/* small helper style to hide scrollbar on most browsers */}
            <style jsx>{`
        .no-scrollbar {
          -ms-overflow-style: none; /* IE and Edge */
          scrollbar-width: none; /* Firefox */
        }
        .no-scrollbar::-webkit-scrollbar {
          display: none; /* Chrome, Safari, Opera */
        }
      `}</style>
        </section>
    );
}
