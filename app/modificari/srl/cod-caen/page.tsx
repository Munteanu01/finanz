import FinanzNavbar from "../../../../navbar"
import Footer from "../../../../components/footer"

export default function SchimbareCodCaenPage() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <FinanzNavbar />
      <main className="container mx-auto py-12 px-4 mt-16 xl:mt-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-blue-900 mb-8">Schimbare Cod CAEN Principal SRL</h1>

          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-700 mb-8">
              Vă ajutăm să modificați codul CAEN principal al societății dumneavoastră pentru a reflecta corect
              activitatea principală desfășurată.
            </p>

            <div className="bg-blue-50 p-6 rounded-lg mb-8">
              <h3 className="text-2xl font-semibold text-blue-900 mb-4">Serviciu schimbare cod CAEN principal</h3>
              <div className="text-3xl font-bold text-blue-900 mb-4">299 RON</div>
              <p className="text-gray-700">Include toate taxele și procedurile necesare!</p>
            </div>

            <h2 className="text-3xl font-bold text-blue-900 mb-6">Când este necesară schimbarea</h2>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-yellow-50 p-6 rounded-lg">
                <h3 className="text-2xl font-semibold text-yellow-900 mb-4">Motive frecvente</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Schimbarea activității principale</li>
                  <li>• Extinderea domeniului de activitate</li>
                  <li>• Conformarea cu cerințele ANAF</li>
                  <li>• Optimizarea fiscală</li>
                  <li>• Accesarea de fonduri europene</li>
                </ul>
              </div>

              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="text-2xl font-semibold text-green-900 mb-4">Avantaje</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Conformitate cu activitatea reală</li>
                  <li>• Evitarea sancțiunilor ANAF</li>
                  <li>• Acces la facilități fiscale</li>
                  <li>• Eligibilitate pentru granturi</li>
                  <li>• Claritate în relațiile comerciale</li>
                </ul>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-blue-900 mb-6">Documentele necesare</h2>

            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <ul className="space-y-2 text-gray-700">
                <li>• Hotărârea AGEA de modificare cod CAEN</li>
                <li>• Justificarea alegerii noului cod CAEN</li>
                <li>• Copii CI ale administratorilor</li>
                <li>• Certificatul de înregistrare al societății</li>
                <li>• Declarația pe propria răspundere</li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold text-blue-900 mb-6">Procedura de modificare</h2>

            <div className="space-y-6">
              <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
                <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
                  1
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Consultanță pentru alegerea codului</h4>
                  <p className="text-gray-700">Vă consiliem pentru alegerea celui mai potrivit cod CAEN principal.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
                <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
                  2
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Pregătirea documentelor</h4>
                  <p className="text-gray-700">
                    Întocmim toate documentele necesare pentru modificarea actului constitutiv.
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
                  <h4 className="font-semibold text-gray-900">Notificarea ANAF</h4>
                  <p className="text-gray-700">Informăm ANAF despre modificarea codului CAEN principal.</p>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg mt-8">
              <h3 className="text-xl font-semibold text-blue-900 mb-3">Timp de procesare: 3-5 zile lucrătoare</h3>
              <p className="text-gray-700">
                Modificarea codului CAEN principal se finalizează în 3-5 zile lucrătoare de la depunerea dosarului
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
