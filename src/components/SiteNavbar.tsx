"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";

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

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={
        "sticky top-0 z-50 transition-all duration-300 " +
        (scrolled ? "bg-[#060b20]/70 backdrop-blur-xl border-b border-white/10" : "bg-transparent")
      }
    >
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <Image src="/logo-pmii.png" alt="Logo PMII" width={40} height={40} className="rounded-full" priority />
          <div className="leading-tight">
            <div className="text-xs font-semibold tracking-wide text-white/90">PR PMII TEKNIK</div>
            <div className="text-base font-extrabold tracking-wide">UNUSIA JAKARTA PUSAT</div>
          </div>
        </Link>

        {/* Desktop */}
        <nav className="hidden md:flex items-center gap-2 rounded-full border border-yellow-300/35 bg-yellow-400/20 backdrop-blur-xl px-3 py-2 shadow-2xl">
          {nav.map((item) => {
            const active = isActive(pathname, item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={
                  "px-4 py-2 rounded-full text-sm font-semibold tracking-wide transition " +
                  (active ? "bg-yellow-400 text-black shadow" : "text-white/90 hover:bg-white/10")
                }
              >
                {item.label.toUpperCase()}
              </Link>
            );
          })}
        </nav>

        {/* Mobile */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="secondary" className="bg-white/10 text-white border border-white/15 hover:bg-white/15">
                Menu
              </Button>
            </SheetTrigger>
            <SheetContent className="bg-[#060b20] border-white/10 text-white">
              <SheetHeader>
                <SheetTitle className="text-white">Menu</SheetTitle>
              </SheetHeader>

              <div className="mt-6 flex flex-col gap-2">
                {nav.map((item) => {
                  const active = isActive(pathname, item.href);
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={
                        "px-3 py-3 rounded-xl border transition " +
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
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
