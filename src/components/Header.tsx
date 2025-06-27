import React, { useState } from 'react';
import logoImg from '../../assets/images/logo_img.jpg';

interface HeaderProps {
  scrollToSection: (sectionId: string) => void;
}

const Header: React.FC<HeaderProps> = ({ scrollToSection }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleMobileNavClick = (sectionId: string) => {
    scrollToSection(sectionId);
    setMobileMenuOpen(false);
  };
  return (
    <header className="bg-gray-900/95 backdrop-blur-sm border-b border-gray-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 rounded-xl flex items-center justify-center shadow-lg shadow-yellow-500/25 overflow-hidden">
              <img src={logoImg} alt="Dos Services Logo" className="w-full h-full object-cover" />
            </div>
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-300 bg-clip-text text-transparent">
                Dos Services
              </h1>
              <p className="text-sm text-gray-400">Nettoyage professionnel</p>
            </div>
          </div>
          
          {/* Navigation desktop */}
          <nav className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('services')} className="text-gray-300 hover:text-yellow-400 transition-colors duration-200">
              Services
            </button>
            <button onClick={() => scrollToSection('avantages')} className="text-gray-300 hover:text-yellow-400 transition-colors duration-200">
              Pourquoi nous
            </button>
            <button onClick={() => scrollToSection('preuves')} className="text-gray-300 hover:text-yellow-400 transition-colors duration-200">
              Réalisations
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="bg-gradient-to-r from-yellow-500 to-yellow-400 hover:from-yellow-400 hover:to-yellow-300 text-gray-900 px-5 py-2 rounded-lg transition-all duration-300 shadow-lg shadow-yellow-500/25 hover:shadow-yellow-400/30"
            >
              Contactez-nous
            </button>
          </nav>
          
          {/* Bouton menu mobile */}
          <button 
            onClick={toggleMobileMenu} 
            className="md:hidden flex flex-col space-y-1.5 p-2"
            aria-label="Menu"
          >
            <span className={`block w-6 h-0.5 bg-yellow-400 transition-transform duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-yellow-400 transition-opacity duration-300 ${mobileMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-yellow-400 transition-transform duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </button>
        </div>
        
        {/* Menu mobile */}
        <div className={`md:hidden transition-all duration-300 overflow-hidden ${mobileMenuOpen ? 'max-h-80 opacity-100 py-4' : 'max-h-0 opacity-0'}`}>
          <nav className="flex flex-col space-y-4 px-4">
            <button onClick={() => handleMobileNavClick('services')} className="text-left text-gray-300 hover:text-yellow-400 transition-colors duration-200 py-2 border-b border-gray-800">
              Services
            </button>
            <button onClick={() => handleMobileNavClick('avantages')} className="text-left text-gray-300 hover:text-yellow-400 transition-colors duration-200 py-2 border-b border-gray-800">
              Pourquoi nous
            </button>
            <button onClick={() => handleMobileNavClick('preuves')} className="text-left text-gray-300 hover:text-yellow-400 transition-colors duration-200 py-2 border-b border-gray-800">
              Réalisations
            </button>
            <button 
              onClick={() => handleMobileNavClick('contact')}
              className="bg-gradient-to-r from-yellow-500 to-yellow-400 hover:from-yellow-400 hover:to-yellow-300 text-gray-900 px-5 py-2 rounded-lg transition-all duration-300 shadow-lg shadow-yellow-500/25 hover:shadow-yellow-400/30 text-center"
            >
              Contactez-nous
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
