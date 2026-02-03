import { prisma } from "@/lib/prisma";

export default async function DownloadPage() {
  const files = await prisma.downloadFile.findMany({
    orderBy: { createdAt: "desc" },
  });

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">Download</h1>
      <div className="space-y-3">
        {files.map((file) => (
          <div key={file.id} className="border p-3 rounded">
            <div className="font-semibold">{file.title}</div>
            <a className="text-blue-600 underline" href={file.url}>
              Download
            </a>
          </div>
        ))}
      </div>
    </main>
  );
}
