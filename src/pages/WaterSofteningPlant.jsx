// import React from "react";
import Testimonials from "@/components/LandingPageComponents/Testimonials";
import ProductCard from "@/components/ProductCard";
import { WATER_SOFTENING_PLANTS } from "@/constants/WaterSofteningPlant";


const WaterSofteningPlant = () => {
  return (
    <section className="min-h-screen py-4">
      <div className="max-w-7xl mx-auto space-y-16 p-4">
        
        {/* Header */}
        <div>
          <h1 className="text-3xl md:text-4xl font-bold text-white">
            Water Softening Plants
          </h1>
          <p className="text-gray-400 mt-4 max-w-3xl">
            We are a leading Service Provider of commercial water softening plant, softener water treatment plant and industrial sewage water treatment plant opration & maintenance from Chennai, India.
          </p>
        </div>

        {/* All Elevators */}
        {WATER_SOFTENING_PLANTS.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}

        <Testimonials />
      </div>
    </section>
  );
};

export default WaterSofteningPlant;
