"use client"
import React from "react"
import FinanzNavbar from "../../navbar"
import Footer from "../../components/footer"
import HeroPages from "../../components/HeroPages"
import AccountingFeatures from "../../components/firstFeatures"
import FAQ from "../../components/faq"
import LegalSupport from "../../components/LegalSupport"
import { Scale, FileText, Shield, Users, Gavel, Award } from "lucide-react"

const juridicFaq = [
  {
    question: "Cât costă o consultanță juridică?",
    answer: "Costul consultanței juridice variază în funcție de complexitatea cazului. Oferim o evaluare gratuită inițială pentru a stabili costurile exacte."
  },
  {
    question: "Cât durează recuperarea unei creanțe?",
    answer: "Durata recuperării creanțelor depinde de complexitatea cazului. În faza amiabilă, poate dura 30 zile, iar în instanță poate dura între 6 luni și 2 ani."
  },
  {
    question: "Recuperez onorariile de avocat?",
    answer: "Da, în majoritatea cazurilor câștigate, onorariile avocatului sunt recuperate integral ca și cheltuială de judecată de la partea adversă."
  },
  {
    question: "Oferiți consultanță online?",
    answer: "Da, oferim consultanță juridică online prin videoconferință sau telefon, pentru a fi accesibili indiferent de locația dumneavoastră."
  },
]

const featuresData = [
  {
    icon: <Scale className="w-10 h-10 text-primaryColor mb-4" />,
    title: "Experiență juridică dovedită",
    description: "Echipa noastră de avocați și juriști are experiență vastă în toate domeniile de drept relevant pentru afaceri."
  },
  {
    icon: <FileText className="w-10 h-10 text-primaryColor mb-4" />,
    title: "Contracte redactate profesional",
    description: "Redactăm și revizuim contracte pentru a vă proteja interesele și a evita disputele viitoare."
  },
  {
    icon: <Shield className="w-10 h-10 text-primaryColor mb-4" />,
    title: "Recuperare garantată",
    description: "Recuperăm integral onorariile ca și cheltuială de judecată în cazurile câștigate, oferindu-vă siguranță financiară."
  },
  {
    icon: <Users className="w-10 h-10 text-primaryColor mb-4" />,
    title: "Suport personalizat",
    description: "Fiecare client beneficiază de atenție personalizată și strategie juridică adaptată nevoilor specifice."
  }
]

export default function JuridicPage() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <FinanzNavbar />
      
      <HeroPages
        backgroundImage="/juridic.jpg"
        badge="Servicii juridice complete"
        title="Servicii Juridice"
        subtitle="Asistență juridică profesională pentru afacerea ta, de la consultanță la reprezentare în instanță"
        cards={[
          {
            icon: <Gavel className="text-primaryColor mx-auto w-10 h-10 mb-4" />,
            title: "Consultanță juridică specializată",
            description: "Beneficiezi de consiliere juridică de la experți în dreptul afacerilor pentru toate aspectele legale ale companiei tale."
          },
          {
            icon: <FileText className="text-primaryColor mx-auto w-10 h-10 mb-4" />,
            title: "Redactare contracte profesionale",
            description: "Contracte redactate și revizuite de avocați experiențați pentru a-ți proteja interesele în toate relațiile comerciale."
          },
          {
            icon: <Award className="text-primaryColor mx-auto w-10 h-10 mb-4" />,
            title: "Recuperare creanțe garantată",
            description: "Recuperăm creanțele tale cu onorariile integral recuperabile ca și cheltuială de judecată în cazurile câștigate."
          }
        ]}
      />

      <AccountingFeatures
        title="Servicii juridice complete pentru afacerea ta"
        features={featuresData}
      />

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                Serviciile noastre juridice
              </h2>
              <p className="text-xl text-gray-600">
                Acoperim toate aspectele juridice necesare dezvoltării afacerii tale
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Service Cards */}
              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  <Scale className="w-8 h-8 text-primaryColor mr-3" />
                  <h3 className="text-lg font-semibold text-gray-900">Consultanță juridică generală</h3>
                </div>
                <p className="text-gray-600">Consiliere juridică completă pentru toate aspectele legale ale afacerii tale.</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  <FileText className="w-8 h-8 text-primaryColor mr-3" />
                  <h3 className="text-lg font-semibold text-gray-900">Redactare contracte</h3>
                </div>
                <p className="text-gray-600">Contracte redactate și revizuite profesional de avocați și juriști experimentați.</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  <Users className="w-8 h-8 text-primaryColor mr-3" />
                  <h3 className="text-lg font-semibold text-gray-900">Înființări și modificări</h3>
                </div>
                <p className="text-gray-600">Asistență completă pentru înființarea firmelor și modificarea actelor constitutive.</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  <Shield className="w-8 h-8 text-primaryColor mr-3" />
                  <h3 className="text-lg font-semibold text-gray-900">Autorizații și avize</h3>
                </div>
                <p className="text-gray-600">Obținerea tuturor autorizațiilor necesare: Primărie, DSV, DSP, ISU, Mediu, IGI.</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  <Gavel className="w-8 h-8 text-primaryColor mr-3" />
                  <h3 className="text-lg font-semibold text-gray-900">Recuperare creanțe</h3>
                </div>
                <p className="text-gray-600">Recuperare în faza amiabilă și contencioasă cu onorariile recuperabile integral.</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  <Award className="w-8 h-8 text-primaryColor mr-3" />
                  <h3 className="text-lg font-semibold text-gray-900">Proprietate intelectuală</h3>
                </div>
                <p className="text-gray-600">Înregistrarea mărcilor la OSIM și protejarea proprietății intelectuale.</p>
              </div>
            </div>

            {/* Additional Services */}
            <div className="mt-24">
              <div className="text-center mb-16">
                <h3 className="text-4xl font-bold mb-4 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                  Servicii specializate
                </h3>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Expertiză juridică avansată pentru situații complexe cu rezultate garantate
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Dreptul muncii */}
                <div className="group bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-[#f6ae2d] rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 mr-3">
                      <Users className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900">Dreptul muncii</h3>
                  </div>
                  <p className="text-gray-600">
                    Asistență și reprezentare juridică profesională în litigii privind dreptul muncii cu 
                    <span className="font-bold text-[#f6ae2d]"> recuperare integrală a onorariilor</span>.
                  </p>
                </div>

                {/* Recuperare concedii medicale */}
                <div className="group bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-[#f26419] rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 mr-3">
                      <Shield className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900">Recuperare concedii medicale</h3>
                  </div>
                  <p className="text-gray-600">
                    Recuperare concedii medicale CASMB și reprezentare în instanță cu 
                    <span className="font-bold text-[#f26419]"> onorariile recuperabile</span>.
                  </p>
                </div>

                {/* Proceduri de insolvență */}
                <div className="group bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-[#0770bb] rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 mr-3">
                      <FileText className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900">Proceduri de insolvență</h3>
                  </div>
                  <p className="text-gray-600">
                    Asistență în depunerea declarației de creanță și 
                    <span className="font-bold text-[#0770bb]"> înscrierea strategică la masa credală</span>.
                  </p>
                </div>

                {/* Executare silită */}
                <div className="group bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-[#020f59] rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 mr-3">
                      <Gavel className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900">Executare silită</h3>
                  </div>
                  <p className="text-gray-600">
                    Executarea sentințelor civile și 
                    <span className="font-bold text-[#020f59]"> recuperarea eficientă a creanțelor</span> prin executare silită.
                  </p>
                </div>
              </div>

              {/* Modern CTA Button */}
              <div className="mt-16 text-center">
                <a href="/contact" className="bg-primaryColor hover:bg-primaryColor/90 text-white px-10 py-3 rounded-full font-bold  shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 inline-flex items-center gap-3">
                  <Scale className="w-6 h-6" />
                  Află mai multe
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <LegalSupport />

      {/* FAQ Section */}
      <section className="w-full bg-white">
        <FAQ items={juridicFaq} />
      </section>

      <Footer />
    </div>
  )
}