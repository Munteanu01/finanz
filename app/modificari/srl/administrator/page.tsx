import FinanzNavbar from "../../../../navbar"
import Footer from "../../../../components/footer"

export default function SchimbareAdministratorSrlPage() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <FinanzNavbar />
      <main className="container mx-auto py-12 px-4 mt-16 xl:mt-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-primaryColor mb-8">Schimbare Administrator SRL</h1>

          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-700 mb-8">
              Vă asistăm în procedura de schimbare a administratorului societății, asigurând respectarea tuturor
              formalităților legale și actualizarea documentelor.
            </p>

            <div className="bg-blue-50 p-6 rounded-lg mb-8">
              <h3 className="text-2xl font-semibold text-primaryColor mb-4">Serviciu schimbare administrator</h3>
              <div className="text-3xl font-bold text-primaryColor mb-4">449 RON</div>
              <p className="text-gray-700">Include toate procedurile și actualizările necesare!</p>
            </div>

            <h2 className="text-3xl font-bold text-primaryColor mb-6">Motive pentru schimbarea administratorului</h2>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-yellow-50 p-6 rounded-lg">
                <h3 className="text-2xl font-semibold text-yellow-900 mb-4">Motive frecvente</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Demisia administratorului actual</li>
                  <li>• Expirarea mandatului</li>
                  <li>• Schimbarea strategiei de management</li>
                  <li>• Cerințe ale asociaților</li>
                  <li>• Incompatibilități legale</li>
                </ul>
              </div>

              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="text-2xl font-semibold text-green-900 mb-4">Beneficii</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Management îmbunătățit</li>
                  <li>• Conformitate legală</li>
                  <li>• Reprezentare actualizată</li>
                  <li>• Responsabilități clare</li>
                  <li>• Continuitatea activității</li>
                </ul>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-primaryColor mb-6">Documentele necesare</h2>

            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <ul className="space-y-2 text-gray-700">
                <li>• Hotărârea AGEA de numire/revocare administrator</li>
                <li>• Demisia administratorului actual (dacă este cazul)</li>
                <li>• Acceptarea mandatului de către noul administrator</li>
                <li>• Copii CI ale tuturor administratorilor</li>
                <li>• Cazierul judiciar al noului administrator</li>
                <li>• Declarația pe propria răspundere</li>
                <li>• CV-ul noului administrator</li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold text-primaryColor mb-6">Procedura de schimbare</h2>

            <div className="space-y-6">
              <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
                <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
                  1
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Verificarea eligibilității</h4>
                  <p className="text-gray-700">Verificăm că noul administrator îndeplinește condițiile legale.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
                <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
                  2
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Organizarea AGEA</h4>
                  <p className="text-gray-700">Organizăm adunarea generală pentru numirea noului administrator.</p>
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
                  <h4 className="font-semibold text-gray-900">Actualizarea la ANAF</h4>
                  <p className="text-gray-700">Notificăm ANAF despre schimbarea reprezentantului legal.</p>
                </div>
              </div>
            </div>

            <div className="bg-green-50 p-6 rounded-lg mt-8">
              <h3 className="text-xl font-semibold text-green-900 mb-3">Timp de procesare: 5-7 zile lucrătoare</h3>
              <p className="text-gray-700">
                Schimbarea administratorului se finalizează în 5-7 zile lucrătoare de la depunerea dosarului complet.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
