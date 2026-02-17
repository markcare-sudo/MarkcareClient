export const WATER_SOFTENING_PLANTS = [
  {
    id: 1,
    slug: "commercial-water-softening-plant",
    category: "Commercial",
    name: "Commercial Water Softening Plant",

    description:
      "Commercial water softening plant designed to remove hardness-causing minerals like calcium and magnesium from water for hotels, hospitals and commercial buildings.",

    pricing: {
      basePrice: 180000,
      currency: "INR",
      unit: "Plant",
      minimumOrderQuantity: 1
    },

    specifications: {
      plantType: "Ion Exchange Softener",
      capacityLPH: "1,000 – 20,000",
      hardnessRemovalEfficiency: "Up to 99%",
      resinType: "Cation Exchange Resin",
      regenerationType: "Manual / Automatic",
      installationType: "Skid Mounted",
      operatingVoltage: "230V / 415V",
      phase: "Single / Three Phase"
    },

    safetyFeatures: [
      "Auto Regeneration Control",
      "Pressure Relief Valve",
      "Overflow Protection",
      "Brine Tank Safety System"
    ],

    services: {
      installation: { available: true },
      amc: { available: true },
      repair: { available: true },
      resinReplacement: { available: true },
      spareParts: { available: true },
      warranty: { available: true, period: "12 Months" }
    }
  },

  {
    id: 2,
    slug: "softener-water-treatment-plant",
    category: "Industrial",
    name: "Softener Water Treatment Plant",

    description:
      "Industrial softener water treatment plant engineered to reduce water hardness and protect boilers, cooling towers and pipelines from scaling.",

    pricing: {
      basePrice: 250000,
      currency: "INR",
      unit: "Plant"
    },

    specifications: {
      plantType: "Industrial Water Softener",
      capacityLPH: "2,000 – 50,000",
      hardnessLevelInput: "Up to 1000 ppm",
      outputHardness: "< 5 ppm",
      resinType: "High Capacity Cation Resin",
      regenerationMode: "Automatic",
      installationType: "MS / FRP / SS Vessel"
    },

    safetyFeatures: [
      "Auto Backwash System",
      "Pressure Monitoring",
      "Brine Level Indicator"
    ],

    services: {
      installation: { available: true },
      amc: { available: true },
      repair: { available: true, emergencySupport: true },
      inspection: { available: true },
      spareParts: { available: true },
      warranty: { available: true, period: "12 Months" }
    }
  },

  {
    id: 3,
    slug: "softener-water-treatment-plant-automatic",
    category: "Industrial",
    name: "Softener Water Treatment Plant (Automatic)",

    description:
      "Fully automatic softener water treatment plant with advanced control valve system for continuous and efficient hardness removal.",

    pricing: {
      basePrice: 300000,
      currency: "INR",
      unit: "Plant"
    },

    specifications: {
      plantType: "Automatic Water Softener",
      capacityLPH: "5,000 – 40,000",
      controlValveType: "Multiport Automatic Valve",
      regenerationCycle: "Time Based / Volume Based",
      vesselMaterial: "FRP / MS / SS",
      phase: "Single / Three Phase"
    },

    safetyFeatures: [
      "Auto Shut-Off",
      "Over Pressure Protection",
      "Brine Tank Overflow Protection"
    ],

    services: {
      installation: { available: true },
      amc: { available: true },
      resinReplacement: { available: true },
      repair: { available: true },
      spareParts: { available: true },
      warranty: { available: true, period: "18 Months" }
    }
  },

  {
    id: 4,
    slug: "industrial-sewage-water-treatment-plant-operation-maintenance",
    category: "Service",
    name: "Industrial Sewage Water Treatment Plant Operation & Maintenance",

    description:
      "Comprehensive operation and maintenance (O&M) services for industrial sewage water treatment plants ensuring continuous performance and compliance with pollution control standards.",

    pricing: {
      basePrice: 50000,
      currency: "INR",
      unit: "Month"
    },

    specifications: {
      serviceType: "Operation & Maintenance",
      coverage: "Complete STP System",
      operatorSupport: "Skilled Technicians",
      monitoring: "Daily / Weekly Reporting",
      compliance: "PCB Norms",
      responseTime: "24–48 Hours"
    },

    services: {
      plantOperation: { available: true },
      preventiveMaintenance: { available: true },
      sludgeManagement: { available: true },
      emergencySupport: { available: true },
      spareParts: { available: true },
      warranty: { available: false }
    }
  }
];
