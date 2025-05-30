import Image from 'next/image';

const features = [
  {
    title: 'Gestiune financiară completă, direct din telefonul tău',
    description: '',
    image: 'IMAGE_LINK_1',
  },
  {
    title: 'Asistență de la experți contabili',
    description: 'Facturile emise sunt gestionate direct de contabilul tău și integrate automat în e-Factura.',
    image: 'IMAGE_LINK_2',
  },
  {
    title: 'Vezi taxele scadente la timp',
    description: 'Primești actualizări despre taxele datorate și ai mereu situația fiscală la zi.',
    image: 'IMAGE_LINK_3',
  },
  {
    title: 'Situația financiară în timp real',
    description: 'Ai acces rapid la venituri, cheltuieli și balanța firmei, direct în aplicație.',
    image: 'IMAGE_LINK_4',
  },
  {
    title: 'Siguranță fiscală prin contabilitate profesională',
    description: '',
    image: 'IMAGE_LINK_5',
  },
  {
    title: 'Contabili acreditați, expertiză garantată',
    description: 'Specialiști CECCAR care asigură corectitudinea și conformitatea evidențelor contabile.',
    image: 'IMAGE_LINK_6',
  },
  {
    title: 'Legislatie fiscală mereu la zi',
    description: 'Beneficiezi de actualizări fiscale automate și consultanță pentru a evita riscurile legislative.',
    image: 'IMAGE_LINK_7',
  },
  {
    title: 'Comunicare rapidă cu contabilul tău',
    description: 'Menții legătura directă cu contabilul alocat prin telefon, oricând ai nevoie.',
    image: 'IMAGE_LINK_8',
  },
];

export default function Features() {
  return (
    <section className="px-4 py-12 sm:px-6 lg:px-16 bg-white">
      <div className="max-w-7xl mx-auto space-y-16">
        {features.map((feature, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row items-center gap-8 ${
              index % 2 !== 0 ? 'md:flex-row-reverse' : ''
            }`}
          >
            <div className="w-full md:w-1/2">
              <Image
                src={feature.image}
                alt={feature.title}
                width={600}
                height={400}
                className="rounded-xl shadow-lg object-cover w-full h-auto"
              />
            </div>
            <div className="w-full md:w-1/2 text-center md:text-left">
              <h3 className="text-2xl font-bold text-[var(--primaryColor)] mb-4">
                {feature.title}
              </h3>
              {feature.description && (
                <p className="text-lg text-[var(--secundaryColor)]">
                  {feature.description}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
