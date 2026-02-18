// import React from "react";
import ProductCard from "@/components/ProductCard";
import { UPS_SYSTEMS } from "@/constants/UPS";


const UPS = () => {
  return (
    <section className="min-h-screen py-4">
      <div className="max-w-7xl mx-auto space-y-16 p-4">
        
        {/* Header */}
        <div>
          <h1 className="text-3xl md:text-4xl font-bold text-white">
            UPS Systems
          </h1>
          <p className="text-gray-400 mt-4 max-w-3xl">
            We provide reliable UPS systems to ensure uninterrupted power supply for your critical operations. Our UPS solutions are designed to protect your equipment and data from power outages and fluctuations, keeping your business running smoothly.
          </p>
        </div>

        {/* All Elevators */}
        {UPS_SYSTEMS.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default UPS;
