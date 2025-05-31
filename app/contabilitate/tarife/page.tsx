"use client";
import React from "react";
import FinanzNavbar from "../../../navbar";
import Footer from "../../../components/footer";
import PriceTable from "../../../components/PriceTable";
import FacturareDiv from "../../../components/facturareDiv";
import LegalSupport from "../../../components/LegalSupport";
import Hero from "../../../components/HeroPages";
import { FileText, Calculator } from "lucide-react";

const accountingPrices = {
  title: "Tarife pentru serviciile de contabilitate",
  headers: ["Volum", "Neplătitor TVA", "Plătitor TVA"],
  rows: [
    { service: "Fără activitate", price: { nonVAT: "150 lei", VAT: "170 lei" } },
    { service: "10 documente", price: { nonVAT: "195 lei", VAT: "245 lei" } },
    { service: "20 documente", price: { nonVAT: "295 lei", VAT: "345 lei" } },
    { service: "30 documente", price: { nonVAT: "395 lei", VAT: "445 lei" } },
    { service: "50 documente", price: { nonVAT: "595 lei", VAT: "645 lei" } },
  ],
  note: "Ai un volum mai mare de 100 de documente lunar? Contactează-ne pentru o ofertă personalizată.",
};

const payrollPrices = {
  title: "Tarife pentru administrarea lunară a salariaților",
  headers: ["Denumire serviciu", "Număr angajați", "Tarif lunar per angajat"],
  rows: [
    { service: "Administrare salarizare", price: { employees: "1-5", cost: "75 lei" } },
    { service: "Administrare salarizare", price: { employees: "6-10", cost: "65 lei" } },
    { service: "Administrare salarizare", price: { employees: "11-15", cost: "55 lei" } },
  ],
  note: "Pentru peste 15 angajați, tariful se stabilește individual, în funcție de nevoile firmei.",
};

const payrollServicesPrices = {
  title: "Tarife pentru servicii de salarizare fracționată",
  headers: ["Denumire serviciu", "Tarif"],
  rows: [
    { service: "Încheiere contract individual de muncă", price: "90 ron" },
    { service: "Încheiere contract de telemuncă", price: "95 ron" },
    { service: "Încetare contract de muncă", price: "65 ron" },
    { service: "Înregistrare contract de mandat", price: "65 ron" },
    { service: "Declarație D205 pentru firme fără abonament contabil", price: "35 ron" },
    { service: "Decizie suspendare contract de muncă", price: "65 ron" },
    { service: "Administrare contract suspendat (pe lună completă)", price: "65 ron" },
    { service: "Depunere formular D700 pentru angajați", price: "150 ron" },
    { service: "Eliberare adeverință pentru medicul de familie/spital", price: "35 ron" },
    { service: "Întocmire fișă de post", price: "130 ron" },
    { service: "Redactare Regulament de Ordine Interioară", price: "800 ron" },
    { service: "Înregistrare declarații pentru subvenții salariale", price: "65 ron" },
    { service: "Obținere utilizator și parolă ITM", price: "150 ron" },
    { service: "Înregistrare coasigurat", price: "100 ron" },
    { service: "Radiere coasigurat", price: "100 ron" },
    { service: "Administrare poprire angajat (pe lună)", price: "100 ron" },
    { service: "Întocmire act adițional la CIM", price: "100 ron" },
    { service: "Înregistrare concediu medical angajat", price: "100 ron" },
  ],
};

const consultingPrices = {
  title: "Tarife pentru servicii de consultanță financiar-contabilă",
  headers: ["Denumire serviciu", "Tarif"],
  rows: [
    { service: "Întocmire bilanț interimar", price: "450 ron" },
    { service: "Întocmire bilanț anual/semestrial pentru firme fără venituri", price: "600 ron" },
    { service: "Întocmire bilanț anual/semestrial pentru microîntreprinderi cu cifra de afaceri <100.000 lei", price: "700 ron" },
    { service: "Întocmire bilanț anual/semestrial pentru microîntreprinderi cu cifra de afaceri 100.000 - 200.000 lei", price: "800 ron" },
    { service: "Întocmire bilanț anual/semestrial pentru microîntreprinderi cu cifra de afaceri 200.000 - 2.500.000 lei", price: "1100 ron" },
    { service: "Întocmire bilanț anual/semestrial pentru entități mici", price: "1700 ron" },
    { service: "Întocmire bilanț anual/semestrial pentru entități mijlocii și mari", price: "2500 ron" },
    { service: "Întocmire Declarație Unică (în funcție de complexitate)", price: "200-700 ron" },
    { service: "Depunere declarații rectificative", price: "150 ron" },
    { service: "Depunere declarații fiscale speciale", price: "de la 200 ron" },
    { service: "Depunere Declarația 700 pentru alte modificări", price: "200 ron" },
    { service: "Obținere Spațiu Virtual Privat (SPV)", price: "250 ron" },
    { service: "Achiziție Registru Unic de Control", price: "200 ron" },
    { service: "Obținere certificat de atestare fiscală", price: "300 ron" },
    { service: "Obținere cazier fiscal", price: "300 ron" },
    { service: "Obținere certificat de rezidență fiscală", price: "300 ron" },
    { service: "Obținere cod EORI", price: "300 ron" },
    { service: "Înființare PFI la ANAF", price: "600 ron" },
    { service: "Suspendare PFI la ANAF", price: "300 ron" },
    { service: "Radiere PFI la ANAF", price: "600 ron" },
    { service: "Înregistrare societate în scopuri de TVA", price: "600 ron" },
    { service: "Schimbare certificat TVA", price: "300 ron" },
    { service: "Renunțare/Reînregistrare cod TVA", price: "300 ron" },
    { service: "Reînregistrare TVA pentru firme cu cod anulat", price: "600 ron" },
    { service: "Înregistrare și depunere dosar pentru Cod Special TVA", price: "600 ron" },
    { service: "Anulare Cod Special TVA", price: "300 ron" },
    { service: "Depunere cerere eșalonare obligații bugetare", price: "300 ron" },
    { service: "Asistență pentru rambursare TVA", price: "comision 1%" },
    { service: "Participare la licitații publice", price: "500 lei" },
    { service: "Analiză financiar-contabilă asupra activității economice", price: "500 lei/oră" },
    { service: "Obținere NUI pentru case de marcat din SPV", price: "300 lei" },
    { service: "Întocmire și depunere Formular 177", price: "300 lei" },
    { service: "Depunere cerere reactivare fiscală în SPV", price: "500 lei" },
    { service: "Obținere CIF pentru puncte de lucru", price: "300 lei" },
  ],
};

const heroFeatures = [
  {
    icon: <FileText className="text-primaryColor mx-auto w-10 h-10 mb-4" />,
    title: "Reducere 10% pentru plata pe 6 luni",
    description: "Plătește serviciile de contabilitate pe 6 luni în avans și economisește 10% din costuri.",
  },
  {
    icon: <Calculator className="text-primaryColor mx-auto w-10 h-10 mb-4" />,
    title: "Tarife flexibile pentru volume mari",
    description: "Pentru peste 100 de documente lunar, îți oferim o ofertă personalizată adaptată afacerii tale.",
  },
];

export default function TarifePage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-white relative">
      <FinanzNavbar />

      {/* Hero Section */}
      <Hero
        backgroundImage="/images/contabilitatefundal.jpg"
        badge=""
        title="Tarife evidență contabilă"
        subtitle="Transparență și flexibilitate în costuri contabile"
        cards={heroFeatures}
      />

      {/* Price Tables Sections */}
      <section className="w-full bg-gray-50 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            <PriceTable {...accountingPrices} />
            <PriceTable {...payrollPrices} />
            <PriceTable {...payrollServicesPrices} />
            <PriceTable {...consultingPrices} />
          </div>
        </div>
      </section>

      <section className="w-full bg-white">
        <FacturareDiv />
      </section>

      <section className="w-full bg-gray-50">
        <LegalSupport />
      </section>

      <Footer />
    </div>
  );
}
