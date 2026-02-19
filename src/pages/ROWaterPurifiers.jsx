
// import React from "react";
import ProductCard from "@/components/ProductCard";
import { RO_WATER_PURIFIERS } from "@/constants/ROWaterPurifier";


const ROWaterPurifiers = () => {
  return (
    <section className="min-h-screen py-4">
      <div className="max-w-7xl mx-auto space-y-16 p-4">
        
        {/* Header */}
        <div>
          <h1 className="text-3xl md:text-4xl font-bold text-white">
            RO Water Purifiers
          </h1>
          <p className="text-gray-400 mt-4 max-w-3xl">
            We provide reliable RO water purifiers to ensure clean and safe drinking water for your home or business. Our RO systems are designed to effectively remove impurities and contaminants, delivering pure and refreshing water for your daily needs.
          </p>
        </div>

        {/* All Elevators */}
        {RO_WATER_PURIFIERS.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default ROWaterPurifiers;
