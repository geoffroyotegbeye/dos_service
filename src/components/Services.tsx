import React from 'react';
import { 
  Home, 
  Building2, 
  HardHat, 
  Sparkles, 
  Calendar, 
  Star,
  Shield,
  Zap
} from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: <Home className="w-8 h-8" />,
      title: "Nettoyage Résidentiel",
      description: "Maisons, appartements, villas - Service complet et personnalisé",
      details: ["Sols et surfaces", "Sanitaires", "Cuisine", "Chambres", "Espaces extérieurs"]
    },
    {
      icon: <Building2 className="w-8 h-8" />,
      title: "Nettoyage de Bureaux",
      description: "Espaces professionnels impeccables pour votre entreprise",
      details: ["Open spaces", "Salles de réunion", "Accueil", "Sanitaires", "Espaces communs"]
    },
    {
      icon: <HardHat className="w-8 h-8" />,
      title: "Fin de Chantier",
      description: "Remise en état après travaux de construction ou rénovation",
      details: ["Déblaiement", "Nettoyage poussières", "Vitres", "Sols spécialisés", "Finitions"]
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "Nettoyage de Vitres",
      description: "Vitres brillantes et transparentes, intérieur et extérieur",
      details: ["Façades", "Baies vitrées", "Miroirs", "Verrières", "Hauteur accessible"]
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: "Post-Événementiel",
      description: "Nettoyage après mariages, fêtes, conférences et événements",
      details: ["Salles de réception", "Espaces extérieurs", "Matériel", "Déchets", "Remise en état"]
    },
    {
      icon: <Calendar className="w-8 h-8" />,
      title: "Contrats Réguliers",
      description: "Services programmés : quotidien, hebdomadaire ou mensuel",
      details: ["Planning flexible", "Équipe dédiée", "Suivi qualité", "Tarifs préférentiels", "Maintenance"]
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Nettoyage Express",
      description: "Interventions rapides et urgentes sous 24h",
      details: ["Urgences", "Dernière minute", "Week-ends", "Jours fériés", "Service 24/7"]
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Désinfection Spécialisée",
      description: "Protocoles sanitaires renforcés et désinfection professionnelle",
      details: ["COVID-19", "Espaces médicaux", "Écoles", "Restaurants", "Certification"]
    }
  ];

  return (
    <section id="services" className="py-16 lg:py-24 bg-gray-800/50 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Nos <span className="bg-gradient-to-r from-yellow-400 to-yellow-300 bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Une gamme complète de services de nettoyage professionnel adaptée à tous vos besoins
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div key={index} className="bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-gray-700 hover:border-yellow-500/50 transition-all duration-300 hover:shadow-yellow-500/10">
              <div className="bg-gradient-to-br from-yellow-400 to-yellow-500 w-16 h-16 rounded-lg flex items-center justify-center mb-6 shadow-lg shadow-yellow-500/25">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{service.title}</h3>
              <p className="text-gray-400 mb-4">{service.description}</p>
              <ul className="space-y-2">
                {service.details.map((detail, detailIndex) => (
                  <li key={detailIndex} className="flex items-center text-sm text-gray-300">
                    <div className="w-1.5 h-1.5 rounded-full bg-yellow-400 mr-2"></div>
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
