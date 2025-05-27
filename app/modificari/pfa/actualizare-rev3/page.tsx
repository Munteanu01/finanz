import FinanzNavbar from "../../../../navbar"
import Footer from "../../../../components/footer"

export default function ActualizareRev3PfaPage() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <FinanzNavbar />
      <main className="container mx-auto py-12 px-4 mt-16 xl:mt-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-primaryColor mb-8">Actualizare Rev. 3 PFA</h1>

          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-700 mb-8">
              Vă ajutăm să actualizați formularul Rev. 3 pentru PFA-ul dumneavoastră, asigurând conformitatea cu
              cerințele ANAF și evitarea sancțiunilor.
            </p>

            <div className="bg-green-50 p-6 rounded-lg mb-8">
              <h3 className="text-2xl font-semibold text-green-900 mb-4">Serviciu actualizare Rev. 3 PFA</h3>
              <div className="text-3xl font-bold text-green-900 mb-4">149 RON</div>
              <p className="text-gray-700">Include întocmirea și depunerea formularului!</p>
            </div>

            <h2 className="text-3xl font-bold text-primaryColor mb-6">Când este necesar pentru PFA</h2>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-2xl font-semibold text-primaryColor mb-4">Modificări frecvente</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Schimbarea sediului de activitate</li>
                  <li>• Adăugarea de noi coduri CAEN</li>
                  <li>• Modificarea datelor personale</li>
                  <li>• Schimbarea regimului fiscal</li>
                  <li>• Deschiderea de puncte de lucru</li>
                </ul>
              </div>

              <div className="bg-orange-50 p-6 rounded-lg">
                <h3 className="text-2xl font-semibold text-orange-900 mb-4">Termene importante</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• 30 de zile de la modificare</li>
                  <li>• Amenzi pentru întârziere</li>
                  <li>• Depunere obligatorie</li>
                  <li>• Actualizare anuală recomandată</li>
                </ul>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-primaryColor mb-6">Documentele necesare</h2>

            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <ul className="space-y-2 text-gray-700">
                <li>• Copia autorizației PFA</li>
                <li>• Copia CI a titularului</li>
                <li>• Documentele justificative pentru modificări</li>
                <li>• Declarația pe propria răspundere</li>
                <li>• Dovada noului sediu (dacă este cazul)</li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold text-primaryColor mb-6">Procedura de actualizare</h2>

            <div className="space-y-6">
              <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
                <div className="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
                  1
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Evaluarea modificărilor</h4>
                  <p className="text-gray-700">Analizăm toate modificările care trebuie raportate pentru PFA.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
                <div className="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
                  2
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Completarea Rev. 3</h4>
                  <p className="text-gray-700">Completăm formularul Rev. 3 cu toate datele actualizate.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
                <div className="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
                  3
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Depunerea la ANAF</h4>
                  <p className="text-gray-700">Depunem formularul la Administrația Financiară competentă.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
                <div className="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
                  4
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Urmărirea procesării</h4>
                  <p className="text-gray-700">Urmărim procesarea formularului și obținem confirmarea.</p>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg mt-8">
              <h3 className="text-xl font-semibold text-primaryColor mb-3">Timp de procesare: 1-2 zile lucrătoare</h3>
              <p className="text-gray-700">
                Actualizarea Rev. 3 pentru PFA se finalizează rapid, în 1-2 zile lucrătoare.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
