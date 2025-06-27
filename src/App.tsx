import React, { useState } from 'react';
import { 
  Home, 
  Building2, 
  HardHat, 
  Sparkles, 
  Calendar, 
  Users,
  Leaf,
  Award,
  DollarSign,
  CheckCircle,
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  Facebook,
  Instagram,
  Star,
  Clock,
  Shield,
  Zap,
  Camera,
  ArrowRight
} from 'lucide-react';

// Import des images
import logoImg from '../assets/images/logo_img.jpg';
import image1 from '../assets/images/image1.jpg';
import image2 from '../assets/images/image2.jpg';
import image3 from '../assets/images/image3.jpg';
import image4 from '../assets/images/image4.jpg';
import image5 from '../assets/images/image5.jpg';

function App() {
  const [formData, setFormData] = useState({
    nom: '',
    email: '',
    telephone: '',
    service: '',
    adresse: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Demande de devis envoyée ! Nous vous contacterons rapidement.');
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

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
      description: "Solutions adaptées à vos besoins spécifiques et contraintes"
    },
    {
      icon: <DollarSign className="w-6 h-6" />,
      title: "Tarifs Transparents",
      description: "Devis gratuits, prix justes et sans surprise"
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "Satisfaction Garantie",
      description: "Engagement qualité avec reprise gratuite si nécessaire"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Ponctualité Assurée",
      description: "Respect des horaires et des délais convenus"
    }
  ];

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
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
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
                <p className="text-sm text-gray-400 hidden sm:block">Le nettoyage de qualité professionnel</p>
              </div>
            </div>
            <button 
              onClick={() => scrollToSection('contact')}
              className="bg-gradient-to-r from-yellow-500 to-yellow-400 hover:from-yellow-400 hover:to-yellow-300 text-gray-900 px-6 py-2 rounded-full font-semibold transition-all duration-300 shadow-lg shadow-yellow-500/25 hover:shadow-yellow-400/30"
            >
              Contactez-nous
            </button>
          </div>
          <p className="text-sm text-gray-400 pb-2 sm:hidden">Le nettoyage de qualité professionnel</p>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-16 lg:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/5 to-cyan-500/5"></div>
        <div className="absolute top-20 left-10 w-72 h-72 bg-yellow-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                Votre partenaire 
                <span className="bg-gradient-to-r from-yellow-400 to-yellow-300 bg-clip-text text-transparent"> nettoyage</span>
                <br />
                <span className="text-cyan-400 glow-text">professionnel</span>
              </h2>
              <p className="text-lg sm:text-xl mb-8 text-gray-300 leading-relaxed">
                Dos Services vous accompagne avec une équipe d'experts et des solutions 
                innovantes pour tous vos besoins de nettoyage professionnel.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="bg-gradient-to-r from-yellow-500 to-yellow-400 hover:from-yellow-400 hover:to-yellow-300 text-gray-900 px-8 py-4 rounded-full font-semibold transition-all duration-300 text-center shadow-lg shadow-yellow-500/25 hover:shadow-yellow-400/30 flex items-center justify-center space-x-2"
                >
                  <span>Devis gratuit</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="border-2 border-cyan-400 hover:bg-cyan-400/10 text-cyan-400 px-8 py-4 rounded-full font-semibold transition-all duration-300 text-center glow-border"
                >
                  Nos services
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-yellow-500/20 h-96">
                <img 
                  src={image5} 
                  alt="Équipe de nettoyage professionnelle"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent"></div>
              </div>
              <div className="absolute -bottom-6 -left-6 bg-gradient-to-r from-cyan-500 to-cyan-400 text-white p-6 rounded-xl shadow-lg shadow-cyan-500/25">
                <div className="flex items-center space-x-3">
                  <Star className="w-6 h-6 fill-current" />
                  <div>
                    <div className="font-bold text-lg">100% Satisfaction</div>
                    <div className="text-sm opacity-90">Garantie qualité</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
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
              <div 
                key={index} 
                className="bg-gray-800/80 backdrop-blur-sm hover:bg-gray-700/80 p-6 rounded-2xl transition-all duration-300 border border-gray-700 hover:border-yellow-500/50 group hover:shadow-lg hover:shadow-yellow-500/10"
              >
                <div className="text-yellow-400 mb-4 group-hover:text-cyan-400 transition-colors duration-300">
                  {service.icon}
                </div>
                <h3 className="text-lg font-semibold mb-3 text-white">{service.title}</h3>
                <p className="text-gray-300 text-sm mb-4">{service.description}</p>
                <ul className="space-y-1">
                  {service.details.map((detail, idx) => (
                    <li key={idx} className="text-xs text-gray-400 flex items-center space-x-2">
                      <div className="w-1 h-1 bg-yellow-400 rounded-full"></div>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 lg:py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl shadow-cyan-500/20">
                <img 
                  src={image2}
                  alt="Équipe de nettoyage professionnelle"
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent"></div>
              </div>
            </div>
            <div>
              <h2 className="text-4xl sm:text-5xl font-bold mb-8">
                Pourquoi choisir 
                <span className="bg-gradient-to-r from-yellow-400 to-yellow-300 bg-clip-text text-transparent"> Dos Services</span> ?
              </h2>
              
              <div className="space-y-6">
                {avantages.map((avantage, index) => (
                  <div key={index} className="flex items-start space-x-4 p-4 rounded-xl bg-gray-800/30 border border-gray-700/50 hover:border-yellow-500/30 transition-all duration-300">
                    <div className="text-cyan-400 mt-1 p-2 bg-cyan-500/10 rounded-lg">
                      {avantage.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-1">{avantage.title}</h3>
                      <p className="text-gray-300">{avantage.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Preuves d'intervention */}
      <section className="py-16 lg:py-24 bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              Nos <span className="bg-gradient-to-r from-cyan-400 to-cyan-300 bg-clip-text text-transparent">Réalisations</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Découvrez quelques-unes de nos interventions réussies
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {preuves.map((preuve, index) => (
              <div key={index} className="group relative overflow-hidden rounded-2xl bg-gray-800 border border-gray-700 hover:border-yellow-500/50 transition-all duration-300">
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={preuve.image}
                    alt={preuve.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent"></div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <div className="inline-block px-2 py-1 bg-yellow-500 text-gray-900 text-xs font-semibold rounded-full mb-2">
                    {preuve.type}
                  </div>
                  <h3 className="font-semibold text-white mb-1">{preuve.title}</h3>
                  <p className="text-sm text-gray-300">{preuve.description}</p>
                </div>
                <div className="absolute top-4 right-4">
                  <Camera className="w-5 h-5 text-white/70" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact" className="py-16 lg:py-24 bg-gray-900 scroll-mt-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              Demandez votre <span className="bg-gradient-to-r from-yellow-400 to-yellow-300 bg-clip-text text-transparent">devis gratuit</span>
            </h2>
            <p className="text-xl text-gray-300">
              Remplissez le formulaire ci-dessous et nous vous contacterons rapidement
            </p>
          </div>

          <form onSubmit={handleSubmit} className="bg-gray-800/80 backdrop-blur-sm p-8 rounded-2xl shadow-2xl border border-gray-700">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="nom" className="block text-sm font-medium text-gray-300 mb-2">
                  Nom complet *
                </label>
                <input
                  type="text"
                  id="nom"
                  name="nom"
                  required
                  value={formData.nom}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition-colors duration-200 text-white placeholder-gray-400"
                  placeholder="Votre nom complet"
                />
              </div>
              
              <div>
                <label htmlFor="telephone" className="block text-sm font-medium text-gray-300 mb-2">
                  Téléphone *
                </label>
                <input
                  type="tel"
                  id="telephone"
                  name="telephone"
                  required
                  value={formData.telephone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition-colors duration-200 text-white placeholder-gray-400"
                  placeholder="+xxx xx xx xx xx"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition-colors duration-200 text-white placeholder-gray-400"
                  placeholder="votre@email.com"
                />
              </div>
              
              <div>
                <label htmlFor="service" className="block text-sm font-medium text-gray-300 mb-2">
                  Type de service *
                </label>
                <select
                  id="service"
                  name="service"
                  required
                  value={formData.service}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition-colors duration-200 text-white"
                >
                  <option value="">Sélectionnez un service</option>
                  <option value="residentiel">Nettoyage Résidentiel</option>
                  <option value="bureau">Nettoyage de Bureaux</option>
                  <option value="chantier">Fin de Chantier</option>
                  <option value="vitres">Nettoyage de Vitres</option>
                  <option value="evenement">Post-Événementiel</option>
                  <option value="regulier">Contrats Réguliers</option>
                  <option value="express">Nettoyage Express</option>
                  <option value="desinfection">Désinfection Spécialisée</option>
                </select>
              </div>
            </div>

            <div className="mb-6">
              <label htmlFor="adresse" className="block text-sm font-medium text-gray-300 mb-2">
                Adresse *
              </label>
              <input
                type="text"
                id="adresse"
                name="adresse"
                required
                value={formData.adresse}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition-colors duration-200 text-white placeholder-gray-400"
                placeholder="Adresse complète du service"
              />
            </div>

            <div className="mb-6">
              <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition-colors duration-200 text-white placeholder-gray-400"
                placeholder="Détails supplémentaires sur vos besoins..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-yellow-500 to-yellow-400 hover:from-yellow-400 hover:to-yellow-300 text-gray-900 font-semibold py-4 px-8 rounded-lg transition-all duration-300 text-lg shadow-lg shadow-yellow-500/25 hover:shadow-yellow-400/30"
            >
              Demander un devis gratuit
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 border-t border-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-xl flex items-center justify-center shadow-lg shadow-yellow-500/25">
                  <Sparkles className="w-7 h-7 text-gray-900" />
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
                  <span>+xxx xx xx xx xx</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-cyan-400" />
                  <span>contact@dosservices.com</span>
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
    </div>
  );
}

export default App;