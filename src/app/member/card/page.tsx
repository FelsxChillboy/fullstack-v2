import { prisma } from "@/lib/prisma";
import MemberCardClient from "./MemberCardClient";

export const dynamic = "force-dynamic";

export default async function Page() {
  const members = await prisma.user.findMany();

  return <MemberCardClient members={members} />;
}
