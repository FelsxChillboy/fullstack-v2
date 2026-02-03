"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const nav = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Gallery", href: "/gallery" },
  { label: "Update", href: "/update" },
  { label: "Pengurus", href: "/team" },
  { label: "Download", href: "/download" },
  { label: "Contact", href: "/contact" },
];

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(href + "/");
}

export default function SiteNavbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  return (
    <>
      <header
        className={
          "sticky top-0 z-50 transition-all duration-300 " +
          (scrolled
            ? "bg-[#060b20]/60 backdrop-blur-xl border-b border-white/10"
            : "bg-transparent")
        }
      >
        <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
          {/* left brand */}
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/logo-pmii.png"
              alt="Logo PMII"
              width={40}
              height={40}
              className="rounded-full"
              priority
            />
            <div className="leading-tight">
              <div className="text-xs font-semibold tracking-wide text-white/90">
                PR PMII TEKNIK
              </div>
              <div className="text-base font-extrabold tracking-wide">
                UNUSIA JAKARTA PUSAT
              </div>
            </div>
          </Link>

          {/* desktop pill */}
          <div className="hidden md:block">
            <div className="rounded-full border border-yellow-300/35 bg-yellow-400/20 backdrop-blur-xl px-3 py-2 shadow-2xl">
              <div className="flex items-center gap-2">
                {nav.map((item) => {
                  const active = isActive(pathname, item.href);
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={
                        "px-5 py-2 rounded-full text-sm font-semibold tracking-wide transition " +
                        (active
                          ? "bg-yellow-400 text-black shadow"
                          : "text-white/90 hover:bg-white/10")
                      }
                    >
                      {item.label.toUpperCase()}
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>

          {/* mobile */}
          <button
            onClick={() => setOpen(true)}
            className="md:hidden rounded-full border border-white/25 bg-white/10 backdrop-blur px-4 py-2 text-sm font-semibold"
          >
            Menu →
          </button>
        </div>
      </header>

      {/* mobile drawer */}
      {open && (
        <div className="fixed inset-0 z-[9999]">
          <button
            aria-label="Close"
            className="absolute inset-0 bg-black/60"
            onClick={() => setOpen(false)}
          />
          <div
            className="absolute right-0 top-0 h-full w-[82%] max-w-[360px] bg-[#060b20] border-l border-white/10 shadow-2xl p-5"
            style={{ animation: "drawerIn 220ms ease-out" }}
          >
            <div className="flex items-center justify-between">
              <div className="font-bold text-white">Menu</div>
              <button
                onClick={() => setOpen(false)}
                className="px-3 py-2 rounded-lg border border-white/15 hover:border-white/30 transition text-white"
              >
                Close
              </button>
            </div>

            <div className="mt-5 flex flex-col gap-2">
              {nav.map((item) => {
                const active = isActive(pathname, item.href);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className={
                      "px-3 py-3 rounded-xl border transition text-left " +
                      (active
                        ? "border-yellow-400/60 bg-yellow-400/10 text-white"
                        : "border-white/10 bg-white/5 text-white/85 hover:bg-white/10")
                    }
                  >
                    {item.label}
                  </Link>
                );
              })}
            </div>
          </div>

          <style jsx global>{`
            @keyframes drawerIn {
              from {
                transform: translateX(16px);
                opacity: 0.6;
              }
              to {
                transform: translateX(0);
                opacity: 1;
              }
            }
          `}</style>
        </div>
      )}
    </>
  );
}
