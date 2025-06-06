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
                <ul className="list-disc pl-5 space-y-1">
        <li><b>+100</b></li>
        <li>Nota de plată aferentă dosarului se achită de client.</li>
        <li>Contactează-ne pentru detalii specifice situației tale.</li>
    </ul>
            </>
        ),
    },
    {
        price: "600 lei",
        title: "Adăugare/Ștergere Cod CAEN",
        description:
            "Extinde sau restrânge domeniul de activitate al firmei tale prin adăugarea sau eliminarea codurilor CAEN relevante.",
    },
    {
        price: "600 lei",
        title: "Schimbare obiect principal activitate",
        description:
            "Modifică activitatea principală a firmei tale prin actualizarea codului CAEN principal pentru a reflecta noua direcție a afacerii.",
        priceNote: "...",
        priceNoteDescription: (
            <ul className="list-disc pl-5 space-y-1">
                <li><b>+ 100 lei autorizare cod CAEN terți</b></li>
                <li>Contactează-ne pentru detalii specifice situației tale.</li>
            </ul>
        )
    },
    {
        price: "600 lei",
        title: "Schimbare sediu social",
        description:
            "Mută sediul social al firmei tale într-o nouă locație și actualizează documentele oficiale pentru a reflecta această schimbare.",
    },
    {
        price: "450 lei",
        title: "Prelungire sediu social",
        description:
            "Extinde perioada de valabilitate a sediului social actual prin prelungirea duratei contractului de închiriere sau a dreptului de folosință.",
    },
    {
        price: "450 lei",
        title: "Deschidere punct de lucru",
        description:
            "Extinde-ți afacerea prin deschiderea unui nou punct de lucru și înregistrează-l oficial la autoritățile competente.",
    },
    {
        price: "450 lei",
        title: "Prelungire punct de lucru",
        description:
            "Menține activitatea punctului de lucru existent prin prelungirea duratei de funcționare înregistrată oficial.",
    },
    {
        price: "350 lei",
        title: "Închidere punct de lucru",
        description:
            "Închide un punct de lucru care nu mai este activ și actualizează documentele firmei pentru a reflecta această modificare.",
    },
    {
        price: "600 lei",
        title: "Modificare nume firmă",
        description:
            "Redefinește identitatea afacerii tale prin schimbarea denumirii oficiale a firmei și înregistrarea noii denumiri.",
    },
    {
        price: "600 lei",
        title: "Majorare capital social",
        description:
            "Consolidează baza financiară a firmei tale prin majorarea capitalului social și actualizarea actelor constitutive.",
    },
    {
        price: "600 lei",
        title: "Cesiune părți sociale",
        description:
            "Transferă părțile sociale către noi asociați sau parteneri și actualizează structura de proprietate a firmei tale.",
    },
    {
        price: "350 lei",
        title: "Reactivare activitate SRL",
        description:
            "Reîncepe activitatea SRL-ului tău simplu și rapid, cu actele actualizate și conforme legal.",
    },
    {
        price: "350 lei",
        title: "Închidere activitate SRL",
        description:
            "Încheie activitatea SRL-ului tău definitiv, cu toate formalitățile gestionate rapid și corect, fără complicații birocratice.",
    },
    {
        price: "450 lei",
        title: "Suspendare activitate",
        description:
            "Află cum îți poți pune pe pauză activitatea pentru maximum 3 ani.",
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
        question: "Cât durează modificarea unui SRL?",
        answer:
            "Procesul durează, în general, între 3 și 7 zile lucrătoare, în funcție de tipul modificării și de complexitatea documentelor necesare.",
    },
    {
        question: "Pot face modificarea dacă nu sunt în țară?",
        answer: "Da, toate modificările se pot face 100% online, indiferent unde te afli. Documentele se semnează digital.",
    },
    {
        question: "Ce documente sunt necesare pentru modificare?",
        answer:
            "Documentele necesare diferă în funcție de tipul modificării. După completarea cererii, vei primi lista exactă de documente pe email.",
    },
    {
        question: "Este necesară ținerea unei adunări generale?",
        answer:
            "Pentru majoritatea modificărilor este necesară o hotărâre a adunării generale a asociaților. Ne ocupăm noi de redactarea acesteia.",
    },
]

export default function ModificariSrlPage() {
    return (
        <div className="min-h-screen overflow-x-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50">
            <FinanzNavbar />

            <HeroPages
                backgroundImage="/modificare.jpg"
                badge="Modifică firma 100% online"
                title="Modificare SRL"
                subtitle="Modifică-ți SRL-ul rapid și eficient, fără deplasări inutile"
                cards={[
                    {
                        title: "Modificare 100% online",
                        description:
                            "Modifică SRL-ul fără drumuri la instituții! Tot procesul se desfășoară online, indiferent unde te afli – în România sau în străinătate.",
                        icon: <Globe className="text-primaryColor mx-auto w-10 h-10 mb-4" />,
                    },
                    {
                        title: "Documente procesate în 1 oră",
                        description:
                            "Ne ocupăm rapid de actele necesare, inclusiv hotărâri AGA, astfel încât firma ta să fie modificată fără întârzieri.",
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
            <section id="servicii-modificari-srl">
                <ModificationServices
                    title="Servicii modificare SRL"
                    subtitle="Alege modificarea de care ai nevoie. Proces simplu, rapid și 100% online."
                    services={modificationServicesData.map((service) => {
                        let id = ""
                        switch (service.title) {
                        
                            case "Actualizare coduri CAEN Rev 3": // <-- adăugat aici
                                id = "actualizare-caen"
                                break
                            case "Adăugare/Ștergere Cod CAEN":
                                id = "adaugare-stergere-caen"
                                break
                            case "Schimbare obiect principal activitate":
                                id = "schimbare-caen-principal"
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
                            case "Modificare nume firmă":
                                id = "modificare-nume"
                                break
                            case "Majorare capital social":
                                id = "majorare-capital"
                                break
                            case "Cesiune părți sociale":
                                id = "cesiune-parti"
                                break
                                case "Reactivare activitate SRL":
                                    id = "reluare-activitate"
                                    break
                                case "Închidere activitate SRL":
                                    id = "inchidere-activitate"
                                    break
                                    case "Suspendare activitate":
                                        id = "suspendare-activitate"
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