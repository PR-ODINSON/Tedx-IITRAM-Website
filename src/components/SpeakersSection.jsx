import React from 'react';
import { motion } from 'framer-motion';

const SpeakersSection = ({ speakers }) => {
  // Enhanced Framer Motion variants
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.5,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 150,
        damping: 15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.85 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: 'spring',
        stiffness: 180,
        damping: 14,
        duration: 0.6,
      },
    },
    hover: {
      scale: 1.03,
      y: -8,
      transition: {
        type: 'spring',
        stiffness: 320,
        damping: 20,
      },
    },
  };

  const overlayVariants = {
    hidden: { opacity: 0, y: '100%' },
    hover: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: 'easeOut',
      },
    },
  };

  const lineVariants = {
    hidden: { width: 0 },
    visible: {
      width: '200px',
      transition: {
        duration: 1.5,
        ease: 'easeInOut',
      },
    },
  };

  const floatingVariants = {
    animate: {
      y: [0, -15, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const pulseVariants = {
    animate: {
      scale: [1, 1.1, 1],
      opacity: [0.4, 0.7, 0.4],
      transition: {
        duration: 5,
        repeat: Infinity,
        ease: "easeInOut",
        repeatType: "mirror"
      }
    }
  };

  return (
    <section id="speakers" className="py-40 bg-black relative overflow-hidden">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-950 to-red-950/20">
        <motion.div
          variants={pulseVariants}
          animate="animate"
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-700/10 rounded-full blur-3xl"
        />
        <motion.div
          variants={pulseVariants}
          animate="animate"
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-red-600/10 rounded-full blur-3xl"
        />
        <motion.div
          variants={pulseVariants}
          animate="animate"
          className="absolute top-3/4 left-3/4 w-72 h-72 bg-red-800/10 rounded-full blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0.05 }}
          animate={{ opacity: [0.05, 0.1, 0.05] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiM5OTMwMzAiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRjMC0yLjIwOS0xLjc5MS00LTQtNHMtNCAxLjc5MS00IDQgMS43OTEgNCA0IDQgNC0xLjc5MSA0LTR6bTAtMThjMC0yLjIwOS0xLjc5MS00LTQtNHMtNCAxLjc5MS00IDQgMS43OTEgNCA0IDQgNC0xLjc5MSA0LTR6bS0xOCAxOGMwLTIuMjA5LTEuNzkxLTQtNC00cy00IDEuNzkxLTQgNCAxLjc5MSA0IDQgNCA0LTEuNzkxIDQtNHptMC0xOGMwLTIuMjA5LTEuNzkxLTQtNC00cy00IDEuNzkxLTQgNCAxLjc5MSA0IDQgNCA0LTEuNzkxIDQtNHptMzYgMThjMC0yLjIwOS0xLjc5MS00LTQtNHMtNCAxLjc5MS00IDQgMS43OTEgNCA0IDQgNC0xLjc5MSA0LTR6bTAtMThjMC0yLjIwOS0xLjc5MS00LTQtNHMtNCAxLjc5MS00IDQgMS43OTEgNCA0IDQgNC0xLjc5MSA0LTR6Ii8+PC9nPjwvZz48L3N2Zz4=')]}"/>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Enhanced Title Section */}
          <motion.div variants={itemVariants} className="text-center mb-28">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="inline-block mb-4 px-6 py-2 bg-red-900/30 rounded-full border border-red-700/30"
            >
              <span className="text-red-400 font-medium tracking-wide text-sm">MEET THE VISIONARIES</span>
            </motion.div>
            
            <h2 className="text-5xl sm:text-6xl lg:text-8xl font-extrabold text-white tracking-tight mb-6">
              Our <span className="bg-gradient-to-r from-red-700 via-red-500 to-red-600 bg-clip-text text-transparent">Speakers</span>
            </h2>
            
            <motion.div
              variants={lineVariants}
              className="h-1 bg-gradient-to-r from-transparent via-red-600 to-transparent mx-auto mb-10 rounded-full"
            />
            
            <p className="text-xl sm:text-2xl lg:text-3xl text-gray-300 max-w-4xl mx-auto leading-relaxed font-light">
              Thought leaders and innovators igniting inspiration at 
              <span className="font-semibold text-white"> TEDx<span className="text-red-500">IITRAM</span> 2025</span>
            </p>
          </motion.div>

          {/* Enhanced Speaker Cards */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-14 mb-20"
          >
            {speakers.map((speaker, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover="hover"
                className="relative group rounded-3xl overflow-hidden shadow-2xl shadow-red-900/20 mx-auto"
              >
                {/* Glow Effect on Hover */}
                <motion.div 
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className="absolute -inset-0.5 bg-gradient-to-r from-red-600 to-red-900 rounded-3xl blur opacity-75 group-hover:opacity-90 transition duration-1000 group-hover:duration-200 animate-tilt z-0"
                />
                
                <div className="relative z-10 bg-gray-950 rounded-2xl overflow-hidden border border-red-900/30">
                  {/* Image Section */}
                  <div className="relative aspect-[3/4] overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-black/60 z-10" />
                    <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black to-transparent z-10" />
                    
                    <img
                      src={speaker.image}
                      alt={speaker.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    
                    {/* Overlay Info on Hover */}
                    <motion.div
                      variants={overlayVariants}
                      initial="hidden"
                      className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/80 to-red-950/20 flex flex-col justify-end p-8 z-20"
                    >
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileHover={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1, duration: 0.5 }}
                      >
                        <h4 className="text-2xl sm:text-3xl font-bold text-white mb-3 tracking-wide">{speaker.name}</h4>
                        <p className="text-red-400 text-lg font-medium mb-4">{speaker.role}</p>
                        <div className="mt-4 pt-4 border-t border-red-700/30">
                          <p className="text-lg text-gray-100 italic font-medium leading-tight">"{speaker.topic}"</p>
                        </div>
                        <div className="mt-6 flex space-x-3">
                          {speaker.socialLinks?.map((social, idx) => (
                            <motion.a 
                              key={idx}
                              href={social.url}
                              whileHover={{ scale: 1.2, color: "#ef4444" }}
                              className="w-10 h-10 rounded-full flex items-center justify-center bg-red-900/30 text-white hover:bg-red-700/40 transition-colors duration-300"
                            >
                              <i className={`fa ${social.icon}`}></i>
                            </motion.a>
                          ))}
                        </div>
                      </motion.div>
                    </motion.div>
                  </div>

                  {/* Info Bar */}
                  <div className="p-6 bg-gradient-to-r from-gray-950 to-gray-900">
                    <h4 className="text-xl font-bold text-white mb-1">{speaker.name}</h4>
                    <div className="flex items-center space-x-2">
                      <span className="w-4 h-0.5 bg-red-600"></span>
                      <p className="text-red-400 text-sm font-medium">{speaker.role}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Enhanced Button */}
          <motion.div variants={itemVariants} className="text-center mt-16">
            <motion.div 
              className="inline-block relative"
              variants={floatingVariants}
              animate="animate"
            >
              <motion.div 
                className="absolute -inset-1 bg-gradient-to-r from-red-600 to-red-900 rounded-full blur-md opacity-70"
                animate={{ 
                  scale: [1, 1.05, 1],
                  opacity: [0.7, 0.9, 0.7],
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "mirror",
                }}
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative bg-gradient-to-r from-red-700 to-red-900 text-white text-xl font-bold px-12 py-5 rounded-full shadow-lg shadow-red-700/20 border border-red-700/50"
              >
                <div className="flex items-center space-x-2">
                  <span>Explore All Speakers</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
              </motion.button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default SpeakersSection;