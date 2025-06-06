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
import ModificationServices from "../../components/ModificationServices";
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
      "În 3-5 zile, vei primi contractul de sediu semnat, împreună cu anexele necesare, gata pentru înregistrare la Registrul Comerțului.",
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

// Modification services data
const modificationServicesData = [
  {
    price: "650 lei",
    title: "Actualizarea codurilor CAEN",
    description: "Adu-ți codurile CAEN la zi conform noilor standarde Rev-3 pentru a asigura conformitatea activităților firmei tale.",
  },
  {
    price: "600 lei",
    title: "Adăugare/Ștergere Cod CAEN",
    description: "Extinde sau restrânge domeniul de activitate al firmei tale prin adăugarea sau eliminarea codurilor CAEN relevante.",
  },
  {
    price: "600 lei",
    title: "Schimbare cod CAEN principal",
    description: "Modifică activitatea principală a firmei tale prin actualizarea codului CAEN principal pentru a reflecta noua direcție a afacerii.",
  },
  {
    price: "600 lei",
    title: "Schimbare sediu social",
    description: "Mută sediul social al firmei tale într-o nouă locație și actualizează documentele oficiale pentru a reflecta această schimbare.",
  },
  {
    price: "450 lei",
    title: "Prelungire sediu social",
    description: "Extinde perioada de valabilitate a sediului social actual prin prelungirea duratei contractului de închiriere sau a dreptului de folosință.",
  },
  {
    price: "450 lei",
    title: "Deschidere punct de lucru",
    description: "Extinde-ți afacerea prin deschiderea unui nou punct de lucru și înregistrează-l oficial la autoritățile competente.",
  },
  {
    price: "450 lei",
    title: "Prelungire punct de lucru",
    description: "Menține activitatea punctului de lucru existent prin prelungirea duratei de funcționare înregistrată oficial.",
  },
  {
    price: "350 lei",
    title: "Închidere punct de lucru",
    description: "Închide un punct de lucru care nu mai este activ și actualizează documentele firmei pentru a reflecta această modificare.",
  },
  {
    price: "600 lei",
    title: "Modificare nume firmă",
    description: "Redefinește identitatea afacerii tale prin schimbarea denumirii oficiale a firmei și înregistrarea noii denumiri.",
  },
  {
    price: "600 lei",
    title: "Majorare capital social",
    description: "Consolidează baza financiară a firmei tale prin majorarea capitalului social și actualizarea actelor constitutive.",
  },
  {
    price: "600 lei",
    title: "Cesiune părți sociale",
    description: "Transferă părțile sociale către noi asociați sau parteneri și actualizează structura de proprietate a firmei tale.",
  },
];

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

      <ModificationServices
        title="Simplificăm procesul oricărei modificări"
        subtitle="Indiferent ce modificare ai nevoie, procesul este simplu și 100% online. Poți efectua oricâte modificări simultan și plătești doar o singură taxă."
        services={modificationServicesData}
      />

      <FAQ items={faqData} />
      <FacturareDiv />
      <LegalSupport />
      <Footer />
    </div>
  );
}