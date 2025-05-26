import FinanzNavbar from "../../navbar"
import Footer from "../../components/footer"

export default function ContactPage() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <FinanzNavbar />
      <main className="container mx-auto py-12 px-4 mt-16 xl:mt-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-blue-900 mb-8">Contact</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-semibold mb-6 text-blue-900">Informații de contact</h2>
              <p className="text-gray-700 mb-6">
                Suntem aici să vă ajutăm! Contactați-ne pentru orice întrebări sau pentru a programa o consultanță.
              </p>

              <div className="space-y-6">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-blue-900 mb-2">Adresa:</h3>
                  <p className="text-gray-700">
                    Splaiul Independentei, Nr 202 B, Bl. 202B, Sc. 1, Et. 4, Ap. 15
                    <br />
                    Sector 6, București
                  </p>
                </div>

                <div className="bg-green-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-green-900 mb-2">Email:</h3>
                  <p className="text-gray-700">
                    <a href="mailto:financiar.contabil@finanzconsult.ro" className="text-blue-600 hover:text-blue-800">
                      financiar.contabil@finanzconsult.ro
                    </a>
                  </p>
                </div>

                <div className="bg-purple-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-purple-900 mb-2">Telefon:</h3>
                  <p className="text-gray-700">
                    <a href="tel:021203082014" className="text-blue-600 hover:text-blue-800">
                      021 20308 2014 2077
                    </a>
                  </p>
                </div>

                <div className="bg-orange-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-orange-900 mb-2">Program:</h3>
                  <p className="text-gray-700">
                    Luni - Vineri: 09:00 - 18:00
                    <br />
                    Sâmbătă: 10:00 - 14:00
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-semibold mb-6 text-blue-900">Trimite-ne un mesaj</h2>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Numele dumneavoastră
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Introduceți numele"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Introduceți email-ul"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Telefon
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Introduceți numărul de telefon"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subiect
                  </label>
                  <select
                    id="subject"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Selectați subiectul</option>
                    <option value="contabilitate">Servicii de contabilitate</option>
                    <option value="infiintare">Înființare companie</option>
                    <option value="modificari">Modificări companie</option>
                    <option value="consultanta">Consultanță fiscală</option>
                    <option value="altele">Altele</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Mesaj
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Descrieți cererea dumneavoastră..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
                >
                  Trimite mesajul
                </button>
              </form>
            </div>
          </div>

          {/* Google Maps Section */}
          <div className="mt-12">
            <h2 className="text-2xl font-semibold mb-6 text-blue-900">Locația noastră</h2>
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="mb-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">FINANZ CONSULT S.R.L.</h3>
                <p className="text-gray-700">
                  Splaiul Independentei, Nr 202 B, Bl. 202B, Sc. 1, Et. 4, Ap. 15
                  <br />
                  Sector 6, București
                </p>
              </div>

              {/* Google Maps Embed */}
              <div className="w-full h-96 rounded-lg overflow-hidden shadow-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2849.1234567890123!2d26.0123456789!3d44.4123456789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b1ff1234567890%3A0x1234567890abcdef!2sSplaiul%20Independentei%20202B%2C%20Bucuresti!5e0!3m2!1sro!2sro!4v1234567890123!5m2!1sro!2sro"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Locația FINANZ CONSULT S.R.L."
                ></iframe>
              </div>

              <div className="mt-4 text-center">
                <a
                  href="https://maps.google.com/?q=Splaiul+Independentei+202B+Sector+6+Bucuresti"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
                >
                  Deschide în Google Maps
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
