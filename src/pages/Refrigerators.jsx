// import React from "react";
import ProductCard from "@/components/ProductCard";
import { REFRIGERATION_SYSTEMS } from "@/constants/Fridge";


const Refrigerators = () => {
  return (
    <section className="min-h-screen py-4">
      <div className="max-w-7xl mx-auto space-y-16 p-4">
        
        {/* Header */}
        <div>
          <h1 className="text-3xl md:text-4xl font-bold text-white">
            Refrigerators
          </h1>
          <p className="text-gray-400 mt-4 max-w-3xl">
            We provide reliable refrigerators to ensure optimal temperature control and preservation for your food and beverages. Our refrigerator solutions are designed to meet the specific needs of residential, commercial, and industrial clients, delivering efficient and effective cooling performance.
          </p>
        </div>

        {/* All Elevators */}
        {REFRIGERATION_SYSTEMS.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default Refrigerators;
