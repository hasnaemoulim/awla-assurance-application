interface StatCardProps {
  title: string;
  value: string | number;
  icon: React.ReactNode;
  color: 'green' | 'blue' | 'gold' | 'red';
  change?: string;
}

export default function StatCard({ title, value, icon, color, change }: StatCardProps) {
  const colorClasses = {
    green: 'bg-awlaGreen/10 text-awlaGreen',
    blue: 'bg-primary/10 text-primary',
    gold: 'bg-gold/10 text-gold',
    red: 'bg-red-500/10 text-red-500'
  };

  return (
    <div className="bg-white rounded-xl p-6 shadow-md border border-light hover:shadow-lg transition-shadow">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-neutral text-sm font-medium">{title}</p>
          <p className="text-2xl font-bold text-dark mt-1">{value}</p>
          {change && (
            <p className={`text-sm mt-1 ${change.startsWith('+') ? 'text-awlaGreen' : 'text-red-500'}`}>
              {change}
            </p>
          )}
        </div>
        <div className={`p-3 rounded-lg ${colorClasses[color]}`}>
          {icon}
        </div>
      </div>
    </div>
  );
}
