export const KITCHEN_CHIMNEY_SERVICES = [
  {
    id: 1,
    slug: "kitchen-chimney-deep-cleaning",
    category: "Cleaning & Maintenance",
    name: "Kitchen Chimney Deep Cleaning Service",
    image: "/assets/kitchen_chimney_banner.png",
    description:
      "Comprehensive internal and external deep cleaning of your kitchen electric chimney to remove stubborn grease, oil, and carbon deposits.",
    pricing: {
      basePrice: 1200,
      currency: "INR",
      unit: "Service",
    },
    specifications: {
      chimneyType: "Wall Mounted / Island / Built-in",
      cleaningAgents: "Eco-friendly, Non-toxic de-greasers",
      filterTypes: "Baffle / Mesh / Cassette",
      serviceDuration: "2-3 Hours",
    },
    safetyFeatures: [
      "Safe handling of electrical components",
      "Motor health checkup included",
      "Spill-proof workspace setup",
    ],
    services: {
      inspection: { available: true },
      deepCleaning: { available: true },
      filterReplacement: { available: true },
      amc: { available: true },
    },
  },
];
