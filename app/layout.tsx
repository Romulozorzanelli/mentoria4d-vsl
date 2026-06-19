import type React from "react"
import type { Metadata, Viewport } from "next"
import Script from "next/script"
import "@fontsource/inter/300.css"
import "@fontsource/inter/400.css"
import "@fontsource/inter/500.css"
import "@fontsource/inter/600.css"
import "@fontsource/inter/700.css"
import "@fontsource/inter/800.css"
import "@fontsource/montserrat/400.css"
import "@fontsource/montserrat/700.css"
import "@fontsource/montserrat/800.css"
import "@fontsource/montserrat/900.css"
import "./globals.css"

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: "#D4A373",
}

export const metadata: Metadata = {
  title: "Mentoria 4D | Oferta Especial",
  description:
    "Mentoria 4D com 85% de desconto nesta semana. Acesso de 1 ano, comunidade ativa e suporte direto para acelerar sua execução.",
  keywords: [
    "mentoria",
    "Mentoria 4D",
    "inteligência artificial",
    "automação",
    "carreira digital",
    "comunidade",
  ],
  authors: [{ name: "Rômulo" }],
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "Mentoria 4D",
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://seu-dominio.com",
    siteName: "Mentoria 4D",
    title: "Mentoria 4D | Oferta Especial",
    description:
      "Essa semana a Mentoria 4D está com 85% de desconto. Acesso de 1 ano, comunidade ativa e suporte direto.",
    images: [
      {
        url: "https://lzairoviveybhcahkizs.supabase.co/storage/v1/object/public/imagens/romulo-perfil.jpg",
        width: 1200,
        height: 630,
        alt: "Mentoria 4D",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mentoria 4D | Oferta Especial",
    description:
      "Essa semana a Mentoria 4D está com 85% de desconto. Acesso de 1 ano, comunidade ativa e suporte direto.",
    images: ["https://lzairoviveybhcahkizs.supabase.co/storage/v1/object/public/imagens/romulo-perfil.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  generator: "v0.app",
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
        <meta name="apple-mobile-web-app-title" content="Mentoria 4D" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="format-detection" content="telephone=no" />
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
      <body className="antialiased bg-black text-white min-h-screen">
        {children}
      </body>
    </html>
  )
}
