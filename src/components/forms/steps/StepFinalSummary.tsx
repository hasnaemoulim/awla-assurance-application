// src/components/forms/steps/StepFinalSummary.tsx
"use client";
import { useState } from 'react';
import { CheckCircleIcon, DocumentTextIcon, PhoneIcon, EnvelopeIcon } from '@heroicons/react/24/outline';
import { StepProps } from '@/types/claim';

export default function StepFinalSummary({ formData, onPrev }: StepProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async () => {
    setIsSubmitting(true);
    
    // Simulation de l'envoi
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="text-center space-y-8">
        <div className="w-24 h-24 bg-awlaGreen/10 rounded-full flex items-center justify-center mx-auto">
          <CheckCircleIcon className="w-12 h-12 text-awlaGreen" />
        </div>
        
        <div className="space-y-4">
          <h2 className="text-3xl font-bold text-dark">Réclamation soumise avec succès !</h2>
          <p className="text-lg text-neutral max-w-2xl mx-auto">
            Votre réclamation a été transmise à nos experts. Vous recevrez une confirmation par email 
            dans les prochaines minutes.
          </p>
        </div>

        <div className="bg-awlaGreen/10 rounded-xl p-6 border border-awlaGreen/20 max-w-md mx-auto">
          <h3 className="font-semibold text-dark mb-4">Numéro de réclamation</h3>
          <div className="text-2xl font-bold text-awlaGreen mb-2">
            AWL-{Date.now().toString().slice(-6)}
          </div>
          <p className="text-neutral text-sm">
            Conservez ce numéro pour le suivi de votre dossier
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-6 py-3 bg-awlaGreen text-dark font-semibold rounded-lg hover:bg-dark hover:text-white transition-colors">
            Suivre ma réclamation
          </button>
          <button className="px-6 py-3 border-2 border-awlaGreen text-awlaGreen rounded-lg hover:bg-awlaGreen hover:text-white transition-colors">
            Nouvelle réclamation
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <div className="text-center space-y-4">
        <h2 className="text-3xl font-bold text-dark">Finalisation de votre réclamation</h2>
        <p className="text-lg text-neutral">
          Vérifiez une dernière fois vos informations avant de soumettre votre réclamation.
        </p>
      </div>

      {/* Résumé complet */}
      <div className="bg-white rounded-xl p-6 border border-awlaGreen/20">
        <h3 className="text-lg font-semibold text-dark mb-4 flex items-center">
          <DocumentTextIcon className="w-5 h-5 mr-2 text-awlaGreen" />
          Récapitulatif de votre réclamation
        </h3>
        
        <div className="grid md:grid-cols-2 gap-6 text-sm">
          <div>
            <h4 className="font-semibold text-dark mb-2">Informations personnelles</h4>
            <p className="text-neutral">
              {formData.firstName} {formData.lastName}<br />
              {formData.userType === 'entreprise' && formData.companyName && (
                <>{formData.companyName}<br /></>
              )}
              {formData.email}<br />
              {formData.phone}
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold text-dark mb-2">Assurance concernée</h4>
            <p className="text-neutral">
              Type: {formData.insuranceType}<br />
              Compagnie: {formData.insuranceCompany}<br />
              {formData.contractNumber && <>Contrat: {formData.contractNumber}<br /></>}
            </p>
          </div>
        </div>
      </div>

      {/* Engagement de service */}
      <div className="bg-awlaGreen/10 rounded-xl p-6 border border-awlaGreen/20">
        <h3 className="text-lg font-semibold text-dark mb-4">Nos engagements</h3>
        <div className="grid md:grid-cols-3 gap-4 text-sm">
          <div className="flex items-start space-x-2">
            <CheckCircleIcon className="w-5 h-5 text-awlaGreen flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-medium text-dark">Analyse gratuite</p>
              <p className="text-neutral">Évaluation de votre dossier sans frais</p>
            </div>
          </div>
          <div className="flex items-start space-x-2">
            <CheckCircleIcon className="w-5 h-5 text-awlaGreen flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-medium text-dark">Accompagnement expert</p>
              <p className="text-neutral">Suivi personnalisé par nos spécialistes</p>
            </div>
          </div>
          <div className="flex items-start space-x-2">
            <CheckCircleIcon className="w-5 h-5 text-awlaGreen flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-medium text-dark">Honoraires de résultat</p>
              <p className="text-neutral">Vous ne payez qu'en cas de succès</p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact d'urgence */}
      <div className="bg-primary/10 rounded-xl p-6 border border-primary/20">
        <h3 className="text-lg font-semibold text-dark mb-4">Besoin d'aide ?</h3>
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex items-center space-x-2">
            <PhoneIcon className="w-5 h-5 text-primary" />
            <span className="text-dark font-medium">+212 5XX XX XX XX</span>
          </div>
          <div className="flex items-center space-x-2">
            <EnvelopeIcon className="w-5 h-5 text-primary" />
            <span className="text-dark font-medium">support@awla-assurances.ma</span>
          </div>
        </div>
      </div>

      <div className="flex justify-between pt-8">
        <button
          onClick={onPrev}
          className="px-6 py-3 border-2 border-neutral/20 text-neutral rounded-lg hover:bg-light transition-colors"
          disabled={isSubmitting}
        >
          Modifier
        </button>
        <button
          onClick={handleSubmit}
          disabled={isSubmitting}
          className="px-8 py-4 bg-awlaGreen text-dark font-bold rounded-lg hover:bg-dark hover:text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center"
        >
          {isSubmitting ? (
            <>
              <div className="animate-spin w-5 h-5 border-2 border-dark border-t-transparent rounded-full mr-2"></div>
              Soumission en cours...
            </>
          ) : (
            'Soumettre ma réclamation'
          )}
        </button>
      </div>
    </div>
  );
}
