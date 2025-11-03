import type React from "react"
import type { Metadata } from "next"
import { Montserrat } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"

const montserrat = Montserrat({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "DevDigitale - Votre partenaire de services numériques",
  description: "Plateforme internationale de services numériques : Design, Développement, Marketing, IA et plus.",
    generator: 'v0.app',
    icons: {
      icon: "/images/Logo-removebg-preview.png",
      shortcut: "/images/Logo-removebg-preview.png",
      apple: "/images/Logo-removebg-preview.png",
    }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr">
      <body className={montserrat.className}>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
