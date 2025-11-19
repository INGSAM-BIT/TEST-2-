import React from 'react';
import { BadgeCheck, Plane, Building2 } from 'lucide-react';

const TrustedBy: React.FC = () => {
  return (
    <section id="partenaires" className="py-10 bg-kalis-gold">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-kalis-dark/10">
          
          {/* Partner 1: EgyptAir */}
          <div className="flex items-center justify-center gap-4 px-4">
             <Plane className="text-kalis-dark" size={32} />
             <div>
               <h3 className="font-bold text-kalis-dark text-lg">Partenaire EGYPTAIR</h3>
               <p className="text-kalis-dark/70 text-xs font-medium uppercase">Transporteur Officiel</p>
             </div>
          </div>

          {/* Partner 2: Government */}
          <div className="flex items-center justify-center gap-4 px-4">
             <Building2 className="text-kalis-dark" size={32} />
             <div>
               <h3 className="font-bold text-kalis-dark text-lg">Filière Gouvernementale</h3>
               <p className="text-kalis-dark/70 text-xs font-medium uppercase">Agence Agréée État</p>
             </div>
          </div>

          {/* Partner 3: Excellence */}
          <div className="flex items-center justify-center gap-4 px-4">
             <BadgeCheck className="text-kalis-dark" size={32} />
             <div>
               <h3 className="font-bold text-kalis-dark text-lg">Service Premium</h3>
               <p className="text-kalis-dark/70 text-xs font-medium uppercase">Qualité Certifiée</p>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default TrustedBy;