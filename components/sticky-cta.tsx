"use client"

import React from "react"
import { cn } from "@/lib/utils"

export default function StickyCta({
  href = "#",
  label = "Quero garantir a Mentoria 4D",
  onClick,
}: {
  href?: string
  label?: string
  onClick?: () => void
}) {
  return (
    <div
      className={cn(
        "fixed bottom-0 left-0 right-0 z-40 md:hidden",
        "backdrop-blur supports-[backdrop-filter]:bg-black/50 bg-black/80",
        "border-t border-[#D4A373]/20",
        "pb-[env(safe-area-inset-bottom)]"
      )}
      role="region"
      aria-label="Ação rápida"
    >
      <div className="px-4 py-3">
        <a
          href={href}
          onClick={onClick}
          className={cn(
            "block rounded-lg px-6 py-3 text-center font-semibold text-black",
            "bg-[linear-gradient(135deg,#E0B17D,#D4A373)]",
            "shadow-[0_0_30px_-10px_rgba(212,163,115,0.55)]",
            "transition-all hover:brightness-105 active:brightness-95",
            "focus:outline-none focus:ring-2 focus:ring-[#D4A373]/70 focus:ring-offset-2 focus:ring-offset-black"
          )}
          style={{ fontFamily: "Inter, sans-serif" }}
        >
          {label}
        </a>
      </div>
    </div>
  )
}
