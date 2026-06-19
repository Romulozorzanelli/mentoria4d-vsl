"use client"

import type React from "react"
import { cn } from "@/lib/utils"

export default function CtaButton({
  href = "#",
  label = "Chamar para ação",
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
    // Disparar evento do Facebook Pixel
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
        "block text-center font-semibold rounded-lg px-6 py-4 text-black",
        "bg-[linear-gradient(90deg,#00FFB3,#00B3FF)]",
        "shadow-[0_0_30px_-10px_rgba(0,255,179,0.6)]",
        "hover:brightness-110 active:brightness-95 transition-all",
        "focus:outline-none focus:ring-2 focus:ring-emerald-300/70 focus:ring-offset-2 focus:ring-offset-black",
        className,
      )}
      style={{ fontFamily: "var(--font-poppins)" }}
    >
      {label}
    </a>
  )
}
