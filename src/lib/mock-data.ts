import type { FinishingPackage, Project, SiteSettings, SmartDevice, SmartPackage } from "@/lib/types";

export const projects: Project[] = [
  {
    id: "prj-al-hamd",
    slug: "al-hamd-tower",
    name: "AL HAMD TOWER",
    location: "Zagazig",
    category: "Mixed-use Development",
    description:
      "A premium mixed-use tower with residential and administrative inventory, designed around faster unit discovery, visit booking, and installment planning.",
    heroImage: "/scenes/tower-close.svg",
    gallery: ["/scenes/tower-close.svg", "/scenes/skyline-dusk.svg", "/scenes/book-visit.svg"],
    startingPricePerMeter: 20000,
    installmentYears: 6,
    featured: true,
    highlights: [
      "Prime address in the heart of Zagazig",
      "Residential and administrative units in one project",
      "Flexible installment plans up to 6 years",
    ],
    units: [
      { id: "u-1", type: "Residential", area: 150, floor: 9, bedrooms: 3, price: 3000000, status: "available" },
      { id: "u-2", type: "Administrative", area: 83, floor: 1, price: 3320000, status: "available" },
      { id: "u-3", type: "Penthouse", area: 220, floor: 25, bedrooms: 4, price: 7700000, status: "reserved" },
    ],
  },
  {
    id: "prj-noor",
    slug: "noor-business-tower",
    name: "Noor Business Tower",
    location: "New Cairo",
    category: "Administrative",
    description:
      "A modern office-led destination focused on clear comparisons, cleaner lead capture, and a polished route from listing to consultation.",
    heroImage: "/scenes/business-tower.svg",
    gallery: ["/scenes/business-tower.svg", "/scenes/skyline-dusk.svg"],
    startingPricePerMeter: 40000,
    installmentYears: 5,
    featured: true,
    highlights: [
      "Flexible office sizes for growing teams",
      "Connected business location with premium access",
      "Future-ready infrastructure for smart office upgrades",
    ],
    units: [
      { id: "u-4", type: "Administrative", area: 72, floor: 5, price: 2880000, status: "available" },
      { id: "u-5", type: "Administrative", area: 105, floor: 8, price: 4200000, status: "available" },
    ],
  },
  {
    id: "prj-palm",
    slug: "palm-residences",
    name: "Palm Residences",
    location: "Shorouk",
    category: "Residential",
    description:
      "A family-focused residential community with add-on finishing and smart home services offered through the same premium platform.",
    heroImage: "/scenes/residences.svg",
    gallery: ["/scenes/residences.svg", "/scenes/finishing-interior.svg"],
    startingPricePerMeter: 31000,
    installmentYears: 7,
    featured: false,
    highlights: [
      "Generous family-friendly layouts",
      "Finishing and smart home packages available after purchase",
      "Green pockets and community amenities throughout the project",
    ],
    units: [
      { id: "u-6", type: "Residential", area: 128, floor: 4, bedrooms: 3, price: 3968000, status: "available" },
    ],
  },
];

export const finishingPackages: FinishingPackage[] = [
  {
    id: "pkg-basic",
    name: "Basic Finishing",
    pricePerMeter: 2200,
    summary: "A practical scope for faster handover and budget-conscious delivery.",
    features: ["Electrical works", "Plumbing", "Base paint", "Organized handover"],
  },
  {
    id: "pkg-super",
    name: "Super Lux",
    pricePerMeter: 3600,
    summary: "The balanced package for elevated design, better materials, and controlled cost.",
    features: ["Modern flooring", "Decorative lighting", "Premium materials", "Engineering supervision"],
    featured: true,
  },
  {
    id: "pkg-ultra",
    name: "Ultra Super Lux",
    pricePerMeter: 5200,
    summary: "A high-end finishing route with custom detailing and smart-home readiness.",
    features: ["Custom design", "Luxury materials", "Tailored details", "Smart-ready setup"],
  },
];

export const smartDevices: SmartDevice[] = [
  { id: "dev-lock", name: "Smart Lock", summary: "A secure access layer with phone-based management and flexible permissions.", benefits: ["Fingerprint entry", "Remote unlock", "Temporary access codes"] },
  { id: "dev-camera", name: "Smart Cameras", summary: "Always-on monitoring with mobile alerts and better visibility around the home.", benefits: ["24/7 monitoring", "Motion alerts", "Night vision"] },
  { id: "dev-lighting", name: "Smart Lighting", summary: "Automated lighting scenes that improve comfort while reducing energy waste.", benefits: ["Scheduling", "Remote control", "Energy saving"] },
  { id: "dev-curtains", name: "Smart Curtains", summary: "Smooth curtain control integrated with scenes, schedules, and voice routines.", benefits: ["Voice ready", "Scene integration", "Remote control"] },
];

export const smartPackages: SmartPackage[] = [
  { id: "smart-starter", name: "Starter Package", summary: "A practical entry package for apartments and compact units.", devices: ["Smart switch", "Smart camera", "Smart doorbell"] },
  { id: "smart-security", name: "Security Package", summary: "A bundle centered on protection, monitoring, and controlled access.", devices: ["Smart lock", "Cameras", "Sensors"] },
  { id: "smart-full", name: "Full Smart Home", summary: "Lighting, curtains, AC control, and access in one connected experience.", devices: ["Lighting", "Curtains", "AC control", "Locks"] },
];

export const siteSettings: SiteSettings = {
  id: "primary",
  companyName: "Veyra Developments",
  primaryLocale: "en",
  supportedLocales: ["en", "ar"],
  branding: {
    useImageLogo: false,
    logoUrl: "",
    logoAlt: { en: "Veyra Developments logo", ar: "شعار Veyra Developments" },
  },
  hazemAi: {
    enabled: false,
    provider: "groq",
    model: "llama-3.3-70b-versatile",
    apiKey: "",
    websiteAssistantName: "حازم",
    adminAssistantName: "حازم الإداري",
    forceEgyptianDialect: true,
    systemPrompts: {
      website: "You are Hazem, Veyra's public sales assistant. Respond in Egyptian Arabic.",
      admin: "You are Hazem Admin, Veyra's internal strategic advisor.",
    },
    analysis: {
      enabled: false,
      summaryPrompt: "",
      classificationPrompt: "",
      qualityPrompt: "",
      recommendationsPrompt: "",
      autoInsights: [],
      managerNotes: "",
    },
  },
};
