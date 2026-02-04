import Image from "next/image";
import { prisma } from "@/lib/prisma";
import type { TeamMember } from "@prisma/client";

export const dynamic = "force-dynamic";

/* Card Component */
function ProfileCard({ member }: { member: TeamMember }) {
  return (
    <div className="flex flex-col items-center text-center">
      {/* Frame */}
      <div className="relative w-[200px] h-[260px] rounded-[28px] overflow-hidden bg-[#E09B19] border-2 border-white">
        {member.photoUrl ? (
          <Image
            src={member.photoUrl}
            alt={member.name}
            fill
            className="object-cover object-top"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center font-bold text-black">
            NO PHOTO
          </div>
        )}
      </div>

      {/* Text */}
      <div className="mt-4 text-[11px] uppercase tracking-widest leading-5 text-white">
        <div className="font-extrabold">{member.name}</div>
        <div className="text-white/70">{member.role}</div>
      </div>
    </div>
  );
}

export default async function TeamPage() {
  const team = await prisma.teamMember.findMany({
    orderBy: [{ order: "asc" }, { createdAt: "asc" }],
  });

  /* ========================= */
  /* Ambil Ketua, Sekretaris, Bendahara */
  /* ========================= */
  const ketua = team.find((m) =>
    m.role.toLowerCase().includes("ketua rayon")
  );

  const sekretaris = team.find((m) =>
    m.role.toLowerCase().includes("sekretaris")
  );

  const bendahara = team.find((m) =>
    m.role.toLowerCase().includes("bendahara")
  );

  /* ========================= */
  /* Wakil Ketua 1-3 */
  /* ========================= */
  const wakilKetua = team.filter((m) =>
    m.role.toLowerCase().includes("wakil ketua")
  );

  /* ========================= */
  /* Sisanya masuk grid bawah */
  /* ========================= */
  const lainnya = team.filter(
    (m) =>
      !m.role.toLowerCase().includes("ketua rayon") &&
      !m.role.toLowerCase().includes("sekretaris") &&
      !m.role.toLowerCase().includes("bendahara") &&
      !m.role.toLowerCase().includes("wakil ketua")
  );

  return (
    <main
      className="min-h-screen text-white relative overflow-hidden"
      style={{
        backgroundImage: "url('/bg-about.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      <div className="relative z-10 px-10 py-10">
        {/* Title */}
        <h1 className="text-3xl font-extrabold">
          Struktur Kepengurusan
        </h1>
        <p className="text-white/70 mt-2">
          Struktur kepengurusan PR PMII Rayon Teknik UNUSIA Jakarta Pusat.
        </p>

        {/* ===================== */}
        {/* BARIS 1: Sekretaris - Ketua - Bendahara */}
        {/* ===================== */}
        <div className="mt-16 flex justify-center gap-14 flex-wrap items-start">
          {sekretaris && <ProfileCard member={sekretaris} />}

          {ketua && <ProfileCard member={ketua} />}

          {bendahara && <ProfileCard member={bendahara} />}
        </div>

        {/* ===================== */}
        {/* BARIS 2: Wakil Ketua 1-3 */}
        {/* ===================== */}
        {wakilKetua.length > 0 && (
          <div className="mt-20 flex justify-center gap-12 flex-wrap">
            {wakilKetua.slice(0, 3).map((m) => (
              <ProfileCard key={m.id} member={m} />
            ))}
          </div>
        )}

        {/* ===================== */}
        {/* BARIS BAWAH: Pengurus lainnya */}
        {/* ===================== */}
        {lainnya.length > 0 && (
          <div className="mt-24">
            <h2 className="text-xl font-bold tracking-widest uppercase text-white/80 mb-10">
              Koordinator & Anggota
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10 justify-items-center">
              {lainnya.map((m) => (
                <ProfileCard key={m.id} member={m} />
              ))}
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
