import React from "react"

export default function Prices({ prices, color = "primaryColor" }) {
  if (!prices || prices.length === 0) return null

  return (
    <div className="w-full mb-12">
         <h2 className="lg:text-4xl text-2xl font-bold text-center  mb-6 xl:pl-2 py-10">
            Planuri de contabilitate pentru orice etapă a businessului
            </h2>
      <div
        className="
          flex flex-wrap justify-center xl:justify-start gap-6
        "
      >
        {prices.map((item, idx) => (
          <div
            key={idx}
            className="
              flex flex-col items-center text-center bg-white shadow-sm border border-gray-200 rounded-lg
              p-2
              pb-5
              flex-1
              min-w-[300px]
              max-w-sm
              md:basis-[45%]
              lg:basis-[30%]
              xl:basis-[18%]
              grow
            "
            style={{ flexBasis: "18%" }} // ~5 per row on xl, but will auto-fit
          >
            <h4 className={`text-xl font-semibold mb-2 text-${color}`}>{item.title}</h4>
            <div className={`text-2xl font-bold text-${color} mb-1`}>{item.price}</div>
            {item.subtitle && (
              <p className="text-sm lg:min-h-20 min-h-16 pt-3 text-gray-700 mb-4">{item.subtitle}</p>
            )}
            {item.details && (
              <ul className="text-sm text-gray-600 space-y-1 text-left mx-auto max-w-xs">
                {item.details.map((d, i) => (
                  <li key={i} className="flex items-start">
                    <span className="mr-2 text-primaryColor">•</span>
                    <span>{d}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}