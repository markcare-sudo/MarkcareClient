


export const PRODUCT_IMAGES = {
  R_15KVA_KOEL: import.meta.env.VITE_R_15KVA_KOEL || "",
  R_AMC: import.meta.env.VITE_R_AMC || "",
  R_ASHOK_LEYLAND: import.meta.env.VITE_R_ASHOK_LEYLAND || "",
  R_DG_REPAIR: import.meta.env.VITE_R_DG_REPAIR || "",
  R_DGI: import.meta.env.VITE_R_DGI || "",
  R_DGR: import.meta.env.VITE_R_DGR || "",
};

export const DIESEL_GENERATORS = [
  {
    id: 1,
    slug: "silent-diesel-generator",
    category: "Industrial",
    name: "Silent Diesel Generator",

    description:
      "High-performance silent diesel generator designed for residential, commercial, and industrial backup power applications. Engineered for low noise and high durability.",

    pricing: {
      basePrice: null, // Pricing not mentioned in brochure
      currency: "INR",
      unit: "Generator",
      note: "Price available on request"
    },

    specifications: {
      fuelType: "Diesel",
      generatorType: "Silent / Soundproof",
      noiseLevel: "75 dBA at 1 meter (Certified)",
      construction: "Steel outer construction with heavy-duty base frame",
      enclosureType: "Weatherproof, acid-proof, heat-resistant powder coated",
      mounting: "Inbuilt Anti-Vibration Mounting",
      fuelTank: "Inbuilt Fuel Tank",
    },

    salientFeatures: [
      "Low noise 75 dBA Whisper operation",
      "Soundproof & weatherproof acoustic enclosure",
      "Ready-to-use silent set (No foundation required)",
      "Protection against temperature rise",
      "Custom residential & hospital-grade silencers",
      "Single bearing generator with anti-vibration mounting",
    ],

    constructionFeatures: [
      "Heavy-duty fabricated base frame",
      "Stainless steel hardware components",
      "Bolted modular design (Easy assembly/dismantling)",
      "Neoprene gasket sealed joints",
      "Glass wool insulation with aluminum cladding",
      "Unique lifting arrangement",
    ],

    services: {
      consultation: { available: true },
      installation: { available: true },
      amc: { available: true },
      emergencySupport: { available: true },
      maintenance: { available: true },
    }
  },

  {
    id: 2,
    slug: "diesel-generator-supply-installation",
    category: "Service",
    name: "Generator Supply & Installation Service",

    description:
      "Complete generator supply and installation solutions including consultation, delivery, setup, and commissioning.",

    pricing: {
      basePrice: null,
      currency: "INR",
      unit: "Service",
      note: "Quotation based pricing"
    },

    specifications: {
      serviceType: "On-Site Installation",
      includes: "Consultation + Delivery + Installation + Testing",
      supportedApplications: "Residential / Commercial / Industrial",
    },

    services: {
      siteInspection: { available: true },
      installation: { available: true },
      loadTesting: { available: true },
      commissioning: { available: true },
    }
  },

  {
    id: 3,
    slug: "annual-maintenance-contract",
    category: "Service",
    name: "Annual Maintenance Contract (AMC)",
    image: PRODUCT_IMAGES.R_AMC,
    description:
      "Comprehensive AMC services ensuring uninterrupted power performance through preventive maintenance and responsive support.",

    pricing: {
      basePrice: null,
      currency: "INR",
      unit: "Year",
      note: "Pricing based on generator capacity"
    },

    specifications: {
      serviceCoverage: "Engine + Alternator + Control Panel",
      maintenanceType: "Preventive & Breakdown Maintenance",
      emergencySupport: "Available",
    },

    services: {
      preventiveMaintenance: { available: true },
      inspection: { available: true },
      breakdownSupport: { available: true },
      sparePartsSupport: { available: true },
    }
  },

  {
    id: 4,
    slug: "diesel-generator-repair-service",
    category: "Service",
    name: "Diesel Generator Repair & Emergency Service",
    image: PRODUCT_IMAGES.R_DG_REPAIR,
    description:
      "Professional generator repair and emergency breakdown support services to ensure minimal downtime.",

    pricing: {
      basePrice: null,
      currency: "INR",
      unit: "Service",
      note: "Service charges applicable"
    },

    specifications: {
      responseType: "Emergency / Scheduled",
      coverageArea: "Chennai, Bangalore, Delhi, Hyderabad, Mumbai",
      supportType: "On-Site / Workshop",
    },

    services: {
      emergencyRepair: { available: true },
      inspection: { available: true },
      technicalSupport: { available: true },
      spareParts: { available: true },
    }
  }
];