import { Mail, Phone, Clock, MapPin, Building2, FileText, Users, Shield } from "lucide-react"
import Image from "next/image"

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-50 to-white border-t border-gray-200">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          {/* Logo and Company Info */}
          <div className="lg:pr-8">
            <div className="flex items-center mb-6">
              <div className="relative">
                <Image
                  src="/images/logo.png"
                  alt="Finanz Consult Logo"
                  width={100}
                  height={100}
                  className="drop-shadow-lg"
                />
                <div className="absolute -inset-2 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 rounded-full blur-xl -z-10"></div>
              </div>
            </div>
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50 shadow-lg">
              <p className="text-gray-700 text-base leading-relaxed font-medium">
                Dedicați excelenței în contabilitate și consultanță financiară cu experiență și profesionalism.
              </p>
            </div>
          </div>

          {/* Contact Information - Expanded */}
          <div className="lg:px-4">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-200/50 shadow-lg">
              <h4 className="text-xl font-bold text-gray-900 mb-8 flex items-center">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center mr-3">
                  <Phone className="h-4 w-4 text-white" />
                </div>
                Contact
              </h4>
              <div className="space-y-6">
                <a
                  href="mailto:financiar.contabil@finanzconsult.ro"
                  className="flex items-center text-gray-600 hover:text-blue-600 transition-all duration-300 group p-3 rounded-xl hover:bg-blue-50/50"
                >
                  <div className="w-14 h-14 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-900">Email</p>
                    <p className="text-sm font-medium">financiar.contabil@finanzconsult.ro</p>
                  </div>
                </a>

                <a
                  href="tel:021203082014"
                  className="flex items-center text-gray-600 hover:text-green-600 transition-all duration-300 group p-3 rounded-xl hover:bg-green-50/50"
                >
                  <div className="w-14 h-14 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-900">Telefon</p>
                    <p className="text-sm font-medium">021 20308 2014</p>
                  </div>
                </a>

                <div className="flex items-center text-gray-600 group p-3 rounded-xl">
                  <div className="w-14 h-14 bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mr-4 shadow-lg">
                    <Clock className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-900">Program</p>
                    <p className="text-sm font-medium">Luni - Vineri: 09:00 - 18:00</p>
                    <p className="text-sm font-medium">Sâmbătă: 10:00 - 14:00</p>
                  </div>
                </div>

                <div className="flex items-start text-gray-600 group p-3 rounded-xl">
                  <div className="w-14 h-14 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mr-4 mt-0.5 shadow-lg">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-900">Adresă</p>
                    <p className="text-sm font-medium">Splaiul Independentei, Nr 202B</p>
                    <p className="text-sm font-medium">Bl. 202B, Sc. 1, Et. 4, Ap. 15</p>
                    <p className="text-sm font-medium">Sector 6, București</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Services - Modern Design */}
          <div className="lg:pl-4">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-200/50 shadow-lg">
              <h4 className="text-xl font-bold text-gray-900 mb-8 flex items-center">
                <div className="w-8 h-8 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center mr-3">
                  <Building2 className="h-4 w-4 text-white" />
                </div>
                Serviciile noastre
              </h4>
              <div className="space-y-6">
                {/* Contabilitate */}
                <div className="group">
                  <div className="flex items-center mb-3 p-2 rounded-lg hover:bg-blue-50/50 transition-colors">
                    <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mr-4 shadow-md">
                      <FileText className="h-5 w-5 text-white" />
                    </div>
                    <h5 className="font-bold text-gray-900">Contabilitate</h5>
                  </div>
                  <div className="ml-14 space-y-2">
                    <a
                      href="/contabilitate/srl"
                      className="block text-sm text-gray-600 hover:text-blue-600 transition-colors font-medium hover:translate-x-1 transform duration-200"
                    >
                      • Contabilitate SRL
                    </a>
                    <a
                      href="/contabilitate/pfa"
                      className="block text-sm text-gray-600 hover:text-blue-600 transition-colors font-medium hover:translate-x-1 transform duration-200"
                    >
                      • Contabilitate PFA
                    </a>
                    <a
                      href="/contabilitate/tarife"
                      className="block text-sm text-gray-600 hover:text-blue-600 transition-colors font-medium hover:translate-x-1 transform duration-200"
                    >
                      • Tarife
                    </a>
                  </div>
                </div>

                {/* Înființări */}
                <div className="group">
                  <div className="flex items-center mb-3 p-2 rounded-lg hover:bg-green-50/50 transition-colors">
                    <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-green-600 rounded-xl flex items-center justify-center mr-4 shadow-md">
                      <Building2 className="h-5 w-5 text-white" />
                    </div>
                    <h5 className="font-bold text-gray-900">Înființări</h5>
                  </div>
                  <div className="ml-14 space-y-2">
                    <a
                      href="/infiintari/srl"
                      className="block text-sm text-gray-600 hover:text-green-600 transition-colors font-medium hover:translate-x-1 transform duration-200"
                    >
                      • Înființare SRL
                    </a>
                    <a
                      href="/infiintari/pfa"
                      className="block text-sm text-gray-600 hover:text-green-600 transition-colors font-medium hover:translate-x-1 transform duration-200"
                    >
                      • Înființare PFA
                    </a>
                    <a
                      href="/infiintari/ong"
                      className="block text-sm text-gray-600 hover:text-green-600 transition-colors font-medium hover:translate-x-1 transform duration-200"
                    >
                      • Înființare ONG
                    </a>
                  </div>
                </div>

                {/* Modificări */}
                <div className="group">
                  <div className="flex items-center mb-3 p-2 rounded-lg hover:bg-purple-50/50 transition-colors">
                    <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mr-4 shadow-md">
                      <Users className="h-5 w-5 text-white" />
                    </div>
                    <h5 className="font-bold text-gray-900">Modificări</h5>
                  </div>
                  <div className="ml-14 space-y-2">
                    <a
                      href="/modificari/srl/sediu-social"
                      className="block text-sm text-gray-600 hover:text-purple-600 transition-colors font-medium hover:translate-x-1 transform duration-200"
                    >
                      • Modificări SRL
                    </a>
                    <a
                      href="/modificari/pfa/sediu-social"
                      className="block text-sm text-gray-600 hover:text-purple-600 transition-colors font-medium hover:translate-x-1 transform duration-200"
                    >
                      • Modificări PFA
                    </a>
                  </div>
                </div>

                {/* Alte servicii */}
                <div className="group">
                  <div className="flex items-center mb-3 p-2 rounded-lg hover:bg-orange-50/50 transition-colors">
                    <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl flex items-center justify-center mr-4 shadow-md">
                      <Shield className="h-5 w-5 text-white" />
                    </div>
                    <h5 className="font-bold text-gray-900">Alte servicii</h5>
                  </div>
                  <div className="ml-14 space-y-2">
                    <a
                      href="/gazduire-sediu"
                      className="block text-sm text-gray-600 hover:text-orange-600 transition-colors font-medium hover:translate-x-1 transform duration-200"
                    >
                      • Găzduire sediu social
                    </a>
                    <a
                      href="/autorizatii"
                      className="block text-sm text-gray-600 hover:text-orange-600 transition-colors font-medium hover:translate-x-1 transform duration-200"
                    >
                      • Autorizații
                    </a>
                    <a
                      href="/inregistrare-marci"
                      className="block text-sm text-gray-600 hover:text-orange-600 transition-colors font-medium hover:translate-x-1 transform duration-200"
                    >
                      • Înregistrare mărci
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-200 bg-gradient-to-r from-gray-100 to-gray-50">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-gray-700 mb-4 md:mb-0 font-medium">
              <p>&copy; 2025 FINANZ CONSULT S.R.L. Toate drepturile rezervate.</p>
            </div>
            <div className="flex items-center space-x-8 text-sm">
              <a
                href="/politica-confidentialitate"
                className="text-gray-600 hover:text-blue-600 transition-colors font-medium hover:underline"
              >
                Politica de confidențialitate
              </a>
              <a
                href="/termeni-conditii"
                className="text-gray-600 hover:text-blue-600 transition-colors font-medium hover:underline"
              >
                Termeni și condiții
              </a>
              <a
                href="/gdpr"
                className="text-gray-600 hover:text-blue-600 transition-colors font-medium hover:underline"
              >
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
