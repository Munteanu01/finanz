"use client"
import React from "react"
import {
  FileText,
  ReceiptText,
  BarChart2,
  Headset
} from "lucide-react"
import { motion } from "framer-motion"

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
    <div className="w-full py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Decorativ background blur cercuri */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute w-96 h-96 bg-primaryColor/20 rounded-full blur-[150px] -top-20 -left-20" />
          <div className="absolute w-96 h-96 bg-primaryColor/10 rounded-full blur-[150px] bottom-0 right-0" />
        </div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-20 text-gray-700"
        >
          Ne ocupăm de{" "}
          <span className=" text-primaryColor bg-clip-text animate-text">
            contabilitate
          </span>
          , tu te concentrezi pe{" "}
          <span className=" text-primaryColor bg-clip-text animate-text">
            afacerea ta
          </span>
        </motion.h2>

        <div className="grid lg:grid-cols-2 2xl:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03 }}
              className="flex flex-col bg-white shadow-xl rounded-2xl p-8 min-h-[260px] transition-transform duration-300"
            >
              {feature.icon}
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-700">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
