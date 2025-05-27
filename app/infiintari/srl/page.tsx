import FinanzNavbar from "../../../navbar"
import Footer from "../../../components/footer"

export default function InfiintareSrlPage() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <FinanzNavbar />
      <main className="container mx-auto py-12 px-4 mt-16 xl:mt-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-primaryColor mb-8">Înființare SRL</h1>

          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-700 mb-8">
              Vă ajutăm să înființați rapid și eficient o societate cu răspundere limitată (SRL), cu toate documentele
              necesare și procedurile legale.
            </p>

            <div className="bg-blue-50 p-6 rounded-lg mb-8">
              <h3 className="text-2xl font-semibold text-primaryColor mb-4">Pachet complet înființare SRL</h3>
              <div className="text-3xl font-bold text-primaryColor mb-4">599 RON</div>
              <p className="text-gray-700">Toate taxele și procedurile incluse, fără costuri ascunse!</p>
            </div>

            <h2 className="text-3xl font-bold text-primaryColor mb-6">Documentele necesare</h2>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div>
                <h4 className="text-xl font-semibold text-primaryColor mb-4">Pentru asociați persoane fizice:</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• Copie CI/Pașaport</li>
                  <li>• Certificat de naștere</li>
                  <li>• Certificat de căsătorie (dacă este cazul)</li>
                  <li>• Adeverință de venit</li>
                  <li>• Declarație pe propria răspundere</li>
                </ul>
              </div>

              <div>
                <h4 className="text-xl font-semibold text-primaryColor mb-4">Pentru sediul social:</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• Contract de închiriere/Proprietate</li>
                  <li>• Acordul proprietarului</li>
                  <li>• Certificat de urbanism</li>
                  <li>• Autorizație de funcționare (dacă este cazul)</li>
                </ul>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-primaryColor mb-6">Procedura de înființare</h2>

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
