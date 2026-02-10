import { prisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";

export default async function VerifyPage({
  params,
}: {
  params: { memberNumber: string };
}) {
  const profile = await prisma.memberProfile.findUnique({
    where: { memberNumber: params.memberNumber },
    include: { user: true },
  });

  if (!profile) {
    return (
      <main className="min-h-[100svh] flex items-center justify-center text-white">
        ❌ Anggota tidak ditemukan
      </main>
    );
  }

  return (
    <main className="min-h-[100svh] w-full flex items-center justify-center px-4 text-white">
      <div className="max-w-md w-full rounded-3xl border border-white/10 bg-white/5 p-6 text-center">
        <div className="text-green-400 text-lg font-bold">
          ✅ ANGGOTA TERVERIFIKASI
        </div>

        <div className="mt-4 space-y-2 text-white/90">
          <div><b>Nama:</b> {profile.fullName}</div>
          <div><b>No Anggota:</b> {profile.memberNumber}</div>
          {profile.rayon && <div><b>Rayon:</b> {profile.rayon}</div>}
          {profile.komisariat && <div><b>Komisariat:</b> {profile.komisariat}</div>}
          {profile.periode && <div><b>Periode:</b> {profile.periode}</div>}
        </div>
      </div>
    </main>
  );
}
