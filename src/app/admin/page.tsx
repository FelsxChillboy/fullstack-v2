"use client";

import { useState } from "react";
import type { FormEvent } from "react";

export default function AdminPage() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("");

  async function createPost(e: FormEvent) {
    e.preventDefault();

    await fetch("/api/posts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title,
        content,
        authorId: "TEMP",
      }),
    });

    alert("Post dibuat!");
    setTitle("");
    setContent("");
  }

  return (
    <main className="max-w-xl mx-auto p-6">
      <h1 className="text-3xl font-bold">Admin Dashboard</h1>

      <form onSubmit={createPost} className="space-y-3 mt-6">
        <input
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          placeholder="Nama penulis (contoh: Admin / Ketua Rayon)"
          className="w-full p-3 rounded-lg text-black"
        />

        <textarea
          className="w-full border p-2 rounded"
          placeholder="Isi berita"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />

        <button className="w-full bg-black text-white py-2 rounded">
          Tambah Berita
        </button>
      </form>
    </main>
  );
}
