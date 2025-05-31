import React from "react";
import FinanzNavbar from "../navbar";
import Footer from "../components/footer";
import FAQ from "../components/faq";
import Prices from "../components/Prices.jsx";
import AccountingFeatures from "../components/firstFeatures.jsx";
import FacturareDiv from "../components/facturareDiv.jsx";
import Features from "../components/secondFeatures.jsx";
import LegalSupport from "../components/LegalSupport.jsx";
import ProcesSimplificat from "../components/ProcesSimplificat";
import PasiInfiintare from "./TreiPasi";
import OperationalSteps from "../components/OperationalSteps";
import PlanuriContabile from "../components/PlanuriContabile";
import HeroPages from "../components/HeroPages";

export default function InfiintariLayout({
  heroProps,
  faqItems,
  prices,
}: {
  heroProps: {
    backgroundImage: string;
    badge: string;
    title: string;
    subtitle: string;
    cards: Array<{ icon: React.ReactElement; title: string; description: string }>;
  };
  faqItems: Array<{ question: string; answer: string }>;
  prices: Array<{
    title: string;
    price: string;
    subtitle: string;
    details: string[];
  }>;
}) {
  return (
    <div className="min-h-screen overflow-x-hidden bg-white relative">
      <FinanzNavbar />

      {/* Hero Section */}
      <HeroPages {...heroProps} />

      {/* Other Components */}
      <ProcesSimplificat />
      <AccountingFeatures />
      <PasiInfiintare />
      <OperationalSteps />
      <PlanuriContabile />

      {/* Pricing Section */}
      <section className="w-full bg-white">
        <Prices
          prices={prices}
          title="Alege un abonament de contabilitate și înființarea firmei este gratuită!"
          formattedTitle="Alege un abonament de contabilitate și înființarea firmei este gratuită!"
        />
      </section>
      <Features />
      <LegalSupport />
      <FacturareDiv />

      {/* FAQ Section */}
      <section className="w-full bg-white">
        <FAQ items={faqItems} />
      </section>

      <Footer />
    </div>
  );
}