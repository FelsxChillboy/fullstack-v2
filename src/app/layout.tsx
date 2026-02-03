import "./globals.css";

import NextTopLoader from "nextjs-toploader";
import SiteNavbar from "@/components/SiteNavbar";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import ScrollToTop from "@/components/ScrollToTop";
import { Metadata } from "next/dist/lib/metadata/types/metadata-interface";

export const metadata: Metadata = {
  title: "PR | PMII RAYON TEKNIK",
  description: "Website resmi organisasi PMII: berita, galeri, struktur, dan unduhan.",
  icons: { icon: "/logo-pmii.png" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <body className="min-h-screen bg-[#0c1431] text-white flex flex-col">
        <NextTopLoader showSpinner={false} />
        <ScrollToTop />

        <SiteNavbar />

        {/* main ngisi sisa layar, footer nempel di bawah */}
        <main className="flex-1">
          <div className="mx-auto max-w-7xl px-6 h-full">
            <PageTransition>{children}</PageTransition>
          </div>
        </main>

        <Footer />
      </body>
    </html>
  );
}
