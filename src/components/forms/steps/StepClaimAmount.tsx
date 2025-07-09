"use client";
import { StepProps } from '@/types/claim';

export default function StepClaimAmount({ formData, updateFormData, onNext, onPrev }: StepProps) {
  const ranges = [
    { value: '0-5000', label: 'Moins de 5 000 MAD', description: 'Petits sinistres, franchises' },
    { value: '5000-20000', label: '5 000 - 20 000 MAD', description: 'Dégâts modérés, remboursements partiels' },
    { value: '20000-50000', label: '20 000 - 50 000 MAD', description: 'Sinistres importants, véhicules' },
    { value: '50000-100000', label: '50 000 - 100 000 MAD', description: 'Gros sinistres, dommages majeurs' },
    { value: '100000+', label: 'Plus de 100 000 MAD', description: 'Sinistres exceptionnels, pertes importantes' }
  ];

  return (
    <div className="space-y-8">
      <div className="text-center space-y-4">
        <h2 className="text-3xl font-bold text-dark">Montant de votre réclamation</h2>
        <p className="text-lg text-neutral">
          Quel est le montant que vous souhaitez récupérer ?
        </p>
      </div>

      <div className="space-y-6">
        {/* Montant exact */}
        <div>
          <label className="block text-dark font-semibold mb-2">
            Montant exact (si connu)
          </label>
          <div className="relative">
            <input
              type="number"
              value={formData.claimAmount}
              onChange={(e) => updateFormData({ claimAmount: e.target.value })}
              className="w-full p-4 border-2 border-light rounded-xl focus:border-awlaGreen outline-none transition-colors pr-20"
              placeholder="0"
              min="0"
            />
            <span className="absolute right-4 top-1/2 transform -translate-y-1/2 text-neutral">MAD</span>
          </div>
          <p className="text-neutral text-sm mt-2">
            Montant précis que vous demandez à votre assurance
          </p>
        </div>

        {/* Ou fourchette */}
        <div className="text-center">
          <span className="px-4 py-2 bg-light rounded-full text-neutral text-sm">
            OU sélectionnez une fourchette
          </span>
        </div>

        {/* Fourchettes de montant */}
        <div className="space-y-3">
          {ranges.map((range) => (
            <button
              key={range.value}
              onClick={() => updateFormData({ claimRange: range.value })}
              className={`w-full p-4 rounded-xl border-2 transition-all text-left hover:scale-[1.01] ${
                formData.claimRange === range.value
                  ? 'border-awlaGreen bg-awlaGreen/10'
                  : 'border-light bg-white hover:border-awlaGreen/50'
              }`}
            >
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold text-dark">{range.label}</h3>
                  <p className="text-neutral text-sm">{range.description}</p>
                </div>
                {formData.claimRange === range.value && (
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
      </div>

      {/* Informations importantes */}
      <div className="grid md:grid-cols-2 gap-4">
        <div className="bg-awlaGreen/10 rounded-xl p-6 border border-awlaGreen/20">
          <div className="flex items-start space-x-3">
            <div className="text-awlaGreen text-xl">💰</div>
            <div>
              <h4 className="font-semibold text-dark mb-2">Évaluation gratuite</h4>
              <p className="text-neutral text-sm">
                Nos experts évalueront si le montant demandé est justifié et optimiseront votre réclamation.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gold/10 rounded-xl p-6 border border-gold/20">
          <div className="flex items-start space-x-3">
            <div className="text-gold text-xl">📈</div>
            <div>
              <h4 className="font-semibold text-dark mb-2">Maximisation</h4>
              <p className="text-neutral text-sm">
                Nous identifions souvent des postes d'indemnisation non réclamés par les assurés.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Conseil */}
      <div className="bg-primary/10 rounded-xl p-6 border border-primary/20">
        <div className="flex items-start space-x-3">
          <div className="text-primary text-xl">💡</div>
          <div>
            <h4 className="font-semibold text-dark mb-2">Conseil d'expert</h4>
            <p className="text-neutral text-sm">
              Si vous n'êtes pas certain du montant, ne vous inquiétez pas. Une estimation approximative 
              suffit pour commencer. Nos experts affineront l'évaluation avec vous.
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
          disabled={!formData.claimAmount && !formData.claimRange}
          className="px-6 py-3 bg-awlaGreen text-dark font-semibold rounded-lg hover:bg-dark hover:text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Suivant
        </button>
      </div>
    </div>
  );
}
