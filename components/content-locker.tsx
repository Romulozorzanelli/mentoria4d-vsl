"use client"

import React from "react"
import Countdown from "./countdown"

export default function ContentLocker({
  seconds = 600,
  storageKey = "content_unlocked",
  children,
}: {
  seconds?: number
  storageKey?: string
  children: React.ReactNode
}) {
  const [unlocked, setUnlocked] = React.useState(false)
  const [startTs, setStartTs] = React.useState<number | null>(null)
  const [remaining, setRemaining] = React.useState(seconds)

  React.useEffect(() => {
    // Persist unlock session
    const storage = typeof window !== "undefined" ? window.localStorage : null
    const exists = storage?.getItem(storageKey)
    if (exists === "true") {
      setUnlocked(true)
      return
    }
    const start = Date.now()
    setStartTs(start)

    const tick = () => {
      const elapsed = Math.floor((Date.now() - start) / 1000)
      const left = Math.max(0, seconds - elapsed)
      setRemaining(left)
      if (left <= 0) {
        setUnlocked(true)
        storage?.setItem(storageKey, "true")
      }
    }

    tick()
    const id = setInterval(tick, 1000)
    return () => clearInterval(id)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [seconds, storageKey])

  if (unlocked) {
    return <>{children}</>
  }

  return (
    <div className="relative">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/80 z-10"
      />
      <div className="absolute inset-0 z-20 flex items-center justify-center px-4">
        <div className="text-center rounded-xl border border-emerald-400/30 bg-zinc-900/80 px-6 py-5 shadow-[0_0_50px_-16px_rgba(0,255,179,0.35)]">
          <p className="text-sm text-zinc-300">
            {"Conteúdo liberado em "}
            <Countdown seconds={remaining} ariaLabel="Tempo para desbloqueio" />
          </p>
          <p className="mt-1 text-xs text-zinc-400">
            {"Fique na página para liberar as próximas seções automaticamente."}
          </p>
        </div>
      </div>
      {/* Blur preview of content */}
      <div className="filter blur-sm pointer-events-none select-none opacity-70">
        {children}
      </div>
    </div>
  )
}
