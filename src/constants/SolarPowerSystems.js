export const SOLAR_POWER_SYSTEMS = [
  {
    id: 1,
    slug: "industrial-solar-power-plant",
    category: "Industrial",
    name: "Industrial Solar Power Plant",

    description:
      "Large-scale industrial solar power plant designed to reduce electricity costs and ensure sustainable energy generation for factories and manufacturing units.",

    pricing: {
      basePrice: 4500000,
      currency: "INR",
      unit: "Project",
      minimumOrderQuantity: 1
    },

    specifications: {
      systemType: "On-Grid / Hybrid",
      capacityKW: "50 kW – 1 MW",
      solarPanels: "Mono PERC / Bifacial",
      inverterType: "String / Central Inverter",
      mountingStructure: "Hot Dip Galvanized Structure",
      netMetering: "Available",
      warrantyPanels: "25 Years Performance Warranty"
    },

    safetyFeatures: [
      "DC & AC Surge Protection",
      "Lightning Arrester",
      "Earthing System",
      "Overload & Short Circuit Protection"
    ],

    services: {
      siteSurvey: { available: true },
      installation: { available: true },
      netMeteringSupport: { available: true },
      amc: { available: true },
      monitoringSystem: { available: true },
      warranty: { available: true, period: "5 Years System Warranty" }
    }
  },

  {
    id: 2,
    slug: "commercial-solar-power-system",
    category: "Commercial",
    name: "Commercial Solar Power System",

    description:
      "Efficient commercial solar power system ideal for offices, hospitals, schools and commercial buildings to reduce operational energy expenses.",

    pricing: {
      basePrice: 1200000,
      currency: "INR",
      unit: "Project"
    },

    specifications: {
      systemType: "On-Grid",
      capacityKW: "10 kW – 100 kW",
      panelType: "Mono PERC",
      inverterType: "String Inverter",
      netMetering: "Supported",
      mountingType: "Rooftop"
    },

    safetyFeatures: [
      "Surge Protection Device (SPD)",
      "MCB & MCCB Protection",
      "Proper Earthing",
      "Fire Safety Compliance"
    ],

    services: {
      siteSurvey: { available: true },
      installation: { available: true },
      subsidyAssistance: { available: true },
      amc: { available: true },
      remoteMonitoring: { available: true },
      warranty: { available: true, period: "5 Years" }
    }
  },

  {
    id: 3,
    slug: "residential-rooftop-solar-system",
    category: "Domestic",
    name: "Residential Rooftop Solar System",

    description:
      "Compact and efficient rooftop solar system designed for homes and apartments to reduce electricity bills and ensure sustainable living.",

    pricing: {
      basePrice: 180000,
      currency: "INR",
      unit: "System"
    },

    specifications: {
      systemType: "On-Grid / Hybrid",
      capacityKW: "1 kW – 10 kW",
      panelType: "Mono / Polycrystalline",
      inverterType: "Single Phase Inverter",
      mountingType: "Rooftop Structure",
      netMetering: "Available"
    },

    safetyFeatures: [
      "DC Isolator Switch",
      "AC Distribution Box",
      "Lightning Protection",
      "Short Circuit Protection"
    ],

    services: {
      siteSurvey: { available: true },
      installation: { available: true },
      subsidySupport: { available: true },
      amc: { available: true },
      cleaningService: { available: true },
      warranty: { available: true, period: "5 Years System / 25 Years Panel Performance" }
    }
  },

  {
    id: 4,
    slug: "on-grid-solar-system",
    category: "Domestic",
    name: "On-Grid Solar System",

    description:
      "Grid-connected solar system that allows excess power export to the electricity board using net metering for maximum savings.",

    pricing: {
      basePrice: 150000,
      currency: "INR",
      unit: "System"
    },

    specifications: {
      systemType: "On-Grid",
      capacityKW: "1 kW – 50 kW",
      inverterType: "Grid-Tie Inverter",
      batteryBackup: "Not Required",
      netMetering: "Mandatory"
    },

    safetyFeatures: [
      "Anti-Islanding Protection",
      "Surge Protection",
      "MCB Protection"
    ],

    services: {
      installation: { available: true },
      netMeteringDocumentation: { available: true },
      amc: { available: true },
      monitoringApp: { available: true },
      warranty: { available: true, period: "5 Years" }
    }
  },

  {
    id: 5,
    slug: "off-grid-solar-system",
    category: "Domestic",
    name: "Off-Grid Solar System",

    description:
      "Independent off-grid solar power system with battery backup, ideal for remote locations and areas with frequent power cuts.",

    pricing: {
      basePrice: 220000,
      currency: "INR",
      unit: "System"
    },

    specifications: {
      systemType: "Off-Grid",
      capacityKW: "1 kW – 20 kW",
      batteryType: "Lithium / Tubular",
      inverterType: "Off-Grid Inverter",
      backupDuration: "4 – 12 Hours"
    },

    safetyFeatures: [
      "Battery Protection System",
      "Overcharge Protection",
      "Short Circuit Protection",
      "Surge Protection"
    ],

    services: {
      installation: { available: true },
      batteryReplacement: { available: true },
      amc: { available: true },
      repair: { available: true },
      warranty: { available: true, period: "3 – 5 Years" }
    }
  },

  {
    id: 6,
    slug: "hybrid-solar-system",
    category: "Commercial",
    name: "Hybrid Solar System",

    description:
      "Hybrid solar power system combining grid connectivity with battery backup to ensure uninterrupted power supply and maximum efficiency.",

    pricing: {
      basePrice: 300000,
      currency: "INR",
      unit: "System"
    },

    specifications: {
      systemType: "Hybrid",
      capacityKW: "3 kW – 100 kW",
      batteryType: "Lithium Ion",
      inverterType: "Hybrid Inverter",
      smartMonitoring: "WiFi Enabled"
    },

    safetyFeatures: [
      "Surge Protection",
      "Battery Management System (BMS)",
      "Overload Protection",
      "Fire Safety Compliance"
    ],

    services: {
      installation: { available: true },
      amc: { available: true },
      monitoringSystem: { available: true },
      repair: { available: true },
      warranty: { available: true, period: "5 Years" }
    }
  }
];
