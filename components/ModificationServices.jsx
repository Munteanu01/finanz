"use client"
import React, { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"

export default function ModificationServices({ title, subtitle, services = [] }) {
  const [focusedId, setFocusedId] = useState(null)
  const [fadeOutId, setFadeOutId] = useState(null)
  const refs = useRef({})

  // Efect doar la click pe link din navbar (nu la încărcare pagină direct pe hash)
  useEffect(() => {
    if (typeof window === "undefined") return

    const handleClick = e => {
      const anchor = e.target.closest("a[href^='/modificari/pfa#']")
      if (anchor) {
        const hash = anchor.hash.replace("#", "")
        if (services.some(s => s.id === hash)) {
          setFocusedId(hash)
          refs.current[hash]?.scrollIntoView({ behavior: "smooth", block: "center" })
          // Start fade out after 3s
          setTimeout(() => {
            setFadeOutId(hash)
            setFocusedId(null)
            setTimeout(() => setFadeOutId(null), 700) // 0.7s fade out
          }, 3000)
        }
      }
    }

    window.addEventListener("click", handleClick)
    return () => window.removeEventListener("click", handleClick)
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
                ${focusedId === service.id ? "border-4 border-transparent border-gradient-to-r from-blue-400 to-cyan-400 border-animate" : fadeOutId === service.id ? "border-4 border-blue-400 border-gradient-to-r from-blue-400 to-cyan-400 border-fade" : "border border-gray-100"}
              `}
              style={
                (focusedId === service.id || fadeOutId === service.id)
                  ? { borderImage: "linear-gradient(to right, #60a5fa, #22d3ee) 1" }
                  : {}
              }
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
        .border-animate {
          transition: border-color 0.7s, border-image 0.7s, opacity 0.7s;
          opacity: 1;
        }
        .border-fade {
          opacity: 0;
          transition: opacity 0.7s;
        }
      `}</style>
    </div>
  )
}