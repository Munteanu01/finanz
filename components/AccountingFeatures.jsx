"use client"
import React from "react"
import {
  FileText,
  ReceiptText,
  BarChart2,
  Headset
} from "lucide-react"

export default function AccountingFeatures() {
  const features = [
    {
      icon: <ReceiptText className="w-10 h-10 text-primaryColor mb-4" />,
      title: "Emite facturi cu un click",
      description: "Toate facturile ajung direct la contabilul tău și sunt integrate automat în e-Factura."
    },
    {
      icon: <FileText className="w-10 h-10 text-primaryColor mb-4" />,
      title: "Adaugă rapid cheltuieli",
      description: "Încarci bonuri, facturi și cheltuieli din aplicație – contabilul tău le primește instant."
    },
    {
      icon: <BarChart2 className="w-10 h-10 text-primaryColor mb-4" />,
      title: "Deții evidența taxelor la zi",
      description: "Vizualizezi în timp real ce taxe ai de plătit și ai acces la registrele contabile."
    },
    {
      icon: <Headset className="w-10 h-10 text-primaryColor mb-4" />,
      title: "Contabil dedicat disponibil",
      description: "Comunici direct cu contabilul tău dedicat pentru orice întrebare sau serviciu nou."
    }
  ]

  return (
    <section className="w-full max-w-6xl mx-auto px-4 mt-20 ">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-20 pt-10">
        Ne ocupăm de contabilitate, tu te concentrezi pe afacerea ta
      </h2>
      <div className="grid lg:grid-cols-2 2xl:grid-cols-4 gap-6 justify-center">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex flex-col border border-gray-200 rounded-lg  p-8 min-h-[260px]"
          >
            {feature.icon}
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-700">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
