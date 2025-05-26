import { Mail, Phone, Clock, MapPin } from "lucide-react"
import Image from "next/image"

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-100">
      <div className="container mx-auto px-4 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {/* Logo and Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-4">
              <Image src="/images/logo.png" alt="Finanz Consult Logo" width={60} height={60} className="mr-4" />
              <div>
                <h3 className="text-xl font-bold text-gray-900">FINANZ CONSULT</h3>
              </div>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              Dedicați excelenței în contabilitate și consultanță financiară. Navigăm împreună prin provocările
              financiare cu experiență și profesionalism.
            </p>
          </div>

          {/* Contact Information */}
          <div className="lg:col-span-1">
            <h4 className="text-lg font-semibold text-gray-900 mb-4">Contact</h4>
            <div className="space-y-3">
              <a
                href="mailto:financiar.contabil@finanzconsult.ro"
                className="flex items-center text-gray-600 hover:text-blue-600 transition-colors group"
              >
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-3 group-hover:bg-blue-200 transition-colors flex-shrink-0">
                  <Mail className="h-5 w-5 text-blue-600" />
                </div>
                <span className="text-sm">financiar.contabil@finanzconsult.ro</span>
              </a>

              <a
                href="tel:021203082014"
                className="flex items-center text-gray-600 hover:text-green-600 transition-colors group"
              >
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mr-3 group-hover:bg-green-200 transition-colors flex-shrink-0">
                  <Phone className="h-5 w-5 text-green-600" />
                </div>
                <span className="text-sm">021 20308 2014</span>
              </a>

              <div className="flex items-center text-gray-600 group">
                <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center mr-3 flex-shrink-0">
                  <Clock className="h-5 w-5 text-orange-600" />
                </div>
                <div className="text-sm">
                  <p>Luni - Vineri: 09:00 - 18:00</p>
                  <p>Sâmbătă: 10:00 - 14:00</p>
                </div>
              </div>

              <div className="flex items-start text-gray-600 group">
                <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                  <MapPin className="h-5 w-5 text-purple-600" />
                </div>
                <div className="text-sm">
                  <p>Splaiul Independentei, Nr 202B</p>
                  <p>Bl. 202B, Sc. 1, Et. 4, Ap. 15</p>
                  <p>Sector 6, București</p>
                </div>
              </div>
            </div>
          </div>

          {/* Services */}
          <div className="lg:col-span-1">
            <h4 className="text-lg font-semibold text-gray-900 mb-4">Servicii</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <a href="/contabilitate/srl" className="hover:text-blue-600 transition-colors">
                  Contabilitate SRL
                </a>
              </li>
              <li>
                <a href="/contabilitate/pfa" className="hover:text-blue-600 transition-colors">
                  Contabilitate PFA
                </a>
              </li>
              <li>
                <a href="/infiintari/srl" className="hover:text-blue-600 transition-colors">
                  Înființare SRL
                </a>
              </li>
              <li>
                <a href="/infiintari/pfa" className="hover:text-blue-600 transition-colors">
                  Înființare PFA
                </a>
              </li>
              <li>
                <a href="/modificari/srl/sediu-social" className="hover:text-blue-600 transition-colors">
                  Modificări societăți
                </a>
              </li>
              <li>
                <a href="/gazduire-sediu" className="hover:text-blue-600 transition-colors">
                  Găzduire sediu social
                </a>
              </li>
              <li>
                <a href="/contabilitate/tarife" className="hover:text-blue-600 transition-colors">
                  Tarife
                </a>
              </li>
              <li>
                <a href="/autorizatii" className="hover:text-blue-600 transition-colors">
                  Autorizații
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-blue-600 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-100 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-gray-600 mb-4 md:mb-0">
              <p>&copy; 2025 FINANZ CONSULT S.R.L. Toate drepturile rezervate.</p>
            </div>
            <div className="flex items-center space-x-4 text-sm text-gray-600">
              <a href="/politica-confidentialitate" className="hover:text-blue-600 transition-colors">
                Politica de confidențialitate
              </a>
              <span className="text-gray-300">|</span>
              <a href="/termeni-conditii" className="hover:text-blue-600 transition-colors">
                Termeni și condiții
              </a>
              <span className="text-gray-300">|</span>
              <a href="/gdpr" className="hover:text-blue-600 transition-colors">
                GDPR
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
