"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function Loading() {
  const [fade, setFade] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFade(true);
    }, 2000); // 2 detik tampil

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`loader-wrapper ${fade ? "fade-out" : ""}`}>
      <Image
        src="/logo.png"
        alt="Logo PMII Teknik UNUSIA"
        width={130}
        height={130}
        priority
        className="loader-logo"
      />
    </div>
  );
}