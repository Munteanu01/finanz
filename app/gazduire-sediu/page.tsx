import FinanzNavbar from "../../navbar"
import Footer from "../../components/footer"

export default function GazduiteSediuPage() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <FinanzNavbar />
      <main className="container mx-auto py-12 px-4 mt-16 xl:mt-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-blue-900 mb-8">Găzduire Sediu Social</h1>

          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-700 mb-8">
              Oferim servicii de găzduire pentru sediul social al companiei dumneavoastră, cu toate avantajele unei
              adrese prestigioase în București.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-2xl font-semibold text-blue-900 mb-4">Ce include serviciul</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Adresă prestigioasă în București</li>
                  <li>• Primirea corespondenței</li>
                  <li>• Notificarea promptă</li>
                  <li>• Servicii de secretariat</li>
                  <li>• Sală de ședințe (la cerere)</li>
                  <li>• Suport administrativ</li>
                </ul>
              </div>

              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="text-2xl font-semibold text-green-900 mb-4">Avantaje</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Costuri reduse vs. închiriere birou</li>
                  <li>• Flexibilitate maximă</li>
                  <li>• Imagine profesională</li>
                  <li>• Locație centrală</li>
                  <li>• Servicii profesionale</li>
                  <li>• Fără angajamente pe termen lung</li>
                </ul>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-blue-900 mb-6">Pachete disponibile</h2>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="border border-gray-200 rounded-lg p-6 text-center">
                <h4 className="text-xl font-semibold mb-4 text-blue-900">Pachet Basic</h4>
                <div className="text-3xl font-bold text-blue-900 mb-4">99 RON/lună</div>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>Adresă sediu social</li>
                  <li>Primirea corespondenței</li>
                  <li>Notificare email/telefon</li>
                  <li>Suport administrativ basic</li>
                </ul>
              </div>

              <div className="border-2 border-blue-500 rounded-lg p-6 text-center relative">
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white px-4 py-1 rounded-full text-sm">
                  Popular
                </div>
                <h4 className="text-xl font-semibold mb-4 text-blue-900">Pachet Standard</h4>
                <div className="text-3xl font-bold text-blue-900 mb-4">199 RON/lună</div>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>Toate serviciile Basic</li>
                  <li>Servicii de secretariat</li>
                  <li>Preluarea apelurilor</li>
                  <li>2 ore sală ședințe/lună</li>
                </ul>
              </div>

              <div className="border border-gray-200 rounded-lg p-6 text-center">
                <h4 className="text-xl font-semibold mb-4 text-blue-900">Pachet Premium</h4>
                <div className="text-3xl font-bold text-blue-900 mb-4">299 RON/lună</div>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>Toate serviciile Standard</li>
                  <li>Servicii complete secretariat</li>
                  <li>Sală ședințe nelimitată</li>
                  <li>Suport administrativ complet</li>
                </ul>
              </div>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-blue-900 mb-3">Locația noastră</h3>
              <p className="text-gray-700 mb-2">
                <strong>Adresa:</strong> Splaiul Independentei, Nr 202 B, Sector 6, București
              </p>
              <p className="text-gray-700">
                Locație centrală, cu acces facil la transportul public și parcare disponibilă.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
