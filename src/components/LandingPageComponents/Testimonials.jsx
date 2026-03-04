import React from "react";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Ramesh Kumar",
    role: "Flat Owner – Vijayawada",
    rating: 5,
    review:
      "My AC suddenly stopped working in peak summer and I was honestly worried about the cost. The MarkCare team came the same day, explained the issue clearly and fixed it without suggesting unnecessary parts. Pricing was fair and service was clean. Really happy with how they handled everything.",
  },
  {
    name: "Priya Sharma",
    role: "Operations Manager – Manufacturing Unit",
    rating: 5,
    review:
      "We’ve been using MarkCare for our industrial lift maintenance for over a year now. They respond quickly whenever we raise a ticket and their technicians are disciplined and knowledgeable. Downtime has reduced significantly after they took over.",
  },
  {
    name: "Arjun Reddy",
    role: "Independent House Owner",
    rating: 4,
    review:
      "Got RO plant installation done for our home. Installation was smooth and completed in a day. After-service support is good they even followed up after a week to check if everything was working fine. Overall a reliable team.",
  },
  {
    name: "Sana Begum",
    role: "Apartment Association Member",
    rating: 5,
    review:
      "We contacted MarkCare for water treatment setup in our apartment. They inspected the site properly before giving quotation, which gave us confidence. Work was completed on schedule and residents are satisfied with water quality now.",
  },
  {
    name: "Venkatesh Rao",
    role: "Small Factory Owner",
    rating: 4,
    review:
      "Their team installed utility systems in our unit. There were a couple of minor delays due to material availability, but they communicated clearly and finished the job properly. Professional approach and reasonable pricing.",
  },
];

export default function Testimonials() {
  return (
    <section className="relative py-20 md:py-28 text-white overflow-hidden">
      
      {/* Section Heading */}
      <div className="max-w-7xl mx-auto px-4 text-center mb-16">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-4">
          {/* What Our Clients Say */}
          What Our Satisfied Sustomers Say.
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Trusted by homeowners and industries for reliable, professional, and
          high-quality service solutions.
        </p>
      </div>

      {/* Testimonials Grid */}
      <div className="max-w-7xl mx-auto px-4 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((item, index) => (
          <div
            key={index}
            className="group bg-white/5 backdrop-blur-md border border-white/10 
            rounded-2xl p-6 transition-all duration-500
            hover:bg-white/10 hover:scale-[1.03] hover:shadow-2xl"
          >
            {/* Stars */}
            <div className="flex mb-4">
              {[...Array(item.rating)].map((_, i) => (
                <Star
                  key={i}
                  size={18}
                  className="text-yellow-400 fill-yellow-400"
                />
              ))}
            </div>

            {/* Review */}
            <p className="text-gray-300 leading-relaxed mb-6 text-sm md:text-base">
              "{item.review}"
            </p>

            {/* User Info */}
            <div>
              <h4 className="font-semibold text-lg">{item.name}</h4>
              <p className="text-gray-400 text-sm">{item.role}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
