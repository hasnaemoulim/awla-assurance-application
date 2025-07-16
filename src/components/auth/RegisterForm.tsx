"use client";
import { useState } from 'react';
import { EyeIcon, EyeSlashIcon, UserIcon, BuildingOfficeIcon } from '@heroicons/react/24/outline';
import { setCurrentUser } from '@/lib/auth';
import { RegisterData, User } from '@/types/auth';

export default function RegisterForm() {
  const [formData, setFormData] = useState<RegisterData>({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    phone: '',
    userType: 'particulier',
    companyName: ''
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    
    // Effacer l'erreur du champ modifié
    if (errors[e.target.name]) {
      setErrors({
        ...errors,
        [e.target.name]: ''
      });
    }
  };

  const handleUserTypeChange = (type: 'particulier' | 'entreprise') => {
    setFormData({
      ...formData,
      userType: type,
      companyName: type === 'particulier' ? '' : formData.companyName
    });
  };

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};

    // Validation des champs obligatoires
    if (!formData.firstName.trim()) {
      newErrors.firstName = 'Le prénom est requis';
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Le nom est requis';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'L\'email est requis';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Format d\'email invalide';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Le téléphone est requis';
    } else if (!/^(\+212|0)[5-7][0-9]{8}$/.test(formData.phone.replace(/\s/g, ''))) {
      newErrors.phone = 'Format de téléphone marocain invalide';
    }

    if (!formData.password) {
      newErrors.password = 'Le mot de passe est requis';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Le mot de passe doit contenir au moins 6 caractères';
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = 'Confirmez votre mot de passe';
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Les mots de passe ne correspondent pas';
    }

    if (formData.userType === 'entreprise' && !formData.companyName?.trim()) {
      newErrors.companyName = 'Le nom de l\'entreprise est requis';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsLoading(true);

    try {
      // Simulation d'inscription
      await new Promise(resolve => setTimeout(resolve, 1500));

      // Créer un utilisateur de test
      const newUser: User = {
        id: Date.now().toString(),
        email: formData.email,
        firstName: formData.firstName,
        lastName: formData.lastName,
        role: 'client',
        company: formData.userType === 'entreprise' ? formData.companyName : undefined,
        phone: formData.phone,
        createdAt: new Date().toISOString()
      };

      // Sauvegarder l'utilisateur et rediriger
      setCurrentUser(newUser);
      window.location.href = '/client/dashboard';

    } catch (err) {
      setErrors({ general: 'Une erreur est survenue lors de l\'inscription' });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-8 border border-awlaGreen/20">
      {/* Header */}
      <div className="text-center mb-8">
        <div className="w-16 h-16 bg-awlaGreen rounded-2xl flex items-center justify-center mx-auto mb-4">
          <span className="text-white font-bold text-2xl">A</span>
        </div>
        <h1 className="text-3xl font-bold text-dark mb-2">Créer un compte</h1>
        <p className="text-neutral">Rejoignez Awla Assurances pour défendre vos droits</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Type d'utilisateur */}
        <div>
          <label className="block text-dark font-semibold mb-4">Vous êtes :</label>
          <div className="grid grid-cols-2 gap-4">
            <button
              type="button"
              onClick={() => handleUserTypeChange('particulier')}
              className={`p-4 rounded-xl border-2 transition-all text-left ${
                formData.userType === 'particulier'
                  ? 'border-awlaGreen bg-awlaGreen/10'
                  : 'border-light bg-white hover:border-awlaGreen/50'
              }`}
            >
              <div className="flex items-center space-x-3">
                <UserIcon className={`w-6 h-6 ${
                  formData.userType === 'particulier' ? 'text-awlaGreen' : 'text-neutral'
                }`} />
                <div>
                  <h3 className="font-semibold text-dark">Particulier</h3>
                  <p className="text-sm text-neutral">Personne physique</p>
                </div>
              </div>
            </button>

            <button
              type="button"
              onClick={() => handleUserTypeChange('entreprise')}
              className={`p-4 rounded-xl border-2 transition-all text-left ${
                formData.userType === 'entreprise'
                  ? 'border-awlaGreen bg-awlaGreen/10'
                  : 'border-light bg-white hover:border-awlaGreen/50'
              }`}
            >
              <div className="flex items-center space-x-3">
                <BuildingOfficeIcon className={`w-6 h-6 ${
                  formData.userType === 'entreprise' ? 'text-awlaGreen' : 'text-neutral'
                }`} />
                <div>
                  <h3 className="font-semibold text-dark">Entreprise</h3>
                  <p className="text-sm text-neutral">Personne morale</p>
                </div>
              </div>
            </button>
          </div>
        </div>

        {/* Informations personnelles */}
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-dark font-semibold mb-2">Prénom *</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className={`w-full p-4 border-2 rounded-xl outline-none transition-colors ${
                errors.firstName ? 'border-red-500' : 'border-light focus:border-awlaGreen'
              }`}
              placeholder="Votre prénom"
            />
            {errors.firstName && (
              <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>
            )}
          </div>

          <div>
            <label className="block text-dark font-semibold mb-2">Nom *</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className={`w-full p-4 border-2 rounded-xl outline-none transition-colors ${
                errors.lastName ? 'border-red-500' : 'border-light focus:border-awlaGreen'
              }`}
              placeholder="Votre nom"
            />
            {errors.lastName && (
              <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>
            )}
          </div>
        </div>

        {/* Nom de l'entreprise (si entreprise) */}
        {formData.userType === 'entreprise' && (
          <div>
            <label className="block text-dark font-semibold mb-2">Nom de l'entreprise *</label>
            <input
              type="text"
              name="companyName"
              value={formData.companyName}
              onChange={handleChange}
              className={`w-full p-4 border-2 rounded-xl outline-none transition-colors ${
                errors.companyName ? 'border-red-500' : 'border-light focus:border-awlaGreen'
              }`}
              placeholder="Raison sociale de votre entreprise"
            />
            {errors.companyName && (
              <p className="text-red-500 text-sm mt-1">{errors.companyName}</p>
            )}
          </div>
        )}

        {/* Contact */}
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-dark font-semibold mb-2">Email *</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full p-4 border-2 rounded-xl outline-none transition-colors ${
                errors.email ? 'border-red-500' : 'border-light focus:border-awlaGreen'
              }`}
              placeholder="votre@email.com"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>

          <div>
            <label className="block text-dark font-semibold mb-2">Téléphone *</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className={`w-full p-4 border-2 rounded-xl outline-none transition-colors ${
                errors.phone ? 'border-red-500' : 'border-light focus:border-awlaGreen'
              }`}
              placeholder="+212 6XX XX XX XX"
            />
            {errors.phone && (
              <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
            )}
          </div>
        </div>

        {/* Mots de passe */}
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-dark font-semibold mb-2">Mot de passe *</label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                name="password"
                value={formData.password}
                onChange={handleChange}
                className={`w-full p-4 border-2 rounded-xl outline-none transition-colors pr-12 ${
                  errors.password ? 'border-red-500' : 'border-light focus:border-awlaGreen'
                }`}
                placeholder="••••••••"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-neutral hover:text-awlaGreen"
              >
                {showPassword ? (
                  <EyeSlashIcon className="w-5 h-5" />
                ) : (
                  <EyeIcon className="w-5 h-5" />
                )}
              </button>
            </div>
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">{errors.password}</p>
            )}
          </div>

          <div>
            <label className="block text-dark font-semibold mb-2">Confirmer le mot de passe *</label>
            <div className="relative">
              <input
                type={showConfirmPassword ? 'text' : 'password'}
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                className={`w-full p-4 border-2 rounded-xl outline-none transition-colors pr-12 ${
                  errors.confirmPassword ? 'border-red-500' : 'border-light focus:border-awlaGreen'
                }`}
                placeholder="••••••••"
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-neutral hover:text-awlaGreen"
              >
                {showConfirmPassword ? (
                  <EyeSlashIcon className="w-5 h-5" />
                ) : (
                  <EyeIcon className="w-5 h-5" />
                )}
              </button>
            </div>
            {errors.confirmPassword && (
              <p className="text-red-500 text-sm mt-1">{errors.confirmPassword}</p>
            )}
          </div>
        </div>

        {/* Conditions d'utilisation */}
        <div className="bg-light/50 rounded-xl p-4">
          <label className="flex items-start space-x-3 cursor-pointer">
            <input
              type="checkbox"
              className="w-4 h-4 text-awlaGreen border-2 border-neutral rounded focus:ring-awlaGreen focus:ring-2 mt-1"
              required
            />
            <span className="text-sm text-dark">
              J'accepte les{' '}
              <a href="/cgu" className="text-awlaGreen hover:underline">
                conditions générales d'utilisation
              </a>{' '}
              et la{' '}
              <a href="/confidentialite" className="text-awlaGreen hover:underline">
                politique de confidentialité
              </a>{' '}
              d'Awla Assurances.
            </span>
          </label>
        </div>

        {/* Erreur générale */}
        {errors.general && (
          <div className="bg-red-50 border border-red-200 rounded-xl p-4">
            <p className="text-red-600 text-sm">{errors.general}</p>
          </div>
        )}

        {/* Bouton de soumission */}
        <button
          type="submit"
          disabled={isLoading}
          className="w-full py-4 bg-awlaGreen text-dark font-bold rounded-xl hover:bg-dark hover:text-white transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
        >
          {isLoading ? (
            <>
              <div className="animate-spin w-5 h-5 border-2 border-current border-t-transparent rounded-full mr-2"></div>
              Création du compte...
            </>
          ) : (
            'Créer mon compte'
          )}
        </button>
      </form>

      {/* Liens */}
      <div className="mt-8 text-center space-y-4">
        <div className="text-sm">
          <span className="text-neutral">Vous avez déjà un compte ? </span>
          <a href="/auth/login" className="text-awlaGreen hover:underline font-semibold">
            Se connecter
          </a>
        </div>
        
        <div className="pt-4 border-t border-light">
          <a href="/" className="text-neutral hover:text-awlaGreen text-sm">
            ← Retour à l'accueil
          </a>
        </div>
      </div>
    </div>
  );
}
