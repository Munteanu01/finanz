import FinanzNavbar from "../../../../navbar"
import Footer from "../../../../components/footer"

export default function CapitalSrlPage() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <FinanzNavbar />
      <main className="container mx-auto py-12 px-4 mt-16 xl:mt-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-blue-900 mb-8">Majorare/Micșorare Capital Social SRL</h1>

          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-700 mb-8">
              Vă asistăm în procedura de modificare a capitalului social al societății dumneavoastră, fie că este vorba
              despre majorare sau micșorare.
            </p>

            <div className="bg-blue-50 p-6 rounded-lg mb-8">
              <h3 className="text-2xl font-semibold text-blue-900 mb-4">Serviciu modificare capital social</h3>
              <div className="text-3xl font-bold text-blue-900 mb-4">599 RON</div>
              <p className="text-gray-700">Include toate procedurile și evaluările necesare!</p>
            </div>

            <h2 className="text-3xl font-bold text-blue-900 mb-6">Tipuri de modificări</h2>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="text-2xl font-semibold text-green-900 mb-4">Majorarea capitalului</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Aport în numerar de la asociați</li>
                  <li>• Aport în natură (bunuri, echipamente)</li>
                  <li>• Încorporarea rezervelor</li>
                  <li>• Admiterea de noi asociați</li>
                  <li>• Compensarea cu creanțe</li>
                </ul>
              </div>

              <div className="bg-red-50 p-6 rounded-lg">
                <h3 className="text-2xl font-semibold text-red-900 mb-4">Micșorarea capitalului</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Rambursarea către asociați</li>
                  <li>• Acoperirea pierderilor</li>
                  <li>• Retragerea unui asociat</li>
                  <li>• Optimizarea structurii financiare</li>
                  <li>• Reducerea obligațiilor</li>
                </ul>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-blue-900 mb-6">Documentele necesare</h2>

            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <ul className="space-y-2 text-gray-700">
                <li>• Hotărârea AGEA de modificare capital social</li>
                <li>• Raportul administratorului</li>
                <li>• Situațiile financiare actualizate</li>
                <li>• Evaluarea aporturilor în natură (dacă este cazul)</li>
                <li>• Dovada vărsării noului capital</li>
                <li>• Copii CI ale tuturor asociaților</li>
                <li>• Actul constitutiv modificat</li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold text-blue-900 mb-6">Procedura de modificare</h2>

            <div className="space-y-6">
              <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
                <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
                  1
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Analiza situației financiare</h4>
                  <p className="text-gray-700">Analizăm situația financiară și stabilim modalitatea de modificare.</p>
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
                  <h4 className="font-semibold text-gray-900">Publicarea în Monitorul Oficial</h4>
                  <p className="text-gray-700">Publicăm anunțul de modificare pentru informarea creditorilor.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
                <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
                  4
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Depunerea la ONRC</h4>
                  <p className="text-gray-700">Depunem dosarul la Oficiul Național al Registrului Comerțului.</p>
                </div>
              </div>
            </div>

            <div className="bg-yellow-50 p-6 rounded-lg mt-8">
              <h3 className="text-xl font-semibold text-yellow-900 mb-3">Timp de procesare: 30-45 zile</h3>
              <p className="text-gray-700">
                Modificarea capitalului social durează 30-45 zile din cauza termenului de opoziție al creditorilor.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
