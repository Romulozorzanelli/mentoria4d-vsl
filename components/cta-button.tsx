"use client";

import type React from "react";

interface CtaButtonProps {
  href: string;
  label: string;
  onClick?: () => void;
  external?: boolean;
  className?: string;
}

export function CtaButton({ href, label, onClick, external, className }: CtaButtonProps) {
  return (
    <a
      href={href}
      onClick={onClick}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className={`inline-flex items-center justify-center rounded-lg bg-[#D4A373] px-6 py-4 text-center font-bold text-zinc-950 transition-transform hover:scale-[1.02] hover:bg-[#e0b483] ${className ?? ""}`}
    >
      {label}
    </a>
  );
}
