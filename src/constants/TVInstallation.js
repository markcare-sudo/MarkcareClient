export const TV_INSTALLATION_SERVICES = [
  {
    id: 1,
    slug: "led-tv-wall-mount",
    category: "Installation",
    name: "LED/LCD TV Wall Mount Installation",
    image: "/assets/tv_installation_banner.png",
    description:
      "Expert and secure wall mounting service for your LED, LCD, or OLED smart TV. We ensure perfect alignment, minimal wall damage, and a clean setup.",
    pricing: {
      basePrice: 999,
      currency: "INR",
      unit: "Service",
    },
    specifications: {
      tvSize: "Up to 85 inches",
      bracketType: "Fixed / Swivel / Tilt (Provided on request)",
      cableManagement: "Basic Concealment",
      installationTime: "1-2 Hours",
    },
    safetyFeatures: [
      "Heavy-duty drill anchors",
      "Leveling check for perfect viewing angle",
      "Sturdy bracket checks",
    ],
    services: {
      siteSurvey: { available: true },
      installation: { available: true },
      maintenance: { available: false },
    },
  },
];
