"use client"
import FinanzNavbar from "../../navbar";
import Footer from "../../components/footer";
import HeroPages from "../../components/HeroPages";
import { Briefcase, ShieldCheck, UserCheck, FileText, FileCheck, Award, Globe } from "lucide-react"; // Add Globe icon
import LegalSupport from "../../components/LegalSupport";
import FAQ from "../../components/faq";
import AccountingFeatures from "../../components/firstFeatures";
import { motion } from "framer-motion";

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
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-primaryColor mb-6">
              Autorizații și <br className="hidden md:block" />
              <span className="text-secundaryColor">avize necesare</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl">
              Obține rapid și fără stres toate autorizațiile necesare pentru afacerea ta.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 xl:grid-cols-4 gap-6">
            {/* DSV Card */}
            <motion.div
              className="col-span-1 xl:col-span-3 bg-gray-50 rounded-3xl p-8 hover:shadow-2xl transition-all duration-500 cursor-pointer group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex flex-col gap-4">
                <div className="bg-secundaryColor p-4 rounded-2xl shadow-lg w-fit">
                  <ShieldCheck className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">DSV</h3>
                <p className="text-gray-800 text-lg leading-relaxed">
                  Toate companiile care fac comert, productie sau depozitare de alimente, trebuie sa fie autorizate de Autoritatea Nationala Sanitar Veterinara si pentru Siguranta Alimentelor inaintea inceperii activitatii.
                </p>
              </div>
            </motion.div>

            {/* DSP Card */}
            <motion.div
              className="col-span-1 bg-gray-50 rounded-3xl p-8 hover:shadow-2xl transition-all duration-500 cursor-pointer group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="flex flex-col gap-4">
                <div className="bg-secundaryColor p-4 rounded-2xl shadow-lg w-fit">
                  <ShieldCheck className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">DSP</h3>
                <p className="text-gray-800 text-lg leading-relaxed">
                  Autorizația sanitară este necesară pentru spațiile cu specific comercial sau social.
                </p>
              </div>
            </motion.div>

            {/* Primărie Card */}
            <motion.div
              className="md:col-span-2 bg-gray-50 rounded-3xl p-8 hover:shadow-2xl transition-all duration-500 cursor-pointer group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="flex flex-col gap-4">
                <div className="bg-secundaryColor p-4 rounded-2xl shadow-lg w-fit">
                  <FileText className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Primărie</h3>
                <p className="text-gray-800 text-lg leading-relaxed">
                  Document oficial esențial pentru desfășurarea activităților comerciale.
                </p>
              </div>
            </motion.div>

            {/* IGI Card */}
            <motion.div
              className="md:col-span-2 bg-gray-50 rounded-3xl p-8 hover:shadow-2xl transition-all duration-500 cursor-pointer group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="flex flex-col gap-4">
                <div className="bg-secundaryColor p-4 rounded-2xl shadow-lg w-fit">
                  <UserCheck className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">IGI</h3>
                <p className="text-gray-800 text-lg leading-relaxed">
                  Şederea pe teritoriul României a cetăţenilor străini se poate realiza prin mai multe moduri.
                </p>
              </div>
            </motion.div>

            {/* ISU Card */}
            <motion.div
              className="md:col-span-2 bg-gray-50 rounded-3xl p-8 hover:shadow-2xl transition-all duration-500 cursor-pointer group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="flex flex-col gap-4">
                <div className="bg-secundaryColor p-4 rounded-2xl shadow-lg w-fit">
                  <ShieldCheck className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">ISU</h3>
                <p className="text-gray-800 text-lg leading-relaxed">
                  Autorizația ISU este una din cele mai importante autorizații necesare unei afaceri deoarece ea certifică îndeplinirea normelor de securitate în cazuri de urgență.
                </p>
              </div>
            </motion.div>

            {/* Mediu Card */}
            <motion.div
              className="md:col-span-2 bg-gray-50 rounded-3xl p-8 hover:shadow-2xl transition-all duration-500 cursor-pointer group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="flex flex-col gap-4">
                <div className="bg-secundaryColor p-4 rounded-2xl shadow-lg w-fit">
                  <Globe className="w-8 h-8 text-white" /> {/* Changed from Award to Globe */}
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Mediu</h3>
                <p className="text-gray-800 text-lg leading-relaxed">
                  Avizul de mediu este actul administrativ emis de autoritatea competentă pentru protecţia mediului, care confirmă integrarea aspectelor privind protecţia mediului.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

     

          <FAQ items={[
            {
              question: "Ce acte trebuie să pregăsesc pentru început?",
              answer: "Doar buletinul tău. De restul ne ocupăm noi."
            },
            {
              question: "Trebuie să merg personal la vreo instituție?",
              answer: "Nu. Totul se face online, iar noi ne ocupăm de depunerea documentelor."
            },
            {
              question: "Cât durează tot procesul?",
              answer: "Depinde de serviciul ales, dar în general între 2 și 5 zile lucrătoare."
            },
            {
              question: "Pot semna documentele fără să mă deplasez?",
              answer: "Da. Folosim semnătură electronică calificată acceptată de toate instituțiile."
            }
          ]} />
     
      <LegalSupport />

      <Footer />
    </div>
  );
}