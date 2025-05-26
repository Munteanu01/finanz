import FinanzNavbar from "../../../navbar"
import Footer from "../../../components/footer"

export default function InchidereSrlPage() {
  return (
    <div className="min-h-screen">
      <FinanzNavbar />
      <main className="container mx-auto py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-blue-900 mb-8">Închidere SRL</h1>

          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-700 mb-8">
              Vă asistăm în procedura de închidere a societății cu răspundere limitată, asigurându-ne că toate
              obligațiile legale sunt îndeplinite corect.
            </p>

            <div className="bg-red-50 p-6 rounded-lg mb-8">
              <h3 className="text-2xl font-semibold text-red-900 mb-4">Pachet complet închidere SRL</h3>
              <div className="text-3xl font-bold text-red-900 mb-4">1.299 RON</div>
              <p className="text-gray-700">Include toate procedurile de lichidare și radiere!</p>
            </div>

            <h2 className="text-3xl font-bold text-blue-900 mb-6">Tipuri de închidere</h2>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-2xl font-semibold text-blue-900 mb-4">Închidere voluntară</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Decizia asociaților</li>
                  <li>• Procedură de lichidare</li>
                  <li>• Plata datoriilor</li>
                  <li>• Distribuirea activelor</li>
                  <li>• Radiere din ONRC</li>
                </ul>
              </div>

              <div className="bg-orange-50 p-6 rounded-lg">
                <h3 className="text-2xl font-semibold text-orange-900 mb-4">Radiere din oficiu</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Lipsă activitate 3 ani</li>
                  <li>• Nerespectarea obligațiilor</li>
                  <li>• Procedură simplificată</li>
                  <li>• Fără lichidator</li>
                  <li>• Radiere automată</li>
                </ul>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-blue-900 mb-6">Procedura de închidere</h2>

            <div className="space-y-6">
              <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
                <div className="bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
                  1
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Decizia de dizolvare</h4>
                  <p className="text-gray-700">
                    Adunarea generală extraordinară adoptă decizia de dizolvare și numește lichidatorul.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
                <div className="bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
                  2
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Publicarea în Monitorul Oficial</h4>
                  <p className="text-gray-700">
                    Se publică anunțul de dizolvare pentru informarea creditorilor și terților.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
                <div className="bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
                  3
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Procedura de lichidare</h4>
                  <p className="text-gray-700">
                    Lichidatorul inventariază activele, plătește datoriile și distribuie soldul asociaților.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
                <div className="bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
                  4
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Radiere din ONRC</h4>
                  <p className="text-gray-700">
                    Se depune cererea de radiere cu bilanțul de lichidare și raportul lichidatorului.
                  </p>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-blue-900 mb-6">Documentele necesare</h2>

            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <ul className="space-y-2 text-gray-700">
                <li>• Hotărârea AGEA de dizolvare</li>
                <li>• Bilanțul de lichidare</li>
                <li>• Raportul lichidatorului</li>
                <li>• Dovada publicării în MO</li>
                <li>• Declarațiile fiscale finale</li>
                <li>• Dovada achitării datoriilor</li>
              </ul>
            </div>

            <div className="bg-yellow-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-yellow-900 mb-3">Timp de procesare: 3-6 luni</h3>
              <p className="text-gray-700">
                Procedura completă de închidere durează între 3-6 luni, în funcție de complexitatea situației financiare
                a societății.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
