import FinanzNavbar from "../../../navbar"
import Footer from "../../../components/footer"

export default function ContabilitateSrlPage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/50">
      <FinanzNavbar />

      {/* Background pattern and decorative elements */}
      <div className="fixed inset-0 pointer-events-none">
        {/* Geometric pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:20px_20px]"></div>

        {/* Floating shapes */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-blue-400/10 to-indigo-600/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-tl from-indigo-500/8 to-blue-300/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-48 h-48 bg-gradient-to-r from-purple-400/8 to-pink-300/6 rounded-full blur-2xl animate-pulse delay-500"></div>

        {/* Hexagon pattern */}
        <div className="absolute top-40 right-20 w-32 h-32 opacity-5">
          <svg viewBox="0 0 100 100" className="w-full h-full text-blue-500">
            <polygon points="50,5 85,25 85,75 50,95 15,75 15,25" fill="currentColor" />
          </svg>
        </div>

        {/* Circle pattern */}
        <div className="absolute bottom-40 left-20 w-24 h-24 opacity-5">
          <svg viewBox="0 0 100 100" className="w-full h-full text-indigo-500">
            <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="2" />
            <circle cx="50" cy="50" r="25" fill="none" stroke="currentColor" strokeWidth="1" />
          </svg>
        </div>
      </div>

      <main className="container mx-auto py-12 px-4 mt-16 xl:mt-20 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Modern header section */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
              Servicii de contabilitate profesionale
            </div>
            <h1 className="text-4xl font-bold text-blue-900 mb-4">Contabilitate SRL</h1>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto rounded-full"></div>
          </div>

          <div className="prose prose-lg max-w-none">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/20 mb-8">
              <p className="text-xl text-gray-700 mb-8">
                Oferim servicii complete de contabilitate pentru societățile cu răspundere limitată (SRL), adaptate
                nevoilor specifice ale afacerii dumneavoastră.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-blue-100/50 hover:shadow-xl transition-all duration-300">
                <div className="flex items-center mb-4">
                  <div className="w-3 h-3 bg-blue-500 rounded-full mr-3"></div>
                  <h3 className="text-2xl font-semibold text-blue-900">Servicii incluse</h3>
                </div>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                    Întocmirea bilanțului contabil
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                    Declarații fiscale lunare și anuale
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                    Gestiunea registrelor contabile
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                    Consiliere fiscală permanentă
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                    Reprezentare în relația cu ANAF
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                    Optimizare fiscală
                  </li>
                </ul>
              </div>

              <div className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-green-100/50 hover:shadow-xl transition-all duration-300">
                <div className="flex items-center mb-4">
                  <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                  <h3 className="text-2xl font-semibold text-green-900">Avantaje</h3>
                </div>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                    Conformitate 100% cu legislația
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                    Reducerea costurilor administrative
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                    Acces la experți contabili
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                    Raportare în timp real
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                    Suport pentru audit
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                    Consultanță strategică
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/20 mb-8">
              <h2 className="text-3xl font-bold text-blue-900 mb-6 text-center">Pachete de servicii</h2>
              <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto rounded-full mb-8"></div>

              <div className="grid md:grid-cols-3 gap-6 mb-12">
                <div className="bg-white/90 backdrop-blur-sm border border-gray-200/50 rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-blue-600 font-bold">B</span>
                  </div>
                  <h4 className="text-xl font-semibold mb-4 text-blue-900">Pachet Basic</h4>
                  <div className="text-3xl font-bold text-blue-900 mb-4">150 RON/lună</div>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li>Până la 20 operațiuni/lună</li>
                    <li>Declarații fiscale</li>
                    <li>Bilanț anual</li>
                    <li>Suport telefonic</li>
                  </ul>
                </div>

                <div className="bg-white/90 backdrop-blur-sm border-2 border-blue-500/50 rounded-2xl p-6 text-center relative shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                    Recomandat
                  </div>
                  <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold">S</span>
                  </div>
                  <h4 className="text-xl font-semibold mb-4 text-blue-900">Pachet Standard</h4>
                  <div className="text-3xl font-bold text-blue-900 mb-4">300 RON/lună</div>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li>Până la 50 operațiuni/lună</li>
                    <li>Toate serviciile Basic</li>
                    <li>Consiliere fiscală</li>
                    <li>Reprezentare ANAF</li>
                  </ul>
                </div>

                <div className="bg-white/90 backdrop-blur-sm border border-gray-200/50 rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-purple-600 font-bold">P</span>
                  </div>
                  <h4 className="text-xl font-semibold mb-4 text-blue-900">Pachet Premium</h4>
                  <div className="text-3xl font-bold text-blue-900 mb-4">500 RON/lună</div>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li>Operațiuni nelimitate</li>
                    <li>Toate serviciile Standard</li>
                    <li>Optimizare fiscală</li>
                    <li>Consultanță strategică</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
