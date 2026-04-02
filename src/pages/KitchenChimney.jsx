import React from "react";
import Testimonials from "@/components/LandingPageComponents/Testimonials";
import ProductCard from "@/components/ProductCard";
import { KITCHEN_CHIMNEY_SERVICES } from "@/constants/KitchenChimney";

const KitchenChimney = () => {
  return (
    <section className="min-h-screen py-4">
      {/* ================= Banner Section ================= */}
      <div className="relative w-full h-[250px] md:h-[550px] overflow-hidden bg-gray-900">
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4">
          <h1 className="text-3xl md:text-5xl font-bold text-white">
            Kitchen Chimney Service
          </h1>
          <p className="mt-6 max-w-3xl text-gray-200 text-sm md:text-lg">
            Expert deep cleaning and maintenance services for your kitchen chimney to ensure a smoke-free and healthy environment.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto space-y-16 py-16 p-4">
        {KITCHEN_CHIMNEY_SERVICES.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
        <Testimonials />
      </div>
    </section>
  );
};

export default KitchenChimney;
