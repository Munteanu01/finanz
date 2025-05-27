import FinanzNavbar from "../../../../navbar"
import Footer from "../../../../components/footer"

export default function ActualizareRev3SrlPage() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <FinanzNavbar />
      <main className="container mx-auto py-12 px-4 mt-16 xl:mt-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-primaryColor mb-8">Actualizare Rev. 3 SRL</h1>

          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-700 mb-8">
              Vă asistăm în procedura de actualizare a formularului Rev. 3 pentru societatea dumneavoastră, asigurând
              conformitatea cu cerințele ANAF.
            </p>

            <div className="bg-blue-50 p-6 rounded-lg mb-8">
              <h3 className="text-2xl font-semibold text-primaryColor mb-4">Serviciu actualizare Rev. 3</h3>
              <div className="text-3xl font-bold text-primaryColor mb-4">199 RON</div>
              <p className="text-gray-700">Include întocmirea și depunerea formularului!</p>
            </div>

            <h2 className="text-3xl font-bold text-primaryColor mb-6">Ce este formularul Rev. 3</h2>

            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <p className="text-gray-700 leading-relaxed">
                Formularul Rev. 3 este documentul prin care se comunică ANAF modificările intervenite în structura
                societății, în activitatea desfășurată sau în alte aspecte relevante din punct de vedere fiscal.
              </p>
            </div>

            <h2 className="text-3xl font-bold text-primaryColor mb-6">Când este necesar</h2>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-yellow-50 p-6 rounded-lg">
                <h3 className="text-2xl font-semibold text-yellow-900 mb-4">Modificări obligatorii</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Schimbarea sediului social</li>
                  <li>• Modificarea codurilor CAEN</li>
                  <li>• Schimbarea administratorilor</li>
                  <li>• Modificarea capitalului social</li>
                  <li>• Schimbarea formei de organizare</li>
                </ul>
              </div>

              <div className="bg-red-50 p-6 rounded-lg">
                <h3 className="text-2xl font-semibold text-red-900 mb-4">Termene</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• 30 de zile de la modificare</li>
                  <li>• Sancțiuni pentru întârziere</li>
                  <li>• Obligatoriu pentru toate SRL-urile</li>
                  <li>• Depunere electronică sau fizică</li>
                </ul>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-primaryColor mb-6">Procedura de actualizare</h2>

            <div className="space-y-6">
              <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
                <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
                  1
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Analiza modificărilor</h4>
                  <p className="text-gray-700">
                    Identificăm toate modificările care trebuie raportate în formularul Rev. 3.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
                <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
                  2
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Completarea formularului</h4>
                  <p className="text-gray-700">Completăm corect toate secțiunile formularului Rev. 3.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
                <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
                  3
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Depunerea la ANAF</h4>
                  <p className="text-gray-700">Depunem formularul la Administrația Financiară competentă.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
                <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
                  4
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Confirmarea primirii</h4>
                  <p className="text-gray-700">Obținem confirmarea că formularul a fost primit și procesat de ANAF.</p>
                </div>
              </div>
            </div>

            <div className="bg-green-50 p-6 rounded-lg mt-8">
              <h3 className="text-xl font-semibold text-green-900 mb-3">Timp de procesare: 1-2 zile lucrătoare</h3>
              <p className="text-gray-700">
                Actualizarea Rev. 3 se finalizează rapid, în 1-2 zile lucrătoare de la primirea documentelor.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
