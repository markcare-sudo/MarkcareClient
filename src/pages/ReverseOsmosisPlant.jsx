// import React from "react";
import ProductCard from "@/components/ProductCard";
import { REVERSE_OSMOSIS_PLANTS } from "@/constants/ReverseOsmosisPlant";


const ReverseOsmosisPlant = () => {
  return (
    <section className="bg-black min-h-screen py-4">
      <div className="max-w-7xl mx-auto space-y-16 p-4">
        
        {/* Header */}
        <div>
          <h1 className="text-3xl md:text-4xl font-bold text-white">
            Reverse Osmosis Plants
          </h1>
          <p className="text-gray-400 mt-4 max-w-3xl">
            Leading Service Provider of industrial reverse osmosis plant, dm ro water plant, industrial ro system, 500 lph commercial ro plant, ro plant 500 lph and 2000 lph ro plant from Chennai.
          </p>
        </div>

        {/* All Elevators */}
        {REVERSE_OSMOSIS_PLANTS.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default ReverseOsmosisPlant;
