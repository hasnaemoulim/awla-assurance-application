"use client";
import { useState } from 'react';
import { 
  HomeIcon, 
  DocumentTextIcon, 
  ClockIcon, 
  UserIcon, 
  Cog6ToothIcon,
  ArrowRightOnRectangleIcon,
  PlusIcon,
  ChartBarIcon,
  PhoneIcon
} from '@heroicons/react/24/outline';
import { logout, getCurrentUser } from '@/lib/auth';

interface ClientSidebarProps {
  currentPage?: string;
}

export default function ClientSidebar({ currentPage = 'dashboard' }: ClientSidebarProps) {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const user = getCurrentUser();

  const menuItems = [
    {
      id: 'dashboard',
      label: 'Tableau de bord',
      icon: <HomeIcon className="w-5 h-5" />,
      href: '/client/dashboard',
      badge: null
    },
    {
      id: 'claims',
      label: 'Mes réclamations',
      icon: <DocumentTextIcon className="w-5 h-5" />,
      href: '/client/claims',
      badge: '3'
    },
    {
      id: 'new-claim',
      label: 'Nouvelle réclamation',
      icon: <PlusIcon className="w-5 h-5" />,
      href: '/reclamation',
      badge: null,
      highlight: true
    },
    {
      id: 'tracking',
      label: 'Suivi en temps réel',
      icon: <ClockIcon className="w-5 h-5" />,
      href: '/client/tracking',
      badge: null
    },
    {
      id: 'reports',
      label: 'Mes rapports',
      icon: <ChartBarIcon className="w-5 h-5" />,
      href: '/client/reports',
      badge: null
    },
    {
      id: 'profile',
      label: 'Mon profil',
      icon: <UserIcon className="w-5 h-5" />,
      href: '/client/profile',
      badge: null
    }
  ];

  const bottomMenuItems = [
    {
      id: 'support',
      label: 'Support',
      icon: <PhoneIcon className="w-5 h-5" />,
      href: '/client/support',
      badge: null
    },
    {
      id: 'settings',
      label: 'Paramètres',
      icon: <Cog6ToothIcon className="w-5 h-5" />,
      href: '/client/settings',
      badge: null
    }
  ];

  const handleLogout = () => {
    if (confirm('Êtes-vous sûr de vouloir vous déconnecter ?')) {
      logout();
    }
  };

  return (
    <div className={`bg-white border-r border-light h-screen flex flex-col transition-all duration-300 ${
      isCollapsed ? 'w-16' : 'w-64'
    }`}>
      {/* Header */}
      <div className="p-6 border-b border-light">
        <div className="flex items-center justify-between">
          {!isCollapsed && (
            <div>
              <h2 className="text-xl font-bold text-awlaGreen">Awla Assurances</h2>
              <p className="text-sm text-neutral">Espace Client</p>
            </div>
          )}
          <button
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="p-2 rounded-lg hover:bg-light transition-colors"
          >
            <svg className={`w-5 h-5 text-neutral transition-transform ${isCollapsed ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
        </div>
      </div>

      {/* Profil utilisateur */}
      <div className="p-4 border-b border-light">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-awlaGreen/10 rounded-full flex items-center justify-center">
            <UserIcon className="w-6 h-6 text-awlaGreen" />
          </div>
          {!isCollapsed && (
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-dark truncate">
                {user?.firstName} {user?.lastName}
              </p>
              <p className="text-xs text-neutral truncate">{user?.email}</p>
            </div>
          )}
        </div>
      </div>

      {/* Menu principal */}
      <nav className="flex-1 p-4">
        <div className="space-y-2">
          {menuItems.map((item) => (
            <a
              key={item.id}
              href={item.href}
              className={`flex items-center space-x-3 px-3 py-3 rounded-lg transition-all duration-200 group ${
                currentPage === item.id
                  ? 'bg-awlaGreen text-white shadow-lg'
                  : item.highlight
                    ? 'bg-awlaGreen/10 text-awlaGreen hover:bg-awlaGreen hover:text-white'
                    : 'text-neutral hover:bg-light hover:text-dark'
              }`}
            >
              <div className="flex-shrink-0">{item.icon}</div>
              {!isCollapsed && (
                <>
                  <span className="font-medium flex-1">{item.label}</span>
                  {item.badge && (
                    <span className={`px-2 py-1 text-xs rounded-full ${
                      currentPage === item.id
                        ? 'bg-white text-awlaGreen'
                        : 'bg-awlaGreen text-white'
                    }`}>
                      {item.badge}
                    </span>
                  )}
                </>
              )}
            </a>
          ))}
        </div>
      </nav>

      {/* Menu du bas */}
      <div className="p-4 border-t border-light space-y-2">
        {bottomMenuItems.map((item) => (
          <a
            key={item.id}
            href={item.href}
            className={`flex items-center space-x-3 px-3 py-3 rounded-lg transition-all duration-200 ${
              currentPage === item.id
                ? 'bg-awlaGreen text-white'
                : 'text-neutral hover:bg-light hover:text-dark'
            }`}
          >
            <div className="flex-shrink-0">{item.icon}</div>
            {!isCollapsed && <span className="font-medium">{item.label}</span>}
          </a>
        ))}
        
        {/* Bouton de déconnexion */}
        <button
          onClick={handleLogout}
          className="w-full flex items-center space-x-3 px-3 py-3 rounded-lg text-red-600 hover:bg-red-50 transition-all duration-200"
        >
          <ArrowRightOnRectangleIcon className="w-5 h-5 flex-shrink-0" />
          {!isCollapsed && <span className="font-medium">Déconnexion</span>}
        </button>
      </div>
    </div>
  );
}
