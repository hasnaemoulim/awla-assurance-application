"use client";
import { StepProps } from '@/types/claim';

export default function StepContactInfo({ formData, updateFormData, errors, onNext, onPrev }: StepProps) {
  return (
    <div className="space-y-8">
      <div className="text-center space-y-4">
        <h2 className="text-3xl font-bold text-dark">Informations de contact</h2>
        <p className="text-lg text-neutral">
          Comment pouvons-nous vous joindre pour le suivi de votre réclamation ?
        </p>
      </div>

      <div className="space-y-6">
        {/* Email */}
        <div>
          <label className="block text-dark font-semibold mb-2">Adresse email *</label>
          <input
            type="email"
            value={formData.email}
            onChange={(e) => updateFormData({ email: e.target.value })}
            className={`w-full p-4 border-2 rounded-xl outline-none transition-colors ${
              errors.email ? 'border-red-500' : 'border-light focus:border-awlaGreen'
            }`}
            placeholder="votre@email.com"
          />
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
        </div>

        {/* Téléphone */}
        <div>
          <label className="block text-dark font-semibold mb-2">Numéro de téléphone *</label>
          <input
            type="tel"
            value={formData.phone}
            onChange={(e) => updateFormData({ phone: e.target.value })}
            className={`w-full p-4 border-2 rounded-xl outline-none transition-colors ${
              errors.phone ? 'border-red-500' : 'border-light focus:border-awlaGreen'
            }`}
            placeholder="+212 6XX XX XX XX"
          />
          {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
        </div>

        {/* Préférence de contact */}
        <div>
          <label className="block text-dark font-semibold mb-4">Moyen de contact préféré</label>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              { value: 'email', label: 'Email', icon: '📧' },
              { value: 'phone', label: 'Téléphone', icon: '📞' },
              { value: 'both', label: 'Les deux', icon: '📱' }
            ].map((option) => (
              <button
                key={option.value}
                onClick={() => updateFormData({ preferredContact: option.value })}
                className={`p-4 rounded-xl border-2 transition-all ${
                  formData.preferredContact === option.value
                    ? 'border-awlaGreen bg-awlaGreen/10'
                    : 'border-light bg-white hover:border-awlaGreen/50'
                }`}
              >
                <div className="text-center space-y-2">
                  <div className="text-2xl">{option.icon}</div>
                  <div className="font-semibold text-dark">{option.label}</div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Information de sécurité */}
      <div className="bg-awlaGreen/10 rounded-xl p-6 border border-awlaGreen/20">
        <div className="flex items-start space-x-3">
          <div className="text-awlaGreen text-xl">🔐</div>
          <div>
            <h4 className="font-semibold text-dark mb-2">Protection de vos données</h4>
            <p className="text-neutral text-sm">
              Vos informations de contact sont sécurisées et ne seront utilisées que pour le suivi de votre réclamation. 
              Vous recevrez des notifications importantes concernant l'avancement de votre dossier.
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
