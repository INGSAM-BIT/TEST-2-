import React from 'react';
import { ShieldCheck, Users, Globe, ArrowRight } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-kalis-dark relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid md:grid-cols-2 gap-16 items-center">
          
          {/* Image Side - MOSQUÉE DU PROPHÈTE (Le Dôme Vert) */}
          <div className="relative order-2 md:order-1 group">
            <div className="absolute -inset-4 bg-kalis-green/20 rounded-2xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-700"></div>
            <div className="relative rounded-xl overflow-hidden border border-white/10 shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-t from-kalis-dark/80 to-transparent z-10"></div>
                {/* Image Source: Wikimedia Commons - Reliable Green Dome Image */}
                <img 
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Green_Dome%2C_Media.jpeg/1024px-Green_Dome%2C_Media.jpeg" 
                    alt="Le Dôme Vert de la Mosquée du Prophète à Médine" 
                    className="w-full h-[600px] object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                
                {/* Floating Stats over Image */}
                <div className="absolute bottom-0 left-0 w-full z-20 p-8 border-t border-white/10 bg-black/60 backdrop-blur-md">
                    <div className="grid grid-cols-2 gap-8">
                        <div>
                            <h3 className="text-4xl font-bold text-kalis-gold mb-1">15+</h3>
                            <p className="text-xs text-gray-300 uppercase tracking-wider">Années d'expérience</p>
                        </div>
                        <div>
                            <h3 className="text-4xl font-bold text-kalis-gold mb-1">10k+</h3>
                            <p className="text-xs text-gray-300 uppercase tracking-wider">Pèlerins satisfaits</p>
                        </div>
                    </div>
                </div>
            </div>
          </div>

          {/* Text Side */}
          <div className="order-1 md:order-2">
            <div className="border-l-4 border-kalis-gold pl-8 mb-12">
              <h4 className="text-kalis-gold font-bold uppercase tracking-widest text-sm mb-2">À Propos de Nous</h4>
              <h2 className="font-serif text-4xl font-bold text-white mb-6">
                L'agence de référence pour <br/>le pèlerinage malien.
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Kalis Voyage n'est pas une simple agence, c'est une institution au service des pèlerins maliens. Membre du groupement <span className="text-white font-semibold border-b border-kalis-gold/50 pb-1">EGYPTAIR – KALIS VOYAGES SARL</span>, nous sommes mandatés pour assurer le transport et la logistique de la filière gouvernementale.
              </p>
              <p className="text-gray-400 leading-relaxed text-sm">
                Notre mission est double : garantir la sécurité logistique grâce à l'expertise aéronautique d'EgyptAir et offrir un encadrement spirituel bienveillant, digne des hôtes d'Allah. De Bamako à La Mecque, en passant par Médine, nous sommes à vos côtés.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-full bg-kalis-gold/10 flex items-center justify-center text-kalis-gold flex-shrink-0 mt-1">
                  <ShieldCheck size={20} />
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg">Partenariat Stratégique</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">Le seul partenaire privé d'EgyptAir pour le Hadj gouvernemental au Mali.</p>
                </div>
              </div>
              
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-full bg-kalis-gold/10 flex items-center justify-center text-kalis-gold flex-shrink-0 mt-1">
                  <Users size={20} />
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg">Encadrement Religieux</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">Imams et guides expérimentés pour les rites.</p>
                </div>
              </div>
              
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-full bg-kalis-gold/10 flex items-center justify-center text-kalis-gold flex-shrink-0 mt-1">
                  <Globe size={20} />
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg">Coordination Internationale</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">Présence permanente : Bamako, Le Caire, La Mecque, Médine.</p>
                </div>
              </div>
            </div>
            
            <div className="mt-10">
                <a href="#contact" className="inline-flex items-center gap-2 text-kalis-gold hover:text-white transition-colors font-bold uppercase text-sm tracking-widest group">
                    En savoir plus sur nous <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
                </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default About;