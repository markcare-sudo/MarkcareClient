import { MARKCARE_GALLERY } from "@/constants/branding";
import React, { useEffect, useState } from "react";

export default function Gallery() {
  const [open, setOpen] = useState(false);
  const [idx, setIdx] = useState(0);

  // 🎥 Videos
  const video1 = MARKCARE_GALLERY.GALLERY_29;
  const video2 = MARKCARE_GALLERY.GALLERY_30;

  console.log(video1)

  // 🖼 Only Images (Exclude videos)
  const images = Object.entries(MARKCARE_GALLERY)
    .filter(([key, value]) =>
      value && key !== "GALLERY_29" && key !== "GALLERY_30"
    )
    .map(([_, img], index) => ({
      id: index + 1,
      image: img,
    }));

  const total = images.length;

  const openAt = (i) => {
    setIdx(i);
    setOpen(true);
  };

  const close = () => setOpen(false);
  const prev = () => setIdx((i) => (i - 1 + total) % total);
  const next = () => setIdx((i) => (i + 1) % total);

  // Lock scroll
  useEffect(() => {
    if (open) {
      const prevOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = prevOverflow;
      };
    }
  }, [open]);

  // Keyboard
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4">

        {/* ===== Top Video Section ===== */}
<div className="relative mb-12">
  <h2 className="text-center text-3xl md:text-5xl font-bold mb-8">
    Mark Care Gallery
  </h2>

  <div className="grid grid-cols-1 md:grid-cols-8 gap-6 items-start">

    {/* 🔥 Main Large Video (4 Columns) */}
    {video1 && (
      <div className="md:col-span-6">
        <video
          src={video1}
          controls
          className="w-full rounded-2xl shadow-xl"
        />
      </div>
    )}

    {/* 🎥 Small Side Video (1 Column) */}
    {video2 && (
      <div className="md:col-span-2">
        <video
          src={video2}
          controls
          className="w-full rounded-2xl shadow-lg"
        />
      </div>
    )}

  </div>
</div>

        {/* ===== Image Grid ===== */}
        <div
          className="
            grid 
            grid-cols-2 sm:grid-cols-3 md:grid-cols-4 
            gap-4 
            auto-rows-[180px] 
            md:auto-rows-[220px]
            grid-flow-dense
          "
        >
          {images.map((item, i) => (
            <button
              key={item.id}
              onClick={() => openAt(i)}
              className={`
                group relative overflow-hidden rounded-2xl shadow-md 
                hover:scale-[1.02] transition-transform duration-300 cursor-zoom-in
                ${i % 7 === 0 ? "col-span-2 row-span-2" : ""}
                ${i % 9 === 3 ? "col-span-2" : ""}
                ${i % 10 === 5 ? "row-span-2" : ""}
              `}
            >
              <img
                src={item.image}
                alt={`markcare-gallery-${item.id}`}
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <span className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors"></span>
            </button>
          ))}
        </div>
      </div>

      {/* ===== Modal Preview ===== */}
      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
          onClick={(e) => {
            if (e.target === e.currentTarget) close();
          }}
        >
          <div className="relative w-full h-full flex items-center justify-center p-4">

            <button
              onClick={close}
              className="absolute top-4 right-4 rounded-full bg-white/90 hover:bg-white p-2 shadow"
            >
              ✕
            </button>

            <button
              onClick={(e) => { e.stopPropagation(); prev(); }}
              className="hidden sm:flex absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/90 hover:bg-white p-2 shadow"
            >
              ‹
            </button>

            <button
              onClick={(e) => { e.stopPropagation(); next(); }}
              className="hidden sm:flex absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/90 hover:bg-white p-2 shadow"
            >
              ›
            </button>

            <img
              src={images[idx].image}
              alt={`preview-${images[idx].id}`}
              className="max-h-[90vh] max-w-[95vw] object-contain rounded-xl shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />

            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-sm">
              {idx + 1} / {images.length}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}