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
import { ReceiptText, FileText, BarChart2, UserCheck } from "lucide-react"
import Hero from "../../../components/HeroPages"

const contabilitateFaq = [
	{
		question: "Cum pot începe colaborarea?",
		answer: "Ne poți contacta prin formularul de pe site sau direct prin telefon.",
	},
	{
		question: "Ce documente sunt necesare?",
		answer:
			"Vom avea nevoie de actele firmei și alte detalii specifice activității tale.",
	},
	{
		question: "Cum funcționează facturarea?",
		answer: "Facturile sunt emise automat și integrate cu e-Factura.",
	},
]

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
]

const heroFeatures = [
	{
		icon: <ReceiptText className="text-primaryColor mx-auto w-10 h-10 mb-4" />,
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
		icon: <BarChart2 className="text-primaryColor mx-auto w-10 h-10 mb-4" />,
		title: "Garanția mulțumirii sau rambursare",
		description:
			"Ne asigurăm că ești mulțumit de serviciile noastre, iar dacă nu, primești banii înapoi fără complicații.",
	},
]

const accountingFeaturesTitle = (
	<>
		Ne ocupăm de{" "}
		<span className="text-primaryColor bg-clip-text animate-text">contabilitate</span>, tu te concentrezi pe{" "}
		<span className="text-primaryColor bg-clip-text animate-text">afacerea ta</span>
	</>
)

const accountingFeatures = [
	{
		icon: <ReceiptText className="w-10 h-10 text-primaryColor mb-4" />,
		title: "Emite facturi cu un click",
		description:
			"Toate facturile ajung direct la contabilul tău și sunt integrate automat în e-Factura.",
	},
	{
		icon: <FileText className="w-10 h-10 text-primaryColor mb-4" />,
		title: "Adaugă rapid cheltuieli",
		description:
			"This is just a simple text made for the demos to show the available features.",
	},
	{
		icon: <BarChart2 className="w-10 h-10 text-primaryColor mb-4" />,
		title: "Deții evidența taxelor la zi",
		description:
			"Vizualizezi în timp real ce taxe ai de plătit și ai acces la registrele contabile.",
	},
	{
		icon: <UserCheck className="w-10 h-10 text-primaryColor mb-4" />,
		title: "Contabil dedicat disponibil",
		description:
			"Comunici direct cu contabilul tău dedicat pentru orice întrebare sau serviciu nou.",
	},
]

export default function ContabilitatePfaPage() {
	const pricingTitle = "Planuri de contabilitate pentru orice etapă a businessului"

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
				<AccountingFeatures
					title={accountingFeaturesTitle}
					features={accountingFeatures}
				/>
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
	)
}
