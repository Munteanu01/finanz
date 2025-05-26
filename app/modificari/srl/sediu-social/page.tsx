import FinanzNavbar from "../../../../navbar"
import Footer from "../../../../components/footer"

export default function SchimbareSediuSocialPage() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <FinanzNavbar />
      <main className="container mx-auto py-12 px-4 mt-16 xl:mt-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-blue-900 mb-8">Schimbare Sediu Social SRL</h1>

          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-700 mb-8">
              Vă asistăm în procedura de schimbare a sediului social al societății dumneavoastră cu răspundere limitată,
              asigurându-ne că toate formalitățile legale sunt îndeplinite corect.
            </p>

            <div className="bg-blue-50 p-6 rounded-lg mb-8">
              <h3 className="text-2xl font-semibold text-blue-900 mb-4">Serviciu complet schimbare sediu social</h3>
              <div className="text-3xl font-bold text-blue-900 mb-4">399 RON</div>
              <p className="text-gray-700">Include toate taxele și procedurile necesare!</p>
            </div>

            <h2 className="text-3xl font-bold text-blue-900 mb-6">Documentele necesare</h2>

            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <ul className="space-y-2 text-gray-700">
                <li>• Hotărârea AGEA de schimbare sediu social</li>
                <li>• Contract de închiriere/Proprietate pentru noul sediu</li>
                <li>• Acordul proprietarului noului sediu</li>
                <li>• Certificat de urbanism pentru noul sediu</li>
                <li>• Copii CI ale administratorilor</li>
                <li>• Certificatul de înregistrare al societății</li>
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
