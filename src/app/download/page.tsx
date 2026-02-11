import Link from "next/link";
import { prisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";

function formatDate(d: Date) {
  // format: 11 Feb 2026 • 13:59
  return new Intl.DateTimeFormat("id-ID", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  }).format(d);
}

function getExt(name: string) {
  const parts = name.split(".");
  return parts.length > 1 ? parts.pop()!.toUpperCase() : "FILE";
}

export default async function DownloadPage() {
  const files = await prisma.downloadFile.findMany({
    orderBy: { createdAt: "desc" },
  });

  return (
    <main className="min-h-screen px-4 py-10">
      <div className="mx-auto w-full max-w-5xl">
        {/* Header */}
        <div className="flex items-start justify-between gap-4">
          <div>
            <h1 className="text-4xl font-bold tracking-tight">File Download</h1>
            <p className="mt-2 text-sm opacity-80">
              Unduh dokumen resmi, materi, dan file organisasi.
            </p>
          </div>

          <div className="mt-2 inline-flex items-center rounded-full border border-yellow-500/30 bg-yellow-400/10 px-3 py-1 text-xs font-semibold text-yellow-200">
            {files.length} File
          </div>
        </div>

        {/* List */}
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {files.map((f) => {
            const ext = getExt(f.fileName);

            return (
              <div
                key={f.id}
                className="group rounded-2xl border border-white/10 bg-white/5 p-5 shadow-sm backdrop-blur transition hover:bg-white/10"
              >
                <div className="flex items-start justify-between gap-4">
                  {/* Left */}
                  <div className="min-w-0">
                    {/* Kategori / title */}
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="inline-flex rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs">
                        {f.title}
                      </span>

                      <span className="inline-flex rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs opacity-80">
                        {ext}
                      </span>
                    </div>

                    {/* Nama file */}
                    <div className="mt-3 truncate text-base font-semibold">
                      {f.fileName}
                    </div>

                    {/* Tanggal */}
                    <div className="mt-2 text-xs opacity-70">
                      {formatDate(f.createdAt)}
                    </div>
                  </div>

                  {/* Right button */}
                  <Link
                    href={f.fileUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-10 shrink-0 items-center justify-center rounded-xl bg-yellow-400 px-4 text-sm font-semibold text-black shadow transition hover:brightness-95"
                  >
                    Download
                  </Link>
                </div>
              </div>
            );
          })}

          {files.length === 0 && (
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5 opacity-80">
              Belum ada file. Tambahkan lewat Prisma Studio (DownloadFile).
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
