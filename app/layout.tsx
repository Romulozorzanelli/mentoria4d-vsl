import type React from "react"
import { Orbitron, Poppins } from "next/font/google"
import type { Metadata, Viewport } from "next"
import Script from "next/script"
import "./globals.css"

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

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: "#00FFB3",
}

export const metadata: Metadata = {
  title: "Profissão do Futuro - A Carreira que a IA Não Consegue Substituir",
  description:
    "Descubra como se tornar um Gestor de Agentes de IA e construir uma carreira lucrativa na profissão do futuro. Acesso a 27 aulas práticas, comunidade exclusiva e suporte especializado.",
  keywords: [
    "inteligência artificial",
    "IA",
    "carreira em IA",
    "gestor de agentes",
    "profissão do futuro",
    "automação",
    "curso de IA",
  ],
  authors: [{ name: "Rômulo" }],
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "Profissão do Futuro",
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://seu-dominio.com",
    siteName: "Profissão do Futuro",
    title: "Profissão do Futuro - Gestor de Agentes de IA",
    description:
      "A carreira que a IA não consegue substituir. Aprenda a criar e gerenciar agentes inteligentes e construa uma profissão lucrativa no mercado de IA.",
    images: [
      {
        url: "https://lzairoviveybhcahkizs.supabase.co/storage/v1/object/public/imagens/romulo-perfil.jpg",
        width: 1200,
        height: 630,
        alt: "Profissão do Futuro - Gestor de Agentes de IA",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Profissão do Futuro - Gestor de Agentes de IA",
    description:
      "A carreira que a IA não consegue substituir. Aprenda a criar agentes inteligentes e construa uma profissão lucrativa.",
    images: ["https://lzairoviveybhcahkizs.supabase.co/storage/v1/object/public/imagens/romulo-perfil.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
    generator: 'v0.app'
}

const META_PIXEL_ID = "1578784523492094"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className="dark">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/icon-192.jpg" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="Profissão Futuro" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="format-detection" content="telephone=no" />

        {/* Meta Pixel Code */}
        <Script
          id="meta-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s){
                if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                n.queue=[];t=b.createElement(e);t.async=!0;
                t.src=v;s=b.getElementsByTagName(e)[0];
                s.parentNode.insertBefore(t,s)}(window, document,'script',
                'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init','${META_PIXEL_ID}');
              fbq('track','PageView');
            `,
          }}
        />
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src={`https://www.facebook.com/tr?id=${META_PIXEL_ID}&ev=PageView&noscript=1`}
            alt=""
          />
        </noscript>
      </head>
      <body className={`${orbitron.variable} ${poppins.variable} antialiased bg-black text-white min-h-screen`}>
        {children}
      </body>
    </html>
  )
}
