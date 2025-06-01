"use client"
import FinanzNavbar from "../../navbar";
import Footer from "../../components/footer";
import HeroPages from "../../components/HeroPages";
import { Briefcase, ShieldCheck, UserCheck, FileText, FileCheck, Award } from "lucide-react";
import LegalSupport from "../../components/LegalSupport";
import FAQ from "../../components/faq";
import AccountingFeatures from "../../components/firstFeatures";
import PriceTable from "../../components/PriceTable";
import FacturareDiv from "../../components/facturareDiv";
import { motion } from "framer-motion";

// FAQ data
const faqData = [
  {
    question: "Ce acte trebuie să pregătesc pentru început?",
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
    title: "Completezi formularul online",
    description:
      "În doar 1 minut, completezi formularul cu datele necesare, iar un consultant îți va solicita documentele pentru procesare.",
    icon: <FileText className="w-10 h-10 text-primaryColor mb-4" />,
  },
  {
    title: "Redactarea contractului",
    description:
      "În 30 de minute, redactăm contractul de închiriere imediat după primirea documentelor.",
    icon: <FileCheck className="w-10 h-10 text-primaryColor mb-4" />,
  },
  {
    title: "Primești contractul semnat",
    description:
      "În 3 zile, vei primi contractul de sediu semnat, împreună cu anexele necesare, gata pentru înregistrare la Registrul Comerțului.",
    icon: <Award className="w-10 h-10 text-primaryColor mb-4" />,
  },
];

// Price table data
const priceTableData = {
  title: "Alege pachetul de găzduire potrivit pentru firma ta",
  headers: ["Durata", "Preț"],
  rows: [
    { service: "6 luni", price: "350 lei" },
    { service: "1 an", price: "450 lei" },
    { service: "2 ani", price: "650 lei" },
    { service: "3 ani", price: "950 lei" },
    { service: "4 ani", price: "1250 lei" },
    { service: "5 ani", price: "1450 lei" },
  ],
};

export default function GazduireSediuPage() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <FinanzNavbar />
      <HeroPages
        backgroundImage="/gazduire.jpg"
        title="Găzduire sediu social"
        subtitle="Înființează-ți firma fără să-ți faci griji pentru sediu social"
        cards={[
          {
            title: "Notificare online a corespondenței",
            description:
              "Primești notificări instant despre orice document sosit la sediul social, astfel încât să fii mereu la curent cu actele firmei tale.",
            icon: <Briefcase className="w-10 h-10 text-primaryColor mb-4" />,
          },
          {
            title: "Administrare corespondență",
            description:
              "Toată corespondența oficială este recepționată și gestionată, astfel încât să nu pierzi niciun document important.",
            icon: <ShieldCheck className="w-10 h-10 text-primaryColor mb-4" />,
          },
          {
            title: "41 de locații disponibile în toată țara",
            description:
              "Indiferent de județul în care ai nevoie de sediu social, ai acces rapid la una dintre cele 41 de locații disponibile.",
            icon: <UserCheck className="w-10 h-10 text-primaryColor mb-4" />,
          },
        ]}
      />

      <AccountingFeatures
        title="Obține sediul social fără complicații"
        features={featuresData}
      />

      <div className="w-full py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <PriceTable {...priceTableData} />
        </div>
      </div>

      <div className="w-full py-16 lg:py-24" >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center mb-20 text-gray-700"
          >
            Prelungirea sau schimbarea sediului social se face fără complicații
          </motion.h2>

          <div className="grid lg:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03 }}
              className="flex flex-col bg-white shadow-xl rounded-2xl p-8 min-h-[260px] transition-transform duration-300"
            >
              <div className="text-3xl font-bold text-primaryColor mb-4 bg-[#DADEF5]">600 lei</div>
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Schimbare sediu social</h3>
              <p className="text-gray-700 leading-relaxed">
                Mută sediul social al firmei tale într-o nouă locație și actualizează documentele oficiale pentru a reflecta această schimbare.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03 }}
              className="flex flex-col bg-white shadow-xl rounded-2xl p-8 min-h-[260px] transition-transform duration-300"
            >
              <div className="text-3xl font-bold text-primaryColor mb-4 bg-[#DADEF5]">450 lei</div>
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Prelungire sediu social</h3>
              <p className="text-gray-700 leading-relaxed">
                Extinde perioada de valabilitate a sediului social actual prin prelungirea duratei contractului de închiriere sau a dreptului de folosință.
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      <FAQ items={faqData} />
      <FacturareDiv />
      <LegalSupport />
      <Footer />
    </div>
  );
}