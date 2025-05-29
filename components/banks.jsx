// banks.jsx
import React from "react";

const Banks = () => {
  const imageUrls = [
    "/images/bancatransilvania.png",
    "/images/digisign.png",
    "/images/raiffeisenbank.png",
    "/images/btleasing.png",
    "/images/certsign.png",
    "/images/revolut.png",
    "/images/paypal.png",
    "/images/stripe.png",
    "/images/euplatesc.png",
    "/images/ing.png",
  ];

  return (
    <div className="text-center px-4 py-20">
      <p className="font-semibold text-lg pb-5 text-black mb-6">
        Ne ocupăm de toate formalitățile astfel încât tu să te concentrezi pe afacerea ta.
      </p>
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-10 max-w-4xl mx-auto">
        {imageUrls.map((url, index) => (
          <div
            key={index}
            className="flex items-center justify-center h-20 sm:h-24 w-full"
          >
            <img
              src={url}
              alt={`banca-${index + 1}`}
              className="max-h-full max-w-full object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Banks;
