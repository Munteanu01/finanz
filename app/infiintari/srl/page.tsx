"use client";

import React from "react";
import InfiintariLayout from "../../../components/InfiintariLayout";
import { Laptop, FileText, ShieldCheck } from "lucide-react";

const infiintariFaq = [
  {
    question: "Cât durează înființarea unui SRL?",
    answer: "În mod normal, procedura durează între 3-5 zile lucrătoare de la depunerea dosarului complet.",
  },
  {
    question: "Ce documente sunt necesare pentru înființarea unui SRL?",
    answer: `Pentru înființarea unui SRL sunt necesare:
      <ul>
        <li>Copie CI/Pașaport pentru asociați</li>
        <li>Contract sediu social</li>
        <li>Specimen de semnătură</li>
        <li>Declarații pe propria răspundere</li>
      </ul>`,
  },
  {
    question: "Care sunt costurile totale pentru înființarea unui SRL?",
    answer: "Costul total pentru înființarea unui SRL este de 270€, care include toate taxele și procedurile necesare.",
  },
];

const prices = [
  {
    title: "Ideal pentru start",
    price: "€270",
    subtitle: "€45/lună x 6 luni",
    details: [
      "Până la 10 documente lunar",
      "Facturare integrată cu e-Factura",
      "Preluare automată facturi furnizori din e-Factura",
      "Încasare facturi cu cardul prin Stripe",
      "Evidență contabilă completă",
      "Contabil dedicat firmei",
      "Comunicare directă cu contabilul prin telefon sau mesagerie",
      "Pentru firmele plătitoare de TVA tariful crește cu 20€/lună",
    ],
  },
  {
    title: "Business",
    price: "€330",
    subtitle: "€55/lună x 6 luni",
    details: [
      "Până la 20 documente lunar",
      "Facturare integrată cu e-Factura",
      "Preluare automată facturi furnizori din e-Factura",
      "Încasare facturi cu cardul prin Stripe",
      "Evidență contabilă completă",
      "Salarizare și administrare personal",
      "Contabil dedicat firmei",
      "Comunicare directă cu contabilul prin telefon sau mesagerie",
      "Pentru firmele plătitoare de TVA tariful crește cu 20€/lună",
    ],
  },
  {
    title: "Professional",
    price: "€570",
    subtitle: "€95/lună x 6 luni",
    details: [
      "Până la 50 documente lunar",
      "Facturare integrată cu e-Factura",
      "Preluare automată facturi furnizori din e-Factura",
      "Încasare facturi cu cardul prin Stripe",
      "Evidență contabilă completă",
      "Salarizare și administrare personal",
      "Contabil dedicat firmei",
      "Comunicare directă cu contabilul prin telefon sau mesagerie",
      "Pentru firmele plătitoare de TVA tariful crește cu 20€/lună",
    ],
  },
];

export default function InfiintareSrlPage() {
  return (
    <InfiintariLayout
      heroProps={{
        backgroundImage: "/images/srl-background.jpg",
        badge: "Înființare SRL 100% online",
        title: "Înființare SRL",
        subtitle: "Înființează-ți SRL-ul simplu, rapid și fără bătăi de cap, de oriunde te afli.",
        cards: [
          {
            icon: <Laptop className="w-12 h-12 mb-4 text-primaryColor" />,
            title: "Înființare rapidă 100% online",
            description:
              "Deschide-ți firma fără drumuri la instituții! Tot procesul se desfășoară online, indiferent unde te afli – în România sau în străinătate.",
          },
          {
            icon: <FileText className="w-12 h-12 mb-4 text-primaryColor" />,
            title: "Documente procesate în 30 min",
            description:
              "Ne ocupăm rapid de actele necesare, astfel încât firma ta să fie înregistrată fără întârzieri. Tot ce trebuie să faci este să ne trimiți documentele!",
          },
          {
            icon: <ShieldCheck className="w-12 h-12 mb-4 text-primaryColor" />,
            title: "Garanția mulțumirii sau rambursare",
            description:
              "Ai siguranța unui serviciu eficient! Dacă nu ești mulțumit de proces, îți returnăm banii fără întrebări.",
          },
        ],
      }}
      faqItems={infiintariFaq}
      prices={prices}
    />
  );
}
