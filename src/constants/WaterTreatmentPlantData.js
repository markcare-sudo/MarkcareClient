export const PRODUCT_IMAGES = {
  WATERTREATMENT_COMMERCIAL: import.meta.env.VITE_WATERTREATMENT_COMMERCIAL || "",
  WATERTREATMENT_INDUSTRIAL_WTP: import.meta.env.VITE_WATERTREATMENT_INDUSTRIAL_WTP || "",
  WATERTREATMENT_IRON_REMOVAL: import.meta.env.VITE_WATERTREATMENT_IRON_REMOVAL || "",
  WATERTREATMENT_ISWTP: import.meta.env.VITE_WATERTREATMENT_ISWTP || "",
  WATERTREATMENT_IWTP_REPAIR_SERVICE: import.meta.env.VITE_WATERTREATMENT_IWTP_REPAIR_SERVICE || "",
  WATERTREATMENT_IWTP: import.meta.env.VITE_WATERTREATMENT_IWTP || "",
  WATERTREATMENT_IWWTP: import.meta.env.VITE_WATERTREATMENT_IWWTP || "",
  WATERTREATMENT_RO_WTP: import.meta.env.VITE_WATERTREATMENT_RO_WTP || "",
  WATERTREATMENT_WTP: import.meta.env.VITE_WATERTREATMENT_WTP || "",
  WATERTREATMENT_STP:import.meta.env.VITE_WATERTREATMENT_WTP || "",
    WATERTREATMENT_ETP:import.meta.env.VITE_WATERTREATMENT_WTP || "",
};

export const WATER_TREATMENT_PLANTS = [
  {
    id: 1,
    slug: "industrial-water-treatment-plant",
    category: "Industrial",
    name: "Industrial Water Treatment Plant",
    image: PRODUCT_IMAGES.WATERTREATMENT_INDUSTRIAL_WTP,
    description:
      "Industrial water treatment plant designed to remove suspended solids, dissolved salts and impurities from raw water for industrial applications.",

    pricing: {
      basePrice: 450000,
      currency: "INR",
      unit: "Plant",
      minimumOrderQuantity: 1
    },

    specifications: {
      plantType: "Multi-Stage Filtration",
      capacityLPH: "10,000 – 1,00,000",
      automationGrade: "Automatic / Semi-Automatic",
      filtrationSystem: "Sand Filter + Carbon Filter + Softener",
      operatingVoltage: "415V",
      frequency: "50Hz",
      phase: "Three Phase",
      installationType: "Skid Mounted",
      material: "MS / FRP / SS",
      waterSource: "Borewell / Municipal"
    },

    safetyFeatures: [
      "Pressure Relief Valve",
      "Auto Shut-Off System",
      "Overload Protection",
      "Leak Detection Sensor"
    ],

    services: {
      installation: {
        available: true,
        includes: [
          "Site Inspection",
          "Foundation Setup",
          "Plant Installation",
          "Electrical Integration",
          "System Testing"
        ]
      },

      amc: {
        available: true,
        packages: [
          { type: "Standard", yearlyCost: 25000 },
          { type: "Comprehensive", yearlyCost: 45000 }
        ]
      },

      repair: {
        available: true,
        responseTime: "24–48 Hours",
        emergencySupport: true
      },

      inspection: {
        available: true,
        compliance: "Industrial Water Quality Standards"
      },

      spareParts: {
        available: true,
        parts: [
          "Filter Media",
          "Valves",
          "Pressure Gauges",
          "Pumps"
        ]
      },

      warranty: {
        available: true,
        period: "12 Months"
      }
    }
  },

  {
    id: 2,
    slug: "industrial-waste-water-treatment-plant",
    category: "Industrial",
    name: "Industrial Waste Water Treatment Plant",
    image: PRODUCT_IMAGES.WATERTREATMENT_IWWTP,
    description:
      "Effluent treatment plant designed to treat industrial wastewater before discharge or reuse in compliance with environmental standards.",

    pricing: {
      basePrice: 650000,
      currency: "INR",
      unit: "Plant",
      minimumOrderQuantity: 1
    },

    specifications: {
      plantType: "ETP / Biological Treatment",
      capacityLPH: "5,000 – 50,000",
      automationGrade: "Fully Automatic",
      sludgeManagement: "Sludge Dewatering System",
      dischargeStandard: "CPCB Compliant",
      phase: "Three Phase",
      operatingVoltage: "415V"
    },

    safetyFeatures: [
      "Chemical Dosing Control",
      "Emergency Shutdown System",
      "Overflow Protection"
    ],

    services: {
      installation: { available: true },
      amc: { available: true },
      repair: { available: true, emergencySupport: true },
      inspection: { available: true },
      spareParts: { available: true },
      warranty: { available: true, period: "18 Months" }
    }
  },

  {
    id: 3,
    slug: "industrial-salt-water-treatment-plant",
    category: "Industrial",
    name: "Industrial Salt Water Treatment Plant",
    image: PRODUCT_IMAGES.WATERTREATMENT_RO_WTP,
    description:
      "Desalination plant designed for high TDS salt water treatment using advanced reverse osmosis membrane systems.",

    pricing: {
      basePrice: 800000,
      currency: "INR",
      unit: "Plant"
    },

    specifications: {
      plantType: "RO Desalination",
      capacityLPH: "5,000 – 30,000",
      tdsHandling: "Up to 35,000 ppm",
      recoveryRate: "50–75%",
      membraneType: "High Pressure RO Membrane",
      phase: "Three Phase",
      operatingVoltage: "415V"
    },

    safetyFeatures: [
      "High Pressure Protection",
      "Auto Flush System",
      "Leak Detection"
    ],

    services: {
      installation: { available: true },
      amc: { available: true },
      repair: { available: true },
      modernization: { available: true },
      spareParts: { available: true },
      warranty: { available: true, period: "24 Months" }
    }
  },

  {
    id: 4,
    slug: "industrial-ro-water-treatment-plant",
    category: "Industrial",
    name: "Industrial RO Water Treatment Plant",
    image: PRODUCT_IMAGES.WATERTREATMENT_COMMERCIAL,
    description:
      "Reverse osmosis based water treatment plant for removing dissolved salts, heavy metals and contaminants.",

    pricing: {
      basePrice: 550000,
      currency: "INR",
      unit: "Plant"
    },

    specifications: {
      plantType: "Reverse Osmosis",
      capacityLPH: "2,000 – 50,000",
      tdsReduction: "Up to 95%",
      membraneType: "Thin Film Composite",
      automationGrade: "Automatic",
      phase: "Three Phase"
    },

    safetyFeatures: [
      "Low Pressure Cut-Off",
      "Auto Shutdown System",
      "High TDS Alarm"
    ],

    services: {
      installation: { available: true },
      amc: { available: true },
      repair: { available: true },
      inspection: { available: true },
      spareParts: { available: true },
      warranty: { available: true, period: "12 Months" }
    }
  },

  {
    id: 5,
    slug: "iron-removal-industrial-water-treatment-plant",
    category: "Industrial",
    name: "Iron Removal Industrial Water Treatment Plant",
    image: PRODUCT_IMAGES.WATERTREATMENT_IRON_REMOVAL,
    description:
      "Specialized filtration plant for removal of iron and manganese from groundwater sources.",

    pricing: {
      basePrice: 300000,
      currency: "INR",
      unit: "Plant"
    },

    specifications: {
      plantType: "Iron Removal Filtration",
      capacityLPH: "5,000 – 40,000",
      ironRemovalEfficiency: "Up to 99%",
      filtrationType: "Pressure Sand Filter",
      automationGrade: "Semi-Automatic"
    },

    safetyFeatures: [
      "Backwash Protection",
      "Pressure Monitoring System"
    ],

    services: {
      installation: { available: true },
      mediaReplacement: { available: true },
      repair: { available: true },
      inspection: { available: true },
      warranty: { available: true, period: "12 Months" }
    }
  },

  {
    id: 6,
    slug: "industrial-water-treatment-plant-repair-service",
    category: "Service",
    name: "Industrial Water Treatment Plant Repair & Service",
    image: PRODUCT_IMAGES.WATERTREATMENT_IWTP_REPAIR_SERVICE,
    description:
      "Comprehensive repair and maintenance services for all types of industrial water treatment plants.",

    pricing: {
      basePrice: 15000,
      currency: "INR",
      unit: "Service"
    },

    specifications: {
      serviceType: "On-Site / Remote",
      responseTime: "24–48 Hours",
      coverageArea: "Pan India"
    },

    services: {
      amc: { available: true },
      emergencyRepair: { available: true },
      inspection: { available: true },
      spareParts: { available: true },
      warranty: { available: false }
    }
  },

  {
    id: 7,
    slug: "media-change-industrial-water-treatment-plant",
    category: "Service",
    name: "Media Change Industrial Water Treatment Plant",
    image: PRODUCT_IMAGES.WATERTREATMENT_IWTP_REPAIR_SERVICE,
    description:
      "Professional filter media replacement service for sand filters, carbon filters and resin systems.",

    pricing: {
      basePrice: 20000,
      currency: "INR",
      unit: "Service"
    },

    specifications: {
      serviceType: "Filter Media Replacement",
      mediaType: "Sand / Carbon / Resin",
      serviceTime: "1–2 Days",
      siteType: "Industrial Plants"
    },

    services: {
      inspection: { available: true },
      mediaReplacement: { available: true },
      spareParts: { available: true }
    }
  },

  {
    id: 8,
    slug: "effluent-treatment-plant-etp",
    category: "Industrial",
    name: "Effluent Treatment Plant (ETP)",
    image: PRODUCT_IMAGES.WATERTREATMENT_ETP,
    description:
      "Effluent Treatment Plant designed to treat industrial wastewater from chemical, textile, pharma and manufacturing industries before discharge as per CPCB norms.",

    pricing: {
      basePrice: 700000,
      currency: "INR",
      unit: "Plant",
      minimumOrderQuantity: 1
    },

    specifications: {
      plantType: "Chemical & Biological Treatment",
      capacityKLD: "5 – 500 KLD",
      treatmentStages: "Preliminary / Primary / Secondary / Tertiary",
      automationGrade: "Semi / Fully Automatic",
      dischargeStandard: "CPCB Compliant",
      sludgeHandling: "Filter Press / Sludge Drying Bed",
      operatingVoltage: "415V",
      phase: "Three Phase"
    },

    safetyFeatures: [
      "Chemical Dosing Control System",
      "Emergency Shutdown",
      "Overflow Protection",
      "pH Monitoring System"
    ],

    services: {
      installation: { available: true },
      amc: { available: true },
      repair: { available: true, emergencySupport: true },
      inspection: { available: true },
      spareParts: { available: true },
      warranty: { available: true, period: "18 Months" }
    }
  },

  {
    id: 9,
    slug: "sewage-treatment-plant-stp",
    category: "Industrial",
    name: "Sewage Treatment Plant (STP)",
    image: PRODUCT_IMAGES.WATERTREATMENT_STP,
    description:
      "Sewage Treatment Plant designed to treat domestic and commercial sewage water using advanced biological treatment technologies for safe discharge or reuse.",

    pricing: {
      basePrice: 650000,
      currency: "INR",
      unit: "Plant",
      minimumOrderQuantity: 1
    },

    specifications: {
      plantType: "Biological Treatment",
      capacityKLD: "1 – 900 KLD",
      technology: "MBBR / SBR / MBR / SAFF",
      treatedWaterUse: "Gardening / Flushing / Cooling",
      automationGrade: "Automatic",
      operatingVoltage: "415V",
      phase: "Three Phase"
    },

    safetyFeatures: [
      "Emergency Overflow System",
      "Blower Protection",
      "Sludge Level Monitoring",
      "Auto Alarm System"
    ],

    services: {
      installation: { available: true },
      amc: { available: true },
      repair: { available: true },
      inspection: { available: true },
      spareParts: { available: true },
      warranty: { available: true, period: "18 Months" }
    }
  },
];









// export const WATER_TREATMENT_PLANTS = [

//   // =====================================================
//   // 1️⃣ INDUSTRIAL WATER TREATMENT PLANT (WTP)
//   // =====================================================

//   {
//     id: 1,
//     slug: "industrial-water-treatment-plant",
//     category: "Industrial",
//     name: "Industrial Water Treatment Plant",
//     image: PRODUCT_IMAGES.WATERTREATMENT_INDUSTRIAL_WTP,
//     description:
//       "Multi-stage industrial water purification system designed to remove suspended solids, hardness, iron and dissolved impurities.",

//     pricing: {
//       basePrice: 450000,
//       currency: "INR",
//       unit: "Plant",
//       minimumOrderQuantity: 1
//     },

//     specifications: {
//       capacityLPH: "500 – 300000 LPH",
//       material: "MS / SS-304 / SS-316 / FRP",
//       automationGrade: "Manual / Semi / Fully Automatic (PLC)",
//       voltage: "415V",
//       phase: "Three Phase"
//     },

//     safetyFeatures: [
//       "Pressure Relief Valve",
//       "High Pressure Cut-Off",
//       "Dry Run Protection",
//       "Auto Shutdown System"
//     ],

//     services: {
//       installation: { available: true },
//       amc: { available: true },
//       repair: { available: true, responseTime: "24–48 Hours" },
//       spareParts: { available: true },
//       warranty: { available: true, period: "12 Months" }
//     }
//   },

//   // =====================================================
//   // 2️⃣ INDUSTRIAL RO PLANT
//   // =====================================================

//   {
//     id: 2,
//     slug: "industrial-ro-plant",
//     category: "Industrial",
//     name: "Industrial RO Plant",
//     image: PRODUCT_IMAGES.INDUSTRIAL_RO_PLANT,
//     description:
//       "High-pressure reverse osmosis system removing 95–99% TDS for industrial applications.",

//     pricing: {
//       basePrice: 500000,
//       currency: "INR",
//       unit: "Plant",
//       minimumOrderQuantity: 1
//     },

//     specifications: {
//       capacityLPH: "1000 – 100000 LPH",
//       tdsRemoval: "95–99%",
//       membraneType: "High Pressure RO Membrane",
//       pumpType: "High Pressure Pump"
//     },

//     safetyFeatures: [
//       "Low Pressure Protection",
//       "High TDS Alarm",
//       "Auto Flush System"
//     ],

//     services: {
//       installation: { available: true },
//       amc: { available: true },
//       repair: { available: true },
//       warranty: { available: true, period: "12 Months" }
//     }
//   },

//   // =====================================================
//   // 3️⃣ COMMERCIAL RO PLANT
//   // =====================================================

//   {
//     id: 3,
//     slug: "commercial-ro-plant",
//     category: "Commercial",
//     name: "Commercial RO Plant",
//     image: PRODUCT_IMAGES.COMMERCIAL_RO_PLANT,
//     description:
//       "RO plant for hotels, hospitals, institutions and commercial establishments.",

//     pricing: {
//       basePrice: 180000,
//       currency: "INR",
//       unit: "Plant",
//       minimumOrderQuantity: 1
//     },

//     specifications: {
//       tdsReduction: "90–95%",
//       automation: "Automatic",
//       application: "Hotels / Hospitals / Schools"
//     },

//     safetyFeatures: ["Auto Shut-Off", "TDS Monitoring"],

//     services: {
//       installation: { available: true },
//       amc: { available: true },
//       warranty: { available: true, period: "12 Months" }
//     }
//   },

//   // =====================================================
//   // 4️⃣ SEWAGE TREATMENT PLANT (STP)
//   // =====================================================

//   {
//     id: 4,
//     slug: "sewage-treatment-plant",
//     category: "Industrial",
//     name: "Sewage Treatment Plant (STP)",
//     image: PRODUCT_IMAGES.SEWAGE_TREATMENT_PLANT,
//     description:
//       "STP plant removing biological, chemical and physical contaminants from sewage water.",

//     pricing: {
//       basePrice: 650000,
//       currency: "INR",
//       unit: "Plant",
//       minimumOrderQuantity: 1
//     },

//     specifications: {
//       capacityKLD: "1 – 900 KLD",
//       technologies: "EA / SAFF / SBR / MBBR / MBR",
//       construction: "Civil & Mechanical"
//     },

//     safetyFeatures: ["Emergency Overflow System"],

//     services: {
//       installation: { available: true },
//       amc: { available: true },
//       repair: { available: true }
//     }
//   },

//   // =====================================================
//   // 5️⃣ EFFLUENT TREATMENT PLANT (ETP)
//   // =====================================================

//   {
//     id: 5,
//     slug: "effluent-treatment-plant",
//     category: "Industrial",
//     name: "Effluent Treatment Plant (ETP)",
//     image: PRODUCT_IMAGES.EFFLUENT_TREATMENT_PLANT,
//     description:
//       "Industrial effluent treatment plant compliant with pollution control norms.",

//     pricing: {
//       basePrice: 700000,
//       currency: "INR",
//       unit: "Plant",
//       minimumOrderQuantity: 1
//     },

//     specifications: {
//       capacityKLD: "1 – 500 KLD",
//       treatmentStages: "Preliminary / Primary / Secondary / Tertiary"
//     },

//     services: {
//       installation: { available: true },
//       amc: { available: true }
//     }
//   },

//   // =====================================================
//   // 6️⃣ ZERO LIQUID DISCHARGE SYSTEM
//   // =====================================================

//   {
//     id: 6,
//     slug: "zero-liquid-discharge-system",
//     category: "Industrial",
//     name: "Zero Liquid Discharge (ZLD) System",
//     image: PRODUCT_IMAGES.ZERO_LIQUID_DISCHARGE,
//     description:
//       "Advanced wastewater recovery system ensuring zero discharge of liquid waste.",

//     pricing: {
//       basePrice: 900000,
//       currency: "INR",
//       unit: "Plant",
//       minimumOrderQuantity: 1
//     },

//     specifications: {
//       recoveryRate: "Up to 95%",
//       integration: "RO + Evaporator + Crystallizer"
//     }
//   },

//   // =====================================================
//   // 7️⃣ DM PLANT
//   // =====================================================

//   {
//     id: 7,
//     slug: "dm-plant",
//     category: "Industrial",
//     name: "De-Mineralized (DM) Plant",
//     image: PRODUCT_IMAGES.DM_PLANT,
//     description:
//       "Ion exchange system producing chemically pure water.",

//     pricing: {
//       basePrice: 400000,
//       currency: "INR",
//       unit: "Plant",
//       minimumOrderQuantity: 1
//     },

//     specifications: {
//       capacityLPH: "100 – 15000 LPH",
//       type: "Two Bed / Mixed Bed"
//     }
//   },

//   // =====================================================
//   // 8️⃣ ULTRA FILTRATION PLANT
//   // =====================================================

//   {
//     id: 8,
//     slug: "ultra-filtration-plant",
//     category: "Industrial",
//     name: "Ultra Filtration (UF) Plant",
//     image: PRODUCT_IMAGES.ULTRA_FILTRATION,
//     description:
//       "Membrane filtration system removing suspended solids and bacteria.",

//     pricing: {
//       basePrice: 300000,
//       currency: "INR",
//       unit: "Plant",
//       minimumOrderQuantity: 1
//     }
//   },

//   // =====================================================
//   // 9️⃣ DOMESTIC WATER SOFTENER
//   // =====================================================

//   {
//     id: 9,
//     slug: "domestic-water-softener",
//     category: "Domestic",
//     name: "Domestic Water Softener",
//     image: PRODUCT_IMAGES.DOMESTIC_WATER_SOFTENER,
//     description:
//       "FRP vessel softener removing calcium and magnesium to prevent scaling.",

//     pricing: {
//       basePrice: 25000,
//       currency: "INR",
//       unit: "Unit",
//       minimumOrderQuantity: 1
//     },

//     specifications: {
//       regenerationType: "Automatic",
//       application: "Home / Apartments"
//     }
//   },

//   // =====================================================
//   // 🔟 COMMERCIAL WATER SOFTENER
//   // =====================================================

//   {
//     id: 10,
//     slug: "commercial-water-softener",
//     category: "Commercial",
//     name: "Commercial Water Softener",
//     image: PRODUCT_IMAGES.COMMERCIAL_WATER_SOFTENER,
//     description:
//       "Softening system for commercial and industrial applications.",

//     pricing: {
//       basePrice: 85000,
//       currency: "INR",
//       unit: "Unit",
//       minimumOrderQuantity: 1
//     }
//   },

//   // =====================================================
//   // 1️⃣1️⃣ SAND FILTER
//   // =====================================================

//   {
//     id: 11,
//     slug: "sand-filter",
//     category: "Industrial",
//     name: "Sand Filter",
//     image: PRODUCT_IMAGES.SAND_FILTER,
//     description:
//       "Three-layer sand media filter removing mud, silt and sediments.",

//     pricing: {
//       basePrice: 45000,
//       currency: "INR",
//       unit: "Unit",
//       minimumOrderQuantity: 1
//     }
//   },

//   // =====================================================
//   // 1️⃣2️⃣ ACTIVATED CARBON FILTER
//   // =====================================================

//   {
//     id: 12,
//     slug: "activated-carbon-filter",
//     category: "Industrial",
//     name: "Activated Carbon Filter",
//     image: PRODUCT_IMAGES.ACTIVATED_CARBON_FILTER,
//     description:
//       "Removes chlorine, odor, color and organic contaminants.",

//     pricing: {
//       basePrice: 55000,
//       currency: "INR",
//       unit: "Unit",
//       minimumOrderQuantity: 1
//     }
//   },

//   // =====================================================
//   // 1️⃣3️⃣ IRON REMOVER
//   // =====================================================

//   {
//     id: 13,
//     slug: "iron-remover",
//     category: "Industrial",
//     name: "Iron Remover",
//     image: PRODUCT_IMAGES.IRON_REMOVER,
//     description:
//       "FRP based iron filter system preventing staining and pipeline clogging.",

//     pricing: {
//       basePrice: 65000,
//       currency: "INR",
//       unit: "Unit",
//       minimumOrderQuantity: 1
//     },

//     specifications: {
//       capacityLPH: "500 – 15000 LPH"
//     }
//   }

// ];