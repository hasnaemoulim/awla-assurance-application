"use client";
import { StepProps } from '@/types/claim';

export default function StepPersonalInfo({ formData, updateFormData, errors, onNext, onPrev }: StepProps) {
  return (
    <div className="space-y-8">
      <div className="text-center space-y-4">
        <h2 className="text-3xl font-bold text-dark">Informations personnelles</h2>
        <p className="text-lg text-neutral">
          Ces informations nous permettront de traiter votre réclamation efficacement.
        </p>
      </div>

      <div className="space-y-6">
        {/* Nom et prénom */}
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-dark font-semibold mb-2">Prénom *</label>
            <input
              type="text"
              value={formData.firstName}
              onChange={(e) => updateFormData({ firstName: e.target.value })}
              className={`w-full p-4 border-2 rounded-xl outline-none transition-colors ${
                errors.firstName ? 'border-red-500' : 'border-light focus:border-awlaGreen'
              }`}
              placeholder="Votre prénom"
            />
            {errors.firstName && <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>}
          </div>
          
          <div>
            <label className="block text-dark font-semibold mb-2">Nom *</label>
            <input
              type="text"
              value={formData.lastName}
              onChange={(e) => updateFormData({ lastName: e.target.value })}
              className={`w-full p-4 border-2 rounded-xl outline-none transition-colors ${
                errors.lastName ? 'border-red-500' : 'border-light focus:border-awlaGreen'
              }`}
              placeholder="Votre nom"
            />
            {errors.lastName && <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>}
          </div>
        </div>

        {/* Statut assuré */}
        <div>
          <label className="block text-dark font-semibold mb-4">Vous êtes :</label>
          <div className="grid md:grid-cols-2 gap-4">
            <button
              onClick={() => updateFormData({ isAssured: true })}
              className={`p-4 rounded-xl border-2 transition-all text-left ${
                formData.isAssured
                  ? 'border-awlaGreen bg-awlaGreen/10'
                  : 'border-light bg-white hover:border-awlaGreen/50'
              }`}
            >
              <div className="flex items-center space-x-3">
                <div className={`w-5 h-5 rounded-full border-2 ${
                  formData.isAssured ? 'border-awlaGreen bg-awlaGreen' : 'border-neutral'
                }`}>
                  {formData.isAssured && (
                    <div className="w-full h-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                  )}
                </div>
                <div>
                  <h3 className="font-semibold text-dark">L'assuré</h3>
                  <p className="text-sm text-neutral">Vous êtes la personne assurée</p>
                </div>
              </div>
            </button>

            <button
              onClick={() => updateFormData({ isAssured: false })}
              className={`p-4 rounded-xl border-2 transition-all text-left ${
                !formData.isAssured && formData.hasOwnProperty('isAssured')
                  ? 'border-awlaGreen bg-awlaGreen/10'
                  : 'border-light bg-white hover:border-awlaGreen/50'
              }`}
            >
              <div className="flex items-center space-x-3">
                <div className={`w-5 h-5 rounded-full border-2 ${
                  !formData.isAssured && formData.hasOwnProperty('isAssured') ? 'border-awlaGreen bg-awlaGreen' : 'border-neutral'
                }`}>
                  {!formData.isAssured && formData.hasOwnProperty('isAssured') && (
                    <div className="w-full h-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                  )}
                </div>
                <div>
                  <h3 className="font-semibold text-dark">Un représentant</h3>
                  <p className="text-sm text-neutral">Vous agissez pour le compte de l'assuré</p>
                </div>
              </div>
            </button>
          </div>
        </div>

        {/* Champs spécifiques entreprise */}
        {formData.userType === 'entreprise' && (
          <>
            <div>
              <label className="block text-dark font-semibold mb-2">Nom de l'entreprise *</label>
              <input
                type="text"
                value={formData.companyName}
                onChange={(e) => updateFormData({ companyName: e.target.value })}
                className="w-full p-4 border-2 border-light rounded-xl focus:border-awlaGreen outline-none transition-colors"
                placeholder="Raison sociale de l'entreprise"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-dark font-semibold mb-2">Type d'entreprise</label>
                <select
                  value={formData.companyType}
                  onChange={(e) => updateFormData({ companyType: e.target.value })}
                  className="w-full p-4 border-2 border-light rounded-xl focus:border-awlaGreen outline-none transition-colors"
                >
                  <option value="">Sélectionnez</option>
                  <option value="sarl">SARL</option>
                  <option value="sa">SA</option>
                  <option value="sas">SAS</option>
                  <option value="eurl">EURL</option>
                  <option value="association">Association</option>
                  <option value="autre">Autre</option>
                </select>
              </div>

              <div>
                <label className="block text-dark font-semibold mb-2">Nombre d'employés</label>
                <select
                  value={formData.employeeCount}
                  onChange={(e) => updateFormData({ employeeCount: e.target.value })}
                  className="w-full p-4 border-2 border-light rounded-xl focus:border-awlaGreen outline-none transition-colors"
                >
                  <option value="">Sélectionnez</option>
                  <option value="1-10">1 à 10</option>
                  <option value="11-50">11 à 50</option>
                  <option value="51-250">51 à 250</option>
                  <option value="250+">Plus de 250</option>
                </select>
              </div>
            </div>
          </>
        )}
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
