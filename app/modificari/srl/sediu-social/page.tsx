import FinanzNavbar from "../../../../navbar"
import Footer from "../../../../components/footer"

export default function SchimbareSediuSocialPage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-gradient-to-br from-slate-50 via-orange-50/30 to-amber-50/50">
      <FinanzNavbar />

      {/* Background decorative elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-orange-400/10 to-amber-600/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-tl from-amber-500/8 to-orange-300/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/4 w-48 h-48 bg-gradient-to-r from-yellow-400/8 to-orange-300/6 rounded-full blur-2xl"></div>
      </div>

      <main className="container mx-auto py-12 px-4 mt-16 xl:mt-20 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Modern header section */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 bg-orange-100 text-orange-800 rounded-full text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
              Modificări societăți comerciale
            </div>
            <h1 className="text-4xl font-bold text-blue-900 mb-4">Schimbare Sediu Social SRL</h1>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-amber-500 mx-auto rounded-full"></div>
          </div>

          <div className="prose prose-lg max-w-none">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/20 mb-8">
              <p className="text-xl text-gray-700 mb-8">
                Vă asistăm în procedura de schimbare a sediului social al societății dumneavoastră cu răspundere
                limitată, asigurându-ne că toate formalitățile legale sunt îndeplinite corect.
              </p>
            </div>

            <div className="bg-gradient-to-r from-orange-500 to-amber-500 rounded-2xl p-8 mb-8 text-white shadow-xl">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold text-xl">🏢</span>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold">Serviciu complet schimbare sediu social</h3>
                  <p className="text-orange-100">Include toate taxele și procedurile necesare!</p>
                </div>
              </div>
              <div className="text-4xl font-bold">399 RON</div>
            </div>

            <h2 className="text-3xl font-bold text-blue-900 mb-6">Documentele necesare</h2>

            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <ul className="space-y-2 text-gray-700">
                <li>Hotărârea AGEA de schimbare sediu social</li>
                <li>Contract de închiriere/Proprietate pentru noul sediu</li>
                <li>Acordul proprietarului noului sediu</li>
                <li>Certificat de urbanism pentru noul sediu</li>
                <li>Copii CI ale administratorilor</li>
                <li>Certificatul de înregistrare al societății</li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold text-blue-900 mb-6">Procedura de schimbare</h2>

            <div className="space-y-6">
              <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
                <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
                  1
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Verificarea noului sediu</h4>
                  <p className="text-gray-700">
                    Verificăm că noul sediu îndeplinește toate condițiile legale pentru desfășurarea activității.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
                <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
                  2
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Întocmirea documentelor</h4>
                  <p className="text-gray-700">
                    Pregătim toate documentele necesare pentru modificarea actului constitutiv.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
                <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
                  3
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Depunerea la ONRC</h4>
                  <p className="text-gray-700">Depunem dosarul la Oficiul Național al Registrului Comerțului.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
                <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
                  4
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Actualizarea la ANAF</h4>
                  <p className="text-gray-700">
                    Notificăm ANAF despre schimbarea sediului social și actualizăm datele fiscale.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-green-50 p-6 rounded-lg mt-8">
              <h3 className="text-xl font-semibold text-green-900 mb-3">Timp de procesare: 5-7 zile lucrătoare</h3>
              <p className="text-gray-700">
                Procedura de schimbare a sediului social se finalizează în 5-7 zile lucrătoare de la depunerea dosarului
                complet.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
