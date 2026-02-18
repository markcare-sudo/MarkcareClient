export const AIR_CONDITIONING_SYSTEMS = [
  {
    id: 1,
    slug: "industrial-central-air-conditioning-system",
    category: "Industrial",
    name: "Industrial Central Air Conditioning System",

    description:
      "High-capacity central air conditioning system designed for factories, warehouses, and large industrial facilities with continuous cooling requirements.",

    pricing: {
      basePrice: 1500000,
      currency: "INR",
      unit: "System",
      minimumOrderQuantity: 1
    },

    specifications: {
      acType: "Central AC",
      capacityTR: "20 – 200 TR",
      compressorType: "Screw / Scroll",
      refrigerant: "R410A / R134A",
      powerRequirement: "415V, Three Phase",
      airflowSystem: "Ducted",
      controlSystem: "Fully Automatic PLC Based"
    },

    safetyFeatures: [
      "High Pressure Cut-Off",
      "Low Pressure Protection",
      "Overload Protection",
      "Emergency Shutdown System"
    ],

    services: {
      installation: { available: true },
      amc: { available: true },
      repair: { available: true, emergencySupport: true },
      inspection: { available: true },
      gasRefilling: { available: true },
      spareParts: { available: true },
      warranty: { available: true, period: "24 Months" }
    }
  },

  {
    id: 2,
    slug: "commercial-ductable-air-conditioner",
    category: "Commercial",
    name: "Commercial Ductable Air Conditioner",

    description:
      "Ductable air conditioning system ideal for offices, showrooms, hospitals, and commercial complexes for uniform air distribution.",

    pricing: {
      basePrice: 280000,
      currency: "INR",
      unit: "Unit"
    },

    specifications: {
      acType: "Ductable AC",
      capacityTR: "3 – 25 TR",
      compressorType: "Scroll",
      refrigerant: "R410A",
      airflow: "High Static Pressure",
      phase: "Single / Three Phase"
    },

    safetyFeatures: [
      "Thermal Overload Protection",
      "Auto Restart",
      "Voltage Protection"
    ],

    services: {
      installation: { available: true },
      amc: { available: true },
      repair: { available: true },
      inspection: { available: true },
      gasRefilling: { available: true },
      warranty: { available: true, period: "18 Months" }
    }
  },

  {
    id: 3,
    slug: "vrv-vrf-air-conditioning-system",
    category: "Commercial",
    name: "VRV / VRF Air Conditioning System",

    description:
      "Energy-efficient VRV/VRF air conditioning system suitable for multi-floor buildings, IT parks, hotels and commercial spaces.",

    pricing: {
      basePrice: 450000,
      currency: "INR",
      unit: "System"
    },

    specifications: {
      acType: "VRV / VRF",
      capacityTR: "5 – 100 TR",
      refrigerant: "R410A",
      inverterTechnology: "Yes",
      controlSystem: "Smart Digital Control",
      energyEfficiency: "High COP"
    },

    safetyFeatures: [
      "Auto Leak Detection",
      "Compressor Protection",
      "Power Failure Auto Restart"
    ],

    services: {
      installation: { available: true },
      amc: { available: true },
      repair: { available: true, emergencySupport: true },
      inspection: { available: true },
      gasRefilling: { available: true },
      warranty: { available: true, period: "24 Months" }
    }
  },

  {
    id: 4,
    slug: "cassette-air-conditioner",
    category: "Commercial",
    name: "Cassette Air Conditioner",

    description:
      "Ceiling-mounted cassette AC providing 360° airflow, ideal for offices, restaurants and retail stores.",

    pricing: {
      basePrice: 95000,
      currency: "INR",
      unit: "Unit"
    },

    specifications: {
      acType: "Cassette AC",
      capacityTR: "1.5 – 4 TR",
      refrigerant: "R410A",
      airflow: "4-Way / 360 Degree",
      phase: "Single Phase"
    },

    safetyFeatures: [
      "Auto Restart",
      "Voltage Protection",
      "Compressor Safety Control"
    ],

    services: {
      installation: { available: true },
      amc: { available: true },
      repair: { available: true },
      inspection: { available: true },
      gasRefilling: { available: true },
      warranty: { available: true, period: "12 Months" }
    }
  },

  {
    id: 5,
    slug: "split-air-conditioner",
    category: "Domestic",
    name: "Split Air Conditioner",

    description:
      "Energy-efficient split air conditioner for homes, apartments and small offices with inverter technology options.",

    pricing: {
      basePrice: 38000,
      currency: "INR",
      unit: "Unit"
    },

    specifications: {
      acType: "Split AC",
      capacityTon: "1 – 2 Ton",
      compressorType: "Rotary / Inverter",
      refrigerant: "R32 / R410A",
      energyRating: "3 Star / 5 Star",
      phase: "Single Phase"
    },

    safetyFeatures: [
      "Stabilizer-Free Operation",
      "Auto Restart",
      "Compressor Protection"
    ],

    services: {
      installation: { available: true },
      amc: { available: true },
      repair: { available: true },
      inspection: { available: true },
      gasRefilling: { available: true },
      warranty: { available: true, period: "12 Months" }
    }
  },

  {
    id: 6,
    slug: "window-air-conditioner",
    category: "Domestic",
    name: "Window Air Conditioner",

    description:
      "Compact and affordable window air conditioner suitable for small rooms and residential spaces.",

    pricing: {
      basePrice: 28000,
      currency: "INR",
      unit: "Unit"
    },

    specifications: {
      acType: "Window AC",
      capacityTon: "0.75 – 2 Ton",
      refrigerant: "R32",
      energyRating: "3 Star / 5 Star",
      phase: "Single Phase"
    },

    safetyFeatures: [
      "Auto Restart",
      "Overheat Protection",
      "Voltage Protection"
    ],

    services: {
      installation: { available: true },
      amc: { available: true },
      repair: { available: true },
      inspection: { available: true },
      gasRefilling: { available: true },
      warranty: { available: true, period: "12 Months" }
    }
  }
];
