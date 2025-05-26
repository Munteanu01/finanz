import { Mail, Phone, Clock, MapPin, ArrowRight } from "lucide-react"
import Image from "next/image"

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-100">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Logo and Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-6">
              <Image src="/images/logo.png" alt="Finanz Consult Logo" width={80} height={80} className="mr-4" />
              <div>
                <h3 className="text-2xl font-bold text-gray-900">FINANZ CONSULT</h3>
                <p className="text-blue-600 font-medium">Excelență în contabilitate</p>
              </div>
            </div>
            <p className="text-gray-600 text-base leading-relaxed max-w-md mb-8">
              Dedicați excelenței în contabilitate și consultanță financiară. Navigăm împreună prin provocările
              financiare cu experiență, profesionalism și integritate.
            </p>

            {/* CTA Button */}
            <a
              href="/contact"
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 group"
            >
              <span className="font-semibold mr-2">Contactează-ne</span>
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="text-lg font-bold text-gray-900 mb-6">Contact</h4>
            <div className="space-y-4">
              <a
                href="mailto:financiar.contabil@finanzconsult.ro"
                className="flex items-center text-gray-600 hover:text-blue-600 transition-colors group"
              >
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mr-4 group-hover:bg-blue-100 transition-colors flex-shrink-0">
                  <Mail className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900">Email</p>
                  <p className="text-sm">financiar.contabil@finanzconsult.ro</p>
                </div>
              </a>

              <a
                href="tel:021203082014"
                className="flex items-center text-gray-600 hover:text-yellow-600 transition-colors group"
              >
                <div className="w-12 h-12 bg-yellow-50 rounded-xl flex items-center justify-center mr-4 group-hover:bg-yellow-100 transition-colors flex-shrink-0">
                  <Phone className="h-5 w-5 text-yellow-600" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900">Telefon</p>
                  <p className="text-sm">021 20308 2014</p>
                </div>
              </a>

              <div className="flex items-center text-gray-600 group">
                <div className="w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                  <Clock className="h-5 w-5 text-orange-600" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900">Program</p>
                  <p className="text-sm">Luni - Vineri: 09:00 - 18:00</p>
                  <p className="text-sm">Sâmbătă: 10:00 - 14:00</p>
                </div>
              </div>

              <div className="flex items-start text-gray-600 group">
                <div className="w-12 h-12 bg-purple-50 rounded-xl flex items-center justify-center mr-4 mt-0.5 flex-shrink-0">
                  <MapPin className="h-5 w-5 text-purple-600" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900">Adresă</p>
                  <p className="text-sm">Splaiul Independentei, Nr 202B</p>
                  <p className="text-sm">Bl. 202B, Sc. 1, Et. 4, Ap. 15</p>
                  <p className="text-sm">Sector 6, București</p>
                </div>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold text-gray-900 mb-6">Servicii</h4>
            <ul className="space-y-3">
              {[
                { name: "Contabilitate SRL", href: "/contabilitate/srl" },
                { name: "Contabilitate PFA", href: "/contabilitate/pfa" },
                { name: "Înființare SRL", href: "/infiintari/srl" },
                { name: "Înființare PFA", href: "/infiintari/pfa" },
                { name: "Modificări societăți", href: "/modificari/srl/sediu-social" },
                { name: "Găzduire sediu social", href: "/gazduire-sediu" },
                { name: "Tarife", href: "/contabilitate/tarife" },
                { name: "Autorizații", href: "/autorizatii" },
              ].map((service) => (
                <li key={service.name}>
                  <a
                    href={service.href}
                    className="text-gray-600 hover:text-blue-600 transition-colors text-sm flex items-center group"
                  >
                    <ArrowRight className="h-3 w-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-100 bg-gray-50">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-gray-600 mb-4 md:mb-0">
              <p>&copy; 2025 FINANZ CONSULT S.R.L. Toate drepturile rezervate.</p>
            </div>
            <div className="flex items-center space-x-6 text-sm">
              <a href="/politica-confidentialitate" className="text-gray-600 hover:text-blue-600 transition-colors">
                Politica de confidențialitate
              </a>
              <a href="/termeni-conditii" className="text-gray-600 hover:text-blue-600 transition-colors">
                Termeni și condiții
              </a>
              <a href="/gdpr" className="text-gray-600 hover:text-blue-600 transition-colors">
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
