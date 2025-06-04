import React from 'react';
import { motion } from 'framer-motion';

export default function LegalSupport() {
  return (
    <div className="w-full py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Existing content */}
        <section className="relative w-full flex flex-col md:flex-row overflow-hidden rounded-3xl shadow-lg min-h-[500px]">
          
          {/* Text Content */}
          <motion.div
            className="w-full md:w-1/2 flex flex-col justify-center items-start  md:text-left px-6 py-16 md:px-16 space-y-4  bg-white text-gray-700 z-10"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <p className="text-sm py-1 px-3 text-white rounded-md bg-secundaryColor uppercase font-semibold tracking-wider primary">
              100% online
            </p>
            <h2 className="text-3xl md:text-4xl font-bold leading-tight secondary">
              Avocat si Consilier juridic dedicat pe tot parcursul procesului de modificare al firmei
            </h2>
          </motion.div>

          {/* Imagine – ca element vizibil, nu ca background */}
          <div className="relative w-full md:w-1/2 h-[300px] md:h-auto">
            <img
              src="/juridic.jpg"
              alt="Consiliere juridică"
              className="w-full h-full object-cover"
            />
            {/* Overlay pe mobil */}
            <div className="md:hidden absolute inset-0 bg-black bg-opacity-50" />
          </div>
        </section>
      </div>
    </div>
  );
}
