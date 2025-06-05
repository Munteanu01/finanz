"use client";
import FinanzNavbar from "../../../navbar";
import Footer from "../../../components/footer";
import HeroPages from "../../../components/HeroPages";
import {
  MessageSquare,
  FolderOpen,
  BarChart,
  Receipt,
  ScanLine,
  Lock,
  Users,
  UserPlus,
  Database,
  CloudUpload,
  Smartphone,
  Laptop,
  Tablet,
  ArrowRight,
} from "lucide-react";
import { motion } from "framer-motion";

const avantaje = [
  {
    icon: <MessageSquare className="w-8 h-8 text-primaryColor" />,
    title: "Comunicare eficientă",
    desc: "Un spațiu virtual unde clienții și contabilii pot comunica și partaja documente în timp real, centralizând toate informațiile importante într-un singur loc.",
  },
  {
    icon: <FolderOpen className="w-8 h-8 text-primaryColor" />,
    title: "Gestiune documente",
    desc: "Încărcare și arhivare electronică automată a facturilor, bonurilor, chitanțelor și altor documente, asigurând stocarea securizată și accesul rapid la acestea.",
  },
  {
    icon: <BarChart className="w-8 h-8 text-primaryColor" />,
    title: "Rapoarte financiare",
    desc: "Acces în timp real la rapoarte financiare detaliate, inclusiv sumare de venituri și cheltuieli, rapoarte lunare de profit și alți indicatori financiari relevanți.",
  },
  {
    icon: <Receipt className="w-8 h-8 text-primaryColor" />,
    title: "Facturare simplificată",
    desc: "Emiterea rapidă și gratuită a facturilor, cu stocare securizată și acces permanent pentru contabil.",
  },
  {
    icon: <ScanLine className="w-8 h-8 text-primaryColor" />,
    title: "Procesare documente",
    desc: "Tehnologie avansată pentru procesarea documentelor, reducând timpul și efortul pentru gestionarea acestora.",
  },
  {
    icon: <Lock className="w-8 h-8 text-primaryColor" />,
    title: "Sistem de acces securizat",
    desc: "Securitate pentru protejarea datelor și documentelor companiei, în conformitate cu standardele de calitate.",
  },
];

const relatii = [
  {
    icon: <UserPlus className="w-6 h-6 text-primaryColor" />,
    title: "Oferă acces contabilului tău",
    desc: "Permite contabilului acces direct în aplicație la arhiva și facturare pentru eficiență sporită.",
  },
  {
    icon: <Database className="w-6 h-6 text-primaryColor" />,
    title: "Acces la baza de date",
    desc: "Documentele rămân la tine, oferind flexibilitatea de a schimba contabilul când dorești.",
  },
  {
    icon: <Lock className="w-6 h-6 text-primaryColor" />,
    title: "Sistem de acces securizat",
    desc: "Documentele sunt securizate și stocate în cloud, protejate împotriva accesului neautorizat.",
  },
  {
    icon: <CloudUpload className="w-6 h-6 text-primaryColor" />,
    title: "Adaugă asociați și angajați",
    desc: "Accesul echipei în gestionarea documentelor contabile optimizează timpul și controlul.",
  },
];

export default function AplicatiePage() {
  return (
    <>
      <FinanzNavbar />
      <HeroPages
        title="Despre aplicație"
        subtitle="Facturezi de pe dispozitivul preferat"
        backgroundImage="/aplicatie.jpg"
        cards={[]}
      />

      {/* Background pattern */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primaryColor/5 via-transparent to-secundaryColor/5 -z-10" />

        <main className="max-w-6xl mx-auto px-4 py-20 space-y-32 text-gray-800">
          {/* Intro Section */}
          <motion.section
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-white/70 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 overflow-hidden">
              <div className="grid lg:grid-cols-2 gap-12 p-8 lg:p-16">
                <div className="space-y-8">
                  <div className="space-y-4">
                    <motion.h1
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                      className="text-5xl lg:text-6xl font-extrabold bg-gradient-to-r from-primaryColor to-secundaryColor bg-clip-text text-transparent leading-tight"
                    >
                      Navigăm împreună prin fiscalitate
                    </motion.h1>
                    <motion.h2
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.3 }}
                      className="text-2xl lg:text-3xl font-semibold text-secundaryColor"
                    >
                      Facturezi de pe dispozitivul preferat
                    </motion.h2>
                  </div>

                  <div className="flex items-center gap-4 bg-primaryColor/10 rounded-2xl p-4">
                    <Smartphone className="w-8 h-8 text-primaryColor" />
                    <Tablet className="w-8 h-8 text-secundaryColor" />
                    <Laptop className="w-8 h-8 text-primaryColor" />
                    <span className="text-gray-700 font-medium">
                      Android • iOS • Desktop
                    </span>
                  </div>

                  <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                    >
                      Cu aplicația{" "}
                      <span className="font-bold text-primaryColor">
                        Finanz Consult
                      </span>
                      , facturarea devine rapidă și eficientă, indiferent dacă
                      alegi să o faci de pe telefon sau desktop. Grația funcției de
                      sincronizare între dispozitive, toate datele tale sunt
                      actualizate și accesibile, asigurând o experiență de utilizare
                      fluidă și fără întreruperi.
                    </motion.p>
                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.5 }}
                    >
                      Pentru a gestiona volume mari de muncă cu maximă eficiență,
                      aplicația noastră îți pune la dispoziție un set complet de
                      instrumente într-un mediu desktop avansat și intuitiv. Astfel,
                      poți să îți îndeplinești sarcinile rapid și precis, fără a
                      sacrifica calitatea muncii.
                    </motion.p>
                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.6 }}
                    >
                      Descoperă flexibilitatea oferită de aplicația noastră,
                      disponibilă pe Android, iOS și Desktop. Indiferent de
                      dispozitivul pe care preferi să lucrezi, aplicația noastră se
                      adaptează nevoilor tale, permițându-ți să facturezi mai
                      inteligent și mai eficient.
                    </motion.p>
                  </div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.7 }}
                    className="flex flex-col sm:flex-row gap-4"
                  >
                    <a
                      href="https://finanzconsult.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center justify-center gap-2 bg-primaryColor text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
                    >
                      Accesează aplicația
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </motion.div>
                </div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="flex items-center justify-center"
                >
                  <div className="relative">
                    <div className="absolute -inset-4 bg-gradient-to-r from-primaryColor/20 to-secundaryColor/20 rounded-3xl blur-2xl" />
                    <img
                      src="/mockup.png"
                      alt="Mockup aplicație"
                      className="relative w-96 h-96 lg:w-[500px] lg:h-[500px] xl:w-[600px] xl:h-[600px] object-contain rounded-2xl"
                    />
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.section>

          {/* Beneficii Section */}
          <motion.section
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-primaryColor mb-6">
                Ne ocupăm de contabilitate, tu te concentrezi pe afacerea ta
              </h2>
            </div>

            <div className="bg-white/70 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 p-8 lg:p-12">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-8">
                  <p className="text-xl text-gray-700 leading-relaxed">
                    Finanz Consult pune la dispoziția clienților săi o aplicație
                    online care facilitează accesul rapid și eficient la serviciile
                    financiare și contabile. Prin intermediul acestei aplicații,
                    clienții pot:
                  </p>

                  <div className="space-y-6">
                    {[
                      {
                        icon: <BarChart className="w-6 h-6" />,
                        title: "Monitoriza cheltuieli/venituri",
                        desc: "Aplicația permite urmărirea în timp real a tranzacțiilor financiare, oferind o imagine clară asupra situației financiare.",
                        color: "text-primaryColor",
                      },
                      {
                        icon: <Receipt className="w-6 h-6" />,
                        title: "Accesa rapoarte financiare",
                        desc: "Aplicația generează rapoarte detaliate și statistici financiare, facilitând analiza și luarea deciziilor informate.",
                        color: "text-secundaryColor",
                      },
                      {
                        icon: <FolderOpen className="w-6 h-6" />,
                        title: "Planifica economiile și investițiile",
                        desc: "Aplicația oferă instrumente pentru planificarea economiilor și investițiilor, ajutând clienții să își atingă obiectivele financiare.",
                        color: "text-primaryColor",
                      },
                      {
                        icon: <Lock className="w-6 h-6" />,
                        title: "Gestiona bugetele",
                        desc: "Clienții pot crea și urmări bugete personalizate, optimizând astfel gestionarea resurselor financiare.",
                        color: "text-secundaryColor",
                      },
                      {
                        icon: <MessageSquare className="w-6 h-6" />,
                        title: "Comunica cu experții",
                        desc: "Clienții pot trimite întrebări și solicita consultanță direct prin aplicație, beneficiind de suport rapid și eficient.",
                        color: "text-primaryColor",
                      },
                    ].map((item, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: idx * 0.1 }}
                        className="flex items-start gap-4 p-4 rounded-xl bg-white/50 border border-gray-100/50 hover:shadow-lg transition-all duration-300"
                      >
                        <div className={`p-2 rounded-lg ${item.color} bg-gray-50`}>
                          {item.icon}
                        </div>
                        <div>
                          <h3 className="font-bold text-lg text-gray-800 mb-1">
                            {item.title}
                          </h3>
                          <p className="text-gray-600">{item.desc}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="flex justify-center"
                >
                  <div className="relative flex flex-col items-center gap-4">
                    {/* Laptop 2 */}
                    <div className="relative">
                      <div className="absolute -inset-6 bg-gradient-to-r from-secundaryColor/20 to-primaryColor/20 rounded-3xl blur-2xl" />
                      <img
                        src="/laptopmockup.png"
                        alt="Laptop 2"
                        className="relative w-80 h-80 object-contain rounded-2xl z-10"
                      />
                    </div>
                    {/* Laptop Mockup */}
                    <div className="relative">
                      <div className="absolute -inset-6 bg-gradient-to-r from-secundaryColor/20 to-primaryColor/20 rounded-3xl blur-2xl" />
                      <img
                        src="/laptop2.jpg"
                        alt="Beneficii aplicație"
                        className="relative w-80 h-80 object-contain rounded-2xl z-10"
                      />
                    </div>
                    {/* Laptop 3 */}
                    <div className="relative">
                      <div className="absolute -inset-6 bg-gradient-to-r from-secundaryColor/20 to-primaryColor/20 rounded-3xl blur-2xl" />
                      <img
                        src="/laptop3.jpg"
                        alt="Laptop 3"
                        className="relative w-80 h-80 object-contain rounded-2xl z-10"
                      />
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.section>

          {/* Avantaje Section */}
          <motion.section
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-primaryColor mb-6">
                Avantajele aplicației FinanzConsult.ro
              </h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                Aceste funcționalități sunt concepute pentru a simplifica și
                eficientiza procesele financiare și contabile, oferind clienților o
                experiență modernă și intuitivă
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {avantaje.map((item, idx) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="group relative"
                >
                  <div className="absolute -inset-1 bg-gradient-to-r from-primaryColor/20 to-secundaryColor/20 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-300" />
                  <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-white/20 shadow-lg hover:shadow-2xl transition-all duration-300 h-full flex flex-col">
                    <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primaryColor/10 to-secundaryColor/10 rounded-2xl mb-6 mx-auto">
                      {item.icon}
                    </div>
                    <h3 className="text-xl font-bold text-secundaryColor mb-4 text-center">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 text-center leading-relaxed flex-grow">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Relația cu contabilul Section */}
          <motion.section
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-primaryColor mb-6">
                Abordează relația cu contabilul tău într-un mod diferit
              </h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                Poți avea un control mai mare asupra activității contabilului tău,
                asigurându-te că documentele încărcate în sistem sunt procesate la
                timp și conform standardelor de calitate așteptate.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatii.map((item, idx) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="group relative"
                >
                  <div className="absolute -inset-1 bg-gradient-to-r from-secundaryColor/20 to-primaryColor/20 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-300" />
                  <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300 h-full flex flex-col text-center">
                    <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-secundaryColor/10 to-primaryColor/10 rounded-xl mb-4 mx-auto">
                      {item.icon}
                    </div>
                    <h4 className="font-bold text-primaryColor mb-3 text-lg">
                      {item.title}
                    </h4>
                    <p className="text-gray-600 text-sm leading-relaxed flex-grow">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-center mt-12"
            >
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-white/20 shadow-lg">
                <h3 className="text-2xl font-bold text-primaryColor mb-4">
                  Gata să transformi modul în care gestionezi contabilitatea?
                </h3>
                <p className="text-gray-700 mb-6 text-lg">
                  Începe să folosești aplicația și descoperă diferența!
                </p>
                <a
                  href="https://finanzconsult.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center gap-2 bg-primaryColor text-white px-10 py-5 rounded-2xl font-bold text-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
                >
                  Accesează aplicația acum
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.div>
          </motion.section>
        </main>
      </div>
      <Footer />
    </>
  );
}