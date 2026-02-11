"use client";

import type { User } from "@prisma/client";

export default function MemberCardClient({ members }: { members: User[] }) {
  return (
    <main className="min-h-screen px-4 py-8">
      <div className="mx-auto w-full max-w-5xl">
        <h1 className="text-2xl font-semibold">Kartu Anggota</h1>
        <p className="mt-1 text-sm opacity-70">
          Daftar anggota yang terdaftar di sistem.
        </p>

        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {members.map((m) => (
            <div
              key={m.id}
              className="rounded-2xl border border-white/10 bg-white/5 p-4 shadow"
            >
              <div className="text-lg font-medium">
                {m.name ?? "(Tanpa nama)"}
              </div>

              <div className="mt-2 text-sm opacity-70">{m.email}</div>

              <div className="mt-3 inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs">
                {m.role}
              </div>
            </div>
          ))}
        </div>

        {members.length === 0 && (
          <div className="mt-6 rounded-xl border border-white/10 bg-white/5 p-4">
            Belum ada data anggota.
          </div>
        )}
      </div>
    </main>
  );
}
