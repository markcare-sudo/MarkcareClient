// import React from "react";
import ProductCard from "@/components/ProductCard";
import { RESIDENCIAL_ELEVATORS } from "@/constants/ResidencialElevators";


const ElevatorsPage = () => {
  return (
    <section className="min-h-screen py-4">
      <div className="max-w-7xl mx-auto space-y-16 p-4">
        
        {/* Header */}
        <div>
          <h1 className="text-3xl md:text-4xl font-bold text-white">
            Residential Elevator
          </h1>
          <p className="text-gray-400 mt-4 max-w-3xl">
            Offering you a complete choice of services including single phase lift for home,
            hydraulic passenger lift, commercial passenger elevator,
            glass door passenger elevator, manual residential elevator and goods lift.
          </p>
        </div>

        {/* All Elevators */}
        {RESIDENCIAL_ELEVATORS.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default ElevatorsPage;
