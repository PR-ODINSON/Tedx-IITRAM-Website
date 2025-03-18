import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '../App';

const ScheduleSection = ({ schedule }) => {
  // Animation variants
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1, 
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 12,
      },
    },
  };

  const lineVariants = {
    hidden: { scaleY: 0 },
    visible: {
      scaleY: 1,
      transition: {
        duration: 1.5,
        ease: 'easeInOut',
      },
    },
  };

  const timelineCardVariants = {
    hidden: (isEven) => ({ 
      opacity: 0, 
      x: isEven ? 50 : -50 
    }),
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 12,
        duration: 0.5,
      },
    },
    hover: {
      y: -10,
      boxShadow: "0 20px 25px -5px rgba(239, 68, 68, 0.2), 0 10px 10px -5px rgba(0, 0, 0, 0.5)",
      transition: {
        type: 'spring',
        stiffness: 400,
        damping: 10,
      },
    },
  };

  const pulseVariants = {
    pulse: {
      scale: [1, 1.1, 1],
      opacity: [0.7, 1, 0.7],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section id="schedule" className="py-20 md:py-32 bg-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-black to-red-950/20">
        <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiM5OTMwMzAiIGZpbGwtb3BhY2l0eT0iMC4yIj48cGF0aCBkPSJNMzYgMzRjMC0yLjIwOS0xLjc5MS00LTQtNHMtNCAxLjc5MS00IDQgMS43OTEgNCA0IDQgNC0xLjc5MSA0LTR6bTAtMThjMC0yLjIwOS0xLjc5MS00LTQtNHMtNCAxLjc5MS00IDQgMS43OTEgNCA0IDQgNC0xLjc5MSA0LTR6bS0xOCAxOGMwLTIuMjA5LTEuNzkxLTQtNC00cy00IDEuNzkxLTQgNCAxLjc5MSA0IDQgNCA0LTEuNzkxIDQtNHptMC0xOGMwLTIuMjA5LTEuNzkxLTQtNC00cy00IDEuNzkxLTQgNCAxLjc5MSA0IDQgNCA0LTEuNzkxIDQtNHptMzYgMThjMC0yLjIwOS0xLjc5MS00LTQtNHMtNCAxLjc5MS00IDQgMS43OTEgNCA0IDQgNC0xLjc5MSA0LTR6bTAtMThjMC0yLjIwOS0xLjc5MS00LTQtNHMtNCAxLjc5MS00IDQgMS43OTEgNCA0IDQgNC0xLjc5MSA0LTR6Ii8+PC9nPjwvZz48L3N2Zz4=')]}"/>
      </div>
      
      {/* Red Glow Effects */}
      <motion.div
        animate={{
          opacity: [0.2, 0.4, 0.2],
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -top-1/4 -right-1/4 w-1/2 h-1/2 bg-red-600/10 rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          opacity: [0.15, 0.3, 0.15],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
        className="absolute -bottom-1/4 -left-1/4 w-1/2 h-1/2 bg-red-800/10 rounded-full blur-3xl"
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl relative z-10">
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {/* Enhanced Title Section */}
          <motion.div variants={itemVariants} className="text-center mb-16 md:mb-24">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="inline-block mb-4 px-6 py-2 bg-red-900/30 rounded-full border border-red-700/30"
            >
              <span className="text-red-400 font-medium tracking-wide text-sm">PLAN YOUR DAY</span>
            </motion.div>
            
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-extrabold mb-6 text-white">
              Event <span className="bg-gradient-to-r from-red-700 via-red-500 to-red-600 bg-clip-text text-transparent">Schedule</span>
            </h2>
            
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100px", maxWidth: "50%" }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="h-1 bg-gradient-to-r from-transparent via-red-600 to-transparent mx-auto mb-8 rounded-full"
            />
            
            <p className="text-base md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Plan your day at <span className="font-semibold text-white">TEDx<span className="text-red-500">IITRAM</span> 2025</span> with our comprehensive schedule of inspiring talks, interactive sessions, and networking opportunities.
            </p>
          </motion.div>

          {/* Enhanced Timeline Layout */}
          <div className="relative max-w-5xl mx-auto">
            {/* Vertical Line - Hidden on mobile, visible on md and up */}
            <motion.div 
              variants={lineVariants}
              className="hidden md:block absolute left-1/2 h-full w-0.5 bg-gradient-to-b from-red-700 via-red-600 to-red-800 transform -translate-x-1/2 origin-top"
            />

            {schedule.map((item, index) => {
              const isEven = index % 2 === 0;
              
              return (
                <motion.div
                  key={index}
                  className={`relative mb-12 md:mb-24 flex flex-col md:flex-row ${
                    isEven 
                      ? 'md:flex-row-reverse' 
                      : 'md:flex-row'
                  } items-start`}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                >
                  {/* Time Display - Repositioned for better mobile view */}
                  <motion.div
                    initial={{ opacity: 0, y: 20, scale: 0.9 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    className="mb-6 md:mb-0 md:w-5/12 flex justify-center md:justify-end items-start"
                  >
                    <div className={`relative z-20 bg-red-800 rounded-lg shadow-lg shadow-red-900/50 overflow-hidden transform rotate-1 hover:rotate-0 transition-transform duration-300 border border-red-700/50 ${
                      isEven ? 'md:mr-8' : 'md:ml-8'
                    }`}>
                      <div className="bg-gradient-to-r from-red-900 to-red-800 px-2 py-1">
                        <span className="text-red-100 text-xs font-semibold uppercase tracking-wider">Time</span>
                      </div>
                      <div className="bg-gradient-to-br from-black to-gray-900 px-4 py-2">
                        <span className="text-white font-bold text-lg tracking-wide">{item.time}</span>
                      </div>
                    </div>
                  </motion.div>

                  {/* Timeline Dot - Centered in Mobile, Aligned to Center in Desktop */}
                  <div className="hidden md:flex absolute left-1/2 top-0 items-center justify-center transform -translate-x-1/2 z-20">
                    <motion.div 
                      variants={pulseVariants}
                      animate="pulse"
                      className="w-5 h-5 rounded-full bg-gradient-to-r from-red-700 to-red-500 shadow-lg shadow-red-600/50"
                    />
                  </div>
                  
                  {/* Schedule Card */}
                  <motion.div
                    custom={isEven}
                    variants={timelineCardVariants}
                    whileHover="hover"
                    className="w-full md:w-5/12"
                  >
                    <div className="relative overflow-hidden bg-gradient-to-br from-gray-900 to-gray-950 rounded-xl border border-gray-800 shadow-xl shadow-black/50 group">
                      {/* Mobile timeline indicator */}
                      <div className="md:hidden absolute top-0 left-6 bottom-0 w-0.5 bg-gradient-to-b from-red-700 via-red-600 to-red-800"></div>
                      <div className="md:hidden absolute top-1/2 left-6 transform -translate-y-1/2 -translate-x-1/2">
                        <motion.div 
                          variants={pulseVariants}
                          animate="pulse"
                          className="w-4 h-4 rounded-full bg-gradient-to-r from-red-700 to-red-500 shadow-lg shadow-red-600/50"
                        />
                      </div>
                      
                      {/* Top accent border */}
                      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-red-800 via-red-600 to-red-800"></div>
                      
                      {/* Content */}
                      <div className="p-5 md:p-8 pl-10 md:pl-8">
                        <h3 className="text-xl md:text-2xl font-bold mb-3 text-white group-hover:text-red-400 transition-colors duration-300">
                          {item.title}
                        </h3>
                        
                        {item.speaker && (
                          <div className="flex items-center mb-4 gap-2 text-gray-300">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-500" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                            </svg>
                            <span className="font-medium">{item.speaker}</span>
                          </div>
                        )}
                        
                        <div className="text-gray-400 space-y-2 text-sm md:text-base">
                          <p>{item.description}</p>
                        </div>
                        
                        {/* Location indicator */}
                        {item.location && (
                          <div className="flex items-center mt-4 text-gray-400 text-xs md:text-sm">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-red-500 mr-1" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                            </svg>
                            <span>{item.location}</span>
                          </div>
                        )}
                      </div>
                      
                      {/* Hover Effect */}
                      <motion.div 
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                        className="absolute inset-0 bg-gradient-to-t from-red-900/20 to-transparent pointer-events-none"
                      />
                    </div>
                    
                    {/* Arrow connecting to timeline - Only visible on desktop */}
                    <div 
                      className={`hidden md:block absolute top-10 w-8 h-0.5 bg-red-600 ${
                        isEven 
                          ? 'right-[-2rem]' 
                          : 'left-[-2rem]'
                      }`}
                    />
                  </motion.div>
                </motion.div>
              );
            })}
          </div>

          {/* Enhanced Download Button */}
          <motion.div 
            variants={itemVariants} 
            className="text-center mt-16 md:mt-24"
          >
            <motion.div className="inline-block relative">
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
              <Button className="relative bg-gradient-to-r from-red-700 to-red-900 text-white text-base md:text-lg font-bold px-8 py-4 md:px-12 md:py-5 rounded-full shadow-lg shadow-red-700/20 border border-red-700/50 flex items-center space-x-3">
                <span>Download Full Schedule</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L10 11.586V3a1 1 0 112 0v8.586l2.293-2.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ScheduleSection;