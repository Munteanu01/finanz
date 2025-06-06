import { motion } from "framer-motion";
import { 
  Rocket, 
  Clock, 
  FileCheck, 
  Building2, 
  Scale 
} from "lucide-react";
import Link from "next/link"; // Import pentru Next.js

const beneficii = [
  {
    icon: <Rocket className="w-8 h-8 text-white" />,
    title: "Proces simplu și rapid",
    description: "Fără timp pierdut și fără drumuri la instituții. Ne ocupăm de tot pentru tine.",
  },
  {
    icon: <Clock className="w-8 h-8 text-white" />,
    title: "Modificări în doar 3-5 zile",
    description: "Timpul tău este prețios. Orice schimbare necesară firmei tale este gata în 3-5 zile.",
  },
  {
    icon: <FileCheck className="w-8 h-8 text-white" />,
    title: "Fără formalități, fără stres",
    description: "Noi ne ocupăm de întregul proces – de la redactarea actelor până la înregistrare. Tu doar semnezi!",
  },
  {
    icon: <Building2 className="w-8 h-8 text-white" />,
    title: "Fără drumuri la instituții",
    description: "Totul se desfășoară online, indiferent unde te afli. Gestionăm relația cu Registrul Comerțului.",
  },
  {
    icon: <Scale className="w-8 h-8 text-white" />,
    title: "Consultanță juridică online inclusă",
    description: "De la primul pas până la finalizare, beneficiezi de suport specializat pentru succes garantat.",
  },
];

export default function ProcesSimplificat() {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primaryColor to-mediumBlue">
              Simplificăm procesul pentru tine
            </span>
          </h2>
          <p className="text-xl text-gray-600 mt-4">
            Tot ce trebuie să faci este să ne furnizezi informațiile, iar noi ne ocupăm de restul.
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-12">
          {beneficii.slice(0, 2).map((beneficiu, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 text-center"
            >
              <div className="flex items-center justify-center bg-gradient-to-br from-primaryColor to-primaryColor/80 p-4 rounded-full w-16 h-16 mx-auto mb-6">
                {beneficiu.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {beneficiu.title}
              </h3>
              <p className="text-gray-600">{beneficiu.description}</p>
            </motion.div>
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-12 mt-12">
          {beneficii.slice(2).map((beneficiu, idx) => (
            <motion.div
              key={idx + 2}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: (idx + 2) * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 text-center"
            >
              <div className="flex items-center justify-center bg-gradient-to-br from-primaryColor to-primaryColor/80 p-4 rounded-full w-16 h-16 mx-auto mb-6">
                {beneficiu.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
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
          <Link href="/contact">
            <button className="bg-gradient-to-r from-primaryColor to-mediumBlue text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300">
              Începe Acum →
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}