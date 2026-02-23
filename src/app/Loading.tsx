"use client";


import { useEffect, useState } from "react";
import Image from "next/image";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <html lang="id">
      <body>
        {loading && (
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
        )}
        {!loading && children}
      </body>
    </html>
  );
}