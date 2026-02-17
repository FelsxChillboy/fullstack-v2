import Image from "next/image";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";

const images = [
  { src: "/gallery/foto1.jpg", title: "Dokumentasi" },
  { src: "/gallery/foto2.jpg", title: "Dokumentasi" },
  { src: "/gallery/foto3.jpg", title: "Dokumentasi" },
  { src: "/gallery/foto4.jpg", title: "Dokumentasi" },
  { src: "/gallery/foto5.jpg", title: "Dokumentasi" },
  { src: "/gallery/foto6.jpg", title: "Dokumentasi" },
  { src: "/gallery/foto7.jpg", title: "Dokumentasi" },
  { src: "/gallery/foto8.jpg", title: "Dokumentasi" },
  { src: "/gallery/foto9.jpg", title: "Dokumentasi" },
  { src: "/gallery/foto10.jpg", title: "Dokumentasi" },
  { src: "/gallery/foto11.jpg", title: "Dokumentasi" },
];

export default function GalleryPage() {
  return (
    <main
      className="min-h-screen relative text-white overflow-hidden"
      style={{
        backgroundImage: "url('/bg-about.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black/60" />

      <div className="relative z-10 px-6 md:px-10 py-10">
        <div className="flex items-start justify-between gap-6">
          <div className="leading-tight">
            <h1 className="mt-5 text-2xl md:text-3xl font-extrabold">Gallery</h1>
            <p className="mt-2 text-sm text-white/80 max-w-xl text-center">
              Dokumentasi kegiatan PMII Teknik UNUSIA.
            </p>
          </div>

          <Badge className="bg-yellow-400 text-black hover:bg-yellow-400">
            {images.length} Foto
          </Badge>
        </div>

        <section className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {images.map((img, i) => (
            <Dialog key={img.src}>
              <DialogTrigger asChild>
                <button className="text-left">
                  <div className="rounded-[28px] border-2 border-white overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.35)] hover:scale-[1.01] transition">
                    <div className="relative w-full h-[260px]">
                      <Image src={img.src} alt={img.title} fill className="object-cover" />
                    </div>
                    <div className="p-4 bg-black/40">
                      <div className="text-sm font-semibold">{img.title} #{i + 1}</div>
                      <div className="text-xs text-white/70">PMII Teknik UNUSIA</div>
                    </div>
                  </div>
                </button>
              </DialogTrigger>

              <DialogContent className="max-w-3xl bg-black/80 border border-white/10">
                <div className="relative w-full h-[70vh]">
                  <Image src={img.src} alt={img.title} fill className="object-contain" />
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </section>
      </div>
    </main>
  );
}
