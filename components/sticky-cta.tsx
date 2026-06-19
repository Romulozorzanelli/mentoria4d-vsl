"use client"

import React from "react"
import { cn } from "@/lib/utils"

export default function StickyCta({
  href = "#",
  label = "Quero me tornar um Gestor de IAs",
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
        "backdrop-blur supports-[backdrop-filter]:bg-black/40 bg-black/80",
        "border-t border-emerald-400/20",
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
            "block text-center font-semibold rounded-lg px-6 py-3 text-black",
            "bg-[linear-gradient(90deg,#00FFB3,#00B3FF)]",
            "shadow-[0_0_30px_-10px_rgba(0,255,179,0.6)]",
            "hover:brightness-110 active:brightness-95 transition-all",
            "focus:outline-none focus:ring-2 focus:ring-emerald-300/70 focus:ring-offset-2 focus:ring-offset-black"
          )}
          style={{ fontFamily: "var(--font-poppins)" }}
        >
          {label}
        </a>
      </div>
    </div>
  )
}
