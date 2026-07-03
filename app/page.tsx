import { CtaButton } from "@/components/cta-button";

// TODO: trocar pelo link real de checkout (Hotmart) assim que o produto Express
// estiver cadastrado. Até lá, o botão aponta para "#".
const CHECKOUT_URL = process.env.NEXT_PUBLIC_CHECKOUT_URL || "#";

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-3 text-center text-sm font-semibold uppercase tracking-wide text-[#D4A373]">
      {children}
    </p>
  );
}

function GoldHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2
      className="mb-4 text-center text-2xl font-bold leading-tight text-[#D4A373] md:text-4xl"
      style={{ fontFamily: "Montserrat, sans-serif" }}
    >
      {children}
    </h2>
  );
}

function Card({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div
      className={`rounded-xl border border-[#D4A373]/30 bg-zinc-900/60 p-6 shadow-[0_0_50px_-16px_rgba(212,163,115,0.18)] md:p-8 ${className}`}
    >
      {children}
    </div>
  );
}

export default function Page() {
  return (
    <main className="min-h-screen bg-[#050505] text-zinc-100">
      {/* 1. HERO */}
      <section className="mx-auto max-w-4xl px-4 pb-8 pt-16 text-center md:px-6 md:pt-24">
        <h1
          className="mx-auto max-w-3xl text-3xl font-extrabold leading-tight text-white md:text-5xl"
          style={{ fontFamily: "Montserrat, sans-serif" }}
        >
          Monte sua <span className="text-[#D4A373]">Agência de Agentes de IA</span> — Do Zero à
          Primeira Demonstração e ao Primeiro Contrato de Cliente
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-zinc-300">
          O primeiro passo prático: você sai com um agente de IA rodando, uma demonstração pra
          mostrar e o caminho pra fechar seu primeiro cliente. Sem programar. Sem experiência
          prévia.
        </p>
        <div className="mx-auto mt-8 max-w-md">
          <CtaButton
            href={CHECKOUT_URL}
            label="Quero começar minha Mentoria 4D Express"
            external
            className="w-full text-lg"
          />
          <p className="mt-3 text-xs text-zinc-500">
            Acesso imediato • 100% online • Garantia de 7 dias
          </p>
        </div>
      </section>

      {/* 2. STORYTELLING — HOOK DE ORIGEM */}
      <section className="mx-auto max-w-3xl px-4 py-12 md:px-6">
        <Card>
          <p className="text-zinc-300">
            Rômulo vinha do mercado corporativo, na área de medtech. Pós-pandemia, fechou o
            primeiro contrato de automação — <span className="text-[#D4A373]">R$ 2.825</span>,
            automatizando o atendimento de uma clínica médica. Foi ali que a chave virou: saiu de
            dentro do sistema corporativo pra construir algo próprio em cima de IA e automação.
          </p>
          <p className="mt-4 text-zinc-300">
            A Mentoria 4D Express não é o método inteiro — é o mesmo primeiro passo que o Rômulo
            deu, condensado: sair da teoria e ter um agente rodando de verdade.
          </p>
        </Card>
      </section>

      {/* 3. QUEBRA DE CRENÇA FALSA */}
      <section className="mx-auto max-w-3xl px-4 py-12 md:px-6">
        <GoldHeading>A verdade que ninguém te conta</GoldHeading>
        <Card>
          <p className="text-zinc-300">
            No mercado de automação com IA, tem gente vendendo que você vai ficar milionário da
            noite pro dia. Tem gente vendendo que é só clicar um botão e ficar rico. E tem gente
            dizendo que é super fácil, que não precisa estudar.
          </p>
          <p className="mt-4 text-zinc-300">
            Tudo isso é mentira que muitos gurus vendem por aí.
          </p>
          <p className="mt-4 font-semibold text-white">
            Aqui a real: você recebe um modelo de negócio validado. O resultado vem de aplicar e
            se aperfeiçoar — não de sorte, nem de mágica, nem de botão automático.
          </p>
        </Card>
      </section>

      {/* 4. BLOCO "MESMO QUE..." */}
      <section className="mx-auto max-w-3xl px-4 py-12 md:px-6">
        <GoldHeading>Mesmo que você ache que não é pra você</GoldHeading>
        <div className="space-y-4">
          <Card>
            <p className="text-zinc-300">
              <span className="font-semibold text-[#D4A373]">Mesmo que</span> você ache que
              precisa saber programar ou aprender ferramentas complexas — não precisa. Você só
              aprende a configurar a ferramenta whitelabel que a gente indica, de um jeito rápido
              e fácil.
            </p>
          </Card>
          <Card>
            <p className="text-zinc-300">
              <span className="font-semibold text-[#D4A373]">Mesmo que</span> você tenha pouco
              tempo pra dedicar — com poucas horas você já configura seu sistema pronto pra
              demonstração. Depois disso, é aplicar a estratégia pra fechar seu primeiro cliente.
            </p>
          </Card>
          <Card>
            <p className="text-zinc-300">
              <span className="font-semibold text-[#D4A373]">Mesmo que</span> você ache que vai
              precisar investir pesado em sistemas e ferramentas — não precisa. A metodologia foi
              pensada pra funcionar com o mínimo de investimento possível, com alto ROI e
              estratégias de escala.
            </p>
          </Card>
        </div>
        <p className="mt-6 text-center font-semibold text-white">
          A Mentoria 4D Express foi feita pra funcionar mesmo assim.
        </p>
      </section>

      {/* 5. APRESENTAÇÃO DO EXPRESS — ANTES/DEPOIS ESPELHADO */}
      <section className="mx-auto max-w-4xl px-4 py-12 md:px-6">
        <GoldHeading>O que muda pra você</GoldHeading>
        <div className="grid gap-4 md:grid-cols-3">
          {[
            {
              antes: "Você troca hora por dinheiro — só fatura enquanto está presente.",
              depois:
                "Um agente de IA atende, qualifica e conduz a venda mesmo com você offline.",
            },
            {
              antes: "Preso na rotina, sem controle real do seu tempo.",
              depois:
                "Dono de uma habilidade que você vende pra qualquer negócio que precise de automação.",
            },
            {
              antes: 'Acha que automação com IA é "coisa de programador".',
              depois:
                "Monta, testa e apresenta um agente de IA funcionando — sem escrever uma linha de código.",
            },
          ].map((bloco, i) => (
            <Card key={i} className="flex flex-col">
              <p className="text-sm font-semibold uppercase tracking-wide text-zinc-500">Antes</p>
              <p className="mt-1 text-zinc-300">{bloco.antes}</p>
              <p className="mt-4 text-sm font-semibold uppercase tracking-wide text-[#D4A373]">
                Depois
              </p>
              <p className="mt-1 text-zinc-100">{bloco.depois}</p>
              <p className="mt-4 text-right font-bold text-[#D4A373]">Resultado?</p>
            </Card>
          ))}
        </div>
      </section>

      {/* 6. PROVA — CASE JEAN PIERRE */}
      <section className="mx-auto max-w-3xl px-4 py-12 md:px-6">
        <GoldHeading>Quem já aplicou o modelo</GoldHeading>
        <Card>
          <p className="text-zinc-300">
            Jean Pierre começou fechando 3 clínicas médicas, por um valor de entrada — o objetivo
            era validar a estratégia, não faturar alto de cara. Assim que validou, expandiu o
            atendimento pra toda a rede daquela clínica.
          </p>
          <p className="mt-4 text-zinc-300">
            Hoje, ele conta com dezenas de clínicas cadastradas e criou uma solução própria pro
            nicho de clínicas, com campanhas estratégicas específicas pro setor.
          </p>
        </Card>
      </section>

      {/* 7. STACK DO QUE ESTÁ INCLUSO */}
      <section className="mx-auto max-w-4xl px-4 py-12 md:px-6">
        <GoldHeading>O que está dentro da Mentoria 4D Express</GoldHeading>
        <SectionLabel>4 módulos · 14 aulas</SectionLabel>
        <div className="grid gap-3 md:grid-cols-2">
          {[
            {
              modulo: "Módulo 1 — Bem-vindo à Mentoria 4D Express",
              aulas: [
                "Bem-vindo à sua Jornada 4D",
                "Como Funciona o Mercado de Automação com IA",
                "Seu Plano de Ação até o Primeiro Agente Pronto",
              ],
            },
            {
              modulo: "Módulo 2 — Estrutura e Conexão",
              aulas: [
                "Configurando sua Ferramenta",
                "Conectando o WhatsApp via QR Code",
                "Conectando o Instagram",
                "Criando as Variáveis Iniciais do seu Agente",
                "Conectando a Inteligência Artificial (GPT)",
              ],
            },
            {
              modulo: "Módulo 3 — Criando seu Primeiro Agente",
              aulas: [
                "Criando seu Primeiro Agente de IA",
                "Montando o Primeiro Fluxo de Conversa",
                "Testando e Ajustando seu Agente",
              ],
            },
            {
              modulo: "Módulo 4 — Do Agente ao Contrato Fechado",
              aulas: [
                "Como Funciona o Sistema por Trás",
                "Como Apresentar e Vender essa Solução para o Cliente",
                "Seu Próximo Passo",
              ],
            },
          ].map((m) => (
            <Card key={m.modulo}>
              <h3 className="mb-3 font-semibold text-[#D4A373]">{m.modulo}</h3>
              <ul className="space-y-1.5 text-sm text-zinc-300">
                {m.aulas.map((a) => (
                  <li key={a}>• {a}</li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
        <p className="mx-auto mt-6 max-w-2xl text-center text-sm text-zinc-400">
          Acompanhamento individual, calls guiadas e comunidade de networking são parte da
          Mentoria 4D completa — aqui você tem o essencial pra sair do zero com resultado na mão.
        </p>
      </section>

      {/* 8. PREÇO ANCORADO */}
      <section id="oferta" className="mx-auto max-w-3xl px-4 py-12 md:px-6">
        <GoldHeading>Investimento</GoldHeading>
        <Card className="text-center">
          <p className="text-5xl font-extrabold text-white">R$ 299</p>
          <p className="mt-1 text-sm text-zinc-500">acesso único</p>
          <p className="mx-auto mt-6 max-w-xl text-zinc-300">
            Esse é o primeiro degrau. Quando seu agente estiver rodando e você quiser
            profissionalizar isso como agência de verdade — currículo avançado, acompanhamento
            contínuo, comunidade — a Mentoria 4D completa é o passo seguinte: um pacote avaliado
            em R$ 15.200, por R$ 1.597 (ou 12x de R$ 165,17).
          </p>
          <div className="mx-auto mt-6 max-w-sm">
            <CtaButton
              href={CHECKOUT_URL}
              label="Quero garantir a Mentoria 4D Express"
              external
              className="w-full text-lg"
            />
          </div>
        </Card>
      </section>

      {/* 9. GARANTIA */}
      <section className="mx-auto max-w-3xl px-4 py-12 md:px-6">
        <GoldHeading>Garantia</GoldHeading>
        <Card className="text-center">
          <p className="text-zinc-300">
            Garantia incondicional de <span className="font-semibold text-[#D4A373]">7 dias</span>
            . Se não for pra você, é só pedir e o valor é devolvido.
          </p>
        </Card>
      </section>

      {/* 10. CTA FINAL */}
      <section className="mx-auto max-w-3xl px-4 pb-24 pt-4 text-center md:px-6">
        <GoldHeading>Seu primeiro agente rodando começa aqui</GoldHeading>
        <div className="mx-auto mt-4 max-w-md">
          <CtaButton
            href={CHECKOUT_URL}
            label="Quero começar minha Mentoria 4D Express"
            external
            className="w-full text-lg"
          />
        </div>
      </section>

      <footer className="border-t border-zinc-800 py-8 text-center text-xs text-zinc-600">
        © 2026 Mentoria 4D Express — Rômulo Zorzanelli / Zone Digital. Todos os direitos
        reservados.
      </footer>
    </main>
  );
}
