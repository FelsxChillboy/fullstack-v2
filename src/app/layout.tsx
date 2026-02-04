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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen w-full bg-[#060b20] text-white">
        <NextTopLoader showSpinner={false} />
        <ScrollToTop />

        <SiteNavbar />

        <PageTransition>{children}</PageTransition>

        <Footer />
      </body>
    </html>
  );  
}
