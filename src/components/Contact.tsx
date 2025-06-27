import React, { useState } from 'react';

const Contact: React.FC = () => {
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

  return (
    <section id="contact" className="py-16 lg:py-24 bg-gray-900 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-yellow-400 to-yellow-300 bg-clip-text text-transparent">Contactez</span> Nous
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
  );
};

export default Contact;
