"use client";
import { useState } from 'react';
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline';
import { authenticateUser, setCurrentUser, redirectAfterLogin } from '@/lib/auth';
import { LoginCredentials } from '@/types/auth';

export default function LoginForm() {
  const [formData, setFormData] = useState<LoginCredentials>({
    email: '',
    password: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    setError('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      const user = await authenticateUser(formData);
      
      if (user) {
        setCurrentUser(user);
        redirectAfterLogin(user);
      } else {
        setError('Email ou mot de passe incorrect');
      }
    } catch (err) {
      setError('Une erreur est survenue lors de la connexion');
    } finally {
      setIsLoading(false);
    }
  };

  const fillTestCredentials = (userType: 'admin' | 'client') => {
    if (userType === 'admin') {
      setFormData({
        email: 'admin@awla-assurances.ma',
        password: 'test123'
      });
    } else {
      setFormData({
        email: 'client@test.ma',
        password: 'test123'
      });
    }
  };

  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-8 border border-awlaGreen/20">
      {/* Header */}
      <div className="text-center mb-8">
        <div className="w-16 h-16 bg-awlaGreen rounded-2xl flex items-center justify-center mx-auto mb-4">
          <span className="text-white font-bold text-2xl">A</span>
        </div>
        <h1 className="text-3xl font-bold text-dark mb-2">Connexion</h1>
        <p className="text-neutral">Connectez-vous à votre espace Awla Assurances</p>
      </div>

      {/* Boutons de test */}
      <div className="mb-6 p-4 bg-light rounded-xl border border-awlaGreen/20">
        <p className="text-sm text-neutral mb-3 text-center">Comptes de test :</p>
        <div className="grid grid-cols-2 gap-3">
          <button
            onClick={() => fillTestCredentials('admin')}
            className="px-4 py-2 bg-primary/10 text-primary text-xs rounded-lg hover:bg-primary hover:text-white transition-colors"
          >
            Admin
          </button>
          <button
            onClick={() => fillTestCredentials('client')}
            className="px-4 py-2 bg-awlaGreen/10 text-awlaGreen text-xs rounded-lg hover:bg-awlaGreen hover:text-white transition-colors"
          >
            Client
          </button>
        </div>
      </div>

      {/* Formulaire */}
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-dark font-semibold mb-2">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-4 border-2 border-light rounded-xl focus:border-awlaGreen outline-none transition-colors"
            placeholder="votre@email.com"
            required
          />
        </div>

        <div>
          <label className="block text-dark font-semibold mb-2">Mot de passe</label>
          <div className="relative">
            <input
              type={showPassword ? 'text' : 'password'}
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full p-4 border-2 border-light rounded-xl focus:border-awlaGreen outline-none transition-colors pr-12"
              placeholder="••••••••"
              required
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
        </div>

        {error && (
          <div className="bg-red-50 border border-red-200 rounded-xl p-4">
            <p className="text-red-600 text-sm">{error}</p>
          </div>
        )}

        <button
          type="submit"
          disabled={isLoading}
          className="w-full py-4 bg-awlaGreen text-dark font-bold rounded-xl hover:bg-dark hover:text-white transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
        >
          {isLoading ? (
            <>
              <div className="animate-spin w-5 h-5 border-2 border-current border-t-transparent rounded-full mr-2"></div>
              Connexion...
            </>
          ) : (
            'Se connecter'
          )}
        </button>
      </form>

      {/* Liens */}
      <div className="mt-8 text-center space-y-4">
        <div className="flex items-center justify-between text-sm">
          <a href="#" className="text-awlaGreen hover:underline">
            Mot de passe oublié ?
          </a>
          <a href="/auth/register" className="text-neutral hover:text-awlaGreen">
            Créer un compte
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
