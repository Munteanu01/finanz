"use client"

import FinanzNavbar from "../navbar"
import HeroSection from "../hero-section"
import Footer from "../components/footer"
import {
  CheckCircle,
  Users,
  Clock,
  ArrowRight,
  Star,
  FileText,
  Building2,
  Shield,
  TrendingUp,
  Globe,
} from "lucide-react"
import Link from "next/link"

export default function Page() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <FinanzNavbar />
      <HeroSection />

      {/* Services Section - Modern Design */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-32 h-32 bg-blue-100/30 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-green-100/30 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-purple-100/30 rounded-full blur-2xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-4">
              <Star className="w-4 h-4 mr-2" />
              Servicii profesionale
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Serviciile <span className="text-blue-600">noastre</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Oferim soluții complete și personalizate pentru toate nevoile dumneavoastră de contabilitate și
              consultanță juridică
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Contabilitate */}
            <div className="group relative bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-blue-600 rounded-t-2xl"></div>
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                  <FileText className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Servicii de Contabilitate</h3>
                  <p className="text-sm text-blue-600 font-medium">Soluții complete</p>
                </div>
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Oferim servicii complete de contabilitate pentru SRL și PFA, adaptate nevoilor dumneavoastră specifice
                cu raportări precise și la timp.
              </p>
              <div className="space-y-2 mb-6">
                <div className="flex items-center text-sm text-gray-600">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                  Contabilitate SRL și PFA
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                  Raportări fiscale
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                  Consultanță fiscală
                </div>
              </div>
              <Link
                href="/contabilitate/srl"
                className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold group-hover:translate-x-1 transition-all duration-300"
              >
                Află mai mult <ArrowRight className="h-4 w-4 ml-2" />
              </Link>
            </div>

            {/* Înființări */}
            <div className="group relative bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-500 to-green-600 rounded-t-2xl"></div>
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                  <Building2 className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Înființări Companii</h3>
                  <p className="text-sm text-green-600 font-medium">Rapid și eficient</p>
                </div>
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Vă ajutăm să înființați rapid și eficient SRL, PFA sau ONG cu toate documentele necesare și procedurile
                legale.
              </p>
              <div className="space-y-2 mb-6">
                <div className="flex items-center text-sm text-gray-600">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                  Înființare SRL, PFA, ONG
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                  Documentație completă
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                  Proceduri ONRC
                </div>
              </div>
              <Link
                href="/infiintari/srl"
                className="inline-flex items-center text-green-600 hover:text-green-800 font-semibold group-hover:translate-x-1 transition-all duration-300"
              >
                Află mai mult <ArrowRight className="h-4 w-4 ml-2" />
              </Link>
            </div>

            {/* Modificări */}
            <div className="group relative bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-purple-600 rounded-t-2xl"></div>
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Modificări și Actualizări</h3>
                  <p className="text-sm text-purple-600 font-medium">Gestionare completă</p>
                </div>
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Gestionăm toate modificările necesare pentru compania dumneavoastră la ONRC și alte instituții
                competente.
              </p>
              <div className="space-y-2 mb-6">
                <div className="flex items-center text-sm text-gray-600">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                  Modificări sediu social
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                  Schimbări administratori
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                  Actualizări CAEN
                </div>
              </div>
              <Link
                href="/modificari/srl/sediu-social"
                className="inline-flex items-center text-purple-600 hover:text-purple-800 font-semibold group-hover:translate-x-1 transition-all duration-300"
              >
                Află mai mult <ArrowRight className="h-4 w-4 ml-2" />
              </Link>
            </div>

            {/* Găzduire Sediu */}
            <div className="group relative bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500 to-orange-600 rounded-t-2xl"></div>
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                  <Globe className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Găzduire Sediu Social</h3>
                  <p className="text-sm text-orange-600 font-medium">Adresă prestigioasă</p>
                </div>
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Adresă prestigioasă în București pentru sediul social al companiei dumneavoastră cu toate facilitățile
                necesare.
              </p>
              <div className="space-y-2 mb-6">
                <div className="flex items-center text-sm text-gray-600">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                  Adresă în București
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                  Gestionare corespondență
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                  Servicii complete
                </div>
              </div>
              <Link
                href="/gazduire-sediu"
                className="inline-flex items-center text-orange-600 hover:text-orange-800 font-semibold group-hover:translate-x-1 transition-all duration-300"
              >
                Află mai mult <ArrowRight className="h-4 w-4 ml-2" />
              </Link>
            </div>

            {/* Autorizații */}
            <div className="group relative bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-500 to-red-600 rounded-t-2xl"></div>
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                  <Shield className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Autorizații și Licențe</h3>
                  <p className="text-sm text-red-600 font-medium">Asistență completă</p>
                </div>
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Vă asistăm în obținerea tuturor autorizațiilor și licențelor necesare pentru desfășurarea activității
                dumneavoastră.
              </p>
              <div className="space-y-2 mb-6">
                <div className="flex items-center text-sm text-gray-600">
                  <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
                  Autorizații de funcționare
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
                  Licențe specializate
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
                  Consultanță juridică
                </div>
              </div>
              <Link
                href="/autorizatii"
                className="inline-flex items-center text-red-600 hover:text-red-800 font-semibold group-hover:translate-x-1 transition-all duration-300"
              >
                Află mai mult <ArrowRight className="h-4 w-4 ml-2" />
              </Link>
            </div>

            {/* Înregistrare Mărci */}
            <div className="group relative bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-t-2xl"></div>
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-2xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                  <TrendingUp className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Înregistrare Mărci</h3>
                  <p className="text-sm text-indigo-600 font-medium">Protecție IP</p>
                </div>
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Protejați-vă proprietatea intelectuală prin înregistrarea mărcilor, brevetelor și altor drepturi de
                autor.
              </p>
              <div className="space-y-2 mb-6">
                <div className="flex items-center text-sm text-gray-600">
                  <div className="w-2 h-2 bg-indigo-500 rounded-full mr-3"></div>
                  Înregistrare mărci
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <div className="w-2 h-2 bg-indigo-500 rounded-full mr-3"></div>
                  Protecție brevete
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <div className="w-2 h-2 bg-indigo-500 rounded-full mr-3"></div>
                  Drepturi de autor
                </div>
              </div>
              <Link
                href="/inregistrare-marci"
                className="inline-flex items-center text-indigo-600 hover:text-indigo-800 font-semibold group-hover:translate-x-1 transition-all duration-300"
              >
                Află mai mult <ArrowRight className="h-4 w-4 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">500+</div>
              <div className="text-gray-600">Clienți mulțumiți</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">15+</div>
              <div className="text-gray-600">Ani de experiență</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">1000+</div>
              <div className="text-gray-600">Companii înființate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">De ce să ne alegeți?</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Experiența și profesionalismul nostru vă garantează servicii de calitate superioară
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-blue-900">Experiență Vastă</h3>
              <p className="text-gray-600">
                Peste 15 ani de experiență în domeniul contabilității și consultanței fiscale
              </p>
            </div>

            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-blue-900">Echipă Profesionistă</h3>
              <p className="text-gray-600">Specialiști certificați și actualizați permanent cu legislația în vigoare</p>
            </div>

            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-blue-900">Răspuns Rapid</h3>
              <p className="text-gray-600">Procesare rapidă a documentelor și răspuns prompt la toate solicitările</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Ce spun clienții noștri</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Feedback-ul clienților noștri confirmă calitatea serviciilor oferite
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-4">
                "Servicii profesionale și prompte. Echipa FINANZ Consult ne-a ajutat să înființăm compania rapid și
                eficient."
              </p>
              <div className="font-semibold text-blue-900">Maria Popescu</div>
              <div className="text-sm text-gray-500">Director General, ABC SRL</div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-4">
                "Colaborăm de 5 ani cu FINANZ Consult pentru contabilitatea companiei. Sunt foarte mulțumit de
                servicii."
              </p>
              <div className="font-semibold text-blue-900">Ion Georgescu</div>
              <div className="text-sm text-gray-500">Antreprenor, XYZ PFA</div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-4">
                "Consultanță fiscală excelentă și suport permanent. Recomand cu încredere serviciile lor."
              </p>
              <div className="font-semibold text-blue-900">Ana Dumitrescu</div>
              <div className="text-sm text-gray-500">Manager Financiar, DEF SRL</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Gata să începeți colaborarea cu noi?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Contactați-ne astăzi pentru o consultanță gratuită și descoperiți cum vă putem ajuta
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-900 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
            >
              Contactează-ne
            </Link>
            <a
              href="tel:021203082014"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-900 transition-colors font-semibold"
            >
              Sună acum
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
