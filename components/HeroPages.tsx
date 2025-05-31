import React from "react";
import { motion } from "framer-motion";

export interface HeroCard {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface HeroProps {
  backgroundImage: string;
  badge?: string;
  title: string;
  subtitle: string;
  cards: HeroCard[];
}

export default function HeroPages({
  backgroundImage,
  badge,
  title,
  subtitle,
  cards,
}: HeroProps) {
  return (
    <section className="pt-10 relative w-full min-h-[100vh] 2xl:min-h-[70vh] flex items-center justify-center text-white">
      <div
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ backgroundImage: `url('${backgroundImage}')` }}
      />
      <div className="absolute inset-0 z-10 bg-black opacity-70" />

      <div className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        {badge && (
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex justify-center mb-8"
          >
            <span className="text-sm md:text-base uppercase font-bold tracking-wider text-white bg-primaryColor/80 px-6 py-2 rounded-md">
              {badge}
            </span>
          </motion.div>
        )}

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-4xl lg:text-6xl font-bold text-center mb-8 max-w-4xl mx-auto"
        >
          {title}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-xl lg:text-2xl text-center mb-12 max-w-3xl mx-auto"
        >
          {subtitle}
        </motion.p>

        {/* Container pentru carduri */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.15 },
            },
          }}
          className={`grid gap-1 bg-white rounded-xl px-5 justify-center items-start 
    grid-cols-1  lg:grid-cols-${Math.min(cards.length, 3)}` /* Limita a 3 colonne massimo */}
        >
          {cards.map((item, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.15 + index * 0.05 }}
              whileHover={{ scale: 1.03 }}
              className="flex flex-col items-center py-5 text-center text-gray-800 transition-all duration-100"
            >
              <div className="text-primaryColor text-xl mb-4">{item.icon}</div>
              <h3 className="xl:text-lg font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm xl:text-base">{item.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}