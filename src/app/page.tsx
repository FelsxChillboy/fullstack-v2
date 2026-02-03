import Image from "next/image";
import Link from "next/link";
import { Instagram } from "lucide-react";

const nav = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Gallery", href: "/gallery" },
  { label: "Update", href: "/update" },
  { label: "Pengurus", href: "/team" },
  { label: "Download", href: "/download" },
  { label: "Contact", href: "/contact" },
];

export default function Home() {
  return (
    <div className="relative min-h-screen [calc(100vh-80px)] w-full overflow-hidden text-white">
      {/* Background */}
      <Image
      
        src="/hero-bg.jpg"
        alt="PMII Background"
        fill
        priority
        className="object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/55" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.10),transparent_45%)]" />

      {/* Hero text */}
      <div className="absolute left-6 right-6 top-1/2 -translate-y-1/2 z-20 max-w-4xl">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-[1.05] drop-shadow">
          PENGURUS RAYON
          <br />
          PMII TEKNIK UNUSIA
          <br />
          JAKARTA PUSAT
        </h1>

        <div className="mt-5 h-[6px] w-64 rounded-full bg-yellow-400" />
      </div>

      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 z-10 h-44 bg-gradient-to-t from-yellow-500/40 to-transparent" />

      {/* Bottom socials (CENTER) */}
      <div className="absolute bottom-7 left-0 right-0 z-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
            <div className="text-white/90 text-sm font-semibold">
              media sosial kami:
            </div>

            <div className="flex items-center gap-6 text-white/90">
              <a
                href="https://instagram.com/rayonteknikunusia"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 hover:text-white transition"
              >
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 border border-white/15">
                  <Instagram size={20} />
                </span>

                <span className="text-sm font-medium">@rayonteknikunusia</span>
              </a>


              <a
                href="mailto:rayonteknikunusia@gmail.com"
                className="flex items-center gap-2 hover:text-white transition"
              >
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 border border-white/15">
                  ✉
                </span>
                <span className="text-sm font-medium">@rayonteknikunusia</span>
              </a>

              <a
                href="https://instagram.com"
                className="flex items-center gap-2 hover:text-white transition"
              >
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 border border-white/15">
                  F
                </span>
                <span className="text-sm font-medium">@rayonteknikunusia</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
