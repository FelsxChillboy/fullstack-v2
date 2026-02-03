import type { DownloadFile } from "@prisma/client";
import { prisma } from "@/lib/prisma";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default async function DownloadPage() {
  const files = await prisma.downloadFile.findMany({
    orderBy: { createdAt: "desc" },
  });

  return (
    <main className="py-10 max-w-4xl">
      <div className="flex items-end justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold">File Download</h1>
          <p className="mt-2 text-white/80">Unduh dokumen resmi, materi, dan file organisasi.</p>
        </div>
        <Badge className="bg-yellow-400 text-black hover:bg-yellow-400">{files.length} File</Badge>
      </div>

      <div className="mt-8 space-y-4">
        {files.map((f:DownloadFile) => (
          <Card key={f.id} className="rounded-2xl border-white/10 bg-white/5">
            <CardContent className="p-5 flex items-center justify-between gap-4">
              <div className="min-w-0">
                <div className="font-semibold">{f.title}</div>
                {"fileName" in f && (f as any).fileName ? (
                  <div className="text-sm text-white/70 mt-1 truncate">{(f as any).fileName}</div>
                ) : null}
                <div className="text-xs text-white/60 mt-2">{new Date(f.createdAt).toLocaleString("id-ID")}</div>
              </div>

              <Button asChild className="bg-yellow-400 text-black hover:bg-yellow-500">
                <a href={(f as any).fileUrl ?? (f as any).url ?? "#"} download>
                  Download
                </a>
              </Button>
            </CardContent>
          </Card>
        ))}

        {files.length === 0 && (
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-white/80">
            Belum ada file. Tambahkan lewat Prisma Studio (DownloadFile).
          </div>
        )}
      </div>
    </main>
  );
}
