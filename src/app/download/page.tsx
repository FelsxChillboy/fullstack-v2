import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function DownloadPage() {
  const files = await prisma.downloadFile.findMany({
    orderBy: { createdAt: "desc" },
  });

  return (
    <main className="py-10 max-w-4xl">
      <h1 className="text-3xl font-bold">File Download</h1>
      <p className="mt-2 text-white/80">Unduh dokumen resmi, materi, dan file organisasi.</p>

      <div className="mt-6 space-y-4">
        {files.map((f) => (
          <a
            key={f.id}
            href={f.fileUrl}
            download
            className="block rounded-2xl border border-white/15 bg-white/5 p-5 hover:bg-white/10 transition"
          >
            <div className="font-semibold">{f.title}</div>
            <div className="text-sm text-white/70 mt-1">{f.fileName}</div>
            <div className="text-xs text-white/60 mt-2">
              {new Date(f.createdAt).toLocaleString()}
            </div>
          </a>
        ))}

        {files.length === 0 && (
          <div className="rounded-2xl border border-white/15 bg-white/5 p-5 text-white/80">
            Belum ada file untuk diunduh.
          </div>
        )}
      </div>
    </main>
  );
}
