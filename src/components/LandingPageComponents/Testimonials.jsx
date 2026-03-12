import React from "react";
import { motion } from "framer-motion";
import { Star, Quote, CheckCircle } from "lucide-react";

const testimonials = [
  {
    name: "Ramesh Kumar",
    role: "Flat Owner – Vijayawada",
    rating: 5,
    review: "My AC suddenly stopped working in peak summer. The MarkCare team fixed it without suggesting unnecessary parts. Pricing was fair and service was clean.",
    color: "bg-blue-500",
  },
  {
    name: "Priya Sharma",
    role: "Operations Manager – Industrial Unit",
    rating: 5,
    review: "We’ve been using MarkCare for industrial lift maintenance for a year. Downtime has reduced significantly after they took over. Very disciplined team.",
    color: "bg-orange-500",
  },
  {
    name: "Arjun Reddy",
    role: "Independent House Owner",
    rating: 4,
    review: "Got RO plant installation done. Process was smooth and completed in a day. After-service support is good—they followed up a week later.",
    color: "bg-green-500",
  },
  {
    name: "Sana Begum",
    role: "Apartment Association Member",
    rating: 5,
    review: "They inspected the site properly before quoting for our water treatment setup. Work was on schedule and residents are satisfied with water quality.",
    color: "bg-purple-500",
  },
  {
    name: "Venkatesh Rao",
    role: "Small Factory Owner",
    rating: 5,
    review: "Professional approach and reasonable pricing for our utility systems. They communicated clearly throughout the process despite material delays.",
    color: "bg-red-500",
  },
];

// Duplicate the array for a seamless infinite loop
const scrollingTestimonials = [...testimonials, ...testimonials];

export default function Testimonials() {
  return (
    <section className="relative py-20 bg-neutral-950 overflow-hidden">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 text-center mb-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            What Our <span className="text-red-600">Satisfied Customers</span> Say
          </h2>
          <p className="text-neutral-400 max-w-2xl mx-auto text-lg leading-relaxed">
            Trusted by homeowners and industrial leaders for reliable, 
            standardized, and high-quality engineering solutions.
          </p>
        </motion.div>
      </div>

      {/* Infinite Smooth Slider */}
      <div className="relative flex overflow-hidden py-10 mask-gradient">
        {/* The Marquee Container */}
        <motion.div 
          className="flex gap-6 whitespace-nowrap"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 40,
            ease: "linear",
            repeat: Infinity,
          }}
        >
          {scrollingTestimonials.map((item, index) => (
            <div
              key={index}
              className="w-[350px] md:w-[450px] flex-shrink-0 bg-neutral-900/50 backdrop-blur-sm border border-neutral-800 p-8 rounded-3xl relative group transition-colors hover:border-orange-500/30"
            >
              <Quote className="absolute top-6 right-8 text-neutral-800 w-12 h-12 group-hover:text-orange-500/10 transition-colors" />
              
              {/* Rating & Status */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className={i < item.rating ? "text-orange-500 fill-orange-500" : "text-neutral-700"}
                    />
                  ))}
                </div>
                <div className="flex items-center gap-1.5 bg-neutral-800/50 px-3 py-1 rounded-full border border-neutral-700">
                  <CheckCircle size={12} className="text-green-500" />
                  <span className="text-[10px] uppercase tracking-wider text-neutral-400 font-bold">Verified</span>
                </div>
              </div>

              {/* Review Text */}
              <p className="text-neutral-300 leading-relaxed text-base italic mb-8 whitespace-normal">
                "{item.review}"
              </p>

              {/* Profile Section */}
              <div className="flex items-center gap-4">
                <div className={`w-12 h-12 rounded-full ${item.color} flex items-center justify-center text-white font-bold text-lg shadow-lg`}>
                  {item.name.charAt(0)}
                </div>
                <div>
                  <h4 className="text-white font-bold tracking-wide">{item.name}</h4>
                  <p className="text-orange-500/80 text-xs font-medium uppercase tracking-widest">{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>

        {/* CSS for fading edges (add to your global CSS or use tailwind arbitrary values) */}
        <style dangerouslySetInnerHTML={{ __html: `
          .mask-gradient {
            mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent);
            -webkit-mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent);
          }
        `}} />
      </div>

      {/* Trust Badges */}
      <div className="mt-16 flex flex-wrap justify-center gap-8 opacity-40 grayscale pointer-events-none">
        {/* You can add partner logos or stats here */}
        <div className="text-neutral-400 font-bold text-sm uppercase tracking-[0.3em]">4.9/5 Average Rating</div>
        <div className="text-neutral-400 font-bold text-sm uppercase tracking-[0.3em]">5000+ Projects Done</div>
      </div>
    </section>
  );
}