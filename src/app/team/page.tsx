import Image from "next/image";
import { prisma } from "@/lib/prisma";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

function initials(name: string) {
  const parts = name.trim().split(/\s+/).slice(0, 2);
  return parts.map((p) => p[0]?.toUpperCase()).join("");
}

export default async function TeamPage() {
  const team = await prisma.teamMember.findMany({
    orderBy: [{ order: "asc" }, { createdAt: "asc" }],
  });

  return (
    <main className="py-10">
      <div className="flex items-end justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold">Pengurus</h1>
          <p className="mt-2 text-white/80">
            Struktur kepengurusan PR PMII Rayon Teknik UNUSIA Jakarta Pusat.
          </p>
        </div>
        <Badge className="bg-yellow-400 text-black hover:bg-yellow-400">
          {team.length} Orang
        </Badge>
      </div>

      <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {team.map((m) => (
          <Card
            key={m.id}
            className="rounded-2xl border-white/10 bg-white/5 hover:bg-white/10 transition"
          >
            <CardContent className="p-5 flex items-center gap-4">
              {/* Avatar */}
              <div className="relative w-14 h-14 rounded-full overflow-hidden border border-white/10 bg-black/20 shrink-0">
                {m.photoUrl ? (
                  <Image
                    src={m.photoUrl}
                    alt={m.name}
                    fill
                    className="object-cover"
                    sizes="56px"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-sm font-bold text-yellow-300">
                    {initials(m.name)}
                  </div>
                )}
              </div>

              {/* Info */}
              <div className="min-w-0">
                <div className="font-semibold text-white truncate">{m.name}</div>
                <div className="text-sm text-white/70 truncate">{m.role}</div>

                {/* optional: division/period if you have it */}
                {"division" in m && (m as any).division ? (
                  <div className="mt-2">
                    <span className="inline-flex text-xs px-2 py-1 rounded-full bg-yellow-400/10 border border-yellow-400/20 text-yellow-200">
                      {(m as any).division}
                    </span>
                  </div>
                ) : null}
              </div>
            </CardContent>
          </Card>
        ))}

        {team.length === 0 && (
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-white/80">
            Belum ada data pengurus. Tambahkan lewat Prisma Studio (TeamMember).
          </div>
        )}
      </div>
    </main>
  );
}
