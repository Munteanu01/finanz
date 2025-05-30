"use client"
import React, { useState } from "react"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
export default function FacturareDiv() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <section className="w-full py-24 bg-gradient-to-br rounded-xl relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 flex flex-col xl:flex-row items-center gap-16">
        {/* Text Content */}
        <div className="xl:flex-1 max-w-xl mx-auto xl:mx-0">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
            <div
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              className="inline-flex flex-wrap text-3xl sm:text-4xl font-extrabold text-primaryColor/90 gap-x-2 gap-y-3 leading-tight"
            >
              <span className="mr-1">Facturare</span>

              {/* gratuită */}
              <span className="relative">
                <span className="relative z-10">gratuită,</span>
                <span
                  className={`absolute left-0 bottom-0 w-full bg-[#FE6309] transition-all duration-300 z-0 rounded-sm ${
                    isHovered ? "h-full" : "h-[6px]"
                  }`}
                />
              </span>

              {/* rapidă și complet */}
              <span className="relative whitespace-nowrap">
                <span className="relative z-10">rapidă și complet</span>
                <span
                  className={`absolute left-0 bottom-0 w-full bg-[#FE6309] transition-all duration-300 z-0 rounded-sm ${
                    isHovered ? "h-full" : "h-[6px]"
                  }`}
                />
              </span>

              {/* break line before integrată */}
              <div className="basis-full h-0" />

              {/* integrată */}
              <span className="relative">
                <span className="relative z-10">integrată</span>
                <span
                  className={`absolute left-0 bottom-0 w-full bg-[#FE6309] transition-all duration-300 z-0 rounded-sm ${
                    isHovered ? "h-full" : "h-[6px]"
                  }`}
                />
              </span>
            </div>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-700 text-lg leading-relaxed max-w-md mb-10"
          >
            Emiți facturi fără costuri suplimentare, le trimiți direct prin e-Factura și încasezi rapid, economisind timp și bani pentru afacerea ta.
          </motion.p>
          <Link   href="https://online-srlconsult.ro/">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          
            className="inline-flex items-center gap-3 px-7 py-3 bg-primaryColor text-white font-semibold rounded-lg shadow-lg hover:bg-orange-600 transition-colors duration-300"
          >
           Aplicație<ArrowRight size={22} />
          </motion.button>
          </Link>
        </div>

        {/* Images only on xl */}
        <div className="hidden xl:flex xl:flex-1 justify-end gap-6 max-w-xl">
          <img
            src="/laptop1.jpg"
            alt="Laptop aplicație contabilitate"
            className="rounded-2xl shadow-xl w-64 hover:scale-105 transition-transform duration-300"
          />
          <img
            src="/laptop2.jpg"
            alt="Telefon aplicație contabilitate"
            className="rounded-2xl shadow-xl w-64 -translate-x-12 -translate-y-12 hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>
    </section>
  )
}
