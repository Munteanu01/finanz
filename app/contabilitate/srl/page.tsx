"use client"
import React from "react"
import FinanzNavbar from "../../../navbar"
import Footer from "../../../components/footer"
import FAQ from "../../../components/faq"
import Prices from "../../../components/Prices.jsx"

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

      {/* Background image container, 100vh height, covers entire area */}
      <div className="absolute top-0 left-0 w-full h-[100vh] mb-20">
  {/* Imaginea */}
  <div className="w-full h-full bg-[url('/images/contabilitatefundal.jpg')] bg-cover bg-center" />

  {/* Overlay negru semi-transparent */}
  <div className="absolute top-0 left-0 w-full h-full bg-black opacity-70" />

  
</div>

      <main className="w-full max-w-[1600px] mx-auto py-12 px-4 mt-16 xl:mt-14 relative z-10">
        <div className="w-full max-w-[1280px] mx-auto min-h-[100vh] text-center pt-10">
        <div className="text-center mb-5 text-sm uppercase font-bold tracking-widest text-white  bg-primaryColor px-4 py-2 rounded-md inline-block">
  Contabilitate 100% online
</div>

          <h1 className="lg:text-5xl text-3xl font-bold text-white text-center mb-8 xl:pl-2">
            Contabilitate SRL
          </h1>

          <div className="prose text-left prose-lg max-w-none prose-ul:list-disc prose-li:marker:text-primaryColor">
            <p className="text-xl text-center xl:px-10 px-5 text-white mb-8">
              Gestionăm contabilitatea, tu te concentrezi pe creșterea businessului
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-2xl font-semibold text-primaryColor mb-4">Servicii incluse</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Întocmirea bilanțului contabil</li>
                  <li>• Declarații fiscale lunare și anuale</li>
                  <li>• Gestiunea registrelor contabile</li>
                  <li>• Consiliere fiscală permanentă</li>
                  <li>• Reprezentare în relația cu ANAF</li>
                  <li>• Optimizare fiscală</li>
                </ul>
              </div>

              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="text-2xl font-semibold text-green-900 mb-4">Avantaje</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Conformitate 100% cu legislația</li>
                  <li>• Reducerea costurilor administrative</li>
                  <li>• Acces la experți contabili</li>
                  <li>• Raportare în timp real</li>
                  <li>• Suport pentru audit</li>
                  <li>• Consultanță strategică</li>
                </ul>
              </div>
            </div>

            <div className="w-full">
              <Prices prices={prices} />
            </div>

            <FAQ items={contabilitateFaq} />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}