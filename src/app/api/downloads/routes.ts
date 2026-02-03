import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  const files = await prisma.downloadFile.findMany({
    orderBy: { createdAt: "desc" },
  });

  return NextResponse.json(files);
}
