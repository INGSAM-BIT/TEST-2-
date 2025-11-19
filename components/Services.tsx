import React from 'react';
import { Landmark, Users, Briefcase, HeartHandshake, ArrowRight } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      id: 'govt',
      title: "Filière Gouvernementale",
      description: "Organisation officielle en mandat avec l'État. Respect des quotas, visa garanti et transport sécurisé par EgyptAir.",
      icon: Landmark
    },
    {
      id: 'omra',
      title: "Omra & Voyages Spirituels",
      description: "Des séjours Omra toute l'année (Mawlid, Ramadan) avec des hébergements proches des Harams.",
      icon: HeartHandshake
    },
    {
      id: 'inst',
      title: "Institutions & Partenaires",
      description: "Solutions complètes pour les associations islamiques, ONG et délégations d'État.",
      icon: Briefcase
    },
    {
      id: 'fam',
      title: "Support Familles",
      description: "Communication constante avec les familles restées à Bamako pour rassurer sur le déroulement du pèlerinage.",
      icon: Users
    }
  ];

  return (
    <section id="services" className="py-24 bg-kalis-dark border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          
          {/* Left: Why Us Narrative */}
          <div>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-8">
              Pourquoi choisir <br/> <span className="text-kalis-gold">Kalis Voyage ?</span>
            </h2>
            <div className="space-y-8">
               <p className="text-gray-400 leading-relaxed">
                 Dans un contexte où l'organisation du Hadj demande une rigueur absolue, Kalis Voyage se distingue par son professionnalisme et ses partenariats solides.
               </p>
               <div className="pl-6 border-l-2 border-kalis-gold/30">
                 <p className="text-white italic text-lg mb-4">
                   "Notre engagement est simple : permettre à chaque pèlerin malien de se concentrer uniquement sur ses prières, pendant que nous gérons tout le reste avec précision."
                 </p>
                 <p className="text-kalis-gold text-sm font-bold uppercase tracking-widest">La Direction Générale</p>
               </div>
               <div className="pt-4">
                 <a href="#contact" className="text-white flex items-center gap-2 font-bold group">
                   Discuter de votre projet <ArrowRight className="group-hover:translate-x-2 transition-transform text-kalis-gold" />
                 </a>
               </div>
            </div>
          </div>

          {/* Right: Services Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {services.map((service) => (
              <div key={service.id} className="bg-white/5 hover:bg-white/10 p-6 rounded-lg transition-all duration-300 border border-white/5 hover:border-kalis-gold/30 hover:-translate-y-2 hover:shadow-lg cursor-default group">
                <service.icon className="text-kalis-gold mb-4 group-hover:scale-110 transition-transform duration-300" size={32} />
                <h3 className="text-white font-bold text-lg mb-3">{service.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Services;