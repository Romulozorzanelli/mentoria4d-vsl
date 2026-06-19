"use client"

import { useEffect } from "react"
import { CheckCircle2, Clock, Sparkles, TrendingUp, Users } from "lucide-react"

const WHATSAPP_GROUP_URL = "https://chat.whatsapp.com/ERslDBNHJOp2p38CfegMuw"

export default function ObrigadoContent() {
  useEffect(() => {
    if (typeof window !== "undefined" && (window as any).fbq) {
      ;(window as any).fbq("track", "CompleteRegistration")
    }
  }, [])

  const handleWhatsAppClick = () => {
    if (typeof window !== "undefined" && (window as any).fbq) {
      ;(window as any).fbq("track", "Contact")
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-2xl">
        <div className="text-center mb-8 animate-in zoom-in duration-500">
          <div className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full border border-[#D4A373]/30 bg-[#D4A373]/10 shadow-[0_0_60px_-10px_rgba(212,163,115,0.45)]">
            <CheckCircle2 size={48} className="text-[#D4A373]" />
          </div>
          <h1 className="mb-4 text-4xl font-bold text-white md:text-5xl" style={{ fontFamily: "Montserrat, sans-serif" }}>
            Cadastro realizado
          </h1>
          <p className="mb-2 text-xl text-zinc-300">Você deu o primeiro passo.</p>
          <p className="text-zinc-400">Agora siga as próximas orientações da Mentoria 4D.</p>
        </div>

        <div className="mb-6 rounded-xl border border-[#D4A373]/35 bg-[#D4A373]/10 p-8 shadow-[0_0_80px_-16px_rgba(212,163,115,0.25)]">
          <div className="mb-6 text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-[#D4A373]/15 px-4 py-2">
              <Sparkles size={20} className="text-[#D4A373]" />
              <span className="font-semibold text-[#D4A373]">Próximo passo</span>
            </div>
            <h2 className="mb-3 text-2xl font-bold text-white">Entre no grupo exclusivo</h2>
            <p className="mb-6 text-zinc-300">Receba as atualizações, instruções e suporte da Mentoria 4D por lá.</p>
          </div>

          <a
            href={WHATSAPP_GROUP_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleWhatsAppClick}
            className="block w-full rounded-xl bg-[linear-gradient(135deg,#E0B17D,#D4A373)] py-5 text-center text-lg font-bold text-black shadow-[0_0_40px_-10px_rgba(212,163,115,0.55)] transition-all hover:brightness-105 active:brightness-95"
          >
            Entrar no grupo WhatsApp agora
          </a>

          <p className="mt-4 text-center text-sm text-zinc-400">Acesso imediato após entrar no grupo.</p>
        </div>

        <div className="mb-8 grid gap-4 md:grid-cols-3">
          <div className="rounded-lg border border-white/10 bg-white/5 p-4 text-center">
            <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-[#D4A373]/10">
              <Users className="text-[#D4A373]" size={24} />
            </div>
            <h3 className="mb-1 text-sm font-semibold text-white">Comunidade</h3>
            <p className="text-xs text-zinc-400">Networking com pessoas em execução.</p>
          </div>

          <div className="rounded-lg border border-white/10 bg-white/5 p-4 text-center">
            <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-[#D4A373]/10">
              <Clock className="text-[#D4A373]" size={24} />
            </div>
            <h3 className="mb-1 text-sm font-semibold text-white">Atualizações</h3>
            <p className="text-xs text-zinc-400">Conteúdo enviado com frequência.</p>
          </div>

          <div className="rounded-lg border border-white/10 bg-white/5 p-4 text-center">
            <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-[#D4A373]/10">
              <TrendingUp className="text-[#D4A373]" size={24} />
            </div>
            <h3 className="mb-1 text-sm font-semibold text-white">Suporte</h3>
            <p className="text-xs text-zinc-400">Canal direto para tirar dúvidas.</p>
          </div>
        </div>

        <p className="mt-8 text-center text-xs text-zinc-500">Seus dados estão seguros e não serão compartilhados com terceiros.</p>
      </div>
    </div>
  )
}
