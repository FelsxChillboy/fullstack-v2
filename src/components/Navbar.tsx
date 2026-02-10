"use client";

import Link from "next/link";
import { useState } from "react";


const items = [
  { label: "Home", href: "/" },
  { label: "Gallery", href: "/gallery" },
  { label: "Team", href: "/team" },
  { label: "Update", href: "/update" },
  { label: "File Download", href: "/download" },
  { label: "Admin", href: "/admin" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#0A2AA8]/90 backdrop-blur border-b border-white/10">
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between text-white">
        <div className="flex gap-4">
          <Link href="/login">Login</Link>
          <Link href="/register">Daftar</Link>
        </div>

        <Link href="/" className="font-bold text-xl">
          PR PMII RAYON TEKNIK
        </Link>

        <nav className="hidden lg:flex gap-8 text-sm text-white/90">
          {items.map((i) => (
            <Link key={i.label} href={i.href} className="hover:text-white">
              {i.label}
            </Link>
          ))}
        </nav>

        <button
          className="lg:hidden px-3 py-2 rounded-lg border border-white/20"
          onClick={() => setOpen(true)}
        >
          Menu
        </button>
      </div>

      {open && (
        <div className="fixed inset-0 z-50">
          <div
            className="absolute inset-0 bg-black/50"
            onClick={() => setOpen(false)}
          />
          <div className="absolute right-0 top-0 h-full w-72 bg-[#071f7a] p-5">
            <button
              onClick={() => setOpen(false)}
              className="px-3 py-2 border rounded mb-5"
            >
              Close
            </button>

            <div className="flex flex-col gap-4">
              {items.map((i) => (
                <Link
                  key={i.label}
                  href={i.href}
                  onClick={() => setOpen(false)}
                >
                  {i.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
