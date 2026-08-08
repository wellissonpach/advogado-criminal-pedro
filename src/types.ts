export interface PracticeArea {
  id: string;
  title: string;
  description: string;
  iconName: string;
  keyStats: string;
  notableCases: string[];
}

export interface ConsultationFormData {
  fullName: string;
  email: string;
  phone: string;
  practiceArea: string;
  preferredDate: string;
  confidentialityTier: 'Standard VIP' | 'Sovereign / Executive' | 'Ultra HNW Confidential';
  caseSummary: string;
  isEmergency: boolean;
}

export interface AttorneyProfile {
  name: string;
  title: string;
  specialty: string;
  barAdmissions: string[];
  education: string;
  yearsActive: number;
}

export type AmbientLightingMode = 'classic-gold' | 'midnight-obsidian' | 'courthouse-warm';
