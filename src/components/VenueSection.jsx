import React from 'react';
import { Image, Button } from '../App'; // Import Button and Image from App.jsx
import { MapPin, ArrowRight } from 'lucide-react'; // Import Lucide icons from lucide-react

const VenueSection = () => {
  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          {/* Left Section: Text Content */}
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Event <span className="text-red-600">Venue</span>
            </h2>
            <p className="text-gray-300 mb-6">
              TEDxIITRAM 2024 will be held at the state-of-the-art auditorium at IIT Rajasthan Ahmedabad Campus. The venue is equipped with modern facilities to ensure a comfortable and engaging experience for all attendees.
            </p>

            {/* Address Section */}
            <div className="flex items-start gap-4 mb-6">
              <MapPin className="w-5 h-5 text-red-600 mt-1" />
              <div>
                <h4 className="font-bold mb-1 text-white">IIT Rajasthan Ahmedabad Campus</h4>
                <p className="text-gray-400">
                  Palaj, Gandhinagar<br />
                  Gujarat 382355, India
                </p>
              </div>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {[
                'Free Parking',
                'Wi-Fi Access',
                'Wheelchair Accessible',
                'Food Court',
              ].map((feature, index) => (
                <div key={index} className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-red-600"></div>
                  <span className="text-gray-400">{feature}</span>
                </div>
              ))}
            </div>

            {/* Get Directions Button */}
            <Button className="bg-transparent border-2 border-red-600 text-white hover:bg-red-600/10 px-8 py-3 rounded-lg transition-all duration-300 ease-in-out transform hover:scale-105 flex items-center">
              Get Directions <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>

          {/* Right Section: Image */}
          <div className="w-full md:w-1/2">
            <div className="relative h-80 md:h-96 w-full overflow-hidden rounded-lg border-2 border-red-600">
              <Image
                src="/placeholder.svg?height=600&width=800&text=IIT+Campus+Map"
                alt="IIT Rajasthan Ahmedabad Campus"
                fill
                className="object-cover hover:scale-105 transition-all duration-300 ease-in-out"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VenueSection;