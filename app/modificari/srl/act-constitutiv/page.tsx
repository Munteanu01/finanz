import FinanzNavbar from "../../../../navbar"
import Footer from "../../../../components/footer"

export default function ActConstitutivSrlPage() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <FinanzNavbar />
      <main className="container mx-auto py-12 px-4 mt-16 xl:mt-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-blue-900 mb-8">Actualizare Act Constitutiv SRL</h1>

          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-700 mb-8">
              Vă asistăm în actualizarea actului constitutiv al societății dumneavoastră pentru a reflecta toate
              modificările intervenite.
            </p>

            <div className="bg-blue-50 p-6 rounded-lg mb-8">
              <h3 className="text-2xl font-semibold text-blue-900 mb-4">Serviciu actualizare act constitutiv</h3>
              <div className="text-3xl font-bold text-blue-900 mb-4">399 RON</div>
              <p className="text-gray-700">Include redactarea și depunerea actului actualizat!</p>
            </div>

            <h2 className="text-3xl font-bold text-blue-900 mb-6">Când este necesară actualizarea</h2>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-yellow-50 p-6 rounded-lg">
                <h3 className="text-2xl font-semibold text-yellow-900 mb-4">Modificări structurale</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Schimbarea asociaților</li>
                  <li>• Modificarea capitalului social</li>
                  <li>• Schimbarea administratorilor</li>
                  <li>• Modificarea sediului social</li>
                  <li>• Schimbarea denumirii</li>
                </ul>
              </div>

              <div className="bg-orange-50 p-6 rounded-lg">
                <h3 className="text-2xl font-semibold text-orange-900 mb-4">Modificări operaționale</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Schimbarea obiectului de activitate</li>
                  <li>• Modificarea duratei societății</li>
                  <li>• Schimbarea modului de administrare</li>
                  <li>• Actualizarea clauzelor statutare</li>
                  <li>• Conformarea cu legislația</li>
                </ul>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-blue-900 mb-6">Documentele necesare</h2>

            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <ul className="space-y-2 text-gray-700">
                <li>• Hotărârea AGEA de modificare act constitutiv</li>
                <li>• Actul constitutiv actual</li>
                <li>• Documentele justificative pentru modificări</li>
                <li>• Copii CI ale tuturor asociaților</li>
                <li>• Copii CI ale administratorilor</li>
                <li>• Certificatul de înregistrare al societății</li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold text-blue-900 mb-6">Procedura de actualizare</h2>

            <div className="space-y-6">
              <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
                <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
                  1
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Analiza actului constitutiv actual</h4>
                  <p className="text-gray-700">
                    Analizăm actul constitutiv existent și identificăm modificările necesare.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
                <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
                  2
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Redactarea actului actualizat</h4>
                  <p className="text-gray-700">Redactăm noul act constitutiv cu toate modificările solicitate.</p>
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
                  <h4 className="font-semibold text-gray-900">Finalizarea procedurii</h4>
                  <p className="text-gray-700">Ridicăm documentele actualizate și vă predăm actul constitutiv nou.</p>
                </div>
              </div>
            </div>

            <div className="bg-green-50 p-6 rounded-lg mt-8">
              <h3 className="text-xl font-semibold text-green-900 mb-3">Timp de procesare: 5-7 zile lucrătoare</h3>
              <p className="text-gray-700">
                Actualizarea actului constitutiv se finalizează în 5-7 zile lucrătoare de la depunerea dosarului
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
