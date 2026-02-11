import Link from "next/link";
import { prisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";

function formatDate(d: Date) {
  return new Intl.DateTimeFormat("id-ID", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  }).format(d);
}

function excerpt(text: string, max = 140) {
  const t = (text ?? "").trim();
  if (t.length <= max) return t;
  return t.slice(0, max).trimEnd() + "…";
}

export default async function UpdatePage() {
  const posts = await prisma.post.findMany({
    orderBy: { createdAt: "desc" },
    // kalau konten panjang, bisa select field saja:
    // select: { id:true, title:true, content:true, createdAt:true }
  });

  return (
    <main className="min-h-screen px-4 py-10">
      <div className="mx-auto w-full max-w-5xl">
        {/* Header */}
        <div className="flex items-start justify-between gap-4">
          <div>
            <h1 className="text-4xl font-bold tracking-tight">Update</h1>
            <p className="mt-2 text-sm opacity-80">
              Informasi terbaru kegiatan & pengumuman.
            </p>
          </div>

          <div className="mt-2 inline-flex items-center rounded-full border border-yellow-500/30 bg-yellow-400/10 px-3 py-1 text-xs font-semibold text-yellow-200">
            {posts.length} Post
          </div>
        </div>

        {/* Content */}
        <div className="mt-8">
          {posts.length === 0 ? (
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="text-base font-semibold">Belum ada post</div>
              <div className="mt-2 text-sm opacity-80">
                Tambahkan lewat Prisma Studio (Post).
              </div>

              <div className="mt-4 text-xs opacity-70">
                Tips: isi <span className="font-semibold">title</span> dan{" "}
                <span className="font-semibold">content</span>, nanti otomatis tampil
                di halaman ini.
              </div>
            </div>
          ) : (
            <div className="grid gap-4 md:grid-cols-2">
              {posts.map((p) => (
                <article
                  key={p.id}
                  className="rounded-2xl border border-white/10 bg-white/5 p-5 shadow-sm backdrop-blur transition hover:bg-white/10"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="min-w-0">
                      <h2 className="truncate text-lg font-semibold">
                        {p.title}
                      </h2>
                      <div className="mt-2 text-xs opacity-70">
                        {formatDate(p.createdAt)}
                      </div>
                    </div>

                    {/* optional: link detail kalau kamu punya halaman detail */}
                    {/* <Link
                      href={`/update/${p.id}`}
                      className="shrink-0 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-xs hover:bg-white/10"
                    >
                      Baca
                    </Link> */}
                  </div>

                  <p className="mt-4 text-sm opacity-85">
                    {excerpt(p.content, 160)}
                  </p>
                </article>
              ))}
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
