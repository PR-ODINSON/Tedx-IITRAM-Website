import React from 'react';
import { motion } from 'framer-motion';

const ThemeSection = () => {
  // Framer Motion variants
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.25,
        delayChildren: 0.4,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 120,
        damping: 15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.85, rotate: -5 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        type: 'spring',
        stiffness: 150,
        damping: 12,
      },
    },
    hover: {
      scale: 1.05,
      rotate: 1,
      boxShadow: '0 0 25px rgba(239, 68, 68, 0.5)',
      transition: {
        type: 'spring',
        stiffness: 300,
      },
    },
  };

  const circleVariants = {
    hidden: { scale: 0 },
    visible: {
      scale: 1,
      transition: {
        type: 'spring',
        stiffness: 200,
        damping: 10,
      },
    },
    hover: {
      scale: 1.15,
      backgroundColor: 'rgba(239, 68, 68, 0.6)',
      rotate: 360,
      transition: {
        duration: 0.8,
        ease: 'easeInOut',
      },
    },
  };

  const lineVariants = {
    hidden: { width: 0 },
    visible: {
      width: '100%',
      transition: {
        duration: 1.5,
        ease: 'easeInOut',
      },
    },
  };

  return (
    <section className="py-28 bg-black relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-black via-gray-950 to-red-900/30"></div>
        <motion.div
          className="absolute top-10 left-10 w-72 h-72 bg-red-600/10 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-10 right-10 w-72 h-72 bg-red-600/10 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl relative z-10">
        <motion.div
          className="text-center"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Title */}
          <motion.h2
            variants={itemVariants}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-4 text-white tracking-tight"
          >
            This Year's <span className="text-red-600 drop-shadow-lg">Theme</span>
          </motion.h2>

          {/* Decorative Line */}
          <motion.div
            variants={lineVariants}
            className="w-32 h-1 bg-red-600 mx-auto mb-8 rounded-full"
          />

          {/* Theme Name */}
          <motion.h3
            variants={itemVariants}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-12 relative"
          >
            <span className="bg-gradient-to-r from-red-600 via-red-500 to-red-600 bg-clip-text text-transparent">
              MOSAIC OF MINDS
            </span>
            <motion.div
              className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-24 bg-red-600/20 rounded-full blur-xl"
              animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
              transition={{ duration: 3, repeat: Infinity }}
            />
          </motion.h3>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="text-lg sm:text-xl lg:text-2xl text-gray-200 max-w-4xl mx-auto mb-16 leading-relaxed font-light italic"
          >
            "A mosaic thrives on its differences—each unique piece crafting a masterpiece. Our event unites diverse minds to spark a symphony of innovation."
          </motion.p>

          {/* Cards */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-10"
          >
            {/* Card 1 */}
            <motion.div
              variants={cardVariants}
              whileHover="hover"
              className="bg-gray-900/90 border border-red-900/60 p-8 rounded-2xl backdrop-blur-lg relative overflow-hidden"
            >
              <motion.div
                variants={circleVariants}
                className="w-14 h-14 bg-red-600/40 flex items-center justify-center rounded-full mx-auto mb-6"
              >
                <div className="text-2xl font-bold text-red-600">01</div>
              </motion.div>
              <h4 className="text-xl sm:text-2xl font-semibold text-white mb-4 tracking-wide">Diverse Perspectives</h4>
              <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
                A fusion of voices from every corner, painting a vivid picture of possibility.
              </p>
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-red-600/50 to-transparent" />
            </motion.div>

            {/* Card 2 */}
            <motion.div
              variants={cardVariants}
              whileHover="hover"
              className="bg-gray-900/90 border border-red-900/60 p-8 rounded-2xl backdrop-blur-lg relative overflow-hidden"
            >
              <motion.div
                variants={circleVariants}
                className="w-14 h-14 bg-red-600/40 flex items-center justify-center rounded-full mx-auto mb-6"
              >
                <div className="text-2xl font-bold text-red-600">02</div>
              </motion.div>
              <h4 className="text-xl sm:text-2xl font-semibold text-white mb-4 tracking-wide">Interconnected Ideas</h4>
              <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
                Threads of thought weaving together, revealing brilliance in unity.
              </p>
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-red-600/50 to-transparent" />
            </motion.div>

            {/* Card 3 */}
            <motion.div
              variants={cardVariants}
              whileHover="hover"
              className="bg-gray-900/90 border border-red-900/60 p-8 rounded-2xl backdrop-blur-lg relative overflow-hidden"
            >
              <motion.div
                variants={circleVariants}
                className="w-14 h-14 bg-red-600/40 flex items-center justify-center rounded-full mx-auto mb-6"
              >
                <div className="text-2xl font-bold text-red-600">03</div>
              </motion.div>
              <h4 className="text-xl sm:text-2xl font-semibold text-white mb-4 tracking-wide">Collective Impact</h4>
              <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
                Minds in harmony, crafting solutions that echo across the globe.
              </p>
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-red-600/50 to-transparent" />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ThemeSection;