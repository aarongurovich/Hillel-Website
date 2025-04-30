import React, { useState, useEffect } from 'react';
import { Menu, X, Star } from 'lucide-react';

interface NavbarProps {
  onDonateClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onDonateClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <Star className="h-8 w-8 text-blue-800" />
            <span className="ml-2 text-xl font-bold text-red-700">Texas Tech Hillel</span>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={() => scrollToSection('about')}
              className="px-3 py-2 text-gray-800 hover:text-red-700 transition-colors"
            >
              About Us
            </button>
            <button
              onClick={() => scrollToSection('events')}
              className="px-3 py-2 text-gray-800 hover:text-red-700 transition-colors"
            >
              Events
            </button>
            <button
              onClick={() => scrollToSection('student-life')}
              className="px-3 py-2 text-gray-800 hover:text-red-700 transition-colors"
            >
              Student Life
            </button>
            <button
              onClick={() => scrollToSection('gallery')}
              className="px-3 py-2 text-gray-800 hover:text-red-700 transition-colors"
            >
              Gallery
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="px-3 py-2 text-gray-800 hover:text-red-700 transition-colors"
            >
              Contact
            </button>
            <button
              onClick={onDonateClick}
              className="ml-4 px-4 py-2 bg-red-700 text-white rounded-md hover:bg-red-800 transition-colors"
            >
              Donate via Zelle
            </button>
          </div>
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-800 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <button
              onClick={() => scrollToSection('about')}
              className="block px-3 py-2 w-full text-left text-gray-800 hover:text-red-700 transition-colors"
            >
              About Us
            </button>
            <button
              onClick={() => scrollToSection('events')}
              className="block px-3 py-2 w-full text-left text-gray-800 hover:text-red-700 transition-colors"
            >
              Events
            </button>
            <button
              onClick={() => scrollToSection('student-life')}
              className="block px-3 py-2 w-full text-left text-gray-800 hover:text-red-700 transition-colors"
            >
              Student Life
            </button>
            <button
              onClick={() => scrollToSection('gallery')}
              className="block px-3 py-2 w-full text-left text-gray-800 hover:text-red-700 transition-colors"
            >
              Gallery
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="block px-3 py-2 w-full text-left text-gray-800 hover:text-red-700 transition-colors"
            >
              Contact
            </button>
            <button
              onClick={onDonateClick}
              className="block px-3 py-2 w-full text-left bg-red-700 text-white rounded-md hover:bg-red-800 transition-colors"
            >
              Donate via Zelle
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};