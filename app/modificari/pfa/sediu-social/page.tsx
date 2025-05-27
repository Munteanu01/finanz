import FinanzNavbar from "../../../../navbar"
import Footer from "../../../../components/footer"

export default function SediuSocialPfaPage() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <FinanzNavbar />
      <main className="container mx-auto py-12 px-4 mt-16 xl:mt-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-primaryColor mb-8">Schimbare Sediu Social PFA</h1>

          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-700 mb-8">
              Vă asistăm în procedura de schimbare a sediului social pentru PFA-ul dumneavoastră cu toate formalitățile
              necesare.
            </p>

            <div className="bg-green-50 p-6 rounded-lg mb-8">
              <h3 className="text-2xl font-semibold text-green-900 mb-4">Serviciu schimbare sediu social PFA</h3>
              <div className="text-3xl font-bold text-green-900 mb-4">199 RON</div>
              <p className="text-gray-700">Include toate procedurile și actualizările!</p>
            </div>

            <h2 className="text-3xl font-bold text-primaryColor mb-6">Documentele necesare</h2>

            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <ul className="space-y-2 text-gray-700">
                <li>• Cererea de modificare la ANAF</li>
                <li>• Contract de închiriere/Proprietate pentru noul sediu</li>
                <li>• Acordul proprietarului noului sediu</li>
                <li>• Copia autorizației PFA</li>
                <li>• Copia CI a titularului</li>
                <li>• Declarația pe propria răspundere</li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold text-primaryColor mb-6">Procedura de schimbare</h2>

            <div className="space-y-6">
              <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
                <div className="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
                  1
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Verificarea noului sediu</h4>
                  <p className="text-gray-700">Verificăm că noul sediu îndeplinește condițiile legale.</p>
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
                  <h4 className="font-semibold text-gray-900">Actualizarea documentelor</h4>
                  <p className="text-gray-700">Obținem documentele actualizate cu noul sediu social.</p>
                </div>
              </div>
            </div>

            <div className="bg-green-50 p-6 rounded-lg mt-8">
              <h3 className="text-xl font-semibold text-green-900 mb-3">Timp de procesare: 3-5 zile lucrătoare</h3>
              <p className="text-gray-700">
                Schimbarea sediului social pentru PFA se finalizează în 3-5 zile lucrătoare.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
