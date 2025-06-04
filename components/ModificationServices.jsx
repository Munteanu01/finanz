"use client"
import React, { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react" // sau alt icon arrow dacă folosești altă librărie

export default function ModificationServices({ title, subtitle, services = [] }) {
  const [focusedId, setFocusedId] = useState(null)
  const refs = useRef({})

  // Înălțimea navbarului (ajustează dacă ai altă valoare)
  const NAVBAR_HEIGHT = 80

  // Verifică hash-ul la încărcarea paginii
  useEffect(() => {
    if (typeof window === "undefined") return

    const checkHashOnLoad = () => {
      const hash = window.location.hash.replace("#", "")
      if (hash && services.some(s => s.id === hash)) {
        setFocusedId(hash)
        setTimeout(() => {
          const el = refs.current[hash]
          if (el) {
            const rect = el.getBoundingClientRect()
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop
            window.scrollTo({
              top: rect.top + scrollTop - NAVBAR_HEIGHT - 50,
              behavior: "smooth"
            })
          }
        }, 500) // Mai mult timp pentru ca elementele să se încarce
        // Remove effect after 5s
        setTimeout(() => {
          setFocusedId(null)
        }, 5000)
      }
    }

    // Verifică imediat și după ce componenta s-a încărcat complet
    checkHashOnLoad()
    setTimeout(checkHashOnLoad, 100)
  }, [services])

  useEffect(() => {
    if (typeof window === "undefined") return

    const handleClick = e => {
      console.log("Click detected:", e.target) // Debug
      // Caută linkuri pentru ambele tipuri de pagini
      const anchor = e.target.closest("a[href^='/modificari/pfa#']") || 
                     e.target.closest("a[href^='/modificari/srl#']")
      console.log("Anchor found:", anchor) // Debug
      
      if (anchor) {
        const hash = anchor.hash.replace("#", "")
        console.log("Hash:", hash) // Debug
        console.log("Services:", services.map(s => s.id)) // Debug
        
        if (services.some(s => s.id === hash)) {
          console.log("Service found, setting focus") // Debug
          
          // Verifică dacă suntem pe aceeași pagină
          const currentPath = window.location.pathname
          const linkPath = new URL(anchor.href, window.location.origin).pathname
          
          if (currentPath === linkPath) {
            // Suntem pe aceeași pagină, previne navigarea și aplică efectul
            e.preventDefault()
            console.log("Same page, applying focus effect") // Debug
            
            setFocusedId(hash)
            setTimeout(() => {
              const el = refs.current[hash]
              console.log("Element to scroll to:", el) // Debug
              if (el) {
                const rect = el.getBoundingClientRect()
                const scrollTop = window.pageYOffset || document.documentElement.scrollTop
                console.log("Scrolling to:", rect.top + scrollTop - NAVBAR_HEIGHT - 50) // Debug
                window.scrollTo({
                  top: rect.top + scrollTop - NAVBAR_HEIGHT - 50,
                  behavior: "smooth"
                })
              }
            }, 100)
            // Remove effect after 5s
            setTimeout(() => {
              setFocusedId(null)
            }, 5000)
          } else {
            // Lăsăm navigarea să se întâmple normal pentru pagini diferite
            console.log("Different page, allowing navigation") // Debug
          }
        }
      }
    }

    // Adaugă listener pentru a prinde click-urile din navbar și din pagină
    document.addEventListener("click", handleClick, true)
    return () => document.removeEventListener("click", handleClick, true)
  }, [services])

  // Listener separat pentru schimbările de hash (pentru navigarea directă)
  useEffect(() => {
    if (typeof window === "undefined") return

    const handleHashChange = () => {
      const hash = window.location.hash.replace("#", "")
      if (hash && services.some(s => s.id === hash)) {
        setFocusedId(hash)
        setTimeout(() => {
          const el = refs.current[hash]
          if (el) {
            const rect = el.getBoundingClientRect()
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop
            window.scrollTo({
              top: rect.top + scrollTop - NAVBAR_HEIGHT - 50,
              behavior: "smooth"
            })
          }
        }, 100)
        // Remove effect after 5s
        setTimeout(() => {
          setFocusedId(null)
        }, 5000)
      }
    }

    window.addEventListener("hashchange", handleHashChange)
    return () => window.removeEventListener("hashchange", handleHashChange)
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
              whileHover={focusedId === service.id ? {} : { scale: 1.03 }}
              className={`flex flex-col bg-white shadow-lg rounded-2xl p-8 min-h-[260px] transition-transform duration-300 w-full max-w-md md:w-[calc(50%-12px)] xl:w-[calc(33.333%-16px)]
                ${focusedId === service.id ? "pulse-glow no-hover" : "hover-effect"}
              `}
            >
              <h1 className="text-xl font-bold text-primaryColor mb-4 bg-[#E8EBFA] px-3 py-1 rounded-lg w-fit">
                {service.price}
              </h1>
              <h3 className="text-3xl font-bold mb-4 text-gray-700">
                {service.title}
              </h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                {service.description}
              </p>
              <a
                href="/contact"
                className="mt-auto inline-flex items-center justify-between gap-4 bg-primaryColor hover:bg-secundaryColor  text-white font-semibold py-3 px-8 rounded-2xl shadow transition-all duration-300 text-base"
                style={{ fontSize: "1.05rem", fontWeight: 600 }}
              >
                <span className="text-left flex-1">Află mai multe</span>
                <ArrowRight className="w-7 h-7" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
      <style jsx global>{`
        .pulse-glow {
          animation: pulse-glow 4s cubic-bezier(0.4,0,0.2,1);
          z-index: 1;
          position: relative;
          border: 5px solid #F26419 !important;
          box-shadow: none !important;
          transition: border-color 0.25s cubic-bezier(0.4,0,0.2,1);
        }
        .pulse-glow::after {
          display: none;
        }
        @keyframes pulse-glow {
          0%,
          100%,
          50%,
          20% {
            border-color: #F26419;
          }
        }
        .hover-effect {
          transition:
            transform 0.15s cubic-bezier(0.4,0,0.2,1),
            box-shadow 0.15s cubic-bezier(0.4,0,0.2,1);
          box-shadow: 0 4px 16px 0 #1e293b22;
          border: 2px solid #e5e7eb;
          position: relative;
          z-index: 1;
        }
        .hover-effect:hover {
          transform: scale(1.03);
          box-shadow: none;
          border: 2px solid #e5e7eb;
          transition:
            transform 0.15s cubic-bezier(0.4,0,0.2,1),
            box-shadow 0.12s cubic-bezier(0.4,0,0.2,1);
        }
        .no-hover {
          transform: scale(1.01) !important;
        }
        .no-hover:hover {
          transform: scale(1.01) !important;
        }
      `}</style>
    </div>
  )
}