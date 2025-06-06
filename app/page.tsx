"use client";

import FinanzNavbar from "../navbar";
import HeroSection from "../hero-section";
import Footer from "../components/footer";
import Banks from "../components/banks.jsx";
import {
  Users,
  ArrowRight,
  Star,
  FileText,
  Building2,
  Shield,
  TrendingUp,
  Globe,
  Award,
  Zap,
} from "lucide-react";
import Link from "next/link";

export default function Page() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <FinanzNavbar />
      <HeroSection />

      {/* Services Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-32 h-32 bg-blue-100/30 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-green-100/30 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-purple-100/30 rounded-full blur-2xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Serviciile <span className="text-gray-900">noastre</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Oferim soluții complete și personalizate pentru toate nevoile dumneavoastră de contabilitate și
              consultanță juridică.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Contabilitate */}
            <div className="group relative bg-white p-8 rounded-2xl shadow-lg border border-gray-100 flex flex-col h-full">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mr-4">
                  <FileText className="h-8 w-8 text-white group-hover:scale-110 transition-transform duration-300" />
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
              <div className="space-y-2 mb-6 flex-grow">
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
              <button
                className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold transition-colors duration-300 mt-auto"
              >
                <Link href="/contabilitate/tarife" className="flex items-center w-full h-full">
                  Află mai mult <ArrowRight className="h-4 w-4 ml-2" />
                </Link>
              </button>
            </div>

            {/* Înființări */}
            <div className="group relative bg-white p-8 rounded-2xl shadow-lg border border-gray-100 flex flex-col h-full">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mr-4">
                  <Building2 className="h-8 w-8 text-white group-hover:scale-110 transition-transform duration-300" />
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
              <div className="space-y-2 mb-6 flex-grow">
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
              <button
                className="inline-flex items-center text-green-600 hover:text-green-800 font-semibold transition-colors duration-300 mt-auto"
              >
                <Link href="/infiintari/srl" className="flex items-center w-full h-full">
                  Află mai mult <ArrowRight className="h-4 w-4 ml-2" />
                </Link>
              </button>
            </div>

            {/* Modificări */}
            <div className="group relative bg-white p-8 rounded-2xl shadow-lg border border-gray-100 flex flex-col h-full">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mr-4">
                  <Users className="h-8 w-8 text-white group-hover:scale-110 transition-transform duration-300" />
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
              <div className="space-y-2 mb-6 flex-grow">
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
              <button
                className="inline-flex items-center text-purple-600 hover:text-purple-800 font-semibold transition-colors duration-300 mt-auto"
              >
                <Link href="/modificari/srl/sediu-social" className="flex items-center w-full h-full">
                  Află mai mult <ArrowRight className="h-4 w-4 ml-2" />
                </Link>
              </button>
            </div>

            {/* Găzduire Sediu */}
            <div className="group relative bg-white p-8 rounded-2xl shadow-lg border border-gray-100 flex flex-col h-full">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mr-4">
                  <Globe className="h-8 w-8 text-white group-hover:scale-110 transition-transform duration-300" />
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
              <div className="space-y-2 mb-6 flex-grow">
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
              <button
                className="inline-flex items-center text-orange-600 hover:text-orange-800 font-semibold transition-colors duration-300 mt-auto"
              >
                <Link href="/gazduire-sediu" className="flex items-center w-full h-full">
                  Află mai mult <ArrowRight className="h-4 w-4 ml-2" />
                </Link>
              </button>
            </div>

            {/* Autorizații */}
            <div className="group relative bg-white p-8 rounded-2xl shadow-lg border border-gray-100 flex flex-col h-full">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center mr-4">
                  <Shield className="h-8 w-8 text-white group-hover:scale-110 transition-transform duration-300" />
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
              <div className="space-y-2 mb-6 flex-grow">
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
              <button
                className="inline-flex items-center text-red-600 hover:text-red-800 font-semibold transition-colors duration-300 mt-auto"
              >
                <Link href="/autorizatii" className="flex items-center w-full h-full">
                  Află mai mult <ArrowRight className="h-4 w-4 ml-2" />
                </Link>
              </button>
            </div>

            {/* Înregistrare Mărci */}
            <div className="group relative bg-white p-8 rounded-2xl shadow-lg border border-gray-100 flex flex-col h-full">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-2xl flex items-center justify-center mr-4">
                  <TrendingUp className="h-8 w-8 text-white group-hover:scale-110 transition-transform duration-300" />
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
              <div className="space-y-2 mb-6 flex-grow">
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
              <button
                className="inline-flex items-center text-indigo-600 hover:text-indigo-800 font-semibold transition-colors duration-300 mt-auto"
              >
                <Link href="/inregistrare-marci" className="flex items-center w-full h-full">
                  Află mai mult <ArrowRight className="h-4 w-4 ml-2" />
                </Link>
              </button>
            </div>
          </div>
        </div>
      </section>
      <Banks />
      {/* Despre */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50"></div>
        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Despre noi
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Experiența și profesionalismul nostru vă garantează servicii de calitate superioară
            </p>
          </div>

          {/* Grid cu 3 carduri sus */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 text-center">
            {/* Card 1 */}
            <div className="group bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 flex flex-col justify-center">
              <div className="w-20 mx-auto h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Award className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Experiență Vastă</h3>
              <p className="text-gray-600 leading-relaxed">
                Peste 15 ani de experiență în domeniul contabilității și consultanței fiscale cu rezultate dovedite
              </p>
            </div>

            {/* Card 2 */}
            <div className="group bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 flex flex-col justify-center">
              <div className="w-20 h-20 mx-auto bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Users className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Echipă Profesionistă</h3>
              <p className="text-gray-600 leading-relaxed">
                Specialiști certificați și actualizați permanent cu legislația în vigoare pentru servicii impecabile
              </p>
            </div>

            {/* Card 3 */}
            <div className="group bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 flex flex-col justify-center">
              <div className="w-20 mx-auto h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Zap className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Răspuns Rapid</h3>
              <p className="text-gray-600 leading-relaxed">
                Procesare rapidă a documentelor și răspuns prompt la toate solicitările 
              </p>
            </div>
          </div>
          
          {/* Card jos, pe toată lățimea, col-span-3, stil modern cu grid */}
          <div className="mt-12 lg:col-span-3">
            <div className="bg-white p-12 rounded-3xl shadow-lg border border-gray-100">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Coloana text */}
                <div className="flex flex-col justify-center items-center h-full text-center px-4 md:px-8 lg:px-12">
                  <h3 className="text-3xl md:text-4xl font-bold text-primaryColor mb-6">
                    Alături de afacerea ta, <span className="whitespace-nowrap">pas cu pas</span>
                  </h3>
                  <p className="text-gray-700 text-lg leading-relaxed mb-4">
                    Suntem încântați să anunțăm că întregul departament <b className="text-primaryColor whitespace-nowrap">Financiar-Contabil</b> al <b className="text-primaryColor whitespace-nowrap">SRL Consult</b> se transformă în <b className="text-primaryColor whitespace-nowrap">Finanz Consult</b>! Această schimbare vine ca parte a strategiei noastre de expansiune și dezvoltare, menită să ne permită să oferim servicii și mai eficiente și adaptate nevoilor clienților noștri.
                  </p>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    În contextul creșterii cererii pentru servicii financiare și contabile de înaltă calitate, am decis să ne extindem și să ne consolidăm sub noul brand <b className="text-primaryColor whitespace-nowrap">Finanz Consult</b>. Această transformare ne va permite să ne adaptăm mai bine la schimbările pieței și să oferim soluții inovatoare și personalizate pentru fiecare client.
                  </p>
                </div>
                {/* Coloana imagine */}
                <div className="flex justify-center items-center">
                  <img
                    src="/images/about-highlight-image.jpg"
                    alt="Despre Finanz Consult"
                    className="rounded-2xl shadow-md object-cover w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-secundaryColor/90 mb-2">1000+</div>
              <div className="text-primaryColor font-bold">Clienți mulțumiți</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-secundaryColor/90 mb-2">15+</div>
              <div className="text-primaryColor font-bold">Ani de experiență</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-secundaryColor/90 mb-2">25+</div>
              <div className="text-primaryColor font-bold">Membrii in echipa</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section - Compact Design */}

      {/* Testimonials Section - Compact Design */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Ce spun clienții noștri
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Feedback-ul clienților noștri confirmă calitatea serviciilor oferite.
            </p>
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
            {[

              {
                text: "Am început drumul antreprenoriatului în 2023, complet pierdut, fără să știu pașii corecți. FinanzConsult a fost alături de mine de la început – cu răbdare, claritate și mult profesionalism. M-au ajutat să-mi înființez firma, să trec prin provocările unei asocieri, iar mai recent, să-mi dezvolt agenția. De fiecare dată, am primit sfaturi reale și soluții rapide. Le sunt profund recunoscător și îi recomand cu toată încrederea!",
                name: "Mădălin M. - RETEAUA DE IMOBILIARE S.R.L.",
              },
              {
                text: "Colaborarea cu voi mi-a oferit claritate și sprijin în gestionarea financiar contabilă a startup-ului. Explicațiile oferite au fost concise și adaptate nevoilor mele. Răspunsurile rapide la întrebările punctuale m-au ajutat să înțeleg imediat obligațiile fiscale și procedurile contabile. Apreciez soluțiile practice pentru optimizarea fluxului de numerar și recomandările pentru simplificarea proceselor interne. Datorită implicării voastre, am economisit timp prețios și am putut să mă concentrez pe dezvoltarea afacerii. Recomand cu încredere serviciile voastre oricărui antreprenor!",
                name: "Răzvan T. - A.I. Matrix Behavioral Nexus",
              },
              {
                text: "Lucrez cu această firmă de contabilitate de peste 5 ani și sunt extrem de mulțumit de colaborare. Profesioniști, prompți și mereu atenți la detalii, m-au ajutat să gestionez corect și eficient toate aspectele financiare ale afacerii mele. Comunicarea este excelentă, primesc mereu răspunsuri clare și rapide, iar sfaturile oferite au fost de mare ajutor în luarea unor decizii importante. Recomand cu încredere oricui caută un partener de încredere în domeniul contabilității!",
                name: "Romulus G. - SMILE AVENUE CLINICS S.R.L.",
              },
            ].map((testimonial, index, arr) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 flex flex-col "
              >
                <div className="flex flex-col flex-grow">
                  <div className="flex  mb-2">
                    {/* 5 stars */}
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-[#F6ae2d] fill-[#F6ae2d] mr-1" fill="currentColor" />
                    ))}
                  </div>
                  <p className="text-gray-700 leading-relaxed pt-2 text-sm md:text-base mb-2 text-left">
                    {testimonial.text}
                  </p>
                </div>
                {/* Name always at the same vertical position */}
                <div className="pt-4 text-primaryColor font-bold text-base  min-h-[3rem] flex items-center ">
                  {testimonial.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
