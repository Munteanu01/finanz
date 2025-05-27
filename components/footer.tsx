import { Mail, Phone } from "lucide-react"
import Image from "next/image"

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Logo and Company Info */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <Image
                src="/Logo-blue.png"
                alt="FINANZ CONSULT - Evoluam pentru tine"
                width={300}
                height={120}
                className="h-auto max-w-full"
                priority
              />
            </div>
            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              Echipa noastră de specialiști este gata să ofere consultanță și soluții adaptate pentru succesul afacerii
              tale.
            </p>
            <div className="text-gray-600 text-sm">
              <p className="font-medium mb-1">Adresă:</p>
              <p>Splaiul Independentei, Nr 202 B, Sector 6, București</p>
            </div>
          </div>

          {/* Contact Section */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-semibold text-gray-900 mb-6">Contact</h3>
            <div className="space-y-3">
              <a
                href="mailto:firma@finanzconsult.ro"
                className="flex items-center text-gray-600 hover:text-primaryColor transition-colors text-sm"
              >
                <Mail className="h-4 w-4 mr-2 flex-shrink-0" />
                firma@finanzconsult.ro
              </a>
              <a
                href="mailto:financiar.contabil@finanzconsult.ro"
                className="flex items-center text-gray-600 hover:text-primaryColor transition-colors text-sm"
              >
                <Mail className="h-4 w-4 mr-2 flex-shrink-0" />
                financiar.contabil@finanzconsult.ro
              </a>
              <a
                href="mailto:salarizare@finanzconsult.ro"
                className="flex items-center text-gray-600 hover:text-primaryColor transition-colors text-sm"
              >
                <Mail className="h-4 w-4 mr-2 flex-shrink-0" />
                salarizare@finanzconsult.ro
              </a>
              <a
                href="mailto:sesizari@finanzconsult.ro"
                className="flex items-center text-gray-600 hover:text-primaryColor transition-colors text-sm"
              >
                <Mail className="h-4 w-4 mr-2 flex-shrink-0" />
                sesizari@finanzconsult.ro
              </a>
              <a
                href="mailto:management@finanzconsult.ro"
                className="flex items-center text-gray-600 hover:text-primaryColor transition-colors text-sm"
              >
                <Mail className="h-4 w-4 mr-2 flex-shrink-0" />
                management@finanzconsult.ro
              </a>
              <a
                href="tel:021308147"
                className="flex items-center text-gray-600 hover:text-green-600 transition-colors text-sm"
              >
                <Phone className="h-4 w-4 mr-2 flex-shrink-0" />
                021 308 14 77
              </a>
            </div>
          </div>

          {/* Useful Links Section */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-semibold text-gray-900 mb-6">Link-uri utile</h3>
            <div className="space-y-3 mb-6">
              <a href="/termeni-conditii" className="block text-gray-600 hover:text-primaryColor transition-colors text-sm">
                Temeni și condiții
              </a>
              <a
                href="/politica-confidentialitate"
                className="block text-gray-600 hover:text-primaryColor transition-colors text-sm"
              >
                Politica de confidențialitate
              </a>
              <a href="/politica-cookies" className="block text-gray-600 hover:text-primaryColor transition-colors text-sm">
                Politica cookies
              </a>
              <a href="/contact" className="block text-gray-600 hover:text-primaryColor transition-colors text-sm">
                Contact
              </a>
            </div>

            {/* ANPC Badges */}
            <div className="space-y-3">
              <a href="https://anpc.ro/ce-este-sal/" target="_blank" rel="noopener noreferrer" className="block w-48">
                <Image
                  src="/images/anpc-sal.png"
                  alt="ANPC - Soluționarea alternativă a litigiilor"
                  width={192}
                  height={60}
                  className="w-full h-auto hover:opacity-80 transition-opacity"
                />
              </a>
              <a
                href="https://ec.europa.eu/consumers/odr/main/index.cfm?event=main.home2.show&lng=RO"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-48"
              >
                <Image
                  src="/images/anpc-sol.png"
                  alt="Soluționarea online a litigiilor"
                  width={192}
                  height={60}
                  className="w-full h-auto hover:opacity-80 transition-opacity"
                />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-200 bg-white">
        <div className="container mx-auto px-4 py-6">
          <div className="text-center text-sm text-gray-600">
            <p>
              © 2025 <span className="font-semibold">Finanz Consult</span>. Toate drepturile rezervate.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
