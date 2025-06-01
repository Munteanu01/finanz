import { motion } from "framer-motion";
import { Users, User } from "lucide-react"; // importă și User

type PlanuriContabileProps = {
  title?: string;
  subtitle?: string;
  pfa?: boolean;
};

export default function PlanuriContabile({ title, subtitle, pfa }: PlanuriContabileProps) {
  if (pfa) {
    // Secțiune separată pentru PFA cu iconiță User și titlu/descriere identice cu SRL
    return (
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Flexibilitate și suport contabil la orice nivel
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Alege planul potrivit pentru afacerea ta și beneficiază de servicii
              contabile complete, facturare integrată și suport personalizat.
            </p>
          </motion.div>
          <div className="flex justify-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 max-w-sm w-full"
            >
              <div className="mb-4 flex justify-center">
                <div className="bg-primaryColor/10 rounded-sm w-16 h-16 flex items-center justify-center">
                  <User className="w-10 h-10 text-primaryColor" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 text-center">
                  Înființare PFA
                </h3>
             
                <ul className="text-gray-700 text-center space-y-2 mt-6 max-w-md mx-auto">
                  <li>Plată unică - 210 lei</li>
                 
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    );
  }

  // Secțiune doar pentru SRL
  const planuri = [
    {
      title: "SRL cu 1 asociat",
      description:
        "Ideal pentru antreprenorii care pornesc singuri la drum. Înființare rapidă și fără complicații, la doar 450 lei.",
      icon: <Users className="w-10 h-10 text-primaryColor" />,
    },
    {
      title: "SRL cu 2 asociați",
      description:
        "Un partener alături? Înființează-ți firma în doar câțiva pași simpli, fără drumuri inutile, pentru 550 lei.",
      icon: <Users className="w-10 h-10 text-primaryColor" />,
    },
    {
      title: "SRL cu 3 asociați",
      description:
        "Începe alături de doi parteneri, fără bătăi de cap. Proces 100% online, totul pregătit pentru 650 lei.",
      icon: <Users className="w-10 h-10 text-primaryColor" />,
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Flexibilitate și suport contabil la orice nivel
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Alege planul potrivit pentru afacerea ta și beneficiază de servicii
            contabile complete, facturare integrată și suport personalizat.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {planuri.map((plan, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200"
            >
              <div className="mb-4">
                <div className="bg-primaryColor/10 rounded-sm w-16 h-16 flex items-center justify-center">
                  {plan.icon}
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {plan.title}
                </h3>
                <p className="text-gray-600">{plan.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}