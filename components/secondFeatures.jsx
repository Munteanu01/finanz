import React from 'react';
import { motion } from 'framer-motion';

const firstSectionTitle = 'Gestiune financiară completă, direct din telefonul tău';
const secondSectionTitle = 'Siguranță fiscală prin contabilitate profesională';

const firstSectionItems = [
  {
    title: 'Asistență de la experți contabili',
    description:
      'Facturile emise sunt gestionate direct de contabilul tău și integrate automat în e-Factura.',
    image: '/1.jpg',
  },
  {
    title: 'Vezi taxele scadente la timp',
    description:
      'Primești actualizări despre taxele datorate și ai mereu situația fiscală la zi.',
    image: '/2.jpg',
  },
  {
    title: 'Situația financiară în timp real',
    description:
      'Ai acces rapid la venituri, cheltuieli și balanța firmei, direct în aplicație.',
    image: '/3.jpg',
  },
];

const secondSectionItems = [
  {
    title: 'Contabili acreditați, expertiză garantată',
    description:
      'Specialiști CECCAR care asigură corectitudinea și conformitatea evidențelor contabile.',
    image: '/4.jpg',
  },
  {
    title: 'Legislatie fiscală mereu la zi',
    description:
      'Beneficiezi de actualizări fiscale automate și consultanță pentru a evita riscurile legislative.',
    image: '/5.jpg',
  },
  {
    title: 'Comunicare rapidă cu contabilul tău',
    description:
      'Menții legătura directă cu contabilul alocat prin telefon, oricând ai nevoie.',
    image: '/6.jpg',
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
};

export default function Features() {
  return (
    <div 
      className="w-full bg-white" 
      style={{
        backgroundImage: 'url(/svg3.svg)',
        backgroundSize: 'cover',
        backgroundPosition: 'right top',
        backgroundRepeat: 'no-repeat',
        
      }}
    >
      <div className="w-full py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20"> {/* Added spacing between sections */}
            {/* Prima secțiune */}
            <Section title={firstSectionTitle} items={firstSectionItems} />

            {/* A doua secțiune */}
            <Section title={secondSectionTitle} items={secondSectionItems} />
          </div>
        </div>
      </div>
    </div>
  );
}

function Section({ title, items }) {
  return (
    <div className="relative">
      <motion.h2
        className="text-4xl font-extrabold mb-16 max-w-3xl mx-auto text-center text-gray-700"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      >
        {title}
      </motion.h2>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10 justify-items-center">
        {items.map(({ title, description, image }, idx) => (
          <motion.article
            key={idx}
            className="bg-white rounded-3xl shadow-lg p-4 lg:p-8 flex flex-col items-center text-center
              hover:scale-[1.03] transition-transform duration-300 ease-in-out
              backdrop-blur-sm border border-gray-100 w-full 
              max-w-[280px] lg:max-w-none"
            variants={fadeInUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.img
              src={image}
              alt={title}
              className="w-full aspect-[4/3] object-cover rounded-xl mb-4 lg:mb-8 shadow-md"
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              loading="lazy"
            />
            <motion.h3
              className="text-lg lg:text-2xl font-semibold text-primaryColor mb-2 lg:mb-4"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              {title}
            </motion.h3>
            {description && (
              <motion.p
                className="text-[var(--secundaryColor)] text-xs lg:text-base leading-relaxed"
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.4 }}
              >
                {description}
              </motion.p>
            )}
          </motion.article>
        ))}
      </div>
    </div>
  );
}
