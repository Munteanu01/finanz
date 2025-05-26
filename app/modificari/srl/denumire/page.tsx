import FinanzNavbar from "../../../../navbar"
import Footer from "../../../../components/footer"

export default function DenumireSrlPage() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <FinanzNavbar />
      <main className="container mx-auto py-12 px-4 mt-16 xl:mt-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-blue-900 mb-8">Schimbare Denumire Firmă SRL</h1>

          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-700 mb-8">
              Vă asistăm în procedura de schimbare a denumirii societății dumneavoastră, asigurând toate formalitățile
              legale.
            </p>

            <div className="bg-blue-50 p-6 rounded-lg mb-8">
              <h3 className="text-2xl font-semibold text-blue-900 mb-4">Serviciu schimbare denumire</h3>
              <div className="text-3xl font-bold text-blue-900 mb-4">499 RON</div>
              <p className="text-gray-700">Include verificarea disponibilității și toate procedurile!</p>
            </div>

            <h2 className="text-3xl font-bold text-blue-900 mb-6">Motive pentru schimbarea denumirii</h2>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="text-2xl font-semibold text-green-900 mb-4">Motive comerciale</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Rebranding al companiei</li>
                  <li>• Schimbarea strategiei de marketing</li>
                  <li>• Extinderea pe noi piețe</li>
                  <li>• Îmbunătățirea imaginii de brand</li>
                  <li>• Diferențierea de concurență</li>
                </ul>
              </div>

              <div className="bg-yellow-50 p-6 rounded-lg">
                <h3 className="text-2xl font-semibold text-yellow-900 mb-4">Motive legale</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Conflicte de mărci comerciale</li>
                  <li>• Cerințe ale partenerilor</li>
                  <li>• Fuziuni sau achiziții</li>
                  <li>• Schimbarea profilului de activitate</li>
                  <li>• Conformarea cu reglementările</li>
                </ul>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-blue-900 mb-6">Documentele necesare</h2>

            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <ul className="space-y-2 text-gray-700">
                <li>• Hotărârea AGEA de schimbare denumire</li>
                <li>• Cererea de rezervare denumire nouă</li>
                <li>• Dovada disponibilității denumirii</li>
                <li>• Copii CI ale tuturor asociaților</li>
                <li>• Copii CI ale administratorilor</li>
                <li>• Certificatul de înregistrare al societății</li>
                <li>• Actul constitutiv modificat</li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold text-blue-900 mb-6">Procedura de schimbare</h2>

            <div className="space-y-6">
              <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
                <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
                  1
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Verificarea disponibilității</h4>
                  <p className="text-gray-700">Verificăm disponibilitatea noii denumiri în registrele ONRC.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
                <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
                  2
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Rezervarea denumirii</h4>
                  <p className="text-gray-700">Rezervăm noua denumire pentru societatea dumneavoastră.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
                <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
                  3
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Pregătirea documentelor</h4>
                  <p className="text-gray-700">Întocmim toate documentele necesare pentru modificare.</p>
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

              <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
                <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
                  5
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Actualizarea la ANAF</h4>
                  <p className="text-gray-700">Notificăm ANAF despre schimbarea denumirii societății.</p>
                </div>
              </div>
            </div>

            <div className="bg-green-50 p-6 rounded-lg mt-8">
              <h3 className="text-xl font-semibold text-green-900 mb-3">Timp de procesare: 7-10 zile lucrătoare</h3>
              <p className="text-gray-700">
                Schimbarea denumirii se finalizează în 7-10 zile lucrătoare de la depunerea dosarului complet.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
