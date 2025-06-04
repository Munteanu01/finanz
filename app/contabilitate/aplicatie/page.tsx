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
      <main className="max-w-5xl mx-auto px-4 py-16 space-y-20 text-gray-800">
        {/* Intro */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-2 text-primaryColor">
              Navigăm împreună prin{" "}
              <span className="text-secondaryColor">fiscalitate</span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-secondaryColor">
              Facturezi de pe dispozitivul preferat
            </h2>
          </div>
          <div className="space-y-4 max-w-3xl mx-auto text-lg text-gray-700">
            <p>
              Cu aplicația <b>Finanz Consult</b>, facturarea devine rapidă și
              eficientă, indiferent dacă alegi să o faci de pe telefon sau desktop.
              Grație funcției de sincronizare între dispozitive, toate datele tale
              sunt actualizate și accesibile, asigurând o experiență de utilizare
              fluidă și fără întreruperi.
            </p>
            <p>
              Pentru a gestiona volume mari de muncă cu maximă eficiență,
              aplicația noastră îți pune la dispoziție un set complet de instrumente
              într-un mediu desktop avansat și intuitiv. Astfel, poți să îți
              îndeplinești sarcinile rapid și precis, fără a sacrifica calitatea
              muncii.
            </p>
            <p>
              Descoperă flexibilitatea oferită de aplicația noastră, disponibilă pe
              Android, iOS și Desktop. Indiferent de dispozitivul pe care preferi să
              lucrezi, aplicația noastră se adaptează nevoilor tale, permițându-ți să
              facturezi mai inteligent și mai eficient.
            </p>
          </div>
        </motion.section>

        {/* Beneficii */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-bold text-primaryColor mb-8 flex items-center gap-3 justify-center">
            Ne ocupăm de contabilitate, tu te concentrezi pe afacerea ta
          </h2>
          <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col gap-6 border border-secondaryColor/20">
            <p className="text-gray-700 text-center max-w-2xl mx-auto mb-4">
              Finanz Consult pune la dispoziția clienților săi o aplicație online
              care facilitează accesul rapid și eficient la serviciile financiare și
              contabile. Prin intermediul acestei aplicații, clienții pot:
            </p>
            <ul className="space-y-5 text-lg">
              <li>
                <b>Monitoriza cheltuieli/venituri</b>
                <div className="text-gray-600 text-base">
                  Aplicația permite urmărirea în timp real a tranzacțiilor financiare,
                  oferind o imagine clară asupra situației financiare.
                </div>
              </li>
              <li>
                <b>Accesa rapoarte financiare</b>
                <div className="text-gray-600 text-base">
                  Aplicația generează rapoarte detaliate și statistici financiare,
                  facilitând analiza și luarea deciziilor informate.
                </div>
              </li>
              <li>
                <b>Planifica economiile și investițiile</b>
                <div className="text-gray-600 text-base">
                  Aplicația oferă instrumente pentru planificarea economiilor și
                  investițiilor, ajutând clienții să își atingă obiectivele financiare.
                </div>
              </li>
              <li>
                <b>Gestiona bugetele</b>
                <div className="text-gray-600 text-base">
                  Clienții pot crea și urmări bugete personalizate, optimizând astfel
                  gestionarea resurselor financiare.
                </div>
              </li>
              <li>
                <b>Comunica cu experții</b>
                <div className="text-gray-600 text-base">
                  Clienții pot trimite întrebări și solicita consultanță direct prin
                  aplicație, beneficiind de suport rapid și eficient.
                </div>
              </li>
            </ul>
          </div>
        </motion.section>

        {/* Avantaje aplicație */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-bold text-primaryColor mb-8 flex items-center gap-3 justify-center">
            Avantajele aplicației FinanzConsult.ro
          </h2>
          <p className="text-center text-gray-700 mb-8 max-w-2xl mx-auto">
            Aceste funcționalități sunt concepute pentru a simplifica și eficientiza
            procesele financiare și contabile, oferind clienților o experiență modernă
            și intuitivă
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {avantaje.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-7 shadow-lg hover:shadow-2xl border border-secondaryColor/20 flex flex-col items-center text-center transition-all duration-300"
              >
                <div className="p-3 rounded-full bg-primaryColor/10 mb-4">
                  {item.icon}
                </div>
                <h3 className="font-semibold text-lg mb-2 text-secondaryColor">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Relația cu contabilul */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-bold text-primaryColor mb-8 flex items-center gap-3 justify-center">
            Abordează relația cu contabilul tău într-un mod diferit
          </h2>
          <p className="text-center text-gray-700 mb-8 max-w-2xl mx-auto">
            Poți avea un control mai mare asupra activității contabilului tău,
            asigurându-te că documentele încărcate în sistem sunt procesate la timp și
            conform standardelor de calitate așteptate.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {relatii.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-5 shadow-md hover:shadow-xl border border-secondaryColor/20 flex flex-col items-center text-center transition-all duration-300"
              >
                <div className="p-2 rounded-full bg-secondaryColor/10 mb-3">
                  {item.icon}
                </div>
                <h4 className="font-semibold mb-1 text-primaryColor">{item.title}</h4>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </main>
      <Footer />
    </>
  );
}