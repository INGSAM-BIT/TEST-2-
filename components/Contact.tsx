import React, { useState, useEffect } from 'react';
import { Phone, Mail, MapPin, Facebook, Instagram, MessageCircle, Landmark, Smartphone, Wallet, Loader2, CheckCircle2, Send, UserPlus } from 'lucide-react';

interface ContactProps {
  selectedPackage?: string;
}

const Contact: React.FC<ContactProps> = ({ selectedPackage }) => {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');
  
  // State to hold form data
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    pilgrims: '1', // Default to 1 pilgrim
    type: 'Pré-inscription Hadj 2026',
    message: ''
  });

  // Update form when a package is selected from HajjCampaign
  useEffect(() => {
    if (selectedPackage) {
      setFormData(prev => ({
        ...prev,
        type: `Devis : ${selectedPackage}`,
        message: `Bonjour, je souhaite obtenir un tarif pour l'offre "${selectedPackage}". Merci de me recontacter.`
      }));
    }
  }, [selectedPackage]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    
    // Construct the WhatsApp message
    const phoneNumber = "22376332729"; // Agence Number
    const message = `
*NOUVELLE DEMANDE DEVIS / HADJ* 🕋
--------------------------------
*Nom :* ${formData.name}
*Tél :* ${formData.phone}
*Email :* ${formData.email}
*Nbr Pèlerins :* ${formData.pilgrims}
*Objet :* ${formData.type}
--------------------------------
*Message :* 
${formData.message}
    `.trim();

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    // Simulate processing time then redirect
    setTimeout(() => {
      window.open(whatsappUrl, '_blank');
      setFormStatus('success');
      // Reset form after success
      setFormData({
        name: '',
        phone: '',
        email: '',
        pilgrims: '1',
        type: 'Pré-inscription Hadj 2026',
        message: ''
      });
    }, 1500);
  };

  return (
    <footer id="contact" className="bg-kalis-dark text-white pt-20 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid lg:grid-cols-2 gap-16 mb-20">
          {/* Contact Information */}
          <div>
            <h2 className="font-serif text-3xl font-bold text-white mb-6">Pré-inscription & Devis</h2>
            <p className="text-gray-400 mb-8">
              Les places pour le Hadj 2026 sont limitées. Remplissez ce formulaire pour recevoir une proposition tarifaire personnalisée directement sur WhatsApp.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded bg-kalis-gold/10 flex items-center justify-center text-kalis-gold mt-1">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-white">Notre Agence</h4>
                  <p className="text-gray-400 text-sm">Hamdallaye ACI 2000, Bamako, Mali<br/>(Près du Monument de la Paix)</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded bg-kalis-gold/10 flex items-center justify-center text-kalis-gold mt-1">
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-white">Téléphone</h4>
                  <p className="text-gray-400 text-sm">+223 76 33 27 29 (WhatsApp)</p>
                  <p className="text-gray-400 text-sm">+223 20 22 00 00 (Fixe)</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded bg-kalis-gold/10 flex items-center justify-center text-kalis-gold mt-1">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-white">Email</h4>
                  <p className="text-gray-400 text-sm">contact@kalisvoyage.ml</p>
                </div>
              </div>
            </div>

            <div className="mt-10 flex gap-4">
               <a href="#" className="w-10 h-10 rounded-full bg-white/5 hover:bg-kalis-gold hover:text-kalis-dark flex items-center justify-center transition-colors border border-white/10">
                 <Facebook size={18} />
               </a>
               <a href="#" className="w-10 h-10 rounded-full bg-white/5 hover:bg-kalis-gold hover:text-kalis-dark flex items-center justify-center transition-colors border border-white/10">
                 <Instagram size={18} />
               </a>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white rounded-xl p-8 text-gray-800 shadow-xl relative overflow-hidden">
            {formStatus === 'success' ? (
              <div className="absolute inset-0 bg-white flex flex-col items-center justify-center p-8 text-center animate-in fade-in duration-500">
                <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle2 size={40} />
                </div>
                <h3 className="font-serif text-2xl font-bold text-kalis-navy mb-2">Dossier Transmis !</h3>
                <p className="text-gray-600 mb-6">
                  Votre demande a été transférée à notre service WhatsApp. Un conseiller va vous répondre immédiatement avec le tarif demandé.
                </p>
                <button 
                  onClick={() => setFormStatus('idle')}
                  className="text-kalis-gold font-bold uppercase text-sm hover:underline"
                >
                  Envoyer une autre demande
                </button>
              </div>
            ) : (
              <>
                <h3 className="font-serif text-2xl font-bold text-kalis-navy mb-6">
                   {selectedPackage ? `Devis : ${selectedPackage}` : "Demande de Tarif / Inscription"}
                </h3>
                <form className="space-y-4" onSubmit={handleSubmit}>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-xs font-bold uppercase text-gray-500">Nom complet</label>
                      <input 
                        required 
                        type="text" 
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full bg-gray-50 border border-gray-200 p-3 rounded focus:ring-2 focus:ring-kalis-gold outline-none transition-shadow" 
                        placeholder="Votre nom" 
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-xs font-bold uppercase text-gray-500">Téléphone</label>
                      <input 
                        required 
                        type="tel" 
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full bg-gray-50 border border-gray-200 p-3 rounded focus:ring-2 focus:ring-kalis-gold outline-none transition-shadow" 
                        placeholder="+223..." 
                      />
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                     <div className="space-y-1">
                        <label className="text-xs font-bold uppercase text-gray-500">Email</label>
                        <input 
                        required 
                        type="email" 
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full bg-gray-50 border border-gray-200 p-3 rounded focus:ring-2 focus:ring-kalis-gold outline-none transition-shadow" 
                        placeholder="votre@email.com" 
                        />
                     </div>
                     <div className="space-y-1">
                        <label className="text-xs font-bold uppercase text-gray-500 flex items-center gap-1">
                           Nbr de Pèlerins <UserPlus size={12} />
                        </label>
                        <input 
                        required 
                        type="number" 
                        min="1"
                        max="500"
                        name="pilgrims"
                        value={formData.pilgrims}
                        onChange={handleInputChange}
                        className="w-full bg-gray-50 border border-gray-200 p-3 rounded focus:ring-2 focus:ring-kalis-gold outline-none transition-shadow font-bold text-kalis-navy" 
                        />
                     </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-bold uppercase text-gray-500">Objet de la demande</label>
                    <select 
                      name="type"
                      value={formData.type}
                      onChange={handleInputChange}
                      className="w-full bg-gray-50 border border-gray-200 p-3 rounded focus:ring-2 focus:ring-kalis-gold outline-none transition-shadow"
                    >
                      <option value="Pré-inscription Hadj 2026">Pré-inscription Hadj 2026 (Standard)</option>
                      <option value="Devis : Pack Excellence VIP">Devis : Pack Excellence VIP</option>
                      <option value="Devis : Offre Groupe/Institution">Devis : Offre Groupe/Institution</option>
                      <option value="Renseignements Omra">Renseignements Omra</option>
                      <option value="Partenariat Institutionnel">Partenariat Institutionnel</option>
                    </select>
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-bold uppercase text-gray-500">Message (Optionnel)</label>
                    <textarea 
                      rows={3} 
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full bg-gray-50 border border-gray-200 p-3 rounded focus:ring-2 focus:ring-kalis-gold outline-none transition-shadow" 
                      placeholder="Précisez vos besoins spécifiques..."
                    ></textarea>
                  </div>

                  <button 
                    type="submit"
                    disabled={formStatus === 'submitting'}
                    className="w-full bg-kalis-gold hover:bg-kalis-goldDark text-kalis-dark font-bold py-4 rounded transition-colors shadow-lg flex items-center justify-center gap-2"
                  >
                    {formStatus === 'submitting' ? (
                      <>
                        <Loader2 size={20} className="animate-spin" />
                        Transmission en cours...
                      </>
                    ) : (
                      <>
                        <Send size={20} />
                        Obtenir mon tarif via WhatsApp
                      </>
                    )}
                  </button>
                  <p className="text-xs text-center text-gray-400 mt-4">
                    En cliquant, vous ouvrez une discussion WhatsApp directe avec l'agence pour finaliser le tarif.
                  </p>
                </form>
              </>
            )}
          </div>
        </div>

        {/* Payment Methods Section */}
        <div className="mb-16 border-t border-white/10 pt-12">
          <h3 className="font-serif text-2xl font-bold text-white mb-8 text-center">Modes de Paiement Acceptés</h3>
          <div className="grid md:grid-cols-3 gap-6">
            
            {/* Virement */}
            <div className="bg-white/5 rounded-xl p-6 border border-white/10 hover:border-kalis-gold/30 transition-all duration-300 group">
              <div className="flex items-center justify-center mb-4">
                <div className="w-12 h-12 rounded-full bg-kalis-gold/10 flex items-center justify-center text-kalis-gold group-hover:bg-kalis-gold group-hover:text-kalis-dark transition-colors">
                  <Landmark size={24} />
                </div>
              </div>
              <h4 className="font-bold text-lg text-center text-white mb-2">Virement Bancaire</h4>
              <p className="text-gray-400 text-sm text-center leading-relaxed">
                Partenaires : <span className="text-white font-medium">ORABANK</span>, <span className="text-white font-medium">BDM-SA</span> et <span className="text-white font-medium">BNDA</span>.
                <br/>
                <span className="text-xs opacity-70 mt-1 block">*RIB fourni lors de l'inscription</span>
              </p>
            </div>

            {/* Mobile Money */}
            <div className="bg-white/5 rounded-xl p-6 border border-white/10 hover:border-kalis-gold/30 transition-all duration-300 group">
              <div className="flex items-center justify-center mb-4">
                <div className="w-12 h-12 rounded-full bg-kalis-gold/10 flex items-center justify-center text-kalis-gold group-hover:bg-kalis-gold group-hover:text-kalis-dark transition-colors">
                  <Smartphone size={24} />
                </div>
              </div>
              <h4 className="font-bold text-lg text-center text-white mb-2">Mobile Money</h4>
              <p className="text-gray-400 text-sm text-center leading-relaxed">
                Paiement sécurisé via <span className="text-orange-500 font-bold">Orange Money</span> ou <span className="text-blue-400 font-bold">Moov Money</span>.
                <br/>
                <span className="font-mono text-white mt-1 block text-lg">79 79 35 00</span>
              </p>
            </div>

            {/* Agence */}
            <div className="bg-white/5 rounded-xl p-6 border border-white/10 hover:border-kalis-gold/30 transition-all duration-300 group">
              <div className="flex items-center justify-center mb-4">
                <div className="w-12 h-12 rounded-full bg-kalis-gold/10 flex items-center justify-center text-kalis-gold group-hover:bg-kalis-gold group-hover:text-kalis-dark transition-colors">
                  <Wallet size={24} />
                </div>
              </div>
              <h4 className="font-bold text-lg text-center text-white mb-2">À l'Agence</h4>
              <p className="text-gray-400 text-sm text-center leading-relaxed">
                Règlement en <span className="text-white font-medium">espèces</span> ou <span className="text-white font-medium">chèque certifié</span> directement à nos bureaux.
                <br/>
                <span className="text-xs opacity-70 mt-1 block">*Reçu délivré immédiatement</span>
              </p>
            </div>

          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 py-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Kalis Voyage. Tous droits réservés.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Mentions Légales</a>
            <a href="#" className="hover:text-white transition-colors">Politique de Confidentialité</a>
          </div>
        </div>

      </div>

      {/* Floating WhatsApp Button */}
      <a 
        href="https://wa.me/22376332729" 
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform z-50 flex items-center justify-center animate-bounce"
        aria-label="Contact WhatsApp"
      >
        <MessageCircle size={28} fill="white" />
      </a>
    </footer>
  );
};

export default Contact;