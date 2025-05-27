import FinanzNavbar from "../../../../navbar"
import Footer from "../../../../components/footer"

export default function PrelungireSediuSrlPage() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <FinanzNavbar />
      <main className="container mx-auto py-12 px-4 mt-16 xl:mt-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-primaryColor mb-8">Prelungire Sediu Social SRL</h1>

          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-700 mb-8">
              Vă asistăm în procedura de prelungire a contractului pentru sediul social al societății dumneavoastră,
              asigurând continuitatea activității fără întreruperi.
            </p>

            <div className="bg-blue-50 p-6 rounded-lg mb-8">
              <h3 className="text-2xl font-semibold text-primaryColor mb-4">Serviciu prelungire sediu social</h3>
              <div className="text-3xl font-bold text-primaryColor mb-4">249 RON</div>
              <p className="text-gray-700">Include toate formalitățile și actualizările necesare!</p>
            </div>

            <h2 className="text-3xl font-bold text-primaryColor mb-6">Când este necesară prelungirea</h2>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-yellow-50 p-6 rounded-lg">
                <h3 className="text-2xl font-semibold text-yellow-900 mb-4">Situații frecvente</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Expirarea contractului de închiriere</li>
                  <li>• Prelungirea acordului de găzduire</li>
                  <li>• Actualizarea documentelor ONRC</li>
                  <li>• Menținerea adresei pentru corespondență</li>
                </ul>
              </div>

              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="text-2xl font-semibold text-green-900 mb-4">Avantaje</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Continuitatea activității</li>
                  <li>• Evitarea complicațiilor legale</li>
                  <li>• Menținerea adresei cunoscute</li>
                  <li>• Conformitate cu cerințele ONRC</li>
                </ul>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-primaryColor mb-6">Documentele necesare</h2>

            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <ul className="space-y-2 text-gray-700">
                <li>• Contractul de închiriere prelungit</li>
                <li>• Acordul proprietarului pentru prelungire</li>
                <li>• Certificatul de înregistrare al societății</li>
                <li>• Copii CI ale administratorilor</li>
                <li>• Declarația pe propria răspundere</li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold text-primaryColor mb-6">Procedura de prelungire</h2>

            <div className="space-y-6">
              <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
                <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
                  1
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Verificarea documentelor</h4>
                  <p className="text-gray-700">Verificăm validitatea și conformitatea noului contract de închiriere.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
                <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
                  2
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Pregătirea dosarului</h4>
                  <p className="text-gray-700">Întocmim toate documentele necesare pentru actualizarea la ONRC.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
                <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
                  3
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Depunerea la ONRC</h4>
                  <p className="text-gray-700">Depunem documentele la Oficiul Național al Registrului Comerțului.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
                <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
                  4
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Actualizarea la ANAF</h4>
                  <p className="text-gray-700">Notificăm ANAF despre prelungirea contractului de sediu.</p>
                </div>
              </div>
            </div>

            <div className="bg-green-50 p-6 rounded-lg mt-8">
              <h3 className="text-xl font-semibold text-green-900 mb-3">Timp de procesare: 3-5 zile lucrătoare</h3>
              <p className="text-gray-700">
                Procedura de prelungire se finalizează în 3-5 zile lucrătoare de la depunerea documentelor.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
