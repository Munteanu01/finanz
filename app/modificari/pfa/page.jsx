"use client"
import FinanzNavbar from "../../../navbar"
import Footer from "../../../components/footer"
import HeroPages from "../../../components/HeroPages"
import ModificationServices from "../../../components/ModificationServices"
import FirstFeatures from "../../../components/firstFeatures"
import FAQ from "../../../components/faq"
import FacturareDiv from "../../../components/facturareDiv"
import LegalSupport from "../../../components/LegalSupport"
import { Globe, FileText, Smile, Edit, FileCheck2, Send } from "lucide-react"

const modificationServicesData = [
	{
		price: "550 lei",
		title: "Actualizare coduri CAEN Rev 3",
		description:
			"Adu-ți codurile CAEN la zi conform noilor standarde Rev-3 pentru a asigura conformitatea activităților firmei tale.",
		priceNote: "...",
		priceNoteDescription: (
			<>
				<ul style={{ paddingLeft: 20, marginBottom: 0 }}>
					<li>+100</li>
					<li>Nota de plată aferentă dosarului se achită de client.</li>
				</ul>
			</>
		),
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
		price: "450 lei",
		title: "Suspendare activitate PFA",
		description:
			"Află cum îți poți pune pe pauză activitatea pentru maximum 3 ani.",
	},
	{
		price: "350 lei",
		title: "Reactivare activitate PFA",
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

const firstFeaturesData = [
	{
		icon: <Edit className="w-10 h-10 text-primaryColor mb-4" />,
		title: "Completezi cererea online",
		description:
			"Completează formularul cu detaliile modificării și un consultant te va contacta rapid pentru confirmare.",
	},
	{
		icon: <FileCheck2 className="w-10 h-10 text-primaryColor mb-4" />,
		title: "Verificăm și pregătim actele",
		description:
			"Ne ocupăm de redactarea documentelor și îți trimitem totul gata de semnat, fără efort din partea ta.",
	},
	{
		icon: <Send className="w-10 h-10 text-primaryColor mb-4" />,
		title: "Depunere și aprobare rapidă",
		description:
			"Depunem actele la Registrul Comerțului, iar în câteva zile modificarea firmei tale este finalizată.",
	},
]

const faqItems = [
	{
		question: "Cât durează modificarea unui PFA?",
		answer:
			"Procesul durează, în general, între 2 și 5 zile lucrătoare, în funcție de tipul modificării și de rapiditatea cu care sunt furnizate documentele necesare.",
	},
	{
		question: "Pot face modificarea dacă nu sunt în țară?",
		answer: "Da, toate modificările se pot face 100% online, indiferent unde te afli.",
	},
	{
		question: "Ce documente sunt necesare pentru modificare?",
		answer:
			"Documentele necesare diferă în funcție de tipul modificării. După completarea cererii, vei primi lista exactă de documente pe email.",
	},
]

export default function ModificariPfaPage() {
	return (
		<div className="min-h-screen overflow-x-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50">
			<FinanzNavbar />

			<HeroPages
				backgroundImage="/modificare.jpg"
				badge="Modifică firma 100% online"
				title="Modificare PFA"
				subtitle="Modifică-ți PFA-ul rapid și eficient, fără deplasări inutile"
				cards={[
					{
						title: "Modificare 100% online",
						description:
							"Modifică PFA-ul fără drumuri la instituții! Tot procesul se desfășoară online, indiferent unde te afli – în România sau în străinătate.",
						icon: <Globe className="text-primaryColor mx-auto w-10 h-10 mb-4" />,
					},
					{
						title: "Documente procesate în 30 min",
						description:
							"Ne ocupăm rapid de actele necesare, astfel încât firma ta să fie modificată fără întârzieri. Tot ce trebuie să faci este să ne trimiți documentele!",
						icon: <FileText className="text-primaryColor mx-auto w-10 h-10 mb-4" />,
					},
					{
						title: "Garanția mulțumirii sau rambursare",
						description:
							"Ai siguranța unui serviciu eficient! Dacă nu ești mulțumit de proces, îți returnăm banii fără întrebări.",
						icon: <Smile className="text-primaryColor mx-auto w-10 h-10 mb-4" />,
					},
				]}
			/>

			<FirstFeatures
				title="Trei pași simpli pentru un proces fără complicații"
				features={firstFeaturesData}
			/>

			{/* Add IDs to each service for anchor navigation */}
			<section id="servicii-modificari-pfa">
				<ModificationServices
					title="Servicii modificare PFA"
					subtitle="Alege modificarea de care ai nevoie. Proces simplu, rapid și 100% online."
					services={modificationServicesData.map((service) => {
						let id = ""
						switch (service.title) {
							case "Actualizare coduri CAEN Rev 3": // <-- adaugă această linie
								id = "actualizare-Rev-3"
								break
							case "Adăugare Cod CAEN":
								id = "cod-caen"
								break
							case "Schimbare sediu social":
								id = "sediu-social"
								break
							case "Prelungire sediu social":
								id = "prelungire-sediu"
								break
							case "Deschidere punct de lucru":
								id = "deschidere-punct"
								break
							case "Prelungire punct de lucru":
								id = "prelungire-punct"
								break
							case "Închidere punct de lucru":
								id = "inchidere-punct"
								break
							case "Suspendare activitate PFA":
								id = "suspendare"
								break
							case "Reactivare activitate PFA":
								id = "reluare"
								break
							case "Închidere activitate PFA":
								id = "inchidere"
								break
							default:
								id = ""
						}
						return { ...service, id }
					})}
				/>
			</section>

			<FacturareDiv />

			<LegalSupport />

			<FAQ items={faqItems} />

			<Footer />
		</div>
	)
}