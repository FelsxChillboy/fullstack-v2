import Link from "next/link";
import { notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export const dynamic = "force-dynamic";

export default async function UpdateDetail({ params }: { params: { id: string } }) {
  const post = await prisma.post.findUnique({
    where: { id: params.id },
  });

  if (!post) return notFound();

  return (
    <main className="py-10 max-w-4xl">
      <Button asChild variant="secondary" className="bg-white/10 text-white border border-white/15 hover:bg-white/15">
        <Link href="/update">← Back</Link>
      </Button>

      <Card className="mt-6 rounded-2xl border-white/10 bg-white/5">
        <CardContent className="p-6">
          <h1 className="text-3xl font-bold">{post.title}</h1>
          <div className="mt-2 text-sm text-white/60">{new Date(post.createdAt).toLocaleString("id-ID")}</div>
          <div className="mt-6 whitespace-pre-wrap text-white/85 leading-relaxed">{post.content}</div>
        </CardContent>
      </Card>
    </main>
  );
}
