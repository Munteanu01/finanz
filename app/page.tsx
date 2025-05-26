"use client"

import FinanzNavbar from "../navbar"
import HeroSection from "../hero-section"
import Footer from "../components/footer"
import { CheckCircle, Users, Award, Clock, ArrowRight, Star } from "lucide-react"
import Link from "next/link"

export default function Page() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <FinanzNavbar />
      <HeroSection />

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Serviciile noastre</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Oferim soluții complete pentru toate nevoile dumneavoastră de contabilitate și consultanță
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
              <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <CheckCircle className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-blue-900">Servicii de Contabilitate</h3>
              <p className="text-gray-600 mb-4">
                Oferim servicii complete de contabilitate pentru SRL și PFA, adaptate nevoilor dumneavoastră specifice.
              </p>
              <Link
                href="/contabilitate/srl"
                className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center"
              >
                Află mai mult <ArrowRight className="h-4 w-4 ml-1" />
              </Link>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
              <div className="bg-green-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-blue-900">Înființări Companii</h3>
              <p className="text-gray-600 mb-4">
                Vă ajutăm să înființați rapid și eficient SRL, PFA sau ONG cu toate documentele necesare.
              </p>
              <Link
                href="/infiintari/srl"
                className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center"
              >
                Află mai mult <ArrowRight className="h-4 w-4 ml-1" />
              </Link>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
              <div className="bg-purple-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Award className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-blue-900">Modificări și Actualizări</h3>
              <p className="text-gray-600 mb-4">
                Gestionăm toate modificările necesare pentru compania dumneavoastră la ONRC și alte instituții.
              </p>
              <Link
                href="/modificari/srl/sediu-social"
                className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center"
              >
                Află mai mult <ArrowRight className="h-4 w-4 ml-1" />
              </Link>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
              <div className="bg-orange-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Clock className="h-6 w-6 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-blue-900">Găzduire Sediu Social</h3>
              <p className="text-gray-600 mb-4">
                Adresă prestigioasă în București pentru sediul social al companiei dumneavoastră.
              </p>
              <Link
                href="/gazduire-sediu"
                className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center"
              >
                Află mai mult <ArrowRight className="h-4 w-4 ml-1" />
              </Link>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
              <div className="bg-red-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Award className="h-6 w-6 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-blue-900">Autorizații și Licențe</h3>
              <p className="text-gray-600 mb-4">
                Vă asistăm în obținerea tuturor autorizațiilor necesare pentru activitatea dumneavoastră.
              </p>
              <Link
                href="/autorizatii"
                className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center"
              >
                Află mai mult <ArrowRight className="h-4 w-4 ml-1" />
              </Link>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
              <div className="bg-indigo-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Star className="h-6 w-6 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-blue-900">Înregistrare Mărci</h3>
              <p className="text-gray-600 mb-4">
                Protejați-vă proprietatea intelectuală prin înregistrarea mărcilor și brevetelor.
              </p>
              <Link
                href="/inregistrare-marci"
                className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center"
              >
                Află mai mult <ArrowRight className="h-4 w-4 ml-1" />
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
