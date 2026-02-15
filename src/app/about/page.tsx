export default function AboutPage() {
  return (
    <main
      className="min-h-screen flex flex-col items-center justify-start text-white px-6 py-16 relative"
      style={{
        backgroundImage: "url('/')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay gelap biar teks jelas */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-10 w-full flex flex-col items-center">
        {/* Judul */}
        <h1 className="mt-10 text-4xl font-extrabold tracking-widest">
          ABOUT
        </h1>

        {/* Deskripsi */}
        <p className="mt-6 text-center text-sm uppercase tracking-wide max-w-3xl leading-relaxed text-gray-200">
          Website resmi pengurus rayon PMI Teknik Unusia Jakarta Pusat.
          <br />
          Berisi dokumentasi kegiatan, update berita, struktur kepengurusan
          dan file unduhan.
        </p>

        {/* Box VISI & MISI */}
        <section className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-12 w-full max-w-5xl">
          {/* VISI */}
          <div className="relative border-2 border-white rounded-2xl p-10 min-h-[260px]">
            {/* Icon Pesawat */}
            <span className="absolute -top-7 left-8 text-5xl">✈️</span>

            <h2 className="text-2xl font-bold mb-6 tracking-wider">
              VISI
            </h2>

            <p className="uppercase text-sm leading-relaxed text-gray-200">
              Mewujudkan rayon PMI Teknik Unusia sebagai ruang kaderisasi digital yang kreatif
              , renponsif, dan beraswaja.
            </p>
          </div>

          {/* MISI */}
          <div className="relative border-2 border-white rounded-2xl p-10 min-h-[260px]">
            {/* Icon Buku */}
            <span className="absolute -top-7 right-8 text-5xl">📖</span>

            <h2 className="text-2xl font-bold mb-6 tracking-wider">
              MISI
            </h2>

            <ul className="uppercase text-sm leading-relaxed text-gray-200 space-y-3 list-disc pl-5">
              <li>membangun sebuah sistem pelatihan yang memanfaatkan digital, sosial media, dan pendidikan daring.</li>
              <li>Mendorong kader agar cakap menggunakan teknologi informasi baik untuk akademik, organisasi, maupun gerakan sosial.</li>
              <li>Memperkuat komunikasi, koordinasi, dan persaudaraan kader melalui ruang virtual maupun tatap muka.</li>
              <li>Menumbuhkan budaya riset, karya teknologi, dan ide kreatif yang relevan dengan era indrustri 4.0.</li>
            </ul>
          </div>
        </section>
      </div>
    </main>
  );
}
