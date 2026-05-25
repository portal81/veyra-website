import { demoStore } from "@/lib/demo-store";
import { finishingPackages, projects as fallbackProjects, siteSettings as fallbackSiteSettings, smartDevices, smartPackages } from "@/lib/mock-data";
import { createSupabaseServerClient, isSupabaseConfigured } from "@/lib/supa";
import type { FinishingPackage, Lead, Project, SiteSettings, SmartDevice, SmartPackage } from "@/lib/types";

function mergeProject(project: Project): Project {
  const fallback = fallbackProjects.find((item) => item.id === project.id);
  const unitsSource = project.units?.length ? project.units : fallback?.units ?? [];
  return {
    ...fallback,
    ...project,
    heroImage: project.heroImage || fallback?.heroImage || "",
    gallery: project.gallery?.length ? project.gallery : fallback?.gallery ?? [],
    units: unitsSource.map((unit) => {
      const fallbackUnit = fallback?.units.find((candidate) => candidate.id === unit.id);
      return { ...fallbackUnit, ...unit };
    }),
    highlights: project.highlights ?? fallback?.highlights ?? [],
  } as Project;
}

function mergeFinishingPackage(item: FinishingPackage): FinishingPackage {
  const fallback = finishingPackages.find((candidate) => candidate.id === item.id);
  return { ...fallback, ...item, features: item.features ?? fallback?.features ?? [] };
}

function mergeSmartDevice(item: SmartDevice): SmartDevice {
  const fallback = smartDevices.find((candidate) => candidate.id === item.id);
  return { ...fallback, ...item, benefits: item.benefits ?? fallback?.benefits ?? [] };
}

function mergeSmartPackage(item: SmartPackage): SmartPackage {
  const fallback = smartPackages.find((candidate) => candidate.id === item.id);
  return { ...fallback, ...item, devices: item.devices ?? fallback?.devices ?? [] };
}

function mergeSiteSettings(input?: Partial<SiteSettings> | null): SiteSettings {
  if (!input) return structuredClone(fallbackSiteSettings);
  return { ...fallbackSiteSettings, ...input };
}

export async function getProjects() {
  const supabase = createSupabaseServerClient();
  if (supabase) {
    const { data } = await supabase
      .from("projects")
      .select("*, units(*)")
      .order("featured", { ascending: false })
      .order("name");
    if (data?.length) return (data as Project[]).map(mergeProject);
  }
  return demoStore.projects.map(mergeProject);
}

export async function getProjectBySlug(slug: string) {
  const projects = await getProjects();
  return projects.find((project) => project.slug === slug) ?? null;
}

export async function getFinishingPackages() {
  const supabase = createSupabaseServerClient();
  if (supabase) {
    const { data } = await supabase.from("finishing_packages").select("*");
    if (data?.length) return (data as FinishingPackage[]).map(mergeFinishingPackage);
  }
  return demoStore.finishingPackages.map(mergeFinishingPackage);
}

export async function getSmartDevices() {
  const supabase = createSupabaseServerClient();
  if (supabase) {
    const { data } = await supabase.from("smart_devices").select("*");
    if (data?.length) return (data as SmartDevice[]).map(mergeSmartDevice);
  }
  return demoStore.smartDevices.map(mergeSmartDevice);
}

export async function getSmartPackages() {
  const supabase = createSupabaseServerClient();
  if (supabase) {
    const { data } = await supabase.from("smart_packages").select("*");
    if (data?.length) return (data as SmartPackage[]).map(mergeSmartPackage);
  }
  return demoStore.smartPackages.map(mergeSmartPackage);
}

export async function getSiteSettings() {
  const supabase = createSupabaseServerClient();
  if (supabase) {
    const { data } = await supabase.from("site_settings").select("*").single();
    return mergeSiteSettings(data as Partial<SiteSettings> | null);
  }
  return mergeSiteSettings(demoStore.siteSettings);
}

export async function createLead(lead: Omit<Lead, "id" | "createdAt" | "status" | "stage" | "priority">) {
  const record: Lead = {
    ...lead,
    id: `lead-${crypto.randomUUID()}`,
    createdAt: new Date().toISOString(),
    status: "new",
    stage: "new",
    priority: "medium",
  };
  const supabase = createSupabaseServerClient();
  if (supabase && isSupabaseConfigured) {
    const { error } = await supabase.from("leads").insert(record);
    if (error) throw new Error(error.message);
    return { record, mode: "supabase" as const };
  }
  demoStore.leads.unshift(record);
  return { record, mode: "demo" as const };
}
