import Image from "next/image";
import Link from "next/link";

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
    <div className="relative h-screen w-full overflow-hidden text-white">
      {/* Background */}
      <Image
        src="/hero-bg.jpg"
        alt="PMII Background"
        fill
        priority
        className="object-cover"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/55" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.10),transparent_45%)]" />

      {/* Top left logo + title */}
      <div className="absolute left-6 top-6 z-20 flex items-start gap-3">
        <Image
          src="/logo-pmii.png"
          alt="Logo PMII"
          width={56}
          height={56}
          className="rounded-full"
          priority
        />
        <div className="leading-tight">
          <div className="text-sm font-semibold tracking-wide text-white/90">
            PR PMII TEKNIK
          </div>
          <div className="text-lg font-extrabold tracking-wide">
            UNUSIA JAKARTA PUSAT
          </div>
        </div>
      </div>

      {/* Pill Navbar */}
      <div className="absolute top-6 left-1/2 -translate-x-1/2 z-20 hidden md:block">
        <div className="rounded-full border border-yellow-300/35 bg-yellow-400/20 backdrop-blur-xl px-3 py-2 shadow-2xl">
          <div className="flex items-center gap-2">
            {nav.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className={
                  "px-5 py-2 rounded-full text-sm font-semibold tracking-wide transition " +
                  (item.label === "Home"
                    ? "bg-yellow-400 text-black shadow"
                    : "text-white/90 hover:bg-white/10")
                }
              >
                {item.label.toUpperCase()}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile nav (simple) */}
      <div className="absolute top-6 right-6 z-20 md:hidden">
        <Link
          href="/about"
          className="rounded-full border border-white/25 bg-white/10 backdrop-blur px-4 py-2 text-sm font-semibold"
        >
          Menu →
        </Link>
      </div>

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

      {/* Bottom wave overlay */}
      <div className="absolute bottom-0 left-0 right-0 z-10 h-40 bg-gradient-to-t from-yellow-500/40 to-transparent" />

      {/* Bottom socials */}
      <div className="absolute bottom-6 left-6 right-6 z-20 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div className="text-white/85 text-sm font-semibold">
          Ikuti media sosial kami:
        </div>

        <div className="flex items-center gap-6 text-white/90">
          <a
            href="https://facebook.com"
            className="flex items-center gap-2 hover:text-white transition"
          >
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 border border-white/15">
              f
            </span>
            <span>@rayonteknikunusia</span>
          </a>

          <a
            href="mailto:rayonteknikunusia@gmail.com"
            className="flex items-center gap-2 hover:text-white transition"
          >
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 border border-white/15">
              ✉
            </span>
            <span>@rayonteknikunusia</span>
          </a>

          <a
            href="https://instagram.com"
            className="flex items-center gap-2 hover:text-white transition"
          >
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 border border-white/15">
              ⌁
            </span>
            <span>@rayonteknikunusia</span>
          </a>
        </div>
      </div>
    </div>
  );
}
