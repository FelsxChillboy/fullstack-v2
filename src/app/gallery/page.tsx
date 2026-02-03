import Image from "next/image";
import { prisma } from "@/lib/prisma";

export default async function GalleryPage() {
  const images = await prisma.galleryImage.findMany({ orderBy: { createdAt: "desc" } });

  return (
    <main className="py-10">
      <h1 className="text-3xl font-bold">Gallery</h1>
      <p className="mt-2 text-white/80">Dokumentasi kegiatan PMII.</p>

      <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {images.map((img) => (
          <div key={img.id} className="rounded-2xl border border-white/15 bg-white/5 overflow-hidden">
            <div className="relative w-full aspect-[4/3] bg-black/10">
              <Image src={img.url} alt={img.title ?? "Gallery"} fill className="object-cover" />
            </div>
            <div className="p-4 text-white/90">
              <div className="font-semibold">{img.title ?? "Kegiatan PMII"}</div>
              <div className="mt-1 text-xs text-white/60">{new Date(img.createdAt).toLocaleString()}</div>
            </div>
          </div>
        ))}

        {images.length === 0 && (
          <div className="rounded-2xl border border-white/15 bg-white/5 p-5 text-white/80">
            Belum ada foto di gallery.
          </div>
        )}
      </div>
    </main>
  );
}
