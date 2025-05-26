import FinanzNavbar from "../../../navbar"
import Footer from "../../../components/footer"

export default function InfiintareOngPage() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <FinanzNavbar />
      <main className="container mx-auto py-12 px-4 mt-16 xl:mt-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-blue-900 mb-8">Înființare ONG</h1>

          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-700 mb-8">
              Vă asistăm în înființarea unei organizații non-guvernamentale (ONG), fie că este vorba despre o asociație
              sau o fundație, cu toate procedurile legale necesare.
            </p>

            <div className="bg-purple-50 p-6 rounded-lg mb-8">
              <h3 className="text-2xl font-semibold text-purple-900 mb-4">Pachet complet înființare ONG</h3>
              <div className="text-3xl font-bold text-purple-900 mb-4">899 RON</div>
              <p className="text-gray-700">Include toate taxele și procedurile pentru asociații și fundații!</p>
            </div>

            <h2 className="text-3xl font-bold text-blue-900 mb-6">Tipuri de ONG</h2>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-2xl font-semibold text-blue-900 mb-4">Asociație</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Minim 3 membri fondatori</li>
                  <li>• Scop non-profit</li>
                  <li>• Activități de interes general</li>
                  <li>• Înregistrare la Tribunal</li>
                  <li>• Personalitate juridică</li>
                </ul>
              </div>

              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="text-2xl font-semibold text-green-900 mb-4">Fundație</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Minim 1 fondator</li>
                  <li>• Patrimoniu de constituire</li>
                  <li>• Scop de utilitate publică</li>
                  <li>• Înregistrare la Tribunal</li>
                  <li>• Activități caritabile</li>
                </ul>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-blue-900 mb-6">Documentele necesare</h2>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div>
                <h4 className="text-xl font-semibold text-blue-900 mb-4">Pentru fondatori persoane fizice:</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• Copii CI/Pașaport</li>
                  <li>• Declarații pe propria răspundere</li>
                  <li>• CV-uri ale fondatorilor</li>
                  <li>• Cazier judiciar</li>
                </ul>
              </div>

              <div>
                <h4 className="text-xl font-semibold text-blue-900 mb-4">Documente organizaționale:</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• Actul constitutiv</li>
                  <li>• Statutul organizației</li>
                  <li>• Procesul verbal de constituire</li>
                  <li>• Dovada sediului social</li>
                </ul>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-blue-900 mb-6">Procedura de înființare</h2>

            <div className="space-y-6">
              <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
                <div className="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
                  1
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Consultanță și planificare</h4>
                  <p className="text-gray-700">
                    Stabilim tipul de ONG, obiectivele și structura organizațională potrivită.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
                <div className="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
                  2
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Întocmirea documentelor</h4>
                  <p className="text-gray-700">
                    Redactăm actul constitutiv, statutul și toate documentele necesare înregistrării.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
                <div className="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
                  3
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Depunerea la Tribunal</h4>
                  <p className="text-gray-700">Depunem dosarul la Tribunalul competent pentru înregistrare.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
                <div className="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
                  4
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Înregistrarea fiscală</h4>
                  <p className="text-gray-700">Completăm procedurile de înregistrare fiscală și obținerea CIF-ului.</p>
                </div>
              </div>
            </div>

            <div className="bg-orange-50 p-6 rounded-lg mt-8">
              <h3 className="text-xl font-semibold text-orange-900 mb-3">Timp de procesare: 30-45 zile</h3>
              <p className="text-gray-700">
                Procedura de înființare ONG durează între 30-45 zile, în funcție de complexitatea dosarului și programul
                Tribunalului.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
