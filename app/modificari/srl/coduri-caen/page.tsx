import FinanzNavbar from "../../../../navbar"
import Footer from "../../../../components/footer"

export default function CodurriCaenSrlPage() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <FinanzNavbar />
      <main className="container mx-auto py-12 px-4 mt-16 xl:mt-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-blue-900 mb-8">Adăugare/Ștergere Coduri CAEN SRL</h1>

          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-700 mb-8">
              Vă ajutăm să adăugați sau să ștergeți coduri CAEN pentru a reflecta corect activitățile societății
              dumneavoastră.
            </p>

            <div className="bg-blue-50 p-6 rounded-lg mb-8">
              <h3 className="text-2xl font-semibold text-blue-900 mb-4">Serviciu modificare coduri CAEN</h3>
              <div className="text-3xl font-bold text-blue-900 mb-4">249 RON</div>
              <p className="text-gray-700">Include toate procedurile și taxele!</p>
            </div>

            <h2 className="text-3xl font-bold text-blue-900 mb-6">Când este necesară modificarea</h2>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="text-2xl font-semibold text-green-900 mb-4">Adăugare coduri CAEN</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Extinderea activității</li>
                  <li>• Diversificarea serviciilor</li>
                  <li>• Noi oportunități de business</li>
                  <li>• Accesarea de fonduri europene</li>
                  <li>• Participarea la licitații</li>
                </ul>
              </div>

              <div className="bg-red-50 p-6 rounded-lg">
                <h3 className="text-2xl font-semibold text-red-900 mb-4">Ștergere coduri CAEN</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Încetarea unor activități</li>
                  <li>• Simplificarea obiectului de activitate</li>
                  <li>• Optimizarea fiscală</li>
                  <li>• Conformarea cu cerințele ANAF</li>
                  <li>• Reducerea obligațiilor</li>
                </ul>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-blue-900 mb-6">Documentele necesare</h2>

            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <ul className="space-y-2 text-gray-700">
                <li>• Hotărârea AGEA de modificare coduri CAEN</li>
                <li>• Justificarea pentru noile coduri CAEN</li>
                <li>• Copii CI ale administratorilor</li>
                <li>• Certificatul de înregistrare al societății</li>
                <li>• Declarația pe propria răspundere</li>
                <li>• Autorizațiile specifice (dacă este cazul)</li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold text-blue-900 mb-6">Procedura de modificare</h2>

            <div className="space-y-6">
              <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
                <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
                  1
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Consultanță pentru alegerea codurilor</h4>
                  <p className="text-gray-700">Vă consiliem pentru alegerea celor mai potrivite coduri CAEN.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
                <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
                  2
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Pregătirea documentelor</h4>
                  <p className="text-gray-700">Întocmim toate documentele necesare pentru modificare.</p>
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
                  <p className="text-gray-700">Informăm ANAF despre modificările aduse codurilor CAEN.</p>
                </div>
              </div>
            </div>

            <div className="bg-green-50 p-6 rounded-lg mt-8">
              <h3 className="text-xl font-semibold text-green-900 mb-3">Timp de procesare: 3-5 zile lucrătoare</h3>
              <p className="text-gray-700">
                Modificarea codurilor CAEN se finalizează în 3-5 zile lucrătoare de la depunerea dosarului complet.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
