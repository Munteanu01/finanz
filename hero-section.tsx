"use client"

import { Mail, Phone, MapPin } from "lucide-react"
import Image from "next/image"

export default function HeroSection() {
  return (
    <div className="overflow-x-hidden">
      {/* Desktop Hero (lg and up) */}
      <section className="hidden lg:block relative overflow-hidden min-h-screen flex items-center">
        {/* Haikei PNG Background */}
        <div className="absolute inset-0 w-full h-full z-0 ">
          <Image
            src="/wave-haikei (1).png"
            alt="Wave background"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Address badge - bottom right */}
        <div className="absolute bottom-8 right-8 z-20">
          <a
            href="https://maps.google.com/?q=Splaiul+Independentei+202B+Sector+6+Bucuresti"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-2 bg-white/90 backdrop-blur-sm text-gray-700 rounded-full text-sm font-medium shadow-lg border border-gray-200 hover:bg-white hover:shadow-xl transition-all duration-300"
          >
            <MapPin className="w-4 h-4 mr-2 text-[#FE6309]" />
            <span>Splaiul Independentei, Nr 202B, Sector 6, București</span>
          </a>
        </div>

        <div className="container mx-auto px-4 py-8 relative z-10 flex items-center min-h-screen">
          <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
            {/* Left Content */}
            <div className="space-y-8">
              <div>
                <h1 className="text-3xl md:text-4xl lg:text-3xl xl:text-5xl font-bold mb-4 text-gray-700 leading-tight">
                  <span className="group leading-relaxed">
                    Dedicați <span className="relative inline-block">
                      <span className="relative z-10">excelenței</span>
                      <span className="absolute left-0 bottom-1 w-full xl:h-2 h-1 bg-[#FE6309] z-0 transition-all duration-300 group-hover:h-5/6"></span>
                    </span> în
                  </span>
                  <br />
                  <span className="relative inline-block mt-2">
                    <span className="relative z-10  font-bold">contabilitate și consultanță</span>
                  </span>
                </h1>

                <p className="text-lg md:text-xl lg:text-base xl:text-xl mb-6 text-gray-500 leading-relaxed">
                  Navigăm împreună prin provocările financiare, cu experiență, profesionalism și integritate.
                </p>
              </div>

              {/* Contact Information Buttons - Desktop - Updated Layout */}
              <div className="grid grid-cols-1 gap-4 max-w-2xl">
                {/* Email - Full width */}
                <a
                  href="mailto:financiar.contabil@finanzconsult.ro"
                  className="w-full inline-flex items-center justify-center px-6 py-4 bg-primaryColor text-white rounded-xl  transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  <Mail className="h-5 w-5 mr-3" />
                  <span className="font-semibold">financiar.contabil@finanzconsult.ro</span>
                </a>

                {/* Phone - Full width */}
                <a
                  href="tel:021203082014"
                  className="w-full inline-flex items-center justify-center px-6 py-4 bg-primaryColor text-white rounded-xl  transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  <Phone className="h-5 w-5 mr-3" />
                  <span className="font-semibold">021 9222</span>
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
                  <div className="absolute inset-0 bg-gradient-to-t from-primaryColor/30 via-transparent to-transparent"></div>
                </div>

                {/* Floating stats cards */}
                <div className="absolute -top-6 -left-6 bg-white rounded-2xl p-4 shadow-xl border border-gray-100">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-[#FE6309]">1000+</div>
                    <div className="text-sm text-gray-600">Clienți mulțumiți</div>
                  </div>
                </div>

                {/* Experience badge - similar to clients badge */}
                <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-4 shadow-xl border border-gray-100 mr-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-[#FE6309]">15+</div>
                    <div className="text-sm text-gray-600">Ani experiență</div>
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
        {/* Haikei PNG Background */}
        <div className="absolute inset-0 w-full h-full z-0">
          <Image
            src="/wave-haikei (1).png"
            alt="Wave background"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Address badge - bottom right for mobile */}
        <div className="absolute bottom-8 right-4 z-20">
          <a
            href="https://maps.google.com/?q=Splaiul+Independentei+202B+Sector+6+Bucuresti"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-3 py-2 bg-white/90 backdrop-blur-sm text-gray-700 rounded-full text-xs font-medium shadow-lg border border-gray-200 hover:bg-white hover:shadow-xl transition-all duration-300"
          >
            <MapPin className="w-3 h-3 mr-2 text-[#FE6309] flex-shrink-0" />
            <span>Splaiul Independentei, Nr 202B, Sector 6, București</span>
          </a>
        </div>

        <div className="container mx-auto px-6 relative z-10 flex flex-col justify-center h-full">
          {/* Title */}
          <div className="text-center mb-8">
            <h1 className="text-2xl font-bold mb-3 text-gray-700leading-tight">
              <span className=" group leading-relaxed">
                Dedicați <span className="relative inline-block">
                  <span className="relative z-10">excelenței</span>
                  <span className="absolute left-0 bottom-1 w-full h-1 bg-[#FE6309] z-0 transition-all duration-300 group-hover:h-5/6"></span>
                </span> în
              </span>
              <br />
              <span className="relative inline-block mt-1">
                <span className="relative z-10 font-bold">contabilitate și consultanță</span>
              </span>
            </h1>

            <p className="text-base mb-4 text-gray-500 leading-relaxed">
              Navigăm împreună prin provocările financiare, cu experiență, profesionalism și integritate.
            </p>
          </div>
          {/* Contact Buttons - Only Email and Phone */}
          <div className="grid grid-cols-1 gap-3 max-w-2xl mx-auto mb-8">
            {/* Email Button */}
            <a
              href="mailto:financiar.contabil@finanzconsult.ro"
              className="w-full inline-flex items-center justify-center px-4 py-3 bg-primaryColor text-white rounded-xl  transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-xs"
            >
              <Mail className="h-4 w-4 mr-2" />
              <span className="font-semibold">financiar.contabil@finanzconsult.ro</span>
            </a>

            {/* Phone Button */}
            <a
              href="tel:0219222"
              className="w-full inline-flex items-center justify-center px-4 py-3 bg-primaryColor text-white rounded-xl  transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-xs"
            >
              <Phone className="h-4 w-4 mr-2" />
              <span className="font-semibold">021 9222</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
