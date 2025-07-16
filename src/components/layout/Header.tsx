// src/components/layout/Header.tsx
"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const navItems = [
  { name: 'Accueil', href: '/' },
  { name: 'Réclamations', href: '/reclamation' },
  { name: 'Suivi', href: '/suivi' },
  { name: 'Partenaires', href: '/partenaires' },
  { name: 'À propos', href: '/a-propos' }
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-white/90 backdrop-blur-sm'
    }`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo adapté Awla */}
          <Link href="/" className="flex items-center space-x-4 group">
            <div className="flex-shrink-0">
              <Image
                src="/images/awla.png"
                alt="Logo Awla Assurances"
                width={70}
                height={70}
                className="rounded-xl object-contain"
                priority
              />
            </div>
            <div className="hidden sm:block">
              <div className="text-2xl font-bold text-awlaGreen group-hover:text-primary transition-colors">
                Awla Assurances
              </div>
              <div className="text-sm text-gold -mt-1">
                Expertise en défense des assurés
              </div>
            </div>
          </Link>

          {/* Navigation Desktop */}
          <div className="hidden lg:flex items-center space-x-1">
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

          {/* Boutons d'action adaptés - ROUTES CORRIGÉES */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link href="/auth/login">
              <button className="px-6 py-2.5 text-awlaGreen font-semibold border-2 border-awlaGreen rounded-lg hover:bg-awlaGreen hover:text-dark transition-all duration-200 bg-white">
                Se connecter
              </button>
            </Link>
            <Link href="/auth/register">
              <button className="px-6 py-2.5 bg-awlaGreen text-dark font-semibold rounded-lg hover:bg-dark hover:text-white transition-all duration-200 shadow-md hover:shadow-lg">
                S'inscrire
              </button>
            </Link>
          </div>

          {/* Menu mobile */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-md text-neutral hover:text-awlaGreen hover:bg-awlaGreen/10"
            aria-label="Ouvrir le menu"
          >
            {isMenuOpen ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
          </button>
        </div>

        {/* Menu mobile déroulant - ROUTES CORRIGÉES */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-awlaGreen/10 bg-white/95 backdrop-blur-md">
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
              <div className="mt-4 space-y-2">
                <Link href="/auth/login" onClick={() => setIsMenuOpen(false)}>
                  <button className="w-full px-4 py-2 text-awlaGreen font-semibold border-2 border-awlaGreen rounded-lg hover:bg-awlaGreen hover:text-dark bg-white">
                    Se connecter
                  </button>
                </Link>
                <Link href="/auth/register" onClick={() => setIsMenuOpen(false)}>
                  <button className="w-full px-4 py-2 bg-awlaGreen text-dark font-semibold rounded-lg hover:bg-dark hover:text-white">
                    S'inscrire
                  </button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
