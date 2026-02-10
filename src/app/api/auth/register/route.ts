import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { prisma } from "@/lib/prisma";
import { setSession } from "@/lib/session";

function makeMemberNumber() {
  const year = new Date().getFullYear();
  const rand = Math.random().toString(10).slice(2, 8);
  return `PMII-${year}-${rand}`;
}

export async function POST(req: Request) {
  const { fullName, email, password, rayon, komisariat, fakultas, periode } =
    await req.json();

  if (!fullName || !email || !password) {
    return NextResponse.json({ error: "Nama, email, password wajib" }, { status: 400 });
  }

  const exists = await prisma.user.findUnique({ where: { email } });
  if (exists) {
    return NextResponse.json({ error: "Email sudah terdaftar" }, { status: 400 });
  }

  const hashed = await bcrypt.hash(password, 10);

  const user = await prisma.user.create({
    data: {
      name: fullName,
      email,
      password: hashed,
      role: "USER",
      profile: {
        create: {
          fullName,
          memberNumber: makeMemberNumber(),
          rayon: rayon ?? null,
          komisariat: komisariat ?? null,
          fakultas: fakultas ?? null,
          periode: periode ?? null,
        },
      },
    },
  });

  setSession(user.id);
  return NextResponse.json({ ok: true });
}
