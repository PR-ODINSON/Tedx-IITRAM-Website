import React, { useState, useEffect } from 'react';
import { Calendar, Clock, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

const HeroSection = () => {
  const [countdown, setCountdown] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    // Set target date to 30 days from today (March 18, 2025 + 30 days = April 17, 2025)
    const currentDate = new Date();
    const targetDate = new Date(currentDate.setDate(currentDate.getDate() + 30)).getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;
      if (difference > 0) {
        setCountdown({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      } else {
        setCountdown({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };
    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, []);

  // Framer Motion variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
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

  const pulseVariants = {
    animate: {
      scale: [1, 1.2, 1],
      opacity: [0.2, 0.4, 0.2],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
  };

  const countdownVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: 'spring',
        stiffness: 200,
        damping: 10,
      },
    },
    tick: {
      scale: [1, 1.1, 1],
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <motion.div
          variants={pulseVariants}
          animate="animate"
          className="absolute top-16 left-16 w-96 h-96 bg-red-600/25 rounded-full blur-3xl"
        />
        <motion.div
          variants={pulseVariants}
          animate="animate"
          className="absolute bottom-16 right-16 w-96 h-96 bg-red-600/25 rounded-full blur-3xl"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black via-black/90 to-red-900/30"></div>
      </div>

      {/* Main Content */}
      <motion.div
        className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="max-w-4xl mx-auto space-y-10">
          {/* Title */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white"
          >
            <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">IDEAS</span>{' '}
            <span className="text-red-600 drop-shadow-lg">WORTH</span>{' '}
            <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">SPREADING</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p variants={itemVariants} className="text-xl sm:text-2xl font-semibold text-white">
            TEDxIITRAM 2025: <span className="text-red-500">Mosaic of Minds</span>
          </motion.p>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed"
          >
            Experience a day of groundbreaking talks that ignite inspiration and reshape perspectives.
          </motion.p>

          {/* Event Details */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row justify-center items-center gap-6 text-white"
          >
            <div className="flex items-center gap-3 bg-red-900/30 px-4 py-2 rounded-full border border-red-800/50">
              <Calendar className="w-5 h-5 text-red-500" />
              <span className="text-sm sm:text-base">April 17, 2025</span>
            </div>
            <div className="flex items-center gap-3 bg-red-900/30 px-4 py-2 rounded-full border border-red-800/50">
              <Clock className="w-5 h-5 text-red-500" />
              <span className="text-sm sm:text-base">9:00 AM - 3:30 PM</span>
            </div>
            <div className="flex items-center gap-3 bg-red-900/30 px-4 py-2 rounded-full border border-red-800/50">
              <MapPin className="w-5 h-5 text-red-500" />
              <span className="text-sm sm:text-base">IIT Rajasthan Ahmedabad</span>
            </div>
          </motion.div>

          {/* Button */}
          <motion.div variants={itemVariants}>
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(239, 68, 68, 0.4)' }}
              whileTap={{ scale: 0.95 }}
              className="bg-red-600 hover:bg-red-700 text-white text-base sm:text-lg font-semibold px-10 py-3 rounded-full transition-colors duration-300"
            >
              Register Now
            </motion.button>
          </motion.div>

          {/* Animated Countdown */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-4 gap-4 sm:gap-6 max-w-2xl mx-auto py-6 px-6 bg-black/80 backdrop-blur-md rounded-xl border border-red-900/40"
          >
            {Object.entries(countdown).map(([key, value]) => (
              <motion.div
                key={key}
                className="flex flex-col items-center"
                variants={countdownVariants}
                initial="hidden"
                animate="visible"
                whileHover={{ scale: 1.1 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <motion.span
                  className="text-3xl sm:text-4xl font-bold text-red-500 drop-shadow-md"
                  key={value} // Key ensures animation triggers on value change
                  animate="tick"
                >
                  {value.toString().padStart(2, '0')}
                </motion.span>
                <span className="text-xs uppercase text-gray-400 tracking-widest">{key}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent"></div>
    </section>
  );
};

export default HeroSection;