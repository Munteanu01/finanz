import FinanzNavbar from "../../../../navbar"
import Footer from "../../../../components/footer"

export default function FormaJuridicaSrlPage() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <FinanzNavbar />
      <main className="container mx-auto py-12 px-4 mt-16 xl:mt-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-blue-900 mb-8">Modificare Formă Juridică SRL-D în SRL</h1>

          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-700 mb-8">
              Vă asistăm în procedura de transformare a societății cu răspundere limitată cu asociat unic (SRL-D) în
              societate cu răspundere limitată (SRL).
            </p>

            <div className="bg-blue-50 p-6 rounded-lg mb-8">
              <h3 className="text-2xl font-semibold text-blue-900 mb-4">Serviciu modificare formă juridică</h3>
              <div className="text-3xl font-bold text-blue-900 mb-4">699 RON</div>
              <p className="text-gray-700">Include toate procedurile și documentele!</p>
            </div>

            <h2 className="text-3xl font-bold text-blue-900 mb-6">Diferențe între SRL-D și SRL</h2>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-red-50 p-6 rounded-lg">
                <h3 className="text-2xl font-semibold text-red-900 mb-4">SRL-D (cu asociat unic)</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Un singur asociat</li>
                  <li>• Decizie unilaterală</li>
                  <li>• Proceduri simplificate</li>
                  <li>• Răspundere limitată</li>
                  <li>• Flexibilitate redusă</li>
                </ul>
              </div>

              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="text-2xl font-semibold text-green-900 mb-4">SRL (cu mai mulți asociați)</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Minimum 2 asociați</li>
                  <li>• Adunare generală</li>
                  <li>• Proceduri complexe</li>
                  <li>• Răspundere limitată</li>
                  <li>• Flexibilitate crescută</li>
                </ul>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-blue-900 mb-6">Documentele necesare</h2>

            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <ul className="space-y-2 text-gray-700">
                <li>• Decizia asociatului unic de transformare</li>
                <li>• Contractul de cesiune către noul asociat</li>
                <li>• Actul constitutiv modificat pentru SRL</li>
                <li>• Copii CI ale tuturor asociaților</li>
                <li>• Dovada plății prețului de cesiune</li>
                <li>• Situațiile financiare actualizate</li>
                <li>• Evaluarea părților sociale (dacă este cazul)</li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold text-blue-900 mb-6">Procedura de transformare</h2>

            <div className="space-y-6">
              <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
                <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
                  1
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Identificarea noului asociat</h4>
                  <p className="text-gray-700">Identificăm și verificăm eligibilitatea noului asociat.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
                <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
                  2
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Evaluarea societății</h4>
                  <p className="text-gray-700">Evaluăm societatea pentru stabilirea valorii părților sociale.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
                <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
                  3
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Redactarea documentelor</h4>
                  <p className="text-gray-700">Redactăm contractul de cesiune și noul act constitutiv.</p>
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

            <div className="bg-green-50 p-6 rounded-lg mt-8">
              <h3 className="text-xl font-semibold text-green-900 mb-3">Timp de procesare: 7-10 zile lucrătoare</h3>
              <p className="text-gray-700">
                Transformarea formei juridice se finalizează în 7-10 zile lucrătoare de la depunerea dosarului complet.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
