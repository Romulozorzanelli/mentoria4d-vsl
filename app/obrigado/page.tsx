import { Orbitron, Poppins } from "next/font/google"
import ObrigadoContent from "@/components/obrigado-content"

const orbitron = Orbitron({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-orbitron",
  display: "swap",
})

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
})

export const metadata = {
  title: "Cadastro Realizado - Profissão do Futuro",
  description: "Seu cadastro foi realizado com sucesso! Acesse o grupo exclusivo do WhatsApp.",
  robots: {
    index: false,
    follow: false,
  },
}

export default function ObrigadoPage() {
  return (
    <main className={`${orbitron.variable} ${poppins.variable} bg-black min-h-screen text-white`}>
      <ObrigadoContent />
    </main>
  )
}
