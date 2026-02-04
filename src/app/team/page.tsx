import Image from "next/image";
import { prisma } from "@/lib/prisma";
import type { TeamMember } from "@prisma/client";

function pickTopThree(team: TeamMember[]) {
  // prioritas: yang role mengandung "ketua" jadi center.
  const ketuaIndex = team.findIndex((m) => m.role?.toLowerCase().includes("ketua"));
  let center: TeamMember | null = null;

  const rest = [...team];
  if (ketuaIndex >= 0) {
    center = rest.splice(ketuaIndex, 1)[0];
  } else {
    center = rest.shift() ?? null;
  }

  const left = rest.shift() ?? null;
  const right = rest.shift() ?? null;

  return { center, left, right, remaining: rest };
}

function ProfileCard({
  member,
  size = "md",
}: {
  member: TeamMember;
  size?: "lg" | "md";
}) {
  const isLg = size === "lg";

  // fallback kalau schema kamu belum punya field ini: aman
  const anyM = member as any;
  const instagram: string | null = anyM.instagram ?? null;
  const whatsapp: string | null = anyM.whatsapp ?? null;

  return (
    <div className="flex flex-col items-center text-center">
      {/* frame kuning + foto */}
      <div
        className={[
          "relative overflow-hidden bg-[#E09B19] border-2 border-white/90",
          "rounded-[28px]",
          isLg ? "w-[220px] h-[280px]" : "w-[200px] h-[260px]",
        ].join(" ")}
      >
        {/* Foto */}
        <div className="absolute inset-0">
          {member.photoUrl ? (
            <Image
              src={member.photoUrl}
              alt={member.name}
              fill
              className="object-cover object-top"
              sizes={isLg ? "220px" : "200px"}
              priority={isLg}
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-black font-extrabold">
              NO PHOTO
            </div>
          )}
        </div>

        {/* sedikit gelap biar foto “nendang” seperti poster */}
        <div className="absolute inset-0 bg-black/10" />
      </div>

      {/* Text bawah */}
      <div className="mt-4 text-[10px] uppercase tracking-[0.14em] leading-4 text-white/90">
        <div className="font-extrabold">{member.name}</div>
        <div className="text-white/80">{member.role}</div>
        {instagram ? <div className="text-white/70">INSTAGRAM : {instagram}</div> : null}
        {whatsapp ? <div className="text-white/70">WHATSAPP : {whatsapp}</div> : null}
      </div>
    </div>
  );
}

export default async function TeamPage() {
  const team = await prisma.teamMember.findMany({
    orderBy: [{ order: "asc" }, { createdAt: "asc" }],
  });

  const { center, left, right, remaining } = pickTopThree(team);

  return (
    <main
      className="min-h-screen relative text-white overflow-hidden"
      style={{
        backgroundImage: "url('/bg-about.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* overlay gelap */}
      <div className="absolute inset-0 bg-black/60" />

      <div className="relative z-10 px-6 py-8">
        {/* Header kiri */}
        <div className="flex items-start justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="leading-tight">
              <h1 className="mt-5 text-2xl md:text-3xl font-extrabold text-center">
                Struktur Kepengurusan
              </h1>
              <p className="mt-2 text-sm text-white/80 max-w-xl text-center">
                Struktur kepengurusan PR PMII Rayon Teknik UNUSIA Jakarta Pusat.
              </p>
            </div>
          </div>
        </div>

        {/* 3 card utama */}
        <div className="mt-12 flex justify-center gap-6">
          {left ? <ProfileCard member={left} size="md" /> : null}
          {center ? <ProfileCard member={center} size="lg" /> : null}
          {right ? <ProfileCard member={right} size="md" /> : null}
        </div>

        {/* remaining members (opsional) */}
        {remaining.length > 0 && (
          <div className="mt-10">
            <h2 className="text-xl font-bold mb-4 text-center">Pengurus Lainnya</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {remaining.map((m) => (
                <ProfileCard key={m.id} member={m} size="md" />
              ))}
            </div>
          </div>
        )}

        {team.length === 0 && (
          <div className="mt-12 text-center text-white/80">
            Belum ada data pengurus. Tambahkan lewat Prisma Studio (TeamMember).
          </div>
        )}
      </div>
    </main>
  );
}
