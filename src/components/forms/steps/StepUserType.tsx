"use client";
import { UserIcon, BuildingOfficeIcon } from '@heroicons/react/24/outline';
import { StepProps } from '@/types/claim';

export default function StepUserType({ formData, updateFormData, errors, onNext }: StepProps) {
  const options = [
    {
      value: 'particulier',
      title: 'Particulier',
      subtitle: 'Personne physique',
      icon: <UserIcon className="w-8 h-8" />,
      description: 'Vous êtes une personne physique avec une assurance personnelle'
    },
    {
      value: 'entreprise',
      title: 'Entreprise / Association',
      subtitle: 'Personne morale',
      icon: <BuildingOfficeIcon className="w-8 h-8" />,
      description: 'Vous représentez une entreprise ou une association'
    }
  ];

  const handleSelect = (value: 'particulier' | 'entreprise') => {
    console.log('Sélection du type d\'utilisateur:', value);
    updateFormData({ userType: value });
    
    // Passer à l'étape suivante après une courte pause
    setTimeout(() => {
      console.log('Appel de onNext après sélection');
      onNext();
    }, 300);
  };

  return (
    <div className="space-y-8">
      {/* En-tête */}
      <div className="text-center space-y-4">
        <h2 className="text-3xl font-bold text-dark">Vous êtes ?</h2>
        <p className="text-lg text-neutral max-w-md mx-auto">
          Cette information nous aide à adapter le traitement de votre demande.
        </p>
      </div>

      {/* Options */}
      <div className="grid md:grid-cols-2 gap-6">
        {options.map((option) => (
          <button
            key={option.value}
            onClick={() => handleSelect(option.value as 'particulier' | 'entreprise')}
            className={`relative p-8 rounded-2xl border-2 transition-all duration-300 text-left hover:scale-105 ${
              formData.userType === option.value
                ? 'border-awlaGreen bg-awlaGreen/10 shadow-lg'
                : 'border-light bg-white hover:border-awlaGreen/50 hover:shadow-md'
            }`}
          >
            <div className="space-y-4">
              <div className={`w-16 h-16 rounded-xl flex items-center justify-center ${
                formData.userType === option.value
                  ? 'bg-awlaGreen text-white'
                  : 'bg-light text-neutral'
              }`}>
                {option.icon}
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-dark">{option.title}</h3>
                <p className="text-awlaGreen font-medium">{option.subtitle}</p>
              </div>
              
              <p className="text-neutral text-sm leading-relaxed">
                {option.description}
              </p>
            </div>
            
            {formData.userType === option.value && (
              <div className="absolute top-4 right-4 w-6 h-6 bg-awlaGreen rounded-full flex items-center justify-center">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
            )}
          </button>
        ))}
      </div>

      {/* Erreur */}
      {errors.userType && (
        <div className="text-center text-red-500 text-sm bg-red-50 p-4 rounded-lg">
          {errors.userType}
        </div>
      )}

      {/* Bouton manuel (optionnel) */}
      {formData.userType && (
        <div className="text-center">
          <button
            onClick={onNext}
            className="px-8 py-3 bg-awlaGreen text-dark font-semibold rounded-lg hover:bg-dark hover:text-white transition-colors"
          >
            Continuer
          </button>
        </div>
      )}

      {/* Informations supplémentaires */}
      <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-awlaGreen/20">
        <div className="flex items-center space-x-3 mb-4">
          <div className="w-10 h-10 bg-awlaGreen/10 rounded-full flex items-center justify-center">
            <span className="text-awlaGreen">🔒</span>
          </div>
          <h4 className="font-semibold text-dark">Vos données sont protégées</h4>
        </div>
        <p className="text-neutral text-sm">
          Conformément à la réglementation, vos données personnelles sont traitées de manière sécurisée 
          et ne seront utilisées que pour traiter votre réclamation.
        </p>
      </div>
    </div>
  );
}
