import { MaintenancePackage, ProjectLog, ReviewItem, ServiceItem, Technician } from '../types';

export const SHOP_INFO = {
  name: "ROAD DOGS AUTO CARE",
  location: "Aurora, IL",
  fullAddress: "Aurora, IL, United States",
  phone: "+1 331-300-9056",
  phoneFormatted: "(331) 300-9056",
  email: "Roaddogsautomobilemechanic@gmail.com",
  hoursWeekday: "8:00 AM – 6:00 PM",
  hoursSunday: "Closed",
  emergencyDispatch: "24/7 Priority Emergency Dispatch",
  lat: "41.7606° N",
  long: "88.3201° W",
  leadTech: "Mike \"Chief\" Henderson (Master ASE)",
  warranty: "24-Month / 24,000-Mile Nationwide Warranty",
  logo: "https://res.cloudinary.com/ddcrshx6o/image/upload/v1790121945/813623866_1523067606522383_2039685012549843832_n_ovxbv2.jpg"
};

// Generated visual assets
export const IMAGES = {
  logo: "https://res.cloudinary.com/ddcrshx6o/image/upload/v1790121945/813623866_1523067606522383_2039685012549843832_n_ovxbv2.jpg",
  heroWorkshop: "/src/assets/images/auto_shop_hero_1790121257609.jpg",
  diagnosticBay: "/src/assets/images/mechanic_diagnostic_bay_1790120723807.jpg",
  workshopBays: "/src/assets/images/workshop_hydraulic_bays_1790120737119.jpg",
  brakeCaliper: "/src/assets/images/brake_rotor_caliper_1790120750034.jpg",
  transmissionRepair: "/src/assets/images/transmission_repair_1790121270878.jpg",
  suspensionLift: "/src/assets/images/suspension_chassis_lift_1790120760250.jpg",
  hvacRecharge: "/src/assets/images/hvac_recharge_bay_1790121288925.jpg",
  oilService: "/src/assets/images/oil_service_chassis_1790121302920.jpg"
};

export const SERVICES: ServiceItem[] = [
  {
    id: "engine-diag",
    title: "Engine Diagnostics & Repair",
    category: "Mechanical Service Bay",
    badge: "TIER-1 COMPUTER SCAN",
    iconName: "Cpu",
    image: IMAGES.diagnosticBay,
    description: "Check Engine light fault decoding, ignition synchronization, and precision head rebuilding.",
    features: [
      "Check engine light fault decoding & DTC clear",
      "Fuel injection balance & rail pressure test",
      "Timing belts, chains & hydraulic tensioners",
      "Cylinder head gasket leak detection & replacement",
      "Iridium spark plugs & inductive ignition coils"
    ],
    turnaround: "1 – 3 Business Hours",
    guarantee: "Includes Digital Printout Telemetry"
  },
  {
    id: "brake-system",
    title: "Brake System Care",
    category: "Stopping Safety",
    badge: "STOPPING SAFETY",
    iconName: "Disc",
    image: IMAGES.brakeCaliper,
    description: "Hydraulic clamping restoration, slotted rotor machining, and electronic ABS sensor troubleshooting.",
    features: [
      "Ceramic & semi-metallic pad installations",
      "Slotted/drilled rotor resurfacing & runout mic",
      "Brake caliper overhauls & seal replacement",
      "High-temp DOT4 hydraulic fluid pressure flush",
      "ABS sensor, exciter ring & harness calibration"
    ],
    turnaround: "1.5 – 2.5 Hours",
    guarantee: "12,000-Mile Wear Guarantee"
  },
  {
    id: "transmission",
    title: "Transmission & Drivetrain",
    category: "Drivetrain Core",
    badge: "DRIVETRAIN CORE",
    iconName: "Cog",
    image: IMAGES.transmissionRepair,
    description: "Automatic gear synchronization, multi-plate clutch setups, transfer case & CV axle repairs.",
    features: [
      "Synthetic transmission fluid & filter exchange",
      "Clutch disk, pressure plate & throwout bearing",
      "Torque converter stall & slip lockup analysis",
      "Limited-slip differential fluid & ring gear inspection",
      "4WD / AWD electronic transfer case maintenance"
    ],
    turnaround: "2 – 6 Hours",
    guarantee: "Electronic Shift Timing Calibrated"
  },
  {
    id: "suspension-alignment",
    title: "Suspension & Alignment",
    category: "Laser Precision",
    badge: "LASER PRECISION",
    iconName: "Crosshair",
    image: IMAGES.suspensionLift,
    description: "Computerized 4-wheel tracking, high-rate damper replacements, and steering rack rebuilds.",
    features: [
      "Computerized laser 4-wheel alignment calibration",
      "Monotube shock absorber & MacPherson strut renewal",
      "Reinforced sway bar links & polyurethane bushings",
      "Lower & upper heavy-duty ball joint replacement",
      "Electronic Power Steering (EPS) zero-point reset"
    ],
    turnaround: "1 – 2 Hours",
    guarantee: "Hunter Hawkeye Optical Tolerances"
  },
  {
    id: "hvac-climate",
    title: "HVAC & Climate Control",
    category: "Thermal Balance",
    badge: "THERMAL BALANCE",
    iconName: "ThermometerSnowflake",
    image: IMAGES.hvacRecharge,
    description: "Complete evacuation, compressor replacement, leak fluoroscopy, and dual-zone climate remediation.",
    features: [
      "R134a & modern 1234yf refrigerant evac & recharge",
      "A/C compressor clutch & condenser matrix replacement",
      "Heater core power flushing & blend-door recalibration",
      "Multi-stage HEPA cabin air filtration replacement",
      "Evaporator antimicrobial fogging & odor eradication"
    ],
    turnaround: "1 – 2 Hours",
    guarantee: "Sub-40°F Vent Temperature Guaranteed"
  },
  {
    id: "routine-maintenance",
    title: "Routine Factory Maintenance",
    category: "Scheduled Ops",
    badge: "SCHEDULED OPS",
    iconName: "Wrench",
    image: IMAGES.oilService,
    description: "OEM service intervals (30k / 60k / 90k), dynamic tire rotation, and full synthetic servicing.",
    features: [
      "Full synthetic Mobil 1 / Motul oil & OEM filter change",
      "Tire rotation & Road-Force high-speed dynamic balance",
      "12V AGM / Lead-acid conductance battery health test",
      "Multi-point bumper-to-bumper chassis & seal review",
      "Washer, coolant, brake & steering reservoir top-offs"
    ],
    turnaround: "45 – 60 Minutes",
    guarantee: "Express Aurora Bay Available"
  }
];

export const MAINTENANCE_PACKAGES: MaintenancePackage[] = [
  {
    id: "basic-care",
    name: "BASIC CARE PACKAGE",
    subtitle: "Essential baseline lubrication and preventative chassis scan for commuter vehicles.",
    price: 89,
    priceNote: "Standard Service",
    popular: false,
    features: [
      "Full synthetic oil & OEM spin-on filter",
      "30-Point safety chassis inspection",
      "4-Tire rotation & pressure trim",
      "Windshield washer fluid top-off",
      "Complete brake-lining micrometer check",
      "CAN-bus computerized module scan"
    ],
    reportIncluded: "Digital report included"
  },
  {
    id: "pro-road-guardian",
    name: "PRO ROAD GUARDIAN",
    subtitle: "The total seasonal preventative overhaul recommended every 15,000 miles.",
    price: 199,
    priceNote: "Complete Tune",
    popular: true,
    features: [
      "Everything in Basic Care Included",
      "Full brake lining, rotor & caliper inspection",
      "All fluid top-offs (coolant, power steering, brake)",
      "Complete computerized OBD-II module scan",
      "Digital battery & alternator charge test",
      "Throttle body & air intake inspection"
    ],
    reportIncluded: "Includes priority bay scheduling"
  },
  {
    id: "performance-heavy",
    name: "PERFORMANCE HEAVY SERVICE",
    subtitle: "Comprehensive deep mechanical refresh for work trucks, track cars, and fleets.",
    price: 389,
    priceNote: "Heavy Overhaul",
    popular: false,
    features: [
      "Everything in Pro Guardian Included",
      "Complete coolant and brake fluid power flush",
      "Iridium spark plug inspection & gap validation",
      "Accessory serpentine & timing belt wear check",
      "Laser 4-wheel computerized alignment",
      "Full A/C refrigeration pressure & vent cycle check"
    ],
    reportIncluded: "OEM Fleet Documentation Included"
  }
];

export const TECHNICIANS: Technician[] = [
  {
    id: "mike-henderson",
    name: "Mike \"Chief\" Henderson",
    role: "Lead Master ASE Diagnostic Specialist",
    tag: "LEAD MASTER",
    experience: "15+ Years",
    bio: "15+ years diagnosing complex electrical, electronic ECU architecture, and internal combustion performance issues.",
    certifications: "ASE L1, Master Tech",
    focus: "ECU Architecture & Calibration"
  },
  {
    id: "david-ramos",
    name: "David Ramos",
    role: "Drivetrain & Heavy Transmission Tech",
    tag: "DRIVETRAIN",
    experience: "12+ Years",
    bio: "12+ years rebuilding manual, automatic, and dual-clutch assemblies. Specialist in torque converter lockups and transfer cases.",
    certifications: "Allison & Tremec Pro",
    focus: "Valve Bodies & Clutch Packs"
  },
  {
    id: "marcus-vance",
    name: "Marcus Vance",
    role: "Suspension & Performance Specialist",
    tag: "CHASSIS",
    experience: "9+ Years",
    bio: "9+ years dialing in track chassis geometry, custom coilover damping rates, and sub-millimeter laser wheel alignments.",
    certifications: "Hunter 3D Master",
    focus: "Chassis Kinematics & Alignment"
  },
  {
    id: "elena-torres",
    name: "Elena Torres",
    role: "Service Coordinator & Logistics",
    tag: "LOGISTICS",
    experience: "8+ Years",
    bio: "Manages rapid OEM parts procurement, digital customer inspection communication, and live bay workflow synchronization.",
    certifications: "Client Operations",
    focus: "Client Operations & Parts Stream"
  }
];

export const REVIEWS: ReviewItem[] = [
  {
    id: "rev-1",
    name: "David Ramirez",
    initials: "DR",
    vehicle: "2021 Ford F-150 EcoBoost",
    rating: 5,
    timeAgo: "3 days ago",
    category: "engine",
    categoryLabel: "Engine & Diagnostics",
    verified: true,
    quote: "The local Ford dealership quoted me $4,200 for a phantom timing-chain rattle and wanted the truck for two weeks. Mike took it into Bay 2, ran live telemetry, and isolated a simple worn tensioner pulley. Handed the truck back the same afternoon for less than a quarter of the dealer cost. Mike texted me photos every step of the teardown. Unbeatable honesty."
  },
  {
    id: "rev-2",
    name: "Alex Kowalski",
    initials: "AK",
    vehicle: "2018 Honda Civic Type-R",
    rating: 5,
    timeAgo: "1 week ago",
    category: "brakes",
    categoryLabel: "Brakes & Rotors",
    verified: true,
    quote: "Finding a shop in Kane County that actually understands high-temp track pads, slotted 2-piece rotors, and track alignment tolerances without mangling the wheels is rare. Road Dogs dialed in my Brembo brake overhaul with surgical precision. Bleed was rock-solid at Autobahn Country Club the following Saturday."
  },
  {
    id: "rev-3",
    name: "Marcus Hayes",
    initials: "MH",
    vehicle: "2016 Chevy Silverado 1500",
    rating: 5,
    timeAgo: "2 weeks ago",
    category: "fleet",
    categoryLabel: "Fleet & Commuter",
    verified: true,
    quote: "We run a 6-truck HVAC service fleet out of Montgomery. Downtime burns thousands. Road Dogs handles all our preventative maintenance, fluid analysis, and mechanical work. Mike answers his direct phone line every time. Our Silverado was diagnosed, repaired, and back on job sites before 5 PM."
  },
  {
    id: "rev-4",
    name: "Sarah St. Claire",
    initials: "SS",
    vehicle: "2020 BMW M340i xDrive",
    rating: 5,
    timeAgo: "3 weeks ago",
    category: "engine",
    categoryLabel: "Engine & Diagnostics",
    verified: true,
    quote: "BMW Dealership in Naperville told me I had an irrecoverable coolant leak inside the turbo housing. Took it to Road Dogs based on a friend's recommendation. Mike smoke-tested the line and found an inexpensive quick-connect O-ring failure. No dealership gouging, no fluff. True master mechanics."
  },
  {
    id: "rev-5",
    name: "Tyler Peterson",
    initials: "TP",
    vehicle: "2017 Jeep Wrangler Rubicon",
    rating: 5,
    timeAgo: "1 month ago",
    category: "suspension",
    categoryLabel: "Suspension",
    verified: true,
    quote: "Had a brutal death wobble at 55 mph after trail running at Badlands. Two other local shops failed to diagnose it and just threw steering stabilizers at the symptom. Road Dogs pinpointed the worn track bar bushing and ovaled mounting bracket immediately. Drives laser-straight now."
  },
  {
    id: "rev-6",
    name: "Elena Lindqvist",
    initials: "EL",
    vehicle: "2022 Subaru Outback Touring",
    rating: 5,
    timeAgo: "1 month ago",
    category: "brakes",
    categoryLabel: "Brakes & Rotors",
    verified: true,
    quote: "Honest auto repair in Aurora has a new home. Mike didn't try to upsell cabin air filters, transmission flushes, or nonsense. Explained that my pads had 4mm remaining and could safely hold another 5,000 miles before replacement. When I did replace them, pricing was totally fair."
  }
];

export const PROJECTS: ProjectLog[] = [
  {
    id: "proj-1",
    jobId: "JOB #RD-9041",
    vehicle: "2019 Ford F-150 Supercrew",
    title: "Twin-Turbo 3.5L EcoBoost Engine Tear-Down & Rebuild",
    category: "engine",
    categoryLabel: "Engine Overhauls",
    turnaround: "4 Days",
    summary: "Full catastrophic phaser rattle remedy and valve timing remediation. Re-sleeved, high-volume oil pump installation, custom intake manifold porting, and dyno certified calibration.",
    leadTech: "Mike (Lead Master)",
    leadTechNote: "Zero lash variation detected. Warm idle oil pressure verified at 48.2 PSI.",
    image: IMAGES.diagnosticBay,
    specs: [
      { label: "Primary Overhaul", value: "Phasers & HD Timing Chains" },
      { label: "Peak Power Verified", value: "450 WHP Mustang Dyno" },
      { label: "Oil Pressure PSI", value: "48.2 PSI Warm Idle" }
    ],
    telemetryMetrics: [
      { label: "Cam Phaser Deviation", before: "14.2° Drift", after: "0.02° Spec", delta: "-99.8%" },
      { label: "Idle Oil Pressure", before: "18.4 PSI", after: "48.2 PSI", delta: "+162%" },
      { label: "Dyno Output", before: "364 WHP", after: "450 WHP", delta: "+86 WHP" }
    ]
  },
  {
    id: "proj-2",
    jobId: "JOB #RD-9112",
    vehicle: "2020 Ford Mustang GT S550",
    title: "Brembo 6-Piston Big Brake Kit & Slotted Rotors",
    category: "brakes",
    categoryLabel: "Brake Upgrades",
    turnaround: "1 Day",
    summary: "Removal of heat-faded OEM single-piston setup. Custom bracket fabrication, DOT4 Motul 660 fluid bleed, and high-pressure braided stainless steel hydraulics.",
    leadTech: "Mike (Lead Master)",
    leadTechNote: "Pedal feel firm, no fade recorded across 10 consecutive 60-0 stops.",
    image: IMAGES.brakeCaliper,
    specs: [
      { label: "Rotor Diameter", value: "380mm Two-Piece Curved" },
      { label: "Stopping Delta", value: "-32% 60-0 MPH Brake Distance" },
      { label: "Lines & Fluid", value: "Goodridge SS / Motul 660" }
    ],
    telemetryMetrics: [
      { label: "60-0 Stopping Distance", before: "138 Ft", after: "94 Ft", delta: "-32%" },
      { label: "Rotor Lateral Runout", before: "0.009\" Warped", after: "0.0008\"", delta: "-91%" },
      { label: "Brake Fluid Boiling Pt", before: "320°F Degraded", after: "617°F Fresh", delta: "+93%" }
    ]
  },
  {
    id: "proj-3",
    jobId: "JOB #RD-5590",
    vehicle: "2018 Chevy Silverado Z71 4WD",
    title: "Heavy Duty Bilstein 5100 Suspension Overhaul",
    category: "suspension",
    categoryLabel: "Suspension & Lift",
    turnaround: "2 Days",
    summary: "Full front-to-rear suspension replacement. Upgraded forged upper control arms, heavy-duty inner/outer tie rods, and computerized 3D laser caster/camber setup.",
    leadTech: "Marcus (Suspension Lead)",
    leadTechNote: "Zero bump steer under load. Laser alignment within 0.02° of dead center.",
    image: IMAGES.suspensionLift,
    specs: [
      { label: "Damping Spec", value: "Bilstein 46mm Monotube" },
      { label: "Alignment Target", value: "0.02° Steer Ahead / Hunter 3D" },
      { label: "Clearance Gained", value: "+2.25 Inches Front Level" }
    ],
    telemetryMetrics: [
      { label: "Front Ride Height", before: "35.5 Inches", after: "37.75 Inches", delta: "+2.25\" Level" },
      { label: "Toe Deviation", before: "0.38° Scrubbing", after: "0.01° Laser Spec", delta: "-97%" },
      { label: "Chassis Sway Roll", before: "14.2° at 35mph", after: "6.8° at 35mph", delta: "-52%" }
    ]
  },
  {
    id: "proj-4",
    jobId: "JOB #RD-8724",
    vehicle: "2017 Dodge Ram 1500 8HP70",
    title: "Transmission Valve Body & Clutch Pack Reconstruction",
    category: "performance",
    categoryLabel: "Transmission / Drivetrain",
    turnaround: "3 Days",
    summary: "Addressed harsh 2-3 shift flared slipping. Solenoid resistance recalibration, reinforced Sonnax accumulator valves, clutch friction disc upgrade, and ZF Lifeguard synthetic flush.",
    leadTech: "David (Drivetrain Tech)",
    leadTechNote: "Adaptation values reset 100%. Shift timing latency dropped to 150ms.",
    image: IMAGES.workshopBays,
    specs: [
      { label: "Gearbox Unit", value: "TorqueFlite 8HP70 8-Speed" },
      { label: "Shift Engagement", value: "150ms Ultra-Crisp Lockup" },
      { label: "Fluid Temp Max", value: "182°F Peak Load Test" }
    ]
  },
  {
    id: "proj-5",
    jobId: "JOB #RD-9302",
    vehicle: "2021 Jeep Grand Cherokee",
    title: "Dual-Zone HVAC Evaporator & Compressor Replacement",
    category: "engine",
    categoryLabel: "HVAC & Thermal",
    turnaround: "2 Days",
    summary: "Complete instrument panel removal to swap leaking micro-channel evaporator core. Replaced Denso compressor, receiver drier, and performed certified nitrogen decay pressure check.",
    leadTech: "Mike (Lead Master)",
    leadTechNote: "Zero dash squeaks or rattles. Vent temp verified at 38.5°F.",
    image: IMAGES.diagnosticBay,
    specs: [
      { label: "Vent Output Temp", value: "38.5°F at 88°F Ambient" },
      { label: "Refrigerant Cycle", value: "R1234yf Pure Recovery" },
      { label: "Vacuum Decay", value: "0.00 Microns / 45 Min Hold" }
    ]
  },
  {
    id: "proj-6",
    jobId: "JOB #RD-9453",
    vehicle: "2022 BMW M3 G80 Competition",
    title: "Track Day Suspension Calibration & Corner Balancing",
    category: "performance",
    categoryLabel: "Performance & Tuning",
    turnaround: "1.5 Days",
    summary: "Vorshlag adjustable camber plate installation, monoball control arm bushings, damper valving matching, and 50.0% cross-weight corner scale calibration with 185lb driver ballast.",
    leadTech: "Marcus (Suspension Lead)",
    leadTechNote: "Apex stability optimized. Lateral G load increased to 1.34G.",
    image: IMAGES.suspensionLift,
    specs: [
      { label: "Cross-Weight Ratio", value: "Exact 50.0% / 50.0% Balance" },
      { label: "Track Camber Front", value: "-3.2° Left / -3.2° Right" },
      { label: "Lateral GS Reached", value: "1.34G Skidpad Recorded" }
    ]
  }
];

export const FAQS = [
  {
    q: "Do I need an appointment for computer diagnostics?",
    a: "While scheduled appointments guarantee immediate access to our primary diagnostic bay, we maintain a dedicated emergency triage slot daily for flashing check engine lights, severe drivability issues, or vehicle drop-offs."
  },
  {
    q: "How long does a standard vehicle inspection take?",
    a: "Our thorough Digital Vehicle Inspection (DVI) takes approximately 45 to 60 minutes. We inspect over 30 points, photograph critical wear items, check fluid chemistry, and text you a comprehensive interactive report with high-resolution photos before any wrench turns."
  },
  {
    q: "Do you provide written estimates before starting work?",
    a: "Always. We operate with zero smoke and mirrors. You will receive an itemized digital estimate breaking down OEM parts, labor, and shop supplies. No repair is ever performed without your explicit digital or verbal sign-off."
  },
  {
    q: "What warranty covers your repairs?",
    a: "Every qualifying repair at Road Dogs Auto Care is backed by our rock-solid 24-Month / 24,000-Mile Nationwide Mechanical Warranty. If you experience an issue in Aurora or anywhere across North America, you are covered."
  }
];

export const FOUNDATIONAL_PILLARS = [
  {
    title: "Honesty in Estimates",
    protocol: "PROTOCOL #01",
    tag: "100% VERIFIED",
    desc: "Zero hidden fees and no sudden surprise add-ons. Comprehensive digital inspection reports with high-resolution photos sent directly to your phone before any wrench touches metal."
  },
  {
    title: "Cutting-Edge Tech",
    protocol: "PROTOCOL #02",
    tag: "OEM TOLERANCE",
    desc: "OEM-grade computerized scanners, high-resolution 3D laser alignment, dynamic electronic oscilloscope capture, and factory torque specs applied on every fastener."
  },
  {
    title: "Community First",
    protocol: "PROTOCOL #03",
    tag: "AURORA LOCAL",
    desc: "Proudly serving Fox Valley and Aurora commuters, municipal workers, healthcare staff, and local commercial fleets with expedited turnaround and dependable service discounts."
  },
  {
    title: "Precision Mastery",
    protocol: "PROTOCOL #04",
    tag: "NATIONWIDE GUARD",
    desc: "Certified Master Technicians who handle every vehicle with surgical pride. Backed by our rock-solid nationwide 24-Month / 24,000-Mile mechanical warranty."
  }
];

export const WORKSHOP_FACILITIES = [
  {
    title: "6 High-Precision Hydraulic Bays",
    category: "CAPABILITY",
    desc: "Equipped with heavy-duty Rotary 2-post and in-ground scissor lifts capable of lifting anything from low-slung European sports coupes to commercial utility trucks up to 14,000 lbs.",
    badge: "ZERO BAY BOTTLENECKS"
  },
  {
    title: "Hunter 3D Hawkeye Laser Rig",
    category: "LASER RIG",
    desc: "Multi-camera 3D optical imaging detects tire wear vectors and wheel camber/caster deviations down to hundredths of a degree, preventing premature tire scrub and maximizing fuel efficiency.",
    badge: "LASER CALIBRATED DAILY"
  },
  {
    title: "Clean Climate-Controlled Lounge",
    category: "LOUNGE",
    desc: "Enjoy high-speed Wi-Fi, freshly roasted coffee, quiet workspaces, and high-definition screens providing live optical monitoring of your car on the lift.",
    badge: "TRANSPARENT BAY CAMERAS"
  }
];
