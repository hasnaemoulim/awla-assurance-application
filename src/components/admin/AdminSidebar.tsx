"use client";
import { logout } from '@/lib/auth';
import { 
  HomeIcon, 
  DocumentTextIcon, 
  ChartBarIcon, 
  UsersIcon, 
  CogIcon,
  ArrowRightOnRectangleIcon
} from '@heroicons/react/24/outline';
import { User } from '@/types/auth';

interface AdminSidebarProps {
  user: User;
}

export default function AdminSidebar({ user }: AdminSidebarProps) {
  const menuItems = [
    { icon: HomeIcon, label: 'Tableau de bord', href: '/admin/dashboard', active: true },
    { icon: DocumentTextIcon, label: 'Réclamations', href: '/admin/claims' },
    { icon: ChartBarIcon, label: 'Statistiques', href: '/admin/stats' },
    { icon: UsersIcon, label: 'Utilisateurs', href: '/admin/users' },
    { icon: CogIcon, label: 'Paramètres', href: '/admin/settings' }
  ];

  return (
    <aside className="fixed left-0 top-0 h-full w-64 bg-white border-r border-light shadow-lg z-40">
      <div className="p-6">
        {/* Logo */}
        <div className="flex items-center space-x-3 mb-8">
          <div className="w-10 h-10 bg-awlaGreen rounded-xl flex items-center justify-center">
            <span className="text-white font-bold">A</span>
          </div>
          <div>
            <h2 className="text-lg font-bold text-dark">Awla Admin</h2>
            <p className="text-xs text-neutral">Dashboard</p>
          </div>
        </div>

        {/* Navigation */}
        <nav className="space-y-2">
          {menuItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={`flex items-center space-x-3 p-3 rounded-xl transition-colors ${
                item.active
                  ? 'bg-awlaGreen text-white'
                  : 'text-neutral hover:bg-light hover:text-awlaGreen'
              }`}
            >
              <item.icon className="w-5 h-5" />
              <span className="font-medium">{item.label}</span>
            </a>
          ))}
        </nav>
      </div>

      {/* Profil utilisateur */}
      <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-light">
        <div className="flex items-center space-x-3 mb-4">
          <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
            <span className="text-primary font-semibold">
              {user.firstName[0]}{user.lastName[0]}
            </span>
          </div>
          <div className="flex-1">
            <p className="text-sm font-semibold text-dark">
              {user.firstName} {user.lastName}
            </p>
            <p className="text-xs text-neutral">Administrateur</p>
          </div>
        </div>
        
        <button
          onClick={logout}
          className="flex items-center space-x-2 text-neutral hover:text-red-500 transition-colors"
        >
          <ArrowRightOnRectangleIcon className="w-5 h-5" />
          <span className="text-sm">Déconnexion</span>
        </button>
      </div>
    </aside>
  );
}
