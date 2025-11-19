import React from 'react';
import { Building2, Users2, Phone, ArrowRight, CheckCircle2 } from 'lucide-react';

const Institutions: React.FC = () => {
  return (
    <section id="institutions" className="py-20 bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-kalis-navy mb-4">Espace Institutions & Partenaires</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Kalis Voyage propose des solutions sur-mesure pour les délégations officielles, les associations islamiques et les comités d'entreprise.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          
          {/* Column 1: State & Public */}
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-kalis-navy text-white rounded-lg flex items-center justify-center shadow-lg">
                <Building2 size={24} />
              </div>
              <h3 className="font-serif text-xl font-bold text-kalis-navy">État & Organismes Publics</h3>
            </div>
            <p className="text-gray-600 mb-6 leading-relaxed text-sm">
              Partenaire de confiance pour les missions officielles. Nous assurons la gestion logistique complète pour les délégations gouvernementales et les agences publiques.
            </p>
            <ul className="space-y-3 mb-8">
              {[
                "Protocoles VIP & Accueil aéroport",
                "Gestion des quotas officiels",
                "Facturation administrative normalisée",
                "Rapport de mission post-Hadj"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                  <CheckCircle2 size={16} className="text-kalis-gold mt-0.5 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: Associations */}
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-kalis-gold text-kalis-dark rounded-lg flex items-center justify-center shadow-lg">
                <Users2 size={24} />
              </div>
              <h3 className="font-serif text-xl font-bold text-kalis-navy">Associations & Mosquées</h3>
            </div>
            <p className="text-gray-600 mb-6 leading-relaxed text-sm">
              Nous accompagnons les imams et présidents d'associations dans l'organisation de groupes constitués (Hadj ou Omra).
            </p>
            <ul className="space-y-3 mb-8">
              {[
                "Tarifs de groupe négociés",
                "Séances d'information dans vos locaux",
                "Prise en charge des accompagnateurs",
                "Gestion complète des visas"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                  <CheckCircle2 size={16} className="text-kalis-gold mt-0.5 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Contact Block for Institutions */}
        <div className="bg-kalis-navy rounded-xl p-8 md:p-12 text-white flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 p-12 bg-white/5 rounded-full -mr-16 -mt-16 blur-2xl"></div>
          
          <div className="relative z-10">
            <h3 className="font-serif text-2xl font-bold mb-2">Une demande spécifique ?</h3>
            <p className="text-gray-300 max-w-xl">
              Contactez notre service dédié aux partenariats pour une proposition adaptée à votre structure.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 relative z-10">
            <a href="tel:+22320220000" className="flex items-center justify-center gap-2 bg-white text-kalis-navy px-6 py-3 rounded font-bold hover:bg-gray-100 transition-colors">
              <Phone size={18} />
              +223 20 22 00 00
            </a>
            <a href="#contact" className="flex items-center justify-center gap-2 bg-kalis-gold text-kalis-dark px-6 py-3 rounded font-bold hover:bg-white transition-colors">
              Demander un RDV
              <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Institutions;