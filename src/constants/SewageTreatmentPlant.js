export const SEWAGE_TREATMENT_PLANTS = [
  {
    id: 1,
    slug: "automatic-industrial-sewage-treatment-plant",
    category: "Industrial",
    name: "Automatic Industrial Sewage Treatment Plant",

    description:
      "Fully automatic industrial sewage treatment plant designed to treat wastewater using biological and mechanical processes before safe discharge or reuse.",

    pricing: {
      basePrice: 900000,
      currency: "INR",
      unit: "Plant",
      minimumOrderQuantity: 1
    },

    specifications: {
      plantType: "Automatic STP",
      treatmentProcess: "MBBR / SBR / Activated Sludge",
      capacityKLD: "50 – 500 KLD",
      automationGrade: "Fully Automatic",
      dischargeStandard: "CPCB / Pollution Control Board Norms",
      operatingVoltage: "415V",
      phase: "Three Phase",
      installationType: "Civil / Skid Mounted"
    },

    safetyFeatures: [
      "Auto Level Sensors",
      "Blower Overload Protection",
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
    id: 2,
    slug: "industrial-sewage-water-treatment-plant",
    category: "Industrial",
    name: "Industrial Sewage Water Treatment Plant",

    description:
      "Industrial sewage water treatment plant engineered to treat wastewater from factories and industrial units for safe disposal or recycling.",

    pricing: {
      basePrice: 850000,
      currency: "INR",
      unit: "Plant"
    },

    specifications: {
      plantType: "Biological Sewage Treatment",
      capacityKLD: "30 – 300 KLD",
      treatmentTechnology: "MBBR / SBR",
      sludgeHandling: "Sludge Dewatering System",
      dischargeStandard: "PCB Approved",
      phase: "Three Phase"
    },

    safetyFeatures: [
      "Chemical Dosing Control",
      "Overload Protection",
      "High Level Alarm"
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
    id: 3,
    slug: "industrial-sewage-treatment-plant",
    category: "Industrial",
    name: "Industrial Sewage Treatment Plant",

    description:
      "Robust industrial sewage treatment plant designed for continuous wastewater treatment in manufacturing and processing industries.",

    pricing: {
      basePrice: 800000,
      currency: "INR",
      unit: "Plant"
    },

    specifications: {
      plantType: "STP",
      capacityKLD: "25 – 250 KLD",
      treatmentProcess: "Activated Sludge / MBBR",
      automationGrade: "Semi-Automatic / Automatic",
      installationType: "Civil Structure",
      powerRequirement: "415V, 50Hz"
    },

    safetyFeatures: [
      "Pressure Monitoring",
      "Auto Shut-Off",
      "Blower Protection System"
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
    id: 4,
    slug: "effluent-treatment-plant",
    category: "Industrial",
    name: "Effluent Treatment Plant",

    description:
      "Effluent treatment plant (ETP) designed to treat industrial wastewater containing chemicals, oils and toxic substances before discharge.",

    pricing: {
      basePrice: 950000,
      currency: "INR",
      unit: "Plant"
    },

    specifications: {
      plantType: "ETP",
      capacityKLD: "20 – 500 KLD",
      treatmentStages: "Primary + Secondary + Tertiary",
      sludgeManagement: "Filter Press / Sludge Drying Beds",
      dischargeStandard: "CPCB Compliant",
      phase: "Three Phase"
    },

    safetyFeatures: [
      "Chemical Storage Safety",
      "Emergency Stop System",
      "Overflow Protection",
      "PH Monitoring System"
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
    id: 5,
    slug: "commercial-sewage-treatment-plant",
    category: "Commercial",
    name: "Commercial Sewage Treatment Plant",

    description:
      "Commercial sewage treatment plant suitable for hotels, apartments, hospitals and commercial complexes.",

    pricing: {
      basePrice: 600000,
      currency: "INR",
      unit: "Plant"
    },

    specifications: {
      plantType: "Compact STP",
      capacityKLD: "10 – 100 KLD",
      treatmentProcess: "MBBR / SBR",
      installationType: "Skid Mounted / Underground",
      automationGrade: "Automatic"
    },

    safetyFeatures: [
      "Level Sensor Protection",
      "Auto Blower Control",
      "Overflow Alarm"
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
    id: 6,
    slug: "domestic-sewage-treatment-plant",
    category: "Domestic",
    name: "Domestic Sewage Treatment Plant",

    description:
      "Compact domestic sewage treatment plant designed for residential villas, small apartments and housing societies.",

    pricing: {
      basePrice: 350000,
      currency: "INR",
      unit: "Plant"
    },

    specifications: {
      plantType: "Domestic STP",
      capacityKLD: "5 – 50 KLD",
      treatmentProcess: "Bio Filter / MBBR",
      installationType: "Underground / Compact Modular",
      powerRequirement: "Single Phase / Three Phase"
    },

    safetyFeatures: [
      "Low Power Consumption System",
      "Auto Shut-Off",
      "Odor Control System"
    ],

    services: {
      installation: { available: true },
      amc: { available: true },
      repair: { available: true },
      inspection: { available: true },
      spareParts: { available: true },
      warranty: { available: true, period: "12 Months" }
    }
  }
];
