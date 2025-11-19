export enum ServiceType {
  HAJJ = 'HAJJ',
  OMRA = 'OMRA',
  TICKETING = 'TICKETING',
  CORPORATE = 'CORPORATE'
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
  type: ServiceType;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  text: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  timestamp: number;
}