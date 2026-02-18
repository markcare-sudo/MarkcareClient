// import React from "react";
import ProductCard from "@/components/ProductCard";
import { WATER_TREATMENT_PLANTS } from "@/constants/WaterTreatmentPlantData";


const WaterTreatmentPlant = () => {
  return (
    <section className="min-h-screen py-4">
      <div className="max-w-7xl mx-auto space-y-16 p-4">
        
        {/* Header */}
        <div>
          <h1 className="text-3xl md:text-4xl font-bold text-white">
            Water Treatment Plants
          </h1>
          <p className="text-gray-400 mt-4 max-w-3xl">
             Offering a complete range of industrial water treatment solutions including
            RO plants, waste water treatment plants, desalination systems,
            iron removal plants, repair & maintenance services and media replacement services.
          </p>
        </div>

        {/* All Elevators */}
        {WATER_TREATMENT_PLANTS.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default WaterTreatmentPlant;
