export interface Plan {
  id: string;
  name: string;
  tagline: string;
  priceCOP: string;
  period: string;
  popular?: boolean;
  features: string[];
  ctaText: string;
  color: string;
}

export interface Trainer {
  id: string;
  name: string;
  role: string;
  specialty: string;
  experience: string;
  certifications: string[];
  photo: string;
  bio: string;
  instagram?: string;
}

export interface GymArea {
  id: string;
  title: string;
  description: string;
  iconName: string;
  image: string;
  equipmentList: string[];
  highlight: string;
}

export interface FacilityImage {
  id: string;
  title: string;
  category: 'all' | 'pesas' | 'cardio' | 'cross' | 'vip';
  imageUrl: string;
  description: string;
}

export interface Transformation {
  id: string;
  name: string;
  age: number;
  timeframe: string;
  weightLoss: string;
  muscleGain: string;
  beforeImage: string;
  afterImage: string;
  testimonial: string;
}

export interface Testimonial {
  id: string;
  name: string;
  occupation: string;
  rating: number;
  comment: string;
  photo: string;
  planUsed: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface ScheduleSession {
  time: string;
  className: string;
  trainer: string;
  area: string;
  intensity: string;
}

export interface DaySchedule {
  day: string;
  hours: string;
  sessions: ScheduleSession[];
}

export interface GymLocation {
  id: string;
  name: string;
  shortName: string;
  tagline: string;
  city: string;
  department: string;
  address: string;
  addressShort: string;
  phone: string;
  phoneFormatted: string;
  whatsappUrl: string;
  googleMapsUrl: string;
  googleMapsEmbedUrl: string;
  badge: string;
  features: string[];
  hours: {
    weekdays: string;
    saturdays: string;
    sundays: string;
  };
  photo: string;
  isMain?: boolean;
}
