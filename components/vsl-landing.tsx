"use client"

import React, { useMemo } from "react"
import { BarChart3, CheckCircle, Clock, LayoutGrid, ShieldCheck, Sparkles, Star, Users, X } from "lucide-react"
import Countdown from "./countdown"
import CtaButton from "./cta-button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import PixelScripts from "./pixel-scripts"

const CHECKOUT_URL_DEFAULT =
  "https://pay.hotmart.com/P96358842U?off=3r6e5ncq&bid=1781791188421&offDiscount=197OFF"
const WHATSAPP_NUMBER_DEFAULT = ""
const CONTENT_LOCK_SECONDS_DEFAULT = 360
const SHOW_SCARCITY_COUNTDOWN_DEFAULT = true
const SCARCITY_SECONDS_DEFAULT = 15 * 60

const MODULES = [
  {
    title: "Módulo 1 — Introdução e Conexões Iniciais",
    badge: "Essencial",
    desc: "Aviso importante, a aula mais importante da Mentoria 4D, introdução ao mundo das automações, criação de conta no ChatbotSystem, conexão com GPT, ElevenLabs, Instagram e WhatsApp (QR Code e Oficial), criação do primeiro bot.",
  },
  {
    title: "Módulo 2 — Criando seu Primeiro Chatbot",
    badge: "Fluxos",
    desc: "Estrutura ROMEU SDR, criação de variáveis e assistentes para Instagram, fluxo de conversa, looping lógico, follow-up automático, Reply Agent e fluxo de agendamento.",
  },
  {
    title: "Módulo 3 — Funções Avançadas",
    badge: "Avançado",
    desc: "Integrações avançadas, incluindo Kiwify e outras plataformas.",
  },
  {
    title: "Bônus — Lives Gravadas (+20 lives)",
    badge: "+20 lives",
    desc: "Acesso a mais de 20 lives gravadas sobre CRM com IA para WhatsApp e Instagram, chatbot completo com IA, geração de imagens com IA durante conversa, agendamento, posicionamento digital, prospecção com o ROMEU, tira-dúvidas e muito mais. Conteúdo atualizado regularmente.",
  },
  {
    title: "Bônus — Recursos Adicionais",
    badge: "Recursos",
    desc: "Integração com API de CEP, notificações de ações de usuário, informar data atual para o agente de IA, implementação completa do ROMEU com aluno, fluxo degustação e suporte ao vivo.",
  },
]

const TESTIMONIALS = [
  {
    title: "Vitor — 5 clientes grandes após a mentoria",
    img: "https://romulozorzanelli.vercel.app/images/depoimento_vitor.jpg",
    alt: "Depoimento do Vitor sobre 5 clientes grandes após a mentoria",
    quote:
      "Cara, quero agradecer pela didática e conhecimento compartilhado! Com sua ajuda nas aulas consegui avançar demais comparado a outros cursos. Hoje atendo 5 clientes grandes, tenho equipe construída pra prestar suporte e desenvolvimento, e é só o começo!",
    note: "5 clientes grandes, equipe construída e suporte em operação",
  },
  {
    title: "Luan — Agência de IA e recorrência em pouco tempo",
    img: "https://romulozorzanelli.vercel.app/images/depoimento_luan.png",
    alt: "Depoimento do Luan sobre agência de IA e recorrência",
    quote:
      "Muito obrigado pela mentoria, Rômulo. Em pouco tempo já pude aplicar e conseguir meu primeiro cliente! Hoje posso viver de automação, tenho minha agência de IA e clientes pagando recorrência de assinatura!",
    note: "Primeiro cliente e recorrência em pouco tempo",
  },
  {
    title: "Sergio — R$ 3.254 faturados em fevereiro",
    img: "https://romulozorzanelli.vercel.app/images/depoimento_sergio_3254.png",
    alt: "Comprovante de faturamento do Sergio no valor de R$ 3.254",
    quote: "Abrimos fevereiro 🚀",
    note: "R$ 3.254 faturados em fevereiro",
  },
  {
    title: "Marcelo — R$ 2.391 em pagamentos a receber",
    img: "https://romulozorzanelli.vercel.app/images/depoimento_marcelo_2391.png",
    alt: "Comprovante do Marcelo com R$ 2.391 em pagamentos a receber",
    quote: "Quando a gente corre com quem sabe correr… Os resultados vêm.",
    note: "R$ 2.391 em pagamentos a receber",
  },
]

export default function VslLanding({
  checkoutUrl = CHECKOUT_URL_DEFAULT,
  whatsappNumber = WHATSAPP_NUMBER_DEFAULT,
  contentLockSeconds = CONTENT_LOCK_SECONDS_DEFAULT,
  showScarcityCountdown = SHOW_SCARCITY_COUNTDOWN_DEFAULT,
  scarcitySeconds = SCARCITY_SECONDS_DEFAULT,
}: {
  checkoutUrl?: string
  whatsappNumber?: string
  contentLockSeconds?: number
  showScarcityCountdown?: boolean
  scarcitySeconds?: number
}) {
  const [showFullContent, setShowFullContent] = React.useState(false)
  const [zoomedImage, setZoomedImage] = React.useState<string | null>(null)

  React.useEffect(() => {
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

      {zoomedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 animate-in fade-in duration-300"
          onClick={closeZoom}
        >
          <button
            onClick={closeZoom}
            className="absolute right-4 top-4 z-10 text-white transition-colors hover:text-[#D4A373]"
            aria-label="Fechar"
          >
            <X size={32} />
          </button>
          <img
            src={zoomedImage || "/placeholder.svg"}
            alt="Imagem ampliada"
            className="max-h-full max-w-full rounded-lg object-contain shadow-2xl animate-in zoom-in duration-300"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

      <div className="relative">
        {showScarcityCountdown && (
          <div className="bg-gradient-to-r from-[#A56D42] to-[#D4A373] px-4 py-2 text-center text-sm font-medium text-black">
            <div className="flex items-center justify-center gap-2">
              <Clock size={16} />
              <span>ÚLTIMAS VAGAS: Turma fecha em </span>
              <Countdown seconds={scarcitySeconds} ariaLabel="Tempo restante para fechamento da turma" />
            </div>
          </div>
        )}

        <section className="mx-auto max-w-4xl px-4 py-6 md:px-6 md:py-16">
          <header className="mb-6 space-y-4 text-center">
            <h1
              className="text-[2rem] font-extrabold leading-tight text-white md:text-[3.5rem]"
              style={{ color: "#D4A373", fontFamily: "Montserrat, sans-serif" }}
            >
              Mentoria 4D
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-zinc-300 md:text-xl">
              Essa semana a Mentoria 4D está com 85% de desconto. De R$ 1.200,00 por R$ 197,00 — acesso de 1 ano,
              comunidade ativa e suporte direto.
            </p>
          </header>

          <div className="mx-auto max-w-3xl">
            <div className="rounded-xl border border-[#D4A373]/30 bg-zinc-900/60 p-6 shadow-[0_0_50px_-16px_rgba(212,163,115,0.18)] md:p-8">
              <h2
                className="text-center text-[1.7rem] font-extrabold leading-tight text-white md:text-4xl"
                style={{ color: "#D4A373", fontFamily: "Montserrat, sans-serif" }}
              >
                A Metodologia que Transforma IA em Vendas Automáticas
              </h2>
            </div>
          </div>

          <div className="mt-6 text-center">
            <div className="flex items-center justify-center gap-2 text-sm">
              <Sparkles size={16} className="text-[#D4A373]" />
              <span className="text-[#B3B3B3]">
                Próximas informações liberam em{" "}
                <Countdown seconds={contentLockSeconds} ariaLabel="Tempo para mostrar conteúdo completo" />
              </span>
            </div>
          </div>
        </section>

        {showFullContent && (
          <>
            <section className="mx-auto max-w-5xl px-4 py-6 md:px-6 md:py-10">
              <div className="rounded-xl border border-[#D4A373]/30 bg-zinc-900/60 p-4 shadow-[0_0_40px_-12px_rgba(212,163,115,0.18)] md:p-6">
                <div className="flex flex-col items-center gap-6 md:flex-row">
                  <div className="flex-shrink-0">
                    <img
                      src="https://romulozorzanelli.vercel.app/images/romulo-portrait.jpg"
                      alt="Rômulo Zorzanelli"
                      className="h-32 w-32 rounded-full border-2 border-[#D4A373]/50 object-cover shadow-[0_0_30px_-10px_rgba(212,163,115,0.35)] md:h-40 md:w-40"
                    />
                  </div>

                  <div className="flex-1 text-center md:text-left">
                    <h3 className="mb-2 text-2xl font-bold text-[#D4A373]" style={{ fontFamily: "Montserrat, sans-serif" }}>
                      Sobre o Mentor
                    </h3>
                    <p className="mb-4 text-sm text-zinc-300 md:text-base">
                      Fundador da Zone Digital e criador do ZD Agent. Especialista em automações com IA e processos
                      inteligentes, com mais de 7 anos de experiência prática. Já criou SaaS, formou mais de 40 alunos
                      e ajudou empresas a escalar com tecnologia acessível. Habilidades: GPT, Make, n8n, Manychat,
                      APIs, CRMs, Supabase e Power BI.
                    </p>

                    <div className="grid grid-cols-2 gap-3 text-sm md:grid-cols-3">
                      <div className="rounded-lg border border-[#D4A373]/20 bg-zinc-800/50 p-3">
                        <div className="text-lg font-bold text-[#D4A373]">7+ anos</div>
                        <div className="text-xs text-zinc-400">de experiência</div>
                      </div>
                      <div className="rounded-lg border border-[#D4A373]/20 bg-zinc-800/50 p-3">
                        <div className="text-lg font-bold text-[#D4A373]">+40</div>
                        <div className="text-xs text-zinc-400">mentorados</div>
                      </div>
                      <div className="col-span-2 rounded-lg border border-[#D4A373]/20 bg-zinc-800/50 p-3 md:col-span-1">
                        <div className="text-base font-bold text-[#D4A373]">ZD Agent</div>
                        <div className="text-xs text-zinc-400">SaaS próprio</div>
                      </div>
                    </div>

                    <div className="mt-3 rounded-lg border border-[#D4A373]/30 bg-gradient-to-r from-[#D4A373]/15 to-black/20 p-3">
                      <div className="flex items-center justify-center gap-2 md:justify-start">
                        <Sparkles size={16} className="text-[#D4A373]" />
                        <span className="font-semibold text-[#D4A373]">Rômulo Zorzanelli</span>
                      </div>
                      <p className="mt-1 text-xs text-zinc-400">
                        GPT, Make, n8n, Manychat, APIs, CRMs, Supabase e Power BI
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="mx-auto max-w-3xl px-4 py-6 md:px-6">
              <div className="mb-4 text-center">
                <p className="text-sm font-medium text-[#D4A373]">ATENÇÃO: Vagas limitadas para esta turma</p>
              </div>
              <CtaButton
                href={checkoutUrl}
                label="Quero garantir a Mentoria 4D"
                onClick={handleCheckoutClick}
                external
                className="mx-auto w-full text-lg py-5 md:w-[80%]"
              />
              <p className="mt-2 text-center text-xs text-zinc-500">
                Acesso imediato • Garantia de 7 dias • Suporte incluso
              </p>
            </section>

            <section className="mx-auto max-w-5xl px-4 py-6 md:px-6 md:py-12">
              <header className="mb-4 text-center">
                <h2
                  className="mb-4 text-2xl font-semibold md:text-3xl"
                  style={{ color: "#D4A373", fontFamily: "Montserrat, sans-serif" }}
                >
                  O que é a Mentoria 4D?
                </h2>
                <p className="mx-auto max-w-2xl text-zinc-300">
                  Um ambiente completo de formação e suporte para quem quer construir automações e vendas com
                  Inteligência Artificial, sem precisar de conhecimento técnico prévio.
                </p>
              </header>

              <div className="grid gap-3 md:grid-cols-3">
                <div className="rounded-lg border border-[#D4A373]/30 bg-zinc-900/60 p-3 text-center shadow-[0_0_40px_-12px_rgba(212,163,115,0.18)]">
                  <div className="mx-auto mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-[#D4A373]/20">
                    <LayoutGrid className="text-[#D4A373]" size={18} />
                  </div>
                  <h3 className="mb-1 text-sm font-semibold text-[#D4A373]">Conexões Iniciais</h3>
                  <p className="text-xs leading-tight text-zinc-300">
                    ChatbotSystem, GPT, ElevenLabs, Instagram, WhatsApp e primeiro bot.
                  </p>
                </div>

                <div className="rounded-lg border border-[#D4A373]/30 bg-zinc-900/60 p-3 text-center shadow-[0_0_40px_-12px_rgba(212,163,115,0.18)]">
                  <div className="mx-auto mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-[#D4A373]/20">
                    <Users className="text-[#D4A373]" size={18} />
                  </div>
                  <h3 className="mb-1 text-sm font-semibold text-[#D4A373]">Comunidade Ativa</h3>
                  <p className="text-xs leading-tight text-zinc-300">
                    Suporte, networking e acompanhamento para acelerar a execução.
                  </p>
                </div>

                <div className="rounded-lg border border-[#D4A373]/30 bg-zinc-900/60 p-3 text-center shadow-[0_0_40px_-12px_rgba(212,163,115,0.18)]">
                  <div className="mx-auto mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-[#D4A373]/20">
                    <BarChart3 className="text-[#D4A373]" size={18} />
                  </div>
                  <h3 className="mb-1 text-sm font-semibold text-[#D4A373]">Imersões e Atualizações</h3>
                  <p className="text-xs leading-tight text-zinc-300">
                    Lives, atualizações constantes e suporte ao vivo.
                  </p>
                </div>
              </div>
            </section>

            <section className="mx-auto max-w-5xl px-4 py-6 md:px-6 md:py-12">
              <header className="mb-4 text-center">
                <h2
                  className="mb-4 text-2xl font-semibold md:text-3xl"
                  style={{ color: "#D4A373", fontFamily: "Montserrat, sans-serif" }}
                >
                  Conteúdo Completo da Mentoria 4D
                </h2>
                <p className="mx-auto max-w-2xl text-zinc-400">
                  Módulos reais, bônus gravados e recursos adicionais para construir e escalar suas automações.
                </p>
              </header>

              <div className="mx-auto max-w-3xl">
                <div className="rounded-xl border border-[#D4A373]/30 bg-zinc-900/60 p-4 md:p-6">
                  <div className="space-y-3">
                    {MODULES.map((module, index) => (
                      <div key={index} className="flex gap-3 border-b border-zinc-800/50 py-2 last:border-0">
                        <div className="flex-shrink-0">
                          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#D4A373]/20">
                            <span className="text-sm font-bold text-[#D4A373]">{index + 1}</span>
                          </div>
                        </div>
                        <div className="min-w-0 flex-1">
                          <div className="mb-1 flex items-start justify-between gap-2">
                            <h4 className="text-sm font-semibold leading-tight text-[#D4A373]">{module.title}</h4>
                            <Badge
                              variant="outline"
                              className="flex-shrink-0 border-[#D4A373]/50 text-xs text-[#D4A373]"
                            >
                              {module.badge}
                            </Badge>
                          </div>
                          <p className="text-xs leading-tight text-zinc-400">{module.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-6 text-center">
                <p className="mx-auto mb-6 max-w-xl text-zinc-300">
                  Essa é a base para sair do manual e construir automações que vendem.
                </p>
                <CtaButton
                  href={checkoutUrl}
                  label="Quero começar minha jornada agora"
                  onClick={handleCheckoutClick}
                  external
                  className="mx-auto w-full text-lg py-5 px-10 md:w-auto"
                />
              </div>
            </section>

            <section className="mx-auto max-w-6xl px-4 py-6 md:px-6 md:py-12">
              <h2
                className="mb-4 text-center text-2xl font-semibold md:text-3xl"
                style={{ color: "#D4A373", fontFamily: "Montserrat, sans-serif" }}
              >
                Resultados Reais de Quem Aplicou
              </h2>
              <p className="mx-auto mb-4 max-w-2xl text-center text-zinc-400">
                Veja histórias reais de quem aplicou o método e avançou com automações e vendas.
              </p>

              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                {TESTIMONIALS.map((testimony) => (
                  <Card
                    key={testimony.title}
                    className="border border-[#D4A373]/30 bg-zinc-900/60 shadow-[0_0_40px_-12px_rgba(212,163,115,0.18)]"
                  >
                    <CardHeader className="p-4">
                      <div className="flex items-center gap-2">
                        <div className="flex text-yellow-400">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} size={14} fill="currentColor" />
                          ))}
                        </div>
                      </div>
                      <CardTitle className="text-lg text-zinc-100">{testimony.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="p-4">
                      <img
                        src={testimony.img}
                        alt={testimony.alt}
                        className="max-h-48 w-full cursor-pointer rounded-md border border-[#D4A373]/20 object-cover transition-colors hover:border-[#D4A373]"
                        onClick={() => handleImageClick(testimony.img)}
                      />
                      <blockquote className="mt-1.5 text-sm italic text-zinc-300">{`"${testimony.quote}"`}</blockquote>
                      <div className="mt-1.5 text-xs font-medium text-[#D4A373]">{testimony.note}</div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="mx-auto mt-8 grid max-w-2xl gap-4 text-center md:grid-cols-2">
                <div className="rounded-lg border border-[#D4A373]/20 bg-zinc-900/40 p-4">
                  <div className="text-2xl font-bold text-[#D4A373]">4.9/5</div>
                  <div className="text-sm text-zinc-400">Avaliação Média</div>
                </div>
                <div className="rounded-lg border border-[#D4A373]/20 bg-zinc-900/40 p-4">
                  <div className="text-2xl font-bold text-[#D4A373]">4 histórias reais</div>
                  <div className="text-sm text-zinc-400">Prova Social</div>
                </div>
              </div>
            </section>

            <section id="oferta" className="mx-auto max-w-4xl scroll-mt-20 px-4 py-6 md:px-6 md:py-12">
              <div className="mb-4 text-center">
                <h2
                  className="mb-3 text-2xl font-semibold md:text-3xl"
                  style={{ color: "#D4A373", fontFamily: "Montserrat, sans-serif" }}
                >
                  Investimento Promocional
                </h2>
              </div>

              <div className="mx-auto max-w-3xl">
                <div className="rounded-xl border border-[#D4A373]/40 bg-gradient-to-br from-[#D4A373]/15 to-black/30 p-4">
                  <p className="mb-4 text-center text-sm leading-relaxed text-zinc-200 md:text-base">
                    Essa semana a Mentoria 4D está com 85% de desconto. De R$ 1.200,00 por R$ 197,00 — acesso de 1
                    ano, comunidade ativa e suporte direto.
                  </p>

                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2 text-sm">
                      <h3 className="mb-2 text-lg font-semibold text-[#D4A373]">O que você recebe</h3>
                      <div className="space-y-2 text-sm">
                        <div className="flex items-start gap-2 text-zinc-300">
                          <span className="flex-shrink-0 text-[#D4A373]">✦</span>
                          <div>
                            <div className="font-medium text-zinc-200">Acesso de 1 ano</div>
                            <div className="text-zinc-500">Tempo para aplicar com consistência</div>
                          </div>
                        </div>
                        <div className="flex items-start gap-2 text-zinc-300">
                          <span className="flex-shrink-0 text-[#D4A373]">✦</span>
                          <div>
                            <div className="font-medium text-zinc-200">Comunidade ativa</div>
                            <div className="text-zinc-500">Troca e suporte entre alunos</div>
                          </div>
                        </div>
                        <div className="flex items-start gap-2 text-zinc-300">
                          <span className="flex-shrink-0 text-[#D4A373]">✦</span>
                          <div>
                            <div className="font-medium text-zinc-200">Suporte direto</div>
                            <div className="text-zinc-500">Orientação para seguir executando</div>
                          </div>
                        </div>
                        <div className="pt-2 border-t border-zinc-700">
                          <div className="text-xs text-zinc-400">De R$ 1.200,00 por R$ 197,00 — 85% OFF</div>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="mb-3 text-lg font-semibold text-[#D4A373]">Mentoria 4D por apenas</h3>
                      <div className="mb-2 text-5xl font-bold text-white">R$ 197,00</div>
                      <div className="mb-3 text-[#D4A373]">Acesso de 1 ano, comunidade ativa e suporte direto</div>

                      <div className="mb-4 space-y-2 text-left text-sm">
                        <div className="flex items-center gap-2 text-zinc-300">
                          <CheckCircle size={14} className="text-[#D4A373] flex-shrink-0" />
                          <span>27 aulas práticas</span>
                        </div>
                        <div className="flex items-center gap-2 text-zinc-300">
                          <CheckCircle size={14} className="text-[#D4A373] flex-shrink-0" />
                          <span>Acesso por 1 ano</span>
                        </div>
                        <div className="flex items-center gap-2 text-zinc-300">
                          <CheckCircle size={14} className="text-[#D4A373] flex-shrink-0" />
                          <span>Comunidade exclusiva</span>
                        </div>
                        <div className="flex items-center gap-2 text-zinc-300">
                          <CheckCircle size={14} className="text-[#D4A373] flex-shrink-0" />
                          <span>Suporte direto</span>
                        </div>
                        <div className="flex items-center gap-2 text-zinc-300">
                          <CheckCircle size={14} className="text-[#D4A373] flex-shrink-0" />
                          <span>Atualizações constantes</span>
                        </div>
                      </div>

                      <div className="border-t border-[#D4A373]/20 pt-3 text-xs text-zinc-400">
                        Parcelamento em até 12x
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-4 text-center">
                <CtaButton
                  href={checkoutUrl}
                  label="Garantir acesso por R$ 197,00"
                  onClick={handleCheckoutClick}
                  external
                  className="mx-auto w-full text-lg py-5 px-10 md:w-auto"
                />
                <p className="mt-2 text-xs text-zinc-500">Oferta promocional por tempo limitado</p>
              </div>
            </section>

            <section className="mx-auto max-w-4xl px-4 py-6 md:px-6 md:py-12">
              <div className="space-y-3 text-center">
                <h3
                  className="text-xl font-semibold md:text-2xl"
                  style={{ color: "#D4A373", fontFamily: "Montserrat, sans-serif" }}
                >
                  Garantia de 7 Dias
                </h3>

                <div className="mx-auto max-w-2xl rounded-xl border border-[#D4A373]/30 bg-zinc-900/60 p-4">
                  <div className="mb-2 flex items-center justify-center">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#D4A373]/20">
                      <ShieldCheck size={32} className="text-[#D4A373]" />
                    </div>
                  </div>

                  <p className="mb-3 text-sm text-[#B3B3B3]">
                    Experimente o curso por 7 dias. Se não ficar satisfeito com o conteúdo, devolvemos 100% do seu
                    investimento conforme as políticas da plataforma.
                  </p>

                  <div className="space-y-2 text-sm text-zinc-300">
                    <div className="flex items-center justify-center gap-2">
                      <CheckCircle size={14} className="text-[#D4A373]" />
                      <span>7 dias de garantia</span>
                    </div>
                  </div>
                </div>

                <p className="text-sm font-medium text-[#D4A373]">Política padrão do mercado digital</p>
              </div>
            </section>

            <section className="mx-auto max-w-4xl px-4 py-6 md:px-6 md:py-8">
              <div className="rounded-lg border border-zinc-700/50 bg-zinc-900/40 p-4 text-center">
                <p className="text-xs leading-relaxed text-zinc-500">
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
