"use client"
import React from "react"
import FinanzNavbar from "../../../navbar"
import Footer from "../../../components/footer"
import FAQ from "../../../components/faq"
import Prices from "../../../components/Prices.jsx"
import AccountingFeatures from "../../../components/firstFeatures.jsx"
import FacturareDiv from "../../../components/facturareDiv.jsx"
import Features from "../../../components/secondFeatures.jsx"
import LegalSupport from "../../../components/LegalSupport.jsx"
import { Laptop, UserCheck, ShieldCheck } from "lucide-react"
import { motion } from "framer-motion"
import ProcesSimplificat from "../../../components/ProcesSimplificat"
import PasiInfiintare from "../../../components/PasiInfiintare";

const infiintariFaq = [
  {
    question: "Cât durează înființarea unui SRL?",
    answer: "În mod normal, procedura durează între 3-5 zile lucrătoare de la depunerea dosarului complet."
  },
  {
    question: "Ce documente sunt necesare pentru înființarea unui SRL?",
    answer: `Pentru înființarea unui SRL sunt necesare:
      <ul>
        <li>Copie CI/Pașaport pentru asociați</li>
        <li>Contract sediu social</li>
        <li>Specimen de semnătură</li>
        <li>Declarații pe propria răspundere</li>
      </ul>`
  },
  {
    question: "Care sunt costurile totale pentru înființarea unui SRL?",
    answer: "Costul total pentru înființarea unui SRL este de 270€, care include toate taxele și procedurile necesare."
  }
];

const prices = [
  {
    title: "Ideal pentru start",
    price: "€270",
    subtitle: "€45/lună x 6 luni",
    details: [
      "Până la 10 documente lunar",
      "Facturare integrată cu e-Factura",
      "Preluare automată facturi furnizori din e-Factura",
      "Încasare facturi cu cardul prin Stripe",
      "Evidență contabilă completă",
      "Contabil dedicat firmei",
      "Comunicare directă cu contabilul prin telefon sau mesagerie",
      "Pentru firmele plătitoare de TVA tariful crește cu 20€/lună"
    ]
  },
  {
    title: "Business",
    price: "€330",
    subtitle: "€55/lună x 6 luni",
    details: [
      "Până la 20 documente lunar",
      "Facturare integrată cu e-Factura",
      "Preluare automată facturi furnizori din e-Factura",
      "Încasare facturi cu cardul prin Stripe",
      "Evidență contabilă completă",
      "Salarizare și administrare personal",
      "Contabil dedicat firmei",
      "Comunicare directă cu contabilul prin telefon sau mesagerie",
      "Pentru firmele plătitoare de TVA tariful crește cu 20€/lună"
    ]
  },
  {
    title: "Professional",
    price: "€570",
    subtitle: "€95/lună x 6 luni",
    details: [
      "Până la 50 documente lunar",
      "Facturare integrată cu e-Factura",
      "Preluare automată facturi furnizori din e-Factura",
      "Încasare facturi cu cardul prin Stripe",
      "Evidență contabilă completă",
      "Salarizare și administrare personal",
      "Contabil dedicat firmei",
      "Comunicare directă cu contabilul prin telefon sau mesagerie",
      "Pentru firmele plătitoare de TVA tariful crește cu 20€/lună"
    ]
  }
];

export default function InfiintareSrlPage() {
  const heroFeatures = [
    {
      title: "Înființare rapidă 100% online",
      description: "Deschide-ți firma fără drumuri la instituții! Tot procesul se desfășoară online, indiferent unde te afli – în România sau în străinătate.",
      icon: <Laptop className="w-12 h-12 mb-4 text-primaryColor" />
    },
    {
      title: "Documente procesate în 30 min",
      description: "Ne ocupăm rapid de actele necesare, astfel încât firma ta să fie înregistrată fără întârzieri. Tot ce trebuie să faci este să ne trimiți documentele!",
      icon: <UserCheck className="w-12 h-12 mb-4 text-primaryColor" />
    },
    {
      title: "Garanția mulțumirii sau rambursare",
      description: "Ai siguranța unui serviciu eficient! Dacă nu ești mulțumit de proces, îți returnăm banii fără întrebări.",
      icon: <ShieldCheck className="w-12 h-12 mb-4 text-primaryColor" />
    }
  ];

  const pricingTitle = "Alege un abonament de contabilitate și înființarea firmei este gratuită!";
  const formattedTitle = (
    <div className="text-center leading-relaxed">
      Alege un abonament de contabilitate și înființarea firmei este{' '}
      <span className="bg-secundaryColor text-white px-2 py-1 rounded">
        gratuită !
      </span>
    </div>
  );
  
  return (
    <div className="min-h-screen overflow-x-hidden bg-white relative">
      <FinanzNavbar />

      {/* Hero Section */}
      <section className="pt-10 relative w-full min-h-[100vh]">
        <div className="absolute inset-0 z-0 bg-[url('/images/contabilitatefundal.jpg')] bg-cover bg-center" />
        <div className="absolute inset-0 z-10 bg-black opacity-70" />

        <div className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex justify-center mb-8"
          >
            <span className="text-sm md:text-base uppercase font-bold tracking-wider text-white bg-primaryColor/80 px-6 py-2 rounded-md">
              Înființare SRL 100% online
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-4xl lg:text-6xl text-white font-bold text-center mb-8 max-w-4xl mx-auto"
          >
            Înființare SRL
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-xl lg:text-2xl text-center mb-12 max-w-3xl mx-auto text-white"
          >
           Înființează-ți SRL-ul simplu, rapid și fără bătăi de cap, <span className="block">de oriunde te afli.</span> 
          </motion.p>

          {/* Feature cards */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: {
                transition: { staggerChildren: 0.15 }
              }
            }}
            className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-7xl mx-auto justify-items-center"
          >
            {heroFeatures.map((feature, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0 }
                }}
                transition={{ duration: 0.15 + index * 0.05 }}
                whileHover={{ scale: 1.03 }}
                className="bg-white backdrop-blur-sm border border-white/20 shadow-lg rounded-2xl p-6 flex flex-col items-center text-center text-gray-800 transition-all duration-100 w-full max-w-[400px]"
              >
                {feature.icon}
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p>{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Adaugă secțiunea Pași după Hero */}
      <PasiInfiintare />

      {/* Proces Simplificat Section */}
      <ProcesSimplificat />

      {/* Keep only these sections */}
      <section className="w-full bg-white">
        <Prices 
          prices={prices} 
          title={pricingTitle}
          formattedTitle={formattedTitle}
        />
      </section>

      <section className="w-full bg-white">
        <FAQ items={infiintariFaq} />
      </section>

      <Footer />
    </div>
  );
}
