import FinanzNavbar from "../../../../navbar"
import Footer from "../../../../components/footer"

export default function SuspendarePfaPage() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <FinanzNavbar />
      <main className="container mx-auto py-12 px-4 mt-16 xl:mt-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-primaryColor mb-8">Suspendare Activitate PFA</h1>

          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-700 mb-8">
              Vă asistăm în procedura de suspendare temporară a activității PFA-ului dumneavoastră.
            </p>

            <div className="bg-orange-50 p-6 rounded-lg mb-8">
              <h3 className="text-2xl font-semibold text-orange-900 mb-4">Serviciu suspendare activitate PFA</h3>
              <div className="text-3xl font-bold text-orange-900 mb-4">199 RON</div>
              <p className="text-gray-700">Include toate procedurile și declarațiile!</p>
            </div>

            <h2 className="text-3xl font-bold text-primaryColor mb-6">Documentele necesare</h2>

            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <ul className="space-y-2 text-gray-700">
                <li>• Cererea de suspendare la ANAF</li>
                <li>• Declarațiile fiscale la zi</li>
                <li>• Dovada achitării obligațiilor</li>
                <li>• Copia autorizației PFA</li>
                <li>• Copia CI a titularului</li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold text-primaryColor mb-6">Procedura de suspendare</h2>

            <div className="space-y-6">
              <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
                <div className="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
                  1
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Regularizarea obligațiilor</h4>
                  <p className="text-gray-700">Achităm toate obligațiile fiscale și sociale restante.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
                <div className="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
                  2
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Pregătirea documentelor</h4>
                  <p className="text-gray-700">Întocmim toate documentele necesare pentru suspendare.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
                <div className="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
                  3
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Depunerea la ANAF</h4>
                  <p className="text-gray-700">Depunem cererea de suspendare la Administrația Financiară.</p>
                </div>
              </div>
            </div>

            <div className="bg-red-50 p-6 rounded-lg mt-8">
              <h3 className="text-xl font-semibold text-red-900 mb-3">Atenție!</h3>
              <p className="text-gray-700">
                Suspendarea poate fi acordată pentru maximum 3 ani. După această perioadă, PFA-ul trebuie să își reia
                activitatea sau să inițieze procedura de închidere.
              </p>
            </div>

            <div className="bg-green-50 p-6 rounded-lg mt-8">
              <h3 className="text-xl font-semibold text-green-900 mb-3">Timp de procesare: 3-5 zile lucrătoare</h3>
              <p className="text-gray-700">Suspendarea activității PFA se finalizează în 3-5 zile lucrătoare.</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
