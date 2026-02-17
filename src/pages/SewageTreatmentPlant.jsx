// import React from "react";
import ProductCard from "@/components/ProductCard";
import { SEWAGE_TREATMENT_PLANTS } from "@/constants/SewageTreatmentPlant";


const SewageTreatmentPlant = () => {
  return (
    <section className="bg-black min-h-screen py-4">
      <div className="max-w-7xl mx-auto space-y-16 p-4">
        
        {/* Header */}
        <div>
          <h1 className="text-3xl md:text-4xl font-bold text-white">
            Sewage Treatment Plants
          </h1>
          <p className="text-gray-400 mt-4 max-w-3xl">
            Service Provider of a wide range of services which include automatic industrial sewage treatment plant, industrial sewage water treatment plant, industrial sewage treatment plant, effluent treatment plant, commercial sewage treatment plant and domestic sewage treatment plant.
          </p>
        </div>

        {/* All Elevators */}
        {SEWAGE_TREATMENT_PLANTS.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default SewageTreatmentPlant;
