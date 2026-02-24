export const PRODUCT_IMAGES = {

  ELEVATOR_COMMERCIAL: import.meta.env.VITE_ELEVATOR_COMMERCIAL || "",
  ELEVATOR_SINGLE_PHASE: import.meta.env.VITE_ELEVATOR_SINGLE_PHASE || "",
  ELEVATOR_GLASS_DOOR: import.meta.env.VITE_ELEVATOR_GLASS_DOOR || "",
  ELEVATOR_GOODS_LIFT: import.meta.env.VITE_ELEVATOR_GOODS_LIFT || "",
  ELEVATOR_THYDRAULIC: import.meta.env.VITE_ELEVATOR_THYDRAULIC || "",
  ELEVATOR_RESIDENTIAL: import.meta.env.VITE_ELEVATOR_RESIDENTIAL || "",

};


export const RESIDENCIAL_ELEVATORS = [
  {
    id: 1,
    slug: "single-phase-lift-for-home",
    category: "Residential",
    name: "Single Phase Lift For Home",
    image: PRODUCT_IMAGES.ELEVATOR_SINGLE_PHASE,
    description:
      "Electric traction based residential lift designed for private homes with single phase power supply.",

    pricing: {
      basePrice: 750000,
      currency: "INR",
      unit: "Piece",
      minimumOrderQuantity: 1
    },

    specifications: {
      liftType: "Electric Traction",
      phase: "Single Phase",
      capacityPersons: 4,
      maxCapacityKg: 272,
      numberOfStops: "G + 3",
      operatingHeight: "Up to 12 meters",
      speed: "0.3 m/s",
      voltage: "220V",
      doorType: "Automatic",
      cabinFinish: "Stainless Steel",
      installationType: "Indoor"
    },

    safetyFeatures: [
      "Emergency Alarm",
      "Automatic Rescue Device",
      "Overload Protection",
      "Infrared Door Sensor",
      "Battery Backup"
    ],

    services: {
      installation: {
        available: true,
        includes: [
          "Site Inspection",
          "Shaft Preparation",
          "Lift Installation",
          "Electrical Setup",
          "Safety Testing"
        ]
      },

      amc: {
        available: true,
        packages: [
          { type: "Basic", yearlyCost: 25000 },
          { type: "Premium", yearlyCost: 45000 }
        ]
      },

      repair: {
        available: true,
        responseTime: "2–6 Hours",
        emergencySupport: true
      },

      modernization: {
        available: true,
        upgrades: [
          "Control Panel Upgrade",
          "Door Automation Upgrade",
          "Energy Efficient Motor"
        ]
      },

      inspection: {
        available: true,
        compliance: "Government Safety Standards"
      },

      spareParts: {
        available: true,
        parts: [
          "Door Motors",
          "Control Panels",
          "Sensors",
          "Buttons"
        ]
      },

      warranty: {
        available: true,
        period: "12 Months"
      }
    }
  },

  {
    id: 2,
    slug: "hydraulic-passenger-lift",
    category: "Passenger",
    name: "Hydraulic Passenger Lift",
    image: PRODUCT_IMAGES.ELEVATOR_THYDRAULIC,
    description:
      "Hydraulic system based lift suitable for residential and commercial mid-rise buildings.",

    pricing: {
      basePrice: 750000,
      currency: "INR",
      unit: "Piece",
      minimumOrderQuantity: 1
    },

    specifications: {
      liftType: "Hydraulic",
      phase: "Three Phase",
      capacityPersons: 6,
      maxCapacityKg: 408,
      numberOfStops: "G + 3",
      operatingHeight: "Up to 18 meters",
      speed: "0.5 m/s",
      voltage: "380V",
      doorType: "Automatic",
      cabinFinish: "SS / Marble Finish",
      installationType: "Indoor"
    },

    safetyFeatures: [
      "Pressure Relief Valve",
      "Emergency Lowering System",
      "Overload Protection",
      "Door Interlock"
    ],

    services: {
      installation: { available: true },
      amc: {
        available: true,
        packages: [
          { type: "Standard", yearlyCost: 30000 },
          { type: "Comprehensive", yearlyCost: 55000 }
        ]
      },
      repair: { available: true, emergencySupport: true },
      modernization: { available: true },
      inspection: { available: true },
      spareParts: { available: true },
      warranty: { available: true, period: "18 Months" }
    }
  },

  {
    id: 3,
    slug: "commercial-passenger-elevator",
    category: "Commercial",
    name: "Commercial Passenger Elevator",
    image: PRODUCT_IMAGES.ELEVATOR_COMMERCIAL,
    description:
      "High capacity commercial elevator designed for offices, malls and hospitals.",

    pricing: {
      basePrice: 750000,
      currency: "INR",
      unit: "Piece"
    },

    specifications: {
      liftType: "MRL / Machine Room",
      phase: "Three Phase",
      capacityPersons: 6,
      maxCapacityKg: 408,
      numberOfStops: "G + 3",
      speed: "1 m/s",
      voltage: "415V",
      doorType: "Center Opening Automatic"
    },

    safetyFeatures: [
      "Auto Rescue Device",
      "Over Speed Governor",
      "Emergency Brake",
      "Fireman Switch"
    ],

    services: {
      installation: { available: true },
      amc: { available: true },
      repair: { available: true, emergencySupport: true },
      modernization: { available: true },
      inspection: { available: true },
      spareParts: { available: true },
      warranty: { available: true, period: "24 Months" }
    }
  },

  {
    id: 4,
    slug: "glass-door-passenger-elevator",
    category: "Luxury",
    name: "Glass Door Passenger Elevator",
    image: PRODUCT_IMAGES.ELEVATOR_GLASS_DOOR,
    pricing: { basePrice: 850000, currency: "INR" },

    specifications: {
      liftType: "Panoramic/ Traction Lift / Hydraulic",
      phase: "Three Phase",
      capacityPersons: 6,
      maxCapacityKg: 408,
      numberOfStops: "G + 3",
      doorType: "Glass Automatic",
      installationType: "Indoor / Outdoor"
    },

    safetyFeatures: [
      "Tempered Safety Glass",
      "Emergency Alarm",
      "Overload Protection"
    ],

    services: {
      installation: { available: true },
      amc: { available: true },
      repair: { available: true },
      modernization: { available: true },
      inspection: { available: true },
      spareParts: { available: true },
      warranty: { available: true }
    }
  },

  {
    id: 5,
    slug: "manual-residential-elevator",
    category: "Residential",
    name: "Manual Residential Elevator",
    image: PRODUCT_IMAGES.ELEVATOR_RESIDENTIAL,
    pricing: { basePrice: 650000, currency: "INR" },

    specifications: {
      liftType: "Manual",
      phase: "Single Phase",
      capacityPersons: 4,
      maxCapacityKg: 272,
      doorType: "Manual"
    },

    safetyFeatures: [
      "Mechanical Brake",
      "Manual Door Lock",
      "Emergency Alarm"
    ],

    services: {
      installation: { available: true },
      amc: { available: true },
      repair: { available: true },
      inspection: { available: true },
      warranty: { available: true }
    }
  },

  {
    id: 6,
    slug: "goods-lift",
    category: "Industrial",
    name: "Goods Lift",
    image: PRODUCT_IMAGES.ELEVATOR_GOODS_LIFT,
    pricing: { basePrice: 950000, currency: "INR" },

    specifications: {
      liftType: "Hydraulic / Traction",
      phase: "Three Phase",
      maxCapacityKg: 2000,
      numberOfStops: "G + 4",
      installationType: "Warehouse"
    },

    safetyFeatures: [
      "Overload Sensor",
      "Emergency Stop",
      "Safety Gate Lock"
    ],

    services: {
      installation: { available: true },
      amc: { available: true },
      repair: { available: true },
      inspection: { available: true },
      spareParts: { available: true },
      warranty: { available: true }
    }
  },

  // {
  //   id: 7,
  //   slug: "residential-elevators-for-homes-apartments",
  //   category: "Residential",
  //   name: "Residential Elevators for Homes & Apartments",

  //   pricing: { basePrice: 900000, currency: "INR" },

  //   specifications: {
  //     liftType: "Traction / MRL",
  //     phase: "Single / Three Phase",
  //     capacityPersons: 5,
  //     maxCapacityKg: 400,
  //     numberOfStops: "G + 5"
  //   },

  //   safetyFeatures: [
  //     "Emergency Alarm",
  //     "Auto Rescue Device",
  //     "Infrared Door Sensor",
  //     "Battery Backup"
  //   ],

  //   services: {
  //     installation: { available: true },
  //     amc: { available: true },
  //     repair: { available: true },
  //     modernization: { available: true },
  //     inspection: { available: true },
  //     spareParts: { available: true },
  //     warranty: { available: true, period: "12–24 Months" }
  //   }
  // }
];

