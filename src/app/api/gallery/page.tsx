import Image from "next/image";
import { prisma } from "@/lib/prisma";

export default async function GalleryPage() {
  const images = await prisma.galleryImage.findMany({
    orderBy: { createdAt: "desc" },
  });

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">Gallery</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((img) => (
          <div key={img.id} className="border rounded overflow-hidden">
            <Image
              src={img.url}
              alt={img.title ?? "Gallery image"}
              width={800}
              height={600}
              className="w-full h-auto"
            />
            {img.title && <div className="p-2 font-medium">{img.title}</div>}
          </div>
        ))}
      </div>
    </main>
  );
}
