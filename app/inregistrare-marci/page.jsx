"use client"
import FinanzNavbar from "../../navbar";
import Footer from "../../components/footer";
import HeroPages from "../../components/HeroPages";
import { Briefcase, ShieldCheck, UserCheck, FileText, FileCheck, Award } from "lucide-react";
import LegalSupport from "../../components/LegalSupport";
import FAQ from "../../components/faq";
import AccountingFeatures from "../../components/firstFeatures";
import { motion } from "framer-motion";

// FAQ data
const faqData = [
  {
    question: "Ce acte trebuie să pregătesc pentru început?",
    answer: "Doar buletinul tău și actele firmei. De restul ne ocupăm noi.",
  },
  {
    question: "Trebuie să merg personal la vreo instituție?",
    answer: "Nu. Totul se face online, iar noi ne ocupăm de depunerea documentelor.",
  },
  {
    question: "Cât durează tot procesul?",
    answer: "Depinde de serviciul ales, dar în general între 2 și 5 zile lucrătoare.",
  },
  {
    question: "Pot semna documentele fără să mă deplasez?",
    answer: "Da. Folosim semnătură electronică calificată acceptată de toate instituțiile.",
  },
  {
    question: "Este nevoie să mă ocup eu de programările la instituții?",
    answer: "Nu. Ne ocupăm noi de tot ce ține de programări, depuneri și ridicări de acte.",
  },
  {
    question: "Ce fac dacă apar probleme cu dosarul?",
    answer: "Le rezolvăm noi direct cu instituțiile. Tu ești informat fără să te implici direct.",
  },
  {
    question: "O să primesc o copie a documentelor?",
    answer: "Da. Toate documentele finale îți sunt trimise pe email în format PDF.",
  },
  {
    question: "Cum aflu în ce stadiu este procesul?",
    answer: "Primești actualizări prin email și SMS la fiecare pas important.",
  },
];

// Features data
const featuresData = [
  {
    title: "Completăm cererea",
    description:
      "Ne furnizezi informațiile esențiale despre marcă, iar noi pregătim documentația necesară pentru depunere.",
    icon: <FileText className="w-10 h-10 text-primaryColor mb-4" />,
  },
  {
    title: "Depunem dosarul la autorități",
    description:
      "Ne ocupăm de întocmirea și depunerea dosarului, asigurându-ne că îndeplinește toate cerințele legale.",
    icon: <FileCheck className="w-10 h-10 text-primaryColor mb-4" />,
  },
  {
    title: "Obții certificatul de înregistrare",
    description:
      "După aprobat, vei primi certificatul care îți garantează drepturile exclusive asupra mărcii tale.",
    icon: <Award className="w-10 h-10 text-primaryColor mb-4" />,
  },
];

// Etapele OSIM/EUIPO data
const etapeOSIMData = [
  {
    number: "1",
    title: "Comanda Dvs.",
    description: "După primirea comenzii Dvs., o analizăm pentru a verifica dacă este corectă și completă.",
    icon: <FileText className="w-12 h-12 text-primaryColor" />,
    iconBg: "bg-primaryColor/10",
    numberColor: "bg-secundaryColor",
    shadowColor: "hover:shadow-primaryColor/20",
  },
  {
    number: "2", 
    title: "Consultarea cu Dvs.",
    description: "Dacă identificăm ceva incomplet, vă contactăm pentru o consultație completă.",
    icon: <UserCheck className="w-12 h-12 text-primaryColor" />,
    iconBg: "bg-primaryColor/10",
    numberColor: "bg-secundaryColor",
    shadowColor: "hover:shadow-primaryColor/20",
  },
  {
    number: "3",
    title: "Depunerea",
    description: "Când avem confirmarea Dvs. privind caracterul complet și corect, depunem marca la OSIM/EUIPO.",
    icon: <FileCheck className="w-12 h-12 text-primaryColor" />,
    iconBg: "bg-primaryColor/10",
    numberColor: "bg-secundaryColor",
    shadowColor: "hover:shadow-primaryColor/20",
  },
  {
    number: "4",
    title: "Informarea Dvs.",
    description: "Vă oferim toate informațiile relevante privind depunerea, vă avertizăm despre riscuri și ținem la curent în legătură cu toate etapele înregistrării.",
    icon: <ShieldCheck className="w-12 h-12 text-primaryColor" />,
    iconBg: "bg-primaryColor/10",
    numberColor: "bg-secundaryColor",
    shadowColor: "hover:shadow-primaryColor/20",
  },
  {
    number: "5",
    title: "Obstacole?",
    description: "Când intervin obstacole în procesul de înregistrare, vă informăm prompt și vă propunem soluții viabile pentru a depăși orice astfel de obstacole.",
    icon: <Briefcase className="w-12 h-12 text-primaryColor" />,
    iconBg: "bg-primaryColor/10",
    numberColor: "bg-secundaryColor",
    shadowColor: "hover:shadow-primaryColor/20",
  },
  {
    number: "6",
    title: "Înregistrare",
    description: "Când primim confirmarea privind înregistrarea Dvs. de marcă, vă informăm prompt și vă întrebăm cum doriți să intrați în posesia certificatului.",
    icon: <Award className="w-12 h-12 text-primaryColor" />,
    iconBg: "bg-primaryColor/10",
    numberColor: "bg-secundaryColor",
    shadowColor: "hover:shadow-primaryColor/20",
  },
];

export default function InregistrareMarcePage() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <FinanzNavbar />
      <HeroPages
        backgroundImage="/inregistrare.jpg"
        title="Înregistrare mărci"
        subtitle="Un proces simplu pentru protecția identității afacerii tale"
        badge="Protecție legală rapidă și sigură"
        cards={[
          {
            title: "Fără drumuri și birocrație",
            description:
              "Ne ocupăm noi de toate formalitățile, astfel încât să nu pierzi timp cu depunerea actelor la instituțiile competente.",
            icon: <Briefcase className="w-10 h-10 text-primaryColor mb-4" />,
          },
          {
            title: "Îți înregistrăm marca simplu și eficient",
            description:
              "Asigurându-te că ai toate drepturile legale asupra brandului tău.",
            icon: <ShieldCheck className="w-10 h-10 text-primaryColor mb-4" />,
          },
          {
            title: "Consultanță la fiecare pas",
            description:
              "Beneficiezi de suport specializat de la început până la final, astfel încât procesul să fie clar, rapid și fără probleme.",
            icon: <UserCheck className="w-10 h-10 text-primaryColor mb-4" />,
          },
        ]}
      />

      <AccountingFeatures
        title="Înregistrează-ți marca simplu și fără birocrație"
        features={featuresData}
      />

      {/* Secțiunea pentru etapele OSIM/EUIPO */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primaryColor mb-6">
              Etapele pentru înregistrare mărci OSIM/EUIPO
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Am conceput proceduri simple și eficiente pentru a optimiza procesul de înregistrare.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {etapeOSIMData.map((etapa, index) => (
              <motion.div
                key={index}
                className={`bg-white rounded-2xl p-8 border border-gray-200 shadow-sm transition-all duration-300 hover:shadow-xl ${etapa.shadowColor} cursor-pointer`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.1,
                  ease: "easeOut" 
                }}
                viewport={{ once: true }}
                whileHover={{ 
                  y: -8,
                  transition: { duration: 0.3 }
                }}
              >
                {/* Icon la centru sus */}
                <div className="flex justify-center mb-6">
                  <div className={`p-4 ${etapa.iconBg} rounded-2xl shadow-md`}>
                    {etapa.icon}
                  </div>
                </div>

                {/* Numărul și titlul pe același rând */}
                <div className="flex items-center justify-center gap-3 mb-4">
                  <div className={`flex items-center justify-center w-8 h-8 ${etapa.numberColor} text-white rounded-full font-bold text-sm`}>
                    {etapa.number}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    {etapa.title}
                  </h3>
                </div>

                {/* Descrierea */}
                <p className="text-gray-700 leading-relaxed text-center">
                  {etapa.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <FAQ items={faqData} />
      <LegalSupport />
      <Footer />
    </div>
  );
}