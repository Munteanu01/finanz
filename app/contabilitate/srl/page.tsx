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
import { Laptop, UserCheck, ShieldCheck  } from "lucide-react"
import { motion } from "framer-motion"

const contabilitateFaq = [
  {
    question: "Pot înființa o firmă prin Finanzconsult fără să mă deplasez?",
    answer: "Da, <strong>Finanzconsult</strong> îți permite să înființezi o firmă 100% online, indiferent de locația ta, fie că ești în România sau în străinătate."
  },
  {
    question: "Ce obligații am după înființarea firmei cu Finanzconsult?",
    answer: `
      După înființare, în termen de 30 de zile, trebuie să:
      <ul>
        <li>Achiziționezi Registrul Unic de Control de la ANAF.</li>
        <li>Deschizi un cont bancar pe numele firmei.</li>
        <li>Închei un contract de servicii contabile cu <strong>Finanzconsult</strong> sau altă firmă acreditată CECCAR.</li>
        <li>Opțional, să îți procuri o ștampilă și un soft de facturare.</li>
      </ul>
    `
  },
  {
    question: "Ce taxe va trebui să plătesc după înființarea firmei?",
    answer: `
      Ca microîntreprindere, vei plăti un impozit pe venit de:
      <ul>
        <li>1% dacă ai cel puțin un angajat.</li>
        <li>3% dacă nu ai angajați.</li>
      </ul>
      De asemenea, dacă depășești plafonul de 300.000 lei cifră de afaceri anuală, va trebui să te înregistrezi ca plătitor de TVA.
    `
  },
  {
    question: "Cum mă ajută Bizfix cu actualizările legislative fiscale?",
    answer: "Bizfix îți oferă actualizări în timp real privind modificările legislative fiscale, asigurându-te că firma ta rămâne conformă cu reglementările în vigoare."
  },
  {
    question: "Cum pot comunica cu contabilul dedicat prin Finanzconsult?",
    answer: "Prin aplicația <strong>Finanzconsult</strong>, ai acces direct la contabilul tău dedicat, putând comunica rapid și eficient prin chat sau apel telefonic pentru orice nelămuriri sau servicii suplimentare."
  },
  {
    question: "Ce se întâmplă dacă nu am un sediu social pentru firmă?",
    answer: "Bizfix îți oferă opțiunea de găzduire a sediului social în 41 de locații din țară, astfel încât să poți alege cea mai convenabilă variantă pentru tine."
  },
  {
    question: "Pot să facturez gratuit după ce îmi înființez firma cu Finanzconsult?",
    answer: "Da, <strong>Finanzconsult</strong> îți pune la dispoziție un sistem de facturare gratuit, integrat cu e-Factura, permițându-ți să emiți și să încasezi facturi rapid și eficient."
  },
  {
    question: "Care sunt costurile pentru serviciile de contabilitate oferite de Finanzconsult?",
    answer: "<strong>Finanzconsult</strong> oferă diverse pachete de contabilitate, adaptate nevoilor afacerii tale. Pentru detalii specifice și oferte personalizate, te rugăm să ne contactezi direct."
  }
];

const prices = [
  {
    title: "Start",
    price: "Gratuit",
    subtitle: "Facturare integrată cu e-Factura, ideală pentru firme la început de drum.",
    details: [
      "Acces la aplicația de contabilitate",
      "Facturare rapidă și automatizată",
      "Integrare completă cu e-Factura",
      "Încasare directă cu cardul prin Stripe",
      "Emitere facturi în mai multe monede",
      "Gestionare completă a documentelor contabile",
      "Administrare și salarizare angajați",
      "Contabil dedicat și asistență directă",
      "Disponibil doar la înființarea unui SRL.",
      "Pentru firmele plătitoare de TVA, tariful crește cu 20€/lună.",
      "Pentru fiecare salariat în plus, tariful crește cu 15€/lună."
    ]
  },
  {
    title: "Basic",
    price: "€40/lună + TVA",
    subtitle: "Servicii contabile esențiale pentru startup-uri și afaceri mici.",
    details: [
      "Acces la platforma de contabilitate",
      "Gestionare până la 10 documente lunar",
      "Salarizare pentru 1 angajat inclus",
      "Facturare integrată e-Factura",
      "Import automat al facturilor de la furnizori",
      "Încasare online prin Stripe",
      "Evidență contabilă completă",
      "Contabil dedicat pentru suport personalizat",
      "Comunicare directă prin telefon și chat",
      "Pentru firmele plătitoare de TVA, tariful crește cu 20€/lună.",
      "Pentru fiecare angajat suplimentar, tariful crește cu 15€/lună."
    ]
  },
  {
    title: "Pro",
    price: "€100/lună + TVA",
    subtitle: "Ideal pentru afaceri în creștere care au nevoie de mai multă flexibilitate.",
    details: [
      "Acces complet la platforma de contabilitate",
      "Gestionare de până la 100 documente lunar",
      "Salarizare pentru 3 angajați incluși",
      "Facturare automată cu e-Factura",
      "Import rapid al facturilor de la furnizori",
      "Încasare digitală prin Stripe",
      "Administrare contabilă completă și transparentă",
      "Contabil dedicat pentru consultanță fiscală",
      "Suport prin telefon și chat în timp real",
      "Pentru firmele plătitoare de TVA, tariful crește cu 20€/lună.",
      "Pentru fiecare angajat suplimentar, tariful crește cu 15€/lună."
    ]
  },
  {
    title: "Business",
    price: "€180/lună + TVA",
    subtitle: "Pachet complet pentru firme care gestionează un volum mare de documente.",
    details: [
      "Acces premium la platforma de contabilitate",
      "Gestionare de până la 200 documente lunar",
      "Salarizare pentru 5 angajați incluși",
      "Facturare automatizată cu e-Factura",
      "Preluare automată a facturilor furnizorilor",
      "Încasare facturi direct cu cardul prin Stripe",
      "Contabilitate detaliată și rapoarte financiare",
      "Contabil dedicat pentru suport fiscal avansat",
      "Comunicare directă prin telefon și mesagerie",
      "Pentru firmele plătitoare de TVA, tariful crește cu 20€/lună.",
      "Pentru fiecare angajat suplimentar, tariful crește cu 15€/lună."
    ]
  }
]


export default function ContabilitateSrlPage() {
  const pricingTitle = "Planuri de contabilitate pentru orice etapă a businessului";
  
  return (
    <div className="min-h-screen overflow-x-hidden bg-white relative">
      <FinanzNavbar />

      {/* HERO SECTION */}
      {/* HERO SECTION */}
<section className="pt-10 relative w-full min-h-[100vh] 2xl:min-h-[70vh] flex items-center justify-center text-white">
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
        Contabilitate 100% online
      </span>
    </motion.div>

    <motion.h1
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2, duration: 0.8 }}
      className="text-4xl lg:text-6xl font-bold text-center mb-8 max-w-4xl mx-auto"
    >
      Contabilitate SRL
    </motion.h1>

    <motion.p
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4, duration: 0.6 }}
      className="text-xl lg:text-2xl text-center mb-12 max-w-3xl mx-auto"
    >
      Gestionăm contabilitatea, tu te concentrezi pe creșterea businessului
    </motion.p>

    {/* Feature cards grid */}
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
      {[
        {
          icon: <Laptop className="text-primaryColor mx-auto w-10 h-10 mb-4" />,
          title: "Contabilitate 100% online",
          description:
            "Gestionează contabilitatea firmei tale 100% online, fără drumuri la birou, indiferent dacă ești în România sau în străinătate.",
        },
        {
          icon: <UserCheck className="text-primaryColor mx-auto w-10 h-10 mb-4" />,
          title: "Contabil dedicat",
          description:
            "Ai un contabil personal care îți cunoaște firma și te asistă în orice moment, pentru o gestionare eficientă și fără stres.",
        },
        {
          icon: <ShieldCheck className="text-primaryColor mx-auto w-10 h-10 mb-4" />,
          title: "Garanția mulțumirii sau rambursare",
          description:
            "Ne asigurăm că ești mulțumit de serviciile noastre, iar dacă nu, primești banii înapoi fără complicații.",
        },
      ].map((item, index) => (
        <motion.div
          key={index}
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.15 + index * 0.05 }}
          whileHover={{ scale: 1.03 }}
          className="bg-white backdrop-blur-sm border border-white/20 shadow-lg rounded-2xl p-6 flex flex-col items-center text-center text-gray-800 transition-all duration-100 w-full max-w-[400px]"
        >
          {item.icon}
          <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
          <p>{item.description}</p>
        </motion.div>
      ))}
    </motion.div>
  </div>
</section>

      {/* Update the sections structure */}
      <section className="w-full bg-gray-50">
        <AccountingFeatures />
      </section>

      <section className="w-full bg-white">
      <div className="w-full bg-white">
        <Prices 
          prices={prices} 
          title={pricingTitle}
          formattedTitle={pricingTitle}
        />
      </div>
    </section>

      <section className="w-full bg-gray-50">
        <Features />
      </section>

      <section className="w-full bg-white">
        <FacturareDiv />
      </section>

      <section className="w-full bg-gray-50">
        <LegalSupport />
      </section>

      <section className="w-full bg-white">
        <FAQ items={contabilitateFaq} />
      </section>

      <Footer />
    </div>
  );
}

