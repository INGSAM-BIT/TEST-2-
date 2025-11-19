import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import HajjCampaign from './components/HajjCampaign';
import Institutions from './components/Institutions';
import Testimonials from './components/Testimonials';
import AIHelp from './components/AIHelp';
import Contact from './components/Contact';
import TrustedBy from './components/TrustedBy';
import { ArrowUp } from 'lucide-react';

function App() {
  // State to track which package the user wants a quote for
  const [selectedPackage, setSelectedPackage] = useState('');
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Handle Scroll to Top visibility
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectPackage = (packageName: string) => {
    setSelectedPackage(packageName);
    // Smooth scroll to contact section handled in the component
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="antialiased selection:bg-kalis-gold selection:text-kalis-dark">
      <Header />
      <main>
        <Hero />
        <TrustedBy />
        <About />
        <HajjCampaign onSelectPackage={handleSelectPackage} />
        <Services />
        <Institutions />
        <Testimonials />
        <AIHelp />
      </main>
      <Contact selectedPackage={selectedPackage} />

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-24 right-6 p-3 bg-kalis-gold text-kalis-dark rounded-full shadow-lg hover:bg-white transition-all duration-300 z-40 ${
          showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
        }`}
        aria-label="Retour en haut"
      >
        <ArrowUp size={24} />
      </button>
    </div>
  );
}

export default App;