import {
  finishingPackages,
  projects,
  siteSettings,
  smartDevices,
  smartPackages,
} from "@/lib/mock-data";
import type {
  FinishingPackage,
  Lead,
  LeadActivity,
  Project,
  SiteSettings,
  SmartDevice,
  SmartPackage,
} from "@/lib/types";

type DemoStore = {
  projects: Project[];
  leads: Lead[];
  leadActivities: LeadActivity[];
  siteSettings: SiteSettings;
  finishingPackages: FinishingPackage[];
  smartDevices: SmartDevice[];
  smartPackages: SmartPackage[];
};

const globalForDemo = globalThis as typeof globalThis & {
  __veyraDemoStore?: DemoStore;
};

export const demoStore: DemoStore =
  globalForDemo.__veyraDemoStore ??
  (globalForDemo.__veyraDemoStore = {
    projects: structuredClone(projects),
    leads: [],
    leadActivities: [],
    siteSettings: structuredClone(siteSettings),
    finishingPackages: structuredClone(finishingPackages),
    smartDevices: structuredClone(smartDevices),
    smartPackages: structuredClone(smartPackages),
  });
