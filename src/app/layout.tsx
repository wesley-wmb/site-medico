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
  title: "Dra. Ana Souza · Dermatologista em Curitiba",
  description: "Tratamentos personalizados com tecnologia de ponta para cuidar da sua pele. Dra. Ana Souza, especialista em rejuvenescimento e dermatologia clínica.",
  openGraph: {
    title: "Dra. Ana Souza — Dermatologista",
    description: "Tratamentos personalizados com tecnologia de ponta para cuidar da sua pele em Curitiba, PR.",
    type: "website",
    locale: "pt_BR",
  },
  alternates: {
    canonical: "https://draanasouza.com.br", // Substituir pelo domínio real
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Schema markup
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Physician",
    "name": "Dra. Ana Souza",
    "medicalSpecialty": "Dermatology",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Curitiba",
      "addressRegion": "PR",
      "addressCountry": "BR"
    },
    "description": "Especialista em rejuvenescimento e dermatologia clínica."
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
