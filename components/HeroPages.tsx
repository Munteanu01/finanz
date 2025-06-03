import React, { useState, useEffect, useRef } from "react";
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
  const [imageLoaded, setImageLoaded] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  // Ensure imageLoaded is set if the image is cached
  useEffect(() => {
    const img = imgRef.current;
    if (img && img.complete) {
      setImageLoaded(true);
    }
  }, [backgroundImage]);

  return (
    <section className="relative w-full lg:h-[90vh] flex flex-col justify-center items-center text-white">
      {/* Fundalul secțiunii Hero cu fade-in */}
      <motion.div
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{
          backgroundImage: imageLoaded ? `url('${backgroundImage}')` : "none",
          backgroundColor: "#222", // fallback color
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: imageLoaded ? 1 : 0 }}
        transition={{ duration: 1 }}
      />
      {/* Preîncărcare imagine */}
      <img
        ref={imgRef}
        src={backgroundImage}
        alt=""
        style={{ display: "none" }}
        onLoad={() => setImageLoaded(true)}
      />
      <div className="absolute inset-0 z-10 bg-black opacity-70" />

      {/* Conținutul secțiunii Hero */}
      <div className="relative pt-20 z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        {/* Rezervă spațiu pentru badge */}
        <div className="mb-8 h-10 flex items-center justify-center">
          {badge ? (
            <motion.div
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-sm md:text-base uppercase font-bold tracking-wider text-white bg-primaryColor/80 px-6 py-2 rounded-md"
            >
              {badge}
            </motion.div>
          ) : (
            // Div gol pentru a rezerva spațiu
            <div className="h-10"></div>
          )}
        </div>

        {/* Titlul */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-3xl sm:text-4xl lg:text-6xl font-bold text-center mb-6 sm:mb-8 max-w-4xl px-4"
        >
          {title}
        </motion.h1>

        {/* Subtitlul */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-base sm:text-xl lg:text-2xl text-center mb-8 sm:mb-12 max-w-3xl px-4"
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
          className={`grid gap-4 pb-10 lg:pb-0 sm:gap-6 lg:gap-1 lg:bg-white rounded-xl px-4 sm:px-5 justify-center items-start 
        grid-cols-1 lg:grid-cols-${Math.min(cards.length, 3)}`}
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
              className="flex lg:bg-transparent bg-white flex-col items-center py-4 sm:py-5 rounded-xl text-center text-gray-800 transition-all duration-100"
            >
              <div className="text-primaryColor text-lg sm:text-xl mb-3 sm:mb-4">
                {item.icon}
              </div>
              <h3 className="text-base xl:text-lg font-semibold mb-1 sm:mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600 text-xs sm:text-sm xl:text-base px-2">
                {item.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}