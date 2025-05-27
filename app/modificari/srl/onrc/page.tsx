import FinanzNavbar from "../../../../navbar"
import Footer from "../../../../components/footer"

export default function ActualizareOnrcSrlPage() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <FinanzNavbar />
      <main className="container mx-auto py-12 px-4 mt-16 xl:mt-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-primaryColor mb-8">Actualizare Date ONRC</h1>

          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-700 mb-8">
              Vă asistăm în actualizarea datelor societății la Oficiul Național al Registrului Comerțului, asigurând
              conformitatea cu cerințele legale.
            </p>

            <div className="bg-blue-50 p-6 rounded-lg mb-8">
              <h3 className="text-2xl font-semibold text-primaryColor mb-4">Serviciu actualizare date ONRC</h3>
              <div className="text-3xl font-bold text-primaryColor mb-4">299 RON</div>
              <p className="text-gray-700">Include toate procedurile și taxele!</p>
            </div>

            <h2 className="text-3xl font-bold text-primaryColor mb-6">Când este necesară actualizarea</h2>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-yellow-50 p-6 rounded-lg">
                <h3 className="text-2xl font-semibold text-yellow-900 mb-4">Modificări obligatorii</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Schimbarea datelor administratorilor</li>
                  <li>• Modificarea informațiilor de contact</li>
                  <li>• Actualizarea activității desfășurate</li>
                  <li>• Corectarea erorilor din dosarul ONRC</li>
                  <li>• Completarea informațiilor lipsă</li>
                </ul>
              </div>

              <div className="bg-red-50 p-6 rounded-lg">
                <h3 className="text-2xl font-semibold text-red-900 mb-4">Consecințe neactualizare</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Amenzi de la ONRC</li>
                  <li>• Probleme în relațiile comerciale</li>
                  <li>• Dificultăți în obținerea creditelor</li>
                  <li>• Neconformități legale</li>
                  <li>• Suspendarea activității</li>
                </ul>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-primaryColor mb-6">Documentele necesare</h2>

            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <ul className="space-y-2 text-gray-700">
                <li>• Hotărârea AGEA pentru modificări</li>
                <li>• Documentele justificative pentru modificări</li>
                <li>• Copii CI ale administratorilor</li>
                <li>• Certificatul de înregistrare al societății</li>
                <li>• Declarațiile pe propria răspundere</li>
                <li>• Dovezile pentru noile informații</li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold text-primaryColor mb-6">Procedura de actualizare</h2>

            <div className="space-y-6">
              <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
                <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
                  1
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Analiza dosarului ONRC</h4>
                  <p className="text-gray-700">Verificăm dosarul existent și identificăm informațiile de actualizat.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
                <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
                  2
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Pregătirea documentelor</h4>
                  <p className="text-gray-700">Întocmim toate documentele necesare pentru actualizare.</p>
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
                  <h4 className="font-semibold text-gray-900">Urmărirea procesării</h4>
                  <p className="text-gray-700">Monitorizăm procesarea dosarului și obținem confirmarea.</p>
                </div>
              </div>
            </div>

            <div className="bg-green-50 p-6 rounded-lg mt-8">
              <h3 className="text-xl font-semibold text-green-900 mb-3">Timp de procesare: 3-5 zile lucrătoare</h3>
              <p className="text-gray-700">
                Actualizarea datelor la ONRC se finalizează în 3-5 zile lucrătoare de la depunerea dosarului complet.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
