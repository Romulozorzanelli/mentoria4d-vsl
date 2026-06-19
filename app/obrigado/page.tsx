import ObrigadoContent from "@/components/obrigado-content"

export const metadata = {
  title: "Cadastro Realizado - Mentoria 4D",
  description: "Seu cadastro foi realizado com sucesso! Acesse o grupo exclusivo do WhatsApp.",
  robots: {
    index: false,
    follow: false,
  },
}

export default function ObrigadoPage() {
  return (
    <main className="bg-black min-h-screen text-white">
      <ObrigadoContent />
    </main>
  )
}
