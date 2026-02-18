export const REFRIGERATION_SYSTEMS = [
  {
    id: 1,
    slug: "industrial-cold-storage-system",
    category: "Industrial",
    name: "Industrial Cold Storage System",

    description:
      "Large-scale industrial cold storage system designed for food processing units, pharmaceuticals, and warehouses requiring temperature-controlled storage.",

    pricing: {
      basePrice: 2500000,
      currency: "INR",
      unit: "Project",
      minimumOrderQuantity: 1
    },

    specifications: {
      refrigerationType: "Cold Storage",
      temperatureRange: "-25°C to +10°C",
      storageCapacity: "5 MT – 500 MT",
      compressorType: "Semi-Hermetic / Scroll",
      refrigerant: "R404A / R134A",
      insulationType: "PUF Panels",
      powerRequirement: "Three Phase"
    },

    safetyFeatures: [
      "Temperature Monitoring System",
      "High/Low Pressure Cut-Off",
      "Emergency Alarm System",
      "Overload Protection"
    ],

    services: {
      siteSurvey: { available: true },
      installation: { available: true },
      amc: { available: true },
      repair: { available: true, emergencySupport: true },
      spareParts: { available: true },
      warranty: { available: true, period: "24 Months" }
    }
  },

  {
    id: 2,
    slug: "commercial-deep-freezer",
    category: "Commercial",
    name: "Commercial Deep Freezer",

    description:
      "High-performance commercial deep freezer suitable for supermarkets, restaurants, and food outlets for frozen storage.",

    pricing: {
      basePrice: 45000,
      currency: "INR",
      unit: "Unit"
    },

    specifications: {
      refrigerationType: "Deep Freezer",
      temperatureRange: "-18°C to -25°C",
      storageCapacity: "200L – 600L",
      compressorType: "Hermetic",
      energyRating: "Energy Efficient",
      phase: "Single Phase"
    },

    safetyFeatures: [
      "Thermal Overload Protection",
      "Door Lock Safety",
      "Temperature Control Thermostat"
    ],

    services: {
      installation: { available: true },
      amc: { available: true },
      repair: { available: true },
      gasRefilling: { available: true },
      warranty: { available: true, period: "12 Months" }
    }
  },

  {
    id: 3,
    slug: "commercial-display-refrigerator",
    category: "Commercial",
    name: "Commercial Display Refrigerator",

    description:
      "Glass door display refrigerator ideal for retail stores, bakeries, and beverage outlets for product visibility and cooling.",

    pricing: {
      basePrice: 65000,
      currency: "INR",
      unit: "Unit"
    },

    specifications: {
      refrigerationType: "Display Refrigerator",
      temperatureRange: "2°C to 8°C",
      storageCapacity: "300L – 1000L",
      doorType: "Glass Door",
      refrigerant: "R134A",
      coolingType: "Fan Assisted"
    },

    safetyFeatures: [
      "Auto Defrost System",
      "Voltage Protection",
      "Temperature Display Panel"
    ],

    services: {
      installation: { available: true },
      amc: { available: true },
      repair: { available: true },
      spareParts: { available: true },
      warranty: { available: true, period: "12 Months" }
    }
  },

  {
    id: 4,
    slug: "commercial-refrigerator",
    category: "Commercial",
    name: "Commercial Refrigerator",

    description:
      "Heavy-duty commercial refrigerator designed for hotels, restaurants, and catering businesses with reliable cooling performance.",

    pricing: {
      basePrice: 85000,
      currency: "INR",
      unit: "Unit"
    },

    specifications: {
      refrigerationType: "Commercial Refrigerator",
      temperatureRange: "2°C to 10°C",
      storageCapacity: "400L – 1200L",
      bodyMaterial: "Stainless Steel",
      coolingType: "Forced Air Cooling",
      phase: "Single / Three Phase"
    },

    safetyFeatures: [
      "Overheat Protection",
      "Auto Temperature Control",
      "Power Failure Alarm"
    ],

    services: {
      installation: { available: true },
      amc: { available: true },
      repair: { available: true },
      inspection: { available: true },
      warranty: { available: true, period: "12 Months" }
    }
  },

  {
    id: 5,
    slug: "double-door-refrigerator",
    category: "Domestic",
    name: "Double Door Refrigerator",

    description:
      "Energy-efficient double door refrigerator suitable for homes and apartments with separate freezer compartment.",

    pricing: {
      basePrice: 32000,
      currency: "INR",
      unit: "Unit"
    },

    specifications: {
      refrigerationType: "Double Door Refrigerator",
      capacityLitres: "250L – 500L",
      compressorType: "Inverter Compressor",
      energyRating: "3 Star / 5 Star",
      defrostType: "Frost Free",
      phase: "Single Phase"
    },

    safetyFeatures: [
      "Stabilizer Free Operation",
      "Overload Protection",
      "Door Alarm"
    ],

    services: {
      installation: { available: true },
      amc: { available: true },
      repair: { available: true },
      gasRefilling: { available: true },
      warranty: { available: true, period: "12 Months" }
    }
  },

  {
    id: 6,
    slug: "single-door-refrigerator",
    category: "Domestic",
    name: "Single Door Refrigerator",

    description:
      "Compact and affordable single door refrigerator ideal for small families and limited space usage.",

    pricing: {
      basePrice: 18000,
      currency: "INR",
      unit: "Unit"
    },

    specifications: {
      refrigerationType: "Single Door Refrigerator",
      capacityLitres: "180L – 250L",
      compressorType: "Reciprocating",
      energyRating: "2 Star / 3 Star",
      defrostType: "Direct Cool",
      phase: "Single Phase"
    },

    safetyFeatures: [
      "Voltage Protection",
      "Overheat Protection",
      "Anti-Bacterial Gasket"
    ],

    services: {
      installation: { available: true },
      amc: { available: true },
      repair: { available: true },
      gasRefilling: { available: true },
      warranty: { available: true, period: "12 Months" }
    }
  }
];
