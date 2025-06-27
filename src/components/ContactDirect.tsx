import React from 'react';
import { Mail, MessageCircle } from 'lucide-react';

const ContactDirect: React.FC = () => {
  // Informations de contact
  const email = "dossophonie@gmail.com";
  const whatsappNumber = "+22942085823"; // Format international sans espaces pour WhatsApp
  const displayNumber = "+229 42085823"; // Format d'affichage avec espaces
  
  // Fonction pour ouvrir WhatsApp
  const openWhatsApp = () => {
    window.open(`https://wa.me/${whatsappNumber}`, '_blank');
  };
  
  // Fonction pour ouvrir l'email
  const openEmail = () => {
    window.open(`mailto:${email}`, '_blank');
  };

  return (
    <section id="contact" className="py-16 lg:py-24 bg-gray-900 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-yellow-400 to-yellow-300 bg-clip-text text-transparent">Contactez</span> Nous
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Nous sommes disponibles pour répondre à toutes vos questions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* WhatsApp Button */}
          <div 
            onClick={openWhatsApp}
            className="bg-gradient-to-br from-green-500 to-green-600 hover:from-green-400 hover:to-green-500 rounded-2xl p-8 text-center cursor-pointer transition-all duration-300 shadow-xl hover:shadow-green-500/20 transform hover:-translate-y-1"
          >
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-6">
              <MessageCircle className="w-12 h-12 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">WhatsApp</h3>
            <p className="text-green-100 mb-4">{displayNumber}</p>
            <div className="bg-white/20 backdrop-blur-sm py-3 px-6 rounded-lg inline-block">
              <span className="text-white font-medium">Cliquez pour discuter</span>
            </div>
          </div>

          {/* Email Button */}
          <div 
            onClick={openEmail}
            className="bg-gradient-to-br from-blue-500 to-blue-600 hover:from-blue-400 hover:to-blue-500 rounded-2xl p-8 text-center cursor-pointer transition-all duration-300 shadow-xl hover:shadow-blue-500/20 transform hover:-translate-y-1"
          >
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-6">
              <Mail className="w-12 h-12 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">Email</h3>
            <p className="text-blue-100 mb-4">{email}</p>
            <div className="bg-white/20 backdrop-blur-sm py-3 px-6 rounded-lg inline-block">
              <span className="text-white font-medium">Cliquez pour envoyer un email</span>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-400">
            Nous vous répondrons dans les plus brefs délais
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactDirect;
