"use client"

import React from "react"

function format(timeLeft: number) {
  const m = Math.floor(timeLeft / 60)
  const s = timeLeft % 60
  return `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`
}

export default function Countdown({
  seconds = 10,
  onComplete,
  ariaLabel = "Tempo restante",
}: {
  seconds?: number
  onComplete?: () => void
  ariaLabel?: string
}) {
  const [timeLeft, setTimeLeft] = React.useState(Math.max(0, Math.floor(seconds)))

  React.useEffect(() => {
    setTimeLeft(Math.max(0, Math.floor(seconds)))
  }, [seconds])

  React.useEffect(() => {
    if (timeLeft <= 0) {
      onComplete?.()
      return
    }
    const id = setInterval(() => {
      setTimeLeft((t) => {
        if (t <= 1) {
          clearInterval(id)
          return 0
        }
        return t - 1
      })
    }, 1000)
    return () => clearInterval(id)
  }, [timeLeft, onComplete])

  return (
    <time
      aria-label={ariaLabel}
      className="font-mono tracking-wide text-emerald-300"
      dateTime={`PT${timeLeft}S`}
    >
      {format(timeLeft)}
    </time>
  )
}
