import FinanzNavbar from "../../../navbar"
import Footer from "../../../components/footer"

export default function InfiintareSrlPage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-gradient-to-br from-slate-50 via-indigo-50/30 to-purple-50/50">
      <FinanzNavbar />

      {/* Background decorative elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-indigo-400/10 to-purple-600/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-tl from-purple-500/8 to-indigo-300/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/4 w-48 h-48 bg-gradient-to-r from-violet-400/8 to-purple-300/6 rounded-full blur-2xl"></div>
      </div>

      <main className="container mx-auto py-12 px-4 mt-16 xl:mt-20 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Modern header section */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 bg-indigo-100 text-indigo-800 rounded-full text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-indigo-500 rounded-full mr-2"></span>
              Înființare societăți cu răspundere limitată
            </div>
            <h1 className="text-4xl font-bold text-blue-900 mb-4">Înființare SRL</h1>
            <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full"></div>
          </div>

          <div className="prose prose-lg max-w-none">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/20 mb-8">
              <p className="text-xl text-gray-700 mb-8">
                Vă ajutăm să înființați rapid și eficient o societate cu răspundere limitată (SRL), cu toate documentele
                necesare și procedurile legale.
              </p>
            </div>

            <div className="bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl p-8 mb-8 text-white shadow-xl">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold text-xl">€</span>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold">Pachet complet înființare SRL</h3>
                  <p className="text-indigo-100">Toate taxele și procedurile incluse, fără costuri ascunse!</p>
                </div>
              </div>
              <div className="text-4xl font-bold">599 RON</div>
            </div>

            <h2 className="text-3xl font-bold text-blue-900 mb-6">Documentele necesare</h2>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div>
                <h4 className="text-xl font-semibold text-blue-900 mb-4">Pentru asociați persoane fizice:</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• Copie CI/Pașaport</li>
                  <li>• Certificat de naștere</li>
                  <li>• Certificat de căsătorie (dacă este cazul)</li>
                  <li>• Adeverință de venit</li>
                  <li>• Declarație pe propria răspundere</li>
                </ul>
              </div>

              <div>
                <h4 className="text-xl font-semibold text-blue-900 mb-4">Pentru sediul social:</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• Contract de închiriere/Proprietate</li>
                  <li>• Acordul proprietarului</li>
                  <li>• Certificat de urbanism</li>
                  <li>• Autorizație de funcționare (dacă este cazul)</li>
                </ul>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-blue-900 mb-6">Procedura de înființare</h2>

            <div className="space-y-6">
              <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
                <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
                  1
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Consultanță inițială</h4>
                  <p className="text-gray-700">
                    Stabilim împreună denumirea, obiectul de activitate și structura societății.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
                <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
                  2
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Pregătirea documentelor</h4>
                  <p className="text-gray-700">
                    Întocmim actul constitutiv și toate documentele necesare înregistrării.
                  </p>
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
                  <h4 className="font-semibold text-gray-900">Finalizarea procedurii</h4>
                  <p className="text-gray-700">Ridicăm certificatul de înregistrare și vă predăm toate documentele.</p>
                </div>
              </div>
            </div>

            <div className="bg-green-50 p-6 rounded-lg mt-8">
              <h3 className="text-xl font-semibold text-green-900 mb-3">Timp de procesare: 3-5 zile lucrătoare</h3>
              <p className="text-gray-700">
                În condiții normale, procedura de înființare se finalizează în 3-5 zile lucrătoare de la depunerea
                dosarului complet.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
