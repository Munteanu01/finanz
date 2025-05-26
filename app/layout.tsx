import type React from "react"
import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import "./globals.css"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
})

export const metadata: Metadata = {
  title: "FINANZ Consult - Servicii de Contabilitate și Consultanță",
  description:
    "Servicii complete de contabilitate, înființări companii, modificări și consultanță fiscală în București.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ro">
      <body className={`${poppins.variable} font-sans`}>{children}</body>
    </html>
  )
}
