"use client"

import { useMemo } from "react"
import { ArrowRight, CheckCircle2, Clock3, Headphones, ShieldCheck, Sparkles, Users } from "lucide-react"
import CtaButton from "./cta-button"

const CHECKOUT_URL_DEFAULT =
  "https://pay.hotmart.com/P96358842U?off=3r6e5ncq&bid=1781791188421&offDiscount=197OFF"

export default function VslLanding({
  checkoutUrl = CHECKOUT_URL_DEFAULT,
}: {
  checkoutUrl?: string
}) {
  const checkoutLink = useMemo(() => checkoutUrl, [checkoutUrl])

  return (
    <div className="min-h-screen bg-[#050505] text-white">
      <section className="mx-auto flex min-h-screen w-full max-w-7xl items-center px-4 py-6 md:px-6 md:py-8">
        <div className="grid w-full gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:gap-8">
          <div className="space-y-5">
            <div className="flex flex-wrap items-center gap-2">
              <span className="rounded-full border border-[#D4A373]/35 bg-[#D4A373]/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-[#D4A373]">
                Mentoria 4D
              </span>
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-300">
                Essa semana com 85% de desconto
              </span>
            </div>

            <div className="space-y-3">
              <h1
                className="max-w-4xl text-4xl font-extrabold leading-[0.95] text-white md:text-6xl"
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                Mentoria 4D
              </h1>
              <p className="max-w-2xl text-base leading-7 text-zinc-300 md:text-lg">
                De R$ 1.200,00 por R$ 197,00.
                <span className="text-[#D4A373]"> Acesso de 1 ano, comunidade ativa e suporte direto.</span>
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-3">
              <div className="rounded-lg border border-white/10 bg-white/5 p-4">
                <Clock3 className="mb-3 text-[#D4A373]" size={18} />
                <div className="text-sm font-semibold text-white">Acesso de 1 ano</div>
                <div className="mt-1 text-sm text-zinc-400">Tempo suficiente para aplicar com calma.</div>
              </div>
              <div className="rounded-lg border border-white/10 bg-white/5 p-4">
                <Users className="mb-3 text-[#D4A373]" size={18} />
                <div className="text-sm font-semibold text-white">Comunidade ativa</div>
                <div className="mt-1 text-sm text-zinc-400">Ambiente para trocar e acelerar a execução.</div>
              </div>
              <div className="rounded-lg border border-white/10 bg-white/5 p-4">
                <Headphones className="mb-3 text-[#D4A373]" size={18} />
                <div className="text-sm font-semibold text-white">Suporte direto</div>
                <div className="mt-1 text-sm text-zinc-400">Orientação objetiva para seguir sem travar.</div>
              </div>
            </div>

            <div className="rounded-lg border border-[#D4A373]/30 bg-[#D4A373]/10 p-4 md:p-5">
              <div className="flex items-start gap-3">
                <Sparkles className="mt-0.5 shrink-0 text-[#D4A373]" size={18} />
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#D4A373]">
                    Oferta desta semana
                  </p>
                  <p className="mt-1 text-sm leading-6 text-zinc-200">
                    Essa é a janela promocional da Mentoria 4D. O valor foi reduzido para facilitar a entrada de
                    quem quer começar agora.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <CtaButton
                href={checkoutLink}
                label="Quero garantir a Mentoria 4D"
                external
                className="w-full sm:w-auto sm:min-w-[260px]"
              />
              <a
                href={checkoutLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/10 bg-white/5 px-6 py-4 text-center text-sm font-semibold text-white transition-colors hover:border-[#D4A373]/50 hover:bg-white/10"
              >
                <span>Ir para o checkout</span>
                <ArrowRight size={16} />
              </a>
            </div>

            <p className="text-xs leading-5 text-zinc-500">
              <ShieldCheck className="mr-1 inline-block align-[-2px] text-[#D4A373]" size={14} />
              Compra segura no Hotmart. A oferta usa o checkout informado acima em todos os botões da página.
            </p>
          </div>

          <div className="flex items-stretch">
            <div className="flex w-full flex-col justify-between rounded-xl border border-white/10 bg-white/5 p-4 md:p-5">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#D4A373]">
                    Mentoria 4D
                  </p>
                  <h2
                    className="mt-2 text-2xl font-extrabold text-white md:text-3xl"
                    style={{ fontFamily: "Montserrat, sans-serif" }}
                  >
                    Acesso com desconto de 85%
                  </h2>
                </div>
                <div className="rounded-full border border-[#D4A373]/30 bg-[#D4A373]/10 px-3 py-1 text-xs font-semibold text-[#D4A373]">
                  Hotmart
                </div>
              </div>

              <div className="mt-6 rounded-lg border border-white/10 bg-black/40 p-5">
                <div className="text-sm text-zinc-400 line-through">De R$ 1.200,00</div>
                <div className="mt-1 text-5xl font-extrabold tracking-tight text-[#D4A373]">R$ 197,00</div>
                <p className="mt-3 max-w-md text-sm leading-6 text-zinc-300">
                  Acesso de 1 ano, comunidade ativa e suporte direto para acelerar sua implementação.
                </p>
              </div>

              <div className="mt-5 space-y-3">
                {[
                  "Estrutura prática para sair da ideia e executar",
                  "Acompanhamento com comunidade ativa",
                  "Suporte direto para reduzir travas no caminho",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3 rounded-lg border border-white/10 bg-black/20 p-3">
                    <CheckCircle2 className="mt-0.5 shrink-0 text-[#D4A373]" size={18} />
                    <span className="text-sm leading-6 text-zinc-200">{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-5">
                <CtaButton
                  href={checkoutLink}
                  label="Comprar Mentoria 4D agora"
                  external
                  className="w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
