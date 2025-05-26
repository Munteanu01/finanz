import Navbar from "../../navbar"
import Footer from "../../components/footer"
import { Mail, Phone } from "react-feather"

export default function GDPRPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <svg className="absolute top-0 left-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <pattern id="legal-grid" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="rgb(59 130 246)" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#legal-grid)" />
        </svg>

        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse delay-1000"></div>
        <div className="absolute bottom-40 left-1/4 w-40 h-40 bg-slate-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse delay-2000"></div>
      </div>

      <Navbar />

      <main className="relative z-10 pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-4">
              <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
              Protecția Datelor
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Regulamentul General privind
              <span className="text-blue-600"> Protecția Datelor</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Informații despre modul în care colectăm, procesăm și protejăm datele dumneavoastră personale
            </p>
          </div>

          {/* Content */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-white/20 p-8 md:p-12">
              {/* Section 1 */}
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <span className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                    <span className="text-blue-600 font-bold">1</span>
                  </span>
                  Administratorul datelor
                </h2>
                <div className="prose prose-gray max-w-none">
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Administratorul datelor cu caracter personal este <strong>FINANZ CONSULT S.R.L.</strong>, cu sediul
                    în București, Splaiul Independentei, Nr 202B, Bl. 202B, Sc. 1, Et. 4, Ap. 15, Sector 6, înregistrată
                    la Registrul Comerțului sub nr. J40/XXXXX/XXXX, CUI: XXXXXXXX.
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    Ne puteți contacta la adresa de email:
                    <a href="mailto:financiar.contabil@finanzconsult.ro" className="text-blue-600 hover:underline ml-1">
                      financiar.contabil@finanzconsult.ro
                    </a>
                  </p>
                </div>
              </section>

              {/* Section 2 */}
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <span className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center mr-3">
                    <span className="text-green-600 font-bold">2</span>
                  </span>
                  Categoriile de date prelucrate
                </h2>
                <div className="prose prose-gray max-w-none">
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Colectăm și procesăm următoarele categorii de date personale:
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Date de identificare (nume, prenume, CNP, seria și numărul actului de identitate)
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Date de contact (adresă, telefon, email)
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Date financiare și contabile
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Date profesionale (funcția, locul de muncă)
                    </li>
                  </ul>
                </div>
              </section>

              {/* Section 3 */}
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <span className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center mr-3">
                    <span className="text-purple-600 font-bold">3</span>
                  </span>
                  Scopurile prelucrării
                </h2>
                <div className="prose prose-gray max-w-none">
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Datele dumneavoastră personale sunt prelucrate în următoarele scopuri:
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Prestarea serviciilor de contabilitate și consultanță fiscală
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Îndeplinirea obligațiilor legale și fiscale
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Comunicarea cu autoritățile competente
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Arhivarea documentelor conform legislației în vigoare
                    </li>
                  </ul>
                </div>
              </section>

              {/* Section 4 */}
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <span className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center mr-3">
                    <span className="text-orange-600 font-bold">4</span>
                  </span>
                  Drepturile persoanelor vizate
                </h2>
                <div className="prose prose-gray max-w-none">
                  <p className="text-gray-600 leading-relaxed mb-4">
                    În conformitate cu GDPR, aveți următoarele drepturi:
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Dreptul de acces la datele personale
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Dreptul de rectificare a datelor inexacte
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Dreptul la ștergerea datelor (dreptul de a fi uitat)
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Dreptul la restricționarea prelucrării
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Dreptul la portabilitatea datelor
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-indigo-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Dreptul de opoziție
                    </li>
                  </ul>
                </div>
              </section>

              {/* Contact Section */}
              <section className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 mt-8">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Exercitarea drepturilor</h3>
                <p className="text-gray-600 mb-4">
                  Pentru exercitarea drepturilor dumneavoastră sau pentru orice întrebări legate de protecția datelor,
                  ne puteți contacta:
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="mailto:financiar.contabil@finanzconsult.ro"
                    className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    <Mail className="h-4 w-4 mr-2" />
                    Trimite email
                  </a>
                  <a
                    href="tel:021203082014"
                    className="inline-flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                  >
                    <Phone className="h-4 w-4 mr-2" />
                    Sună acum
                  </a>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
