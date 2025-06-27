import React from 'react';
import image5 from '../../assets/images/image5.jpg';

interface HeroProps {
  scrollToSection: (sectionId: string) => void;
}

const Hero: React.FC<HeroProps> = ({ scrollToSection }) => {
  return (
    <section className="py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Services de <span className="bg-gradient-to-r from-yellow-400 to-yellow-300 bg-clip-text text-transparent">Nettoyage</span> Professionnel
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Des solutions de nettoyage complètes pour particuliers et professionnels. 
              Qualité, fiabilité et satisfaction garanties.
            </p>
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <button 
                onClick={() => scrollToSection('services')}
                className="bg-gradient-to-r from-yellow-500 to-yellow-400 hover:from-yellow-400 hover:to-yellow-300 text-gray-900 px-8 py-4 rounded-lg transition-all duration-300 shadow-lg shadow-yellow-500/25 hover:shadow-yellow-400/30 text-lg font-semibold"
              >
                Découvrir nos services
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="bg-gray-800 hover:bg-gray-700 text-gray-100 px-8 py-4 rounded-lg transition-all duration-300 shadow-lg shadow-gray-800/25 hover:shadow-gray-700/30 text-lg font-semibold"
              >
                Demander un devis
              </button>
            </div>
          </div>
          
          <div className="relative mt-6 lg:mt-0">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-yellow-500/20 h-96">
              <img 
                src={image5} 
                alt="Équipe de nettoyage professionnelle"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-gray-900 to-transparent opacity-60"></div>
              <div className="absolute bottom-0 left-0 p-6">
                <div className="bg-gray-900/80 backdrop-blur-sm p-4 rounded-lg inline-block">
                  <p className="text-yellow-400 font-semibold">Entreprise certifiée</p>
                  <p className="text-white">Plus de 500 clients satisfaits</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
