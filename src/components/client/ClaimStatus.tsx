"use client";
import { useState } from 'react';
import { CheckCircleIcon, ClockIcon, ExclamationTriangleIcon, XCircleIcon } from '@heroicons/react/24/outline';
import { Claim } from '@/types/auth';

interface ClaimStatusProps {
  claims: Claim[];
}

export default function ClaimStatus({ claims }: ClaimStatusProps) {
  const [selectedClaim, setSelectedClaim] = useState<Claim | null>(null);

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'resolved':
        return <CheckCircleIcon className="w-6 h-6 text-green-500" />;
      case 'in-progress':
        return <ClockIcon className="w-6 h-6 text-awlaGreen" />;
      case 'pending':
        return <ExclamationTriangleIcon className="w-6 h-6 text-gold" />;
      case 'rejected':
        return <XCircleIcon className="w-6 h-6 text-red-500" />;
      default:
        return <ClockIcon className="w-6 h-6 text-neutral" />;
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'resolved':
        return <span className="px-3 py-1 bg-green-100 text-green-800 text-xs font-medium rounded-full">Résolu</span>;
      case 'in-progress':
        return <span className="px-3 py-1 bg-awlaGreen/20 text-awlaGreen text-xs font-medium rounded-full">En cours</span>;
      case 'pending':
        return <span className="px-3 py-1 bg-gold/20 text-gold text-xs font-medium rounded-full">En attente</span>;
      case 'rejected':
        return <span className="px-3 py-1 bg-red-100 text-red-800 text-xs font-medium rounded-full">Rejeté</span>;
      default:
        return <span className="px-3 py-1 bg-gray-100 text-gray-800 text-xs font-medium rounded-full">Inconnu</span>;
    }
  };

  const getProgressSteps = (status: string) => {
    const steps = [
      { key: 'submitted', label: 'Soumise', completed: true },
      { key: 'analysis', label: 'Analyse', completed: status !== 'pending' },
      { key: 'negotiation', label: 'Négociation', completed: status === 'resolved' || status === 'rejected' },
      { key: 'resolution', label: 'Résolution', completed: status === 'resolved' }
    ];
    return steps;
  };

  return (
    <div className="space-y-6">
      {/* En-tête */}
      <div className="bg-white rounded-xl p-6 border border-awlaGreen/20 shadow-lg">
        <h2 className="text-2xl font-bold text-dark mb-2">Statut de vos réclamations</h2>
        <p className="text-neutral">Suivez l'avancement de vos dossiers en temps réel</p>
      </div>

      {/* Liste des réclamations */}
      <div className="space-y-4">
        {claims.map((claim) => (
          <div
            key={claim.id}
            className={`bg-white rounded-xl border-2 transition-all duration-300 cursor-pointer hover:shadow-lg ${
              selectedClaim?.id === claim.id
                ? 'border-awlaGreen shadow-lg'
                : 'border-light hover:border-awlaGreen/50'
            }`}
            onClick={() => setSelectedClaim(selectedClaim?.id === claim.id ? null : claim)}
          >
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  {getStatusIcon(claim.status)}
                  <div>
                    <h3 className="text-lg font-semibold text-dark">#{claim.code}</h3>
                    <p className="text-sm text-neutral">{claim.type} - {claim.insuranceCompany}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  {getStatusBadge(claim.status)}
                  <div className="text-right">
                    <p className="text-lg font-bold text-awlaGreen">{parseInt(claim.amount).toLocaleString()} MAD</p>
                    <p className="text-xs text-neutral">Créé le {new Date(claim.createdAt).toLocaleDateString('fr-FR')}</p>
                  </div>
                </div>
              </div>

              {/* Barre de progression */}
              <div className="mb-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-neutral">Progression</span>
                  <span className="text-sm font-medium text-awlaGreen">
                    {claim.status === 'resolved' ? '100%' : 
                     claim.status === 'in-progress' ? '66%' : 
                     claim.status === 'pending' ? '33%' : '0%'}
                  </span>
                </div>
                <div className="w-full bg-light rounded-full h-2">
                  <div
                    className="bg-gradient-to-r from-awlaGreen to-primary h-2 rounded-full transition-all duration-500"
                    style={{
                      width: claim.status === 'resolved' ? '100%' : 
                             claim.status === 'in-progress' ? '66%' : 
                             claim.status === 'pending' ? '33%' : '0%'
                    }}
                  />
                </div>
              </div>

              {/* Description courte */}
              <p className="text-neutral text-sm line-clamp-2">{claim.description}</p>
            </div>

            {/* Détails dépliables */}
            {selectedClaim?.id === claim.id && (
              <div className="border-t border-light p-6 bg-light/30">
                <div className="space-y-6">
                  {/* Étapes détaillées */}
                  <div>
                    <h4 className="font-semibold text-dark mb-4">Étapes du processus</h4>
                    <div className="space-y-3">
                      {getProgressSteps(claim.status).map((step, index) => (
                        <div key={step.key} className="flex items-center space-x-3">
                          <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                            step.completed 
                              ? 'bg-awlaGreen text-white' 
                              : 'bg-light border-2 border-neutral text-neutral'
                          }`}>
                            {step.completed ? (
                              <CheckCircleIcon className="w-5 h-5" />
                            ) : (
                              <span className="text-xs font-bold">{index + 1}</span>
                            )}
                          </div>
                          <span className={`font-medium ${
                            step.completed ? 'text-dark' : 'text-neutral'
                          }`}>
                            {step.label}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Informations détaillées */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h5 className="font-semibold text-dark mb-2">Informations générales</h5>
                      <div className="space-y-2 text-sm">
                        <div><strong>Type:</strong> {claim.type}</div>
                        <div><strong>Compagnie:</strong> {claim.insuranceCompany}</div>
                        <div><strong>Priorité:</strong> 
                          <span className={`ml-2 px-2 py-1 rounded-full text-xs ${
                            claim.priority === 'high' ? 'bg-red-100 text-red-800' :
                            claim.priority === 'medium' ? 'bg-gold/20 text-gold' :
                            'bg-blue-100 text-blue-800'
                          }`}>
                            {claim.priority === 'high' ? 'Haute' : 
                             claim.priority === 'medium' ? 'Moyenne' : 'Basse'}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h5 className="font-semibold text-dark mb-2">Dates importantes</h5>
                      <div className="space-y-2 text-sm">
                        <div><strong>Créé le:</strong> {new Date(claim.createdAt).toLocaleDateString('fr-FR')}</div>
                        <div><strong>Dernière MAJ:</strong> {new Date(claim.updatedAt).toLocaleDateString('fr-FR')}</div>
                      </div>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex gap-3 pt-4">
                    <button className="px-4 py-2 bg-awlaGreen text-dark font-medium rounded-lg hover:bg-dark hover:text-white transition-colors">
                      Voir les détails
                    </button>
                    <button className="px-4 py-2 border-2 border-awlaGreen text-awlaGreen font-medium rounded-lg hover:bg-awlaGreen hover:text-white transition-colors">
                      Contacter l'expert
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Message si aucune réclamation */}
      {claims.length === 0 && (
        <div className="bg-white rounded-xl p-12 border border-light text-center">
          <div className="w-16 h-16 bg-light rounded-full flex items-center justify-center mx-auto mb-4">
            <ExclamationTriangleIcon className="w-8 h-8 text-neutral" />
          </div>
          <h3 className="text-xl font-semibold text-dark mb-2">Aucune réclamation</h3>
          <p className="text-neutral mb-6">Vous n'avez pas encore soumis de réclamation.</p>
          <button className="px-6 py-3 bg-awlaGreen text-dark font-semibold rounded-lg hover:bg-dark hover:text-white transition-colors">
            Créer une réclamation
          </button>
        </div>
      )}
    </div>
  );
}
