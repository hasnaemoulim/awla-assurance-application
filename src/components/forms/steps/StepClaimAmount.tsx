"use client";
import { StepProps } from '@/types/claim';

export default function StepClaimAmount({ formData, updateFormData, onNext, onPrev }: StepProps) {
  return (
    <div className="space-y-8">
      <div className="text-center space-y-4">
        <h2 className="text-3xl font-bold text-dark">Montant de votre réclamation</h2>
        <p className="text-lg text-neutral">
          Estimez le montant de votre préjudice et ce que vous souhaitez obtenir.
        </p>
      </div>

      <div className="space-y-6">
        {/* Montant exact ou estimation */}
        <div>
          <label className="block text-dark font-semibold mb-4">
            Connaissez-vous le montant exact de votre préjudice ?
          </label>
          <div className="grid md:grid-cols-2 gap-4">
            <button
              onClick={() => updateFormData({ hasExactAmount: true })}
              className={`p-6 rounded-xl border-2 transition-all text-left ${
                formData.hasExactAmount
                  ? 'border-awlaGreen bg-awlaGreen/10'
                  : 'border-light bg-white hover:border-awlaGreen/50'
              }`}
            >
              <div className="flex items-center space-x-3">
                <div className={`w-6 h-6 rounded-full border-2 ${
                  formData.hasExactAmount ? 'border-awlaGreen bg-awlaGreen' : 'border-neutral'
                }`}>
                  {formData.hasExactAmount && (
                    <div className="w-full h-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  )}
                </div>
                <div>
                  <h3 className="font-semibold text-dark">Oui, montant exact</h3>
                  <p className="text-sm text-neutral">J'ai des factures/devis précis</p>
                </div>
              </div>
            </button>

            <button
              onClick={() => updateFormData({ hasExactAmount: false })}
              className={`p-6 rounded-xl border-2 transition-all text-left ${
                formData.hasExactAmount === false
                  ? 'border-awlaGreen bg-awlaGreen/10'
                  : 'border-light bg-white hover:border-awlaGreen/50'
              }`}
            >
              <div className="flex items-center space-x-3">
                <div className={`w-6 h-6 rounded-full border-2 ${
                  formData.hasExactAmount === false ? 'border-awlaGreen bg-awlaGreen' : 'border-neutral'
                }`}>
                  {formData.hasExactAmount === false && (
                    <div className="w-full h-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  )}
                </div>
                <div>
                  <h3 className="font-semibold text-dark">Non, estimation</h3>
                  <p className="text-sm text-neutral">Je donne une fourchette approximative</p>
                </div>
              </div>
            </button>
          </div>
        </div>

        {/* Montant exact */}
        {formData.hasExactAmount && (
          <div>
            <label className="block text-dark font-semibold mb-2">
              Montant exact du préjudice (en MAD)
            </label>
            <div className="relative">
              <input
                type="number"
                value={formData.exactAmount}
                onChange={(e) => updateFormData({ exactAmount: e.target.value })}
                className="w-full p-4 border-2 border-light rounded-xl focus:border-awlaGreen outline-none transition-colors pr-16"
                placeholder="Ex: 15000"
              />
              <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-neutral">
                MAD
              </div>
            </div>
            <p className="text-neutral text-sm mt-2">
              Basé sur vos factures, devis ou évaluations professionnelles.
            </p>
          </div>
        )}

        {/* Fourchette d'estimation */}
        {formData.hasExactAmount === false && (
          <div>
            <label className="block text-dark font-semibold mb-4">
              Fourchette d'estimation de votre préjudice
            </label>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { value: '0-5000', label: 'Moins de 5 000 MAD' },
                { value: '5000-15000', label: '5 000 - 15 000 MAD' },
                { value: '15000-50000', label: '15 000 - 50 000 MAD' },
                { value: '50000-100000', label: '50 000 - 100 000 MAD' },
                { value: '100000-500000', label: '100 000 - 500 000 MAD' },
                { value: '500000+', label: 'Plus de 500 000 MAD' }
              ].map((range) => (
                <button
                  key={range.value}
                  onClick={() => updateFormData({ claimRange: range.value })}
                  className={`p-4 rounded-xl border-2 transition-all text-left ${
                    formData.claimRange === range.value
                      ? 'border-awlaGreen bg-awlaGreen/10'
                      : 'border-light bg-white hover:border-awlaGreen/50'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-medium text-dark">{range.label}</span>
                    {formData.claimRange === range.value && (
                      <div className="w-5 h-5 bg-awlaGreen rounded-full flex items-center justify-center">
                        <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                    )}
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Détail du calcul */}
        <div>
          <label className="block text-dark font-semibold mb-2">
            Détail du calcul de votre préjudice
          </label>
          <textarea
            value={formData.damageDetails}
            onChange={(e) => updateFormData({ damageDetails: e.target.value })}
            rows={4}
            className="w-full p-4 border-2 border-light rounded-xl focus:border-awlaGreen outline-none transition-colors resize-none"
            placeholder="Expliquez comment vous avez calculé votre préjudice : frais de réparation, perte de revenus, frais médicaux, préjudice moral, etc."
          />
        </div>

        {/* Objectif de réclamation */}
        <div>
          <label className="block text-dark font-semibold mb-4">
            Que souhaitez-vous obtenir ?
          </label>
          <div className="space-y-3">
            {[
              { value: 'indemnisation-complete', label: 'Indemnisation complète du préjudice' },
              { value: 'remboursement-frais', label: 'Remboursement des frais engagés' },
              { value: 'prise-charge-reparation', label: 'Prise en charge des réparations' },
              { value: 'complement-indemnisation', label: 'Complément d\'indemnisation' },
              { value: 'annulation-decision', label: 'Annulation de la décision de l\'assureur' }
            ].map((objective) => (
              <label key={objective.value} className="flex items-center space-x-3 p-3 rounded-lg hover:bg-light transition-colors cursor-pointer">
                <input
                  type="checkbox"
                  checked={formData.claimObjectives?.includes(objective.value) || false}
                  onChange={(e) => {
                    const objectives = formData.claimObjectives || [];
                    if (e.target.checked) {
                      updateFormData({ claimObjectives: [...objectives, objective.value] });
                    } else {
                      updateFormData({ claimObjectives: objectives.filter(o => o !== objective.value) });
                    }
                  }}
                  className="w-4 h-4 text-awlaGreen border-2 border-neutral rounded focus:ring-awlaGreen focus:ring-2"
                />
                <span className="text-dark">{objective.label}</span>
              </label>
            ))}
          </div>
        </div>
      </div>

      {/* Information tarification */}
      <div className="bg-gold/10 rounded-xl p-6 border border-gold/20">
        <div className="flex items-start space-x-3">
          <div className="text-gold text-xl">💰</div>
          <div>
            <h4 className="font-semibold text-dark mb-2">Nos honoraires</h4>
            <p className="text-neutral text-sm">
              Nos honoraires sont calculés en pourcentage du montant récupéré. 
              Aucun frais ne vous sera facturé si nous n'obtenons pas d'indemnisation pour vous.
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
          className="px-6 py-3 bg-awlaGreen text-dark font-semibold rounded-lg hover:bg-dark hover:text-white transition-colors"
        >
          Suivant
        </button>
      </div>
    </div>
  );
}
