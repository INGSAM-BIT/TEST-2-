import React from 'react';
import { Check, Download, MapPin, Plane, Star, Users, ShieldCheck, Crown } from 'lucide-react';

interface HajjCampaignProps {
  onSelectPackage: (pkg: string) => void;
}

const HajjCampaign: React.FC<HajjCampaignProps> = ({ onSelectPackage }) => {
  
  const handleDownload = (e: React.MouseEvent) => {
    e.preventDefault();
    alert("Le téléchargement de la brochure officielle Hadj 2026 (PDF) démarrera dans quelques instants...");
  };

  return (
    <section id="hadj2026" className="py-24 bg-kalis-surface relative overflow-hidden">
      {/* Background Image - Subtle Texture/Atmosphere */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-kalis-surface/90 z-10"></div>
        <img 
            src="https://images.unsplash.com/photo-1464666752541-64b75150f739?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
            alt="Ciel étoilé désert" 
            className="w-full h-full object-cover opacity-30"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center mb-20">
          <span className="text-kalis-gold font-bold tracking-[0.3em] uppercase text-xs">Ouverture Officielle</span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mt-3 mb-6">Nos Formules Hadj 2026</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Une organisation millimétrée pour un voyage spirituel serein. Choisissez la formule qui correspond à vos attentes et à votre budget.
          </p>
        </div>

        {/* Timeline */}
        <div className="hidden md:flex justify-between items-center mb-20 relative">
          <div className="absolute top-1/2 left-0 w-full h-[1px] bg-white/10 -z-10"></div>
          {[
            { step: "01", title: "Pré-inscription", icon: Users },
            { step: "02", title: "Formation & Visa", icon: Star },
            { step: "03", title: "Départ Bamako", icon: Plane },
            { step: "04", title: "Rites (Mina/Arafat)", icon: MapPin },
            { step: "05", title: "Retour & Zamzam", icon: Check },
          ].map((item, idx) => (
            <div key={idx} className="flex flex-col items-center px-4 group">
              <div className="w-12 h-12 rounded-full bg-kalis-gold text-kalis-dark font-bold flex items-center justify-center mb-3 shadow-[0_0_15px_rgba(212,175,55,0.4)] group-hover:scale-110 transition-transform duration-300">
                {item.step}
              </div>
              <span className="text-white font-serif text-sm bg-kalis-surface px-2 py-1 rounded">{item.title}</span>
            </div>
          ))}
        </div>

        {/* Offer Cards */}
        <div className="grid lg:grid-cols-3 gap-8 items-start">
          
          {/* Card 1: Filière Gouvernementale */}
          <div className="bg-white/5 border border-white/10 rounded-xl p-8 hover:border-kalis-gold/50 transition-all duration-300 group backdrop-blur-sm hover:-translate-y-2 hover:shadow-xl relative">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gray-700 text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest border border-white/20">Standard</div>
            <h3 className="font-serif text-2xl font-bold text-white mb-2 text-center">Filière Gouvernementale</h3>
            <p className="text-gray-400 text-sm text-center mb-6">L'offre officielle encadrée par l'État</p>
            <div className="h-[1px] w-full bg-white/10 mb-6"></div>
            <ul className="space-y-4 mb-8">
              {[
                "Vols A/R EgyptAir (Bamako-Médine)",
                "Visa Hadj Officiel Garanti",
                "Hébergement Standard (Makkah/Médine)",
                "Restauration complète (Matin/Soir)",
                "Encadrement religieux collectif",
                "Kit pèlerin inclus"
              ].map((feat, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-300">
                  <ShieldCheck size={16} className="text-kalis-gold mt-1 flex-shrink-0" />
                  <span className="text-sm">{feat}</span>
                </li>
              ))}
            </ul>
            <button 
              onClick={() => onSelectPackage("Filière Gouvernementale")}
              className="block w-full py-3 border border-white/20 rounded text-center text-white group-hover:bg-white group-hover:text-kalis-dark transition-colors font-medium"
            >
              Obtenir le tarif officiel
            </button>
          </div>

          {/* Card 2: Excellence VIP (Highlight) */}
          <div className="bg-gradient-to-b from-kalis-gold to-yellow-600 rounded-xl p-1 p-b-0 transform lg:-translate-y-6 shadow-2xl relative transition-transform duration-300 hover:scale-[1.02]">
            <div className="bg-kalis-dark h-full w-full rounded-lg p-8 relative overflow-hidden">
                {/* Gold accents */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-kalis-gold/20 rounded-bl-full -mr-10 -mt-10 blur-xl"></div>
                
                <div className="flex justify-center mb-4">
                    <Crown size={40} className="text-kalis-gold" />
                </div>
                <h3 className="font-serif text-3xl font-bold text-white mb-2 text-center">Excellence VIP</h3>
                <p className="text-kalis-gold text-sm font-bold uppercase tracking-wider text-center mb-8">Confort & Proximité Absolus</p>
                
                <ul className="space-y-4 mb-8 relative z-10">
                {[
                    "Hôtels 5★ face au Haram (0m)",
                    "Chambres doubles ou individuelles",
                    "Vols EgyptAir Business Class (Option)",
                    "Tente VIP climatisée à Mina",
                    "Guide privé & chauffeur dédié",
                    "Buffets gastronomiques"
                ].map((feat, i) => (
                    <li key={i} className="flex items-center gap-3 text-white">
                    <div className="w-6 h-6 rounded-full bg-kalis-gold flex items-center justify-center flex-shrink-0">
                        <Check size={14} className="text-kalis-dark" />
                    </div>
                    <span className="text-sm font-bold">{feat}</span>
                    </li>
                ))}
                </ul>
                <button 
                    onClick={() => onSelectPackage("Pack Excellence VIP")}
                    className="block w-full py-4 bg-kalis-gold text-kalis-dark rounded text-center hover:bg-white transition-colors font-bold shadow-[0_0_20px_rgba(212,175,55,0.3)] relative z-10 text-lg"
                >
                Demander un devis VIP
                </button>
            </div>
          </div>

          {/* Card 3: Groups & Institutions */}
          <div className="bg-white/5 border border-white/10 rounded-xl p-8 hover:border-kalis-gold/50 transition-all duration-300 group backdrop-blur-sm hover:-translate-y-2 hover:shadow-xl relative">
             <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-kalis-navy text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest border border-white/20">Sur Mesure</div>
            <h3 className="font-serif text-2xl font-bold text-white mb-2 text-center">Institutions & Groupes</h3>
            <p className="text-gray-400 text-sm text-center mb-6">Associations, Mosquées, ONG</p>
            <div className="h-[1px] w-full bg-white/10 mb-6"></div>
            <ul className="space-y-4 mb-8">
              {[
                "Tarifs dégressifs selon le nombre",
                "Gestion de la délégation officielle",
                "Blocs de chambres réservés",
                "Programme de rites personnalisé",
                "Facilités de paiement corporate",
                "Réunion d'information privée"
              ].map((feat, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-300">
                  <Users size={16} className="text-kalis-gold mt-1 flex-shrink-0" />
                  <span className="text-sm">{feat}</span>
                </li>
              ))}
            </ul>
            <button 
              onClick={() => onSelectPackage("Offre Groupe/Institution")}
              className="block w-full py-3 border border-white/20 rounded text-center text-white group-hover:bg-white group-hover:text-kalis-dark transition-colors font-medium"
            >
              Contacter le service Pro
            </button>
          </div>

        </div>

        {/* Brochure Download */}
        <div className="mt-16 flex flex-col items-center relative z-10">
           <div className="p-[1px] bg-gradient-to-r from-transparent via-kalis-gold/50 to-transparent w-full max-w-md mb-8"></div>
           <a 
            href="/brochure-hadj-2026-preview.pdf" 
            onClick={handleDownload}
            className="group relative inline-flex items-center gap-3 bg-kalis-dark border border-kalis-gold/30 text-white px-8 py-4 rounded-full hover:bg-kalis-gold hover:text-kalis-dark transition-all duration-300 shadow-lg hover:shadow-[0_0_20px_rgba(212,175,55,0.3)]"
          >
            <div className="bg-white/10 p-2 rounded-full group-hover:bg-kalis-dark/10 transition-colors">
                <Download size={20} />
            </div>
            <span className="font-bold uppercase tracking-widest text-sm">Télécharger la brochure Hadj 2026</span>
          </a>
          <p className="text-gray-500 text-xs mt-4">Document PDF • Programme détaillé & Tarifs</p>
        </div>

      </div>
    </section>
  );
};

export default HajjCampaign;