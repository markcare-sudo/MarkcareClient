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

export default function Videos() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [openClip, setOpenClip] = useState(null);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  const containerRef = useRef(null);
  const itemRefs = useRef([]);

  itemRefs.current = [];
  const pushRef = (el) => el && itemRefs.current.push(el);

  /* Detect touch devices */
  useEffect(() => {
    const touch =
      typeof window !== "undefined" &&
      ("ontouchstart" in window ||
        navigator.maxTouchPoints > 0 ||
        navigator.msMaxTouchPoints > 0);
    setIsTouchDevice(Boolean(touch));
  }, []);

  /* Auto advance */
  useEffect(() => {
    if (isPaused || !clips.length) return;
    const id = setInterval(
      () => setActiveIndex((p) => (p + 1) % clips.length),
      INTERVAL_MS
    );
    return () => clearInterval(id);
  }, [isPaused]);

  /* Center active item */
  useEffect(() => {
    const el = itemRefs.current[activeIndex];
    if (!el || !containerRef.current) return;

    const container = containerRef.current;
    const containerRect = container.getBoundingClientRect();
    const elRect = el.getBoundingClientRect();

    const target =
      container.scrollLeft +
      (elRect.left - containerRect.left) -
      (containerRect.width - elRect.width) / 2;

    container.scrollTo({ left: target, behavior: "smooth" });
  }, [activeIndex]);

  /* Keyboard escape */
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && handleClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const handleOpen = (clip) => {
    setOpenClip(clip);
    setIsPaused(true);
  };

  const handleClose = () => {
    setOpenClip(null);
    setIsPaused(false);
  };

  const Preview = ({ clip }) => {
    if (clip.type === "file") {
      if (isTouchDevice) {
        return (
          <img
            src={clip.poster || "/images/fallback-video.jpg"}
            alt={clip.title}
            className="w-full h-full object-cover rounded-lg"
            loading="lazy"
          />
        );
      }

      return (
        <video
          className="w-full h-full object-cover"
          muted
          autoPlay
          playsInline
          loop
          preload="metadata"
          poster={clip.poster}
        >
          <source src={clip.src} type="video/mp4" />
        </video>
      );
    }

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
    <section
      id="videos"
      className="py-12 lg:py-20 bg-gradient-to-b from-red-50 to-white"
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-extrabold text-slate-900"
          >
            In Action
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-3 text-lg text-slate-600"
          >
            Short walkthroughs & live footage — hover to pause, click to watch.
          </motion.p>
        </div>

        <div
          className="mt-10"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div
            ref={containerRef}
            className="flex gap-6 overflow-x-auto py-6 px-2 snap-x snap-mandatory scroll-smooth no-scrollbar"
          >
            {clips.map((clip) => (
              <article
                key={clip.id}
                ref={pushRef}
                className="snap-center flex-none w-[88%] sm:w-[72%] md:w-[420px] lg:w-[520px] rounded-2xl overflow-hidden bg-white ring-1 ring-slate-200 shadow-md hover:shadow-2xl transition-transform hover:-translate-y-1"
              >
                <button
                  onClick={() => handleOpen(clip)}
                  className="block w-full h-56 sm:h-64 md:h-72 lg:h-80"
                >
                  <Preview clip={clip} />
                </button>
              </article>
            ))}
          </div>
        </div>
      </div>

      {/* Modal */}
      {openClip && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          onClick={handleClose}
        >
          <div className="absolute inset-0 bg-black/60" />
          <div
            className="relative z-10 w-full max-w-5xl bg-black rounded-xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <video
              src={openClip.src}
              controls
              autoPlay
              className="w-full aspect-video"
            />
          </div>
        </div>
      )}
    </section>
  );
}
