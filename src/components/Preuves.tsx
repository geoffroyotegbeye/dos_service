import React from 'react';
import { Camera, ArrowRight } from 'lucide-react';
import image1 from '../../assets/images/image1.jpg';
import image2 from '../../assets/images/image2.jpg';
import image3 from '../../assets/images/image3.jpg';
import image4 from '../../assets/images/image4.jpg';

const Preuves: React.FC = () => {
  const preuves = [
    {
      image: image1,
      title: "Bureau Moderne",
      description: "Nettoyage complet d'un espace de 500m² en 4h",
      type: "Bureaux"
    },
    {
      image: image2,
      title: "Villa Résidentielle",
      description: "Service hebdomadaire pour une famille de 6 personnes",
      type: "Résidentiel"
    },
    {
      image: image3,
      title: "Chantier Commercial",
      description: "Remise en état après construction d'un centre commercial",
      type: "Fin de chantier"
    },
    {
      image: image4,
      title: "Hôtel 4 étoiles",
      description: "Contrat annuel de nettoyage quotidien - 150 chambres",
      type: "Hôtellerie"
    }
  ];

  return (
    <section id="preuves" className="py-16 lg:py-24 bg-gray-800/50 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Nos <span className="bg-gradient-to-r from-yellow-400 to-yellow-300 bg-clip-text text-transparent">Réalisations</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Découvrez quelques exemples de nos prestations récentes
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {preuves.map((preuve, index) => (
            <div key={index} className="group relative bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-yellow-500/20 transition-all duration-300">
              <div className="h-64">
                <img 
                  src={preuve.image} 
                  alt={preuve.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="absolute top-4 right-4 bg-yellow-500 text-gray-900 text-xs font-bold px-3 py-1 rounded-full">
                {preuve.type}
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold mb-2">{preuve.title}</h3>
                <p className="text-gray-400 text-sm">{preuve.description}</p>
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-gray-900 to-transparent h-24 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-4 right-4 bg-yellow-500 rounded-full p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">
                <Camera className="w-5 h-5 text-gray-900" />
              </div>
            </div>
          ))}
        </div>
        
        {/* <div className="text-center mt-12">
          <button className="inline-flex items-center space-x-2 bg-gray-700 hover:bg-gray-600 text-white px-6 py-3 rounded-lg transition-all duration-300">
            <span>Voir plus de réalisations</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div> */}
      </div>
    </section>
  );
};

export default Preuves;
