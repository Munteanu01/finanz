"use client"
import FinanzNavbar from "../../navbar";
import Footer from "../../components/footer";
import HeroPages from "../../components/HeroPages";
import { Briefcase, ShieldCheck, UserCheck } from "lucide-react";
import LegalSupport from "../../components/LegalSupport";
import FAQ from "../../components/faq"; // Folosește componenta existentă

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

export default function InregistrareMarcePage() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <FinanzNavbar />
      <HeroPages
        title="Înregistrare mărci"
        subtitle="Un proces simplu pentru protecția identității afacerii tale"
        badge="Protecție legală rapidă și sigură"
        cards={[
          {
            title: "Fără drumuri și birocrație",
            description:
              "Ne ocupăm noi de toate formalitățile, astfel încât să nu pierzi timp cu depunerea actelor la instituțiile competente.",
            icon: <Briefcase className="w-8 h-8 text-primaryColor" />,
          },
          {
            title: "Îți înregistrăm marca simplu și eficient",
            description:
              "Asigurându-te că ai toate drepturile legale asupra brandului tău.",
            icon: <ShieldCheck className="w-8 h-8 text-primaryColor" />,
          },
          {
            title: "Consultanță la fiecare pas",
            description:
              "Beneficiezi de suport specializat de la început până la final, astfel încât procesul să fie clar, rapid și fără probleme.",
            icon: <UserCheck className="w-8 h-8 text-primaryColor" />,
          },
        ]}
      />
      <main className="container mx-auto py-12 px-4 mt-16 xl:mt-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-primaryColor mb-8">
            Înregistrare Mărci și Brevete
          </h1>

          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-700 mb-8">
              Protejați-vă proprietatea intelectuală prin înregistrarea mărcilor,
              brevetelor și altor drepturi de proprietate industrială.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-2xl font-semibold text-primaryColor mb-4">
                  Servicii disponibile
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Înregistrare mărci</li>
                  <li>• Înregistrare brevete</li>
                  <li>• Modele de utilitate</li>
                  <li>• Desene și modele industriale</li>
                  <li>• Indicații geografice</li>
                  <li>• Denumiri de origine</li>
                </ul>
              </div>

              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="text-2xl font-semibold text-green-900 mb-4">
                  Avantajele protecției
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Protecție juridică exclusivă</li>
                  <li>• Valoare comercială crescută</li>
                  <li>• Prevenirea contrafacerii</li>
                  <li>• Avantaj competitiv</li>
                  <li>• Posibilitate de licențiere</li>
                  <li>• Protecție internațională</li>
                </ul>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-primaryColor mb-6">
              Procesul de înregistrare
            </h2>

            <div className="space-y-6 mb-12">
              <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
                <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
                  1
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">
                    Cercetarea preliminară
                  </h4>
                  <p className="text-gray-700">
                    Verificăm disponibilitatea mărcii și identificăm potențiale
                    conflicte.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
                <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
                  2
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">
                    Pregătirea cererii
                  </h4>
                  <p className="text-gray-700">
                    Întocmim cererea de înregistrare cu toate specificațiile
                    necesare.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
                <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
                  3
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">
                    Depunerea la OSIM
                  </h4>
                  <p className="text-gray-700">
                    Depunem cererea la Oficiul de Stat pentru Invenții și Mărci.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
                <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
                  4
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">
                    Urmărirea procedurii
                  </h4>
                  <p className="text-gray-700">
                    Monitorizăm procesul și răspundem la eventualele obiecții.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
                <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
                  5
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">
                    Obținerea certificatului
                  </h4>
                  <p className="text-gray-700">
                    Ridicăm certificatul de înregistrare și vă oferim consiliere
                    pentru menținere.
                  </p>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-primaryColor mb-6">
              Tarife și termene
            </h2>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <div className="border border-gray-200 rounded-lg p-6">
                <h4 className="text-xl font-semibold mb-4 text-primaryColor">
                  Înregistrare Marcă Națională
                </h4>
                <div className="text-2xl font-bold text-primaryColor mb-2">
                  1.200 RON
                </div>
                <p className="text-sm text-gray-600 mb-4">
                  Include toate taxele OSIM și serviciile noastre
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Termen: 12-18 luni</li>
                  <li>• Protecție: 10 ani (reînnoibilă)</li>
                  <li>• Cercetare inclusă</li>
                </ul>
              </div>

              <div className="border border-gray-200 rounded-lg p-6">
                <h4 className="text-xl font-semibold mb-4 text-primaryColor">
                  Înregistrare Marcă UE
                </h4>
                <div className="text-2xl font-bold text-primaryColor mb-2">
                  2.500 RON
                </div>
                <p className="text-sm text-gray-600 mb-4">
                  Protecție în toate țările UE
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Termen: 4-6 luni</li>
                  <li>• Protecție: 10 ani (reînnoibilă)</li>
                  <li>• Acoperire 27 țări</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <FAQ items={faqData} />
        <LegalSupport />
      </main>
      <Footer />
    </div>
  );
}
