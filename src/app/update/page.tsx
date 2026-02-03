import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { Post } from "@prisma/client";


export default async function UpdatePage() {
  const posts = await prisma.post.findMany({
    orderBy: { createdAt: "desc" },
  });

  return (
    <main className="py-10 max-w-4xl">
      <div className="flex items-end justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold">Update</h1>
          <p className="mt-2 text-white/80">Informasi terbaru kegiatan & pengumuman.</p>
        </div>
        <Badge className="bg-yellow-400 text-black hover:bg-yellow-400">{posts.length} Post</Badge>
      </div>

      <div className="mt-8 space-y-4">
        {posts.map((p:Post) => (
          <Link key={p.id} href={`/update/${p.id}`}>
            <Card className="rounded-2xl border-white/10 bg-white/5 hover:bg-white/10 transition">
              <CardContent className="p-5">
                <div className="font-semibold text-lg">{p.title}</div>
                <div className="mt-2 text-white/75 line-clamp-2 whitespace-pre-wrap">{p.content}</div>
                <div className="mt-3 text-xs text-white/60">{new Date(p.createdAt).toLocaleString("id-ID")}</div>
              </CardContent>
            </Card>
          </Link>
        ))}

        {posts.length === 0 && (
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-white/80">
            Belum ada post. Tambahkan lewat Prisma Studio (Post).
          </div>
        )}
      </div>
    </main>
  );
}
