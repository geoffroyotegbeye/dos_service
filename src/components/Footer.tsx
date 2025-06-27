import React from 'react';
import { Phone, Mail, MapPin, MessageCircle, Facebook, Instagram } from 'lucide-react';
import logoImg from '../../assets/images/logo_img.jpg';

interface FooterProps {
  scrollToSection: (sectionId: string) => void;
}

const Footer: React.FC<FooterProps> = ({ scrollToSection }) => {
  return (
    <footer className="bg-gray-900 border-t border-gray-800 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center shadow-lg shadow-yellow-500/25 overflow-hidden">
                <img src={logoImg} alt="Dos Services Logo" className="w-full h-full object-cover" />
              </div>
              <div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-300 bg-clip-text text-transparent">
                  Dos Services
                </h3>
              </div>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Votre partenaire de confiance pour tous vos besoins de nettoyage professionnel. 
              Qualité, fiabilité et satisfaction garanties.
            </p>
            
            <div className="flex space-x-4">
              <a 
                href="https://wa.me/1234567890" 
                className="bg-green-600 hover:bg-green-500 p-3 rounded-full transition-all duration-300 shadow-lg shadow-green-600/25 hover:shadow-green-500/30"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
              <a 
                href="https://facebook.com" 
                className="bg-blue-600 hover:bg-blue-500 p-3 rounded-full transition-all duration-300 shadow-lg shadow-blue-600/25 hover:shadow-blue-500/30"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="https://instagram.com" 
                className="bg-pink-600 hover:bg-pink-500 p-3 rounded-full transition-all duration-300 shadow-lg shadow-pink-600/25 hover:shadow-pink-500/30"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6 text-yellow-400">Services</h4>
            <ul className="space-y-3 text-gray-300">
              <li><button onClick={() => scrollToSection('services')} className="hover:text-yellow-400 transition-colors duration-200">Nettoyage Résidentiel</button></li>
              <li><button onClick={() => scrollToSection('services')} className="hover:text-yellow-400 transition-colors duration-200">Bureaux</button></li>
              <li><button onClick={() => scrollToSection('services')} className="hover:text-yellow-400 transition-colors duration-200">Fin de chantier</button></li>
              <li><button onClick={() => scrollToSection('services')} className="hover:text-yellow-400 transition-colors duration-200">Nettoyage vitres</button></li>
              <li><button onClick={() => scrollToSection('services')} className="hover:text-yellow-400 transition-colors duration-200">Post-Événementiel</button></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6 text-yellow-400">Contact</h4>
            <div className="space-y-4 text-gray-300">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-cyan-400" />
                <span>+229 42085823</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-cyan-400" />
                <span>dossophonie@gmail.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-cyan-400 mt-1" />
                <span>Service à domicile et en entreprise</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Dos Services. Tous droits réservés. | 
            <a href="#" className="hover:text-yellow-400 transition-colors duration-200 ml-2">Mentions légales</a> | 
            <a href="#" className="hover:text-yellow-400 transition-colors duration-200 ml-2">Politique de confidentialité</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
