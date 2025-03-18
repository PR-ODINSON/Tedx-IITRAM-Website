import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from '../App'; // Assuming Link is defined in App.jsx or imported
import { Button } from '../App'; // Assuming Button is defined in App.jsx or imported

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) setIsScrolled(true);
      else setIsScrolled(false);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-black/90 backdrop-blur-md py-3 shadow-lg' : 'bg-transparent py-4'}`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="#" className="flex items-center space-x-2">
          <div className="text-2xl md:text-3xl font-bold">
            <span className="text-red-600">TEDx</span>
            <span className="text-white">IITRAM</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link href="#about" className="text-white hover:text-red-600 transition-colors duration-300 relative group text-lg">
            About
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-600 transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link href="#speakers" className="text-white hover:text-red-600 transition-colors duration-300 relative group text-lg">
            Speakers
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-600 transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link href="#schedule" className="text-white hover:text-red-600 transition-colors duration-300 relative group text-lg">
            Schedule
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-600 transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link href="#sponsors" className="text-white hover:text-red-600 transition-colors duration-300 relative group text-lg">
            Sponsors
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-600 transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link href="#contact" className="text-white hover:text-red-600 transition-colors duration-300 relative group text-lg">
            Contact
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-600 transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 text-lg">
            Register
          </Button>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-white p-2 rounded-lg hover:bg-gray-800 transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden absolute w-full bg-black/95 backdrop-blur-md transition-all duration-300 overflow-hidden ${isMenuOpen ? 'max-h-screen py-6' : 'max-h-0'}`}
      >
        <div className="container mx-auto px-4 flex flex-col space-y-6">
          <Link
            href="#about"
            className="text-white hover:text-red-600 py-3 border-b border-gray-800 transition-colors duration-300 text-xl"
            onClick={() => setIsMenuOpen(false)}
          >
            About
          </Link>
          <Link
            href="#speakers"
            className="text-white hover:text-red-600 py-3 border-b border-gray-800 transition-colors duration-300 text-xl"
            onClick={() => setIsMenuOpen(false)}
          >
            Speakers
          </Link>
          <Link
            href="#schedule"
            className="text-white hover:text-red-600 py-3 border-b border-gray-800 transition-colors duration-300 text-xl"
            onClick={() => setIsMenuOpen(false)}
          >
            Schedule
          </Link>
          <Link
            href="#sponsors"
            className="text-white hover:text-red-600 py-3 border-b border-gray-800 transition-colors duration-300 text-xl"
            onClick={() => setIsMenuOpen(false)}
          >
            Sponsors
          </Link>
          <Link
            href="#contact"
            className="text-white hover:text-red-600 py-3 border-b border-gray-800 transition-colors duration-300 text-xl"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </Link>
          <Button className="bg-red-600 hover:bg-red-700 text-white w-full rounded-lg py-3 transition-all duration-300 transform hover:scale-105 text-xl">
            Register
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;