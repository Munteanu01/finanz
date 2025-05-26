import FinanzNavbar from "../../../navbar"
import Footer from "../../../components/footer"

export default function ContabilitatePfaPage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-gradient-to-br from-slate-50 via-green-50/30 to-emerald-50/50">
      <FinanzNavbar />

      {/* Background pattern and decorative elements */}
      <div className="fixed inset-0 pointer-events-none">
        {/* Dot pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(34,197,94,0.15)_1px,transparent_0)] bg-[size:20px_20px]"></div>

        {/* Floating shapes */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-green-400/10 to-emerald-600/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-tl from-emerald-500/8 to-green-300/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-48 h-48 bg-gradient-to-r from-teal-400/8 to-cyan-300/6 rounded-full blur-2xl animate-pulse delay-500"></div>

        {/* Triangle pattern */}
        <div className="absolute top-60 right-40 w-20 h-20 opacity-5">
          <svg viewBox="0 0 100 100" className="w-full h-full text-green-500">
            <polygon points="50,10 90,80 10,80" fill="currentColor" />
          </svg>
        </div>

        {/* Wave pattern */}
        <div className="absolute bottom-60 left-40 w-40 h-20 opacity-5">
          <svg viewBox="0 0 100 50" className="w-full h-full text-emerald-500">
            <path d="M0,25 Q25,5 50,25 T100,25" fill="none" stroke="currentColor" strokeWidth="2" />
            <path d="M0,35 Q25,15 50,35 T100,35" fill="none" stroke="currentColor" strokeWidth="1" />
          </svg>
        </div>
      </div>

      <main className="container mx-auto py-12 px-4 mt-16 xl:mt-20 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Modern header section */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
              Servicii pentru persoane fizice autorizate
            </div>
            <h1 className="text-4xl font-bold text-blue-900 mb-4">Contabilitate PFA</h1>
            <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-emerald-500 mx-auto rounded-full"></div>
          </div>

          <div className="prose prose-lg max-w-none">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/20 mb-8">
              <p className="text-xl text-gray-700 mb-8">
                Servicii de contabilitate specializate pentru persoanele fizice autorizate (PFA), cu focus pe simplitate
                și eficiență.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-green-100/50 hover:shadow-xl transition-all duration-300">
                <div className="flex items-center mb-4">
                  <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                  <h3 className="text-2xl font-semibold text-blue-900">Servicii pentru PFA</h3>
                </div>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                    Evidența veniturilor și cheltuielilor
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                    Declarația anuală de venituri
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                    Calculul și plata contribuțiilor sociale
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                    Declarații TVA (dacă este cazul)
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                    Consiliere fiscală
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                    Optimizare taxe și contribuții
                  </li>
                </ul>
              </div>

              <div className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-emerald-100/50 hover:shadow-xl transition-all duration-300">
                <div className="flex items-center mb-4">
                  <div className="w-3 h-3 bg-emerald-500 rounded-full mr-3"></div>
                  <h3 className="text-2xl font-semibold text-green-900">Beneficii</h3>
                </div>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-emerald-400 rounded-full mr-3"></span>
                    Proceduri simplificate
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-emerald-400 rounded-full mr-3"></span>
                    Costuri reduse
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-emerald-400 rounded-full mr-3"></span>
                    Flexibilitate maximă
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-emerald-400 rounded-full mr-3"></span>
                    Suport personalizat
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-emerald-400 rounded-full mr-3"></span>
                    Conformitate legislativă
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-emerald-400 rounded-full mr-3"></span>
                    Economii de timp
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/20 mb-8">
              <h2 className="text-3xl font-bold text-blue-900 mb-6 text-center">Tarife PFA</h2>
              <div className="w-16 h-1 bg-gradient-to-r from-green-500 to-emerald-500 mx-auto rounded-full mb-8"></div>

              <div className="grid md:grid-cols-2 gap-6 mb-12">
                <div className="bg-white/90 backdrop-blur-sm border border-gray-200/50 rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-green-600 font-bold">S</span>
                  </div>
                  <h4 className="text-xl font-semibold mb-4 text-blue-900">PFA Standard</h4>
                  <div className="text-3xl font-bold text-blue-900 mb-4">80 RON/lună</div>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li>Evidența veniturilor</li>
                    <li>Declarația anuală</li>
                    <li>Calculul contribuțiilor</li>
                    <li>Suport telefonic</li>
                  </ul>
                </div>

                <div className="bg-white/90 backdrop-blur-sm border-2 border-green-500/50 rounded-2xl p-6 text-center relative shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                    Recomandat
                  </div>
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold">T</span>
                  </div>
                  <h4 className="text-xl font-semibold mb-4 text-blue-900">PFA cu TVA</h4>
                  <div className="text-3xl font-bold text-blue-900 mb-4">150 RON/lună</div>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li>Toate serviciile Standard</li>
                    <li>Declarații TVA</li>
                    <li>Evidența TVA</li>
                    <li>Consiliere fiscală</li>
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
