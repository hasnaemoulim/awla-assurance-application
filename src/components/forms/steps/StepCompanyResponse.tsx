"use client";
import { StepProps } from '@/types/claim';

export default function StepCompanyResponse({ formData, updateFormData, onNext, onPrev }: StepProps) {
  return (
    <div className="space-y-8">
      <div className="text-center space-y-4">
        <h2 className="text-3xl font-bold text-dark">Réponse de la compagnie et détails du litige</h2>
        <p className="text-lg text-neutral">
          Décrivez la nature de votre litige et la réponse de votre assureur.
        </p>
      </div>

      <div className="space-y-6">
        {/* Type de litige */}
        <div>
          <label className="block text-dark font-semibold mb-4">
            Nature du litige *
          </label>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { value: 'refus-prise-en-charge', label: 'Refus de prise en charge', icon: '❌' },
              { value: 'indemnisation-insuffisante', label: 'Indemnisation insuffisante', icon: '💰' },
              { value: 'delai-excessif', label: 'Délai excessif', icon: '⏰' },
              { value: 'resiliation-abusive', label: 'Résiliation abusive', icon: '📄' },
              { value: 'augmentation-injustifiee', label: 'Augmentation injustifiée', icon: '📈' },
              { value: 'non-respect-contrat', label: 'Non-respect du contrat', icon: '📋' }
            ].map((type) => (
              <button
                key={type.value}
                onClick={() => updateFormData({ litigeType: type.value })}
                className={`p-4 rounded-xl border-2 transition-all text-left ${
                  formData.litigeType === type.value
                    ? 'border-awlaGreen bg-awlaGreen/10'
                    : 'border-light bg-white hover:border-awlaGreen/50'
                }`}
              >
                <div className="flex items-center space-x-3">
                  <div className="text-2xl">{type.icon}</div>
                  <div>
                    <h3 className="font-semibold text-dark text-sm">{type.label}</h3>
                  </div>
                  {formData.litigeType === type.value && (
                    <div className="ml-auto w-5 h-5 bg-awlaGreen rounded-full flex items-center justify-center">
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

        {/* Description détaillée du litige */}
        <div>
          <label className="block text-dark font-semibold mb-2">
            Description détaillée de votre litige *
          </label>
          <textarea
            value={formData.litigeDescription}
            onChange={(e) => updateFormData({ litigeDescription: e.target.value })}
            rows={6}
            className="w-full p-4 border-2 border-light rounded-xl focus:border-awlaGreen outline-none transition-colors resize-none"
            placeholder="Décrivez en détail votre problème : les faits, les dates importantes, les démarches effectuées, les documents échangés, etc."
          />
          <p className="text-neutral text-sm mt-2">
            Plus votre description sera précise, mieux nous pourrons vous aider. N'hésitez pas à mentionner tous les détails importants.
          </p>
        </div>

        {/* Réponse de la compagnie */}
        {formData.hasContactedCompany && (
          <div>
            <label className="block text-dark font-semibold mb-4">
              Réponse de votre compagnie d'assurance
            </label>
            <div className="space-y-3">
              {[
                { value: 'refus-formel', label: 'Refus formel', color: 'bg-red-100 border-red-200' },
                { value: 'acceptation-partielle', label: 'Acceptation partielle', color: 'bg-yellow-100 border-yellow-200' },
                { value: 'demande-complement', label: 'Demande de complément d\'information', color: 'bg-blue-100 border-blue-200' },
                { value: 'pas-de-reponse', label: 'Pas de réponse', color: 'bg-gray-100 border-gray-200' },
                { value: 'en-cours-etude', label: 'En cours d\'étude', color: 'bg-purple-100 border-purple-200' }
              ].map((response) => (
                <button
                  key={response.value}
                  onClick={() => updateFormData({ companyResponse: response.value })}
                  className={`w-full p-4 rounded-xl border-2 transition-all text-left ${
                    formData.companyResponse === response.value
                      ? 'border-awlaGreen bg-awlaGreen/10'
                      : `${response.color} hover:border-awlaGreen/50`
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-medium text-dark">{response.label}</span>
                    {formData.companyResponse === response.value && (
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

        {/* Détails de la réponse */}
        {formData.companyResponse && (
          <div>
            <label className="block text-dark font-semibold mb-2">
              Détails de la réponse de votre assureur
            </label>
            <textarea
              value={formData.companyResponseDetails}
              onChange={(e) => updateFormData({ companyResponseDetails: e.target.value })}
              rows={4}
              className="w-full p-4 border-2 border-light rounded-xl focus:border-awlaGreen outline-none transition-colors resize-none"
              placeholder="Expliquez en détail la réponse de votre compagnie, les motifs invoqués, les références aux clauses du contrat, etc."
            />
          </div>
        )}

        {/* Documents disponibles */}
        <div>
          <label className="block text-dark font-semibold mb-4">
            Documents en votre possession
          </label>
          <div className="grid md:grid-cols-2 gap-3">
            {[
              'Contrat d\'assurance',
              'Attestation d\'assurance',
              'Correspondances avec l\'assureur',
              'Factures/Devis',
              'Photos du sinistre',
              'Rapport d\'expertise',
              'Témoignages',
              'Procès-verbal (police/gendarmerie)',
              'Certificats médicaux',
              'Autres documents'
            ].map((doc) => (
              <label key={doc} className="flex items-center space-x-3 p-3 rounded-lg hover:bg-light transition-colors cursor-pointer">
                <input
                  type="checkbox"
                  checked={formData.availableDocuments?.includes(doc) || false}
                  onChange={(e) => {
                    const docs = formData.availableDocuments || [];
                    if (e.target.checked) {
                      updateFormData({ availableDocuments: [...docs, doc] });
                    } else {
                      updateFormData({ availableDocuments: docs.filter(d => d !== doc) });
                    }
                  }}
                  className="w-4 h-4 text-awlaGreen border-2 border-neutral rounded focus:ring-awlaGreen focus:ring-2"
                />
                <span className="text-dark text-sm">{doc}</span>
              </label>
            ))}
          </div>
        </div>
      </div>

      {/* Information importante */}
      <div className="bg-awlaGreen/10 rounded-xl p-6 border border-awlaGreen/20">
        <div className="flex items-start space-x-3">
          <div className="text-awlaGreen text-xl">📋</div>
          <div>
            <h4 className="font-semibold text-dark mb-2">Documents importants</h4>
            <p className="text-neutral text-sm">
              Rassemblez tous les documents liés à votre dossier. Même si vous n'avez pas tout, 
              nous pourrons vous aider à constituer un dossier solide. Vous pourrez nous transmettre 
              les documents à l'étape suivante.
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
