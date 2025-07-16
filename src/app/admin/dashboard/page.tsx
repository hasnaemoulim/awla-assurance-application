"use client";
import { useEffect, useState } from 'react';
import { getCurrentUser } from '@/lib/auth';
import { getAllClaims, getClaimStats } from '@/lib/mockData';
import AdminSidebar from '@/components/admin/AdminSidebar';
import StatsCards from '@/components/admin/StatsCards';
import ClaimsTable from '@/components/admin/ClaimsTable';
import { User, Claim } from '@/types/auth';

export default function AdminDashboard() {
  const [user, setUser] = useState<User | null>(null);
  const [claims, setClaims] = useState<Claim[]>([]);
  const [stats, setStats] = useState<any>(null);

  useEffect(() => {
    const currentUser = getCurrentUser();
    
    if (!currentUser || currentUser.role !== 'admin') {
      window.location.href = '/auth/login';
      return;
    }

    setUser(currentUser);
    setClaims(getAllClaims());
    setStats(getClaimStats());
  }, []);

  if (!user) {
    return (
      <div className="min-h-screen bg-light flex items-center justify-center">
        <div className="animate-spin w-8 h-8 border-2 border-awlaGreen border-t-transparent rounded-full"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-light">
      <div className="flex">
        <AdminSidebar user={user} />
        
        <main className="flex-1 ml-64">
          <div className="p-8">
            {/* Header */}
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-dark mb-2">
                Tableau de bord administrateur
              </h1>
              <p className="text-neutral">
                Bienvenue {user.firstName}, gérez les réclamations et suivez les statistiques.
              </p>
            </div>

            {/* Statistiques */}
            {stats && <StatsCards stats={stats} />}

            {/* Tableau des réclamations */}
            <div className="mt-8">
              <ClaimsTable claims={claims} />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
