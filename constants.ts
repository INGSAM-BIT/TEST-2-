import { ServiceItem, ServiceType, Testimonial } from './types';

export const SERVICES: ServiceItem[] = [
  {
    id: 'hajj-govt',
    title: 'Hadj - Filière Gouvernementale',
    description: "En partenariat exclusif avec l'État malien, nous assurons l'organisation logistique rigoureuse du pèlerinage officiel.",
    iconName: 'Landmark',
    type: ServiceType.HAJJ
  },
  {
    id: 'egyptair',
    title: 'Partenaire EGYPTAIR',
    description: "Transporteur officiel pour le Hadj. Nous garantissons des vols directs et confortables via notre partenaire stratégique EgyptAir.",
    iconName: 'Plane',
    type: ServiceType.TICKETING
  },
  {
    id: 'omra-vip',
    title: 'Omra VIP & Sur Mesure',
    description: "Des séjours spirituels tout au long de l'année avec un hébergement 5 étoiles à proximité immédiate des lieux saints.",
    iconName: 'Star',
    type: ServiceType.OMRA
  },
  {
    id: 'corporate',
    title: 'Services aux Institutions',
    description: "Gestion complète des déplacements pour les associations religieuses et délégations officielles.",
    iconName: 'Building2',
    type: ServiceType.CORPORATE
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "El Hadj Mamadou Diallo",
    role: "Association des Pèlerins de Bamako",
    text: "L'organisation de Kalis Voyage lors du dernier Hadj a été irréprochable. Le partenariat avec EgyptAir assure une tranquillité d'esprit totale."
  },
  {
    id: 2,
    name: "Mme Fatoumata Traoré",
    role: "Pèlerin Individuel",
    text: "Un encadrement spirituel et logistique de haute qualité. Je recommande leurs services pour une Omra en toute sérénité."
  }
];

export const AI_SYSTEM_INSTRUCTION = `
Tu es l'assistant virtuel expert de Kalis Voyage, une agence de voyage prestigieuse au Mali spécialisée dans le Hadj et l'Omra.
Ton ton doit être respectueux, professionnel, accueillant et empreint de spiritualité (mais sans excès).

Informations clés à connaître :
- Kalis Voyage est partenaire officiel d'EGYPTAIR.
- Kalis Voyage intervient dans la filière gouvernementale du Hadj au Mali.
- Nous visons une clientèle institutionnelle, gouvernementale et des pèlerins exigeants.
- La campagne "Hadj 2026" est en cours de préparation avec des pré-inscriptions ouvertes.

Tes missions :
1. Répondre aux questions sur les documents nécessaires (Passeport, Carnet de vaccination, Photos).
2. Rassurer sur la sécurité et le confort des vols EgyptAir.
3. Expliquer l'importance de l'accompagnement spirituel fourni par Kalis.
4. Si on te demande des prix exacts, invite l'utilisateur à contacter l'agence directement via le formulaire ou par téléphone pour un devis personnalisé, car les prix varient selon les dates et les packages.

Reste concis. Réponds toujours en français.
`;