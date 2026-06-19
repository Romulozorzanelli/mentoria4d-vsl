"use client"

import React from "react"
import { Play, Pause, Volume2, VolumeX } from "lucide-react"

export default function VideoEmbed({
  src = "https://www.youtube.com/embed/5xeDSVn88VE",
  title = "VSL",
}: {
  src?: string
  title?: string
}) {
  const playerRef = React.useRef<any>(null)
  const iframeRef = React.useRef<HTMLIFrameElement>(null)
  const [isPlaying, setIsPlaying] = React.useState(false)
  const [isMuted, setIsMuted] = React.useState(true)
  const [isHovering, setIsHovering] = React.useState(false)
  const [playerReady, setPlayerReady] = React.useState(false)

  React.useEffect(() => {
    const tag = document.createElement("script")
    tag.src = "https://www.youtube.com/iframe_api"
    const firstScriptTag = document.getElementsByTagName("script")[0]
    firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag)

    // @ts-ignore
    window.onYouTubeIframeAPIReady = () => {
      // @ts-ignore
      playerRef.current = new window.YT.Player(iframeRef.current, {
        events: {
          onReady: (event: any) => {
            console.log("[v0] YouTube player ready")
            setPlayerReady(true)
            // Check initial muted state
            const muted = event.target.isMuted()
            console.log("[v0] Initial muted state:", muted)
            setIsMuted(muted)
          },
          onStateChange: (event: any) => {
            // @ts-ignore
            const playing = event.data === window.YT.PlayerState.PLAYING
            console.log("[v0] State change, playing:", playing)
            setIsPlaying(playing)
          },
        },
      })
    }

    return () => {
      if (playerRef.current && playerRef.current.destroy) {
        playerRef.current.destroy()
      }
    }
  }, [])

  const togglePlay = () => {
    if (!playerRef.current || !playerReady) return
    console.log("[v0] Toggle play, current state:", isPlaying)

    if (isPlaying) {
      playerRef.current.pauseVideo()
    } else {
      playerRef.current.playVideo()
    }
  }

  const toggleMute = () => {
    if (!playerRef.current || !playerReady) return
    console.log("[v0] Toggle mute, current state:", isMuted)

    if (isMuted) {
      playerRef.current.unMute()
      setIsMuted(false)
    } else {
      playerRef.current.mute()
      setIsMuted(true)
    }
  }

  const shouldShowControls = isMuted || !isPlaying || isHovering

  const youtubeUrl = `${src}?start=0&autoplay=1&mute=1&rel=0&iv_load_policy=3&controls=0&disablekb=1&modestbranding=1&playsinline=1&enablejsapi=1`

  return (
    <div className="relative w-full" onMouseEnter={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)}>
      <div className="relative w-full rounded-xl overflow-hidden border border-emerald-400/30 bg-zinc-900/60 shadow-[0_0_50px_-16px_rgba(0,255,179,0.35)]">
        <div className="aspect-video w-full relative">
          <iframe
            ref={iframeRef}
            src={youtubeUrl}
            title={title}
            className="w-full h-full"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />

          {/* Banner de som mutado */}
          {isMuted && (
            <div className="absolute top-0 left-0 right-0 bg-red-600 text-white text-center py-3 px-4 font-semibold text-sm md:text-base shadow-lg z-10 animate-pulse">
              🔊 ATIVE O SOM DO VÍDEO
            </div>
          )}
        </div>
      </div>

      {/* Controles customizados abaixo do vídeo */}
      <div
        className={`flex items-center justify-center gap-4 mt-4 transition-opacity duration-300 ${
          shouldShowControls ? "opacity-100" : "opacity-0"
        }`}
      >
        {/* Botão Play/Pause */}
        <button
          onClick={togglePlay}
          disabled={!playerReady}
          className="w-12 h-12 rounded-full bg-zinc-800/80 hover:bg-zinc-700 border border-emerald-400/30 flex items-center justify-center transition-all hover:border-emerald-400/60 hover:shadow-[0_0_20px_rgba(0,255,179,0.3)] disabled:opacity-50 disabled:cursor-not-allowed"
          aria-label={isPlaying ? "Pausar" : "Reproduzir"}
        >
          {isPlaying ? (
            <Pause size={20} className="text-emerald-400" strokeWidth={2} />
          ) : (
            <Play size={20} className="text-emerald-400 ml-0.5" strokeWidth={2} />
          )}
        </button>

        {/* Botão Volume */}
        <button
          onClick={toggleMute}
          disabled={!playerReady}
          className={`w-12 h-12 rounded-full flex items-center justify-center transition-all border disabled:opacity-50 disabled:cursor-not-allowed ${
            isMuted
              ? "bg-zinc-800/80 hover:bg-zinc-700 border-red-400/30 hover:border-red-400/60 hover:shadow-[0_0_20px_rgba(239,68,68,0.3)]"
              : "bg-zinc-800/80 hover:bg-zinc-700 border-emerald-400/30 hover:border-emerald-400/60 hover:shadow-[0_0_20px_rgba(0,255,179,0.3)]"
          }`}
          aria-label={isMuted ? "Ativar som" : "Desativar som"}
        >
          {isMuted ? (
            <VolumeX size={20} className="text-red-400" strokeWidth={2} />
          ) : (
            <Volume2 size={20} className="text-emerald-400" strokeWidth={2} />
          )}
        </button>
      </div>
    </div>
  )
}
