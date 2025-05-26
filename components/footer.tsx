import { Mail, Phone, Clock, MapPin } from "lucide-react"

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200">
      {/* Bottom Bar */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row justify-between gap-8">
          {/* Left side - Copyright and Contact */}
          <div className="space-y-4">
            <div>
              <p className="text-lg font-bold text-gray-900">© 2025 FINANZ CONSULT S.R.L.</p>
              <p className="text-sm font-semibold text-gray-700">Toate drepturile rezervate.</p>
            </div>

            {/* Contact Information */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
              <a
                href="mailto:financiar.contabil@finanzconsult.ro"
                className="flex items-center text-gray-600 hover:text-blue-600 transition-colors"
              >
                <Mail className="h-4 w-4 mr-2 flex-shrink-0" />
                <span className="break-all">financiar.contabil@finanzconsult.ro</span>
              </a>

              <a
                href="tel:021203082014"
                className="flex items-center text-gray-600 hover:text-green-600 transition-colors"
              >
                <Phone className="h-4 w-4 mr-2 flex-shrink-0" />
                021 20308 2014
              </a>

              <a
                href="https://maps.google.com/?q=Splaiul+Independentei+202B+Sector+6+Bucuresti"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start text-gray-600 hover:text-purple-600 transition-colors"
              >
                <MapPin className="h-4 w-4 mr-2 mt-0.5 flex-shrink-0" />
                <span>Splaiul Independentei, Nr 202B, Bl. 202B, Sc. 1, Et. 4, Ap. 15, Sector 6, București</span>
              </a>

              <div className="flex items-center text-gray-600">
                <Clock className="h-4 w-4 mr-2 flex-shrink-0" />
                Luni-Vineri: 09:00-18:00
              </div>
            </div>
          </div>

          {/* Right side - Legal Links */}
          <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row items-start lg:items-end gap-4 text-sm">
            <a
              href="/politica-confidentialitate"
              className="font-bold text-gray-800 hover:text-blue-600 transition-colors hover:underline decoration-2 underline-offset-4 whitespace-nowrap"
            >
              Politica de confidențialitate
            </a>
            <a
              href="/termeni-conditii"
              className="font-bold text-gray-800 hover:text-blue-600 transition-colors hover:underline decoration-2 underline-offset-4 whitespace-nowrap"
            >
              Termeni și condiții
            </a>
            <a
              href="/gdpr"
              className="font-bold text-gray-800 hover:text-blue-600 transition-colors hover:underline decoration-2 underline-offset-4 whitespace-nowrap"
            >
              GDPR
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
