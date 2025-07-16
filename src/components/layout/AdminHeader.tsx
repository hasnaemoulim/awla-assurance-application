"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Bars3Icon, XMarkIcon, BellIcon, UserCircleIcon, Cog6ToothIcon } from '@heroicons/react/24/outline';
import { getCurrentUser, logout } from '@/lib/auth';
import { User } from '@/types/auth';

export default function AdminHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    setUser(getCurrentUser());
  }, []);

  const navItems = [
    { name: 'Dashboard', href: '/admin/dashboard' },
    { name: 'Réclamations', href: '/admin/claims' },
    { name: 'Utilisateurs', href: '/admin/users' },
    { name: 'Statistiques', href: '/admin/stats' },
    { name: 'Paramètres', href: '/admin/settings' }
  ];

  return (
    <header className="bg-white border-b border-light shadow-sm sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo et titre */}
          <Link href="/admin/dashboard" className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-awlaGreen rounded-lg flex items-center justify-center">
              <span className="text-dark font-bold text-lg">A</span>
            </div>
            <div>
              <div className="text-lg font-bold text-dark">Awla Admin</div>
              <div className="text-xs text-neutral -mt-1">Panel d'administration</div>
            </div>
          </Link>

          {/* Navigation Desktop */}
          <div className="hidden lg:flex items-center space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-neutral hover:text-awlaGreen font-medium transition-colors duration-200 px-3 py-2 rounded-md hover:bg-awlaGreen/10"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Actions utilisateur */}
          <div className="hidden lg:flex items-center space-x-4">
            {/* Notifications */}
            <button className="relative p-2 text-neutral hover:text-awlaGreen hover:bg-awlaGreen/10 rounded-lg transition-colors">
              <BellIcon className="w-6 h-6" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>

            {/* Menu profil */}
            <div className="relative">
              <button
                onClick={() => setIsProfileOpen(!isProfileOpen)}
                className="flex items-center space-x-2 p-2 text-neutral hover:text-awlaGreen hover:bg-awlaGreen/10 rounded-lg transition-colors"
              >
                <UserCircleIcon className="w-6 h-6" />
                <span className="text-sm font-medium">{user?.firstName}</span>
              </button>

              {/* Dropdown profil */}
              {isProfileOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-light py-2">
                  <div className="px-4 py-2 border-b border-light">
                    <p className="text-sm font-medium text-dark">{user?.firstName} {user?.lastName}</p>
                    <p className="text-xs text-neutral">{user?.email}</p>
                  </div>
                  <Link href="/admin/profile" className="block px-4 py-2 text-sm text-neutral hover:bg-light transition-colors">
                    Mon profil
                  </Link>
                  <Link href="/admin/settings" className="block px-4 py-2 text-sm text-neutral hover:bg-light transition-colors">
                    Paramètres
                  </Link>
                  <hr className="my-2" />
                  <button
                    onClick={logout}
                    className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-light transition-colors"
                  >
                    Se déconnecter
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Menu mobile */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-md text-neutral hover:text-awlaGreen hover:bg-awlaGreen/10"
          >
            {isMenuOpen ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
          </button>
        </div>

        {/* Menu mobile déroulant */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-light bg-white">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 rounded-md text-base font-medium text-neutral hover:text-awlaGreen hover:bg-awlaGreen/10"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="border-t border-light mt-4 pt-4">
                <div className="px-3 py-2">
                  <p className="text-sm font-medium text-dark">{user?.firstName} {user?.lastName}</p>
                  <p className="text-xs text-neutral">{user?.email}</p>
                </div>
                <button
                  onClick={logout}
                  className="block w-full text-left px-3 py-2 text-sm text-red-600 hover:bg-light rounded-md"
                >
                  Se déconnecter
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
