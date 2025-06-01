"use client";

import React from "react";
import InfiintariLayout from "../../../components/InfiintariLayout";
import { Laptop, FileText, ShieldCheck } from "lucide-react";

const infiintariPfaFaq = [
  {
    question: "Cât durează înființarea unui PFA?",
    answer: "În mod normal, procedura durează între 1-3 zile lucrătoare de la depunerea dosarului complet.",
  },
  {
    question: "Ce documente sunt necesare pentru înființarea unui PFA?",
    answer: `Pentru înființarea unui PFA sunt necesare:
      <ul>
        <li>Copie CI/Pașaport</li>
        <li>Certificat de naștere</li>
        <li>Certificat de căsătorie (dacă este cazul)</li>
        <li>Declarație pe propria răspundere</li>
        <li>Dovada sediului (contract închiriere/proprietate)</li>
      </ul>`,
  },
  {
    question: "Care sunt costurile totale pentru înființarea unui PFA?",
    answer: "Costul total pentru înființarea unui PFA este de 210 lei, plată unică, fără costuri ascunse.",
  },
];

const prices = [
  {
    title: "Înființare PFA",
    price: "210 lei",
    subtitle: "Plată unică",
    details: [
      "Consultanță și alegerea codurilor CAEN",
      "Întocmirea tuturor documentelor necesare",
      "Depunerea dosarului la ANAF",
      "Ridicarea autorizației PFA",
      "Fără costuri ascunse",
      "Proces rapid: 1-3 zile lucrătoare",
    ],
  },
];

export default function InfiintarePfaPage() {
  return (
    <InfiintariLayout
      heroProps={{
        backgroundImage: "/infintare.jpg",
        badge: "Înființare PFA 100% online",
        title: "Înființare PFA",
        subtitle: "Înființează-ți PFA-ul simplu, rapid și fără bătăi de cap, de oriunde te afli.",
        cards: [
          {
            icon: <Laptop className="text-primaryColor mx-auto w-10 h-10 mb-4" />,
            title: "Înființare rapidă 100% online",
            description:
              "Deschide-ți PFA-ul fără drumuri la instituții! Tot procesul se desfășoară online, indiferent unde te afli – în România sau în străinătate.",
          },
          {
            icon: <FileText className="text-primaryColor mx-auto w-10 h-10 mb-4" />,
            title: "Documente procesate în 30 min",
            description:
              "Ne ocupăm rapid de actele necesare, astfel încât PFA-ul să fie înregistrat fără întârzieri. Tot ce trebuie să faci este să ne trimiți documentele!",
          },
          {
            icon: <ShieldCheck className="text-primaryColor mx-auto w-10 h-10 mb-4" />,
            title: "Garanția mulțumirii sau rambursare",
            description:
              "Ai siguranța unui serviciu eficient! Dacă nu ești mulțumit de proces, îți returnăm banii fără întrebări.",
          },
        ],
      }}
      faqItems={infiintariPfaFaq}
      prices={prices}
      pfa={true}
    />
  );
}