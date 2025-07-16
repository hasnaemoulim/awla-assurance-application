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

  // Nouveau : Justice et organismes de contrôle
  hasContactedAuthorities: boolean;
  authorityType: string;
  authorityContactDate: string;
  authorityCaseNumber: string;
  authorityStatus: string;
  
  // Détails du litige
  litigeType: string;
  litigeDescription: string;
  companyResponse: string;
  companyResponseDetails: string;
  availableDocuments: string[];
  
  // Montant réclamé
  hasExactAmount: boolean;
  exactAmount: string;
  claimRange: string;
  damageDetails: string;
  claimObjectives: string[];
  
  // Consentements
  acceptsTerms: boolean;
  acceptsDataProcessing: boolean;
  
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
