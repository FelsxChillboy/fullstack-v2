import Image from "next/image";
import { prisma } from "@/lib/prisma";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import type { GalleryImage } from "@prisma/client";

export const dynamic = "force-dynamic"; 

export default async function GalleryPage() {
  const images = await prisma.galleryImage.findMany({
    orderBy: { createdAt: "desc" },
  });

  return (
    <main
      className="min-h-screen relative text-white overflow-hidden"
      style={{
        backgroundImage: "url('/bg-about.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay gelap biar kontras */}
      <div className="absolute inset-0 bg-black/60" />

      <div className="relative z-10 px-6 md:px-10 py-10">
        {/* Header */}
        <div className="flex items-start justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="leading-tight">
              <h1 className="mt-5 text-2xl md:text-3xl font-extrabold text-center">
                Gallery
              </h1>
              <p className="mt-2 text-sm text-white/80 max-w-xl text-center">
                Dokumentasi kegiatan PMII Teknik UNUSIA.
              </p>
            </div>
          </div>

          <Badge className="bg-yellow-400 text-black hover:bg-yellow-400">
            {images.length} Foto
          </Badge>
        </div>

        {/* Grid */}
        <section className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {images.map((img: GalleryImage) => {
            const title = img.title ?? "Foto kegiatan";
            const created = new Date(img.createdAt).toLocaleDateString("id-ID", {
              day: "2-digit",
              month: "long",
              year: "numeric",
            });

            // kalau schema kamu punya field ini, otomatis kepakai
            const anyImg = img as any;
            const location: string | null = anyImg.location ?? null;
            const description: string | null = anyImg.description ?? null;

            return (
              <Dialog key={img.id}>
                <DialogTrigger asChild>
                  <button className="text-left">
                    <div className="rounded-[28px] border-2 border-white overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.35)] hover:scale-[1.01] transition">
                      {/* gambar */}
                      <div className="relative w-full aspect-[4/3]">
                        <Image
                          src={img.url}
                          alt={title}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, 33vw"
                        />
                      </div>

                      {/* panel kuning */}
                      <div className="bg-[#E09B19] px-6 py-5">
                        <div className="text-[10px] font-extrabold uppercase tracking-[0.12em] text-white leading-5">
                          <div>NAMA KEGIATAN : {title}</div>
                          {location ? <div>LOKASI : {location}</div> : null}
                          <div>TANGGAL : {created}</div>
                          {description ? (
                            <div className="mt-2">{description}</div>
                          ) : (
                            <div className="mt-2">PENJELASAN SINGKAT KEGIATAN</div>
                          )}
                        </div>
                      </div>
                    </div>
                  </button>
                </DialogTrigger>

                {/* Dialog Preview */}
                <DialogContent className="max-w-4xl bg-[#060b20] border-white/10 p-0 overflow-hidden">
                  <div className="relative w-full aspect-[16/10] bg-black/20">
                    <Image
                      src={img.url}
                      alt={title}
                      fill
                      className="object-contain"
                      sizes="100vw"
                    />
                  </div>
                  <div className="p-4 text-white">
                    <div className="font-semibold text-lg">{title}</div>
                    <div className="text-sm text-white/70 mt-1">{created}</div>
                    {location ? (
                      <div className="text-sm text-white/70 mt-1">{location}</div>
                    ) : null}
                    {description ? (
                      <div className="text-sm text-white/80 mt-3">{description}</div>
                    ) : null}
                  </div>
                </DialogContent>
              </Dialog>
            );
          })}

          {images.length === 0 && (
            <div className="rounded-2xl border-2 border-white/30 bg-white/5 p-6 text-white/80">
              Belum ada foto. Tambahkan lewat Prisma Studio (GalleryImage).
            </div>
          )}
        </section>
      </div>
    </main>
  );
}
