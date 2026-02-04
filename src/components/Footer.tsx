import Link from "next/link";
import { Instagram, Mail, PhoneCall } from "lucide-react";

const socials = [
  {
    label: "Instagram",
    href: "https://instagram.com/rayonteknikunusia",
    icon: Instagram,
    value: "@rayonteknikunusia",
    external: true,
  },
  {
    label: "Email",
    href: "mailto:rayonteknikunusia@gmail.com",
    icon: Mail,
    value: "rayonteknikunusia@gmail.com",
    external: false,
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/6281292675810",
    icon: PhoneCall,
    value: "Chat WhatsApp",
    external: true,
  },
];

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-white/10 bg-[#060b20]/40 backdrop-blur">
      <div className="mx-auto max-w-7xl px-6 py-10">
        <div className="grid gap-8 md:grid-cols-3 md:items-start">
          {/* Brand */}
          <div>
            <div className="text-lg font-extrabold tracking-wide">PR PMII RAYON TEKNIK</div>
            <div className="text-white/70 text-sm mt-1">UNUSIA JAKARTA PUSAT</div>
            <div className="text-white/60 text-xs mt-4 leading-relaxed">
              Website resmi: informasi kegiatan, dokumentasi, struktur kepengurusan, dan file unduhan.
            </div>
          </div>

          {/* Links */}
          <div>
            <div className="text-sm font-semibold text-white/90">Quick Links</div>
            <div className="mt-3 grid grid-cols-2 gap-2 text-sm">
              {[
                { label: "Home", href: "/" },
                { label: "About", href: "/about" },
                { label: "Gallery", href: "/gallery" },
                { label: "Update", href: "/update" },
                { label: "Pengurus", href: "/team" },
                { label: "Download", href: "/download" },
                { label: "Contact", href: "/contact" },
              ].map((l) => (
                <Link key={l.href} href={l.href} className="text-white/70 hover:text-white transition">
                  {l.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Social */}
          <div>
            <div className="text-sm font-semibold text-white/90">Kontak</div>
            <div className="mt-3 space-y-3">
              {socials.map((s) => {
                const Icon = s.icon;
                const cls =
                  "flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 " +
                  "hover:bg-white/10 hover:border-yellow-400/30 transition";
                const iconWrap =
                  "inline-flex h-10 w-10 items-center justify-center rounded-full " +
                  "bg-yellow-400/15 border border-yellow-400/20 text-yellow-300";

                if (s.external) {
                  return (
                    <a key={s.label} href={s.href} target="_blank" rel="noreferrer" className={cls}>
                      <span className={iconWrap}>
                        <Icon size={18} />
                      </span>
                      <div className="min-w-0">
                        <div className="text-sm font-semibold">{s.label}</div>
                        <div className="text-xs text-white/70 truncate">{s.value}</div>
                      </div>
                    </a>
                  );
                }

                return (
                  <a key={s.label} href={s.href} className={cls}>
                    <span className={iconWrap}>
                      <Icon size={18} />
                    </span>
                    <div className="min-w-0">
                      <div className="text-sm font-semibold">{s.label}</div>
                      <div className="text-xs text-white/70 truncate">{s.value}</div>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col md:flex-row md:items-center md:justify-between gap-3 border-t border-white/10 pt-6">
          <div className="text-white/60 text-sm">
            © {new Date().getFullYear()} PR PMII Rayon Teknik UNUSIA Jakarta Pusat
          </div>
          <div className="text-white/50 text-xs">
            Dibuat dengan Next.js • Prisma • Tailwind • shadcn/ui
          </div>
        </div>
      </div>
    </footer>
  );
}
