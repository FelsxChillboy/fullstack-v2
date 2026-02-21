"use client";

import { useEffect, useState } from "react";

export default function Loading() {
  const [fade, setFade] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFade(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`loader-wrapper ${fade ? "fade-out" : ""}`}>
      <img src="/logo-pmii.png" alt="Logo PMII Teknik UNUSIA" className="loader-logo" />
    </div>
  );
}