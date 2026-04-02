export const INDUSTRIAL_RO_SERVICES = [
  {
    id: 1,
    slug: "industrial-ro-plant-setup",
    category: "Industrial Water Treatment",
    name: "Industrial RO Water Purification Plant",
    image: "/assets/industrial_ro_banner.png",
    description:
      "High-capacity industrial Reverse Osmosis (RO) plants designed for efficient and large-scale water purification. Ideal for factories, hospitals, and commercial buildings.",
    pricing: {
      basePrice: null, // Custom pricing based on capacity
      currency: "INR",
      unit: "Project",
    },
    specifications: {
      capacity: "500 LPH to 10,000+ LPH",
      membraneType: "High Rejection TFC Polyamide",
      pump: "High Pressure Multistage Centrifugal",
      automation: "Fully Automatic PLC based",
      recoveryRate: "Up to 70% subject to feed water",
    },
    safetyFeatures: [
      "Low/High pressure trip switches",
      "Auto-flush mechanism",
      "Overload protection for pumps",
      "Water quality monitoring sensors",
    ],
    services: {
      siteSurvey: { available: true },
      installation: { available: true },
      membraneCleaning: { available: true },
      amc: { available: true },
    },
  },
];
