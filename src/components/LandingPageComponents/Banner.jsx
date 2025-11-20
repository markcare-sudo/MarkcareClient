// import React from "react";
// import { motion } from "framer-motion";
// import { VIDEO_CLIPS } from "@/constants/branding";

// export default function Banner({
//     videoSrc = VIDEO_CLIPS.Bottle1,
//     poster = "/assets/Images/Markcare16.jpg",
//     eyebrow = "ISO-grade SOPs",
//     title = "Mark Care — Reliable Home & Industrial Services",
//     subtitle = `Water Treatment Plants (WTP), AC, RO, ETP, STP, DG, Solar, Lifts and Power Systems. Pan-India engineers — on-time delivery.`,
// }) {
//     return (
//         <section
//             id="banner"
//             className="relative overflow-hidden bg-black"
//             style={{ "--bomco-red": "#C1121F" }}
//         >
//             {/* --- Background Video --- */}
//             <video
//                 className="absolute inset-0 w-full h-full object-cover -z-10"
//                 autoPlay
//                 muted
//                 loop
//                 playsInline
//                 preload="auto"
//                 poster={poster}
//             >
//                 <source src={videoSrc} type="video/mp4" />
//             </video>

//             {/* Dark overlay for contrast */}
//             <div className="absolute inset-0 bg-black/50 -z-10" />

//             {/* Content */}
//             <div className="max-w-6xl mx-auto px-6 py-24 flex items-center min-h-[70vh]">
//                 <motion.div
//                     initial={{ opacity: 0, y: 20 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.6 }}
//                     className="max-w-3xl text-white"
//                 >
//                     <span className="inline-flex items-center gap-3 rounded-full bg-white/10 px-4 py-1.5 text-sm ring-1 ring-white/10">
//                         <span className="h-2 w-2 rounded-full bg-[var(--bomco-red)]" />
//                         {eyebrow}
//                     </span>

//                     <h1 className="mt-6 text-5xl lg:text-6xl font-extrabold leading-tight">
//                         {title}
//                     </h1>

//                     <p className="mt-4 text-lg text-white/90 max-w-2xl leading-relaxed">
//                         {subtitle}
//                     </p>

//                     <div className="mt-8 flex gap-4">
//                         <a href="#services">
//                             <button className="px-6 py-3 rounded-md text-white bg-[var(--bomco-red)] text-lg font-semibold shadow-lg">
//                                 Explore Services
//                             </button>
//                         </a>

//                         <a href="#contact">
//                             <button className="px-6 py-3 rounded-md text-white border border-white/30 text-lg font-semibold backdrop-blur">
//                                 Get Quote
//                             </button>
//                         </a>
//                     </div>
//                 </motion.div>
//             </div>
//         </section>
//     );
// }












import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { VIDEO_CLIPS } from "@/constants/branding";


/* ---------- Small, reusable typewriter ---------- */
function Typewriter({
  text = "",
  speed = 28,          // ms per character
  startDelay = 0,      // ms before starting
  as = "span",
  className = "",
  showCursor = false,  // show a blinking caret while typing
  onDone,
}) {
  const Comp = as;
  const [out, setOut] = useState("");
  const idxRef = useRef(0);
  const timerRef = useRef(null);
  const startRef = useRef(null);

  useEffect(() => {
    // reset on text change
    setOut("");
    idxRef.current = 0;

    startRef.current = setTimeout(() => {
      timerRef.current = setInterval(() => {
        idxRef.current += 1;
        setOut(text.slice(0, idxRef.current));
        if (idxRef.current >= text.length) {
          clearInterval(timerRef.current);
          onDone && onDone();
        }
      }, Math.max(8, speed));
    }, Math.max(0, startDelay));

    return () => {
      clearTimeout(startRef.current);
      clearInterval(timerRef.current);
    };
  }, [text, speed, startDelay, onDone]);

  return (
    <Comp className={className}>
      {out}
      {showCursor && out.length < text.length ? (
        <span className="inline-block w-[0.6ch] -translate-y-[1px] animate-pulse">|</span>
      ) : null}
    </Comp>
  );
}

/* ---------- Slides (sample) ---------- */
const DEFAULT_SLIDES = [
  {
    id: 1,
    title: "End-to-End O&M for",
    emphasis: "Bottle & Water Treatment Plants",
    subtitle:
      "Design, operation, and maintenance of WTP, bottling lines, and process water systems with ISO-grade SOPs and trained engineers.",
    cta: { label: "Schedule Plant Audit", href: "/contact-us" },
    video: VIDEO_CLIPS.Bottle1, // bottle plant / WTP background
    muted: true,
    loop: true,
    controls: false,
  },
  {
    id: 2,
    title: "Safe, Reliable",
    emphasis: "Lift & Elevator Maintenance",
    subtitle:
      "Preventive and breakdown maintenance for residential, commercial, and industrial lifts with strict safety compliance and timely support.",
    cta: { label: "View Lift Services", href: "/services" },
    video: VIDEO_CLIPS.Bottle1, // update to your actual key
    muted: true,
    loop: true,
    controls: false,
  },
  {
    id: 3,
    title: "Uninterrupted Power with",
    emphasis: "Diesel Generators & Backup Systems",
    subtitle:
      "Complete AMC for DG sets, panels, and power distribution systems to minimise downtime and keep your operations running 24/7.",
    cta: { label: "Book DG Maintenance", href: "/contact-us" },
    video: VIDEO_CLIPS.Ro_Plant, // update to your actual key
    muted: true,
    loop: true,
    controls: false,
  },
  {
    id: 4,
    title: "Lower Your Energy Bills With",
    emphasis: "Solar & Hybrid Solutions",
    subtitle:
      "Rooftop solar, hybrid systems, and energy optimisation solutions for factories, complexes, and commercial buildings.",
    cta: { label: "Explore Solar Options", href: "/services" },
    video: VIDEO_CLIPS.Ro_Plant, // update to your actual key
    muted: true,
    loop: true,
    controls: false,
  },
];


export default function HeroCarousel({
  slides = DEFAULT_SLIDES,
  interval = 6000,
  accentClass = "text-orange-500",
}) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  // video refs per slide (plain JS for .jsx)
  const videoRefs = useRef({});

  // when this changes, Typewriter remounts & restarts
  const [typingStartKey, setTypingStartKey] = useState(0);

  const goTo = (i) => setIndex((i + slides.length) % slides.length);
  const next = () => goTo(index + 1);
  const prev = () => goTo(index - 1);

  // preload media once
  useEffect(() => {
    slides.forEach((s) => {
      if (s.video) {
        const v = document.createElement("video");
        v.src = s.video;
        v.muted = true;
        v.playsInline = true;
        v.preload = "auto";
      } else if (s.image) {
        const img = new Image();
        img.src = s.image;
        img.loading = "eager";
      }
    });
  }, [slides]);

  // auto-advance
  useEffect(() => {
    if (paused) return;
    const id = setInterval(next, interval);
    return () => clearInterval(id);
  }, [index, paused, interval]);

  // keyboard nav (optional)
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [index]);

  // on slide change: restart that slide's media; typing will start on onPlay/onLoad
  useEffect(() => {
    const s = slides[index];
    if (s.video) {
      const v = videoRefs.current[s.id];
      if (v) {
        try {
          v.currentTime = 0;
          const p = v.play();
          if (p && typeof p.catch === "function") {
            p.catch(() => {
              // if autoplay blocked (shouldn't happen with muted), start typing anyway
              setTypingStartKey((k) => k + 1);
            });
          }
        } catch {
          setTypingStartKey((k) => k + 1);
        }
      } else {
        // ref not yet attached; don't stall typing
        setTypingStartKey((k) => k + 1);
      }
    } else if (s.image) {
      // start typing soon; image onLoad will also trigger (even if cached)
      const t = setTimeout(() => setTypingStartKey((k) => k + 1), 0);
      return () => clearTimeout(t);
    }
  }, [index, slides]);

  // (optional) pause non-active videos to save CPU
  useEffect(() => {
    const activeId = String(slides[index].id);
    Object.entries(videoRefs.current).forEach(([id, v]) => {
      if (!v) return;
      if (id === activeId) {
        v.play().catch(() => {});
      } else {
        v.pause();
      }
    });
  }, [index, slides]);

  const slide = slides[index];

  // typing timings (sequential: title -> emphasis -> subtitle)
  const t = slide.title || "";
  const e = slide.emphasis || "";
  const titleSpeed = 60;
  const emSpeed = 60;
  const delayTitle = 0;
  const delayEmphasis = delayTitle + t.length * titleSpeed + 120;
  const delaySubtitle = delayEmphasis + e.length * emSpeed + 200;

  return (
    <section
      className="relative isolate w-full overflow-hidden bg-neutral-950"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Media stack */}
      <div className="relative h-[64vh] md:h-[80vh] w-full">
        {/* keep all slides mounted; fade opacity to avoid rebuffering */}
        {slides.map((s, i) => {
          const active = i === index;
          if (s.video) {
            return (
              <motion.video
                key={`vid-${s.id}`}
                ref={(el) => (videoRefs.current[s.id] = el)}
                src={s.video}
                autoPlay
                muted={s.muted ?? true}
                loop={s.loop ?? true}
                playsInline
                preload="auto"
                onPlay={() => {
                  if (i === index) setTypingStartKey((k) => k + 1);
                }}
                className="absolute inset-0 h-full w-full object-cover select-none"
                initial={false}
                animate={{ opacity: active ? 1 : 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              />
            );
          }
          return (
            <motion.img
              key={`img-${s.id}`}
              src={s.image}
              alt=""
              draggable={false}
              loading="eager"
              onLoad={() => {
                if (i === index) setTypingStartKey((k) => k + 1);
              }}
              className="absolute inset-0 h-full w-full object-cover select-none"
              initial={false}
              animate={{ opacity: active ? 1 : 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            />
          );
        })}

        {/* overlays */}
        <div className="pointer-events-none absolute inset-0 bg-black/60" />
        <div className="pointer-events-none absolute right-0 top-0 h-full w-1/2 bg-gradient-to-l from-cyan-400/10 to-transparent" />

        {/* Content */}
        <div className="max-w-7xl mx-auto absolute inset-0 z-10 flex items-center md:items-start md:top-20 justify-start">
          <motion.div
            key={`content-${slide.id}`}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
            className="w-full px-4 sm:px-6 lg:px-8"
          >
            <div className="max-w-2xl">
              <h1 className="text-left text-xl font-bold leading-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
                {/* re-mount these when typingStartKey changes -> starts in sync with media */}
                <Typewriter
                  key={`t-${slide.id}-${typingStartKey}`}
                  text={t + " "}
                  speed={titleSpeed}
                  startDelay={delayTitle}
                />
                <Typewriter
                  key={`e-${slide.id}-${typingStartKey}`}
                  text={e}
                  speed={emSpeed}
                  startDelay={delayEmphasis}
                  className={accentClass}
                />
              </h1>

              {slide.subtitle ? (
                <Typewriter
                  key={`s-${slide.id}-${typingStartKey}`}
                  as="p"
                  className="mt-4 max-w-xl text-left text-sm text-neutral-300 sm:text-base md:text-lg"
                  text={slide.subtitle}
                  speed={20}
                  startDelay={delaySubtitle}
                  showCursor
                />
              ) : null}

              {slide.cta && (
                <div className="mt-6">
                  <Link
                    to={slide.cta.href}
                    className="pointer-events-auto inline-flex items-center rounded-full bg-red-700 px-4 md:px-5 py-1.5 md:py-2.5 text-sm font-semibold text-white shadow transition-colors hover:bg-red-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-400"
                  >
                    {slide.cta.label}
                  </Link>
                </div>
              )}
            </div>
          </motion.div>
        </div>

        {/* dots */}
        <div className="absolute bottom-4 left-1/2 z-20 -translate-x-1/2">
          <div className="flex gap-2">
            {slides.map((s, i) => (
              <button
                key={s.id}
                aria-label={`Go to slide ${i + 1}`}
                onClick={() => setIndex((i + slides.length) % slides.length)}
                className={[
                  "h-1.5 md:h-2.5 w-1.5 md:w-2.5 rounded-full transition",
                  i === index ? "bg-white" : "bg-white/40 hover:bg-white/70",
                ].join(" ")}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
