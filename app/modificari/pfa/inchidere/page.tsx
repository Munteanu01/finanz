import FinanzNavbar from "../../../../navbar"
import Footer from "../../../../components/footer"

export default function InchiderePfaPage() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <FinanzNavbar />
      <main className="container mx-auto py-12 px-4 mt-16 xl:mt-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-primaryColor mb-8">Închidere PFA</h1>

          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-700 mb-8">
              Vă asistăm în procedura de închidere definitivă a PFA-ului dumneavoastră cu toate obligațiile legale.
            </p>

            <div className="bg-red-50 p-6 rounded-lg mb-8">
              <h3 className="text-2xl font-semibold text-red-900 mb-4">Serviciu închidere PFA</h3>
              <div className="text-3xl font-bold text-red-900 mb-4">199 RON</div>
              <p className="text-gray-700">Include toate procedurile și declarațiile finale!</p>
            </div>

            <h2 className="text-3xl font-bold text-primaryColor mb-6">Documentele necesare</h2>

            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <ul className="space-y-2 text-gray-700">
                <li>• Cererea de radiere la ANAF</li>
                <li>• Declarațiile fiscale finale</li>
                <li>• Dovada achitării datoriilor</li>
                <li>• Declarația TVA finală (dacă este cazul)</li>
                <li>• Copia autorizației PFA</li>
                <li>• Copia CI a titularului</li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold text-primaryColor mb-6">Procedura de închidere</h2>

            <div className="space-y-6">
              <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
                <div className="bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
                  1
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Cererea de radiere</h4>
                  <p className="text-gray-700">Se depune cererea de radiere la Administrația Financiară competentă.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
                <div className="bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
                  2
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Declarațiile fiscale finale</h4>
                  <p className="text-gray-700">Se depun declarațiile fiscale finale și se achită toate obligațiile.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
                <div className="bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
                  3
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Verificarea ANAF</h4>
                  <p className="text-gray-700">ANAF verifică situația fiscală și confirmă lipsa datoriilor.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
                <div className="bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
                  4
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Radiere din evidențe</h4>
                  <p className="text-gray-700">Se emite decizia de radiere și PFA-ul este eliminat din evidențe.</p>
                </div>
              </div>
            </div>

            <div className="bg-green-50 p-6 rounded-lg mt-8">
              <h3 className="text-xl font-semibold text-green-900 mb-3">Timp de procesare: 5-10 zile lucrătoare</h3>
              <p className="text-gray-700">
                Procedura de închidere PFA se finalizează în 5-10 zile lucrătoare de la depunerea dosarului complet.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
