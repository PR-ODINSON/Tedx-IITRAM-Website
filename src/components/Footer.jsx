import React from 'react';
import { Instagram, Twitter, Facebook, Linkedin, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black py-16 border-t border-gray-800">
      <div className="container mx-auto px-4">
        {/* Top Section: Logo and Social Media */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          {/* Logo */}
          <div className="flex items-center mb-6 md:mb-0">
            <div className="text-3xl font-bold">
              <span className="text-red-600">TEDx</span>
              <span className="text-white">IITRAM</span>
            </div>
          </div>

          {/* Social Media Icons */}
          <div className="flex space-x-6">
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
            <a
              href="#"
              className="text-gray-400 hover:text-red-600 transition-colors duration-300 transform hover:scale-110"
            >
              <Youtube className="w-6 h-6" />
            </a>
          </div>
        </div>

        {/* Middle Section: Links */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-800">
          {/* Copyright */}
          <div className="text-sm text-gray-500 mb-4 md:mb-0">
            © 2024 TEDxIITRAM. All rights reserved.
          </div>

          {/* Footer Links */}
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-2">
            <a
              href="#"
              className="text-sm text-gray-400 hover:text-red-600 transition-colors duration-300"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-sm text-gray-400 hover:text-red-600 transition-colors duration-300"
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="text-sm text-gray-400 hover:text-red-600 transition-colors duration-300"
            >
              Cookie Policy
            </a>
            <a
              href="#"
              className="text-sm text-gray-400 hover:text-red-600 transition-colors duration-300"
            >
              Contact Us
            </a>
          </div>
        </div>

        {/* Bottom Section: TED License Notice */}
        <div className="text-xs text-gray-600 text-center mt-8">
          This independent TEDx event is operated under license from TED.
        </div>
      </div>
    </footer>
  );
};

export default Footer;