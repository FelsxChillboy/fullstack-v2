import Image from "next/image";
import { prisma } from "@/lib/prisma";

export default async function GalleryPage() {
  const images = await prisma.galleryImage.findMany({
    orderBy: { createdAt: "desc" },
  });

  return (
    <main className="py-10">
      <h1 className="text-3xl font-bold">Gallery</h1>

      <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {images.map((img) => (
          <div
            key={img.id}
            className="rounded-2xl overflow-hidden border border-white/15 bg-white/5"
          >
            <div className="relative w-full aspect-[4/3]">
              <Image
                src={img.url}
                alt={img.title ?? "Gallery"}
                fill
                className="object-cover"
              />
            </div>

            <div className="p-4 font-semibold">
              {img.title ?? "Foto kegiatan"}
            </div>
          </div>
        ))}

        {images.length === 0 && (
          <p className="text-white/70">Belum ada foto.</p>
        )}
      </div>
    </main>
  );
}
