"use client"
import FinanzNavbar from "../../navbar";
import Footer from "../../components/footer";
import HeroPages from "../../components/HeroPages";
import { Briefcase, ShieldCheck, UserCheck, FileText, FileCheck, Award } from "lucide-react";
import LegalSupport from "../../components/LegalSupport";
import FAQ from "../../components/faq"; // Folosește componenta existentă
import AccountingFeatures from "../../components/firstFeatures"; // Importăm componenta

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
      "După aprobare, vei primi certificatul care îți garantează drepturile exclusive asupra mărcii tale.",
    icon: <Award className="w-10 h-10 text-primaryColor mb-4" />,
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

      <FAQ items={faqData} />
      <LegalSupport />
      <Footer />
    </div>
  );
}
