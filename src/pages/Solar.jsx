// import React from "react";
import ProductCard from "@/components/ProductCard";
import { SOLAR_POWER_SYSTEMS } from "@/constants/SolarPowerSystems";


const Solar = () => {
  return (
    <section className="min-h-screen py-4">
      <div className="max-w-7xl mx-auto space-y-16 p-4">
        
        {/* Header */}
        <div>
          <h1 className="text-3xl md:text-4xl font-bold text-white">
            Solar
          </h1>
          <p className="text-gray-400 mt-4 max-w-3xl">
            We provide reliable solar solutions to ensure sustainable and efficient energy generation for your residential and commercial needs. Our solar systems are designed to maximize energy output while minimizing environmental impact, delivering clean and renewable power for your operations.
          </p>
        </div>

        {/* All Elevators */}
        {SOLAR_POWER_SYSTEMS.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default Solar;
