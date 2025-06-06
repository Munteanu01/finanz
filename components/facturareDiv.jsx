"use client"
import React, { useState } from "react"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export default function FacturareDiv() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div 
      className="w-full relative"
      style={{
        background: `
          linear-gradient(
            to bottom,
            rgba(255, 255, 255, 0.95),
            rgba(255, 255, 255, 0.95)
          ),
          url(/svg1.svg)
        `,
        backgroundSize: 'cover',
        backgroundPosition: 'right top',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="w-full py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <section className="w-full py-12 lg:py-16 bg-gradient-to-br from-white/80 to-gray-50/80 rounded-2xl shadow-lg backdrop-blur-sm relative overflow-hidden">
            <div className="max-w-6xl mx-auto px-6 flex flex-col xl:flex-row items-center gap-16 relative z-10">
              {/* Text Content */}
              <div className="xl:flex-1 max-w-xl mx-auto xl:mx-0">
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="mb-8"
                >
                  <div
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    className="inline-flex flex-wrap text-3xl sm:text-4xl font-extrabold text-primaryColor gap-x-2 gap-y-2 leading-tight"
                  >
                    <span className="mr-1">Facturare</span>
                    <HighlightedText isHovered={isHovered}>rapidă </HighlightedText>
                    <HighlightedText isHovered={isHovered}>și complet integrată</HighlightedText>
                    <div className="basis-full h-0" />
                   
                  </div>
                </motion.h2>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-gray-700 text-lg leading-relaxed mb-10"
                >
                  Emiți facturi fără costuri suplimentare, le trimiți direct prin e-Factura 
                  și încasezi rapid, economisind timp și bani pentru afacerea ta.
                </motion.p>

                <Link href="https://finanzconsult.app/">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center gap-3 px-7 py-4 bg-primaryColor text-white 
                      font-semibold rounded-xl shadow-lg hover:bg-orange-600 transition-all duration-300"
                  >
                    Aplicație <ArrowRight className="w-5 h-5" />
                  </motion.button>
                </Link>
              </div>

              {/* Images */}
              <div className="hidden xl:flex xl:flex-1 justify-end gap-6 max-w-xl">
                <motion.img
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  src="/laptop1.jpg"
                  alt="Laptop aplicație contabilitate"
                  className="rounded-2xl shadow-xl w-64 hover:scale-105 transition-all duration-300"
                />
                <motion.img
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  src="/3.jpg"
                  alt="Telefon aplicație contabilitate"
                  className="rounded-2xl shadow-xl w-64 -translate-x-12 -translate-y-12 
                    hover:scale-105 transition-all duration-300"
                />
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

// Helper component for highlighted text
function HighlightedText({ children, isHovered }) {
  return (
    <span className="relative">
      <span className="relative z-10">{children}</span>
      <span
        className={`absolute left-0 bottom-0 w-full bg-[#FE6309] transition-all duration-300 
          z-0 rounded-sm ${isHovered ? "h-full" : "h-[6px]"}`}
      />
    </span>
  )
}
