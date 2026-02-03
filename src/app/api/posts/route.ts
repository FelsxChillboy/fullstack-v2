import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(req: Request) {
  const body = await req.json();

  const post = await prisma.post.create({
    data: {
      title: body.title,
      content: body.content,
      author: body.author ?? "Admin", // ✅ wajib
    },
  });

  return NextResponse.json(post);
}
