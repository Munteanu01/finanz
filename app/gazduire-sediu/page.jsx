"use client"
import FinanzNavbar from "../../navbar";
import Footer from "../../components/footer";
import HeroPages from "../../components/HeroPages";
import { Briefcase, ShieldCheck, UserCheck, FileText, FileCheck, Award } from "lucide-react";
import LegalSupport from "../../components/LegalSupport";
import FAQ from "../../components/faq";
import AccountingFeatures from "../../components/firstFeatures";
import PriceTable from "../../components/PriceTable";

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
        backgroundImage="/gazduire-sediu.jpg"
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
            title: "Recepționare și gestionare corespondență",
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

      <PriceTable {...priceTableData} />

      <div className="py-16 lg:py-24">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Prelungirea sau schimbarea sediului social se face fără complicații
        </h2>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white shadow-lg rounded-lg p-6 text-center">
            <h3 className="text-xl font-semibold mb-4">600 lei</h3>
            <p className="text-gray-700">
              <strong>Schimbare sediu social</strong>
              <br />
              Mută sediul social al firmei tale într-o nouă locație și actualizează documentele oficiale pentru a reflecta această schimbare.
            </p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6 text-center">
            <h3 className="text-xl font-semibold mb-4">450 lei</h3>
            <p className="text-gray-700">
              <strong>Prelungire sediu social</strong>
              <br />
              Extinde perioada de valabilitate a sediului social actual prin prelungirea duratei contractului de închiriere sau a dreptului de folosință.
            </p>
          </div>
        </div>
      </div>

      <FAQ items={faqData} />
      <LegalSupport />
      <Footer />
    </div>
  );
}