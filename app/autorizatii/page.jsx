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
    question: "Ce acte trebuie să pregăsesc pentru început?",
    answer: "Doar buletinul tău. De restul ne ocupăm noi.",
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
];

// Features data
const featuresData = [
  {
    title: "Completezi cererea online",
    description:
      "Ne trimiți detaliile necesare, iar echipa noastră verifică documentele și îți oferă consultanță personalizată.",
    icon: <FileText className="w-10 h-10 text-primaryColor mb-4" />,
  },
  {
    title: "Pregătim dosarul complet",
    description:
      "Redactăm și depunem toate actele necesare, astfel încât să respecți cerințele legale fără efort.",
    icon: <FileCheck className="w-10 h-10 text-primaryColor mb-4" />,
  },
  {
    title: "Primești autorizația rapid",
    description:
      "Te anunțăm imediat ce documentele sunt aprobate și îți livrăm autorizația fără întârzieri.",
    icon: <Award className="w-10 h-10 text-primaryColor mb-4" />,
  },
];

export default function AutorizatiiPage() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <FinanzNavbar />
      <HeroPages
        backgroundImage="/autorizatii.jpg"
        title="Autorizații funcționare"
        subtitle="Obține rapid și fără stres autorizațiile necesare pentru afacerea ta"
        cards={[
          {
            title: "Autorizații obținute rapid și fără stres",
            description:
              "Ne ocupăm de toate formalitățile, astfel încât să obții avizele necesare fără bătăi de cap sau întârzieri.",
            icon: <Briefcase className="w-10 h-10 text-primaryColor mb-4" />,
          },
          {
            title: "Toate procedurile fără drumuri inutile",
            description:
              "Nu trebuie să mergi la instituții sau să depui dosare fizic, gestionăm întregul proces în locul tău.",
            icon: <ShieldCheck className="w-10 h-10 text-primaryColor mb-4" />,
          },
          {
            title: "Consultanță specializată la fiecare pas",
            description:
              "Îți oferim suport dedicat de la început până la final, pentru ca autorizarea să fie clară și fără probleme.",
            icon: <UserCheck className="w-10 h-10 text-primaryColor mb-4" />,
          },
        ]}
      />

      <AccountingFeatures
        title="Obține autorizațiile simplu și fără stres"
        features={featuresData}
      />

      {/* Sectiune: Tipuri de autorizații */}
      <section className="max-w-4xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-8 text-center text-primaryColor">Tipuri de autorizații și avize</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-[#e6f7f2] rounded-xl shadow-lg p-6 border border-primaryColor/10 flex flex-col items-start"
          >
            <ShieldCheck className="w-10 h-10 text-[#1dbf73] mb-4" />
            <h3 className="text-xl font-semibold text-primaryColor">DSV / DSP</h3>
            <p className="mt-2 text-gray-700">
              Autorizaţia DSV reprezintă actul care condiţionează funcţionarea comercianţilor de respectarea legislaţiei sanitar – veterinare, iar autorizația DSP depinde de codurile CAEN ale companiei dvs.<br />
              Pentru a obține avizul DSP, este necesar să urmați demersurile la unitatea care se află în raza teritorială a punctului de lucru.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-[#f3f6fd] rounded-xl shadow-lg p-6 border border-primaryColor/10 flex flex-col items-start"
          >
            <FileText className="w-10 h-10 text-[#3b82f6] mb-4" />
            <h3 className="text-xl font-semibold text-primaryColor">Primărie</h3>
            <p className="mt-2 text-gray-700">
              Autorizația de Functionare eliberată de către primărie este un document oficial esențial în desfășurarea activităților comerciale sau profesionale într-un anumit loc sau punct de lucru. Acest acord de functionare reprezintă permisiunea și aprobarea autorității locale pentru desfășurarea activităților specifice, cum ar fi magazine, restaurante, saloane de înfrumusețare sau birouri.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="bg-[#fdf6e3] rounded-xl shadow-lg p-6 border border-primaryColor/10 flex flex-col items-start"
          >
            <Award className="w-10 h-10 text-[#f59e42] mb-4" />
            <h3 className="text-xl font-semibold text-primaryColor">Mediu</h3>
            <p className="mt-2 text-gray-700">
              Avizul de mediu este actul administrativ emis de autoritatea competentă pentru protecţia mediului, care confirmă integrarea aspectelor privind protecţia mediului. Autorizații de mediu se solicită pentru activități economice cu impact asupra mediului și sănătății publice.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-[#fbeff2] rounded-xl shadow-lg p-6 border border-primaryColor/10 flex flex-col items-start"
          >
            <UserCheck className="w-10 h-10 text-[#e11d48] mb-4" />
            <h3 className="text-xl font-semibold text-primaryColor">ISU</h3>
            <p className="mt-2 text-gray-700">
              Autorizația ISU este una din cele mai importante autorizații necesare unei afaceri deoarece ea certifică îndeplinirea normelor de securitate în cazuri de urgență. Obținerea autorizației ISU nu este obligatorie pentru toate tipurile de activități.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
            className="bg-[#f0f9ff] rounded-xl shadow-lg p-6 border border-primaryColor/10 flex flex-col items-start md:col-span-2"
          >
            <Briefcase className="w-10 h-10 text-[#0ea5e9] mb-4" />
            <h3 className="text-xl font-semibold text-primaryColor">IGI</h3>
            <p className="mt-2 text-gray-700">
              Şederea pe teritoriul României a cetăţenilor străini se poate realiza prin mai multe moduri.<br />
              Noi vă oferim asistenţă şi reprezentare ȋn faţa Inspectoratului General pentru Imigrări (IGI).
            </p>
          </motion.div>
        </div>
      </section>

      <LegalSupport />
      <FAQ items={faqData} />
      
      <Footer />
    </div>
  );
}