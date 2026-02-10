"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
  const r = useRouter();
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setErr(null);
    setLoading(true);

    const form = new FormData(e.currentTarget);
    const payload = Object.fromEntries(form.entries());

    const res = await fetch("/api/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    setLoading(false);

    const data = await res.json().catch(() => ({}));
    if (!res.ok) return setErr(data.error ?? "Gagal daftar");

    r.push("/member/card");
  }

  return (
    <main className="min-h-[100svh] w-full px-4 py-10 text-white">
      <div className="mx-auto w-full max-w-md rounded-3xl border border-white/10 bg-white/5 p-6">
        <h1 className="text-2xl font-bold">Daftar Anggota</h1>
        <p className="mt-1 text-white/70 text-sm">Buat akun untuk kartu anggota digital.</p>

        {err && <div className="mt-4 rounded-xl bg-red-500/15 border border-red-500/30 p-3 text-sm">{err}</div>}

        <form onSubmit={onSubmit} className="mt-6 space-y-3">
          <input name="fullName" placeholder="Nama lengkap" className="w-full rounded-xl bg-black/30 border border-white/10 px-4 py-3" />
          <input name="email" type="email" placeholder="Email" className="w-full rounded-xl bg-black/30 border border-white/10 px-4 py-3" />
          <input name="password" type="password" placeholder="Password" className="w-full rounded-xl bg-black/30 border border-white/10 px-4 py-3" />

          <input name="rayon" placeholder="Rayon (opsional)" className="w-full rounded-xl bg-black/30 border border-white/10 px-4 py-3" />
          <input name="komisariat" placeholder="Komisariat (opsional)" className="w-full rounded-xl bg-black/30 border border-white/10 px-4 py-3" />
          <input name="fakultas" placeholder="Fakultas (opsional)" className="w-full rounded-xl bg-black/30 border border-white/10 px-4 py-3" />
          <input name="periode" placeholder="Periode (opsional) ex: 2025/2026" className="w-full rounded-xl bg-black/30 border border-white/10 px-4 py-3" />

          <button disabled={loading} className="w-full rounded-xl bg-yellow-400 text-black font-semibold py-3 disabled:opacity-60">
            {loading ? "Memproses..." : "Daftar"}
          </button>
        </form>
      </div>
    </main>
  );
}
