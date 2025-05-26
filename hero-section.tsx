"use client"

import { Mail, MapPin, Phone, CheckCircle } from "lucide-react"
import Image from "next/image"

export default function HeroSection() {
  return (
    <div className="overflow-x-hidden">
      {/* Desktop Hero (lg and up) */}
      <section className="hidden lg:block relative bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 overflow-hidden min-h-screen flex items-center">
        {/* Modern Background Elements */}
        <div className="absolute inset-0">
          {/* Geometric shapes */}
          <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-blue-400/20 to-indigo-600/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-tl from-indigo-500/15 to-blue-300/20 rounded-full blur-3xl animate-pulse delay-1000"></div>

          {/* Grid pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
        </div>

        {/* Badge for large screens - bottom right */}
        <div className="absolute bottom-8 right-8 z-20">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium shadow-lg">
            <CheckCircle className="w-4 h-4 mr-2" />
            15+ ani de experiență în contabilitate
          </div>
        </div>

        <div className="container mx-auto px-4 py-8 relative z-10 flex items-center min-h-screen">
          <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
            {/* Left Content */}
            <div className="space-y-8">
              <div>
                <h1 className="text-3xl md:text-4xl lg:text-3xl xl:text-5xl font-bold mb-4 leading-tight">
                  <span className="text-gray-900">Dedicați excelenței în</span>
                  <br />
                  <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                    contabilitate și consultanță
                  </span>
                </h1>

                <p className="text-lg md:text-xl lg:text-base xl:text-xl mb-6 text-gray-600 leading-relaxed">
                  Navigăm împreună prin provocările financiare, cu experiență, profesionalism și integritate.
                </p>
              </div>

              {/* Contact Information Buttons - Desktop - New Grid Layout */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 max-w-2xl">
                {/* Email - Full width */}
                <div className="lg:col-span-2">
                  <a
                    href="mailto:financiar.contabil@finanzconsult.ro"
                    className="w-full inline-flex items-center justify-center px-6 py-4 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                  >
                    <Mail className="h-5 w-5 mr-3" />
                    <span className="font-semibold">financiar.contabil@finanzconsult.ro</span>
                  </a>
                </div>

                {/* Phone */}
                <a
                  href="tel:021203082014"
                  className="inline-flex items-center justify-center px-4 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  <Phone className="h-4 w-4 mr-2" />
                  <span className="font-medium text-sm">021 20308 2014</span>
                </a>

                {/* Address */}
                <a
                  href="https://maps.google.com/?q=Splaiul+Independentei+202B+Sector+6+Bucuresti"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-4 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  <MapPin className="h-4 w-4 mr-2" />
                  <span className="font-medium text-sm">Sector 6, București</span>
                </a>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative">
              <div className="relative">
                {/* Main image container */}
                <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                  <Image
                    src="/images/hero-image.jpg"
                    alt="Servicii de contabilitate și consultanță financiară"
                    width={600}
                    height={400}
                    className="w-full h-auto object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/30 via-transparent to-transparent"></div>
                </div>

                {/* Floating stats cards */}
                <div className="absolute -top-6 -left-6 bg-white rounded-2xl p-4 shadow-xl border border-gray-100">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">500+</div>
                    <div className="text-sm text-gray-600">Clienți mulțumiți</div>
                  </div>
                </div>

                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-blue-500/20 to-indigo-600/10 rounded-full blur-xl"></div>
                <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-tl from-indigo-600/15 to-blue-400/20 rounded-full blur-xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile/Tablet Hero (below lg) */}
      <section className="lg:hidden relative h-screen flex flex-col justify-center overflow-x-hidden">
        {/* Background Image for Mobile Hero with Low Opacity */}
        <div className="absolute inset-0">
          <Image src="/images/hero-image.jpg" alt="Background" fill className="object-cover opacity-20" priority />
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/40 via-blue-800/30 to-indigo-900/40"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10 flex flex-col justify-center h-full">
          {/* Title */}
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold mb-6 leading-tight text-white">
              <span>Dedicați excelenței în</span>
              <br />
              <span>contabilitate și consultanță</span>
            </h1>

            <p className="text-lg text-white/90 leading-relaxed max-w-md mx-auto">
              Navigăm împreună prin provocările financiare, cu experiență, profesionalism și integritate.
            </p>
          </div>

          {/* Contact Buttons - All Stacked Vertically */}
          <div className="space-y-4 max-w-sm mx-auto">
            {/* Email Button */}
            <a
              href="mailto:financiar.contabil@finanzconsult.ro"
              className="w-full inline-flex items-center justify-center px-6 py-4 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <Mail className="h-5 w-5 mr-3" />
              <span className="font-semibold text-sm">financiar.contabil@finanzconsult.ro</span>
            </a>

            {/* Phone Button */}
            <a
              href="tel:021203082014"
              className="w-full inline-flex items-center justify-center px-6 py-4 bg-green-600 text-white rounded-xl hover:bg-green-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <Phone className="h-5 w-5 mr-3" />
              <span className="font-semibold text-sm">021 20308 2014</span>
            </a>

            {/* Address Button */}
            <a
              href="https://maps.google.com/?q=Splaiul+Independentei+202B+Sector+6+Bucuresti"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center px-6 py-4 bg-purple-600 text-white rounded-xl hover:bg-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <MapPin className="h-5 w-5 mr-3" />
              <span className="font-semibold text-sm">Sector 6, București</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
