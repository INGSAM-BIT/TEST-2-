import React from 'react';
import { Quote, Calendar, Megaphone } from 'lucide-react';
import { TESTIMONIALS } from '../constants';

const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-kalis-dark relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid lg:grid-cols-2 gap-16">
          
          {/* Testimonials Column */}
          <div>
            <div className="flex items-center gap-2 mb-8">
              <Quote className="text-kalis-gold rotate-180" size={32} />
              <h2 className="font-serif text-3xl font-bold text-white">Ils nous font confiance</h2>
            </div>
            
            <div className="space-y-6">
              {TESTIMONIALS.map((t) => (
                <div key={t.id} className="bg-white/5 p-6 rounded-lg border border-white/5 hover:border-kalis-gold/30 transition-colors">
                  <p className="text-gray-300 italic mb-6 leading-relaxed">"{t.text}"</p>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-kalis-gold to-kalis-goldDark text-kalis-dark font-bold flex items-center justify-center">
                      {t.name.charAt(0)}
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-sm">{t.name}</h4>
                      <p className="text-kalis-gold text-xs uppercase tracking-wider">{t.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* News / Actualités Column */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <Megaphone className="text-kalis-gold" size={32} />
              <h2 className="font-serif text-3xl font-bold text-white">Dernières Actualités</h2>
            </div>

            <div className="bg-white/5 rounded-lg border border-white/5 overflow-hidden">
              {/* News Item 1 */}
              <div className="p-6 border-b border-white/5 hover:bg-white/5 transition-colors group cursor-pointer">
                <div className="flex items-center gap-2 text-kalis-gold text-xs font-bold uppercase tracking-widest mb-2">
                  <Calendar size={12} />
                  <span>15 Octobre 2025</span>
                </div>
                <h3 className="text-white font-bold text-lg mb-2 group-hover:text-kalis-gold transition-colors">
                  Ouverture des pré-inscriptions Hadj 2026
                </h3>
                <p className="text-gray-400 text-sm">
                  Les fiches de renseignement sont disponibles à l'agence. Priorité aux pèlerins n'ayant jamais effectué le Hadj.
                </p>
              </div>

              {/* News Item 2 */}
              <div className="p-6 border-b border-white/5 hover:bg-white/5 transition-colors group cursor-pointer">
                <div className="flex items-center gap-2 text-kalis-gold text-xs font-bold uppercase tracking-widest mb-2">
                  <Calendar size={12} />
                  <span>20 Novembre 2025</span>
                </div>
                <h3 className="text-white font-bold text-lg mb-2 group-hover:text-kalis-gold transition-colors">
                  Réunion d'information - Grande Mosquée
                </h3>
                <p className="text-gray-400 text-sm">
                  Rencontre avec les futurs pèlerins pour expliquer les nouvelles procédures saoudiennes (Nusuk).
                </p>
              </div>

              {/* News Item 3 */}
              <div className="p-6 hover:bg-white/5 transition-colors group cursor-pointer">
                <div className="flex items-center gap-2 text-kalis-gold text-xs font-bold uppercase tracking-widest mb-2">
                  <Calendar size={12} />
                  <span>Urgent</span>
                </div>
                <h3 className="text-white font-bold text-lg mb-2 group-hover:text-kalis-gold transition-colors">
                  Date limite : Passeports biométriques
                </h3>
                <p className="text-gray-400 text-sm">
                  Vérifiez que votre passeport est valide au moins 6 mois après la date de retour prévue.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Testimonials;