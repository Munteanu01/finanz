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
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="w-full"
    >
      <h3 className="text-2xl font-bold text-primaryColor mb-8 text-center  lg:text-4xl ">{title}</h3>
      <div className="overflow-x-auto rounded-xl shadow-lg border border-gray-100">
        <table className="w-full min-w-[640px] table-auto">
          <thead>
            <tr className="bg-primaryColor bg-opacity-10">
              {headers.map((header, idx) => (
                <th
                  key={idx}
                  className="px-6 py-4 text-left text-sm font-semibold text-primaryColor"
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-300">
            {rows.map((row, idx) => (
              <tr
                key={idx}
                className="hover:bg-gray-50 transition-colors duration-200"
              >
                <td className="px-6 py-4 text-sm text-gray-700 font-medium whitespace-normal">
                  {row.service}
                </td>
                {typeof row.price === 'string' ? (
                  <td className="px-6 py-4 text-sm text-primaryColor font-semibold">
                    {row.price}
                  </td>
                ) : (
                  Object.values(row.price).map((price, i) => (
                    <td 
                      key={i} 
                      className="px-6 py-4 text-sm text-primaryColor font-semibold"
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
        <p className="mt-6 rounded-xl text-white py-3 bg-secundaryColor text-center">
          {note}
        </p>
      )}
    </motion.div>
  );
}