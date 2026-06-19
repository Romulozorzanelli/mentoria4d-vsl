"use client"

import { useState, type FormEvent } from "react"
import { AlertCircle, Loader2, Sparkles } from "lucide-react"
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
        <div className="mb-8 text-center">
          <div className="mb-4 inline-flex items-center gap-2">
            <Sparkles className="text-[#D4A373]" size={24} />
            <h1 className="text-3xl font-bold text-white md:text-4xl" style={{ fontFamily: "Montserrat, sans-serif" }}>
              Bem-vindo
            </h1>
          </div>
          <p className="mb-3 text-lg text-zinc-300">Preencha seus dados para seguir para a Mentoria 4D.</p>
          <div className="inline-block rounded-lg border border-[#D4A373]/30 bg-[#D4A373]/10 px-4 py-3">
            <p className="text-sm font-medium text-[#D4A373]">
              Você está a um passo de acessar as instruções da Mentoria 4D.
            </p>
          </div>
        </div>

        <div className="rounded-xl border border-white/10 bg-white/5 p-6 shadow-[0_0_50px_-16px_rgba(212,163,115,0.2)] md:p-8">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="nome" className="mb-2 block text-sm font-medium text-zinc-300">
                Nome completo
              </label>
              <input
                type="text"
                id="nome"
                name="nome"
                required
                autoComplete="name"
                placeholder="João Silva"
                className="w-full rounded-lg border border-zinc-700 bg-zinc-900/70 px-4 py-3 text-white placeholder:text-zinc-500 focus:border-[#D4A373] focus:outline-none focus:ring-2 focus:ring-[#D4A373]/40"
              />
            </div>

            <div>
              <label htmlFor="whatsapp" className="mb-2 block text-sm font-medium text-zinc-300">
                WhatsApp (com DDD)
              </label>
              <input
                type="tel"
                id="whatsapp"
                name="whatsapp"
                required
                autoComplete="tel"
                placeholder="(11) 98765-4321"
                maxLength={15}
                className="w-full rounded-lg border border-zinc-700 bg-zinc-900/70 px-4 py-3 text-white placeholder:text-zinc-500 focus:border-[#D4A373] focus:outline-none focus:ring-2 focus:ring-[#D4A373]/40"
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
            </div>

            <div>
              <label htmlFor="email" className="mb-2 block text-sm font-medium text-zinc-300">
                E-mail
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                autoComplete="email"
                placeholder="seu@email.com"
                className="w-full rounded-lg border border-zinc-700 bg-zinc-900/70 px-4 py-3 text-white placeholder:text-zinc-500 focus:border-[#D4A373] focus:outline-none focus:ring-2 focus:ring-[#D4A373]/40"
              />
            </div>

            {error && (
              <div className="flex items-center gap-2 rounded-lg border border-red-500/30 bg-red-500/10 p-3 text-sm text-red-300">
                <AlertCircle size={16} />
                <span>{error}</span>
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="flex w-full items-center justify-center gap-2 rounded-lg bg-[linear-gradient(135deg,#E0B17D,#D4A373)] py-3.5 font-semibold text-black transition-all hover:brightness-105 active:brightness-95 disabled:cursor-not-allowed disabled:opacity-50"
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

          <p className="mt-6 text-center text-xs text-zinc-500">
            Seus dados estão seguros e não serão compartilhados com terceiros.
          </p>
        </div>
      </div>
    </div>
  )
}
