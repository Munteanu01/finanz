import FinanzNavbar from "../../../../navbar"
import Footer from "../../../../components/footer"

export default function DeschiderePunctSrlPage() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <FinanzNavbar />
      <main className="container mx-auto py-12 px-4 mt-16 xl:mt-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-primaryColor mb-8">Deschidere Punct de Lucru SRL</h1>

          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-700 mb-8">
              Vă ajutăm să deschideți un punct de lucru secundar pentru societatea dumneavoastră, extinzând activitatea
              în noi locații cu toate formalitățile legale.
            </p>

            <div className="bg-blue-50 p-6 rounded-lg mb-8">
              <h3 className="text-2xl font-semibold text-primaryColor mb-4">Serviciu deschidere punct de lucru</h3>
              <div className="text-3xl font-bold text-primaryColor mb-4">349 RON</div>
              <p className="text-gray-700">Include toate procedurile și înregistrările!</p>
            </div>

            <h2 className="text-3xl font-bold text-primaryColor mb-6">Avantajele unui punct de lucru</h2>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="text-2xl font-semibold text-green-900 mb-4">Beneficii comerciale</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Extinderea geografică a activității</li>
                  <li>• Apropierea de clienți</li>
                  <li>• Diversificarea surselor de venit</li>
                  <li>• Optimizarea logisticii</li>
                  <li>• Creșterea vizibilității</li>
                </ul>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-2xl font-semibold text-primaryColor mb-4">Avantaje legale</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Aceeași personalitate juridică</li>
                  <li>• Fără capital social suplimentar</li>
                  <li>• Proceduri simplificate</li>
                  <li>• Costuri reduse vs. filială</li>
                  <li>• Management centralizat</li>
                </ul>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-primaryColor mb-6">Documentele necesare</h2>

            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <ul className="space-y-2 text-gray-700">
                <li>• Hotărârea AGEA de deschidere punct de lucru</li>
                <li>• Contract de închiriere pentru noul punct</li>
                <li>• Acordul proprietarului</li>
                <li>• Certificat de urbanism pentru punct</li>
                <li>• Copii CI ale administratorilor</li>
                <li>• Autorizațiile specifice activității</li>
                <li>• Planul de amplasare</li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold text-primaryColor mb-6">Procedura de deschidere</h2>

            <div className="space-y-6">
              <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
                <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
                  1
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Verificarea locației</h4>
                  <p className="text-gray-700">Verificăm că locația este potrivită pentru activitatea planificată.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
                <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
                  2
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Pregătirea documentelor</h4>
                  <p className="text-gray-700">Întocmim toate documentele necesare pentru înregistrare.</p>
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
                  <h4 className="font-semibold text-gray-900">Înregistrarea la ANAF</h4>
                  <p className="text-gray-700">Notificăm ANAF despre deschiderea noului punct de lucru.</p>
                </div>
              </div>
            </div>

            <div className="bg-green-50 p-6 rounded-lg mt-8">
              <h3 className="text-xl font-semibold text-green-900 mb-3">Timp de procesare: 5-7 zile lucrătoare</h3>
              <p className="text-gray-700">
                Deschiderea punctului de lucru se finalizează în 5-7 zile lucrătoare de la depunerea dosarului.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
