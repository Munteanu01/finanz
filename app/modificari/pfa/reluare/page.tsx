import FinanzNavbar from "../../../../navbar"
import Footer from "../../../../components/footer"

export default function ReluarePfaPage() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <FinanzNavbar />
      <main className="container mx-auto py-12 px-4 mt-16 xl:mt-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-primaryColor mb-8">Reluare Activitate PFA</h1>

          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-700 mb-8">
              Vă asistăm în procedura de reluare a activității PFA-ului dumneavoastră după o perioadă de suspendare.
            </p>

            <div className="bg-green-50 p-6 rounded-lg mb-8">
              <h3 className="text-2xl font-semibold text-green-900 mb-4">Serviciu reluare activitate PFA</h3>
              <div className="text-3xl font-bold text-green-900 mb-4">199 RON</div>
              <p className="text-gray-700">Include toate procedurile și actualizările!</p>
            </div>

            <h2 className="text-3xl font-bold text-primaryColor mb-6">Documentele necesare</h2>

            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <ul className="space-y-2 text-gray-700">
                <li>• Cererea de reluare la ANAF</li>
                <li>• Declarațiile fiscale actualizate</li>
                <li>• Dovada achitării obligațiilor</li>
                <li>• Copia autorizației PFA</li>
                <li>• Copia CI a titularului</li>
                <li>• Autorizațiile necesare (dacă este cazul)</li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold text-primaryColor mb-6">Procedura de reluare</h2>

            <div className="space-y-6">
              <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
                <div className="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
                  1
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Verificarea situației</h4>
                  <p className="text-gray-700">Verificăm situația PFA-ului și condițiile pentru reluare.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
                <div className="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
                  2
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Actualizarea documentelor</h4>
                  <p className="text-gray-700">Actualizăm toate documentele și declarațiile necesare.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
                <div className="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
                  3
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Depunerea la ANAF</h4>
                  <p className="text-gray-700">Depunem cererea de reluare la Administrația Financiară.</p>
                </div>
              </div>
            </div>

            <div className="bg-green-50 p-6 rounded-lg mt-8">
              <h3 className="text-xl font-semibold text-green-900 mb-3">Timp de procesare: 3-5 zile lucrătoare</h3>
              <p className="text-gray-700">Reluarea activității PFA se finalizează în 3-5 zile lucrătoare.</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
