"use client";
import { useEffect, useState } from 'react';
import { getCurrentUser } from '@/lib/auth';
import { getClaimsByUserId } from '@/lib/mockData';
import ClientSidebar from '@/components/client/ClientSidebar';
import ClaimStatus from '@/components/client/ClaimStatus';
import ClaimHistory from '@/components/client/ClaimHistory';
import { User, Claim } from '@/types/auth';

export default function ClientDashboard() {
  const [user, setUser] = useState<User | null>(null);
  const [claims, setClaims] = useState<Claim[]>([]);
  const [activeTab, setActiveTab] = useState('overview');

  useEffect(() => {
    const currentUser = getCurrentUser();
    if (!currentUser || currentUser.role !== 'client') {
      window.location.href = '/auth/login';
      return;
    }
    
    setUser(currentUser);
    setClaims(getClaimsByUserId(currentUser.id));
  }, []);

  if (!user) {
    return (
      <div className="min-h-screen bg-light flex items-center justify-center">
        <div className="text-center">
          <div className="w-8 h-8 border-4 border-awlaGreen border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-neutral">Chargement...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-light flex">
      {/* Sidebar */}
      <ClientSidebar currentPage="dashboard" />

      {/* Contenu principal */}
      <div className="flex-1 p-8">
        {/* En-tête */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-dark mb-2">
            Bonjour {user.firstName} ! 👋
          </h1>
          <p className="text-neutral">
            Bienvenue sur votre espace personnel Awla Assurances
          </p>
        </div>

        {/* Onglets */}
        <div className="mb-8">
          <div className="border-b border-light">
            <nav className="flex space-x-8">
              {[
                { id: 'overview', label: 'Vue d\'ensemble' },
                { id: 'status', label: 'Statut des réclamations' },
                { id: 'history', label: 'Historique complet' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                    activeTab === tab.id
                      ? 'border-awlaGreen text-awlaGreen'
                      : 'border-transparent text-neutral hover:text-dark hover:border-light'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </nav>
          </div>
        </div>

        {/* Contenu des onglets */}
        {activeTab === 'overview' && (
          <div className="space-y-8">
            {/* Cartes de résumé */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl p-6 border border-awlaGreen/20 shadow-lg">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-neutral">Réclamations actives</p>
                    <p className="text-2xl font-bold text-awlaGreen">
                      {claims.filter(c => c.status === 'pending' || c.status === 'in-progress').length}
                    </p>
                  </div>
                  <div className="w-12 h-12 bg-awlaGreen/10 rounded-full flex items-center justify-center">
                    <span className="text-awlaGreen text-xl">⚡</span>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 border border-green-200 shadow-lg">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-neutral">Réclamations résolues</p>
                    <p className="text-2xl font-bold text-green-600">
                      {claims.filter(c => c.status === 'resolved').length}
                    </p>
                  </div>
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <span className="text-green-600 text-xl">✅</span>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 border border-gold/20 shadow-lg">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-neutral">Montant total récupéré</p>
                    <p className="text-2xl font-bold text-gold">
                      {claims
                        .filter(c => c.status === 'resolved')
                        .reduce((sum, claim) => sum + parseInt(claim.amount), 0)
                        .toLocaleString()} MAD
                    </p>
                  </div>
                  <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center">
                    <span className="text-gold text-xl">💰</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Aperçu des réclamations récentes */}
            <ClaimStatus claims={claims.slice(0, 3)} />
          </div>
        )}

        {activeTab === 'status' && <ClaimStatus claims={claims} />}
        {activeTab === 'history' && <ClaimHistory claims={claims} />}
      </div>
    </div>
  );
}
