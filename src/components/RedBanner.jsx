import React from 'react';
import { motion } from 'framer-motion';

const RedBanner = () => {
  // Framer Motion variants
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
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

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: 'spring',
        stiffness: 150,
        damping: 12,
      },
    },
    hover: {
      scale: 1.05,
      boxShadow: '0 0 15px rgba(255, 255, 255, 0.3)',
      transition: {
        type: 'spring',
        stiffness: 300,
      },
    },
    tap: { scale: 0.95 },
  };

  return (
    <section className="py-20 bg-gradient-to-r from-red-600 via-red-700 to-red-800 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-0 left-0 w-full h-full bg-red-600/20"
          animate={{ opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute top-1/3 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 3 }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl relative z-10">
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center"
        >
          {/* Title */}
          <motion.h2
            variants={itemVariants}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white max-w-4xl mx-auto leading-tight tracking-tight"
          >
            Join Us as We Weave Together Diverse Ideas to Create Something Extraordinary at{' '}
            <span className="bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent">
              TEDxIITRAM 2025
            </span>
          </motion.h2>

          {/* Button */}
          <motion.div variants={itemVariants} className="mt-10">
            <motion.button
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              className="bg-white text-red-600 hover:bg-gray-100 text-lg sm:text-xl lg:text-2xl font-semibold px-10 py-4 rounded-full transition-colors duration-300 shadow-lg"
            >
              Register Now
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default RedBanner;