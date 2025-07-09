export interface FormData {
  // Informations générales
  userType: 'particulier' | 'entreprise' | '';
  insuranceType: string;
  
  // Informations personnelles
  firstName: string;
  lastName: string;
  isAssured: boolean;
  
  // Contact
  email: string;
  phone: string;
  preferredContact: 'email' | 'phone' | 'both' | '';
  
  // Détails assurance
  insuranceCompany: string;
  contractNumber: string;
  intermediary: string;
  
  // Historique et sinistre
  hasContactedCompany: boolean;
  contactDate: string;
  sinisterDate: string;
  sinisterNumber: string;
  companyResponse: string;
  
  // Montant réclamé
  claimAmount: string;
  claimRange: string;
  
  // Champs spécifiques entreprise
  companyName: string;
  companyType: string;
  employeeCount: string;
  isLegalRepresentative: boolean;
  position: string;
  isAuthorized: boolean;
  responsibleName: string;
  responsibleEmail: string;
  responsiblePhone: string;
}

export interface StepProps {
  formData: FormData;
  updateFormData: (updates: Partial<FormData>) => void;
  errors: Record<string, string>;
  onNext: () => void;
  onPrev: () => void;
}
