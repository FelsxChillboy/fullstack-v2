"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function Loader({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="loader-wrapper">
        <Image
          src="/logo-pmii.png"
          alt="Logo"
          width={130}
          height={130}
          priority
          className="loader-logo"
        />
      </div>
    );
  }

  return <>{children}</>;
}