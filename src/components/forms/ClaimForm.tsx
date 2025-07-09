"use client";
import { useState } from 'react';
import { ArrowLeftIcon, CheckCircleIcon } from '@heroicons/react/24/outline';
import ProgressBar from '@/components/ui/ProgressBar';
import StepUserType from '@/components/forms/steps/StepUserType';
import StepInsuranceType from '@/components/forms/steps/StepInsuranceType';
import StepPersonalInfo from '@/components/forms/steps/StepPersonalInfo';
import StepContactInfo from '@/components/forms/steps/StepContactInfo';
import StepInsuranceDetails from '@/components/forms/steps/StepInsuranceDetails';
import StepSummary from '@/components/forms/steps/StepSummary';
import StepContactHistory from '@/components/forms/steps/StepContactHistory';
import StepCompanyResponse from '@/components/forms/steps/StepCompanyResponse';
import StepClaimAmount from '@/components/forms/steps/StepClaimAmount';
import StepFinalSummary from '@/components/forms/steps/StepFinalSummary';
import { FormData } from '@/types/claim';

interface ClaimFormProps {
  onBack: () => void;
}

export default function ClaimForm({ onBack }: ClaimFormProps) {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    userType: '',
    insuranceType: '',
    firstName: '',
    lastName: '',
    isAssured: false,
    email: '',
    phone: '',
    preferredContact: '',
    insuranceCompany: '',
    contractNumber: '',
    intermediary: '',
    hasContactedCompany: false,
    contactDate: '',
    sinisterDate: '',
    sinisterNumber: '',
    companyResponse: '',
    claimAmount: '',
    claimRange: '',
    companyName: '',
    companyType: '',
    employeeCount: '',
    isLegalRepresentative: false,
    position: '',
    isAuthorized: false,
    responsibleName: '',
    responsibleEmail: '',
    responsiblePhone: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const totalSteps = 10;
  const progress = (currentStep / totalSteps) * 100;

  const steps = [
    { id: 1, title: 'Profil', component: StepUserType },
    { id: 2, title: 'Type d\'assurance', component: StepInsuranceType },
    { id: 3, title: 'Informations', component: StepPersonalInfo },
    { id: 4, title: 'Contact', component: StepContactInfo },
    { id: 5, title: 'Assurance', component: StepInsuranceDetails },
    { id: 6, title: 'Résumé', component: StepSummary },
    { id: 7, title: 'Historique', component: StepContactHistory },
    { id: 8, title: 'Réponse', component: StepCompanyResponse },
    { id: 9, title: 'Montant', component: StepClaimAmount },
    { id: 10, title: 'Finalisation', component: StepFinalSummary }
  ];

  const updateFormData = (updates: Partial<FormData>) => {
    setFormData(prev => ({ ...prev, ...updates }));
    setErrors({});
  };

  const validateStep = (stepNumber: number): boolean => {
    const newErrors: Record<string, string> = {};
    
    switch (stepNumber) {
      case 1:
        if (!formData.userType) newErrors.userType = 'Sélectionnez votre profil';
        break;
      case 2:
        if (!formData.insuranceType) newErrors.insuranceType = 'Sélectionnez le type d\'assurance';
        break;
      case 3:
        if (!formData.firstName.trim()) newErrors.firstName = 'Le prénom est requis';
        if (!formData.lastName.trim()) newErrors.lastName = 'Le nom est requis';
        break;
      case 4:
        if (!formData.email.trim()) newErrors.email = 'L\'email est requis';
        if (!formData.phone.trim()) newErrors.phone = 'Le téléphone est requis';
        break;
      case 5:
        if (!formData.insuranceCompany.trim()) newErrors.insuranceCompany = 'La compagnie d\'assurance est requise';
        break;
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const nextStep = () => {
    if (validateStep(currentStep)) {
      setCurrentStep(prev => Math.min(prev + 1, totalSteps));
    }
  };

  const prevStep = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1));
  };

  const renderStep = () => {
    const StepComponent = steps[currentStep - 1]?.component;
    if (!StepComponent) return null;

    return (
      <StepComponent
        formData={formData}
        updateFormData={updateFormData}
        errors={errors}
        onNext={nextStep}
        onPrev={prevStep}
      />
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-light via-white to-awlaGreen/5">
      {/* Header avec progression - CORRIGÉ */}
      <div className="bg-white/90 backdrop-blur-sm border-b border-awlaGreen/20 sticky top-20 z-30 shadow-sm">
        <div className="container-custom py-6">
          <div className="flex items-center justify-between mb-6">
            <button
              onClick={onBack}
              className="flex items-center space-x-2 text-neutral hover:text-awlaGreen transition-colors"
            >
              <ArrowLeftIcon className="w-5 h-5" />
              <span>Retour</span>
            </button>
            
            <div className="text-center">
              <h1 className="text-2xl font-bold text-dark">Nouvelle réclamation</h1>
              <p className="text-neutral">Étape {currentStep} sur {totalSteps}</p>
            </div>
            
            <div className="flex items-center space-x-2 text-sm text-neutral">
              <CheckCircleIcon className="w-5 h-5 text-awlaGreen" />
              <span>Sécurisé</span>
            </div>
          </div>
          
          <ProgressBar progress={progress} />
        </div>
      </div>

      {/* Contenu principal - CORRIGÉ avec padding-top suffisant */}
      <div className="container-custom py-16">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-xl border border-awlaGreen/10">
            {renderStep()}
          </div>
        </div>
      </div>
    </div>
  );
}
