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
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Title Section - adjusted to match grid margins */}
          <motion.div 
            className="mb-8 sm:mb-12 lg:mb-16 md:col-span-2 xl:col-span-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primaryColor mb-4 sm:mb-6">
              Autorizații și{" "}
              <span className="text-secundaryColor block pt-2">avize necesare</span>
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-3xl">
              Obține rapid și fără stres toate autorizațiile necesare pentru afacerea ta.
            </p>
          </motion.div>

          {/* Grid remains the same */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-6">
            {/* DSV Card */}
            <motion.div
              className="col-span-1 md:col-span-2 xl:col-span-3 bg-white/90 rounded-3xl p-6 sm:p-8 shadow-lg"
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <div className="flex flex-col gap-3 sm:gap-4">
                <div className="bg-primaryColor flex p-3 sm:p-4 rounded-2xl shadow-md w-fit">
                  <ShieldCheck className="w-6 h-6 mr-5 sm:w-8 sm:h-8 text-white" />
                  <h3 className="text-xl sm:text-2xl font-bold text-white">DSV</h3>
                </div>
                
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                  Toate companiile care fac comert, productie sau depozitare de alimente, trebuie sa fie autorizate de Autoritatea Nationala Sanitar Veterinara si pentru Siguranta Alimentelor inaintea inceperii activitatii.
                </p>
              </div>
            </motion.div>

            {/* DSP Card */}
            <motion.div
              className="col-span-1 bg-white/90 rounded-3xl p-6 sm:p-8 shadow-lg"
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <div className="flex flex-col gap-3 sm:gap-4">
                <div className="bg-primaryColor flex p-3 sm:p-4 rounded-2xl shadow-md w-fit">
                  <ShieldCheck className="w-6 h-6 mr-5 sm:w-8 sm:h-8 text-white" />
                  <h3 className="text-xl sm:text-2xl font-bold text-white">DSP</h3>
                </div>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                  Autorizația sanitară este necesară pentru spațiile cu specific comercial sau social.
                </p>
              </div>
            </motion.div>

            {/* Primărie Card */}
            <motion.div
              className="md:col-span-2 bg-white/90 rounded-3xl p-6 sm:p-8 shadow-lg"
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <div className="flex flex-col gap-3 sm:gap-4">
                <div className="bg-primaryColor flex p-3 sm:p-4 rounded-2xl shadow-md w-fit">
                  <FileText className="w-6 h-6 mr-5 sm:w-8 sm:h-8 text-white" />
                  <h3 className="text-xl sm:text-2xl font-bold text-white">Primărie</h3>
                </div>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                  Document oficial esențial pentru desfășurarea activităților comerciale.
                </p>
              </div>
            </motion.div>

            {/* IGI Card */}
            <motion.div
              className="md:col-span-2 bg-white/90 rounded-3xl p-6 sm:p-8 shadow-lg"
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <div className="flex flex-col gap-3 sm:gap-4">
                <div className="bg-primaryColor flex p-3 sm:p-4 rounded-2xl shadow-md w-fit">
                  <UserCheck className="w-6 h-6 mr-5 sm:w-8 sm:h-8 text-white" />
                  <h3 className="text-xl sm:text-2xl font-bold text-white">IGI</h3>
                </div>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                  Şederea pe teritoriul României a cetăţenilor străini se poate realiza prin mai multe moduri.
                </p>
              </div>
            </motion.div>

            {/* ISU Card */}
            <motion.div
              className="md:col-span-2 bg-white/90 rounded-3xl p-6 sm:p-8 shadow-lg"
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <div className="flex flex-col gap-3 sm:gap-4">
                <div className="bg-primaryColor flex p-3 sm:p-4 rounded-2xl shadow-md w-fit">
                  <ShieldCheck className="w-6 h-6 mr-5 sm:w-8 sm:h-8 text-white" />
                  <h3 className="text-xl sm:text-2xl font-bold text-white">ISU</h3>
                </div>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                  Autorizația ISU este una din cele mai importante autorizații necesare unei afaceri deoarece ea certifică îndeplinirea normelor de securitate în cazuri de urgență.
                </p>
              </div>
            </motion.div>

            {/* Mediu Card */}
            <motion.div
              className="md:col-span-2 bg-white/90 rounded-3xl p-6 sm:p-8 shadow-lg"
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <div className="flex flex-col gap-3 sm:gap-4">
                <div className="bg-primaryColor flex p-3 sm:p-4 rounded-2xl shadow-md w-fit">
                  <Globe className="w-6 h-6 mr-5 sm:w-8 sm:h-8 text-white" />
                  <h3 className="text-xl sm:text-2xl font-bold text-white">Mediu</h3>
                </div>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
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