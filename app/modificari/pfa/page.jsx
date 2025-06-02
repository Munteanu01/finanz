"use client"
import FinanzNavbar from "../../../navbar"
import Footer from "../../../components/footer"
import HeroPages from "../../../components/HeroPages"
import ModificationServices from "../../../components/ModificationServices"
import { Globe, FileText, Smile } from "lucide-react"

const modificationServicesData = [
	{
		price: "650 lei",
		title: "Actualizare coduri CAEN",
		description:
			"Adu-ți codurile CAEN la zi conform noilor standarde Revizia 3 pentru a asigura conformitatea activităților firmei tale.",
	},
	{
		price: "350 lei",
		title: "Adăugare Cod CAEN",
		description:
			"Extinde sau restrânge domeniul de activitate al firmei tale prin adăugarea sau eliminarea codurilor CAEN relevante.",
	},
	{
		price: "350 lei",
		title: "Schimbare sediu social",
		description:
			"Mută sediul social al firmei tale într-o nouă locație și actualizează documentele oficiale pentru a reflecta această schimbare.",
	},
	{
		price: "350 lei",
		title: "Prelungire sediu social",
		description:
			"Extinde perioada de valabilitate a sediului social actual prin prelungirea duratei contractului de închiriere sau a dreptului de folosință.",
	},
	{
		price: "350 lei",
		title: "Deschidere punct de lucru",
		description:
			"Extinde-ți afacerea prin deschiderea unui nou punct de lucru și înregistrează-l oficial la autoritățile competente.",
	},
	{
		price: "350 lei",
		title: "Prelungire punct de lucru",
		description:
			"Menține activitatea punctului de lucru existent prin prelungirea duratei de funcționare înregistrată oficial.",
	},
	{
		price: "350 lei",
		title: "Închidere punct de lucru",
		description:
			"Închide un punct de lucru inactiv și actualizează documentele firmei rapid și corect.",
	},
	{
		price: "350 lei",
		title: "Suspendare activitate PFA",
		description:
			"Întrerupe temporar activitatea PFA-ului tău și evită obligațiile fiscale pe durata suspendării, fără să închizi definitiv firma.",
	},
	{
		price: "350 lei",
		title: "Reluare activitate PFA",
		description:
			"Reîncepe activitatea PFA-ului tău simplu și rapid, cu actele actualizate și conforme legal.",
	},
	{
		price: "350 lei",
		title: "Închidere activitate PFA",
		description:
			"Încheie activitatea PFA-ului tău definitiv, cu toate formalitățile gestionate rapid și corect, fără complicații birocratice.",
	},
]

export default function ModificariPfaPage() {
	return (
		<div className="min-h-screen overflow-x-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50">
			<FinanzNavbar />

			<HeroPages
				backgroundImage="/modify.jpg"
				badge="Modifică firma 100% online"
				title="Modificare PFA"
				subtitle="Modifică-ți PFA-ul rapid și eficient, fără deplasări inutile"
				cards={[
					{
						title: "Modificare 100% online",
						description:
							"Modifică PFA-ul fără drumuri la instituții! Tot procesul se desfășoară online, indiferent unde te afli – în România sau în străinătate.",
						icon: <Globe className="w-8 h-8 text-blue-600" />,
					},
					{
						title: "Documente procesate în 30 min",
						description:
							"Ne ocupăm rapid de actele necesare, astfel încât firma ta să fie înregistrată. Tot ce trebuie să faci este să ne trimiți documentele!",
						icon: <FileText className="w-8 h-8 text-blue-600" />,
					},
					{
						title: "Garanția mulțumirii sau rambursare",
						description:
							"Ai siguranța unui serviciu eficient! Dacă nu ești mulțumit de proces, îți returnăm banii fără întrebări.",
						icon: <Smile className="w-8 h-8 text-blue-600" />,
					},
				]}
			/>

			<ModificationServices
				title="Servicii modificare PFA"
				subtitle="Alege modificarea de care ai nevoie. Proces simplu, rapid și 100% online."
				services={modificationServicesData}
			/>

			<Footer />
		</div>
	)
}