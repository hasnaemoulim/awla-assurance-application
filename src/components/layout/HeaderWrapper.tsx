"use client";
import { usePathname } from 'next/navigation';
import Header from './Header';
import AdminHeader from './AdminHeader';
import ClientHeader from './ClientHeader';

export default function HeaderWrapper() {
  const pathname = usePathname();

  // Déterminer le type de page basé sur l'URL
  if (pathname.startsWith('/admin/dashboard')) {
    return <AdminHeader />;
  }
  
  if (pathname.startsWith('/client/dashboard')) {
    return <ClientHeader />;
  }
  
  
  
  // Header par défaut pour les pages publiques
  return <Header />;
}
