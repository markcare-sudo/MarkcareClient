// import React from "react";
import Testimonials from "@/components/LandingPageComponents/Testimonials";
import ProductCard from "@/components/ProductCard";
import { BANNER_IMAGES } from "@/constants/branding";
import { SOLAR_POWER_SYSTEMS } from "@/constants/SolarPowerSystems";


const Solar = () => {
  return (
    <section className="min-h-screen py-4">
      {/* ================= Banner Section ================= */}
      <div className="relative w-full h-[250px] md:h-[550px] overflow-hidden">

        {/* Banner Image */}
        <img
          src={BANNER_IMAGES.SOLAR_BANNER}
          alt="Solar Power Systems Banner"
          className="w-full h-full object-cover"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60" />

        {/* Banner Content */}
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4">
          <h1 className="text-3xl md:text-5xl font-bold">
            Solar Power Systems
          </h1>

          <p className="mt-6 max-w-3xl text-gray-200 text-sm md:text-lg">
            We provide reliable solar solutions to ensure sustainable and efficient energy generation for your residential and commercial needs. Our solar systems are designed to maximize energy output while minimizing environmental impact, delivering clean and renewable power for your operations.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto  space-y-16 py-16 p-4">

        {/* All Elevators */}
        {SOLAR_POWER_SYSTEMS.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}

        <Testimonials />
      </div>
    </section>
  );
};

export default Solar;
