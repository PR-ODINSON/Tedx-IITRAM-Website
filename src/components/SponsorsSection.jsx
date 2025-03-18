import React from 'react';
import { Image, Button } from '../App';

const SponsorsSection = ({ sponsors }) => {
  return (
    <section id="sponsors" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Our <span className="text-red-600">Sponsors</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            TEDxIITRAM is made possible by the generous support of our sponsors who believe in the power of ideas.
          </p>
        </div>

        {/* Platinum Sponsors */}
        <div className="mb-16">
          <h3 className="text-xl font-bold mb-8 text-center text-white">Platinum Sponsors</h3>
          <div className="flex justify-center flex-wrap gap-12">
            {sponsors
              .filter((s) => s.tier === 'Platinum')
              .map((sponsor, index) => (
                <div
                  key={index}
                  className="p-6 bg-black border-2 border-red-600 rounded-lg hover:shadow-red-600/50 hover:shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105"
                >
                  <Image
                    src={sponsor.logo}
                    alt={sponsor.name}
                    width={250}
                    height={150}
                    className="h-24 object-contain filter grayscale hover:grayscale-0 transition-all"
                  />
                </div>
              ))}
          </div>
        </div>

        {/* Gold Sponsors */}
        <div className="mb-16">
          <h3 className="text-xl font-bold mb-8 text-center text-white">Gold Sponsors</h3>
          <div className="flex justify-center flex-wrap gap-8">
            {sponsors
              .filter((s) => s.tier === 'Gold')
              .map((sponsor, index) => (
                <div
                  key={index}
                  className="p-6 bg-black border-2 border-red-600 rounded-lg hover:shadow-red-600/50 hover:shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105"
                >
                  <Image
                    src={sponsor.logo}
                    alt={sponsor.name}
                    width={200}
                    height={120}
                    className="h-20 object-contain filter grayscale hover:grayscale-0 transition-all"
                  />
                </div>
              ))}
          </div>
        </div>

        {/* Silver Sponsors */}
        <div className="mb-16">
          <h3 className="text-xl font-bold mb-8 text-center text-white">Silver Sponsors</h3>
          <div className="flex justify-center flex-wrap gap-6">
            {sponsors
              .filter((s) => s.tier === 'Silver')
              .map((sponsor, index) => (
                <div
                  key={index}
                  className="p-6 bg-black border-2 border-red-600 rounded-lg hover:shadow-red-600/50 hover:shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105"
                >
                  <Image
                    src={sponsor.logo}
                    alt={sponsor.name}
                    width={150}
                    height={90}
                    className="h-16 object-contain filter grayscale hover:grayscale-0 transition-all"
                  />
                </div>
              ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-gray-400 mb-6">Interested in sponsoring TEDxIITRAM?</p>
          <Button className="bg-transparent border-2 border-red-600 text-white hover:bg-red-600/10 px-8 py-3 rounded-lg transition-all duration-300 ease-in-out transform hover:scale-105">
            Become a Sponsor
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SponsorsSection;