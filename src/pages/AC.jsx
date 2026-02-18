// import React from "react";
import ProductCard from "@/components/ProductCard";
import { AIR_CONDITIONING_SYSTEMS } from "@/constants/AC";


const AC = () => {
  return (
    <section className="min-h-screen py-4">
      <div className="max-w-7xl mx-auto space-y-16 p-4">
        
        {/* Header */}
        <div>
          <h1 className="text-3xl md:text-4xl font-bold text-white">
            AC Systems
          </h1>
          <p className="text-gray-400 mt-4 max-w-3xl">
            We provide reliable AC systems to ensure optimal cooling and comfort for your spaces. Our AC solutions are designed to meet the specific needs of residential, commercial, and industrial clients, delivering efficient and effective cooling performance.
          </p>
        </div>

        {/* All Elevators */}
        {AIR_CONDITIONING_SYSTEMS.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default AC;
