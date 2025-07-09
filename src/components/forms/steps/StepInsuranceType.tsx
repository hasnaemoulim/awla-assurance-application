"use client";
import { StepProps } from '@/types/claim';

export default function StepInsuranceType({ formData, updateFormData, errors, onNext, onPrev }: StepProps) {
  const insuranceTypes = formData.userType === 'particulier' 
    ? [
        { value: 'auto', label: 'Assurance Auto', icon: '🚗' },
        { value: 'habitation', label: 'Assurance Habitation', icon: '🏠' },
        { value: 'sante', label: 'Assurance Santé', icon: '⚕️' },
        { value: 'voyage', label: 'Assurance Voyage', icon: '✈️' },
        { value: 'responsabilite', label: 'Responsabilité Civile', icon: '🛡️' },
        { value: 'vie', label: 'Assurance Vie', icon: '👨‍👩‍👧‍👦' }
      ]
    : [
        { value: 'responsabilite-pro', label: 'Responsabilité Civile Pro', icon: '🏢' },
        { value: 'multirisque-pro', label: 'Multirisque Professionnelle', icon: '🏭' },
        { value: 'flotte', label: 'Flotte automobile', icon: '🚚' },
        { value: 'sante-groupe', label: 'Santé groupe', icon: '👥' },
        { value: 'cyber', label: 'Cyber-risques', icon: '💻' },
        { value: 'dommages', label: 'Dommages aux biens', icon: '⚡' }
      ];

  const handleSelect = (value: string) => {
    updateFormData({ insuranceType: value });
  };

  return (
    <div className="space-y-8">
      <div className="text-center space-y-4">
        <h2 className="text-3xl font-bold text-dark">Type d'assurance concerné</h2>
        <p className="text-lg text-neutral">
          Sélectionnez le type d'assurance pour lequel vous souhaitez faire une réclamation.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        {insuranceTypes.map((type) => (
          <button
            key={type.value}
            onClick={() => handleSelect(type.value)}
            className={`p-6 rounded-xl border-2 transition-all duration-300 text-left hover:scale-105 ${
              formData.insuranceType === type.value
                ? 'border-awlaGreen bg-awlaGreen/10'
                : 'border-light bg-white hover:border-awlaGreen/50'
            }`}
          >
            <div className="flex items-center space-x-4">
              <div className="text-3xl">{type.icon}</div>
              <div>
                <h3 className="font-semibold text-dark">{type.label}</h3>
              </div>
              {formData.insuranceType === type.value && (
                <div className="ml-auto w-6 h-6 bg-awlaGreen rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              )}
            </div>
          </button>
        ))}
      </div>

      {/* Option personnalisée */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-dark">Autre type d'assurance</h3>
        <input
          type="text"
          placeholder="Précisez le type d'assurance..."
          className="w-full p-4 border-2 border-light rounded-xl focus:border-awlaGreen outline-none transition-colors"
          value={formData.insuranceType.startsWith('autre:') ? formData.insuranceType.slice(6) : ''}
          onChange={(e) => updateFormData({ insuranceType: e.target.value ? `autre:${e.target.value}` : '' })}
        />
      </div>

      {errors.insuranceType && (
        <div className="text-center text-red-500 text-sm">
          {errors.insuranceType}
        </div>
      )}

      <div className="flex justify-between pt-8">
        <button
          onClick={onPrev}
          className="px-6 py-3 border-2 border-neutral/20 text-neutral rounded-lg hover:bg-light transition-colors"
        >
          Précédent
        </button>
        <button
          onClick={onNext}
          disabled={!formData.insuranceType}
          className="px-6 py-3 bg-awlaGreen text-dark font-semibold rounded-lg hover:bg-dark hover:text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Suivant
        </button>
      </div>
    </div>
  );
}
