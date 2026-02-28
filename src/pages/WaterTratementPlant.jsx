// // import React from "react";
// import Testimonials from "@/components/LandingPageComponents/Testimonials";
// import ProductCard from "@/components/ProductCard";
// import { BANNER_IMAGES } from "@/constants/branding";
// import { WATER_TREATMENT_PLANTS } from "@/constants/WaterTreatmentPlantData";


// const WaterTreatmentPlant = () => {
//   return (
//     <section className="min-h-screen py-4">
//                 <img src={BANNER_IMAGES.WATERTREATMENT_BANNER} alt="About Us" className="w-full h-140 shadow-lg" />
//       <div className="max-w-7xl mx-auto space-y-16 p-4">
//         {/* Header */}
//         <div>
//           <h1 className="text-3xl md:text-4xl font-bold text-white">
//             Water Treatment Plants
//           </h1>
//           <p className="text-gray-400 mt-4 max-w-3xl">
//              Offering a complete range of industrial water treatment solutions including
//             RO plants, waste water treatment plants, desalination systems,
//             iron removal plants, repair & maintenance services and media replacement services.
//           </p>
//         </div>

//         {/* All Elevators */}
//         {WATER_TREATMENT_PLANTS.map((product) => (
//           <ProductCard key={product.id} product={product} />
//         ))}

//         <Testimonials />
//       </div>
//     </section>
//   );
// };

// export default WaterTreatmentPlant;






import Testimonials from "@/components/LandingPageComponents/Testimonials";
import ProductCard from "@/components/ProductCard";
import { BANNER_IMAGES } from "@/constants/branding";
import { WATER_TREATMENT_PLANTS } from "@/constants/WaterTreatmentPlantData";

const WaterTreatmentPlant = () => {
  return (
    <section className="min-h-screen text-white">

      {/* ================= Banner Section ================= */}
      <div className="relative w-full h-[250px] md:h-[550px] overflow-hidden">

        {/* Banner Image */}
        <img
          src={BANNER_IMAGES.WATERTREATMENT_BANNER}
          alt="Water Treatment Plant"
          className="w-full h-full object-cover"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60" />

        {/* Banner Content */}
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4">
          <h1 className="text-3xl md:text-5xl font-bold">
            Water Treatment Plants
          </h1>

          <p className="mt-6 max-w-3xl text-gray-200 text-sm md:text-lg">
            Offering a complete range of industrial water treatment solutions
            including RO plants, waste water treatment plants, desalination systems,
            iron removal plants, repair & maintenance services and media replacement services.
          </p>
        </div>
      </div>

      {/* ================= Content Section ================= */}
      <div className="max-w-7xl mx-auto space-y-16 py-16 px-4">

        {WATER_TREATMENT_PLANTS.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}

        <Testimonials />
      </div>

    </section>
  );
};

export default WaterTreatmentPlant;