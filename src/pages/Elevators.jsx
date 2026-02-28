// import React from "react";
import Testimonials from "@/components/LandingPageComponents/Testimonials";
import ProductCard from "@/components/ProductCard";
import { BANNER_IMAGES } from "@/constants/branding";
import { RESIDENCIAL_ELEVATORS } from "@/constants/ResidencialElevators";


const ElevatorsPage = () => {
  return (
    <section className="min-h-screen py-4">
      {/* ================= Banner Section ================= */}
      <div className="relative w-full h-[250px] md:h-[550px] overflow-hidden">

        {/* Banner Image */}
        <img
          src={BANNER_IMAGES.ELEVATOR_BANNER}
          alt="Elevator Banner"
          className="w-full h-full object-cover"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60" />

        {/* Banner Content */}
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4">
          <h1 className="text-3xl md:text-5xl font-bold">
            Residential Elevators
          </h1>

          <p className="mt-6 max-w-3xl text-gray-200 text-sm md:text-lg">
            Offering you a complete choice of services including single phase lift for home,
            hydraulic passenger lift, commercial passenger elevator,
            glass door passenger elevator, manual residential elevator and goods lift.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto space-y-16 py-16 p-4">



        {/* All Elevators */}
        {RESIDENCIAL_ELEVATORS.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      <Testimonials />
    </section>
  );
};

export default ElevatorsPage;
