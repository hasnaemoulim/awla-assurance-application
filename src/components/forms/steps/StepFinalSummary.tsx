"use client";
import { useState } from 'react';
import { CheckCircleIcon, DocumentTextIcon, PhoneIcon, MailIcon } from '@heroicons/react/24/outline';
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

        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-dark">Prochaines étapes</h3>
          <div className="grid md:grid-cols-3 gap-4 text-sm">
            <div className="bg-white rounded-xl p-4 border border-light">
              <div className="text-awlaGreen text-2xl mb-2">📧</div>
              <h4 className="font-semibold text-dark mb-1">Email de confirmation</h4>
              <p className="text-neutral">Dans les 5 prochaines minutes</p>
            </div>
            <div className="bg-white rounded-xl p-4 border border-light">
              <div className="text-awlaGreen text-2xl mb-2">🔍</div>
              <h4 className="font-semibold text-dark mb-1">Analyse d'expert</h4>
              <p className="text-neutral">Sous 48h ouvrées</p>
            </div>
            <div className="bg-white rounded-xl p-4 border border-light">
              <div className="text-awlaGreen text-2xl mb-2">📞</div>
              <h4 className="font-semibold text-dark mb-1">Premier contact</h4>
              <p className="text-neutral">Sous 72h maximum</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-6 py-3 bg-awlaGreen text-dark font-semibold rounded-lg hover:bg-dark hover:text-white transition-colors">
            Suivre ma réclamation
          </button>
          <button className="px-6 py-3 border-2 border-awlaGreen text-awlaGreen rounded-lg hover:bg-awlaGreen hover:text-dark transition-colors">
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

      {/* Résumé final */}
      <div className="bg-white rounded-xl p-6 border border-awlaGreen/20 space-y-4">
        <h3 className="text-xl font-semibold text-dark mb-4">Résumé de votre réclamation</h3>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-3">
            <div className="flex items-center space-x-2">
              <span className="w-2 h-2 bg-awlaGreen rounded-full"></span>
              <span className="text-sm text-neutral">Type d'utilisateur :</span>
              <span className="font-medium text-dark">
                {formData.userType === 'particulier' ? 'Particulier' : 'Entreprise'}
              </span>
            </div>
            
            <div className="flex items-center space-x-2">
              <span className="w-2 h-2 bg-awlaGreen rounded-full"></span>
              <span className="text-sm text-neutral">Assurance :</span>
              <span className="font-medium text-dark">
                {formData.insuranceType.startsWith('autre:') 
                  ? formData.insuranceType.slice(6) 
                  : formData.insuranceType}
              </span>
            </div>
            
            <div className="flex items-center space-x-2">
              <span className="w-2 h-2 bg-awlaGreen rounded-full"></span>
              <span className="text-sm text-neutral">Compagnie :</span>
              <span className="font-medium text-dark">
                {formData.insuranceCompany.startsWith('Autre:') 
                  ? formData.insuranceCompany.slice(6) 
                  : formData.insuranceCompany}
              </span>
            </div>
          </div>
          
          <div className="space-y-3">
            <div className="flex items-center space-x-2">
              <span className="w-2 h-2 bg-awlaGreen rounded-full"></span>
              <span className="text-sm text-neutral">Contact :</span>
              <span className="font-medium text-dark">{formData.email}</span>
            </div>
            
            <div className="flex items-center space-x-2">
              <span className="w-2 h-2 bg-awlaGreen rounded-full"></span>
              <span className="text-sm text-neutral">Téléphone :</span>
              <span className="font-medium text-dark">{formData.phone}</span>
            </div>
            
            <div className="flex items-center space-x-2">
              <span className="w-2 h-2 bg-awlaGreen rounded-full"></span>
              <span className="text-sm text-neutral">Montant :</span>
              <span className="font-medium text-dark">
                {formData.claimAmount ? `${formData.claimAmount} MAD` : 
                 formData.claimRange ? `${formData.claimRange} MAD` : 'Non spécifié'}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Conditions d'utilisation */}
      <div className="bg-light rounded-xl p-6 border border-awlaGreen/20">
        <h3 className="text-lg font-semibold text-dark mb-4">Conditions d'utilisation</h3>
        <div className="space-y-3 text-sm">
          <label className="flex items-start space-x-3">
            <input 
              type="checkbox" 
              className="mt-1 w-4 h-4 text-awlaGreen rounded border-gray-300 focus:ring-awlaGreen"
              required
            />
            <span className="text-neutral">
              J'accepte les <a href="#" className="text-awlaGreen hover:underline">conditions générales d'utilisation</a> et 
              la <a href="#" className="text-awlaGreen hover:underline">politique de confidentialité</a>
            </span>
          </label>
          
          <label className="flex items-start space-x-3">
            <input 
              type="checkbox" 
              className="mt-1 w-4 h-4 text-awlaGreen rounded border-gray-300 focus:ring-awlaGreen"
              required
            />
            <span className="text-neutral">
              J'autorise Awla Assurances à me contacter concernant ma réclamation
            </span>
          </label>
          
          <label className="flex items-start space-x-3">
            <input 
              type="checkbox" 
              className="mt-1 w-4 h-4 text-awlaGreen rounded border-gray-300 focus:ring-awlaGreen"
            />
            <span className="text-neutral">
              J'accepte de recevoir des informations sur les services Awla Assurances (optionnel)
            </span>
          </label>
        </div>
      </div>

      {/* Informations importantes */}
      <div className="bg-primary/10 rounded-xl p-6 border border-primary/20">
        <div className="flex items-start space-x-3">
          <div className="text-primary text-xl">ℹ️</div>
          <div>
            <h4 className="font-semibold text-dark mb-2">Informations importantes</h4>
            <ul className="text-neutral text-sm space-y-1">
              <li>• Votre réclamation sera traitée dans un délai maximum de 48h</li>
              <li>• Vous recevrez une confirmation par email avec votre numéro de suivi</li>
              <li>• Nos experts vous contacteront pour affiner votre dossier si nécessaire</li>
              <li>• Aucun frais ne vous sera demandé tant que votre réclamation n'aboutit pas</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Boutons d'action */}
      <div className="flex justify-between pt-8">
        <button
          onClick={onPrev}
          className="px-6 py-3 border-2 border-neutral/20 text-neutral rounded-lg hover:bg-light transition-colors"
        >
          Modifier les informations
        </button>
        
        <button
          onClick={handleSubmit}
          disabled={isSubmitting}
          className="px-8 py-4 bg-awlaGreen text-dark font-semibold rounded-lg hover:bg-dark hover:text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-2"
        >
          {isSubmitting ? (
            <>
              <div className="w-5 h-5 border-2 border-current border-t-transparent rounded-full animate-spin"></div>
              <span>Envoi en cours...</span>
            </>
          ) : (
            <>
              <DocumentTextIcon className="w-5 h-5" />
              <span>Soumettre ma réclamation</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
}
