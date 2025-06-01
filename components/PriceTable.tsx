import React from 'react';
import { motion } from 'framer-motion';

interface PriceRow {
  service: string;
  price: string | { [key: string]: string };
}

interface PriceTableProps {
  title: string;
  headers: string[];
  rows: PriceRow[];
  note?: string;
}

export default function PriceTable({ title, headers, rows, note }: PriceTableProps) {
  const isTwoColumns = headers.length === 2;

  return (
    <div className="w-full">
      {/* Decorative background blur circles */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute w-96 h-96 bg-primaryColor/20 rounded-full blur-[150px] -top-20 -left-20" />
        <div className="absolute w-96 h-96 bg-primaryColor/10 rounded-full blur-[150px] bottom-0 right-0" />
      </div>

      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold text-center mb-20 text-gray-700"
      >
        {title}
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className={`bg-white shadow-xl rounded-2xl overflow-hidden ${
          isTwoColumns ? 'max-w-2xl mx-auto' : ''
        }`}
      >
        <div className="overflow-x-auto">
          <table className="w-full min-w-[480px] table-auto">
            <thead>
              <tr className="bg-primaryColor bg-opacity-10">
                {headers.map((header, idx) => (
                  <th
                    key={idx}
                    className={`px-6 py-4 text-lg font-semibold text-primaryColor ${
                      idx === 0 ? 'text-left' : 'text-center'
                    }`}
                  >
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {rows.map((row, idx) => (
                <tr
                  key={idx}
                  className="hover:bg-gray-50 transition-colors duration-200"
                >
                  <td className="px-6 py-4 text-gray-700 font-medium whitespace-normal text-left">
                    {row.service}
                  </td>
                  {typeof row.price === 'string' ? (
                    <td className="px-6 py-4 text-lg text-primaryColor font-bold text-center">
                      {row.price}
                    </td>
                  ) : (
                    Object.values(row.price).map((price, i) => (
                      <td 
                        key={i} 
                        className="px-6 py-4 text-lg text-primaryColor font-bold text-center"
                      >
                        {price}
                      </td>
                    ))
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {note && (
          <div className="mt-6 rounded-xl text-white py-3 bg-secundaryColor text-center">
            {note}
          </div>
        )}
      </motion.div>
    </div>
  );
}