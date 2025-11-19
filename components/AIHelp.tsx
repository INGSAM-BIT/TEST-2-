import React, { useState, useRef, useEffect } from 'react';
import { sendKalisMessage } from '../services/geminiService';
import { ChatMessage } from '../types';
import { Send, Sparkles, Loader2, Bot } from 'lucide-react';

const AIHelp: React.FC = () => {
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: 'Salam aleykoum. Je suis l\'assistant virtuel de Kalis Voyage. Avez-vous des questions sur le Hadj 2026, nos vols EgyptAir ou les documents nécessaires ?', timestamp: Date.now() }
  ]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMsg: ChatMessage = { role: 'user', text: input, timestamp: Date.now() };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setLoading(true);

    const responseText = await sendKalisMessage(input);
    
    const aiMsg: ChatMessage = { role: 'model', text: responseText, timestamp: Date.now() };
    setMessages(prev => [...prev, aiMsg]);
    setLoading(false);
  };

  return (
    <section className="py-16 bg-kalis-cream border-y border-kalis-gold/20">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-10">
            <div className="inline-flex items-center justify-center p-3 bg-kalis-green/10 rounded-full mb-4">
                <Sparkles className="text-kalis-green" size={24} />
            </div>
            <h2 className="font-serif text-3xl font-bold text-kalis-green">Assistant Kalis</h2>
            <p className="text-gray-600 mt-2">Une question sur les vaccins, les visas ou les horaires ? Demandez à notre IA.</p>
        </div>

        <div className="bg-white rounded-xl shadow-xl border border-gray-200 overflow-hidden h-[500px] flex flex-col">
          {/* Chat Window */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4 bg-gray-50">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`flex gap-3 max-w-[80%] ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${msg.role === 'user' ? 'bg-kalis-gold text-white' : 'bg-kalis-green text-white'}`}>
                    {msg.role === 'user' ? <span className="text-xs font-bold">VOUS</span> : <Bot size={16} />}
                  </div>
                  <div className={`p-4 rounded-lg text-sm leading-relaxed shadow-sm ${
                    msg.role === 'user' 
                      ? 'bg-white text-gray-800 border border-gray-200 rounded-tr-none' 
                      : 'bg-white text-gray-800 border border-kalis-green/20 rounded-tl-none'
                  }`}>
                    {msg.text}
                  </div>
                </div>
              </div>
            ))}
            {loading && (
               <div className="flex justify-start">
                 <div className="flex gap-3 max-w-[80%]">
                    <div className="w-8 h-8 rounded-full bg-kalis-green text-white flex items-center justify-center flex-shrink-0">
                        <Bot size={16} />
                    </div>
                    <div className="bg-white border border-kalis-green/20 p-4 rounded-lg rounded-tl-none shadow-sm flex items-center gap-2 text-gray-500 text-sm">
                        <Loader2 size={16} className="animate-spin" /> Réflexion en cours...
                    </div>
                 </div>
               </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-4 bg-white border-t border-gray-200">
            <form onSubmit={handleSend} className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ex: Quels documents pour le visa Hadj ?"
                className="flex-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-kalis-gold focus:border-transparent"
                disabled={loading}
              />
              <button 
                type="submit" 
                disabled={loading || !input.trim()}
                className="bg-kalis-green text-white px-6 rounded-lg hover:bg-kalis-green/90 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center justify-center"
              >
                <Send size={20} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIHelp;