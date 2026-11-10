export type PageId = 'home' | 'plumbing' | 'journey' | 'reset';

export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  category: 'Residential' | 'Commercial' | 'Specialty';
  specs: string[];
  image: string;
  badgeText: string;
}

export interface StoryMilestone {
  year: string;
  phase: string;
  title: string;
  description: string;
  quote?: string;
  focus: string;
}

export interface ResetPillar {
  letter: string;
  title: string;
  subtitle: string;
  description: string;
  tactics: string[];
}

export interface VideoContent {
  id: string;
  title: string;
  channel: string;
  duration: string;
  category: 'Trade Skill' | 'Mindset & Fitness' | 'Plumbing Tips';
  views: string;
  thumbnail: string;
  description: string;
  externalUrl: string;
}

export interface PlumbingInquiry {
  fullName: string;
  phone: string;
  email: string;
  city: string;
  serviceType: string;
  urgency: 'Standard' | 'Within 24 Hours' | 'Emergency Immediate';
  description: string;
  preferredDate?: string;
}
