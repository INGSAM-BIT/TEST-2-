import React from 'react';
import { ChevronRight, PlayCircle } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden bg-kalis-dark">
      {/* Background Image - MASJID AL HARAM (Kaaba) */}
      <div className="absolute inset-0 z-0">
        {/* Gradient Overlay - Darker at bottom for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/30 to-black/90 z-10"></div>
        <div className="absolute inset-0 bg-kalis-navy/30 z-10 mix-blend-multiply"></div>
        
        {/* Image Source: Unsplash High Quality - Majestic Kaaba View */}
        <img 
          src="https://images.unsplash.com/photo-1537182534312-f945134cce34?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
          alt="La Sainte Kaaba et les pèlerins au Masjid Al-Haram" 
          className="w-full h-full object-cover object-center"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full">
        <div className="max-w-4xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-black/50 backdrop-blur-md border border-kalis-gold/30 mb-8 shadow-lg ring-1 ring-white/10">
            <span className="flex h-3 w-3 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-kalis-gold opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-kalis-gold"></span>
            </span>
            <span className="text-kalis-gold font-bold text-xs uppercase tracking-widest">Partenaire Officiel Égypte & Mali</span>
          </div>

          {/* Headline */}
          <h1 className="font-serif text-5xl md:text-7xl font-bold text-white leading-tight mb-6 drop-shadow-2xl">
            Répondez à l'appel <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-kalis-gold via-yellow-200 to-kalis-gold">d'Allah</span> en toute sérénité.
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-gray-200 mb-10 leading-relaxed max-w-2xl drop-shadow-lg font-medium text-shadow">
            Kalis Voyage, agence agréée partenaire d'EGYPTAIR. 
            Nous vous accompagnons avec rigueur et bienveillance pour le voyage de votre vie.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="#contact" 
              className="bg-kalis-gold text-kalis-dark px-8 py-4 rounded-sm font-bold text-lg hover:bg-white hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 shadow-[0_0_30px_rgba(212,175,55,0.4)]"
            >
              Pré-inscrire mon Hadj
              <ChevronRight size={20} />
            </a>
            <a 
              href="#about" 
              className="px-8 py-4 rounded-sm font-bold text-lg text-white border border-white/30 hover:bg-white/10 backdrop-blur-sm transition-all duration-300 flex items-center justify-center gap-2"
            >
              <PlayCircle size={20} />
              Notre Organisation
            </a>
          </div>

          {/* Highlights */}
          <div className="mt-16 grid grid-cols-3 gap-8 border-t border-white/10 pt-8">
             <div className="backdrop-blur-md bg-black/30 p-3 rounded border border-white/10 hover:bg-black/40 transition-colors">
               <p className="text-3xl font-serif font-bold text-white mb-1">100%</p>
               <p className="text-xs text-kalis-gold uppercase tracking-wider font-bold">Vols Directs</p>
             </div>
             <div className="backdrop-blur-md bg-black/30 p-3 rounded border border-white/10 hover:bg-black/40 transition-colors">
               <p className="text-3xl font-serif font-bold text-white mb-1">VIP</p>
               <p className="text-xs text-kalis-gold uppercase tracking-wider font-bold">Mina & Arafat</p>
             </div>
             <div className="backdrop-blur-md bg-black/30 p-3 rounded border border-white/10 hover:bg-black/40 transition-colors">
               <p className="text-3xl font-serif font-bold text-white mb-1">24/7</p>
               <p className="text-xs text-kalis-gold uppercase tracking-wider font-bold">Encadrement</p>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;