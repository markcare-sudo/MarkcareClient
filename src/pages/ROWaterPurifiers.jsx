
// import React from "react";
import Testimonials from "@/components/LandingPageComponents/Testimonials";
import ProductCard from "@/components/ProductCard";
import { BANNER_IMAGES } from "@/constants/branding";
import { RO_WATER_PURIFIERS } from "@/constants/ROWaterPurifier";


const ROWaterPurifiers = () => {
  return (
    <section className="min-h-screen py-4">

      {/* ================= Banner Section ================= */}
      <div className="relative w-full h-[250px] md:h-[550px] overflow-hidden">

        {/* Banner Image */}
        <img
          src={BANNER_IMAGES.RO_BANNER}
          alt="RO Water Purifiers Banner"
          className="w-full h-full object-cover"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60" />

        {/* Banner Content */}
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4">
          <h1 className="text-3xl md:text-5xl font-bold">
            RO Water Purifiers
          </h1>

          <p className="mt-6 max-w-3xl text-gray-200 text-sm md:text-lg">
            We provide reliable RO water purifiers to ensure clean and safe drinking water for your home or business. Our RO systems are designed to effectively remove impurities and contaminants, delivering pure and refreshing water for your daily needs.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto  space-y-16 py-16 p-4">

        {/* All Elevators */}
        {RO_WATER_PURIFIERS.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}

        <Testimonials />
      </div>
    </section>
  );
};

export default ROWaterPurifiers;
