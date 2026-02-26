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
  }
];
