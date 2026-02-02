"use client";

import React from "react";

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "outline";
};

export default function AnimatedButton({
  variant = "primary",
  className = "",
  children,
  ...props
}: Props) {
  function createRipple(e: React.MouseEvent<HTMLButtonElement>) {
    const button = e.currentTarget;
    const rect = button.getBoundingClientRect();

    const size = Math.max(rect.width, rect.height);
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;

    const ripple = document.createElement("span");
    ripple.className = "ripple";
    ripple.style.width = ripple.style.height = size + "px";
    ripple.style.left = x + "px";
    ripple.style.top = y + "px";

    const old = button.querySelector("span.ripple");
    if (old) old.remove();

    button.appendChild(ripple);
    setTimeout(() => ripple.remove(), 650);
  }

  const base =
    "btn-pmii btn-ripple inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 font-semibold select-none";

  const styles =
    variant === "primary"
      ? "bg-yellow-400 text-[#0A2AA8] hover:bg-yellow-300"
      : "border border-white/25 text-white/90 hover:border-white/40 hover:text-white bg-transparent";

  return (
    <button
      {...props}
      onClick={(e) => {
        createRipple(e);
        props.onClick?.(e);
      }}
      className={[base, styles, className].join(" ")}
    >
      {children}
    </button>
  );
}
