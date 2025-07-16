interface BadgeProps {
  status?: 'pending' | 'in-progress' | 'resolved' | 'rejected';
  priority?: 'low' | 'medium' | 'high';
}

export default function Badge({ status, priority }: BadgeProps) {
  if (status) {
    const statusConfig = {
      pending: {
        bg: 'bg-yellow-100',
        text: 'text-yellow-800',
        label: 'En attente'
      },
      'in-progress': {
        bg: 'bg-blue-100',
        text: 'text-blue-800',
        label: 'En cours'
      },
      resolved: {
        bg: 'bg-green-100',
        text: 'text-green-800',
        label: 'Résolue'
      },
      rejected: {
        bg: 'bg-red-100',
        text: 'text-red-800',
        label: 'Rejetée'
      }
    };

    const config = statusConfig[status];
    
    return (
      <span className={`inline-flex px-3 py-1 rounded-full text-xs font-medium ${config.bg} ${config.text}`}>
        {config.label}
      </span>
    );
  }

  if (priority) {
    const priorityConfig = {
      low: {
        bg: 'bg-gray-100',
        text: 'text-gray-800',
        label: 'Faible'
      },
      medium: {
        bg: 'bg-orange-100',
        text: 'text-orange-800',
        label: 'Moyenne'
      },
      high: {
        bg: 'bg-red-100',
        text: 'text-red-800',
        label: 'Élevée'
      }
    };

    const config = priorityConfig[priority];
    
    return (
      <span className={`inline-flex px-3 py-1 rounded-full text-xs font-medium ${config.bg} ${config.text}`}>
        {config.label}
      </span>
    );
  }

  return null;
}
