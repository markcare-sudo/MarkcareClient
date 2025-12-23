// src/constants/caseStudies.js

export const CASE_STUDIES = [
  {
    id: 'ac-services-apartment',
    serviceKey: 'AC_SERVICES',
    serviceLabel: 'AC Services',
    title: 'Improving Cooling & Reducing Bills in a 120-Unit Apartment',
    location: 'Bangalore, Karnataka',
    clientType: 'Residential – Gated Community',
    challenge:
      'Residents were facing poor cooling, water leakage from indoor units, and very high electricity bills during peak summer. Previous vendors were doing only basic cleaning without diagnosing root causes.',
    solutionPoints: [
      'Conducted detailed inspection of 80+ indoor and outdoor AC units, documenting issues in a digital checklist.',
      'Performed deep chemical cleaning of coils, blower, drain trays and outdoor condensers with proper PPE and water recovery.',
      'Rectified gas leaks, re-did insulation on refrigerant lines, and balanced refrigerant levels as per manufacturer guidelines.',
      'Set up an Annual Maintenance Contract (AMC) with planned preventive maintenance before every summer.'
    ],
    resultsPoints: [
      'Average room cooling time reduced by ~30%.',
      'Electricity consumption dropped by 18–22% in the next billing cycle (as reported by the association).',
      'Complaint volume reduced by more than 60% within two months.',
      'Society renewed AMC for 3 years and extended scope to common-area ACs.'
    ],
    tags: ['AC Service', 'Residential', 'Energy Saving', 'AMC']
  },

  {
    id: 'ro-plant-school',
    serviceKey: 'RO_PLANT',
    serviceLabel: 'RO Plants',
    title: 'Safe Drinking Water for a 1,200-Student School Campus',
    location: 'Chennai, Tamil Nadu',
    clientType: 'Educational Institution',
    challenge:
      'The school’s existing RO system was under-capacity and poorly maintained, leading to frequent breakdowns, bad taste in water, and concerns from parents about water quality.',
    solutionPoints: [
      'Analysed raw water quality and actual daily demand across drinking points, kitchens, and staff areas.',
      'Re-designed the RO plant sizing with appropriate pre-treatment (sediment + carbon) and multi-stage RO membranes.',
      'Installed a new RO plant with food-grade storage tanks, proper distribution lines, and online TDS monitoring.',
      'Trained school staff on basic checks and signed an AMC for membrane, filter replacement and periodic sanitization.'
    ],
    resultsPoints: [
      'Consistent drinking water quality within recommended TDS and microbial limits.',
      'Zero breakdowns during the first academic year after upgrade.',
      'Parents and staff reported better taste and clarity of water.',
      'School now uses RO plant in their admission communication as a safety highlight.'
    ],
    tags: ['RO Plant', 'Water Quality', 'Institution', 'AMC']
  },

  {
    id: 'wtp-apartment-township',
    serviceKey: 'WTP',
    serviceLabel: 'Water Treatment Plants (WTP)',
    title: 'Stabilizing Water Quality in a 500-Flat Township WTP',
    location: 'Hyderabad, Telangana',
    clientType: 'Residential Township',
    challenge:
      'Residents complained of yellowish water, scaling on fixtures, and foul odour at times. The existing WTP was functional but poorly operated with no clear records, chemical dosing, or preventive care.',
    solutionPoints: [
      'Audited the existing WTP including clarifier, filters, softener, and chemical dosing systems.',
      'Standardized operating procedures (SOPs), including backwash schedules, chemical dosing charts, and logbooks.',
      'Replaced damaged filter media, serviced pumps and valves, and corrected dosing pump calibration.',
      'Implemented monthly water testing with digital reports shared to the association WhatsApp/Email.'
    ],
    resultsPoints: [
      'Visible improvement in water clarity and odour within 7–10 days.',
      'Reduced scaling in taps, faucets and geysers due to controlled hardness.',
      'WTP downtime reduced to near-zero with planned preventive maintenance.',
      'Association gained confidence due to transparent reporting and documented SOPs.'
    ],
    tags: ['WTP', 'Township', 'SOP', 'Water Quality']
  },

  {
    id: 'stp-commercial-complex',
    serviceKey: 'STP',
    serviceLabel: 'Sewage Treatment Plants (STP)',
    title: 'Bringing a Non-Compliant STP Back Within Pollution Norms',
    location: 'Bangalore, Karnataka',
    clientType: 'Commercial Tech Park',
    challenge:
      'The STP outlet parameters (BOD, COD, TSS) were consistently outside PCB norms, leading to notices from authorities and foul odour around the STP area.',
    solutionPoints: [
      'Performed a complete process audit of the STP including aeration, sludge recirculation, blower capacity and tank sizing.',
      'Optimised aeration and sludge management, corrected return sludge ratio, and fixed non-functional diffusers.',
      'Introduced suitable bio-culture dosing and regular MLSS/DO monitoring schedule.',
      'Implemented a structured O&M plan including log sheets, emergency response procedures, and operator training.'
    ],
    resultsPoints: [
      'Treated water quality brought back within PCB norms within 4–6 weeks.',
      'Odour complaints from building occupants dropped drastically.',
      'Client avoided penalties and obtained compliance certificates.',
      'Signed a long-term O&M contract with clear performance KPIs.'
    ],
    tags: ['STP', 'Compliance', 'PCB Norms', 'O&M']
  },

  {
    id: 'etp-manufacturing',
    serviceKey: 'ETP',
    serviceLabel: 'Effluent Treatment Plants (ETP)',
    title: 'Upgrading an ETP for Stricter Discharge Standards',
    location: 'Ahmedabad, Gujarat',
    clientType: 'Manufacturing Unit',
    challenge:
      'A process industry had to meet newly tightened effluent discharge norms. Their existing ETP could not consistently achieve the required parameters, risking shutdown and penalties.',
    solutionPoints: [
      'Reviewed process effluent characteristics and variations across shifts.',
      'Redesigned the treatment sequence with equalization, chemical treatment, and advanced filtration.',
      'Upgraded key components (pumps, agitators, dosing systems) and integrated basic PLC-based automation.',
      'Provided detailed documentation, drawings, and operator training for the upgraded ETP.'
    ],
    resultsPoints: [
      'Consistent compliance with new discharge norms.',
      'Reduced chemical consumption through optimized dosing.',
      'Minimized manual intervention with semi-automated operation.',
      'Client passed external audits without major observations.'
    ],
    tags: ['ETP', 'Industry', 'Upgradation', 'Compliance']
  },

  {
    id: 'lifts-mall',
    serviceKey: 'LIFTS_ESCALATORS',
    serviceLabel: 'Lifts & Escalators',
    title: 'Reducing Downtime for Lifts & Escalators in a Busy Mall',
    location: 'Mumbai, Maharashtra',
    clientType: 'Retail Mall',
    challenge:
      'Frequent breakdowns of lifts and escalators were affecting visitor experience and causing crowding during weekends. Service response from the existing vendor was slow and reactive.',
    solutionPoints: [
      'Conducted a health audit of all vertical transport systems with risk scoring for each unit.',
      'Implemented a preventive maintenance schedule aligned with footfall patterns and mall timings.',
      'Replaced worn-out components proactively and fixed chronic issues (door sensors, controllers, handrail alignment).',
      'Set up a rapid-response protocol with defined SLAs and a dedicated technician on stand-by during peak hours.'
    ],
    resultsPoints: [
      'Breakdowns reduced by more than 50% within three months.',
      'Improved passenger flow and reduced complaints from tenants and visitors.',
      'Mall management gained predictability with clear SLAs and reporting.',
      'Plan extended to include annual safety audits and modernization roadmap.'
    ],
    tags: ['Lifts', 'Escalators', 'Retail', 'Uptime']
  },

  {
    id: 'solar-factory',
    serviceKey: 'SOLAR',
    serviceLabel: 'Solar Power Systems',
    title: 'Cutting Grid Dependence with a 150 kW Rooftop Solar Plant',
    location: 'Sriperumbudur, Tamil Nadu',
    clientType: 'Industrial – Manufacturing Plant',
    challenge:
      'The client faced rising power costs and wanted to reduce dependency on grid power without disrupting existing operations or compromising safety.',
    solutionPoints: [
      'Performed detailed site survey, structural checks, and load analysis of critical machines.',
      'Designed a 150 kW rooftop solar system with string inverters and appropriate protections.',
      'Executed installation with proper cable routing, earthing, lightning protection, and net-metering coordination.',
      'Integrated remote monitoring for real-time generation tracking and fault alerts.'
    ],
    resultsPoints: [
      'Offset 25–30% of the plant’s daytime electricity consumption.',
      'Simple payback period estimated at 4–5 years.',
      'Improved ESG profile with documented reduction in CO₂ emissions.',
      'Client planning phased expansion to 300 kW based on first-year performance.'
    ],
    tags: ['Solar', 'Rooftop', 'Industrial', 'Energy Saving']
  },

  {
    id: 'dg-backup-it-park',
    serviceKey: 'DG_POWER',
    serviceLabel: 'DG & Power Systems',
    title: 'Ensuring Uninterrupted Power for an IT Park with DG Optimization',
    location: 'Hyderabad, Telangana',
    clientType: 'IT/Business Park',
    challenge:
      'Frequent DG failures and fuel inefficiency were causing unexpected downtime during power cuts, impacting critical IT operations and tenant satisfaction.',
    solutionPoints: [
      'Conducted load study and performance audit of existing DG sets and panels.',
      'Overhauled critical DG components, cleaned fuel lines, and corrected earthing and safety interlocks.',
      'Optimized load sharing between multiple DG sets and integrated automatic transfer switch (ATS) checks.',
      'Introduced periodic testing schedule and checklists for in-house facility team.'
    ],
    resultsPoints: [
      'Zero unplanned DG failures during the next monsoon season.',
      'More efficient DG operation with better load-sharing and fuel economy.',
      'Higher confidence from tenants due to stable backup power.',
      'Park management extended our scope to include LT panel and UPS health checks.'
    ],
    tags: ['DG', 'Power Backup', 'IT Park', 'Reliability']
  },

  {
    id: 'chemical-cleaning-hotel',
    serviceKey: 'CHEMICAL_CLEANING',
    serviceLabel: 'Chemical Cleaning & Descaling',
    title: 'Restoring Chilled Water Efficiency in a Business Hotel',
    location: 'Delhi NCR',
    clientType: 'Hospitality – Business Hotel',
    challenge:
      'Over time, the hotel’s chilled water system and heat exchangers had developed scaling and fouling, leading to poor cooling in rooms and very high power consumption.',
    solutionPoints: [
      'Surveyed the chilled water lines, plate heat exchangers, and condenser sections for scale build-up.',
      'Selected appropriate descaling chemicals compatible with system metallurgy and guest safety.',
      'Executed controlled chemical circulation, neutralisation, and thorough flushing with proper isolation and safety.',
      'Documented the procedure and recommended a preventive chemical cleaning interval.'
    ],
    resultsPoints: [
      'Improved chiller performance and faster pull-down time for guest rooms.',
      'Reduced energy consumption for the HVAC system, as reflected in monthly power bills.',
      'Extended life of critical HVAC equipment by removing aggressive deposits.',
      'Hotel included the activity as part of their standard annual maintenance plan.'
    ],
    tags: ['Chemical Cleaning', 'HVAC', 'Energy Efficiency', 'Hospitality']
  }
];
