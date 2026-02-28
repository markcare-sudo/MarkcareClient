// import React from "react";
import Testimonials from "@/components/LandingPageComponents/Testimonials";
import ProductCard from "@/components/ProductCard";
import { AIR_CONDITIONING_SYSTEMS } from "@/constants/AC";
import { BANNER_IMAGES } from "@/constants/branding";


const AC = () => {
  return (
    <section className="min-h-screen py-4">

      {/* ================= Banner Section ================= */}
      <div className="relative w-full h-[250px] md:h-[550px] overflow-hidden">

        {/* Banner Image */}
        <img
          src={BANNER_IMAGES.AC_BANNER}
          alt="AC Systems Banner"
          className="w-full h-full object-cover"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60" />

        {/* Banner Content */}
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4">
          <h1 className="text-3xl md:text-5xl font-bold">
            AC Systems
          </h1>

          <p className="mt-6 max-w-3xl text-gray-200 text-sm md:text-lg">
            We provide reliable AC systems to ensure optimal cooling and comfort for your spaces. Our AC solutions are designed to meet the specific needs of residential, commercial, and industrial clients, delivering efficient and effective cooling performance.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto  space-y-16 py-16 p-4">

        {/* All Elevators */}
        {AIR_CONDITIONING_SYSTEMS.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}

        <Testimonials />
      </div>
    </section>
  );
};

export default AC;
