export const DIESEL_GENERATORS = [
  {
    id: 1,
    slug: "ashok-leyland-diesel-generator",
    category: "Industrial",
    name: "Ashok Leyland Diesel Generator",

    description:
      "Heavy-duty Ashok Leyland diesel generator designed for reliable backup power in industrial and commercial applications.",

    pricing: {
      basePrice: 850000,
      currency: "INR",
      unit: "Generator",
      minimumOrderQuantity: 1
    },

    specifications: {
      brand: "Ashok Leyland",
      capacityRange: "62.5 kVA – 500 kVA",
      fuelType: "Diesel",
      coolingSystem: "Water Cooled",
      phase: "Three Phase",
      frequency: "50 Hz",
      voltage: "415V",
      startingSystem: "Electric Start"
    },

    safetyFeatures: [
      "Overload Protection",
      "Low Oil Pressure Shutdown",
      "High Temperature Cut-Off",
      "Emergency Stop Button"
    ],

    services: {
      installation: { available: true },
      amc: { available: true },
      rental: { available: false },
      repair: { available: true, emergencySupport: true },
      spareParts: { available: true },
      warranty: { available: true, period: "24 Months" }
    }
  },

  {
    id: 2,
    slug: "diesel-generator-rental",
    category: "Service",
    name: "Diesel Generator Rental",

    description:
      "Short-term and long-term diesel generator rental services for construction sites, events, hospitals and industries.",

    pricing: {
      basePrice: 5000,
      currency: "INR",
      unit: "Per Day"
    },

    specifications: {
      capacityRange: "15 kVA – 500 kVA",
      fuelType: "Diesel",
      rentalDuration: "Daily / Weekly / Monthly",
      operatorSupport: "Optional",
      deliverySupport: "Available"
    },

    safetyFeatures: [
      "Soundproof Canopy",
      "Overload Protection",
      "Emergency Shutdown"
    ],

    services: {
      delivery: { available: true },
      operator: { available: true },
      installation: { available: true },
      amc: { available: false },
      warranty: { available: false }
    }
  },

  {
    id: 3,
    slug: "amc-for-diesel-generators",
    category: "Service",
    name: "AMC For Diesel Generators",

    description:
      "Annual maintenance contract (AMC) services for diesel generators ensuring optimal performance and reduced downtime.",

    pricing: {
      basePrice: 25000,
      currency: "INR",
      unit: "Year"
    },

    specifications: {
      serviceType: "Preventive Maintenance",
      coverage: "Engine + Alternator + Control Panel",
      visitFrequency: "Quarterly / Half-Yearly",
      emergencySupport: "Available",
      coverageArea: "Pan India"
    },

    services: {
      inspection: { available: true },
      preventiveMaintenance: { available: true },
      emergencyRepair: { available: true },
      spareParts: { available: true },
      warranty: { available: false }
    }
  },

  {
    id: 4,
    slug: "diesel-generator-installation",
    category: "Service",
    name: "Diesel Generator Installation",

    description:
      "Professional diesel generator installation service including foundation setup, electrical integration and system testing.",

    pricing: {
      basePrice: 15000,
      currency: "INR",
      unit: "Service"
    },

    specifications: {
      installationType: "On-Site",
      includes: "Foundation + Electrical Wiring + Testing",
      phaseSupport: "Single / Three Phase",
      compliance: "Electrical Safety Standards"
    },

    services: {
      siteInspection: { available: true },
      loadTesting: { available: true },
      commissioning: { available: true },
      warranty: { available: false }
    }
  },

  {
    id: 5,
    slug: "15kva-koel-green-diesel-generator",
    category: "Commercial",
    name: "15kVA Koel Green Diesel Generator",

    description:
      "15kVA Koel Green diesel generator suitable for small offices, shops and residential backup power needs.",

    pricing: {
      basePrice: 320000,
      currency: "INR",
      unit: "Generator"
    },

    specifications: {
      brand: "Koel Green",
      capacity: "15 kVA",
      fuelType: "Diesel",
      phase: "Single / Three Phase",
      coolingSystem: "Air Cooled / Water Cooled",
      frequency: "50 Hz",
      voltage: "230V / 415V",
      canopyType: "Soundproof"
    },

    safetyFeatures: [
      "Low Oil Pressure Alarm",
      "Overload Protection",
      "Short Circuit Protection",
      "Emergency Stop"
    ],

    services: {
      installation: { available: true },
      amc: { available: true },
      repair: { available: true },
      spareParts: { available: true },
      warranty: { available: true, period: "24 Months" }
    }
  },

  {
    id: 6,
    slug: "diesel-generator-repair-services",
    category: "Service",
    name: "Diesel Generator Repair & Services",

    description:
      "Comprehensive diesel generator repair and servicing for all brands including engine overhaul, alternator repair and panel troubleshooting.",

    pricing: {
      basePrice: 5000,
      currency: "INR",
      unit: "Service"
    },

    specifications: {
      serviceType: "On-Site / Workshop",
      responseTime: "24–48 Hours",
      coverageArea: "Pan India",
      supportedBrands: "All Major Brands"
    },

    services: {
      emergencyRepair: { available: true },
      engineOverhaul: { available: true },
      alternatorRepair: { available: true },
      inspection: { available: true },
      spareParts: { available: true },
      warranty: { available: false }
    }
  }
];
