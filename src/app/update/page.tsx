import Link from "next/link";
import { prisma } from "@/lib/prisma";

export default async function UpdatePage() {
  const posts = await prisma.post.findMany({
    orderBy: { createdAt: "desc" },
  });

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">Update</h1>

      <div className="space-y-3">
        {posts.map((p) => (
          <Link
            key={p.id}
            href={`/update/${p.id}`}
            className="block border rounded p-3 hover:bg-gray-50"
          >
            <div className="font-semibold">{p.title}</div>
            <div className="text-sm opacity-80 line-clamp-2">{p.content}</div>
          </Link>
        ))}
      </div>
    </main>
  );
}
