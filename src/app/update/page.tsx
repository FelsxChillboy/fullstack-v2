import Link from "next/link";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function UpdatePage() {
  const posts = await prisma.post.findMany({
    orderBy: { createdAt: "desc" },
  });

  return (
    <main className="py-10">
      <h1 className="text-3xl font-bold">Update / Berita</h1>
      <p className="mt-2 text-white/80">Informasi terbaru kegiatan dan berita PMII.</p>

      <div className="mt-6 space-y-4">
        {posts.map((p) => (
          <Link
            key={p.id}
            href={"/update/" + p.id}
            className="block rounded-2xl border border-white/15 bg-white/5 p-5 hover:bg-white/10 transition"
          >
            <div className="text-xl font-semibold">{p.title}</div>
            <div className="mt-2 text-white/80 line-clamp-2 whitespace-pre-wrap">
              {p.content}
            </div>
            <div className="mt-3 text-xs text-white/60">
              {new Date(p.createdAt).toLocaleString()}
            </div>
          </Link>
        ))}

        {posts.length === 0 && (
          <div className="rounded-2xl border border-white/15 bg-white/5 p-5 text-white/80">
            Belum ada berita.
          </div>
        )}
      </div>
    </main>
  );
}
