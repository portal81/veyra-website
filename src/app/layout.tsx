import type { Metadata, Viewport } from "next";
import { Cairo, Cormorant_Garamond } from "next/font/google";
import { PublicHeader } from "@/components/public-header";
import { PublicFooter } from "@/components/public-footer";
import { AiConcierge } from "@/components/ai-concierge";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: "#f7f1e7",
  width: "device-width",
  initialScale: 1,
};

const cairo = Cairo({
  variable: "--font-cairo",
  subsets: ["latin", "arabic"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Veyra Developments | Luxury Real Estate, Finishing & Smart Homes",
  description:
    "Discover premium residential and commercial projects, finishing packages, and smart home solutions from Veyra Developments.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${cairo.variable} ${cormorant.variable}`}>
      <body>
        <div className="site-public-shell flex min-h-full flex-col">
          <PublicHeader />
          <main className="flex-1">{children}</main>
          <PublicFooter />
          <AiConcierge />
        </div>
      </body>
    </html>
  );
}
