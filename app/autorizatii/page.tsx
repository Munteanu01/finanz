import FinanzNavbar from "../../navbar"
import Footer from "../../components/footer"

export default function AutorizatiiPage() {
  return (
    <div className="min-h-screen">
      <FinanzNavbar />
      <main className="container mx-auto py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-blue-900 mb-8">Autorizații și Licențe</h1>

          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-700 mb-8">
              Vă asistăm în obținerea tuturor autorizațiilor și licențelor necesare pentru desfășurarea activității
              dumneavoastră.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-2xl font-semibold text-blue-900 mb-4">Tipuri de autorizații</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Autorizație sanitară veterinară</li>
                  <li>• Autorizație de mediu</li>
                  <li>• Autorizație de construire</li>
                  <li>• Licență de transport</li>
                  <li>• Autorizație ISU</li>
                  <li>• Autorizație de funcționare</li>
                </ul>
              </div>

              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="text-2xl font-semibold text-green-900 mb-4">Serviciile noastre</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Consultanță specializată</li>
                  <li>• Pregătirea documentației</li>
                  <li>• Depunerea dosarelor</li>
                  <li>• Urmărirea procedurilor</li>
                  <li>• Reprezentare în relația cu autoritățile</li>
                  <li>• Suport post-autorizare</li>
                </ul>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-blue-900 mb-6">Procedura de obținere</h2>

            <div className="space-y-6 mb-12">
              <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
                <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
                  1
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Evaluarea necesităților</h4>
                  <p className="text-gray-700">
                    Analizăm activitatea dumneavoastră și identificăm autorizațiile necesare.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
                <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
                  2
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Pregătirea documentației</h4>
                  <p className="text-gray-700">Întocmim toate documentele necesare conform cerințelor legale.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
                <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
                  3
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Depunerea și urmărirea</h4>
                  <p className="text-gray-700">Depunem dosarele și urmărim îndeaproape procesul de aprobare.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
                <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
                  4
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Obținerea autorizației</h4>
                  <p className="text-gray-700">Ridicăm autorizația și vă oferim suport pentru implementare.</p>
                </div>
              </div>
            </div>

            <div className="bg-yellow-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-yellow-900 mb-3">Atenție!</h3>
              <p className="text-gray-700">
                Termenele de obținere variază în funcție de tipul autorizației și complexitatea dosarului. Vă recomandăm
                să începeți procedura cu suficient timp înainte de începerea activității.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
