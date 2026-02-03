export default function AboutPage() {
  return (
    <main className="py-10 max-w-4xl">
      <h1 className="text-3xl font-bold">About</h1>
      <p className="mt-3 text-white/80 leading-relaxed">
        Website resmi PR PMII Rayon Teknik UNUSIA Jakarta Pusat. Berisi dokumentasi kegiatan, update berita,
        struktur kepengurusan, dan file unduhan.
      </p>

      <div className="mt-6 rounded-2xl border border-white/15 bg-white/5 p-6">
        <h2 className="text-xl font-semibold">Visi</h2>
        <p className="mt-2 text-white/80">
          Membangun kader yang progresif, intelektual, dan berdaya guna bagi kampus serta masyarakat.
        </p>

        <h2 className="text-xl font-semibold mt-6">Misi</h2>
        <ul className="mt-2 text-white/80 list-disc pl-5 space-y-1">
          <li>Penguatan kaderisasi dan keilmuan.</li>
          <li>Pengabdian dan aksi sosial yang berdampak.</li>
          <li>Kolaborasi kegiatan internal dan eksternal.</li>
        </ul>
      </div>
    </main>
  );
}
