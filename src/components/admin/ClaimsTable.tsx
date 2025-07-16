"use client";
import { useState } from 'react';
import { EyeIcon, PencilIcon } from '@heroicons/react/24/outline';
import Badge from '@/components/ui/Badge';
import { Claim } from '@/types/auth';

interface ClaimsTableProps {
  claims: Claim[];
}

export default function ClaimsTable({ claims }: ClaimsTableProps) {
  const [sortBy, setSortBy] = useState<keyof Claim>('createdAt');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('desc');

  const sortedClaims = [...claims].sort((a, b) => {
    const aValue = a[sortBy];
    const bValue = b[sortBy];
    
    if (sortOrder === 'asc') {
      return aValue > bValue ? 1 : -1;
    } else {
      return aValue < bValue ? 1 : -1;
    }
  });

  const handleSort = (column: keyof Claim) => {
    if (sortBy === column) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortBy(column);
      setSortOrder('desc');
    }
  };

  return (
    <div className="bg-white rounded-2xl border border-light shadow-sm overflow-hidden">
      <div className="p-6 border-b border-light">
        <h2 className="text-xl font-bold text-dark">Réclamations récentes</h2>
        <p className="text-neutral">Gérez et suivez toutes les réclamations</p>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-light">
            <tr>
              <th 
                className="px-6 py-4 text-left text-sm font-semibold text-dark cursor-pointer hover:bg-gray-100"
                onClick={() => handleSort('code')}
              >
                Code
              </th>
              <th 
                className="px-6 py-4 text-left text-sm font-semibold text-dark cursor-pointer hover:bg-gray-100"
                onClick={() => handleSort('userName')}
              >
                Client
              </th>
              <th 
                className="px-6 py-4 text-left text-sm font-semibold text-dark cursor-pointer hover:bg-gray-100"
                onClick={() => handleSort('type')}
              >
                Type
              </th>
              <th 
                className="px-6 py-4 text-left text-sm font-semibold text-dark cursor-pointer hover:bg-gray-100"
                onClick={() => handleSort('amount')}
              >
                Montant
              </th>
              <th 
                className="px-6 py-4 text-left text-sm font-semibold text-dark cursor-pointer hover:bg-gray-100"
                onClick={() => handleSort('status')}
              >
                Statut
              </th>
              <th 
                className="px-6 py-4 text-left text-sm font-semibold text-dark cursor-pointer hover:bg-gray-100"
                onClick={() => handleSort('priority')}
              >
                Priorité
              </th>
              <th 
                className="px-6 py-4 text-left text-sm font-semibold text-dark cursor-pointer hover:bg-gray-100"
                onClick={() => handleSort('createdAt')}
              >
                Date
              </th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-dark">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-light">
            {sortedClaims.map((claim) => (
              <tr key={claim.id} className="hover:bg-light/50 transition-colors">
                <td className="px-6 py-4">
                  <span className="font-mono text-sm text-awlaGreen font-semibold">
                    {claim.code}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <div>
                    <p className="font-medium text-dark">{claim.userName}</p>
                    <p className="text-sm text-neutral">{claim.userEmail}</p>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span className="text-dark">{claim.type}</span>
                </td>
                <td className="px-6 py-4">
                  <span className="font-semibold text-dark">
                    {parseInt(claim.amount).toLocaleString()} MAD
                  </span>
                </td>
                <td className="px-6 py-4">
                  <Badge status={claim.status} />
                </td>
                <td className="px-6 py-4">
                  <Badge priority={claim.priority} />
                </td>
                <td className="px-6 py-4">
                  <span className="text-neutral">
                    {new Date(claim.createdAt).toLocaleDateString('fr-FR')}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center space-x-2">
                    <button className="p-2 text-neutral hover:text-awlaGreen hover:bg-awlaGreen/10 rounded-lg transition-colors">
                      <EyeIcon className="w-4 h-4" />
                    </button>
                    <button className="p-2 text-neutral hover:text-primary hover:bg-primary/10 rounded-lg transition-colors">
                      <PencilIcon className="w-4 h-4" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
