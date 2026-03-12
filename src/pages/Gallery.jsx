import { MARKCARE_GALLERY } from "@/constants/branding";
import React, { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Play, Maximize2 } from "lucide-react";

export default function Gallery() {
  const [selectedIdx, setSelectedIdx] = useState(null);
  
  // 🎥 Videos
  const video1 = MARKCARE_GALLERY.GALLERY_29;
  const video2 = MARKCARE_GALLERY.GALLERY_30;

  // 🖼 Process Images
  const images = Object.entries(MARKCARE_GALLERY)
    .filter(([key, value]) => value && key !== "GALLERY_29" && key !== "GALLERY_30")
    .map(([_, img], index) => ({
      id: index,
      image: img,
    }));

  const total = images.length;

  const next = useCallback((e) => {
    e?.stopPropagation();
    setSelectedIdx((prev) => (prev + 1) % total);
  }, [total]);

  const prev = useCallback((e) => {
    e?.stopPropagation();
    setSelectedIdx((prev) => (prev - 1 + total) % total);
  }, [total]);

  const close = () => setSelectedIdx(null);

  // Keyboard Navigation
  useEffect(() => {
    if (selectedIdx === null) return;
    const handleKeyDown = (e) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIdx, next, prev]);

  return (
    <section className="relative py-20 bg-neutral-950 overflow-hidden min-h-screen">
      {/* Decorative background glow */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-red-600/10 blur-[120px] rounded-full" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
            Our <span className="text-red-600">Visual</span> Journey
          </h2>
          <p className="text-neutral-400 max-w-2xl mx-auto text-lg">
            A showcase of our industrial excellence, residential projects, and the dedicated team behind Mark Care.
          </p>
        </motion.div>

        {/* Video Showcase - "The Cinematic Block" */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-8 group relative rounded-3xl overflow-hidden border border-white/10 bg-neutral-900 shadow-2xl"
          >
            <video src={video1} controls className="w-full h-full object-cover" />
            <div className="absolute top-4 left-4 bg-red-600 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest flex items-center gap-2">
              <Play size={10} fill="currentColor" /> Featured Project
            </div>
          </motion.div>

          <motion.div 
             initial={{ opacity: 0, x: 30 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
            className="lg:col-span-4 rounded-3xl overflow-hidden border border-white/10 bg-neutral-900"
          >
            <video src={video2} controls className="w-full h-full object-cover" />
          </motion.div>
        </div>

        {/* Image Bento Grid */}
        <motion.div 
          layout
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[200px] md:auto-rows-[280px]"
        >
          {images.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              onClick={() => setSelectedIdx(i)}
              className={`
                relative group overflow-hidden rounded-3xl cursor-pointer border border-white/5
                ${i % 7 === 0 ? "md:col-span-2 md:row-span-2" : ""}
                ${i % 10 === 5 ? "md:row-span-2" : ""}
              `}
            >
              <img
                src={item.image}
                alt="Gallery Item"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-1"
                loading="lazy"
              />
              
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
                <div className="w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white scale-75 group-hover:scale-100 transition-transform">
                  <Maximize2 size={20} />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedIdx !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-xl p-4"
            onClick={close}
          >
            <button 
              className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors z-[110]"
              onClick={close}
            >
              <X size={40} strokeWidth={1.5} />
            </button>

            {/* Navigation Buttons */}
            <div className="absolute inset-x-8 top-1/2 -translate-y-1/2 flex justify-between pointer-events-none">
              <button 
                onClick={prev}
                className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-red-600 hover:border-red-600 transition-all pointer-events-auto"
              >
                <ChevronLeft size={32} />
              </button>
              <button 
                onClick={next}
                className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-red-600 hover:border-red-600 transition-all pointer-events-auto"
              >
                <ChevronRight size={32} />
              </button>
            </div>

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-5xl max-h-[85vh] flex flex-col items-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={images[selectedIdx].image}
                className="w-full h-full object-contain rounded-2xl shadow-[0_0_50px_rgba(0,0,0,0.5)] border border-white/10"
                alt="Enlarged"
              />
              
              <div className="absolute -bottom-12 flex items-center gap-4">
                <span className="text-white font-mono text-sm tracking-widest opacity-50 uppercase">
                  Mark Care Archive / {selectedIdx + 1} of {total}
                </span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}