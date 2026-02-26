// export const PRODUCT_IMAGES = {
//   RO_AGROWP: import.meta.env.VITE_RO_AGROWP || "",
//   RO_ATRO: import.meta.env.VITE_RO_ATRO || "",
//   RO_HPALWP: import.meta.env.VITE_RO_HPALWP || "",
//   RO_ROWATER: import.meta.env.VITE_RO_ROWATER || "",
//   RO_ROUVWP: import.meta.env.VITE_RO_ROUVWP || "",
//   RO_WMROUVWP: import.meta.env.VITE_RO_WMROUVWP || "",
// };


// export const RO_WATER_PURIFIERS = [
//   {
//     id: 1,
//     slug: "wall-mounted-ro-uv-water-purifier",
//     category: "Domestic",
//     name: "Wall Mounted RO UV Water Purifier",
//     image: PRODUCT_IMAGES.RO_ROWATER,
//     description:
//       "Wall mounted RO UV water purifier designed for safe and hygienic drinking water by removing dissolved salts, bacteria and viruses.",

//     pricing: {
//       basePrice: 14500,
//       currency: "INR",
//       unit: "Unit",
//       minimumOrderQuantity: 1
//     },

//     specifications: {
//       purificationTechnology: "RO + UV",
//       mountingType: "Wall Mounted",
//       storageCapacity: "8–10 Litres",
//       suitableWaterSource: "Borewell / Municipal",
//       tdsHandling: "Up to 2000 ppm",
//       bodyMaterial: "Food Grade ABS",
//       powerRequirement: "230V AC, 50Hz"
//     },

//     safetyFeatures: [
//       "Auto Shut-Off",
//       "Low Pressure Protection",
//       "High TDS Protection",
//       "UV Disinfection Chamber"
//     ],

//     services: {
//       installation: { available: true },
//       amc: { available: true },
//       repair: { available: true, emergencySupport: true },
//       spareParts: { available: true },
//       warranty: { available: true, period: "12 Months" }
//     }
//   },

//   {
//     id: 2,
//     slug: "ro-uv-water-purifier",
//     category: "Domestic",
//     name: "RO UV Water Purifier",
//     image: PRODUCT_IMAGES.RO_ROUVWP,
//     description:
//       "Advanced RO UV water purifier with multi-stage filtration system ensuring clean, safe and mineral-balanced drinking water.",

//     pricing: {
//       basePrice: 12000,
//       currency: "INR",
//       unit: "Unit",
//       minimumOrderQuantity: 1
//     },

//     specifications: {
//       purificationTechnology: "RO + UV + Sediment + Carbon",
//       storageCapacity: "7–12 Litres",
//       tdsReduction: "Up to 95%",
//       suitableWaterSource: "Borewell / Municipal / Tanker",
//       mountingType: "Wall Mounted",
//       powerRequirement: "230V AC"
//     },

//     safetyFeatures: [
//       "Auto Flush System",
//       "Overheat Protection",
//       "Low Water Pressure Cut-Off"
//     ],

//     services: {
//       installation: { available: true },
//       amc: { available: true },
//       repair: { available: true },
//       spareParts: { available: true },
//       warranty: { available: true, period: "12 Months" }
//     }
//   },

//   {
//     id: 3,
//     slug: "white-ro-uv-water-purifier",
//     category: "Domestic",
//     name: "White RO UV Water Purifier",
//     image: PRODUCT_IMAGES.RO_WMROUVWP,
//     description:
//       "Stylish white RO UV water purifier suitable for modern kitchens with high purification efficiency.",

//     pricing: {
//       basePrice: 13500,
//       currency: "INR",
//       unit: "Unit"
//     },

//     specifications: {
//       purificationTechnology: "RO + UV",
//       color: "White",
//       storageCapacity: "8 Litres",
//       tdsHandling: "Up to 1800 ppm",
//       mountingType: "Wall Mounted",
//       filterStages: "5–7 Stages"
//     },

//     safetyFeatures: [
//       "Smart Tank Overflow Protection",
//       "UV Fail Alarm",
//       "Auto Power Off"
//     ],

//     services: {
//       installation: { available: true },
//       amc: { available: true },
//       repair: { available: true },
//       spareParts: { available: true },
//       warranty: { available: true, period: "12 Months" }
//     }
//   },

//   {
//     id: 4,
//     slug: "aquaguard-ro-water-purifier",
//     category: "Domestic",
//     name: "Aquaguard RO Water Purifier",
//     image: PRODUCT_IMAGES.RO_AGROWP,
//     description:
//       "Premium Aquaguard RO water purifier with advanced multi-stage purification technology for high TDS water.",

//     pricing: {
//       basePrice: 18500,
//       currency: "INR",
//       unit: "Unit"
//     },

//     specifications: {
//       brand: "Aquaguard",
//       purificationTechnology: "RO + UV + MTDS",
//       storageCapacity: "7–10 Litres",
//       tdsHandling: "Up to 2500 ppm",
//       installationType: "Wall Mounted / Table Top"
//     },

//     safetyFeatures: [
//       "Taste Adjuster (MTDS)",
//       "Energy Saving Mode",
//       "High TDS Alarm"
//     ],

//     services: {
//       installation: { available: true },
//       amc: { available: true },
//       repair: { available: true },
//       spareParts: { available: true },
//       warranty: { available: true, period: "12 Months" }
//     }
//   },

//   {
//     id: 5,
//     slug: "havells-pro-alkaline-water-purifier",
//     category: "Domestic",
//     name: "Havells Pro Alkaline Water Purifier",
//     image: PRODUCT_IMAGES.RO_HPALWP,
//     description:
//       "Advanced alkaline water purifier that enriches water with essential minerals and maintains optimal pH balance.",

//     pricing: {
//       basePrice: 21000,
//       currency: "INR",
//       unit: "Unit"
//     },

//     specifications: {
//       brand: "Havells",
//       purificationTechnology: "RO + UV + Alkaline",
//       filtrationStages: "8 Stages",
//       mineralEnrichment: "Copper + Zinc",
//       storageCapacity: "8 Litres",
//       suitableWaterSource: "High TDS Water"
//     },

//     safetyFeatures: [
//       "pH Balance Control",
//       "Auto Shut-Off",
//       "Low Pressure Protection"
//     ],

//     services: {
//       installation: { available: true },
//       amc: { available: true },
//       repair: { available: true },
//       spareParts: { available: true },
//       warranty: { available: true, period: "12 Months" }
//     }
//   },

//   {
//     id: 6,
//     slug: "aqua-touch-ro-water-purifier",
//     category: "Domestic",
//     name: "Aqua Touch RO Water Purifier",
//     image: PRODUCT_IMAGES.RO_ATRO,
//     description:
//       "Budget-friendly Aqua Touch RO water purifier suitable for home use with reliable multi-stage filtration.",

//     pricing: {
//       basePrice: 9500,
//       currency: "INR",
//       unit: "Unit"
//     },

//     specifications: {
//       brand: "Aqua Touch",
//       purificationTechnology: "RO + UV",
//       storageCapacity: "7–10 Litres",
//       mountingType: "Wall Mounted",
//       tdsHandling: "Up to 2000 ppm"
//     },

//     safetyFeatures: [
//       "Auto Start/Stop",
//       "Overflow Protection",
//       "Low Voltage Protection"
//     ],

//     services: {
//       installation: { available: true },
//       amc: { available: true },
//       repair: { available: true },
//       spareParts: { available: true },
//       warranty: { available: true, period: "12 Months" }
//     }
//   }
// ];



export const PRODUCT_IMAGES = {
  DOLPHIN_PUROSIS: import.meta.env.VITE_DOLPHIN_PUROSIS || "",
  AQUA_MARS: import.meta.env.VITE_AQUA_MARS || "",
  AQUA_PEARL: import.meta.env.VITE_AQUA_PEARL || "",
  AQUA_WATE_LILY: import.meta.env.VITE_AQUA_WATE_LILY || "",
  LX_ONE_TITANIUM: import.meta.env.VITE_LX_ONE_TITANIUM || "",
  AQUA_QUEEN: import.meta.env.VITE_AQUA_QUEEN || "",
};

export const RO_WATER_PURIFIERS = [
  {
    id: 1,
    slug: "dolphin-purosis-ro-aqua-grand-plus",
    category: "Domestic",
    name: "Dolphin Purosis RO Aqua Grand Plus",
    image: PRODUCT_IMAGES.DOLPHIN_PUROSIS,
    description:
      "Advanced 5-stage RO water purifier delivering pure and safe drinking water with high purification efficiency.",

    pricing: {
      basePrice: 11499,
      currency: "INR",
      unit: "Unit",
      originalPrice: 13299,
    },

    specifications: {
      purificationMethod: "RO",
      purificationStages: "5 Stages",
      storageTankCapacity: "11 Liters",
      purificationCapacity: "12–15 Liters / Hour",
    },

    services: {
      installation: { available: true, free: true },
      generalService: { available: true, frequency: "Once every 6 months (Free)" },
      warranty: { available: true, period: "1 Year" },
      customerSupport: "24/7 Customer Service",
    },
  },

  {
    id: 2,
    slug: "aqua-mars-ro-water-purifier",
    category: "Domestic",
    name: "Aqua Mars RO Water Purifier",
    image: PRODUCT_IMAGES.AQUA_MARS,
    description:
      "7-stage RO+UV+UF+Mineral Balance purification system ensuring safe, mineral-rich drinking water.",

    pricing: {
      basePrice: 9500,
      currency: "INR",
      unit: "Unit",
    },

    specifications: {
      purificationMethod: "RO + UV + UF + Mineral Balance",
      purificationStages: "7 Stages",
      storageTankCapacity: "10 Liters",
      purificationCapacity: "12–15 Liters / Hour",
    },

    services: {
      installation: { available: true, free: true },
      warranty: { available: true, period: "1 Year" },
      customerSupport: "24/7 Customer Service",
    },
  },

  {
    id: 3,
    slug: "aqua-pearl-ro-uv-alkaline",
    category: "Domestic",
    name: "Aqua Pearl RO UV Alkaline",
    image: PRODUCT_IMAGES.AQUA_PEARL,
    description:
      "7-stage RO + UV + Alkaline purification system providing healthy and pH-balanced drinking water.",

    pricing: {
      basePrice: 11300,
      currency: "INR",
      unit: "Unit",
    },

    specifications: {
      purificationMethod: "RO + UV + Alkaline",
      purificationStages: "7 Stages",
      storageTankCapacity: "10 Liters",
      purificationCapacity: "12 Liters / Hour",
    },

    services: {
      installation: { available: true, free: true },
      warranty: { available: true, period: "1 Year" },
      customerSupport: "24/7 Customer Service",
    },
  },

  {
    id: 4,
    slug: "aqua-wate-lily-ro-uv-uf-copper",
    category: "Domestic",
    name: "Aqua Wate Lily",
    image: PRODUCT_IMAGES.AQUA_WATE_LILY,
    description:
      "Premium 7-stage RO + UV + UF + Copper purification system with enhanced mineral retention.",

    pricing: {
      basePrice: 12000,
      currency: "INR",
      unit: "Unit",
    },

    specifications: {
      purificationMethod: "RO + UV + UF + Copper",
      purificationStages: "7 Stages",
      storageTankCapacity: "11 Liters",
      purificationCapacity: "13 Liters / Hour",
    },

    services: {
      installation: { available: true, free: true },
      warranty: { available: true, period: "1 Year" },
      customerSupport: "24/7 Customer Service",
    },
  },

  {
    id: 5,
    slug: "lx-one-titanium-series",
    category: "Domestic",
    name: "LX One Titanium Series",
    image: PRODUCT_IMAGES.LX_ONE_TITANIUM,
    description:
      "BIS Certified RO+UV+UF+TDS+Alkaline+Copper water purifier with 8L storage and advanced 7-stage purification.",

    pricing: {
      basePrice: 13200,
      currency: "INR",
      unit: "Unit",
    },

    specifications: {
      purificationMethod: "RO + UV + UF + TDS + Alkaline + Copper",
      purificationStages: "7 Stages",
      storageTankCapacity: "8 Liters",
      purificationCapacity: "13 Liters / Hour",
      certification: "BIS IS 16240:2023",
    },

    services: {
      installation: { available: true, free: true },
      warranty: { available: true, period: "1 Year" },
      customerSupport: "24/7 Customer Service",
    },
  },

  {
    id: 6,
    slug: "aqua-queen-ro-water-purifier",
    category: "Domestic",
    name: "Aqua Queen RO Water Purifier",
    image: PRODUCT_IMAGES.AQUA_QUEEN,
    description:
      "Reverse Osmosis water purifier with carbon filtration ensuring clean and safe drinking water for home use.",

    pricing: {
      basePrice: 6800,
      currency: "INR",
      unit: "Unit",
    },

    specifications: {
      purificationMethod: "RO + Carbon Filtration",
      purificationStages: "7 Stages",
      storageTankCapacity: "10 Liters",
    },

    services: {
      installation: { available: true, free: true },
      warranty: { available: true, period: "1 Year" },
      customerSupport: "24/7 Customer Service",
    },
  },
];