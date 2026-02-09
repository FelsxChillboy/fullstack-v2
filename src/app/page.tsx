import Image from "next/image";
import { Instagram } from "lucide-react";

export default function Home() {
  return (
    <section className="relative w-full min-h-[100svh] overflow-hidden text-white">
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

      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 z-10 h-48 bg-gradient-to-t from-yellow-500/40 to-transparent" />

      {/* Content (pakai flex, bukan absolute center) */}
      <div className="relative z-20 mx-auto flex min-h-[100svh] max-w-7xl flex-col px-4 sm:px-6 lg:px-10 pt-28 pb-16">
        {/* Title */}
        <h1 className="max-w-[18ch] font-extrabold tracking-tight leading-[1.05] drop-shadow text-4xl sm:text-5xl lg:text-6xl">
          PENGURUS RAYON
          <br />
          PMII TEKNIK UNUSIA
          <br />
          JAKARTA PUSAT
        </h1>

        <div className="mt-5 h-[6px] w-44 sm:w-56 rounded-full bg-yellow-400" />

        {/* Spacer: dorong sosial ke bawah */}
        <div className="flex-1" />

        {/* Socials */}
        <div className="flex flex-col items-center justify-center gap-3 sm:gap-4">
          <div className="text-white/90 text-sm font-semibold">
            media sosial kami:
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-white/90">
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
              <span className="text-sm font-medium">rayonteknikunusia@gmail.com</span>
            </a>

            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 hover:text-white transition"
            >
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 border border-white/15">
                F
              </span>
              <span className="text-sm font-medium">Facebook</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
