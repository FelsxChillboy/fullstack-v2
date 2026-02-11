"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data?.error ?? "Login gagal");
        return;
      }

      // redirect sesuai role
      if (data.role === "ADMIN") router.push("/dashboard/admin");
      else router.push("/dashboard");
    } catch {
      setError("Terjadi kesalahan jaringan");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen flex items-center justify-center px-4">
      <form
        onSubmit={handleLogin}
        className="w-full max-w-sm rounded-2xl border border-white/10 bg-white/5 p-6 shadow"
      >
        <h1 className="text-xl font-semibold">Login</h1>
        <p className="mt-1 text-sm opacity-70">Masuk untuk membuka dashboard.</p>

        <div className="mt-5 space-y-3">
          <input
            type="email"
            placeholder="Email"
            className="w-full rounded-lg border border-white/10 bg-black/20 px-3 py-2 outline-none"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full rounded-lg border border-white/10 bg-black/20 px-3 py-2 outline-none"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          {error && <div className="text-sm text-red-400">{error}</div>}

          <button
            disabled={loading}
            className="w-full rounded-lg bg-white/90 px-3 py-2 text-black font-medium disabled:opacity-60"
          >
            {loading ? "Memproses..." : "Login"}
          </button>
        </div>
      </form>
    </main>
  );
}
