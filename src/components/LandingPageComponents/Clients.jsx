// // Clients.jsx
// import React from "react";
// import { motion } from "framer-motion";
// import { CLIENTS } from "@/utils/data";

// const ClientCard = ({ logo, name, subtitle }) => (
//   <motion.div
//     whileHover={{
//       y: -10,
//       scale: 1.03,
//     }}
//     transition={{ type: "spring", stiffness: 200 }}
//     className="relative group w-[220px] md:w-[240px] shrink-0 
//                rounded-2xl p-3 md:p-6 text-center overflow-hidden
//                bg-gradient-to-br from-gray-900 to-gray-800
//                border border-gray-800
//                hover:border-red-500 
//                hover:shadow-2xl hover:shadow-red-500/10
//                transition-all duration-300"
//   >
//     {/* Soft Red Glow */}
//     <div className="absolute inset-0 rounded-2xl opacity-0 
//                     group-hover:opacity-100 transition duration-500 
//                     bg-red-600/5 blur-xl" />

//     {/* Logo */}
//     <div className="relative h-16 flex items-center justify-center">
//       <img
//         src={logo}
//         alt={name}
//         className="h-12 object-contain opacity-80 
//                    group-hover:opacity-100 transition duration-300"
//         loading="lazy"
//       />
//     </div>

//     {/* Text */}
//     <div className="relative mt-5">
//       <div className="text-sm font-semibold text-white group-hover:text-red-500 transition">
//         {name}
//       </div>
//       <div className="text-xs text-gray-400 mt-1">
//         {subtitle}
//       </div>
//     </div>

//     {/* Bottom Accent Line */}
//     <div className="absolute bottom-0 left-0 h-[2px] w-0 
//                     bg-red-500 group-hover:w-full 
//                     transition-all duration-500" />
//   </motion.div>
// );


// export default function Clients() {
//   const marquee = [...CLIENTS, ...CLIENTS]; // duplicate for seamless loop
//   const speed = 5;

//   return (
//    <section
//       id="clients"
//       className="relative py-20 lg:py-28 text-white overflow-hidden"
//     >

//       <div className="relative max-w-7xl mx-auto ">
//         {/* Header */}
//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ amount: 0.4 }}
//           transition={{ duration: 0.8 }}
//           className="text-center"
//         >
//           <h2 className="text-4xl md:text-5xl font-extrabold">
//             Our Clients
//           </h2>
//           <p className="mt-4 text-gray-400 text-lg">
//             Trusted by organizations & communities
//           </p>
//         </motion.div>

//         {/* Marquee */}
//         <div className="relative mt-14 overflow-hidden">
//           <motion.div
//             className="flex gap-8"
//             animate={{ x: ["0%", "-50%"] }}
//             transition={{
//               repeat: Infinity,
//               duration: speed,
//               ease: "linear",
//             }}
//           >
//             {marquee.map((c, i) => (
//               <ClientCard key={`${c.name}-${i}`} {...c} />
//             ))}
//           </motion.div>

//           {/* Gradient fade edges */}
//           <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-black to-transparent z-20" />
//           <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-black to-transparent z-20" />
//         </div>
//       </div>
//     </section>
//   );
// }

import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { CLIENTS } from "@/utils/data";

const ClientCard = ({ logo, name, subtitle }) => (
  <motion.div
    whileHover={{
      y: -10,
      scale: 1.03,
    }}
    transition={{ type: "spring", stiffness: 200 }}
    className="relative group w-[220px] md:w-[240px] shrink-0 
               rounded-2xl p-3 md:p-6 text-center overflow-hidden
               bg-gradient-to-br from-gray-900 to-gray-800
               border border-gray-800
               hover:border-red-500 
               hover:shadow-2xl hover:shadow-red-500/10
               transition-all duration-300"
  >
    {/* Soft Red Glow */}
    <div className="absolute inset-0 rounded-2xl opacity-0 
                    group-hover:opacity-100 transition duration-500 
                    bg-red-600/5 blur-xl" />

    {/* Logo */}
    <div className="relative h-16 flex items-center justify-center">
      <img
        src={logo}
        alt={name}
        className="h-12 object-contain opacity-80 
                   group-hover:opacity-100 transition duration-300"
        loading="lazy"
      />
    </div>

    {/* Text */}
    <div className="relative mt-5">
      <div className="text-sm font-semibold text-white group-hover:text-red-500 transition">
        {name}
      </div>
      <div className="text-xs text-gray-400 mt-1">
        {subtitle}
      </div>
    </div>

    {/* Bottom Accent Line */}
    <div className="absolute bottom-0 left-0 h-[2px] w-0 
                    bg-red-500 group-hover:w-full 
                    transition-all duration-500" />
  </motion.div>
);

export default function Clients() {
  const marqueeRef = useRef(null);
  const [width, setWidth] = useState(0);

  const marquee = [...CLIENTS, ...CLIENTS]; // duplicate

  useEffect(() => {
    if (marqueeRef.current) {
      setWidth(marqueeRef.current.scrollWidth / 2);
    }
  }, []);



  return (
    <section
      id="clients"
      className="relative py-20 lg:py-28 text-white overflow-hidden"
    >
      <div className="relative max-w-7xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.4 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold">
            Our Clients
          </h2>
          <p className="mt-4 text-gray-400 text-lg">
            Trusted by organizations & communities
          </p>
        </motion.div>

        {/* 🔥 Seamless Marquee */}
        <div className="relative mt-14 overflow-hidden">
          <motion.div
            ref={marqueeRef}
            className="flex gap-8 w-max"
            animate={{ x: [0, -width] }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 20, // control speed here
                ease: "linear",
              },
            }}
          >
            {marquee.map((c, i) => (
              <ClientCard key={`${c.name}-${i}`} {...c} />
            ))}
          </motion.div>

          {/* Gradient fade edges */}
          <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-black to-transparent z-20" />
          <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-black to-transparent z-20" />
        </div>
      </div>
    </section>
  );
}