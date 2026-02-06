import {Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4 bg-[#0a0a1f] backdrop-blur-sm border-b border-gray-800">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <button onClick={() => scrollToSection('hero')} className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity">
          <img src="/nextreach-logo.svg" alt="NextReach Logo" className="w-8 h-8" />
          <span className="text-white font-semibold text-lg">NextReach</span>
        </button>

        <div className="hidden md:flex items-center gap-8 text-sm">
          <button onClick={() => scrollToSection('hero')} className="text-gray-300 hover:text-white transition-colors">
            Home
          </button>
          <button onClick={() => scrollToSection('services')} className="text-gray-300 hover:text-white transition-colors">
            Services
          </button>
          <button onClick={() => scrollToSection('results')} className="text-gray-300 hover:text-white transition-colors">
            Results
          </button>
          <button onClick={() => scrollToSection('revenue')} className="text-gray-300 hover:text-white transition-colors">
            Case Studies
          </button>
          <button onClick={() => scrollToSection('schedule')} className="text-gray-300 hover:text-white transition-colors">
            Contact
          </button>
        </div>

        <div className="flex items-center gap-4">
          <a href="https://forms.gle/chBTyeiDtwkHFqN88" target="_blank" rel="noopener noreferrer" className="hidden sm:inline-block bg-white text-gray-900 px-6 py-2 rounded-full text-sm font-medium hover:bg-gray-100 transition-colors">
            Get started
          </a>
          <button 
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-[#0a0a1f] border-b border-gray-800 p-4">
          <div className="space-y-4">
            <button onClick={() => scrollToSection('hero')} className="block w-full text-left text-white font-medium hover:text-blue-400 transition-colors py-2">
              Home
            </button>
            <button onClick={() => scrollToSection('services')} className="block w-full text-left text-white font-medium hover:text-blue-400 transition-colors py-2">
              Services
            </button>
            <button onClick={() => scrollToSection('results')} className="block w-full text-left text-white font-medium hover:text-blue-400 transition-colors py-2">
              Results
            </button>
            <button onClick={() => scrollToSection('revenue')} className="block w-full text-left text-white font-medium hover:text-blue-400 transition-colors py-2">
              Case Studies
            </button>
            <button onClick={() => scrollToSection('schedule')} className="block w-full text-left text-white font-medium hover:text-blue-400 transition-colors py-2">
              Contact
            </button>
            <div className="pt-4 border-t border-gray-800">
              <a href="https://docs.google.com/forms/d/1MAvBvSx6XTzDRbKR5ryKYeoV6vABC3fMnbO6y26E9Ps/edit" target="_blank" rel="noopener noreferrer" className="block w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-medium text-center hover:from-blue-700 hover:to-purple-700 transition-all">
                Get started
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
