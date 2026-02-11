import { redirect } from "next/navigation";
import { getSessionCookie } from "@/lib/session";
import { prisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";

export default async function AdminPage() {
  const session = await getSessionCookie();
  if (!session) redirect("/login");

  const user = await prisma.user.findUnique({
    where: { id: session },
    select: { role: true },
  });

  if (!user || user.role !== "ADMIN") redirect("/dashboard");

  return (
    <div>
      <h1 className="text-2xl font-semibold">Admin Panel</h1>
      <p className="mt-2 opacity-70">
        Halaman ini hanya bisa diakses oleh ADMIN.
      </p>

      <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-4">
        <div className="text-sm opacity-70">Status</div>
        <div className="mt-1 text-lg">✅ ADMIN Access Granted</div>
      </div>
    </div>
  );
}
