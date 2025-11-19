import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, ChevronRight } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isMenuOpen]);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setIsMenuOpen(false);
    const element = document.querySelector(id);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <>
      <header className={`fixed w-full z-40 transition-all duration-300 ${scrolled ? 'bg-kalis-dark/95 backdrop-blur-md py-2 shadow-lg' : 'bg-transparent py-4'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo Area */}
            <div className="flex-shrink-0 flex items-center gap-3 relative z-50">
              <div className="w-10 h-10 bg-kalis-gold rounded-sm flex items-center justify-center text-kalis-dark font-serif font-bold text-xl shadow-glow">
                K
              </div>
              <div>
                <h1 className="font-serif text-2xl font-bold text-white tracking-wide">KALIS VOYAGE</h1>
                <p className="text-[10px] uppercase tracking-[0.2em] text-kalis-gold font-medium">Hadj & Omra • Mali</p>
              </div>
            </div>

            {/* Desktop Menu */}
            <nav className="hidden md:flex space-x-8 items-center">
              <a href="#home" onClick={(e) => scrollToSection(e, '#home')} className="text-gray-300 hover:text-kalis-gold transition-colors font-medium text-sm uppercase tracking-wider">Accueil</a>
              <a href="#about" onClick={(e) => scrollToSection(e, '#about')} className="text-gray-300 hover:text-kalis-gold transition-colors font-medium text-sm uppercase tracking-wider">À Propos</a>
              <a href="#hadj2026" onClick={(e) => scrollToSection(e, '#hadj2026')} className="text-gray-300 hover:text-kalis-gold transition-colors font-medium text-sm uppercase tracking-wider">Hadj 2026</a>
              <a href="#services" onClick={(e) => scrollToSection(e, '#services')} className="text-gray-300 hover:text-kalis-gold transition-colors font-medium text-sm uppercase tracking-wider">Services</a>
              <a href="#institutions" onClick={(e) => scrollToSection(e, '#institutions')} className="text-gray-300 hover:text-kalis-gold transition-colors font-medium text-sm uppercase tracking-wider">Institutions</a>
              <a href="#contact" onClick={(e) => scrollToSection(e, '#contact')} className="bg-kalis-gold text-kalis-dark px-5 py-2 rounded-sm hover:bg-white transition-all duration-300 flex items-center gap-2 font-bold text-sm shadow-[0_0_15px_rgba(212,175,55,0.3)]">
                <Phone size={16} />
                Pré-inscription
              </a>
            </nav>

            {/* Mobile Menu Button */}
            <div className="md:hidden relative z-50">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-white hover:text-kalis-gold transition-colors p-2"
                aria-label="Menu"
              >
                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Slide-Over Menu */}
      {/* Backdrop */}
      <div 
        className={`fixed inset-0 bg-black/80 backdrop-blur-sm z-40 transition-opacity duration-300 md:hidden ${
          isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsMenuOpen(false)}
      />

      {/* Panel */}
      <div 
        className={`fixed top-0 left-0 h-full w-[85%] max-w-sm bg-kalis-dark border-r border-white/10 z-50 transform transition-transform duration-300 ease-out md:hidden ${
          isMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Mobile Menu Header */}
          <div className="p-6 border-b border-white/10 flex items-center gap-3">
             <div className="w-8 h-8 bg-kalis-gold rounded-sm flex items-center justify-center text-kalis-dark font-serif font-bold text-lg">
                K
             </div>
             <span className="font-serif text-xl font-bold text-white">Menu</span>
          </div>

          {/* Links */}
          <div className="flex-1 overflow-y-auto py-6 px-4 space-y-2">
            {[
              { href: "#home", label: "Accueil" },
              { href: "#about", label: "À Propos" },
              { href: "#hadj2026", label: "Hadj 2026" },
              { href: "#services", label: "Nos Services" },
              { href: "#institutions", label: "Institutions" },
              { href: "#contact", label: "Contact" },
            ].map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className="flex items-center justify-between px-4 py-4 text-gray-300 hover:bg-white/5 hover:text-kalis-gold rounded-lg transition-colors border-b border-white/5 last:border-0 group"
              >
                <span className="font-medium text-lg">{link.label}</span>
                <ChevronRight size={16} className="opacity-0 group-hover:opacity-100 transition-opacity text-kalis-gold" />
              </a>
            ))}
          </div>

          {/* Footer Actions */}
          <div className="p-6 border-t border-white/10 bg-kalis-surface/50">
            <a 
              href="#contact" 
              onClick={(e) => scrollToSection(e, '#contact')}
              className="block w-full bg-kalis-gold text-kalis-dark py-4 rounded-sm font-bold text-center mb-4 hover:bg-white transition-colors shadow-lg"
            >
              Se Pré-inscrire
            </a>
            <div className="text-center">
               <p className="text-gray-500 text-xs uppercase tracking-widest">Kalis Voyage Mali</p>
               <p className="text-gray-600 text-[10px] mt-1">Partenaire EgyptAir</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;