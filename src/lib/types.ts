export type Unit = {
  id: string;
  type: "Residential" | "Administrative" | "Penthouse";
  image?: string;
  area: number;
  floor: number;
  bedrooms?: number;
  price: number;
  status: "available" | "reserved";
};

export type Project = {
  id: string;
  slug: string;
  name: string;
  location: string;
  category: string;
  description: string;
  heroImage: string;
  gallery: string[];
  startingPricePerMeter: number;
  installmentYears: number;
  featured: boolean;
  highlights: string[];
  units: Unit[];
};

export type FinishingPackage = {
  id: string;
  name: string;
  pricePerMeter: number;
  summary: string;
  features: string[];
  featured?: boolean;
};

export type SmartDevice = {
  id: string;
  name: string;
  summary: string;
  benefits: string[];
};

export type SmartPackage = {
  id: string;
  name: string;
  summary: string;
  devices: string[];
};

export type LeadService = "Project Visit" | "Finishing Quote" | "Smart Home Setup";

export type LeadStage =
  | "new"
  | "contacted"
  | "qualified"
  | "site_visit"
  | "negotiation"
  | "closed_won"
  | "closed_lost";

export type LeadPriority = "low" | "medium" | "high";

export type Lead = {
  id: string;
  fullName: string;
  phone: string;
  email?: string;
  service: LeadService;
  message?: string;
  createdAt: string;
  status: "new" | "contacted";
  stage: LeadStage;
  priority: LeadPriority;
  assignedTo?: string;
  source?: string;
  budget?: number;
  lostReason?: string;
};

export type HazemProvider = "groq" | "openai" | "custom";

export type HazemSystemPrompts = {
  website: string;
  admin: string;
};

export type HazemAnalysisSettings = {
  enabled: boolean;
  summaryPrompt: string;
  classificationPrompt: string;
  qualityPrompt: string;
  recommendationsPrompt: string;
  autoInsights: string[];
  managerNotes: string;
};

export type HazemAiSettings = {
  enabled: boolean;
  provider: HazemProvider;
  model: string;
  apiKey: string;
  websiteAssistantName: string;
  adminAssistantName: string;
  forceEgyptianDialect: boolean;
  systemPrompts: HazemSystemPrompts;
  analysis: HazemAnalysisSettings;
};

export type LeadActivity = {
  id: string;
  leadId: string;
  kind: "note" | "stage_change" | "assignment" | "invite_sent" | "discussion" | "handoff" | "handoff_accepted";
  body: string;
  createdAt: string;
  createdBy: string;
  mentions?: string[];
};

export type BrandingSettings = {
  useImageLogo: boolean;
  logoUrl: string;
  logoAlt: { en: string; ar: string };
};

export type SiteSettings = {
  id?: string;
  companyName: string;
  primaryLocale: string;
  supportedLocales: string[];
  branding: BrandingSettings;
  hazemAi: HazemAiSettings;
};
