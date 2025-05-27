import FinanzNavbar from "../../../../navbar"
import Footer from "../../../../components/footer"

export default function CodCaenPfaPage() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <FinanzNavbar />
      <main className="container mx-auto py-12 px-4 mt-16 xl:mt-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-primaryColor mb-8">Adăugare Cod CAEN PFA</h1>

          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-700 mb-8">
              Vă ajutăm să adăugați noi coduri CAEN pentru a extinde activitatea PFA-ului dumneavoastră.
            </p>

            <div className="bg-green-50 p-6 rounded-lg mb-8">
              <h3 className="text-2xl font-semibold text-green-900 mb-4">Serviciu adăugare cod CAEN PFA</h3>
              <div className="text-3xl font-bold text-green-900 mb-4">149 RON</div>
              <p className="text-gray-700">Include toate procedurile și taxele!</p>
            </div>

            <h2 className="text-3xl font-bold text-primaryColor mb-6">Când să adăugați noi coduri CAEN</h2>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-2xl font-semibold text-primaryColor mb-4">Motive pentru extindere</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Diversificarea activității</li>
                  <li>• Noi oportunități de business</li>
                  <li>• Cerințe ale clienților</li>
                  <li>• Accesarea de fonduri europene</li>
                  <li>• Participarea la licitații</li>
                </ul>
              </div>

              <div className="bg-yellow-50 p-6 rounded-lg">
                <h3 className="text-2xl font-semibold text-yellow-900 mb-4">Beneficii</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Flexibilitate în activitate</li>
                  <li>• Venituri suplimentare</li>
                  <li>• Reducerea riscurilor</li>
                  <li>• Oportunități noi de colaborare</li>
                  <li>• Creșterea competitivității</li>
                </ul>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-primaryColor mb-6">Documentele necesare</h2>

            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <ul className="space-y-2 text-gray-700">
                <li>• Cererea de modificare la ANAF</li>
                <li>• Justificarea pentru noile coduri CAEN</li>
                <li>• Copia autorizației PFA</li>
                <li>• Copia CI a titularului</li>
                <li>• Declarația pe propria răspundere</li>
                <li>• Autorizațiile specifice (dacă este cazul)</li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold text-primaryColor mb-6">Procedura de adăugare</h2>

            <div className="space-y-6">
              <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
                <div className="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
                  1
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Consultanță pentru alegerea codurilor</h4>
                  <p className="text-gray-700">Vă consiliem pentru alegerea celor mai potrivite coduri CAEN.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
                <div className="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
                  2
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Pregătirea documentelor</h4>
                  <p className="text-gray-700">Întocmim toate documentele necesare pentru modificare.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
                <div className="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
                  3
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Depunerea la ANAF</h4>
                  <p className="text-gray-700">Depunem cererea la Administrația Financiară competentă.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
                <div className="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
                  4
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Confirmarea modificării</h4>
                  <p className="text-gray-700">Obținem confirmarea și vă predăm documentele actualizate.</p>
                </div>
              </div>
            </div>

            <div className="bg-green-50 p-6 rounded-lg mt-8">
              <h3 className="text-xl font-semibold text-green-900 mb-3">Timp de procesare: 1-3 zile lucrătoare</h3>
              <p className="text-gray-700">
                Adăugarea codurilor CAEN pentru PFA se finalizează rapid, în 1-3 zile lucrătoare.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
