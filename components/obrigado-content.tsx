"use client"

import { useEffect } from "react"
import { CheckCircle2, Sparkles, Users, Clock, TrendingUp } from "lucide-react"

const WHATSAPP_GROUP_URL = "https://chat.whatsapp.com/ERslDBNHJOp2p38CfegMuw"

export default function ObrigadoContent() {
  useEffect(() => {
    // Disparar evento de conversão CompleteRegistration quando a página carregar
    if (typeof window !== "undefined" && (window as any).fbq) {
      ;(window as any).fbq("track", "CompleteRegistration")
    }
  }, [])

  const handleWhatsAppClick = () => {
    // Disparar evento adicional ao clicar no botão
    if (typeof window !== "undefined" && (window as any).fbq) {
      ;(window as any).fbq("track", "Contact")
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-2xl">
        {/* Sucesso Principal */}
        <div className="text-center mb-8 animate-in zoom-in duration-500">
          <div className="w-24 h-24 bg-emerald-400/20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-[0_0_60px_-10px_rgba(0,255,179,0.6)]">
            <CheckCircle2 size={48} className="text-emerald-400" />
          </div>
          <h1
            className="text-4xl md:text-5xl font-bold text-emerald-400 mb-4"
            style={{ fontFamily: "var(--font-orbitron)" }}
          >
            Cadastro Realizado!
          </h1>
          <p className="text-xl text-zinc-300 mb-2">🎉 Parabéns por dar o primeiro passo!</p>
          <p className="text-zinc-400">Você está prestes a descobrir a profissão do futuro</p>
        </div>

        {/* Card Principal com CTA */}
        <div className="bg-gradient-to-br from-emerald-400/20 to-cyan-400/20 rounded-xl p-8 border-2 border-emerald-400/50 shadow-[0_0_80px_-16px_rgba(0,255,179,0.4)] mb-6">
          <div className="text-center mb-6">
            <div className="inline-flex items-center gap-2 bg-emerald-400/20 px-4 py-2 rounded-full mb-4">
              <Sparkles size={20} className="text-emerald-400" />
              <span className="text-emerald-300 font-semibold">Próximo Passo</span>
            </div>
            <h2 className="text-2xl font-bold text-white mb-3">Entre no Grupo Exclusivo do WhatsApp</h2>
            <p className="text-zinc-300 mb-6">
              Acesse agora a comunidade com conteúdos exclusivos, aulas ao vivo e suporte direto
            </p>
          </div>

          {/* Botão CTA Principal */}
          <a
            href={WHATSAPP_GROUP_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleWhatsAppClick}
            className="block w-full bg-gradient-to-r from-emerald-500 to-cyan-500 text-black font-bold text-lg py-5 rounded-xl hover:brightness-110 active:brightness-95 transition-all text-center shadow-[0_0_40px_-10px_rgba(0,255,179,0.6)]"
          >
            <div className="flex items-center justify-center gap-3">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              <span>Entrar no Grupo WhatsApp Agora</span>
            </div>
          </a>

          <p className="text-center text-zinc-400 text-sm mt-4">⚡ Vagas limitadas • Acesso imediato após entrar</p>
        </div>

        {/* Benefícios do Grupo */}
        <div className="grid md:grid-cols-3 gap-4 mb-8">
          <div className="bg-zinc-900/60 border border-emerald-400/30 rounded-lg p-4 text-center">
            <div className="w-12 h-12 bg-emerald-400/20 rounded-full flex items-center justify-center mx-auto mb-3">
              <Users className="text-emerald-400" size={24} />
            </div>
            <h3 className="text-emerald-300 font-semibold text-sm mb-1">Comunidade Exclusiva</h3>
            <p className="text-zinc-400 text-xs">Networking com profissionais da área</p>
          </div>

          <div className="bg-zinc-900/60 border border-emerald-400/30 rounded-lg p-4 text-center">
            <div className="w-12 h-12 bg-emerald-400/20 rounded-full flex items-center justify-center mx-auto mb-3">
              <Clock className="text-emerald-400" size={24} />
            </div>
            <h3 className="text-emerald-300 font-semibold text-sm mb-1">Aulas ao Vivo</h3>
            <p className="text-zinc-400 text-xs">Conteúdos práticos e atualizados</p>
          </div>

          <div className="bg-zinc-900/60 border border-emerald-400/30 rounded-lg p-4 text-center">
            <div className="w-12 h-12 bg-emerald-400/20 rounded-full flex items-center justify-center mx-auto mb-3">
              <TrendingUp className="text-emerald-400" size={24} />
            </div>
            <h3 className="text-emerald-300 font-semibold text-sm mb-1">Suporte Direto</h3>
            <p className="text-zinc-400 text-xs">Tire suas dúvidas em tempo real</p>
          </div>
        </div>

        {/* Promessa Reforçada */}
        <div className="bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 border-2 border-emerald-400/50 rounded-xl p-6 text-center">
          <h3
            className="text-2xl md:text-3xl font-bold text-white mb-2 leading-tight"
            style={{ fontFamily: "var(--font-orbitron)" }}
          >
            Fature de{" "}
            <span className="text-emerald-400 bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              R$ 5 mil a R$ 30 mil
            </span>
          </h3>
          <p className="text-zinc-300 text-lg">
            com a profissão que está <strong className="text-emerald-300">fora do radar</strong>
          </p>
        </div>

        {/* Footer de Privacidade */}
        <p className="text-center text-zinc-500 text-xs mt-8">
          🔒 Seus dados estão seguros e não serão compartilhados com terceiros
        </p>
      </div>
    </div>
  )
}
