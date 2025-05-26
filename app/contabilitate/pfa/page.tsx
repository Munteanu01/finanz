import FinanzNavbar from "../../../navbar"
import Footer from "../../../components/footer"

export default function ContabilitatePfaPage() {
  return (
    <div className="min-h-screen">
      <FinanzNavbar />
      <main className="container mx-auto py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-blue-900 mb-8">Contabilitate PFA</h1>

          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-700 mb-8">
              Servicii de contabilitate specializate pentru persoanele fizice autorizate (PFA), cu focus pe simplitate
              și eficiență.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-2xl font-semibold text-blue-900 mb-4">Servicii pentru PFA</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Evidența veniturilor și cheltuielilor</li>
                  <li>• Declarația anuală de venituri</li>
                  <li>• Calculul și plata contribuțiilor sociale</li>
                  <li>• Declarații TVA (dacă este cazul)</li>
                  <li>• Consiliere fiscală</li>
                  <li>• Optimizare taxe și contribuții</li>
                </ul>
              </div>

              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="text-2xl font-semibold text-green-900 mb-4">Beneficii</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Proceduri simplificate</li>
                  <li>• Costuri reduse</li>
                  <li>• Flexibilitate maximă</li>
                  <li>• Suport personalizat</li>
                  <li>• Conformitate legislativă</li>
                  <li>• Economii de timp</li>
                </ul>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-blue-900 mb-6">Tarife PFA</h2>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <div className="border border-gray-200 rounded-lg p-6 text-center">
                <h4 className="text-xl font-semibold mb-4 text-blue-900">PFA Standard</h4>
                <div className="text-3xl font-bold text-blue-900 mb-4">80 RON/lună</div>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>Evidența veniturilor</li>
                  <li>Declarația anuală</li>
                  <li>Calculul contribuțiilor</li>
                  <li>Suport telefonic</li>
                </ul>
              </div>

              <div className="border-2 border-blue-500 rounded-lg p-6 text-center">
                <h4 className="text-xl font-semibold mb-4 text-blue-900">PFA cu TVA</h4>
                <div className="text-3xl font-bold text-blue-900 mb-4">150 RON/lună</div>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>Toate serviciile Standard</li>
                  <li>Declarații TVA</li>
                  <li>Evidența TVA</li>
                  <li>Consiliere fiscală</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
