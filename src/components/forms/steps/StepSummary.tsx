"use client";
import { StepProps } from '@/types/claim';

export default function StepSummary({ formData, onNext, onPrev }: StepProps) {
  const getInsuranceTypeLabel = (type: string) => {
    const types: Record<string, string> = {
      'auto': 'Assurance Auto',
      'habitation': 'Assurance Habitation',
      'sante': 'Assurance Santé',
      'voyage': 'Assurance Voyage',
      'responsabilite': 'Responsabilité Civile',
      'vie': 'Assurance Vie',
      'responsabilite-pro': 'Responsabilité Civile Pro',
      'multirisque-pro': 'Multirisque Professionnelle',
      'flotte': 'Flotte automobile',
      'sante-groupe': 'Santé groupe',
      'cyber': 'Cyber-risques',
      'dommages': 'Dommages aux biens'
    };
    
    if (type.startsWith('autre:')) {
      return type.slice(6);
    }
    
    return types[type] || type;
  };

  return (
    <div className="space-y-8">
      <div className="text-center space-y-4">
        <h2 className="text-3xl font-bold text-dark">Résumé de vos informations</h2>
        <p className="text-lg text-neutral">
          Vérifiez que toutes les informations sont correctes avant de continuer.
        </p>
      </div>

      <div className="space-y-6">
        {/* Profil */}
        <div className="bg-white rounded-xl p-6 border border-awlaGreen/20">
          <h3 className="text-xl font-semibold text-dark mb-4 flex items-center">
            <span className="w-8 h-8 bg-awlaGreen/10 rounded-full flex items-center justify-center text-awlaGreen mr-3">
              👤
            </span>
            Profil
          </h3>
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div>
              <span className="text-neutral">Type :</span>
              <span className="ml-2 font-medium text-dark">
                {formData.userType === 'particulier' ? 'Particulier' : 'Entreprise'}
              </span>
            </div>
            <div>
              <span className="text-neutral">Nom :</span>
              <span className="ml-2 font-medium text-dark">
                {formData.firstName} {formData.lastName}
              </span>
            </div>
            {formData.userType === 'entreprise' && formData.companyName && (
              <div className="md:col-span-2">
                <span className="text-neutral">Entreprise :</span>
                <span className="ml-2 font-medium text-dark">{formData.companyName}</span>
              </div>
            )}
          </div>
        </div>

        {/* Contact */}
        <div className="bg-white rounded-xl p-6 border border-awlaGreen/20">
          <h3 className="text-xl font-semibold text-dark mb-4 flex items-center">
            <span className="w-8 h-8 bg-awlaGreen/10 rounded-full flex items-center justify-center text-awlaGreen mr-3">
              📞
            </span>
            Contact
          </h3>
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div>
              <span className="text-neutral">Email :</span>
              <span className="ml-2 font-medium text-dark">{formData.email}</span>
            </div>
            <div>
              <span className="text-neutral">Téléphone :</span>
              <span className="ml-2 font-medium text-dark">{formData.phone}</span>
            </div>
            <div>
              <span className="text-neutral">Préférence :</span>
              <span className="ml-2 font-medium text-dark">
                {formData.preferredContact === 'email' ? 'Email' : 
                 formData.preferredContact === 'phone' ? 'Téléphone' : 'Les deux'}
              </span>
            </div>
          </div>
        </div>

        {/* Assurance */}
        <div className="bg-white rounded-xl p-6 border border-awlaGreen/20">
          <h3 className="text-xl font-semibold text-dark mb-4 flex items-center">
            <span className="w-8 h-8 bg-awlaGreen/10 rounded-full flex items-center justify-center text-awlaGreen mr-3">
              🛡️
            </span>
            Assurance
          </h3>
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div>
              <span className="text-neutral">Type :</span>
              <span className="ml-2 font-medium text-dark">
                {getInsuranceTypeLabel(formData.insuranceType)}
              </span>
            </div>
            <div>
              <span className="text-neutral">Compagnie :</span>
              <span className="ml-2 font-medium text-dark">
                {formData.insuranceCompany.startsWith('Autre:') 
                  ? formData.insuranceCompany.slice(6) 
                  : formData.insuranceCompany}
              </span>
            </div>
            {formData.contractNumber && (
              <div>
                <span className="text-neutral">N° contrat :</span>
                <span className="ml-2 font-medium text-dark">{formData.contractNumber}</span>
              </div>
            )}
            {formData.intermediary && (
              <div>
                <span className="text-neutral">Intermédiaire :</span>
                <span className="ml-2 font-medium text-dark">{formData.intermediary}</span>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Avertissement */}
      <div className="bg-gold/10 rounded-xl p-6 border border-gold/20">
        <div className="flex items-start space-x-3">
          <div className="text-gold text-xl">⚠️</div>
          <div>
            <h4 className="font-semibold text-dark mb-2">Vérification importante</h4>
            <p className="text-neutral text-sm">
              Les informations que vous avez fournies serviront de base pour traiter votre réclamation. 
              Assurez-vous qu'elles sont exactes et complètes. Vous pourrez les modifier plus tard si nécessaire.
            </p>
          </div>
        </div>
      </div>

      <div className="flex justify-between pt-8">
        <button
          onClick={onPrev}
          className="px-6 py-3 border-2 border-neutral/20 text-neutral rounded-lg hover:bg-light transition-colors"
        >
          Modifier
        </button>
        <button
          onClick={onNext}
          className="px-8 py-4 bg-awlaGreen text-dark font-semibold rounded-lg hover:bg-dark hover:text-white transition-colors"
        >
          Confirmer et continuer
        </button>
      </div>
    </div>
  );
}
