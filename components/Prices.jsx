import React from "react";
import { Check } from "lucide-react";
import { motion } from "framer-motion";

export default function Prices({ prices, title, formattedTitle, color = "primaryColor" }) {
  if (!prices || prices.length === 0) return null;

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.2,
      },
    },
  };

  return (
    <div className="w-full py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="lg:text-4xl text-center text-2xl font-bold mb-6 xl:pl-2 py-10 text-zinc-800"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {formattedTitle}
        </motion.div>

        <div className="flex flex-wrap justify-center gap-8">
          {prices.map((item, idx) => (
            <div
              key={idx}
              className={`
                group relative flex flex-col items-center text-center bg-white border border-gray-200
                rounded-2xl p-5 pb-6 shadow-sm transition-all duration-500 ease-in-out
                hover:shadow-xl hover:scale-[1.03] hover:ring-2 hover:ring-offset-2 hover:ring-${color}
                w-full max-w-[300px] sm:max-w-[340px] flex-grow basis-[280px]
              `}
            >
              <h4 className={`text-xl font-semibold mb-2 text-${color}`}>
                {item.title}
              </h4>
              <div className={`text-2xl font-bold text-${color} mb-1`}>
                {item.price}
              </div>
              {item.subtitle && (
                <p className="text-sm lg:min-h-20 min-h-16 pt-3 text-gray-700 mb-4">
                  {item.subtitle}
                </p>
              )}
              {item.details && (
                <ul className="text-sm text-gray-600 space-y-2 text-left mx-auto max-w-xs">
                  {item.details.map((d, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Check className={`w-4 h-4 text-${color} mt-1 shrink-0`} />
                      <span>{d}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
