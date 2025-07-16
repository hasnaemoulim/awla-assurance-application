"use client";
import { StepProps } from '@/types/claim';

export default function StepContactHistory({ formData, updateFormData, onNext, onPrev }: StepProps) {
  return (
    <div className="space-y-8">
      <div className="text-center space-y-4">
        <h2 className="text-3xl font-bold text-dark">Historique des contacts</h2>
        <p className="text-lg text-neutral">
          Ces informations nous aident à comprendre les démarches déjà entreprises.
        </p>
      </div>

      <div className="space-y-8">
        {/* Question 1 : Contact avec la compagnie */}
        <div className="bg-white rounded-xl p-6 border border-awlaGreen/20">
          <label className="block text-dark font-semibold mb-4">
            Avez-vous déjà contacté votre compagnie d'assurance pour ce problème ?
          </label>
          <div className="grid md:grid-cols-2 gap-4">
            <button
              onClick={() => updateFormData({ hasContactedCompany: true })}
              className={`p-6 rounded-xl border-2 transition-all text-left ${
                formData.hasContactedCompany
                  ? 'border-awlaGreen bg-awlaGreen/10'
                  : 'border-light bg-white hover:border-awlaGreen/50'
              }`}
            >
              <div className="flex items-center space-x-3">
                <div className={`w-6 h-6 rounded-full border-2 ${
                  formData.hasContactedCompany ? 'border-awlaGreen bg-awlaGreen' : 'border-neutral'
                }`}>
                  {formData.hasContactedCompany && (
                    <div className="w-full h-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  )}
                </div>
                <div>
                  <h3 className="font-semibold text-dark">Oui</h3>
                  <p className="text-sm text-neutral">J'ai déjà contacté ma compagnie</p>
                </div>
              </div>
            </button>

            <button
              onClick={() => updateFormData({ hasContactedCompany: false })}
              className={`p-6 rounded-xl border-2 transition-all text-left ${
                formData.hasContactedCompany === false
                  ? 'border-awlaGreen bg-awlaGreen/10'
                  : 'border-light bg-white hover:border-awlaGreen/50'
              }`}
            >
              <div className="flex items-center space-x-3">
                <div className={`w-6 h-6 rounded-full border-2 ${
                  formData.hasContactedCompany === false ? 'border-awlaGreen bg-awlaGreen' : 'border-neutral'
                }`}>
                  {formData.hasContactedCompany === false && (
                    <div className="w-full h-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  )}
                </div>
                <div>
                  <h3 className="font-semibold text-dark">Non</h3>
                  <p className="text-sm text-neutral">C'est mon premier contact</p>
                </div>
              </div>
            </button>
          </div>
        </div>

        {/* Question 2 : Justice ou ACAPS */}
        <div className="bg-white rounded-xl p-6 border border-awlaGreen/20">
          <label className="block text-dark font-semibold mb-4">
            Avez-vous déjà saisi la justice ou un organisme de contrôle comme l'ACAPS ?
          </label>
          <div className="grid md:grid-cols-2 gap-4">
            <button
              onClick={() => updateFormData({ hasContactedAuthorities: true })}
              className={`p-6 rounded-xl border-2 transition-all text-left ${
                formData.hasContactedAuthorities
                  ? 'border-awlaGreen bg-awlaGreen/10'
                  : 'border-light bg-white hover:border-awlaGreen/50'
              }`}
            >
              <div className="flex items-center space-x-3">
                <div className={`w-6 h-6 rounded-full border-2 ${
                  formData.hasContactedAuthorities ? 'border-awlaGreen bg-awlaGreen' : 'border-neutral'
                }`}>
                  {formData.hasContactedAuthorities && (
                    <div className="w-full h-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  )}
                </div>
                <div>
                  <h3 className="font-semibold text-dark">Oui</h3>
                  <p className="text-sm text-neutral">J'ai saisi la justice ou l'ACAPS</p>
                </div>
              </div>
            </button>

            <button
              onClick={() => updateFormData({ hasContactedAuthorities: false })}
              className={`p-6 rounded-xl border-2 transition-all text-left ${
                formData.hasContactedAuthorities === false
                  ? 'border-awlaGreen bg-awlaGreen/10'
                  : 'border-light bg-white hover:border-awlaGreen/50'
              }`}
            >
              <div className="flex items-center space-x-3">
                <div className={`w-6 h-6 rounded-full border-2 ${
                  formData.hasContactedAuthorities === false ? 'border-awlaGreen bg-awlaGreen' : 'border-neutral'
                }`}>
                  {formData.hasContactedAuthorities === false && (
                    <div className="w-full h-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  )}
                </div>
                <div>
                  <h3 className="font-semibold text-dark">Non</h3>
                  <p className="text-sm text-neutral">Aucune démarche judiciaire</p>
                </div>
              </div>
            </button>
          </div>

          {/* Détails si démarches judiciaires */}
          {formData.hasContactedAuthorities && (
            <div className="mt-6 space-y-4 bg-primary/5 rounded-xl p-6 border border-primary/20">
              <h3 className="text-lg font-semibold text-dark">Détails des démarches</h3>
              
              <div>
                <label className="block text-dark font-semibold mb-2">
                  Organisme ou juridiction saisi
                </label>
                <select
                  value={formData.authorityType || ''}
                  onChange={(e) => updateFormData({ authorityType: e.target.value })}
                  className="w-full p-4 border-2 border-light rounded-xl focus:border-awlaGreen outline-none transition-colors"
                >
                  <option value="">Sélectionnez</option>
                  <option value="acaps">ACAPS (Autorité de Contrôle des Assurances)</option>
                  <option value="tribunal">Tribunal de première instance</option>
                  <option value="commercial">Tribunal de commerce</option>
                  <option value="mediation">Médiateur de l'assurance</option>
                  <option value="autre">Autre organisme</option>
                </select>
              </div>

              <div>
                <label className="block text-dark font-semibold mb-2">
                  Date de la saisine
                </label>
                <input
                  type="date"
                  value={formData.authorityContactDate || ''}
                  onChange={(e) => updateFormData({ authorityContactDate: e.target.value })}
                  className="w-full p-4 border-2 border-light rounded-xl focus:border-awlaGreen outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block text-dark font-semibold mb-2">
                  Numéro de dossier (si communiqué)
                </label>
                <input
                  type="text"
                  value={formData.authorityCaseNumber || ''}
                  onChange={(e) => updateFormData({ authorityCaseNumber: e.target.value })}
                  className="w-full p-4 border-2 border-light rounded-xl focus:border-awlaGreen outline-none transition-colors"
                  placeholder="Ex: ACAPS-2024-XXX ou TPI-XXX"
                />
              </div>

              <div>
                <label className="block text-dark font-semibold mb-2">
                  Statut actuel de la procédure
                </label>
                <select
                  value={formData.authorityStatus || ''}
                  onChange={(e) => updateFormData({ authorityStatus: e.target.value })}
                  className="w-full p-4 border-2 border-light rounded-xl focus:border-awlaGreen outline-none transition-colors"
                >
                  <option value="">Sélectionnez</option>
                  <option value="en-cours">En cours d'instruction</option>
                  <option value="attente-reponse">En attente de réponse</option>
                  <option value="audience-programmee">Audience programmée</option>
                  <option value="decision-rendue">Décision rendue</option>
                  <option value="appel">En appel</option>
                  <option value="autre">Autre situation</option>
                </select>
              </div>
            </div>
          )}
        </div>

        {/* Détails si contact précédent avec la compagnie */}
        {formData.hasContactedCompany && (
          <div className="bg-awlaGreen/5 rounded-xl p-6 border border-awlaGreen/20">
            <h3 className="text-lg font-semibold text-dark mb-4">Détails du contact avec la compagnie</h3>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-dark font-semibold mb-2">Date du dernier contact</label>
                <input
                  type="date"
                  value={formData.contactDate}
                  onChange={(e) => updateFormData({ contactDate: e.target.value })}
                  className="w-full p-4 border-2 border-light rounded-xl focus:border-awlaGreen outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block text-dark font-semibold mb-2">Date du sinistre</label>
                <input
                  type="date"
                  value={formData.sinisterDate}
                  onChange={(e) => updateFormData({ sinisterDate: e.target.value })}
                  className="w-full p-4 border-2 border-light rounded-xl focus:border-awlaGreen outline-none transition-colors"
                />
              </div>
            </div>

            <div className="mt-4">
              <label className="block text-dark font-semibold mb-2">
                Numéro de sinistre (si communiqué)
              </label>
              <input
                type="text"
                value={formData.sinisterNumber}
                onChange={(e) => updateFormData({ sinisterNumber: e.target.value })}
                className="w-full p-4 border-2 border-light rounded-xl focus:border-awlaGreen outline-none transition-colors"
                placeholder="Ex: SIN123456789"
              />
            </div>
          </div>
        )}
      </div>

      {/* Information importante */}
      <div className="bg-primary/10 rounded-xl p-6 border border-primary/20">
        <div className="flex items-start space-x-3">
          <div className="text-primary text-xl">ℹ️</div>
          <div>
            <h4 className="font-semibold text-dark mb-2">Information importante</h4>
            <p className="text-neutral text-sm">
              Même si vous avez déjà entrepris des démarches, notre intervention peut être complémentaire 
              et optimiser vos chances de succès. Nous coordonnons nos actions avec les procédures en cours.
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
