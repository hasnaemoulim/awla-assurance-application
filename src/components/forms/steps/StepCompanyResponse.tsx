"use client";
import { StepProps } from '@/types/claim';

export default function StepCompanyResponse({ formData, updateFormData, onNext, onPrev }: StepProps) {
  const responses = [
    { value: 'refus', label: 'Refus', icon: '❌', description: 'La compagnie a refusé ma demande' },
    { value: 'partial', label: 'Acceptation partielle', icon: '⚠️', description: 'Proposition d\'indemnisation insuffisante' },
    { value: 'no-response', label: 'Pas de réponse', icon: '⏳', description: 'Aucune réponse dans les délais' },
    { value: 'unsatisfactory', label: 'Réponse insatisfaisante', icon: '👎', description: 'Réponse inadéquate ou évasive' },
    { value: 'other', label: 'Autre situation', icon: '💬', description: 'Autre problème avec la compagnie' }
  ];

  return (
    <div className="space-y-8">
      <div className="text-center space-y-4">
        <h2 className="text-3xl font-bold text-dark">Réponse de la compagnie</h2>
        <p className="text-lg text-neutral">
          {formData.hasContactedCompany 
            ? "Quelle a été la réponse de votre compagnie d'assurance ?"
            : "Quel type de problème rencontrez-vous avec votre assurance ?"}
        </p>
      </div>

      <div className="space-y-4">
        {responses.map((response) => (
          <button
            key={response.value}
            onClick={() => updateFormData({ companyResponse: response.value })}
            className={`w-full p-6 rounded-xl border-2 transition-all text-left hover:scale-[1.02] ${
              formData.companyResponse === response.value
                ? 'border-awlaGreen bg-awlaGreen/10'
                : 'border-light bg-white hover:border-awlaGreen/50'
            }`}
          >
            <div className="flex items-center space-x-4">
              <div className="text-3xl">{response.icon}</div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-dark">{response.label}</h3>
                <p className="text-neutral text-sm">{response.description}</p>
              </div>
              {formData.companyResponse === response.value && (
                <div className="w-6 h-6 bg-awlaGreen rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              )}
            </div>
          </button>
        ))}
      </div>

      {/* Détails supplémentaires selon la réponse */}
      {formData.companyResponse && (
        <div className="bg-awlaGreen/5 rounded-xl p-6 border border-awlaGreen/20">
          <h3 className="text-lg font-semibold text-dark mb-4">Détails supplémentaires</h3>
          <textarea
            placeholder={
              formData.companyResponse === 'refus' ? "Motif du refus donné par la compagnie..." :
              formData.companyResponse === 'partial' ? "Montant proposé et raisons de votre insatisfaction..." :
              formData.companyResponse === 'no-response' ? "Depuis quand attendez-vous une réponse..." :
              "Décrivez la situation et vos attentes..."
            }
            className="w-full p-4 border-2 border-light rounded-xl focus:border-awlaGreen outline-none transition-colors resize-none h-32"
            value={formData.companyResponse === 'other' ? formData.claimAmount : ''}
            onChange={(e) => {
              if (formData.companyResponse === 'other') {
                updateFormData({ claimAmount: e.target.value });
              }
            }}
          />
        </div>
      )}

      {/* Conseils selon la situation */}
      <div className="bg-primary/10 rounded-xl p-6 border border-primary/20">
        <div className="flex items-start space-x-3">
          <div className="text-primary text-xl">💡</div>
          <div>
            <h4 className="font-semibold text-dark mb-2">Notre expertise vous aide</h4>
            <p className="text-neutral text-sm">
              {formData.companyResponse === 'refus' && 
                "Un refus n'est pas définitif. Nos experts analyseront les motifs et détermineront les recours possibles."}
              {formData.companyResponse === 'partial' && 
                "Une proposition partielle peut souvent être renégociée. Nous évaluerons si elle correspond à vos droits réels."}
              {formData.companyResponse === 'no-response' && 
                "L'absence de réponse dans les délais légaux peut justifier une réclamation. Nous connaissons les procédures."}
              {!formData.companyResponse && 
                "Quelle que soit votre situation, notre équipe d'experts vous accompagnera pour faire valoir vos droits."}
            </p>
          </div>
        </div>
      </div>

      <div className="flex justify-between pt-8">
        <button
          onClick={onPrev}
          className="px-6 py-3 border-2 border-neutral/20 text-neutral rounded-lg hover:bg-light transition-colors"
        >
          Précédent
        </button>
        <button
          onClick={onNext}
          disabled={!formData.companyResponse}
          className="px-6 py-3 bg-awlaGreen text-dark font-semibold rounded-lg hover:bg-dark hover:text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Suivant
        </button>
      </div>
    </div>
  );
}
