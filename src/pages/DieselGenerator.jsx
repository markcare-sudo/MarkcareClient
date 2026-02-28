// import React from "react";
import Testimonials from "@/components/LandingPageComponents/Testimonials";
import ProductCard from "@/components/ProductCard";
import { BANNER_IMAGES } from "@/constants/branding";
import { DIESEL_GENERATORS } from "@/constants/DieselGenerator";


const DieselGenerator = () => {
  return (
    <section className="min-h-screen py-4">

      {/* ================= Banner Section ================= */}
      <div className="relative w-full h-[250px] md:h-[550px] overflow-hidden">

        {/* Banner Image */}
        <img
          src={BANNER_IMAGES.DEISELGENERATE_BANNER}
          alt="Diesel Generators Banner"
          className="w-full h-full object-cover"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60" />

        {/* Banner Content */}
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4">
          <h1 className="text-3xl md:text-5xl font-bold">
            Diesel Generators
          </h1>

          <p className="mt-6 max-w-3xl text-gray-200 text-sm md:text-lg">
            Service Provider of a wide range of services which include ashok leyland diesel generator, diesel generator rental, amc for diesel generators, diesel generator installation, 15kva koel green diesel generator and diesel generator repair & services.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto  space-y-16 py-16 p-4">

        {/* All Elevators */}
        {DIESEL_GENERATORS.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}

        <Testimonials />
      </div>
    </section>
  );
};

export default DieselGenerator;
