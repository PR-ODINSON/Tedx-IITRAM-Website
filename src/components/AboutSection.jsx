import React from 'react';
import { motion } from 'framer-motion';
import { Users, Mic, Clock } from 'lucide-react';

const AboutSection = () => {
  // Framer Motion variants
  const sectionVariants = {
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 15,
      },
    },
  };

  const statVariants = {
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
    hover: {
      scale: 1.05,
      boxShadow: '0 0 15px rgba(239, 68, 68, 0.4)',
    },
  };

  const squareVariants = {
    animate: {
      rotate: 360,
      transition: {
        duration: 15,
        repeat: Infinity,
        ease: 'linear',
      },
    },
  };

  return (
    <section id="about" className="py-24 bg-black text-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <motion.div
          className="flex flex-col items-center justify-center gap-16"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Title */}
          <motion.h2
            variants={itemVariants}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-center tracking-tight"
          >
            About <span className="text-red-600 drop-shadow-lg">TEDxIITRAM</span>
          </motion.h2>

          {/* Main Content */}
          <div className="flex flex-col md:flex-row gap-12 items-center">
            {/* Image Section */}
            <motion.div variants={itemVariants} className="w-full md:w-1/2 relative">
              <div className="relative group">
                {/* Decorative Squares */}
                <motion.div
                  variants={squareVariants}
                  animate="animate"
                  className="absolute -top-10 -left-10 w-28 h-28 bg-red-600/70 opacity-60"
                />
                <motion.div
                  variants={squareVariants}
                  animate="animate"
                  className="absolute -bottom-10 -right-10 w-28 h-28 bg-red-600/70 opacity-60"
                />
                {/* Image from Unsplash */}
                <motion.img
                  src="https://images.unsplash.com/photo-1540575467063-1f4676f5d71d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80"
                  alt="TEDx Event Stage"
                  className="relative z-10 w-full rounded-xl shadow-2xl border-2 border-red-900/70 object-cover h-80 md:h-96"
                  whileHover={{ scale: 1.03 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                />
              </div>
            </motion.div>

            {/* Text Section */}
            <div className="w-full md:w-1/2 space-y-8">
              {/* Paragraphs */}
              <motion.p
                variants={itemVariants}
                className="text-lg sm:text-xl text-gray-200 leading-relaxed text-center md:text-left"
              >
                TEDxIITRAM brings together brilliant minds to share ideas that shape the future. Hosted at IIT Rajasthan Ahmedabad Campus, it’s where innovation meets inspiration.
              </motion.p>
              <motion.p
                variants={itemVariants}
                className="text-lg sm:text-xl text-gray-200 leading-relaxed text-center md:text-left"
              >
                Our theme, <span className="text-red-500 font-semibold">"Mosaic of Minds"</span>, celebrates the power of diverse perspectives weaving together a vibrant story of creativity.
              </motion.p>
              <motion.p
                variants={itemVariants}
                className="text-lg sm:text-xl text-gray-200 leading-relaxed text-center md:text-left"
              >
                Expect a day of captivating talks, dynamic interactions, and connections that ignite change.
              </motion.p>
            </div>
          </div>

          {/* Stats Section */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 sm:grid-cols-3 gap-8 w-full max-w-4xl"
          >
            <motion.div
              variants={statVariants}
              whileHover="hover"
              className="p-8 bg-gray-900/90 border border-red-900/60 rounded-2xl backdrop-blur-md flex items-center justify-center gap-4"
            >
              <Mic className="w-10 h-10 text-red-600" />
              <div>
                <div className="text-4xl font-bold text-red-600 mb-1">12+</div>
                <div className="text-sm text-gray-300 uppercase tracking-wider">Speakers</div>
              </div>
            </motion.div>
            <motion.div
              variants={statVariants}
              whileHover="hover"
              className="p-8 bg-gray-900/90 border border-red-900/60 rounded-2xl backdrop-blur-md flex items-center justify-center gap-4"
            >
              <Users className="w-10 h-10 text-red-600" />
              <div>
                <div className="text-4xl font-bold text-red-600 mb-1">300+</div>
                <div className="text-sm text-gray-300 uppercase tracking-wider">Attendees</div>
              </div>
            </motion.div>
            <motion.div
              variants={statVariants}
              whileHover="hover"
              className="p-8 bg-gray-900/90 border border-red-900/60 rounded-2xl backdrop-blur-md flex items-center justify-center gap-4"
            >
              <Clock className="w-10 h-10 text-red-600" />
              <div>
                <div className="text-4xl font-bold text-red-600 mb-1">8</div>
                <div className="text-sm text-gray-300 uppercase tracking-wider">Hours</div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;