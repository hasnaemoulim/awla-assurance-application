"use client";
import { 
  DocumentTextIcon, 
  ClockIcon, 
  CheckCircleIcon, 
  XCircleIcon,
  BanknotesIcon,
  ArrowTrendingUpIcon
} from '@heroicons/react/24/outline';

interface StatsCardsProps {
  stats: {
    total: number;
    pending: number;
    inProgress: number;
    resolved: number;
    rejected: number;
    totalAmount: number;
    resolvedAmount: number;
    successRate: number;
  };
}

export default function StatsCards({ stats }: StatsCardsProps) {
  const cards = [
    {
      title: 'Total Réclamations',
      value: stats.total,
      icon: DocumentTextIcon,
      color: 'text-primary',
      bgColor: 'bg-primary/10'
    },
    {
      title: 'En attente',
      value: stats.pending,
      icon: ClockIcon,
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-100'
    },
    {
      title: 'Résolues',
      value: stats.resolved,
      icon: CheckCircleIcon,
      color: 'text-green-600',
      bgColor: 'bg-green-100'
    },
    {
      title: 'Rejetées',
      value: stats.rejected,
      icon: XCircleIcon,
      color: 'text-red-600',
      bgColor: 'bg-red-100'
    },
    {
      title: 'Montant total',
      value: `${(stats.totalAmount / 1000).toFixed(0)}K MAD`,
      icon: BanknotesIcon,
      color: 'text-awlaGreen',
      bgColor: 'bg-awlaGreen/10'
    },
    {
      title: 'Taux de succès',
      value: `${stats.successRate}%`,
      icon: ArrowTrendingUpIcon,
      color: 'text-gold',
      bgColor: 'bg-gold/20'
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
      {cards.map((card, index) => (
        <div
          key={index}
          className="bg-white rounded-2xl p-6 border border-light shadow-sm hover:shadow-md transition-shadow"
        >
          <div className="flex items-center justify-between mb-4">
            <div className={`w-12 h-12 ${card.bgColor} rounded-xl flex items-center justify-center`}>
              <card.icon className={`w-6 h-6 ${card.color}`} />
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold text-dark mb-1">
              {card.value}
            </h3>
            <p className="text-sm text-neutral">
              {card.title}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
