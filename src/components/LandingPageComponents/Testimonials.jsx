import React from "react";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Ramesh Kumar",
    role: "Apartment Owner",
    rating: 5,
    review:
      "Excellent AC repair service. The team was professional, on time, and very transparent with pricing. Highly recommended!",
  },
  {
    name: "Priya Sharma",
    role: "Factory Manager",
    rating: 5,
    review:
      "MarkCare handled our industrial lift maintenance efficiently. Their technicians are well-trained and responsive.",
  },
  {
    name: "Arjun Reddy",
    role: "Homeowner",
    rating: 4,
    review:
      "Quick RO plant installation and great after-service support. Very satisfied with the overall experience.",
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
