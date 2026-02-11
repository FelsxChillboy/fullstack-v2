import { redirect } from "next/navigation";
import Link from "next/link";
import { getSessionCookie } from "@/lib/session";
import { prisma } from "@/lib/prisma";
import LogoutButton from "./logout-button";

export const dynamic = "force-dynamic";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getSessionCookie();
  if (!session) redirect("/login");

  const user = await prisma.user.findUnique({
    where: { id: session },
    select: { id: true, name: true, email: true, role: true },
  });

  if (!user) redirect("/login");

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <div className="flex">
        {/* Sidebar */}
        <aside className="w-72 min-h-screen border-r border-white/10 bg-white/5 p-6">
          <div className="mb-6">
            <div className="text-lg font-semibold">Dashboard</div>
            <div className="mt-2 text-sm opacity-80">
              {user.name ?? user.email}
            </div>
            <div className="mt-1 inline-flex rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs">
              {user.role}
            </div>
          </div>

          <nav className="space-y-2 text-sm">
            <Link className="block rounded-lg px-3 py-2 hover:bg-white/10" href="/dashboard">
              Overview
            </Link>

            {user.role === "ADMIN" && (
              <Link className="block rounded-lg px-3 py-2 hover:bg-white/10" href="/dashboard/admin">
                Admin Panel
              </Link>
            )}

            <Link className="block rounded-lg px-3 py-2 hover:bg-white/10" href="/member/card">
              Member Card
            </Link>
          </nav>

          <div className="mt-8">
            <LogoutButton />
          </div>
        </aside>

        {/* Content */}
        <main className="flex-1 p-8">{children}</main>
      </div>
    </div>
  );
}
