export const PROJECTS_IMAGES = {
  ROYEPEETA: import.meta.env.VITE_ROYEPEETA,
  PROJECTS_ROWATERP1: import.meta.env.VITE_PROJECTS_ROWATERP1,
  PROJECTS_ROWATERP2: import.meta.env.VITE_PROJECTS_ROWATERP2,
  PROJECTS_ROWATERP3: import.meta.env.VITE_PROJECTS_ROWATERP3,
    PROJECTS_ELEVATORP1: import.meta.env.VITE_PROJECTS_ELEVATORP1,
      PROJECTS_ELEVATORP2: import.meta.env.VITE_PROJECTS_ELEVATORP2,
}

export const PROJECT_CATEGORIES = [
  {
    name: "RO Water Purifier",
    projects: [
      {
        id: 1,
        title: "Government Royapettah Hospital – Common Area",
        location: "Chennai, Tamil Nadu",
        capacity: "1000 LPH",
        description: "Installed 1000 LPH RO plant for Common Area water purification system.",
        // image: "/hospital.jpg",
        image: PROJECTS_IMAGES.ROYEPEETA,
      },
      {
        id: 2,
        title: "Government Royapettah Hospital – Medical Block",
        location: "Chennai, Tamil Nadu",
        capacity: "1000 LPH",
        description: "Installed 1000 LPH RO plant for Medical Block.",
        image: PROJECTS_IMAGES.PROJECTS_ROWATERP1,
      },
      {
        id: 3,
        title: "Government Royapettah Hospital – New Cancer Block",
        location: "Chennai, Tamil Nadu",
        capacity: "1000 LPH",
        description: "Installed 1000 LPH RO plant for New Cancer Block.",
        image: PROJECTS_IMAGES.PROJECTS_ROWATERP2,
      },
      {
        id: 4,
        title: "Government Royapettah Hospital – New Surgical Block",
        location: "Chennai, Tamil Nadu",
        capacity: "1000 LPH",
        description: "Installed 1000 LPH RO plant for New Surgical Block (Work Order 2026–2027).",
        image: PROJECTS_IMAGES.PROJECTS_ROWATERP3,
      },
      {
        id: 5,
        title: "Government Peripheral Hospital – 4 Units",
        location: "Tamil Nadu",
        capacity: "1000 LPH × 4 Units",
        description: "Supplied and installed 4 Nos of 1000 LPH RO plants as per government work order.",
        image: PROJECTS_IMAGES.ROYEPEETA,
      },
      {
        id: 6,
        title: "Apollo Clinic",
        location: "Bangalore, Karnataka",
        capacity: "500 LPH",
        description: "Installed medical-grade RO system.",
        image: PROJECTS_IMAGES.ROYEPEETA,
      },
    ],
  },

  {
    name: "Residential Elevator",
    projects: [
      {
        id: 1,
        title: "Green Villa Residence",
        location: "Bangalore",
        capacity: "G+3 Floors",
        description: "Installed premium home elevator.",
        image: PROJECTS_IMAGES.PROJECTS_ELEVATORP1,
      },
      {
        id: 2,
        title: "Sai Apartment",
        location: "Chennai",
        capacity: "4 Passenger Lift",
        description: "Installed compact residential lift.",
        image: PROJECTS_IMAGES.PROJECTS_ELEVATORP2,
      },
    ],
  },

  {
    name: "STP Plant",
    projects: [
      {
        id: 1,
        title: "Tech Park STP",
        location: "Hyderabad",
        capacity: "50 KLD",
        description: "Installed sewage treatment plant.",
        image: "/stp.jpg",
      },
    ],
  },

  {
    name: "Industrial RO",
    projects: [],
  },

  {
    name: "Water Softener",
    projects: [],
  },

  {
    name: "Solar Power Systems",
    projects: [],
  },

  {
    name: "Generators",
    projects: [],
  },

  {
    name: "AC Systems",
    projects: [],
  },
];