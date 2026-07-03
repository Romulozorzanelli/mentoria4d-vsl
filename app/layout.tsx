import type React from "react";
import type { Metadata, Viewport } from "next";
import Script from "next/script";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: "#D4A373",
};

export const metadata: Metadata = {
  title: "Mentoria 4D Express | Seu Primeiro Agente de IA Rodando",
  description:
    "Monte sua Agência de Agentes de IA — do zero à primeira demonstração e ao primeiro contrato de cliente. Sem programar, sem experiência.",
  keywords: [
    "Mentoria 4D Express",
    "inteligência artificial",
    "automação",
    "agentes de IA",
    "agência de automação",
  ],
  authors: [{ name: "Rômulo" }],
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: "Mentoria 4D Express",
    title: "Mentoria 4D Express | Seu Primeiro Agente de IA Rodando",
    description:
      "Monte sua Agência de Agentes de IA — do zero à primeira demonstração e ao primeiro contrato de cliente.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

// TODO: confirmar se esse funil usa o mesmo Pixel do site principal (herdado)
// ou se vocês querem um Pixel separado pra medir o Express isoladamente.
const META_PIXEL_ID = "1578784523492094";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className="dark">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
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
                fbq('init', '${META_PIXEL_ID}');
                fbq('track', 'PageView');
            `,
          }}
        />
        {children}
      </body>
    </html>
  );
}
