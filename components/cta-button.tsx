"use client"

import type React from "react"
import { cn } from "@/lib/utils"

export default function CtaButton({
  href = "#",
  label = "Quero garantir a Mentoria 4D",
  className,
  onClick,
  external = false,
}: {
  href?: string
  label?: string
  className?: string
  onClick?: () => void
  external?: boolean
}) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (typeof window !== "undefined" && (window as any).fbq) {
      ;(window as any).fbq("track", "Lead")
    }

    if (onClick) {
      onClick()
    }
  }

  const props = external ? { target: "_blank", rel: "noopener noreferrer" as const } : {}

  return (
    <a
      href={href}
      {...props}
      onClick={handleClick}
      className={cn(
        "block rounded-lg px-6 py-4 text-center font-semibold text-black",
        "bg-[linear-gradient(135deg,#E0B17D,#D4A373)]",
        "shadow-[0_0_30px_-10px_rgba(212,163,115,0.55)]",
        "transition-all hover:brightness-105 active:brightness-95",
        "focus:outline-none focus:ring-2 focus:ring-[#D4A373]/70 focus:ring-offset-2 focus:ring-offset-black",
        className,
      )}
      style={{ fontFamily: "Inter, sans-serif" }}
    >
      {label}
    </a>
  )
}
