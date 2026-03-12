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

const scrollingTestimonials = [...testimonials, ...testimonials];

export default function Testimonials() {
  return (
    <section className="relative py-10 md:py-20 bg-neutral-950 overflow-hidden">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 text-center mb-8 md:mb-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl md:text-5xl font-bold text-white mb-3 md:mb-6 tracking-tight">
            What Our <span className="text-red-600">Customers</span> Say
          </h2>
          <p className="text-neutral-500 max-w-2xl mx-auto text-xs md:text-lg leading-relaxed px-4">
            Trusted by homeowners and industrial leaders for reliable engineering.
          </p>
        </motion.div>
      </div>

      {/* Infinite Smooth Slider */}
      <div className="relative flex overflow-hidden py-4 mask-gradient">
        <motion.div 
          className="flex gap-3 md:gap-6 whitespace-nowrap"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 30, 
            ease: "linear",
            repeat: Infinity,
          }}
        >
          {scrollingTestimonials.map((item, index) => (
            <div
              key={index}
              className="w-[260px] md:w-[450px] flex-shrink-0 bg-neutral-900/40 backdrop-blur-sm border border-neutral-800 p-5 md:p-8 rounded-2xl relative group"
            >
              <Quote className="absolute top-4 right-5 text-neutral-800 w-6 h-6 md:w-12 md:h-12" />
              
              {/* Rating & Status */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={12}
                      className={i < item.rating ? "text-red-600 fill-red-600" : "text-neutral-700"}
                    />
                  ))}
                </div>
                <div className="flex items-center gap-1 bg-neutral-800/80 px-2 py-0.5 rounded-full border border-neutral-700">
                  <CheckCircle size={8} className="text-green-500" />
                  <span className="text-[7px] md:text-[10px] uppercase tracking-wider text-neutral-400 font-bold">Verified</span>
                </div>
              </div>

              {/* Review Text */}
              <p className="text-neutral-300 leading-relaxed text-xs md:text-base italic mb-5 whitespace-normal line-clamp-4 md:line-clamp-none">
                "{item.review}"
              </p>

              {/* Profile Section */}
              <div className="flex items-center gap-3">
                <div className={`w-9 h-9 md:w-12 md:h-12 rounded-full ${item.color} flex items-center justify-center text-white font-bold text-sm md:text-lg shadow-inner`}>
                  {item.name.charAt(0)}
                </div>
                <div className="overflow-hidden">
                  <h4 className="text-white font-bold tracking-wide text-xs md:text-base truncate">{item.name}</h4>
                  <p className="text-red-600/90 text-[9px] md:text-xs font-medium uppercase tracking-tight md:tracking-widest truncate">{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>

        <style dangerouslySetInnerHTML={{ __html: `
          .mask-gradient {
            mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
            -webkit-mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
          }
        `}} />
      </div>

      {/* Trust Stats */}
      <div className="mt-8 flex flex-col items-center gap-2 opacity-30">
        <div className="text-neutral-400 font-bold text-[9px] md:text-sm uppercase tracking-[0.2em]">4.9/5 Average Rating</div>
        <div className="text-neutral-400 font-bold text-[9px] md:text-sm uppercase tracking-[0.2em]">5000+ Projects Done</div>
      </div>
    </section>
  );
}