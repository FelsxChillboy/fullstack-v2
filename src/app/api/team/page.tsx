import Image from "next/image";
import { prisma } from "@/lib/prisma";

export default async function TeamPage() {
  const team = await prisma.teamMember.findMany({
    orderBy: [{ order: "asc" }, { createdAt: "asc" }],
  });

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">Team</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {team.map((m) => (
          <div key={m.id} className="border rounded overflow-hidden">
            <Image
              src={m.photoUrl ?? "/team/logo-pmii.png"}
              alt={m.name}
              width={800}
              height={600}
              className="w-full h-auto"
            />
            <div className="p-2">
              <div className="font-semibold">{m.name}</div>
              <div className="text-sm opacity-80">{m.role}</div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
