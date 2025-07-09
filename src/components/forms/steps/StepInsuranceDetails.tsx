"use client";
import { StepProps } from '@/types/claim';

export default function StepInsuranceDetails({ formData, updateFormData, errors, onNext, onPrev }: StepProps) {
  const companies = [
    'AXA Assurance Maroc', 'Wafa Assurance', 'SAHAM Assurance', 'Atlanta Assurances',
    'MAMDA-MCMA', 'RMA Watanya', 'Zurich Assurance Maroc', 'Allianz Maroc',
    'SANLAM Assurances', 'CAT Assurances', 'La Marocaine Vie', 'Autre'
  ];

  return (
    <div className="space-y-8">
      <div className="text-center space-y-4">
        <h2 className="text-3xl font-bold text-dark">Détails de votre assurance</h2>
        <p className="text-lg text-neutral">
          Informations sur votre contrat d'assurance et votre compagnie.
        </p>
      </div>

      <div className="space-y-6">
        {/* Compagnie d'assurance */}
        <div>
          <label className="block text-dark font-semibold mb-2">Compagnie d'assurance *</label>
          <select
            value={formData.insuranceCompany}
            onChange={(e) => updateFormData({ insuranceCompany: e.target.value })}
            className={`w-full p-4 border-2 rounded-xl outline-none transition-colors ${
              errors.insuranceCompany ? 'border-red-500' : 'border-light focus:border-awlaGreen'
            }`}
          >
            <option value="">Sélectionnez votre compagnie</option>
            {companies.map((company) => (
              <option key={company} value={company}>{company}</option>
            ))}
          </select>
          {errors.insuranceCompany && <p className="text-red-500 text-sm mt-1">{errors.insuranceCompany}</p>}
        </div>

        {/* Autre compagnie */}
        {formData.insuranceCompany === 'Autre' && (
          <div>
            <label className="block text-dark font-semibold mb-2">Précisez la compagnie</label>
            <input
              type="text"
              value={formData.insuranceCompany.startsWith('Autre:') ? formData.insuranceCompany.slice(6) : ''}
              onChange={(e) => updateFormData({ insuranceCompany: `Autre:${e.target.value}` })}
              className="w-full p-4 border-2 border-light rounded-xl focus:border-awlaGreen outline-none transition-colors"
              placeholder="Nom de la compagnie"
            />
          </div>
        )}

        {/* Numéro de contrat */}
        <div>
          <label className="block text-dark font-semibold mb-2">Numéro de contrat</label>
          <input
            type="text"
            value={formData.contractNumber}
            onChange={(e) => updateFormData({ contractNumber: e.target.value })}
            className="w-full p-4 border-2 border-light rounded-xl focus:border-awlaGreen outline-none transition-colors"
            placeholder="Ex: 123456789"
          />
          <p className="text-neutral text-sm mt-2">
            Vous pouvez trouver cette information sur votre attestation d'assurance ou vos courriers.
          </p>
        </div>

        {/* Intermédiaire */}
        <div>
          <label className="block text-dark font-semibold mb-2">Intermédiaire (optionnel)</label>
          <input
            type="text"
            value={formData.intermediary}
            onChange={(e) => updateFormData({ intermediary: e.target.value })}
            className="w-full p-4 border-2 border-light rounded-xl focus:border-awlaGreen outline-none transition-colors"
            placeholder="Agent, courtier, banque..."
          />
          <p className="text-neutral text-sm mt-2">
            Si vous avez souscrit votre contrat via un intermédiaire (agent, courtier, banque).
          </p>
        </div>
      </div>

      {/* Conseil */}
      <div className="bg-gold/10 rounded-xl p-6 border border-gold/20">
        <div className="flex items-start space-x-3">
          <div className="text-gold text-xl">💡</div>
          <div>
            <h4 className="font-semibold text-dark mb-2">Conseil</h4>
            <p className="text-neutral text-sm">
              Rassemblez vos documents d'assurance (contrat, attestations, correspondances) avant de continuer. 
              Ces informations nous aideront à mieux défendre vos intérêts.
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
