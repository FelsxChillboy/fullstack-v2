import Image from "next/image";
import Link from "next/link";

const navItems = [
  { label: "Home", href: "#" },
  { label: "About", href: "#about" },
  { label: "Mission", href: "#mission" },
  { label: "Gallery", href: "#gallery" },
  { label: "Team", href: "#team" },
  { label: "Update", href: "#update" },
  { label: "File Download", href: "#download" },
  { label: "Contact", href: "#contact" },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0e142e] text-white relative overflow-hidden">
      {/* Background accent */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 -left-40 h-[520px] w-[520px] rounded-full bg-white/10 blur-3xl" />
        <div className="absolute -bottom-40 -right-40 h-[520px] w-[520px] rounded-full bg-white/10 blur-3xl" />
        <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.20),transparent_45%),radial-gradient(circle_at_80%_30%,rgba(255,255,255,0.18),transparent_45%)]" />
      </div>

      {/* Navbar */}
      <header className="relative z-10">
        <div className="mx-auto max-w-7xl px-6 py-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Image
              src="/logo-pmii.png"
              alt="Logo PMII"
              width={40}
              height={40}
              className="rounded-full"
            />
            <div className="text-xl font-bold tracking-wide">PR PMII TEKNIK</div>
          </div>

          <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-white/90">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className={`hover:text-white transition ${
                  item.label === "Home"
                    ? "text-white border-b-2 border-yellow-400 pb-1"
                    : ""
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="lg:hidden">
            <button className="px-3 py-2 rounded-lg border border-white/20">
              Menu
            </button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <main className="relative z-10">
        <section className="mx-auto max-w-7xl px-6 py-10 lg:py-16 grid lg:grid-cols-2 gap-10 items-center">
          {/* Left text */}
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
              Upgrade Your <br />
              Knowledge and Skills <br />
              with <span className="text-white">PMII</span>
            </h1>

            <p className="text-white/80 text-lg">
              We are <span className="font-semibold text-white">Indonesian</span>{" "}
              Moslem Student Movement
            </p>

            <div className="flex items-center gap-4">
              <Link
                href="#about"
                className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-yellow-400 text-[#0A2AA8] font-semibold shadow-lg hover:bg-yellow-300 transition"
              >
                Get Started
              </Link>

              <Link
                href="#contact"
                className="inline-flex items-center justify-center px-6 py-3 rounded-full border border-white/25 text-white/90 hover:text-white hover:border-white/40 transition"
              >
                Contact
              </Link>
            </div>

            {/* Small stats row */}
            <div className="pt-6 flex gap-6 text-sm text-white/80">
              <div>
                <div className="text-white font-bold text-xl">50+</div>
                <div>Program Kaderisasi</div>
              </div>
              <div>
                <div className="text-white font-bold text-xl">100+</div>
                <div>Kegiatan</div>
              </div>
              <div>
                <div className="text-white font-bold text-xl">1.000+</div>
                <div>Anggota</div>
              </div>
            </div>
          </div>

          {/* Right image mockup */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-[320px] h-[420px] sm:w-[380px] sm:h-[480px]">
              {/* Card shadow */}
              <div className="absolute inset-0 rounded-[32px] bg-white/10 blur-2xl" />
              <div className="relative rounded-[32px] bg-white p-4 shadow-2xl">
                <div className="rounded-[24px] overflow-hidden bg-[#F3F6FF]">
                  <Image
                    src="/hero-people.png"
                    alt="Sahabat PMII"
                    width={800}
                    height={1000}
                    className="w-full h-auto"
                    priority
                  />
                </div>
              </div>

              {/* Floating smaller card (optional) */}
              <div className="hidden sm:block absolute -left-16 top-16 w-44 rounded-2xl bg-white shadow-xl p-3">
                <div className="text-[#0A2AA8] font-bold text-sm">Sahabati PMII</div>
                <div className="mt-2 h-20 rounded-xl bg-[#EEF2FF]" />
                <div className="mt-3 h-8 rounded-full bg-[#0A2AA8]" />
              </div>
            </div>
          </div>
        </section>

        {/* Sections placeholder */}
        <section id="about" className="mx-auto max-w-7xl px-6 py-16">
          <h2 className="text-2xl font-bold">About</h2>
          <p className="mt-3 text-white/80">
            Isi profil PMII: sejarah singkat, visi, misi, nilai organisasi, dll.
          </p>
        </section>

        <section id="mission" className="mx-auto max-w-7xl px-6 pb-16">
          <h2 className="text-2xl font-bold">Mission</h2>
          <p className="mt-3 text-white/80">
            Tuliskan misi, program unggulan, arah gerakan, dsb.
          </p>
        </section>

        <section id="gallery" className="mx-auto max-w-7xl px-6 pb-16">
          <h2 className="text-2xl font-bold">Gallery</h2>
          <p className="mt-3 text-white/80">Nanti kita isi foto kegiatan.</p>
        </section>

        <section id="team" className="mx-auto max-w-7xl px-6 pb-16">
          <h2 className="text-2xl font-bold">Team</h2>
          <p className="mt-3 text-white/80">Nanti kita isi struktur pengurus.</p>
        </section>

        <section id="update" className="mx-auto max-w-7xl px-6 pb-16">
          <h2 className="text-2xl font-bold">Update</h2>
          <p className="mt-3 text-white/80">
            Nanti kita sambungkan ke fitur posting (berita/artikel) dari database.
          </p>
        </section>

        <section id="download" className="mx-auto max-w-7xl px-6 pb-16">
          <h2 className="text-2xl font-bold">File Download</h2>
          <p className="mt-3 text-white/80">
            Tempat download AD/ART, proposal, materi kaderisasi, dll.
          </p>
        </section>

        <section id="contact" className="mx-auto max-w-7xl px-6 pb-20">
          <h2 className="text-2xl font-bold">Contact</h2>
          <p className="mt-3 text-white/80">
            Nanti kita buat form kontak + alamat sekretariat + sosial media.
          </p>
        </section>

        {/* Footer */}
        <footer className="border-t border-white/10">
          <div className="mx-auto max-w-7xl px-6 py-8 text-sm text-white/70">
            © {new Date().getFullYear()} PMII — Website Organisasi
          </div>
        </footer>
      </main>
    </div>
  );
}
