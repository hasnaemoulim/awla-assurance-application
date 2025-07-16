import { Claim } from '@/types/dashboard';
import Badge from './Badge';

interface ClaimCardProps {
  claim: Claim;
  showUser?: boolean;
}

export default function ClaimCard({ claim, showUser = false }: ClaimCardProps) {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('fr-FR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    });
  };

  return (
    <div className="bg-white rounded-xl p-6 shadow-md border border-light hover:shadow-lg transition-shadow">
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="text-lg font-semibold text-dark">{claim.type}</h3>
          <p className="text-neutral text-sm">#{claim.id}</p>
        </div>
        <Badge status={claim.status} />
      </div>
      
      <p className="text-neutral mb-4 line-clamp-2">{claim.description}</p>
      
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-neutral">Montant réclamé</p>
          <p className="text-xl font-bold text-awlaGreen">{claim.amount.toLocaleString()} MAD</p>
        </div>
        <div className="text-right">
          <p className="text-sm text-neutral">Créé le</p>
          <p className="text-sm font-medium text-dark">{formatDate(claim.createdAt)}</p>
        </div>
      </div>
    </div>
  );
}
