import { motion } from "framer-motion";
import { 
  Rocket, 
  Clock, 
  FileCheck, 
  Building2, 
  Scale 
} from "lucide-react";

const beneficii = [
  {
    icon: <Rocket className="w-8 h-8" />,
    title: "Proces simplu și rapid",
    description: "Fără timp pierdut și fără drumuri la instituții. Ne ocupăm de tot pentru tine.",
  },
  {
    icon: <Clock className="w-8 h-8" />,
    title: "Modificări în doar 3 zile",
    description: "Timpul tău este prețios. Orice schimbare necesară firmei tale este gata în maximum 3 zile.",
  },
  {
    icon: <FileCheck className="w-8 h-8" />,
    title: "Fără formalități, fără stres",
    description: "Noi ne ocupăm de întregul proces – de la redactarea actelor până la înregistrare. Tu doar semnezi!",
  },
  {
    icon: <Building2 className="w-8 h-8" />,
    title: "Fără drumuri la instituții",
    description: "Totul se desfășoară online, indiferent unde te afli. Gestionăm relația cu Registrul Comerțului.",
  },
  {
    icon: <Scale className="w-8 h-8" />,
    title: "Consultanță juridică inclusă",
    description: "De la primul pas până la finalizare, beneficiezi de suport specializat pentru succes garantat.",
  },
];

export default function ProcesSimplificat() {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primaryColor to-secundaryColor">
              Noi ne ocupăm de tot,
            </span>
            <br />
            tu te concentrezi pe afacerea ta
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Simplificăm procesul de înființare a firmei tale, fără drumuri la instituții și fără stres. 
            Tot ce trebuie să faci este să ne furnizezi informațiile, iar noi ne ocupăm de restul.
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-8">
          {beneficii.map((beneficiu, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200"
            >
              <div className="bg-gradient-to-br from-primaryColor/60 to-primaryColor p-3 rounded-lg w-fit mb-4">
                {beneficiu.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {beneficiu.title}
              </h3>
              <p className="text-gray-600">{beneficiu.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Call-to-Action Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <button className="bg-gradient-to-r from-primaryColor to-blue-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300">
            Începe Acum →
          </button>
        </motion.div>
      </div>
    </section>
  );
}