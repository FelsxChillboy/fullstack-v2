import { PrismaClient } from "@prisma/client";
import { notFound } from "next/navigation";
import Link from "next/link";

const prisma = new PrismaClient();

export default async function UpdateDetail({ params }: { params: { id: string } }) {
  const post = await prisma.post.findUnique({
    where: { id: params.id },
  });

  if (!post) return notFound();

  return (
    <main className="py-10 max-w-3xl">
      <Link href="/update" className="text-white/80 hover:text-white">
        ← Kembali ke Update
      </Link>

      <h1 className="mt-4 text-3xl font-bold">{post.title}</h1>
      <div className="mt-2 text-xs text-white/60">
        {new Date(post.createdAt).toLocaleString()}
      </div>

      <article className="mt-6 rounded-2xl border border-white/15 bg-white/5 p-6 leading-relaxed whitespace-pre-wrap text-white/90">
        {post.content}
      </article>
    </main>
  );
}
