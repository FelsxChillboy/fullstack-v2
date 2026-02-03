import { notFound } from "next/navigation";
import Link from "next/link";
import { prisma } from "@/lib/prisma";

export default async function UpdateDetail({
  params,
}: {
  params: { id: string };
}) {
  const post = await prisma.post.findUnique({
    where: { id: Number(params.id) },
  });

  if (!post) return notFound();

  return (
    <main className="p-6">
      <Link href="/update" className="underline text-blue-600">
        ← Back
      </Link>

      <article className="mt-4">
        <h1 className="text-2xl font-bold">{post.title}</h1>
        <div className="mt-3 whitespace-pre-wrap">{post.content}</div>
      </article>
    </main>
  );
}
