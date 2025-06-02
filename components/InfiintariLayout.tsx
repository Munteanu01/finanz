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
import { Clock, FileCheck2, Globe, Gavel } from "lucide-react";

export default function InfiintariLayout({
  heroProps,
  faqItems,
  prices,
  pfa = false,
  showPrices = true,
  showPasiInfiintare = true,
  showProcesSimplificat = true,
  showOperationalSteps = true,
  showFeatures = true,
  showLegalSupport = true,
  showFacturareDiv = true,
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
  pfa?: boolean;
  showPrices?: boolean;
  showPasiInfiintare?: boolean;
  showProcesSimplificat?: boolean;
  showOperationalSteps?: boolean;
  showFeatures?: boolean;
  showLegalSupport?: boolean;
  showFacturareDiv?: boolean;
}) {
  return (
    <>
      <FinanzNavbar />

      {/* Hero Section */}
      <HeroPages
        {...heroProps}
        backgroundImage="/infintare.jpg"
      />
      <AccountingFeatures
        title="Noi ne ocupăm de tot, tu te concentrezi pe afacerea ta"
        features={[
          {
            icon: <Clock className="w-10 h-10 text-primaryColor mb-4" />,
            title: "Modificări rapide, în doar 3 zile",
            description: "Timpul tău este prețios. Orice schimbare necesară firmei tale este gata în maximum 3 zile, fără întârzieri.",
          },
          {
            icon: <FileCheck2 className="w-10 h-10 text-primaryColor mb-4" />,
            title: "Fără formalități, fără stres",
            description: "Noi ne ocupăm de întregul proces – de la redactarea actelor până la înregistrarea lor. Tu doar semnezi!",
          },
          {
            icon: <Globe className="w-10 h-10 text-primaryColor mb-4" />,
            title: "Fără drumuri la instituții",
            description: "Totul se desfășoară online, indiferent unde te afli. Gestionăm relația cu Registrul Comerțului în locul tău.",
          },
          {
            icon: <Gavel className="w-10 h-10 text-primaryColor mb-4" />,
            title: "Consultanță juridică inclusă",
            description: "De la primul pas până la finalizare, beneficiezi de suport specializat pentru ca totul să decurgă fără probleme.",
          },
        ]}
      />
      {/* Other Components */}
      {showPasiInfiintare && <PasiInfiintare />}
      {showProcesSimplificat && <ProcesSimplificat />}
      
      {showOperationalSteps && <OperationalSteps />}
      {showPrices && (
        <PlanuriContabile
          title={pfa ? "Înființare PFA" : undefined}
          subtitle={pfa ? "Plată unică - 210 lei" : undefined}
          pfa={pfa}
        />
      )}

      
      {showFeatures && <Features />}
      {showLegalSupport && <LegalSupport />}
      {showFacturareDiv && <FacturareDiv />}

      {/* FAQ Section */}
      <section className="w-full bg-white">
        <FAQ items={faqItems} />
      </section>

      <Footer />
    </>
  );
}