import Image from "next/image";
import { prisma } from "@/lib/prisma";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import type { GalleryImage } from "@prisma/client";


export default async function GalleryPage() {
  const images = await prisma.galleryImage.findMany({
    orderBy: { createdAt: "desc" },
  });

  return (
    <main className="py-10">
      <div className="flex items-end justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold">Gallery</h1>
          <p className="mt-2 text-white/80">Dokumentasi kegiatan PMII Teknik UNUSIA.</p>
        </div>
        <Badge className="bg-yellow-400 text-black hover:bg-yellow-400">{images.length} Foto</Badge>
      </div>

      <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {images.map((img:GalleryImage) => (
          <Dialog key={img.id}>
            <DialogTrigger asChild>
              <Card className="overflow-hidden rounded-2xl border-white/10 bg-white/5 hover:bg-white/10 transition cursor-pointer">
                <CardContent className="p-0">
                  <div className="relative aspect-[4/3]">
                    <Image
                      src={img.url}
                      alt={img.title ?? "Gallery"}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  <div className="p-4">
                    <div className="font-semibold">{img.title ?? "Foto kegiatan"}</div>
                    <div className="mt-1 text-xs text-white/60">{new Date(img.createdAt).toLocaleString("id-ID")}</div>
                  </div>
                </CardContent>
              </Card>
            </DialogTrigger>

            <DialogContent className="max-w-4xl bg-[#060b20] border-white/10 p-0 overflow-hidden">
              <div className="relative w-full aspect-[16/10] bg-black/20">
                <Image
                  src={img.url}
                  alt={img.title ?? "Gallery"}
                  fill
                  className="object-contain"
                  sizes="100vw"
                />
              </div>
              <div className="p-4 text-white">
                <div className="font-semibold text-lg">{img.title ?? "Foto kegiatan"}</div>
                <div className="text-sm text-white/70 mt-1">{new Date(img.createdAt).toLocaleString("id-ID")}</div>
              </div>
            </DialogContent>
          </Dialog>
        ))}

        {images.length === 0 && (
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-white/80">
            Belum ada foto. Tambahkan lewat Prisma Studio (GalleryImage).
          </div>
        )}
      </div>
    </main>
  );
}
