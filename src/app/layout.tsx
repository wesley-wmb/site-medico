import type { Metadata } from "next";
import { Inter, Fraunces } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-fraunces",
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Infinity Estética · Harmonização Facial e Corporal em São José dos Pinhais",
  description: "Sua melhor versão começa aqui. Harmonização Facial e Corporal, Emagrecimento e Rejuvenescimento com tecnologia avançada em São José dos Pinhais, PR.",
  openGraph: {
    title: "Infinity Estética e Tricologia Avançada",
    description: "Harmonização Facial e Corporal, Emagrecimento e Rejuvenescimento em São José dos Pinhais, PR.",
    type: "website",
    locale: "pt_BR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "HealthAndBeautyBusiness",
    "name": "Infinity Estética e Tricologia Avançada",
    "description": "Harmonização Facial e Corporal, Emagrecimento e Rejuvenescimento.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "São José dos Pinhais",
      "addressRegion": "PR",
      "addressCountry": "BR"
    },
    "telephone": "+5541991078805",
    "url": "https://www.instagram.com/infinity.esteticaavancada/"
  };

  return (
    <html lang="pt-BR" className={`${inter.variable} ${fraunces.variable} h-full antialiased`} suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col font-sans">
        {children}
      </body>
    </html>
  );
}
