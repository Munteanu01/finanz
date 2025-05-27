import FinanzNavbar from "../../../../navbar"
import Footer from "../../../../components/footer"

export default function CesiunePartiSrlPage() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <FinanzNavbar />
      <main className="container mx-auto py-12 px-4 mt-16 xl:mt-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-primaryColor mb-8">Cesiune Părți Sociale SRL</h1>

          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-700 mb-8">
              Vă asistăm în procedura de cesiune a părților sociale, asigurând respectarea tuturor formalităților legale
              și fiscale pentru transferul de proprietate.
            </p>

            <div className="bg-blue-50 p-6 rounded-lg mb-8">
              <h3 className="text-2xl font-semibold text-primaryColor mb-4">Serviciu cesiune părți sociale</h3>
              <div className="text-3xl font-bold text-primaryColor mb-4">599 RON</div>
              <p className="text-gray-700">Include toate procedurile legale și fiscale!</p>
            </div>

            <h2 className="text-3xl font-bold text-primaryColor mb-6">Tipuri de cesiune</h2>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="text-2xl font-semibold text-green-900 mb-4">Cesiune între asociați</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Procedură simplificată</li>
                  <li>• Fără drept de preempțiune</li>
                  <li>• Taxe reduse</li>
                  <li>• Proces rapid</li>
                </ul>
              </div>

              <div className="bg-orange-50 p-6 rounded-lg">
                <h3 className="text-2xl font-semibold text-orange-900 mb-4">Cesiune către terți</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Respectarea dreptului de preempțiune</li>
                  <li>• Acordul celorlalți asociați</li>
                  <li>• Procedură mai complexă</li>
                  <li>• Verificări suplimentare</li>
                </ul>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-primaryColor mb-6">Documentele necesare</h2>

            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <ul className="space-y-2 text-gray-700">
                <li>• Contractul de cesiune a părților sociale</li>
                <li>• Hotărârea AGEA de aprobare a cesiunii</li>
                <li>• Copii CI ale tuturor părților implicate</li>
                <li>• Certificatul de înregistrare al societății</li>
                <li>• Actul constitutiv actualizat</li>
                <li>• Dovada plății prețului de cesiune</li>
                <li>• Declarațiile fiscale necesare</li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold text-primaryColor mb-6">Procedura de cesiune</h2>

            <div className="space-y-6">
              <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
                <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
                  1
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Evaluarea părților sociale</h4>
                  <p className="text-gray-700">Stabilim valoarea părților sociale și calculăm implicațiile fiscale.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
                <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
                  2
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Întocmirea contractului</h4>
                  <p className="text-gray-700">Redactăm contractul de cesiune și documentele conexe.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
                <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
                  3
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Depunerea la ONRC</h4>
                  <p className="text-gray-700">Depunem dosarul pentru modificarea actului constitutiv.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
                <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
                  4
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Îndeplinirea obligațiilor fiscale</h4>
                  <p className="text-gray-700">Depunem declarațiile fiscale și achităm taxele aferente.</p>
                </div>
              </div>
            </div>

            <div className="bg-yellow-50 p-6 rounded-lg mt-8">
              <h3 className="text-xl font-semibold text-yellow-900 mb-3">Timp de procesare: 7-10 zile lucrătoare</h3>
              <p className="text-gray-700">
                Cesiunea părților sociale se finalizează în 7-10 zile lucrătoare, în funcție de complexitatea
                tranzacției.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
