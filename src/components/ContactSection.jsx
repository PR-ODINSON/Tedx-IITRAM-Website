import React from 'react';
import { Button } from '../App'; // Import Button from App.jsx
import { Mail, Phone, Instagram, Twitter, Facebook, Linkedin } from 'lucide-react'; // Import Lucide icons from lucide-react

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Get in <span className="text-red-600">Touch</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Have questions about TEDxIITRAM? We’re here to help. Reach out to us through any of the channels below.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {/* Email Card */}
          <div className="bg-black border-2 border-red-600 p-8 text-center rounded-lg hover:shadow-red-600/50 hover:shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105">
            <Mail className="w-8 h-8 text-red-600 mx-auto mb-4" />
            <h3 className="text-lg font-bold mb-2 text-white">Email Us</h3>
            <p className="text-gray-400 mb-4">For general inquiries and information</p>
            <a
              href="mailto:info@tedxiitram.org"
              className="text-red-600 hover:text-red-500 transition-colors duration-300"
            >
              info@tedxiitram.org
            </a>
          </div>

          {/* Phone Card */}
          <div className="bg-black border-2 border-red-600 p-8 text-center rounded-lg hover:shadow-red-600/50 hover:shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105">
            <Phone className="w-8 h-8 text-red-600 mx-auto mb-4" />
            <h3 className="text-lg font-bold mb-2 text-white">Call Us</h3>
            <p className="text-gray-400 mb-4">Monday to Friday, 9am - 5pm</p>
            <a
              href="tel:+919876543210"
              className="text-red-600 hover:text-red-500 transition-colors duration-300"
            >
              +91 98765 43210
            </a>
          </div>

          {/* Social Media Card */}
          <div className="bg-black border-2 border-red-600 p-8 text-center rounded-lg hover:shadow-red-600/50 hover:shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105">
            <div className="flex justify-center space-x-4 mb-4">
              <a
                href="#"
                className="text-gray-400 hover:text-red-600 transition-colors duration-300 transform hover:scale-110"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-red-600 transition-colors duration-300 transform hover:scale-110"
              >
                <Twitter className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-red-600 transition-colors duration-300 transform hover:scale-110"
              >
                <Facebook className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-red-600 transition-colors duration-300 transform hover:scale-110"
              >
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
            <h3 className="text-lg font-bold mb-2 text-white">Follow Us</h3>
            <p className="text-gray-400 mb-4">Stay updated with the latest news</p>
            <a
              href="#"
              className="text-red-600 hover:text-red-500 transition-colors duration-300"
            >
              @tedxiitram
            </a>
          </div>
        </div>

        {/* Register Button */}
        <div className="mt-16 text-center">
          <Button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg transition-all duration-300 ease-in-out transform hover:scale-105">
            Register for TEDxIITRAM 2024
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;