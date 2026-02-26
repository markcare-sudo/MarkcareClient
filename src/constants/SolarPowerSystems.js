
// export const PRODUCT_IMAGES = {

//   SOLAR_COMMERCIAL: import.meta.env.VITE_SOLAR_COMMERCIAL || "",
//   SOLAR_INDUSTRIAL: import.meta.env.VITE_SOLAR_INDUSTRIAL || "",
//   SOLAR_RESIDENTIAL: import.meta.env.VITE_SOLAR_RESIDENTIAL || "",
//   SOLAR_HYBRID: import.meta.env.VITE_SOLAR_HYBRID || "",
//   SOLAR_OFFGRID: import.meta.env.VITE_SOLAR_OFFGRID || "",
//   SOLAR_ONGRID: import.meta.env.VITE_SOLAR_ONGRID || "",
// };


// export const SOLAR_POWER_SYSTEMS = [
//   {
//     id: 1,
//     slug: "industrial-solar-power-plant",
//     category: "Industrial",
//     name: "Industrial Solar Power Plant",
//     image: PRODUCT_IMAGES.SOLAR_INDUSTRIAL,
//     description:
//       "Large-scale industrial solar power plant designed to reduce electricity costs and ensure sustainable energy generation for factories and manufacturing units.",

//     pricing: {
//       basePrice: 4500000,
//       currency: "INR",
//       unit: "Project",
//       minimumOrderQuantity: 1
//     },

//     specifications: {
//       systemType: "On-Grid / Hybrid",
//       capacityKW: "50 kW – 1 MW",
//       solarPanels: "Mono PERC / Bifacial",
//       inverterType: "String / Central Inverter",
//       mountingStructure: "Hot Dip Galvanized Structure",
//       netMetering: "Available",
//       warrantyPanels: "25 Years Performance Warranty"
//     },

//     safetyFeatures: [
//       "DC & AC Surge Protection",
//       "Lightning Arrester",
//       "Earthing System",
//       "Overload & Short Circuit Protection"
//     ],

//     services: {
//       siteSurvey: { available: true },
//       installation: { available: true },
//       netMeteringSupport: { available: true },
//       amc: { available: true },
//       monitoringSystem: { available: true },
//       warranty: { available: true, period: "5 Years System Warranty" }
//     }
//   },

//   {
//     id: 2,
//     slug: "commercial-solar-power-system",
//     category: "Commercial",
//     name: "Commercial Solar Power System",
//     image: PRODUCT_IMAGES.SOLAR_COMMERCIAL,
//     description:
//       "Efficient commercial solar power system ideal for offices, hospitals, schools and commercial buildings to reduce operational energy expenses.",

//     pricing: {
//       basePrice: 1200000,
//       currency: "INR",
//       unit: "Project"
//     },

//     specifications: {
//       systemType: "On-Grid",
//       capacityKW: "10 kW – 100 kW",
//       panelType: "Mono PERC",
//       inverterType: "String Inverter",
//       netMetering: "Supported",
//       mountingType: "Rooftop"
//     },

//     safetyFeatures: [
//       "Surge Protection Device (SPD)",
//       "MCB & MCCB Protection",
//       "Proper Earthing",
//       "Fire Safety Compliance"
//     ],

//     services: {
//       siteSurvey: { available: true },
//       installation: { available: true },
//       subsidyAssistance: { available: true },
//       amc: { available: true },
//       remoteMonitoring: { available: true },
//       warranty: { available: true, period: "5 Years" }
//     }
//   },

//   {
//     id: 3,
//     slug: "residential-rooftop-solar-system",
//     category: "Domestic",
//     name: "Residential Rooftop Solar System",
//     image: PRODUCT_IMAGES.SOLAR_RESIDENTIAL,
//     description:
//       "Compact and efficient rooftop solar system designed for homes and apartments to reduce electricity bills and ensure sustainable living.",

//     pricing: {
//       basePrice: 180000,
//       currency: "INR",
//       unit: "System"
//     },

//     specifications: {
//       systemType: "On-Grid / Hybrid",
//       capacityKW: "1 kW – 10 kW",
//       panelType: "Mono / Polycrystalline",
//       inverterType: "Single Phase Inverter",
//       mountingType: "Rooftop Structure",
//       netMetering: "Available"
//     },

//     safetyFeatures: [
//       "DC Isolator Switch",
//       "AC Distribution Box",
//       "Lightning Protection",
//       "Short Circuit Protection"
//     ],

//     services: {
//       siteSurvey: { available: true },
//       installation: { available: true },
//       subsidySupport: { available: true },
//       amc: { available: true },
//       cleaningService: { available: true },
//       warranty: { available: true, period: "5 Years System / 25 Years Panel Performance" }
//     }
//   },

//   {
//     id: 4,
//     slug: "on-grid-solar-system",
//     category: "Domestic",
//     name: "On-Grid Solar System",
//     image: PRODUCT_IMAGES.SOLAR_ONGRID,
//     description:
//       "Grid-connected solar system that allows excess power export to the electricity board using net metering for maximum savings.",

//     pricing: {
//       basePrice: 150000,
//       currency: "INR",
//       unit: "System"
//     },

//     specifications: {
//       systemType: "On-Grid",
//       capacityKW: "1 kW – 50 kW",
//       inverterType: "Grid-Tie Inverter",
//       batteryBackup: "Not Required",
//       netMetering: "Mandatory"
//     },

//     safetyFeatures: [
//       "Anti-Islanding Protection",
//       "Surge Protection",
//       "MCB Protection"
//     ],

//     services: {
//       installation: { available: true },
//       netMeteringDocumentation: { available: true },
//       amc: { available: true },
//       monitoringApp: { available: true },
//       warranty: { available: true, period: "5 Years" }
//     }
//   },

//   {
//     id: 5,
//     slug: "off-grid-solar-system",
//     category: "Domestic",
//     name: "Off-Grid Solar System",
//     image: PRODUCT_IMAGES.SOLAR_OFFGRID,
//     description:
//       "Independent off-grid solar power system with battery backup, ideal for remote locations and areas with frequent power cuts.",

//     pricing: {
//       basePrice: 220000,
//       currency: "INR",
//       unit: "System"
//     },

//     specifications: {
//       systemType: "Off-Grid",
//       capacityKW: "1 kW – 20 kW",
//       batteryType: "Lithium / Tubular",
//       inverterType: "Off-Grid Inverter",
//       backupDuration: "4 – 12 Hours"
//     },

//     safetyFeatures: [
//       "Battery Protection System",
//       "Overcharge Protection",
//       "Short Circuit Protection",
//       "Surge Protection"
//     ],

//     services: {
//       installation: { available: true },
//       batteryReplacement: { available: true },
//       amc: { available: true },
//       repair: { available: true },
//       warranty: { available: true, period: "3 – 5 Years" }
//     }
//   },

//   {
//     id: 6,
//     slug: "hybrid-solar-system",
//     category: "Commercial",
//     name: "Hybrid Solar System",
//     image: PRODUCT_IMAGES.SOLAR_HYBRID,
//     description:
//       "Hybrid solar power system combining grid connectivity with battery backup to ensure uninterrupted power supply and maximum efficiency.",

//     pricing: {
//       basePrice: 300000,
//       currency: "INR",
//       unit: "System"
//     },

//     specifications: {
//       systemType: "Hybrid",
//       capacityKW: "3 kW – 100 kW",
//       batteryType: "Lithium Ion",
//       inverterType: "Hybrid Inverter",
//       smartMonitoring: "WiFi Enabled"
//     },

//     safetyFeatures: [
//       "Surge Protection",
//       "Battery Management System (BMS)",
//       "Overload Protection",
//       "Fire Safety Compliance"
//     ],

//     services: {
//       installation: { available: true },
//       amc: { available: true },
//       monitoringSystem: { available: true },
//       repair: { available: true },
//       warranty: { available: true, period: "5 Years" }
//     }
//   }
// ];








export const PRODUCT_IMAGES = {
  SOLAR_COMMERCIAL: import.meta.env.VITE_SOLAR_COMMERCIAL || "",
  SOLAR_INDUSTRIAL: import.meta.env.VITE_SOLAR_INDUSTRIAL || "",
  SOLAR_RESIDENTIAL: import.meta.env.VITE_SOLAR_RESIDENTIAL || "",
  SOLAR_HYBRID: import.meta.env.VITE_SOLAR_HYBRID || "",
  SOLAR_OFFGRID: import.meta.env.VITE_SOLAR_OFFGRID || "",
  SOLAR_ONGRID: import.meta.env.VITE_SOLAR_ONGRID || "",
};

export const SOLAR_POWER_SYSTEMS = [
  {
    id: 1,
    slug: "industrial-solar-power-system",
    category: "Industrial",
    name: "Industrial Solar Power System",
    image: PRODUCT_IMAGES.SOLAR_INDUSTRIAL,
    description:
      "Large-scale solar power system for factories and manufacturing units. Designed for high energy generation and cost reduction.",

    pricing: {
      basePrice: null,
      currency: "INR",
      unit: "Project",
    },

    specifications: {
      systemType: "On-Grid / Hybrid",
      capacityRange: "Above 10 kW – MW Scale",
      panelTypes:
        "Mono PERC / Half Cut / Bifacial / Topcon",
      inverterType: "On-Grid / Hybrid Inverter",
      subsidy: "No Subsidy (Commercial & Industrial not eligible)",
      netMetering: "Available for On-Grid Systems",
    },

    keyHighlights: [
      "High efficiency solar panels",
      "Grid export facility",
      "Suitable for heavy load operations",
      "Minimal maintenance required",
    ],

    services: {
      siteSurvey: { available: true },
      installation: { available: true },
      netMeteringSupport: { available: true },
      maintenance: { available: true },
    },
  },

  {
    id: 2,
    slug: "commercial-solar-power-system",
    category: "Commercial",
    name: "Commercial Solar Power System",
    image: PRODUCT_IMAGES.SOLAR_COMMERCIAL,
    description:
      "On-Grid solar solution for offices, hospitals, schools and commercial buildings to reduce electricity bills through net metering.",

    pricing: {
      basePrice: null,
      currency: "INR",
      unit: "Project",
    },

    specifications: {
      systemType: "On-Grid",
      capacityRange: "3 kW – 100 kW",
      panelTypes: "Mono PERC / Polycrystalline",
      inverterType: "On-Grid Inverter",
      batteryRequired: "No",
      subsidy: "No Subsidy for Commercial Systems",
      netMetering: "Supported",
    },

    keyHighlights: [
      "Sends excess power to grid",
      "Reduces electricity bills",
      "Automatic grid switching",
      "Minimal maintenance",
    ],

    services: {
      installation: { available: true },
      netMeteringDocumentation: { available: true },
      maintenance: { available: true },
    },
  },

  {
    id: 3,
    slug: "residential-on-grid-solar-system",
    category: "Domestic",
    name: "Residential On-Grid Solar System",
    image: PRODUCT_IMAGES.SOLAR_RESIDENTIAL,
    description:
      "Grid-tied rooftop solar system ideal for homes. Generates approx. 4 units per day per 1 kW installed capacity.",

    pricing: {
      basePrice: null,
      currency: "INR",
      unit: "System",
    },

    specifications: {
      systemType: "On-Grid",
      capacityRange: "1 kW – 10 kW",
      unitsGenerated: "1 kW ≈ 4 Units per Day",
      spaceRequired: "1 kW requires approx. 100 sq.ft",
      weightReference: "Approx. 100 kg per 1 kW system",
      subsidy:
        "Eligible only for DCR Panels (Made in India)",
      netMetering: "Mandatory",
    },

    keyHighlights: [
      "No battery required",
      "Excess power credited via net metering",
      "Government subsidy for DCR panels",
      "Low maintenance",
    ],

    services: {
      siteSurvey: { available: true },
      installation: { available: true },
      subsidySupport: { available: true },
      netMeteringSupport: { available: true },
    },
  },

  {
    id: 4,
    slug: "off-grid-solar-system",
    category: "Domestic",
    name: "Off-Grid Solar System",
    image: PRODUCT_IMAGES.SOLAR_OFFGRID,
    description:
      "Standalone solar system ideal for remote areas. Stores excess power in batteries for use during night or power cuts.",

    pricing: {
      basePrice: null,
      currency: "INR",
      unit: "System",
    },

    specifications: {
      systemType: "Off-Grid",
      batteryRequired: "Yes",
      inverterType: "Off-Grid Inverter",
      batteryType: "Lithium-Ion",
      netMetering: "Not Applicable",
      subsidy: "No Subsidy",
    },

    keyHighlights: [
      "Works without grid connection",
      "Battery backup available",
      "Ideal for remote locations",
      "Provides power during outages",
    ],

    services: {
      installation: { available: true },
      maintenance: { available: true },
      batteryReplacement: { available: true },
    },
  },

  {
    id: 5,
    slug: "hybrid-solar-system",
    category: "Domestic",
    name: "Hybrid Solar System",
    image: PRODUCT_IMAGES.SOLAR_HYBRID,
    description:
      "Hybrid system combining solar panels, batteries and grid connection for uninterrupted power supply.",

    pricing: {
      basePrice: null,
      currency: "INR",
      unit: "System",
    },

    specifications: {
      systemType: "Hybrid",
      capacityRange: "3 kW – 100 kW",
      inverterType: "Hybrid Inverter",
      batteryType: "Lithium-Ion",
      netMetering: "Supported",
      backupPower: "Available during outages",
    },

    keyHighlights: [
      "Uses solar power during day",
      "Stores excess energy in batteries",
      "Switches automatically to grid",
      "Ensures backup power",
    ],

    services: {
      installation: { available: true },
      maintenance: { available: true },
      monitoringSupport: { available: true },
    },
  },

  {
    id: 6,
    slug: "solar-panel-types",
    category: "Solar Components",
    name: "Solar Panel Technologies",
    image: PRODUCT_IMAGES.SOLAR_ONGRID,
    description:
      "Available panel technologies as per training module.",

    pricing: {
      basePrice: null,
      currency: "INR",
      unit: "Panel",
    },

    specifications: {
      polycrystalline:
        "335W, Blue color, 72 cells, 25-year lifespan",
      monoPERC:
        "450–540W, Black color, 72 cells, 25–30 years lifespan",
      halfCut:
        "545W, 144 cells, better shading resistance",
      bifacial:
        "550W, 144 cells, absorbs sunlight from both sides",
      topcon:
        "570W, 144 cells, high efficiency, 30+ years lifespan",
    },
  },
];