"use client"
import React, { useState } from "react";
import FinanzNavbar from "../../navbar"
import Footer from "../../components/footer"
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from "lucide-react"

export default function ContactPage() {
  const [sent, setSent] = useState(false);
  const [showModal, setShowModal] = useState(false); // Add modal state

  const contactCards = [
    {
      icon: <Mail className="h-8 w-8 text-primaryColor" />,
      border: "from-primaryColor to-secundaryColor",
      bg: "bg-primaryColor/10",
      title: <span className="text-primaryColor">Email</span>,
      content: (
        <div className="flex flex-col items-center gap-1">
          <a
            href="mailto:contact@finanzconsult.ro"
            className="text-secundaryColor hover:text-primaryColor text-sm break-all font-semibold"
          >
            contact@finanzconsult.ro
          </a>
          <a
            href="mailto:financiar.contabil@finanzconsult.ro"
            className="text-secundaryColor hover:text-primaryColor text-sm break-all font-semibold"
          >
            financiar.contabil@finanzconsult.ro
          </a>
        </div>
      ),
    },
    {
      icon: <Phone className="h-8 w-8 text-primaryColor" />,
      border: "from-primaryColor tosecundaryColor",
      bg: "bg-primaryColor/10",
      title: <span className="text-primaryColor">Telefon</span>,
      content: (
        <div className="flex flex-col items-center gap-1">
          <a
            href="tel:0219222"
            className="text-secundaryColor hover:text-primaryColor text-sm font-semibold"
          >
            021 9222
          </a>
          <a
            href="tel:0213081477"
            className="text-secundaryColor hover:text-primaryColor text-sm font-semibold"
          >
            021 308 14 77
          </a>
        </div>
      ),
    },
    {
      icon: <MapPin className="h-8 w-8 text-primaryColor" />,
      border: "from-primaryColor to-secundaryColor",
      bg: "bg-primaryColor/10",
      title: <span className="text-primaryColor">Adresa</span>,
      content: (
        <a
          href="https://maps.google.com/?q=Splaiul+Independentei+202B+Sector+6+Bucuresti"
          target="_blank"
          rel="noopener noreferrer"
          className="text-secundaryColor hover:text-primaryColor text-sm font-semibold"
        >
          Splaiul Independentei, Nr 202B,
          <br />
          Sector 6, București
        </a>
      ),
    },
    {
      icon: <Clock className="h-8 w-8 text-primaryColor" />,
      border: "from-primaryColor to-secundaryColor",
      bg: "bg-primaryColor/10",
      title: <span className="text-primaryColor">Program</span>,
      content: (
        <div className="text-secundaryColor text-sm font-semibold">
          <p>Luni - Vineri: 09:00 - 18:00</p>
        </div>
      ),
    },
  ];

  return (
    <div className="min-h-screen overflow-x-hidden bg-white">
      <FinanzNavbar />
      <main className="container mx-auto py-12 px-4 mt-16 xl:mt-20">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Contact</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Suntem aici să vă ajutăm! Contactați-ne pentru orice întrebări sau pentru a programa o consultanță.
            </p>
          </div>

          {/* Contact Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-1 mb-12">
            {contactCards.map((card, idx) => (
              <div
                key={idx}
                className={`
                  text-center px-2 py-4 rounded-xl bg-white
                  border-2
                  border-gray-200
                  bg-clip-padding
                  relative
                  before:content-['']
                  before:absolute before:inset-0 before:rounded-xl
                  before:bg-gradient-to-br before:${card.border}
                  before:z-[-1]
                  before:p-[2px]
                  before:pointer-events-none
                  overflow-hidden
                `}
                style={{
                  boxShadow: "0 2px 8px 0 rgba(0,0,0,0.03)",
                }}
              >
                <div className={`w-16 h-16 ${card.bg} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  {card.icon}
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{card.title}</h3>
                {card.content}
              </div>
            ))}
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
              {/* Only the image opens fullscreen modal */}
              <div
                className="block cursor-pointer hover:opacity-90 transition-opacity"
                onClick={() => setShowModal(true)}
                tabIndex={0}
                role="button"
                aria-label="Deschide imaginea în fullscreen"
                onKeyDown={e => { if (e.key === "Enter" || e.key === " ") setShowModal(true); }}
              >
                <div className="w-full rounded-lg overflow-hidden">
                  <img
                    src="/sediuLogo.jpg"
                    alt="Clădirea FINANZ CONSULT S.R.L."
                    className="w-full h-auto object-contain"
                  />
                </div>
              </div>
              <div className="text-center mt-6">
                <h3 className="font-semibold text-gray-900 mb-2 text-base md:text-lg">FINANZ CONSULT S.R.L.</h3>
                {/* Only the address is a link */}
                <a
                  href="https://maps.google.com/?q=Splaiul+Independentei+202B+Sector+6+Bucuresti"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 text-sm md:text-base  hover:text-primaryColor transition-colors"
                >
                  Splaiul Independentei, Nr 202B
                  <br />
                  Sector 6, București
                </a>
              </div>
            </div>
          </div>

          {/* Modal for fullscreen image */}
          {showModal && (
            <div
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm animate-fade-in"
              onClick={() => setShowModal(false)}
              tabIndex={-1}
              aria-modal="true"
              role="dialog"
            >
              {/* X button in top-right of viewport */}
              <button
                className="fixed top-6 right-6 z-50 bg-white/80 hover:bg-white text-black rounded-full p-2 shadow-lg transition-colors"
                onClick={() => setShowModal(false)}
                aria-label="Închide imaginea"
                style={{ fontSize: 28, lineHeight: 1 }}
              >
                <svg width="28" height="28" viewBox="0 0 20 20" fill="none">
                  <path d="M6 6l8 8M6 14L14 6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"/>
                </svg>
              </button>
              <div className="relative max-w-3xl w-full flex flex-col items-center">
                <img
                  src="/sediuLogo.jpg"
                  alt="Clădirea FINANZ CONSULT S.R.L. Fullscreen"
                  className="rounded-xl transition-transform duration-300 scale-100 hover:scale-105"
                  onClick={e => e.stopPropagation()}
                />
              </div>
              <style jsx global>{`
                .animate-fade-in {
                  animation: fadeInModal 0.25s ease;
                }
                @keyframes fadeInModal {
                  from { opacity: 0; }
                  to { opacity: 1; }
                }
              `}</style>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  )
}
