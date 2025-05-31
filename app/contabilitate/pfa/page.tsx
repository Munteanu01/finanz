"use client"
import React from "react"
import FinanzNavbar from "../../../navbar"
import Footer from "../../../components/footer"
import FAQ from "../../../components/faq"
import Prices from "../../../components/Prices.jsx"
import AccountingFeatures from "../../../components/firstFeatures.jsx"
import FacturareDiv from "../../../components/facturareDiv.jsx"
import Features from "../../../components/secondFeatures.jsx"
import LegalSupport from "../../../components/LegalSupport.jsx"
import { Laptop, UserCheck, ShieldCheck } from "lucide-react"
import { motion } from "framer-motion"
import Hero from "../../../components/HeroPages";

const prices = [
	{
		title: "Start",
		price: "Gratuit",
		subtitle:
			"Facturare integrată cu e-Factura, perfectă pentru PFA-uri nou-înființate.",
		details: [
			"Acces gratuit la aplicația de facturare",
			"Emitere rapidă de facturi și proforme",
			"Integrare automată cu e-Factura",
			"Încasare online prin Stripe",
			"Facturare în mai multe monede",
			"Evidență contabilă digitală completă",
			"Salarizare și administrare personal",
			"Contabil dedicat pentru consultanță fiscală",
			"Comunicare directă prin chat și telefon",
			"Disponibil doar la înființarea unui PFA.",
			"Pentru firmele plătitoare de TVA, tariful crește cu 20€/lună.",
			"Pentru fiecare angajat suplimentar, tariful crește cu 15€/lună.",
		],
	},
	{
		title: "Basic",
		price: "€30/lună + TVA",
		subtitle:
			"Servicii contabile esențiale pentru PFA-uri aflate la început de drum.",
		details: [
			"Acces complet la platforma de contabilitate",
			"Gestionare de până la 10 documente lunar",
			"Salarizare pentru 1 angajat inclus",
			"Facturare automată cu e-Factura",
			"Import rapid al facturilor de la furnizori",
			"Încasare facturi cu cardul prin Stripe",
			"Contabilitate clară și actualizată",
			"Contabil dedicat pentru suport personalizat",
			"Comunicare directă prin telefon și chat",
			"Pentru firmele plătitoare de TVA, tariful crește cu 20€/lună.",
			"Pentru fiecare angajat suplimentar, tariful crește cu 15€/lună.",
		],
	},
	{
		title: "Pro",
		price: "€60/lună + TVA",
		subtitle:
			"Ideal pentru PFA-uri cu activitate intensă și gestionare avansată a documentelor.",
		details: [
			"Acces premium la aplicația de contabilitate",
			"Gestionare de până la 100 documente lunar",
			"Salarizare pentru 3 angajați incluși",
			"Facturare rapidă, integrată cu e-Factura",
			"Preluare automată a facturilor furnizorilor",
			"Încasare digitală prin Stripe",
			"Evidență contabilă completă și detaliată",
			"Contabil dedicat pentru consultanță fiscală",
			"Suport direct prin telefon și mesagerie",
			"Pentru firmele plătitoare de TVA, tariful crește cu 20€/lună.",
			"Pentru fiecare angajat suplimentar, tariful crește cu 15€/lună.",
		],
	},
];

const heroFeatures = [
	{
		icon: <Laptop className="text-primaryColor mx-auto w-10 h-10 mb-4" />,
		title: "Contabilitate 100% online",
		description:
			"Gestionează contabilitatea firmei tale 100% online, fără drumuri la birou, indiferent dacă ești în România sau în străinătate.",
	},
	{
		icon: <UserCheck className="text-primaryColor mx-auto w-10 h-10 mb-4" />,
		title: "Contabil dedicat",
		description:
			"Ai un contabil personal care îți cunoaște firma și te asistă în orice moment, pentru o gestionare eficientă și fără stres.",
	},
	{
		icon: <ShieldCheck className="text-primaryColor mx-auto w-10 h-10 mb-4" />,
		title: "Garanția mulțumirii sau rambursare",
		description:
			"Ne asigurăm că ești mulțumit de serviciile noastre, iar dacă nu, primești banii înapoi fără complicații.",
	},
];

const contabilitateFaq = [
	{
		question: "Pot înființa o firmă prin Finanzconsult fără să mă deplasez?",
		answer: "Da, **Finanzconsult** îți permite să înființezi o firmă 100% online, indiferent de locația ta, fie că ești în România sau în străinătate.",
	},
	{
		question: "Ce obligații am după înființarea firmei cu Finanzconsult?",
		answer: `
      După înființare, în termen de 30 de zile, trebuie să:
      * Depui Declarația Unică pentru stabilirea impozitului pe venit și a contribuțiilor sociale
      * Achiziționezi Registrul de Evidență Fiscală (dacă ești în sistem real)
      * Ții o evidență clară a veniturilor și cheltuielilor
      * Declari și achiți taxele la termenele stabilite de ANAF

      Cu **Finanzconsult**, ai contabil dedicat care te ghidează și o platformă digitală pentru gestionarea tuturor acestor obligații.
    `,
	},
	{
		question: "Ce taxe va trebui să plătesc după înființarea PFA-ului?",
		answer: `
      Ca PFA, principalele obligații fiscale sunt:
      * Impozitul pe venit (10% din venitul net)
      * CAS (25% din venitul ales, minim 12 salarii minime pe economie)
      * CASS (10% din venitul ales, minim 6 salarii minime pe economie)
      * TVA (dacă depășești plafonul de 300.000 lei)
    `,
	},
	{
		question: "Cum mă ajută Bizfix cu actualizările legislative fiscale?",
		answer: "**Finanzconsult** îți oferă actualizări în timp real privind modificările legislative fiscale, asigurându-te că PFA-ul tău rămâne conform cu reglementările în vigoare.",
	},
	{
		question: "Cum pot comunica cu contabilul dedicat prin Finanzconsult?",
		answer: "Prin aplicația **Finanzconsult**, ai acces direct la contabilul tău dedicat, putând comunica rapid și eficient prin chat sau apel telefonic pentru orice nelămuriri sau servicii suplimentare.",
	},
	{
		question: "Care este diferența între norma de venit și sistemul real la PFA?",
		answer: `
      * **Norma de venit:** Impozitul se calculează la o sumă fixă stabilită de ANAF, indiferent de veniturile reale
      * **Sistemul real:** Impozitul se calculează pe baza veniturilor și cheltuielilor efective
      * Cu **Finanzconsult**, primești consultanță pentru a alege sistemul optim pentru activitatea ta
    `,
	},
	{
		question: "Pot să facturez gratuit după ce îmi înființez PFA-ul cu Finanzconsult?",
		answer: "Da, **Finanzconsult** îți pune la dispoziție un sistem de facturare gratuit, integrat cu e-Factura, permițându-ți să emiți și să încasezi facturi rapid și eficient.",
	},
	{
		question: "Ce documente trebuie să păstrez pentru contabilitatea PFA?",
		answer: `
      Pentru o evidență contabilă corectă, trebuie să păstrezi:
      * Toate facturile emise și primite
      * Chitanțe și bonuri fiscale pentru cheltuieli
      * Extrase de cont bancar
      * Registrul de Evidență Fiscală (în sistem real)
      * Declarațiile și documentele depuse la ANAF

      Cu aplicația **Finanzconsult**, toate acestea sunt organizate și stocate digital.
    `,
	},
];

export default function ContabilitatePfaPage() {
    const pricingTitle = "Planuri de contabilitate pentru orice etapă a businessului";

    return (
        <div className="min-h-screen overflow-x-hidden bg-white relative">
            <FinanzNavbar />

            {/* Hero Section */}
            <Hero
                backgroundImage="/images/contabilitatefundal.jpg"
                badge="Contabilitate 100% online"
                title="Contabilitate PFA"
                subtitle="Gestionăm contabilitatea, tu te concentrezi pe creșterea businessului"
                cards={heroFeatures}
            />

            {/* Content Sections */}
            <section className="w-full bg-gray-50">
                <AccountingFeatures />
            </section>

            <section className="w-full bg-white">
                <div className="w-full bg-white">
                    <Prices 
                        prices={prices} 
                        title={pricingTitle}
                        formattedTitle="Planuri de contabilitate"
                    />
                </div>
            </section>

            <section className="w-full bg-gray-50">
                <Features />
            </section>

            <section className="w-full bg-white">
                <FacturareDiv />
            </section>

            <section className="w-full bg-gray-50">
                <LegalSupport />
            </section>

            <section className="w-full bg-white">
                <FAQ items={contabilitateFaq} />
            </section>

            <Footer />
        </div>
    );
}
