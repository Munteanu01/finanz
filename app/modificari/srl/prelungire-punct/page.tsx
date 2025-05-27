import FinanzNavbar from "../../../../navbar"
import Footer from "../../../../components/footer"

export default function PrelungirePunctSrlPage() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <FinanzNavbar />
      <main className="container mx-auto py-12 px-4 mt-16 xl:mt-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-primaryColor mb-8">Prelungire Punct de Lucru SRL</h1>

          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-700 mb-8">
              Vă ajutăm să prelungiți contractul pentru punctul de lucru al societății dumneavoastră, menținând
              continuitatea activității în locația secundară.
            </p>

            <div className="bg-blue-50 p-6 rounded-lg mb-8">
              <h3 className="text-2xl font-semibold text-primaryColor mb-4">Serviciu prelungire punct de lucru</h3>
              <div className="text-3xl font-bold text-primaryColor mb-4">199 RON</div>
              <p className="text-gray-700">Include toate procedurile și actualizările!</p>
            </div>

            <h2 className="text-3xl font-bold text-primaryColor mb-6">Ce este un punct de lucru</h2>

            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <p className="text-gray-700 leading-relaxed">
                Punctul de lucru este o locație secundară unde societatea desfășoară activități, diferită de sediul
                social. Poate fi un magazin, depozit, birou secundar sau orice altă locație de activitate.
              </p>
            </div>

            <h2 className="text-3xl font-bold text-primaryColor mb-6">Documentele necesare</h2>

            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <ul className="space-y-2 text-gray-700">
                <li>• Contractul de închiriere prelungit pentru punct</li>
                <li>• Acordul proprietarului pentru prelungire</li>
                <li>• Certificatul de înregistrare al societății</li>
                <li>• Copii CI ale administratorilor</li>
                <li>• Autorizațiile specifice activității (dacă este cazul)</li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold text-primaryColor mb-6">Procedura de prelungire</h2>

            <div className="space-y-6">
              <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
                <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
                  1
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Analiza contractului</h4>
                  <p className="text-gray-700">
                    Verificăm clauzele noului contract și conformitatea cu cerințele legale.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
                <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
                  2
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Întocmirea documentelor</h4>
                  <p className="text-gray-700">Pregătim toate documentele pentru actualizarea la ONRC.</p>
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
                  <p className="text-gray-700">Informăm ANAF despre prelungirea punctului de lucru.</p>
                </div>
              </div>
            </div>

            <div className="bg-green-50 p-6 rounded-lg mt-8">
              <h3 className="text-xl font-semibold text-green-900 mb-3">Timp de procesare: 3-5 zile lucrătoare</h3>
              <p className="text-gray-700">Prelungirea punctului de lucru se finalizează în 3-5 zile lucrătoare.</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
