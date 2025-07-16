"use client";
import { useState } from 'react';
import { CalendarIcon, FunnelIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { Claim } from '@/types/auth';

interface ClaimHistoryProps {
  claims: Claim[];
}

export default function ClaimHistory({ claims }: ClaimHistoryProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [sortBy, setSortBy] = useState('date-desc');

  const filteredAndSortedClaims = claims
    .filter(claim => {
      const matchesSearch = 
        claim.code.toLowerCase().includes(searchTerm.toLowerCase()) ||
        claim.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
        claim.insuranceCompany.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesStatus = statusFilter === 'all' || claim.status === statusFilter;
      
      return matchesSearch && matchesStatus;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'date-desc':
          return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
        case 'date-asc':
          return new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime();
        case 'amount-desc':
          return parseInt(b.amount) - parseInt(a.amount);
        case 'amount-asc':
          return parseInt(a.amount) - parseInt(b.amount);
        default:
          return 0;
      }
    });

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'resolved': return 'text-green-600 bg-green-100';
      case 'in-progress': return 'text-awlaGreen bg-awlaGreen/20';
      case 'pending': return 'text-gold bg-gold/20';
      case 'rejected': return 'text-red-600 bg-red-100';
      default: return 'text-neutral bg-light';
    }
  };

  const getStatusLabel = (status: string) => {
    switch (status) {
      case 'resolved': return 'Résolu';
      case 'in-progress': return 'En cours';
      case 'pending': return 'En attente';
      case 'rejected': return 'Rejeté';
      default: return 'Inconnu';
    }
  };

  return (
    <div className="space-y-6">
      {/* En-tête et filtres */}
      <div className="bg-white rounded-xl p-6 border border-awlaGreen/20 shadow-lg">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-6">
          <div>
            <h2 className="text-2xl font-bold text-dark">Historique des réclamations</h2>
            <p className="text-neutral">Retrouvez toutes vos réclamations passées et actuelles</p>
          </div>
          
          {/* Statistiques rapides */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-awlaGreen">{claims.length}</div>
              <div className="text-xs text-neutral">Total</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">
                {claims.filter(c => c.status === 'resolved').length}
              </div>
              <div className="text-xs text-neutral">Résolues</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gold">
                {claims.filter(c => c.status === 'pending' || c.status === 'in-progress').length}
              </div>
              <div className="text-xs text-neutral">En cours</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-awlaGreen">
                {Math.round(claims.filter(c => c.status === 'resolved').length / claims.length * 100) || 0}%
              </div>
              <div className="text-xs text-neutral">Succès</div>
            </div>
          </div>
        </div>

        {/* Filtres et recherche */}
        <div className="flex flex-col lg:flex-row gap-4">
          {/* Recherche */}
          <div className="relative flex-1">
            <MagnifyingGlassIcon className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral" />
            <input
              type="text"
              placeholder="Rechercher par code, type ou compagnie..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-light rounded-lg focus:border-awlaGreen focus:ring-2 focus:ring-awlaGreen/20 outline-none"
            />
          </div>

          {/* Filtre par statut */}
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="px-4 py-2 border border-light rounded-lg focus:border-awlaGreen focus:ring-2 focus:ring-awlaGreen/20 outline-none"
          >
            <option value="all">Tous les statuts</option>
            <option value="pending">En attente</option>
            <option value="in-progress">En cours</option>
            <option value="resolved">Résolues</option>
            <option value="rejected">Rejetées</option>
          </select>

          {/* Tri */}
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="px-4 py-2 border border-light rounded-lg focus:border-awlaGreen focus:ring-2 focus:ring-awlaGreen/20 outline-none"
          >
            <option value="date-desc">Plus récentes</option>
            <option value="date-asc">Plus anciennes</option>
            <option value="amount-desc">Montant décroissant</option>
            <option value="amount-asc">Montant croissant</option>
          </select>
        </div>
      </div>

      {/* Tableau des réclamations */}
      <div className="bg-white rounded-xl border border-awlaGreen/20 shadow-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-light">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-semibold text-dark">Code</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-dark">Type</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-dark">Compagnie</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-dark">Montant</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-dark">Statut</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-dark">Date</th>
                <th className="px-6 py-4 text-center text-sm font-semibold text-dark">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-light">
              {filteredAndSortedClaims.map((claim) => (
                <tr key={claim.id} className="hover:bg-light/50 transition-colors">
                  <td className="px-6 py-4">
                    <span className="font-mono text-sm font-medium text-awlaGreen">
                      #{claim.code}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-sm text-dark">{claim.type}</span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-sm text-neutral">{claim.insuranceCompany}</span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-sm font-semibold text-dark">
                      {parseInt(claim.amount).toLocaleString()} MAD
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(claim.status)}`}>
                      {getStatusLabel(claim.status)}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-sm text-neutral">
                      {new Date(claim.createdAt).toLocaleDateString('fr-FR')}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <button className="px-3 py-1 text-sm bg-awlaGreen/10 text-awlaGreen rounded-lg hover:bg-awlaGreen hover:text-white transition-colors">
                      Voir
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Message si aucun résultat */}
        {filteredAndSortedClaims.length === 0 && (
          <div className="text-center py-12">
            <FunnelIcon className="w-12 h-12 text-neutral mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-dark mb-2">Aucune réclamation trouvée</h3>
            <p className="text-neutral">Aucune réclamation ne correspond à vos critères de recherche.</p>
          </div>
        )}
      </div>
    </div>
  );
}
