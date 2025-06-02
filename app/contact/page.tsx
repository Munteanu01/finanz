"use client"
import React, { useState } from "react";
import FinanzNavbar from "../../navbar"
import Footer from "../../components/footer"
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from "lucide-react"

export default function ContactPage() {
  const [sent, setSent] = useState(false);

  return (
    <div className="min-h-screen overflow-x-hidden bg-white">
      <FinanzNavbar />
      <main className="container mx-auto py-12 px-4 mt-16 xl:mt-20">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-black mb-4">Contact</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Suntem aici să vă ajutăm! Contactați-ne pentru orice întrebări sau pentru a programa o consultanță.
            </p>
          </div>

          {/* Contact Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-2 mb-12">
            <div className="text-center p-2 py-5 bg-gray-50 rounded-xl">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Email</h3>
              <a
                href="mailto:contact@finanzconsult.ro"
                className="text-blue-600 hover:text-blue-800 text-sm break-all"
              >
                contact@finanzconsult.ro
              </a>
            </div>

            <div className="text-center p-2 py-5 bg-gray-50 rounded-xl">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Telefon</h3>
              <a href="tel:021203082014" className="text-green-600 hover:text-green-800 font-medium">
                021 20308 2014 2077
              </a>
            </div>

            <div className="text-center p-2 py-5 bg-gray-50 rounded-xl">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Adresa</h3>
              <a
                href="https://maps.google.com/?q=Splaiul+Independentei+202B+Sector+6+Bucuresti"
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-600 hover:text-purple-800 text-sm"
              >
                Splaiul Independentei, Nr 202B
                <br />
                Sector 6, București
              </a>
            </div>

            <div className="text-center p-2 py-5 bg-gray-50 rounded-xl">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Program</h3>
              <div className="text-orange-600 text-sm">
                <p>Luni - Vineri: 09:00 - 18:00</p>
                <p>Sâmbătă: 10:00 - 14:00</p>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white border border-gray-200 rounded-xl p-8 h-full flex flex-col">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Trimite-ne un mesaj</h2>
              <form
                className="flex flex-col flex-1 space-y-6"
                onSubmit={async (e) => {
                  e.preventDefault();
                  const form = e.currentTarget;
                  const formData = new FormData(form);

                  const data = {
                    name: formData.get("name"),
                    email: formData.get("email"),
                    phone: formData.get("phone"),
                    service: formData.get("service"),
                    message: formData.get("message"),
                  };

                  await fetch("/api/contact", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(data),
                  });

                  setSent(true);
                  form.reset();
                  setTimeout(() => setSent(false), 5000);
                }}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Nume complet</label>
                    <input
                      name="name"
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primaryColor focus:border-transparent"
                      placeholder="Introduceți numele"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                    <input
                      name="email"
                      type="email"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primaryColor focus:border-transparent"
                      placeholder="exemplu@email.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Telefon</label>
                    <input
                      name="phone"
                      type="tel"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primaryColor focus:border-transparent"
                      placeholder="+40 xxx xxx xxx"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Tip serviciu</label>
                    <select
                      name="service"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primaryColor focus:border-transparent hover:ring-2 hover:ring-primaryColor transition"
                    >
                      <option>Selectați serviciul</option>
                      <option>Contabilitate SRL</option>
                      <option>Contabilitate PFA</option>
                      <option>Înființare companie</option>
                      <option>Modificări companie</option>
                      <option>Consultanță fiscală</option>
                      <option>Altele</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Mesajul dumneavoastră</label>
                  <textarea
                    name="message"
                    rows={10}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primaryColor focus:border-transparent resize-none min-h-40"
                    placeholder="Descrieți în detaliu cererea dumneavoastră..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full mt-8 bg-primaryColor text-white py-3 px-6 rounded-lg hover:bg-primaryColor hover:bg-opacity-90 transition-colors font-semibold flex items-center justify-center"
                  disabled={sent}
                >
                  {sent ? (
                    <>
                      <CheckCircle className="h-5 w-5 mr-2" />
                      Mesajul a fost trimis!
                    </>
                  ) : (
                    <>
                      <Send className="h-5 w-5 mr-2" />
                      Trimite mesajul
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Map */}
            <div className="bg-white border border-gray-200 rounded-xl p-8 h-full flex flex-col flex-1">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Locația noastră</h2>
              
              {/* Map */}
              <div className="w-full h-96 bg-gray-100 rounded-lg overflow-hidden mb-4">
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
              <div className="text-center mb-4 text-sm xl:text-base">
                <h3 className="font-semibold text-gray-900 mb-2">FINANZ CONSULT S.R.L.</h3>
                <p className="text-gray-600">
                  Splaiul Independentei, Nr 202 B, Bl. 202B, Sc. 1, Et. 4, Ap. 15
                  <br />
                  Sector 6, București
                </p>
              </div>
              <a
                href="https://maps.google.com/?q=Splaiul+Independentei+202B+Sector+6+Bucuresti"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full mt-auto bg-primaryColor text-white py-3 px-6 rounded-lg hover:bg-primaryColor hover:bg-opacity-90 transition-colors font-semibold flex items-center justify-center"
                style={{ minHeight: "48px" }}
              >
                <MapPin className="h-4 w-4 mr-2" />
                Deschide în Google Maps
              </a>
            </div>
          </div>

          {/* Building Photo Section */}
          <div className="mt-12 bg-white border border-gray-200 rounded-xl p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Biroul nostru</h2>
            <div className="max-w-4xl mx-auto">
              <a
                href="https://maps.google.com/?q=Splaiul+Independentei+202B+Sector+6+Bucuresti"
                target="_blank"
                rel="noopener noreferrer"
                className="block cursor-pointer hover:opacity-90 transition-opacity"
              >
                <div className="w-full rounded-lg overflow-hidden">
                  <img
                    src="/sediuLogo.jpg"
                    alt="Clădirea FINANZ CONSULT S.R.L."
                    className="w-full h-auto object-contain"
                  />
                </div>
              </a>
              <div className="text-center mt-6">
                <h3 className="font-semibold text-gray-900 mb-2 text-base md:text-lg">FINANZ CONSULT S.R.L.</h3>
                <p className="text-gray-600 text-sm md:text-base">
                  Splaiul Independentei, Nr 202B
                  <br />
                  Sector 6, București
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
