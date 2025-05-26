import FinanzNavbar from "../../navbar"
import { Mail, MapPin, Phone, Clock } from "lucide-react"
import Footer from "../../components/footer"

export default function ContactPage() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <FinanzNavbar />
      <main className="container mx-auto py-12 px-4 mt-16 xl:mt-20">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-blue-900 mb-8 text-center">Contact</h1>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-semibold text-blue-900 mb-6">Informații de Contact</h2>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4 p-4 bg-blue-50 rounded-lg">
                    <div className="bg-blue-100 p-3 rounded-full">
                      <Mail className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                      <a
                        href="mailto:financiar.contabil@finanzconsult.ro"
                        className="text-blue-600 hover:text-blue-800 transition-colors"
                      >
                        financiar.contabil@finanzconsult.ro
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 p-4 bg-blue-50 rounded-lg">
                    <div className="bg-blue-100 p-3 rounded-full">
                      <Phone className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Telefon</h3>
                      <a href="tel:021203082014" className="text-blue-600 hover:text-blue-800 transition-colors">
                        021 20308 2014 2077
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 p-4 bg-blue-50 rounded-lg">
                    <div className="bg-blue-100 p-3 rounded-full">
                      <MapPin className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Adresă</h3>
                      <p className="text-gray-700">
                        Splaiul Independentei, Nr 202 B<br />
                        Sector 6, Bucuresti
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 p-4 bg-blue-50 rounded-lg">
                    <div className="bg-blue-100 p-3 rounded-full">
                      <Clock className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Program de lucru</h3>
                      <div className="text-gray-700">
                        <p>Luni - Vineri: 09:00 - 18:00</p>
                        <p>Sâmbătă: 09:00 - 14:00</p>
                        <p>Duminică: Închis</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-100">
              <h2 className="text-2xl font-semibold text-blue-900 mb-6">Trimite-ne un mesaj</h2>

              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                      Prenume
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                      Nume
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Telefon
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subiect
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  >
                    <option value="">Selectează subiectul</option>
                    <option value="contabilitate">Servicii de contabilitate</option>
                    <option value="infiintari">Înființări companii</option>
                    <option value="modificari">Modificări</option>
                    <option value="inchideri">Închideri</option>
                    <option value="altele">Altele</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Mesaj
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Descrie-ne nevoile tale..."
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-900 text-white py-3 px-6 rounded-md hover:bg-blue-800 transition-colors font-medium"
                >
                  Trimite mesajul
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
