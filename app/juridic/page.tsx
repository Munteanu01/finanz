import React from "react"
import FinanzNavbar from "../../navbar"
import Footer from "../../components/footer"

export default function JuridicPage() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <FinanzNavbar />
      <main className="container mx-auto py-12 px-4 mt-16 xl:mt-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-primaryColor mb-8">Juridic</h1>
          <div className="prose prose-lg max-w-none">
            <ul className="list-disc pl-6 space-y-2 text-gray-800">
              <li>Consultanță juridică generală</li>
              <li>Redactarea și revizuirea de contracte de catre avocați și juriști</li>
              <li>Înființări firme și modificări acte constitutive</li>
              <li>Asistență în obținerea de autorizații și avize (Primărie, DSV, DSP, ISU, Mediu, IGI )</li>
              <li>
                Recuperări creanțe în faza amiabilă (notificări), în faza contencioasă (acţiuni în instanţă) și a executării silite (sentinţe civile) – recuperare integrală a onorariilor ca și cheltuială de judecată
              </li>
              <li>
                Recuperări concedii medicale CASMB și reprezentare în instanță - recuperare integrală a onorariilor ca și cheltuială de judecată
              </li>
              <li>
                Asistență și reprezentare juridică în litigii privind dreptul muncii - recuperare integrală a onorariilor ca și cheltuială de judecată
              </li>
              <li>Înregistrarea mărcilor la OSIM și protejarea proprietății intelectuale</li>
              <li>
                Asistență și reprezentare juridică în depunerea declaraţiei de creanţă (înscrierea la masa credală) - recuperare integrală a onorariilor ca și cheltuială de judecată
              </li>
            </ul>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}