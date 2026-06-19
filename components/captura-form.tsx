"use client"

import { useState, type FormEvent } from "react"
import { Sparkles, Loader2, AlertCircle } from "lucide-react"
import { useRouter } from "next/navigation"

const WEBHOOK_URL = "https://nwh.romuloautomacoes.com.br/webhook/7a59bdea-3b47-4386-8425-0bececa79949"

export default function CapturaForm() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    setError("")

    const formData = new FormData(e.currentTarget)
    const data = {
      nome: formData.get("nome"),
      whatsapp: formData.get("whatsapp"),
      email: formData.get("email"),
      timestamp: new Date().toISOString(),
    }

    try {
      const response = await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })

      if (!response.ok) {
        throw new Error("Erro ao enviar dados")
      }

      // Redirecionar para página de obrigado
      router.push("/obrigado")
    } catch (err) {
      setError("Erro ao enviar seus dados. Tente novamente.")
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 mb-4">
            <Sparkles className="text-emerald-400" size={24} />
            <h1
              className="text-3xl md:text-4xl font-bold text-emerald-400"
              style={{ fontFamily: "var(--font-orbitron)" }}
            >
              Bem-vindo(a)!
            </h1>
          </div>
          <p className="text-zinc-300 text-lg mb-3">Preencha seus dados para acessar o grupo exclusivo do WhatsApp</p>
          <div className="inline-block bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 border border-emerald-400/30 rounded-lg px-4 py-3">
            <p className="text-emerald-300 font-medium text-sm">
              ✨ Você está a um passo para descobrir a profissão do futuro
            </p>
          </div>
        </div>

        {/* Form Card */}
        <div className="bg-zinc-900/60 border border-emerald-400/30 rounded-xl p-6 md:p-8 shadow-[0_0_50px_-16px_rgba(0,255,179,0.35)]">
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Nome */}
            <div>
              <label htmlFor="nome" className="block text-sm font-medium text-zinc-300 mb-2">
                Nome Completo
              </label>
              <input
                type="text"
                id="nome"
                name="nome"
                required
                autoComplete="name"
                placeholder="João Silva"
                className="w-full px-4 py-3 bg-zinc-800/50 border border-zinc-700 rounded-lg text-white placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-emerald-400/50 focus:border-emerald-400 transition-all"
              />
            </div>

            {/* WhatsApp */}
            <div>
              <label htmlFor="whatsapp" className="block text-sm font-medium text-zinc-300 mb-2">
                WhatsApp (com DDD)
              </label>
              <input
                type="tel"
                id="whatsapp"
                name="whatsapp"
                required
                autoComplete="tel"
                placeholder="(11) 98765-4321"
                pattern="[$$\d{2}$$\s\d{4,5}-\d{4}]*"
                maxLength={15}
                className="w-full px-4 py-3 bg-zinc-800/50 border border-zinc-700 rounded-lg text-white placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-emerald-400/50 focus:border-emerald-400 transition-all"
                onInput={(e) => {
                  const input = e.currentTarget
                  let value = input.value.replace(/\D/g, "")

                  if (value.length > 11) value = value.slice(0, 11)

                  if (value.length > 6) {
                    value = `(${value.slice(0, 2)}) ${value.slice(2, 7)}-${value.slice(7)}`
                  } else if (value.length > 2) {
                    value = `(${value.slice(0, 2)}) ${value.slice(2)}`
                  } else if (value.length > 0) {
                    value = `(${value}`
                  }

                  input.value = value
                }}
              />
              <p className="text-xs text-zinc-500 mt-1">Formato: (11) 98765-4321</p>
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-zinc-300 mb-2">
                E-mail
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                autoComplete="email"
                placeholder="seu@email.com"
                className="w-full px-4 py-3 bg-zinc-800/50 border border-zinc-700 rounded-lg text-white placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-emerald-400/50 focus:border-emerald-400 transition-all"
              />
            </div>

            {/* Error Message */}
            {error && (
              <div className="flex items-center gap-2 p-3 bg-red-500/10 border border-red-500/30 rounded-lg text-red-400 text-sm">
                <AlertCircle size={16} />
                <span>{error}</span>
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-emerald-500 to-cyan-500 text-black font-semibold py-3.5 rounded-lg hover:brightness-110 active:brightness-95 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {loading ? (
                <>
                  <Loader2 size={20} className="animate-spin" />
                  <span>Enviando...</span>
                </>
              ) : (
                <>
                  <span>Continuar</span>
                  <Sparkles size={18} />
                </>
              )}
            </button>
          </form>

          {/* Privacy Note */}
          <p className="text-xs text-zinc-500 text-center mt-6">
            🔒 Seus dados estão seguros e não serão compartilhados com terceiros
          </p>
        </div>

        {/* Promessa Principal */}
        <div className="mt-6 text-center">
          <div className="bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 border-2 border-emerald-400/50 rounded-xl p-6 shadow-[0_0_60px_-16px_rgba(0,255,179,0.4)]">
            <h2
              className="text-2xl md:text-3xl font-bold text-white mb-2 leading-tight"
              style={{ fontFamily: "var(--font-orbitron)" }}
            >
              Fature de{" "}
              <span className="text-emerald-400 bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                R$ 5 mil a R$ 30 mil
              </span>
            </h2>
            <p className="text-zinc-300 text-lg">
              com a profissão que está <strong className="text-emerald-300">fora do radar</strong>
            </p>
          </div>
        </div>

        {/* O que você vai descobrir na Aula ao Vivo */}
        <div className="mt-6 bg-zinc-900/60 border border-emerald-400/30 rounded-xl p-6 shadow-[0_0_40px_-12px_rgba(0,255,179,0.25)]">
          <h3 className="text-xl font-bold text-emerald-300 mb-4 flex items-center gap-2">
            <Sparkles size={20} />O que você vai descobrir na aula ao vivo:
          </h3>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <div className="w-5 h-5 bg-emerald-400/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <div className="w-2 h-2 bg-emerald-400 rounded-full" />
              </div>
              <span className="text-zinc-300 text-sm">
                A <strong className="text-white">profissão do futuro</strong> que a IA não consegue substituir
              </span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-5 h-5 bg-emerald-400/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <div className="w-2 h-2 bg-emerald-400 rounded-full" />
              </div>
              <span className="text-zinc-300 text-sm">
                Como <strong className="text-white">começar do zero</strong> mesmo sem conhecimento técnico
              </span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-5 h-5 bg-emerald-400/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <div className="w-2 h-2 bg-emerald-400 rounded-full" />
              </div>
              <span className="text-zinc-300 text-sm">
                Os <strong className="text-white">3 passos práticos</strong> para criar seus primeiros agentes de IA
              </span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-5 h-5 bg-emerald-400/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <div className="w-2 h-2 bg-emerald-400 rounded-full" />
              </div>
              <span className="text-zinc-300 text-sm">
                Como <strong className="text-white">monetizar suas habilidades</strong> em menos de 30 dias
              </span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-5 h-5 bg-emerald-400/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <div className="w-2 h-2 bg-emerald-400 rounded-full" />
              </div>
              <span className="text-zinc-300 text-sm">
                Casos reais de quem já está <strong className="text-white">faturando de 5 a 30 mil por mês</strong>
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
