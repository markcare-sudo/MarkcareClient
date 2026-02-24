
export const PRODUCT_IMAGES = {
  REVERSE_OSMOSIS_500LPH: import.meta.env.VITE_REVERSE_OSMOSIS_500LPH || "",
  REVERSE_OSMOSIS_2000LPH: import.meta.env.VITE_REVERSE_OSMOSIS_2000LPH || "",
  REVERSE_OSMOSIS_DMRO: import.meta.env.VITE_REVERSE_OSMOSIS_DMRO || "",
  REVERSE_OSMOSIS_INDUSTRIALRO: import.meta.env.VITE_REVERSE_OSMOSIS_INDUSTRIALRO || "",
  REVERSE_OSMOSIS_IROP: import.meta.env.VITE_REVERSE_OSMOSIS_IROP || "",
  REVERSE_OSMOSIS_RP500: import.meta.env.VITE_REVERSE_OSMOSIS_RP500 || "",
};


export const REVERSE_OSMOSIS_PLANTS = [
  {
    id: 1,
    slug: "industrial-reverse-osmosis-plant",
    category: "Industrial",
    name: "Industrial Reverse Osmosis Plant",
    image: PRODUCT_IMAGES.REVERSE_OSMOSIS_INDUSTRIALRO,
    description:
      "Industrial reverse osmosis plant designed to remove dissolved salts, heavy metals and contaminants from raw water using high-performance RO membranes.",

    pricing: {
      basePrice: 600000,
      currency: "INR",
      unit: "Plant",
      minimumOrderQuantity: 1
    },

    specifications: {
      plantType: "Industrial RO System",
      capacityLPH: "2,000 – 50,000",
      tdsReduction: "Up to 95–98%",
      membraneType: "Thin Film Composite (TFC)",
      automationGrade: "Automatic / Semi-Automatic",
      operatingVoltage: "415V",
      phase: "Three Phase",
      installationType: "Skid Mounted",
      waterSource: "Borewell / Municipal / Surface Water"
    },

    safetyFeatures: [
      "Low Pressure Cut-Off",
      "High Pressure Protection",
      "Auto Flush System",
      "Overload Protection"
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
    id: 2,
    slug: "dm-ro-water-plant",
    category: "Industrial",
    name: "DM RO Water Plant",
    image: PRODUCT_IMAGES.REVERSE_OSMOSIS_DMRO,
    description:
      "DM RO water plant combining reverse osmosis and demineralization technology for producing ultra-pure water for industrial and pharmaceutical applications.",

    pricing: {
      basePrice: 750000,
      currency: "INR",
      unit: "Plant"
    },

    specifications: {
      plantType: "RO + DM System",
      capacityLPH: "1,000 – 20,000",
      outputWaterQuality: "Low Conductivity (<10 µS/cm)",
      resinType: "Cation + Anion Exchange Resin",
      automationGrade: "Fully Automatic",
      phase: "Three Phase",
      operatingVoltage: "415V"
    },

    safetyFeatures: [
      "Conductivity Monitoring",
      "Resin Protection System",
      "Auto Regeneration Control"
    ],

    services: {
      installation: { available: true },
      amc: { available: true },
      repair: { available: true },
      resinReplacement: { available: true },
      spareParts: { available: true },
      warranty: { available: true, period: "18 Months" }
    }
  },

  {
    id: 3,
    slug: "industrial-ro-system",
    category: "Industrial",
    name: "Industrial RO System",
    image: PRODUCT_IMAGES.REVERSE_OSMOSIS_IROP,
    description:
      "Heavy-duty industrial RO system engineered for continuous operation in manufacturing, textile, food processing and pharmaceutical industries.",

    pricing: {
      basePrice: 500000,
      currency: "INR",
      unit: "System"
    },

    specifications: {
      plantType: "Reverse Osmosis",
      capacityLPH: "1,000 – 30,000",
      recoveryRate: "50–75%",
      tdsHandling: "Up to 5000 ppm",
      membraneType: "High Pressure RO Membrane",
      automationGrade: "Automatic",
      installationType: "Skid Mounted"
    },

    safetyFeatures: [
      "Auto Shutdown System",
      "Pressure Monitoring",
      "Dry Run Protection"
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
    slug: "500-lph-commercial-ro-plant",
    category: "Commercial",
    name: "500 LPH Commercial RO Plant",
    image: PRODUCT_IMAGES.REVERSE_OSMOSIS_500LPH,
    description:
      "500 LPH commercial RO plant suitable for hotels, hospitals, schools and packaged drinking water units.",

    pricing: {
      basePrice: 185000,
      currency: "INR",
      unit: "Plant"
    },

    specifications: {
      plantType: "Commercial RO",
      capacityLPH: "500 LPH",
      tdsReduction: "Up to 95%",
      membraneType: "TFC Membrane",
      automationGrade: "Semi-Automatic",
      phase: "Single Phase / Three Phase",
      operatingVoltage: "230V / 415V"
    },

    safetyFeatures: [
      "Low Pressure Switch",
      "High Pressure Cut-Off",
      "Auto Flush"
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
    id: 5,
    slug: "ro-plant-500-lph",
    category: "Commercial",
    name: "RO Plant 500 LPH",
    image: PRODUCT_IMAGES.REVERSE_OSMOSIS_500LPH,
    description:
      "Compact 500 LPH RO plant designed for small-scale commercial water purification needs.",

    pricing: {
      basePrice: 175000,
      currency: "INR",
      unit: "Plant"
    },

    specifications: {
      plantType: "RO Plant",
      capacityLPH: "500 LPH",
      recoveryRate: "60–70%",
      membraneType: "Thin Film Composite",
      installationType: "Floor Mounted"
    },

    safetyFeatures: [
      "Auto Shut-Off",
      "Overflow Protection",
      "Pressure Gauge Monitoring"
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
    id: 6,
    slug: "2000-lph-ro-plant",
    category: "Commercial",
    name: "2000 LPH RO Plant",
    image: PRODUCT_IMAGES.REVERSE_OSMOSIS_2000LPH,
    description:
      "High-capacity 2000 LPH RO plant suitable for medium-scale industries, water bottling units and commercial establishments.",

    pricing: {
      basePrice: 325000,
      currency: "INR",
      unit: "Plant"
    },

    specifications: {
      plantType: "Industrial / Commercial RO",
      capacityLPH: "2000 LPH",
      tdsReduction: "Up to 98%",
      recoveryRate: "65–75%",
      membraneType: "High Efficiency RO Membrane",
      automationGrade: "Automatic",
      phase: "Three Phase"
    },

    safetyFeatures: [
      "High Pressure Protection",
      "Auto Flush System",
      "Low Pressure Cut-Off",
      "TDS Monitoring"
    ],

    services: {
      installation: { available: true },
      amc: { available: true },
      repair: { available: true, emergencySupport: true },
      inspection: { available: true },
      spareParts: { available: true },
      warranty: { available: true, period: "12 Months" }
    }
  }
];
