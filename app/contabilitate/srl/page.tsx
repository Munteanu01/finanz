"use client"
import React from "react"
import FinanzNavbar from "../../../navbar"
import Footer from "../../../components/footer"
import FAQ from "../../../components/faq"
import Prices from "../../../components/Prices.jsx"
import AccountingFeatures from "../../../components/AccountingFeatures.jsx"
import { Laptop, UserCheck, ShieldCheck  } from "lucide-react"


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
  return (
    <div className="min-h-screen overflow-x-hidden bg-white relative">
      <FinanzNavbar />

      {/* HERO SECTION CU FUNDAL + TEXT PESTE */}
      <section className="relative w-full min-h-screen flex items-center justify-center text-white">
        {/* Fundal */}
        <div className="absolute inset-0 z-0 bg-[url('/images/contabilitatefundal.jpg')] bg-cover bg-center" />
        {/* Overlay */}
        <div className="absolute inset-0 z-10 bg-black opacity-70" />

        {/* Conținutul peste imagine */}
        <div className="relative z-20 w-full  px-6 py-20 text-center">
          <div className="mb-5 md:text-sm text-xs uppercase font-bold tracking-widest text-white bg-primaryColor px-4 py-2 mt-5 rounded-md inline-block">
            Contabilitate 100% online
          </div>

          <h1 className="lg:text-5xl text-3xl font-bold text-white mb-6">
            Contabilitate SRL
          </h1>

          <p className="text-xl mb-10">
            Gestionăm contabilitatea, tu te concentrezi pe creșterea businessului
          </p>

          <div className="grid 2xl:grid-cols-3 gap-3 max-w-xl 2xl:max-w-[1350px] mx-auto justify-content-between mt-10 text-center">
            {/* Card 1 */}
            <div className="bg-white backdrop-blur-sm border border-white/20 shadow-lg rounded-2xl p-6 flex flex-col items-start text-gray-800">
              <Laptop className="text-primaryColor mx-auto w-10 h-10 mb-4" />
              <h3 className="text-xl flex mx-auto font-semibold mb-2">Contabilitate 100% online</h3>
              <p>
                Gestionează contabilitatea firmei tale 100% online, fără drumuri la birou, indiferent dacă ești în România sau în străinătate.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white backdrop-blur-sm border border-white/20 shadow-lg rounded-2xl p-6 flex flex-col items-start text-gray-800">
              <UserCheck className="text-primaryColor mx-auto w-10 h-10 mb-4" />
              <h3 className="text-xl flex mx-auto font-semibold mb-2">Contabil dedicat</h3>
              <p>
                Ai un contabil personal care îți cunoaște firma și te asistă în orice moment, pentru o gestionare eficientă și fără stres.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white backdrop-blur-sm border border-white/20 shadow-lg rounded-2xl p-6 flex flex-col items-start text-gray-800">
              <ShieldCheck className="text-primaryColor mx-auto w-10 h-10 mb-4" />
              <h3 className="text-xl flex mx-auto font-semibold mb-2">Garanția mulțumirii sau rambursare</h3>
              <p>
                Ne asigurăm că ești mulțumit de serviciile noastre, iar dacă nu, primești banii înapoi fără complicații.
              </p>
            </div>
        </div>
        </div>

      </section>
      <AccountingFeatures />
      {/* PRICES + FAQ SUB HERO */}
      <main className="w-full max-w-[1600px] mx-auto px-4 py-16 relative z-10">
        <div className="w-full max-w-[1280px] mx-auto">
          <Prices prices={prices} />
          <FAQ items={contabilitateFaq} />
        </div>
      </main>

      <Footer />
    </div>
  )
}
