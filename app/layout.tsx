import type React from "react"
import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import "./globals.css"
import Script from "next/script"
import Head from "next/head";

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
     <Script
          id="ze-snippet"
          src="https://static.zdassets.com/ekr/snippet.js?key=f7ef1390-f6bc-4931-8834-ab47e867f6db"
          strategy="afterInteractive"
        />
        <Head>
          <title>Finanz Consult</title>
          <meta name="description" content="Servicii de contabilitate și consultanță online." />
          <link rel="icon" href="/favicon.ico" />
        </Head>
      <body className={`${poppins.variable} font-sans`}>{children}</body>
    </html>
  )
}
