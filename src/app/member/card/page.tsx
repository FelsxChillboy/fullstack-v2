"use client";

import { prisma } from "@/lib/prisma";
import { getSessionUserId } from "@/lib/session";
import QRCode from "qrcode";
import * as htmlToImage from "html-to-image";

export const dynamic = "force-dynamic";

export default async function MemberCardPage() {
  const userId = getSessionUserId();
  if (!userId) return null;

  const profile = await prisma.memberProfile.findUnique({ where: { userId } });

  if (!profile) {
    return (
      <main className="min-h-[100svh] w-full flex items-center justify-center text-white">
        Profil anggota belum ada.
      </main>
    );
  }
<button
  onClick={async () => {
    const node = document.getElementById("member-card");
    if (!node) return;
    const dataUrl = await htmlToImage.toPng(node);
    const link = document.createElement("a");
    link.download = "kartu-anggota.png";
    link.href = dataUrl;
    link.click();
  }}
  className="mt-6 w-full rounded-xl bg-yellow-400 text-black font-semibold py-3"
>
  Download Kartu (PNG)
</button>


  const qrCodeData = await QRCode.toDataURL(profile.memberNumber, {
    errorCorrectionLevel: "H",
    type: "image/png",
    margin: 1,
    scale: 4,
  });

  return (
    <main className="min-h-[100svh] w-full px-4 py-10 text-white">
      <div className="mx-auto max-w-md rounded-3xl border border-white/10 bg-white/5 p-6">
        <div className="text-xl font-bold">Kartu Tanda Anggota Digital</div>
        <div className="mt-4 rounded-2xl border border-white/10 bg-black/20 p-5">
          <div className="text-sm text-white/70">Nomor Anggota</div>
          <div className="text-lg font-extrabold tracking-wider">{profile.memberNumber}</div>

          <div className="mt-4 space-y-2 text-white/90">
            <div><span className="text-white/60">Nama:</span> {profile.fullName}</div>
            {profile.rayon && <div><span className="text-white/60">Rayon:</span> {profile.rayon}</div>}
            {profile.komisariat && <div><span className="text-white/60">Komisariat:</span> {profile.komisariat}</div>}
            {profile.fakultas && <div><span className="text-white/60">Fakultas:</span> {profile.fakultas}</div>}
            {profile.periode && <div><span className="text-white/60">Periode:</span> {profile.periode}</div>}
          </div>
        </div>

        <form action="/api/auth/logout" method="post" className="mt-6">
          <button className="w-full rounded-xl border border-white/15 bg-white/5 py-3 font-semibold hover:bg-white/10 transition">
            Logout
          </button>
        </form>
      </div>
    </main>
  );
}
