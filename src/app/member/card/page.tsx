import { prisma } from "@/lib/prisma";
import MemberCardClient, { type MemberCardUser } from "./MemberCardClient";

export const dynamic = "force-dynamic";

export default async function Page() {
  const members: MemberCardUser[] = await prisma.user.findMany({
    select: {
      id: true,
      name: true,
      email: true,
      role: true,
      createdAt: true,
    },
  });

  return <MemberCardClient members={members} />;
}
