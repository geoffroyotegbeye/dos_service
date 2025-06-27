import React from 'react';
import { 
  Users,
  Leaf,
  Award,
  DollarSign,
  CheckCircle,
  Clock
} from 'lucide-react';
import image2 from '../../assets/images/image2.jpg';

const Avantages: React.FC = () => {
  const avantages = [
    {
      icon: <Users className="w-6 h-6" />,
      title: "Équipe Locale Experte",
      description: "Personnel formé, uniformé et expérimenté de votre région"
    },
    {
      icon: <Leaf className="w-6 h-6" />,
      title: "Produits Écologiques",
      description: "Solutions respectueuses de l'environnement et de la santé"
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Service Sur-Mesure",
      description: "Prestations adaptées à vos besoins spécifiques"
    },
    {
      icon: <DollarSign className="w-6 h-6" />,
      title: "Tarifs Transparents",
      description: "Devis détaillés sans frais cachés ni surprises"
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "100% Satisfaction",
      description: "Garantie qualité"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Ponctualité",
      description: "Respect des délais et des horaires convenus"
    }
  ];

  return (
    <section id="avantages" className="py-16 lg:py-24 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Pourquoi <span className="bg-gradient-to-r from-yellow-400 to-yellow-300 bg-clip-text text-transparent">Choisir</span> Dos Services
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Notre engagement pour un service de qualité supérieure fait la différence
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl shadow-cyan-500/20 h-80 md:h-96">
              <img 
                src={image2}
                alt="Équipe de nettoyage professionnelle"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {avantages.map((avantage, index) => (
                <div key={index} className="flex space-x-4">
                  <div className="bg-gradient-to-br from-cyan-400 to-cyan-500 w-12 h-12 rounded-lg flex items-center justify-center shadow-lg shadow-cyan-500/25 shrink-0">
                    {avantage.icon}
                  </div>
                  <div>
                    <div className="font-bold text-lg">{avantage.title}</div>
                    <div className="text-sm opacity-90">{avantage.description}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Avantages;
