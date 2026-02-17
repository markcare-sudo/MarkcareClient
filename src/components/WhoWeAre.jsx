import React from "react";
import { ArrowUpRight } from "lucide-react";

export default function WhoWeAre() {
  return (
    <section className="relative bg-black text-white overflow-hidden">
      
          {/* Background Gradient Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-white/5 pointer-events-none" />

      {/* Noise / Texture Overlay (Optional Professional Touch) */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] bg-[size:20px_20px]" />

      <div className="relative max-w-7xl mx-auto px-4 py-20 md:py-28">
        
        {/* Top Label */}
        <div className="flex items-center gap-3 mb-6 animate-fadeInUp">
          <ArrowUpRight size={34} className="text-gray-400" />
          <span className="text-xl md:text-4xl tracking-widest uppercase text-gray-400 font-medium">
            Who We Are
          </span>
        </div>

        {/* Description */}
        <p className="text-gray-400 text-base md:text-lg leading-relaxed mb-12 animate-fadeInUp delay-100">
          MarkCare is a technology platform enabling reliable, standardised home and 
          industrial services. From AC repair to RO plants, lifts, solar systems and 
          wastewater treatment — we empower service partners with training, tools, 
          and technology so customers receive a consistent experience every time.
        </p>

        {/* Main Heading */}
        <h2 className="text-center text-3xl sm:text-4xl md:text-6xl font-semibold leading-tight mb-12 animate-fadeInUp delay-200">
          High-Quality Services at Home <br className="hidden md:block" />
          & Industrial Solutions
        </h2>

        {/* CTA Button */}
       <div className="text-center">
         <button className="group relative inline-flex items-center justify-center px-8 py-4 bg-red-600 hover:bg-red-700 transition-all duration-300 rounded-full text-white font-medium text-sm md:text-base shadow-lg hover:shadow-red-500/40 animate-fadeInUp delay-300">
          Contact Us
          <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </button>
       </div>
      </div>

      {/* Custom Animations */}
      <style>{`
        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease forwards;
          opacity: 0;
        }
        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}
