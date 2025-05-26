import FinanzNavbar from "../../../navbar"
import Footer from "../../../components/footer"

export default function InfiintarePfaPage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-gradient-to-br from-slate-50 via-green-50/30 to-emerald-50/50">
      <FinanzNavbar />

      {/* Background pattern and decorative elements */}
      <div className="fixed inset-0 pointer-events-none">
        {/* Diamond pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_35%,rgba(34,197,94,0.1)_35%,rgba(34,197,94,0.1)_65%,transparent_65%),linear-gradient(-45deg,transparent_35%,rgba(34,197,94,0.05)_35%,rgba(34,197,94,0.05)_65%,transparent_65%)] bg-[size:20px_20px]"></div>

        {/* Floating shapes */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-green-400/10 to-emerald-600/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-tl from-emerald-500/8 to-green-300/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-48 h-48 bg-gradient-to-r from-teal-400/8 to-cyan-300/6 rounded-full blur-2xl animate-pulse delay-500"></div>

        {/* Star pattern */}
        <div className="absolute top-40 right-20 w-16 h-16 opacity-5">
          <svg viewBox="0 0 100 100" className="w-full h-full text-green-500">
            <polygon points="50,5 61,35 95,35 68,57 79,91 50,70 21,91 32,57 5,35 39,35" fill="currentColor" />
          </svg>
        </div>

        {/* Plus pattern */}
        <div className="absolute bottom-40 left-20 w-12 h-12 opacity-5">
          <svg viewBox="0 0 100 100" className="w-full h-full text-emerald-500">
            <rect x="40" y="10" width="20" height="80" fill="currentColor" />
            <rect x="10" y="40" width="80" height="20" fill="currentColor" />
          </svg>
        </div>
      </div>

      <main className="container mx-auto py-12 px-4 mt-16 xl:mt-20 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Modern header section */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
              Înființare persoane fizice autorizate
            </div>
            <h1 className="text-4xl font-bold text-blue-900 mb-4">Înființare PFA</h1>
            <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-emerald-500 mx-auto rounded-full"></div>
          </div>

          <div className="prose prose-lg max-w-none">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/20 mb-8">
              <p className="text-xl text-gray-700 mb-8">
                Înființarea unei Persoane Fizice Autorizate (PFA) este cea mai simplă modalitate de a începe o afacere
                în România. Vă ajutăm să parcurgeți rapid toate etapele necesare.
              </p>
            </div>

            <div className="bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl p-8 mb-8 text-white shadow-xl">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold text-xl">✓</span>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold">Pachet complet înființare PFA</h3>
                  <p className="text-green-100">Include toate taxele și procedurile, fără costuri ascunse!</p>
                </div>
              </div>
              <div className="text-4xl font-bold">299 RON</div>
            </div>

            <h2 className="text-3xl font-bold text-blue-900 mb-6">Avantajele PFA</h2>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-green-100/50 hover:shadow-xl transition-all duration-300">
                <div className="flex items-center mb-4">
                  <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                  <h4 className="text-xl font-semibold text-blue-900">Beneficii:</h4>
                </div>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                    Procedură simplă și rapidă
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                    Costuri reduse de înființare
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                    Flexibilitate în activitate
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                    Impozitare avantajoasă
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                    Fără capital social minim
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                    Contabilitate simplificată
                  </li>
                </ul>
              </div>

              <div className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-blue-100/50 hover:shadow-xl transition-all duration-300">
                <div className="flex items-center mb-4">
                  <div className="w-3 h-3 bg-blue-500 rounded-full mr-3"></div>
                  <h4 className="text-xl font-semibold text-blue-900">Documentele necesare:</h4>
                </div>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                    Copie CI/Pașaport
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                    Certificat de naștere
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                    Certificat de căsătorie (dacă este cazul)
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                    Declarație pe propria răspundere
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                    Dovada sediului (contract închiriere/proprietate)
                  </li>
                </ul>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-blue-900 mb-6">Procedura de înființare</h2>

            <div className="space-y-6">
              <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
                <div className="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
                  1
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Consultanță și alegerea codurilor CAEN</h4>
                  <p className="text-gray-700">
                    Vă ajutăm să alegeți codurile CAEN potrivite pentru activitatea dumneavoastră.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
                <div className="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
                  2
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Pregătirea documentelor</h4>
                  <p className="text-gray-700">Întocmim cererea de autorizare și toate documentele necesare.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
                <div className="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
                  3
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Depunerea la ANAF</h4>
                  <p className="text-gray-700">Depunem dosarul la Administrația Financiară competentă.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
                <div className="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
                  4
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Obținerea autorizației</h4>
                  <p className="text-gray-700">Ridicăm autorizația PFA și vă predăm toate documentele.</p>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg mt-8">
              <h3 className="text-xl font-semibold text-blue-900 mb-3">Timp de procesare: 1-3 zile lucrătoare</h3>
              <p className="text-gray-700">
                Procedura de autorizare PFA este foarte rapidă și se finalizează în 1-3 zile lucrătoare de la depunerea
                dosarului complet.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
