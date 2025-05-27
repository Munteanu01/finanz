import FinanzNavbar from "../../../navbar"
import Footer from "../../../components/footer"

export default function TarifeContabilitatePage() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <FinanzNavbar />
      <main className="container mx-auto py-12 px-4 mt-16 xl:mt-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-primaryColor mb-8">Tarife Contabilitate</h1>

          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-700 mb-8">
              Oferim pachete de servicii contabile transparente și competitive, adaptate nevoilor specifice ale afacerii
              dumneavoastră.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-2xl font-semibold text-primaryColor mb-4">Tarife SRL</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center border-b border-blue-200 pb-2">
                    <span className="font-medium">Pachet Basic (până la 20 operațiuni)</span>
                    <span className="text-primaryColor font-bold">150 RON/lună</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-blue-200 pb-2">
                    <span className="font-medium">Pachet Standard (până la 50 operațiuni)</span>
                    <span className="text-primaryColor font-bold">300 RON/lună</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-blue-200 pb-2">
                    <span className="font-medium">Pachet Premium (operațiuni nelimitate)</span>
                    <span className="text-primaryColor font-bold">500 RON/lună</span>
                  </div>
                </div>
              </div>

              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="text-2xl font-semibold text-green-900 mb-4">Tarife PFA</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center border-b border-green-200 pb-2">
                    <span className="font-medium">PFA Standard</span>
                    <span className="text-green-900 font-bold">80 RON/lună</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-green-200 pb-2">
                    <span className="font-medium">PFA cu TVA</span>
                    <span className="text-green-900 font-bold">150 RON/lună</span>
                  </div>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-primaryColor mb-6">Servicii suplimentare</h2>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="border border-gray-200 rounded-lg p-4 text-center">
                <h4 className="text-lg font-semibold mb-2 text-primaryColor">Bilanț anual</h4>
                <div className="text-2xl font-bold text-primaryColor mb-2">200 RON</div>
                <p className="text-sm text-gray-600">Întocmire și depunere bilanț</p>
              </div>

              <div className="border border-gray-200 rounded-lg p-4 text-center">
                <h4 className="text-lg font-semibold mb-2 text-primaryColor">Declarație TVA</h4>
                <div className="text-2xl font-bold text-primaryColor mb-2">50 RON</div>
                <p className="text-sm text-gray-600">Per declarație lunară</p>
              </div>

              <div className="border border-gray-200 rounded-lg p-4 text-center">
                <h4 className="text-lg font-semibold mb-2 text-primaryColor">Consultanță fiscală</h4>
                <div className="text-2xl font-bold text-primaryColor mb-2">100 RON/oră</div>
                <p className="text-sm text-gray-600">Consiliere specializată</p>
              </div>
            </div>

            <div className="bg-yellow-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-yellow-900 mb-3">Reduceri disponibile</h3>
              <ul className="text-gray-700 space-y-2">
                <li>• 10% reducere pentru contracte anuale</li>
                <li>• 15% reducere pentru companii noi (primele 6 luni)</li>
                <li>• Reduceri speciale pentru ONG-uri</li>
                <li>• Pachete personalizate pentru companii mari</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
