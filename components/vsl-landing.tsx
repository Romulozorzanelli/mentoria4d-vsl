"use client"

import { useMemo } from "react"
import { Sparkles, Clock, Users, Star, LayoutGrid, BarChart3, X, CheckCircle, ShieldCheck } from "lucide-react"
import VideoEmbed from "./video-embed"
import Countdown from "./countdown"
import CtaButton from "./cta-button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import PixelScripts from "./pixel-scripts"
import React from "react"

// Editable constants in one place
const VSL_URL_DEFAULT = "https://www.youtube.com/embed/5xeDSVn88VE"
const CHECKOUT_URL_DEFAULT = "https://pay.kiwify.com.br/aSfTlzK"
const WHATSAPP_NUMBER_DEFAULT = "" // ex: "5511999999999" (com DDI)
const CONTENT_LOCK_SECONDS_DEFAULT = 360 // 6 minutos
const SHOW_SCARCITY_COUNTDOWN_DEFAULT = true
const SCARCITY_SECONDS_DEFAULT = 15 * 60 // 15 min

export default function VslLanding({
  vslUrl = VSL_URL_DEFAULT,
  checkoutUrl = CHECKOUT_URL_DEFAULT,
  whatsappNumber = WHATSAPP_NUMBER_DEFAULT,
  contentLockSeconds = CONTENT_LOCK_SECONDS_DEFAULT,
  showScarcityCountdown = SHOW_SCARCITY_COUNTDOWN_DEFAULT,
  scarcitySeconds = SCARCITY_SECONDS_DEFAULT,
}: {
  vslUrl?: string
  checkoutUrl?: string
  whatsappNumber?: string
  contentLockSeconds?: number
  showScarcityCountdown?: boolean
  scarcitySeconds?: number
}) {
  const [showFullContent, setShowFullContent] = React.useState(false)
  const [zoomedImage, setZoomedImage] = React.useState<string | null>(null)

  React.useEffect(() => {
    // Verificar se já foi liberado anteriormente
    const wasUnlocked = localStorage.getItem("vsl_full_content_unlocked")

    if (wasUnlocked === "true") {
      setShowFullContent(true)
      return
    }

    const timer = setTimeout(() => {
      setShowFullContent(true)
      localStorage.setItem("vsl_full_content_unlocked", "true")
    }, contentLockSeconds * 1000)

    return () => clearTimeout(timer)
  }, [contentLockSeconds])

  const whatsappLink = useMemo(() => {
    if (!whatsappNumber) return null
    return `https://wa.me/${whatsappNumber}`
  }, [whatsappNumber])

  const handleCheckoutClick = () => {
    try {
      // @ts-ignore
      window?.fbq?.("track", "InitiateCheckout")
    } catch {}
    if (whatsappLink) {
      setTimeout(() => {
        window.open(whatsappLink!, "_blank", "noopener,noreferrer")
      }, 1200)
    }
  }

  const handleImageClick = (imageSrc: string) => {
    setZoomedImage(imageSrc)
  }

  const closeZoom = () => {
    setZoomedImage(null)
  }

  return (
    <>
      <PixelScripts />

      {/* Modal de zoom da imagem */}
      {zoomedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 animate-in fade-in duration-300"
          onClick={closeZoom}
        >
          <button
            onClick={closeZoom}
            className="absolute top-4 right-4 text-white hover:text-emerald-400 transition-colors z-10"
            aria-label="Fechar"
          >
            <X size={32} />
          </button>
          <img
            src={zoomedImage || "/placeholder.svg"}
            alt="Imagem ampliada"
            className="max-w-full max-h-full object-contain rounded-lg shadow-2xl animate-in zoom-in duration-300"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

      <div className="relative">
        {/* Barra de Urgência/Escassez no Topo */}
        {showScarcityCountdown && (
          <div className="bg-gradient-to-r from-red-600 to-red-700 text-white text-center py-2 px-4 text-sm font-medium">
            <div className="flex items-center justify-center gap-2">
              <Clock size={16} />
              <span>ÚLTIMAS VAGAS: Turma fecha em </span>
              <Countdown seconds={scarcitySeconds} ariaLabel="Tempo restante para fechamento da turma" />
            </div>
          </div>
        )}

        {/* Hero Simplificado - Foco Total no Vídeo */}
        <section className="px-4 md:px-6 py-6 md:py-16 max-w-4xl mx-auto">
          <header className="text-center space-y-4 mb-6">
            <h1
              className="text-[2rem] md:text-[3.5rem] leading-tight font-bold"
              style={{ color: "#00FFB3", fontFamily: "var(--font-orbitron)" }}
            >
              {"A Profissão que a IA Não Consegue Substituir"}
            </h1>

            <p className="text-lg md:text-xl text-zinc-300 max-w-2xl mx-auto">
              {"Assista este vídeo até o final e descubra como começar na carreira mais lucrativa da década"}
            </p>
          </header>

          <div className="max-w-3xl mx-auto">
            <VideoEmbed src={vslUrl} />
          </div>

          <div className="mt-6 text-center">
            <div className="flex items-center justify-center gap-2 text-sm">
              <Sparkles size={16} className="text-[#00FFB3]" />
              <span className="text-[#B3B3B3]">
                {"Próximas informações liberam em "}
                <Countdown seconds={contentLockSeconds} ariaLabel="Tempo para mostrar conteúdo completo" />
              </span>
            </div>
          </div>
        </section>

        {showFullContent && (
          <>
            {/* Nova Seção - Quem é o Rômulo */}
            <section className="px-4 md:px-6 py-6 md:py-10 max-w-5xl mx-auto">
              <div className="bg-zinc-900/60 border border-emerald-400/30 rounded-xl p-4 md:p-6 shadow-[0_0_40px_-12px_rgba(0,255,179,0.25)]">
                <div className="flex flex-col md:flex-row items-center gap-6">
                  {/* Foto do Rômulo */}
                  <div className="flex-shrink-0">
                    <img
                      src="/images/design-mode/romulo-perfil.jpg"
                      alt="Rômulo - Especialista em IA e Automações"
                      className="w-32 h-32 md:w-40 md:h-40 rounded-full border-2 border-emerald-400/50 object-cover shadow-[0_0_30px_-10px_rgba(0,255,179,0.4)]"
                    />
                  </div>

                  {/* Informações */}
                  <div className="flex-1 text-center md:text-left">
                    <h3
                      className="text-2xl font-bold text-emerald-300 mb-2"
                      style={{ fontFamily: "var(--font-orbitron)" }}
                    >
                      Quem é o Rômulo?
                    </h3>
                    <p className="text-zinc-300 mb-4 text-sm md:text-base">
                      Especialista em Inteligência Artificial, Automações e Análise de Dados com mais de 7 anos de
                      experiência no mercado.
                    </p>

                    {/* Grid de conquistas */}
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3 text-sm">
                      <div className="bg-zinc-800/50 rounded-lg p-3 border border-emerald-400/20">
                        <div className="text-emerald-400 font-bold text-lg">+40</div>
                        <div className="text-zinc-400 text-xs">Mentorados formados</div>
                      </div>
                      <div className="bg-zinc-800/50 rounded-lg p-3 border border-emerald-400/20">
                        <div className="text-emerald-400 font-bold text-lg">7+ anos</div>
                        <div className="text-zinc-400 text-xs">Em IA, automações e dados</div>
                      </div>
                      <div className="bg-zinc-800/50 rounded-lg p-3 border border-emerald-400/20 col-span-2 md:col-span-1">
                        <div className="text-emerald-400 font-bold text-base">Startups & Agências</div>
                        <div className="text-zinc-400 text-xs">Experiência em operações reais</div>
                      </div>
                    </div>

                    <div className="mt-3 bg-gradient-to-r from-emerald-900/30 to-cyan-900/30 rounded-lg p-3 border border-emerald-400/30">
                      <div className="flex items-center justify-center md:justify-start gap-2">
                        <Sparkles size={16} className="text-emerald-400" />
                        <span className="text-emerald-300 font-semibold text-sm">Criador do ZD Agent</span>
                      </div>
                      <p className="text-zinc-400 text-xs mt-1.5">SaaS próprio em IA</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Dobra 2 – CTA Direto com Urgência */}
            <section className="px-4 md:px-6 max-w-3xl mx-auto py-6 md:py-0">
              <div className="text-center mb-4">
                <p className="text-emerald-400 text-sm font-medium">{"🎯 ATENÇÃO: Vagas limitadas para esta turma"}</p>
              </div>
              <CtaButton
                href="#oferta"
                label="🚀 QUERO FAZER PARTE DO ECOSSISTEMA"
                onClick={handleCheckoutClick}
                className="w-full md:w-[80%] mx-auto text-lg py-5"
              />
              <p className="text-center text-zinc-500 text-xs mt-2">
                {"✅ Acesso imediato • ✅ Garantia de 7 dias • ✅ Suporte incluso"}
              </p>
            </section>

            {/* NOVA SEÇÃO - O que é o Ecossistema */}
            <section className="px-4 md:px-6 py-6 md:py-12 max-w-5xl mx-auto">
              <header className="text-center mb-4">
                <h2
                  className="text-2xl md:text-3xl font-semibold mb-4"
                  style={{ color: "#00FFB3", fontFamily: "var(--font-orbitron)" }}
                >
                  {"O que é o Ecossistema Profissão do Futuro?"}
                </h2>
                <p className="text-zinc-300 max-w-2xl mx-auto">
                  {
                    "Um ambiente completo de formação e suporte para quem quer construir uma carreira lucrativa com Inteligência Artificial, sem precisar de conhecimento técnico prévio."
                  }
                </p>
              </header>

              <div className="grid md:grid-cols-3 gap-3">
                <div className="bg-zinc-900/60 border border-emerald-400/30 shadow-[0_0_40px_-12px_rgba(0,255,179,0.25)] text-center p-3 rounded-lg">
                  <div className="w-10 h-10 bg-emerald-400/20 rounded-full flex items-center justify-center mx-auto mb-2">
                    <LayoutGrid className="text-emerald-400" size={18} />
                  </div>
                  <h3 className="text-emerald-300 font-semibold text-sm mb-1.5">Múltiplas Formações</h3>
                  <p className="text-zinc-300 text-xs leading-tight">
                    Acesso a cursos de Gestor de Agentes, Gestor de Aplicativos e Gestor de Ecossistemas de IA
                  </p>
                </div>

                <div className="bg-zinc-900/60 border border-emerald-400/30 shadow-[0_0_40px_-12px_rgba(0,255,179,0.25)] text-center p-3 rounded-lg">
                  <div className="w-10 h-10 bg-emerald-400/20 rounded-full flex items-center justify-center mx-auto mb-2">
                    <Users className="text-emerald-400" size={18} />
                  </div>
                  <h3 className="text-emerald-300 font-semibold text-sm mb-1.5">Comunidade Ativa</h3>
                  <p className="text-zinc-300 text-xs leading-tight">
                    Grupo exclusivo para networking, compartilhamento de casos e suporte entre membros
                  </p>
                </div>

                <div className="bg-zinc-900/60 border border-emerald-400/30 shadow-[0_0_40px_-12px_rgba(0,255,179,0.25)] text-center p-3 rounded-lg">
                  <div className="w-10 h-10 bg-emerald-400/20 rounded-full flex items-center justify-center mx-auto mb-2">
                    <BarChart3 className="text-emerald-400" size={18} />
                  </div>
                  <h3 className="text-emerald-300 font-semibold text-sm mb-1.5">Imersões e Atualizações</h3>
                  <p className="text-zinc-300 text-xs leading-tight">
                    Eventos ao vivo, workshops práticos e atualizações constantes sobre o mercado de IA
                  </p>
                </div>
              </div>

              <div className="mt-6 text-center">
                <h3 className="text-xl font-semibold text-emerald-300 mb-4">
                  Sua porta de entrada para o Ecossistema:
                </h3>
                <div className="inline-flex items-center gap-1.5 bg-gradient-to-r from-emerald-800/50 to-emerald-900/50 border border-emerald-400/30 rounded-full px-6 py-3">
                  <span className="text-emerald-300 font-semibold">Gestor de Agentes de IA</span>
                  <Badge className="bg-emerald-400 text-black ml-2">Passo 1</Badge>
                </div>
                <p className="text-zinc-400 max-w-lg mx-auto mt-4">
                  {
                    "A formação inicial perfeita para começar a trabalhar com IA aplicada e obter seus primeiros resultados."
                  }
                </p>
              </div>

              <div className="mt-5 text-center">
                <CtaButton
                  href="#oferta"
                  label="QUERO COMEÇAR PELO GESTOR DE AGENTES DE IA"
                  onClick={handleCheckoutClick}
                  className="w-full md:w-auto mx-auto"
                />
              </div>
            </section>

            {/* Dobra 3 – O que você vai aprender - MÓDULOS REAIS */}
            <section className="px-4 md:px-6 py-6 md:py-12 max-w-5xl mx-auto">
              <header className="text-center mb-4">
                <h2
                  className="text-2xl md:text-3xl font-semibold mb-4"
                  style={{ color: "#00FFB3", fontFamily: "var(--font-orbitron)" }}
                >
                  {"🧠 Conteúdo Completo do Gestor de Agentes de IA"}
                </h2>
                <p className="text-zinc-400 max-w-2xl mx-auto">
                  {"27 aulas práticas divididas em 9 módulos para você dominar a profissão do futuro"}
                </p>
              </header>

              <div className="max-w-3xl mx-auto">
                <div className="bg-zinc-900/60 border border-emerald-400/30 rounded-xl p-4 md:p-6">
                  <div className="space-y-3">
                    {[
                      {
                        title: "Boas-vindas e Primeiros Passos",
                        lessons: "2 aulas",
                        desc: "Comece sua jornada entendendo o ecossistema e os primeiros passos",
                      },
                      {
                        title: "A Nova Economia da Inteligência Artificial",
                        lessons: "3 aulas",
                        desc: "Entenda como a IA está transformando o mercado e criando oportunidades",
                      },
                      {
                        title: "A Mentalidade do Profissional do Futuro",
                        lessons: "3 aulas",
                        desc: "Desenvolva o mindset necessário para ter sucesso com IA",
                      },
                      {
                        title: "O Poder das Aplicações de IA",
                        lessons: "3 aulas",
                        desc: "Descubra as principais aplicações práticas da inteligência artificial",
                      },
                      {
                        title: "Ferramentas que Estão Mudando o Jogo",
                        lessons: "4 aulas",
                        desc: "Conheça as ferramentas essenciais para trabalhar com IA",
                      },
                      {
                        title: "Automatizando Processos com IA",
                        lessons: "3 aulas",
                        desc: "Aprenda a automatizar tarefas e processos usando inteligência artificial",
                      },
                      {
                        title: "Mão na Massa: Criando Seu Primeiro Agente de IA",
                        lessons: "3 aulas",
                        desc: "Construa seu primeiro agente inteligente do zero",
                      },
                      {
                        title: "Como Monetizar sua Habilidade com IA",
                        lessons: "3 aulas",
                        desc: "Estratégias práticas para começar a ganhar dinheiro com IA",
                      },
                      {
                        title: "Conclusão e Próximos Passos",
                        lessons: "3 aulas",
                        desc: "Finalize sua formação e saiba como continuar evoluindo",
                      },
                    ].map((module, index) => (
                      <div key={index} className="flex gap-3 py-2 border-b border-zinc-800/50 last:border-0">
                        <div className="flex-shrink-0">
                          <div className="w-8 h-8 bg-emerald-400/20 rounded-full flex items-center justify-center">
                            <span className="text-emerald-400 text-sm font-bold">{index + 1}</span>
                          </div>
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-start justify-between gap-2 mb-1">
                            <h4 className="text-emerald-300 font-semibold text-sm leading-tight">{module.title}</h4>
                            <Badge
                              variant="outline"
                              className="text-xs text-emerald-400 border-emerald-400/50 flex-shrink-0"
                            >
                              {module.lessons}
                            </Badge>
                          </div>
                          <p className="text-zinc-400 text-xs leading-tight">{module.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-6 text-center">
                <p className="text-zinc-300 max-w-xl mx-auto mb-6">
                  {"Este é o primeiro passo perfeito para iniciar sua jornada no ecossistema Profissão do Futuro"}
                </p>
                <CtaButton
                  href="#oferta"
                  label="QUERO COMEÇAR MINHA JORNADA AGORA"
                  onClick={handleCheckoutClick}
                  className="w-full md:w-auto mx-auto text-lg py-5 px-10"
                />
              </div>
            </section>

            {/* Dobra 4 – Depoimentos + Resultados */}
            <section className="px-4 md:px-6 py-6 md:py-12 max-w-6xl mx-auto">
              <h2
                className="text-center text-2xl md:text-3xl font-semibold mb-4"
                style={{ color: "#00FFB3", fontFamily: "var(--font-orbitron)" }}
              >
                {"🏆 Resultados Reais de Quem Aplicou"}
              </h2>
              <p className="text-center text-zinc-400 mb-4 max-w-2xl mx-auto">
                {"Veja alguns resultados de alunos que aplicaram o método (clique para ampliar):"}
              </p>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                {/* Depoimento Vitor */}
                <Card className="bg-zinc-900/60 border border-emerald-400/30 shadow-[0_0_40px_-12px_rgba(0,255,179,0.25)]">
                  <CardHeader className="p-4">
                    <div className="flex items-center gap-2">
                      <div className="flex text-yellow-400">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} size={14} fill="currentColor" />
                        ))}
                      </div>
                    </div>
                    <CardTitle className="text-zinc-100 text-lg">{"Vitor - 5 clientes grandes"}</CardTitle>
                  </CardHeader>
                  <CardContent className="p-4">
                    <img
                      src="/images/design-mode/depoimento_vitor.jpg"
                      alt="Depoimento do Vitor sobre conseguir 5 clientes grandes após a mentoria"
                      className="w-full rounded-md border border-emerald-400/20 max-h-48 object-cover cursor-pointer hover:border-emerald-400 transition-colors"
                      onClick={() =>
                        handleImageClick(
                          "https://lzairoviveybhcahkizs.supabase.co/storage/v1/object/public/imagens//depoimento_vitor.jpg",
                        )
                      }
                    />
                    <blockquote className="text-sm text-zinc-300 italic mt-1.5">
                      {
                        '"Consegui avançar demais! Hoje atendo 5 clientes grandes, tenho equipe construída e é só o começo!"'
                      }
                    </blockquote>
                    <div className="mt-1.5 text-xs text-emerald-400 font-medium">
                      {"✅ Montou equipe e conquistou clientes corporativos"}
                    </div>
                  </CardContent>
                </Card>

                {/* Depoimento Luan */}
                <Card className="bg-zinc-900/60 border border-emerald-400/30 shadow-[0_0_40px_-12px_rgba(0,255,179,0.25)]">
                  <CardHeader className="p-4">
                    <div className="flex items-center gap-2">
                      <div className="flex text-yellow-400">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} size={14} fill="currentColor" />
                        ))}
                      </div>
                    </div>
                    <CardTitle className="text-zinc-100 text-lg">{"Luan - Agência de IA"}</CardTitle>
                  </CardHeader>
                  <CardContent className="p-4">
                    <img
                      src="/images/design-mode/depoimento_luan.png"
                      alt="Depoimento do Luan sobre criar agência de IA com recorrência"
                      className="w-full rounded-md border border-emerald-400/20 max-h-48 object-cover cursor-pointer hover:border-emerald-400 transition-colors"
                      onClick={() =>
                        handleImageClick(
                          "https://lzairoviveybhcahkizs.supabase.co/storage/v1/object/public/imagens//depoimento_luan.png",
                        )
                      }
                    />
                    <blockquote className="text-sm text-zinc-300 italic mt-1.5">
                      {'"Hoje posso viver de automação, tenho minha agência de IA e clientes pagando recorrência!"'}
                    </blockquote>
                    <div className="mt-1.5 text-xs text-emerald-400 font-medium">
                      {"✅ Criou modelo de negócio com renda recorrente mensal"}
                    </div>
                  </CardContent>
                </Card>

                {/* Depoimento Sergio */}
                <Card className="bg-zinc-900/60 border border-emerald-400/30 shadow-[0_0_40px_-12px_rgba(0,255,179,0.25)]">
                  <CardHeader className="p-4">
                    <div className="flex items-center gap-2">
                      <div className="flex text-yellow-400">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} size={14} fill="currentColor" />
                        ))}
                      </div>
                    </div>
                    <CardTitle className="text-zinc-100 text-lg">{"Sergio - R$3.254,00"}</CardTitle>
                  </CardHeader>
                  <CardContent className="p-4">
                    <img
                      src="/images/design-mode/DEPOIMENTO%20SERGIO_3254.png"
                      alt="Comprovante de recebimento do Sergio no valor de R$3.254,70"
                      className="w-full rounded-md border border-emerald-400/20 max-h-48 object-cover cursor-pointer hover:border-emerald-400 transition-colors"
                      onClick={() =>
                        handleImageClick(
                          "https://lzairoviveybhcahkizs.supabase.co/storage/v1/object/public/imagens//DEPOIMENTO%20SERGIO_3254.png",
                        )
                      }
                    />
                    <blockquote className="text-sm text-zinc-300 italic mt-1.5">{'"Abrimos fevereiro 🚀"'}</blockquote>
                    <div className="mt-1.5 text-xs text-emerald-400 font-medium">
                      {"✅ Faturou R$ 3.254,00 em um mês aplicando o método"}
                    </div>
                  </CardContent>
                </Card>

                {/* Depoimento Marcelo */}
                <Card className="bg-zinc-900/60 border border-emerald-400/30 shadow-[0_0_40px_-12px_rgba(0,255,179,0.25)]">
                  <CardHeader className="p-4">
                    <div className="flex items-center gap-2">
                      <div className="flex text-yellow-400">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} size={14} fill="currentColor" />
                        ))}
                      </div>
                    </div>
                    <CardTitle className="text-zinc-100 text-lg">{"Marcelo - R$2.391,00"}</CardTitle>
                  </CardHeader>
                  <CardContent className="p-4">
                    <img
                      src="/images/design-mode/DEPOIMENTO_MARCELO_2391.png"
                      alt="Tela da plataforma mostrando saldo de R$2.391,09 do Marcelo"
                      className="w-full rounded-md border border-emerald-400/20 max-h-48 object-cover cursor-pointer hover:border-emerald-400 transition-colors"
                      onClick={() =>
                        handleImageClick(
                          "https://lzairoviveybhcahkizs.supabase.co/storage/v1/object/public/imagens//DEPOIMENTO_MARCELO_2391.png",
                        )
                      }
                    />
                    <blockquote className="text-sm text-zinc-300 italic mt-1.5">
                      {'"Quando a gente corre com quem sabe correr… Os resultados vêm 🚀"'}
                    </blockquote>
                    <div className="mt-1.5 text-xs text-emerald-400 font-medium">
                      {"✅ Conquistou crescimento consistente"}
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Estatísticas de Prova Social */}
              <div className="mt-8 grid md:grid-cols-2 gap-4 text-center max-w-2xl mx-auto">
                <div className="bg-zinc-900/40 rounded-lg p-4 border border-emerald-400/20">
                  <div className="text-2xl font-bold text-emerald-400">4.9/5</div>
                  <div className="text-zinc-400 text-sm">Avaliação Média</div>
                </div>
                <div className="bg-zinc-900/40 rounded-lg p-4 border border-emerald-400/20">
                  <div className="text-2xl font-bold text-emerald-400">27 aulas</div>
                  <div className="text-zinc-400 text-sm">Conteúdo Prático</div>
                </div>
              </div>
            </section>

            {/* Dobra 5 – Investimento */}
            <section id="oferta" className="px-4 md:px-6 py-6 md:py-12 max-w-4xl mx-auto scroll-mt-20">
              <div className="text-center mb-4">
                <h2
                  className="text-2xl md:text-3xl font-semibold mb-3"
                  style={{ color: "#00FFB3", fontFamily: "var(--font-orbitron)" }}
                >
                  {"💎 Investimento Promocional"}
                </h2>
              </div>

              <div className="max-w-3xl mx-auto">
                <div className="bg-gradient-to-br from-emerald-400/20 to-cyan-400/20 rounded-xl p-4 border border-emerald-400/40">
                  <div className="grid md:grid-cols-2 gap-4">
                    {/* Lado Esquerdo - O que NÃO está incluído */}
                    <div className="space-y-2 text-sm">
                      <h3 className="text-lg font-semibold text-red-400 mb-2">{"Nesta oferta você NÃO paga por:"}</h3>
                      <div className="space-y-2 text-sm">
                        <div className="flex items-start gap-2 text-zinc-400">
                          <span className="text-red-400 flex-shrink-0">✗</span>
                          <div>
                            <div className="font-medium text-zinc-300">Valor Integral do Curso</div>
                            <div className="text-red-400 line-through">R$ 997,00</div>
                          </div>
                        </div>
                        <div className="flex items-start gap-2 text-zinc-400">
                          <span className="text-red-400 flex-shrink-0">✗</span>
                          <div>
                            <div className="font-medium text-zinc-300">Acesso Direto ao Rômulo</div>
                            <div className="text-xs">(Suporte WhatsApp individual)</div>
                            <div className="text-red-400 line-through">R$ 5.000,00</div>
                          </div>
                        </div>
                        <div className="flex items-start gap-2 text-zinc-400">
                          <span className="text-red-400 flex-shrink-0">✗</span>
                          <div>
                            <div className="font-medium text-zinc-300">Bônus do Ecossistema</div>
                            <div className="text-xs">(Ferramentas e recursos extras)</div>
                            <div className="text-red-400 line-through">Mais de R$ 2.000,00/ano</div>
                          </div>
                        </div>
                        <div className="pt-2 border-t border-zinc-700">
                          <div className="text-zinc-400 text-xs">Total economizado:</div>
                          <div className="text-red-400 line-through font-bold">Mais de R$ 7.997,00</div>
                        </div>
                      </div>
                    </div>

                    {/* Lado Direito - O que está incluído */}
                    <div>
                      <h3 className="text-emerald-300 text-lg font-semibold mb-3">{"Você paga APENAS:"}</h3>
                      <div className="text-5xl font-bold text-white mb-2">R$ 297,00</div>
                      <div className="text-emerald-400 mb-3">ou 12x de R$ 29,70</div>

                      <div className="space-y-2 text-left text-sm mb-4">
                        <div className="flex items-center gap-2 text-zinc-300">
                          <CheckCircle size={14} className="text-emerald-400 flex-shrink-0" />
                          <span>27 aulas práticas</span>
                        </div>
                        <div className="flex items-center gap-2 text-zinc-300">
                          <CheckCircle size={14} className="text-emerald-400 flex-shrink-0" />
                          <span>Acesso por 1 ano</span>
                        </div>
                        <div className="flex items-center gap-2 text-zinc-300">
                          <CheckCircle size={14} className="text-emerald-400 flex-shrink-0" />
                          <span>Comunidade exclusiva</span>
                        </div>
                        <div className="flex items-center gap-2 text-zinc-300">
                          <CheckCircle size={14} className="text-emerald-400 flex-shrink-0" />
                          <span>Atualizações constantes</span>
                        </div>
                        <div className="flex items-center gap-2 text-zinc-300">
                          <CheckCircle size={14} className="text-emerald-400 flex-shrink-0" />
                          <span>Certificado de conclusão</span>
                        </div>
                      </div>

                      <div className="text-xs text-zinc-400 border-t border-emerald-400/20 pt-3">
                        {"💳 Parcelamento em até 12x"}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-4 text-center">
                <CtaButton
                  href={checkoutUrl}
                  label="🔥 GARANTIR ACESSO POR R$ 297,00"
                  onClick={handleCheckoutClick}
                  external
                  className="w-full md:w-auto mx-auto text-lg py-5 px-10"
                />
                <p className="text-xs text-zinc-500 mt-2">{"Oferta promocional por tempo limitado"}</p>
              </div>
            </section>

            {/* Dobra 6 – Garantia + Segurança */}
            <section className="px-4 md:px-6 py-6 md:py-12 max-w-4xl mx-auto">
              <div className="text-center space-y-3">
                <h3
                  className="text-xl md:text-2xl font-semibold"
                  style={{ color: "#00FFB3", fontFamily: "var(--font-orbitron)" }}
                >
                  {"🛡️ Garantia de 7 Dias"}
                </h3>

                <div className="bg-zinc-900/60 rounded-xl border border-emerald-400/30 p-4 max-w-2xl mx-auto">
                  <div className="flex items-center justify-center mb-2">
                    <div className="w-16 h-16 bg-emerald-400/20 rounded-full flex items-center justify-center">
                      <ShieldCheck size={32} className="text-emerald-400" />
                    </div>
                  </div>

                  <p className="text-[#B3B3B3] text-sm mb-3">
                    {
                      "Experimente o curso por 7 dias. Se não ficar satisfeito com o conteúdo, devolvemos 100% do seu investimento conforme as políticas da plataforma."
                    }
                  </p>

                  <div className="space-y-2 text-sm text-zinc-300">
                    <div className="flex items-center gap-2 justify-center">
                      <CheckCircle size={14} className="text-emerald-400" />
                      <span>7 dias de garantia</span>
                    </div>
                  </div>
                </div>

                <p className="text-emerald-400 text-sm font-medium">{"Política padrão do mercado digital"}</p>
              </div>
            </section>

            {/* Seção de Disclaimer */}
            <section className="px-4 md:px-6 py-6 md:py-8 max-w-4xl mx-auto">
              <div className="bg-zinc-900/40 border border-zinc-700/50 rounded-lg p-4 text-center">
                <p className="text-zinc-500 text-xs leading-relaxed">
                  <strong className="text-zinc-400">Aviso Legal:</strong> Os resultados apresentados são reais mas não
                  representam uma garantia de resultados. O sucesso depende de diversos fatores incluindo dedicação,
                  aplicação dos conhecimentos e contexto individual de cada aluno. Este produto não garante a obtenção
                  de resultados e não substitui o trabalho, dedicação e empenho pessoal.
                </p>
              </div>
            </section>
          </>
        )}
      </div>
    </>
  )
}
