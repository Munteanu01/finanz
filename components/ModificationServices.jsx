"use client"
import React, { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"

export default function ModificationServices({ title, subtitle, services = [] }) {
  const [focusedId, setFocusedId] = useState(null)
  const refs = useRef({})

  // Înălțimea navbarului (ajustează dacă ai altă valoare)
  const NAVBAR_HEIGHT = 80

  useEffect(() => {
    if (typeof window === "undefined") return

    const handleClick = e => {
      console.log("Click detected:", e.target) // Debug
      const anchor = e.target.closest("a[href^='/modificari/pfa#']")
      console.log("Anchor found:", anchor) // Debug
      
      if (anchor) {
        e.preventDefault() // Previne navigarea default
        const hash = anchor.hash.replace("#", "")
        console.log("Hash:", hash) // Debug
        console.log("Services:", services.map(s => s.id)) // Debug
        
        if (services.some(s => s.id === hash)) {
          console.log("Service found, setting focus") // Debug
          setFocusedId(hash)
          setTimeout(() => {
            const el = refs.current[hash]
            console.log("Element to scroll to:", el) // Debug
            if (el) {
              const rect = el.getBoundingClientRect()
              const scrollTop = window.pageYOffset || document.documentElement.scrollTop
              console.log("Scrolling to:", rect.top + scrollTop - NAVBAR_HEIGHT - 420) // Debug
              window.scrollTo({
                top: rect.top + scrollTop - NAVBAR_HEIGHT - 50,
                behavior: "smooth"
              })
            }
          }, 100) // Mărit la 100ms
          // Remove effect after 5s
          setTimeout(() => {
            setFocusedId(null)
          }, 5000)
        }
      }
    }

    // Adaugă listener și pe document pentru a prinde click-urile din navbar
    document.addEventListener("click", handleClick, true)
    return () => document.removeEventListener("click", handleClick, true)
  }, [services])

  return (
    <div className="w-full py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-6 text-gray-700"
        >
          {title}
        </motion.h2>
        
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="text-lg text-center mb-16 text-gray-600 max-w-4xl mx-auto"
          >
            {subtitle}
          </motion.p>
        )}

        <div className="flex flex-wrap justify-center gap-6">
          {services && services.length > 0 && services.map((service, index) => (
            <motion.div
              key={service.title}
              id={service.id}
              ref={el => (refs.current[service.id] = el)}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03 }}
              className={`flex flex-col bg-white shadow-xl rounded-2xl p-8 min-h-[260px] transition-transform duration-300 w-full max-w-md md:w-[calc(50%-12px)] xl:w-[calc(33.333%-16px)]
                ${focusedId === service.id ? "pulse-glow" : ""}
              `}
              
            >
              <h1 className="text-xl font-bold text-primaryColor mb-4 bg-[#E8EBFA] px-3 py-1 rounded-lg w-fit">
                {service.price}
              </h1>
              <h3 className="text-3xl font-bold mb-4 text-gray-700">
                {service.title}
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
      <style jsx global>{`
        .pulse-glow {
          animation: pulse-glow 5s ease-in-out;
        }
        @keyframes pulse-glow {
          0% {
            transform: scale(1);
            box-shadow: 0 0 3px #60a5fa55, 0 0 6px #60a5fa55;
          }
          10% {
            transform: scale(1.005);
            box-shadow: 0 0 8px #60a5fa77, 0 0 12px #60a5fa77;
          }
          25% {
            transform: scale(1.008);
            box-shadow: 0 0 12px #60a5fa88, 0 0 18px #60a5fa88;
          }
          50% {
            transform: scale(1.01);
            box-shadow: 0 0 15px #60a5fa99, 0 0 22px #60a5fa99;
          }
          75% {
            transform: scale(1.008);
            box-shadow: 0 0 12px #60a5fa88, 0 0 18px #60a5fa88;
          }
          90% {
            transform: scale(1.005);
            box-shadow: 0 0 8px #60a5fa77, 0 0 12px #60a5fa77;
          }
          100% {
            transform: scale(1);
            box-shadow: 0 0 3px #60a5fa55, 0 0 6px #60a5fa55;
          }
        }
      `}</style>
    </div>
  )
}