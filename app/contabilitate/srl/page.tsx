"use client"
import React from "react"
import FinanzNavbar from "../../../navbar"
import Footer from "../../../components/footer"
import FAQ from "../../../components/faq"

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

export default function ContabilitateSrlPage() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <FinanzNavbar />
      <main className="container mx-auto py-12 px-4 mt-16 xl:mt-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-primaryColor mb-8">Contabilitate SRL</h1>

          <div className="prose prose-lg max-w-none prose-ul:list-disc prose-li:marker:text-primaryColor">
            <p className="text-xl text-gray-700 mb-8">
              Oferim servicii complete de contabilitate pentru societățile cu răspundere limitată (SRL), adaptate
              nevoilor specifice ale afacerii dumneavoastră.
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

            <h2 className="text-3xl font-bold text-primaryColor mb-6">Pachete de servicii</h2>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="border border-gray-200 rounded-lg p-6 text-center">
                <h4 className="text-xl font-semibold mb-4 text-primaryColor">Pachet Basic</h4>
                <div className="text-3xl font-bold text-primaryColor mb-4">150 RON/lună</div>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>Până la 20 operațiuni/lună</li>
                  <li>Declarații fiscale</li>
                  <li>Bilanț anual</li>
                  <li>Suport telefonic</li>
                </ul>
              </div>

              <div className="border-2 border-blue-500 rounded-lg p-6 text-center relative">
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white px-4 py-1 rounded-full text-sm">
                  Recomandat
                </div>
                <h4 className="text-xl font-semibold mb-4 text-primaryColor">Pachet Standard</h4>
                <div className="text-3xl font-bold text-primaryColor mb-4">300 RON/lună</div>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>Până la 50 operațiuni/lună</li>
                  <li>Toate serviciile Basic</li>
                  <li>Consiliere fiscală</li>
                  <li>Reprezentare ANAF</li>
                </ul>
              </div>

              <div className="border border-gray-200 rounded-lg p-6 text-center">
                <h4 className="text-xl font-semibold mb-4 text-primaryColor">Pachet Premium</h4>
                <div className="text-3xl font-bold text-primaryColor mb-4">500 RON/lună</div>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>Operațiuni nelimitate</li>
                  <li>Toate serviciile Standard</li>
                  <li>Optimizare fiscală</li>
                  <li>Consultanță strategică</li>
                </ul>
              </div>
            </div>

            {/* FAQ Section */}
          
            <FAQ items={contabilitateFaq} />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
