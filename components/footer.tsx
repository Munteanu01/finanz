import Link from "next/link"
import { Mail, MapPin, Phone } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <h3 className="text-xl font-bold mb-4 text-blue-900">FINANZ Consult</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Echipa noastră de specialiști este gata să ofere consultanță și soluții adaptate pentru succesul afacerii
              tale.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-blue-600 flex-shrink-0" />
                <span className="text-gray-600">Splaiul Independentei, Nr 202 B, Sector 6, București</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-blue-600 flex-shrink-0" />
                <a href="tel:021203082014" className="text-gray-600 hover:text-blue-600 transition-colors">
                  021 20308 2014 2077
                </a>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-blue-900">Servicii</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/contabilitate/srl" className="text-gray-600 hover:text-blue-600 transition-colors">
                  Contabilitate SRL
                </Link>
              </li>
              <li>
                <Link href="/contabilitate/pfa" className="text-gray-600 hover:text-blue-600 transition-colors">
                  Contabilitate PFA
                </Link>
              </li>
              <li>
                <Link href="/infiintari/srl" className="text-gray-600 hover:text-blue-600 transition-colors">
                  Înființări companii
                </Link>
              </li>
              <li>
                <Link
                  href="/modificari/srl/sediu-social"
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                >
                  Modificări
                </Link>
              </li>
              <li>
                <Link href="/gazduire-sediu" className="text-gray-600 hover:text-blue-600 transition-colors">
                  Găzduire sediu
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-blue-900">Contact</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="mailto:firma@finanzconsult.ro"
                  className="text-gray-600 hover:text-blue-600 transition-colors flex items-center space-x-2"
                >
                  <Mail className="h-4 w-4" />
                  <span>firma@finanzconsult.ro</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:financiar.contabil@finanzconsult.ro"
                  className="text-gray-600 hover:text-blue-600 transition-colors flex items-center space-x-2"
                >
                  <Mail className="h-4 w-4" />
                  <span>financiar.contabil@finanzconsult.ro</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:salarizare@finanzconsult.ro"
                  className="text-gray-600 hover:text-blue-600 transition-colors flex items-center space-x-2"
                >
                  <Mail className="h-4 w-4" />
                  <span>salarizare@finanzconsult.ro</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:sesizari@finanzconsult.ro"
                  className="text-gray-600 hover:text-blue-600 transition-colors flex items-center space-x-2"
                >
                  <Mail className="h-4 w-4" />
                  <span>sesizari@finanzconsult.ro</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:management@finanzconsult.ro"
                  className="text-gray-600 hover:text-blue-600 transition-colors flex items-center space-x-2"
                >
                  <Mail className="h-4 w-4" />
                  <span>management@finanzconsult.ro</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-500 text-sm">© 2025 Finanz Consult. Toate drepturile rezervate.</p>
            <div className="flex space-x-6">
              <Link
                href="/politica-confidentialitate"
                className="text-gray-500 hover:text-blue-600 transition-colors text-sm"
              >
                Politica de confidențialitate
              </Link>
              <Link href="/termeni-conditii" className="text-gray-500 hover:text-blue-600 transition-colors text-sm">
                Termeni și condiții
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
