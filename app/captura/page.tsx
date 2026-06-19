import { Orbitron, Poppins } from "next/font/google"
import CapturaForm from "@/components/captura-form"

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

export default function CapturaPage() {
  return (
    <main className={`${orbitron.variable} ${poppins.variable} bg-black min-h-screen text-white`}>
      <CapturaForm />
    </main>
  )
}
