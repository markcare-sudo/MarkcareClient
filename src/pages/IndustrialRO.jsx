import React from "react";
import Testimonials from "@/components/LandingPageComponents/Testimonials";
import ProductCard from "@/components/ProductCard";
import { INDUSTRIAL_RO_SERVICES } from "@/constants/IndustrialRO";

const IndustrialRO = () => {
  return (
    <section className="min-h-screen py-4">
      {/* ================= Banner Section ================= */}
      <div className="relative w-full h-[250px] md:h-[550px] overflow-hidden bg-gray-900">
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4">
          <h1 className="text-3xl md:text-5xl font-bold text-white">
            Industrial RO Systems
          </h1>
          <p className="mt-6 max-w-3xl text-gray-200 text-sm md:text-lg">
            High-capacity industrial Reverse Osmosis (RO) plants designed for efficient and large-scale water purification.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto space-y-16 py-16 p-4">
        {INDUSTRIAL_RO_SERVICES.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
        <Testimonials />
      </div>
    </section>
  );
};

export default IndustrialRO;
