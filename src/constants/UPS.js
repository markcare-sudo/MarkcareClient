export const PRODUCT_IMAGES = {

  VITE_UPS_COMMERCIAL: import.meta.env.VITE_UPS_COMMERCIAL || "",
  VITE_UPS_DOUBLEUPS: import.meta.env.VITE_UPS_DOUBLEUPS || "",
  VITE_UPS_HOMEUPS: import.meta.env.VITE_UPS_HOMEUPS || "",
  VITE_UPS_INDUSTRIALUPS: import.meta.env.VITE_UPS_INDUSTRIALUPS || "",

};



export const UPS_SYSTEMS = [
  {
    id: 1,
    slug: "home-inverter-ups-system",
    category: "Domestic",
    name: "Home Inverter UPS System",
    image: PRODUCT_IMAGES.VITE_UPS_HOMEUPS,
    description:
      "Reliable home inverter UPS system designed for residential power backup during outages. Ideal for running lights, fans, TV, WiFi, and small appliances with pure sine wave output.",

    pricing: {
      basePrice: 12000,
      currency: "INR",
      unit: "Unit",
      minimumOrderQuantity: 1
    },

    specifications: {
      upsType: "Line Interactive / Inverter UPS",
      capacityRange: "600VA – 2kVA",
      outputWaveform: "Pure Sine Wave",
      inputVoltageRange: "140V – 300V",
      batteryType: "Tubular / SMF",
      backupTime: "2 – 6 Hours",
      phase: "Single Phase"
    },

    safetyFeatures: [
      "Overload Protection",
      "Short Circuit Protection",
      "Deep Discharge Protection",
      "Overcharge Protection",
      "Thermal Shutdown"
    ],

    services: {
      siteSurvey: { available: true },
      installation: { available: true },
      amc: { available: true },
      repair: { available: true, emergencySupport: true },
      batteryReplacement: { available: true },
      warranty: { available: true, period: "24 Months" }
    }
  },

  {
    id: 2,
    slug: "commercial-line-interactive-ups",
    category: "Commercial",
    name: "Commercial Line Interactive UPS",
    image: PRODUCT_IMAGES.VITE_UPS_COMMERCIAL,
    description:
      "Efficient line-interactive UPS system suitable for offices, retail shops, and IT setups requiring stable voltage regulation and backup protection.",

    pricing: {
      basePrice: 45000,
      currency: "INR",
      unit: "Unit"
    },

    specifications: {
      upsType: "Line Interactive UPS",
      capacityRange: "1kVA – 10kVA",
      outputWaveform: "Pure Sine Wave",
      efficiency: "85% – 92%",
      batteryType: "VRLA / SMF",
      transferTime: "4 – 8 ms",
      phase: "Single / Three Phase"
    },

    safetyFeatures: [
      "Automatic Voltage Regulation (AVR)",
      "Overload & Short Circuit Protection",
      "Surge Protection",
      "Battery Low Warning Alarm"
    ],

    services: {
      installation: { available: true },
      amc: { available: true },
      repair: { available: true },
      loadUpgrade: { available: true },
      spareParts: { available: true },
      warranty: { available: true, period: "24 Months" }
    }
  },

  {
    id: 3,
    slug: "online-double-conversion-ups",
    category: "Industrial",
    name: "Online Double Conversion UPS",
    image: PRODUCT_IMAGES.VITE_UPS_DOUBLEUPS,
    description:
      "High-performance online double conversion UPS system designed for hospitals, data centers, and industrial applications requiring zero transfer time and uninterrupted power supply.",

    pricing: {
      basePrice: 85000,
      currency: "INR",
      unit: "Unit"
    },

    specifications: {
      upsType: "Online Double Conversion",
      capacityRange: "1kVA – 200kVA+",
      outputWaveform: "Pure Sine Wave",
      efficiency: "90% – 95%",
      transferTime: "0 ms",
      batteryType: "VRLA / Lithium-ion",
      inputVoltageRange: "110V – 300V",
      phase: "Three Phase"
    },

    safetyFeatures: [
      "Zero Transfer Time",
      "Overheat Protection",
      "High/Low Voltage Cut-Off",
      "Emergency Shutdown",
      "Remote Monitoring System"
    ],

    services: {
      siteSurvey: { available: true },
      installation: { available: true },
      amc: { available: true },
      repair: { available: true, emergencySupport: true },
      spareParts: { available: true },
      remoteMonitoring: { available: true },
      warranty: { available: true, period: "24 – 36 Months" }
    }
  },

  {
    id: 4,
    slug: "industrial-heavy-duty-ups",
    category: "Industrial",
    name: "Industrial Heavy Duty UPS System",
    image: PRODUCT_IMAGES.VITE_UPS_INDUSTRIALUPS,
    description:
      "Heavy-duty industrial UPS system engineered for manufacturing plants, large commercial complexes, and mission-critical operations requiring high capacity backup power.",

    pricing: {
      basePrice: 250000,
      currency: "INR",
      unit: "Project"
    },

    specifications: {
      upsType: "Industrial Online UPS",
      capacityRange: "10kVA – 500kVA",
      outputWaveform: "Pure Sine Wave",
      efficiency: "Up to 96%",
      batteryBank: "External Battery Cabinet",
      monitoringSystem: "Digital LCD + Remote Access",
      phase: "Three Phase"
    },

    safetyFeatures: [
      "Advanced Load Management",
      "Redundant Power Modules",
      "Short Circuit & Surge Protection",
      "Fire & Thermal Protection",
      "Emergency Bypass System"
    ],

    services: {
      siteSurvey: { available: true },
      installation: { available: true },
      amc: { available: true },
      repair: { available: true, emergencySupport: true },
      batteryBankInstallation: { available: true },
      inspection: { available: true },
      warranty: { available: true, period: "36 Months" }
    }
  }
];
