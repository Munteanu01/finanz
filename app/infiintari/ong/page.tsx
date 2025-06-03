"use client"
import React from "react"
import FinanzNavbar from "../../../navbar"
import Footer from "../../../components/footer"
// Update the import path if the file is actually in a different location, for example:
import InfiintariLayout from "../../../components/InfiintariLayout"
import { Users, Heart, FileText, ShieldCheck } from "lucide-react"

const infiintariOngFaq = [
  {
    question: "Cât durează înființarea unei ONG?",
    answer:
      "Procedura de înființare ONG durează între 30-45 zile, în funcție de complexitatea dosarului și programul Judecatoriei.",
  },
  {
    question: "Ce diferență este între asociație și fundație?",
    answer:
      "Asociația se înființează cu minimum 3 persoane fizice și nu necesită patrimoniu de constituire, în timp ce fundația poate fi înființată de o singură persoană dar necesită un patrimoniu de constituire.",
  },
  {
    question: "Care sunt documentele necesare pentru fondatori persoane fizice?",
    answer:
      "Pentru fondatori persoane fizice sunt necesare: copii CI/Pașaport, declarații pe propria răspundere, CV-uri ale fondatorilor și cazier judiciar.",
  },
  {
    question: "Unde se înregistrează ONG-ul?",
    answer:
      "ONG-ul se înregistrează la Judecatoria competentă teritorial, iar apoi se completează procedurile de înregistrare fiscală pentru obținerea CIF-ului.",
  },
  {
    question: "Ce activități poate desfășura o ONG?",
    answer:
      "ONG-urile pot desfășura activități de interes general, activități caritabile, de utilitate publică, educaționale, culturale, sociale sau de mediu, în funcție de obiectul de activitate înscris în statut.",
  },
]

const prices = [
  {
    title: "Asociație",
    price: "1299 lei",
    subtitle: "Înființare completă",
    details: [
      "Minimum 3 fondatori persoane fizice",
      "Redactarea actului constitutiv și statutului",
      "Înregistrarea la Tribunal",
      "Obținerea CIF-ului",
      "Deschiderea contului bancar",
      "Consultanță juridică inclusă",
      "Asistență post-înființare 30 zile",
      "Toate taxele incluse",
    ],
  },
  {
    title: "Fundație",
    price: "1499 lei",
    subtitle: "Înființare completă",
    details: [
      "Minimum 1 fondator",
      "Patrimoniu de constituire inclus",
      "Redactarea actului constitutiv și statutului",
      "Înregistrarea la Judecatorie",
      "Obținerea CIF-ului",
      "Deschiderea contului bancar",
      "Consultanță juridică inclusă",
      "Asistență post-înființare 30 zile",
      "Toate taxele incluse",
    ],
  },
]

export default function InfiintareOngPage() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <FinanzNavbar />
      <InfiintariLayout
        heroProps={{
          backgroundImage: "/infintare.jpg",
          badge: "Înființează asociație 100% online",
          title: "Înființare ONG",
          subtitle:
            "Înființează-ți ONG-ul simplu, rapid și fără bătăi de cap, de oriunde te afli.",
          cards: [
            {
              icon: (
                <Users className="text-primaryColor mx-auto w-10 h-10 mb-4" />
              ),
              title: "Consultanță juridică personalizată",
              description:
                "Beneficiezi de ghidare pas cu pas din partea experților noștri pentru a înființa ONG-ul corect și conform legislației.",
            },
            {
              icon: (
                <Heart className="text-primaryColor mx-auto w-10 h-10 mb-4" />
              ),
              title: "Redactare rapidă a documentelor",
              description:
                "Actele necesare sunt redactate de echipa noastră într-un timp optim, astfel încât să ai totul pregătit fără efort.",
            },
            {
              icon: (
                <ShieldCheck className="text-primaryColor mx-auto w-10 h-10 mb-4" />
              ),
              title: "Înființare 100% online, fără deplasări",
              description:
                "Poți înregistra ONG-ul de oriunde din țară, fără drumuri la instituții – noi ne ocupăm de tot procesul online.",
            },
          ],
        }}
        faqItems={infiintariOngFaq}
        prices={prices}
        pfa={false}
        showPrices={false}
        showPasiInfiintare={false}
        showProcesSimplificat={false}
        showOperationalSteps={false}
        showFeatures={false}
        showLegalSupport={false}
        showFacturareDiv={false}
      />
      <Footer />
    </div>
  )
}
