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
import Hero from "../../../components/HeroPages"
import { ReceiptText, FileText, BarChart2, UserCheck } from "lucide-react"

const contabilitateFaq = [
  {
    question: "Pot înființa o firmă prin Finanzconsult fără să mă deplasez?",
    answer: "Da, <strong>Finanzconsult</strong> îți permite să înființezi o firmă 100% online, indiferent de locația ta, fie că ești în România sau în străinătate.",
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
    `,
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
    `,
  },
  {
    question: "Cum mă ajută Bizfix cu actualizările legislative fiscale?",
    answer: "Bizfix îți oferă actualizări în timp real privind modificările legislative fiscale, asigurându-te că firma ta rămâne conformă cu reglementările în vigoare.",
  },
  {
    question: "Cum pot comunica cu contabilul dedicat prin Finanzconsult?",
    answer: "Prin aplicația <strong>Finanzconsult</strong>, ai acces direct la contabilul tău dedicat, putând comunica rapid și eficient prin chat sau apel telefonic pentru orice nelămuriri sau servicii suplimentare.",
  },
  {
    question: "Ce se întâmplă dacă nu am un sediu social pentru firmă?",
    answer: "Bizfix îți oferă opțiunea de găzduire a sediului social în 41 de locații din țară, astfel încât să poți alege cea mai convenabilă variantă pentru tine.",
  },
  {
    question: "Pot să facturez gratuit după ce îmi înființez firma cu Finanzconsult?",
    answer: "Da, <strong>Finanzconsult</strong> îți pune la dispoziție un sistem de facturare gratuit, integrat cu e-Factura, permițându-ți să emiți și să încasezi facturi rapid și eficient.",
  },
  {
    question: "Care sunt costurile pentru serviciile de contabilitate oferite de Finanzconsult?",
    answer: "<strong>Finanzconsult</strong> oferă diverse pachete de contabilitate, adaptate nevoilor afacerii tale. Pentru detalii specifice și oferte personalizate, te rugăm să ne contactezi direct.",
  },
]

const accountingFeaturesTitle = (
  <>
    Ne ocupăm de{" "}
    <span className="text-primaryColor bg-clip-text animate-text">contabilitate</span>, tu te concentrezi pe{" "}
    <span className="text-primaryColor bg-clip-text animate-text">afacerea ta</span>
  </>
)

const accountingFeatures = [
  {
    icon: <ReceiptText className="w-10 h-10 text-primaryColor mb-4" />,
    title: "Emite facturi cu un click",
    description: "Toate facturile ajung direct la contabilul tău și sunt integrate automat în e-Factura.",
  },
  {
    icon: <FileText className="w-10 h-10 text-primaryColor mb-4" />,
    title: "Adaugă rapid cheltuieli",
    description: "This is just a simple text made for the demos to show the available features.",
  },
  {
    icon: <BarChart2 className="w-10 h-10 text-primaryColor mb-4" />,
    title: "Deții evidența taxelor la zi",
    description: "Vizualizezi în timp real ce taxe ai de plătit și ai acces la registrele contabile.",
  },
  {
    icon: <UserCheck className="w-10 h-10 text-primaryColor mb-4" />,
    title: "Contabil dedicat disponibil",
    description: "Comunici direct cu contabilul tău dedicat pentru orice întrebare sau serviciu nou.",
  },
]

const prices = [
  {
    title: "Start",
    price: "Gratuit",
    subtitle: "Facturare integrată cu e-Factura, perfectă pentru SRL-uri nou-înființate.",
    details: [
      "Acces gratuit la aplicația de facturare",
      "Emitere rapidă de facturi și proforme",
      "Integrare automată cu e-Factura",
      "Încasare online prin Stripe",
      "Facturare în mai multe monede",
      "Evidență contabilă digitală completă",
      "Salarizare și administrare personal",
      "Contabil dedicat pentru consultanță fiscală",
      "Comunicare directă prin chat și telefon",
    ],
  },
  {
    title: "Basic",
    price: "€50/lună + TVA",
    subtitle: "Servicii contabile esențiale pentru SRL-uri aflate la început de drum.",
    details: [
      "Acces complet la platforma de contabilitate",
      "Gestionare de până la 20 documente lunar",
      "Salarizare pentru 2 angajați incluși",
      "Facturare automată cu e-Factura",
      "Import rapid al facturilor de la furnizori",
      "Încasare facturi cu cardul prin Stripe",
      "Contabilitate clară și actualizată",
      "Contabil dedicat pentru suport personalizat",
    ],
  },
  {
    title: "Pro",
    price: "€100/lună + TVA",
    subtitle: "Ideal pentru SRL-uri cu activitate intensă și gestionare avansată a documentelor.",
    details: [
      "Acces premium la aplicația de contabilitate",
      "Gestionare de până la 200 documente lunar",
      "Salarizare pentru 5 angajați incluși",
      "Facturare rapidă, integrată cu e-Factura",
      "Preluare automată a facturilor furnizorilor",
      "Încasare digitală prin Stripe",
      "Evidență contabilă completă și detaliată",
      "Contabil dedicat pentru consultanță fiscală",
    ],
  },
]

export default function ContabilitateSrlPage() {
  const pricingTitle = "Planuri de contabilitate pentru orice etapă a businessului"

  return (
    <div className="min-h-screen overflow-x-hidden bg-white relative">
      <FinanzNavbar />

      {/* Hero Section */}
      <Hero
        backgroundImage="/images/contabilitatefundal.jpg"
        badge="Contabilitate 100% online"
        title="Contabilitate SRL"
        subtitle="Gestionăm contabilitatea, tu te concentrezi pe creșterea businessului"
        cards={[
          {
            icon: <ReceiptText className="w-10 h-10 text-primaryColor mb-4" />,
            title: "Contabilitate 100% online",
            description: "Gestionează contabilitatea firmei tale 100% online, fără drumuri la birou, indiferent dacă ești în România sau în străinătate.",
          },
          {
            icon: <UserCheck className="w-10 h-10 text-primaryColor mb-4" />,
            title: "Contabil dedicat",
            description: "Ai un contabil personal care îți cunoaște firma și te asistă în orice moment, pentru o gestionare eficientă și fără stres.",
          },
          {
            icon: <BarChart2 className="w-10 h-10 text-primaryColor mb-4" />,
            title: "Garanția mulțumirii sau rambursare",
            description: "Ne asigurăm că ești mulțumit de serviciile noastre, iar dacă nu, primești banii înapoi fără complicații.",
          },
        ]}
      />

      {/* Content Sections */}
      <section className="w-full bg-gray-50">
        <AccountingFeatures title={accountingFeaturesTitle} features={accountingFeatures} />
      </section>

      <section className="w-full bg-white">
        <div className="w-full bg-white">
          <Prices prices={prices} title={pricingTitle} formattedTitle="Planuri de contabilitate" />
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
  )
}

