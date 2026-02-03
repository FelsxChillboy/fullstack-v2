import "./globals.css";
import type { Metadata } from "next";
import SiteNavbar from "@/components/SiteNavbar";

export const metadata: Metadata = {
  title: "PR | PMII RAYON TEKNIK",
  description: "Website resmi organisasi PMII: berita, galeri, struktur, dan unduhan.",
  icons: { icon: "/logo-pmii.png" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <body className="min-h-screen bg-[#0c1431] text-white">
        <SiteNavbar />
        {children}
      </body>
    </html>
  );
}
