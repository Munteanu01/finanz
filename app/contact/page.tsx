import FinanzNavbar from "../../navbar"
import Footer from "../../components/footer"

export default function ContactPage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-gradient-to-br from-slate-50 via-cyan-50/30 to-blue-50/50">
      <FinanzNavbar />

      {/* Background decorative elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-cyan-400/10 to-blue-600/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-tl from-blue-500/8 to-cyan-300/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/4 w-48 h-48 bg-gradient-to-r from-teal-400/8 to-blue-300/6 rounded-full blur-2xl"></div>
      </div>

      <main className="container mx-auto py-12 px-4 mt-16 xl:mt-20 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Modern header section */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 bg-cyan-100 text-cyan-800 rounded-full text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-cyan-500 rounded-full mr-2"></span>
              Suntem aici să vă ajutăm
            </div>
            <h1 className="text-4xl font-bold text-blue-900 mb-4">Contact</h1>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Contact Information */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/20">
              <h2 className="text-2xl font-semibold mb-6 text-blue-900 flex items-center">
                <div className="w-3 h-3 bg-blue-500 rounded-full mr-3"></div>
                Informații de contact
              </h2>
              <p className="text-gray-700 mb-6">
                Suntem aici să vă ajutăm! Contactați-ne pentru orice întrebări sau pentru a programa o consultanță.
              </p>

              <div className="space-y-6">
                <div className="bg-gradient-to-r from-blue-500/10 to-indigo-500/10 p-6 rounded-xl border border-blue-200/50">
                  <h3 className="font-semibold text-blue-900 mb-2 flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                    Adresa:
                  </h3>
                  <p className="text-gray-700">
                    Splaiul Independentei, Nr 202 B, Bl. 202B, Sc. 1, Et. 4, Ap. 15
                    <br />
                    Sector 6, București
                  </p>
                </div>

                <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 p-6 rounded-xl border border-green-200/50">
                  <h3 className="font-semibold text-green-900 mb-2 flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                    Email:
                  </h3>
                  <p className="text-gray-700">
                    <a
                      href="mailto:financiar.contabil@finanzconsult.ro"
                      className="text-blue-600 hover:text-blue-800 transition-colors"
                    >
                      financiar.contabil@finanzconsult.ro
                    </a>
                  </p>
                </div>

                <div className="bg-gradient-to-r from-purple-500/10 to-violet-500/10 p-6 rounded-xl border border-purple-200/50">
                  <h3 className="font-semibold text-purple-900 mb-2 flex items-center">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                    Telefon:
                  </h3>
                  <p className="text-gray-700">
                    <a href="tel:021203082014" className="text-blue-600 hover:text-blue-800 transition-colors">
                      021 20308 2014 2077
                    </a>
                  </p>
                </div>

                <div className="bg-gradient-to-r from-orange-500/10 to-amber-500/10 p-6 rounded-xl border border-orange-200/50">
                  <h3 className="font-semibold text-orange-900 mb-2 flex items-center">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
                    Program:
                  </h3>
                  <p className="text-gray-700">
                    Luni - Vineri: 09:00 - 18:00
                    <br />
                    Sâmbătă: 10:00 - 14:00
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/20">
              <h2 className="text-2xl font-semibold mb-6 text-blue-900 flex items-center">
                <div className="w-3 h-3 bg-blue-500 rounded-full mr-3"></div>
                Trimite-ne un mesaj
              </h2>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Numele dumneavoastră
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white/50 backdrop-blur-sm transition-all"
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
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white/50 backdrop-blur-sm transition-all"
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
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white/50 backdrop-blur-sm transition-all"
                    placeholder="Introduceți numărul de telefon"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subiect
                  </label>
                  <select
                    id="subject"
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white/50 backdrop-blur-sm transition-all"
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
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white/50 backdrop-blur-sm transition-all resize-none"
                    placeholder="Descrieți cererea dumneavoastră..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 px-6 rounded-xl hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  Trimite mesajul
                </button>
              </form>
            </div>
          </div>

          {/* Google Maps Section */}
          <div className="mt-12">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-semibold text-blue-900 flex items-center justify-center">
                <div className="w-3 h-3 bg-blue-500 rounded-full mr-3"></div>
                Locația noastră
              </h2>
              <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto rounded-full mt-4"></div>
            </div>

            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-white/20">
              <div className="mb-6 text-center">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">FINANZ CONSULT S.R.L.</h3>
                <p className="text-gray-700">
                  Splaiul Independentei, Nr 202 B, Bl. 202B, Sc. 1, Et. 4, Ap. 15
                  <br />
                  Sector 6, București
                </p>
              </div>

              {/* Google Maps Embed */}
              <div className="w-full h-96 rounded-2xl overflow-hidden shadow-xl border border-gray-200/50">
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

              <div className="mt-6 text-center">
                <a
                  href="https://maps.google.com/?q=Splaiul+Independentei+202B+Sector+6+Bucuresti"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-1"
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
