"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";


type NavItem = { label: string; href: string; key?: string };

const items: NavItem[] = [
  { label: "Home", href: "/", key: "home" },
  { label: "About", href: "/#about", key: "about" },
  { label: "Mission", href: "/#mission", key: "mission" },
  { label: "Gallery", href: "/#gallery", key: "gallery" },
  { label: "Team", href: "/#team", key: "team" },
  { label: "Update", href: "/#update", key: "update" },
  { label: "File Download", href: "/#download", key: "download" },
  { label: "Contact", href: "/#contact", key: "contact" },
];

function isHashLink(href: string) {
  return href.startsWith("/#");
}

function DesktopNav({
  items,
  active,
  onActivate,
}: {
  items: { label: string; href: string; key?: string }[];
  active: string;
  onActivate: (k: string) => void;
}) {
  const [style, setStyle] = useState<{ left: number; width: number; opacity: number }>({
    left: 0,
    width: 0,
    opacity: 0,
  });

  const refs = useMemo(() => {
    const map: Record<string, HTMLAnchorElement | null> = {};
    items.forEach((it) => {
      if (it.key) map[it.key] = null;
    });
    return map;
  }, [items]);

  // helper untuk update posisi underline
  function updateIndicator() {
    const el = refs[active as keyof typeof refs];
    if (!el) return;

    const navEl = el.parentElement;
    if (!navEl) return;

    const a = el.getBoundingClientRect();
    const n = navEl.getBoundingClientRect();
    setStyle({
      left: a.left - n.left,
      width: a.width,
      opacity: 1,
    });
  }

  useEffect(() => {
    const t = setTimeout(updateIndicator, 20);
    return () => clearTimeout(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active]);

  useEffect(() => {
    const onResize = () => updateIndicator();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <nav className="relative hidden lg:flex items-center gap-8 text-sm font-medium text-white/90">
      {/* underline slider */}
      <span
        className="absolute -bottom-2 h-[2px] bg-yellow-400 rounded-full transition-all duration-300"
        style={{
          left: style.left,
          width: style.width,
          opacity: style.opacity,
        }}
      />

      {items.map((item) => {
        const activeNow = item.key ? active === item.key : false;

        return (
          <Link
            key={item.label}
            href={item.href}
            ref={(node) => {
              if (item.key) (refs as any)[item.key] = node;
            }}
            onClick={() => {
              if (item.key) onActivate(item.key);
            }}
            className={
              "relative transition hover:text-white " +
              (activeNow ? "text-white" : "text-white/80")
            }
          >
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}



export default function HeroNavbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("home");

  const watchIds = useMemo(() => ["about", "mission", "contact"], []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Active section detector
  // Active section detector (smooth + stable)
useEffect(() => {
  const sectionIds = ["about", "mission", "contact"];

  const sections = sectionIds
    .map((id) => document.getElementById(id))
    .filter(Boolean) as HTMLElement[];

  if (!sections.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActive(entry.target.id);
        }
      });

      // kalau scroll masih di atas banget → Home aktif
      if (window.scrollY < 120) {
        setActive("home");
      }
    },
    {
      root: null,
      threshold: 0.35, // section dianggap aktif kalau sudah 35% masuk layar
    }
  );

  sections.forEach((sec) => observer.observe(sec));

  return () => observer.disconnect();
}, []);

  // lock scroll when drawer open
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

function itemActive(item: NavItem) {
  if (item.key) return active === item.key;
  return false;
}


  return (
    <>
      <header
        className={
          "sticky top-0 z-50 transition-all duration-300 " +
          (scrolled
            ? "bg-[#060b20]/60 backdrop-blur-xl border-b border-white/10 py-3"
            : "bg-transparent py-5")
        }
      >
        <div className="mx-auto max-w-7xl px-6 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/logo-pmii.png"
              alt="Logo PMII"
              width={40}
              height={40}
              className={
                "rounded-full transition-all duration-300 " +
                (scrolled ? "w-9 h-9" : "w-10 h-10")
              }
              priority
            />
            <div className="text-xl font-bold tracking-wide">
              PR PMII RAYON TEKNIK
            </div>
          </Link>

          {/* Desktop */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-white/90">
            {items.map((item) => {
              const activeNow = itemActive(item);
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={
                    "relative hover:text-white transition " +
                    (activeNow ? "text-white" : "text-white/85")
                  }
                >
                  {item.label}
                  {activeNow && (
                    <span className="absolute -bottom-2 left-0 h-[2px] w-full bg-yellow-400 rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Mobile button */}
          <button
            onClick={() => setOpen(true)}
            className={
              "lg:hidden px-3 py-2 rounded-lg border transition " +
              (scrolled ? "border-white/25 bg-white/5" : "border-white/20")
            }
          >
            Menu
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      {open && (
        <div className="fixed inset-0 z-[9999]">
          {/* overlay */}
          <button
            aria-label="Close"
            className="absolute inset-0 bg-black/55"
            onClick={() => setOpen(false)}
          />

          {/* panel */}
          <div
            className={
              "absolute right-0 top-0 h-full w-[82%] max-w-[360px] bg-[#060b20] border-l border-white/10 " +
              "shadow-2xl p-5"
            }
            style={{
              animation: "drawerIn 220ms ease-out",
            }}
          >
            <div className="flex items-center justify-between">
              <div className="font-bold">Menu</div>
              <button
                onClick={() => setOpen(false)}
                className="px-3 py-2 rounded-lg border border-white/15 hover:border-white/30 transition"
              >
                Close
              </button>
            </div>

            <div className="mt-5 flex flex-col gap-2">
              {items.map((item) => {
                const activeNow = itemActive(item);
                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className={
                      "px-3 py-3 rounded-xl border transition text-left " +
                      (activeNow
                        ? "border-yellow-400/60 bg-yellow-400/10 text-white"
                        : "border-white/10 bg-white/5 text-white/85 hover:bg-white/10")
                    }
                  >
                    {item.label}
                  </Link>
                );
              })}
            </div>

            <div className="mt-6 text-xs text-white/60">
              Tips: menu About/Mission/Contact akan “aktif” saat kamu scroll.
            </div>
          </div>
        </div>
      )}

      {/* Drawer animation CSS */}
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
    </>
  );
}
 