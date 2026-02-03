import Image from "next/image";
import { prisma } from "@/lib/prisma";

export default async function TeamPage() {
  const team = await prisma.teamMember.findMany({
    orderBy: [{ order: "asc" }, { createdAt: "asc" }],
  });

  return (
    <main className="py-10">
      <h1 className="text-3xl font-bold">Pengurus / Struktur</h1>
      <p className="mt-2 text-white/80">Struktur kepengurusan organisasi.</p>

      <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {team.map((m) => (
          <div key={m.id} className="rounded-2xl border border-white/15 bg-white/5 p-5 flex items-center gap-4">
            <div className="relative w-14 h-14 rounded-full overflow-hidden bg-black/10">
              {m.photoUrl ? <Image src={m.photoUrl} alt={m.name} fill className="object-cover" /> : null}
            </div>
            <div>
              <div className="font-semibold text-white">{m.name}</div>
              <div className="text-sm text-white/70">{m.role}</div>
            </div>
          </div>
        ))}

        {team.length === 0 && (
          <div className="rounded-2xl border border-white/15 bg-white/5 p-5 text-white/80">
            Belum ada data struktur.
          </div>
        )}
      </div>
    </main>
  );
}
