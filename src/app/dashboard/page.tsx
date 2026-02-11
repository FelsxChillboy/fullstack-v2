export const dynamic = "force-dynamic";

export default function DashboardHome() {
  return (
    <div>
      <h1 className="text-2xl font-semibold">User Dashboard</h1>
      <p className="mt-2 opacity-70">
        Selamat datang! Ini halaman dashboard untuk user.
      </p>

      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
          <div className="text-sm opacity-70">Menu</div>
          <div className="mt-1 text-lg">Overview</div>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
          <div className="text-sm opacity-70">Akses</div>
          <div className="mt-1 text-lg">User</div>
        </div>
      </div>
    </div>
  );
}
