// import React from "react";
import ProductCard from "@/components/ProductCard";
import { DIESEL_GENERATORS } from "@/constants/DieselGenerator";


const DieselGenerator = () => {
  return (
    <section className="bg-black min-h-screen py-4">
      <div className="max-w-7xl mx-auto space-y-16 p-4">
        
        {/* Header */}
        <div>
          <h1 className="text-3xl md:text-4xl font-bold text-white">
            Deisel Generators
          </h1>
          <p className="text-gray-400 mt-4 max-w-3xl">
            Service Provider of a wide range of services which include ashok leyland diesel generator, diesel generator rental, amc for diesel generators, diesel generator installation, 15kva koel green diesel generator and diesel generator repair & services.
          </p>
        </div>

        {/* All Elevators */}
        {DIESEL_GENERATORS.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default DieselGenerator;
