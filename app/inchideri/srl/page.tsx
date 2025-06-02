"use client"
import FinanzNavbar from "../../../navbar"
import Footer from "../../../components/footer"
import HeroPages from "../../../components/HeroPages"
import { FileText, Clock, Shield, CheckCircle, ArrowRight, Users } from "lucide-react"
import { motion } from "framer-motion"
import Link from "next/link"
export default function InchidereSrlPage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <FinanzNavbar />

      <HeroPages
        backgroundImage="/closed.jpg"
        title="Închidere firmă 100% Online"
        subtitle="Procesul complet în doar câteva zile lucrătoare"
        badge="Digital • Rapid • Sigur"
        cards={[]}
      />

      <main className="container mx-auto py-16 px-4">
        {/* Process Steps */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto mb-20"
        >
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-4xl font-bold mb-4 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent"
            >
              Procesul în 3 pași simpli
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-xl text-gray-600 max-w-2xl mx-auto"
            >
              De la completarea formularului până la primirea documentelor finale
            </motion.p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="relative group"
            >
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 h-full relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-cyan-500"></div>
                <div className="flex items-center justify-between mb-6">
                  <div className="bg-gradient-to-br from-blue-500 to-cyan-500 p-3 rounded-xl">
                    <FileText className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-3xl font-bold text-gray-200 group-hover:text-blue-200 transition-colors">
                    01
                  </span>
                </div>
                <h4 className="text-xl font-bold text-gray-800 mb-3">Completare formular</h4>
                <div className="flex items-center gap-2 mb-4">
                  <Clock className="w-4 h-4 text-blue-500" />
                  <span className="text-sm font-semibold text-blue-600">1 minut</span>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  Completezi formularul online sau contactezi un consilier pentru asistență personalizată.
                </p>
              </div>
            </motion.div>

            {/* Step 2 */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="relative group"
            >
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 h-full relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-blue-600"></div>
                <div className="flex items-center justify-between mb-6">
                  <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-3 rounded-xl">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-3xl font-bold text-gray-200 group-hover:text-blue-200 transition-colors">
                    02
                  </span>
                </div>
                <h4 className="text-xl font-bold text-gray-800 mb-3">Redactare & semnare</h4>
                <div className="flex items-center gap-2 mb-4">
                  <Clock className="w-4 h-4 text-blue-500" />
                  <span className="text-sm font-semibold text-blue-600">30 minute</span>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  Redactăm documentația completă, o pregătim pentru semnare și o depunem la ONRC în numele tău.
                </p>
              </div>
            </motion.div>

            {/* Step 3 */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="relative group"
            >
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 h-full relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-500 to-emerald-500"></div>
                <div className="flex items-center justify-between mb-6">
                  <div className="bg-gradient-to-br from-green-500 to-emerald-500 p-3 rounded-xl">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-3xl font-bold text-gray-200 group-hover:text-green-200 transition-colors">
                    03
                  </span>
                </div>
                <h4 className="text-xl font-bold text-gray-800 mb-3">Finalizare proces</h4>
                <div className="flex items-center gap-2 mb-4">
                  <Clock className="w-4 h-4 text-green-500" />
                  <span className="text-sm font-semibold text-green-600">2-3 zile</span>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  Primești pe email certificatul de închidere și toate documentele necesare, semnate digital de ONRC.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Pricing Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
              Pachet de închidere firmă
            </h2>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gradient-to-br from-white to-blue-50 p-8 md:p-12 rounded-3xl shadow-2xl border border-blue-100 relative overflow-hidden"
          >
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">Pachet complet închidere firmă</h3>
                  <p className="text-gray-600">Tot ce ai nevoie pentru închiderea legală a firmei</p>
                </div>
                <div className="text-right">
                  <div className="text-4xl font-bold text-blue-600 mb-1">540 lei</div>
                  <div className="text-sm text-gray-500">Plată unică / <span className="font-semibold text-red-600">135 lei Taxe ORC</span></div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="space-y-4">
                  <h4 className="font-semibold text-gray-800 mb-3">Incluse:</h4>
                  <div className="space-y-3">
                    {[
                      "Dosar complet cu act constitutiv, contracte, formulare și cereri",
                      "Înregistrarea dosarului la Registrul Comerțului",
                      "Relaționare cu Registrul Comerțului",
                      "Realizezi câte modificări vrei și plătești doar una",
                    ].map((item, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        className="flex items-center gap-3"
                      >
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700">{item}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="font-semibold text-gray-800 mb-3">Suport expert:</h4>
                  <div className="space-y-3">
                    {[
                      "Suport expert chat, telefonic și email cu experții Srlconsult",
                      "Opțional: Găzduire sediu social în orice județ în 41 de locații",
                    ].map((item, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: index * 0.1 + 0.4 }}
                        className="flex items-center gap-3"
                      >
                        <CheckCircle className="w-5 h-5 text-blue-500 flex-shrink-0" />
                        <span className="text-gray-700">{item}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
              <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => window.location.href = '/contact'}
                className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white py-4 px-8 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-3"
              >
                Începe procesul de închidere
                <ArrowRight className="w-5 h-5" />
              </motion.button>
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </main>

      <Footer />
    </div>
  )
}
