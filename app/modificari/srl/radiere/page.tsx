import FinanzNavbar from "../../../../navbar"
import Footer from "../../../../components/footer"

export default function RadiereSrlPage() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <FinanzNavbar />
      <main className="container mx-auto py-12 px-4 mt-16 xl:mt-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-primaryColor mb-8">Radiere Firmă SRL</h1>

          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-700 mb-8">
              Vă asistăm în procedura de radiere definitivă a societății dumneavoastră din registrele oficiale.
            </p>

            <div className="bg-red-50 p-6 rounded-lg mb-8">
              <h3 className="text-2xl font-semibold text-red-900 mb-4">Serviciu radiere firmă</h3>
              <div className="text-3xl font-bold text-red-900 mb-4">1.499 RON</div>
              <p className="text-gray-700">Include toate procedurile de lichidare și radiere!</p>
            </div>

            <h2 className="text-3xl font-bold text-primaryColor mb-6">Tipuri de radiere</h2>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-2xl font-semibold text-primaryColor mb-4">Radiere voluntară</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• La cererea asociaților</li>
                  <li>• După procedura de lichidare</li>
                  <li>• Cu plata tuturor datoriilor</li>
                  <li>• Distribuirea activelor</li>
                  <li>• Procedură completă</li>
                </ul>
              </div>

              <div className="bg-orange-50 p-6 rounded-lg">
                <h3 className="text-2xl font-semibold text-orange-900 mb-4">Radiere din oficiu</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Lipsă activitate 3 ani consecutivi</li>
                  <li>• Nerespectarea obligațiilor</li>
                  <li>• Procedură simplificată</li>
                  <li>• Fără lichidator</li>
                  <li>• Radiere automată</li>
                </ul>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-primaryColor mb-6">Documentele necesare</h2>

            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <ul className="space-y-2 text-gray-700">
                <li>• Hotărârea AGEA de dizolvare și lichidare</li>
                <li>• Bilanțul de lichidare</li>
                <li>• Raportul lichidatorului</li>
                <li>• Dovada publicării în Monitorul Oficial</li>
                <li>• Declarațiile fiscale finale</li>
                <li>• Dovada achitării tuturor datoriilor</li>
                <li>• Procesul verbal de distribuire a activelor</li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold text-primaryColor mb-6">Procedura de radiere</h2>

            <div className="space-y-6">
              <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
                <div className="bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
                  1
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Dizolvarea societății</h4>
                  <p className="text-gray-700">Adoptăm hotărârea de dizolvare și numim lichidatorul.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
                <div className="bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
                  2
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Publicarea în MO</h4>
                  <p className="text-gray-700">Publicăm anunțul de dizolvare în Monitorul Oficial.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
                <div className="bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
                  3
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Lichidarea activelor</h4>
                  <p className="text-gray-700">Lichidăm activele și achităm toate datoriile societății.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
                <div className="bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
                  4
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Cererea de radiere</h4>
                  <p className="text-gray-700">Depunem cererea de radiere cu toate documentele la ONRC.</p>
                </div>
              </div>
            </div>

            <div className="bg-yellow-50 p-6 rounded-lg mt-8">
              <h3 className="text-xl font-semibold text-yellow-900 mb-3">Timp de procesare: 3-6 luni</h3>
              <p className="text-gray-700">
                Procedura completă de radiere durează între 3-6 luni, în funcție de complexitatea lichidării.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
